// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.core');
goog.require('cljs.core');
goog.require('om_event_bus.descriptor');
goog.require('om_event_bus.impl');
goog.require('cljs.core.async');
goog.require('om.core');




om_event_bus.core._STAR_parent_STAR_ = null;
/**
* The `root<>` function adds support both for bubbling (child to parents) and trickling (parent to children) events.
* 
* > **Note**
* >
* > The arity 4 version lets you specify a channel if you also want to handle events outside of component hierarchy.
* > If you pass a channel to receive events through, you **MUST** consume events.
* >
* > See [this example](https://github.com/bilus/om-event-bus/blob/master/examples/go_loop/src/core.cljs) ([demo](http://bilus.github.io/om-event-bus/examples/go_loop/index.html)).
* @param {...*} var_args
*/
om_event_bus.core.root_LT__GT_ = (function() { 
var root_LT__GT___delegate = function (f,value,options,p__80869){
var vec__80871 = p__80869;
var out_event_ch = cljs.core.nth.call(null,vec__80871,(0),null);
return om_event_bus.core.root_STAR_.call(null,f,value,options,out_event_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.bubbling_router.call(null)),new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.trickling_router.call(null))], null),om_event_bus.core.default_protocols);
};
var root_LT__GT_ = function (f,value,options,var_args){
var p__80869 = null;
if (arguments.length > 3) {
  p__80869 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return root_LT__GT___delegate.call(this,f,value,options,p__80869);};
root_LT__GT_.cljs$lang$maxFixedArity = 3;
root_LT__GT_.cljs$lang$applyTo = (function (arglist__80872){
var f = cljs.core.first(arglist__80872);
arglist__80872 = cljs.core.next(arglist__80872);
var value = cljs.core.first(arglist__80872);
arglist__80872 = cljs.core.next(arglist__80872);
var options = cljs.core.first(arglist__80872);
var p__80869 = cljs.core.rest(arglist__80872);
return root_LT__GT___delegate(f,value,options,p__80869);
});
root_LT__GT_.cljs$core$IFn$_invoke$arity$variadic = root_LT__GT___delegate;
return root_LT__GT_;
})()
;
/**
* Use `root>` instead of om.core/root to add support for sending events from child components to parent components only (bubbling).
* 
* > **Note**
* >
* > Similarly too `root<>`, the arity 4 version lets you specify a channel if you also want to handle events outside of
* > component hierarchy and if you pass the channel you **MUST** consume events.
*/
om_event_bus.core.root_GT_ = (function() {
var root_GT_ = null;
var root_GT___3 = (function (f,value,options){
return root_GT_.call(null,f,value,options,null);
});
var root_GT___4 = (function (f,value,options,out_event_ch){
return om_event_bus.core.root_STAR_.call(null,f,value,options,out_event_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.bubbling_router.call(null))], null),om_event_bus.core.default_protocols);
});
root_GT_ = function(f,value,options,out_event_ch){
switch(arguments.length){
case 3:
return root_GT___3.call(this,f,value,options);
case 4:
return root_GT___4.call(this,f,value,options,out_event_ch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
root_GT_.cljs$core$IFn$_invoke$arity$3 = root_GT___3;
root_GT_.cljs$core$IFn$_invoke$arity$4 = root_GT___4;
return root_GT_;
})()
;
/**
* Use `root<` instead of om.core/root to add support for sending events from parent components to child components only (trickling).
*/
om_event_bus.core.root_LT_ = (function root_LT_(f,value,options){
return om_event_bus.core.root_STAR_.call(null,f,value,options,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.trickling_router.call(null))], null),om_event_bus.core.default_protocols);
});
/**
* The `bubble` function sends an event from `owner` up to its parents.
*/
om_event_bus.core.bubble = (function bubble(owner,event){
return om_event_bus.core.trigger_STAR_.call(null,owner,new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),event);
});
om_event_bus.core.trickle = (function trickle(owner,event){
return om_event_bus.core.trigger_STAR_.call(null,owner,new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),event);
});
/**
* The `trigger` function simply bubbles an event.
*/
om_event_bus.core.trigger = (function trigger(owner,event){
return om_event_bus.core.bubble.call(null,owner,event);
});

