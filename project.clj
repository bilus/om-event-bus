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
                      [lein-marginalia "0.8.0"]]

            :cljsbuild {:builds [{:id           "simple"
                                  :source-paths ["src" "examples/simple/src"]
                                  :compiler     {:output-to     "examples/simple/main.js"
                                                 :output-dir    "examples/simple/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 {:id           "xform"
                                  :source-paths ["src" "examples/xform/src"]
                                  :compiler     {:output-to     "examples/xform/main.js"
                                                 :output-dir    "examples/xform/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 {:id           "go_loop"
                                  :source-paths ["src" "examples/go_loop/src"]
                                  :compiler     {:output-to     "examples/go_loop/main.js"
                                                 :output-dir    "examples/go_loop/out"
                                                 :source-map    true
                                                 :optimizations :none}}
                                 {:id           "nested"
                                  :source-paths ["src" "examples/nested/src"]
                                  :compiler     {:output-to     "examples/nested/main.js"
                                                 :output-dir    "examples/nested/out"
                                                 :source-map    true
                                                 :optimizations :none}}]})

