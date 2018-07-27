(ns anh-front.api-events
  (:require [ajax.core         :as ajax]
            [anh-front.helpers :as helpers]
            [cognitect.transit :as transit]
            [re-frame.core     :as rf]))

(rf/reg-event-db
  :load-fail
  (fn
    [db [_ error]]
    (let [error-message (str error " api call failed")]
      (println error-message)
      (-> db
          (assoc :loading? false)
          (assoc :keyword-loading? false)
          (assoc :error error-message)))))

(rf/reg-event-db
  :simple-response
  (fn [db _]
    (-> db
        (assoc :loading? false)
        (assoc :error ""))))

(rf/reg-event-db
  :load-best-response
  (fn  [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :loading? false)
          (assoc :error "")
          (assoc :picture-list {:pictures [resp]
                                :focus (helpers/image-path resp)
                                :selected []})))))

(rf/reg-event-fx
  :load-best-picture
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/" kw "/best/map")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:load-best-response]
        :on-failure      [:load-fail "best keyword"]}
       :db (-> db
               (assoc :loading? true)
               (assoc :error (str "Loading best picture for " kw)))})))
