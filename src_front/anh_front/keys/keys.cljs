(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))
(def prevent-keys
  [;;{:which 38} ;; up
   ;;{:which 40} ;; down
   ;;{:which 191}  ;; /
   {:which 13} ;; ret
   ;;{:which 37} ;; left
   ;;{:which 39} ;; right
   ])

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
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:say-hello "Details"]
                     [{:which 40} ]]]))
   :always-listen-keys [{:which 13}]
   :prevent-default-keys prevent-keys})

(def project-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-project-open :project-tree]
                     [{:which 40}] ;; down
                     ]
                    [[:prev-project-open :project-tree]
                     [{:which 38}] ;; up
                     ]
                    [[:fetch-pictures]
                     [{:which 32}]] ;; spc
                    [[:up-and-close :project-tree]
                     [{:which 37}] ;; left
                     ]
                    [[:expand-selected :project-tree]
                     [{:which 39}] ;; right
                     ]
                    ;; [[:set-keys :pictures]
                    ;;  [{:which 191}] ;; /
                    ;;  ]
                    ]))
   :prevent-default-keys prevent-keys})

(def picture-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-picture]
                     [{:which 39}] ;; right
                     ]
                    [[:prev-picture]
                     [{:which 37}] ;; left
                     ]
                    [[:down-picture]
                     [{:which 40}] ;; down
                     ]
                    [[:up-picture]
                     [{:which 38}] ;; up
                     ]
                    [[:toggle-select-focused-pic]
                     [{:which 32}] ;; space
                     ]
                    [[:rotate-display]
                     [{:which 13}] ;; ret
                     ]
                    [[:set-keys :projects]
                     [{:which 191}] ;; /
                     ]]))
   :prevent-default-keys prevent-keys})

(defn key-rules
  [panel]
  (case panel
    :projects project-keys
    :pictures picture-keys
    :details  details-keys
    project-keys))

(defn setup-keys
  ([key-map]
   (re-frame/dispatch
     [::re-pressed/set-keydown-rules key-map]))
  ([]
   (setup-keys project-keys)))
