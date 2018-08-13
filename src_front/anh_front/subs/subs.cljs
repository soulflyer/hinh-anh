(ns anh-front.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :name
  (fn [db]
    (:name db)))

(rf/reg-sub
  :error
  (fn [db _]
    (:error db)))

(rf/reg-sub
  :loading?
  (fn [db _]
    (or (:loading? db)
        (:keyword-loading? db))))

(rf/reg-sub
  :keyword-tree
  (fn [db _]
    (:keyword-tree db)))

(rf/reg-sub
  :keyword-focus
  (fn [_ _]
    (rf/subscribe [:keyword-tree]))
  (fn [keyword-tree _]
    (:focus keyword-tree)))

(rf/reg-sub
  :keyword-pic-display-all
  (fn [db _]
    (:keyword-pic-display-all db)))

;; (rf/reg-sub
;;   :keyword-delete-button-show
;;   (fn [db _]
;;     (:keyword-delete-button-show db)))

(rf/reg-sub
  :keyword-move-button-show
  (fn [db _]
    (:keyword-move-button-show db)))

(rf/reg-sub
  :keyword-merge-button-show
  (fn [db _]
    (:keyword-merge-button-show db)))

(rf/reg-sub
  :keyword-add-button-show
  (fn [db _]
    (:keyword-add-button-show db)))

(rf/reg-sub
  :panel-focus
  (fn [db _]
    (:panel-focus db)))

(rf/reg-sub
  :panel-focus-list
  (fn [db _]
    (:panel-focus-list db)))

(rf/reg-sub
  :left-panel-display
  (fn [db _]
    (:left-panel-display db)))

(rf/reg-sub
  :left-panel-list
  (fn [db _]
    (:left-panel-list db)))

(rf/reg-sub
  :displaying
  (fn [db _]
    (:displaying db)))

(rf/reg-sub
  :panel-focus-map
  (fn [_ _]
    (rf/subscribe [:panel-focus-list]))
  (fn [panel-focus-list _]
    (zipmap (iterate inc 0) panel-focus-list)))

(rf/reg-sub
  :left-panel-map
  (fn [_ _]
    (rf/subscribe [:left-panel-list]))
  (fn [left-panel-list _]
    (zipmap (iterate inc 0) left-panel-list)))

(rf/reg-sub
  :project-tree
  (fn [db _]
    (:project-tree db)))

(rf/reg-sub
  :displayed-project
  (fn [db _]
    (:displayed-project db)))

(rf/reg-sub
  :show-delete-keywording
  (fn [db]
    (:show-delete-keywording db)))
