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
if(typeof cljs.core.async.t67137 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t67137 = (function (f,fn_handler,meta67138){
this.f = f;
this.fn_handler = fn_handler;
this.meta67138 = meta67138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t67137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t67137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t67137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67139){
var self__ = this;
var _67139__$1 = this;
return self__.meta67138;
});

cljs.core.async.t67137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67139,meta67138__$1){
var self__ = this;
var _67139__$1 = this;
return (new cljs.core.async.t67137(self__.f,self__.fn_handler,meta67138__$1));
});

cljs.core.async.t67137.cljs$lang$type = true;

cljs.core.async.t67137.cljs$lang$ctorStr = "cljs.core.async/t67137";

cljs.core.async.t67137.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t67137");
});

cljs.core.async.__GT_t67137 = (function __GT_t67137(f__$1,fn_handler__$1,meta67138){
return (new cljs.core.async.t67137(f__$1,fn_handler__$1,meta67138));
});

}

return (new cljs.core.async.t67137(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var G__67141 = buff;
if(G__67141){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__67141.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__67141.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__67141);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__67141);
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
var val_67142 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_67142);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_67142,ret){
return (function (){
return fn1.call(null,val_67142);
});})(val_67142,ret))
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
var n__4517__auto___67143 = n;
var x_67144 = (0);
while(true){
if((x_67144 < n__4517__auto___67143)){
(a[x_67144] = (0));

var G__67145 = (x_67144 + (1));
x_67144 = G__67145;
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

var G__67146 = (i + (1));
i = G__67146;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t67150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t67150 = (function (flag,alt_flag,meta67151){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta67151 = meta67151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t67150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t67150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t67150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_67152){
var self__ = this;
var _67152__$1 = this;
return self__.meta67151;
});})(flag))
;

cljs.core.async.t67150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_67152,meta67151__$1){
var self__ = this;
var _67152__$1 = this;
return (new cljs.core.async.t67150(self__.flag,self__.alt_flag,meta67151__$1));
});})(flag))
;

cljs.core.async.t67150.cljs$lang$type = true;

cljs.core.async.t67150.cljs$lang$ctorStr = "cljs.core.async/t67150";

cljs.core.async.t67150.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t67150");
});})(flag))
;

cljs.core.async.__GT_t67150 = ((function (flag){
return (function __GT_t67150(flag__$1,alt_flag__$1,meta67151){
return (new cljs.core.async.t67150(flag__$1,alt_flag__$1,meta67151));
});})(flag))
;

}

return (new cljs.core.async.t67150(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t67156 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t67156 = (function (cb,flag,alt_handler,meta67157){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta67157 = meta67157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67156.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t67156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t67156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t67156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67158){
var self__ = this;
var _67158__$1 = this;
return self__.meta67157;
});

cljs.core.async.t67156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67158,meta67157__$1){
var self__ = this;
var _67158__$1 = this;
return (new cljs.core.async.t67156(self__.cb,self__.flag,self__.alt_handler,meta67157__$1));
});

cljs.core.async.t67156.cljs$lang$type = true;

cljs.core.async.t67156.cljs$lang$ctorStr = "cljs.core.async/t67156";

cljs.core.async.t67156.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t67156");
});

cljs.core.async.__GT_t67156 = (function __GT_t67156(cb__$1,flag__$1,alt_handler__$1,meta67157){
return (new cljs.core.async.t67156(cb__$1,flag__$1,alt_handler__$1,meta67157));
});

}

