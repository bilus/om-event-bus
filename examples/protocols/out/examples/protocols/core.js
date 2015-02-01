// Compiled by ClojureScript 0.0-2505
goog.provide('examples.protocols.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.protocols.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.protocols.core.child_view = (function child_view(app,owner){
if(typeof examples.protocols.core.t82235 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.protocols.core.t82235 = (function (owner,app,child_view,meta82236){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta82236 = meta82236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.protocols.core.t82235.prototype.om$core$IRender$ = true;

examples.protocols.core.t82235.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.protocols.core.t82235.prototype.om_event_bus$core$IGotTricklingEvent$ = true;

examples.protocols.core.t82235.prototype.om_event_bus$core$IGotTricklingEvent$got_trickling_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"child received",ev);
});

examples.protocols.core.t82235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82237){
var self__ = this;
var _82237__$1 = this;
return self__.meta82236;
});

examples.protocols.core.t82235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82237,meta82236__$1){
var self__ = this;
var _82237__$1 = this;
return (new examples.protocols.core.t82235(self__.owner,self__.app,self__.child_view,meta82236__$1));
});

examples.protocols.core.t82235.cljs$lang$type = true;

examples.protocols.core.t82235.cljs$lang$ctorStr = "examples.protocols.core/t82235";

examples.protocols.core.t82235.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.protocols.core/t82235");
});

examples.protocols.core.__GT_t82235 = (function __GT_t82235(owner__$1,app__$1,child_view__$1,meta82236){
return (new examples.protocols.core.t82235(owner__$1,app__$1,child_view__$1,meta82236));
});

}

return (new examples.protocols.core.t82235(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/src/core.cljs"], null)));
});
examples.protocols.core.parent_view = (function parent_view(app,owner){
if(typeof examples.protocols.core.t82241 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.protocols.core.t82241 = (function (owner,app,parent_view,meta82242){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta82242 = meta82242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.protocols.core.t82241.prototype.om$core$IRender$ = true;

examples.protocols.core.t82241.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.protocols.core.child_view,self__.app),om.core.build.call(null,examples.protocols.core.child_view,self__.app)], null));
});

examples.protocols.core.t82241.prototype.om_event_bus$core$IGotBubblingEvent$ = true;

examples.protocols.core.t82241.prototype.om_event_bus$core$IGotBubblingEvent$got_bubbling_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"parent received (bubbling)",ev);

return om_event_bus.core.trickle.call(null,self__.owner,[cljs.core.str("event from parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});

examples.protocols.core.t82241.prototype.om_event_bus$core$IGotEvent$ = true;

examples.protocols.core.t82241.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.protocols.core.t82241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82243){
var self__ = this;
var _82243__$1 = this;
return self__.meta82242;
});

examples.protocols.core.t82241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82243,meta82242__$1){
var self__ = this;
var _82243__$1 = this;
return (new examples.protocols.core.t82241(self__.owner,self__.app,self__.parent_view,meta82242__$1));
});

examples.protocols.core.t82241.cljs$lang$type = true;

examples.protocols.core.t82241.cljs$lang$ctorStr = "examples.protocols.core/t82241";

examples.protocols.core.t82241.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.protocols.core/t82241");
});

examples.protocols.core.__GT_t82241 = (function __GT_t82241(owner__$1,app__$1,parent_view__$1,meta82242){
return (new examples.protocols.core.t82241(owner__$1,app__$1,parent_view__$1,meta82242));
});

}

return (new examples.protocols.core.t82241(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),60,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/src/core.cljs"], null)));
});
om_event_bus.core.root_LT__GT_.call(null,examples.protocols.core.parent_view,examples.protocols.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map