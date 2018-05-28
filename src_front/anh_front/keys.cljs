(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))
(def prevent-keys
  [{:which 38} ;; up
   {:which 40} ;; down
   ])

(def common-keys
  [[[:say-hello "iain"]
    [{:which 8}]] ;; del
   [[:set-project-keys]
    [{:which 188}]] ;; ,
   [[:set-picture-keys]
    [{:which 190}]] ;; .
   ])
(def default-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-project-open :project-tree]
                     [{:which 83}]]
                    [[:prev-project-open :project-tree]
                     [{:which 87}]]
                    [[:up-and-close :project-tree]
                     [{:which 65}]]
                    [[:expand-selected :project-tree]
                     [{:which 68}]]
                    [[:next-picture]
                     [{:which 39}]]
                    [[:prev-picture]
                     [{:which 37}]]
                    [[:down-picture]
                     [{:which 40}]]
                    [[:up-picture]
                     [{:which 38}]]]))
   :prevent-default-keys prevent-keys})

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
                     ]]))
   :prevent-default-keys prevent-keys})

(def picture-keys
  {:event-keys (into
                 []
                 (concat
                   common-keys
                   [[[:next-picture]
                     [{:which 68}]
                     [{:which 39}]]
                    [[:prev-picture]
                     [{:which 65}]
                     [{:which 37}]]
                    [[:down-picture]
                     [{:which 83}]
                     [{:which 40}]]
                    [[:up-picture]
                     [{:which 87}]
                     [{:which 38}]]]))
   :prevent-default-keys prevent-keys})

(defn setup-keys
  ([key-map]
   (re-frame/dispatch
     [::re-pressed/set-keydown-rules key-map]))
  ([]
   (setup-keys default-keys)))
