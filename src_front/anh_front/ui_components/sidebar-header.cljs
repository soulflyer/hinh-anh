(ns anh-front.sidebar-header
  (:require [re-com.core :as rc]))

(defn panel []
  [rc/box
   :class "sidebar-header-box"
   :child [:p "Sidebar Header"]])
