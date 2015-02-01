// Compiled by ClojureScript 0.0-2505
goog.provide('examples.simple.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.simple.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.simple.core.child_view = (function child_view(app,owner){
if(typeof examples.simple.core.t64940 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t64940 = (function (owner,app,child_view,meta64941){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta64941 = meta64941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t64940.prototype.om$core$IRender$ = true;

examples.simple.core.t64940.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.simple.core.t64940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64942){
var self__ = this;
var _64942__$1 = this;
return self__.meta64941;
});

examples.simple.core.t64940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64942,meta64941__$1){
var self__ = this;
var _64942__$1 = this;
return (new examples.simple.core.t64940(self__.owner,self__.app,self__.child_view,meta64941__$1));
});

examples.simple.core.t64940.cljs$lang$type = true;

examples.simple.core.t64940.cljs$lang$ctorStr = "examples.simple.core/t64940";

examples.simple.core.t64940.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t64940");
});

examples.simple.core.__GT_t64940 = (function __GT_t64940(owner__$1,app__$1,child_view__$1,meta64941){
return (new examples.simple.core.t64940(owner__$1,app__$1,child_view__$1,meta64941));
});

}

return (new examples.simple.core.t64940(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
examples.simple.core.parent_view = (function parent_view(app,owner){
if(typeof examples.simple.core.t64946 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t64946 = (function (owner,app,parent_view,meta64947){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta64947 = meta64947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t64946.prototype.om$core$IRender$ = true;

examples.simple.core.t64946.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.simple.core.child_view,self__.app),om.core.build.call(null,examples.simple.core.child_view,self__.app)], null));
});

examples.simple.core.t64946.prototype.om_event_bus$core$IGotEvent$ = true;

examples.simple.core.t64946.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.simple.core.t64946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64948){
var self__ = this;
var _64948__$1 = this;
return self__.meta64947;
});

examples.simple.core.t64946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64948,meta64947__$1){
var self__ = this;
var _64948__$1 = this;
return (new examples.simple.core.t64946(self__.owner,self__.app,self__.parent_view,meta64947__$1));
});

examples.simple.core.t64946.cljs$lang$type = true;

examples.simple.core.t64946.cljs$lang$ctorStr = "examples.simple.core/t64946";

examples.simple.core.t64946.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t64946");
});

examples.simple.core.__GT_t64946 = (function __GT_t64946(owner__$1,app__$1,parent_view__$1,meta64947){
return (new examples.simple.core.t64946(owner__$1,app__$1,parent_view__$1,meta64947));
});

}

return (new examples.simple.core.t64946(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.simple.core.parent_view,examples.simple.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map