(ns anh-front.events.events
  (:require [akiroz.re-frame.storage :as store]
            [anh-front.db :as db]
            [re-frame.core :as rf]))

(rf/reg-fx
  :set-html-focus
  (fn [element]
    (let [dom-element (.getElementById js/document element)]
      (when dom-element
        (.focus dom-element)))))

(rf/reg-event-fx
  :set-html-focus
  (fn [{:keys [db]} [_ panel]]
    {:set-html-focus panel}))

(store/reg-co-fx! :anh
                  {:fx   :store
                   :cofx :store})

(rf/reg-event-fx
  :store-preferences
  [(rf/inject-cofx :store)]
  (let [prefs (rf/subscribe [:preferences])]
    (fn [{:keys [store db]} _]
      {:store (assoc store :preferences @prefs)})))

(rf/reg-event-fx
  :load-preferences
  [(rf/inject-cofx :store)]
  (fn [{:keys [db store]} _]
    {:db (assoc db :preferences (:preferences store))}))

(rf/reg-event-db
  ::initialize-db
  (fn [_ _]
    (println "Initialize db")
    (if (:preferences (store/<-store :anh))
      (assoc db/default-db :preferences (:preferences (store/<-store :anh)))
      db/default-db)))

(rf/reg-event-db
  :set-error-message
  (fn [db [_ message]]
    (assoc db :error message)))

(rf/reg-event-db
  :say-hello
  (fn [db [_ who]]
    ;; (js/alert (str "hello " who))
    (println (str "hello " who))
    db))

(rf/reg-event-db
  :print-sub
  (fn [db [_ sub]]
    (let [sub-val (rf/subscribe [sub])]
      (println (str @sub-val)))
    db))
