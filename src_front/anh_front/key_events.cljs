(ns anh-front.key-events
  (:require [anh-front.keys :as ks]
            [re-frame.core :as rf]
            [re-pressed.core :as rp]))

;; (rf/reg-event-fx
;;   :set-project-keys
;;   (fn [{:keys [db]} _]
;;     {:dispatch-n [[::rp/set-keydown-rules (ks/key-rules :project)]
;;                   [:set-display 0]]}))

;; (rf/reg-event-fx
;;   :set-picture-keys
;;   (fn [{:keys [db]} _]
;;     {:dispatch [::rp/set-keydown-rules (ks/key-rules :pictures)]}))

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
      {:dispatch [:set-keys keys]})))
