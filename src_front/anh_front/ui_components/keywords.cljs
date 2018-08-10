(ns anh-front.keywords
  (:require [re-frame.core             :as rf]
            [re-com.core               :as rc]
            [anh-front.atoms           :as atoms]
            [anh-front.styles          :as styles]
            [anh-front.tree            :as tree]
            [anh-front.keywords-helper :as helper]
            [reagent.core              :as reagent]
            [anh-front.styles          :as styles]))

(defn panel []
  (let [tree-name :keyword-tree
        tree      (rf/subscribe [tree-name])]
    [rc/v-box
     :justify :between
     :height "100%"
     :children
     (let [focused       (rf/subscribe [:keyword-focus])
           selected-pics (rf/subscribe [:selected-pics])
           selected-pic  (first @selected-pics)]
       [[rc/scroller
         :child
         (tree/root
           (for [kw (get-in @tree [:children])]
             (tree/node @tree tree-name [(get kw :name)] :focused-keyword-pics)))]
        [rc/line
         :style {:margin-left "6px"}]
        [rc/h-box
         :justify :center
         :children
         [(helper/popover-wrapper atoms/keyword-add-button-show
                                  "zmdi-plus"
                                  (str "Add to " (last @focused))
                                  #(rf/dispatch [:add-to-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-delete-button-show
                                  "zmdi-delete"
                                  (str "Delete " (last @focused))
                                  #(rf/dispatch [:delete-focused-keyword]))
          (helper/popover-wrapper atoms/keyword-move-button-show
                                  "zmdi-open-in-new"
                                  (str "Move " (last @focused) " to:")
                                  #(rf/dispatch [:move-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-rename-button-show
                                  "zmdi-edit"
                                  (str "Rename " (last @focused) " to:")
                                  #(rf/dispatch [:rename-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-merge-button-show
                                  "zmdi-arrow-merge"
                                  (str "Merge with " (last @focused) ":")
                                  #(rf/dispatch [:merge-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-set-best-button-show
                                  "zmdi-image"
                                  (str "Set " " as best for " (last @focused))
                                  #(rf/dispatch [:set-sample]))
          (helper/popover-wrapper atoms/keyword-add-orphans-button-show
                                  "zmdi-collection-plus"
                                  (str "Add keywords from photos")
                                  #(rf/dispatch [:add-missing-keywords]))
          (helper/popover-wrapper atoms/keyword-purge-unused-button-show
                                  "zmdi-flash"
                                  (str "DANGER: remove unused keywords")
                                  #(rf/dispatch [:delete-unused-keywords]))
          (helper/anchor-icon "zmdi-refresh" #(rf/dispatch [:load-keyword-tree]))]]])]))
