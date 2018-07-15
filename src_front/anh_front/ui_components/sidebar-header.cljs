(ns anh-front.sidebar-header
  (:require [re-com.core    :as rc]
            [re-frame.core  :as rf]
            [clojure.string :as string]))

(defn panel []
  (let [loading (rf/subscribe [:loading?])]
    [rc/h-box
     :height "0px"
     :justify :end
     :children [
                (if @loading
                  [rc/throbber
                   :color :black
                   :size :smaller])
                [rc/md-icon-button
                 :md-icon-name "zmdi-border-bottom"
                 :size :smaller
                 :style {:margin "3px 0px 4px 0px"}
                 :on-click #(rf/dispatch [:toggle-footer])]]]))
