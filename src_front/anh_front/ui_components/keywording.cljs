(ns anh-front.keywording
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn panel
  []
  (let [keywords (rf/subscribe [:keyword-set])]
    [rc/v-box
     :children
     (for [keyword @keywords]
       [:p keyword])]))
