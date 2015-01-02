(ns om-event-bus.impl
  (:require [clojure.test :refer :all]
            #_[om-event-bus.core :refer :all]
            [clojure.core.async :as async]))

(defprotocol IEventBus
  (tap [this ch])
  (sink [this bus])
  (route-event [_ ev])
  (put [this event])
  (add-fork [this] [this handler])
  (shutdown [this]))

(defprotocol IEventRouter
  (leg [_ down up])
  (fork [_ down up ch])
  (resolve-route [_ down up]))

(defn handle-events!
  [ch f]
  (async/go-loop []
    (let [event (async/<! ch)]
      (when event
        (f event)
        (recur)))))

(declare downstream-router event-bus-fork)

(defn event-bus
  ([]
    (event-bus (downstream-router)))
  ([router]
    (event-bus router (async/mult (async/chan))))
  ([router mult]
    (let [bus (reify
            IEventBus
            (tap [_ ch]
              (async/tap mult ch))
            (sink [_ bus]
              (tap bus (async/muxch* mult)))
            (add-fork [this handler]
              (event-bus-fork this router handler))
            (put [_ event]
              (async/put! (async/muxch* mult) event))
            (shutdown [_]
              (async/untap-all mult)
              (async/close! (async/muxch* mult)))
            (route-event [this event]
              (put this event)))]
      bus)))

(defn event-bus-fork
  ([down-bus router]
    (event-bus-fork down-bus router nil))
  ([down-bus router handler]
    (let [event-feed (async/chan)
          up-mult (async/mult (async/chan))
          up-bus (reify
                   IEventBus
                   (tap [_ ch]
                     (async/tap up-mult ch))
                   (sink [_ bus]
                     (tap bus (async/muxch* up-mult)))
                   (put [_ event]
                     (async/put! (async/muxch* up-mult) event))
                   (add-fork [this handler]
                     (event-bus-fork this router handler))
                   (shutdown [_]
                     (async/untap-all up-mult)
                     (async/close! (async/muxch* up-mult))
                     (async/close! event-feed))
                   (route-event [this event]
                     (put (resolve-route router down-bus this) event)))]
      (leg router down-bus up-bus)
      (fork router down-bus up-bus event-feed)
      (handle-events! event-feed handler)
      up-bus)))

(defn upstream-router
  []
  (reify
    IEventRouter
    (leg [_ down up]
      (sink up down))
    (fork [_ down _ ch]
      (tap down ch))
    (resolve-route [_ _ up]
      up)))

(defn downstream-router
  []
  (reify
    IEventRouter
    (leg [_ down up]
      (sink down up))
    (fork [_ _ up ch]
      (tap up ch))
    (resolve-route [_ down _]
      down)))



;; TODO: Write tests.
;; TODO: Allow IEventBus to extend itself so components have no knowledge of that.
;; TODO: Add support for xforms.
;; TODO: See if trigger (of ITrigger) can be used on owner and bus to make it more consistent (see om/specify-state-methods!).