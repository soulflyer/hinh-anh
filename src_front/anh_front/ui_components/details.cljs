(ns anh-front.details
  (:require [re-com.core   :as rc]
            [re-frame.core :as rf]))

(defn panel []
  (let [pic                  (rf/subscribe [:focused-pic])
        camera               (get @pic "Model")
        caption              (get @pic "Caption-Abstract")
        copyright            (get @pic "Copyright-Notice")
        date-time            (get @pic "Date-Time-Original")
        exposure-bias        (get @pic "Exposure-Bias-Value")
        f-stop               (get @pic "F-Number")
        focal-length         (get @pic "Focal-Length")
        focal-length-35      (get @pic "Focal-Length-35")
        iso                  (get @pic "ISO-Speed-Ratings")
        lens                 (get @pic "Lens")
        shutter              (get @pic "Exposure-Time")
        special-instructions (get @pic "Special-Instructions")
        white-balance        (get @pic "White-Balance-Mode")
        version              (get @pic "Version")]
    (rc/v-box
      :children
      [[:p "details panel for " version]
       [:p "created: " date-time]
       [:p "ISO: " iso]
       [:p "F: " f-stop]
       [:p "Shutter: " shutter]
       [:p camera]
       [:p "Lens: " lens]
       [:p "Focal length: " focal-length]
       [:p "Focal length (35mm) " focal-length-35]
       [:p caption]
       [:p copyright]
       [:p special-instructions]])))
