(ns om-event-bus.impl-test
  (:require [om-event-bus.impl :refer :all]
            [clojure.test :refer :all]
            [clojure.core.async :as async]))

(defn safe-take!
  [ch]
  (let [[v _] (async/alts!! [ch (async/timeout 100)])]
    v))

(defn take!
  [ch]
  (or (safe-take! ch) (throw (ex-info "Timeout while trying to read from the port." {:type :timeout-exception}))))

(defmacro timeout?
  [body]
  `(try
     (do
       ~body
       false)
     (catch clojure.lang.ExceptionInfo e#
       (= :timeout-exception (-> e# ex-data :type)))))


(defn take-all!
  [ch]
  (take-while some? (repeatedly #(safe-take! ch))))

;=======================================================================================================================

(deftest single-segment
  (let [bus (event-bus)
        ch (async/chan 1024)]
    (tap bus ch)
    (testing "triggering"
      (route-event bus "event")
      (is (= "event" (take! ch))))
    (testing "shutdown"
      (shutdown bus)
      (route-event bus "event")
      (is (timeout? (take! ch))))))

(deftest two-segments
  (let [source (event-bus)
        target (event-bus)
        ch (async/chan 1024)]
    (sink target source)
    (tap target ch)
    (testing "triggering at source"
      (route-event source "event")
      (is (= "event" (take! ch))))
    (testing "triggering at target"
      (route-event target "event")
      (is (= "event" (take! ch))))
    (testing "shutdown"
      (shutdown source)
      (route-event source "event")
      (is (timeout? (take! ch))))))

(deftest sending-downstream
  (let [down (event-bus)
        up (event-bus down (downstream-router (fn [_])))
        down-out (async/chan 1024)
        up-out (async/chan 1024)]
    (tap down down-out)
    (tap up up-out)
    (testing "triggering"
      (route-event up "event")
      (is (= "event" (take! down-out)))
      (is (timeout? (take! up-out))))
    (testing "shutdown"
      (shutdown down)
      (route-event up "event")
      (is (timeout? (take! down-out))))))

(deftest sending-upstream
  (let [down (event-bus)
        up (event-bus down (upstream-router (fn [_])))
        down-out (async/chan 1024)
        up-out (async/chan 1024)]
    (tap down down-out)
    (tap up up-out)
    (testing "triggering"
      (route-event down "event")
      (is (= "event" (take! down-out)))
      (is (= "event" (take! up-out))))
    (testing "shutdown"
      (shutdown down)
      (route-event down "event")
      (is (timeout? (take! down-out)))
      (is (timeout? (take! up-out))))))

(deftest event-handler
  (let [parent (event-bus)
        os (async/chan 1024)
        child (event-bus parent (upstream-router (fn [ev]
                                                (async/put! os (str "Received " ev)))))]
    (testing "triggering"
      (route-event parent "event")
      (is (= "Received event" (take! os))))))

(defn hub
  [os name event-bus-down event-bus-up]
  (let [event-bus-down' (event-bus event-bus-down (downstream-router (fn [event]
                                                                       (async/put! os (str name " received '" event "' from a child")))))
        event-bus-up' (event-bus event-bus-up (upstream-router (fn [event]
                                                                 (async/put! os (str name " received '" event "' from a parent")))))]
    [event-bus-down' event-bus-up']))

(defn set-up
  []
  (let [os (async/chan 1024)
        event-bus-down (event-bus)
        event-bus-up (event-bus)
        buses (hub os "parent" event-bus-down event-bus-up)]
    {:os os
     :broadcast event-bus-up
     :parent-up (second buses)
     :child-a-down (first (apply hub os "child A" buses))
     :child-b-down (first (apply hub os "child B" buses))}))

(deftest tree-structure
  (testing "broadcasting to all"
    (let [{:keys [os broadcast]} (set-up)]
      (route-event broadcast "event")

      (is (= (sort ["parent received 'event' from a parent"
                    "child A received 'event' from a parent"
                    "child B received 'event' from a parent"])
             (sort (take-all! os))))))
  (testing "sending down from child"
    (let [{:keys [os child-a-down]} (set-up)]
      (route-event child-a-down "event")

      (is (= (sort ["parent received 'event' from a child"])
             (sort (take-all! os))))))

  (testing "sending up from parent"
    (let [{:keys [os parent-up]} (set-up)]
      (route-event parent-up "event")

      (is (= (sort ["child A received 'event' from a parent"
                    "child B received 'event' from a parent"])
             (sort (take-all! os)))))))

