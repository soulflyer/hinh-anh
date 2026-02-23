(ns anh-front.ui-components.help
  (:require
    [re-com.core       :as rc]
    [re-frame.core     :as rf]))

(defn panel
  []
  (let [keys (rf/subscribe [:current-keys])]
    [rc/v-box
     :attr {:id "help"}
     :size "auto"
     :children
     (for [key-entry @keys]
       [rc/h-box
        :justify :start
        :children
        [[rc/label
          :width "60px"
          :label (:key key-entry)]
         [rc/label
          :size "1"
          :label (:function key-entry)]]])]))
