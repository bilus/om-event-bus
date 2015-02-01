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
if(typeof cljs.core.async.t19207 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19207 = (function (f,fn_handler,meta19208){
this.f = f;
this.fn_handler = fn_handler;
this.meta19208 = meta19208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19207.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19209){
var self__ = this;
var _19209__$1 = this;
return self__.meta19208;
});

cljs.core.async.t19207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19209,meta19208__$1){
var self__ = this;
var _19209__$1 = this;
return (new cljs.core.async.t19207(self__.f,self__.fn_handler,meta19208__$1));
});

cljs.core.async.t19207.cljs$lang$type = true;

cljs.core.async.t19207.cljs$lang$ctorStr = "cljs.core.async/t19207";

cljs.core.async.t19207.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19207");
});

cljs.core.async.__GT_t19207 = (function __GT_t19207(f__$1,fn_handler__$1,meta19208){
return (new cljs.core.async.t19207(f__$1,fn_handler__$1,meta19208));
});

}

return (new cljs.core.async.t19207(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var G__19211 = buff;
if(G__19211){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__19211.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19211.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19211);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19211);
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
var val_19212 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19212);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19212,ret){
return (function (){
return fn1.call(null,val_19212);
});})(val_19212,ret))
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
var n__4517__auto___19213 = n;
var x_19214 = (0);
while(true){
if((x_19214 < n__4517__auto___19213)){
(a[x_19214] = (0));

var G__19215 = (x_19214 + (1));
x_19214 = G__19215;
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

var G__19216 = (i + (1));
i = G__19216;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19220 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19220 = (function (flag,alt_flag,meta19221){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19221 = meta19221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19220.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19222){
var self__ = this;
var _19222__$1 = this;
return self__.meta19221;
});})(flag))
;

cljs.core.async.t19220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19222,meta19221__$1){
var self__ = this;
var _19222__$1 = this;
return (new cljs.core.async.t19220(self__.flag,self__.alt_flag,meta19221__$1));
});})(flag))
;

cljs.core.async.t19220.cljs$lang$type = true;

cljs.core.async.t19220.cljs$lang$ctorStr = "cljs.core.async/t19220";

cljs.core.async.t19220.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19220");
});})(flag))
;

cljs.core.async.__GT_t19220 = ((function (flag){
return (function __GT_t19220(flag__$1,alt_flag__$1,meta19221){
return (new cljs.core.async.t19220(flag__$1,alt_flag__$1,meta19221));
});})(flag))
;

}

return (new cljs.core.async.t19220(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19226 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19226 = (function (cb,flag,alt_handler,meta19227){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19227 = meta19227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19226.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19228){
var self__ = this;
var _19228__$1 = this;
return self__.meta19227;
});

cljs.core.async.t19226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19228,meta19227__$1){
var self__ = this;
var _19228__$1 = this;
return (new cljs.core.async.t19226(self__.cb,self__.flag,self__.alt_handler,meta19227__$1));
});

cljs.core.async.t19226.cljs$lang$type = true;

cljs.core.async.t19226.cljs$lang$ctorStr = "cljs.core.async/t19226";

cljs.core.async.t19226.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t19226");
});

cljs.core.async.__GT_t19226 = (function __GT_t19226(cb__$1,flag__$1,alt_handler__$1,meta19227){
return (new cljs.core.async.t19226(cb__$1,flag__$1,alt_handler__$1,meta19227));
});

}

