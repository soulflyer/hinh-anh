(ns anh-front.ui-components.details.helper
  (:require [clojure.string :as str]))

(def file-fields
  ["Year"
   "Month"
   "Version"
   "_id"])

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
