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

(defn find-index-route [v data]
	(let [walker (sp/recursive-path
                 [] p
                 (sp/if-path sequential?
                             [sp/INDEXED-VALS
                              (sp/if-path [sp/LAST (sp/pred= v)]
                                          sp/FIRST
                                          [(sp/collect-one sp/FIRST) sp/LAST p])]))
        ret (sp/select-first walker data)]
	  (if (or (vector? ret) (nil? ret)) ret [ret])))

(defn find-name
  [name]
  (sz/find-first #(= (:name %) name)))

(defn follow-path [path]
  (for [p path]
    (find-name p)))

(defn next-node
  "Takes a tree and a path and returns a path to the next node in the tree"
  [tree current-path]
  (let [next-node (or (sp/select-one
                        [specter-tree-zip (follow-path current-path) sz/NEXT] tree)
                      (sp/select-one
                        [specter-tree-zip (follow-path current-path)] tree))
        node-name (:name (first next-node))
        node-path (zip/path next-node)]
    (conj (vec (for [a node-path] (:name a)))
          node-name)))

(defn prev-node
  [tree current-path]
  (let [prev-node (or (sp/select-one
                        [specter-tree-zip (follow-path current-path) sz/PREV] tree)
                      (sp/select-one
                        [specter-tree-zip (follow-path current-path)] tree))
        node-name (:name (first prev-node))
        node-path (zip/path prev-node)]
    (conj (vec (for [a node-path] (:name a)))
          node-name)))

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
                 (for [child ch]
                   (node tree (conj path (:name child))) )
                 )))]]]))
