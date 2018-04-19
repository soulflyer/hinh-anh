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
            [day8.re-frame.tracing :refer [fn-traced]]
            ))

;; TODO make this work for stings not cljs keywords or it will be no good
;; for the exif keywords tree.
(def test-tree
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

(defn child-with-key
  [tree ch]
  (ch tree))

(defn child-with-label
  [tree ch]
  (some #(when (= ch (:label %)) %) tree))

(defn expand [path]
  (fn []
    (js/alert (str "hello " (last path)))))

(defn children
  ([tree ch]
   (reduce #(:children (child-with-key %1 %2)) tree ch))
  ([tree]
   (children tree [])))

;;TODO make this work with a vector ie the projects
;; and use it in node-data
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

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [tree path]
  (let [tr (child tree path)
        label (str (last path))
        ;; Get this from app_db!
        expanded true]
    [:li
     [re-com/button
      ;; fill this with a call to (child tree path)
      :label label
      :class "tree-button"
      :on-click (expand path)
      ;; :expanded expanded
      ]
     (let [ch (children tree path)]
       (if (and expanded (< 0 (count ch)))
         [:ul
          (if (= cljs.core/PersistentArrayMap (type ch))
            (for [child ch]
              (node tree (conj path (key child))))
            (for [child ch]
              [:li child] )
            )]
         ))]))

(defn labels
  [tree]
  (vec (for [entry tree] (:label entry))))
