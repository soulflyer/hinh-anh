(ns anh-front.keywording
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]
            [reagent.core  :as reagent]))

(defn panel
  []
  (let [keywords           (rf/subscribe [:keyword-set])
        textbox-background (rf/subscribe [:details-textbox-background])
        header-background  (rf/subscribe [:details-header-background])
        background         (rf/subscribe [:details-background])
        shortcut-highlight (rf/subscribe [:shortcut-highlight])
        keyword-map        (rf/subscribe [:keyword-map])
        new-keyword        (reagent/atom nil)]
    (println (str "############" @keywords))
    [rc/v-box
     :height "100%"
     :justify :between
     :children
     [[rc/scroller
       :style {:margin-top "5px"}
       :h-scroll :off
       :child
       [rc/v-box
        :children
        [(for [keyword @keywords]
           (if keyword ;; TODO keyword-set has a nil when there is a pic with no keywords.
             [rc/h-box
              :children
              ;; TODO find out how to style the box around a button. It's generated
              ;; automatically and only seems to allow the button to expand to full
              ;; width when it's contained in an otherwise spurious v-box
              [[rc/box
                :child (str (get @keyword-map keyword))
                :style {:padding "1px 4px 0px 0px"
                        :color   @shortcut-highlight}]
               [rc/v-box
                :size "1 1 auto"
                ;;:style {:width "100%"}
                :children
                [[rc/button
                  :label keyword
                  :style {:padding    "0px 1px 0px 3px"
                          :width      "100%"
                          :overflow   "hidden"
                          :border     (str "solid 1px " @header-background)
                          :background @background}
                  :attr {:on-context-menu #(rf/dispatch [:delete-keyword-from-photos keyword])}
                  :on-click #(rf/dispatch [:add-keyword-to-photos keyword])]]]
               [rc/md-icon-button
                :md-icon-name "zmdi-minus"
                :size :smaller
                :on-click #(rf/dispatch [:remove-from-keyword-set keyword])]]]))
         [rc/box
          :size "1 0 auto"
          :child
          [rc/input-text
           :width "100%"
           :height "1.5em"
           :model nil
           :placeholder "Add Keyword"
           :on-change #(rf/dispatch [:add-to-keyword-set %])
           :style {:background    @textbox-background
                   :border-radius "4px 4px 4px 4px"
                   :border        (str "solid 1px " @header-background)
                   :padding       "1px 3px 1px 3px"}]]]]]
      [rc/h-box
       :children
       [[rc/button
         :label "Used"
         :on-click #(rf/dispatch [:fill-keyword-set])]
        [rc/button
         :label "Favorite"
         :on-click #(rf/dispatch [:set-favorite-keywords])]]]]]))
