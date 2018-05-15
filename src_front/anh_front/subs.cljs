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
  :next-project
  (fn [_ _]
    [(rf/subscribe [:project-tree])
     (rf/subscribe [:selected-project])])
  (fn-traced [[pt sp] _]
             (tree/next-node pt sp)))
