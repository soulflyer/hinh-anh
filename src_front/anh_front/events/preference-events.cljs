(ns anh-front.preference-events
  (:require [anh-front.db  :as db]
            [re-frame.core :as rf]
            [akiroz.re-frame.storage :as store]
            [anh-front.db :as db]
            [anh-front.tree :as tree]
            [clojure.set :as set]
            [re-frame.core :as rf]))

(rf/reg-event-db
  :set-api-root
  (fn  [db [_ api-root]]
    (assoc-in db [:preferences :api-root] api-root)))

(rf/reg-event-db
  :toggle-view-fullsize
  (fn [db _]
    (let [view-fullsize (rf/subscribe [:view-fullsize])]
      (assoc-in db [:preferences :view-fullsize] (not @view-fullsize)))))

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
