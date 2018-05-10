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

(defn tree-data
  "Turn the incoming data into the right form for use in anh-front.tree ie:
  {:name \"root\"
   :expanded true
   :children [{:name \"2000\"
               :expanded true
               :children [{:name \"01\"
                           :expanded false
                           :children [{:name \"project-1\"}
                                      {:name \"project-3\"}
                                      {:name \"project-4\"}]}
                          {:name \"02\"
                           :expanded true
                           :children [{:name \"project-5\"}
                                      {:name \"project-6\"}]}]}
              {:name \"2002\"
               :expanded false
               :children [{:name \"01\"
                           :expanded false
                           :children []}]}]}"
  [tree]
  {:name "root"
   :focus ["root"]
   :expanded true
   :children
   (into []
         (for [year (sort (year-list tree))]
           {:name year
            :expanded false
            :children
            (into []
                  (for [month (sort (month-list tree year))]
                    {:name month
                     :expanded false
                     :children
                     (into []
                           (for [project (sort (projects tree year month))]
                             {:name project}))}))}))})
