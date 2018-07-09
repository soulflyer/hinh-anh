(ns anh-front.tree-events
  (:require [anh-front.tree :as tree]
            [com.rpl.specter :as sp]
            [re-frame.core :as rf]
            [day8.re-frame.tracing :refer [fn-traced]]))

(rf/reg-fx
  :scroll
  (fn [element]
    (let [dom-element (.getElementById js/document element)]
      (when dom-element
        (.scrollIntoViewIfNeeded dom-element false)))))

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
      {:dispatch [:expand tree-name path]
       :scroll (reduce str (interpose "-" path))})))

(rf/reg-event-fx
  :expand-path
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      ;;TODO make this more general. Only works for yr/mm/proj now.
      (println (str "*****" path))
      (println (str "*****" [(first path)]))
      (println (str "*****" [(first path) (first (rest path))]))
      {:dispatch-n [[:expand tree-name [(first path)]]
                    [:expand tree-name [(first path) (first (rest path))]]]
       ;;:db (assoc-in db [:project-tree :focus] path)
       })))

(rf/reg-event-fx
  :collapse-selected
  (fn [{:keys [db]} [_ tree-name]]
    (let [path (:focus (get db tree-name))]
      {:dispatch [:collapse tree-name path]})))

(rf/reg-event-fx
  :next-node
  (fn
    [{:keys [db]} [_ tree-name]]
    {:db (assoc db tree-name (sp/transform
                               [:focus]
                               #(tree/next-node (tree-name db) %)
                               (tree-name db)))
     ;; TODO This works but there is no guarantee that :focus won't already have changed.
     :scroll (reduce
               str
               (interpose
                 "-"
                 (tree/next-node
                   (tree-name db)
                   (get (tree-name db) :focus))))}))

(rf/reg-event-fx
  :prev-node
  (fn
    [{:keys [db]} [_ tree-name]]
    {:db (assoc db tree-name (sp/transform
                               [:focus]
                               #(tree/prev-node (tree-name db) %)
                               (tree-name db)))
     :scroll (reduce
               str
               (interpose
                 "-"
                 (tree/prev-node
                   (tree-name db)
                   (get (tree-name db) :focus))))}))
