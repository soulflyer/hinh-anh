(ns anh-front.pictures
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn panel []
  [rc/scroller
   :child
   [rc/v-box
    :height "100vh"
    :children
    [[:h1 "Pictures go here"]
     (let [pic-list (rf/subscribe [:picture-list])
           pics (:pictures @pic-list)]
       (for [pic pics]
         [rc/box
          :child
          [:p (get pic "Version")]]))
     ]]])
