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
if(typeof cljs.core.async.t76668 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t76668 = (function (f,fn_handler,meta76669){
this.f = f;
this.fn_handler = fn_handler;
this.meta76669 = meta76669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76668.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t76668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t76668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t76668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76670){
var self__ = this;
var _76670__$1 = this;
return self__.meta76669;
});

cljs.core.async.t76668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76670,meta76669__$1){
var self__ = this;
var _76670__$1 = this;
return (new cljs.core.async.t76668(self__.f,self__.fn_handler,meta76669__$1));
});

cljs.core.async.t76668.cljs$lang$type = true;

cljs.core.async.t76668.cljs$lang$ctorStr = "cljs.core.async/t76668";

cljs.core.async.t76668.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t76668");
});

cljs.core.async.__GT_t76668 = (function __GT_t76668(f__$1,fn_handler__$1,meta76669){
return (new cljs.core.async.t76668(f__$1,fn_handler__$1,meta76669));
});

}

return (new cljs.core.async.t76668(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
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
var G__76672 = buff;
if(G__76672){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__76672.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__76672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__76672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__76672);
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
var val_76673 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_76673);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_76673,ret){
return (function (){
return fn1.call(null,val_76673);
});})(val_76673,ret))
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
var n__4517__auto___76674 = n;
var x_76675 = (0);
while(true){
if((x_76675 < n__4517__auto___76674)){
(a[x_76675] = (0));

var G__76676 = (x_76675 + (1));
x_76675 = G__76676;
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

var G__76677 = (i + (1));
i = G__76677;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t76681 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t76681 = (function (flag,alt_flag,meta76682){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta76682 = meta76682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t76681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t76681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t76681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_76683){
var self__ = this;
var _76683__$1 = this;
return self__.meta76682;
});})(flag))
;

cljs.core.async.t76681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_76683,meta76682__$1){
var self__ = this;
var _76683__$1 = this;
return (new cljs.core.async.t76681(self__.flag,self__.alt_flag,meta76682__$1));
});})(flag))
;

cljs.core.async.t76681.cljs$lang$type = true;

cljs.core.async.t76681.cljs$lang$ctorStr = "cljs.core.async/t76681";

cljs.core.async.t76681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t76681");
});})(flag))
;

cljs.core.async.__GT_t76681 = ((function (flag){
return (function __GT_t76681(flag__$1,alt_flag__$1,meta76682){
return (new cljs.core.async.t76681(flag__$1,alt_flag__$1,meta76682));
});})(flag))
;

}

return (new cljs.core.async.t76681(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t76687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t76687 = (function (cb,flag,alt_handler,meta76688){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta76688 = meta76688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t76687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t76687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t76687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76689){
var self__ = this;
var _76689__$1 = this;
return self__.meta76688;
});

cljs.core.async.t76687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76689,meta76688__$1){
var self__ = this;
var _76689__$1 = this;
return (new cljs.core.async.t76687(self__.cb,self__.flag,self__.alt_handler,meta76688__$1));
});

cljs.core.async.t76687.cljs$lang$type = true;

cljs.core.async.t76687.cljs$lang$ctorStr = "cljs.core.async/t76687";

cljs.core.async.t76687.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t76687");
});

cljs.core.async.__GT_t76687 = (function __GT_t76687(cb__$1,flag__$1,alt_handler__$1,meta76688){
return (new cljs.core.async.t76687(cb__$1,flag__$1,alt_handler__$1,meta76688));
});

}

