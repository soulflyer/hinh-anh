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
  :project-tree
  (fn [db _]
    (:project-tree db)))

(rf/reg-sub
  :displayed-project
  (fn [db _]
    (:displayed-project db)))

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
