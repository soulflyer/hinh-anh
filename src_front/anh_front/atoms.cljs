(ns anh-front.atoms
  "re-com only accepts reagent/atom as the :showing? parameter of popover. Using the re-frame db would be neater but for now this is an acceptable, if untidy, workaround."
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

(def keyword-add-button-show    (reagent/atom false))
(def keyword-rename-button-show (reagent/atom false))
(def keyword-move-button-show   (reagent/atom false))
(def keyword-merge-button-show  (reagent/atom false))

(rf/reg-event-db
  :toggle-keyword-add-button-show
  (fn [db _]
    (swap! keyword-add-button-show not)
    db))

(rf/reg-event-db
  :toggle-keyword-rename-button-show
  (fn [db _]
    (swap! keyword-rename-button-show not)
    db))

(rf/reg-event-db
  :toggle-keyword-move-button-show
  (fn [db _]
    (swap! keyword-move-button-show not)
    db))

(rf/reg-event-db
  :toggle-keyword-merge-button-show
  (fn [db _]
    (swap! keyword-merge-button-show not)
    db))
