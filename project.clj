(defproject om-event-bus "0.1.2-SNAPSHOT"
            :description "Simple custom events for Om."
            :url "http://github.com/bilus/om-event-bus"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.6.0"]
                           [org.clojure/clojurescript "0.0-2505" :scope "provided"]
                           [org.clojure/core.async "0.1.346.0-17112a-alpha" :scope "provided"]
                           [om "0.8.0-beta5" :scope "provided"]]


            :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
                      [lein-marginalia "0.8.0"]
                      [quickie "0.3.6"]
                      [com.cemerick/clojurescript.test "0.3.3"]]

            :clean-targets ["examples/simple/main.js"
                            "examples/simple/out"
                            "examples/xform/main.js"
                            "examples/xform/out"
                            "examples/go_loop/main.js"
                            "examples/go_loop/out"
                            "examples/nested/main.js"
                            "examples/nested/out"]

            :cljsbuild {:builds {:simple
                                 {:source-paths ["src" "examples/simple/src"]
                                  :compiler     {:output-to     "examples/simple/main.js"
                                                 :output-dir    "examples/simple/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :xform
                                 {:source-paths ["src" "examples/xform/src"]
                                  :compiler     {:output-to     "examples/xform/main.js"
                                                 :output-dir    "examples/xform/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :go_loop
                                 {:source-paths ["src" "examples/go_loop/src"]
                                  :compiler     {:output-to     "examples/go_loop/main.js"
                                                 :output-dir    "examples/go_loop/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :nested
                                 {:source-paths ["src" "examples/nested/src"]
                                  :compiler     {:output-to     "examples/nested/main.js"
                                                 :output-dir    "examples/nested/out"
                                                 :source-map    true
                                                 :optimizations :none}}

                                 :test
                                 {:source-paths ["src" "test"]

                                  ;:notify-command ["phantomjs" :runner
                                  ;                 "this.literal_js_was_evaluated=true"
                                  ;                 "resources/private/js/react/react.js"
                                  ;                 "resources/private/js/unit-tests.js"]
                                  :compiler     {:preamble ["react/react.min.js"]
                                                 :output-to     "resources/private/js/unit-tests.js"
                                                 :optimizations :whitespace
                                                 :pretty-print  true}}}
                        :test-commands {"unit" ["phantomjs" :runner
                                                      "this.literal_js_was_evaluated=true"
                                                      "resources/private/js/react/react.js"
                                                      "resources/private/js/unit-tests.js"]}})

