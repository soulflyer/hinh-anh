(ns anh-front.api-events
  (:require [ajax.core                :as ajax]
            [anh-front.config         :as config]
            [anh-front.details-helper :as helper]
            [anh-front.helpers        :as helpers]
            [anh-front.project-tree   :as project-tree]
            [cognitect.transit        :as transit]
            [com.rpl.specter          :as sp]
            [day8.re-frame.http-fx    :as dont-delete-me-or-http-xhrio-will-go-away]
            [re-frame.core            :as rf]
            [cemerick.url             :as url]))


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
  :add-keyword-to-photos
  (fn [{:keys [db]} [_ kw]]
    (let [photo-paths (rf/subscribe [:selected-pics])
          photo-ids   (helpers/paths->ids @photo-paths)]
      {:http-xhrio {:method          :get
                    :uri             (str config/api-root
                                          "/photos/add/keyword/" kw "/" photo-ids)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:refresh-pictures]
                    :on-failure      [:load-fail "add keyword to photos"]}})))

(rf/reg-event-fx
  :delete-keyword-from-photos
  (fn [{:keys [db]} [_ kw]]
    (let [photo-paths (rf/subscribe [:selected-pics])
          photo-ids   (helpers/paths->ids @photo-paths)]
      {:http-xhrio {:method :get
                    :uri (str config/api-root "/photos/delete/keyword/" kw "/" photo-ids)
                    :format (ajax/json-request-format)
                    :response-format (ajax/json-response-format)
                    :on-success [:refresh-pictures]
                    :on-failure [:load-fail "delete keywords"]}})))

(rf/reg-event-fx
  :delete-keyword
  (fn [{:keys [db]} [_ [pic kw]]]
    {:http-xhrio {:method :get
                  :uri (str config/api-root "/photos/delete/keyword/" kw "/" pic)
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format)
                  :on-success [:delete-keyword-local [pic kw]]
                  :on-failure [:load-fail "delete keyword"]}}))

(rf/reg-event-fx
  :delete-keyword-local
  (fn [{:keys [db]} [_ [pic kw]]]
    (let [id (helpers/path->id pic)]
      {:db (-> (sp/transform
                 [:picture-list
                  :pictures
                  (sp/walker #(= id (get % "_id")))
                  (sp/submap ["Keywords"])
                  "Keywords"]
                 #(remove #{kw} %)
                 db)
               (assoc :loading? false))})))

(rf/reg-event-fx
  :write-iptc-local
  (fn  [{:keys [db]} [_ [pic field text]]]
    (let [id (helpers/path->id pic)]
      ;;(println (str "_id: " id " Field: " field " Title: " text))
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
    ;;(println (str "Path " pic))
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
  :load-pictures-for-project
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
    (let [reader    (transit/reader :json)
          resp      (transit/read reader response)
          first-pic (helpers/image-path (first resp))]
      (-> db
          (assoc    :loading? false)
          (assoc-in [:picture-list :focus] first-pic)
          (assoc-in [:picture-list :pictures] resp)
          (assoc-in [:picture-list :selected] [])
          (assoc    :displayed-project (get-in db [:project-tree :focus]))))))

(rf/reg-event-fx
  :refresh-pictures
  (fn [{:keys [db]} _]
    (let [project-vector (rf/subscribe [:displayed-project])
          project-path (reduce str (interpose "/" @project-vector))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str config/api-root "/photos/" project-path)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:refresh-response]
                    :on-failure      [:load-fail (str "Refresh " project-path)]}
       :db          (assoc db :loading? true)})))

(rf/reg-event-fx
  :refresh-response
  (fn
    [{:keys [db]} [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      {:db (-> db
               ;;(assoc    :error "Refreshed pictures")
               (assoc    :loading? false)
               (assoc-in [:picture-list :pictures] resp))})))

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

(rf/reg-event-fx
  :open-pictures
  (fn [{:keys [db]} _]
    (let [selected-pics (rf/subscribe [:selected-pics])
          pics          (url/url-encode (reduce str (interpose " " @selected-pics)))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str config/api-root "/open/medium/" pics)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-sucess       [:set-error-message (str "Opened selected pics")]
                    :on-failure      [:load-fail (str "Open pictures")]}})))
