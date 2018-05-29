(ns anh-front.footer
  (:require [re-com.core    :as rc]
            [re-frame.core  :as rf]
            [clojure.string :as string]))

(defn panel []
  (let [current (rf/subscribe [:displayed-project])
        path (string/join "/" @current)
        pics (rf/subscribe [:pictures])
        num        (count @pics)]
    [rc/box
     :class "footer-box"
     :child [:p (str path " " num " pics")]]))
