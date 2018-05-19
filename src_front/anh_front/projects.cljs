(ns anh-front.projects
  (:require [anh-front.tree :as tree]
            [re-frame.core :as rf]))

(defn panel
  []
  (let [tree-name :project-tree
        tree (rf/subscribe [tree-name])]
    [:div.projects
     (tree/root
       (for [year (:children @tree)]
         (tree/node @tree tree-name [(:name year)])))]))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected: " @sp)]))
