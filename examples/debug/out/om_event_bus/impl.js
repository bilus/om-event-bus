// Compiled by ClojureScript 0.0-2505
goog.provide('om_event_bus.impl');
goog.require('cljs.core');
goog.require('cljs.core.async');
om_event_bus.impl._STAR_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),false], null);

om_event_bus.impl.ITriggerEvent = (function (){var obj74604 = {};
return obj74604;
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


om_event_bus.impl.IEventBus = (function (){var obj74606 = {};
return obj74606;
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


om_event_bus.impl.IEventRouter = (function (){var obj74608 = {};
return obj74608;
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
if(typeof om_event_bus.impl.t74612 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t74612 = (function (mult,close,parent_mult,router,event_bus_STAR_,meta74613){
this.mult = mult;
this.close = close;
this.parent_mult = parent_mult;
this.router = router;
this.event_bus_STAR_ = event_bus_STAR_;
this.meta74613 = meta74613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t74612.prototype.om_event_bus$impl$ITriggerEvent$ = true;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$ITriggerEvent$trigger$arity$2 = ((function (mult){
return (function (_,event){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,cljs.core.async.muxch_STAR_.call(null,self__.mult),event);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$ = true;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$tap$arity$2 = ((function (mult){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
return cljs.core.async.tap.call(null,self__.mult,ch);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$sink$arity$3 = ((function (mult){
return (function (_,mid_ch,bus){
var self__ = this;
var ___$1 = this;
om_event_bus.impl.tap.call(null,bus,mid_ch);

return cljs.core.async.pipe.call(null,mid_ch,cljs.core.async.muxch_STAR_.call(null,self__.mult),false);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$add_fork$arity$2 = ((function (mult){
return (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,handler);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$add_fork$arity$3 = ((function (mult){
return (function (this$,handler,xform){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,handler,xform);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$add_leg$arity$1 = ((function (mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.pass_event_bus.call(null,self__.router,self__.mult);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$add_leg$arity$2 = ((function (mult){
return (function (this$,xform){
var self__ = this;
var this$__$1 = this;
return om_event_bus.impl.extend_event_bus.call(null,this$__$1,self__.router,null,xform);
});})(mult))
;

om_event_bus.impl.t74612.prototype.om_event_bus$impl$IEventBus$shutdown$arity$1 = ((function (mult){
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

om_event_bus.impl.t74612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mult){
return (function (_74614){
var self__ = this;
var _74614__$1 = this;
return self__.meta74613;
});})(mult))
;

om_event_bus.impl.t74612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mult){
return (function (_74614,meta74613__$1){
var self__ = this;
var _74614__$1 = this;
return (new om_event_bus.impl.t74612(self__.mult,self__.close,self__.parent_mult,self__.router,self__.event_bus_STAR_,meta74613__$1));
});})(mult))
;

om_event_bus.impl.t74612.cljs$lang$type = true;

om_event_bus.impl.t74612.cljs$lang$ctorStr = "om-event-bus.impl/t74612";

om_event_bus.impl.t74612.cljs$lang$ctorPrWriter = ((function (mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t74612");
});})(mult))
;

om_event_bus.impl.__GT_t74612 = ((function (mult){
return (function __GT_t74612(mult__$1,close__$1,parent_mult__$1,router__$1,event_bus_STAR___$1,meta74613){
return (new om_event_bus.impl.t74612(mult__$1,close__$1,parent_mult__$1,router__$1,event_bus_STAR___$1,meta74613));
});})(mult))
;

}

return (new om_event_bus.impl.t74612(mult,close,parent_mult,router,event_bus_STAR_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),57,new cljs.core.Keyword(null,"end-line","end-line",1837326455),82,new cljs.core.Keyword(null,"column","column",2078222095),13,new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
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
if(typeof om_event_bus.impl.t74618 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t74618 = (function (mid_ch,child_mult,event_feed,xform,handler,router,parent_bus,extend_event_bus,meta74619){
this.mid_ch = mid_ch;
this.child_mult = child_mult;
this.event_feed = event_feed;
this.xform = xform;
this.handler = handler;
this.router = router;
this.parent_bus = parent_bus;
this.extend_event_bus = extend_event_bus;
this.meta74619 = meta74619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t74618.prototype.om_event_bus$impl$ITriggerEvent$ = true;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$ITriggerEvent$trigger$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_,event){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.mid_ch,event);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$ = true;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$tap$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
return cljs.core.async.tap.call(null,self__.child_mult,ch);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$sink$arity$3 = ((function (event_feed,child_mult,mid_ch){
return (function (_,mid_ch__$1,bus){
var self__ = this;
var ___$1 = this;
om_event_bus.impl.tap.call(null,bus,mid_ch__$1);

return cljs.core.async.pipe.call(null,mid_ch__$1,cljs.core.async.muxch_STAR_.call(null,self__.child_mult),false);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$add_fork$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,handler__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,handler__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$add_fork$arity$3 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,handler__$1,xform__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,handler__$1,xform__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$add_leg$arity$1 = ((function (event_feed,child_mult,mid_ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.pass_event_bus.call(null,self__.router,self__.child_mult);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$add_leg$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (this$,xform__$1){
var self__ = this;
var this$__$1 = this;
return self__.extend_event_bus.call(null,this$__$1,self__.router,null,xform__$1);
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.om_event_bus$impl$IEventBus$shutdown$arity$1 = ((function (event_feed,child_mult,mid_ch){
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

om_event_bus.impl.t74618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_feed,child_mult,mid_ch){
return (function (_74620){
var self__ = this;
var _74620__$1 = this;
return self__.meta74619;
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_feed,child_mult,mid_ch){
return (function (_74620,meta74619__$1){
var self__ = this;
var _74620__$1 = this;
return (new om_event_bus.impl.t74618(self__.mid_ch,self__.child_mult,self__.event_feed,self__.xform,self__.handler,self__.router,self__.parent_bus,self__.extend_event_bus,meta74619__$1));
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.t74618.cljs$lang$type = true;

om_event_bus.impl.t74618.cljs$lang$ctorStr = "om-event-bus.impl/t74618";

om_event_bus.impl.t74618.cljs$lang$ctorPrWriter = ((function (event_feed,child_mult,mid_ch){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t74618");
});})(event_feed,child_mult,mid_ch))
;

om_event_bus.impl.__GT_t74618 = ((function (event_feed,child_mult,mid_ch){
return (function __GT_t74618(mid_ch__$1,child_mult__$1,event_feed__$1,xform__$1,handler__$1,router__$1,parent_bus__$1,extend_event_bus__$1,meta74619){
return (new om_event_bus.impl.t74618(mid_ch__$1,child_mult__$1,event_feed__$1,xform__$1,handler__$1,router__$1,parent_bus__$1,extend_event_bus__$1,meta74619));
});})(event_feed,child_mult,mid_ch))
;

}

return (new om_event_bus.impl.t74618(mid_ch,child_mult,event_feed,xform,handler,router,parent_bus,extend_event_bus,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),114,new cljs.core.Keyword(null,"column","column",2078222095),21,new cljs.core.Keyword(null,"line","line",212345235),92,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
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
if(typeof om_event_bus.impl.t74624 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t74624 = (function (trickling_router,meta74625){
this.trickling_router = trickling_router;
this.meta74625 = meta74625;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t74624.prototype.om_event_bus$impl$IEventRouter$ = true;

om_event_bus.impl.t74624.prototype.om_event_bus$impl$IEventRouter$leg$arity$4 = (function (_,parent,mid_ch,child){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.sink.call(null,child,mid_ch,parent);
});

om_event_bus.impl.t74624.prototype.om_event_bus$impl$IEventRouter$fork$arity$4 = (function (_,parent,___$1,ch){
var self__ = this;
var ___$2 = this;
return om_event_bus.impl.tap.call(null,parent,ch);
});

om_event_bus.impl.t74624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74626){
var self__ = this;
var _74626__$1 = this;
return self__.meta74625;
});

om_event_bus.impl.t74624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74626,meta74625__$1){
var self__ = this;
var _74626__$1 = this;
return (new om_event_bus.impl.t74624(self__.trickling_router,meta74625__$1));
});

om_event_bus.impl.t74624.cljs$lang$type = true;

om_event_bus.impl.t74624.cljs$lang$ctorStr = "om-event-bus.impl/t74624";

om_event_bus.impl.t74624.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t74624");
});

om_event_bus.impl.__GT_t74624 = (function __GT_t74624(trickling_router__$1,meta74625){
return (new om_event_bus.impl.t74624(trickling_router__$1,meta74625));
});

}

return (new om_event_bus.impl.t74624(trickling_router,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),24,new cljs.core.Keyword(null,"end-line","end-line",1837326455),130,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
});
om_event_bus.impl.bubbling_router = (function bubbling_router(){
if(typeof om_event_bus.impl.t74630 !== 'undefined'){
} else {

/**
* @constructor
*/
om_event_bus.impl.t74630 = (function (bubbling_router,meta74631){
this.bubbling_router = bubbling_router;
this.meta74631 = meta74631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_event_bus.impl.t74630.prototype.om_event_bus$impl$IEventRouter$ = true;

om_event_bus.impl.t74630.prototype.om_event_bus$impl$IEventRouter$leg$arity$4 = (function (_,parent,mid_ch,child){
var self__ = this;
var ___$1 = this;
return om_event_bus.impl.sink.call(null,parent,mid_ch,child);
});

om_event_bus.impl.t74630.prototype.om_event_bus$impl$IEventRouter$fork$arity$4 = (function (_,___$1,child,ch){
var self__ = this;
var ___$2 = this;
return om_event_bus.impl.tap.call(null,child,ch);
});

om_event_bus.impl.t74630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74632){
var self__ = this;
var _74632__$1 = this;
return self__.meta74631;
});

om_event_bus.impl.t74630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74632,meta74631__$1){
var self__ = this;
var _74632__$1 = this;
return (new om_event_bus.impl.t74630(self__.bubbling_router,meta74631__$1));
});

om_event_bus.impl.t74630.cljs$lang$type = true;

om_event_bus.impl.t74630.cljs$lang$ctorStr = "om-event-bus.impl/t74630";

om_event_bus.impl.t74630.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"om-event-bus.impl/t74630");
});

om_event_bus.impl.__GT_t74630 = (function __GT_t74630(bubbling_router__$1,meta74631){
return (new om_event_bus.impl.t74630(bubbling_router__$1,meta74631));
});

}

return (new om_event_bus.impl.t74630(bubbling_router,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),23,new cljs.core.Keyword(null,"end-line","end-line",1837326455),139,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),134,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/target/classes/om_event_bus/impl.cljs"], null)));
});
om_event_bus.impl.handle_events_BANG_ = (function handle_events_BANG_(ch,f){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_74674){
var state_val_74675 = (state_74674[(1)]);
if((state_val_74675 === (7))){
var inst_74670 = (state_74674[(2)]);
var state_74674__$1 = state_74674;
var statearr_74676_74691 = state_74674__$1;
(statearr_74676_74691[(2)] = inst_74670);

(statearr_74676_74691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74675 === (6))){
var state_74674__$1 = state_74674;
var statearr_74677_74692 = state_74674__$1;
(statearr_74677_74692[(2)] = null);

(statearr_74677_74692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74675 === (5))){
var inst_74664 = (state_74674[(7)]);
var inst_74666 = f.call(null,inst_74664);
var state_74674__$1 = (function (){var statearr_74678 = state_74674;
(statearr_74678[(8)] = inst_74666);

return statearr_74678;
})();
var statearr_74679_74693 = state_74674__$1;
(statearr_74679_74693[(2)] = null);

(statearr_74679_74693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74675 === (4))){
var inst_74664 = (state_74674[(7)]);
var inst_74664__$1 = (state_74674[(2)]);
var state_74674__$1 = (function (){var statearr_74680 = state_74674;
(statearr_74680[(7)] = inst_74664__$1);

return statearr_74680;
})();
if(cljs.core.truth_(inst_74664__$1)){
var statearr_74681_74694 = state_74674__$1;
(statearr_74681_74694[(1)] = (5));

} else {
var statearr_74682_74695 = state_74674__$1;
(statearr_74682_74695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74675 === (3))){
var inst_74672 = (state_74674[(2)]);
var state_74674__$1 = state_74674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74674__$1,inst_74672);
} else {
if((state_val_74675 === (2))){
var state_74674__$1 = state_74674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74674__$1,(4),ch);
} else {
if((state_val_74675 === (1))){
var state_74674__$1 = state_74674;
var statearr_74683_74696 = state_74674__$1;
(statearr_74683_74696[(2)] = null);

(statearr_74683_74696[(1)] = (2));


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
var statearr_74687 = [null,null,null,null,null,null,null,null,null];
(statearr_74687[(0)] = state_machine__6995__auto__);

(statearr_74687[(1)] = (1));

return statearr_74687;
});
var state_machine__6995__auto____1 = (function (state_74674){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_74674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e74688){if((e74688 instanceof Object)){
var ex__6998__auto__ = e74688;
var statearr_74689_74697 = state_74674;
(statearr_74689_74697[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74698 = state_74674;
state_74674 = G__74698;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_74674){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_74674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_74690 = f__7051__auto__.call(null);
(statearr_74690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_74690;
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
return (function (state_74788){
var state_val_74789 = (state_74788[(1)]);
if((state_val_74789 === (7))){
var inst_74784 = (state_74788[(2)]);
var state_74788__$1 = state_74788;
var statearr_74790_74811 = state_74788__$1;
(statearr_74790_74811[(2)] = inst_74784);

(statearr_74790_74811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (1))){
var state_74788__$1 = state_74788;
var statearr_74791_74812 = state_74788__$1;
(statearr_74791_74812[(2)] = null);

(statearr_74791_74812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (4))){
var inst_74757 = (state_74788[(7)]);
var inst_74762 = (state_74788[(2)]);
var inst_74763 = cljs.core.nth.call(null,inst_74762,(0),null);
var inst_74764 = cljs.core.nth.call(null,inst_74762,(1),null);
var inst_74765 = cljs.core._EQ_.call(null,inst_74764,inst_74757);
var state_74788__$1 = (function (){var statearr_74792 = state_74788;
(statearr_74792[(8)] = inst_74763);

return statearr_74792;
})();
if(inst_74765){
var statearr_74793_74813 = state_74788__$1;
(statearr_74793_74813[(1)] = (5));

} else {
var statearr_74794_74814 = state_74788__$1;
(statearr_74794_74814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (6))){
var inst_74763 = (state_74788[(8)]);
var state_74788__$1 = state_74788;
if(cljs.core.truth_(inst_74763)){
var statearr_74795_74815 = state_74788__$1;
(statearr_74795_74815[(1)] = (8));

} else {
var statearr_74796_74816 = state_74788__$1;
(statearr_74796_74816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (3))){
var inst_74786 = (state_74788[(2)]);
var state_74788__$1 = state_74788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74788__$1,inst_74786);
} else {
if((state_val_74789 === (2))){
var inst_74757 = (state_74788[(7)]);
var inst_74757__$1 = cljs.core.async.timeout.call(null,(5000));
var inst_74758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74759 = [ch,inst_74757__$1];
var inst_74760 = (new cljs.core.PersistentVector(null,2,(5),inst_74758,inst_74759,null));
var state_74788__$1 = (function (){var statearr_74797 = state_74788;
(statearr_74797[(7)] = inst_74757__$1);

return statearr_74797;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_74788__$1,(4),inst_74760);
} else {
if((state_val_74789 === (9))){
var inst_74777 = [new cljs.core.Keyword(null,"event","event",301435442)];
var inst_74778 = [new cljs.core.Keyword("om-event-bus.impl","dead","om-event-bus.impl/dead",-381672107)];
var inst_74779 = cljs.core.PersistentHashMap.fromArrays(inst_74777,inst_74778);
var inst_74780 = f.call(null,inst_74779);
var state_74788__$1 = state_74788;
var statearr_74798_74817 = state_74788__$1;
(statearr_74798_74817[(2)] = inst_74780);

(statearr_74798_74817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (5))){
var inst_74767 = [new cljs.core.Keyword(null,"event","event",301435442)];
var inst_74768 = [new cljs.core.Keyword("om-event-bus.impl","alive","om-event-bus.impl/alive",2065662490)];
var inst_74769 = cljs.core.PersistentHashMap.fromArrays(inst_74767,inst_74768);
var inst_74770 = f.call(null,inst_74769);
var state_74788__$1 = (function (){var statearr_74799 = state_74788;
(statearr_74799[(9)] = inst_74770);

return statearr_74799;
})();
var statearr_74800_74818 = state_74788__$1;
(statearr_74800_74818[(2)] = null);

(statearr_74800_74818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (10))){
var inst_74782 = (state_74788[(2)]);
var state_74788__$1 = state_74788;
var statearr_74801_74819 = state_74788__$1;
(statearr_74801_74819[(2)] = inst_74782);

(statearr_74801_74819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74789 === (8))){
var inst_74763 = (state_74788[(8)]);
var inst_74774 = f.call(null,inst_74763);
var state_74788__$1 = (function (){var statearr_74802 = state_74788;
(statearr_74802[(10)] = inst_74774);

return statearr_74802;
})();
var statearr_74803_74820 = state_74788__$1;
(statearr_74803_74820[(2)] = null);

(statearr_74803_74820[(1)] = (2));


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
var statearr_74807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74807[(0)] = state_machine__6995__auto__);

(statearr_74807[(1)] = (1));

return statearr_74807;
});
var state_machine__6995__auto____1 = (function (state_74788){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_74788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e74808){if((e74808 instanceof Object)){
var ex__6998__auto__ = e74808;
var statearr_74809_74821 = state_74788;
(statearr_74809_74821[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74822 = state_74788;
state_74788 = G__74822;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_74788){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_74788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_74810 = f__7051__auto__.call(null);
(statearr_74810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_74810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});

//# sourceMappingURL=impl.js.map