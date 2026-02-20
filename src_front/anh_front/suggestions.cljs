(ns anh-front.suggestions
  (:require [re-frame.core :as rf]))

(defn keywords
  [s]
  (let [names (rf/subscribe [:keyword-list])]
    (into []
          (take 20
                (for [n @names :when (re-find (re-pattern (str "(?i)" s)) n)]
                  n)))))

(defn dive-centres
  []
  ["Sailing Club" "Alpha" "Soulfyer"])

(defn keyword-sets
  [s]
  (let [names (rf/subscribe [:keyword-set-names])]
    (into []
          (take 10
                (for [n @names :when (re-find (re-pattern (str "(?i)" s)) n)]
                  n)))))
