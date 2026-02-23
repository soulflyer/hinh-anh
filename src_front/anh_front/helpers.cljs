(ns anh-front.helpers
  (:require [clojure.string  :as str]
            [com.rpl.specter :as sp]
            [anh-front.keys.key-codes  :refer [key-vals]]))

(defn image-path
  "return a string containing the year/month/project/version path of an image"
  [image-map]
  (if (< 0 (count image-map))
    (str (image-map "Year") "/"
         (image-map "Month") "/"
         (image-map "Project") "/"
         (image-map "Version"))
    nil))

(defn stars
  [num]
  (str/join (take (js/parseInt num) (repeat "★"))))

(defn empty-stars
  [num]
  (str/join (take (js/parseInt num) (repeat "☆"))))

(defn fraction-stars
  "Returns a string of stars where <numerator> are filled in and the rest are empty"
  [numerator denominator]
  (str (stars numerator) (empty-stars (- denominator numerator))))

(def right-triangle "▶")
(def down-triangle  "▼")

(defn path->id
  "convert a path to the corresponding _id, ie. remove all the / characters."
  [path]
  (str/join (str/split path #"/")))

(defn path->vector
  "converts \"2002/01/09-project\" to [\"2002\" \"01\" \"09-project\"]"
  [path]
  (str/split path #"/"))

(defn vector->path
  [path-vector]
  (reduce str (interpose "/" path-vector)))

(defn get-pic
  "given a vector of picture maps and a path return the map representing that picture"
  [pictures path]
  (let [id (path->id path)]
    (first (filter #(= id (get % "_id")) pictures))))

(defn all-keywords
  "Given a vector of maps representing pictures returns a list of all the keywords used"
  [pics]
  (vec
    (sort
      (set
        (flatten
          (remove
            nil?
            (sp/select [sp/ALL (sp/submap ["Keywords"]) "Keywords"] pics)))))))

(defn paths->ids
  "convert a vector of paths to a string of space separated ids"
  [pics]
  (reduce str (interpose " " (for [pic pics] (path->id pic)))))

(defn sort-map-vector
  [sort-field maps]
  (sort #(compare (get %1 sort-field) (get %2 sort-field)) maps))
