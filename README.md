# om-event-bus

Simple child->parent communication for Om components.

Use this library when you want child components to communicate with parent components. It's usually best to avoid
coupling as much as possible but if you are writing complex UI components this may be unavoidable.

There are two common ways to do this that I know of: passing callbacks and using core.async. This library attempts to
 offer a more structured and seamless approach without explicit message passing.

In this approach components nested within each other can send custom events to their parents at any level.

This idea is best expressed as an imaginary bus connecting components.

[TODO: diagram]

One important feature is that events flow in only one direction, i.e. from children to their ancestors, never the other
way. In addition, an event can be handled by any number of component wrapping the source component.

## Usage

Add `[om-event-bus "0.1.1-SNAPSHOT"]` as leiningen dependency.

In addition to [om](https://github.com/swannodette/om), the library also relies on
[core.async](https://github.com/clojure/core.async) so make sure to include those as well.

Let's say you have three levels of nested components (in this case simple buttons to illustrate


## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
