(ns anh-front.ui-components.header
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]))

(defn title
  []
  (let [name (rf/subscribe [:name])]
    [:p (str @name " main header")]))

(defn panel
  []
  [rc/box
   :class "header-box"
   :child [title]])
