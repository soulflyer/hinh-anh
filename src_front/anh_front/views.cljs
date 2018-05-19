(ns anh-front.views
  (:require [anh-front.projects :as projects]
            [anh-front.subs :as subs]
            [anh-front.tree :as tree]
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
                                     :v-scroll :on
                                     :h-scroll :off
                                     :child [projects/panel]]]]]
              [rc/box
               :size "none"
               :child [footer]]]])
