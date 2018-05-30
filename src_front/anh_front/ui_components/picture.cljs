(ns anh-front.picture
  (:require [anh-front.helpers :as helpers]
            [anh-front.styles  :as styles]
            [cljs.reader       :as reader]
            [clojure.string    :as string]
            [re-frame.core     :as rf]
            [re-com.core       :as rc]))

(defn panel [pic]
  (let [medium-path  (rf/subscribe [:medium-directory])
        focused-pic  (rf/subscribe [:focused-pic])
        border       (rf/subscribe [:picture-border])
        border-sel   (rf/subscribe [:picture-border-selected])
        border-width (rf/subscribe [:picture-border-width])
        version      (get pic "Version")
        year         (get pic "Year")
        month        (get pic "Month")
        project      (get pic "Project")
        id           (get pic "_id")
        path         (str  year "/" month "/" project "/" version)
        pic-path     (str @medium-path "/" path ".jpg")
        width        (reader/read-string (get pic "Image-Width"))
        height       (reader/read-string (get pic "Image-Height"))
        pic-width    (if (< height width)
                       "100%"
                       (str (int (* 100 (/ width height))) "%"))]
    ;;^{:key (get pic "_id")}
    [rc/box
     :attr {:id id
            :on-click #(rf/dispatch [:toggle-select-picture path])}
     :size "auto"
     :width "100vh"
     :style (if (= @focused-pic id)
              {:border (str @border-width" solid " @border-sel)}
              {:border (str @border-width" solid " @border)})
     :child [rc/v-box
             :class "image-container"
             ;;TODO check if pic is in selected and change background style here
             :style (if version (styles/picture))
             :size "auto"
             :children
             (if version
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
                  {:src pic-path
                   :style {:margin "auto"}
                   :width pic-width}]]
                [rc/scroller
                 :child
                 [:p (string/join ", " (get pic "Keywords"))]]])]]))
