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
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :as async]))

(declare make-descriptor init-event-bus! shutdown-event-bus! trace)

; =============================================================================
;; ### Protocols

(defprotocol IGotEvent
  "* Event handling protocol.
  Use it in your components if you're interested in handling events from children."
  (got-event [_ event]))

(defprotocol IInitEventBus
  "* (Advanced) Configuration protocol.
  Use it in your component to override event bus options. Return an option hash to be merged into `default-config`."
  (init-event-bus [_]))

;; Here are the configuration options you can use along with their default values:
;;
;; * `:xform` - this optional xform will be applied to all events sent downstream, e.g.
;; <pre><code> (map (fn [event]
;;        (merge event {:extra-info "abc"})))
;; </pre></code>
;; * `:buf-or-n` - buffer for internally created channels

(def default-config {:xform    nil
                     :buf-or-n 1})

; =============================================================================
;; ### Replacement for om.core/root

(def ^:dynamic ^:private *parent* nil)

(defn root>
  "Use `root>` instead of om.core/root to add support for event bus functionality to all components.

  The arity 4 version lets you specify the channel if you also want to handle events outside of component hierarchy.

  **IMPORTANT:** If you pass your own event bus channel, you **MUST** consume events.

  What the `root>` function does is in the essence two things:

  1. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
  and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.

  2. It intercepts calls to build (via `:instrument`) to pass on event bus channels from parent components to their
  children (via local state)."
  ([f value options]
    (let [event-bus (async/chan 1)]
      (root> f value options event-bus)
      ;; Consume events to make sure async/mult delivers to all taps.
      (async/go-loop []
                     (let [x (<! event-bus)]
                       (when x (recur))))))
  ([f value options event-bus]
    (om/root f value
             (merge options {:descriptor (make-descriptor {:componentWillMount
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
                                                               (super)))})
                             :instrument (fn [f x m]
                                           (let [parent-bus (or
                                                              (and *parent* (om/get-state *parent* ::event-bus))
                                                              event-bus)]
                                             (om/build* f x (update-in m [:init-state] merge {::event-bus parent-bus}))))}))))

; =============================================================================
;; ### Triggering events.

(defn trigger
  "This function sends an event from the component down through its parent components.

  Note that `event` can be any data structure, there are no restrictions in this respect though for future compatibility,
  a map is recommended."
  [owner event]
  (let [trigger-fn (om/get-state owner ::trigger-fn)]
    (trigger-fn event))
  nil)  ; Avoid the following React.js warning: "Returning `false` from an event handler is deprecated
        ; and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(),
        ; as appropriate."

;; This is everything you should need to use the library but you are welcome to the internals as well. :)

;; ### Looking for feedback
;; Please make sure to send your critique to [gyamtso@gmail.com](mailto:gyamtso@gmail.com) or tweet me **@martinbilski**.


(declare maybe-apply-xform)

; =============================================================================
;; # Internals

;; ### Event bus setup

(defn- init-event-bus!
  "This function adds support for triggering events and, if the component reified IGotEvent, support for handling events
   from child components.

   It is called from when a component mounts (see `root>` above).

   What it does is it takes the event bus from its parent component (`downstream`) and using `core.async/mult`
   it taps into it to fork it into two branches: `branch` this component may use to handle events and
   `upstream` to pass on to child components (see `root>` above).

   It does sets the local state:
   ::trigger-fn  -  function that triggers an event;
   ::event-bus   -  core.async channel to be passed to the component's children (see `root>` above).

   **IMPORTANT:** Do not use the local state values directly; they are for internal use only.

   Please note that this mult/tap magic happens only if the component reifies the `IGotEvent` protocol and, to some
   extend, for `IInitEventBus` protocol as well. For components that don't care about events, overhead is minimal."
  [this]
  (trace "Initializing event bus for" (om/id this))
  (let [downstream (om/get-state this ::event-bus)
        c (om/children this)
        {:keys [xform buf-or-n]} (merge default-config
                                        (when (satisfies? IInitEventBus c)
                                          (or (init-event-bus c) {})))]
    (om/set-state! this ::trigger-fn (fn [event]
                                       (async/put! downstream (maybe-apply-xform xform event))))
    (when (or (satisfies? IGotEvent c) xform)
      (let [upstream (async/chan buf-or-n xform)
            branch (async/chan buf-or-n)
            fork (async/mult upstream)]
        (om/set-state! this ::close-fn (fn []
                                         (async/untap-all fork)
                                         (async/close! upstream)
                                         (async/close! branch)))
        (om/set-state! this ::event-bus upstream)
        (async/tap fork downstream)
        (when (satisfies? IGotEvent c)
          (async/tap fork branch)
          (async/go-loop []
                         (let [[event ch] (async/alts! [branch (async/timeout 5000)])] ;; TODO: Remove this code.
                           (if event
                             (do
                               (got-event c event)
                               (recur))
                             (when (not= ch branch)
                               (trace (om/id this) "is listening...")
                               (recur))))))))))

(defn- shutdown-event-bus!
  "This function mainly shuts down event bus channels for this component.
   It simply calls `::close-fn` set up in `init-event-bus!` above. This also terminates `go-loop` handling events."
  [this]
  (om/set-state! this ::trigger-fn #(throw (js/Error. "Event bus has already been shut down.")))
  (let [c (om/children this)
        close-fn (om/get-state this ::close-fn)]
    (when (satisfies? IGotEvent c)
      (trace "Shutting down event bus for" (om/id this))
      (close-fn))))

(defn- maybe-apply-xform
  "For an xform it returns the result of applying xform to an event.
  If xform is nil it returns unmodified event."
  [xform event]
  (if xform
    (first (reduce (xform conj) [] [event]))
    event))

; =============================================================================
;; ### Custom om component descriptor

(defn- around-method
  "Overrides a pure method by wrapping it in f."
  [method methods f]
  (let [prev-method (method methods)]
    (-> methods
        (assoc method #(this-as this
                                (do
                                   (f this (fn []
                                             (.call prev-method this)))))))))

(defn- extend-pure-methods
  "Given pure methods and a map of overrides, it extends pure methods with new lifecycle methods.

  Example:

  <pre><code>
  (extend-pure-methods
    {:render (fn [this super]
                ;; Do something.
                (super))}) ;; Call the original method.
  </pre></code>

  You can also specify a map of pure methods as the first argument."
  ([new-methods]
    (extend-pure-methods om/pure-methods new-methods))
  ([methods new-methods]
    (loop [methods' methods [[new-method-name new-method-fn] & new-methods'] (seq new-methods)]
      (if new-method-name
        (recur (around-method new-method-name methods' new-method-fn) new-methods')
        methods'))))

(defn- make-descriptor
  "Creates a custom descriptor with support for an event bus."
  [new-methods]
  (let [methods (extend-pure-methods new-methods)
        descriptor (om/specify-state-methods! (clj->js methods))]
    descriptor))

;; ### Debugging

(defn trace
  "Uncomment this to get status information printed to JS console.

  Note: Uses println."
  [& args]
  #_(apply println args))