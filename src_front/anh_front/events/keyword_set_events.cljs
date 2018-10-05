(ns anh-front.keyword-set-events
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
  :fill-keyword-set
  (fn [{:keys [db]} _]
    (let [current-keywords (rf/subscribe [:current-keywords])]
      {:db (-> db
               (assoc-in [:preferences :keyword-set] @current-keywords)
               (assoc :error (str "Set keywords")))
       :dispatch [:set-keys-for :left]})))

(rf/reg-event-fx
  :set-keyword-set-by-name
  (fn [{:keys [db]} [_ name]]
    (let [keyword-set (rf/subscribe [:keyword-set-by-name name])]
      {:db (-> db (assoc-in [:preferences :keyword-set] @keyword-set)
               (assoc :loaded-keyword-set name))
       :dispatch [:set-keys-for :left]})))

(rf/reg-event-fx
  :clear-keywords
  (fn [{:keys [db]} _]
    {:db (-> db
             (assoc-in [:preferences :keyword-set] [])
             (assoc    :error "Cleared keywords")
             (assoc-in [:preferences :show-delete-keywording] true))}))

(rf/reg-event-fx
  :add-to-keyword-set
  (fn [{:keys [db]} [_ new-keyword]]
    (let [current-set     (rf/subscribe [:keyword-set])
          loaded-keywords (rf/subscribe [:loaded-keyword-set])]
      (if (not (= "" new-keyword))
        {:db (cond-> db
               true (assoc-in [:preferences :keyword-set]
                              (set (conj @current-set new-keyword))))
         :dispatch [:refresh-keyword-set]}))))

(rf/reg-event-fx
  :refresh-keyword-set
  (fn [_ _]
    (let [ loaded-keywords (rf/subscribe [:loaded-keyword-set])]
      (if @loaded-keywords
        {:dispatch-n [[:remove-keyword-set @loaded-keywords]
                      [:add-keyword-set @loaded-keywords]
                      [:load-keyword-list]]}))))

(rf/reg-event-fx
  :remove-from-keyword-set
  (fn [{:keys [db]} [_ old-keyword]]
    (let [current-set (rf/subscribe [:keyword-set])]
      {:db (assoc-in db [:preferences :keyword-set]
                     (remove #{old-keyword} @current-set))
       :dispatch [:refresh-keyword-set]})))

(rf/reg-event-fx
  :add-keyword-set
  (fn [{:keys [db]} [_ new-name]]
    (if (not (= "" new-name))
      (let [keywords     (rf/subscribe [:keyword-set])
            keyword-sets (rf/subscribe [:keyword-sets])]
        {:db (assoc-in
               db
               [:preferences :keyword-sets]
               (conj @keyword-sets {:name new-name :keywords @keywords}))
         :dispatch [:store-preferences]}))))

(rf/reg-event-fx
  :remove-keyword-set
  (fn [{:keys [db]} [_ name]]
    (let [keyword-sets (rf/subscribe [:keyword-sets])]
      {:db (assoc-in
             db
             [:preferences :keyword-sets]
             (remove #(= name (:name %)) @keyword-sets))
       :dispatch [:store-preferences]})))
