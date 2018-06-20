(ns anh-front.subs
  (:require [anh-front.helpers :as helpers]
            [anh-front.project-tree :as project-tree]
            [anh-front.tree :as tree]
            [day8.re-frame.tracing  :refer-macros [fn-traced]]
            [re-frame.core :as rf]))

(rf/reg-sub
  :name
  (fn [db]
    (:name db)))

(rf/reg-sub
  :error
  (fn [db _]
    (:error db)))

(rf/reg-sub
  :hide-footer
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:hide-footer preferences)))

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
