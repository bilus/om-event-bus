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
if(typeof cljs.core.async.t11736 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11736 = (function (f,fn_handler,meta11737){
this.f = f;
this.fn_handler = fn_handler;
this.meta11737 = meta11737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11738){
var self__ = this;
var _11738__$1 = this;
return self__.meta11737;
});

cljs.core.async.t11736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11738,meta11737__$1){
var self__ = this;
var _11738__$1 = this;
return (new cljs.core.async.t11736(self__.f,self__.fn_handler,meta11737__$1));
});

cljs.core.async.t11736.cljs$lang$type = true;

cljs.core.async.t11736.cljs$lang$ctorStr = "cljs.core.async/t11736";

cljs.core.async.t11736.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11736");
});

cljs.core.async.__GT_t11736 = (function __GT_t11736(f__$1,fn_handler__$1,meta11737){
return (new cljs.core.async.t11736(f__$1,fn_handler__$1,meta11737));
});

}

return (new cljs.core.async.t11736(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var G__11740 = buff;
if(G__11740){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__11740.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11740.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11740);
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
var val_11741 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11741);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11741,ret){
return (function (){
return fn1.call(null,val_11741);
});})(val_11741,ret))
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
var n__4517__auto___11742 = n;
var x_11743 = (0);
while(true){
if((x_11743 < n__4517__auto___11742)){
(a[x_11743] = (0));

var G__11744 = (x_11743 + (1));
x_11743 = G__11744;
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

var G__11745 = (i + (1));
i = G__11745;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11749 = (function (flag,alt_flag,meta11750){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11750 = meta11750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11751){
var self__ = this;
var _11751__$1 = this;
return self__.meta11750;
});})(flag))
;

cljs.core.async.t11749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11751,meta11750__$1){
var self__ = this;
var _11751__$1 = this;
return (new cljs.core.async.t11749(self__.flag,self__.alt_flag,meta11750__$1));
});})(flag))
;

cljs.core.async.t11749.cljs$lang$type = true;

cljs.core.async.t11749.cljs$lang$ctorStr = "cljs.core.async/t11749";

cljs.core.async.t11749.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11749");
});})(flag))
;

cljs.core.async.__GT_t11749 = ((function (flag){
return (function __GT_t11749(flag__$1,alt_flag__$1,meta11750){
return (new cljs.core.async.t11749(flag__$1,alt_flag__$1,meta11750));
});})(flag))
;

}

return (new cljs.core.async.t11749(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11755 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11755 = (function (cb,flag,alt_handler,meta11756){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11756 = meta11756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11757){
var self__ = this;
var _11757__$1 = this;
return self__.meta11756;
});

cljs.core.async.t11755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11757,meta11756__$1){
var self__ = this;
var _11757__$1 = this;
return (new cljs.core.async.t11755(self__.cb,self__.flag,self__.alt_handler,meta11756__$1));
});

cljs.core.async.t11755.cljs$lang$type = true;

cljs.core.async.t11755.cljs$lang$ctorStr = "cljs.core.async/t11755";

cljs.core.async.t11755.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11755");
});

cljs.core.async.__GT_t11755 = (function __GT_t11755(cb__$1,flag__$1,alt_handler__$1,meta11756){
return (new cljs.core.async.t11755(cb__$1,flag__$1,alt_handler__$1,meta11756));
});

}

