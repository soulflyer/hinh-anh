(ns anh-front.keys
  (:require [anh-front.key-codes       :refer [key-codes]]
            [anh-front.keywording-keys :refer [keywording-shortcut-keys
                                               keywording-set-shortcut-keys]]))

(def prevent-keys
  [{:which (key-codes "return")}])

(def common-keys
  [[[:set-keys :projects]
    [{:which (key-codes ",")}]]
   [[:set-keys :pictures]
    [{:which (key-codes ".")}]]
   [[:clear-all]
    [{:which (key-codes "delete")}]]
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
  [[[:next-project-open :project-tree]
    [{:which (key-codes "down")}]]
   [[:prev-project-open :project-tree]
    [{:which (key-codes "up")}]]
   [[:fetch-pictures]
    [{:which (key-codes "space")}]]
   [[:up-and-close :project-tree]
    [{:which (key-codes "left")}]]
   [[:expand-selected :project-tree]
    [{:which (key-codes "right")}]]])

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
    :keywording (keywording-key-set)
    project-key-set))

;; (defn setup-keys
;;   ([key-map]
;;    (println (str "***********Using key set: " key-map))
;;    (re-frame/dispatch
;;      [::re-pressed/set-keydown-rules key-map]))
;;   ([]
;;    (setup-keys project-key-set)))
