(ns anh-front.pictures-header
  (:require [re-com.core :as rc]))

(defn panel []
  [rc/box
   :class "pictures-header-box"
   :child [:p "Pictures Header"]])
