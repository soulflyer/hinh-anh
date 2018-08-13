(ns anh-front.keywords
  (:require [re-frame.core             :as rf]
            [re-com.core               :as rc]
            [anh-front.atoms           :as atoms]
            [anh-front.helpers         :as helpers]
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
           focused-pic   (rf/subscribe [:focused-pic-path])
           project       (butlast (helpers/path->vector @focused-pic))
           project-path  (helpers/vector->path project)]
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
                                  :text-box
                                  #(rf/dispatch [:add-to-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-delete-button-show
                                  "zmdi-delete"
                                  (str "Delete " (last @focused))
                                  :button
                                  #(rf/dispatch [:delete-focused-keyword]))
          (helper/popover-wrapper atoms/keyword-move-button-show
                                  "zmdi-open-in-new"
                                  (str "Move " (last @focused) " to:")
                                  :text-box
                                  #(rf/dispatch [:move-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-rename-button-show
                                  "zmdi-edit"
                                  (str "Rename " (last @focused) " to:")
                                  :text-box
                                  #(rf/dispatch [:rename-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-merge-button-show
                                  "zmdi-arrow-merge"
                                  (str "Merge with " (last @focused) ":")
                                  :text-box
                                  #(rf/dispatch [:merge-focused-keyword %]))
          (helper/popover-wrapper atoms/keyword-set-best-button-show
                                  "zmdi-image"
                                  (str "Set " @focused-pic " as best for " (last @focused))
                                  :button
                                  #(rf/dispatch [:set-sample]))
          (helper/popover-wrapper atoms/keyword-add-orphans-button-show
                                  "zmdi-collection-plus"
                                  (str "Add keywords from photos")
                                  :button
                                  #(rf/dispatch [:add-missing-keywords]))
          (helper/popover-wrapper atoms/keyword-purge-unused-button-show
                                  "zmdi-flash"
                                  (str "DANGER: remove unused keywords")
                                  :button
                                  #(rf/dispatch [:delete-unused-keywords]))
          (helper/popover-wrapper atoms/go-to-project-button-show
                                  "zmdi-collection-folder-image"
                                  (str "Go to project " project-path)
                                  :button
                                  #(rf/dispatch [:go-to-project project]))
          (helper/anchor-icon "zmdi-refresh" #(rf/dispatch [:load-keyword-tree]))]]])]))
