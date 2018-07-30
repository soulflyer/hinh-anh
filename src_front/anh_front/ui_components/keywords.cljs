(ns anh-front.keywords
  (:require [re-frame.core             :as rf]
            [re-com.core               :as rc]
            [anh-front.atoms           :as atoms]
            [anh-front.tree            :as tree]
            [anh-front.keywords-helper :as helper]
            [reagent.core              :as reagent]))

(defn panel []
  (let [tree-name :keyword-tree
        tree      (rf/subscribe [tree-name])]
    [rc/v-box
     :justify :between
     :height "100%"
     :children
     [[rc/scroller
       :child
       (tree/root
         (for [kw (get-in @tree [:children])]
           (tree/node @tree tree-name [(get kw :name)] :focused-keyword-pics)))]
      [rc/h-box
       :children
       (let [focused  (rf/subscribe [:keyword-focus])]
         [(let [showing? atoms/keyword-add-button-show]
            [rc/popover-anchor-wrapper
             :showing? showing?
             :position :above-center
             :anchor (helper/anchor "Add" #(swap! showing? not))
             :popover (helper/popover
                        (str "Add keyword to " (last @focused))
                        [rc/input-text
                         :model nil
                         :on-change #(rf/dispatch [:add-to-focused-keyword %])])])
          [rc/button
           :label "Del"
           :on-click #(rf/dispatch [:delete-focused-keyword])]])]]]))
