(ns anh-front.events
  (:require [re-frame.core :as rf]

            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [re-frame.core       :refer [reg-event-fx]]
            [anh-front.db           :as db]
            [anh-front.config       :as config]
            [anh-front.tree         :as tree]
            [anh-front.project-tree :as project-tree]
            [cognitect.transit      :as transit]))

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
          year-list (project-tree/year-list resp)
          year-data (for [year year-list]
                      (tree/node-data
                        year
                        (for [month (project-tree/month-list resp year)]
                          (tree/node-data
                            month
                            (for [project (project-tree/projects resp year month)]
                              (tree/node-data project []))))))
          year-map (zipmap
                     (map keyword year-list)
                     (map
                       #(tree/map-data (project-tree/month-list resp %))
                       year-list))]
      (-> db
          (assoc :project-tree year-data)
          (assoc :loading? false)
          (assoc :projects resp)
          (assoc :project-map year-map)))))

(rf/reg-event-db
  :project-fail
  (fn
    [db [_ response]]
    (-> db
        (assoc :loading? false)
        (assoc :error "Project load failed")
        )))

(rf/reg-event-fx        ;; <-- note the `-fx` extension
  :request-projects        ;; <-- the event id
  (fn                ;; <-- the handler function
    [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db

    ;; we return a map of (side) effects
    {:http-xhrio {:method          :get
                  :cross-origin    true
                  :uri             (str config/api-root "/project/maps")
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:project-response]
                  :on-failure      [:project-fail]}
     :db  (assoc db :loading? true)}))
