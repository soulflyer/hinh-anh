(ns anh-front.events
  (:require [anh-front.db :as db]
            [re-frame.core :as rf]
            [anh-front.tree :as tree]
            [clojure.set :as set]))

(def bogus "gotta define something or re-frame-jump-to-reg doesn't find the ns")

(rf/reg-fx
  :scroll-into-view
  (fn [element]
    (.scrollIntoViewIfNeeded (.getElementById js/document element) false)))

(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    db/default-db))

(rf/reg-event-db
  :set-error-message
  (fn  [db [_ message]]
    (assoc db :error message)))

(rf/reg-event-fx
  :next-panel
  (fn [{:keys [db]} _]
    (let [focus-map  (rf/subscribe [:panel-focus-map])
          focus      (rf/subscribe [:panel-focus])
          invert-map (set/map-invert @focus-map)
          focus-num  (invert-map @focus)
          new-panel  (get @focus-map
                          (mod (inc focus-num)
                               (count @focus-map)))]
      {:db (assoc db :panel-focus new-panel)
       :dispatch [:set-keys new-panel]})))

(rf/reg-event-db
  :set-display
  (fn [db [_ display-type]]
    (assoc db :picture-display-index display-type)))

(rf/reg-event-fx
  :rotate-display
  (fn [{:keys [db]} _]
    (let [list  (rf/subscribe [:picture-display-list])
          index (rf/subscribe [:picture-display-index])
          len   (count @list)
          new-index (mod (inc @index) len)]
      {:dispatch-n [[:set-display new-index]
                    [:set-keys :pictures]]})))

(rf/reg-event-fx
  :fetch-pictures
  (fn [{:keys [db]} _]
    (let [path (:focus (:project-tree db))]
      {:dispatch [:request-pictures path]})))

(rf/reg-event-fx
  :next-project-open
  (fn [{:keys [db]} _]
    (let [tr (:project-tree db)
          path (:focus tr)
          newpath (tree/next-node tr path)]
      {:dispatch-n [(if (= 3 (count newpath))
                      [:request-pictures newpath])
                    [:next-node :project-tree path]]})))

(rf/reg-event-fx
  :prev-project-open
  (fn [{:keys [db]} _]
    (let [tr (:project-tree db)
          path (:focus tr)
          newpath (tree/prev-node tr path)]
      {:dispatch-n [(if (= 3 (count newpath))
                      [:request-pictures newpath])
                    [:prev-node :project-tree path]]})))

(rf/reg-event-fx
  :open-project-external
  (fn [{:keys [db]} _]
    (let [proj (rf/subscribe [:selected-project])
          path (reduce str (interpose "/" @proj))]
      {:dispatch [:open-project path]})))

(rf/reg-event-db
  :say-hello
  (fn
    [db [_ who]]
    (js/alert (str "hello " who))
    db))
