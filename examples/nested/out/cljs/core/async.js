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
if(typeof cljs.core.async.t29181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29181 = (function (f,fn_handler,meta29182){
this.f = f;
this.fn_handler = fn_handler;
this.meta29182 = meta29182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29183){
var self__ = this;
var _29183__$1 = this;
return self__.meta29182;
});

cljs.core.async.t29181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29183,meta29182__$1){
var self__ = this;
var _29183__$1 = this;
return (new cljs.core.async.t29181(self__.f,self__.fn_handler,meta29182__$1));
});

cljs.core.async.t29181.cljs$lang$type = true;

cljs.core.async.t29181.cljs$lang$ctorStr = "cljs.core.async/t29181";

cljs.core.async.t29181.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t29181");
});

cljs.core.async.__GT_t29181 = (function __GT_t29181(f__$1,fn_handler__$1,meta29182){
return (new cljs.core.async.t29181(f__$1,fn_handler__$1,meta29182));
});

}

return (new cljs.core.async.t29181(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var G__29185 = buff;
if(G__29185){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__29185.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29185.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29185);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29185);
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
var val_29186 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29186);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29186,ret){
return (function (){
return fn1.call(null,val_29186);
});})(val_29186,ret))
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
var n__4517__auto___29187 = n;
var x_29188 = (0);
while(true){
if((x_29188 < n__4517__auto___29187)){
(a[x_29188] = (0));

var G__29189 = (x_29188 + (1));
x_29188 = G__29189;
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

var G__29190 = (i + (1));
i = G__29190;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29194 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29194 = (function (flag,alt_flag,meta29195){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29195 = meta29195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29196){
var self__ = this;
var _29196__$1 = this;
return self__.meta29195;
});})(flag))
;

cljs.core.async.t29194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29196,meta29195__$1){
var self__ = this;
var _29196__$1 = this;
return (new cljs.core.async.t29194(self__.flag,self__.alt_flag,meta29195__$1));
});})(flag))
;

cljs.core.async.t29194.cljs$lang$type = true;

cljs.core.async.t29194.cljs$lang$ctorStr = "cljs.core.async/t29194";

cljs.core.async.t29194.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t29194");
});})(flag))
;

cljs.core.async.__GT_t29194 = ((function (flag){
return (function __GT_t29194(flag__$1,alt_flag__$1,meta29195){
return (new cljs.core.async.t29194(flag__$1,alt_flag__$1,meta29195));
});})(flag))
;

}

return (new cljs.core.async.t29194(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29200 = (function (cb,flag,alt_handler,meta29201){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29201 = meta29201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29202){
var self__ = this;
var _29202__$1 = this;
return self__.meta29201;
});

cljs.core.async.t29200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29202,meta29201__$1){
var self__ = this;
var _29202__$1 = this;
return (new cljs.core.async.t29200(self__.cb,self__.flag,self__.alt_handler,meta29201__$1));
});

cljs.core.async.t29200.cljs$lang$type = true;

cljs.core.async.t29200.cljs$lang$ctorStr = "cljs.core.async/t29200";

cljs.core.async.t29200.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t29200");
});

cljs.core.async.__GT_t29200 = (function __GT_t29200(cb__$1,flag__$1,alt_handler__$1,meta29201){
return (new cljs.core.async.t29200(cb__$1,flag__$1,alt_handler__$1,meta29201));
});

}

