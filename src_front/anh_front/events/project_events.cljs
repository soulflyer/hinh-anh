(ns anh-front.project-events
  (:require [anh-front.tree :as tree]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :fetch-pictures
  (fn [{:keys [db]} _]
    (println "Fetch pictures")
    (let [path (:focus (:project-tree db))]
      {:dispatch [:load-pictures-for-project path]})))

(rf/reg-event-fx
  :next-project-open
  (fn [{:keys [db]} _]
    (let [tr (:project-tree db)
          path (:focus tr)
          newpath (tree/next-node tr path)]
      {:dispatch-n [(when (= 3 (count newpath))
                      [:load-pictures-for-project newpath])
                    [:next-node :project-tree]]
       :dispatch-later [{:ms 200
                         :dispatch [:clear-focus]}]})))

(rf/reg-event-fx
  :prev-project-open
  (fn [{:keys [db]} _]
    (let [tr (:project-tree db)
          path (:focus tr)
          newpath (tree/prev-node tr path)]
      {:dispatch-n [(when (= 3 (count newpath))
                      [:load-pictures-for-project newpath])
                    [:prev-node :project-tree]]
       :dispatch-later [{:ms 200
                         :dispatch [:clear-focus]}]})))


(rf/reg-event-fx
  :go-to-project
  (fn [{:keys [db]} [_ path]]
    (println (str "######### " path))
    {:db (-> db
             (assoc-in [:project-tree :focus] path))
     :dispatch-n [[:set-left-panel :projects]
                  [:load-pictures-for-project path]
                  [:expand-path [:project-tree path]]]}))

(rf/reg-event-fx
  :go-to-saved-project
  (fn [{:keys [db]} _]
    (let [saved-project (rf/subscribe [:last-project])]
      {:dispatch [:go-to-project @saved-project]})))

(rf/reg-event-fx
  :open-last-visited-project
  (fn [{:keys [db]} _]
    ;; TODO this is only delayed because project_tree.cljs is returning the root level and
    ;; overwriting the :focus. Can be simplified when I get round to fixing that.
    {:dispatch-later [{:ms 500
                       :dispatch [:go-to-saved-project]}]}))

(rf/reg-event-fx
  :open-project-external
  (fn [{:keys [db]} _]
    (let [proj (rf/subscribe [:selected-project])
          path (reduce str (interpose "/" @proj))]
      {:dispatch [:open-project path]})))
