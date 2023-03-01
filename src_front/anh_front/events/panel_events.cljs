(ns anh-front.events.panel-events
  (:require [clojure.set :as set]
            [re-frame.core :as rf]))

;;TODO write a set-panel event :next-panel can use it.
(rf/reg-event-fx
  :set-panel-focus
  (fn [{:keys [db]} [_ new-panel]]
    {:db (assoc db :panel-focus new-panel)
     :dispatch [:set-keys-for new-panel]}))

(rf/reg-event-fx
  :next-panel
  (fn [{:keys [db]} _]
    (let [left-panel-display (rf/subscribe [:left-panel-display])
          focus-map  (rf/subscribe [:panel-focus-map])
          focus      (rf/subscribe [:panel-focus])
          invert-map (set/map-invert @focus-map)
          focus-num  (invert-map @focus)
          new-panel  (get @focus-map
                          (mod (inc focus-num)
                               (count @focus-map)))
          keys       (case new-panel
                       :left @left-panel-display
                       :pictures :pictures)
          ;;TODO Clean this up
          html-focus (case keys
                       :pictures "panel-2"
                       ;; :details  "panel-1"
                       ;; :projects "panel-1"
                       ;; :keywording "panel-1"
                       "panel-1")]
      {:db (assoc db :panel-focus new-panel)
       :dispatch-n [[:set-keys-for new-panel]
                    [:store-preferences]]
       :set-html-focus html-focus})))

(rf/reg-event-fx
  :set-displaying
  (fn [{:keys [db]} [_ new-panel]]
    {:db (assoc db :displaying new-panel)}))

(rf/reg-event-fx
  :set-left-panel
  (fn [{:keys [db]} [_ new-panel]]
    {:db (assoc db :left-panel-display new-panel)
     :dispatch [:set-keys new-panel]}))

(rf/reg-event-fx
  :rotate-left-panel
  (fn [_ _]
    (let [left-panel-map (rf/subscribe [:left-panel-map])
          left-display   (rf/subscribe [:left-panel-display])
          ;;panel-focus  (rf/subscribe [:panel-focus])
          invert-map     (set/map-invert @left-panel-map)
          focus-num      (invert-map @left-display)
          new-panel      (get @left-panel-map
                              (mod (inc focus-num)
                                   (count @left-panel-map)))]
      {:dispatch-n [[:set-left-panel new-panel]
                    [:set-keys new-panel]
                    [:set-html-focus "panel-1"]
                    [:store-preferences]]})))

(rf/reg-event-db
  :set-display
  (fn [db [_ display-type]]
    (assoc db :picture-display-index display-type)))

(rf/reg-event-fx
  :rotate-display
  (fn [_ _]
    (let [list  (rf/subscribe [:picture-display-list])
          index (rf/subscribe [:picture-display-index])
          len   (count @list)
          new-index (mod (inc @index) len)]
      ;;TODO can I call scroll-into-view on :focused-pic-path here?
      {:dispatch-n [[:set-display new-index]
                    ;;[:set-keys :pictures]
                    ]})))
