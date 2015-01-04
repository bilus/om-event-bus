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

(declare init-event-bus! shutdown-event-bus! trace)

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

  The arity 4 version lets you specify a channel if you also want to handle events outside of component hierarchy.

  **IMPORTANT:** If you pass a channel to receive events through, you **MUST** consume events.

  Here's what the `root>` function does:

  1. It intercepts calls to build (via `:instrument`) to pass on event buses from parent components to their
  children (via local state).

  2. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
  and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.

  3. It passes the custom descriptor to `om.core/build*`."
  ([f value options]
    (root> f value options nil))
  ([f value options out-event-ch]
    (let [event-bus (impl/event-bus (impl/downstream-router))
          descriptor (d/make-descriptor {:componentWillMount
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
        (impl/tap event-bus out-event-ch))
      (om/root f value
              (merge options {:instrument (fn [f x m]
                                            (let [parent-bus (or
                                                               (and *parent* (om/get-state *parent* ::event-bus))
                                                               event-bus)]
                                              (om/build* f x (-> m
                                                                 (update-in [:init-state] merge {::event-bus parent-bus})
                                                                 (merge {:descriptor descriptor})))))})))))

; =============================================================================
;; ### Triggering events.

(defn trigger
  "This function sends an event from the component down through its parent components.

  Note that `event` can be any data structure, there are no restrictions in this respect though for future compatibility,
  a map is recommended."
  [owner event]
  (let [event-bus (om/get-state owner ::event-bus)]
    (impl/trigger event-bus event))
  nil)  ; Avoid the following React.js warning: "Returning `false` from an event handler is deprecated
        ; and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(),
        ; as appropriate."

;; This is everything you should need to use the library but you are welcome to the internals as well. :)

;; ### Looking for feedback
;; Please make sure to send your critique to [gyamtso@gmail.com](mailto:gyamtso@gmail.com) or tweet me **@martinbilski**.


; =============================================================================
;; # Internals

;; ### Event bus setup

(defn- init-event-bus!
  "This function adds support for triggering events and, if the component reified IGotEvent, support for handling events
   from child components.

   It is called from when a component mounts (see `root>` above).

   What it does is it takes the event bus from its parent component (`down`) and extends it, either by forking it
   to handle events (if the component reifies `IGotEvent`) or by creating a 'leg' of the bus with minimal overhead.

   It sets local state:
   ::event-bus   -  the event bus segment.

   Please note that this mult/tap magic happens only if the component reifies the `IGotEvent` protocol and, to some
   extend, for `IInitEventBus` protocol as well. For components that don't care about events, overhead is minimal."
  [this]
  (let [down (om/get-state this ::event-bus)
        c (om/children this)
        {:keys [xform buf-or-n]} (merge default-config
                                        (when (satisfies? IInitEventBus c)
                                          (init-event-bus c)))
        handler (when (satisfies? IGotEvent c)
                  (partial got-event c))]
    (impl/with-options {:buf-or-n buf-or-n}
                       (om/set-state! this
                                      ::event-bus
                                      (if handler
                                        (impl/add-fork down handler xform)
                                        (impl/add-leg down xform))))))


(defn- shutdown-event-bus!
  "This function mainly shuts down event bus for this component.
   It simply calls `shutdown` on the event bus set up in `init-event-bus!` above.
   This terminates the go loop handling events."
  [this]
  (impl/shutdown (om/get-state this ::event-bus))
  (om/set-state! this ::event-bus nil))                  ; TODO: Set to nil-event-bus reporting meaningful errors.