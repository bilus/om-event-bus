// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.impl');
goog.require('cljs.core');
goog.require('cljs.core.async');
om_event_bus.impl._STAR_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),false], null);

om_event_bus.impl.ITriggerEvent = (function (){var obj82368 = {};
return obj82368;
})();

om_event_bus.impl.trigger = (function trigger(_,event){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$impl$ITriggerEvent$trigger$arity$2;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$impl$ITriggerEvent$trigger$arity$2(_,event);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.impl.trigger[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.trigger["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITriggerEvent.trigger",_);
}
}
})().call(null,_,event);
}
});


om_event_bus.impl.IEventBus = (function (){var obj82370 = {};
return obj82370;
})();

om_event_bus.impl.tap = (function tap(this$,ch){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$tap$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$tap$arity$2(this$,ch);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.tap[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.tap["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.tap",this$);
}
}
})().call(null,this$,ch);
}
});

om_event_bus.impl.sink = (function sink(this$,mid_ch,bus){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$sink$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$sink$arity$3(this$,mid_ch,bus);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.sink[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.sink["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.sink",this$);
}
}
})().call(null,this$,mid_ch,bus);
}
});

om_event_bus.impl.add_leg = (function() {
var add_leg = null;
var add_leg__1 = (function (this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$add_leg$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$add_leg$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.add_leg[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.add_leg["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.add-leg",this$);
}
}
})().call(null,this$);
}
});
var add_leg__2 = (function (this$,xform){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$add_leg$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$add_leg$arity$2(this$,xform);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.add_leg[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.add_leg["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.add-leg",this$);
}
}
})().call(null,this$,xform);
}
});
add_leg = function(this$,xform){
switch(arguments.length){
case 1:
return add_leg__1.call(this,this$);
case 2:
return add_leg__2.call(this,this$,xform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_leg.cljs$core$IFn$_invoke$arity$1 = add_leg__1;
add_leg.cljs$core$IFn$_invoke$arity$2 = add_leg__2;
return add_leg;
})()
;

om_event_bus.impl.add_fork = (function() {
var add_fork = null;
var add_fork__2 = (function (this$,handler){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$add_fork$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$add_fork$arity$2(this$,handler);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.add_fork[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.add_fork["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.add-fork",this$);
}
}
})().call(null,this$,handler);
}
});
var add_fork__3 = (function (this$,handler,xform){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$add_fork$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$add_fork$arity$3(this$,handler,xform);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.add_fork[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.add_fork["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.add-fork",this$);
}
}
})().call(null,this$,handler,xform);
}
});
add_fork = function(this$,handler,xform){
switch(arguments.length){
case 2:
return add_fork__2.call(this,this$,handler);
case 3:
return add_fork__3.call(this,this$,handler,xform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_fork.cljs$core$IFn$_invoke$arity$2 = add_fork__2;
add_fork.cljs$core$IFn$_invoke$arity$3 = add_fork__3;
return add_fork;
})()
;

om_event_bus.impl.shutdown = (function shutdown(this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.om_event_bus$impl$IEventBus$shutdown$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.om_event_bus$impl$IEventBus$shutdown$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (om_event_bus.impl.shutdown[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.shutdown["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventBus.shutdown",this$);
}
}
})().call(null,this$);
}
});


om_event_bus.impl.IEventRouter = (function (){var obj82372 = {};
return obj82372;
})();

om_event_bus.impl.leg = (function leg(_,parent,mid_ch,child){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$impl$IEventRouter$leg$arity$4;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$impl$IEventRouter$leg$arity$4(_,parent,mid_ch,child);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.impl.leg[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.leg["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventRouter.leg",_);
}
}
})().call(null,_,parent,mid_ch,child);
}
});

om_event_bus.impl.fork = (function fork(_,parent,child,ch){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.om_event_bus$impl$IEventRouter$fork$arity$4;
} else {
return and__3618__auto__;
}
})()){
return _.om_event_bus$impl$IEventRouter$fork$arity$4(_,parent,child,ch);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (om_event_bus.impl.fork[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (om_event_bus.impl.fork["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEventRouter.fork",_);
}
}
})().call(null,_,parent,child,ch);
}
});






