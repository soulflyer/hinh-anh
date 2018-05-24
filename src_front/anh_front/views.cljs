(ns anh-front.views
  (:require [anh-front.projects :as projects]
            [anh-front.tree :as tree]
            [anh-front.pictures :as pictures]
            [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:h1 @name]))

(defn footer []
  [:h1 "footer"])

(defn header []
  [:h1 "header"])

(defn main-panel []
  [rc/v-box
   :height "100vh"
   :children [[rc/box
               :child [header]
               :size "none"]
              [rc/h-split
               :size "auto"
               :panel-1 [rc/v-box
                         :children [[rc/box
                                     :child [title]]
                                    [rc/scroller
                                     :v-scroll :auto
                                     :h-scroll :off
                                     :child [projects/panel]]]]
               :panel-2 [rc/v-box
                         :size "auto"
                         :children [[rc/box
                                     :child [:h1 "pictures go here"]]
                                    [rc/scroller
                                     :v-scroll :auto
                                     :h-scroll :off
                                     :child [pictures/panel]]]]
               :initial-split "20%"]
              [rc/box
               :size "none"
               :child [footer]]]])
