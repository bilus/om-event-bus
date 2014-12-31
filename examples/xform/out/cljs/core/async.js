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
if(typeof cljs.core.async.t11524 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11524 = (function (f,fn_handler,meta11525){
this.f = f;
this.fn_handler = fn_handler;
this.meta11525 = meta11525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11526){
var self__ = this;
var _11526__$1 = this;
return self__.meta11525;
});

cljs.core.async.t11524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11526,meta11525__$1){
var self__ = this;
var _11526__$1 = this;
return (new cljs.core.async.t11524(self__.f,self__.fn_handler,meta11525__$1));
});

cljs.core.async.t11524.cljs$lang$type = true;

cljs.core.async.t11524.cljs$lang$ctorStr = "cljs.core.async/t11524";

cljs.core.async.t11524.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11524");
});

cljs.core.async.__GT_t11524 = (function __GT_t11524(f__$1,fn_handler__$1,meta11525){
return (new cljs.core.async.t11524(f__$1,fn_handler__$1,meta11525));
});

}

return (new cljs.core.async.t11524(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var G__11528 = buff;
if(G__11528){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__11528.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11528.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11528);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11528);
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
var val_11529 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11529);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11529,ret){
return (function (){
return fn1.call(null,val_11529);
});})(val_11529,ret))
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
var n__4517__auto___11530 = n;
var x_11531 = (0);
while(true){
if((x_11531 < n__4517__auto___11530)){
(a[x_11531] = (0));

var G__11532 = (x_11531 + (1));
x_11531 = G__11532;
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

var G__11533 = (i + (1));
i = G__11533;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11537 = (function (flag,alt_flag,meta11538){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11538 = meta11538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11539){
var self__ = this;
var _11539__$1 = this;
return self__.meta11538;
});})(flag))
;

cljs.core.async.t11537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11539,meta11538__$1){
var self__ = this;
var _11539__$1 = this;
return (new cljs.core.async.t11537(self__.flag,self__.alt_flag,meta11538__$1));
});})(flag))
;

cljs.core.async.t11537.cljs$lang$type = true;

cljs.core.async.t11537.cljs$lang$ctorStr = "cljs.core.async/t11537";

cljs.core.async.t11537.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11537");
});})(flag))
;

cljs.core.async.__GT_t11537 = ((function (flag){
return (function __GT_t11537(flag__$1,alt_flag__$1,meta11538){
return (new cljs.core.async.t11537(flag__$1,alt_flag__$1,meta11538));
});})(flag))
;

}

return (new cljs.core.async.t11537(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t11543 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11543 = (function (cb,flag,alt_handler,meta11544){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11544 = meta11544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11545){
var self__ = this;
var _11545__$1 = this;
return self__.meta11544;
});

cljs.core.async.t11543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11545,meta11544__$1){
var self__ = this;
var _11545__$1 = this;
return (new cljs.core.async.t11543(self__.cb,self__.flag,self__.alt_handler,meta11544__$1));
});

cljs.core.async.t11543.cljs$lang$type = true;

cljs.core.async.t11543.cljs$lang$ctorStr = "cljs.core.async/t11543";

cljs.core.async.t11543.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11543");
});

cljs.core.async.__GT_t11543 = (function __GT_t11543(cb__$1,flag__$1,alt_handler__$1,meta11544){
return (new cljs.core.async.t11543(cb__$1,flag__$1,alt_handler__$1,meta11544));
});

}

