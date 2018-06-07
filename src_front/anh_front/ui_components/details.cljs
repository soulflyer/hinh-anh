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

(defn box
  [contents label]
  (if (string? contents)
    [rc/h-box
     :width "100%"
     :justify :start
     :children
     [[rc/label
       :width "130px"
       ;;:size "120px"
       :label label]
      [rc/label
       :size "1"
       :label contents]]]))

(defn all-exif
  [fields pic]
  (for [field fields]
    (box (get pic (str/replace field #"[ /]" "-")) field)))

(defn panel []
  (let [pic                  (rf/subscribe [:focused-pic])
        camera               (camera (get @pic "Model"))
        caption              (get @pic "Caption-Abstract")
        copyright            (get @pic "Copyright-Notice")
        [date time]          (split-datetime (get @pic "Date-Time-Original"))
        f-stop               (get @pic "F-Number")
        focal-length         (get @pic "Focal-Length")
        focal-length-35      (get @pic "Focal-Length-35")
        iso                  (get @pic "ISO-Speed-Ratings")
        Keywords             (get @pic "Keywords")
        lens                 (get @pic "Lens")
        shutter              (get @pic "Exposure-Time")
        special-instructions (get @pic "Special-Instructions")
        white-balance        (get @pic "White-Balance-Mode")
        version              (get @pic "Version")]
    (rc/v-box
      :height "100%"
      :children
      [[:h3 {:style {:margin "5px 0px 0px"}} camera]
       (if lens [:p (str "Lens " lens)])
       (if iso [:p (str "iso" iso " - " f-stop " - " shutter)])
       (rc/gap :size "6px")
       (rc/line)
       (rc/gap :size "4px")
       (box date "Date")
       (box time "Time")
       (box focal-length "Focal-length")
       (box focal-length-35 "35mm equiv")
       (box caption "Caption")
       (box copyright "Copyright")
       (box special-instructions "Special instr")
       (rc/line)
       (rc/scroller
         :v-scroll :auto
         :h-scroll :off
         :child
         [rc/v-box
          :children
          (all-exif exif-fields @pic)])])))
