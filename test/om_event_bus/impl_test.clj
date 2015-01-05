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
  (let [bus (event-bus (trickling-router))
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

(deftest test-bubbling
  (let [os (async/chan 1024)
        bus (event-bus (bubbling-router))
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

(deftest test-trickling
  (let [os (async/chan 1024)
        bus (event-bus (trickling-router))
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
  (let [parent (event-bus (trickling-router))
        os (async/chan 1024)
        child (add-fork parent (fn [ev]
                                  (async/put! os (str "[child] " ev))))]
    (testing "triggering"
      (trigger parent "event")
      (is (= ["[child] event"] (take-all! os))))))

(deftest test-tree-structure
  (letfn [(hub
            [os name bubbling-bus trickling-bus]
            (let [bubbling-bus' (add-fork bubbling-bus (fn [event]
                                                             (async/put! os (str name " received '" event "' from a child"))))
                  trickling-bus' (add-fork trickling-bus (fn [event]
                                                         (async/put! os (str name " received '" event "' from a parent"))))]
              [bubbling-bus' trickling-bus']))

          (set-up
            []
            (let [os (async/chan 1024)
                  bubbling-bus (event-bus (bubbling-router))
                  trickling-bus (event-bus (trickling-router))
                  buses (hub os "parent" bubbling-bus trickling-bus)]
              {:os           os
               :broadcast    trickling-bus
               :parent-trickle    (second buses)
               :child-a-bubble (first (apply hub os "child A" buses))
               :child-b-bubble (first (apply hub os "child B" buses))}))]

    (testing "broadcasting to all"
     (let [{:keys [os broadcast]} (set-up)]
       (trigger broadcast "event")
       (is (matches? ["parent received 'event' from a parent"
                      "child A received 'event' from a parent"
                      "child B received 'event' from a parent"]
                     (take-all! os)))))

    (testing "bubbling from child"
      (let [{:keys [os child-a-bubble]} (set-up)]
        (trigger child-a-bubble "event")
        (is (matches? ["parent received 'event' from a child"]
                      (take-all! os)))))

    (testing "trickling from parent"
      (let [{:keys [os parent-trickle]} (set-up)]
        (trigger parent-trickle "event")

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

    (testing "bubbling bus forks"
      (let [os (async/chan 1024)
            bus (event-bus (bubbling-router))
            parent (add-fork bus (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-fork parent (fn [e] (async/put! os (str "[child] " e))) (add-info " (pass child)"))
            grandchild (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))
            _ (add-leg grandchild)]
        (trigger grandchild "event")
        (is (matches? ["[child] event (pass grandchild)"
                       "[parent] event (pass grandchild) (pass child)"]
                      (take-all! os)))))

    (testing "trickling bus forks"
      (let [os (async/chan 1024)
            top (event-bus (trickling-router))
            parent (add-fork top (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-fork parent (fn [e] (async/put! os (str "[child] " e))) (add-info " (pass child)"))
            _ (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))]
        (trigger top "event")
        (is (matches? ["[grandchild] event (pass parent) (pass child)"
                       "[child] event (pass parent)"
                       "[parent] event"]
                      (take-all! os)))))

    (testing "bubbling bus legs"
      (let [os (async/chan 1024)
            top (event-bus (bubbling-router))
            parent (add-fork top (fn [e] (async/put! os (str "[parent] " e))) (add-info " (pass parent)"))
            child (add-leg parent (add-info " (pass child)"))
            grandchild (add-leg child (add-info " (pass grandchild)"))]
        (trigger grandchild "event")
        (is (matches? ["[parent] event (pass grandchild) (pass child)"]
                      (take-all! os)))))

    (testing "trickling bus legs"
      (let [os (async/chan 1024)
            top (event-bus (trickling-router))
            parent (add-leg top (add-info " (pass parent)"))
            child (add-leg parent (add-info " (pass child)"))
            _ (add-fork child (fn [e] (async/put! os (str "[grandchild] " e))) (add-info " (pass grandchild)"))]
        (trigger top "event")
        (is (matches? ["[grandchild] event (pass parent) (pass child)"]
                      (take-all! os)))))))


(deftest test-with-options
  (testing "buffer size"
    (let [buf-sizes (atom [])]
      (with-redefs [async/chan (wrap async/chan
                                     (fn [buf-size & args]
                                       (swap! buf-sizes conj buf-size)))]
        (with-options {:buf-or-n 666}
                      (-> (event-bus (bubbling-router))
                          (add-fork (fn [_] ()))
                          (add-leg))
                      (is (= [666 1] (distinct @buf-sizes)))))))) ; core.async creates chans of size 1 internally


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


