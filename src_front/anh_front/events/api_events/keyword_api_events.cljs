(ns anh-front.events.api-events.keyword-api-events
  "The events used to load the tree of keywords"
  (:require [ajax.core :as ajax]
            [anh-front.keyword-tree :as keyword-tree]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-db
  :keywords-response
  (fn [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :keyword-loading? false)
          (assoc :error "Keywords loaded")
          (assoc :keyword-tree (keyword-tree/tree-data resp))))))

(rf/reg-event-fx
  :load-keyword-tree
  (fn [{:keys [db]} _]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/keywords/map/")
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:keywords-response]
                    :on-failure      [:load-fail "keywords"]}
       :db         (-> db
                       (assoc :keyword-loading? true)
                       (assoc :error "Loading keywords..."))})))

(rf/reg-event-db
  :keyword-list-response
  (fn [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :keyword-list resp)
          (assoc :loading? false)
          (assoc :error "Loaded keyword list for autocomplete.")))))

(rf/reg-event-fx
  :load-keyword-list
  (fn [{:keys [db]} [_ response]]
    ;; TODO don't think response is necessary here.
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/all/")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:keyword-list-response]
        :on-failure      [:load-fail "load-keyword-list"]}
       :db (-> db
               (assoc :loading? true)
               (assoc :error "Loading keyword list for autocomplete."))})))

(rf/reg-event-fx
  :open-keyword-response
  (fn [{:keys [db]} [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      {:db (-> db
               (assoc :loading? false)
               (assoc :error "Opened keyword ")
               (assoc-in [:keyword-tree :focus] resp))
       :dispatch-n [[:keyword-pics (last resp)]
                    [:expand-path [:keyword-tree resp]]]})))

(rf/reg-event-fx
  :open-keyword
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/" kw "/path")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:open-keyword-response]
        :on-failure      [:load-fail "open-keyword"]}
       :db (-> db
               (assoc :loading? true)
               (assoc :error (str "Opened keyword " kw)))
       :dispatch [:close-popovers]})))
