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
if(typeof cljs.core.async.t20370 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20370 = (function (f,fn_handler,meta20371){
this.f = f;
this.fn_handler = fn_handler;
this.meta20371 = meta20371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20372){
var self__ = this;
var _20372__$1 = this;
return self__.meta20371;
});

cljs.core.async.t20370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20372,meta20371__$1){
var self__ = this;
var _20372__$1 = this;
return (new cljs.core.async.t20370(self__.f,self__.fn_handler,meta20371__$1));
});

cljs.core.async.t20370.cljs$lang$type = true;

cljs.core.async.t20370.cljs$lang$ctorStr = "cljs.core.async/t20370";

cljs.core.async.t20370.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20370");
});

cljs.core.async.__GT_t20370 = (function __GT_t20370(f__$1,fn_handler__$1,meta20371){
return (new cljs.core.async.t20370(f__$1,fn_handler__$1,meta20371));
});

}

return (new cljs.core.async.t20370(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var G__20374 = buff;
if(G__20374){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__20374.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20374.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20374);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20374);
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
var val_20375 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20375);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20375,ret){
return (function (){
return fn1.call(null,val_20375);
});})(val_20375,ret))
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
var n__4517__auto___20376 = n;
var x_20377 = (0);
while(true){
if((x_20377 < n__4517__auto___20376)){
(a[x_20377] = (0));

var G__20378 = (x_20377 + (1));
x_20377 = G__20378;
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

var G__20379 = (i + (1));
i = G__20379;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20383 = (function (flag,alt_flag,meta20384){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20384 = meta20384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20383.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20385){
var self__ = this;
var _20385__$1 = this;
return self__.meta20384;
});})(flag))
;

cljs.core.async.t20383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20385,meta20384__$1){
var self__ = this;
var _20385__$1 = this;
return (new cljs.core.async.t20383(self__.flag,self__.alt_flag,meta20384__$1));
});})(flag))
;

cljs.core.async.t20383.cljs$lang$type = true;

cljs.core.async.t20383.cljs$lang$ctorStr = "cljs.core.async/t20383";

cljs.core.async.t20383.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20383");
});})(flag))
;

cljs.core.async.__GT_t20383 = ((function (flag){
return (function __GT_t20383(flag__$1,alt_flag__$1,meta20384){
return (new cljs.core.async.t20383(flag__$1,alt_flag__$1,meta20384));
});})(flag))
;

}

return (new cljs.core.async.t20383(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20389 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20389 = (function (cb,flag,alt_handler,meta20390){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20390 = meta20390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20389.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20391){
var self__ = this;
var _20391__$1 = this;
return self__.meta20390;
});

cljs.core.async.t20389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20391,meta20390__$1){
var self__ = this;
var _20391__$1 = this;
return (new cljs.core.async.t20389(self__.cb,self__.flag,self__.alt_handler,meta20390__$1));
});

cljs.core.async.t20389.cljs$lang$type = true;

cljs.core.async.t20389.cljs$lang$ctorStr = "cljs.core.async/t20389";

cljs.core.async.t20389.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20389");
});

cljs.core.async.__GT_t20389 = (function __GT_t20389(cb__$1,flag__$1,alt_handler__$1,meta20390){
return (new cljs.core.async.t20389(cb__$1,flag__$1,alt_handler__$1,meta20390));
});

}

