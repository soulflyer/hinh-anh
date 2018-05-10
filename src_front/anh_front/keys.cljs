(ns anh-front.keys
  (:require [re-pressed.core :as re-pressed]
            [re-frame.core :as re-frame]))

(def default-keys
  {:event-keys [[[:say-hello]
                 [{:which 8}]
                 [{:which 38}]
                 [{:which 40}]
                 ]]
   :prevent-default-keys [{:which 38}
                          {:which 40}]})

(defn setup-keys
  ([key-map]
   (re-frame/dispatch
     [::re-pressed/set-keydown-rules key-map]))
  ([]
   (setup-keys default-keys)))
