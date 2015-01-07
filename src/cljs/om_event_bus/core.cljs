;; # Introduction
;; Use this library whenever you need Om components to send events either down to components nested within them or up to their parents.
;;
;; Let's say you have three om components nested inside each other:
;;
;; ![Three nested components](event_bus_1.png)
;;
;; When a component triggers an event, it can send it in two possible directions:
;;
;; - it can **bubble** it to its parents all the way to the top, or
;; - it can **trickle** an event to its children.
;;
;; In om-event-bus each direction is handled by a separate event bus. Components connect to an event bus to handle events passing through it.
;;
;; ![Bubbling vs. trickling](event_bus_2.png)
;;
(ns om-event-bus.core
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :as async]
            [om-event-bus.impl :as impl]
            [om-event-bus.descriptor :as d])
  (:require-macros [cljs.core.async.macros :as async]
                   [om-event-bus.impl :as impl]))

; =============================================================================

(declare init-event-bus! shutdown-event-bus! trace root* default-protocols)
(def ^:dynamic ^:private *parent* nil)

;; ### Replacements for om.core/root

;; First, we need a replacement for om.core/root that will inject event buses into every component created by our app.
;;
;; There are three versions of the replacement. Let's start with one that adds most functionality.

(defn root<>
  "The `root<>` function adds support both for bubbling (child to parents) and trickling (parent to children) events.

  > **Note**
  >
  > The arity 4 version lets you specify a channel if you also want to handle events outside of component hierarchy.
  > If you pass a channel to receive events through, you **MUST** consume events.
  >
  > See [this example](https://github.com/bilus/om-event-bus/blob/master/examples/go_loop/src/core.cljs) ([demo](http://bilus.github.io/om-event-bus/examples/go_loop/index.html))."
  ([f value options & [out-event-ch]]
    (root* f
           value
           options
           out-event-ch
           {::bubbling (impl/event-bus (impl/bubbling-router))
            ::trickling (impl/event-bus (impl/trickling-router))}
           default-protocols)))

;; The other two versions each create a single bus for one direction only, either bubbling or trickling.

(defn root>
  "Use `root>` instead of om.core/root to add support for sending events from child components to parent components only (bubbling).

  > **Note**
  >
  > Similarly too `root<>`, the arity 4 version lets you specify a channel if you also want to handle events outside of
  > component hierarchy and if you pass the channel you **MUST** consume events."
  ([f value options]
    (root> f value options nil))
  ([f value options out-event-ch]
    (root* f
           value
           options
           out-event-ch
           {::bubbling (impl/event-bus (impl/bubbling-router))}
           default-protocols)))

(defn root<
  "Use `root<` instead of om.core/root to add support for sending events from parent components to child components only (trickling)."
  ([f value options]
    (root* f
           value
           options
           nil
           {::trickling (impl/event-bus (impl/trickling-router))}
           default-protocols)))

;; Use these functions anywhere you would normally use om.core/root. Example:
;;
;; <pre><code>(**event-bus/root<>**
;;              (fn [app owner]
;;                (reify om/IRender
;;                  (render [_]
;;                    (dom/h1 nil (:text app)))))
;;              app-state
;;              {:target (. js/document (getElementById \"app\"))})
;;

; =============================================================================
(declare trigger*)

;; ### Triggering events.

;; To trigger an event simply call one of the functions below, passing `owner` and any data as `event` (a map is probably
;; the best choice but is not required).

;; There are two functions to either bubble or trickle events.

(defn bubble
  "The `bubble` function sends an event from `owner` up to its parents."
  [owner event]
  (trigger* owner ::bubbling event))

(defn trickle
  [owner event]
  (trigger* owner ::trickling event))

;; Let's also define a function that sends in the default direction (depends on one's taste but I've chosen sending
;; from children to parents as the default.)

(defn trigger
  "The `trigger` function simply bubbles an event."
  [owner event]
  (bubble owner event))

;; Here's an example usage:
;;
;; <pre><code>(defn child-view
;;              [app owner]
;;              (reify
;;                om/IRender
;;                (render [_]
;;                  (dom/div nil (dom/button
;;                                 #js {:onClick #(**event-bus/bubble** owner \"Hi there!\")}
;;                                 \"Click me!\")))))
;; </pre></code>

; =============================================================================
;; ### Handling events.

(defprotocol IGotEvent
  "Reify `IGotEvent` in components that are interested in both bubbling and trickling events.

  Example:
  <pre><code>(defn parent-view
      [app owner]
      (reify
        **event-bus/IGotEvent**
        (**got-event [_ event]**
          ... do something about the event ...)
        om/IRender
        ...
  </pre></code>"
  (got-event [_ event]))

(defprotocol IGotBubblingEvent
  "The `IGotBubblingEvent`, when reified in a component, will handle bubbling events."
  (got-bubbling-event [_ event]))

(defprotocol IGotTricklingEvent
  "This protocol, `IGotTricklingEvent` should be reified to handle trickling events."
  (got-trickling-event [_ event]))

;; There's one more protocol useful when you want to define a function transforming events that pass a particular
;; component (via xforms) or to configure the event bus.

(defprotocol IInitEventBus
  "Use `IInitEventBus` to override event bus options. Return an option hash to be merged into `default-config`."
  (init-event-bus [_]))

;; Here are the configuration options you can use along with their default values:
;;
;; * `:xform` - this optional xform will be applied to all passing through the component, e.g.
;; <pre><code> (map (fn [event]
;;        (merge event {:extra-info "abc"})))
;; </pre></code>
;; * `:buf-or-n` - buffer for internally created channels

(def default-config {:xform    nil
                     :buf-or-n 1})

;; This is everything you should need to use the library but you are welcome to the internals as well. :)

;; ### Looking for feedback
;; Please make sure to send your critique to [gyamtso@gmail.com](mailto:gyamtso@gmail.com) or tweet me **@martinbilski**.

; =============================================================================

(declare build-buses find-handler compose-handlers)

;; # Internals

;; ### Implementation of om/root replacements.

(defn root*
  "Here's what the `root*` function does:

  1. It intercepts calls to build (via `:instrument`) to pass on event buses from parent components to their
  children (via local state).

  2. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
  and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.

  3. It passes the custom descriptor to `om.core/build*`."
  [f value options out-event-ch event-buses protocols]
  (let [descriptor (d/make-descriptor {:componentWillMount
                                       (fn [this super]
                                         (init-event-bus! this protocols)
                                         (super))
                                       :componentWillUnmount
                                       (fn [this super]
                                         (shutdown-event-bus! this)
                                         (super))
                                       :render
                                       (fn [this super]
                                         (binding [*parent* this]
                                           (super)))})]
    (when out-event-ch
      (if-let [bubbling-bus (::bubbling event-buses)]
        (impl/tap bubbling-bus out-event-ch)
        (throw (js/Error. "Bubbling event bus not available. Make sure to use root> or root<>."))))
    (om/root f value
             (merge options {:instrument (fn [f x m]
                                           (let [parent-buses (or
                                                                (and *parent* (om/get-state *parent* ::event-buses))
                                                                event-buses)]
                                             (om/build* f x (-> m
                                                                (update-in [:init-state] merge {::event-buses parent-buses})
                                                                (merge {:descriptor descriptor})))))}))))

;; As you've learned above there are three protocols corresponding to trickling and bubbling events and to "all" events
;; regardless of their direciton. Using `root*` you can pass your own custom interfaces and event buses.

(def default-protocols
  {::all #(when (satisfies? IGotEvent %)
           got-event)
   ::bubbling #(when (satisfies? IGotBubblingEvent %)
                got-bubbling-event)
   ::trickling #(when (satisfies? IGotTricklingEvent %)
                 got-trickling-event)})


;; ### Event bus setup details.

(defn- init-event-bus!
  "The `init-event-bus!` function adds support for triggering events and, if the component reified any of the supported
   protocols, the code to handle events.

   This function is called from when a component mounts (see `root*`). It sets ::event-buses in the components local
   state to a map containing one or more event buses."
  [this protocols]
  (let [c (om/children this)
        {:keys [xform buf-or-n]} (merge default-config
                                        (when (satisfies? IInitEventBus c)
                                          (init-event-bus c)))]
    (impl/with-options {:buf-or-n buf-or-n}
                       (om/set-state! this
                                     ::event-buses
                                     (build-buses this xform protocols)))))

(defn build-buses
  "What the `build-buses` function does does is it takes the event bus from its parent component and extends it, either
  by forking it to handle events or by creating a 'leg' of the bus with minimal overhead if the component reifies none
  of the compatible event-handling protocols.

  To create a handler it composes potential handlers for supported protocols. Both `catch-all-handler` and the result
  of the application of `find-handler` can return nil but `compose-handlers` will take care of that."
  [this xform protocols]
  (let [c (om/children this)
        catch-all-handler (find-handler c ::all protocols)]
    (into {}
          (for [[k bus] (om/get-state this ::event-buses)]
            (let [handler (compose-handlers catch-all-handler (find-handler c k protocols))]
              [k (if handler
                   (impl/add-fork bus handler xform)
                   (impl/add-leg bus xform))])))))

(defn- find-handler
  "The `find-handler` function looks up a protocol builder function in `protocol` using `bus-key` as, well,
  the key (for instance, `::bubbling`) and, if one is found, binds it to a component resulting in an event handling function.
  If the protocol isn't implemented by the `component`, the function returns nil."
  [component bus-key protocols]
  (when-let [handler-fn ((bus-key protocols) component)]
    (partial handler-fn component)))

(defn- compose-handlers
  "To handle possible non-existent handlers (a.k.a. nils) this function returns either:

   - an event handler calling one of more event-handing functions in `handlers` if any of the handlers is not `nil`, or
   - nil (if all `handlers` are `nil`)."
  [& handlers]
  (when-let [funs (not-empty (remove nil? handlers))]
    (fn [event]
      (doseq [f funs]
        (f event)))))

;; ### Event bus shutdown.
;;
;; When a component unmounts, event bus needs to shut down by closing all channels, terminating go loops etc.

(defn- shutdown-event-bus!
  "This function shuts down event bus for `this` component. It simply calls `shutdown` on the event bus set up in
  `init-event-bus!` above."
  [this]
  (doseq [[_ bus] (om/get-state this ::event-buses)]
    (impl/shutdown bus))
  (om/set-state! this ::event-buses nil))                  ; TODO: Set each to nil-event-bus reporting meaningful errors.

;; ### Event triggering details.

(defn trigger*
  "The `trigger*` function triggers an `event` for a specific component (`owner`) and a bus identified by `event-bus-key`
  (e.g. ::bubbling).

  It simply looks up the event bus in ::event-buses local state and uses it to trigger an event."
  [owner event-bus-key event]
  (let [event-bus (event-bus-key (om/get-state owner ::event-buses))]
    (impl/trigger event-bus event))
  nil)  ; Avoid the following React.js warning: "Returning `false` from an event handler is deprecated
        ; and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(),
        ; as appropriate."

