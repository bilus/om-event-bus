// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');




om_event_bus.core.IGotEvent = (function (){var obj18882 = {};
return obj18882;
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


om_event_bus.core.IInitEventBus = (function (){var obj18884 = {};
return obj18884;
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
om_event_bus.core._STAR_parent_STAR_ = null;
/**
* Use `root>` instead of om.core/root to add support for event bus functionality to all components.
* 
* The arity 4 version lets you specify the channel if you also want to handle events outside of component hierarchy.
* 
* **IMPORTANT:** If you pass your own event bus channel, you **MUST** consume events.
* 
* What the `root>` function does is in the essence two things:
* 
* 1. It creates a custom descriptor to add functionality on top of the existing React.js lifecycle methods to set up
* and tear down the event bus for a component and to bind `*parent*` to be used in the `:instrument` function.
* 
* 2. It intercepts calls to build (via `:instrument`) to pass on event bus channels from parent components to their
* children (via local state).
*/
om_event_bus.core.root_GT_ = (function() {
var root_GT_ = null;
var root_GT___3 = (function (f,value,options){
var event_bus = cljs.core.async.chan.call(null,(1));
root_GT_.call(null,f,value,options,event_bus);

var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,event_bus){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,event_bus){
return (function (state_18923){
var state_val_18924 = (state_18923[(1)]);
if((state_val_18924 === (7))){
var inst_18919 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
var statearr_18925_18939 = state_18923__$1;
(statearr_18925_18939[(2)] = inst_18919);

(statearr_18925_18939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (6))){
var state_18923__$1 = state_18923;
var statearr_18926_18940 = state_18923__$1;
(statearr_18926_18940[(2)] = null);

(statearr_18926_18940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (5))){
var state_18923__$1 = state_18923;
var statearr_18927_18941 = state_18923__$1;
(statearr_18927_18941[(2)] = null);

(statearr_18927_18941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (4))){
var inst_18914 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
if(cljs.core.truth_(inst_18914)){
var statearr_18928_18942 = state_18923__$1;
(statearr_18928_18942[(1)] = (5));

} else {
var statearr_18929_18943 = state_18923__$1;
(statearr_18929_18943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18924 === (3))){
var inst_18921 = (state_18923[(2)]);
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18923__$1,inst_18921);
} else {
if((state_val_18924 === (2))){
var state_18923__$1 = state_18923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18923__$1,(4),event_bus);
} else {
if((state_val_18924 === (1))){
var state_18923__$1 = state_18923;
var statearr_18930_18944 = state_18923__$1;
(statearr_18930_18944[(2)] = null);

(statearr_18930_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__5869__auto__,event_bus))
;
return ((function (switch__5854__auto__,c__5869__auto__,event_bus){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_18934 = [null,null,null,null,null,null,null];
(statearr_18934[(0)] = state_machine__5855__auto__);

(statearr_18934[(1)] = (1));

return statearr_18934;
});
var state_machine__5855__auto____1 = (function (state_18923){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_18923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e18935){if((e18935 instanceof Object)){
var ex__5858__auto__ = e18935;
var statearr_18936_18945 = state_18923;
(statearr_18936_18945[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18946 = state_18923;
state_18923 = G__18946;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_18923){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_18923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,event_bus))
})();
var state__5871__auto__ = (function (){var statearr_18937 = f__5870__auto__.call(null);
(statearr_18937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_18937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__,event_bus))
);

return c__5869__auto__;
});
var root_GT___4 = (function (f,value,options,event_bus){
return om.core.root.call(null,f,value,cljs.core.merge.call(null,options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_event_bus.core.make_descriptor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (this$,super$){
om_event_bus.core.init_event_bus_BANG_.call(null,this$);

return super$.call(null);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (this$,super$){
om_event_bus.core.shutdown_event_bus_BANG_.call(null,this$);

return super$.call(null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$,super$){
var _STAR_parent_STAR_18938 = om_event_bus.core._STAR_parent_STAR_;
try{om_event_bus.core._STAR_parent_STAR_ = this$;

return super$.call(null);
}finally {om_event_bus.core._STAR_parent_STAR_ = _STAR_parent_STAR_18938;
}})], null)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (f__$1,x,m){
var parent_bus = (function (){var or__3630__auto__ = (function (){var and__3618__auto__ = om_event_bus.core._STAR_parent_STAR_;
if(cljs.core.truth_(and__3618__auto__)){
return om.core.get_state.call(null,om_event_bus.core._STAR_parent_STAR_,new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742));
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return event_bus;
}
})();
return om.core.build_STAR_.call(null,f__$1,x,cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-state","init-state",1450863212)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742),parent_bus], null)));
})], null)));
});
root_GT_ = function(f,value,options,event_bus){
switch(arguments.length){
case 3:
return root_GT___3.call(this,f,value,options);
case 4:
return root_GT___4.call(this,f,value,options,event_bus);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
root_GT_.cljs$core$IFn$_invoke$arity$3 = root_GT___3;
root_GT_.cljs$core$IFn$_invoke$arity$4 = root_GT___4;
return root_GT_;
})()
;
/**
* This function sends an event from the component down through its parent components.
* 
* Note that `event` can be any data structure, there are no restrictions in this respect though for future compatibility,
* a map is recommended.
*/
om_event_bus.core.trigger = (function trigger(owner,event){
var trigger_fn_18947 = om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977));
trigger_fn_18947.call(null,event);

return null;
});
/**
* This function adds support for triggering events and, if the component reified IGotEvent, support for handling events
* from child components.
* 
* It is called from when a component mounts (see `root>` above).
* 
* What it does is it takes the event bus from its parent component (`downstream`) and using `core.async/mult`
* it taps into it to fork it into two branches: `branch` this component may use to handle events and
* `upstream` to pass on to child components (see `root>` above).
* 
* It does sets the local state:
* ::trigger-fn  -  function that triggers an event;
* ::event-bus   -  core.async channel to be passed to the component's children (see `root>` above).
* 
* **IMPORTANT:** Do not use the local state values directly; they are for internal use only.
* 
* Please note that this mult/tap magic happens only if the component reifies the `IGotEvent` protocol and, to some
* extend, for `IInitEventBus` protocol as well. For components that don't care about events, overhead is minimal.
*/
om_event_bus.core.init_event_bus_BANG_ = (function init_event_bus_BANG_(this$){
om_event_bus.core.trace.call(null,"Initializing event bus for",om.core.id.call(null,this$));

var downstream = om.core.get_state.call(null,this$,new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742));
var c = om.core.children.call(null,this$);
var map__19002 = cljs.core.merge.call(null,om_event_bus.core.default_config,(((function (){var G__19003 = c;
if(G__19003){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__19003.om_event_bus$core$IInitEventBus$;
}
})())){
return true;
} else {
if((!G__19003.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__19003);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__19003);
}
})())?(function (){var or__3630__auto__ = om_event_bus.core.init_event_bus.call(null,c);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})():null));
var map__19002__$1 = ((cljs.core.seq_QMARK_.call(null,map__19002))?cljs.core.apply.call(null,cljs.core.hash_map,map__19002):map__19002);
var buf_or_n = cljs.core.get.call(null,map__19002__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var xform = cljs.core.get.call(null,map__19002__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977),((function (downstream,c,map__19002,map__19002__$1,buf_or_n,xform){
return (function (event){
return cljs.core.async.put_BANG_.call(null,downstream,om_event_bus.core.maybe_apply_xform.call(null,xform,event));
});})(downstream,c,map__19002,map__19002__$1,buf_or_n,xform))
);

if(cljs.core.truth_((function (){var or__3630__auto__ = (function (){var G__19005 = c;
if(G__19005){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__19005.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__19005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19005);
}
})();
if(or__3630__auto__){
return or__3630__auto__;
} else {
return xform;
}
})())){
var upstream = cljs.core.async.chan.call(null,buf_or_n,xform);
var branch = cljs.core.async.chan.call(null,buf_or_n);
var fork = cljs.core.async.mult.call(null,upstream);
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","close-fn","om-event-bus.core/close-fn",-75492433),((function (upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform){
return (function (){
cljs.core.async.untap_all.call(null,fork);

cljs.core.async.close_BANG_.call(null,upstream);

return cljs.core.async.close_BANG_.call(null,branch);
});})(upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform))
);

