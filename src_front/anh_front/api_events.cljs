(ns anh-front.api-events
  (:require [ajax.core                :as ajax]
            [anh-front.details-helper :as helper]
            [anh-front.helpers        :as helpers]
            [anh-front.project-tree   :as project-tree]
            [cognitect.transit        :as transit]
            [com.rpl.specter          :as sp]
            [day8.re-frame.http-fx    :as dont-delete-me-or-http-xhrio-will-go-away]
            [re-frame.core            :as rf]
            [anh-front.config         :as config]))

(rf/reg-event-db
  :load-fail
  (fn
    [db [_ error]]
    (let [error-message (str error " api call failed")]
      (println error-message)
      (-> db
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

(rf/reg-event-fx
  :add-keyword-local
  (fn  [{:keys [db]} [_ [pic kw]]]
    (let [id (helpers/path->id pic)]
      (println (str "pic: " pic " _id: " id  " Keyword: " kw))
      {:db (-> (sp/transform
                 [:picture-list
                  :pictures
                  (sp/walker #(= id (get % "_id")))
                  (sp/submap ["Keywords"])
                  "Keywords"]
                 ;; TODO This is a bit hacky. Would be nice if the new ones stayed at the end.
                 #(sort (vec (set (conj % kw)))) db)
               (assoc :loading? false))})))

(rf/reg-event-fx
  :add-keyword-to-photo
  (fn [{:keys [db]} [_ [pic kw]]]
    (let [a 1]
      (println (str "Keyword " kw))
      {:http-xhrio {:method          :get
                    :uri             (str config/api-root "/photos/add/keyword/" kw "/" pic)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:add-keyword-local [pic kw]]
                    :on-failure      [:load-fail "add keyword"]}
       :db (assoc db :loading? true)})))

(rf/reg-event-fx
  :write-iptc-local
  (fn  [{:keys [db]} [_ [pic field text]]]
    (let [id (helpers/path->id pic)]
      (println (str "_id: " id " Field: " field " Title: " text))
      {:db (-> (sp/setval
                 [:picture-list
                  :pictures
                  (sp/walker #(= id (get % "_id")))
                  (sp/submap [field])]
                 {field text} db)
               (assoc :loading? false))})))

(rf/reg-event-fx
  :write-iptc
  (fn [{:keys [db]} [_ [pic field text]]]
    (println (str "Path " pic))
    {:http-xhrio
     {:method          :get
      :cross-origin    true
      :uri             (str config/api-root "/photos/write/" (name field) "/" pic "/" text)
      :format          (ajax/json-request-format)
      :response-format (ajax/json-response-format {:keywords? true})
      :on-success      [:write-iptc-local [pic field text]]
      :on-failure      [:load-fail (str text " to " pic)]}
     :db               (assoc db :loading? true)}))

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
                    :on-failure      [:load-fail (str "Project " project-path)]}
       :db          (assoc db :loading? true)})))

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

(rf/reg-event-fx
  :open-project
  (fn [{:keys [db]} [_ path]]
    {:http-xhrio {:method :get
                  :cross-origin true
                  :uri             (str config/api-root "/open/project/" path)
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:set-error-message (str "Opened " path)]
                  :on-failure      [:load-fail (str "Open " path)]}}))
