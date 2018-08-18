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
      {:dispatch-n [[:load-best-picture (last newpath)]
                    [:next-node :keyword-tree]]})))

(rf/reg-event-fx
  :prev-keyword-open
  (fn [{:keys [db]} _]
    (let [tr (:keyword-tree db)
          path (if (< 0 (count (:focus tr)))
                 (:focus tr)
                 ["Root"])
          newpath (tree/prev-node tr path)]
      {:dispatch-n [[:load-best-picture (last newpath)]
                    [:prev-node :keyword-tree]]})))

(rf/reg-event-fx
  :keyword-all-pics
  (fn [{:keys [db]} _]
    (let [kw (rf/subscribe [:keyword-focus])]
      {:dispatch [:load-all-keyword-pics (last @kw)]})))


(rf/reg-event-fx
  :keyword-pics
  (fn [{:keys [db]} [_ kw]]
    (let [all (rf/subscribe [:keyword-pic-display-all])]
      {:dispatch (if @all
                   [:load-keyword-pics kw]
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

(rf/reg-event-db
  :set-keyword-pic-display-all
  (fn [db [_ x]]
    (assoc db :keyword-pic-display-all x)))
