(ns anh-front.ui-components.keywording.core
  (:require [anh-front.ui-components.keywording.components :as components]
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
         keyword-map
         :add-to-keyword-set
         :remove-from-keyword-set
         :add-keyword-to-photos
         :delete-keyword-from-photos
         (rf/subscribe [:show-edit-keywords])
         "keyword"]]]
      [rc/v-box
       :style {:margin-bottom "5px"}
       :children
       [[rc/h-box
         :children
         [[components/shortcut "u"]
          [components/kw-button "Current Keywords"
           :fill-keyword-set nil]]]
        [components/button-set
         keyword-sets-map
         :add-keyword-set
         :remove-keyword-set
         :set-keyword-set-by-name
         :set-keyword-set-by-name
         (rf/subscribe [:show-edit-keyword-sets])nil
         "keyword set"]
        [rc/line :style {:margin "6px 0px 0px 6px"}]
        [components/footer-buttons]]]]]))
