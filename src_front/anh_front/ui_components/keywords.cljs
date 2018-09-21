(ns anh-front.keywords
  (:require [anh-front.atoms                          :as atoms]
            [anh-front.helpers                        :as helpers]
            [anh-front.styles                         :as styles]
            [anh-front.tree                           :as tree]
            [anh-front.ui-components.popover.core     :as pc]
            [anh-front.ui-components.popover.popovers :as popover]
            [anh-front.ui-components.popover.wrapper  :as pw]
            [re-com.core                              :as rc]
            [reagent.core                             :as reagent]
            [re-frame.core                            :as rf]))

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
           project-path  (helpers/vector->path project)
           dive-centre   (rf/subscribe [:dive-centre])]
       [[rc/scroller
         :child
         (tree/root
           (for [kw (get-in @tree [:children])]
             (tree/node @tree tree-name [(get kw :name)] :keyword-open)))]
        [rc/line
         :style {:margin-left "6px"}]
        [rc/h-box
         :justify :center
         :children
         [(popover/find-keyword)
          (popover/add-keyword (last @focused))
          (popover/delete-keyword (last @focused))
          (popover/move-keyword (last @focused))
          (popover/rename-keyword (last @focused))
          (popover/merge-keywords (last @focused))
          (popover/set-best @focused-pic (last @focused))
          (popover/add-orphans)
          (popover/purge-keywords)
          (popover/goto-project)
          (popover/json-export @dive-centre)
          (pc/anchor-icon "zmdi-refresh" #(rf/dispatch [:load-keyword-tree]))]]])]))
