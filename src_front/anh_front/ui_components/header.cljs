(ns anh-front.ui-components.header
  (:require [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn title []
  (let [name (rf/subscribe [:name])]
    [:p (str @name " main header")]))

(defn panel []
  [rc/box
   :class "header-box"
   :child [title]])
