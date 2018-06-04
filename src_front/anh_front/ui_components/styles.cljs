(ns anh-front.styles
  (:require [re-frame.core :as rf]))
;; TODO Pull the colours from preference subscrptions
(defn pictures []
  (let [text-colour (rf/subscribe [:picture-text-colour])
        background  (rf/subscribe [:pictures-background])]
    {:color @text-colour
     :background @background
     :padding "0px 10px"}))

(defn picture []
  (let [background (rf/subscribe [:picture-background])]
    {:background @background}))

(defn main []
  {:margin "0px"})

(defn footer []
  (let [bg (rf/subscribe [:footer-background])
        fg (rf/subscribe [:footer-colour])]
    {:background @bg
     :color @fg}))