om_event_bus.impl.event_bus = (function() {
var event_bus = null;
var event_bus__0 = (function (){
return event_bus.call(null,om_event_bus.impl.bubbling_router.call(null));
});
var event_bus__1 = (function (router){
return om_event_bus.impl.event_bus_STAR_.call(null,router,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719).cljs$core$IFn$_invoke$arity$1(om_event_bus.impl._STAR_options_STAR_))),true);
});
event_bus = function(router){
switch(arguments.length){
case 0:
return event_bus__0.call(this);
case 1:
return event_bus__1.call(this,router);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_bus.cljs$core$IFn$_invoke$arity$0 = event_bus__0;
event_bus.cljs$core$IFn$_invoke$arity$1 = event_bus__1;
return event_bus;
})()
;
om_event_bus.impl.pass_event_bus = (function pass_event_bus(router,mult){
return om_event_bus.impl.event_bus_STAR_.call(null,router,mult,false);
});
om_event_bus.impl.event_bus_STAR_ = (function event_bus_STAR_(router,parent_mult,close){
var mult = parent_mult;
var bus = (function (){
if(typeof om_event_bus.impl.t82376 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t82376 = (function (mult,close,parent_mult,router,event_bus_STAR_,meta82377){
this.mult = mult;
this.close = close;
this.parent_mult = parent_mult;
this.router = router;
this.event_bus_STAR_ = event_bus_STAR_;
this.meta82377 = meta82377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t82376.prototype.om_event_bus$impl$ITriggerEvent$ = true;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$ITriggerEvent$trigger$arity$2 = ((function (mult){
return (function (_,event){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,self__.mult),event);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$ = true;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$tap$arity$2 = ((function (mult){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
return cljs.core.async.tap.call(null,self__.mult,ch);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$sink$arity$3 = ((function (mult){
return (function (_,mid_ch,bus){
var self__ = this;
var ___$1 = this;
om_event_bus.impl.tap.call(null,bus,mid_ch);

return cljs.core.async.pipe.call(null,mid_ch,cljs.core.async.muxch_STAR_.call(null,self__.mult),false);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$add_fork$arity$2 = ((function (mult){
return (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,handler);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$add_fork$arity$3 = ((function (mult){
return (function (this$,handler,xform){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,handler,xform);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$add_leg$arity$1 = ((function (mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.pass_event_bus.call(null,self__.router,self__.mult);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$add_leg$arity$2 = ((function (mult){
return (function (this$,xform){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,null,xform);
});})(mult))
;

om_event_bus.impl.t82376.prototype.om_event_bus$impl$IEventBus$shutdown$arity$1 = ((function (mult){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.close)){
cljs.core.async.untap_all.call(null,self__.mult);

return cljs.core.async.close_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,self__.mult));
} else {
return null;
}
});})(mult))
;

om_event_bus.impl.t82376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mult){
return (function (_82378){
var self__ = this;
var _82378__$1 = this;
return self__.meta82377;
});})(mult))
;

om_event_bus.impl.t82376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mult){
return (function (_82378,meta82377__$1){
var self__ = this;
var _82378__$1 = this;
return (new om_event_bus.impl.t82376(self__.mult,self__.close,self__.parent_mult,self__.router,self__.event_bus_STAR_,meta82377__$1));
});})(mult))
;

om_event_bus.impl.t82376.cljs$lang$type = true;

om_event_bus.impl.t82376.cljs$lang$ctorStr = "om-event-bus.impl/t82376";

om_event_bus.impl.t82376.cljs$lang$ctorPrWriter = ((function (mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t82376");
});})(mult))
;

om_event_bus.impl.__GT_t82376 = ((function (mult){
return (function __GT_t82376(mult__$1,close__$1,parent_mult__$1,router__$1,event_bus_STAR___$1,meta82377){
return (new om_event_bus.impl.t82376(mult__$1,close__$1,parent_mult__$1,router__$1,event_bus_STAR___$1,meta82377));
});})(mult))
;

}

return (new om_event_bus.impl.t82376(mult,close,parent_mult,router,event_bus_STAR_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),57,new cljs.core.Keyword(null,"end-line","end-line",1837326455),82,new cljs.core.Keyword(null,"column","column",2078222095),13,new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
})()
;
return bus;
});
om_event_bus.impl.extend_event_bus = (function() {
var extend_event_bus = null;
var extend_event_bus__3 = (function (parent_bus,router,handler){
return extend_event_bus.call(null,parent_bus,router,handler,null);
});
var extend_event_bus__4 = (function (parent_bus,router,handler,xform){
var event_feed = (cljs.core.truth_(handler)?cljs.core.async.chan.call(null,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719).cljs$core$IFn$_invoke$arity$1(om_event_bus.impl._STAR_options_STAR_)):null);
var child_mult = cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719).cljs$core$IFn$_invoke$arity$1(om_event_bus.impl._STAR_options_STAR_)));
var mid_ch = cljs.core.apply.call(null,cljs.core.async.chan,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719).cljs$core$IFn$_invoke$arity$1(om_event_bus.impl._STAR_options_STAR_),(cljs.core.truth_(xform)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xform], null):cljs.core.PersistentVector.EMPTY));
var child_bus = (function (){
if(typeof om_event_bus.impl.t82382 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t82382 = (function (mid_ch,child_mult,event_feed,xform,handler,router,parent_bus,extend_event_bus,meta82383){
this.mid_ch = mid_ch;
this.child_mult = child_mult;
this.event_feed = event_feed;
this.xform = xform;
this.handler = handler;
this.router = router;
this.parent_bus = parent_bus;
this.extend_event_bus = extend_event_bus;
this.meta82383 = meta82383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t82382.prototype.om_event_bus$impl$ITriggerEvent$ = true;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$ITriggerEvent$trigger$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_,event){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.mid_ch,event);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$ = true;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$tap$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
return cljs.core.async.tap.call(null,self__.child_mult,ch);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$sink$arity$3 = ((function (event_feed,child_mult,mid_ch){
return (function (_,mid_ch__$1,bus){
var self__ = this;
var ___$1 = this;
om_event_bus.impl.tap.call(null,bus,mid_ch__$1);

return cljs.core.async.pipe.call(null,mid_ch__$1,cljs.core.async.muxch_STAR_.call(null,self__.child_mult),false);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$add_fork$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,handler__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,handler__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$add_fork$arity$3 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,handler__$1,xform__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,handler__$1,xform__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$add_leg$arity$1 = ((function (event_feed,child_mult,mid_ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.pass_event_bus.call(null,self__.router,self__.child_mult);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$add_leg$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,xform__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,null,xform__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.om_event_bus$impl$IEventBus$shutdown$arity$1 = ((function (event_feed,child_mult,mid_ch){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.untap_all.call(null,self__.child_mult);

cljs.core.async.close_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,self__.child_mult));

if(cljs.core.truth_(self__.event_feed)){
cljs.core.async.close_BANG_.call(null,self__.event_feed);
} else {
}

return cljs.core.async.close_BANG_.call(null,self__.mid_ch);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_feed,child_mult,mid_ch){
return (function (_82384){
var self__ = this;
var _82384__$1 = this;
return self__.meta82383;
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_82384,meta82383__$1){
var self__ = this;
var _82384__$1 = this;
return (new om_event_bus.impl.t82382(self__.mid_ch,self__.child_mult,self__.event_feed,self__.xform,self__.handler,self__.router,self__.parent_bus,self__.extend_event_bus,meta82383__$1));
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t82382.cljs$lang$type = true;

om_event_bus.impl.t82382.cljs$lang$ctorStr = "om-event-bus.impl/t82382";

om_event_bus.impl.t82382.cljs$lang$ctorPrWriter = ((function (event_feed,child_mult,mid_ch){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t82382");
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.__GT_t82382 = ((function (event_feed,child_mult,mid_ch){
return (function __GT_t82382(mid_ch__$1,child_mult__$1,event_feed__$1,xform__$1,handler__$1,router__$1,parent_bus__$1,extend_event_bus__$1,meta82383){
return (new om_event_bus.impl.t82382(mid_ch__$1,child_mult__$1,event_feed__$1,xform__$1,handler__$1,router__$1,parent_bus__$1,extend_event_bus__$1,meta82383));
});})(event_feed,child_mult,mid_ch))
;

}

return (new om_event_bus.impl.t82382(mid_ch,child_mult,event_feed,xform,handler,router,parent_bus,extend_event_bus,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),114,new cljs.core.Keyword(null,"column","column",2078222095),21,new cljs.core.Keyword(null,"line","line",212345235),92,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
})()
;
om_event_bus.impl.leg.call(null,router,parent_bus,mid_ch,child_bus);

if(cljs.core.truth_(event_feed)){
om_event_bus.impl.fork.call(null,router,parent_bus,child_bus,event_feed);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(om_event_bus.impl._STAR_options_STAR_))){
om_event_bus.impl.dbg_handle_events_BANG_.call(null,event_feed,handler);
} else {
om_event_bus.impl.handle_events_BANG_.call(null,event_feed,handler);
}
} else {
}

return child_bus;
});
extend_event_bus = function(parent_bus,router,handler,xform){
switch(arguments.length){
case 3:
return extend_event_bus__3.call(this,parent_bus,router,handler);
case 4:
return extend_event_bus__4.call(this,parent_bus,router,handler,xform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extend_event_bus.cljs$core$IFn$_invoke$arity$3 = extend_event_bus__3;
extend_event_bus.cljs$core$IFn$_invoke$arity$4 = extend_event_bus__4;
return extend_event_bus;
})()
;
om_event_bus.impl.trickling_router = (function trickling_router(){
if(typeof om_event_bus.impl.t82388 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t82388 = (function (trickling_router,meta82389){
this.trickling_router = trickling_router;
this.meta82389 = meta82389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t82388.prototype.om_event_bus$impl$IEventRouter$ = true;

om_event_bus.impl.t82388.prototype.om_event_bus$impl$IEventRouter$leg$arity$4 = (function (_,parent,mid_ch,child){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.sink.call(null,child,mid_ch,parent);
});

om_event_bus.impl.t82388.prototype.om_event_bus$impl$IEventRouter$fork$arity$4 = (function (_,parent,___$1,ch){
var self__ = this;
var ___$2 = this;
return om_event_bus.impl.tap.call(null,parent,ch);
});

om_event_bus.impl.t82388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82390){
var self__ = this;
var _82390__$1 = this;
return self__.meta82389;
});

om_event_bus.impl.t82388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82390,meta82389__$1){
var self__ = this;
var _82390__$1 = this;
return (new om_event_bus.impl.t82388(self__.trickling_router,meta82389__$1));
});

om_event_bus.impl.t82388.cljs$lang$type = true;

om_event_bus.impl.t82388.cljs$lang$ctorStr = "om-event-bus.impl/t82388";

om_event_bus.impl.t82388.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t82388");
});

om_event_bus.impl.__GT_t82388 = (function __GT_t82388(trickling_router__$1,meta82389){
return (new om_event_bus.impl.t82388(trickling_router__$1,meta82389));
});

}

return (new om_event_bus.impl.t82388(trickling_router,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),24,new cljs.core.Keyword(null,"end-line","end-line",1837326455),130,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
});
om_event_bus.impl.bubbling_router = (function bubbling_router(){
if(typeof om_event_bus.impl.t82394 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t82394 = (function (bubbling_router,meta82395){
this.bubbling_router = bubbling_router;
this.meta82395 = meta82395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t82394.prototype.om_event_bus$impl$IEventRouter$ = true;

om_event_bus.impl.t82394.prototype.om_event_bus$impl$IEventRouter$leg$arity$4 = (function (_,parent,mid_ch,child){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.sink.call(null,parent,mid_ch,child);
});

om_event_bus.impl.t82394.prototype.om_event_bus$impl$IEventRouter$fork$arity$4 = (function (_,___$1,child,ch){
var self__ = this;
var ___$2 = this;
return om_event_bus.impl.tap.call(null,child,ch);
});

om_event_bus.impl.t82394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82396){
var self__ = this;
var _82396__$1 = this;
return self__.meta82395;
});

om_event_bus.impl.t82394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82396,meta82395__$1){
var self__ = this;
var _82396__$1 = this;
return (new om_event_bus.impl.t82394(self__.bubbling_router,meta82395__$1));
});

om_event_bus.impl.t82394.cljs$lang$type = true;

om_event_bus.impl.t82394.cljs$lang$ctorStr = "om-event-bus.impl/t82394";

om_event_bus.impl.t82394.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t82394");
});

om_event_bus.impl.__GT_t82394 = (function __GT_t82394(bubbling_router__$1,meta82395){
return (new om_event_bus.impl.t82394(bubbling_router__$1,meta82395));
});

}

return (new om_event_bus.impl.t82394(bubbling_router,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),139,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),134,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
});
om_event_bus.impl.handle_events_BANG_ = (function handle_events_BANG_(ch,f){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_82438){
var state_val_82439 = (state_82438[(1)]);
if((state_val_82439 === (7))){
var inst_82434 = (state_82438[(2)]);
var state_82438__$1 = state_82438;
var statearr_82440_82455 = state_82438__$1;
(statearr_82440_82455[(2)] = inst_82434);

(statearr_82440_82455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82439 === (6))){
var state_82438__$1 = state_82438;
var statearr_82441_82456 = state_82438__$1;
(statearr_82441_82456[(2)] = null);

(statearr_82441_82456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82439 === (5))){
var inst_82428 = (state_82438[(7)]);
var inst_82430 = f.call(null,inst_82428);
var state_82438__$1 = (function (){var statearr_82442 = state_82438;
(statearr_82442[(8)] = inst_82430);

return statearr_82442;
})();
var statearr_82443_82457 = state_82438__$1;
(statearr_82443_82457[(2)] = null);

(statearr_82443_82457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82439 === (4))){
var inst_82428 = (state_82438[(7)]);
var inst_82428__$1 = (state_82438[(2)]);
var state_82438__$1 = (function (){var statearr_82444 = state_82438;
(statearr_82444[(7)] = inst_82428__$1);

return statearr_82444;
})();
if(cljs.core.truth_(inst_82428__$1)){
var statearr_82445_82458 = state_82438__$1;
(statearr_82445_82458[(1)] = (5));

} else {
var statearr_82446_82459 = state_82438__$1;
(statearr_82446_82459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82439 === (3))){
var inst_82436 = (state_82438[(2)]);
var state_82438__$1 = state_82438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82438__$1,inst_82436);
} else {
if((state_val_82439 === (2))){
var state_82438__$1 = state_82438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82438__$1,(4),ch);
} else {
if((state_val_82439 === (1))){
var state_82438__$1 = state_82438;
var statearr_82447_82460 = state_82438__$1;
(statearr_82447_82460[(2)] = null);

(statearr_82447_82460[(1)] = (2));


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
});})(c__7050__auto__))
;
return ((function (switch__6994__auto__,c__7050__auto__){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_82451 = [null,null,null,null,null,null,null,null,null];
(statearr_82451[(0)] = state_machine__6995__auto__);

(statearr_82451[(1)] = (1));

return statearr_82451;
});
var state_machine__6995__auto____1 = (function (state_82438){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_82438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e82452){if((e82452 instanceof Object)){
var ex__6998__auto__ = e82452;
var statearr_82453_82461 = state_82438;
(statearr_82453_82461[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82462 = state_82438;
state_82438 = G__82462;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_82438){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_82438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_82454 = f__7051__auto__.call(null);
(statearr_82454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_82454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});
om_event_bus.impl.dbg_handle_events_BANG_ = (function dbg_handle_events_BANG_(ch,f){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_82552){
var state_val_82553 = (state_82552[(1)]);
if((state_val_82553 === (7))){
var inst_82548 = (state_82552[(2)]);
var state_82552__$1 = state_82552;
var statearr_82554_82575 = state_82552__$1;
(statearr_82554_82575[(2)] = inst_82548);

(statearr_82554_82575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (1))){
var state_82552__$1 = state_82552;
var statearr_82555_82576 = state_82552__$1;
(statearr_82555_82576[(2)] = null);

(statearr_82555_82576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (4))){
var inst_82521 = (state_82552[(7)]);
var inst_82526 = (state_82552[(2)]);
var inst_82527 = cljs.core.nth.call(null,inst_82526,(0),null);
var inst_82528 = cljs.core.nth.call(null,inst_82526,(1),null);
var inst_82529 = cljs.core._EQ_.call(null,inst_82528,inst_82521);
var state_82552__$1 = (function (){var statearr_82556 = state_82552;
(statearr_82556[(8)] = inst_82527);

return statearr_82556;
})();
if(inst_82529){
var statearr_82557_82577 = state_82552__$1;
(statearr_82557_82577[(1)] = (5));

} else {
var statearr_82558_82578 = state_82552__$1;
(statearr_82558_82578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (6))){
var inst_82527 = (state_82552[(8)]);
var state_82552__$1 = state_82552;
if(cljs.core.truth_(inst_82527)){
var statearr_82559_82579 = state_82552__$1;
(statearr_82559_82579[(1)] = (8));

} else {
var statearr_82560_82580 = state_82552__$1;
(statearr_82560_82580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (3))){
var inst_82550 = (state_82552[(2)]);
var state_82552__$1 = state_82552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82552__$1,inst_82550);
} else {
if((state_val_82553 === (2))){
var inst_82521 = (state_82552[(7)]);
var inst_82521__$1 = cljs.core.async.timeout.call(null,(5000));
var inst_82522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_82523 = [ch,inst_82521__$1];
var inst_82524 = (new cljs.core.PersistentVector(null,2,(5),inst_82522,inst_82523,null));
var state_82552__$1 = (function (){var statearr_82561 = state_82552;
(statearr_82561[(7)] = inst_82521__$1);

return statearr_82561;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_82552__$1,(4),inst_82524);
} else {
if((state_val_82553 === (9))){
var inst_82541 = [new cljs.core.Keyword(null,"event","event",301435442)];
var inst_82542 = [new cljs.core.Keyword("om-event-bus.impl","dead","om-event-bus.impl/dead",-381672107)];
var inst_82543 = cljs.core.PersistentHashMap.fromArrays(inst_82541,inst_82542);
var inst_82544 = f.call(null,inst_82543);
var state_82552__$1 = state_82552;
var statearr_82562_82581 = state_82552__$1;
(statearr_82562_82581[(2)] = inst_82544);

(statearr_82562_82581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (5))){
var inst_82531 = [new cljs.core.Keyword(null,"event","event",301435442)];
var inst_82532 = [new cljs.core.Keyword("om-event-bus.impl","alive","om-event-bus.impl/alive",2065662490)];
var inst_82533 = cljs.core.PersistentHashMap.fromArrays(inst_82531,inst_82532);
var inst_82534 = f.call(null,inst_82533);
var state_82552__$1 = (function (){var statearr_82563 = state_82552;
(statearr_82563[(9)] = inst_82534);

return statearr_82563;
})();
var statearr_82564_82582 = state_82552__$1;
(statearr_82564_82582[(2)] = null);

(statearr_82564_82582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (10))){
var inst_82546 = (state_82552[(2)]);
var state_82552__$1 = state_82552;
var statearr_82565_82583 = state_82552__$1;
(statearr_82565_82583[(2)] = inst_82546);

(statearr_82565_82583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82553 === (8))){
var inst_82527 = (state_82552[(8)]);
var inst_82538 = f.call(null,inst_82527);
var state_82552__$1 = (function (){var statearr_82566 = state_82552;
(statearr_82566[(10)] = inst_82538);

return statearr_82566;
})();
var statearr_82567_82584 = state_82552__$1;
(statearr_82567_82584[(2)] = null);

(statearr_82567_82584[(1)] = (2));


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
}
}
}
});})(c__7050__auto__))
;
return ((function (switch__6994__auto__,c__7050__auto__){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_82571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82571[(0)] = state_machine__6995__auto__);

(statearr_82571[(1)] = (1));

return statearr_82571;
});
var state_machine__6995__auto____1 = (function (state_82552){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_82552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e82572){if((e82572 instanceof Object)){
var ex__6998__auto__ = e82572;
var statearr_82573_82585 = state_82552;
(statearr_82573_82585[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82586 = state_82552;
state_82552 = G__82586;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_82552){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_82552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_82574 = f__7051__auto__.call(null);
(statearr_82574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_82574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});

//# sourceMappingURL=impl.js.map