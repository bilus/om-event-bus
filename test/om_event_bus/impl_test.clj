(ns om-event-bus.impl-test
  (:require [om-event-bus.impl :refer :all]
            [clojure.test :refer :all]
            [clojure.core.async :as async]
            #_[clojure.tools.trace :as t]))

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

(defn matches? [expected actual]
  (= (sort expected) (sort actual)))

(defn wrap [f wrapper-f]
  (fn [& args]
    (apply wrapper-f args)
    (apply f args)))

;=======================================================================================================================

(deftest test-bus
  (let [bus (event-bus)
        ch (async/chan 1024)]
    (tap bus ch)

    (testing "triggering"
      (trigger bus "event")
      (is (= ["event"] (take-all! ch))))

    (testing "shutdown"
      (shutdown bus)
      (trigger bus "event")
      (is (timeout? (take! ch))))))

(deftest test-two-legs
  (let [bus (event-bus (upstream-router))
        parent (add-leg bus)
        child (add-leg parent)
        pch (async/chan 1024)
        cch (async/chan 1024)]
    (tap parent pch)
    (tap child cch)

    (testing "triggering"
      (trigger bus "event")
      (is (= ["event"] (take-all! pch)))
      (is (= ["event"] (take-all! cch))))

    (testing "shutdown"
      (shutdown child)
      (tap parent pch)                                      ;; Need to tap again because shutdown untaps all.
      (trigger parent "event")
      (is (= ["event"] (take-all! pch)))
      (shutdown bus)
      (tap parent pch)                                      ;; Need to tap again because shutdown untaps all.
      (trigger parent "event")
      (is (timeout? (take! pch))))))

(deftest test-sending-downstream
  (let [os (async/chan 1024)
        bus (event-bus (downstream-router))
        parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))))
        child (add-fork parent (fn [e] (async/put! os (str "[child] " e))))
        grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))))]

    (testing "triggering"
      (trigger grandchild "event")
      (is (matches? ["[child] event" "[parent] event"]
                           (take-all! os))))
    (testing "shutdown"
      (shutdown parent)
      (trigger grandchild "event")
      (is (= ["[child] event"] (take-all! os))))))

(deftest test-sending-upstream
  (let [os (async/chan 1024)
        bus (event-bus (upstream-router))
        parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))))
        child (add-fork parent (fn [e] (async/put! os (str "[child] " e))))
        grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))))]
    (testing "triggering"
      (trigger bus "event")
      (is (matches? ["[grandchild] event" "[child] event" "[parent] event"]
                    (take-all! os))))

    (testing "shutdown"
      (shutdown child)
      (trigger bus "event")
      (is (matches? ["[parent] event"]
                    (take-all! os))))))

(deftest test-event-handler
  (let [parent (event-bus (upstream-router))
        os (async/chan 1024)
        child (add-fork parent (fn [ev]
                                  (async/put! os (str "[child] " ev))))]
    (testing "triggering"
      (trigger parent "event")
      (is (= ["[child] event"] (take-all! os))))))

(deftest test-tree-structure
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
       (trigger broadcast "event")
       (is (matches? ["parent received 'event' from a parent"
                      "child A received 'event' from a parent"
                      "child B received 'event' from a parent"]
                     (take-all! os)))))

    (testing "sending down from child"
      (let [{:keys [os child-a-down]} (set-up)]
        (trigger child-a-down "event")
        (is (matches? ["parent received 'event' from a child"]
                      (take-all! os)))))

    (testing "sending up from parent"
      (let [{:keys [os parent-up]} (set-up)]
        (trigger parent-up "event")

        (is (matches? ["child A received 'event' from a parent"
                       "child B received 'event' from a parent"]
                      (take-all! os)))))))

(deftest test-xform
  (letfn [(mapping
            [f]
            (fn [reducing]
              (fn [result input]
                (reducing result (f input)))))
          (add-info
            [info]
            (mapping #(str % info)))]

    (testing "downstream forks"
      (let [os (async/chan 1024)
            bus (event-bus (downstream-router))
            parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-fork parent (fn [e] (async/put! os (str "[child] " e))) (add-info " (pass child)"))
            grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))
            top (add-leg grandchild)]
        (trigger grandchild "event")
        (is (matches? ["[child] event (pass grandchild)"
                       "[parent] event (pass grandchild) (pass child)"]
                      (take-all! os)))))

    (testing "upstream forks"
      (let [os (async/chan 1024)
            bottom (event-bus (upstream-router))
            parent (add-fork bottom (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-fork parent (fn [e] (async/put! os (str "[child] " e))) (add-info " (pass child)"))
            grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))]
        (trigger bottom "event")
        (is (matches? ["[grandchild] event (pass parent) (pass child)"
                       "[child] event (pass parent)"
                       "[parent] event"]
                      (take-all! os)))))

    (testing "downstream legs"
      (let [os (async/chan 1024)
            bottom (event-bus (downstream-router))
            parent (add-fork bottom (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-leg parent (add-info " (pass child)"))
            grandchild (add-leg child (add-info " (pass grandchild)"))]
        (trigger grandchild "event")
        (is (matches? ["[parent] event (pass grandchild) (pass child)"]
                      (take-all! os)))))

    (testing "upstream legs"
      (let [os (async/chan 1024)
            bottom (event-bus (upstream-router))
            parent (add-leg bottom (add-info " (pass parent)"))
            child (add-leg parent (add-info " (pass child)"))
            grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))]
        (trigger bottom "event")
        (is (matches? ["[grandchild] event (pass parent) (pass child)"]
                      (take-all! os)))))))


(deftest test-with-options
  (testing "buffer size"
    (let [buf-sizes (atom [])]
      (with-redefs [async/chan (wrap async/chan
                                     (fn [buf-size & args]
                                       (swap! buf-sizes conj buf-size)))]
        (with-options {:buf-or-n 666}
                      (let [bus (event-bus (downstream-router))
                            parent (add-fork bus (fn [_] ()))
                            child (add-leg parent)]
                        (is (= [666 1] (distinct @buf-sizes))))))))) ; core.async creates chans of size 1 internally


; TODO: Change the orientation and update documentation.
; TODO: If one out of two om roots is killed go-loop collecting events still works. Write example two_roots.

; TODO: Add interfaces: IGotBubblingEvent IGotTricklingEvent. Make it work.

; TODO: Update documentation in core.
; TODO: Write documentation for impl.

; TODO: Write an example about broadcasting to all components within a tree.
; TODO: Update idealist (coordination between sortables).

; TODO: Build marginalia docs.
; TODO: Build examples and copy them to gh-pages branch. Link to new examples from Readme.
; TODO: Use one go loop per component.


