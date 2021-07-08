(ns anh-front.subs.layout-preferences-subs
  (:require [re-frame.core :as rf]))

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
  :picture-border-width
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [prefs _]
    (:picture-border-width prefs)))

(rf/reg-sub
  :iptc-fields
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:iptc-fields preferences)))

(rf/reg-sub
  :show-empty-exif
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:show-empty-exif preferences)))
