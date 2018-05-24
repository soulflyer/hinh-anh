(ns anh-front.pictures
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]
            [anh-front.picture :as picture]))

(defn panel []
  [rc/v-box
   :justify :between
   :children
   [(let [pic-list (rf/subscribe [:picture-list])
          pics     (:pictures @pic-list)
          columns  (rf/subscribe [:picture-columns])
          rows     (partition 3 3 [] pics)]
      (for [row rows]
        ^{:key (str "row-" (get (first row) "_id"))}
        [rc/h-box
         :children (for [pic row]
                     [picture/panel pic])]))]])
