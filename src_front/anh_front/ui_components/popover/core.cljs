(ns anh-front.ui-components.popover.core
  (:require [anh-front.ui-components.styles :as styles]
            [re-com.core                    :as rc]
            [re-frame.core                  :as rf]))

(defn anchor
  [label on-click]
  (let [background (rf/subscribe [:button-background])]
    [rc/button
     :style (styles/button)
     :label label
     :on-click on-click]))

(defn anchor-icon
  [icon on-click]
  (let [background (rf/subscribe [:button-background])]
    [rc/md-icon-button
     :style (styles/icon-button)
     :size :smaller
     :md-icon-name icon
     :on-click on-click]))

(defn popover
  [title body]
  (let [background (rf/subscribe [:details-textbox-background])]
    [rc/popover-content-wrapper
     :padding 1
     :arrow-length 100
     :no-clip? true
     :title title
     :popover-color @background
     :position-offset -4
     :body body]))
