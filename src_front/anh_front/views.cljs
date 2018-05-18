(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
            [anh-front.subs :as subs]
            [anh-front.tree :as tree]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:h1 @name]))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected--: " @sp)]))

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
   [title]
   [selected-project]
   [projects]])

(defn main-panel []
  [re-com/v-box
   :height "100%"
   :children [[ui]]])
