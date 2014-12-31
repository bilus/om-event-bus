// Compiled by ClojureScript 0.0-2505
goog.provide('examples.xform.core');
goog.require('cljs.core');
goog.require('om_event_bus.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.xform.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
examples.xform.core.add_om_id_xform = (function add_om_id_xform(owner){
return cljs.core.map.call(null,(function (event){
return cljs.core.update_in.call(null,event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),om.core.id.call(null,owner));
}));
});
examples.xform.core.grandchild_view = (function grandchild_view(app,owner){
if(typeof examples.xform.core.t22240 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t22240 = (function (owner,app,grandchild_view,meta22241){
this.owner = owner;
this.app = app;
this.grandchild_view = grandchild_view;
this.meta22241 = meta22241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t22240.prototype.om$core$IRender$ = true;

examples.xform.core.t22240.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"grandchild"], null));
});})(___$1))
},[cljs.core.str("Granchild "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});

examples.xform.core.t22240.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t22240.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t22240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22242){
var self__ = this;
var _22242__$1 = this;
return self__.meta22241;
});

examples.xform.core.t22240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22242,meta22241__$1){
var self__ = this;
var _22242__$1 = this;
return (new examples.xform.core.t22240(self__.owner,self__.app,self__.grandchild_view,meta22241__$1));
});

examples.xform.core.t22240.cljs$lang$type = true;

examples.xform.core.t22240.cljs$lang$ctorStr = "examples.xform.core/t22240";

examples.xform.core.t22240.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t22240");
});

examples.xform.core.__GT_t22240 = (function __GT_t22240(owner__$1,app__$1,grandchild_view__$1,meta22241){
return (new examples.xform.core.t22240(owner__$1,app__$1,grandchild_view__$1,meta22241));
});

}

return (new examples.xform.core.t22240(owner,app,grandchild_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),25,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
examples.xform.core.child_view = (function child_view(app,owner){
if(typeof examples.xform.core.t22246 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t22246 = (function (owner,app,child_view,meta22247){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta22247 = meta22247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t22246.prototype.om$core$IRender$ = true;

examples.xform.core.t22246.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"child"], null));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.xform.core.grandchild_view,self__.app),om.core.build.call(null,examples.xform.core.grandchild_view,self__.app)], null));
});

examples.xform.core.t22246.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t22246.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t22246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22248){
var self__ = this;
var _22248__$1 = this;
return self__.meta22247;
});

examples.xform.core.t22246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22248,meta22247__$1){
var self__ = this;
var _22248__$1 = this;
return (new examples.xform.core.t22246(self__.owner,self__.app,self__.child_view,meta22247__$1));
});

examples.xform.core.t22246.cljs$lang$type = true;

examples.xform.core.t22246.cljs$lang$ctorStr = "examples.xform.core/t22246";

examples.xform.core.t22246.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t22246");
});

examples.xform.core.__GT_t22246 = (function __GT_t22246(owner__$1,app__$1,child_view__$1,meta22247){
return (new examples.xform.core.t22246(owner__$1,app__$1,child_view__$1,meta22247));
});

}

return (new examples.xform.core.t22246(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),39,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
examples.xform.core.parent_view = (function parent_view(app,owner){
if(typeof examples.xform.core.t22252 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t22252 = (function (owner,app,parent_view,meta22253){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta22253 = meta22253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t22252.prototype.om$core$IRender$ = true;

examples.xform.core.t22252.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.xform.core.child_view,self__.app),om.core.build.call(null,examples.xform.core.child_view,self__.app)], null));
});

examples.xform.core.t22252.prototype.om_event_bus$core$IGotEvent$ = true;

examples.xform.core.t22252.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.xform.core.t22252.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t22252.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t22252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22254){
var self__ = this;
var _22254__$1 = this;
return self__.meta22253;
});

examples.xform.core.t22252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22254,meta22253__$1){
var self__ = this;
var _22254__$1 = this;
return (new examples.xform.core.t22252(self__.owner,self__.app,self__.parent_view,meta22253__$1));
});

examples.xform.core.t22252.cljs$lang$type = true;

examples.xform.core.t22252.cljs$lang$ctorStr = "examples.xform.core/t22252";

examples.xform.core.t22252.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t22252");
});

examples.xform.core.__GT_t22252 = (function __GT_t22252(owner__$1,app__$1,parent_view__$1,meta22253){
return (new examples.xform.core.t22252(owner__$1,app__$1,parent_view__$1,meta22253));
});

}

return (new examples.xform.core.t22252(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),56,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.xform.core.parent_view,examples.xform.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map