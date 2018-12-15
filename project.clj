(defproject anh "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[akiroz.re-frame/storage "0.1.3"]
                 [cljs-ajax "0.8.0"]
                 [com.cemerick/url "0.1.1"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [com.rpl/specter "1.1.2"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.439" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.async "0.4.490"]
                 [prismatic/dommy "1.1.0"]
                 [re-com "2.3.0"]
                 [re-frame "0.10.6"]
                 [re-pressed "0.2.2"]
                 [reagent "0.8.1"]]
  :plugins      [[lein-cljsbuild "1.1.7"]
                 [lein-externs "0.1.6"]
                 [lein-shell "0.5.0"]
                 [lein-figwheel "0.5.16" :exclusions [org.clojure/core.cache]]]
  :profiles
  {:dev
   {:dependencies [[cider/piggieback "0.3.10"]
                   [day8.re-frame/re-frame-10x "0.3.3"]
                   [day8.re-frame/tracing "0.5.1"]
                   [figwheel "0.5.17"]
                   [figwheel-sidecar "0.5.17"]
                   [org.clojure/data.xml "0.2.0-alpha5"]]
    :repl-options
    {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}
  :clean-targets [:target-path "tmp"
                  "app/dev/js/cljsbuild-main.js" "app/dev/js/front.js"
                  "app/prod/js/cljsbuild-main.js" "app/prod/js/front.js"
                  "app/dev/js/out_main" "app/dev/js/out_front"
                  "app/prod/js/out_main" "app/prod/js/out_front"]
  :source-paths ["src_tools" "src_front"]
  :hooks [leiningen.cljsbuild]
  :aliases
  {"nuke"          ["do"
                    ["clean"]
                    ["shell" "touch" "./src/anh/core.cljs"]
                    ["shell" "touch" "./src_front/anh_front/core.cljs"]]
   "rebuild"       ["do"
                    ["clean"]
                    ["shell" "touch" "./src/anh/core.cljs"]
                    ["shell" "touch" "./src_front/anh_front/core.cljs"]
                    ["cljsbuild" "once" "dev-main"]
                    ["cljsbuild" "once" "dev-front"]
                    ["cljsbuild" "once" "prod-main"]
                    ["cljsbuild" "once" "prod-front"]]
   "rebuild-dev"   ["do"
                    ["clean"]
                    ["shell" "touch" "./src/anh/core.cljs"]
                    ["shell" "touch" "./src_front/anh_front/core.cljs"]
                    ["cljsbuild" "once" "dev-main"]
                    ["cljsbuild" "once" "dev-front"]]
   "get-electron"  ["do"
                    ["shell" "npm" "install"]
                    ["shell" "grunt" "download-electron"]]
   "build-externs" ["do"
                    ["externs" "dev-main" "app/dev/js/externs.js"]
                    ["externs" "dev-front" "app/dev/js/externs_front.js"]
                    ["externs" "prod-main" "app/prod/js/externs.js"]
                    ["externs" "prod-front" "app/prod/js/externs_front.js"]]
   "run-figwheel"  ["trampoline" "figwheel" "dev-front"]
   ;; electron packager for production
   "uberapp-osx"   ["shell" "electron-packager" "./app/prod" "anh"
                    "--platform=darwin" "--arch=x64" "--electron-version=1.6.6"]
   "uberapp-linux" ["shell" "electron-packager" "./app/prod" "anh"
                    "--platform=linux" "--arch=x64" "--electron-version=1.6.6"]
   }

  :cljsbuild
  {:builds
   {:dev-main {:source-paths ["src"]
               :incremental true
               :jar true
               :assert true
               :compiler {:output-to "app/dev/js/cljsbuild-main.js"
                          :externs ["app/dev/js/externs.js"
                                    "node_modules/closurecompiler-externs/path.js"
                                    "node_modules/closurecompiler-externs/process.js"]
                          :warnings true
                          :elide-asserts true
                          :target :nodejs
                          :optimizations :simple
                          :output-dir "app/dev/js/out_main"
                          :pretty-print true
                          :output-wrapper true}}

    :dev-front {:source-paths ["src_front"]
                :incremental true
                :jar true
                :assert true
                :compiler {:output-to "app/dev/js/front.js"
                           :externs ["app/dev/js/externs_front.js"]
                           :warnings true
                           :elide-asserts true
                           :optimizations :none
                           :output-dir "app/dev/js/out_front"
                           :pretty-print true
                           :output-wrapper true
                           :closure-defines
                           {"re_frame.trace.trace_enabled_QMARK_" true
                            "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                           :preloads [day8.re-frame-10x.preload]
                           :main "anh-front.core"
                           :asset-path "js/out_front"}
                :figwheel {:on-jsload "anh-front.core/mount-root"}}

    :prod-main {:source-paths ["src"]
                :incremental true
                :jar true
                :assert true
                :compiler {:output-to "app/prod/js/cljsbuild-main.js"
                           :externs ["app/prod/js/externs.js"
                                     "node_modules/closurecompiler-externs/path.js"
                                     "node_modules/closurecompiler-externs/process.js"]
                           :warnings true
                           :elide-asserts true
                           :target :nodejs
                           :output-dir "app/prod/js/out_main"
                           :optimizations :simple
                           :pretty-print true
                           :output-wrapper true}}

    :prod-front {:source-paths ["src_front"]
                 :incremental true
                 :jar true
                 :assert true
                 :compiler {:output-to "app/prod/js/front.js"
                            :externs ["app/prod/js/externs_front.js"]
                            :warnings true
                            :elide-asserts true
                            :output-dir "app/prod/js/out_front"
                            :optimizations :simple
                            :pretty-print true
                            :output-wrapper true}}}}

  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3441
             :auto-clean false
             :css-dirs ["app/dev/css"]})
