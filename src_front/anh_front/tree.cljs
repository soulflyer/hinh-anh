(ns anh-front.tree
  (:require [re-com.core :as re-com]))

(defn year [years year]
  (some #(when (= year (% "year")) %) (years "years")))

(defn months [yrs yr]
  (get (year yrs yr) "months"))

(defn month [yrs yr mon]
  (some #(when (= mon (% "month")) %) (months yrs yr)))

(defn projects [yrs yr mon]
  (get (month yrs yr mon) "projects"))

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
