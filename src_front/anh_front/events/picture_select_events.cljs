(ns anh-front.picture-select-events
  (:require [anh-front.helpers :as helpers]
            [com.rpl.specter :as sp]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :toggle-select-picture
  (fn  [{:keys [db]} [_ pic]]
    {:db (assoc db :picture-list (sp/transform
                                   [:selected]
                                   #(if (some #{pic} %)
                                      (vec (remove #{pic} %))
                                      (into % [pic]))
                                   (:picture-list db)))
     ;; :dispatch-n [[:set-keys :pictures]
     ;;              [:set-panel-focus :pictures]]
     }))

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
  :select-all
  (fn [{:keys [db]} _]
    (let [pictures (rf/subscribe [:pictures])]
      {:db (assoc-in db [:picture-list :selected]
                     (vec (map helpers/image-path @pictures)))})))

(rf/reg-event-fx
  :clear-focus
  (fn [{:keys [db]} _]
    (let [pictures  (rf/subscribe [:sorted-pictures])
          first-pic (helpers/image-path (first @pictures))]
      {:db (-> db
               (assoc-in [:picture-list :focus] first-pic)
               (assoc-in [:picture-list :selected] []))})))

(rf/reg-event-fx
  :clear-all
  (fn [{:keys [db]} _]
    {:db (assoc-in db [:picture-list :selected] [])}))

(rf/reg-event-fx
  :set-focus
  (fn [{:keys [db]} [_ new-focus]]
    {:db (assoc-in db [:picture-list :focus] new-focus)}))
