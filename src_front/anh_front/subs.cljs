(ns anh-front.subs
  (:require [re-frame.core :as rf]
            [anh-front.project-tree :as project-tree]
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
  :project-tree
  (fn [db _]
    (:project-tree db)))

(rf/reg-sub
  :years
  (fn [_ _]
    (rf/subscribe [:project-tree]))
  (fn [proj _]
    (tree/labels proj)))
