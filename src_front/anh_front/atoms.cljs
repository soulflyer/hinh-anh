(ns anh-front.atoms
  "re-com only accepts reagent/atom as the :showing? parameter of popover. Using the re-frame db would be neater but for now this is an acceptable, if untidy, workaround."
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

(def keyword-add-button-show          (reagent/atom false))
(def keyword-rename-button-show       (reagent/atom false))
(def keyword-move-button-show         (reagent/atom false))
(def keyword-merge-button-show        (reagent/atom false))
(def keyword-delete-button-show       (reagent/atom false))
(def keyword-purge-unused-button-show (reagent/atom false))
(def keyword-add-orphans-button-show  (reagent/atom false))
(def keyword-set-best-button-show     (reagent/atom false))

(rf/reg-event-db
  :toggle-button-show
  (fn [db [_ but]]
    (swap! but not)
    db))
