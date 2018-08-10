(ns anh-front.keyword-api-events
  "The events used to load the tree of keywords"
  (:require [ajax.core :as ajax]
            [anh-front.keyword-tree :as keyword-tree]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-db
  :keywords-response
  (fn  [db [_ response]]
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
