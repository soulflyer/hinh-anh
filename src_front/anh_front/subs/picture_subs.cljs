(ns anh-front.picture-subs
  (:require [re-frame.core :as rf]
            [anh-front.helpers :as helpers]
            ;;[com.rpl.specter :as sp]
            ))

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

;;TODO This can only work when given "_id" as the sort field! Should take other fields.
(rf/reg-sub
  :picture-ids
  (fn [_ _]
    [(rf/subscribe [:pictures]) (rf/subscribe [:picture-sort-field])])
  (fn [[pics sort-field] _]
    (sort (map #(get % sort-field) pics))))

;;TODO this only sorts by _id
(rf/reg-sub
  :pictures-map
  (fn [_ _]    (rf/subscribe [:pictures]))
  (fn [root _] (zipmap (iterate inc 0) (sort (map helpers/image-path root)))))

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
  :current-keywords
  (fn [_ _]        (rf/subscribe [:pictures]))
  (fn [pictures _] (helpers/all-keywords pictures)))

(rf/reg-sub
  :keyword-set
  (fn [db _]
    (:keyword-set db)))

(rf/reg-sub
  :keyword-set-by-name
  (fn [db [_ name]]
    ;;name
    (:keywords
     (first
       (filter
         #(= name (:name %))
         (get-in db [:preferences :keyword-sets]))))))
