(ns anh-front.keywording
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]
            [reagent.core  :as reagent]
            [anh-front.keywording-components :as components]))

(defn panel
  []
  (let [;;keywords           (rf/subscribe [:keyword-set])
        shortcut-highlight (rf/subscribe [:shortcut-highlight])
        keyword-map        (rf/subscribe [:keyword-map])
        keyword-sets-map   (rf/subscribe [:keyword-sets-map])
        new-keyword        (reagent/atom nil)
        show-delete        (rf/subscribe [:show-delete-keywording])]
    [rc/v-box
     :height "100%"
     :justify :around
     :children
     [[components/button-set
       keyword-map
       :add-to-keyword-set
       :remove-from-keyword-set
       :add-keyword-to-photos
       :delete-keyword-from-photos
       "keyword"]
      [components/footer-buttons]
      [components/button-set
       keyword-sets-map
       :add-keyword-set
       :remove-keyword-set
       :set-keyword-set-by-name
       :set-keyword-set-by-name
       "keyword set"]]]))
