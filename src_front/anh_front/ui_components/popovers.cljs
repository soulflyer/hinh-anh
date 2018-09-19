(ns anh-front.popovers
  (:require [re-com.core      :as rc]
            [re-frame.core    :as rf]
            [anh-front.styles :as styles]))

(defn anchor [label on-click]
  (let [background (rf/subscribe [:button-background])]
    [rc/button
     :style (styles/button)
     :label label
     :on-click on-click]))

(defn anchor-icon [icon on-click]
  (let [background (rf/subscribe [:button-background])]
    [rc/md-icon-button
     :style (styles/icon-button)
     :size :smaller
     :md-icon-name icon
     :on-click on-click]))

(defn popover [title body]
  [rc/popover-content-wrapper
   :padding 1
   :no-clip? true
   :title title
   :body body])

(defn popover-wrapper
  [showing-atom icon title type on-click]
  [rc/popover-anchor-wrapper
   :showing? showing-atom
   :position :above-center
   :anchor (anchor-icon icon #(swap! showing-atom not))
   :popover (popover
              title
              (case type
                :text-box [rc/input-text
                           :attr {:id (str "popover-" )}
                           :model nil
                           :on-change on-click]
                [rc/button
                 :attr {:id (str "popover-" )}
                 :label "OK"
                 :on-click on-click]))])
