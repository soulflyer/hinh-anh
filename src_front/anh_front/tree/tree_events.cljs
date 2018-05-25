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
  :expand
  (fn [db [_ tree-name path]]
    (-> db
        (assoc tree-name (sp/setval
                           [(tree/path-nav path) :expanded]
                           true
                           (tree-name db))))))

(rf/reg-event-db
  :collapse
  (fn [db [_ tree-name path]]
    (-> db
        (assoc tree-name (sp/setval
                           [(tree/path-nav path) :expanded]
                           false
                           (tree-name db))))))

(rf/reg-event-db
  :save-selected
  (fn [db [_ tree-name path]]
    (-> db
        (assoc tree-name (sp/setval
                           [:focus]
                           path
                           (tree-name db))))))

(rf/reg-event-fx
  :up-and-close
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (tree/up-node (:focus (get db tree-name)))]
      {:dispatch-n [[:save-selected tree-name path]
                    [:collapse tree-name path]]})))

(rf/reg-event-fx
  :toggle-selected
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      {:dispatch [:toggle-expand tree-name path]})))

(rf/reg-event-fx
  :expand-selected
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      {:dispatch [:expand tree-name path]})))

(rf/reg-event-fx
  :collapse-selected
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      {:dispatch [:collapse tree-name path]})))

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
