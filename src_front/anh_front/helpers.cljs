(ns anh-front.helpers
  (:require [clojure.string :as str]))

(defn image-path
  "return a string containing the year/month/project/version path of an image"
  [image-map]
  (str (image-map "Year") "/"
       (image-map "Month") "/"
       (image-map "Project") "/"
       (image-map "Version") ".jpg"))

(defn stars [num]
  (str/join (take (js/parseInt num) (repeat "*"))))
