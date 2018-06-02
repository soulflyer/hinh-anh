(ns anh-front.db)

(def default-db
  {:name "Projects"
   :project-list {}
   :picture-list {:pictures [{}]
                  :focus ""
                  :selected []}
   :error "All is well."
   ;;:picture-display "grid"
   :picture-display-index 0
   :picture-display-list [:grid :single]
   :preferences
   {:medium-directory "/Users/iain/Pictures/Published/medium"
    :large-directory "/Users/iain/Pictures/Published/large"
    :picture-columns 5
    :picture-grid-gap "14px"
    :picture-text-colour "#9e9e9e"
    :pictures-background "#262626"
    :picture-background "#121212"
    :picture-border "black"
    :picture-border-focused "lightblue"
    :picture-selected-colour "#1c4563"
    :picture-border-width "1px"
    }})
