(ns anh.core
  (:require
    [cljs.nodejs :as nodejs]))


(def path (nodejs/require "path"))
(def Electron (nodejs/require "electron"))
(def BrowserWindow (.-BrowserWindow Electron))
(def crash-reporter (.-crashReporter Electron))
(def Os (nodejs/require "os"))
(def *win* (atom nil))
(def app (.-app Electron))


(defn -main
  []
  (.start crash-reporter (clj->js {:companyName "Soulflyer"
                                   :submitURL   "https://github.com/soulflyer/hinh-anh"}))

  ;; error listener
  (.on nodejs/process "error"
       (fn [err] (.log js/console err)))

  ;; window all closed listener
  (.on app "window-all-closed"
       (fn []
         (if (not= (.-platform nodejs/process) "darwin")
           (.quit app))))

  ;; ready listener
  (.on app "ready"
       (fn []
         ;; TODO check if autoHideMenuBar does anything. I think setMenuBarVisibility is what removes the menu
         (reset! *win* (BrowserWindow. (clj->js {:width 1200 :height 800 :autoHideMenuBar true})))

         ;; when no optimize comment out
         (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../index.html")))
         ;; when no optimize uncomment
         ;; (.loadURL @*win* (str "file://" (.resolve path (js* "__dirname") "../../../index.html")))
         ;; (.setMenu @*win* "null")
         (.setMenuBarVisibility @*win* "false")
         (.on @*win* "closed" (fn [] (reset! *win* nil))))))


(nodejs/enable-util-print!)


;; "Linux" or "Darwin" or "Windows_NT"
(.log js/console (str "Start anh on " (.type Os) "."))

(set! *main-cli-fn* -main)
