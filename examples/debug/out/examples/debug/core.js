// Compiled by ClojureScript 0.0-2505
goog.provide('examples.debug.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.debug.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.debug.core.child_view = (function child_view(app,owner){
if(typeof examples.debug.core.t74471 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.debug.core.t74471 = (function (owner,app,child_view,meta74472){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta74472 = meta74472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.debug.core.t74471.prototype.om$core$IRender$ = true;

examples.debug.core.t74471.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.debug.core.t74471.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.debug.core.t74471.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true], null);
});

examples.debug.core.t74471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74473){
var self__ = this;
var _74473__$1 = this;
return self__.meta74472;
});

examples.debug.core.t74471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74473,meta74472__$1){
var self__ = this;
var _74473__$1 = this;
return (new examples.debug.core.t74471(self__.owner,self__.app,self__.child_view,meta74472__$1));
});

examples.debug.core.t74471.cljs$lang$type = true;

examples.debug.core.t74471.cljs$lang$ctorStr = "examples.debug.core/t74471";

examples.debug.core.t74471.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.debug.core/t74471");
});

examples.debug.core.__GT_t74471 = (function __GT_t74471(owner__$1,app__$1,child_view__$1,meta74472){
return (new examples.debug.core.t74471(owner__$1,app__$1,child_view__$1,meta74472));
});

}

return (new examples.debug.core.t74471(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/src/core.cljs"], null)));
});
examples.debug.core.parent_view = (function parent_view(app,owner){
if(typeof examples.debug.core.t74477 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.debug.core.t74477 = (function (owner,app,parent_view,meta74478){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta74478 = meta74478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.debug.core.t74477.prototype.om$core$IRender$ = true;

examples.debug.core.t74477.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om.core.detach_root.call(null,document.getElementById("app"));
});})(___$1))
},"Kill me"),React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.debug.core.child_view,self__.app),om.core.build.call(null,examples.debug.core.child_view,self__.app)], null));
});

examples.debug.core.t74477.prototype.om_event_bus$core$IGotEvent$ = true;

examples.debug.core.t74477.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.debug.core.t74477.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.debug.core.t74477.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),true], null);
});

examples.debug.core.t74477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74479){
var self__ = this;
var _74479__$1 = this;
return self__.meta74478;
});

examples.debug.core.t74477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74479,meta74478__$1){
var self__ = this;
var _74479__$1 = this;
return (new examples.debug.core.t74477(self__.owner,self__.app,self__.parent_view,meta74478__$1));
});

examples.debug.core.t74477.cljs$lang$type = true;

examples.debug.core.t74477.cljs$lang$ctorStr = "examples.debug.core/t74477";

examples.debug.core.t74477.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.debug.core/t74477");
});

examples.debug.core.__GT_t74477 = (function __GT_t74477(owner__$1,app__$1,parent_view__$1,meta74478){
return (new examples.debug.core.t74477(owner__$1,app__$1,parent_view__$1,meta74478));
});

}

return (new examples.debug.core.t74477(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),37,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.debug.core.parent_view,examples.debug.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map