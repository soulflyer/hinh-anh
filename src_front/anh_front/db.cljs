(ns anh-front.db)

(def default-db
  {:name "projects"
   :project-tree {:root {:label "years"
                         :expanded true
                         :children []}}
   :projects {"1958" "Projects go here"}})
