(ns anh-front.pictures
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]
            [anh-front.picture :as picture]))

(defn panel []
  [rc/v-box
   :children
   [(let [pic-list (rf/subscribe [:picture-list])
          pics     (:pictures @pic-list)
          columns  (rf/subscribe [:picture-columns])
          gap      (rf/subscribe [:picture-grid-gap])
          rows     (partition 3 3 (repeat []) pics)]
      (for [row rows]
        ^{:key (str "row-" (get (first row) "_id"))}
        [rc/h-box
         :gap @gap
         :style {:margin-bottom @gap}
         :children (for [pic row]
                     ;;^{:key (str "pic-" (get pic "_id"))}
                     [picture/panel pic])]))]])
