(ns anh-front.keywords
  (:require [re-frame.core :as rf]
            [re-com.core :as rc]
            [anh-front.tree :as tree]))

(defn panel []
  (let [tree-name :keyword-tree
        tree (rf/subscribe [tree-name])]
    [rc/box
     :child
     (tree/root
       (for [kw (get-in @tree [:children])]
         (tree/node @tree tree-name [(get kw :name)] :focused-keyword-pics)))]))
