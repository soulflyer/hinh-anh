(defproject anh "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.async "0.4.474"]
                 [reagent "0.7.0"]
                 [re-com "2.1.0"]
                 [re-frame "0.10.5"]
                 ;;[org.clojure/spec.alpha "0.1.143"]
                 [cljs-ajax "0.7.3"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [com.cognitect/transit-cljs "0.8.256"]]
  :plugins      [[lein-cljsbuild "1.1.5"]
                 [lein-externs "0.1.6"]
                 [lein-shell "0.5.0"]
                 [lein-figwheel "0.5.15" :exclusions [org.clojure/core.cache]]]
  :profiles
  {:dev
   {:dependencies [[figwheel "0.5.15"]
                   [com.cemerick/piggieback "0.2.2"]
                   [figwheel-sidecar "0.5.15"]
                   [day8.re-frame/re-frame-10x "0.3.1"]
                   [day8.re-frame/tracing "0.5.1"]]}}
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

    :dev-front {:source-paths ["src_front" "src_front_profile/anh_front/dev"]
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
                           :main "anh-front.init"
                           :asset-path "js/out_front"}}

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

    :prod-front {:source-paths ["src_front" "src_front_profile/anh_front/prod"]
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
