(ns anh-front.details
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]
            [clojure.string :as str]))

(def exif-fields
  ["Aperture Value"
   "Artist"
   "By-Line"
   "Camera Owner Name"
   "Caption/Abstract"
   "Color Space"
   "Copyright"
   "Copyright Notice"
   "Data Precision"
   "Date/Time Digitized"
   "Date/Time Original"
   "Exposure Bias Value"
   "Exposure Mode"
   "Exposure Program"
   "Exposure Time"
   "F-Number"
   "File Modified Date"
   "Flash"
   "Focal Length"
   "Focal Length 35"
   "ISO Speed Ratings"
   "Image Height"
   "Image Width"
   "Keywords"
   "Lens"
   "Make"
   "Metering Mode"
   "Model"
   "Object Name"
   "Rating"
   "Reference Date"
   "Software"
   "Special Instructions"
   "User Comment"
   "White Balance"
   "White Balance Mode"])

(defn camera
  "Returns a shorter version of a given string representing the camera model"
  [model]
  (case model
    "Canon PowerShot G15"       "Canon G15"
    "Canon DIGITAL IXUS 980 IS" "Canon IXUS 980"
    "QSS-29_31"                 "Unknown Camera"
    ""                          "Unknown Camera"
    nil                         "Unknown Camera"
    model))

(defn split-datetime
  [datetime]
  (str/split datetime #" "))

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

(defn panel []
  (let [pic                  (rf/subscribe [:focused-pic])
        camera               (camera (get @pic "Model"))
        caption              (get @pic "Caption-Abstract")
        title                (get @pic "Object-Name")
        copyright            (get @pic "Copyright-Notice")
        [date time]          (split-datetime (get @pic "Date-Time-Original"))
        f-stop               (get @pic "F-Number")
        focal-length         (get @pic "Focal-Length")
        focal-length-35      (get @pic "Focal-Length-35")
        iso                  (get @pic "ISO-Speed-Ratings")
        keywords             (get @pic "Keywords")
        keyword-string       (reduce str (interpose ", " keywords))
        lens                 (get @pic "Lens")
        shutter              (get @pic "Exposure-Time")
        special-instructions (get @pic "Special-Instructions")
        white-balance        (get @pic "White-Balance-Mode")
        version              (get @pic "Version")]
    (rc/v-box
      :height "100%"
      :children
      [[:h3 {:style {:margin "5px 0px 3px"}} camera]
       (if lens [:p lens])
       (if iso [rc/h-box
                :justify :between
                :children [[:p (str "iso-" iso)] [:p f-stop] [:p shutter]]])
       [rc/gap :size "6px"]
       [rc/line]
       ;;[rc/gap :size "4px"]
       [rc/h-box
        :justify :between
        :children [[:p date] [:p time]]]
       [rc/line]
       [rc/v-box
        :style {:font-size "0.65em"}
        :children
        [[rc/h-box
          :justify :between
          :children [[:p "Copyright"] [:p copyright]]]
         [rc/h-box
          :justify :between
          :children [[:p "Special instr"] [:p special-instructions] ]]]]
       [rc/gap :size "4px"]
       [box 1 title "Title"]
       [box 5 caption "Caption"]
       [box false 2 keyword-string "Keywords"]
       [rc/line]
       [all-exif exif-fields @pic]])))
