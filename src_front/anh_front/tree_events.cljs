(ns anh-front.tree-events
  (:require [anh-front.tree :as tree]
            [com.rpl.specter :as sp]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer [fn-traced]]))

(rf/reg-event-db
  :toggle-expand
  (fn [db [_ tree-name path]]
    (-> db
        (assoc tree-name (sp/transform
                           [(tree/path-nav path) :expanded]
                           not
                           (tree-name db))))))

(rf/reg-event-db
  :save-selected
  (fn [db [_ tree-name path]]
    (-> db
        (assoc tree-name (sp/setval
                           [:focus]
                           path
                           (tree-name db))))))

(rf/reg-event-db
  :open-selected
  (fn
    [db [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      (println path)
      (-> db
          (assoc tree-name (sp/transform
                             [(tree/path-nav path) :expanded]
                             not
                             (tree-name db)))))))

(rf/reg-event-db
  :next-node
  (fn
    [db [_ tree-name]]
    (-> db
        (assoc tree-name (sp/transform
                           [:focus]
                           #(tree/next-node (tree-name db) %)
                           (tree-name db))))))

(rf/reg-event-db
  :prev-node
  (fn
    [db [_ tree-name]]
    (-> db
        (assoc tree-name (sp/transform
                           [:focus]
                           #(tree/prev-node (tree-name db) %)
                           (tree-name db))))))
