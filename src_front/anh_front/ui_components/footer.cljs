(ns anh-front.footer
  (:require [re-com.core :as rc]))

(defn panel []
  [rc/box
   :class "footer-box"
   :child [:p "Footer"]])
