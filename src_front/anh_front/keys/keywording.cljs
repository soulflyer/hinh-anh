(ns anh-front.keys.keywording
  (:require [anh-front.keys.key-codes :refer [key-codes]]
            [re-frame.core            :as rf]))

(defn generate-keywording-shortcut-keys
  []
  (let [keyword-shortcuts @(rf/subscribe [:keyword-map])
        keyword-set       @(rf/subscribe [:keyword-set])]
    (reduce into (for [kw keyword-set]
                   [[[:add-keyword-to-photos kw]
                     [{:keyCode (key-codes (get keyword-shortcuts kw))
                       :shiftKey false}]]
                    [[:delete-keyword-from-photos kw]
                     [{:keyCode (key-codes (get keyword-shortcuts kw))
                       :shiftKey true}]]]))))

(defn generate-keywording-set-shortcut-keys
  []
  (let [shortcuts @(rf/subscribe [:keyword-sets-map])
        kw-sets   (keys shortcuts)]
    (vec (for [kw-set kw-sets]
           [[:set-keyword-set-by-name kw-set]
            [{:keyCode (key-codes (get shortcuts kw-set))}]]))))

(comment
  @(rf/subscribe [:keyword-map])
  (generate-keywording-shortcut-keys)
  (generate-keywording-set-shortcut-keys)
  )
