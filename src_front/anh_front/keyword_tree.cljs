(ns anh-front.keyword-tree
  (:require [clojure.walk :as walk]
            [com.rpl.specter :as sp]))

(def keystr
  {"name" "Root"
   "children" [{"name" "child1"
                "children" [{"name" "grandchild1"}]}
               {"name" "child2"}]})

(def HAS-CHILDREN
  (sp/recursive-path
    [] p
    [(sp/walker #(and (:name %) (:children %)))
     (sp/stay-then-continue [:children p])]))

(defn tree-data
  "convert the keys from string to keyword"
  [tree]
  (let [kw-tree (walk/keywordize-keys tree)
        tr      (sp/setval [HAS-CHILDREN :expanded] false kw-tree) ]
    (assoc tr :expanded true)))
