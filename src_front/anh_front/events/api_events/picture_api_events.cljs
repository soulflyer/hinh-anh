(ns anh-front.picture-api-events
  (:require [ajax.core :as ajax]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

(rf/reg-event-fx
  :refresh-pictures
  (fn [{:keys [db]} _]
    (let [api-root       (rf/subscribe [:api-root])
          project-vector (rf/subscribe [:displayed-project])
          project-path   (reduce str (interpose "/" @project-vector))
          left-panel     (rf/subscribe [:displaying])
          kw-focus       (rf/subscribe [:keyword-focus])]
      {:dispatch (case @left-panel
                   :projects [:load-pictures-for-project @project-vector]
                   :keywords [:load-all-keyword-pics (last @kw-focus)]
                   [:say-hello "not refreshing pics"])})))
