(ns examples.go-loop.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-event-bus.core :as event-bus]
            [cljs.core.async :refer [<! chan]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

(def app-state (atom {}))

(defn child-view
      [app owner]
      (reify
        om/IRender
        (render [_]
                (dom/div nil (dom/button
                               #js
                               {:onClick #(event-bus/trigger owner (str "event from child " (om/id owner)))}
                               (str "Child " (om/id owner)))))))

(defn parent-view
      [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ ev]
                   (js/console.log "parent received" (clj->js ev)))
        om/IRender
        (render [_]
                (apply dom/div nil [(dom/button
                                      #js
                                      {:onClick #(event-bus/trigger owner (str "event from parent " (om/id owner)))}
                                      (str "Parent " (om/id owner)))
                                    (om/build child-view app)
                                    (om/build child-view app)]))))


(def event-bus (chan))

(event-bus/root>
  (fn [app owner]
      (reify
        om/IRender
        (render [_]
                (om/build parent-view app))))
  app-state
  {:target (. js/document (getElementById "app"))}
  event-bus)

(go-loop []
         (let [e (<! event-bus)]
           (when e
             (println "go-loop received" e)
             (recur))))
