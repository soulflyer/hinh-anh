(ns anh-front.preference-events
  (:require [anh-front.db  :as db]
            [re-frame.core :as rf]))

(rf/reg-event-db
  :set-api-root
  (fn  [db [_ api-root]]
    (assoc-in db [:preferences :api-root] api-root)))
