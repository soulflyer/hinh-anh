(ns anh-front.footer
  (:require [re-com.core    :as rc]
            [re-frame.core  :as rf]
            [clojure.string :as string]
            [anh-front.styles :as styles]))

(defn panel []
  (let [current (rf/subscribe [:displayed-project])
        error-message (rf/subscribe [:error])
        path (string/join "/" @current)
        pics (rf/subscribe [:pictures])
        num        (count @pics)]
    [rc/h-box
     :justify :between
     :style (styles/footer)
     :children
     [[rc/box
       :class "footer-box"
       :child [:p {:style {:margin-left "6px"}} (str path " " num " pics")]]
      [rc/box
       :class "error-message"
       :child [:p {:style {:margin-right "6px"}} (str @error-message)]]]]))
