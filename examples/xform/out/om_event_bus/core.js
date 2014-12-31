// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');




om_event_bus.core.IGotEvent = (function (){var obj13859 = {};
return obj13859;
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


om_event_bus.core.IInitEventBus = (function (){var obj13861 = {};
return obj13861;
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
return (function (state_13900){
var state_val_13901 = (state_13900[(1)]);
if((state_val_13901 === (7))){
var inst_13896 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
var statearr_13902_13916 = state_13900__$1;
(statearr_13902_13916[(2)] = inst_13896);

(statearr_13902_13916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (6))){
var state_13900__$1 = state_13900;
var statearr_13903_13917 = state_13900__$1;
(statearr_13903_13917[(2)] = null);

(statearr_13903_13917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (5))){
var state_13900__$1 = state_13900;
var statearr_13904_13918 = state_13900__$1;
(statearr_13904_13918[(2)] = null);

(statearr_13904_13918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (4))){
var inst_13891 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
if(cljs.core.truth_(inst_13891)){
var statearr_13905_13919 = state_13900__$1;
(statearr_13905_13919[(1)] = (5));

} else {
var statearr_13906_13920 = state_13900__$1;
(statearr_13906_13920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (3))){
var inst_13898 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13900__$1,inst_13898);
} else {
if((state_val_13901 === (2))){
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13900__$1,(4),event_bus);
} else {
if((state_val_13901 === (1))){
var state_13900__$1 = state_13900;
var statearr_13907_13921 = state_13900__$1;
(statearr_13907_13921[(2)] = null);

(statearr_13907_13921[(1)] = (2));


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
var statearr_13911 = [null,null,null,null,null,null,null];
(statearr_13911[(0)] = state_machine__5855__auto__);

(statearr_13911[(1)] = (1));

return statearr_13911;
});
var state_machine__5855__auto____1 = (function (state_13900){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13912){if((e13912 instanceof Object)){
var ex__5858__auto__ = e13912;
var statearr_13913_13922 = state_13900;
(statearr_13913_13922[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13923 = state_13900;
state_13900 = G__13923;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13900){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,event_bus))
})();
var state__5871__auto__ = (function (){var statearr_13914 = f__5870__auto__.call(null);
(statearr_13914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_13914;
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
var _STAR_parent_STAR_13915 = om_event_bus.core._STAR_parent_STAR_;
try{om_event_bus.core._STAR_parent_STAR_ = this$;

return super$.call(null);
}finally {om_event_bus.core._STAR_parent_STAR_ = _STAR_parent_STAR_13915;
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
var trigger_fn_13924 = om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977));
trigger_fn_13924.call(null,event);

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
var map__13979 = cljs.core.merge.call(null,om_event_bus.core.default_config,(((function (){var G__13980 = c;
if(G__13980){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__13980.om_event_bus$core$IInitEventBus$;
}
})())){
return true;
} else {
if((!G__13980.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__13980);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__13980);
}
})())?(function (){var or__3630__auto__ = om_event_bus.core.init_event_bus.call(null,c);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})():null));
var map__13979__$1 = ((cljs.core.seq_QMARK_.call(null,map__13979))?cljs.core.apply.call(null,cljs.core.hash_map,map__13979):map__13979);
var buf_or_n = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var xform = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977),((function (downstream,c,map__13979,map__13979__$1,buf_or_n,xform){
return (function (event){
return cljs.core.async.put_BANG_.call(null,downstream,om_event_bus.core.maybe_apply_xform.call(null,xform,event));
});})(downstream,c,map__13979,map__13979__$1,buf_or_n,xform))
);

if(cljs.core.truth_((function (){var or__3630__auto__ = (function (){var G__13982 = c;
if(G__13982){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__13982.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__13982.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__13982);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__13982);
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
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","close-fn","om-event-bus.core/close-fn",-75492433),((function (upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform){
return (function (){
cljs.core.async.untap_all.call(null,fork);

cljs.core.async.close_BANG_.call(null,upstream);

return cljs.core.async.close_BANG_.call(null,branch);
});})(upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform))
);

om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742),upstream);

cljs.core.async.tap.call(null,fork,downstream);

if((function (){var G__13983 = c;
if(G__13983){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__13983.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__13983.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__13983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__13983);
}
})()){
cljs.core.async.tap.call(null,fork,branch);

var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform){
return (function (state_14011){
var state_val_14012 = (state_14011[(1)]);
if((state_val_14012 === (7))){
var inst_14007 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
var statearr_14013_14033 = state_14011__$1;
(statearr_14013_14033[(2)] = inst_14007);

(statearr_14013_14033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (1))){
var state_14011__$1 = state_14011;
var statearr_14014_14034 = state_14011__$1;
(statearr_14014_14034[(2)] = null);

(statearr_14014_14034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (4))){
var inst_13992 = (state_14011[(7)]);
var inst_13991 = (state_14011[(2)]);
var inst_13992__$1 = cljs.core.nth.call(null,inst_13991,(0),null);
var inst_13993 = cljs.core.nth.call(null,inst_13991,(1),null);
var state_14011__$1 = (function (){var statearr_14015 = state_14011;
(statearr_14015[(7)] = inst_13992__$1);

(statearr_14015[(8)] = inst_13993);

return statearr_14015;
})();
if(cljs.core.truth_(inst_13992__$1)){
var statearr_14016_14035 = state_14011__$1;
(statearr_14016_14035[(1)] = (5));

} else {
var statearr_14017_14036 = state_14011__$1;
(statearr_14017_14036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (6))){
var inst_13993 = (state_14011[(8)]);
var inst_13998 = cljs.core.not_EQ_.call(null,inst_13993,branch);
var state_14011__$1 = state_14011;
if(inst_13998){
var statearr_14018_14037 = state_14011__$1;
(statearr_14018_14037[(1)] = (8));

} else {
var statearr_14019_14038 = state_14011__$1;
(statearr_14019_14038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (3))){
var inst_14009 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14011__$1,inst_14009);
} else {
if((state_val_14012 === (2))){
var inst_13986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13987 = cljs.core.async.timeout.call(null,(5000));
var inst_13988 = [branch,inst_13987];
var inst_13989 = (new cljs.core.PersistentVector(null,2,(5),inst_13986,inst_13988,null));
var state_14011__$1 = state_14011;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14011__$1,(4),inst_13989);
} else {
if((state_val_14012 === (9))){
var state_14011__$1 = state_14011;
var statearr_14020_14039 = state_14011__$1;
(statearr_14020_14039[(2)] = null);

(statearr_14020_14039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (5))){
var inst_13992 = (state_14011[(7)]);
var inst_13995 = om_event_bus.core.got_event.call(null,c,inst_13992);
var state_14011__$1 = (function (){var statearr_14021 = state_14011;
(statearr_14021[(9)] = inst_13995);

return statearr_14021;
})();
var statearr_14022_14040 = state_14011__$1;
(statearr_14022_14040[(2)] = null);

(statearr_14022_14040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (10))){
var inst_14005 = (state_14011[(2)]);
var state_14011__$1 = state_14011;
var statearr_14023_14041 = state_14011__$1;
(statearr_14023_14041[(2)] = inst_14005);

(statearr_14023_14041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14012 === (8))){
var inst_14000 = om.core.id.call(null,this$);
var inst_14001 = om_event_bus.core.trace.call(null,inst_14000,"is listening...");
var state_14011__$1 = (function (){var statearr_14024 = state_14011;
(statearr_14024[(10)] = inst_14001);

return statearr_14024;
})();
var statearr_14025_14042 = state_14011__$1;
(statearr_14025_14042[(2)] = null);

(statearr_14025_14042[(1)] = (2));


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
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform))
;
return ((function (switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14029[(0)] = state_machine__5855__auto__);

(statearr_14029[(1)] = (1));

return statearr_14029;
});
var state_machine__5855__auto____1 = (function (state_14011){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14030){if((e14030 instanceof Object)){
var ex__5858__auto__ = e14030;
var statearr_14031_14043 = state_14011;
(statearr_14031_14043[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14044 = state_14011;
state_14011 = G__14044;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14011){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform))
})();
var state__5871__auto__ = (function (){var statearr_14032 = f__5870__auto__.call(null);
(statearr_14032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_14032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__13979,map__13979__$1,buf_or_n,xform))
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
if((function (){var G__14046 = c;
if(G__14046){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__14046.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__14046.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__14046);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__14046);
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
var G__14056 = cljs.core.seq.call(null,new_methods);
var vec__14057 = G__14056;
var vec__14058 = cljs.core.nth.call(null,vec__14057,(0),null);
var new_method_name = cljs.core.nth.call(null,vec__14058,(0),null);
var new_method_fn = cljs.core.nth.call(null,vec__14058,(1),null);
var new_methods_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__14057,(1));
var methods_SINGLEQUOTE___$1 = methods_SINGLEQUOTE_;
var G__14056__$1 = G__14056;
while(true){
var methods_SINGLEQUOTE___$2 = methods_SINGLEQUOTE___$1;
var vec__14059 = G__14056__$1;
var vec__14060 = cljs.core.nth.call(null,vec__14059,(0),null);
var new_method_name__$1 = cljs.core.nth.call(null,vec__14060,(0),null);
var new_method_fn__$1 = cljs.core.nth.call(null,vec__14060,(1),null);
var new_methods_SINGLEQUOTE___$1 = cljs.core.nthnext.call(null,vec__14059,(1));
if(cljs.core.truth_(new_method_name__$1)){
var G__14061 = om_event_bus.core.around_method.call(null,new_method_name__$1,methods_SINGLEQUOTE___$2,new_method_fn__$1);
var G__14062 = new_methods_SINGLEQUOTE___$1;
methods_SINGLEQUOTE___$1 = G__14061;
G__14056__$1 = G__14062;
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
trace.cljs$lang$applyTo = (function (arglist__14063){
var args = cljs.core.seq(arglist__14063);
return trace__delegate(args);
});
trace.cljs$core$IFn$_invoke$arity$variadic = trace__delegate;
return trace;
})()
;

//# sourceMappingURL=core.js.map