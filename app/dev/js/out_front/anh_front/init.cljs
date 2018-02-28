(ns anh-front.init
  (:require [figwheel.client :as fw :include-macros true]
            [anh-front.core :as core]
            [anh-front.conf :as conf]))

(enable-console-print!)

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3441/figwheel-ws"
 :jsload-callback 'start-descjop!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
