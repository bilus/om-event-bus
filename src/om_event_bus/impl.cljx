(ns om-event-bus.impl
  #+clj
  (:require [clojure.core.async :as async])
  #+cljs
  (:require [cljs.core.async :as async])
  #+cljs
  (:require-macros [cljs.core.async.macros :as async]
                   [om-event-bus.impl :refer [options]]))

(def ^:dynamic *options* {:buf-or-n 1})

(defmacro with-options
  [opts & body]
  `(binding [*options* (merge *options* ~opts)]
     ~@body))

(defmacro options
  []
  `*options*)

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

(declare downstream-router extend-event-bus event-bus* dbg-handle-events! handle-events! maybe-apply-xform)

(defn event-bus
  ([]
    (event-bus (downstream-router)))
  ([router]
    (event-bus* router (async/mult (async/chan (:buf-or-n (options)))) true)))

(defn- pass-event-bus
  [router mult]
  (event-bus* router mult false))

(defn- event-bus*
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

(defn- extend-event-bus
  ([down-bus router handler]
    (extend-event-bus down-bus router handler nil))
  ([down-bus router handler xform]
    (let [event-feed (when handler (async/chan (:buf-or-n (options))))
          up-mult (async/mult (async/chan (:buf-or-n (options))))
          mid-ch (apply async/chan (:buf-or-n (options)) (if xform [xform] []))
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
        (dbg-handle-events! event-feed handler))
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

(defn- handle-events!
  [ch f]
  (async/go-loop []
    (let [event (async/<! ch)]
      (when event
        (f event)
        (recur)))))

(defn- dbg-handle-events!
  [ch f]
  (async/go-loop []
    (let [t (async/timeout 5000)
          [event ch] (async/alts! [ch t])]
      (if (= ch t)
        (do (f {:event "still running"})
            (recur))
        (when event
          (f event)
          (recur))))))
