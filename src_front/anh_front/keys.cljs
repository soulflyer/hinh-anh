(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))
(def prevent-keys
  [{:which 38} ;; up
   {:which 40} ;; down
   {:which 9}  ;; tab
   ])

(def common-keys
  [[[:set-keys :projects]
    [{:which 188}]] ;; ,
   [[:set-keys :pictures]
    [{:which 190}]] ;; .
   [[:toggle-select-focused-pic]
    [{:which 32}]] ;; space
   [[:clear-all]
    [{:which 8}]] ;; del
   [[:open-project-external]
    [{:which 80
      :metaKey true}]] ;; meta p
   [[:rotate-display]
    [{:which 13}]] ;; ret
   [[:next-panel]
    [{:which 9}]]  ;; tab
   ])

(def project-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-project-open :project-tree]
                     [{:which 83}] ;; s
                     [{:which 40}] ;; down
                     ]
                    [[:prev-project-open :project-tree]
                     [{:which 87}] ;; w
                     [{:which 38}] ;; up
                     ]
                    [[:fetch-pictures]
                     [{:which 32}]] ;; spc
                    [[:up-and-close :project-tree]
                     [{:which 65}] ;; a
                     [{:which 37}] ;; left
                     ]
                    [[:expand-selected :project-tree]
                     [{:which 39}] ;; right
                     [{:which 68}] ;;d
                     ]
                    [[:set-keys :pictures]
                     [{:which 191}] ;; /
                     ]]))
   :prevent-default-keys prevent-keys})

(def picture-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-picture]
                     [{:which 68}] ;; d
                     [{:which 39}] ;; right
                     ]
                    [[:prev-picture]
                     [{:which 65}] ;; a
                     [{:which 37}] ;; left
                     ]
                    [[:down-picture]
                     [{:which 83}] ;; s
                     [{:which 40}] ;; down
                     ]
                    [[:up-picture]
                     [{:which 87}] ;; w
                     [{:which 38}] ;; up
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
    project-keys))

(defn setup-keys
  ([key-map]
   (re-frame/dispatch
     [::re-pressed/set-keydown-rules key-map]))
  ([]
   (setup-keys project-keys)))
