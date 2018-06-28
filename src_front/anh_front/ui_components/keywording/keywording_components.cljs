(ns anh-front.keywording-components
  (:require [re-frame.core :as rf]
            [re-com.core   :as rc]))

(defn delete-button [kw]
  [rc/md-icon-button
   :md-icon-name "zmdi-minus"
   :size :smaller
   :on-click #(rf/dispatch [:remove-from-keyword-set kw])])

(defn keyword-button [kw]
  (let [header-background (rf/subscribe [:details-header-background])
        background        (rf/subscribe [:details-background])]
    [rc/button
     :label kw
     :style {:padding    "0px 1px 0px 3px"
             :width      "100%"
             :overflow   "hidden"
             :border     (str "solid 1px " @header-background)
             :background @background}
     :attr
     {:on-context-menu #(rf/dispatch [:delete-keyword-from-photos kw])}
     :on-click #(rf/dispatch [:add-keyword-to-photos kw])]))

(defn add-keyword-input []
  (let [header-background (rf/subscribe [:details-header-background])
        textbox-background (rf/subscribe [:details-textbox-background])]
    [rc/box
     :size "1 0 auto"
     :child
     [rc/input-text
      :width "100%"
      :height "1.5em"
      :model nil
      :placeholder "Add Keyword"
      :on-change #(rf/dispatch [:add-to-keyword-set %])
      :style {:background    @textbox-background
              :border-radius "4px 4px 4px 4px"
              :border        (str "solid 1px " @header-background)
              :padding       "1px 3px 1px 3px"}]]))

(defn footer-buttons []
  [rc/v-box
   :children
   [[rc/button
     :label "Edit"
     :on-click #(rf/dispatch [:toggle-delete-keywording])]
    [rc/button
     :label "Used"
     :on-click #(rf/dispatch [:fill-keyword-set])]
    [rc/button
     :label "Favorite"
     :on-click #(rf/dispatch [:set-favorite-keywords])]]])
