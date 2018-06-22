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
        new-keyword        (reagent/atom nil)]
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
           (if keyword ;; TODO keyword-set sometimes has a nil in it. Don't know why.
             [rc/button
              :label keyword
              :style {:padding "0px"
                      :width "100%"
                      :border (str "solid 1px " @header-background)
                      :background @background}
              :attr {:on-context-menu #(rf/dispatch [:delete-keyword-from-photos keyword])}
              :on-click #(rf/dispatch [:add-keyword-to-photos keyword])]))
         [rc/box
          :size "1 0 auto"
          :child
          [rc/input-text
           :width "100%"
           :height "1.5em"
           :model nil
           :placeholder "Add Keyword"
           ;; TODO save the new keyword. Write an event :add-to-keyword-set
           :on-change #(rf/dispatch [:add-to-keyword-set %])
           :style {:background @textbox-background
                   :border-radius "4px 4px 4px 4px"
                   :border (str "solid 1px " @header-background)
                   :padding "1px 3px 1px 3px"}]]]]]
      [rc/h-box
       :children
       [[rc/button
         :label "Used Keywords"
         :on-click #(rf/dispatch [:fill-keyword-set])]
        [rc/button
         :label "Favorite Keywords"
         :on-click #(rf/dispatch [:say-hello "Add an event :load-favorite-keywords"])]]]]]))
