(ns anh-front.ui-components.keywording.core
  (:require [anh-front.suggestions :as suggestions]
            [anh-front.ui-components.keywording.components :as components]
            [re-com.core   :as rc]
            [re-frame.core :as rf]))

(defn panel
  []
  (let [keyword-map        (rf/subscribe [:keyword-map])
        keyword-sets-map   (rf/subscribe [:keyword-sets-map])
        keyword-set        (rf/subscribe [:loaded-keyword-set])]
    [rc/v-box
     :size "100"
     :style {:padding-left "5px"}
     :justify :between
     :children
     [[rc/v-box
       :children
       [[rc/label
         :label @keyword-set]
        [components/button-set
         {:button-map     keyword-map
          :add            :add-to-keyword-set
          :remove         :remove-from-keyword-set
          :on-click       :add-keyword-to-photos
          :on-right-click :delete-keyword-from-photos
          :suggestions    suggestions/keywords
          :show-edit      (rf/subscribe [:show-edit-keywords])
          :name           "keyword"}]]]
      [rc/v-box
       :style {:margin-bottom "5px"}
       :children
       [[rc/h-box
         :children
         [[components/shortcut "u"]
          [components/kw-button "Current Keywords"
           :fill-keyword-set nil]]]
        [components/button-set
         {:button-map     keyword-sets-map
          :add            :add-keyword-set
          :remove         :remove-keyword-set
          :on-click       :set-keyword-set-by-name
          :on-right-click :set-keyword-set-by-name
          :show-edit      (rf/subscribe [:show-edit-keyword-sets])
          :name           "keyword set"}]
        [rc/line :style {:margin "6px 0px 0px 6px"}]
        [components/footer-buttons]]]]]))
