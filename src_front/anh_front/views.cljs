(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]
            [anh-front.subs :as subs]
            [anh-front.tree :as tree]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:h1 @name]))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected: " @sp)]))

(defn projects
  []
  (let [tree-name :project-tree
        tree (rf/subscribe [tree-name])]
    [:div.projects
     (tree/root
       (for [year (:children @tree)]
         (tree/node @tree tree-name [(:name year)])))]))

(defn main-panel []
  [rc/v-box
   :height "100%"
   :children [[rc/box
               :child [title]]
              [rc/scroller
               :max-height "300px"
               ;;:size "auto"
               ;;:max-height "80%"
               :child [projects]]]])
