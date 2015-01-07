# om-event-bus

**Work in progress. This is a pre-alpha release and the interface may change. Feedback and critique are most welcome at @martinbilski or gyamtso@gmail.com.**



Use this library when you want child components to communicate with parent components. It's usually best to avoid
coupling as much as possible but if you are writing complex UI components this may be unavoidable.

There are two common ways to do this that I know of: passing callbacks and using core.async. This library attempts to
 offer a more structured and seamless approach with less noise.

In this approach components nested within each other can send custom events to their parents at any level.

This idea is best expressed as an imaginary bus connecting components.

![High-level overview](https://raw.githubusercontent.com/bilus/om-event-bus/master/docs/event_bus_2.png)

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
 (:require [om-event-bus.core :as event-bus]
           ... etc. ...))
```

Sending events:

```clojure
(defn child-view [app owner]
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
(defn parent-view [app owner]
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

Note that `event-bus/root` uses `:instrument` and `:descriptor` keys. You need to be aware of that if your code uses either.

## More information

1. [Reference](http://bilus.github.io/om-event-bus/) - in addition to getting started material and function reference,
it lets you peek into the internals.

2. [Examples](https://github.com/bilus/om-event-bus/tree/master/examples) - running examples and watching JS console may
be the fastest way to get the intuition of how events work in the practice.

The following examples are available:

*  Simple example [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/simple/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/simple/index.html)]
*  Nested components [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/nested/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/nested/index.html)]
*  Using xforms [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/xform/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/xform/index.html)]
*  Receiving all events using core.async [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/go_loop/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/go_loop/index.html)]

*When using the demos, open JS console to see the output. Please note that demos are in development version so they may take a while to load depending on your Internet connection.*

## Advanced usage

### Specifying options

To configure event processing for a component, reify `IInitEventBus` and return a hash with options to be merged into
the default configuration.

```clojure
(defn my-view [app owner]
    (reify
        ;; Other interfaces.
        event-bus/IInitEventBus
        (init-event-bus [_)
            {:buf-or-n 1024})))
```

For the list of available options see [the reference](http://bilus.github.io/om-event-bus/).

### Event xforms

Each component may define an xform to apply to events both:

 - passing through it on their way from source components down to parents, and:
 - triggered by the component itself.

In the former case, it lets components add detailed information to passing events without actually handling them and
transforming explicitly. The latter use helps you add default information to all events triggered by the component in
one place. Defining an xform guarantees that all events are transformed consistently.

You may find xforms particularly useful in cases where `om.core/path` breaks encapsulation or is too limited. Another 
example usage is passing local state (or its derivative) to parent components.

In this concocted and useless example, we print the full path an event took to arrive at `parent-view`:

```clojure
(defn child-view
      [app owner]
      (reify
        event-bus/IInitEventBus
        (init-event-bus [_]
                        {:xform (add-om-id-xform owner)})
        om/IRender
        (render [_]
                (apply dom/div nil [(dom/button
                                      #js {:onClick #(event-bus/trigger owner {:from "child"})}
                                      (str "Child " (om/id owner)))]))))

(defn parent-view
      [app owner]
      (reify
        event-bus/IInitEventBus
        (init-event-bus [_]
                        {:xform (add-om-id-xform owner)})
        event-bus/IGotEvent
        (got-event [_ ev]
                   (println "parent received" ev))
        om/IRender
        (render [_]
                (apply dom/div nil [(dom/span
                                      nil
                                      (str "Parent " (om/id owner)))
                                    (om/build child-view app)
                                    (om/build child-view app)]))))
```

Clicking a button prints output similar this to the console:

```
parent received {:from child, :path [:1 :0]}
```

See [this](https://github.com/bilus/om-event-bus/tree/master/examples/xform) for a complete version of this example.


## Building examples

```
> git clone https://github.com/bilus/om-event-bus.git
> cd om-event-bus
> lein cljsbuild once
```

Open the generated html files, e.g. `examples/simple/index.html`.


## License

Copyright © 2014 Marcin Bilski

Distributed under the Eclipse Public License (see the accompanying epl.html file).
