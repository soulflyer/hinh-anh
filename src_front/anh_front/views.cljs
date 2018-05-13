(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
            [anh-front.subs :as subs]
            [anh-front.tree :as tree]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:h1 @name]))

(defn projects
  []
  (let [tree-name :project-tree
        tree (rf/subscribe [tree-name])]
    [:div.projects
     (tree/root
       (for [year (:children @tree)]
         (tree/node @tree tree-name [(:name year)])))]))

(defn ui
  []
  [:div
   [:h1 @(rf/subscribe [:name])]
   [projects]])

(defn main-panel []
  [re-com/v-box
   :height "100%"
   :children [[ui]]])
