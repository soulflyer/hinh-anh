(ns anh-front.keys
  (:require [anh-front.atoms           :as atoms]
            [anh-front.key-codes       :refer [key-codes]]
            [anh-front.keywording-keys :refer [keywording-shortcut-keys
                                               keywording-set-shortcut-keys]]))

(def prevent-keys
  [{:which (key-codes "return")}
   {:which (key-codes "a")
    :metaKey true}])

(def always-listen-keys
  [{:which (key-codes "esc")}])

(def common-keys
  [[[:set-keys :projects]
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
    [{:which (key-codes "w")}]]
   [[:fill-keyword-set]
    [{:which (key-codes "u")}]]
   [[:set-favorite-keywords]
    [{:which (key-codes "y")}]]])

(def details-keys
  [[[:say-hello "Details"]
    [{:which (key-codes "down")}]]])

(def project-keys
  [[[:next-project-open]
    [{:which (key-codes "down")}]]
   [[:prev-project-open]
    [{:which (key-codes "up")}]]
   [[:up-or-close :project-tree]
    [{:which (key-codes "left")}]]
   [[:expand-selected :project-tree]
    [{:which (key-codes "right")}]]])

(def keyword-keys
  [[[:next-keyword-open]
    [{:which (key-codes "down")}]]
   [[:prev-keyword-open]
    [{:which (key-codes "up")}]]
   [[:up-or-close :keyword-tree]
    [{:which (key-codes "left")}]]
   [[:expand-selected :keyword-tree]
    [{:which (key-codes "right")}]]
   [[:keyword-all-pics]
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
      :shiftKey false}]]
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
   [[:close-popovers]
    [{:which (key-codes "esc")}]
    [{:which (key-codes "return")}]]])

(def picture-keys
  [[[:next-picture]
    [{:which (key-codes "right")}]]
   [[:prev-picture]
    [{:which (key-codes "left")}]]
   [[:down-picture]
    [{:which (key-codes "down")}]]
   [[:up-picture]
    [{:which (key-codes "up")}]]
   [[:toggle-select-focused-pic]
    [{:which (key-codes "space")}]]
   [[:rotate-display]
    [{:which (key-codes "return")}]]])

(def keywording-keys
[[[:toggle-delete-keywording]
[{:which (key-codes "e")}]]])

(def project-key-set
{:event-keys (into common-keys project-keys)
:prevent-default-keys prevent-keys})

(def keywords-key-set
  {:event-keys (into common-keys keyword-keys)
   ;;:prevent-default-keys prevent-keys
   :always-listen-keys always-listen-keys})

(def picture-key-set
{:event-keys (into common-keys picture-keys)
:prevent-default-keys prevent-keys})

(def details-key-set
{:event-keys (into common-keys picture-keys)
:prevent-default-keys prevent-keys
:always-listen-keys [{:which 13}]})

(defn keywording-key-set []
{:event-keys (reduce into
[common-keys
picture-keys
keywording-keys
(keywording-shortcut-keys)
(keywording-set-shortcut-keys)])
:prevent-default-keys prevent-keys})

(defn key-rules
[panel]
(case panel
:projects   project-key-set
:pictures   picture-key-set
:details    details-key-set
:keywords   keywords-key-set
:keywording (keywording-key-set)
project-key-set))
