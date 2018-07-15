(ns anh-front.keyword-tree
  (:require [clojure.walk :as walk]))

;; This is redundant
(def keystr
  {"name" "Root"
   "children" [{"name" "child1"
                "children" [{"name" "grandchild1"}]}
               {"name" "child2"}]})

(defn tree-data
  "convert the keys from string to keyword"
  [tree]
  (walk/keywordize-keys tree))
