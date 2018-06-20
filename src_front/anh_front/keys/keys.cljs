(ns anh-front.keys
  (:require [re-frame.core :as re-frame]
            [re-pressed.core :as re-pressed]))

(def prevent-keys
  [{:which 13}])

(def common-keys
  [[[:set-keys :projects]
    [{:which 188}]] ;; ,
   [[:set-keys :pictures]
    [{:which 190}]] ;; .
   [[:clear-all]
    [{:which 8}]] ;; del
   [[:open-project-external]
    [{:which 80
      :metaKey true}]] ;; meta p
   [[:next-panel]
    [{:which 191}]]  ;; /
   [[:toggle-footer]
    [{:which 70
      :metaKey true}]] ;;meta f
   [[:rotate-left-panel]
    [{:which 87}]] ;; w
   ])

(def details-keys
  [[[:say-hello "Details"]
    [{:which 40}]]
   ])

(def project-keys
  [[[:next-project-open :project-tree]
    [{:which 40}]] ;; down
   [[:prev-project-open :project-tree]
    [{:which 38}]] ;; up
   [[:fetch-pictures]
    [{:which 32}]] ;; spc
   [[:up-and-close :project-tree]
    [{:which 37}]] ;; left
   [[:expand-selected :project-tree]
    [{:which 39}]]  ;; right
   ])

(def picture-keys
  [[[:next-picture]
    [{:which 39}]] ;; right
   [[:prev-picture]
    [{:which 37}]] ;; left
   [[:down-picture]
    [{:which 40}]] ;; down
   [[:up-picture]
    [{:which 38}]] ;; up
   [[:toggle-select-focused-pic]
    [{:which 32}]] ;; space
   [[:rotate-display]
    [{:which 13}]] ;; ret
   ])

(def project-key-set
  {:event-keys (into common-keys project-keys)
   :prevent-default-keys prevent-keys})

(def picture-key-set
  {:event-keys (into common-keys picture-keys)
   :prevent-default-keys prevent-keys})

(def details-key-set
  {:event-keys (into common-keys details-keys)
   :prevent-default-keys prevent-keys
   :always-listen-keys [{:which 13}]})

(def keywording-key-set
  {:event-keys (into
                 common-keys
                 (concat picture-keys
                         [[[:fill-keyword-set]
                           [{:which 85}]]]))
   :prevent-default-keys prevent-keys})

(defn key-rules
  [panel]
  (case panel
    :projects   project-key-set
    :pictures   picture-key-set
    :details    details-key-set
    :keywording keywording-key-set
    project-key-set))

;; (defn setup-keys
;;   ([key-map]
;;    (println (str "***********Using key set: " key-map))
;;    (re-frame/dispatch
;;      [::re-pressed/set-keydown-rules key-map]))
;;   ([]
;;    (setup-keys project-key-set)))
