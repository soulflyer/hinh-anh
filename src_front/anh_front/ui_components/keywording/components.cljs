(ns anh-front.keywording.components
  (:require [re-frame.core :as rf]
            [re-com.core   :as rc]))

(defn delete-button [on-click kw]
  [rc/md-icon-button
   :md-icon-name "zmdi-minus"
   :size :smaller
   :on-click #(rf/dispatch [on-click kw])])

(defn keyword-button [kw on-click on-right-click]
  (let [header-background (rf/subscribe [:details-header-background])
        background        (rf/subscribe [:details-background])]
    [rc/v-box
     ;; TODO find out how to style the box around a button. It's generated
     ;; automatically and only seems to allow the button to expand to full
     ;; width when it's contained in an otherwise spurious v-box
     :size "1 1 auto"
     :children
     [[rc/button
       :label kw
       :style {:padding    "0px 1px 0px 3px"
               :width      "100%"
               :overflow   "hidden"
               :border     (str "solid 1px " @header-background)
               :background @background}
       :attr
       {:on-context-menu #(rf/dispatch [on-right-click kw])}
       :on-click #(rf/dispatch [on-click kw])]]]))

(defn add-input
  [add-function placeholder]
  (let [header-background (rf/subscribe [:details-header-background])
        textbox-background (rf/subscribe [:details-textbox-background])]
    [rc/box
     :size "1 0 auto"
     :child
     [rc/input-text
      :width "100%"
      :height "1.5em"
      :model nil
      :placeholder placeholder
      :on-change #(rf/dispatch [add-function %])
      :style {:background    @textbox-background
              :border-radius "4px 4px 4px 4px"
              :border        (str "solid 1px " @header-background)
              :padding       "1px 3px 1px 3px"}]]))

(defn shortcut [sk]
  (let [shortcut-highlight (rf/subscribe [:shortcut-highlight])]
    [rc/box
     :child sk
     :style {:padding "1px 4px 0px 0px"
             :width   "0.75em"
             :color   @shortcut-highlight}]))

(defn button-set
  [keyword-map add remove on-click on-right-click name]
  (let [shortcut-highlight (rf/subscribe [:shortcut-highlight])
        show-edit        (rf/subscribe [:show-delete-keywording])]
    [rc/scroller
     :h-scroll :off
     :size "none"
     :child
     [rc/v-box
      :children
      [(let [edit @show-edit
             kws (keys @keyword-map)]
         (for [keyword kws]
           ^{:key (str "button-" name "-" keyword)}
           [rc/h-box
            :children
            [[shortcut (str (get @keyword-map keyword))]
             [keyword-button keyword on-click on-right-click]
             (if edit
               [delete-button remove keyword])]]))
       (if @show-edit
         [add-input add (str "Add " name)])]]]))

(defn footer-buttons []
  [rc/h-box
   :style {:padding "2px 0px 2px 0px"}
   :justify :between
   :children
   [[rc/h-box
     :children
     [[rc/md-icon-button
       :md-icon-name "zmdi-edit"
       :size :smaller
       :on-click #(rf/dispatch [:toggle-delete-keywording])]
      [rc/md-icon-button
       :md-icon-name "zmdi-scissors"
       :size :smaller
       :on-click #(rf/dispatch [:clear-keywords])]]]
    ;; [rc/md-icon-button
    ;;  :md-icon-name "zmdi-info"
    ;;  :size :smaller
    ;;  :on-click #(rf/dispatch [:toggle-footer])]
    ]])