om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742),upstream);

cljs.core.async.tap.call(null,fork,downstream);

if((function (){var G__19006 = c;
if(G__19006){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__19006.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__19006.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19006);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19006);
}
})()){
cljs.core.async.tap.call(null,fork,branch);

var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform){
return (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19036_19056 = state_19034__$1;
(statearr_19036_19056[(2)] = inst_19030);

(statearr_19036_19056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (1))){
var state_19034__$1 = state_19034;
var statearr_19037_19057 = state_19034__$1;
(statearr_19037_19057[(2)] = null);

(statearr_19037_19057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (4))){
var inst_19015 = (state_19034[(7)]);
var inst_19014 = (state_19034[(2)]);
var inst_19015__$1 = cljs.core.nth.call(null,inst_19014,(0),null);
var inst_19016 = cljs.core.nth.call(null,inst_19014,(1),null);
var state_19034__$1 = (function (){var statearr_19038 = state_19034;
(statearr_19038[(8)] = inst_19016);

(statearr_19038[(7)] = inst_19015__$1);

return statearr_19038;
})();
if(cljs.core.truth_(inst_19015__$1)){
var statearr_19039_19058 = state_19034__$1;
(statearr_19039_19058[(1)] = (5));

} else {
var statearr_19040_19059 = state_19034__$1;
(statearr_19040_19059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (6))){
var inst_19016 = (state_19034[(8)]);
var inst_19021 = cljs.core.not_EQ_.call(null,inst_19016,branch);
var state_19034__$1 = state_19034;
if(inst_19021){
var statearr_19041_19060 = state_19034__$1;
(statearr_19041_19060[(1)] = (8));

} else {
var statearr_19042_19061 = state_19034__$1;
(statearr_19042_19061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (2))){
var inst_19009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19010 = cljs.core.async.timeout.call(null,(5000));
var inst_19011 = [branch,inst_19010];
var inst_19012 = (new cljs.core.PersistentVector(null,2,(5),inst_19009,inst_19011,null));
var state_19034__$1 = state_19034;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19034__$1,(4),inst_19012);
} else {
if((state_val_19035 === (9))){
var state_19034__$1 = state_19034;
var statearr_19043_19062 = state_19034__$1;
(statearr_19043_19062[(2)] = null);

(statearr_19043_19062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (5))){
var inst_19015 = (state_19034[(7)]);
var inst_19018 = om_event_bus.core.got_event.call(null,c,inst_19015);
var state_19034__$1 = (function (){var statearr_19044 = state_19034;
(statearr_19044[(9)] = inst_19018);

return statearr_19044;
})();
var statearr_19045_19063 = state_19034__$1;
(statearr_19045_19063[(2)] = null);

(statearr_19045_19063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (10))){
var inst_19028 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19046_19064 = state_19034__$1;
(statearr_19046_19064[(2)] = inst_19028);

(statearr_19046_19064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (8))){
var inst_19023 = om.core.id.call(null,this$);
var inst_19024 = om_event_bus.core.trace.call(null,inst_19023,"is listening...");
var state_19034__$1 = (function (){var statearr_19047 = state_19034;
(statearr_19047[(10)] = inst_19024);

return statearr_19047;
})();
var statearr_19048_19065 = state_19034__$1;
(statearr_19048_19065[(2)] = null);

(statearr_19048_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform))
;
return ((function (switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = state_machine__5855__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var state_machine__5855__auto____1 = (function (state_19034){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_19034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e19053){if((e19053 instanceof Object)){
var ex__5858__auto__ = e19053;
var statearr_19054_19066 = state_19034;
(statearr_19054_19066[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19067 = state_19034;
state_19034 = G__19067;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform))
})();
var state__5871__auto__ = (function (){var statearr_19055 = f__5870__auto__.call(null);
(statearr_19055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_19055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__19002,map__19002__$1,buf_or_n,xform))
);

return c__5869__auto__;
} else {
return null;
}
} else {
return null;
}
});
/**
* This function mainly shuts down event bus channels for this component.
* It simply calls `::close-fn` set up in `init-event-bus!` above. This also terminates `go-loop` handling events.
*/
om_event_bus.core.shutdown_event_bus_BANG_ = (function shutdown_event_bus_BANG_(this$){
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977),(function (){
throw (new Error("Event bus has already been shut down."));
}));

var c = om.core.children.call(null,this$);
var close_fn = om.core.get_state.call(null,this$,new cljs.core.Keyword("om-event-bus.core","close-fn","om-event-bus.core/close-fn",-75492433));
if((function (){var G__19069 = c;
if(G__19069){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__19069.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__19069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__19069);
}
})()){
om_event_bus.core.trace.call(null,"Shutting down event bus for",om.core.id.call(null,this$));

return close_fn.call(null);
} else {
return null;
}
});
/**
* For an xform it returns the result of applying xform to an event.
* If xform is nil it returns unmodified event.
*/
om_event_bus.core.maybe_apply_xform = (function maybe_apply_xform(xform,event){
if(cljs.core.truth_(xform)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,xform.call(null,cljs.core.conj),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)));
} else {
return event;
}
});
/**
* Overrides a pure method by wrapping it in f.
*/
om_event_bus.core.around_method = (function around_method(method,methods$,f){
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
* Given pure methods and a map of overrides, it extends pure methods with new lifecycle methods.
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
om_event_bus.core.extend_pure_methods = (function() {
var extend_pure_methods = null;
var extend_pure_methods__1 = (function (new_methods){
return extend_pure_methods.call(null,om.core.pure_methods,new_methods);
});
var extend_pure_methods__2 = (function (methods$,new_methods){
var methods_SINGLEQUOTE_ = methods$;
var G__19079 = cljs.core.seq.call(null,new_methods);
var vec__19080 = G__19079;
var vec__19081 = cljs.core.nth.call(null,vec__19080,(0),null);
var new_method_name = cljs.core.nth.call(null,vec__19081,(0),null);
var new_method_fn = cljs.core.nth.call(null,vec__19081,(1),null);
var new_methods_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__19080,(1));
var methods_SINGLEQUOTE___$1 = methods_SINGLEQUOTE_;
var G__19079__$1 = G__19079;
while(true){
var methods_SINGLEQUOTE___$2 = methods_SINGLEQUOTE___$1;
var vec__19082 = G__19079__$1;
var vec__19083 = cljs.core.nth.call(null,vec__19082,(0),null);
var new_method_name__$1 = cljs.core.nth.call(null,vec__19083,(0),null);
var new_method_fn__$1 = cljs.core.nth.call(null,vec__19083,(1),null);
var new_methods_SINGLEQUOTE___$1 = cljs.core.nthnext.call(null,vec__19082,(1));
if(cljs.core.truth_(new_method_name__$1)){
var G__19084 = om_event_bus.core.around_method.call(null,new_method_name__$1,methods_SINGLEQUOTE___$2,new_method_fn__$1);
var G__19085 = new_methods_SINGLEQUOTE___$1;
methods_SINGLEQUOTE___$1 = G__19084;
G__19079__$1 = G__19085;
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
* Creates a custom descriptor with support for an event bus.
*/
om_event_bus.core.make_descriptor = (function make_descriptor(new_methods){
var methods$ = om_event_bus.core.extend_pure_methods.call(null,new_methods);
var descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,methods$));
return descriptor;
});
/**
* @param {...*} var_args
*/
om_event_bus.core.trace = (function() { 
var trace__delegate = function (args){
return null;
};
var trace = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return trace__delegate.call(this,args);};
trace.cljs$lang$maxFixedArity = 0;
trace.cljs$lang$applyTo = (function (arglist__19086){
var args = cljs.core.seq(arglist__19086);
return trace__delegate(args);
});
trace.cljs$core$IFn$_invoke$arity$variadic = trace__delegate;
return trace;
})()
;

//# sourceMappingURL=core.js.map