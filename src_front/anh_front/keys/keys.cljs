(ns anh-front.keys.keys
  (:require [anh-front.atoms           :as atoms]
            [anh-front.keys.key-codes  :refer [key-codes key-vals]]
            [anh-front.keys.keywording :refer [generate-keywording-shortcut-keys
                                               generate-keywording-set-shortcut-keys]]
            [re-frame.core :as rf]))

(def always-listen-keys
  [{:keyCode (key-codes "esc")}
   ;; {:keyCode (key-codes "space")}
   {:keyCode (key-codes "return")}])

(def common-keys
  [[[:inc-picture-columns]
    [{:keyCode (key-codes "right")
      :ctrlKey true}]]
   [[:dec-picture-columns]
    [{:keyCode (key-codes "left")
      :ctrlKey true}]]
   ;; [[:set-keys :projects]
   ;;  [{:keyCode (key-codes ",")}]]
   ;; [[:set-keys :pictures]
   ;;  [{:keyCode (key-codes ".")}]]
   [[:clear-all]
    [{:keyCode (key-codes "delete")}]]
   [[:select-all]
    [{:keyCode (key-codes "a")
      :metaKey true}]]
   [[:open-project-external]
    [{:keyCode (key-codes "p")
      :metaKey true}]]
   [[:open-pictures]
    [{:keyCode (key-codes "o")
      :metaKey true}]]
   [[:next-panel]
    [{:keyCode (key-codes "/")}]]
   [[:toggle-footer]
    [{:keyCode (key-codes "f")
      :metaKey true}]]
   [[:rotate-left-panel]
    [{:keyCode (key-codes "q")
      :ctrlKey false}]]
   [[:set-left-panel :projects]
    [{:keyCode (key-codes "w")}]]
   [[:set-left-panel :keywording]
    [{:keyCode (key-codes "e")
      :ctrlKey false
      :shiftKey false}]]
   [[:set-left-panel :keywords]
    [{:keyCode (key-codes "r")
      :shiftKey false
      :ctrlKey false}]]
   [[:fill-keyword-set]
    [{:keyCode (key-codes "u")}]]
   [[:picture-filter-stars 5]
    [{:keyCode (key-codes "5")
      :metaKey true}]]
   [[:picture-filter-stars 4]
    [{:keyCode (key-codes "4")
      :metaKey true}]]
   [[:picture-filter-stars 3]
    [{:keyCode (key-codes "3")
      :metaKey true}]]
   [[:picture-filter-stars 2]
    [{:keyCode (key-codes "2")
      :metaKey true}]]
   [[:picture-filter-stars 1]
    [{:keyCode (key-codes "1")
      :metaKey true}]]
   [[:picture-filter-stars 0]
    [{:keyCode (key-codes "0")
      :metaKey true}]]
   [[:rating 5]
    [{:keyCode (key-codes "5")
      :metaKey false}]]
   [[:rating 4]
    [{:keyCode (key-codes "4")
      :metaKey false}]]
   [[:rating 3]
    [{:keyCode (key-codes "3")
      :metaKey false}]]
   [[:rating 2]
    [{:keyCode (key-codes "2")
      :metaKey false}]]
   [[:rating 1]
    [{:keyCode (key-codes "1")
      :metaKey false}]]
   [[:rating 0]
    [{:keyCode (key-codes "0")
      :metaKey false}]]
   [[:close-popovers]
    [{:keyCode (key-codes "esc")}]]])

(def details-keys
  [[[:say-hello "Details"]
    [{:keyCode (key-codes "down")}]]])

(def project-keys
  [[[:next-project-open]
    [{:keyCode (key-codes "down")
      :ctrlKey false}]]
   [[:prev-project-open]
    [{:keyCode (key-codes "up")
      :ctrlKey false}]]
   [[:up-or-close :project-tree]
    [{:keyCode (key-codes "left")}]]
   [[:toggle-button-show atoms/export-json-button-show]
    [{:keyCode (key-codes "j")}]]
   [[:expand-selected :project-tree]
    [{:keyCode (key-codes "right")
      :ctrlKey false}]]])

