(ns anh-front.events.api-events.picture-api-events
  (:require [ajax.core :as ajax]
            [cognitect.transit :as transit]
            [re-frame.core :as rf]))

;;TODO this isn't really an api event, move it elsewhere?
(rf/reg-event-fx
  :refresh-pictures
  (fn [{:keys [db]} _]
    (let [project-vector (rf/subscribe [:displayed-project])
          left-panel     (rf/subscribe [:displaying])
          kw-focus       (rf/subscribe [:keyword-focus])]
      {:dispatch (case @left-panel
                   :projects [:load-pictures-for-project @project-vector]
                   :keywords [:load-all-keyword-pics (last @kw-focus)]
                   [:say-hello "not refreshing pics"])})))
