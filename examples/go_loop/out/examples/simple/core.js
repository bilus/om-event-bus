// Compiled by ClojureScript 0.0-2505
goog.provide('examples.simple.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
examples.simple.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.simple.core.child_view = (function child_view(app,owner){
if(typeof examples.simple.core.t14048 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t14048 = (function (owner,app,child_view,meta14049){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta14049 = meta14049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t14048.prototype.om$core$IRender$ = true;

examples.simple.core.t14048.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});

examples.simple.core.t14048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14050){
var self__ = this;
var _14050__$1 = this;
return self__.meta14049;
});

examples.simple.core.t14048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14050,meta14049__$1){
var self__ = this;
var _14050__$1 = this;
return (new examples.simple.core.t14048(self__.owner,self__.app,self__.child_view,meta14049__$1));
});

examples.simple.core.t14048.cljs$lang$type = true;

examples.simple.core.t14048.cljs$lang$ctorStr = "examples.simple.core/t14048";

examples.simple.core.t14048.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t14048");
});

examples.simple.core.__GT_t14048 = (function __GT_t14048(owner__$1,app__$1,child_view__$1,meta14049){
return (new examples.simple.core.t14048(owner__$1,app__$1,child_view__$1,meta14049));
});

}

return (new examples.simple.core.t14048(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),50,new cljs.core.Keyword(null,"end-line","end-line",1837326455),17,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
examples.simple.core.parent_view = (function parent_view(app,owner){
if(typeof examples.simple.core.t14054 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.simple.core.t14054 = (function (owner,app,parent_view,meta14055){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta14055 = meta14055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.simple.core.t14054.prototype.om$core$IRender$ = true;

examples.simple.core.t14054.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,examples.simple.core.child_view,self__.app),om.core.build.call(null,examples.simple.core.child_view,self__.app)], null));
});

examples.simple.core.t14054.prototype.om_event_bus$core$IGotEvent$ = true;

examples.simple.core.t14054.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return console.log("parent received",cljs.core.clj__GT_js.call(null,ev));
});

examples.simple.core.t14054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14056){
var self__ = this;
var _14056__$1 = this;
return self__.meta14055;
});

examples.simple.core.t14054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14056,meta14055__$1){
var self__ = this;
var _14056__$1 = this;
return (new examples.simple.core.t14054(self__.owner,self__.app,self__.parent_view,meta14055__$1));
});

examples.simple.core.t14054.cljs$lang$type = true;

examples.simple.core.t14054.cljs$lang$ctorStr = "examples.simple.core/t14054";

examples.simple.core.t14054.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.simple.core/t14054");
});

examples.simple.core.__GT_t14054 = (function __GT_t14054(owner__$1,app__$1,parent_view__$1,meta14055){
return (new examples.simple.core.t14054(owner__$1,app__$1,parent_view__$1,meta14055));
});

}

return (new examples.simple.core.t14054(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.simple.core.parent_view,examples.simple.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map