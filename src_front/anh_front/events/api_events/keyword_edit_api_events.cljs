(ns anh-front.keyword-edit-api-events
  "The events used to edit the keyword tree."
  (:require [ajax.core     :as ajax]
            [cemerick.url  :as url]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :set-sample
  (fn [{:keys [db]} [_ response]]
    (let [api-root (rf/subscribe [:api-root])
          kw       (last @(rf/subscribe [:keyword-focus]))
          pics     (rf/subscribe [:selected-pics])
          pic      (url/url-encode (first @pics))]
      (println (str "%%%%%%%%%% set " pic " as best for " kw))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/" kw "/sample/" pic)
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "set-sample"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Setting " pic " as best for " kw)))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :delete-focused-keyword
  (fn [{:keys [db]} [_ response]]
    (let [api-root (rf/subscribe [:api-root])
          kw       (rf/subscribe [:keyword-focus])]
      (println (str "%%%%%%%%%%  delete " kw))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/delete/" (last @kw))
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "delete-focused-keyword"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Deleting keyword " (last @kw))))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :add-to-focused-keyword
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])
          focus    (rf/subscribe [:keyword-focus])
          parent   (or (last @focus) "Root")]
      (println (str "%%%%%%%%%% add " kw " to " parent))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/add/" parent "/" kw)
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "{add-to-focused-keyword}"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Added " kw " to " parent)))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :move-focused-keyword
  (fn [{:keys [db]} [_ new-parent]]
    (let [api-root   (rf/subscribe [:api-root])
          focus      (rf/subscribe [:keyword-focus])
          depth      (count @focus)
          old-parent (if (= 1 depth)
                       "Root"
                       (nth @focus (- depth 2)))
          kw         (last @focus)]
      (println (str "%%%%%%%%%% move " kw " to " new-parent))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/move/" kw "/" old-parent "/" new-parent )
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "move-focused-keyword"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Moved " kw " to " new-parent )))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :rename-focused-keyword
  (fn [{:keys [db]} [_ new-name]]
    (let [api-root   (rf/subscribe [:api-root])
          focus      (rf/subscribe [:keyword-focus])
          depth      (count @focus)
          kw         (last @focus)]
      (println (str "%%%%%%%%%% rename " kw " to " new-name))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/rename/" kw "/" new-name )
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "rename-focused-keyword"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Renamed " kw " to " new-name )))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :merge-focused-keyword
  (fn [{:keys [db]} [_ merge-with]]
    (let [api-root   (rf/subscribe [:api-root])
          focus      (rf/subscribe [:keyword-focus])
          depth      (count @focus)
          kw         (last @focus)]
      (println (str "%%%%%%%%%% merge " kw " with " merge-with))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/merge/" kw "/" merge-with )
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:say-hello (str kw "-" merge-with)]
        :on-failure      [:load-fail "merge-focused-keyword"]}
       :db ( -> db
            (assoc :loading? true)
            (assoc :error (str "Merged " kw " with " merge-with)))
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :add-missing-keywords
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      (println (str "%%%%%%%%%% add-missing keywords"))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/add/missing/")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "add-missing-keywords"]}
       :dispatch [:close-popovers]})))

(rf/reg-event-fx
  :delete-unused-keywords
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      (println (str "%%%%%%%%%% delete unused keywords"))
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/delete/unused/")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "delete-unused-keywords"]}
       :dispatch [:close-popovers]})))
