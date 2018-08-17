(ns anh-front.events
  (:require [akiroz.re-frame.storage :as store]
            [anh-front.db :as db]
            [re-frame.core :as rf]))

(def bogus "gotta define something or re-frame-jump-to-reg doesn't find the ns")

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

(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    (println "Initialize db")
    (if (:preferences (store/<-store :anh))
      (assoc db/default-db :preferences (:preferences (store/<-store :anh)))
      db/default-db)))

(rf/reg-event-db
  :set-error-message
  (fn  [db [_ message]]
    (assoc db :error message)))

(rf/reg-event-db
  :say-hello
  (fn
    [db [_ who]]
    ;;(js/alert (str "hello " who))
    (println (str "hello " who))
    db))

(rf/reg-event-db
  :print-sub
  (fn  [db [_ sub]]
    (let [sub-val (rf/subscribe [sub])]
      (println (str @sub-val)))
    db))
