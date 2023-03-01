(ns anh-front.ui-components.keywords
  (:require [anh-front.helpers                        :as helpers]
            [anh-front.tree                           :as tree]
            [anh-front.ui-components.popover.core     :as pc]
            [anh-front.ui-components.popover.popovers :as popover]
            [re-com.core                              :as rc]
            [re-frame.core                            :as rf]
            [reagent.core                             :as reagent]))

(defn panel []
  (let [tree-name :keyword-tree
        tree      (rf/subscribe [tree-name])]
    [rc/v-box
     :justify :between
     :height "100%"
     :children
     (let [focused       (last @(rf/subscribe [:keyword-focus]))
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
          (popover/add-keyword focused)
          (popover/delete-keyword focused)
          (popover/move-keyword focused)
          (popover/rename-keyword focused)
          (popover/merge-keywords focused)
          (popover/set-best @focused-pic focused)
          (popover/add-orphans)
          (popover/purge-keywords)
          (popover/goto-project project)
          (popover/json-export @dive-centre)
          (pc/anchor-icon "zmdi-refresh" #(rf/dispatch [:load-keyword-tree]))]]])]))
