(ns examples.simple.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-event-bus.core :as event-bus]))


(def app-state (atom {}))

(defn child-view
      [app owner]
      (reify
        om/IRender
        (render [_]
                (dom/button
                  #js
                  {:onClick #(event-bus/trigger owner (str "event from child " (om/id owner)))}
                  (str "Child " (om/id owner))))))

(defn parent-view
      [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ ev]
                   (js/console.log "parent received" (clj->js ev)))
        om/IRender
        (render [_]
                (apply dom/div nil [(om/build child-view app)
                                    (om/build child-view app)]))))


(event-bus/root>
  parent-view
  app-state
  {:target (. js/document (getElementById "app"))})