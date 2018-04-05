(ns anh-front.db)

(def default-db
  {:name "Projects"
   :project-tree {:root {:label "years"
                         :expanded false
                         :children []}}
   :projects {"1958" "Projects go here"}})
