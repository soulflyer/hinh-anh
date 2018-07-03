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
  :clear-all
  (fn [{:keys [db]} _]
    {:db (assoc-in db [:picture-list :selected] [])}))

(rf/reg-event-fx
  :set-focus
  (fn [{:keys [db]} [_ new-focus]]
    {:db (assoc-in db [:picture-list :focus] new-focus)}))

(rf/reg-event-fx
  :fill-keyword-set
  (fn [{:keys [db]} _]
    (let [current-keywords (rf/subscribe [:current-keywords])]
      {:db (-> db
               (assoc :keyword-set @current-keywords)
               (assoc :error (str "Set keywords")))})))

(rf/reg-event-fx
  :set-keyword-set
  (fn [{:keys [db]} [_ keyword-set]]
    {:db (-> db
             (assoc :keyword-set keyword-set)
             (assoc :error "set keywords"))}))

(rf/reg-event-fx
  :set-keyword-set-by-name
  (fn [{:keys [db]} [_ name]]
    (let [keyword-set (rf/subscribe [:keyword-set-by-name name])]
      {:db (assoc db :keyword-set @keyword-set)
       :dispatch [:set-keys-for :left]})))

(rf/reg-event-fx
  :set-favorite-keywords
  (fn [{:keys [db]} _]
    (let [fav (rf/subscribe [:favorite-keyword-set])]
      {:dispatch [:set-keyword-set @fav] })))

(rf/reg-event-fx
  :clear-keywords
  (fn [{:keys [db]} _]
    {:db (-> db
             (assoc    :keyword-set [])
             (assoc    :error "Cleared keywords")
             (assoc-in [:preferences :show-delete-keywording] true))}))

(rf/reg-event-fx
  :add-to-keyword-set
  (fn [{:keys [db]} [_ new-keyword]]
    (let [current-set (rf/subscribe [:keyword-set])]
      {:db (assoc db :keyword-set (set (conj @current-set new-keyword)))})))

(rf/reg-event-fx
  :remove-from-keyword-set
  (fn [{:keys [db]} [_ old-keyword]]
    (let [current-set (rf/subscribe [:keyword-set])]
      {:db (assoc db :keyword-set (remove #{old-keyword} @current-set))})))

(rf/reg-event-fx
  :add-keyword-set
  (fn [{:keys [db]} [_ new-name]]
    (let [keywords     (rf/subscribe [:keyword-set])
          keyword-sets (rf/subscribe [:keyword-sets])]
      {:db (assoc-in
             db
             [:preferences :keyword-sets]
             (conj @keyword-sets {:name new-name :keywords @keywords}))})))

(rf/reg-event-fx
  :remove-keyword-set
  (fn [{:keys [db]} [_ name]]
    (let [keyword-sets (rf/subscribe [:keyword-sets])]
      {:db (assoc-in
             db
             [:preferences :keyword-sets]
             (remove #(= name (:name %)) @keyword-sets))})))