return (new cljs.core.async.t19226(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
return (function (p1__19229_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19229_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19230_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19230_SHARP_,port], null));
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
var G__19231 = (i + (1));
i = G__19231;
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
var alts_BANG___delegate = function (ports,p__19232){
var map__19234 = p__19232;
var map__19234__$1 = ((cljs.core.seq_QMARK_.call(null,map__19234))?cljs.core.apply.call(null,cljs.core.hash_map,map__19234):map__19234);
var opts = map__19234__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19232 = null;
if (arguments.length > 1) {
  p__19232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__19232);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19235){
var ports = cljs.core.first(arglist__19235);
var p__19232 = cljs.core.rest(arglist__19235);
return alts_BANG___delegate(ports,p__19232);
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
var c__7050__auto___19330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___19330){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___19330){
return (function (state_19306){
var state_val_19307 = (state_19306[(1)]);
if((state_val_19307 === (7))){
var inst_19302 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19308_19331 = state_19306__$1;
(statearr_19308_19331[(2)] = inst_19302);

(statearr_19308_19331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (1))){
var state_19306__$1 = state_19306;
var statearr_19309_19332 = state_19306__$1;
(statearr_19309_19332[(2)] = null);

(statearr_19309_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (4))){
var inst_19285 = (state_19306[(7)]);
var inst_19285__$1 = (state_19306[(2)]);
var inst_19286 = (inst_19285__$1 == null);
var state_19306__$1 = (function (){var statearr_19310 = state_19306;
(statearr_19310[(7)] = inst_19285__$1);

return statearr_19310;
})();
if(cljs.core.truth_(inst_19286)){
var statearr_19311_19333 = state_19306__$1;
(statearr_19311_19333[(1)] = (5));

} else {
var statearr_19312_19334 = state_19306__$1;
(statearr_19312_19334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (13))){
var state_19306__$1 = state_19306;
var statearr_19313_19335 = state_19306__$1;
(statearr_19313_19335[(2)] = null);

(statearr_19313_19335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (6))){
var inst_19285 = (state_19306[(7)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19306__$1,(11),to,inst_19285);
} else {
if((state_val_19307 === (3))){
var inst_19304 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19306__$1,inst_19304);
} else {
if((state_val_19307 === (12))){
var state_19306__$1 = state_19306;
var statearr_19314_19336 = state_19306__$1;
(statearr_19314_19336[(2)] = null);

(statearr_19314_19336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (2))){
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19306__$1,(4),from);
} else {
if((state_val_19307 === (11))){
var inst_19295 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
if(cljs.core.truth_(inst_19295)){
var statearr_19315_19337 = state_19306__$1;
(statearr_19315_19337[(1)] = (12));

} else {
var statearr_19316_19338 = state_19306__$1;
(statearr_19316_19338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (9))){
var state_19306__$1 = state_19306;
var statearr_19317_19339 = state_19306__$1;
(statearr_19317_19339[(2)] = null);

(statearr_19317_19339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (5))){
var state_19306__$1 = state_19306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19318_19340 = state_19306__$1;
(statearr_19318_19340[(1)] = (8));

} else {
var statearr_19319_19341 = state_19306__$1;
(statearr_19319_19341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (14))){
var inst_19300 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19320_19342 = state_19306__$1;
(statearr_19320_19342[(2)] = inst_19300);

(statearr_19320_19342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (10))){
var inst_19292 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19321_19343 = state_19306__$1;
(statearr_19321_19343[(2)] = inst_19292);

(statearr_19321_19343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19307 === (8))){
var inst_19289 = cljs.core.async.close_BANG_.call(null,to);
var state_19306__$1 = state_19306;
var statearr_19322_19344 = state_19306__$1;
(statearr_19322_19344[(2)] = inst_19289);

(statearr_19322_19344[(1)] = (10));


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
});})(c__7050__auto___19330))
;
return ((function (switch__6994__auto__,c__7050__auto___19330){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19326 = [null,null,null,null,null,null,null,null];
(statearr_19326[(0)] = state_machine__6995__auto__);

(statearr_19326[(1)] = (1));

return statearr_19326;
});
var state_machine__6995__auto____1 = (function (state_19306){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19327){if((e19327 instanceof Object)){
var ex__6998__auto__ = e19327;
var statearr_19328_19345 = state_19306;
(statearr_19328_19345[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19346 = state_19306;
state_19306 = G__19346;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19306){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___19330))
})();
var state__7052__auto__ = (function (){var statearr_19329 = f__7051__auto__.call(null);
(statearr_19329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19330);

return statearr_19329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___19330))
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
return (function (p__19530){
var vec__19531 = p__19530;
var v = cljs.core.nth.call(null,vec__19531,(0),null);
var p = cljs.core.nth.call(null,vec__19531,(1),null);
var job = vec__19531;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___19713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results){
return (function (state_19536){
var state_val_19537 = (state_19536[(1)]);
if((state_val_19537 === (2))){
var inst_19533 = (state_19536[(2)]);
var inst_19534 = cljs.core.async.close_BANG_.call(null,res);
var state_19536__$1 = (function (){var statearr_19538 = state_19536;
(statearr_19538[(7)] = inst_19533);

return statearr_19538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19536__$1,inst_19534);
} else {
if((state_val_19537 === (1))){
var state_19536__$1 = state_19536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19536__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19542 = [null,null,null,null,null,null,null,null];
(statearr_19542[(0)] = state_machine__6995__auto__);

(statearr_19542[(1)] = (1));

return statearr_19542;
});
var state_machine__6995__auto____1 = (function (state_19536){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19543){if((e19543 instanceof Object)){
var ex__6998__auto__ = e19543;
var statearr_19544_19714 = state_19536;
(statearr_19544_19714[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19715 = state_19536;
state_19536 = G__19715;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19536){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_19545 = f__7051__auto__.call(null);
(statearr_19545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19713);

return statearr_19545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___19713,res,vec__19531,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19546){
var vec__19547 = p__19546;
var v = cljs.core.nth.call(null,vec__19547,(0),null);
var p = cljs.core.nth.call(null,vec__19547,(1),null);
var job = vec__19547;
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
var n__4517__auto___19716 = n;
var __19717 = (0);
while(true){
if((__19717 < n__4517__auto___19716)){
var G__19548_19718 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19548_19718) {
case "async":
var c__7050__auto___19720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19717,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__19717,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function (state_19561){
var state_val_19562 = (state_19561[(1)]);
if((state_val_19562 === (7))){
var inst_19557 = (state_19561[(2)]);
var state_19561__$1 = state_19561;
var statearr_19563_19721 = state_19561__$1;
(statearr_19563_19721[(2)] = inst_19557);

(statearr_19563_19721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19562 === (6))){
var state_19561__$1 = state_19561;
var statearr_19564_19722 = state_19561__$1;
(statearr_19564_19722[(2)] = null);

(statearr_19564_19722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19562 === (5))){
var state_19561__$1 = state_19561;
var statearr_19565_19723 = state_19561__$1;
(statearr_19565_19723[(2)] = null);

(statearr_19565_19723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19562 === (4))){
var inst_19551 = (state_19561[(2)]);
var inst_19552 = async.call(null,inst_19551);
var state_19561__$1 = state_19561;
if(cljs.core.truth_(inst_19552)){
var statearr_19566_19724 = state_19561__$1;
(statearr_19566_19724[(1)] = (5));

} else {
var statearr_19567_19725 = state_19561__$1;
(statearr_19567_19725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19562 === (3))){
var inst_19559 = (state_19561[(2)]);
var state_19561__$1 = state_19561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19561__$1,inst_19559);
} else {
if((state_val_19562 === (2))){
var state_19561__$1 = state_19561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19561__$1,(4),jobs);
} else {
if((state_val_19562 === (1))){
var state_19561__$1 = state_19561;
var statearr_19568_19726 = state_19561__$1;
(statearr_19568_19726[(2)] = null);

(statearr_19568_19726[(1)] = (2));


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
});})(__19717,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
;
return ((function (__19717,switch__6994__auto__,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19572 = [null,null,null,null,null,null,null];
(statearr_19572[(0)] = state_machine__6995__auto__);

(statearr_19572[(1)] = (1));

return statearr_19572;
});
var state_machine__6995__auto____1 = (function (state_19561){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19573){if((e19573 instanceof Object)){
var ex__6998__auto__ = e19573;
var statearr_19574_19727 = state_19561;
(statearr_19574_19727[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19728 = state_19561;
state_19561 = G__19728;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19561){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__19717,switch__6994__auto__,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_19575 = f__7051__auto__.call(null);
(statearr_19575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19720);

return statearr_19575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__19717,c__7050__auto___19720,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___19729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19717,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__19717,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function (state_19588){
var state_val_19589 = (state_19588[(1)]);
if((state_val_19589 === (7))){
var inst_19584 = (state_19588[(2)]);
var state_19588__$1 = state_19588;
var statearr_19590_19730 = state_19588__$1;
(statearr_19590_19730[(2)] = inst_19584);

(statearr_19590_19730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (6))){
var state_19588__$1 = state_19588;
var statearr_19591_19731 = state_19588__$1;
(statearr_19591_19731[(2)] = null);

(statearr_19591_19731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (5))){
var state_19588__$1 = state_19588;
var statearr_19592_19732 = state_19588__$1;
(statearr_19592_19732[(2)] = null);

(statearr_19592_19732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (4))){
var inst_19578 = (state_19588[(2)]);
var inst_19579 = process.call(null,inst_19578);
var state_19588__$1 = state_19588;
if(cljs.core.truth_(inst_19579)){
var statearr_19593_19733 = state_19588__$1;
(statearr_19593_19733[(1)] = (5));

} else {
var statearr_19594_19734 = state_19588__$1;
(statearr_19594_19734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19589 === (3))){
var inst_19586 = (state_19588[(2)]);
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19588__$1,inst_19586);
} else {
if((state_val_19589 === (2))){
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19588__$1,(4),jobs);
} else {
if((state_val_19589 === (1))){
var state_19588__$1 = state_19588;
var statearr_19595_19735 = state_19588__$1;
(statearr_19595_19735[(2)] = null);

(statearr_19595_19735[(1)] = (2));


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
});})(__19717,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
;
return ((function (__19717,switch__6994__auto__,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19599 = [null,null,null,null,null,null,null];
(statearr_19599[(0)] = state_machine__6995__auto__);

(statearr_19599[(1)] = (1));

return statearr_19599;
});
var state_machine__6995__auto____1 = (function (state_19588){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19600){if((e19600 instanceof Object)){
var ex__6998__auto__ = e19600;
var statearr_19601_19736 = state_19588;
(statearr_19601_19736[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19737 = state_19588;
state_19588 = G__19737;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19588){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__19717,switch__6994__auto__,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_19602 = f__7051__auto__.call(null);
(statearr_19602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19729);

return statearr_19602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__19717,c__7050__auto___19729,G__19548_19718,n__4517__auto___19716,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19738 = (__19717 + (1));
__19717 = G__19738;
continue;
} else {
}
break;
}

var c__7050__auto___19739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___19739,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___19739,jobs,results,process,async){
return (function (state_19624){
var state_val_19625 = (state_19624[(1)]);
if((state_val_19625 === (9))){
var inst_19617 = (state_19624[(2)]);
var state_19624__$1 = (function (){var statearr_19626 = state_19624;
(statearr_19626[(7)] = inst_19617);

return statearr_19626;
})();
var statearr_19627_19740 = state_19624__$1;
(statearr_19627_19740[(2)] = null);

(statearr_19627_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19625 === (8))){
var inst_19610 = (state_19624[(8)]);
var inst_19615 = (state_19624[(2)]);
var state_19624__$1 = (function (){var statearr_19628 = state_19624;
(statearr_19628[(9)] = inst_19615);

return statearr_19628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19624__$1,(9),results,inst_19610);
} else {
if((state_val_19625 === (7))){
var inst_19620 = (state_19624[(2)]);
var state_19624__$1 = state_19624;
var statearr_19629_19741 = state_19624__$1;
(statearr_19629_19741[(2)] = inst_19620);

(statearr_19629_19741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19625 === (6))){
var inst_19610 = (state_19624[(8)]);
var inst_19605 = (state_19624[(10)]);
var inst_19610__$1 = cljs.core.async.chan.call(null,(1));
var inst_19611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19612 = [inst_19605,inst_19610__$1];
var inst_19613 = (new cljs.core.PersistentVector(null,2,(5),inst_19611,inst_19612,null));
var state_19624__$1 = (function (){var statearr_19630 = state_19624;
(statearr_19630[(8)] = inst_19610__$1);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19624__$1,(8),jobs,inst_19613);
} else {
if((state_val_19625 === (5))){
var inst_19608 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19624__$1 = state_19624;
var statearr_19631_19742 = state_19624__$1;
(statearr_19631_19742[(2)] = inst_19608);

(statearr_19631_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19625 === (4))){
var inst_19605 = (state_19624[(10)]);
var inst_19605__$1 = (state_19624[(2)]);
var inst_19606 = (inst_19605__$1 == null);
var state_19624__$1 = (function (){var statearr_19632 = state_19624;
(statearr_19632[(10)] = inst_19605__$1);

return statearr_19632;
})();
if(cljs.core.truth_(inst_19606)){
var statearr_19633_19743 = state_19624__$1;
(statearr_19633_19743[(1)] = (5));

} else {
var statearr_19634_19744 = state_19624__$1;
(statearr_19634_19744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19625 === (3))){
var inst_19622 = (state_19624[(2)]);
var state_19624__$1 = state_19624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19624__$1,inst_19622);
} else {
if((state_val_19625 === (2))){
var state_19624__$1 = state_19624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19624__$1,(4),from);
} else {
if((state_val_19625 === (1))){
var state_19624__$1 = state_19624;
var statearr_19635_19745 = state_19624__$1;
(statearr_19635_19745[(2)] = null);

(statearr_19635_19745[(1)] = (2));


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
});})(c__7050__auto___19739,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___19739,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19639[(0)] = state_machine__6995__auto__);

(statearr_19639[(1)] = (1));

return statearr_19639;
});
var state_machine__6995__auto____1 = (function (state_19624){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19640){if((e19640 instanceof Object)){
var ex__6998__auto__ = e19640;
var statearr_19641_19746 = state_19624;
(statearr_19641_19746[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19747 = state_19624;
state_19624 = G__19747;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19624){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___19739,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_19642 = f__7051__auto__.call(null);
(statearr_19642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19739);

return statearr_19642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___19739,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_19680){
var state_val_19681 = (state_19680[(1)]);
if((state_val_19681 === (7))){
var inst_19676 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19682_19748 = state_19680__$1;
(statearr_19682_19748[(2)] = inst_19676);

(statearr_19682_19748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (20))){
var state_19680__$1 = state_19680;
var statearr_19683_19749 = state_19680__$1;
(statearr_19683_19749[(2)] = null);

(statearr_19683_19749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (1))){
var state_19680__$1 = state_19680;
var statearr_19684_19750 = state_19680__$1;
(statearr_19684_19750[(2)] = null);

(statearr_19684_19750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (4))){
var inst_19645 = (state_19680[(7)]);
var inst_19645__$1 = (state_19680[(2)]);
var inst_19646 = (inst_19645__$1 == null);
var state_19680__$1 = (function (){var statearr_19685 = state_19680;
(statearr_19685[(7)] = inst_19645__$1);

return statearr_19685;
})();
if(cljs.core.truth_(inst_19646)){
var statearr_19686_19751 = state_19680__$1;
(statearr_19686_19751[(1)] = (5));

} else {
var statearr_19687_19752 = state_19680__$1;
(statearr_19687_19752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (15))){
var inst_19658 = (state_19680[(8)]);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19680__$1,(18),to,inst_19658);
} else {
if((state_val_19681 === (21))){
var inst_19671 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19688_19753 = state_19680__$1;
(statearr_19688_19753[(2)] = inst_19671);

(statearr_19688_19753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (13))){
var inst_19673 = (state_19680[(2)]);
var state_19680__$1 = (function (){var statearr_19689 = state_19680;
(statearr_19689[(9)] = inst_19673);

return statearr_19689;
})();
var statearr_19690_19754 = state_19680__$1;
(statearr_19690_19754[(2)] = null);

(statearr_19690_19754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (6))){
var inst_19645 = (state_19680[(7)]);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19680__$1,(11),inst_19645);
} else {
if((state_val_19681 === (17))){
var inst_19666 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
if(cljs.core.truth_(inst_19666)){
var statearr_19691_19755 = state_19680__$1;
(statearr_19691_19755[(1)] = (19));

} else {
var statearr_19692_19756 = state_19680__$1;
(statearr_19692_19756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (3))){
var inst_19678 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19680__$1,inst_19678);
} else {
if((state_val_19681 === (12))){
var inst_19655 = (state_19680[(10)]);
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19680__$1,(14),inst_19655);
} else {
if((state_val_19681 === (2))){
var state_19680__$1 = state_19680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19680__$1,(4),results);
} else {
if((state_val_19681 === (19))){
var state_19680__$1 = state_19680;
var statearr_19693_19757 = state_19680__$1;
(statearr_19693_19757[(2)] = null);

(statearr_19693_19757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (11))){
var inst_19655 = (state_19680[(2)]);
var state_19680__$1 = (function (){var statearr_19694 = state_19680;
(statearr_19694[(10)] = inst_19655);

return statearr_19694;
})();
var statearr_19695_19758 = state_19680__$1;
(statearr_19695_19758[(2)] = null);

(statearr_19695_19758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (9))){
var state_19680__$1 = state_19680;
var statearr_19696_19759 = state_19680__$1;
(statearr_19696_19759[(2)] = null);

(statearr_19696_19759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (5))){
var state_19680__$1 = state_19680;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19697_19760 = state_19680__$1;
(statearr_19697_19760[(1)] = (8));

} else {
var statearr_19698_19761 = state_19680__$1;
(statearr_19698_19761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (14))){
var inst_19660 = (state_19680[(11)]);
var inst_19658 = (state_19680[(8)]);
var inst_19658__$1 = (state_19680[(2)]);
var inst_19659 = (inst_19658__$1 == null);
var inst_19660__$1 = cljs.core.not.call(null,inst_19659);
var state_19680__$1 = (function (){var statearr_19699 = state_19680;
(statearr_19699[(11)] = inst_19660__$1);

(statearr_19699[(8)] = inst_19658__$1);

return statearr_19699;
})();
if(inst_19660__$1){
var statearr_19700_19762 = state_19680__$1;
(statearr_19700_19762[(1)] = (15));

} else {
var statearr_19701_19763 = state_19680__$1;
(statearr_19701_19763[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (16))){
var inst_19660 = (state_19680[(11)]);
var state_19680__$1 = state_19680;
var statearr_19702_19764 = state_19680__$1;
(statearr_19702_19764[(2)] = inst_19660);

(statearr_19702_19764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (10))){
var inst_19652 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19703_19765 = state_19680__$1;
(statearr_19703_19765[(2)] = inst_19652);

(statearr_19703_19765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (18))){
var inst_19663 = (state_19680[(2)]);
var state_19680__$1 = state_19680;
var statearr_19704_19766 = state_19680__$1;
(statearr_19704_19766[(2)] = inst_19663);

(statearr_19704_19766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19681 === (8))){
var inst_19649 = cljs.core.async.close_BANG_.call(null,to);
var state_19680__$1 = state_19680;
var statearr_19705_19767 = state_19680__$1;
(statearr_19705_19767[(2)] = inst_19649);

(statearr_19705_19767[(1)] = (10));


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
var statearr_19709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19709[(0)] = state_machine__6995__auto__);

(statearr_19709[(1)] = (1));

return statearr_19709;
});
var state_machine__6995__auto____1 = (function (state_19680){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19710){if((e19710 instanceof Object)){
var ex__6998__auto__ = e19710;
var statearr_19711_19768 = state_19680;
(statearr_19711_19768[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19769 = state_19680;
state_19680 = G__19769;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19680){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_19712 = f__7051__auto__.call(null);
(statearr_19712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_19712;
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
var c__7050__auto___19870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___19870,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___19870,tc,fc){
return (function (state_19845){
var state_val_19846 = (state_19845[(1)]);
if((state_val_19846 === (7))){
var inst_19841 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19847_19871 = state_19845__$1;
(statearr_19847_19871[(2)] = inst_19841);

(statearr_19847_19871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (1))){
var state_19845__$1 = state_19845;
var statearr_19848_19872 = state_19845__$1;
(statearr_19848_19872[(2)] = null);

(statearr_19848_19872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (4))){
var inst_19822 = (state_19845[(7)]);
var inst_19822__$1 = (state_19845[(2)]);
var inst_19823 = (inst_19822__$1 == null);
var state_19845__$1 = (function (){var statearr_19849 = state_19845;
(statearr_19849[(7)] = inst_19822__$1);

return statearr_19849;
})();
if(cljs.core.truth_(inst_19823)){
var statearr_19850_19873 = state_19845__$1;
(statearr_19850_19873[(1)] = (5));

} else {
var statearr_19851_19874 = state_19845__$1;
(statearr_19851_19874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (13))){
var state_19845__$1 = state_19845;
var statearr_19852_19875 = state_19845__$1;
(statearr_19852_19875[(2)] = null);

(statearr_19852_19875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (6))){
var inst_19822 = (state_19845[(7)]);
var inst_19828 = p.call(null,inst_19822);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19828)){
var statearr_19853_19876 = state_19845__$1;
(statearr_19853_19876[(1)] = (9));

} else {
var statearr_19854_19877 = state_19845__$1;
(statearr_19854_19877[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (3))){
var inst_19843 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19845__$1,inst_19843);
} else {
if((state_val_19846 === (12))){
var state_19845__$1 = state_19845;
var statearr_19855_19878 = state_19845__$1;
(statearr_19855_19878[(2)] = null);

(statearr_19855_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (2))){
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19845__$1,(4),ch);
} else {
if((state_val_19846 === (11))){
var inst_19822 = (state_19845[(7)]);
var inst_19832 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19845__$1,(8),inst_19832,inst_19822);
} else {
if((state_val_19846 === (9))){
var state_19845__$1 = state_19845;
var statearr_19856_19879 = state_19845__$1;
(statearr_19856_19879[(2)] = tc);

(statearr_19856_19879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (5))){
var inst_19825 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19826 = cljs.core.async.close_BANG_.call(null,fc);
var state_19845__$1 = (function (){var statearr_19857 = state_19845;
(statearr_19857[(8)] = inst_19825);

return statearr_19857;
})();
var statearr_19858_19880 = state_19845__$1;
(statearr_19858_19880[(2)] = inst_19826);

(statearr_19858_19880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (14))){
var inst_19839 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19859_19881 = state_19845__$1;
(statearr_19859_19881[(2)] = inst_19839);

(statearr_19859_19881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (10))){
var state_19845__$1 = state_19845;
var statearr_19860_19882 = state_19845__$1;
(statearr_19860_19882[(2)] = fc);

(statearr_19860_19882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (8))){
var inst_19834 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19834)){
var statearr_19861_19883 = state_19845__$1;
(statearr_19861_19883[(1)] = (12));

} else {
var statearr_19862_19884 = state_19845__$1;
(statearr_19862_19884[(1)] = (13));

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
});})(c__7050__auto___19870,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___19870,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_19866 = [null,null,null,null,null,null,null,null,null];
(statearr_19866[(0)] = state_machine__6995__auto__);

(statearr_19866[(1)] = (1));

return statearr_19866;
});
var state_machine__6995__auto____1 = (function (state_19845){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19867){if((e19867 instanceof Object)){
var ex__6998__auto__ = e19867;
var statearr_19868_19885 = state_19845;
(statearr_19868_19885[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19886 = state_19845;
state_19845 = G__19886;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19845){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___19870,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_19869 = f__7051__auto__.call(null);
(statearr_19869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___19870);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___19870,tc,fc))
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
return (function (state_19933){
var state_val_19934 = (state_19933[(1)]);
if((state_val_19934 === (7))){
var inst_19929 = (state_19933[(2)]);
var state_19933__$1 = state_19933;
var statearr_19935_19951 = state_19933__$1;
(statearr_19935_19951[(2)] = inst_19929);

(statearr_19935_19951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (6))){
var inst_19922 = (state_19933[(7)]);
var inst_19919 = (state_19933[(8)]);
var inst_19926 = f.call(null,inst_19919,inst_19922);
var inst_19919__$1 = inst_19926;
var state_19933__$1 = (function (){var statearr_19936 = state_19933;
(statearr_19936[(8)] = inst_19919__$1);

return statearr_19936;
})();
var statearr_19937_19952 = state_19933__$1;
(statearr_19937_19952[(2)] = null);

(statearr_19937_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (5))){
var inst_19919 = (state_19933[(8)]);
var state_19933__$1 = state_19933;
var statearr_19938_19953 = state_19933__$1;
(statearr_19938_19953[(2)] = inst_19919);

(statearr_19938_19953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (4))){
var inst_19922 = (state_19933[(7)]);
var inst_19922__$1 = (state_19933[(2)]);
var inst_19923 = (inst_19922__$1 == null);
var state_19933__$1 = (function (){var statearr_19939 = state_19933;
(statearr_19939[(7)] = inst_19922__$1);

return statearr_19939;
})();
if(cljs.core.truth_(inst_19923)){
var statearr_19940_19954 = state_19933__$1;
(statearr_19940_19954[(1)] = (5));

} else {
var statearr_19941_19955 = state_19933__$1;
(statearr_19941_19955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19934 === (3))){
var inst_19931 = (state_19933[(2)]);
var state_19933__$1 = state_19933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19933__$1,inst_19931);
} else {
if((state_val_19934 === (2))){
var state_19933__$1 = state_19933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19933__$1,(4),ch);
} else {
if((state_val_19934 === (1))){
var inst_19919 = init;
var state_19933__$1 = (function (){var statearr_19942 = state_19933;
(statearr_19942[(8)] = inst_19919);

return statearr_19942;
})();
var statearr_19943_19956 = state_19933__$1;
(statearr_19943_19956[(2)] = null);

(statearr_19943_19956[(1)] = (2));


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
var statearr_19947 = [null,null,null,null,null,null,null,null,null];
(statearr_19947[(0)] = state_machine__6995__auto__);

(statearr_19947[(1)] = (1));

return statearr_19947;
});
var state_machine__6995__auto____1 = (function (state_19933){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_19933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e19948){if((e19948 instanceof Object)){
var ex__6998__auto__ = e19948;
var statearr_19949_19957 = state_19933;
(statearr_19949_19957[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19958 = state_19933;
state_19933 = G__19958;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_19933){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_19933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_19950 = f__7051__auto__.call(null);
(statearr_19950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_19950;
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
return (function (state_20032){
var state_val_20033 = (state_20032[(1)]);
if((state_val_20033 === (7))){
var inst_20014 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20034_20057 = state_20032__$1;
(statearr_20034_20057[(2)] = inst_20014);

(statearr_20034_20057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (1))){
var inst_20008 = cljs.core.seq.call(null,coll);
var inst_20009 = inst_20008;
var state_20032__$1 = (function (){var statearr_20035 = state_20032;
(statearr_20035[(7)] = inst_20009);

return statearr_20035;
})();
var statearr_20036_20058 = state_20032__$1;
(statearr_20036_20058[(2)] = null);

(statearr_20036_20058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (4))){
var inst_20009 = (state_20032[(7)]);
var inst_20012 = cljs.core.first.call(null,inst_20009);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20032__$1,(7),ch,inst_20012);
} else {
if((state_val_20033 === (13))){
var inst_20026 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20037_20059 = state_20032__$1;
(statearr_20037_20059[(2)] = inst_20026);

(statearr_20037_20059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (6))){
var inst_20017 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
if(cljs.core.truth_(inst_20017)){
var statearr_20038_20060 = state_20032__$1;
(statearr_20038_20060[(1)] = (8));

} else {
var statearr_20039_20061 = state_20032__$1;
(statearr_20039_20061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (3))){
var inst_20030 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20032__$1,inst_20030);
} else {
if((state_val_20033 === (12))){
var state_20032__$1 = state_20032;
var statearr_20040_20062 = state_20032__$1;
(statearr_20040_20062[(2)] = null);

(statearr_20040_20062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (2))){
var inst_20009 = (state_20032[(7)]);
var state_20032__$1 = state_20032;
if(cljs.core.truth_(inst_20009)){
var statearr_20041_20063 = state_20032__$1;
(statearr_20041_20063[(1)] = (4));

} else {
var statearr_20042_20064 = state_20032__$1;
(statearr_20042_20064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (11))){
var inst_20023 = cljs.core.async.close_BANG_.call(null,ch);
var state_20032__$1 = state_20032;
var statearr_20043_20065 = state_20032__$1;
(statearr_20043_20065[(2)] = inst_20023);

(statearr_20043_20065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (9))){
var state_20032__$1 = state_20032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20044_20066 = state_20032__$1;
(statearr_20044_20066[(1)] = (11));

} else {
var statearr_20045_20067 = state_20032__$1;
(statearr_20045_20067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (5))){
var inst_20009 = (state_20032[(7)]);
var state_20032__$1 = state_20032;
var statearr_20046_20068 = state_20032__$1;
(statearr_20046_20068[(2)] = inst_20009);

(statearr_20046_20068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (10))){
var inst_20028 = (state_20032[(2)]);
var state_20032__$1 = state_20032;
var statearr_20047_20069 = state_20032__$1;
(statearr_20047_20069[(2)] = inst_20028);

(statearr_20047_20069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20033 === (8))){
var inst_20009 = (state_20032[(7)]);
var inst_20019 = cljs.core.next.call(null,inst_20009);
var inst_20009__$1 = inst_20019;
var state_20032__$1 = (function (){var statearr_20048 = state_20032;
(statearr_20048[(7)] = inst_20009__$1);

return statearr_20048;
})();
var statearr_20049_20070 = state_20032__$1;
(statearr_20049_20070[(2)] = null);

(statearr_20049_20070[(1)] = (2));


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
var statearr_20053 = [null,null,null,null,null,null,null,null];
(statearr_20053[(0)] = state_machine__6995__auto__);

(statearr_20053[(1)] = (1));

return statearr_20053;
});
var state_machine__6995__auto____1 = (function (state_20032){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_20032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e20054){if((e20054 instanceof Object)){
var ex__6998__auto__ = e20054;
var statearr_20055_20071 = state_20032;
(statearr_20055_20071[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20072 = state_20032;
state_20032 = G__20072;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_20032){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_20032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_20056 = f__7051__auto__.call(null);
(statearr_20056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_20056;
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

cljs.core.async.Mux = (function (){var obj20074 = {};
return obj20074;
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


cljs.core.async.Mult = (function (){var obj20076 = {};
return obj20076;
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
if(typeof cljs.core.async.t20298 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20298 = (function (cs,ch,mult,meta20299){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20299 = meta20299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20298.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20300){
var self__ = this;
var _20300__$1 = this;
return self__.meta20299;
});})(cs))
;

cljs.core.async.t20298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20300,meta20299__$1){
var self__ = this;
var _20300__$1 = this;
return (new cljs.core.async.t20298(self__.cs,self__.ch,self__.mult,meta20299__$1));
});})(cs))
;

cljs.core.async.t20298.cljs$lang$type = true;

cljs.core.async.t20298.cljs$lang$ctorStr = "cljs.core.async/t20298";

cljs.core.async.t20298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20298");
});})(cs))
;

cljs.core.async.__GT_t20298 = ((function (cs){
return (function __GT_t20298(cs__$1,ch__$1,mult__$1,meta20299){
return (new cljs.core.async.t20298(cs__$1,ch__$1,mult__$1,meta20299));
});})(cs))
;

}

return (new cljs.core.async.t20298(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___20519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___20519,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___20519,cs,m,dchan,dctr,done){
return (function (state_20431){
var state_val_20432 = (state_20431[(1)]);
if((state_val_20432 === (7))){
var inst_20427 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20433_20520 = state_20431__$1;
(statearr_20433_20520[(2)] = inst_20427);

(statearr_20433_20520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (20))){
var inst_20332 = (state_20431[(7)]);
var inst_20342 = cljs.core.first.call(null,inst_20332);
var inst_20343 = cljs.core.nth.call(null,inst_20342,(0),null);
var inst_20344 = cljs.core.nth.call(null,inst_20342,(1),null);
var state_20431__$1 = (function (){var statearr_20434 = state_20431;
(statearr_20434[(8)] = inst_20343);

return statearr_20434;
})();
if(cljs.core.truth_(inst_20344)){
var statearr_20435_20521 = state_20431__$1;
(statearr_20435_20521[(1)] = (22));

} else {
var statearr_20436_20522 = state_20431__$1;
(statearr_20436_20522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (27))){
var inst_20374 = (state_20431[(9)]);
var inst_20303 = (state_20431[(10)]);
var inst_20379 = (state_20431[(11)]);
var inst_20372 = (state_20431[(12)]);
var inst_20379__$1 = cljs.core._nth.call(null,inst_20372,inst_20374);
var inst_20380 = cljs.core.async.put_BANG_.call(null,inst_20379__$1,inst_20303,done);
var state_20431__$1 = (function (){var statearr_20437 = state_20431;
(statearr_20437[(11)] = inst_20379__$1);

return statearr_20437;
})();
if(cljs.core.truth_(inst_20380)){
var statearr_20438_20523 = state_20431__$1;
(statearr_20438_20523[(1)] = (30));

} else {
var statearr_20439_20524 = state_20431__$1;
(statearr_20439_20524[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (1))){
var state_20431__$1 = state_20431;
var statearr_20440_20525 = state_20431__$1;
(statearr_20440_20525[(2)] = null);

(statearr_20440_20525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (24))){
var inst_20332 = (state_20431[(7)]);
var inst_20349 = (state_20431[(2)]);
var inst_20350 = cljs.core.next.call(null,inst_20332);
var inst_20312 = inst_20350;
var inst_20313 = null;
var inst_20314 = (0);
var inst_20315 = (0);
var state_20431__$1 = (function (){var statearr_20441 = state_20431;
(statearr_20441[(13)] = inst_20312);

(statearr_20441[(14)] = inst_20314);

(statearr_20441[(15)] = inst_20349);

(statearr_20441[(16)] = inst_20313);

(statearr_20441[(17)] = inst_20315);

return statearr_20441;
})();
var statearr_20442_20526 = state_20431__$1;
(statearr_20442_20526[(2)] = null);

(statearr_20442_20526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (39))){
var state_20431__$1 = state_20431;
var statearr_20446_20527 = state_20431__$1;
(statearr_20446_20527[(2)] = null);

(statearr_20446_20527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (4))){
var inst_20303 = (state_20431[(10)]);
var inst_20303__$1 = (state_20431[(2)]);
var inst_20304 = (inst_20303__$1 == null);
var state_20431__$1 = (function (){var statearr_20447 = state_20431;
(statearr_20447[(10)] = inst_20303__$1);

return statearr_20447;
})();
if(cljs.core.truth_(inst_20304)){
var statearr_20448_20528 = state_20431__$1;
(statearr_20448_20528[(1)] = (5));

} else {
var statearr_20449_20529 = state_20431__$1;
(statearr_20449_20529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (15))){
var inst_20312 = (state_20431[(13)]);
var inst_20314 = (state_20431[(14)]);
var inst_20313 = (state_20431[(16)]);
var inst_20315 = (state_20431[(17)]);
var inst_20328 = (state_20431[(2)]);
var inst_20329 = (inst_20315 + (1));
var tmp20443 = inst_20312;
var tmp20444 = inst_20314;
var tmp20445 = inst_20313;
var inst_20312__$1 = tmp20443;
var inst_20313__$1 = tmp20445;
var inst_20314__$1 = tmp20444;
var inst_20315__$1 = inst_20329;
var state_20431__$1 = (function (){var statearr_20450 = state_20431;
(statearr_20450[(13)] = inst_20312__$1);

(statearr_20450[(18)] = inst_20328);

(statearr_20450[(14)] = inst_20314__$1);

(statearr_20450[(16)] = inst_20313__$1);

(statearr_20450[(17)] = inst_20315__$1);

return statearr_20450;
})();
var statearr_20451_20530 = state_20431__$1;
(statearr_20451_20530[(2)] = null);

(statearr_20451_20530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (21))){
var inst_20353 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20455_20531 = state_20431__$1;
(statearr_20455_20531[(2)] = inst_20353);

(statearr_20455_20531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (31))){
var inst_20379 = (state_20431[(11)]);
var inst_20383 = done.call(null,null);
var inst_20384 = cljs.core.async.untap_STAR_.call(null,m,inst_20379);
var state_20431__$1 = (function (){var statearr_20456 = state_20431;
(statearr_20456[(19)] = inst_20383);

return statearr_20456;
})();
var statearr_20457_20532 = state_20431__$1;
(statearr_20457_20532[(2)] = inst_20384);

(statearr_20457_20532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (32))){
var inst_20373 = (state_20431[(20)]);
var inst_20374 = (state_20431[(9)]);
var inst_20371 = (state_20431[(21)]);
var inst_20372 = (state_20431[(12)]);
var inst_20386 = (state_20431[(2)]);
var inst_20387 = (inst_20374 + (1));
var tmp20452 = inst_20373;
var tmp20453 = inst_20371;
var tmp20454 = inst_20372;
var inst_20371__$1 = tmp20453;
var inst_20372__$1 = tmp20454;
var inst_20373__$1 = tmp20452;
var inst_20374__$1 = inst_20387;
var state_20431__$1 = (function (){var statearr_20458 = state_20431;
(statearr_20458[(20)] = inst_20373__$1);

(statearr_20458[(9)] = inst_20374__$1);

(statearr_20458[(22)] = inst_20386);

(statearr_20458[(21)] = inst_20371__$1);

(statearr_20458[(12)] = inst_20372__$1);

return statearr_20458;
})();
var statearr_20459_20533 = state_20431__$1;
(statearr_20459_20533[(2)] = null);

(statearr_20459_20533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (40))){
var inst_20399 = (state_20431[(23)]);
var inst_20403 = done.call(null,null);
var inst_20404 = cljs.core.async.untap_STAR_.call(null,m,inst_20399);
var state_20431__$1 = (function (){var statearr_20460 = state_20431;
(statearr_20460[(24)] = inst_20403);

return statearr_20460;
})();
var statearr_20461_20534 = state_20431__$1;
(statearr_20461_20534[(2)] = inst_20404);

(statearr_20461_20534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (33))){
var inst_20390 = (state_20431[(25)]);
var inst_20392 = cljs.core.chunked_seq_QMARK_.call(null,inst_20390);
var state_20431__$1 = state_20431;
if(inst_20392){
var statearr_20462_20535 = state_20431__$1;
(statearr_20462_20535[(1)] = (36));

} else {
var statearr_20463_20536 = state_20431__$1;
(statearr_20463_20536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (13))){
var inst_20322 = (state_20431[(26)]);
var inst_20325 = cljs.core.async.close_BANG_.call(null,inst_20322);
var state_20431__$1 = state_20431;
var statearr_20464_20537 = state_20431__$1;
(statearr_20464_20537[(2)] = inst_20325);

(statearr_20464_20537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (22))){
var inst_20343 = (state_20431[(8)]);
var inst_20346 = cljs.core.async.close_BANG_.call(null,inst_20343);
var state_20431__$1 = state_20431;
var statearr_20465_20538 = state_20431__$1;
(statearr_20465_20538[(2)] = inst_20346);

(statearr_20465_20538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (36))){
var inst_20390 = (state_20431[(25)]);
var inst_20394 = cljs.core.chunk_first.call(null,inst_20390);
var inst_20395 = cljs.core.chunk_rest.call(null,inst_20390);
var inst_20396 = cljs.core.count.call(null,inst_20394);
var inst_20371 = inst_20395;
var inst_20372 = inst_20394;
var inst_20373 = inst_20396;
var inst_20374 = (0);
var state_20431__$1 = (function (){var statearr_20466 = state_20431;
(statearr_20466[(20)] = inst_20373);

(statearr_20466[(9)] = inst_20374);

(statearr_20466[(21)] = inst_20371);

(statearr_20466[(12)] = inst_20372);

return statearr_20466;
})();
var statearr_20467_20539 = state_20431__$1;
(statearr_20467_20539[(2)] = null);

(statearr_20467_20539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (41))){
var inst_20390 = (state_20431[(25)]);
var inst_20406 = (state_20431[(2)]);
var inst_20407 = cljs.core.next.call(null,inst_20390);
var inst_20371 = inst_20407;
var inst_20372 = null;
var inst_20373 = (0);
var inst_20374 = (0);
var state_20431__$1 = (function (){var statearr_20468 = state_20431;
(statearr_20468[(20)] = inst_20373);

(statearr_20468[(9)] = inst_20374);

(statearr_20468[(27)] = inst_20406);

(statearr_20468[(21)] = inst_20371);

(statearr_20468[(12)] = inst_20372);

return statearr_20468;
})();
var statearr_20469_20540 = state_20431__$1;
(statearr_20469_20540[(2)] = null);

(statearr_20469_20540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (43))){
var state_20431__$1 = state_20431;
var statearr_20470_20541 = state_20431__$1;
(statearr_20470_20541[(2)] = null);

(statearr_20470_20541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (29))){
var inst_20415 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20471_20542 = state_20431__$1;
(statearr_20471_20542[(2)] = inst_20415);

(statearr_20471_20542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (44))){
var inst_20424 = (state_20431[(2)]);
var state_20431__$1 = (function (){var statearr_20472 = state_20431;
(statearr_20472[(28)] = inst_20424);

return statearr_20472;
})();
var statearr_20473_20543 = state_20431__$1;
(statearr_20473_20543[(2)] = null);

(statearr_20473_20543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (6))){
var inst_20363 = (state_20431[(29)]);
var inst_20362 = cljs.core.deref.call(null,cs);
var inst_20363__$1 = cljs.core.keys.call(null,inst_20362);
var inst_20364 = cljs.core.count.call(null,inst_20363__$1);
var inst_20365 = cljs.core.reset_BANG_.call(null,dctr,inst_20364);
var inst_20370 = cljs.core.seq.call(null,inst_20363__$1);
var inst_20371 = inst_20370;
var inst_20372 = null;
var inst_20373 = (0);
var inst_20374 = (0);
var state_20431__$1 = (function (){var statearr_20474 = state_20431;
(statearr_20474[(29)] = inst_20363__$1);

(statearr_20474[(30)] = inst_20365);

(statearr_20474[(20)] = inst_20373);

(statearr_20474[(9)] = inst_20374);

(statearr_20474[(21)] = inst_20371);

(statearr_20474[(12)] = inst_20372);

return statearr_20474;
})();
var statearr_20475_20544 = state_20431__$1;
(statearr_20475_20544[(2)] = null);

(statearr_20475_20544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (28))){
var inst_20390 = (state_20431[(25)]);
var inst_20371 = (state_20431[(21)]);
var inst_20390__$1 = cljs.core.seq.call(null,inst_20371);
var state_20431__$1 = (function (){var statearr_20476 = state_20431;
(statearr_20476[(25)] = inst_20390__$1);

return statearr_20476;
})();
if(inst_20390__$1){
var statearr_20477_20545 = state_20431__$1;
(statearr_20477_20545[(1)] = (33));

} else {
var statearr_20478_20546 = state_20431__$1;
(statearr_20478_20546[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (25))){
var inst_20373 = (state_20431[(20)]);
var inst_20374 = (state_20431[(9)]);
var inst_20376 = (inst_20374 < inst_20373);
var inst_20377 = inst_20376;
var state_20431__$1 = state_20431;
if(cljs.core.truth_(inst_20377)){
var statearr_20479_20547 = state_20431__$1;
(statearr_20479_20547[(1)] = (27));

} else {
var statearr_20480_20548 = state_20431__$1;
(statearr_20480_20548[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (34))){
var state_20431__$1 = state_20431;
var statearr_20481_20549 = state_20431__$1;
(statearr_20481_20549[(2)] = null);

(statearr_20481_20549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (17))){
var state_20431__$1 = state_20431;
var statearr_20482_20550 = state_20431__$1;
(statearr_20482_20550[(2)] = null);

(statearr_20482_20550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (3))){
var inst_20429 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20431__$1,inst_20429);
} else {
if((state_val_20432 === (12))){
var inst_20358 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20483_20551 = state_20431__$1;
(statearr_20483_20551[(2)] = inst_20358);

(statearr_20483_20551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (2))){
var state_20431__$1 = state_20431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20431__$1,(4),ch);
} else {
if((state_val_20432 === (23))){
var state_20431__$1 = state_20431;
var statearr_20484_20552 = state_20431__$1;
(statearr_20484_20552[(2)] = null);

(statearr_20484_20552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (35))){
var inst_20413 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20485_20553 = state_20431__$1;
(statearr_20485_20553[(2)] = inst_20413);

(statearr_20485_20553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (19))){
var inst_20332 = (state_20431[(7)]);
var inst_20336 = cljs.core.chunk_first.call(null,inst_20332);
var inst_20337 = cljs.core.chunk_rest.call(null,inst_20332);
var inst_20338 = cljs.core.count.call(null,inst_20336);
var inst_20312 = inst_20337;
var inst_20313 = inst_20336;
var inst_20314 = inst_20338;
var inst_20315 = (0);
var state_20431__$1 = (function (){var statearr_20486 = state_20431;
(statearr_20486[(13)] = inst_20312);

(statearr_20486[(14)] = inst_20314);

(statearr_20486[(16)] = inst_20313);

(statearr_20486[(17)] = inst_20315);

return statearr_20486;
})();
var statearr_20487_20554 = state_20431__$1;
(statearr_20487_20554[(2)] = null);

(statearr_20487_20554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (11))){
var inst_20312 = (state_20431[(13)]);
var inst_20332 = (state_20431[(7)]);
var inst_20332__$1 = cljs.core.seq.call(null,inst_20312);
var state_20431__$1 = (function (){var statearr_20488 = state_20431;
(statearr_20488[(7)] = inst_20332__$1);

return statearr_20488;
})();
if(inst_20332__$1){
var statearr_20489_20555 = state_20431__$1;
(statearr_20489_20555[(1)] = (16));

} else {
var statearr_20490_20556 = state_20431__$1;
(statearr_20490_20556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (9))){
var inst_20360 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20491_20557 = state_20431__$1;
(statearr_20491_20557[(2)] = inst_20360);

(statearr_20491_20557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (5))){
var inst_20310 = cljs.core.deref.call(null,cs);
var inst_20311 = cljs.core.seq.call(null,inst_20310);
var inst_20312 = inst_20311;
var inst_20313 = null;
var inst_20314 = (0);
var inst_20315 = (0);
var state_20431__$1 = (function (){var statearr_20492 = state_20431;
(statearr_20492[(13)] = inst_20312);

(statearr_20492[(14)] = inst_20314);

(statearr_20492[(16)] = inst_20313);

(statearr_20492[(17)] = inst_20315);

return statearr_20492;
})();
var statearr_20493_20558 = state_20431__$1;
(statearr_20493_20558[(2)] = null);

(statearr_20493_20558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (14))){
var state_20431__$1 = state_20431;
var statearr_20494_20559 = state_20431__$1;
(statearr_20494_20559[(2)] = null);

(statearr_20494_20559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (45))){
var inst_20421 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20495_20560 = state_20431__$1;
(statearr_20495_20560[(2)] = inst_20421);

(statearr_20495_20560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (26))){
var inst_20363 = (state_20431[(29)]);
var inst_20417 = (state_20431[(2)]);
var inst_20418 = cljs.core.seq.call(null,inst_20363);
var state_20431__$1 = (function (){var statearr_20496 = state_20431;
(statearr_20496[(31)] = inst_20417);

return statearr_20496;
})();
if(inst_20418){
var statearr_20497_20561 = state_20431__$1;
(statearr_20497_20561[(1)] = (42));

} else {
var statearr_20498_20562 = state_20431__$1;
(statearr_20498_20562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (16))){
var inst_20332 = (state_20431[(7)]);
var inst_20334 = cljs.core.chunked_seq_QMARK_.call(null,inst_20332);
var state_20431__$1 = state_20431;
if(inst_20334){
var statearr_20499_20563 = state_20431__$1;
(statearr_20499_20563[(1)] = (19));

} else {
var statearr_20500_20564 = state_20431__$1;
(statearr_20500_20564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (38))){
var inst_20410 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20501_20565 = state_20431__$1;
(statearr_20501_20565[(2)] = inst_20410);

(statearr_20501_20565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (30))){
var state_20431__$1 = state_20431;
var statearr_20502_20566 = state_20431__$1;
(statearr_20502_20566[(2)] = null);

(statearr_20502_20566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (10))){
var inst_20313 = (state_20431[(16)]);
var inst_20315 = (state_20431[(17)]);
var inst_20321 = cljs.core._nth.call(null,inst_20313,inst_20315);
var inst_20322 = cljs.core.nth.call(null,inst_20321,(0),null);
var inst_20323 = cljs.core.nth.call(null,inst_20321,(1),null);
var state_20431__$1 = (function (){var statearr_20503 = state_20431;
(statearr_20503[(26)] = inst_20322);

return statearr_20503;
})();
if(cljs.core.truth_(inst_20323)){
var statearr_20504_20567 = state_20431__$1;
(statearr_20504_20567[(1)] = (13));

} else {
var statearr_20505_20568 = state_20431__$1;
(statearr_20505_20568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (18))){
var inst_20356 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20506_20569 = state_20431__$1;
(statearr_20506_20569[(2)] = inst_20356);

(statearr_20506_20569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (42))){
var state_20431__$1 = state_20431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20431__$1,(45),dchan);
} else {
if((state_val_20432 === (37))){
var inst_20390 = (state_20431[(25)]);
var inst_20303 = (state_20431[(10)]);
var inst_20399 = (state_20431[(23)]);
var inst_20399__$1 = cljs.core.first.call(null,inst_20390);
var inst_20400 = cljs.core.async.put_BANG_.call(null,inst_20399__$1,inst_20303,done);
var state_20431__$1 = (function (){var statearr_20507 = state_20431;
(statearr_20507[(23)] = inst_20399__$1);

return statearr_20507;
})();
if(cljs.core.truth_(inst_20400)){
var statearr_20508_20570 = state_20431__$1;
(statearr_20508_20570[(1)] = (39));

} else {
var statearr_20509_20571 = state_20431__$1;
(statearr_20509_20571[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (8))){
var inst_20314 = (state_20431[(14)]);
var inst_20315 = (state_20431[(17)]);
var inst_20317 = (inst_20315 < inst_20314);
var inst_20318 = inst_20317;
var state_20431__$1 = state_20431;
if(cljs.core.truth_(inst_20318)){
var statearr_20510_20572 = state_20431__$1;
(statearr_20510_20572[(1)] = (10));

} else {
var statearr_20511_20573 = state_20431__$1;
(statearr_20511_20573[(1)] = (11));

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
});})(c__7050__auto___20519,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___20519,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_20515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20515[(0)] = state_machine__6995__auto__);

(statearr_20515[(1)] = (1));

return statearr_20515;
});
var state_machine__6995__auto____1 = (function (state_20431){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_20431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e20516){if((e20516 instanceof Object)){
var ex__6998__auto__ = e20516;
var statearr_20517_20574 = state_20431;
(statearr_20517_20574[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20575 = state_20431;
state_20431 = G__20575;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_20431){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_20431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___20519,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_20518 = f__7051__auto__.call(null);
(statearr_20518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___20519);

return statearr_20518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___20519,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj20577 = {};
return obj20577;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20578){
var map__20583 = p__20578;
var map__20583__$1 = ((cljs.core.seq_QMARK_.call(null,map__20583))?cljs.core.apply.call(null,cljs.core.hash_map,map__20583):map__20583);
var opts = map__20583__$1;
var statearr_20584_20587 = state;
(statearr_20584_20587[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20583,map__20583__$1,opts){
return (function (val){
var statearr_20585_20588 = state;
(statearr_20585_20588[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20583,map__20583__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20586_20589 = state;
(statearr_20586_20589[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20578 = null;
if (arguments.length > 3) {
  p__20578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20578);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20590){
var state = cljs.core.first(arglist__20590);
arglist__20590 = cljs.core.next(arglist__20590);
var cont_block = cljs.core.first(arglist__20590);
arglist__20590 = cljs.core.next(arglist__20590);
var ports = cljs.core.first(arglist__20590);
var p__20578 = cljs.core.rest(arglist__20590);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20578);
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
if(typeof cljs.core.async.t20710 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20710 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20711){
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
this.meta20711 = meta20711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20710.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20710.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20710.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20712){
var self__ = this;
var _20712__$1 = this;
return self__.meta20711;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20712,meta20711__$1){
var self__ = this;
var _20712__$1 = this;
return (new cljs.core.async.t20710(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20711__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20710.cljs$lang$type = true;

cljs.core.async.t20710.cljs$lang$ctorStr = "cljs.core.async/t20710";

cljs.core.async.t20710.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20710");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20710 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20710(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20711){
return (new cljs.core.async.t20710(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20711));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20710(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___20829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20782){
var state_val_20783 = (state_20782[(1)]);
if((state_val_20783 === (7))){
var inst_20726 = (state_20782[(7)]);
var inst_20731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20726);
var state_20782__$1 = state_20782;
var statearr_20784_20830 = state_20782__$1;
(statearr_20784_20830[(2)] = inst_20731);

(statearr_20784_20830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (20))){
var inst_20741 = (state_20782[(8)]);
var state_20782__$1 = state_20782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20782__$1,(23),out,inst_20741);
} else {
if((state_val_20783 === (1))){
var inst_20716 = (state_20782[(9)]);
var inst_20716__$1 = calc_state.call(null);
var inst_20717 = cljs.core.seq_QMARK_.call(null,inst_20716__$1);
var state_20782__$1 = (function (){var statearr_20785 = state_20782;
(statearr_20785[(9)] = inst_20716__$1);

return statearr_20785;
})();
if(inst_20717){
var statearr_20786_20831 = state_20782__$1;
(statearr_20786_20831[(1)] = (2));

} else {
var statearr_20787_20832 = state_20782__$1;
(statearr_20787_20832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (24))){
var inst_20734 = (state_20782[(10)]);
var inst_20726 = inst_20734;
var state_20782__$1 = (function (){var statearr_20788 = state_20782;
(statearr_20788[(7)] = inst_20726);

return statearr_20788;
})();
var statearr_20789_20833 = state_20782__$1;
(statearr_20789_20833[(2)] = null);

(statearr_20789_20833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (4))){
var inst_20716 = (state_20782[(9)]);
var inst_20722 = (state_20782[(2)]);
var inst_20723 = cljs.core.get.call(null,inst_20722,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20724 = cljs.core.get.call(null,inst_20722,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20725 = cljs.core.get.call(null,inst_20722,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20726 = inst_20716;
var state_20782__$1 = (function (){var statearr_20790 = state_20782;
(statearr_20790[(7)] = inst_20726);

(statearr_20790[(11)] = inst_20723);

(statearr_20790[(12)] = inst_20724);

(statearr_20790[(13)] = inst_20725);

return statearr_20790;
})();
var statearr_20791_20834 = state_20782__$1;
(statearr_20791_20834[(2)] = null);

(statearr_20791_20834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (15))){
var state_20782__$1 = state_20782;
var statearr_20792_20835 = state_20782__$1;
(statearr_20792_20835[(2)] = null);

(statearr_20792_20835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (21))){
var inst_20734 = (state_20782[(10)]);
var inst_20726 = inst_20734;
var state_20782__$1 = (function (){var statearr_20793 = state_20782;
(statearr_20793[(7)] = inst_20726);

return statearr_20793;
})();
var statearr_20794_20836 = state_20782__$1;
(statearr_20794_20836[(2)] = null);

(statearr_20794_20836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (13))){
var inst_20778 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
var statearr_20795_20837 = state_20782__$1;
(statearr_20795_20837[(2)] = inst_20778);

(statearr_20795_20837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (22))){
var inst_20776 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
var statearr_20796_20838 = state_20782__$1;
(statearr_20796_20838[(2)] = inst_20776);

(statearr_20796_20838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (6))){
var inst_20780 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20782__$1,inst_20780);
} else {
if((state_val_20783 === (25))){
var state_20782__$1 = state_20782;
var statearr_20797_20839 = state_20782__$1;
(statearr_20797_20839[(2)] = null);

(statearr_20797_20839[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (17))){
var inst_20756 = (state_20782[(14)]);
var state_20782__$1 = state_20782;
var statearr_20798_20840 = state_20782__$1;
(statearr_20798_20840[(2)] = inst_20756);

(statearr_20798_20840[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (3))){
var inst_20716 = (state_20782[(9)]);
var state_20782__$1 = state_20782;
var statearr_20799_20841 = state_20782__$1;
(statearr_20799_20841[(2)] = inst_20716);

(statearr_20799_20841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (12))){
var inst_20756 = (state_20782[(14)]);
var inst_20742 = (state_20782[(15)]);
var inst_20737 = (state_20782[(16)]);
var inst_20756__$1 = inst_20737.call(null,inst_20742);
var state_20782__$1 = (function (){var statearr_20800 = state_20782;
(statearr_20800[(14)] = inst_20756__$1);

return statearr_20800;
})();
if(cljs.core.truth_(inst_20756__$1)){
var statearr_20801_20842 = state_20782__$1;
(statearr_20801_20842[(1)] = (17));

} else {
var statearr_20802_20843 = state_20782__$1;
(statearr_20802_20843[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (2))){
var inst_20716 = (state_20782[(9)]);
var inst_20719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20716);
var state_20782__$1 = state_20782;
var statearr_20803_20844 = state_20782__$1;
(statearr_20803_20844[(2)] = inst_20719);

(statearr_20803_20844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (23))){
var inst_20767 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
if(cljs.core.truth_(inst_20767)){
var statearr_20804_20845 = state_20782__$1;
(statearr_20804_20845[(1)] = (24));

} else {
var statearr_20805_20846 = state_20782__$1;
(statearr_20805_20846[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (19))){
var inst_20764 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
if(cljs.core.truth_(inst_20764)){
var statearr_20806_20847 = state_20782__$1;
(statearr_20806_20847[(1)] = (20));

} else {
var statearr_20807_20848 = state_20782__$1;
(statearr_20807_20848[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (11))){
var inst_20741 = (state_20782[(8)]);
var inst_20747 = (inst_20741 == null);
var state_20782__$1 = state_20782;
if(cljs.core.truth_(inst_20747)){
var statearr_20808_20849 = state_20782__$1;
(statearr_20808_20849[(1)] = (14));

} else {
var statearr_20809_20850 = state_20782__$1;
(statearr_20809_20850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (9))){
var inst_20734 = (state_20782[(10)]);
var inst_20734__$1 = (state_20782[(2)]);
var inst_20735 = cljs.core.get.call(null,inst_20734__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20736 = cljs.core.get.call(null,inst_20734__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20737 = cljs.core.get.call(null,inst_20734__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20782__$1 = (function (){var statearr_20810 = state_20782;
(statearr_20810[(10)] = inst_20734__$1);

(statearr_20810[(17)] = inst_20736);

(statearr_20810[(16)] = inst_20737);

return statearr_20810;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20782__$1,(10),inst_20735);
} else {
if((state_val_20783 === (5))){
var inst_20726 = (state_20782[(7)]);
var inst_20729 = cljs.core.seq_QMARK_.call(null,inst_20726);
var state_20782__$1 = state_20782;
if(inst_20729){
var statearr_20811_20851 = state_20782__$1;
(statearr_20811_20851[(1)] = (7));

} else {
var statearr_20812_20852 = state_20782__$1;
(statearr_20812_20852[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (14))){
var inst_20742 = (state_20782[(15)]);
var inst_20749 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20742);
var state_20782__$1 = state_20782;
var statearr_20813_20853 = state_20782__$1;
(statearr_20813_20853[(2)] = inst_20749);

(statearr_20813_20853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (26))){
var inst_20772 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
var statearr_20814_20854 = state_20782__$1;
(statearr_20814_20854[(2)] = inst_20772);

(statearr_20814_20854[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (16))){
var inst_20752 = (state_20782[(2)]);
var inst_20753 = calc_state.call(null);
var inst_20726 = inst_20753;
var state_20782__$1 = (function (){var statearr_20815 = state_20782;
(statearr_20815[(7)] = inst_20726);

(statearr_20815[(18)] = inst_20752);

return statearr_20815;
})();
var statearr_20816_20855 = state_20782__$1;
(statearr_20816_20855[(2)] = null);

(statearr_20816_20855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (10))){
var inst_20742 = (state_20782[(15)]);
var inst_20741 = (state_20782[(8)]);
var inst_20740 = (state_20782[(2)]);
var inst_20741__$1 = cljs.core.nth.call(null,inst_20740,(0),null);
var inst_20742__$1 = cljs.core.nth.call(null,inst_20740,(1),null);
var inst_20743 = (inst_20741__$1 == null);
var inst_20744 = cljs.core._EQ_.call(null,inst_20742__$1,change);
var inst_20745 = (inst_20743) || (inst_20744);
var state_20782__$1 = (function (){var statearr_20817 = state_20782;
(statearr_20817[(15)] = inst_20742__$1);

(statearr_20817[(8)] = inst_20741__$1);

return statearr_20817;
})();
if(cljs.core.truth_(inst_20745)){
var statearr_20818_20856 = state_20782__$1;
(statearr_20818_20856[(1)] = (11));

} else {
var statearr_20819_20857 = state_20782__$1;
(statearr_20819_20857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (18))){
var inst_20736 = (state_20782[(17)]);
var inst_20742 = (state_20782[(15)]);
var inst_20737 = (state_20782[(16)]);
var inst_20759 = cljs.core.empty_QMARK_.call(null,inst_20737);
var inst_20760 = inst_20736.call(null,inst_20742);
var inst_20761 = cljs.core.not.call(null,inst_20760);
var inst_20762 = (inst_20759) && (inst_20761);
var state_20782__$1 = state_20782;
var statearr_20820_20858 = state_20782__$1;
(statearr_20820_20858[(2)] = inst_20762);

(statearr_20820_20858[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20783 === (8))){
var inst_20726 = (state_20782[(7)]);
var state_20782__$1 = state_20782;
var statearr_20821_20859 = state_20782__$1;
(statearr_20821_20859[(2)] = inst_20726);

(statearr_20821_20859[(1)] = (9));


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
});})(c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_20825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20825[(0)] = state_machine__6995__auto__);

(statearr_20825[(1)] = (1));

return statearr_20825;
});
var state_machine__6995__auto____1 = (function (state_20782){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_20782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e20826){if((e20826 instanceof Object)){
var ex__6998__auto__ = e20826;
var statearr_20827_20860 = state_20782;
(statearr_20827_20860[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20861 = state_20782;
state_20782 = G__20861;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_20782){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_20782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_20828 = f__7051__auto__.call(null);
(statearr_20828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___20829);

return statearr_20828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___20829,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj20863 = {};
return obj20863;
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
return (function (p1__20864_SHARP_){
if(cljs.core.truth_(p1__20864_SHARP_.call(null,topic))){
return p1__20864_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20864_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20987 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20988){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20988 = meta20988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20987.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20987.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20987.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20987.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20989){
var self__ = this;
var _20989__$1 = this;
return self__.meta20988;
});})(mults,ensure_mult))
;

cljs.core.async.t20987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20989,meta20988__$1){
var self__ = this;
var _20989__$1 = this;
return (new cljs.core.async.t20987(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20988__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20987.cljs$lang$type = true;

cljs.core.async.t20987.cljs$lang$ctorStr = "cljs.core.async/t20987";

cljs.core.async.t20987.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t20987");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20987 = ((function (mults,ensure_mult){
return (function __GT_t20987(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20988){
return (new cljs.core.async.t20987(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20988));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20987(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___21109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21109,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21109,mults,ensure_mult,p){
return (function (state_21061){
var state_val_21062 = (state_21061[(1)]);
if((state_val_21062 === (7))){
var inst_21057 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21063_21110 = state_21061__$1;
(statearr_21063_21110[(2)] = inst_21057);

(statearr_21063_21110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (20))){
var state_21061__$1 = state_21061;
var statearr_21064_21111 = state_21061__$1;
(statearr_21064_21111[(2)] = null);

(statearr_21064_21111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (1))){
var state_21061__$1 = state_21061;
var statearr_21065_21112 = state_21061__$1;
(statearr_21065_21112[(2)] = null);

(statearr_21065_21112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (24))){
var inst_21040 = (state_21061[(7)]);
var inst_21049 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21040);
var state_21061__$1 = state_21061;
var statearr_21066_21113 = state_21061__$1;
(statearr_21066_21113[(2)] = inst_21049);

(statearr_21066_21113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (4))){
var inst_20992 = (state_21061[(8)]);
var inst_20992__$1 = (state_21061[(2)]);
var inst_20993 = (inst_20992__$1 == null);
var state_21061__$1 = (function (){var statearr_21067 = state_21061;
(statearr_21067[(8)] = inst_20992__$1);

return statearr_21067;
})();
if(cljs.core.truth_(inst_20993)){
var statearr_21068_21114 = state_21061__$1;
(statearr_21068_21114[(1)] = (5));

} else {
var statearr_21069_21115 = state_21061__$1;
(statearr_21069_21115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (15))){
var inst_21034 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21070_21116 = state_21061__$1;
(statearr_21070_21116[(2)] = inst_21034);

(statearr_21070_21116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (21))){
var inst_21054 = (state_21061[(2)]);
var state_21061__$1 = (function (){var statearr_21071 = state_21061;
(statearr_21071[(9)] = inst_21054);

return statearr_21071;
})();
var statearr_21072_21117 = state_21061__$1;
(statearr_21072_21117[(2)] = null);

(statearr_21072_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (13))){
var inst_21016 = (state_21061[(10)]);
var inst_21018 = cljs.core.chunked_seq_QMARK_.call(null,inst_21016);
var state_21061__$1 = state_21061;
if(inst_21018){
var statearr_21073_21118 = state_21061__$1;
(statearr_21073_21118[(1)] = (16));

} else {
var statearr_21074_21119 = state_21061__$1;
(statearr_21074_21119[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (22))){
var inst_21046 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
if(cljs.core.truth_(inst_21046)){
var statearr_21075_21120 = state_21061__$1;
(statearr_21075_21120[(1)] = (23));

} else {
var statearr_21076_21121 = state_21061__$1;
(statearr_21076_21121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (6))){
var inst_21040 = (state_21061[(7)]);
var inst_20992 = (state_21061[(8)]);
var inst_21042 = (state_21061[(11)]);
var inst_21040__$1 = topic_fn.call(null,inst_20992);
var inst_21041 = cljs.core.deref.call(null,mults);
var inst_21042__$1 = cljs.core.get.call(null,inst_21041,inst_21040__$1);
var state_21061__$1 = (function (){var statearr_21077 = state_21061;
(statearr_21077[(7)] = inst_21040__$1);

(statearr_21077[(11)] = inst_21042__$1);

return statearr_21077;
})();
if(cljs.core.truth_(inst_21042__$1)){
var statearr_21078_21122 = state_21061__$1;
(statearr_21078_21122[(1)] = (19));

} else {
var statearr_21079_21123 = state_21061__$1;
(statearr_21079_21123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (25))){
var inst_21051 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21080_21124 = state_21061__$1;
(statearr_21080_21124[(2)] = inst_21051);

(statearr_21080_21124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (17))){
var inst_21016 = (state_21061[(10)]);
var inst_21025 = cljs.core.first.call(null,inst_21016);
var inst_21026 = cljs.core.async.muxch_STAR_.call(null,inst_21025);
var inst_21027 = cljs.core.async.close_BANG_.call(null,inst_21026);
var inst_21028 = cljs.core.next.call(null,inst_21016);
var inst_21002 = inst_21028;
var inst_21003 = null;
var inst_21004 = (0);
var inst_21005 = (0);
var state_21061__$1 = (function (){var statearr_21081 = state_21061;
(statearr_21081[(12)] = inst_21002);

(statearr_21081[(13)] = inst_21003);

(statearr_21081[(14)] = inst_21004);

(statearr_21081[(15)] = inst_21005);

(statearr_21081[(16)] = inst_21027);

return statearr_21081;
})();
var statearr_21082_21125 = state_21061__$1;
(statearr_21082_21125[(2)] = null);

(statearr_21082_21125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (3))){
var inst_21059 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21061__$1,inst_21059);
} else {
if((state_val_21062 === (12))){
var inst_21036 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21083_21126 = state_21061__$1;
(statearr_21083_21126[(2)] = inst_21036);

(statearr_21083_21126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (2))){
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21061__$1,(4),ch);
} else {
if((state_val_21062 === (23))){
var state_21061__$1 = state_21061;
var statearr_21084_21127 = state_21061__$1;
(statearr_21084_21127[(2)] = null);

(statearr_21084_21127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (19))){
var inst_20992 = (state_21061[(8)]);
var inst_21042 = (state_21061[(11)]);
var inst_21044 = cljs.core.async.muxch_STAR_.call(null,inst_21042);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21061__$1,(22),inst_21044,inst_20992);
} else {
if((state_val_21062 === (11))){
var inst_21002 = (state_21061[(12)]);
var inst_21016 = (state_21061[(10)]);
var inst_21016__$1 = cljs.core.seq.call(null,inst_21002);
var state_21061__$1 = (function (){var statearr_21085 = state_21061;
(statearr_21085[(10)] = inst_21016__$1);

return statearr_21085;
})();
if(inst_21016__$1){
var statearr_21086_21128 = state_21061__$1;
(statearr_21086_21128[(1)] = (13));

} else {
var statearr_21087_21129 = state_21061__$1;
(statearr_21087_21129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (9))){
var inst_21038 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21088_21130 = state_21061__$1;
(statearr_21088_21130[(2)] = inst_21038);

(statearr_21088_21130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (5))){
var inst_20999 = cljs.core.deref.call(null,mults);
var inst_21000 = cljs.core.vals.call(null,inst_20999);
var inst_21001 = cljs.core.seq.call(null,inst_21000);
var inst_21002 = inst_21001;
var inst_21003 = null;
var inst_21004 = (0);
var inst_21005 = (0);
var state_21061__$1 = (function (){var statearr_21089 = state_21061;
(statearr_21089[(12)] = inst_21002);

(statearr_21089[(13)] = inst_21003);

(statearr_21089[(14)] = inst_21004);

(statearr_21089[(15)] = inst_21005);

return statearr_21089;
})();
var statearr_21090_21131 = state_21061__$1;
(statearr_21090_21131[(2)] = null);

(statearr_21090_21131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (14))){
var state_21061__$1 = state_21061;
var statearr_21094_21132 = state_21061__$1;
(statearr_21094_21132[(2)] = null);

(statearr_21094_21132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (16))){
var inst_21016 = (state_21061[(10)]);
var inst_21020 = cljs.core.chunk_first.call(null,inst_21016);
var inst_21021 = cljs.core.chunk_rest.call(null,inst_21016);
var inst_21022 = cljs.core.count.call(null,inst_21020);
var inst_21002 = inst_21021;
var inst_21003 = inst_21020;
var inst_21004 = inst_21022;
var inst_21005 = (0);
var state_21061__$1 = (function (){var statearr_21095 = state_21061;
(statearr_21095[(12)] = inst_21002);

(statearr_21095[(13)] = inst_21003);

(statearr_21095[(14)] = inst_21004);

(statearr_21095[(15)] = inst_21005);

return statearr_21095;
})();
var statearr_21096_21133 = state_21061__$1;
(statearr_21096_21133[(2)] = null);

(statearr_21096_21133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (10))){
var inst_21002 = (state_21061[(12)]);
var inst_21003 = (state_21061[(13)]);
var inst_21004 = (state_21061[(14)]);
var inst_21005 = (state_21061[(15)]);
var inst_21010 = cljs.core._nth.call(null,inst_21003,inst_21005);
var inst_21011 = cljs.core.async.muxch_STAR_.call(null,inst_21010);
var inst_21012 = cljs.core.async.close_BANG_.call(null,inst_21011);
var inst_21013 = (inst_21005 + (1));
var tmp21091 = inst_21002;
var tmp21092 = inst_21003;
var tmp21093 = inst_21004;
var inst_21002__$1 = tmp21091;
var inst_21003__$1 = tmp21092;
var inst_21004__$1 = tmp21093;
var inst_21005__$1 = inst_21013;
var state_21061__$1 = (function (){var statearr_21097 = state_21061;
(statearr_21097[(12)] = inst_21002__$1);

(statearr_21097[(13)] = inst_21003__$1);

(statearr_21097[(17)] = inst_21012);

(statearr_21097[(14)] = inst_21004__$1);

(statearr_21097[(15)] = inst_21005__$1);

return statearr_21097;
})();
var statearr_21098_21134 = state_21061__$1;
(statearr_21098_21134[(2)] = null);

(statearr_21098_21134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (18))){
var inst_21031 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21099_21135 = state_21061__$1;
(statearr_21099_21135[(2)] = inst_21031);

(statearr_21099_21135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (8))){
var inst_21004 = (state_21061[(14)]);
var inst_21005 = (state_21061[(15)]);
var inst_21007 = (inst_21005 < inst_21004);
var inst_21008 = inst_21007;
var state_21061__$1 = state_21061;
if(cljs.core.truth_(inst_21008)){
var statearr_21100_21136 = state_21061__$1;
(statearr_21100_21136[(1)] = (10));

} else {
var statearr_21101_21137 = state_21061__$1;
(statearr_21101_21137[(1)] = (11));

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
});})(c__7050__auto___21109,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___21109,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21105[(0)] = state_machine__6995__auto__);

(statearr_21105[(1)] = (1));

return statearr_21105;
});
var state_machine__6995__auto____1 = (function (state_21061){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21106){if((e21106 instanceof Object)){
var ex__6998__auto__ = e21106;
var statearr_21107_21138 = state_21061;
(statearr_21107_21138[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21139 = state_21061;
state_21061 = G__21139;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21061){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21109,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_21108 = f__7051__auto__.call(null);
(statearr_21108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21109);

return statearr_21108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21109,mults,ensure_mult,p))
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
var c__7050__auto___21276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21246){
var state_val_21247 = (state_21246[(1)]);
if((state_val_21247 === (7))){
var state_21246__$1 = state_21246;
var statearr_21248_21277 = state_21246__$1;
(statearr_21248_21277[(2)] = null);

(statearr_21248_21277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (1))){
var state_21246__$1 = state_21246;
var statearr_21249_21278 = state_21246__$1;
(statearr_21249_21278[(2)] = null);

(statearr_21249_21278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (4))){
var inst_21210 = (state_21246[(7)]);
var inst_21212 = (inst_21210 < cnt);
var state_21246__$1 = state_21246;
if(cljs.core.truth_(inst_21212)){
var statearr_21250_21279 = state_21246__$1;
(statearr_21250_21279[(1)] = (6));

} else {
var statearr_21251_21280 = state_21246__$1;
(statearr_21251_21280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (15))){
var inst_21242 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21252_21281 = state_21246__$1;
(statearr_21252_21281[(2)] = inst_21242);

(statearr_21252_21281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (13))){
var inst_21235 = cljs.core.async.close_BANG_.call(null,out);
var state_21246__$1 = state_21246;
var statearr_21253_21282 = state_21246__$1;
(statearr_21253_21282[(2)] = inst_21235);

(statearr_21253_21282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (6))){
var state_21246__$1 = state_21246;
var statearr_21254_21283 = state_21246__$1;
(statearr_21254_21283[(2)] = null);

(statearr_21254_21283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (3))){
var inst_21244 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21246__$1,inst_21244);
} else {
if((state_val_21247 === (12))){
var inst_21232 = (state_21246[(8)]);
var inst_21232__$1 = (state_21246[(2)]);
var inst_21233 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21232__$1);
var state_21246__$1 = (function (){var statearr_21255 = state_21246;
(statearr_21255[(8)] = inst_21232__$1);

return statearr_21255;
})();
if(cljs.core.truth_(inst_21233)){
var statearr_21256_21284 = state_21246__$1;
(statearr_21256_21284[(1)] = (13));

} else {
var statearr_21257_21285 = state_21246__$1;
(statearr_21257_21285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (2))){
var inst_21209 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21210 = (0);
var state_21246__$1 = (function (){var statearr_21258 = state_21246;
(statearr_21258[(9)] = inst_21209);

(statearr_21258[(7)] = inst_21210);

return statearr_21258;
})();
var statearr_21259_21286 = state_21246__$1;
(statearr_21259_21286[(2)] = null);

(statearr_21259_21286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (11))){
var inst_21210 = (state_21246[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21246,(10),Object,null,(9));
var inst_21219 = chs__$1.call(null,inst_21210);
var inst_21220 = done.call(null,inst_21210);
var inst_21221 = cljs.core.async.take_BANG_.call(null,inst_21219,inst_21220);
var state_21246__$1 = state_21246;
var statearr_21260_21287 = state_21246__$1;
(statearr_21260_21287[(2)] = inst_21221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (9))){
var inst_21210 = (state_21246[(7)]);
var inst_21223 = (state_21246[(2)]);
var inst_21224 = (inst_21210 + (1));
var inst_21210__$1 = inst_21224;
var state_21246__$1 = (function (){var statearr_21261 = state_21246;
(statearr_21261[(10)] = inst_21223);

(statearr_21261[(7)] = inst_21210__$1);

return statearr_21261;
})();
var statearr_21262_21288 = state_21246__$1;
(statearr_21262_21288[(2)] = null);

(statearr_21262_21288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (5))){
var inst_21230 = (state_21246[(2)]);
var state_21246__$1 = (function (){var statearr_21263 = state_21246;
(statearr_21263[(11)] = inst_21230);

return statearr_21263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21246__$1,(12),dchan);
} else {
if((state_val_21247 === (14))){
var inst_21232 = (state_21246[(8)]);
var inst_21237 = cljs.core.apply.call(null,f,inst_21232);
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21246__$1,(16),out,inst_21237);
} else {
if((state_val_21247 === (16))){
var inst_21239 = (state_21246[(2)]);
var state_21246__$1 = (function (){var statearr_21264 = state_21246;
(statearr_21264[(12)] = inst_21239);

return statearr_21264;
})();
var statearr_21265_21289 = state_21246__$1;
(statearr_21265_21289[(2)] = null);

(statearr_21265_21289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (10))){
var inst_21214 = (state_21246[(2)]);
var inst_21215 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21246__$1 = (function (){var statearr_21266 = state_21246;
(statearr_21266[(13)] = inst_21214);

return statearr_21266;
})();
var statearr_21267_21290 = state_21246__$1;
(statearr_21267_21290[(2)] = inst_21215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (8))){
var inst_21228 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21268_21291 = state_21246__$1;
(statearr_21268_21291[(2)] = inst_21228);

(statearr_21268_21291[(1)] = (5));


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
});})(c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21272[(0)] = state_machine__6995__auto__);

(statearr_21272[(1)] = (1));

return statearr_21272;
});
var state_machine__6995__auto____1 = (function (state_21246){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21273){if((e21273 instanceof Object)){
var ex__6998__auto__ = e21273;
var statearr_21274_21292 = state_21246;
(statearr_21274_21292[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21293 = state_21246;
state_21246 = G__21293;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21246){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_21275 = f__7051__auto__.call(null);
(statearr_21275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21276);

return statearr_21275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21276,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___21401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21401,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21401,out){
return (function (state_21377){
var state_val_21378 = (state_21377[(1)]);
if((state_val_21378 === (7))){
var inst_21356 = (state_21377[(7)]);
var inst_21357 = (state_21377[(8)]);
var inst_21356__$1 = (state_21377[(2)]);
var inst_21357__$1 = cljs.core.nth.call(null,inst_21356__$1,(0),null);
var inst_21358 = cljs.core.nth.call(null,inst_21356__$1,(1),null);
var inst_21359 = (inst_21357__$1 == null);
var state_21377__$1 = (function (){var statearr_21379 = state_21377;
(statearr_21379[(7)] = inst_21356__$1);

(statearr_21379[(8)] = inst_21357__$1);

(statearr_21379[(9)] = inst_21358);

return statearr_21379;
})();
if(cljs.core.truth_(inst_21359)){
var statearr_21380_21402 = state_21377__$1;
(statearr_21380_21402[(1)] = (8));

} else {
var statearr_21381_21403 = state_21377__$1;
(statearr_21381_21403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (1))){
var inst_21348 = cljs.core.vec.call(null,chs);
var inst_21349 = inst_21348;
var state_21377__$1 = (function (){var statearr_21382 = state_21377;
(statearr_21382[(10)] = inst_21349);

return statearr_21382;
})();
var statearr_21383_21404 = state_21377__$1;
(statearr_21383_21404[(2)] = null);

(statearr_21383_21404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (4))){
var inst_21349 = (state_21377[(10)]);
var state_21377__$1 = state_21377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21377__$1,(7),inst_21349);
} else {
if((state_val_21378 === (6))){
var inst_21373 = (state_21377[(2)]);
var state_21377__$1 = state_21377;
var statearr_21384_21405 = state_21377__$1;
(statearr_21384_21405[(2)] = inst_21373);

(statearr_21384_21405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (3))){
var inst_21375 = (state_21377[(2)]);
var state_21377__$1 = state_21377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21377__$1,inst_21375);
} else {
if((state_val_21378 === (2))){
var inst_21349 = (state_21377[(10)]);
var inst_21351 = cljs.core.count.call(null,inst_21349);
var inst_21352 = (inst_21351 > (0));
var state_21377__$1 = state_21377;
if(cljs.core.truth_(inst_21352)){
var statearr_21386_21406 = state_21377__$1;
(statearr_21386_21406[(1)] = (4));

} else {
var statearr_21387_21407 = state_21377__$1;
(statearr_21387_21407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (11))){
var inst_21349 = (state_21377[(10)]);
var inst_21366 = (state_21377[(2)]);
var tmp21385 = inst_21349;
var inst_21349__$1 = tmp21385;
var state_21377__$1 = (function (){var statearr_21388 = state_21377;
(statearr_21388[(11)] = inst_21366);

(statearr_21388[(10)] = inst_21349__$1);

return statearr_21388;
})();
var statearr_21389_21408 = state_21377__$1;
(statearr_21389_21408[(2)] = null);

(statearr_21389_21408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (9))){
var inst_21357 = (state_21377[(8)]);
var state_21377__$1 = state_21377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21377__$1,(11),out,inst_21357);
} else {
if((state_val_21378 === (5))){
var inst_21371 = cljs.core.async.close_BANG_.call(null,out);
var state_21377__$1 = state_21377;
var statearr_21390_21409 = state_21377__$1;
(statearr_21390_21409[(2)] = inst_21371);

(statearr_21390_21409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (10))){
var inst_21369 = (state_21377[(2)]);
var state_21377__$1 = state_21377;
var statearr_21391_21410 = state_21377__$1;
(statearr_21391_21410[(2)] = inst_21369);

(statearr_21391_21410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21378 === (8))){
var inst_21349 = (state_21377[(10)]);
var inst_21356 = (state_21377[(7)]);
var inst_21357 = (state_21377[(8)]);
var inst_21358 = (state_21377[(9)]);
var inst_21361 = (function (){var c = inst_21358;
var v = inst_21357;
var vec__21354 = inst_21356;
var cs = inst_21349;
return ((function (c,v,vec__21354,cs,inst_21349,inst_21356,inst_21357,inst_21358,state_val_21378,c__7050__auto___21401,out){
return (function (p1__21294_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21294_SHARP_);
});
;})(c,v,vec__21354,cs,inst_21349,inst_21356,inst_21357,inst_21358,state_val_21378,c__7050__auto___21401,out))
})();
var inst_21362 = cljs.core.filterv.call(null,inst_21361,inst_21349);
var inst_21349__$1 = inst_21362;
var state_21377__$1 = (function (){var statearr_21392 = state_21377;
(statearr_21392[(10)] = inst_21349__$1);

return statearr_21392;
})();
var statearr_21393_21411 = state_21377__$1;
(statearr_21393_21411[(2)] = null);

(statearr_21393_21411[(1)] = (2));


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
});})(c__7050__auto___21401,out))
;
return ((function (switch__6994__auto__,c__7050__auto___21401,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21397[(0)] = state_machine__6995__auto__);

(statearr_21397[(1)] = (1));

return statearr_21397;
});
var state_machine__6995__auto____1 = (function (state_21377){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21398){if((e21398 instanceof Object)){
var ex__6998__auto__ = e21398;
var statearr_21399_21412 = state_21377;
(statearr_21399_21412[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21413 = state_21377;
state_21377 = G__21413;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21377){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21401,out))
})();
var state__7052__auto__ = (function (){var statearr_21400 = f__7051__auto__.call(null);
(statearr_21400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21401);

return statearr_21400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21401,out))
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
var c__7050__auto___21506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21506,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21506,out){
return (function (state_21483){
var state_val_21484 = (state_21483[(1)]);
if((state_val_21484 === (7))){
var inst_21465 = (state_21483[(7)]);
var inst_21465__$1 = (state_21483[(2)]);
var inst_21466 = (inst_21465__$1 == null);
var inst_21467 = cljs.core.not.call(null,inst_21466);
var state_21483__$1 = (function (){var statearr_21485 = state_21483;
(statearr_21485[(7)] = inst_21465__$1);

return statearr_21485;
})();
if(inst_21467){
var statearr_21486_21507 = state_21483__$1;
(statearr_21486_21507[(1)] = (8));

} else {
var statearr_21487_21508 = state_21483__$1;
(statearr_21487_21508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (1))){
var inst_21460 = (0);
var state_21483__$1 = (function (){var statearr_21488 = state_21483;
(statearr_21488[(8)] = inst_21460);

return statearr_21488;
})();
var statearr_21489_21509 = state_21483__$1;
(statearr_21489_21509[(2)] = null);

(statearr_21489_21509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (4))){
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21483__$1,(7),ch);
} else {
if((state_val_21484 === (6))){
var inst_21478 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
var statearr_21490_21510 = state_21483__$1;
(statearr_21490_21510[(2)] = inst_21478);

(statearr_21490_21510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (3))){
var inst_21480 = (state_21483[(2)]);
var inst_21481 = cljs.core.async.close_BANG_.call(null,out);
var state_21483__$1 = (function (){var statearr_21491 = state_21483;
(statearr_21491[(9)] = inst_21480);

return statearr_21491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21483__$1,inst_21481);
} else {
if((state_val_21484 === (2))){
var inst_21460 = (state_21483[(8)]);
var inst_21462 = (inst_21460 < n);
var state_21483__$1 = state_21483;
if(cljs.core.truth_(inst_21462)){
var statearr_21492_21511 = state_21483__$1;
(statearr_21492_21511[(1)] = (4));

} else {
var statearr_21493_21512 = state_21483__$1;
(statearr_21493_21512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (11))){
var inst_21460 = (state_21483[(8)]);
var inst_21470 = (state_21483[(2)]);
var inst_21471 = (inst_21460 + (1));
var inst_21460__$1 = inst_21471;
var state_21483__$1 = (function (){var statearr_21494 = state_21483;
(statearr_21494[(8)] = inst_21460__$1);

(statearr_21494[(10)] = inst_21470);

return statearr_21494;
})();
var statearr_21495_21513 = state_21483__$1;
(statearr_21495_21513[(2)] = null);

(statearr_21495_21513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (9))){
var state_21483__$1 = state_21483;
var statearr_21496_21514 = state_21483__$1;
(statearr_21496_21514[(2)] = null);

(statearr_21496_21514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (5))){
var state_21483__$1 = state_21483;
var statearr_21497_21515 = state_21483__$1;
(statearr_21497_21515[(2)] = null);

(statearr_21497_21515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (10))){
var inst_21475 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
var statearr_21498_21516 = state_21483__$1;
(statearr_21498_21516[(2)] = inst_21475);

(statearr_21498_21516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (8))){
var inst_21465 = (state_21483[(7)]);
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21483__$1,(11),out,inst_21465);
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
});})(c__7050__auto___21506,out))
;
return ((function (switch__6994__auto__,c__7050__auto___21506,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21502[(0)] = state_machine__6995__auto__);

(statearr_21502[(1)] = (1));

return statearr_21502;
});
var state_machine__6995__auto____1 = (function (state_21483){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21503){if((e21503 instanceof Object)){
var ex__6998__auto__ = e21503;
var statearr_21504_21517 = state_21483;
(statearr_21504_21517[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21518 = state_21483;
state_21483 = G__21518;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21483){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21506,out))
})();
var state__7052__auto__ = (function (){var statearr_21505 = f__7051__auto__.call(null);
(statearr_21505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21506);

return statearr_21505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21506,out))
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
if(typeof cljs.core.async.t21526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21526 = (function (ch,f,map_LT_,meta21527){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21527 = meta21527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21529 = (function (fn1,_,meta21527,map_LT_,f,ch,meta21530){
this.fn1 = fn1;
this._ = _;
this.meta21527 = meta21527;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21530 = meta21530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21519_SHARP_){
return f1.call(null,(((p1__21519_SHARP_ == null))?null:self__.f.call(null,p1__21519_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21531){
var self__ = this;
var _21531__$1 = this;
return self__.meta21530;
});})(___$1))
;

cljs.core.async.t21529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21531,meta21530__$1){
var self__ = this;
var _21531__$1 = this;
return (new cljs.core.async.t21529(self__.fn1,self__._,self__.meta21527,self__.map_LT_,self__.f,self__.ch,meta21530__$1));
});})(___$1))
;

cljs.core.async.t21529.cljs$lang$type = true;

cljs.core.async.t21529.cljs$lang$ctorStr = "cljs.core.async/t21529";

cljs.core.async.t21529.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21529");
});})(___$1))
;

cljs.core.async.__GT_t21529 = ((function (___$1){
return (function __GT_t21529(fn1__$1,___$2,meta21527__$1,map_LT___$1,f__$1,ch__$1,meta21530){
return (new cljs.core.async.t21529(fn1__$1,___$2,meta21527__$1,map_LT___$1,f__$1,ch__$1,meta21530));
});})(___$1))
;

}

return (new cljs.core.async.t21529(fn1,___$1,self__.meta21527,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21528){
var self__ = this;
var _21528__$1 = this;
return self__.meta21527;
});

cljs.core.async.t21526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21528,meta21527__$1){
var self__ = this;
var _21528__$1 = this;
return (new cljs.core.async.t21526(self__.ch,self__.f,self__.map_LT_,meta21527__$1));
});

cljs.core.async.t21526.cljs$lang$type = true;

cljs.core.async.t21526.cljs$lang$ctorStr = "cljs.core.async/t21526";

cljs.core.async.t21526.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21526");
});

cljs.core.async.__GT_t21526 = (function __GT_t21526(ch__$1,f__$1,map_LT___$1,meta21527){
return (new cljs.core.async.t21526(ch__$1,f__$1,map_LT___$1,meta21527));
});

}

return (new cljs.core.async.t21526(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21535 = (function (ch,f,map_GT_,meta21536){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21536 = meta21536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21537){
var self__ = this;
var _21537__$1 = this;
return self__.meta21536;
});

cljs.core.async.t21535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21537,meta21536__$1){
var self__ = this;
var _21537__$1 = this;
return (new cljs.core.async.t21535(self__.ch,self__.f,self__.map_GT_,meta21536__$1));
});

cljs.core.async.t21535.cljs$lang$type = true;

cljs.core.async.t21535.cljs$lang$ctorStr = "cljs.core.async/t21535";

cljs.core.async.t21535.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21535");
});

cljs.core.async.__GT_t21535 = (function __GT_t21535(ch__$1,f__$1,map_GT___$1,meta21536){
return (new cljs.core.async.t21535(ch__$1,f__$1,map_GT___$1,meta21536));
});

}

return (new cljs.core.async.t21535(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21541 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21541 = (function (ch,p,filter_GT_,meta21542){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21542 = meta21542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21543){
var self__ = this;
var _21543__$1 = this;
return self__.meta21542;
});

cljs.core.async.t21541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21543,meta21542__$1){
var self__ = this;
var _21543__$1 = this;
return (new cljs.core.async.t21541(self__.ch,self__.p,self__.filter_GT_,meta21542__$1));
});

cljs.core.async.t21541.cljs$lang$type = true;

cljs.core.async.t21541.cljs$lang$ctorStr = "cljs.core.async/t21541";

cljs.core.async.t21541.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t21541");
});

cljs.core.async.__GT_t21541 = (function __GT_t21541(ch__$1,p__$1,filter_GT___$1,meta21542){
return (new cljs.core.async.t21541(ch__$1,p__$1,filter_GT___$1,meta21542));
});

}

return (new cljs.core.async.t21541(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/xform/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___21626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21626,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21626,out){
return (function (state_21605){
var state_val_21606 = (state_21605[(1)]);
if((state_val_21606 === (7))){
var inst_21601 = (state_21605[(2)]);
var state_21605__$1 = state_21605;
var statearr_21607_21627 = state_21605__$1;
(statearr_21607_21627[(2)] = inst_21601);

(statearr_21607_21627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (1))){
var state_21605__$1 = state_21605;
var statearr_21608_21628 = state_21605__$1;
(statearr_21608_21628[(2)] = null);

(statearr_21608_21628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (4))){
var inst_21587 = (state_21605[(7)]);
var inst_21587__$1 = (state_21605[(2)]);
var inst_21588 = (inst_21587__$1 == null);
var state_21605__$1 = (function (){var statearr_21609 = state_21605;
(statearr_21609[(7)] = inst_21587__$1);

return statearr_21609;
})();
if(cljs.core.truth_(inst_21588)){
var statearr_21610_21629 = state_21605__$1;
(statearr_21610_21629[(1)] = (5));

} else {
var statearr_21611_21630 = state_21605__$1;
(statearr_21611_21630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (6))){
var inst_21587 = (state_21605[(7)]);
var inst_21592 = p.call(null,inst_21587);
var state_21605__$1 = state_21605;
if(cljs.core.truth_(inst_21592)){
var statearr_21612_21631 = state_21605__$1;
(statearr_21612_21631[(1)] = (8));

} else {
var statearr_21613_21632 = state_21605__$1;
(statearr_21613_21632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (3))){
var inst_21603 = (state_21605[(2)]);
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21605__$1,inst_21603);
} else {
if((state_val_21606 === (2))){
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21605__$1,(4),ch);
} else {
if((state_val_21606 === (11))){
var inst_21595 = (state_21605[(2)]);
var state_21605__$1 = state_21605;
var statearr_21614_21633 = state_21605__$1;
(statearr_21614_21633[(2)] = inst_21595);

(statearr_21614_21633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (9))){
var state_21605__$1 = state_21605;
var statearr_21615_21634 = state_21605__$1;
(statearr_21615_21634[(2)] = null);

(statearr_21615_21634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (5))){
var inst_21590 = cljs.core.async.close_BANG_.call(null,out);
var state_21605__$1 = state_21605;
var statearr_21616_21635 = state_21605__$1;
(statearr_21616_21635[(2)] = inst_21590);

(statearr_21616_21635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (10))){
var inst_21598 = (state_21605[(2)]);
var state_21605__$1 = (function (){var statearr_21617 = state_21605;
(statearr_21617[(8)] = inst_21598);

return statearr_21617;
})();
var statearr_21618_21636 = state_21605__$1;
(statearr_21618_21636[(2)] = null);

(statearr_21618_21636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (8))){
var inst_21587 = (state_21605[(7)]);
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21605__$1,(11),out,inst_21587);
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
});})(c__7050__auto___21626,out))
;
return ((function (switch__6994__auto__,c__7050__auto___21626,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21622 = [null,null,null,null,null,null,null,null,null];
(statearr_21622[(0)] = state_machine__6995__auto__);

(statearr_21622[(1)] = (1));

return statearr_21622;
});
var state_machine__6995__auto____1 = (function (state_21605){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21623){if((e21623 instanceof Object)){
var ex__6998__auto__ = e21623;
var statearr_21624_21637 = state_21605;
(statearr_21624_21637[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21638 = state_21605;
state_21605 = G__21638;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21605){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21626,out))
})();
var state__7052__auto__ = (function (){var statearr_21625 = f__7051__auto__.call(null);
(statearr_21625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21626);

return statearr_21625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21626,out))
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
return (function (state_21804){
var state_val_21805 = (state_21804[(1)]);
if((state_val_21805 === (7))){
var inst_21800 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21806_21847 = state_21804__$1;
(statearr_21806_21847[(2)] = inst_21800);

(statearr_21806_21847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (20))){
var inst_21770 = (state_21804[(7)]);
var inst_21781 = (state_21804[(2)]);
var inst_21782 = cljs.core.next.call(null,inst_21770);
var inst_21756 = inst_21782;
var inst_21757 = null;
var inst_21758 = (0);
var inst_21759 = (0);
var state_21804__$1 = (function (){var statearr_21807 = state_21804;
(statearr_21807[(8)] = inst_21757);

(statearr_21807[(9)] = inst_21759);

(statearr_21807[(10)] = inst_21756);

(statearr_21807[(11)] = inst_21758);

(statearr_21807[(12)] = inst_21781);

return statearr_21807;
})();
var statearr_21808_21848 = state_21804__$1;
(statearr_21808_21848[(2)] = null);

(statearr_21808_21848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (1))){
var state_21804__$1 = state_21804;
var statearr_21809_21849 = state_21804__$1;
(statearr_21809_21849[(2)] = null);

(statearr_21809_21849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (4))){
var inst_21745 = (state_21804[(13)]);
var inst_21745__$1 = (state_21804[(2)]);
var inst_21746 = (inst_21745__$1 == null);
var state_21804__$1 = (function (){var statearr_21810 = state_21804;
(statearr_21810[(13)] = inst_21745__$1);

return statearr_21810;
})();
if(cljs.core.truth_(inst_21746)){
var statearr_21811_21850 = state_21804__$1;
(statearr_21811_21850[(1)] = (5));

} else {
var statearr_21812_21851 = state_21804__$1;
(statearr_21812_21851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (15))){
var state_21804__$1 = state_21804;
var statearr_21816_21852 = state_21804__$1;
(statearr_21816_21852[(2)] = null);

(statearr_21816_21852[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (21))){
var state_21804__$1 = state_21804;
var statearr_21817_21853 = state_21804__$1;
(statearr_21817_21853[(2)] = null);

(statearr_21817_21853[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (13))){
var inst_21757 = (state_21804[(8)]);
var inst_21759 = (state_21804[(9)]);
var inst_21756 = (state_21804[(10)]);
var inst_21758 = (state_21804[(11)]);
var inst_21766 = (state_21804[(2)]);
var inst_21767 = (inst_21759 + (1));
var tmp21813 = inst_21757;
var tmp21814 = inst_21756;
var tmp21815 = inst_21758;
var inst_21756__$1 = tmp21814;
var inst_21757__$1 = tmp21813;
var inst_21758__$1 = tmp21815;
var inst_21759__$1 = inst_21767;
var state_21804__$1 = (function (){var statearr_21818 = state_21804;
(statearr_21818[(8)] = inst_21757__$1);

(statearr_21818[(9)] = inst_21759__$1);

(statearr_21818[(10)] = inst_21756__$1);

(statearr_21818[(11)] = inst_21758__$1);

(statearr_21818[(14)] = inst_21766);

return statearr_21818;
})();
var statearr_21819_21854 = state_21804__$1;
(statearr_21819_21854[(2)] = null);

(statearr_21819_21854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (22))){
var state_21804__$1 = state_21804;
var statearr_21820_21855 = state_21804__$1;
(statearr_21820_21855[(2)] = null);

(statearr_21820_21855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (6))){
var inst_21745 = (state_21804[(13)]);
var inst_21754 = f.call(null,inst_21745);
var inst_21755 = cljs.core.seq.call(null,inst_21754);
var inst_21756 = inst_21755;
var inst_21757 = null;
var inst_21758 = (0);
var inst_21759 = (0);
var state_21804__$1 = (function (){var statearr_21821 = state_21804;
(statearr_21821[(8)] = inst_21757);

(statearr_21821[(9)] = inst_21759);

(statearr_21821[(10)] = inst_21756);

(statearr_21821[(11)] = inst_21758);

return statearr_21821;
})();
var statearr_21822_21856 = state_21804__$1;
(statearr_21822_21856[(2)] = null);

(statearr_21822_21856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (17))){
var inst_21770 = (state_21804[(7)]);
var inst_21774 = cljs.core.chunk_first.call(null,inst_21770);
var inst_21775 = cljs.core.chunk_rest.call(null,inst_21770);
var inst_21776 = cljs.core.count.call(null,inst_21774);
var inst_21756 = inst_21775;
var inst_21757 = inst_21774;
var inst_21758 = inst_21776;
var inst_21759 = (0);
var state_21804__$1 = (function (){var statearr_21823 = state_21804;
(statearr_21823[(8)] = inst_21757);

(statearr_21823[(9)] = inst_21759);

(statearr_21823[(10)] = inst_21756);

(statearr_21823[(11)] = inst_21758);

return statearr_21823;
})();
var statearr_21824_21857 = state_21804__$1;
(statearr_21824_21857[(2)] = null);

(statearr_21824_21857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (3))){
var inst_21802 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21804__$1,inst_21802);
} else {
if((state_val_21805 === (12))){
var inst_21790 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21825_21858 = state_21804__$1;
(statearr_21825_21858[(2)] = inst_21790);

(statearr_21825_21858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (2))){
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21804__$1,(4),in$);
} else {
if((state_val_21805 === (23))){
var inst_21798 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21826_21859 = state_21804__$1;
(statearr_21826_21859[(2)] = inst_21798);

(statearr_21826_21859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (19))){
var inst_21785 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21827_21860 = state_21804__$1;
(statearr_21827_21860[(2)] = inst_21785);

(statearr_21827_21860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (11))){
var inst_21756 = (state_21804[(10)]);
var inst_21770 = (state_21804[(7)]);
var inst_21770__$1 = cljs.core.seq.call(null,inst_21756);
var state_21804__$1 = (function (){var statearr_21828 = state_21804;
(statearr_21828[(7)] = inst_21770__$1);

return statearr_21828;
})();
if(inst_21770__$1){
var statearr_21829_21861 = state_21804__$1;
(statearr_21829_21861[(1)] = (14));

} else {
var statearr_21830_21862 = state_21804__$1;
(statearr_21830_21862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (9))){
var inst_21792 = (state_21804[(2)]);
var inst_21793 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21804__$1 = (function (){var statearr_21831 = state_21804;
(statearr_21831[(15)] = inst_21792);

return statearr_21831;
})();
if(cljs.core.truth_(inst_21793)){
var statearr_21832_21863 = state_21804__$1;
(statearr_21832_21863[(1)] = (21));

} else {
var statearr_21833_21864 = state_21804__$1;
(statearr_21833_21864[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (5))){
var inst_21748 = cljs.core.async.close_BANG_.call(null,out);
var state_21804__$1 = state_21804;
var statearr_21834_21865 = state_21804__$1;
(statearr_21834_21865[(2)] = inst_21748);

(statearr_21834_21865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (14))){
var inst_21770 = (state_21804[(7)]);
var inst_21772 = cljs.core.chunked_seq_QMARK_.call(null,inst_21770);
var state_21804__$1 = state_21804;
if(inst_21772){
var statearr_21835_21866 = state_21804__$1;
(statearr_21835_21866[(1)] = (17));

} else {
var statearr_21836_21867 = state_21804__$1;
(statearr_21836_21867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (16))){
var inst_21788 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21837_21868 = state_21804__$1;
(statearr_21837_21868[(2)] = inst_21788);

(statearr_21837_21868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (10))){
var inst_21757 = (state_21804[(8)]);
var inst_21759 = (state_21804[(9)]);
var inst_21764 = cljs.core._nth.call(null,inst_21757,inst_21759);
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21804__$1,(13),out,inst_21764);
} else {
if((state_val_21805 === (18))){
var inst_21770 = (state_21804[(7)]);
var inst_21779 = cljs.core.first.call(null,inst_21770);
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21804__$1,(20),out,inst_21779);
} else {
if((state_val_21805 === (8))){
var inst_21759 = (state_21804[(9)]);
var inst_21758 = (state_21804[(11)]);
var inst_21761 = (inst_21759 < inst_21758);
var inst_21762 = inst_21761;
var state_21804__$1 = state_21804;
if(cljs.core.truth_(inst_21762)){
var statearr_21838_21869 = state_21804__$1;
(statearr_21838_21869[(1)] = (10));

} else {
var statearr_21839_21870 = state_21804__$1;
(statearr_21839_21870[(1)] = (11));

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
var statearr_21843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21843[(0)] = state_machine__6995__auto__);

(statearr_21843[(1)] = (1));

return statearr_21843;
});
var state_machine__6995__auto____1 = (function (state_21804){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21844){if((e21844 instanceof Object)){
var ex__6998__auto__ = e21844;
var statearr_21845_21871 = state_21804;
(statearr_21845_21871[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21872 = state_21804;
state_21804 = G__21872;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21804){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_21846 = f__7051__auto__.call(null);
(statearr_21846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_21846;
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
var c__7050__auto___21969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___21969,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___21969,out){
return (function (state_21944){
var state_val_21945 = (state_21944[(1)]);
if((state_val_21945 === (7))){
var inst_21939 = (state_21944[(2)]);
var state_21944__$1 = state_21944;
var statearr_21946_21970 = state_21944__$1;
(statearr_21946_21970[(2)] = inst_21939);

(statearr_21946_21970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (1))){
var inst_21921 = null;
var state_21944__$1 = (function (){var statearr_21947 = state_21944;
(statearr_21947[(7)] = inst_21921);

return statearr_21947;
})();
var statearr_21948_21971 = state_21944__$1;
(statearr_21948_21971[(2)] = null);

(statearr_21948_21971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (4))){
var inst_21924 = (state_21944[(8)]);
var inst_21924__$1 = (state_21944[(2)]);
var inst_21925 = (inst_21924__$1 == null);
var inst_21926 = cljs.core.not.call(null,inst_21925);
var state_21944__$1 = (function (){var statearr_21949 = state_21944;
(statearr_21949[(8)] = inst_21924__$1);

return statearr_21949;
})();
if(inst_21926){
var statearr_21950_21972 = state_21944__$1;
(statearr_21950_21972[(1)] = (5));

} else {
var statearr_21951_21973 = state_21944__$1;
(statearr_21951_21973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (6))){
var state_21944__$1 = state_21944;
var statearr_21952_21974 = state_21944__$1;
(statearr_21952_21974[(2)] = null);

(statearr_21952_21974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (3))){
var inst_21941 = (state_21944[(2)]);
var inst_21942 = cljs.core.async.close_BANG_.call(null,out);
var state_21944__$1 = (function (){var statearr_21953 = state_21944;
(statearr_21953[(9)] = inst_21941);

return statearr_21953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21944__$1,inst_21942);
} else {
if((state_val_21945 === (2))){
var state_21944__$1 = state_21944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21944__$1,(4),ch);
} else {
if((state_val_21945 === (11))){
var inst_21924 = (state_21944[(8)]);
var inst_21933 = (state_21944[(2)]);
var inst_21921 = inst_21924;
var state_21944__$1 = (function (){var statearr_21954 = state_21944;
(statearr_21954[(7)] = inst_21921);

(statearr_21954[(10)] = inst_21933);

return statearr_21954;
})();
var statearr_21955_21975 = state_21944__$1;
(statearr_21955_21975[(2)] = null);

(statearr_21955_21975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (9))){
var inst_21924 = (state_21944[(8)]);
var state_21944__$1 = state_21944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21944__$1,(11),out,inst_21924);
} else {
if((state_val_21945 === (5))){
var inst_21924 = (state_21944[(8)]);
var inst_21921 = (state_21944[(7)]);
var inst_21928 = cljs.core._EQ_.call(null,inst_21924,inst_21921);
var state_21944__$1 = state_21944;
if(inst_21928){
var statearr_21957_21976 = state_21944__$1;
(statearr_21957_21976[(1)] = (8));

} else {
var statearr_21958_21977 = state_21944__$1;
(statearr_21958_21977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (10))){
var inst_21936 = (state_21944[(2)]);
var state_21944__$1 = state_21944;
var statearr_21959_21978 = state_21944__$1;
(statearr_21959_21978[(2)] = inst_21936);

(statearr_21959_21978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21945 === (8))){
var inst_21921 = (state_21944[(7)]);
var tmp21956 = inst_21921;
var inst_21921__$1 = tmp21956;
var state_21944__$1 = (function (){var statearr_21960 = state_21944;
(statearr_21960[(7)] = inst_21921__$1);

return statearr_21960;
})();
var statearr_21961_21979 = state_21944__$1;
(statearr_21961_21979[(2)] = null);

(statearr_21961_21979[(1)] = (2));


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
});})(c__7050__auto___21969,out))
;
return ((function (switch__6994__auto__,c__7050__auto___21969,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_21965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21965[(0)] = state_machine__6995__auto__);

(statearr_21965[(1)] = (1));

return statearr_21965;
});
var state_machine__6995__auto____1 = (function (state_21944){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_21944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e21966){if((e21966 instanceof Object)){
var ex__6998__auto__ = e21966;
var statearr_21967_21980 = state_21944;
(statearr_21967_21980[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21981 = state_21944;
state_21944 = G__21981;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_21944){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_21944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___21969,out))
})();
var state__7052__auto__ = (function (){var statearr_21968 = f__7051__auto__.call(null);
(statearr_21968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___21969);

return statearr_21968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___21969,out))
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
var c__7050__auto___22116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___22116,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___22116,out){
return (function (state_22086){
var state_val_22087 = (state_22086[(1)]);
if((state_val_22087 === (7))){
var inst_22082 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22088_22117 = state_22086__$1;
(statearr_22088_22117[(2)] = inst_22082);

(statearr_22088_22117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (1))){
var inst_22049 = (new Array(n));
var inst_22050 = inst_22049;
var inst_22051 = (0);
var state_22086__$1 = (function (){var statearr_22089 = state_22086;
(statearr_22089[(7)] = inst_22050);

(statearr_22089[(8)] = inst_22051);

return statearr_22089;
})();
var statearr_22090_22118 = state_22086__$1;
(statearr_22090_22118[(2)] = null);

(statearr_22090_22118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (4))){
var inst_22054 = (state_22086[(9)]);
var inst_22054__$1 = (state_22086[(2)]);
var inst_22055 = (inst_22054__$1 == null);
var inst_22056 = cljs.core.not.call(null,inst_22055);
var state_22086__$1 = (function (){var statearr_22091 = state_22086;
(statearr_22091[(9)] = inst_22054__$1);

return statearr_22091;
})();
if(inst_22056){
var statearr_22092_22119 = state_22086__$1;
(statearr_22092_22119[(1)] = (5));

} else {
var statearr_22093_22120 = state_22086__$1;
(statearr_22093_22120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (15))){
var inst_22076 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22094_22121 = state_22086__$1;
(statearr_22094_22121[(2)] = inst_22076);

(statearr_22094_22121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (13))){
var state_22086__$1 = state_22086;
var statearr_22095_22122 = state_22086__$1;
(statearr_22095_22122[(2)] = null);

(statearr_22095_22122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (6))){
var inst_22051 = (state_22086[(8)]);
var inst_22072 = (inst_22051 > (0));
var state_22086__$1 = state_22086;
if(cljs.core.truth_(inst_22072)){
var statearr_22096_22123 = state_22086__$1;
(statearr_22096_22123[(1)] = (12));

} else {
var statearr_22097_22124 = state_22086__$1;
(statearr_22097_22124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (3))){
var inst_22084 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22086__$1,inst_22084);
} else {
if((state_val_22087 === (12))){
var inst_22050 = (state_22086[(7)]);
var inst_22074 = cljs.core.vec.call(null,inst_22050);
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22086__$1,(15),out,inst_22074);
} else {
if((state_val_22087 === (2))){
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22086__$1,(4),ch);
} else {
if((state_val_22087 === (11))){
var inst_22066 = (state_22086[(2)]);
var inst_22067 = (new Array(n));
var inst_22050 = inst_22067;
var inst_22051 = (0);
var state_22086__$1 = (function (){var statearr_22098 = state_22086;
(statearr_22098[(10)] = inst_22066);

(statearr_22098[(7)] = inst_22050);

(statearr_22098[(8)] = inst_22051);

return statearr_22098;
})();
var statearr_22099_22125 = state_22086__$1;
(statearr_22099_22125[(2)] = null);

(statearr_22099_22125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (9))){
var inst_22050 = (state_22086[(7)]);
var inst_22064 = cljs.core.vec.call(null,inst_22050);
var state_22086__$1 = state_22086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22086__$1,(11),out,inst_22064);
} else {
if((state_val_22087 === (5))){
var inst_22050 = (state_22086[(7)]);
var inst_22051 = (state_22086[(8)]);
var inst_22054 = (state_22086[(9)]);
var inst_22059 = (state_22086[(11)]);
var inst_22058 = (inst_22050[inst_22051] = inst_22054);
var inst_22059__$1 = (inst_22051 + (1));
var inst_22060 = (inst_22059__$1 < n);
var state_22086__$1 = (function (){var statearr_22100 = state_22086;
(statearr_22100[(12)] = inst_22058);

(statearr_22100[(11)] = inst_22059__$1);

return statearr_22100;
})();
if(cljs.core.truth_(inst_22060)){
var statearr_22101_22126 = state_22086__$1;
(statearr_22101_22126[(1)] = (8));

} else {
var statearr_22102_22127 = state_22086__$1;
(statearr_22102_22127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (14))){
var inst_22079 = (state_22086[(2)]);
var inst_22080 = cljs.core.async.close_BANG_.call(null,out);
var state_22086__$1 = (function (){var statearr_22104 = state_22086;
(statearr_22104[(13)] = inst_22079);

return statearr_22104;
})();
var statearr_22105_22128 = state_22086__$1;
(statearr_22105_22128[(2)] = inst_22080);

(statearr_22105_22128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (10))){
var inst_22070 = (state_22086[(2)]);
var state_22086__$1 = state_22086;
var statearr_22106_22129 = state_22086__$1;
(statearr_22106_22129[(2)] = inst_22070);

(statearr_22106_22129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (8))){
var inst_22050 = (state_22086[(7)]);
var inst_22059 = (state_22086[(11)]);
var tmp22103 = inst_22050;
var inst_22050__$1 = tmp22103;
var inst_22051 = inst_22059;
var state_22086__$1 = (function (){var statearr_22107 = state_22086;
(statearr_22107[(7)] = inst_22050__$1);

(statearr_22107[(8)] = inst_22051);

return statearr_22107;
})();
var statearr_22108_22130 = state_22086__$1;
(statearr_22108_22130[(2)] = null);

(statearr_22108_22130[(1)] = (2));


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
});})(c__7050__auto___22116,out))
;
return ((function (switch__6994__auto__,c__7050__auto___22116,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_22112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22112[(0)] = state_machine__6995__auto__);

(statearr_22112[(1)] = (1));

return statearr_22112;
});
var state_machine__6995__auto____1 = (function (state_22086){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_22086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e22113){if((e22113 instanceof Object)){
var ex__6998__auto__ = e22113;
var statearr_22114_22131 = state_22086;
(statearr_22114_22131[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22132 = state_22086;
state_22086 = G__22132;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_22086){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_22086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___22116,out))
})();
var state__7052__auto__ = (function (){var statearr_22115 = f__7051__auto__.call(null);
(statearr_22115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___22116);

return statearr_22115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___22116,out))
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
var c__7050__auto___22275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___22275,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___22275,out){
return (function (state_22245){
var state_val_22246 = (state_22245[(1)]);
if((state_val_22246 === (7))){
var inst_22241 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22247_22276 = state_22245__$1;
(statearr_22247_22276[(2)] = inst_22241);

(statearr_22247_22276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (1))){
var inst_22204 = [];
var inst_22205 = inst_22204;
var inst_22206 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22245__$1 = (function (){var statearr_22248 = state_22245;
(statearr_22248[(7)] = inst_22206);

(statearr_22248[(8)] = inst_22205);

return statearr_22248;
})();
var statearr_22249_22277 = state_22245__$1;
(statearr_22249_22277[(2)] = null);

(statearr_22249_22277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (4))){
var inst_22209 = (state_22245[(9)]);
var inst_22209__$1 = (state_22245[(2)]);
var inst_22210 = (inst_22209__$1 == null);
var inst_22211 = cljs.core.not.call(null,inst_22210);
var state_22245__$1 = (function (){var statearr_22250 = state_22245;
(statearr_22250[(9)] = inst_22209__$1);

return statearr_22250;
})();
if(inst_22211){
var statearr_22251_22278 = state_22245__$1;
(statearr_22251_22278[(1)] = (5));

} else {
var statearr_22252_22279 = state_22245__$1;
(statearr_22252_22279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (15))){
var inst_22235 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22253_22280 = state_22245__$1;
(statearr_22253_22280[(2)] = inst_22235);

(statearr_22253_22280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (13))){
var state_22245__$1 = state_22245;
var statearr_22254_22281 = state_22245__$1;
(statearr_22254_22281[(2)] = null);

(statearr_22254_22281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (6))){
var inst_22205 = (state_22245[(8)]);
var inst_22230 = inst_22205.length;
var inst_22231 = (inst_22230 > (0));
var state_22245__$1 = state_22245;
if(cljs.core.truth_(inst_22231)){
var statearr_22255_22282 = state_22245__$1;
(statearr_22255_22282[(1)] = (12));

} else {
var statearr_22256_22283 = state_22245__$1;
(statearr_22256_22283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (3))){
var inst_22243 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22245__$1,inst_22243);
} else {
if((state_val_22246 === (12))){
var inst_22205 = (state_22245[(8)]);
var inst_22233 = cljs.core.vec.call(null,inst_22205);
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22245__$1,(15),out,inst_22233);
} else {
if((state_val_22246 === (2))){
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22245__$1,(4),ch);
} else {
if((state_val_22246 === (11))){
var inst_22209 = (state_22245[(9)]);
var inst_22213 = (state_22245[(10)]);
var inst_22223 = (state_22245[(2)]);
var inst_22224 = [];
var inst_22225 = inst_22224.push(inst_22209);
var inst_22205 = inst_22224;
var inst_22206 = inst_22213;
var state_22245__$1 = (function (){var statearr_22257 = state_22245;
(statearr_22257[(7)] = inst_22206);

(statearr_22257[(8)] = inst_22205);

(statearr_22257[(11)] = inst_22225);

(statearr_22257[(12)] = inst_22223);

return statearr_22257;
})();
var statearr_22258_22284 = state_22245__$1;
(statearr_22258_22284[(2)] = null);

(statearr_22258_22284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (9))){
var inst_22205 = (state_22245[(8)]);
var inst_22221 = cljs.core.vec.call(null,inst_22205);
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22245__$1,(11),out,inst_22221);
} else {
if((state_val_22246 === (5))){
var inst_22206 = (state_22245[(7)]);
var inst_22209 = (state_22245[(9)]);
var inst_22213 = (state_22245[(10)]);
var inst_22213__$1 = f.call(null,inst_22209);
var inst_22214 = cljs.core._EQ_.call(null,inst_22213__$1,inst_22206);
var inst_22215 = cljs.core.keyword_identical_QMARK_.call(null,inst_22206,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22216 = (inst_22214) || (inst_22215);
var state_22245__$1 = (function (){var statearr_22259 = state_22245;
(statearr_22259[(10)] = inst_22213__$1);

return statearr_22259;
})();
if(cljs.core.truth_(inst_22216)){
var statearr_22260_22285 = state_22245__$1;
(statearr_22260_22285[(1)] = (8));

} else {
var statearr_22261_22286 = state_22245__$1;
(statearr_22261_22286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (14))){
var inst_22238 = (state_22245[(2)]);
var inst_22239 = cljs.core.async.close_BANG_.call(null,out);
var state_22245__$1 = (function (){var statearr_22263 = state_22245;
(statearr_22263[(13)] = inst_22238);

return statearr_22263;
})();
var statearr_22264_22287 = state_22245__$1;
(statearr_22264_22287[(2)] = inst_22239);

(statearr_22264_22287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (10))){
var inst_22228 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22265_22288 = state_22245__$1;
(statearr_22265_22288[(2)] = inst_22228);

(statearr_22265_22288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22246 === (8))){
var inst_22209 = (state_22245[(9)]);
var inst_22213 = (state_22245[(10)]);
var inst_22205 = (state_22245[(8)]);
var inst_22218 = inst_22205.push(inst_22209);
var tmp22262 = inst_22205;
var inst_22205__$1 = tmp22262;
var inst_22206 = inst_22213;
var state_22245__$1 = (function (){var statearr_22266 = state_22245;
(statearr_22266[(7)] = inst_22206);

(statearr_22266[(8)] = inst_22205__$1);

(statearr_22266[(14)] = inst_22218);

return statearr_22266;
})();
var statearr_22267_22289 = state_22245__$1;
(statearr_22267_22289[(2)] = null);

(statearr_22267_22289[(1)] = (2));


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
});})(c__7050__auto___22275,out))
;
return ((function (switch__6994__auto__,c__7050__auto___22275,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_22271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22271[(0)] = state_machine__6995__auto__);

(statearr_22271[(1)] = (1));

return statearr_22271;
});
var state_machine__6995__auto____1 = (function (state_22245){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_22245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e22272){if((e22272 instanceof Object)){
var ex__6998__auto__ = e22272;
var statearr_22273_22290 = state_22245;
(statearr_22273_22290[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22291 = state_22245;
state_22245 = G__22291;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_22245){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_22245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___22275,out))
})();
var state__7052__auto__ = (function (){var statearr_22274 = f__7051__auto__.call(null);
(statearr_22274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___22275);

return statearr_22274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___22275,out))
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