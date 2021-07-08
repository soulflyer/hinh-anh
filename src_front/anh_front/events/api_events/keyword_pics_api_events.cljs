(ns anh-front.events.api-events.keyword-pics-api-events
  "These are the events that load pictures for a given keyword. This could be the single best picture, all the pictures for the given keyword, or all the pictures for the given keyword and its sub-keywords."
  (:require [ajax.core :as ajax]
            [anh-front.helpers :as helpers]
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
          (assoc :displaying :keywords)
          (assoc :picture-list {:pictures (set resp)
                                :focus    (helpers/image-path (first resp))
                                :selected []})))))

(rf/reg-event-db
  :keyword-pic-response
  (fn  [db [_ response]]
    (let [reader (transit/reader :json)
          resp   (transit/read reader response)]
      (-> db
          (assoc :loading? false)
          (assoc :error "")
          (assoc :displaying :keywords)
          (assoc :picture-list {:pictures [resp]
                                :focus (helpers/image-path resp)
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
                       (assoc :error (str "Loading all pics for keyword " kw)))})))

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
                       (assoc :error (str "Loading pics for keyword " kw)))})))

(rf/reg-event-fx
  :load-best-picture
  (fn [{:keys [db]} [_ kw]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio
       {:method          :get
        :cross-origin    true
        :uri             (str @api-root "/keywords/" kw "/best/map")
        :format          (ajax/json-request-format)
        :response-format (ajax/json-response-format {:keywords? true})
        :on-success      [:keyword-pic-response]
        :on-failure      [:load-fail "best keyword"]}
       :db (-> db
               (assoc :loading? true)
               ;; This seems to be clearing anyway, not sure where...
               (assoc :picture-lists {:pictures []
                                      :focus ""
                                      :selected []})
               (assoc :error (str "Loading best picture for " kw)))})))
