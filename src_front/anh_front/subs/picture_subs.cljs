(ns anh-front.subs.picture-subs
  (:require [re-frame.core :as rf]
            [anh-front.helpers :as helpers]
            [clojure.set :as set]))

(rf/reg-sub
  :picture-display-list
  (fn [db _] (:picture-display-list db)))

(rf/reg-sub
  :picture-display-index
  (fn [db _] (:picture-display-index db)))

(rf/reg-sub
  :picture-display
  (fn [_ _] [(rf/subscribe [:picture-display-list])
             (rf/subscribe [:picture-display-index])])
  (fn [[picture-display-list picture-display-index] _]
    (nth picture-display-list picture-display-index)))

(rf/reg-sub
  :selected-project
  (fn [_ _]  (rf/subscribe [:project-tree]))
  (fn [pt _] (:focus pt)))

(rf/reg-sub
  :picture-list
  (fn [db _] (:picture-list db)))

(rf/reg-sub
  :pictures
  (fn [_ _]    (rf/subscribe [:picture-list]))
  (fn [pics _] (:pictures pics)))

;; TODO test with different filters and sort fields
(rf/reg-sub
  :sorted-pictures
  (fn [_ _] [(rf/subscribe [:pictures])
             (rf/subscribe [:picture-sort-field])
             (rf/subscribe [:picture-filter-stars])])
  (fn [[pictures sort-field filter-stars] _]
    (filter
      #(>= (get % "Rating") filter-stars)
      (helpers/sort-map-vector sort-field pictures))))

(rf/reg-sub
  :picture-ids
  (fn [_ _] (rf/subscribe [:sorted-pictures]))
  (fn [pictures _] (map #(get % "_id") pictures)))

(rf/reg-sub
  :pictures-map
  (fn [_ _] (rf/subscribe [:sorted-pictures]))
  (fn [pictures _] (zipmap (iterate inc 0) (map helpers/image-path pictures))))

(rf/reg-sub
  :pictures-inverse-map
  (fn [_ _] (rf/subscribe [:pictures-map]))
  (fn [pictures _] (set/map-invert pictures)))

(rf/reg-sub
  :focused-pic-path
  (fn [_ _] (rf/subscribe [:picture-list]))
  (fn [pics _] (:focus pics)))

(rf/reg-sub
  :focused-pic
  (fn [_ _] [(rf/subscribe [:pictures]) (rf/subscribe [:focused-pic-path])])
  (fn [[pictures focused-pic-path] _]
    (helpers/get-pic pictures focused-pic-path)))

(rf/reg-sub
  :selected-pics
  (fn [_ _]            (rf/subscribe [:picture-list]))
  (fn [picture-list _] (:selected picture-list)))

(rf/reg-sub
  :selected-jpegs
  (fn [_ _] (rf/subscribe [:selected-pics]))
  (fn [pics _] (map #(str % ".jpg") pics)))

(rf/reg-sub
  :current-keywords
  (fn [_ _]        (rf/subscribe [:pictures]))
  (fn [pictures _] (helpers/all-keywords pictures)))

(rf/reg-sub
  :loaded-keyword-set
  (fn [db _]
    (:loaded-keyword-set db)))

(rf/reg-sub
  :keyword-set-list
  (fn [db _]
    ))

(rf/reg-sub
  :keyword-set-by-name
  (fn [db [_ name]]
    ;;name
    (:keywords
     (first
       (filter
         #(= name (:name %))
         (get-in db [:preferences :keyword-sets]))))))
