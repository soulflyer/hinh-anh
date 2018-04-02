(ns anh-front.db)

(def default-db
  {:name "projects"
   :project-tree {:root {:label "years"
                         :expanded false
                         :children []}}
   :projects {"1958" "Projects go here"}})
