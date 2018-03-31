(ns anh-front.tree
  (:require [re-com.core :as re-com]))

(def test-tree
  [{:label "2001"
    :expanded false
    :children [{:label "01"
                :expanded false
                :children ["proj1"]}
               {:label "02"
                :expanded false
                :children ["proj3" "proj4"]}]}
   {:label "2002"
    :expanded false
    :children []}
   {:label "2000"
    :expanded false
    :children []}])

(defn expand [path]
  (fn []
    (js/alert (str "hello " (last path)))))

(defn root
  [&leaves]
  [:ul.tree-root &leaves])

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [path]
  [:li
   [re-com/button
    :label (str (last path))
    :class "tree-button"
    :on-click (expand path)]
   (when :expanded
     [:ul
      ;; Get node details from?
      ;; (for [child :children]
      ;;   [node [path child]])
      ])])

(defn children
  [tree ch]
  (:children (some #(when (= ch (:label %)) %) tree)))
;; Use this for deeper levels
;; (reduce children test-tree ["2001" "01"])
;; need to convert children so it can be called like this:
;; (children tree level1 level2 etc)

(defn node-data
  [label children]
  {:label label
   :expanded false
   :children children})
