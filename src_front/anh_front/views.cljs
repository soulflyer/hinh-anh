(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
            [anh-front.subs :as subs]))

(defn title []
  (let [name (rf/subscribe [::subs/name])]
    [:h1 (str "Hello from " @name)]))

(defn request-it-button
  []
  [re-com/button
   :label "Fetch Projects"
   :on-click #(rf/dispatch [:request-it])])

(defn projects
  []
  [:div.projects
   @(rf/subscribe [::subs/project-string])])

(defn ui
  []
  [:div
   [request-it-button]
   [projects]])

(defn main-panel []
  [re-com/v-box
   :height "100%"
   :children [[title]
              [ui]]])