om_event_bus.core.IGotEvent = (function (){var obj80874 = {};
return obj80874;
})();

om_event_bus.core.got_event = (function got_event(_,event){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$core$IGotEvent$got_event$arity$2;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$core$IGotEvent$got_event$arity$2(_,event);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.core.got_event[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.core.got_event["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGotEvent.got-event",_);
}
}
})().call(null,_,event);
}
});


om_event_bus.core.IGotBubblingEvent = (function (){var obj80876 = {};
return obj80876;
})();

om_event_bus.core.got_bubbling_event = (function got_bubbling_event(_,event){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$core$IGotBubblingEvent$got_bubbling_event$arity$2;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$core$IGotBubblingEvent$got_bubbling_event$arity$2(_,event);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.core.got_bubbling_event[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.core.got_bubbling_event["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGotBubblingEvent.got-bubbling-event",_);
}
}
})().call(null,_,event);
}
});


om_event_bus.core.IGotTricklingEvent = (function (){var obj80878 = {};
return obj80878;
})();

om_event_bus.core.got_trickling_event = (function got_trickling_event(_,event){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$core$IGotTricklingEvent$got_trickling_event$arity$2;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$core$IGotTricklingEvent$got_trickling_event$arity$2(_,event);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.core.got_trickling_event[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.core.got_trickling_event["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGotTricklingEvent.got-trickling-event",_);
}
}
})().call(null,_,event);
}
});


om_event_bus.core.IInitEventBus = (function (){var obj80880 = {};
return obj80880;
})();

om_event_bus.core.init_event_bus = (function init_event_bus(_){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$core$IInitEventBus$init_event_bus$arity$1;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$core$IInitEventBus$init_event_bus$arity$1(_);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.core.init_event_bus[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.core.init_event_bus["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitEventBus.init-event-bus",_);
}
}
})().call(null,_);
}
});

om_event_bus.core.default_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xform","xform",-1725711008),null,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(1)], null);




/**
* Here's what the `root*` function does:
* 
* 1. It intercepts calls to build (via `:instrument`) to pass on event buses from parent components to their
* children (via local state).
* 
* 2. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
* and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.
* 
* 3. It passes the custom descriptor to `om.core/build*`.
*/
om_event_bus.core.root_STAR_ = (function root_STAR_(f,value,options,out_event_ch,event_buses,protocols){
var descriptor = om_event_bus.descriptor.make_descriptor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (this$,super$){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,this$))){
cljs.core.println.call(null,om.core.id.call(null,this$),"will-mount");
} else {
}

om_event_bus.core.init_event_bus_BANG_.call(null,this$,protocols);

return super$.call(null);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$,super$){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,this$))){
cljs.core.println.call(null,om.core.id.call(null,this$),"will-unmount");
} else {
}

om_event_bus.core.shutdown_event_bus_BANG_.call(null,this$);

return super$.call(null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$,super$){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,this$))){
cljs.core.println.call(null,om.core.id.call(null,this$),"render");
} else {
}

var _STAR_parent_STAR_80882 = om_event_bus.core._STAR_parent_STAR_;
try{om_event_bus.core._STAR_parent_STAR_ = this$;

return super$.call(null);
}finally {om_event_bus.core._STAR_parent_STAR_ = _STAR_parent_STAR_80882;
}})], null));
if(cljs.core.truth_(out_event_ch)){
var temp__4124__auto___80883 = new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109).cljs$core$IFn$_invoke$arity$1(event_buses);
if(cljs.core.truth_(temp__4124__auto___80883)){
var bubbling_bus_80884 = temp__4124__auto___80883;
om_event_bus.impl.tap.call(null,bubbling_bus_80884,out_event_ch);
} else {
throw (new Error("Bubbling event bus not available. Make sure to use root> or root<>."));
}
} else {
}

