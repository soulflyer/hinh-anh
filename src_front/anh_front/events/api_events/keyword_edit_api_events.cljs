(ns anh-front.keyword-edit-api-events
  (:require [ajax.core     :as ajax]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :delete-focused-keyword
  (fn [{:keys [db]} [_ response]]
    (let [api-root (rf/subscribe [:api-root])
          kw       (rf/subscribe [:keyword-focus])]
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
            (assoc :error (str "Deleting keyword " (last @kw))))})))

(rf/reg-event-fx
  :add-to-focused-keyword
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])
          focus    (rf/subscribe [:keyword-focus])
          parent   (last @focus)]
      (println (str "%%%%%%%%%%" parent "-" kw))
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
            (assoc :error (str "Added " kw " to " parent)))})))

(rf/reg-event-fx
  :add-missing-keywords
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/add/missing/")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "add-missing-keywords"]}})))

(rf/reg-event-fx
  :delete-unused-keywords
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/delete/unused/")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:simple-response]
        :on-failure      [:load-fail "delete-unused-keywords"]}})))
