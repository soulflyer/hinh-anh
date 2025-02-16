(ns anh-front.ui-components.keywording.components
  (:require [anh-front.ui-components.popover.popovers :as popover]
            [re-com.core                              :as rc]
            [re-frame.core                            :as rf]))

(defn delete-button [on-click kw]
  [rc/md-icon-button
   :md-icon-name "zmdi-minus"
   :size :smaller
   :on-click #(rf/dispatch [on-click kw])])

(defn kw-button [kw on-click on-right-click]
  (let [header-background (rf/subscribe [:details-header-background])
        background        (rf/subscribe [:details-background])]
    [rc/v-box
     :size "1 1 auto"
     :children
     [[rc/button
       :label kw
       :style {:padding    "0px 1px 0px 3px"
               :width      "100%"
               :overflow   "hidden"
               :border     (str "solid 1px " @header-background)
               :background @background}
       :attr {:on-context-menu #(rf/dispatch [on-right-click kw])
              :tabIndex "-1"}
       :on-click #(rf/dispatch [on-click kw])]]]))

(defn add-input
  [{:keys [add-function placeholder suggestions]}]
  (let [header-background     (rf/subscribe [:details-header-background])
        textbox-background    (rf/subscribe [:details-textbox-background])
        style                 {:background    @textbox-background
                               :border-radius "4px 4px 4px 4px"
                               :border        (str "solid 1px " @header-background)
                               :padding       "1px 3px 1px 3px"
                               :height        "1.5em"
                               :width         "100%"}]
    [rc/box
     :child
     (if (nil? suggestions)
       [rc/input-text
        :change-on-blur? true
        :model nil
        :placeholder placeholder
        :on-change #(rf/dispatch [add-function %])
        :style style]
       [rc/typeahead
        :data-source suggestions
        :change-on-blur? true
        :model nil
        :placeholder placeholder
        :rigid? false
        :on-change #(rf/dispatch [add-function %])
        :style style])]))


(defn shortcut [sk]
  (let [shortcut-highlight (rf/subscribe [:shortcut-highlight])]
    [rc/box
     :child sk
     :style {:padding "1px 4px 0px 0px"
             :width   "0.75em"
             :color   @shortcut-highlight}]))

(defn button-set
  [{:keys [button-map add remove on-click on-right-click show-edit suggestions name]}]
  [rc/scroller
   :h-scroll :off
   :size "none"
   :child
   [rc/v-box
    :children
    [(let [edit @show-edit
           buttons (sort (keys @button-map))]
       (for [btn buttons]
         ^{:key (str "button-" name "-" btn)}
         [rc/h-box
          :children
          [[shortcut (str (get @button-map btn))]
           [kw-button btn on-click on-right-click]
           (when edit
             [delete-button remove btn])]]))
     (when @show-edit
       [add-input {:add-function add
                   :placeholder (str "Add " name)
                   :suggestions suggestions}])]]])

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
       :on-click #(rf/dispatch [:clear-keywords])]
      [popover/save-keyword-set]]]
    ;; [rc/md-icon-button
    ;;  :md-icon-name "zmdi-info"
    ;;  :size :smaller
    ;;  :on-click #(rf/dispatch [:toggle-footer])]
    ]])
