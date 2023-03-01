(ns anh-front.events.api-events.open-api-events
  "Events used to open pictures in an external viewer"
  (:require [ajax.core                :as ajax]
            [day8.re-frame.http-fx    :as dont-delete-me-or-http-xhrio-will-go-away]
            [re-frame.core            :as rf]
            [cemerick.url             :as url]))

(rf/reg-event-fx
  :open-project
  (fn [_ [_ path]]
    (let [api-root (rf/subscribe [:api-root])]
      {:http-xhrio {:method :get
                    :cross-origin true
                    :uri             (str @api-root "/open/project/" path)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:set-error-message (str "Opened " path)]
                    :on-failure      [:load-fail (str "Open " path)]}})))

(rf/reg-event-fx
  :open-pictures
  (fn [_ _]
    (let [api-root      (rf/subscribe [:api-root])
          selected-pics (rf/subscribe [:selected-pics])
          pics          (url/url-encode (reduce str (interpose " " @selected-pics)))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/open/medium/" pics)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-sucess       [:set-error-message (str "Opened selected pics")]
                    :on-failure      [:load-fail (str "Open pictures")]}})))
