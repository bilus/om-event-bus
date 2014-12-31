// Compiled by ClojureScript 0.0-2505
goog.provide('examples.simple.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
examples.simple.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.simple.core.child_view = (function child_view(app,owner){
if(typeof examples.simple.core.t10303 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t10303 = (function (owner,app,child_view,meta10304){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta10304 = meta10304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t10303.prototype.om$core$IRender$ = true;

examples.simple.core.t10303.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});

examples.simple.core.t10303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10305){
var self__ = this;
var _10305__$1 = this;
return self__.meta10304;
});

examples.simple.core.t10303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10305,meta10304__$1){
var self__ = this;
var _10305__$1 = this;
return (new examples.simple.core.t10303(self__.owner,self__.app,self__.child_view,meta10304__$1));
});

examples.simple.core.t10303.cljs$lang$type = true;

examples.simple.core.t10303.cljs$lang$ctorStr = "examples.simple.core/t10303";

examples.simple.core.t10303.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t10303");
});

examples.simple.core.__GT_t10303 = (function __GT_t10303(owner__$1,app__$1,child_view__$1,meta10304){
return (new examples.simple.core.t10303(owner__$1,app__$1,child_view__$1,meta10304));
});

}

return (new examples.simple.core.t10303(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),50,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
examples.simple.core.parent_view = (function parent_view(app,owner){
if(typeof examples.simple.core.t10309 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t10309 = (function (owner,app,parent_view,meta10310){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta10310 = meta10310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t10309.prototype.om$core$IRender$ = true;

examples.simple.core.t10309.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,examples.simple.core.child_view,self__.app),om.core.build.call(null,examples.simple.core.child_view,self__.app)], null));
});

examples.simple.core.t10309.prototype.om_event_bus$core$IGotEvent$ = true;

examples.simple.core.t10309.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return console.log("parent received",cljs.core.clj__GT_js.call(null,ev));
});

examples.simple.core.t10309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10311){
var self__ = this;
var _10311__$1 = this;
return self__.meta10310;
});

examples.simple.core.t10309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10311,meta10310__$1){
var self__ = this;
var _10311__$1 = this;
return (new examples.simple.core.t10309(self__.owner,self__.app,self__.parent_view,meta10310__$1));
});

examples.simple.core.t10309.cljs$lang$type = true;

examples.simple.core.t10309.cljs$lang$ctorStr = "examples.simple.core/t10309";

examples.simple.core.t10309.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t10309");
});

examples.simple.core.__GT_t10309 = (function __GT_t10309(owner__$1,app__$1,parent_view__$1,meta10310){
return (new examples.simple.core.t10309(owner__$1,app__$1,parent_view__$1,meta10310));
});

}

return (new examples.simple.core.t10309(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.simple.core.parent_view,examples.simple.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map