return (new cljs.core.async.t20389(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
return (function (p1__20392_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20392_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20393_SHARP_,port], null));
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
var G__20394 = (i + (1));
i = G__20394;
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
var alts_BANG___delegate = function (ports,p__20395){
var map__20397 = p__20395;
var map__20397__$1 = ((cljs.core.seq_QMARK_.call(null,map__20397))?cljs.core.apply.call(null,cljs.core.hash_map,map__20397):map__20397);
var opts = map__20397__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20395 = null;
if (arguments.length > 1) {
  p__20395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__20395);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20398){
var ports = cljs.core.first(arglist__20398);
var p__20395 = cljs.core.rest(arglist__20398);
return alts_BANG___delegate(ports,p__20395);
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
var c__5869__auto___20493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___20493){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___20493){
return (function (state_20469){
var state_val_20470 = (state_20469[(1)]);
if((state_val_20470 === (7))){
var inst_20465 = (state_20469[(2)]);
var state_20469__$1 = state_20469;
var statearr_20471_20494 = state_20469__$1;
(statearr_20471_20494[(2)] = inst_20465);

(statearr_20471_20494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (1))){
var state_20469__$1 = state_20469;
var statearr_20472_20495 = state_20469__$1;
(statearr_20472_20495[(2)] = null);

(statearr_20472_20495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (4))){
var inst_20448 = (state_20469[(7)]);
var inst_20448__$1 = (state_20469[(2)]);
var inst_20449 = (inst_20448__$1 == null);
var state_20469__$1 = (function (){var statearr_20473 = state_20469;
(statearr_20473[(7)] = inst_20448__$1);

return statearr_20473;
})();
if(cljs.core.truth_(inst_20449)){
var statearr_20474_20496 = state_20469__$1;
(statearr_20474_20496[(1)] = (5));

} else {
var statearr_20475_20497 = state_20469__$1;
(statearr_20475_20497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (13))){
var state_20469__$1 = state_20469;
var statearr_20476_20498 = state_20469__$1;
(statearr_20476_20498[(2)] = null);

(statearr_20476_20498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (6))){
var inst_20448 = (state_20469[(7)]);
var state_20469__$1 = state_20469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20469__$1,(11),to,inst_20448);
} else {
if((state_val_20470 === (3))){
var inst_20467 = (state_20469[(2)]);
var state_20469__$1 = state_20469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20469__$1,inst_20467);
} else {
if((state_val_20470 === (12))){
var state_20469__$1 = state_20469;
var statearr_20477_20499 = state_20469__$1;
(statearr_20477_20499[(2)] = null);

(statearr_20477_20499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (2))){
var state_20469__$1 = state_20469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20469__$1,(4),from);
} else {
if((state_val_20470 === (11))){
var inst_20458 = (state_20469[(2)]);
var state_20469__$1 = state_20469;
if(cljs.core.truth_(inst_20458)){
var statearr_20478_20500 = state_20469__$1;
(statearr_20478_20500[(1)] = (12));

} else {
var statearr_20479_20501 = state_20469__$1;
(statearr_20479_20501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (9))){
var state_20469__$1 = state_20469;
var statearr_20480_20502 = state_20469__$1;
(statearr_20480_20502[(2)] = null);

(statearr_20480_20502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (5))){
var state_20469__$1 = state_20469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20481_20503 = state_20469__$1;
(statearr_20481_20503[(1)] = (8));

} else {
var statearr_20482_20504 = state_20469__$1;
(statearr_20482_20504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (14))){
var inst_20463 = (state_20469[(2)]);
var state_20469__$1 = state_20469;
var statearr_20483_20505 = state_20469__$1;
(statearr_20483_20505[(2)] = inst_20463);

(statearr_20483_20505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (10))){
var inst_20455 = (state_20469[(2)]);
var state_20469__$1 = state_20469;
var statearr_20484_20506 = state_20469__$1;
(statearr_20484_20506[(2)] = inst_20455);

(statearr_20484_20506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20470 === (8))){
var inst_20452 = cljs.core.async.close_BANG_.call(null,to);
var state_20469__$1 = state_20469;
var statearr_20485_20507 = state_20469__$1;
(statearr_20485_20507[(2)] = inst_20452);

(statearr_20485_20507[(1)] = (10));


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
});})(c__5869__auto___20493))
;
return ((function (switch__5854__auto__,c__5869__auto___20493){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_20489 = [null,null,null,null,null,null,null,null];
(statearr_20489[(0)] = state_machine__5855__auto__);

(statearr_20489[(1)] = (1));

return statearr_20489;
});
var state_machine__5855__auto____1 = (function (state_20469){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20490){if((e20490 instanceof Object)){
var ex__5858__auto__ = e20490;
var statearr_20491_20508 = state_20469;
(statearr_20491_20508[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20509 = state_20469;
state_20469 = G__20509;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20469){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___20493))
})();
var state__5871__auto__ = (function (){var statearr_20492 = f__5870__auto__.call(null);
(statearr_20492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___20493);

return statearr_20492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___20493))
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
return (function (p__20693){
var vec__20694 = p__20693;
var v = cljs.core.nth.call(null,vec__20694,(0),null);
var p = cljs.core.nth.call(null,vec__20694,(1),null);
var job = vec__20694;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5869__auto___20876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results){
return (function (state_20699){
var state_val_20700 = (state_20699[(1)]);
if((state_val_20700 === (2))){
var inst_20696 = (state_20699[(2)]);
var inst_20697 = cljs.core.async.close_BANG_.call(null,res);
var state_20699__$1 = (function (){var statearr_20701 = state_20699;
(statearr_20701[(7)] = inst_20696);

return statearr_20701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20699__$1,inst_20697);
} else {
if((state_val_20700 === (1))){
var state_20699__$1 = state_20699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20699__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results))
;
return ((function (switch__5854__auto__,c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_20705 = [null,null,null,null,null,null,null,null];
(statearr_20705[(0)] = state_machine__5855__auto__);

(statearr_20705[(1)] = (1));

return statearr_20705;
});
var state_machine__5855__auto____1 = (function (state_20699){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20706){if((e20706 instanceof Object)){
var ex__5858__auto__ = e20706;
var statearr_20707_20877 = state_20699;
(statearr_20707_20877[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20878 = state_20699;
state_20699 = G__20878;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20699){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results))
})();
var state__5871__auto__ = (function (){var statearr_20708 = f__5870__auto__.call(null);
(statearr_20708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___20876);

return statearr_20708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___20876,res,vec__20694,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20709){
var vec__20710 = p__20709;
var v = cljs.core.nth.call(null,vec__20710,(0),null);
var p = cljs.core.nth.call(null,vec__20710,(1),null);
var job = vec__20710;
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
var n__4517__auto___20879 = n;
var __20880 = (0);
while(true){
if((__20880 < n__4517__auto___20879)){
var G__20711_20881 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20711_20881) {
case "async":
var c__5869__auto___20883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20880,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__20880,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function (state_20724){
var state_val_20725 = (state_20724[(1)]);
if((state_val_20725 === (7))){
var inst_20720 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20726_20884 = state_20724__$1;
(statearr_20726_20884[(2)] = inst_20720);

(statearr_20726_20884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (6))){
var state_20724__$1 = state_20724;
var statearr_20727_20885 = state_20724__$1;
(statearr_20727_20885[(2)] = null);

(statearr_20727_20885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (5))){
var state_20724__$1 = state_20724;
var statearr_20728_20886 = state_20724__$1;
(statearr_20728_20886[(2)] = null);

(statearr_20728_20886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (4))){
var inst_20714 = (state_20724[(2)]);
var inst_20715 = async.call(null,inst_20714);
var state_20724__$1 = state_20724;
if(cljs.core.truth_(inst_20715)){
var statearr_20729_20887 = state_20724__$1;
(statearr_20729_20887[(1)] = (5));

} else {
var statearr_20730_20888 = state_20724__$1;
(statearr_20730_20888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (3))){
var inst_20722 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20724__$1,inst_20722);
} else {
if((state_val_20725 === (2))){
var state_20724__$1 = state_20724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20724__$1,(4),jobs);
} else {
if((state_val_20725 === (1))){
var state_20724__$1 = state_20724;
var statearr_20731_20889 = state_20724__$1;
(statearr_20731_20889[(2)] = null);

(statearr_20731_20889[(1)] = (2));


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
});})(__20880,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
;
return ((function (__20880,switch__5854__auto__,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_20735 = [null,null,null,null,null,null,null];
(statearr_20735[(0)] = state_machine__5855__auto__);

(statearr_20735[(1)] = (1));

return statearr_20735;
});
var state_machine__5855__auto____1 = (function (state_20724){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20736){if((e20736 instanceof Object)){
var ex__5858__auto__ = e20736;
var statearr_20737_20890 = state_20724;
(statearr_20737_20890[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20891 = state_20724;
state_20724 = G__20891;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20724){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__20880,switch__5854__auto__,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_20738 = f__5870__auto__.call(null);
(statearr_20738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___20883);

return statearr_20738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__20880,c__5869__auto___20883,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
);


break;
case "compute":
var c__5869__auto___20892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20880,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__20880,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function (state_20751){
var state_val_20752 = (state_20751[(1)]);
if((state_val_20752 === (7))){
var inst_20747 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
var statearr_20753_20893 = state_20751__$1;
(statearr_20753_20893[(2)] = inst_20747);

(statearr_20753_20893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (6))){
var state_20751__$1 = state_20751;
var statearr_20754_20894 = state_20751__$1;
(statearr_20754_20894[(2)] = null);

(statearr_20754_20894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (5))){
var state_20751__$1 = state_20751;
var statearr_20755_20895 = state_20751__$1;
(statearr_20755_20895[(2)] = null);

(statearr_20755_20895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (4))){
var inst_20741 = (state_20751[(2)]);
var inst_20742 = process.call(null,inst_20741);
var state_20751__$1 = state_20751;
if(cljs.core.truth_(inst_20742)){
var statearr_20756_20896 = state_20751__$1;
(statearr_20756_20896[(1)] = (5));

} else {
var statearr_20757_20897 = state_20751__$1;
(statearr_20757_20897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20752 === (3))){
var inst_20749 = (state_20751[(2)]);
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20751__$1,inst_20749);
} else {
if((state_val_20752 === (2))){
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20751__$1,(4),jobs);
} else {
if((state_val_20752 === (1))){
var state_20751__$1 = state_20751;
var statearr_20758_20898 = state_20751__$1;
(statearr_20758_20898[(2)] = null);

(statearr_20758_20898[(1)] = (2));


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
});})(__20880,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
;
return ((function (__20880,switch__5854__auto__,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_20762 = [null,null,null,null,null,null,null];
(statearr_20762[(0)] = state_machine__5855__auto__);

(statearr_20762[(1)] = (1));

return statearr_20762;
});
var state_machine__5855__auto____1 = (function (state_20751){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20763){if((e20763 instanceof Object)){
var ex__5858__auto__ = e20763;
var statearr_20764_20899 = state_20751;
(statearr_20764_20899[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20900 = state_20751;
state_20751 = G__20900;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20751){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__20880,switch__5854__auto__,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_20765 = f__5870__auto__.call(null);
(statearr_20765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___20892);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__20880,c__5869__auto___20892,G__20711_20881,n__4517__auto___20879,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20901 = (__20880 + (1));
__20880 = G__20901;
continue;
} else {
}
break;
}

var c__5869__auto___20902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___20902,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___20902,jobs,results,process,async){
return (function (state_20787){
var state_val_20788 = (state_20787[(1)]);
if((state_val_20788 === (9))){
var inst_20780 = (state_20787[(2)]);
var state_20787__$1 = (function (){var statearr_20789 = state_20787;
(statearr_20789[(7)] = inst_20780);

return statearr_20789;
})();
var statearr_20790_20903 = state_20787__$1;
(statearr_20790_20903[(2)] = null);

(statearr_20790_20903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (8))){
var inst_20773 = (state_20787[(8)]);
var inst_20778 = (state_20787[(2)]);
var state_20787__$1 = (function (){var statearr_20791 = state_20787;
(statearr_20791[(9)] = inst_20778);

return statearr_20791;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20787__$1,(9),results,inst_20773);
} else {
if((state_val_20788 === (7))){
var inst_20783 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
var statearr_20792_20904 = state_20787__$1;
(statearr_20792_20904[(2)] = inst_20783);

(statearr_20792_20904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (6))){
var inst_20773 = (state_20787[(8)]);
var inst_20768 = (state_20787[(10)]);
var inst_20773__$1 = cljs.core.async.chan.call(null,(1));
var inst_20774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20775 = [inst_20768,inst_20773__$1];
var inst_20776 = (new cljs.core.PersistentVector(null,2,(5),inst_20774,inst_20775,null));
var state_20787__$1 = (function (){var statearr_20793 = state_20787;
(statearr_20793[(8)] = inst_20773__$1);

return statearr_20793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20787__$1,(8),jobs,inst_20776);
} else {
if((state_val_20788 === (5))){
var inst_20771 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20787__$1 = state_20787;
var statearr_20794_20905 = state_20787__$1;
(statearr_20794_20905[(2)] = inst_20771);

(statearr_20794_20905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (4))){
var inst_20768 = (state_20787[(10)]);
var inst_20768__$1 = (state_20787[(2)]);
var inst_20769 = (inst_20768__$1 == null);
var state_20787__$1 = (function (){var statearr_20795 = state_20787;
(statearr_20795[(10)] = inst_20768__$1);

return statearr_20795;
})();
if(cljs.core.truth_(inst_20769)){
var statearr_20796_20906 = state_20787__$1;
(statearr_20796_20906[(1)] = (5));

} else {
var statearr_20797_20907 = state_20787__$1;
(statearr_20797_20907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20788 === (3))){
var inst_20785 = (state_20787[(2)]);
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20787__$1,inst_20785);
} else {
if((state_val_20788 === (2))){
var state_20787__$1 = state_20787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20787__$1,(4),from);
} else {
if((state_val_20788 === (1))){
var state_20787__$1 = state_20787;
var statearr_20798_20908 = state_20787__$1;
(statearr_20798_20908[(2)] = null);

(statearr_20798_20908[(1)] = (2));


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
});})(c__5869__auto___20902,jobs,results,process,async))
;
return ((function (switch__5854__auto__,c__5869__auto___20902,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_20802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20802[(0)] = state_machine__5855__auto__);

(statearr_20802[(1)] = (1));

return statearr_20802;
});
var state_machine__5855__auto____1 = (function (state_20787){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20803){if((e20803 instanceof Object)){
var ex__5858__auto__ = e20803;
var statearr_20804_20909 = state_20787;
(statearr_20804_20909[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20910 = state_20787;
state_20787 = G__20910;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20787){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___20902,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_20805 = f__5870__auto__.call(null);
(statearr_20805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___20902);

return statearr_20805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___20902,jobs,results,process,async))
);


var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,jobs,results,process,async){
return (function (state_20843){
var state_val_20844 = (state_20843[(1)]);
if((state_val_20844 === (7))){
var inst_20839 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20845_20911 = state_20843__$1;
(statearr_20845_20911[(2)] = inst_20839);

(statearr_20845_20911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (20))){
var state_20843__$1 = state_20843;
var statearr_20846_20912 = state_20843__$1;
(statearr_20846_20912[(2)] = null);

(statearr_20846_20912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (1))){
var state_20843__$1 = state_20843;
var statearr_20847_20913 = state_20843__$1;
(statearr_20847_20913[(2)] = null);

(statearr_20847_20913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (4))){
var inst_20808 = (state_20843[(7)]);
var inst_20808__$1 = (state_20843[(2)]);
var inst_20809 = (inst_20808__$1 == null);
var state_20843__$1 = (function (){var statearr_20848 = state_20843;
(statearr_20848[(7)] = inst_20808__$1);

return statearr_20848;
})();
if(cljs.core.truth_(inst_20809)){
var statearr_20849_20914 = state_20843__$1;
(statearr_20849_20914[(1)] = (5));

} else {
var statearr_20850_20915 = state_20843__$1;
(statearr_20850_20915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (15))){
var inst_20821 = (state_20843[(8)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20843__$1,(18),to,inst_20821);
} else {
if((state_val_20844 === (21))){
var inst_20834 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20851_20916 = state_20843__$1;
(statearr_20851_20916[(2)] = inst_20834);

(statearr_20851_20916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (13))){
var inst_20836 = (state_20843[(2)]);
var state_20843__$1 = (function (){var statearr_20852 = state_20843;
(statearr_20852[(9)] = inst_20836);

return statearr_20852;
})();
var statearr_20853_20917 = state_20843__$1;
(statearr_20853_20917[(2)] = null);

(statearr_20853_20917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (6))){
var inst_20808 = (state_20843[(7)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20843__$1,(11),inst_20808);
} else {
if((state_val_20844 === (17))){
var inst_20829 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
if(cljs.core.truth_(inst_20829)){
var statearr_20854_20918 = state_20843__$1;
(statearr_20854_20918[(1)] = (19));

} else {
var statearr_20855_20919 = state_20843__$1;
(statearr_20855_20919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (3))){
var inst_20841 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20843__$1,inst_20841);
} else {
if((state_val_20844 === (12))){
var inst_20818 = (state_20843[(10)]);
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20843__$1,(14),inst_20818);
} else {
if((state_val_20844 === (2))){
var state_20843__$1 = state_20843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20843__$1,(4),results);
} else {
if((state_val_20844 === (19))){
var state_20843__$1 = state_20843;
var statearr_20856_20920 = state_20843__$1;
(statearr_20856_20920[(2)] = null);

(statearr_20856_20920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (11))){
var inst_20818 = (state_20843[(2)]);
var state_20843__$1 = (function (){var statearr_20857 = state_20843;
(statearr_20857[(10)] = inst_20818);

return statearr_20857;
})();
var statearr_20858_20921 = state_20843__$1;
(statearr_20858_20921[(2)] = null);

(statearr_20858_20921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (9))){
var state_20843__$1 = state_20843;
var statearr_20859_20922 = state_20843__$1;
(statearr_20859_20922[(2)] = null);

(statearr_20859_20922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (5))){
var state_20843__$1 = state_20843;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20860_20923 = state_20843__$1;
(statearr_20860_20923[(1)] = (8));

} else {
var statearr_20861_20924 = state_20843__$1;
(statearr_20861_20924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (14))){
var inst_20823 = (state_20843[(11)]);
var inst_20821 = (state_20843[(8)]);
var inst_20821__$1 = (state_20843[(2)]);
var inst_20822 = (inst_20821__$1 == null);
var inst_20823__$1 = cljs.core.not.call(null,inst_20822);
var state_20843__$1 = (function (){var statearr_20862 = state_20843;
(statearr_20862[(11)] = inst_20823__$1);

(statearr_20862[(8)] = inst_20821__$1);

return statearr_20862;
})();
if(inst_20823__$1){
var statearr_20863_20925 = state_20843__$1;
(statearr_20863_20925[(1)] = (15));

} else {
var statearr_20864_20926 = state_20843__$1;
(statearr_20864_20926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (16))){
var inst_20823 = (state_20843[(11)]);
var state_20843__$1 = state_20843;
var statearr_20865_20927 = state_20843__$1;
(statearr_20865_20927[(2)] = inst_20823);

(statearr_20865_20927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (10))){
var inst_20815 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20866_20928 = state_20843__$1;
(statearr_20866_20928[(2)] = inst_20815);

(statearr_20866_20928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (18))){
var inst_20826 = (state_20843[(2)]);
var state_20843__$1 = state_20843;
var statearr_20867_20929 = state_20843__$1;
(statearr_20867_20929[(2)] = inst_20826);

(statearr_20867_20929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20844 === (8))){
var inst_20812 = cljs.core.async.close_BANG_.call(null,to);
var state_20843__$1 = state_20843;
var statearr_20868_20930 = state_20843__$1;
(statearr_20868_20930[(2)] = inst_20812);

(statearr_20868_20930[(1)] = (10));


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
var statearr_20872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20872[(0)] = state_machine__5855__auto__);

(statearr_20872[(1)] = (1));

return statearr_20872;
});
var state_machine__5855__auto____1 = (function (state_20843){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_20843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e20873){if((e20873 instanceof Object)){
var ex__5858__auto__ = e20873;
var statearr_20874_20931 = state_20843;
(statearr_20874_20931[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20932 = state_20843;
state_20843 = G__20932;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_20843){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_20843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_20875 = f__5870__auto__.call(null);
(statearr_20875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_20875;
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
var c__5869__auto___21033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___21033,tc,fc){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___21033,tc,fc){
return (function (state_21008){
var state_val_21009 = (state_21008[(1)]);
if((state_val_21009 === (7))){
var inst_21004 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21010_21034 = state_21008__$1;
(statearr_21010_21034[(2)] = inst_21004);

(statearr_21010_21034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (1))){
var state_21008__$1 = state_21008;
var statearr_21011_21035 = state_21008__$1;
(statearr_21011_21035[(2)] = null);

(statearr_21011_21035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (4))){
var inst_20985 = (state_21008[(7)]);
var inst_20985__$1 = (state_21008[(2)]);
var inst_20986 = (inst_20985__$1 == null);
var state_21008__$1 = (function (){var statearr_21012 = state_21008;
(statearr_21012[(7)] = inst_20985__$1);

return statearr_21012;
})();
if(cljs.core.truth_(inst_20986)){
var statearr_21013_21036 = state_21008__$1;
(statearr_21013_21036[(1)] = (5));

} else {
var statearr_21014_21037 = state_21008__$1;
(statearr_21014_21037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (13))){
var state_21008__$1 = state_21008;
var statearr_21015_21038 = state_21008__$1;
(statearr_21015_21038[(2)] = null);

(statearr_21015_21038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (6))){
var inst_20985 = (state_21008[(7)]);
var inst_20991 = p.call(null,inst_20985);
var state_21008__$1 = state_21008;
if(cljs.core.truth_(inst_20991)){
var statearr_21016_21039 = state_21008__$1;
(statearr_21016_21039[(1)] = (9));

} else {
var statearr_21017_21040 = state_21008__$1;
(statearr_21017_21040[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (3))){
var inst_21006 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21008__$1,inst_21006);
} else {
if((state_val_21009 === (12))){
var state_21008__$1 = state_21008;
var statearr_21018_21041 = state_21008__$1;
(statearr_21018_21041[(2)] = null);

(statearr_21018_21041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (2))){
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21008__$1,(4),ch);
} else {
if((state_val_21009 === (11))){
var inst_20985 = (state_21008[(7)]);
var inst_20995 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21008__$1,(8),inst_20995,inst_20985);
} else {
if((state_val_21009 === (9))){
var state_21008__$1 = state_21008;
var statearr_21019_21042 = state_21008__$1;
(statearr_21019_21042[(2)] = tc);

(statearr_21019_21042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (5))){
var inst_20988 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20989 = cljs.core.async.close_BANG_.call(null,fc);
var state_21008__$1 = (function (){var statearr_21020 = state_21008;
(statearr_21020[(8)] = inst_20988);

return statearr_21020;
})();
var statearr_21021_21043 = state_21008__$1;
(statearr_21021_21043[(2)] = inst_20989);

(statearr_21021_21043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (14))){
var inst_21002 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
var statearr_21022_21044 = state_21008__$1;
(statearr_21022_21044[(2)] = inst_21002);

(statearr_21022_21044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (10))){
var state_21008__$1 = state_21008;
var statearr_21023_21045 = state_21008__$1;
(statearr_21023_21045[(2)] = fc);

(statearr_21023_21045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21009 === (8))){
var inst_20997 = (state_21008[(2)]);
var state_21008__$1 = state_21008;
if(cljs.core.truth_(inst_20997)){
var statearr_21024_21046 = state_21008__$1;
(statearr_21024_21046[(1)] = (12));

} else {
var statearr_21025_21047 = state_21008__$1;
(statearr_21025_21047[(1)] = (13));

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
});})(c__5869__auto___21033,tc,fc))
;
return ((function (switch__5854__auto__,c__5869__auto___21033,tc,fc){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_21029 = [null,null,null,null,null,null,null,null,null];
(statearr_21029[(0)] = state_machine__5855__auto__);

(statearr_21029[(1)] = (1));

return statearr_21029;
});
var state_machine__5855__auto____1 = (function (state_21008){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_21008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e21030){if((e21030 instanceof Object)){
var ex__5858__auto__ = e21030;
var statearr_21031_21048 = state_21008;
(statearr_21031_21048[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21049 = state_21008;
state_21008 = G__21049;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_21008){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_21008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___21033,tc,fc))
})();
var state__5871__auto__ = (function (){var statearr_21032 = f__5870__auto__.call(null);
(statearr_21032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___21033);

return statearr_21032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___21033,tc,fc))
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
return (function (state_21096){
var state_val_21097 = (state_21096[(1)]);
if((state_val_21097 === (7))){
var inst_21092 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
var statearr_21098_21114 = state_21096__$1;
(statearr_21098_21114[(2)] = inst_21092);

(statearr_21098_21114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (6))){
var inst_21085 = (state_21096[(7)]);
var inst_21082 = (state_21096[(8)]);
var inst_21089 = f.call(null,inst_21082,inst_21085);
var inst_21082__$1 = inst_21089;
var state_21096__$1 = (function (){var statearr_21099 = state_21096;
(statearr_21099[(8)] = inst_21082__$1);

return statearr_21099;
})();
var statearr_21100_21115 = state_21096__$1;
(statearr_21100_21115[(2)] = null);

(statearr_21100_21115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (5))){
var inst_21082 = (state_21096[(8)]);
var state_21096__$1 = state_21096;
var statearr_21101_21116 = state_21096__$1;
(statearr_21101_21116[(2)] = inst_21082);

(statearr_21101_21116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (4))){
var inst_21085 = (state_21096[(7)]);
var inst_21085__$1 = (state_21096[(2)]);
var inst_21086 = (inst_21085__$1 == null);
var state_21096__$1 = (function (){var statearr_21102 = state_21096;
(statearr_21102[(7)] = inst_21085__$1);

return statearr_21102;
})();
if(cljs.core.truth_(inst_21086)){
var statearr_21103_21117 = state_21096__$1;
(statearr_21103_21117[(1)] = (5));

} else {
var statearr_21104_21118 = state_21096__$1;
(statearr_21104_21118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21097 === (3))){
var inst_21094 = (state_21096[(2)]);
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21096__$1,inst_21094);
} else {
if((state_val_21097 === (2))){
var state_21096__$1 = state_21096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21096__$1,(4),ch);
} else {
if((state_val_21097 === (1))){
var inst_21082 = init;
var state_21096__$1 = (function (){var statearr_21105 = state_21096;
(statearr_21105[(8)] = inst_21082);

return statearr_21105;
})();
var statearr_21106_21119 = state_21096__$1;
(statearr_21106_21119[(2)] = null);

(statearr_21106_21119[(1)] = (2));


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
var statearr_21110 = [null,null,null,null,null,null,null,null,null];
(statearr_21110[(0)] = state_machine__5855__auto__);

(statearr_21110[(1)] = (1));

return statearr_21110;
});
var state_machine__5855__auto____1 = (function (state_21096){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_21096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e21111){if((e21111 instanceof Object)){
var ex__5858__auto__ = e21111;
var statearr_21112_21120 = state_21096;
(statearr_21112_21120[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21121 = state_21096;
state_21096 = G__21121;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_21096){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_21096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_21113 = f__5870__auto__.call(null);
(statearr_21113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_21113;
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
return (function (state_21195){
var state_val_21196 = (state_21195[(1)]);
if((state_val_21196 === (7))){
var inst_21177 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21197_21220 = state_21195__$1;
(statearr_21197_21220[(2)] = inst_21177);

(statearr_21197_21220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (1))){
var inst_21171 = cljs.core.seq.call(null,coll);
var inst_21172 = inst_21171;
var state_21195__$1 = (function (){var statearr_21198 = state_21195;
(statearr_21198[(7)] = inst_21172);

return statearr_21198;
})();
var statearr_21199_21221 = state_21195__$1;
(statearr_21199_21221[(2)] = null);

(statearr_21199_21221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (4))){
var inst_21172 = (state_21195[(7)]);
var inst_21175 = cljs.core.first.call(null,inst_21172);
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21195__$1,(7),ch,inst_21175);
} else {
if((state_val_21196 === (13))){
var inst_21189 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21200_21222 = state_21195__$1;
(statearr_21200_21222[(2)] = inst_21189);

(statearr_21200_21222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (6))){
var inst_21180 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21180)){
var statearr_21201_21223 = state_21195__$1;
(statearr_21201_21223[(1)] = (8));

} else {
var statearr_21202_21224 = state_21195__$1;
(statearr_21202_21224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (3))){
var inst_21193 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21195__$1,inst_21193);
} else {
if((state_val_21196 === (12))){
var state_21195__$1 = state_21195;
var statearr_21203_21225 = state_21195__$1;
(statearr_21203_21225[(2)] = null);

(statearr_21203_21225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (2))){
var inst_21172 = (state_21195[(7)]);
var state_21195__$1 = state_21195;
if(cljs.core.truth_(inst_21172)){
var statearr_21204_21226 = state_21195__$1;
(statearr_21204_21226[(1)] = (4));

} else {
var statearr_21205_21227 = state_21195__$1;
(statearr_21205_21227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (11))){
var inst_21186 = cljs.core.async.close_BANG_.call(null,ch);
var state_21195__$1 = state_21195;
var statearr_21206_21228 = state_21195__$1;
(statearr_21206_21228[(2)] = inst_21186);

(statearr_21206_21228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (9))){
var state_21195__$1 = state_21195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21207_21229 = state_21195__$1;
(statearr_21207_21229[(1)] = (11));

} else {
var statearr_21208_21230 = state_21195__$1;
(statearr_21208_21230[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (5))){
var inst_21172 = (state_21195[(7)]);
var state_21195__$1 = state_21195;
var statearr_21209_21231 = state_21195__$1;
(statearr_21209_21231[(2)] = inst_21172);

(statearr_21209_21231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (10))){
var inst_21191 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21210_21232 = state_21195__$1;
(statearr_21210_21232[(2)] = inst_21191);

(statearr_21210_21232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21196 === (8))){
var inst_21172 = (state_21195[(7)]);
var inst_21182 = cljs.core.next.call(null,inst_21172);
var inst_21172__$1 = inst_21182;
var state_21195__$1 = (function (){var statearr_21211 = state_21195;
(statearr_21211[(7)] = inst_21172__$1);

return statearr_21211;
})();
var statearr_21212_21233 = state_21195__$1;
(statearr_21212_21233[(2)] = null);

(statearr_21212_21233[(1)] = (2));


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
var statearr_21216 = [null,null,null,null,null,null,null,null];
(statearr_21216[(0)] = state_machine__5855__auto__);

(statearr_21216[(1)] = (1));

return statearr_21216;
});
var state_machine__5855__auto____1 = (function (state_21195){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_21195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e21217){if((e21217 instanceof Object)){
var ex__5858__auto__ = e21217;
var statearr_21218_21234 = state_21195;
(statearr_21218_21234[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21235 = state_21195;
state_21195 = G__21235;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_21195){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_21195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_21219 = f__5870__auto__.call(null);
(statearr_21219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_21219;
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

cljs.core.async.Mux = (function (){var obj21237 = {};
return obj21237;
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


cljs.core.async.Mult = (function (){var obj21239 = {};
return obj21239;
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
if(typeof cljs.core.async.t21461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21461 = (function (cs,ch,mult,meta21462){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21462 = meta21462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21461.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21463){
var self__ = this;
var _21463__$1 = this;
return self__.meta21462;
});})(cs))
;

cljs.core.async.t21461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21463,meta21462__$1){
var self__ = this;
var _21463__$1 = this;
return (new cljs.core.async.t21461(self__.cs,self__.ch,self__.mult,meta21462__$1));
});})(cs))
;

cljs.core.async.t21461.cljs$lang$type = true;

cljs.core.async.t21461.cljs$lang$ctorStr = "cljs.core.async/t21461";

cljs.core.async.t21461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21461");
});})(cs))
;

cljs.core.async.__GT_t21461 = ((function (cs){
return (function __GT_t21461(cs__$1,ch__$1,mult__$1,meta21462){
return (new cljs.core.async.t21461(cs__$1,ch__$1,mult__$1,meta21462));
});})(cs))
;

}

return (new cljs.core.async.t21461(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___21682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___21682,cs,m,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___21682,cs,m,dchan,dctr,done){
return (function (state_21594){
var state_val_21595 = (state_21594[(1)]);
if((state_val_21595 === (7))){
var inst_21590 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21596_21683 = state_21594__$1;
(statearr_21596_21683[(2)] = inst_21590);

(statearr_21596_21683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (20))){
var inst_21495 = (state_21594[(7)]);
var inst_21505 = cljs.core.first.call(null,inst_21495);
var inst_21506 = cljs.core.nth.call(null,inst_21505,(0),null);
var inst_21507 = cljs.core.nth.call(null,inst_21505,(1),null);
var state_21594__$1 = (function (){var statearr_21597 = state_21594;
(statearr_21597[(8)] = inst_21506);

return statearr_21597;
})();
if(cljs.core.truth_(inst_21507)){
var statearr_21598_21684 = state_21594__$1;
(statearr_21598_21684[(1)] = (22));

} else {
var statearr_21599_21685 = state_21594__$1;
(statearr_21599_21685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (27))){
var inst_21542 = (state_21594[(9)]);
var inst_21537 = (state_21594[(10)]);
var inst_21535 = (state_21594[(11)]);
var inst_21466 = (state_21594[(12)]);
var inst_21542__$1 = cljs.core._nth.call(null,inst_21535,inst_21537);
var inst_21543 = cljs.core.async.put_BANG_.call(null,inst_21542__$1,inst_21466,done);
var state_21594__$1 = (function (){var statearr_21600 = state_21594;
(statearr_21600[(9)] = inst_21542__$1);

return statearr_21600;
})();
if(cljs.core.truth_(inst_21543)){
var statearr_21601_21686 = state_21594__$1;
(statearr_21601_21686[(1)] = (30));

} else {
var statearr_21602_21687 = state_21594__$1;
(statearr_21602_21687[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (1))){
var state_21594__$1 = state_21594;
var statearr_21603_21688 = state_21594__$1;
(statearr_21603_21688[(2)] = null);

(statearr_21603_21688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (24))){
var inst_21495 = (state_21594[(7)]);
var inst_21512 = (state_21594[(2)]);
var inst_21513 = cljs.core.next.call(null,inst_21495);
var inst_21475 = inst_21513;
var inst_21476 = null;
var inst_21477 = (0);
var inst_21478 = (0);
var state_21594__$1 = (function (){var statearr_21604 = state_21594;
(statearr_21604[(13)] = inst_21475);

(statearr_21604[(14)] = inst_21476);

(statearr_21604[(15)] = inst_21512);

(statearr_21604[(16)] = inst_21477);

(statearr_21604[(17)] = inst_21478);

return statearr_21604;
})();
var statearr_21605_21689 = state_21594__$1;
(statearr_21605_21689[(2)] = null);

(statearr_21605_21689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (39))){
var state_21594__$1 = state_21594;
var statearr_21609_21690 = state_21594__$1;
(statearr_21609_21690[(2)] = null);

(statearr_21609_21690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (4))){
var inst_21466 = (state_21594[(12)]);
var inst_21466__$1 = (state_21594[(2)]);
var inst_21467 = (inst_21466__$1 == null);
var state_21594__$1 = (function (){var statearr_21610 = state_21594;
(statearr_21610[(12)] = inst_21466__$1);

return statearr_21610;
})();
if(cljs.core.truth_(inst_21467)){
var statearr_21611_21691 = state_21594__$1;
(statearr_21611_21691[(1)] = (5));

} else {
var statearr_21612_21692 = state_21594__$1;
(statearr_21612_21692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (15))){
var inst_21475 = (state_21594[(13)]);
var inst_21476 = (state_21594[(14)]);
var inst_21477 = (state_21594[(16)]);
var inst_21478 = (state_21594[(17)]);
var inst_21491 = (state_21594[(2)]);
var inst_21492 = (inst_21478 + (1));
var tmp21606 = inst_21475;
var tmp21607 = inst_21476;
var tmp21608 = inst_21477;
var inst_21475__$1 = tmp21606;
var inst_21476__$1 = tmp21607;
var inst_21477__$1 = tmp21608;
var inst_21478__$1 = inst_21492;
var state_21594__$1 = (function (){var statearr_21613 = state_21594;
(statearr_21613[(13)] = inst_21475__$1);

(statearr_21613[(14)] = inst_21476__$1);

(statearr_21613[(18)] = inst_21491);

(statearr_21613[(16)] = inst_21477__$1);

(statearr_21613[(17)] = inst_21478__$1);

return statearr_21613;
})();
var statearr_21614_21693 = state_21594__$1;
(statearr_21614_21693[(2)] = null);

(statearr_21614_21693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (21))){
var inst_21516 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21618_21694 = state_21594__$1;
(statearr_21618_21694[(2)] = inst_21516);

(statearr_21618_21694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (31))){
var inst_21542 = (state_21594[(9)]);
var inst_21546 = done.call(null,null);
var inst_21547 = cljs.core.async.untap_STAR_.call(null,m,inst_21542);
var state_21594__$1 = (function (){var statearr_21619 = state_21594;
(statearr_21619[(19)] = inst_21546);

return statearr_21619;
})();
var statearr_21620_21695 = state_21594__$1;
(statearr_21620_21695[(2)] = inst_21547);

(statearr_21620_21695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (32))){
var inst_21537 = (state_21594[(10)]);
var inst_21536 = (state_21594[(20)]);
var inst_21535 = (state_21594[(11)]);
var inst_21534 = (state_21594[(21)]);
var inst_21549 = (state_21594[(2)]);
var inst_21550 = (inst_21537 + (1));
var tmp21615 = inst_21536;
var tmp21616 = inst_21535;
var tmp21617 = inst_21534;
var inst_21534__$1 = tmp21617;
var inst_21535__$1 = tmp21616;
var inst_21536__$1 = tmp21615;
var inst_21537__$1 = inst_21550;
var state_21594__$1 = (function (){var statearr_21621 = state_21594;
(statearr_21621[(10)] = inst_21537__$1);

(statearr_21621[(20)] = inst_21536__$1);

(statearr_21621[(11)] = inst_21535__$1);

(statearr_21621[(21)] = inst_21534__$1);

(statearr_21621[(22)] = inst_21549);

return statearr_21621;
})();
var statearr_21622_21696 = state_21594__$1;
(statearr_21622_21696[(2)] = null);

(statearr_21622_21696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (40))){
var inst_21562 = (state_21594[(23)]);
var inst_21566 = done.call(null,null);
var inst_21567 = cljs.core.async.untap_STAR_.call(null,m,inst_21562);
var state_21594__$1 = (function (){var statearr_21623 = state_21594;
(statearr_21623[(24)] = inst_21566);

return statearr_21623;
})();
var statearr_21624_21697 = state_21594__$1;
(statearr_21624_21697[(2)] = inst_21567);

(statearr_21624_21697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (33))){
var inst_21553 = (state_21594[(25)]);
var inst_21555 = cljs.core.chunked_seq_QMARK_.call(null,inst_21553);
var state_21594__$1 = state_21594;
if(inst_21555){
var statearr_21625_21698 = state_21594__$1;
(statearr_21625_21698[(1)] = (36));

} else {
var statearr_21626_21699 = state_21594__$1;
(statearr_21626_21699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (13))){
var inst_21485 = (state_21594[(26)]);
var inst_21488 = cljs.core.async.close_BANG_.call(null,inst_21485);
var state_21594__$1 = state_21594;
var statearr_21627_21700 = state_21594__$1;
(statearr_21627_21700[(2)] = inst_21488);

(statearr_21627_21700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (22))){
var inst_21506 = (state_21594[(8)]);
var inst_21509 = cljs.core.async.close_BANG_.call(null,inst_21506);
var state_21594__$1 = state_21594;
var statearr_21628_21701 = state_21594__$1;
(statearr_21628_21701[(2)] = inst_21509);

(statearr_21628_21701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (36))){
var inst_21553 = (state_21594[(25)]);
var inst_21557 = cljs.core.chunk_first.call(null,inst_21553);
var inst_21558 = cljs.core.chunk_rest.call(null,inst_21553);
var inst_21559 = cljs.core.count.call(null,inst_21557);
var inst_21534 = inst_21558;
var inst_21535 = inst_21557;
var inst_21536 = inst_21559;
var inst_21537 = (0);
var state_21594__$1 = (function (){var statearr_21629 = state_21594;
(statearr_21629[(10)] = inst_21537);

(statearr_21629[(20)] = inst_21536);

(statearr_21629[(11)] = inst_21535);

(statearr_21629[(21)] = inst_21534);

return statearr_21629;
})();
var statearr_21630_21702 = state_21594__$1;
(statearr_21630_21702[(2)] = null);

(statearr_21630_21702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (41))){
var inst_21553 = (state_21594[(25)]);
var inst_21569 = (state_21594[(2)]);
var inst_21570 = cljs.core.next.call(null,inst_21553);
var inst_21534 = inst_21570;
var inst_21535 = null;
var inst_21536 = (0);
var inst_21537 = (0);
var state_21594__$1 = (function (){var statearr_21631 = state_21594;
(statearr_21631[(27)] = inst_21569);

(statearr_21631[(10)] = inst_21537);

(statearr_21631[(20)] = inst_21536);

(statearr_21631[(11)] = inst_21535);

(statearr_21631[(21)] = inst_21534);

return statearr_21631;
})();
var statearr_21632_21703 = state_21594__$1;
(statearr_21632_21703[(2)] = null);

(statearr_21632_21703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (43))){
var state_21594__$1 = state_21594;
var statearr_21633_21704 = state_21594__$1;
(statearr_21633_21704[(2)] = null);

(statearr_21633_21704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (29))){
var inst_21578 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21634_21705 = state_21594__$1;
(statearr_21634_21705[(2)] = inst_21578);

(statearr_21634_21705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (44))){
var inst_21587 = (state_21594[(2)]);
var state_21594__$1 = (function (){var statearr_21635 = state_21594;
(statearr_21635[(28)] = inst_21587);

return statearr_21635;
})();
var statearr_21636_21706 = state_21594__$1;
(statearr_21636_21706[(2)] = null);

(statearr_21636_21706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (6))){
var inst_21526 = (state_21594[(29)]);
var inst_21525 = cljs.core.deref.call(null,cs);
var inst_21526__$1 = cljs.core.keys.call(null,inst_21525);
var inst_21527 = cljs.core.count.call(null,inst_21526__$1);
var inst_21528 = cljs.core.reset_BANG_.call(null,dctr,inst_21527);
var inst_21533 = cljs.core.seq.call(null,inst_21526__$1);
var inst_21534 = inst_21533;
var inst_21535 = null;
var inst_21536 = (0);
var inst_21537 = (0);
var state_21594__$1 = (function (){var statearr_21637 = state_21594;
(statearr_21637[(10)] = inst_21537);

(statearr_21637[(20)] = inst_21536);

(statearr_21637[(11)] = inst_21535);

(statearr_21637[(30)] = inst_21528);

(statearr_21637[(21)] = inst_21534);

(statearr_21637[(29)] = inst_21526__$1);

return statearr_21637;
})();
var statearr_21638_21707 = state_21594__$1;
(statearr_21638_21707[(2)] = null);

(statearr_21638_21707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (28))){
var inst_21553 = (state_21594[(25)]);
var inst_21534 = (state_21594[(21)]);
var inst_21553__$1 = cljs.core.seq.call(null,inst_21534);
var state_21594__$1 = (function (){var statearr_21639 = state_21594;
(statearr_21639[(25)] = inst_21553__$1);

return statearr_21639;
})();
if(inst_21553__$1){
var statearr_21640_21708 = state_21594__$1;
(statearr_21640_21708[(1)] = (33));

} else {
var statearr_21641_21709 = state_21594__$1;
(statearr_21641_21709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (25))){
var inst_21537 = (state_21594[(10)]);
var inst_21536 = (state_21594[(20)]);
var inst_21539 = (inst_21537 < inst_21536);
var inst_21540 = inst_21539;
var state_21594__$1 = state_21594;
if(cljs.core.truth_(inst_21540)){
var statearr_21642_21710 = state_21594__$1;
(statearr_21642_21710[(1)] = (27));

} else {
var statearr_21643_21711 = state_21594__$1;
(statearr_21643_21711[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (34))){
var state_21594__$1 = state_21594;
var statearr_21644_21712 = state_21594__$1;
(statearr_21644_21712[(2)] = null);

(statearr_21644_21712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (17))){
var state_21594__$1 = state_21594;
var statearr_21645_21713 = state_21594__$1;
(statearr_21645_21713[(2)] = null);

(statearr_21645_21713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (3))){
var inst_21592 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21594__$1,inst_21592);
} else {
if((state_val_21595 === (12))){
var inst_21521 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21646_21714 = state_21594__$1;
(statearr_21646_21714[(2)] = inst_21521);

(statearr_21646_21714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (2))){
var state_21594__$1 = state_21594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21594__$1,(4),ch);
} else {
if((state_val_21595 === (23))){
var state_21594__$1 = state_21594;
var statearr_21647_21715 = state_21594__$1;
(statearr_21647_21715[(2)] = null);

(statearr_21647_21715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (35))){
var inst_21576 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21648_21716 = state_21594__$1;
(statearr_21648_21716[(2)] = inst_21576);

(statearr_21648_21716[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (19))){
var inst_21495 = (state_21594[(7)]);
var inst_21499 = cljs.core.chunk_first.call(null,inst_21495);
var inst_21500 = cljs.core.chunk_rest.call(null,inst_21495);
var inst_21501 = cljs.core.count.call(null,inst_21499);
var inst_21475 = inst_21500;
var inst_21476 = inst_21499;
var inst_21477 = inst_21501;
var inst_21478 = (0);
var state_21594__$1 = (function (){var statearr_21649 = state_21594;
(statearr_21649[(13)] = inst_21475);

(statearr_21649[(14)] = inst_21476);

(statearr_21649[(16)] = inst_21477);

(statearr_21649[(17)] = inst_21478);

return statearr_21649;
})();
var statearr_21650_21717 = state_21594__$1;
(statearr_21650_21717[(2)] = null);

(statearr_21650_21717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (11))){
var inst_21475 = (state_21594[(13)]);
var inst_21495 = (state_21594[(7)]);
var inst_21495__$1 = cljs.core.seq.call(null,inst_21475);
var state_21594__$1 = (function (){var statearr_21651 = state_21594;
(statearr_21651[(7)] = inst_21495__$1);

return statearr_21651;
})();
if(inst_21495__$1){
var statearr_21652_21718 = state_21594__$1;
(statearr_21652_21718[(1)] = (16));

} else {
var statearr_21653_21719 = state_21594__$1;
(statearr_21653_21719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (9))){
var inst_21523 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21654_21720 = state_21594__$1;
(statearr_21654_21720[(2)] = inst_21523);

(statearr_21654_21720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (5))){
var inst_21473 = cljs.core.deref.call(null,cs);
var inst_21474 = cljs.core.seq.call(null,inst_21473);
var inst_21475 = inst_21474;
var inst_21476 = null;
var inst_21477 = (0);
var inst_21478 = (0);
var state_21594__$1 = (function (){var statearr_21655 = state_21594;
(statearr_21655[(13)] = inst_21475);

(statearr_21655[(14)] = inst_21476);

(statearr_21655[(16)] = inst_21477);

(statearr_21655[(17)] = inst_21478);

return statearr_21655;
})();
var statearr_21656_21721 = state_21594__$1;
(statearr_21656_21721[(2)] = null);

(statearr_21656_21721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (14))){
var state_21594__$1 = state_21594;
var statearr_21657_21722 = state_21594__$1;
(statearr_21657_21722[(2)] = null);

(statearr_21657_21722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (45))){
var inst_21584 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21658_21723 = state_21594__$1;
(statearr_21658_21723[(2)] = inst_21584);

(statearr_21658_21723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (26))){
var inst_21526 = (state_21594[(29)]);
var inst_21580 = (state_21594[(2)]);
var inst_21581 = cljs.core.seq.call(null,inst_21526);
var state_21594__$1 = (function (){var statearr_21659 = state_21594;
(statearr_21659[(31)] = inst_21580);

return statearr_21659;
})();
if(inst_21581){
var statearr_21660_21724 = state_21594__$1;
(statearr_21660_21724[(1)] = (42));

} else {
var statearr_21661_21725 = state_21594__$1;
(statearr_21661_21725[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (16))){
var inst_21495 = (state_21594[(7)]);
var inst_21497 = cljs.core.chunked_seq_QMARK_.call(null,inst_21495);
var state_21594__$1 = state_21594;
if(inst_21497){
var statearr_21662_21726 = state_21594__$1;
(statearr_21662_21726[(1)] = (19));

} else {
var statearr_21663_21727 = state_21594__$1;
(statearr_21663_21727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (38))){
var inst_21573 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21664_21728 = state_21594__$1;
(statearr_21664_21728[(2)] = inst_21573);

(statearr_21664_21728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (30))){
var state_21594__$1 = state_21594;
var statearr_21665_21729 = state_21594__$1;
(statearr_21665_21729[(2)] = null);

(statearr_21665_21729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (10))){
var inst_21476 = (state_21594[(14)]);
var inst_21478 = (state_21594[(17)]);
var inst_21484 = cljs.core._nth.call(null,inst_21476,inst_21478);
var inst_21485 = cljs.core.nth.call(null,inst_21484,(0),null);
var inst_21486 = cljs.core.nth.call(null,inst_21484,(1),null);
var state_21594__$1 = (function (){var statearr_21666 = state_21594;
(statearr_21666[(26)] = inst_21485);

return statearr_21666;
})();
if(cljs.core.truth_(inst_21486)){
var statearr_21667_21730 = state_21594__$1;
(statearr_21667_21730[(1)] = (13));

} else {
var statearr_21668_21731 = state_21594__$1;
(statearr_21668_21731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (18))){
var inst_21519 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21669_21732 = state_21594__$1;
(statearr_21669_21732[(2)] = inst_21519);

(statearr_21669_21732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (42))){
var state_21594__$1 = state_21594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21594__$1,(45),dchan);
} else {
if((state_val_21595 === (37))){
var inst_21562 = (state_21594[(23)]);
var inst_21553 = (state_21594[(25)]);
var inst_21466 = (state_21594[(12)]);
var inst_21562__$1 = cljs.core.first.call(null,inst_21553);
var inst_21563 = cljs.core.async.put_BANG_.call(null,inst_21562__$1,inst_21466,done);
var state_21594__$1 = (function (){var statearr_21670 = state_21594;
(statearr_21670[(23)] = inst_21562__$1);

return statearr_21670;
})();
if(cljs.core.truth_(inst_21563)){
var statearr_21671_21733 = state_21594__$1;
(statearr_21671_21733[(1)] = (39));

} else {
var statearr_21672_21734 = state_21594__$1;
(statearr_21672_21734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (8))){
var inst_21477 = (state_21594[(16)]);
var inst_21478 = (state_21594[(17)]);
var inst_21480 = (inst_21478 < inst_21477);
var inst_21481 = inst_21480;
var state_21594__$1 = state_21594;
if(cljs.core.truth_(inst_21481)){
var statearr_21673_21735 = state_21594__$1;
(statearr_21673_21735[(1)] = (10));

} else {
var statearr_21674_21736 = state_21594__$1;
(statearr_21674_21736[(1)] = (11));

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
});})(c__5869__auto___21682,cs,m,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___21682,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_21678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21678[(0)] = state_machine__5855__auto__);

(statearr_21678[(1)] = (1));

return statearr_21678;
});
var state_machine__5855__auto____1 = (function (state_21594){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_21594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e21679){if((e21679 instanceof Object)){
var ex__5858__auto__ = e21679;
var statearr_21680_21737 = state_21594;
(statearr_21680_21737[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21738 = state_21594;
state_21594 = G__21738;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_21594){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_21594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___21682,cs,m,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_21681 = f__5870__auto__.call(null);
(statearr_21681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___21682);

return statearr_21681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___21682,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21740 = {};
return obj21740;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21741){
var map__21746 = p__21741;
var map__21746__$1 = ((cljs.core.seq_QMARK_.call(null,map__21746))?cljs.core.apply.call(null,cljs.core.hash_map,map__21746):map__21746);
var opts = map__21746__$1;
var statearr_21747_21750 = state;
(statearr_21747_21750[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21746,map__21746__$1,opts){
return (function (val){
var statearr_21748_21751 = state;
(statearr_21748_21751[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21746,map__21746__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21749_21752 = state;
(statearr_21749_21752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21741 = null;
if (arguments.length > 3) {
  p__21741 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21741);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21753){
var state = cljs.core.first(arglist__21753);
arglist__21753 = cljs.core.next(arglist__21753);
var cont_block = cljs.core.first(arglist__21753);
arglist__21753 = cljs.core.next(arglist__21753);
var ports = cljs.core.first(arglist__21753);
var p__21741 = cljs.core.rest(arglist__21753);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21741);
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
if(typeof cljs.core.async.t21873 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21873 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21874){
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
this.meta21874 = meta21874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21873.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21873.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21873.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21875){
var self__ = this;
var _21875__$1 = this;
return self__.meta21874;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21875,meta21874__$1){
var self__ = this;
var _21875__$1 = this;
return (new cljs.core.async.t21873(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21874__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21873.cljs$lang$type = true;

cljs.core.async.t21873.cljs$lang$ctorStr = "cljs.core.async/t21873";

cljs.core.async.t21873.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21873");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21873 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21873(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21874){
return (new cljs.core.async.t21873(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21874));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21873(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___21992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21945){
var state_val_21946 = (state_21945[(1)]);
if((state_val_21946 === (7))){
var inst_21889 = (state_21945[(7)]);
var inst_21894 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21889);
var state_21945__$1 = state_21945;
var statearr_21947_21993 = state_21945__$1;
(statearr_21947_21993[(2)] = inst_21894);

(statearr_21947_21993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (20))){
var inst_21904 = (state_21945[(8)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21945__$1,(23),out,inst_21904);
} else {
if((state_val_21946 === (1))){
var inst_21879 = (state_21945[(9)]);
var inst_21879__$1 = calc_state.call(null);
var inst_21880 = cljs.core.seq_QMARK_.call(null,inst_21879__$1);
var state_21945__$1 = (function (){var statearr_21948 = state_21945;
(statearr_21948[(9)] = inst_21879__$1);

return statearr_21948;
})();
if(inst_21880){
var statearr_21949_21994 = state_21945__$1;
(statearr_21949_21994[(1)] = (2));

} else {
var statearr_21950_21995 = state_21945__$1;
(statearr_21950_21995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (24))){
var inst_21897 = (state_21945[(10)]);
var inst_21889 = inst_21897;
var state_21945__$1 = (function (){var statearr_21951 = state_21945;
(statearr_21951[(7)] = inst_21889);

return statearr_21951;
})();
var statearr_21952_21996 = state_21945__$1;
(statearr_21952_21996[(2)] = null);

(statearr_21952_21996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (4))){
var inst_21879 = (state_21945[(9)]);
var inst_21885 = (state_21945[(2)]);
var inst_21886 = cljs.core.get.call(null,inst_21885,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21887 = cljs.core.get.call(null,inst_21885,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21888 = cljs.core.get.call(null,inst_21885,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21889 = inst_21879;
var state_21945__$1 = (function (){var statearr_21953 = state_21945;
(statearr_21953[(11)] = inst_21886);

(statearr_21953[(12)] = inst_21888);

(statearr_21953[(7)] = inst_21889);

(statearr_21953[(13)] = inst_21887);

return statearr_21953;
})();
var statearr_21954_21997 = state_21945__$1;
(statearr_21954_21997[(2)] = null);

(statearr_21954_21997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (15))){
var state_21945__$1 = state_21945;
var statearr_21955_21998 = state_21945__$1;
(statearr_21955_21998[(2)] = null);

(statearr_21955_21998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (21))){
var inst_21897 = (state_21945[(10)]);
var inst_21889 = inst_21897;
var state_21945__$1 = (function (){var statearr_21956 = state_21945;
(statearr_21956[(7)] = inst_21889);

return statearr_21956;
})();
var statearr_21957_21999 = state_21945__$1;
(statearr_21957_21999[(2)] = null);

(statearr_21957_21999[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (13))){
var inst_21941 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21958_22000 = state_21945__$1;
(statearr_21958_22000[(2)] = inst_21941);

(statearr_21958_22000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (22))){
var inst_21939 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21959_22001 = state_21945__$1;
(statearr_21959_22001[(2)] = inst_21939);

(statearr_21959_22001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (6))){
var inst_21943 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21945__$1,inst_21943);
} else {
if((state_val_21946 === (25))){
var state_21945__$1 = state_21945;
var statearr_21960_22002 = state_21945__$1;
(statearr_21960_22002[(2)] = null);

(statearr_21960_22002[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (17))){
var inst_21919 = (state_21945[(14)]);
var state_21945__$1 = state_21945;
var statearr_21961_22003 = state_21945__$1;
(statearr_21961_22003[(2)] = inst_21919);

(statearr_21961_22003[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (3))){
var inst_21879 = (state_21945[(9)]);
var state_21945__$1 = state_21945;
var statearr_21962_22004 = state_21945__$1;
(statearr_21962_22004[(2)] = inst_21879);

(statearr_21962_22004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (12))){
var inst_21900 = (state_21945[(15)]);
var inst_21919 = (state_21945[(14)]);
var inst_21905 = (state_21945[(16)]);
var inst_21919__$1 = inst_21900.call(null,inst_21905);
var state_21945__$1 = (function (){var statearr_21963 = state_21945;
(statearr_21963[(14)] = inst_21919__$1);

return statearr_21963;
})();
if(cljs.core.truth_(inst_21919__$1)){
var statearr_21964_22005 = state_21945__$1;
(statearr_21964_22005[(1)] = (17));

} else {
var statearr_21965_22006 = state_21945__$1;
(statearr_21965_22006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (2))){
var inst_21879 = (state_21945[(9)]);
var inst_21882 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21879);
var state_21945__$1 = state_21945;
var statearr_21966_22007 = state_21945__$1;
(statearr_21966_22007[(2)] = inst_21882);

(statearr_21966_22007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (23))){
var inst_21930 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
if(cljs.core.truth_(inst_21930)){
var statearr_21967_22008 = state_21945__$1;
(statearr_21967_22008[(1)] = (24));

} else {
var statearr_21968_22009 = state_21945__$1;
(statearr_21968_22009[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (19))){
var inst_21927 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
if(cljs.core.truth_(inst_21927)){
var statearr_21969_22010 = state_21945__$1;
(statearr_21969_22010[(1)] = (20));

} else {
var statearr_21970_22011 = state_21945__$1;
(statearr_21970_22011[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (11))){
var inst_21904 = (state_21945[(8)]);
var inst_21910 = (inst_21904 == null);
var state_21945__$1 = state_21945;
if(cljs.core.truth_(inst_21910)){
var statearr_21971_22012 = state_21945__$1;
(statearr_21971_22012[(1)] = (14));

} else {
var statearr_21972_22013 = state_21945__$1;
(statearr_21972_22013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (9))){
var inst_21897 = (state_21945[(10)]);
var inst_21897__$1 = (state_21945[(2)]);
var inst_21898 = cljs.core.get.call(null,inst_21897__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21899 = cljs.core.get.call(null,inst_21897__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21900 = cljs.core.get.call(null,inst_21897__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21945__$1 = (function (){var statearr_21973 = state_21945;
(statearr_21973[(15)] = inst_21900);

(statearr_21973[(10)] = inst_21897__$1);

(statearr_21973[(17)] = inst_21899);

return statearr_21973;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21945__$1,(10),inst_21898);
} else {
if((state_val_21946 === (5))){
var inst_21889 = (state_21945[(7)]);
var inst_21892 = cljs.core.seq_QMARK_.call(null,inst_21889);
var state_21945__$1 = state_21945;
if(inst_21892){
var statearr_21974_22014 = state_21945__$1;
(statearr_21974_22014[(1)] = (7));

} else {
var statearr_21975_22015 = state_21945__$1;
(statearr_21975_22015[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (14))){
var inst_21905 = (state_21945[(16)]);
var inst_21912 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21905);
var state_21945__$1 = state_21945;
var statearr_21976_22016 = state_21945__$1;
(statearr_21976_22016[(2)] = inst_21912);

(statearr_21976_22016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (26))){
var inst_21935 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21977_22017 = state_21945__$1;
(statearr_21977_22017[(2)] = inst_21935);

(statearr_21977_22017[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (16))){
var inst_21915 = (state_21945[(2)]);
var inst_21916 = calc_state.call(null);
var inst_21889 = inst_21916;
var state_21945__$1 = (function (){var statearr_21978 = state_21945;
(statearr_21978[(18)] = inst_21915);

(statearr_21978[(7)] = inst_21889);

return statearr_21978;
})();
var statearr_21979_22018 = state_21945__$1;
(statearr_21979_22018[(2)] = null);

(statearr_21979_22018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (10))){
var inst_21904 = (state_21945[(8)]);
var inst_21905 = (state_21945[(16)]);
var inst_21903 = (state_21945[(2)]);
var inst_21904__$1 = cljs.core.nth.call(null,inst_21903,(0),null);
var inst_21905__$1 = cljs.core.nth.call(null,inst_21903,(1),null);
var inst_21906 = (inst_21904__$1 == null);
var inst_21907 = cljs.core._EQ_.call(null,inst_21905__$1,change);
var inst_21908 = (inst_21906) || (inst_21907);
var state_21945__$1 = (function (){var statearr_21980 = state_21945;
(statearr_21980[(8)] = inst_21904__$1);

(statearr_21980[(16)] = inst_21905__$1);

return statearr_21980;
})();
if(cljs.core.truth_(inst_21908)){
var statearr_21981_22019 = state_21945__$1;
(statearr_21981_22019[(1)] = (11));

} else {
var statearr_21982_22020 = state_21945__$1;
(statearr_21982_22020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (18))){
var inst_21900 = (state_21945[(15)]);
var inst_21905 = (state_21945[(16)]);
var inst_21899 = (state_21945[(17)]);
var inst_21922 = cljs.core.empty_QMARK_.call(null,inst_21900);
var inst_21923 = inst_21899.call(null,inst_21905);
var inst_21924 = cljs.core.not.call(null,inst_21923);
var inst_21925 = (inst_21922) && (inst_21924);
var state_21945__$1 = state_21945;
var statearr_21983_22021 = state_21945__$1;
(statearr_21983_22021[(2)] = inst_21925);

(statearr_21983_22021[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (8))){
var inst_21889 = (state_21945[(7)]);
var state_21945__$1 = state_21945;
var statearr_21984_22022 = state_21945__$1;
(statearr_21984_22022[(2)] = inst_21889);

(statearr_21984_22022[(1)] = (9));


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
});})(c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5854__auto__,c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_21988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21988[(0)] = state_machine__5855__auto__);

(statearr_21988[(1)] = (1));

return statearr_21988;
});
var state_machine__5855__auto____1 = (function (state_21945){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_21945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e21989){if((e21989 instanceof Object)){
var ex__5858__auto__ = e21989;
var statearr_21990_22023 = state_21945;
(statearr_21990_22023[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22024 = state_21945;
state_21945 = G__22024;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_21945){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_21945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5871__auto__ = (function (){var statearr_21991 = f__5870__auto__.call(null);
(statearr_21991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___21992);

return statearr_21991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___21992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22026 = {};
return obj22026;
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
return (function (p1__22027_SHARP_){
if(cljs.core.truth_(p1__22027_SHARP_.call(null,topic))){
return p1__22027_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22027_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22150 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22151){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22151 = meta22151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22150.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22150.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22152){
var self__ = this;
var _22152__$1 = this;
return self__.meta22151;
});})(mults,ensure_mult))
;

cljs.core.async.t22150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22152,meta22151__$1){
var self__ = this;
var _22152__$1 = this;
return (new cljs.core.async.t22150(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22151__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22150.cljs$lang$type = true;

cljs.core.async.t22150.cljs$lang$ctorStr = "cljs.core.async/t22150";

cljs.core.async.t22150.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t22150");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22150 = ((function (mults,ensure_mult){
return (function __GT_t22150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22151){
return (new cljs.core.async.t22150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22151));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22150(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___22272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___22272,mults,ensure_mult,p){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___22272,mults,ensure_mult,p){
return (function (state_22224){
var state_val_22225 = (state_22224[(1)]);
if((state_val_22225 === (7))){
var inst_22220 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22226_22273 = state_22224__$1;
(statearr_22226_22273[(2)] = inst_22220);

(statearr_22226_22273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (20))){
var state_22224__$1 = state_22224;
var statearr_22227_22274 = state_22224__$1;
(statearr_22227_22274[(2)] = null);

(statearr_22227_22274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (1))){
var state_22224__$1 = state_22224;
var statearr_22228_22275 = state_22224__$1;
(statearr_22228_22275[(2)] = null);

(statearr_22228_22275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (24))){
var inst_22203 = (state_22224[(7)]);
var inst_22212 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22203);
var state_22224__$1 = state_22224;
var statearr_22229_22276 = state_22224__$1;
(statearr_22229_22276[(2)] = inst_22212);

(statearr_22229_22276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (4))){
var inst_22155 = (state_22224[(8)]);
var inst_22155__$1 = (state_22224[(2)]);
var inst_22156 = (inst_22155__$1 == null);
var state_22224__$1 = (function (){var statearr_22230 = state_22224;
(statearr_22230[(8)] = inst_22155__$1);

return statearr_22230;
})();
if(cljs.core.truth_(inst_22156)){
var statearr_22231_22277 = state_22224__$1;
(statearr_22231_22277[(1)] = (5));

} else {
var statearr_22232_22278 = state_22224__$1;
(statearr_22232_22278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (15))){
var inst_22197 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22233_22279 = state_22224__$1;
(statearr_22233_22279[(2)] = inst_22197);

(statearr_22233_22279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (21))){
var inst_22217 = (state_22224[(2)]);
var state_22224__$1 = (function (){var statearr_22234 = state_22224;
(statearr_22234[(9)] = inst_22217);

return statearr_22234;
})();
var statearr_22235_22280 = state_22224__$1;
(statearr_22235_22280[(2)] = null);

(statearr_22235_22280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (13))){
var inst_22179 = (state_22224[(10)]);
var inst_22181 = cljs.core.chunked_seq_QMARK_.call(null,inst_22179);
var state_22224__$1 = state_22224;
if(inst_22181){
var statearr_22236_22281 = state_22224__$1;
(statearr_22236_22281[(1)] = (16));

} else {
var statearr_22237_22282 = state_22224__$1;
(statearr_22237_22282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (22))){
var inst_22209 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
if(cljs.core.truth_(inst_22209)){
var statearr_22238_22283 = state_22224__$1;
(statearr_22238_22283[(1)] = (23));

} else {
var statearr_22239_22284 = state_22224__$1;
(statearr_22239_22284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (6))){
var inst_22203 = (state_22224[(7)]);
var inst_22155 = (state_22224[(8)]);
var inst_22205 = (state_22224[(11)]);
var inst_22203__$1 = topic_fn.call(null,inst_22155);
var inst_22204 = cljs.core.deref.call(null,mults);
var inst_22205__$1 = cljs.core.get.call(null,inst_22204,inst_22203__$1);
var state_22224__$1 = (function (){var statearr_22240 = state_22224;
(statearr_22240[(7)] = inst_22203__$1);

(statearr_22240[(11)] = inst_22205__$1);

return statearr_22240;
})();
if(cljs.core.truth_(inst_22205__$1)){
var statearr_22241_22285 = state_22224__$1;
(statearr_22241_22285[(1)] = (19));

} else {
var statearr_22242_22286 = state_22224__$1;
(statearr_22242_22286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (25))){
var inst_22214 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22243_22287 = state_22224__$1;
(statearr_22243_22287[(2)] = inst_22214);

(statearr_22243_22287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (17))){
var inst_22179 = (state_22224[(10)]);
var inst_22188 = cljs.core.first.call(null,inst_22179);
var inst_22189 = cljs.core.async.muxch_STAR_.call(null,inst_22188);
var inst_22190 = cljs.core.async.close_BANG_.call(null,inst_22189);
var inst_22191 = cljs.core.next.call(null,inst_22179);
var inst_22165 = inst_22191;
var inst_22166 = null;
var inst_22167 = (0);
var inst_22168 = (0);
var state_22224__$1 = (function (){var statearr_22244 = state_22224;
(statearr_22244[(12)] = inst_22167);

(statearr_22244[(13)] = inst_22190);

(statearr_22244[(14)] = inst_22168);

(statearr_22244[(15)] = inst_22166);

(statearr_22244[(16)] = inst_22165);

return statearr_22244;
})();
var statearr_22245_22288 = state_22224__$1;
(statearr_22245_22288[(2)] = null);

(statearr_22245_22288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (3))){
var inst_22222 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22224__$1,inst_22222);
} else {
if((state_val_22225 === (12))){
var inst_22199 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22246_22289 = state_22224__$1;
(statearr_22246_22289[(2)] = inst_22199);

(statearr_22246_22289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (2))){
var state_22224__$1 = state_22224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22224__$1,(4),ch);
} else {
if((state_val_22225 === (23))){
var state_22224__$1 = state_22224;
var statearr_22247_22290 = state_22224__$1;
(statearr_22247_22290[(2)] = null);

(statearr_22247_22290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (19))){
var inst_22155 = (state_22224[(8)]);
var inst_22205 = (state_22224[(11)]);
var inst_22207 = cljs.core.async.muxch_STAR_.call(null,inst_22205);
var state_22224__$1 = state_22224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22224__$1,(22),inst_22207,inst_22155);
} else {
if((state_val_22225 === (11))){
var inst_22179 = (state_22224[(10)]);
var inst_22165 = (state_22224[(16)]);
var inst_22179__$1 = cljs.core.seq.call(null,inst_22165);
var state_22224__$1 = (function (){var statearr_22248 = state_22224;
(statearr_22248[(10)] = inst_22179__$1);

return statearr_22248;
})();
if(inst_22179__$1){
var statearr_22249_22291 = state_22224__$1;
(statearr_22249_22291[(1)] = (13));

} else {
var statearr_22250_22292 = state_22224__$1;
(statearr_22250_22292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (9))){
var inst_22201 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22251_22293 = state_22224__$1;
(statearr_22251_22293[(2)] = inst_22201);

(statearr_22251_22293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (5))){
var inst_22162 = cljs.core.deref.call(null,mults);
var inst_22163 = cljs.core.vals.call(null,inst_22162);
var inst_22164 = cljs.core.seq.call(null,inst_22163);
var inst_22165 = inst_22164;
var inst_22166 = null;
var inst_22167 = (0);
var inst_22168 = (0);
var state_22224__$1 = (function (){var statearr_22252 = state_22224;
(statearr_22252[(12)] = inst_22167);

(statearr_22252[(14)] = inst_22168);

(statearr_22252[(15)] = inst_22166);

(statearr_22252[(16)] = inst_22165);

return statearr_22252;
})();
var statearr_22253_22294 = state_22224__$1;
(statearr_22253_22294[(2)] = null);

(statearr_22253_22294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (14))){
var state_22224__$1 = state_22224;
var statearr_22257_22295 = state_22224__$1;
(statearr_22257_22295[(2)] = null);

(statearr_22257_22295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (16))){
var inst_22179 = (state_22224[(10)]);
var inst_22183 = cljs.core.chunk_first.call(null,inst_22179);
var inst_22184 = cljs.core.chunk_rest.call(null,inst_22179);
var inst_22185 = cljs.core.count.call(null,inst_22183);
var inst_22165 = inst_22184;
var inst_22166 = inst_22183;
var inst_22167 = inst_22185;
var inst_22168 = (0);
var state_22224__$1 = (function (){var statearr_22258 = state_22224;
(statearr_22258[(12)] = inst_22167);

(statearr_22258[(14)] = inst_22168);

(statearr_22258[(15)] = inst_22166);

(statearr_22258[(16)] = inst_22165);

return statearr_22258;
})();
var statearr_22259_22296 = state_22224__$1;
(statearr_22259_22296[(2)] = null);

(statearr_22259_22296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (10))){
var inst_22167 = (state_22224[(12)]);
var inst_22168 = (state_22224[(14)]);
var inst_22166 = (state_22224[(15)]);
var inst_22165 = (state_22224[(16)]);
var inst_22173 = cljs.core._nth.call(null,inst_22166,inst_22168);
var inst_22174 = cljs.core.async.muxch_STAR_.call(null,inst_22173);
var inst_22175 = cljs.core.async.close_BANG_.call(null,inst_22174);
var inst_22176 = (inst_22168 + (1));
var tmp22254 = inst_22167;
var tmp22255 = inst_22166;
var tmp22256 = inst_22165;
var inst_22165__$1 = tmp22256;
var inst_22166__$1 = tmp22255;
var inst_22167__$1 = tmp22254;
var inst_22168__$1 = inst_22176;
var state_22224__$1 = (function (){var statearr_22260 = state_22224;
(statearr_22260[(17)] = inst_22175);

(statearr_22260[(12)] = inst_22167__$1);

(statearr_22260[(14)] = inst_22168__$1);

(statearr_22260[(15)] = inst_22166__$1);

(statearr_22260[(16)] = inst_22165__$1);

return statearr_22260;
})();
var statearr_22261_22297 = state_22224__$1;
(statearr_22261_22297[(2)] = null);

(statearr_22261_22297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (18))){
var inst_22194 = (state_22224[(2)]);
var state_22224__$1 = state_22224;
var statearr_22262_22298 = state_22224__$1;
(statearr_22262_22298[(2)] = inst_22194);

(statearr_22262_22298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22225 === (8))){
var inst_22167 = (state_22224[(12)]);
var inst_22168 = (state_22224[(14)]);
var inst_22170 = (inst_22168 < inst_22167);
var inst_22171 = inst_22170;
var state_22224__$1 = state_22224;
if(cljs.core.truth_(inst_22171)){
var statearr_22263_22299 = state_22224__$1;
(statearr_22263_22299[(1)] = (10));

} else {
var statearr_22264_22300 = state_22224__$1;
(statearr_22264_22300[(1)] = (11));

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
});})(c__5869__auto___22272,mults,ensure_mult,p))
;
return ((function (switch__5854__auto__,c__5869__auto___22272,mults,ensure_mult,p){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_22268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22268[(0)] = state_machine__5855__auto__);

(statearr_22268[(1)] = (1));

return statearr_22268;
});
var state_machine__5855__auto____1 = (function (state_22224){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e22269){if((e22269 instanceof Object)){
var ex__5858__auto__ = e22269;
var statearr_22270_22301 = state_22224;
(statearr_22270_22301[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22302 = state_22224;
state_22224 = G__22302;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22224){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___22272,mults,ensure_mult,p))
})();
var state__5871__auto__ = (function (){var statearr_22271 = f__5870__auto__.call(null);
(statearr_22271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___22272);

return statearr_22271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___22272,mults,ensure_mult,p))
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
var c__5869__auto___22439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22409){
var state_val_22410 = (state_22409[(1)]);
if((state_val_22410 === (7))){
var state_22409__$1 = state_22409;
var statearr_22411_22440 = state_22409__$1;
(statearr_22411_22440[(2)] = null);

(statearr_22411_22440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (1))){
var state_22409__$1 = state_22409;
var statearr_22412_22441 = state_22409__$1;
(statearr_22412_22441[(2)] = null);

(statearr_22412_22441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (4))){
var inst_22373 = (state_22409[(7)]);
var inst_22375 = (inst_22373 < cnt);
var state_22409__$1 = state_22409;
if(cljs.core.truth_(inst_22375)){
var statearr_22413_22442 = state_22409__$1;
(statearr_22413_22442[(1)] = (6));

} else {
var statearr_22414_22443 = state_22409__$1;
(statearr_22414_22443[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (15))){
var inst_22405 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22415_22444 = state_22409__$1;
(statearr_22415_22444[(2)] = inst_22405);

(statearr_22415_22444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (13))){
var inst_22398 = cljs.core.async.close_BANG_.call(null,out);
var state_22409__$1 = state_22409;
var statearr_22416_22445 = state_22409__$1;
(statearr_22416_22445[(2)] = inst_22398);

(statearr_22416_22445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (6))){
var state_22409__$1 = state_22409;
var statearr_22417_22446 = state_22409__$1;
(statearr_22417_22446[(2)] = null);

(statearr_22417_22446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (3))){
var inst_22407 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22409__$1,inst_22407);
} else {
if((state_val_22410 === (12))){
var inst_22395 = (state_22409[(8)]);
var inst_22395__$1 = (state_22409[(2)]);
var inst_22396 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22395__$1);
var state_22409__$1 = (function (){var statearr_22418 = state_22409;
(statearr_22418[(8)] = inst_22395__$1);

return statearr_22418;
})();
if(cljs.core.truth_(inst_22396)){
var statearr_22419_22447 = state_22409__$1;
(statearr_22419_22447[(1)] = (13));

} else {
var statearr_22420_22448 = state_22409__$1;
(statearr_22420_22448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (2))){
var inst_22372 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22373 = (0);
var state_22409__$1 = (function (){var statearr_22421 = state_22409;
(statearr_22421[(7)] = inst_22373);

(statearr_22421[(9)] = inst_22372);

return statearr_22421;
})();
var statearr_22422_22449 = state_22409__$1;
(statearr_22422_22449[(2)] = null);

(statearr_22422_22449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (11))){
var inst_22373 = (state_22409[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22409,(10),Object,null,(9));
var inst_22382 = chs__$1.call(null,inst_22373);
var inst_22383 = done.call(null,inst_22373);
var inst_22384 = cljs.core.async.take_BANG_.call(null,inst_22382,inst_22383);
var state_22409__$1 = state_22409;
var statearr_22423_22450 = state_22409__$1;
(statearr_22423_22450[(2)] = inst_22384);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22409__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (9))){
var inst_22373 = (state_22409[(7)]);
var inst_22386 = (state_22409[(2)]);
var inst_22387 = (inst_22373 + (1));
var inst_22373__$1 = inst_22387;
var state_22409__$1 = (function (){var statearr_22424 = state_22409;
(statearr_22424[(7)] = inst_22373__$1);

(statearr_22424[(10)] = inst_22386);

return statearr_22424;
})();
var statearr_22425_22451 = state_22409__$1;
(statearr_22425_22451[(2)] = null);

(statearr_22425_22451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (5))){
var inst_22393 = (state_22409[(2)]);
var state_22409__$1 = (function (){var statearr_22426 = state_22409;
(statearr_22426[(11)] = inst_22393);

return statearr_22426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22409__$1,(12),dchan);
} else {
if((state_val_22410 === (14))){
var inst_22395 = (state_22409[(8)]);
var inst_22400 = cljs.core.apply.call(null,f,inst_22395);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22409__$1,(16),out,inst_22400);
} else {
if((state_val_22410 === (16))){
var inst_22402 = (state_22409[(2)]);
var state_22409__$1 = (function (){var statearr_22427 = state_22409;
(statearr_22427[(12)] = inst_22402);

return statearr_22427;
})();
var statearr_22428_22452 = state_22409__$1;
(statearr_22428_22452[(2)] = null);

(statearr_22428_22452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (10))){
var inst_22377 = (state_22409[(2)]);
var inst_22378 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22409__$1 = (function (){var statearr_22429 = state_22409;
(statearr_22429[(13)] = inst_22377);

return statearr_22429;
})();
var statearr_22430_22453 = state_22409__$1;
(statearr_22430_22453[(2)] = inst_22378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22409__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (8))){
var inst_22391 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22431_22454 = state_22409__$1;
(statearr_22431_22454[(2)] = inst_22391);

(statearr_22431_22454[(1)] = (5));


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
});})(c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_22435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22435[(0)] = state_machine__5855__auto__);

(statearr_22435[(1)] = (1));

return statearr_22435;
});
var state_machine__5855__auto____1 = (function (state_22409){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e22436){if((e22436 instanceof Object)){
var ex__5858__auto__ = e22436;
var statearr_22437_22455 = state_22409;
(statearr_22437_22455[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22456 = state_22409;
state_22409 = G__22456;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22409){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_22438 = f__5870__auto__.call(null);
(statearr_22438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___22439);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5869__auto___22564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___22564,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___22564,out){
return (function (state_22540){
var state_val_22541 = (state_22540[(1)]);
if((state_val_22541 === (7))){
var inst_22519 = (state_22540[(7)]);
var inst_22520 = (state_22540[(8)]);
var inst_22519__$1 = (state_22540[(2)]);
var inst_22520__$1 = cljs.core.nth.call(null,inst_22519__$1,(0),null);
var inst_22521 = cljs.core.nth.call(null,inst_22519__$1,(1),null);
var inst_22522 = (inst_22520__$1 == null);
var state_22540__$1 = (function (){var statearr_22542 = state_22540;
(statearr_22542[(7)] = inst_22519__$1);

(statearr_22542[(8)] = inst_22520__$1);

(statearr_22542[(9)] = inst_22521);

return statearr_22542;
})();
if(cljs.core.truth_(inst_22522)){
var statearr_22543_22565 = state_22540__$1;
(statearr_22543_22565[(1)] = (8));

} else {
var statearr_22544_22566 = state_22540__$1;
(statearr_22544_22566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (1))){
var inst_22511 = cljs.core.vec.call(null,chs);
var inst_22512 = inst_22511;
var state_22540__$1 = (function (){var statearr_22545 = state_22540;
(statearr_22545[(10)] = inst_22512);

return statearr_22545;
})();
var statearr_22546_22567 = state_22540__$1;
(statearr_22546_22567[(2)] = null);

(statearr_22546_22567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (4))){
var inst_22512 = (state_22540[(10)]);
var state_22540__$1 = state_22540;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22540__$1,(7),inst_22512);
} else {
if((state_val_22541 === (6))){
var inst_22536 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22547_22568 = state_22540__$1;
(statearr_22547_22568[(2)] = inst_22536);

(statearr_22547_22568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (3))){
var inst_22538 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22540__$1,inst_22538);
} else {
if((state_val_22541 === (2))){
var inst_22512 = (state_22540[(10)]);
var inst_22514 = cljs.core.count.call(null,inst_22512);
var inst_22515 = (inst_22514 > (0));
var state_22540__$1 = state_22540;
if(cljs.core.truth_(inst_22515)){
var statearr_22549_22569 = state_22540__$1;
(statearr_22549_22569[(1)] = (4));

} else {
var statearr_22550_22570 = state_22540__$1;
(statearr_22550_22570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (11))){
var inst_22512 = (state_22540[(10)]);
var inst_22529 = (state_22540[(2)]);
var tmp22548 = inst_22512;
var inst_22512__$1 = tmp22548;
var state_22540__$1 = (function (){var statearr_22551 = state_22540;
(statearr_22551[(10)] = inst_22512__$1);

(statearr_22551[(11)] = inst_22529);

return statearr_22551;
})();
var statearr_22552_22571 = state_22540__$1;
(statearr_22552_22571[(2)] = null);

(statearr_22552_22571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (9))){
var inst_22520 = (state_22540[(8)]);
var state_22540__$1 = state_22540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22540__$1,(11),out,inst_22520);
} else {
if((state_val_22541 === (5))){
var inst_22534 = cljs.core.async.close_BANG_.call(null,out);
var state_22540__$1 = state_22540;
var statearr_22553_22572 = state_22540__$1;
(statearr_22553_22572[(2)] = inst_22534);

(statearr_22553_22572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (10))){
var inst_22532 = (state_22540[(2)]);
var state_22540__$1 = state_22540;
var statearr_22554_22573 = state_22540__$1;
(statearr_22554_22573[(2)] = inst_22532);

(statearr_22554_22573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22541 === (8))){
var inst_22512 = (state_22540[(10)]);
var inst_22519 = (state_22540[(7)]);
var inst_22520 = (state_22540[(8)]);
var inst_22521 = (state_22540[(9)]);
var inst_22524 = (function (){var c = inst_22521;
var v = inst_22520;
var vec__22517 = inst_22519;
var cs = inst_22512;
return ((function (c,v,vec__22517,cs,inst_22512,inst_22519,inst_22520,inst_22521,state_val_22541,c__5869__auto___22564,out){
return (function (p1__22457_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22457_SHARP_);
});
;})(c,v,vec__22517,cs,inst_22512,inst_22519,inst_22520,inst_22521,state_val_22541,c__5869__auto___22564,out))
})();
var inst_22525 = cljs.core.filterv.call(null,inst_22524,inst_22512);
var inst_22512__$1 = inst_22525;
var state_22540__$1 = (function (){var statearr_22555 = state_22540;
(statearr_22555[(10)] = inst_22512__$1);

return statearr_22555;
})();
var statearr_22556_22574 = state_22540__$1;
(statearr_22556_22574[(2)] = null);

(statearr_22556_22574[(1)] = (2));


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
});})(c__5869__auto___22564,out))
;
return ((function (switch__5854__auto__,c__5869__auto___22564,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_22560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22560[(0)] = state_machine__5855__auto__);

(statearr_22560[(1)] = (1));

return statearr_22560;
});
var state_machine__5855__auto____1 = (function (state_22540){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e22561){if((e22561 instanceof Object)){
var ex__5858__auto__ = e22561;
var statearr_22562_22575 = state_22540;
(statearr_22562_22575[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22576 = state_22540;
state_22540 = G__22576;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22540){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___22564,out))
})();
var state__5871__auto__ = (function (){var statearr_22563 = f__5870__auto__.call(null);
(statearr_22563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___22564);

return statearr_22563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___22564,out))
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
var c__5869__auto___22669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___22669,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___22669,out){
return (function (state_22646){
var state_val_22647 = (state_22646[(1)]);
if((state_val_22647 === (7))){
var inst_22628 = (state_22646[(7)]);
var inst_22628__$1 = (state_22646[(2)]);
var inst_22629 = (inst_22628__$1 == null);
var inst_22630 = cljs.core.not.call(null,inst_22629);
var state_22646__$1 = (function (){var statearr_22648 = state_22646;
(statearr_22648[(7)] = inst_22628__$1);

return statearr_22648;
})();
if(inst_22630){
var statearr_22649_22670 = state_22646__$1;
(statearr_22649_22670[(1)] = (8));

} else {
var statearr_22650_22671 = state_22646__$1;
(statearr_22650_22671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (1))){
var inst_22623 = (0);
var state_22646__$1 = (function (){var statearr_22651 = state_22646;
(statearr_22651[(8)] = inst_22623);

return statearr_22651;
})();
var statearr_22652_22672 = state_22646__$1;
(statearr_22652_22672[(2)] = null);

(statearr_22652_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (4))){
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22646__$1,(7),ch);
} else {
if((state_val_22647 === (6))){
var inst_22641 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22653_22673 = state_22646__$1;
(statearr_22653_22673[(2)] = inst_22641);

(statearr_22653_22673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (3))){
var inst_22643 = (state_22646[(2)]);
var inst_22644 = cljs.core.async.close_BANG_.call(null,out);
var state_22646__$1 = (function (){var statearr_22654 = state_22646;
(statearr_22654[(9)] = inst_22643);

return statearr_22654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22646__$1,inst_22644);
} else {
if((state_val_22647 === (2))){
var inst_22623 = (state_22646[(8)]);
var inst_22625 = (inst_22623 < n);
var state_22646__$1 = state_22646;
if(cljs.core.truth_(inst_22625)){
var statearr_22655_22674 = state_22646__$1;
(statearr_22655_22674[(1)] = (4));

} else {
var statearr_22656_22675 = state_22646__$1;
(statearr_22656_22675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (11))){
var inst_22623 = (state_22646[(8)]);
var inst_22633 = (state_22646[(2)]);
var inst_22634 = (inst_22623 + (1));
var inst_22623__$1 = inst_22634;
var state_22646__$1 = (function (){var statearr_22657 = state_22646;
(statearr_22657[(8)] = inst_22623__$1);

(statearr_22657[(10)] = inst_22633);

return statearr_22657;
})();
var statearr_22658_22676 = state_22646__$1;
(statearr_22658_22676[(2)] = null);

(statearr_22658_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (9))){
var state_22646__$1 = state_22646;
var statearr_22659_22677 = state_22646__$1;
(statearr_22659_22677[(2)] = null);

(statearr_22659_22677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (5))){
var state_22646__$1 = state_22646;
var statearr_22660_22678 = state_22646__$1;
(statearr_22660_22678[(2)] = null);

(statearr_22660_22678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (10))){
var inst_22638 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22661_22679 = state_22646__$1;
(statearr_22661_22679[(2)] = inst_22638);

(statearr_22661_22679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (8))){
var inst_22628 = (state_22646[(7)]);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22646__$1,(11),out,inst_22628);
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
});})(c__5869__auto___22669,out))
;
return ((function (switch__5854__auto__,c__5869__auto___22669,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_22665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22665[(0)] = state_machine__5855__auto__);

(statearr_22665[(1)] = (1));

return statearr_22665;
});
var state_machine__5855__auto____1 = (function (state_22646){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e22666){if((e22666 instanceof Object)){
var ex__5858__auto__ = e22666;
var statearr_22667_22680 = state_22646;
(statearr_22667_22680[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22681 = state_22646;
state_22646 = G__22681;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22646){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___22669,out))
})();
var state__5871__auto__ = (function (){var statearr_22668 = f__5870__auto__.call(null);
(statearr_22668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___22669);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___22669,out))
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
if(typeof cljs.core.async.t22689 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22689 = (function (ch,f,map_LT_,meta22690){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22690 = meta22690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22692 = (function (fn1,_,meta22690,map_LT_,f,ch,meta22693){
this.fn1 = fn1;
this._ = _;
this.meta22690 = meta22690;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22693 = meta22693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22682_SHARP_){
return f1.call(null,(((p1__22682_SHARP_ == null))?null:self__.f.call(null,p1__22682_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22694){
var self__ = this;
var _22694__$1 = this;
return self__.meta22693;
});})(___$1))
;

cljs.core.async.t22692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22694,meta22693__$1){
var self__ = this;
var _22694__$1 = this;
return (new cljs.core.async.t22692(self__.fn1,self__._,self__.meta22690,self__.map_LT_,self__.f,self__.ch,meta22693__$1));
});})(___$1))
;

cljs.core.async.t22692.cljs$lang$type = true;

cljs.core.async.t22692.cljs$lang$ctorStr = "cljs.core.async/t22692";

cljs.core.async.t22692.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t22692");
});})(___$1))
;

cljs.core.async.__GT_t22692 = ((function (___$1){
return (function __GT_t22692(fn1__$1,___$2,meta22690__$1,map_LT___$1,f__$1,ch__$1,meta22693){
return (new cljs.core.async.t22692(fn1__$1,___$2,meta22690__$1,map_LT___$1,f__$1,ch__$1,meta22693));
});})(___$1))
;

}

return (new cljs.core.async.t22692(fn1,___$1,self__.meta22690,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22689.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22691){
var self__ = this;
var _22691__$1 = this;
return self__.meta22690;
});

cljs.core.async.t22689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22691,meta22690__$1){
var self__ = this;
var _22691__$1 = this;
return (new cljs.core.async.t22689(self__.ch,self__.f,self__.map_LT_,meta22690__$1));
});

cljs.core.async.t22689.cljs$lang$type = true;

cljs.core.async.t22689.cljs$lang$ctorStr = "cljs.core.async/t22689";

cljs.core.async.t22689.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t22689");
});

cljs.core.async.__GT_t22689 = (function __GT_t22689(ch__$1,f__$1,map_LT___$1,meta22690){
return (new cljs.core.async.t22689(ch__$1,f__$1,map_LT___$1,meta22690));
});

}

return (new cljs.core.async.t22689(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22698 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22698 = (function (ch,f,map_GT_,meta22699){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22699 = meta22699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22700){
var self__ = this;
var _22700__$1 = this;
return self__.meta22699;
});

cljs.core.async.t22698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22700,meta22699__$1){
var self__ = this;
var _22700__$1 = this;
return (new cljs.core.async.t22698(self__.ch,self__.f,self__.map_GT_,meta22699__$1));
});

cljs.core.async.t22698.cljs$lang$type = true;

cljs.core.async.t22698.cljs$lang$ctorStr = "cljs.core.async/t22698";

cljs.core.async.t22698.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t22698");
});

cljs.core.async.__GT_t22698 = (function __GT_t22698(ch__$1,f__$1,map_GT___$1,meta22699){
return (new cljs.core.async.t22698(ch__$1,f__$1,map_GT___$1,meta22699));
});

}

return (new cljs.core.async.t22698(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22704 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22704 = (function (ch,p,filter_GT_,meta22705){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22705 = meta22705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22706){
var self__ = this;
var _22706__$1 = this;
return self__.meta22705;
});

cljs.core.async.t22704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22706,meta22705__$1){
var self__ = this;
var _22706__$1 = this;
return (new cljs.core.async.t22704(self__.ch,self__.p,self__.filter_GT_,meta22705__$1));
});

cljs.core.async.t22704.cljs$lang$type = true;

cljs.core.async.t22704.cljs$lang$ctorStr = "cljs.core.async/t22704";

cljs.core.async.t22704.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t22704");
});

cljs.core.async.__GT_t22704 = (function __GT_t22704(ch__$1,p__$1,filter_GT___$1,meta22705){
return (new cljs.core.async.t22704(ch__$1,p__$1,filter_GT___$1,meta22705));
});

}

return (new cljs.core.async.t22704(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___22789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___22789,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___22789,out){
return (function (state_22768){
var state_val_22769 = (state_22768[(1)]);
if((state_val_22769 === (7))){
var inst_22764 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22770_22790 = state_22768__$1;
(statearr_22770_22790[(2)] = inst_22764);

(statearr_22770_22790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (1))){
var state_22768__$1 = state_22768;
var statearr_22771_22791 = state_22768__$1;
(statearr_22771_22791[(2)] = null);

(statearr_22771_22791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (4))){
var inst_22750 = (state_22768[(7)]);
var inst_22750__$1 = (state_22768[(2)]);
var inst_22751 = (inst_22750__$1 == null);
var state_22768__$1 = (function (){var statearr_22772 = state_22768;
(statearr_22772[(7)] = inst_22750__$1);

return statearr_22772;
})();
if(cljs.core.truth_(inst_22751)){
var statearr_22773_22792 = state_22768__$1;
(statearr_22773_22792[(1)] = (5));

} else {
var statearr_22774_22793 = state_22768__$1;
(statearr_22774_22793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (6))){
var inst_22750 = (state_22768[(7)]);
var inst_22755 = p.call(null,inst_22750);
var state_22768__$1 = state_22768;
if(cljs.core.truth_(inst_22755)){
var statearr_22775_22794 = state_22768__$1;
(statearr_22775_22794[(1)] = (8));

} else {
var statearr_22776_22795 = state_22768__$1;
(statearr_22776_22795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (3))){
var inst_22766 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22768__$1,inst_22766);
} else {
if((state_val_22769 === (2))){
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22768__$1,(4),ch);
} else {
if((state_val_22769 === (11))){
var inst_22758 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22777_22796 = state_22768__$1;
(statearr_22777_22796[(2)] = inst_22758);

(statearr_22777_22796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (9))){
var state_22768__$1 = state_22768;
var statearr_22778_22797 = state_22768__$1;
(statearr_22778_22797[(2)] = null);

(statearr_22778_22797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (5))){
var inst_22753 = cljs.core.async.close_BANG_.call(null,out);
var state_22768__$1 = state_22768;
var statearr_22779_22798 = state_22768__$1;
(statearr_22779_22798[(2)] = inst_22753);

(statearr_22779_22798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (10))){
var inst_22761 = (state_22768[(2)]);
var state_22768__$1 = (function (){var statearr_22780 = state_22768;
(statearr_22780[(8)] = inst_22761);

return statearr_22780;
})();
var statearr_22781_22799 = state_22768__$1;
(statearr_22781_22799[(2)] = null);

(statearr_22781_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22769 === (8))){
var inst_22750 = (state_22768[(7)]);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22768__$1,(11),out,inst_22750);
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
});})(c__5869__auto___22789,out))
;
return ((function (switch__5854__auto__,c__5869__auto___22789,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_22785 = [null,null,null,null,null,null,null,null,null];
(statearr_22785[(0)] = state_machine__5855__auto__);

(statearr_22785[(1)] = (1));

return statearr_22785;
});
var state_machine__5855__auto____1 = (function (state_22768){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e22786){if((e22786 instanceof Object)){
var ex__5858__auto__ = e22786;
var statearr_22787_22800 = state_22768;
(statearr_22787_22800[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22801 = state_22768;
state_22768 = G__22801;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22768){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___22789,out))
})();
var state__5871__auto__ = (function (){var statearr_22788 = f__5870__auto__.call(null);
(statearr_22788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___22789);

return statearr_22788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___22789,out))
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
return (function (state_22967){
var state_val_22968 = (state_22967[(1)]);
if((state_val_22968 === (7))){
var inst_22963 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22969_23010 = state_22967__$1;
(statearr_22969_23010[(2)] = inst_22963);

(statearr_22969_23010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (20))){
var inst_22933 = (state_22967[(7)]);
var inst_22944 = (state_22967[(2)]);
var inst_22945 = cljs.core.next.call(null,inst_22933);
var inst_22919 = inst_22945;
var inst_22920 = null;
var inst_22921 = (0);
var inst_22922 = (0);
var state_22967__$1 = (function (){var statearr_22970 = state_22967;
(statearr_22970[(8)] = inst_22944);

(statearr_22970[(9)] = inst_22919);

(statearr_22970[(10)] = inst_22921);

(statearr_22970[(11)] = inst_22920);

(statearr_22970[(12)] = inst_22922);

return statearr_22970;
})();
var statearr_22971_23011 = state_22967__$1;
(statearr_22971_23011[(2)] = null);

(statearr_22971_23011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (1))){
var state_22967__$1 = state_22967;
var statearr_22972_23012 = state_22967__$1;
(statearr_22972_23012[(2)] = null);

(statearr_22972_23012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (4))){
var inst_22908 = (state_22967[(13)]);
var inst_22908__$1 = (state_22967[(2)]);
var inst_22909 = (inst_22908__$1 == null);
var state_22967__$1 = (function (){var statearr_22973 = state_22967;
(statearr_22973[(13)] = inst_22908__$1);

return statearr_22973;
})();
if(cljs.core.truth_(inst_22909)){
var statearr_22974_23013 = state_22967__$1;
(statearr_22974_23013[(1)] = (5));

} else {
var statearr_22975_23014 = state_22967__$1;
(statearr_22975_23014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (15))){
var state_22967__$1 = state_22967;
var statearr_22979_23015 = state_22967__$1;
(statearr_22979_23015[(2)] = null);

(statearr_22979_23015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (21))){
var state_22967__$1 = state_22967;
var statearr_22980_23016 = state_22967__$1;
(statearr_22980_23016[(2)] = null);

(statearr_22980_23016[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (13))){
var inst_22919 = (state_22967[(9)]);
var inst_22921 = (state_22967[(10)]);
var inst_22920 = (state_22967[(11)]);
var inst_22922 = (state_22967[(12)]);
var inst_22929 = (state_22967[(2)]);
var inst_22930 = (inst_22922 + (1));
var tmp22976 = inst_22919;
var tmp22977 = inst_22921;
var tmp22978 = inst_22920;
var inst_22919__$1 = tmp22976;
var inst_22920__$1 = tmp22978;
var inst_22921__$1 = tmp22977;
var inst_22922__$1 = inst_22930;
var state_22967__$1 = (function (){var statearr_22981 = state_22967;
(statearr_22981[(14)] = inst_22929);

(statearr_22981[(9)] = inst_22919__$1);

(statearr_22981[(10)] = inst_22921__$1);

(statearr_22981[(11)] = inst_22920__$1);

(statearr_22981[(12)] = inst_22922__$1);

return statearr_22981;
})();
var statearr_22982_23017 = state_22967__$1;
(statearr_22982_23017[(2)] = null);

(statearr_22982_23017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (22))){
var state_22967__$1 = state_22967;
var statearr_22983_23018 = state_22967__$1;
(statearr_22983_23018[(2)] = null);

(statearr_22983_23018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (6))){
var inst_22908 = (state_22967[(13)]);
var inst_22917 = f.call(null,inst_22908);
var inst_22918 = cljs.core.seq.call(null,inst_22917);
var inst_22919 = inst_22918;
var inst_22920 = null;
var inst_22921 = (0);
var inst_22922 = (0);
var state_22967__$1 = (function (){var statearr_22984 = state_22967;
(statearr_22984[(9)] = inst_22919);

(statearr_22984[(10)] = inst_22921);

(statearr_22984[(11)] = inst_22920);

(statearr_22984[(12)] = inst_22922);

return statearr_22984;
})();
var statearr_22985_23019 = state_22967__$1;
(statearr_22985_23019[(2)] = null);

(statearr_22985_23019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (17))){
var inst_22933 = (state_22967[(7)]);
var inst_22937 = cljs.core.chunk_first.call(null,inst_22933);
var inst_22938 = cljs.core.chunk_rest.call(null,inst_22933);
var inst_22939 = cljs.core.count.call(null,inst_22937);
var inst_22919 = inst_22938;
var inst_22920 = inst_22937;
var inst_22921 = inst_22939;
var inst_22922 = (0);
var state_22967__$1 = (function (){var statearr_22986 = state_22967;
(statearr_22986[(9)] = inst_22919);

(statearr_22986[(10)] = inst_22921);

(statearr_22986[(11)] = inst_22920);

(statearr_22986[(12)] = inst_22922);

return statearr_22986;
})();
var statearr_22987_23020 = state_22967__$1;
(statearr_22987_23020[(2)] = null);

(statearr_22987_23020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (3))){
var inst_22965 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22967__$1,inst_22965);
} else {
if((state_val_22968 === (12))){
var inst_22953 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22988_23021 = state_22967__$1;
(statearr_22988_23021[(2)] = inst_22953);

(statearr_22988_23021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (2))){
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22967__$1,(4),in$);
} else {
if((state_val_22968 === (23))){
var inst_22961 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22989_23022 = state_22967__$1;
(statearr_22989_23022[(2)] = inst_22961);

(statearr_22989_23022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (19))){
var inst_22948 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22990_23023 = state_22967__$1;
(statearr_22990_23023[(2)] = inst_22948);

(statearr_22990_23023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (11))){
var inst_22919 = (state_22967[(9)]);
var inst_22933 = (state_22967[(7)]);
var inst_22933__$1 = cljs.core.seq.call(null,inst_22919);
var state_22967__$1 = (function (){var statearr_22991 = state_22967;
(statearr_22991[(7)] = inst_22933__$1);

return statearr_22991;
})();
if(inst_22933__$1){
var statearr_22992_23024 = state_22967__$1;
(statearr_22992_23024[(1)] = (14));

} else {
var statearr_22993_23025 = state_22967__$1;
(statearr_22993_23025[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (9))){
var inst_22955 = (state_22967[(2)]);
var inst_22956 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22967__$1 = (function (){var statearr_22994 = state_22967;
(statearr_22994[(15)] = inst_22955);

return statearr_22994;
})();
if(cljs.core.truth_(inst_22956)){
var statearr_22995_23026 = state_22967__$1;
(statearr_22995_23026[(1)] = (21));

} else {
var statearr_22996_23027 = state_22967__$1;
(statearr_22996_23027[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (5))){
var inst_22911 = cljs.core.async.close_BANG_.call(null,out);
var state_22967__$1 = state_22967;
var statearr_22997_23028 = state_22967__$1;
(statearr_22997_23028[(2)] = inst_22911);

(statearr_22997_23028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (14))){
var inst_22933 = (state_22967[(7)]);
var inst_22935 = cljs.core.chunked_seq_QMARK_.call(null,inst_22933);
var state_22967__$1 = state_22967;
if(inst_22935){
var statearr_22998_23029 = state_22967__$1;
(statearr_22998_23029[(1)] = (17));

} else {
var statearr_22999_23030 = state_22967__$1;
(statearr_22999_23030[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (16))){
var inst_22951 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_23000_23031 = state_22967__$1;
(statearr_23000_23031[(2)] = inst_22951);

(statearr_23000_23031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (10))){
var inst_22920 = (state_22967[(11)]);
var inst_22922 = (state_22967[(12)]);
var inst_22927 = cljs.core._nth.call(null,inst_22920,inst_22922);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22967__$1,(13),out,inst_22927);
} else {
if((state_val_22968 === (18))){
var inst_22933 = (state_22967[(7)]);
var inst_22942 = cljs.core.first.call(null,inst_22933);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22967__$1,(20),out,inst_22942);
} else {
if((state_val_22968 === (8))){
var inst_22921 = (state_22967[(10)]);
var inst_22922 = (state_22967[(12)]);
var inst_22924 = (inst_22922 < inst_22921);
var inst_22925 = inst_22924;
var state_22967__$1 = state_22967;
if(cljs.core.truth_(inst_22925)){
var statearr_23001_23032 = state_22967__$1;
(statearr_23001_23032[(1)] = (10));

} else {
var statearr_23002_23033 = state_22967__$1;
(statearr_23002_23033[(1)] = (11));

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
var statearr_23006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23006[(0)] = state_machine__5855__auto__);

(statearr_23006[(1)] = (1));

return statearr_23006;
});
var state_machine__5855__auto____1 = (function (state_22967){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_22967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e23007){if((e23007 instanceof Object)){
var ex__5858__auto__ = e23007;
var statearr_23008_23034 = state_22967;
(statearr_23008_23034[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23035 = state_22967;
state_22967 = G__23035;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_22967){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_22967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_23009 = f__5870__auto__.call(null);
(statearr_23009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_23009;
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
var c__5869__auto___23132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___23132,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___23132,out){
return (function (state_23107){
var state_val_23108 = (state_23107[(1)]);
if((state_val_23108 === (7))){
var inst_23102 = (state_23107[(2)]);
var state_23107__$1 = state_23107;
var statearr_23109_23133 = state_23107__$1;
(statearr_23109_23133[(2)] = inst_23102);

(statearr_23109_23133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (1))){
var inst_23084 = null;
var state_23107__$1 = (function (){var statearr_23110 = state_23107;
(statearr_23110[(7)] = inst_23084);

return statearr_23110;
})();
var statearr_23111_23134 = state_23107__$1;
(statearr_23111_23134[(2)] = null);

(statearr_23111_23134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (4))){
var inst_23087 = (state_23107[(8)]);
var inst_23087__$1 = (state_23107[(2)]);
var inst_23088 = (inst_23087__$1 == null);
var inst_23089 = cljs.core.not.call(null,inst_23088);
var state_23107__$1 = (function (){var statearr_23112 = state_23107;
(statearr_23112[(8)] = inst_23087__$1);

return statearr_23112;
})();
if(inst_23089){
var statearr_23113_23135 = state_23107__$1;
(statearr_23113_23135[(1)] = (5));

} else {
var statearr_23114_23136 = state_23107__$1;
(statearr_23114_23136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (6))){
var state_23107__$1 = state_23107;
var statearr_23115_23137 = state_23107__$1;
(statearr_23115_23137[(2)] = null);

(statearr_23115_23137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (3))){
var inst_23104 = (state_23107[(2)]);
var inst_23105 = cljs.core.async.close_BANG_.call(null,out);
var state_23107__$1 = (function (){var statearr_23116 = state_23107;
(statearr_23116[(9)] = inst_23104);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23107__$1,inst_23105);
} else {
if((state_val_23108 === (2))){
var state_23107__$1 = state_23107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23107__$1,(4),ch);
} else {
if((state_val_23108 === (11))){
var inst_23087 = (state_23107[(8)]);
var inst_23096 = (state_23107[(2)]);
var inst_23084 = inst_23087;
var state_23107__$1 = (function (){var statearr_23117 = state_23107;
(statearr_23117[(10)] = inst_23096);

(statearr_23117[(7)] = inst_23084);

return statearr_23117;
})();
var statearr_23118_23138 = state_23107__$1;
(statearr_23118_23138[(2)] = null);

(statearr_23118_23138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (9))){
var inst_23087 = (state_23107[(8)]);
var state_23107__$1 = state_23107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23107__$1,(11),out,inst_23087);
} else {
if((state_val_23108 === (5))){
var inst_23087 = (state_23107[(8)]);
var inst_23084 = (state_23107[(7)]);
var inst_23091 = cljs.core._EQ_.call(null,inst_23087,inst_23084);
var state_23107__$1 = state_23107;
if(inst_23091){
var statearr_23120_23139 = state_23107__$1;
(statearr_23120_23139[(1)] = (8));

} else {
var statearr_23121_23140 = state_23107__$1;
(statearr_23121_23140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (10))){
var inst_23099 = (state_23107[(2)]);
var state_23107__$1 = state_23107;
var statearr_23122_23141 = state_23107__$1;
(statearr_23122_23141[(2)] = inst_23099);

(statearr_23122_23141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23108 === (8))){
var inst_23084 = (state_23107[(7)]);
var tmp23119 = inst_23084;
var inst_23084__$1 = tmp23119;
var state_23107__$1 = (function (){var statearr_23123 = state_23107;
(statearr_23123[(7)] = inst_23084__$1);

return statearr_23123;
})();
var statearr_23124_23142 = state_23107__$1;
(statearr_23124_23142[(2)] = null);

(statearr_23124_23142[(1)] = (2));


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
});})(c__5869__auto___23132,out))
;
return ((function (switch__5854__auto__,c__5869__auto___23132,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_23128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23128[(0)] = state_machine__5855__auto__);

(statearr_23128[(1)] = (1));

return statearr_23128;
});
var state_machine__5855__auto____1 = (function (state_23107){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_23107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e23129){if((e23129 instanceof Object)){
var ex__5858__auto__ = e23129;
var statearr_23130_23143 = state_23107;
(statearr_23130_23143[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23144 = state_23107;
state_23107 = G__23144;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_23107){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_23107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___23132,out))
})();
var state__5871__auto__ = (function (){var statearr_23131 = f__5870__auto__.call(null);
(statearr_23131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___23132);

return statearr_23131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___23132,out))
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
var c__5869__auto___23279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___23279,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___23279,out){
return (function (state_23249){
var state_val_23250 = (state_23249[(1)]);
if((state_val_23250 === (7))){
var inst_23245 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
var statearr_23251_23280 = state_23249__$1;
(statearr_23251_23280[(2)] = inst_23245);

(statearr_23251_23280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (1))){
var inst_23212 = (new Array(n));
var inst_23213 = inst_23212;
var inst_23214 = (0);
var state_23249__$1 = (function (){var statearr_23252 = state_23249;
(statearr_23252[(7)] = inst_23213);

(statearr_23252[(8)] = inst_23214);

return statearr_23252;
})();
var statearr_23253_23281 = state_23249__$1;
(statearr_23253_23281[(2)] = null);

(statearr_23253_23281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (4))){
var inst_23217 = (state_23249[(9)]);
var inst_23217__$1 = (state_23249[(2)]);
var inst_23218 = (inst_23217__$1 == null);
var inst_23219 = cljs.core.not.call(null,inst_23218);
var state_23249__$1 = (function (){var statearr_23254 = state_23249;
(statearr_23254[(9)] = inst_23217__$1);

return statearr_23254;
})();
if(inst_23219){
var statearr_23255_23282 = state_23249__$1;
(statearr_23255_23282[(1)] = (5));

} else {
var statearr_23256_23283 = state_23249__$1;
(statearr_23256_23283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (15))){
var inst_23239 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
var statearr_23257_23284 = state_23249__$1;
(statearr_23257_23284[(2)] = inst_23239);

(statearr_23257_23284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (13))){
var state_23249__$1 = state_23249;
var statearr_23258_23285 = state_23249__$1;
(statearr_23258_23285[(2)] = null);

(statearr_23258_23285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (6))){
var inst_23214 = (state_23249[(8)]);
var inst_23235 = (inst_23214 > (0));
var state_23249__$1 = state_23249;
if(cljs.core.truth_(inst_23235)){
var statearr_23259_23286 = state_23249__$1;
(statearr_23259_23286[(1)] = (12));

} else {
var statearr_23260_23287 = state_23249__$1;
(statearr_23260_23287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (3))){
var inst_23247 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23249__$1,inst_23247);
} else {
if((state_val_23250 === (12))){
var inst_23213 = (state_23249[(7)]);
var inst_23237 = cljs.core.vec.call(null,inst_23213);
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23249__$1,(15),out,inst_23237);
} else {
if((state_val_23250 === (2))){
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23249__$1,(4),ch);
} else {
if((state_val_23250 === (11))){
var inst_23229 = (state_23249[(2)]);
var inst_23230 = (new Array(n));
var inst_23213 = inst_23230;
var inst_23214 = (0);
var state_23249__$1 = (function (){var statearr_23261 = state_23249;
(statearr_23261[(7)] = inst_23213);

(statearr_23261[(10)] = inst_23229);

(statearr_23261[(8)] = inst_23214);

return statearr_23261;
})();
var statearr_23262_23288 = state_23249__$1;
(statearr_23262_23288[(2)] = null);

(statearr_23262_23288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (9))){
var inst_23213 = (state_23249[(7)]);
var inst_23227 = cljs.core.vec.call(null,inst_23213);
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23249__$1,(11),out,inst_23227);
} else {
if((state_val_23250 === (5))){
var inst_23217 = (state_23249[(9)]);
var inst_23222 = (state_23249[(11)]);
var inst_23213 = (state_23249[(7)]);
var inst_23214 = (state_23249[(8)]);
var inst_23221 = (inst_23213[inst_23214] = inst_23217);
var inst_23222__$1 = (inst_23214 + (1));
var inst_23223 = (inst_23222__$1 < n);
var state_23249__$1 = (function (){var statearr_23263 = state_23249;
(statearr_23263[(11)] = inst_23222__$1);

(statearr_23263[(12)] = inst_23221);

return statearr_23263;
})();
if(cljs.core.truth_(inst_23223)){
var statearr_23264_23289 = state_23249__$1;
(statearr_23264_23289[(1)] = (8));

} else {
var statearr_23265_23290 = state_23249__$1;
(statearr_23265_23290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (14))){
var inst_23242 = (state_23249[(2)]);
var inst_23243 = cljs.core.async.close_BANG_.call(null,out);
var state_23249__$1 = (function (){var statearr_23267 = state_23249;
(statearr_23267[(13)] = inst_23242);

return statearr_23267;
})();
var statearr_23268_23291 = state_23249__$1;
(statearr_23268_23291[(2)] = inst_23243);

(statearr_23268_23291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (10))){
var inst_23233 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
var statearr_23269_23292 = state_23249__$1;
(statearr_23269_23292[(2)] = inst_23233);

(statearr_23269_23292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (8))){
var inst_23222 = (state_23249[(11)]);
var inst_23213 = (state_23249[(7)]);
var tmp23266 = inst_23213;
var inst_23213__$1 = tmp23266;
var inst_23214 = inst_23222;
var state_23249__$1 = (function (){var statearr_23270 = state_23249;
(statearr_23270[(7)] = inst_23213__$1);

(statearr_23270[(8)] = inst_23214);

return statearr_23270;
})();
var statearr_23271_23293 = state_23249__$1;
(statearr_23271_23293[(2)] = null);

(statearr_23271_23293[(1)] = (2));


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
});})(c__5869__auto___23279,out))
;
return ((function (switch__5854__auto__,c__5869__auto___23279,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_23275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23275[(0)] = state_machine__5855__auto__);

(statearr_23275[(1)] = (1));

return statearr_23275;
});
var state_machine__5855__auto____1 = (function (state_23249){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_23249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e23276){if((e23276 instanceof Object)){
var ex__5858__auto__ = e23276;
var statearr_23277_23294 = state_23249;
(statearr_23277_23294[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23295 = state_23249;
state_23249 = G__23295;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_23249){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_23249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___23279,out))
})();
var state__5871__auto__ = (function (){var statearr_23278 = f__5870__auto__.call(null);
(statearr_23278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___23279);

return statearr_23278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___23279,out))
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
var c__5869__auto___23438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___23438,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___23438,out){
return (function (state_23408){
var state_val_23409 = (state_23408[(1)]);
if((state_val_23409 === (7))){
var inst_23404 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23410_23439 = state_23408__$1;
(statearr_23410_23439[(2)] = inst_23404);

(statearr_23410_23439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (1))){
var inst_23367 = [];
var inst_23368 = inst_23367;
var inst_23369 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23408__$1 = (function (){var statearr_23411 = state_23408;
(statearr_23411[(7)] = inst_23369);

(statearr_23411[(8)] = inst_23368);

return statearr_23411;
})();
var statearr_23412_23440 = state_23408__$1;
(statearr_23412_23440[(2)] = null);

(statearr_23412_23440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (4))){
var inst_23372 = (state_23408[(9)]);
var inst_23372__$1 = (state_23408[(2)]);
var inst_23373 = (inst_23372__$1 == null);
var inst_23374 = cljs.core.not.call(null,inst_23373);
var state_23408__$1 = (function (){var statearr_23413 = state_23408;
(statearr_23413[(9)] = inst_23372__$1);

return statearr_23413;
})();
if(inst_23374){
var statearr_23414_23441 = state_23408__$1;
(statearr_23414_23441[(1)] = (5));

} else {
var statearr_23415_23442 = state_23408__$1;
(statearr_23415_23442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (15))){
var inst_23398 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23416_23443 = state_23408__$1;
(statearr_23416_23443[(2)] = inst_23398);

(statearr_23416_23443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (13))){
var state_23408__$1 = state_23408;
var statearr_23417_23444 = state_23408__$1;
(statearr_23417_23444[(2)] = null);

(statearr_23417_23444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (6))){
var inst_23368 = (state_23408[(8)]);
var inst_23393 = inst_23368.length;
var inst_23394 = (inst_23393 > (0));
var state_23408__$1 = state_23408;
if(cljs.core.truth_(inst_23394)){
var statearr_23418_23445 = state_23408__$1;
(statearr_23418_23445[(1)] = (12));

} else {
var statearr_23419_23446 = state_23408__$1;
(statearr_23419_23446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (3))){
var inst_23406 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23408__$1,inst_23406);
} else {
if((state_val_23409 === (12))){
var inst_23368 = (state_23408[(8)]);
var inst_23396 = cljs.core.vec.call(null,inst_23368);
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23408__$1,(15),out,inst_23396);
} else {
if((state_val_23409 === (2))){
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23408__$1,(4),ch);
} else {
if((state_val_23409 === (11))){
var inst_23376 = (state_23408[(10)]);
var inst_23372 = (state_23408[(9)]);
var inst_23386 = (state_23408[(2)]);
var inst_23387 = [];
var inst_23388 = inst_23387.push(inst_23372);
var inst_23368 = inst_23387;
var inst_23369 = inst_23376;
var state_23408__$1 = (function (){var statearr_23420 = state_23408;
(statearr_23420[(11)] = inst_23386);

(statearr_23420[(7)] = inst_23369);

(statearr_23420[(8)] = inst_23368);

(statearr_23420[(12)] = inst_23388);

return statearr_23420;
})();
var statearr_23421_23447 = state_23408__$1;
(statearr_23421_23447[(2)] = null);

(statearr_23421_23447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (9))){
var inst_23368 = (state_23408[(8)]);
var inst_23384 = cljs.core.vec.call(null,inst_23368);
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23408__$1,(11),out,inst_23384);
} else {
if((state_val_23409 === (5))){
var inst_23376 = (state_23408[(10)]);
var inst_23369 = (state_23408[(7)]);
var inst_23372 = (state_23408[(9)]);
var inst_23376__$1 = f.call(null,inst_23372);
var inst_23377 = cljs.core._EQ_.call(null,inst_23376__$1,inst_23369);
var inst_23378 = cljs.core.keyword_identical_QMARK_.call(null,inst_23369,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23379 = (inst_23377) || (inst_23378);
var state_23408__$1 = (function (){var statearr_23422 = state_23408;
(statearr_23422[(10)] = inst_23376__$1);

return statearr_23422;
})();
if(cljs.core.truth_(inst_23379)){
var statearr_23423_23448 = state_23408__$1;
(statearr_23423_23448[(1)] = (8));

} else {
var statearr_23424_23449 = state_23408__$1;
(statearr_23424_23449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (14))){
var inst_23401 = (state_23408[(2)]);
var inst_23402 = cljs.core.async.close_BANG_.call(null,out);
var state_23408__$1 = (function (){var statearr_23426 = state_23408;
(statearr_23426[(13)] = inst_23401);

return statearr_23426;
})();
var statearr_23427_23450 = state_23408__$1;
(statearr_23427_23450[(2)] = inst_23402);

(statearr_23427_23450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (10))){
var inst_23391 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23428_23451 = state_23408__$1;
(statearr_23428_23451[(2)] = inst_23391);

(statearr_23428_23451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (8))){
var inst_23376 = (state_23408[(10)]);
var inst_23368 = (state_23408[(8)]);
var inst_23372 = (state_23408[(9)]);
var inst_23381 = inst_23368.push(inst_23372);
var tmp23425 = inst_23368;
var inst_23368__$1 = tmp23425;
var inst_23369 = inst_23376;
var state_23408__$1 = (function (){var statearr_23429 = state_23408;
(statearr_23429[(7)] = inst_23369);

(statearr_23429[(8)] = inst_23368__$1);

(statearr_23429[(14)] = inst_23381);

return statearr_23429;
})();
var statearr_23430_23452 = state_23408__$1;
(statearr_23430_23452[(2)] = null);

(statearr_23430_23452[(1)] = (2));


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
});})(c__5869__auto___23438,out))
;
return ((function (switch__5854__auto__,c__5869__auto___23438,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_23434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23434[(0)] = state_machine__5855__auto__);

(statearr_23434[(1)] = (1));

return statearr_23434;
});
var state_machine__5855__auto____1 = (function (state_23408){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_23408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e23435){if((e23435 instanceof Object)){
var ex__5858__auto__ = e23435;
var statearr_23436_23453 = state_23408;
(statearr_23436_23453[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23454 = state_23408;
state_23408 = G__23454;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_23408){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_23408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___23438,out))
})();
var state__5871__auto__ = (function (){var statearr_23437 = f__5870__auto__.call(null);
(statearr_23437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___23438);

return statearr_23437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___23438,out))
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