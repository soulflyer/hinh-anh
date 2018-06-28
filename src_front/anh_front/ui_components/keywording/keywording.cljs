(ns anh-front.keywording
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]
            [reagent.core  :as reagent]
            [anh-front.keywording-components :as components]))

(defn panel
  []
  (let [keywords           (rf/subscribe [:keyword-set])
        shortcut-highlight (rf/subscribe [:shortcut-highlight])
        keyword-map        (rf/subscribe [:keyword-map])
        new-keyword        (reagent/atom nil)
        show-delete        (rf/subscribe [:show-delete-keywording])]
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
        [(let [del @show-delete]
           (for [keyword @keywords]
             (if keyword ;; TODO keyword-set has a nil when there is a pic with no keywords.
               [rc/h-box
                :children
                ;; TODO find out how to style the box around a button. It's generated
                ;; automatically and only seems to allow the button to expand to full
                ;; width when it's contained in an otherwise spurious v-box
                [[rc/box
                  :child (str (get @keyword-map keyword))
                  :style {:padding "1px 4px 0px 0px"
                          :width   "0.75em"
                          :color   @shortcut-highlight}]
                 [rc/v-box
                  :size "1 1 auto"
                  :children
                  [[components/keyword-button keyword]]]
                 (if del
                   [components/delete-button keyword])]])))
         [components/add-keyword-input]]]]
      [components/footer-buttons]]]))
