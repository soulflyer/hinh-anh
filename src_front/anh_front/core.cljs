(ns anh-front.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [re-frame.core :as re-frame]
             [anh-front.events :as events]
             [anh-front.views :as views]
             [anh-front.config :as config]
;;             [re-frisk-remote.core :refer [enable-re-frisk-remote!]]
             ))

(defn mount-root [setting]
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (re-frame/dispatch-sync [::events/initialize-db])
;;  (enable-re-frisk-remote!)
  (mount-root setting))
