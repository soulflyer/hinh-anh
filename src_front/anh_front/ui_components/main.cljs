(ns anh-front.ui-components.main
  (:require
   [anh-front.ui-components.details.core     :as details]
   [anh-front.ui-components.footer           :as footer]
   ;;[anh-front.ui-components.header         :as header]
   [anh-front.ui-components.keywording.core  :as keywording]
   [anh-front.ui-components.keywords         :as keywords]
   [anh-front.ui-components.pictures         :as pictures]
   ;;[anh-front.ui-components.pictures-header  :as pictures-header]
   [anh-front.ui-components.preferences.core :as preferences]
   [anh-front.ui-components.projects         :as projects]
   [anh-front.ui-components.sidebar-header   :as sidebar-header]
   [anh-front.ui-components.styles           :as styles]
   [re-com.core                              :as rc]
   [re-frame.core                            :as rf]))

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
                (when (not @hide-footer)
                  [rc/box
                   :child [footer/panel]])]]))
