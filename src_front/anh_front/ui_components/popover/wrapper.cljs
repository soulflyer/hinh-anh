(ns anh-front.ui-components.popover.wrapper
  (:require [anh-front.ui-components.popover.core :as pc]
            [re-com.core :as rc]
            [re-frame.core :as rf]))

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
  [showing-atom icon title description suggestions on-click]
  (let [background (rf/subscribe [:details-textbox-background])
        input-style {:padding "0px 5px 0px 5px"
                     :height "1.2em"}]
    [rc/popover-anchor-wrapper
     :showing? showing-atom
     :position :above-center
     :anchor (pc/anchor-icon icon #(swap! showing-atom not))
     :popover (pc/popover
                title
                [rc/v-box
                 :children [[rc/label
                             :label description]
                            (if suggestions
                              [rc/typeahead
                               :data-source suggestions
                               :change-on-blur? true
                               :style input-style
                               :model nil
                               :rigid? false
                               :on-change on-click]
                              [rc/input-text
                               :change-on-blur? true
                               :style input-style
                               :on-change on-click
                               ])]])]))