(def keyword-keys
  [[[:next-keyword-open]
    [{:keyCode (key-codes "down")
      :ctrlKey false}]]
   [[:prev-keyword-open]
    [{:keyCode (key-codes "up")
      :ctrlKey false}]]
   [[:up-or-close :keyword-tree]
    [{:keyCode (key-codes "left")}]]
   [[:expand-selected :keyword-tree]
    [{:keyCode (key-codes "right")}]]
   [[:toggle-keyword-sub-display]
    [{:keyCode (key-codes "a")}]]
   [[:toggle-keyword-pic-display]
    [{:keyCode (key-codes "b")}]]
   [[:toggle-button-show atoms/keyword-add-button-show]
    [{:keyCode (key-codes "=")}]]
   [[:toggle-button-show atoms/keyword-delete-button-show]
    [{:keyCode (key-codes "-")}]]
   [[:toggle-button-show atoms/keyword-move-button-show]
    [{:keyCode (key-codes "m")
      :shiftKey false}]]
   [[:toggle-button-show atoms/keyword-merge-button-show]
    [{:keyCode (key-codes "m")
      :shiftKey true}]]
   [[:toggle-button-show atoms/keyword-rename-button-show]
    [{:keyCode (key-codes "r")
      :ctrlKey true}]]
   [[:toggle-button-show atoms/keyword-set-best-button-show]
    [{:keyCode (key-codes "s")}]]
   [[:toggle-button-show atoms/keyword-add-orphans-button-show]
    [{:keyCode (key-codes "o")}]]
   [[:toggle-button-show atoms/go-to-project-button-show]
    [{:keyCode (key-codes "p")
      :shiftKey false}]]
   [[:toggle-button-show atoms/keyword-purge-unused-button-show]
    [{:keyCode (key-codes "p")
      :shiftKey true}]]
   [[:load-keyword-tree]
    [{:keyCode (key-codes "r")
      :shiftKey true}]]
   [[:toggle-button-show atoms/keyword-find-button-show]
    [{:keyCode (key-codes "f")}]]
   [[:toggle-button-show atoms/export-json-button-show]
    [{:keyCode (key-codes "j")}]]
   ;; [[:close-popovers]
   ;;  [{:keyCode (key-codes "return")}]]
   ])

(def picture-keys
  [[[:next-picture]
    [{:keyCode (key-codes "right")
      :ctrlKey false}]]
   [[:prev-picture]
    [{:keyCode (key-codes "left")
      :ctrlKey false}]]
   [[:down-picture]
    [{:keyCode (key-codes "down")
      :ctrlKey false}]]
   [[:up-picture]
    [{:keyCode (key-codes "up")
      :ctrlKey false}]]
   [[:toggle-select-focused-pic]
    [{:keyCode (key-codes "space")}]]
   [[:rotate-display]
    [{:keyCode (key-codes "return")}]]])

(def keywording-keys
  [[[:toggle-edit-keywords]
    [{:keyCode (key-codes "e")
      :ctrlKey true}]]
   [[:toggle-edit-keyword-sets]
    [{:keyCode (key-codes "e")
      :shiftKey true}]]
   [[:close-popovers]
    [{:keyCode (key-codes "return")}]]
   [[:toggle-button-show atoms/save-keyword-set-show]
    [{:keyCode (key-codes "s")
      :ctrlKey true}]]])

(def project-key-set
  {:event-keys (into common-keys project-keys)
   ;; :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def keywords-key-set
  {:event-keys (into common-keys keyword-keys)
   ;; :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def picture-key-set
  {:event-keys (into common-keys picture-keys)
   ;; :prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def details-key-set
  {:event-keys (into common-keys picture-keys)
   ;; :prevent-default-keys prevent-keys
   :always-listen-keys [{:keyCode 13}]})

;; TODO test this. Why does it throw errors in the console
(defn keywording-key-set
  []
  {:event-keys (reduce into
                       [common-keys
                        ;;                     picture-keys
                        keywording-keys
                        (generate-keywording-shortcut-keys)
                        (generate-keywording-set-shortcut-keys)])
   ;; :prevent-default-keys prevent-keys
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

(defn shortcut-string
  "Given an entry from keydown returns a string describing the key"
  [shortcut]
  (let [key-function (first (first shortcut))
        key-number (:keyCode (first (second shortcut)))
        key-name (get key-vals key-number)
        ctrl-mod (if (:ctrlKey (first (second shortcut)))
                   "C" "")
        meta-mod (if (:metaKey (first (second shortcut)))
                   "M" "")
        shift-mod (if (:shiftKey (first (second shortcut)))
                    "S" "")
        key-modifiers (str ctrl-mod meta-mod shift-mod)
        filler (if (> (count key-modifiers) 0)
                 "-" "")]
    (str key-modifiers filler key-name " " key-function)))

;; TODO move this into a sub?
(defn current-keys
  []
  (let [keydown @(rf/subscribe [:keydown])]
    (map shortcut-string (:event-keys keydown)))
  )

(comment
  (current-keys)
  (get key-vals 65)
  (:ctrlKey {:shiftKey true})
  (shortcut-string [[:select-all][{:keyCode 65 :metaKey true}]])
  (keywording-key-set)
  (key-rules :projects)
  (key-rules :pictures)
  (key-rules :details)
  (key-rules :keywords)
  (key-rules :keywording)
  (key-rules :default)
  )
