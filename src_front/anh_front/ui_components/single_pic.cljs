(ns anh-front.single-pic
  (:require [re-com.core       :as rc]
            [re-frame.core     :as rf]
            [cljs.reader       :as reader]
            [anh-front.helpers :as help]))

(defn panel [pic]
  (let [medium-path  (rf/subscribe [:medium-directory])
        large-path   (rf/subscribe [:large-directory])
        focused-pic  (rf/subscribe [:focused-pic])
        path         (when pic (help/image-path pic))
        pic-path     (str @large-path "/" path ".jpg")
        width        (reader/read-string (get pic "Image-Width"))
        height       (reader/read-string (get pic "Image-Height"))
        pic-width    (if (< height width)
                       "100%"
                       (str (int (* 100 (/ width height))) "%"))]
    [rc/box
     :child
     [:img
      {:src pic-path
       :style {:margin "auto"}
       :width pic-width
       }]]))
