(ns anh-front.ui-components.popover.popovers
  (:require [anh-front.atoms :as atoms]
            [anh-front.ui-components.popover.wrapper :as pw]
            [re-frame.core :as rf]
            [anh-front.helpers :as helpers]))

(defn keyword-suggestions [s]
  (let [names (rf/subscribe [:keyword-list])]
    (into []
          (take 16
                (for [n @names :when (re-find (re-pattern (str "(?i)" s)) n)]
                  n)))))

(defn dive-centre-suggestions []
  ["Sailing Club" "Alpha" "Soulfyer"])

(defn json-export [dive-centre]
  (pw/popover-textbox-wrapper
    atoms/export-json-button-show
    "zmdi-language-javascript"
    "Export JSON"
    (str "Export selection as JSON for " dive-centre)
    dive-centre-suggestions
    #(rf/dispatch [:write-json %])))

(defn find-keyword []
  (pw/popover-button-wrapper
    atoms/keyword-find-button-show
    "zmdi-search"
    "Find"
    "Find keyword"
    #(rf/dispatch [:say-hello "find"])))

(defn add-keyword [parent]
  (pw/popover-textbox-wrapper
    atoms/keyword-add-button-show
    "zmdi-plus"
    "Add"
    (str "Add to " parent)
    keyword-suggestions
    #(rf/dispatch [:add-to-focused-keyword %])))

(defn delete-keyword [kw]
  (pw/popover-button-wrapper
    atoms/keyword-delete-button-show
    "zmdi-delete"
    (str "Delete focused keyword")
    (str "Delete keyword \"" kw "\"")
    #(rf/dispatch [:delete-focused-keyword])))

(defn move-keyword [kw]
  (pw/popover-textbox-wrapper
    atoms/keyword-move-button-show
    "zmdi-open-in-new"
    "Move"
    (str "Move " kw " to:")
    keyword-suggestions
    #(rf/dispatch [:move-focused-keyword %])))

(defn rename-keyword [kw]
  (pw/popover-textbox-wrapper
    atoms/keyword-rename-button-show
    "zmdi-edit"
    "Rename"
    (str "Rename " kw " to:")
    keyword-suggestions
    #(rf/dispatch [:rename-focused-keyword %])))

(defn merge-keywords [kw]
  (pw/popover-textbox-wrapper
    atoms/keyword-merge-button-show
    "zmdi-arrow-merge"
    "Merge"
    (str "Merge with " kw ":")
    keyword-suggestions
    #(rf/dispatch [:merge-focused-keyword %])))

(defn set-best [pic kw]
  (pw/popover-button-wrapper
    atoms/keyword-set-best-button-show
    "zmdi-image"
    "Set Best"
    (str "Set <" pic "> as best image for \"" kw "\"")
    #(rf/dispatch [:set-sample])))

(defn add-orphans []
  (pw/popover-button-wrapper
    atoms/keyword-add-orphans-button-show
    "zmdi-collection-plus"
    "Add Keywords"
    (str "Add keywords from photos to keyword tree")
    #(rf/dispatch [:add-missing-keywords])))

(defn purge-keywords []
  (pw/popover-button-wrapper
    atoms/keyword-purge-unused-button-show
    "zmdi-flash"
    "Remove Keywords"
    (str "DANGER: removes unused keywords from keyword tree.")
    #(rf/dispatch [:delete-unused-keywords])))

(defn goto-project [project]
  (let [project-path (helpers/vector->path project)]
    (pw/popover-button-wrapper
      atoms/go-to-project-button-show
      "zmdi-collection-folder-image"
      "Go To Project"
      (str "Go to project <" project-path ">")
      #(rf/dispatch [:go-to-project project]))))