return (new cljs.core.async.t67156(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
return (function (p1__67159_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67159_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67160_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67160_SHARP_,port], null));
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
var G__67161 = (i + (1));
i = G__67161;
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
var alts_BANG___delegate = function (ports,p__67162){
var map__67164 = p__67162;
var map__67164__$1 = ((cljs.core.seq_QMARK_.call(null,map__67164))?cljs.core.apply.call(null,cljs.core.hash_map,map__67164):map__67164);
var opts = map__67164__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__67162 = null;
if (arguments.length > 1) {
  p__67162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__67162);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__67165){
var ports = cljs.core.first(arglist__67165);
var p__67162 = cljs.core.rest(arglist__67165);
return alts_BANG___delegate(ports,p__67162);
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
var c__7050__auto___67260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___67260){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___67260){
return (function (state_67236){
var state_val_67237 = (state_67236[(1)]);
if((state_val_67237 === (7))){
var inst_67232 = (state_67236[(2)]);
var state_67236__$1 = state_67236;
var statearr_67238_67261 = state_67236__$1;
(statearr_67238_67261[(2)] = inst_67232);

(statearr_67238_67261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (1))){
var state_67236__$1 = state_67236;
var statearr_67239_67262 = state_67236__$1;
(statearr_67239_67262[(2)] = null);

(statearr_67239_67262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (4))){
var inst_67215 = (state_67236[(7)]);
var inst_67215__$1 = (state_67236[(2)]);
var inst_67216 = (inst_67215__$1 == null);
var state_67236__$1 = (function (){var statearr_67240 = state_67236;
(statearr_67240[(7)] = inst_67215__$1);

return statearr_67240;
})();
if(cljs.core.truth_(inst_67216)){
var statearr_67241_67263 = state_67236__$1;
(statearr_67241_67263[(1)] = (5));

} else {
var statearr_67242_67264 = state_67236__$1;
(statearr_67242_67264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (13))){
var state_67236__$1 = state_67236;
var statearr_67243_67265 = state_67236__$1;
(statearr_67243_67265[(2)] = null);

(statearr_67243_67265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (6))){
var inst_67215 = (state_67236[(7)]);
var state_67236__$1 = state_67236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67236__$1,(11),to,inst_67215);
} else {
if((state_val_67237 === (3))){
var inst_67234 = (state_67236[(2)]);
var state_67236__$1 = state_67236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67236__$1,inst_67234);
} else {
if((state_val_67237 === (12))){
var state_67236__$1 = state_67236;
var statearr_67244_67266 = state_67236__$1;
(statearr_67244_67266[(2)] = null);

(statearr_67244_67266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (2))){
var state_67236__$1 = state_67236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67236__$1,(4),from);
} else {
if((state_val_67237 === (11))){
var inst_67225 = (state_67236[(2)]);
var state_67236__$1 = state_67236;
if(cljs.core.truth_(inst_67225)){
var statearr_67245_67267 = state_67236__$1;
(statearr_67245_67267[(1)] = (12));

} else {
var statearr_67246_67268 = state_67236__$1;
(statearr_67246_67268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (9))){
var state_67236__$1 = state_67236;
var statearr_67247_67269 = state_67236__$1;
(statearr_67247_67269[(2)] = null);

(statearr_67247_67269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (5))){
var state_67236__$1 = state_67236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67248_67270 = state_67236__$1;
(statearr_67248_67270[(1)] = (8));

} else {
var statearr_67249_67271 = state_67236__$1;
(statearr_67249_67271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (14))){
var inst_67230 = (state_67236[(2)]);
var state_67236__$1 = state_67236;
var statearr_67250_67272 = state_67236__$1;
(statearr_67250_67272[(2)] = inst_67230);

(statearr_67250_67272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (10))){
var inst_67222 = (state_67236[(2)]);
var state_67236__$1 = state_67236;
var statearr_67251_67273 = state_67236__$1;
(statearr_67251_67273[(2)] = inst_67222);

(statearr_67251_67273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67237 === (8))){
var inst_67219 = cljs.core.async.close_BANG_.call(null,to);
var state_67236__$1 = state_67236;
var statearr_67252_67274 = state_67236__$1;
(statearr_67252_67274[(2)] = inst_67219);

(statearr_67252_67274[(1)] = (10));


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
});})(c__7050__auto___67260))
;
return ((function (switch__6994__auto__,c__7050__auto___67260){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67256 = [null,null,null,null,null,null,null,null];
(statearr_67256[(0)] = state_machine__6995__auto__);

(statearr_67256[(1)] = (1));

return statearr_67256;
});
var state_machine__6995__auto____1 = (function (state_67236){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67257){if((e67257 instanceof Object)){
var ex__6998__auto__ = e67257;
var statearr_67258_67275 = state_67236;
(statearr_67258_67275[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67276 = state_67236;
state_67236 = G__67276;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67236){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___67260))
})();
var state__7052__auto__ = (function (){var statearr_67259 = f__7051__auto__.call(null);
(statearr_67259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67260);

return statearr_67259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___67260))
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
return (function (p__67460){
var vec__67461 = p__67460;
var v = cljs.core.nth.call(null,vec__67461,(0),null);
var p = cljs.core.nth.call(null,vec__67461,(1),null);
var job = vec__67461;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___67643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results){
return (function (state_67466){
var state_val_67467 = (state_67466[(1)]);
if((state_val_67467 === (2))){
var inst_67463 = (state_67466[(2)]);
var inst_67464 = cljs.core.async.close_BANG_.call(null,res);
var state_67466__$1 = (function (){var statearr_67468 = state_67466;
(statearr_67468[(7)] = inst_67463);

return statearr_67468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67466__$1,inst_67464);
} else {
if((state_val_67467 === (1))){
var state_67466__$1 = state_67466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67466__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67472 = [null,null,null,null,null,null,null,null];
(statearr_67472[(0)] = state_machine__6995__auto__);

(statearr_67472[(1)] = (1));

return statearr_67472;
});
var state_machine__6995__auto____1 = (function (state_67466){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67473){if((e67473 instanceof Object)){
var ex__6998__auto__ = e67473;
var statearr_67474_67644 = state_67466;
(statearr_67474_67644[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67645 = state_67466;
state_67466 = G__67645;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67466){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_67475 = f__7051__auto__.call(null);
(statearr_67475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67643);

return statearr_67475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___67643,res,vec__67461,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__67476){
var vec__67477 = p__67476;
var v = cljs.core.nth.call(null,vec__67477,(0),null);
var p = cljs.core.nth.call(null,vec__67477,(1),null);
var job = vec__67477;
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
var n__4517__auto___67646 = n;
var __67647 = (0);
while(true){
if((__67647 < n__4517__auto___67646)){
var G__67478_67648 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__67478_67648) {
case "async":
var c__7050__auto___67650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__67647,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__67647,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function (state_67491){
var state_val_67492 = (state_67491[(1)]);
if((state_val_67492 === (7))){
var inst_67487 = (state_67491[(2)]);
var state_67491__$1 = state_67491;
var statearr_67493_67651 = state_67491__$1;
(statearr_67493_67651[(2)] = inst_67487);

(statearr_67493_67651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67492 === (6))){
var state_67491__$1 = state_67491;
var statearr_67494_67652 = state_67491__$1;
(statearr_67494_67652[(2)] = null);

(statearr_67494_67652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67492 === (5))){
var state_67491__$1 = state_67491;
var statearr_67495_67653 = state_67491__$1;
(statearr_67495_67653[(2)] = null);

(statearr_67495_67653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67492 === (4))){
var inst_67481 = (state_67491[(2)]);
var inst_67482 = async.call(null,inst_67481);
var state_67491__$1 = state_67491;
if(cljs.core.truth_(inst_67482)){
var statearr_67496_67654 = state_67491__$1;
(statearr_67496_67654[(1)] = (5));

} else {
var statearr_67497_67655 = state_67491__$1;
(statearr_67497_67655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67492 === (3))){
var inst_67489 = (state_67491[(2)]);
var state_67491__$1 = state_67491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67491__$1,inst_67489);
} else {
if((state_val_67492 === (2))){
var state_67491__$1 = state_67491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67491__$1,(4),jobs);
} else {
if((state_val_67492 === (1))){
var state_67491__$1 = state_67491;
var statearr_67498_67656 = state_67491__$1;
(statearr_67498_67656[(2)] = null);

(statearr_67498_67656[(1)] = (2));


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
});})(__67647,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
;
return ((function (__67647,switch__6994__auto__,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67502 = [null,null,null,null,null,null,null];
(statearr_67502[(0)] = state_machine__6995__auto__);

(statearr_67502[(1)] = (1));

return statearr_67502;
});
var state_machine__6995__auto____1 = (function (state_67491){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67503){if((e67503 instanceof Object)){
var ex__6998__auto__ = e67503;
var statearr_67504_67657 = state_67491;
(statearr_67504_67657[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67658 = state_67491;
state_67491 = G__67658;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67491){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__67647,switch__6994__auto__,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_67505 = f__7051__auto__.call(null);
(statearr_67505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67650);

return statearr_67505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__67647,c__7050__auto___67650,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___67659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__67647,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__67647,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function (state_67518){
var state_val_67519 = (state_67518[(1)]);
if((state_val_67519 === (7))){
var inst_67514 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67520_67660 = state_67518__$1;
(statearr_67520_67660[(2)] = inst_67514);

(statearr_67520_67660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (6))){
var state_67518__$1 = state_67518;
var statearr_67521_67661 = state_67518__$1;
(statearr_67521_67661[(2)] = null);

(statearr_67521_67661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (5))){
var state_67518__$1 = state_67518;
var statearr_67522_67662 = state_67518__$1;
(statearr_67522_67662[(2)] = null);

(statearr_67522_67662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (4))){
var inst_67508 = (state_67518[(2)]);
var inst_67509 = process.call(null,inst_67508);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67509)){
var statearr_67523_67663 = state_67518__$1;
(statearr_67523_67663[(1)] = (5));

} else {
var statearr_67524_67664 = state_67518__$1;
(statearr_67524_67664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (3))){
var inst_67516 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67518__$1,inst_67516);
} else {
if((state_val_67519 === (2))){
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67518__$1,(4),jobs);
} else {
if((state_val_67519 === (1))){
var state_67518__$1 = state_67518;
var statearr_67525_67665 = state_67518__$1;
(statearr_67525_67665[(2)] = null);

(statearr_67525_67665[(1)] = (2));


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
});})(__67647,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
;
return ((function (__67647,switch__6994__auto__,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67529 = [null,null,null,null,null,null,null];
(statearr_67529[(0)] = state_machine__6995__auto__);

(statearr_67529[(1)] = (1));

return statearr_67529;
});
var state_machine__6995__auto____1 = (function (state_67518){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67530){if((e67530 instanceof Object)){
var ex__6998__auto__ = e67530;
var statearr_67531_67666 = state_67518;
(statearr_67531_67666[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67667 = state_67518;
state_67518 = G__67667;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67518){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__67647,switch__6994__auto__,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_67532 = f__7051__auto__.call(null);
(statearr_67532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67659);

return statearr_67532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__67647,c__7050__auto___67659,G__67478_67648,n__4517__auto___67646,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__67668 = (__67647 + (1));
__67647 = G__67668;
continue;
} else {
}
break;
}

var c__7050__auto___67669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___67669,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___67669,jobs,results,process,async){
return (function (state_67554){
var state_val_67555 = (state_67554[(1)]);
if((state_val_67555 === (9))){
var inst_67547 = (state_67554[(2)]);
var state_67554__$1 = (function (){var statearr_67556 = state_67554;
(statearr_67556[(7)] = inst_67547);

return statearr_67556;
})();
var statearr_67557_67670 = state_67554__$1;
(statearr_67557_67670[(2)] = null);

(statearr_67557_67670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67555 === (8))){
var inst_67540 = (state_67554[(8)]);
var inst_67545 = (state_67554[(2)]);
var state_67554__$1 = (function (){var statearr_67558 = state_67554;
(statearr_67558[(9)] = inst_67545);

return statearr_67558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67554__$1,(9),results,inst_67540);
} else {
if((state_val_67555 === (7))){
var inst_67550 = (state_67554[(2)]);
var state_67554__$1 = state_67554;
var statearr_67559_67671 = state_67554__$1;
(statearr_67559_67671[(2)] = inst_67550);

(statearr_67559_67671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67555 === (6))){
var inst_67540 = (state_67554[(8)]);
var inst_67535 = (state_67554[(10)]);
var inst_67540__$1 = cljs.core.async.chan.call(null,(1));
var inst_67541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67542 = [inst_67535,inst_67540__$1];
var inst_67543 = (new cljs.core.PersistentVector(null,2,(5),inst_67541,inst_67542,null));
var state_67554__$1 = (function (){var statearr_67560 = state_67554;
(statearr_67560[(8)] = inst_67540__$1);

return statearr_67560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67554__$1,(8),jobs,inst_67543);
} else {
if((state_val_67555 === (5))){
var inst_67538 = cljs.core.async.close_BANG_.call(null,jobs);
var state_67554__$1 = state_67554;
var statearr_67561_67672 = state_67554__$1;
(statearr_67561_67672[(2)] = inst_67538);

(statearr_67561_67672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67555 === (4))){
var inst_67535 = (state_67554[(10)]);
var inst_67535__$1 = (state_67554[(2)]);
var inst_67536 = (inst_67535__$1 == null);
var state_67554__$1 = (function (){var statearr_67562 = state_67554;
(statearr_67562[(10)] = inst_67535__$1);

return statearr_67562;
})();
if(cljs.core.truth_(inst_67536)){
var statearr_67563_67673 = state_67554__$1;
(statearr_67563_67673[(1)] = (5));

} else {
var statearr_67564_67674 = state_67554__$1;
(statearr_67564_67674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67555 === (3))){
var inst_67552 = (state_67554[(2)]);
var state_67554__$1 = state_67554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67554__$1,inst_67552);
} else {
if((state_val_67555 === (2))){
var state_67554__$1 = state_67554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67554__$1,(4),from);
} else {
if((state_val_67555 === (1))){
var state_67554__$1 = state_67554;
var statearr_67565_67675 = state_67554__$1;
(statearr_67565_67675[(2)] = null);

(statearr_67565_67675[(1)] = (2));


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
});})(c__7050__auto___67669,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___67669,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67569[(0)] = state_machine__6995__auto__);

(statearr_67569[(1)] = (1));

return statearr_67569;
});
var state_machine__6995__auto____1 = (function (state_67554){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67570){if((e67570 instanceof Object)){
var ex__6998__auto__ = e67570;
var statearr_67571_67676 = state_67554;
(statearr_67571_67676[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67677 = state_67554;
state_67554 = G__67677;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67554){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___67669,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_67572 = f__7051__auto__.call(null);
(statearr_67572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67669);

return statearr_67572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___67669,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_67610){
var state_val_67611 = (state_67610[(1)]);
if((state_val_67611 === (7))){
var inst_67606 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
var statearr_67612_67678 = state_67610__$1;
(statearr_67612_67678[(2)] = inst_67606);

(statearr_67612_67678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (20))){
var state_67610__$1 = state_67610;
var statearr_67613_67679 = state_67610__$1;
(statearr_67613_67679[(2)] = null);

(statearr_67613_67679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (1))){
var state_67610__$1 = state_67610;
var statearr_67614_67680 = state_67610__$1;
(statearr_67614_67680[(2)] = null);

(statearr_67614_67680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (4))){
var inst_67575 = (state_67610[(7)]);
var inst_67575__$1 = (state_67610[(2)]);
var inst_67576 = (inst_67575__$1 == null);
var state_67610__$1 = (function (){var statearr_67615 = state_67610;
(statearr_67615[(7)] = inst_67575__$1);

return statearr_67615;
})();
if(cljs.core.truth_(inst_67576)){
var statearr_67616_67681 = state_67610__$1;
(statearr_67616_67681[(1)] = (5));

} else {
var statearr_67617_67682 = state_67610__$1;
(statearr_67617_67682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (15))){
var inst_67588 = (state_67610[(8)]);
var state_67610__$1 = state_67610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67610__$1,(18),to,inst_67588);
} else {
if((state_val_67611 === (21))){
var inst_67601 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
var statearr_67618_67683 = state_67610__$1;
(statearr_67618_67683[(2)] = inst_67601);

(statearr_67618_67683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (13))){
var inst_67603 = (state_67610[(2)]);
var state_67610__$1 = (function (){var statearr_67619 = state_67610;
(statearr_67619[(9)] = inst_67603);

return statearr_67619;
})();
var statearr_67620_67684 = state_67610__$1;
(statearr_67620_67684[(2)] = null);

(statearr_67620_67684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (6))){
var inst_67575 = (state_67610[(7)]);
var state_67610__$1 = state_67610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67610__$1,(11),inst_67575);
} else {
if((state_val_67611 === (17))){
var inst_67596 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
if(cljs.core.truth_(inst_67596)){
var statearr_67621_67685 = state_67610__$1;
(statearr_67621_67685[(1)] = (19));

} else {
var statearr_67622_67686 = state_67610__$1;
(statearr_67622_67686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (3))){
var inst_67608 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67610__$1,inst_67608);
} else {
if((state_val_67611 === (12))){
var inst_67585 = (state_67610[(10)]);
var state_67610__$1 = state_67610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67610__$1,(14),inst_67585);
} else {
if((state_val_67611 === (2))){
var state_67610__$1 = state_67610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67610__$1,(4),results);
} else {
if((state_val_67611 === (19))){
var state_67610__$1 = state_67610;
var statearr_67623_67687 = state_67610__$1;
(statearr_67623_67687[(2)] = null);

(statearr_67623_67687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (11))){
var inst_67585 = (state_67610[(2)]);
var state_67610__$1 = (function (){var statearr_67624 = state_67610;
(statearr_67624[(10)] = inst_67585);

return statearr_67624;
})();
var statearr_67625_67688 = state_67610__$1;
(statearr_67625_67688[(2)] = null);

(statearr_67625_67688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (9))){
var state_67610__$1 = state_67610;
var statearr_67626_67689 = state_67610__$1;
(statearr_67626_67689[(2)] = null);

(statearr_67626_67689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (5))){
var state_67610__$1 = state_67610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67627_67690 = state_67610__$1;
(statearr_67627_67690[(1)] = (8));

} else {
var statearr_67628_67691 = state_67610__$1;
(statearr_67628_67691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (14))){
var inst_67588 = (state_67610[(8)]);
var inst_67590 = (state_67610[(11)]);
var inst_67588__$1 = (state_67610[(2)]);
var inst_67589 = (inst_67588__$1 == null);
var inst_67590__$1 = cljs.core.not.call(null,inst_67589);
var state_67610__$1 = (function (){var statearr_67629 = state_67610;
(statearr_67629[(8)] = inst_67588__$1);

(statearr_67629[(11)] = inst_67590__$1);

return statearr_67629;
})();
if(inst_67590__$1){
var statearr_67630_67692 = state_67610__$1;
(statearr_67630_67692[(1)] = (15));

} else {
var statearr_67631_67693 = state_67610__$1;
(statearr_67631_67693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (16))){
var inst_67590 = (state_67610[(11)]);
var state_67610__$1 = state_67610;
var statearr_67632_67694 = state_67610__$1;
(statearr_67632_67694[(2)] = inst_67590);

(statearr_67632_67694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (10))){
var inst_67582 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
var statearr_67633_67695 = state_67610__$1;
(statearr_67633_67695[(2)] = inst_67582);

(statearr_67633_67695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (18))){
var inst_67593 = (state_67610[(2)]);
var state_67610__$1 = state_67610;
var statearr_67634_67696 = state_67610__$1;
(statearr_67634_67696[(2)] = inst_67593);

(statearr_67634_67696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67611 === (8))){
var inst_67579 = cljs.core.async.close_BANG_.call(null,to);
var state_67610__$1 = state_67610;
var statearr_67635_67697 = state_67610__$1;
(statearr_67635_67697[(2)] = inst_67579);

(statearr_67635_67697[(1)] = (10));


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
var statearr_67639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67639[(0)] = state_machine__6995__auto__);

(statearr_67639[(1)] = (1));

return statearr_67639;
});
var state_machine__6995__auto____1 = (function (state_67610){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67640){if((e67640 instanceof Object)){
var ex__6998__auto__ = e67640;
var statearr_67641_67698 = state_67610;
(statearr_67641_67698[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67699 = state_67610;
state_67610 = G__67699;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67610){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_67642 = f__7051__auto__.call(null);
(statearr_67642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_67642;
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
var c__7050__auto___67800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___67800,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___67800,tc,fc){
return (function (state_67775){
var state_val_67776 = (state_67775[(1)]);
if((state_val_67776 === (7))){
var inst_67771 = (state_67775[(2)]);
var state_67775__$1 = state_67775;
var statearr_67777_67801 = state_67775__$1;
(statearr_67777_67801[(2)] = inst_67771);

(statearr_67777_67801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (1))){
var state_67775__$1 = state_67775;
var statearr_67778_67802 = state_67775__$1;
(statearr_67778_67802[(2)] = null);

(statearr_67778_67802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (4))){
var inst_67752 = (state_67775[(7)]);
var inst_67752__$1 = (state_67775[(2)]);
var inst_67753 = (inst_67752__$1 == null);
var state_67775__$1 = (function (){var statearr_67779 = state_67775;
(statearr_67779[(7)] = inst_67752__$1);

return statearr_67779;
})();
if(cljs.core.truth_(inst_67753)){
var statearr_67780_67803 = state_67775__$1;
(statearr_67780_67803[(1)] = (5));

} else {
var statearr_67781_67804 = state_67775__$1;
(statearr_67781_67804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (13))){
var state_67775__$1 = state_67775;
var statearr_67782_67805 = state_67775__$1;
(statearr_67782_67805[(2)] = null);

(statearr_67782_67805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (6))){
var inst_67752 = (state_67775[(7)]);
var inst_67758 = p.call(null,inst_67752);
var state_67775__$1 = state_67775;
if(cljs.core.truth_(inst_67758)){
var statearr_67783_67806 = state_67775__$1;
(statearr_67783_67806[(1)] = (9));

} else {
var statearr_67784_67807 = state_67775__$1;
(statearr_67784_67807[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (3))){
var inst_67773 = (state_67775[(2)]);
var state_67775__$1 = state_67775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67775__$1,inst_67773);
} else {
if((state_val_67776 === (12))){
var state_67775__$1 = state_67775;
var statearr_67785_67808 = state_67775__$1;
(statearr_67785_67808[(2)] = null);

(statearr_67785_67808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (2))){
var state_67775__$1 = state_67775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67775__$1,(4),ch);
} else {
if((state_val_67776 === (11))){
var inst_67752 = (state_67775[(7)]);
var inst_67762 = (state_67775[(2)]);
var state_67775__$1 = state_67775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67775__$1,(8),inst_67762,inst_67752);
} else {
if((state_val_67776 === (9))){
var state_67775__$1 = state_67775;
var statearr_67786_67809 = state_67775__$1;
(statearr_67786_67809[(2)] = tc);

(statearr_67786_67809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (5))){
var inst_67755 = cljs.core.async.close_BANG_.call(null,tc);
var inst_67756 = cljs.core.async.close_BANG_.call(null,fc);
var state_67775__$1 = (function (){var statearr_67787 = state_67775;
(statearr_67787[(8)] = inst_67755);

return statearr_67787;
})();
var statearr_67788_67810 = state_67775__$1;
(statearr_67788_67810[(2)] = inst_67756);

(statearr_67788_67810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (14))){
var inst_67769 = (state_67775[(2)]);
var state_67775__$1 = state_67775;
var statearr_67789_67811 = state_67775__$1;
(statearr_67789_67811[(2)] = inst_67769);

(statearr_67789_67811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (10))){
var state_67775__$1 = state_67775;
var statearr_67790_67812 = state_67775__$1;
(statearr_67790_67812[(2)] = fc);

(statearr_67790_67812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67776 === (8))){
var inst_67764 = (state_67775[(2)]);
var state_67775__$1 = state_67775;
if(cljs.core.truth_(inst_67764)){
var statearr_67791_67813 = state_67775__$1;
(statearr_67791_67813[(1)] = (12));

} else {
var statearr_67792_67814 = state_67775__$1;
(statearr_67792_67814[(1)] = (13));

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
});})(c__7050__auto___67800,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___67800,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_67796 = [null,null,null,null,null,null,null,null,null];
(statearr_67796[(0)] = state_machine__6995__auto__);

(statearr_67796[(1)] = (1));

return statearr_67796;
});
var state_machine__6995__auto____1 = (function (state_67775){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67797){if((e67797 instanceof Object)){
var ex__6998__auto__ = e67797;
var statearr_67798_67815 = state_67775;
(statearr_67798_67815[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67816 = state_67775;
state_67775 = G__67816;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67775){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___67800,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_67799 = f__7051__auto__.call(null);
(statearr_67799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___67800);

return statearr_67799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___67800,tc,fc))
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
return (function (state_67863){
var state_val_67864 = (state_67863[(1)]);
if((state_val_67864 === (7))){
var inst_67859 = (state_67863[(2)]);
var state_67863__$1 = state_67863;
var statearr_67865_67881 = state_67863__$1;
(statearr_67865_67881[(2)] = inst_67859);

(statearr_67865_67881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67864 === (6))){
var inst_67849 = (state_67863[(7)]);
var inst_67852 = (state_67863[(8)]);
var inst_67856 = f.call(null,inst_67849,inst_67852);
var inst_67849__$1 = inst_67856;
var state_67863__$1 = (function (){var statearr_67866 = state_67863;
(statearr_67866[(7)] = inst_67849__$1);

return statearr_67866;
})();
var statearr_67867_67882 = state_67863__$1;
(statearr_67867_67882[(2)] = null);

(statearr_67867_67882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67864 === (5))){
var inst_67849 = (state_67863[(7)]);
var state_67863__$1 = state_67863;
var statearr_67868_67883 = state_67863__$1;
(statearr_67868_67883[(2)] = inst_67849);

(statearr_67868_67883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67864 === (4))){
var inst_67852 = (state_67863[(8)]);
var inst_67852__$1 = (state_67863[(2)]);
var inst_67853 = (inst_67852__$1 == null);
var state_67863__$1 = (function (){var statearr_67869 = state_67863;
(statearr_67869[(8)] = inst_67852__$1);

return statearr_67869;
})();
if(cljs.core.truth_(inst_67853)){
var statearr_67870_67884 = state_67863__$1;
(statearr_67870_67884[(1)] = (5));

} else {
var statearr_67871_67885 = state_67863__$1;
(statearr_67871_67885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67864 === (3))){
var inst_67861 = (state_67863[(2)]);
var state_67863__$1 = state_67863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67863__$1,inst_67861);
} else {
if((state_val_67864 === (2))){
var state_67863__$1 = state_67863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67863__$1,(4),ch);
} else {
if((state_val_67864 === (1))){
var inst_67849 = init;
var state_67863__$1 = (function (){var statearr_67872 = state_67863;
(statearr_67872[(7)] = inst_67849);

return statearr_67872;
})();
var statearr_67873_67886 = state_67863__$1;
(statearr_67873_67886[(2)] = null);

(statearr_67873_67886[(1)] = (2));


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
var statearr_67877 = [null,null,null,null,null,null,null,null,null];
(statearr_67877[(0)] = state_machine__6995__auto__);

(statearr_67877[(1)] = (1));

return statearr_67877;
});
var state_machine__6995__auto____1 = (function (state_67863){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67878){if((e67878 instanceof Object)){
var ex__6998__auto__ = e67878;
var statearr_67879_67887 = state_67863;
(statearr_67879_67887[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67888 = state_67863;
state_67863 = G__67888;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67863){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_67880 = f__7051__auto__.call(null);
(statearr_67880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_67880;
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
return (function (state_67962){
var state_val_67963 = (state_67962[(1)]);
if((state_val_67963 === (7))){
var inst_67944 = (state_67962[(2)]);
var state_67962__$1 = state_67962;
var statearr_67964_67987 = state_67962__$1;
(statearr_67964_67987[(2)] = inst_67944);

(statearr_67964_67987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (1))){
var inst_67938 = cljs.core.seq.call(null,coll);
var inst_67939 = inst_67938;
var state_67962__$1 = (function (){var statearr_67965 = state_67962;
(statearr_67965[(7)] = inst_67939);

return statearr_67965;
})();
var statearr_67966_67988 = state_67962__$1;
(statearr_67966_67988[(2)] = null);

(statearr_67966_67988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (4))){
var inst_67939 = (state_67962[(7)]);
var inst_67942 = cljs.core.first.call(null,inst_67939);
var state_67962__$1 = state_67962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67962__$1,(7),ch,inst_67942);
} else {
if((state_val_67963 === (13))){
var inst_67956 = (state_67962[(2)]);
var state_67962__$1 = state_67962;
var statearr_67967_67989 = state_67962__$1;
(statearr_67967_67989[(2)] = inst_67956);

(statearr_67967_67989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (6))){
var inst_67947 = (state_67962[(2)]);
var state_67962__$1 = state_67962;
if(cljs.core.truth_(inst_67947)){
var statearr_67968_67990 = state_67962__$1;
(statearr_67968_67990[(1)] = (8));

} else {
var statearr_67969_67991 = state_67962__$1;
(statearr_67969_67991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (3))){
var inst_67960 = (state_67962[(2)]);
var state_67962__$1 = state_67962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67962__$1,inst_67960);
} else {
if((state_val_67963 === (12))){
var state_67962__$1 = state_67962;
var statearr_67970_67992 = state_67962__$1;
(statearr_67970_67992[(2)] = null);

(statearr_67970_67992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (2))){
var inst_67939 = (state_67962[(7)]);
var state_67962__$1 = state_67962;
if(cljs.core.truth_(inst_67939)){
var statearr_67971_67993 = state_67962__$1;
(statearr_67971_67993[(1)] = (4));

} else {
var statearr_67972_67994 = state_67962__$1;
(statearr_67972_67994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (11))){
var inst_67953 = cljs.core.async.close_BANG_.call(null,ch);
var state_67962__$1 = state_67962;
var statearr_67973_67995 = state_67962__$1;
(statearr_67973_67995[(2)] = inst_67953);

(statearr_67973_67995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (9))){
var state_67962__$1 = state_67962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67974_67996 = state_67962__$1;
(statearr_67974_67996[(1)] = (11));

} else {
var statearr_67975_67997 = state_67962__$1;
(statearr_67975_67997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (5))){
var inst_67939 = (state_67962[(7)]);
var state_67962__$1 = state_67962;
var statearr_67976_67998 = state_67962__$1;
(statearr_67976_67998[(2)] = inst_67939);

(statearr_67976_67998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (10))){
var inst_67958 = (state_67962[(2)]);
var state_67962__$1 = state_67962;
var statearr_67977_67999 = state_67962__$1;
(statearr_67977_67999[(2)] = inst_67958);

(statearr_67977_67999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67963 === (8))){
var inst_67939 = (state_67962[(7)]);
var inst_67949 = cljs.core.next.call(null,inst_67939);
var inst_67939__$1 = inst_67949;
var state_67962__$1 = (function (){var statearr_67978 = state_67962;
(statearr_67978[(7)] = inst_67939__$1);

return statearr_67978;
})();
var statearr_67979_68000 = state_67962__$1;
(statearr_67979_68000[(2)] = null);

(statearr_67979_68000[(1)] = (2));


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
var statearr_67983 = [null,null,null,null,null,null,null,null];
(statearr_67983[(0)] = state_machine__6995__auto__);

(statearr_67983[(1)] = (1));

return statearr_67983;
});
var state_machine__6995__auto____1 = (function (state_67962){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_67962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e67984){if((e67984 instanceof Object)){
var ex__6998__auto__ = e67984;
var statearr_67985_68001 = state_67962;
(statearr_67985_68001[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68002 = state_67962;
state_67962 = G__68002;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_67962){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_67962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_67986 = f__7051__auto__.call(null);
(statearr_67986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_67986;
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

cljs.core.async.Mux = (function (){var obj68004 = {};
return obj68004;
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


cljs.core.async.Mult = (function (){var obj68006 = {};
return obj68006;
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
if(typeof cljs.core.async.t68228 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68228 = (function (cs,ch,mult,meta68229){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta68229 = meta68229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68228.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t68228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t68228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t68228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t68228.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t68228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t68228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_68230){
var self__ = this;
var _68230__$1 = this;
return self__.meta68229;
});})(cs))
;

cljs.core.async.t68228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_68230,meta68229__$1){
var self__ = this;
var _68230__$1 = this;
return (new cljs.core.async.t68228(self__.cs,self__.ch,self__.mult,meta68229__$1));
});})(cs))
;

cljs.core.async.t68228.cljs$lang$type = true;

cljs.core.async.t68228.cljs$lang$ctorStr = "cljs.core.async/t68228";

cljs.core.async.t68228.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t68228");
});})(cs))
;

cljs.core.async.__GT_t68228 = ((function (cs){
return (function __GT_t68228(cs__$1,ch__$1,mult__$1,meta68229){
return (new cljs.core.async.t68228(cs__$1,ch__$1,mult__$1,meta68229));
});})(cs))
;

}

return (new cljs.core.async.t68228(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___68449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___68449,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___68449,cs,m,dchan,dctr,done){
return (function (state_68361){
var state_val_68362 = (state_68361[(1)]);
if((state_val_68362 === (7))){
var inst_68357 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68363_68450 = state_68361__$1;
(statearr_68363_68450[(2)] = inst_68357);

(statearr_68363_68450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (20))){
var inst_68262 = (state_68361[(7)]);
var inst_68272 = cljs.core.first.call(null,inst_68262);
var inst_68273 = cljs.core.nth.call(null,inst_68272,(0),null);
var inst_68274 = cljs.core.nth.call(null,inst_68272,(1),null);
var state_68361__$1 = (function (){var statearr_68364 = state_68361;
(statearr_68364[(8)] = inst_68273);

return statearr_68364;
})();
if(cljs.core.truth_(inst_68274)){
var statearr_68365_68451 = state_68361__$1;
(statearr_68365_68451[(1)] = (22));

} else {
var statearr_68366_68452 = state_68361__$1;
(statearr_68366_68452[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (27))){
var inst_68309 = (state_68361[(9)]);
var inst_68304 = (state_68361[(10)]);
var inst_68233 = (state_68361[(11)]);
var inst_68302 = (state_68361[(12)]);
var inst_68309__$1 = cljs.core._nth.call(null,inst_68302,inst_68304);
var inst_68310 = cljs.core.async.put_BANG_.call(null,inst_68309__$1,inst_68233,done);
var state_68361__$1 = (function (){var statearr_68367 = state_68361;
(statearr_68367[(9)] = inst_68309__$1);

return statearr_68367;
})();
if(cljs.core.truth_(inst_68310)){
var statearr_68368_68453 = state_68361__$1;
(statearr_68368_68453[(1)] = (30));

} else {
var statearr_68369_68454 = state_68361__$1;
(statearr_68369_68454[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (1))){
var state_68361__$1 = state_68361;
var statearr_68370_68455 = state_68361__$1;
(statearr_68370_68455[(2)] = null);

(statearr_68370_68455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (24))){
var inst_68262 = (state_68361[(7)]);
var inst_68279 = (state_68361[(2)]);
var inst_68280 = cljs.core.next.call(null,inst_68262);
var inst_68242 = inst_68280;
var inst_68243 = null;
var inst_68244 = (0);
var inst_68245 = (0);
var state_68361__$1 = (function (){var statearr_68371 = state_68361;
(statearr_68371[(13)] = inst_68245);

(statearr_68371[(14)] = inst_68242);

(statearr_68371[(15)] = inst_68279);

(statearr_68371[(16)] = inst_68244);

(statearr_68371[(17)] = inst_68243);

return statearr_68371;
})();
var statearr_68372_68456 = state_68361__$1;
(statearr_68372_68456[(2)] = null);

(statearr_68372_68456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (39))){
var state_68361__$1 = state_68361;
var statearr_68376_68457 = state_68361__$1;
(statearr_68376_68457[(2)] = null);

(statearr_68376_68457[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (4))){
var inst_68233 = (state_68361[(11)]);
var inst_68233__$1 = (state_68361[(2)]);
var inst_68234 = (inst_68233__$1 == null);
var state_68361__$1 = (function (){var statearr_68377 = state_68361;
(statearr_68377[(11)] = inst_68233__$1);

return statearr_68377;
})();
if(cljs.core.truth_(inst_68234)){
var statearr_68378_68458 = state_68361__$1;
(statearr_68378_68458[(1)] = (5));

} else {
var statearr_68379_68459 = state_68361__$1;
(statearr_68379_68459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (15))){
var inst_68245 = (state_68361[(13)]);
var inst_68242 = (state_68361[(14)]);
var inst_68244 = (state_68361[(16)]);
var inst_68243 = (state_68361[(17)]);
var inst_68258 = (state_68361[(2)]);
var inst_68259 = (inst_68245 + (1));
var tmp68373 = inst_68242;
var tmp68374 = inst_68244;
var tmp68375 = inst_68243;
var inst_68242__$1 = tmp68373;
var inst_68243__$1 = tmp68375;
var inst_68244__$1 = tmp68374;
var inst_68245__$1 = inst_68259;
var state_68361__$1 = (function (){var statearr_68380 = state_68361;
(statearr_68380[(13)] = inst_68245__$1);

(statearr_68380[(14)] = inst_68242__$1);

(statearr_68380[(16)] = inst_68244__$1);

(statearr_68380[(18)] = inst_68258);

(statearr_68380[(17)] = inst_68243__$1);

return statearr_68380;
})();
var statearr_68381_68460 = state_68361__$1;
(statearr_68381_68460[(2)] = null);

(statearr_68381_68460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (21))){
var inst_68283 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68385_68461 = state_68361__$1;
(statearr_68385_68461[(2)] = inst_68283);

(statearr_68385_68461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (31))){
var inst_68309 = (state_68361[(9)]);
var inst_68313 = done.call(null,null);
var inst_68314 = cljs.core.async.untap_STAR_.call(null,m,inst_68309);
var state_68361__$1 = (function (){var statearr_68386 = state_68361;
(statearr_68386[(19)] = inst_68313);

return statearr_68386;
})();
var statearr_68387_68462 = state_68361__$1;
(statearr_68387_68462[(2)] = inst_68314);

(statearr_68387_68462[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (32))){
var inst_68304 = (state_68361[(10)]);
var inst_68301 = (state_68361[(20)]);
var inst_68303 = (state_68361[(21)]);
var inst_68302 = (state_68361[(12)]);
var inst_68316 = (state_68361[(2)]);
var inst_68317 = (inst_68304 + (1));
var tmp68382 = inst_68301;
var tmp68383 = inst_68303;
var tmp68384 = inst_68302;
var inst_68301__$1 = tmp68382;
var inst_68302__$1 = tmp68384;
var inst_68303__$1 = tmp68383;
var inst_68304__$1 = inst_68317;
var state_68361__$1 = (function (){var statearr_68388 = state_68361;
(statearr_68388[(10)] = inst_68304__$1);

(statearr_68388[(22)] = inst_68316);

(statearr_68388[(20)] = inst_68301__$1);

(statearr_68388[(21)] = inst_68303__$1);

(statearr_68388[(12)] = inst_68302__$1);

return statearr_68388;
})();
var statearr_68389_68463 = state_68361__$1;
(statearr_68389_68463[(2)] = null);

(statearr_68389_68463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (40))){
var inst_68329 = (state_68361[(23)]);
var inst_68333 = done.call(null,null);
var inst_68334 = cljs.core.async.untap_STAR_.call(null,m,inst_68329);
var state_68361__$1 = (function (){var statearr_68390 = state_68361;
(statearr_68390[(24)] = inst_68333);

return statearr_68390;
})();
var statearr_68391_68464 = state_68361__$1;
(statearr_68391_68464[(2)] = inst_68334);

(statearr_68391_68464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (33))){
var inst_68320 = (state_68361[(25)]);
var inst_68322 = cljs.core.chunked_seq_QMARK_.call(null,inst_68320);
var state_68361__$1 = state_68361;
if(inst_68322){
var statearr_68392_68465 = state_68361__$1;
(statearr_68392_68465[(1)] = (36));

} else {
var statearr_68393_68466 = state_68361__$1;
(statearr_68393_68466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (13))){
var inst_68252 = (state_68361[(26)]);
var inst_68255 = cljs.core.async.close_BANG_.call(null,inst_68252);
var state_68361__$1 = state_68361;
var statearr_68394_68467 = state_68361__$1;
(statearr_68394_68467[(2)] = inst_68255);

(statearr_68394_68467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (22))){
var inst_68273 = (state_68361[(8)]);
var inst_68276 = cljs.core.async.close_BANG_.call(null,inst_68273);
var state_68361__$1 = state_68361;
var statearr_68395_68468 = state_68361__$1;
(statearr_68395_68468[(2)] = inst_68276);

(statearr_68395_68468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (36))){
var inst_68320 = (state_68361[(25)]);
var inst_68324 = cljs.core.chunk_first.call(null,inst_68320);
var inst_68325 = cljs.core.chunk_rest.call(null,inst_68320);
var inst_68326 = cljs.core.count.call(null,inst_68324);
var inst_68301 = inst_68325;
var inst_68302 = inst_68324;
var inst_68303 = inst_68326;
var inst_68304 = (0);
var state_68361__$1 = (function (){var statearr_68396 = state_68361;
(statearr_68396[(10)] = inst_68304);

(statearr_68396[(20)] = inst_68301);

(statearr_68396[(21)] = inst_68303);

(statearr_68396[(12)] = inst_68302);

return statearr_68396;
})();
var statearr_68397_68469 = state_68361__$1;
(statearr_68397_68469[(2)] = null);

(statearr_68397_68469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (41))){
var inst_68320 = (state_68361[(25)]);
var inst_68336 = (state_68361[(2)]);
var inst_68337 = cljs.core.next.call(null,inst_68320);
var inst_68301 = inst_68337;
var inst_68302 = null;
var inst_68303 = (0);
var inst_68304 = (0);
var state_68361__$1 = (function (){var statearr_68398 = state_68361;
(statearr_68398[(27)] = inst_68336);

(statearr_68398[(10)] = inst_68304);

(statearr_68398[(20)] = inst_68301);

(statearr_68398[(21)] = inst_68303);

(statearr_68398[(12)] = inst_68302);

return statearr_68398;
})();
var statearr_68399_68470 = state_68361__$1;
(statearr_68399_68470[(2)] = null);

(statearr_68399_68470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (43))){
var state_68361__$1 = state_68361;
var statearr_68400_68471 = state_68361__$1;
(statearr_68400_68471[(2)] = null);

(statearr_68400_68471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (29))){
var inst_68345 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68401_68472 = state_68361__$1;
(statearr_68401_68472[(2)] = inst_68345);

(statearr_68401_68472[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (44))){
var inst_68354 = (state_68361[(2)]);
var state_68361__$1 = (function (){var statearr_68402 = state_68361;
(statearr_68402[(28)] = inst_68354);

return statearr_68402;
})();
var statearr_68403_68473 = state_68361__$1;
(statearr_68403_68473[(2)] = null);

(statearr_68403_68473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (6))){
var inst_68293 = (state_68361[(29)]);
var inst_68292 = cljs.core.deref.call(null,cs);
var inst_68293__$1 = cljs.core.keys.call(null,inst_68292);
var inst_68294 = cljs.core.count.call(null,inst_68293__$1);
var inst_68295 = cljs.core.reset_BANG_.call(null,dctr,inst_68294);
var inst_68300 = cljs.core.seq.call(null,inst_68293__$1);
var inst_68301 = inst_68300;
var inst_68302 = null;
var inst_68303 = (0);
var inst_68304 = (0);
var state_68361__$1 = (function (){var statearr_68404 = state_68361;
(statearr_68404[(29)] = inst_68293__$1);

(statearr_68404[(10)] = inst_68304);

(statearr_68404[(20)] = inst_68301);

(statearr_68404[(21)] = inst_68303);

(statearr_68404[(12)] = inst_68302);

(statearr_68404[(30)] = inst_68295);

return statearr_68404;
})();
var statearr_68405_68474 = state_68361__$1;
(statearr_68405_68474[(2)] = null);

(statearr_68405_68474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (28))){
var inst_68320 = (state_68361[(25)]);
var inst_68301 = (state_68361[(20)]);
var inst_68320__$1 = cljs.core.seq.call(null,inst_68301);
var state_68361__$1 = (function (){var statearr_68406 = state_68361;
(statearr_68406[(25)] = inst_68320__$1);

return statearr_68406;
})();
if(inst_68320__$1){
var statearr_68407_68475 = state_68361__$1;
(statearr_68407_68475[(1)] = (33));

} else {
var statearr_68408_68476 = state_68361__$1;
(statearr_68408_68476[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (25))){
var inst_68304 = (state_68361[(10)]);
var inst_68303 = (state_68361[(21)]);
var inst_68306 = (inst_68304 < inst_68303);
var inst_68307 = inst_68306;
var state_68361__$1 = state_68361;
if(cljs.core.truth_(inst_68307)){
var statearr_68409_68477 = state_68361__$1;
(statearr_68409_68477[(1)] = (27));

} else {
var statearr_68410_68478 = state_68361__$1;
(statearr_68410_68478[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (34))){
var state_68361__$1 = state_68361;
var statearr_68411_68479 = state_68361__$1;
(statearr_68411_68479[(2)] = null);

(statearr_68411_68479[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (17))){
var state_68361__$1 = state_68361;
var statearr_68412_68480 = state_68361__$1;
(statearr_68412_68480[(2)] = null);

(statearr_68412_68480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (3))){
var inst_68359 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68361__$1,inst_68359);
} else {
if((state_val_68362 === (12))){
var inst_68288 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68413_68481 = state_68361__$1;
(statearr_68413_68481[(2)] = inst_68288);

(statearr_68413_68481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (2))){
var state_68361__$1 = state_68361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68361__$1,(4),ch);
} else {
if((state_val_68362 === (23))){
var state_68361__$1 = state_68361;
var statearr_68414_68482 = state_68361__$1;
(statearr_68414_68482[(2)] = null);

(statearr_68414_68482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (35))){
var inst_68343 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68415_68483 = state_68361__$1;
(statearr_68415_68483[(2)] = inst_68343);

(statearr_68415_68483[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (19))){
var inst_68262 = (state_68361[(7)]);
var inst_68266 = cljs.core.chunk_first.call(null,inst_68262);
var inst_68267 = cljs.core.chunk_rest.call(null,inst_68262);
var inst_68268 = cljs.core.count.call(null,inst_68266);
var inst_68242 = inst_68267;
var inst_68243 = inst_68266;
var inst_68244 = inst_68268;
var inst_68245 = (0);
var state_68361__$1 = (function (){var statearr_68416 = state_68361;
(statearr_68416[(13)] = inst_68245);

(statearr_68416[(14)] = inst_68242);

(statearr_68416[(16)] = inst_68244);

(statearr_68416[(17)] = inst_68243);

return statearr_68416;
})();
var statearr_68417_68484 = state_68361__$1;
(statearr_68417_68484[(2)] = null);

(statearr_68417_68484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (11))){
var inst_68242 = (state_68361[(14)]);
var inst_68262 = (state_68361[(7)]);
var inst_68262__$1 = cljs.core.seq.call(null,inst_68242);
var state_68361__$1 = (function (){var statearr_68418 = state_68361;
(statearr_68418[(7)] = inst_68262__$1);

return statearr_68418;
})();
if(inst_68262__$1){
var statearr_68419_68485 = state_68361__$1;
(statearr_68419_68485[(1)] = (16));

} else {
var statearr_68420_68486 = state_68361__$1;
(statearr_68420_68486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (9))){
var inst_68290 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68421_68487 = state_68361__$1;
(statearr_68421_68487[(2)] = inst_68290);

(statearr_68421_68487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (5))){
var inst_68240 = cljs.core.deref.call(null,cs);
var inst_68241 = cljs.core.seq.call(null,inst_68240);
var inst_68242 = inst_68241;
var inst_68243 = null;
var inst_68244 = (0);
var inst_68245 = (0);
var state_68361__$1 = (function (){var statearr_68422 = state_68361;
(statearr_68422[(13)] = inst_68245);

(statearr_68422[(14)] = inst_68242);

(statearr_68422[(16)] = inst_68244);

(statearr_68422[(17)] = inst_68243);

return statearr_68422;
})();
var statearr_68423_68488 = state_68361__$1;
(statearr_68423_68488[(2)] = null);

(statearr_68423_68488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (14))){
var state_68361__$1 = state_68361;
var statearr_68424_68489 = state_68361__$1;
(statearr_68424_68489[(2)] = null);

(statearr_68424_68489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (45))){
var inst_68351 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68425_68490 = state_68361__$1;
(statearr_68425_68490[(2)] = inst_68351);

(statearr_68425_68490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (26))){
var inst_68293 = (state_68361[(29)]);
var inst_68347 = (state_68361[(2)]);
var inst_68348 = cljs.core.seq.call(null,inst_68293);
var state_68361__$1 = (function (){var statearr_68426 = state_68361;
(statearr_68426[(31)] = inst_68347);

return statearr_68426;
})();
if(inst_68348){
var statearr_68427_68491 = state_68361__$1;
(statearr_68427_68491[(1)] = (42));

} else {
var statearr_68428_68492 = state_68361__$1;
(statearr_68428_68492[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (16))){
var inst_68262 = (state_68361[(7)]);
var inst_68264 = cljs.core.chunked_seq_QMARK_.call(null,inst_68262);
var state_68361__$1 = state_68361;
if(inst_68264){
var statearr_68429_68493 = state_68361__$1;
(statearr_68429_68493[(1)] = (19));

} else {
var statearr_68430_68494 = state_68361__$1;
(statearr_68430_68494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (38))){
var inst_68340 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68431_68495 = state_68361__$1;
(statearr_68431_68495[(2)] = inst_68340);

(statearr_68431_68495[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (30))){
var state_68361__$1 = state_68361;
var statearr_68432_68496 = state_68361__$1;
(statearr_68432_68496[(2)] = null);

(statearr_68432_68496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (10))){
var inst_68245 = (state_68361[(13)]);
var inst_68243 = (state_68361[(17)]);
var inst_68251 = cljs.core._nth.call(null,inst_68243,inst_68245);
var inst_68252 = cljs.core.nth.call(null,inst_68251,(0),null);
var inst_68253 = cljs.core.nth.call(null,inst_68251,(1),null);
var state_68361__$1 = (function (){var statearr_68433 = state_68361;
(statearr_68433[(26)] = inst_68252);

return statearr_68433;
})();
if(cljs.core.truth_(inst_68253)){
var statearr_68434_68497 = state_68361__$1;
(statearr_68434_68497[(1)] = (13));

} else {
var statearr_68435_68498 = state_68361__$1;
(statearr_68435_68498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (18))){
var inst_68286 = (state_68361[(2)]);
var state_68361__$1 = state_68361;
var statearr_68436_68499 = state_68361__$1;
(statearr_68436_68499[(2)] = inst_68286);

(statearr_68436_68499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (42))){
var state_68361__$1 = state_68361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68361__$1,(45),dchan);
} else {
if((state_val_68362 === (37))){
var inst_68320 = (state_68361[(25)]);
var inst_68329 = (state_68361[(23)]);
var inst_68233 = (state_68361[(11)]);
var inst_68329__$1 = cljs.core.first.call(null,inst_68320);
var inst_68330 = cljs.core.async.put_BANG_.call(null,inst_68329__$1,inst_68233,done);
var state_68361__$1 = (function (){var statearr_68437 = state_68361;
(statearr_68437[(23)] = inst_68329__$1);

return statearr_68437;
})();
if(cljs.core.truth_(inst_68330)){
var statearr_68438_68500 = state_68361__$1;
(statearr_68438_68500[(1)] = (39));

} else {
var statearr_68439_68501 = state_68361__$1;
(statearr_68439_68501[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68362 === (8))){
var inst_68245 = (state_68361[(13)]);
var inst_68244 = (state_68361[(16)]);
var inst_68247 = (inst_68245 < inst_68244);
var inst_68248 = inst_68247;
var state_68361__$1 = state_68361;
if(cljs.core.truth_(inst_68248)){
var statearr_68440_68502 = state_68361__$1;
(statearr_68440_68502[(1)] = (10));

} else {
var statearr_68441_68503 = state_68361__$1;
(statearr_68441_68503[(1)] = (11));

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
});})(c__7050__auto___68449,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___68449,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_68445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68445[(0)] = state_machine__6995__auto__);

(statearr_68445[(1)] = (1));

return statearr_68445;
});
var state_machine__6995__auto____1 = (function (state_68361){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_68361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e68446){if((e68446 instanceof Object)){
var ex__6998__auto__ = e68446;
var statearr_68447_68504 = state_68361;
(statearr_68447_68504[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68505 = state_68361;
state_68361 = G__68505;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_68361){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_68361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___68449,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_68448 = f__7051__auto__.call(null);
(statearr_68448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___68449);

return statearr_68448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___68449,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj68507 = {};
return obj68507;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__68508){
var map__68513 = p__68508;
var map__68513__$1 = ((cljs.core.seq_QMARK_.call(null,map__68513))?cljs.core.apply.call(null,cljs.core.hash_map,map__68513):map__68513);
var opts = map__68513__$1;
var statearr_68514_68517 = state;
(statearr_68514_68517[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__68513,map__68513__$1,opts){
return (function (val){
var statearr_68515_68518 = state;
(statearr_68515_68518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__68513,map__68513__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_68516_68519 = state;
(statearr_68516_68519[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__68508 = null;
if (arguments.length > 3) {
  p__68508 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__68508);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__68520){
var state = cljs.core.first(arglist__68520);
arglist__68520 = cljs.core.next(arglist__68520);
var cont_block = cljs.core.first(arglist__68520);
arglist__68520 = cljs.core.next(arglist__68520);
var ports = cljs.core.first(arglist__68520);
var p__68508 = cljs.core.rest(arglist__68520);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__68508);
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
if(typeof cljs.core.async.t68640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68640 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta68641){
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
this.meta68641 = meta68641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68640.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t68640.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t68640.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t68640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_68642){
var self__ = this;
var _68642__$1 = this;
return self__.meta68641;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_68642,meta68641__$1){
var self__ = this;
var _68642__$1 = this;
return (new cljs.core.async.t68640(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta68641__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t68640.cljs$lang$type = true;

cljs.core.async.t68640.cljs$lang$ctorStr = "cljs.core.async/t68640";

cljs.core.async.t68640.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t68640");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t68640 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t68640(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta68641){
return (new cljs.core.async.t68640(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta68641));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t68640(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___68759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_68712){
var state_val_68713 = (state_68712[(1)]);
if((state_val_68713 === (7))){
var inst_68656 = (state_68712[(7)]);
var inst_68661 = cljs.core.apply.call(null,cljs.core.hash_map,inst_68656);
var state_68712__$1 = state_68712;
var statearr_68714_68760 = state_68712__$1;
(statearr_68714_68760[(2)] = inst_68661);

(statearr_68714_68760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (20))){
var inst_68671 = (state_68712[(8)]);
var state_68712__$1 = state_68712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68712__$1,(23),out,inst_68671);
} else {
if((state_val_68713 === (1))){
var inst_68646 = (state_68712[(9)]);
var inst_68646__$1 = calc_state.call(null);
var inst_68647 = cljs.core.seq_QMARK_.call(null,inst_68646__$1);
var state_68712__$1 = (function (){var statearr_68715 = state_68712;
(statearr_68715[(9)] = inst_68646__$1);

return statearr_68715;
})();
if(inst_68647){
var statearr_68716_68761 = state_68712__$1;
(statearr_68716_68761[(1)] = (2));

} else {
var statearr_68717_68762 = state_68712__$1;
(statearr_68717_68762[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (24))){
var inst_68664 = (state_68712[(10)]);
var inst_68656 = inst_68664;
var state_68712__$1 = (function (){var statearr_68718 = state_68712;
(statearr_68718[(7)] = inst_68656);

return statearr_68718;
})();
var statearr_68719_68763 = state_68712__$1;
(statearr_68719_68763[(2)] = null);

(statearr_68719_68763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (4))){
var inst_68646 = (state_68712[(9)]);
var inst_68652 = (state_68712[(2)]);
var inst_68653 = cljs.core.get.call(null,inst_68652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_68654 = cljs.core.get.call(null,inst_68652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_68655 = cljs.core.get.call(null,inst_68652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_68656 = inst_68646;
var state_68712__$1 = (function (){var statearr_68720 = state_68712;
(statearr_68720[(11)] = inst_68654);

(statearr_68720[(7)] = inst_68656);

(statearr_68720[(12)] = inst_68655);

(statearr_68720[(13)] = inst_68653);

return statearr_68720;
})();
var statearr_68721_68764 = state_68712__$1;
(statearr_68721_68764[(2)] = null);

(statearr_68721_68764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (15))){
var state_68712__$1 = state_68712;
var statearr_68722_68765 = state_68712__$1;
(statearr_68722_68765[(2)] = null);

(statearr_68722_68765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (21))){
var inst_68664 = (state_68712[(10)]);
var inst_68656 = inst_68664;
var state_68712__$1 = (function (){var statearr_68723 = state_68712;
(statearr_68723[(7)] = inst_68656);

return statearr_68723;
})();
var statearr_68724_68766 = state_68712__$1;
(statearr_68724_68766[(2)] = null);

(statearr_68724_68766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (13))){
var inst_68708 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
var statearr_68725_68767 = state_68712__$1;
(statearr_68725_68767[(2)] = inst_68708);

(statearr_68725_68767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (22))){
var inst_68706 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
var statearr_68726_68768 = state_68712__$1;
(statearr_68726_68768[(2)] = inst_68706);

(statearr_68726_68768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (6))){
var inst_68710 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68712__$1,inst_68710);
} else {
if((state_val_68713 === (25))){
var state_68712__$1 = state_68712;
var statearr_68727_68769 = state_68712__$1;
(statearr_68727_68769[(2)] = null);

(statearr_68727_68769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (17))){
var inst_68686 = (state_68712[(14)]);
var state_68712__$1 = state_68712;
var statearr_68728_68770 = state_68712__$1;
(statearr_68728_68770[(2)] = inst_68686);

(statearr_68728_68770[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (3))){
var inst_68646 = (state_68712[(9)]);
var state_68712__$1 = state_68712;
var statearr_68729_68771 = state_68712__$1;
(statearr_68729_68771[(2)] = inst_68646);

(statearr_68729_68771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (12))){
var inst_68672 = (state_68712[(15)]);
var inst_68667 = (state_68712[(16)]);
var inst_68686 = (state_68712[(14)]);
var inst_68686__$1 = inst_68667.call(null,inst_68672);
var state_68712__$1 = (function (){var statearr_68730 = state_68712;
(statearr_68730[(14)] = inst_68686__$1);

return statearr_68730;
})();
if(cljs.core.truth_(inst_68686__$1)){
var statearr_68731_68772 = state_68712__$1;
(statearr_68731_68772[(1)] = (17));

} else {
var statearr_68732_68773 = state_68712__$1;
(statearr_68732_68773[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (2))){
var inst_68646 = (state_68712[(9)]);
var inst_68649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_68646);
var state_68712__$1 = state_68712;
var statearr_68733_68774 = state_68712__$1;
(statearr_68733_68774[(2)] = inst_68649);

(statearr_68733_68774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (23))){
var inst_68697 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
if(cljs.core.truth_(inst_68697)){
var statearr_68734_68775 = state_68712__$1;
(statearr_68734_68775[(1)] = (24));

} else {
var statearr_68735_68776 = state_68712__$1;
(statearr_68735_68776[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (19))){
var inst_68694 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
if(cljs.core.truth_(inst_68694)){
var statearr_68736_68777 = state_68712__$1;
(statearr_68736_68777[(1)] = (20));

} else {
var statearr_68737_68778 = state_68712__$1;
(statearr_68737_68778[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (11))){
var inst_68671 = (state_68712[(8)]);
var inst_68677 = (inst_68671 == null);
var state_68712__$1 = state_68712;
if(cljs.core.truth_(inst_68677)){
var statearr_68738_68779 = state_68712__$1;
(statearr_68738_68779[(1)] = (14));

} else {
var statearr_68739_68780 = state_68712__$1;
(statearr_68739_68780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (9))){
var inst_68664 = (state_68712[(10)]);
var inst_68664__$1 = (state_68712[(2)]);
var inst_68665 = cljs.core.get.call(null,inst_68664__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_68666 = cljs.core.get.call(null,inst_68664__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_68667 = cljs.core.get.call(null,inst_68664__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_68712__$1 = (function (){var statearr_68740 = state_68712;
(statearr_68740[(16)] = inst_68667);

(statearr_68740[(17)] = inst_68666);

(statearr_68740[(10)] = inst_68664__$1);

return statearr_68740;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_68712__$1,(10),inst_68665);
} else {
if((state_val_68713 === (5))){
var inst_68656 = (state_68712[(7)]);
var inst_68659 = cljs.core.seq_QMARK_.call(null,inst_68656);
var state_68712__$1 = state_68712;
if(inst_68659){
var statearr_68741_68781 = state_68712__$1;
(statearr_68741_68781[(1)] = (7));

} else {
var statearr_68742_68782 = state_68712__$1;
(statearr_68742_68782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (14))){
var inst_68672 = (state_68712[(15)]);
var inst_68679 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_68672);
var state_68712__$1 = state_68712;
var statearr_68743_68783 = state_68712__$1;
(statearr_68743_68783[(2)] = inst_68679);

(statearr_68743_68783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (26))){
var inst_68702 = (state_68712[(2)]);
var state_68712__$1 = state_68712;
var statearr_68744_68784 = state_68712__$1;
(statearr_68744_68784[(2)] = inst_68702);

(statearr_68744_68784[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (16))){
var inst_68682 = (state_68712[(2)]);
var inst_68683 = calc_state.call(null);
var inst_68656 = inst_68683;
var state_68712__$1 = (function (){var statearr_68745 = state_68712;
(statearr_68745[(7)] = inst_68656);

(statearr_68745[(18)] = inst_68682);

return statearr_68745;
})();
var statearr_68746_68785 = state_68712__$1;
(statearr_68746_68785[(2)] = null);

(statearr_68746_68785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (10))){
var inst_68672 = (state_68712[(15)]);
var inst_68671 = (state_68712[(8)]);
var inst_68670 = (state_68712[(2)]);
var inst_68671__$1 = cljs.core.nth.call(null,inst_68670,(0),null);
var inst_68672__$1 = cljs.core.nth.call(null,inst_68670,(1),null);
var inst_68673 = (inst_68671__$1 == null);
var inst_68674 = cljs.core._EQ_.call(null,inst_68672__$1,change);
var inst_68675 = (inst_68673) || (inst_68674);
var state_68712__$1 = (function (){var statearr_68747 = state_68712;
(statearr_68747[(15)] = inst_68672__$1);

(statearr_68747[(8)] = inst_68671__$1);

return statearr_68747;
})();
if(cljs.core.truth_(inst_68675)){
var statearr_68748_68786 = state_68712__$1;
(statearr_68748_68786[(1)] = (11));

} else {
var statearr_68749_68787 = state_68712__$1;
(statearr_68749_68787[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (18))){
var inst_68672 = (state_68712[(15)]);
var inst_68667 = (state_68712[(16)]);
var inst_68666 = (state_68712[(17)]);
var inst_68689 = cljs.core.empty_QMARK_.call(null,inst_68667);
var inst_68690 = inst_68666.call(null,inst_68672);
var inst_68691 = cljs.core.not.call(null,inst_68690);
var inst_68692 = (inst_68689) && (inst_68691);
var state_68712__$1 = state_68712;
var statearr_68750_68788 = state_68712__$1;
(statearr_68750_68788[(2)] = inst_68692);

(statearr_68750_68788[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68713 === (8))){
var inst_68656 = (state_68712[(7)]);
var state_68712__$1 = state_68712;
var statearr_68751_68789 = state_68712__$1;
(statearr_68751_68789[(2)] = inst_68656);

(statearr_68751_68789[(1)] = (9));


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
});})(c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_68755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68755[(0)] = state_machine__6995__auto__);

(statearr_68755[(1)] = (1));

return statearr_68755;
});
var state_machine__6995__auto____1 = (function (state_68712){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_68712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e68756){if((e68756 instanceof Object)){
var ex__6998__auto__ = e68756;
var statearr_68757_68790 = state_68712;
(statearr_68757_68790[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68791 = state_68712;
state_68712 = G__68791;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_68712){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_68712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_68758 = f__7051__auto__.call(null);
(statearr_68758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___68759);

return statearr_68758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___68759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj68793 = {};
return obj68793;
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
return (function (p1__68794_SHARP_){
if(cljs.core.truth_(p1__68794_SHARP_.call(null,topic))){
return p1__68794_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__68794_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t68917 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t68917 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta68918){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta68918 = meta68918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68917.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t68917.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t68917.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t68917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t68917.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t68917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t68917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t68917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_68919){
var self__ = this;
var _68919__$1 = this;
return self__.meta68918;
});})(mults,ensure_mult))
;

cljs.core.async.t68917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_68919,meta68918__$1){
var self__ = this;
var _68919__$1 = this;
return (new cljs.core.async.t68917(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta68918__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t68917.cljs$lang$type = true;

cljs.core.async.t68917.cljs$lang$ctorStr = "cljs.core.async/t68917";

cljs.core.async.t68917.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t68917");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t68917 = ((function (mults,ensure_mult){
return (function __GT_t68917(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta68918){
return (new cljs.core.async.t68917(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta68918));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t68917(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___69039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69039,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69039,mults,ensure_mult,p){
return (function (state_68991){
var state_val_68992 = (state_68991[(1)]);
if((state_val_68992 === (7))){
var inst_68987 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_68993_69040 = state_68991__$1;
(statearr_68993_69040[(2)] = inst_68987);

(statearr_68993_69040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (20))){
var state_68991__$1 = state_68991;
var statearr_68994_69041 = state_68991__$1;
(statearr_68994_69041[(2)] = null);

(statearr_68994_69041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (1))){
var state_68991__$1 = state_68991;
var statearr_68995_69042 = state_68991__$1;
(statearr_68995_69042[(2)] = null);

(statearr_68995_69042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (24))){
var inst_68970 = (state_68991[(7)]);
var inst_68979 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_68970);
var state_68991__$1 = state_68991;
var statearr_68996_69043 = state_68991__$1;
(statearr_68996_69043[(2)] = inst_68979);

(statearr_68996_69043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (4))){
var inst_68922 = (state_68991[(8)]);
var inst_68922__$1 = (state_68991[(2)]);
var inst_68923 = (inst_68922__$1 == null);
var state_68991__$1 = (function (){var statearr_68997 = state_68991;
(statearr_68997[(8)] = inst_68922__$1);

return statearr_68997;
})();
if(cljs.core.truth_(inst_68923)){
var statearr_68998_69044 = state_68991__$1;
(statearr_68998_69044[(1)] = (5));

} else {
var statearr_68999_69045 = state_68991__$1;
(statearr_68999_69045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (15))){
var inst_68964 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_69000_69046 = state_68991__$1;
(statearr_69000_69046[(2)] = inst_68964);

(statearr_69000_69046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (21))){
var inst_68984 = (state_68991[(2)]);
var state_68991__$1 = (function (){var statearr_69001 = state_68991;
(statearr_69001[(9)] = inst_68984);

return statearr_69001;
})();
var statearr_69002_69047 = state_68991__$1;
(statearr_69002_69047[(2)] = null);

(statearr_69002_69047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (13))){
var inst_68946 = (state_68991[(10)]);
var inst_68948 = cljs.core.chunked_seq_QMARK_.call(null,inst_68946);
var state_68991__$1 = state_68991;
if(inst_68948){
var statearr_69003_69048 = state_68991__$1;
(statearr_69003_69048[(1)] = (16));

} else {
var statearr_69004_69049 = state_68991__$1;
(statearr_69004_69049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (22))){
var inst_68976 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
if(cljs.core.truth_(inst_68976)){
var statearr_69005_69050 = state_68991__$1;
(statearr_69005_69050[(1)] = (23));

} else {
var statearr_69006_69051 = state_68991__$1;
(statearr_69006_69051[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (6))){
var inst_68922 = (state_68991[(8)]);
var inst_68970 = (state_68991[(7)]);
var inst_68972 = (state_68991[(11)]);
var inst_68970__$1 = topic_fn.call(null,inst_68922);
var inst_68971 = cljs.core.deref.call(null,mults);
var inst_68972__$1 = cljs.core.get.call(null,inst_68971,inst_68970__$1);
var state_68991__$1 = (function (){var statearr_69007 = state_68991;
(statearr_69007[(7)] = inst_68970__$1);

(statearr_69007[(11)] = inst_68972__$1);

return statearr_69007;
})();
if(cljs.core.truth_(inst_68972__$1)){
var statearr_69008_69052 = state_68991__$1;
(statearr_69008_69052[(1)] = (19));

} else {
var statearr_69009_69053 = state_68991__$1;
(statearr_69009_69053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (25))){
var inst_68981 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_69010_69054 = state_68991__$1;
(statearr_69010_69054[(2)] = inst_68981);

(statearr_69010_69054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (17))){
var inst_68946 = (state_68991[(10)]);
var inst_68955 = cljs.core.first.call(null,inst_68946);
var inst_68956 = cljs.core.async.muxch_STAR_.call(null,inst_68955);
var inst_68957 = cljs.core.async.close_BANG_.call(null,inst_68956);
var inst_68958 = cljs.core.next.call(null,inst_68946);
var inst_68932 = inst_68958;
var inst_68933 = null;
var inst_68934 = (0);
var inst_68935 = (0);
var state_68991__$1 = (function (){var statearr_69011 = state_68991;
(statearr_69011[(12)] = inst_68934);

(statearr_69011[(13)] = inst_68932);

(statearr_69011[(14)] = inst_68933);

(statearr_69011[(15)] = inst_68957);

(statearr_69011[(16)] = inst_68935);

return statearr_69011;
})();
var statearr_69012_69055 = state_68991__$1;
(statearr_69012_69055[(2)] = null);

(statearr_69012_69055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (3))){
var inst_68989 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68991__$1,inst_68989);
} else {
if((state_val_68992 === (12))){
var inst_68966 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_69013_69056 = state_68991__$1;
(statearr_69013_69056[(2)] = inst_68966);

(statearr_69013_69056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (2))){
var state_68991__$1 = state_68991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68991__$1,(4),ch);
} else {
if((state_val_68992 === (23))){
var state_68991__$1 = state_68991;
var statearr_69014_69057 = state_68991__$1;
(statearr_69014_69057[(2)] = null);

(statearr_69014_69057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (19))){
var inst_68922 = (state_68991[(8)]);
var inst_68972 = (state_68991[(11)]);
var inst_68974 = cljs.core.async.muxch_STAR_.call(null,inst_68972);
var state_68991__$1 = state_68991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68991__$1,(22),inst_68974,inst_68922);
} else {
if((state_val_68992 === (11))){
var inst_68946 = (state_68991[(10)]);
var inst_68932 = (state_68991[(13)]);
var inst_68946__$1 = cljs.core.seq.call(null,inst_68932);
var state_68991__$1 = (function (){var statearr_69015 = state_68991;
(statearr_69015[(10)] = inst_68946__$1);

return statearr_69015;
})();
if(inst_68946__$1){
var statearr_69016_69058 = state_68991__$1;
(statearr_69016_69058[(1)] = (13));

} else {
var statearr_69017_69059 = state_68991__$1;
(statearr_69017_69059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (9))){
var inst_68968 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_69018_69060 = state_68991__$1;
(statearr_69018_69060[(2)] = inst_68968);

(statearr_69018_69060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (5))){
var inst_68929 = cljs.core.deref.call(null,mults);
var inst_68930 = cljs.core.vals.call(null,inst_68929);
var inst_68931 = cljs.core.seq.call(null,inst_68930);
var inst_68932 = inst_68931;
var inst_68933 = null;
var inst_68934 = (0);
var inst_68935 = (0);
var state_68991__$1 = (function (){var statearr_69019 = state_68991;
(statearr_69019[(12)] = inst_68934);

(statearr_69019[(13)] = inst_68932);

(statearr_69019[(14)] = inst_68933);

(statearr_69019[(16)] = inst_68935);

return statearr_69019;
})();
var statearr_69020_69061 = state_68991__$1;
(statearr_69020_69061[(2)] = null);

(statearr_69020_69061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (14))){
var state_68991__$1 = state_68991;
var statearr_69024_69062 = state_68991__$1;
(statearr_69024_69062[(2)] = null);

(statearr_69024_69062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (16))){
var inst_68946 = (state_68991[(10)]);
var inst_68950 = cljs.core.chunk_first.call(null,inst_68946);
var inst_68951 = cljs.core.chunk_rest.call(null,inst_68946);
var inst_68952 = cljs.core.count.call(null,inst_68950);
var inst_68932 = inst_68951;
var inst_68933 = inst_68950;
var inst_68934 = inst_68952;
var inst_68935 = (0);
var state_68991__$1 = (function (){var statearr_69025 = state_68991;
(statearr_69025[(12)] = inst_68934);

(statearr_69025[(13)] = inst_68932);

(statearr_69025[(14)] = inst_68933);

(statearr_69025[(16)] = inst_68935);

return statearr_69025;
})();
var statearr_69026_69063 = state_68991__$1;
(statearr_69026_69063[(2)] = null);

(statearr_69026_69063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (10))){
var inst_68934 = (state_68991[(12)]);
var inst_68932 = (state_68991[(13)]);
var inst_68933 = (state_68991[(14)]);
var inst_68935 = (state_68991[(16)]);
var inst_68940 = cljs.core._nth.call(null,inst_68933,inst_68935);
var inst_68941 = cljs.core.async.muxch_STAR_.call(null,inst_68940);
var inst_68942 = cljs.core.async.close_BANG_.call(null,inst_68941);
var inst_68943 = (inst_68935 + (1));
var tmp69021 = inst_68934;
var tmp69022 = inst_68932;
var tmp69023 = inst_68933;
var inst_68932__$1 = tmp69022;
var inst_68933__$1 = tmp69023;
var inst_68934__$1 = tmp69021;
var inst_68935__$1 = inst_68943;
var state_68991__$1 = (function (){var statearr_69027 = state_68991;
(statearr_69027[(12)] = inst_68934__$1);

(statearr_69027[(17)] = inst_68942);

(statearr_69027[(13)] = inst_68932__$1);

(statearr_69027[(14)] = inst_68933__$1);

(statearr_69027[(16)] = inst_68935__$1);

return statearr_69027;
})();
var statearr_69028_69064 = state_68991__$1;
(statearr_69028_69064[(2)] = null);

(statearr_69028_69064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (18))){
var inst_68961 = (state_68991[(2)]);
var state_68991__$1 = state_68991;
var statearr_69029_69065 = state_68991__$1;
(statearr_69029_69065[(2)] = inst_68961);

(statearr_69029_69065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68992 === (8))){
var inst_68934 = (state_68991[(12)]);
var inst_68935 = (state_68991[(16)]);
var inst_68937 = (inst_68935 < inst_68934);
var inst_68938 = inst_68937;
var state_68991__$1 = state_68991;
if(cljs.core.truth_(inst_68938)){
var statearr_69030_69066 = state_68991__$1;
(statearr_69030_69066[(1)] = (10));

} else {
var statearr_69031_69067 = state_68991__$1;
(statearr_69031_69067[(1)] = (11));

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
});})(c__7050__auto___69039,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___69039,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69035[(0)] = state_machine__6995__auto__);

(statearr_69035[(1)] = (1));

return statearr_69035;
});
var state_machine__6995__auto____1 = (function (state_68991){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_68991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69036){if((e69036 instanceof Object)){
var ex__6998__auto__ = e69036;
var statearr_69037_69068 = state_68991;
(statearr_69037_69068[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69069 = state_68991;
state_68991 = G__69069;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_68991){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_68991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69039,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_69038 = f__7051__auto__.call(null);
(statearr_69038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69039);

return statearr_69038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69039,mults,ensure_mult,p))
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
var c__7050__auto___69206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_69176){
var state_val_69177 = (state_69176[(1)]);
if((state_val_69177 === (7))){
var state_69176__$1 = state_69176;
var statearr_69178_69207 = state_69176__$1;
(statearr_69178_69207[(2)] = null);

(statearr_69178_69207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (1))){
var state_69176__$1 = state_69176;
var statearr_69179_69208 = state_69176__$1;
(statearr_69179_69208[(2)] = null);

(statearr_69179_69208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (4))){
var inst_69140 = (state_69176[(7)]);
var inst_69142 = (inst_69140 < cnt);
var state_69176__$1 = state_69176;
if(cljs.core.truth_(inst_69142)){
var statearr_69180_69209 = state_69176__$1;
(statearr_69180_69209[(1)] = (6));

} else {
var statearr_69181_69210 = state_69176__$1;
(statearr_69181_69210[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (15))){
var inst_69172 = (state_69176[(2)]);
var state_69176__$1 = state_69176;
var statearr_69182_69211 = state_69176__$1;
(statearr_69182_69211[(2)] = inst_69172);

(statearr_69182_69211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (13))){
var inst_69165 = cljs.core.async.close_BANG_.call(null,out);
var state_69176__$1 = state_69176;
var statearr_69183_69212 = state_69176__$1;
(statearr_69183_69212[(2)] = inst_69165);

(statearr_69183_69212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (6))){
var state_69176__$1 = state_69176;
var statearr_69184_69213 = state_69176__$1;
(statearr_69184_69213[(2)] = null);

(statearr_69184_69213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (3))){
var inst_69174 = (state_69176[(2)]);
var state_69176__$1 = state_69176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69176__$1,inst_69174);
} else {
if((state_val_69177 === (12))){
var inst_69162 = (state_69176[(8)]);
var inst_69162__$1 = (state_69176[(2)]);
var inst_69163 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_69162__$1);
var state_69176__$1 = (function (){var statearr_69185 = state_69176;
(statearr_69185[(8)] = inst_69162__$1);

return statearr_69185;
})();
if(cljs.core.truth_(inst_69163)){
var statearr_69186_69214 = state_69176__$1;
(statearr_69186_69214[(1)] = (13));

} else {
var statearr_69187_69215 = state_69176__$1;
(statearr_69187_69215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (2))){
var inst_69139 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_69140 = (0);
var state_69176__$1 = (function (){var statearr_69188 = state_69176;
(statearr_69188[(7)] = inst_69140);

(statearr_69188[(9)] = inst_69139);

return statearr_69188;
})();
var statearr_69189_69216 = state_69176__$1;
(statearr_69189_69216[(2)] = null);

(statearr_69189_69216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (11))){
var inst_69140 = (state_69176[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_69176,(10),Object,null,(9));
var inst_69149 = chs__$1.call(null,inst_69140);
var inst_69150 = done.call(null,inst_69140);
var inst_69151 = cljs.core.async.take_BANG_.call(null,inst_69149,inst_69150);
var state_69176__$1 = state_69176;
var statearr_69190_69217 = state_69176__$1;
(statearr_69190_69217[(2)] = inst_69151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (9))){
var inst_69140 = (state_69176[(7)]);
var inst_69153 = (state_69176[(2)]);
var inst_69154 = (inst_69140 + (1));
var inst_69140__$1 = inst_69154;
var state_69176__$1 = (function (){var statearr_69191 = state_69176;
(statearr_69191[(10)] = inst_69153);

(statearr_69191[(7)] = inst_69140__$1);

return statearr_69191;
})();
var statearr_69192_69218 = state_69176__$1;
(statearr_69192_69218[(2)] = null);

(statearr_69192_69218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (5))){
var inst_69160 = (state_69176[(2)]);
var state_69176__$1 = (function (){var statearr_69193 = state_69176;
(statearr_69193[(11)] = inst_69160);

return statearr_69193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69176__$1,(12),dchan);
} else {
if((state_val_69177 === (14))){
var inst_69162 = (state_69176[(8)]);
var inst_69167 = cljs.core.apply.call(null,f,inst_69162);
var state_69176__$1 = state_69176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69176__$1,(16),out,inst_69167);
} else {
if((state_val_69177 === (16))){
var inst_69169 = (state_69176[(2)]);
var state_69176__$1 = (function (){var statearr_69194 = state_69176;
(statearr_69194[(12)] = inst_69169);

return statearr_69194;
})();
var statearr_69195_69219 = state_69176__$1;
(statearr_69195_69219[(2)] = null);

(statearr_69195_69219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (10))){
var inst_69144 = (state_69176[(2)]);
var inst_69145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_69176__$1 = (function (){var statearr_69196 = state_69176;
(statearr_69196[(13)] = inst_69144);

return statearr_69196;
})();
var statearr_69197_69220 = state_69176__$1;
(statearr_69197_69220[(2)] = inst_69145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69177 === (8))){
var inst_69158 = (state_69176[(2)]);
var state_69176__$1 = state_69176;
var statearr_69198_69221 = state_69176__$1;
(statearr_69198_69221[(2)] = inst_69158);

(statearr_69198_69221[(1)] = (5));


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
});})(c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69202[(0)] = state_machine__6995__auto__);

(statearr_69202[(1)] = (1));

return statearr_69202;
});
var state_machine__6995__auto____1 = (function (state_69176){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69203){if((e69203 instanceof Object)){
var ex__6998__auto__ = e69203;
var statearr_69204_69222 = state_69176;
(statearr_69204_69222[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69223 = state_69176;
state_69176 = G__69223;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69176){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_69205 = f__7051__auto__.call(null);
(statearr_69205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69206);

return statearr_69205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69206,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___69331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69331,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69331,out){
return (function (state_69307){
var state_val_69308 = (state_69307[(1)]);
if((state_val_69308 === (7))){
var inst_69286 = (state_69307[(7)]);
var inst_69287 = (state_69307[(8)]);
var inst_69286__$1 = (state_69307[(2)]);
var inst_69287__$1 = cljs.core.nth.call(null,inst_69286__$1,(0),null);
var inst_69288 = cljs.core.nth.call(null,inst_69286__$1,(1),null);
var inst_69289 = (inst_69287__$1 == null);
var state_69307__$1 = (function (){var statearr_69309 = state_69307;
(statearr_69309[(7)] = inst_69286__$1);

(statearr_69309[(9)] = inst_69288);

(statearr_69309[(8)] = inst_69287__$1);

return statearr_69309;
})();
if(cljs.core.truth_(inst_69289)){
var statearr_69310_69332 = state_69307__$1;
(statearr_69310_69332[(1)] = (8));

} else {
var statearr_69311_69333 = state_69307__$1;
(statearr_69311_69333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (1))){
var inst_69278 = cljs.core.vec.call(null,chs);
var inst_69279 = inst_69278;
var state_69307__$1 = (function (){var statearr_69312 = state_69307;
(statearr_69312[(10)] = inst_69279);

return statearr_69312;
})();
var statearr_69313_69334 = state_69307__$1;
(statearr_69313_69334[(2)] = null);

(statearr_69313_69334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (4))){
var inst_69279 = (state_69307[(10)]);
var state_69307__$1 = state_69307;
return cljs.core.async.ioc_alts_BANG_.call(null,state_69307__$1,(7),inst_69279);
} else {
if((state_val_69308 === (6))){
var inst_69303 = (state_69307[(2)]);
var state_69307__$1 = state_69307;
var statearr_69314_69335 = state_69307__$1;
(statearr_69314_69335[(2)] = inst_69303);

(statearr_69314_69335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (3))){
var inst_69305 = (state_69307[(2)]);
var state_69307__$1 = state_69307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69307__$1,inst_69305);
} else {
if((state_val_69308 === (2))){
var inst_69279 = (state_69307[(10)]);
var inst_69281 = cljs.core.count.call(null,inst_69279);
var inst_69282 = (inst_69281 > (0));
var state_69307__$1 = state_69307;
if(cljs.core.truth_(inst_69282)){
var statearr_69316_69336 = state_69307__$1;
(statearr_69316_69336[(1)] = (4));

} else {
var statearr_69317_69337 = state_69307__$1;
(statearr_69317_69337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (11))){
var inst_69279 = (state_69307[(10)]);
var inst_69296 = (state_69307[(2)]);
var tmp69315 = inst_69279;
var inst_69279__$1 = tmp69315;
var state_69307__$1 = (function (){var statearr_69318 = state_69307;
(statearr_69318[(10)] = inst_69279__$1);

(statearr_69318[(11)] = inst_69296);

return statearr_69318;
})();
var statearr_69319_69338 = state_69307__$1;
(statearr_69319_69338[(2)] = null);

(statearr_69319_69338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (9))){
var inst_69287 = (state_69307[(8)]);
var state_69307__$1 = state_69307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69307__$1,(11),out,inst_69287);
} else {
if((state_val_69308 === (5))){
var inst_69301 = cljs.core.async.close_BANG_.call(null,out);
var state_69307__$1 = state_69307;
var statearr_69320_69339 = state_69307__$1;
(statearr_69320_69339[(2)] = inst_69301);

(statearr_69320_69339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (10))){
var inst_69299 = (state_69307[(2)]);
var state_69307__$1 = state_69307;
var statearr_69321_69340 = state_69307__$1;
(statearr_69321_69340[(2)] = inst_69299);

(statearr_69321_69340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69308 === (8))){
var inst_69286 = (state_69307[(7)]);
var inst_69288 = (state_69307[(9)]);
var inst_69279 = (state_69307[(10)]);
var inst_69287 = (state_69307[(8)]);
var inst_69291 = (function (){var c = inst_69288;
var v = inst_69287;
var vec__69284 = inst_69286;
var cs = inst_69279;
return ((function (c,v,vec__69284,cs,inst_69286,inst_69288,inst_69279,inst_69287,state_val_69308,c__7050__auto___69331,out){
return (function (p1__69224_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__69224_SHARP_);
});
;})(c,v,vec__69284,cs,inst_69286,inst_69288,inst_69279,inst_69287,state_val_69308,c__7050__auto___69331,out))
})();
var inst_69292 = cljs.core.filterv.call(null,inst_69291,inst_69279);
var inst_69279__$1 = inst_69292;
var state_69307__$1 = (function (){var statearr_69322 = state_69307;
(statearr_69322[(10)] = inst_69279__$1);

return statearr_69322;
})();
var statearr_69323_69341 = state_69307__$1;
(statearr_69323_69341[(2)] = null);

(statearr_69323_69341[(1)] = (2));


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
});})(c__7050__auto___69331,out))
;
return ((function (switch__6994__auto__,c__7050__auto___69331,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69327[(0)] = state_machine__6995__auto__);

(statearr_69327[(1)] = (1));

return statearr_69327;
});
var state_machine__6995__auto____1 = (function (state_69307){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69328){if((e69328 instanceof Object)){
var ex__6998__auto__ = e69328;
var statearr_69329_69342 = state_69307;
(statearr_69329_69342[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69343 = state_69307;
state_69307 = G__69343;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69307){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69331,out))
})();
var state__7052__auto__ = (function (){var statearr_69330 = f__7051__auto__.call(null);
(statearr_69330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69331);

return statearr_69330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69331,out))
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
var c__7050__auto___69436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69436,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69436,out){
return (function (state_69413){
var state_val_69414 = (state_69413[(1)]);
if((state_val_69414 === (7))){
var inst_69395 = (state_69413[(7)]);
var inst_69395__$1 = (state_69413[(2)]);
var inst_69396 = (inst_69395__$1 == null);
var inst_69397 = cljs.core.not.call(null,inst_69396);
var state_69413__$1 = (function (){var statearr_69415 = state_69413;
(statearr_69415[(7)] = inst_69395__$1);

return statearr_69415;
})();
if(inst_69397){
var statearr_69416_69437 = state_69413__$1;
(statearr_69416_69437[(1)] = (8));

} else {
var statearr_69417_69438 = state_69413__$1;
(statearr_69417_69438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (1))){
var inst_69390 = (0);
var state_69413__$1 = (function (){var statearr_69418 = state_69413;
(statearr_69418[(8)] = inst_69390);

return statearr_69418;
})();
var statearr_69419_69439 = state_69413__$1;
(statearr_69419_69439[(2)] = null);

(statearr_69419_69439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (4))){
var state_69413__$1 = state_69413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69413__$1,(7),ch);
} else {
if((state_val_69414 === (6))){
var inst_69408 = (state_69413[(2)]);
var state_69413__$1 = state_69413;
var statearr_69420_69440 = state_69413__$1;
(statearr_69420_69440[(2)] = inst_69408);

(statearr_69420_69440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (3))){
var inst_69410 = (state_69413[(2)]);
var inst_69411 = cljs.core.async.close_BANG_.call(null,out);
var state_69413__$1 = (function (){var statearr_69421 = state_69413;
(statearr_69421[(9)] = inst_69410);

return statearr_69421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69413__$1,inst_69411);
} else {
if((state_val_69414 === (2))){
var inst_69390 = (state_69413[(8)]);
var inst_69392 = (inst_69390 < n);
var state_69413__$1 = state_69413;
if(cljs.core.truth_(inst_69392)){
var statearr_69422_69441 = state_69413__$1;
(statearr_69422_69441[(1)] = (4));

} else {
var statearr_69423_69442 = state_69413__$1;
(statearr_69423_69442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (11))){
var inst_69390 = (state_69413[(8)]);
var inst_69400 = (state_69413[(2)]);
var inst_69401 = (inst_69390 + (1));
var inst_69390__$1 = inst_69401;
var state_69413__$1 = (function (){var statearr_69424 = state_69413;
(statearr_69424[(8)] = inst_69390__$1);

(statearr_69424[(10)] = inst_69400);

return statearr_69424;
})();
var statearr_69425_69443 = state_69413__$1;
(statearr_69425_69443[(2)] = null);

(statearr_69425_69443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (9))){
var state_69413__$1 = state_69413;
var statearr_69426_69444 = state_69413__$1;
(statearr_69426_69444[(2)] = null);

(statearr_69426_69444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (5))){
var state_69413__$1 = state_69413;
var statearr_69427_69445 = state_69413__$1;
(statearr_69427_69445[(2)] = null);

(statearr_69427_69445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (10))){
var inst_69405 = (state_69413[(2)]);
var state_69413__$1 = state_69413;
var statearr_69428_69446 = state_69413__$1;
(statearr_69428_69446[(2)] = inst_69405);

(statearr_69428_69446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69414 === (8))){
var inst_69395 = (state_69413[(7)]);
var state_69413__$1 = state_69413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69413__$1,(11),out,inst_69395);
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
});})(c__7050__auto___69436,out))
;
return ((function (switch__6994__auto__,c__7050__auto___69436,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69432[(0)] = state_machine__6995__auto__);

(statearr_69432[(1)] = (1));

return statearr_69432;
});
var state_machine__6995__auto____1 = (function (state_69413){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69433){if((e69433 instanceof Object)){
var ex__6998__auto__ = e69433;
var statearr_69434_69447 = state_69413;
(statearr_69434_69447[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69448 = state_69413;
state_69413 = G__69448;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69413){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69436,out))
})();
var state__7052__auto__ = (function (){var statearr_69435 = f__7051__auto__.call(null);
(statearr_69435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69436);

return statearr_69435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69436,out))
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
if(typeof cljs.core.async.t69456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69456 = (function (ch,f,map_LT_,meta69457){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta69457 = meta69457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t69459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69459 = (function (fn1,_,meta69457,map_LT_,f,ch,meta69460){
this.fn1 = fn1;
this._ = _;
this.meta69457 = meta69457;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta69460 = meta69460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69459.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t69459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t69459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__69449_SHARP_){
return f1.call(null,(((p1__69449_SHARP_ == null))?null:self__.f.call(null,p1__69449_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t69459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_69461){
var self__ = this;
var _69461__$1 = this;
return self__.meta69460;
});})(___$1))
;

cljs.core.async.t69459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_69461,meta69460__$1){
var self__ = this;
var _69461__$1 = this;
return (new cljs.core.async.t69459(self__.fn1,self__._,self__.meta69457,self__.map_LT_,self__.f,self__.ch,meta69460__$1));
});})(___$1))
;

cljs.core.async.t69459.cljs$lang$type = true;

cljs.core.async.t69459.cljs$lang$ctorStr = "cljs.core.async/t69459";

cljs.core.async.t69459.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t69459");
});})(___$1))
;

cljs.core.async.__GT_t69459 = ((function (___$1){
return (function __GT_t69459(fn1__$1,___$2,meta69457__$1,map_LT___$1,f__$1,ch__$1,meta69460){
return (new cljs.core.async.t69459(fn1__$1,___$2,meta69457__$1,map_LT___$1,f__$1,ch__$1,meta69460));
});})(___$1))
;

}

return (new cljs.core.async.t69459(fn1,___$1,self__.meta69457,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t69456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t69456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69458){
var self__ = this;
var _69458__$1 = this;
return self__.meta69457;
});

cljs.core.async.t69456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69458,meta69457__$1){
var self__ = this;
var _69458__$1 = this;
return (new cljs.core.async.t69456(self__.ch,self__.f,self__.map_LT_,meta69457__$1));
});

cljs.core.async.t69456.cljs$lang$type = true;

cljs.core.async.t69456.cljs$lang$ctorStr = "cljs.core.async/t69456";

cljs.core.async.t69456.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t69456");
});

cljs.core.async.__GT_t69456 = (function __GT_t69456(ch__$1,f__$1,map_LT___$1,meta69457){
return (new cljs.core.async.t69456(ch__$1,f__$1,map_LT___$1,meta69457));
});

}

return (new cljs.core.async.t69456(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t69465 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69465 = (function (ch,f,map_GT_,meta69466){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta69466 = meta69466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t69465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t69465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69467){
var self__ = this;
var _69467__$1 = this;
return self__.meta69466;
});

cljs.core.async.t69465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69467,meta69466__$1){
var self__ = this;
var _69467__$1 = this;
return (new cljs.core.async.t69465(self__.ch,self__.f,self__.map_GT_,meta69466__$1));
});

cljs.core.async.t69465.cljs$lang$type = true;

cljs.core.async.t69465.cljs$lang$ctorStr = "cljs.core.async/t69465";

cljs.core.async.t69465.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t69465");
});

cljs.core.async.__GT_t69465 = (function __GT_t69465(ch__$1,f__$1,map_GT___$1,meta69466){
return (new cljs.core.async.t69465(ch__$1,f__$1,map_GT___$1,meta69466));
});

}

return (new cljs.core.async.t69465(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t69471 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t69471 = (function (ch,p,filter_GT_,meta69472){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta69472 = meta69472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t69471.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t69471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69473){
var self__ = this;
var _69473__$1 = this;
return self__.meta69472;
});

cljs.core.async.t69471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69473,meta69472__$1){
var self__ = this;
var _69473__$1 = this;
return (new cljs.core.async.t69471(self__.ch,self__.p,self__.filter_GT_,meta69472__$1));
});

cljs.core.async.t69471.cljs$lang$type = true;

cljs.core.async.t69471.cljs$lang$ctorStr = "cljs.core.async/t69471";

cljs.core.async.t69471.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t69471");
});

cljs.core.async.__GT_t69471 = (function __GT_t69471(ch__$1,p__$1,filter_GT___$1,meta69472){
return (new cljs.core.async.t69471(ch__$1,p__$1,filter_GT___$1,meta69472));
});

}

return (new cljs.core.async.t69471(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/simple/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___69556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69556,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69556,out){
return (function (state_69535){
var state_val_69536 = (state_69535[(1)]);
if((state_val_69536 === (7))){
var inst_69531 = (state_69535[(2)]);
var state_69535__$1 = state_69535;
var statearr_69537_69557 = state_69535__$1;
(statearr_69537_69557[(2)] = inst_69531);

(statearr_69537_69557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (1))){
var state_69535__$1 = state_69535;
var statearr_69538_69558 = state_69535__$1;
(statearr_69538_69558[(2)] = null);

(statearr_69538_69558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (4))){
var inst_69517 = (state_69535[(7)]);
var inst_69517__$1 = (state_69535[(2)]);
var inst_69518 = (inst_69517__$1 == null);
var state_69535__$1 = (function (){var statearr_69539 = state_69535;
(statearr_69539[(7)] = inst_69517__$1);

return statearr_69539;
})();
if(cljs.core.truth_(inst_69518)){
var statearr_69540_69559 = state_69535__$1;
(statearr_69540_69559[(1)] = (5));

} else {
var statearr_69541_69560 = state_69535__$1;
(statearr_69541_69560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (6))){
var inst_69517 = (state_69535[(7)]);
var inst_69522 = p.call(null,inst_69517);
var state_69535__$1 = state_69535;
if(cljs.core.truth_(inst_69522)){
var statearr_69542_69561 = state_69535__$1;
(statearr_69542_69561[(1)] = (8));

} else {
var statearr_69543_69562 = state_69535__$1;
(statearr_69543_69562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (3))){
var inst_69533 = (state_69535[(2)]);
var state_69535__$1 = state_69535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69535__$1,inst_69533);
} else {
if((state_val_69536 === (2))){
var state_69535__$1 = state_69535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69535__$1,(4),ch);
} else {
if((state_val_69536 === (11))){
var inst_69525 = (state_69535[(2)]);
var state_69535__$1 = state_69535;
var statearr_69544_69563 = state_69535__$1;
(statearr_69544_69563[(2)] = inst_69525);

(statearr_69544_69563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (9))){
var state_69535__$1 = state_69535;
var statearr_69545_69564 = state_69535__$1;
(statearr_69545_69564[(2)] = null);

(statearr_69545_69564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (5))){
var inst_69520 = cljs.core.async.close_BANG_.call(null,out);
var state_69535__$1 = state_69535;
var statearr_69546_69565 = state_69535__$1;
(statearr_69546_69565[(2)] = inst_69520);

(statearr_69546_69565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (10))){
var inst_69528 = (state_69535[(2)]);
var state_69535__$1 = (function (){var statearr_69547 = state_69535;
(statearr_69547[(8)] = inst_69528);

return statearr_69547;
})();
var statearr_69548_69566 = state_69535__$1;
(statearr_69548_69566[(2)] = null);

(statearr_69548_69566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (8))){
var inst_69517 = (state_69535[(7)]);
var state_69535__$1 = state_69535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69535__$1,(11),out,inst_69517);
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
});})(c__7050__auto___69556,out))
;
return ((function (switch__6994__auto__,c__7050__auto___69556,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69552 = [null,null,null,null,null,null,null,null,null];
(statearr_69552[(0)] = state_machine__6995__auto__);

(statearr_69552[(1)] = (1));

return statearr_69552;
});
var state_machine__6995__auto____1 = (function (state_69535){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69553){if((e69553 instanceof Object)){
var ex__6998__auto__ = e69553;
var statearr_69554_69567 = state_69535;
(statearr_69554_69567[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69568 = state_69535;
state_69535 = G__69568;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69535){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69556,out))
})();
var state__7052__auto__ = (function (){var statearr_69555 = f__7051__auto__.call(null);
(statearr_69555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69556);

return statearr_69555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69556,out))
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
return (function (state_69734){
var state_val_69735 = (state_69734[(1)]);
if((state_val_69735 === (7))){
var inst_69730 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
var statearr_69736_69777 = state_69734__$1;
(statearr_69736_69777[(2)] = inst_69730);

(statearr_69736_69777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (20))){
var inst_69700 = (state_69734[(7)]);
var inst_69711 = (state_69734[(2)]);
var inst_69712 = cljs.core.next.call(null,inst_69700);
var inst_69686 = inst_69712;
var inst_69687 = null;
var inst_69688 = (0);
var inst_69689 = (0);
var state_69734__$1 = (function (){var statearr_69737 = state_69734;
(statearr_69737[(8)] = inst_69711);

(statearr_69737[(9)] = inst_69688);

(statearr_69737[(10)] = inst_69686);

(statearr_69737[(11)] = inst_69687);

(statearr_69737[(12)] = inst_69689);

return statearr_69737;
})();
var statearr_69738_69778 = state_69734__$1;
(statearr_69738_69778[(2)] = null);

(statearr_69738_69778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (1))){
var state_69734__$1 = state_69734;
var statearr_69739_69779 = state_69734__$1;
(statearr_69739_69779[(2)] = null);

(statearr_69739_69779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (4))){
var inst_69675 = (state_69734[(13)]);
var inst_69675__$1 = (state_69734[(2)]);
var inst_69676 = (inst_69675__$1 == null);
var state_69734__$1 = (function (){var statearr_69740 = state_69734;
(statearr_69740[(13)] = inst_69675__$1);

return statearr_69740;
})();
if(cljs.core.truth_(inst_69676)){
var statearr_69741_69780 = state_69734__$1;
(statearr_69741_69780[(1)] = (5));

} else {
var statearr_69742_69781 = state_69734__$1;
(statearr_69742_69781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (15))){
var state_69734__$1 = state_69734;
var statearr_69746_69782 = state_69734__$1;
(statearr_69746_69782[(2)] = null);

(statearr_69746_69782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (21))){
var state_69734__$1 = state_69734;
var statearr_69747_69783 = state_69734__$1;
(statearr_69747_69783[(2)] = null);

(statearr_69747_69783[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (13))){
var inst_69688 = (state_69734[(9)]);
var inst_69686 = (state_69734[(10)]);
var inst_69687 = (state_69734[(11)]);
var inst_69689 = (state_69734[(12)]);
var inst_69696 = (state_69734[(2)]);
var inst_69697 = (inst_69689 + (1));
var tmp69743 = inst_69688;
var tmp69744 = inst_69686;
var tmp69745 = inst_69687;
var inst_69686__$1 = tmp69744;
var inst_69687__$1 = tmp69745;
var inst_69688__$1 = tmp69743;
var inst_69689__$1 = inst_69697;
var state_69734__$1 = (function (){var statearr_69748 = state_69734;
(statearr_69748[(9)] = inst_69688__$1);

(statearr_69748[(10)] = inst_69686__$1);

(statearr_69748[(11)] = inst_69687__$1);

(statearr_69748[(14)] = inst_69696);

(statearr_69748[(12)] = inst_69689__$1);

return statearr_69748;
})();
var statearr_69749_69784 = state_69734__$1;
(statearr_69749_69784[(2)] = null);

(statearr_69749_69784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (22))){
var state_69734__$1 = state_69734;
var statearr_69750_69785 = state_69734__$1;
(statearr_69750_69785[(2)] = null);

(statearr_69750_69785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (6))){
var inst_69675 = (state_69734[(13)]);
var inst_69684 = f.call(null,inst_69675);
var inst_69685 = cljs.core.seq.call(null,inst_69684);
var inst_69686 = inst_69685;
var inst_69687 = null;
var inst_69688 = (0);
var inst_69689 = (0);
var state_69734__$1 = (function (){var statearr_69751 = state_69734;
(statearr_69751[(9)] = inst_69688);

(statearr_69751[(10)] = inst_69686);

(statearr_69751[(11)] = inst_69687);

(statearr_69751[(12)] = inst_69689);

return statearr_69751;
})();
var statearr_69752_69786 = state_69734__$1;
(statearr_69752_69786[(2)] = null);

(statearr_69752_69786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (17))){
var inst_69700 = (state_69734[(7)]);
var inst_69704 = cljs.core.chunk_first.call(null,inst_69700);
var inst_69705 = cljs.core.chunk_rest.call(null,inst_69700);
var inst_69706 = cljs.core.count.call(null,inst_69704);
var inst_69686 = inst_69705;
var inst_69687 = inst_69704;
var inst_69688 = inst_69706;
var inst_69689 = (0);
var state_69734__$1 = (function (){var statearr_69753 = state_69734;
(statearr_69753[(9)] = inst_69688);

(statearr_69753[(10)] = inst_69686);

(statearr_69753[(11)] = inst_69687);

(statearr_69753[(12)] = inst_69689);

return statearr_69753;
})();
var statearr_69754_69787 = state_69734__$1;
(statearr_69754_69787[(2)] = null);

(statearr_69754_69787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (3))){
var inst_69732 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69734__$1,inst_69732);
} else {
if((state_val_69735 === (12))){
var inst_69720 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
var statearr_69755_69788 = state_69734__$1;
(statearr_69755_69788[(2)] = inst_69720);

(statearr_69755_69788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (2))){
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69734__$1,(4),in$);
} else {
if((state_val_69735 === (23))){
var inst_69728 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
var statearr_69756_69789 = state_69734__$1;
(statearr_69756_69789[(2)] = inst_69728);

(statearr_69756_69789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (19))){
var inst_69715 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
var statearr_69757_69790 = state_69734__$1;
(statearr_69757_69790[(2)] = inst_69715);

(statearr_69757_69790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (11))){
var inst_69686 = (state_69734[(10)]);
var inst_69700 = (state_69734[(7)]);
var inst_69700__$1 = cljs.core.seq.call(null,inst_69686);
var state_69734__$1 = (function (){var statearr_69758 = state_69734;
(statearr_69758[(7)] = inst_69700__$1);

return statearr_69758;
})();
if(inst_69700__$1){
var statearr_69759_69791 = state_69734__$1;
(statearr_69759_69791[(1)] = (14));

} else {
var statearr_69760_69792 = state_69734__$1;
(statearr_69760_69792[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (9))){
var inst_69722 = (state_69734[(2)]);
var inst_69723 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_69734__$1 = (function (){var statearr_69761 = state_69734;
(statearr_69761[(15)] = inst_69722);

return statearr_69761;
})();
if(cljs.core.truth_(inst_69723)){
var statearr_69762_69793 = state_69734__$1;
(statearr_69762_69793[(1)] = (21));

} else {
var statearr_69763_69794 = state_69734__$1;
(statearr_69763_69794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (5))){
var inst_69678 = cljs.core.async.close_BANG_.call(null,out);
var state_69734__$1 = state_69734;
var statearr_69764_69795 = state_69734__$1;
(statearr_69764_69795[(2)] = inst_69678);

(statearr_69764_69795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (14))){
var inst_69700 = (state_69734[(7)]);
var inst_69702 = cljs.core.chunked_seq_QMARK_.call(null,inst_69700);
var state_69734__$1 = state_69734;
if(inst_69702){
var statearr_69765_69796 = state_69734__$1;
(statearr_69765_69796[(1)] = (17));

} else {
var statearr_69766_69797 = state_69734__$1;
(statearr_69766_69797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (16))){
var inst_69718 = (state_69734[(2)]);
var state_69734__$1 = state_69734;
var statearr_69767_69798 = state_69734__$1;
(statearr_69767_69798[(2)] = inst_69718);

(statearr_69767_69798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69735 === (10))){
var inst_69687 = (state_69734[(11)]);
var inst_69689 = (state_69734[(12)]);
var inst_69694 = cljs.core._nth.call(null,inst_69687,inst_69689);
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69734__$1,(13),out,inst_69694);
} else {
if((state_val_69735 === (18))){
var inst_69700 = (state_69734[(7)]);
var inst_69709 = cljs.core.first.call(null,inst_69700);
var state_69734__$1 = state_69734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69734__$1,(20),out,inst_69709);
} else {
if((state_val_69735 === (8))){
var inst_69688 = (state_69734[(9)]);
var inst_69689 = (state_69734[(12)]);
var inst_69691 = (inst_69689 < inst_69688);
var inst_69692 = inst_69691;
var state_69734__$1 = state_69734;
if(cljs.core.truth_(inst_69692)){
var statearr_69768_69799 = state_69734__$1;
(statearr_69768_69799[(1)] = (10));

} else {
var statearr_69769_69800 = state_69734__$1;
(statearr_69769_69800[(1)] = (11));

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
var statearr_69773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69773[(0)] = state_machine__6995__auto__);

(statearr_69773[(1)] = (1));

return statearr_69773;
});
var state_machine__6995__auto____1 = (function (state_69734){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69774){if((e69774 instanceof Object)){
var ex__6998__auto__ = e69774;
var statearr_69775_69801 = state_69734;
(statearr_69775_69801[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69802 = state_69734;
state_69734 = G__69802;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69734){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_69776 = f__7051__auto__.call(null);
(statearr_69776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_69776;
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
var c__7050__auto___69899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___69899,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___69899,out){
return (function (state_69874){
var state_val_69875 = (state_69874[(1)]);
if((state_val_69875 === (7))){
var inst_69869 = (state_69874[(2)]);
var state_69874__$1 = state_69874;
var statearr_69876_69900 = state_69874__$1;
(statearr_69876_69900[(2)] = inst_69869);

(statearr_69876_69900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (1))){
var inst_69851 = null;
var state_69874__$1 = (function (){var statearr_69877 = state_69874;
(statearr_69877[(7)] = inst_69851);

return statearr_69877;
})();
var statearr_69878_69901 = state_69874__$1;
(statearr_69878_69901[(2)] = null);

(statearr_69878_69901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (4))){
var inst_69854 = (state_69874[(8)]);
var inst_69854__$1 = (state_69874[(2)]);
var inst_69855 = (inst_69854__$1 == null);
var inst_69856 = cljs.core.not.call(null,inst_69855);
var state_69874__$1 = (function (){var statearr_69879 = state_69874;
(statearr_69879[(8)] = inst_69854__$1);

return statearr_69879;
})();
if(inst_69856){
var statearr_69880_69902 = state_69874__$1;
(statearr_69880_69902[(1)] = (5));

} else {
var statearr_69881_69903 = state_69874__$1;
(statearr_69881_69903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (6))){
var state_69874__$1 = state_69874;
var statearr_69882_69904 = state_69874__$1;
(statearr_69882_69904[(2)] = null);

(statearr_69882_69904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (3))){
var inst_69871 = (state_69874[(2)]);
var inst_69872 = cljs.core.async.close_BANG_.call(null,out);
var state_69874__$1 = (function (){var statearr_69883 = state_69874;
(statearr_69883[(9)] = inst_69871);

return statearr_69883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69874__$1,inst_69872);
} else {
if((state_val_69875 === (2))){
var state_69874__$1 = state_69874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69874__$1,(4),ch);
} else {
if((state_val_69875 === (11))){
var inst_69854 = (state_69874[(8)]);
var inst_69863 = (state_69874[(2)]);
var inst_69851 = inst_69854;
var state_69874__$1 = (function (){var statearr_69884 = state_69874;
(statearr_69884[(10)] = inst_69863);

(statearr_69884[(7)] = inst_69851);

return statearr_69884;
})();
var statearr_69885_69905 = state_69874__$1;
(statearr_69885_69905[(2)] = null);

(statearr_69885_69905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (9))){
var inst_69854 = (state_69874[(8)]);
var state_69874__$1 = state_69874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69874__$1,(11),out,inst_69854);
} else {
if((state_val_69875 === (5))){
var inst_69854 = (state_69874[(8)]);
var inst_69851 = (state_69874[(7)]);
var inst_69858 = cljs.core._EQ_.call(null,inst_69854,inst_69851);
var state_69874__$1 = state_69874;
if(inst_69858){
var statearr_69887_69906 = state_69874__$1;
(statearr_69887_69906[(1)] = (8));

} else {
var statearr_69888_69907 = state_69874__$1;
(statearr_69888_69907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (10))){
var inst_69866 = (state_69874[(2)]);
var state_69874__$1 = state_69874;
var statearr_69889_69908 = state_69874__$1;
(statearr_69889_69908[(2)] = inst_69866);

(statearr_69889_69908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69875 === (8))){
var inst_69851 = (state_69874[(7)]);
var tmp69886 = inst_69851;
var inst_69851__$1 = tmp69886;
var state_69874__$1 = (function (){var statearr_69890 = state_69874;
(statearr_69890[(7)] = inst_69851__$1);

return statearr_69890;
})();
var statearr_69891_69909 = state_69874__$1;
(statearr_69891_69909[(2)] = null);

(statearr_69891_69909[(1)] = (2));


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
});})(c__7050__auto___69899,out))
;
return ((function (switch__6994__auto__,c__7050__auto___69899,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_69895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69895[(0)] = state_machine__6995__auto__);

(statearr_69895[(1)] = (1));

return statearr_69895;
});
var state_machine__6995__auto____1 = (function (state_69874){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_69874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e69896){if((e69896 instanceof Object)){
var ex__6998__auto__ = e69896;
var statearr_69897_69910 = state_69874;
(statearr_69897_69910[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69911 = state_69874;
state_69874 = G__69911;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_69874){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_69874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___69899,out))
})();
var state__7052__auto__ = (function (){var statearr_69898 = f__7051__auto__.call(null);
(statearr_69898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___69899);

return statearr_69898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___69899,out))
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
var c__7050__auto___70046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___70046,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___70046,out){
return (function (state_70016){
var state_val_70017 = (state_70016[(1)]);
if((state_val_70017 === (7))){
var inst_70012 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
var statearr_70018_70047 = state_70016__$1;
(statearr_70018_70047[(2)] = inst_70012);

(statearr_70018_70047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (1))){
var inst_69979 = (new Array(n));
var inst_69980 = inst_69979;
var inst_69981 = (0);
var state_70016__$1 = (function (){var statearr_70019 = state_70016;
(statearr_70019[(7)] = inst_69981);

(statearr_70019[(8)] = inst_69980);

return statearr_70019;
})();
var statearr_70020_70048 = state_70016__$1;
(statearr_70020_70048[(2)] = null);

(statearr_70020_70048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (4))){
var inst_69984 = (state_70016[(9)]);
var inst_69984__$1 = (state_70016[(2)]);
var inst_69985 = (inst_69984__$1 == null);
var inst_69986 = cljs.core.not.call(null,inst_69985);
var state_70016__$1 = (function (){var statearr_70021 = state_70016;
(statearr_70021[(9)] = inst_69984__$1);

return statearr_70021;
})();
if(inst_69986){
var statearr_70022_70049 = state_70016__$1;
(statearr_70022_70049[(1)] = (5));

} else {
var statearr_70023_70050 = state_70016__$1;
(statearr_70023_70050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (15))){
var inst_70006 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
var statearr_70024_70051 = state_70016__$1;
(statearr_70024_70051[(2)] = inst_70006);

(statearr_70024_70051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (13))){
var state_70016__$1 = state_70016;
var statearr_70025_70052 = state_70016__$1;
(statearr_70025_70052[(2)] = null);

(statearr_70025_70052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (6))){
var inst_69981 = (state_70016[(7)]);
var inst_70002 = (inst_69981 > (0));
var state_70016__$1 = state_70016;
if(cljs.core.truth_(inst_70002)){
var statearr_70026_70053 = state_70016__$1;
(statearr_70026_70053[(1)] = (12));

} else {
var statearr_70027_70054 = state_70016__$1;
(statearr_70027_70054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (3))){
var inst_70014 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70016__$1,inst_70014);
} else {
if((state_val_70017 === (12))){
var inst_69980 = (state_70016[(8)]);
var inst_70004 = cljs.core.vec.call(null,inst_69980);
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70016__$1,(15),out,inst_70004);
} else {
if((state_val_70017 === (2))){
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70016__$1,(4),ch);
} else {
if((state_val_70017 === (11))){
var inst_69996 = (state_70016[(2)]);
var inst_69997 = (new Array(n));
var inst_69980 = inst_69997;
var inst_69981 = (0);
var state_70016__$1 = (function (){var statearr_70028 = state_70016;
(statearr_70028[(7)] = inst_69981);

(statearr_70028[(8)] = inst_69980);

(statearr_70028[(10)] = inst_69996);

return statearr_70028;
})();
var statearr_70029_70055 = state_70016__$1;
(statearr_70029_70055[(2)] = null);

(statearr_70029_70055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (9))){
var inst_69980 = (state_70016[(8)]);
var inst_69994 = cljs.core.vec.call(null,inst_69980);
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70016__$1,(11),out,inst_69994);
} else {
if((state_val_70017 === (5))){
var inst_69981 = (state_70016[(7)]);
var inst_69980 = (state_70016[(8)]);
var inst_69984 = (state_70016[(9)]);
var inst_69989 = (state_70016[(11)]);
var inst_69988 = (inst_69980[inst_69981] = inst_69984);
var inst_69989__$1 = (inst_69981 + (1));
var inst_69990 = (inst_69989__$1 < n);
var state_70016__$1 = (function (){var statearr_70030 = state_70016;
(statearr_70030[(12)] = inst_69988);

(statearr_70030[(11)] = inst_69989__$1);

return statearr_70030;
})();
if(cljs.core.truth_(inst_69990)){
var statearr_70031_70056 = state_70016__$1;
(statearr_70031_70056[(1)] = (8));

} else {
var statearr_70032_70057 = state_70016__$1;
(statearr_70032_70057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (14))){
var inst_70009 = (state_70016[(2)]);
var inst_70010 = cljs.core.async.close_BANG_.call(null,out);
var state_70016__$1 = (function (){var statearr_70034 = state_70016;
(statearr_70034[(13)] = inst_70009);

return statearr_70034;
})();
var statearr_70035_70058 = state_70016__$1;
(statearr_70035_70058[(2)] = inst_70010);

(statearr_70035_70058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (10))){
var inst_70000 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
var statearr_70036_70059 = state_70016__$1;
(statearr_70036_70059[(2)] = inst_70000);

(statearr_70036_70059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (8))){
var inst_69980 = (state_70016[(8)]);
var inst_69989 = (state_70016[(11)]);
var tmp70033 = inst_69980;
var inst_69980__$1 = tmp70033;
var inst_69981 = inst_69989;
var state_70016__$1 = (function (){var statearr_70037 = state_70016;
(statearr_70037[(7)] = inst_69981);

(statearr_70037[(8)] = inst_69980__$1);

return statearr_70037;
})();
var statearr_70038_70060 = state_70016__$1;
(statearr_70038_70060[(2)] = null);

(statearr_70038_70060[(1)] = (2));


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
});})(c__7050__auto___70046,out))
;
return ((function (switch__6994__auto__,c__7050__auto___70046,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_70042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70042[(0)] = state_machine__6995__auto__);

(statearr_70042[(1)] = (1));

return statearr_70042;
});
var state_machine__6995__auto____1 = (function (state_70016){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_70016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e70043){if((e70043 instanceof Object)){
var ex__6998__auto__ = e70043;
var statearr_70044_70061 = state_70016;
(statearr_70044_70061[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70062 = state_70016;
state_70016 = G__70062;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_70016){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_70016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___70046,out))
})();
var state__7052__auto__ = (function (){var statearr_70045 = f__7051__auto__.call(null);
(statearr_70045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___70046);

return statearr_70045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___70046,out))
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
var c__7050__auto___70205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___70205,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___70205,out){
return (function (state_70175){
var state_val_70176 = (state_70175[(1)]);
if((state_val_70176 === (7))){
var inst_70171 = (state_70175[(2)]);
var state_70175__$1 = state_70175;
var statearr_70177_70206 = state_70175__$1;
(statearr_70177_70206[(2)] = inst_70171);

(statearr_70177_70206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (1))){
var inst_70134 = [];
var inst_70135 = inst_70134;
var inst_70136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70175__$1 = (function (){var statearr_70178 = state_70175;
(statearr_70178[(7)] = inst_70136);

(statearr_70178[(8)] = inst_70135);

return statearr_70178;
})();
var statearr_70179_70207 = state_70175__$1;
(statearr_70179_70207[(2)] = null);

(statearr_70179_70207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (4))){
var inst_70139 = (state_70175[(9)]);
var inst_70139__$1 = (state_70175[(2)]);
var inst_70140 = (inst_70139__$1 == null);
var inst_70141 = cljs.core.not.call(null,inst_70140);
var state_70175__$1 = (function (){var statearr_70180 = state_70175;
(statearr_70180[(9)] = inst_70139__$1);

return statearr_70180;
})();
if(inst_70141){
var statearr_70181_70208 = state_70175__$1;
(statearr_70181_70208[(1)] = (5));

} else {
var statearr_70182_70209 = state_70175__$1;
(statearr_70182_70209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (15))){
var inst_70165 = (state_70175[(2)]);
var state_70175__$1 = state_70175;
var statearr_70183_70210 = state_70175__$1;
(statearr_70183_70210[(2)] = inst_70165);

(statearr_70183_70210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (13))){
var state_70175__$1 = state_70175;
var statearr_70184_70211 = state_70175__$1;
(statearr_70184_70211[(2)] = null);

(statearr_70184_70211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (6))){
var inst_70135 = (state_70175[(8)]);
var inst_70160 = inst_70135.length;
var inst_70161 = (inst_70160 > (0));
var state_70175__$1 = state_70175;
if(cljs.core.truth_(inst_70161)){
var statearr_70185_70212 = state_70175__$1;
(statearr_70185_70212[(1)] = (12));

} else {
var statearr_70186_70213 = state_70175__$1;
(statearr_70186_70213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (3))){
var inst_70173 = (state_70175[(2)]);
var state_70175__$1 = state_70175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70175__$1,inst_70173);
} else {
if((state_val_70176 === (12))){
var inst_70135 = (state_70175[(8)]);
var inst_70163 = cljs.core.vec.call(null,inst_70135);
var state_70175__$1 = state_70175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70175__$1,(15),out,inst_70163);
} else {
if((state_val_70176 === (2))){
var state_70175__$1 = state_70175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70175__$1,(4),ch);
} else {
if((state_val_70176 === (11))){
var inst_70143 = (state_70175[(10)]);
var inst_70139 = (state_70175[(9)]);
var inst_70153 = (state_70175[(2)]);
var inst_70154 = [];
var inst_70155 = inst_70154.push(inst_70139);
var inst_70135 = inst_70154;
var inst_70136 = inst_70143;
var state_70175__$1 = (function (){var statearr_70187 = state_70175;
(statearr_70187[(11)] = inst_70155);

(statearr_70187[(7)] = inst_70136);

(statearr_70187[(8)] = inst_70135);

(statearr_70187[(12)] = inst_70153);

return statearr_70187;
})();
var statearr_70188_70214 = state_70175__$1;
(statearr_70188_70214[(2)] = null);

(statearr_70188_70214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (9))){
var inst_70135 = (state_70175[(8)]);
var inst_70151 = cljs.core.vec.call(null,inst_70135);
var state_70175__$1 = state_70175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70175__$1,(11),out,inst_70151);
} else {
if((state_val_70176 === (5))){
var inst_70143 = (state_70175[(10)]);
var inst_70136 = (state_70175[(7)]);
var inst_70139 = (state_70175[(9)]);
var inst_70143__$1 = f.call(null,inst_70139);
var inst_70144 = cljs.core._EQ_.call(null,inst_70143__$1,inst_70136);
var inst_70145 = cljs.core.keyword_identical_QMARK_.call(null,inst_70136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70146 = (inst_70144) || (inst_70145);
var state_70175__$1 = (function (){var statearr_70189 = state_70175;
(statearr_70189[(10)] = inst_70143__$1);

return statearr_70189;
})();
if(cljs.core.truth_(inst_70146)){
var statearr_70190_70215 = state_70175__$1;
(statearr_70190_70215[(1)] = (8));

} else {
var statearr_70191_70216 = state_70175__$1;
(statearr_70191_70216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (14))){
var inst_70168 = (state_70175[(2)]);
var inst_70169 = cljs.core.async.close_BANG_.call(null,out);
var state_70175__$1 = (function (){var statearr_70193 = state_70175;
(statearr_70193[(13)] = inst_70168);

return statearr_70193;
})();
var statearr_70194_70217 = state_70175__$1;
(statearr_70194_70217[(2)] = inst_70169);

(statearr_70194_70217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (10))){
var inst_70158 = (state_70175[(2)]);
var state_70175__$1 = state_70175;
var statearr_70195_70218 = state_70175__$1;
(statearr_70195_70218[(2)] = inst_70158);

(statearr_70195_70218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70176 === (8))){
var inst_70143 = (state_70175[(10)]);
var inst_70135 = (state_70175[(8)]);
var inst_70139 = (state_70175[(9)]);
var inst_70148 = inst_70135.push(inst_70139);
var tmp70192 = inst_70135;
var inst_70135__$1 = tmp70192;
var inst_70136 = inst_70143;
var state_70175__$1 = (function (){var statearr_70196 = state_70175;
(statearr_70196[(14)] = inst_70148);

(statearr_70196[(7)] = inst_70136);

(statearr_70196[(8)] = inst_70135__$1);

return statearr_70196;
})();
var statearr_70197_70219 = state_70175__$1;
(statearr_70197_70219[(2)] = null);

(statearr_70197_70219[(1)] = (2));


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
});})(c__7050__auto___70205,out))
;
return ((function (switch__6994__auto__,c__7050__auto___70205,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_70201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70201[(0)] = state_machine__6995__auto__);

(statearr_70201[(1)] = (1));

return statearr_70201;
});
var state_machine__6995__auto____1 = (function (state_70175){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_70175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e70202){if((e70202 instanceof Object)){
var ex__6998__auto__ = e70202;
var statearr_70203_70220 = state_70175;
(statearr_70203_70220[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70221 = state_70175;
state_70175 = G__70221;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_70175){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_70175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___70205,out))
})();
var state__7052__auto__ = (function (){var statearr_70204 = f__7051__auto__.call(null);
(statearr_70204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___70205);

return statearr_70204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___70205,out))
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