return om.core.root.call(null,f,value,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),((function (descriptor){
return (function (f__$1,x,m){
var parent_buses = (function (){var or__3630__auto__ = (function (){var and__3618__auto__ = om_event_bus.core._STAR_parent_STAR_;
if(cljs.core.truth_(and__3618__auto__)){
return om.core.get_state.call(null,om_event_bus.core._STAR_parent_STAR_,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774));
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return event_buses;
}
})();
return om.core.build_STAR_.call(null,f__$1,x,cljs.core.merge.call(null,cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-state","init-state",1450863212)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774),parent_buses], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),descriptor], null)));
});})(descriptor))
], null)));
});
om_event_bus.core.default_protocols = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("om-event-bus.core","all","om-event-bus.core/all",1794150877),(function (p1__80885_SHARP_){
if((function (){var G__80888 = p1__80885_SHARP_;
if(G__80888){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__80888.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__80888.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__80888);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__80888);
}
})()){
return om_event_bus.core.got_event;
} else {
return null;
}
}),new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),(function (p1__80886_SHARP_){
if((function (){var G__80889 = p1__80886_SHARP_;
if(G__80889){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__80889.om_event_bus$core$IGotBubblingEvent$;
}
})())){
return true;
} else {
if((!G__80889.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotBubblingEvent,G__80889);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotBubblingEvent,G__80889);
}
})()){
return om_event_bus.core.got_bubbling_event;
} else {
return null;
}
}),new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),(function (p1__80887_SHARP_){
if((function (){var G__80890 = p1__80887_SHARP_;
if(G__80890){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__80890.om_event_bus$core$IGotTricklingEvent$;
}
})())){
return true;
} else {
if((!G__80890.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotTricklingEvent,G__80890);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotTricklingEvent,G__80890);
}
})()){
return om_event_bus.core.got_trickling_event;
} else {
return null;
}
})], null);
/**
* The `init-event-bus!` function adds support for triggering events and, if the component reified any of the supported
* protocols, the code to handle events.
* 
* This function is called from when a component mounts (see `root*`). It sets ::event-buses in the components local
* state to a map containing one or more event buses.
*/
om_event_bus.core.init_event_bus_BANG_ = (function init_event_bus_BANG_(owner,protocols){
var map__80893 = om_event_bus.core.get_config.call(null,owner);
var map__80893__$1 = ((cljs.core.seq_QMARK_.call(null,map__80893))?cljs.core.apply.call(null,cljs.core.hash_map,map__80893):map__80893);
var config = map__80893__$1;
var debug = cljs.core.get.call(null,map__80893__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var buf_or_n = cljs.core.get.call(null,map__80893__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var xform = cljs.core.get.call(null,map__80893__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
if(cljs.core.truth_(debug)){
cljs.core.println.call(null,om.core.id.call(null,owner),"init-event-bus!",(cljs.core.truth_(xform)?"+xform":null));
} else {
}

var _STAR_options_STAR_80894 = om_event_bus.impl._STAR_options_STAR_;
try{om_event_bus.impl._STAR_options_STAR_ = cljs.core.merge.call(null,om_event_bus.impl._STAR_options_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),buf_or_n,new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774),om_event_bus.core.build_buses.call(null,owner,xform,protocols));
}finally {om_event_bus.impl._STAR_options_STAR_ = _STAR_options_STAR_80894;
}});
/**
* What the `build-buses` function does does is it takes the event bus from its parent component and extends it, either
* by forking it to handle events or by creating a 'leg' of the bus with minimal overhead if the component reifies none
* of the compatible event-handling protocols.
* 
* To create a handler it composes potential handlers for supported protocols. Both `catch-all-handler` and the result
* of the application of `find-handler` can return nil but `compose-handlers` will take care of that.
*/
om_event_bus.core.build_buses = (function build_buses(owner,xform,protocols){
var catch_all_handler = om_event_bus.core.find_handler.call(null,owner,new cljs.core.Keyword("om-event-bus.core","all","om-event-bus.core/all",1794150877),protocols);
var buses = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = ((function (catch_all_handler){
return (function iter__80903(s__80904){
return (new cljs.core.LazySeq(null,((function (catch_all_handler){
return (function (){
var s__80904__$1 = s__80904;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__80904__$1);
if(temp__4126__auto__){
var s__80904__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__80904__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__80904__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__80906 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__80905 = (0);
while(true){
if((i__80905 < size__4385__auto__)){
var vec__80909 = cljs.core._nth.call(null,c__4384__auto__,i__80905);
var k = cljs.core.nth.call(null,vec__80909,(0),null);
var bus = cljs.core.nth.call(null,vec__80909,(1),null);
cljs.core.chunk_append.call(null,b__80906,(function (){var handler = om_event_bus.core.compose_handlers.call(null,catch_all_handler,om_event_bus.core.find_handler.call(null,owner,k,protocols));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(handler)?(function (){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,owner))){
cljs.core.println.call(null,om.core.id.call(null,owner),"adding fork");
} else {
}

return om_event_bus.impl.add_fork.call(null,bus,handler,xform);
})()
:(function (){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,owner))){
cljs.core.println.call(null,om.core.id.call(null,owner),"adding leg");
} else {
}

return om_event_bus.impl.add_leg.call(null,bus,xform);
})()
)], null);
})());

var G__80911 = (i__80905 + (1));
i__80905 = G__80911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80906),iter__80903.call(null,cljs.core.chunk_rest.call(null,s__80904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80906),null);
}
} else {
var vec__80910 = cljs.core.first.call(null,s__80904__$2);
var k = cljs.core.nth.call(null,vec__80910,(0),null);
var bus = cljs.core.nth.call(null,vec__80910,(1),null);
return cljs.core.cons.call(null,(function (){var handler = om_event_bus.core.compose_handlers.call(null,catch_all_handler,om_event_bus.core.find_handler.call(null,owner,k,protocols));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(handler)?(function (){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,owner))){
cljs.core.println.call(null,om.core.id.call(null,owner),"adding fork");
} else {
}

return om_event_bus.impl.add_fork.call(null,bus,handler,xform);
})()
:(function (){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,owner))){
cljs.core.println.call(null,om.core.id.call(null,owner),"adding leg");
} else {
}

return om_event_bus.impl.add_leg.call(null,bus,xform);
})()
)], null);
})(),iter__80903.call(null,cljs.core.rest.call(null,s__80904__$2)));
}
} else {
return null;
}
break;
}
});})(catch_all_handler))
,null,null));
});})(catch_all_handler))
;
return iter__4386__auto__.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774)));
})());
return buses;
});
/**
* The `find-handler` function looks up a protocol builder function in `protocol` using `bus-key` as, well,
* the key (for instance, `::bubbling`) and, if one is found, binds it to a component resulting in an event handling function.
* If the protocol isn't implemented by the `component`, the function returns nil.
*/
om_event_bus.core.find_handler = (function find_handler(owner,bus_key,protocols){
var component = om.core.children.call(null,owner);
var temp__4126__auto__ = bus_key.call(null,protocols).call(null,component);
if(cljs.core.truth_(temp__4126__auto__)){
var handler_fn = temp__4126__auto__;
if(cljs.core.not.call(null,om_event_bus.core.debug_QMARK_.call(null,owner))){
return cljs.core.partial.call(null,handler_fn,component);
} else {
return ((function (handler_fn,temp__4126__auto__,component){
return (function (event){
var G__80913 = ((((function (){var and__3618__auto__ = cljs.core.map_QMARK_.call(null,event);
if(and__3618__auto__){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
} else {
return and__3618__auto__;
}
})() instanceof cljs.core.Keyword))?(function (){var and__3618__auto__ = cljs.core.map_QMARK_.call(null,event);
if(and__3618__auto__){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
} else {
return and__3618__auto__;
}
})().fqn:null);
switch (G__80913) {
case "om-event-bus.impl/dead":
return cljs.core.println.call(null,om.core.id.call(null,owner),"Event-handling go loop has just died.");

break;
case "om-event-bus.impl/alive":
return cljs.core.println.call(null,om.core.id.call(null,owner),"Event-handling go loop is running.");

break;
default:
cljs.core.println.call(null,cljs.core.map_QMARK_.call(null,event),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event));

cljs.core.println.call(null,om.core.id.call(null,owner),"received",event);

return handler_fn.call(null,component,event);

}
});
;})(handler_fn,temp__4126__auto__,component))
}
} else {
return null;
}
});
/**
* To handle possible non-existent handlers (a.k.a. nils) this function returns either:
* 
* - an event handler calling one of more event-handing functions in `handlers` if any of the handlers is not `nil`, or
* - nil (if all `handlers` are `nil`).
* @param {...*} var_args
*/
om_event_bus.core.compose_handlers = (function() { 
var compose_handlers__delegate = function (handlers){
var temp__4126__auto__ = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,handlers));
if(cljs.core.truth_(temp__4126__auto__)){
var funs = temp__4126__auto__;
return ((function (funs,temp__4126__auto__){
return (function (event){
var seq__80919 = cljs.core.seq.call(null,funs);
var chunk__80920 = null;
var count__80921 = (0);
var i__80922 = (0);
while(true){
if((i__80922 < count__80921)){
var f = cljs.core._nth.call(null,chunk__80920,i__80922);
f.call(null,event);

var G__80923 = seq__80919;
var G__80924 = chunk__80920;
var G__80925 = count__80921;
var G__80926 = (i__80922 + (1));
seq__80919 = G__80923;
chunk__80920 = G__80924;
count__80921 = G__80925;
i__80922 = G__80926;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__80919);
if(temp__4126__auto____$1){
var seq__80919__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80919__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__80919__$1);
var G__80927 = cljs.core.chunk_rest.call(null,seq__80919__$1);
var G__80928 = c__4417__auto__;
var G__80929 = cljs.core.count.call(null,c__4417__auto__);
var G__80930 = (0);
seq__80919 = G__80927;
chunk__80920 = G__80928;
count__80921 = G__80929;
i__80922 = G__80930;
continue;
} else {
var f = cljs.core.first.call(null,seq__80919__$1);
f.call(null,event);

var G__80931 = cljs.core.next.call(null,seq__80919__$1);
var G__80932 = null;
var G__80933 = (0);
var G__80934 = (0);
seq__80919 = G__80931;
chunk__80920 = G__80932;
count__80921 = G__80933;
i__80922 = G__80934;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(funs,temp__4126__auto__))
} else {
return null;
}
};
var compose_handlers = function (var_args){
var handlers = null;
if (arguments.length > 0) {
  handlers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return compose_handlers__delegate.call(this,handlers);};
compose_handlers.cljs$lang$maxFixedArity = 0;
compose_handlers.cljs$lang$applyTo = (function (arglist__80935){
var handlers = cljs.core.seq(arglist__80935);
return compose_handlers__delegate(handlers);
});
compose_handlers.cljs$core$IFn$_invoke$arity$variadic = compose_handlers__delegate;
return compose_handlers;
})()
;
/**
* This function shuts down event bus for the component. It simply calls `shutdown` on the event bus set up in
* `init-event-bus!` above.
*/
om_event_bus.core.shutdown_event_bus_BANG_ = (function shutdown_event_bus_BANG_(owner){
if(cljs.core.truth_(om_event_bus.core.debug_QMARK_.call(null,owner))){
cljs.core.println.call(null,om.core.id.call(null,owner),"shutdown-event-bus!");
} else {
}

var seq__80942_80948 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774)));
var chunk__80943_80949 = null;
var count__80944_80950 = (0);
var i__80945_80951 = (0);
while(true){
if((i__80945_80951 < count__80944_80950)){
var vec__80946_80952 = cljs.core._nth.call(null,chunk__80943_80949,i__80945_80951);
var __80953 = cljs.core.nth.call(null,vec__80946_80952,(0),null);
var bus_80954 = cljs.core.nth.call(null,vec__80946_80952,(1),null);
om_event_bus.impl.shutdown.call(null,bus_80954);

var G__80955 = seq__80942_80948;
var G__80956 = chunk__80943_80949;
var G__80957 = count__80944_80950;
var G__80958 = (i__80945_80951 + (1));
seq__80942_80948 = G__80955;
chunk__80943_80949 = G__80956;
count__80944_80950 = G__80957;
i__80945_80951 = G__80958;
continue;
} else {
var temp__4126__auto___80959 = cljs.core.seq.call(null,seq__80942_80948);
if(temp__4126__auto___80959){
var seq__80942_80960__$1 = temp__4126__auto___80959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80942_80960__$1)){
var c__4417__auto___80961 = cljs.core.chunk_first.call(null,seq__80942_80960__$1);
var G__80962 = cljs.core.chunk_rest.call(null,seq__80942_80960__$1);
var G__80963 = c__4417__auto___80961;
var G__80964 = cljs.core.count.call(null,c__4417__auto___80961);
var G__80965 = (0);
seq__80942_80948 = G__80962;
chunk__80943_80949 = G__80963;
count__80944_80950 = G__80964;
i__80945_80951 = G__80965;
continue;
} else {
var vec__80947_80966 = cljs.core.first.call(null,seq__80942_80960__$1);
var __80967 = cljs.core.nth.call(null,vec__80947_80966,(0),null);
var bus_80968 = cljs.core.nth.call(null,vec__80947_80966,(1),null);
om_event_bus.impl.shutdown.call(null,bus_80968);

var G__80969 = cljs.core.next.call(null,seq__80942_80960__$1);
var G__80970 = null;
var G__80971 = (0);
var G__80972 = (0);
seq__80942_80948 = G__80969;
chunk__80943_80949 = G__80970;
count__80944_80950 = G__80971;
i__80945_80951 = G__80972;
continue;
}
} else {
}
}
break;
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774),null);
});
/**
* The `trigger*` function triggers an `event` for a specific component (`owner`) and a bus identified by `event-bus-key`
* (e.g. ::bubbling).
* 
* It simply looks up the event bus in ::event-buses local state and uses it to trigger an event.
*/
om_event_bus.core.trigger_STAR_ = (function trigger_STAR_(owner,event_bus_key,event){
var event_bus_80973 = event_bus_key.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774)));
om_event_bus.impl.trigger.call(null,event_bus_80973,event);

return null;
});
/**
* This function, `get-config` returns the component's event bus config. See `IInitEventBus`.
*/
om_event_bus.core.get_config = (function get_config(owner){
var c = om.core.children.call(null,owner);
return cljs.core.merge.call(null,om_event_bus.core.default_config,(((function (){var G__80975 = c;
if(G__80975){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__80975.om_event_bus$core$IInitEventBus$;
}
})())){
return true;
} else {
if((!G__80975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__80975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__80975);
}
})())?om_event_bus.core.init_event_bus.call(null,c):null));
});
/**
* The `debug` returns true if event bus debugging is turned on for the component.
*/
om_event_bus.core.debug_QMARK_ = (function debug_QMARK_(owner){
return cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(om_event_bus.core.get_config.call(null,owner)));
});

//# sourceMappingURL=core.js.map