(ns anh-front.projects
  (:require [anh-front.atoms                          :as atoms]
            [re-com.core                              :as rc]
            [re-frame.core                            :as rf]
            [anh-front.tree                           :as tree]
            [anh-front.ui-components.popover.popovers :as popover]))

(defn panel
  []
  (let [tree-name :project-tree
        tree (rf/subscribe [tree-name])]
    [rc/v-box
     :justify :between
     :height "100%"
     :children
     (let [dive-centre   (rf/subscribe [:dive-centre])]
       [[rc/scroller
         :v-scroll :auto
         :h-scroll :off
         :child
         [rc/box
          :child
          (tree/root
            (for [year (:children @tree)]
              (tree/node @tree tree-name [(:name year)] :fetch-pictures)))]]
        [rc/line
         :style {:margin-left "6px"}]
        [rc/h-box
         :justify :center
         :children
         [(popover/json-export @dive-centre)]]])]))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected: " @sp)]))
