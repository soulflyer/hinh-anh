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
   [(let [pic-ids      (rf/subscribe [:picture-ids])
          pics         (rf/subscribe [:pictures])
          atpics       @pics
          columns      (rf/subscribe [:picture-columns])
          gap          (rf/subscribe [:picture-grid-gap])
          display      (rf/subscribe [:picture-display])
          focused      (rf/subscribe [:focused-pic-path])
          filter-stars (rf/subscribe [:picture-filter-stars])
          rows         (partition @columns @columns (repeat []) @pic-ids)]
      (case @display
        :grid   [rc/v-box
                 :height "100%"
                 :children
                 [[rc/scroller
                   :class "pictures-scroller"
                   :style (styles/pictures)
                   :v-scroll :auto
                   :h-scroll :off
                   :child
                   (for [row rows]
                     ^{:key (str "row-" (first row))}
                     [rc/h-box
                      :gap @gap
                      :style {:margin-bottom @gap}
                      :children (for [pic row]
                                  ;;^{:key (str "pic-" (get pic "_id"))}
                                  [picture/panel (first
                                                   (filter
                                                     #(= pic (get % "_id"))
                                                     atpics))])])]]]
        :single [rc/v-box
                 :height "100%"
                 :children [[single/panel (help/get-pic @pics @focused)]]]
        [:p "Default display"]))]])
