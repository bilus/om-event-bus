(defproject om-event-bus "0.2.3"
            :description "Simple custom events for Om."
            :url "http://github.com/bilus/om-event-bus"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.6.0"]
                           [org.clojure/clojurescript "0.0-2505" :scope "provided"]
                           [org.clojure/core.async "0.1.346.0-17112a-alpha" :scope "provided"]
                           [om "0.8.0-beta5" :scope "provided"]
                           #_[org.clojure/tools.trace "0.7.8" :scope "provided"]]
            :jar-exclusions [#"\.cljx|\.swp|\.swo|\.DS_Store"]
            :auto-clean false
            :source-paths ["src/cljx" "src/clj" "src/cljs"]

            :plugins [[lein-cljsbuild "1.1.8"]
                      [bilus/lein-marginalia "0.8.8"]
                      [quickie "0.3.6"]
                      [com.keminglabs/cljx "0.5.0"]
                      [lein-pprint "1.1.1"]]

            :prep-tasks [["cljx" "once"]]

            :clean-targets ["examples/simple/main.js"
                            "examples/simple/out"
                            "examples/xform/main.js"
                            "examples/xform/out"
                            "examples/go_loop/main.js"
                            "examples/go_loop/out"
                            "examples/nested/main.js"
                            "examples/nested/out"
                            "examples/disable/main.js"
                            "examples/disable/out"
                            "examples/debug/main.js"
                            "examples/debug/out"
                            "examples/protocols/main.js"
                            "examples/protocols/out"
                            "target/"]

            :aliases {"quickie" ["with-profile" "clj" "quickie"]
                      "deploy" ["do" ["clean"] ["cljx" "once"] ["deploy" "clojars"]]
                      "build-all" [["do" ["clean"] ["cljx" "once"] ["cljsbuild" "once"]]]
                      "build-auto" ["do" ["clean"] ["cljx" "once"] ["cljsbuild" "auto"]]}

            :profiles {:clj {:dependencies [[pjstadig/humane-test-output "0.6.0"]]
                             :test-paths ["test/clj"]
                             :injections [(require 'pjstadig.humane-test-output)
                                          (pjstadig.humane-test-output/activate!)]}}

            :cljx {:builds [{:source-paths ["src/cljx"]
                             :output-path "target/classes"
                             :rules :clj}

                            {:source-paths ["src/cljx"]
                             :output-path "target/classes"
                             :rules :cljs}]}

            :cljsbuild {:builds {:simple
                                 {:source-paths ["examples/simple/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/simple/main.js"
                                                 :output-dir    "examples/simple/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :xform
                                 {:source-paths ["examples/xform/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/xform/main.js"
                                                 :output-dir    "examples/xform/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :go_loop
                                 {:source-paths ["examples/go_loop/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/go_loop/main.js"
                                                 :output-dir    "examples/go_loop/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :nested
                                 {:source-paths ["examples/nested/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/nested/main.js"
                                                 :output-dir    "examples/nested/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :disable
                                 {:source-paths ["examples/disable/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/disable/main.js"
                                                 :output-dir    "examples/disable/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :debug
                                 {:source-paths ["examples/debug/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/debug/main.js"
                                                 :output-dir    "examples/debug/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 :protocols
                                 {:source-paths ["examples/protocols/src" "src/cljs" "target/classes/"]
                                  :compiler     {:output-to     "examples/protocols/main.js"
                                                 :output-dir    "examples/protocols/out"
                                                 :source-map    true
                                                 :optimizations :none}}}})

