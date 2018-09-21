(ns anh-front.ui-components.popover.wrapper
  (:require [anh-front.ui-components.popover.core :as pc]
            [re-com.core :as rc]))

(defn popover-button-wrapper
  [showing-atom icon title description on-click]
  [rc/popover-anchor-wrapper
   :showing? showing-atom
   :position :above-center
   :anchor (pc/anchor-icon icon #(swap! showing-atom not))
   :popover (pc/popover
              title
              [rc/v-box
               :children
               [[:p description]
                [rc/button
                 :attr {:id (str "popover-")}
                 :label "ok"
                 :on-click on-click]]])])

(defn popover-textbox-wrapper
  [showing-atom icon title description on-click]
  [rc/popover-anchor-wrapper
   :showing? showing-atom
   :position :above-center
   :anchor (pc/anchor-icon icon #(swap! showing-atom not))
   :popover (pc/popover
              title
              [rc/v-box
               :children [[rc/label
                           :label description]
                          [rc/input-text
                           :attr {:id (str "popover-" )}
                           :model nil
                           :on-change on-click]]])])