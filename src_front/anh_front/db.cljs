(ns anh-front.db)

(def default-db
  {:name "Projects"
   :project-list {}
   :picture-list {:pictures [{}] :focus ""}
   :error "All is well."
   :preferences
   {:medium-directory "/Users/iain/Pictures/Published/medium"
    :picture-columns 5
    :picture-grid-gap "14px"
    :picture-text-colour "#9e9e9e"
    :pictures-background "#262626"
    :picture-background "#121212"
    :picture-border "black"
    :picture-border-selected "lightblue"
    :picture-selected-colour "#22373e"
    :picture-border-width "1px"
    }})
