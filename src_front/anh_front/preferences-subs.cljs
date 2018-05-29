(ns anh-front.preferences-subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :preferences
  (fn [db _]
    (:preferences db)))

(rf/reg-sub
  :medium-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [root _]
    (:medium-directory root)))

(rf/reg-sub
  :picture-columns
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-columns prefs)))

(rf/reg-sub
  :picture-grid-gap
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-grid-gap prefs)))
