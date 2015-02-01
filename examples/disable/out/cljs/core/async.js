// Compiled by ClojureScript 0.0-2505
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t28746 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28746 = (function (f,fn_handler,meta28747){
this.f = f;
this.fn_handler = fn_handler;
this.meta28747 = meta28747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28748){
var self__ = this;
var _28748__$1 = this;
return self__.meta28747;
});

cljs.core.async.t28746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28748,meta28747__$1){
var self__ = this;
var _28748__$1 = this;
return (new cljs.core.async.t28746(self__.f,self__.fn_handler,meta28747__$1));
});

cljs.core.async.t28746.cljs$lang$type = true;

cljs.core.async.t28746.cljs$lang$ctorStr = "cljs.core.async/t28746";

cljs.core.async.t28746.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t28746");
});

cljs.core.async.__GT_t28746 = (function __GT_t28746(f__$1,fn_handler__$1,meta28747){
return (new cljs.core.async.t28746(f__$1,fn_handler__$1,meta28747));
});

}

return (new cljs.core.async.t28746(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__28750 = buff;
if(G__28750){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__28750.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28750.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28750);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28750);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28751 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28751);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28751,ret){
return (function (){
return fn1.call(null,val_28751);
});})(val_28751,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4517__auto___28752 = n;
var x_28753 = (0);
while(true){
if((x_28753 < n__4517__auto___28752)){
(a[x_28753] = (0));

var G__28754 = (x_28753 + (1));
x_28753 = G__28754;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28755 = (i + (1));
i = G__28755;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28759 = (function (flag,alt_flag,meta28760){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28760 = meta28760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28761){
var self__ = this;
var _28761__$1 = this;
return self__.meta28760;
});})(flag))
;

cljs.core.async.t28759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28761,meta28760__$1){
var self__ = this;
var _28761__$1 = this;
return (new cljs.core.async.t28759(self__.flag,self__.alt_flag,meta28760__$1));
});})(flag))
;

cljs.core.async.t28759.cljs$lang$type = true;

cljs.core.async.t28759.cljs$lang$ctorStr = "cljs.core.async/t28759";

cljs.core.async.t28759.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t28759");
});})(flag))
;

cljs.core.async.__GT_t28759 = ((function (flag){
return (function __GT_t28759(flag__$1,alt_flag__$1,meta28760){
return (new cljs.core.async.t28759(flag__$1,alt_flag__$1,meta28760));
});})(flag))
;

}

return (new cljs.core.async.t28759(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28765 = (function (cb,flag,alt_handler,meta28766){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){
var self__ = this;
var _28767__$1 = this;
return self__.meta28766;
});

cljs.core.async.t28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){
var self__ = this;
var _28767__$1 = this;
return (new cljs.core.async.t28765(self__.cb,self__.flag,self__.alt_handler,meta28766__$1));
});

cljs.core.async.t28765.cljs$lang$type = true;

cljs.core.async.t28765.cljs$lang$ctorStr = "cljs.core.async/t28765";

cljs.core.async.t28765.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t28765");
});

cljs.core.async.__GT_t28765 = (function __GT_t28765(cb__$1,flag__$1,alt_handler__$1,meta28766){
return (new cljs.core.async.t28765(cb__$1,flag__$1,alt_handler__$1,meta28766));
});

}

