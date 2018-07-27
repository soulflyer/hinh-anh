(ns anh-front.keyword-api-events
  (:require [ajax.core :as ajax]
            [anh-front.helpers :as helpers]
            [anh-front.keyword-tree :as keyword-tree]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-db
  :keyword-pics-response
  (fn  [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :loading? false)
          (assoc :error "")
          (assoc :picture-list {:pictures resp
                                :focus    (helpers/image-path (first resp))
                                :selected []})))))

(rf/reg-event-fx
  :load-all-keyword-pics
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/photos/keyword/all/" kw)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:keyword-pics-response]
                    :on-failure      [:load-fail "keyword-all-pics"]}
       :db         (-> db
                       (assoc :loading? true)
                       (assoc :error "Loading all pics for keyword " kw))})))

(rf/reg-event-fx
  :load-keyword-pics
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/photos/keyword/" kw)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:keyword-pics-response]
                    :on-failure      [:load-fail "keyword-pics"]}
       :db         (-> db
                       (assoc :loading? true)
                       (assoc :error "Loading pics for keyword " kw))})))

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
