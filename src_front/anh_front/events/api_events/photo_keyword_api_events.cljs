(ns anh-front.events.api-events.photo-keyword-api-events
  "Events used to add and remove keywords from photos."
  (:require [ajax.core                :as ajax]
            [anh-front.helpers        :as helpers]
            [com.rpl.specter          :as sp]
            [day8.re-frame.http-fx    :as dont-delete-me-or-http-xhrio-will-go-away]
            [re-frame.core            :as rf]))

(rf/reg-event-fx
  :add-keyword-local
  (fn [{:keys [db]} [_ [pic kw]]]
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
    (let [api-root (rf/subscribe [:api-root])]
      (println (str "Keyword " kw))
      {:http-xhrio {:method          :get
                    :uri             (str @api-root "/photos/add/keyword/" kw "/" pic)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:add-keyword-local [pic kw]]
                    :on-failure      [:load-fail "add keyword"]}
       :db (assoc db :loading? true)})))

(rf/reg-event-fx
  :add-keyword-to-photos
  (fn [{:keys [db]} [_ kw]]
    (let [api-root    (rf/subscribe [:api-root])
          photo-paths (rf/subscribe [:selected-pics])
          photo-ids   (helpers/paths->ids @photo-paths)]
      {:http-xhrio {:method          :get
                    :uri             (str @api-root
                                          "/photos/add/keyword/" kw "/" photo-ids)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:refresh-pictures]
                    :on-failure      [:load-fail "add keyword to photos"]}})))

(rf/reg-event-fx
  :delete-keyword-from-photos
  (fn [{:keys [db]} [_ kw]]
    (let [photo-paths (rf/subscribe [:selected-pics])
          photo-ids   (helpers/paths->ids @photo-paths)
          api-root    (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :uri             (str @api-root "/photos/delete/keyword/" kw "/" photo-ids)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format)
                    :on-success      [:refresh-pictures]
                    :on-failure      [:load-fail "delete keywords"]}})))

(rf/reg-event-fx
  :delete-keyword-from-photo
  (fn [{:keys [db]} [_ [pic kw]]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method :get
                    :uri (str @api-root "/photos/delete/keyword/" kw "/" pic)
                    :format (ajax/json-request-format)
                    :response-format (ajax/json-response-format)
                    :on-success [:delete-keyword-local [pic kw]]
                    :on-failure [:load-fail "delete keyword"]}})))

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
