(ns examples.disable.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-event-bus.core :as event-bus]))

(enable-console-print!)

(def app-state (atom {}))

(defn child-view
      [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ {event :event}]
                   (when (= event :disable)
                         (om/set-state! owner :disabled true)))
        om/IRenderState
        (render-state [_ {:keys [disabled]}]
          (dom/div nil
                   (dom/button
                         #js {:onClick #(event-bus/trigger owner {:event :click})
                              :className (when disabled "disabled")
                              :disabled disabled}
                         "Click me! ")))))

(defn parent-view
      [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ _]
                   (js/alert "Received an event from a child."))
        om/IRender
        (render [_]
                (apply dom/div nil [
                                    (dom/span nil (str "Parent " (om/id owner)))
                                    (dom/button #js {:onClick #(event-bus/trickle owner {:event :disable})} "Disable children")
                                    (om/build child-view app)
                                    (om/build child-view app)]))))


(event-bus/root<>
  parent-view
  app-state
  {:target (. js/document (getElementById "app"))})