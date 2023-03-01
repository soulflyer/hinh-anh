(ns anh-front.ui-components.single-pic
  (:require [re-com.core       :as rc]
            [re-frame.core     :as rf]
            ;;[cljs.reader     :as reader]
            [anh-front.helpers :as help]))

(defn panel [pic]
  (let [fullsize-path (rf/subscribe [:fullsize-directory])
        ;;medium-path   (rf/subscribe [:medium-directory])
        large-path    (rf/subscribe [:large-directory])
        ;;focused-pic  (rf/subscribe [:focused-pic-path])
        view-fullsize (rf/subscribe [:view-fullsize])
        background    (rf/subscribe [:pictures-background])
        ;;border        (rf/subscribe [:picture-border])
        ;;border-width  (rf/subscribe [:picture-border-width])
        path          (when pic (help/image-path pic))
        pic-path      (str (if @view-fullsize
                             @fullsize-path
                             @large-path)
                           "/" path ".jpg")
        ;;width         (reader/read-string (get pic "Image-Width"))
        ;;height        (reader/read-string (get pic "Image-Height"))
        ]
    [rc/box
     :attr {:id path}
     :style {:background-image    (str "url(" pic-path ")")
             :background-size     "contain"
             :background-repeat   "no-repeat"
             :background-position "center"
             :background          @background
             :border              "2px solid black"}
     :height "100%"
     :child
     [:p ""
      ;; :img
      ;; {:src pic-path
      ;;  :style {:margin "auto"}
      ;;  :width pic-width}
      ]]))
