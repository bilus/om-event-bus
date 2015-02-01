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
if(typeof examples.go_loop.core.t81527 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t81527 = (function (owner,app,child_view,meta81528){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta81528 = meta81528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t81527.prototype.om$core$IRender$ = true;

examples.go_loop.core.t81527.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.go_loop.core.t81527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81529){
var self__ = this;
var _81529__$1 = this;
return self__.meta81528;
});

examples.go_loop.core.t81527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81529,meta81528__$1){
var self__ = this;
var _81529__$1 = this;
return (new examples.go_loop.core.t81527(self__.owner,self__.app,self__.child_view,meta81528__$1));
});

examples.go_loop.core.t81527.cljs$lang$type = true;

examples.go_loop.core.t81527.cljs$lang$ctorStr = "examples.go-loop.core/t81527";

examples.go_loop.core.t81527.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t81527");
});

examples.go_loop.core.__GT_t81527 = (function __GT_t81527(owner__$1,app__$1,child_view__$1,meta81528){
return (new examples.go_loop.core.t81527(owner__$1,app__$1,child_view__$1,meta81528));
});

}

return (new examples.go_loop.core.t81527(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.parent_view = (function parent_view(app,owner){
if(typeof examples.go_loop.core.t81533 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t81533 = (function (owner,app,parent_view,meta81534){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta81534 = meta81534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t81533.prototype.om$core$IRender$ = true;

examples.go_loop.core.t81533.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.go_loop.core.child_view,self__.app),om.core.build.call(null,examples.go_loop.core.child_view,self__.app)], null));
});

examples.go_loop.core.t81533.prototype.om_event_bus$core$IGotEvent$ = true;

examples.go_loop.core.t81533.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return console.log("parent received",cljs.core.clj__GT_js.call(null,ev));
});

examples.go_loop.core.t81533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81535){
var self__ = this;
var _81535__$1 = this;
return self__.meta81534;
});

examples.go_loop.core.t81533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81535,meta81534__$1){
var self__ = this;
var _81535__$1 = this;
return (new examples.go_loop.core.t81533(self__.owner,self__.app,self__.parent_view,meta81534__$1));
});

examples.go_loop.core.t81533.cljs$lang$type = true;

examples.go_loop.core.t81533.cljs$lang$ctorStr = "examples.go-loop.core/t81533";

examples.go_loop.core.t81533.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t81533");
});

examples.go_loop.core.__GT_t81533 = (function __GT_t81533(owner__$1,app__$1,parent_view__$1,meta81534){
return (new examples.go_loop.core.t81533(owner__$1,app__$1,parent_view__$1,meta81534));
});

}

return (new examples.go_loop.core.t81533(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.event_bus = cljs.core.async.chan.call(null);
om_event_bus.core.root_GT_.call(null,(function (app,owner){
if(typeof examples.go_loop.core.t81536 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t81536 = (function (owner,app,meta81537){
this.owner = owner;
this.app = app;
this.meta81537 = meta81537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t81536.prototype.om$core$IRender$ = true;

examples.go_loop.core.t81536.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,examples.go_loop.core.parent_view,self__.app);
});

examples.go_loop.core.t81536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81538){
var self__ = this;
var _81538__$1 = this;
return self__.meta81537;
});

examples.go_loop.core.t81536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81538,meta81537__$1){
var self__ = this;
var _81538__$1 = this;
return (new examples.go_loop.core.t81536(self__.owner,self__.app,meta81537__$1));
});

examples.go_loop.core.t81536.cljs$lang$type = true;

examples.go_loop.core.t81536.cljs$lang$ctorStr = "examples.go-loop.core/t81536";

examples.go_loop.core.t81536.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t81536");
});

examples.go_loop.core.__GT_t81536 = (function __GT_t81536(owner__$1,app__$1,meta81537){
return (new examples.go_loop.core.t81536(owner__$1,app__$1,meta81537));
});

}

return (new examples.go_loop.core.t81536(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),45,new cljs.core.Keyword(null,"end-line","end-line",1837326455),45,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
}),examples.go_loop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null),examples.go_loop.core.event_bus);
var c__7050__auto___81568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___81568){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___81568){
return (function (state_81551){
var state_val_81552 = (state_81551[(1)]);
if((state_val_81552 === (7))){
var inst_81547 = (state_81551[(2)]);
var state_81551__$1 = state_81551;
var statearr_81553_81569 = state_81551__$1;
(statearr_81553_81569[(2)] = inst_81547);

(statearr_81553_81569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81552 === (6))){
var state_81551__$1 = state_81551;
var statearr_81554_81570 = state_81551__$1;
(statearr_81554_81570[(2)] = null);

(statearr_81554_81570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81552 === (5))){
var inst_81541 = (state_81551[(7)]);
var inst_81543 = cljs.core.println.call(null,"go-loop received",inst_81541);
var state_81551__$1 = (function (){var statearr_81555 = state_81551;
(statearr_81555[(8)] = inst_81543);

return statearr_81555;
})();
var statearr_81556_81571 = state_81551__$1;
(statearr_81556_81571[(2)] = null);

(statearr_81556_81571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81552 === (4))){
var inst_81541 = (state_81551[(7)]);
var inst_81541__$1 = (state_81551[(2)]);
var state_81551__$1 = (function (){var statearr_81557 = state_81551;
(statearr_81557[(7)] = inst_81541__$1);

return statearr_81557;
})();
if(cljs.core.truth_(inst_81541__$1)){
var statearr_81558_81572 = state_81551__$1;
(statearr_81558_81572[(1)] = (5));

} else {
var statearr_81559_81573 = state_81551__$1;
(statearr_81559_81573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81552 === (3))){
var inst_81549 = (state_81551[(2)]);
var state_81551__$1 = state_81551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81551__$1,inst_81549);
} else {
if((state_val_81552 === (2))){
var state_81551__$1 = state_81551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81551__$1,(4),examples.go_loop.core.event_bus);
} else {
if((state_val_81552 === (1))){
var state_81551__$1 = state_81551;
var statearr_81560_81574 = state_81551__$1;
(statearr_81560_81574[(2)] = null);

(statearr_81560_81574[(1)] = (2));


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
});})(c__7050__auto___81568))
;
return ((function (switch__6994__auto__,c__7050__auto___81568){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_81564 = [null,null,null,null,null,null,null,null,null];
(statearr_81564[(0)] = state_machine__6995__auto__);

(statearr_81564[(1)] = (1));

return statearr_81564;
});
var state_machine__6995__auto____1 = (function (state_81551){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_81551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e81565){if((e81565 instanceof Object)){
var ex__6998__auto__ = e81565;
var statearr_81566_81575 = state_81551;
(statearr_81566_81575[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81576 = state_81551;
state_81551 = G__81576;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_81551){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_81551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___81568))
})();
var state__7052__auto__ = (function (){var statearr_81567 = f__7051__auto__.call(null);
(statearr_81567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___81568);

return statearr_81567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___81568))
);


//# sourceMappingURL=core.js.map