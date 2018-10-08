(ns anh-front.key-events
  (:require [anh-front.keys :as ks]
            [re-frame.core :as rf]
            [re-pressed.core :as rp]))

(rf/reg-event-fx
  :set-keys
  (fn [{:keys [db]} [_ panel]]
    (let [key-rules ks/picture-keys]
      {:dispatch [::rp/set-keydown-rules (ks/key-rules panel)]})))

(rf/reg-event-fx
  :set-keys-for
  (fn [{:keys [db]} [_ panel]]
    (let [left-panel-display (rf/subscribe [:left-panel-display])
          keys               (case panel
                               :left @left-panel-display
                               :pictures :pictures)]
      (println (str "set-keys-for: " panel))
      {:dispatch [:set-keys keys]})))
