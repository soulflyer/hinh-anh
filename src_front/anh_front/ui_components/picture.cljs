(ns anh-front.picture
  (:require [anh-front.helpers :as helpers]
            [anh-front.styles  :as styles]
            [cljs.reader       :as reader]
            [clojure.string    :as string]
            [re-frame.core     :as rf]
            [re-com.core       :as rc]))

(defn panel [pic]
  (let [large-path    (rf/subscribe [:large-directory])
        fullsize-path (rf/subscribe [:fullsize-directory])
        view-fullsize (rf/subscribe [:view-fullsize])
        focused-pic   (rf/subscribe [:focused-pic-path])
        border        (rf/subscribe [:picture-border])
        border-sel    (rf/subscribe [:picture-border-focused])
        border-un     (rf/subscribe [:picture-border-unfocused])
        border-width  (rf/subscribe [:picture-border-width])
        pic-bg        (rf/subscribe [:picture-background])
        selected      (rf/subscribe [:selected-pics])
        pic-sel-col   (rf/subscribe [:picture-selected-colour])
        panel-focus   (rf/subscribe [:panel-focus])
        focused       (= :pictures @panel-focus)
        version       (get pic "Version")
        id            (get pic "_id")
        path          (when pic (helpers/image-path pic))
        pic-path      (str (if @view-fullsize
                             @fullsize-path
                             @large-path)
                           "/" path ".jpg")
        width         (reader/read-string (get pic "Image-Width"))
        height        (reader/read-string (get pic "Image-Height"))
        pic-width     (if (< height width)
                        "100%"
                        (str (int (* 100 (/ width height))) "%"))]
    ;;^{:key (get pic "_id")}
    [rc/box
     :attr {:id       path
            :on-click #(rf/dispatch [:toggle-select-and-focus path])}
     :size "auto"
     :width "100%"
     :style (if (= @focused-pic path)
              (if (= :pictures @panel-focus)
                {:border (str @border-width " solid " @border-sel)}
                {:border (str @border-width " solid " @border-un)})
              {:border (str @border-width " solid " @border)})
     :child [rc/v-box
             :class "image-container"
             :style (when version
                      (if (some #(= % path) @selected)
                        {:background @pic-sel-col}
                        {:background @pic-bg}))
             :size "auto"
             :children
             (when version
               [[rc/h-box
                 :justify :between
                 :children
                 [[rc/box
                   :child [:p version]]
                  [rc/box
                   :child [:p {:style {:color "#807020"}}
                           (helpers/stars (get pic "Rating"))]]]]
                [rc/box
                 :child
                 [:img
                  {:src   pic-path
                   :style {:margin "auto"}
                   :width pic-width}]]
                [rc/scroller
                 :child
                 [:p (string/join ", " (get pic "Keywords"))]]])]]))
