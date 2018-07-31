(ns anh-front.keywords-helper
  (:require [re-com.core      :as rc]
            [re-frame.core    :as rf]
            [anh-front.styles :as styles]))

(defn anchor [label on-click]
  (let [background (rf/subscribe [:button-background])]
    [rc/button
     :style (styles/button)
     :label label
     :on-click on-click]))

(defn popover [title body]
  [rc/popover-content-wrapper
   :padding 1
   :no-clip? true
   :title title
   :body body])
