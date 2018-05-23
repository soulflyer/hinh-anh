(ns anh-front.picture
  (:require [re-com.core :as rc]))

(defn panel [pic]
  [rc/box
   :size "auto"
   :width "100vh"
   :child [:p (get pic "Version")]])
