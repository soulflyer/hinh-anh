(ns anh-front.events
  (:require [ajax.core :as ajax]
            [anh-front.config :as config]
            [anh-front.db :as db]
            [anh-front.project-tree :as project-tree]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    db/default-db))

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

(rf/reg-event-db
  :say-hello
  (fn
    [db _]
    (js/alert (str "hello"))
    db))
