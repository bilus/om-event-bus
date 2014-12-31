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
if(typeof examples.xform.core.t14283 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t14283 = (function (owner,app,grandchild_view,meta14284){
this.owner = owner;
this.app = app;
this.grandchild_view = grandchild_view;
this.meta14284 = meta14284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t14283.prototype.om$core$IRender$ = true;

examples.xform.core.t14283.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"grandchild"], null));
});})(___$1))
},[cljs.core.str("Granchild "),cljs.core.str(om.core.id.call(null,self__.owner))].join(''));
});

examples.xform.core.t14283.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t14283.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t14283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14285){
var self__ = this;
var _14285__$1 = this;
return self__.meta14284;
});

examples.xform.core.t14283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14285,meta14284__$1){
var self__ = this;
var _14285__$1 = this;
return (new examples.xform.core.t14283(self__.owner,self__.app,self__.grandchild_view,meta14284__$1));
});

examples.xform.core.t14283.cljs$lang$type = true;

examples.xform.core.t14283.cljs$lang$ctorStr = "examples.xform.core/t14283";

examples.xform.core.t14283.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t14283");
});

examples.xform.core.__GT_t14283 = (function __GT_t14283(owner__$1,app__$1,grandchild_view__$1,meta14284){
return (new examples.xform.core.t14283(owner__$1,app__$1,grandchild_view__$1,meta14284));
});

}

return (new examples.xform.core.t14283(owner,app,grandchild_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),25,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
examples.xform.core.child_view = (function child_view(app,owner){
if(typeof examples.xform.core.t14289 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t14289 = (function (owner,app,child_view,meta14290){
this.owner = owner;
this.app = app;
this.child_view = child_view;
this.meta14290 = meta14290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t14289.prototype.om$core$IRender$ = true;

examples.xform.core.t14289.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"onClick": ((function (___$1){
return (function (){
return om_event_bus.core.trigger.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"child"], null));
});})(___$1))
},[cljs.core.str("Child "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.xform.core.grandchild_view,self__.app),om.core.build.call(null,examples.xform.core.grandchild_view,self__.app)], null));
});

examples.xform.core.t14289.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t14289.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t14289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14291){
var self__ = this;
var _14291__$1 = this;
return self__.meta14290;
});

examples.xform.core.t14289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14291,meta14290__$1){
var self__ = this;
var _14291__$1 = this;
return (new examples.xform.core.t14289(self__.owner,self__.app,self__.child_view,meta14290__$1));
});

examples.xform.core.t14289.cljs$lang$type = true;

examples.xform.core.t14289.cljs$lang$ctorStr = "examples.xform.core/t14289";

examples.xform.core.t14289.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t14289");
});

examples.xform.core.__GT_t14289 = (function __GT_t14289(owner__$1,app__$1,child_view__$1,meta14290){
return (new examples.xform.core.t14289(owner__$1,app__$1,child_view__$1,meta14290));
});

}

return (new examples.xform.core.t14289(owner,app,child_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),39,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
examples.xform.core.parent_view = (function parent_view(app,owner){
if(typeof examples.xform.core.t14295 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.xform.core.t14295 = (function (owner,app,parent_view,meta14296){
this.owner = owner;
this.app = app;
this.parent_view = parent_view;
this.meta14296 = meta14296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.xform.core.t14295.prototype.om$core$IRender$ = true;

examples.xform.core.t14295.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span(null,[cljs.core.str("Parent "),cljs.core.str(om.core.id.call(null,self__.owner))].join('')),om.core.build.call(null,examples.xform.core.child_view,self__.app),om.core.build.call(null,examples.xform.core.child_view,self__.app)], null));
});

examples.xform.core.t14295.prototype.om_event_bus$core$IGotEvent$ = true;

examples.xform.core.t14295.prototype.om_event_bus$core$IGotEvent$got_event$arity$2 = (function (_,ev){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"parent received",ev);
});

examples.xform.core.t14295.prototype.om_event_bus$core$IInitEventBus$ = true;

examples.xform.core.t14295.prototype.om_event_bus$core$IInitEventBus$init_event_bus$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xform","xform",-1725711008),examples.xform.core.add_om_id_xform.call(null,self__.owner)], null);
});

examples.xform.core.t14295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14297){
var self__ = this;
var _14297__$1 = this;
return self__.meta14296;
});

examples.xform.core.t14295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14297,meta14296__$1){
var self__ = this;
var _14297__$1 = this;
return (new examples.xform.core.t14295(self__.owner,self__.app,self__.parent_view,meta14296__$1));
});

examples.xform.core.t14295.cljs$lang$type = true;

examples.xform.core.t14295.cljs$lang$ctorStr = "examples.xform.core/t14295";

examples.xform.core.t14295.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"examples.xform.core/t14295");
});

examples.xform.core.__GT_t14295 = (function __GT_t14295(owner__$1,app__$1,parent_view__$1,meta14296){
return (new examples.xform.core.t14295(owner__$1,app__$1,parent_view__$1,meta14296));
});

}

return (new examples.xform.core.t14295(owner,app,parent_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),56,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/src/core.cljs"], null)));
});
om_event_bus.core.root_GT_.call(null,examples.xform.core.parent_view,examples.xform.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map