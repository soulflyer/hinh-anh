(ns anh-front.details
  (:require [anh-front.detail-components :as components]
            [anh-front.details-helper :as helper]
            [re-com.core :as rc]
            [re-frame.core :as rf]))

(defn panel []
  (let [pic-path             (rf/subscribe [:focused-pic-path])
        pic                  (rf/subscribe [:focused-pic])
        iptc-fields          (rf/subscribe [:iptc-fields])
        camera               (helper/camera (get @pic "Model"))
        copyright            (get @pic "Copyright-Notice")
        [date time]          (helper/split-datetime (get @pic "Date-Time-Original"))
        f-stop               (get @pic "F-Number")
        iso                  (get @pic "ISO-Speed-Ratings")
        keywords             (get @pic "Keywords")
        keyword-string       (reduce str (interpose ", " keywords))
        lens                 (get @pic "Lens")
        shutter              (get @pic "Exposure-Time")
        version              (get @pic "Version")]
    (rc/v-box
      :attr {:on-click #(rf/dispatch [:set-panel-focus :left])}
      :size "100"
      :children
      [[rc/gap :size "3px"]
       [rc/v-box
        :children
        [[rc/h-box
          :style {:font-size "0.6em"}
          :children [[:p @pic-path]]]
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
       [rc/gap :size "12px"]
       [rc/v-box
        :children
        (for [iptc-field @iptc-fields]
          (let [rows      (last iptc-field)
                title     (second iptc-field)
                iptc-name (name (first iptc-field))]
            [components/box rows (get @pic iptc-name) title
             #(rf/dispatch [:write-iptc [@pic-path iptc-name %]])]))]
       ;;[components/keyword-box keywords]
       [components/keyword-editor @pic]
       [rc/line]
       [components/all-exif helper/exif-fields @pic]])))
