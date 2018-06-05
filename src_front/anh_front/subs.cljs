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
  :first-panel
  (fn [_ _]
    (rf/subscribe [:panel-focus-list]))
  (fn [panel-focus-list _]
    (first panel-focus-list)))

(rf/reg-sub
  :panel-focus-map
  (fn [_ _]
    (rf/subscribe [:panel-focus-list]))
  (fn [panel-focus-list _]
    (zipmap (iterate inc 0) panel-focus-list)))

(rf/reg-sub
  :project-tree
  (fn [db _]
    (:project-tree db)))

(rf/reg-sub
  :displayed-project
  (fn [db _]
    (:displayed-project db)))

(rf/reg-sub
  :picture-display-list
  (fn [db _]
    (:picture-display-list db)))

(rf/reg-sub
  :picture-display-index
  (fn [db _]
    (:picture-display-index db)))

(rf/reg-sub
  :picture-display
  (fn [_ _]
    [(rf/subscribe [:picture-display-list])
     (rf/subscribe [:picture-display-index])])
  (fn [[picture-display-list picture-display-index] _]
    (nth picture-display-list picture-display-index)))

(rf/reg-sub
  :selected-project
  (fn [_ _]
    (rf/subscribe [:project-tree]))
  (fn [pt _]
    (:focus pt)))

(rf/reg-sub
  :picture-list
  (fn [db _]
    (:picture-list db)))

(rf/reg-sub
  :pictures
  (fn [_ _]
    (rf/subscribe [:picture-list]))
  (fn [pics _]
    (:pictures pics)))

(rf/reg-sub
  :picture-ids
  (fn [_ _]
    (rf/subscribe [:pictures]))
  (fn [root _]
    (zipmap (iterate inc 0) (map helpers/image-path root))))

(rf/reg-sub
  :focused-pic
  (fn [_ _]
    (rf/subscribe [:picture-list]))
  (fn [pics _]
    (:focus pics)))

(rf/reg-sub
  :selected-pics
  (fn [_ _]
    (rf/subscribe [:picture-list]))
  (fn [picture-list _]
    (:selected picture-list)))
