(ns examples.simple.core
  (:require [om.core :include-macros true :as om]
            [om.dom :include-macros true :as dom]
            [om-event-bus.core :as event-bus]))

(enable-console-print!)

(def app-state (atom {}))

(defn child-view
  [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil (dom/button
                    #js {:onClick #(event-bus/trigger owner (str "event from child " (om/id owner)))}
                    (str "Child " (om/id owner)))))))

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
