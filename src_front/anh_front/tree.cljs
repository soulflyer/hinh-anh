(ns anh-front.tree
  "Incoming data needs to be rearranged to look something like the data defined
  in test-tree"
  (:require [re-com.core :as re-com]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer [defn-traced]]
            [clojure.zip :as zip]
            [com.rpl.specter.zipper :as sz]
            [com.rpl.specter :as sp]))

(def test-tree
  {:name "root"
   :focus ["root"]
   :expanded true
   :children [{:name "2000"
               :expanded true
               :children [{:name "01"
                           :expanded true
                           :children [{:name "project-1"}
                                      {:name "project-2"}
                                      {:name "project-3"}
                                      {:name "project-4"}]}
                          {:name "02"
                           :expanded true
                           :children [{:name "project-5"}
                                      {:name "project-6"}]}]}
              {:name "2001"
               :expanded false
               :children [{:name "01"
                           :expanded false
                           :children []}]}
              {:name "2002"
               :expanded false
               :children [{:name "01"
                           :expanded false
                           :children []}]}]})

(defn path-nav [path]
  (sp/path
    (mapcat (fn [s] [:children sp/ALL #(= (:name %) s)])
            path)))

(defn tree-zip
  "Returns a zipper for tree elements given a root element"
  [root]
  (zip/zipper (complement string?)
              (fn [node] (if (:expanded node)
                           (seq (:children node))))
              (fn [node children]
                (assoc node :children (and children (apply vector children))))
              root))

(def specter-tree-zip (sz/zipper tree-zip))

(defn find-name
  [name]
  (sz/find-first #(= (:name %) name)))

(defn follow-path [path]
  (for [p path]
    (find-name p)))

(defn drop-root
  "get rid of the leading root entry from a path"
  [path]
  (if (= (first path) "root")
    (vec (rest path))
    path))

(defn next-node
  "Takes a tree and a path and returns a path to the next node in the tree"
  [tree current-path]
  (let [next-node (or (sp/select-one
                        [specter-tree-zip (follow-path current-path) sz/NEXT] tree)
                      (sp/select-one
                        [specter-tree-zip (follow-path current-path)] tree))
        node-name (:name (first next-node))
        node-path (zip/path next-node)]
    (drop-root (conj (vec (for [a node-path] (:name a)))
                     node-name))))

(defn prev-node
  "Given a tree and a node, returns the path to the previous node."
  [tree current-path]
  (let [prev-node (or (sp/select-one
                        [specter-tree-zip (follow-path current-path) sz/PREV] tree)
                      (sp/select-one
                        [specter-tree-zip (follow-path current-path)] tree))
        node-name (:name (first prev-node))
        node-path (zip/path prev-node)]
    (drop-root (conj (vec (for [a node-path] (:name a)))
                     node-name))))

(defn child-with-name
  [tree ch]
  (some #(when (= ch (:name %)) %) (:children tree)))

(defn children
  ([tree path]
   (:children (reduce #(child-with-name %1 %2)  tree path)))
  ([tree]
   (children tree [])))

(defn child-list
  ([tree path]
   (map :name (children tree path)))
  ([tree]
   (child-list tree [])))

(defn root
  [&leaves]
  [:ul.tree-root &leaves])

(defn expanded? [tree path]
  (sp/select-one [(path-nav path) :expanded] tree))

(defn toggle-expand [tree-name path]
  (fn []
    (rf/dispatch [:toggle-expand tree-name path])
    (rf/dispatch [:save-selected tree-name path])))

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [tree tree-name path]
  (let [label (str (last path))
        expanded (expanded? tree path)]
    [:li
     [re-com/v-box
      :children
      [[re-com/label
        :label label
        :class (if (= path (drop-root (:focus tree)))
                 "selected-tree-entry"
                 "tree-entry")
        :on-click (toggle-expand tree-name path)]
       (let [ch (children tree path)]
         (if (and expanded (< 0 (count ch)))
           (into [:ul]
                 (for [child ch]
                   (node tree tree-name (conj path (:name child)))))))]]]))
