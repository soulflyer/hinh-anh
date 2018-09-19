(ns anh-front.projects
  (:require [anh-front.atoms    :as atoms]
            [anh-front.popovers :as helper]
            [anh-front.tree     :as tree]
            [re-frame.core      :as rf]
            [re-com.core        :as rc]))

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
         [(helper/popover-wrapper atoms/export-json-button-show
                                  "zmdi-language-javascript"
                                  (str "Export selection as JSON for " @dive-centre)
                                  :text-box
                                  #(rf/dispatch [:write-json %]))]]])]))

(defn selected-project []
  (let [sp (rf/subscribe [:selected-project])]
    [:p (str "selected: " @sp)]))
