(ns anh-front.picture
  (:require [anh-front.helpers :as helpers]
            [anh-front.styles  :as styles]
            [cljs.reader       :as reader]
            [clojure.string    :as string]
            [re-frame.core     :as rf]
            [re-com.core       :as rc]))

(defn panel [pic]
  (let [medium-path (rf/subscribe [:medium-directory])
        version (get pic "Version")
        year (get pic "Year")
        month (get pic "Month")
        project (get pic "Project")
        pic-path (str @medium-path "/" year "/" month "/" project "/" version ".jpg")
        width (reader/read-string (get pic "Image-Width"))
        height (reader/read-string (get pic "Image-Height"))
        pic-width (if (< height width)
                    "100%"
                    (str (int (* 100 (/ width height))) "%"))]
    ;;^{:key (get pic "_id")}
    [rc/box
     :size "auto"
     :width "100vh"
     :child [rc/v-box
             :class "image-container"
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
                   :child [:p (helpers/stars (get pic "Rating"))]]]]
                [rc/box
                 :child
                 [:img
                  {:src pic-path
                   :style {:margin "auto"}
                   :width pic-width}]]
                [rc/scroller
                 :child
                 [:p (string/join ", " (get pic "Keywords"))]]])]]))
