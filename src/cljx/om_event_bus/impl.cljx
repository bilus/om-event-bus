(ns om-event-bus.impl
  #+clj
  (:require [clojure.core.async :as async])
  #+cljs
  (:require [cljs.core.async :as async])
  #+cljs
  (:require-macros [cljs.core.async.macros :as async]
                   [om-event-bus.impl :refer [options]])
  )

;; This namespace contains the actual implementation of event buses based core.async.
;;
;; This is a portable .cljx file and can be used in both Clojure and ClojureScript.

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
  (leg [_ parent mid-ch child])
  (fork [_ parent child ch]))

(declare bubbling-router extend-event-bus event-bus* dbg-handle-events! handle-events! maybe-apply-xform)

#+cljs
(defn event-bus
  ([]
    (event-bus (bubbling-router)))
  ([router]
    (event-bus* router (async/mult (async/chan (:buf-or-n (options)))) true)))

(defn- pass-event-bus
  [router mult]
  (event-bus* router mult false))

(defn- event-bus*
  [router parent-mult close]
  (let [mult parent-mult
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
  ([parent-bus router handler]
    (extend-event-bus parent-bus router handler nil))
  ([parent-bus router handler xform]
    (let [event-feed (when handler (async/chan (:buf-or-n (options))))
          child-mult (async/mult (async/chan (:buf-or-n (options))))
          mid-ch (apply async/chan (:buf-or-n (options)) (if xform [xform] []))
          child-bus (reify
                       IEventBus
                       (tap [_ ch]
                         (async/tap child-mult ch))
                       (sink [_ mid-ch bus]
                         (tap bus mid-ch)
                         (async/pipe mid-ch (async/muxch* child-mult)))
                       (add-fork [this handler]
                         (extend-event-bus this router handler))
                       (add-fork [this handler xform]
                         (extend-event-bus this router handler xform))
                       (add-leg [_]
                         (pass-event-bus router child-mult))
                       (add-leg [this xform]
                         (extend-event-bus this router nil xform))
                       (shutdown [_]
                         (async/untap-all child-mult)
                         (async/close! (async/muxch* child-mult))
                         (when event-feed (async/close! event-feed))
                         (async/close! mid-ch))
                       ITriggerEvent
                       (trigger [_ event]
                         (async/put! mid-ch event)))]
      (leg router parent-bus mid-ch child-bus)
      (when event-feed
        (fork router parent-bus child-bus event-feed)
        (handle-events! event-feed handler)
        #_(dbg-handle-events! event-feed handler))
      child-bus)))

(defn trickling-router
  []
  (reify
    IEventRouter
    (leg [_ parent mid-ch child]
      (sink child mid-ch parent))
    (fork [_ parent _ ch]
      (tap parent ch))))

(defn bubbling-router
  []
  (reify
    IEventRouter
    (leg [_ parent mid-ch child]
      (sink parent mid-ch child))
    (fork [_ _ child ch]
      (tap child ch))))

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
