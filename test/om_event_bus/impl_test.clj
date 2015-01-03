(ns om-event-bus.impl-test
  (:require [om-event-bus.impl :refer :all]
            [clojure.test :refer :all]
            [clojure.core.async :as async]
            [clojure.tools.trace :as t]))

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
  (doall (take-while some? (repeatedly #(safe-take! ch)))))

;=======================================================================================================================

(deftest bus
  (let [bus (event-bus)
        ch (async/chan 1024)]
    (tap bus ch)
    (testing "triggering"
      (route-event bus "event")
      (is (= ["event"] (take-all! ch))))
    (testing "shutdown"
      (shutdown bus)
      (route-event bus "event")
      (is (timeout? (take! ch))))))

(deftest two-legs
  (let [bus (event-bus (downstream-router))
        parent (add-leg bus)
        child (add-leg parent)
        pch (async/chan 1024)
        cch (async/chan 1024)]
    (tap parent pch)
    (tap child cch)
    (testing "triggering"
      (route-event bus "event")
      (is (= ["event"] (take-all! pch)))
      (is (= ["event"] (take-all! cch))))
    (testing "shutdown"
      (shutdown child)
      (route-event bus "event")
      (tap parent pch)                                      ;; Need to tap again because shutdown untaps all.
      (is (= ["event"] (take-all! pch)))
      (shutdown bus)
      (tap parent pch)                                      ;; Need to tap again because shutdown untaps all.
      (is (timeout? (take! pch))))))

(deftest sending-downstream
  (let [os (async/chan 1024)
        bus (event-bus (downstream-router))
        parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))))
        child (add-fork parent (fn [e] (async/put! os (str "[child] " e))))
        grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))))]
    (testing "triggering"
      (route-event grandchild "event")
      (is (= (sort ["[child] event" "[parent] event"])
             (sort (take-all! os)))))
    (testing "shutdown"
      (shutdown parent)
      (route-event grandchild "event")
      (is (= ["[child] event"] (take-all! os))))))

(deftest sending-upstream
  (let [os (async/chan 1024)
        bus (event-bus (upstream-router))
        parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))))
        child (add-fork parent (fn [e] (async/put! os (str "[child] " e))))
        grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))))]
    (testing "triggering"
      (route-event bus "event")
      (is (= (sort ["[grandchild] event" "[child] event" "[parent] event"])
             (sort (take-all! os)))))
    (testing "shutdown"
      (shutdown child)
      (route-event bus "event")
      (is (= (sort ["[parent] event"])
             (sort (take-all! os)))))))

(deftest event-handler
  (let [parent (event-bus (upstream-router))
        os (async/chan 1024)
        child (add-fork parent (fn [ev]
                                  (async/put! os (str "[child] " ev))))]
    (testing "triggering"
      (route-event parent "event")
      (is (= ["[child] event"] (take-all! os))))))

(deftest tree-structure
  (letfn [(hub
            [os name event-bus-down event-bus-up]
            (let [event-bus-down' (add-fork event-bus-down (fn [event]
                                                             (async/put! os (str name " received '" event "' from a child"))))
                  event-bus-up' (add-fork event-bus-up (fn [event]
                                                         (async/put! os (str name " received '" event "' from a parent"))))]
              [event-bus-down' event-bus-up']))

          (set-up
            []
            (let [os (async/chan 1024)
                  event-bus-down (event-bus (downstream-router))
                  event-bus-up (event-bus (upstream-router))
                  buses (hub os "parent" event-bus-down event-bus-up)]
              {:os           os
               :broadcast    event-bus-up
               :parent-up    (second buses)
               :child-a-down (first (apply hub os "child A" buses))
               :child-b-down (first (apply hub os "child B" buses))}))]

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
               (sort (take-all! os))))))))
