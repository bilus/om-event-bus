(ns idealist.event-bus
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :as async]))

;; =============================================================================
;; Event handling protocol. Use it in your components if you're interested
;; in handling events from children.

(defprotocol IGotEvent
  (got-event [_ ev]))

;; TODO: xform
;; TODO: Terminate loop.
;;

;; =============================================================================
;; Helper functions.

(defn- init-event-bus!
  "Adds support for triggering events and, if the component reified IGotEvent, support for handling events
   from child components.

   It does so by setting the component's local state:
      ::trigger-fn  -  function that triggers an event;
      ::event-bus   -  core.async channel to be passed to the component's children (see root> below).

   Do not use the local state values directly; they are for internal use only."
  [this]
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
        (async/go-loop []
                 (let [e (async/<! branch)]
                   (got-event c e))
                 (recur))))))



(defn- around-method!
  "Overrides a pure method by wrapping it in f."
  [method methods f]
  (let [prev-method (method methods)]
    (-> methods
        (assoc method #(this-as this
                                (do
                                   (f this (fn []
                                             (.call prev-method this)))))))))

(defn- before-method!
  "Overrides a pure method to call function f before its body."
  [method methods f]
  (around-method! method methods (fn [this super]
                                   (f this)
                                   (super))))

(defn- before-will-mount!
  "Overrides componentWillMount pure method to call function f before its body."
  [methods f]
  (before-method! :componentWillMount methods f))

(defn- make-descriptor
  "Creates a custom descriptor with support for an event bus."
  []
  (let [methods (before-will-mount! om/pure-methods (fn [this]
                                                      (js/console.log "init-event-bus!")
                                                      (init-event-bus! this)))
        descriptor (om/specify-state-methods! (clj->js methods))]
    descriptor))

(defn- make-instrument-fn
  "Creates the function called whenever a component calls build, build-all or build*.

  What this function does is to pass on event bus core.async channel from parent to child. It uses the bus
  in the parent's local state except for top-level components when it uses 'event-bus' passed as an argument."
  [event-bus]
  (fn [f x m]
    (let [parent-bus (or
                       (and om/*parent* (om/get-state om/*parent* ::event-bus))
                       event-bus)]
      (om/build* f x (update-in m [:init-state] merge {::event-bus parent-bus})))))

;; =============================================================================
;; Public functions.

(defn root>
  "Use this instead of om.core/root to add support for event bus functionality.

  The arity 4 version lets you specify the channel if you also want to handle events outside of component hierarchy."
  ([f value options]
    (root> f value options (async/chan 1)))
  ([f value options event-bus]
    (om/root f value
             (merge options {:descriptor (make-descriptor)
                             :instrument (make-instrument-fn event-bus)}))))

(defn trigger
  "Sends an event from the component downwards to its parent components."
  [owner event]
  (let [event-send-fn (om/get-state owner ::trigger-fn)]
    (event-send-fn event)))

