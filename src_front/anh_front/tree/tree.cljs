(ns anh-front.tree
  "Incoming data needs to be rearranged to look something like the data defined
  in tree-test-data"
  (:require [clojure.string         :as string]
            [clojure.zip            :as zip]
            [com.rpl.specter        :as sp]
            [com.rpl.specter.zipper :as sz]
            [day8.re-frame.tracing  :refer [defn-traced]]
            [re-frame.core          :as rf]
            [re-com.core            :as re-com]
            [anh-front.helpers      :as helpers]))

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
  (if (= (first path) "Root")
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

(defn up-node
  [path]
  (if (< 1 (count path))
    (vec (drop-last path))
    path))

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
  [:ul.tree-root
   {:style {:padding "0px"}} &leaves])

(defn expanded? [tree path]
  (sp/select-one [(path-nav path) :expanded] tree))

(defn toggle-expand [tree-name path hook]
  (fn []
    (rf/dispatch [:toggle-expand tree-name path])
    (rf/dispatch [:save-selected tree-name path])
    (rf/dispatch [hook])))

(defn node
  "A tree node built using a :li. Takes a vector representing the path from the root of the tree"
  [tree tree-name path hook]
  (let [expanded  (expanded? tree path)
        label     (last path)
        path-str  (reduce str (interpose "-" path))
        ch        (children tree path)
        children? (< 0 (count ch))]
    ^{:key path-str}
    [:li {:style {:list-style "none"} :id path-str}
     [re-com/v-box
      ;; TODO change this to check for a user defined sub and use that to set the highlight.
      ;; or maybe just have the border colour info here not in a css file? That might lose
      ;; the ability to have a different highlight when the focus is elsewhere.
      :class (if (= path (drop-root (:focus tree)))
               "selected-tree-entry"
               "tree-entry")
      :style {:overflow "hidden"}
      :children
      [[re-com/h-box
        :children [[re-com/box
                    :style {:width     "10px"
                            :padding   "6px 0px 0px 2px"
                            :font-size "0.5em"}
                    :child (if children?
                             (if expanded
                               helpers/down-triangle
                               helpers/right-triangle)
                             "")]
                   [re-com/label
                    :label label
                    :on-click (toggle-expand tree-name path hook)]]]
       (if (and expanded (< 0 (count ch)))
         (into [:ul {:style {:padding-left "0.2em"}}]
               (for [child ch]
                 (node tree tree-name (conj path (:name child)) hook))))]]]))
