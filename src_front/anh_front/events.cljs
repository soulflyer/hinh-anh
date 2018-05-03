(ns anh-front.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [anh-front.db           :as db]
            [anh-front.config       :as config]
            [anh-front.tree         :as tree]
            [anh-front.project-tree :as project-tree]
            [cognitect.transit      :as transit]
            [day8.re-frame.tracing  :refer-macros [fn-traced]]
            [com.rpl.specter :as sp]))

(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    db/default-db))

(rf/reg-event-db
  :toggle-expand
  (fn [db [_ tree path]]
    (assoc db :project-tree (sp/transform
                              (conj (vec (interpose :children path)) :expanded)
                              #(if % false true)
                              tree))))

(rf/reg-event-db
  :project-response
  (fn
    [db [_ response]]
    (let [reader    (transit/reader :json)
          resp      (transit/read reader response)
          tree-data  (project-tree/tree-data resp)]
      (-> db
          (assoc :loading? false)
          (assoc :project-tree tree-data)))))

(rf/reg-event-db
  :project-fail
  (fn
    [db [_ response]]
    (-> db
        (assoc :loading? false)
        (assoc :error "Project load failed"))))

(rf/reg-event-fx
  :request-projects
  (fn
    [{db :db} _]
    {:http-xhrio {:method          :get
                  :cross-origin    true
                  :uri             (str config/api-root "/project/maps")
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:project-response]
                  :on-failure      [:project-fail]}
     :db  (assoc db :loading? true)}))
