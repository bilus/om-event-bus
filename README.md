# om-event-bus

**Work in progress. This is a pre-alpha release and the interface may change. Feedback and critique are most welcome at @martinbilski or gyamtso@gmail.com.**



Use this library when you want child components to communicate with parent components. It's usually best to avoid
coupling as much as possible but if you are writing complex UI components this may be unavoidable.

There are two common ways to do this that I know of: passing callbacks and using core.async. This library attempts to
 offer a more structured and seamless approach without explicit message passing.

In this approach components nested within each other can send custom events to their parents at any level.

This idea is best expressed as an imaginary bus connecting components.

[TODO: diagram]

One important feature is that events flow in only one direction, i.e. from children to their ancestors, never the other
way. In addition, an event can be handled by any number of component wrapping the source component.

The library does its best to create minimal or no overhead for components that do not reify the `IGotEvent` interface.

## Quick start

Add `[om-event-bus "0.1.1-SNAPSHOT"]` as leiningen dependency.

In addition to [om](https://github.com/swannodette/om), the library also relies on
[core.async](https://github.com/clojure/core.async) so make sure to include those as well.

Require namespace:

```clojure
(ns my.namespace
 (:require [om-event-bus :as event-bus]
           ... etc. ...))
```

Sending events:

```clojure
(defn child-view
      [app owner]
      (reify
        om/IRender
        (render [_]
                (dom/button
                  #js
                  {:onClick #(event-bus/trigger owner "event from child")}
                  "Click me!"))))
```

Receiving events:

```clojure
(defn parent-view
      [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ ev]
                   (js/console.log "parent received" (clj->js ev)))
        om/IRender
        (render [_]
         (om/build child-view app))))
```

To hook this up, use `event-bus/root>` instead of `om.core/root`:

```clojure
(event-bus/root>
  parent-view
  app-state
  {:target (. js/document (getElementById "app"))})
```

Note that `event-bus/root` uses :instrument and :descriptor. You need to be aware of that if your coded uses it as well.

## More information

* [Reference and internals](http://bilus.github.io/om-event-bus/)
* [Examples](https://github.com/bilus/om-event-bus/tree/master/examples)


## Advanced usage

### Specifying options

TBD

### Event xforms

TBD

## Building examples

```
> lein cljsbuild once
```

Open the generated html files, e.g. `examples/simple/index.html`.


## License

Copyright © 2014 Marcin Bilski

Distributed under the Eclipse Public License (see the accompanying epl.html file).
