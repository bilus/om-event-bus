(ns examples.nested.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-event-bus.core :as event-bus]))

(enable-console-print!)

(def app-state (atom {}))

(defn grandchild-view
  [app owner]
  (reify
    event-bus/IGotEvent
    (got-event [_ ev]
      (println "grandchild received" ev))
    om/IRender
    (render [_]
            (dom/div nil (dom/button
                           #js {:onClick #(event-bus/trigger owner (str "event from granchild " (om/id owner)))}
                           (str "Granchild " (om/id owner)))))))

(defn child-view
  [app owner]
  (reify
    event-bus/IGotEvent
    (got-event [_ ev]
      (println "child received" ev))
    om/IRender
    (render [_]
      (apply dom/div nil [(dom/button
                            #js {:onClick #(event-bus/trigger owner (str "event from child " (om/id owner)))}
                            (str "Child " (om/id owner)))
                          (om/build grandchild-view app)
                          (om/build grandchild-view app)]))))

  (defn parent-view
    [app owner]
    (reify
      event-bus/IGotEvent
      (got-event [_ ev]
        (println "parent received" ev))
      om/IRender
      (render [_]
        (apply dom/div nil [(dom/span nil (str "Parent " (om/id owner)))
                            (om/build child-view app)
                            (om/build child-view app)]))))


(event-bus/root>
  parent-view
  app-state
  {:target (. js/document (getElementById "app"))})