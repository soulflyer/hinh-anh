(ns anh-front.events.preference-events
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
  :set-api-root
  (fn [db [_ api-root]]
    (assoc-in db [:preferences :api-root] api-root)))

(rf/reg-event-db
  :set-dive-centre
  (fn [db [_ dive-centre]]
    (assoc-in db [:preferences :dive-centre] dive-centre)))

(rf/reg-event-db
  :toggle-view-fullsize
  (fn [db _]
    (let [view-fullsize (rf/subscribe [:view-fullsize])]
      (assoc-in db [:preferences :view-fullsize] (not @view-fullsize)))))

(rf/reg-event-db
  ;; Sadly this requires a restart. Doesn't seem to be any way to change
  ;; the split except by the mouse.
  :set-screen-split
  (fn [db [_ split-percent]]
    (assoc-in db [:preferences :screen-split] split-percent)))

(rf/reg-event-db
  :set-picture-columns
  (fn [db [_ cols]]
    (assoc-in db [:preferences :picture-columns] cols)))

(rf/reg-event-db
  :inc-picture-columns
  (fn  [db _]
    (let [max-columns 12
          columns (rf/subscribe [:picture-columns])]
      (assoc-in
        db
        [:preferences :picture-columns]
        (min (inc @columns) max-columns)))))

(rf/reg-event-db
  :dec-picture-columns
  (fn  [db _]
    (let [min-columns 1
          columns (rf/subscribe [:picture-columns])]
      (assoc-in
        db
        [:preferences :picture-columns]
        (max (dec @columns) min-columns)))))
