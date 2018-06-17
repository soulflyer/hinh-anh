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
(defn keyword-box
  "re-com component to display the keywords"
  [keywords]
  (let [keyword-string    (reduce str (interpose ", " keywords))
        header-background (rf/subscribe [:details-header-background])
        background        (rf/subscribe [:details-background])]
    [rc/v-box
     :style {:font-size "0.75em"
             :width "100%"
             :background @header-background
             :border-radius "4px"
             :border (str "solid 1px " @header-background)
             :margin-bottom "5px"}
     :children
     [[rc/label
       :style {:padding-left "3px"}
       :label "Keywords"]
      [rc/label
       :style {:width "100%"
               :background @background
               :padding-left "3px"
               :border-radius "0px 0px 4px 4px"}
       :label keyword-string]]]))

(defn keyword-editor
  "re-com component to display, add and edit keywords"
  [keywords]
  (let [textbox-background (rf/subscribe [:details-textbox-background])
        header-background  (rf/subscribe [:details-header-background])
        background         (rf/subscribe [:details-background])]
    (rc/v-box
      :style {;;:width "100%"
              :background @header-background
              :border-radius "4px"
              :border (str "solid 1px " @header-background)
              :margin-bottom "5px"}
      :children
      [[rc/label
        :style {:font-size "0.75em"
                :padding-left "3px"}
        :label "Keywords"]
       [rc/v-box
        :style {:background @background
                :padding-left "3px"
                :border-radius "0px 0px 4px 4px"}
        :children
        [(for [keyword keywords]
           [rc/h-box
            :justify :between
            :style {:font-size "0.85em"
                    :border-bottom (str "solid 1px " @header-background)}
            :children
            [[rc/md-icon-button
              :md-icon-name "zmdi-delete"
              :size :smaller]
             [rc/label
              :style {:margin "2px 3px 0px 0px"}
              :label keyword]]])
         [rc/h-box
          :children
          [[rc/md-icon-button
            :md-icon-name "zmdi-plus"
            :size :smaller]
           [rc/box
            :size "1 0 auto"
            :child
            [rc/input-text
             :width "100%"
             :height "1.5em"
             :style {:background @textbox-background
                     :border-radius "0px 0px 4px 4px"
                     :padding "1px 3px 1px 3px"} ]]]]]]])))

(defn box
  ([rows content label on-change]
   (println (reduce str (interpose " - " [rows content label])))
   (box true rows content label on-change))
  ([writeable rows contents label on-change]
   (let [textbox-background (rf/subscribe [:details-textbox-background])
         header-background  (rf/subscribe [:details-header-background])]
     [rc/v-box
      :style {:width "100%"
              :background @header-background
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
        :attr {:id label
               :tabIndex "1"}
        :disabled? (not writeable)
        :style {:padding "0px 0px 0px 3px"
                :border-radius "0px 0px 4px 4px"
                :background @textbox-background
                :border-color @header-background}
        :placeholder label
        :model contents
        :on-change on-change ]]])))

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
