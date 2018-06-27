(ns anh-front.keywording-keys
  (:require [anh-front.key-codes :refer [key-codes]]
            [re-frame.core       :as rf]
            [clojure.set         :as set]))

(defn keywording-keys []
  (let [keyword-shortcuts (rf/subscribe [:keyword-map])
        keyword-set       (rf/subscribe [:keyword-set])
        keyword-index-map (zipmap @keyword-set (iterate inc 0))]
    (reduce into (for [kw @keyword-set]
                   [[[:add-keyword-to-photos kw]
                     [{:which (key-codes (get @keyword-shortcuts kw))
                       :shiftKey false}]]
                    [[:delete-keyword-from-photos kw]
                     [{:which (key-codes (get @keyword-shortcuts kw))
                       :shiftKey true}]]]))))
