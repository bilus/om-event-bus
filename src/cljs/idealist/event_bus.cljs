(ns idealist.event-bus
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :as async]))

;; =============================================================================

(def ^:dynamic ^:private *parent*)

;; =============================================================================
;; Event handling protocol. Use it in your components if you're interested
;; in handling events from children.

(defprotocol IGotEvent
  (got-event [_ ev]))

;; TODO: xform

;; =============================================================================
;; Event bus setup.

(defn- init-event-bus!
  "Adds support for triggering events and, if the component reified IGotEvent, support for handling events
   from child components.

   It does so by setting the component's local state:
      ::trigger-fn  -  function that triggers an event;
      ::event-bus   -  core.async channel to be passed to the component's children (see root> below).

   Do not use the local state values directly; they are for internal use only."
  [this]
  (println "Setting event bus for" (om/id this))
  (let [downstream (om/get-state this ::event-bus)
        c (om/children this)]
    (om/set-state! this ::trigger-fn #(async/put! downstream %))
    (when (satisfies? IGotEvent c)
      (let [upstream (async/chan)
            branch (async/chan)
            fork (async/mult upstream)]
        (async/tap fork branch)
        (async/tap fork downstream)
        (om/set-state! this ::event-bus upstream)
        (om/set-state! this ::close-fn (fn []
                                        (async/close! upstream)
                                        (async/close! branch)))
        (async/go-loop []
                       (let [[event ch] (async/alts! [branch (async/timeout 5000)])]
                         #_(println (om/id this) "got " event)
                         (if event
                           (do
                             (got-event c event)
                             (recur))
                           (when (not= ch branch)
                             (println (om/id this) "is listening...")
                             (recur)))))))))

(defn- shutdown-event-bus!
  [this]
  (om/set-state! this ::trigger-fn #(throw (js/Error. "Event bus has already been shut down.")))
  (let [c (om/children this)
        close-fn (om/get-state this ::close-fn)]
    (when (satisfies? IGotEvent c)
      (println "Shutting down event bus for" (om/id this))
      (close-fn))))

;; =============================================================================
;; Custom om component descriptor.

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

  (extend-pure-methods
    {:render
    (fn [this super]
      ;; Do something.
      (super))}) ;; Call the original method.

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

;; =============================================================================
;; Public functions.

(defn root>
  "Use this instead of om.core/root to add support for event bus functionality.

  The arity 4 version lets you specify the channel if you also want to handle events outside of component hierarchy.
  IMPORTANT: If you pass your own event bus channel, you **MUST** consume events."
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

(defn trigger
  "Sends an event from the component down through its parent components."
  [owner event]
  (let [trigger-fn (om/get-state owner ::trigger-fn)]
    (trigger-fn event))
  nil) ;; Avoid the following React.js warning: "Returning `false` from an event handler is deprecated
       ;; and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(),
       ;; as appropriate."
