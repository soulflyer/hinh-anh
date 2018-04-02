(ns anh-front.tree
  (:require [re-com.core :as re-com]
            ;;[day8.re-frame.tracing :refer-macros [fn-traced]]
            ))

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

(defn child-with-label
  [tree ch]
  (some #(when (= ch (:label %)) %) tree))

(defn children
  [tree ch]
  (reduce #(:children (child-with-label %1 %2)) tree ch))

(defn child
  [tree path]
  (let [leaf (last path)
        len  (count path)
        trunk (take (dec len) path)]
    (child-with-label (children tree trunk) leaf)))

(defn root
  [&leaves]
  [:ul.tree-root &leaves])

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [tree path]
  (let [tr (child tree path)
        {:keys [label expanded]} tr]
    [:li
     [re-com/button
      ;; fill this with a call to (child tree path)
      :label label
      :class "tree-button"
      :on-click (expand path)
      :expanded expanded]
     (when expanded
       [:ul
        (for [child (children tree path)]
          [node tree (conj path child)])])]))

(defn labels
  [tree]
  (vec (for [entry tree] (:label entry))))

(defn node-data
  [label children]
  {:label label
   :expanded false
   :children children})

(defn map-data
  [children]
  (into {:expanded false}
        (for [child children] [(keyword child) child])))
