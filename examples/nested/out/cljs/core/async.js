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
if(typeof cljs.core.async.t57606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t57606 = (function (f,fn_handler,meta57607){
this.f = f;
this.fn_handler = fn_handler;
this.meta57607 = meta57607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t57606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t57606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t57606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57608){
var self__ = this;
var _57608__$1 = this;
return self__.meta57607;
});

cljs.core.async.t57606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57608,meta57607__$1){
var self__ = this;
var _57608__$1 = this;
return (new cljs.core.async.t57606(self__.f,self__.fn_handler,meta57607__$1));
});

cljs.core.async.t57606.cljs$lang$type = true;

cljs.core.async.t57606.cljs$lang$ctorStr = "cljs.core.async/t57606";

cljs.core.async.t57606.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t57606");
});

cljs.core.async.__GT_t57606 = (function __GT_t57606(f__$1,fn_handler__$1,meta57607){
return (new cljs.core.async.t57606(f__$1,fn_handler__$1,meta57607));
});

}

return (new cljs.core.async.t57606(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var G__57610 = buff;
if(G__57610){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__57610.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__57610.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__57610);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__57610);
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
var val_57611 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_57611);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_57611,ret){
return (function (){
return fn1.call(null,val_57611);
});})(val_57611,ret))
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
var n__4517__auto___57612 = n;
var x_57613 = (0);
while(true){
if((x_57613 < n__4517__auto___57612)){
(a[x_57613] = (0));

var G__57614 = (x_57613 + (1));
x_57613 = G__57614;
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

var G__57615 = (i + (1));
i = G__57615;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t57619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t57619 = (function (flag,alt_flag,meta57620){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta57620 = meta57620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t57619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t57619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t57619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_57621){
var self__ = this;
var _57621__$1 = this;
return self__.meta57620;
});})(flag))
;

cljs.core.async.t57619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_57621,meta57620__$1){
var self__ = this;
var _57621__$1 = this;
return (new cljs.core.async.t57619(self__.flag,self__.alt_flag,meta57620__$1));
});})(flag))
;

cljs.core.async.t57619.cljs$lang$type = true;

cljs.core.async.t57619.cljs$lang$ctorStr = "cljs.core.async/t57619";

cljs.core.async.t57619.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t57619");
});})(flag))
;

cljs.core.async.__GT_t57619 = ((function (flag){
return (function __GT_t57619(flag__$1,alt_flag__$1,meta57620){
return (new cljs.core.async.t57619(flag__$1,alt_flag__$1,meta57620));
});})(flag))
;

}

return (new cljs.core.async.t57619(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t57625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t57625 = (function (cb,flag,alt_handler,meta57626){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta57626 = meta57626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t57625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t57625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t57625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57627){
var self__ = this;
var _57627__$1 = this;
return self__.meta57626;
});

cljs.core.async.t57625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57627,meta57626__$1){
var self__ = this;
var _57627__$1 = this;
return (new cljs.core.async.t57625(self__.cb,self__.flag,self__.alt_handler,meta57626__$1));
});

cljs.core.async.t57625.cljs$lang$type = true;

cljs.core.async.t57625.cljs$lang$ctorStr = "cljs.core.async/t57625";

cljs.core.async.t57625.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t57625");
});

cljs.core.async.__GT_t57625 = (function __GT_t57625(cb__$1,flag__$1,alt_handler__$1,meta57626){
return (new cljs.core.async.t57625(cb__$1,flag__$1,alt_handler__$1,meta57626));
});

}

