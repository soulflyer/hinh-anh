(ns anh-front.picture-events
  (:require [re-frame.core :as rf]
            [clojure.set :as set]))

(rf/reg-event-fx
  :next-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (min (dec (count @pic-ids))
                                        (inc focus-num)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :prev-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (dec focus-num)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :down-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (min (dec (count @pic-ids))
                                        (+ focus-num @columns)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :up-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (- focus-num @columns)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))
