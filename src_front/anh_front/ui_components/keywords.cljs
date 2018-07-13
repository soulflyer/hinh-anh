(ns anh-front.keywords
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]))

(defn panel []
  (let [tree-name :keywords
        tree (rf/subscribe [tree-name])]
    [:p "keywords"]))
