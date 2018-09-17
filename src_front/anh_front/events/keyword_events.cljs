(ns anh-front.keyword-events
  (:require [anh-front.tree :as tree]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :next-keyword-open
  (fn [{:keys [db]} _]
    (let [tr (:keyword-tree db)
          path (if (< 0 (count (:focus tr)))
                 (:focus tr)
                 ["Root"])
          newpath (tree/next-node tr path)]
      {:db         (assoc db :keyword-pic-display-all false)
       :dispatch-n [[:load-best-picture (last newpath)]
                    [:next-node :keyword-tree]]})))

(rf/reg-event-fx
  :prev-keyword-open
  (fn [{:keys [db]} _]
    (let [tr (:keyword-tree db)
          path (if (< 0 (count (:focus tr)))
                 (:focus tr)
                 ["Root"])
          newpath (tree/prev-node tr path)]
      {:db         (assoc db :keyword-pic-display-all false)
       :dispatch-n [[:load-best-picture (last newpath)]
                    [:prev-node :keyword-tree]]})))

(rf/reg-event-fx
  :keyword-pics
  (fn [{:keys [db]} [_ kw]]
    (let [all (rf/subscribe [:keyword-pic-display-all])
          sub (rf/subscribe [:keyword-pic-display-sub])]
      {:dispatch (if @all
                   [:load-all-keyword-pics kw]
                   [:load-best-picture kw])})))

(rf/reg-event-fx
  :focused-keyword-pics
  (fn [{:keys [db]} _]
    (let [kw (rf/subscribe [:keyword-focus])]
      {:dispatch [:keyword-pics (last @kw)]})))

(rf/reg-event-fx
  :toggle-keyword-pic-display
  (fn [{:keys [db]} _]
    (let [disp  (rf/subscribe [:keyword-pic-display-all])
          focus (rf/subscribe [:keyword-focus])]
      {:db       (assoc db :keyword-pic-display-all (not @disp))
       :dispatch [:keyword-pics (last @focus)]})))

(rf/reg-event-fx
  :toggle-keyword-sub-display
  (fn [{:keys [db]} _]
    (let [disp  (rf/subscribe [:keyword-pic-display-sub])
          focus (rf/subscribe [:keyword-focus])]
      {:db       (assoc db :keyword-pic-display-sub (not @disp))
       :dispatch [:keyword-pics (last @focus)]})))

;; Not used but should it be?
(rf/reg-event-db
  :set-keyword-pic-display-all
  (fn [db [_ x]]
    (assoc db :keyword-pic-display-all x)))
