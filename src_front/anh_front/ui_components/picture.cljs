(ns anh-front.picture
  (:require [re-com.core :as rc]
            [anh-front.helpers :as helpers]
            [clojure.string :as str]))

(defn panel [pic]
  [rc/box
   :size "auto"
   :width "100vh"
   :child [rc/v-box
           :class "image-container"
           :size "auto"
           :children
           [[rc/h-box
             :size "auto"
             :justify :between
             :children [[rc/box
                         :size "none"
                         :child [:p (get pic "Version")]]
                        [rc/box
                         :size "none"
                         :child [:p (helpers/stars (get pic "Rating"))]]]]
            [:p "pic here"]
            [:p (str/join ", " (get pic "Keywords"))]]]])
