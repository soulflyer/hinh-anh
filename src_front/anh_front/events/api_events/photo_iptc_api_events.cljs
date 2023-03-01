(ns anh-front.events.api-events.photo-iptc-api-events
  "Events used to write IPTC data to pictures"
  (:require [ajax.core                :as ajax]
            [anh-front.helpers        :as helpers]
            [com.rpl.specter          :as sp]
            [day8.re-frame.http-fx    :as dont-delete-me-or-http-xhrio-will-go-away]
            [re-frame.core            :as rf]))

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
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/photos/write/" (name field) "/" pic "/" text)
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:write-iptc-local [pic field text]]
        :on-failure      [:load-fail (str text " to " pic)]}
       :db               (assoc db :loading? true)})))

(rf/reg-event-fx
  :write-rating
  (fn [_ [_ [pic rating]]]
    {:dispatch [:write-iptc [pic "Rating" (str rating)]]}))

(rf/reg-event-fx
  :rating
  (fn [_ [_ rating]]
    (let [focused (helpers/image-path @(rf/subscribe [:focused-pic]))]
      {:dispatch [:write-rating [focused rating]]})))
