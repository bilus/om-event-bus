// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');




om_event_bus.core.IGotEvent = (function (){var obj27728 = {};
return obj27728;
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


om_event_bus.core.IInitEventBus = (function (){var obj27730 = {};
return obj27730;
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
return (function (state_27769){
var state_val_27770 = (state_27769[(1)]);
if((state_val_27770 === (7))){
var inst_27765 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
var statearr_27771_27785 = state_27769__$1;
(statearr_27771_27785[(2)] = inst_27765);

(statearr_27771_27785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (6))){
var state_27769__$1 = state_27769;
var statearr_27772_27786 = state_27769__$1;
(statearr_27772_27786[(2)] = null);

(statearr_27772_27786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (5))){
var state_27769__$1 = state_27769;
var statearr_27773_27787 = state_27769__$1;
(statearr_27773_27787[(2)] = null);

(statearr_27773_27787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (4))){
var inst_27760 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
if(cljs.core.truth_(inst_27760)){
var statearr_27774_27788 = state_27769__$1;
(statearr_27774_27788[(1)] = (5));

} else {
var statearr_27775_27789 = state_27769__$1;
(statearr_27775_27789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (3))){
var inst_27767 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27769__$1,inst_27767);
} else {
if((state_val_27770 === (2))){
var state_27769__$1 = state_27769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27769__$1,(4),event_bus);
} else {
if((state_val_27770 === (1))){
var state_27769__$1 = state_27769;
var statearr_27776_27790 = state_27769__$1;
(statearr_27776_27790[(2)] = null);

(statearr_27776_27790[(1)] = (2));


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
var statearr_27780 = [null,null,null,null,null,null,null];
(statearr_27780[(0)] = state_machine__5855__auto__);

(statearr_27780[(1)] = (1));

return statearr_27780;
});
var state_machine__5855__auto____1 = (function (state_27769){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_27769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e27781){if((e27781 instanceof Object)){
var ex__5858__auto__ = e27781;
var statearr_27782_27791 = state_27769;
(statearr_27782_27791[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27792 = state_27769;
state_27769 = G__27792;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_27769){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_27769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,event_bus))
})();
var state__5871__auto__ = (function (){var statearr_27783 = f__5870__auto__.call(null);
(statearr_27783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_27783;
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
var _STAR_parent_STAR_27784 = om_event_bus.core._STAR_parent_STAR_;
try{om_event_bus.core._STAR_parent_STAR_ = this$;

return super$.call(null);
}finally {om_event_bus.core._STAR_parent_STAR_ = _STAR_parent_STAR_27784;
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
var trigger_fn_27793 = om.core.get_state.call(null,owner,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977));
trigger_fn_27793.call(null,event);

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
var map__27848 = cljs.core.merge.call(null,om_event_bus.core.default_config,(((function (){var G__27849 = c;
if(G__27849){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__27849.om_event_bus$core$IInitEventBus$;
}
})())){
return true;
} else {
if((!G__27849.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__27849);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IInitEventBus,G__27849);
}
})())?(function (){var or__3630__auto__ = om_event_bus.core.init_event_bus.call(null,c);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})():null));
var map__27848__$1 = ((cljs.core.seq_QMARK_.call(null,map__27848))?cljs.core.apply.call(null,cljs.core.hash_map,map__27848):map__27848);
var buf_or_n = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var xform = cljs.core.get.call(null,map__27848__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008));
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","trigger-fn","om-event-bus.core/trigger-fn",-739675977),((function (downstream,c,map__27848,map__27848__$1,buf_or_n,xform){
return (function (event){
return cljs.core.async.put_BANG_.call(null,downstream,om_event_bus.core.maybe_apply_xform.call(null,xform,event));
});})(downstream,c,map__27848,map__27848__$1,buf_or_n,xform))
);

if(cljs.core.truth_((function (){var or__3630__auto__ = (function (){var G__27851 = c;
if(G__27851){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__27851.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__27851.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27851);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27851);
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
om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","close-fn","om-event-bus.core/close-fn",-75492433),((function (upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform){
return (function (){
cljs.core.async.untap_all.call(null,fork);

cljs.core.async.close_BANG_.call(null,upstream);

return cljs.core.async.close_BANG_.call(null,branch);
});})(upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform))
);

om.core.set_state_BANG_.call(null,this$,new cljs.core.Keyword("om-event-bus.core","event-bus","om-event-bus.core/event-bus",1537869742),upstream);

cljs.core.async.tap.call(null,fork,downstream);

if((function (){var G__27852 = c;
if(G__27852){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__27852.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__27852.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27852);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27852);
}
})()){
cljs.core.async.tap.call(null,fork,branch);

var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27902 = state_27880__$1;
(statearr_27882_27902[(2)] = inst_27876);

(statearr_27882_27902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var state_27880__$1 = state_27880;
var statearr_27883_27903 = state_27880__$1;
(statearr_27883_27903[(2)] = null);

(statearr_27883_27903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27861 = (state_27880[(7)]);
var inst_27860 = (state_27880[(2)]);
var inst_27861__$1 = cljs.core.nth.call(null,inst_27860,(0),null);
var inst_27862 = cljs.core.nth.call(null,inst_27860,(1),null);
var state_27880__$1 = (function (){var statearr_27884 = state_27880;
(statearr_27884[(7)] = inst_27861__$1);

(statearr_27884[(8)] = inst_27862);

return statearr_27884;
})();
if(cljs.core.truth_(inst_27861__$1)){
var statearr_27885_27904 = state_27880__$1;
(statearr_27885_27904[(1)] = (5));

} else {
var statearr_27886_27905 = state_27880__$1;
(statearr_27886_27905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var inst_27862 = (state_27880[(8)]);
var inst_27867 = cljs.core.not_EQ_.call(null,inst_27862,branch);
var state_27880__$1 = state_27880;
if(inst_27867){
var statearr_27887_27906 = state_27880__$1;
(statearr_27887_27906[(1)] = (8));

} else {
var statearr_27888_27907 = state_27880__$1;
(statearr_27888_27907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (3))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (2))){
var inst_27855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27856 = cljs.core.async.timeout.call(null,(5000));
var inst_27857 = [branch,inst_27856];
var inst_27858 = (new cljs.core.PersistentVector(null,2,(5),inst_27855,inst_27857,null));
var state_27880__$1 = state_27880;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27880__$1,(4),inst_27858);
} else {
if((state_val_27881 === (9))){
var state_27880__$1 = state_27880;
var statearr_27889_27908 = state_27880__$1;
(statearr_27889_27908[(2)] = null);

(statearr_27889_27908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (5))){
var inst_27861 = (state_27880[(7)]);
var inst_27864 = om_event_bus.core.got_event.call(null,c,inst_27861);
var state_27880__$1 = (function (){var statearr_27890 = state_27880;
(statearr_27890[(9)] = inst_27864);

return statearr_27890;
})();
var statearr_27891_27909 = state_27880__$1;
(statearr_27891_27909[(2)] = null);

(statearr_27891_27909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27892_27910 = state_27880__$1;
(statearr_27892_27910[(2)] = inst_27874);

(statearr_27892_27910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27869 = om.core.id.call(null,this$);
var inst_27870 = om_event_bus.core.trace.call(null,inst_27869,"is listening...");
var state_27880__$1 = (function (){var statearr_27893 = state_27880;
(statearr_27893[(10)] = inst_27870);

return statearr_27893;
})();
var statearr_27894_27911 = state_27880__$1;
(statearr_27894_27911[(2)] = null);

(statearr_27894_27911[(1)] = (2));


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
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform))
;
return ((function (switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_27898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27898[(0)] = state_machine__5855__auto__);

(statearr_27898[(1)] = (1));

return statearr_27898;
});
var state_machine__5855__auto____1 = (function (state_27880){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e27899){if((e27899 instanceof Object)){
var ex__5858__auto__ = e27899;
var statearr_27900_27912 = state_27880;
(statearr_27900_27912[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27913 = state_27880;
state_27880 = G__27913;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform))
})();
var state__5871__auto__ = (function (){var statearr_27901 = f__5870__auto__.call(null);
(statearr_27901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_27901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__,upstream,branch,fork,downstream,c,map__27848,map__27848__$1,buf_or_n,xform))
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
if((function (){var G__27915 = c;
if(G__27915){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__27915.om_event_bus$core$IGotEvent$;
}
})())){
return true;
} else {
if((!G__27915.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27915);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om_event_bus.core.IGotEvent,G__27915);
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
var G__27925 = cljs.core.seq.call(null,new_methods);
var vec__27926 = G__27925;
var vec__27927 = cljs.core.nth.call(null,vec__27926,(0),null);
var new_method_name = cljs.core.nth.call(null,vec__27927,(0),null);
var new_method_fn = cljs.core.nth.call(null,vec__27927,(1),null);
var new_methods_SINGLEQUOTE_ = cljs.core.nthnext.call(null,vec__27926,(1));
var methods_SINGLEQUOTE___$1 = methods_SINGLEQUOTE_;
var G__27925__$1 = G__27925;
while(true){
var methods_SINGLEQUOTE___$2 = methods_SINGLEQUOTE___$1;
var vec__27928 = G__27925__$1;
var vec__27929 = cljs.core.nth.call(null,vec__27928,(0),null);
var new_method_name__$1 = cljs.core.nth.call(null,vec__27929,(0),null);
var new_method_fn__$1 = cljs.core.nth.call(null,vec__27929,(1),null);
var new_methods_SINGLEQUOTE___$1 = cljs.core.nthnext.call(null,vec__27928,(1));
if(cljs.core.truth_(new_method_name__$1)){
var G__27930 = om_event_bus.core.around_method.call(null,new_method_name__$1,methods_SINGLEQUOTE___$2,new_method_fn__$1);
var G__27931 = new_methods_SINGLEQUOTE___$1;
methods_SINGLEQUOTE___$1 = G__27930;
G__27925__$1 = G__27931;
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
trace.cljs$lang$applyTo = (function (arglist__27932){
var args = cljs.core.seq(arglist__27932);
return trace__delegate(args);
});
trace.cljs$core$IFn$_invoke$arity$variadic = trace__delegate;
return trace;
})()
;

//# sourceMappingURL=core.js.map