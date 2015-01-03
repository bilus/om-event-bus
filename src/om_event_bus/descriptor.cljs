;; ### Custom om component descriptor

(ns om-event-bus.descriptor
  (:require [om.core :as om :include-macros true]))

(defn- around-method
  "Overrides a pure method by wrapping it in f."
  [method methods f]
  (let [prev-method (method methods)]
    (-> methods
        (assoc method #(this-as this
                                (do
                                  (f this (fn []
                                            (.call prev-method this)))))))))

(defn- extend-pure-methods
  "Given pure methods and a map of overrides, it extends pure methods with new lifecycle methods.

  Example:

  <pre><code>
  (extend-pure-methods
    {:render (fn [this super]
                ;; Do something.
                (super))}) ;; Call the original method.
  </pre></code>

  You can also specify a map of pure methods as the first argument."
  ([new-methods]
    (extend-pure-methods om/pure-methods new-methods))
  ([methods new-methods]
    (loop [methods' methods [[new-method-name new-method-fn] & new-methods'] (seq new-methods)]
      (if new-method-name
        (recur (around-method new-method-name methods' new-method-fn) new-methods')
        methods'))))

(defn- make-descriptor
  "Creates a custom descriptor with support for an event bus."
  [new-methods]
  (let [methods (extend-pure-methods new-methods)
        descriptor (om/specify-state-methods! (clj->js methods))]
    descriptor))