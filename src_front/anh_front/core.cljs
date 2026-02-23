(ns anh-front.core
  (:require
    [anh-front.config                                     :as config]
    [anh-front.events.api-events.api-events               :as api-events]
    [anh-front.events.api-events.keyword-api-events       :as keyword-api-events]
    [anh-front.events.api-events.keyword-edit-api-events  :as keyword-edit-api-events]
    [anh-front.events.api-events.keyword-pics-api-events  :as keyword-pics-api-events]
    [anh-front.events.api-events.open-api-events          :as open-api-events]
    [anh-front.events.api-events.photo-iptc-api-events    :as photo-iptc-api-events]
    [anh-front.events.api-events.photo-keyword-api-events :as photo-keyword-api-events]
    [anh-front.events.api-events.picture-api-events       :as picture-api-events]
    [anh-front.events.api-events.project-api-events       :as project-api-events]
    [anh-front.events.api-events.project-pics-api-events  :as project-pics-api-events]
    [anh-front.events.api-events.write-api-events         :as write-api-events]
    [anh-front.events.events                              :as events]
    [anh-front.events.keyword-events                      :as keyword-events]
    [anh-front.events.keyword-set-events                  :as keyword-set-events]
    [anh-front.events.panel-events                        :as panel-events]
    [anh-front.events.picture-events                      :as picture-events]
    [anh-front.events.picture-select-events               :as picture-select-events]
    [anh-front.events.preference-events                   :as preference-events]
    [anh-front.events.project-events                      :as project-events]
    [anh-front.events.show-events                         :as show-events]
    [anh-front.keys.key-events                            :as key-events]
    [anh-front.keys.keywording                            :as keywording-keys]
    [anh-front.subs.colour-preferences-subs               :as colour-preferences-subs]
    [anh-front.subs.key-subs                              :as key-subs]
    [anh-front.subs.layout-preferences-subs               :as layout-preferences-subs]
    [anh-front.subs.picture-subs                          :as picture-subs]
    [anh-front.subs.preferences-subs                      :as preference-subs]
    [anh-front.subs.subs                                  :as reframe-subs]
    [anh-front.tree.tree-events                           :as tree-events]
    [anh-front.ui-components.main                         :as main]
    [re-frame.core                                        :as rf]
    [re-pressed.core                                      :as rp]
    [reagent.core                                         :as reagent]))

(defn dev-setup
  []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root
  []
  (rf/clear-subscription-cache!)
  (rf/dispatch [:set-keys :projects])
  (reagent/render [main/panel]
                  (.getElementById js/document "app")))

(defn ^:export init
  []
  (rf/dispatch-sync [::events/initialize-db])
  (rf/dispatch [::rp/add-keyboard-event-listener "keydown"])
  (dev-setup)
  (rf/dispatch [:request-projects])
  (rf/dispatch [:open-last-visited-project])
  (rf/dispatch [:load-keyword-tree])
  (rf/dispatch [:load-keyword-list])
  (mount-root))

(defn ^:export speak
  []
  (println "hello from clojurescript"))

(comment
  (speak)
  )
