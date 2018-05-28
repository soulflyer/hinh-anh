(ns anh-front.picture-events
  (:require [re-frame.core :as rf]
            [clojure.set :as set]))

(rf/reg-event-db
  :next-picture
  (fn [db _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)]
      (assoc-in db [:picture-list :focus]
                (get @pic-ids (min
                                (dec (count @pic-ids))
                                (inc focus-num)))))))

(rf/reg-event-db
  :prev-picture
  (fn [db _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)]
      (assoc-in db [:picture-list :focus]
                (get @pic-ids (max
                                0
                                (dec focus-num)))))))

(rf/reg-event-db
  :down-picture
  (fn [db _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)]
      (assoc-in db [:picture-list :focus]
                (get @pic-ids (min
                                (dec (count @pic-ids))
                                (+ focus-num @columns)))))))

(rf/reg-event-db
  :up-picture
  (fn [db _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)]
      (assoc-in db [:picture-list :focus]
                (get @pic-ids (max
                                0
                                (- focus-num @columns)))))))
