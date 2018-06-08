(ns anh-front.detail-components
  (:require [clojure.string :as str]
            [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn line
  [contents label]
  (let [show-empty (rf/subscribe [:show-empty-exif])]
    (if (or @show-empty contents)
      [rc/h-box
       :width "100%"
       :justify :start
       :children
       [[rc/label
         :width "110px"
         :label label]
        [rc/label
         :size "1"
         :label (if (vector? contents)
                  (interpose ", " contents)
                  contents)]]])))

(defn box
  ([rows content label]
   (box true rows content label))
  ([writeable rows contents label]
   [rc/v-box
    :style {:width "100%"
            :background "gray"
            :border-radius "4px"
            :margin-bottom "5px"}
    :children
    [[rc/label
      :style {:font-size "0.75em"
              :padding-left "3px"}
      :label label]
     [rc/input-textarea
      :width "100%"
      :rows rows

      :disabled? (not writeable)
      :style {:padding "0px 0px 0px 3px"
              :border-radius "0px 0px 4px 4px"}
      :placeholder label
      :model contents]]]))

(defn all-exif
  [fields pic]
  [rc/scroller
   :v-scroll :auto
   :h-scroll :off
   :style {:font-size "0.75em"}
   :child
   [rc/v-box
    :children
    (for [field fields]
      (line (get pic (str/replace field #"[ /]" "-")) field))]])
