(ns anh-front.preferences
  (:require [anh-front.preferences-components :as components]
            [re-com.core :as rc]))

(defn panel []
  [rc/v-box
   :style {:padding-left "5px"}
   :children
   [[rc/gap :size "3px"]
    [components/text-pref "api root path" :api-root :set-api-root]
    [components/boolean-pref "view masters" :view-fullsize :toggle-view-fullsize]]])
