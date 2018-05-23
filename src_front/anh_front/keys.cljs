(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))

(def default-keys
  {:event-keys [[[:say-hello "iain"]
                 [{:which 8}]]
                [[:next-node :project-tree]
                 [{:which 83}]]
                [[:prev-node :project-tree]
                 [{:which 87}]]
                [[:open-selected :project-tree]
                 [{:which 68}]
                 [{:which 13}]]
                [[:fetch-pictures]
                 [{:which 32}]]
                [[:up-and-close :project-tree]
                 [{:which 65}]]]
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
