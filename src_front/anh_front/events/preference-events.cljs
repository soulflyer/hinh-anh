(ns anh-front.preference-events
  (:require [akiroz.re-frame.storage :as store]
            [re-frame.core :as rf]))

(store/reg-co-fx! :anh
                  {:fx   :store
                   :cofx :store})

(rf/reg-event-fx
  :store-preferences
  [(rf/inject-cofx :store)]
  (let [prefs (rf/subscribe [:preferences])]
    (fn [{:keys [store db]} _]
      {:store (assoc store :preferences @prefs)})))

(rf/reg-event-fx
  :load-preferences
  [(rf/inject-cofx :store)]
  (fn [{:keys [db store]} _]
    {:db (assoc db :preferences (:preferences store))}))

(rf/reg-event-db
  :set-api-root
  (fn  [db [_ api-root]]
    (assoc-in db [:preferences :api-root] api-root)))
