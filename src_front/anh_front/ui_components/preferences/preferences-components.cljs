(ns anh-front.preferences-components
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]))

(defn text-pref [label field on-change]
  (let [textbox-background (rf/subscribe [:details-textbox-background])
        header-background  (rf/subscribe [:details-header-background])
        field-contents     (rf/subscribe [field])]
    [rc/v-box
     :style {:width "100%"
             :background @header-background
             :border-radius "4px"
             :margin-bottom "5px"}
     :children
     [[rc/label
       :style {:font-size "0.75em"
               :padding-left "3px"}
       :label label]
      [rc/input-text
       :width "100%"
       :attr {:id label
              :tabIndex "1"}
       :style {:height "1.5em"
               :padding "0px 0px 0px 3px"
               :border-radius "0px 0px 4px 4px"
               :background @textbox-background
               :border-color @header-background}
       :placeholder @field-contents
       :model field-contents
       :on-change #(rf/dispatch [on-change %]) ]]]))

(defn boolean-pref [label field on-change]
  (let [textbox-background (rf/subscribe [:details-textbox-background])
        header-background  (rf/subscribe [:details-header-background])
        field-contents     (rf/subscribe [field])]
    [rc/h-box
     :style {:width "100%"
             :background @header-background
             :border-radius "4px"
             :margin-bottom "5px"}
     :justify :between
     :children
     [[rc/label
       :style {:font-size "0.75em"
               :padding-left "3px"}
       :label label]
      [rc/checkbox
       :style {:margin "2px"}
       :model field-contents
       :on-change #(rf/dispatch [on-change %])]]]))