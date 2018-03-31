(ns anh-front.project-tree
  "Extracts the various bits of information from a map representing the
  projects in the year month project form")

(comment (def yrstr
           {"years" [{"year" "1998"
                      "months" [{"month" "01"
                                 "projects" ["10-hello"
                                             "17-abc"]}]}
                     {"year" "1999"
                      "months" [{"month" "01"}
                                {"month" "02"}]}]}))

(defn years [tree]
  (get tree "years"))

(defn year-list [tree]
  (vec (for [yr (years tree)]
     (yr "year"))))

(defn year [tree year]
  (some #(when (= year (% "year")) %) (years tree)))

(defn months [tree yr]
  (get (year tree yr) "months"))

(defn month [tree yr mon]
  (some #(when (= mon (% "month")) %) (months tree yr)))

(defn projects [yrs yr mon]
  (get (month yrs yr mon) "projects"))
