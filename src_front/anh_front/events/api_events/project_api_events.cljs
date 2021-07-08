(ns anh-front.events.api-events.project-api-events
  "Events used to load the project tree."
  (:require [ajax.core :as ajax]
            [anh-front.project-tree :as project-tree]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :request-projects
  (fn
    [{db :db} _]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/project/maps")
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:projects-response]
                    :on-failure      [:load-fail "Projects"]}
       :db  (assoc db :loading? true)})))

(rf/reg-event-db
  :projects-response
  (fn
    [db [_ response]]
    (let [reader    (transit/reader :json)
          resp      (transit/read reader response)
          tree-data  (project-tree/tree-data resp)]
      (-> db
          (assoc :loading? false)
          ;; TODO this should only load the :children section of :project-tree
          (assoc :project-tree tree-data)))))
