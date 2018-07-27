(ns anh-front.core
  (:require [anh-front.api-events               :as api-events]
            [anh-front.colour-preferences-subs  :as colour-preferences-subs]
            [anh-front.config                   :as config]
            [anh-front.events                   :as events]
            [anh-front.key-events               :as key-events]
            [anh-front.keywording-keys          :as keywording-keys]
            [anh-front.keyword-api-events       :as keyword-api-events]
            [anh-front.keyword-edit-api-events  :as keyword-edit-api-events]
            [anh-front.layout-preferences-subs  :as layout-preferences-subs]
            [anh-front.main                     :as main]
            [anh-front.open-api-events          :as open-api-events]
            [anh-front.photo-keyword-api-events :as photo-keyword-api-events]
            [anh-front.picture-events           :as picture-events]
            [anh-front.picture-subs             :as picture-subs]
            [anh-front.picture-api-events       :as picture-api-events]
            [anh-front.preference-events        :as preference-events]
            [anh-front.preferences-subs         :as preference-subs]
            [anh-front.project-api-events       :as project-api-events]
            [anh-front.subs                     :as reframe-subs]
            [anh-front.tree-events              :as tree-events]
            [re-frame.core                      :as rf]
            [re-pressed.core                    :as rp]
            [reagent.core                       :as reagent :refer [atom]]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (rf/dispatch [:set-keys :projects])
  (reagent/render [main/panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch [::rp/add-keyboard-event-listener "keydown"])
  (dev-setup)
  (rf/dispatch [:request-projects])
  (rf/dispatch [:open-last-visited-project])
  (rf/dispatch [:load-keyword-tree])
  (mount-root))

(defn ^:export speak []
  (println "hello from clojurescript"))
