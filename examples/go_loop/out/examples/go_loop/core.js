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
if(typeof examples.go_loop.core.t19090 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t19090 = (function (owner,app,child_view,meta19091){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta19091 = meta19091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t19090.prototype.om$core$IRender$ = true;

examples.go_loop.core.t19090.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.go_loop.core.t19090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19092){
var self__ = this;
var _19092__$1 = this;
return self__.meta19091;
});

examples.go_loop.core.t19090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19092,meta19091__$1){
var self__ = this;
var _19092__$1 = this;
return (new examples.go_loop.core.t19090(self__.owner,self__.app,self__.child_view,meta19091__$1));
});

examples.go_loop.core.t19090.cljs$lang$type = true;

examples.go_loop.core.t19090.cljs$lang$ctorStr = "examples.go-loop.core/t19090";

examples.go_loop.core.t19090.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t19090");
});

examples.go_loop.core.__GT_t19090 = (function __GT_t19090(owner__$1,app__$1,child_view__$1,meta19091){
return (new examples.go_loop.core.t19090(owner__$1,app__$1,child_view__$1,meta19091));
});

}

return (new examples.go_loop.core.t19090(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.parent_view = (function parent_view(app,owner){
if(typeof examples.go_loop.core.t19096 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t19096 = (function (owner,app,parent_view,meta19097){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta19097 = meta19097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t19096.prototype.om$core$IRender$ = true;

examples.go_loop.core.t19096.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.go_loop.core.child_view,self__.app),om.core.build.call(null,examples.go_loop.core.child_view,self__.app)], null));
});

examples.go_loop.core.t19096.prototype.om_event_bus$core$IGotEvent$ = true;

examples.go_loop.core.t19096.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return console.log("parent received",cljs.core.clj__GT_js.call(null,ev));
});

examples.go_loop.core.t19096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19098){
var self__ = this;
var _19098__$1 = this;
return self__.meta19097;
});

examples.go_loop.core.t19096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19098,meta19097__$1){
var self__ = this;
var _19098__$1 = this;
return (new examples.go_loop.core.t19096(self__.owner,self__.app,self__.parent_view,meta19097__$1));
});

examples.go_loop.core.t19096.cljs$lang$type = true;

examples.go_loop.core.t19096.cljs$lang$ctorStr = "examples.go-loop.core/t19096";

examples.go_loop.core.t19096.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t19096");
});

examples.go_loop.core.__GT_t19096 = (function __GT_t19096(owner__$1,app__$1,parent_view__$1,meta19097){
return (new examples.go_loop.core.t19096(owner__$1,app__$1,parent_view__$1,meta19097));
});

}

return (new examples.go_loop.core.t19096(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
});
examples.go_loop.core.event_bus = cljs.core.async.chan.call(null);
om_event_bus.core.root_GT_.call(null,(function (app,owner){
if(typeof examples.go_loop.core.t19099 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.go_loop.core.t19099 = (function (owner,app,meta19100){
this.owner = owner;
this.app = app;
this.meta19100 = meta19100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.go_loop.core.t19099.prototype.om$core$IRender$ = true;

examples.go_loop.core.t19099.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,examples.go_loop.core.parent_view,self__.app);
});

examples.go_loop.core.t19099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19101){
var self__ = this;
var _19101__$1 = this;
return self__.meta19100;
});

examples.go_loop.core.t19099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19101,meta19100__$1){
var self__ = this;
var _19101__$1 = this;
return (new examples.go_loop.core.t19099(self__.owner,self__.app,meta19100__$1));
});

examples.go_loop.core.t19099.cljs$lang$type = true;

examples.go_loop.core.t19099.cljs$lang$ctorStr = "examples.go-loop.core/t19099";

examples.go_loop.core.t19099.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.go-loop.core/t19099");
});

examples.go_loop.core.__GT_t19099 = (function __GT_t19099(owner__$1,app__$1,meta19100){
return (new examples.go_loop.core.t19099(owner__$1,app__$1,meta19100));
});

}

return (new examples.go_loop.core.t19099(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),45,new cljs.core.Keyword(null,"end-line","end-line",1837326455),45,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/src/core.cljs"], null)));
}),examples.go_loop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null),examples.go_loop.core.event_bus);
var c__5869__auto___19131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___19131){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___19131){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (7))){
var inst_19110 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19116_19132 = state_19114__$1;
(statearr_19116_19132[(2)] = inst_19110);

(statearr_19116_19132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (6))){
var state_19114__$1 = state_19114;
var statearr_19117_19133 = state_19114__$1;
(statearr_19117_19133[(2)] = null);

(statearr_19117_19133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (5))){
var inst_19104 = (state_19114[(7)]);
var inst_19106 = cljs.core.println.call(null,"go-loop received",inst_19104);
var state_19114__$1 = (function (){var statearr_19118 = state_19114;
(statearr_19118[(8)] = inst_19106);

return statearr_19118;
})();
var statearr_19119_19134 = state_19114__$1;
(statearr_19119_19134[(2)] = null);

(statearr_19119_19134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (4))){
var inst_19104 = (state_19114[(7)]);
var inst_19104__$1 = (state_19114[(2)]);
var state_19114__$1 = (function (){var statearr_19120 = state_19114;
(statearr_19120[(7)] = inst_19104__$1);

return statearr_19120;
})();
if(cljs.core.truth_(inst_19104__$1)){
var statearr_19121_19135 = state_19114__$1;
(statearr_19121_19135[(1)] = (5));

} else {
var statearr_19122_19136 = state_19114__$1;
(statearr_19122_19136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (3))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (2))){
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19114__$1,(4),examples.go_loop.core.event_bus);
} else {
if((state_val_19115 === (1))){
var state_19114__$1 = state_19114;
var statearr_19123_19137 = state_19114__$1;
(statearr_19123_19137[(2)] = null);

(statearr_19123_19137[(1)] = (2));


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
});})(c__5869__auto___19131))
;
return ((function (switch__5854__auto__,c__5869__auto___19131){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_19127 = [null,null,null,null,null,null,null,null,null];
(statearr_19127[(0)] = state_machine__5855__auto__);

(statearr_19127[(1)] = (1));

return statearr_19127;
});
var state_machine__5855__auto____1 = (function (state_19114){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e19128){if((e19128 instanceof Object)){
var ex__5858__auto__ = e19128;
var statearr_19129_19138 = state_19114;
(statearr_19129_19138[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19139 = state_19114;
state_19114 = G__19139;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___19131))
})();
var state__5871__auto__ = (function (){var statearr_19130 = f__5870__auto__.call(null);
(statearr_19130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___19131);

return statearr_19130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___19131))
);


//# sourceMappingURL=core.js.map