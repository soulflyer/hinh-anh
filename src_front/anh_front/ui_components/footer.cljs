(ns anh-front.footer
  (:require [re-com.core    :as rc]
            [re-frame.core  :as rf]
            [clojure.string :as string]))

(defn panel []
  (let [current (rf/subscribe [:selected-project])
        path (string/join "/" @current)]
    [rc/box
     :class "footer-box"
     :child [:p path]]))