return (new cljs.core.async.t11755(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
return (function (p1__11758_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11758_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11759_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11759_SHARP_,port], null));
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
var G__11760 = (i + (1));
i = G__11760;
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
var alts_BANG___delegate = function (ports,p__11761){
var map__11763 = p__11761;
var map__11763__$1 = ((cljs.core.seq_QMARK_.call(null,map__11763))?cljs.core.apply.call(null,cljs.core.hash_map,map__11763):map__11763);
var opts = map__11763__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11761 = null;
if (arguments.length > 1) {
  p__11761 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11761);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11764){
var ports = cljs.core.first(arglist__11764);
var p__11761 = cljs.core.rest(arglist__11764);
return alts_BANG___delegate(ports,p__11761);
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
var c__5869__auto___11859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___11859){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___11859){
return (function (state_11835){
var state_val_11836 = (state_11835[(1)]);
if((state_val_11836 === (7))){
var inst_11831 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11837_11860 = state_11835__$1;
(statearr_11837_11860[(2)] = inst_11831);

(statearr_11837_11860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (1))){
var state_11835__$1 = state_11835;
var statearr_11838_11861 = state_11835__$1;
(statearr_11838_11861[(2)] = null);

(statearr_11838_11861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (4))){
var inst_11814 = (state_11835[(7)]);
var inst_11814__$1 = (state_11835[(2)]);
var inst_11815 = (inst_11814__$1 == null);
var state_11835__$1 = (function (){var statearr_11839 = state_11835;
(statearr_11839[(7)] = inst_11814__$1);

return statearr_11839;
})();
if(cljs.core.truth_(inst_11815)){
var statearr_11840_11862 = state_11835__$1;
(statearr_11840_11862[(1)] = (5));

} else {
var statearr_11841_11863 = state_11835__$1;
(statearr_11841_11863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (13))){
var state_11835__$1 = state_11835;
var statearr_11842_11864 = state_11835__$1;
(statearr_11842_11864[(2)] = null);

(statearr_11842_11864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (6))){
var inst_11814 = (state_11835[(7)]);
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11835__$1,(11),to,inst_11814);
} else {
if((state_val_11836 === (3))){
var inst_11833 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11835__$1,inst_11833);
} else {
if((state_val_11836 === (12))){
var state_11835__$1 = state_11835;
var statearr_11843_11865 = state_11835__$1;
(statearr_11843_11865[(2)] = null);

(statearr_11843_11865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (2))){
var state_11835__$1 = state_11835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11835__$1,(4),from);
} else {
if((state_val_11836 === (11))){
var inst_11824 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
if(cljs.core.truth_(inst_11824)){
var statearr_11844_11866 = state_11835__$1;
(statearr_11844_11866[(1)] = (12));

} else {
var statearr_11845_11867 = state_11835__$1;
(statearr_11845_11867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (9))){
var state_11835__$1 = state_11835;
var statearr_11846_11868 = state_11835__$1;
(statearr_11846_11868[(2)] = null);

(statearr_11846_11868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (5))){
var state_11835__$1 = state_11835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11847_11869 = state_11835__$1;
(statearr_11847_11869[(1)] = (8));

} else {
var statearr_11848_11870 = state_11835__$1;
(statearr_11848_11870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (14))){
var inst_11829 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11849_11871 = state_11835__$1;
(statearr_11849_11871[(2)] = inst_11829);

(statearr_11849_11871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (10))){
var inst_11821 = (state_11835[(2)]);
var state_11835__$1 = state_11835;
var statearr_11850_11872 = state_11835__$1;
(statearr_11850_11872[(2)] = inst_11821);

(statearr_11850_11872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11836 === (8))){
var inst_11818 = cljs.core.async.close_BANG_.call(null,to);
var state_11835__$1 = state_11835;
var statearr_11851_11873 = state_11835__$1;
(statearr_11851_11873[(2)] = inst_11818);

(statearr_11851_11873[(1)] = (10));


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
});})(c__5869__auto___11859))
;
return ((function (switch__5854__auto__,c__5869__auto___11859){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11855 = [null,null,null,null,null,null,null,null];
(statearr_11855[(0)] = state_machine__5855__auto__);

(statearr_11855[(1)] = (1));

return statearr_11855;
});
var state_machine__5855__auto____1 = (function (state_11835){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11856){if((e11856 instanceof Object)){
var ex__5858__auto__ = e11856;
var statearr_11857_11874 = state_11835;
(statearr_11857_11874[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11875 = state_11835;
state_11835 = G__11875;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11835){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___11859))
})();
var state__5871__auto__ = (function (){var statearr_11858 = f__5870__auto__.call(null);
(statearr_11858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___11859);

return statearr_11858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___11859))
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
return (function (p__12059){
var vec__12060 = p__12059;
var v = cljs.core.nth.call(null,vec__12060,(0),null);
var p = cljs.core.nth.call(null,vec__12060,(1),null);
var job = vec__12060;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5869__auto___12242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results){
return (function (state_12065){
var state_val_12066 = (state_12065[(1)]);
if((state_val_12066 === (2))){
var inst_12062 = (state_12065[(2)]);
var inst_12063 = cljs.core.async.close_BANG_.call(null,res);
var state_12065__$1 = (function (){var statearr_12067 = state_12065;
(statearr_12067[(7)] = inst_12062);

return statearr_12067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12065__$1,inst_12063);
} else {
if((state_val_12066 === (1))){
var state_12065__$1 = state_12065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12065__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results))
;
return ((function (switch__5854__auto__,c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12071 = [null,null,null,null,null,null,null,null];
(statearr_12071[(0)] = state_machine__5855__auto__);

(statearr_12071[(1)] = (1));

return statearr_12071;
});
var state_machine__5855__auto____1 = (function (state_12065){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12072){if((e12072 instanceof Object)){
var ex__5858__auto__ = e12072;
var statearr_12073_12243 = state_12065;
(statearr_12073_12243[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12244 = state_12065;
state_12065 = G__12244;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12065){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results))
})();
var state__5871__auto__ = (function (){var statearr_12074 = f__5870__auto__.call(null);
(statearr_12074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12242);

return statearr_12074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12242,res,vec__12060,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12075){
var vec__12076 = p__12075;
var v = cljs.core.nth.call(null,vec__12076,(0),null);
var p = cljs.core.nth.call(null,vec__12076,(1),null);
var job = vec__12076;
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
var n__4517__auto___12245 = n;
var __12246 = (0);
while(true){
if((__12246 < n__4517__auto___12245)){
var G__12077_12247 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12077_12247) {
case "async":
var c__5869__auto___12249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12246,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__12246,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function (state_12090){
var state_val_12091 = (state_12090[(1)]);
if((state_val_12091 === (7))){
var inst_12086 = (state_12090[(2)]);
var state_12090__$1 = state_12090;
var statearr_12092_12250 = state_12090__$1;
(statearr_12092_12250[(2)] = inst_12086);

(statearr_12092_12250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12091 === (6))){
var state_12090__$1 = state_12090;
var statearr_12093_12251 = state_12090__$1;
(statearr_12093_12251[(2)] = null);

(statearr_12093_12251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12091 === (5))){
var state_12090__$1 = state_12090;
var statearr_12094_12252 = state_12090__$1;
(statearr_12094_12252[(2)] = null);

(statearr_12094_12252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12091 === (4))){
var inst_12080 = (state_12090[(2)]);
var inst_12081 = async.call(null,inst_12080);
var state_12090__$1 = state_12090;
if(cljs.core.truth_(inst_12081)){
var statearr_12095_12253 = state_12090__$1;
(statearr_12095_12253[(1)] = (5));

} else {
var statearr_12096_12254 = state_12090__$1;
(statearr_12096_12254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12091 === (3))){
var inst_12088 = (state_12090[(2)]);
var state_12090__$1 = state_12090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12090__$1,inst_12088);
} else {
if((state_val_12091 === (2))){
var state_12090__$1 = state_12090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12090__$1,(4),jobs);
} else {
if((state_val_12091 === (1))){
var state_12090__$1 = state_12090;
var statearr_12097_12255 = state_12090__$1;
(statearr_12097_12255[(2)] = null);

(statearr_12097_12255[(1)] = (2));


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
});})(__12246,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
;
return ((function (__12246,switch__5854__auto__,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12101 = [null,null,null,null,null,null,null];
(statearr_12101[(0)] = state_machine__5855__auto__);

(statearr_12101[(1)] = (1));

return statearr_12101;
});
var state_machine__5855__auto____1 = (function (state_12090){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12102){if((e12102 instanceof Object)){
var ex__5858__auto__ = e12102;
var statearr_12103_12256 = state_12090;
(statearr_12103_12256[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12257 = state_12090;
state_12090 = G__12257;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12090){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__12246,switch__5854__auto__,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_12104 = f__5870__auto__.call(null);
(statearr_12104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12249);

return statearr_12104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__12246,c__5869__auto___12249,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
);


break;
case "compute":
var c__5869__auto___12258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12246,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__12246,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function (state_12117){
var state_val_12118 = (state_12117[(1)]);
if((state_val_12118 === (7))){
var inst_12113 = (state_12117[(2)]);
var state_12117__$1 = state_12117;
var statearr_12119_12259 = state_12117__$1;
(statearr_12119_12259[(2)] = inst_12113);

(statearr_12119_12259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (6))){
var state_12117__$1 = state_12117;
var statearr_12120_12260 = state_12117__$1;
(statearr_12120_12260[(2)] = null);

(statearr_12120_12260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (5))){
var state_12117__$1 = state_12117;
var statearr_12121_12261 = state_12117__$1;
(statearr_12121_12261[(2)] = null);

(statearr_12121_12261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (4))){
var inst_12107 = (state_12117[(2)]);
var inst_12108 = process.call(null,inst_12107);
var state_12117__$1 = state_12117;
if(cljs.core.truth_(inst_12108)){
var statearr_12122_12262 = state_12117__$1;
(statearr_12122_12262[(1)] = (5));

} else {
var statearr_12123_12263 = state_12117__$1;
(statearr_12123_12263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (3))){
var inst_12115 = (state_12117[(2)]);
var state_12117__$1 = state_12117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12117__$1,inst_12115);
} else {
if((state_val_12118 === (2))){
var state_12117__$1 = state_12117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12117__$1,(4),jobs);
} else {
if((state_val_12118 === (1))){
var state_12117__$1 = state_12117;
var statearr_12124_12264 = state_12117__$1;
(statearr_12124_12264[(2)] = null);

(statearr_12124_12264[(1)] = (2));


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
});})(__12246,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
;
return ((function (__12246,switch__5854__auto__,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12128 = [null,null,null,null,null,null,null];
(statearr_12128[(0)] = state_machine__5855__auto__);

(statearr_12128[(1)] = (1));

return statearr_12128;
});
var state_machine__5855__auto____1 = (function (state_12117){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12129){if((e12129 instanceof Object)){
var ex__5858__auto__ = e12129;
var statearr_12130_12265 = state_12117;
(statearr_12130_12265[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12266 = state_12117;
state_12117 = G__12266;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12117){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__12246,switch__5854__auto__,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_12131 = f__5870__auto__.call(null);
(statearr_12131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12258);

return statearr_12131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__12246,c__5869__auto___12258,G__12077_12247,n__4517__auto___12245,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12267 = (__12246 + (1));
__12246 = G__12267;
continue;
} else {
}
break;
}

var c__5869__auto___12268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12268,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12268,jobs,results,process,async){
return (function (state_12153){
var state_val_12154 = (state_12153[(1)]);
if((state_val_12154 === (9))){
var inst_12146 = (state_12153[(2)]);
var state_12153__$1 = (function (){var statearr_12155 = state_12153;
(statearr_12155[(7)] = inst_12146);

return statearr_12155;
})();
var statearr_12156_12269 = state_12153__$1;
(statearr_12156_12269[(2)] = null);

(statearr_12156_12269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (8))){
var inst_12139 = (state_12153[(8)]);
var inst_12144 = (state_12153[(2)]);
var state_12153__$1 = (function (){var statearr_12157 = state_12153;
(statearr_12157[(9)] = inst_12144);

return statearr_12157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12153__$1,(9),results,inst_12139);
} else {
if((state_val_12154 === (7))){
var inst_12149 = (state_12153[(2)]);
var state_12153__$1 = state_12153;
var statearr_12158_12270 = state_12153__$1;
(statearr_12158_12270[(2)] = inst_12149);

(statearr_12158_12270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (6))){
var inst_12139 = (state_12153[(8)]);
var inst_12134 = (state_12153[(10)]);
var inst_12139__$1 = cljs.core.async.chan.call(null,(1));
var inst_12140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12141 = [inst_12134,inst_12139__$1];
var inst_12142 = (new cljs.core.PersistentVector(null,2,(5),inst_12140,inst_12141,null));
var state_12153__$1 = (function (){var statearr_12159 = state_12153;
(statearr_12159[(8)] = inst_12139__$1);

return statearr_12159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12153__$1,(8),jobs,inst_12142);
} else {
if((state_val_12154 === (5))){
var inst_12137 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12153__$1 = state_12153;
var statearr_12160_12271 = state_12153__$1;
(statearr_12160_12271[(2)] = inst_12137);

(statearr_12160_12271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (4))){
var inst_12134 = (state_12153[(10)]);
var inst_12134__$1 = (state_12153[(2)]);
var inst_12135 = (inst_12134__$1 == null);
var state_12153__$1 = (function (){var statearr_12161 = state_12153;
(statearr_12161[(10)] = inst_12134__$1);

return statearr_12161;
})();
if(cljs.core.truth_(inst_12135)){
var statearr_12162_12272 = state_12153__$1;
(statearr_12162_12272[(1)] = (5));

} else {
var statearr_12163_12273 = state_12153__$1;
(statearr_12163_12273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12154 === (3))){
var inst_12151 = (state_12153[(2)]);
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12153__$1,inst_12151);
} else {
if((state_val_12154 === (2))){
var state_12153__$1 = state_12153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12153__$1,(4),from);
} else {
if((state_val_12154 === (1))){
var state_12153__$1 = state_12153;
var statearr_12164_12274 = state_12153__$1;
(statearr_12164_12274[(2)] = null);

(statearr_12164_12274[(1)] = (2));


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
});})(c__5869__auto___12268,jobs,results,process,async))
;
return ((function (switch__5854__auto__,c__5869__auto___12268,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12168[(0)] = state_machine__5855__auto__);

(statearr_12168[(1)] = (1));

return statearr_12168;
});
var state_machine__5855__auto____1 = (function (state_12153){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12169){if((e12169 instanceof Object)){
var ex__5858__auto__ = e12169;
var statearr_12170_12275 = state_12153;
(statearr_12170_12275[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12276 = state_12153;
state_12153 = G__12276;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12153){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12268,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_12171 = f__5870__auto__.call(null);
(statearr_12171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12268);

return statearr_12171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12268,jobs,results,process,async))
);


var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,jobs,results,process,async){
return (function (state_12209){
var state_val_12210 = (state_12209[(1)]);
if((state_val_12210 === (7))){
var inst_12205 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12211_12277 = state_12209__$1;
(statearr_12211_12277[(2)] = inst_12205);

(statearr_12211_12277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (20))){
var state_12209__$1 = state_12209;
var statearr_12212_12278 = state_12209__$1;
(statearr_12212_12278[(2)] = null);

(statearr_12212_12278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (1))){
var state_12209__$1 = state_12209;
var statearr_12213_12279 = state_12209__$1;
(statearr_12213_12279[(2)] = null);

(statearr_12213_12279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (4))){
var inst_12174 = (state_12209[(7)]);
var inst_12174__$1 = (state_12209[(2)]);
var inst_12175 = (inst_12174__$1 == null);
var state_12209__$1 = (function (){var statearr_12214 = state_12209;
(statearr_12214[(7)] = inst_12174__$1);

return statearr_12214;
})();
if(cljs.core.truth_(inst_12175)){
var statearr_12215_12280 = state_12209__$1;
(statearr_12215_12280[(1)] = (5));

} else {
var statearr_12216_12281 = state_12209__$1;
(statearr_12216_12281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (15))){
var inst_12187 = (state_12209[(8)]);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12209__$1,(18),to,inst_12187);
} else {
if((state_val_12210 === (21))){
var inst_12200 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12217_12282 = state_12209__$1;
(statearr_12217_12282[(2)] = inst_12200);

(statearr_12217_12282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (13))){
var inst_12202 = (state_12209[(2)]);
var state_12209__$1 = (function (){var statearr_12218 = state_12209;
(statearr_12218[(9)] = inst_12202);

return statearr_12218;
})();
var statearr_12219_12283 = state_12209__$1;
(statearr_12219_12283[(2)] = null);

(statearr_12219_12283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (6))){
var inst_12174 = (state_12209[(7)]);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12209__$1,(11),inst_12174);
} else {
if((state_val_12210 === (17))){
var inst_12195 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
if(cljs.core.truth_(inst_12195)){
var statearr_12220_12284 = state_12209__$1;
(statearr_12220_12284[(1)] = (19));

} else {
var statearr_12221_12285 = state_12209__$1;
(statearr_12221_12285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (3))){
var inst_12207 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12209__$1,inst_12207);
} else {
if((state_val_12210 === (12))){
var inst_12184 = (state_12209[(10)]);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12209__$1,(14),inst_12184);
} else {
if((state_val_12210 === (2))){
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12209__$1,(4),results);
} else {
if((state_val_12210 === (19))){
var state_12209__$1 = state_12209;
var statearr_12222_12286 = state_12209__$1;
(statearr_12222_12286[(2)] = null);

(statearr_12222_12286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (11))){
var inst_12184 = (state_12209[(2)]);
var state_12209__$1 = (function (){var statearr_12223 = state_12209;
(statearr_12223[(10)] = inst_12184);

return statearr_12223;
})();
var statearr_12224_12287 = state_12209__$1;
(statearr_12224_12287[(2)] = null);

(statearr_12224_12287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (9))){
var state_12209__$1 = state_12209;
var statearr_12225_12288 = state_12209__$1;
(statearr_12225_12288[(2)] = null);

(statearr_12225_12288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (5))){
var state_12209__$1 = state_12209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12226_12289 = state_12209__$1;
(statearr_12226_12289[(1)] = (8));

} else {
var statearr_12227_12290 = state_12209__$1;
(statearr_12227_12290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (14))){
var inst_12187 = (state_12209[(8)]);
var inst_12189 = (state_12209[(11)]);
var inst_12187__$1 = (state_12209[(2)]);
var inst_12188 = (inst_12187__$1 == null);
var inst_12189__$1 = cljs.core.not.call(null,inst_12188);
var state_12209__$1 = (function (){var statearr_12228 = state_12209;
(statearr_12228[(8)] = inst_12187__$1);

(statearr_12228[(11)] = inst_12189__$1);

return statearr_12228;
})();
if(inst_12189__$1){
var statearr_12229_12291 = state_12209__$1;
(statearr_12229_12291[(1)] = (15));

} else {
var statearr_12230_12292 = state_12209__$1;
(statearr_12230_12292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (16))){
var inst_12189 = (state_12209[(11)]);
var state_12209__$1 = state_12209;
var statearr_12231_12293 = state_12209__$1;
(statearr_12231_12293[(2)] = inst_12189);

(statearr_12231_12293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (10))){
var inst_12181 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12232_12294 = state_12209__$1;
(statearr_12232_12294[(2)] = inst_12181);

(statearr_12232_12294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (18))){
var inst_12192 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12233_12295 = state_12209__$1;
(statearr_12233_12295[(2)] = inst_12192);

(statearr_12233_12295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (8))){
var inst_12178 = cljs.core.async.close_BANG_.call(null,to);
var state_12209__$1 = state_12209;
var statearr_12234_12296 = state_12209__$1;
(statearr_12234_12296[(2)] = inst_12178);

(statearr_12234_12296[(1)] = (10));


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
});})(c__5869__auto__,jobs,results,process,async))
;
return ((function (switch__5854__auto__,c__5869__auto__,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12238[(0)] = state_machine__5855__auto__);

(statearr_12238[(1)] = (1));

return statearr_12238;
});
var state_machine__5855__auto____1 = (function (state_12209){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12239){if((e12239 instanceof Object)){
var ex__5858__auto__ = e12239;
var statearr_12240_12297 = state_12209;
(statearr_12240_12297[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12298 = state_12209;
state_12209 = G__12298;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12209){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_12241 = f__5870__auto__.call(null);
(statearr_12241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__,jobs,results,process,async))
);

return c__5869__auto__;
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
var c__5869__auto___12399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12399,tc,fc){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12399,tc,fc){
return (function (state_12374){
var state_val_12375 = (state_12374[(1)]);
if((state_val_12375 === (7))){
var inst_12370 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
var statearr_12376_12400 = state_12374__$1;
(statearr_12376_12400[(2)] = inst_12370);

(statearr_12376_12400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (1))){
var state_12374__$1 = state_12374;
var statearr_12377_12401 = state_12374__$1;
(statearr_12377_12401[(2)] = null);

(statearr_12377_12401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (4))){
var inst_12351 = (state_12374[(7)]);
var inst_12351__$1 = (state_12374[(2)]);
var inst_12352 = (inst_12351__$1 == null);
var state_12374__$1 = (function (){var statearr_12378 = state_12374;
(statearr_12378[(7)] = inst_12351__$1);

return statearr_12378;
})();
if(cljs.core.truth_(inst_12352)){
var statearr_12379_12402 = state_12374__$1;
(statearr_12379_12402[(1)] = (5));

} else {
var statearr_12380_12403 = state_12374__$1;
(statearr_12380_12403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (13))){
var state_12374__$1 = state_12374;
var statearr_12381_12404 = state_12374__$1;
(statearr_12381_12404[(2)] = null);

(statearr_12381_12404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (6))){
var inst_12351 = (state_12374[(7)]);
var inst_12357 = p.call(null,inst_12351);
var state_12374__$1 = state_12374;
if(cljs.core.truth_(inst_12357)){
var statearr_12382_12405 = state_12374__$1;
(statearr_12382_12405[(1)] = (9));

} else {
var statearr_12383_12406 = state_12374__$1;
(statearr_12383_12406[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (3))){
var inst_12372 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12374__$1,inst_12372);
} else {
if((state_val_12375 === (12))){
var state_12374__$1 = state_12374;
var statearr_12384_12407 = state_12374__$1;
(statearr_12384_12407[(2)] = null);

(statearr_12384_12407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (2))){
var state_12374__$1 = state_12374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12374__$1,(4),ch);
} else {
if((state_val_12375 === (11))){
var inst_12351 = (state_12374[(7)]);
var inst_12361 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12374__$1,(8),inst_12361,inst_12351);
} else {
if((state_val_12375 === (9))){
var state_12374__$1 = state_12374;
var statearr_12385_12408 = state_12374__$1;
(statearr_12385_12408[(2)] = tc);

(statearr_12385_12408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (5))){
var inst_12354 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12355 = cljs.core.async.close_BANG_.call(null,fc);
var state_12374__$1 = (function (){var statearr_12386 = state_12374;
(statearr_12386[(8)] = inst_12354);

return statearr_12386;
})();
var statearr_12387_12409 = state_12374__$1;
(statearr_12387_12409[(2)] = inst_12355);

(statearr_12387_12409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (14))){
var inst_12368 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
var statearr_12388_12410 = state_12374__$1;
(statearr_12388_12410[(2)] = inst_12368);

(statearr_12388_12410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (10))){
var state_12374__$1 = state_12374;
var statearr_12389_12411 = state_12374__$1;
(statearr_12389_12411[(2)] = fc);

(statearr_12389_12411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12375 === (8))){
var inst_12363 = (state_12374[(2)]);
var state_12374__$1 = state_12374;
if(cljs.core.truth_(inst_12363)){
var statearr_12390_12412 = state_12374__$1;
(statearr_12390_12412[(1)] = (12));

} else {
var statearr_12391_12413 = state_12374__$1;
(statearr_12391_12413[(1)] = (13));

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
});})(c__5869__auto___12399,tc,fc))
;
return ((function (switch__5854__auto__,c__5869__auto___12399,tc,fc){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12395 = [null,null,null,null,null,null,null,null,null];
(statearr_12395[(0)] = state_machine__5855__auto__);

(statearr_12395[(1)] = (1));

return statearr_12395;
});
var state_machine__5855__auto____1 = (function (state_12374){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12396){if((e12396 instanceof Object)){
var ex__5858__auto__ = e12396;
var statearr_12397_12414 = state_12374;
(statearr_12397_12414[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12415 = state_12374;
state_12374 = G__12415;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12399,tc,fc))
})();
var state__5871__auto__ = (function (){var statearr_12398 = f__5870__auto__.call(null);
(statearr_12398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12399);

return statearr_12398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12399,tc,fc))
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
var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__){
return (function (state_12462){
var state_val_12463 = (state_12462[(1)]);
if((state_val_12463 === (7))){
var inst_12458 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
var statearr_12464_12480 = state_12462__$1;
(statearr_12464_12480[(2)] = inst_12458);

(statearr_12464_12480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (6))){
var inst_12451 = (state_12462[(7)]);
var inst_12448 = (state_12462[(8)]);
var inst_12455 = f.call(null,inst_12448,inst_12451);
var inst_12448__$1 = inst_12455;
var state_12462__$1 = (function (){var statearr_12465 = state_12462;
(statearr_12465[(8)] = inst_12448__$1);

return statearr_12465;
})();
var statearr_12466_12481 = state_12462__$1;
(statearr_12466_12481[(2)] = null);

(statearr_12466_12481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (5))){
var inst_12448 = (state_12462[(8)]);
var state_12462__$1 = state_12462;
var statearr_12467_12482 = state_12462__$1;
(statearr_12467_12482[(2)] = inst_12448);

(statearr_12467_12482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (4))){
var inst_12451 = (state_12462[(7)]);
var inst_12451__$1 = (state_12462[(2)]);
var inst_12452 = (inst_12451__$1 == null);
var state_12462__$1 = (function (){var statearr_12468 = state_12462;
(statearr_12468[(7)] = inst_12451__$1);

return statearr_12468;
})();
if(cljs.core.truth_(inst_12452)){
var statearr_12469_12483 = state_12462__$1;
(statearr_12469_12483[(1)] = (5));

} else {
var statearr_12470_12484 = state_12462__$1;
(statearr_12470_12484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12463 === (3))){
var inst_12460 = (state_12462[(2)]);
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12462__$1,inst_12460);
} else {
if((state_val_12463 === (2))){
var state_12462__$1 = state_12462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12462__$1,(4),ch);
} else {
if((state_val_12463 === (1))){
var inst_12448 = init;
var state_12462__$1 = (function (){var statearr_12471 = state_12462;
(statearr_12471[(8)] = inst_12448);

return statearr_12471;
})();
var statearr_12472_12485 = state_12462__$1;
(statearr_12472_12485[(2)] = null);

(statearr_12472_12485[(1)] = (2));


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
});})(c__5869__auto__))
;
return ((function (switch__5854__auto__,c__5869__auto__){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12476 = [null,null,null,null,null,null,null,null,null];
(statearr_12476[(0)] = state_machine__5855__auto__);

(statearr_12476[(1)] = (1));

return statearr_12476;
});
var state_machine__5855__auto____1 = (function (state_12462){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12477){if((e12477 instanceof Object)){
var ex__5858__auto__ = e12477;
var statearr_12478_12486 = state_12462;
(statearr_12478_12486[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12487 = state_12462;
state_12462 = G__12487;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12462){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_12479 = f__5870__auto__.call(null);
(statearr_12479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__))
);

return c__5869__auto__;
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
var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__){
return (function (state_12561){
var state_val_12562 = (state_12561[(1)]);
if((state_val_12562 === (7))){
var inst_12543 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12563_12586 = state_12561__$1;
(statearr_12563_12586[(2)] = inst_12543);

(statearr_12563_12586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (1))){
var inst_12537 = cljs.core.seq.call(null,coll);
var inst_12538 = inst_12537;
var state_12561__$1 = (function (){var statearr_12564 = state_12561;
(statearr_12564[(7)] = inst_12538);

return statearr_12564;
})();
var statearr_12565_12587 = state_12561__$1;
(statearr_12565_12587[(2)] = null);

(statearr_12565_12587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (4))){
var inst_12538 = (state_12561[(7)]);
var inst_12541 = cljs.core.first.call(null,inst_12538);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12561__$1,(7),ch,inst_12541);
} else {
if((state_val_12562 === (13))){
var inst_12555 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12566_12588 = state_12561__$1;
(statearr_12566_12588[(2)] = inst_12555);

(statearr_12566_12588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (6))){
var inst_12546 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
if(cljs.core.truth_(inst_12546)){
var statearr_12567_12589 = state_12561__$1;
(statearr_12567_12589[(1)] = (8));

} else {
var statearr_12568_12590 = state_12561__$1;
(statearr_12568_12590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (3))){
var inst_12559 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12561__$1,inst_12559);
} else {
if((state_val_12562 === (12))){
var state_12561__$1 = state_12561;
var statearr_12569_12591 = state_12561__$1;
(statearr_12569_12591[(2)] = null);

(statearr_12569_12591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (2))){
var inst_12538 = (state_12561[(7)]);
var state_12561__$1 = state_12561;
if(cljs.core.truth_(inst_12538)){
var statearr_12570_12592 = state_12561__$1;
(statearr_12570_12592[(1)] = (4));

} else {
var statearr_12571_12593 = state_12561__$1;
(statearr_12571_12593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (11))){
var inst_12552 = cljs.core.async.close_BANG_.call(null,ch);
var state_12561__$1 = state_12561;
var statearr_12572_12594 = state_12561__$1;
(statearr_12572_12594[(2)] = inst_12552);

(statearr_12572_12594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (9))){
var state_12561__$1 = state_12561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12573_12595 = state_12561__$1;
(statearr_12573_12595[(1)] = (11));

} else {
var statearr_12574_12596 = state_12561__$1;
(statearr_12574_12596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (5))){
var inst_12538 = (state_12561[(7)]);
var state_12561__$1 = state_12561;
var statearr_12575_12597 = state_12561__$1;
(statearr_12575_12597[(2)] = inst_12538);

(statearr_12575_12597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (10))){
var inst_12557 = (state_12561[(2)]);
var state_12561__$1 = state_12561;
var statearr_12576_12598 = state_12561__$1;
(statearr_12576_12598[(2)] = inst_12557);

(statearr_12576_12598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12562 === (8))){
var inst_12538 = (state_12561[(7)]);
var inst_12548 = cljs.core.next.call(null,inst_12538);
var inst_12538__$1 = inst_12548;
var state_12561__$1 = (function (){var statearr_12577 = state_12561;
(statearr_12577[(7)] = inst_12538__$1);

return statearr_12577;
})();
var statearr_12578_12599 = state_12561__$1;
(statearr_12578_12599[(2)] = null);

(statearr_12578_12599[(1)] = (2));


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
});})(c__5869__auto__))
;
return ((function (switch__5854__auto__,c__5869__auto__){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12582 = [null,null,null,null,null,null,null,null];
(statearr_12582[(0)] = state_machine__5855__auto__);

(statearr_12582[(1)] = (1));

return statearr_12582;
});
var state_machine__5855__auto____1 = (function (state_12561){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12583){if((e12583 instanceof Object)){
var ex__5858__auto__ = e12583;
var statearr_12584_12600 = state_12561;
(statearr_12584_12600[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12601 = state_12561;
state_12561 = G__12601;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12561){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_12585 = f__5870__auto__.call(null);
(statearr_12585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__))
);

return c__5869__auto__;
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

cljs.core.async.Mux = (function (){var obj12603 = {};
return obj12603;
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


cljs.core.async.Mult = (function (){var obj12605 = {};
return obj12605;
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
if(typeof cljs.core.async.t12827 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12827 = (function (cs,ch,mult,meta12828){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12828 = meta12828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12827.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12827.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12827.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12827.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12827.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12829){
var self__ = this;
var _12829__$1 = this;
return self__.meta12828;
});})(cs))
;

cljs.core.async.t12827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12829,meta12828__$1){
var self__ = this;
var _12829__$1 = this;
return (new cljs.core.async.t12827(self__.cs,self__.ch,self__.mult,meta12828__$1));
});})(cs))
;

cljs.core.async.t12827.cljs$lang$type = true;

cljs.core.async.t12827.cljs$lang$ctorStr = "cljs.core.async/t12827";

cljs.core.async.t12827.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12827");
});})(cs))
;

cljs.core.async.__GT_t12827 = ((function (cs){
return (function __GT_t12827(cs__$1,ch__$1,mult__$1,meta12828){
return (new cljs.core.async.t12827(cs__$1,ch__$1,mult__$1,meta12828));
});})(cs))
;

}

return (new cljs.core.async.t12827(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___13048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13048,cs,m,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13048,cs,m,dchan,dctr,done){
return (function (state_12960){
var state_val_12961 = (state_12960[(1)]);
if((state_val_12961 === (7))){
var inst_12956 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12962_13049 = state_12960__$1;
(statearr_12962_13049[(2)] = inst_12956);

(statearr_12962_13049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (20))){
var inst_12861 = (state_12960[(7)]);
var inst_12871 = cljs.core.first.call(null,inst_12861);
var inst_12872 = cljs.core.nth.call(null,inst_12871,(0),null);
var inst_12873 = cljs.core.nth.call(null,inst_12871,(1),null);
var state_12960__$1 = (function (){var statearr_12963 = state_12960;
(statearr_12963[(8)] = inst_12872);

return statearr_12963;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12964_13050 = state_12960__$1;
(statearr_12964_13050[(1)] = (22));

} else {
var statearr_12965_13051 = state_12960__$1;
(statearr_12965_13051[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (27))){
var inst_12832 = (state_12960[(9)]);
var inst_12903 = (state_12960[(10)]);
var inst_12901 = (state_12960[(11)]);
var inst_12908 = (state_12960[(12)]);
var inst_12908__$1 = cljs.core._nth.call(null,inst_12901,inst_12903);
var inst_12909 = cljs.core.async.put_BANG_.call(null,inst_12908__$1,inst_12832,done);
var state_12960__$1 = (function (){var statearr_12966 = state_12960;
(statearr_12966[(12)] = inst_12908__$1);

return statearr_12966;
})();
if(cljs.core.truth_(inst_12909)){
var statearr_12967_13052 = state_12960__$1;
(statearr_12967_13052[(1)] = (30));

} else {
var statearr_12968_13053 = state_12960__$1;
(statearr_12968_13053[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (1))){
var state_12960__$1 = state_12960;
var statearr_12969_13054 = state_12960__$1;
(statearr_12969_13054[(2)] = null);

(statearr_12969_13054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (24))){
var inst_12861 = (state_12960[(7)]);
var inst_12878 = (state_12960[(2)]);
var inst_12879 = cljs.core.next.call(null,inst_12861);
var inst_12841 = inst_12879;
var inst_12842 = null;
var inst_12843 = (0);
var inst_12844 = (0);
var state_12960__$1 = (function (){var statearr_12970 = state_12960;
(statearr_12970[(13)] = inst_12878);

(statearr_12970[(14)] = inst_12841);

(statearr_12970[(15)] = inst_12844);

(statearr_12970[(16)] = inst_12843);

(statearr_12970[(17)] = inst_12842);

return statearr_12970;
})();
var statearr_12971_13055 = state_12960__$1;
(statearr_12971_13055[(2)] = null);

(statearr_12971_13055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (39))){
var state_12960__$1 = state_12960;
var statearr_12975_13056 = state_12960__$1;
(statearr_12975_13056[(2)] = null);

(statearr_12975_13056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (4))){
var inst_12832 = (state_12960[(9)]);
var inst_12832__$1 = (state_12960[(2)]);
var inst_12833 = (inst_12832__$1 == null);
var state_12960__$1 = (function (){var statearr_12976 = state_12960;
(statearr_12976[(9)] = inst_12832__$1);

return statearr_12976;
})();
if(cljs.core.truth_(inst_12833)){
var statearr_12977_13057 = state_12960__$1;
(statearr_12977_13057[(1)] = (5));

} else {
var statearr_12978_13058 = state_12960__$1;
(statearr_12978_13058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (15))){
var inst_12841 = (state_12960[(14)]);
var inst_12844 = (state_12960[(15)]);
var inst_12843 = (state_12960[(16)]);
var inst_12842 = (state_12960[(17)]);
var inst_12857 = (state_12960[(2)]);
var inst_12858 = (inst_12844 + (1));
var tmp12972 = inst_12841;
var tmp12973 = inst_12843;
var tmp12974 = inst_12842;
var inst_12841__$1 = tmp12972;
var inst_12842__$1 = tmp12974;
var inst_12843__$1 = tmp12973;
var inst_12844__$1 = inst_12858;
var state_12960__$1 = (function (){var statearr_12979 = state_12960;
(statearr_12979[(18)] = inst_12857);

(statearr_12979[(14)] = inst_12841__$1);

(statearr_12979[(15)] = inst_12844__$1);

(statearr_12979[(16)] = inst_12843__$1);

(statearr_12979[(17)] = inst_12842__$1);

return statearr_12979;
})();
var statearr_12980_13059 = state_12960__$1;
(statearr_12980_13059[(2)] = null);

(statearr_12980_13059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (21))){
var inst_12882 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_12984_13060 = state_12960__$1;
(statearr_12984_13060[(2)] = inst_12882);

(statearr_12984_13060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (31))){
var inst_12908 = (state_12960[(12)]);
var inst_12912 = done.call(null,null);
var inst_12913 = cljs.core.async.untap_STAR_.call(null,m,inst_12908);
var state_12960__$1 = (function (){var statearr_12985 = state_12960;
(statearr_12985[(19)] = inst_12912);

return statearr_12985;
})();
var statearr_12986_13061 = state_12960__$1;
(statearr_12986_13061[(2)] = inst_12913);

(statearr_12986_13061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (32))){
var inst_12900 = (state_12960[(20)]);
var inst_12903 = (state_12960[(10)]);
var inst_12901 = (state_12960[(11)]);
var inst_12902 = (state_12960[(21)]);
var inst_12915 = (state_12960[(2)]);
var inst_12916 = (inst_12903 + (1));
var tmp12981 = inst_12900;
var tmp12982 = inst_12901;
var tmp12983 = inst_12902;
var inst_12900__$1 = tmp12981;
var inst_12901__$1 = tmp12982;
var inst_12902__$1 = tmp12983;
var inst_12903__$1 = inst_12916;
var state_12960__$1 = (function (){var statearr_12987 = state_12960;
(statearr_12987[(20)] = inst_12900__$1);

(statearr_12987[(22)] = inst_12915);

(statearr_12987[(10)] = inst_12903__$1);

(statearr_12987[(11)] = inst_12901__$1);

(statearr_12987[(21)] = inst_12902__$1);

return statearr_12987;
})();
var statearr_12988_13062 = state_12960__$1;
(statearr_12988_13062[(2)] = null);

(statearr_12988_13062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (40))){
var inst_12928 = (state_12960[(23)]);
var inst_12932 = done.call(null,null);
var inst_12933 = cljs.core.async.untap_STAR_.call(null,m,inst_12928);
var state_12960__$1 = (function (){var statearr_12989 = state_12960;
(statearr_12989[(24)] = inst_12932);

return statearr_12989;
})();
var statearr_12990_13063 = state_12960__$1;
(statearr_12990_13063[(2)] = inst_12933);

(statearr_12990_13063[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (33))){
var inst_12919 = (state_12960[(25)]);
var inst_12921 = cljs.core.chunked_seq_QMARK_.call(null,inst_12919);
var state_12960__$1 = state_12960;
if(inst_12921){
var statearr_12991_13064 = state_12960__$1;
(statearr_12991_13064[(1)] = (36));

} else {
var statearr_12992_13065 = state_12960__$1;
(statearr_12992_13065[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (13))){
var inst_12851 = (state_12960[(26)]);
var inst_12854 = cljs.core.async.close_BANG_.call(null,inst_12851);
var state_12960__$1 = state_12960;
var statearr_12993_13066 = state_12960__$1;
(statearr_12993_13066[(2)] = inst_12854);

(statearr_12993_13066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (22))){
var inst_12872 = (state_12960[(8)]);
var inst_12875 = cljs.core.async.close_BANG_.call(null,inst_12872);
var state_12960__$1 = state_12960;
var statearr_12994_13067 = state_12960__$1;
(statearr_12994_13067[(2)] = inst_12875);

(statearr_12994_13067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (36))){
var inst_12919 = (state_12960[(25)]);
var inst_12923 = cljs.core.chunk_first.call(null,inst_12919);
var inst_12924 = cljs.core.chunk_rest.call(null,inst_12919);
var inst_12925 = cljs.core.count.call(null,inst_12923);
var inst_12900 = inst_12924;
var inst_12901 = inst_12923;
var inst_12902 = inst_12925;
var inst_12903 = (0);
var state_12960__$1 = (function (){var statearr_12995 = state_12960;
(statearr_12995[(20)] = inst_12900);

(statearr_12995[(10)] = inst_12903);

(statearr_12995[(11)] = inst_12901);

(statearr_12995[(21)] = inst_12902);

return statearr_12995;
})();
var statearr_12996_13068 = state_12960__$1;
(statearr_12996_13068[(2)] = null);

(statearr_12996_13068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (41))){
var inst_12919 = (state_12960[(25)]);
var inst_12935 = (state_12960[(2)]);
var inst_12936 = cljs.core.next.call(null,inst_12919);
var inst_12900 = inst_12936;
var inst_12901 = null;
var inst_12902 = (0);
var inst_12903 = (0);
var state_12960__$1 = (function (){var statearr_12997 = state_12960;
(statearr_12997[(20)] = inst_12900);

(statearr_12997[(10)] = inst_12903);

(statearr_12997[(27)] = inst_12935);

(statearr_12997[(11)] = inst_12901);

(statearr_12997[(21)] = inst_12902);

return statearr_12997;
})();
var statearr_12998_13069 = state_12960__$1;
(statearr_12998_13069[(2)] = null);

(statearr_12998_13069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (43))){
var state_12960__$1 = state_12960;
var statearr_12999_13070 = state_12960__$1;
(statearr_12999_13070[(2)] = null);

(statearr_12999_13070[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (29))){
var inst_12944 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13000_13071 = state_12960__$1;
(statearr_13000_13071[(2)] = inst_12944);

(statearr_13000_13071[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (44))){
var inst_12953 = (state_12960[(2)]);
var state_12960__$1 = (function (){var statearr_13001 = state_12960;
(statearr_13001[(28)] = inst_12953);

return statearr_13001;
})();
var statearr_13002_13072 = state_12960__$1;
(statearr_13002_13072[(2)] = null);

(statearr_13002_13072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (6))){
var inst_12892 = (state_12960[(29)]);
var inst_12891 = cljs.core.deref.call(null,cs);
var inst_12892__$1 = cljs.core.keys.call(null,inst_12891);
var inst_12893 = cljs.core.count.call(null,inst_12892__$1);
var inst_12894 = cljs.core.reset_BANG_.call(null,dctr,inst_12893);
var inst_12899 = cljs.core.seq.call(null,inst_12892__$1);
var inst_12900 = inst_12899;
var inst_12901 = null;
var inst_12902 = (0);
var inst_12903 = (0);
var state_12960__$1 = (function (){var statearr_13003 = state_12960;
(statearr_13003[(20)] = inst_12900);

(statearr_13003[(29)] = inst_12892__$1);

(statearr_13003[(10)] = inst_12903);

(statearr_13003[(30)] = inst_12894);

(statearr_13003[(11)] = inst_12901);

(statearr_13003[(21)] = inst_12902);

return statearr_13003;
})();
var statearr_13004_13073 = state_12960__$1;
(statearr_13004_13073[(2)] = null);

(statearr_13004_13073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (28))){
var inst_12900 = (state_12960[(20)]);
var inst_12919 = (state_12960[(25)]);
var inst_12919__$1 = cljs.core.seq.call(null,inst_12900);
var state_12960__$1 = (function (){var statearr_13005 = state_12960;
(statearr_13005[(25)] = inst_12919__$1);

return statearr_13005;
})();
if(inst_12919__$1){
var statearr_13006_13074 = state_12960__$1;
(statearr_13006_13074[(1)] = (33));

} else {
var statearr_13007_13075 = state_12960__$1;
(statearr_13007_13075[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (25))){
var inst_12903 = (state_12960[(10)]);
var inst_12902 = (state_12960[(21)]);
var inst_12905 = (inst_12903 < inst_12902);
var inst_12906 = inst_12905;
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12906)){
var statearr_13008_13076 = state_12960__$1;
(statearr_13008_13076[(1)] = (27));

} else {
var statearr_13009_13077 = state_12960__$1;
(statearr_13009_13077[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (34))){
var state_12960__$1 = state_12960;
var statearr_13010_13078 = state_12960__$1;
(statearr_13010_13078[(2)] = null);

(statearr_13010_13078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (17))){
var state_12960__$1 = state_12960;
var statearr_13011_13079 = state_12960__$1;
(statearr_13011_13079[(2)] = null);

(statearr_13011_13079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (3))){
var inst_12958 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12960__$1,inst_12958);
} else {
if((state_val_12961 === (12))){
var inst_12887 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13012_13080 = state_12960__$1;
(statearr_13012_13080[(2)] = inst_12887);

(statearr_13012_13080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (2))){
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12960__$1,(4),ch);
} else {
if((state_val_12961 === (23))){
var state_12960__$1 = state_12960;
var statearr_13013_13081 = state_12960__$1;
(statearr_13013_13081[(2)] = null);

(statearr_13013_13081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (35))){
var inst_12942 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13014_13082 = state_12960__$1;
(statearr_13014_13082[(2)] = inst_12942);

(statearr_13014_13082[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (19))){
var inst_12861 = (state_12960[(7)]);
var inst_12865 = cljs.core.chunk_first.call(null,inst_12861);
var inst_12866 = cljs.core.chunk_rest.call(null,inst_12861);
var inst_12867 = cljs.core.count.call(null,inst_12865);
var inst_12841 = inst_12866;
var inst_12842 = inst_12865;
var inst_12843 = inst_12867;
var inst_12844 = (0);
var state_12960__$1 = (function (){var statearr_13015 = state_12960;
(statearr_13015[(14)] = inst_12841);

(statearr_13015[(15)] = inst_12844);

(statearr_13015[(16)] = inst_12843);

(statearr_13015[(17)] = inst_12842);

return statearr_13015;
})();
var statearr_13016_13083 = state_12960__$1;
(statearr_13016_13083[(2)] = null);

(statearr_13016_13083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (11))){
var inst_12861 = (state_12960[(7)]);
var inst_12841 = (state_12960[(14)]);
var inst_12861__$1 = cljs.core.seq.call(null,inst_12841);
var state_12960__$1 = (function (){var statearr_13017 = state_12960;
(statearr_13017[(7)] = inst_12861__$1);

return statearr_13017;
})();
if(inst_12861__$1){
var statearr_13018_13084 = state_12960__$1;
(statearr_13018_13084[(1)] = (16));

} else {
var statearr_13019_13085 = state_12960__$1;
(statearr_13019_13085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (9))){
var inst_12889 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13020_13086 = state_12960__$1;
(statearr_13020_13086[(2)] = inst_12889);

(statearr_13020_13086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (5))){
var inst_12839 = cljs.core.deref.call(null,cs);
var inst_12840 = cljs.core.seq.call(null,inst_12839);
var inst_12841 = inst_12840;
var inst_12842 = null;
var inst_12843 = (0);
var inst_12844 = (0);
var state_12960__$1 = (function (){var statearr_13021 = state_12960;
(statearr_13021[(14)] = inst_12841);

(statearr_13021[(15)] = inst_12844);

(statearr_13021[(16)] = inst_12843);

(statearr_13021[(17)] = inst_12842);

return statearr_13021;
})();
var statearr_13022_13087 = state_12960__$1;
(statearr_13022_13087[(2)] = null);

(statearr_13022_13087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (14))){
var state_12960__$1 = state_12960;
var statearr_13023_13088 = state_12960__$1;
(statearr_13023_13088[(2)] = null);

(statearr_13023_13088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (45))){
var inst_12950 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13024_13089 = state_12960__$1;
(statearr_13024_13089[(2)] = inst_12950);

(statearr_13024_13089[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (26))){
var inst_12892 = (state_12960[(29)]);
var inst_12946 = (state_12960[(2)]);
var inst_12947 = cljs.core.seq.call(null,inst_12892);
var state_12960__$1 = (function (){var statearr_13025 = state_12960;
(statearr_13025[(31)] = inst_12946);

return statearr_13025;
})();
if(inst_12947){
var statearr_13026_13090 = state_12960__$1;
(statearr_13026_13090[(1)] = (42));

} else {
var statearr_13027_13091 = state_12960__$1;
(statearr_13027_13091[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (16))){
var inst_12861 = (state_12960[(7)]);
var inst_12863 = cljs.core.chunked_seq_QMARK_.call(null,inst_12861);
var state_12960__$1 = state_12960;
if(inst_12863){
var statearr_13028_13092 = state_12960__$1;
(statearr_13028_13092[(1)] = (19));

} else {
var statearr_13029_13093 = state_12960__$1;
(statearr_13029_13093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (38))){
var inst_12939 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13030_13094 = state_12960__$1;
(statearr_13030_13094[(2)] = inst_12939);

(statearr_13030_13094[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (30))){
var state_12960__$1 = state_12960;
var statearr_13031_13095 = state_12960__$1;
(statearr_13031_13095[(2)] = null);

(statearr_13031_13095[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (10))){
var inst_12844 = (state_12960[(15)]);
var inst_12842 = (state_12960[(17)]);
var inst_12850 = cljs.core._nth.call(null,inst_12842,inst_12844);
var inst_12851 = cljs.core.nth.call(null,inst_12850,(0),null);
var inst_12852 = cljs.core.nth.call(null,inst_12850,(1),null);
var state_12960__$1 = (function (){var statearr_13032 = state_12960;
(statearr_13032[(26)] = inst_12851);

return statearr_13032;
})();
if(cljs.core.truth_(inst_12852)){
var statearr_13033_13096 = state_12960__$1;
(statearr_13033_13096[(1)] = (13));

} else {
var statearr_13034_13097 = state_12960__$1;
(statearr_13034_13097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (18))){
var inst_12885 = (state_12960[(2)]);
var state_12960__$1 = state_12960;
var statearr_13035_13098 = state_12960__$1;
(statearr_13035_13098[(2)] = inst_12885);

(statearr_13035_13098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (42))){
var state_12960__$1 = state_12960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12960__$1,(45),dchan);
} else {
if((state_val_12961 === (37))){
var inst_12928 = (state_12960[(23)]);
var inst_12832 = (state_12960[(9)]);
var inst_12919 = (state_12960[(25)]);
var inst_12928__$1 = cljs.core.first.call(null,inst_12919);
var inst_12929 = cljs.core.async.put_BANG_.call(null,inst_12928__$1,inst_12832,done);
var state_12960__$1 = (function (){var statearr_13036 = state_12960;
(statearr_13036[(23)] = inst_12928__$1);

return statearr_13036;
})();
if(cljs.core.truth_(inst_12929)){
var statearr_13037_13099 = state_12960__$1;
(statearr_13037_13099[(1)] = (39));

} else {
var statearr_13038_13100 = state_12960__$1;
(statearr_13038_13100[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12961 === (8))){
var inst_12844 = (state_12960[(15)]);
var inst_12843 = (state_12960[(16)]);
var inst_12846 = (inst_12844 < inst_12843);
var inst_12847 = inst_12846;
var state_12960__$1 = state_12960;
if(cljs.core.truth_(inst_12847)){
var statearr_13039_13101 = state_12960__$1;
(statearr_13039_13101[(1)] = (10));

} else {
var statearr_13040_13102 = state_12960__$1;
(statearr_13040_13102[(1)] = (11));

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
});})(c__5869__auto___13048,cs,m,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___13048,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13044[(0)] = state_machine__5855__auto__);

(statearr_13044[(1)] = (1));

return statearr_13044;
});
var state_machine__5855__auto____1 = (function (state_12960){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13045){if((e13045 instanceof Object)){
var ex__5858__auto__ = e13045;
var statearr_13046_13103 = state_12960;
(statearr_13046_13103[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13104 = state_12960;
state_12960 = G__13104;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13048,cs,m,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_13047 = f__5870__auto__.call(null);
(statearr_13047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13048);

return statearr_13047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13048,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj13106 = {};
return obj13106;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13107){
var map__13112 = p__13107;
var map__13112__$1 = ((cljs.core.seq_QMARK_.call(null,map__13112))?cljs.core.apply.call(null,cljs.core.hash_map,map__13112):map__13112);
var opts = map__13112__$1;
var statearr_13113_13116 = state;
(statearr_13113_13116[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13112,map__13112__$1,opts){
return (function (val){
var statearr_13114_13117 = state;
(statearr_13114_13117[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13112,map__13112__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13115_13118 = state;
(statearr_13115_13118[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13107 = null;
if (arguments.length > 3) {
  p__13107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13107);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13119){
var state = cljs.core.first(arglist__13119);
arglist__13119 = cljs.core.next(arglist__13119);
var cont_block = cljs.core.first(arglist__13119);
arglist__13119 = cljs.core.next(arglist__13119);
var ports = cljs.core.first(arglist__13119);
var p__13107 = cljs.core.rest(arglist__13119);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13107);
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
if(typeof cljs.core.async.t13239 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13239 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13240){
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
this.meta13240 = meta13240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13239.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13239.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13241){
var self__ = this;
var _13241__$1 = this;
return self__.meta13240;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13241,meta13240__$1){
var self__ = this;
var _13241__$1 = this;
return (new cljs.core.async.t13239(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13240__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13239.cljs$lang$type = true;

cljs.core.async.t13239.cljs$lang$ctorStr = "cljs.core.async/t13239";

cljs.core.async.t13239.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13239");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13239 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13240){
return (new cljs.core.async.t13239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13240));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13239(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___13358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13311){
var state_val_13312 = (state_13311[(1)]);
if((state_val_13312 === (7))){
var inst_13255 = (state_13311[(7)]);
var inst_13260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13255);
var state_13311__$1 = state_13311;
var statearr_13313_13359 = state_13311__$1;
(statearr_13313_13359[(2)] = inst_13260);

(statearr_13313_13359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (20))){
var inst_13270 = (state_13311[(8)]);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13311__$1,(23),out,inst_13270);
} else {
if((state_val_13312 === (1))){
var inst_13245 = (state_13311[(9)]);
var inst_13245__$1 = calc_state.call(null);
var inst_13246 = cljs.core.seq_QMARK_.call(null,inst_13245__$1);
var state_13311__$1 = (function (){var statearr_13314 = state_13311;
(statearr_13314[(9)] = inst_13245__$1);

return statearr_13314;
})();
if(inst_13246){
var statearr_13315_13360 = state_13311__$1;
(statearr_13315_13360[(1)] = (2));

} else {
var statearr_13316_13361 = state_13311__$1;
(statearr_13316_13361[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (24))){
var inst_13263 = (state_13311[(10)]);
var inst_13255 = inst_13263;
var state_13311__$1 = (function (){var statearr_13317 = state_13311;
(statearr_13317[(7)] = inst_13255);

return statearr_13317;
})();
var statearr_13318_13362 = state_13311__$1;
(statearr_13318_13362[(2)] = null);

(statearr_13318_13362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (4))){
var inst_13245 = (state_13311[(9)]);
var inst_13251 = (state_13311[(2)]);
var inst_13252 = cljs.core.get.call(null,inst_13251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13253 = cljs.core.get.call(null,inst_13251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13254 = cljs.core.get.call(null,inst_13251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13255 = inst_13245;
var state_13311__$1 = (function (){var statearr_13319 = state_13311;
(statearr_13319[(11)] = inst_13252);

(statearr_13319[(12)] = inst_13253);

(statearr_13319[(7)] = inst_13255);

(statearr_13319[(13)] = inst_13254);

return statearr_13319;
})();
var statearr_13320_13363 = state_13311__$1;
(statearr_13320_13363[(2)] = null);

(statearr_13320_13363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (15))){
var state_13311__$1 = state_13311;
var statearr_13321_13364 = state_13311__$1;
(statearr_13321_13364[(2)] = null);

(statearr_13321_13364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (21))){
var inst_13263 = (state_13311[(10)]);
var inst_13255 = inst_13263;
var state_13311__$1 = (function (){var statearr_13322 = state_13311;
(statearr_13322[(7)] = inst_13255);

return statearr_13322;
})();
var statearr_13323_13365 = state_13311__$1;
(statearr_13323_13365[(2)] = null);

(statearr_13323_13365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (13))){
var inst_13307 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13324_13366 = state_13311__$1;
(statearr_13324_13366[(2)] = inst_13307);

(statearr_13324_13366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (22))){
var inst_13305 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13325_13367 = state_13311__$1;
(statearr_13325_13367[(2)] = inst_13305);

(statearr_13325_13367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (6))){
var inst_13309 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13311__$1,inst_13309);
} else {
if((state_val_13312 === (25))){
var state_13311__$1 = state_13311;
var statearr_13326_13368 = state_13311__$1;
(statearr_13326_13368[(2)] = null);

(statearr_13326_13368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (17))){
var inst_13285 = (state_13311[(14)]);
var state_13311__$1 = state_13311;
var statearr_13327_13369 = state_13311__$1;
(statearr_13327_13369[(2)] = inst_13285);

(statearr_13327_13369[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (3))){
var inst_13245 = (state_13311[(9)]);
var state_13311__$1 = state_13311;
var statearr_13328_13370 = state_13311__$1;
(statearr_13328_13370[(2)] = inst_13245);

(statearr_13328_13370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (12))){
var inst_13266 = (state_13311[(15)]);
var inst_13271 = (state_13311[(16)]);
var inst_13285 = (state_13311[(14)]);
var inst_13285__$1 = inst_13266.call(null,inst_13271);
var state_13311__$1 = (function (){var statearr_13329 = state_13311;
(statearr_13329[(14)] = inst_13285__$1);

return statearr_13329;
})();
if(cljs.core.truth_(inst_13285__$1)){
var statearr_13330_13371 = state_13311__$1;
(statearr_13330_13371[(1)] = (17));

} else {
var statearr_13331_13372 = state_13311__$1;
(statearr_13331_13372[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (2))){
var inst_13245 = (state_13311[(9)]);
var inst_13248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13245);
var state_13311__$1 = state_13311;
var statearr_13332_13373 = state_13311__$1;
(statearr_13332_13373[(2)] = inst_13248);

(statearr_13332_13373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (23))){
var inst_13296 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
if(cljs.core.truth_(inst_13296)){
var statearr_13333_13374 = state_13311__$1;
(statearr_13333_13374[(1)] = (24));

} else {
var statearr_13334_13375 = state_13311__$1;
(statearr_13334_13375[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (19))){
var inst_13293 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
if(cljs.core.truth_(inst_13293)){
var statearr_13335_13376 = state_13311__$1;
(statearr_13335_13376[(1)] = (20));

} else {
var statearr_13336_13377 = state_13311__$1;
(statearr_13336_13377[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (11))){
var inst_13270 = (state_13311[(8)]);
var inst_13276 = (inst_13270 == null);
var state_13311__$1 = state_13311;
if(cljs.core.truth_(inst_13276)){
var statearr_13337_13378 = state_13311__$1;
(statearr_13337_13378[(1)] = (14));

} else {
var statearr_13338_13379 = state_13311__$1;
(statearr_13338_13379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (9))){
var inst_13263 = (state_13311[(10)]);
var inst_13263__$1 = (state_13311[(2)]);
var inst_13264 = cljs.core.get.call(null,inst_13263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13265 = cljs.core.get.call(null,inst_13263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13266 = cljs.core.get.call(null,inst_13263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13311__$1 = (function (){var statearr_13339 = state_13311;
(statearr_13339[(17)] = inst_13265);

(statearr_13339[(15)] = inst_13266);

(statearr_13339[(10)] = inst_13263__$1);

return statearr_13339;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13311__$1,(10),inst_13264);
} else {
if((state_val_13312 === (5))){
var inst_13255 = (state_13311[(7)]);
var inst_13258 = cljs.core.seq_QMARK_.call(null,inst_13255);
var state_13311__$1 = state_13311;
if(inst_13258){
var statearr_13340_13380 = state_13311__$1;
(statearr_13340_13380[(1)] = (7));

} else {
var statearr_13341_13381 = state_13311__$1;
(statearr_13341_13381[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (14))){
var inst_13271 = (state_13311[(16)]);
var inst_13278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13271);
var state_13311__$1 = state_13311;
var statearr_13342_13382 = state_13311__$1;
(statearr_13342_13382[(2)] = inst_13278);

(statearr_13342_13382[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (26))){
var inst_13301 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13343_13383 = state_13311__$1;
(statearr_13343_13383[(2)] = inst_13301);

(statearr_13343_13383[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (16))){
var inst_13281 = (state_13311[(2)]);
var inst_13282 = calc_state.call(null);
var inst_13255 = inst_13282;
var state_13311__$1 = (function (){var statearr_13344 = state_13311;
(statearr_13344[(18)] = inst_13281);

(statearr_13344[(7)] = inst_13255);

return statearr_13344;
})();
var statearr_13345_13384 = state_13311__$1;
(statearr_13345_13384[(2)] = null);

(statearr_13345_13384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (10))){
var inst_13270 = (state_13311[(8)]);
var inst_13271 = (state_13311[(16)]);
var inst_13269 = (state_13311[(2)]);
var inst_13270__$1 = cljs.core.nth.call(null,inst_13269,(0),null);
var inst_13271__$1 = cljs.core.nth.call(null,inst_13269,(1),null);
var inst_13272 = (inst_13270__$1 == null);
var inst_13273 = cljs.core._EQ_.call(null,inst_13271__$1,change);
var inst_13274 = (inst_13272) || (inst_13273);
var state_13311__$1 = (function (){var statearr_13346 = state_13311;
(statearr_13346[(8)] = inst_13270__$1);

(statearr_13346[(16)] = inst_13271__$1);

return statearr_13346;
})();
if(cljs.core.truth_(inst_13274)){
var statearr_13347_13385 = state_13311__$1;
(statearr_13347_13385[(1)] = (11));

} else {
var statearr_13348_13386 = state_13311__$1;
(statearr_13348_13386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (18))){
var inst_13265 = (state_13311[(17)]);
var inst_13266 = (state_13311[(15)]);
var inst_13271 = (state_13311[(16)]);
var inst_13288 = cljs.core.empty_QMARK_.call(null,inst_13266);
var inst_13289 = inst_13265.call(null,inst_13271);
var inst_13290 = cljs.core.not.call(null,inst_13289);
var inst_13291 = (inst_13288) && (inst_13290);
var state_13311__$1 = state_13311;
var statearr_13349_13387 = state_13311__$1;
(statearr_13349_13387[(2)] = inst_13291);

(statearr_13349_13387[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (8))){
var inst_13255 = (state_13311[(7)]);
var state_13311__$1 = state_13311;
var statearr_13350_13388 = state_13311__$1;
(statearr_13350_13388[(2)] = inst_13255);

(statearr_13350_13388[(1)] = (9));


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
});})(c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5854__auto__,c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13354[(0)] = state_machine__5855__auto__);

(statearr_13354[(1)] = (1));

return statearr_13354;
});
var state_machine__5855__auto____1 = (function (state_13311){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13355){if((e13355 instanceof Object)){
var ex__5858__auto__ = e13355;
var statearr_13356_13389 = state_13311;
(statearr_13356_13389[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13390 = state_13311;
state_13311 = G__13390;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13311){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5871__auto__ = (function (){var statearr_13357 = f__5870__auto__.call(null);
(statearr_13357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13358);

return statearr_13357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13392 = {};
return obj13392;
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
return (function (p1__13393_SHARP_){
if(cljs.core.truth_(p1__13393_SHARP_.call(null,topic))){
return p1__13393_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13393_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13516 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13517){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13517 = meta13517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13516.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13516.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13518){
var self__ = this;
var _13518__$1 = this;
return self__.meta13517;
});})(mults,ensure_mult))
;

cljs.core.async.t13516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13518,meta13517__$1){
var self__ = this;
var _13518__$1 = this;
return (new cljs.core.async.t13516(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13517__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13516.cljs$lang$type = true;

cljs.core.async.t13516.cljs$lang$ctorStr = "cljs.core.async/t13516";

cljs.core.async.t13516.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13516");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13516 = ((function (mults,ensure_mult){
return (function __GT_t13516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13517){
return (new cljs.core.async.t13516(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13517));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13516(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___13638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13638,mults,ensure_mult,p){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13638,mults,ensure_mult,p){
return (function (state_13590){
var state_val_13591 = (state_13590[(1)]);
if((state_val_13591 === (7))){
var inst_13586 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13592_13639 = state_13590__$1;
(statearr_13592_13639[(2)] = inst_13586);

(statearr_13592_13639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (20))){
var state_13590__$1 = state_13590;
var statearr_13593_13640 = state_13590__$1;
(statearr_13593_13640[(2)] = null);

(statearr_13593_13640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (1))){
var state_13590__$1 = state_13590;
var statearr_13594_13641 = state_13590__$1;
(statearr_13594_13641[(2)] = null);

(statearr_13594_13641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (24))){
var inst_13569 = (state_13590[(7)]);
var inst_13578 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13569);
var state_13590__$1 = state_13590;
var statearr_13595_13642 = state_13590__$1;
(statearr_13595_13642[(2)] = inst_13578);

(statearr_13595_13642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (4))){
var inst_13521 = (state_13590[(8)]);
var inst_13521__$1 = (state_13590[(2)]);
var inst_13522 = (inst_13521__$1 == null);
var state_13590__$1 = (function (){var statearr_13596 = state_13590;
(statearr_13596[(8)] = inst_13521__$1);

return statearr_13596;
})();
if(cljs.core.truth_(inst_13522)){
var statearr_13597_13643 = state_13590__$1;
(statearr_13597_13643[(1)] = (5));

} else {
var statearr_13598_13644 = state_13590__$1;
(statearr_13598_13644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (15))){
var inst_13563 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13599_13645 = state_13590__$1;
(statearr_13599_13645[(2)] = inst_13563);

(statearr_13599_13645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (21))){
var inst_13583 = (state_13590[(2)]);
var state_13590__$1 = (function (){var statearr_13600 = state_13590;
(statearr_13600[(9)] = inst_13583);

return statearr_13600;
})();
var statearr_13601_13646 = state_13590__$1;
(statearr_13601_13646[(2)] = null);

(statearr_13601_13646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (13))){
var inst_13545 = (state_13590[(10)]);
var inst_13547 = cljs.core.chunked_seq_QMARK_.call(null,inst_13545);
var state_13590__$1 = state_13590;
if(inst_13547){
var statearr_13602_13647 = state_13590__$1;
(statearr_13602_13647[(1)] = (16));

} else {
var statearr_13603_13648 = state_13590__$1;
(statearr_13603_13648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (22))){
var inst_13575 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
if(cljs.core.truth_(inst_13575)){
var statearr_13604_13649 = state_13590__$1;
(statearr_13604_13649[(1)] = (23));

} else {
var statearr_13605_13650 = state_13590__$1;
(statearr_13605_13650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (6))){
var inst_13569 = (state_13590[(7)]);
var inst_13571 = (state_13590[(11)]);
var inst_13521 = (state_13590[(8)]);
var inst_13569__$1 = topic_fn.call(null,inst_13521);
var inst_13570 = cljs.core.deref.call(null,mults);
var inst_13571__$1 = cljs.core.get.call(null,inst_13570,inst_13569__$1);
var state_13590__$1 = (function (){var statearr_13606 = state_13590;
(statearr_13606[(7)] = inst_13569__$1);

(statearr_13606[(11)] = inst_13571__$1);

return statearr_13606;
})();
if(cljs.core.truth_(inst_13571__$1)){
var statearr_13607_13651 = state_13590__$1;
(statearr_13607_13651[(1)] = (19));

} else {
var statearr_13608_13652 = state_13590__$1;
(statearr_13608_13652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (25))){
var inst_13580 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13609_13653 = state_13590__$1;
(statearr_13609_13653[(2)] = inst_13580);

(statearr_13609_13653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (17))){
var inst_13545 = (state_13590[(10)]);
var inst_13554 = cljs.core.first.call(null,inst_13545);
var inst_13555 = cljs.core.async.muxch_STAR_.call(null,inst_13554);
var inst_13556 = cljs.core.async.close_BANG_.call(null,inst_13555);
var inst_13557 = cljs.core.next.call(null,inst_13545);
var inst_13531 = inst_13557;
var inst_13532 = null;
var inst_13533 = (0);
var inst_13534 = (0);
var state_13590__$1 = (function (){var statearr_13610 = state_13590;
(statearr_13610[(12)] = inst_13531);

(statearr_13610[(13)] = inst_13532);

(statearr_13610[(14)] = inst_13534);

(statearr_13610[(15)] = inst_13533);

(statearr_13610[(16)] = inst_13556);

return statearr_13610;
})();
var statearr_13611_13654 = state_13590__$1;
(statearr_13611_13654[(2)] = null);

(statearr_13611_13654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (3))){
var inst_13588 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13590__$1,inst_13588);
} else {
if((state_val_13591 === (12))){
var inst_13565 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13612_13655 = state_13590__$1;
(statearr_13612_13655[(2)] = inst_13565);

(statearr_13612_13655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (2))){
var state_13590__$1 = state_13590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13590__$1,(4),ch);
} else {
if((state_val_13591 === (23))){
var state_13590__$1 = state_13590;
var statearr_13613_13656 = state_13590__$1;
(statearr_13613_13656[(2)] = null);

(statearr_13613_13656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (19))){
var inst_13571 = (state_13590[(11)]);
var inst_13521 = (state_13590[(8)]);
var inst_13573 = cljs.core.async.muxch_STAR_.call(null,inst_13571);
var state_13590__$1 = state_13590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13590__$1,(22),inst_13573,inst_13521);
} else {
if((state_val_13591 === (11))){
var inst_13531 = (state_13590[(12)]);
var inst_13545 = (state_13590[(10)]);
var inst_13545__$1 = cljs.core.seq.call(null,inst_13531);
var state_13590__$1 = (function (){var statearr_13614 = state_13590;
(statearr_13614[(10)] = inst_13545__$1);

return statearr_13614;
})();
if(inst_13545__$1){
var statearr_13615_13657 = state_13590__$1;
(statearr_13615_13657[(1)] = (13));

} else {
var statearr_13616_13658 = state_13590__$1;
(statearr_13616_13658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (9))){
var inst_13567 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13617_13659 = state_13590__$1;
(statearr_13617_13659[(2)] = inst_13567);

(statearr_13617_13659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (5))){
var inst_13528 = cljs.core.deref.call(null,mults);
var inst_13529 = cljs.core.vals.call(null,inst_13528);
var inst_13530 = cljs.core.seq.call(null,inst_13529);
var inst_13531 = inst_13530;
var inst_13532 = null;
var inst_13533 = (0);
var inst_13534 = (0);
var state_13590__$1 = (function (){var statearr_13618 = state_13590;
(statearr_13618[(12)] = inst_13531);

(statearr_13618[(13)] = inst_13532);

(statearr_13618[(14)] = inst_13534);

(statearr_13618[(15)] = inst_13533);

return statearr_13618;
})();
var statearr_13619_13660 = state_13590__$1;
(statearr_13619_13660[(2)] = null);

(statearr_13619_13660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (14))){
var state_13590__$1 = state_13590;
var statearr_13623_13661 = state_13590__$1;
(statearr_13623_13661[(2)] = null);

(statearr_13623_13661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (16))){
var inst_13545 = (state_13590[(10)]);
var inst_13549 = cljs.core.chunk_first.call(null,inst_13545);
var inst_13550 = cljs.core.chunk_rest.call(null,inst_13545);
var inst_13551 = cljs.core.count.call(null,inst_13549);
var inst_13531 = inst_13550;
var inst_13532 = inst_13549;
var inst_13533 = inst_13551;
var inst_13534 = (0);
var state_13590__$1 = (function (){var statearr_13624 = state_13590;
(statearr_13624[(12)] = inst_13531);

(statearr_13624[(13)] = inst_13532);

(statearr_13624[(14)] = inst_13534);

(statearr_13624[(15)] = inst_13533);

return statearr_13624;
})();
var statearr_13625_13662 = state_13590__$1;
(statearr_13625_13662[(2)] = null);

(statearr_13625_13662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (10))){
var inst_13531 = (state_13590[(12)]);
var inst_13532 = (state_13590[(13)]);
var inst_13534 = (state_13590[(14)]);
var inst_13533 = (state_13590[(15)]);
var inst_13539 = cljs.core._nth.call(null,inst_13532,inst_13534);
var inst_13540 = cljs.core.async.muxch_STAR_.call(null,inst_13539);
var inst_13541 = cljs.core.async.close_BANG_.call(null,inst_13540);
var inst_13542 = (inst_13534 + (1));
var tmp13620 = inst_13531;
var tmp13621 = inst_13532;
var tmp13622 = inst_13533;
var inst_13531__$1 = tmp13620;
var inst_13532__$1 = tmp13621;
var inst_13533__$1 = tmp13622;
var inst_13534__$1 = inst_13542;
var state_13590__$1 = (function (){var statearr_13626 = state_13590;
(statearr_13626[(12)] = inst_13531__$1);

(statearr_13626[(13)] = inst_13532__$1);

(statearr_13626[(14)] = inst_13534__$1);

(statearr_13626[(17)] = inst_13541);

(statearr_13626[(15)] = inst_13533__$1);

return statearr_13626;
})();
var statearr_13627_13663 = state_13590__$1;
(statearr_13627_13663[(2)] = null);

(statearr_13627_13663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (18))){
var inst_13560 = (state_13590[(2)]);
var state_13590__$1 = state_13590;
var statearr_13628_13664 = state_13590__$1;
(statearr_13628_13664[(2)] = inst_13560);

(statearr_13628_13664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13591 === (8))){
var inst_13534 = (state_13590[(14)]);
var inst_13533 = (state_13590[(15)]);
var inst_13536 = (inst_13534 < inst_13533);
var inst_13537 = inst_13536;
var state_13590__$1 = state_13590;
if(cljs.core.truth_(inst_13537)){
var statearr_13629_13665 = state_13590__$1;
(statearr_13629_13665[(1)] = (10));

} else {
var statearr_13630_13666 = state_13590__$1;
(statearr_13630_13666[(1)] = (11));

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
});})(c__5869__auto___13638,mults,ensure_mult,p))
;
return ((function (switch__5854__auto__,c__5869__auto___13638,mults,ensure_mult,p){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13634[(0)] = state_machine__5855__auto__);

(statearr_13634[(1)] = (1));

return statearr_13634;
});
var state_machine__5855__auto____1 = (function (state_13590){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13635){if((e13635 instanceof Object)){
var ex__5858__auto__ = e13635;
var statearr_13636_13667 = state_13590;
(statearr_13636_13667[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13668 = state_13590;
state_13590 = G__13668;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13590){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13638,mults,ensure_mult,p))
})();
var state__5871__auto__ = (function (){var statearr_13637 = f__5870__auto__.call(null);
(statearr_13637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13638);

return statearr_13637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13638,mults,ensure_mult,p))
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
var c__5869__auto___13805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13775){
var state_val_13776 = (state_13775[(1)]);
if((state_val_13776 === (7))){
var state_13775__$1 = state_13775;
var statearr_13777_13806 = state_13775__$1;
(statearr_13777_13806[(2)] = null);

(statearr_13777_13806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (1))){
var state_13775__$1 = state_13775;
var statearr_13778_13807 = state_13775__$1;
(statearr_13778_13807[(2)] = null);

(statearr_13778_13807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (4))){
var inst_13739 = (state_13775[(7)]);
var inst_13741 = (inst_13739 < cnt);
var state_13775__$1 = state_13775;
if(cljs.core.truth_(inst_13741)){
var statearr_13779_13808 = state_13775__$1;
(statearr_13779_13808[(1)] = (6));

} else {
var statearr_13780_13809 = state_13775__$1;
(statearr_13780_13809[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (15))){
var inst_13771 = (state_13775[(2)]);
var state_13775__$1 = state_13775;
var statearr_13781_13810 = state_13775__$1;
(statearr_13781_13810[(2)] = inst_13771);

(statearr_13781_13810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (13))){
var inst_13764 = cljs.core.async.close_BANG_.call(null,out);
var state_13775__$1 = state_13775;
var statearr_13782_13811 = state_13775__$1;
(statearr_13782_13811[(2)] = inst_13764);

(statearr_13782_13811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (6))){
var state_13775__$1 = state_13775;
var statearr_13783_13812 = state_13775__$1;
(statearr_13783_13812[(2)] = null);

(statearr_13783_13812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (3))){
var inst_13773 = (state_13775[(2)]);
var state_13775__$1 = state_13775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13775__$1,inst_13773);
} else {
if((state_val_13776 === (12))){
var inst_13761 = (state_13775[(8)]);
var inst_13761__$1 = (state_13775[(2)]);
var inst_13762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13761__$1);
var state_13775__$1 = (function (){var statearr_13784 = state_13775;
(statearr_13784[(8)] = inst_13761__$1);

return statearr_13784;
})();
if(cljs.core.truth_(inst_13762)){
var statearr_13785_13813 = state_13775__$1;
(statearr_13785_13813[(1)] = (13));

} else {
var statearr_13786_13814 = state_13775__$1;
(statearr_13786_13814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (2))){
var inst_13738 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13739 = (0);
var state_13775__$1 = (function (){var statearr_13787 = state_13775;
(statearr_13787[(9)] = inst_13738);

(statearr_13787[(7)] = inst_13739);

return statearr_13787;
})();
var statearr_13788_13815 = state_13775__$1;
(statearr_13788_13815[(2)] = null);

(statearr_13788_13815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (11))){
var inst_13739 = (state_13775[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13775,(10),Object,null,(9));
var inst_13748 = chs__$1.call(null,inst_13739);
var inst_13749 = done.call(null,inst_13739);
var inst_13750 = cljs.core.async.take_BANG_.call(null,inst_13748,inst_13749);
var state_13775__$1 = state_13775;
var statearr_13789_13816 = state_13775__$1;
(statearr_13789_13816[(2)] = inst_13750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (9))){
var inst_13739 = (state_13775[(7)]);
var inst_13752 = (state_13775[(2)]);
var inst_13753 = (inst_13739 + (1));
var inst_13739__$1 = inst_13753;
var state_13775__$1 = (function (){var statearr_13790 = state_13775;
(statearr_13790[(10)] = inst_13752);

(statearr_13790[(7)] = inst_13739__$1);

return statearr_13790;
})();
var statearr_13791_13817 = state_13775__$1;
(statearr_13791_13817[(2)] = null);

(statearr_13791_13817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (5))){
var inst_13759 = (state_13775[(2)]);
var state_13775__$1 = (function (){var statearr_13792 = state_13775;
(statearr_13792[(11)] = inst_13759);

return statearr_13792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13775__$1,(12),dchan);
} else {
if((state_val_13776 === (14))){
var inst_13761 = (state_13775[(8)]);
var inst_13766 = cljs.core.apply.call(null,f,inst_13761);
var state_13775__$1 = state_13775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13775__$1,(16),out,inst_13766);
} else {
if((state_val_13776 === (16))){
var inst_13768 = (state_13775[(2)]);
var state_13775__$1 = (function (){var statearr_13793 = state_13775;
(statearr_13793[(12)] = inst_13768);

return statearr_13793;
})();
var statearr_13794_13818 = state_13775__$1;
(statearr_13794_13818[(2)] = null);

(statearr_13794_13818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (10))){
var inst_13743 = (state_13775[(2)]);
var inst_13744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13775__$1 = (function (){var statearr_13795 = state_13775;
(statearr_13795[(13)] = inst_13743);

return statearr_13795;
})();
var statearr_13796_13819 = state_13775__$1;
(statearr_13796_13819[(2)] = inst_13744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13776 === (8))){
var inst_13757 = (state_13775[(2)]);
var state_13775__$1 = state_13775;
var statearr_13797_13820 = state_13775__$1;
(statearr_13797_13820[(2)] = inst_13757);

(statearr_13797_13820[(1)] = (5));


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
});})(c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13801[(0)] = state_machine__5855__auto__);

(statearr_13801[(1)] = (1));

return statearr_13801;
});
var state_machine__5855__auto____1 = (function (state_13775){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13802){if((e13802 instanceof Object)){
var ex__5858__auto__ = e13802;
var statearr_13803_13821 = state_13775;
(statearr_13803_13821[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13822 = state_13775;
state_13775 = G__13822;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13775){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_13804 = f__5870__auto__.call(null);
(statearr_13804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13805);

return statearr_13804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13805,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5869__auto___13930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13930,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13930,out){
return (function (state_13906){
var state_val_13907 = (state_13906[(1)]);
if((state_val_13907 === (7))){
var inst_13885 = (state_13906[(7)]);
var inst_13886 = (state_13906[(8)]);
var inst_13885__$1 = (state_13906[(2)]);
var inst_13886__$1 = cljs.core.nth.call(null,inst_13885__$1,(0),null);
var inst_13887 = cljs.core.nth.call(null,inst_13885__$1,(1),null);
var inst_13888 = (inst_13886__$1 == null);
var state_13906__$1 = (function (){var statearr_13908 = state_13906;
(statearr_13908[(7)] = inst_13885__$1);

(statearr_13908[(9)] = inst_13887);

(statearr_13908[(8)] = inst_13886__$1);

return statearr_13908;
})();
if(cljs.core.truth_(inst_13888)){
var statearr_13909_13931 = state_13906__$1;
(statearr_13909_13931[(1)] = (8));

} else {
var statearr_13910_13932 = state_13906__$1;
(statearr_13910_13932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (1))){
var inst_13877 = cljs.core.vec.call(null,chs);
var inst_13878 = inst_13877;
var state_13906__$1 = (function (){var statearr_13911 = state_13906;
(statearr_13911[(10)] = inst_13878);

return statearr_13911;
})();
var statearr_13912_13933 = state_13906__$1;
(statearr_13912_13933[(2)] = null);

(statearr_13912_13933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (4))){
var inst_13878 = (state_13906[(10)]);
var state_13906__$1 = state_13906;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13906__$1,(7),inst_13878);
} else {
if((state_val_13907 === (6))){
var inst_13902 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13913_13934 = state_13906__$1;
(statearr_13913_13934[(2)] = inst_13902);

(statearr_13913_13934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (3))){
var inst_13904 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13906__$1,inst_13904);
} else {
if((state_val_13907 === (2))){
var inst_13878 = (state_13906[(10)]);
var inst_13880 = cljs.core.count.call(null,inst_13878);
var inst_13881 = (inst_13880 > (0));
var state_13906__$1 = state_13906;
if(cljs.core.truth_(inst_13881)){
var statearr_13915_13935 = state_13906__$1;
(statearr_13915_13935[(1)] = (4));

} else {
var statearr_13916_13936 = state_13906__$1;
(statearr_13916_13936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (11))){
var inst_13878 = (state_13906[(10)]);
var inst_13895 = (state_13906[(2)]);
var tmp13914 = inst_13878;
var inst_13878__$1 = tmp13914;
var state_13906__$1 = (function (){var statearr_13917 = state_13906;
(statearr_13917[(10)] = inst_13878__$1);

(statearr_13917[(11)] = inst_13895);

return statearr_13917;
})();
var statearr_13918_13937 = state_13906__$1;
(statearr_13918_13937[(2)] = null);

(statearr_13918_13937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (9))){
var inst_13886 = (state_13906[(8)]);
var state_13906__$1 = state_13906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,(11),out,inst_13886);
} else {
if((state_val_13907 === (5))){
var inst_13900 = cljs.core.async.close_BANG_.call(null,out);
var state_13906__$1 = state_13906;
var statearr_13919_13938 = state_13906__$1;
(statearr_13919_13938[(2)] = inst_13900);

(statearr_13919_13938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (10))){
var inst_13898 = (state_13906[(2)]);
var state_13906__$1 = state_13906;
var statearr_13920_13939 = state_13906__$1;
(statearr_13920_13939[(2)] = inst_13898);

(statearr_13920_13939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13907 === (8))){
var inst_13885 = (state_13906[(7)]);
var inst_13887 = (state_13906[(9)]);
var inst_13886 = (state_13906[(8)]);
var inst_13878 = (state_13906[(10)]);
var inst_13890 = (function (){var c = inst_13887;
var v = inst_13886;
var vec__13883 = inst_13885;
var cs = inst_13878;
return ((function (c,v,vec__13883,cs,inst_13885,inst_13887,inst_13886,inst_13878,state_val_13907,c__5869__auto___13930,out){
return (function (p1__13823_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13823_SHARP_);
});
;})(c,v,vec__13883,cs,inst_13885,inst_13887,inst_13886,inst_13878,state_val_13907,c__5869__auto___13930,out))
})();
var inst_13891 = cljs.core.filterv.call(null,inst_13890,inst_13878);
var inst_13878__$1 = inst_13891;
var state_13906__$1 = (function (){var statearr_13921 = state_13906;
(statearr_13921[(10)] = inst_13878__$1);

return statearr_13921;
})();
var statearr_13922_13940 = state_13906__$1;
(statearr_13922_13940[(2)] = null);

(statearr_13922_13940[(1)] = (2));


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
});})(c__5869__auto___13930,out))
;
return ((function (switch__5854__auto__,c__5869__auto___13930,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13926 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13926[(0)] = state_machine__5855__auto__);

(statearr_13926[(1)] = (1));

return statearr_13926;
});
var state_machine__5855__auto____1 = (function (state_13906){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13927){if((e13927 instanceof Object)){
var ex__5858__auto__ = e13927;
var statearr_13928_13941 = state_13906;
(statearr_13928_13941[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13942 = state_13906;
state_13906 = G__13942;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13906){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13930,out))
})();
var state__5871__auto__ = (function (){var statearr_13929 = f__5870__auto__.call(null);
(statearr_13929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13930);

return statearr_13929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13930,out))
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
var c__5869__auto___14035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14035,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14035,out){
return (function (state_14012){
var state_val_14013 = (state_14012[(1)]);
if((state_val_14013 === (7))){
var inst_13994 = (state_14012[(7)]);
var inst_13994__$1 = (state_14012[(2)]);
var inst_13995 = (inst_13994__$1 == null);
var inst_13996 = cljs.core.not.call(null,inst_13995);
var state_14012__$1 = (function (){var statearr_14014 = state_14012;
(statearr_14014[(7)] = inst_13994__$1);

return statearr_14014;
})();
if(inst_13996){
var statearr_14015_14036 = state_14012__$1;
(statearr_14015_14036[(1)] = (8));

} else {
var statearr_14016_14037 = state_14012__$1;
(statearr_14016_14037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (1))){
var inst_13989 = (0);
var state_14012__$1 = (function (){var statearr_14017 = state_14012;
(statearr_14017[(8)] = inst_13989);

return statearr_14017;
})();
var statearr_14018_14038 = state_14012__$1;
(statearr_14018_14038[(2)] = null);

(statearr_14018_14038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (4))){
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14012__$1,(7),ch);
} else {
if((state_val_14013 === (6))){
var inst_14007 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14019_14039 = state_14012__$1;
(statearr_14019_14039[(2)] = inst_14007);

(statearr_14019_14039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (3))){
var inst_14009 = (state_14012[(2)]);
var inst_14010 = cljs.core.async.close_BANG_.call(null,out);
var state_14012__$1 = (function (){var statearr_14020 = state_14012;
(statearr_14020[(9)] = inst_14009);

return statearr_14020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14012__$1,inst_14010);
} else {
if((state_val_14013 === (2))){
var inst_13989 = (state_14012[(8)]);
var inst_13991 = (inst_13989 < n);
var state_14012__$1 = state_14012;
if(cljs.core.truth_(inst_13991)){
var statearr_14021_14040 = state_14012__$1;
(statearr_14021_14040[(1)] = (4));

} else {
var statearr_14022_14041 = state_14012__$1;
(statearr_14022_14041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (11))){
var inst_13989 = (state_14012[(8)]);
var inst_13999 = (state_14012[(2)]);
var inst_14000 = (inst_13989 + (1));
var inst_13989__$1 = inst_14000;
var state_14012__$1 = (function (){var statearr_14023 = state_14012;
(statearr_14023[(10)] = inst_13999);

(statearr_14023[(8)] = inst_13989__$1);

return statearr_14023;
})();
var statearr_14024_14042 = state_14012__$1;
(statearr_14024_14042[(2)] = null);

(statearr_14024_14042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (9))){
var state_14012__$1 = state_14012;
var statearr_14025_14043 = state_14012__$1;
(statearr_14025_14043[(2)] = null);

(statearr_14025_14043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (5))){
var state_14012__$1 = state_14012;
var statearr_14026_14044 = state_14012__$1;
(statearr_14026_14044[(2)] = null);

(statearr_14026_14044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (10))){
var inst_14004 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14027_14045 = state_14012__$1;
(statearr_14027_14045[(2)] = inst_14004);

(statearr_14027_14045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (8))){
var inst_13994 = (state_14012[(7)]);
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14012__$1,(11),out,inst_13994);
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
});})(c__5869__auto___14035,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14035,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14031[(0)] = state_machine__5855__auto__);

(statearr_14031[(1)] = (1));

return statearr_14031;
});
var state_machine__5855__auto____1 = (function (state_14012){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14032){if((e14032 instanceof Object)){
var ex__5858__auto__ = e14032;
var statearr_14033_14046 = state_14012;
(statearr_14033_14046[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14047 = state_14012;
state_14012 = G__14047;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14012){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14035,out))
})();
var state__5871__auto__ = (function (){var statearr_14034 = f__5870__auto__.call(null);
(statearr_14034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14035);

return statearr_14034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14035,out))
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
if(typeof cljs.core.async.t14055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14055 = (function (ch,f,map_LT_,meta14056){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14056 = meta14056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14058 = (function (fn1,_,meta14056,map_LT_,f,ch,meta14059){
this.fn1 = fn1;
this._ = _;
this.meta14056 = meta14056;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14059 = meta14059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14048_SHARP_){
return f1.call(null,(((p1__14048_SHARP_ == null))?null:self__.f.call(null,p1__14048_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14060){
var self__ = this;
var _14060__$1 = this;
return self__.meta14059;
});})(___$1))
;

cljs.core.async.t14058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14060,meta14059__$1){
var self__ = this;
var _14060__$1 = this;
return (new cljs.core.async.t14058(self__.fn1,self__._,self__.meta14056,self__.map_LT_,self__.f,self__.ch,meta14059__$1));
});})(___$1))
;

cljs.core.async.t14058.cljs$lang$type = true;

cljs.core.async.t14058.cljs$lang$ctorStr = "cljs.core.async/t14058";

cljs.core.async.t14058.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14058");
});})(___$1))
;

cljs.core.async.__GT_t14058 = ((function (___$1){
return (function __GT_t14058(fn1__$1,___$2,meta14056__$1,map_LT___$1,f__$1,ch__$1,meta14059){
return (new cljs.core.async.t14058(fn1__$1,___$2,meta14056__$1,map_LT___$1,f__$1,ch__$1,meta14059));
});})(___$1))
;

}

return (new cljs.core.async.t14058(fn1,___$1,self__.meta14056,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14057){
var self__ = this;
var _14057__$1 = this;
return self__.meta14056;
});

cljs.core.async.t14055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14057,meta14056__$1){
var self__ = this;
var _14057__$1 = this;
return (new cljs.core.async.t14055(self__.ch,self__.f,self__.map_LT_,meta14056__$1));
});

cljs.core.async.t14055.cljs$lang$type = true;

cljs.core.async.t14055.cljs$lang$ctorStr = "cljs.core.async/t14055";

cljs.core.async.t14055.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14055");
});

cljs.core.async.__GT_t14055 = (function __GT_t14055(ch__$1,f__$1,map_LT___$1,meta14056){
return (new cljs.core.async.t14055(ch__$1,f__$1,map_LT___$1,meta14056));
});

}

return (new cljs.core.async.t14055(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t14064 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14064 = (function (ch,f,map_GT_,meta14065){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14065 = meta14065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14066){
var self__ = this;
var _14066__$1 = this;
return self__.meta14065;
});

cljs.core.async.t14064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14066,meta14065__$1){
var self__ = this;
var _14066__$1 = this;
return (new cljs.core.async.t14064(self__.ch,self__.f,self__.map_GT_,meta14065__$1));
});

cljs.core.async.t14064.cljs$lang$type = true;

cljs.core.async.t14064.cljs$lang$ctorStr = "cljs.core.async/t14064";

cljs.core.async.t14064.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14064");
});

cljs.core.async.__GT_t14064 = (function __GT_t14064(ch__$1,f__$1,map_GT___$1,meta14065){
return (new cljs.core.async.t14064(ch__$1,f__$1,map_GT___$1,meta14065));
});

}

return (new cljs.core.async.t14064(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t14070 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14070 = (function (ch,p,filter_GT_,meta14071){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14071 = meta14071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14070.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14072){
var self__ = this;
var _14072__$1 = this;
return self__.meta14071;
});

cljs.core.async.t14070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14072,meta14071__$1){
var self__ = this;
var _14072__$1 = this;
return (new cljs.core.async.t14070(self__.ch,self__.p,self__.filter_GT_,meta14071__$1));
});

cljs.core.async.t14070.cljs$lang$type = true;

cljs.core.async.t14070.cljs$lang$ctorStr = "cljs.core.async/t14070";

cljs.core.async.t14070.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14070");
});

cljs.core.async.__GT_t14070 = (function __GT_t14070(ch__$1,p__$1,filter_GT___$1,meta14071){
return (new cljs.core.async.t14070(ch__$1,p__$1,filter_GT___$1,meta14071));
});

}

return (new cljs.core.async.t14070(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___14155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14155,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14155,out){
return (function (state_14134){
var state_val_14135 = (state_14134[(1)]);
if((state_val_14135 === (7))){
var inst_14130 = (state_14134[(2)]);
var state_14134__$1 = state_14134;
var statearr_14136_14156 = state_14134__$1;
(statearr_14136_14156[(2)] = inst_14130);

(statearr_14136_14156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (1))){
var state_14134__$1 = state_14134;
var statearr_14137_14157 = state_14134__$1;
(statearr_14137_14157[(2)] = null);

(statearr_14137_14157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (4))){
var inst_14116 = (state_14134[(7)]);
var inst_14116__$1 = (state_14134[(2)]);
var inst_14117 = (inst_14116__$1 == null);
var state_14134__$1 = (function (){var statearr_14138 = state_14134;
(statearr_14138[(7)] = inst_14116__$1);

return statearr_14138;
})();
if(cljs.core.truth_(inst_14117)){
var statearr_14139_14158 = state_14134__$1;
(statearr_14139_14158[(1)] = (5));

} else {
var statearr_14140_14159 = state_14134__$1;
(statearr_14140_14159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (6))){
var inst_14116 = (state_14134[(7)]);
var inst_14121 = p.call(null,inst_14116);
var state_14134__$1 = state_14134;
if(cljs.core.truth_(inst_14121)){
var statearr_14141_14160 = state_14134__$1;
(statearr_14141_14160[(1)] = (8));

} else {
var statearr_14142_14161 = state_14134__$1;
(statearr_14142_14161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (3))){
var inst_14132 = (state_14134[(2)]);
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14134__$1,inst_14132);
} else {
if((state_val_14135 === (2))){
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14134__$1,(4),ch);
} else {
if((state_val_14135 === (11))){
var inst_14124 = (state_14134[(2)]);
var state_14134__$1 = state_14134;
var statearr_14143_14162 = state_14134__$1;
(statearr_14143_14162[(2)] = inst_14124);

(statearr_14143_14162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (9))){
var state_14134__$1 = state_14134;
var statearr_14144_14163 = state_14134__$1;
(statearr_14144_14163[(2)] = null);

(statearr_14144_14163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (5))){
var inst_14119 = cljs.core.async.close_BANG_.call(null,out);
var state_14134__$1 = state_14134;
var statearr_14145_14164 = state_14134__$1;
(statearr_14145_14164[(2)] = inst_14119);

(statearr_14145_14164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (10))){
var inst_14127 = (state_14134[(2)]);
var state_14134__$1 = (function (){var statearr_14146 = state_14134;
(statearr_14146[(8)] = inst_14127);

return statearr_14146;
})();
var statearr_14147_14165 = state_14134__$1;
(statearr_14147_14165[(2)] = null);

(statearr_14147_14165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14135 === (8))){
var inst_14116 = (state_14134[(7)]);
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14134__$1,(11),out,inst_14116);
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
});})(c__5869__auto___14155,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14155,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14151 = [null,null,null,null,null,null,null,null,null];
(statearr_14151[(0)] = state_machine__5855__auto__);

(statearr_14151[(1)] = (1));

return statearr_14151;
});
var state_machine__5855__auto____1 = (function (state_14134){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14152){if((e14152 instanceof Object)){
var ex__5858__auto__ = e14152;
var statearr_14153_14166 = state_14134;
(statearr_14153_14166[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14167 = state_14134;
state_14134 = G__14167;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14134){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14155,out))
})();
var state__5871__auto__ = (function (){var statearr_14154 = f__5870__auto__.call(null);
(statearr_14154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14155);

return statearr_14154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14155,out))
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
var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__){
return (function (state_14333){
var state_val_14334 = (state_14333[(1)]);
if((state_val_14334 === (7))){
var inst_14329 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
var statearr_14335_14376 = state_14333__$1;
(statearr_14335_14376[(2)] = inst_14329);

(statearr_14335_14376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (20))){
var inst_14299 = (state_14333[(7)]);
var inst_14310 = (state_14333[(2)]);
var inst_14311 = cljs.core.next.call(null,inst_14299);
var inst_14285 = inst_14311;
var inst_14286 = null;
var inst_14287 = (0);
var inst_14288 = (0);
var state_14333__$1 = (function (){var statearr_14336 = state_14333;
(statearr_14336[(8)] = inst_14287);

(statearr_14336[(9)] = inst_14286);

(statearr_14336[(10)] = inst_14310);

(statearr_14336[(11)] = inst_14285);

(statearr_14336[(12)] = inst_14288);

return statearr_14336;
})();
var statearr_14337_14377 = state_14333__$1;
(statearr_14337_14377[(2)] = null);

(statearr_14337_14377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (1))){
var state_14333__$1 = state_14333;
var statearr_14338_14378 = state_14333__$1;
(statearr_14338_14378[(2)] = null);

(statearr_14338_14378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (4))){
var inst_14274 = (state_14333[(13)]);
var inst_14274__$1 = (state_14333[(2)]);
var inst_14275 = (inst_14274__$1 == null);
var state_14333__$1 = (function (){var statearr_14339 = state_14333;
(statearr_14339[(13)] = inst_14274__$1);

return statearr_14339;
})();
if(cljs.core.truth_(inst_14275)){
var statearr_14340_14379 = state_14333__$1;
(statearr_14340_14379[(1)] = (5));

} else {
var statearr_14341_14380 = state_14333__$1;
(statearr_14341_14380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (15))){
var state_14333__$1 = state_14333;
var statearr_14345_14381 = state_14333__$1;
(statearr_14345_14381[(2)] = null);

(statearr_14345_14381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (21))){
var state_14333__$1 = state_14333;
var statearr_14346_14382 = state_14333__$1;
(statearr_14346_14382[(2)] = null);

(statearr_14346_14382[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (13))){
var inst_14287 = (state_14333[(8)]);
var inst_14286 = (state_14333[(9)]);
var inst_14285 = (state_14333[(11)]);
var inst_14288 = (state_14333[(12)]);
var inst_14295 = (state_14333[(2)]);
var inst_14296 = (inst_14288 + (1));
var tmp14342 = inst_14287;
var tmp14343 = inst_14286;
var tmp14344 = inst_14285;
var inst_14285__$1 = tmp14344;
var inst_14286__$1 = tmp14343;
var inst_14287__$1 = tmp14342;
var inst_14288__$1 = inst_14296;
var state_14333__$1 = (function (){var statearr_14347 = state_14333;
(statearr_14347[(8)] = inst_14287__$1);

(statearr_14347[(9)] = inst_14286__$1);

(statearr_14347[(11)] = inst_14285__$1);

(statearr_14347[(14)] = inst_14295);

(statearr_14347[(12)] = inst_14288__$1);

return statearr_14347;
})();
var statearr_14348_14383 = state_14333__$1;
(statearr_14348_14383[(2)] = null);

(statearr_14348_14383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (22))){
var state_14333__$1 = state_14333;
var statearr_14349_14384 = state_14333__$1;
(statearr_14349_14384[(2)] = null);

(statearr_14349_14384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (6))){
var inst_14274 = (state_14333[(13)]);
var inst_14283 = f.call(null,inst_14274);
var inst_14284 = cljs.core.seq.call(null,inst_14283);
var inst_14285 = inst_14284;
var inst_14286 = null;
var inst_14287 = (0);
var inst_14288 = (0);
var state_14333__$1 = (function (){var statearr_14350 = state_14333;
(statearr_14350[(8)] = inst_14287);

(statearr_14350[(9)] = inst_14286);

(statearr_14350[(11)] = inst_14285);

(statearr_14350[(12)] = inst_14288);

return statearr_14350;
})();
var statearr_14351_14385 = state_14333__$1;
(statearr_14351_14385[(2)] = null);

(statearr_14351_14385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (17))){
var inst_14299 = (state_14333[(7)]);
var inst_14303 = cljs.core.chunk_first.call(null,inst_14299);
var inst_14304 = cljs.core.chunk_rest.call(null,inst_14299);
var inst_14305 = cljs.core.count.call(null,inst_14303);
var inst_14285 = inst_14304;
var inst_14286 = inst_14303;
var inst_14287 = inst_14305;
var inst_14288 = (0);
var state_14333__$1 = (function (){var statearr_14352 = state_14333;
(statearr_14352[(8)] = inst_14287);

(statearr_14352[(9)] = inst_14286);

(statearr_14352[(11)] = inst_14285);

(statearr_14352[(12)] = inst_14288);

return statearr_14352;
})();
var statearr_14353_14386 = state_14333__$1;
(statearr_14353_14386[(2)] = null);

(statearr_14353_14386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (3))){
var inst_14331 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14333__$1,inst_14331);
} else {
if((state_val_14334 === (12))){
var inst_14319 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
var statearr_14354_14387 = state_14333__$1;
(statearr_14354_14387[(2)] = inst_14319);

(statearr_14354_14387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (2))){
var state_14333__$1 = state_14333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14333__$1,(4),in$);
} else {
if((state_val_14334 === (23))){
var inst_14327 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
var statearr_14355_14388 = state_14333__$1;
(statearr_14355_14388[(2)] = inst_14327);

(statearr_14355_14388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (19))){
var inst_14314 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
var statearr_14356_14389 = state_14333__$1;
(statearr_14356_14389[(2)] = inst_14314);

(statearr_14356_14389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (11))){
var inst_14299 = (state_14333[(7)]);
var inst_14285 = (state_14333[(11)]);
var inst_14299__$1 = cljs.core.seq.call(null,inst_14285);
var state_14333__$1 = (function (){var statearr_14357 = state_14333;
(statearr_14357[(7)] = inst_14299__$1);

return statearr_14357;
})();
if(inst_14299__$1){
var statearr_14358_14390 = state_14333__$1;
(statearr_14358_14390[(1)] = (14));

} else {
var statearr_14359_14391 = state_14333__$1;
(statearr_14359_14391[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (9))){
var inst_14321 = (state_14333[(2)]);
var inst_14322 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14333__$1 = (function (){var statearr_14360 = state_14333;
(statearr_14360[(15)] = inst_14321);

return statearr_14360;
})();
if(cljs.core.truth_(inst_14322)){
var statearr_14361_14392 = state_14333__$1;
(statearr_14361_14392[(1)] = (21));

} else {
var statearr_14362_14393 = state_14333__$1;
(statearr_14362_14393[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (5))){
var inst_14277 = cljs.core.async.close_BANG_.call(null,out);
var state_14333__$1 = state_14333;
var statearr_14363_14394 = state_14333__$1;
(statearr_14363_14394[(2)] = inst_14277);

(statearr_14363_14394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (14))){
var inst_14299 = (state_14333[(7)]);
var inst_14301 = cljs.core.chunked_seq_QMARK_.call(null,inst_14299);
var state_14333__$1 = state_14333;
if(inst_14301){
var statearr_14364_14395 = state_14333__$1;
(statearr_14364_14395[(1)] = (17));

} else {
var statearr_14365_14396 = state_14333__$1;
(statearr_14365_14396[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (16))){
var inst_14317 = (state_14333[(2)]);
var state_14333__$1 = state_14333;
var statearr_14366_14397 = state_14333__$1;
(statearr_14366_14397[(2)] = inst_14317);

(statearr_14366_14397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14334 === (10))){
var inst_14286 = (state_14333[(9)]);
var inst_14288 = (state_14333[(12)]);
var inst_14293 = cljs.core._nth.call(null,inst_14286,inst_14288);
var state_14333__$1 = state_14333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14333__$1,(13),out,inst_14293);
} else {
if((state_val_14334 === (18))){
var inst_14299 = (state_14333[(7)]);
var inst_14308 = cljs.core.first.call(null,inst_14299);
var state_14333__$1 = state_14333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14333__$1,(20),out,inst_14308);
} else {
if((state_val_14334 === (8))){
var inst_14287 = (state_14333[(8)]);
var inst_14288 = (state_14333[(12)]);
var inst_14290 = (inst_14288 < inst_14287);
var inst_14291 = inst_14290;
var state_14333__$1 = state_14333;
if(cljs.core.truth_(inst_14291)){
var statearr_14367_14398 = state_14333__$1;
(statearr_14367_14398[(1)] = (10));

} else {
var statearr_14368_14399 = state_14333__$1;
(statearr_14368_14399[(1)] = (11));

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
});})(c__5869__auto__))
;
return ((function (switch__5854__auto__,c__5869__auto__){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14372[(0)] = state_machine__5855__auto__);

(statearr_14372[(1)] = (1));

return statearr_14372;
});
var state_machine__5855__auto____1 = (function (state_14333){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14373){if((e14373 instanceof Object)){
var ex__5858__auto__ = e14373;
var statearr_14374_14400 = state_14333;
(statearr_14374_14400[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14401 = state_14333;
state_14333 = G__14401;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14333){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_14375 = f__5870__auto__.call(null);
(statearr_14375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_14375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto__))
);

return c__5869__auto__;
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
var c__5869__auto___14498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14498,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14498,out){
return (function (state_14473){
var state_val_14474 = (state_14473[(1)]);
if((state_val_14474 === (7))){
var inst_14468 = (state_14473[(2)]);
var state_14473__$1 = state_14473;
var statearr_14475_14499 = state_14473__$1;
(statearr_14475_14499[(2)] = inst_14468);

(statearr_14475_14499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (1))){
var inst_14450 = null;
var state_14473__$1 = (function (){var statearr_14476 = state_14473;
(statearr_14476[(7)] = inst_14450);

return statearr_14476;
})();
var statearr_14477_14500 = state_14473__$1;
(statearr_14477_14500[(2)] = null);

(statearr_14477_14500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (4))){
var inst_14453 = (state_14473[(8)]);
var inst_14453__$1 = (state_14473[(2)]);
var inst_14454 = (inst_14453__$1 == null);
var inst_14455 = cljs.core.not.call(null,inst_14454);
var state_14473__$1 = (function (){var statearr_14478 = state_14473;
(statearr_14478[(8)] = inst_14453__$1);

return statearr_14478;
})();
if(inst_14455){
var statearr_14479_14501 = state_14473__$1;
(statearr_14479_14501[(1)] = (5));

} else {
var statearr_14480_14502 = state_14473__$1;
(statearr_14480_14502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (6))){
var state_14473__$1 = state_14473;
var statearr_14481_14503 = state_14473__$1;
(statearr_14481_14503[(2)] = null);

(statearr_14481_14503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (3))){
var inst_14470 = (state_14473[(2)]);
var inst_14471 = cljs.core.async.close_BANG_.call(null,out);
var state_14473__$1 = (function (){var statearr_14482 = state_14473;
(statearr_14482[(9)] = inst_14470);

return statearr_14482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14473__$1,inst_14471);
} else {
if((state_val_14474 === (2))){
var state_14473__$1 = state_14473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14473__$1,(4),ch);
} else {
if((state_val_14474 === (11))){
var inst_14453 = (state_14473[(8)]);
var inst_14462 = (state_14473[(2)]);
var inst_14450 = inst_14453;
var state_14473__$1 = (function (){var statearr_14483 = state_14473;
(statearr_14483[(7)] = inst_14450);

(statearr_14483[(10)] = inst_14462);

return statearr_14483;
})();
var statearr_14484_14504 = state_14473__$1;
(statearr_14484_14504[(2)] = null);

(statearr_14484_14504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (9))){
var inst_14453 = (state_14473[(8)]);
var state_14473__$1 = state_14473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14473__$1,(11),out,inst_14453);
} else {
if((state_val_14474 === (5))){
var inst_14450 = (state_14473[(7)]);
var inst_14453 = (state_14473[(8)]);
var inst_14457 = cljs.core._EQ_.call(null,inst_14453,inst_14450);
var state_14473__$1 = state_14473;
if(inst_14457){
var statearr_14486_14505 = state_14473__$1;
(statearr_14486_14505[(1)] = (8));

} else {
var statearr_14487_14506 = state_14473__$1;
(statearr_14487_14506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (10))){
var inst_14465 = (state_14473[(2)]);
var state_14473__$1 = state_14473;
var statearr_14488_14507 = state_14473__$1;
(statearr_14488_14507[(2)] = inst_14465);

(statearr_14488_14507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14474 === (8))){
var inst_14450 = (state_14473[(7)]);
var tmp14485 = inst_14450;
var inst_14450__$1 = tmp14485;
var state_14473__$1 = (function (){var statearr_14489 = state_14473;
(statearr_14489[(7)] = inst_14450__$1);

return statearr_14489;
})();
var statearr_14490_14508 = state_14473__$1;
(statearr_14490_14508[(2)] = null);

(statearr_14490_14508[(1)] = (2));


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
});})(c__5869__auto___14498,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14498,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14494[(0)] = state_machine__5855__auto__);

(statearr_14494[(1)] = (1));

return statearr_14494;
});
var state_machine__5855__auto____1 = (function (state_14473){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14495){if((e14495 instanceof Object)){
var ex__5858__auto__ = e14495;
var statearr_14496_14509 = state_14473;
(statearr_14496_14509[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14510 = state_14473;
state_14473 = G__14510;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14473){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14498,out))
})();
var state__5871__auto__ = (function (){var statearr_14497 = f__5870__auto__.call(null);
(statearr_14497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14498);

return statearr_14497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14498,out))
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
var c__5869__auto___14645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14645,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14645,out){
return (function (state_14615){
var state_val_14616 = (state_14615[(1)]);
if((state_val_14616 === (7))){
var inst_14611 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
var statearr_14617_14646 = state_14615__$1;
(statearr_14617_14646[(2)] = inst_14611);

(statearr_14617_14646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (1))){
var inst_14578 = (new Array(n));
var inst_14579 = inst_14578;
var inst_14580 = (0);
var state_14615__$1 = (function (){var statearr_14618 = state_14615;
(statearr_14618[(7)] = inst_14579);

(statearr_14618[(8)] = inst_14580);

return statearr_14618;
})();
var statearr_14619_14647 = state_14615__$1;
(statearr_14619_14647[(2)] = null);

(statearr_14619_14647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (4))){
var inst_14583 = (state_14615[(9)]);
var inst_14583__$1 = (state_14615[(2)]);
var inst_14584 = (inst_14583__$1 == null);
var inst_14585 = cljs.core.not.call(null,inst_14584);
var state_14615__$1 = (function (){var statearr_14620 = state_14615;
(statearr_14620[(9)] = inst_14583__$1);

return statearr_14620;
})();
if(inst_14585){
var statearr_14621_14648 = state_14615__$1;
(statearr_14621_14648[(1)] = (5));

} else {
var statearr_14622_14649 = state_14615__$1;
(statearr_14622_14649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (15))){
var inst_14605 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
var statearr_14623_14650 = state_14615__$1;
(statearr_14623_14650[(2)] = inst_14605);

(statearr_14623_14650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (13))){
var state_14615__$1 = state_14615;
var statearr_14624_14651 = state_14615__$1;
(statearr_14624_14651[(2)] = null);

(statearr_14624_14651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (6))){
var inst_14580 = (state_14615[(8)]);
var inst_14601 = (inst_14580 > (0));
var state_14615__$1 = state_14615;
if(cljs.core.truth_(inst_14601)){
var statearr_14625_14652 = state_14615__$1;
(statearr_14625_14652[(1)] = (12));

} else {
var statearr_14626_14653 = state_14615__$1;
(statearr_14626_14653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (3))){
var inst_14613 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14615__$1,inst_14613);
} else {
if((state_val_14616 === (12))){
var inst_14579 = (state_14615[(7)]);
var inst_14603 = cljs.core.vec.call(null,inst_14579);
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14615__$1,(15),out,inst_14603);
} else {
if((state_val_14616 === (2))){
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14615__$1,(4),ch);
} else {
if((state_val_14616 === (11))){
var inst_14595 = (state_14615[(2)]);
var inst_14596 = (new Array(n));
var inst_14579 = inst_14596;
var inst_14580 = (0);
var state_14615__$1 = (function (){var statearr_14627 = state_14615;
(statearr_14627[(10)] = inst_14595);

(statearr_14627[(7)] = inst_14579);

(statearr_14627[(8)] = inst_14580);

return statearr_14627;
})();
var statearr_14628_14654 = state_14615__$1;
(statearr_14628_14654[(2)] = null);

(statearr_14628_14654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (9))){
var inst_14579 = (state_14615[(7)]);
var inst_14593 = cljs.core.vec.call(null,inst_14579);
var state_14615__$1 = state_14615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14615__$1,(11),out,inst_14593);
} else {
if((state_val_14616 === (5))){
var inst_14583 = (state_14615[(9)]);
var inst_14588 = (state_14615[(11)]);
var inst_14579 = (state_14615[(7)]);
var inst_14580 = (state_14615[(8)]);
var inst_14587 = (inst_14579[inst_14580] = inst_14583);
var inst_14588__$1 = (inst_14580 + (1));
var inst_14589 = (inst_14588__$1 < n);
var state_14615__$1 = (function (){var statearr_14629 = state_14615;
(statearr_14629[(11)] = inst_14588__$1);

(statearr_14629[(12)] = inst_14587);

return statearr_14629;
})();
if(cljs.core.truth_(inst_14589)){
var statearr_14630_14655 = state_14615__$1;
(statearr_14630_14655[(1)] = (8));

} else {
var statearr_14631_14656 = state_14615__$1;
(statearr_14631_14656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (14))){
var inst_14608 = (state_14615[(2)]);
var inst_14609 = cljs.core.async.close_BANG_.call(null,out);
var state_14615__$1 = (function (){var statearr_14633 = state_14615;
(statearr_14633[(13)] = inst_14608);

return statearr_14633;
})();
var statearr_14634_14657 = state_14615__$1;
(statearr_14634_14657[(2)] = inst_14609);

(statearr_14634_14657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (10))){
var inst_14599 = (state_14615[(2)]);
var state_14615__$1 = state_14615;
var statearr_14635_14658 = state_14615__$1;
(statearr_14635_14658[(2)] = inst_14599);

(statearr_14635_14658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14616 === (8))){
var inst_14588 = (state_14615[(11)]);
var inst_14579 = (state_14615[(7)]);
var tmp14632 = inst_14579;
var inst_14579__$1 = tmp14632;
var inst_14580 = inst_14588;
var state_14615__$1 = (function (){var statearr_14636 = state_14615;
(statearr_14636[(7)] = inst_14579__$1);

(statearr_14636[(8)] = inst_14580);

return statearr_14636;
})();
var statearr_14637_14659 = state_14615__$1;
(statearr_14637_14659[(2)] = null);

(statearr_14637_14659[(1)] = (2));


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
});})(c__5869__auto___14645,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14645,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14641[(0)] = state_machine__5855__auto__);

(statearr_14641[(1)] = (1));

return statearr_14641;
});
var state_machine__5855__auto____1 = (function (state_14615){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14642){if((e14642 instanceof Object)){
var ex__5858__auto__ = e14642;
var statearr_14643_14660 = state_14615;
(statearr_14643_14660[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14661 = state_14615;
state_14615 = G__14661;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14615){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14645,out))
})();
var state__5871__auto__ = (function (){var statearr_14644 = f__5870__auto__.call(null);
(statearr_14644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14645);

return statearr_14644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14645,out))
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
var c__5869__auto___14804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14804,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14804,out){
return (function (state_14774){
var state_val_14775 = (state_14774[(1)]);
if((state_val_14775 === (7))){
var inst_14770 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
var statearr_14776_14805 = state_14774__$1;
(statearr_14776_14805[(2)] = inst_14770);

(statearr_14776_14805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (1))){
var inst_14733 = [];
var inst_14734 = inst_14733;
var inst_14735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14774__$1 = (function (){var statearr_14777 = state_14774;
(statearr_14777[(7)] = inst_14734);

(statearr_14777[(8)] = inst_14735);

return statearr_14777;
})();
var statearr_14778_14806 = state_14774__$1;
(statearr_14778_14806[(2)] = null);

(statearr_14778_14806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (4))){
var inst_14738 = (state_14774[(9)]);
var inst_14738__$1 = (state_14774[(2)]);
var inst_14739 = (inst_14738__$1 == null);
var inst_14740 = cljs.core.not.call(null,inst_14739);
var state_14774__$1 = (function (){var statearr_14779 = state_14774;
(statearr_14779[(9)] = inst_14738__$1);

return statearr_14779;
})();
if(inst_14740){
var statearr_14780_14807 = state_14774__$1;
(statearr_14780_14807[(1)] = (5));

} else {
var statearr_14781_14808 = state_14774__$1;
(statearr_14781_14808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (15))){
var inst_14764 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
var statearr_14782_14809 = state_14774__$1;
(statearr_14782_14809[(2)] = inst_14764);

(statearr_14782_14809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (13))){
var state_14774__$1 = state_14774;
var statearr_14783_14810 = state_14774__$1;
(statearr_14783_14810[(2)] = null);

(statearr_14783_14810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (6))){
var inst_14734 = (state_14774[(7)]);
var inst_14759 = inst_14734.length;
var inst_14760 = (inst_14759 > (0));
var state_14774__$1 = state_14774;
if(cljs.core.truth_(inst_14760)){
var statearr_14784_14811 = state_14774__$1;
(statearr_14784_14811[(1)] = (12));

} else {
var statearr_14785_14812 = state_14774__$1;
(statearr_14785_14812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (3))){
var inst_14772 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14774__$1,inst_14772);
} else {
if((state_val_14775 === (12))){
var inst_14734 = (state_14774[(7)]);
var inst_14762 = cljs.core.vec.call(null,inst_14734);
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14774__$1,(15),out,inst_14762);
} else {
if((state_val_14775 === (2))){
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14774__$1,(4),ch);
} else {
if((state_val_14775 === (11))){
var inst_14742 = (state_14774[(10)]);
var inst_14738 = (state_14774[(9)]);
var inst_14752 = (state_14774[(2)]);
var inst_14753 = [];
var inst_14754 = inst_14753.push(inst_14738);
var inst_14734 = inst_14753;
var inst_14735 = inst_14742;
var state_14774__$1 = (function (){var statearr_14786 = state_14774;
(statearr_14786[(11)] = inst_14752);

(statearr_14786[(7)] = inst_14734);

(statearr_14786[(12)] = inst_14754);

(statearr_14786[(8)] = inst_14735);

return statearr_14786;
})();
var statearr_14787_14813 = state_14774__$1;
(statearr_14787_14813[(2)] = null);

(statearr_14787_14813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (9))){
var inst_14734 = (state_14774[(7)]);
var inst_14750 = cljs.core.vec.call(null,inst_14734);
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14774__$1,(11),out,inst_14750);
} else {
if((state_val_14775 === (5))){
var inst_14742 = (state_14774[(10)]);
var inst_14738 = (state_14774[(9)]);
var inst_14735 = (state_14774[(8)]);
var inst_14742__$1 = f.call(null,inst_14738);
var inst_14743 = cljs.core._EQ_.call(null,inst_14742__$1,inst_14735);
var inst_14744 = cljs.core.keyword_identical_QMARK_.call(null,inst_14735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14745 = (inst_14743) || (inst_14744);
var state_14774__$1 = (function (){var statearr_14788 = state_14774;
(statearr_14788[(10)] = inst_14742__$1);

return statearr_14788;
})();
if(cljs.core.truth_(inst_14745)){
var statearr_14789_14814 = state_14774__$1;
(statearr_14789_14814[(1)] = (8));

} else {
var statearr_14790_14815 = state_14774__$1;
(statearr_14790_14815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (14))){
var inst_14767 = (state_14774[(2)]);
var inst_14768 = cljs.core.async.close_BANG_.call(null,out);
var state_14774__$1 = (function (){var statearr_14792 = state_14774;
(statearr_14792[(13)] = inst_14767);

return statearr_14792;
})();
var statearr_14793_14816 = state_14774__$1;
(statearr_14793_14816[(2)] = inst_14768);

(statearr_14793_14816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (10))){
var inst_14757 = (state_14774[(2)]);
var state_14774__$1 = state_14774;
var statearr_14794_14817 = state_14774__$1;
(statearr_14794_14817[(2)] = inst_14757);

(statearr_14794_14817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14775 === (8))){
var inst_14742 = (state_14774[(10)]);
var inst_14738 = (state_14774[(9)]);
var inst_14734 = (state_14774[(7)]);
var inst_14747 = inst_14734.push(inst_14738);
var tmp14791 = inst_14734;
var inst_14734__$1 = tmp14791;
var inst_14735 = inst_14742;
var state_14774__$1 = (function (){var statearr_14795 = state_14774;
(statearr_14795[(14)] = inst_14747);

(statearr_14795[(7)] = inst_14734__$1);

(statearr_14795[(8)] = inst_14735);

return statearr_14795;
})();
var statearr_14796_14818 = state_14774__$1;
(statearr_14796_14818[(2)] = null);

(statearr_14796_14818[(1)] = (2));


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
});})(c__5869__auto___14804,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14804,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14800[(0)] = state_machine__5855__auto__);

(statearr_14800[(1)] = (1));

return statearr_14800;
});
var state_machine__5855__auto____1 = (function (state_14774){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14801){if((e14801 instanceof Object)){
var ex__5858__auto__ = e14801;
var statearr_14802_14819 = state_14774;
(statearr_14802_14819[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14820 = state_14774;
state_14774 = G__14820;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14804,out))
})();
var state__5871__auto__ = (function (){var statearr_14803 = f__5870__auto__.call(null);
(statearr_14803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14804);

return statearr_14803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14804,out))
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