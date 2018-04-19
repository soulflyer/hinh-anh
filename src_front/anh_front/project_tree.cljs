(ns anh-front.project-tree
  "Extracts the various bits of information from a map representing the
  projects in the year month project form. This is the data as received
  from photo-api not the internal representation of the projects tree
  which can be found in another namespace: anh-front.tree")

(def yrstr
  {"years" [{"year" "1998"
             "months" [{"month" "01"
                        "projects" ["10-hello"
                                    "17-abc"]}
                       {"month" "02"
                        "projects" ["03-eeee"]}]}
            {"year" "1999"
             "months" [{"month" "01"}
                       {"month" "02"}]}]})

(defn years [tree]
  (get tree "years"))

(defn year-list [tree]
  (vec (for [yr (years tree)]
         (yr "year"))))

(defn year [tree year]
  (some #(when (= year (% "year")) %) (years tree)))

(defn months [tree yr]
  (get (year tree yr) "months"))

(defn month-list [tree year]
  (vec (for [mn (months tree year)]
         (mn "month"))))

(defn month [tree yr mon]
  (some #(when (= mon (% "month")) %) (months tree yr)))

(defn projects [yrs yr mon]
  (get (month yrs yr mon) "projects"))

;; TODO this may need to be converted to use strings instead of keywords as keywords
;; dont allow spaces.
(defn map-data
  "Turn the incoming data into the right for for use in anh-front.tree ie:
  {:2001 {:expanded false
          :children {:01
                     {:expanded false
                      :children [\"proj1\"]}
                     :02
                     {:expanded false
                      :children [\"proj3\" \"proj4\"]}}}
   :2002 {:expanded false
          :children []}
   :2000 {:expanded false
          :children []}}"
  [tree]
  (into
    {}
    (for [year (year-list tree)]
      [(keyword year)
       (into
         {:expanded false}
         (for [month (month-list tree year) ]
           [(keyword month) (projects tree year month)]))])))
