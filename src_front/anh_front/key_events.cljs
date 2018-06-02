(ns anh-front.key-events
  (:require [anh-front.keys :as ks]
            [re-frame.core :as rf]
            [re-pressed.core :as rp]))

(rf/reg-event-fx
  :set-project-keys
  (fn [{:keys [db]} _]
    (let [a 1]
      {:dispatch [::rp/set-keydown-rules ks/project-keys]})))

(rf/reg-event-fx
  :set-picture-keys
  (fn [{:keys [db]} _]
    (let [a 1]
      {:dispatch [::rp/set-keydown-rules ks/picture-keys]})))


(rf/reg-event-fx
  :set-keys
  (fn [{:keys [db]} _]
    (let [index (rf/subscribe [:picture-display-index])
          list  (rf/subscribe [:picture-display-list])
          select (nth @list @index)]
      (println (str "select: " select))
      {:dispatch [:TODO]})))
