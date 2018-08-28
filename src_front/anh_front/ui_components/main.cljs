(ns anh-front.main
  (:require [anh-front.details         :as details]
            [anh-front.header          :as header]
            [anh-front.keywording      :as keywording]
            [anh-front.keywords        :as keywords]
            [anh-front.pictures        :as pictures]
            [anh-front.pictures-header :as pictures-header]
            [anh-front.preferences     :as preferences]
            [anh-front.projects        :as projects]
            [anh-front.sidebar-header  :as sidebar-header]
            [anh-front.styles          :as styles]
            [re-com.core               :as rc]
            [anh-front.footer          :as footer]
            [re-frame.core             :as rf]))

(defn panel []
  (let [focus        (rf/subscribe [:panel-focus])
        hide-footer  (rf/subscribe [:hide-footer])
        left-panel   (rf/subscribe [:left-panel-display])
        screen-split (rf/subscribe [:screen-split])]
    [rc/v-box
     :height "100vh"
     :children [ ;;TODO make the splitter optional for a photo only display
                [rc/h-split
                 :style (styles/main)
                 :size "auto"
                 :panel-1 [rc/v-box
                           :attr {:id "panel-1"
                                  ;;:tabIndex "1"
                                  }
                           :width "100%"
                           :style {:padding-left "0px"}
                           ;; TODO this sets class so css can colour the
                           ;;focused item. Should call an event instead
                           :class (if (= :left @focus)
                                    "focused-panel"
                                    "unfocused-panel")
                           :children [[sidebar-header/panel]
                                      (case @left-panel
                                        :projects    [projects/panel]
                                        :details     [details/panel]
                                        :keywording  [keywording/panel]
                                        :keywords    [keywords/panel]
                                        :preferences [preferences/panel]
                                        [:p "Default panel" ])]]
                 :panel-2 [rc/v-box
                           :attr {:id "panel-2"
                                  ;;:tabIndex "0"
                                  }
                           :size "auto"
                           :children [[pictures/panel]]]
                 :initial-split (str @screen-split "%")]
                (if (not @hide-footer)
                  [rc/box
                   :child [footer/panel]])]]))
