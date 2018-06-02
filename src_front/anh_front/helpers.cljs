(ns anh-front.helpers
  (:require [clojure.string :as str]))

(defn image-path
  "return a string containing the year/month/project/version path of an image"
  [image-map]
  (if (< 0 (count image-map))
    (str (image-map "Year") "/"
         (image-map "Month") "/"
         (image-map "Project") "/"
         (image-map "Version"))
    nil))

(defn stars [num]
  (str/join (take (js/parseInt num) (repeat "★"))))

(defn path->id
  "convert a path to the corresponding _id, ie. remove all the / characters."
  [path]
  (str/join (str/split path #"/")))

(defn get-pic
  "given a vector of picture maps and a path return the map representing that picture"
  [pictures path]
  (let [id (path->id path)]
    (first (filter #(= id (get % "_id")) pictures))))
