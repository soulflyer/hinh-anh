(ns anh-front.tree
  (:require [re-com.core :as re-com]))

(defn expand [label]
  (fn []
   (js/alert (str "hello " label))))

(defn root
  [&leaves]
  [:ul.tree-root &leaves])

(defn node
  "A tree node built using a :li"
  [label]
  [:li
   [re-com/button
    :label (str label)
    :class "tree-button"
    :on-click (expand label)]])
