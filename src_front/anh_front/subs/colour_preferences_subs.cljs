(ns anh-front.colour-preferences-subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :colour-preferences
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:colours preferences)))

(rf/reg-sub
  :picture-text-colour
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:picture-text-colour prefs)))

(rf/reg-sub
  :pictures-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:pictures-background prefs)))

(rf/reg-sub
  :picture-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:picture-background prefs)))

(rf/reg-sub
  :picture-border
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:picture-border prefs)))

(rf/reg-sub
  :picture-border-focused
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:picture-border-focused prefs)))

(rf/reg-sub
  :picture-border-unfocused
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [prefs _]
    (:picture-border-unfocused prefs)))

(rf/reg-sub
  :picture-selected-colour
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:picture-selected-colour preferences)))

(rf/reg-sub
  :footer-colour
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:footer-colour preferences)))

(rf/reg-sub
  :footer-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:footer-background preferences)))

(rf/reg-sub
  :project-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:project-background preferences)))

(rf/reg-sub
  :details-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:details-background preferences)))

(rf/reg-sub
  :details-textbox-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:details-textbox-background preferences)))

(rf/reg-sub
  :details-header-background
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:details-header-background preferences)))

(rf/reg-sub
  :shortcut-highlight
  (fn [_ _]
    (rf/subscribe [:colour-preferences]))
  (fn [preferences _]
    (:shortcut-highlight preferences)))
