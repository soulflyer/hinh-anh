(ns anh-front.db)

(def default-db
  {:name                    "Projects"
   :picture-list            {:pictures [{}] :focus "" :selected []}
   :error                   "All is well."
   :panel-focus             :left
   :panel-focus-list        [:left :pictures]
   :left-panel-list         [:projects :details :keywording :keywords :preferences]
   :left-panel-display      :projects
   :details-textfields      []
   :details-focused-textbox ""
   ;; picture-display-index refers to picture-display-list.
   ;; First entry must be :grid or odd things will happen.
   ;; TODO change this to use the same technique as panel-focus.
   :picture-display-index   0
   :picture-display-list    [:grid :single]
   ;;:keyword-set             []

   :keyword-pic-display-all true

   ;; re-com popover won't accept these so they are now defined in atoms.cljs
   ;; :keyword-add-button-show   false
   ;; :keyword-move-button-show  false
   ;; :keyword-merge-button-show false
   :show-delete-keywording false
   :picture-filter-stars   0

   :preferences
   {:api-root              "http://localhost:31000/api"
    :show-empty-exif       false
    :last-project          []
    :fullsize-directory    "/Users/iain/Pictures/Published/fullsize"
    :medium-directory      "/Users/iain/Pictures/Published/medium"
    :large-directory       "/Users/iain/Pictures/Published/large"
    :view-fullsize         true
    ;; This vector specifies the writeable fields in the details panel
    :iptc-fields           [[:Object-Name "Title" 1]
                            [:Caption-Abstract "Caption" 3]]
    :picture-columns       5
    :picture-sort-field    "_id"
    :picture-grid-gap      "14px"
    :picture-border-width  "1px"
    :hide-footer           false
    :keyword-set           []
    :keyword-sets          [{:name     "people"
                             :keywords ["me" "Pen" "Nhâm"]}
                            {:name     "surface"
                             :keywords ["entry" "under" "over" "under-over" "boat" "ladder" "rope"]}]
    :favorite-keywords     "people"
    :keyword-shortcuts     "asdfgzxcvb"
    :keyword-set-shortcuts "hjkl;nm,./"
    :colours
    {:picture-text-colour        "#9e9e9e"
     :pictures-background        "#262626"
     :picture-background         "#121212"
     :picture-border             "black"
     :picture-border-focused     "lightblue"
     :picture-border-unfocused   "#666666"
     :picture-selected-colour    "#1c4563"
     :footer-colour              "#808080"
     :footer-background          "#f1f1f1"
     :project-background         "red"
     :details-background         "darkgray"
     :details-textbox-background "#cccccc"
     :details-header-background  "gray"
     :shortcut-highlight         "#2953d0"
     :button-background          "gray"}}})
