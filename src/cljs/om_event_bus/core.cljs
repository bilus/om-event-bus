;; # Introduction
;; Use this library whenever you need your Om components to communicate with their parent components.
;;
;; ![High-level overview](event-bus.png)
;;
;; There are three key things you need to learn about in order to start using this library in your Om project: protocols,
;; core.om/root replacement and the trigger function.
;;
;; Start by requiring `om-event-bus-core` in your module's ns declaration.
;;
(ns om-event-bus.core
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :as async]
            [om-event-bus.impl :as impl]
            [om-event-bus.descriptor :as d])
  (:require-macros [cljs.core.async.macros :as async]
                   [om-event-bus.impl :as impl]))

(declare init-event-bus! shutdown-event-bus! trace root*)

; =============================================================================
;; ### Protocols

(defprotocol IGotEvent
  "* Event handling protocol.
  Use it in your components if you're interested in handling events from children."
  (got-event [_ event]))

(defprotocol IGotBubblingEvent
  (got-bubbling-event [_ event]))

(defprotocol IGotTricklingEvent
  (got-trickling-event [_ event]))

(defprotocol IInitEventBus
  "* (Advanced) Configuration protocol.
  Use it in your component to override event bus options. Return an option hash to be merged into `default-config`."
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

; =============================================================================
;; ### Replacement for om.core/root

(def ^:dynamic ^:private *parent* nil)

(defn root<>
  "Use `root<>` instead of om.core/root to add support for sending events to parent components and to child components.

  The arity 4 version lets you specify a channel if you also want to handle events outside of component hierarchy.

  **IMPORTANT:** If you pass a channel to receive events through, you **MUST** consume events."
  ([f value options & [out-event-ch]]
    (root* f
           value
           options
           out-event-ch
           {::bubbling (impl/event-bus (impl/bubbling-router))
            ::trickling (impl/event-bus (impl/trickling-router))})))

(defn root>
  "Use `root>` instead of om.core/root to add support for sending events from child components to parent components only.

  The arity 4 version lets you specify a channel if you also want to handle events outside of component hierarchy.

  **IMPORTANT:** If you pass a channel to receive events through, you **MUST** consume events."
  ([f value options]
    (root> f value options nil))
  ([f value options out-event-ch]
    (root* f
           value
           options
           out-event-ch
           {::bubbling (impl/event-bus (impl/bubbling-router))})))

(defn root<
  "Use `root>` instead of om.core/root to add support for sending events from parent components to child components only."
  ([f value options]
    (root* f
           value
           options
           nil
           {::trickling (impl/event-bus (impl/trickling-router))})))

; =============================================================================
;; ### Triggering events.

(declare trigger*)

(defn bubble
  "This function sends an event from the component up through its parent components.

  Note that `event` can be any data structure, there are no restrictions in this respect though for future compatibility,
  a map is recommended."
  [owner event]
  (trigger* owner ::bubbling event))

(defn trickle
  [owner event]
  (trigger* owner ::trickling event))

(defn trigger
  [owner event]
  (bubble owner event))

;; This is everything you should need to use the library but you are welcome to the internals as well. :)

;; ### Looking for feedback
;; Please make sure to send your critique to [gyamtso@gmail.com](mailto:gyamtso@gmail.com) or tweet me **@martinbilski**.


; =============================================================================
;; # Internals

;; ### Implementation of om/root replacements.

(defn root*
  "Here's what the `root*` function does:

  1. It intercepts calls to build (via `:instrument`) to pass on event buses from parent components to their
  children (via local state).

  2. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
  and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.

  3. It passes the custom descriptor to `om.core/build*`."
  [f value options out-event-ch event-buses]
  (let [descriptor (d/make-descriptor {:componentWillMount
                                       (fn [this super]
                                         (init-event-bus! this)
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

;; ### Event triggering

(defn trigger*
  [owner event-bus-key event]
  (let [event-bus (event-bus-key (om/get-state owner ::event-buses))]
    (impl/trigger event-bus event))
  nil)  ; Avoid the following React.js warning: "Returning `false` from an event handler is deprecated
        ; and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(),
        ; as appropriate."

;; ### Event bus setup

(declare find-handler compose-handlers)

(defn- init-event-bus!
  "This function adds support for triggering events and, if the component reified IGotEvent, support for handling events
   from child components.

   It is called from when a component mounts (see `root>` above).

   What it does is it takes the event bus from its parent component (`down`) and extends it, either by forking it
   to handle events (if the component reifies `IGotEvent`) or by creating a 'leg' of the bus with minimal overhead.

   It sets local state - ::event-buses.

   This mult/tap magic happens only if the component reifies the `IGotEvent` protocol and, to some
   extend, for `IInitEventBus` protocol as well. For components that don't care about events, overhead is minimal."
  [this]
  (let [c (om/children this)
        {:keys [xform buf-or-n]} (merge default-config
                                        (when (satisfies? IInitEventBus c)
                                          (init-event-bus c)))
        catch-all-handler (find-handler c ::all)]
    (impl/with-options {:buf-or-n buf-or-n}
                       (om/set-state! this
                                      ::event-buses
                                      (into {}
                                            (for [[k bus] (om/get-state this ::event-buses)]
                                              (let [handler (compose-handlers catch-all-handler (find-handler c k))]
                                                [k (if handler
                                                     (impl/add-fork bus handler xform)
                                                     (impl/add-leg bus xform))])))))))

(defn- compose-handlers
  [& handlers]
  (when-let [funs (not-empty (remove nil? handlers))]
    (fn [event]
      (doseq [f funs]
        (f event)))))

(defn- find-handler
  [component bus-key]
  ; Protocols are hard-coded because satisfies? in ClojureScript is a macro and requires a protocol name as an argument
  ; and passing a var doesn't work.
  (case bus-key
    ::all  (when (satisfies? IGotEvent component)
             (partial got-event component))
    ::bubbling (when (satisfies? IGotBubblingEvent component)
                 (partial got-bubbling-event component))
    ::trickling (when (satisfies? IGotTricklingEvent component)
                  (partial got-trickling-event component))
    nil))

(defn- shutdown-event-bus!
  "This function mainly shuts down event bus for this component.
   It simply calls `shutdown` on the event bus set up in `init-event-bus!` above.
   This terminates the go loop handling events."
  [this]
  (doseq [[_ bus] (om/get-state this ::event-buses)]
    (impl/shutdown bus))
  (om/set-state! this ::event-buses nil))                  ; TODO: Set each to nil-event-bus reporting meaningful errors.
