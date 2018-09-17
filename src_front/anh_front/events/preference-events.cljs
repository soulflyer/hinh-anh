(ns anh-front.preference-events
  (:require [anh-front.db  :as db]
            [re-frame.core :as rf]))

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
