(defproject om-event-bus "0.1.0-SNAPSHOT"
  :description "Simple parent->child custom events for Om."
  :url "http://github.com/bilus/om-event-bus"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2505" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha" :scope "provided"]
                 [om "0.8.0-beta5" :scope "provided"]])
