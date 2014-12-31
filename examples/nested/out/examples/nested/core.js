// Compiled by ClojureScript 0.0-2505
goog.provide('examples.nested.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.nested.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.nested.core.grandchild_view = (function grandchild_view(app,owner){
if(typeof examples.nested.core.t18264 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.nested.core.t18264 = (function (owner,app,grandchild_view,meta18265){
this.owner = owner;
this.app = app;
this.grandchild_view = grandchild_view;
this.meta18265 = meta18265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.nested.core.t18264.prototype.om$core$IRender$ = true;

examples.nested.core.t18264.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from granchild "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Granchild "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')));
});

examples.nested.core.t18264.prototype.om_event_bus$core$IGotEvent$ = true;

examples.nested.core.t18264.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"grandchild received",ev);
});

examples.nested.core.t18264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18266){
var self__ = this;
var _18266__$1 = this;
return self__.meta18265;
});

examples.nested.core.t18264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18266,meta18265__$1){
var self__ = this;
var _18266__$1 = this;
return (new examples.nested.core.t18264(self__.owner,self__.app,self__.grandchild_view,meta18265__$1));
});

examples.nested.core.t18264.cljs$lang$type = true;

examples.nested.core.t18264.cljs$lang$ctorStr = "examples.nested.core/t18264";

examples.nested.core.t18264.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.nested.core/t18264");
});

examples.nested.core.__GT_t18264 = (function __GT_t18264(owner__$1,app__$1,grandchild_view__$1,meta18265){
return (new examples.nested.core.t18264(owner__$1,app__$1,grandchild_view__$1,meta18265));
});

}

return (new examples.nested.core.t18264(owner,app,grandchild_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),20,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/src/core.cljs"], null)));
});
examples.nested.core.child_view = (function child_view(app,owner){
if(typeof examples.nested.core.t18270 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.nested.core.t18270 = (function (owner,app,child_view,meta18271){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta18271 = meta18271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.nested.core.t18270.prototype.om$core$IRender$ = true;

examples.nested.core.t18270.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,[cljs.core.str("event from child "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.nested.core.grandchild_view,self__.app),om.core.build.call(null,examples.nested.core.grandchild_view,self__.app)], null));
});

examples.nested.core.t18270.prototype.om_event_bus$core$IGotEvent$ = true;

examples.nested.core.t18270.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"child received",ev);
});

examples.nested.core.t18270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18272){
var self__ = this;
var _18272__$1 = this;
return self__.meta18271;
});

examples.nested.core.t18270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18272,meta18271__$1){
var self__ = this;
var _18272__$1 = this;
return (new examples.nested.core.t18270(self__.owner,self__.app,self__.child_view,meta18271__$1));
});

examples.nested.core.t18270.cljs$lang$type = true;

examples.nested.core.t18270.cljs$lang$ctorStr = "examples.nested.core/t18270";

examples.nested.core.t18270.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.nested.core/t18270");
});

examples.nested.core.__GT_t18270 = (function __GT_t18270(owner__$1,app__$1,child_view__$1,meta18271){
return (new examples.nested.core.t18270(owner__$1,app__$1,child_view__$1,meta18271));
});

}

return (new examples.nested.core.t18270(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),61,new cljs.core.Keyword(null,"end-line","end-line",1837326455),34,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/src/core.cljs"], null)));
});
examples.nested.core.parent_view = (function parent_view(app,owner){
if(typeof examples.nested.core.t18276 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.nested.core.t18276 = (function (owner,app,parent_view,meta18277){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta18277 = meta18277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.nested.core.t18276.prototype.om$core$IRender$ = true;

examples.nested.core.t18276.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.nested.core.child_view,self__.app),om.core.build.call(null,examples.nested.core.child_view,self__.app)], null));
});

examples.nested.core.t18276.prototype.om_event_bus$core$IGotEvent$ = true;

examples.nested.core.t18276.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.nested.core.t18276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18278){
var self__ = this;
var _18278__$1 = this;
return self__.meta18277;
});

examples.nested.core.t18276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18278,meta18277__$1){
var self__ = this;
var _18278__$1 = this;
return (new examples.nested.core.t18276(self__.owner,self__.app,self__.parent_view,meta18277__$1));
});

examples.nested.core.t18276.cljs$lang$type = true;

examples.nested.core.t18276.cljs$lang$ctorStr = "examples.nested.core/t18276";

examples.nested.core.t18276.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.nested.core/t18276");
});

examples.nested.core.__GT_t18276 = (function __GT_t18276(owner__$1,app__$1,parent_view__$1,meta18277){
return (new examples.nested.core.t18276(owner__$1,app__$1,parent_view__$1,meta18277));
});

}

return (new examples.nested.core.t18276(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.nested.core.parent_view,examples.nested.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map