return (new cljs.core.async.t11543(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
return (function (p1__11546_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11546_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11547_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11547_SHARP_,port], null));
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
var G__11548 = (i + (1));
i = G__11548;
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
var alts_BANG___delegate = function (ports,p__11549){
var map__11551 = p__11549;
var map__11551__$1 = ((cljs.core.seq_QMARK_.call(null,map__11551))?cljs.core.apply.call(null,cljs.core.hash_map,map__11551):map__11551);
var opts = map__11551__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11549 = null;
if (arguments.length > 1) {
  p__11549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__11549);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11552){
var ports = cljs.core.first(arglist__11552);
var p__11549 = cljs.core.rest(arglist__11552);
return alts_BANG___delegate(ports,p__11549);
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
var c__5869__auto___11647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___11647){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___11647){
return (function (state_11623){
var state_val_11624 = (state_11623[(1)]);
if((state_val_11624 === (7))){
var inst_11619 = (state_11623[(2)]);
var state_11623__$1 = state_11623;
var statearr_11625_11648 = state_11623__$1;
(statearr_11625_11648[(2)] = inst_11619);

(statearr_11625_11648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (1))){
var state_11623__$1 = state_11623;
var statearr_11626_11649 = state_11623__$1;
(statearr_11626_11649[(2)] = null);

(statearr_11626_11649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (4))){
var inst_11602 = (state_11623[(7)]);
var inst_11602__$1 = (state_11623[(2)]);
var inst_11603 = (inst_11602__$1 == null);
var state_11623__$1 = (function (){var statearr_11627 = state_11623;
(statearr_11627[(7)] = inst_11602__$1);

return statearr_11627;
})();
if(cljs.core.truth_(inst_11603)){
var statearr_11628_11650 = state_11623__$1;
(statearr_11628_11650[(1)] = (5));

} else {
var statearr_11629_11651 = state_11623__$1;
(statearr_11629_11651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (13))){
var state_11623__$1 = state_11623;
var statearr_11630_11652 = state_11623__$1;
(statearr_11630_11652[(2)] = null);

(statearr_11630_11652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (6))){
var inst_11602 = (state_11623[(7)]);
var state_11623__$1 = state_11623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11623__$1,(11),to,inst_11602);
} else {
if((state_val_11624 === (3))){
var inst_11621 = (state_11623[(2)]);
var state_11623__$1 = state_11623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11623__$1,inst_11621);
} else {
if((state_val_11624 === (12))){
var state_11623__$1 = state_11623;
var statearr_11631_11653 = state_11623__$1;
(statearr_11631_11653[(2)] = null);

(statearr_11631_11653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (2))){
var state_11623__$1 = state_11623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11623__$1,(4),from);
} else {
if((state_val_11624 === (11))){
var inst_11612 = (state_11623[(2)]);
var state_11623__$1 = state_11623;
if(cljs.core.truth_(inst_11612)){
var statearr_11632_11654 = state_11623__$1;
(statearr_11632_11654[(1)] = (12));

} else {
var statearr_11633_11655 = state_11623__$1;
(statearr_11633_11655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (9))){
var state_11623__$1 = state_11623;
var statearr_11634_11656 = state_11623__$1;
(statearr_11634_11656[(2)] = null);

(statearr_11634_11656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (5))){
var state_11623__$1 = state_11623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11635_11657 = state_11623__$1;
(statearr_11635_11657[(1)] = (8));

} else {
var statearr_11636_11658 = state_11623__$1;
(statearr_11636_11658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (14))){
var inst_11617 = (state_11623[(2)]);
var state_11623__$1 = state_11623;
var statearr_11637_11659 = state_11623__$1;
(statearr_11637_11659[(2)] = inst_11617);

(statearr_11637_11659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (10))){
var inst_11609 = (state_11623[(2)]);
var state_11623__$1 = state_11623;
var statearr_11638_11660 = state_11623__$1;
(statearr_11638_11660[(2)] = inst_11609);

(statearr_11638_11660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11624 === (8))){
var inst_11606 = cljs.core.async.close_BANG_.call(null,to);
var state_11623__$1 = state_11623;
var statearr_11639_11661 = state_11623__$1;
(statearr_11639_11661[(2)] = inst_11606);

(statearr_11639_11661[(1)] = (10));


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
});})(c__5869__auto___11647))
;
return ((function (switch__5854__auto__,c__5869__auto___11647){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11643 = [null,null,null,null,null,null,null,null];
(statearr_11643[(0)] = state_machine__5855__auto__);

(statearr_11643[(1)] = (1));

return statearr_11643;
});
var state_machine__5855__auto____1 = (function (state_11623){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11644){if((e11644 instanceof Object)){
var ex__5858__auto__ = e11644;
var statearr_11645_11662 = state_11623;
(statearr_11645_11662[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11663 = state_11623;
state_11623 = G__11663;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11623){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___11647))
})();
var state__5871__auto__ = (function (){var statearr_11646 = f__5870__auto__.call(null);
(statearr_11646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___11647);

return statearr_11646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___11647))
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
return (function (p__11847){
var vec__11848 = p__11847;
var v = cljs.core.nth.call(null,vec__11848,(0),null);
var p = cljs.core.nth.call(null,vec__11848,(1),null);
var job = vec__11848;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5869__auto___12030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results){
return (function (state_11853){
var state_val_11854 = (state_11853[(1)]);
if((state_val_11854 === (2))){
var inst_11850 = (state_11853[(2)]);
var inst_11851 = cljs.core.async.close_BANG_.call(null,res);
var state_11853__$1 = (function (){var statearr_11855 = state_11853;
(statearr_11855[(7)] = inst_11850);

return statearr_11855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11853__$1,inst_11851);
} else {
if((state_val_11854 === (1))){
var state_11853__$1 = state_11853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11853__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results))
;
return ((function (switch__5854__auto__,c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11859 = [null,null,null,null,null,null,null,null];
(statearr_11859[(0)] = state_machine__5855__auto__);

(statearr_11859[(1)] = (1));

return statearr_11859;
});
var state_machine__5855__auto____1 = (function (state_11853){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11860){if((e11860 instanceof Object)){
var ex__5858__auto__ = e11860;
var statearr_11861_12031 = state_11853;
(statearr_11861_12031[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12032 = state_11853;
state_11853 = G__12032;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11853){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results))
})();
var state__5871__auto__ = (function (){var statearr_11862 = f__5870__auto__.call(null);
(statearr_11862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12030);

return statearr_11862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12030,res,vec__11848,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11863){
var vec__11864 = p__11863;
var v = cljs.core.nth.call(null,vec__11864,(0),null);
var p = cljs.core.nth.call(null,vec__11864,(1),null);
var job = vec__11864;
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
var n__4517__auto___12033 = n;
var __12034 = (0);
while(true){
if((__12034 < n__4517__auto___12033)){
var G__11865_12035 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11865_12035) {
case "async":
var c__5869__auto___12037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12034,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__12034,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function (state_11878){
var state_val_11879 = (state_11878[(1)]);
if((state_val_11879 === (7))){
var inst_11874 = (state_11878[(2)]);
var state_11878__$1 = state_11878;
var statearr_11880_12038 = state_11878__$1;
(statearr_11880_12038[(2)] = inst_11874);

(statearr_11880_12038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (6))){
var state_11878__$1 = state_11878;
var statearr_11881_12039 = state_11878__$1;
(statearr_11881_12039[(2)] = null);

(statearr_11881_12039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (5))){
var state_11878__$1 = state_11878;
var statearr_11882_12040 = state_11878__$1;
(statearr_11882_12040[(2)] = null);

(statearr_11882_12040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (4))){
var inst_11868 = (state_11878[(2)]);
var inst_11869 = async.call(null,inst_11868);
var state_11878__$1 = state_11878;
if(cljs.core.truth_(inst_11869)){
var statearr_11883_12041 = state_11878__$1;
(statearr_11883_12041[(1)] = (5));

} else {
var statearr_11884_12042 = state_11878__$1;
(statearr_11884_12042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11879 === (3))){
var inst_11876 = (state_11878[(2)]);
var state_11878__$1 = state_11878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11878__$1,inst_11876);
} else {
if((state_val_11879 === (2))){
var state_11878__$1 = state_11878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11878__$1,(4),jobs);
} else {
if((state_val_11879 === (1))){
var state_11878__$1 = state_11878;
var statearr_11885_12043 = state_11878__$1;
(statearr_11885_12043[(2)] = null);

(statearr_11885_12043[(1)] = (2));


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
});})(__12034,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
;
return ((function (__12034,switch__5854__auto__,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11889 = [null,null,null,null,null,null,null];
(statearr_11889[(0)] = state_machine__5855__auto__);

(statearr_11889[(1)] = (1));

return statearr_11889;
});
var state_machine__5855__auto____1 = (function (state_11878){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11890){if((e11890 instanceof Object)){
var ex__5858__auto__ = e11890;
var statearr_11891_12044 = state_11878;
(statearr_11891_12044[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12045 = state_11878;
state_11878 = G__12045;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11878){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__12034,switch__5854__auto__,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_11892 = f__5870__auto__.call(null);
(statearr_11892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12037);

return statearr_11892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__12034,c__5869__auto___12037,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
);


break;
case "compute":
var c__5869__auto___12046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12034,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (__12034,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function (state_11905){
var state_val_11906 = (state_11905[(1)]);
if((state_val_11906 === (7))){
var inst_11901 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
var statearr_11907_12047 = state_11905__$1;
(statearr_11907_12047[(2)] = inst_11901);

(statearr_11907_12047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (6))){
var state_11905__$1 = state_11905;
var statearr_11908_12048 = state_11905__$1;
(statearr_11908_12048[(2)] = null);

(statearr_11908_12048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (5))){
var state_11905__$1 = state_11905;
var statearr_11909_12049 = state_11905__$1;
(statearr_11909_12049[(2)] = null);

(statearr_11909_12049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (4))){
var inst_11895 = (state_11905[(2)]);
var inst_11896 = process.call(null,inst_11895);
var state_11905__$1 = state_11905;
if(cljs.core.truth_(inst_11896)){
var statearr_11910_12050 = state_11905__$1;
(statearr_11910_12050[(1)] = (5));

} else {
var statearr_11911_12051 = state_11905__$1;
(statearr_11911_12051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11906 === (3))){
var inst_11903 = (state_11905[(2)]);
var state_11905__$1 = state_11905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11905__$1,inst_11903);
} else {
if((state_val_11906 === (2))){
var state_11905__$1 = state_11905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11905__$1,(4),jobs);
} else {
if((state_val_11906 === (1))){
var state_11905__$1 = state_11905;
var statearr_11912_12052 = state_11905__$1;
(statearr_11912_12052[(2)] = null);

(statearr_11912_12052[(1)] = (2));


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
});})(__12034,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
;
return ((function (__12034,switch__5854__auto__,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11916 = [null,null,null,null,null,null,null];
(statearr_11916[(0)] = state_machine__5855__auto__);

(statearr_11916[(1)] = (1));

return statearr_11916;
});
var state_machine__5855__auto____1 = (function (state_11905){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11917){if((e11917 instanceof Object)){
var ex__5858__auto__ = e11917;
var statearr_11918_12053 = state_11905;
(statearr_11918_12053[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12054 = state_11905;
state_11905 = G__12054;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11905){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(__12034,switch__5854__auto__,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_11919 = f__5870__auto__.call(null);
(statearr_11919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12046);

return statearr_11919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(__12034,c__5869__auto___12046,G__11865_12035,n__4517__auto___12033,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12055 = (__12034 + (1));
__12034 = G__12055;
continue;
} else {
}
break;
}

var c__5869__auto___12056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12056,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12056,jobs,results,process,async){
return (function (state_11941){
var state_val_11942 = (state_11941[(1)]);
if((state_val_11942 === (9))){
var inst_11934 = (state_11941[(2)]);
var state_11941__$1 = (function (){var statearr_11943 = state_11941;
(statearr_11943[(7)] = inst_11934);

return statearr_11943;
})();
var statearr_11944_12057 = state_11941__$1;
(statearr_11944_12057[(2)] = null);

(statearr_11944_12057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11942 === (8))){
var inst_11927 = (state_11941[(8)]);
var inst_11932 = (state_11941[(2)]);
var state_11941__$1 = (function (){var statearr_11945 = state_11941;
(statearr_11945[(9)] = inst_11932);

return statearr_11945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11941__$1,(9),results,inst_11927);
} else {
if((state_val_11942 === (7))){
var inst_11937 = (state_11941[(2)]);
var state_11941__$1 = state_11941;
var statearr_11946_12058 = state_11941__$1;
(statearr_11946_12058[(2)] = inst_11937);

(statearr_11946_12058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11942 === (6))){
var inst_11927 = (state_11941[(8)]);
var inst_11922 = (state_11941[(10)]);
var inst_11927__$1 = cljs.core.async.chan.call(null,(1));
var inst_11928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11929 = [inst_11922,inst_11927__$1];
var inst_11930 = (new cljs.core.PersistentVector(null,2,(5),inst_11928,inst_11929,null));
var state_11941__$1 = (function (){var statearr_11947 = state_11941;
(statearr_11947[(8)] = inst_11927__$1);

return statearr_11947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11941__$1,(8),jobs,inst_11930);
} else {
if((state_val_11942 === (5))){
var inst_11925 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11941__$1 = state_11941;
var statearr_11948_12059 = state_11941__$1;
(statearr_11948_12059[(2)] = inst_11925);

(statearr_11948_12059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11942 === (4))){
var inst_11922 = (state_11941[(10)]);
var inst_11922__$1 = (state_11941[(2)]);
var inst_11923 = (inst_11922__$1 == null);
var state_11941__$1 = (function (){var statearr_11949 = state_11941;
(statearr_11949[(10)] = inst_11922__$1);

return statearr_11949;
})();
if(cljs.core.truth_(inst_11923)){
var statearr_11950_12060 = state_11941__$1;
(statearr_11950_12060[(1)] = (5));

} else {
var statearr_11951_12061 = state_11941__$1;
(statearr_11951_12061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11942 === (3))){
var inst_11939 = (state_11941[(2)]);
var state_11941__$1 = state_11941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11941__$1,inst_11939);
} else {
if((state_val_11942 === (2))){
var state_11941__$1 = state_11941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11941__$1,(4),from);
} else {
if((state_val_11942 === (1))){
var state_11941__$1 = state_11941;
var statearr_11952_12062 = state_11941__$1;
(statearr_11952_12062[(2)] = null);

(statearr_11952_12062[(1)] = (2));


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
});})(c__5869__auto___12056,jobs,results,process,async))
;
return ((function (switch__5854__auto__,c__5869__auto___12056,jobs,results,process,async){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_11956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11956[(0)] = state_machine__5855__auto__);

(statearr_11956[(1)] = (1));

return statearr_11956;
});
var state_machine__5855__auto____1 = (function (state_11941){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e11957){if((e11957 instanceof Object)){
var ex__5858__auto__ = e11957;
var statearr_11958_12063 = state_11941;
(statearr_11958_12063[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12064 = state_11941;
state_11941 = G__12064;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11941){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12056,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_11959 = f__5870__auto__.call(null);
(statearr_11959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12056);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12056,jobs,results,process,async))
);


var c__5869__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto__,jobs,results,process,async){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto__,jobs,results,process,async){
return (function (state_11997){
var state_val_11998 = (state_11997[(1)]);
if((state_val_11998 === (7))){
var inst_11993 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_11999_12065 = state_11997__$1;
(statearr_11999_12065[(2)] = inst_11993);

(statearr_11999_12065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (20))){
var state_11997__$1 = state_11997;
var statearr_12000_12066 = state_11997__$1;
(statearr_12000_12066[(2)] = null);

(statearr_12000_12066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (1))){
var state_11997__$1 = state_11997;
var statearr_12001_12067 = state_11997__$1;
(statearr_12001_12067[(2)] = null);

(statearr_12001_12067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (4))){
var inst_11962 = (state_11997[(7)]);
var inst_11962__$1 = (state_11997[(2)]);
var inst_11963 = (inst_11962__$1 == null);
var state_11997__$1 = (function (){var statearr_12002 = state_11997;
(statearr_12002[(7)] = inst_11962__$1);

return statearr_12002;
})();
if(cljs.core.truth_(inst_11963)){
var statearr_12003_12068 = state_11997__$1;
(statearr_12003_12068[(1)] = (5));

} else {
var statearr_12004_12069 = state_11997__$1;
(statearr_12004_12069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (15))){
var inst_11975 = (state_11997[(8)]);
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11997__$1,(18),to,inst_11975);
} else {
if((state_val_11998 === (21))){
var inst_11988 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12005_12070 = state_11997__$1;
(statearr_12005_12070[(2)] = inst_11988);

(statearr_12005_12070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (13))){
var inst_11990 = (state_11997[(2)]);
var state_11997__$1 = (function (){var statearr_12006 = state_11997;
(statearr_12006[(9)] = inst_11990);

return statearr_12006;
})();
var statearr_12007_12071 = state_11997__$1;
(statearr_12007_12071[(2)] = null);

(statearr_12007_12071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (6))){
var inst_11962 = (state_11997[(7)]);
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(11),inst_11962);
} else {
if((state_val_11998 === (17))){
var inst_11983 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
if(cljs.core.truth_(inst_11983)){
var statearr_12008_12072 = state_11997__$1;
(statearr_12008_12072[(1)] = (19));

} else {
var statearr_12009_12073 = state_11997__$1;
(statearr_12009_12073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (3))){
var inst_11995 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11997__$1,inst_11995);
} else {
if((state_val_11998 === (12))){
var inst_11972 = (state_11997[(10)]);
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(14),inst_11972);
} else {
if((state_val_11998 === (2))){
var state_11997__$1 = state_11997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11997__$1,(4),results);
} else {
if((state_val_11998 === (19))){
var state_11997__$1 = state_11997;
var statearr_12010_12074 = state_11997__$1;
(statearr_12010_12074[(2)] = null);

(statearr_12010_12074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (11))){
var inst_11972 = (state_11997[(2)]);
var state_11997__$1 = (function (){var statearr_12011 = state_11997;
(statearr_12011[(10)] = inst_11972);

return statearr_12011;
})();
var statearr_12012_12075 = state_11997__$1;
(statearr_12012_12075[(2)] = null);

(statearr_12012_12075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (9))){
var state_11997__$1 = state_11997;
var statearr_12013_12076 = state_11997__$1;
(statearr_12013_12076[(2)] = null);

(statearr_12013_12076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (5))){
var state_11997__$1 = state_11997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12014_12077 = state_11997__$1;
(statearr_12014_12077[(1)] = (8));

} else {
var statearr_12015_12078 = state_11997__$1;
(statearr_12015_12078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (14))){
var inst_11975 = (state_11997[(8)]);
var inst_11977 = (state_11997[(11)]);
var inst_11975__$1 = (state_11997[(2)]);
var inst_11976 = (inst_11975__$1 == null);
var inst_11977__$1 = cljs.core.not.call(null,inst_11976);
var state_11997__$1 = (function (){var statearr_12016 = state_11997;
(statearr_12016[(8)] = inst_11975__$1);

(statearr_12016[(11)] = inst_11977__$1);

return statearr_12016;
})();
if(inst_11977__$1){
var statearr_12017_12079 = state_11997__$1;
(statearr_12017_12079[(1)] = (15));

} else {
var statearr_12018_12080 = state_11997__$1;
(statearr_12018_12080[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (16))){
var inst_11977 = (state_11997[(11)]);
var state_11997__$1 = state_11997;
var statearr_12019_12081 = state_11997__$1;
(statearr_12019_12081[(2)] = inst_11977);

(statearr_12019_12081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (10))){
var inst_11969 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12020_12082 = state_11997__$1;
(statearr_12020_12082[(2)] = inst_11969);

(statearr_12020_12082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (18))){
var inst_11980 = (state_11997[(2)]);
var state_11997__$1 = state_11997;
var statearr_12021_12083 = state_11997__$1;
(statearr_12021_12083[(2)] = inst_11980);

(statearr_12021_12083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11998 === (8))){
var inst_11966 = cljs.core.async.close_BANG_.call(null,to);
var state_11997__$1 = state_11997;
var statearr_12022_12084 = state_11997__$1;
(statearr_12022_12084[(2)] = inst_11966);

(statearr_12022_12084[(1)] = (10));


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
var statearr_12026 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12026[(0)] = state_machine__5855__auto__);

(statearr_12026[(1)] = (1));

return statearr_12026;
});
var state_machine__5855__auto____1 = (function (state_11997){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_11997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12027){if((e12027 instanceof Object)){
var ex__5858__auto__ = e12027;
var statearr_12028_12085 = state_11997;
(statearr_12028_12085[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12086 = state_11997;
state_11997 = G__12086;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_11997){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_11997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__,jobs,results,process,async))
})();
var state__5871__auto__ = (function (){var statearr_12029 = f__5870__auto__.call(null);
(statearr_12029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12029;
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
var c__5869__auto___12187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12187,tc,fc){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12187,tc,fc){
return (function (state_12162){
var state_val_12163 = (state_12162[(1)]);
if((state_val_12163 === (7))){
var inst_12158 = (state_12162[(2)]);
var state_12162__$1 = state_12162;
var statearr_12164_12188 = state_12162__$1;
(statearr_12164_12188[(2)] = inst_12158);

(statearr_12164_12188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (1))){
var state_12162__$1 = state_12162;
var statearr_12165_12189 = state_12162__$1;
(statearr_12165_12189[(2)] = null);

(statearr_12165_12189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (4))){
var inst_12139 = (state_12162[(7)]);
var inst_12139__$1 = (state_12162[(2)]);
var inst_12140 = (inst_12139__$1 == null);
var state_12162__$1 = (function (){var statearr_12166 = state_12162;
(statearr_12166[(7)] = inst_12139__$1);

return statearr_12166;
})();
if(cljs.core.truth_(inst_12140)){
var statearr_12167_12190 = state_12162__$1;
(statearr_12167_12190[(1)] = (5));

} else {
var statearr_12168_12191 = state_12162__$1;
(statearr_12168_12191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (13))){
var state_12162__$1 = state_12162;
var statearr_12169_12192 = state_12162__$1;
(statearr_12169_12192[(2)] = null);

(statearr_12169_12192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (6))){
var inst_12139 = (state_12162[(7)]);
var inst_12145 = p.call(null,inst_12139);
var state_12162__$1 = state_12162;
if(cljs.core.truth_(inst_12145)){
var statearr_12170_12193 = state_12162__$1;
(statearr_12170_12193[(1)] = (9));

} else {
var statearr_12171_12194 = state_12162__$1;
(statearr_12171_12194[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (3))){
var inst_12160 = (state_12162[(2)]);
var state_12162__$1 = state_12162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12162__$1,inst_12160);
} else {
if((state_val_12163 === (12))){
var state_12162__$1 = state_12162;
var statearr_12172_12195 = state_12162__$1;
(statearr_12172_12195[(2)] = null);

(statearr_12172_12195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (2))){
var state_12162__$1 = state_12162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12162__$1,(4),ch);
} else {
if((state_val_12163 === (11))){
var inst_12139 = (state_12162[(7)]);
var inst_12149 = (state_12162[(2)]);
var state_12162__$1 = state_12162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12162__$1,(8),inst_12149,inst_12139);
} else {
if((state_val_12163 === (9))){
var state_12162__$1 = state_12162;
var statearr_12173_12196 = state_12162__$1;
(statearr_12173_12196[(2)] = tc);

(statearr_12173_12196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (5))){
var inst_12142 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12143 = cljs.core.async.close_BANG_.call(null,fc);
var state_12162__$1 = (function (){var statearr_12174 = state_12162;
(statearr_12174[(8)] = inst_12142);

return statearr_12174;
})();
var statearr_12175_12197 = state_12162__$1;
(statearr_12175_12197[(2)] = inst_12143);

(statearr_12175_12197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (14))){
var inst_12156 = (state_12162[(2)]);
var state_12162__$1 = state_12162;
var statearr_12176_12198 = state_12162__$1;
(statearr_12176_12198[(2)] = inst_12156);

(statearr_12176_12198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (10))){
var state_12162__$1 = state_12162;
var statearr_12177_12199 = state_12162__$1;
(statearr_12177_12199[(2)] = fc);

(statearr_12177_12199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12163 === (8))){
var inst_12151 = (state_12162[(2)]);
var state_12162__$1 = state_12162;
if(cljs.core.truth_(inst_12151)){
var statearr_12178_12200 = state_12162__$1;
(statearr_12178_12200[(1)] = (12));

} else {
var statearr_12179_12201 = state_12162__$1;
(statearr_12179_12201[(1)] = (13));

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
});})(c__5869__auto___12187,tc,fc))
;
return ((function (switch__5854__auto__,c__5869__auto___12187,tc,fc){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12183 = [null,null,null,null,null,null,null,null,null];
(statearr_12183[(0)] = state_machine__5855__auto__);

(statearr_12183[(1)] = (1));

return statearr_12183;
});
var state_machine__5855__auto____1 = (function (state_12162){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object)){
var ex__5858__auto__ = e12184;
var statearr_12185_12202 = state_12162;
(statearr_12185_12202[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12203 = state_12162;
state_12162 = G__12203;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12162){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12187,tc,fc))
})();
var state__5871__auto__ = (function (){var statearr_12186 = f__5870__auto__.call(null);
(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12187);

return statearr_12186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12187,tc,fc))
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
return (function (state_12250){
var state_val_12251 = (state_12250[(1)]);
if((state_val_12251 === (7))){
var inst_12246 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12252_12268 = state_12250__$1;
(statearr_12252_12268[(2)] = inst_12246);

(statearr_12252_12268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (6))){
var inst_12236 = (state_12250[(7)]);
var inst_12239 = (state_12250[(8)]);
var inst_12243 = f.call(null,inst_12236,inst_12239);
var inst_12236__$1 = inst_12243;
var state_12250__$1 = (function (){var statearr_12253 = state_12250;
(statearr_12253[(7)] = inst_12236__$1);

return statearr_12253;
})();
var statearr_12254_12269 = state_12250__$1;
(statearr_12254_12269[(2)] = null);

(statearr_12254_12269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (5))){
var inst_12236 = (state_12250[(7)]);
var state_12250__$1 = state_12250;
var statearr_12255_12270 = state_12250__$1;
(statearr_12255_12270[(2)] = inst_12236);

(statearr_12255_12270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (4))){
var inst_12239 = (state_12250[(8)]);
var inst_12239__$1 = (state_12250[(2)]);
var inst_12240 = (inst_12239__$1 == null);
var state_12250__$1 = (function (){var statearr_12256 = state_12250;
(statearr_12256[(8)] = inst_12239__$1);

return statearr_12256;
})();
if(cljs.core.truth_(inst_12240)){
var statearr_12257_12271 = state_12250__$1;
(statearr_12257_12271[(1)] = (5));

} else {
var statearr_12258_12272 = state_12250__$1;
(statearr_12258_12272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (3))){
var inst_12248 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12250__$1,inst_12248);
} else {
if((state_val_12251 === (2))){
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(4),ch);
} else {
if((state_val_12251 === (1))){
var inst_12236 = init;
var state_12250__$1 = (function (){var statearr_12259 = state_12250;
(statearr_12259[(7)] = inst_12236);

return statearr_12259;
})();
var statearr_12260_12273 = state_12250__$1;
(statearr_12260_12273[(2)] = null);

(statearr_12260_12273[(1)] = (2));


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
var statearr_12264 = [null,null,null,null,null,null,null,null,null];
(statearr_12264[(0)] = state_machine__5855__auto__);

(statearr_12264[(1)] = (1));

return statearr_12264;
});
var state_machine__5855__auto____1 = (function (state_12250){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12265){if((e12265 instanceof Object)){
var ex__5858__auto__ = e12265;
var statearr_12266_12274 = state_12250;
(statearr_12266_12274[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12275 = state_12250;
state_12250 = G__12275;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12250){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_12267 = f__5870__auto__.call(null);
(statearr_12267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12267;
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
return (function (state_12349){
var state_val_12350 = (state_12349[(1)]);
if((state_val_12350 === (7))){
var inst_12331 = (state_12349[(2)]);
var state_12349__$1 = state_12349;
var statearr_12351_12374 = state_12349__$1;
(statearr_12351_12374[(2)] = inst_12331);

(statearr_12351_12374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (1))){
var inst_12325 = cljs.core.seq.call(null,coll);
var inst_12326 = inst_12325;
var state_12349__$1 = (function (){var statearr_12352 = state_12349;
(statearr_12352[(7)] = inst_12326);

return statearr_12352;
})();
var statearr_12353_12375 = state_12349__$1;
(statearr_12353_12375[(2)] = null);

(statearr_12353_12375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (4))){
var inst_12326 = (state_12349[(7)]);
var inst_12329 = cljs.core.first.call(null,inst_12326);
var state_12349__$1 = state_12349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12349__$1,(7),ch,inst_12329);
} else {
if((state_val_12350 === (13))){
var inst_12343 = (state_12349[(2)]);
var state_12349__$1 = state_12349;
var statearr_12354_12376 = state_12349__$1;
(statearr_12354_12376[(2)] = inst_12343);

(statearr_12354_12376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (6))){
var inst_12334 = (state_12349[(2)]);
var state_12349__$1 = state_12349;
if(cljs.core.truth_(inst_12334)){
var statearr_12355_12377 = state_12349__$1;
(statearr_12355_12377[(1)] = (8));

} else {
var statearr_12356_12378 = state_12349__$1;
(statearr_12356_12378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (3))){
var inst_12347 = (state_12349[(2)]);
var state_12349__$1 = state_12349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12349__$1,inst_12347);
} else {
if((state_val_12350 === (12))){
var state_12349__$1 = state_12349;
var statearr_12357_12379 = state_12349__$1;
(statearr_12357_12379[(2)] = null);

(statearr_12357_12379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (2))){
var inst_12326 = (state_12349[(7)]);
var state_12349__$1 = state_12349;
if(cljs.core.truth_(inst_12326)){
var statearr_12358_12380 = state_12349__$1;
(statearr_12358_12380[(1)] = (4));

} else {
var statearr_12359_12381 = state_12349__$1;
(statearr_12359_12381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (11))){
var inst_12340 = cljs.core.async.close_BANG_.call(null,ch);
var state_12349__$1 = state_12349;
var statearr_12360_12382 = state_12349__$1;
(statearr_12360_12382[(2)] = inst_12340);

(statearr_12360_12382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (9))){
var state_12349__$1 = state_12349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12361_12383 = state_12349__$1;
(statearr_12361_12383[(1)] = (11));

} else {
var statearr_12362_12384 = state_12349__$1;
(statearr_12362_12384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (5))){
var inst_12326 = (state_12349[(7)]);
var state_12349__$1 = state_12349;
var statearr_12363_12385 = state_12349__$1;
(statearr_12363_12385[(2)] = inst_12326);

(statearr_12363_12385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (10))){
var inst_12345 = (state_12349[(2)]);
var state_12349__$1 = state_12349;
var statearr_12364_12386 = state_12349__$1;
(statearr_12364_12386[(2)] = inst_12345);

(statearr_12364_12386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12350 === (8))){
var inst_12326 = (state_12349[(7)]);
var inst_12336 = cljs.core.next.call(null,inst_12326);
var inst_12326__$1 = inst_12336;
var state_12349__$1 = (function (){var statearr_12365 = state_12349;
(statearr_12365[(7)] = inst_12326__$1);

return statearr_12365;
})();
var statearr_12366_12387 = state_12349__$1;
(statearr_12366_12387[(2)] = null);

(statearr_12366_12387[(1)] = (2));


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
var statearr_12370 = [null,null,null,null,null,null,null,null];
(statearr_12370[(0)] = state_machine__5855__auto__);

(statearr_12370[(1)] = (1));

return statearr_12370;
});
var state_machine__5855__auto____1 = (function (state_12349){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12371){if((e12371 instanceof Object)){
var ex__5858__auto__ = e12371;
var statearr_12372_12388 = state_12349;
(statearr_12372_12388[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12389 = state_12349;
state_12349 = G__12389;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12349){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_12373 = f__5870__auto__.call(null);
(statearr_12373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_12373;
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

cljs.core.async.Mux = (function (){var obj12391 = {};
return obj12391;
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


cljs.core.async.Mult = (function (){var obj12393 = {};
return obj12393;
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
if(typeof cljs.core.async.t12615 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12615 = (function (cs,ch,mult,meta12616){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12616 = meta12616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12615.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12615.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12615.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12615.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12615.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12617){
var self__ = this;
var _12617__$1 = this;
return self__.meta12616;
});})(cs))
;

cljs.core.async.t12615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12617,meta12616__$1){
var self__ = this;
var _12617__$1 = this;
return (new cljs.core.async.t12615(self__.cs,self__.ch,self__.mult,meta12616__$1));
});})(cs))
;

cljs.core.async.t12615.cljs$lang$type = true;

cljs.core.async.t12615.cljs$lang$ctorStr = "cljs.core.async/t12615";

cljs.core.async.t12615.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12615");
});})(cs))
;

cljs.core.async.__GT_t12615 = ((function (cs){
return (function __GT_t12615(cs__$1,ch__$1,mult__$1,meta12616){
return (new cljs.core.async.t12615(cs__$1,ch__$1,mult__$1,meta12616));
});})(cs))
;

}

return (new cljs.core.async.t12615(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___12836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___12836,cs,m,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___12836,cs,m,dchan,dctr,done){
return (function (state_12748){
var state_val_12749 = (state_12748[(1)]);
if((state_val_12749 === (7))){
var inst_12744 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12750_12837 = state_12748__$1;
(statearr_12750_12837[(2)] = inst_12744);

(statearr_12750_12837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (20))){
var inst_12649 = (state_12748[(7)]);
var inst_12659 = cljs.core.first.call(null,inst_12649);
var inst_12660 = cljs.core.nth.call(null,inst_12659,(0),null);
var inst_12661 = cljs.core.nth.call(null,inst_12659,(1),null);
var state_12748__$1 = (function (){var statearr_12751 = state_12748;
(statearr_12751[(8)] = inst_12660);

return statearr_12751;
})();
if(cljs.core.truth_(inst_12661)){
var statearr_12752_12838 = state_12748__$1;
(statearr_12752_12838[(1)] = (22));

} else {
var statearr_12753_12839 = state_12748__$1;
(statearr_12753_12839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (27))){
var inst_12689 = (state_12748[(9)]);
var inst_12691 = (state_12748[(10)]);
var inst_12696 = (state_12748[(11)]);
var inst_12620 = (state_12748[(12)]);
var inst_12696__$1 = cljs.core._nth.call(null,inst_12689,inst_12691);
var inst_12697 = cljs.core.async.put_BANG_.call(null,inst_12696__$1,inst_12620,done);
var state_12748__$1 = (function (){var statearr_12754 = state_12748;
(statearr_12754[(11)] = inst_12696__$1);

return statearr_12754;
})();
if(cljs.core.truth_(inst_12697)){
var statearr_12755_12840 = state_12748__$1;
(statearr_12755_12840[(1)] = (30));

} else {
var statearr_12756_12841 = state_12748__$1;
(statearr_12756_12841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (1))){
var state_12748__$1 = state_12748;
var statearr_12757_12842 = state_12748__$1;
(statearr_12757_12842[(2)] = null);

(statearr_12757_12842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (24))){
var inst_12649 = (state_12748[(7)]);
var inst_12666 = (state_12748[(2)]);
var inst_12667 = cljs.core.next.call(null,inst_12649);
var inst_12629 = inst_12667;
var inst_12630 = null;
var inst_12631 = (0);
var inst_12632 = (0);
var state_12748__$1 = (function (){var statearr_12758 = state_12748;
(statearr_12758[(13)] = inst_12630);

(statearr_12758[(14)] = inst_12666);

(statearr_12758[(15)] = inst_12632);

(statearr_12758[(16)] = inst_12629);

(statearr_12758[(17)] = inst_12631);

return statearr_12758;
})();
var statearr_12759_12843 = state_12748__$1;
(statearr_12759_12843[(2)] = null);

(statearr_12759_12843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (39))){
var state_12748__$1 = state_12748;
var statearr_12763_12844 = state_12748__$1;
(statearr_12763_12844[(2)] = null);

(statearr_12763_12844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (4))){
var inst_12620 = (state_12748[(12)]);
var inst_12620__$1 = (state_12748[(2)]);
var inst_12621 = (inst_12620__$1 == null);
var state_12748__$1 = (function (){var statearr_12764 = state_12748;
(statearr_12764[(12)] = inst_12620__$1);

return statearr_12764;
})();
if(cljs.core.truth_(inst_12621)){
var statearr_12765_12845 = state_12748__$1;
(statearr_12765_12845[(1)] = (5));

} else {
var statearr_12766_12846 = state_12748__$1;
(statearr_12766_12846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (15))){
var inst_12630 = (state_12748[(13)]);
var inst_12632 = (state_12748[(15)]);
var inst_12629 = (state_12748[(16)]);
var inst_12631 = (state_12748[(17)]);
var inst_12645 = (state_12748[(2)]);
var inst_12646 = (inst_12632 + (1));
var tmp12760 = inst_12630;
var tmp12761 = inst_12629;
var tmp12762 = inst_12631;
var inst_12629__$1 = tmp12761;
var inst_12630__$1 = tmp12760;
var inst_12631__$1 = tmp12762;
var inst_12632__$1 = inst_12646;
var state_12748__$1 = (function (){var statearr_12767 = state_12748;
(statearr_12767[(13)] = inst_12630__$1);

(statearr_12767[(18)] = inst_12645);

(statearr_12767[(15)] = inst_12632__$1);

(statearr_12767[(16)] = inst_12629__$1);

(statearr_12767[(17)] = inst_12631__$1);

return statearr_12767;
})();
var statearr_12768_12847 = state_12748__$1;
(statearr_12768_12847[(2)] = null);

(statearr_12768_12847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (21))){
var inst_12670 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12772_12848 = state_12748__$1;
(statearr_12772_12848[(2)] = inst_12670);

(statearr_12772_12848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (31))){
var inst_12696 = (state_12748[(11)]);
var inst_12700 = done.call(null,null);
var inst_12701 = cljs.core.async.untap_STAR_.call(null,m,inst_12696);
var state_12748__$1 = (function (){var statearr_12773 = state_12748;
(statearr_12773[(19)] = inst_12700);

return statearr_12773;
})();
var statearr_12774_12849 = state_12748__$1;
(statearr_12774_12849[(2)] = inst_12701);

(statearr_12774_12849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (32))){
var inst_12688 = (state_12748[(20)]);
var inst_12689 = (state_12748[(9)]);
var inst_12691 = (state_12748[(10)]);
var inst_12690 = (state_12748[(21)]);
var inst_12703 = (state_12748[(2)]);
var inst_12704 = (inst_12691 + (1));
var tmp12769 = inst_12688;
var tmp12770 = inst_12689;
var tmp12771 = inst_12690;
var inst_12688__$1 = tmp12769;
var inst_12689__$1 = tmp12770;
var inst_12690__$1 = tmp12771;
var inst_12691__$1 = inst_12704;
var state_12748__$1 = (function (){var statearr_12775 = state_12748;
(statearr_12775[(20)] = inst_12688__$1);

(statearr_12775[(9)] = inst_12689__$1);

(statearr_12775[(10)] = inst_12691__$1);

(statearr_12775[(21)] = inst_12690__$1);

(statearr_12775[(22)] = inst_12703);

return statearr_12775;
})();
var statearr_12776_12850 = state_12748__$1;
(statearr_12776_12850[(2)] = null);

(statearr_12776_12850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (40))){
var inst_12716 = (state_12748[(23)]);
var inst_12720 = done.call(null,null);
var inst_12721 = cljs.core.async.untap_STAR_.call(null,m,inst_12716);
var state_12748__$1 = (function (){var statearr_12777 = state_12748;
(statearr_12777[(24)] = inst_12720);

return statearr_12777;
})();
var statearr_12778_12851 = state_12748__$1;
(statearr_12778_12851[(2)] = inst_12721);

(statearr_12778_12851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (33))){
var inst_12707 = (state_12748[(25)]);
var inst_12709 = cljs.core.chunked_seq_QMARK_.call(null,inst_12707);
var state_12748__$1 = state_12748;
if(inst_12709){
var statearr_12779_12852 = state_12748__$1;
(statearr_12779_12852[(1)] = (36));

} else {
var statearr_12780_12853 = state_12748__$1;
(statearr_12780_12853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (13))){
var inst_12639 = (state_12748[(26)]);
var inst_12642 = cljs.core.async.close_BANG_.call(null,inst_12639);
var state_12748__$1 = state_12748;
var statearr_12781_12854 = state_12748__$1;
(statearr_12781_12854[(2)] = inst_12642);

(statearr_12781_12854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (22))){
var inst_12660 = (state_12748[(8)]);
var inst_12663 = cljs.core.async.close_BANG_.call(null,inst_12660);
var state_12748__$1 = state_12748;
var statearr_12782_12855 = state_12748__$1;
(statearr_12782_12855[(2)] = inst_12663);

(statearr_12782_12855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (36))){
var inst_12707 = (state_12748[(25)]);
var inst_12711 = cljs.core.chunk_first.call(null,inst_12707);
var inst_12712 = cljs.core.chunk_rest.call(null,inst_12707);
var inst_12713 = cljs.core.count.call(null,inst_12711);
var inst_12688 = inst_12712;
var inst_12689 = inst_12711;
var inst_12690 = inst_12713;
var inst_12691 = (0);
var state_12748__$1 = (function (){var statearr_12783 = state_12748;
(statearr_12783[(20)] = inst_12688);

(statearr_12783[(9)] = inst_12689);

(statearr_12783[(10)] = inst_12691);

(statearr_12783[(21)] = inst_12690);

return statearr_12783;
})();
var statearr_12784_12856 = state_12748__$1;
(statearr_12784_12856[(2)] = null);

(statearr_12784_12856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (41))){
var inst_12707 = (state_12748[(25)]);
var inst_12723 = (state_12748[(2)]);
var inst_12724 = cljs.core.next.call(null,inst_12707);
var inst_12688 = inst_12724;
var inst_12689 = null;
var inst_12690 = (0);
var inst_12691 = (0);
var state_12748__$1 = (function (){var statearr_12785 = state_12748;
(statearr_12785[(20)] = inst_12688);

(statearr_12785[(9)] = inst_12689);

(statearr_12785[(10)] = inst_12691);

(statearr_12785[(21)] = inst_12690);

(statearr_12785[(27)] = inst_12723);

return statearr_12785;
})();
var statearr_12786_12857 = state_12748__$1;
(statearr_12786_12857[(2)] = null);

(statearr_12786_12857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (43))){
var state_12748__$1 = state_12748;
var statearr_12787_12858 = state_12748__$1;
(statearr_12787_12858[(2)] = null);

(statearr_12787_12858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (29))){
var inst_12732 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12788_12859 = state_12748__$1;
(statearr_12788_12859[(2)] = inst_12732);

(statearr_12788_12859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (44))){
var inst_12741 = (state_12748[(2)]);
var state_12748__$1 = (function (){var statearr_12789 = state_12748;
(statearr_12789[(28)] = inst_12741);

return statearr_12789;
})();
var statearr_12790_12860 = state_12748__$1;
(statearr_12790_12860[(2)] = null);

(statearr_12790_12860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (6))){
var inst_12680 = (state_12748[(29)]);
var inst_12679 = cljs.core.deref.call(null,cs);
var inst_12680__$1 = cljs.core.keys.call(null,inst_12679);
var inst_12681 = cljs.core.count.call(null,inst_12680__$1);
var inst_12682 = cljs.core.reset_BANG_.call(null,dctr,inst_12681);
var inst_12687 = cljs.core.seq.call(null,inst_12680__$1);
var inst_12688 = inst_12687;
var inst_12689 = null;
var inst_12690 = (0);
var inst_12691 = (0);
var state_12748__$1 = (function (){var statearr_12791 = state_12748;
(statearr_12791[(20)] = inst_12688);

(statearr_12791[(9)] = inst_12689);

(statearr_12791[(30)] = inst_12682);

(statearr_12791[(10)] = inst_12691);

(statearr_12791[(21)] = inst_12690);

(statearr_12791[(29)] = inst_12680__$1);

return statearr_12791;
})();
var statearr_12792_12861 = state_12748__$1;
(statearr_12792_12861[(2)] = null);

(statearr_12792_12861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (28))){
var inst_12688 = (state_12748[(20)]);
var inst_12707 = (state_12748[(25)]);
var inst_12707__$1 = cljs.core.seq.call(null,inst_12688);
var state_12748__$1 = (function (){var statearr_12793 = state_12748;
(statearr_12793[(25)] = inst_12707__$1);

return statearr_12793;
})();
if(inst_12707__$1){
var statearr_12794_12862 = state_12748__$1;
(statearr_12794_12862[(1)] = (33));

} else {
var statearr_12795_12863 = state_12748__$1;
(statearr_12795_12863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (25))){
var inst_12691 = (state_12748[(10)]);
var inst_12690 = (state_12748[(21)]);
var inst_12693 = (inst_12691 < inst_12690);
var inst_12694 = inst_12693;
var state_12748__$1 = state_12748;
if(cljs.core.truth_(inst_12694)){
var statearr_12796_12864 = state_12748__$1;
(statearr_12796_12864[(1)] = (27));

} else {
var statearr_12797_12865 = state_12748__$1;
(statearr_12797_12865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (34))){
var state_12748__$1 = state_12748;
var statearr_12798_12866 = state_12748__$1;
(statearr_12798_12866[(2)] = null);

(statearr_12798_12866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (17))){
var state_12748__$1 = state_12748;
var statearr_12799_12867 = state_12748__$1;
(statearr_12799_12867[(2)] = null);

(statearr_12799_12867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (3))){
var inst_12746 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12748__$1,inst_12746);
} else {
if((state_val_12749 === (12))){
var inst_12675 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12800_12868 = state_12748__$1;
(statearr_12800_12868[(2)] = inst_12675);

(statearr_12800_12868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (2))){
var state_12748__$1 = state_12748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12748__$1,(4),ch);
} else {
if((state_val_12749 === (23))){
var state_12748__$1 = state_12748;
var statearr_12801_12869 = state_12748__$1;
(statearr_12801_12869[(2)] = null);

(statearr_12801_12869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (35))){
var inst_12730 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12802_12870 = state_12748__$1;
(statearr_12802_12870[(2)] = inst_12730);

(statearr_12802_12870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (19))){
var inst_12649 = (state_12748[(7)]);
var inst_12653 = cljs.core.chunk_first.call(null,inst_12649);
var inst_12654 = cljs.core.chunk_rest.call(null,inst_12649);
var inst_12655 = cljs.core.count.call(null,inst_12653);
var inst_12629 = inst_12654;
var inst_12630 = inst_12653;
var inst_12631 = inst_12655;
var inst_12632 = (0);
var state_12748__$1 = (function (){var statearr_12803 = state_12748;
(statearr_12803[(13)] = inst_12630);

(statearr_12803[(15)] = inst_12632);

(statearr_12803[(16)] = inst_12629);

(statearr_12803[(17)] = inst_12631);

return statearr_12803;
})();
var statearr_12804_12871 = state_12748__$1;
(statearr_12804_12871[(2)] = null);

(statearr_12804_12871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (11))){
var inst_12649 = (state_12748[(7)]);
var inst_12629 = (state_12748[(16)]);
var inst_12649__$1 = cljs.core.seq.call(null,inst_12629);
var state_12748__$1 = (function (){var statearr_12805 = state_12748;
(statearr_12805[(7)] = inst_12649__$1);

return statearr_12805;
})();
if(inst_12649__$1){
var statearr_12806_12872 = state_12748__$1;
(statearr_12806_12872[(1)] = (16));

} else {
var statearr_12807_12873 = state_12748__$1;
(statearr_12807_12873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (9))){
var inst_12677 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12808_12874 = state_12748__$1;
(statearr_12808_12874[(2)] = inst_12677);

(statearr_12808_12874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (5))){
var inst_12627 = cljs.core.deref.call(null,cs);
var inst_12628 = cljs.core.seq.call(null,inst_12627);
var inst_12629 = inst_12628;
var inst_12630 = null;
var inst_12631 = (0);
var inst_12632 = (0);
var state_12748__$1 = (function (){var statearr_12809 = state_12748;
(statearr_12809[(13)] = inst_12630);

(statearr_12809[(15)] = inst_12632);

(statearr_12809[(16)] = inst_12629);

(statearr_12809[(17)] = inst_12631);

return statearr_12809;
})();
var statearr_12810_12875 = state_12748__$1;
(statearr_12810_12875[(2)] = null);

(statearr_12810_12875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (14))){
var state_12748__$1 = state_12748;
var statearr_12811_12876 = state_12748__$1;
(statearr_12811_12876[(2)] = null);

(statearr_12811_12876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (45))){
var inst_12738 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12812_12877 = state_12748__$1;
(statearr_12812_12877[(2)] = inst_12738);

(statearr_12812_12877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (26))){
var inst_12680 = (state_12748[(29)]);
var inst_12734 = (state_12748[(2)]);
var inst_12735 = cljs.core.seq.call(null,inst_12680);
var state_12748__$1 = (function (){var statearr_12813 = state_12748;
(statearr_12813[(31)] = inst_12734);

return statearr_12813;
})();
if(inst_12735){
var statearr_12814_12878 = state_12748__$1;
(statearr_12814_12878[(1)] = (42));

} else {
var statearr_12815_12879 = state_12748__$1;
(statearr_12815_12879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (16))){
var inst_12649 = (state_12748[(7)]);
var inst_12651 = cljs.core.chunked_seq_QMARK_.call(null,inst_12649);
var state_12748__$1 = state_12748;
if(inst_12651){
var statearr_12816_12880 = state_12748__$1;
(statearr_12816_12880[(1)] = (19));

} else {
var statearr_12817_12881 = state_12748__$1;
(statearr_12817_12881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (38))){
var inst_12727 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12818_12882 = state_12748__$1;
(statearr_12818_12882[(2)] = inst_12727);

(statearr_12818_12882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (30))){
var state_12748__$1 = state_12748;
var statearr_12819_12883 = state_12748__$1;
(statearr_12819_12883[(2)] = null);

(statearr_12819_12883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (10))){
var inst_12630 = (state_12748[(13)]);
var inst_12632 = (state_12748[(15)]);
var inst_12638 = cljs.core._nth.call(null,inst_12630,inst_12632);
var inst_12639 = cljs.core.nth.call(null,inst_12638,(0),null);
var inst_12640 = cljs.core.nth.call(null,inst_12638,(1),null);
var state_12748__$1 = (function (){var statearr_12820 = state_12748;
(statearr_12820[(26)] = inst_12639);

return statearr_12820;
})();
if(cljs.core.truth_(inst_12640)){
var statearr_12821_12884 = state_12748__$1;
(statearr_12821_12884[(1)] = (13));

} else {
var statearr_12822_12885 = state_12748__$1;
(statearr_12822_12885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (18))){
var inst_12673 = (state_12748[(2)]);
var state_12748__$1 = state_12748;
var statearr_12823_12886 = state_12748__$1;
(statearr_12823_12886[(2)] = inst_12673);

(statearr_12823_12886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (42))){
var state_12748__$1 = state_12748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12748__$1,(45),dchan);
} else {
if((state_val_12749 === (37))){
var inst_12707 = (state_12748[(25)]);
var inst_12716 = (state_12748[(23)]);
var inst_12620 = (state_12748[(12)]);
var inst_12716__$1 = cljs.core.first.call(null,inst_12707);
var inst_12717 = cljs.core.async.put_BANG_.call(null,inst_12716__$1,inst_12620,done);
var state_12748__$1 = (function (){var statearr_12824 = state_12748;
(statearr_12824[(23)] = inst_12716__$1);

return statearr_12824;
})();
if(cljs.core.truth_(inst_12717)){
var statearr_12825_12887 = state_12748__$1;
(statearr_12825_12887[(1)] = (39));

} else {
var statearr_12826_12888 = state_12748__$1;
(statearr_12826_12888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12749 === (8))){
var inst_12632 = (state_12748[(15)]);
var inst_12631 = (state_12748[(17)]);
var inst_12634 = (inst_12632 < inst_12631);
var inst_12635 = inst_12634;
var state_12748__$1 = state_12748;
if(cljs.core.truth_(inst_12635)){
var statearr_12827_12889 = state_12748__$1;
(statearr_12827_12889[(1)] = (10));

} else {
var statearr_12828_12890 = state_12748__$1;
(statearr_12828_12890[(1)] = (11));

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
});})(c__5869__auto___12836,cs,m,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___12836,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_12832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12832[(0)] = state_machine__5855__auto__);

(statearr_12832[(1)] = (1));

return statearr_12832;
});
var state_machine__5855__auto____1 = (function (state_12748){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_12748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e12833){if((e12833 instanceof Object)){
var ex__5858__auto__ = e12833;
var statearr_12834_12891 = state_12748;
(statearr_12834_12891[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12892 = state_12748;
state_12748 = G__12892;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_12748){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_12748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___12836,cs,m,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_12835 = f__5870__auto__.call(null);
(statearr_12835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___12836);

return statearr_12835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___12836,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj12894 = {};
return obj12894;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12895){
var map__12900 = p__12895;
var map__12900__$1 = ((cljs.core.seq_QMARK_.call(null,map__12900))?cljs.core.apply.call(null,cljs.core.hash_map,map__12900):map__12900);
var opts = map__12900__$1;
var statearr_12901_12904 = state;
(statearr_12901_12904[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12900,map__12900__$1,opts){
return (function (val){
var statearr_12902_12905 = state;
(statearr_12902_12905[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12900,map__12900__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12903_12906 = state;
(statearr_12903_12906[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12895 = null;
if (arguments.length > 3) {
  p__12895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12895);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12907){
var state = cljs.core.first(arglist__12907);
arglist__12907 = cljs.core.next(arglist__12907);
var cont_block = cljs.core.first(arglist__12907);
arglist__12907 = cljs.core.next(arglist__12907);
var ports = cljs.core.first(arglist__12907);
var p__12895 = cljs.core.rest(arglist__12907);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12895);
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
if(typeof cljs.core.async.t13027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13027 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13028){
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
this.meta13028 = meta13028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13027.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13027.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13027.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13029){
var self__ = this;
var _13029__$1 = this;
return self__.meta13028;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13029,meta13028__$1){
var self__ = this;
var _13029__$1 = this;
return (new cljs.core.async.t13027(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13028__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13027.cljs$lang$type = true;

cljs.core.async.t13027.cljs$lang$ctorStr = "cljs.core.async/t13027";

cljs.core.async.t13027.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13027");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13027 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13028){
return (new cljs.core.async.t13027(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13028));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13027(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___13146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13099){
var state_val_13100 = (state_13099[(1)]);
if((state_val_13100 === (7))){
var inst_13043 = (state_13099[(7)]);
var inst_13048 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13043);
var state_13099__$1 = state_13099;
var statearr_13101_13147 = state_13099__$1;
(statearr_13101_13147[(2)] = inst_13048);

(statearr_13101_13147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (20))){
var inst_13058 = (state_13099[(8)]);
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,(23),out,inst_13058);
} else {
if((state_val_13100 === (1))){
var inst_13033 = (state_13099[(9)]);
var inst_13033__$1 = calc_state.call(null);
var inst_13034 = cljs.core.seq_QMARK_.call(null,inst_13033__$1);
var state_13099__$1 = (function (){var statearr_13102 = state_13099;
(statearr_13102[(9)] = inst_13033__$1);

return statearr_13102;
})();
if(inst_13034){
var statearr_13103_13148 = state_13099__$1;
(statearr_13103_13148[(1)] = (2));

} else {
var statearr_13104_13149 = state_13099__$1;
(statearr_13104_13149[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (24))){
var inst_13051 = (state_13099[(10)]);
var inst_13043 = inst_13051;
var state_13099__$1 = (function (){var statearr_13105 = state_13099;
(statearr_13105[(7)] = inst_13043);

return statearr_13105;
})();
var statearr_13106_13150 = state_13099__$1;
(statearr_13106_13150[(2)] = null);

(statearr_13106_13150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (4))){
var inst_13033 = (state_13099[(9)]);
var inst_13039 = (state_13099[(2)]);
var inst_13040 = cljs.core.get.call(null,inst_13039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13041 = cljs.core.get.call(null,inst_13039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13042 = cljs.core.get.call(null,inst_13039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13043 = inst_13033;
var state_13099__$1 = (function (){var statearr_13107 = state_13099;
(statearr_13107[(11)] = inst_13041);

(statearr_13107[(12)] = inst_13042);

(statearr_13107[(7)] = inst_13043);

(statearr_13107[(13)] = inst_13040);

return statearr_13107;
})();
var statearr_13108_13151 = state_13099__$1;
(statearr_13108_13151[(2)] = null);

(statearr_13108_13151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (15))){
var state_13099__$1 = state_13099;
var statearr_13109_13152 = state_13099__$1;
(statearr_13109_13152[(2)] = null);

(statearr_13109_13152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (21))){
var inst_13051 = (state_13099[(10)]);
var inst_13043 = inst_13051;
var state_13099__$1 = (function (){var statearr_13110 = state_13099;
(statearr_13110[(7)] = inst_13043);

return statearr_13110;
})();
var statearr_13111_13153 = state_13099__$1;
(statearr_13111_13153[(2)] = null);

(statearr_13111_13153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (13))){
var inst_13095 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13112_13154 = state_13099__$1;
(statearr_13112_13154[(2)] = inst_13095);

(statearr_13112_13154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (22))){
var inst_13093 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13113_13155 = state_13099__$1;
(statearr_13113_13155[(2)] = inst_13093);

(statearr_13113_13155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (6))){
var inst_13097 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else {
if((state_val_13100 === (25))){
var state_13099__$1 = state_13099;
var statearr_13114_13156 = state_13099__$1;
(statearr_13114_13156[(2)] = null);

(statearr_13114_13156[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (17))){
var inst_13073 = (state_13099[(14)]);
var state_13099__$1 = state_13099;
var statearr_13115_13157 = state_13099__$1;
(statearr_13115_13157[(2)] = inst_13073);

(statearr_13115_13157[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (3))){
var inst_13033 = (state_13099[(9)]);
var state_13099__$1 = state_13099;
var statearr_13116_13158 = state_13099__$1;
(statearr_13116_13158[(2)] = inst_13033);

(statearr_13116_13158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (12))){
var inst_13059 = (state_13099[(15)]);
var inst_13054 = (state_13099[(16)]);
var inst_13073 = (state_13099[(14)]);
var inst_13073__$1 = inst_13054.call(null,inst_13059);
var state_13099__$1 = (function (){var statearr_13117 = state_13099;
(statearr_13117[(14)] = inst_13073__$1);

return statearr_13117;
})();
if(cljs.core.truth_(inst_13073__$1)){
var statearr_13118_13159 = state_13099__$1;
(statearr_13118_13159[(1)] = (17));

} else {
var statearr_13119_13160 = state_13099__$1;
(statearr_13119_13160[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (2))){
var inst_13033 = (state_13099[(9)]);
var inst_13036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13033);
var state_13099__$1 = state_13099;
var statearr_13120_13161 = state_13099__$1;
(statearr_13120_13161[(2)] = inst_13036);

(statearr_13120_13161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (23))){
var inst_13084 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
if(cljs.core.truth_(inst_13084)){
var statearr_13121_13162 = state_13099__$1;
(statearr_13121_13162[(1)] = (24));

} else {
var statearr_13122_13163 = state_13099__$1;
(statearr_13122_13163[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (19))){
var inst_13081 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
if(cljs.core.truth_(inst_13081)){
var statearr_13123_13164 = state_13099__$1;
(statearr_13123_13164[(1)] = (20));

} else {
var statearr_13124_13165 = state_13099__$1;
(statearr_13124_13165[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (11))){
var inst_13058 = (state_13099[(8)]);
var inst_13064 = (inst_13058 == null);
var state_13099__$1 = state_13099;
if(cljs.core.truth_(inst_13064)){
var statearr_13125_13166 = state_13099__$1;
(statearr_13125_13166[(1)] = (14));

} else {
var statearr_13126_13167 = state_13099__$1;
(statearr_13126_13167[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (9))){
var inst_13051 = (state_13099[(10)]);
var inst_13051__$1 = (state_13099[(2)]);
var inst_13052 = cljs.core.get.call(null,inst_13051__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13053 = cljs.core.get.call(null,inst_13051__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13054 = cljs.core.get.call(null,inst_13051__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13099__$1 = (function (){var statearr_13127 = state_13099;
(statearr_13127[(17)] = inst_13053);

(statearr_13127[(10)] = inst_13051__$1);

(statearr_13127[(16)] = inst_13054);

return statearr_13127;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13099__$1,(10),inst_13052);
} else {
if((state_val_13100 === (5))){
var inst_13043 = (state_13099[(7)]);
var inst_13046 = cljs.core.seq_QMARK_.call(null,inst_13043);
var state_13099__$1 = state_13099;
if(inst_13046){
var statearr_13128_13168 = state_13099__$1;
(statearr_13128_13168[(1)] = (7));

} else {
var statearr_13129_13169 = state_13099__$1;
(statearr_13129_13169[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (14))){
var inst_13059 = (state_13099[(15)]);
var inst_13066 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13059);
var state_13099__$1 = state_13099;
var statearr_13130_13170 = state_13099__$1;
(statearr_13130_13170[(2)] = inst_13066);

(statearr_13130_13170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (26))){
var inst_13089 = (state_13099[(2)]);
var state_13099__$1 = state_13099;
var statearr_13131_13171 = state_13099__$1;
(statearr_13131_13171[(2)] = inst_13089);

(statearr_13131_13171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (16))){
var inst_13069 = (state_13099[(2)]);
var inst_13070 = calc_state.call(null);
var inst_13043 = inst_13070;
var state_13099__$1 = (function (){var statearr_13132 = state_13099;
(statearr_13132[(7)] = inst_13043);

(statearr_13132[(18)] = inst_13069);

return statearr_13132;
})();
var statearr_13133_13172 = state_13099__$1;
(statearr_13133_13172[(2)] = null);

(statearr_13133_13172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (10))){
var inst_13058 = (state_13099[(8)]);
var inst_13059 = (state_13099[(15)]);
var inst_13057 = (state_13099[(2)]);
var inst_13058__$1 = cljs.core.nth.call(null,inst_13057,(0),null);
var inst_13059__$1 = cljs.core.nth.call(null,inst_13057,(1),null);
var inst_13060 = (inst_13058__$1 == null);
var inst_13061 = cljs.core._EQ_.call(null,inst_13059__$1,change);
var inst_13062 = (inst_13060) || (inst_13061);
var state_13099__$1 = (function (){var statearr_13134 = state_13099;
(statearr_13134[(8)] = inst_13058__$1);

(statearr_13134[(15)] = inst_13059__$1);

return statearr_13134;
})();
if(cljs.core.truth_(inst_13062)){
var statearr_13135_13173 = state_13099__$1;
(statearr_13135_13173[(1)] = (11));

} else {
var statearr_13136_13174 = state_13099__$1;
(statearr_13136_13174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (18))){
var inst_13059 = (state_13099[(15)]);
var inst_13053 = (state_13099[(17)]);
var inst_13054 = (state_13099[(16)]);
var inst_13076 = cljs.core.empty_QMARK_.call(null,inst_13054);
var inst_13077 = inst_13053.call(null,inst_13059);
var inst_13078 = cljs.core.not.call(null,inst_13077);
var inst_13079 = (inst_13076) && (inst_13078);
var state_13099__$1 = state_13099;
var statearr_13137_13175 = state_13099__$1;
(statearr_13137_13175[(2)] = inst_13079);

(statearr_13137_13175[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13100 === (8))){
var inst_13043 = (state_13099[(7)]);
var state_13099__$1 = state_13099;
var statearr_13138_13176 = state_13099__$1;
(statearr_13138_13176[(2)] = inst_13043);

(statearr_13138_13176[(1)] = (9));


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
});})(c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5854__auto__,c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13142[(0)] = state_machine__5855__auto__);

(statearr_13142[(1)] = (1));

return statearr_13142;
});
var state_machine__5855__auto____1 = (function (state_13099){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13143){if((e13143 instanceof Object)){
var ex__5858__auto__ = e13143;
var statearr_13144_13177 = state_13099;
(statearr_13144_13177[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13178 = state_13099;
state_13099 = G__13178;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5871__auto__ = (function (){var statearr_13145 = f__5870__auto__.call(null);
(statearr_13145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13146);

return statearr_13145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13180 = {};
return obj13180;
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
return (function (p1__13181_SHARP_){
if(cljs.core.truth_(p1__13181_SHARP_.call(null,topic))){
return p1__13181_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13181_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t13304 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13304 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13305){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13305 = meta13305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13304.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t13304.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t13304.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t13304.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t13304.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t13304.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t13304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13306){
var self__ = this;
var _13306__$1 = this;
return self__.meta13305;
});})(mults,ensure_mult))
;

cljs.core.async.t13304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13306,meta13305__$1){
var self__ = this;
var _13306__$1 = this;
return (new cljs.core.async.t13304(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13305__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t13304.cljs$lang$type = true;

cljs.core.async.t13304.cljs$lang$ctorStr = "cljs.core.async/t13304";

cljs.core.async.t13304.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13304");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t13304 = ((function (mults,ensure_mult){
return (function __GT_t13304(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13305){
return (new cljs.core.async.t13304(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13305));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t13304(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
})()
;
var c__5869__auto___13426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13426,mults,ensure_mult,p){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13426,mults,ensure_mult,p){
return (function (state_13378){
var state_val_13379 = (state_13378[(1)]);
if((state_val_13379 === (7))){
var inst_13374 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13380_13427 = state_13378__$1;
(statearr_13380_13427[(2)] = inst_13374);

(statearr_13380_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (20))){
var state_13378__$1 = state_13378;
var statearr_13381_13428 = state_13378__$1;
(statearr_13381_13428[(2)] = null);

(statearr_13381_13428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (1))){
var state_13378__$1 = state_13378;
var statearr_13382_13429 = state_13378__$1;
(statearr_13382_13429[(2)] = null);

(statearr_13382_13429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (24))){
var inst_13357 = (state_13378[(7)]);
var inst_13366 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13357);
var state_13378__$1 = state_13378;
var statearr_13383_13430 = state_13378__$1;
(statearr_13383_13430[(2)] = inst_13366);

(statearr_13383_13430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (4))){
var inst_13309 = (state_13378[(8)]);
var inst_13309__$1 = (state_13378[(2)]);
var inst_13310 = (inst_13309__$1 == null);
var state_13378__$1 = (function (){var statearr_13384 = state_13378;
(statearr_13384[(8)] = inst_13309__$1);

return statearr_13384;
})();
if(cljs.core.truth_(inst_13310)){
var statearr_13385_13431 = state_13378__$1;
(statearr_13385_13431[(1)] = (5));

} else {
var statearr_13386_13432 = state_13378__$1;
(statearr_13386_13432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (15))){
var inst_13351 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13387_13433 = state_13378__$1;
(statearr_13387_13433[(2)] = inst_13351);

(statearr_13387_13433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (21))){
var inst_13371 = (state_13378[(2)]);
var state_13378__$1 = (function (){var statearr_13388 = state_13378;
(statearr_13388[(9)] = inst_13371);

return statearr_13388;
})();
var statearr_13389_13434 = state_13378__$1;
(statearr_13389_13434[(2)] = null);

(statearr_13389_13434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (13))){
var inst_13333 = (state_13378[(10)]);
var inst_13335 = cljs.core.chunked_seq_QMARK_.call(null,inst_13333);
var state_13378__$1 = state_13378;
if(inst_13335){
var statearr_13390_13435 = state_13378__$1;
(statearr_13390_13435[(1)] = (16));

} else {
var statearr_13391_13436 = state_13378__$1;
(statearr_13391_13436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (22))){
var inst_13363 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
if(cljs.core.truth_(inst_13363)){
var statearr_13392_13437 = state_13378__$1;
(statearr_13392_13437[(1)] = (23));

} else {
var statearr_13393_13438 = state_13378__$1;
(statearr_13393_13438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (6))){
var inst_13359 = (state_13378[(11)]);
var inst_13357 = (state_13378[(7)]);
var inst_13309 = (state_13378[(8)]);
var inst_13357__$1 = topic_fn.call(null,inst_13309);
var inst_13358 = cljs.core.deref.call(null,mults);
var inst_13359__$1 = cljs.core.get.call(null,inst_13358,inst_13357__$1);
var state_13378__$1 = (function (){var statearr_13394 = state_13378;
(statearr_13394[(11)] = inst_13359__$1);

(statearr_13394[(7)] = inst_13357__$1);

return statearr_13394;
})();
if(cljs.core.truth_(inst_13359__$1)){
var statearr_13395_13439 = state_13378__$1;
(statearr_13395_13439[(1)] = (19));

} else {
var statearr_13396_13440 = state_13378__$1;
(statearr_13396_13440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (25))){
var inst_13368 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13397_13441 = state_13378__$1;
(statearr_13397_13441[(2)] = inst_13368);

(statearr_13397_13441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (17))){
var inst_13333 = (state_13378[(10)]);
var inst_13342 = cljs.core.first.call(null,inst_13333);
var inst_13343 = cljs.core.async.muxch_STAR_.call(null,inst_13342);
var inst_13344 = cljs.core.async.close_BANG_.call(null,inst_13343);
var inst_13345 = cljs.core.next.call(null,inst_13333);
var inst_13319 = inst_13345;
var inst_13320 = null;
var inst_13321 = (0);
var inst_13322 = (0);
var state_13378__$1 = (function (){var statearr_13398 = state_13378;
(statearr_13398[(12)] = inst_13344);

(statearr_13398[(13)] = inst_13320);

(statearr_13398[(14)] = inst_13321);

(statearr_13398[(15)] = inst_13319);

(statearr_13398[(16)] = inst_13322);

return statearr_13398;
})();
var statearr_13399_13442 = state_13378__$1;
(statearr_13399_13442[(2)] = null);

(statearr_13399_13442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (3))){
var inst_13376 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13378__$1,inst_13376);
} else {
if((state_val_13379 === (12))){
var inst_13353 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13400_13443 = state_13378__$1;
(statearr_13400_13443[(2)] = inst_13353);

(statearr_13400_13443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (2))){
var state_13378__$1 = state_13378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13378__$1,(4),ch);
} else {
if((state_val_13379 === (23))){
var state_13378__$1 = state_13378;
var statearr_13401_13444 = state_13378__$1;
(statearr_13401_13444[(2)] = null);

(statearr_13401_13444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (19))){
var inst_13359 = (state_13378[(11)]);
var inst_13309 = (state_13378[(8)]);
var inst_13361 = cljs.core.async.muxch_STAR_.call(null,inst_13359);
var state_13378__$1 = state_13378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13378__$1,(22),inst_13361,inst_13309);
} else {
if((state_val_13379 === (11))){
var inst_13333 = (state_13378[(10)]);
var inst_13319 = (state_13378[(15)]);
var inst_13333__$1 = cljs.core.seq.call(null,inst_13319);
var state_13378__$1 = (function (){var statearr_13402 = state_13378;
(statearr_13402[(10)] = inst_13333__$1);

return statearr_13402;
})();
if(inst_13333__$1){
var statearr_13403_13445 = state_13378__$1;
(statearr_13403_13445[(1)] = (13));

} else {
var statearr_13404_13446 = state_13378__$1;
(statearr_13404_13446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (9))){
var inst_13355 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13405_13447 = state_13378__$1;
(statearr_13405_13447[(2)] = inst_13355);

(statearr_13405_13447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (5))){
var inst_13316 = cljs.core.deref.call(null,mults);
var inst_13317 = cljs.core.vals.call(null,inst_13316);
var inst_13318 = cljs.core.seq.call(null,inst_13317);
var inst_13319 = inst_13318;
var inst_13320 = null;
var inst_13321 = (0);
var inst_13322 = (0);
var state_13378__$1 = (function (){var statearr_13406 = state_13378;
(statearr_13406[(13)] = inst_13320);

(statearr_13406[(14)] = inst_13321);

(statearr_13406[(15)] = inst_13319);

(statearr_13406[(16)] = inst_13322);

return statearr_13406;
})();
var statearr_13407_13448 = state_13378__$1;
(statearr_13407_13448[(2)] = null);

(statearr_13407_13448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (14))){
var state_13378__$1 = state_13378;
var statearr_13411_13449 = state_13378__$1;
(statearr_13411_13449[(2)] = null);

(statearr_13411_13449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (16))){
var inst_13333 = (state_13378[(10)]);
var inst_13337 = cljs.core.chunk_first.call(null,inst_13333);
var inst_13338 = cljs.core.chunk_rest.call(null,inst_13333);
var inst_13339 = cljs.core.count.call(null,inst_13337);
var inst_13319 = inst_13338;
var inst_13320 = inst_13337;
var inst_13321 = inst_13339;
var inst_13322 = (0);
var state_13378__$1 = (function (){var statearr_13412 = state_13378;
(statearr_13412[(13)] = inst_13320);

(statearr_13412[(14)] = inst_13321);

(statearr_13412[(15)] = inst_13319);

(statearr_13412[(16)] = inst_13322);

return statearr_13412;
})();
var statearr_13413_13450 = state_13378__$1;
(statearr_13413_13450[(2)] = null);

(statearr_13413_13450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (10))){
var inst_13320 = (state_13378[(13)]);
var inst_13321 = (state_13378[(14)]);
var inst_13319 = (state_13378[(15)]);
var inst_13322 = (state_13378[(16)]);
var inst_13327 = cljs.core._nth.call(null,inst_13320,inst_13322);
var inst_13328 = cljs.core.async.muxch_STAR_.call(null,inst_13327);
var inst_13329 = cljs.core.async.close_BANG_.call(null,inst_13328);
var inst_13330 = (inst_13322 + (1));
var tmp13408 = inst_13320;
var tmp13409 = inst_13321;
var tmp13410 = inst_13319;
var inst_13319__$1 = tmp13410;
var inst_13320__$1 = tmp13408;
var inst_13321__$1 = tmp13409;
var inst_13322__$1 = inst_13330;
var state_13378__$1 = (function (){var statearr_13414 = state_13378;
(statearr_13414[(13)] = inst_13320__$1);

(statearr_13414[(14)] = inst_13321__$1);

(statearr_13414[(15)] = inst_13319__$1);

(statearr_13414[(17)] = inst_13329);

(statearr_13414[(16)] = inst_13322__$1);

return statearr_13414;
})();
var statearr_13415_13451 = state_13378__$1;
(statearr_13415_13451[(2)] = null);

(statearr_13415_13451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (18))){
var inst_13348 = (state_13378[(2)]);
var state_13378__$1 = state_13378;
var statearr_13416_13452 = state_13378__$1;
(statearr_13416_13452[(2)] = inst_13348);

(statearr_13416_13452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13379 === (8))){
var inst_13321 = (state_13378[(14)]);
var inst_13322 = (state_13378[(16)]);
var inst_13324 = (inst_13322 < inst_13321);
var inst_13325 = inst_13324;
var state_13378__$1 = state_13378;
if(cljs.core.truth_(inst_13325)){
var statearr_13417_13453 = state_13378__$1;
(statearr_13417_13453[(1)] = (10));

} else {
var statearr_13418_13454 = state_13378__$1;
(statearr_13418_13454[(1)] = (11));

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
});})(c__5869__auto___13426,mults,ensure_mult,p))
;
return ((function (switch__5854__auto__,c__5869__auto___13426,mults,ensure_mult,p){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13422[(0)] = state_machine__5855__auto__);

(statearr_13422[(1)] = (1));

return statearr_13422;
});
var state_machine__5855__auto____1 = (function (state_13378){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13423){if((e13423 instanceof Object)){
var ex__5858__auto__ = e13423;
var statearr_13424_13455 = state_13378;
(statearr_13424_13455[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13456 = state_13378;
state_13378 = G__13456;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13378){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13426,mults,ensure_mult,p))
})();
var state__5871__auto__ = (function (){var statearr_13425 = f__5870__auto__.call(null);
(statearr_13425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13426);

return statearr_13425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13426,mults,ensure_mult,p))
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
var c__5869__auto___13593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13563){
var state_val_13564 = (state_13563[(1)]);
if((state_val_13564 === (7))){
var state_13563__$1 = state_13563;
var statearr_13565_13594 = state_13563__$1;
(statearr_13565_13594[(2)] = null);

(statearr_13565_13594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (1))){
var state_13563__$1 = state_13563;
var statearr_13566_13595 = state_13563__$1;
(statearr_13566_13595[(2)] = null);

(statearr_13566_13595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (4))){
var inst_13527 = (state_13563[(7)]);
var inst_13529 = (inst_13527 < cnt);
var state_13563__$1 = state_13563;
if(cljs.core.truth_(inst_13529)){
var statearr_13567_13596 = state_13563__$1;
(statearr_13567_13596[(1)] = (6));

} else {
var statearr_13568_13597 = state_13563__$1;
(statearr_13568_13597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (15))){
var inst_13559 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
var statearr_13569_13598 = state_13563__$1;
(statearr_13569_13598[(2)] = inst_13559);

(statearr_13569_13598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (13))){
var inst_13552 = cljs.core.async.close_BANG_.call(null,out);
var state_13563__$1 = state_13563;
var statearr_13570_13599 = state_13563__$1;
(statearr_13570_13599[(2)] = inst_13552);

(statearr_13570_13599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (6))){
var state_13563__$1 = state_13563;
var statearr_13571_13600 = state_13563__$1;
(statearr_13571_13600[(2)] = null);

(statearr_13571_13600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (3))){
var inst_13561 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13563__$1,inst_13561);
} else {
if((state_val_13564 === (12))){
var inst_13549 = (state_13563[(8)]);
var inst_13549__$1 = (state_13563[(2)]);
var inst_13550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13549__$1);
var state_13563__$1 = (function (){var statearr_13572 = state_13563;
(statearr_13572[(8)] = inst_13549__$1);

return statearr_13572;
})();
if(cljs.core.truth_(inst_13550)){
var statearr_13573_13601 = state_13563__$1;
(statearr_13573_13601[(1)] = (13));

} else {
var statearr_13574_13602 = state_13563__$1;
(statearr_13574_13602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (2))){
var inst_13526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13527 = (0);
var state_13563__$1 = (function (){var statearr_13575 = state_13563;
(statearr_13575[(7)] = inst_13527);

(statearr_13575[(9)] = inst_13526);

return statearr_13575;
})();
var statearr_13576_13603 = state_13563__$1;
(statearr_13576_13603[(2)] = null);

(statearr_13576_13603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (11))){
var inst_13527 = (state_13563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13563,(10),Object,null,(9));
var inst_13536 = chs__$1.call(null,inst_13527);
var inst_13537 = done.call(null,inst_13527);
var inst_13538 = cljs.core.async.take_BANG_.call(null,inst_13536,inst_13537);
var state_13563__$1 = state_13563;
var statearr_13577_13604 = state_13563__$1;
(statearr_13577_13604[(2)] = inst_13538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (9))){
var inst_13527 = (state_13563[(7)]);
var inst_13540 = (state_13563[(2)]);
var inst_13541 = (inst_13527 + (1));
var inst_13527__$1 = inst_13541;
var state_13563__$1 = (function (){var statearr_13578 = state_13563;
(statearr_13578[(10)] = inst_13540);

(statearr_13578[(7)] = inst_13527__$1);

return statearr_13578;
})();
var statearr_13579_13605 = state_13563__$1;
(statearr_13579_13605[(2)] = null);

(statearr_13579_13605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (5))){
var inst_13547 = (state_13563[(2)]);
var state_13563__$1 = (function (){var statearr_13580 = state_13563;
(statearr_13580[(11)] = inst_13547);

return statearr_13580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13563__$1,(12),dchan);
} else {
if((state_val_13564 === (14))){
var inst_13549 = (state_13563[(8)]);
var inst_13554 = cljs.core.apply.call(null,f,inst_13549);
var state_13563__$1 = state_13563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13563__$1,(16),out,inst_13554);
} else {
if((state_val_13564 === (16))){
var inst_13556 = (state_13563[(2)]);
var state_13563__$1 = (function (){var statearr_13581 = state_13563;
(statearr_13581[(12)] = inst_13556);

return statearr_13581;
})();
var statearr_13582_13606 = state_13563__$1;
(statearr_13582_13606[(2)] = null);

(statearr_13582_13606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (10))){
var inst_13531 = (state_13563[(2)]);
var inst_13532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13563__$1 = (function (){var statearr_13583 = state_13563;
(statearr_13583[(13)] = inst_13531);

return statearr_13583;
})();
var statearr_13584_13607 = state_13563__$1;
(statearr_13584_13607[(2)] = inst_13532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13564 === (8))){
var inst_13545 = (state_13563[(2)]);
var state_13563__$1 = state_13563;
var statearr_13585_13608 = state_13563__$1;
(statearr_13585_13608[(2)] = inst_13545);

(statearr_13585_13608[(1)] = (5));


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
});})(c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5854__auto__,c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13589[(0)] = state_machine__5855__auto__);

(statearr_13589[(1)] = (1));

return statearr_13589;
});
var state_machine__5855__auto____1 = (function (state_13563){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13590){if((e13590 instanceof Object)){
var ex__5858__auto__ = e13590;
var statearr_13591_13609 = state_13563;
(statearr_13591_13609[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13610 = state_13563;
state_13563 = G__13610;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13563){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5871__auto__ = (function (){var statearr_13592 = f__5870__auto__.call(null);
(statearr_13592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13593);

return statearr_13592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13593,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5869__auto___13718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13718,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13718,out){
return (function (state_13694){
var state_val_13695 = (state_13694[(1)]);
if((state_val_13695 === (7))){
var inst_13674 = (state_13694[(7)]);
var inst_13673 = (state_13694[(8)]);
var inst_13673__$1 = (state_13694[(2)]);
var inst_13674__$1 = cljs.core.nth.call(null,inst_13673__$1,(0),null);
var inst_13675 = cljs.core.nth.call(null,inst_13673__$1,(1),null);
var inst_13676 = (inst_13674__$1 == null);
var state_13694__$1 = (function (){var statearr_13696 = state_13694;
(statearr_13696[(7)] = inst_13674__$1);

(statearr_13696[(8)] = inst_13673__$1);

(statearr_13696[(9)] = inst_13675);

return statearr_13696;
})();
if(cljs.core.truth_(inst_13676)){
var statearr_13697_13719 = state_13694__$1;
(statearr_13697_13719[(1)] = (8));

} else {
var statearr_13698_13720 = state_13694__$1;
(statearr_13698_13720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (1))){
var inst_13665 = cljs.core.vec.call(null,chs);
var inst_13666 = inst_13665;
var state_13694__$1 = (function (){var statearr_13699 = state_13694;
(statearr_13699[(10)] = inst_13666);

return statearr_13699;
})();
var statearr_13700_13721 = state_13694__$1;
(statearr_13700_13721[(2)] = null);

(statearr_13700_13721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (4))){
var inst_13666 = (state_13694[(10)]);
var state_13694__$1 = state_13694;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13694__$1,(7),inst_13666);
} else {
if((state_val_13695 === (6))){
var inst_13690 = (state_13694[(2)]);
var state_13694__$1 = state_13694;
var statearr_13701_13722 = state_13694__$1;
(statearr_13701_13722[(2)] = inst_13690);

(statearr_13701_13722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (3))){
var inst_13692 = (state_13694[(2)]);
var state_13694__$1 = state_13694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13694__$1,inst_13692);
} else {
if((state_val_13695 === (2))){
var inst_13666 = (state_13694[(10)]);
var inst_13668 = cljs.core.count.call(null,inst_13666);
var inst_13669 = (inst_13668 > (0));
var state_13694__$1 = state_13694;
if(cljs.core.truth_(inst_13669)){
var statearr_13703_13723 = state_13694__$1;
(statearr_13703_13723[(1)] = (4));

} else {
var statearr_13704_13724 = state_13694__$1;
(statearr_13704_13724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (11))){
var inst_13666 = (state_13694[(10)]);
var inst_13683 = (state_13694[(2)]);
var tmp13702 = inst_13666;
var inst_13666__$1 = tmp13702;
var state_13694__$1 = (function (){var statearr_13705 = state_13694;
(statearr_13705[(10)] = inst_13666__$1);

(statearr_13705[(11)] = inst_13683);

return statearr_13705;
})();
var statearr_13706_13725 = state_13694__$1;
(statearr_13706_13725[(2)] = null);

(statearr_13706_13725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (9))){
var inst_13674 = (state_13694[(7)]);
var state_13694__$1 = state_13694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13694__$1,(11),out,inst_13674);
} else {
if((state_val_13695 === (5))){
var inst_13688 = cljs.core.async.close_BANG_.call(null,out);
var state_13694__$1 = state_13694;
var statearr_13707_13726 = state_13694__$1;
(statearr_13707_13726[(2)] = inst_13688);

(statearr_13707_13726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (10))){
var inst_13686 = (state_13694[(2)]);
var state_13694__$1 = state_13694;
var statearr_13708_13727 = state_13694__$1;
(statearr_13708_13727[(2)] = inst_13686);

(statearr_13708_13727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (8))){
var inst_13674 = (state_13694[(7)]);
var inst_13666 = (state_13694[(10)]);
var inst_13673 = (state_13694[(8)]);
var inst_13675 = (state_13694[(9)]);
var inst_13678 = (function (){var c = inst_13675;
var v = inst_13674;
var vec__13671 = inst_13673;
var cs = inst_13666;
return ((function (c,v,vec__13671,cs,inst_13674,inst_13666,inst_13673,inst_13675,state_val_13695,c__5869__auto___13718,out){
return (function (p1__13611_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13611_SHARP_);
});
;})(c,v,vec__13671,cs,inst_13674,inst_13666,inst_13673,inst_13675,state_val_13695,c__5869__auto___13718,out))
})();
var inst_13679 = cljs.core.filterv.call(null,inst_13678,inst_13666);
var inst_13666__$1 = inst_13679;
var state_13694__$1 = (function (){var statearr_13709 = state_13694;
(statearr_13709[(10)] = inst_13666__$1);

return statearr_13709;
})();
var statearr_13710_13728 = state_13694__$1;
(statearr_13710_13728[(2)] = null);

(statearr_13710_13728[(1)] = (2));


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
});})(c__5869__auto___13718,out))
;
return ((function (switch__5854__auto__,c__5869__auto___13718,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13714[(0)] = state_machine__5855__auto__);

(statearr_13714[(1)] = (1));

return statearr_13714;
});
var state_machine__5855__auto____1 = (function (state_13694){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13715){if((e13715 instanceof Object)){
var ex__5858__auto__ = e13715;
var statearr_13716_13729 = state_13694;
(statearr_13716_13729[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13730 = state_13694;
state_13694 = G__13730;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13694){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13718,out))
})();
var state__5871__auto__ = (function (){var statearr_13717 = f__5870__auto__.call(null);
(statearr_13717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13718);

return statearr_13717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13718,out))
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
var c__5869__auto___13823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13823,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13823,out){
return (function (state_13800){
var state_val_13801 = (state_13800[(1)]);
if((state_val_13801 === (7))){
var inst_13782 = (state_13800[(7)]);
var inst_13782__$1 = (state_13800[(2)]);
var inst_13783 = (inst_13782__$1 == null);
var inst_13784 = cljs.core.not.call(null,inst_13783);
var state_13800__$1 = (function (){var statearr_13802 = state_13800;
(statearr_13802[(7)] = inst_13782__$1);

return statearr_13802;
})();
if(inst_13784){
var statearr_13803_13824 = state_13800__$1;
(statearr_13803_13824[(1)] = (8));

} else {
var statearr_13804_13825 = state_13800__$1;
(statearr_13804_13825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (1))){
var inst_13777 = (0);
var state_13800__$1 = (function (){var statearr_13805 = state_13800;
(statearr_13805[(8)] = inst_13777);

return statearr_13805;
})();
var statearr_13806_13826 = state_13800__$1;
(statearr_13806_13826[(2)] = null);

(statearr_13806_13826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (4))){
var state_13800__$1 = state_13800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13800__$1,(7),ch);
} else {
if((state_val_13801 === (6))){
var inst_13795 = (state_13800[(2)]);
var state_13800__$1 = state_13800;
var statearr_13807_13827 = state_13800__$1;
(statearr_13807_13827[(2)] = inst_13795);

(statearr_13807_13827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (3))){
var inst_13797 = (state_13800[(2)]);
var inst_13798 = cljs.core.async.close_BANG_.call(null,out);
var state_13800__$1 = (function (){var statearr_13808 = state_13800;
(statearr_13808[(9)] = inst_13797);

return statearr_13808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13800__$1,inst_13798);
} else {
if((state_val_13801 === (2))){
var inst_13777 = (state_13800[(8)]);
var inst_13779 = (inst_13777 < n);
var state_13800__$1 = state_13800;
if(cljs.core.truth_(inst_13779)){
var statearr_13809_13828 = state_13800__$1;
(statearr_13809_13828[(1)] = (4));

} else {
var statearr_13810_13829 = state_13800__$1;
(statearr_13810_13829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (11))){
var inst_13777 = (state_13800[(8)]);
var inst_13787 = (state_13800[(2)]);
var inst_13788 = (inst_13777 + (1));
var inst_13777__$1 = inst_13788;
var state_13800__$1 = (function (){var statearr_13811 = state_13800;
(statearr_13811[(8)] = inst_13777__$1);

(statearr_13811[(10)] = inst_13787);

return statearr_13811;
})();
var statearr_13812_13830 = state_13800__$1;
(statearr_13812_13830[(2)] = null);

(statearr_13812_13830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (9))){
var state_13800__$1 = state_13800;
var statearr_13813_13831 = state_13800__$1;
(statearr_13813_13831[(2)] = null);

(statearr_13813_13831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (5))){
var state_13800__$1 = state_13800;
var statearr_13814_13832 = state_13800__$1;
(statearr_13814_13832[(2)] = null);

(statearr_13814_13832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (10))){
var inst_13792 = (state_13800[(2)]);
var state_13800__$1 = state_13800;
var statearr_13815_13833 = state_13800__$1;
(statearr_13815_13833[(2)] = inst_13792);

(statearr_13815_13833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (8))){
var inst_13782 = (state_13800[(7)]);
var state_13800__$1 = state_13800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13800__$1,(11),out,inst_13782);
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
});})(c__5869__auto___13823,out))
;
return ((function (switch__5854__auto__,c__5869__auto___13823,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13819[(0)] = state_machine__5855__auto__);

(statearr_13819[(1)] = (1));

return statearr_13819;
});
var state_machine__5855__auto____1 = (function (state_13800){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13820){if((e13820 instanceof Object)){
var ex__5858__auto__ = e13820;
var statearr_13821_13834 = state_13800;
(statearr_13821_13834[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13835 = state_13800;
state_13800 = G__13835;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13800){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13823,out))
})();
var state__5871__auto__ = (function (){var statearr_13822 = f__5870__auto__.call(null);
(statearr_13822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13823);

return statearr_13822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13823,out))
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
if(typeof cljs.core.async.t13843 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13843 = (function (ch,f,map_LT_,meta13844){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13844 = meta13844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13846 = (function (fn1,_,meta13844,map_LT_,f,ch,meta13847){
this.fn1 = fn1;
this._ = _;
this.meta13844 = meta13844;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13847 = meta13847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13836_SHARP_){
return f1.call(null,(((p1__13836_SHARP_ == null))?null:self__.f.call(null,p1__13836_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13848){
var self__ = this;
var _13848__$1 = this;
return self__.meta13847;
});})(___$1))
;

cljs.core.async.t13846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13848,meta13847__$1){
var self__ = this;
var _13848__$1 = this;
return (new cljs.core.async.t13846(self__.fn1,self__._,self__.meta13844,self__.map_LT_,self__.f,self__.ch,meta13847__$1));
});})(___$1))
;

cljs.core.async.t13846.cljs$lang$type = true;

cljs.core.async.t13846.cljs$lang$ctorStr = "cljs.core.async/t13846";

cljs.core.async.t13846.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13846");
});})(___$1))
;

cljs.core.async.__GT_t13846 = ((function (___$1){
return (function __GT_t13846(fn1__$1,___$2,meta13844__$1,map_LT___$1,f__$1,ch__$1,meta13847){
return (new cljs.core.async.t13846(fn1__$1,___$2,meta13844__$1,map_LT___$1,f__$1,ch__$1,meta13847));
});})(___$1))
;

}

return (new cljs.core.async.t13846(fn1,___$1,self__.meta13844,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13845){
var self__ = this;
var _13845__$1 = this;
return self__.meta13844;
});

cljs.core.async.t13843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13845,meta13844__$1){
var self__ = this;
var _13845__$1 = this;
return (new cljs.core.async.t13843(self__.ch,self__.f,self__.map_LT_,meta13844__$1));
});

cljs.core.async.t13843.cljs$lang$type = true;

cljs.core.async.t13843.cljs$lang$ctorStr = "cljs.core.async/t13843";

cljs.core.async.t13843.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13843");
});

cljs.core.async.__GT_t13843 = (function __GT_t13843(ch__$1,f__$1,map_LT___$1,meta13844){
return (new cljs.core.async.t13843(ch__$1,f__$1,map_LT___$1,meta13844));
});

}

return (new cljs.core.async.t13843(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t13852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13852 = (function (ch,f,map_GT_,meta13853){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13853 = meta13853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13854){
var self__ = this;
var _13854__$1 = this;
return self__.meta13853;
});

cljs.core.async.t13852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13854,meta13853__$1){
var self__ = this;
var _13854__$1 = this;
return (new cljs.core.async.t13852(self__.ch,self__.f,self__.map_GT_,meta13853__$1));
});

cljs.core.async.t13852.cljs$lang$type = true;

cljs.core.async.t13852.cljs$lang$ctorStr = "cljs.core.async/t13852";

cljs.core.async.t13852.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13852");
});

cljs.core.async.__GT_t13852 = (function __GT_t13852(ch__$1,f__$1,map_GT___$1,meta13853){
return (new cljs.core.async.t13852(ch__$1,f__$1,map_GT___$1,meta13853));
});

}

return (new cljs.core.async.t13852(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t13858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13858 = (function (ch,p,filter_GT_,meta13859){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13859 = meta13859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13858.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13860){
var self__ = this;
var _13860__$1 = this;
return self__.meta13859;
});

cljs.core.async.t13858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13860,meta13859__$1){
var self__ = this;
var _13860__$1 = this;
return (new cljs.core.async.t13858(self__.ch,self__.p,self__.filter_GT_,meta13859__$1));
});

cljs.core.async.t13858.cljs$lang$type = true;

cljs.core.async.t13858.cljs$lang$ctorStr = "cljs.core.async/t13858";

cljs.core.async.t13858.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13858");
});

cljs.core.async.__GT_t13858 = (function __GT_t13858(ch__$1,p__$1,filter_GT___$1,meta13859){
return (new cljs.core.async.t13858(ch__$1,p__$1,filter_GT___$1,meta13859));
});

}

return (new cljs.core.async.t13858(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var c__5869__auto___13943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___13943,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___13943,out){
return (function (state_13922){
var state_val_13923 = (state_13922[(1)]);
if((state_val_13923 === (7))){
var inst_13918 = (state_13922[(2)]);
var state_13922__$1 = state_13922;
var statearr_13924_13944 = state_13922__$1;
(statearr_13924_13944[(2)] = inst_13918);

(statearr_13924_13944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (1))){
var state_13922__$1 = state_13922;
var statearr_13925_13945 = state_13922__$1;
(statearr_13925_13945[(2)] = null);

(statearr_13925_13945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (4))){
var inst_13904 = (state_13922[(7)]);
var inst_13904__$1 = (state_13922[(2)]);
var inst_13905 = (inst_13904__$1 == null);
var state_13922__$1 = (function (){var statearr_13926 = state_13922;
(statearr_13926[(7)] = inst_13904__$1);

return statearr_13926;
})();
if(cljs.core.truth_(inst_13905)){
var statearr_13927_13946 = state_13922__$1;
(statearr_13927_13946[(1)] = (5));

} else {
var statearr_13928_13947 = state_13922__$1;
(statearr_13928_13947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (6))){
var inst_13904 = (state_13922[(7)]);
var inst_13909 = p.call(null,inst_13904);
var state_13922__$1 = state_13922;
if(cljs.core.truth_(inst_13909)){
var statearr_13929_13948 = state_13922__$1;
(statearr_13929_13948[(1)] = (8));

} else {
var statearr_13930_13949 = state_13922__$1;
(statearr_13930_13949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (3))){
var inst_13920 = (state_13922[(2)]);
var state_13922__$1 = state_13922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13922__$1,inst_13920);
} else {
if((state_val_13923 === (2))){
var state_13922__$1 = state_13922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13922__$1,(4),ch);
} else {
if((state_val_13923 === (11))){
var inst_13912 = (state_13922[(2)]);
var state_13922__$1 = state_13922;
var statearr_13931_13950 = state_13922__$1;
(statearr_13931_13950[(2)] = inst_13912);

(statearr_13931_13950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (9))){
var state_13922__$1 = state_13922;
var statearr_13932_13951 = state_13922__$1;
(statearr_13932_13951[(2)] = null);

(statearr_13932_13951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (5))){
var inst_13907 = cljs.core.async.close_BANG_.call(null,out);
var state_13922__$1 = state_13922;
var statearr_13933_13952 = state_13922__$1;
(statearr_13933_13952[(2)] = inst_13907);

(statearr_13933_13952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (10))){
var inst_13915 = (state_13922[(2)]);
var state_13922__$1 = (function (){var statearr_13934 = state_13922;
(statearr_13934[(8)] = inst_13915);

return statearr_13934;
})();
var statearr_13935_13953 = state_13922__$1;
(statearr_13935_13953[(2)] = null);

(statearr_13935_13953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13923 === (8))){
var inst_13904 = (state_13922[(7)]);
var state_13922__$1 = state_13922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13922__$1,(11),out,inst_13904);
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
});})(c__5869__auto___13943,out))
;
return ((function (switch__5854__auto__,c__5869__auto___13943,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_13939 = [null,null,null,null,null,null,null,null,null];
(statearr_13939[(0)] = state_machine__5855__auto__);

(statearr_13939[(1)] = (1));

return statearr_13939;
});
var state_machine__5855__auto____1 = (function (state_13922){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_13922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e13940){if((e13940 instanceof Object)){
var ex__5858__auto__ = e13940;
var statearr_13941_13954 = state_13922;
(statearr_13941_13954[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13955 = state_13922;
state_13922 = G__13955;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_13922){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_13922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___13943,out))
})();
var state__5871__auto__ = (function (){var statearr_13942 = f__5870__auto__.call(null);
(statearr_13942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___13943);

return statearr_13942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___13943,out))
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
return (function (state_14121){
var state_val_14122 = (state_14121[(1)]);
if((state_val_14122 === (7))){
var inst_14117 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14123_14164 = state_14121__$1;
(statearr_14123_14164[(2)] = inst_14117);

(statearr_14123_14164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (20))){
var inst_14087 = (state_14121[(7)]);
var inst_14098 = (state_14121[(2)]);
var inst_14099 = cljs.core.next.call(null,inst_14087);
var inst_14073 = inst_14099;
var inst_14074 = null;
var inst_14075 = (0);
var inst_14076 = (0);
var state_14121__$1 = (function (){var statearr_14124 = state_14121;
(statearr_14124[(8)] = inst_14098);

(statearr_14124[(9)] = inst_14075);

(statearr_14124[(10)] = inst_14076);

(statearr_14124[(11)] = inst_14074);

(statearr_14124[(12)] = inst_14073);

return statearr_14124;
})();
var statearr_14125_14165 = state_14121__$1;
(statearr_14125_14165[(2)] = null);

(statearr_14125_14165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (1))){
var state_14121__$1 = state_14121;
var statearr_14126_14166 = state_14121__$1;
(statearr_14126_14166[(2)] = null);

(statearr_14126_14166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (4))){
var inst_14062 = (state_14121[(13)]);
var inst_14062__$1 = (state_14121[(2)]);
var inst_14063 = (inst_14062__$1 == null);
var state_14121__$1 = (function (){var statearr_14127 = state_14121;
(statearr_14127[(13)] = inst_14062__$1);

return statearr_14127;
})();
if(cljs.core.truth_(inst_14063)){
var statearr_14128_14167 = state_14121__$1;
(statearr_14128_14167[(1)] = (5));

} else {
var statearr_14129_14168 = state_14121__$1;
(statearr_14129_14168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (15))){
var state_14121__$1 = state_14121;
var statearr_14133_14169 = state_14121__$1;
(statearr_14133_14169[(2)] = null);

(statearr_14133_14169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (21))){
var state_14121__$1 = state_14121;
var statearr_14134_14170 = state_14121__$1;
(statearr_14134_14170[(2)] = null);

(statearr_14134_14170[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (13))){
var inst_14075 = (state_14121[(9)]);
var inst_14076 = (state_14121[(10)]);
var inst_14074 = (state_14121[(11)]);
var inst_14073 = (state_14121[(12)]);
var inst_14083 = (state_14121[(2)]);
var inst_14084 = (inst_14076 + (1));
var tmp14130 = inst_14075;
var tmp14131 = inst_14074;
var tmp14132 = inst_14073;
var inst_14073__$1 = tmp14132;
var inst_14074__$1 = tmp14131;
var inst_14075__$1 = tmp14130;
var inst_14076__$1 = inst_14084;
var state_14121__$1 = (function (){var statearr_14135 = state_14121;
(statearr_14135[(9)] = inst_14075__$1);

(statearr_14135[(14)] = inst_14083);

(statearr_14135[(10)] = inst_14076__$1);

(statearr_14135[(11)] = inst_14074__$1);

(statearr_14135[(12)] = inst_14073__$1);

return statearr_14135;
})();
var statearr_14136_14171 = state_14121__$1;
(statearr_14136_14171[(2)] = null);

(statearr_14136_14171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (22))){
var state_14121__$1 = state_14121;
var statearr_14137_14172 = state_14121__$1;
(statearr_14137_14172[(2)] = null);

(statearr_14137_14172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (6))){
var inst_14062 = (state_14121[(13)]);
var inst_14071 = f.call(null,inst_14062);
var inst_14072 = cljs.core.seq.call(null,inst_14071);
var inst_14073 = inst_14072;
var inst_14074 = null;
var inst_14075 = (0);
var inst_14076 = (0);
var state_14121__$1 = (function (){var statearr_14138 = state_14121;
(statearr_14138[(9)] = inst_14075);

(statearr_14138[(10)] = inst_14076);

(statearr_14138[(11)] = inst_14074);

(statearr_14138[(12)] = inst_14073);

return statearr_14138;
})();
var statearr_14139_14173 = state_14121__$1;
(statearr_14139_14173[(2)] = null);

(statearr_14139_14173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (17))){
var inst_14087 = (state_14121[(7)]);
var inst_14091 = cljs.core.chunk_first.call(null,inst_14087);
var inst_14092 = cljs.core.chunk_rest.call(null,inst_14087);
var inst_14093 = cljs.core.count.call(null,inst_14091);
var inst_14073 = inst_14092;
var inst_14074 = inst_14091;
var inst_14075 = inst_14093;
var inst_14076 = (0);
var state_14121__$1 = (function (){var statearr_14140 = state_14121;
(statearr_14140[(9)] = inst_14075);

(statearr_14140[(10)] = inst_14076);

(statearr_14140[(11)] = inst_14074);

(statearr_14140[(12)] = inst_14073);

return statearr_14140;
})();
var statearr_14141_14174 = state_14121__$1;
(statearr_14141_14174[(2)] = null);

(statearr_14141_14174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (3))){
var inst_14119 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14121__$1,inst_14119);
} else {
if((state_val_14122 === (12))){
var inst_14107 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14142_14175 = state_14121__$1;
(statearr_14142_14175[(2)] = inst_14107);

(statearr_14142_14175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (2))){
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14121__$1,(4),in$);
} else {
if((state_val_14122 === (23))){
var inst_14115 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14143_14176 = state_14121__$1;
(statearr_14143_14176[(2)] = inst_14115);

(statearr_14143_14176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (19))){
var inst_14102 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14144_14177 = state_14121__$1;
(statearr_14144_14177[(2)] = inst_14102);

(statearr_14144_14177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (11))){
var inst_14087 = (state_14121[(7)]);
var inst_14073 = (state_14121[(12)]);
var inst_14087__$1 = cljs.core.seq.call(null,inst_14073);
var state_14121__$1 = (function (){var statearr_14145 = state_14121;
(statearr_14145[(7)] = inst_14087__$1);

return statearr_14145;
})();
if(inst_14087__$1){
var statearr_14146_14178 = state_14121__$1;
(statearr_14146_14178[(1)] = (14));

} else {
var statearr_14147_14179 = state_14121__$1;
(statearr_14147_14179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (9))){
var inst_14109 = (state_14121[(2)]);
var inst_14110 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14121__$1 = (function (){var statearr_14148 = state_14121;
(statearr_14148[(15)] = inst_14109);

return statearr_14148;
})();
if(cljs.core.truth_(inst_14110)){
var statearr_14149_14180 = state_14121__$1;
(statearr_14149_14180[(1)] = (21));

} else {
var statearr_14150_14181 = state_14121__$1;
(statearr_14150_14181[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (5))){
var inst_14065 = cljs.core.async.close_BANG_.call(null,out);
var state_14121__$1 = state_14121;
var statearr_14151_14182 = state_14121__$1;
(statearr_14151_14182[(2)] = inst_14065);

(statearr_14151_14182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (14))){
var inst_14087 = (state_14121[(7)]);
var inst_14089 = cljs.core.chunked_seq_QMARK_.call(null,inst_14087);
var state_14121__$1 = state_14121;
if(inst_14089){
var statearr_14152_14183 = state_14121__$1;
(statearr_14152_14183[(1)] = (17));

} else {
var statearr_14153_14184 = state_14121__$1;
(statearr_14153_14184[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (16))){
var inst_14105 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14154_14185 = state_14121__$1;
(statearr_14154_14185[(2)] = inst_14105);

(statearr_14154_14185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (10))){
var inst_14076 = (state_14121[(10)]);
var inst_14074 = (state_14121[(11)]);
var inst_14081 = cljs.core._nth.call(null,inst_14074,inst_14076);
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14121__$1,(13),out,inst_14081);
} else {
if((state_val_14122 === (18))){
var inst_14087 = (state_14121[(7)]);
var inst_14096 = cljs.core.first.call(null,inst_14087);
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14121__$1,(20),out,inst_14096);
} else {
if((state_val_14122 === (8))){
var inst_14075 = (state_14121[(9)]);
var inst_14076 = (state_14121[(10)]);
var inst_14078 = (inst_14076 < inst_14075);
var inst_14079 = inst_14078;
var state_14121__$1 = state_14121;
if(cljs.core.truth_(inst_14079)){
var statearr_14155_14186 = state_14121__$1;
(statearr_14155_14186[(1)] = (10));

} else {
var statearr_14156_14187 = state_14121__$1;
(statearr_14156_14187[(1)] = (11));

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
var statearr_14160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14160[(0)] = state_machine__5855__auto__);

(statearr_14160[(1)] = (1));

return statearr_14160;
});
var state_machine__5855__auto____1 = (function (state_14121){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14161){if((e14161 instanceof Object)){
var ex__5858__auto__ = e14161;
var statearr_14162_14188 = state_14121;
(statearr_14162_14188[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14189 = state_14121;
state_14121 = G__14189;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14121){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto__))
})();
var state__5871__auto__ = (function (){var statearr_14163 = f__5870__auto__.call(null);
(statearr_14163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto__);

return statearr_14163;
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
var c__5869__auto___14286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14286,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14286,out){
return (function (state_14261){
var state_val_14262 = (state_14261[(1)]);
if((state_val_14262 === (7))){
var inst_14256 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14263_14287 = state_14261__$1;
(statearr_14263_14287[(2)] = inst_14256);

(statearr_14263_14287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (1))){
var inst_14238 = null;
var state_14261__$1 = (function (){var statearr_14264 = state_14261;
(statearr_14264[(7)] = inst_14238);

return statearr_14264;
})();
var statearr_14265_14288 = state_14261__$1;
(statearr_14265_14288[(2)] = null);

(statearr_14265_14288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (4))){
var inst_14241 = (state_14261[(8)]);
var inst_14241__$1 = (state_14261[(2)]);
var inst_14242 = (inst_14241__$1 == null);
var inst_14243 = cljs.core.not.call(null,inst_14242);
var state_14261__$1 = (function (){var statearr_14266 = state_14261;
(statearr_14266[(8)] = inst_14241__$1);

return statearr_14266;
})();
if(inst_14243){
var statearr_14267_14289 = state_14261__$1;
(statearr_14267_14289[(1)] = (5));

} else {
var statearr_14268_14290 = state_14261__$1;
(statearr_14268_14290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (6))){
var state_14261__$1 = state_14261;
var statearr_14269_14291 = state_14261__$1;
(statearr_14269_14291[(2)] = null);

(statearr_14269_14291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (3))){
var inst_14258 = (state_14261[(2)]);
var inst_14259 = cljs.core.async.close_BANG_.call(null,out);
var state_14261__$1 = (function (){var statearr_14270 = state_14261;
(statearr_14270[(9)] = inst_14258);

return statearr_14270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14261__$1,inst_14259);
} else {
if((state_val_14262 === (2))){
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14261__$1,(4),ch);
} else {
if((state_val_14262 === (11))){
var inst_14241 = (state_14261[(8)]);
var inst_14250 = (state_14261[(2)]);
var inst_14238 = inst_14241;
var state_14261__$1 = (function (){var statearr_14271 = state_14261;
(statearr_14271[(7)] = inst_14238);

(statearr_14271[(10)] = inst_14250);

return statearr_14271;
})();
var statearr_14272_14292 = state_14261__$1;
(statearr_14272_14292[(2)] = null);

(statearr_14272_14292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (9))){
var inst_14241 = (state_14261[(8)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14261__$1,(11),out,inst_14241);
} else {
if((state_val_14262 === (5))){
var inst_14238 = (state_14261[(7)]);
var inst_14241 = (state_14261[(8)]);
var inst_14245 = cljs.core._EQ_.call(null,inst_14241,inst_14238);
var state_14261__$1 = state_14261;
if(inst_14245){
var statearr_14274_14293 = state_14261__$1;
(statearr_14274_14293[(1)] = (8));

} else {
var statearr_14275_14294 = state_14261__$1;
(statearr_14275_14294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (10))){
var inst_14253 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14276_14295 = state_14261__$1;
(statearr_14276_14295[(2)] = inst_14253);

(statearr_14276_14295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (8))){
var inst_14238 = (state_14261[(7)]);
var tmp14273 = inst_14238;
var inst_14238__$1 = tmp14273;
var state_14261__$1 = (function (){var statearr_14277 = state_14261;
(statearr_14277[(7)] = inst_14238__$1);

return statearr_14277;
})();
var statearr_14278_14296 = state_14261__$1;
(statearr_14278_14296[(2)] = null);

(statearr_14278_14296[(1)] = (2));


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
});})(c__5869__auto___14286,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14286,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14282[(0)] = state_machine__5855__auto__);

(statearr_14282[(1)] = (1));

return statearr_14282;
});
var state_machine__5855__auto____1 = (function (state_14261){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14283){if((e14283 instanceof Object)){
var ex__5858__auto__ = e14283;
var statearr_14284_14297 = state_14261;
(statearr_14284_14297[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14298 = state_14261;
state_14261 = G__14298;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14261){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14286,out))
})();
var state__5871__auto__ = (function (){var statearr_14285 = f__5870__auto__.call(null);
(statearr_14285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14286);

return statearr_14285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14286,out))
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
var c__5869__auto___14433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14433,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14433,out){
return (function (state_14403){
var state_val_14404 = (state_14403[(1)]);
if((state_val_14404 === (7))){
var inst_14399 = (state_14403[(2)]);
var state_14403__$1 = state_14403;
var statearr_14405_14434 = state_14403__$1;
(statearr_14405_14434[(2)] = inst_14399);

(statearr_14405_14434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (1))){
var inst_14366 = (new Array(n));
var inst_14367 = inst_14366;
var inst_14368 = (0);
var state_14403__$1 = (function (){var statearr_14406 = state_14403;
(statearr_14406[(7)] = inst_14368);

(statearr_14406[(8)] = inst_14367);

return statearr_14406;
})();
var statearr_14407_14435 = state_14403__$1;
(statearr_14407_14435[(2)] = null);

(statearr_14407_14435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (4))){
var inst_14371 = (state_14403[(9)]);
var inst_14371__$1 = (state_14403[(2)]);
var inst_14372 = (inst_14371__$1 == null);
var inst_14373 = cljs.core.not.call(null,inst_14372);
var state_14403__$1 = (function (){var statearr_14408 = state_14403;
(statearr_14408[(9)] = inst_14371__$1);

return statearr_14408;
})();
if(inst_14373){
var statearr_14409_14436 = state_14403__$1;
(statearr_14409_14436[(1)] = (5));

} else {
var statearr_14410_14437 = state_14403__$1;
(statearr_14410_14437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (15))){
var inst_14393 = (state_14403[(2)]);
var state_14403__$1 = state_14403;
var statearr_14411_14438 = state_14403__$1;
(statearr_14411_14438[(2)] = inst_14393);

(statearr_14411_14438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (13))){
var state_14403__$1 = state_14403;
var statearr_14412_14439 = state_14403__$1;
(statearr_14412_14439[(2)] = null);

(statearr_14412_14439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (6))){
var inst_14368 = (state_14403[(7)]);
var inst_14389 = (inst_14368 > (0));
var state_14403__$1 = state_14403;
if(cljs.core.truth_(inst_14389)){
var statearr_14413_14440 = state_14403__$1;
(statearr_14413_14440[(1)] = (12));

} else {
var statearr_14414_14441 = state_14403__$1;
(statearr_14414_14441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (3))){
var inst_14401 = (state_14403[(2)]);
var state_14403__$1 = state_14403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14403__$1,inst_14401);
} else {
if((state_val_14404 === (12))){
var inst_14367 = (state_14403[(8)]);
var inst_14391 = cljs.core.vec.call(null,inst_14367);
var state_14403__$1 = state_14403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14403__$1,(15),out,inst_14391);
} else {
if((state_val_14404 === (2))){
var state_14403__$1 = state_14403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14403__$1,(4),ch);
} else {
if((state_val_14404 === (11))){
var inst_14383 = (state_14403[(2)]);
var inst_14384 = (new Array(n));
var inst_14367 = inst_14384;
var inst_14368 = (0);
var state_14403__$1 = (function (){var statearr_14415 = state_14403;
(statearr_14415[(7)] = inst_14368);

(statearr_14415[(10)] = inst_14383);

(statearr_14415[(8)] = inst_14367);

return statearr_14415;
})();
var statearr_14416_14442 = state_14403__$1;
(statearr_14416_14442[(2)] = null);

(statearr_14416_14442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (9))){
var inst_14367 = (state_14403[(8)]);
var inst_14381 = cljs.core.vec.call(null,inst_14367);
var state_14403__$1 = state_14403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14403__$1,(11),out,inst_14381);
} else {
if((state_val_14404 === (5))){
var inst_14368 = (state_14403[(7)]);
var inst_14371 = (state_14403[(9)]);
var inst_14376 = (state_14403[(11)]);
var inst_14367 = (state_14403[(8)]);
var inst_14375 = (inst_14367[inst_14368] = inst_14371);
var inst_14376__$1 = (inst_14368 + (1));
var inst_14377 = (inst_14376__$1 < n);
var state_14403__$1 = (function (){var statearr_14417 = state_14403;
(statearr_14417[(11)] = inst_14376__$1);

(statearr_14417[(12)] = inst_14375);

return statearr_14417;
})();
if(cljs.core.truth_(inst_14377)){
var statearr_14418_14443 = state_14403__$1;
(statearr_14418_14443[(1)] = (8));

} else {
var statearr_14419_14444 = state_14403__$1;
(statearr_14419_14444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (14))){
var inst_14396 = (state_14403[(2)]);
var inst_14397 = cljs.core.async.close_BANG_.call(null,out);
var state_14403__$1 = (function (){var statearr_14421 = state_14403;
(statearr_14421[(13)] = inst_14396);

return statearr_14421;
})();
var statearr_14422_14445 = state_14403__$1;
(statearr_14422_14445[(2)] = inst_14397);

(statearr_14422_14445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (10))){
var inst_14387 = (state_14403[(2)]);
var state_14403__$1 = state_14403;
var statearr_14423_14446 = state_14403__$1;
(statearr_14423_14446[(2)] = inst_14387);

(statearr_14423_14446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14404 === (8))){
var inst_14376 = (state_14403[(11)]);
var inst_14367 = (state_14403[(8)]);
var tmp14420 = inst_14367;
var inst_14367__$1 = tmp14420;
var inst_14368 = inst_14376;
var state_14403__$1 = (function (){var statearr_14424 = state_14403;
(statearr_14424[(7)] = inst_14368);

(statearr_14424[(8)] = inst_14367__$1);

return statearr_14424;
})();
var statearr_14425_14447 = state_14403__$1;
(statearr_14425_14447[(2)] = null);

(statearr_14425_14447[(1)] = (2));


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
});})(c__5869__auto___14433,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14433,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14429[(0)] = state_machine__5855__auto__);

(statearr_14429[(1)] = (1));

return statearr_14429;
});
var state_machine__5855__auto____1 = (function (state_14403){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14430){if((e14430 instanceof Object)){
var ex__5858__auto__ = e14430;
var statearr_14431_14448 = state_14403;
(statearr_14431_14448[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14449 = state_14403;
state_14403 = G__14449;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14403){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14433,out))
})();
var state__5871__auto__ = (function (){var statearr_14432 = f__5870__auto__.call(null);
(statearr_14432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14433);

return statearr_14432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14433,out))
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
var c__5869__auto___14592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5869__auto___14592,out){
return (function (){
var f__5870__auto__ = (function (){var switch__5854__auto__ = ((function (c__5869__auto___14592,out){
return (function (state_14562){
var state_val_14563 = (state_14562[(1)]);
if((state_val_14563 === (7))){
var inst_14558 = (state_14562[(2)]);
var state_14562__$1 = state_14562;
var statearr_14564_14593 = state_14562__$1;
(statearr_14564_14593[(2)] = inst_14558);

(statearr_14564_14593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (1))){
var inst_14521 = [];
var inst_14522 = inst_14521;
var inst_14523 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14562__$1 = (function (){var statearr_14565 = state_14562;
(statearr_14565[(7)] = inst_14522);

(statearr_14565[(8)] = inst_14523);

return statearr_14565;
})();
var statearr_14566_14594 = state_14562__$1;
(statearr_14566_14594[(2)] = null);

(statearr_14566_14594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (4))){
var inst_14526 = (state_14562[(9)]);
var inst_14526__$1 = (state_14562[(2)]);
var inst_14527 = (inst_14526__$1 == null);
var inst_14528 = cljs.core.not.call(null,inst_14527);
var state_14562__$1 = (function (){var statearr_14567 = state_14562;
(statearr_14567[(9)] = inst_14526__$1);

return statearr_14567;
})();
if(inst_14528){
var statearr_14568_14595 = state_14562__$1;
(statearr_14568_14595[(1)] = (5));

} else {
var statearr_14569_14596 = state_14562__$1;
(statearr_14569_14596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (15))){
var inst_14552 = (state_14562[(2)]);
var state_14562__$1 = state_14562;
var statearr_14570_14597 = state_14562__$1;
(statearr_14570_14597[(2)] = inst_14552);

(statearr_14570_14597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (13))){
var state_14562__$1 = state_14562;
var statearr_14571_14598 = state_14562__$1;
(statearr_14571_14598[(2)] = null);

(statearr_14571_14598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (6))){
var inst_14522 = (state_14562[(7)]);
var inst_14547 = inst_14522.length;
var inst_14548 = (inst_14547 > (0));
var state_14562__$1 = state_14562;
if(cljs.core.truth_(inst_14548)){
var statearr_14572_14599 = state_14562__$1;
(statearr_14572_14599[(1)] = (12));

} else {
var statearr_14573_14600 = state_14562__$1;
(statearr_14573_14600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (3))){
var inst_14560 = (state_14562[(2)]);
var state_14562__$1 = state_14562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14562__$1,inst_14560);
} else {
if((state_val_14563 === (12))){
var inst_14522 = (state_14562[(7)]);
var inst_14550 = cljs.core.vec.call(null,inst_14522);
var state_14562__$1 = state_14562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14562__$1,(15),out,inst_14550);
} else {
if((state_val_14563 === (2))){
var state_14562__$1 = state_14562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14562__$1,(4),ch);
} else {
if((state_val_14563 === (11))){
var inst_14526 = (state_14562[(9)]);
var inst_14530 = (state_14562[(10)]);
var inst_14540 = (state_14562[(2)]);
var inst_14541 = [];
var inst_14542 = inst_14541.push(inst_14526);
var inst_14522 = inst_14541;
var inst_14523 = inst_14530;
var state_14562__$1 = (function (){var statearr_14574 = state_14562;
(statearr_14574[(11)] = inst_14540);

(statearr_14574[(7)] = inst_14522);

(statearr_14574[(12)] = inst_14542);

(statearr_14574[(8)] = inst_14523);

return statearr_14574;
})();
var statearr_14575_14601 = state_14562__$1;
(statearr_14575_14601[(2)] = null);

(statearr_14575_14601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (9))){
var inst_14522 = (state_14562[(7)]);
var inst_14538 = cljs.core.vec.call(null,inst_14522);
var state_14562__$1 = state_14562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14562__$1,(11),out,inst_14538);
} else {
if((state_val_14563 === (5))){
var inst_14526 = (state_14562[(9)]);
var inst_14523 = (state_14562[(8)]);
var inst_14530 = (state_14562[(10)]);
var inst_14530__$1 = f.call(null,inst_14526);
var inst_14531 = cljs.core._EQ_.call(null,inst_14530__$1,inst_14523);
var inst_14532 = cljs.core.keyword_identical_QMARK_.call(null,inst_14523,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14533 = (inst_14531) || (inst_14532);
var state_14562__$1 = (function (){var statearr_14576 = state_14562;
(statearr_14576[(10)] = inst_14530__$1);

return statearr_14576;
})();
if(cljs.core.truth_(inst_14533)){
var statearr_14577_14602 = state_14562__$1;
(statearr_14577_14602[(1)] = (8));

} else {
var statearr_14578_14603 = state_14562__$1;
(statearr_14578_14603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (14))){
var inst_14555 = (state_14562[(2)]);
var inst_14556 = cljs.core.async.close_BANG_.call(null,out);
var state_14562__$1 = (function (){var statearr_14580 = state_14562;
(statearr_14580[(13)] = inst_14555);

return statearr_14580;
})();
var statearr_14581_14604 = state_14562__$1;
(statearr_14581_14604[(2)] = inst_14556);

(statearr_14581_14604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (10))){
var inst_14545 = (state_14562[(2)]);
var state_14562__$1 = state_14562;
var statearr_14582_14605 = state_14562__$1;
(statearr_14582_14605[(2)] = inst_14545);

(statearr_14582_14605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14563 === (8))){
var inst_14522 = (state_14562[(7)]);
var inst_14526 = (state_14562[(9)]);
var inst_14530 = (state_14562[(10)]);
var inst_14535 = inst_14522.push(inst_14526);
var tmp14579 = inst_14522;
var inst_14522__$1 = tmp14579;
var inst_14523 = inst_14530;
var state_14562__$1 = (function (){var statearr_14583 = state_14562;
(statearr_14583[(7)] = inst_14522__$1);

(statearr_14583[(14)] = inst_14535);

(statearr_14583[(8)] = inst_14523);

return statearr_14583;
})();
var statearr_14584_14606 = state_14562__$1;
(statearr_14584_14606[(2)] = null);

(statearr_14584_14606[(1)] = (2));


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
});})(c__5869__auto___14592,out))
;
return ((function (switch__5854__auto__,c__5869__auto___14592,out){
return (function() {
var state_machine__5855__auto__ = null;
var state_machine__5855__auto____0 = (function (){
var statearr_14588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14588[(0)] = state_machine__5855__auto__);

(statearr_14588[(1)] = (1));

return statearr_14588;
});
var state_machine__5855__auto____1 = (function (state_14562){
while(true){
var ret_value__5856__auto__ = (function (){try{while(true){
var result__5857__auto__ = switch__5854__auto__.call(null,state_14562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5857__auto__;
}
break;
}
}catch (e14589){if((e14589 instanceof Object)){
var ex__5858__auto__ = e14589;
var statearr_14590_14607 = state_14562;
(statearr_14590_14607[(5)] = ex__5858__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14608 = state_14562;
state_14562 = G__14608;
continue;
} else {
return ret_value__5856__auto__;
}
break;
}
});
state_machine__5855__auto__ = function(state_14562){
switch(arguments.length){
case 0:
return state_machine__5855__auto____0.call(this);
case 1:
return state_machine__5855__auto____1.call(this,state_14562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5855__auto____0;
state_machine__5855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5855__auto____1;
return state_machine__5855__auto__;
})()
;})(switch__5854__auto__,c__5869__auto___14592,out))
})();
var state__5871__auto__ = (function (){var statearr_14591 = f__5870__auto__.call(null);
(statearr_14591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5869__auto___14592);

return statearr_14591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5871__auto__);
});})(c__5869__auto___14592,out))
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