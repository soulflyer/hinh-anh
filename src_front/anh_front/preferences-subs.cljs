(ns anh-front.preferences-subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :preferences
  (fn [db _]
    (:preferences db)))

(rf/reg-sub
  :show-empty-exif
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:show-empty-exif preferences)))

(rf/reg-sub
  :medium-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [root _]
    (:medium-directory root)))

(rf/reg-sub
  :large-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:large-directory preferences)))

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
  :picture-border-focused
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border-focused prefs)))

(rf/reg-sub
  :picture-border-width
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border-width prefs)))

(rf/reg-sub
  :picture-selected-colour
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:picture-selected-colour preferences)))

(rf/reg-sub
  :footer-colour
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:footer-colour preferences)))

(rf/reg-sub
  :footer-background
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:footer-background preferences)))