return (new cljs.core.async.t28765(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28768_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28769_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28769_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3630__auto__ = wport;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28770 = (i + (1));
i = G__28770;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3630__auto__ = ret;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3618__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3618__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3618__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__28771){
var map__28773 = p__28771;
var map__28773__$1 = ((cljs.core.seq_QMARK_.call(null,map__28773))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var opts = map__28773__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28771 = null;
if (arguments.length > 1) {
  p__28771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__28771);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28774){
var ports = cljs.core.first(arglist__28774);
var p__28771 = cljs.core.rest(arglist__28774);
return alts_BANG___delegate(ports,p__28771);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7050__auto___28869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___28869){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___28869){
return (function (state_28845){
var state_val_28846 = (state_28845[(1)]);
if((state_val_28846 === (7))){
var inst_28841 = (state_28845[(2)]);
var state_28845__$1 = state_28845;
var statearr_28847_28870 = state_28845__$1;
(statearr_28847_28870[(2)] = inst_28841);

(statearr_28847_28870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (1))){
var state_28845__$1 = state_28845;
var statearr_28848_28871 = state_28845__$1;
(statearr_28848_28871[(2)] = null);

(statearr_28848_28871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (4))){
var inst_28824 = (state_28845[(7)]);
var inst_28824__$1 = (state_28845[(2)]);
var inst_28825 = (inst_28824__$1 == null);
var state_28845__$1 = (function (){var statearr_28849 = state_28845;
(statearr_28849[(7)] = inst_28824__$1);

return statearr_28849;
})();
if(cljs.core.truth_(inst_28825)){
var statearr_28850_28872 = state_28845__$1;
(statearr_28850_28872[(1)] = (5));

} else {
var statearr_28851_28873 = state_28845__$1;
(statearr_28851_28873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (13))){
var state_28845__$1 = state_28845;
var statearr_28852_28874 = state_28845__$1;
(statearr_28852_28874[(2)] = null);

(statearr_28852_28874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (6))){
var inst_28824 = (state_28845[(7)]);
var state_28845__$1 = state_28845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28845__$1,(11),to,inst_28824);
} else {
if((state_val_28846 === (3))){
var inst_28843 = (state_28845[(2)]);
var state_28845__$1 = state_28845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28845__$1,inst_28843);
} else {
if((state_val_28846 === (12))){
var state_28845__$1 = state_28845;
var statearr_28853_28875 = state_28845__$1;
(statearr_28853_28875[(2)] = null);

(statearr_28853_28875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (2))){
var state_28845__$1 = state_28845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28845__$1,(4),from);
} else {
if((state_val_28846 === (11))){
var inst_28834 = (state_28845[(2)]);
var state_28845__$1 = state_28845;
if(cljs.core.truth_(inst_28834)){
var statearr_28854_28876 = state_28845__$1;
(statearr_28854_28876[(1)] = (12));

} else {
var statearr_28855_28877 = state_28845__$1;
(statearr_28855_28877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (9))){
var state_28845__$1 = state_28845;
var statearr_28856_28878 = state_28845__$1;
(statearr_28856_28878[(2)] = null);

(statearr_28856_28878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (5))){
var state_28845__$1 = state_28845;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28857_28879 = state_28845__$1;
(statearr_28857_28879[(1)] = (8));

} else {
var statearr_28858_28880 = state_28845__$1;
(statearr_28858_28880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (14))){
var inst_28839 = (state_28845[(2)]);
var state_28845__$1 = state_28845;
var statearr_28859_28881 = state_28845__$1;
(statearr_28859_28881[(2)] = inst_28839);

(statearr_28859_28881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (10))){
var inst_28831 = (state_28845[(2)]);
var state_28845__$1 = state_28845;
var statearr_28860_28882 = state_28845__$1;
(statearr_28860_28882[(2)] = inst_28831);

(statearr_28860_28882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28846 === (8))){
var inst_28828 = cljs.core.async.close_BANG_.call(null,to);
var state_28845__$1 = state_28845;
var statearr_28861_28883 = state_28845__$1;
(statearr_28861_28883[(2)] = inst_28828);

(statearr_28861_28883[(1)] = (10));


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
}
}
}
}
});})(c__7050__auto___28869))
;
return ((function (switch__6994__auto__,c__7050__auto___28869){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_28865 = [null,null,null,null,null,null,null,null];
(statearr_28865[(0)] = state_machine__6995__auto__);

(statearr_28865[(1)] = (1));

return statearr_28865;
});
var state_machine__6995__auto____1 = (function (state_28845){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_28845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e28866){if((e28866 instanceof Object)){
var ex__6998__auto__ = e28866;
var statearr_28867_28884 = state_28845;
(statearr_28867_28884[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28845;
state_28845 = G__28885;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_28845){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_28845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___28869))
})();
var state__7052__auto__ = (function (){var statearr_28868 = f__7051__auto__.call(null);
(statearr_28868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___28869);

return statearr_28868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___28869))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29069){
var vec__29070 = p__29069;
var v = cljs.core.nth.call(null,vec__29070,(0),null);
var p = cljs.core.nth.call(null,vec__29070,(1),null);
var job = vec__29070;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___29252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results){
return (function (state_29075){
var state_val_29076 = (state_29075[(1)]);
if((state_val_29076 === (2))){
var inst_29072 = (state_29075[(2)]);
var inst_29073 = cljs.core.async.close_BANG_.call(null,res);
var state_29075__$1 = (function (){var statearr_29077 = state_29075;
(statearr_29077[(7)] = inst_29072);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29075__$1,inst_29073);
} else {
if((state_val_29076 === (1))){
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29075__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29081 = [null,null,null,null,null,null,null,null];
(statearr_29081[(0)] = state_machine__6995__auto__);

(statearr_29081[(1)] = (1));

return statearr_29081;
});
var state_machine__6995__auto____1 = (function (state_29075){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29082){if((e29082 instanceof Object)){
var ex__6998__auto__ = e29082;
var statearr_29083_29253 = state_29075;
(statearr_29083_29253[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29254 = state_29075;
state_29075 = G__29254;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29075){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_29084 = f__7051__auto__.call(null);
(statearr_29084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___29252);

return statearr_29084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___29252,res,vec__29070,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29085){
var vec__29086 = p__29085;
var v = cljs.core.nth.call(null,vec__29086,(0),null);
var p = cljs.core.nth.call(null,vec__29086,(1),null);
var job = vec__29086;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4517__auto___29255 = n;
var __29256 = (0);
while(true){
if((__29256 < n__4517__auto___29255)){
var G__29087_29257 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29087_29257) {
case "async":
var c__7050__auto___29259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29256,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__29256,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function (state_29100){
var state_val_29101 = (state_29100[(1)]);
if((state_val_29101 === (7))){
var inst_29096 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29102_29260 = state_29100__$1;
(statearr_29102_29260[(2)] = inst_29096);

(statearr_29102_29260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (6))){
var state_29100__$1 = state_29100;
var statearr_29103_29261 = state_29100__$1;
(statearr_29103_29261[(2)] = null);

(statearr_29103_29261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (5))){
var state_29100__$1 = state_29100;
var statearr_29104_29262 = state_29100__$1;
(statearr_29104_29262[(2)] = null);

(statearr_29104_29262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (4))){
var inst_29090 = (state_29100[(2)]);
var inst_29091 = async.call(null,inst_29090);
var state_29100__$1 = state_29100;
if(cljs.core.truth_(inst_29091)){
var statearr_29105_29263 = state_29100__$1;
(statearr_29105_29263[(1)] = (5));

} else {
var statearr_29106_29264 = state_29100__$1;
(statearr_29106_29264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (3))){
var inst_29098 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29100__$1,inst_29098);
} else {
if((state_val_29101 === (2))){
var state_29100__$1 = state_29100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29100__$1,(4),jobs);
} else {
if((state_val_29101 === (1))){
var state_29100__$1 = state_29100;
var statearr_29107_29265 = state_29100__$1;
(statearr_29107_29265[(2)] = null);

(statearr_29107_29265[(1)] = (2));


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
});})(__29256,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
;
return ((function (__29256,switch__6994__auto__,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29111 = [null,null,null,null,null,null,null];
(statearr_29111[(0)] = state_machine__6995__auto__);

(statearr_29111[(1)] = (1));

return statearr_29111;
});
var state_machine__6995__auto____1 = (function (state_29100){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29112){if((e29112 instanceof Object)){
var ex__6998__auto__ = e29112;
var statearr_29113_29266 = state_29100;
(statearr_29113_29266[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29267 = state_29100;
state_29100 = G__29267;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29100){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__29256,switch__6994__auto__,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_29114 = f__7051__auto__.call(null);
(statearr_29114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___29259);

return statearr_29114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__29256,c__7050__auto___29259,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___29268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29256,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__29256,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function (state_29127){
var state_val_29128 = (state_29127[(1)]);
if((state_val_29128 === (7))){
var inst_29123 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29129_29269 = state_29127__$1;
(statearr_29129_29269[(2)] = inst_29123);

(statearr_29129_29269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (6))){
var state_29127__$1 = state_29127;
var statearr_29130_29270 = state_29127__$1;
(statearr_29130_29270[(2)] = null);

(statearr_29130_29270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (5))){
var state_29127__$1 = state_29127;
var statearr_29131_29271 = state_29127__$1;
(statearr_29131_29271[(2)] = null);

(statearr_29131_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (4))){
var inst_29117 = (state_29127[(2)]);
var inst_29118 = process.call(null,inst_29117);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29118)){
var statearr_29132_29272 = state_29127__$1;
(statearr_29132_29272[(1)] = (5));

} else {
var statearr_29133_29273 = state_29127__$1;
(statearr_29133_29273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (3))){
var inst_29125 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29127__$1,inst_29125);
} else {
if((state_val_29128 === (2))){
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29127__$1,(4),jobs);
} else {
if((state_val_29128 === (1))){
var state_29127__$1 = state_29127;
var statearr_29134_29274 = state_29127__$1;
(statearr_29134_29274[(2)] = null);

(statearr_29134_29274[(1)] = (2));


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
});})(__29256,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
;
return ((function (__29256,switch__6994__auto__,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29138 = [null,null,null,null,null,null,null];
(statearr_29138[(0)] = state_machine__6995__auto__);

(statearr_29138[(1)] = (1));

return statearr_29138;
});
var state_machine__6995__auto____1 = (function (state_29127){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29139){if((e29139 instanceof Object)){
var ex__6998__auto__ = e29139;
var statearr_29140_29275 = state_29127;
(statearr_29140_29275[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29276 = state_29127;
state_29127 = G__29276;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29127){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__29256,switch__6994__auto__,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_29141 = f__7051__auto__.call(null);
(statearr_29141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___29268);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__29256,c__7050__auto___29268,G__29087_29257,n__4517__auto___29255,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29277 = (__29256 + (1));
__29256 = G__29277;
continue;
} else {
}
break;
}

var c__7050__auto___29278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___29278,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___29278,jobs,results,process,async){
return (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (9))){
var inst_29156 = (state_29163[(2)]);
var state_29163__$1 = (function (){var statearr_29165 = state_29163;
(statearr_29165[(7)] = inst_29156);

return statearr_29165;
})();
var statearr_29166_29279 = state_29163__$1;
(statearr_29166_29279[(2)] = null);

(statearr_29166_29279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (8))){
var inst_29149 = (state_29163[(8)]);
var inst_29154 = (state_29163[(2)]);
var state_29163__$1 = (function (){var statearr_29167 = state_29163;
(statearr_29167[(9)] = inst_29154);

return statearr_29167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29163__$1,(9),results,inst_29149);
} else {
if((state_val_29164 === (7))){
var inst_29159 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
var statearr_29168_29280 = state_29163__$1;
(statearr_29168_29280[(2)] = inst_29159);

(statearr_29168_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var inst_29149 = (state_29163[(8)]);
var inst_29144 = (state_29163[(10)]);
var inst_29149__$1 = cljs.core.async.chan.call(null,(1));
var inst_29150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29151 = [inst_29144,inst_29149__$1];
var inst_29152 = (new cljs.core.PersistentVector(null,2,(5),inst_29150,inst_29151,null));
var state_29163__$1 = (function (){var statearr_29169 = state_29163;
(statearr_29169[(8)] = inst_29149__$1);

return statearr_29169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29163__$1,(8),jobs,inst_29152);
} else {
if((state_val_29164 === (5))){
var inst_29147 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29163__$1 = state_29163;
var statearr_29170_29281 = state_29163__$1;
(statearr_29170_29281[(2)] = inst_29147);

(statearr_29170_29281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var inst_29144 = (state_29163[(10)]);
var inst_29144__$1 = (state_29163[(2)]);
var inst_29145 = (inst_29144__$1 == null);
var state_29163__$1 = (function (){var statearr_29171 = state_29163;
(statearr_29171[(10)] = inst_29144__$1);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29145)){
var statearr_29172_29282 = state_29163__$1;
(statearr_29172_29282[(1)] = (5));

} else {
var statearr_29173_29283 = state_29163__$1;
(statearr_29173_29283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (3))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (2))){
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(4),from);
} else {
if((state_val_29164 === (1))){
var state_29163__$1 = state_29163;
var statearr_29174_29284 = state_29163__$1;
(statearr_29174_29284[(2)] = null);

(statearr_29174_29284[(1)] = (2));


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
});})(c__7050__auto___29278,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___29278,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29178[(0)] = state_machine__6995__auto__);

(statearr_29178[(1)] = (1));

return statearr_29178;
});
var state_machine__6995__auto____1 = (function (state_29163){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29179){if((e29179 instanceof Object)){
var ex__6998__auto__ = e29179;
var statearr_29180_29285 = state_29163;
(statearr_29180_29285[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29286 = state_29163;
state_29163 = G__29286;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___29278,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_29181 = f__7051__auto__.call(null);
(statearr_29181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___29278);

return statearr_29181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___29278,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (7))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29221_29287 = state_29219__$1;
(statearr_29221_29287[(2)] = inst_29215);

(statearr_29221_29287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (20))){
var state_29219__$1 = state_29219;
var statearr_29222_29288 = state_29219__$1;
(statearr_29222_29288[(2)] = null);

(statearr_29222_29288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
var statearr_29223_29289 = state_29219__$1;
(statearr_29223_29289[(2)] = null);

(statearr_29223_29289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (4))){
var inst_29184 = (state_29219[(7)]);
var inst_29184__$1 = (state_29219[(2)]);
var inst_29185 = (inst_29184__$1 == null);
var state_29219__$1 = (function (){var statearr_29224 = state_29219;
(statearr_29224[(7)] = inst_29184__$1);

return statearr_29224;
})();
if(cljs.core.truth_(inst_29185)){
var statearr_29225_29290 = state_29219__$1;
(statearr_29225_29290[(1)] = (5));

} else {
var statearr_29226_29291 = state_29219__$1;
(statearr_29226_29291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (15))){
var inst_29197 = (state_29219[(8)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(18),to,inst_29197);
} else {
if((state_val_29220 === (21))){
var inst_29210 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29227_29292 = state_29219__$1;
(statearr_29227_29292[(2)] = inst_29210);

(statearr_29227_29292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (13))){
var inst_29212 = (state_29219[(2)]);
var state_29219__$1 = (function (){var statearr_29228 = state_29219;
(statearr_29228[(9)] = inst_29212);

return statearr_29228;
})();
var statearr_29229_29293 = state_29219__$1;
(statearr_29229_29293[(2)] = null);

(statearr_29229_29293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var inst_29184 = (state_29219[(7)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(11),inst_29184);
} else {
if((state_val_29220 === (17))){
var inst_29205 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
if(cljs.core.truth_(inst_29205)){
var statearr_29230_29294 = state_29219__$1;
(statearr_29230_29294[(1)] = (19));

} else {
var statearr_29231_29295 = state_29219__$1;
(statearr_29231_29295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (12))){
var inst_29194 = (state_29219[(10)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(14),inst_29194);
} else {
if((state_val_29220 === (2))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(4),results);
} else {
if((state_val_29220 === (19))){
var state_29219__$1 = state_29219;
var statearr_29232_29296 = state_29219__$1;
(statearr_29232_29296[(2)] = null);

(statearr_29232_29296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (11))){
var inst_29194 = (state_29219[(2)]);
var state_29219__$1 = (function (){var statearr_29233 = state_29219;
(statearr_29233[(10)] = inst_29194);

return statearr_29233;
})();
var statearr_29234_29297 = state_29219__$1;
(statearr_29234_29297[(2)] = null);

(statearr_29234_29297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (9))){
var state_29219__$1 = state_29219;
var statearr_29235_29298 = state_29219__$1;
(statearr_29235_29298[(2)] = null);

(statearr_29235_29298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var state_29219__$1 = state_29219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29236_29299 = state_29219__$1;
(statearr_29236_29299[(1)] = (8));

} else {
var statearr_29237_29300 = state_29219__$1;
(statearr_29237_29300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (14))){
var inst_29199 = (state_29219[(11)]);
var inst_29197 = (state_29219[(8)]);
var inst_29197__$1 = (state_29219[(2)]);
var inst_29198 = (inst_29197__$1 == null);
var inst_29199__$1 = cljs.core.not.call(null,inst_29198);
var state_29219__$1 = (function (){var statearr_29238 = state_29219;
(statearr_29238[(11)] = inst_29199__$1);

(statearr_29238[(8)] = inst_29197__$1);

return statearr_29238;
})();
if(inst_29199__$1){
var statearr_29239_29301 = state_29219__$1;
(statearr_29239_29301[(1)] = (15));

} else {
var statearr_29240_29302 = state_29219__$1;
(statearr_29240_29302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (16))){
var inst_29199 = (state_29219[(11)]);
var state_29219__$1 = state_29219;
var statearr_29241_29303 = state_29219__$1;
(statearr_29241_29303[(2)] = inst_29199);

(statearr_29241_29303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (10))){
var inst_29191 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29242_29304 = state_29219__$1;
(statearr_29242_29304[(2)] = inst_29191);

(statearr_29242_29304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (18))){
var inst_29202 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29243_29305 = state_29219__$1;
(statearr_29243_29305[(2)] = inst_29202);

(statearr_29243_29305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (8))){
var inst_29188 = cljs.core.async.close_BANG_.call(null,to);
var state_29219__$1 = state_29219;
var statearr_29244_29306 = state_29219__$1;
(statearr_29244_29306[(2)] = inst_29188);

(statearr_29244_29306[(1)] = (10));


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
}
});})(c__7050__auto__,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto__,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29248[(0)] = state_machine__6995__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var state_machine__6995__auto____1 = (function (state_29219){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object)){
var ex__6998__auto__ = e29249;
var statearr_29250_29307 = state_29219;
(statearr_29250_29307[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29308 = state_29219;
state_29219 = G__29308;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_29251 = f__7051__auto__.call(null);
(statearr_29251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__,jobs,results,process,async))
);

return c__7050__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7050__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___29409,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___29409,tc,fc){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29386_29410 = state_29384__$1;
(statearr_29386_29410[(2)] = inst_29380);

(statearr_29386_29410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var state_29384__$1 = state_29384;
var statearr_29387_29411 = state_29384__$1;
(statearr_29387_29411[(2)] = null);

(statearr_29387_29411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var inst_29361 = (state_29384[(7)]);
var inst_29361__$1 = (state_29384[(2)]);
var inst_29362 = (inst_29361__$1 == null);
var state_29384__$1 = (function (){var statearr_29388 = state_29384;
(statearr_29388[(7)] = inst_29361__$1);

return statearr_29388;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29389_29412 = state_29384__$1;
(statearr_29389_29412[(1)] = (5));

} else {
var statearr_29390_29413 = state_29384__$1;
(statearr_29390_29413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (13))){
var state_29384__$1 = state_29384;
var statearr_29391_29414 = state_29384__$1;
(statearr_29391_29414[(2)] = null);

(statearr_29391_29414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29361 = (state_29384[(7)]);
var inst_29367 = p.call(null,inst_29361);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29367)){
var statearr_29392_29415 = state_29384__$1;
(statearr_29392_29415[(1)] = (9));

} else {
var statearr_29393_29416 = state_29384__$1;
(statearr_29393_29416[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (12))){
var state_29384__$1 = state_29384;
var statearr_29394_29417 = state_29384__$1;
(statearr_29394_29417[(2)] = null);

(statearr_29394_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(4),ch);
} else {
if((state_val_29385 === (11))){
var inst_29361 = (state_29384[(7)]);
var inst_29371 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29384__$1,(8),inst_29371,inst_29361);
} else {
if((state_val_29385 === (9))){
var state_29384__$1 = state_29384;
var statearr_29395_29418 = state_29384__$1;
(statearr_29395_29418[(2)] = tc);

(statearr_29395_29418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var inst_29364 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29365 = cljs.core.async.close_BANG_.call(null,fc);
var state_29384__$1 = (function (){var statearr_29396 = state_29384;
(statearr_29396[(8)] = inst_29364);

return statearr_29396;
})();
var statearr_29397_29419 = state_29384__$1;
(statearr_29397_29419[(2)] = inst_29365);

(statearr_29397_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (14))){
var inst_29378 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29398_29420 = state_29384__$1;
(statearr_29398_29420[(2)] = inst_29378);

(statearr_29398_29420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var state_29384__$1 = state_29384;
var statearr_29399_29421 = state_29384__$1;
(statearr_29399_29421[(2)] = fc);

(statearr_29399_29421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29373 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29373)){
var statearr_29400_29422 = state_29384__$1;
(statearr_29400_29422[(1)] = (12));

} else {
var statearr_29401_29423 = state_29384__$1;
(statearr_29401_29423[(1)] = (13));

}

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
}
}
}
}
});})(c__7050__auto___29409,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___29409,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29405 = [null,null,null,null,null,null,null,null,null];
(statearr_29405[(0)] = state_machine__6995__auto__);

(statearr_29405[(1)] = (1));

return statearr_29405;
});
var state_machine__6995__auto____1 = (function (state_29384){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29406){if((e29406 instanceof Object)){
var ex__6998__auto__ = e29406;
var statearr_29407_29424 = state_29384;
(statearr_29407_29424[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29425 = state_29384;
state_29384 = G__29425;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___29409,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_29408 = f__7051__auto__.call(null);
(statearr_29408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___29409);

return statearr_29408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___29409,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_29472){
var state_val_29473 = (state_29472[(1)]);
if((state_val_29473 === (7))){
var inst_29468 = (state_29472[(2)]);
var state_29472__$1 = state_29472;
var statearr_29474_29490 = state_29472__$1;
(statearr_29474_29490[(2)] = inst_29468);

(statearr_29474_29490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (6))){
var inst_29461 = (state_29472[(7)]);
var inst_29458 = (state_29472[(8)]);
var inst_29465 = f.call(null,inst_29458,inst_29461);
var inst_29458__$1 = inst_29465;
var state_29472__$1 = (function (){var statearr_29475 = state_29472;
(statearr_29475[(8)] = inst_29458__$1);

return statearr_29475;
})();
var statearr_29476_29491 = state_29472__$1;
(statearr_29476_29491[(2)] = null);

(statearr_29476_29491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (5))){
var inst_29458 = (state_29472[(8)]);
var state_29472__$1 = state_29472;
var statearr_29477_29492 = state_29472__$1;
(statearr_29477_29492[(2)] = inst_29458);

(statearr_29477_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (4))){
var inst_29461 = (state_29472[(7)]);
var inst_29461__$1 = (state_29472[(2)]);
var inst_29462 = (inst_29461__$1 == null);
var state_29472__$1 = (function (){var statearr_29478 = state_29472;
(statearr_29478[(7)] = inst_29461__$1);

return statearr_29478;
})();
if(cljs.core.truth_(inst_29462)){
var statearr_29479_29493 = state_29472__$1;
(statearr_29479_29493[(1)] = (5));

} else {
var statearr_29480_29494 = state_29472__$1;
(statearr_29480_29494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29473 === (3))){
var inst_29470 = (state_29472[(2)]);
var state_29472__$1 = state_29472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29472__$1,inst_29470);
} else {
if((state_val_29473 === (2))){
var state_29472__$1 = state_29472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29472__$1,(4),ch);
} else {
if((state_val_29473 === (1))){
var inst_29458 = init;
var state_29472__$1 = (function (){var statearr_29481 = state_29472;
(statearr_29481[(8)] = inst_29458);

return statearr_29481;
})();
var statearr_29482_29495 = state_29472__$1;
(statearr_29482_29495[(2)] = null);

(statearr_29482_29495[(1)] = (2));


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
var statearr_29486 = [null,null,null,null,null,null,null,null,null];
(statearr_29486[(0)] = state_machine__6995__auto__);

(statearr_29486[(1)] = (1));

return statearr_29486;
});
var state_machine__6995__auto____1 = (function (state_29472){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29487){if((e29487 instanceof Object)){
var ex__6998__auto__ = e29487;
var statearr_29488_29496 = state_29472;
(statearr_29488_29496[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29497 = state_29472;
state_29472 = G__29497;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29472){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_29489 = f__7051__auto__.call(null);
(statearr_29489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_29489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_29571){
var state_val_29572 = (state_29571[(1)]);
if((state_val_29572 === (7))){
var inst_29553 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29573_29596 = state_29571__$1;
(statearr_29573_29596[(2)] = inst_29553);

(statearr_29573_29596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (1))){
var inst_29547 = cljs.core.seq.call(null,coll);
var inst_29548 = inst_29547;
var state_29571__$1 = (function (){var statearr_29574 = state_29571;
(statearr_29574[(7)] = inst_29548);

return statearr_29574;
})();
var statearr_29575_29597 = state_29571__$1;
(statearr_29575_29597[(2)] = null);

(statearr_29575_29597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (4))){
var inst_29548 = (state_29571[(7)]);
var inst_29551 = cljs.core.first.call(null,inst_29548);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29571__$1,(7),ch,inst_29551);
} else {
if((state_val_29572 === (13))){
var inst_29565 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29576_29598 = state_29571__$1;
(statearr_29576_29598[(2)] = inst_29565);

(statearr_29576_29598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (6))){
var inst_29556 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
if(cljs.core.truth_(inst_29556)){
var statearr_29577_29599 = state_29571__$1;
(statearr_29577_29599[(1)] = (8));

} else {
var statearr_29578_29600 = state_29571__$1;
(statearr_29578_29600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (3))){
var inst_29569 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29571__$1,inst_29569);
} else {
if((state_val_29572 === (12))){
var state_29571__$1 = state_29571;
var statearr_29579_29601 = state_29571__$1;
(statearr_29579_29601[(2)] = null);

(statearr_29579_29601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (2))){
var inst_29548 = (state_29571[(7)]);
var state_29571__$1 = state_29571;
if(cljs.core.truth_(inst_29548)){
var statearr_29580_29602 = state_29571__$1;
(statearr_29580_29602[(1)] = (4));

} else {
var statearr_29581_29603 = state_29571__$1;
(statearr_29581_29603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (11))){
var inst_29562 = cljs.core.async.close_BANG_.call(null,ch);
var state_29571__$1 = state_29571;
var statearr_29582_29604 = state_29571__$1;
(statearr_29582_29604[(2)] = inst_29562);

(statearr_29582_29604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (9))){
var state_29571__$1 = state_29571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29583_29605 = state_29571__$1;
(statearr_29583_29605[(1)] = (11));

} else {
var statearr_29584_29606 = state_29571__$1;
(statearr_29584_29606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (5))){
var inst_29548 = (state_29571[(7)]);
var state_29571__$1 = state_29571;
var statearr_29585_29607 = state_29571__$1;
(statearr_29585_29607[(2)] = inst_29548);

(statearr_29585_29607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (10))){
var inst_29567 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29586_29608 = state_29571__$1;
(statearr_29586_29608[(2)] = inst_29567);

(statearr_29586_29608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (8))){
var inst_29548 = (state_29571[(7)]);
var inst_29558 = cljs.core.next.call(null,inst_29548);
var inst_29548__$1 = inst_29558;
var state_29571__$1 = (function (){var statearr_29587 = state_29571;
(statearr_29587[(7)] = inst_29548__$1);

return statearr_29587;
})();
var statearr_29588_29609 = state_29571__$1;
(statearr_29588_29609[(2)] = null);

(statearr_29588_29609[(1)] = (2));


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
}
}
}
});})(c__7050__auto__))
;
return ((function (switch__6994__auto__,c__7050__auto__){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_29592 = [null,null,null,null,null,null,null,null];
(statearr_29592[(0)] = state_machine__6995__auto__);

(statearr_29592[(1)] = (1));

return statearr_29592;
});
var state_machine__6995__auto____1 = (function (state_29571){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e29593){if((e29593 instanceof Object)){
var ex__6998__auto__ = e29593;
var statearr_29594_29610 = state_29571;
(statearr_29594_29610[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29611 = state_29571;
state_29571 = G__29611;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29571){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_29595 = f__7051__auto__.call(null);
(statearr_29595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_29595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29613 = {};
return obj29613;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3618__auto__ = _;
if(and__3618__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4274__auto__ = (((_ == null))?null:_);
return (function (){var or__3630__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29615 = {};
return obj29615;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29837 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29837 = (function (cs,ch,mult,meta29838){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29838 = meta29838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29837.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29837.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29837.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29837.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29837.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29839){
var self__ = this;
var _29839__$1 = this;
return self__.meta29838;
});})(cs))
;

cljs.core.async.t29837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29839,meta29838__$1){
var self__ = this;
var _29839__$1 = this;
return (new cljs.core.async.t29837(self__.cs,self__.ch,self__.mult,meta29838__$1));
});})(cs))
;

cljs.core.async.t29837.cljs$lang$type = true;

cljs.core.async.t29837.cljs$lang$ctorStr = "cljs.core.async/t29837";

cljs.core.async.t29837.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t29837");
});})(cs))
;

cljs.core.async.__GT_t29837 = ((function (cs){
return (function __GT_t29837(cs__$1,ch__$1,mult__$1,meta29838){
return (new cljs.core.async.t29837(cs__$1,ch__$1,mult__$1,meta29838));
});})(cs))
;

}

return (new cljs.core.async.t29837(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7050__auto___30058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___30058,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___30058,cs,m,dchan,dctr,done){
return (function (state_29970){
var state_val_29971 = (state_29970[(1)]);
if((state_val_29971 === (7))){
var inst_29966 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_29972_30059 = state_29970__$1;
(statearr_29972_30059[(2)] = inst_29966);

(statearr_29972_30059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (20))){
var inst_29871 = (state_29970[(7)]);
var inst_29881 = cljs.core.first.call(null,inst_29871);
var inst_29882 = cljs.core.nth.call(null,inst_29881,(0),null);
var inst_29883 = cljs.core.nth.call(null,inst_29881,(1),null);
var state_29970__$1 = (function (){var statearr_29973 = state_29970;
(statearr_29973[(8)] = inst_29882);

return statearr_29973;
})();
if(cljs.core.truth_(inst_29883)){
var statearr_29974_30060 = state_29970__$1;
(statearr_29974_30060[(1)] = (22));

} else {
var statearr_29975_30061 = state_29970__$1;
(statearr_29975_30061[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (27))){
var inst_29913 = (state_29970[(9)]);
var inst_29842 = (state_29970[(10)]);
var inst_29911 = (state_29970[(11)]);
var inst_29918 = (state_29970[(12)]);
var inst_29918__$1 = cljs.core._nth.call(null,inst_29911,inst_29913);
var inst_29919 = cljs.core.async.put_BANG_.call(null,inst_29918__$1,inst_29842,done);
var state_29970__$1 = (function (){var statearr_29976 = state_29970;
(statearr_29976[(12)] = inst_29918__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29919)){
var statearr_29977_30062 = state_29970__$1;
(statearr_29977_30062[(1)] = (30));

} else {
var statearr_29978_30063 = state_29970__$1;
(statearr_29978_30063[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (1))){
var state_29970__$1 = state_29970;
var statearr_29979_30064 = state_29970__$1;
(statearr_29979_30064[(2)] = null);

(statearr_29979_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (24))){
var inst_29871 = (state_29970[(7)]);
var inst_29888 = (state_29970[(2)]);
var inst_29889 = cljs.core.next.call(null,inst_29871);
var inst_29851 = inst_29889;
var inst_29852 = null;
var inst_29853 = (0);
var inst_29854 = (0);
var state_29970__$1 = (function (){var statearr_29980 = state_29970;
(statearr_29980[(13)] = inst_29888);

(statearr_29980[(14)] = inst_29851);

(statearr_29980[(15)] = inst_29854);

(statearr_29980[(16)] = inst_29852);

(statearr_29980[(17)] = inst_29853);

return statearr_29980;
})();
var statearr_29981_30065 = state_29970__$1;
(statearr_29981_30065[(2)] = null);

(statearr_29981_30065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (39))){
var state_29970__$1 = state_29970;
var statearr_29985_30066 = state_29970__$1;
(statearr_29985_30066[(2)] = null);

(statearr_29985_30066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (4))){
var inst_29842 = (state_29970[(10)]);
var inst_29842__$1 = (state_29970[(2)]);
var inst_29843 = (inst_29842__$1 == null);
var state_29970__$1 = (function (){var statearr_29986 = state_29970;
(statearr_29986[(10)] = inst_29842__$1);

return statearr_29986;
})();
if(cljs.core.truth_(inst_29843)){
var statearr_29987_30067 = state_29970__$1;
(statearr_29987_30067[(1)] = (5));

} else {
var statearr_29988_30068 = state_29970__$1;
(statearr_29988_30068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (15))){
var inst_29851 = (state_29970[(14)]);
var inst_29854 = (state_29970[(15)]);
var inst_29852 = (state_29970[(16)]);
var inst_29853 = (state_29970[(17)]);
var inst_29867 = (state_29970[(2)]);
var inst_29868 = (inst_29854 + (1));
var tmp29982 = inst_29851;
var tmp29983 = inst_29852;
var tmp29984 = inst_29853;
var inst_29851__$1 = tmp29982;
var inst_29852__$1 = tmp29983;
var inst_29853__$1 = tmp29984;
var inst_29854__$1 = inst_29868;
var state_29970__$1 = (function (){var statearr_29989 = state_29970;
(statearr_29989[(14)] = inst_29851__$1);

(statearr_29989[(18)] = inst_29867);

(statearr_29989[(15)] = inst_29854__$1);

(statearr_29989[(16)] = inst_29852__$1);

(statearr_29989[(17)] = inst_29853__$1);

return statearr_29989;
})();
var statearr_29990_30069 = state_29970__$1;
(statearr_29990_30069[(2)] = null);

(statearr_29990_30069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (21))){
var inst_29892 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_29994_30070 = state_29970__$1;
(statearr_29994_30070[(2)] = inst_29892);

(statearr_29994_30070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (31))){
var inst_29918 = (state_29970[(12)]);
var inst_29922 = done.call(null,null);
var inst_29923 = cljs.core.async.untap_STAR_.call(null,m,inst_29918);
var state_29970__$1 = (function (){var statearr_29995 = state_29970;
(statearr_29995[(19)] = inst_29922);

return statearr_29995;
})();
var statearr_29996_30071 = state_29970__$1;
(statearr_29996_30071[(2)] = inst_29923);

(statearr_29996_30071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (32))){
var inst_29912 = (state_29970[(20)]);
var inst_29913 = (state_29970[(9)]);
var inst_29911 = (state_29970[(11)]);
var inst_29910 = (state_29970[(21)]);
var inst_29925 = (state_29970[(2)]);
var inst_29926 = (inst_29913 + (1));
var tmp29991 = inst_29912;
var tmp29992 = inst_29911;
var tmp29993 = inst_29910;
var inst_29910__$1 = tmp29993;
var inst_29911__$1 = tmp29992;
var inst_29912__$1 = tmp29991;
var inst_29913__$1 = inst_29926;
var state_29970__$1 = (function (){var statearr_29997 = state_29970;
(statearr_29997[(20)] = inst_29912__$1);

(statearr_29997[(9)] = inst_29913__$1);

(statearr_29997[(11)] = inst_29911__$1);

(statearr_29997[(22)] = inst_29925);

(statearr_29997[(21)] = inst_29910__$1);

return statearr_29997;
})();
var statearr_29998_30072 = state_29970__$1;
(statearr_29998_30072[(2)] = null);

(statearr_29998_30072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (40))){
var inst_29938 = (state_29970[(23)]);
var inst_29942 = done.call(null,null);
var inst_29943 = cljs.core.async.untap_STAR_.call(null,m,inst_29938);
var state_29970__$1 = (function (){var statearr_29999 = state_29970;
(statearr_29999[(24)] = inst_29942);

return statearr_29999;
})();
var statearr_30000_30073 = state_29970__$1;
(statearr_30000_30073[(2)] = inst_29943);

(statearr_30000_30073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (33))){
var inst_29929 = (state_29970[(25)]);
var inst_29931 = cljs.core.chunked_seq_QMARK_.call(null,inst_29929);
var state_29970__$1 = state_29970;
if(inst_29931){
var statearr_30001_30074 = state_29970__$1;
(statearr_30001_30074[(1)] = (36));

} else {
var statearr_30002_30075 = state_29970__$1;
(statearr_30002_30075[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (13))){
var inst_29861 = (state_29970[(26)]);
var inst_29864 = cljs.core.async.close_BANG_.call(null,inst_29861);
var state_29970__$1 = state_29970;
var statearr_30003_30076 = state_29970__$1;
(statearr_30003_30076[(2)] = inst_29864);

(statearr_30003_30076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (22))){
var inst_29882 = (state_29970[(8)]);
var inst_29885 = cljs.core.async.close_BANG_.call(null,inst_29882);
var state_29970__$1 = state_29970;
var statearr_30004_30077 = state_29970__$1;
(statearr_30004_30077[(2)] = inst_29885);

(statearr_30004_30077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (36))){
var inst_29929 = (state_29970[(25)]);
var inst_29933 = cljs.core.chunk_first.call(null,inst_29929);
var inst_29934 = cljs.core.chunk_rest.call(null,inst_29929);
var inst_29935 = cljs.core.count.call(null,inst_29933);
var inst_29910 = inst_29934;
var inst_29911 = inst_29933;
var inst_29912 = inst_29935;
var inst_29913 = (0);
var state_29970__$1 = (function (){var statearr_30005 = state_29970;
(statearr_30005[(20)] = inst_29912);

(statearr_30005[(9)] = inst_29913);

(statearr_30005[(11)] = inst_29911);

(statearr_30005[(21)] = inst_29910);

return statearr_30005;
})();
var statearr_30006_30078 = state_29970__$1;
(statearr_30006_30078[(2)] = null);

(statearr_30006_30078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (41))){
var inst_29929 = (state_29970[(25)]);
var inst_29945 = (state_29970[(2)]);
var inst_29946 = cljs.core.next.call(null,inst_29929);
var inst_29910 = inst_29946;
var inst_29911 = null;
var inst_29912 = (0);
var inst_29913 = (0);
var state_29970__$1 = (function (){var statearr_30007 = state_29970;
(statearr_30007[(20)] = inst_29912);

(statearr_30007[(9)] = inst_29913);

(statearr_30007[(11)] = inst_29911);

(statearr_30007[(21)] = inst_29910);

(statearr_30007[(27)] = inst_29945);

return statearr_30007;
})();
var statearr_30008_30079 = state_29970__$1;
(statearr_30008_30079[(2)] = null);

(statearr_30008_30079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (43))){
var state_29970__$1 = state_29970;
var statearr_30009_30080 = state_29970__$1;
(statearr_30009_30080[(2)] = null);

(statearr_30009_30080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (29))){
var inst_29954 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30010_30081 = state_29970__$1;
(statearr_30010_30081[(2)] = inst_29954);

(statearr_30010_30081[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (44))){
var inst_29963 = (state_29970[(2)]);
var state_29970__$1 = (function (){var statearr_30011 = state_29970;
(statearr_30011[(28)] = inst_29963);

return statearr_30011;
})();
var statearr_30012_30082 = state_29970__$1;
(statearr_30012_30082[(2)] = null);

(statearr_30012_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (6))){
var inst_29902 = (state_29970[(29)]);
var inst_29901 = cljs.core.deref.call(null,cs);
var inst_29902__$1 = cljs.core.keys.call(null,inst_29901);
var inst_29903 = cljs.core.count.call(null,inst_29902__$1);
var inst_29904 = cljs.core.reset_BANG_.call(null,dctr,inst_29903);
var inst_29909 = cljs.core.seq.call(null,inst_29902__$1);
var inst_29910 = inst_29909;
var inst_29911 = null;
var inst_29912 = (0);
var inst_29913 = (0);
var state_29970__$1 = (function (){var statearr_30013 = state_29970;
(statearr_30013[(20)] = inst_29912);

(statearr_30013[(30)] = inst_29904);

(statearr_30013[(9)] = inst_29913);

(statearr_30013[(11)] = inst_29911);

(statearr_30013[(29)] = inst_29902__$1);

(statearr_30013[(21)] = inst_29910);

return statearr_30013;
})();
var statearr_30014_30083 = state_29970__$1;
(statearr_30014_30083[(2)] = null);

(statearr_30014_30083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (28))){
var inst_29929 = (state_29970[(25)]);
var inst_29910 = (state_29970[(21)]);
var inst_29929__$1 = cljs.core.seq.call(null,inst_29910);
var state_29970__$1 = (function (){var statearr_30015 = state_29970;
(statearr_30015[(25)] = inst_29929__$1);

return statearr_30015;
})();
if(inst_29929__$1){
var statearr_30016_30084 = state_29970__$1;
(statearr_30016_30084[(1)] = (33));

} else {
var statearr_30017_30085 = state_29970__$1;
(statearr_30017_30085[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (25))){
var inst_29912 = (state_29970[(20)]);
var inst_29913 = (state_29970[(9)]);
var inst_29915 = (inst_29913 < inst_29912);
var inst_29916 = inst_29915;
var state_29970__$1 = state_29970;
if(cljs.core.truth_(inst_29916)){
var statearr_30018_30086 = state_29970__$1;
(statearr_30018_30086[(1)] = (27));

} else {
var statearr_30019_30087 = state_29970__$1;
(statearr_30019_30087[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (34))){
var state_29970__$1 = state_29970;
var statearr_30020_30088 = state_29970__$1;
(statearr_30020_30088[(2)] = null);

(statearr_30020_30088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (17))){
var state_29970__$1 = state_29970;
var statearr_30021_30089 = state_29970__$1;
(statearr_30021_30089[(2)] = null);

(statearr_30021_30089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (3))){
var inst_29968 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29970__$1,inst_29968);
} else {
if((state_val_29971 === (12))){
var inst_29897 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30022_30090 = state_29970__$1;
(statearr_30022_30090[(2)] = inst_29897);

(statearr_30022_30090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (2))){
var state_29970__$1 = state_29970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29970__$1,(4),ch);
} else {
if((state_val_29971 === (23))){
var state_29970__$1 = state_29970;
var statearr_30023_30091 = state_29970__$1;
(statearr_30023_30091[(2)] = null);

(statearr_30023_30091[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (35))){
var inst_29952 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30024_30092 = state_29970__$1;
(statearr_30024_30092[(2)] = inst_29952);

(statearr_30024_30092[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (19))){
var inst_29871 = (state_29970[(7)]);
var inst_29875 = cljs.core.chunk_first.call(null,inst_29871);
var inst_29876 = cljs.core.chunk_rest.call(null,inst_29871);
var inst_29877 = cljs.core.count.call(null,inst_29875);
var inst_29851 = inst_29876;
var inst_29852 = inst_29875;
var inst_29853 = inst_29877;
var inst_29854 = (0);
var state_29970__$1 = (function (){var statearr_30025 = state_29970;
(statearr_30025[(14)] = inst_29851);

(statearr_30025[(15)] = inst_29854);

(statearr_30025[(16)] = inst_29852);

(statearr_30025[(17)] = inst_29853);

return statearr_30025;
})();
var statearr_30026_30093 = state_29970__$1;
(statearr_30026_30093[(2)] = null);

(statearr_30026_30093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (11))){
var inst_29851 = (state_29970[(14)]);
var inst_29871 = (state_29970[(7)]);
var inst_29871__$1 = cljs.core.seq.call(null,inst_29851);
var state_29970__$1 = (function (){var statearr_30027 = state_29970;
(statearr_30027[(7)] = inst_29871__$1);

return statearr_30027;
})();
if(inst_29871__$1){
var statearr_30028_30094 = state_29970__$1;
(statearr_30028_30094[(1)] = (16));

} else {
var statearr_30029_30095 = state_29970__$1;
(statearr_30029_30095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (9))){
var inst_29899 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30030_30096 = state_29970__$1;
(statearr_30030_30096[(2)] = inst_29899);

(statearr_30030_30096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (5))){
var inst_29849 = cljs.core.deref.call(null,cs);
var inst_29850 = cljs.core.seq.call(null,inst_29849);
var inst_29851 = inst_29850;
var inst_29852 = null;
var inst_29853 = (0);
var inst_29854 = (0);
var state_29970__$1 = (function (){var statearr_30031 = state_29970;
(statearr_30031[(14)] = inst_29851);

(statearr_30031[(15)] = inst_29854);

(statearr_30031[(16)] = inst_29852);

(statearr_30031[(17)] = inst_29853);

return statearr_30031;
})();
var statearr_30032_30097 = state_29970__$1;
(statearr_30032_30097[(2)] = null);

(statearr_30032_30097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (14))){
var state_29970__$1 = state_29970;
var statearr_30033_30098 = state_29970__$1;
(statearr_30033_30098[(2)] = null);

(statearr_30033_30098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (45))){
var inst_29960 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30034_30099 = state_29970__$1;
(statearr_30034_30099[(2)] = inst_29960);

(statearr_30034_30099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (26))){
var inst_29902 = (state_29970[(29)]);
var inst_29956 = (state_29970[(2)]);
var inst_29957 = cljs.core.seq.call(null,inst_29902);
var state_29970__$1 = (function (){var statearr_30035 = state_29970;
(statearr_30035[(31)] = inst_29956);

return statearr_30035;
})();
if(inst_29957){
var statearr_30036_30100 = state_29970__$1;
(statearr_30036_30100[(1)] = (42));

} else {
var statearr_30037_30101 = state_29970__$1;
(statearr_30037_30101[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (16))){
var inst_29871 = (state_29970[(7)]);
var inst_29873 = cljs.core.chunked_seq_QMARK_.call(null,inst_29871);
var state_29970__$1 = state_29970;
if(inst_29873){
var statearr_30038_30102 = state_29970__$1;
(statearr_30038_30102[(1)] = (19));

} else {
var statearr_30039_30103 = state_29970__$1;
(statearr_30039_30103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (38))){
var inst_29949 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30040_30104 = state_29970__$1;
(statearr_30040_30104[(2)] = inst_29949);

(statearr_30040_30104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (30))){
var state_29970__$1 = state_29970;
var statearr_30041_30105 = state_29970__$1;
(statearr_30041_30105[(2)] = null);

(statearr_30041_30105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (10))){
var inst_29854 = (state_29970[(15)]);
var inst_29852 = (state_29970[(16)]);
var inst_29860 = cljs.core._nth.call(null,inst_29852,inst_29854);
var inst_29861 = cljs.core.nth.call(null,inst_29860,(0),null);
var inst_29862 = cljs.core.nth.call(null,inst_29860,(1),null);
var state_29970__$1 = (function (){var statearr_30042 = state_29970;
(statearr_30042[(26)] = inst_29861);

return statearr_30042;
})();
if(cljs.core.truth_(inst_29862)){
var statearr_30043_30106 = state_29970__$1;
(statearr_30043_30106[(1)] = (13));

} else {
var statearr_30044_30107 = state_29970__$1;
(statearr_30044_30107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (18))){
var inst_29895 = (state_29970[(2)]);
var state_29970__$1 = state_29970;
var statearr_30045_30108 = state_29970__$1;
(statearr_30045_30108[(2)] = inst_29895);

(statearr_30045_30108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (42))){
var state_29970__$1 = state_29970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29970__$1,(45),dchan);
} else {
if((state_val_29971 === (37))){
var inst_29938 = (state_29970[(23)]);
var inst_29929 = (state_29970[(25)]);
var inst_29842 = (state_29970[(10)]);
var inst_29938__$1 = cljs.core.first.call(null,inst_29929);
var inst_29939 = cljs.core.async.put_BANG_.call(null,inst_29938__$1,inst_29842,done);
var state_29970__$1 = (function (){var statearr_30046 = state_29970;
(statearr_30046[(23)] = inst_29938__$1);

return statearr_30046;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_30047_30109 = state_29970__$1;
(statearr_30047_30109[(1)] = (39));

} else {
var statearr_30048_30110 = state_29970__$1;
(statearr_30048_30110[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29971 === (8))){
var inst_29854 = (state_29970[(15)]);
var inst_29853 = (state_29970[(17)]);
var inst_29856 = (inst_29854 < inst_29853);
var inst_29857 = inst_29856;
var state_29970__$1 = state_29970;
if(cljs.core.truth_(inst_29857)){
var statearr_30049_30111 = state_29970__$1;
(statearr_30049_30111[(1)] = (10));

} else {
var statearr_30050_30112 = state_29970__$1;
(statearr_30050_30112[(1)] = (11));

}

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
}
}
}
}
}
});})(c__7050__auto___30058,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___30058,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = state_machine__6995__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var state_machine__6995__auto____1 = (function (state_29970){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_29970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e30055){if((e30055 instanceof Object)){
var ex__6998__auto__ = e30055;
var statearr_30056_30113 = state_29970;
(statearr_30056_30113[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30114 = state_29970;
state_29970 = G__30114;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_29970){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_29970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___30058,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_30057 = f__7051__auto__.call(null);
(statearr_30057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___30058);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___30058,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj30116 = {};
return obj30116;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3618__auto__ = m;
if(and__3618__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4274__auto__ = (((m == null))?null:m);
return (function (){var or__3630__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30117){
var map__30122 = p__30117;
var map__30122__$1 = ((cljs.core.seq_QMARK_.call(null,map__30122))?cljs.core.apply.call(null,cljs.core.hash_map,map__30122):map__30122);
var opts = map__30122__$1;
var statearr_30123_30126 = state;
(statearr_30123_30126[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30122,map__30122__$1,opts){
return (function (val){
var statearr_30124_30127 = state;
(statearr_30124_30127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30122,map__30122__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30125_30128 = state;
(statearr_30125_30128[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30117 = null;
if (arguments.length > 3) {
  p__30117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30117);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30129){
var state = cljs.core.first(arglist__30129);
arglist__30129 = cljs.core.next(arglist__30129);
var cont_block = cljs.core.first(arglist__30129);
arglist__30129 = cljs.core.next(arglist__30129);
var ports = cljs.core.first(arglist__30129);
var p__30117 = cljs.core.rest(arglist__30129);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30117);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30249 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30250){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30250 = meta30250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30249.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30251){
var self__ = this;
var _30251__$1 = this;
return self__.meta30250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30251,meta30250__$1){
var self__ = this;
var _30251__$1 = this;
return (new cljs.core.async.t30249(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30249.cljs$lang$type = true;

cljs.core.async.t30249.cljs$lang$ctorStr = "cljs.core.async/t30249";

cljs.core.async.t30249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t30249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30249(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30250){
return (new cljs.core.async.t30249(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30249(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___30368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30321){
var state_val_30322 = (state_30321[(1)]);
if((state_val_30322 === (7))){
var inst_30265 = (state_30321[(7)]);
var inst_30270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30265);
var state_30321__$1 = state_30321;
var statearr_30323_30369 = state_30321__$1;
(statearr_30323_30369[(2)] = inst_30270);

(statearr_30323_30369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (20))){
var inst_30280 = (state_30321[(8)]);
var state_30321__$1 = state_30321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30321__$1,(23),out,inst_30280);
} else {
if((state_val_30322 === (1))){
var inst_30255 = (state_30321[(9)]);
var inst_30255__$1 = calc_state.call(null);
var inst_30256 = cljs.core.seq_QMARK_.call(null,inst_30255__$1);
var state_30321__$1 = (function (){var statearr_30324 = state_30321;
(statearr_30324[(9)] = inst_30255__$1);

return statearr_30324;
})();
if(inst_30256){
var statearr_30325_30370 = state_30321__$1;
(statearr_30325_30370[(1)] = (2));

} else {
var statearr_30326_30371 = state_30321__$1;
(statearr_30326_30371[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (24))){
var inst_30273 = (state_30321[(10)]);
var inst_30265 = inst_30273;
var state_30321__$1 = (function (){var statearr_30327 = state_30321;
(statearr_30327[(7)] = inst_30265);

return statearr_30327;
})();
var statearr_30328_30372 = state_30321__$1;
(statearr_30328_30372[(2)] = null);

(statearr_30328_30372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (4))){
var inst_30255 = (state_30321[(9)]);
var inst_30261 = (state_30321[(2)]);
var inst_30262 = cljs.core.get.call(null,inst_30261,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30263 = cljs.core.get.call(null,inst_30261,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30264 = cljs.core.get.call(null,inst_30261,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30265 = inst_30255;
var state_30321__$1 = (function (){var statearr_30329 = state_30321;
(statearr_30329[(11)] = inst_30262);

(statearr_30329[(12)] = inst_30263);

(statearr_30329[(7)] = inst_30265);

(statearr_30329[(13)] = inst_30264);

return statearr_30329;
})();
var statearr_30330_30373 = state_30321__$1;
(statearr_30330_30373[(2)] = null);

(statearr_30330_30373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (15))){
var state_30321__$1 = state_30321;
var statearr_30331_30374 = state_30321__$1;
(statearr_30331_30374[(2)] = null);

(statearr_30331_30374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (21))){
var inst_30273 = (state_30321[(10)]);
var inst_30265 = inst_30273;
var state_30321__$1 = (function (){var statearr_30332 = state_30321;
(statearr_30332[(7)] = inst_30265);

return statearr_30332;
})();
var statearr_30333_30375 = state_30321__$1;
(statearr_30333_30375[(2)] = null);

(statearr_30333_30375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (13))){
var inst_30317 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30334_30376 = state_30321__$1;
(statearr_30334_30376[(2)] = inst_30317);

(statearr_30334_30376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (22))){
var inst_30315 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30335_30377 = state_30321__$1;
(statearr_30335_30377[(2)] = inst_30315);

(statearr_30335_30377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (6))){
var inst_30319 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30321__$1,inst_30319);
} else {
if((state_val_30322 === (25))){
var state_30321__$1 = state_30321;
var statearr_30336_30378 = state_30321__$1;
(statearr_30336_30378[(2)] = null);

(statearr_30336_30378[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (17))){
var inst_30295 = (state_30321[(14)]);
var state_30321__$1 = state_30321;
var statearr_30337_30379 = state_30321__$1;
(statearr_30337_30379[(2)] = inst_30295);

(statearr_30337_30379[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (3))){
var inst_30255 = (state_30321[(9)]);
var state_30321__$1 = state_30321;
var statearr_30338_30380 = state_30321__$1;
(statearr_30338_30380[(2)] = inst_30255);

(statearr_30338_30380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (12))){
var inst_30281 = (state_30321[(15)]);
var inst_30276 = (state_30321[(16)]);
var inst_30295 = (state_30321[(14)]);
var inst_30295__$1 = inst_30276.call(null,inst_30281);
var state_30321__$1 = (function (){var statearr_30339 = state_30321;
(statearr_30339[(14)] = inst_30295__$1);

return statearr_30339;
})();
if(cljs.core.truth_(inst_30295__$1)){
var statearr_30340_30381 = state_30321__$1;
(statearr_30340_30381[(1)] = (17));

} else {
var statearr_30341_30382 = state_30321__$1;
(statearr_30341_30382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (2))){
var inst_30255 = (state_30321[(9)]);
var inst_30258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30255);
var state_30321__$1 = state_30321;
var statearr_30342_30383 = state_30321__$1;
(statearr_30342_30383[(2)] = inst_30258);

(statearr_30342_30383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (23))){
var inst_30306 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
if(cljs.core.truth_(inst_30306)){
var statearr_30343_30384 = state_30321__$1;
(statearr_30343_30384[(1)] = (24));

} else {
var statearr_30344_30385 = state_30321__$1;
(statearr_30344_30385[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (19))){
var inst_30303 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
if(cljs.core.truth_(inst_30303)){
var statearr_30345_30386 = state_30321__$1;
(statearr_30345_30386[(1)] = (20));

} else {
var statearr_30346_30387 = state_30321__$1;
(statearr_30346_30387[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (11))){
var inst_30280 = (state_30321[(8)]);
var inst_30286 = (inst_30280 == null);
var state_30321__$1 = state_30321;
if(cljs.core.truth_(inst_30286)){
var statearr_30347_30388 = state_30321__$1;
(statearr_30347_30388[(1)] = (14));

} else {
var statearr_30348_30389 = state_30321__$1;
(statearr_30348_30389[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (9))){
var inst_30273 = (state_30321[(10)]);
var inst_30273__$1 = (state_30321[(2)]);
var inst_30274 = cljs.core.get.call(null,inst_30273__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30275 = cljs.core.get.call(null,inst_30273__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30276 = cljs.core.get.call(null,inst_30273__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30321__$1 = (function (){var statearr_30349 = state_30321;
(statearr_30349[(17)] = inst_30275);

(statearr_30349[(10)] = inst_30273__$1);

(statearr_30349[(16)] = inst_30276);

return statearr_30349;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30321__$1,(10),inst_30274);
} else {
if((state_val_30322 === (5))){
var inst_30265 = (state_30321[(7)]);
var inst_30268 = cljs.core.seq_QMARK_.call(null,inst_30265);
var state_30321__$1 = state_30321;
if(inst_30268){
var statearr_30350_30390 = state_30321__$1;
(statearr_30350_30390[(1)] = (7));

} else {
var statearr_30351_30391 = state_30321__$1;
(statearr_30351_30391[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (14))){
var inst_30281 = (state_30321[(15)]);
var inst_30288 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30281);
var state_30321__$1 = state_30321;
var statearr_30352_30392 = state_30321__$1;
(statearr_30352_30392[(2)] = inst_30288);

(statearr_30352_30392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (26))){
var inst_30311 = (state_30321[(2)]);
var state_30321__$1 = state_30321;
var statearr_30353_30393 = state_30321__$1;
(statearr_30353_30393[(2)] = inst_30311);

(statearr_30353_30393[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (16))){
var inst_30291 = (state_30321[(2)]);
var inst_30292 = calc_state.call(null);
var inst_30265 = inst_30292;
var state_30321__$1 = (function (){var statearr_30354 = state_30321;
(statearr_30354[(7)] = inst_30265);

(statearr_30354[(18)] = inst_30291);

return statearr_30354;
})();
var statearr_30355_30394 = state_30321__$1;
(statearr_30355_30394[(2)] = null);

(statearr_30355_30394[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (10))){
var inst_30281 = (state_30321[(15)]);
var inst_30280 = (state_30321[(8)]);
var inst_30279 = (state_30321[(2)]);
var inst_30280__$1 = cljs.core.nth.call(null,inst_30279,(0),null);
var inst_30281__$1 = cljs.core.nth.call(null,inst_30279,(1),null);
var inst_30282 = (inst_30280__$1 == null);
var inst_30283 = cljs.core._EQ_.call(null,inst_30281__$1,change);
var inst_30284 = (inst_30282) || (inst_30283);
var state_30321__$1 = (function (){var statearr_30356 = state_30321;
(statearr_30356[(15)] = inst_30281__$1);

(statearr_30356[(8)] = inst_30280__$1);

return statearr_30356;
})();
if(cljs.core.truth_(inst_30284)){
var statearr_30357_30395 = state_30321__$1;
(statearr_30357_30395[(1)] = (11));

} else {
var statearr_30358_30396 = state_30321__$1;
(statearr_30358_30396[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (18))){
var inst_30281 = (state_30321[(15)]);
var inst_30275 = (state_30321[(17)]);
var inst_30276 = (state_30321[(16)]);
var inst_30298 = cljs.core.empty_QMARK_.call(null,inst_30276);
var inst_30299 = inst_30275.call(null,inst_30281);
var inst_30300 = cljs.core.not.call(null,inst_30299);
var inst_30301 = (inst_30298) && (inst_30300);
var state_30321__$1 = state_30321;
var statearr_30359_30397 = state_30321__$1;
(statearr_30359_30397[(2)] = inst_30301);

(statearr_30359_30397[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30322 === (8))){
var inst_30265 = (state_30321[(7)]);
var state_30321__$1 = state_30321;
var statearr_30360_30398 = state_30321__$1;
(statearr_30360_30398[(2)] = inst_30265);

(statearr_30360_30398[(1)] = (9));


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
}
}
}
}
}
}
});})(c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_30364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30364[(0)] = state_machine__6995__auto__);

(statearr_30364[(1)] = (1));

return statearr_30364;
});
var state_machine__6995__auto____1 = (function (state_30321){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_30321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e30365){if((e30365 instanceof Object)){
var ex__6998__auto__ = e30365;
var statearr_30366_30399 = state_30321;
(statearr_30366_30399[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30400 = state_30321;
state_30321 = G__30400;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_30321){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_30321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_30367 = f__7051__auto__.call(null);
(statearr_30367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___30368);

return statearr_30367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___30368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30402 = {};
return obj30402;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3618__auto__ = p;
if(and__3618__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4274__auto__ = (((p == null))?null:p);
return (function (){var or__3630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3630__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3630__auto__,mults){
return (function (p1__30403_SHARP_){
if(cljs.core.truth_(p1__30403_SHARP_.call(null,topic))){
return p1__30403_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30403_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30526 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30527){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30527 = meta30527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30526.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30526.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30528){
var self__ = this;
var _30528__$1 = this;
return self__.meta30527;
});})(mults,ensure_mult))
;

cljs.core.async.t30526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30528,meta30527__$1){
var self__ = this;
var _30528__$1 = this;
return (new cljs.core.async.t30526(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30527__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30526.cljs$lang$type = true;

cljs.core.async.t30526.cljs$lang$ctorStr = "cljs.core.async/t30526";

cljs.core.async.t30526.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t30526");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30526 = ((function (mults,ensure_mult){
return (function __GT_t30526(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30527){
return (new cljs.core.async.t30526(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30527));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30526(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___30648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___30648,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___30648,mults,ensure_mult,p){
return (function (state_30600){
var state_val_30601 = (state_30600[(1)]);
if((state_val_30601 === (7))){
var inst_30596 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30602_30649 = state_30600__$1;
(statearr_30602_30649[(2)] = inst_30596);

(statearr_30602_30649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (20))){
var state_30600__$1 = state_30600;
var statearr_30603_30650 = state_30600__$1;
(statearr_30603_30650[(2)] = null);

(statearr_30603_30650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (1))){
var state_30600__$1 = state_30600;
var statearr_30604_30651 = state_30600__$1;
(statearr_30604_30651[(2)] = null);

(statearr_30604_30651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (24))){
var inst_30579 = (state_30600[(7)]);
var inst_30588 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30579);
var state_30600__$1 = state_30600;
var statearr_30605_30652 = state_30600__$1;
(statearr_30605_30652[(2)] = inst_30588);

(statearr_30605_30652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (4))){
var inst_30531 = (state_30600[(8)]);
var inst_30531__$1 = (state_30600[(2)]);
var inst_30532 = (inst_30531__$1 == null);
var state_30600__$1 = (function (){var statearr_30606 = state_30600;
(statearr_30606[(8)] = inst_30531__$1);

return statearr_30606;
})();
if(cljs.core.truth_(inst_30532)){
var statearr_30607_30653 = state_30600__$1;
(statearr_30607_30653[(1)] = (5));

} else {
var statearr_30608_30654 = state_30600__$1;
(statearr_30608_30654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (15))){
var inst_30573 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30609_30655 = state_30600__$1;
(statearr_30609_30655[(2)] = inst_30573);

(statearr_30609_30655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (21))){
var inst_30593 = (state_30600[(2)]);
var state_30600__$1 = (function (){var statearr_30610 = state_30600;
(statearr_30610[(9)] = inst_30593);

return statearr_30610;
})();
var statearr_30611_30656 = state_30600__$1;
(statearr_30611_30656[(2)] = null);

(statearr_30611_30656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (13))){
var inst_30555 = (state_30600[(10)]);
var inst_30557 = cljs.core.chunked_seq_QMARK_.call(null,inst_30555);
var state_30600__$1 = state_30600;
if(inst_30557){
var statearr_30612_30657 = state_30600__$1;
(statearr_30612_30657[(1)] = (16));

} else {
var statearr_30613_30658 = state_30600__$1;
(statearr_30613_30658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (22))){
var inst_30585 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
if(cljs.core.truth_(inst_30585)){
var statearr_30614_30659 = state_30600__$1;
(statearr_30614_30659[(1)] = (23));

} else {
var statearr_30615_30660 = state_30600__$1;
(statearr_30615_30660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (6))){
var inst_30579 = (state_30600[(7)]);
var inst_30581 = (state_30600[(11)]);
var inst_30531 = (state_30600[(8)]);
var inst_30579__$1 = topic_fn.call(null,inst_30531);
var inst_30580 = cljs.core.deref.call(null,mults);
var inst_30581__$1 = cljs.core.get.call(null,inst_30580,inst_30579__$1);
var state_30600__$1 = (function (){var statearr_30616 = state_30600;
(statearr_30616[(7)] = inst_30579__$1);

(statearr_30616[(11)] = inst_30581__$1);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30581__$1)){
var statearr_30617_30661 = state_30600__$1;
(statearr_30617_30661[(1)] = (19));

} else {
var statearr_30618_30662 = state_30600__$1;
(statearr_30618_30662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (25))){
var inst_30590 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30619_30663 = state_30600__$1;
(statearr_30619_30663[(2)] = inst_30590);

(statearr_30619_30663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (17))){
var inst_30555 = (state_30600[(10)]);
var inst_30564 = cljs.core.first.call(null,inst_30555);
var inst_30565 = cljs.core.async.muxch_STAR_.call(null,inst_30564);
var inst_30566 = cljs.core.async.close_BANG_.call(null,inst_30565);
var inst_30567 = cljs.core.next.call(null,inst_30555);
var inst_30541 = inst_30567;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30600__$1 = (function (){var statearr_30620 = state_30600;
(statearr_30620[(12)] = inst_30566);

(statearr_30620[(13)] = inst_30544);

(statearr_30620[(14)] = inst_30542);

(statearr_30620[(15)] = inst_30543);

(statearr_30620[(16)] = inst_30541);

return statearr_30620;
})();
var statearr_30621_30664 = state_30600__$1;
(statearr_30621_30664[(2)] = null);

(statearr_30621_30664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (3))){
var inst_30598 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30600__$1,inst_30598);
} else {
if((state_val_30601 === (12))){
var inst_30575 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30622_30665 = state_30600__$1;
(statearr_30622_30665[(2)] = inst_30575);

(statearr_30622_30665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (2))){
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30600__$1,(4),ch);
} else {
if((state_val_30601 === (23))){
var state_30600__$1 = state_30600;
var statearr_30623_30666 = state_30600__$1;
(statearr_30623_30666[(2)] = null);

(statearr_30623_30666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (19))){
var inst_30581 = (state_30600[(11)]);
var inst_30531 = (state_30600[(8)]);
var inst_30583 = cljs.core.async.muxch_STAR_.call(null,inst_30581);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30600__$1,(22),inst_30583,inst_30531);
} else {
if((state_val_30601 === (11))){
var inst_30555 = (state_30600[(10)]);
var inst_30541 = (state_30600[(16)]);
var inst_30555__$1 = cljs.core.seq.call(null,inst_30541);
var state_30600__$1 = (function (){var statearr_30624 = state_30600;
(statearr_30624[(10)] = inst_30555__$1);

return statearr_30624;
})();
if(inst_30555__$1){
var statearr_30625_30667 = state_30600__$1;
(statearr_30625_30667[(1)] = (13));

} else {
var statearr_30626_30668 = state_30600__$1;
(statearr_30626_30668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (9))){
var inst_30577 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30627_30669 = state_30600__$1;
(statearr_30627_30669[(2)] = inst_30577);

(statearr_30627_30669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (5))){
var inst_30538 = cljs.core.deref.call(null,mults);
var inst_30539 = cljs.core.vals.call(null,inst_30538);
var inst_30540 = cljs.core.seq.call(null,inst_30539);
var inst_30541 = inst_30540;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30600__$1 = (function (){var statearr_30628 = state_30600;
(statearr_30628[(13)] = inst_30544);

(statearr_30628[(14)] = inst_30542);

(statearr_30628[(15)] = inst_30543);

(statearr_30628[(16)] = inst_30541);

return statearr_30628;
})();
var statearr_30629_30670 = state_30600__$1;
(statearr_30629_30670[(2)] = null);

(statearr_30629_30670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (14))){
var state_30600__$1 = state_30600;
var statearr_30633_30671 = state_30600__$1;
(statearr_30633_30671[(2)] = null);

(statearr_30633_30671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (16))){
var inst_30555 = (state_30600[(10)]);
var inst_30559 = cljs.core.chunk_first.call(null,inst_30555);
var inst_30560 = cljs.core.chunk_rest.call(null,inst_30555);
var inst_30561 = cljs.core.count.call(null,inst_30559);
var inst_30541 = inst_30560;
var inst_30542 = inst_30559;
var inst_30543 = inst_30561;
var inst_30544 = (0);
var state_30600__$1 = (function (){var statearr_30634 = state_30600;
(statearr_30634[(13)] = inst_30544);

(statearr_30634[(14)] = inst_30542);

(statearr_30634[(15)] = inst_30543);

(statearr_30634[(16)] = inst_30541);

return statearr_30634;
})();
var statearr_30635_30672 = state_30600__$1;
(statearr_30635_30672[(2)] = null);

(statearr_30635_30672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (10))){
var inst_30544 = (state_30600[(13)]);
var inst_30542 = (state_30600[(14)]);
var inst_30543 = (state_30600[(15)]);
var inst_30541 = (state_30600[(16)]);
var inst_30549 = cljs.core._nth.call(null,inst_30542,inst_30544);
var inst_30550 = cljs.core.async.muxch_STAR_.call(null,inst_30549);
var inst_30551 = cljs.core.async.close_BANG_.call(null,inst_30550);
var inst_30552 = (inst_30544 + (1));
var tmp30630 = inst_30542;
var tmp30631 = inst_30543;
var tmp30632 = inst_30541;
var inst_30541__$1 = tmp30632;
var inst_30542__$1 = tmp30630;
var inst_30543__$1 = tmp30631;
var inst_30544__$1 = inst_30552;
var state_30600__$1 = (function (){var statearr_30636 = state_30600;
(statearr_30636[(17)] = inst_30551);

(statearr_30636[(13)] = inst_30544__$1);

(statearr_30636[(14)] = inst_30542__$1);

(statearr_30636[(15)] = inst_30543__$1);

(statearr_30636[(16)] = inst_30541__$1);

return statearr_30636;
})();
var statearr_30637_30673 = state_30600__$1;
(statearr_30637_30673[(2)] = null);

(statearr_30637_30673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (18))){
var inst_30570 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30638_30674 = state_30600__$1;
(statearr_30638_30674[(2)] = inst_30570);

(statearr_30638_30674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (8))){
var inst_30544 = (state_30600[(13)]);
var inst_30543 = (state_30600[(15)]);
var inst_30546 = (inst_30544 < inst_30543);
var inst_30547 = inst_30546;
var state_30600__$1 = state_30600;
if(cljs.core.truth_(inst_30547)){
var statearr_30639_30675 = state_30600__$1;
(statearr_30639_30675[(1)] = (10));

} else {
var statearr_30640_30676 = state_30600__$1;
(statearr_30640_30676[(1)] = (11));

}

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
}
}
}
}
}
});})(c__7050__auto___30648,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___30648,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_30644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30644[(0)] = state_machine__6995__auto__);

(statearr_30644[(1)] = (1));

return statearr_30644;
});
var state_machine__6995__auto____1 = (function (state_30600){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_30600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e30645){if((e30645 instanceof Object)){
var ex__6998__auto__ = e30645;
var statearr_30646_30677 = state_30600;
(statearr_30646_30677[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30678 = state_30600;
state_30600 = G__30678;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_30600){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_30600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___30648,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_30647 = f__7051__auto__.call(null);
(statearr_30647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___30648);

return statearr_30647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___30648,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7050__auto___30815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30785){
var state_val_30786 = (state_30785[(1)]);
if((state_val_30786 === (7))){
var state_30785__$1 = state_30785;
var statearr_30787_30816 = state_30785__$1;
(statearr_30787_30816[(2)] = null);

(statearr_30787_30816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (1))){
var state_30785__$1 = state_30785;
var statearr_30788_30817 = state_30785__$1;
(statearr_30788_30817[(2)] = null);

(statearr_30788_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (4))){
var inst_30749 = (state_30785[(7)]);
var inst_30751 = (inst_30749 < cnt);
var state_30785__$1 = state_30785;
if(cljs.core.truth_(inst_30751)){
var statearr_30789_30818 = state_30785__$1;
(statearr_30789_30818[(1)] = (6));

} else {
var statearr_30790_30819 = state_30785__$1;
(statearr_30790_30819[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (15))){
var inst_30781 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30791_30820 = state_30785__$1;
(statearr_30791_30820[(2)] = inst_30781);

(statearr_30791_30820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (13))){
var inst_30774 = cljs.core.async.close_BANG_.call(null,out);
var state_30785__$1 = state_30785;
var statearr_30792_30821 = state_30785__$1;
(statearr_30792_30821[(2)] = inst_30774);

(statearr_30792_30821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (6))){
var state_30785__$1 = state_30785;
var statearr_30793_30822 = state_30785__$1;
(statearr_30793_30822[(2)] = null);

(statearr_30793_30822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (3))){
var inst_30783 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30785__$1,inst_30783);
} else {
if((state_val_30786 === (12))){
var inst_30771 = (state_30785[(8)]);
var inst_30771__$1 = (state_30785[(2)]);
var inst_30772 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30771__$1);
var state_30785__$1 = (function (){var statearr_30794 = state_30785;
(statearr_30794[(8)] = inst_30771__$1);

return statearr_30794;
})();
if(cljs.core.truth_(inst_30772)){
var statearr_30795_30823 = state_30785__$1;
(statearr_30795_30823[(1)] = (13));

} else {
var statearr_30796_30824 = state_30785__$1;
(statearr_30796_30824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (2))){
var inst_30748 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30749 = (0);
var state_30785__$1 = (function (){var statearr_30797 = state_30785;
(statearr_30797[(9)] = inst_30748);

(statearr_30797[(7)] = inst_30749);

return statearr_30797;
})();
var statearr_30798_30825 = state_30785__$1;
(statearr_30798_30825[(2)] = null);

(statearr_30798_30825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (11))){
var inst_30749 = (state_30785[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30785,(10),Object,null,(9));
var inst_30758 = chs__$1.call(null,inst_30749);
var inst_30759 = done.call(null,inst_30749);
var inst_30760 = cljs.core.async.take_BANG_.call(null,inst_30758,inst_30759);
var state_30785__$1 = state_30785;
var statearr_30799_30826 = state_30785__$1;
(statearr_30799_30826[(2)] = inst_30760);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30785__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (9))){
var inst_30749 = (state_30785[(7)]);
var inst_30762 = (state_30785[(2)]);
var inst_30763 = (inst_30749 + (1));
var inst_30749__$1 = inst_30763;
var state_30785__$1 = (function (){var statearr_30800 = state_30785;
(statearr_30800[(10)] = inst_30762);

(statearr_30800[(7)] = inst_30749__$1);

return statearr_30800;
})();
var statearr_30801_30827 = state_30785__$1;
(statearr_30801_30827[(2)] = null);

(statearr_30801_30827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (5))){
var inst_30769 = (state_30785[(2)]);
var state_30785__$1 = (function (){var statearr_30802 = state_30785;
(statearr_30802[(11)] = inst_30769);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30785__$1,(12),dchan);
} else {
if((state_val_30786 === (14))){
var inst_30771 = (state_30785[(8)]);
var inst_30776 = cljs.core.apply.call(null,f,inst_30771);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30785__$1,(16),out,inst_30776);
} else {
if((state_val_30786 === (16))){
var inst_30778 = (state_30785[(2)]);
var state_30785__$1 = (function (){var statearr_30803 = state_30785;
(statearr_30803[(12)] = inst_30778);

return statearr_30803;
})();
var statearr_30804_30828 = state_30785__$1;
(statearr_30804_30828[(2)] = null);

(statearr_30804_30828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (10))){
var inst_30753 = (state_30785[(2)]);
var inst_30754 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30785__$1 = (function (){var statearr_30805 = state_30785;
(statearr_30805[(13)] = inst_30753);

return statearr_30805;
})();
var statearr_30806_30829 = state_30785__$1;
(statearr_30806_30829[(2)] = inst_30754);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30785__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (8))){
var inst_30767 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30807_30830 = state_30785__$1;
(statearr_30807_30830[(2)] = inst_30767);

(statearr_30807_30830[(1)] = (5));


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
}
}
}
}
}
}
});})(c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_30811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30811[(0)] = state_machine__6995__auto__);

(statearr_30811[(1)] = (1));

return statearr_30811;
});
var state_machine__6995__auto____1 = (function (state_30785){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_30785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e30812){if((e30812 instanceof Object)){
var ex__6998__auto__ = e30812;
var statearr_30813_30831 = state_30785;
(statearr_30813_30831[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30832 = state_30785;
state_30785 = G__30832;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_30785){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_30785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_30814 = f__7051__auto__.call(null);
(statearr_30814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___30815);

return statearr_30814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___30815,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___30940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___30940,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___30940,out){
return (function (state_30916){
var state_val_30917 = (state_30916[(1)]);
if((state_val_30917 === (7))){
var inst_30895 = (state_30916[(7)]);
var inst_30896 = (state_30916[(8)]);
var inst_30895__$1 = (state_30916[(2)]);
var inst_30896__$1 = cljs.core.nth.call(null,inst_30895__$1,(0),null);
var inst_30897 = cljs.core.nth.call(null,inst_30895__$1,(1),null);
var inst_30898 = (inst_30896__$1 == null);
var state_30916__$1 = (function (){var statearr_30918 = state_30916;
(statearr_30918[(9)] = inst_30897);

(statearr_30918[(7)] = inst_30895__$1);

(statearr_30918[(8)] = inst_30896__$1);

return statearr_30918;
})();
if(cljs.core.truth_(inst_30898)){
var statearr_30919_30941 = state_30916__$1;
(statearr_30919_30941[(1)] = (8));

} else {
var statearr_30920_30942 = state_30916__$1;
(statearr_30920_30942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (1))){
var inst_30887 = cljs.core.vec.call(null,chs);
var inst_30888 = inst_30887;
var state_30916__$1 = (function (){var statearr_30921 = state_30916;
(statearr_30921[(10)] = inst_30888);

return statearr_30921;
})();
var statearr_30922_30943 = state_30916__$1;
(statearr_30922_30943[(2)] = null);

(statearr_30922_30943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (4))){
var inst_30888 = (state_30916[(10)]);
var state_30916__$1 = state_30916;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30916__$1,(7),inst_30888);
} else {
if((state_val_30917 === (6))){
var inst_30912 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30923_30944 = state_30916__$1;
(statearr_30923_30944[(2)] = inst_30912);

(statearr_30923_30944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (3))){
var inst_30914 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30916__$1,inst_30914);
} else {
if((state_val_30917 === (2))){
var inst_30888 = (state_30916[(10)]);
var inst_30890 = cljs.core.count.call(null,inst_30888);
var inst_30891 = (inst_30890 > (0));
var state_30916__$1 = state_30916;
if(cljs.core.truth_(inst_30891)){
var statearr_30925_30945 = state_30916__$1;
(statearr_30925_30945[(1)] = (4));

} else {
var statearr_30926_30946 = state_30916__$1;
(statearr_30926_30946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (11))){
var inst_30888 = (state_30916[(10)]);
var inst_30905 = (state_30916[(2)]);
var tmp30924 = inst_30888;
var inst_30888__$1 = tmp30924;
var state_30916__$1 = (function (){var statearr_30927 = state_30916;
(statearr_30927[(10)] = inst_30888__$1);

(statearr_30927[(11)] = inst_30905);

return statearr_30927;
})();
var statearr_30928_30947 = state_30916__$1;
(statearr_30928_30947[(2)] = null);

(statearr_30928_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (9))){
var inst_30896 = (state_30916[(8)]);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30916__$1,(11),out,inst_30896);
} else {
if((state_val_30917 === (5))){
var inst_30910 = cljs.core.async.close_BANG_.call(null,out);
var state_30916__$1 = state_30916;
var statearr_30929_30948 = state_30916__$1;
(statearr_30929_30948[(2)] = inst_30910);

(statearr_30929_30948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (10))){
var inst_30908 = (state_30916[(2)]);
var state_30916__$1 = state_30916;
var statearr_30930_30949 = state_30916__$1;
(statearr_30930_30949[(2)] = inst_30908);

(statearr_30930_30949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30917 === (8))){
var inst_30897 = (state_30916[(9)]);
var inst_30888 = (state_30916[(10)]);
var inst_30895 = (state_30916[(7)]);
var inst_30896 = (state_30916[(8)]);
var inst_30900 = (function (){var c = inst_30897;
var v = inst_30896;
var vec__30893 = inst_30895;
var cs = inst_30888;
return ((function (c,v,vec__30893,cs,inst_30897,inst_30888,inst_30895,inst_30896,state_val_30917,c__7050__auto___30940,out){
return (function (p1__30833_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30833_SHARP_);
});
;})(c,v,vec__30893,cs,inst_30897,inst_30888,inst_30895,inst_30896,state_val_30917,c__7050__auto___30940,out))
})();
var inst_30901 = cljs.core.filterv.call(null,inst_30900,inst_30888);
var inst_30888__$1 = inst_30901;
var state_30916__$1 = (function (){var statearr_30931 = state_30916;
(statearr_30931[(10)] = inst_30888__$1);

return statearr_30931;
})();
var statearr_30932_30950 = state_30916__$1;
(statearr_30932_30950[(2)] = null);

(statearr_30932_30950[(1)] = (2));


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
}
});})(c__7050__auto___30940,out))
;
return ((function (switch__6994__auto__,c__7050__auto___30940,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30936[(0)] = state_machine__6995__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var state_machine__6995__auto____1 = (function (state_30916){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_30916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e30937){if((e30937 instanceof Object)){
var ex__6998__auto__ = e30937;
var statearr_30938_30951 = state_30916;
(statearr_30938_30951[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30952 = state_30916;
state_30916 = G__30952;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_30916){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_30916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___30940,out))
})();
var state__7052__auto__ = (function (){var statearr_30939 = f__7051__auto__.call(null);
(statearr_30939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___30940);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___30940,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___31045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___31045,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___31045,out){
return (function (state_31022){
var state_val_31023 = (state_31022[(1)]);
if((state_val_31023 === (7))){
var inst_31004 = (state_31022[(7)]);
var inst_31004__$1 = (state_31022[(2)]);
var inst_31005 = (inst_31004__$1 == null);
var inst_31006 = cljs.core.not.call(null,inst_31005);
var state_31022__$1 = (function (){var statearr_31024 = state_31022;
(statearr_31024[(7)] = inst_31004__$1);

return statearr_31024;
})();
if(inst_31006){
var statearr_31025_31046 = state_31022__$1;
(statearr_31025_31046[(1)] = (8));

} else {
var statearr_31026_31047 = state_31022__$1;
(statearr_31026_31047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (1))){
var inst_30999 = (0);
var state_31022__$1 = (function (){var statearr_31027 = state_31022;
(statearr_31027[(8)] = inst_30999);

return statearr_31027;
})();
var statearr_31028_31048 = state_31022__$1;
(statearr_31028_31048[(2)] = null);

(statearr_31028_31048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (4))){
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31022__$1,(7),ch);
} else {
if((state_val_31023 === (6))){
var inst_31017 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31029_31049 = state_31022__$1;
(statearr_31029_31049[(2)] = inst_31017);

(statearr_31029_31049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (3))){
var inst_31019 = (state_31022[(2)]);
var inst_31020 = cljs.core.async.close_BANG_.call(null,out);
var state_31022__$1 = (function (){var statearr_31030 = state_31022;
(statearr_31030[(9)] = inst_31019);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31022__$1,inst_31020);
} else {
if((state_val_31023 === (2))){
var inst_30999 = (state_31022[(8)]);
var inst_31001 = (inst_30999 < n);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_31001)){
var statearr_31031_31050 = state_31022__$1;
(statearr_31031_31050[(1)] = (4));

} else {
var statearr_31032_31051 = state_31022__$1;
(statearr_31032_31051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (11))){
var inst_30999 = (state_31022[(8)]);
var inst_31009 = (state_31022[(2)]);
var inst_31010 = (inst_30999 + (1));
var inst_30999__$1 = inst_31010;
var state_31022__$1 = (function (){var statearr_31033 = state_31022;
(statearr_31033[(8)] = inst_30999__$1);

(statearr_31033[(10)] = inst_31009);

return statearr_31033;
})();
var statearr_31034_31052 = state_31022__$1;
(statearr_31034_31052[(2)] = null);

(statearr_31034_31052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (9))){
var state_31022__$1 = state_31022;
var statearr_31035_31053 = state_31022__$1;
(statearr_31035_31053[(2)] = null);

(statearr_31035_31053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (5))){
var state_31022__$1 = state_31022;
var statearr_31036_31054 = state_31022__$1;
(statearr_31036_31054[(2)] = null);

(statearr_31036_31054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (10))){
var inst_31014 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31037_31055 = state_31022__$1;
(statearr_31037_31055[(2)] = inst_31014);

(statearr_31037_31055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (8))){
var inst_31004 = (state_31022[(7)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31022__$1,(11),out,inst_31004);
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
}
});})(c__7050__auto___31045,out))
;
return ((function (switch__6994__auto__,c__7050__auto___31045,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31041[(0)] = state_machine__6995__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var state_machine__6995__auto____1 = (function (state_31022){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31042){if((e31042 instanceof Object)){
var ex__6998__auto__ = e31042;
var statearr_31043_31056 = state_31022;
(statearr_31043_31056[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31057 = state_31022;
state_31022 = G__31057;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31022){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___31045,out))
})();
var state__7052__auto__ = (function (){var statearr_31044 = f__7051__auto__.call(null);
(statearr_31044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___31045);

return statearr_31044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___31045,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t31065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31065 = (function (ch,f,map_LT_,meta31066){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31066 = meta31066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31068 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31068 = (function (fn1,_,meta31066,map_LT_,f,ch,meta31069){
this.fn1 = fn1;
this._ = _;
this.meta31066 = meta31066;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31069 = meta31069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31068.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31058_SHARP_){
return f1.call(null,(((p1__31058_SHARP_ == null))?null:self__.f.call(null,p1__31058_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31070){
var self__ = this;
var _31070__$1 = this;
return self__.meta31069;
});})(___$1))
;

cljs.core.async.t31068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31070,meta31069__$1){
var self__ = this;
var _31070__$1 = this;
return (new cljs.core.async.t31068(self__.fn1,self__._,self__.meta31066,self__.map_LT_,self__.f,self__.ch,meta31069__$1));
});})(___$1))
;

cljs.core.async.t31068.cljs$lang$type = true;

cljs.core.async.t31068.cljs$lang$ctorStr = "cljs.core.async/t31068";

cljs.core.async.t31068.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31068");
});})(___$1))
;

cljs.core.async.__GT_t31068 = ((function (___$1){
return (function __GT_t31068(fn1__$1,___$2,meta31066__$1,map_LT___$1,f__$1,ch__$1,meta31069){
return (new cljs.core.async.t31068(fn1__$1,___$2,meta31066__$1,map_LT___$1,f__$1,ch__$1,meta31069));
});})(___$1))
;

}

return (new cljs.core.async.t31068(fn1,___$1,self__.meta31066,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3618__auto__ = ret;
if(cljs.core.truth_(and__3618__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3618__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31067){
var self__ = this;
var _31067__$1 = this;
return self__.meta31066;
});

cljs.core.async.t31065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31067,meta31066__$1){
var self__ = this;
var _31067__$1 = this;
return (new cljs.core.async.t31065(self__.ch,self__.f,self__.map_LT_,meta31066__$1));
});

cljs.core.async.t31065.cljs$lang$type = true;

cljs.core.async.t31065.cljs$lang$ctorStr = "cljs.core.async/t31065";

cljs.core.async.t31065.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31065");
});

cljs.core.async.__GT_t31065 = (function __GT_t31065(ch__$1,f__$1,map_LT___$1,meta31066){
return (new cljs.core.async.t31065(ch__$1,f__$1,map_LT___$1,meta31066));
});

}

return (new cljs.core.async.t31065(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31074 = (function (ch,f,map_GT_,meta31075){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31075 = meta31075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31076){
var self__ = this;
var _31076__$1 = this;
return self__.meta31075;
});

cljs.core.async.t31074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31076,meta31075__$1){
var self__ = this;
var _31076__$1 = this;
return (new cljs.core.async.t31074(self__.ch,self__.f,self__.map_GT_,meta31075__$1));
});

cljs.core.async.t31074.cljs$lang$type = true;

cljs.core.async.t31074.cljs$lang$ctorStr = "cljs.core.async/t31074";

cljs.core.async.t31074.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31074");
});

cljs.core.async.__GT_t31074 = (function __GT_t31074(ch__$1,f__$1,map_GT___$1,meta31075){
return (new cljs.core.async.t31074(ch__$1,f__$1,map_GT___$1,meta31075));
});

}

return (new cljs.core.async.t31074(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31080 = (function (ch,p,filter_GT_,meta31081){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31081 = meta31081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31080.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31082){
var self__ = this;
var _31082__$1 = this;
return self__.meta31081;
});

cljs.core.async.t31080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31082,meta31081__$1){
var self__ = this;
var _31082__$1 = this;
return (new cljs.core.async.t31080(self__.ch,self__.p,self__.filter_GT_,meta31081__$1));
});

cljs.core.async.t31080.cljs$lang$type = true;

cljs.core.async.t31080.cljs$lang$ctorStr = "cljs.core.async/t31080";

cljs.core.async.t31080.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31080");
});

cljs.core.async.__GT_t31080 = (function __GT_t31080(ch__$1,p__$1,filter_GT___$1,meta31081){
return (new cljs.core.async.t31080(ch__$1,p__$1,filter_GT___$1,meta31081));
});

}

return (new cljs.core.async.t31080(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/disable/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___31165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___31165,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___31165,out){
return (function (state_31144){
var state_val_31145 = (state_31144[(1)]);
if((state_val_31145 === (7))){
var inst_31140 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31146_31166 = state_31144__$1;
(statearr_31146_31166[(2)] = inst_31140);

(statearr_31146_31166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (1))){
var state_31144__$1 = state_31144;
var statearr_31147_31167 = state_31144__$1;
(statearr_31147_31167[(2)] = null);

(statearr_31147_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (4))){
var inst_31126 = (state_31144[(7)]);
var inst_31126__$1 = (state_31144[(2)]);
var inst_31127 = (inst_31126__$1 == null);
var state_31144__$1 = (function (){var statearr_31148 = state_31144;
(statearr_31148[(7)] = inst_31126__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31127)){
var statearr_31149_31168 = state_31144__$1;
(statearr_31149_31168[(1)] = (5));

} else {
var statearr_31150_31169 = state_31144__$1;
(statearr_31150_31169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (6))){
var inst_31126 = (state_31144[(7)]);
var inst_31131 = p.call(null,inst_31126);
var state_31144__$1 = state_31144;
if(cljs.core.truth_(inst_31131)){
var statearr_31151_31170 = state_31144__$1;
(statearr_31151_31170[(1)] = (8));

} else {
var statearr_31152_31171 = state_31144__$1;
(statearr_31152_31171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (3))){
var inst_31142 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31144__$1,inst_31142);
} else {
if((state_val_31145 === (2))){
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31144__$1,(4),ch);
} else {
if((state_val_31145 === (11))){
var inst_31134 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31153_31172 = state_31144__$1;
(statearr_31153_31172[(2)] = inst_31134);

(statearr_31153_31172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (9))){
var state_31144__$1 = state_31144;
var statearr_31154_31173 = state_31144__$1;
(statearr_31154_31173[(2)] = null);

(statearr_31154_31173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (5))){
var inst_31129 = cljs.core.async.close_BANG_.call(null,out);
var state_31144__$1 = state_31144;
var statearr_31155_31174 = state_31144__$1;
(statearr_31155_31174[(2)] = inst_31129);

(statearr_31155_31174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (10))){
var inst_31137 = (state_31144[(2)]);
var state_31144__$1 = (function (){var statearr_31156 = state_31144;
(statearr_31156[(8)] = inst_31137);

return statearr_31156;
})();
var statearr_31157_31175 = state_31144__$1;
(statearr_31157_31175[(2)] = null);

(statearr_31157_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (8))){
var inst_31126 = (state_31144[(7)]);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31144__$1,(11),out,inst_31126);
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
}
});})(c__7050__auto___31165,out))
;
return ((function (switch__6994__auto__,c__7050__auto___31165,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31161 = [null,null,null,null,null,null,null,null,null];
(statearr_31161[(0)] = state_machine__6995__auto__);

(statearr_31161[(1)] = (1));

return statearr_31161;
});
var state_machine__6995__auto____1 = (function (state_31144){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31162){if((e31162 instanceof Object)){
var ex__6998__auto__ = e31162;
var statearr_31163_31176 = state_31144;
(statearr_31163_31176[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31177 = state_31144;
state_31144 = G__31177;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31144){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___31165,out))
})();
var state__7052__auto__ = (function (){var statearr_31164 = f__7051__auto__.call(null);
(statearr_31164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___31165);

return statearr_31164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___31165,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__){
return (function (state_31343){
var state_val_31344 = (state_31343[(1)]);
if((state_val_31344 === (7))){
var inst_31339 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31345_31386 = state_31343__$1;
(statearr_31345_31386[(2)] = inst_31339);

(statearr_31345_31386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (20))){
var inst_31309 = (state_31343[(7)]);
var inst_31320 = (state_31343[(2)]);
var inst_31321 = cljs.core.next.call(null,inst_31309);
var inst_31295 = inst_31321;
var inst_31296 = null;
var inst_31297 = (0);
var inst_31298 = (0);
var state_31343__$1 = (function (){var statearr_31346 = state_31343;
(statearr_31346[(8)] = inst_31296);

(statearr_31346[(9)] = inst_31320);

(statearr_31346[(10)] = inst_31295);

(statearr_31346[(11)] = inst_31297);

(statearr_31346[(12)] = inst_31298);

return statearr_31346;
})();
var statearr_31347_31387 = state_31343__$1;
(statearr_31347_31387[(2)] = null);

(statearr_31347_31387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (1))){
var state_31343__$1 = state_31343;
var statearr_31348_31388 = state_31343__$1;
(statearr_31348_31388[(2)] = null);

(statearr_31348_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (4))){
var inst_31284 = (state_31343[(13)]);
var inst_31284__$1 = (state_31343[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var state_31343__$1 = (function (){var statearr_31349 = state_31343;
(statearr_31349[(13)] = inst_31284__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31350_31389 = state_31343__$1;
(statearr_31350_31389[(1)] = (5));

} else {
var statearr_31351_31390 = state_31343__$1;
(statearr_31351_31390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (15))){
var state_31343__$1 = state_31343;
var statearr_31355_31391 = state_31343__$1;
(statearr_31355_31391[(2)] = null);

(statearr_31355_31391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (21))){
var state_31343__$1 = state_31343;
var statearr_31356_31392 = state_31343__$1;
(statearr_31356_31392[(2)] = null);

(statearr_31356_31392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (13))){
var inst_31296 = (state_31343[(8)]);
var inst_31295 = (state_31343[(10)]);
var inst_31297 = (state_31343[(11)]);
var inst_31298 = (state_31343[(12)]);
var inst_31305 = (state_31343[(2)]);
var inst_31306 = (inst_31298 + (1));
var tmp31352 = inst_31296;
var tmp31353 = inst_31295;
var tmp31354 = inst_31297;
var inst_31295__$1 = tmp31353;
var inst_31296__$1 = tmp31352;
var inst_31297__$1 = tmp31354;
var inst_31298__$1 = inst_31306;
var state_31343__$1 = (function (){var statearr_31357 = state_31343;
(statearr_31357[(8)] = inst_31296__$1);

(statearr_31357[(10)] = inst_31295__$1);

(statearr_31357[(11)] = inst_31297__$1);

(statearr_31357[(14)] = inst_31305);

(statearr_31357[(12)] = inst_31298__$1);

return statearr_31357;
})();
var statearr_31358_31393 = state_31343__$1;
(statearr_31358_31393[(2)] = null);

(statearr_31358_31393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (22))){
var state_31343__$1 = state_31343;
var statearr_31359_31394 = state_31343__$1;
(statearr_31359_31394[(2)] = null);

(statearr_31359_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (6))){
var inst_31284 = (state_31343[(13)]);
var inst_31293 = f.call(null,inst_31284);
var inst_31294 = cljs.core.seq.call(null,inst_31293);
var inst_31295 = inst_31294;
var inst_31296 = null;
var inst_31297 = (0);
var inst_31298 = (0);
var state_31343__$1 = (function (){var statearr_31360 = state_31343;
(statearr_31360[(8)] = inst_31296);

(statearr_31360[(10)] = inst_31295);

(statearr_31360[(11)] = inst_31297);

(statearr_31360[(12)] = inst_31298);

return statearr_31360;
})();
var statearr_31361_31395 = state_31343__$1;
(statearr_31361_31395[(2)] = null);

(statearr_31361_31395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (17))){
var inst_31309 = (state_31343[(7)]);
var inst_31313 = cljs.core.chunk_first.call(null,inst_31309);
var inst_31314 = cljs.core.chunk_rest.call(null,inst_31309);
var inst_31315 = cljs.core.count.call(null,inst_31313);
var inst_31295 = inst_31314;
var inst_31296 = inst_31313;
var inst_31297 = inst_31315;
var inst_31298 = (0);
var state_31343__$1 = (function (){var statearr_31362 = state_31343;
(statearr_31362[(8)] = inst_31296);

(statearr_31362[(10)] = inst_31295);

(statearr_31362[(11)] = inst_31297);

(statearr_31362[(12)] = inst_31298);

return statearr_31362;
})();
var statearr_31363_31396 = state_31343__$1;
(statearr_31363_31396[(2)] = null);

(statearr_31363_31396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (3))){
var inst_31341 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31343__$1,inst_31341);
} else {
if((state_val_31344 === (12))){
var inst_31329 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31364_31397 = state_31343__$1;
(statearr_31364_31397[(2)] = inst_31329);

(statearr_31364_31397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (2))){
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,(4),in$);
} else {
if((state_val_31344 === (23))){
var inst_31337 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31365_31398 = state_31343__$1;
(statearr_31365_31398[(2)] = inst_31337);

(statearr_31365_31398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (19))){
var inst_31324 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31366_31399 = state_31343__$1;
(statearr_31366_31399[(2)] = inst_31324);

(statearr_31366_31399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (11))){
var inst_31309 = (state_31343[(7)]);
var inst_31295 = (state_31343[(10)]);
var inst_31309__$1 = cljs.core.seq.call(null,inst_31295);
var state_31343__$1 = (function (){var statearr_31367 = state_31343;
(statearr_31367[(7)] = inst_31309__$1);

return statearr_31367;
})();
if(inst_31309__$1){
var statearr_31368_31400 = state_31343__$1;
(statearr_31368_31400[(1)] = (14));

} else {
var statearr_31369_31401 = state_31343__$1;
(statearr_31369_31401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (9))){
var inst_31331 = (state_31343[(2)]);
var inst_31332 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31343__$1 = (function (){var statearr_31370 = state_31343;
(statearr_31370[(15)] = inst_31331);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31371_31402 = state_31343__$1;
(statearr_31371_31402[(1)] = (21));

} else {
var statearr_31372_31403 = state_31343__$1;
(statearr_31372_31403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (5))){
var inst_31287 = cljs.core.async.close_BANG_.call(null,out);
var state_31343__$1 = state_31343;
var statearr_31373_31404 = state_31343__$1;
(statearr_31373_31404[(2)] = inst_31287);

(statearr_31373_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (14))){
var inst_31309 = (state_31343[(7)]);
var inst_31311 = cljs.core.chunked_seq_QMARK_.call(null,inst_31309);
var state_31343__$1 = state_31343;
if(inst_31311){
var statearr_31374_31405 = state_31343__$1;
(statearr_31374_31405[(1)] = (17));

} else {
var statearr_31375_31406 = state_31343__$1;
(statearr_31375_31406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (16))){
var inst_31327 = (state_31343[(2)]);
var state_31343__$1 = state_31343;
var statearr_31376_31407 = state_31343__$1;
(statearr_31376_31407[(2)] = inst_31327);

(statearr_31376_31407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31344 === (10))){
var inst_31296 = (state_31343[(8)]);
var inst_31298 = (state_31343[(12)]);
var inst_31303 = cljs.core._nth.call(null,inst_31296,inst_31298);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31343__$1,(13),out,inst_31303);
} else {
if((state_val_31344 === (18))){
var inst_31309 = (state_31343[(7)]);
var inst_31318 = cljs.core.first.call(null,inst_31309);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31343__$1,(20),out,inst_31318);
} else {
if((state_val_31344 === (8))){
var inst_31297 = (state_31343[(11)]);
var inst_31298 = (state_31343[(12)]);
var inst_31300 = (inst_31298 < inst_31297);
var inst_31301 = inst_31300;
var state_31343__$1 = state_31343;
if(cljs.core.truth_(inst_31301)){
var statearr_31377_31408 = state_31343__$1;
(statearr_31377_31408[(1)] = (10));

} else {
var statearr_31378_31409 = state_31343__$1;
(statearr_31378_31409[(1)] = (11));

}

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
}
}
}
});})(c__7050__auto__))
;
return ((function (switch__6994__auto__,c__7050__auto__){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31382[(0)] = state_machine__6995__auto__);

(statearr_31382[(1)] = (1));

return statearr_31382;
});
var state_machine__6995__auto____1 = (function (state_31343){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31383){if((e31383 instanceof Object)){
var ex__6998__auto__ = e31383;
var statearr_31384_31410 = state_31343;
(statearr_31384_31410[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31411 = state_31343;
state_31343 = G__31411;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31343){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_31385 = f__7051__auto__.call(null);
(statearr_31385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_31385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto__))
);

return c__7050__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___31508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___31508,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___31508,out){
return (function (state_31483){
var state_val_31484 = (state_31483[(1)]);
if((state_val_31484 === (7))){
var inst_31478 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31485_31509 = state_31483__$1;
(statearr_31485_31509[(2)] = inst_31478);

(statearr_31485_31509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (1))){
var inst_31460 = null;
var state_31483__$1 = (function (){var statearr_31486 = state_31483;
(statearr_31486[(7)] = inst_31460);

return statearr_31486;
})();
var statearr_31487_31510 = state_31483__$1;
(statearr_31487_31510[(2)] = null);

(statearr_31487_31510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (4))){
var inst_31463 = (state_31483[(8)]);
var inst_31463__$1 = (state_31483[(2)]);
var inst_31464 = (inst_31463__$1 == null);
var inst_31465 = cljs.core.not.call(null,inst_31464);
var state_31483__$1 = (function (){var statearr_31488 = state_31483;
(statearr_31488[(8)] = inst_31463__$1);

return statearr_31488;
})();
if(inst_31465){
var statearr_31489_31511 = state_31483__$1;
(statearr_31489_31511[(1)] = (5));

} else {
var statearr_31490_31512 = state_31483__$1;
(statearr_31490_31512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (6))){
var state_31483__$1 = state_31483;
var statearr_31491_31513 = state_31483__$1;
(statearr_31491_31513[(2)] = null);

(statearr_31491_31513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (3))){
var inst_31480 = (state_31483[(2)]);
var inst_31481 = cljs.core.async.close_BANG_.call(null,out);
var state_31483__$1 = (function (){var statearr_31492 = state_31483;
(statearr_31492[(9)] = inst_31480);

return statearr_31492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31483__$1,inst_31481);
} else {
if((state_val_31484 === (2))){
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31483__$1,(4),ch);
} else {
if((state_val_31484 === (11))){
var inst_31463 = (state_31483[(8)]);
var inst_31472 = (state_31483[(2)]);
var inst_31460 = inst_31463;
var state_31483__$1 = (function (){var statearr_31493 = state_31483;
(statearr_31493[(10)] = inst_31472);

(statearr_31493[(7)] = inst_31460);

return statearr_31493;
})();
var statearr_31494_31514 = state_31483__$1;
(statearr_31494_31514[(2)] = null);

(statearr_31494_31514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (9))){
var inst_31463 = (state_31483[(8)]);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31483__$1,(11),out,inst_31463);
} else {
if((state_val_31484 === (5))){
var inst_31460 = (state_31483[(7)]);
var inst_31463 = (state_31483[(8)]);
var inst_31467 = cljs.core._EQ_.call(null,inst_31463,inst_31460);
var state_31483__$1 = state_31483;
if(inst_31467){
var statearr_31496_31515 = state_31483__$1;
(statearr_31496_31515[(1)] = (8));

} else {
var statearr_31497_31516 = state_31483__$1;
(statearr_31497_31516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (10))){
var inst_31475 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31498_31517 = state_31483__$1;
(statearr_31498_31517[(2)] = inst_31475);

(statearr_31498_31517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (8))){
var inst_31460 = (state_31483[(7)]);
var tmp31495 = inst_31460;
var inst_31460__$1 = tmp31495;
var state_31483__$1 = (function (){var statearr_31499 = state_31483;
(statearr_31499[(7)] = inst_31460__$1);

return statearr_31499;
})();
var statearr_31500_31518 = state_31483__$1;
(statearr_31500_31518[(2)] = null);

(statearr_31500_31518[(1)] = (2));


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
}
});})(c__7050__auto___31508,out))
;
return ((function (switch__6994__auto__,c__7050__auto___31508,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31504[(0)] = state_machine__6995__auto__);

(statearr_31504[(1)] = (1));

return statearr_31504;
});
var state_machine__6995__auto____1 = (function (state_31483){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31505){if((e31505 instanceof Object)){
var ex__6998__auto__ = e31505;
var statearr_31506_31519 = state_31483;
(statearr_31506_31519[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31520 = state_31483;
state_31483 = G__31520;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31483){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___31508,out))
})();
var state__7052__auto__ = (function (){var statearr_31507 = f__7051__auto__.call(null);
(statearr_31507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___31508);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___31508,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___31655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___31655,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___31655,out){
return (function (state_31625){
var state_val_31626 = (state_31625[(1)]);
if((state_val_31626 === (7))){
var inst_31621 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31627_31656 = state_31625__$1;
(statearr_31627_31656[(2)] = inst_31621);

(statearr_31627_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (1))){
var inst_31588 = (new Array(n));
var inst_31589 = inst_31588;
var inst_31590 = (0);
var state_31625__$1 = (function (){var statearr_31628 = state_31625;
(statearr_31628[(7)] = inst_31590);

(statearr_31628[(8)] = inst_31589);

return statearr_31628;
})();
var statearr_31629_31657 = state_31625__$1;
(statearr_31629_31657[(2)] = null);

(statearr_31629_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (4))){
var inst_31593 = (state_31625[(9)]);
var inst_31593__$1 = (state_31625[(2)]);
var inst_31594 = (inst_31593__$1 == null);
var inst_31595 = cljs.core.not.call(null,inst_31594);
var state_31625__$1 = (function (){var statearr_31630 = state_31625;
(statearr_31630[(9)] = inst_31593__$1);

return statearr_31630;
})();
if(inst_31595){
var statearr_31631_31658 = state_31625__$1;
(statearr_31631_31658[(1)] = (5));

} else {
var statearr_31632_31659 = state_31625__$1;
(statearr_31632_31659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (15))){
var inst_31615 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31633_31660 = state_31625__$1;
(statearr_31633_31660[(2)] = inst_31615);

(statearr_31633_31660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (13))){
var state_31625__$1 = state_31625;
var statearr_31634_31661 = state_31625__$1;
(statearr_31634_31661[(2)] = null);

(statearr_31634_31661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (6))){
var inst_31590 = (state_31625[(7)]);
var inst_31611 = (inst_31590 > (0));
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31611)){
var statearr_31635_31662 = state_31625__$1;
(statearr_31635_31662[(1)] = (12));

} else {
var statearr_31636_31663 = state_31625__$1;
(statearr_31636_31663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (3))){
var inst_31623 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31625__$1,inst_31623);
} else {
if((state_val_31626 === (12))){
var inst_31589 = (state_31625[(8)]);
var inst_31613 = cljs.core.vec.call(null,inst_31589);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(15),out,inst_31613);
} else {
if((state_val_31626 === (2))){
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31625__$1,(4),ch);
} else {
if((state_val_31626 === (11))){
var inst_31605 = (state_31625[(2)]);
var inst_31606 = (new Array(n));
var inst_31589 = inst_31606;
var inst_31590 = (0);
var state_31625__$1 = (function (){var statearr_31637 = state_31625;
(statearr_31637[(7)] = inst_31590);

(statearr_31637[(10)] = inst_31605);

(statearr_31637[(8)] = inst_31589);

return statearr_31637;
})();
var statearr_31638_31664 = state_31625__$1;
(statearr_31638_31664[(2)] = null);

(statearr_31638_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (9))){
var inst_31589 = (state_31625[(8)]);
var inst_31603 = cljs.core.vec.call(null,inst_31589);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(11),out,inst_31603);
} else {
if((state_val_31626 === (5))){
var inst_31590 = (state_31625[(7)]);
var inst_31598 = (state_31625[(11)]);
var inst_31593 = (state_31625[(9)]);
var inst_31589 = (state_31625[(8)]);
var inst_31597 = (inst_31589[inst_31590] = inst_31593);
var inst_31598__$1 = (inst_31590 + (1));
var inst_31599 = (inst_31598__$1 < n);
var state_31625__$1 = (function (){var statearr_31639 = state_31625;
(statearr_31639[(12)] = inst_31597);

(statearr_31639[(11)] = inst_31598__$1);

return statearr_31639;
})();
if(cljs.core.truth_(inst_31599)){
var statearr_31640_31665 = state_31625__$1;
(statearr_31640_31665[(1)] = (8));

} else {
var statearr_31641_31666 = state_31625__$1;
(statearr_31641_31666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (14))){
var inst_31618 = (state_31625[(2)]);
var inst_31619 = cljs.core.async.close_BANG_.call(null,out);
var state_31625__$1 = (function (){var statearr_31643 = state_31625;
(statearr_31643[(13)] = inst_31618);

return statearr_31643;
})();
var statearr_31644_31667 = state_31625__$1;
(statearr_31644_31667[(2)] = inst_31619);

(statearr_31644_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (10))){
var inst_31609 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31645_31668 = state_31625__$1;
(statearr_31645_31668[(2)] = inst_31609);

(statearr_31645_31668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (8))){
var inst_31598 = (state_31625[(11)]);
var inst_31589 = (state_31625[(8)]);
var tmp31642 = inst_31589;
var inst_31589__$1 = tmp31642;
var inst_31590 = inst_31598;
var state_31625__$1 = (function (){var statearr_31646 = state_31625;
(statearr_31646[(7)] = inst_31590);

(statearr_31646[(8)] = inst_31589__$1);

return statearr_31646;
})();
var statearr_31647_31669 = state_31625__$1;
(statearr_31647_31669[(2)] = null);

(statearr_31647_31669[(1)] = (2));


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
}
}
}
}
}
});})(c__7050__auto___31655,out))
;
return ((function (switch__6994__auto__,c__7050__auto___31655,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31651[(0)] = state_machine__6995__auto__);

(statearr_31651[(1)] = (1));

return statearr_31651;
});
var state_machine__6995__auto____1 = (function (state_31625){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31652){if((e31652 instanceof Object)){
var ex__6998__auto__ = e31652;
var statearr_31653_31670 = state_31625;
(statearr_31653_31670[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31671 = state_31625;
state_31625 = G__31671;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___31655,out))
})();
var state__7052__auto__ = (function (){var statearr_31654 = f__7051__auto__.call(null);
(statearr_31654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___31655);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___31655,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7050__auto___31814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___31814,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___31814,out){
return (function (state_31784){
var state_val_31785 = (state_31784[(1)]);
if((state_val_31785 === (7))){
var inst_31780 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31786_31815 = state_31784__$1;
(statearr_31786_31815[(2)] = inst_31780);

(statearr_31786_31815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (1))){
var inst_31743 = [];
var inst_31744 = inst_31743;
var inst_31745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31784__$1 = (function (){var statearr_31787 = state_31784;
(statearr_31787[(7)] = inst_31745);

(statearr_31787[(8)] = inst_31744);

return statearr_31787;
})();
var statearr_31788_31816 = state_31784__$1;
(statearr_31788_31816[(2)] = null);

(statearr_31788_31816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (4))){
var inst_31748 = (state_31784[(9)]);
var inst_31748__$1 = (state_31784[(2)]);
var inst_31749 = (inst_31748__$1 == null);
var inst_31750 = cljs.core.not.call(null,inst_31749);
var state_31784__$1 = (function (){var statearr_31789 = state_31784;
(statearr_31789[(9)] = inst_31748__$1);

return statearr_31789;
})();
if(inst_31750){
var statearr_31790_31817 = state_31784__$1;
(statearr_31790_31817[(1)] = (5));

} else {
var statearr_31791_31818 = state_31784__$1;
(statearr_31791_31818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (15))){
var inst_31774 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31792_31819 = state_31784__$1;
(statearr_31792_31819[(2)] = inst_31774);

(statearr_31792_31819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (13))){
var state_31784__$1 = state_31784;
var statearr_31793_31820 = state_31784__$1;
(statearr_31793_31820[(2)] = null);

(statearr_31793_31820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (6))){
var inst_31744 = (state_31784[(8)]);
var inst_31769 = inst_31744.length;
var inst_31770 = (inst_31769 > (0));
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31770)){
var statearr_31794_31821 = state_31784__$1;
(statearr_31794_31821[(1)] = (12));

} else {
var statearr_31795_31822 = state_31784__$1;
(statearr_31795_31822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (3))){
var inst_31782 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31784__$1,inst_31782);
} else {
if((state_val_31785 === (12))){
var inst_31744 = (state_31784[(8)]);
var inst_31772 = cljs.core.vec.call(null,inst_31744);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31784__$1,(15),out,inst_31772);
} else {
if((state_val_31785 === (2))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31784__$1,(4),ch);
} else {
if((state_val_31785 === (11))){
var inst_31752 = (state_31784[(10)]);
var inst_31748 = (state_31784[(9)]);
var inst_31762 = (state_31784[(2)]);
var inst_31763 = [];
var inst_31764 = inst_31763.push(inst_31748);
var inst_31744 = inst_31763;
var inst_31745 = inst_31752;
var state_31784__$1 = (function (){var statearr_31796 = state_31784;
(statearr_31796[(11)] = inst_31764);

(statearr_31796[(7)] = inst_31745);

(statearr_31796[(8)] = inst_31744);

(statearr_31796[(12)] = inst_31762);

return statearr_31796;
})();
var statearr_31797_31823 = state_31784__$1;
(statearr_31797_31823[(2)] = null);

(statearr_31797_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (9))){
var inst_31744 = (state_31784[(8)]);
var inst_31760 = cljs.core.vec.call(null,inst_31744);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31784__$1,(11),out,inst_31760);
} else {
if((state_val_31785 === (5))){
var inst_31752 = (state_31784[(10)]);
var inst_31745 = (state_31784[(7)]);
var inst_31748 = (state_31784[(9)]);
var inst_31752__$1 = f.call(null,inst_31748);
var inst_31753 = cljs.core._EQ_.call(null,inst_31752__$1,inst_31745);
var inst_31754 = cljs.core.keyword_identical_QMARK_.call(null,inst_31745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31755 = (inst_31753) || (inst_31754);
var state_31784__$1 = (function (){var statearr_31798 = state_31784;
(statearr_31798[(10)] = inst_31752__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31755)){
var statearr_31799_31824 = state_31784__$1;
(statearr_31799_31824[(1)] = (8));

} else {
var statearr_31800_31825 = state_31784__$1;
(statearr_31800_31825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (14))){
var inst_31777 = (state_31784[(2)]);
var inst_31778 = cljs.core.async.close_BANG_.call(null,out);
var state_31784__$1 = (function (){var statearr_31802 = state_31784;
(statearr_31802[(13)] = inst_31777);

return statearr_31802;
})();
var statearr_31803_31826 = state_31784__$1;
(statearr_31803_31826[(2)] = inst_31778);

(statearr_31803_31826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (10))){
var inst_31767 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31804_31827 = state_31784__$1;
(statearr_31804_31827[(2)] = inst_31767);

(statearr_31804_31827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (8))){
var inst_31752 = (state_31784[(10)]);
var inst_31748 = (state_31784[(9)]);
var inst_31744 = (state_31784[(8)]);
var inst_31757 = inst_31744.push(inst_31748);
var tmp31801 = inst_31744;
var inst_31744__$1 = tmp31801;
var inst_31745 = inst_31752;
var state_31784__$1 = (function (){var statearr_31805 = state_31784;
(statearr_31805[(7)] = inst_31745);

(statearr_31805[(8)] = inst_31744__$1);

(statearr_31805[(14)] = inst_31757);

return statearr_31805;
})();
var statearr_31806_31828 = state_31784__$1;
(statearr_31806_31828[(2)] = null);

(statearr_31806_31828[(1)] = (2));


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
}
}
}
}
}
});})(c__7050__auto___31814,out))
;
return ((function (switch__6994__auto__,c__7050__auto___31814,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_31810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31810[(0)] = state_machine__6995__auto__);

(statearr_31810[(1)] = (1));

return statearr_31810;
});
var state_machine__6995__auto____1 = (function (state_31784){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_31784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e31811){if((e31811 instanceof Object)){
var ex__6998__auto__ = e31811;
var statearr_31812_31829 = state_31784;
(statearr_31812_31829[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31830 = state_31784;
state_31784 = G__31830;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_31784){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_31784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___31814,out))
})();
var state__7052__auto__ = (function (){var statearr_31813 = f__7051__auto__.call(null);
(statearr_31813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___31814);

return statearr_31813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___31814,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map