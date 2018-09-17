(ns anh-front.write-api-events
  (:require [ajax.core     :as ajax]
            [cemerick.url  :as url]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :write-json-response
  (fn [_ [_ filename]]
    {:dispatch-n [[:set-error-message (str "Wrote JSON to " filename)]
                  [:close-popovers]]}))

(rf/reg-event-fx
  :write-json
  (fn [{:keys [db]} [_ filename]]
    (let [api-root   (rf/subscribe [:api-root])
          divecentre (rf/subscribe [:dive-centre])
          selection  (rf/subscribe [:selected-jpegs])
          pics       (url/url-encode (reduce str (interpose " " @selection)))]
      {:http-xhrio {:method          :get
                    :cross-origin    true
                    :uri             (str @api-root "/build/json/" @divecentre "/" filename "/" pics)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:write-json-response filename]
                    :on-failure      [:load-fail (str "Write JSON to " filename)]}})))