return (new cljs.core.async.t76687(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
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
return (function (p1__76690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__76691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76691_SHARP_,port], null));
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
var G__76692 = (i + (1));
i = G__76692;
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
var alts_BANG___delegate = function (ports,p__76693){
var map__76695 = p__76693;
var map__76695__$1 = ((cljs.core.seq_QMARK_.call(null,map__76695))?cljs.core.apply.call(null,cljs.core.hash_map,map__76695):map__76695);
var opts = map__76695__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__76693 = null;
if (arguments.length > 1) {
  p__76693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__76693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__76696){
var ports = cljs.core.first(arglist__76696);
var p__76693 = cljs.core.rest(arglist__76696);
return alts_BANG___delegate(ports,p__76693);
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
var c__7050__auto___76791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___76791){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___76791){
return (function (state_76767){
var state_val_76768 = (state_76767[(1)]);
if((state_val_76768 === (7))){
var inst_76763 = (state_76767[(2)]);
var state_76767__$1 = state_76767;
var statearr_76769_76792 = state_76767__$1;
(statearr_76769_76792[(2)] = inst_76763);

(statearr_76769_76792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (1))){
var state_76767__$1 = state_76767;
var statearr_76770_76793 = state_76767__$1;
(statearr_76770_76793[(2)] = null);

(statearr_76770_76793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (4))){
var inst_76746 = (state_76767[(7)]);
var inst_76746__$1 = (state_76767[(2)]);
var inst_76747 = (inst_76746__$1 == null);
var state_76767__$1 = (function (){var statearr_76771 = state_76767;
(statearr_76771[(7)] = inst_76746__$1);

return statearr_76771;
})();
if(cljs.core.truth_(inst_76747)){
var statearr_76772_76794 = state_76767__$1;
(statearr_76772_76794[(1)] = (5));

} else {
var statearr_76773_76795 = state_76767__$1;
(statearr_76773_76795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (13))){
var state_76767__$1 = state_76767;
var statearr_76774_76796 = state_76767__$1;
(statearr_76774_76796[(2)] = null);

(statearr_76774_76796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (6))){
var inst_76746 = (state_76767[(7)]);
var state_76767__$1 = state_76767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76767__$1,(11),to,inst_76746);
} else {
if((state_val_76768 === (3))){
var inst_76765 = (state_76767[(2)]);
var state_76767__$1 = state_76767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76767__$1,inst_76765);
} else {
if((state_val_76768 === (12))){
var state_76767__$1 = state_76767;
var statearr_76775_76797 = state_76767__$1;
(statearr_76775_76797[(2)] = null);

(statearr_76775_76797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (2))){
var state_76767__$1 = state_76767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76767__$1,(4),from);
} else {
if((state_val_76768 === (11))){
var inst_76756 = (state_76767[(2)]);
var state_76767__$1 = state_76767;
if(cljs.core.truth_(inst_76756)){
var statearr_76776_76798 = state_76767__$1;
(statearr_76776_76798[(1)] = (12));

} else {
var statearr_76777_76799 = state_76767__$1;
(statearr_76777_76799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (9))){
var state_76767__$1 = state_76767;
var statearr_76778_76800 = state_76767__$1;
(statearr_76778_76800[(2)] = null);

(statearr_76778_76800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (5))){
var state_76767__$1 = state_76767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_76779_76801 = state_76767__$1;
(statearr_76779_76801[(1)] = (8));

} else {
var statearr_76780_76802 = state_76767__$1;
(statearr_76780_76802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (14))){
var inst_76761 = (state_76767[(2)]);
var state_76767__$1 = state_76767;
var statearr_76781_76803 = state_76767__$1;
(statearr_76781_76803[(2)] = inst_76761);

(statearr_76781_76803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (10))){
var inst_76753 = (state_76767[(2)]);
var state_76767__$1 = state_76767;
var statearr_76782_76804 = state_76767__$1;
(statearr_76782_76804[(2)] = inst_76753);

(statearr_76782_76804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76768 === (8))){
var inst_76750 = cljs.core.async.close_BANG_.call(null,to);
var state_76767__$1 = state_76767;
var statearr_76783_76805 = state_76767__$1;
(statearr_76783_76805[(2)] = inst_76750);

(statearr_76783_76805[(1)] = (10));


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
});})(c__7050__auto___76791))
;
return ((function (switch__6994__auto__,c__7050__auto___76791){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_76787 = [null,null,null,null,null,null,null,null];
(statearr_76787[(0)] = state_machine__6995__auto__);

(statearr_76787[(1)] = (1));

return statearr_76787;
});
var state_machine__6995__auto____1 = (function (state_76767){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_76767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e76788){if((e76788 instanceof Object)){
var ex__6998__auto__ = e76788;
var statearr_76789_76806 = state_76767;
(statearr_76789_76806[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76807 = state_76767;
state_76767 = G__76807;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_76767){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_76767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___76791))
})();
var state__7052__auto__ = (function (){var statearr_76790 = f__7051__auto__.call(null);
(statearr_76790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___76791);

return statearr_76790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___76791))
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
return (function (p__76991){
var vec__76992 = p__76991;
var v = cljs.core.nth.call(null,vec__76992,(0),null);
var p = cljs.core.nth.call(null,vec__76992,(1),null);
var job = vec__76992;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___77174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results){
return (function (state_76997){
var state_val_76998 = (state_76997[(1)]);
if((state_val_76998 === (2))){
var inst_76994 = (state_76997[(2)]);
var inst_76995 = cljs.core.async.close_BANG_.call(null,res);
var state_76997__$1 = (function (){var statearr_76999 = state_76997;
(statearr_76999[(7)] = inst_76994);

return statearr_76999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76997__$1,inst_76995);
} else {
if((state_val_76998 === (1))){
var state_76997__$1 = state_76997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76997__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77003 = [null,null,null,null,null,null,null,null];
(statearr_77003[(0)] = state_machine__6995__auto__);

(statearr_77003[(1)] = (1));

return statearr_77003;
});
var state_machine__6995__auto____1 = (function (state_76997){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_76997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77004){if((e77004 instanceof Object)){
var ex__6998__auto__ = e77004;
var statearr_77005_77175 = state_76997;
(statearr_77005_77175[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77176 = state_76997;
state_76997 = G__77176;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_76997){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_76997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_77006 = f__7051__auto__.call(null);
(statearr_77006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77174);

return statearr_77006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___77174,res,vec__76992,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__77007){
var vec__77008 = p__77007;
var v = cljs.core.nth.call(null,vec__77008,(0),null);
var p = cljs.core.nth.call(null,vec__77008,(1),null);
var job = vec__77008;
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
var n__4517__auto___77177 = n;
var __77178 = (0);
while(true){
if((__77178 < n__4517__auto___77177)){
var G__77009_77179 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__77009_77179) {
case "async":
var c__7050__auto___77181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__77178,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__77178,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function (state_77022){
var state_val_77023 = (state_77022[(1)]);
if((state_val_77023 === (7))){
var inst_77018 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
var statearr_77024_77182 = state_77022__$1;
(statearr_77024_77182[(2)] = inst_77018);

(statearr_77024_77182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (6))){
var state_77022__$1 = state_77022;
var statearr_77025_77183 = state_77022__$1;
(statearr_77025_77183[(2)] = null);

(statearr_77025_77183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (5))){
var state_77022__$1 = state_77022;
var statearr_77026_77184 = state_77022__$1;
(statearr_77026_77184[(2)] = null);

(statearr_77026_77184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (4))){
var inst_77012 = (state_77022[(2)]);
var inst_77013 = async.call(null,inst_77012);
var state_77022__$1 = state_77022;
if(cljs.core.truth_(inst_77013)){
var statearr_77027_77185 = state_77022__$1;
(statearr_77027_77185[(1)] = (5));

} else {
var statearr_77028_77186 = state_77022__$1;
(statearr_77028_77186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77023 === (3))){
var inst_77020 = (state_77022[(2)]);
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77022__$1,inst_77020);
} else {
if((state_val_77023 === (2))){
var state_77022__$1 = state_77022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77022__$1,(4),jobs);
} else {
if((state_val_77023 === (1))){
var state_77022__$1 = state_77022;
var statearr_77029_77187 = state_77022__$1;
(statearr_77029_77187[(2)] = null);

(statearr_77029_77187[(1)] = (2));


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
});})(__77178,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
;
return ((function (__77178,switch__6994__auto__,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77033 = [null,null,null,null,null,null,null];
(statearr_77033[(0)] = state_machine__6995__auto__);

(statearr_77033[(1)] = (1));

return statearr_77033;
});
var state_machine__6995__auto____1 = (function (state_77022){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77034){if((e77034 instanceof Object)){
var ex__6998__auto__ = e77034;
var statearr_77035_77188 = state_77022;
(statearr_77035_77188[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77189 = state_77022;
state_77022 = G__77189;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77022){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__77178,switch__6994__auto__,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_77036 = f__7051__auto__.call(null);
(statearr_77036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77181);

return statearr_77036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__77178,c__7050__auto___77181,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___77190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__77178,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__77178,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function (state_77049){
var state_val_77050 = (state_77049[(1)]);
if((state_val_77050 === (7))){
var inst_77045 = (state_77049[(2)]);
var state_77049__$1 = state_77049;
var statearr_77051_77191 = state_77049__$1;
(statearr_77051_77191[(2)] = inst_77045);

(statearr_77051_77191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77050 === (6))){
var state_77049__$1 = state_77049;
var statearr_77052_77192 = state_77049__$1;
(statearr_77052_77192[(2)] = null);

(statearr_77052_77192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77050 === (5))){
var state_77049__$1 = state_77049;
var statearr_77053_77193 = state_77049__$1;
(statearr_77053_77193[(2)] = null);

(statearr_77053_77193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77050 === (4))){
var inst_77039 = (state_77049[(2)]);
var inst_77040 = process.call(null,inst_77039);
var state_77049__$1 = state_77049;
if(cljs.core.truth_(inst_77040)){
var statearr_77054_77194 = state_77049__$1;
(statearr_77054_77194[(1)] = (5));

} else {
var statearr_77055_77195 = state_77049__$1;
(statearr_77055_77195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77050 === (3))){
var inst_77047 = (state_77049[(2)]);
var state_77049__$1 = state_77049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77049__$1,inst_77047);
} else {
if((state_val_77050 === (2))){
var state_77049__$1 = state_77049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77049__$1,(4),jobs);
} else {
if((state_val_77050 === (1))){
var state_77049__$1 = state_77049;
var statearr_77056_77196 = state_77049__$1;
(statearr_77056_77196[(2)] = null);

(statearr_77056_77196[(1)] = (2));


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
});})(__77178,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
;
return ((function (__77178,switch__6994__auto__,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77060 = [null,null,null,null,null,null,null];
(statearr_77060[(0)] = state_machine__6995__auto__);

(statearr_77060[(1)] = (1));

return statearr_77060;
});
var state_machine__6995__auto____1 = (function (state_77049){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77061){if((e77061 instanceof Object)){
var ex__6998__auto__ = e77061;
var statearr_77062_77197 = state_77049;
(statearr_77062_77197[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77198 = state_77049;
state_77049 = G__77198;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77049){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__77178,switch__6994__auto__,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_77063 = f__7051__auto__.call(null);
(statearr_77063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77190);

return statearr_77063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__77178,c__7050__auto___77190,G__77009_77179,n__4517__auto___77177,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__77199 = (__77178 + (1));
__77178 = G__77199;
continue;
} else {
}
break;
}

var c__7050__auto___77200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___77200,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___77200,jobs,results,process,async){
return (function (state_77085){
var state_val_77086 = (state_77085[(1)]);
if((state_val_77086 === (9))){
var inst_77078 = (state_77085[(2)]);
var state_77085__$1 = (function (){var statearr_77087 = state_77085;
(statearr_77087[(7)] = inst_77078);

return statearr_77087;
})();
var statearr_77088_77201 = state_77085__$1;
(statearr_77088_77201[(2)] = null);

(statearr_77088_77201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77086 === (8))){
var inst_77071 = (state_77085[(8)]);
var inst_77076 = (state_77085[(2)]);
var state_77085__$1 = (function (){var statearr_77089 = state_77085;
(statearr_77089[(9)] = inst_77076);

return statearr_77089;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77085__$1,(9),results,inst_77071);
} else {
if((state_val_77086 === (7))){
var inst_77081 = (state_77085[(2)]);
var state_77085__$1 = state_77085;
var statearr_77090_77202 = state_77085__$1;
(statearr_77090_77202[(2)] = inst_77081);

(statearr_77090_77202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77086 === (6))){
var inst_77066 = (state_77085[(10)]);
var inst_77071 = (state_77085[(8)]);
var inst_77071__$1 = cljs.core.async.chan.call(null,(1));
var inst_77072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77073 = [inst_77066,inst_77071__$1];
var inst_77074 = (new cljs.core.PersistentVector(null,2,(5),inst_77072,inst_77073,null));
var state_77085__$1 = (function (){var statearr_77091 = state_77085;
(statearr_77091[(8)] = inst_77071__$1);

return statearr_77091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77085__$1,(8),jobs,inst_77074);
} else {
if((state_val_77086 === (5))){
var inst_77069 = cljs.core.async.close_BANG_.call(null,jobs);
var state_77085__$1 = state_77085;
var statearr_77092_77203 = state_77085__$1;
(statearr_77092_77203[(2)] = inst_77069);

(statearr_77092_77203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77086 === (4))){
var inst_77066 = (state_77085[(10)]);
var inst_77066__$1 = (state_77085[(2)]);
var inst_77067 = (inst_77066__$1 == null);
var state_77085__$1 = (function (){var statearr_77093 = state_77085;
(statearr_77093[(10)] = inst_77066__$1);

return statearr_77093;
})();
if(cljs.core.truth_(inst_77067)){
var statearr_77094_77204 = state_77085__$1;
(statearr_77094_77204[(1)] = (5));

} else {
var statearr_77095_77205 = state_77085__$1;
(statearr_77095_77205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77086 === (3))){
var inst_77083 = (state_77085[(2)]);
var state_77085__$1 = state_77085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77085__$1,inst_77083);
} else {
if((state_val_77086 === (2))){
var state_77085__$1 = state_77085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77085__$1,(4),from);
} else {
if((state_val_77086 === (1))){
var state_77085__$1 = state_77085;
var statearr_77096_77206 = state_77085__$1;
(statearr_77096_77206[(2)] = null);

(statearr_77096_77206[(1)] = (2));


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
});})(c__7050__auto___77200,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___77200,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_77100[(0)] = state_machine__6995__auto__);

(statearr_77100[(1)] = (1));

return statearr_77100;
});
var state_machine__6995__auto____1 = (function (state_77085){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77101){if((e77101 instanceof Object)){
var ex__6998__auto__ = e77101;
var statearr_77102_77207 = state_77085;
(statearr_77102_77207[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77208 = state_77085;
state_77085 = G__77208;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77085){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___77200,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_77103 = f__7051__auto__.call(null);
(statearr_77103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77200);

return statearr_77103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___77200,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_77141){
var state_val_77142 = (state_77141[(1)]);
if((state_val_77142 === (7))){
var inst_77137 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
var statearr_77143_77209 = state_77141__$1;
(statearr_77143_77209[(2)] = inst_77137);

(statearr_77143_77209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (20))){
var state_77141__$1 = state_77141;
var statearr_77144_77210 = state_77141__$1;
(statearr_77144_77210[(2)] = null);

(statearr_77144_77210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (1))){
var state_77141__$1 = state_77141;
var statearr_77145_77211 = state_77141__$1;
(statearr_77145_77211[(2)] = null);

(statearr_77145_77211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (4))){
var inst_77106 = (state_77141[(7)]);
var inst_77106__$1 = (state_77141[(2)]);
var inst_77107 = (inst_77106__$1 == null);
var state_77141__$1 = (function (){var statearr_77146 = state_77141;
(statearr_77146[(7)] = inst_77106__$1);

return statearr_77146;
})();
if(cljs.core.truth_(inst_77107)){
var statearr_77147_77212 = state_77141__$1;
(statearr_77147_77212[(1)] = (5));

} else {
var statearr_77148_77213 = state_77141__$1;
(statearr_77148_77213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (15))){
var inst_77119 = (state_77141[(8)]);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77141__$1,(18),to,inst_77119);
} else {
if((state_val_77142 === (21))){
var inst_77132 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
var statearr_77149_77214 = state_77141__$1;
(statearr_77149_77214[(2)] = inst_77132);

(statearr_77149_77214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (13))){
var inst_77134 = (state_77141[(2)]);
var state_77141__$1 = (function (){var statearr_77150 = state_77141;
(statearr_77150[(9)] = inst_77134);

return statearr_77150;
})();
var statearr_77151_77215 = state_77141__$1;
(statearr_77151_77215[(2)] = null);

(statearr_77151_77215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (6))){
var inst_77106 = (state_77141[(7)]);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77141__$1,(11),inst_77106);
} else {
if((state_val_77142 === (17))){
var inst_77127 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
if(cljs.core.truth_(inst_77127)){
var statearr_77152_77216 = state_77141__$1;
(statearr_77152_77216[(1)] = (19));

} else {
var statearr_77153_77217 = state_77141__$1;
(statearr_77153_77217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (3))){
var inst_77139 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77141__$1,inst_77139);
} else {
if((state_val_77142 === (12))){
var inst_77116 = (state_77141[(10)]);
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77141__$1,(14),inst_77116);
} else {
if((state_val_77142 === (2))){
var state_77141__$1 = state_77141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77141__$1,(4),results);
} else {
if((state_val_77142 === (19))){
var state_77141__$1 = state_77141;
var statearr_77154_77218 = state_77141__$1;
(statearr_77154_77218[(2)] = null);

(statearr_77154_77218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (11))){
var inst_77116 = (state_77141[(2)]);
var state_77141__$1 = (function (){var statearr_77155 = state_77141;
(statearr_77155[(10)] = inst_77116);

return statearr_77155;
})();
var statearr_77156_77219 = state_77141__$1;
(statearr_77156_77219[(2)] = null);

(statearr_77156_77219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (9))){
var state_77141__$1 = state_77141;
var statearr_77157_77220 = state_77141__$1;
(statearr_77157_77220[(2)] = null);

(statearr_77157_77220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (5))){
var state_77141__$1 = state_77141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77158_77221 = state_77141__$1;
(statearr_77158_77221[(1)] = (8));

} else {
var statearr_77159_77222 = state_77141__$1;
(statearr_77159_77222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (14))){
var inst_77119 = (state_77141[(8)]);
var inst_77121 = (state_77141[(11)]);
var inst_77119__$1 = (state_77141[(2)]);
var inst_77120 = (inst_77119__$1 == null);
var inst_77121__$1 = cljs.core.not.call(null,inst_77120);
var state_77141__$1 = (function (){var statearr_77160 = state_77141;
(statearr_77160[(8)] = inst_77119__$1);

(statearr_77160[(11)] = inst_77121__$1);

return statearr_77160;
})();
if(inst_77121__$1){
var statearr_77161_77223 = state_77141__$1;
(statearr_77161_77223[(1)] = (15));

} else {
var statearr_77162_77224 = state_77141__$1;
(statearr_77162_77224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (16))){
var inst_77121 = (state_77141[(11)]);
var state_77141__$1 = state_77141;
var statearr_77163_77225 = state_77141__$1;
(statearr_77163_77225[(2)] = inst_77121);

(statearr_77163_77225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (10))){
var inst_77113 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
var statearr_77164_77226 = state_77141__$1;
(statearr_77164_77226[(2)] = inst_77113);

(statearr_77164_77226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (18))){
var inst_77124 = (state_77141[(2)]);
var state_77141__$1 = state_77141;
var statearr_77165_77227 = state_77141__$1;
(statearr_77165_77227[(2)] = inst_77124);

(statearr_77165_77227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77142 === (8))){
var inst_77110 = cljs.core.async.close_BANG_.call(null,to);
var state_77141__$1 = state_77141;
var statearr_77166_77228 = state_77141__$1;
(statearr_77166_77228[(2)] = inst_77110);

(statearr_77166_77228[(1)] = (10));


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
var statearr_77170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77170[(0)] = state_machine__6995__auto__);

(statearr_77170[(1)] = (1));

return statearr_77170;
});
var state_machine__6995__auto____1 = (function (state_77141){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77171){if((e77171 instanceof Object)){
var ex__6998__auto__ = e77171;
var statearr_77172_77229 = state_77141;
(statearr_77172_77229[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77230 = state_77141;
state_77141 = G__77230;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77141){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_77173 = f__7051__auto__.call(null);
(statearr_77173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_77173;
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
var c__7050__auto___77331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___77331,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___77331,tc,fc){
return (function (state_77306){
var state_val_77307 = (state_77306[(1)]);
if((state_val_77307 === (7))){
var inst_77302 = (state_77306[(2)]);
var state_77306__$1 = state_77306;
var statearr_77308_77332 = state_77306__$1;
(statearr_77308_77332[(2)] = inst_77302);

(statearr_77308_77332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (1))){
var state_77306__$1 = state_77306;
var statearr_77309_77333 = state_77306__$1;
(statearr_77309_77333[(2)] = null);

(statearr_77309_77333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (4))){
var inst_77283 = (state_77306[(7)]);
var inst_77283__$1 = (state_77306[(2)]);
var inst_77284 = (inst_77283__$1 == null);
var state_77306__$1 = (function (){var statearr_77310 = state_77306;
(statearr_77310[(7)] = inst_77283__$1);

return statearr_77310;
})();
if(cljs.core.truth_(inst_77284)){
var statearr_77311_77334 = state_77306__$1;
(statearr_77311_77334[(1)] = (5));

} else {
var statearr_77312_77335 = state_77306__$1;
(statearr_77312_77335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (13))){
var state_77306__$1 = state_77306;
var statearr_77313_77336 = state_77306__$1;
(statearr_77313_77336[(2)] = null);

(statearr_77313_77336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (6))){
var inst_77283 = (state_77306[(7)]);
var inst_77289 = p.call(null,inst_77283);
var state_77306__$1 = state_77306;
if(cljs.core.truth_(inst_77289)){
var statearr_77314_77337 = state_77306__$1;
(statearr_77314_77337[(1)] = (9));

} else {
var statearr_77315_77338 = state_77306__$1;
(statearr_77315_77338[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (3))){
var inst_77304 = (state_77306[(2)]);
var state_77306__$1 = state_77306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77306__$1,inst_77304);
} else {
if((state_val_77307 === (12))){
var state_77306__$1 = state_77306;
var statearr_77316_77339 = state_77306__$1;
(statearr_77316_77339[(2)] = null);

(statearr_77316_77339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (2))){
var state_77306__$1 = state_77306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77306__$1,(4),ch);
} else {
if((state_val_77307 === (11))){
var inst_77283 = (state_77306[(7)]);
var inst_77293 = (state_77306[(2)]);
var state_77306__$1 = state_77306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77306__$1,(8),inst_77293,inst_77283);
} else {
if((state_val_77307 === (9))){
var state_77306__$1 = state_77306;
var statearr_77317_77340 = state_77306__$1;
(statearr_77317_77340[(2)] = tc);

(statearr_77317_77340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (5))){
var inst_77286 = cljs.core.async.close_BANG_.call(null,tc);
var inst_77287 = cljs.core.async.close_BANG_.call(null,fc);
var state_77306__$1 = (function (){var statearr_77318 = state_77306;
(statearr_77318[(8)] = inst_77286);

return statearr_77318;
})();
var statearr_77319_77341 = state_77306__$1;
(statearr_77319_77341[(2)] = inst_77287);

(statearr_77319_77341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (14))){
var inst_77300 = (state_77306[(2)]);
var state_77306__$1 = state_77306;
var statearr_77320_77342 = state_77306__$1;
(statearr_77320_77342[(2)] = inst_77300);

(statearr_77320_77342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (10))){
var state_77306__$1 = state_77306;
var statearr_77321_77343 = state_77306__$1;
(statearr_77321_77343[(2)] = fc);

(statearr_77321_77343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (8))){
var inst_77295 = (state_77306[(2)]);
var state_77306__$1 = state_77306;
if(cljs.core.truth_(inst_77295)){
var statearr_77322_77344 = state_77306__$1;
(statearr_77322_77344[(1)] = (12));

} else {
var statearr_77323_77345 = state_77306__$1;
(statearr_77323_77345[(1)] = (13));

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
});})(c__7050__auto___77331,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___77331,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77327 = [null,null,null,null,null,null,null,null,null];
(statearr_77327[(0)] = state_machine__6995__auto__);

(statearr_77327[(1)] = (1));

return statearr_77327;
});
var state_machine__6995__auto____1 = (function (state_77306){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77328){if((e77328 instanceof Object)){
var ex__6998__auto__ = e77328;
var statearr_77329_77346 = state_77306;
(statearr_77329_77346[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77347 = state_77306;
state_77306 = G__77347;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77306){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___77331,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_77330 = f__7051__auto__.call(null);
(statearr_77330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77331);

return statearr_77330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___77331,tc,fc))
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
return (function (state_77394){
var state_val_77395 = (state_77394[(1)]);
if((state_val_77395 === (7))){
var inst_77390 = (state_77394[(2)]);
var state_77394__$1 = state_77394;
var statearr_77396_77412 = state_77394__$1;
(statearr_77396_77412[(2)] = inst_77390);

(statearr_77396_77412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77395 === (6))){
var inst_77380 = (state_77394[(7)]);
var inst_77383 = (state_77394[(8)]);
var inst_77387 = f.call(null,inst_77380,inst_77383);
var inst_77380__$1 = inst_77387;
var state_77394__$1 = (function (){var statearr_77397 = state_77394;
(statearr_77397[(7)] = inst_77380__$1);

return statearr_77397;
})();
var statearr_77398_77413 = state_77394__$1;
(statearr_77398_77413[(2)] = null);

(statearr_77398_77413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77395 === (5))){
var inst_77380 = (state_77394[(7)]);
var state_77394__$1 = state_77394;
var statearr_77399_77414 = state_77394__$1;
(statearr_77399_77414[(2)] = inst_77380);

(statearr_77399_77414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77395 === (4))){
var inst_77383 = (state_77394[(8)]);
var inst_77383__$1 = (state_77394[(2)]);
var inst_77384 = (inst_77383__$1 == null);
var state_77394__$1 = (function (){var statearr_77400 = state_77394;
(statearr_77400[(8)] = inst_77383__$1);

return statearr_77400;
})();
if(cljs.core.truth_(inst_77384)){
var statearr_77401_77415 = state_77394__$1;
(statearr_77401_77415[(1)] = (5));

} else {
var statearr_77402_77416 = state_77394__$1;
(statearr_77402_77416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77395 === (3))){
var inst_77392 = (state_77394[(2)]);
var state_77394__$1 = state_77394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77394__$1,inst_77392);
} else {
if((state_val_77395 === (2))){
var state_77394__$1 = state_77394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77394__$1,(4),ch);
} else {
if((state_val_77395 === (1))){
var inst_77380 = init;
var state_77394__$1 = (function (){var statearr_77403 = state_77394;
(statearr_77403[(7)] = inst_77380);

return statearr_77403;
})();
var statearr_77404_77417 = state_77394__$1;
(statearr_77404_77417[(2)] = null);

(statearr_77404_77417[(1)] = (2));


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
var statearr_77408 = [null,null,null,null,null,null,null,null,null];
(statearr_77408[(0)] = state_machine__6995__auto__);

(statearr_77408[(1)] = (1));

return statearr_77408;
});
var state_machine__6995__auto____1 = (function (state_77394){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77409){if((e77409 instanceof Object)){
var ex__6998__auto__ = e77409;
var statearr_77410_77418 = state_77394;
(statearr_77410_77418[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77419 = state_77394;
state_77394 = G__77419;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77394){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_77411 = f__7051__auto__.call(null);
(statearr_77411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_77411;
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
return (function (state_77493){
var state_val_77494 = (state_77493[(1)]);
if((state_val_77494 === (7))){
var inst_77475 = (state_77493[(2)]);
var state_77493__$1 = state_77493;
var statearr_77495_77518 = state_77493__$1;
(statearr_77495_77518[(2)] = inst_77475);

(statearr_77495_77518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (1))){
var inst_77469 = cljs.core.seq.call(null,coll);
var inst_77470 = inst_77469;
var state_77493__$1 = (function (){var statearr_77496 = state_77493;
(statearr_77496[(7)] = inst_77470);

return statearr_77496;
})();
var statearr_77497_77519 = state_77493__$1;
(statearr_77497_77519[(2)] = null);

(statearr_77497_77519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (4))){
var inst_77470 = (state_77493[(7)]);
var inst_77473 = cljs.core.first.call(null,inst_77470);
var state_77493__$1 = state_77493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77493__$1,(7),ch,inst_77473);
} else {
if((state_val_77494 === (13))){
var inst_77487 = (state_77493[(2)]);
var state_77493__$1 = state_77493;
var statearr_77498_77520 = state_77493__$1;
(statearr_77498_77520[(2)] = inst_77487);

(statearr_77498_77520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (6))){
var inst_77478 = (state_77493[(2)]);
var state_77493__$1 = state_77493;
if(cljs.core.truth_(inst_77478)){
var statearr_77499_77521 = state_77493__$1;
(statearr_77499_77521[(1)] = (8));

} else {
var statearr_77500_77522 = state_77493__$1;
(statearr_77500_77522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (3))){
var inst_77491 = (state_77493[(2)]);
var state_77493__$1 = state_77493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77493__$1,inst_77491);
} else {
if((state_val_77494 === (12))){
var state_77493__$1 = state_77493;
var statearr_77501_77523 = state_77493__$1;
(statearr_77501_77523[(2)] = null);

(statearr_77501_77523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (2))){
var inst_77470 = (state_77493[(7)]);
var state_77493__$1 = state_77493;
if(cljs.core.truth_(inst_77470)){
var statearr_77502_77524 = state_77493__$1;
(statearr_77502_77524[(1)] = (4));

} else {
var statearr_77503_77525 = state_77493__$1;
(statearr_77503_77525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (11))){
var inst_77484 = cljs.core.async.close_BANG_.call(null,ch);
var state_77493__$1 = state_77493;
var statearr_77504_77526 = state_77493__$1;
(statearr_77504_77526[(2)] = inst_77484);

(statearr_77504_77526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (9))){
var state_77493__$1 = state_77493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_77505_77527 = state_77493__$1;
(statearr_77505_77527[(1)] = (11));

} else {
var statearr_77506_77528 = state_77493__$1;
(statearr_77506_77528[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (5))){
var inst_77470 = (state_77493[(7)]);
var state_77493__$1 = state_77493;
var statearr_77507_77529 = state_77493__$1;
(statearr_77507_77529[(2)] = inst_77470);

(statearr_77507_77529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (10))){
var inst_77489 = (state_77493[(2)]);
var state_77493__$1 = state_77493;
var statearr_77508_77530 = state_77493__$1;
(statearr_77508_77530[(2)] = inst_77489);

(statearr_77508_77530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77494 === (8))){
var inst_77470 = (state_77493[(7)]);
var inst_77480 = cljs.core.next.call(null,inst_77470);
var inst_77470__$1 = inst_77480;
var state_77493__$1 = (function (){var statearr_77509 = state_77493;
(statearr_77509[(7)] = inst_77470__$1);

return statearr_77509;
})();
var statearr_77510_77531 = state_77493__$1;
(statearr_77510_77531[(2)] = null);

(statearr_77510_77531[(1)] = (2));


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
var statearr_77514 = [null,null,null,null,null,null,null,null];
(statearr_77514[(0)] = state_machine__6995__auto__);

(statearr_77514[(1)] = (1));

return statearr_77514;
});
var state_machine__6995__auto____1 = (function (state_77493){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77515){if((e77515 instanceof Object)){
var ex__6998__auto__ = e77515;
var statearr_77516_77532 = state_77493;
(statearr_77516_77532[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77533 = state_77493;
state_77493 = G__77533;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77493){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_77517 = f__7051__auto__.call(null);
(statearr_77517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_77517;
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

cljs.core.async.Mux = (function (){var obj77535 = {};
return obj77535;
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


cljs.core.async.Mult = (function (){var obj77537 = {};
return obj77537;
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
if(typeof cljs.core.async.t77759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t77759 = (function (cs,ch,mult,meta77760){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta77760 = meta77760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t77759.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t77759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t77759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t77759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t77759.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t77759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t77759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_77761){
var self__ = this;
var _77761__$1 = this;
return self__.meta77760;
});})(cs))
;

cljs.core.async.t77759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_77761,meta77760__$1){
var self__ = this;
var _77761__$1 = this;
return (new cljs.core.async.t77759(self__.cs,self__.ch,self__.mult,meta77760__$1));
});})(cs))
;

cljs.core.async.t77759.cljs$lang$type = true;

cljs.core.async.t77759.cljs$lang$ctorStr = "cljs.core.async/t77759";

cljs.core.async.t77759.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t77759");
});})(cs))
;

cljs.core.async.__GT_t77759 = ((function (cs){
return (function __GT_t77759(cs__$1,ch__$1,mult__$1,meta77760){
return (new cljs.core.async.t77759(cs__$1,ch__$1,mult__$1,meta77760));
});})(cs))
;

}

return (new cljs.core.async.t77759(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___77980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___77980,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___77980,cs,m,dchan,dctr,done){
return (function (state_77892){
var state_val_77893 = (state_77892[(1)]);
if((state_val_77893 === (7))){
var inst_77888 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77894_77981 = state_77892__$1;
(statearr_77894_77981[(2)] = inst_77888);

(statearr_77894_77981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (20))){
var inst_77793 = (state_77892[(7)]);
var inst_77803 = cljs.core.first.call(null,inst_77793);
var inst_77804 = cljs.core.nth.call(null,inst_77803,(0),null);
var inst_77805 = cljs.core.nth.call(null,inst_77803,(1),null);
var state_77892__$1 = (function (){var statearr_77895 = state_77892;
(statearr_77895[(8)] = inst_77804);

return statearr_77895;
})();
if(cljs.core.truth_(inst_77805)){
var statearr_77896_77982 = state_77892__$1;
(statearr_77896_77982[(1)] = (22));

} else {
var statearr_77897_77983 = state_77892__$1;
(statearr_77897_77983[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (27))){
var inst_77835 = (state_77892[(9)]);
var inst_77840 = (state_77892[(10)]);
var inst_77833 = (state_77892[(11)]);
var inst_77764 = (state_77892[(12)]);
var inst_77840__$1 = cljs.core._nth.call(null,inst_77833,inst_77835);
var inst_77841 = cljs.core.async.put_BANG_.call(null,inst_77840__$1,inst_77764,done);
var state_77892__$1 = (function (){var statearr_77898 = state_77892;
(statearr_77898[(10)] = inst_77840__$1);

return statearr_77898;
})();
if(cljs.core.truth_(inst_77841)){
var statearr_77899_77984 = state_77892__$1;
(statearr_77899_77984[(1)] = (30));

} else {
var statearr_77900_77985 = state_77892__$1;
(statearr_77900_77985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (1))){
var state_77892__$1 = state_77892;
var statearr_77901_77986 = state_77892__$1;
(statearr_77901_77986[(2)] = null);

(statearr_77901_77986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (24))){
var inst_77793 = (state_77892[(7)]);
var inst_77810 = (state_77892[(2)]);
var inst_77811 = cljs.core.next.call(null,inst_77793);
var inst_77773 = inst_77811;
var inst_77774 = null;
var inst_77775 = (0);
var inst_77776 = (0);
var state_77892__$1 = (function (){var statearr_77902 = state_77892;
(statearr_77902[(13)] = inst_77774);

(statearr_77902[(14)] = inst_77775);

(statearr_77902[(15)] = inst_77810);

(statearr_77902[(16)] = inst_77773);

(statearr_77902[(17)] = inst_77776);

return statearr_77902;
})();
var statearr_77903_77987 = state_77892__$1;
(statearr_77903_77987[(2)] = null);

(statearr_77903_77987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (39))){
var state_77892__$1 = state_77892;
var statearr_77907_77988 = state_77892__$1;
(statearr_77907_77988[(2)] = null);

(statearr_77907_77988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (4))){
var inst_77764 = (state_77892[(12)]);
var inst_77764__$1 = (state_77892[(2)]);
var inst_77765 = (inst_77764__$1 == null);
var state_77892__$1 = (function (){var statearr_77908 = state_77892;
(statearr_77908[(12)] = inst_77764__$1);

return statearr_77908;
})();
if(cljs.core.truth_(inst_77765)){
var statearr_77909_77989 = state_77892__$1;
(statearr_77909_77989[(1)] = (5));

} else {
var statearr_77910_77990 = state_77892__$1;
(statearr_77910_77990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (15))){
var inst_77774 = (state_77892[(13)]);
var inst_77775 = (state_77892[(14)]);
var inst_77773 = (state_77892[(16)]);
var inst_77776 = (state_77892[(17)]);
var inst_77789 = (state_77892[(2)]);
var inst_77790 = (inst_77776 + (1));
var tmp77904 = inst_77774;
var tmp77905 = inst_77775;
var tmp77906 = inst_77773;
var inst_77773__$1 = tmp77906;
var inst_77774__$1 = tmp77904;
var inst_77775__$1 = tmp77905;
var inst_77776__$1 = inst_77790;
var state_77892__$1 = (function (){var statearr_77911 = state_77892;
(statearr_77911[(18)] = inst_77789);

(statearr_77911[(13)] = inst_77774__$1);

(statearr_77911[(14)] = inst_77775__$1);

(statearr_77911[(16)] = inst_77773__$1);

(statearr_77911[(17)] = inst_77776__$1);

return statearr_77911;
})();
var statearr_77912_77991 = state_77892__$1;
(statearr_77912_77991[(2)] = null);

(statearr_77912_77991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (21))){
var inst_77814 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77916_77992 = state_77892__$1;
(statearr_77916_77992[(2)] = inst_77814);

(statearr_77916_77992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (31))){
var inst_77840 = (state_77892[(10)]);
var inst_77844 = done.call(null,null);
var inst_77845 = cljs.core.async.untap_STAR_.call(null,m,inst_77840);
var state_77892__$1 = (function (){var statearr_77917 = state_77892;
(statearr_77917[(19)] = inst_77844);

return statearr_77917;
})();
var statearr_77918_77993 = state_77892__$1;
(statearr_77918_77993[(2)] = inst_77845);

(statearr_77918_77993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (32))){
var inst_77835 = (state_77892[(9)]);
var inst_77832 = (state_77892[(20)]);
var inst_77834 = (state_77892[(21)]);
var inst_77833 = (state_77892[(11)]);
var inst_77847 = (state_77892[(2)]);
var inst_77848 = (inst_77835 + (1));
var tmp77913 = inst_77832;
var tmp77914 = inst_77834;
var tmp77915 = inst_77833;
var inst_77832__$1 = tmp77913;
var inst_77833__$1 = tmp77915;
var inst_77834__$1 = tmp77914;
var inst_77835__$1 = inst_77848;
var state_77892__$1 = (function (){var statearr_77919 = state_77892;
(statearr_77919[(9)] = inst_77835__$1);

(statearr_77919[(22)] = inst_77847);

(statearr_77919[(20)] = inst_77832__$1);

(statearr_77919[(21)] = inst_77834__$1);

(statearr_77919[(11)] = inst_77833__$1);

return statearr_77919;
})();
var statearr_77920_77994 = state_77892__$1;
(statearr_77920_77994[(2)] = null);

(statearr_77920_77994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (40))){
var inst_77860 = (state_77892[(23)]);
var inst_77864 = done.call(null,null);
var inst_77865 = cljs.core.async.untap_STAR_.call(null,m,inst_77860);
var state_77892__$1 = (function (){var statearr_77921 = state_77892;
(statearr_77921[(24)] = inst_77864);

return statearr_77921;
})();
var statearr_77922_77995 = state_77892__$1;
(statearr_77922_77995[(2)] = inst_77865);

(statearr_77922_77995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (33))){
var inst_77851 = (state_77892[(25)]);
var inst_77853 = cljs.core.chunked_seq_QMARK_.call(null,inst_77851);
var state_77892__$1 = state_77892;
if(inst_77853){
var statearr_77923_77996 = state_77892__$1;
(statearr_77923_77996[(1)] = (36));

} else {
var statearr_77924_77997 = state_77892__$1;
(statearr_77924_77997[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (13))){
var inst_77783 = (state_77892[(26)]);
var inst_77786 = cljs.core.async.close_BANG_.call(null,inst_77783);
var state_77892__$1 = state_77892;
var statearr_77925_77998 = state_77892__$1;
(statearr_77925_77998[(2)] = inst_77786);

(statearr_77925_77998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (22))){
var inst_77804 = (state_77892[(8)]);
var inst_77807 = cljs.core.async.close_BANG_.call(null,inst_77804);
var state_77892__$1 = state_77892;
var statearr_77926_77999 = state_77892__$1;
(statearr_77926_77999[(2)] = inst_77807);

(statearr_77926_77999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (36))){
var inst_77851 = (state_77892[(25)]);
var inst_77855 = cljs.core.chunk_first.call(null,inst_77851);
var inst_77856 = cljs.core.chunk_rest.call(null,inst_77851);
var inst_77857 = cljs.core.count.call(null,inst_77855);
var inst_77832 = inst_77856;
var inst_77833 = inst_77855;
var inst_77834 = inst_77857;
var inst_77835 = (0);
var state_77892__$1 = (function (){var statearr_77927 = state_77892;
(statearr_77927[(9)] = inst_77835);

(statearr_77927[(20)] = inst_77832);

(statearr_77927[(21)] = inst_77834);

(statearr_77927[(11)] = inst_77833);

return statearr_77927;
})();
var statearr_77928_78000 = state_77892__$1;
(statearr_77928_78000[(2)] = null);

(statearr_77928_78000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (41))){
var inst_77851 = (state_77892[(25)]);
var inst_77867 = (state_77892[(2)]);
var inst_77868 = cljs.core.next.call(null,inst_77851);
var inst_77832 = inst_77868;
var inst_77833 = null;
var inst_77834 = (0);
var inst_77835 = (0);
var state_77892__$1 = (function (){var statearr_77929 = state_77892;
(statearr_77929[(27)] = inst_77867);

(statearr_77929[(9)] = inst_77835);

(statearr_77929[(20)] = inst_77832);

(statearr_77929[(21)] = inst_77834);

(statearr_77929[(11)] = inst_77833);

return statearr_77929;
})();
var statearr_77930_78001 = state_77892__$1;
(statearr_77930_78001[(2)] = null);

(statearr_77930_78001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (43))){
var state_77892__$1 = state_77892;
var statearr_77931_78002 = state_77892__$1;
(statearr_77931_78002[(2)] = null);

(statearr_77931_78002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (29))){
var inst_77876 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77932_78003 = state_77892__$1;
(statearr_77932_78003[(2)] = inst_77876);

(statearr_77932_78003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (44))){
var inst_77885 = (state_77892[(2)]);
var state_77892__$1 = (function (){var statearr_77933 = state_77892;
(statearr_77933[(28)] = inst_77885);

return statearr_77933;
})();
var statearr_77934_78004 = state_77892__$1;
(statearr_77934_78004[(2)] = null);

(statearr_77934_78004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (6))){
var inst_77824 = (state_77892[(29)]);
var inst_77823 = cljs.core.deref.call(null,cs);
var inst_77824__$1 = cljs.core.keys.call(null,inst_77823);
var inst_77825 = cljs.core.count.call(null,inst_77824__$1);
var inst_77826 = cljs.core.reset_BANG_.call(null,dctr,inst_77825);
var inst_77831 = cljs.core.seq.call(null,inst_77824__$1);
var inst_77832 = inst_77831;
var inst_77833 = null;
var inst_77834 = (0);
var inst_77835 = (0);
var state_77892__$1 = (function (){var statearr_77935 = state_77892;
(statearr_77935[(9)] = inst_77835);

(statearr_77935[(30)] = inst_77826);

(statearr_77935[(20)] = inst_77832);

(statearr_77935[(21)] = inst_77834);

(statearr_77935[(11)] = inst_77833);

(statearr_77935[(29)] = inst_77824__$1);

return statearr_77935;
})();
var statearr_77936_78005 = state_77892__$1;
(statearr_77936_78005[(2)] = null);

(statearr_77936_78005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (28))){
var inst_77832 = (state_77892[(20)]);
var inst_77851 = (state_77892[(25)]);
var inst_77851__$1 = cljs.core.seq.call(null,inst_77832);
var state_77892__$1 = (function (){var statearr_77937 = state_77892;
(statearr_77937[(25)] = inst_77851__$1);

return statearr_77937;
})();
if(inst_77851__$1){
var statearr_77938_78006 = state_77892__$1;
(statearr_77938_78006[(1)] = (33));

} else {
var statearr_77939_78007 = state_77892__$1;
(statearr_77939_78007[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (25))){
var inst_77835 = (state_77892[(9)]);
var inst_77834 = (state_77892[(21)]);
var inst_77837 = (inst_77835 < inst_77834);
var inst_77838 = inst_77837;
var state_77892__$1 = state_77892;
if(cljs.core.truth_(inst_77838)){
var statearr_77940_78008 = state_77892__$1;
(statearr_77940_78008[(1)] = (27));

} else {
var statearr_77941_78009 = state_77892__$1;
(statearr_77941_78009[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (34))){
var state_77892__$1 = state_77892;
var statearr_77942_78010 = state_77892__$1;
(statearr_77942_78010[(2)] = null);

(statearr_77942_78010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (17))){
var state_77892__$1 = state_77892;
var statearr_77943_78011 = state_77892__$1;
(statearr_77943_78011[(2)] = null);

(statearr_77943_78011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (3))){
var inst_77890 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77892__$1,inst_77890);
} else {
if((state_val_77893 === (12))){
var inst_77819 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77944_78012 = state_77892__$1;
(statearr_77944_78012[(2)] = inst_77819);

(statearr_77944_78012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (2))){
var state_77892__$1 = state_77892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77892__$1,(4),ch);
} else {
if((state_val_77893 === (23))){
var state_77892__$1 = state_77892;
var statearr_77945_78013 = state_77892__$1;
(statearr_77945_78013[(2)] = null);

(statearr_77945_78013[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (35))){
var inst_77874 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77946_78014 = state_77892__$1;
(statearr_77946_78014[(2)] = inst_77874);

(statearr_77946_78014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (19))){
var inst_77793 = (state_77892[(7)]);
var inst_77797 = cljs.core.chunk_first.call(null,inst_77793);
var inst_77798 = cljs.core.chunk_rest.call(null,inst_77793);
var inst_77799 = cljs.core.count.call(null,inst_77797);
var inst_77773 = inst_77798;
var inst_77774 = inst_77797;
var inst_77775 = inst_77799;
var inst_77776 = (0);
var state_77892__$1 = (function (){var statearr_77947 = state_77892;
(statearr_77947[(13)] = inst_77774);

(statearr_77947[(14)] = inst_77775);

(statearr_77947[(16)] = inst_77773);

(statearr_77947[(17)] = inst_77776);

return statearr_77947;
})();
var statearr_77948_78015 = state_77892__$1;
(statearr_77948_78015[(2)] = null);

(statearr_77948_78015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (11))){
var inst_77793 = (state_77892[(7)]);
var inst_77773 = (state_77892[(16)]);
var inst_77793__$1 = cljs.core.seq.call(null,inst_77773);
var state_77892__$1 = (function (){var statearr_77949 = state_77892;
(statearr_77949[(7)] = inst_77793__$1);

return statearr_77949;
})();
if(inst_77793__$1){
var statearr_77950_78016 = state_77892__$1;
(statearr_77950_78016[(1)] = (16));

} else {
var statearr_77951_78017 = state_77892__$1;
(statearr_77951_78017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (9))){
var inst_77821 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77952_78018 = state_77892__$1;
(statearr_77952_78018[(2)] = inst_77821);

(statearr_77952_78018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (5))){
var inst_77771 = cljs.core.deref.call(null,cs);
var inst_77772 = cljs.core.seq.call(null,inst_77771);
var inst_77773 = inst_77772;
var inst_77774 = null;
var inst_77775 = (0);
var inst_77776 = (0);
var state_77892__$1 = (function (){var statearr_77953 = state_77892;
(statearr_77953[(13)] = inst_77774);

(statearr_77953[(14)] = inst_77775);

(statearr_77953[(16)] = inst_77773);

(statearr_77953[(17)] = inst_77776);

return statearr_77953;
})();
var statearr_77954_78019 = state_77892__$1;
(statearr_77954_78019[(2)] = null);

(statearr_77954_78019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (14))){
var state_77892__$1 = state_77892;
var statearr_77955_78020 = state_77892__$1;
(statearr_77955_78020[(2)] = null);

(statearr_77955_78020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (45))){
var inst_77882 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77956_78021 = state_77892__$1;
(statearr_77956_78021[(2)] = inst_77882);

(statearr_77956_78021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (26))){
var inst_77824 = (state_77892[(29)]);
var inst_77878 = (state_77892[(2)]);
var inst_77879 = cljs.core.seq.call(null,inst_77824);
var state_77892__$1 = (function (){var statearr_77957 = state_77892;
(statearr_77957[(31)] = inst_77878);

return statearr_77957;
})();
if(inst_77879){
var statearr_77958_78022 = state_77892__$1;
(statearr_77958_78022[(1)] = (42));

} else {
var statearr_77959_78023 = state_77892__$1;
(statearr_77959_78023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (16))){
var inst_77793 = (state_77892[(7)]);
var inst_77795 = cljs.core.chunked_seq_QMARK_.call(null,inst_77793);
var state_77892__$1 = state_77892;
if(inst_77795){
var statearr_77960_78024 = state_77892__$1;
(statearr_77960_78024[(1)] = (19));

} else {
var statearr_77961_78025 = state_77892__$1;
(statearr_77961_78025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (38))){
var inst_77871 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77962_78026 = state_77892__$1;
(statearr_77962_78026[(2)] = inst_77871);

(statearr_77962_78026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (30))){
var state_77892__$1 = state_77892;
var statearr_77963_78027 = state_77892__$1;
(statearr_77963_78027[(2)] = null);

(statearr_77963_78027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (10))){
var inst_77774 = (state_77892[(13)]);
var inst_77776 = (state_77892[(17)]);
var inst_77782 = cljs.core._nth.call(null,inst_77774,inst_77776);
var inst_77783 = cljs.core.nth.call(null,inst_77782,(0),null);
var inst_77784 = cljs.core.nth.call(null,inst_77782,(1),null);
var state_77892__$1 = (function (){var statearr_77964 = state_77892;
(statearr_77964[(26)] = inst_77783);

return statearr_77964;
})();
if(cljs.core.truth_(inst_77784)){
var statearr_77965_78028 = state_77892__$1;
(statearr_77965_78028[(1)] = (13));

} else {
var statearr_77966_78029 = state_77892__$1;
(statearr_77966_78029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (18))){
var inst_77817 = (state_77892[(2)]);
var state_77892__$1 = state_77892;
var statearr_77967_78030 = state_77892__$1;
(statearr_77967_78030[(2)] = inst_77817);

(statearr_77967_78030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (42))){
var state_77892__$1 = state_77892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77892__$1,(45),dchan);
} else {
if((state_val_77893 === (37))){
var inst_77860 = (state_77892[(23)]);
var inst_77851 = (state_77892[(25)]);
var inst_77764 = (state_77892[(12)]);
var inst_77860__$1 = cljs.core.first.call(null,inst_77851);
var inst_77861 = cljs.core.async.put_BANG_.call(null,inst_77860__$1,inst_77764,done);
var state_77892__$1 = (function (){var statearr_77968 = state_77892;
(statearr_77968[(23)] = inst_77860__$1);

return statearr_77968;
})();
if(cljs.core.truth_(inst_77861)){
var statearr_77969_78031 = state_77892__$1;
(statearr_77969_78031[(1)] = (39));

} else {
var statearr_77970_78032 = state_77892__$1;
(statearr_77970_78032[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77893 === (8))){
var inst_77775 = (state_77892[(14)]);
var inst_77776 = (state_77892[(17)]);
var inst_77778 = (inst_77776 < inst_77775);
var inst_77779 = inst_77778;
var state_77892__$1 = state_77892;
if(cljs.core.truth_(inst_77779)){
var statearr_77971_78033 = state_77892__$1;
(statearr_77971_78033[(1)] = (10));

} else {
var statearr_77972_78034 = state_77892__$1;
(statearr_77972_78034[(1)] = (11));

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
});})(c__7050__auto___77980,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___77980,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_77976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77976[(0)] = state_machine__6995__auto__);

(statearr_77976[(1)] = (1));

return statearr_77976;
});
var state_machine__6995__auto____1 = (function (state_77892){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_77892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e77977){if((e77977 instanceof Object)){
var ex__6998__auto__ = e77977;
var statearr_77978_78035 = state_77892;
(statearr_77978_78035[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78036 = state_77892;
state_77892 = G__78036;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_77892){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_77892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___77980,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_77979 = f__7051__auto__.call(null);
(statearr_77979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___77980);

return statearr_77979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___77980,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj78038 = {};
return obj78038;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__78039){
var map__78044 = p__78039;
var map__78044__$1 = ((cljs.core.seq_QMARK_.call(null,map__78044))?cljs.core.apply.call(null,cljs.core.hash_map,map__78044):map__78044);
var opts = map__78044__$1;
var statearr_78045_78048 = state;
(statearr_78045_78048[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__78044,map__78044__$1,opts){
return (function (val){
var statearr_78046_78049 = state;
(statearr_78046_78049[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__78044,map__78044__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_78047_78050 = state;
(statearr_78047_78050[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__78039 = null;
if (arguments.length > 3) {
  p__78039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__78039);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__78051){
var state = cljs.core.first(arglist__78051);
arglist__78051 = cljs.core.next(arglist__78051);
var cont_block = cljs.core.first(arglist__78051);
arglist__78051 = cljs.core.next(arglist__78051);
var ports = cljs.core.first(arglist__78051);
var p__78039 = cljs.core.rest(arglist__78051);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__78039);
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
if(typeof cljs.core.async.t78171 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t78171 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta78172){
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
this.meta78172 = meta78172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78171.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t78171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t78171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t78171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_78173){
var self__ = this;
var _78173__$1 = this;
return self__.meta78172;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_78173,meta78172__$1){
var self__ = this;
var _78173__$1 = this;
return (new cljs.core.async.t78171(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta78172__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t78171.cljs$lang$type = true;

cljs.core.async.t78171.cljs$lang$ctorStr = "cljs.core.async/t78171";

cljs.core.async.t78171.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t78171");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t78171 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t78171(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78172){
return (new cljs.core.async.t78171(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta78172));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t78171(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___78290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_78243){
var state_val_78244 = (state_78243[(1)]);
if((state_val_78244 === (7))){
var inst_78187 = (state_78243[(7)]);
var inst_78192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_78187);
var state_78243__$1 = state_78243;
var statearr_78245_78291 = state_78243__$1;
(statearr_78245_78291[(2)] = inst_78192);

(statearr_78245_78291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (20))){
var inst_78202 = (state_78243[(8)]);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78243__$1,(23),out,inst_78202);
} else {
if((state_val_78244 === (1))){
var inst_78177 = (state_78243[(9)]);
var inst_78177__$1 = calc_state.call(null);
var inst_78178 = cljs.core.seq_QMARK_.call(null,inst_78177__$1);
var state_78243__$1 = (function (){var statearr_78246 = state_78243;
(statearr_78246[(9)] = inst_78177__$1);

return statearr_78246;
})();
if(inst_78178){
var statearr_78247_78292 = state_78243__$1;
(statearr_78247_78292[(1)] = (2));

} else {
var statearr_78248_78293 = state_78243__$1;
(statearr_78248_78293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (24))){
var inst_78195 = (state_78243[(10)]);
var inst_78187 = inst_78195;
var state_78243__$1 = (function (){var statearr_78249 = state_78243;
(statearr_78249[(7)] = inst_78187);

return statearr_78249;
})();
var statearr_78250_78294 = state_78243__$1;
(statearr_78250_78294[(2)] = null);

(statearr_78250_78294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (4))){
var inst_78177 = (state_78243[(9)]);
var inst_78183 = (state_78243[(2)]);
var inst_78184 = cljs.core.get.call(null,inst_78183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_78185 = cljs.core.get.call(null,inst_78183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78186 = cljs.core.get.call(null,inst_78183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_78187 = inst_78177;
var state_78243__$1 = (function (){var statearr_78251 = state_78243;
(statearr_78251[(7)] = inst_78187);

(statearr_78251[(11)] = inst_78186);

(statearr_78251[(12)] = inst_78185);

(statearr_78251[(13)] = inst_78184);

return statearr_78251;
})();
var statearr_78252_78295 = state_78243__$1;
(statearr_78252_78295[(2)] = null);

(statearr_78252_78295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (15))){
var state_78243__$1 = state_78243;
var statearr_78253_78296 = state_78243__$1;
(statearr_78253_78296[(2)] = null);

(statearr_78253_78296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (21))){
var inst_78195 = (state_78243[(10)]);
var inst_78187 = inst_78195;
var state_78243__$1 = (function (){var statearr_78254 = state_78243;
(statearr_78254[(7)] = inst_78187);

return statearr_78254;
})();
var statearr_78255_78297 = state_78243__$1;
(statearr_78255_78297[(2)] = null);

(statearr_78255_78297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (13))){
var inst_78239 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78256_78298 = state_78243__$1;
(statearr_78256_78298[(2)] = inst_78239);

(statearr_78256_78298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (22))){
var inst_78237 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78257_78299 = state_78243__$1;
(statearr_78257_78299[(2)] = inst_78237);

(statearr_78257_78299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (6))){
var inst_78241 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78243__$1,inst_78241);
} else {
if((state_val_78244 === (25))){
var state_78243__$1 = state_78243;
var statearr_78258_78300 = state_78243__$1;
(statearr_78258_78300[(2)] = null);

(statearr_78258_78300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (17))){
var inst_78217 = (state_78243[(14)]);
var state_78243__$1 = state_78243;
var statearr_78259_78301 = state_78243__$1;
(statearr_78259_78301[(2)] = inst_78217);

(statearr_78259_78301[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (3))){
var inst_78177 = (state_78243[(9)]);
var state_78243__$1 = state_78243;
var statearr_78260_78302 = state_78243__$1;
(statearr_78260_78302[(2)] = inst_78177);

(statearr_78260_78302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (12))){
var inst_78217 = (state_78243[(14)]);
var inst_78203 = (state_78243[(15)]);
var inst_78198 = (state_78243[(16)]);
var inst_78217__$1 = inst_78198.call(null,inst_78203);
var state_78243__$1 = (function (){var statearr_78261 = state_78243;
(statearr_78261[(14)] = inst_78217__$1);

return statearr_78261;
})();
if(cljs.core.truth_(inst_78217__$1)){
var statearr_78262_78303 = state_78243__$1;
(statearr_78262_78303[(1)] = (17));

} else {
var statearr_78263_78304 = state_78243__$1;
(statearr_78263_78304[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (2))){
var inst_78177 = (state_78243[(9)]);
var inst_78180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_78177);
var state_78243__$1 = state_78243;
var statearr_78264_78305 = state_78243__$1;
(statearr_78264_78305[(2)] = inst_78180);

(statearr_78264_78305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (23))){
var inst_78228 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78228)){
var statearr_78265_78306 = state_78243__$1;
(statearr_78265_78306[(1)] = (24));

} else {
var statearr_78266_78307 = state_78243__$1;
(statearr_78266_78307[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (19))){
var inst_78225 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78225)){
var statearr_78267_78308 = state_78243__$1;
(statearr_78267_78308[(1)] = (20));

} else {
var statearr_78268_78309 = state_78243__$1;
(statearr_78268_78309[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (11))){
var inst_78202 = (state_78243[(8)]);
var inst_78208 = (inst_78202 == null);
var state_78243__$1 = state_78243;
if(cljs.core.truth_(inst_78208)){
var statearr_78269_78310 = state_78243__$1;
(statearr_78269_78310[(1)] = (14));

} else {
var statearr_78270_78311 = state_78243__$1;
(statearr_78270_78311[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (9))){
var inst_78195 = (state_78243[(10)]);
var inst_78195__$1 = (state_78243[(2)]);
var inst_78196 = cljs.core.get.call(null,inst_78195__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_78197 = cljs.core.get.call(null,inst_78195__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_78198 = cljs.core.get.call(null,inst_78195__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_78243__$1 = (function (){var statearr_78271 = state_78243;
(statearr_78271[(17)] = inst_78197);

(statearr_78271[(10)] = inst_78195__$1);

(statearr_78271[(16)] = inst_78198);

return statearr_78271;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_78243__$1,(10),inst_78196);
} else {
if((state_val_78244 === (5))){
var inst_78187 = (state_78243[(7)]);
var inst_78190 = cljs.core.seq_QMARK_.call(null,inst_78187);
var state_78243__$1 = state_78243;
if(inst_78190){
var statearr_78272_78312 = state_78243__$1;
(statearr_78272_78312[(1)] = (7));

} else {
var statearr_78273_78313 = state_78243__$1;
(statearr_78273_78313[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (14))){
var inst_78203 = (state_78243[(15)]);
var inst_78210 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_78203);
var state_78243__$1 = state_78243;
var statearr_78274_78314 = state_78243__$1;
(statearr_78274_78314[(2)] = inst_78210);

(statearr_78274_78314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (26))){
var inst_78233 = (state_78243[(2)]);
var state_78243__$1 = state_78243;
var statearr_78275_78315 = state_78243__$1;
(statearr_78275_78315[(2)] = inst_78233);

(statearr_78275_78315[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (16))){
var inst_78213 = (state_78243[(2)]);
var inst_78214 = calc_state.call(null);
var inst_78187 = inst_78214;
var state_78243__$1 = (function (){var statearr_78276 = state_78243;
(statearr_78276[(7)] = inst_78187);

(statearr_78276[(18)] = inst_78213);

return statearr_78276;
})();
var statearr_78277_78316 = state_78243__$1;
(statearr_78277_78316[(2)] = null);

(statearr_78277_78316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (10))){
var inst_78202 = (state_78243[(8)]);
var inst_78203 = (state_78243[(15)]);
var inst_78201 = (state_78243[(2)]);
var inst_78202__$1 = cljs.core.nth.call(null,inst_78201,(0),null);
var inst_78203__$1 = cljs.core.nth.call(null,inst_78201,(1),null);
var inst_78204 = (inst_78202__$1 == null);
var inst_78205 = cljs.core._EQ_.call(null,inst_78203__$1,change);
var inst_78206 = (inst_78204) || (inst_78205);
var state_78243__$1 = (function (){var statearr_78278 = state_78243;
(statearr_78278[(8)] = inst_78202__$1);

(statearr_78278[(15)] = inst_78203__$1);

return statearr_78278;
})();
if(cljs.core.truth_(inst_78206)){
var statearr_78279_78317 = state_78243__$1;
(statearr_78279_78317[(1)] = (11));

} else {
var statearr_78280_78318 = state_78243__$1;
(statearr_78280_78318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (18))){
var inst_78197 = (state_78243[(17)]);
var inst_78203 = (state_78243[(15)]);
var inst_78198 = (state_78243[(16)]);
var inst_78220 = cljs.core.empty_QMARK_.call(null,inst_78198);
var inst_78221 = inst_78197.call(null,inst_78203);
var inst_78222 = cljs.core.not.call(null,inst_78221);
var inst_78223 = (inst_78220) && (inst_78222);
var state_78243__$1 = state_78243;
var statearr_78281_78319 = state_78243__$1;
(statearr_78281_78319[(2)] = inst_78223);

(statearr_78281_78319[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78244 === (8))){
var inst_78187 = (state_78243[(7)]);
var state_78243__$1 = state_78243;
var statearr_78282_78320 = state_78243__$1;
(statearr_78282_78320[(2)] = inst_78187);

(statearr_78282_78320[(1)] = (9));


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
});})(c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_78286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78286[(0)] = state_machine__6995__auto__);

(statearr_78286[(1)] = (1));

return statearr_78286;
});
var state_machine__6995__auto____1 = (function (state_78243){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_78243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e78287){if((e78287 instanceof Object)){
var ex__6998__auto__ = e78287;
var statearr_78288_78321 = state_78243;
(statearr_78288_78321[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78322 = state_78243;
state_78243 = G__78322;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_78243){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_78243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_78289 = f__7051__auto__.call(null);
(statearr_78289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___78290);

return statearr_78289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___78290,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj78324 = {};
return obj78324;
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
return (function (p1__78325_SHARP_){
if(cljs.core.truth_(p1__78325_SHARP_.call(null,topic))){
return p1__78325_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__78325_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t78448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t78448 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta78449){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta78449 = meta78449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78448.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t78448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t78448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t78448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t78448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t78448.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t78448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t78448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_78450){
var self__ = this;
var _78450__$1 = this;
return self__.meta78449;
});})(mults,ensure_mult))
;

cljs.core.async.t78448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_78450,meta78449__$1){
var self__ = this;
var _78450__$1 = this;
return (new cljs.core.async.t78448(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta78449__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t78448.cljs$lang$type = true;

cljs.core.async.t78448.cljs$lang$ctorStr = "cljs.core.async/t78448";

cljs.core.async.t78448.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t78448");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t78448 = ((function (mults,ensure_mult){
return (function __GT_t78448(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta78449){
return (new cljs.core.async.t78448(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta78449));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t78448(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___78570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___78570,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___78570,mults,ensure_mult,p){
return (function (state_78522){
var state_val_78523 = (state_78522[(1)]);
if((state_val_78523 === (7))){
var inst_78518 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78524_78571 = state_78522__$1;
(statearr_78524_78571[(2)] = inst_78518);

(statearr_78524_78571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (20))){
var state_78522__$1 = state_78522;
var statearr_78525_78572 = state_78522__$1;
(statearr_78525_78572[(2)] = null);

(statearr_78525_78572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (1))){
var state_78522__$1 = state_78522;
var statearr_78526_78573 = state_78522__$1;
(statearr_78526_78573[(2)] = null);

(statearr_78526_78573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (24))){
var inst_78501 = (state_78522[(7)]);
var inst_78510 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_78501);
var state_78522__$1 = state_78522;
var statearr_78527_78574 = state_78522__$1;
(statearr_78527_78574[(2)] = inst_78510);

(statearr_78527_78574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (4))){
var inst_78453 = (state_78522[(8)]);
var inst_78453__$1 = (state_78522[(2)]);
var inst_78454 = (inst_78453__$1 == null);
var state_78522__$1 = (function (){var statearr_78528 = state_78522;
(statearr_78528[(8)] = inst_78453__$1);

return statearr_78528;
})();
if(cljs.core.truth_(inst_78454)){
var statearr_78529_78575 = state_78522__$1;
(statearr_78529_78575[(1)] = (5));

} else {
var statearr_78530_78576 = state_78522__$1;
(statearr_78530_78576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (15))){
var inst_78495 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78531_78577 = state_78522__$1;
(statearr_78531_78577[(2)] = inst_78495);

(statearr_78531_78577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (21))){
var inst_78515 = (state_78522[(2)]);
var state_78522__$1 = (function (){var statearr_78532 = state_78522;
(statearr_78532[(9)] = inst_78515);

return statearr_78532;
})();
var statearr_78533_78578 = state_78522__$1;
(statearr_78533_78578[(2)] = null);

(statearr_78533_78578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (13))){
var inst_78477 = (state_78522[(10)]);
var inst_78479 = cljs.core.chunked_seq_QMARK_.call(null,inst_78477);
var state_78522__$1 = state_78522;
if(inst_78479){
var statearr_78534_78579 = state_78522__$1;
(statearr_78534_78579[(1)] = (16));

} else {
var statearr_78535_78580 = state_78522__$1;
(statearr_78535_78580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (22))){
var inst_78507 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
if(cljs.core.truth_(inst_78507)){
var statearr_78536_78581 = state_78522__$1;
(statearr_78536_78581[(1)] = (23));

} else {
var statearr_78537_78582 = state_78522__$1;
(statearr_78537_78582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (6))){
var inst_78453 = (state_78522[(8)]);
var inst_78503 = (state_78522[(11)]);
var inst_78501 = (state_78522[(7)]);
var inst_78501__$1 = topic_fn.call(null,inst_78453);
var inst_78502 = cljs.core.deref.call(null,mults);
var inst_78503__$1 = cljs.core.get.call(null,inst_78502,inst_78501__$1);
var state_78522__$1 = (function (){var statearr_78538 = state_78522;
(statearr_78538[(11)] = inst_78503__$1);

(statearr_78538[(7)] = inst_78501__$1);

return statearr_78538;
})();
if(cljs.core.truth_(inst_78503__$1)){
var statearr_78539_78583 = state_78522__$1;
(statearr_78539_78583[(1)] = (19));

} else {
var statearr_78540_78584 = state_78522__$1;
(statearr_78540_78584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (25))){
var inst_78512 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78541_78585 = state_78522__$1;
(statearr_78541_78585[(2)] = inst_78512);

(statearr_78541_78585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (17))){
var inst_78477 = (state_78522[(10)]);
var inst_78486 = cljs.core.first.call(null,inst_78477);
var inst_78487 = cljs.core.async.muxch_STAR_.call(null,inst_78486);
var inst_78488 = cljs.core.async.close_BANG_.call(null,inst_78487);
var inst_78489 = cljs.core.next.call(null,inst_78477);
var inst_78463 = inst_78489;
var inst_78464 = null;
var inst_78465 = (0);
var inst_78466 = (0);
var state_78522__$1 = (function (){var statearr_78542 = state_78522;
(statearr_78542[(12)] = inst_78463);

(statearr_78542[(13)] = inst_78465);

(statearr_78542[(14)] = inst_78488);

(statearr_78542[(15)] = inst_78464);

(statearr_78542[(16)] = inst_78466);

return statearr_78542;
})();
var statearr_78543_78586 = state_78522__$1;
(statearr_78543_78586[(2)] = null);

(statearr_78543_78586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (3))){
var inst_78520 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78522__$1,inst_78520);
} else {
if((state_val_78523 === (12))){
var inst_78497 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78544_78587 = state_78522__$1;
(statearr_78544_78587[(2)] = inst_78497);

(statearr_78544_78587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (2))){
var state_78522__$1 = state_78522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78522__$1,(4),ch);
} else {
if((state_val_78523 === (23))){
var state_78522__$1 = state_78522;
var statearr_78545_78588 = state_78522__$1;
(statearr_78545_78588[(2)] = null);

(statearr_78545_78588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (19))){
var inst_78453 = (state_78522[(8)]);
var inst_78503 = (state_78522[(11)]);
var inst_78505 = cljs.core.async.muxch_STAR_.call(null,inst_78503);
var state_78522__$1 = state_78522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78522__$1,(22),inst_78505,inst_78453);
} else {
if((state_val_78523 === (11))){
var inst_78463 = (state_78522[(12)]);
var inst_78477 = (state_78522[(10)]);
var inst_78477__$1 = cljs.core.seq.call(null,inst_78463);
var state_78522__$1 = (function (){var statearr_78546 = state_78522;
(statearr_78546[(10)] = inst_78477__$1);

return statearr_78546;
})();
if(inst_78477__$1){
var statearr_78547_78589 = state_78522__$1;
(statearr_78547_78589[(1)] = (13));

} else {
var statearr_78548_78590 = state_78522__$1;
(statearr_78548_78590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (9))){
var inst_78499 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78549_78591 = state_78522__$1;
(statearr_78549_78591[(2)] = inst_78499);

(statearr_78549_78591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (5))){
var inst_78460 = cljs.core.deref.call(null,mults);
var inst_78461 = cljs.core.vals.call(null,inst_78460);
var inst_78462 = cljs.core.seq.call(null,inst_78461);
var inst_78463 = inst_78462;
var inst_78464 = null;
var inst_78465 = (0);
var inst_78466 = (0);
var state_78522__$1 = (function (){var statearr_78550 = state_78522;
(statearr_78550[(12)] = inst_78463);

(statearr_78550[(13)] = inst_78465);

(statearr_78550[(15)] = inst_78464);

(statearr_78550[(16)] = inst_78466);

return statearr_78550;
})();
var statearr_78551_78592 = state_78522__$1;
(statearr_78551_78592[(2)] = null);

(statearr_78551_78592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (14))){
var state_78522__$1 = state_78522;
var statearr_78555_78593 = state_78522__$1;
(statearr_78555_78593[(2)] = null);

(statearr_78555_78593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (16))){
var inst_78477 = (state_78522[(10)]);
var inst_78481 = cljs.core.chunk_first.call(null,inst_78477);
var inst_78482 = cljs.core.chunk_rest.call(null,inst_78477);
var inst_78483 = cljs.core.count.call(null,inst_78481);
var inst_78463 = inst_78482;
var inst_78464 = inst_78481;
var inst_78465 = inst_78483;
var inst_78466 = (0);
var state_78522__$1 = (function (){var statearr_78556 = state_78522;
(statearr_78556[(12)] = inst_78463);

(statearr_78556[(13)] = inst_78465);

(statearr_78556[(15)] = inst_78464);

(statearr_78556[(16)] = inst_78466);

return statearr_78556;
})();
var statearr_78557_78594 = state_78522__$1;
(statearr_78557_78594[(2)] = null);

(statearr_78557_78594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (10))){
var inst_78463 = (state_78522[(12)]);
var inst_78465 = (state_78522[(13)]);
var inst_78464 = (state_78522[(15)]);
var inst_78466 = (state_78522[(16)]);
var inst_78471 = cljs.core._nth.call(null,inst_78464,inst_78466);
var inst_78472 = cljs.core.async.muxch_STAR_.call(null,inst_78471);
var inst_78473 = cljs.core.async.close_BANG_.call(null,inst_78472);
var inst_78474 = (inst_78466 + (1));
var tmp78552 = inst_78463;
var tmp78553 = inst_78465;
var tmp78554 = inst_78464;
var inst_78463__$1 = tmp78552;
var inst_78464__$1 = tmp78554;
var inst_78465__$1 = tmp78553;
var inst_78466__$1 = inst_78474;
var state_78522__$1 = (function (){var statearr_78558 = state_78522;
(statearr_78558[(12)] = inst_78463__$1);

(statearr_78558[(17)] = inst_78473);

(statearr_78558[(13)] = inst_78465__$1);

(statearr_78558[(15)] = inst_78464__$1);

(statearr_78558[(16)] = inst_78466__$1);

return statearr_78558;
})();
var statearr_78559_78595 = state_78522__$1;
(statearr_78559_78595[(2)] = null);

(statearr_78559_78595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (18))){
var inst_78492 = (state_78522[(2)]);
var state_78522__$1 = state_78522;
var statearr_78560_78596 = state_78522__$1;
(statearr_78560_78596[(2)] = inst_78492);

(statearr_78560_78596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78523 === (8))){
var inst_78465 = (state_78522[(13)]);
var inst_78466 = (state_78522[(16)]);
var inst_78468 = (inst_78466 < inst_78465);
var inst_78469 = inst_78468;
var state_78522__$1 = state_78522;
if(cljs.core.truth_(inst_78469)){
var statearr_78561_78597 = state_78522__$1;
(statearr_78561_78597[(1)] = (10));

} else {
var statearr_78562_78598 = state_78522__$1;
(statearr_78562_78598[(1)] = (11));

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
});})(c__7050__auto___78570,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___78570,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_78566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78566[(0)] = state_machine__6995__auto__);

(statearr_78566[(1)] = (1));

return statearr_78566;
});
var state_machine__6995__auto____1 = (function (state_78522){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_78522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e78567){if((e78567 instanceof Object)){
var ex__6998__auto__ = e78567;
var statearr_78568_78599 = state_78522;
(statearr_78568_78599[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78600 = state_78522;
state_78522 = G__78600;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_78522){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_78522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___78570,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_78569 = f__7051__auto__.call(null);
(statearr_78569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___78570);

return statearr_78569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___78570,mults,ensure_mult,p))
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
var c__7050__auto___78737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_78707){
var state_val_78708 = (state_78707[(1)]);
if((state_val_78708 === (7))){
var state_78707__$1 = state_78707;
var statearr_78709_78738 = state_78707__$1;
(statearr_78709_78738[(2)] = null);

(statearr_78709_78738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (1))){
var state_78707__$1 = state_78707;
var statearr_78710_78739 = state_78707__$1;
(statearr_78710_78739[(2)] = null);

(statearr_78710_78739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (4))){
var inst_78671 = (state_78707[(7)]);
var inst_78673 = (inst_78671 < cnt);
var state_78707__$1 = state_78707;
if(cljs.core.truth_(inst_78673)){
var statearr_78711_78740 = state_78707__$1;
(statearr_78711_78740[(1)] = (6));

} else {
var statearr_78712_78741 = state_78707__$1;
(statearr_78712_78741[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (15))){
var inst_78703 = (state_78707[(2)]);
var state_78707__$1 = state_78707;
var statearr_78713_78742 = state_78707__$1;
(statearr_78713_78742[(2)] = inst_78703);

(statearr_78713_78742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (13))){
var inst_78696 = cljs.core.async.close_BANG_.call(null,out);
var state_78707__$1 = state_78707;
var statearr_78714_78743 = state_78707__$1;
(statearr_78714_78743[(2)] = inst_78696);

(statearr_78714_78743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (6))){
var state_78707__$1 = state_78707;
var statearr_78715_78744 = state_78707__$1;
(statearr_78715_78744[(2)] = null);

(statearr_78715_78744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (3))){
var inst_78705 = (state_78707[(2)]);
var state_78707__$1 = state_78707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78707__$1,inst_78705);
} else {
if((state_val_78708 === (12))){
var inst_78693 = (state_78707[(8)]);
var inst_78693__$1 = (state_78707[(2)]);
var inst_78694 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_78693__$1);
var state_78707__$1 = (function (){var statearr_78716 = state_78707;
(statearr_78716[(8)] = inst_78693__$1);

return statearr_78716;
})();
if(cljs.core.truth_(inst_78694)){
var statearr_78717_78745 = state_78707__$1;
(statearr_78717_78745[(1)] = (13));

} else {
var statearr_78718_78746 = state_78707__$1;
(statearr_78718_78746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (2))){
var inst_78670 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_78671 = (0);
var state_78707__$1 = (function (){var statearr_78719 = state_78707;
(statearr_78719[(9)] = inst_78670);

(statearr_78719[(7)] = inst_78671);

return statearr_78719;
})();
var statearr_78720_78747 = state_78707__$1;
(statearr_78720_78747[(2)] = null);

(statearr_78720_78747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (11))){
var inst_78671 = (state_78707[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_78707,(10),Object,null,(9));
var inst_78680 = chs__$1.call(null,inst_78671);
var inst_78681 = done.call(null,inst_78671);
var inst_78682 = cljs.core.async.take_BANG_.call(null,inst_78680,inst_78681);
var state_78707__$1 = state_78707;
var statearr_78721_78748 = state_78707__$1;
(statearr_78721_78748[(2)] = inst_78682);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (9))){
var inst_78671 = (state_78707[(7)]);
var inst_78684 = (state_78707[(2)]);
var inst_78685 = (inst_78671 + (1));
var inst_78671__$1 = inst_78685;
var state_78707__$1 = (function (){var statearr_78722 = state_78707;
(statearr_78722[(10)] = inst_78684);

(statearr_78722[(7)] = inst_78671__$1);

return statearr_78722;
})();
var statearr_78723_78749 = state_78707__$1;
(statearr_78723_78749[(2)] = null);

(statearr_78723_78749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (5))){
var inst_78691 = (state_78707[(2)]);
var state_78707__$1 = (function (){var statearr_78724 = state_78707;
(statearr_78724[(11)] = inst_78691);

return statearr_78724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78707__$1,(12),dchan);
} else {
if((state_val_78708 === (14))){
var inst_78693 = (state_78707[(8)]);
var inst_78698 = cljs.core.apply.call(null,f,inst_78693);
var state_78707__$1 = state_78707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78707__$1,(16),out,inst_78698);
} else {
if((state_val_78708 === (16))){
var inst_78700 = (state_78707[(2)]);
var state_78707__$1 = (function (){var statearr_78725 = state_78707;
(statearr_78725[(12)] = inst_78700);

return statearr_78725;
})();
var statearr_78726_78750 = state_78707__$1;
(statearr_78726_78750[(2)] = null);

(statearr_78726_78750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (10))){
var inst_78675 = (state_78707[(2)]);
var inst_78676 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_78707__$1 = (function (){var statearr_78727 = state_78707;
(statearr_78727[(13)] = inst_78675);

return statearr_78727;
})();
var statearr_78728_78751 = state_78707__$1;
(statearr_78728_78751[(2)] = inst_78676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78708 === (8))){
var inst_78689 = (state_78707[(2)]);
var state_78707__$1 = state_78707;
var statearr_78729_78752 = state_78707__$1;
(statearr_78729_78752[(2)] = inst_78689);

(statearr_78729_78752[(1)] = (5));


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
});})(c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_78733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78733[(0)] = state_machine__6995__auto__);

(statearr_78733[(1)] = (1));

return statearr_78733;
});
var state_machine__6995__auto____1 = (function (state_78707){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_78707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e78734){if((e78734 instanceof Object)){
var ex__6998__auto__ = e78734;
var statearr_78735_78753 = state_78707;
(statearr_78735_78753[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78754 = state_78707;
state_78707 = G__78754;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_78707){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_78707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_78736 = f__7051__auto__.call(null);
(statearr_78736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___78737);

return statearr_78736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___78737,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___78862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___78862,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___78862,out){
return (function (state_78838){
var state_val_78839 = (state_78838[(1)]);
if((state_val_78839 === (7))){
var inst_78817 = (state_78838[(7)]);
var inst_78818 = (state_78838[(8)]);
var inst_78817__$1 = (state_78838[(2)]);
var inst_78818__$1 = cljs.core.nth.call(null,inst_78817__$1,(0),null);
var inst_78819 = cljs.core.nth.call(null,inst_78817__$1,(1),null);
var inst_78820 = (inst_78818__$1 == null);
var state_78838__$1 = (function (){var statearr_78840 = state_78838;
(statearr_78840[(9)] = inst_78819);

(statearr_78840[(7)] = inst_78817__$1);

(statearr_78840[(8)] = inst_78818__$1);

return statearr_78840;
})();
if(cljs.core.truth_(inst_78820)){
var statearr_78841_78863 = state_78838__$1;
(statearr_78841_78863[(1)] = (8));

} else {
var statearr_78842_78864 = state_78838__$1;
(statearr_78842_78864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (1))){
var inst_78809 = cljs.core.vec.call(null,chs);
var inst_78810 = inst_78809;
var state_78838__$1 = (function (){var statearr_78843 = state_78838;
(statearr_78843[(10)] = inst_78810);

return statearr_78843;
})();
var statearr_78844_78865 = state_78838__$1;
(statearr_78844_78865[(2)] = null);

(statearr_78844_78865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (4))){
var inst_78810 = (state_78838[(10)]);
var state_78838__$1 = state_78838;
return cljs.core.async.ioc_alts_BANG_.call(null,state_78838__$1,(7),inst_78810);
} else {
if((state_val_78839 === (6))){
var inst_78834 = (state_78838[(2)]);
var state_78838__$1 = state_78838;
var statearr_78845_78866 = state_78838__$1;
(statearr_78845_78866[(2)] = inst_78834);

(statearr_78845_78866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (3))){
var inst_78836 = (state_78838[(2)]);
var state_78838__$1 = state_78838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78838__$1,inst_78836);
} else {
if((state_val_78839 === (2))){
var inst_78810 = (state_78838[(10)]);
var inst_78812 = cljs.core.count.call(null,inst_78810);
var inst_78813 = (inst_78812 > (0));
var state_78838__$1 = state_78838;
if(cljs.core.truth_(inst_78813)){
var statearr_78847_78867 = state_78838__$1;
(statearr_78847_78867[(1)] = (4));

} else {
var statearr_78848_78868 = state_78838__$1;
(statearr_78848_78868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (11))){
var inst_78810 = (state_78838[(10)]);
var inst_78827 = (state_78838[(2)]);
var tmp78846 = inst_78810;
var inst_78810__$1 = tmp78846;
var state_78838__$1 = (function (){var statearr_78849 = state_78838;
(statearr_78849[(10)] = inst_78810__$1);

(statearr_78849[(11)] = inst_78827);

return statearr_78849;
})();
var statearr_78850_78869 = state_78838__$1;
(statearr_78850_78869[(2)] = null);

(statearr_78850_78869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (9))){
var inst_78818 = (state_78838[(8)]);
var state_78838__$1 = state_78838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78838__$1,(11),out,inst_78818);
} else {
if((state_val_78839 === (5))){
var inst_78832 = cljs.core.async.close_BANG_.call(null,out);
var state_78838__$1 = state_78838;
var statearr_78851_78870 = state_78838__$1;
(statearr_78851_78870[(2)] = inst_78832);

(statearr_78851_78870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (10))){
var inst_78830 = (state_78838[(2)]);
var state_78838__$1 = state_78838;
var statearr_78852_78871 = state_78838__$1;
(statearr_78852_78871[(2)] = inst_78830);

(statearr_78852_78871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78839 === (8))){
var inst_78819 = (state_78838[(9)]);
var inst_78810 = (state_78838[(10)]);
var inst_78817 = (state_78838[(7)]);
var inst_78818 = (state_78838[(8)]);
var inst_78822 = (function (){var c = inst_78819;
var v = inst_78818;
var vec__78815 = inst_78817;
var cs = inst_78810;
return ((function (c,v,vec__78815,cs,inst_78819,inst_78810,inst_78817,inst_78818,state_val_78839,c__7050__auto___78862,out){
return (function (p1__78755_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__78755_SHARP_);
});
;})(c,v,vec__78815,cs,inst_78819,inst_78810,inst_78817,inst_78818,state_val_78839,c__7050__auto___78862,out))
})();
var inst_78823 = cljs.core.filterv.call(null,inst_78822,inst_78810);
var inst_78810__$1 = inst_78823;
var state_78838__$1 = (function (){var statearr_78853 = state_78838;
(statearr_78853[(10)] = inst_78810__$1);

return statearr_78853;
})();
var statearr_78854_78872 = state_78838__$1;
(statearr_78854_78872[(2)] = null);

(statearr_78854_78872[(1)] = (2));


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
});})(c__7050__auto___78862,out))
;
return ((function (switch__6994__auto__,c__7050__auto___78862,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_78858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_78858[(0)] = state_machine__6995__auto__);

(statearr_78858[(1)] = (1));

return statearr_78858;
});
var state_machine__6995__auto____1 = (function (state_78838){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_78838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e78859){if((e78859 instanceof Object)){
var ex__6998__auto__ = e78859;
var statearr_78860_78873 = state_78838;
(statearr_78860_78873[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78874 = state_78838;
state_78838 = G__78874;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_78838){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_78838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___78862,out))
})();
var state__7052__auto__ = (function (){var statearr_78861 = f__7051__auto__.call(null);
(statearr_78861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___78862);

return statearr_78861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___78862,out))
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
var c__7050__auto___78967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___78967,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___78967,out){
return (function (state_78944){
var state_val_78945 = (state_78944[(1)]);
if((state_val_78945 === (7))){
var inst_78926 = (state_78944[(7)]);
var inst_78926__$1 = (state_78944[(2)]);
var inst_78927 = (inst_78926__$1 == null);
var inst_78928 = cljs.core.not.call(null,inst_78927);
var state_78944__$1 = (function (){var statearr_78946 = state_78944;
(statearr_78946[(7)] = inst_78926__$1);

return statearr_78946;
})();
if(inst_78928){
var statearr_78947_78968 = state_78944__$1;
(statearr_78947_78968[(1)] = (8));

} else {
var statearr_78948_78969 = state_78944__$1;
(statearr_78948_78969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (1))){
var inst_78921 = (0);
var state_78944__$1 = (function (){var statearr_78949 = state_78944;
(statearr_78949[(8)] = inst_78921);

return statearr_78949;
})();
var statearr_78950_78970 = state_78944__$1;
(statearr_78950_78970[(2)] = null);

(statearr_78950_78970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (4))){
var state_78944__$1 = state_78944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78944__$1,(7),ch);
} else {
if((state_val_78945 === (6))){
var inst_78939 = (state_78944[(2)]);
var state_78944__$1 = state_78944;
var statearr_78951_78971 = state_78944__$1;
(statearr_78951_78971[(2)] = inst_78939);

(statearr_78951_78971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (3))){
var inst_78941 = (state_78944[(2)]);
var inst_78942 = cljs.core.async.close_BANG_.call(null,out);
var state_78944__$1 = (function (){var statearr_78952 = state_78944;
(statearr_78952[(9)] = inst_78941);

return statearr_78952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78944__$1,inst_78942);
} else {
if((state_val_78945 === (2))){
var inst_78921 = (state_78944[(8)]);
var inst_78923 = (inst_78921 < n);
var state_78944__$1 = state_78944;
if(cljs.core.truth_(inst_78923)){
var statearr_78953_78972 = state_78944__$1;
(statearr_78953_78972[(1)] = (4));

} else {
var statearr_78954_78973 = state_78944__$1;
(statearr_78954_78973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (11))){
var inst_78921 = (state_78944[(8)]);
var inst_78931 = (state_78944[(2)]);
var inst_78932 = (inst_78921 + (1));
var inst_78921__$1 = inst_78932;
var state_78944__$1 = (function (){var statearr_78955 = state_78944;
(statearr_78955[(10)] = inst_78931);

(statearr_78955[(8)] = inst_78921__$1);

return statearr_78955;
})();
var statearr_78956_78974 = state_78944__$1;
(statearr_78956_78974[(2)] = null);

(statearr_78956_78974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (9))){
var state_78944__$1 = state_78944;
var statearr_78957_78975 = state_78944__$1;
(statearr_78957_78975[(2)] = null);

(statearr_78957_78975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (5))){
var state_78944__$1 = state_78944;
var statearr_78958_78976 = state_78944__$1;
(statearr_78958_78976[(2)] = null);

(statearr_78958_78976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (10))){
var inst_78936 = (state_78944[(2)]);
var state_78944__$1 = state_78944;
var statearr_78959_78977 = state_78944__$1;
(statearr_78959_78977[(2)] = inst_78936);

(statearr_78959_78977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78945 === (8))){
var inst_78926 = (state_78944[(7)]);
var state_78944__$1 = state_78944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78944__$1,(11),out,inst_78926);
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
});})(c__7050__auto___78967,out))
;
return ((function (switch__6994__auto__,c__7050__auto___78967,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_78963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_78963[(0)] = state_machine__6995__auto__);

(statearr_78963[(1)] = (1));

return statearr_78963;
});
var state_machine__6995__auto____1 = (function (state_78944){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_78944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e78964){if((e78964 instanceof Object)){
var ex__6998__auto__ = e78964;
var statearr_78965_78978 = state_78944;
(statearr_78965_78978[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78979 = state_78944;
state_78944 = G__78979;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_78944){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_78944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___78967,out))
})();
var state__7052__auto__ = (function (){var statearr_78966 = f__7051__auto__.call(null);
(statearr_78966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___78967);

return statearr_78966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___78967,out))
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
if(typeof cljs.core.async.t78987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t78987 = (function (ch,f,map_LT_,meta78988){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta78988 = meta78988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t78990 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t78990 = (function (fn1,_,meta78988,map_LT_,f,ch,meta78991){
this.fn1 = fn1;
this._ = _;
this.meta78988 = meta78988;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta78991 = meta78991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t78990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t78990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__78980_SHARP_){
return f1.call(null,(((p1__78980_SHARP_ == null))?null:self__.f.call(null,p1__78980_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t78990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_78992){
var self__ = this;
var _78992__$1 = this;
return self__.meta78991;
});})(___$1))
;

cljs.core.async.t78990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_78992,meta78991__$1){
var self__ = this;
var _78992__$1 = this;
return (new cljs.core.async.t78990(self__.fn1,self__._,self__.meta78988,self__.map_LT_,self__.f,self__.ch,meta78991__$1));
});})(___$1))
;

cljs.core.async.t78990.cljs$lang$type = true;

cljs.core.async.t78990.cljs$lang$ctorStr = "cljs.core.async/t78990";

cljs.core.async.t78990.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t78990");
});})(___$1))
;

cljs.core.async.__GT_t78990 = ((function (___$1){
return (function __GT_t78990(fn1__$1,___$2,meta78988__$1,map_LT___$1,f__$1,ch__$1,meta78991){
return (new cljs.core.async.t78990(fn1__$1,___$2,meta78988__$1,map_LT___$1,f__$1,ch__$1,meta78991));
});})(___$1))
;

}

return (new cljs.core.async.t78990(fn1,___$1,self__.meta78988,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t78987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t78987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78989){
var self__ = this;
var _78989__$1 = this;
return self__.meta78988;
});

cljs.core.async.t78987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78989,meta78988__$1){
var self__ = this;
var _78989__$1 = this;
return (new cljs.core.async.t78987(self__.ch,self__.f,self__.map_LT_,meta78988__$1));
});

cljs.core.async.t78987.cljs$lang$type = true;

cljs.core.async.t78987.cljs$lang$ctorStr = "cljs.core.async/t78987";

cljs.core.async.t78987.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t78987");
});

cljs.core.async.__GT_t78987 = (function __GT_t78987(ch__$1,f__$1,map_LT___$1,meta78988){
return (new cljs.core.async.t78987(ch__$1,f__$1,map_LT___$1,meta78988));
});

}

return (new cljs.core.async.t78987(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t78996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t78996 = (function (ch,f,map_GT_,meta78997){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta78997 = meta78997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t78996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t78996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78998){
var self__ = this;
var _78998__$1 = this;
return self__.meta78997;
});

cljs.core.async.t78996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78998,meta78997__$1){
var self__ = this;
var _78998__$1 = this;
return (new cljs.core.async.t78996(self__.ch,self__.f,self__.map_GT_,meta78997__$1));
});

cljs.core.async.t78996.cljs$lang$type = true;

cljs.core.async.t78996.cljs$lang$ctorStr = "cljs.core.async/t78996";

cljs.core.async.t78996.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t78996");
});

cljs.core.async.__GT_t78996 = (function __GT_t78996(ch__$1,f__$1,map_GT___$1,meta78997){
return (new cljs.core.async.t78996(ch__$1,f__$1,map_GT___$1,meta78997));
});

}

return (new cljs.core.async.t78996(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t79002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t79002 = (function (ch,p,filter_GT_,meta79003){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta79003 = meta79003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t79002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t79002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79004){
var self__ = this;
var _79004__$1 = this;
return self__.meta79003;
});

cljs.core.async.t79002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79004,meta79003__$1){
var self__ = this;
var _79004__$1 = this;
return (new cljs.core.async.t79002(self__.ch,self__.p,self__.filter_GT_,meta79003__$1));
});

cljs.core.async.t79002.cljs$lang$type = true;

cljs.core.async.t79002.cljs$lang$ctorStr = "cljs.core.async/t79002";

cljs.core.async.t79002.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t79002");
});

cljs.core.async.__GT_t79002 = (function __GT_t79002(ch__$1,p__$1,filter_GT___$1,meta79003){
return (new cljs.core.async.t79002(ch__$1,p__$1,filter_GT___$1,meta79003));
});

}

return (new cljs.core.async.t79002(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___79087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___79087,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___79087,out){
return (function (state_79066){
var state_val_79067 = (state_79066[(1)]);
if((state_val_79067 === (7))){
var inst_79062 = (state_79066[(2)]);
var state_79066__$1 = state_79066;
var statearr_79068_79088 = state_79066__$1;
(statearr_79068_79088[(2)] = inst_79062);

(statearr_79068_79088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (1))){
var state_79066__$1 = state_79066;
var statearr_79069_79089 = state_79066__$1;
(statearr_79069_79089[(2)] = null);

(statearr_79069_79089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (4))){
var inst_79048 = (state_79066[(7)]);
var inst_79048__$1 = (state_79066[(2)]);
var inst_79049 = (inst_79048__$1 == null);
var state_79066__$1 = (function (){var statearr_79070 = state_79066;
(statearr_79070[(7)] = inst_79048__$1);

return statearr_79070;
})();
if(cljs.core.truth_(inst_79049)){
var statearr_79071_79090 = state_79066__$1;
(statearr_79071_79090[(1)] = (5));

} else {
var statearr_79072_79091 = state_79066__$1;
(statearr_79072_79091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (6))){
var inst_79048 = (state_79066[(7)]);
var inst_79053 = p.call(null,inst_79048);
var state_79066__$1 = state_79066;
if(cljs.core.truth_(inst_79053)){
var statearr_79073_79092 = state_79066__$1;
(statearr_79073_79092[(1)] = (8));

} else {
var statearr_79074_79093 = state_79066__$1;
(statearr_79074_79093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (3))){
var inst_79064 = (state_79066[(2)]);
var state_79066__$1 = state_79066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79066__$1,inst_79064);
} else {
if((state_val_79067 === (2))){
var state_79066__$1 = state_79066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79066__$1,(4),ch);
} else {
if((state_val_79067 === (11))){
var inst_79056 = (state_79066[(2)]);
var state_79066__$1 = state_79066;
var statearr_79075_79094 = state_79066__$1;
(statearr_79075_79094[(2)] = inst_79056);

(statearr_79075_79094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (9))){
var state_79066__$1 = state_79066;
var statearr_79076_79095 = state_79066__$1;
(statearr_79076_79095[(2)] = null);

(statearr_79076_79095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (5))){
var inst_79051 = cljs.core.async.close_BANG_.call(null,out);
var state_79066__$1 = state_79066;
var statearr_79077_79096 = state_79066__$1;
(statearr_79077_79096[(2)] = inst_79051);

(statearr_79077_79096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (10))){
var inst_79059 = (state_79066[(2)]);
var state_79066__$1 = (function (){var statearr_79078 = state_79066;
(statearr_79078[(8)] = inst_79059);

return statearr_79078;
})();
var statearr_79079_79097 = state_79066__$1;
(statearr_79079_79097[(2)] = null);

(statearr_79079_79097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79067 === (8))){
var inst_79048 = (state_79066[(7)]);
var state_79066__$1 = state_79066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79066__$1,(11),out,inst_79048);
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
});})(c__7050__auto___79087,out))
;
return ((function (switch__6994__auto__,c__7050__auto___79087,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_79083 = [null,null,null,null,null,null,null,null,null];
(statearr_79083[(0)] = state_machine__6995__auto__);

(statearr_79083[(1)] = (1));

return statearr_79083;
});
var state_machine__6995__auto____1 = (function (state_79066){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_79066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e79084){if((e79084 instanceof Object)){
var ex__6998__auto__ = e79084;
var statearr_79085_79098 = state_79066;
(statearr_79085_79098[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79099 = state_79066;
state_79066 = G__79099;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_79066){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_79066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___79087,out))
})();
var state__7052__auto__ = (function (){var statearr_79086 = f__7051__auto__.call(null);
(statearr_79086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___79087);

return statearr_79086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___79087,out))
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
return (function (state_79265){
var state_val_79266 = (state_79265[(1)]);
if((state_val_79266 === (7))){
var inst_79261 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
var statearr_79267_79308 = state_79265__$1;
(statearr_79267_79308[(2)] = inst_79261);

(statearr_79267_79308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (20))){
var inst_79231 = (state_79265[(7)]);
var inst_79242 = (state_79265[(2)]);
var inst_79243 = cljs.core.next.call(null,inst_79231);
var inst_79217 = inst_79243;
var inst_79218 = null;
var inst_79219 = (0);
var inst_79220 = (0);
var state_79265__$1 = (function (){var statearr_79268 = state_79265;
(statearr_79268[(8)] = inst_79242);

(statearr_79268[(9)] = inst_79219);

(statearr_79268[(10)] = inst_79217);

(statearr_79268[(11)] = inst_79220);

(statearr_79268[(12)] = inst_79218);

return statearr_79268;
})();
var statearr_79269_79309 = state_79265__$1;
(statearr_79269_79309[(2)] = null);

(statearr_79269_79309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (1))){
var state_79265__$1 = state_79265;
var statearr_79270_79310 = state_79265__$1;
(statearr_79270_79310[(2)] = null);

(statearr_79270_79310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (4))){
var inst_79206 = (state_79265[(13)]);
var inst_79206__$1 = (state_79265[(2)]);
var inst_79207 = (inst_79206__$1 == null);
var state_79265__$1 = (function (){var statearr_79271 = state_79265;
(statearr_79271[(13)] = inst_79206__$1);

return statearr_79271;
})();
if(cljs.core.truth_(inst_79207)){
var statearr_79272_79311 = state_79265__$1;
(statearr_79272_79311[(1)] = (5));

} else {
var statearr_79273_79312 = state_79265__$1;
(statearr_79273_79312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (15))){
var state_79265__$1 = state_79265;
var statearr_79277_79313 = state_79265__$1;
(statearr_79277_79313[(2)] = null);

(statearr_79277_79313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (21))){
var state_79265__$1 = state_79265;
var statearr_79278_79314 = state_79265__$1;
(statearr_79278_79314[(2)] = null);

(statearr_79278_79314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (13))){
var inst_79219 = (state_79265[(9)]);
var inst_79217 = (state_79265[(10)]);
var inst_79220 = (state_79265[(11)]);
var inst_79218 = (state_79265[(12)]);
var inst_79227 = (state_79265[(2)]);
var inst_79228 = (inst_79220 + (1));
var tmp79274 = inst_79219;
var tmp79275 = inst_79217;
var tmp79276 = inst_79218;
var inst_79217__$1 = tmp79275;
var inst_79218__$1 = tmp79276;
var inst_79219__$1 = tmp79274;
var inst_79220__$1 = inst_79228;
var state_79265__$1 = (function (){var statearr_79279 = state_79265;
(statearr_79279[(9)] = inst_79219__$1);

(statearr_79279[(10)] = inst_79217__$1);

(statearr_79279[(14)] = inst_79227);

(statearr_79279[(11)] = inst_79220__$1);

(statearr_79279[(12)] = inst_79218__$1);

return statearr_79279;
})();
var statearr_79280_79315 = state_79265__$1;
(statearr_79280_79315[(2)] = null);

(statearr_79280_79315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (22))){
var state_79265__$1 = state_79265;
var statearr_79281_79316 = state_79265__$1;
(statearr_79281_79316[(2)] = null);

(statearr_79281_79316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (6))){
var inst_79206 = (state_79265[(13)]);
var inst_79215 = f.call(null,inst_79206);
var inst_79216 = cljs.core.seq.call(null,inst_79215);
var inst_79217 = inst_79216;
var inst_79218 = null;
var inst_79219 = (0);
var inst_79220 = (0);
var state_79265__$1 = (function (){var statearr_79282 = state_79265;
(statearr_79282[(9)] = inst_79219);

(statearr_79282[(10)] = inst_79217);

(statearr_79282[(11)] = inst_79220);

(statearr_79282[(12)] = inst_79218);

return statearr_79282;
})();
var statearr_79283_79317 = state_79265__$1;
(statearr_79283_79317[(2)] = null);

(statearr_79283_79317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (17))){
var inst_79231 = (state_79265[(7)]);
var inst_79235 = cljs.core.chunk_first.call(null,inst_79231);
var inst_79236 = cljs.core.chunk_rest.call(null,inst_79231);
var inst_79237 = cljs.core.count.call(null,inst_79235);
var inst_79217 = inst_79236;
var inst_79218 = inst_79235;
var inst_79219 = inst_79237;
var inst_79220 = (0);
var state_79265__$1 = (function (){var statearr_79284 = state_79265;
(statearr_79284[(9)] = inst_79219);

(statearr_79284[(10)] = inst_79217);

(statearr_79284[(11)] = inst_79220);

(statearr_79284[(12)] = inst_79218);

return statearr_79284;
})();
var statearr_79285_79318 = state_79265__$1;
(statearr_79285_79318[(2)] = null);

(statearr_79285_79318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (3))){
var inst_79263 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79265__$1,inst_79263);
} else {
if((state_val_79266 === (12))){
var inst_79251 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
var statearr_79286_79319 = state_79265__$1;
(statearr_79286_79319[(2)] = inst_79251);

(statearr_79286_79319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (2))){
var state_79265__$1 = state_79265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79265__$1,(4),in$);
} else {
if((state_val_79266 === (23))){
var inst_79259 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
var statearr_79287_79320 = state_79265__$1;
(statearr_79287_79320[(2)] = inst_79259);

(statearr_79287_79320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (19))){
var inst_79246 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
var statearr_79288_79321 = state_79265__$1;
(statearr_79288_79321[(2)] = inst_79246);

(statearr_79288_79321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (11))){
var inst_79217 = (state_79265[(10)]);
var inst_79231 = (state_79265[(7)]);
var inst_79231__$1 = cljs.core.seq.call(null,inst_79217);
var state_79265__$1 = (function (){var statearr_79289 = state_79265;
(statearr_79289[(7)] = inst_79231__$1);

return statearr_79289;
})();
if(inst_79231__$1){
var statearr_79290_79322 = state_79265__$1;
(statearr_79290_79322[(1)] = (14));

} else {
var statearr_79291_79323 = state_79265__$1;
(statearr_79291_79323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (9))){
var inst_79253 = (state_79265[(2)]);
var inst_79254 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_79265__$1 = (function (){var statearr_79292 = state_79265;
(statearr_79292[(15)] = inst_79253);

return statearr_79292;
})();
if(cljs.core.truth_(inst_79254)){
var statearr_79293_79324 = state_79265__$1;
(statearr_79293_79324[(1)] = (21));

} else {
var statearr_79294_79325 = state_79265__$1;
(statearr_79294_79325[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (5))){
var inst_79209 = cljs.core.async.close_BANG_.call(null,out);
var state_79265__$1 = state_79265;
var statearr_79295_79326 = state_79265__$1;
(statearr_79295_79326[(2)] = inst_79209);

(statearr_79295_79326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (14))){
var inst_79231 = (state_79265[(7)]);
var inst_79233 = cljs.core.chunked_seq_QMARK_.call(null,inst_79231);
var state_79265__$1 = state_79265;
if(inst_79233){
var statearr_79296_79327 = state_79265__$1;
(statearr_79296_79327[(1)] = (17));

} else {
var statearr_79297_79328 = state_79265__$1;
(statearr_79297_79328[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (16))){
var inst_79249 = (state_79265[(2)]);
var state_79265__$1 = state_79265;
var statearr_79298_79329 = state_79265__$1;
(statearr_79298_79329[(2)] = inst_79249);

(statearr_79298_79329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79266 === (10))){
var inst_79220 = (state_79265[(11)]);
var inst_79218 = (state_79265[(12)]);
var inst_79225 = cljs.core._nth.call(null,inst_79218,inst_79220);
var state_79265__$1 = state_79265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79265__$1,(13),out,inst_79225);
} else {
if((state_val_79266 === (18))){
var inst_79231 = (state_79265[(7)]);
var inst_79240 = cljs.core.first.call(null,inst_79231);
var state_79265__$1 = state_79265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79265__$1,(20),out,inst_79240);
} else {
if((state_val_79266 === (8))){
var inst_79219 = (state_79265[(9)]);
var inst_79220 = (state_79265[(11)]);
var inst_79222 = (inst_79220 < inst_79219);
var inst_79223 = inst_79222;
var state_79265__$1 = state_79265;
if(cljs.core.truth_(inst_79223)){
var statearr_79299_79330 = state_79265__$1;
(statearr_79299_79330[(1)] = (10));

} else {
var statearr_79300_79331 = state_79265__$1;
(statearr_79300_79331[(1)] = (11));

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
var statearr_79304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79304[(0)] = state_machine__6995__auto__);

(statearr_79304[(1)] = (1));

return statearr_79304;
});
var state_machine__6995__auto____1 = (function (state_79265){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_79265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e79305){if((e79305 instanceof Object)){
var ex__6998__auto__ = e79305;
var statearr_79306_79332 = state_79265;
(statearr_79306_79332[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79333 = state_79265;
state_79265 = G__79333;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_79265){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_79265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_79307 = f__7051__auto__.call(null);
(statearr_79307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_79307;
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
var c__7050__auto___79430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___79430,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___79430,out){
return (function (state_79405){
var state_val_79406 = (state_79405[(1)]);
if((state_val_79406 === (7))){
var inst_79400 = (state_79405[(2)]);
var state_79405__$1 = state_79405;
var statearr_79407_79431 = state_79405__$1;
(statearr_79407_79431[(2)] = inst_79400);

(statearr_79407_79431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (1))){
var inst_79382 = null;
var state_79405__$1 = (function (){var statearr_79408 = state_79405;
(statearr_79408[(7)] = inst_79382);

return statearr_79408;
})();
var statearr_79409_79432 = state_79405__$1;
(statearr_79409_79432[(2)] = null);

(statearr_79409_79432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (4))){
var inst_79385 = (state_79405[(8)]);
var inst_79385__$1 = (state_79405[(2)]);
var inst_79386 = (inst_79385__$1 == null);
var inst_79387 = cljs.core.not.call(null,inst_79386);
var state_79405__$1 = (function (){var statearr_79410 = state_79405;
(statearr_79410[(8)] = inst_79385__$1);

return statearr_79410;
})();
if(inst_79387){
var statearr_79411_79433 = state_79405__$1;
(statearr_79411_79433[(1)] = (5));

} else {
var statearr_79412_79434 = state_79405__$1;
(statearr_79412_79434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (6))){
var state_79405__$1 = state_79405;
var statearr_79413_79435 = state_79405__$1;
(statearr_79413_79435[(2)] = null);

(statearr_79413_79435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (3))){
var inst_79402 = (state_79405[(2)]);
var inst_79403 = cljs.core.async.close_BANG_.call(null,out);
var state_79405__$1 = (function (){var statearr_79414 = state_79405;
(statearr_79414[(9)] = inst_79402);

return statearr_79414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79405__$1,inst_79403);
} else {
if((state_val_79406 === (2))){
var state_79405__$1 = state_79405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79405__$1,(4),ch);
} else {
if((state_val_79406 === (11))){
var inst_79385 = (state_79405[(8)]);
var inst_79394 = (state_79405[(2)]);
var inst_79382 = inst_79385;
var state_79405__$1 = (function (){var statearr_79415 = state_79405;
(statearr_79415[(7)] = inst_79382);

(statearr_79415[(10)] = inst_79394);

return statearr_79415;
})();
var statearr_79416_79436 = state_79405__$1;
(statearr_79416_79436[(2)] = null);

(statearr_79416_79436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (9))){
var inst_79385 = (state_79405[(8)]);
var state_79405__$1 = state_79405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79405__$1,(11),out,inst_79385);
} else {
if((state_val_79406 === (5))){
var inst_79385 = (state_79405[(8)]);
var inst_79382 = (state_79405[(7)]);
var inst_79389 = cljs.core._EQ_.call(null,inst_79385,inst_79382);
var state_79405__$1 = state_79405;
if(inst_79389){
var statearr_79418_79437 = state_79405__$1;
(statearr_79418_79437[(1)] = (8));

} else {
var statearr_79419_79438 = state_79405__$1;
(statearr_79419_79438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (10))){
var inst_79397 = (state_79405[(2)]);
var state_79405__$1 = state_79405;
var statearr_79420_79439 = state_79405__$1;
(statearr_79420_79439[(2)] = inst_79397);

(statearr_79420_79439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79406 === (8))){
var inst_79382 = (state_79405[(7)]);
var tmp79417 = inst_79382;
var inst_79382__$1 = tmp79417;
var state_79405__$1 = (function (){var statearr_79421 = state_79405;
(statearr_79421[(7)] = inst_79382__$1);

return statearr_79421;
})();
var statearr_79422_79440 = state_79405__$1;
(statearr_79422_79440[(2)] = null);

(statearr_79422_79440[(1)] = (2));


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
});})(c__7050__auto___79430,out))
;
return ((function (switch__6994__auto__,c__7050__auto___79430,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_79426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79426[(0)] = state_machine__6995__auto__);

(statearr_79426[(1)] = (1));

return statearr_79426;
});
var state_machine__6995__auto____1 = (function (state_79405){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_79405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e79427){if((e79427 instanceof Object)){
var ex__6998__auto__ = e79427;
var statearr_79428_79441 = state_79405;
(statearr_79428_79441[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79442 = state_79405;
state_79405 = G__79442;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_79405){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_79405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___79430,out))
})();
var state__7052__auto__ = (function (){var statearr_79429 = f__7051__auto__.call(null);
(statearr_79429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___79430);

return statearr_79429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___79430,out))
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
var c__7050__auto___79577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___79577,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___79577,out){
return (function (state_79547){
var state_val_79548 = (state_79547[(1)]);
if((state_val_79548 === (7))){
var inst_79543 = (state_79547[(2)]);
var state_79547__$1 = state_79547;
var statearr_79549_79578 = state_79547__$1;
(statearr_79549_79578[(2)] = inst_79543);

(statearr_79549_79578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (1))){
var inst_79510 = (new Array(n));
var inst_79511 = inst_79510;
var inst_79512 = (0);
var state_79547__$1 = (function (){var statearr_79550 = state_79547;
(statearr_79550[(7)] = inst_79512);

(statearr_79550[(8)] = inst_79511);

return statearr_79550;
})();
var statearr_79551_79579 = state_79547__$1;
(statearr_79551_79579[(2)] = null);

(statearr_79551_79579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (4))){
var inst_79515 = (state_79547[(9)]);
var inst_79515__$1 = (state_79547[(2)]);
var inst_79516 = (inst_79515__$1 == null);
var inst_79517 = cljs.core.not.call(null,inst_79516);
var state_79547__$1 = (function (){var statearr_79552 = state_79547;
(statearr_79552[(9)] = inst_79515__$1);

return statearr_79552;
})();
if(inst_79517){
var statearr_79553_79580 = state_79547__$1;
(statearr_79553_79580[(1)] = (5));

} else {
var statearr_79554_79581 = state_79547__$1;
(statearr_79554_79581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (15))){
var inst_79537 = (state_79547[(2)]);
var state_79547__$1 = state_79547;
var statearr_79555_79582 = state_79547__$1;
(statearr_79555_79582[(2)] = inst_79537);

(statearr_79555_79582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (13))){
var state_79547__$1 = state_79547;
var statearr_79556_79583 = state_79547__$1;
(statearr_79556_79583[(2)] = null);

(statearr_79556_79583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (6))){
var inst_79512 = (state_79547[(7)]);
var inst_79533 = (inst_79512 > (0));
var state_79547__$1 = state_79547;
if(cljs.core.truth_(inst_79533)){
var statearr_79557_79584 = state_79547__$1;
(statearr_79557_79584[(1)] = (12));

} else {
var statearr_79558_79585 = state_79547__$1;
(statearr_79558_79585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (3))){
var inst_79545 = (state_79547[(2)]);
var state_79547__$1 = state_79547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79547__$1,inst_79545);
} else {
if((state_val_79548 === (12))){
var inst_79511 = (state_79547[(8)]);
var inst_79535 = cljs.core.vec.call(null,inst_79511);
var state_79547__$1 = state_79547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79547__$1,(15),out,inst_79535);
} else {
if((state_val_79548 === (2))){
var state_79547__$1 = state_79547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79547__$1,(4),ch);
} else {
if((state_val_79548 === (11))){
var inst_79527 = (state_79547[(2)]);
var inst_79528 = (new Array(n));
var inst_79511 = inst_79528;
var inst_79512 = (0);
var state_79547__$1 = (function (){var statearr_79559 = state_79547;
(statearr_79559[(10)] = inst_79527);

(statearr_79559[(7)] = inst_79512);

(statearr_79559[(8)] = inst_79511);

return statearr_79559;
})();
var statearr_79560_79586 = state_79547__$1;
(statearr_79560_79586[(2)] = null);

(statearr_79560_79586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (9))){
var inst_79511 = (state_79547[(8)]);
var inst_79525 = cljs.core.vec.call(null,inst_79511);
var state_79547__$1 = state_79547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79547__$1,(11),out,inst_79525);
} else {
if((state_val_79548 === (5))){
var inst_79515 = (state_79547[(9)]);
var inst_79512 = (state_79547[(7)]);
var inst_79520 = (state_79547[(11)]);
var inst_79511 = (state_79547[(8)]);
var inst_79519 = (inst_79511[inst_79512] = inst_79515);
var inst_79520__$1 = (inst_79512 + (1));
var inst_79521 = (inst_79520__$1 < n);
var state_79547__$1 = (function (){var statearr_79561 = state_79547;
(statearr_79561[(12)] = inst_79519);

(statearr_79561[(11)] = inst_79520__$1);

return statearr_79561;
})();
if(cljs.core.truth_(inst_79521)){
var statearr_79562_79587 = state_79547__$1;
(statearr_79562_79587[(1)] = (8));

} else {
var statearr_79563_79588 = state_79547__$1;
(statearr_79563_79588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (14))){
var inst_79540 = (state_79547[(2)]);
var inst_79541 = cljs.core.async.close_BANG_.call(null,out);
var state_79547__$1 = (function (){var statearr_79565 = state_79547;
(statearr_79565[(13)] = inst_79540);

return statearr_79565;
})();
var statearr_79566_79589 = state_79547__$1;
(statearr_79566_79589[(2)] = inst_79541);

(statearr_79566_79589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (10))){
var inst_79531 = (state_79547[(2)]);
var state_79547__$1 = state_79547;
var statearr_79567_79590 = state_79547__$1;
(statearr_79567_79590[(2)] = inst_79531);

(statearr_79567_79590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79548 === (8))){
var inst_79520 = (state_79547[(11)]);
var inst_79511 = (state_79547[(8)]);
var tmp79564 = inst_79511;
var inst_79511__$1 = tmp79564;
var inst_79512 = inst_79520;
var state_79547__$1 = (function (){var statearr_79568 = state_79547;
(statearr_79568[(7)] = inst_79512);

(statearr_79568[(8)] = inst_79511__$1);

return statearr_79568;
})();
var statearr_79569_79591 = state_79547__$1;
(statearr_79569_79591[(2)] = null);

(statearr_79569_79591[(1)] = (2));


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
});})(c__7050__auto___79577,out))
;
return ((function (switch__6994__auto__,c__7050__auto___79577,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_79573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79573[(0)] = state_machine__6995__auto__);

(statearr_79573[(1)] = (1));

return statearr_79573;
});
var state_machine__6995__auto____1 = (function (state_79547){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_79547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e79574){if((e79574 instanceof Object)){
var ex__6998__auto__ = e79574;
var statearr_79575_79592 = state_79547;
(statearr_79575_79592[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79593 = state_79547;
state_79547 = G__79593;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_79547){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_79547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___79577,out))
})();
var state__7052__auto__ = (function (){var statearr_79576 = f__7051__auto__.call(null);
(statearr_79576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___79577);

return statearr_79576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___79577,out))
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
var c__7050__auto___79736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___79736,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___79736,out){
return (function (state_79706){
var state_val_79707 = (state_79706[(1)]);
if((state_val_79707 === (7))){
var inst_79702 = (state_79706[(2)]);
var state_79706__$1 = state_79706;
var statearr_79708_79737 = state_79706__$1;
(statearr_79708_79737[(2)] = inst_79702);

(statearr_79708_79737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (1))){
var inst_79665 = [];
var inst_79666 = inst_79665;
var inst_79667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_79706__$1 = (function (){var statearr_79709 = state_79706;
(statearr_79709[(7)] = inst_79666);

(statearr_79709[(8)] = inst_79667);

return statearr_79709;
})();
var statearr_79710_79738 = state_79706__$1;
(statearr_79710_79738[(2)] = null);

(statearr_79710_79738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (4))){
var inst_79670 = (state_79706[(9)]);
var inst_79670__$1 = (state_79706[(2)]);
var inst_79671 = (inst_79670__$1 == null);
var inst_79672 = cljs.core.not.call(null,inst_79671);
var state_79706__$1 = (function (){var statearr_79711 = state_79706;
(statearr_79711[(9)] = inst_79670__$1);

return statearr_79711;
})();
if(inst_79672){
var statearr_79712_79739 = state_79706__$1;
(statearr_79712_79739[(1)] = (5));

} else {
var statearr_79713_79740 = state_79706__$1;
(statearr_79713_79740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (15))){
var inst_79696 = (state_79706[(2)]);
var state_79706__$1 = state_79706;
var statearr_79714_79741 = state_79706__$1;
(statearr_79714_79741[(2)] = inst_79696);

(statearr_79714_79741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (13))){
var state_79706__$1 = state_79706;
var statearr_79715_79742 = state_79706__$1;
(statearr_79715_79742[(2)] = null);

(statearr_79715_79742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (6))){
var inst_79666 = (state_79706[(7)]);
var inst_79691 = inst_79666.length;
var inst_79692 = (inst_79691 > (0));
var state_79706__$1 = state_79706;
if(cljs.core.truth_(inst_79692)){
var statearr_79716_79743 = state_79706__$1;
(statearr_79716_79743[(1)] = (12));

} else {
var statearr_79717_79744 = state_79706__$1;
(statearr_79717_79744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (3))){
var inst_79704 = (state_79706[(2)]);
var state_79706__$1 = state_79706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79706__$1,inst_79704);
} else {
if((state_val_79707 === (12))){
var inst_79666 = (state_79706[(7)]);
var inst_79694 = cljs.core.vec.call(null,inst_79666);
var state_79706__$1 = state_79706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79706__$1,(15),out,inst_79694);
} else {
if((state_val_79707 === (2))){
var state_79706__$1 = state_79706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79706__$1,(4),ch);
} else {
if((state_val_79707 === (11))){
var inst_79674 = (state_79706[(10)]);
var inst_79670 = (state_79706[(9)]);
var inst_79684 = (state_79706[(2)]);
var inst_79685 = [];
var inst_79686 = inst_79685.push(inst_79670);
var inst_79666 = inst_79685;
var inst_79667 = inst_79674;
var state_79706__$1 = (function (){var statearr_79718 = state_79706;
(statearr_79718[(7)] = inst_79666);

(statearr_79718[(11)] = inst_79684);

(statearr_79718[(8)] = inst_79667);

(statearr_79718[(12)] = inst_79686);

return statearr_79718;
})();
var statearr_79719_79745 = state_79706__$1;
(statearr_79719_79745[(2)] = null);

(statearr_79719_79745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (9))){
var inst_79666 = (state_79706[(7)]);
var inst_79682 = cljs.core.vec.call(null,inst_79666);
var state_79706__$1 = state_79706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79706__$1,(11),out,inst_79682);
} else {
if((state_val_79707 === (5))){
var inst_79674 = (state_79706[(10)]);
var inst_79667 = (state_79706[(8)]);
var inst_79670 = (state_79706[(9)]);
var inst_79674__$1 = f.call(null,inst_79670);
var inst_79675 = cljs.core._EQ_.call(null,inst_79674__$1,inst_79667);
var inst_79676 = cljs.core.keyword_identical_QMARK_.call(null,inst_79667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_79677 = (inst_79675) || (inst_79676);
var state_79706__$1 = (function (){var statearr_79720 = state_79706;
(statearr_79720[(10)] = inst_79674__$1);

return statearr_79720;
})();
if(cljs.core.truth_(inst_79677)){
var statearr_79721_79746 = state_79706__$1;
(statearr_79721_79746[(1)] = (8));

} else {
var statearr_79722_79747 = state_79706__$1;
(statearr_79722_79747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (14))){
var inst_79699 = (state_79706[(2)]);
var inst_79700 = cljs.core.async.close_BANG_.call(null,out);
var state_79706__$1 = (function (){var statearr_79724 = state_79706;
(statearr_79724[(13)] = inst_79699);

return statearr_79724;
})();
var statearr_79725_79748 = state_79706__$1;
(statearr_79725_79748[(2)] = inst_79700);

(statearr_79725_79748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (10))){
var inst_79689 = (state_79706[(2)]);
var state_79706__$1 = state_79706;
var statearr_79726_79749 = state_79706__$1;
(statearr_79726_79749[(2)] = inst_79689);

(statearr_79726_79749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79707 === (8))){
var inst_79666 = (state_79706[(7)]);
var inst_79674 = (state_79706[(10)]);
var inst_79670 = (state_79706[(9)]);
var inst_79679 = inst_79666.push(inst_79670);
var tmp79723 = inst_79666;
var inst_79666__$1 = tmp79723;
var inst_79667 = inst_79674;
var state_79706__$1 = (function (){var statearr_79727 = state_79706;
(statearr_79727[(7)] = inst_79666__$1);

(statearr_79727[(8)] = inst_79667);

(statearr_79727[(14)] = inst_79679);

return statearr_79727;
})();
var statearr_79728_79750 = state_79706__$1;
(statearr_79728_79750[(2)] = null);

(statearr_79728_79750[(1)] = (2));


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
});})(c__7050__auto___79736,out))
;
return ((function (switch__6994__auto__,c__7050__auto___79736,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_79732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79732[(0)] = state_machine__6995__auto__);

(statearr_79732[(1)] = (1));

return statearr_79732;
});
var state_machine__6995__auto____1 = (function (state_79706){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_79706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e79733){if((e79733 instanceof Object)){
var ex__6998__auto__ = e79733;
var statearr_79734_79751 = state_79706;
(statearr_79734_79751[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79752 = state_79706;
state_79706 = G__79752;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_79706){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_79706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___79736,out))
})();
var state__7052__auto__ = (function (){var statearr_79735 = f__7051__auto__.call(null);
(statearr_79735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___79736);

return statearr_79735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___79736,out))
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