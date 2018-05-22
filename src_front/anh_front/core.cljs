(ns anh-front.core
  (:require  [reagent.core          :as reagent :refer [atom]]
             [re-frame.core         :as re-frame]
             [anh-front.events      :as events]
             [anh-front.tree-events :as tree-events]
             [anh-front.api-events  :as api-events]
             [anh-front.subs        :as reframe-subs]
             [anh-front.views       :as views]
             [anh-front.config      :as config]
             [anh-front.keys        :as keys]
             [re-pressed.core       :as rp]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (keys/setup-keys)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (dev-setup)
  (println "hello from init!")
  (re-frame/dispatch-sync [:request-projects])
  (mount-root))

(defn ^:export speak []
  (println "hello from clojurescript"))
