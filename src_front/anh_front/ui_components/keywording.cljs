(ns anh-front.keywording
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn panel
  []
  (let [keywords          (rf/subscribe [:keyword-set])
        header-background (rf/subscribe [:details-header-background])
        background        (rf/subscribe [:details-background])]
    [rc/v-box
     :height "100%"
     :justify :between
     :children
     [[rc/v-box
       :style {:margin-top "5px"}
       :children
       (for [keyword @keywords]
         (if keyword ;; TODO keyword-set sometimes has a nil in it. Don't know why.
           [rc/button
            :label keyword
            :style {:padding "0px"
                    :width "100%"
                    :border (str "solid 1px " @header-background)
                    :background @background}
            :attr {:on-context-menu #(rf/dispatch [:say-hello (str " bye " keyword)])}
            :on-click #(rf/dispatch [:say-hello keyword])]))]
      [rc/h-box
       :children
       [[rc/button
         :label "Used Keywords"
         :on-click #(rf/dispatch [:fill-keyword-set])]]]]]))
