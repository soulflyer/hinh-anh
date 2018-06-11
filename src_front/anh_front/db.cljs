(ns anh-front.db)

(def default-db
  {:name "Projects"
   :project-list {}
   :picture-list {:pictures [{}]
                  :focus ""
                  :selected []}
   :error "All is well."
   :panel-focus :left
   :panel-focus-list [:left :pictures]
   :left-panel-list [:projects :details]
   :left-panel-display :projects
   :details-textfields []
   :details-focused-textbox ""
   ;; picture-display-index refers to picture-display-list.
   ;; First entry must be :grid or odd things will happen.
   ;; TODO change this to use the same technique as panel-focus.
   :picture-display-index 0
   :picture-display-list [:grid :single]
   :preferences
   {:show-empty-exif true
    :medium-directory "/Users/iain/Pictures/Published/medium"
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
    :hide-footer false
    :footer-colour "#808080"
    :footer-background "#f1f1f1"
    :project-background "red"
    :details-background "red"
    :details-textbox-background "#cccccc"
    :details-header-background "gray"
    }})
