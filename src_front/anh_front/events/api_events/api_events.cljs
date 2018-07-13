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
      (-> db(assoc :loading? false)
          (assoc :error error-message)))))

(rf/reg-event-db
  :keywords-response
  (fn  [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :loading? false)
          (assoc :keywords resp)))))

(rf/reg-event-fx
  :load-keywords
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/keyword/maps")
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:say-hello "keywords"]
                    :on-failure      [:load-fail "keywords"]}
       :db         (-> db (assoc :loading? true))})))

;;(rf/dispatch-sync [:request-pictures ["2002" "01" "01-Teesdale"]])
(rf/reg-event-fx
  :load-pictures-for-project
  (fn
    [{db :db} [_ path]]
    (let [api-root     (rf/subscribe [:api-root])
          project-path (reduce str (interpose "/" path))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/photos/" project-path)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:pictures-response]
                    :on-failure      [:load-fail (str "Project " project-path)]}
       :db         (-> db
                       (assoc :loading? true)
                       (assoc-in [:preferences :last-project] path))})))

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
    (let [api-root       (rf/subscribe [:api-root])
          project-vector (rf/subscribe [:displayed-project])
          project-path   (reduce str (interpose "/" @project-vector))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/photos/" project-path)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:refresh-response]
                    :on-failure      [:load-fail (str "Refresh " project-path)]}
       :db         (assoc db :loading? true)})))

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
