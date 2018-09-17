(ns anh-front.picture-events
  (:require [clojure.set :as set]
            [re-frame.core :as rf]))

(rf/reg-fx
  :scroll-into-view
  (fn [element]
    (let [dom-element (.getElementById js/document element)]
      (when dom-element
        (.scrollIntoViewIfNeeded dom-element false)))))

(rf/reg-event-fx
  :next-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:pictures-map])
          pic-focus  (rf/subscribe [:focused-pic-path])
          invert-ids (rf/subscribe [:pictures-inverse-map])
          focus-num  (@invert-ids @pic-focus)
          new-id     (get @pic-ids (min (dec (count @pic-ids))
                                        (inc focus-num)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :prev-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:pictures-map])
          pic-focus  (rf/subscribe [:focused-pic-path])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (dec focus-num)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :down-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:pictures-map])
          pic-focus  (rf/subscribe [:focused-pic-path])
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
    (let [pic-ids    (rf/subscribe [:pictures-map])
          pic-focus  (rf/subscribe [:focused-pic-path])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (- focus-num @columns)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))
