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
var root_LT__GT___delegate = function (f,value,options,p__55418){
var vec__55420 = p__55418;
var out_event_ch = cljs.core.nth.call(null,vec__55420,(0),null);
return om_event_bus.core.root_STAR_.call(null,f,value,options,out_event_ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.bubbling_router.call(null)),new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),om_event_bus.impl.event_bus.call(null,om_event_bus.impl.trickling_router.call(null))], null),om_event_bus.core.default_protocols);
};
var root_LT__GT_ = function (f,value,options,var_args){
var p__55418 = null;
if (arguments.length > 3) {
  p__55418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return root_LT__GT___delegate.call(this,f,value,options,p__55418);};
root_LT__GT_.cljs$lang$maxFixedArity = 3;
root_LT__GT_.cljs$lang$applyTo = (function (arglist__55421){
var f = cljs.core.first(arglist__55421);
arglist__55421 = cljs.core.next(arglist__55421);
var value = cljs.core.first(arglist__55421);
arglist__55421 = cljs.core.next(arglist__55421);
var options = cljs.core.first(arglist__55421);
var p__55418 = cljs.core.rest(arglist__55421);
return root_LT__GT___delegate(f,value,options,p__55418);
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

om_event_bus.core.IGotEvent = (function (){var obj55423 = {};
return obj55423;
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


om_event_bus.core.IGotBubblingEvent = (function (){var obj55425 = {};
return obj55425;
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


om_event_bus.core.IGotTricklingEvent = (function (){var obj55427 = {};
return obj55427;
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


om_event_bus.core.IInitEventBus = (function (){var obj55429 = {};
return obj55429;
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

var _STAR_parent_STAR_55431 = om_event_bus.core._STAR_parent_STAR_;
try{om_event_bus.core._STAR_parent_STAR_ = this$;

return super$.call(null);
}finally {om_event_bus.core._STAR_parent_STAR_ = _STAR_parent_STAR_55431;
}})], null));
if(cljs.core.truth_(out_event_ch)){
var temp__4124__auto___55432 = new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109).cljs$core$IFn$_invoke$arity$1(event_buses);
if(cljs.core.truth_(temp__4124__auto___55432)){
var bubbling_bus_55433 = temp__4124__auto___55432;
om_event_bus.impl.tap.call(null,bubbling_bus_55433,out_event_ch);
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
om_event_bus.core.default_protocols = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("om-event-bus.core","all","om-event-bus.core/all",1794150877),(function (p1__55434_SHARP_){
if((function (){var G__55437 = p1__55434_SHARP_;
if(G__55437){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__55437.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__55437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__55437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__55437);
}
})()){
return om_event_bus.core.got_event;
} else {
return null;
}
}),new cljs.core.Keyword("om-event-bus.core","bubbling","om-event-bus.core/bubbling",792096109),(function (p1__55435_SHARP_){
if((function (){var G__55438 = p1__55435_SHARP_;
if(G__55438){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__55438.om_event_bus$core$IGotBubblingEvent$;
}
})())){
return true;
} else {
if((!G__55438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotBubblingEvent,G__55438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotBubblingEvent,G__55438);
}
})()){
return om_event_bus.core.got_bubbling_event;
} else {
return null;
}
}),new cljs.core.Keyword("om-event-bus.core","trickling","om-event-bus.core/trickling",860880220),(function (p1__55436_SHARP_){
if((function (){var G__55439 = p1__55436_SHARP_;
if(G__55439){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__55439.om_event_bus$core$IGotTricklingEvent$;
}
})())){
return true;
} else {
if((!G__55439.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotTricklingEvent,G__55439);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotTricklingEvent,G__55439);
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
var map__55442 = om_event_bus.core.get_config.call(null,owner);
var map__55442__$1 = ((cljs.core.seq_QMARK_.call(null,map__55442))?cljs.core.apply.call(null,cljs.core.hash_map,map__55442):map__55442);
var config = map__55442__$1;
var debug = cljs.core.get.call(null,map__55442__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var buf_or_n = cljs.core.get.call(null,map__55442__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var xform = cljs.core.get.call(null,map__55442__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
if(cljs.core.truth_(debug)){
cljs.core.println.call(null,om.core.id.call(null,owner),"init-event-bus!",(cljs.core.truth_(xform)?"+xform":null));
} else {
}

var _STAR_options_STAR_55443 = om_event_bus.impl._STAR_options_STAR_;
try{om_event_bus.impl._STAR_options_STAR_ = cljs.core.merge.call(null,om_event_bus.impl._STAR_options_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),buf_or_n,new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774),om_event_bus.core.build_buses.call(null,owner,xform,protocols));
}finally {om_event_bus.impl._STAR_options_STAR_ = _STAR_options_STAR_55443;
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
return (function iter__55452(s__55453){
return (new cljs.core.LazySeq(null,((function (catch_all_handler){
return (function (){
var s__55453__$1 = s__55453;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55453__$1);
if(temp__4126__auto__){
var s__55453__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55453__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__55453__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__55455 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__55454 = (0);
while(true){
if((i__55454 < size__4385__auto__)){
var vec__55458 = cljs.core._nth.call(null,c__4384__auto__,i__55454);
var k = cljs.core.nth.call(null,vec__55458,(0),null);
var bus = cljs.core.nth.call(null,vec__55458,(1),null);
cljs.core.chunk_append.call(null,b__55455,(function (){var handler = om_event_bus.core.compose_handlers.call(null,catch_all_handler,om_event_bus.core.find_handler.call(null,owner,k,protocols));
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

var G__55460 = (i__55454 + (1));
i__55454 = G__55460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55455),iter__55452.call(null,cljs.core.chunk_rest.call(null,s__55453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55455),null);
}
} else {
var vec__55459 = cljs.core.first.call(null,s__55453__$2);
var k = cljs.core.nth.call(null,vec__55459,(0),null);
var bus = cljs.core.nth.call(null,vec__55459,(1),null);
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
})(),iter__55452.call(null,cljs.core.rest.call(null,s__55453__$2)));
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
var G__55462 = ((((function (){var and__3618__auto__ = cljs.core.map_QMARK_.call(null,event);
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
switch (G__55462) {
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
var seq__55468 = cljs.core.seq.call(null,funs);
var chunk__55469 = null;
var count__55470 = (0);
var i__55471 = (0);
while(true){
if((i__55471 < count__55470)){
var f = cljs.core._nth.call(null,chunk__55469,i__55471);
f.call(null,event);

var G__55472 = seq__55468;
var G__55473 = chunk__55469;
var G__55474 = count__55470;
var G__55475 = (i__55471 + (1));
seq__55468 = G__55472;
chunk__55469 = G__55473;
count__55470 = G__55474;
i__55471 = G__55475;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__55468);
if(temp__4126__auto____$1){
var seq__55468__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55468__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__55468__$1);
var G__55476 = cljs.core.chunk_rest.call(null,seq__55468__$1);
var G__55477 = c__4417__auto__;
var G__55478 = cljs.core.count.call(null,c__4417__auto__);
var G__55479 = (0);
seq__55468 = G__55476;
chunk__55469 = G__55477;
count__55470 = G__55478;
i__55471 = G__55479;
continue;
} else {
var f = cljs.core.first.call(null,seq__55468__$1);
f.call(null,event);

var G__55480 = cljs.core.next.call(null,seq__55468__$1);
var G__55481 = null;
var G__55482 = (0);
var G__55483 = (0);
seq__55468 = G__55480;
chunk__55469 = G__55481;
count__55470 = G__55482;
i__55471 = G__55483;
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
compose_handlers.cljs$lang$applyTo = (function (arglist__55484){
var handlers = cljs.core.seq(arglist__55484);
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

var seq__55491_55497 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774)));
var chunk__55492_55498 = null;
var count__55493_55499 = (0);
var i__55494_55500 = (0);
while(true){
if((i__55494_55500 < count__55493_55499)){
var vec__55495_55501 = cljs.core._nth.call(null,chunk__55492_55498,i__55494_55500);
var __55502 = cljs.core.nth.call(null,vec__55495_55501,(0),null);
var bus_55503 = cljs.core.nth.call(null,vec__55495_55501,(1),null);
om_event_bus.impl.shutdown.call(null,bus_55503);

var G__55504 = seq__55491_55497;
var G__55505 = chunk__55492_55498;
var G__55506 = count__55493_55499;
var G__55507 = (i__55494_55500 + (1));
seq__55491_55497 = G__55504;
chunk__55492_55498 = G__55505;
count__55493_55499 = G__55506;
i__55494_55500 = G__55507;
continue;
} else {
var temp__4126__auto___55508 = cljs.core.seq.call(null,seq__55491_55497);
if(temp__4126__auto___55508){
var seq__55491_55509__$1 = temp__4126__auto___55508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55491_55509__$1)){
var c__4417__auto___55510 = cljs.core.chunk_first.call(null,seq__55491_55509__$1);
var G__55511 = cljs.core.chunk_rest.call(null,seq__55491_55509__$1);
var G__55512 = c__4417__auto___55510;
var G__55513 = cljs.core.count.call(null,c__4417__auto___55510);
var G__55514 = (0);
seq__55491_55497 = G__55511;
chunk__55492_55498 = G__55512;
count__55493_55499 = G__55513;
i__55494_55500 = G__55514;
continue;
} else {
var vec__55496_55515 = cljs.core.first.call(null,seq__55491_55509__$1);
var __55516 = cljs.core.nth.call(null,vec__55496_55515,(0),null);
var bus_55517 = cljs.core.nth.call(null,vec__55496_55515,(1),null);
om_event_bus.impl.shutdown.call(null,bus_55517);

var G__55518 = cljs.core.next.call(null,seq__55491_55509__$1);
var G__55519 = null;
var G__55520 = (0);
var G__55521 = (0);
seq__55491_55497 = G__55518;
chunk__55492_55498 = G__55519;
count__55493_55499 = G__55520;
i__55494_55500 = G__55521;
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
var event_bus_55522 = event_bus_key.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","event-buses","om-event-bus.core/event-buses",595975774)));
om_event_bus.impl.trigger.call(null,event_bus_55522,event);

return null;
});
/**
* This function, `get-config` returns the component's event bus config. See `IInitEventBus`.
*/
om_event_bus.core.get_config = (function get_config(owner){
var c = om.core.children.call(null,owner);
return cljs.core.merge.call(null,om_event_bus.core.default_config,(((function (){var G__55524 = c;
if(G__55524){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__55524.om_event_bus$core$IInitEventBus$;
}
})())){
return true;
} else {
if((!G__55524.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__55524);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__55524);
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