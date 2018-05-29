(ns anh-front.db)

(def default-db
  {:name "Projects"
   :project-list {}
   :picture-list {:pictures [{}] :focus ""}
   :error "All is well."
   :preferences
   {:medium-directory "/Users/iain/Pictures/Published/medium"
    :picture-columns 5
    :picture-grid-gap "14px"}})
