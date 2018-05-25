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
          ;; The first line may return a short last row
          ;; rows     (partition 3 3 [] pics)
          rows     (partition 3 3 (repeat []) pics)]
      (interpose
        [rc/gap :size @gap]
        (for [row rows]
          ^{:key (str "row-" (get (first row) "_id"))}
          [rc/h-box
           :gap @gap
           :children (for [pic row]
                       [picture/panel pic])])))]])
