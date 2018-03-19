(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
            [anh-front.subs :as subs]
            [anh-front.tree :as tree]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:h1 (str "Hello from: " @name)]))

(defn request-it-button
  []
  [re-com/button
   :label "Get Projects"
   :on-click #(rf/dispatch [:request-it])])

(defn projects
  []
  (let [years (rf/subscribe [:years])]
    [:div.projects
     [:ul.year-list
      (for [year @years]
        [:li
         [re-com/button
          :label (str year)
          :class "tree-button"
          :on-click #(tree/expand year)]])]]))

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
