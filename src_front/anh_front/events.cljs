(ns anh-front.events
  (:require [anh-front.db   :as db]
            [anh-front.tree :as tree]
            [clojure.set    :as set]
            [re-frame.core  :as rf]))

(def bogus "gotta define something or re-frame-jump-to-reg doesn't find the ns")

(rf/reg-fx
  :scroll-into-view
  (fn [element]
    (let [dom-element (.getElementById js/document element)]
      (when dom-element
        (.scrollIntoViewIfNeeded dom-element false)))))

(rf/reg-fx
  :set-html-focus
  (fn [element]
    (let [dom-element (.getElementById js/document element)]
      (when dom-element
        (.focus dom-element)))))

(rf/reg-event-fx
  :set-html-focus
  (fn [{:keys [db]} [_ panel]]
    {:set-html-focus panel}))


(rf/reg-event-db
  ::initialize-db
  (fn  [_ _]
    db/default-db))

(rf/reg-event-db
  :set-error-message
  (fn  [db [_ message]]
    (assoc db :error message)))

(rf/reg-event-db
  :hide-footer
  (fn  [db _]
    (assoc-in db [:preferences :hide-footer] true)))

(rf/reg-event-fx
  :toggle-footer
  (fn [{:keys [db]} _]
    (let [hf (rf/subscribe [:hide-footer])]
      {:db (assoc-in db [:preferences :hide-footer] (not @hf))})))

;;TODO write a set-panel event :next-panel can use it.
(rf/reg-event-fx
  :set-panel-focus
  (fn [{:keys [db]} [_ new-panel]]
    (let [a 1]
      (println (str "setting focus " new-panel))
      {:db (assoc db :panel-focus new-panel)
       :dispatch [:set-keys-for new-panel]}
      )))

(rf/reg-event-fx
  :next-panel
  (fn [{:keys [db]} _]
    (let [left-panel-display (rf/subscribe [:left-panel-display])
          focus-map  (rf/subscribe [:panel-focus-map])
          focus      (rf/subscribe [:panel-focus])
          invert-map (set/map-invert @focus-map)
          focus-num  (invert-map @focus)
          new-panel  (get @focus-map
                          (mod (inc focus-num)
                               (count @focus-map)))
          keys       (case new-panel
                       :left @left-panel-display
                       :pictures :pictures)
          ;;TODO Clean this up
          html-focus (case keys
                       :pictures "panel-2"
                       :details  "panel-1"
                       :projects "panel-1")]
      (println (str "new-panel " new-panel))
      (println (str "keys " keys))
      (println (str "Focus " html-focus))
      {:db (assoc db :panel-focus new-panel)
       :dispatch [:set-keys-for new-panel]
       :set-html-focus html-focus})))

(rf/reg-event-fx
  :set-left-panel
  (fn [{:keys [db]} [_ new-panel]]
    {:db (assoc db :left-panel-display new-panel )}))

(rf/reg-event-fx
  :rotate-left-panel
  (fn [{:keys [db]} _]
    (let [left-panel-map (rf/subscribe [:left-panel-map])
          left-display   (rf/subscribe [:left-panel-display])
          panel-focus    (rf/subscribe [:panel-focus])
          invert-map     (set/map-invert @left-panel-map)
          focus-num      (invert-map @left-display)
          new-panel      (get @left-panel-map
                              (mod (inc focus-num)
                                   (count @left-panel-map)))]
      {:dispatch-n [[:set-left-panel new-panel]
                    (if (= :left @panel-focus)
                      [:set-keys new-panel])]})))

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
      ;;TODO can I call scroll-into-view on :focused-pic-path here?
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
    ;;(js/alert (str "hello " who))
    (println (str "hello " who))
    db))
