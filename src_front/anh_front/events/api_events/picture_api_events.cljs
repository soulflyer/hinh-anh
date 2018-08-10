(ns anh-front.picture-api-events
  (:require [ajax.core :as ajax]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  ;; TODO check if this should be refreshing a project or a keyword!
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