return (new cljs.core.async.t29200(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
return (function (p1__29203_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29203_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29204_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29204_SHARP_,port], null));
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
var G__29205 = (i + (1));
i = G__29205;
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
var alts_BANG___delegate = function (ports,p__29206){
var map__29208 = p__29206;
var map__29208__$1 = ((cljs.core.seq_QMARK_.call(null,map__29208))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var opts = map__29208__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29206 = null;
if (arguments.length > 1) {
  p__29206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__29206);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29209){
var ports = cljs.core.first(arglist__29209);
var p__29206 = cljs.core.rest(arglist__29209);
return alts_BANG___delegate(ports,p__29206);
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
var c__5869__auto___29304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___29304){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___29304){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (7))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29282_29305 = state_29280__$1;
(statearr_29282_29305[(2)] = inst_29276);

(statearr_29282_29305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (1))){
var state_29280__$1 = state_29280;
var statearr_29283_29306 = state_29280__$1;
(statearr_29283_29306[(2)] = null);

(statearr_29283_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (4))){
var inst_29259 = (state_29280[(7)]);
var inst_29259__$1 = (state_29280[(2)]);
var inst_29260 = (inst_29259__$1 == null);
var state_29280__$1 = (function (){var statearr_29284 = state_29280;
(statearr_29284[(7)] = inst_29259__$1);

return statearr_29284;
})();
if(cljs.core.truth_(inst_29260)){
var statearr_29285_29307 = state_29280__$1;
(statearr_29285_29307[(1)] = (5));

} else {
var statearr_29286_29308 = state_29280__$1;
(statearr_29286_29308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (13))){
var state_29280__$1 = state_29280;
var statearr_29287_29309 = state_29280__$1;
(statearr_29287_29309[(2)] = null);

(statearr_29287_29309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var inst_29259 = (state_29280[(7)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(11),to,inst_29259);
} else {
if((state_val_29281 === (3))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (12))){
var state_29280__$1 = state_29280;
var statearr_29288_29310 = state_29280__$1;
(statearr_29288_29310[(2)] = null);

(statearr_29288_29310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (2))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),from);
} else {
if((state_val_29281 === (11))){
var inst_29269 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29269)){
var statearr_29289_29311 = state_29280__$1;
(statearr_29289_29311[(1)] = (12));

} else {
var statearr_29290_29312 = state_29280__$1;
(statearr_29290_29312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (9))){
var state_29280__$1 = state_29280;
var statearr_29291_29313 = state_29280__$1;
(statearr_29291_29313[(2)] = null);

(statearr_29291_29313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (5))){
var state_29280__$1 = state_29280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29292_29314 = state_29280__$1;
(statearr_29292_29314[(1)] = (8));

} else {
var statearr_29293_29315 = state_29280__$1;
(statearr_29293_29315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (14))){
var inst_29274 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29294_29316 = state_29280__$1;
(statearr_29294_29316[(2)] = inst_29274);

(statearr_29294_29316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (10))){
var inst_29266 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29295_29317 = state_29280__$1;
(statearr_29295_29317[(2)] = inst_29266);

(statearr_29295_29317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (8))){
var inst_29263 = cljs.core.async.close_BANG_.call(null,to);
var state_29280__$1 = state_29280;
var statearr_29296_29318 = state_29280__$1;
(statearr_29296_29318[(2)] = inst_29263);

(statearr_29296_29318[(1)] = (10));


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
});})(c__5869__auto___29304))
;
return ((function (switch__5854__auto__,c__5869__auto___29304){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29300 = [null,null,null,null,null,null,null,null];
(statearr_29300[(0)] = state_machine__5855__auto__);

(statearr_29300[(1)] = (1));

return statearr_29300;
});
var state_machine__5855__auto____1 = (function (state_29280){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29301){if((e29301 instanceof Object)){
var ex__5858__auto__ = e29301;
var statearr_29302_29319 = state_29280;
(statearr_29302_29319[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29320 = state_29280;
state_29280 = G__29320;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___29304))
})();
var state__5871__auto__ = (function (){var statearr_29303 = f__5870__auto__.call(null);
(statearr_29303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29304);

return statearr_29303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___29304))
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
return (function (p__29504){
var vec__29505 = p__29504;
var v = cljs.core.nth.call(null,vec__29505,(0),null);
var p = cljs.core.nth.call(null,vec__29505,(1),null);
var job = vec__29505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5869__auto___29687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results){
return (function (state_29510){
var state_val_29511 = (state_29510[(1)]);
if((state_val_29511 === (2))){
var inst_29507 = (state_29510[(2)]);
var inst_29508 = cljs.core.async.close_BANG_.call(null,res);
var state_29510__$1 = (function (){var statearr_29512 = state_29510;
(statearr_29512[(7)] = inst_29507);

return statearr_29512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29510__$1,inst_29508);
} else {
if((state_val_29511 === (1))){
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29510__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results))
;
return ((function (switch__5854__auto__,c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null,null];
(statearr_29516[(0)] = state_machine__5855__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var state_machine__5855__auto____1 = (function (state_29510){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29517){if((e29517 instanceof Object)){
var ex__5858__auto__ = e29517;
var statearr_29518_29688 = state_29510;
(statearr_29518_29688[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29689 = state_29510;
state_29510 = G__29689;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29510){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results))
})();
var state__5871__auto__ = (function (){var statearr_29519 = f__5870__auto__.call(null);
(statearr_29519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29687);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___29687,res,vec__29505,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29520){
var vec__29521 = p__29520;
var v = cljs.core.nth.call(null,vec__29521,(0),null);
var p = cljs.core.nth.call(null,vec__29521,(1),null);
var job = vec__29521;
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
var n__4517__auto___29690 = n;
var __29691 = (0);
while(true){
if((__29691 < n__4517__auto___29690)){
var G__29522_29692 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29522_29692) {
case "async":
var c__5869__auto___29694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29691,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__29691,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function (state_29535){
var state_val_29536 = (state_29535[(1)]);
if((state_val_29536 === (7))){
var inst_29531 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
var statearr_29537_29695 = state_29535__$1;
(statearr_29537_29695[(2)] = inst_29531);

(statearr_29537_29695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (6))){
var state_29535__$1 = state_29535;
var statearr_29538_29696 = state_29535__$1;
(statearr_29538_29696[(2)] = null);

(statearr_29538_29696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (5))){
var state_29535__$1 = state_29535;
var statearr_29539_29697 = state_29535__$1;
(statearr_29539_29697[(2)] = null);

(statearr_29539_29697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (4))){
var inst_29525 = (state_29535[(2)]);
var inst_29526 = async.call(null,inst_29525);
var state_29535__$1 = state_29535;
if(cljs.core.truth_(inst_29526)){
var statearr_29540_29698 = state_29535__$1;
(statearr_29540_29698[(1)] = (5));

} else {
var statearr_29541_29699 = state_29535__$1;
(statearr_29541_29699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29536 === (3))){
var inst_29533 = (state_29535[(2)]);
var state_29535__$1 = state_29535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29535__$1,inst_29533);
} else {
if((state_val_29536 === (2))){
var state_29535__$1 = state_29535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29535__$1,(4),jobs);
} else {
if((state_val_29536 === (1))){
var state_29535__$1 = state_29535;
var statearr_29542_29700 = state_29535__$1;
(statearr_29542_29700[(2)] = null);

(statearr_29542_29700[(1)] = (2));


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
});})(__29691,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
;
return ((function (__29691,switch__5854__auto__,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null];
(statearr_29546[(0)] = state_machine__5855__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var state_machine__5855__auto____1 = (function (state_29535){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object)){
var ex__5858__auto__ = e29547;
var statearr_29548_29701 = state_29535;
(statearr_29548_29701[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29702 = state_29535;
state_29535 = G__29702;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29535){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__29691,switch__5854__auto__,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_29549 = f__5870__auto__.call(null);
(statearr_29549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29694);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__29691,c__5869__auto___29694,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
);


break;
case "compute":
var c__5869__auto___29703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29691,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__29691,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function (state_29562){
var state_val_29563 = (state_29562[(1)]);
if((state_val_29563 === (7))){
var inst_29558 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
var statearr_29564_29704 = state_29562__$1;
(statearr_29564_29704[(2)] = inst_29558);

(statearr_29564_29704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (6))){
var state_29562__$1 = state_29562;
var statearr_29565_29705 = state_29562__$1;
(statearr_29565_29705[(2)] = null);

(statearr_29565_29705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (5))){
var state_29562__$1 = state_29562;
var statearr_29566_29706 = state_29562__$1;
(statearr_29566_29706[(2)] = null);

(statearr_29566_29706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (4))){
var inst_29552 = (state_29562[(2)]);
var inst_29553 = process.call(null,inst_29552);
var state_29562__$1 = state_29562;
if(cljs.core.truth_(inst_29553)){
var statearr_29567_29707 = state_29562__$1;
(statearr_29567_29707[(1)] = (5));

} else {
var statearr_29568_29708 = state_29562__$1;
(statearr_29568_29708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29563 === (3))){
var inst_29560 = (state_29562[(2)]);
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29562__$1,inst_29560);
} else {
if((state_val_29563 === (2))){
var state_29562__$1 = state_29562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29562__$1,(4),jobs);
} else {
if((state_val_29563 === (1))){
var state_29562__$1 = state_29562;
var statearr_29569_29709 = state_29562__$1;
(statearr_29569_29709[(2)] = null);

(statearr_29569_29709[(1)] = (2));


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
});})(__29691,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
;
return ((function (__29691,switch__5854__auto__,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29573 = [null,null,null,null,null,null,null];
(statearr_29573[(0)] = state_machine__5855__auto__);

(statearr_29573[(1)] = (1));

return statearr_29573;
});
var state_machine__5855__auto____1 = (function (state_29562){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29574){if((e29574 instanceof Object)){
var ex__5858__auto__ = e29574;
var statearr_29575_29710 = state_29562;
(statearr_29575_29710[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29711 = state_29562;
state_29562 = G__29711;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29562){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__29691,switch__5854__auto__,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_29576 = f__5870__auto__.call(null);
(statearr_29576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29703);

return statearr_29576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__29691,c__5869__auto___29703,G__29522_29692,n__4517__auto___29690,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29712 = (__29691 + (1));
__29691 = G__29712;
continue;
} else {
}
break;
}

var c__5869__auto___29713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___29713,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___29713,jobs,results,process,async){
return (function (state_29598){
var state_val_29599 = (state_29598[(1)]);
if((state_val_29599 === (9))){
var inst_29591 = (state_29598[(2)]);
var state_29598__$1 = (function (){var statearr_29600 = state_29598;
(statearr_29600[(7)] = inst_29591);

return statearr_29600;
})();
var statearr_29601_29714 = state_29598__$1;
(statearr_29601_29714[(2)] = null);

(statearr_29601_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (8))){
var inst_29584 = (state_29598[(8)]);
var inst_29589 = (state_29598[(2)]);
var state_29598__$1 = (function (){var statearr_29602 = state_29598;
(statearr_29602[(9)] = inst_29589);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(9),results,inst_29584);
} else {
if((state_val_29599 === (7))){
var inst_29594 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29603_29715 = state_29598__$1;
(statearr_29603_29715[(2)] = inst_29594);

(statearr_29603_29715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (6))){
var inst_29579 = (state_29598[(10)]);
var inst_29584 = (state_29598[(8)]);
var inst_29584__$1 = cljs.core.async.chan.call(null,(1));
var inst_29585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29586 = [inst_29579,inst_29584__$1];
var inst_29587 = (new cljs.core.PersistentVector(null,2,(5),inst_29585,inst_29586,null));
var state_29598__$1 = (function (){var statearr_29604 = state_29598;
(statearr_29604[(8)] = inst_29584__$1);

return statearr_29604;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(8),jobs,inst_29587);
} else {
if((state_val_29599 === (5))){
var inst_29582 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29598__$1 = state_29598;
var statearr_29605_29716 = state_29598__$1;
(statearr_29605_29716[(2)] = inst_29582);

(statearr_29605_29716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (4))){
var inst_29579 = (state_29598[(10)]);
var inst_29579__$1 = (state_29598[(2)]);
var inst_29580 = (inst_29579__$1 == null);
var state_29598__$1 = (function (){var statearr_29606 = state_29598;
(statearr_29606[(10)] = inst_29579__$1);

return statearr_29606;
})();
if(cljs.core.truth_(inst_29580)){
var statearr_29607_29717 = state_29598__$1;
(statearr_29607_29717[(1)] = (5));

} else {
var statearr_29608_29718 = state_29598__$1;
(statearr_29608_29718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (3))){
var inst_29596 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29598__$1,inst_29596);
} else {
if((state_val_29599 === (2))){
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29598__$1,(4),from);
} else {
if((state_val_29599 === (1))){
var state_29598__$1 = state_29598;
var statearr_29609_29719 = state_29598__$1;
(statearr_29609_29719[(2)] = null);

(statearr_29609_29719[(1)] = (2));


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
});})(c__5869__auto___29713,jobs,results,process,async))
;
return ((function (switch__5854__auto__,c__5869__auto___29713,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29613[(0)] = state_machine__5855__auto__);

(statearr_29613[(1)] = (1));

return statearr_29613;
});
var state_machine__5855__auto____1 = (function (state_29598){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29614){if((e29614 instanceof Object)){
var ex__5858__auto__ = e29614;
var statearr_29615_29720 = state_29598;
(statearr_29615_29720[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29721 = state_29598;
state_29598 = G__29721;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29598){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___29713,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_29616 = f__5870__auto__.call(null);
(statearr_29616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29713);

return statearr_29616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___29713,jobs,results,process,async))
);


var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,jobs,results,process,async){
return (function (state_29654){
var state_val_29655 = (state_29654[(1)]);
if((state_val_29655 === (7))){
var inst_29650 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29656_29722 = state_29654__$1;
(statearr_29656_29722[(2)] = inst_29650);

(statearr_29656_29722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (20))){
var state_29654__$1 = state_29654;
var statearr_29657_29723 = state_29654__$1;
(statearr_29657_29723[(2)] = null);

(statearr_29657_29723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (1))){
var state_29654__$1 = state_29654;
var statearr_29658_29724 = state_29654__$1;
(statearr_29658_29724[(2)] = null);

(statearr_29658_29724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (4))){
var inst_29619 = (state_29654[(7)]);
var inst_29619__$1 = (state_29654[(2)]);
var inst_29620 = (inst_29619__$1 == null);
var state_29654__$1 = (function (){var statearr_29659 = state_29654;
(statearr_29659[(7)] = inst_29619__$1);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29620)){
var statearr_29660_29725 = state_29654__$1;
(statearr_29660_29725[(1)] = (5));

} else {
var statearr_29661_29726 = state_29654__$1;
(statearr_29661_29726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (15))){
var inst_29632 = (state_29654[(8)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29654__$1,(18),to,inst_29632);
} else {
if((state_val_29655 === (21))){
var inst_29645 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29662_29727 = state_29654__$1;
(statearr_29662_29727[(2)] = inst_29645);

(statearr_29662_29727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (13))){
var inst_29647 = (state_29654[(2)]);
var state_29654__$1 = (function (){var statearr_29663 = state_29654;
(statearr_29663[(9)] = inst_29647);

return statearr_29663;
})();
var statearr_29664_29728 = state_29654__$1;
(statearr_29664_29728[(2)] = null);

(statearr_29664_29728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (6))){
var inst_29619 = (state_29654[(7)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29654__$1,(11),inst_29619);
} else {
if((state_val_29655 === (17))){
var inst_29640 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
if(cljs.core.truth_(inst_29640)){
var statearr_29665_29729 = state_29654__$1;
(statearr_29665_29729[(1)] = (19));

} else {
var statearr_29666_29730 = state_29654__$1;
(statearr_29666_29730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (3))){
var inst_29652 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29654__$1,inst_29652);
} else {
if((state_val_29655 === (12))){
var inst_29629 = (state_29654[(10)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29654__$1,(14),inst_29629);
} else {
if((state_val_29655 === (2))){
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29654__$1,(4),results);
} else {
if((state_val_29655 === (19))){
var state_29654__$1 = state_29654;
var statearr_29667_29731 = state_29654__$1;
(statearr_29667_29731[(2)] = null);

(statearr_29667_29731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (11))){
var inst_29629 = (state_29654[(2)]);
var state_29654__$1 = (function (){var statearr_29668 = state_29654;
(statearr_29668[(10)] = inst_29629);

return statearr_29668;
})();
var statearr_29669_29732 = state_29654__$1;
(statearr_29669_29732[(2)] = null);

(statearr_29669_29732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (9))){
var state_29654__$1 = state_29654;
var statearr_29670_29733 = state_29654__$1;
(statearr_29670_29733[(2)] = null);

(statearr_29670_29733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (5))){
var state_29654__$1 = state_29654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29671_29734 = state_29654__$1;
(statearr_29671_29734[(1)] = (8));

} else {
var statearr_29672_29735 = state_29654__$1;
(statearr_29672_29735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (14))){
var inst_29632 = (state_29654[(8)]);
var inst_29634 = (state_29654[(11)]);
var inst_29632__$1 = (state_29654[(2)]);
var inst_29633 = (inst_29632__$1 == null);
var inst_29634__$1 = cljs.core.not.call(null,inst_29633);
var state_29654__$1 = (function (){var statearr_29673 = state_29654;
(statearr_29673[(8)] = inst_29632__$1);

(statearr_29673[(11)] = inst_29634__$1);

return statearr_29673;
})();
if(inst_29634__$1){
var statearr_29674_29736 = state_29654__$1;
(statearr_29674_29736[(1)] = (15));

} else {
var statearr_29675_29737 = state_29654__$1;
(statearr_29675_29737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (16))){
var inst_29634 = (state_29654[(11)]);
var state_29654__$1 = state_29654;
var statearr_29676_29738 = state_29654__$1;
(statearr_29676_29738[(2)] = inst_29634);

(statearr_29676_29738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (10))){
var inst_29626 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29677_29739 = state_29654__$1;
(statearr_29677_29739[(2)] = inst_29626);

(statearr_29677_29739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (18))){
var inst_29637 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
var statearr_29678_29740 = state_29654__$1;
(statearr_29678_29740[(2)] = inst_29637);

(statearr_29678_29740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (8))){
var inst_29623 = cljs.core.async.close_BANG_.call(null,to);
var state_29654__$1 = state_29654;
var statearr_29679_29741 = state_29654__$1;
(statearr_29679_29741[(2)] = inst_29623);

(statearr_29679_29741[(1)] = (10));


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
var statearr_29683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29683[(0)] = state_machine__5855__auto__);

(statearr_29683[(1)] = (1));

return statearr_29683;
});
var state_machine__5855__auto____1 = (function (state_29654){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29684){if((e29684 instanceof Object)){
var ex__5858__auto__ = e29684;
var statearr_29685_29742 = state_29654;
(statearr_29685_29742[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29743 = state_29654;
state_29654 = G__29743;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29654){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_29686 = f__5870__auto__.call(null);
(statearr_29686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_29686;
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
var c__5869__auto___29844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___29844,tc,fc){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___29844,tc,fc){
return (function (state_29819){
var state_val_29820 = (state_29819[(1)]);
if((state_val_29820 === (7))){
var inst_29815 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29821_29845 = state_29819__$1;
(statearr_29821_29845[(2)] = inst_29815);

(statearr_29821_29845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (1))){
var state_29819__$1 = state_29819;
var statearr_29822_29846 = state_29819__$1;
(statearr_29822_29846[(2)] = null);

(statearr_29822_29846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (4))){
var inst_29796 = (state_29819[(7)]);
var inst_29796__$1 = (state_29819[(2)]);
var inst_29797 = (inst_29796__$1 == null);
var state_29819__$1 = (function (){var statearr_29823 = state_29819;
(statearr_29823[(7)] = inst_29796__$1);

return statearr_29823;
})();
if(cljs.core.truth_(inst_29797)){
var statearr_29824_29847 = state_29819__$1;
(statearr_29824_29847[(1)] = (5));

} else {
var statearr_29825_29848 = state_29819__$1;
(statearr_29825_29848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (13))){
var state_29819__$1 = state_29819;
var statearr_29826_29849 = state_29819__$1;
(statearr_29826_29849[(2)] = null);

(statearr_29826_29849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (6))){
var inst_29796 = (state_29819[(7)]);
var inst_29802 = p.call(null,inst_29796);
var state_29819__$1 = state_29819;
if(cljs.core.truth_(inst_29802)){
var statearr_29827_29850 = state_29819__$1;
(statearr_29827_29850[(1)] = (9));

} else {
var statearr_29828_29851 = state_29819__$1;
(statearr_29828_29851[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (3))){
var inst_29817 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29819__$1,inst_29817);
} else {
if((state_val_29820 === (12))){
var state_29819__$1 = state_29819;
var statearr_29829_29852 = state_29819__$1;
(statearr_29829_29852[(2)] = null);

(statearr_29829_29852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (2))){
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29819__$1,(4),ch);
} else {
if((state_val_29820 === (11))){
var inst_29796 = (state_29819[(7)]);
var inst_29806 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29819__$1,(8),inst_29806,inst_29796);
} else {
if((state_val_29820 === (9))){
var state_29819__$1 = state_29819;
var statearr_29830_29853 = state_29819__$1;
(statearr_29830_29853[(2)] = tc);

(statearr_29830_29853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (5))){
var inst_29799 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29800 = cljs.core.async.close_BANG_.call(null,fc);
var state_29819__$1 = (function (){var statearr_29831 = state_29819;
(statearr_29831[(8)] = inst_29799);

return statearr_29831;
})();
var statearr_29832_29854 = state_29819__$1;
(statearr_29832_29854[(2)] = inst_29800);

(statearr_29832_29854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (14))){
var inst_29813 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
var statearr_29833_29855 = state_29819__$1;
(statearr_29833_29855[(2)] = inst_29813);

(statearr_29833_29855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (10))){
var state_29819__$1 = state_29819;
var statearr_29834_29856 = state_29819__$1;
(statearr_29834_29856[(2)] = fc);

(statearr_29834_29856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29820 === (8))){
var inst_29808 = (state_29819[(2)]);
var state_29819__$1 = state_29819;
if(cljs.core.truth_(inst_29808)){
var statearr_29835_29857 = state_29819__$1;
(statearr_29835_29857[(1)] = (12));

} else {
var statearr_29836_29858 = state_29819__$1;
(statearr_29836_29858[(1)] = (13));

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
});})(c__5869__auto___29844,tc,fc))
;
return ((function (switch__5854__auto__,c__5869__auto___29844,tc,fc){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_29840 = [null,null,null,null,null,null,null,null,null];
(statearr_29840[(0)] = state_machine__5855__auto__);

(statearr_29840[(1)] = (1));

return statearr_29840;
});
var state_machine__5855__auto____1 = (function (state_29819){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29841){if((e29841 instanceof Object)){
var ex__5858__auto__ = e29841;
var statearr_29842_29859 = state_29819;
(statearr_29842_29859[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29860 = state_29819;
state_29819 = G__29860;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29819){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___29844,tc,fc))
})();
var state__5871__auto__ = (function (){var statearr_29843 = f__5870__auto__.call(null);
(statearr_29843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___29844);

return statearr_29843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___29844,tc,fc))
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
return (function (state_29907){
var state_val_29908 = (state_29907[(1)]);
if((state_val_29908 === (7))){
var inst_29903 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29909_29925 = state_29907__$1;
(statearr_29909_29925[(2)] = inst_29903);

(statearr_29909_29925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (6))){
var inst_29896 = (state_29907[(7)]);
var inst_29893 = (state_29907[(8)]);
var inst_29900 = f.call(null,inst_29893,inst_29896);
var inst_29893__$1 = inst_29900;
var state_29907__$1 = (function (){var statearr_29910 = state_29907;
(statearr_29910[(8)] = inst_29893__$1);

return statearr_29910;
})();
var statearr_29911_29926 = state_29907__$1;
(statearr_29911_29926[(2)] = null);

(statearr_29911_29926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (5))){
var inst_29893 = (state_29907[(8)]);
var state_29907__$1 = state_29907;
var statearr_29912_29927 = state_29907__$1;
(statearr_29912_29927[(2)] = inst_29893);

(statearr_29912_29927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (4))){
var inst_29896 = (state_29907[(7)]);
var inst_29896__$1 = (state_29907[(2)]);
var inst_29897 = (inst_29896__$1 == null);
var state_29907__$1 = (function (){var statearr_29913 = state_29907;
(statearr_29913[(7)] = inst_29896__$1);

return statearr_29913;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_29914_29928 = state_29907__$1;
(statearr_29914_29928[(1)] = (5));

} else {
var statearr_29915_29929 = state_29907__$1;
(statearr_29915_29929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (3))){
var inst_29905 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29907__$1,inst_29905);
} else {
if((state_val_29908 === (2))){
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29907__$1,(4),ch);
} else {
if((state_val_29908 === (1))){
var inst_29893 = init;
var state_29907__$1 = (function (){var statearr_29916 = state_29907;
(statearr_29916[(8)] = inst_29893);

return statearr_29916;
})();
var statearr_29917_29930 = state_29907__$1;
(statearr_29917_29930[(2)] = null);

(statearr_29917_29930[(1)] = (2));


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
var statearr_29921 = [null,null,null,null,null,null,null,null,null];
(statearr_29921[(0)] = state_machine__5855__auto__);

(statearr_29921[(1)] = (1));

return statearr_29921;
});
var state_machine__5855__auto____1 = (function (state_29907){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_29907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e29922){if((e29922 instanceof Object)){
var ex__5858__auto__ = e29922;
var statearr_29923_29931 = state_29907;
(statearr_29923_29931[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29932 = state_29907;
state_29907 = G__29932;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_29907){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_29907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_29924 = f__5870__auto__.call(null);
(statearr_29924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_29924;
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
return (function (state_30006){
var state_val_30007 = (state_30006[(1)]);
if((state_val_30007 === (7))){
var inst_29988 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30008_30031 = state_30006__$1;
(statearr_30008_30031[(2)] = inst_29988);

(statearr_30008_30031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (1))){
var inst_29982 = cljs.core.seq.call(null,coll);
var inst_29983 = inst_29982;
var state_30006__$1 = (function (){var statearr_30009 = state_30006;
(statearr_30009[(7)] = inst_29983);

return statearr_30009;
})();
var statearr_30010_30032 = state_30006__$1;
(statearr_30010_30032[(2)] = null);

(statearr_30010_30032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (4))){
var inst_29983 = (state_30006[(7)]);
var inst_29986 = cljs.core.first.call(null,inst_29983);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30006__$1,(7),ch,inst_29986);
} else {
if((state_val_30007 === (13))){
var inst_30000 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30011_30033 = state_30006__$1;
(statearr_30011_30033[(2)] = inst_30000);

(statearr_30011_30033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (6))){
var inst_29991 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
if(cljs.core.truth_(inst_29991)){
var statearr_30012_30034 = state_30006__$1;
(statearr_30012_30034[(1)] = (8));

} else {
var statearr_30013_30035 = state_30006__$1;
(statearr_30013_30035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (3))){
var inst_30004 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30006__$1,inst_30004);
} else {
if((state_val_30007 === (12))){
var state_30006__$1 = state_30006;
var statearr_30014_30036 = state_30006__$1;
(statearr_30014_30036[(2)] = null);

(statearr_30014_30036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (2))){
var inst_29983 = (state_30006[(7)]);
var state_30006__$1 = state_30006;
if(cljs.core.truth_(inst_29983)){
var statearr_30015_30037 = state_30006__$1;
(statearr_30015_30037[(1)] = (4));

} else {
var statearr_30016_30038 = state_30006__$1;
(statearr_30016_30038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (11))){
var inst_29997 = cljs.core.async.close_BANG_.call(null,ch);
var state_30006__$1 = state_30006;
var statearr_30017_30039 = state_30006__$1;
(statearr_30017_30039[(2)] = inst_29997);

(statearr_30017_30039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (9))){
var state_30006__$1 = state_30006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30018_30040 = state_30006__$1;
(statearr_30018_30040[(1)] = (11));

} else {
var statearr_30019_30041 = state_30006__$1;
(statearr_30019_30041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (5))){
var inst_29983 = (state_30006[(7)]);
var state_30006__$1 = state_30006;
var statearr_30020_30042 = state_30006__$1;
(statearr_30020_30042[(2)] = inst_29983);

(statearr_30020_30042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (10))){
var inst_30002 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30021_30043 = state_30006__$1;
(statearr_30021_30043[(2)] = inst_30002);

(statearr_30021_30043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (8))){
var inst_29983 = (state_30006[(7)]);
var inst_29993 = cljs.core.next.call(null,inst_29983);
var inst_29983__$1 = inst_29993;
var state_30006__$1 = (function (){var statearr_30022 = state_30006;
(statearr_30022[(7)] = inst_29983__$1);

return statearr_30022;
})();
var statearr_30023_30044 = state_30006__$1;
(statearr_30023_30044[(2)] = null);

(statearr_30023_30044[(1)] = (2));


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
var statearr_30027 = [null,null,null,null,null,null,null,null];
(statearr_30027[(0)] = state_machine__5855__auto__);

(statearr_30027[(1)] = (1));

return statearr_30027;
});
var state_machine__5855__auto____1 = (function (state_30006){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_30006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e30028){if((e30028 instanceof Object)){
var ex__5858__auto__ = e30028;
var statearr_30029_30045 = state_30006;
(statearr_30029_30045[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_30006;
state_30006 = G__30046;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_30006){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_30006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_30030 = f__5870__auto__.call(null);
(statearr_30030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_30030;
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

cljs.core.async.Mux = (function (){var obj30048 = {};
return obj30048;
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


cljs.core.async.Mult = (function (){var obj30050 = {};
return obj30050;
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
if(typeof cljs.core.async.t30272 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30272 = (function (cs,ch,mult,meta30273){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30273 = meta30273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30272.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30272.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30272.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30272.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30272.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30274){
var self__ = this;
var _30274__$1 = this;
return self__.meta30273;
});})(cs))
;

cljs.core.async.t30272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30274,meta30273__$1){
var self__ = this;
var _30274__$1 = this;
return (new cljs.core.async.t30272(self__.cs,self__.ch,self__.mult,meta30273__$1));
});})(cs))
;

cljs.core.async.t30272.cljs$lang$type = true;

cljs.core.async.t30272.cljs$lang$ctorStr = "cljs.core.async/t30272";

cljs.core.async.t30272.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t30272");
});})(cs))
;

cljs.core.async.__GT_t30272 = ((function (cs){
return (function __GT_t30272(cs__$1,ch__$1,mult__$1,meta30273){
return (new cljs.core.async.t30272(cs__$1,ch__$1,mult__$1,meta30273));
});})(cs))
;

}

return (new cljs.core.async.t30272(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___30493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___30493,cs,m,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___30493,cs,m,dchan,dctr,done){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (7))){
var inst_30401 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30407_30494 = state_30405__$1;
(statearr_30407_30494[(2)] = inst_30401);

(statearr_30407_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (20))){
var inst_30306 = (state_30405[(7)]);
var inst_30316 = cljs.core.first.call(null,inst_30306);
var inst_30317 = cljs.core.nth.call(null,inst_30316,(0),null);
var inst_30318 = cljs.core.nth.call(null,inst_30316,(1),null);
var state_30405__$1 = (function (){var statearr_30408 = state_30405;
(statearr_30408[(8)] = inst_30317);

return statearr_30408;
})();
if(cljs.core.truth_(inst_30318)){
var statearr_30409_30495 = state_30405__$1;
(statearr_30409_30495[(1)] = (22));

} else {
var statearr_30410_30496 = state_30405__$1;
(statearr_30410_30496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (27))){
var inst_30277 = (state_30405[(9)]);
var inst_30348 = (state_30405[(10)]);
var inst_30353 = (state_30405[(11)]);
var inst_30346 = (state_30405[(12)]);
var inst_30353__$1 = cljs.core._nth.call(null,inst_30346,inst_30348);
var inst_30354 = cljs.core.async.put_BANG_.call(null,inst_30353__$1,inst_30277,done);
var state_30405__$1 = (function (){var statearr_30411 = state_30405;
(statearr_30411[(11)] = inst_30353__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30354)){
var statearr_30412_30497 = state_30405__$1;
(statearr_30412_30497[(1)] = (30));

} else {
var statearr_30413_30498 = state_30405__$1;
(statearr_30413_30498[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (1))){
var state_30405__$1 = state_30405;
var statearr_30414_30499 = state_30405__$1;
(statearr_30414_30499[(2)] = null);

(statearr_30414_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (24))){
var inst_30306 = (state_30405[(7)]);
var inst_30323 = (state_30405[(2)]);
var inst_30324 = cljs.core.next.call(null,inst_30306);
var inst_30286 = inst_30324;
var inst_30287 = null;
var inst_30288 = (0);
var inst_30289 = (0);
var state_30405__$1 = (function (){var statearr_30415 = state_30405;
(statearr_30415[(13)] = inst_30287);

(statearr_30415[(14)] = inst_30323);

(statearr_30415[(15)] = inst_30288);

(statearr_30415[(16)] = inst_30289);

(statearr_30415[(17)] = inst_30286);

return statearr_30415;
})();
var statearr_30416_30500 = state_30405__$1;
(statearr_30416_30500[(2)] = null);

(statearr_30416_30500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (39))){
var state_30405__$1 = state_30405;
var statearr_30420_30501 = state_30405__$1;
(statearr_30420_30501[(2)] = null);

(statearr_30420_30501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (4))){
var inst_30277 = (state_30405[(9)]);
var inst_30277__$1 = (state_30405[(2)]);
var inst_30278 = (inst_30277__$1 == null);
var state_30405__$1 = (function (){var statearr_30421 = state_30405;
(statearr_30421[(9)] = inst_30277__$1);

return statearr_30421;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30422_30502 = state_30405__$1;
(statearr_30422_30502[(1)] = (5));

} else {
var statearr_30423_30503 = state_30405__$1;
(statearr_30423_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (15))){
var inst_30287 = (state_30405[(13)]);
var inst_30288 = (state_30405[(15)]);
var inst_30289 = (state_30405[(16)]);
var inst_30286 = (state_30405[(17)]);
var inst_30302 = (state_30405[(2)]);
var inst_30303 = (inst_30289 + (1));
var tmp30417 = inst_30287;
var tmp30418 = inst_30288;
var tmp30419 = inst_30286;
var inst_30286__$1 = tmp30419;
var inst_30287__$1 = tmp30417;
var inst_30288__$1 = tmp30418;
var inst_30289__$1 = inst_30303;
var state_30405__$1 = (function (){var statearr_30424 = state_30405;
(statearr_30424[(13)] = inst_30287__$1);

(statearr_30424[(15)] = inst_30288__$1);

(statearr_30424[(16)] = inst_30289__$1);

(statearr_30424[(17)] = inst_30286__$1);

(statearr_30424[(18)] = inst_30302);

return statearr_30424;
})();
var statearr_30425_30504 = state_30405__$1;
(statearr_30425_30504[(2)] = null);

(statearr_30425_30504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (21))){
var inst_30327 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30429_30505 = state_30405__$1;
(statearr_30429_30505[(2)] = inst_30327);

(statearr_30429_30505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (31))){
var inst_30353 = (state_30405[(11)]);
var inst_30357 = done.call(null,null);
var inst_30358 = cljs.core.async.untap_STAR_.call(null,m,inst_30353);
var state_30405__$1 = (function (){var statearr_30430 = state_30405;
(statearr_30430[(19)] = inst_30357);

return statearr_30430;
})();
var statearr_30431_30506 = state_30405__$1;
(statearr_30431_30506[(2)] = inst_30358);

(statearr_30431_30506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (32))){
var inst_30348 = (state_30405[(10)]);
var inst_30345 = (state_30405[(20)]);
var inst_30346 = (state_30405[(12)]);
var inst_30347 = (state_30405[(21)]);
var inst_30360 = (state_30405[(2)]);
var inst_30361 = (inst_30348 + (1));
var tmp30426 = inst_30345;
var tmp30427 = inst_30346;
var tmp30428 = inst_30347;
var inst_30345__$1 = tmp30426;
var inst_30346__$1 = tmp30427;
var inst_30347__$1 = tmp30428;
var inst_30348__$1 = inst_30361;
var state_30405__$1 = (function (){var statearr_30432 = state_30405;
(statearr_30432[(10)] = inst_30348__$1);

(statearr_30432[(20)] = inst_30345__$1);

(statearr_30432[(12)] = inst_30346__$1);

(statearr_30432[(22)] = inst_30360);

(statearr_30432[(21)] = inst_30347__$1);

return statearr_30432;
})();
var statearr_30433_30507 = state_30405__$1;
(statearr_30433_30507[(2)] = null);

(statearr_30433_30507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (40))){
var inst_30373 = (state_30405[(23)]);
var inst_30377 = done.call(null,null);
var inst_30378 = cljs.core.async.untap_STAR_.call(null,m,inst_30373);
var state_30405__$1 = (function (){var statearr_30434 = state_30405;
(statearr_30434[(24)] = inst_30377);

return statearr_30434;
})();
var statearr_30435_30508 = state_30405__$1;
(statearr_30435_30508[(2)] = inst_30378);

(statearr_30435_30508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (33))){
var inst_30364 = (state_30405[(25)]);
var inst_30366 = cljs.core.chunked_seq_QMARK_.call(null,inst_30364);
var state_30405__$1 = state_30405;
if(inst_30366){
var statearr_30436_30509 = state_30405__$1;
(statearr_30436_30509[(1)] = (36));

} else {
var statearr_30437_30510 = state_30405__$1;
(statearr_30437_30510[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (13))){
var inst_30296 = (state_30405[(26)]);
var inst_30299 = cljs.core.async.close_BANG_.call(null,inst_30296);
var state_30405__$1 = state_30405;
var statearr_30438_30511 = state_30405__$1;
(statearr_30438_30511[(2)] = inst_30299);

(statearr_30438_30511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (22))){
var inst_30317 = (state_30405[(8)]);
var inst_30320 = cljs.core.async.close_BANG_.call(null,inst_30317);
var state_30405__$1 = state_30405;
var statearr_30439_30512 = state_30405__$1;
(statearr_30439_30512[(2)] = inst_30320);

(statearr_30439_30512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (36))){
var inst_30364 = (state_30405[(25)]);
var inst_30368 = cljs.core.chunk_first.call(null,inst_30364);
var inst_30369 = cljs.core.chunk_rest.call(null,inst_30364);
var inst_30370 = cljs.core.count.call(null,inst_30368);
var inst_30345 = inst_30369;
var inst_30346 = inst_30368;
var inst_30347 = inst_30370;
var inst_30348 = (0);
var state_30405__$1 = (function (){var statearr_30440 = state_30405;
(statearr_30440[(10)] = inst_30348);

(statearr_30440[(20)] = inst_30345);

(statearr_30440[(12)] = inst_30346);

(statearr_30440[(21)] = inst_30347);

return statearr_30440;
})();
var statearr_30441_30513 = state_30405__$1;
(statearr_30441_30513[(2)] = null);

(statearr_30441_30513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (41))){
var inst_30364 = (state_30405[(25)]);
var inst_30380 = (state_30405[(2)]);
var inst_30381 = cljs.core.next.call(null,inst_30364);
var inst_30345 = inst_30381;
var inst_30346 = null;
var inst_30347 = (0);
var inst_30348 = (0);
var state_30405__$1 = (function (){var statearr_30442 = state_30405;
(statearr_30442[(27)] = inst_30380);

(statearr_30442[(10)] = inst_30348);

(statearr_30442[(20)] = inst_30345);

(statearr_30442[(12)] = inst_30346);

(statearr_30442[(21)] = inst_30347);

return statearr_30442;
})();
var statearr_30443_30514 = state_30405__$1;
(statearr_30443_30514[(2)] = null);

(statearr_30443_30514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (43))){
var state_30405__$1 = state_30405;
var statearr_30444_30515 = state_30405__$1;
(statearr_30444_30515[(2)] = null);

(statearr_30444_30515[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (29))){
var inst_30389 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30445_30516 = state_30405__$1;
(statearr_30445_30516[(2)] = inst_30389);

(statearr_30445_30516[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (44))){
var inst_30398 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30446 = state_30405;
(statearr_30446[(28)] = inst_30398);

return statearr_30446;
})();
var statearr_30447_30517 = state_30405__$1;
(statearr_30447_30517[(2)] = null);

(statearr_30447_30517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (6))){
var inst_30337 = (state_30405[(29)]);
var inst_30336 = cljs.core.deref.call(null,cs);
var inst_30337__$1 = cljs.core.keys.call(null,inst_30336);
var inst_30338 = cljs.core.count.call(null,inst_30337__$1);
var inst_30339 = cljs.core.reset_BANG_.call(null,dctr,inst_30338);
var inst_30344 = cljs.core.seq.call(null,inst_30337__$1);
var inst_30345 = inst_30344;
var inst_30346 = null;
var inst_30347 = (0);
var inst_30348 = (0);
var state_30405__$1 = (function (){var statearr_30448 = state_30405;
(statearr_30448[(29)] = inst_30337__$1);

(statearr_30448[(30)] = inst_30339);

(statearr_30448[(10)] = inst_30348);

(statearr_30448[(20)] = inst_30345);

(statearr_30448[(12)] = inst_30346);

(statearr_30448[(21)] = inst_30347);

return statearr_30448;
})();
var statearr_30449_30518 = state_30405__$1;
(statearr_30449_30518[(2)] = null);

(statearr_30449_30518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (28))){
var inst_30345 = (state_30405[(20)]);
var inst_30364 = (state_30405[(25)]);
var inst_30364__$1 = cljs.core.seq.call(null,inst_30345);
var state_30405__$1 = (function (){var statearr_30450 = state_30405;
(statearr_30450[(25)] = inst_30364__$1);

return statearr_30450;
})();
if(inst_30364__$1){
var statearr_30451_30519 = state_30405__$1;
(statearr_30451_30519[(1)] = (33));

} else {
var statearr_30452_30520 = state_30405__$1;
(statearr_30452_30520[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (25))){
var inst_30348 = (state_30405[(10)]);
var inst_30347 = (state_30405[(21)]);
var inst_30350 = (inst_30348 < inst_30347);
var inst_30351 = inst_30350;
var state_30405__$1 = state_30405;
if(cljs.core.truth_(inst_30351)){
var statearr_30453_30521 = state_30405__$1;
(statearr_30453_30521[(1)] = (27));

} else {
var statearr_30454_30522 = state_30405__$1;
(statearr_30454_30522[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (34))){
var state_30405__$1 = state_30405;
var statearr_30455_30523 = state_30405__$1;
(statearr_30455_30523[(2)] = null);

(statearr_30455_30523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (17))){
var state_30405__$1 = state_30405;
var statearr_30456_30524 = state_30405__$1;
(statearr_30456_30524[(2)] = null);

(statearr_30456_30524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (3))){
var inst_30403 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (12))){
var inst_30332 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30457_30525 = state_30405__$1;
(statearr_30457_30525[(2)] = inst_30332);

(statearr_30457_30525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (2))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(4),ch);
} else {
if((state_val_30406 === (23))){
var state_30405__$1 = state_30405;
var statearr_30458_30526 = state_30405__$1;
(statearr_30458_30526[(2)] = null);

(statearr_30458_30526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (35))){
var inst_30387 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30459_30527 = state_30405__$1;
(statearr_30459_30527[(2)] = inst_30387);

(statearr_30459_30527[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (19))){
var inst_30306 = (state_30405[(7)]);
var inst_30310 = cljs.core.chunk_first.call(null,inst_30306);
var inst_30311 = cljs.core.chunk_rest.call(null,inst_30306);
var inst_30312 = cljs.core.count.call(null,inst_30310);
var inst_30286 = inst_30311;
var inst_30287 = inst_30310;
var inst_30288 = inst_30312;
var inst_30289 = (0);
var state_30405__$1 = (function (){var statearr_30460 = state_30405;
(statearr_30460[(13)] = inst_30287);

(statearr_30460[(15)] = inst_30288);

(statearr_30460[(16)] = inst_30289);

(statearr_30460[(17)] = inst_30286);

return statearr_30460;
})();
var statearr_30461_30528 = state_30405__$1;
(statearr_30461_30528[(2)] = null);

(statearr_30461_30528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (11))){
var inst_30306 = (state_30405[(7)]);
var inst_30286 = (state_30405[(17)]);
var inst_30306__$1 = cljs.core.seq.call(null,inst_30286);
var state_30405__$1 = (function (){var statearr_30462 = state_30405;
(statearr_30462[(7)] = inst_30306__$1);

return statearr_30462;
})();
if(inst_30306__$1){
var statearr_30463_30529 = state_30405__$1;
(statearr_30463_30529[(1)] = (16));

} else {
var statearr_30464_30530 = state_30405__$1;
(statearr_30464_30530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (9))){
var inst_30334 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30465_30531 = state_30405__$1;
(statearr_30465_30531[(2)] = inst_30334);

(statearr_30465_30531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var inst_30284 = cljs.core.deref.call(null,cs);
var inst_30285 = cljs.core.seq.call(null,inst_30284);
var inst_30286 = inst_30285;
var inst_30287 = null;
var inst_30288 = (0);
var inst_30289 = (0);
var state_30405__$1 = (function (){var statearr_30466 = state_30405;
(statearr_30466[(13)] = inst_30287);

(statearr_30466[(15)] = inst_30288);

(statearr_30466[(16)] = inst_30289);

(statearr_30466[(17)] = inst_30286);

return statearr_30466;
})();
var statearr_30467_30532 = state_30405__$1;
(statearr_30467_30532[(2)] = null);

(statearr_30467_30532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (14))){
var state_30405__$1 = state_30405;
var statearr_30468_30533 = state_30405__$1;
(statearr_30468_30533[(2)] = null);

(statearr_30468_30533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (45))){
var inst_30395 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30469_30534 = state_30405__$1;
(statearr_30469_30534[(2)] = inst_30395);

(statearr_30469_30534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (26))){
var inst_30337 = (state_30405[(29)]);
var inst_30391 = (state_30405[(2)]);
var inst_30392 = cljs.core.seq.call(null,inst_30337);
var state_30405__$1 = (function (){var statearr_30470 = state_30405;
(statearr_30470[(31)] = inst_30391);

return statearr_30470;
})();
if(inst_30392){
var statearr_30471_30535 = state_30405__$1;
(statearr_30471_30535[(1)] = (42));

} else {
var statearr_30472_30536 = state_30405__$1;
(statearr_30472_30536[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (16))){
var inst_30306 = (state_30405[(7)]);
var inst_30308 = cljs.core.chunked_seq_QMARK_.call(null,inst_30306);
var state_30405__$1 = state_30405;
if(inst_30308){
var statearr_30473_30537 = state_30405__$1;
(statearr_30473_30537[(1)] = (19));

} else {
var statearr_30474_30538 = state_30405__$1;
(statearr_30474_30538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (38))){
var inst_30384 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30475_30539 = state_30405__$1;
(statearr_30475_30539[(2)] = inst_30384);

(statearr_30475_30539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (30))){
var state_30405__$1 = state_30405;
var statearr_30476_30540 = state_30405__$1;
(statearr_30476_30540[(2)] = null);

(statearr_30476_30540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (10))){
var inst_30287 = (state_30405[(13)]);
var inst_30289 = (state_30405[(16)]);
var inst_30295 = cljs.core._nth.call(null,inst_30287,inst_30289);
var inst_30296 = cljs.core.nth.call(null,inst_30295,(0),null);
var inst_30297 = cljs.core.nth.call(null,inst_30295,(1),null);
var state_30405__$1 = (function (){var statearr_30477 = state_30405;
(statearr_30477[(26)] = inst_30296);

return statearr_30477;
})();
if(cljs.core.truth_(inst_30297)){
var statearr_30478_30541 = state_30405__$1;
(statearr_30478_30541[(1)] = (13));

} else {
var statearr_30479_30542 = state_30405__$1;
(statearr_30479_30542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (18))){
var inst_30330 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30480_30543 = state_30405__$1;
(statearr_30480_30543[(2)] = inst_30330);

(statearr_30480_30543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (42))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(45),dchan);
} else {
if((state_val_30406 === (37))){
var inst_30277 = (state_30405[(9)]);
var inst_30364 = (state_30405[(25)]);
var inst_30373 = (state_30405[(23)]);
var inst_30373__$1 = cljs.core.first.call(null,inst_30364);
var inst_30374 = cljs.core.async.put_BANG_.call(null,inst_30373__$1,inst_30277,done);
var state_30405__$1 = (function (){var statearr_30481 = state_30405;
(statearr_30481[(23)] = inst_30373__$1);

return statearr_30481;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30482_30544 = state_30405__$1;
(statearr_30482_30544[(1)] = (39));

} else {
var statearr_30483_30545 = state_30405__$1;
(statearr_30483_30545[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (8))){
var inst_30288 = (state_30405[(15)]);
var inst_30289 = (state_30405[(16)]);
var inst_30291 = (inst_30289 < inst_30288);
var inst_30292 = inst_30291;
var state_30405__$1 = state_30405;
if(cljs.core.truth_(inst_30292)){
var statearr_30484_30546 = state_30405__$1;
(statearr_30484_30546[(1)] = (10));

} else {
var statearr_30485_30547 = state_30405__$1;
(statearr_30485_30547[(1)] = (11));

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
});})(c__5869__auto___30493,cs,m,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___30493,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = state_machine__5855__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var state_machine__5855__auto____1 = (function (state_30405){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_30405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e30490){if((e30490 instanceof Object)){
var ex__5858__auto__ = e30490;
var statearr_30491_30548 = state_30405;
(statearr_30491_30548[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_30405;
state_30405 = G__30549;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___30493,cs,m,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_30492 = f__5870__auto__.call(null);
(statearr_30492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___30493);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___30493,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj30551 = {};
return obj30551;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30552){
var map__30557 = p__30552;
var map__30557__$1 = ((cljs.core.seq_QMARK_.call(null,map__30557))?cljs.core.apply.call(null,cljs.core.hash_map,map__30557):map__30557);
var opts = map__30557__$1;
var statearr_30558_30561 = state;
(statearr_30558_30561[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30557,map__30557__$1,opts){
return (function (val){
var statearr_30559_30562 = state;
(statearr_30559_30562[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30557,map__30557__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30560_30563 = state;
(statearr_30560_30563[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30552 = null;
if (arguments.length > 3) {
  p__30552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30552);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30564){
var state = cljs.core.first(arglist__30564);
arglist__30564 = cljs.core.next(arglist__30564);
var cont_block = cljs.core.first(arglist__30564);
arglist__30564 = cljs.core.next(arglist__30564);
var ports = cljs.core.first(arglist__30564);
var p__30552 = cljs.core.rest(arglist__30564);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30552);
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
if(typeof cljs.core.async.t30684 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30684 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30685){
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
this.meta30685 = meta30685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30684.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30684.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30684.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30686){
var self__ = this;
var _30686__$1 = this;
return self__.meta30685;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30686,meta30685__$1){
var self__ = this;
var _30686__$1 = this;
return (new cljs.core.async.t30684(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30685__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30684.cljs$lang$type = true;

cljs.core.async.t30684.cljs$lang$ctorStr = "cljs.core.async/t30684";

cljs.core.async.t30684.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t30684");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30684 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30684(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30685){
return (new cljs.core.async.t30684(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30685));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30684(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___30803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30756){
var state_val_30757 = (state_30756[(1)]);
if((state_val_30757 === (7))){
var inst_30700 = (state_30756[(7)]);
var inst_30705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30700);
var state_30756__$1 = state_30756;
var statearr_30758_30804 = state_30756__$1;
(statearr_30758_30804[(2)] = inst_30705);

(statearr_30758_30804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (20))){
var inst_30715 = (state_30756[(8)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30756__$1,(23),out,inst_30715);
} else {
if((state_val_30757 === (1))){
var inst_30690 = (state_30756[(9)]);
var inst_30690__$1 = calc_state.call(null);
var inst_30691 = cljs.core.seq_QMARK_.call(null,inst_30690__$1);
var state_30756__$1 = (function (){var statearr_30759 = state_30756;
(statearr_30759[(9)] = inst_30690__$1);

return statearr_30759;
})();
if(inst_30691){
var statearr_30760_30805 = state_30756__$1;
(statearr_30760_30805[(1)] = (2));

} else {
var statearr_30761_30806 = state_30756__$1;
(statearr_30761_30806[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (24))){
var inst_30708 = (state_30756[(10)]);
var inst_30700 = inst_30708;
var state_30756__$1 = (function (){var statearr_30762 = state_30756;
(statearr_30762[(7)] = inst_30700);

return statearr_30762;
})();
var statearr_30763_30807 = state_30756__$1;
(statearr_30763_30807[(2)] = null);

(statearr_30763_30807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (4))){
var inst_30690 = (state_30756[(9)]);
var inst_30696 = (state_30756[(2)]);
var inst_30697 = cljs.core.get.call(null,inst_30696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30698 = cljs.core.get.call(null,inst_30696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30699 = cljs.core.get.call(null,inst_30696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30700 = inst_30690;
var state_30756__$1 = (function (){var statearr_30764 = state_30756;
(statearr_30764[(11)] = inst_30697);

(statearr_30764[(12)] = inst_30698);

(statearr_30764[(13)] = inst_30699);

(statearr_30764[(7)] = inst_30700);

return statearr_30764;
})();
var statearr_30765_30808 = state_30756__$1;
(statearr_30765_30808[(2)] = null);

(statearr_30765_30808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (15))){
var state_30756__$1 = state_30756;
var statearr_30766_30809 = state_30756__$1;
(statearr_30766_30809[(2)] = null);

(statearr_30766_30809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (21))){
var inst_30708 = (state_30756[(10)]);
var inst_30700 = inst_30708;
var state_30756__$1 = (function (){var statearr_30767 = state_30756;
(statearr_30767[(7)] = inst_30700);

return statearr_30767;
})();
var statearr_30768_30810 = state_30756__$1;
(statearr_30768_30810[(2)] = null);

(statearr_30768_30810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (13))){
var inst_30752 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30769_30811 = state_30756__$1;
(statearr_30769_30811[(2)] = inst_30752);

(statearr_30769_30811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (22))){
var inst_30750 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30770_30812 = state_30756__$1;
(statearr_30770_30812[(2)] = inst_30750);

(statearr_30770_30812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (6))){
var inst_30754 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30756__$1,inst_30754);
} else {
if((state_val_30757 === (25))){
var state_30756__$1 = state_30756;
var statearr_30771_30813 = state_30756__$1;
(statearr_30771_30813[(2)] = null);

(statearr_30771_30813[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (17))){
var inst_30730 = (state_30756[(14)]);
var state_30756__$1 = state_30756;
var statearr_30772_30814 = state_30756__$1;
(statearr_30772_30814[(2)] = inst_30730);

(statearr_30772_30814[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (3))){
var inst_30690 = (state_30756[(9)]);
var state_30756__$1 = state_30756;
var statearr_30773_30815 = state_30756__$1;
(statearr_30773_30815[(2)] = inst_30690);

(statearr_30773_30815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (12))){
var inst_30711 = (state_30756[(15)]);
var inst_30730 = (state_30756[(14)]);
var inst_30716 = (state_30756[(16)]);
var inst_30730__$1 = inst_30711.call(null,inst_30716);
var state_30756__$1 = (function (){var statearr_30774 = state_30756;
(statearr_30774[(14)] = inst_30730__$1);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30730__$1)){
var statearr_30775_30816 = state_30756__$1;
(statearr_30775_30816[(1)] = (17));

} else {
var statearr_30776_30817 = state_30756__$1;
(statearr_30776_30817[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (2))){
var inst_30690 = (state_30756[(9)]);
var inst_30693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30690);
var state_30756__$1 = state_30756;
var statearr_30777_30818 = state_30756__$1;
(statearr_30777_30818[(2)] = inst_30693);

(statearr_30777_30818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (23))){
var inst_30741 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30741)){
var statearr_30778_30819 = state_30756__$1;
(statearr_30778_30819[(1)] = (24));

} else {
var statearr_30779_30820 = state_30756__$1;
(statearr_30779_30820[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (19))){
var inst_30738 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30738)){
var statearr_30780_30821 = state_30756__$1;
(statearr_30780_30821[(1)] = (20));

} else {
var statearr_30781_30822 = state_30756__$1;
(statearr_30781_30822[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (11))){
var inst_30715 = (state_30756[(8)]);
var inst_30721 = (inst_30715 == null);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30721)){
var statearr_30782_30823 = state_30756__$1;
(statearr_30782_30823[(1)] = (14));

} else {
var statearr_30783_30824 = state_30756__$1;
(statearr_30783_30824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (9))){
var inst_30708 = (state_30756[(10)]);
var inst_30708__$1 = (state_30756[(2)]);
var inst_30709 = cljs.core.get.call(null,inst_30708__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30710 = cljs.core.get.call(null,inst_30708__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30711 = cljs.core.get.call(null,inst_30708__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30756__$1 = (function (){var statearr_30784 = state_30756;
(statearr_30784[(15)] = inst_30711);

(statearr_30784[(17)] = inst_30710);

(statearr_30784[(10)] = inst_30708__$1);

return statearr_30784;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30756__$1,(10),inst_30709);
} else {
if((state_val_30757 === (5))){
var inst_30700 = (state_30756[(7)]);
var inst_30703 = cljs.core.seq_QMARK_.call(null,inst_30700);
var state_30756__$1 = state_30756;
if(inst_30703){
var statearr_30785_30825 = state_30756__$1;
(statearr_30785_30825[(1)] = (7));

} else {
var statearr_30786_30826 = state_30756__$1;
(statearr_30786_30826[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (14))){
var inst_30716 = (state_30756[(16)]);
var inst_30723 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30716);
var state_30756__$1 = state_30756;
var statearr_30787_30827 = state_30756__$1;
(statearr_30787_30827[(2)] = inst_30723);

(statearr_30787_30827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (26))){
var inst_30746 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30788_30828 = state_30756__$1;
(statearr_30788_30828[(2)] = inst_30746);

(statearr_30788_30828[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (16))){
var inst_30726 = (state_30756[(2)]);
var inst_30727 = calc_state.call(null);
var inst_30700 = inst_30727;
var state_30756__$1 = (function (){var statearr_30789 = state_30756;
(statearr_30789[(18)] = inst_30726);

(statearr_30789[(7)] = inst_30700);

return statearr_30789;
})();
var statearr_30790_30829 = state_30756__$1;
(statearr_30790_30829[(2)] = null);

(statearr_30790_30829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (10))){
var inst_30715 = (state_30756[(8)]);
var inst_30716 = (state_30756[(16)]);
var inst_30714 = (state_30756[(2)]);
var inst_30715__$1 = cljs.core.nth.call(null,inst_30714,(0),null);
var inst_30716__$1 = cljs.core.nth.call(null,inst_30714,(1),null);
var inst_30717 = (inst_30715__$1 == null);
var inst_30718 = cljs.core._EQ_.call(null,inst_30716__$1,change);
var inst_30719 = (inst_30717) || (inst_30718);
var state_30756__$1 = (function (){var statearr_30791 = state_30756;
(statearr_30791[(8)] = inst_30715__$1);

(statearr_30791[(16)] = inst_30716__$1);

return statearr_30791;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30792_30830 = state_30756__$1;
(statearr_30792_30830[(1)] = (11));

} else {
var statearr_30793_30831 = state_30756__$1;
(statearr_30793_30831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (18))){
var inst_30711 = (state_30756[(15)]);
var inst_30710 = (state_30756[(17)]);
var inst_30716 = (state_30756[(16)]);
var inst_30733 = cljs.core.empty_QMARK_.call(null,inst_30711);
var inst_30734 = inst_30710.call(null,inst_30716);
var inst_30735 = cljs.core.not.call(null,inst_30734);
var inst_30736 = (inst_30733) && (inst_30735);
var state_30756__$1 = state_30756;
var statearr_30794_30832 = state_30756__$1;
(statearr_30794_30832[(2)] = inst_30736);

(statearr_30794_30832[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (8))){
var inst_30700 = (state_30756[(7)]);
var state_30756__$1 = state_30756;
var statearr_30795_30833 = state_30756__$1;
(statearr_30795_30833[(2)] = inst_30700);

(statearr_30795_30833[(1)] = (9));


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
});})(c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5854__auto__,c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_30799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30799[(0)] = state_machine__5855__auto__);

(statearr_30799[(1)] = (1));

return statearr_30799;
});
var state_machine__5855__auto____1 = (function (state_30756){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_30756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e30800){if((e30800 instanceof Object)){
var ex__5858__auto__ = e30800;
var statearr_30801_30834 = state_30756;
(statearr_30801_30834[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30756;
state_30756 = G__30835;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5871__auto__ = (function (){var statearr_30802 = f__5870__auto__.call(null);
(statearr_30802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___30803);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___30803,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30837 = {};
return obj30837;
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
return (function (p1__30838_SHARP_){
if(cljs.core.truth_(p1__30838_SHARP_.call(null,topic))){
return p1__30838_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30838_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30961 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30962){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30962 = meta30962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30961.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30961.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30961.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30961.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30963){
var self__ = this;
var _30963__$1 = this;
return self__.meta30962;
});})(mults,ensure_mult))
;

cljs.core.async.t30961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30963,meta30962__$1){
var self__ = this;
var _30963__$1 = this;
return (new cljs.core.async.t30961(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30962__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30961.cljs$lang$type = true;

cljs.core.async.t30961.cljs$lang$ctorStr = "cljs.core.async/t30961";

cljs.core.async.t30961.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t30961");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30961 = ((function (mults,ensure_mult){
return (function __GT_t30961(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30962){
return (new cljs.core.async.t30961(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30962));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30961(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___31083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31083,mults,ensure_mult,p){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31083,mults,ensure_mult,p){
return (function (state_31035){
var state_val_31036 = (state_31035[(1)]);
if((state_val_31036 === (7))){
var inst_31031 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31037_31084 = state_31035__$1;
(statearr_31037_31084[(2)] = inst_31031);

(statearr_31037_31084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (20))){
var state_31035__$1 = state_31035;
var statearr_31038_31085 = state_31035__$1;
(statearr_31038_31085[(2)] = null);

(statearr_31038_31085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (1))){
var state_31035__$1 = state_31035;
var statearr_31039_31086 = state_31035__$1;
(statearr_31039_31086[(2)] = null);

(statearr_31039_31086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (24))){
var inst_31014 = (state_31035[(7)]);
var inst_31023 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31014);
var state_31035__$1 = state_31035;
var statearr_31040_31087 = state_31035__$1;
(statearr_31040_31087[(2)] = inst_31023);

(statearr_31040_31087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (4))){
var inst_30966 = (state_31035[(8)]);
var inst_30966__$1 = (state_31035[(2)]);
var inst_30967 = (inst_30966__$1 == null);
var state_31035__$1 = (function (){var statearr_31041 = state_31035;
(statearr_31041[(8)] = inst_30966__$1);

return statearr_31041;
})();
if(cljs.core.truth_(inst_30967)){
var statearr_31042_31088 = state_31035__$1;
(statearr_31042_31088[(1)] = (5));

} else {
var statearr_31043_31089 = state_31035__$1;
(statearr_31043_31089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (15))){
var inst_31008 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31044_31090 = state_31035__$1;
(statearr_31044_31090[(2)] = inst_31008);

(statearr_31044_31090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (21))){
var inst_31028 = (state_31035[(2)]);
var state_31035__$1 = (function (){var statearr_31045 = state_31035;
(statearr_31045[(9)] = inst_31028);

return statearr_31045;
})();
var statearr_31046_31091 = state_31035__$1;
(statearr_31046_31091[(2)] = null);

(statearr_31046_31091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (13))){
var inst_30990 = (state_31035[(10)]);
var inst_30992 = cljs.core.chunked_seq_QMARK_.call(null,inst_30990);
var state_31035__$1 = state_31035;
if(inst_30992){
var statearr_31047_31092 = state_31035__$1;
(statearr_31047_31092[(1)] = (16));

} else {
var statearr_31048_31093 = state_31035__$1;
(statearr_31048_31093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (22))){
var inst_31020 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_31020)){
var statearr_31049_31094 = state_31035__$1;
(statearr_31049_31094[(1)] = (23));

} else {
var statearr_31050_31095 = state_31035__$1;
(statearr_31050_31095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (6))){
var inst_30966 = (state_31035[(8)]);
var inst_31014 = (state_31035[(7)]);
var inst_31016 = (state_31035[(11)]);
var inst_31014__$1 = topic_fn.call(null,inst_30966);
var inst_31015 = cljs.core.deref.call(null,mults);
var inst_31016__$1 = cljs.core.get.call(null,inst_31015,inst_31014__$1);
var state_31035__$1 = (function (){var statearr_31051 = state_31035;
(statearr_31051[(7)] = inst_31014__$1);

(statearr_31051[(11)] = inst_31016__$1);

return statearr_31051;
})();
if(cljs.core.truth_(inst_31016__$1)){
var statearr_31052_31096 = state_31035__$1;
(statearr_31052_31096[(1)] = (19));

} else {
var statearr_31053_31097 = state_31035__$1;
(statearr_31053_31097[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (25))){
var inst_31025 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31054_31098 = state_31035__$1;
(statearr_31054_31098[(2)] = inst_31025);

(statearr_31054_31098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (17))){
var inst_30990 = (state_31035[(10)]);
var inst_30999 = cljs.core.first.call(null,inst_30990);
var inst_31000 = cljs.core.async.muxch_STAR_.call(null,inst_30999);
var inst_31001 = cljs.core.async.close_BANG_.call(null,inst_31000);
var inst_31002 = cljs.core.next.call(null,inst_30990);
var inst_30976 = inst_31002;
var inst_30977 = null;
var inst_30978 = (0);
var inst_30979 = (0);
var state_31035__$1 = (function (){var statearr_31055 = state_31035;
(statearr_31055[(12)] = inst_30978);

(statearr_31055[(13)] = inst_30977);

(statearr_31055[(14)] = inst_30976);

(statearr_31055[(15)] = inst_30979);

(statearr_31055[(16)] = inst_31001);

return statearr_31055;
})();
var statearr_31056_31099 = state_31035__$1;
(statearr_31056_31099[(2)] = null);

(statearr_31056_31099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (3))){
var inst_31033 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31035__$1,inst_31033);
} else {
if((state_val_31036 === (12))){
var inst_31010 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31057_31100 = state_31035__$1;
(statearr_31057_31100[(2)] = inst_31010);

(statearr_31057_31100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (2))){
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31035__$1,(4),ch);
} else {
if((state_val_31036 === (23))){
var state_31035__$1 = state_31035;
var statearr_31058_31101 = state_31035__$1;
(statearr_31058_31101[(2)] = null);

(statearr_31058_31101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (19))){
var inst_30966 = (state_31035[(8)]);
var inst_31016 = (state_31035[(11)]);
var inst_31018 = cljs.core.async.muxch_STAR_.call(null,inst_31016);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31035__$1,(22),inst_31018,inst_30966);
} else {
if((state_val_31036 === (11))){
var inst_30990 = (state_31035[(10)]);
var inst_30976 = (state_31035[(14)]);
var inst_30990__$1 = cljs.core.seq.call(null,inst_30976);
var state_31035__$1 = (function (){var statearr_31059 = state_31035;
(statearr_31059[(10)] = inst_30990__$1);

return statearr_31059;
})();
if(inst_30990__$1){
var statearr_31060_31102 = state_31035__$1;
(statearr_31060_31102[(1)] = (13));

} else {
var statearr_31061_31103 = state_31035__$1;
(statearr_31061_31103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (9))){
var inst_31012 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31062_31104 = state_31035__$1;
(statearr_31062_31104[(2)] = inst_31012);

(statearr_31062_31104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (5))){
var inst_30973 = cljs.core.deref.call(null,mults);
var inst_30974 = cljs.core.vals.call(null,inst_30973);
var inst_30975 = cljs.core.seq.call(null,inst_30974);
var inst_30976 = inst_30975;
var inst_30977 = null;
var inst_30978 = (0);
var inst_30979 = (0);
var state_31035__$1 = (function (){var statearr_31063 = state_31035;
(statearr_31063[(12)] = inst_30978);

(statearr_31063[(13)] = inst_30977);

(statearr_31063[(14)] = inst_30976);

(statearr_31063[(15)] = inst_30979);

return statearr_31063;
})();
var statearr_31064_31105 = state_31035__$1;
(statearr_31064_31105[(2)] = null);

(statearr_31064_31105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (14))){
var state_31035__$1 = state_31035;
var statearr_31068_31106 = state_31035__$1;
(statearr_31068_31106[(2)] = null);

(statearr_31068_31106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (16))){
var inst_30990 = (state_31035[(10)]);
var inst_30994 = cljs.core.chunk_first.call(null,inst_30990);
var inst_30995 = cljs.core.chunk_rest.call(null,inst_30990);
var inst_30996 = cljs.core.count.call(null,inst_30994);
var inst_30976 = inst_30995;
var inst_30977 = inst_30994;
var inst_30978 = inst_30996;
var inst_30979 = (0);
var state_31035__$1 = (function (){var statearr_31069 = state_31035;
(statearr_31069[(12)] = inst_30978);

(statearr_31069[(13)] = inst_30977);

(statearr_31069[(14)] = inst_30976);

(statearr_31069[(15)] = inst_30979);

return statearr_31069;
})();
var statearr_31070_31107 = state_31035__$1;
(statearr_31070_31107[(2)] = null);

(statearr_31070_31107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (10))){
var inst_30978 = (state_31035[(12)]);
var inst_30977 = (state_31035[(13)]);
var inst_30976 = (state_31035[(14)]);
var inst_30979 = (state_31035[(15)]);
var inst_30984 = cljs.core._nth.call(null,inst_30977,inst_30979);
var inst_30985 = cljs.core.async.muxch_STAR_.call(null,inst_30984);
var inst_30986 = cljs.core.async.close_BANG_.call(null,inst_30985);
var inst_30987 = (inst_30979 + (1));
var tmp31065 = inst_30978;
var tmp31066 = inst_30977;
var tmp31067 = inst_30976;
var inst_30976__$1 = tmp31067;
var inst_30977__$1 = tmp31066;
var inst_30978__$1 = tmp31065;
var inst_30979__$1 = inst_30987;
var state_31035__$1 = (function (){var statearr_31071 = state_31035;
(statearr_31071[(12)] = inst_30978__$1);

(statearr_31071[(13)] = inst_30977__$1);

(statearr_31071[(14)] = inst_30976__$1);

(statearr_31071[(17)] = inst_30986);

(statearr_31071[(15)] = inst_30979__$1);

return statearr_31071;
})();
var statearr_31072_31108 = state_31035__$1;
(statearr_31072_31108[(2)] = null);

(statearr_31072_31108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (18))){
var inst_31005 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31073_31109 = state_31035__$1;
(statearr_31073_31109[(2)] = inst_31005);

(statearr_31073_31109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (8))){
var inst_30978 = (state_31035[(12)]);
var inst_30979 = (state_31035[(15)]);
var inst_30981 = (inst_30979 < inst_30978);
var inst_30982 = inst_30981;
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_30982)){
var statearr_31074_31110 = state_31035__$1;
(statearr_31074_31110[(1)] = (10));

} else {
var statearr_31075_31111 = state_31035__$1;
(statearr_31075_31111[(1)] = (11));

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
});})(c__5869__auto___31083,mults,ensure_mult,p))
;
return ((function (switch__5854__auto__,c__5869__auto___31083,mults,ensure_mult,p){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31079[(0)] = state_machine__5855__auto__);

(statearr_31079[(1)] = (1));

return statearr_31079;
});
var state_machine__5855__auto____1 = (function (state_31035){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31080){if((e31080 instanceof Object)){
var ex__5858__auto__ = e31080;
var statearr_31081_31112 = state_31035;
(statearr_31081_31112[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31113 = state_31035;
state_31035 = G__31113;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31035){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31083,mults,ensure_mult,p))
})();
var state__5871__auto__ = (function (){var statearr_31082 = f__5870__auto__.call(null);
(statearr_31082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31083);

return statearr_31082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31083,mults,ensure_mult,p))
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
var c__5869__auto___31250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (7))){
var state_31220__$1 = state_31220;
var statearr_31222_31251 = state_31220__$1;
(statearr_31222_31251[(2)] = null);

(statearr_31222_31251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (1))){
var state_31220__$1 = state_31220;
var statearr_31223_31252 = state_31220__$1;
(statearr_31223_31252[(2)] = null);

(statearr_31223_31252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (4))){
var inst_31184 = (state_31220[(7)]);
var inst_31186 = (inst_31184 < cnt);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31186)){
var statearr_31224_31253 = state_31220__$1;
(statearr_31224_31253[(1)] = (6));

} else {
var statearr_31225_31254 = state_31220__$1;
(statearr_31225_31254[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (15))){
var inst_31216 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31226_31255 = state_31220__$1;
(statearr_31226_31255[(2)] = inst_31216);

(statearr_31226_31255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (13))){
var inst_31209 = cljs.core.async.close_BANG_.call(null,out);
var state_31220__$1 = state_31220;
var statearr_31227_31256 = state_31220__$1;
(statearr_31227_31256[(2)] = inst_31209);

(statearr_31227_31256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (6))){
var state_31220__$1 = state_31220;
var statearr_31228_31257 = state_31220__$1;
(statearr_31228_31257[(2)] = null);

(statearr_31228_31257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (3))){
var inst_31218 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31220__$1,inst_31218);
} else {
if((state_val_31221 === (12))){
var inst_31206 = (state_31220[(8)]);
var inst_31206__$1 = (state_31220[(2)]);
var inst_31207 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31206__$1);
var state_31220__$1 = (function (){var statearr_31229 = state_31220;
(statearr_31229[(8)] = inst_31206__$1);

return statearr_31229;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31230_31258 = state_31220__$1;
(statearr_31230_31258[(1)] = (13));

} else {
var statearr_31231_31259 = state_31220__$1;
(statearr_31231_31259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (2))){
var inst_31183 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31184 = (0);
var state_31220__$1 = (function (){var statearr_31232 = state_31220;
(statearr_31232[(9)] = inst_31183);

(statearr_31232[(7)] = inst_31184);

return statearr_31232;
})();
var statearr_31233_31260 = state_31220__$1;
(statearr_31233_31260[(2)] = null);

(statearr_31233_31260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (11))){
var inst_31184 = (state_31220[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31220,(10),Object,null,(9));
var inst_31193 = chs__$1.call(null,inst_31184);
var inst_31194 = done.call(null,inst_31184);
var inst_31195 = cljs.core.async.take_BANG_.call(null,inst_31193,inst_31194);
var state_31220__$1 = state_31220;
var statearr_31234_31261 = state_31220__$1;
(statearr_31234_31261[(2)] = inst_31195);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (9))){
var inst_31184 = (state_31220[(7)]);
var inst_31197 = (state_31220[(2)]);
var inst_31198 = (inst_31184 + (1));
var inst_31184__$1 = inst_31198;
var state_31220__$1 = (function (){var statearr_31235 = state_31220;
(statearr_31235[(10)] = inst_31197);

(statearr_31235[(7)] = inst_31184__$1);

return statearr_31235;
})();
var statearr_31236_31262 = state_31220__$1;
(statearr_31236_31262[(2)] = null);

(statearr_31236_31262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (5))){
var inst_31204 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31237 = state_31220;
(statearr_31237[(11)] = inst_31204);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31220__$1,(12),dchan);
} else {
if((state_val_31221 === (14))){
var inst_31206 = (state_31220[(8)]);
var inst_31211 = cljs.core.apply.call(null,f,inst_31206);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31220__$1,(16),out,inst_31211);
} else {
if((state_val_31221 === (16))){
var inst_31213 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31238 = state_31220;
(statearr_31238[(12)] = inst_31213);

return statearr_31238;
})();
var statearr_31239_31263 = state_31220__$1;
(statearr_31239_31263[(2)] = null);

(statearr_31239_31263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (10))){
var inst_31188 = (state_31220[(2)]);
var inst_31189 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31220__$1 = (function (){var statearr_31240 = state_31220;
(statearr_31240[(13)] = inst_31188);

return statearr_31240;
})();
var statearr_31241_31264 = state_31220__$1;
(statearr_31241_31264[(2)] = inst_31189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (8))){
var inst_31202 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31242_31265 = state_31220__$1;
(statearr_31242_31265[(2)] = inst_31202);

(statearr_31242_31265[(1)] = (5));


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
});})(c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = state_machine__5855__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var state_machine__5855__auto____1 = (function (state_31220){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__5858__auto__ = e31247;
var statearr_31248_31266 = state_31220;
(statearr_31248_31266[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31267 = state_31220;
state_31220 = G__31267;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_31249 = f__5870__auto__.call(null);
(statearr_31249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31250);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31250,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5869__auto___31375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31375,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31375,out){
return (function (state_31351){
var state_val_31352 = (state_31351[(1)]);
if((state_val_31352 === (7))){
var inst_31330 = (state_31351[(7)]);
var inst_31331 = (state_31351[(8)]);
var inst_31330__$1 = (state_31351[(2)]);
var inst_31331__$1 = cljs.core.nth.call(null,inst_31330__$1,(0),null);
var inst_31332 = cljs.core.nth.call(null,inst_31330__$1,(1),null);
var inst_31333 = (inst_31331__$1 == null);
var state_31351__$1 = (function (){var statearr_31353 = state_31351;
(statearr_31353[(7)] = inst_31330__$1);

(statearr_31353[(8)] = inst_31331__$1);

(statearr_31353[(9)] = inst_31332);

return statearr_31353;
})();
if(cljs.core.truth_(inst_31333)){
var statearr_31354_31376 = state_31351__$1;
(statearr_31354_31376[(1)] = (8));

} else {
var statearr_31355_31377 = state_31351__$1;
(statearr_31355_31377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (1))){
var inst_31322 = cljs.core.vec.call(null,chs);
var inst_31323 = inst_31322;
var state_31351__$1 = (function (){var statearr_31356 = state_31351;
(statearr_31356[(10)] = inst_31323);

return statearr_31356;
})();
var statearr_31357_31378 = state_31351__$1;
(statearr_31357_31378[(2)] = null);

(statearr_31357_31378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (4))){
var inst_31323 = (state_31351[(10)]);
var state_31351__$1 = state_31351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31351__$1,(7),inst_31323);
} else {
if((state_val_31352 === (6))){
var inst_31347 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31358_31379 = state_31351__$1;
(statearr_31358_31379[(2)] = inst_31347);

(statearr_31358_31379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (3))){
var inst_31349 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31351__$1,inst_31349);
} else {
if((state_val_31352 === (2))){
var inst_31323 = (state_31351[(10)]);
var inst_31325 = cljs.core.count.call(null,inst_31323);
var inst_31326 = (inst_31325 > (0));
var state_31351__$1 = state_31351;
if(cljs.core.truth_(inst_31326)){
var statearr_31360_31380 = state_31351__$1;
(statearr_31360_31380[(1)] = (4));

} else {
var statearr_31361_31381 = state_31351__$1;
(statearr_31361_31381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (11))){
var inst_31323 = (state_31351[(10)]);
var inst_31340 = (state_31351[(2)]);
var tmp31359 = inst_31323;
var inst_31323__$1 = tmp31359;
var state_31351__$1 = (function (){var statearr_31362 = state_31351;
(statearr_31362[(10)] = inst_31323__$1);

(statearr_31362[(11)] = inst_31340);

return statearr_31362;
})();
var statearr_31363_31382 = state_31351__$1;
(statearr_31363_31382[(2)] = null);

(statearr_31363_31382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (9))){
var inst_31331 = (state_31351[(8)]);
var state_31351__$1 = state_31351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31351__$1,(11),out,inst_31331);
} else {
if((state_val_31352 === (5))){
var inst_31345 = cljs.core.async.close_BANG_.call(null,out);
var state_31351__$1 = state_31351;
var statearr_31364_31383 = state_31351__$1;
(statearr_31364_31383[(2)] = inst_31345);

(statearr_31364_31383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (10))){
var inst_31343 = (state_31351[(2)]);
var state_31351__$1 = state_31351;
var statearr_31365_31384 = state_31351__$1;
(statearr_31365_31384[(2)] = inst_31343);

(statearr_31365_31384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31352 === (8))){
var inst_31330 = (state_31351[(7)]);
var inst_31323 = (state_31351[(10)]);
var inst_31331 = (state_31351[(8)]);
var inst_31332 = (state_31351[(9)]);
var inst_31335 = (function (){var c = inst_31332;
var v = inst_31331;
var vec__31328 = inst_31330;
var cs = inst_31323;
return ((function (c,v,vec__31328,cs,inst_31330,inst_31323,inst_31331,inst_31332,state_val_31352,c__5869__auto___31375,out){
return (function (p1__31268_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31268_SHARP_);
});
;})(c,v,vec__31328,cs,inst_31330,inst_31323,inst_31331,inst_31332,state_val_31352,c__5869__auto___31375,out))
})();
var inst_31336 = cljs.core.filterv.call(null,inst_31335,inst_31323);
var inst_31323__$1 = inst_31336;
var state_31351__$1 = (function (){var statearr_31366 = state_31351;
(statearr_31366[(10)] = inst_31323__$1);

return statearr_31366;
})();
var statearr_31367_31385 = state_31351__$1;
(statearr_31367_31385[(2)] = null);

(statearr_31367_31385[(1)] = (2));


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
});})(c__5869__auto___31375,out))
;
return ((function (switch__5854__auto__,c__5869__auto___31375,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = state_machine__5855__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var state_machine__5855__auto____1 = (function (state_31351){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31372){if((e31372 instanceof Object)){
var ex__5858__auto__ = e31372;
var statearr_31373_31386 = state_31351;
(statearr_31373_31386[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31387 = state_31351;
state_31351 = G__31387;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31351){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31375,out))
})();
var state__5871__auto__ = (function (){var statearr_31374 = f__5870__auto__.call(null);
(statearr_31374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31375);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31375,out))
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
var c__5869__auto___31480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31480,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31480,out){
return (function (state_31457){
var state_val_31458 = (state_31457[(1)]);
if((state_val_31458 === (7))){
var inst_31439 = (state_31457[(7)]);
var inst_31439__$1 = (state_31457[(2)]);
var inst_31440 = (inst_31439__$1 == null);
var inst_31441 = cljs.core.not.call(null,inst_31440);
var state_31457__$1 = (function (){var statearr_31459 = state_31457;
(statearr_31459[(7)] = inst_31439__$1);

return statearr_31459;
})();
if(inst_31441){
var statearr_31460_31481 = state_31457__$1;
(statearr_31460_31481[(1)] = (8));

} else {
var statearr_31461_31482 = state_31457__$1;
(statearr_31461_31482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (1))){
var inst_31434 = (0);
var state_31457__$1 = (function (){var statearr_31462 = state_31457;
(statearr_31462[(8)] = inst_31434);

return statearr_31462;
})();
var statearr_31463_31483 = state_31457__$1;
(statearr_31463_31483[(2)] = null);

(statearr_31463_31483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (4))){
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31457__$1,(7),ch);
} else {
if((state_val_31458 === (6))){
var inst_31452 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31464_31484 = state_31457__$1;
(statearr_31464_31484[(2)] = inst_31452);

(statearr_31464_31484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (3))){
var inst_31454 = (state_31457[(2)]);
var inst_31455 = cljs.core.async.close_BANG_.call(null,out);
var state_31457__$1 = (function (){var statearr_31465 = state_31457;
(statearr_31465[(9)] = inst_31454);

return statearr_31465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31457__$1,inst_31455);
} else {
if((state_val_31458 === (2))){
var inst_31434 = (state_31457[(8)]);
var inst_31436 = (inst_31434 < n);
var state_31457__$1 = state_31457;
if(cljs.core.truth_(inst_31436)){
var statearr_31466_31485 = state_31457__$1;
(statearr_31466_31485[(1)] = (4));

} else {
var statearr_31467_31486 = state_31457__$1;
(statearr_31467_31486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (11))){
var inst_31434 = (state_31457[(8)]);
var inst_31444 = (state_31457[(2)]);
var inst_31445 = (inst_31434 + (1));
var inst_31434__$1 = inst_31445;
var state_31457__$1 = (function (){var statearr_31468 = state_31457;
(statearr_31468[(10)] = inst_31444);

(statearr_31468[(8)] = inst_31434__$1);

return statearr_31468;
})();
var statearr_31469_31487 = state_31457__$1;
(statearr_31469_31487[(2)] = null);

(statearr_31469_31487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (9))){
var state_31457__$1 = state_31457;
var statearr_31470_31488 = state_31457__$1;
(statearr_31470_31488[(2)] = null);

(statearr_31470_31488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (5))){
var state_31457__$1 = state_31457;
var statearr_31471_31489 = state_31457__$1;
(statearr_31471_31489[(2)] = null);

(statearr_31471_31489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (10))){
var inst_31449 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31472_31490 = state_31457__$1;
(statearr_31472_31490[(2)] = inst_31449);

(statearr_31472_31490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (8))){
var inst_31439 = (state_31457[(7)]);
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31457__$1,(11),out,inst_31439);
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
});})(c__5869__auto___31480,out))
;
return ((function (switch__5854__auto__,c__5869__auto___31480,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = state_machine__5855__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var state_machine__5855__auto____1 = (function (state_31457){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__5858__auto__ = e31477;
var statearr_31478_31491 = state_31457;
(statearr_31478_31491[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31492 = state_31457;
state_31457 = G__31492;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31457){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31480,out))
})();
var state__5871__auto__ = (function (){var statearr_31479 = f__5870__auto__.call(null);
(statearr_31479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31480);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31480,out))
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
if(typeof cljs.core.async.t31500 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31500 = (function (ch,f,map_LT_,meta31501){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31501 = meta31501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31503 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31503 = (function (fn1,_,meta31501,map_LT_,f,ch,meta31504){
this.fn1 = fn1;
this._ = _;
this.meta31501 = meta31501;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31493_SHARP_){
return f1.call(null,(((p1__31493_SHARP_ == null))?null:self__.f.call(null,p1__31493_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31505){
var self__ = this;
var _31505__$1 = this;
return self__.meta31504;
});})(___$1))
;

cljs.core.async.t31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31505,meta31504__$1){
var self__ = this;
var _31505__$1 = this;
return (new cljs.core.async.t31503(self__.fn1,self__._,self__.meta31501,self__.map_LT_,self__.f,self__.ch,meta31504__$1));
});})(___$1))
;

cljs.core.async.t31503.cljs$lang$type = true;

cljs.core.async.t31503.cljs$lang$ctorStr = "cljs.core.async/t31503";

cljs.core.async.t31503.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31503");
});})(___$1))
;

cljs.core.async.__GT_t31503 = ((function (___$1){
return (function __GT_t31503(fn1__$1,___$2,meta31501__$1,map_LT___$1,f__$1,ch__$1,meta31504){
return (new cljs.core.async.t31503(fn1__$1,___$2,meta31501__$1,map_LT___$1,f__$1,ch__$1,meta31504));
});})(___$1))
;

}

return (new cljs.core.async.t31503(fn1,___$1,self__.meta31501,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31500.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31502){
var self__ = this;
var _31502__$1 = this;
return self__.meta31501;
});

cljs.core.async.t31500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31502,meta31501__$1){
var self__ = this;
var _31502__$1 = this;
return (new cljs.core.async.t31500(self__.ch,self__.f,self__.map_LT_,meta31501__$1));
});

cljs.core.async.t31500.cljs$lang$type = true;

cljs.core.async.t31500.cljs$lang$ctorStr = "cljs.core.async/t31500";

cljs.core.async.t31500.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31500");
});

cljs.core.async.__GT_t31500 = (function __GT_t31500(ch__$1,f__$1,map_LT___$1,meta31501){
return (new cljs.core.async.t31500(ch__$1,f__$1,map_LT___$1,meta31501));
});

}

return (new cljs.core.async.t31500(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31509 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31509 = (function (ch,f,map_GT_,meta31510){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31510 = meta31510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31511){
var self__ = this;
var _31511__$1 = this;
return self__.meta31510;
});

cljs.core.async.t31509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31511,meta31510__$1){
var self__ = this;
var _31511__$1 = this;
return (new cljs.core.async.t31509(self__.ch,self__.f,self__.map_GT_,meta31510__$1));
});

cljs.core.async.t31509.cljs$lang$type = true;

cljs.core.async.t31509.cljs$lang$ctorStr = "cljs.core.async/t31509";

cljs.core.async.t31509.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31509");
});

cljs.core.async.__GT_t31509 = (function __GT_t31509(ch__$1,f__$1,map_GT___$1,meta31510){
return (new cljs.core.async.t31509(ch__$1,f__$1,map_GT___$1,meta31510));
});

}

return (new cljs.core.async.t31509(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31515 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31515 = (function (ch,p,filter_GT_,meta31516){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31516 = meta31516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31515.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31517){
var self__ = this;
var _31517__$1 = this;
return self__.meta31516;
});

cljs.core.async.t31515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31517,meta31516__$1){
var self__ = this;
var _31517__$1 = this;
return (new cljs.core.async.t31515(self__.ch,self__.p,self__.filter_GT_,meta31516__$1));
});

cljs.core.async.t31515.cljs$lang$type = true;

cljs.core.async.t31515.cljs$lang$ctorStr = "cljs.core.async/t31515";

cljs.core.async.t31515.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t31515");
});

cljs.core.async.__GT_t31515 = (function __GT_t31515(ch__$1,p__$1,filter_GT___$1,meta31516){
return (new cljs.core.async.t31515(ch__$1,p__$1,filter_GT___$1,meta31516));
});

}

return (new cljs.core.async.t31515(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___31600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31600,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31600,out){
return (function (state_31579){
var state_val_31580 = (state_31579[(1)]);
if((state_val_31580 === (7))){
var inst_31575 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31581_31601 = state_31579__$1;
(statearr_31581_31601[(2)] = inst_31575);

(statearr_31581_31601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (1))){
var state_31579__$1 = state_31579;
var statearr_31582_31602 = state_31579__$1;
(statearr_31582_31602[(2)] = null);

(statearr_31582_31602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (4))){
var inst_31561 = (state_31579[(7)]);
var inst_31561__$1 = (state_31579[(2)]);
var inst_31562 = (inst_31561__$1 == null);
var state_31579__$1 = (function (){var statearr_31583 = state_31579;
(statearr_31583[(7)] = inst_31561__$1);

return statearr_31583;
})();
if(cljs.core.truth_(inst_31562)){
var statearr_31584_31603 = state_31579__$1;
(statearr_31584_31603[(1)] = (5));

} else {
var statearr_31585_31604 = state_31579__$1;
(statearr_31585_31604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (6))){
var inst_31561 = (state_31579[(7)]);
var inst_31566 = p.call(null,inst_31561);
var state_31579__$1 = state_31579;
if(cljs.core.truth_(inst_31566)){
var statearr_31586_31605 = state_31579__$1;
(statearr_31586_31605[(1)] = (8));

} else {
var statearr_31587_31606 = state_31579__$1;
(statearr_31587_31606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (3))){
var inst_31577 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31579__$1,inst_31577);
} else {
if((state_val_31580 === (2))){
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31579__$1,(4),ch);
} else {
if((state_val_31580 === (11))){
var inst_31569 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31588_31607 = state_31579__$1;
(statearr_31588_31607[(2)] = inst_31569);

(statearr_31588_31607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (9))){
var state_31579__$1 = state_31579;
var statearr_31589_31608 = state_31579__$1;
(statearr_31589_31608[(2)] = null);

(statearr_31589_31608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (5))){
var inst_31564 = cljs.core.async.close_BANG_.call(null,out);
var state_31579__$1 = state_31579;
var statearr_31590_31609 = state_31579__$1;
(statearr_31590_31609[(2)] = inst_31564);

(statearr_31590_31609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (10))){
var inst_31572 = (state_31579[(2)]);
var state_31579__$1 = (function (){var statearr_31591 = state_31579;
(statearr_31591[(8)] = inst_31572);

return statearr_31591;
})();
var statearr_31592_31610 = state_31579__$1;
(statearr_31592_31610[(2)] = null);

(statearr_31592_31610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (8))){
var inst_31561 = (state_31579[(7)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31579__$1,(11),out,inst_31561);
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
});})(c__5869__auto___31600,out))
;
return ((function (switch__5854__auto__,c__5869__auto___31600,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31596 = [null,null,null,null,null,null,null,null,null];
(statearr_31596[(0)] = state_machine__5855__auto__);

(statearr_31596[(1)] = (1));

return statearr_31596;
});
var state_machine__5855__auto____1 = (function (state_31579){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31597){if((e31597 instanceof Object)){
var ex__5858__auto__ = e31597;
var statearr_31598_31611 = state_31579;
(statearr_31598_31611[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31612 = state_31579;
state_31579 = G__31612;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31579){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31600,out))
})();
var state__5871__auto__ = (function (){var statearr_31599 = f__5870__auto__.call(null);
(statearr_31599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31600);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31600,out))
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
return (function (state_31778){
var state_val_31779 = (state_31778[(1)]);
if((state_val_31779 === (7))){
var inst_31774 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31780_31821 = state_31778__$1;
(statearr_31780_31821[(2)] = inst_31774);

(statearr_31780_31821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (20))){
var inst_31744 = (state_31778[(7)]);
var inst_31755 = (state_31778[(2)]);
var inst_31756 = cljs.core.next.call(null,inst_31744);
var inst_31730 = inst_31756;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31778__$1 = (function (){var statearr_31781 = state_31778;
(statearr_31781[(8)] = inst_31733);

(statearr_31781[(9)] = inst_31755);

(statearr_31781[(10)] = inst_31732);

(statearr_31781[(11)] = inst_31731);

(statearr_31781[(12)] = inst_31730);

return statearr_31781;
})();
var statearr_31782_31822 = state_31778__$1;
(statearr_31782_31822[(2)] = null);

(statearr_31782_31822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (1))){
var state_31778__$1 = state_31778;
var statearr_31783_31823 = state_31778__$1;
(statearr_31783_31823[(2)] = null);

(statearr_31783_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (4))){
var inst_31719 = (state_31778[(13)]);
var inst_31719__$1 = (state_31778[(2)]);
var inst_31720 = (inst_31719__$1 == null);
var state_31778__$1 = (function (){var statearr_31784 = state_31778;
(statearr_31784[(13)] = inst_31719__$1);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31720)){
var statearr_31785_31824 = state_31778__$1;
(statearr_31785_31824[(1)] = (5));

} else {
var statearr_31786_31825 = state_31778__$1;
(statearr_31786_31825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (15))){
var state_31778__$1 = state_31778;
var statearr_31790_31826 = state_31778__$1;
(statearr_31790_31826[(2)] = null);

(statearr_31790_31826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (21))){
var state_31778__$1 = state_31778;
var statearr_31791_31827 = state_31778__$1;
(statearr_31791_31827[(2)] = null);

(statearr_31791_31827[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (13))){
var inst_31733 = (state_31778[(8)]);
var inst_31732 = (state_31778[(10)]);
var inst_31731 = (state_31778[(11)]);
var inst_31730 = (state_31778[(12)]);
var inst_31740 = (state_31778[(2)]);
var inst_31741 = (inst_31733 + (1));
var tmp31787 = inst_31732;
var tmp31788 = inst_31731;
var tmp31789 = inst_31730;
var inst_31730__$1 = tmp31789;
var inst_31731__$1 = tmp31788;
var inst_31732__$1 = tmp31787;
var inst_31733__$1 = inst_31741;
var state_31778__$1 = (function (){var statearr_31792 = state_31778;
(statearr_31792[(8)] = inst_31733__$1);

(statearr_31792[(10)] = inst_31732__$1);

(statearr_31792[(11)] = inst_31731__$1);

(statearr_31792[(12)] = inst_31730__$1);

(statearr_31792[(14)] = inst_31740);

return statearr_31792;
})();
var statearr_31793_31828 = state_31778__$1;
(statearr_31793_31828[(2)] = null);

(statearr_31793_31828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (22))){
var state_31778__$1 = state_31778;
var statearr_31794_31829 = state_31778__$1;
(statearr_31794_31829[(2)] = null);

(statearr_31794_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (6))){
var inst_31719 = (state_31778[(13)]);
var inst_31728 = f.call(null,inst_31719);
var inst_31729 = cljs.core.seq.call(null,inst_31728);
var inst_31730 = inst_31729;
var inst_31731 = null;
var inst_31732 = (0);
var inst_31733 = (0);
var state_31778__$1 = (function (){var statearr_31795 = state_31778;
(statearr_31795[(8)] = inst_31733);

(statearr_31795[(10)] = inst_31732);

(statearr_31795[(11)] = inst_31731);

(statearr_31795[(12)] = inst_31730);

return statearr_31795;
})();
var statearr_31796_31830 = state_31778__$1;
(statearr_31796_31830[(2)] = null);

(statearr_31796_31830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (17))){
var inst_31744 = (state_31778[(7)]);
var inst_31748 = cljs.core.chunk_first.call(null,inst_31744);
var inst_31749 = cljs.core.chunk_rest.call(null,inst_31744);
var inst_31750 = cljs.core.count.call(null,inst_31748);
var inst_31730 = inst_31749;
var inst_31731 = inst_31748;
var inst_31732 = inst_31750;
var inst_31733 = (0);
var state_31778__$1 = (function (){var statearr_31797 = state_31778;
(statearr_31797[(8)] = inst_31733);

(statearr_31797[(10)] = inst_31732);

(statearr_31797[(11)] = inst_31731);

(statearr_31797[(12)] = inst_31730);

return statearr_31797;
})();
var statearr_31798_31831 = state_31778__$1;
(statearr_31798_31831[(2)] = null);

(statearr_31798_31831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (3))){
var inst_31776 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31778__$1,inst_31776);
} else {
if((state_val_31779 === (12))){
var inst_31764 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31799_31832 = state_31778__$1;
(statearr_31799_31832[(2)] = inst_31764);

(statearr_31799_31832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (2))){
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31778__$1,(4),in$);
} else {
if((state_val_31779 === (23))){
var inst_31772 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31800_31833 = state_31778__$1;
(statearr_31800_31833[(2)] = inst_31772);

(statearr_31800_31833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (19))){
var inst_31759 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31801_31834 = state_31778__$1;
(statearr_31801_31834[(2)] = inst_31759);

(statearr_31801_31834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (11))){
var inst_31744 = (state_31778[(7)]);
var inst_31730 = (state_31778[(12)]);
var inst_31744__$1 = cljs.core.seq.call(null,inst_31730);
var state_31778__$1 = (function (){var statearr_31802 = state_31778;
(statearr_31802[(7)] = inst_31744__$1);

return statearr_31802;
})();
if(inst_31744__$1){
var statearr_31803_31835 = state_31778__$1;
(statearr_31803_31835[(1)] = (14));

} else {
var statearr_31804_31836 = state_31778__$1;
(statearr_31804_31836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (9))){
var inst_31766 = (state_31778[(2)]);
var inst_31767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31778__$1 = (function (){var statearr_31805 = state_31778;
(statearr_31805[(15)] = inst_31766);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31767)){
var statearr_31806_31837 = state_31778__$1;
(statearr_31806_31837[(1)] = (21));

} else {
var statearr_31807_31838 = state_31778__$1;
(statearr_31807_31838[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (5))){
var inst_31722 = cljs.core.async.close_BANG_.call(null,out);
var state_31778__$1 = state_31778;
var statearr_31808_31839 = state_31778__$1;
(statearr_31808_31839[(2)] = inst_31722);

(statearr_31808_31839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (14))){
var inst_31744 = (state_31778[(7)]);
var inst_31746 = cljs.core.chunked_seq_QMARK_.call(null,inst_31744);
var state_31778__$1 = state_31778;
if(inst_31746){
var statearr_31809_31840 = state_31778__$1;
(statearr_31809_31840[(1)] = (17));

} else {
var statearr_31810_31841 = state_31778__$1;
(statearr_31810_31841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (16))){
var inst_31762 = (state_31778[(2)]);
var state_31778__$1 = state_31778;
var statearr_31811_31842 = state_31778__$1;
(statearr_31811_31842[(2)] = inst_31762);

(statearr_31811_31842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31779 === (10))){
var inst_31733 = (state_31778[(8)]);
var inst_31731 = (state_31778[(11)]);
var inst_31738 = cljs.core._nth.call(null,inst_31731,inst_31733);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31778__$1,(13),out,inst_31738);
} else {
if((state_val_31779 === (18))){
var inst_31744 = (state_31778[(7)]);
var inst_31753 = cljs.core.first.call(null,inst_31744);
var state_31778__$1 = state_31778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31778__$1,(20),out,inst_31753);
} else {
if((state_val_31779 === (8))){
var inst_31733 = (state_31778[(8)]);
var inst_31732 = (state_31778[(10)]);
var inst_31735 = (inst_31733 < inst_31732);
var inst_31736 = inst_31735;
var state_31778__$1 = state_31778;
if(cljs.core.truth_(inst_31736)){
var statearr_31812_31843 = state_31778__$1;
(statearr_31812_31843[(1)] = (10));

} else {
var statearr_31813_31844 = state_31778__$1;
(statearr_31813_31844[(1)] = (11));

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
var statearr_31817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31817[(0)] = state_machine__5855__auto__);

(statearr_31817[(1)] = (1));

return statearr_31817;
});
var state_machine__5855__auto____1 = (function (state_31778){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31818){if((e31818 instanceof Object)){
var ex__5858__auto__ = e31818;
var statearr_31819_31845 = state_31778;
(statearr_31819_31845[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31778;
state_31778 = G__31846;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31778){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_31820 = f__5870__auto__.call(null);
(statearr_31820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_31820;
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
var c__5869__auto___31943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___31943,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___31943,out){
return (function (state_31918){
var state_val_31919 = (state_31918[(1)]);
if((state_val_31919 === (7))){
var inst_31913 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31920_31944 = state_31918__$1;
(statearr_31920_31944[(2)] = inst_31913);

(statearr_31920_31944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (1))){
var inst_31895 = null;
var state_31918__$1 = (function (){var statearr_31921 = state_31918;
(statearr_31921[(7)] = inst_31895);

return statearr_31921;
})();
var statearr_31922_31945 = state_31918__$1;
(statearr_31922_31945[(2)] = null);

(statearr_31922_31945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (4))){
var inst_31898 = (state_31918[(8)]);
var inst_31898__$1 = (state_31918[(2)]);
var inst_31899 = (inst_31898__$1 == null);
var inst_31900 = cljs.core.not.call(null,inst_31899);
var state_31918__$1 = (function (){var statearr_31923 = state_31918;
(statearr_31923[(8)] = inst_31898__$1);

return statearr_31923;
})();
if(inst_31900){
var statearr_31924_31946 = state_31918__$1;
(statearr_31924_31946[(1)] = (5));

} else {
var statearr_31925_31947 = state_31918__$1;
(statearr_31925_31947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (6))){
var state_31918__$1 = state_31918;
var statearr_31926_31948 = state_31918__$1;
(statearr_31926_31948[(2)] = null);

(statearr_31926_31948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (3))){
var inst_31915 = (state_31918[(2)]);
var inst_31916 = cljs.core.async.close_BANG_.call(null,out);
var state_31918__$1 = (function (){var statearr_31927 = state_31918;
(statearr_31927[(9)] = inst_31915);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31918__$1,inst_31916);
} else {
if((state_val_31919 === (2))){
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31918__$1,(4),ch);
} else {
if((state_val_31919 === (11))){
var inst_31898 = (state_31918[(8)]);
var inst_31907 = (state_31918[(2)]);
var inst_31895 = inst_31898;
var state_31918__$1 = (function (){var statearr_31928 = state_31918;
(statearr_31928[(10)] = inst_31907);

(statearr_31928[(7)] = inst_31895);

return statearr_31928;
})();
var statearr_31929_31949 = state_31918__$1;
(statearr_31929_31949[(2)] = null);

(statearr_31929_31949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (9))){
var inst_31898 = (state_31918[(8)]);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31918__$1,(11),out,inst_31898);
} else {
if((state_val_31919 === (5))){
var inst_31898 = (state_31918[(8)]);
var inst_31895 = (state_31918[(7)]);
var inst_31902 = cljs.core._EQ_.call(null,inst_31898,inst_31895);
var state_31918__$1 = state_31918;
if(inst_31902){
var statearr_31931_31950 = state_31918__$1;
(statearr_31931_31950[(1)] = (8));

} else {
var statearr_31932_31951 = state_31918__$1;
(statearr_31932_31951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (10))){
var inst_31910 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31933_31952 = state_31918__$1;
(statearr_31933_31952[(2)] = inst_31910);

(statearr_31933_31952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (8))){
var inst_31895 = (state_31918[(7)]);
var tmp31930 = inst_31895;
var inst_31895__$1 = tmp31930;
var state_31918__$1 = (function (){var statearr_31934 = state_31918;
(statearr_31934[(7)] = inst_31895__$1);

return statearr_31934;
})();
var statearr_31935_31953 = state_31918__$1;
(statearr_31935_31953[(2)] = null);

(statearr_31935_31953[(1)] = (2));


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
});})(c__5869__auto___31943,out))
;
return ((function (switch__5854__auto__,c__5869__auto___31943,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_31939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31939[(0)] = state_machine__5855__auto__);

(statearr_31939[(1)] = (1));

return statearr_31939;
});
var state_machine__5855__auto____1 = (function (state_31918){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_31918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e31940){if((e31940 instanceof Object)){
var ex__5858__auto__ = e31940;
var statearr_31941_31954 = state_31918;
(statearr_31941_31954[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31955 = state_31918;
state_31918 = G__31955;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_31918){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_31918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___31943,out))
})();
var state__5871__auto__ = (function (){var statearr_31942 = f__5870__auto__.call(null);
(statearr_31942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___31943);

return statearr_31942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___31943,out))
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
var c__5869__auto___32090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___32090,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___32090,out){
return (function (state_32060){
var state_val_32061 = (state_32060[(1)]);
if((state_val_32061 === (7))){
var inst_32056 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32062_32091 = state_32060__$1;
(statearr_32062_32091[(2)] = inst_32056);

(statearr_32062_32091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (1))){
var inst_32023 = (new Array(n));
var inst_32024 = inst_32023;
var inst_32025 = (0);
var state_32060__$1 = (function (){var statearr_32063 = state_32060;
(statearr_32063[(7)] = inst_32024);

(statearr_32063[(8)] = inst_32025);

return statearr_32063;
})();
var statearr_32064_32092 = state_32060__$1;
(statearr_32064_32092[(2)] = null);

(statearr_32064_32092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (4))){
var inst_32028 = (state_32060[(9)]);
var inst_32028__$1 = (state_32060[(2)]);
var inst_32029 = (inst_32028__$1 == null);
var inst_32030 = cljs.core.not.call(null,inst_32029);
var state_32060__$1 = (function (){var statearr_32065 = state_32060;
(statearr_32065[(9)] = inst_32028__$1);

return statearr_32065;
})();
if(inst_32030){
var statearr_32066_32093 = state_32060__$1;
(statearr_32066_32093[(1)] = (5));

} else {
var statearr_32067_32094 = state_32060__$1;
(statearr_32067_32094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (15))){
var inst_32050 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32068_32095 = state_32060__$1;
(statearr_32068_32095[(2)] = inst_32050);

(statearr_32068_32095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (13))){
var state_32060__$1 = state_32060;
var statearr_32069_32096 = state_32060__$1;
(statearr_32069_32096[(2)] = null);

(statearr_32069_32096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (6))){
var inst_32025 = (state_32060[(8)]);
var inst_32046 = (inst_32025 > (0));
var state_32060__$1 = state_32060;
if(cljs.core.truth_(inst_32046)){
var statearr_32070_32097 = state_32060__$1;
(statearr_32070_32097[(1)] = (12));

} else {
var statearr_32071_32098 = state_32060__$1;
(statearr_32071_32098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (3))){
var inst_32058 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32060__$1,inst_32058);
} else {
if((state_val_32061 === (12))){
var inst_32024 = (state_32060[(7)]);
var inst_32048 = cljs.core.vec.call(null,inst_32024);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32060__$1,(15),out,inst_32048);
} else {
if((state_val_32061 === (2))){
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32060__$1,(4),ch);
} else {
if((state_val_32061 === (11))){
var inst_32040 = (state_32060[(2)]);
var inst_32041 = (new Array(n));
var inst_32024 = inst_32041;
var inst_32025 = (0);
var state_32060__$1 = (function (){var statearr_32072 = state_32060;
(statearr_32072[(7)] = inst_32024);

(statearr_32072[(8)] = inst_32025);

(statearr_32072[(10)] = inst_32040);

return statearr_32072;
})();
var statearr_32073_32099 = state_32060__$1;
(statearr_32073_32099[(2)] = null);

(statearr_32073_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (9))){
var inst_32024 = (state_32060[(7)]);
var inst_32038 = cljs.core.vec.call(null,inst_32024);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32060__$1,(11),out,inst_32038);
} else {
if((state_val_32061 === (5))){
var inst_32024 = (state_32060[(7)]);
var inst_32033 = (state_32060[(11)]);
var inst_32025 = (state_32060[(8)]);
var inst_32028 = (state_32060[(9)]);
var inst_32032 = (inst_32024[inst_32025] = inst_32028);
var inst_32033__$1 = (inst_32025 + (1));
var inst_32034 = (inst_32033__$1 < n);
var state_32060__$1 = (function (){var statearr_32074 = state_32060;
(statearr_32074[(12)] = inst_32032);

(statearr_32074[(11)] = inst_32033__$1);

return statearr_32074;
})();
if(cljs.core.truth_(inst_32034)){
var statearr_32075_32100 = state_32060__$1;
(statearr_32075_32100[(1)] = (8));

} else {
var statearr_32076_32101 = state_32060__$1;
(statearr_32076_32101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (14))){
var inst_32053 = (state_32060[(2)]);
var inst_32054 = cljs.core.async.close_BANG_.call(null,out);
var state_32060__$1 = (function (){var statearr_32078 = state_32060;
(statearr_32078[(13)] = inst_32053);

return statearr_32078;
})();
var statearr_32079_32102 = state_32060__$1;
(statearr_32079_32102[(2)] = inst_32054);

(statearr_32079_32102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (10))){
var inst_32044 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32080_32103 = state_32060__$1;
(statearr_32080_32103[(2)] = inst_32044);

(statearr_32080_32103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (8))){
var inst_32024 = (state_32060[(7)]);
var inst_32033 = (state_32060[(11)]);
var tmp32077 = inst_32024;
var inst_32024__$1 = tmp32077;
var inst_32025 = inst_32033;
var state_32060__$1 = (function (){var statearr_32081 = state_32060;
(statearr_32081[(7)] = inst_32024__$1);

(statearr_32081[(8)] = inst_32025);

return statearr_32081;
})();
var statearr_32082_32104 = state_32060__$1;
(statearr_32082_32104[(2)] = null);

(statearr_32082_32104[(1)] = (2));


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
});})(c__5869__auto___32090,out))
;
return ((function (switch__5854__auto__,c__5869__auto___32090,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_32086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32086[(0)] = state_machine__5855__auto__);

(statearr_32086[(1)] = (1));

return statearr_32086;
});
var state_machine__5855__auto____1 = (function (state_32060){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_32060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e32087){if((e32087 instanceof Object)){
var ex__5858__auto__ = e32087;
var statearr_32088_32105 = state_32060;
(statearr_32088_32105[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32106 = state_32060;
state_32060 = G__32106;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_32060){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_32060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___32090,out))
})();
var state__5871__auto__ = (function (){var statearr_32089 = f__5870__auto__.call(null);
(statearr_32089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___32090);

return statearr_32089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___32090,out))
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
var c__5869__auto___32249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___32249,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___32249,out){
return (function (state_32219){
var state_val_32220 = (state_32219[(1)]);
if((state_val_32220 === (7))){
var inst_32215 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32221_32250 = state_32219__$1;
(statearr_32221_32250[(2)] = inst_32215);

(statearr_32221_32250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (1))){
var inst_32178 = [];
var inst_32179 = inst_32178;
var inst_32180 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32219__$1 = (function (){var statearr_32222 = state_32219;
(statearr_32222[(7)] = inst_32179);

(statearr_32222[(8)] = inst_32180);

return statearr_32222;
})();
var statearr_32223_32251 = state_32219__$1;
(statearr_32223_32251[(2)] = null);

(statearr_32223_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (4))){
var inst_32183 = (state_32219[(9)]);
var inst_32183__$1 = (state_32219[(2)]);
var inst_32184 = (inst_32183__$1 == null);
var inst_32185 = cljs.core.not.call(null,inst_32184);
var state_32219__$1 = (function (){var statearr_32224 = state_32219;
(statearr_32224[(9)] = inst_32183__$1);

return statearr_32224;
})();
if(inst_32185){
var statearr_32225_32252 = state_32219__$1;
(statearr_32225_32252[(1)] = (5));

} else {
var statearr_32226_32253 = state_32219__$1;
(statearr_32226_32253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (15))){
var inst_32209 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32227_32254 = state_32219__$1;
(statearr_32227_32254[(2)] = inst_32209);

(statearr_32227_32254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (13))){
var state_32219__$1 = state_32219;
var statearr_32228_32255 = state_32219__$1;
(statearr_32228_32255[(2)] = null);

(statearr_32228_32255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (6))){
var inst_32179 = (state_32219[(7)]);
var inst_32204 = inst_32179.length;
var inst_32205 = (inst_32204 > (0));
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32205)){
var statearr_32229_32256 = state_32219__$1;
(statearr_32229_32256[(1)] = (12));

} else {
var statearr_32230_32257 = state_32219__$1;
(statearr_32230_32257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (3))){
var inst_32217 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32219__$1,inst_32217);
} else {
if((state_val_32220 === (12))){
var inst_32179 = (state_32219[(7)]);
var inst_32207 = cljs.core.vec.call(null,inst_32179);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32219__$1,(15),out,inst_32207);
} else {
if((state_val_32220 === (2))){
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32219__$1,(4),ch);
} else {
if((state_val_32220 === (11))){
var inst_32187 = (state_32219[(10)]);
var inst_32183 = (state_32219[(9)]);
var inst_32197 = (state_32219[(2)]);
var inst_32198 = [];
var inst_32199 = inst_32198.push(inst_32183);
var inst_32179 = inst_32198;
var inst_32180 = inst_32187;
var state_32219__$1 = (function (){var statearr_32231 = state_32219;
(statearr_32231[(11)] = inst_32199);

(statearr_32231[(7)] = inst_32179);

(statearr_32231[(12)] = inst_32197);

(statearr_32231[(8)] = inst_32180);

return statearr_32231;
})();
var statearr_32232_32258 = state_32219__$1;
(statearr_32232_32258[(2)] = null);

(statearr_32232_32258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (9))){
var inst_32179 = (state_32219[(7)]);
var inst_32195 = cljs.core.vec.call(null,inst_32179);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32219__$1,(11),out,inst_32195);
} else {
if((state_val_32220 === (5))){
var inst_32187 = (state_32219[(10)]);
var inst_32180 = (state_32219[(8)]);
var inst_32183 = (state_32219[(9)]);
var inst_32187__$1 = f.call(null,inst_32183);
var inst_32188 = cljs.core._EQ_.call(null,inst_32187__$1,inst_32180);
var inst_32189 = cljs.core.keyword_identical_QMARK_.call(null,inst_32180,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32190 = (inst_32188) || (inst_32189);
var state_32219__$1 = (function (){var statearr_32233 = state_32219;
(statearr_32233[(10)] = inst_32187__$1);

return statearr_32233;
})();
if(cljs.core.truth_(inst_32190)){
var statearr_32234_32259 = state_32219__$1;
(statearr_32234_32259[(1)] = (8));

} else {
var statearr_32235_32260 = state_32219__$1;
(statearr_32235_32260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (14))){
var inst_32212 = (state_32219[(2)]);
var inst_32213 = cljs.core.async.close_BANG_.call(null,out);
var state_32219__$1 = (function (){var statearr_32237 = state_32219;
(statearr_32237[(13)] = inst_32212);

return statearr_32237;
})();
var statearr_32238_32261 = state_32219__$1;
(statearr_32238_32261[(2)] = inst_32213);

(statearr_32238_32261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (10))){
var inst_32202 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32239_32262 = state_32219__$1;
(statearr_32239_32262[(2)] = inst_32202);

(statearr_32239_32262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (8))){
var inst_32179 = (state_32219[(7)]);
var inst_32187 = (state_32219[(10)]);
var inst_32183 = (state_32219[(9)]);
var inst_32192 = inst_32179.push(inst_32183);
var tmp32236 = inst_32179;
var inst_32179__$1 = tmp32236;
var inst_32180 = inst_32187;
var state_32219__$1 = (function (){var statearr_32240 = state_32219;
(statearr_32240[(14)] = inst_32192);

(statearr_32240[(7)] = inst_32179__$1);

(statearr_32240[(8)] = inst_32180);

return statearr_32240;
})();
var statearr_32241_32263 = state_32219__$1;
(statearr_32241_32263[(2)] = null);

(statearr_32241_32263[(1)] = (2));


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
});})(c__5869__auto___32249,out))
;
return ((function (switch__5854__auto__,c__5869__auto___32249,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_32245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32245[(0)] = state_machine__5855__auto__);

(statearr_32245[(1)] = (1));

return statearr_32245;
});
var state_machine__5855__auto____1 = (function (state_32219){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_32219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e32246){if((e32246 instanceof Object)){
var ex__5858__auto__ = e32246;
var statearr_32247_32264 = state_32219;
(statearr_32247_32264[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32265 = state_32219;
state_32219 = G__32265;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_32219){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_32219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___32249,out))
})();
var state__5871__auto__ = (function (){var statearr_32248 = f__5870__auto__.call(null);
(statearr_32248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___32249);

return statearr_32248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___32249,out))
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