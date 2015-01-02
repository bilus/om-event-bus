(ns om-event-bus.impl
  (:require [clojure.test :refer :all]
            #_[om-event-bus.core :refer :all]
            [clojure.core.async :as async]))



(defprotocol IEventBus
  (tap [this ch])
  (sink [this bus])
  (route-event [_ ev])
  (put [this event])
  (expand-up [this] [this a1] [this a1 a2] [this a1 a2 a3])
  (shutdown [this]))

(defprotocol IEventRouter
  (init-route [_ down up] [_ down up a1] [_ down up a1 a2] [_ down up a1 a2 a3])
  (resolve-route [_ down up])
  (close-route [_]))

(defn handle-events!
  [ch f]
  (async/go-loop []
    (let [event (async/<! ch)]
      (when event
        (f event)
        (recur)))))

(declare downstream-router expand-event-bus)

(defn event-bus
  ([]
    (event-bus (downstream-router)))
  ([router]
    (event-bus router (async/mult (async/chan))))
  ([router mult]
    (reify
      IEventBus
      (tap [_ ch]
        (async/tap mult ch))
      (sink [_ bus]
        (tap bus (async/muxch* mult)))
      (expand-up [this]
        (expand-event-bus this router (fn [_])))
      (expand-up [this f]
        (expand-event-bus this router f))
      (put [_ event]
        (async/put! (async/muxch* mult) event))
      (shutdown [_]
        (async/untap-all mult)
        (async/close! (async/muxch* mult)))
      (route-event [this event]
        (put this event)))))

(defn expand-event-bus
  [down-bus router & args]
  (let [up-mult (async/mult (async/chan))
        up-bus (reify
                 IEventBus
                 (tap [_ ch]
                   (async/tap up-mult ch))
                 (sink [_ bus]
                   (tap bus (async/muxch* up-mult)))
                 (put [_ event]
                   (async/put! (async/muxch* up-mult) event))
                 (shutdown [_]
                   (async/untap-all up-mult)
                   (async/close! (async/muxch* up-mult))
                   (close-route router))
                 (route-event [this event]
                   (put (resolve-route router down-bus this) event)))]
    (apply init-route router down-bus up-bus args)
    up-bus))

(defn upstream-router
  []
  (let [feed (async/chan)]
    (reify
     IEventRouter
     (init-route [_ down up f]
       (sink up down)
       (tap down feed)
       (handle-events! feed f))
     (close-route [_]
       (async/close! feed))
      (resolve-route [_ down up]
        up))))

(defn downstream-router
  []
  (let [feed (async/chan)]
    (reify
     IEventRouter
     (init-route [_ down up f]
       (sink down up)
       (tap up feed)
       (handle-events! feed f))
      (close-route [_]
       (async/close! feed))
      (resolve-route [_ down up]
        down))))


;; TODO: Write tests.
;; TODO: Allow IEventBus to extend itself so components have no knowledge of that.
;; TODO: Add support for xforms.
;; TODO: See if trigger (of ITrigger) can be used on owner and bus to make it more consistent (see om/specify-state-methods!).