(ns anh-front.keys
  (:require [anh-front.atoms           :as atoms]
            [anh-front.key-codes       :refer [key-codes]]
            [anh-front.keywording-keys :refer [keywording-shortcut-keys
                                               keywording-set-shortcut-keys]]))

(def prevent-keys
  [{:which (key-codes "return")}
   {:which (key-codes "up")}
   {:which (key-codes "down")}
   {:which (key-codes "space")}
   {:which (key-codes "a")
    :metaKey true}])

(def always-listen-keys
  [{:which (key-codes "esc")}
   ;;{:which (key-codes "space")}
   {:which (key-codes "return")}
   ])

(def common-keys
  [[[:inc-picture-columns]
    [{:which (key-codes "right")
      :ctrlKey true}]]
   [[:dec-picture-columns]
    [{:which (key-codes "left")
      :ctrlKey true}]]
   [[:set-keys :projects]
    [{:which (key-codes ",")}]]
   [[:set-keys :pictures]
    [{:which (key-codes ".")}]]
   [[:clear-all]
    [{:which (key-codes "delete")}]]
   [[:select-all]
    [{:which (key-codes "a")
      :metaKey true}]]
   [[:open-project-external]
    [{:which (key-codes "p")
      :metaKey true}]]
   [[:open-pictures]
    [{:which (key-codes "o")
      :metaKey true}]]
   [[:next-panel]
    [{:which (key-codes "/")}]]
   [[:toggle-footer]
    [{:which (key-codes "f")
      :metaKey true}]]
   [[:rotate-left-panel]
    [{:which (key-codes "q")
      :ctrlKey false}]]
   [[:set-left-panel :projects]
    [{:which (key-codes "w")}]]
   [[:set-left-panel :keywording]
    [{:which (key-codes "e")
      :ctrlKey false
      :shiftKey false}]]
   [[:set-left-panel :keywords]
    [{:which (key-codes "r")
      :shiftKey false
      :ctrlKey false}]]
   [[:fill-keyword-set]
    [{:which (key-codes "u")}]]
   [[:picture-filter-stars 5]
    [{:which (key-codes "5")
      :metaKey true}]]
   [[:picture-filter-stars 4]
    [{:which (key-codes "4")
      :metaKey true}]]
   [[:picture-filter-stars 3]
    [{:which (key-codes "3")
      :metaKey true}]]
   [[:picture-filter-stars 2]
    [{:which (key-codes "2")
      :metaKey true}]]
   [[:picture-filter-stars 1]
    [{:which (key-codes "1")
      :metaKey true}]]
   [[:picture-filter-stars 0]
    [{:which (key-codes "0")
      :metaKey true}]]
   [[:rating 5]
    [{:which (key-codes "5")
      :metaKey false}]]
   [[:rating 4]
    [{:which (key-codes "4")
      :metaKey false}]]
   [[:rating 3]
    [{:which (key-codes "3")
      :metaKey false}]]
   [[:rating 2]
    [{:which (key-codes "2")
      :metaKey false}]]
   [[:rating 1]
    [{:which (key-codes "1")
      :metaKey false}]]
   [[:rating 0]
    [{:which (key-codes "0")
      :metaKey false}]]
   [[:close-popovers]
    [{:which (key-codes "esc")}]]])

(def details-keys
  [[[:say-hello "Details"]
    [{:which (key-codes "down")}]]])

(def project-keys
  [[[:next-project-open]
    [{:which (key-codes "down")
      :ctrlKey false}]]
   [[:prev-project-open]
    [{:which (key-codes "up")
      :ctrlKey false}]]
   [[:up-or-close :project-tree]
    [{:which (key-codes "left")}]]
   [[:toggle-button-show atoms/export-json-button-show]
    [{:which (key-codes "j")}]]
   [[:expand-selected :project-tree]
    [{:which (key-codes "right")
      :ctrlKey false}]]])

