(ns anh-front.main
  (:require [anh-front.details         :as details]
            [anh-front.header          :as header]
            [anh-front.pictures        :as pictures]
            [anh-front.pictures-header :as pictures-header]
            [anh-front.projects        :as projects]
            [anh-front.sidebar-header  :as sidebar-header]
            [anh-front.styles          :as styles]
            [re-com.core               :as rc]
            [anh-front.footer          :as footer]
            [re-frame.core :as rf]))

(defn panel []
  (let [focus       (rf/subscribe [:panel-focus])
        hide-footer (rf/subscribe [:hide-footer])
        left-panel  (rf/subscribe [:left-panel-display])]
    [rc/v-box
     :height "100vh"
     :children [ ;;[rc/box :child [header/panel] :size "none"]
                [rc/h-split
                 :style (styles/main)
                 :size "auto"
                 :panel-1 [rc/v-box
                           :width "100%"
                           :style {:padding-left "5px"}
                           ;; TODO this sets class so css can colour the focused
                           ;; item. Should call an event instead
                           :class (if (= :left @focus)
                                    "focused-panel"
                                    "unfocused-panel")
                           :children [ ;; [rc/box :child [sidebar-header/panel]]
                                      (case @left-panel
                                        :projects [projects/panel]
                                        :details  [details/panel]
                                        [:p "Default panel" ])]]
                 :panel-2 [rc/v-box
                           :size "auto"
                           :children [ ;; [rc/box :child [pictures-header/panel]]
                                      [pictures/panel]]]
                 :initial-split "20%"]
                (if (not @hide-footer)
                  [rc/box
                   :child [footer/panel]])]]))
