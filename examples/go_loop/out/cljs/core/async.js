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
if(typeof cljs.core.async.t37825 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37825 = (function (f,fn_handler,meta37826){
this.f = f;
this.fn_handler = fn_handler;
this.meta37826 = meta37826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37825.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t37825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t37825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37827){
var self__ = this;
var _37827__$1 = this;
return self__.meta37826;
});

cljs.core.async.t37825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37827,meta37826__$1){
var self__ = this;
var _37827__$1 = this;
return (new cljs.core.async.t37825(self__.f,self__.fn_handler,meta37826__$1));
});

cljs.core.async.t37825.cljs$lang$type = true;

cljs.core.async.t37825.cljs$lang$ctorStr = "cljs.core.async/t37825";

cljs.core.async.t37825.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t37825");
});

cljs.core.async.__GT_t37825 = (function __GT_t37825(f__$1,fn_handler__$1,meta37826){
return (new cljs.core.async.t37825(f__$1,fn_handler__$1,meta37826));
});

}

return (new cljs.core.async.t37825(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var G__37829 = buff;
if(G__37829){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__37829.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__37829.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37829);
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
var val_37830 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37830);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37830,ret){
return (function (){
return fn1.call(null,val_37830);
});})(val_37830,ret))
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
var n__4517__auto___37831 = n;
var x_37832 = (0);
while(true){
if((x_37832 < n__4517__auto___37831)){
(a[x_37832] = (0));

var G__37833 = (x_37832 + (1));
x_37832 = G__37833;
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

var G__37834 = (i + (1));
i = G__37834;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t37838 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37838 = (function (flag,alt_flag,meta37839){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37839 = meta37839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t37838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t37838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37840){
var self__ = this;
var _37840__$1 = this;
return self__.meta37839;
});})(flag))
;

cljs.core.async.t37838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37840,meta37839__$1){
var self__ = this;
var _37840__$1 = this;
return (new cljs.core.async.t37838(self__.flag,self__.alt_flag,meta37839__$1));
});})(flag))
;

cljs.core.async.t37838.cljs$lang$type = true;

cljs.core.async.t37838.cljs$lang$ctorStr = "cljs.core.async/t37838";

cljs.core.async.t37838.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t37838");
});})(flag))
;

cljs.core.async.__GT_t37838 = ((function (flag){
return (function __GT_t37838(flag__$1,alt_flag__$1,meta37839){
return (new cljs.core.async.t37838(flag__$1,alt_flag__$1,meta37839));
});})(flag))
;

}

return (new cljs.core.async.t37838(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t37844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37844 = (function (cb,flag,alt_handler,meta37845){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37845 = meta37845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t37844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t37844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37846){
var self__ = this;
var _37846__$1 = this;
return self__.meta37845;
});

cljs.core.async.t37844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37846,meta37845__$1){
var self__ = this;
var _37846__$1 = this;
return (new cljs.core.async.t37844(self__.cb,self__.flag,self__.alt_handler,meta37845__$1));
});

cljs.core.async.t37844.cljs$lang$type = true;

cljs.core.async.t37844.cljs$lang$ctorStr = "cljs.core.async/t37844";

cljs.core.async.t37844.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t37844");
});

cljs.core.async.__GT_t37844 = (function __GT_t37844(cb__$1,flag__$1,alt_handler__$1,meta37845){
return (new cljs.core.async.t37844(cb__$1,flag__$1,alt_handler__$1,meta37845));
});

}

