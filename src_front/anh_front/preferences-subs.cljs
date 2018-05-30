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

(rf/reg-sub
  :picture-text-colour
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-text-colour prefs)))

(rf/reg-sub
  :pictures-background
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:pictures-background prefs)))

(rf/reg-sub
  :picture-background
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-background prefs)))

(rf/reg-sub
  :picture-border
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border prefs)))

(rf/reg-sub
  :picture-border-selected
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border-selected prefs)))

(rf/reg-sub
  :picture-border-width
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border-width prefs)))

(rf/reg-sub
  :picture-selected-color
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:picture-selected-color preferences)))
