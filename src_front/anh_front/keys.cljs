(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))

(def default-keys
  {:event-keys [[[:say-hello "iain"]
                 [{:which 8}]]
                [[:next-node :project-tree]
                 [{:which 40}]]
                [[:prev-node :project-tree]
                 [{:which 38}]]
                [[:open-selected :project-tree]
                 [{:which 39}]
                 [{:which 13}]]
                [[:up-and-close :project-tree]
                 [{:which 37}]]]
   ;; :prevent-default-keys [{:which 38}
   ;;                        {:which 40}]
   })

(def project-keys
  {:event-keys [[[:next-project]
                 [{:which 38}]]]})

(defn setup-keys
  ([key-map]
   (re-frame/dispatch
     [::re-pressed/set-keydown-rules key-map]))
  ([]
   (setup-keys default-keys)))
