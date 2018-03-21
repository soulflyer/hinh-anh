(ns anh-front.subs
  (:require [re-frame.core :as rf]
            [anh-front.tree :as tree]))

(rf/reg-sub
  :name
  (fn [db]
    (:name db)))

(rf/reg-sub
  ::project-string
  (fn [db _]
    (:project-string db)))

(rf/reg-sub
  :projects
  (fn [db _]
    (:projects db)))

(rf/reg-sub
  :years
  (fn [_ _]
    (rf/subscribe [:projects]))
  (fn [proj _]
    (for [year-record (proj "years")]
      (year-record "year"))))

;; (rf/reg-sub
;;   :months
;;   (fn [_ _]
;;     (rf/subscribe [:projects]))
;;   (fn [proj year]
;;     ))

(rf/reg-sub
  :tree
  (fn [_ _]
    (rf/subscribe [:projects]))
  (fn [proj _]
    "tree"))