(def keyword-keys
  [[[:next-keyword-open]
    [{:which (key-codes "down")
      :ctrlKey false}]]
   [[:prev-keyword-open]
    [{:which (key-codes "up")
      :ctrlKey false}]]
   [[:up-or-close :keyword-tree]
    [{:which (key-codes "left")}]]
   [[:expand-selected :keyword-tree]
    [{:which (key-codes "right")}]]
   [[:toggle-keyword-sub-display]
    [{:which (key-codes "a")}]]
   [[:toggle-keyword-pic-display]
    [{:which (key-codes "b")}]]
   [[:toggle-button-show atoms/keyword-add-button-show]
    [{:which (key-codes "=")}]]
   [[:toggle-button-show atoms/keyword-delete-button-show]
    [{:which (key-codes "-")}]]
   [[:toggle-button-show atoms/keyword-move-button-show]
    [{:which (key-codes "m")
      :shiftKey false}]]
   [[:toggle-button-show atoms/keyword-merge-button-show]
    [{:which (key-codes "m")
      :shiftKey true}]]
   [[:toggle-button-show atoms/keyword-rename-button-show]
    [{:which (key-codes "r")
      :ctrlKey true}]]
   [[:toggle-button-show atoms/keyword-set-best-button-show]
    [{:which (key-codes "s")}]]
   [[:toggle-button-show atoms/keyword-add-orphans-button-show]
    [{:which (key-codes "o")}]]
   [[:toggle-button-show atoms/go-to-project-button-show]
    [{:which (key-codes "p")
      :shiftKey false}]]
   [[:toggle-button-show atoms/keyword-purge-unused-button-show]
    [{:which (key-codes "p")
      :shiftKey true}]]
   [[:load-keyword-tree]
    [{:which (key-codes "r")
      :shiftKey true}]]
   [[:toggle-button-show atoms/keyword-find-button-show]
    [{:which (key-codes "f")}]]
   [[:toggle-button-show atoms/export-json-button-show]
    [{:which (key-codes "j")}]]
   [[:close-popovers]
    [{:which (key-codes "return")}]]
   ])

(def picture-keys
  [[[:next-picture]
    [{:which (key-codes "right")
      :ctrlKey false}]]
   [[:prev-picture]
    [{:which (key-codes "left")
      :ctrlKey false}]]
   [[:down-picture]
    [{:which (key-codes "down")
      :ctrlKey false}]]
   [[:up-picture]
    [{:which (key-codes "up")
      :ctrlKey false}]]
   [[:toggle-select-focused-pic]
    [{:which (key-codes "space")}]]
   [[:rotate-display]
    [{:which (key-codes "return")}]]])

(def keywording-keys
  [[[:toggle-edit-keywords]
    [{:which (key-codes "e")
      :ctrlKey true}]]
   [[:toggle-edit-keyword-sets]
    [{:which (key-codes "e")
      :shiftKey true}]]
   [[:close-popovers]
    [{:which (key-codes "return")}]]
   [[:toggle-button-show atoms/save-keyword-set-show]
    [{:which (key-codes "s")
      :ctrlKey true}]]])

(def project-key-set
  {:event-keys (into common-keys project-keys)
   :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def keywords-key-set
  {:event-keys (into common-keys keyword-keys)
   ;;:prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def picture-key-set
  {:event-keys (into common-keys picture-keys)
   :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def details-key-set
  {:event-keys (into common-keys picture-keys)
   :prevent-default-keys prevent-keys
   :always-listen-keys [{:which 13}]})

(defn keywording-key-set []
  {:event-keys (reduce into
                       [common-keys
   ;;                     picture-keys
                        keywording-keys
                        (keywording-shortcut-keys)
                        (keywording-set-shortcut-keys)])
   :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(defn key-rules
  [panel]
  (case panel
    :projects   project-key-set
    :pictures   picture-key-set
    :details    details-key-set
    :keywords   keywords-key-set
    :keywording (keywording-key-set)
    project-key-set))
