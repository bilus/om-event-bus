// Compiled by ClojureScript 0.0-2505
goog.provide('examples.go_loop.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.go_loop.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.go_loop.core.child_view = (function child_view(app,owner){
if(typeof examples.go_loop.core.t14417 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t14417 = (function (owner,app,child_view,meta14418){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta14418 = meta14418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t14417.prototype.om$core$IRender$ = true;

examples.go_loop.core.t14417.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.go_loop.core.t14417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14419){
var self__ = this;
var _14419__$1 = this;
return self__.meta14418;
});

examples.go_loop.core.t14417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14419,meta14418__$1){
var self__ = this;
var _14419__$1 = this;
return (new examples.go_loop.core.t14417(self__.owner,self__.app,self__.child_view,meta14418__$1));
});

examples.go_loop.core.t14417.cljs$lang$type = true;

examples.go_loop.core.t14417.cljs$lang$ctorStr = "examples.go-loop.core/t14417";

examples.go_loop.core.t14417.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t14417");
});

examples.go_loop.core.__GT_t14417 = (function __GT_t14417(owner__$1,app__$1,child_view__$1,meta14418){
return (new examples.go_loop.core.t14417(owner__$1,app__$1,child_view__$1,meta14418));
});

}

return (new examples.go_loop.core.t14417(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.parent_view = (function parent_view(app,owner){
if(typeof examples.go_loop.core.t14423 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t14423 = (function (owner,app,parent_view,meta14424){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta14424 = meta14424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t14423.prototype.om$core$IRender$ = true;

examples.go_loop.core.t14423.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.go_loop.core.child_view,self__.app),om.core.build.call(null,examples.go_loop.core.child_view,self__.app)], null));
});

examples.go_loop.core.t14423.prototype.om_event_bus$core$IGotEvent$ = true;

examples.go_loop.core.t14423.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return console.log("parent received",cljs.core.clj__GT_js.call(null,ev));
});

examples.go_loop.core.t14423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14425){
var self__ = this;
var _14425__$1 = this;
return self__.meta14424;
});

examples.go_loop.core.t14423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14425,meta14424__$1){
var self__ = this;
var _14425__$1 = this;
return (new examples.go_loop.core.t14423(self__.owner,self__.app,self__.parent_view,meta14424__$1));
});

examples.go_loop.core.t14423.cljs$lang$type = true;

examples.go_loop.core.t14423.cljs$lang$ctorStr = "examples.go-loop.core/t14423";

examples.go_loop.core.t14423.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t14423");
});

examples.go_loop.core.__GT_t14423 = (function __GT_t14423(owner__$1,app__$1,parent_view__$1,meta14424){
return (new examples.go_loop.core.t14423(owner__$1,app__$1,parent_view__$1,meta14424));
});

}

return (new examples.go_loop.core.t14423(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.event_bus = cljs.core.async.chan.call(null);
om_event_bus.core.root_GT_.call(null,(function (app,owner){
if(typeof examples.go_loop.core.t14426 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t14426 = (function (owner,app,meta14427){
this.owner = owner;
this.app = app;
this.meta14427 = meta14427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t14426.prototype.om$core$IRender$ = true;

examples.go_loop.core.t14426.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,examples.go_loop.core.parent_view,self__.app);
});

examples.go_loop.core.t14426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14428){
var self__ = this;
var _14428__$1 = this;
return self__.meta14427;
});

examples.go_loop.core.t14426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14428,meta14427__$1){
var self__ = this;
var _14428__$1 = this;
return (new examples.go_loop.core.t14426(self__.owner,self__.app,meta14427__$1));
});

examples.go_loop.core.t14426.cljs$lang$type = true;

examples.go_loop.core.t14426.cljs$lang$ctorStr = "examples.go-loop.core/t14426";

examples.go_loop.core.t14426.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t14426");
});

examples.go_loop.core.__GT_t14426 = (function __GT_t14426(owner__$1,app__$1,meta14427){
return (new examples.go_loop.core.t14426(owner__$1,app__$1,meta14427));
});

}

return (new examples.go_loop.core.t14426(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),45,new cljs.core.Keyword(null,"end-line","end-line",1837326455),45,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
}),examples.go_loop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null),examples.go_loop.core.event_bus);
var c__5869__auto___14458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14458){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14458){
return (function (state_14441){
var state_val_14442 = (state_14441[(1)]);
if((state_val_14442 === (7))){
var inst_14437 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14443_14459 = state_14441__$1;
(statearr_14443_14459[(2)] = inst_14437);

(statearr_14443_14459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (6))){
var state_14441__$1 = state_14441;
var statearr_14444_14460 = state_14441__$1;
(statearr_14444_14460[(2)] = null);

(statearr_14444_14460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (5))){
var inst_14431 = (state_14441[(7)]);
var inst_14433 = cljs.core.println.call(null,"go-loop received",inst_14431);
var state_14441__$1 = (function (){var statearr_14445 = state_14441;
(statearr_14445[(8)] = inst_14433);

return statearr_14445;
})();
var statearr_14446_14461 = state_14441__$1;
(statearr_14446_14461[(2)] = null);

(statearr_14446_14461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (4))){
var inst_14431 = (state_14441[(7)]);
var inst_14431__$1 = (state_14441[(2)]);
var state_14441__$1 = (function (){var statearr_14447 = state_14441;
(statearr_14447[(7)] = inst_14431__$1);

return statearr_14447;
})();
if(cljs.core.truth_(inst_14431__$1)){
var statearr_14448_14462 = state_14441__$1;
(statearr_14448_14462[(1)] = (5));

} else {
var statearr_14449_14463 = state_14441__$1;
(statearr_14449_14463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (3))){
var inst_14439 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14441__$1,inst_14439);
} else {
if((state_val_14442 === (2))){
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14441__$1,(4),examples.go_loop.core.event_bus);
} else {
if((state_val_14442 === (1))){
var state_14441__$1 = state_14441;
var statearr_14450_14464 = state_14441__$1;
(statearr_14450_14464[(2)] = null);

(statearr_14450_14464[(1)] = (2));


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
});})(c__5869__auto___14458))
;
return ((function (switch__5854__auto__,c__5869__auto___14458){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14454 = [null,null,null,null,null,null,null,null,null];
(statearr_14454[(0)] = state_machine__5855__auto__);

(statearr_14454[(1)] = (1));

return statearr_14454;
});
var state_machine__5855__auto____1 = (function (state_14441){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14455){if((e14455 instanceof Object)){
var ex__5858__auto__ = e14455;
var statearr_14456_14465 = state_14441;
(statearr_14456_14465[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14466 = state_14441;
state_14441 = G__14466;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14441){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14458))
})();
var state__5871__auto__ = (function (){var statearr_14457 = f__5870__auto__.call(null);
(statearr_14457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14458);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14458))
);


//# sourceMappingURL=core.js.map