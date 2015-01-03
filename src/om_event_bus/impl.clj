(ns om-event-bus.impl
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async]))

(defprotocol ITriggerEvent
  (trigger [_ event]))

(defprotocol IEventBus
  (tap [this ch])
  (sink [this mid-ch bus])
  (add-leg [this]
           [this xform])
  (add-fork [this handler]
            [this handler xform])
  (shutdown [this]))

(defprotocol IEventRouter
  (leg [_ down mid-ch up])
  (fork [_ down up ch]))

(declare downstream-router event-bus-leg extend-event-bus -build-event-bus handle-events! maybe-apply-xform)

(defn event-bus
  ([]
    (event-bus (downstream-router)))
  ([router]
    (-build-event-bus router (async/mult (async/chan)) true))) ; TODO: :buf-or-n

(defn pass-event-bus
  [router mult]
  (-build-event-bus router mult false))

(defn -build-event-bus
  [router down-mult close]
  (let [mult down-mult
        bus (reify
              IEventBus
              (tap [_ ch]
                (async/tap mult ch))
              (sink [_ mid-ch bus]
                (tap bus mid-ch)
                (async/pipe mid-ch (async/muxch* mult)))
              (add-fork [this handler]
                (extend-event-bus this router handler))
              (add-fork [this handler xform]
                (extend-event-bus this router handler xform))
              (add-leg [_]
                (pass-event-bus router mult))
              (add-leg [this xform]
                (extend-event-bus this router nil xform))
              (shutdown [_]
                (async/untap-all mult)
                (when close
                  (async/close! (async/muxch* mult))))
              ITriggerEvent
              (trigger [_ event]
                (async/put! (async/muxch* mult) event)))]
    bus))

(defn extend-event-bus
  ([down-bus router handler]
    (extend-event-bus down-bus router handler nil))
  ([down-bus router handler xform]
    (let [event-feed (when handler (async/chan))                ; TODO: :buf-or-n
          up-mult (async/mult (async/chan))                     ; TODO: :buf-or-n
          mid-ch (apply async/chan 1024 (if xform [xform] []))  ; TODO: :buf-or-n
          up-bus (reify
                   IEventBus
                   (tap [_ ch]
                     (async/tap up-mult ch))
                   (sink [_ mid-ch bus]
                     (tap bus mid-ch)
                     (async/pipe mid-ch (async/muxch* up-mult)))
                   (add-fork [this handler]
                     (extend-event-bus this router handler))
                   (add-fork [this handler xform]
                     (extend-event-bus this router handler xform))
                   (add-leg [_]
                     (pass-event-bus router up-mult))
                   (add-leg [this xform]
                     (extend-event-bus this router nil xform))
                   (shutdown [_]
                     (async/untap-all up-mult)
                     (async/close! (async/muxch* up-mult))
                     (when event-feed (async/close! event-feed))
                     (async/close! mid-ch))
                   ITriggerEvent
                   (trigger [_ event]
                     (async/put! mid-ch event)))]
      (leg router down-bus mid-ch up-bus)
      (when event-feed
        (fork router down-bus up-bus event-feed)
        (handle-events! event-feed handler))
      up-bus)))

(defn upstream-router
  []
  (reify
    IEventRouter
    (leg [_ down mid-ch up]
      (sink up mid-ch down))
    (fork [_ down _ ch]
      (tap down ch))))

(defn downstream-router
  []
  (reify
    IEventRouter
    (leg [_ down mid-ch up]
      (sink down mid-ch up))
    (fork [_ _ up ch]
      (tap up ch))))

(defn handle-events!
  [ch f]
  (async/go-loop []
    (let [event (async/<! ch)]
      (when event
        (f event)
        (recur)))))
