(ns anh-front.events
  (:require [anh-front.db :as db]
            [re-frame.core :as rf]))

(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    db/default-db))

(rf/reg-event-db
  :say-hello
  (fn
    [db [_ who]]
    (js/alert (str "hello " who))
    db))
