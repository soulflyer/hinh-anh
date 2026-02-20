(ns anh-front.ui-components.sidebar-header
  (:require
    [re-com.core    :as rc]
    [re-frame.core  :as rf]))

(defn panel
  []
  (let [loading (rf/subscribe [:loading?])]
    [rc/h-box
     :height "0px"
     :justify :end
     :children [(if @loading
                  [rc/throbber
                   :color :black
                   :size :small])]]))