return (new cljs.core.async.t37844(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
return (function (p1__37847_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37847_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37848_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37848_SHARP_,port], null));
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
var G__37849 = (i + (1));
i = G__37849;
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
var alts_BANG___delegate = function (ports,p__37850){
var map__37852 = p__37850;
var map__37852__$1 = ((cljs.core.seq_QMARK_.call(null,map__37852))?cljs.core.apply.call(null,cljs.core.hash_map,map__37852):map__37852);
var opts = map__37852__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__37850 = null;
if (arguments.length > 1) {
  p__37850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__37850);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37853){
var ports = cljs.core.first(arglist__37853);
var p__37850 = cljs.core.rest(arglist__37853);
return alts_BANG___delegate(ports,p__37850);
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
var c__7050__auto___37948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___37948){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___37948){
return (function (state_37924){
var state_val_37925 = (state_37924[(1)]);
if((state_val_37925 === (7))){
var inst_37920 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37926_37949 = state_37924__$1;
(statearr_37926_37949[(2)] = inst_37920);

(statearr_37926_37949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (1))){
var state_37924__$1 = state_37924;
var statearr_37927_37950 = state_37924__$1;
(statearr_37927_37950[(2)] = null);

(statearr_37927_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (4))){
var inst_37903 = (state_37924[(7)]);
var inst_37903__$1 = (state_37924[(2)]);
var inst_37904 = (inst_37903__$1 == null);
var state_37924__$1 = (function (){var statearr_37928 = state_37924;
(statearr_37928[(7)] = inst_37903__$1);

return statearr_37928;
})();
if(cljs.core.truth_(inst_37904)){
var statearr_37929_37951 = state_37924__$1;
(statearr_37929_37951[(1)] = (5));

} else {
var statearr_37930_37952 = state_37924__$1;
(statearr_37930_37952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (13))){
var state_37924__$1 = state_37924;
var statearr_37931_37953 = state_37924__$1;
(statearr_37931_37953[(2)] = null);

(statearr_37931_37953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (6))){
var inst_37903 = (state_37924[(7)]);
var state_37924__$1 = state_37924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37924__$1,(11),to,inst_37903);
} else {
if((state_val_37925 === (3))){
var inst_37922 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37924__$1,inst_37922);
} else {
if((state_val_37925 === (12))){
var state_37924__$1 = state_37924;
var statearr_37932_37954 = state_37924__$1;
(statearr_37932_37954[(2)] = null);

(statearr_37932_37954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (2))){
var state_37924__$1 = state_37924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37924__$1,(4),from);
} else {
if((state_val_37925 === (11))){
var inst_37913 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
if(cljs.core.truth_(inst_37913)){
var statearr_37933_37955 = state_37924__$1;
(statearr_37933_37955[(1)] = (12));

} else {
var statearr_37934_37956 = state_37924__$1;
(statearr_37934_37956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (9))){
var state_37924__$1 = state_37924;
var statearr_37935_37957 = state_37924__$1;
(statearr_37935_37957[(2)] = null);

(statearr_37935_37957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (5))){
var state_37924__$1 = state_37924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37936_37958 = state_37924__$1;
(statearr_37936_37958[(1)] = (8));

} else {
var statearr_37937_37959 = state_37924__$1;
(statearr_37937_37959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (14))){
var inst_37918 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37938_37960 = state_37924__$1;
(statearr_37938_37960[(2)] = inst_37918);

(statearr_37938_37960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (10))){
var inst_37910 = (state_37924[(2)]);
var state_37924__$1 = state_37924;
var statearr_37939_37961 = state_37924__$1;
(statearr_37939_37961[(2)] = inst_37910);

(statearr_37939_37961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37925 === (8))){
var inst_37907 = cljs.core.async.close_BANG_.call(null,to);
var state_37924__$1 = state_37924;
var statearr_37940_37962 = state_37924__$1;
(statearr_37940_37962[(2)] = inst_37907);

(statearr_37940_37962[(1)] = (10));


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
});})(c__7050__auto___37948))
;
return ((function (switch__6994__auto__,c__7050__auto___37948){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_37944 = [null,null,null,null,null,null,null,null];
(statearr_37944[(0)] = state_machine__6995__auto__);

(statearr_37944[(1)] = (1));

return statearr_37944;
});
var state_machine__6995__auto____1 = (function (state_37924){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_37924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e37945){if((e37945 instanceof Object)){
var ex__6998__auto__ = e37945;
var statearr_37946_37963 = state_37924;
(statearr_37946_37963[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37964 = state_37924;
state_37924 = G__37964;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_37924){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_37924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___37948))
})();
var state__7052__auto__ = (function (){var statearr_37947 = f__7051__auto__.call(null);
(statearr_37947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___37948);

return statearr_37947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___37948))
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
return (function (p__38148){
var vec__38149 = p__38148;
var v = cljs.core.nth.call(null,vec__38149,(0),null);
var p = cljs.core.nth.call(null,vec__38149,(1),null);
var job = vec__38149;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___38331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results){
return (function (state_38154){
var state_val_38155 = (state_38154[(1)]);
if((state_val_38155 === (2))){
var inst_38151 = (state_38154[(2)]);
var inst_38152 = cljs.core.async.close_BANG_.call(null,res);
var state_38154__$1 = (function (){var statearr_38156 = state_38154;
(statearr_38156[(7)] = inst_38151);

return statearr_38156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38154__$1,inst_38152);
} else {
if((state_val_38155 === (1))){
var state_38154__$1 = state_38154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38154__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_38160 = [null,null,null,null,null,null,null,null];
(statearr_38160[(0)] = state_machine__6995__auto__);

(statearr_38160[(1)] = (1));

return statearr_38160;
});
var state_machine__6995__auto____1 = (function (state_38154){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38161){if((e38161 instanceof Object)){
var ex__6998__auto__ = e38161;
var statearr_38162_38332 = state_38154;
(statearr_38162_38332[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38333 = state_38154;
state_38154 = G__38333;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38154){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_38163 = f__7051__auto__.call(null);
(statearr_38163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___38331);

return statearr_38163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___38331,res,vec__38149,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38164){
var vec__38165 = p__38164;
var v = cljs.core.nth.call(null,vec__38165,(0),null);
var p = cljs.core.nth.call(null,vec__38165,(1),null);
var job = vec__38165;
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
var n__4517__auto___38334 = n;
var __38335 = (0);
while(true){
if((__38335 < n__4517__auto___38334)){
var G__38166_38336 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38166_38336) {
case "async":
var c__7050__auto___38338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38335,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__38335,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function (state_38179){
var state_val_38180 = (state_38179[(1)]);
if((state_val_38180 === (7))){
var inst_38175 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38181_38339 = state_38179__$1;
(statearr_38181_38339[(2)] = inst_38175);

(statearr_38181_38339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (6))){
var state_38179__$1 = state_38179;
var statearr_38182_38340 = state_38179__$1;
(statearr_38182_38340[(2)] = null);

(statearr_38182_38340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (5))){
var state_38179__$1 = state_38179;
var statearr_38183_38341 = state_38179__$1;
(statearr_38183_38341[(2)] = null);

(statearr_38183_38341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (4))){
var inst_38169 = (state_38179[(2)]);
var inst_38170 = async.call(null,inst_38169);
var state_38179__$1 = state_38179;
if(cljs.core.truth_(inst_38170)){
var statearr_38184_38342 = state_38179__$1;
(statearr_38184_38342[(1)] = (5));

} else {
var statearr_38185_38343 = state_38179__$1;
(statearr_38185_38343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (3))){
var inst_38177 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38179__$1,inst_38177);
} else {
if((state_val_38180 === (2))){
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38179__$1,(4),jobs);
} else {
if((state_val_38180 === (1))){
var state_38179__$1 = state_38179;
var statearr_38186_38344 = state_38179__$1;
(statearr_38186_38344[(2)] = null);

(statearr_38186_38344[(1)] = (2));


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
});})(__38335,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
;
return ((function (__38335,switch__6994__auto__,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_38190 = [null,null,null,null,null,null,null];
(statearr_38190[(0)] = state_machine__6995__auto__);

(statearr_38190[(1)] = (1));

return statearr_38190;
});
var state_machine__6995__auto____1 = (function (state_38179){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38191){if((e38191 instanceof Object)){
var ex__6998__auto__ = e38191;
var statearr_38192_38345 = state_38179;
(statearr_38192_38345[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38346 = state_38179;
state_38179 = G__38346;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38179){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__38335,switch__6994__auto__,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_38193 = f__7051__auto__.call(null);
(statearr_38193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___38338);

return statearr_38193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__38335,c__7050__auto___38338,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___38347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38335,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__38335,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function (state_38206){
var state_val_38207 = (state_38206[(1)]);
if((state_val_38207 === (7))){
var inst_38202 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38208_38348 = state_38206__$1;
(statearr_38208_38348[(2)] = inst_38202);

(statearr_38208_38348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (6))){
var state_38206__$1 = state_38206;
var statearr_38209_38349 = state_38206__$1;
(statearr_38209_38349[(2)] = null);

(statearr_38209_38349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (5))){
var state_38206__$1 = state_38206;
var statearr_38210_38350 = state_38206__$1;
(statearr_38210_38350[(2)] = null);

(statearr_38210_38350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (4))){
var inst_38196 = (state_38206[(2)]);
var inst_38197 = process.call(null,inst_38196);
var state_38206__$1 = state_38206;
if(cljs.core.truth_(inst_38197)){
var statearr_38211_38351 = state_38206__$1;
(statearr_38211_38351[(1)] = (5));

} else {
var statearr_38212_38352 = state_38206__$1;
(statearr_38212_38352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (3))){
var inst_38204 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38206__$1,inst_38204);
} else {
if((state_val_38207 === (2))){
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38206__$1,(4),jobs);
} else {
if((state_val_38207 === (1))){
var state_38206__$1 = state_38206;
var statearr_38213_38353 = state_38206__$1;
(statearr_38213_38353[(2)] = null);

(statearr_38213_38353[(1)] = (2));


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
});})(__38335,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
;
return ((function (__38335,switch__6994__auto__,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_38217 = [null,null,null,null,null,null,null];
(statearr_38217[(0)] = state_machine__6995__auto__);

(statearr_38217[(1)] = (1));

return statearr_38217;
});
var state_machine__6995__auto____1 = (function (state_38206){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38218){if((e38218 instanceof Object)){
var ex__6998__auto__ = e38218;
var statearr_38219_38354 = state_38206;
(statearr_38219_38354[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38355 = state_38206;
state_38206 = G__38355;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38206){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__38335,switch__6994__auto__,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_38220 = f__7051__auto__.call(null);
(statearr_38220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___38347);

return statearr_38220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__38335,c__7050__auto___38347,G__38166_38336,n__4517__auto___38334,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38356 = (__38335 + (1));
__38335 = G__38356;
continue;
} else {
}
break;
}

var c__7050__auto___38357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___38357,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___38357,jobs,results,process,async){
return (function (state_38242){
var state_val_38243 = (state_38242[(1)]);
if((state_val_38243 === (9))){
var inst_38235 = (state_38242[(2)]);
var state_38242__$1 = (function (){var statearr_38244 = state_38242;
(statearr_38244[(7)] = inst_38235);

return statearr_38244;
})();
var statearr_38245_38358 = state_38242__$1;
(statearr_38245_38358[(2)] = null);

(statearr_38245_38358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (8))){
var inst_38228 = (state_38242[(8)]);
var inst_38233 = (state_38242[(2)]);
var state_38242__$1 = (function (){var statearr_38246 = state_38242;
(statearr_38246[(9)] = inst_38233);

return statearr_38246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38242__$1,(9),results,inst_38228);
} else {
if((state_val_38243 === (7))){
var inst_38238 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
var statearr_38247_38359 = state_38242__$1;
(statearr_38247_38359[(2)] = inst_38238);

(statearr_38247_38359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (6))){
var inst_38228 = (state_38242[(8)]);
var inst_38223 = (state_38242[(10)]);
var inst_38228__$1 = cljs.core.async.chan.call(null,(1));
var inst_38229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38230 = [inst_38223,inst_38228__$1];
var inst_38231 = (new cljs.core.PersistentVector(null,2,(5),inst_38229,inst_38230,null));
var state_38242__$1 = (function (){var statearr_38248 = state_38242;
(statearr_38248[(8)] = inst_38228__$1);

return statearr_38248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38242__$1,(8),jobs,inst_38231);
} else {
if((state_val_38243 === (5))){
var inst_38226 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38242__$1 = state_38242;
var statearr_38249_38360 = state_38242__$1;
(statearr_38249_38360[(2)] = inst_38226);

(statearr_38249_38360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (4))){
var inst_38223 = (state_38242[(10)]);
var inst_38223__$1 = (state_38242[(2)]);
var inst_38224 = (inst_38223__$1 == null);
var state_38242__$1 = (function (){var statearr_38250 = state_38242;
(statearr_38250[(10)] = inst_38223__$1);

return statearr_38250;
})();
if(cljs.core.truth_(inst_38224)){
var statearr_38251_38361 = state_38242__$1;
(statearr_38251_38361[(1)] = (5));

} else {
var statearr_38252_38362 = state_38242__$1;
(statearr_38252_38362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38243 === (3))){
var inst_38240 = (state_38242[(2)]);
var state_38242__$1 = state_38242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38242__$1,inst_38240);
} else {
if((state_val_38243 === (2))){
var state_38242__$1 = state_38242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38242__$1,(4),from);
} else {
if((state_val_38243 === (1))){
var state_38242__$1 = state_38242;
var statearr_38253_38363 = state_38242__$1;
(statearr_38253_38363[(2)] = null);

(statearr_38253_38363[(1)] = (2));


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
});})(c__7050__auto___38357,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___38357,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_38257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38257[(0)] = state_machine__6995__auto__);

(statearr_38257[(1)] = (1));

return statearr_38257;
});
var state_machine__6995__auto____1 = (function (state_38242){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38258){if((e38258 instanceof Object)){
var ex__6998__auto__ = e38258;
var statearr_38259_38364 = state_38242;
(statearr_38259_38364[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38365 = state_38242;
state_38242 = G__38365;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38242){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___38357,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_38260 = f__7051__auto__.call(null);
(statearr_38260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___38357);

return statearr_38260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___38357,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_38298){
var state_val_38299 = (state_38298[(1)]);
if((state_val_38299 === (7))){
var inst_38294 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38300_38366 = state_38298__$1;
(statearr_38300_38366[(2)] = inst_38294);

(statearr_38300_38366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (20))){
var state_38298__$1 = state_38298;
var statearr_38301_38367 = state_38298__$1;
(statearr_38301_38367[(2)] = null);

(statearr_38301_38367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (1))){
var state_38298__$1 = state_38298;
var statearr_38302_38368 = state_38298__$1;
(statearr_38302_38368[(2)] = null);

(statearr_38302_38368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (4))){
var inst_38263 = (state_38298[(7)]);
var inst_38263__$1 = (state_38298[(2)]);
var inst_38264 = (inst_38263__$1 == null);
var state_38298__$1 = (function (){var statearr_38303 = state_38298;
(statearr_38303[(7)] = inst_38263__$1);

return statearr_38303;
})();
if(cljs.core.truth_(inst_38264)){
var statearr_38304_38369 = state_38298__$1;
(statearr_38304_38369[(1)] = (5));

} else {
var statearr_38305_38370 = state_38298__$1;
(statearr_38305_38370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (15))){
var inst_38276 = (state_38298[(8)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38298__$1,(18),to,inst_38276);
} else {
if((state_val_38299 === (21))){
var inst_38289 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38306_38371 = state_38298__$1;
(statearr_38306_38371[(2)] = inst_38289);

(statearr_38306_38371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (13))){
var inst_38291 = (state_38298[(2)]);
var state_38298__$1 = (function (){var statearr_38307 = state_38298;
(statearr_38307[(9)] = inst_38291);

return statearr_38307;
})();
var statearr_38308_38372 = state_38298__$1;
(statearr_38308_38372[(2)] = null);

(statearr_38308_38372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (6))){
var inst_38263 = (state_38298[(7)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38298__$1,(11),inst_38263);
} else {
if((state_val_38299 === (17))){
var inst_38284 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
if(cljs.core.truth_(inst_38284)){
var statearr_38309_38373 = state_38298__$1;
(statearr_38309_38373[(1)] = (19));

} else {
var statearr_38310_38374 = state_38298__$1;
(statearr_38310_38374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (3))){
var inst_38296 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38298__$1,inst_38296);
} else {
if((state_val_38299 === (12))){
var inst_38273 = (state_38298[(10)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38298__$1,(14),inst_38273);
} else {
if((state_val_38299 === (2))){
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38298__$1,(4),results);
} else {
if((state_val_38299 === (19))){
var state_38298__$1 = state_38298;
var statearr_38311_38375 = state_38298__$1;
(statearr_38311_38375[(2)] = null);

(statearr_38311_38375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (11))){
var inst_38273 = (state_38298[(2)]);
var state_38298__$1 = (function (){var statearr_38312 = state_38298;
(statearr_38312[(10)] = inst_38273);

return statearr_38312;
})();
var statearr_38313_38376 = state_38298__$1;
(statearr_38313_38376[(2)] = null);

(statearr_38313_38376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (9))){
var state_38298__$1 = state_38298;
var statearr_38314_38377 = state_38298__$1;
(statearr_38314_38377[(2)] = null);

(statearr_38314_38377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (5))){
var state_38298__$1 = state_38298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38315_38378 = state_38298__$1;
(statearr_38315_38378[(1)] = (8));

} else {
var statearr_38316_38379 = state_38298__$1;
(statearr_38316_38379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (14))){
var inst_38276 = (state_38298[(8)]);
var inst_38278 = (state_38298[(11)]);
var inst_38276__$1 = (state_38298[(2)]);
var inst_38277 = (inst_38276__$1 == null);
var inst_38278__$1 = cljs.core.not.call(null,inst_38277);
var state_38298__$1 = (function (){var statearr_38317 = state_38298;
(statearr_38317[(8)] = inst_38276__$1);

(statearr_38317[(11)] = inst_38278__$1);

return statearr_38317;
})();
if(inst_38278__$1){
var statearr_38318_38380 = state_38298__$1;
(statearr_38318_38380[(1)] = (15));

} else {
var statearr_38319_38381 = state_38298__$1;
(statearr_38319_38381[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (16))){
var inst_38278 = (state_38298[(11)]);
var state_38298__$1 = state_38298;
var statearr_38320_38382 = state_38298__$1;
(statearr_38320_38382[(2)] = inst_38278);

(statearr_38320_38382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (10))){
var inst_38270 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38321_38383 = state_38298__$1;
(statearr_38321_38383[(2)] = inst_38270);

(statearr_38321_38383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (18))){
var inst_38281 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38322_38384 = state_38298__$1;
(statearr_38322_38384[(2)] = inst_38281);

(statearr_38322_38384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (8))){
var inst_38267 = cljs.core.async.close_BANG_.call(null,to);
var state_38298__$1 = state_38298;
var statearr_38323_38385 = state_38298__$1;
(statearr_38323_38385[(2)] = inst_38267);

(statearr_38323_38385[(1)] = (10));


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
var statearr_38327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38327[(0)] = state_machine__6995__auto__);

(statearr_38327[(1)] = (1));

return statearr_38327;
});
var state_machine__6995__auto____1 = (function (state_38298){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38328){if((e38328 instanceof Object)){
var ex__6998__auto__ = e38328;
var statearr_38329_38386 = state_38298;
(statearr_38329_38386[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38387 = state_38298;
state_38298 = G__38387;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38298){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_38330 = f__7051__auto__.call(null);
(statearr_38330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_38330;
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
var c__7050__auto___38488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___38488,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___38488,tc,fc){
return (function (state_38463){
var state_val_38464 = (state_38463[(1)]);
if((state_val_38464 === (7))){
var inst_38459 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
var statearr_38465_38489 = state_38463__$1;
(statearr_38465_38489[(2)] = inst_38459);

(statearr_38465_38489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (1))){
var state_38463__$1 = state_38463;
var statearr_38466_38490 = state_38463__$1;
(statearr_38466_38490[(2)] = null);

(statearr_38466_38490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (4))){
var inst_38440 = (state_38463[(7)]);
var inst_38440__$1 = (state_38463[(2)]);
var inst_38441 = (inst_38440__$1 == null);
var state_38463__$1 = (function (){var statearr_38467 = state_38463;
(statearr_38467[(7)] = inst_38440__$1);

return statearr_38467;
})();
if(cljs.core.truth_(inst_38441)){
var statearr_38468_38491 = state_38463__$1;
(statearr_38468_38491[(1)] = (5));

} else {
var statearr_38469_38492 = state_38463__$1;
(statearr_38469_38492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (13))){
var state_38463__$1 = state_38463;
var statearr_38470_38493 = state_38463__$1;
(statearr_38470_38493[(2)] = null);

(statearr_38470_38493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (6))){
var inst_38440 = (state_38463[(7)]);
var inst_38446 = p.call(null,inst_38440);
var state_38463__$1 = state_38463;
if(cljs.core.truth_(inst_38446)){
var statearr_38471_38494 = state_38463__$1;
(statearr_38471_38494[(1)] = (9));

} else {
var statearr_38472_38495 = state_38463__$1;
(statearr_38472_38495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (3))){
var inst_38461 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38463__$1,inst_38461);
} else {
if((state_val_38464 === (12))){
var state_38463__$1 = state_38463;
var statearr_38473_38496 = state_38463__$1;
(statearr_38473_38496[(2)] = null);

(statearr_38473_38496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (2))){
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38463__$1,(4),ch);
} else {
if((state_val_38464 === (11))){
var inst_38440 = (state_38463[(7)]);
var inst_38450 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38463__$1,(8),inst_38450,inst_38440);
} else {
if((state_val_38464 === (9))){
var state_38463__$1 = state_38463;
var statearr_38474_38497 = state_38463__$1;
(statearr_38474_38497[(2)] = tc);

(statearr_38474_38497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (5))){
var inst_38443 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38444 = cljs.core.async.close_BANG_.call(null,fc);
var state_38463__$1 = (function (){var statearr_38475 = state_38463;
(statearr_38475[(8)] = inst_38443);

return statearr_38475;
})();
var statearr_38476_38498 = state_38463__$1;
(statearr_38476_38498[(2)] = inst_38444);

(statearr_38476_38498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (14))){
var inst_38457 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
var statearr_38477_38499 = state_38463__$1;
(statearr_38477_38499[(2)] = inst_38457);

(statearr_38477_38499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (10))){
var state_38463__$1 = state_38463;
var statearr_38478_38500 = state_38463__$1;
(statearr_38478_38500[(2)] = fc);

(statearr_38478_38500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (8))){
var inst_38452 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
if(cljs.core.truth_(inst_38452)){
var statearr_38479_38501 = state_38463__$1;
(statearr_38479_38501[(1)] = (12));

} else {
var statearr_38480_38502 = state_38463__$1;
(statearr_38480_38502[(1)] = (13));

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
});})(c__7050__auto___38488,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___38488,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_38484 = [null,null,null,null,null,null,null,null,null];
(statearr_38484[(0)] = state_machine__6995__auto__);

(statearr_38484[(1)] = (1));

return statearr_38484;
});
var state_machine__6995__auto____1 = (function (state_38463){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38485){if((e38485 instanceof Object)){
var ex__6998__auto__ = e38485;
var statearr_38486_38503 = state_38463;
(statearr_38486_38503[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38504 = state_38463;
state_38463 = G__38504;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38463){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___38488,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_38487 = f__7051__auto__.call(null);
(statearr_38487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___38488);

return statearr_38487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___38488,tc,fc))
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
return (function (state_38551){
var state_val_38552 = (state_38551[(1)]);
if((state_val_38552 === (7))){
var inst_38547 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38553_38569 = state_38551__$1;
(statearr_38553_38569[(2)] = inst_38547);

(statearr_38553_38569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (6))){
var inst_38537 = (state_38551[(7)]);
var inst_38540 = (state_38551[(8)]);
var inst_38544 = f.call(null,inst_38537,inst_38540);
var inst_38537__$1 = inst_38544;
var state_38551__$1 = (function (){var statearr_38554 = state_38551;
(statearr_38554[(7)] = inst_38537__$1);

return statearr_38554;
})();
var statearr_38555_38570 = state_38551__$1;
(statearr_38555_38570[(2)] = null);

(statearr_38555_38570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (5))){
var inst_38537 = (state_38551[(7)]);
var state_38551__$1 = state_38551;
var statearr_38556_38571 = state_38551__$1;
(statearr_38556_38571[(2)] = inst_38537);

(statearr_38556_38571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (4))){
var inst_38540 = (state_38551[(8)]);
var inst_38540__$1 = (state_38551[(2)]);
var inst_38541 = (inst_38540__$1 == null);
var state_38551__$1 = (function (){var statearr_38557 = state_38551;
(statearr_38557[(8)] = inst_38540__$1);

return statearr_38557;
})();
if(cljs.core.truth_(inst_38541)){
var statearr_38558_38572 = state_38551__$1;
(statearr_38558_38572[(1)] = (5));

} else {
var statearr_38559_38573 = state_38551__$1;
(statearr_38559_38573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (3))){
var inst_38549 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38551__$1,inst_38549);
} else {
if((state_val_38552 === (2))){
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38551__$1,(4),ch);
} else {
if((state_val_38552 === (1))){
var inst_38537 = init;
var state_38551__$1 = (function (){var statearr_38560 = state_38551;
(statearr_38560[(7)] = inst_38537);

return statearr_38560;
})();
var statearr_38561_38574 = state_38551__$1;
(statearr_38561_38574[(2)] = null);

(statearr_38561_38574[(1)] = (2));


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
var statearr_38565 = [null,null,null,null,null,null,null,null,null];
(statearr_38565[(0)] = state_machine__6995__auto__);

(statearr_38565[(1)] = (1));

return statearr_38565;
});
var state_machine__6995__auto____1 = (function (state_38551){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38566){if((e38566 instanceof Object)){
var ex__6998__auto__ = e38566;
var statearr_38567_38575 = state_38551;
(statearr_38567_38575[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38576 = state_38551;
state_38551 = G__38576;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_38568 = f__7051__auto__.call(null);
(statearr_38568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_38568;
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
return (function (state_38650){
var state_val_38651 = (state_38650[(1)]);
if((state_val_38651 === (7))){
var inst_38632 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38652_38675 = state_38650__$1;
(statearr_38652_38675[(2)] = inst_38632);

(statearr_38652_38675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (1))){
var inst_38626 = cljs.core.seq.call(null,coll);
var inst_38627 = inst_38626;
var state_38650__$1 = (function (){var statearr_38653 = state_38650;
(statearr_38653[(7)] = inst_38627);

return statearr_38653;
})();
var statearr_38654_38676 = state_38650__$1;
(statearr_38654_38676[(2)] = null);

(statearr_38654_38676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (4))){
var inst_38627 = (state_38650[(7)]);
var inst_38630 = cljs.core.first.call(null,inst_38627);
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38650__$1,(7),ch,inst_38630);
} else {
if((state_val_38651 === (13))){
var inst_38644 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38655_38677 = state_38650__$1;
(statearr_38655_38677[(2)] = inst_38644);

(statearr_38655_38677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (6))){
var inst_38635 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
if(cljs.core.truth_(inst_38635)){
var statearr_38656_38678 = state_38650__$1;
(statearr_38656_38678[(1)] = (8));

} else {
var statearr_38657_38679 = state_38650__$1;
(statearr_38657_38679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (3))){
var inst_38648 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38650__$1,inst_38648);
} else {
if((state_val_38651 === (12))){
var state_38650__$1 = state_38650;
var statearr_38658_38680 = state_38650__$1;
(statearr_38658_38680[(2)] = null);

(statearr_38658_38680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (2))){
var inst_38627 = (state_38650[(7)]);
var state_38650__$1 = state_38650;
if(cljs.core.truth_(inst_38627)){
var statearr_38659_38681 = state_38650__$1;
(statearr_38659_38681[(1)] = (4));

} else {
var statearr_38660_38682 = state_38650__$1;
(statearr_38660_38682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (11))){
var inst_38641 = cljs.core.async.close_BANG_.call(null,ch);
var state_38650__$1 = state_38650;
var statearr_38661_38683 = state_38650__$1;
(statearr_38661_38683[(2)] = inst_38641);

(statearr_38661_38683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (9))){
var state_38650__$1 = state_38650;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38662_38684 = state_38650__$1;
(statearr_38662_38684[(1)] = (11));

} else {
var statearr_38663_38685 = state_38650__$1;
(statearr_38663_38685[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (5))){
var inst_38627 = (state_38650[(7)]);
var state_38650__$1 = state_38650;
var statearr_38664_38686 = state_38650__$1;
(statearr_38664_38686[(2)] = inst_38627);

(statearr_38664_38686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (10))){
var inst_38646 = (state_38650[(2)]);
var state_38650__$1 = state_38650;
var statearr_38665_38687 = state_38650__$1;
(statearr_38665_38687[(2)] = inst_38646);

(statearr_38665_38687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38651 === (8))){
var inst_38627 = (state_38650[(7)]);
var inst_38637 = cljs.core.next.call(null,inst_38627);
var inst_38627__$1 = inst_38637;
var state_38650__$1 = (function (){var statearr_38666 = state_38650;
(statearr_38666[(7)] = inst_38627__$1);

return statearr_38666;
})();
var statearr_38667_38688 = state_38650__$1;
(statearr_38667_38688[(2)] = null);

(statearr_38667_38688[(1)] = (2));


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
var statearr_38671 = [null,null,null,null,null,null,null,null];
(statearr_38671[(0)] = state_machine__6995__auto__);

(statearr_38671[(1)] = (1));

return statearr_38671;
});
var state_machine__6995__auto____1 = (function (state_38650){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_38650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e38672){if((e38672 instanceof Object)){
var ex__6998__auto__ = e38672;
var statearr_38673_38689 = state_38650;
(statearr_38673_38689[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38690 = state_38650;
state_38650 = G__38690;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_38650){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_38650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_38674 = f__7051__auto__.call(null);
(statearr_38674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_38674;
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

cljs.core.async.Mux = (function (){var obj38692 = {};
return obj38692;
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


cljs.core.async.Mult = (function (){var obj38694 = {};
return obj38694;
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
if(typeof cljs.core.async.t38916 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38916 = (function (cs,ch,mult,meta38917){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38917 = meta38917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38916.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t38916.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t38916.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t38916.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t38916.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t38916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38918){
var self__ = this;
var _38918__$1 = this;
return self__.meta38917;
});})(cs))
;

cljs.core.async.t38916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38918,meta38917__$1){
var self__ = this;
var _38918__$1 = this;
return (new cljs.core.async.t38916(self__.cs,self__.ch,self__.mult,meta38917__$1));
});})(cs))
;

cljs.core.async.t38916.cljs$lang$type = true;

cljs.core.async.t38916.cljs$lang$ctorStr = "cljs.core.async/t38916";

cljs.core.async.t38916.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t38916");
});})(cs))
;

cljs.core.async.__GT_t38916 = ((function (cs){
return (function __GT_t38916(cs__$1,ch__$1,mult__$1,meta38917){
return (new cljs.core.async.t38916(cs__$1,ch__$1,mult__$1,meta38917));
});})(cs))
;

}

return (new cljs.core.async.t38916(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___39137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___39137,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___39137,cs,m,dchan,dctr,done){
return (function (state_39049){
var state_val_39050 = (state_39049[(1)]);
if((state_val_39050 === (7))){
var inst_39045 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39051_39138 = state_39049__$1;
(statearr_39051_39138[(2)] = inst_39045);

(statearr_39051_39138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (20))){
var inst_38950 = (state_39049[(7)]);
var inst_38960 = cljs.core.first.call(null,inst_38950);
var inst_38961 = cljs.core.nth.call(null,inst_38960,(0),null);
var inst_38962 = cljs.core.nth.call(null,inst_38960,(1),null);
var state_39049__$1 = (function (){var statearr_39052 = state_39049;
(statearr_39052[(8)] = inst_38961);

return statearr_39052;
})();
if(cljs.core.truth_(inst_38962)){
var statearr_39053_39139 = state_39049__$1;
(statearr_39053_39139[(1)] = (22));

} else {
var statearr_39054_39140 = state_39049__$1;
(statearr_39054_39140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (27))){
var inst_38992 = (state_39049[(9)]);
var inst_38990 = (state_39049[(10)]);
var inst_38997 = (state_39049[(11)]);
var inst_38921 = (state_39049[(12)]);
var inst_38997__$1 = cljs.core._nth.call(null,inst_38990,inst_38992);
var inst_38998 = cljs.core.async.put_BANG_.call(null,inst_38997__$1,inst_38921,done);
var state_39049__$1 = (function (){var statearr_39055 = state_39049;
(statearr_39055[(11)] = inst_38997__$1);

return statearr_39055;
})();
if(cljs.core.truth_(inst_38998)){
var statearr_39056_39141 = state_39049__$1;
(statearr_39056_39141[(1)] = (30));

} else {
var statearr_39057_39142 = state_39049__$1;
(statearr_39057_39142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (1))){
var state_39049__$1 = state_39049;
var statearr_39058_39143 = state_39049__$1;
(statearr_39058_39143[(2)] = null);

(statearr_39058_39143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (24))){
var inst_38950 = (state_39049[(7)]);
var inst_38967 = (state_39049[(2)]);
var inst_38968 = cljs.core.next.call(null,inst_38950);
var inst_38930 = inst_38968;
var inst_38931 = null;
var inst_38932 = (0);
var inst_38933 = (0);
var state_39049__$1 = (function (){var statearr_39059 = state_39049;
(statearr_39059[(13)] = inst_38932);

(statearr_39059[(14)] = inst_38931);

(statearr_39059[(15)] = inst_38930);

(statearr_39059[(16)] = inst_38933);

(statearr_39059[(17)] = inst_38967);

return statearr_39059;
})();
var statearr_39060_39144 = state_39049__$1;
(statearr_39060_39144[(2)] = null);

(statearr_39060_39144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (39))){
var state_39049__$1 = state_39049;
var statearr_39064_39145 = state_39049__$1;
(statearr_39064_39145[(2)] = null);

(statearr_39064_39145[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (4))){
var inst_38921 = (state_39049[(12)]);
var inst_38921__$1 = (state_39049[(2)]);
var inst_38922 = (inst_38921__$1 == null);
var state_39049__$1 = (function (){var statearr_39065 = state_39049;
(statearr_39065[(12)] = inst_38921__$1);

return statearr_39065;
})();
if(cljs.core.truth_(inst_38922)){
var statearr_39066_39146 = state_39049__$1;
(statearr_39066_39146[(1)] = (5));

} else {
var statearr_39067_39147 = state_39049__$1;
(statearr_39067_39147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (15))){
var inst_38932 = (state_39049[(13)]);
var inst_38931 = (state_39049[(14)]);
var inst_38930 = (state_39049[(15)]);
var inst_38933 = (state_39049[(16)]);
var inst_38946 = (state_39049[(2)]);
var inst_38947 = (inst_38933 + (1));
var tmp39061 = inst_38932;
var tmp39062 = inst_38931;
var tmp39063 = inst_38930;
var inst_38930__$1 = tmp39063;
var inst_38931__$1 = tmp39062;
var inst_38932__$1 = tmp39061;
var inst_38933__$1 = inst_38947;
var state_39049__$1 = (function (){var statearr_39068 = state_39049;
(statearr_39068[(13)] = inst_38932__$1);

(statearr_39068[(18)] = inst_38946);

(statearr_39068[(14)] = inst_38931__$1);

(statearr_39068[(15)] = inst_38930__$1);

(statearr_39068[(16)] = inst_38933__$1);

return statearr_39068;
})();
var statearr_39069_39148 = state_39049__$1;
(statearr_39069_39148[(2)] = null);

(statearr_39069_39148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (21))){
var inst_38971 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39073_39149 = state_39049__$1;
(statearr_39073_39149[(2)] = inst_38971);

(statearr_39073_39149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (31))){
var inst_38997 = (state_39049[(11)]);
var inst_39001 = done.call(null,null);
var inst_39002 = cljs.core.async.untap_STAR_.call(null,m,inst_38997);
var state_39049__$1 = (function (){var statearr_39074 = state_39049;
(statearr_39074[(19)] = inst_39001);

return statearr_39074;
})();
var statearr_39075_39150 = state_39049__$1;
(statearr_39075_39150[(2)] = inst_39002);

(statearr_39075_39150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (32))){
var inst_38992 = (state_39049[(9)]);
var inst_38991 = (state_39049[(20)]);
var inst_38990 = (state_39049[(10)]);
var inst_38989 = (state_39049[(21)]);
var inst_39004 = (state_39049[(2)]);
var inst_39005 = (inst_38992 + (1));
var tmp39070 = inst_38991;
var tmp39071 = inst_38990;
var tmp39072 = inst_38989;
var inst_38989__$1 = tmp39072;
var inst_38990__$1 = tmp39071;
var inst_38991__$1 = tmp39070;
var inst_38992__$1 = inst_39005;
var state_39049__$1 = (function (){var statearr_39076 = state_39049;
(statearr_39076[(22)] = inst_39004);

(statearr_39076[(9)] = inst_38992__$1);

(statearr_39076[(20)] = inst_38991__$1);

(statearr_39076[(10)] = inst_38990__$1);

(statearr_39076[(21)] = inst_38989__$1);

return statearr_39076;
})();
var statearr_39077_39151 = state_39049__$1;
(statearr_39077_39151[(2)] = null);

(statearr_39077_39151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (40))){
var inst_39017 = (state_39049[(23)]);
var inst_39021 = done.call(null,null);
var inst_39022 = cljs.core.async.untap_STAR_.call(null,m,inst_39017);
var state_39049__$1 = (function (){var statearr_39078 = state_39049;
(statearr_39078[(24)] = inst_39021);

return statearr_39078;
})();
var statearr_39079_39152 = state_39049__$1;
(statearr_39079_39152[(2)] = inst_39022);

(statearr_39079_39152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (33))){
var inst_39008 = (state_39049[(25)]);
var inst_39010 = cljs.core.chunked_seq_QMARK_.call(null,inst_39008);
var state_39049__$1 = state_39049;
if(inst_39010){
var statearr_39080_39153 = state_39049__$1;
(statearr_39080_39153[(1)] = (36));

} else {
var statearr_39081_39154 = state_39049__$1;
(statearr_39081_39154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (13))){
var inst_38940 = (state_39049[(26)]);
var inst_38943 = cljs.core.async.close_BANG_.call(null,inst_38940);
var state_39049__$1 = state_39049;
var statearr_39082_39155 = state_39049__$1;
(statearr_39082_39155[(2)] = inst_38943);

(statearr_39082_39155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (22))){
var inst_38961 = (state_39049[(8)]);
var inst_38964 = cljs.core.async.close_BANG_.call(null,inst_38961);
var state_39049__$1 = state_39049;
var statearr_39083_39156 = state_39049__$1;
(statearr_39083_39156[(2)] = inst_38964);

(statearr_39083_39156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (36))){
var inst_39008 = (state_39049[(25)]);
var inst_39012 = cljs.core.chunk_first.call(null,inst_39008);
var inst_39013 = cljs.core.chunk_rest.call(null,inst_39008);
var inst_39014 = cljs.core.count.call(null,inst_39012);
var inst_38989 = inst_39013;
var inst_38990 = inst_39012;
var inst_38991 = inst_39014;
var inst_38992 = (0);
var state_39049__$1 = (function (){var statearr_39084 = state_39049;
(statearr_39084[(9)] = inst_38992);

(statearr_39084[(20)] = inst_38991);

(statearr_39084[(10)] = inst_38990);

(statearr_39084[(21)] = inst_38989);

return statearr_39084;
})();
var statearr_39085_39157 = state_39049__$1;
(statearr_39085_39157[(2)] = null);

(statearr_39085_39157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (41))){
var inst_39008 = (state_39049[(25)]);
var inst_39024 = (state_39049[(2)]);
var inst_39025 = cljs.core.next.call(null,inst_39008);
var inst_38989 = inst_39025;
var inst_38990 = null;
var inst_38991 = (0);
var inst_38992 = (0);
var state_39049__$1 = (function (){var statearr_39086 = state_39049;
(statearr_39086[(9)] = inst_38992);

(statearr_39086[(20)] = inst_38991);

(statearr_39086[(10)] = inst_38990);

(statearr_39086[(21)] = inst_38989);

(statearr_39086[(27)] = inst_39024);

return statearr_39086;
})();
var statearr_39087_39158 = state_39049__$1;
(statearr_39087_39158[(2)] = null);

(statearr_39087_39158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (43))){
var state_39049__$1 = state_39049;
var statearr_39088_39159 = state_39049__$1;
(statearr_39088_39159[(2)] = null);

(statearr_39088_39159[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (29))){
var inst_39033 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39089_39160 = state_39049__$1;
(statearr_39089_39160[(2)] = inst_39033);

(statearr_39089_39160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (44))){
var inst_39042 = (state_39049[(2)]);
var state_39049__$1 = (function (){var statearr_39090 = state_39049;
(statearr_39090[(28)] = inst_39042);

return statearr_39090;
})();
var statearr_39091_39161 = state_39049__$1;
(statearr_39091_39161[(2)] = null);

(statearr_39091_39161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (6))){
var inst_38981 = (state_39049[(29)]);
var inst_38980 = cljs.core.deref.call(null,cs);
var inst_38981__$1 = cljs.core.keys.call(null,inst_38980);
var inst_38982 = cljs.core.count.call(null,inst_38981__$1);
var inst_38983 = cljs.core.reset_BANG_.call(null,dctr,inst_38982);
var inst_38988 = cljs.core.seq.call(null,inst_38981__$1);
var inst_38989 = inst_38988;
var inst_38990 = null;
var inst_38991 = (0);
var inst_38992 = (0);
var state_39049__$1 = (function (){var statearr_39092 = state_39049;
(statearr_39092[(30)] = inst_38983);

(statearr_39092[(9)] = inst_38992);

(statearr_39092[(20)] = inst_38991);

(statearr_39092[(10)] = inst_38990);

(statearr_39092[(29)] = inst_38981__$1);

(statearr_39092[(21)] = inst_38989);

return statearr_39092;
})();
var statearr_39093_39162 = state_39049__$1;
(statearr_39093_39162[(2)] = null);

(statearr_39093_39162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (28))){
var inst_39008 = (state_39049[(25)]);
var inst_38989 = (state_39049[(21)]);
var inst_39008__$1 = cljs.core.seq.call(null,inst_38989);
var state_39049__$1 = (function (){var statearr_39094 = state_39049;
(statearr_39094[(25)] = inst_39008__$1);

return statearr_39094;
})();
if(inst_39008__$1){
var statearr_39095_39163 = state_39049__$1;
(statearr_39095_39163[(1)] = (33));

} else {
var statearr_39096_39164 = state_39049__$1;
(statearr_39096_39164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (25))){
var inst_38992 = (state_39049[(9)]);
var inst_38991 = (state_39049[(20)]);
var inst_38994 = (inst_38992 < inst_38991);
var inst_38995 = inst_38994;
var state_39049__$1 = state_39049;
if(cljs.core.truth_(inst_38995)){
var statearr_39097_39165 = state_39049__$1;
(statearr_39097_39165[(1)] = (27));

} else {
var statearr_39098_39166 = state_39049__$1;
(statearr_39098_39166[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (34))){
var state_39049__$1 = state_39049;
var statearr_39099_39167 = state_39049__$1;
(statearr_39099_39167[(2)] = null);

(statearr_39099_39167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (17))){
var state_39049__$1 = state_39049;
var statearr_39100_39168 = state_39049__$1;
(statearr_39100_39168[(2)] = null);

(statearr_39100_39168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (3))){
var inst_39047 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39049__$1,inst_39047);
} else {
if((state_val_39050 === (12))){
var inst_38976 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39101_39169 = state_39049__$1;
(statearr_39101_39169[(2)] = inst_38976);

(statearr_39101_39169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (2))){
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39049__$1,(4),ch);
} else {
if((state_val_39050 === (23))){
var state_39049__$1 = state_39049;
var statearr_39102_39170 = state_39049__$1;
(statearr_39102_39170[(2)] = null);

(statearr_39102_39170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (35))){
var inst_39031 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39103_39171 = state_39049__$1;
(statearr_39103_39171[(2)] = inst_39031);

(statearr_39103_39171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (19))){
var inst_38950 = (state_39049[(7)]);
var inst_38954 = cljs.core.chunk_first.call(null,inst_38950);
var inst_38955 = cljs.core.chunk_rest.call(null,inst_38950);
var inst_38956 = cljs.core.count.call(null,inst_38954);
var inst_38930 = inst_38955;
var inst_38931 = inst_38954;
var inst_38932 = inst_38956;
var inst_38933 = (0);
var state_39049__$1 = (function (){var statearr_39104 = state_39049;
(statearr_39104[(13)] = inst_38932);

(statearr_39104[(14)] = inst_38931);

(statearr_39104[(15)] = inst_38930);

(statearr_39104[(16)] = inst_38933);

return statearr_39104;
})();
var statearr_39105_39172 = state_39049__$1;
(statearr_39105_39172[(2)] = null);

(statearr_39105_39172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (11))){
var inst_38950 = (state_39049[(7)]);
var inst_38930 = (state_39049[(15)]);
var inst_38950__$1 = cljs.core.seq.call(null,inst_38930);
var state_39049__$1 = (function (){var statearr_39106 = state_39049;
(statearr_39106[(7)] = inst_38950__$1);

return statearr_39106;
})();
if(inst_38950__$1){
var statearr_39107_39173 = state_39049__$1;
(statearr_39107_39173[(1)] = (16));

} else {
var statearr_39108_39174 = state_39049__$1;
(statearr_39108_39174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (9))){
var inst_38978 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39109_39175 = state_39049__$1;
(statearr_39109_39175[(2)] = inst_38978);

(statearr_39109_39175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (5))){
var inst_38928 = cljs.core.deref.call(null,cs);
var inst_38929 = cljs.core.seq.call(null,inst_38928);
var inst_38930 = inst_38929;
var inst_38931 = null;
var inst_38932 = (0);
var inst_38933 = (0);
var state_39049__$1 = (function (){var statearr_39110 = state_39049;
(statearr_39110[(13)] = inst_38932);

(statearr_39110[(14)] = inst_38931);

(statearr_39110[(15)] = inst_38930);

(statearr_39110[(16)] = inst_38933);

return statearr_39110;
})();
var statearr_39111_39176 = state_39049__$1;
(statearr_39111_39176[(2)] = null);

(statearr_39111_39176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (14))){
var state_39049__$1 = state_39049;
var statearr_39112_39177 = state_39049__$1;
(statearr_39112_39177[(2)] = null);

(statearr_39112_39177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (45))){
var inst_39039 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39113_39178 = state_39049__$1;
(statearr_39113_39178[(2)] = inst_39039);

(statearr_39113_39178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (26))){
var inst_38981 = (state_39049[(29)]);
var inst_39035 = (state_39049[(2)]);
var inst_39036 = cljs.core.seq.call(null,inst_38981);
var state_39049__$1 = (function (){var statearr_39114 = state_39049;
(statearr_39114[(31)] = inst_39035);

return statearr_39114;
})();
if(inst_39036){
var statearr_39115_39179 = state_39049__$1;
(statearr_39115_39179[(1)] = (42));

} else {
var statearr_39116_39180 = state_39049__$1;
(statearr_39116_39180[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (16))){
var inst_38950 = (state_39049[(7)]);
var inst_38952 = cljs.core.chunked_seq_QMARK_.call(null,inst_38950);
var state_39049__$1 = state_39049;
if(inst_38952){
var statearr_39117_39181 = state_39049__$1;
(statearr_39117_39181[(1)] = (19));

} else {
var statearr_39118_39182 = state_39049__$1;
(statearr_39118_39182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (38))){
var inst_39028 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39119_39183 = state_39049__$1;
(statearr_39119_39183[(2)] = inst_39028);

(statearr_39119_39183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (30))){
var state_39049__$1 = state_39049;
var statearr_39120_39184 = state_39049__$1;
(statearr_39120_39184[(2)] = null);

(statearr_39120_39184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (10))){
var inst_38931 = (state_39049[(14)]);
var inst_38933 = (state_39049[(16)]);
var inst_38939 = cljs.core._nth.call(null,inst_38931,inst_38933);
var inst_38940 = cljs.core.nth.call(null,inst_38939,(0),null);
var inst_38941 = cljs.core.nth.call(null,inst_38939,(1),null);
var state_39049__$1 = (function (){var statearr_39121 = state_39049;
(statearr_39121[(26)] = inst_38940);

return statearr_39121;
})();
if(cljs.core.truth_(inst_38941)){
var statearr_39122_39185 = state_39049__$1;
(statearr_39122_39185[(1)] = (13));

} else {
var statearr_39123_39186 = state_39049__$1;
(statearr_39123_39186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (18))){
var inst_38974 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39124_39187 = state_39049__$1;
(statearr_39124_39187[(2)] = inst_38974);

(statearr_39124_39187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (42))){
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39049__$1,(45),dchan);
} else {
if((state_val_39050 === (37))){
var inst_39008 = (state_39049[(25)]);
var inst_39017 = (state_39049[(23)]);
var inst_38921 = (state_39049[(12)]);
var inst_39017__$1 = cljs.core.first.call(null,inst_39008);
var inst_39018 = cljs.core.async.put_BANG_.call(null,inst_39017__$1,inst_38921,done);
var state_39049__$1 = (function (){var statearr_39125 = state_39049;
(statearr_39125[(23)] = inst_39017__$1);

return statearr_39125;
})();
if(cljs.core.truth_(inst_39018)){
var statearr_39126_39188 = state_39049__$1;
(statearr_39126_39188[(1)] = (39));

} else {
var statearr_39127_39189 = state_39049__$1;
(statearr_39127_39189[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (8))){
var inst_38932 = (state_39049[(13)]);
var inst_38933 = (state_39049[(16)]);
var inst_38935 = (inst_38933 < inst_38932);
var inst_38936 = inst_38935;
var state_39049__$1 = state_39049;
if(cljs.core.truth_(inst_38936)){
var statearr_39128_39190 = state_39049__$1;
(statearr_39128_39190[(1)] = (10));

} else {
var statearr_39129_39191 = state_39049__$1;
(statearr_39129_39191[(1)] = (11));

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
});})(c__7050__auto___39137,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___39137,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_39133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39133[(0)] = state_machine__6995__auto__);

(statearr_39133[(1)] = (1));

return statearr_39133;
});
var state_machine__6995__auto____1 = (function (state_39049){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_39049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e39134){if((e39134 instanceof Object)){
var ex__6998__auto__ = e39134;
var statearr_39135_39192 = state_39049;
(statearr_39135_39192[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39193 = state_39049;
state_39049 = G__39193;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_39049){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_39049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___39137,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_39136 = f__7051__auto__.call(null);
(statearr_39136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___39137);

return statearr_39136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___39137,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj39195 = {};
return obj39195;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__39196){
var map__39201 = p__39196;
var map__39201__$1 = ((cljs.core.seq_QMARK_.call(null,map__39201))?cljs.core.apply.call(null,cljs.core.hash_map,map__39201):map__39201);
var opts = map__39201__$1;
var statearr_39202_39205 = state;
(statearr_39202_39205[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__39201,map__39201__$1,opts){
return (function (val){
var statearr_39203_39206 = state;
(statearr_39203_39206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39201,map__39201__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_39204_39207 = state;
(statearr_39204_39207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__39196 = null;
if (arguments.length > 3) {
  p__39196 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__39196);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__39208){
var state = cljs.core.first(arglist__39208);
arglist__39208 = cljs.core.next(arglist__39208);
var cont_block = cljs.core.first(arglist__39208);
arglist__39208 = cljs.core.next(arglist__39208);
var ports = cljs.core.first(arglist__39208);
var p__39196 = cljs.core.rest(arglist__39208);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__39196);
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
if(typeof cljs.core.async.t39328 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39328 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39329){
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
this.meta39329 = meta39329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39328.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t39328.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t39328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39330){
var self__ = this;
var _39330__$1 = this;
return self__.meta39329;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39330,meta39329__$1){
var self__ = this;
var _39330__$1 = this;
return (new cljs.core.async.t39328(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39329__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39328.cljs$lang$type = true;

cljs.core.async.t39328.cljs$lang$ctorStr = "cljs.core.async/t39328";

cljs.core.async.t39328.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t39328");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t39328 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39328(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39329){
return (new cljs.core.async.t39328(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39329));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t39328(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___39447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39400){
var state_val_39401 = (state_39400[(1)]);
if((state_val_39401 === (7))){
var inst_39344 = (state_39400[(7)]);
var inst_39349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39344);
var state_39400__$1 = state_39400;
var statearr_39402_39448 = state_39400__$1;
(statearr_39402_39448[(2)] = inst_39349);

(statearr_39402_39448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (20))){
var inst_39359 = (state_39400[(8)]);
var state_39400__$1 = state_39400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39400__$1,(23),out,inst_39359);
} else {
if((state_val_39401 === (1))){
var inst_39334 = (state_39400[(9)]);
var inst_39334__$1 = calc_state.call(null);
var inst_39335 = cljs.core.seq_QMARK_.call(null,inst_39334__$1);
var state_39400__$1 = (function (){var statearr_39403 = state_39400;
(statearr_39403[(9)] = inst_39334__$1);

return statearr_39403;
})();
if(inst_39335){
var statearr_39404_39449 = state_39400__$1;
(statearr_39404_39449[(1)] = (2));

} else {
var statearr_39405_39450 = state_39400__$1;
(statearr_39405_39450[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (24))){
var inst_39352 = (state_39400[(10)]);
var inst_39344 = inst_39352;
var state_39400__$1 = (function (){var statearr_39406 = state_39400;
(statearr_39406[(7)] = inst_39344);

return statearr_39406;
})();
var statearr_39407_39451 = state_39400__$1;
(statearr_39407_39451[(2)] = null);

(statearr_39407_39451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (4))){
var inst_39334 = (state_39400[(9)]);
var inst_39340 = (state_39400[(2)]);
var inst_39341 = cljs.core.get.call(null,inst_39340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39342 = cljs.core.get.call(null,inst_39340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39343 = cljs.core.get.call(null,inst_39340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39344 = inst_39334;
var state_39400__$1 = (function (){var statearr_39408 = state_39400;
(statearr_39408[(11)] = inst_39342);

(statearr_39408[(12)] = inst_39343);

(statearr_39408[(13)] = inst_39341);

(statearr_39408[(7)] = inst_39344);

return statearr_39408;
})();
var statearr_39409_39452 = state_39400__$1;
(statearr_39409_39452[(2)] = null);

(statearr_39409_39452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (15))){
var state_39400__$1 = state_39400;
var statearr_39410_39453 = state_39400__$1;
(statearr_39410_39453[(2)] = null);

(statearr_39410_39453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (21))){
var inst_39352 = (state_39400[(10)]);
var inst_39344 = inst_39352;
var state_39400__$1 = (function (){var statearr_39411 = state_39400;
(statearr_39411[(7)] = inst_39344);

return statearr_39411;
})();
var statearr_39412_39454 = state_39400__$1;
(statearr_39412_39454[(2)] = null);

(statearr_39412_39454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (13))){
var inst_39396 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
var statearr_39413_39455 = state_39400__$1;
(statearr_39413_39455[(2)] = inst_39396);

(statearr_39413_39455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (22))){
var inst_39394 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
var statearr_39414_39456 = state_39400__$1;
(statearr_39414_39456[(2)] = inst_39394);

(statearr_39414_39456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (6))){
var inst_39398 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39400__$1,inst_39398);
} else {
if((state_val_39401 === (25))){
var state_39400__$1 = state_39400;
var statearr_39415_39457 = state_39400__$1;
(statearr_39415_39457[(2)] = null);

(statearr_39415_39457[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (17))){
var inst_39374 = (state_39400[(14)]);
var state_39400__$1 = state_39400;
var statearr_39416_39458 = state_39400__$1;
(statearr_39416_39458[(2)] = inst_39374);

(statearr_39416_39458[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (3))){
var inst_39334 = (state_39400[(9)]);
var state_39400__$1 = state_39400;
var statearr_39417_39459 = state_39400__$1;
(statearr_39417_39459[(2)] = inst_39334);

(statearr_39417_39459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (12))){
var inst_39374 = (state_39400[(14)]);
var inst_39360 = (state_39400[(15)]);
var inst_39355 = (state_39400[(16)]);
var inst_39374__$1 = inst_39355.call(null,inst_39360);
var state_39400__$1 = (function (){var statearr_39418 = state_39400;
(statearr_39418[(14)] = inst_39374__$1);

return statearr_39418;
})();
if(cljs.core.truth_(inst_39374__$1)){
var statearr_39419_39460 = state_39400__$1;
(statearr_39419_39460[(1)] = (17));

} else {
var statearr_39420_39461 = state_39400__$1;
(statearr_39420_39461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (2))){
var inst_39334 = (state_39400[(9)]);
var inst_39337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39334);
var state_39400__$1 = state_39400;
var statearr_39421_39462 = state_39400__$1;
(statearr_39421_39462[(2)] = inst_39337);

(statearr_39421_39462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (23))){
var inst_39385 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
if(cljs.core.truth_(inst_39385)){
var statearr_39422_39463 = state_39400__$1;
(statearr_39422_39463[(1)] = (24));

} else {
var statearr_39423_39464 = state_39400__$1;
(statearr_39423_39464[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (19))){
var inst_39382 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
if(cljs.core.truth_(inst_39382)){
var statearr_39424_39465 = state_39400__$1;
(statearr_39424_39465[(1)] = (20));

} else {
var statearr_39425_39466 = state_39400__$1;
(statearr_39425_39466[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (11))){
var inst_39359 = (state_39400[(8)]);
var inst_39365 = (inst_39359 == null);
var state_39400__$1 = state_39400;
if(cljs.core.truth_(inst_39365)){
var statearr_39426_39467 = state_39400__$1;
(statearr_39426_39467[(1)] = (14));

} else {
var statearr_39427_39468 = state_39400__$1;
(statearr_39427_39468[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (9))){
var inst_39352 = (state_39400[(10)]);
var inst_39352__$1 = (state_39400[(2)]);
var inst_39353 = cljs.core.get.call(null,inst_39352__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39354 = cljs.core.get.call(null,inst_39352__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39355 = cljs.core.get.call(null,inst_39352__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_39400__$1 = (function (){var statearr_39428 = state_39400;
(statearr_39428[(10)] = inst_39352__$1);

(statearr_39428[(16)] = inst_39355);

(statearr_39428[(17)] = inst_39354);

return statearr_39428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39400__$1,(10),inst_39353);
} else {
if((state_val_39401 === (5))){
var inst_39344 = (state_39400[(7)]);
var inst_39347 = cljs.core.seq_QMARK_.call(null,inst_39344);
var state_39400__$1 = state_39400;
if(inst_39347){
var statearr_39429_39469 = state_39400__$1;
(statearr_39429_39469[(1)] = (7));

} else {
var statearr_39430_39470 = state_39400__$1;
(statearr_39430_39470[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (14))){
var inst_39360 = (state_39400[(15)]);
var inst_39367 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39360);
var state_39400__$1 = state_39400;
var statearr_39431_39471 = state_39400__$1;
(statearr_39431_39471[(2)] = inst_39367);

(statearr_39431_39471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (26))){
var inst_39390 = (state_39400[(2)]);
var state_39400__$1 = state_39400;
var statearr_39432_39472 = state_39400__$1;
(statearr_39432_39472[(2)] = inst_39390);

(statearr_39432_39472[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (16))){
var inst_39370 = (state_39400[(2)]);
var inst_39371 = calc_state.call(null);
var inst_39344 = inst_39371;
var state_39400__$1 = (function (){var statearr_39433 = state_39400;
(statearr_39433[(18)] = inst_39370);

(statearr_39433[(7)] = inst_39344);

return statearr_39433;
})();
var statearr_39434_39473 = state_39400__$1;
(statearr_39434_39473[(2)] = null);

(statearr_39434_39473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (10))){
var inst_39359 = (state_39400[(8)]);
var inst_39360 = (state_39400[(15)]);
var inst_39358 = (state_39400[(2)]);
var inst_39359__$1 = cljs.core.nth.call(null,inst_39358,(0),null);
var inst_39360__$1 = cljs.core.nth.call(null,inst_39358,(1),null);
var inst_39361 = (inst_39359__$1 == null);
var inst_39362 = cljs.core._EQ_.call(null,inst_39360__$1,change);
var inst_39363 = (inst_39361) || (inst_39362);
var state_39400__$1 = (function (){var statearr_39435 = state_39400;
(statearr_39435[(8)] = inst_39359__$1);

(statearr_39435[(15)] = inst_39360__$1);

return statearr_39435;
})();
if(cljs.core.truth_(inst_39363)){
var statearr_39436_39474 = state_39400__$1;
(statearr_39436_39474[(1)] = (11));

} else {
var statearr_39437_39475 = state_39400__$1;
(statearr_39437_39475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (18))){
var inst_39360 = (state_39400[(15)]);
var inst_39355 = (state_39400[(16)]);
var inst_39354 = (state_39400[(17)]);
var inst_39377 = cljs.core.empty_QMARK_.call(null,inst_39355);
var inst_39378 = inst_39354.call(null,inst_39360);
var inst_39379 = cljs.core.not.call(null,inst_39378);
var inst_39380 = (inst_39377) && (inst_39379);
var state_39400__$1 = state_39400;
var statearr_39438_39476 = state_39400__$1;
(statearr_39438_39476[(2)] = inst_39380);

(statearr_39438_39476[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39401 === (8))){
var inst_39344 = (state_39400[(7)]);
var state_39400__$1 = state_39400;
var statearr_39439_39477 = state_39400__$1;
(statearr_39439_39477[(2)] = inst_39344);

(statearr_39439_39477[(1)] = (9));


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
});})(c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_39443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39443[(0)] = state_machine__6995__auto__);

(statearr_39443[(1)] = (1));

return statearr_39443;
});
var state_machine__6995__auto____1 = (function (state_39400){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_39400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e39444){if((e39444 instanceof Object)){
var ex__6998__auto__ = e39444;
var statearr_39445_39478 = state_39400;
(statearr_39445_39478[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39479 = state_39400;
state_39400 = G__39479;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_39400){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_39400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_39446 = f__7051__auto__.call(null);
(statearr_39446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___39447);

return statearr_39446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___39447,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj39481 = {};
return obj39481;
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
return (function (p1__39482_SHARP_){
if(cljs.core.truth_(p1__39482_SHARP_.call(null,topic))){
return p1__39482_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39482_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t39605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39605 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta39606){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta39606 = meta39606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39605.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t39605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t39605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t39605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t39605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t39605.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t39605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39607){
var self__ = this;
var _39607__$1 = this;
return self__.meta39606;
});})(mults,ensure_mult))
;

cljs.core.async.t39605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39607,meta39606__$1){
var self__ = this;
var _39607__$1 = this;
return (new cljs.core.async.t39605(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta39606__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t39605.cljs$lang$type = true;

cljs.core.async.t39605.cljs$lang$ctorStr = "cljs.core.async/t39605";

cljs.core.async.t39605.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t39605");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t39605 = ((function (mults,ensure_mult){
return (function __GT_t39605(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39606){
return (new cljs.core.async.t39605(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39606));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t39605(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___39727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___39727,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___39727,mults,ensure_mult,p){
return (function (state_39679){
var state_val_39680 = (state_39679[(1)]);
if((state_val_39680 === (7))){
var inst_39675 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39681_39728 = state_39679__$1;
(statearr_39681_39728[(2)] = inst_39675);

(statearr_39681_39728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (20))){
var state_39679__$1 = state_39679;
var statearr_39682_39729 = state_39679__$1;
(statearr_39682_39729[(2)] = null);

(statearr_39682_39729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (1))){
var state_39679__$1 = state_39679;
var statearr_39683_39730 = state_39679__$1;
(statearr_39683_39730[(2)] = null);

(statearr_39683_39730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (24))){
var inst_39658 = (state_39679[(7)]);
var inst_39667 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39658);
var state_39679__$1 = state_39679;
var statearr_39684_39731 = state_39679__$1;
(statearr_39684_39731[(2)] = inst_39667);

(statearr_39684_39731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (4))){
var inst_39610 = (state_39679[(8)]);
var inst_39610__$1 = (state_39679[(2)]);
var inst_39611 = (inst_39610__$1 == null);
var state_39679__$1 = (function (){var statearr_39685 = state_39679;
(statearr_39685[(8)] = inst_39610__$1);

return statearr_39685;
})();
if(cljs.core.truth_(inst_39611)){
var statearr_39686_39732 = state_39679__$1;
(statearr_39686_39732[(1)] = (5));

} else {
var statearr_39687_39733 = state_39679__$1;
(statearr_39687_39733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (15))){
var inst_39652 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39688_39734 = state_39679__$1;
(statearr_39688_39734[(2)] = inst_39652);

(statearr_39688_39734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (21))){
var inst_39672 = (state_39679[(2)]);
var state_39679__$1 = (function (){var statearr_39689 = state_39679;
(statearr_39689[(9)] = inst_39672);

return statearr_39689;
})();
var statearr_39690_39735 = state_39679__$1;
(statearr_39690_39735[(2)] = null);

(statearr_39690_39735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (13))){
var inst_39634 = (state_39679[(10)]);
var inst_39636 = cljs.core.chunked_seq_QMARK_.call(null,inst_39634);
var state_39679__$1 = state_39679;
if(inst_39636){
var statearr_39691_39736 = state_39679__$1;
(statearr_39691_39736[(1)] = (16));

} else {
var statearr_39692_39737 = state_39679__$1;
(statearr_39692_39737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (22))){
var inst_39664 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
if(cljs.core.truth_(inst_39664)){
var statearr_39693_39738 = state_39679__$1;
(statearr_39693_39738[(1)] = (23));

} else {
var statearr_39694_39739 = state_39679__$1;
(statearr_39694_39739[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (6))){
var inst_39610 = (state_39679[(8)]);
var inst_39658 = (state_39679[(7)]);
var inst_39660 = (state_39679[(11)]);
var inst_39658__$1 = topic_fn.call(null,inst_39610);
var inst_39659 = cljs.core.deref.call(null,mults);
var inst_39660__$1 = cljs.core.get.call(null,inst_39659,inst_39658__$1);
var state_39679__$1 = (function (){var statearr_39695 = state_39679;
(statearr_39695[(7)] = inst_39658__$1);

(statearr_39695[(11)] = inst_39660__$1);

return statearr_39695;
})();
if(cljs.core.truth_(inst_39660__$1)){
var statearr_39696_39740 = state_39679__$1;
(statearr_39696_39740[(1)] = (19));

} else {
var statearr_39697_39741 = state_39679__$1;
(statearr_39697_39741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (25))){
var inst_39669 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39698_39742 = state_39679__$1;
(statearr_39698_39742[(2)] = inst_39669);

(statearr_39698_39742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (17))){
var inst_39634 = (state_39679[(10)]);
var inst_39643 = cljs.core.first.call(null,inst_39634);
var inst_39644 = cljs.core.async.muxch_STAR_.call(null,inst_39643);
var inst_39645 = cljs.core.async.close_BANG_.call(null,inst_39644);
var inst_39646 = cljs.core.next.call(null,inst_39634);
var inst_39620 = inst_39646;
var inst_39621 = null;
var inst_39622 = (0);
var inst_39623 = (0);
var state_39679__$1 = (function (){var statearr_39699 = state_39679;
(statearr_39699[(12)] = inst_39621);

(statearr_39699[(13)] = inst_39645);

(statearr_39699[(14)] = inst_39623);

(statearr_39699[(15)] = inst_39620);

(statearr_39699[(16)] = inst_39622);

return statearr_39699;
})();
var statearr_39700_39743 = state_39679__$1;
(statearr_39700_39743[(2)] = null);

(statearr_39700_39743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (3))){
var inst_39677 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39679__$1,inst_39677);
} else {
if((state_val_39680 === (12))){
var inst_39654 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39701_39744 = state_39679__$1;
(statearr_39701_39744[(2)] = inst_39654);

(statearr_39701_39744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (2))){
var state_39679__$1 = state_39679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39679__$1,(4),ch);
} else {
if((state_val_39680 === (23))){
var state_39679__$1 = state_39679;
var statearr_39702_39745 = state_39679__$1;
(statearr_39702_39745[(2)] = null);

(statearr_39702_39745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (19))){
var inst_39610 = (state_39679[(8)]);
var inst_39660 = (state_39679[(11)]);
var inst_39662 = cljs.core.async.muxch_STAR_.call(null,inst_39660);
var state_39679__$1 = state_39679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39679__$1,(22),inst_39662,inst_39610);
} else {
if((state_val_39680 === (11))){
var inst_39620 = (state_39679[(15)]);
var inst_39634 = (state_39679[(10)]);
var inst_39634__$1 = cljs.core.seq.call(null,inst_39620);
var state_39679__$1 = (function (){var statearr_39703 = state_39679;
(statearr_39703[(10)] = inst_39634__$1);

return statearr_39703;
})();
if(inst_39634__$1){
var statearr_39704_39746 = state_39679__$1;
(statearr_39704_39746[(1)] = (13));

} else {
var statearr_39705_39747 = state_39679__$1;
(statearr_39705_39747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (9))){
var inst_39656 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39706_39748 = state_39679__$1;
(statearr_39706_39748[(2)] = inst_39656);

(statearr_39706_39748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (5))){
var inst_39617 = cljs.core.deref.call(null,mults);
var inst_39618 = cljs.core.vals.call(null,inst_39617);
var inst_39619 = cljs.core.seq.call(null,inst_39618);
var inst_39620 = inst_39619;
var inst_39621 = null;
var inst_39622 = (0);
var inst_39623 = (0);
var state_39679__$1 = (function (){var statearr_39707 = state_39679;
(statearr_39707[(12)] = inst_39621);

(statearr_39707[(14)] = inst_39623);

(statearr_39707[(15)] = inst_39620);

(statearr_39707[(16)] = inst_39622);

return statearr_39707;
})();
var statearr_39708_39749 = state_39679__$1;
(statearr_39708_39749[(2)] = null);

(statearr_39708_39749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (14))){
var state_39679__$1 = state_39679;
var statearr_39712_39750 = state_39679__$1;
(statearr_39712_39750[(2)] = null);

(statearr_39712_39750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (16))){
var inst_39634 = (state_39679[(10)]);
var inst_39638 = cljs.core.chunk_first.call(null,inst_39634);
var inst_39639 = cljs.core.chunk_rest.call(null,inst_39634);
var inst_39640 = cljs.core.count.call(null,inst_39638);
var inst_39620 = inst_39639;
var inst_39621 = inst_39638;
var inst_39622 = inst_39640;
var inst_39623 = (0);
var state_39679__$1 = (function (){var statearr_39713 = state_39679;
(statearr_39713[(12)] = inst_39621);

(statearr_39713[(14)] = inst_39623);

(statearr_39713[(15)] = inst_39620);

(statearr_39713[(16)] = inst_39622);

return statearr_39713;
})();
var statearr_39714_39751 = state_39679__$1;
(statearr_39714_39751[(2)] = null);

(statearr_39714_39751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (10))){
var inst_39621 = (state_39679[(12)]);
var inst_39623 = (state_39679[(14)]);
var inst_39620 = (state_39679[(15)]);
var inst_39622 = (state_39679[(16)]);
var inst_39628 = cljs.core._nth.call(null,inst_39621,inst_39623);
var inst_39629 = cljs.core.async.muxch_STAR_.call(null,inst_39628);
var inst_39630 = cljs.core.async.close_BANG_.call(null,inst_39629);
var inst_39631 = (inst_39623 + (1));
var tmp39709 = inst_39621;
var tmp39710 = inst_39620;
var tmp39711 = inst_39622;
var inst_39620__$1 = tmp39710;
var inst_39621__$1 = tmp39709;
var inst_39622__$1 = tmp39711;
var inst_39623__$1 = inst_39631;
var state_39679__$1 = (function (){var statearr_39715 = state_39679;
(statearr_39715[(12)] = inst_39621__$1);

(statearr_39715[(17)] = inst_39630);

(statearr_39715[(14)] = inst_39623__$1);

(statearr_39715[(15)] = inst_39620__$1);

(statearr_39715[(16)] = inst_39622__$1);

return statearr_39715;
})();
var statearr_39716_39752 = state_39679__$1;
(statearr_39716_39752[(2)] = null);

(statearr_39716_39752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (18))){
var inst_39649 = (state_39679[(2)]);
var state_39679__$1 = state_39679;
var statearr_39717_39753 = state_39679__$1;
(statearr_39717_39753[(2)] = inst_39649);

(statearr_39717_39753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39680 === (8))){
var inst_39623 = (state_39679[(14)]);
var inst_39622 = (state_39679[(16)]);
var inst_39625 = (inst_39623 < inst_39622);
var inst_39626 = inst_39625;
var state_39679__$1 = state_39679;
if(cljs.core.truth_(inst_39626)){
var statearr_39718_39754 = state_39679__$1;
(statearr_39718_39754[(1)] = (10));

} else {
var statearr_39719_39755 = state_39679__$1;
(statearr_39719_39755[(1)] = (11));

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
});})(c__7050__auto___39727,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___39727,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_39723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39723[(0)] = state_machine__6995__auto__);

(statearr_39723[(1)] = (1));

return statearr_39723;
});
var state_machine__6995__auto____1 = (function (state_39679){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_39679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e39724){if((e39724 instanceof Object)){
var ex__6998__auto__ = e39724;
var statearr_39725_39756 = state_39679;
(statearr_39725_39756[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39757 = state_39679;
state_39679 = G__39757;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_39679){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_39679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___39727,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_39726 = f__7051__auto__.call(null);
(statearr_39726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___39727);

return statearr_39726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___39727,mults,ensure_mult,p))
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
var c__7050__auto___39894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39864){
var state_val_39865 = (state_39864[(1)]);
if((state_val_39865 === (7))){
var state_39864__$1 = state_39864;
var statearr_39866_39895 = state_39864__$1;
(statearr_39866_39895[(2)] = null);

(statearr_39866_39895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (1))){
var state_39864__$1 = state_39864;
var statearr_39867_39896 = state_39864__$1;
(statearr_39867_39896[(2)] = null);

(statearr_39867_39896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (4))){
var inst_39828 = (state_39864[(7)]);
var inst_39830 = (inst_39828 < cnt);
var state_39864__$1 = state_39864;
if(cljs.core.truth_(inst_39830)){
var statearr_39868_39897 = state_39864__$1;
(statearr_39868_39897[(1)] = (6));

} else {
var statearr_39869_39898 = state_39864__$1;
(statearr_39869_39898[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (15))){
var inst_39860 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
var statearr_39870_39899 = state_39864__$1;
(statearr_39870_39899[(2)] = inst_39860);

(statearr_39870_39899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (13))){
var inst_39853 = cljs.core.async.close_BANG_.call(null,out);
var state_39864__$1 = state_39864;
var statearr_39871_39900 = state_39864__$1;
(statearr_39871_39900[(2)] = inst_39853);

(statearr_39871_39900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (6))){
var state_39864__$1 = state_39864;
var statearr_39872_39901 = state_39864__$1;
(statearr_39872_39901[(2)] = null);

(statearr_39872_39901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (3))){
var inst_39862 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39864__$1,inst_39862);
} else {
if((state_val_39865 === (12))){
var inst_39850 = (state_39864[(8)]);
var inst_39850__$1 = (state_39864[(2)]);
var inst_39851 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39850__$1);
var state_39864__$1 = (function (){var statearr_39873 = state_39864;
(statearr_39873[(8)] = inst_39850__$1);

return statearr_39873;
})();
if(cljs.core.truth_(inst_39851)){
var statearr_39874_39902 = state_39864__$1;
(statearr_39874_39902[(1)] = (13));

} else {
var statearr_39875_39903 = state_39864__$1;
(statearr_39875_39903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (2))){
var inst_39827 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39828 = (0);
var state_39864__$1 = (function (){var statearr_39876 = state_39864;
(statearr_39876[(7)] = inst_39828);

(statearr_39876[(9)] = inst_39827);

return statearr_39876;
})();
var statearr_39877_39904 = state_39864__$1;
(statearr_39877_39904[(2)] = null);

(statearr_39877_39904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (11))){
var inst_39828 = (state_39864[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39864,(10),Object,null,(9));
var inst_39837 = chs__$1.call(null,inst_39828);
var inst_39838 = done.call(null,inst_39828);
var inst_39839 = cljs.core.async.take_BANG_.call(null,inst_39837,inst_39838);
var state_39864__$1 = state_39864;
var statearr_39878_39905 = state_39864__$1;
(statearr_39878_39905[(2)] = inst_39839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (9))){
var inst_39828 = (state_39864[(7)]);
var inst_39841 = (state_39864[(2)]);
var inst_39842 = (inst_39828 + (1));
var inst_39828__$1 = inst_39842;
var state_39864__$1 = (function (){var statearr_39879 = state_39864;
(statearr_39879[(7)] = inst_39828__$1);

(statearr_39879[(10)] = inst_39841);

return statearr_39879;
})();
var statearr_39880_39906 = state_39864__$1;
(statearr_39880_39906[(2)] = null);

(statearr_39880_39906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (5))){
var inst_39848 = (state_39864[(2)]);
var state_39864__$1 = (function (){var statearr_39881 = state_39864;
(statearr_39881[(11)] = inst_39848);

return statearr_39881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39864__$1,(12),dchan);
} else {
if((state_val_39865 === (14))){
var inst_39850 = (state_39864[(8)]);
var inst_39855 = cljs.core.apply.call(null,f,inst_39850);
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39864__$1,(16),out,inst_39855);
} else {
if((state_val_39865 === (16))){
var inst_39857 = (state_39864[(2)]);
var state_39864__$1 = (function (){var statearr_39882 = state_39864;
(statearr_39882[(12)] = inst_39857);

return statearr_39882;
})();
var statearr_39883_39907 = state_39864__$1;
(statearr_39883_39907[(2)] = null);

(statearr_39883_39907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (10))){
var inst_39832 = (state_39864[(2)]);
var inst_39833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39864__$1 = (function (){var statearr_39884 = state_39864;
(statearr_39884[(13)] = inst_39832);

return statearr_39884;
})();
var statearr_39885_39908 = state_39864__$1;
(statearr_39885_39908[(2)] = inst_39833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39865 === (8))){
var inst_39846 = (state_39864[(2)]);
var state_39864__$1 = state_39864;
var statearr_39886_39909 = state_39864__$1;
(statearr_39886_39909[(2)] = inst_39846);

(statearr_39886_39909[(1)] = (5));


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
});})(c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_39890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39890[(0)] = state_machine__6995__auto__);

(statearr_39890[(1)] = (1));

return statearr_39890;
});
var state_machine__6995__auto____1 = (function (state_39864){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_39864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e39891){if((e39891 instanceof Object)){
var ex__6998__auto__ = e39891;
var statearr_39892_39910 = state_39864;
(statearr_39892_39910[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39911 = state_39864;
state_39864 = G__39911;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_39864){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_39864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_39893 = f__7051__auto__.call(null);
(statearr_39893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___39894);

return statearr_39893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___39894,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___40019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40019,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40019,out){
return (function (state_39995){
var state_val_39996 = (state_39995[(1)]);
if((state_val_39996 === (7))){
var inst_39975 = (state_39995[(7)]);
var inst_39974 = (state_39995[(8)]);
var inst_39974__$1 = (state_39995[(2)]);
var inst_39975__$1 = cljs.core.nth.call(null,inst_39974__$1,(0),null);
var inst_39976 = cljs.core.nth.call(null,inst_39974__$1,(1),null);
var inst_39977 = (inst_39975__$1 == null);
var state_39995__$1 = (function (){var statearr_39997 = state_39995;
(statearr_39997[(7)] = inst_39975__$1);

(statearr_39997[(9)] = inst_39976);

(statearr_39997[(8)] = inst_39974__$1);

return statearr_39997;
})();
if(cljs.core.truth_(inst_39977)){
var statearr_39998_40020 = state_39995__$1;
(statearr_39998_40020[(1)] = (8));

} else {
var statearr_39999_40021 = state_39995__$1;
(statearr_39999_40021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (1))){
var inst_39966 = cljs.core.vec.call(null,chs);
var inst_39967 = inst_39966;
var state_39995__$1 = (function (){var statearr_40000 = state_39995;
(statearr_40000[(10)] = inst_39967);

return statearr_40000;
})();
var statearr_40001_40022 = state_39995__$1;
(statearr_40001_40022[(2)] = null);

(statearr_40001_40022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (4))){
var inst_39967 = (state_39995[(10)]);
var state_39995__$1 = state_39995;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39995__$1,(7),inst_39967);
} else {
if((state_val_39996 === (6))){
var inst_39991 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_40002_40023 = state_39995__$1;
(statearr_40002_40023[(2)] = inst_39991);

(statearr_40002_40023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (3))){
var inst_39993 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39995__$1,inst_39993);
} else {
if((state_val_39996 === (2))){
var inst_39967 = (state_39995[(10)]);
var inst_39969 = cljs.core.count.call(null,inst_39967);
var inst_39970 = (inst_39969 > (0));
var state_39995__$1 = state_39995;
if(cljs.core.truth_(inst_39970)){
var statearr_40004_40024 = state_39995__$1;
(statearr_40004_40024[(1)] = (4));

} else {
var statearr_40005_40025 = state_39995__$1;
(statearr_40005_40025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (11))){
var inst_39967 = (state_39995[(10)]);
var inst_39984 = (state_39995[(2)]);
var tmp40003 = inst_39967;
var inst_39967__$1 = tmp40003;
var state_39995__$1 = (function (){var statearr_40006 = state_39995;
(statearr_40006[(11)] = inst_39984);

(statearr_40006[(10)] = inst_39967__$1);

return statearr_40006;
})();
var statearr_40007_40026 = state_39995__$1;
(statearr_40007_40026[(2)] = null);

(statearr_40007_40026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (9))){
var inst_39975 = (state_39995[(7)]);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39995__$1,(11),out,inst_39975);
} else {
if((state_val_39996 === (5))){
var inst_39989 = cljs.core.async.close_BANG_.call(null,out);
var state_39995__$1 = state_39995;
var statearr_40008_40027 = state_39995__$1;
(statearr_40008_40027[(2)] = inst_39989);

(statearr_40008_40027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (10))){
var inst_39987 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_40009_40028 = state_39995__$1;
(statearr_40009_40028[(2)] = inst_39987);

(statearr_40009_40028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (8))){
var inst_39975 = (state_39995[(7)]);
var inst_39976 = (state_39995[(9)]);
var inst_39967 = (state_39995[(10)]);
var inst_39974 = (state_39995[(8)]);
var inst_39979 = (function (){var c = inst_39976;
var v = inst_39975;
var vec__39972 = inst_39974;
var cs = inst_39967;
return ((function (c,v,vec__39972,cs,inst_39975,inst_39976,inst_39967,inst_39974,state_val_39996,c__7050__auto___40019,out){
return (function (p1__39912_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39912_SHARP_);
});
;})(c,v,vec__39972,cs,inst_39975,inst_39976,inst_39967,inst_39974,state_val_39996,c__7050__auto___40019,out))
})();
var inst_39980 = cljs.core.filterv.call(null,inst_39979,inst_39967);
var inst_39967__$1 = inst_39980;
var state_39995__$1 = (function (){var statearr_40010 = state_39995;
(statearr_40010[(10)] = inst_39967__$1);

return statearr_40010;
})();
var statearr_40011_40029 = state_39995__$1;
(statearr_40011_40029[(2)] = null);

(statearr_40011_40029[(1)] = (2));


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
});})(c__7050__auto___40019,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40019,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40015[(0)] = state_machine__6995__auto__);

(statearr_40015[(1)] = (1));

return statearr_40015;
});
var state_machine__6995__auto____1 = (function (state_39995){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_39995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40016){if((e40016 instanceof Object)){
var ex__6998__auto__ = e40016;
var statearr_40017_40030 = state_39995;
(statearr_40017_40030[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40031 = state_39995;
state_39995 = G__40031;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_39995){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_39995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40019,out))
})();
var state__7052__auto__ = (function (){var statearr_40018 = f__7051__auto__.call(null);
(statearr_40018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40019);

return statearr_40018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40019,out))
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
var c__7050__auto___40124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40124,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40124,out){
return (function (state_40101){
var state_val_40102 = (state_40101[(1)]);
if((state_val_40102 === (7))){
var inst_40083 = (state_40101[(7)]);
var inst_40083__$1 = (state_40101[(2)]);
var inst_40084 = (inst_40083__$1 == null);
var inst_40085 = cljs.core.not.call(null,inst_40084);
var state_40101__$1 = (function (){var statearr_40103 = state_40101;
(statearr_40103[(7)] = inst_40083__$1);

return statearr_40103;
})();
if(inst_40085){
var statearr_40104_40125 = state_40101__$1;
(statearr_40104_40125[(1)] = (8));

} else {
var statearr_40105_40126 = state_40101__$1;
(statearr_40105_40126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (1))){
var inst_40078 = (0);
var state_40101__$1 = (function (){var statearr_40106 = state_40101;
(statearr_40106[(8)] = inst_40078);

return statearr_40106;
})();
var statearr_40107_40127 = state_40101__$1;
(statearr_40107_40127[(2)] = null);

(statearr_40107_40127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (4))){
var state_40101__$1 = state_40101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40101__$1,(7),ch);
} else {
if((state_val_40102 === (6))){
var inst_40096 = (state_40101[(2)]);
var state_40101__$1 = state_40101;
var statearr_40108_40128 = state_40101__$1;
(statearr_40108_40128[(2)] = inst_40096);

(statearr_40108_40128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (3))){
var inst_40098 = (state_40101[(2)]);
var inst_40099 = cljs.core.async.close_BANG_.call(null,out);
var state_40101__$1 = (function (){var statearr_40109 = state_40101;
(statearr_40109[(9)] = inst_40098);

return statearr_40109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40101__$1,inst_40099);
} else {
if((state_val_40102 === (2))){
var inst_40078 = (state_40101[(8)]);
var inst_40080 = (inst_40078 < n);
var state_40101__$1 = state_40101;
if(cljs.core.truth_(inst_40080)){
var statearr_40110_40129 = state_40101__$1;
(statearr_40110_40129[(1)] = (4));

} else {
var statearr_40111_40130 = state_40101__$1;
(statearr_40111_40130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (11))){
var inst_40078 = (state_40101[(8)]);
var inst_40088 = (state_40101[(2)]);
var inst_40089 = (inst_40078 + (1));
var inst_40078__$1 = inst_40089;
var state_40101__$1 = (function (){var statearr_40112 = state_40101;
(statearr_40112[(8)] = inst_40078__$1);

(statearr_40112[(10)] = inst_40088);

return statearr_40112;
})();
var statearr_40113_40131 = state_40101__$1;
(statearr_40113_40131[(2)] = null);

(statearr_40113_40131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (9))){
var state_40101__$1 = state_40101;
var statearr_40114_40132 = state_40101__$1;
(statearr_40114_40132[(2)] = null);

(statearr_40114_40132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (5))){
var state_40101__$1 = state_40101;
var statearr_40115_40133 = state_40101__$1;
(statearr_40115_40133[(2)] = null);

(statearr_40115_40133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (10))){
var inst_40093 = (state_40101[(2)]);
var state_40101__$1 = state_40101;
var statearr_40116_40134 = state_40101__$1;
(statearr_40116_40134[(2)] = inst_40093);

(statearr_40116_40134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40102 === (8))){
var inst_40083 = (state_40101[(7)]);
var state_40101__$1 = state_40101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40101__$1,(11),out,inst_40083);
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
});})(c__7050__auto___40124,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40124,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40120[(0)] = state_machine__6995__auto__);

(statearr_40120[(1)] = (1));

return statearr_40120;
});
var state_machine__6995__auto____1 = (function (state_40101){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40121){if((e40121 instanceof Object)){
var ex__6998__auto__ = e40121;
var statearr_40122_40135 = state_40101;
(statearr_40122_40135[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40136 = state_40101;
state_40101 = G__40136;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40101){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40124,out))
})();
var state__7052__auto__ = (function (){var statearr_40123 = f__7051__auto__.call(null);
(statearr_40123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40124);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40124,out))
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
if(typeof cljs.core.async.t40144 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40144 = (function (ch,f,map_LT_,meta40145){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40145 = meta40145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t40147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40147 = (function (fn1,_,meta40145,map_LT_,f,ch,meta40148){
this.fn1 = fn1;
this._ = _;
this.meta40145 = meta40145;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40148 = meta40148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40147.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t40147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40137_SHARP_){
return f1.call(null,(((p1__40137_SHARP_ == null))?null:self__.f.call(null,p1__40137_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t40147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40149){
var self__ = this;
var _40149__$1 = this;
return self__.meta40148;
});})(___$1))
;

cljs.core.async.t40147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40149,meta40148__$1){
var self__ = this;
var _40149__$1 = this;
return (new cljs.core.async.t40147(self__.fn1,self__._,self__.meta40145,self__.map_LT_,self__.f,self__.ch,meta40148__$1));
});})(___$1))
;

cljs.core.async.t40147.cljs$lang$type = true;

cljs.core.async.t40147.cljs$lang$ctorStr = "cljs.core.async/t40147";

cljs.core.async.t40147.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t40147");
});})(___$1))
;

cljs.core.async.__GT_t40147 = ((function (___$1){
return (function __GT_t40147(fn1__$1,___$2,meta40145__$1,map_LT___$1,f__$1,ch__$1,meta40148){
return (new cljs.core.async.t40147(fn1__$1,___$2,meta40145__$1,map_LT___$1,f__$1,ch__$1,meta40148));
});})(___$1))
;

}

return (new cljs.core.async.t40147(fn1,___$1,self__.meta40145,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40146){
var self__ = this;
var _40146__$1 = this;
return self__.meta40145;
});

cljs.core.async.t40144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40146,meta40145__$1){
var self__ = this;
var _40146__$1 = this;
return (new cljs.core.async.t40144(self__.ch,self__.f,self__.map_LT_,meta40145__$1));
});

cljs.core.async.t40144.cljs$lang$type = true;

cljs.core.async.t40144.cljs$lang$ctorStr = "cljs.core.async/t40144";

cljs.core.async.t40144.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t40144");
});

cljs.core.async.__GT_t40144 = (function __GT_t40144(ch__$1,f__$1,map_LT___$1,meta40145){
return (new cljs.core.async.t40144(ch__$1,f__$1,map_LT___$1,meta40145));
});

}

return (new cljs.core.async.t40144(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t40153 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40153 = (function (ch,f,map_GT_,meta40154){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40154 = meta40154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40155){
var self__ = this;
var _40155__$1 = this;
return self__.meta40154;
});

cljs.core.async.t40153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40155,meta40154__$1){
var self__ = this;
var _40155__$1 = this;
return (new cljs.core.async.t40153(self__.ch,self__.f,self__.map_GT_,meta40154__$1));
});

cljs.core.async.t40153.cljs$lang$type = true;

cljs.core.async.t40153.cljs$lang$ctorStr = "cljs.core.async/t40153";

cljs.core.async.t40153.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t40153");
});

cljs.core.async.__GT_t40153 = (function __GT_t40153(ch__$1,f__$1,map_GT___$1,meta40154){
return (new cljs.core.async.t40153(ch__$1,f__$1,map_GT___$1,meta40154));
});

}

return (new cljs.core.async.t40153(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t40159 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40159 = (function (ch,p,filter_GT_,meta40160){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40160 = meta40160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40161){
var self__ = this;
var _40161__$1 = this;
return self__.meta40160;
});

cljs.core.async.t40159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40161,meta40160__$1){
var self__ = this;
var _40161__$1 = this;
return (new cljs.core.async.t40159(self__.ch,self__.p,self__.filter_GT_,meta40160__$1));
});

cljs.core.async.t40159.cljs$lang$type = true;

cljs.core.async.t40159.cljs$lang$ctorStr = "cljs.core.async/t40159";

cljs.core.async.t40159.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t40159");
});

cljs.core.async.__GT_t40159 = (function __GT_t40159(ch__$1,p__$1,filter_GT___$1,meta40160){
return (new cljs.core.async.t40159(ch__$1,p__$1,filter_GT___$1,meta40160));
});

}

return (new cljs.core.async.t40159(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/go_loop/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___40244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40244,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40244,out){
return (function (state_40223){
var state_val_40224 = (state_40223[(1)]);
if((state_val_40224 === (7))){
var inst_40219 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40225_40245 = state_40223__$1;
(statearr_40225_40245[(2)] = inst_40219);

(statearr_40225_40245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (1))){
var state_40223__$1 = state_40223;
var statearr_40226_40246 = state_40223__$1;
(statearr_40226_40246[(2)] = null);

(statearr_40226_40246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (4))){
var inst_40205 = (state_40223[(7)]);
var inst_40205__$1 = (state_40223[(2)]);
var inst_40206 = (inst_40205__$1 == null);
var state_40223__$1 = (function (){var statearr_40227 = state_40223;
(statearr_40227[(7)] = inst_40205__$1);

return statearr_40227;
})();
if(cljs.core.truth_(inst_40206)){
var statearr_40228_40247 = state_40223__$1;
(statearr_40228_40247[(1)] = (5));

} else {
var statearr_40229_40248 = state_40223__$1;
(statearr_40229_40248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (6))){
var inst_40205 = (state_40223[(7)]);
var inst_40210 = p.call(null,inst_40205);
var state_40223__$1 = state_40223;
if(cljs.core.truth_(inst_40210)){
var statearr_40230_40249 = state_40223__$1;
(statearr_40230_40249[(1)] = (8));

} else {
var statearr_40231_40250 = state_40223__$1;
(statearr_40231_40250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (3))){
var inst_40221 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40223__$1,inst_40221);
} else {
if((state_val_40224 === (2))){
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40223__$1,(4),ch);
} else {
if((state_val_40224 === (11))){
var inst_40213 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40232_40251 = state_40223__$1;
(statearr_40232_40251[(2)] = inst_40213);

(statearr_40232_40251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (9))){
var state_40223__$1 = state_40223;
var statearr_40233_40252 = state_40223__$1;
(statearr_40233_40252[(2)] = null);

(statearr_40233_40252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (5))){
var inst_40208 = cljs.core.async.close_BANG_.call(null,out);
var state_40223__$1 = state_40223;
var statearr_40234_40253 = state_40223__$1;
(statearr_40234_40253[(2)] = inst_40208);

(statearr_40234_40253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (10))){
var inst_40216 = (state_40223[(2)]);
var state_40223__$1 = (function (){var statearr_40235 = state_40223;
(statearr_40235[(8)] = inst_40216);

return statearr_40235;
})();
var statearr_40236_40254 = state_40223__$1;
(statearr_40236_40254[(2)] = null);

(statearr_40236_40254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (8))){
var inst_40205 = (state_40223[(7)]);
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40223__$1,(11),out,inst_40205);
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
});})(c__7050__auto___40244,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40244,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40240 = [null,null,null,null,null,null,null,null,null];
(statearr_40240[(0)] = state_machine__6995__auto__);

(statearr_40240[(1)] = (1));

return statearr_40240;
});
var state_machine__6995__auto____1 = (function (state_40223){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40241){if((e40241 instanceof Object)){
var ex__6998__auto__ = e40241;
var statearr_40242_40255 = state_40223;
(statearr_40242_40255[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40256 = state_40223;
state_40223 = G__40256;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40223){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40244,out))
})();
var state__7052__auto__ = (function (){var statearr_40243 = f__7051__auto__.call(null);
(statearr_40243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40244);

return statearr_40243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40244,out))
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
return (function (state_40422){
var state_val_40423 = (state_40422[(1)]);
if((state_val_40423 === (7))){
var inst_40418 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40424_40465 = state_40422__$1;
(statearr_40424_40465[(2)] = inst_40418);

(statearr_40424_40465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (20))){
var inst_40388 = (state_40422[(7)]);
var inst_40399 = (state_40422[(2)]);
var inst_40400 = cljs.core.next.call(null,inst_40388);
var inst_40374 = inst_40400;
var inst_40375 = null;
var inst_40376 = (0);
var inst_40377 = (0);
var state_40422__$1 = (function (){var statearr_40425 = state_40422;
(statearr_40425[(8)] = inst_40399);

(statearr_40425[(9)] = inst_40377);

(statearr_40425[(10)] = inst_40376);

(statearr_40425[(11)] = inst_40374);

(statearr_40425[(12)] = inst_40375);

return statearr_40425;
})();
var statearr_40426_40466 = state_40422__$1;
(statearr_40426_40466[(2)] = null);

(statearr_40426_40466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (1))){
var state_40422__$1 = state_40422;
var statearr_40427_40467 = state_40422__$1;
(statearr_40427_40467[(2)] = null);

(statearr_40427_40467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (4))){
var inst_40363 = (state_40422[(13)]);
var inst_40363__$1 = (state_40422[(2)]);
var inst_40364 = (inst_40363__$1 == null);
var state_40422__$1 = (function (){var statearr_40428 = state_40422;
(statearr_40428[(13)] = inst_40363__$1);

return statearr_40428;
})();
if(cljs.core.truth_(inst_40364)){
var statearr_40429_40468 = state_40422__$1;
(statearr_40429_40468[(1)] = (5));

} else {
var statearr_40430_40469 = state_40422__$1;
(statearr_40430_40469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (15))){
var state_40422__$1 = state_40422;
var statearr_40434_40470 = state_40422__$1;
(statearr_40434_40470[(2)] = null);

(statearr_40434_40470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (21))){
var state_40422__$1 = state_40422;
var statearr_40435_40471 = state_40422__$1;
(statearr_40435_40471[(2)] = null);

(statearr_40435_40471[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (13))){
var inst_40377 = (state_40422[(9)]);
var inst_40376 = (state_40422[(10)]);
var inst_40374 = (state_40422[(11)]);
var inst_40375 = (state_40422[(12)]);
var inst_40384 = (state_40422[(2)]);
var inst_40385 = (inst_40377 + (1));
var tmp40431 = inst_40376;
var tmp40432 = inst_40374;
var tmp40433 = inst_40375;
var inst_40374__$1 = tmp40432;
var inst_40375__$1 = tmp40433;
var inst_40376__$1 = tmp40431;
var inst_40377__$1 = inst_40385;
var state_40422__$1 = (function (){var statearr_40436 = state_40422;
(statearr_40436[(9)] = inst_40377__$1);

(statearr_40436[(14)] = inst_40384);

(statearr_40436[(10)] = inst_40376__$1);

(statearr_40436[(11)] = inst_40374__$1);

(statearr_40436[(12)] = inst_40375__$1);

return statearr_40436;
})();
var statearr_40437_40472 = state_40422__$1;
(statearr_40437_40472[(2)] = null);

(statearr_40437_40472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (22))){
var state_40422__$1 = state_40422;
var statearr_40438_40473 = state_40422__$1;
(statearr_40438_40473[(2)] = null);

(statearr_40438_40473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (6))){
var inst_40363 = (state_40422[(13)]);
var inst_40372 = f.call(null,inst_40363);
var inst_40373 = cljs.core.seq.call(null,inst_40372);
var inst_40374 = inst_40373;
var inst_40375 = null;
var inst_40376 = (0);
var inst_40377 = (0);
var state_40422__$1 = (function (){var statearr_40439 = state_40422;
(statearr_40439[(9)] = inst_40377);

(statearr_40439[(10)] = inst_40376);

(statearr_40439[(11)] = inst_40374);

(statearr_40439[(12)] = inst_40375);

return statearr_40439;
})();
var statearr_40440_40474 = state_40422__$1;
(statearr_40440_40474[(2)] = null);

(statearr_40440_40474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (17))){
var inst_40388 = (state_40422[(7)]);
var inst_40392 = cljs.core.chunk_first.call(null,inst_40388);
var inst_40393 = cljs.core.chunk_rest.call(null,inst_40388);
var inst_40394 = cljs.core.count.call(null,inst_40392);
var inst_40374 = inst_40393;
var inst_40375 = inst_40392;
var inst_40376 = inst_40394;
var inst_40377 = (0);
var state_40422__$1 = (function (){var statearr_40441 = state_40422;
(statearr_40441[(9)] = inst_40377);

(statearr_40441[(10)] = inst_40376);

(statearr_40441[(11)] = inst_40374);

(statearr_40441[(12)] = inst_40375);

return statearr_40441;
})();
var statearr_40442_40475 = state_40422__$1;
(statearr_40442_40475[(2)] = null);

(statearr_40442_40475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (3))){
var inst_40420 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40422__$1,inst_40420);
} else {
if((state_val_40423 === (12))){
var inst_40408 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40443_40476 = state_40422__$1;
(statearr_40443_40476[(2)] = inst_40408);

(statearr_40443_40476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (2))){
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40422__$1,(4),in$);
} else {
if((state_val_40423 === (23))){
var inst_40416 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40444_40477 = state_40422__$1;
(statearr_40444_40477[(2)] = inst_40416);

(statearr_40444_40477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (19))){
var inst_40403 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40445_40478 = state_40422__$1;
(statearr_40445_40478[(2)] = inst_40403);

(statearr_40445_40478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (11))){
var inst_40388 = (state_40422[(7)]);
var inst_40374 = (state_40422[(11)]);
var inst_40388__$1 = cljs.core.seq.call(null,inst_40374);
var state_40422__$1 = (function (){var statearr_40446 = state_40422;
(statearr_40446[(7)] = inst_40388__$1);

return statearr_40446;
})();
if(inst_40388__$1){
var statearr_40447_40479 = state_40422__$1;
(statearr_40447_40479[(1)] = (14));

} else {
var statearr_40448_40480 = state_40422__$1;
(statearr_40448_40480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (9))){
var inst_40410 = (state_40422[(2)]);
var inst_40411 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40422__$1 = (function (){var statearr_40449 = state_40422;
(statearr_40449[(15)] = inst_40410);

return statearr_40449;
})();
if(cljs.core.truth_(inst_40411)){
var statearr_40450_40481 = state_40422__$1;
(statearr_40450_40481[(1)] = (21));

} else {
var statearr_40451_40482 = state_40422__$1;
(statearr_40451_40482[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (5))){
var inst_40366 = cljs.core.async.close_BANG_.call(null,out);
var state_40422__$1 = state_40422;
var statearr_40452_40483 = state_40422__$1;
(statearr_40452_40483[(2)] = inst_40366);

(statearr_40452_40483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (14))){
var inst_40388 = (state_40422[(7)]);
var inst_40390 = cljs.core.chunked_seq_QMARK_.call(null,inst_40388);
var state_40422__$1 = state_40422;
if(inst_40390){
var statearr_40453_40484 = state_40422__$1;
(statearr_40453_40484[(1)] = (17));

} else {
var statearr_40454_40485 = state_40422__$1;
(statearr_40454_40485[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (16))){
var inst_40406 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40455_40486 = state_40422__$1;
(statearr_40455_40486[(2)] = inst_40406);

(statearr_40455_40486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (10))){
var inst_40377 = (state_40422[(9)]);
var inst_40375 = (state_40422[(12)]);
var inst_40382 = cljs.core._nth.call(null,inst_40375,inst_40377);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40422__$1,(13),out,inst_40382);
} else {
if((state_val_40423 === (18))){
var inst_40388 = (state_40422[(7)]);
var inst_40397 = cljs.core.first.call(null,inst_40388);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40422__$1,(20),out,inst_40397);
} else {
if((state_val_40423 === (8))){
var inst_40377 = (state_40422[(9)]);
var inst_40376 = (state_40422[(10)]);
var inst_40379 = (inst_40377 < inst_40376);
var inst_40380 = inst_40379;
var state_40422__$1 = state_40422;
if(cljs.core.truth_(inst_40380)){
var statearr_40456_40487 = state_40422__$1;
(statearr_40456_40487[(1)] = (10));

} else {
var statearr_40457_40488 = state_40422__$1;
(statearr_40457_40488[(1)] = (11));

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
var statearr_40461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40461[(0)] = state_machine__6995__auto__);

(statearr_40461[(1)] = (1));

return statearr_40461;
});
var state_machine__6995__auto____1 = (function (state_40422){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40462){if((e40462 instanceof Object)){
var ex__6998__auto__ = e40462;
var statearr_40463_40489 = state_40422;
(statearr_40463_40489[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40490 = state_40422;
state_40422 = G__40490;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40422){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_40464 = f__7051__auto__.call(null);
(statearr_40464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_40464;
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
var c__7050__auto___40587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40587,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40587,out){
return (function (state_40562){
var state_val_40563 = (state_40562[(1)]);
if((state_val_40563 === (7))){
var inst_40557 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40564_40588 = state_40562__$1;
(statearr_40564_40588[(2)] = inst_40557);

(statearr_40564_40588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (1))){
var inst_40539 = null;
var state_40562__$1 = (function (){var statearr_40565 = state_40562;
(statearr_40565[(7)] = inst_40539);

return statearr_40565;
})();
var statearr_40566_40589 = state_40562__$1;
(statearr_40566_40589[(2)] = null);

(statearr_40566_40589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (4))){
var inst_40542 = (state_40562[(8)]);
var inst_40542__$1 = (state_40562[(2)]);
var inst_40543 = (inst_40542__$1 == null);
var inst_40544 = cljs.core.not.call(null,inst_40543);
var state_40562__$1 = (function (){var statearr_40567 = state_40562;
(statearr_40567[(8)] = inst_40542__$1);

return statearr_40567;
})();
if(inst_40544){
var statearr_40568_40590 = state_40562__$1;
(statearr_40568_40590[(1)] = (5));

} else {
var statearr_40569_40591 = state_40562__$1;
(statearr_40569_40591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (6))){
var state_40562__$1 = state_40562;
var statearr_40570_40592 = state_40562__$1;
(statearr_40570_40592[(2)] = null);

(statearr_40570_40592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (3))){
var inst_40559 = (state_40562[(2)]);
var inst_40560 = cljs.core.async.close_BANG_.call(null,out);
var state_40562__$1 = (function (){var statearr_40571 = state_40562;
(statearr_40571[(9)] = inst_40559);

return statearr_40571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40562__$1,inst_40560);
} else {
if((state_val_40563 === (2))){
var state_40562__$1 = state_40562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40562__$1,(4),ch);
} else {
if((state_val_40563 === (11))){
var inst_40542 = (state_40562[(8)]);
var inst_40551 = (state_40562[(2)]);
var inst_40539 = inst_40542;
var state_40562__$1 = (function (){var statearr_40572 = state_40562;
(statearr_40572[(10)] = inst_40551);

(statearr_40572[(7)] = inst_40539);

return statearr_40572;
})();
var statearr_40573_40593 = state_40562__$1;
(statearr_40573_40593[(2)] = null);

(statearr_40573_40593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (9))){
var inst_40542 = (state_40562[(8)]);
var state_40562__$1 = state_40562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40562__$1,(11),out,inst_40542);
} else {
if((state_val_40563 === (5))){
var inst_40539 = (state_40562[(7)]);
var inst_40542 = (state_40562[(8)]);
var inst_40546 = cljs.core._EQ_.call(null,inst_40542,inst_40539);
var state_40562__$1 = state_40562;
if(inst_40546){
var statearr_40575_40594 = state_40562__$1;
(statearr_40575_40594[(1)] = (8));

} else {
var statearr_40576_40595 = state_40562__$1;
(statearr_40576_40595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (10))){
var inst_40554 = (state_40562[(2)]);
var state_40562__$1 = state_40562;
var statearr_40577_40596 = state_40562__$1;
(statearr_40577_40596[(2)] = inst_40554);

(statearr_40577_40596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40563 === (8))){
var inst_40539 = (state_40562[(7)]);
var tmp40574 = inst_40539;
var inst_40539__$1 = tmp40574;
var state_40562__$1 = (function (){var statearr_40578 = state_40562;
(statearr_40578[(7)] = inst_40539__$1);

return statearr_40578;
})();
var statearr_40579_40597 = state_40562__$1;
(statearr_40579_40597[(2)] = null);

(statearr_40579_40597[(1)] = (2));


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
});})(c__7050__auto___40587,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40587,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40583[(0)] = state_machine__6995__auto__);

(statearr_40583[(1)] = (1));

return statearr_40583;
});
var state_machine__6995__auto____1 = (function (state_40562){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40584){if((e40584 instanceof Object)){
var ex__6998__auto__ = e40584;
var statearr_40585_40598 = state_40562;
(statearr_40585_40598[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40599 = state_40562;
state_40562 = G__40599;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40562){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40587,out))
})();
var state__7052__auto__ = (function (){var statearr_40586 = f__7051__auto__.call(null);
(statearr_40586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40587);

return statearr_40586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40587,out))
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
var c__7050__auto___40734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40734,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40734,out){
return (function (state_40704){
var state_val_40705 = (state_40704[(1)]);
if((state_val_40705 === (7))){
var inst_40700 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40706_40735 = state_40704__$1;
(statearr_40706_40735[(2)] = inst_40700);

(statearr_40706_40735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (1))){
var inst_40667 = (new Array(n));
var inst_40668 = inst_40667;
var inst_40669 = (0);
var state_40704__$1 = (function (){var statearr_40707 = state_40704;
(statearr_40707[(7)] = inst_40668);

(statearr_40707[(8)] = inst_40669);

return statearr_40707;
})();
var statearr_40708_40736 = state_40704__$1;
(statearr_40708_40736[(2)] = null);

(statearr_40708_40736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (4))){
var inst_40672 = (state_40704[(9)]);
var inst_40672__$1 = (state_40704[(2)]);
var inst_40673 = (inst_40672__$1 == null);
var inst_40674 = cljs.core.not.call(null,inst_40673);
var state_40704__$1 = (function (){var statearr_40709 = state_40704;
(statearr_40709[(9)] = inst_40672__$1);

return statearr_40709;
})();
if(inst_40674){
var statearr_40710_40737 = state_40704__$1;
(statearr_40710_40737[(1)] = (5));

} else {
var statearr_40711_40738 = state_40704__$1;
(statearr_40711_40738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (15))){
var inst_40694 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40712_40739 = state_40704__$1;
(statearr_40712_40739[(2)] = inst_40694);

(statearr_40712_40739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (13))){
var state_40704__$1 = state_40704;
var statearr_40713_40740 = state_40704__$1;
(statearr_40713_40740[(2)] = null);

(statearr_40713_40740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (6))){
var inst_40669 = (state_40704[(8)]);
var inst_40690 = (inst_40669 > (0));
var state_40704__$1 = state_40704;
if(cljs.core.truth_(inst_40690)){
var statearr_40714_40741 = state_40704__$1;
(statearr_40714_40741[(1)] = (12));

} else {
var statearr_40715_40742 = state_40704__$1;
(statearr_40715_40742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (3))){
var inst_40702 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40704__$1,inst_40702);
} else {
if((state_val_40705 === (12))){
var inst_40668 = (state_40704[(7)]);
var inst_40692 = cljs.core.vec.call(null,inst_40668);
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40704__$1,(15),out,inst_40692);
} else {
if((state_val_40705 === (2))){
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40704__$1,(4),ch);
} else {
if((state_val_40705 === (11))){
var inst_40684 = (state_40704[(2)]);
var inst_40685 = (new Array(n));
var inst_40668 = inst_40685;
var inst_40669 = (0);
var state_40704__$1 = (function (){var statearr_40716 = state_40704;
(statearr_40716[(10)] = inst_40684);

(statearr_40716[(7)] = inst_40668);

(statearr_40716[(8)] = inst_40669);

return statearr_40716;
})();
var statearr_40717_40743 = state_40704__$1;
(statearr_40717_40743[(2)] = null);

(statearr_40717_40743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (9))){
var inst_40668 = (state_40704[(7)]);
var inst_40682 = cljs.core.vec.call(null,inst_40668);
var state_40704__$1 = state_40704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40704__$1,(11),out,inst_40682);
} else {
if((state_val_40705 === (5))){
var inst_40668 = (state_40704[(7)]);
var inst_40672 = (state_40704[(9)]);
var inst_40677 = (state_40704[(11)]);
var inst_40669 = (state_40704[(8)]);
var inst_40676 = (inst_40668[inst_40669] = inst_40672);
var inst_40677__$1 = (inst_40669 + (1));
var inst_40678 = (inst_40677__$1 < n);
var state_40704__$1 = (function (){var statearr_40718 = state_40704;
(statearr_40718[(12)] = inst_40676);

(statearr_40718[(11)] = inst_40677__$1);

return statearr_40718;
})();
if(cljs.core.truth_(inst_40678)){
var statearr_40719_40744 = state_40704__$1;
(statearr_40719_40744[(1)] = (8));

} else {
var statearr_40720_40745 = state_40704__$1;
(statearr_40720_40745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (14))){
var inst_40697 = (state_40704[(2)]);
var inst_40698 = cljs.core.async.close_BANG_.call(null,out);
var state_40704__$1 = (function (){var statearr_40722 = state_40704;
(statearr_40722[(13)] = inst_40697);

return statearr_40722;
})();
var statearr_40723_40746 = state_40704__$1;
(statearr_40723_40746[(2)] = inst_40698);

(statearr_40723_40746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (10))){
var inst_40688 = (state_40704[(2)]);
var state_40704__$1 = state_40704;
var statearr_40724_40747 = state_40704__$1;
(statearr_40724_40747[(2)] = inst_40688);

(statearr_40724_40747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40705 === (8))){
var inst_40668 = (state_40704[(7)]);
var inst_40677 = (state_40704[(11)]);
var tmp40721 = inst_40668;
var inst_40668__$1 = tmp40721;
var inst_40669 = inst_40677;
var state_40704__$1 = (function (){var statearr_40725 = state_40704;
(statearr_40725[(7)] = inst_40668__$1);

(statearr_40725[(8)] = inst_40669);

return statearr_40725;
})();
var statearr_40726_40748 = state_40704__$1;
(statearr_40726_40748[(2)] = null);

(statearr_40726_40748[(1)] = (2));


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
});})(c__7050__auto___40734,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40734,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40730[(0)] = state_machine__6995__auto__);

(statearr_40730[(1)] = (1));

return statearr_40730;
});
var state_machine__6995__auto____1 = (function (state_40704){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40731){if((e40731 instanceof Object)){
var ex__6998__auto__ = e40731;
var statearr_40732_40749 = state_40704;
(statearr_40732_40749[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40750 = state_40704;
state_40704 = G__40750;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40704){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40734,out))
})();
var state__7052__auto__ = (function (){var statearr_40733 = f__7051__auto__.call(null);
(statearr_40733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40734);

return statearr_40733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40734,out))
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
var c__7050__auto___40893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___40893,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___40893,out){
return (function (state_40863){
var state_val_40864 = (state_40863[(1)]);
if((state_val_40864 === (7))){
var inst_40859 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40865_40894 = state_40863__$1;
(statearr_40865_40894[(2)] = inst_40859);

(statearr_40865_40894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (1))){
var inst_40822 = [];
var inst_40823 = inst_40822;
var inst_40824 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40863__$1 = (function (){var statearr_40866 = state_40863;
(statearr_40866[(7)] = inst_40824);

(statearr_40866[(8)] = inst_40823);

return statearr_40866;
})();
var statearr_40867_40895 = state_40863__$1;
(statearr_40867_40895[(2)] = null);

(statearr_40867_40895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (4))){
var inst_40827 = (state_40863[(9)]);
var inst_40827__$1 = (state_40863[(2)]);
var inst_40828 = (inst_40827__$1 == null);
var inst_40829 = cljs.core.not.call(null,inst_40828);
var state_40863__$1 = (function (){var statearr_40868 = state_40863;
(statearr_40868[(9)] = inst_40827__$1);

return statearr_40868;
})();
if(inst_40829){
var statearr_40869_40896 = state_40863__$1;
(statearr_40869_40896[(1)] = (5));

} else {
var statearr_40870_40897 = state_40863__$1;
(statearr_40870_40897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (15))){
var inst_40853 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40871_40898 = state_40863__$1;
(statearr_40871_40898[(2)] = inst_40853);

(statearr_40871_40898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (13))){
var state_40863__$1 = state_40863;
var statearr_40872_40899 = state_40863__$1;
(statearr_40872_40899[(2)] = null);

(statearr_40872_40899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (6))){
var inst_40823 = (state_40863[(8)]);
var inst_40848 = inst_40823.length;
var inst_40849 = (inst_40848 > (0));
var state_40863__$1 = state_40863;
if(cljs.core.truth_(inst_40849)){
var statearr_40873_40900 = state_40863__$1;
(statearr_40873_40900[(1)] = (12));

} else {
var statearr_40874_40901 = state_40863__$1;
(statearr_40874_40901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (3))){
var inst_40861 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40863__$1,inst_40861);
} else {
if((state_val_40864 === (12))){
var inst_40823 = (state_40863[(8)]);
var inst_40851 = cljs.core.vec.call(null,inst_40823);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40863__$1,(15),out,inst_40851);
} else {
if((state_val_40864 === (2))){
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40863__$1,(4),ch);
} else {
if((state_val_40864 === (11))){
var inst_40831 = (state_40863[(10)]);
var inst_40827 = (state_40863[(9)]);
var inst_40841 = (state_40863[(2)]);
var inst_40842 = [];
var inst_40843 = inst_40842.push(inst_40827);
var inst_40823 = inst_40842;
var inst_40824 = inst_40831;
var state_40863__$1 = (function (){var statearr_40875 = state_40863;
(statearr_40875[(11)] = inst_40841);

(statearr_40875[(7)] = inst_40824);

(statearr_40875[(8)] = inst_40823);

(statearr_40875[(12)] = inst_40843);

return statearr_40875;
})();
var statearr_40876_40902 = state_40863__$1;
(statearr_40876_40902[(2)] = null);

(statearr_40876_40902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (9))){
var inst_40823 = (state_40863[(8)]);
var inst_40839 = cljs.core.vec.call(null,inst_40823);
var state_40863__$1 = state_40863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40863__$1,(11),out,inst_40839);
} else {
if((state_val_40864 === (5))){
var inst_40824 = (state_40863[(7)]);
var inst_40831 = (state_40863[(10)]);
var inst_40827 = (state_40863[(9)]);
var inst_40831__$1 = f.call(null,inst_40827);
var inst_40832 = cljs.core._EQ_.call(null,inst_40831__$1,inst_40824);
var inst_40833 = cljs.core.keyword_identical_QMARK_.call(null,inst_40824,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40834 = (inst_40832) || (inst_40833);
var state_40863__$1 = (function (){var statearr_40877 = state_40863;
(statearr_40877[(10)] = inst_40831__$1);

return statearr_40877;
})();
if(cljs.core.truth_(inst_40834)){
var statearr_40878_40903 = state_40863__$1;
(statearr_40878_40903[(1)] = (8));

} else {
var statearr_40879_40904 = state_40863__$1;
(statearr_40879_40904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (14))){
var inst_40856 = (state_40863[(2)]);
var inst_40857 = cljs.core.async.close_BANG_.call(null,out);
var state_40863__$1 = (function (){var statearr_40881 = state_40863;
(statearr_40881[(13)] = inst_40856);

return statearr_40881;
})();
var statearr_40882_40905 = state_40863__$1;
(statearr_40882_40905[(2)] = inst_40857);

(statearr_40882_40905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (10))){
var inst_40846 = (state_40863[(2)]);
var state_40863__$1 = state_40863;
var statearr_40883_40906 = state_40863__$1;
(statearr_40883_40906[(2)] = inst_40846);

(statearr_40883_40906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40864 === (8))){
var inst_40823 = (state_40863[(8)]);
var inst_40831 = (state_40863[(10)]);
var inst_40827 = (state_40863[(9)]);
var inst_40836 = inst_40823.push(inst_40827);
var tmp40880 = inst_40823;
var inst_40823__$1 = tmp40880;
var inst_40824 = inst_40831;
var state_40863__$1 = (function (){var statearr_40884 = state_40863;
(statearr_40884[(7)] = inst_40824);

(statearr_40884[(8)] = inst_40823__$1);

(statearr_40884[(14)] = inst_40836);

return statearr_40884;
})();
var statearr_40885_40907 = state_40863__$1;
(statearr_40885_40907[(2)] = null);

(statearr_40885_40907[(1)] = (2));


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
});})(c__7050__auto___40893,out))
;
return ((function (switch__6994__auto__,c__7050__auto___40893,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_40889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40889[(0)] = state_machine__6995__auto__);

(statearr_40889[(1)] = (1));

return statearr_40889;
});
var state_machine__6995__auto____1 = (function (state_40863){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_40863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e40890){if((e40890 instanceof Object)){
var ex__6998__auto__ = e40890;
var statearr_40891_40908 = state_40863;
(statearr_40891_40908[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40909 = state_40863;
state_40863 = G__40909;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_40863){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_40863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___40893,out))
})();
var state__7052__auto__ = (function (){var statearr_40892 = f__7051__auto__.call(null);
(statearr_40892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___40893);

return statearr_40892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___40893,out))
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