return (new cljs.core.async.t57625(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
return (function (p1__57628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57628_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57629_SHARP_,port], null));
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
var G__57630 = (i + (1));
i = G__57630;
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
var alts_BANG___delegate = function (ports,p__57631){
var map__57633 = p__57631;
var map__57633__$1 = ((cljs.core.seq_QMARK_.call(null,map__57633))?cljs.core.apply.call(null,cljs.core.hash_map,map__57633):map__57633);
var opts = map__57633__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__57631 = null;
if (arguments.length > 1) {
  p__57631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__57631);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__57634){
var ports = cljs.core.first(arglist__57634);
var p__57631 = cljs.core.rest(arglist__57634);
return alts_BANG___delegate(ports,p__57631);
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
var c__7050__auto___57729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___57729){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___57729){
return (function (state_57705){
var state_val_57706 = (state_57705[(1)]);
if((state_val_57706 === (7))){
var inst_57701 = (state_57705[(2)]);
var state_57705__$1 = state_57705;
var statearr_57707_57730 = state_57705__$1;
(statearr_57707_57730[(2)] = inst_57701);

(statearr_57707_57730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (1))){
var state_57705__$1 = state_57705;
var statearr_57708_57731 = state_57705__$1;
(statearr_57708_57731[(2)] = null);

(statearr_57708_57731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (4))){
var inst_57684 = (state_57705[(7)]);
var inst_57684__$1 = (state_57705[(2)]);
var inst_57685 = (inst_57684__$1 == null);
var state_57705__$1 = (function (){var statearr_57709 = state_57705;
(statearr_57709[(7)] = inst_57684__$1);

return statearr_57709;
})();
if(cljs.core.truth_(inst_57685)){
var statearr_57710_57732 = state_57705__$1;
(statearr_57710_57732[(1)] = (5));

} else {
var statearr_57711_57733 = state_57705__$1;
(statearr_57711_57733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (13))){
var state_57705__$1 = state_57705;
var statearr_57712_57734 = state_57705__$1;
(statearr_57712_57734[(2)] = null);

(statearr_57712_57734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (6))){
var inst_57684 = (state_57705[(7)]);
var state_57705__$1 = state_57705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57705__$1,(11),to,inst_57684);
} else {
if((state_val_57706 === (3))){
var inst_57703 = (state_57705[(2)]);
var state_57705__$1 = state_57705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57705__$1,inst_57703);
} else {
if((state_val_57706 === (12))){
var state_57705__$1 = state_57705;
var statearr_57713_57735 = state_57705__$1;
(statearr_57713_57735[(2)] = null);

(statearr_57713_57735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (2))){
var state_57705__$1 = state_57705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57705__$1,(4),from);
} else {
if((state_val_57706 === (11))){
var inst_57694 = (state_57705[(2)]);
var state_57705__$1 = state_57705;
if(cljs.core.truth_(inst_57694)){
var statearr_57714_57736 = state_57705__$1;
(statearr_57714_57736[(1)] = (12));

} else {
var statearr_57715_57737 = state_57705__$1;
(statearr_57715_57737[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (9))){
var state_57705__$1 = state_57705;
var statearr_57716_57738 = state_57705__$1;
(statearr_57716_57738[(2)] = null);

(statearr_57716_57738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (5))){
var state_57705__$1 = state_57705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57717_57739 = state_57705__$1;
(statearr_57717_57739[(1)] = (8));

} else {
var statearr_57718_57740 = state_57705__$1;
(statearr_57718_57740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (14))){
var inst_57699 = (state_57705[(2)]);
var state_57705__$1 = state_57705;
var statearr_57719_57741 = state_57705__$1;
(statearr_57719_57741[(2)] = inst_57699);

(statearr_57719_57741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (10))){
var inst_57691 = (state_57705[(2)]);
var state_57705__$1 = state_57705;
var statearr_57720_57742 = state_57705__$1;
(statearr_57720_57742[(2)] = inst_57691);

(statearr_57720_57742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57706 === (8))){
var inst_57688 = cljs.core.async.close_BANG_.call(null,to);
var state_57705__$1 = state_57705;
var statearr_57721_57743 = state_57705__$1;
(statearr_57721_57743[(2)] = inst_57688);

(statearr_57721_57743[(1)] = (10));


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
});})(c__7050__auto___57729))
;
return ((function (switch__6994__auto__,c__7050__auto___57729){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_57725 = [null,null,null,null,null,null,null,null];
(statearr_57725[(0)] = state_machine__6995__auto__);

(statearr_57725[(1)] = (1));

return statearr_57725;
});
var state_machine__6995__auto____1 = (function (state_57705){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_57705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e57726){if((e57726 instanceof Object)){
var ex__6998__auto__ = e57726;
var statearr_57727_57744 = state_57705;
(statearr_57727_57744[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57745 = state_57705;
state_57705 = G__57745;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_57705){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_57705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___57729))
})();
var state__7052__auto__ = (function (){var statearr_57728 = f__7051__auto__.call(null);
(statearr_57728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___57729);

return statearr_57728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___57729))
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
return (function (p__57929){
var vec__57930 = p__57929;
var v = cljs.core.nth.call(null,vec__57930,(0),null);
var p = cljs.core.nth.call(null,vec__57930,(1),null);
var job = vec__57930;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___58112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results){
return (function (state_57935){
var state_val_57936 = (state_57935[(1)]);
if((state_val_57936 === (2))){
var inst_57932 = (state_57935[(2)]);
var inst_57933 = cljs.core.async.close_BANG_.call(null,res);
var state_57935__$1 = (function (){var statearr_57937 = state_57935;
(statearr_57937[(7)] = inst_57932);

return statearr_57937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57935__$1,inst_57933);
} else {
if((state_val_57936 === (1))){
var state_57935__$1 = state_57935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57935__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_57941 = [null,null,null,null,null,null,null,null];
(statearr_57941[(0)] = state_machine__6995__auto__);

(statearr_57941[(1)] = (1));

return statearr_57941;
});
var state_machine__6995__auto____1 = (function (state_57935){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_57935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e57942){if((e57942 instanceof Object)){
var ex__6998__auto__ = e57942;
var statearr_57943_58113 = state_57935;
(statearr_57943_58113[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58114 = state_57935;
state_57935 = G__58114;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_57935){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_57935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_57944 = f__7051__auto__.call(null);
(statearr_57944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58112);

return statearr_57944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___58112,res,vec__57930,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__57945){
var vec__57946 = p__57945;
var v = cljs.core.nth.call(null,vec__57946,(0),null);
var p = cljs.core.nth.call(null,vec__57946,(1),null);
var job = vec__57946;
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
var n__4517__auto___58115 = n;
var __58116 = (0);
while(true){
if((__58116 < n__4517__auto___58115)){
var G__57947_58117 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57947_58117) {
case "async":
var c__7050__auto___58119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58116,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__58116,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function (state_57960){
var state_val_57961 = (state_57960[(1)]);
if((state_val_57961 === (7))){
var inst_57956 = (state_57960[(2)]);
var state_57960__$1 = state_57960;
var statearr_57962_58120 = state_57960__$1;
(statearr_57962_58120[(2)] = inst_57956);

(statearr_57962_58120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57961 === (6))){
var state_57960__$1 = state_57960;
var statearr_57963_58121 = state_57960__$1;
(statearr_57963_58121[(2)] = null);

(statearr_57963_58121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57961 === (5))){
var state_57960__$1 = state_57960;
var statearr_57964_58122 = state_57960__$1;
(statearr_57964_58122[(2)] = null);

(statearr_57964_58122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57961 === (4))){
var inst_57950 = (state_57960[(2)]);
var inst_57951 = async.call(null,inst_57950);
var state_57960__$1 = state_57960;
if(cljs.core.truth_(inst_57951)){
var statearr_57965_58123 = state_57960__$1;
(statearr_57965_58123[(1)] = (5));

} else {
var statearr_57966_58124 = state_57960__$1;
(statearr_57966_58124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57961 === (3))){
var inst_57958 = (state_57960[(2)]);
var state_57960__$1 = state_57960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57960__$1,inst_57958);
} else {
if((state_val_57961 === (2))){
var state_57960__$1 = state_57960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57960__$1,(4),jobs);
} else {
if((state_val_57961 === (1))){
var state_57960__$1 = state_57960;
var statearr_57967_58125 = state_57960__$1;
(statearr_57967_58125[(2)] = null);

(statearr_57967_58125[(1)] = (2));


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
});})(__58116,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
;
return ((function (__58116,switch__6994__auto__,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_57971 = [null,null,null,null,null,null,null];
(statearr_57971[(0)] = state_machine__6995__auto__);

(statearr_57971[(1)] = (1));

return statearr_57971;
});
var state_machine__6995__auto____1 = (function (state_57960){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_57960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e57972){if((e57972 instanceof Object)){
var ex__6998__auto__ = e57972;
var statearr_57973_58126 = state_57960;
(statearr_57973_58126[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58127 = state_57960;
state_57960 = G__58127;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_57960){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_57960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__58116,switch__6994__auto__,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_57974 = f__7051__auto__.call(null);
(statearr_57974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58119);

return statearr_57974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__58116,c__7050__auto___58119,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___58128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58116,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__58116,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function (state_57987){
var state_val_57988 = (state_57987[(1)]);
if((state_val_57988 === (7))){
var inst_57983 = (state_57987[(2)]);
var state_57987__$1 = state_57987;
var statearr_57989_58129 = state_57987__$1;
(statearr_57989_58129[(2)] = inst_57983);

(statearr_57989_58129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57988 === (6))){
var state_57987__$1 = state_57987;
var statearr_57990_58130 = state_57987__$1;
(statearr_57990_58130[(2)] = null);

(statearr_57990_58130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57988 === (5))){
var state_57987__$1 = state_57987;
var statearr_57991_58131 = state_57987__$1;
(statearr_57991_58131[(2)] = null);

(statearr_57991_58131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57988 === (4))){
var inst_57977 = (state_57987[(2)]);
var inst_57978 = process.call(null,inst_57977);
var state_57987__$1 = state_57987;
if(cljs.core.truth_(inst_57978)){
var statearr_57992_58132 = state_57987__$1;
(statearr_57992_58132[(1)] = (5));

} else {
var statearr_57993_58133 = state_57987__$1;
(statearr_57993_58133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57988 === (3))){
var inst_57985 = (state_57987[(2)]);
var state_57987__$1 = state_57987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57987__$1,inst_57985);
} else {
if((state_val_57988 === (2))){
var state_57987__$1 = state_57987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57987__$1,(4),jobs);
} else {
if((state_val_57988 === (1))){
var state_57987__$1 = state_57987;
var statearr_57994_58134 = state_57987__$1;
(statearr_57994_58134[(2)] = null);

(statearr_57994_58134[(1)] = (2));


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
});})(__58116,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
;
return ((function (__58116,switch__6994__auto__,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_57998 = [null,null,null,null,null,null,null];
(statearr_57998[(0)] = state_machine__6995__auto__);

(statearr_57998[(1)] = (1));

return statearr_57998;
});
var state_machine__6995__auto____1 = (function (state_57987){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_57987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e57999){if((e57999 instanceof Object)){
var ex__6998__auto__ = e57999;
var statearr_58000_58135 = state_57987;
(statearr_58000_58135[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58136 = state_57987;
state_57987 = G__58136;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_57987){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_57987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__58116,switch__6994__auto__,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_58001 = f__7051__auto__.call(null);
(statearr_58001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58128);

return statearr_58001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__58116,c__7050__auto___58128,G__57947_58117,n__4517__auto___58115,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__58137 = (__58116 + (1));
__58116 = G__58137;
continue;
} else {
}
break;
}

var c__7050__auto___58138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___58138,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___58138,jobs,results,process,async){
return (function (state_58023){
var state_val_58024 = (state_58023[(1)]);
if((state_val_58024 === (9))){
var inst_58016 = (state_58023[(2)]);
var state_58023__$1 = (function (){var statearr_58025 = state_58023;
(statearr_58025[(7)] = inst_58016);

return statearr_58025;
})();
var statearr_58026_58139 = state_58023__$1;
(statearr_58026_58139[(2)] = null);

(statearr_58026_58139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58024 === (8))){
var inst_58009 = (state_58023[(8)]);
var inst_58014 = (state_58023[(2)]);
var state_58023__$1 = (function (){var statearr_58027 = state_58023;
(statearr_58027[(9)] = inst_58014);

return statearr_58027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58023__$1,(9),results,inst_58009);
} else {
if((state_val_58024 === (7))){
var inst_58019 = (state_58023[(2)]);
var state_58023__$1 = state_58023;
var statearr_58028_58140 = state_58023__$1;
(statearr_58028_58140[(2)] = inst_58019);

(statearr_58028_58140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58024 === (6))){
var inst_58004 = (state_58023[(10)]);
var inst_58009 = (state_58023[(8)]);
var inst_58009__$1 = cljs.core.async.chan.call(null,(1));
var inst_58010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58011 = [inst_58004,inst_58009__$1];
var inst_58012 = (new cljs.core.PersistentVector(null,2,(5),inst_58010,inst_58011,null));
var state_58023__$1 = (function (){var statearr_58029 = state_58023;
(statearr_58029[(8)] = inst_58009__$1);

return statearr_58029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58023__$1,(8),jobs,inst_58012);
} else {
if((state_val_58024 === (5))){
var inst_58007 = cljs.core.async.close_BANG_.call(null,jobs);
var state_58023__$1 = state_58023;
var statearr_58030_58141 = state_58023__$1;
(statearr_58030_58141[(2)] = inst_58007);

(statearr_58030_58141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58024 === (4))){
var inst_58004 = (state_58023[(10)]);
var inst_58004__$1 = (state_58023[(2)]);
var inst_58005 = (inst_58004__$1 == null);
var state_58023__$1 = (function (){var statearr_58031 = state_58023;
(statearr_58031[(10)] = inst_58004__$1);

return statearr_58031;
})();
if(cljs.core.truth_(inst_58005)){
var statearr_58032_58142 = state_58023__$1;
(statearr_58032_58142[(1)] = (5));

} else {
var statearr_58033_58143 = state_58023__$1;
(statearr_58033_58143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58024 === (3))){
var inst_58021 = (state_58023[(2)]);
var state_58023__$1 = state_58023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58023__$1,inst_58021);
} else {
if((state_val_58024 === (2))){
var state_58023__$1 = state_58023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58023__$1,(4),from);
} else {
if((state_val_58024 === (1))){
var state_58023__$1 = state_58023;
var statearr_58034_58144 = state_58023__$1;
(statearr_58034_58144[(2)] = null);

(statearr_58034_58144[(1)] = (2));


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
});})(c__7050__auto___58138,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___58138,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_58038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58038[(0)] = state_machine__6995__auto__);

(statearr_58038[(1)] = (1));

return statearr_58038;
});
var state_machine__6995__auto____1 = (function (state_58023){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58039){if((e58039 instanceof Object)){
var ex__6998__auto__ = e58039;
var statearr_58040_58145 = state_58023;
(statearr_58040_58145[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58146 = state_58023;
state_58023 = G__58146;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58023){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___58138,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_58041 = f__7051__auto__.call(null);
(statearr_58041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58138);

return statearr_58041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___58138,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_58079){
var state_val_58080 = (state_58079[(1)]);
if((state_val_58080 === (7))){
var inst_58075 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58081_58147 = state_58079__$1;
(statearr_58081_58147[(2)] = inst_58075);

(statearr_58081_58147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (20))){
var state_58079__$1 = state_58079;
var statearr_58082_58148 = state_58079__$1;
(statearr_58082_58148[(2)] = null);

(statearr_58082_58148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (1))){
var state_58079__$1 = state_58079;
var statearr_58083_58149 = state_58079__$1;
(statearr_58083_58149[(2)] = null);

(statearr_58083_58149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (4))){
var inst_58044 = (state_58079[(7)]);
var inst_58044__$1 = (state_58079[(2)]);
var inst_58045 = (inst_58044__$1 == null);
var state_58079__$1 = (function (){var statearr_58084 = state_58079;
(statearr_58084[(7)] = inst_58044__$1);

return statearr_58084;
})();
if(cljs.core.truth_(inst_58045)){
var statearr_58085_58150 = state_58079__$1;
(statearr_58085_58150[(1)] = (5));

} else {
var statearr_58086_58151 = state_58079__$1;
(statearr_58086_58151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (15))){
var inst_58057 = (state_58079[(8)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58079__$1,(18),to,inst_58057);
} else {
if((state_val_58080 === (21))){
var inst_58070 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58087_58152 = state_58079__$1;
(statearr_58087_58152[(2)] = inst_58070);

(statearr_58087_58152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (13))){
var inst_58072 = (state_58079[(2)]);
var state_58079__$1 = (function (){var statearr_58088 = state_58079;
(statearr_58088[(9)] = inst_58072);

return statearr_58088;
})();
var statearr_58089_58153 = state_58079__$1;
(statearr_58089_58153[(2)] = null);

(statearr_58089_58153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (6))){
var inst_58044 = (state_58079[(7)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58079__$1,(11),inst_58044);
} else {
if((state_val_58080 === (17))){
var inst_58065 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
if(cljs.core.truth_(inst_58065)){
var statearr_58090_58154 = state_58079__$1;
(statearr_58090_58154[(1)] = (19));

} else {
var statearr_58091_58155 = state_58079__$1;
(statearr_58091_58155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (3))){
var inst_58077 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58079__$1,inst_58077);
} else {
if((state_val_58080 === (12))){
var inst_58054 = (state_58079[(10)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58079__$1,(14),inst_58054);
} else {
if((state_val_58080 === (2))){
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58079__$1,(4),results);
} else {
if((state_val_58080 === (19))){
var state_58079__$1 = state_58079;
var statearr_58092_58156 = state_58079__$1;
(statearr_58092_58156[(2)] = null);

(statearr_58092_58156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (11))){
var inst_58054 = (state_58079[(2)]);
var state_58079__$1 = (function (){var statearr_58093 = state_58079;
(statearr_58093[(10)] = inst_58054);

return statearr_58093;
})();
var statearr_58094_58157 = state_58079__$1;
(statearr_58094_58157[(2)] = null);

(statearr_58094_58157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (9))){
var state_58079__$1 = state_58079;
var statearr_58095_58158 = state_58079__$1;
(statearr_58095_58158[(2)] = null);

(statearr_58095_58158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (5))){
var state_58079__$1 = state_58079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58096_58159 = state_58079__$1;
(statearr_58096_58159[(1)] = (8));

} else {
var statearr_58097_58160 = state_58079__$1;
(statearr_58097_58160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (14))){
var inst_58059 = (state_58079[(11)]);
var inst_58057 = (state_58079[(8)]);
var inst_58057__$1 = (state_58079[(2)]);
var inst_58058 = (inst_58057__$1 == null);
var inst_58059__$1 = cljs.core.not.call(null,inst_58058);
var state_58079__$1 = (function (){var statearr_58098 = state_58079;
(statearr_58098[(11)] = inst_58059__$1);

(statearr_58098[(8)] = inst_58057__$1);

return statearr_58098;
})();
if(inst_58059__$1){
var statearr_58099_58161 = state_58079__$1;
(statearr_58099_58161[(1)] = (15));

} else {
var statearr_58100_58162 = state_58079__$1;
(statearr_58100_58162[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (16))){
var inst_58059 = (state_58079[(11)]);
var state_58079__$1 = state_58079;
var statearr_58101_58163 = state_58079__$1;
(statearr_58101_58163[(2)] = inst_58059);

(statearr_58101_58163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (10))){
var inst_58051 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58102_58164 = state_58079__$1;
(statearr_58102_58164[(2)] = inst_58051);

(statearr_58102_58164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (18))){
var inst_58062 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58103_58165 = state_58079__$1;
(statearr_58103_58165[(2)] = inst_58062);

(statearr_58103_58165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (8))){
var inst_58048 = cljs.core.async.close_BANG_.call(null,to);
var state_58079__$1 = state_58079;
var statearr_58104_58166 = state_58079__$1;
(statearr_58104_58166[(2)] = inst_58048);

(statearr_58104_58166[(1)] = (10));


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
var statearr_58108 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58108[(0)] = state_machine__6995__auto__);

(statearr_58108[(1)] = (1));

return statearr_58108;
});
var state_machine__6995__auto____1 = (function (state_58079){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58109){if((e58109 instanceof Object)){
var ex__6998__auto__ = e58109;
var statearr_58110_58167 = state_58079;
(statearr_58110_58167[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58168 = state_58079;
state_58079 = G__58168;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58079){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_58111 = f__7051__auto__.call(null);
(statearr_58111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_58111;
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
var c__7050__auto___58269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___58269,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___58269,tc,fc){
return (function (state_58244){
var state_val_58245 = (state_58244[(1)]);
if((state_val_58245 === (7))){
var inst_58240 = (state_58244[(2)]);
var state_58244__$1 = state_58244;
var statearr_58246_58270 = state_58244__$1;
(statearr_58246_58270[(2)] = inst_58240);

(statearr_58246_58270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (1))){
var state_58244__$1 = state_58244;
var statearr_58247_58271 = state_58244__$1;
(statearr_58247_58271[(2)] = null);

(statearr_58247_58271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (4))){
var inst_58221 = (state_58244[(7)]);
var inst_58221__$1 = (state_58244[(2)]);
var inst_58222 = (inst_58221__$1 == null);
var state_58244__$1 = (function (){var statearr_58248 = state_58244;
(statearr_58248[(7)] = inst_58221__$1);

return statearr_58248;
})();
if(cljs.core.truth_(inst_58222)){
var statearr_58249_58272 = state_58244__$1;
(statearr_58249_58272[(1)] = (5));

} else {
var statearr_58250_58273 = state_58244__$1;
(statearr_58250_58273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (13))){
var state_58244__$1 = state_58244;
var statearr_58251_58274 = state_58244__$1;
(statearr_58251_58274[(2)] = null);

(statearr_58251_58274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (6))){
var inst_58221 = (state_58244[(7)]);
var inst_58227 = p.call(null,inst_58221);
var state_58244__$1 = state_58244;
if(cljs.core.truth_(inst_58227)){
var statearr_58252_58275 = state_58244__$1;
(statearr_58252_58275[(1)] = (9));

} else {
var statearr_58253_58276 = state_58244__$1;
(statearr_58253_58276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (3))){
var inst_58242 = (state_58244[(2)]);
var state_58244__$1 = state_58244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58244__$1,inst_58242);
} else {
if((state_val_58245 === (12))){
var state_58244__$1 = state_58244;
var statearr_58254_58277 = state_58244__$1;
(statearr_58254_58277[(2)] = null);

(statearr_58254_58277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (2))){
var state_58244__$1 = state_58244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58244__$1,(4),ch);
} else {
if((state_val_58245 === (11))){
var inst_58221 = (state_58244[(7)]);
var inst_58231 = (state_58244[(2)]);
var state_58244__$1 = state_58244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58244__$1,(8),inst_58231,inst_58221);
} else {
if((state_val_58245 === (9))){
var state_58244__$1 = state_58244;
var statearr_58255_58278 = state_58244__$1;
(statearr_58255_58278[(2)] = tc);

(statearr_58255_58278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (5))){
var inst_58224 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58225 = cljs.core.async.close_BANG_.call(null,fc);
var state_58244__$1 = (function (){var statearr_58256 = state_58244;
(statearr_58256[(8)] = inst_58224);

return statearr_58256;
})();
var statearr_58257_58279 = state_58244__$1;
(statearr_58257_58279[(2)] = inst_58225);

(statearr_58257_58279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (14))){
var inst_58238 = (state_58244[(2)]);
var state_58244__$1 = state_58244;
var statearr_58258_58280 = state_58244__$1;
(statearr_58258_58280[(2)] = inst_58238);

(statearr_58258_58280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (10))){
var state_58244__$1 = state_58244;
var statearr_58259_58281 = state_58244__$1;
(statearr_58259_58281[(2)] = fc);

(statearr_58259_58281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58245 === (8))){
var inst_58233 = (state_58244[(2)]);
var state_58244__$1 = state_58244;
if(cljs.core.truth_(inst_58233)){
var statearr_58260_58282 = state_58244__$1;
(statearr_58260_58282[(1)] = (12));

} else {
var statearr_58261_58283 = state_58244__$1;
(statearr_58261_58283[(1)] = (13));

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
});})(c__7050__auto___58269,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___58269,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_58265 = [null,null,null,null,null,null,null,null,null];
(statearr_58265[(0)] = state_machine__6995__auto__);

(statearr_58265[(1)] = (1));

return statearr_58265;
});
var state_machine__6995__auto____1 = (function (state_58244){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58266){if((e58266 instanceof Object)){
var ex__6998__auto__ = e58266;
var statearr_58267_58284 = state_58244;
(statearr_58267_58284[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58285 = state_58244;
state_58244 = G__58285;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58244){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___58269,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_58268 = f__7051__auto__.call(null);
(statearr_58268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58269);

return statearr_58268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___58269,tc,fc))
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
return (function (state_58332){
var state_val_58333 = (state_58332[(1)]);
if((state_val_58333 === (7))){
var inst_58328 = (state_58332[(2)]);
var state_58332__$1 = state_58332;
var statearr_58334_58350 = state_58332__$1;
(statearr_58334_58350[(2)] = inst_58328);

(statearr_58334_58350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58333 === (6))){
var inst_58321 = (state_58332[(7)]);
var inst_58318 = (state_58332[(8)]);
var inst_58325 = f.call(null,inst_58318,inst_58321);
var inst_58318__$1 = inst_58325;
var state_58332__$1 = (function (){var statearr_58335 = state_58332;
(statearr_58335[(8)] = inst_58318__$1);

return statearr_58335;
})();
var statearr_58336_58351 = state_58332__$1;
(statearr_58336_58351[(2)] = null);

(statearr_58336_58351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58333 === (5))){
var inst_58318 = (state_58332[(8)]);
var state_58332__$1 = state_58332;
var statearr_58337_58352 = state_58332__$1;
(statearr_58337_58352[(2)] = inst_58318);

(statearr_58337_58352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58333 === (4))){
var inst_58321 = (state_58332[(7)]);
var inst_58321__$1 = (state_58332[(2)]);
var inst_58322 = (inst_58321__$1 == null);
var state_58332__$1 = (function (){var statearr_58338 = state_58332;
(statearr_58338[(7)] = inst_58321__$1);

return statearr_58338;
})();
if(cljs.core.truth_(inst_58322)){
var statearr_58339_58353 = state_58332__$1;
(statearr_58339_58353[(1)] = (5));

} else {
var statearr_58340_58354 = state_58332__$1;
(statearr_58340_58354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58333 === (3))){
var inst_58330 = (state_58332[(2)]);
var state_58332__$1 = state_58332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58332__$1,inst_58330);
} else {
if((state_val_58333 === (2))){
var state_58332__$1 = state_58332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58332__$1,(4),ch);
} else {
if((state_val_58333 === (1))){
var inst_58318 = init;
var state_58332__$1 = (function (){var statearr_58341 = state_58332;
(statearr_58341[(8)] = inst_58318);

return statearr_58341;
})();
var statearr_58342_58355 = state_58332__$1;
(statearr_58342_58355[(2)] = null);

(statearr_58342_58355[(1)] = (2));


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
var statearr_58346 = [null,null,null,null,null,null,null,null,null];
(statearr_58346[(0)] = state_machine__6995__auto__);

(statearr_58346[(1)] = (1));

return statearr_58346;
});
var state_machine__6995__auto____1 = (function (state_58332){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58347){if((e58347 instanceof Object)){
var ex__6998__auto__ = e58347;
var statearr_58348_58356 = state_58332;
(statearr_58348_58356[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58357 = state_58332;
state_58332 = G__58357;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58332){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_58349 = f__7051__auto__.call(null);
(statearr_58349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_58349;
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
return (function (state_58431){
var state_val_58432 = (state_58431[(1)]);
if((state_val_58432 === (7))){
var inst_58413 = (state_58431[(2)]);
var state_58431__$1 = state_58431;
var statearr_58433_58456 = state_58431__$1;
(statearr_58433_58456[(2)] = inst_58413);

(statearr_58433_58456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (1))){
var inst_58407 = cljs.core.seq.call(null,coll);
var inst_58408 = inst_58407;
var state_58431__$1 = (function (){var statearr_58434 = state_58431;
(statearr_58434[(7)] = inst_58408);

return statearr_58434;
})();
var statearr_58435_58457 = state_58431__$1;
(statearr_58435_58457[(2)] = null);

(statearr_58435_58457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (4))){
var inst_58408 = (state_58431[(7)]);
var inst_58411 = cljs.core.first.call(null,inst_58408);
var state_58431__$1 = state_58431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58431__$1,(7),ch,inst_58411);
} else {
if((state_val_58432 === (13))){
var inst_58425 = (state_58431[(2)]);
var state_58431__$1 = state_58431;
var statearr_58436_58458 = state_58431__$1;
(statearr_58436_58458[(2)] = inst_58425);

(statearr_58436_58458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (6))){
var inst_58416 = (state_58431[(2)]);
var state_58431__$1 = state_58431;
if(cljs.core.truth_(inst_58416)){
var statearr_58437_58459 = state_58431__$1;
(statearr_58437_58459[(1)] = (8));

} else {
var statearr_58438_58460 = state_58431__$1;
(statearr_58438_58460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (3))){
var inst_58429 = (state_58431[(2)]);
var state_58431__$1 = state_58431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58431__$1,inst_58429);
} else {
if((state_val_58432 === (12))){
var state_58431__$1 = state_58431;
var statearr_58439_58461 = state_58431__$1;
(statearr_58439_58461[(2)] = null);

(statearr_58439_58461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (2))){
var inst_58408 = (state_58431[(7)]);
var state_58431__$1 = state_58431;
if(cljs.core.truth_(inst_58408)){
var statearr_58440_58462 = state_58431__$1;
(statearr_58440_58462[(1)] = (4));

} else {
var statearr_58441_58463 = state_58431__$1;
(statearr_58441_58463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (11))){
var inst_58422 = cljs.core.async.close_BANG_.call(null,ch);
var state_58431__$1 = state_58431;
var statearr_58442_58464 = state_58431__$1;
(statearr_58442_58464[(2)] = inst_58422);

(statearr_58442_58464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (9))){
var state_58431__$1 = state_58431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58443_58465 = state_58431__$1;
(statearr_58443_58465[(1)] = (11));

} else {
var statearr_58444_58466 = state_58431__$1;
(statearr_58444_58466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (5))){
var inst_58408 = (state_58431[(7)]);
var state_58431__$1 = state_58431;
var statearr_58445_58467 = state_58431__$1;
(statearr_58445_58467[(2)] = inst_58408);

(statearr_58445_58467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (10))){
var inst_58427 = (state_58431[(2)]);
var state_58431__$1 = state_58431;
var statearr_58446_58468 = state_58431__$1;
(statearr_58446_58468[(2)] = inst_58427);

(statearr_58446_58468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58432 === (8))){
var inst_58408 = (state_58431[(7)]);
var inst_58418 = cljs.core.next.call(null,inst_58408);
var inst_58408__$1 = inst_58418;
var state_58431__$1 = (function (){var statearr_58447 = state_58431;
(statearr_58447[(7)] = inst_58408__$1);

return statearr_58447;
})();
var statearr_58448_58469 = state_58431__$1;
(statearr_58448_58469[(2)] = null);

(statearr_58448_58469[(1)] = (2));


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
var statearr_58452 = [null,null,null,null,null,null,null,null];
(statearr_58452[(0)] = state_machine__6995__auto__);

(statearr_58452[(1)] = (1));

return statearr_58452;
});
var state_machine__6995__auto____1 = (function (state_58431){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58453){if((e58453 instanceof Object)){
var ex__6998__auto__ = e58453;
var statearr_58454_58470 = state_58431;
(statearr_58454_58470[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58471 = state_58431;
state_58431 = G__58471;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58431){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_58455 = f__7051__auto__.call(null);
(statearr_58455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_58455;
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

cljs.core.async.Mux = (function (){var obj58473 = {};
return obj58473;
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


cljs.core.async.Mult = (function (){var obj58475 = {};
return obj58475;
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
if(typeof cljs.core.async.t58697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58697 = (function (cs,ch,mult,meta58698){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta58698 = meta58698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58697.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t58697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t58697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t58697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t58697.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t58697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t58697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58699){
var self__ = this;
var _58699__$1 = this;
return self__.meta58698;
});})(cs))
;

cljs.core.async.t58697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58699,meta58698__$1){
var self__ = this;
var _58699__$1 = this;
return (new cljs.core.async.t58697(self__.cs,self__.ch,self__.mult,meta58698__$1));
});})(cs))
;

cljs.core.async.t58697.cljs$lang$type = true;

cljs.core.async.t58697.cljs$lang$ctorStr = "cljs.core.async/t58697";

cljs.core.async.t58697.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t58697");
});})(cs))
;

cljs.core.async.__GT_t58697 = ((function (cs){
return (function __GT_t58697(cs__$1,ch__$1,mult__$1,meta58698){
return (new cljs.core.async.t58697(cs__$1,ch__$1,mult__$1,meta58698));
});})(cs))
;

}

return (new cljs.core.async.t58697(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___58918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___58918,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___58918,cs,m,dchan,dctr,done){
return (function (state_58830){
var state_val_58831 = (state_58830[(1)]);
if((state_val_58831 === (7))){
var inst_58826 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58832_58919 = state_58830__$1;
(statearr_58832_58919[(2)] = inst_58826);

(statearr_58832_58919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (20))){
var inst_58731 = (state_58830[(7)]);
var inst_58741 = cljs.core.first.call(null,inst_58731);
var inst_58742 = cljs.core.nth.call(null,inst_58741,(0),null);
var inst_58743 = cljs.core.nth.call(null,inst_58741,(1),null);
var state_58830__$1 = (function (){var statearr_58833 = state_58830;
(statearr_58833[(8)] = inst_58742);

return statearr_58833;
})();
if(cljs.core.truth_(inst_58743)){
var statearr_58834_58920 = state_58830__$1;
(statearr_58834_58920[(1)] = (22));

} else {
var statearr_58835_58921 = state_58830__$1;
(statearr_58835_58921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (27))){
var inst_58778 = (state_58830[(9)]);
var inst_58773 = (state_58830[(10)]);
var inst_58771 = (state_58830[(11)]);
var inst_58702 = (state_58830[(12)]);
var inst_58778__$1 = cljs.core._nth.call(null,inst_58771,inst_58773);
var inst_58779 = cljs.core.async.put_BANG_.call(null,inst_58778__$1,inst_58702,done);
var state_58830__$1 = (function (){var statearr_58836 = state_58830;
(statearr_58836[(9)] = inst_58778__$1);

return statearr_58836;
})();
if(cljs.core.truth_(inst_58779)){
var statearr_58837_58922 = state_58830__$1;
(statearr_58837_58922[(1)] = (30));

} else {
var statearr_58838_58923 = state_58830__$1;
(statearr_58838_58923[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (1))){
var state_58830__$1 = state_58830;
var statearr_58839_58924 = state_58830__$1;
(statearr_58839_58924[(2)] = null);

(statearr_58839_58924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (24))){
var inst_58731 = (state_58830[(7)]);
var inst_58748 = (state_58830[(2)]);
var inst_58749 = cljs.core.next.call(null,inst_58731);
var inst_58711 = inst_58749;
var inst_58712 = null;
var inst_58713 = (0);
var inst_58714 = (0);
var state_58830__$1 = (function (){var statearr_58840 = state_58830;
(statearr_58840[(13)] = inst_58748);

(statearr_58840[(14)] = inst_58714);

(statearr_58840[(15)] = inst_58712);

(statearr_58840[(16)] = inst_58713);

(statearr_58840[(17)] = inst_58711);

return statearr_58840;
})();
var statearr_58841_58925 = state_58830__$1;
(statearr_58841_58925[(2)] = null);

(statearr_58841_58925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (39))){
var state_58830__$1 = state_58830;
var statearr_58845_58926 = state_58830__$1;
(statearr_58845_58926[(2)] = null);

(statearr_58845_58926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (4))){
var inst_58702 = (state_58830[(12)]);
var inst_58702__$1 = (state_58830[(2)]);
var inst_58703 = (inst_58702__$1 == null);
var state_58830__$1 = (function (){var statearr_58846 = state_58830;
(statearr_58846[(12)] = inst_58702__$1);

return statearr_58846;
})();
if(cljs.core.truth_(inst_58703)){
var statearr_58847_58927 = state_58830__$1;
(statearr_58847_58927[(1)] = (5));

} else {
var statearr_58848_58928 = state_58830__$1;
(statearr_58848_58928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (15))){
var inst_58714 = (state_58830[(14)]);
var inst_58712 = (state_58830[(15)]);
var inst_58713 = (state_58830[(16)]);
var inst_58711 = (state_58830[(17)]);
var inst_58727 = (state_58830[(2)]);
var inst_58728 = (inst_58714 + (1));
var tmp58842 = inst_58712;
var tmp58843 = inst_58713;
var tmp58844 = inst_58711;
var inst_58711__$1 = tmp58844;
var inst_58712__$1 = tmp58842;
var inst_58713__$1 = tmp58843;
var inst_58714__$1 = inst_58728;
var state_58830__$1 = (function (){var statearr_58849 = state_58830;
(statearr_58849[(14)] = inst_58714__$1);

(statearr_58849[(15)] = inst_58712__$1);

(statearr_58849[(18)] = inst_58727);

(statearr_58849[(16)] = inst_58713__$1);

(statearr_58849[(17)] = inst_58711__$1);

return statearr_58849;
})();
var statearr_58850_58929 = state_58830__$1;
(statearr_58850_58929[(2)] = null);

(statearr_58850_58929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (21))){
var inst_58752 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58854_58930 = state_58830__$1;
(statearr_58854_58930[(2)] = inst_58752);

(statearr_58854_58930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (31))){
var inst_58778 = (state_58830[(9)]);
var inst_58782 = done.call(null,null);
var inst_58783 = cljs.core.async.untap_STAR_.call(null,m,inst_58778);
var state_58830__$1 = (function (){var statearr_58855 = state_58830;
(statearr_58855[(19)] = inst_58782);

return statearr_58855;
})();
var statearr_58856_58931 = state_58830__$1;
(statearr_58856_58931[(2)] = inst_58783);

(statearr_58856_58931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (32))){
var inst_58772 = (state_58830[(20)]);
var inst_58773 = (state_58830[(10)]);
var inst_58771 = (state_58830[(11)]);
var inst_58770 = (state_58830[(21)]);
var inst_58785 = (state_58830[(2)]);
var inst_58786 = (inst_58773 + (1));
var tmp58851 = inst_58772;
var tmp58852 = inst_58771;
var tmp58853 = inst_58770;
var inst_58770__$1 = tmp58853;
var inst_58771__$1 = tmp58852;
var inst_58772__$1 = tmp58851;
var inst_58773__$1 = inst_58786;
var state_58830__$1 = (function (){var statearr_58857 = state_58830;
(statearr_58857[(22)] = inst_58785);

(statearr_58857[(20)] = inst_58772__$1);

(statearr_58857[(10)] = inst_58773__$1);

(statearr_58857[(11)] = inst_58771__$1);

(statearr_58857[(21)] = inst_58770__$1);

return statearr_58857;
})();
var statearr_58858_58932 = state_58830__$1;
(statearr_58858_58932[(2)] = null);

(statearr_58858_58932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (40))){
var inst_58798 = (state_58830[(23)]);
var inst_58802 = done.call(null,null);
var inst_58803 = cljs.core.async.untap_STAR_.call(null,m,inst_58798);
var state_58830__$1 = (function (){var statearr_58859 = state_58830;
(statearr_58859[(24)] = inst_58802);

return statearr_58859;
})();
var statearr_58860_58933 = state_58830__$1;
(statearr_58860_58933[(2)] = inst_58803);

(statearr_58860_58933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (33))){
var inst_58789 = (state_58830[(25)]);
var inst_58791 = cljs.core.chunked_seq_QMARK_.call(null,inst_58789);
var state_58830__$1 = state_58830;
if(inst_58791){
var statearr_58861_58934 = state_58830__$1;
(statearr_58861_58934[(1)] = (36));

} else {
var statearr_58862_58935 = state_58830__$1;
(statearr_58862_58935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (13))){
var inst_58721 = (state_58830[(26)]);
var inst_58724 = cljs.core.async.close_BANG_.call(null,inst_58721);
var state_58830__$1 = state_58830;
var statearr_58863_58936 = state_58830__$1;
(statearr_58863_58936[(2)] = inst_58724);

(statearr_58863_58936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (22))){
var inst_58742 = (state_58830[(8)]);
var inst_58745 = cljs.core.async.close_BANG_.call(null,inst_58742);
var state_58830__$1 = state_58830;
var statearr_58864_58937 = state_58830__$1;
(statearr_58864_58937[(2)] = inst_58745);

(statearr_58864_58937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (36))){
var inst_58789 = (state_58830[(25)]);
var inst_58793 = cljs.core.chunk_first.call(null,inst_58789);
var inst_58794 = cljs.core.chunk_rest.call(null,inst_58789);
var inst_58795 = cljs.core.count.call(null,inst_58793);
var inst_58770 = inst_58794;
var inst_58771 = inst_58793;
var inst_58772 = inst_58795;
var inst_58773 = (0);
var state_58830__$1 = (function (){var statearr_58865 = state_58830;
(statearr_58865[(20)] = inst_58772);

(statearr_58865[(10)] = inst_58773);

(statearr_58865[(11)] = inst_58771);

(statearr_58865[(21)] = inst_58770);

return statearr_58865;
})();
var statearr_58866_58938 = state_58830__$1;
(statearr_58866_58938[(2)] = null);

(statearr_58866_58938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (41))){
var inst_58789 = (state_58830[(25)]);
var inst_58805 = (state_58830[(2)]);
var inst_58806 = cljs.core.next.call(null,inst_58789);
var inst_58770 = inst_58806;
var inst_58771 = null;
var inst_58772 = (0);
var inst_58773 = (0);
var state_58830__$1 = (function (){var statearr_58867 = state_58830;
(statearr_58867[(20)] = inst_58772);

(statearr_58867[(10)] = inst_58773);

(statearr_58867[(11)] = inst_58771);

(statearr_58867[(27)] = inst_58805);

(statearr_58867[(21)] = inst_58770);

return statearr_58867;
})();
var statearr_58868_58939 = state_58830__$1;
(statearr_58868_58939[(2)] = null);

(statearr_58868_58939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (43))){
var state_58830__$1 = state_58830;
var statearr_58869_58940 = state_58830__$1;
(statearr_58869_58940[(2)] = null);

(statearr_58869_58940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (29))){
var inst_58814 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58870_58941 = state_58830__$1;
(statearr_58870_58941[(2)] = inst_58814);

(statearr_58870_58941[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (44))){
var inst_58823 = (state_58830[(2)]);
var state_58830__$1 = (function (){var statearr_58871 = state_58830;
(statearr_58871[(28)] = inst_58823);

return statearr_58871;
})();
var statearr_58872_58942 = state_58830__$1;
(statearr_58872_58942[(2)] = null);

(statearr_58872_58942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (6))){
var inst_58762 = (state_58830[(29)]);
var inst_58761 = cljs.core.deref.call(null,cs);
var inst_58762__$1 = cljs.core.keys.call(null,inst_58761);
var inst_58763 = cljs.core.count.call(null,inst_58762__$1);
var inst_58764 = cljs.core.reset_BANG_.call(null,dctr,inst_58763);
var inst_58769 = cljs.core.seq.call(null,inst_58762__$1);
var inst_58770 = inst_58769;
var inst_58771 = null;
var inst_58772 = (0);
var inst_58773 = (0);
var state_58830__$1 = (function (){var statearr_58873 = state_58830;
(statearr_58873[(29)] = inst_58762__$1);

(statearr_58873[(20)] = inst_58772);

(statearr_58873[(10)] = inst_58773);

(statearr_58873[(11)] = inst_58771);

(statearr_58873[(30)] = inst_58764);

(statearr_58873[(21)] = inst_58770);

return statearr_58873;
})();
var statearr_58874_58943 = state_58830__$1;
(statearr_58874_58943[(2)] = null);

(statearr_58874_58943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (28))){
var inst_58789 = (state_58830[(25)]);
var inst_58770 = (state_58830[(21)]);
var inst_58789__$1 = cljs.core.seq.call(null,inst_58770);
var state_58830__$1 = (function (){var statearr_58875 = state_58830;
(statearr_58875[(25)] = inst_58789__$1);

return statearr_58875;
})();
if(inst_58789__$1){
var statearr_58876_58944 = state_58830__$1;
(statearr_58876_58944[(1)] = (33));

} else {
var statearr_58877_58945 = state_58830__$1;
(statearr_58877_58945[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (25))){
var inst_58772 = (state_58830[(20)]);
var inst_58773 = (state_58830[(10)]);
var inst_58775 = (inst_58773 < inst_58772);
var inst_58776 = inst_58775;
var state_58830__$1 = state_58830;
if(cljs.core.truth_(inst_58776)){
var statearr_58878_58946 = state_58830__$1;
(statearr_58878_58946[(1)] = (27));

} else {
var statearr_58879_58947 = state_58830__$1;
(statearr_58879_58947[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (34))){
var state_58830__$1 = state_58830;
var statearr_58880_58948 = state_58830__$1;
(statearr_58880_58948[(2)] = null);

(statearr_58880_58948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (17))){
var state_58830__$1 = state_58830;
var statearr_58881_58949 = state_58830__$1;
(statearr_58881_58949[(2)] = null);

(statearr_58881_58949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (3))){
var inst_58828 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58830__$1,inst_58828);
} else {
if((state_val_58831 === (12))){
var inst_58757 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58882_58950 = state_58830__$1;
(statearr_58882_58950[(2)] = inst_58757);

(statearr_58882_58950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (2))){
var state_58830__$1 = state_58830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58830__$1,(4),ch);
} else {
if((state_val_58831 === (23))){
var state_58830__$1 = state_58830;
var statearr_58883_58951 = state_58830__$1;
(statearr_58883_58951[(2)] = null);

(statearr_58883_58951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (35))){
var inst_58812 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58884_58952 = state_58830__$1;
(statearr_58884_58952[(2)] = inst_58812);

(statearr_58884_58952[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (19))){
var inst_58731 = (state_58830[(7)]);
var inst_58735 = cljs.core.chunk_first.call(null,inst_58731);
var inst_58736 = cljs.core.chunk_rest.call(null,inst_58731);
var inst_58737 = cljs.core.count.call(null,inst_58735);
var inst_58711 = inst_58736;
var inst_58712 = inst_58735;
var inst_58713 = inst_58737;
var inst_58714 = (0);
var state_58830__$1 = (function (){var statearr_58885 = state_58830;
(statearr_58885[(14)] = inst_58714);

(statearr_58885[(15)] = inst_58712);

(statearr_58885[(16)] = inst_58713);

(statearr_58885[(17)] = inst_58711);

return statearr_58885;
})();
var statearr_58886_58953 = state_58830__$1;
(statearr_58886_58953[(2)] = null);

(statearr_58886_58953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (11))){
var inst_58731 = (state_58830[(7)]);
var inst_58711 = (state_58830[(17)]);
var inst_58731__$1 = cljs.core.seq.call(null,inst_58711);
var state_58830__$1 = (function (){var statearr_58887 = state_58830;
(statearr_58887[(7)] = inst_58731__$1);

return statearr_58887;
})();
if(inst_58731__$1){
var statearr_58888_58954 = state_58830__$1;
(statearr_58888_58954[(1)] = (16));

} else {
var statearr_58889_58955 = state_58830__$1;
(statearr_58889_58955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (9))){
var inst_58759 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58890_58956 = state_58830__$1;
(statearr_58890_58956[(2)] = inst_58759);

(statearr_58890_58956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (5))){
var inst_58709 = cljs.core.deref.call(null,cs);
var inst_58710 = cljs.core.seq.call(null,inst_58709);
var inst_58711 = inst_58710;
var inst_58712 = null;
var inst_58713 = (0);
var inst_58714 = (0);
var state_58830__$1 = (function (){var statearr_58891 = state_58830;
(statearr_58891[(14)] = inst_58714);

(statearr_58891[(15)] = inst_58712);

(statearr_58891[(16)] = inst_58713);

(statearr_58891[(17)] = inst_58711);

return statearr_58891;
})();
var statearr_58892_58957 = state_58830__$1;
(statearr_58892_58957[(2)] = null);

(statearr_58892_58957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (14))){
var state_58830__$1 = state_58830;
var statearr_58893_58958 = state_58830__$1;
(statearr_58893_58958[(2)] = null);

(statearr_58893_58958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (45))){
var inst_58820 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58894_58959 = state_58830__$1;
(statearr_58894_58959[(2)] = inst_58820);

(statearr_58894_58959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (26))){
var inst_58762 = (state_58830[(29)]);
var inst_58816 = (state_58830[(2)]);
var inst_58817 = cljs.core.seq.call(null,inst_58762);
var state_58830__$1 = (function (){var statearr_58895 = state_58830;
(statearr_58895[(31)] = inst_58816);

return statearr_58895;
})();
if(inst_58817){
var statearr_58896_58960 = state_58830__$1;
(statearr_58896_58960[(1)] = (42));

} else {
var statearr_58897_58961 = state_58830__$1;
(statearr_58897_58961[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (16))){
var inst_58731 = (state_58830[(7)]);
var inst_58733 = cljs.core.chunked_seq_QMARK_.call(null,inst_58731);
var state_58830__$1 = state_58830;
if(inst_58733){
var statearr_58898_58962 = state_58830__$1;
(statearr_58898_58962[(1)] = (19));

} else {
var statearr_58899_58963 = state_58830__$1;
(statearr_58899_58963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (38))){
var inst_58809 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58900_58964 = state_58830__$1;
(statearr_58900_58964[(2)] = inst_58809);

(statearr_58900_58964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (30))){
var state_58830__$1 = state_58830;
var statearr_58901_58965 = state_58830__$1;
(statearr_58901_58965[(2)] = null);

(statearr_58901_58965[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (10))){
var inst_58714 = (state_58830[(14)]);
var inst_58712 = (state_58830[(15)]);
var inst_58720 = cljs.core._nth.call(null,inst_58712,inst_58714);
var inst_58721 = cljs.core.nth.call(null,inst_58720,(0),null);
var inst_58722 = cljs.core.nth.call(null,inst_58720,(1),null);
var state_58830__$1 = (function (){var statearr_58902 = state_58830;
(statearr_58902[(26)] = inst_58721);

return statearr_58902;
})();
if(cljs.core.truth_(inst_58722)){
var statearr_58903_58966 = state_58830__$1;
(statearr_58903_58966[(1)] = (13));

} else {
var statearr_58904_58967 = state_58830__$1;
(statearr_58904_58967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (18))){
var inst_58755 = (state_58830[(2)]);
var state_58830__$1 = state_58830;
var statearr_58905_58968 = state_58830__$1;
(statearr_58905_58968[(2)] = inst_58755);

(statearr_58905_58968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (42))){
var state_58830__$1 = state_58830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58830__$1,(45),dchan);
} else {
if((state_val_58831 === (37))){
var inst_58789 = (state_58830[(25)]);
var inst_58798 = (state_58830[(23)]);
var inst_58702 = (state_58830[(12)]);
var inst_58798__$1 = cljs.core.first.call(null,inst_58789);
var inst_58799 = cljs.core.async.put_BANG_.call(null,inst_58798__$1,inst_58702,done);
var state_58830__$1 = (function (){var statearr_58906 = state_58830;
(statearr_58906[(23)] = inst_58798__$1);

return statearr_58906;
})();
if(cljs.core.truth_(inst_58799)){
var statearr_58907_58969 = state_58830__$1;
(statearr_58907_58969[(1)] = (39));

} else {
var statearr_58908_58970 = state_58830__$1;
(statearr_58908_58970[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58831 === (8))){
var inst_58714 = (state_58830[(14)]);
var inst_58713 = (state_58830[(16)]);
var inst_58716 = (inst_58714 < inst_58713);
var inst_58717 = inst_58716;
var state_58830__$1 = state_58830;
if(cljs.core.truth_(inst_58717)){
var statearr_58909_58971 = state_58830__$1;
(statearr_58909_58971[(1)] = (10));

} else {
var statearr_58910_58972 = state_58830__$1;
(statearr_58910_58972[(1)] = (11));

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
});})(c__7050__auto___58918,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___58918,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_58914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58914[(0)] = state_machine__6995__auto__);

(statearr_58914[(1)] = (1));

return statearr_58914;
});
var state_machine__6995__auto____1 = (function (state_58830){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_58830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e58915){if((e58915 instanceof Object)){
var ex__6998__auto__ = e58915;
var statearr_58916_58973 = state_58830;
(statearr_58916_58973[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58974 = state_58830;
state_58830 = G__58974;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_58830){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_58830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___58918,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_58917 = f__7051__auto__.call(null);
(statearr_58917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___58918);

return statearr_58917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___58918,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj58976 = {};
return obj58976;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__58977){
var map__58982 = p__58977;
var map__58982__$1 = ((cljs.core.seq_QMARK_.call(null,map__58982))?cljs.core.apply.call(null,cljs.core.hash_map,map__58982):map__58982);
var opts = map__58982__$1;
var statearr_58983_58986 = state;
(statearr_58983_58986[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__58982,map__58982__$1,opts){
return (function (val){
var statearr_58984_58987 = state;
(statearr_58984_58987[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__58982,map__58982__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_58985_58988 = state;
(statearr_58985_58988[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__58977 = null;
if (arguments.length > 3) {
  p__58977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__58977);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__58989){
var state = cljs.core.first(arglist__58989);
arglist__58989 = cljs.core.next(arglist__58989);
var cont_block = cljs.core.first(arglist__58989);
arglist__58989 = cljs.core.next(arglist__58989);
var ports = cljs.core.first(arglist__58989);
var p__58977 = cljs.core.rest(arglist__58989);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__58977);
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
if(typeof cljs.core.async.t59109 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59109 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59110){
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
this.meta59110 = meta59110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59109.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t59109.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t59109.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t59109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59111){
var self__ = this;
var _59111__$1 = this;
return self__.meta59110;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59111,meta59110__$1){
var self__ = this;
var _59111__$1 = this;
return (new cljs.core.async.t59109(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59110__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t59109.cljs$lang$type = true;

cljs.core.async.t59109.cljs$lang$ctorStr = "cljs.core.async/t59109";

cljs.core.async.t59109.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59109");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t59109 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t59109(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59110){
return (new cljs.core.async.t59109(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59110));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t59109(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___59228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59181){
var state_val_59182 = (state_59181[(1)]);
if((state_val_59182 === (7))){
var inst_59125 = (state_59181[(7)]);
var inst_59130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59125);
var state_59181__$1 = state_59181;
var statearr_59183_59229 = state_59181__$1;
(statearr_59183_59229[(2)] = inst_59130);

(statearr_59183_59229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (20))){
var inst_59140 = (state_59181[(8)]);
var state_59181__$1 = state_59181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59181__$1,(23),out,inst_59140);
} else {
if((state_val_59182 === (1))){
var inst_59115 = (state_59181[(9)]);
var inst_59115__$1 = calc_state.call(null);
var inst_59116 = cljs.core.seq_QMARK_.call(null,inst_59115__$1);
var state_59181__$1 = (function (){var statearr_59184 = state_59181;
(statearr_59184[(9)] = inst_59115__$1);

return statearr_59184;
})();
if(inst_59116){
var statearr_59185_59230 = state_59181__$1;
(statearr_59185_59230[(1)] = (2));

} else {
var statearr_59186_59231 = state_59181__$1;
(statearr_59186_59231[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (24))){
var inst_59133 = (state_59181[(10)]);
var inst_59125 = inst_59133;
var state_59181__$1 = (function (){var statearr_59187 = state_59181;
(statearr_59187[(7)] = inst_59125);

return statearr_59187;
})();
var statearr_59188_59232 = state_59181__$1;
(statearr_59188_59232[(2)] = null);

(statearr_59188_59232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (4))){
var inst_59115 = (state_59181[(9)]);
var inst_59121 = (state_59181[(2)]);
var inst_59122 = cljs.core.get.call(null,inst_59121,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59123 = cljs.core.get.call(null,inst_59121,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59124 = cljs.core.get.call(null,inst_59121,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59125 = inst_59115;
var state_59181__$1 = (function (){var statearr_59189 = state_59181;
(statearr_59189[(7)] = inst_59125);

(statearr_59189[(11)] = inst_59124);

(statearr_59189[(12)] = inst_59123);

(statearr_59189[(13)] = inst_59122);

return statearr_59189;
})();
var statearr_59190_59233 = state_59181__$1;
(statearr_59190_59233[(2)] = null);

(statearr_59190_59233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (15))){
var state_59181__$1 = state_59181;
var statearr_59191_59234 = state_59181__$1;
(statearr_59191_59234[(2)] = null);

(statearr_59191_59234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (21))){
var inst_59133 = (state_59181[(10)]);
var inst_59125 = inst_59133;
var state_59181__$1 = (function (){var statearr_59192 = state_59181;
(statearr_59192[(7)] = inst_59125);

return statearr_59192;
})();
var statearr_59193_59235 = state_59181__$1;
(statearr_59193_59235[(2)] = null);

(statearr_59193_59235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (13))){
var inst_59177 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
var statearr_59194_59236 = state_59181__$1;
(statearr_59194_59236[(2)] = inst_59177);

(statearr_59194_59236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (22))){
var inst_59175 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
var statearr_59195_59237 = state_59181__$1;
(statearr_59195_59237[(2)] = inst_59175);

(statearr_59195_59237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (6))){
var inst_59179 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59181__$1,inst_59179);
} else {
if((state_val_59182 === (25))){
var state_59181__$1 = state_59181;
var statearr_59196_59238 = state_59181__$1;
(statearr_59196_59238[(2)] = null);

(statearr_59196_59238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (17))){
var inst_59155 = (state_59181[(14)]);
var state_59181__$1 = state_59181;
var statearr_59197_59239 = state_59181__$1;
(statearr_59197_59239[(2)] = inst_59155);

(statearr_59197_59239[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (3))){
var inst_59115 = (state_59181[(9)]);
var state_59181__$1 = state_59181;
var statearr_59198_59240 = state_59181__$1;
(statearr_59198_59240[(2)] = inst_59115);

(statearr_59198_59240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (12))){
var inst_59136 = (state_59181[(15)]);
var inst_59141 = (state_59181[(16)]);
var inst_59155 = (state_59181[(14)]);
var inst_59155__$1 = inst_59136.call(null,inst_59141);
var state_59181__$1 = (function (){var statearr_59199 = state_59181;
(statearr_59199[(14)] = inst_59155__$1);

return statearr_59199;
})();
if(cljs.core.truth_(inst_59155__$1)){
var statearr_59200_59241 = state_59181__$1;
(statearr_59200_59241[(1)] = (17));

} else {
var statearr_59201_59242 = state_59181__$1;
(statearr_59201_59242[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (2))){
var inst_59115 = (state_59181[(9)]);
var inst_59118 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59115);
var state_59181__$1 = state_59181;
var statearr_59202_59243 = state_59181__$1;
(statearr_59202_59243[(2)] = inst_59118);

(statearr_59202_59243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (23))){
var inst_59166 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
if(cljs.core.truth_(inst_59166)){
var statearr_59203_59244 = state_59181__$1;
(statearr_59203_59244[(1)] = (24));

} else {
var statearr_59204_59245 = state_59181__$1;
(statearr_59204_59245[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (19))){
var inst_59163 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
if(cljs.core.truth_(inst_59163)){
var statearr_59205_59246 = state_59181__$1;
(statearr_59205_59246[(1)] = (20));

} else {
var statearr_59206_59247 = state_59181__$1;
(statearr_59206_59247[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (11))){
var inst_59140 = (state_59181[(8)]);
var inst_59146 = (inst_59140 == null);
var state_59181__$1 = state_59181;
if(cljs.core.truth_(inst_59146)){
var statearr_59207_59248 = state_59181__$1;
(statearr_59207_59248[(1)] = (14));

} else {
var statearr_59208_59249 = state_59181__$1;
(statearr_59208_59249[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (9))){
var inst_59133 = (state_59181[(10)]);
var inst_59133__$1 = (state_59181[(2)]);
var inst_59134 = cljs.core.get.call(null,inst_59133__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59135 = cljs.core.get.call(null,inst_59133__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59136 = cljs.core.get.call(null,inst_59133__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_59181__$1 = (function (){var statearr_59209 = state_59181;
(statearr_59209[(10)] = inst_59133__$1);

(statearr_59209[(15)] = inst_59136);

(statearr_59209[(17)] = inst_59135);

return statearr_59209;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59181__$1,(10),inst_59134);
} else {
if((state_val_59182 === (5))){
var inst_59125 = (state_59181[(7)]);
var inst_59128 = cljs.core.seq_QMARK_.call(null,inst_59125);
var state_59181__$1 = state_59181;
if(inst_59128){
var statearr_59210_59250 = state_59181__$1;
(statearr_59210_59250[(1)] = (7));

} else {
var statearr_59211_59251 = state_59181__$1;
(statearr_59211_59251[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (14))){
var inst_59141 = (state_59181[(16)]);
var inst_59148 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59141);
var state_59181__$1 = state_59181;
var statearr_59212_59252 = state_59181__$1;
(statearr_59212_59252[(2)] = inst_59148);

(statearr_59212_59252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (26))){
var inst_59171 = (state_59181[(2)]);
var state_59181__$1 = state_59181;
var statearr_59213_59253 = state_59181__$1;
(statearr_59213_59253[(2)] = inst_59171);

(statearr_59213_59253[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (16))){
var inst_59151 = (state_59181[(2)]);
var inst_59152 = calc_state.call(null);
var inst_59125 = inst_59152;
var state_59181__$1 = (function (){var statearr_59214 = state_59181;
(statearr_59214[(7)] = inst_59125);

(statearr_59214[(18)] = inst_59151);

return statearr_59214;
})();
var statearr_59215_59254 = state_59181__$1;
(statearr_59215_59254[(2)] = null);

(statearr_59215_59254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (10))){
var inst_59141 = (state_59181[(16)]);
var inst_59140 = (state_59181[(8)]);
var inst_59139 = (state_59181[(2)]);
var inst_59140__$1 = cljs.core.nth.call(null,inst_59139,(0),null);
var inst_59141__$1 = cljs.core.nth.call(null,inst_59139,(1),null);
var inst_59142 = (inst_59140__$1 == null);
var inst_59143 = cljs.core._EQ_.call(null,inst_59141__$1,change);
var inst_59144 = (inst_59142) || (inst_59143);
var state_59181__$1 = (function (){var statearr_59216 = state_59181;
(statearr_59216[(16)] = inst_59141__$1);

(statearr_59216[(8)] = inst_59140__$1);

return statearr_59216;
})();
if(cljs.core.truth_(inst_59144)){
var statearr_59217_59255 = state_59181__$1;
(statearr_59217_59255[(1)] = (11));

} else {
var statearr_59218_59256 = state_59181__$1;
(statearr_59218_59256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (18))){
var inst_59136 = (state_59181[(15)]);
var inst_59141 = (state_59181[(16)]);
var inst_59135 = (state_59181[(17)]);
var inst_59158 = cljs.core.empty_QMARK_.call(null,inst_59136);
var inst_59159 = inst_59135.call(null,inst_59141);
var inst_59160 = cljs.core.not.call(null,inst_59159);
var inst_59161 = (inst_59158) && (inst_59160);
var state_59181__$1 = state_59181;
var statearr_59219_59257 = state_59181__$1;
(statearr_59219_59257[(2)] = inst_59161);

(statearr_59219_59257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59182 === (8))){
var inst_59125 = (state_59181[(7)]);
var state_59181__$1 = state_59181;
var statearr_59220_59258 = state_59181__$1;
(statearr_59220_59258[(2)] = inst_59125);

(statearr_59220_59258[(1)] = (9));


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
});})(c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_59224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59224[(0)] = state_machine__6995__auto__);

(statearr_59224[(1)] = (1));

return statearr_59224;
});
var state_machine__6995__auto____1 = (function (state_59181){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_59181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e59225){if((e59225 instanceof Object)){
var ex__6998__auto__ = e59225;
var statearr_59226_59259 = state_59181;
(statearr_59226_59259[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59260 = state_59181;
state_59181 = G__59260;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_59181){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_59181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_59227 = f__7051__auto__.call(null);
(statearr_59227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___59228);

return statearr_59227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___59228,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj59262 = {};
return obj59262;
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
return (function (p1__59263_SHARP_){
if(cljs.core.truth_(p1__59263_SHARP_.call(null,topic))){
return p1__59263_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59263_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t59386 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59386 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta59387){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta59387 = meta59387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59386.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t59386.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t59386.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t59386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t59386.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t59386.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t59386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t59386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59388){
var self__ = this;
var _59388__$1 = this;
return self__.meta59387;
});})(mults,ensure_mult))
;

cljs.core.async.t59386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59388,meta59387__$1){
var self__ = this;
var _59388__$1 = this;
return (new cljs.core.async.t59386(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta59387__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t59386.cljs$lang$type = true;

cljs.core.async.t59386.cljs$lang$ctorStr = "cljs.core.async/t59386";

cljs.core.async.t59386.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59386");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t59386 = ((function (mults,ensure_mult){
return (function __GT_t59386(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59387){
return (new cljs.core.async.t59386(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59387));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t59386(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___59508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___59508,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___59508,mults,ensure_mult,p){
return (function (state_59460){
var state_val_59461 = (state_59460[(1)]);
if((state_val_59461 === (7))){
var inst_59456 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59462_59509 = state_59460__$1;
(statearr_59462_59509[(2)] = inst_59456);

(statearr_59462_59509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (20))){
var state_59460__$1 = state_59460;
var statearr_59463_59510 = state_59460__$1;
(statearr_59463_59510[(2)] = null);

(statearr_59463_59510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (1))){
var state_59460__$1 = state_59460;
var statearr_59464_59511 = state_59460__$1;
(statearr_59464_59511[(2)] = null);

(statearr_59464_59511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (24))){
var inst_59439 = (state_59460[(7)]);
var inst_59448 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59439);
var state_59460__$1 = state_59460;
var statearr_59465_59512 = state_59460__$1;
(statearr_59465_59512[(2)] = inst_59448);

(statearr_59465_59512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (4))){
var inst_59391 = (state_59460[(8)]);
var inst_59391__$1 = (state_59460[(2)]);
var inst_59392 = (inst_59391__$1 == null);
var state_59460__$1 = (function (){var statearr_59466 = state_59460;
(statearr_59466[(8)] = inst_59391__$1);

return statearr_59466;
})();
if(cljs.core.truth_(inst_59392)){
var statearr_59467_59513 = state_59460__$1;
(statearr_59467_59513[(1)] = (5));

} else {
var statearr_59468_59514 = state_59460__$1;
(statearr_59468_59514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (15))){
var inst_59433 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59469_59515 = state_59460__$1;
(statearr_59469_59515[(2)] = inst_59433);

(statearr_59469_59515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (21))){
var inst_59453 = (state_59460[(2)]);
var state_59460__$1 = (function (){var statearr_59470 = state_59460;
(statearr_59470[(9)] = inst_59453);

return statearr_59470;
})();
var statearr_59471_59516 = state_59460__$1;
(statearr_59471_59516[(2)] = null);

(statearr_59471_59516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (13))){
var inst_59415 = (state_59460[(10)]);
var inst_59417 = cljs.core.chunked_seq_QMARK_.call(null,inst_59415);
var state_59460__$1 = state_59460;
if(inst_59417){
var statearr_59472_59517 = state_59460__$1;
(statearr_59472_59517[(1)] = (16));

} else {
var statearr_59473_59518 = state_59460__$1;
(statearr_59473_59518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (22))){
var inst_59445 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
if(cljs.core.truth_(inst_59445)){
var statearr_59474_59519 = state_59460__$1;
(statearr_59474_59519[(1)] = (23));

} else {
var statearr_59475_59520 = state_59460__$1;
(statearr_59475_59520[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (6))){
var inst_59441 = (state_59460[(11)]);
var inst_59391 = (state_59460[(8)]);
var inst_59439 = (state_59460[(7)]);
var inst_59439__$1 = topic_fn.call(null,inst_59391);
var inst_59440 = cljs.core.deref.call(null,mults);
var inst_59441__$1 = cljs.core.get.call(null,inst_59440,inst_59439__$1);
var state_59460__$1 = (function (){var statearr_59476 = state_59460;
(statearr_59476[(11)] = inst_59441__$1);

(statearr_59476[(7)] = inst_59439__$1);

return statearr_59476;
})();
if(cljs.core.truth_(inst_59441__$1)){
var statearr_59477_59521 = state_59460__$1;
(statearr_59477_59521[(1)] = (19));

} else {
var statearr_59478_59522 = state_59460__$1;
(statearr_59478_59522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (25))){
var inst_59450 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59479_59523 = state_59460__$1;
(statearr_59479_59523[(2)] = inst_59450);

(statearr_59479_59523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (17))){
var inst_59415 = (state_59460[(10)]);
var inst_59424 = cljs.core.first.call(null,inst_59415);
var inst_59425 = cljs.core.async.muxch_STAR_.call(null,inst_59424);
var inst_59426 = cljs.core.async.close_BANG_.call(null,inst_59425);
var inst_59427 = cljs.core.next.call(null,inst_59415);
var inst_59401 = inst_59427;
var inst_59402 = null;
var inst_59403 = (0);
var inst_59404 = (0);
var state_59460__$1 = (function (){var statearr_59480 = state_59460;
(statearr_59480[(12)] = inst_59426);

(statearr_59480[(13)] = inst_59404);

(statearr_59480[(14)] = inst_59402);

(statearr_59480[(15)] = inst_59403);

(statearr_59480[(16)] = inst_59401);

return statearr_59480;
})();
var statearr_59481_59524 = state_59460__$1;
(statearr_59481_59524[(2)] = null);

(statearr_59481_59524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (3))){
var inst_59458 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59460__$1,inst_59458);
} else {
if((state_val_59461 === (12))){
var inst_59435 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59482_59525 = state_59460__$1;
(statearr_59482_59525[(2)] = inst_59435);

(statearr_59482_59525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (2))){
var state_59460__$1 = state_59460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59460__$1,(4),ch);
} else {
if((state_val_59461 === (23))){
var state_59460__$1 = state_59460;
var statearr_59483_59526 = state_59460__$1;
(statearr_59483_59526[(2)] = null);

(statearr_59483_59526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (19))){
var inst_59441 = (state_59460[(11)]);
var inst_59391 = (state_59460[(8)]);
var inst_59443 = cljs.core.async.muxch_STAR_.call(null,inst_59441);
var state_59460__$1 = state_59460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59460__$1,(22),inst_59443,inst_59391);
} else {
if((state_val_59461 === (11))){
var inst_59415 = (state_59460[(10)]);
var inst_59401 = (state_59460[(16)]);
var inst_59415__$1 = cljs.core.seq.call(null,inst_59401);
var state_59460__$1 = (function (){var statearr_59484 = state_59460;
(statearr_59484[(10)] = inst_59415__$1);

return statearr_59484;
})();
if(inst_59415__$1){
var statearr_59485_59527 = state_59460__$1;
(statearr_59485_59527[(1)] = (13));

} else {
var statearr_59486_59528 = state_59460__$1;
(statearr_59486_59528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (9))){
var inst_59437 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59487_59529 = state_59460__$1;
(statearr_59487_59529[(2)] = inst_59437);

(statearr_59487_59529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (5))){
var inst_59398 = cljs.core.deref.call(null,mults);
var inst_59399 = cljs.core.vals.call(null,inst_59398);
var inst_59400 = cljs.core.seq.call(null,inst_59399);
var inst_59401 = inst_59400;
var inst_59402 = null;
var inst_59403 = (0);
var inst_59404 = (0);
var state_59460__$1 = (function (){var statearr_59488 = state_59460;
(statearr_59488[(13)] = inst_59404);

(statearr_59488[(14)] = inst_59402);

(statearr_59488[(15)] = inst_59403);

(statearr_59488[(16)] = inst_59401);

return statearr_59488;
})();
var statearr_59489_59530 = state_59460__$1;
(statearr_59489_59530[(2)] = null);

(statearr_59489_59530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (14))){
var state_59460__$1 = state_59460;
var statearr_59493_59531 = state_59460__$1;
(statearr_59493_59531[(2)] = null);

(statearr_59493_59531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (16))){
var inst_59415 = (state_59460[(10)]);
var inst_59419 = cljs.core.chunk_first.call(null,inst_59415);
var inst_59420 = cljs.core.chunk_rest.call(null,inst_59415);
var inst_59421 = cljs.core.count.call(null,inst_59419);
var inst_59401 = inst_59420;
var inst_59402 = inst_59419;
var inst_59403 = inst_59421;
var inst_59404 = (0);
var state_59460__$1 = (function (){var statearr_59494 = state_59460;
(statearr_59494[(13)] = inst_59404);

(statearr_59494[(14)] = inst_59402);

(statearr_59494[(15)] = inst_59403);

(statearr_59494[(16)] = inst_59401);

return statearr_59494;
})();
var statearr_59495_59532 = state_59460__$1;
(statearr_59495_59532[(2)] = null);

(statearr_59495_59532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (10))){
var inst_59404 = (state_59460[(13)]);
var inst_59402 = (state_59460[(14)]);
var inst_59403 = (state_59460[(15)]);
var inst_59401 = (state_59460[(16)]);
var inst_59409 = cljs.core._nth.call(null,inst_59402,inst_59404);
var inst_59410 = cljs.core.async.muxch_STAR_.call(null,inst_59409);
var inst_59411 = cljs.core.async.close_BANG_.call(null,inst_59410);
var inst_59412 = (inst_59404 + (1));
var tmp59490 = inst_59402;
var tmp59491 = inst_59403;
var tmp59492 = inst_59401;
var inst_59401__$1 = tmp59492;
var inst_59402__$1 = tmp59490;
var inst_59403__$1 = tmp59491;
var inst_59404__$1 = inst_59412;
var state_59460__$1 = (function (){var statearr_59496 = state_59460;
(statearr_59496[(17)] = inst_59411);

(statearr_59496[(13)] = inst_59404__$1);

(statearr_59496[(14)] = inst_59402__$1);

(statearr_59496[(15)] = inst_59403__$1);

(statearr_59496[(16)] = inst_59401__$1);

return statearr_59496;
})();
var statearr_59497_59533 = state_59460__$1;
(statearr_59497_59533[(2)] = null);

(statearr_59497_59533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (18))){
var inst_59430 = (state_59460[(2)]);
var state_59460__$1 = state_59460;
var statearr_59498_59534 = state_59460__$1;
(statearr_59498_59534[(2)] = inst_59430);

(statearr_59498_59534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59461 === (8))){
var inst_59404 = (state_59460[(13)]);
var inst_59403 = (state_59460[(15)]);
var inst_59406 = (inst_59404 < inst_59403);
var inst_59407 = inst_59406;
var state_59460__$1 = state_59460;
if(cljs.core.truth_(inst_59407)){
var statearr_59499_59535 = state_59460__$1;
(statearr_59499_59535[(1)] = (10));

} else {
var statearr_59500_59536 = state_59460__$1;
(statearr_59500_59536[(1)] = (11));

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
});})(c__7050__auto___59508,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___59508,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_59504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59504[(0)] = state_machine__6995__auto__);

(statearr_59504[(1)] = (1));

return statearr_59504;
});
var state_machine__6995__auto____1 = (function (state_59460){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_59460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e59505){if((e59505 instanceof Object)){
var ex__6998__auto__ = e59505;
var statearr_59506_59537 = state_59460;
(statearr_59506_59537[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59538 = state_59460;
state_59460 = G__59538;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_59460){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_59460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___59508,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_59507 = f__7051__auto__.call(null);
(statearr_59507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___59508);

return statearr_59507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___59508,mults,ensure_mult,p))
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
var c__7050__auto___59675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_59645){
var state_val_59646 = (state_59645[(1)]);
if((state_val_59646 === (7))){
var state_59645__$1 = state_59645;
var statearr_59647_59676 = state_59645__$1;
(statearr_59647_59676[(2)] = null);

(statearr_59647_59676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (1))){
var state_59645__$1 = state_59645;
var statearr_59648_59677 = state_59645__$1;
(statearr_59648_59677[(2)] = null);

(statearr_59648_59677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (4))){
var inst_59609 = (state_59645[(7)]);
var inst_59611 = (inst_59609 < cnt);
var state_59645__$1 = state_59645;
if(cljs.core.truth_(inst_59611)){
var statearr_59649_59678 = state_59645__$1;
(statearr_59649_59678[(1)] = (6));

} else {
var statearr_59650_59679 = state_59645__$1;
(statearr_59650_59679[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (15))){
var inst_59641 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59651_59680 = state_59645__$1;
(statearr_59651_59680[(2)] = inst_59641);

(statearr_59651_59680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (13))){
var inst_59634 = cljs.core.async.close_BANG_.call(null,out);
var state_59645__$1 = state_59645;
var statearr_59652_59681 = state_59645__$1;
(statearr_59652_59681[(2)] = inst_59634);

(statearr_59652_59681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (6))){
var state_59645__$1 = state_59645;
var statearr_59653_59682 = state_59645__$1;
(statearr_59653_59682[(2)] = null);

(statearr_59653_59682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (3))){
var inst_59643 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59645__$1,inst_59643);
} else {
if((state_val_59646 === (12))){
var inst_59631 = (state_59645[(8)]);
var inst_59631__$1 = (state_59645[(2)]);
var inst_59632 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59631__$1);
var state_59645__$1 = (function (){var statearr_59654 = state_59645;
(statearr_59654[(8)] = inst_59631__$1);

return statearr_59654;
})();
if(cljs.core.truth_(inst_59632)){
var statearr_59655_59683 = state_59645__$1;
(statearr_59655_59683[(1)] = (13));

} else {
var statearr_59656_59684 = state_59645__$1;
(statearr_59656_59684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (2))){
var inst_59608 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_59609 = (0);
var state_59645__$1 = (function (){var statearr_59657 = state_59645;
(statearr_59657[(7)] = inst_59609);

(statearr_59657[(9)] = inst_59608);

return statearr_59657;
})();
var statearr_59658_59685 = state_59645__$1;
(statearr_59658_59685[(2)] = null);

(statearr_59658_59685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (11))){
var inst_59609 = (state_59645[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59645,(10),Object,null,(9));
var inst_59618 = chs__$1.call(null,inst_59609);
var inst_59619 = done.call(null,inst_59609);
var inst_59620 = cljs.core.async.take_BANG_.call(null,inst_59618,inst_59619);
var state_59645__$1 = state_59645;
var statearr_59659_59686 = state_59645__$1;
(statearr_59659_59686[(2)] = inst_59620);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (9))){
var inst_59609 = (state_59645[(7)]);
var inst_59622 = (state_59645[(2)]);
var inst_59623 = (inst_59609 + (1));
var inst_59609__$1 = inst_59623;
var state_59645__$1 = (function (){var statearr_59660 = state_59645;
(statearr_59660[(10)] = inst_59622);

(statearr_59660[(7)] = inst_59609__$1);

return statearr_59660;
})();
var statearr_59661_59687 = state_59645__$1;
(statearr_59661_59687[(2)] = null);

(statearr_59661_59687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (5))){
var inst_59629 = (state_59645[(2)]);
var state_59645__$1 = (function (){var statearr_59662 = state_59645;
(statearr_59662[(11)] = inst_59629);

return statearr_59662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59645__$1,(12),dchan);
} else {
if((state_val_59646 === (14))){
var inst_59631 = (state_59645[(8)]);
var inst_59636 = cljs.core.apply.call(null,f,inst_59631);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59645__$1,(16),out,inst_59636);
} else {
if((state_val_59646 === (16))){
var inst_59638 = (state_59645[(2)]);
var state_59645__$1 = (function (){var statearr_59663 = state_59645;
(statearr_59663[(12)] = inst_59638);

return statearr_59663;
})();
var statearr_59664_59688 = state_59645__$1;
(statearr_59664_59688[(2)] = null);

(statearr_59664_59688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (10))){
var inst_59613 = (state_59645[(2)]);
var inst_59614 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_59645__$1 = (function (){var statearr_59665 = state_59645;
(statearr_59665[(13)] = inst_59613);

return statearr_59665;
})();
var statearr_59666_59689 = state_59645__$1;
(statearr_59666_59689[(2)] = inst_59614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (8))){
var inst_59627 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59667_59690 = state_59645__$1;
(statearr_59667_59690[(2)] = inst_59627);

(statearr_59667_59690[(1)] = (5));


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
});})(c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_59671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59671[(0)] = state_machine__6995__auto__);

(statearr_59671[(1)] = (1));

return statearr_59671;
});
var state_machine__6995__auto____1 = (function (state_59645){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_59645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e59672){if((e59672 instanceof Object)){
var ex__6998__auto__ = e59672;
var statearr_59673_59691 = state_59645;
(statearr_59673_59691[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59692 = state_59645;
state_59645 = G__59692;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_59645){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_59645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_59674 = f__7051__auto__.call(null);
(statearr_59674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___59675);

return statearr_59674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___59675,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___59800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___59800,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___59800,out){
return (function (state_59776){
var state_val_59777 = (state_59776[(1)]);
if((state_val_59777 === (7))){
var inst_59756 = (state_59776[(7)]);
var inst_59755 = (state_59776[(8)]);
var inst_59755__$1 = (state_59776[(2)]);
var inst_59756__$1 = cljs.core.nth.call(null,inst_59755__$1,(0),null);
var inst_59757 = cljs.core.nth.call(null,inst_59755__$1,(1),null);
var inst_59758 = (inst_59756__$1 == null);
var state_59776__$1 = (function (){var statearr_59778 = state_59776;
(statearr_59778[(7)] = inst_59756__$1);

(statearr_59778[(9)] = inst_59757);

(statearr_59778[(8)] = inst_59755__$1);

return statearr_59778;
})();
if(cljs.core.truth_(inst_59758)){
var statearr_59779_59801 = state_59776__$1;
(statearr_59779_59801[(1)] = (8));

} else {
var statearr_59780_59802 = state_59776__$1;
(statearr_59780_59802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (1))){
var inst_59747 = cljs.core.vec.call(null,chs);
var inst_59748 = inst_59747;
var state_59776__$1 = (function (){var statearr_59781 = state_59776;
(statearr_59781[(10)] = inst_59748);

return statearr_59781;
})();
var statearr_59782_59803 = state_59776__$1;
(statearr_59782_59803[(2)] = null);

(statearr_59782_59803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (4))){
var inst_59748 = (state_59776[(10)]);
var state_59776__$1 = state_59776;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59776__$1,(7),inst_59748);
} else {
if((state_val_59777 === (6))){
var inst_59772 = (state_59776[(2)]);
var state_59776__$1 = state_59776;
var statearr_59783_59804 = state_59776__$1;
(statearr_59783_59804[(2)] = inst_59772);

(statearr_59783_59804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (3))){
var inst_59774 = (state_59776[(2)]);
var state_59776__$1 = state_59776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59776__$1,inst_59774);
} else {
if((state_val_59777 === (2))){
var inst_59748 = (state_59776[(10)]);
var inst_59750 = cljs.core.count.call(null,inst_59748);
var inst_59751 = (inst_59750 > (0));
var state_59776__$1 = state_59776;
if(cljs.core.truth_(inst_59751)){
var statearr_59785_59805 = state_59776__$1;
(statearr_59785_59805[(1)] = (4));

} else {
var statearr_59786_59806 = state_59776__$1;
(statearr_59786_59806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (11))){
var inst_59748 = (state_59776[(10)]);
var inst_59765 = (state_59776[(2)]);
var tmp59784 = inst_59748;
var inst_59748__$1 = tmp59784;
var state_59776__$1 = (function (){var statearr_59787 = state_59776;
(statearr_59787[(11)] = inst_59765);

(statearr_59787[(10)] = inst_59748__$1);

return statearr_59787;
})();
var statearr_59788_59807 = state_59776__$1;
(statearr_59788_59807[(2)] = null);

(statearr_59788_59807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (9))){
var inst_59756 = (state_59776[(7)]);
var state_59776__$1 = state_59776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59776__$1,(11),out,inst_59756);
} else {
if((state_val_59777 === (5))){
var inst_59770 = cljs.core.async.close_BANG_.call(null,out);
var state_59776__$1 = state_59776;
var statearr_59789_59808 = state_59776__$1;
(statearr_59789_59808[(2)] = inst_59770);

(statearr_59789_59808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (10))){
var inst_59768 = (state_59776[(2)]);
var state_59776__$1 = state_59776;
var statearr_59790_59809 = state_59776__$1;
(statearr_59790_59809[(2)] = inst_59768);

(statearr_59790_59809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (8))){
var inst_59756 = (state_59776[(7)]);
var inst_59757 = (state_59776[(9)]);
var inst_59755 = (state_59776[(8)]);
var inst_59748 = (state_59776[(10)]);
var inst_59760 = (function (){var c = inst_59757;
var v = inst_59756;
var vec__59753 = inst_59755;
var cs = inst_59748;
return ((function (c,v,vec__59753,cs,inst_59756,inst_59757,inst_59755,inst_59748,state_val_59777,c__7050__auto___59800,out){
return (function (p1__59693_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__59693_SHARP_);
});
;})(c,v,vec__59753,cs,inst_59756,inst_59757,inst_59755,inst_59748,state_val_59777,c__7050__auto___59800,out))
})();
var inst_59761 = cljs.core.filterv.call(null,inst_59760,inst_59748);
var inst_59748__$1 = inst_59761;
var state_59776__$1 = (function (){var statearr_59791 = state_59776;
(statearr_59791[(10)] = inst_59748__$1);

return statearr_59791;
})();
var statearr_59792_59810 = state_59776__$1;
(statearr_59792_59810[(2)] = null);

(statearr_59792_59810[(1)] = (2));


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
});})(c__7050__auto___59800,out))
;
return ((function (switch__6994__auto__,c__7050__auto___59800,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_59796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59796[(0)] = state_machine__6995__auto__);

(statearr_59796[(1)] = (1));

return statearr_59796;
});
var state_machine__6995__auto____1 = (function (state_59776){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_59776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e59797){if((e59797 instanceof Object)){
var ex__6998__auto__ = e59797;
var statearr_59798_59811 = state_59776;
(statearr_59798_59811[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59812 = state_59776;
state_59776 = G__59812;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_59776){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_59776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___59800,out))
})();
var state__7052__auto__ = (function (){var statearr_59799 = f__7051__auto__.call(null);
(statearr_59799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___59800);

return statearr_59799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___59800,out))
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
var c__7050__auto___59905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___59905,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___59905,out){
return (function (state_59882){
var state_val_59883 = (state_59882[(1)]);
if((state_val_59883 === (7))){
var inst_59864 = (state_59882[(7)]);
var inst_59864__$1 = (state_59882[(2)]);
var inst_59865 = (inst_59864__$1 == null);
var inst_59866 = cljs.core.not.call(null,inst_59865);
var state_59882__$1 = (function (){var statearr_59884 = state_59882;
(statearr_59884[(7)] = inst_59864__$1);

return statearr_59884;
})();
if(inst_59866){
var statearr_59885_59906 = state_59882__$1;
(statearr_59885_59906[(1)] = (8));

} else {
var statearr_59886_59907 = state_59882__$1;
(statearr_59886_59907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (1))){
var inst_59859 = (0);
var state_59882__$1 = (function (){var statearr_59887 = state_59882;
(statearr_59887[(8)] = inst_59859);

return statearr_59887;
})();
var statearr_59888_59908 = state_59882__$1;
(statearr_59888_59908[(2)] = null);

(statearr_59888_59908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (4))){
var state_59882__$1 = state_59882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59882__$1,(7),ch);
} else {
if((state_val_59883 === (6))){
var inst_59877 = (state_59882[(2)]);
var state_59882__$1 = state_59882;
var statearr_59889_59909 = state_59882__$1;
(statearr_59889_59909[(2)] = inst_59877);

(statearr_59889_59909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (3))){
var inst_59879 = (state_59882[(2)]);
var inst_59880 = cljs.core.async.close_BANG_.call(null,out);
var state_59882__$1 = (function (){var statearr_59890 = state_59882;
(statearr_59890[(9)] = inst_59879);

return statearr_59890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59882__$1,inst_59880);
} else {
if((state_val_59883 === (2))){
var inst_59859 = (state_59882[(8)]);
var inst_59861 = (inst_59859 < n);
var state_59882__$1 = state_59882;
if(cljs.core.truth_(inst_59861)){
var statearr_59891_59910 = state_59882__$1;
(statearr_59891_59910[(1)] = (4));

} else {
var statearr_59892_59911 = state_59882__$1;
(statearr_59892_59911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (11))){
var inst_59859 = (state_59882[(8)]);
var inst_59869 = (state_59882[(2)]);
var inst_59870 = (inst_59859 + (1));
var inst_59859__$1 = inst_59870;
var state_59882__$1 = (function (){var statearr_59893 = state_59882;
(statearr_59893[(10)] = inst_59869);

(statearr_59893[(8)] = inst_59859__$1);

return statearr_59893;
})();
var statearr_59894_59912 = state_59882__$1;
(statearr_59894_59912[(2)] = null);

(statearr_59894_59912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (9))){
var state_59882__$1 = state_59882;
var statearr_59895_59913 = state_59882__$1;
(statearr_59895_59913[(2)] = null);

(statearr_59895_59913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (5))){
var state_59882__$1 = state_59882;
var statearr_59896_59914 = state_59882__$1;
(statearr_59896_59914[(2)] = null);

(statearr_59896_59914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (10))){
var inst_59874 = (state_59882[(2)]);
var state_59882__$1 = state_59882;
var statearr_59897_59915 = state_59882__$1;
(statearr_59897_59915[(2)] = inst_59874);

(statearr_59897_59915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59883 === (8))){
var inst_59864 = (state_59882[(7)]);
var state_59882__$1 = state_59882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59882__$1,(11),out,inst_59864);
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
});})(c__7050__auto___59905,out))
;
return ((function (switch__6994__auto__,c__7050__auto___59905,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_59901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59901[(0)] = state_machine__6995__auto__);

(statearr_59901[(1)] = (1));

return statearr_59901;
});
var state_machine__6995__auto____1 = (function (state_59882){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_59882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e59902){if((e59902 instanceof Object)){
var ex__6998__auto__ = e59902;
var statearr_59903_59916 = state_59882;
(statearr_59903_59916[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59917 = state_59882;
state_59882 = G__59917;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_59882){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_59882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___59905,out))
})();
var state__7052__auto__ = (function (){var statearr_59904 = f__7051__auto__.call(null);
(statearr_59904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___59905);

return statearr_59904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___59905,out))
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
if(typeof cljs.core.async.t59925 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59925 = (function (ch,f,map_LT_,meta59926){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta59926 = meta59926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t59928 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59928 = (function (fn1,_,meta59926,map_LT_,f,ch,meta59929){
this.fn1 = fn1;
this._ = _;
this.meta59926 = meta59926;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta59929 = meta59929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t59928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t59928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__59918_SHARP_){
return f1.call(null,(((p1__59918_SHARP_ == null))?null:self__.f.call(null,p1__59918_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t59928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_59930){
var self__ = this;
var _59930__$1 = this;
return self__.meta59929;
});})(___$1))
;

cljs.core.async.t59928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_59930,meta59929__$1){
var self__ = this;
var _59930__$1 = this;
return (new cljs.core.async.t59928(self__.fn1,self__._,self__.meta59926,self__.map_LT_,self__.f,self__.ch,meta59929__$1));
});})(___$1))
;

cljs.core.async.t59928.cljs$lang$type = true;

cljs.core.async.t59928.cljs$lang$ctorStr = "cljs.core.async/t59928";

cljs.core.async.t59928.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59928");
});})(___$1))
;

cljs.core.async.__GT_t59928 = ((function (___$1){
return (function __GT_t59928(fn1__$1,___$2,meta59926__$1,map_LT___$1,f__$1,ch__$1,meta59929){
return (new cljs.core.async.t59928(fn1__$1,___$2,meta59926__$1,map_LT___$1,f__$1,ch__$1,meta59929));
});})(___$1))
;

}

return (new cljs.core.async.t59928(fn1,___$1,self__.meta59926,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t59925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t59925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59927){
var self__ = this;
var _59927__$1 = this;
return self__.meta59926;
});

cljs.core.async.t59925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59927,meta59926__$1){
var self__ = this;
var _59927__$1 = this;
return (new cljs.core.async.t59925(self__.ch,self__.f,self__.map_LT_,meta59926__$1));
});

cljs.core.async.t59925.cljs$lang$type = true;

cljs.core.async.t59925.cljs$lang$ctorStr = "cljs.core.async/t59925";

cljs.core.async.t59925.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59925");
});

cljs.core.async.__GT_t59925 = (function __GT_t59925(ch__$1,f__$1,map_LT___$1,meta59926){
return (new cljs.core.async.t59925(ch__$1,f__$1,map_LT___$1,meta59926));
});

}

return (new cljs.core.async.t59925(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t59934 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59934 = (function (ch,f,map_GT_,meta59935){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta59935 = meta59935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t59934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t59934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59936){
var self__ = this;
var _59936__$1 = this;
return self__.meta59935;
});

cljs.core.async.t59934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59936,meta59935__$1){
var self__ = this;
var _59936__$1 = this;
return (new cljs.core.async.t59934(self__.ch,self__.f,self__.map_GT_,meta59935__$1));
});

cljs.core.async.t59934.cljs$lang$type = true;

cljs.core.async.t59934.cljs$lang$ctorStr = "cljs.core.async/t59934";

cljs.core.async.t59934.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59934");
});

cljs.core.async.__GT_t59934 = (function __GT_t59934(ch__$1,f__$1,map_GT___$1,meta59935){
return (new cljs.core.async.t59934(ch__$1,f__$1,map_GT___$1,meta59935));
});

}

return (new cljs.core.async.t59934(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t59940 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t59940 = (function (ch,p,filter_GT_,meta59941){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta59941 = meta59941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t59940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t59940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59942){
var self__ = this;
var _59942__$1 = this;
return self__.meta59941;
});

cljs.core.async.t59940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59942,meta59941__$1){
var self__ = this;
var _59942__$1 = this;
return (new cljs.core.async.t59940(self__.ch,self__.p,self__.filter_GT_,meta59941__$1));
});

cljs.core.async.t59940.cljs$lang$type = true;

cljs.core.async.t59940.cljs$lang$ctorStr = "cljs.core.async/t59940";

cljs.core.async.t59940.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t59940");
});

cljs.core.async.__GT_t59940 = (function __GT_t59940(ch__$1,p__$1,filter_GT___$1,meta59941){
return (new cljs.core.async.t59940(ch__$1,p__$1,filter_GT___$1,meta59941));
});

}

return (new cljs.core.async.t59940(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/nested/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___60025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___60025,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___60025,out){
return (function (state_60004){
var state_val_60005 = (state_60004[(1)]);
if((state_val_60005 === (7))){
var inst_60000 = (state_60004[(2)]);
var state_60004__$1 = state_60004;
var statearr_60006_60026 = state_60004__$1;
(statearr_60006_60026[(2)] = inst_60000);

(statearr_60006_60026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (1))){
var state_60004__$1 = state_60004;
var statearr_60007_60027 = state_60004__$1;
(statearr_60007_60027[(2)] = null);

(statearr_60007_60027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (4))){
var inst_59986 = (state_60004[(7)]);
var inst_59986__$1 = (state_60004[(2)]);
var inst_59987 = (inst_59986__$1 == null);
var state_60004__$1 = (function (){var statearr_60008 = state_60004;
(statearr_60008[(7)] = inst_59986__$1);

return statearr_60008;
})();
if(cljs.core.truth_(inst_59987)){
var statearr_60009_60028 = state_60004__$1;
(statearr_60009_60028[(1)] = (5));

} else {
var statearr_60010_60029 = state_60004__$1;
(statearr_60010_60029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (6))){
var inst_59986 = (state_60004[(7)]);
var inst_59991 = p.call(null,inst_59986);
var state_60004__$1 = state_60004;
if(cljs.core.truth_(inst_59991)){
var statearr_60011_60030 = state_60004__$1;
(statearr_60011_60030[(1)] = (8));

} else {
var statearr_60012_60031 = state_60004__$1;
(statearr_60012_60031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (3))){
var inst_60002 = (state_60004[(2)]);
var state_60004__$1 = state_60004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60004__$1,inst_60002);
} else {
if((state_val_60005 === (2))){
var state_60004__$1 = state_60004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60004__$1,(4),ch);
} else {
if((state_val_60005 === (11))){
var inst_59994 = (state_60004[(2)]);
var state_60004__$1 = state_60004;
var statearr_60013_60032 = state_60004__$1;
(statearr_60013_60032[(2)] = inst_59994);

(statearr_60013_60032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (9))){
var state_60004__$1 = state_60004;
var statearr_60014_60033 = state_60004__$1;
(statearr_60014_60033[(2)] = null);

(statearr_60014_60033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (5))){
var inst_59989 = cljs.core.async.close_BANG_.call(null,out);
var state_60004__$1 = state_60004;
var statearr_60015_60034 = state_60004__$1;
(statearr_60015_60034[(2)] = inst_59989);

(statearr_60015_60034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (10))){
var inst_59997 = (state_60004[(2)]);
var state_60004__$1 = (function (){var statearr_60016 = state_60004;
(statearr_60016[(8)] = inst_59997);

return statearr_60016;
})();
var statearr_60017_60035 = state_60004__$1;
(statearr_60017_60035[(2)] = null);

(statearr_60017_60035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60005 === (8))){
var inst_59986 = (state_60004[(7)]);
var state_60004__$1 = state_60004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60004__$1,(11),out,inst_59986);
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
});})(c__7050__auto___60025,out))
;
return ((function (switch__6994__auto__,c__7050__auto___60025,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_60021 = [null,null,null,null,null,null,null,null,null];
(statearr_60021[(0)] = state_machine__6995__auto__);

(statearr_60021[(1)] = (1));

return statearr_60021;
});
var state_machine__6995__auto____1 = (function (state_60004){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_60004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e60022){if((e60022 instanceof Object)){
var ex__6998__auto__ = e60022;
var statearr_60023_60036 = state_60004;
(statearr_60023_60036[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60037 = state_60004;
state_60004 = G__60037;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_60004){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_60004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___60025,out))
})();
var state__7052__auto__ = (function (){var statearr_60024 = f__7051__auto__.call(null);
(statearr_60024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___60025);

return statearr_60024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___60025,out))
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
return (function (state_60203){
var state_val_60204 = (state_60203[(1)]);
if((state_val_60204 === (7))){
var inst_60199 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
var statearr_60205_60246 = state_60203__$1;
(statearr_60205_60246[(2)] = inst_60199);

(statearr_60205_60246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (20))){
var inst_60169 = (state_60203[(7)]);
var inst_60180 = (state_60203[(2)]);
var inst_60181 = cljs.core.next.call(null,inst_60169);
var inst_60155 = inst_60181;
var inst_60156 = null;
var inst_60157 = (0);
var inst_60158 = (0);
var state_60203__$1 = (function (){var statearr_60206 = state_60203;
(statearr_60206[(8)] = inst_60180);

(statearr_60206[(9)] = inst_60155);

(statearr_60206[(10)] = inst_60156);

(statearr_60206[(11)] = inst_60157);

(statearr_60206[(12)] = inst_60158);

return statearr_60206;
})();
var statearr_60207_60247 = state_60203__$1;
(statearr_60207_60247[(2)] = null);

(statearr_60207_60247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (1))){
var state_60203__$1 = state_60203;
var statearr_60208_60248 = state_60203__$1;
(statearr_60208_60248[(2)] = null);

(statearr_60208_60248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (4))){
var inst_60144 = (state_60203[(13)]);
var inst_60144__$1 = (state_60203[(2)]);
var inst_60145 = (inst_60144__$1 == null);
var state_60203__$1 = (function (){var statearr_60209 = state_60203;
(statearr_60209[(13)] = inst_60144__$1);

return statearr_60209;
})();
if(cljs.core.truth_(inst_60145)){
var statearr_60210_60249 = state_60203__$1;
(statearr_60210_60249[(1)] = (5));

} else {
var statearr_60211_60250 = state_60203__$1;
(statearr_60211_60250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (15))){
var state_60203__$1 = state_60203;
var statearr_60215_60251 = state_60203__$1;
(statearr_60215_60251[(2)] = null);

(statearr_60215_60251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (21))){
var state_60203__$1 = state_60203;
var statearr_60216_60252 = state_60203__$1;
(statearr_60216_60252[(2)] = null);

(statearr_60216_60252[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (13))){
var inst_60155 = (state_60203[(9)]);
var inst_60156 = (state_60203[(10)]);
var inst_60157 = (state_60203[(11)]);
var inst_60158 = (state_60203[(12)]);
var inst_60165 = (state_60203[(2)]);
var inst_60166 = (inst_60158 + (1));
var tmp60212 = inst_60155;
var tmp60213 = inst_60156;
var tmp60214 = inst_60157;
var inst_60155__$1 = tmp60212;
var inst_60156__$1 = tmp60213;
var inst_60157__$1 = tmp60214;
var inst_60158__$1 = inst_60166;
var state_60203__$1 = (function (){var statearr_60217 = state_60203;
(statearr_60217[(14)] = inst_60165);

(statearr_60217[(9)] = inst_60155__$1);

(statearr_60217[(10)] = inst_60156__$1);

(statearr_60217[(11)] = inst_60157__$1);

(statearr_60217[(12)] = inst_60158__$1);

return statearr_60217;
})();
var statearr_60218_60253 = state_60203__$1;
(statearr_60218_60253[(2)] = null);

(statearr_60218_60253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (22))){
var state_60203__$1 = state_60203;
var statearr_60219_60254 = state_60203__$1;
(statearr_60219_60254[(2)] = null);

(statearr_60219_60254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (6))){
var inst_60144 = (state_60203[(13)]);
var inst_60153 = f.call(null,inst_60144);
var inst_60154 = cljs.core.seq.call(null,inst_60153);
var inst_60155 = inst_60154;
var inst_60156 = null;
var inst_60157 = (0);
var inst_60158 = (0);
var state_60203__$1 = (function (){var statearr_60220 = state_60203;
(statearr_60220[(9)] = inst_60155);

(statearr_60220[(10)] = inst_60156);

(statearr_60220[(11)] = inst_60157);

(statearr_60220[(12)] = inst_60158);

return statearr_60220;
})();
var statearr_60221_60255 = state_60203__$1;
(statearr_60221_60255[(2)] = null);

(statearr_60221_60255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (17))){
var inst_60169 = (state_60203[(7)]);
var inst_60173 = cljs.core.chunk_first.call(null,inst_60169);
var inst_60174 = cljs.core.chunk_rest.call(null,inst_60169);
var inst_60175 = cljs.core.count.call(null,inst_60173);
var inst_60155 = inst_60174;
var inst_60156 = inst_60173;
var inst_60157 = inst_60175;
var inst_60158 = (0);
var state_60203__$1 = (function (){var statearr_60222 = state_60203;
(statearr_60222[(9)] = inst_60155);

(statearr_60222[(10)] = inst_60156);

(statearr_60222[(11)] = inst_60157);

(statearr_60222[(12)] = inst_60158);

return statearr_60222;
})();
var statearr_60223_60256 = state_60203__$1;
(statearr_60223_60256[(2)] = null);

(statearr_60223_60256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (3))){
var inst_60201 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60203__$1,inst_60201);
} else {
if((state_val_60204 === (12))){
var inst_60189 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
var statearr_60224_60257 = state_60203__$1;
(statearr_60224_60257[(2)] = inst_60189);

(statearr_60224_60257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (2))){
var state_60203__$1 = state_60203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60203__$1,(4),in$);
} else {
if((state_val_60204 === (23))){
var inst_60197 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
var statearr_60225_60258 = state_60203__$1;
(statearr_60225_60258[(2)] = inst_60197);

(statearr_60225_60258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (19))){
var inst_60184 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
var statearr_60226_60259 = state_60203__$1;
(statearr_60226_60259[(2)] = inst_60184);

(statearr_60226_60259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (11))){
var inst_60169 = (state_60203[(7)]);
var inst_60155 = (state_60203[(9)]);
var inst_60169__$1 = cljs.core.seq.call(null,inst_60155);
var state_60203__$1 = (function (){var statearr_60227 = state_60203;
(statearr_60227[(7)] = inst_60169__$1);

return statearr_60227;
})();
if(inst_60169__$1){
var statearr_60228_60260 = state_60203__$1;
(statearr_60228_60260[(1)] = (14));

} else {
var statearr_60229_60261 = state_60203__$1;
(statearr_60229_60261[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (9))){
var inst_60191 = (state_60203[(2)]);
var inst_60192 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_60203__$1 = (function (){var statearr_60230 = state_60203;
(statearr_60230[(15)] = inst_60191);

return statearr_60230;
})();
if(cljs.core.truth_(inst_60192)){
var statearr_60231_60262 = state_60203__$1;
(statearr_60231_60262[(1)] = (21));

} else {
var statearr_60232_60263 = state_60203__$1;
(statearr_60232_60263[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (5))){
var inst_60147 = cljs.core.async.close_BANG_.call(null,out);
var state_60203__$1 = state_60203;
var statearr_60233_60264 = state_60203__$1;
(statearr_60233_60264[(2)] = inst_60147);

(statearr_60233_60264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (14))){
var inst_60169 = (state_60203[(7)]);
var inst_60171 = cljs.core.chunked_seq_QMARK_.call(null,inst_60169);
var state_60203__$1 = state_60203;
if(inst_60171){
var statearr_60234_60265 = state_60203__$1;
(statearr_60234_60265[(1)] = (17));

} else {
var statearr_60235_60266 = state_60203__$1;
(statearr_60235_60266[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (16))){
var inst_60187 = (state_60203[(2)]);
var state_60203__$1 = state_60203;
var statearr_60236_60267 = state_60203__$1;
(statearr_60236_60267[(2)] = inst_60187);

(statearr_60236_60267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60204 === (10))){
var inst_60156 = (state_60203[(10)]);
var inst_60158 = (state_60203[(12)]);
var inst_60163 = cljs.core._nth.call(null,inst_60156,inst_60158);
var state_60203__$1 = state_60203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60203__$1,(13),out,inst_60163);
} else {
if((state_val_60204 === (18))){
var inst_60169 = (state_60203[(7)]);
var inst_60178 = cljs.core.first.call(null,inst_60169);
var state_60203__$1 = state_60203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60203__$1,(20),out,inst_60178);
} else {
if((state_val_60204 === (8))){
var inst_60157 = (state_60203[(11)]);
var inst_60158 = (state_60203[(12)]);
var inst_60160 = (inst_60158 < inst_60157);
var inst_60161 = inst_60160;
var state_60203__$1 = state_60203;
if(cljs.core.truth_(inst_60161)){
var statearr_60237_60268 = state_60203__$1;
(statearr_60237_60268[(1)] = (10));

} else {
var statearr_60238_60269 = state_60203__$1;
(statearr_60238_60269[(1)] = (11));

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
var statearr_60242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60242[(0)] = state_machine__6995__auto__);

(statearr_60242[(1)] = (1));

return statearr_60242;
});
var state_machine__6995__auto____1 = (function (state_60203){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_60203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e60243){if((e60243 instanceof Object)){
var ex__6998__auto__ = e60243;
var statearr_60244_60270 = state_60203;
(statearr_60244_60270[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60271 = state_60203;
state_60203 = G__60271;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_60203){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_60203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_60245 = f__7051__auto__.call(null);
(statearr_60245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_60245;
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
var c__7050__auto___60368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___60368,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___60368,out){
return (function (state_60343){
var state_val_60344 = (state_60343[(1)]);
if((state_val_60344 === (7))){
var inst_60338 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
var statearr_60345_60369 = state_60343__$1;
(statearr_60345_60369[(2)] = inst_60338);

(statearr_60345_60369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (1))){
var inst_60320 = null;
var state_60343__$1 = (function (){var statearr_60346 = state_60343;
(statearr_60346[(7)] = inst_60320);

return statearr_60346;
})();
var statearr_60347_60370 = state_60343__$1;
(statearr_60347_60370[(2)] = null);

(statearr_60347_60370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (4))){
var inst_60323 = (state_60343[(8)]);
var inst_60323__$1 = (state_60343[(2)]);
var inst_60324 = (inst_60323__$1 == null);
var inst_60325 = cljs.core.not.call(null,inst_60324);
var state_60343__$1 = (function (){var statearr_60348 = state_60343;
(statearr_60348[(8)] = inst_60323__$1);

return statearr_60348;
})();
if(inst_60325){
var statearr_60349_60371 = state_60343__$1;
(statearr_60349_60371[(1)] = (5));

} else {
var statearr_60350_60372 = state_60343__$1;
(statearr_60350_60372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (6))){
var state_60343__$1 = state_60343;
var statearr_60351_60373 = state_60343__$1;
(statearr_60351_60373[(2)] = null);

(statearr_60351_60373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (3))){
var inst_60340 = (state_60343[(2)]);
var inst_60341 = cljs.core.async.close_BANG_.call(null,out);
var state_60343__$1 = (function (){var statearr_60352 = state_60343;
(statearr_60352[(9)] = inst_60340);

return statearr_60352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60343__$1,inst_60341);
} else {
if((state_val_60344 === (2))){
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60343__$1,(4),ch);
} else {
if((state_val_60344 === (11))){
var inst_60323 = (state_60343[(8)]);
var inst_60332 = (state_60343[(2)]);
var inst_60320 = inst_60323;
var state_60343__$1 = (function (){var statearr_60353 = state_60343;
(statearr_60353[(10)] = inst_60332);

(statearr_60353[(7)] = inst_60320);

return statearr_60353;
})();
var statearr_60354_60374 = state_60343__$1;
(statearr_60354_60374[(2)] = null);

(statearr_60354_60374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (9))){
var inst_60323 = (state_60343[(8)]);
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60343__$1,(11),out,inst_60323);
} else {
if((state_val_60344 === (5))){
var inst_60323 = (state_60343[(8)]);
var inst_60320 = (state_60343[(7)]);
var inst_60327 = cljs.core._EQ_.call(null,inst_60323,inst_60320);
var state_60343__$1 = state_60343;
if(inst_60327){
var statearr_60356_60375 = state_60343__$1;
(statearr_60356_60375[(1)] = (8));

} else {
var statearr_60357_60376 = state_60343__$1;
(statearr_60357_60376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (10))){
var inst_60335 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
var statearr_60358_60377 = state_60343__$1;
(statearr_60358_60377[(2)] = inst_60335);

(statearr_60358_60377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (8))){
var inst_60320 = (state_60343[(7)]);
var tmp60355 = inst_60320;
var inst_60320__$1 = tmp60355;
var state_60343__$1 = (function (){var statearr_60359 = state_60343;
(statearr_60359[(7)] = inst_60320__$1);

return statearr_60359;
})();
var statearr_60360_60378 = state_60343__$1;
(statearr_60360_60378[(2)] = null);

(statearr_60360_60378[(1)] = (2));


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
});})(c__7050__auto___60368,out))
;
return ((function (switch__6994__auto__,c__7050__auto___60368,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_60364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60364[(0)] = state_machine__6995__auto__);

(statearr_60364[(1)] = (1));

return statearr_60364;
});
var state_machine__6995__auto____1 = (function (state_60343){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_60343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e60365){if((e60365 instanceof Object)){
var ex__6998__auto__ = e60365;
var statearr_60366_60379 = state_60343;
(statearr_60366_60379[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60380 = state_60343;
state_60343 = G__60380;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_60343){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_60343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___60368,out))
})();
var state__7052__auto__ = (function (){var statearr_60367 = f__7051__auto__.call(null);
(statearr_60367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___60368);

return statearr_60367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___60368,out))
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
var c__7050__auto___60515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___60515,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___60515,out){
return (function (state_60485){
var state_val_60486 = (state_60485[(1)]);
if((state_val_60486 === (7))){
var inst_60481 = (state_60485[(2)]);
var state_60485__$1 = state_60485;
var statearr_60487_60516 = state_60485__$1;
(statearr_60487_60516[(2)] = inst_60481);

(statearr_60487_60516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (1))){
var inst_60448 = (new Array(n));
var inst_60449 = inst_60448;
var inst_60450 = (0);
var state_60485__$1 = (function (){var statearr_60488 = state_60485;
(statearr_60488[(7)] = inst_60450);

(statearr_60488[(8)] = inst_60449);

return statearr_60488;
})();
var statearr_60489_60517 = state_60485__$1;
(statearr_60489_60517[(2)] = null);

(statearr_60489_60517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (4))){
var inst_60453 = (state_60485[(9)]);
var inst_60453__$1 = (state_60485[(2)]);
var inst_60454 = (inst_60453__$1 == null);
var inst_60455 = cljs.core.not.call(null,inst_60454);
var state_60485__$1 = (function (){var statearr_60490 = state_60485;
(statearr_60490[(9)] = inst_60453__$1);

return statearr_60490;
})();
if(inst_60455){
var statearr_60491_60518 = state_60485__$1;
(statearr_60491_60518[(1)] = (5));

} else {
var statearr_60492_60519 = state_60485__$1;
(statearr_60492_60519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (15))){
var inst_60475 = (state_60485[(2)]);
var state_60485__$1 = state_60485;
var statearr_60493_60520 = state_60485__$1;
(statearr_60493_60520[(2)] = inst_60475);

(statearr_60493_60520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (13))){
var state_60485__$1 = state_60485;
var statearr_60494_60521 = state_60485__$1;
(statearr_60494_60521[(2)] = null);

(statearr_60494_60521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (6))){
var inst_60450 = (state_60485[(7)]);
var inst_60471 = (inst_60450 > (0));
var state_60485__$1 = state_60485;
if(cljs.core.truth_(inst_60471)){
var statearr_60495_60522 = state_60485__$1;
(statearr_60495_60522[(1)] = (12));

} else {
var statearr_60496_60523 = state_60485__$1;
(statearr_60496_60523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (3))){
var inst_60483 = (state_60485[(2)]);
var state_60485__$1 = state_60485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60485__$1,inst_60483);
} else {
if((state_val_60486 === (12))){
var inst_60449 = (state_60485[(8)]);
var inst_60473 = cljs.core.vec.call(null,inst_60449);
var state_60485__$1 = state_60485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60485__$1,(15),out,inst_60473);
} else {
if((state_val_60486 === (2))){
var state_60485__$1 = state_60485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60485__$1,(4),ch);
} else {
if((state_val_60486 === (11))){
var inst_60465 = (state_60485[(2)]);
var inst_60466 = (new Array(n));
var inst_60449 = inst_60466;
var inst_60450 = (0);
var state_60485__$1 = (function (){var statearr_60497 = state_60485;
(statearr_60497[(7)] = inst_60450);

(statearr_60497[(8)] = inst_60449);

(statearr_60497[(10)] = inst_60465);

return statearr_60497;
})();
var statearr_60498_60524 = state_60485__$1;
(statearr_60498_60524[(2)] = null);

(statearr_60498_60524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (9))){
var inst_60449 = (state_60485[(8)]);
var inst_60463 = cljs.core.vec.call(null,inst_60449);
var state_60485__$1 = state_60485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60485__$1,(11),out,inst_60463);
} else {
if((state_val_60486 === (5))){
var inst_60450 = (state_60485[(7)]);
var inst_60458 = (state_60485[(11)]);
var inst_60453 = (state_60485[(9)]);
var inst_60449 = (state_60485[(8)]);
var inst_60457 = (inst_60449[inst_60450] = inst_60453);
var inst_60458__$1 = (inst_60450 + (1));
var inst_60459 = (inst_60458__$1 < n);
var state_60485__$1 = (function (){var statearr_60499 = state_60485;
(statearr_60499[(11)] = inst_60458__$1);

(statearr_60499[(12)] = inst_60457);

return statearr_60499;
})();
if(cljs.core.truth_(inst_60459)){
var statearr_60500_60525 = state_60485__$1;
(statearr_60500_60525[(1)] = (8));

} else {
var statearr_60501_60526 = state_60485__$1;
(statearr_60501_60526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (14))){
var inst_60478 = (state_60485[(2)]);
var inst_60479 = cljs.core.async.close_BANG_.call(null,out);
var state_60485__$1 = (function (){var statearr_60503 = state_60485;
(statearr_60503[(13)] = inst_60478);

return statearr_60503;
})();
var statearr_60504_60527 = state_60485__$1;
(statearr_60504_60527[(2)] = inst_60479);

(statearr_60504_60527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (10))){
var inst_60469 = (state_60485[(2)]);
var state_60485__$1 = state_60485;
var statearr_60505_60528 = state_60485__$1;
(statearr_60505_60528[(2)] = inst_60469);

(statearr_60505_60528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60486 === (8))){
var inst_60458 = (state_60485[(11)]);
var inst_60449 = (state_60485[(8)]);
var tmp60502 = inst_60449;
var inst_60449__$1 = tmp60502;
var inst_60450 = inst_60458;
var state_60485__$1 = (function (){var statearr_60506 = state_60485;
(statearr_60506[(7)] = inst_60450);

(statearr_60506[(8)] = inst_60449__$1);

return statearr_60506;
})();
var statearr_60507_60529 = state_60485__$1;
(statearr_60507_60529[(2)] = null);

(statearr_60507_60529[(1)] = (2));


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
});})(c__7050__auto___60515,out))
;
return ((function (switch__6994__auto__,c__7050__auto___60515,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_60511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60511[(0)] = state_machine__6995__auto__);

(statearr_60511[(1)] = (1));

return statearr_60511;
});
var state_machine__6995__auto____1 = (function (state_60485){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_60485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e60512){if((e60512 instanceof Object)){
var ex__6998__auto__ = e60512;
var statearr_60513_60530 = state_60485;
(statearr_60513_60530[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60531 = state_60485;
state_60485 = G__60531;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_60485){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_60485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___60515,out))
})();
var state__7052__auto__ = (function (){var statearr_60514 = f__7051__auto__.call(null);
(statearr_60514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___60515);

return statearr_60514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___60515,out))
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
var c__7050__auto___60674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___60674,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___60674,out){
return (function (state_60644){
var state_val_60645 = (state_60644[(1)]);
if((state_val_60645 === (7))){
var inst_60640 = (state_60644[(2)]);
var state_60644__$1 = state_60644;
var statearr_60646_60675 = state_60644__$1;
(statearr_60646_60675[(2)] = inst_60640);

(statearr_60646_60675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (1))){
var inst_60603 = [];
var inst_60604 = inst_60603;
var inst_60605 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60644__$1 = (function (){var statearr_60647 = state_60644;
(statearr_60647[(7)] = inst_60605);

(statearr_60647[(8)] = inst_60604);

return statearr_60647;
})();
var statearr_60648_60676 = state_60644__$1;
(statearr_60648_60676[(2)] = null);

(statearr_60648_60676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (4))){
var inst_60608 = (state_60644[(9)]);
var inst_60608__$1 = (state_60644[(2)]);
var inst_60609 = (inst_60608__$1 == null);
var inst_60610 = cljs.core.not.call(null,inst_60609);
var state_60644__$1 = (function (){var statearr_60649 = state_60644;
(statearr_60649[(9)] = inst_60608__$1);

return statearr_60649;
})();
if(inst_60610){
var statearr_60650_60677 = state_60644__$1;
(statearr_60650_60677[(1)] = (5));

} else {
var statearr_60651_60678 = state_60644__$1;
(statearr_60651_60678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (15))){
var inst_60634 = (state_60644[(2)]);
var state_60644__$1 = state_60644;
var statearr_60652_60679 = state_60644__$1;
(statearr_60652_60679[(2)] = inst_60634);

(statearr_60652_60679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (13))){
var state_60644__$1 = state_60644;
var statearr_60653_60680 = state_60644__$1;
(statearr_60653_60680[(2)] = null);

(statearr_60653_60680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (6))){
var inst_60604 = (state_60644[(8)]);
var inst_60629 = inst_60604.length;
var inst_60630 = (inst_60629 > (0));
var state_60644__$1 = state_60644;
if(cljs.core.truth_(inst_60630)){
var statearr_60654_60681 = state_60644__$1;
(statearr_60654_60681[(1)] = (12));

} else {
var statearr_60655_60682 = state_60644__$1;
(statearr_60655_60682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (3))){
var inst_60642 = (state_60644[(2)]);
var state_60644__$1 = state_60644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60644__$1,inst_60642);
} else {
if((state_val_60645 === (12))){
var inst_60604 = (state_60644[(8)]);
var inst_60632 = cljs.core.vec.call(null,inst_60604);
var state_60644__$1 = state_60644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60644__$1,(15),out,inst_60632);
} else {
if((state_val_60645 === (2))){
var state_60644__$1 = state_60644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60644__$1,(4),ch);
} else {
if((state_val_60645 === (11))){
var inst_60612 = (state_60644[(10)]);
var inst_60608 = (state_60644[(9)]);
var inst_60622 = (state_60644[(2)]);
var inst_60623 = [];
var inst_60624 = inst_60623.push(inst_60608);
var inst_60604 = inst_60623;
var inst_60605 = inst_60612;
var state_60644__$1 = (function (){var statearr_60656 = state_60644;
(statearr_60656[(7)] = inst_60605);

(statearr_60656[(11)] = inst_60624);

(statearr_60656[(8)] = inst_60604);

(statearr_60656[(12)] = inst_60622);

return statearr_60656;
})();
var statearr_60657_60683 = state_60644__$1;
(statearr_60657_60683[(2)] = null);

(statearr_60657_60683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (9))){
var inst_60604 = (state_60644[(8)]);
var inst_60620 = cljs.core.vec.call(null,inst_60604);
var state_60644__$1 = state_60644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60644__$1,(11),out,inst_60620);
} else {
if((state_val_60645 === (5))){
var inst_60605 = (state_60644[(7)]);
var inst_60612 = (state_60644[(10)]);
var inst_60608 = (state_60644[(9)]);
var inst_60612__$1 = f.call(null,inst_60608);
var inst_60613 = cljs.core._EQ_.call(null,inst_60612__$1,inst_60605);
var inst_60614 = cljs.core.keyword_identical_QMARK_.call(null,inst_60605,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60615 = (inst_60613) || (inst_60614);
var state_60644__$1 = (function (){var statearr_60658 = state_60644;
(statearr_60658[(10)] = inst_60612__$1);

return statearr_60658;
})();
if(cljs.core.truth_(inst_60615)){
var statearr_60659_60684 = state_60644__$1;
(statearr_60659_60684[(1)] = (8));

} else {
var statearr_60660_60685 = state_60644__$1;
(statearr_60660_60685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (14))){
var inst_60637 = (state_60644[(2)]);
var inst_60638 = cljs.core.async.close_BANG_.call(null,out);
var state_60644__$1 = (function (){var statearr_60662 = state_60644;
(statearr_60662[(13)] = inst_60637);

return statearr_60662;
})();
var statearr_60663_60686 = state_60644__$1;
(statearr_60663_60686[(2)] = inst_60638);

(statearr_60663_60686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (10))){
var inst_60627 = (state_60644[(2)]);
var state_60644__$1 = state_60644;
var statearr_60664_60687 = state_60644__$1;
(statearr_60664_60687[(2)] = inst_60627);

(statearr_60664_60687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60645 === (8))){
var inst_60612 = (state_60644[(10)]);
var inst_60604 = (state_60644[(8)]);
var inst_60608 = (state_60644[(9)]);
var inst_60617 = inst_60604.push(inst_60608);
var tmp60661 = inst_60604;
var inst_60604__$1 = tmp60661;
var inst_60605 = inst_60612;
var state_60644__$1 = (function (){var statearr_60665 = state_60644;
(statearr_60665[(7)] = inst_60605);

(statearr_60665[(14)] = inst_60617);

(statearr_60665[(8)] = inst_60604__$1);

return statearr_60665;
})();
var statearr_60666_60688 = state_60644__$1;
(statearr_60666_60688[(2)] = null);

(statearr_60666_60688[(1)] = (2));


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
});})(c__7050__auto___60674,out))
;
return ((function (switch__6994__auto__,c__7050__auto___60674,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_60670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60670[(0)] = state_machine__6995__auto__);

(statearr_60670[(1)] = (1));

return statearr_60670;
});
var state_machine__6995__auto____1 = (function (state_60644){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_60644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e60671){if((e60671 instanceof Object)){
var ex__6998__auto__ = e60671;
var statearr_60672_60689 = state_60644;
(statearr_60672_60689[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60690 = state_60644;
state_60644 = G__60690;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_60644){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_60644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___60674,out))
})();
var state__7052__auto__ = (function (){var statearr_60673 = f__7051__auto__.call(null);
(statearr_60673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___60674);

return statearr_60673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___60674,out))
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