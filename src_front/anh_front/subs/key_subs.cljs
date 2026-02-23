(ns anh-front.subs.key-subs
  (:require
   [anh-front.keys.key-codes :refer [key-vals]]
   [re-frame.core :as rf]))

(defn shortcut-string
  "Given an entry from keydown returns a string describing the key"
  [shortcut]
  (let [key-function (first (first shortcut))
        key-number (:keyCode (first (second shortcut)))
        key-name (get key-vals key-number)
        ctrl-mod (if (:ctrlKey (first (second shortcut)))
                   "C" "")
        meta-mod (if (:metaKey (first (second shortcut)))
                   "M" "")
        shift-mod (if (:shiftKey (first (second shortcut)))
                    "S" "")
        key-modifiers (str ctrl-mod meta-mod shift-mod)
        filler (if (> (count key-modifiers) 0)
                 "-" "")]
    {:key (str key-modifiers filler key-name)
     :function key-function}))

(rf/reg-sub
  :keydown
  (fn [db]
    (:re-pressed.core/keydown db)))

(rf/reg-sub
  :current-keys
  (fn [_ _]
    (rf/subscribe [:keydown]))
  (fn [keydown _]
    (map shortcut-string (:event-keys keydown))))

(comment
  (shortcut-string [[:select-all][{:keyCode 65 :metaKey true}]])
  )
