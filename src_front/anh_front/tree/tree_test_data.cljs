(ns anh-front.tree-test-data)

(def test-project-tree
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
