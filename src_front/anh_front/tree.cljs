(ns anh-front.tree
  "Incoming data needs to be rearranged to look something like this:
  {:2001 {:expanded false
          :children {:01
                     {:expanded false
                      :children [\"proj1\"]}
                     :02
                     {:expanded false
                      :children [\"proj3\" \"proj4\"]}}}
   :2002 {:expanded false
          :children []}
   :2000 {:expanded false
          :children []}}"
  (:require [re-com.core :as re-com]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer [defn-traced]]
            [com.rpl.specter :as sp]))

;; TODO make this work for stings not cljs keywords or it will be no good
;; for the exif keywords tree.
(def test-tree
  {:2001 {:expanded false
          :children {:01
                     {:expanded false
                      :children ["proj1"]}
                     :02
                     {:expanded true
                      :children ["proj3" "proj4"]}}}
   :2002 {:expanded false
          :children []}
   :2000 {:expanded true
          :children []}})

(defn child-with-key
  [tree ch]
  (ch tree))

(defn child-with-label
  [tree ch]
  (some #(when (= ch (:label %)) %) tree))

(defn children
  ([tree ch]
   (reduce #(:children (child-with-key %1 %2)) tree ch))
  ([tree]
   (children tree [])))

(defn child-list
  "Return the children of a given tree node as a list of names.
  Works if children of tree is a map or a vector of strings."
  ([tree path]
   (child-list (children tree path)))
  ([tree]
   (if (instance? cljs.core/PersistentVector tree)
     tree
     (keys (children tree)))))

(defn child
  [tree path]
  (let [leaf (last path)
        len  (count path)
        trunk (take (dec len) path)]
    (child-with-label (children tree trunk) leaf)))

(defn root
  [&leaves]
  [:ul.tree-root &leaves])


(defn next-node [tree path]
  path)

(defn expanded? [tree path]
  (get-in tree (conj (vec (interpose :children path)) :expanded)))

(defn toggle-expand [tree path]
  (fn []
    (rf/dispatch [:toggle-expand tree path])))

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [tree path]
  (let [label (str (last path))
        expanded (expanded? tree path)]
    [:li
     [re-com/v-box
      :children
      [[re-com/label
        :label label
        :class "tree-button"
        :on-click (toggle-expand tree path)]
       (let [ch (children tree path)]
         (if (and expanded (< 0 (count ch)))
           (into [:ul]
                 (if (map? ch)
                   (for [child ch]
                     (node tree (conj path (key child))) )
                   (for [child ch]
                     [:li (str child)])))))]]]))
