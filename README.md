# om-event-bus

**Work in progress. Feedback and critique are most welcome at @martinbilski or gyamtso@gmail.com.**



Use this library when you want child components to communicate with parent components or the other way around without
having to explicitly pass core.async channels around or using callbacks.

In this approach components nested within each other can send custom events to their parents at any level.

Use this library whenever you need Om components to send events either down to components nested within them or up to
their parents.

Let's say you have three om components nested inside each other:

![Three nested components](https://raw.githubusercontent.com/bilus/om-event-bus/master/docs/event_bus_1.png)

When a component triggers an event, it can send it in two possible directions:

 - it can **bubble** it to its parents all the way to the top, or
 - it can **trickle** an event to its children.

In om-event-bus each direction is handled by a separate event bus. Components connect to an event bus to handle events
passing through it.

![Bubbling vs. trickling](https://raw.githubusercontent.com/bilus/om-event-bus/master/docs/event_bus_1.png)

The library does its best to create minimal or no overhead for components that do not handle events.

## Quick start

Add [![Clojars Project](http://clojars.org/om-event-bus/latest-version.svg)](http://clojars.org/om-event-bus) as leiningen dependency.

In addition to [om](https://github.com/swannodette/om), the library also relies on
[core.async](https://github.com/clojure/core.async) so make sure to include those as well.

Require namespace:

```clojure
(ns my.namespace
 (:require [om-event-bus.core :as event-bus]
           ... etc. ...))
```

Sending events by bubbling them up to the parents:

```clojure
(defn child-view [app owner]
      (reify
        om/IRender
        (render [_]
                (dom/button
                  #js
                  {:onClick #(event-bus/bubble owner "event from child")}
                  ; or
                  {:onClick #(event-bus/trigger owner "event from child")}
                  "Click me!"))))
```

Sending events by trickling them down to the child componensts:

```clojure
(defn parent-view [app owner]
      (reify
        om/IRender
        (render [_]
                (dom/button
                  #js
                  {:onClick #(event-bus/trickle owner "event from parent")}
                  "Click me!"))))
```

Receiving events:

```clojure
(defn some-view [app owner]
      (reify
        event-bus/IGotEvent
        (got-event [_ ev]
                   (js/console.log "component received" (clj->js ev)))
        om/IRender
        (render [_]
         (om/build child-view app))))
```

To hook this up, use `event-bus/root<>` instead of `om.core/root`:

```clojure
(event-bus/root<>
  parent-view
  app-state
  {:target (. js/document (getElementById "app"))})
```

Note that `event-bus/root<>` uses `:instrument` and `:descriptor` keys. You need to be aware of that if your code uses either.

## More information

To learn more about the library, read [this](http://bilus.github.io/om-event-bus/); in addition to a more detailed
introduction going beyond the basics above, it lets you peek into the internals.

Taking a look at the [examples](https://github.com/bilus/om-event-bus/tree/master/examples) may be the fastest way to
get the intuitive feel for how things work in the practice.

The following examples are available:

*  Simple example [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/simple/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/simple/index.html)]
*  Nested components [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/nested/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/nested/index.html)]
*  Using xforms [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/xform/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/xform/index.html)]
*  Receiving all events using core.async [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/go_loop/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/go_loop/index.html)]
*  Debugging [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/debug/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/debug/index.html)]
*  Other event-handling protocols [[source code](https://github.com/bilus/om-event-bus/blob/master/examples/protocols/src/core.cljs)] [[demo](http://bilus.github.io/om-event-bus/examples/protocols/index.html)]

*When trying out the demos, open JS console to see the output. Please note that demos are in development version so they may take a while to load depending on your Internet connection.*

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


### Bubbling and trickling

In addition to using `IGotEvent` to handle both events coming from children and parents of the component, you can reify
either `IGotBubblingEvent` and/or `IGotTricklingEvent` to handle separately events that come respectively from child
components and parents.

Example:

```clojure
(defn some-view
      [app owner]
      (reify
        event-bus/IGotBubblingEvent
        (got-event [_ ev]
                   (println "received event from a child" ev))
        event-bus/IGotTricklingEvent
        (got-event [_ ev]
                   (println "received event from a parent" ev))
        ...
```

As an optimization, if you only use trickling or bubbling events, instead of `root<>` which supports events going in both directions,
i.e. both up to parents and down to children, you can use either `root>` to only support bubbling events or `root<` to
add support just trickling. This will reduce the overhead because only one event bus will be created instead of two.

## Building examples

```
> git clone https://github.com/bilus/om-event-bus.git
> cd om-event-bus
> lein cljsbuild once
```

Open the generated html files, e.g. `examples/simple/index.html`.


## License

Copyright © 2015 Marcin Bilski

Distributed under the Eclipse Public License (see the accompanying epl.html file).
