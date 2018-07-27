(ns anh-front.keywords-helper
  (:require [re-com.core :as rc]))

(defn anchor [label on-click]
  [rc/button
   :label label
   :on-click on-click])

(defn popover [title body]
  [rc/popover-content-wrapper
   :no-clip? true
   :title title
   :body body])
