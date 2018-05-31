(ns anh-front.api-events
  (:require
   [anh-front.config       :as config]
   [anh-front.helpers      :as helpers]
   [anh-front.project-tree :as project-tree]
   [cognitect.transit      :as transit]
   [day8.re-frame.http-fx  :as dont-delete-me-or-http-xhrio-will-go-away]
   [re-frame.core          :as rf]
   [ajax.core              :as ajax]))

(rf/reg-event-db
  :load-fail
  (fn
    [db [_ error _]]
    (let [error-message (str error " load failed")]
      (-> db
          (println error-message)
          (assoc :loading? false)
          (assoc :error error-message)))))

(rf/reg-event-fx
  :request-projects
  (fn
    [{db :db} _]
    {:http-xhrio {:method          :get
                  :cross-origin    true
                  :uri             (str config/api-root "/project/maps")
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:projects-response]
                  :on-failure      [:load-fail "Projects"]}
     :db  (assoc db :loading? true)}))

(rf/reg-event-db
  :projects-response
  (fn
    [db [_ response]]
    (let [reader    (transit/reader :json)
          resp      (transit/read reader response)
          tree-data  (project-tree/tree-data resp)]
      (-> db
          (assoc :loading? false)
          (assoc :project-tree tree-data)))))

;;(rf/dispatch-sync [:request-pictures ["2002" "01" "01-Teesdale"]])
(rf/reg-event-fx
  :request-pictures
  (fn
    [{db :db} [_ path]]
    (let [project-path (reduce str (interpose "/" path))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str config/api-root "/photos/" project-path)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:pictures-response]
                    :on-failure      [:load-fail (str "Project " project-path)]}})))

(rf/reg-event-db
  :pictures-response
  (fn
    [db [_ response]]
    (let [reader   (transit/reader :json)
          resp     (transit/read reader response)
          first-pic (helpers/image-path (first resp))
          ]
      (-> db
          (assoc :loading? false)
          (assoc :picture-list {:focus first-pic :selected [] :pictures resp})
          (assoc :displayed-project (get-in db [:project-tree :focus]))))))
