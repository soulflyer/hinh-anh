(ns anh-front.tree
  (:require [re-com.core :as re-com]
            [day8.re-frame.tracing :refer [fn-traced]]
            ))
(def test-string "hi there")
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

;; Incoming data needs to be rearranged to look something like this:
;; TODO make this work for stings not cljs keywords or it will be no good
;; for the exif keywords tree.
(def test-tree2
  {:2001 {:expanded false
          :children {:01
                     {:expanded false
                      :children ["proj1"]}
                     :02
                     {:expanded false
                      :children ["proj3" "proj4"]}}}
   :2002 {:expanded false
          :children []}
   :2000 {:expanded false
          :children []}})

;; Need access function that takes any number of params and uses them to
;; travel the tree. ie:
;; (children test-tree :2001 :01) => ["proj1"]
;; (children test-tree :2001) => [:01 :02]
(defn child-with-key
  [tree ch]
  (ch tree))

(defn expand [path]
  (fn []
    (js/alert (str "hello " (last path)))))

(defn children
  [tree ch]
  (reduce #(:children (child-with-key %1 %2)) tree ch))

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
