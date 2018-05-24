(ns anh-front.views
  (:require [anh-front.footer :as footer]
            [anh-front.header :as header]
            [anh-front.pictures :as pictures]
            [anh-front.pictures-header :as pictures-header]
            [anh-front.sidebar-header :as sidebar-header]
            [anh-front.projects :as projects]
            [re-com.core :as rc]))

(defn main-panel []
  [rc/v-box
   :height "100vh"
   :children [[rc/box
               :child [header/panel]
               :size "none"]
              [rc/h-split
               :size "auto"
               :panel-1 [rc/v-box
                         :children [[rc/box
                                     :child [sidebar-header/panel]]
                                    [rc/scroller
                                     :v-scroll :auto
                                     :h-scroll :off
                                     :child [projects/panel]]]]
               :panel-2 [rc/v-box
                         :size "auto"
                         :children [[rc/box
                                     :child [pictures-header/panel]]
                                    [rc/scroller
                                     :v-scroll :auto
                                     :h-scroll :off
                                     :child [pictures/panel]]]]
               :initial-split "20%"]
              [rc/box
               :size "none"
               :child [footer/panel]]]])
