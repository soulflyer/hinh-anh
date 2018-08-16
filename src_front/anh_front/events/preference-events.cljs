(ns anh-front.preference-events
  (:require [anh-front.db  :as db]
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
