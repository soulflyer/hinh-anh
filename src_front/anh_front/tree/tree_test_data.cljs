(ns anh-front.tree-test-data
  (:require [anh-front.tree :as tree]
            [anh-front.keyword-tree :as kwt]
            [com.rpl.specter :as sp]))

(def HAS-CHILDREN
  ;; pulled from https://stackoverflow.com/a/42915149/1671119
  (sp/recursive-path
    [] p
    [(sp/walker #(and (:name %) (:children %)))
     (sp/stay-then-continue [:children p])]))

(def test-project-tree
  {:name "Root"
   :focus ["Root"]
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

(def test-keyword-tree
  {:name "Root"
   :focus ["Root"]
   :expanded true
   :children [{:name "Keyword 1"
               :children [{:name "keyword 2"}
                          {:name "keyword 3"}
                          {:name "keyword 4"}]}
              {:name "Another keyword"}]})
