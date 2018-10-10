(ns anh-front.show-events
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
  :hide-footer
  (fn  [db _]
    (assoc-in db [:preferences :hide-footer] true)))

(rf/reg-event-fx
  :toggle-footer
  (fn [{:keys [db]} _]
    (let [hf (rf/subscribe [:hide-footer])]
      {:db (assoc-in db [:preferences :hide-footer] (not @hf))})))

(rf/reg-event-fx
  :toggle-edit-keyword-sets
  (fn [{:keys [db]} _]
    (let [sdk (rf/subscribe [:show-edit-keyword-sets])]
      {:db (assoc db :show-edit-keyword-sets (not @sdk))})))

(rf/reg-event-fx
  :toggle-edit-keywords
  (fn [{:keys [db]} _]
    (let [sdk (rf/subscribe [:show-edit-keywords])]
      {:db (assoc db :show-edit-keywords (not @sdk))})))

(rf/reg-event-db
  :picture-filter-stars
  (fn [db [_ stars]]
    (println "****** " stars)
    (assoc db :picture-filter-stars stars)))
