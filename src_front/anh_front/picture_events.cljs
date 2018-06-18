(ns anh-front.picture-events
  (:require [clojure.set     :as set]
            [com.rpl.specter :as sp]
            [re-frame.core   :as rf]))

(rf/reg-event-fx
  :next-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic-path])
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
          pic-focus  (rf/subscribe [:focused-pic-path])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (dec focus-num)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :down-picture
  (fn [{:keys [db]} _]
    (let [pic-ids    (rf/subscribe [:picture-ids])
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
    (let [pic-ids    (rf/subscribe [:picture-ids])
          pic-focus  (rf/subscribe [:focused-pic-path])
          columns    (rf/subscribe [:picture-columns])
          invert-ids (set/map-invert @pic-ids)
          focus-num  (invert-ids @pic-focus)
          new-id     (get @pic-ids (max 0 (- focus-num @columns)))]
      {:db (assoc-in db [:picture-list :focus] new-id)
       :scroll-into-view new-id})))

(rf/reg-event-fx
  :toggle-select-picture
  (fn  [{:keys [db]} [_ pic]]
    {:db (assoc db :picture-list (sp/transform
                                   [:selected]
                                   #(if (some #{pic} %)
                                      (vec (remove #{pic} %))
                                      (into % [pic]))
                                   (:picture-list db)))
     :dispatch-n [[:set-keys :pictures]
                  [:set-panel-focus :pictures]]}))

(rf/reg-event-fx
  :toggle-select-focused-pic
  (fn [{:keys [db]} _]
    (let [path (rf/subscribe [:focused-pic-path])]
      {:dispatch [:toggle-select-picture @path]})))

(rf/reg-event-fx
  :toggle-select-and-focus
  (fn [{:keys [db]} [_ pic]]
    (let [a 1]
      {:db (assoc-in db [:picture-list :focus] pic)
       :dispatch [:toggle-select-picture pic]})))

(rf/reg-event-fx
  :clear-all
  (fn [{:keys [db]} _]
    {:db (assoc-in db [:picture-list :selected] [])}))

(rf/reg-event-fx
  :fill-keyword-set
  (fn [{:keys [db]} _]
    (let [current-keywords (rf/subscribe [:current-keywords])]
      {:db (assoc db :keyword-set @current-keywords)})))
