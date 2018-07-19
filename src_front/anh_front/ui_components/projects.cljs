(ns anh-front.projects
  (:require [anh-front.tree :as tree]
            [re-frame.core :as rf]
            [re-com.core :as rc]))

(defn panel
  []
  (let [tree-name :project-tree
        tree (rf/subscribe [tree-name])]
    (rc/scroller
      ;;:style {:margin-top "18px"}
      :v-scroll :auto
      :h-scroll :off
      :child
      [rc/box
       :child
       (tree/root
         (for [year (:children @tree)]
           (tree/node @tree tree-name [(:name year)] :fetch-pictures)))])))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected: " @sp)]))
