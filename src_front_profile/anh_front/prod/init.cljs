(ns anh-front.init
    (:require [anh-front.core :as core]
              [anh-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
