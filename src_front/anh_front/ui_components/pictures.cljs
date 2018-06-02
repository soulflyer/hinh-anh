(ns anh-front.pictures
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]
            [anh-front.picture :as picture]
            [anh-front.single-pic :as single]
            [anh-front.styles     :as styles]
            [anh-front.helpers :as help]))

(defn panel []
  [rc/v-box
   :height "100%"
   :children
   [(let [pics       (rf/subscribe [:pictures])
          columns    (rf/subscribe [:picture-columns])
          gap        (rf/subscribe [:picture-grid-gap])
          display    (rf/subscribe [:picture-display])
          focused    (rf/subscribe [:focused-pic])
          rows       (partition @columns @columns (repeat []) @pics)]
      (case @display
        :grid [rc/scroller
               :class "pictures-scroller"
               :style (styles/pictures)
               :v-scroll :auto
               :h-scroll :off
               :child
               (for [row rows]
                 ^{:key (str "row-" (get (first row) "_id"))}
                 [rc/h-box
                  :gap @gap
                  :style {:margin-bottom @gap}
                  :children (for [pic row]
                              ;;^{:key (str "pic-" (get pic "_id"))}
                              [picture/panel pic])])]
        :single [rc/v-box
                 :height "100%"
                 :children [[single/panel (help/get-pic @pics @focused)]]]
        [:p "Default display"]))]])
