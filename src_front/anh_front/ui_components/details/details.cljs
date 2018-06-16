(ns anh-front.details
  (:require [anh-front.detail-components :as components]
            [anh-front.details-helper :as helper]
            [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn panel []
  (let [pic-path             (rf/subscribe [:focused-pic-path])
        pic                  (rf/subscribe [:focused-pic])
        camera               (helper/camera (get @pic "Model"))
        caption              (get @pic "Caption-Abstract")
        title                (get @pic "Object-Name")
        copyright            (get @pic "Copyright-Notice")
        [date time]          (helper/split-datetime (get @pic "Date-Time-Original"))
        f-stop               (get @pic "F-Number")
        focal-length         (get @pic "Focal-Length")
        focal-length-35      (get @pic "Focal-Length-35")
        iso                  (get @pic "ISO-Speed-Ratings")
        keywords             (get @pic "Keywords")
        keyword-string       (reduce str (interpose ", " keywords))
        lens                 (get @pic "Lens")
        shutter              (get @pic "Exposure-Time")
        special-instructions (get @pic "Special-Instructions")
        white-balance        (get @pic "White-Balance-Mode")
        version              (get @pic "Version")]
    (rc/v-box
      :attr {:on-click #(rf/dispatch [:set-panel-focus :left])}
      :height "100%"
      :children
      [[rc/gap :size "3px"]
       [rc/v-box
        :children
        [[rc/line]
         [rc/h-box
          :style {:font-size "0.6em"}
          :justify :between
          :children [[:p date] [:p time]]]
         [rc/line]
         [:h3 {:style {:margin "5px 0px 3px"}} camera]
         (if lens [:p lens])
         (if iso [rc/h-box
                  :justify :between
                  :children [[:p (str "iso-" iso)] [:p f-stop] [:p shutter]]])
         [rc/line]
         [rc/v-box
          :style {:font-size "0.60em"}
          :children
          [[rc/h-box
            :justify :between
            :children [[:p "Copyright"] [:p copyright]]]]]
         [rc/line]]]
       ;;[rc/gap :size "9px"]

       [rc/gap :size "12px"]
       [components/box 1 title "Title"
        #(rf/dispatch [:write-iptc [@pic-path :title %]])]
       [components/box 5 caption "Caption"
        #(rf/dispatch [:write-iptc [@pic-path :caption %]])]
       ;;[components/box 2 keyword-string "Keywords" #(rf/dispatch [:say-hello %])]
       [components/keyword-box keywords]
       [rc/line]
       [components/all-exif helper/exif-fields @pic]])))
