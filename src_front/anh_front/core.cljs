(ns anh-front.core
  (:require [anh-front.api-events     :as api-events]
            [anh-front.config         :as config]
            [anh-front.events         :as events]
            [anh-front.keys           :as ks]
            [anh-front.key-events     :as key-events]
            [anh-front.main           :as main]
            [anh-front.picture-events :as picture-events]
            [anh-front.subs           :as reframe-subs]
            [anh-front.tree-events    :as tree-events]
            [re-frame.core            :as rf]
            [re-pressed.core          :as rp]
            [reagent.core             :as reagent :refer [atom]]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (ks/setup-keys)
  (reagent/render [main/panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])
  (dev-setup)
  (println "hello from init!")
  (rf/dispatch-sync [:request-projects])
  (mount-root))

(defn ^:export speak []
  (println "hello from clojurescript"))
