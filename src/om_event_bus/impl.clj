(ns om-event-bus.impl
  (:require [clojure.test :refer :all]
            #_[om-event-bus.core :refer :all]
            [clojure.core.async :as async]))

(defprotocol IEventBus
  (tap [this ch])
  (sink [this bus])
  (route-event [_ ev])
  (put [this event])
  (add-leg [this])
  (add-fork [this handler])
  (shutdown [this]))

(defprotocol IEventRouter
  (leg [_ down up])
  (fork [_ down up ch])
  (resolve-route [_ down up]))

(declare downstream-router event-bus-leg event-bus-fork -build-event-bus handle-events!)

(defn event-bus
  ([]
    (event-bus (downstream-router)))
  ([router]
    (-build-event-bus router (async/mult (async/chan)) true)))

(defn event-bus-leg
  [router mult]
  (-build-event-bus router mult false))

(defn -build-event-bus
  [router mult close]
  (let [bus (reify
              IEventBus
              (tap [_ ch]
                (async/tap mult ch))
              (sink [_ bus]
                (tap bus (async/muxch* mult)))
              (add-fork [this handler]
                (event-bus-fork this router handler))
              (add-leg [_]
                (event-bus-leg router mult))
              (put [_ event]
                (async/put! (async/muxch* mult) event))
              (shutdown [_]
                (async/untap-all mult)
                (when close
                  (async/close! (async/muxch* mult))))
              (route-event [this event]
                (put this event)))]
    bus))

(defn event-bus-fork
  ([down-bus router]
    (event-bus-fork down-bus router nil))
  ([down-bus router handler]
    (let [event-feed (async/chan)
          up-mult (async/mult (async/chan))                 ; TODO: xform
          up-bus (reify
                   IEventBus
                   (tap [_ ch]
                     (async/tap up-mult ch))
                   (sink [_ bus]
                     (tap bus (async/muxch* up-mult)))
                   (put [_ event]
                     (async/put! (async/muxch* up-mult) event))
                   (add-fork [this handler]                 ; TODO: Arity 3 version for xform.
                     (event-bus-fork this router handler))
                   (add-leg [_]
                     (event-bus-leg router down-bus))        ; TODO: Arity 2 version for xform.
                   (shutdown [_]
                     (async/untap-all up-mult)
                     (async/close! (async/muxch* up-mult))
                     (async/close! event-feed))
                   (route-event [this event]
                     (put (resolve-route router down-bus this) event)))] ; TODO: xform
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

(defn handle-events!
  [ch f]
  (async/go-loop []
    (let [event (async/<! ch)]
      (when event
        (f event)
        (recur)))))
