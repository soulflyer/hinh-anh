(ns anh-front.picture-events
  (:require [clojure.set     :as set]
            [com.rpl.specter :as sp]
            [re-frame.core   :as rf]))

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

(rf/reg-event-db
  :toggle-select-picture
  (fn  [db [_ pic]]
    (-> db
        (assoc :picture-list (sp/transform
                               [:selected]
                               #(if (some #{pic} %) (vec (remove #{pic} %)) (into % [pic]))
                               (:picture-list db))))))
