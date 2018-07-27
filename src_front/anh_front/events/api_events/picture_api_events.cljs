(ns anh-front.picture-api-events
  (:require [ajax.core         :as ajax]
            [anh-front.helpers :as helpers]
            [cognitect.transit :as transit]
            [re-frame.core     :as rf]))

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
                       (assoc :error "Loading pictures...")
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
          (assoc    :error "")
          (assoc-in [:picture-list :focus] first-pic)
          (assoc-in [:picture-list :pictures] resp)
          (assoc-in [:picture-list :selected] [])
          ;; TODO This should probably be a sub
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
