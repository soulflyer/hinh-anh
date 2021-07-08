(ns anh-front.events.api-events.api-events
  (:require [re-frame.core :as rf]))

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
  (fn [db [_ response]]
    (-> db
        (assoc :loading? false)
        (assoc :error response))))
