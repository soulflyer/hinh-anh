(ns anh-front.subs
  (:require [re-frame.core :as rf]
            [anh-front.project-tree :as project-tree]
            [anh-front.tree :as tree]
            [day8.re-frame.tracing  :refer-macros [fn-traced]]))

(rf/reg-sub
  :name
  (fn [db]
    (:name db)))

(rf/reg-sub
  :project-tree
  (fn [db _]
    (:project-tree db)))

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
  :picture-columns
  (fn [db _]
    (:picture-columns db)))

(rf/reg-sub
  :picture-grid-gap
  (fn [db _]
    (:picture-grid-gap db)))

(rf/reg-sub
  :medium-directory
  (fn [db _]
    (:medium-directory db)))

(rf/reg-sub
  :pictures
  (fn [_ _]
    (rf/subscribe [:picture-list]))
  (fn [pics _]
    (:pictures pics)))

(rf/reg-sub
  :focused-pic
  (fn [_ _]
    (rf/subscribe [:picture-list]))
  (fn [pics _]
    (:focus pics)))
