(ns anh-front.subs
  (:require [re-frame.core :as rf]
            [anh-front.project-tree :as project-tree]))

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
    (for [year-record (project-tree/years proj)]
      (year-record "year"))))

;; (rf/reg-sub
;;   :projects
;;   (fn [_ _]
;;     (rf/subscribe [:project-tree]))
;;   (fn [proj _]
;;     ))
;; (rf/reg-sub
;;   :months
;;   (fn [_ _]
;;     (rf/subscribe [:projects]))
;;   (fn [tree year]
;;     (for [month (tree/months tree year)]
;;       (month "month"))))

(rf/reg-sub
  :tree
  (fn [_ _]
    (rf/subscribe [:projects]))
  (fn [proj _]
    "tree"))
