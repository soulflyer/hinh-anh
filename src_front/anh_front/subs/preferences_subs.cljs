(ns anh-front.subs.preferences-subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :preferences
  (fn [db _]
    (:preferences db)))

(rf/reg-sub
  :medium-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [root _]
    (:medium-directory root)))

(rf/reg-sub
  :large-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:large-directory preferences)))

(rf/reg-sub
  :fullsize-directory
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:fullsize-directory preferences)))

(rf/reg-sub
  :screen-split
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:screen-split preferences)))

(rf/reg-sub
  :help-split
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:help-split preferences)))

(rf/reg-sub
  :view-fullsize
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:view-fullsize preferences)))

(rf/reg-sub
  :last-project
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:last-project preferences)))

(rf/reg-sub
  :api-root
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:api-root preferences)))

(rf/reg-sub
  :dive-centre
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:dive-centre preferences)))

(rf/reg-sub
  :picture-sort-field
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:picture-sort-field preferences)))

(rf/reg-sub
  :keyword-sets
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:keyword-sets preferences)))

(rf/reg-sub
  :favorite-keywords
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:favorite-keywords preferences)))

;; (rf/reg-sub
;;   :favorite-keyword-set
;;   (fn [_ _]
;;     [(rf/subscribe [:favorite-keywords]) (rf/subscribe [:keyword-sets])])
;;   (fn [[favorite-keywords keyword-sets] _]
;;     (:keywords (first (filter #(= favorite-keywords (:name %)) keyword-sets)))))

(rf/reg-sub
  :keyword-shortcuts
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:keyword-shortcuts preferences)))

(rf/reg-sub
  :keyword-set-shortcuts
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:keyword-set-shortcuts preferences)))

(rf/reg-sub
  :keyword-set
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (sort (:keyword-set preferences))))

(rf/reg-sub
  :keyword-map
  (fn [_ _]
    [(rf/subscribe [:keyword-set]) (rf/subscribe [:keyword-shortcuts])])
  (fn [[fks shortcuts] _]
    (let [padding          (take (- (count fks) (count shortcuts)) (repeat nil))
          padded-shortcuts (into padding (reverse (seq shortcuts)))]
      (apply
        array-map
        (flatten
          (map (fn [a b] [a b])
               fks padded-shortcuts))))))

(rf/reg-sub
  :keyword-sets-map
  ;; TODO This is returning name/keyword pairs in a fairly random order
  (fn [_ _]
    [(rf/subscribe [:keyword-set-names]) (rf/subscribe [:keyword-set-shortcuts])])
  (fn [[keyword-set-names shortcuts] _]
    (zipmap keyword-set-names (seq shortcuts))))

(rf/reg-sub
  :keyword-set-names
  (fn [_ _]
    (rf/subscribe [:keyword-sets]))
  (fn [keyword-sets _]
    (sort (for [keyword-map keyword-sets]
            (:name keyword-map)))))

(rf/reg-sub
  :hide-footer
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:hide-footer preferences)))

(rf/reg-sub
  :hide-help
  (fn [_ _]
    (rf/subscribe [:preferences]))
  (fn [preferences _]
    (:hide-help preferences)))
