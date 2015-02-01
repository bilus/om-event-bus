// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.descriptor');
goog.require('cljs.core');
goog.require('om.core');
/**
* Given pure methods and a map of overrides, the `extend-pure-methods` function extends pure methods with new lifecycle methods.
* 
* Example:
* 
* <pre><code>
* (extend-pure-methods
* {:render (fn [this super]
* ;; Do something.
* (super))}) ;; Call the original method.
* </pre></code>
* 
* You can also specify a map of pure methods as the first argument.
*/
om_event_bus.descriptor.extend_pure_methods = (function() {
var extend_pure_methods = null;
var extend_pure_methods__1 = (function (new_methods){
return extend_pure_methods.call(null,om.core.pure_methods,new_methods);
});
var extend_pure_methods__2 = (function (methods$,new_methods){
var methods_SINGLEQUOTE_ = methods$;
var G__80985 = cljs.core.seq.call(null,new_methods);
var vec__80986 = G__80985;
var vec__80987 = cljs.core.nth.call(null,vec__80986,(0),null);
var new_method_name = cljs.core.nth.call(null,vec__80987,(0),null);
var new_method_fn = cljs.core.nth.call(null,vec__80987,(1),null);
var new_methods_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__80986,(1));
var methods_SINGLEQUOTE___$1 = methods_SINGLEQUOTE_;
var G__80985__$1 = G__80985;
while(true){
var methods_SINGLEQUOTE___$2 = methods_SINGLEQUOTE___$1;
var vec__80988 = G__80985__$1;
var vec__80989 = cljs.core.nth.call(null,vec__80988,(0),null);
var new_method_name__$1 = cljs.core.nth.call(null,vec__80989,(0),null);
var new_method_fn__$1 = cljs.core.nth.call(null,vec__80989,(1),null);
var new_methods_SINGLEQUOTE___$1 = cljs.core.nthnext.call(null,vec__80988,(1));
if(cljs.core.truth_(new_method_name__$1)){
var G__80990 = om_event_bus.descriptor.around_method.call(null,new_method_name__$1,methods_SINGLEQUOTE___$2,new_method_fn__$1);
var G__80991 = new_methods_SINGLEQUOTE___$1;
methods_SINGLEQUOTE___$1 = G__80990;
G__80985__$1 = G__80991;
continue;
} else {
return methods_SINGLEQUOTE___$2;
}
break;
}
});
extend_pure_methods = function(methods$,new_methods){
switch(arguments.length){
case 1:
return extend_pure_methods__1.call(this,methods$);
case 2:
return extend_pure_methods__2.call(this,methods$,new_methods);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extend_pure_methods.cljs$core$IFn$_invoke$arity$1 = extend_pure_methods__1;
extend_pure_methods.cljs$core$IFn$_invoke$arity$2 = extend_pure_methods__2;
return extend_pure_methods;
})()
;
/**
* This function does the actual job of overriding a pure method by wrapping it in f.
*/
om_event_bus.descriptor.around_method = (function around_method(method,methods$,f){
var prev_method = method.call(null,methods$);
return cljs.core.assoc.call(null,methods$,method,((function (prev_method){
return (function (){
var this$ = this;
return f.call(null,this$,((function (this$,prev_method){
return (function (){
return prev_method.call(this$);
});})(this$,prev_method))
);
});})(prev_method))
);
});
/**
* Creates a custom descriptor with support for an event bus.
*/
om_event_bus.descriptor.make_descriptor = (function make_descriptor(new_methods){
var methods$ = om_event_bus.descriptor.extend_pure_methods.call(null,new_methods);
var descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,methods$));
return descriptor;
});

//# sourceMappingURL=descriptor.js.map