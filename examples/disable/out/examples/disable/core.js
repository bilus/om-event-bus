// Compiled by ClojureScript 0.0-2505
goog.provide('examples.disable.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.disable.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.disable.core.child_view = (function child_view(app,owner){
if(typeof examples.disable.core.t80856 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.disable.core.t80856 = (function (owner,app,child_view,meta80857){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta80857 = meta80857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.disable.core.t80856.prototype.om$core$IRenderState$ = true;

examples.disable.core.t80856.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__80859){
var self__ = this;
var map__80860 = p__80859;
var map__80860__$1 = ((cljs.core.seq_QMARK_.call(null,map__80860))?cljs.core.apply.call(null,cljs.core.hash_map,map__80860):map__80860);
var disabled = cljs.core.get.call(null,map__80860__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"disabled": disabled, "className": (cljs.core.truth_(disabled)?"disabled":null), "onClick": ((function (___$1,map__80860,map__80860__$1,disabled){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"click","click",1912301393)], null));
});})(___$1,map__80860,map__80860__$1,disabled))
},"Click me! "));
});

examples.disable.core.t80856.prototype.om_event_bus$core$IGotEvent$ = true;

examples.disable.core.t80856.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,p__80861){
var self__ = this;
var map__80862 = p__80861;
var map__80862__$1 = ((cljs.core.seq_QMARK_.call(null,map__80862))?cljs.core.apply.call(null,cljs.core.hash_map,map__80862):map__80862);
var event = cljs.core.get.call(null,map__80862__$1,new cljs.core.Keyword(null,"event","event",301435442));
var ___$1 = this;
if(cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"disable","disable",1717637504))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return null;
}
});

examples.disable.core.t80856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80858){
var self__ = this;
var _80858__$1 = this;
return self__.meta80857;
});

examples.disable.core.t80856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80858,meta80857__$1){
var self__ = this;
var _80858__$1 = this;
return (new examples.disable.core.t80856(self__.owner,self__.app,self__.child_view,meta80857__$1));
});

examples.disable.core.t80856.cljs$lang$type = true;

examples.disable.core.t80856.cljs$lang$ctorStr = "examples.disable.core/t80856";

examples.disable.core.t80856.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.disable.core/t80856");
});

examples.disable.core.__GT_t80856 = (function __GT_t80856(owner__$1,app__$1,child_view__$1,meta80857){
return (new examples.disable.core.t80856(owner__$1,app__$1,child_view__$1,meta80857));
});

}

return (new examples.disable.core.t80856(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),42,new cljs.core.Keyword(null,"end-line","end-line",1837326455),24,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/src/core.cljs"], null)));
});
examples.disable.core.parent_view = (function parent_view(app,owner){
if(typeof examples.disable.core.t80866 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.disable.core.t80866 = (function (owner,app,parent_view,meta80867){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta80867 = meta80867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.disable.core.t80866.prototype.om$core$IRender$ = true;

examples.disable.core.t80866.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trickle.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"disable","disable",1717637504)], null));
});})(___$1))
},"Disable children"),om.core.build.call(null,examples.disable.core.child_view,self__.app),om.core.build.call(null,examples.disable.core.child_view,self__.app)], null));
});

examples.disable.core.t80866.prototype.om_event_bus$core$IGotEvent$ = true;

examples.disable.core.t80866.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return alert("Received an event from a child.");
});

examples.disable.core.t80866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80868){
var self__ = this;
var _80868__$1 = this;
return self__.meta80867;
});

examples.disable.core.t80866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80868,meta80867__$1){
var self__ = this;
var _80868__$1 = this;
return (new examples.disable.core.t80866(self__.owner,self__.app,self__.parent_view,meta80867__$1));
});

examples.disable.core.t80866.cljs$lang$type = true;

examples.disable.core.t80866.cljs$lang$ctorStr = "examples.disable.core/t80866";

examples.disable.core.t80866.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.disable.core/t80866");
});

examples.disable.core.__GT_t80866 = (function __GT_t80866(owner__$1,app__$1,parent_view__$1,meta80867){
return (new examples.disable.core.t80866(owner__$1,app__$1,parent_view__$1,meta80867));
});

}

return (new examples.disable.core.t80866(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),38,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/src/core.cljs"], null)));
});
om_event_bus.core.root_LT__GT_.call(null,examples.disable.core.parent_view,examples.disable.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map