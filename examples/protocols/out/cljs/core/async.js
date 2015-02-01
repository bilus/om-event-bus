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
if(typeof cljs.core.async.t48069 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48069 = (function (f,fn_handler,meta48070){
this.f = f;
this.fn_handler = fn_handler;
this.meta48070 = meta48070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48069.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t48069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t48069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48071){
var self__ = this;
var _48071__$1 = this;
return self__.meta48070;
});

cljs.core.async.t48069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48071,meta48070__$1){
var self__ = this;
var _48071__$1 = this;
return (new cljs.core.async.t48069(self__.f,self__.fn_handler,meta48070__$1));
});

cljs.core.async.t48069.cljs$lang$type = true;

cljs.core.async.t48069.cljs$lang$ctorStr = "cljs.core.async/t48069";

cljs.core.async.t48069.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t48069");
});

cljs.core.async.__GT_t48069 = (function __GT_t48069(f__$1,fn_handler__$1,meta48070){
return (new cljs.core.async.t48069(f__$1,fn_handler__$1,meta48070));
});

}

return (new cljs.core.async.t48069(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
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
var G__48073 = buff;
if(G__48073){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__48073.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__48073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48073);
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
var val_48074 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48074);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48074,ret){
return (function (){
return fn1.call(null,val_48074);
});})(val_48074,ret))
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
var n__4517__auto___48075 = n;
var x_48076 = (0);
while(true){
if((x_48076 < n__4517__auto___48075)){
(a[x_48076] = (0));

var G__48077 = (x_48076 + (1));
x_48076 = G__48077;
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

var G__48078 = (i + (1));
i = G__48078;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t48082 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48082 = (function (flag,alt_flag,meta48083){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48083 = meta48083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48082.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t48082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t48082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48084){
var self__ = this;
var _48084__$1 = this;
return self__.meta48083;
});})(flag))
;

cljs.core.async.t48082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48084,meta48083__$1){
var self__ = this;
var _48084__$1 = this;
return (new cljs.core.async.t48082(self__.flag,self__.alt_flag,meta48083__$1));
});})(flag))
;

cljs.core.async.t48082.cljs$lang$type = true;

cljs.core.async.t48082.cljs$lang$ctorStr = "cljs.core.async/t48082";

cljs.core.async.t48082.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t48082");
});})(flag))
;

cljs.core.async.__GT_t48082 = ((function (flag){
return (function __GT_t48082(flag__$1,alt_flag__$1,meta48083){
return (new cljs.core.async.t48082(flag__$1,alt_flag__$1,meta48083));
});})(flag))
;

}

return (new cljs.core.async.t48082(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t48088 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t48088 = (function (cb,flag,alt_handler,meta48089){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48089 = meta48089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48088.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t48088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t48088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t48088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48090){
var self__ = this;
var _48090__$1 = this;
return self__.meta48089;
});

cljs.core.async.t48088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48090,meta48089__$1){
var self__ = this;
var _48090__$1 = this;
return (new cljs.core.async.t48088(self__.cb,self__.flag,self__.alt_handler,meta48089__$1));
});

cljs.core.async.t48088.cljs$lang$type = true;

cljs.core.async.t48088.cljs$lang$ctorStr = "cljs.core.async/t48088";

cljs.core.async.t48088.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t48088");
});

cljs.core.async.__GT_t48088 = (function __GT_t48088(cb__$1,flag__$1,alt_handler__$1,meta48089){
return (new cljs.core.async.t48088(cb__$1,flag__$1,alt_handler__$1,meta48089));
});

}

return (new cljs.core.async.t48088(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
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
return (function (p1__48091_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48091_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48092_SHARP_,port], null));
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
var G__48093 = (i + (1));
i = G__48093;
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
var alts_BANG___delegate = function (ports,p__48094){
var map__48096 = p__48094;
var map__48096__$1 = ((cljs.core.seq_QMARK_.call(null,map__48096))?cljs.core.apply.call(null,cljs.core.hash_map,map__48096):map__48096);
var opts = map__48096__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__48094 = null;
if (arguments.length > 1) {
  p__48094 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__48094);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48097){
var ports = cljs.core.first(arglist__48097);
var p__48094 = cljs.core.rest(arglist__48097);
return alts_BANG___delegate(ports,p__48094);
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
var c__7050__auto___48192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___48192){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___48192){
return (function (state_48168){
var state_val_48169 = (state_48168[(1)]);
if((state_val_48169 === (7))){
var inst_48164 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48170_48193 = state_48168__$1;
(statearr_48170_48193[(2)] = inst_48164);

(statearr_48170_48193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (1))){
var state_48168__$1 = state_48168;
var statearr_48171_48194 = state_48168__$1;
(statearr_48171_48194[(2)] = null);

(statearr_48171_48194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (4))){
var inst_48147 = (state_48168[(7)]);
var inst_48147__$1 = (state_48168[(2)]);
var inst_48148 = (inst_48147__$1 == null);
var state_48168__$1 = (function (){var statearr_48172 = state_48168;
(statearr_48172[(7)] = inst_48147__$1);

return statearr_48172;
})();
if(cljs.core.truth_(inst_48148)){
var statearr_48173_48195 = state_48168__$1;
(statearr_48173_48195[(1)] = (5));

} else {
var statearr_48174_48196 = state_48168__$1;
(statearr_48174_48196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (13))){
var state_48168__$1 = state_48168;
var statearr_48175_48197 = state_48168__$1;
(statearr_48175_48197[(2)] = null);

(statearr_48175_48197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (6))){
var inst_48147 = (state_48168[(7)]);
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48168__$1,(11),to,inst_48147);
} else {
if((state_val_48169 === (3))){
var inst_48166 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48168__$1,inst_48166);
} else {
if((state_val_48169 === (12))){
var state_48168__$1 = state_48168;
var statearr_48176_48198 = state_48168__$1;
(statearr_48176_48198[(2)] = null);

(statearr_48176_48198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (2))){
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48168__$1,(4),from);
} else {
if((state_val_48169 === (11))){
var inst_48157 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
if(cljs.core.truth_(inst_48157)){
var statearr_48177_48199 = state_48168__$1;
(statearr_48177_48199[(1)] = (12));

} else {
var statearr_48178_48200 = state_48168__$1;
(statearr_48178_48200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (9))){
var state_48168__$1 = state_48168;
var statearr_48179_48201 = state_48168__$1;
(statearr_48179_48201[(2)] = null);

(statearr_48179_48201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (5))){
var state_48168__$1 = state_48168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48180_48202 = state_48168__$1;
(statearr_48180_48202[(1)] = (8));

} else {
var statearr_48181_48203 = state_48168__$1;
(statearr_48181_48203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (14))){
var inst_48162 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48182_48204 = state_48168__$1;
(statearr_48182_48204[(2)] = inst_48162);

(statearr_48182_48204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (10))){
var inst_48154 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48183_48205 = state_48168__$1;
(statearr_48183_48205[(2)] = inst_48154);

(statearr_48183_48205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (8))){
var inst_48151 = cljs.core.async.close_BANG_.call(null,to);
var state_48168__$1 = state_48168;
var statearr_48184_48206 = state_48168__$1;
(statearr_48184_48206[(2)] = inst_48151);

(statearr_48184_48206[(1)] = (10));


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
});})(c__7050__auto___48192))
;
return ((function (switch__6994__auto__,c__7050__auto___48192){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48188 = [null,null,null,null,null,null,null,null];
(statearr_48188[(0)] = state_machine__6995__auto__);

(statearr_48188[(1)] = (1));

return statearr_48188;
});
var state_machine__6995__auto____1 = (function (state_48168){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48189){if((e48189 instanceof Object)){
var ex__6998__auto__ = e48189;
var statearr_48190_48207 = state_48168;
(statearr_48190_48207[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48208 = state_48168;
state_48168 = G__48208;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48168){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___48192))
})();
var state__7052__auto__ = (function (){var statearr_48191 = f__7051__auto__.call(null);
(statearr_48191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48192);

return statearr_48191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___48192))
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
return (function (p__48392){
var vec__48393 = p__48392;
var v = cljs.core.nth.call(null,vec__48393,(0),null);
var p = cljs.core.nth.call(null,vec__48393,(1),null);
var job = vec__48393;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7050__auto___48575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results){
return (function (state_48398){
var state_val_48399 = (state_48398[(1)]);
if((state_val_48399 === (2))){
var inst_48395 = (state_48398[(2)]);
var inst_48396 = cljs.core.async.close_BANG_.call(null,res);
var state_48398__$1 = (function (){var statearr_48400 = state_48398;
(statearr_48400[(7)] = inst_48395);

return statearr_48400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48398__$1,inst_48396);
} else {
if((state_val_48399 === (1))){
var state_48398__$1 = state_48398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48398__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results))
;
return ((function (switch__6994__auto__,c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48404 = [null,null,null,null,null,null,null,null];
(statearr_48404[(0)] = state_machine__6995__auto__);

(statearr_48404[(1)] = (1));

return statearr_48404;
});
var state_machine__6995__auto____1 = (function (state_48398){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48405){if((e48405 instanceof Object)){
var ex__6998__auto__ = e48405;
var statearr_48406_48576 = state_48398;
(statearr_48406_48576[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48577 = state_48398;
state_48398 = G__48577;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48398){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results))
})();
var state__7052__auto__ = (function (){var statearr_48407 = f__7051__auto__.call(null);
(statearr_48407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48575);

return statearr_48407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___48575,res,vec__48393,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48408){
var vec__48409 = p__48408;
var v = cljs.core.nth.call(null,vec__48409,(0),null);
var p = cljs.core.nth.call(null,vec__48409,(1),null);
var job = vec__48409;
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
var n__4517__auto___48578 = n;
var __48579 = (0);
while(true){
if((__48579 < n__4517__auto___48578)){
var G__48410_48580 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48410_48580) {
case "async":
var c__7050__auto___48582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48579,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__48579,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function (state_48423){
var state_val_48424 = (state_48423[(1)]);
if((state_val_48424 === (7))){
var inst_48419 = (state_48423[(2)]);
var state_48423__$1 = state_48423;
var statearr_48425_48583 = state_48423__$1;
(statearr_48425_48583[(2)] = inst_48419);

(statearr_48425_48583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48424 === (6))){
var state_48423__$1 = state_48423;
var statearr_48426_48584 = state_48423__$1;
(statearr_48426_48584[(2)] = null);

(statearr_48426_48584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48424 === (5))){
var state_48423__$1 = state_48423;
var statearr_48427_48585 = state_48423__$1;
(statearr_48427_48585[(2)] = null);

(statearr_48427_48585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48424 === (4))){
var inst_48413 = (state_48423[(2)]);
var inst_48414 = async.call(null,inst_48413);
var state_48423__$1 = state_48423;
if(cljs.core.truth_(inst_48414)){
var statearr_48428_48586 = state_48423__$1;
(statearr_48428_48586[(1)] = (5));

} else {
var statearr_48429_48587 = state_48423__$1;
(statearr_48429_48587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48424 === (3))){
var inst_48421 = (state_48423[(2)]);
var state_48423__$1 = state_48423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48423__$1,inst_48421);
} else {
if((state_val_48424 === (2))){
var state_48423__$1 = state_48423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48423__$1,(4),jobs);
} else {
if((state_val_48424 === (1))){
var state_48423__$1 = state_48423;
var statearr_48430_48588 = state_48423__$1;
(statearr_48430_48588[(2)] = null);

(statearr_48430_48588[(1)] = (2));


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
});})(__48579,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
;
return ((function (__48579,switch__6994__auto__,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48434 = [null,null,null,null,null,null,null];
(statearr_48434[(0)] = state_machine__6995__auto__);

(statearr_48434[(1)] = (1));

return statearr_48434;
});
var state_machine__6995__auto____1 = (function (state_48423){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48435){if((e48435 instanceof Object)){
var ex__6998__auto__ = e48435;
var statearr_48436_48589 = state_48423;
(statearr_48436_48589[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48590 = state_48423;
state_48423 = G__48590;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48423){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__48579,switch__6994__auto__,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_48437 = f__7051__auto__.call(null);
(statearr_48437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48582);

return statearr_48437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__48579,c__7050__auto___48582,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
);


break;
case "compute":
var c__7050__auto___48591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48579,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (__48579,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function (state_48450){
var state_val_48451 = (state_48450[(1)]);
if((state_val_48451 === (7))){
var inst_48446 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
var statearr_48452_48592 = state_48450__$1;
(statearr_48452_48592[(2)] = inst_48446);

(statearr_48452_48592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (6))){
var state_48450__$1 = state_48450;
var statearr_48453_48593 = state_48450__$1;
(statearr_48453_48593[(2)] = null);

(statearr_48453_48593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (5))){
var state_48450__$1 = state_48450;
var statearr_48454_48594 = state_48450__$1;
(statearr_48454_48594[(2)] = null);

(statearr_48454_48594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (4))){
var inst_48440 = (state_48450[(2)]);
var inst_48441 = process.call(null,inst_48440);
var state_48450__$1 = state_48450;
if(cljs.core.truth_(inst_48441)){
var statearr_48455_48595 = state_48450__$1;
(statearr_48455_48595[(1)] = (5));

} else {
var statearr_48456_48596 = state_48450__$1;
(statearr_48456_48596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (3))){
var inst_48448 = (state_48450[(2)]);
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48450__$1,inst_48448);
} else {
if((state_val_48451 === (2))){
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48450__$1,(4),jobs);
} else {
if((state_val_48451 === (1))){
var state_48450__$1 = state_48450;
var statearr_48457_48597 = state_48450__$1;
(statearr_48457_48597[(2)] = null);

(statearr_48457_48597[(1)] = (2));


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
});})(__48579,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
;
return ((function (__48579,switch__6994__auto__,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48461 = [null,null,null,null,null,null,null];
(statearr_48461[(0)] = state_machine__6995__auto__);

(statearr_48461[(1)] = (1));

return statearr_48461;
});
var state_machine__6995__auto____1 = (function (state_48450){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48462){if((e48462 instanceof Object)){
var ex__6998__auto__ = e48462;
var statearr_48463_48598 = state_48450;
(statearr_48463_48598[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48599 = state_48450;
state_48450 = G__48599;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48450){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(__48579,switch__6994__auto__,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_48464 = f__7051__auto__.call(null);
(statearr_48464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48591);

return statearr_48464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(__48579,c__7050__auto___48591,G__48410_48580,n__4517__auto___48578,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__48600 = (__48579 + (1));
__48579 = G__48600;
continue;
} else {
}
break;
}

var c__7050__auto___48601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___48601,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___48601,jobs,results,process,async){
return (function (state_48486){
var state_val_48487 = (state_48486[(1)]);
if((state_val_48487 === (9))){
var inst_48479 = (state_48486[(2)]);
var state_48486__$1 = (function (){var statearr_48488 = state_48486;
(statearr_48488[(7)] = inst_48479);

return statearr_48488;
})();
var statearr_48489_48602 = state_48486__$1;
(statearr_48489_48602[(2)] = null);

(statearr_48489_48602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48487 === (8))){
var inst_48472 = (state_48486[(8)]);
var inst_48477 = (state_48486[(2)]);
var state_48486__$1 = (function (){var statearr_48490 = state_48486;
(statearr_48490[(9)] = inst_48477);

return statearr_48490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48486__$1,(9),results,inst_48472);
} else {
if((state_val_48487 === (7))){
var inst_48482 = (state_48486[(2)]);
var state_48486__$1 = state_48486;
var statearr_48491_48603 = state_48486__$1;
(statearr_48491_48603[(2)] = inst_48482);

(statearr_48491_48603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48487 === (6))){
var inst_48467 = (state_48486[(10)]);
var inst_48472 = (state_48486[(8)]);
var inst_48472__$1 = cljs.core.async.chan.call(null,(1));
var inst_48473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48474 = [inst_48467,inst_48472__$1];
var inst_48475 = (new cljs.core.PersistentVector(null,2,(5),inst_48473,inst_48474,null));
var state_48486__$1 = (function (){var statearr_48492 = state_48486;
(statearr_48492[(8)] = inst_48472__$1);

return statearr_48492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48486__$1,(8),jobs,inst_48475);
} else {
if((state_val_48487 === (5))){
var inst_48470 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48486__$1 = state_48486;
var statearr_48493_48604 = state_48486__$1;
(statearr_48493_48604[(2)] = inst_48470);

(statearr_48493_48604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48487 === (4))){
var inst_48467 = (state_48486[(10)]);
var inst_48467__$1 = (state_48486[(2)]);
var inst_48468 = (inst_48467__$1 == null);
var state_48486__$1 = (function (){var statearr_48494 = state_48486;
(statearr_48494[(10)] = inst_48467__$1);

return statearr_48494;
})();
if(cljs.core.truth_(inst_48468)){
var statearr_48495_48605 = state_48486__$1;
(statearr_48495_48605[(1)] = (5));

} else {
var statearr_48496_48606 = state_48486__$1;
(statearr_48496_48606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48487 === (3))){
var inst_48484 = (state_48486[(2)]);
var state_48486__$1 = state_48486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48486__$1,inst_48484);
} else {
if((state_val_48487 === (2))){
var state_48486__$1 = state_48486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48486__$1,(4),from);
} else {
if((state_val_48487 === (1))){
var state_48486__$1 = state_48486;
var statearr_48497_48607 = state_48486__$1;
(statearr_48497_48607[(2)] = null);

(statearr_48497_48607[(1)] = (2));


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
});})(c__7050__auto___48601,jobs,results,process,async))
;
return ((function (switch__6994__auto__,c__7050__auto___48601,jobs,results,process,async){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48501[(0)] = state_machine__6995__auto__);

(statearr_48501[(1)] = (1));

return statearr_48501;
});
var state_machine__6995__auto____1 = (function (state_48486){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48502){if((e48502 instanceof Object)){
var ex__6998__auto__ = e48502;
var statearr_48503_48608 = state_48486;
(statearr_48503_48608[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48609 = state_48486;
state_48486 = G__48609;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48486){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___48601,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_48504 = f__7051__auto__.call(null);
(statearr_48504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48601);

return statearr_48504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___48601,jobs,results,process,async))
);


var c__7050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto__,jobs,results,process,async){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto__,jobs,results,process,async){
return (function (state_48542){
var state_val_48543 = (state_48542[(1)]);
if((state_val_48543 === (7))){
var inst_48538 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48544_48610 = state_48542__$1;
(statearr_48544_48610[(2)] = inst_48538);

(statearr_48544_48610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (20))){
var state_48542__$1 = state_48542;
var statearr_48545_48611 = state_48542__$1;
(statearr_48545_48611[(2)] = null);

(statearr_48545_48611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (1))){
var state_48542__$1 = state_48542;
var statearr_48546_48612 = state_48542__$1;
(statearr_48546_48612[(2)] = null);

(statearr_48546_48612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (4))){
var inst_48507 = (state_48542[(7)]);
var inst_48507__$1 = (state_48542[(2)]);
var inst_48508 = (inst_48507__$1 == null);
var state_48542__$1 = (function (){var statearr_48547 = state_48542;
(statearr_48547[(7)] = inst_48507__$1);

return statearr_48547;
})();
if(cljs.core.truth_(inst_48508)){
var statearr_48548_48613 = state_48542__$1;
(statearr_48548_48613[(1)] = (5));

} else {
var statearr_48549_48614 = state_48542__$1;
(statearr_48549_48614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (15))){
var inst_48520 = (state_48542[(8)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48542__$1,(18),to,inst_48520);
} else {
if((state_val_48543 === (21))){
var inst_48533 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48550_48615 = state_48542__$1;
(statearr_48550_48615[(2)] = inst_48533);

(statearr_48550_48615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (13))){
var inst_48535 = (state_48542[(2)]);
var state_48542__$1 = (function (){var statearr_48551 = state_48542;
(statearr_48551[(9)] = inst_48535);

return statearr_48551;
})();
var statearr_48552_48616 = state_48542__$1;
(statearr_48552_48616[(2)] = null);

(statearr_48552_48616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (6))){
var inst_48507 = (state_48542[(7)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48542__$1,(11),inst_48507);
} else {
if((state_val_48543 === (17))){
var inst_48528 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
if(cljs.core.truth_(inst_48528)){
var statearr_48553_48617 = state_48542__$1;
(statearr_48553_48617[(1)] = (19));

} else {
var statearr_48554_48618 = state_48542__$1;
(statearr_48554_48618[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (3))){
var inst_48540 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48542__$1,inst_48540);
} else {
if((state_val_48543 === (12))){
var inst_48517 = (state_48542[(10)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48542__$1,(14),inst_48517);
} else {
if((state_val_48543 === (2))){
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48542__$1,(4),results);
} else {
if((state_val_48543 === (19))){
var state_48542__$1 = state_48542;
var statearr_48555_48619 = state_48542__$1;
(statearr_48555_48619[(2)] = null);

(statearr_48555_48619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (11))){
var inst_48517 = (state_48542[(2)]);
var state_48542__$1 = (function (){var statearr_48556 = state_48542;
(statearr_48556[(10)] = inst_48517);

return statearr_48556;
})();
var statearr_48557_48620 = state_48542__$1;
(statearr_48557_48620[(2)] = null);

(statearr_48557_48620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (9))){
var state_48542__$1 = state_48542;
var statearr_48558_48621 = state_48542__$1;
(statearr_48558_48621[(2)] = null);

(statearr_48558_48621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (5))){
var state_48542__$1 = state_48542;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48559_48622 = state_48542__$1;
(statearr_48559_48622[(1)] = (8));

} else {
var statearr_48560_48623 = state_48542__$1;
(statearr_48560_48623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (14))){
var inst_48522 = (state_48542[(11)]);
var inst_48520 = (state_48542[(8)]);
var inst_48520__$1 = (state_48542[(2)]);
var inst_48521 = (inst_48520__$1 == null);
var inst_48522__$1 = cljs.core.not.call(null,inst_48521);
var state_48542__$1 = (function (){var statearr_48561 = state_48542;
(statearr_48561[(11)] = inst_48522__$1);

(statearr_48561[(8)] = inst_48520__$1);

return statearr_48561;
})();
if(inst_48522__$1){
var statearr_48562_48624 = state_48542__$1;
(statearr_48562_48624[(1)] = (15));

} else {
var statearr_48563_48625 = state_48542__$1;
(statearr_48563_48625[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (16))){
var inst_48522 = (state_48542[(11)]);
var state_48542__$1 = state_48542;
var statearr_48564_48626 = state_48542__$1;
(statearr_48564_48626[(2)] = inst_48522);

(statearr_48564_48626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (10))){
var inst_48514 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48565_48627 = state_48542__$1;
(statearr_48565_48627[(2)] = inst_48514);

(statearr_48565_48627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (18))){
var inst_48525 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48566_48628 = state_48542__$1;
(statearr_48566_48628[(2)] = inst_48525);

(statearr_48566_48628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (8))){
var inst_48511 = cljs.core.async.close_BANG_.call(null,to);
var state_48542__$1 = state_48542;
var statearr_48567_48629 = state_48542__$1;
(statearr_48567_48629[(2)] = inst_48511);

(statearr_48567_48629[(1)] = (10));


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
var statearr_48571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48571[(0)] = state_machine__6995__auto__);

(statearr_48571[(1)] = (1));

return statearr_48571;
});
var state_machine__6995__auto____1 = (function (state_48542){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48572){if((e48572 instanceof Object)){
var ex__6998__auto__ = e48572;
var statearr_48573_48630 = state_48542;
(statearr_48573_48630[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48631 = state_48542;
state_48542 = G__48631;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48542){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__,jobs,results,process,async))
})();
var state__7052__auto__ = (function (){var statearr_48574 = f__7051__auto__.call(null);
(statearr_48574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_48574;
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
var c__7050__auto___48732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___48732,tc,fc){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___48732,tc,fc){
return (function (state_48707){
var state_val_48708 = (state_48707[(1)]);
if((state_val_48708 === (7))){
var inst_48703 = (state_48707[(2)]);
var state_48707__$1 = state_48707;
var statearr_48709_48733 = state_48707__$1;
(statearr_48709_48733[(2)] = inst_48703);

(statearr_48709_48733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (1))){
var state_48707__$1 = state_48707;
var statearr_48710_48734 = state_48707__$1;
(statearr_48710_48734[(2)] = null);

(statearr_48710_48734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (4))){
var inst_48684 = (state_48707[(7)]);
var inst_48684__$1 = (state_48707[(2)]);
var inst_48685 = (inst_48684__$1 == null);
var state_48707__$1 = (function (){var statearr_48711 = state_48707;
(statearr_48711[(7)] = inst_48684__$1);

return statearr_48711;
})();
if(cljs.core.truth_(inst_48685)){
var statearr_48712_48735 = state_48707__$1;
(statearr_48712_48735[(1)] = (5));

} else {
var statearr_48713_48736 = state_48707__$1;
(statearr_48713_48736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (13))){
var state_48707__$1 = state_48707;
var statearr_48714_48737 = state_48707__$1;
(statearr_48714_48737[(2)] = null);

(statearr_48714_48737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (6))){
var inst_48684 = (state_48707[(7)]);
var inst_48690 = p.call(null,inst_48684);
var state_48707__$1 = state_48707;
if(cljs.core.truth_(inst_48690)){
var statearr_48715_48738 = state_48707__$1;
(statearr_48715_48738[(1)] = (9));

} else {
var statearr_48716_48739 = state_48707__$1;
(statearr_48716_48739[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (3))){
var inst_48705 = (state_48707[(2)]);
var state_48707__$1 = state_48707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48707__$1,inst_48705);
} else {
if((state_val_48708 === (12))){
var state_48707__$1 = state_48707;
var statearr_48717_48740 = state_48707__$1;
(statearr_48717_48740[(2)] = null);

(statearr_48717_48740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (2))){
var state_48707__$1 = state_48707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48707__$1,(4),ch);
} else {
if((state_val_48708 === (11))){
var inst_48684 = (state_48707[(7)]);
var inst_48694 = (state_48707[(2)]);
var state_48707__$1 = state_48707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48707__$1,(8),inst_48694,inst_48684);
} else {
if((state_val_48708 === (9))){
var state_48707__$1 = state_48707;
var statearr_48718_48741 = state_48707__$1;
(statearr_48718_48741[(2)] = tc);

(statearr_48718_48741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (5))){
var inst_48687 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48688 = cljs.core.async.close_BANG_.call(null,fc);
var state_48707__$1 = (function (){var statearr_48719 = state_48707;
(statearr_48719[(8)] = inst_48687);

return statearr_48719;
})();
var statearr_48720_48742 = state_48707__$1;
(statearr_48720_48742[(2)] = inst_48688);

(statearr_48720_48742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (14))){
var inst_48701 = (state_48707[(2)]);
var state_48707__$1 = state_48707;
var statearr_48721_48743 = state_48707__$1;
(statearr_48721_48743[(2)] = inst_48701);

(statearr_48721_48743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (10))){
var state_48707__$1 = state_48707;
var statearr_48722_48744 = state_48707__$1;
(statearr_48722_48744[(2)] = fc);

(statearr_48722_48744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48708 === (8))){
var inst_48696 = (state_48707[(2)]);
var state_48707__$1 = state_48707;
if(cljs.core.truth_(inst_48696)){
var statearr_48723_48745 = state_48707__$1;
(statearr_48723_48745[(1)] = (12));

} else {
var statearr_48724_48746 = state_48707__$1;
(statearr_48724_48746[(1)] = (13));

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
});})(c__7050__auto___48732,tc,fc))
;
return ((function (switch__6994__auto__,c__7050__auto___48732,tc,fc){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_48728 = [null,null,null,null,null,null,null,null,null];
(statearr_48728[(0)] = state_machine__6995__auto__);

(statearr_48728[(1)] = (1));

return statearr_48728;
});
var state_machine__6995__auto____1 = (function (state_48707){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48729){if((e48729 instanceof Object)){
var ex__6998__auto__ = e48729;
var statearr_48730_48747 = state_48707;
(statearr_48730_48747[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48748 = state_48707;
state_48707 = G__48748;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48707){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___48732,tc,fc))
})();
var state__7052__auto__ = (function (){var statearr_48731 = f__7051__auto__.call(null);
(statearr_48731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___48732);

return statearr_48731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___48732,tc,fc))
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
return (function (state_48795){
var state_val_48796 = (state_48795[(1)]);
if((state_val_48796 === (7))){
var inst_48791 = (state_48795[(2)]);
var state_48795__$1 = state_48795;
var statearr_48797_48813 = state_48795__$1;
(statearr_48797_48813[(2)] = inst_48791);

(statearr_48797_48813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (6))){
var inst_48781 = (state_48795[(7)]);
var inst_48784 = (state_48795[(8)]);
var inst_48788 = f.call(null,inst_48781,inst_48784);
var inst_48781__$1 = inst_48788;
var state_48795__$1 = (function (){var statearr_48798 = state_48795;
(statearr_48798[(7)] = inst_48781__$1);

return statearr_48798;
})();
var statearr_48799_48814 = state_48795__$1;
(statearr_48799_48814[(2)] = null);

(statearr_48799_48814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (5))){
var inst_48781 = (state_48795[(7)]);
var state_48795__$1 = state_48795;
var statearr_48800_48815 = state_48795__$1;
(statearr_48800_48815[(2)] = inst_48781);

(statearr_48800_48815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (4))){
var inst_48784 = (state_48795[(8)]);
var inst_48784__$1 = (state_48795[(2)]);
var inst_48785 = (inst_48784__$1 == null);
var state_48795__$1 = (function (){var statearr_48801 = state_48795;
(statearr_48801[(8)] = inst_48784__$1);

return statearr_48801;
})();
if(cljs.core.truth_(inst_48785)){
var statearr_48802_48816 = state_48795__$1;
(statearr_48802_48816[(1)] = (5));

} else {
var statearr_48803_48817 = state_48795__$1;
(statearr_48803_48817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (3))){
var inst_48793 = (state_48795[(2)]);
var state_48795__$1 = state_48795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48795__$1,inst_48793);
} else {
if((state_val_48796 === (2))){
var state_48795__$1 = state_48795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48795__$1,(4),ch);
} else {
if((state_val_48796 === (1))){
var inst_48781 = init;
var state_48795__$1 = (function (){var statearr_48804 = state_48795;
(statearr_48804[(7)] = inst_48781);

return statearr_48804;
})();
var statearr_48805_48818 = state_48795__$1;
(statearr_48805_48818[(2)] = null);

(statearr_48805_48818[(1)] = (2));


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
var statearr_48809 = [null,null,null,null,null,null,null,null,null];
(statearr_48809[(0)] = state_machine__6995__auto__);

(statearr_48809[(1)] = (1));

return statearr_48809;
});
var state_machine__6995__auto____1 = (function (state_48795){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48810){if((e48810 instanceof Object)){
var ex__6998__auto__ = e48810;
var statearr_48811_48819 = state_48795;
(statearr_48811_48819[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48820 = state_48795;
state_48795 = G__48820;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48795){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_48812 = f__7051__auto__.call(null);
(statearr_48812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_48812;
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
return (function (state_48894){
var state_val_48895 = (state_48894[(1)]);
if((state_val_48895 === (7))){
var inst_48876 = (state_48894[(2)]);
var state_48894__$1 = state_48894;
var statearr_48896_48919 = state_48894__$1;
(statearr_48896_48919[(2)] = inst_48876);

(statearr_48896_48919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (1))){
var inst_48870 = cljs.core.seq.call(null,coll);
var inst_48871 = inst_48870;
var state_48894__$1 = (function (){var statearr_48897 = state_48894;
(statearr_48897[(7)] = inst_48871);

return statearr_48897;
})();
var statearr_48898_48920 = state_48894__$1;
(statearr_48898_48920[(2)] = null);

(statearr_48898_48920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (4))){
var inst_48871 = (state_48894[(7)]);
var inst_48874 = cljs.core.first.call(null,inst_48871);
var state_48894__$1 = state_48894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48894__$1,(7),ch,inst_48874);
} else {
if((state_val_48895 === (13))){
var inst_48888 = (state_48894[(2)]);
var state_48894__$1 = state_48894;
var statearr_48899_48921 = state_48894__$1;
(statearr_48899_48921[(2)] = inst_48888);

(statearr_48899_48921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (6))){
var inst_48879 = (state_48894[(2)]);
var state_48894__$1 = state_48894;
if(cljs.core.truth_(inst_48879)){
var statearr_48900_48922 = state_48894__$1;
(statearr_48900_48922[(1)] = (8));

} else {
var statearr_48901_48923 = state_48894__$1;
(statearr_48901_48923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (3))){
var inst_48892 = (state_48894[(2)]);
var state_48894__$1 = state_48894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48894__$1,inst_48892);
} else {
if((state_val_48895 === (12))){
var state_48894__$1 = state_48894;
var statearr_48902_48924 = state_48894__$1;
(statearr_48902_48924[(2)] = null);

(statearr_48902_48924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (2))){
var inst_48871 = (state_48894[(7)]);
var state_48894__$1 = state_48894;
if(cljs.core.truth_(inst_48871)){
var statearr_48903_48925 = state_48894__$1;
(statearr_48903_48925[(1)] = (4));

} else {
var statearr_48904_48926 = state_48894__$1;
(statearr_48904_48926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (11))){
var inst_48885 = cljs.core.async.close_BANG_.call(null,ch);
var state_48894__$1 = state_48894;
var statearr_48905_48927 = state_48894__$1;
(statearr_48905_48927[(2)] = inst_48885);

(statearr_48905_48927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (9))){
var state_48894__$1 = state_48894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48906_48928 = state_48894__$1;
(statearr_48906_48928[(1)] = (11));

} else {
var statearr_48907_48929 = state_48894__$1;
(statearr_48907_48929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (5))){
var inst_48871 = (state_48894[(7)]);
var state_48894__$1 = state_48894;
var statearr_48908_48930 = state_48894__$1;
(statearr_48908_48930[(2)] = inst_48871);

(statearr_48908_48930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (10))){
var inst_48890 = (state_48894[(2)]);
var state_48894__$1 = state_48894;
var statearr_48909_48931 = state_48894__$1;
(statearr_48909_48931[(2)] = inst_48890);

(statearr_48909_48931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48895 === (8))){
var inst_48871 = (state_48894[(7)]);
var inst_48881 = cljs.core.next.call(null,inst_48871);
var inst_48871__$1 = inst_48881;
var state_48894__$1 = (function (){var statearr_48910 = state_48894;
(statearr_48910[(7)] = inst_48871__$1);

return statearr_48910;
})();
var statearr_48911_48932 = state_48894__$1;
(statearr_48911_48932[(2)] = null);

(statearr_48911_48932[(1)] = (2));


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
var statearr_48915 = [null,null,null,null,null,null,null,null];
(statearr_48915[(0)] = state_machine__6995__auto__);

(statearr_48915[(1)] = (1));

return statearr_48915;
});
var state_machine__6995__auto____1 = (function (state_48894){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_48894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e48916){if((e48916 instanceof Object)){
var ex__6998__auto__ = e48916;
var statearr_48917_48933 = state_48894;
(statearr_48917_48933[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48934 = state_48894;
state_48894 = G__48934;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_48894){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_48894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_48918 = f__7051__auto__.call(null);
(statearr_48918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_48918;
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

cljs.core.async.Mux = (function (){var obj48936 = {};
return obj48936;
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


cljs.core.async.Mult = (function (){var obj48938 = {};
return obj48938;
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
if(typeof cljs.core.async.t49160 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t49160 = (function (cs,ch,mult,meta49161){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49161 = meta49161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49160.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t49160.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t49160.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t49160.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t49160.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t49160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t49160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49162){
var self__ = this;
var _49162__$1 = this;
return self__.meta49161;
});})(cs))
;

cljs.core.async.t49160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49162,meta49161__$1){
var self__ = this;
var _49162__$1 = this;
return (new cljs.core.async.t49160(self__.cs,self__.ch,self__.mult,meta49161__$1));
});})(cs))
;

cljs.core.async.t49160.cljs$lang$type = true;

cljs.core.async.t49160.cljs$lang$ctorStr = "cljs.core.async/t49160";

cljs.core.async.t49160.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t49160");
});})(cs))
;

cljs.core.async.__GT_t49160 = ((function (cs){
return (function __GT_t49160(cs__$1,ch__$1,mult__$1,meta49161){
return (new cljs.core.async.t49160(cs__$1,ch__$1,mult__$1,meta49161));
});})(cs))
;

}

return (new cljs.core.async.t49160(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___49381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___49381,cs,m,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___49381,cs,m,dchan,dctr,done){
return (function (state_49293){
var state_val_49294 = (state_49293[(1)]);
if((state_val_49294 === (7))){
var inst_49289 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49295_49382 = state_49293__$1;
(statearr_49295_49382[(2)] = inst_49289);

(statearr_49295_49382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (20))){
var inst_49194 = (state_49293[(7)]);
var inst_49204 = cljs.core.first.call(null,inst_49194);
var inst_49205 = cljs.core.nth.call(null,inst_49204,(0),null);
var inst_49206 = cljs.core.nth.call(null,inst_49204,(1),null);
var state_49293__$1 = (function (){var statearr_49296 = state_49293;
(statearr_49296[(8)] = inst_49205);

return statearr_49296;
})();
if(cljs.core.truth_(inst_49206)){
var statearr_49297_49383 = state_49293__$1;
(statearr_49297_49383[(1)] = (22));

} else {
var statearr_49298_49384 = state_49293__$1;
(statearr_49298_49384[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (27))){
var inst_49234 = (state_49293[(9)]);
var inst_49236 = (state_49293[(10)]);
var inst_49165 = (state_49293[(11)]);
var inst_49241 = (state_49293[(12)]);
var inst_49241__$1 = cljs.core._nth.call(null,inst_49234,inst_49236);
var inst_49242 = cljs.core.async.put_BANG_.call(null,inst_49241__$1,inst_49165,done);
var state_49293__$1 = (function (){var statearr_49299 = state_49293;
(statearr_49299[(12)] = inst_49241__$1);

return statearr_49299;
})();
if(cljs.core.truth_(inst_49242)){
var statearr_49300_49385 = state_49293__$1;
(statearr_49300_49385[(1)] = (30));

} else {
var statearr_49301_49386 = state_49293__$1;
(statearr_49301_49386[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (1))){
var state_49293__$1 = state_49293;
var statearr_49302_49387 = state_49293__$1;
(statearr_49302_49387[(2)] = null);

(statearr_49302_49387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (24))){
var inst_49194 = (state_49293[(7)]);
var inst_49211 = (state_49293[(2)]);
var inst_49212 = cljs.core.next.call(null,inst_49194);
var inst_49174 = inst_49212;
var inst_49175 = null;
var inst_49176 = (0);
var inst_49177 = (0);
var state_49293__$1 = (function (){var statearr_49303 = state_49293;
(statearr_49303[(13)] = inst_49211);

(statearr_49303[(14)] = inst_49176);

(statearr_49303[(15)] = inst_49175);

(statearr_49303[(16)] = inst_49177);

(statearr_49303[(17)] = inst_49174);

return statearr_49303;
})();
var statearr_49304_49388 = state_49293__$1;
(statearr_49304_49388[(2)] = null);

(statearr_49304_49388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (39))){
var state_49293__$1 = state_49293;
var statearr_49308_49389 = state_49293__$1;
(statearr_49308_49389[(2)] = null);

(statearr_49308_49389[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (4))){
var inst_49165 = (state_49293[(11)]);
var inst_49165__$1 = (state_49293[(2)]);
var inst_49166 = (inst_49165__$1 == null);
var state_49293__$1 = (function (){var statearr_49309 = state_49293;
(statearr_49309[(11)] = inst_49165__$1);

return statearr_49309;
})();
if(cljs.core.truth_(inst_49166)){
var statearr_49310_49390 = state_49293__$1;
(statearr_49310_49390[(1)] = (5));

} else {
var statearr_49311_49391 = state_49293__$1;
(statearr_49311_49391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (15))){
var inst_49176 = (state_49293[(14)]);
var inst_49175 = (state_49293[(15)]);
var inst_49177 = (state_49293[(16)]);
var inst_49174 = (state_49293[(17)]);
var inst_49190 = (state_49293[(2)]);
var inst_49191 = (inst_49177 + (1));
var tmp49305 = inst_49176;
var tmp49306 = inst_49175;
var tmp49307 = inst_49174;
var inst_49174__$1 = tmp49307;
var inst_49175__$1 = tmp49306;
var inst_49176__$1 = tmp49305;
var inst_49177__$1 = inst_49191;
var state_49293__$1 = (function (){var statearr_49312 = state_49293;
(statearr_49312[(14)] = inst_49176__$1);

(statearr_49312[(18)] = inst_49190);

(statearr_49312[(15)] = inst_49175__$1);

(statearr_49312[(16)] = inst_49177__$1);

(statearr_49312[(17)] = inst_49174__$1);

return statearr_49312;
})();
var statearr_49313_49392 = state_49293__$1;
(statearr_49313_49392[(2)] = null);

(statearr_49313_49392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (21))){
var inst_49215 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49317_49393 = state_49293__$1;
(statearr_49317_49393[(2)] = inst_49215);

(statearr_49317_49393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (31))){
var inst_49241 = (state_49293[(12)]);
var inst_49245 = done.call(null,null);
var inst_49246 = cljs.core.async.untap_STAR_.call(null,m,inst_49241);
var state_49293__$1 = (function (){var statearr_49318 = state_49293;
(statearr_49318[(19)] = inst_49245);

return statearr_49318;
})();
var statearr_49319_49394 = state_49293__$1;
(statearr_49319_49394[(2)] = inst_49246);

(statearr_49319_49394[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (32))){
var inst_49233 = (state_49293[(20)]);
var inst_49234 = (state_49293[(9)]);
var inst_49236 = (state_49293[(10)]);
var inst_49235 = (state_49293[(21)]);
var inst_49248 = (state_49293[(2)]);
var inst_49249 = (inst_49236 + (1));
var tmp49314 = inst_49233;
var tmp49315 = inst_49234;
var tmp49316 = inst_49235;
var inst_49233__$1 = tmp49314;
var inst_49234__$1 = tmp49315;
var inst_49235__$1 = tmp49316;
var inst_49236__$1 = inst_49249;
var state_49293__$1 = (function (){var statearr_49320 = state_49293;
(statearr_49320[(20)] = inst_49233__$1);

(statearr_49320[(9)] = inst_49234__$1);

(statearr_49320[(10)] = inst_49236__$1);

(statearr_49320[(21)] = inst_49235__$1);

(statearr_49320[(22)] = inst_49248);

return statearr_49320;
})();
var statearr_49321_49395 = state_49293__$1;
(statearr_49321_49395[(2)] = null);

(statearr_49321_49395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (40))){
var inst_49261 = (state_49293[(23)]);
var inst_49265 = done.call(null,null);
var inst_49266 = cljs.core.async.untap_STAR_.call(null,m,inst_49261);
var state_49293__$1 = (function (){var statearr_49322 = state_49293;
(statearr_49322[(24)] = inst_49265);

return statearr_49322;
})();
var statearr_49323_49396 = state_49293__$1;
(statearr_49323_49396[(2)] = inst_49266);

(statearr_49323_49396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (33))){
var inst_49252 = (state_49293[(25)]);
var inst_49254 = cljs.core.chunked_seq_QMARK_.call(null,inst_49252);
var state_49293__$1 = state_49293;
if(inst_49254){
var statearr_49324_49397 = state_49293__$1;
(statearr_49324_49397[(1)] = (36));

} else {
var statearr_49325_49398 = state_49293__$1;
(statearr_49325_49398[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (13))){
var inst_49184 = (state_49293[(26)]);
var inst_49187 = cljs.core.async.close_BANG_.call(null,inst_49184);
var state_49293__$1 = state_49293;
var statearr_49326_49399 = state_49293__$1;
(statearr_49326_49399[(2)] = inst_49187);

(statearr_49326_49399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (22))){
var inst_49205 = (state_49293[(8)]);
var inst_49208 = cljs.core.async.close_BANG_.call(null,inst_49205);
var state_49293__$1 = state_49293;
var statearr_49327_49400 = state_49293__$1;
(statearr_49327_49400[(2)] = inst_49208);

(statearr_49327_49400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (36))){
var inst_49252 = (state_49293[(25)]);
var inst_49256 = cljs.core.chunk_first.call(null,inst_49252);
var inst_49257 = cljs.core.chunk_rest.call(null,inst_49252);
var inst_49258 = cljs.core.count.call(null,inst_49256);
var inst_49233 = inst_49257;
var inst_49234 = inst_49256;
var inst_49235 = inst_49258;
var inst_49236 = (0);
var state_49293__$1 = (function (){var statearr_49328 = state_49293;
(statearr_49328[(20)] = inst_49233);

(statearr_49328[(9)] = inst_49234);

(statearr_49328[(10)] = inst_49236);

(statearr_49328[(21)] = inst_49235);

return statearr_49328;
})();
var statearr_49329_49401 = state_49293__$1;
(statearr_49329_49401[(2)] = null);

(statearr_49329_49401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (41))){
var inst_49252 = (state_49293[(25)]);
var inst_49268 = (state_49293[(2)]);
var inst_49269 = cljs.core.next.call(null,inst_49252);
var inst_49233 = inst_49269;
var inst_49234 = null;
var inst_49235 = (0);
var inst_49236 = (0);
var state_49293__$1 = (function (){var statearr_49330 = state_49293;
(statearr_49330[(20)] = inst_49233);

(statearr_49330[(9)] = inst_49234);

(statearr_49330[(10)] = inst_49236);

(statearr_49330[(27)] = inst_49268);

(statearr_49330[(21)] = inst_49235);

return statearr_49330;
})();
var statearr_49331_49402 = state_49293__$1;
(statearr_49331_49402[(2)] = null);

(statearr_49331_49402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (43))){
var state_49293__$1 = state_49293;
var statearr_49332_49403 = state_49293__$1;
(statearr_49332_49403[(2)] = null);

(statearr_49332_49403[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (29))){
var inst_49277 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49333_49404 = state_49293__$1;
(statearr_49333_49404[(2)] = inst_49277);

(statearr_49333_49404[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (44))){
var inst_49286 = (state_49293[(2)]);
var state_49293__$1 = (function (){var statearr_49334 = state_49293;
(statearr_49334[(28)] = inst_49286);

return statearr_49334;
})();
var statearr_49335_49405 = state_49293__$1;
(statearr_49335_49405[(2)] = null);

(statearr_49335_49405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (6))){
var inst_49225 = (state_49293[(29)]);
var inst_49224 = cljs.core.deref.call(null,cs);
var inst_49225__$1 = cljs.core.keys.call(null,inst_49224);
var inst_49226 = cljs.core.count.call(null,inst_49225__$1);
var inst_49227 = cljs.core.reset_BANG_.call(null,dctr,inst_49226);
var inst_49232 = cljs.core.seq.call(null,inst_49225__$1);
var inst_49233 = inst_49232;
var inst_49234 = null;
var inst_49235 = (0);
var inst_49236 = (0);
var state_49293__$1 = (function (){var statearr_49336 = state_49293;
(statearr_49336[(20)] = inst_49233);

(statearr_49336[(9)] = inst_49234);

(statearr_49336[(10)] = inst_49236);

(statearr_49336[(29)] = inst_49225__$1);

(statearr_49336[(30)] = inst_49227);

(statearr_49336[(21)] = inst_49235);

return statearr_49336;
})();
var statearr_49337_49406 = state_49293__$1;
(statearr_49337_49406[(2)] = null);

(statearr_49337_49406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (28))){
var inst_49233 = (state_49293[(20)]);
var inst_49252 = (state_49293[(25)]);
var inst_49252__$1 = cljs.core.seq.call(null,inst_49233);
var state_49293__$1 = (function (){var statearr_49338 = state_49293;
(statearr_49338[(25)] = inst_49252__$1);

return statearr_49338;
})();
if(inst_49252__$1){
var statearr_49339_49407 = state_49293__$1;
(statearr_49339_49407[(1)] = (33));

} else {
var statearr_49340_49408 = state_49293__$1;
(statearr_49340_49408[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (25))){
var inst_49236 = (state_49293[(10)]);
var inst_49235 = (state_49293[(21)]);
var inst_49238 = (inst_49236 < inst_49235);
var inst_49239 = inst_49238;
var state_49293__$1 = state_49293;
if(cljs.core.truth_(inst_49239)){
var statearr_49341_49409 = state_49293__$1;
(statearr_49341_49409[(1)] = (27));

} else {
var statearr_49342_49410 = state_49293__$1;
(statearr_49342_49410[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (34))){
var state_49293__$1 = state_49293;
var statearr_49343_49411 = state_49293__$1;
(statearr_49343_49411[(2)] = null);

(statearr_49343_49411[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (17))){
var state_49293__$1 = state_49293;
var statearr_49344_49412 = state_49293__$1;
(statearr_49344_49412[(2)] = null);

(statearr_49344_49412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (3))){
var inst_49291 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49293__$1,inst_49291);
} else {
if((state_val_49294 === (12))){
var inst_49220 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49345_49413 = state_49293__$1;
(statearr_49345_49413[(2)] = inst_49220);

(statearr_49345_49413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (2))){
var state_49293__$1 = state_49293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49293__$1,(4),ch);
} else {
if((state_val_49294 === (23))){
var state_49293__$1 = state_49293;
var statearr_49346_49414 = state_49293__$1;
(statearr_49346_49414[(2)] = null);

(statearr_49346_49414[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (35))){
var inst_49275 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49347_49415 = state_49293__$1;
(statearr_49347_49415[(2)] = inst_49275);

(statearr_49347_49415[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (19))){
var inst_49194 = (state_49293[(7)]);
var inst_49198 = cljs.core.chunk_first.call(null,inst_49194);
var inst_49199 = cljs.core.chunk_rest.call(null,inst_49194);
var inst_49200 = cljs.core.count.call(null,inst_49198);
var inst_49174 = inst_49199;
var inst_49175 = inst_49198;
var inst_49176 = inst_49200;
var inst_49177 = (0);
var state_49293__$1 = (function (){var statearr_49348 = state_49293;
(statearr_49348[(14)] = inst_49176);

(statearr_49348[(15)] = inst_49175);

(statearr_49348[(16)] = inst_49177);

(statearr_49348[(17)] = inst_49174);

return statearr_49348;
})();
var statearr_49349_49416 = state_49293__$1;
(statearr_49349_49416[(2)] = null);

(statearr_49349_49416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (11))){
var inst_49194 = (state_49293[(7)]);
var inst_49174 = (state_49293[(17)]);
var inst_49194__$1 = cljs.core.seq.call(null,inst_49174);
var state_49293__$1 = (function (){var statearr_49350 = state_49293;
(statearr_49350[(7)] = inst_49194__$1);

return statearr_49350;
})();
if(inst_49194__$1){
var statearr_49351_49417 = state_49293__$1;
(statearr_49351_49417[(1)] = (16));

} else {
var statearr_49352_49418 = state_49293__$1;
(statearr_49352_49418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (9))){
var inst_49222 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49353_49419 = state_49293__$1;
(statearr_49353_49419[(2)] = inst_49222);

(statearr_49353_49419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (5))){
var inst_49172 = cljs.core.deref.call(null,cs);
var inst_49173 = cljs.core.seq.call(null,inst_49172);
var inst_49174 = inst_49173;
var inst_49175 = null;
var inst_49176 = (0);
var inst_49177 = (0);
var state_49293__$1 = (function (){var statearr_49354 = state_49293;
(statearr_49354[(14)] = inst_49176);

(statearr_49354[(15)] = inst_49175);

(statearr_49354[(16)] = inst_49177);

(statearr_49354[(17)] = inst_49174);

return statearr_49354;
})();
var statearr_49355_49420 = state_49293__$1;
(statearr_49355_49420[(2)] = null);

(statearr_49355_49420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (14))){
var state_49293__$1 = state_49293;
var statearr_49356_49421 = state_49293__$1;
(statearr_49356_49421[(2)] = null);

(statearr_49356_49421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (45))){
var inst_49283 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49357_49422 = state_49293__$1;
(statearr_49357_49422[(2)] = inst_49283);

(statearr_49357_49422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (26))){
var inst_49225 = (state_49293[(29)]);
var inst_49279 = (state_49293[(2)]);
var inst_49280 = cljs.core.seq.call(null,inst_49225);
var state_49293__$1 = (function (){var statearr_49358 = state_49293;
(statearr_49358[(31)] = inst_49279);

return statearr_49358;
})();
if(inst_49280){
var statearr_49359_49423 = state_49293__$1;
(statearr_49359_49423[(1)] = (42));

} else {
var statearr_49360_49424 = state_49293__$1;
(statearr_49360_49424[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (16))){
var inst_49194 = (state_49293[(7)]);
var inst_49196 = cljs.core.chunked_seq_QMARK_.call(null,inst_49194);
var state_49293__$1 = state_49293;
if(inst_49196){
var statearr_49361_49425 = state_49293__$1;
(statearr_49361_49425[(1)] = (19));

} else {
var statearr_49362_49426 = state_49293__$1;
(statearr_49362_49426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (38))){
var inst_49272 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49363_49427 = state_49293__$1;
(statearr_49363_49427[(2)] = inst_49272);

(statearr_49363_49427[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (30))){
var state_49293__$1 = state_49293;
var statearr_49364_49428 = state_49293__$1;
(statearr_49364_49428[(2)] = null);

(statearr_49364_49428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (10))){
var inst_49175 = (state_49293[(15)]);
var inst_49177 = (state_49293[(16)]);
var inst_49183 = cljs.core._nth.call(null,inst_49175,inst_49177);
var inst_49184 = cljs.core.nth.call(null,inst_49183,(0),null);
var inst_49185 = cljs.core.nth.call(null,inst_49183,(1),null);
var state_49293__$1 = (function (){var statearr_49365 = state_49293;
(statearr_49365[(26)] = inst_49184);

return statearr_49365;
})();
if(cljs.core.truth_(inst_49185)){
var statearr_49366_49429 = state_49293__$1;
(statearr_49366_49429[(1)] = (13));

} else {
var statearr_49367_49430 = state_49293__$1;
(statearr_49367_49430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (18))){
var inst_49218 = (state_49293[(2)]);
var state_49293__$1 = state_49293;
var statearr_49368_49431 = state_49293__$1;
(statearr_49368_49431[(2)] = inst_49218);

(statearr_49368_49431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (42))){
var state_49293__$1 = state_49293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49293__$1,(45),dchan);
} else {
if((state_val_49294 === (37))){
var inst_49252 = (state_49293[(25)]);
var inst_49165 = (state_49293[(11)]);
var inst_49261 = (state_49293[(23)]);
var inst_49261__$1 = cljs.core.first.call(null,inst_49252);
var inst_49262 = cljs.core.async.put_BANG_.call(null,inst_49261__$1,inst_49165,done);
var state_49293__$1 = (function (){var statearr_49369 = state_49293;
(statearr_49369[(23)] = inst_49261__$1);

return statearr_49369;
})();
if(cljs.core.truth_(inst_49262)){
var statearr_49370_49432 = state_49293__$1;
(statearr_49370_49432[(1)] = (39));

} else {
var statearr_49371_49433 = state_49293__$1;
(statearr_49371_49433[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49294 === (8))){
var inst_49176 = (state_49293[(14)]);
var inst_49177 = (state_49293[(16)]);
var inst_49179 = (inst_49177 < inst_49176);
var inst_49180 = inst_49179;
var state_49293__$1 = state_49293;
if(cljs.core.truth_(inst_49180)){
var statearr_49372_49434 = state_49293__$1;
(statearr_49372_49434[(1)] = (10));

} else {
var statearr_49373_49435 = state_49293__$1;
(statearr_49373_49435[(1)] = (11));

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
});})(c__7050__auto___49381,cs,m,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___49381,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_49377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49377[(0)] = state_machine__6995__auto__);

(statearr_49377[(1)] = (1));

return statearr_49377;
});
var state_machine__6995__auto____1 = (function (state_49293){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_49293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e49378){if((e49378 instanceof Object)){
var ex__6998__auto__ = e49378;
var statearr_49379_49436 = state_49293;
(statearr_49379_49436[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49437 = state_49293;
state_49293 = G__49437;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_49293){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_49293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___49381,cs,m,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_49380 = f__7051__auto__.call(null);
(statearr_49380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___49381);

return statearr_49380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___49381,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj49439 = {};
return obj49439;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__49440){
var map__49445 = p__49440;
var map__49445__$1 = ((cljs.core.seq_QMARK_.call(null,map__49445))?cljs.core.apply.call(null,cljs.core.hash_map,map__49445):map__49445);
var opts = map__49445__$1;
var statearr_49446_49449 = state;
(statearr_49446_49449[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__49445,map__49445__$1,opts){
return (function (val){
var statearr_49447_49450 = state;
(statearr_49447_49450[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49445,map__49445__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_49448_49451 = state;
(statearr_49448_49451[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__49440 = null;
if (arguments.length > 3) {
  p__49440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__49440);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__49452){
var state = cljs.core.first(arglist__49452);
arglist__49452 = cljs.core.next(arglist__49452);
var cont_block = cljs.core.first(arglist__49452);
arglist__49452 = cljs.core.next(arglist__49452);
var ports = cljs.core.first(arglist__49452);
var p__49440 = cljs.core.rest(arglist__49452);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__49440);
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
if(typeof cljs.core.async.t49572 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t49572 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49573){
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
this.meta49573 = meta49573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49572.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t49572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t49572.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t49572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49574){
var self__ = this;
var _49574__$1 = this;
return self__.meta49573;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49574,meta49573__$1){
var self__ = this;
var _49574__$1 = this;
return (new cljs.core.async.t49572(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49573__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t49572.cljs$lang$type = true;

cljs.core.async.t49572.cljs$lang$ctorStr = "cljs.core.async/t49572";

cljs.core.async.t49572.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t49572");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t49572 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t49572(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49573){
return (new cljs.core.async.t49572(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49573));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t49572(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___49691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49644){
var state_val_49645 = (state_49644[(1)]);
if((state_val_49645 === (7))){
var inst_49588 = (state_49644[(7)]);
var inst_49593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49588);
var state_49644__$1 = state_49644;
var statearr_49646_49692 = state_49644__$1;
(statearr_49646_49692[(2)] = inst_49593);

(statearr_49646_49692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (20))){
var inst_49603 = (state_49644[(8)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49644__$1,(23),out,inst_49603);
} else {
if((state_val_49645 === (1))){
var inst_49578 = (state_49644[(9)]);
var inst_49578__$1 = calc_state.call(null);
var inst_49579 = cljs.core.seq_QMARK_.call(null,inst_49578__$1);
var state_49644__$1 = (function (){var statearr_49647 = state_49644;
(statearr_49647[(9)] = inst_49578__$1);

return statearr_49647;
})();
if(inst_49579){
var statearr_49648_49693 = state_49644__$1;
(statearr_49648_49693[(1)] = (2));

} else {
var statearr_49649_49694 = state_49644__$1;
(statearr_49649_49694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (24))){
var inst_49596 = (state_49644[(10)]);
var inst_49588 = inst_49596;
var state_49644__$1 = (function (){var statearr_49650 = state_49644;
(statearr_49650[(7)] = inst_49588);

return statearr_49650;
})();
var statearr_49651_49695 = state_49644__$1;
(statearr_49651_49695[(2)] = null);

(statearr_49651_49695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (4))){
var inst_49578 = (state_49644[(9)]);
var inst_49584 = (state_49644[(2)]);
var inst_49585 = cljs.core.get.call(null,inst_49584,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49586 = cljs.core.get.call(null,inst_49584,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49587 = cljs.core.get.call(null,inst_49584,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49588 = inst_49578;
var state_49644__$1 = (function (){var statearr_49652 = state_49644;
(statearr_49652[(11)] = inst_49585);

(statearr_49652[(12)] = inst_49587);

(statearr_49652[(7)] = inst_49588);

(statearr_49652[(13)] = inst_49586);

return statearr_49652;
})();
var statearr_49653_49696 = state_49644__$1;
(statearr_49653_49696[(2)] = null);

(statearr_49653_49696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (15))){
var state_49644__$1 = state_49644;
var statearr_49654_49697 = state_49644__$1;
(statearr_49654_49697[(2)] = null);

(statearr_49654_49697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (21))){
var inst_49596 = (state_49644[(10)]);
var inst_49588 = inst_49596;
var state_49644__$1 = (function (){var statearr_49655 = state_49644;
(statearr_49655[(7)] = inst_49588);

return statearr_49655;
})();
var statearr_49656_49698 = state_49644__$1;
(statearr_49656_49698[(2)] = null);

(statearr_49656_49698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (13))){
var inst_49640 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49657_49699 = state_49644__$1;
(statearr_49657_49699[(2)] = inst_49640);

(statearr_49657_49699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (22))){
var inst_49638 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49658_49700 = state_49644__$1;
(statearr_49658_49700[(2)] = inst_49638);

(statearr_49658_49700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (6))){
var inst_49642 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49644__$1,inst_49642);
} else {
if((state_val_49645 === (25))){
var state_49644__$1 = state_49644;
var statearr_49659_49701 = state_49644__$1;
(statearr_49659_49701[(2)] = null);

(statearr_49659_49701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (17))){
var inst_49618 = (state_49644[(14)]);
var state_49644__$1 = state_49644;
var statearr_49660_49702 = state_49644__$1;
(statearr_49660_49702[(2)] = inst_49618);

(statearr_49660_49702[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (3))){
var inst_49578 = (state_49644[(9)]);
var state_49644__$1 = state_49644;
var statearr_49661_49703 = state_49644__$1;
(statearr_49661_49703[(2)] = inst_49578);

(statearr_49661_49703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (12))){
var inst_49599 = (state_49644[(15)]);
var inst_49618 = (state_49644[(14)]);
var inst_49604 = (state_49644[(16)]);
var inst_49618__$1 = inst_49599.call(null,inst_49604);
var state_49644__$1 = (function (){var statearr_49662 = state_49644;
(statearr_49662[(14)] = inst_49618__$1);

return statearr_49662;
})();
if(cljs.core.truth_(inst_49618__$1)){
var statearr_49663_49704 = state_49644__$1;
(statearr_49663_49704[(1)] = (17));

} else {
var statearr_49664_49705 = state_49644__$1;
(statearr_49664_49705[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (2))){
var inst_49578 = (state_49644[(9)]);
var inst_49581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49578);
var state_49644__$1 = state_49644;
var statearr_49665_49706 = state_49644__$1;
(statearr_49665_49706[(2)] = inst_49581);

(statearr_49665_49706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (23))){
var inst_49629 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
if(cljs.core.truth_(inst_49629)){
var statearr_49666_49707 = state_49644__$1;
(statearr_49666_49707[(1)] = (24));

} else {
var statearr_49667_49708 = state_49644__$1;
(statearr_49667_49708[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (19))){
var inst_49626 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
if(cljs.core.truth_(inst_49626)){
var statearr_49668_49709 = state_49644__$1;
(statearr_49668_49709[(1)] = (20));

} else {
var statearr_49669_49710 = state_49644__$1;
(statearr_49669_49710[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (11))){
var inst_49603 = (state_49644[(8)]);
var inst_49609 = (inst_49603 == null);
var state_49644__$1 = state_49644;
if(cljs.core.truth_(inst_49609)){
var statearr_49670_49711 = state_49644__$1;
(statearr_49670_49711[(1)] = (14));

} else {
var statearr_49671_49712 = state_49644__$1;
(statearr_49671_49712[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (9))){
var inst_49596 = (state_49644[(10)]);
var inst_49596__$1 = (state_49644[(2)]);
var inst_49597 = cljs.core.get.call(null,inst_49596__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49598 = cljs.core.get.call(null,inst_49596__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49599 = cljs.core.get.call(null,inst_49596__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_49644__$1 = (function (){var statearr_49672 = state_49644;
(statearr_49672[(15)] = inst_49599);

(statearr_49672[(10)] = inst_49596__$1);

(statearr_49672[(17)] = inst_49598);

return statearr_49672;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49644__$1,(10),inst_49597);
} else {
if((state_val_49645 === (5))){
var inst_49588 = (state_49644[(7)]);
var inst_49591 = cljs.core.seq_QMARK_.call(null,inst_49588);
var state_49644__$1 = state_49644;
if(inst_49591){
var statearr_49673_49713 = state_49644__$1;
(statearr_49673_49713[(1)] = (7));

} else {
var statearr_49674_49714 = state_49644__$1;
(statearr_49674_49714[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (14))){
var inst_49604 = (state_49644[(16)]);
var inst_49611 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49604);
var state_49644__$1 = state_49644;
var statearr_49675_49715 = state_49644__$1;
(statearr_49675_49715[(2)] = inst_49611);

(statearr_49675_49715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (26))){
var inst_49634 = (state_49644[(2)]);
var state_49644__$1 = state_49644;
var statearr_49676_49716 = state_49644__$1;
(statearr_49676_49716[(2)] = inst_49634);

(statearr_49676_49716[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (16))){
var inst_49614 = (state_49644[(2)]);
var inst_49615 = calc_state.call(null);
var inst_49588 = inst_49615;
var state_49644__$1 = (function (){var statearr_49677 = state_49644;
(statearr_49677[(7)] = inst_49588);

(statearr_49677[(18)] = inst_49614);

return statearr_49677;
})();
var statearr_49678_49717 = state_49644__$1;
(statearr_49678_49717[(2)] = null);

(statearr_49678_49717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (10))){
var inst_49604 = (state_49644[(16)]);
var inst_49603 = (state_49644[(8)]);
var inst_49602 = (state_49644[(2)]);
var inst_49603__$1 = cljs.core.nth.call(null,inst_49602,(0),null);
var inst_49604__$1 = cljs.core.nth.call(null,inst_49602,(1),null);
var inst_49605 = (inst_49603__$1 == null);
var inst_49606 = cljs.core._EQ_.call(null,inst_49604__$1,change);
var inst_49607 = (inst_49605) || (inst_49606);
var state_49644__$1 = (function (){var statearr_49679 = state_49644;
(statearr_49679[(16)] = inst_49604__$1);

(statearr_49679[(8)] = inst_49603__$1);

return statearr_49679;
})();
if(cljs.core.truth_(inst_49607)){
var statearr_49680_49718 = state_49644__$1;
(statearr_49680_49718[(1)] = (11));

} else {
var statearr_49681_49719 = state_49644__$1;
(statearr_49681_49719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (18))){
var inst_49599 = (state_49644[(15)]);
var inst_49604 = (state_49644[(16)]);
var inst_49598 = (state_49644[(17)]);
var inst_49621 = cljs.core.empty_QMARK_.call(null,inst_49599);
var inst_49622 = inst_49598.call(null,inst_49604);
var inst_49623 = cljs.core.not.call(null,inst_49622);
var inst_49624 = (inst_49621) && (inst_49623);
var state_49644__$1 = state_49644;
var statearr_49682_49720 = state_49644__$1;
(statearr_49682_49720[(2)] = inst_49624);

(statearr_49682_49720[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49645 === (8))){
var inst_49588 = (state_49644[(7)]);
var state_49644__$1 = state_49644;
var statearr_49683_49721 = state_49644__$1;
(statearr_49683_49721[(2)] = inst_49588);

(statearr_49683_49721[(1)] = (9));


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
});})(c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6994__auto__,c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_49687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49687[(0)] = state_machine__6995__auto__);

(statearr_49687[(1)] = (1));

return statearr_49687;
});
var state_machine__6995__auto____1 = (function (state_49644){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_49644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e49688){if((e49688 instanceof Object)){
var ex__6998__auto__ = e49688;
var statearr_49689_49722 = state_49644;
(statearr_49689_49722[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49723 = state_49644;
state_49644 = G__49723;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_49644){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_49644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7052__auto__ = (function (){var statearr_49690 = f__7051__auto__.call(null);
(statearr_49690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___49691);

return statearr_49690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___49691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj49725 = {};
return obj49725;
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
return (function (p1__49726_SHARP_){
if(cljs.core.truth_(p1__49726_SHARP_.call(null,topic))){
return p1__49726_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49726_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3630__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t49849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t49849 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49850){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49850 = meta49850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49849.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t49849.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t49849.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t49849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t49849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t49849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t49849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t49849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49851){
var self__ = this;
var _49851__$1 = this;
return self__.meta49850;
});})(mults,ensure_mult))
;

cljs.core.async.t49849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49851,meta49850__$1){
var self__ = this;
var _49851__$1 = this;
return (new cljs.core.async.t49849(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49850__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t49849.cljs$lang$type = true;

cljs.core.async.t49849.cljs$lang$ctorStr = "cljs.core.async/t49849";

cljs.core.async.t49849.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t49849");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t49849 = ((function (mults,ensure_mult){
return (function __GT_t49849(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49850){
return (new cljs.core.async.t49849(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49850));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t49849(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
})()
;
var c__7050__auto___49971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___49971,mults,ensure_mult,p){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___49971,mults,ensure_mult,p){
return (function (state_49923){
var state_val_49924 = (state_49923[(1)]);
if((state_val_49924 === (7))){
var inst_49919 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49925_49972 = state_49923__$1;
(statearr_49925_49972[(2)] = inst_49919);

(statearr_49925_49972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (20))){
var state_49923__$1 = state_49923;
var statearr_49926_49973 = state_49923__$1;
(statearr_49926_49973[(2)] = null);

(statearr_49926_49973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (1))){
var state_49923__$1 = state_49923;
var statearr_49927_49974 = state_49923__$1;
(statearr_49927_49974[(2)] = null);

(statearr_49927_49974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (24))){
var inst_49902 = (state_49923[(7)]);
var inst_49911 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49902);
var state_49923__$1 = state_49923;
var statearr_49928_49975 = state_49923__$1;
(statearr_49928_49975[(2)] = inst_49911);

(statearr_49928_49975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (4))){
var inst_49854 = (state_49923[(8)]);
var inst_49854__$1 = (state_49923[(2)]);
var inst_49855 = (inst_49854__$1 == null);
var state_49923__$1 = (function (){var statearr_49929 = state_49923;
(statearr_49929[(8)] = inst_49854__$1);

return statearr_49929;
})();
if(cljs.core.truth_(inst_49855)){
var statearr_49930_49976 = state_49923__$1;
(statearr_49930_49976[(1)] = (5));

} else {
var statearr_49931_49977 = state_49923__$1;
(statearr_49931_49977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (15))){
var inst_49896 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49932_49978 = state_49923__$1;
(statearr_49932_49978[(2)] = inst_49896);

(statearr_49932_49978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (21))){
var inst_49916 = (state_49923[(2)]);
var state_49923__$1 = (function (){var statearr_49933 = state_49923;
(statearr_49933[(9)] = inst_49916);

return statearr_49933;
})();
var statearr_49934_49979 = state_49923__$1;
(statearr_49934_49979[(2)] = null);

(statearr_49934_49979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (13))){
var inst_49878 = (state_49923[(10)]);
var inst_49880 = cljs.core.chunked_seq_QMARK_.call(null,inst_49878);
var state_49923__$1 = state_49923;
if(inst_49880){
var statearr_49935_49980 = state_49923__$1;
(statearr_49935_49980[(1)] = (16));

} else {
var statearr_49936_49981 = state_49923__$1;
(statearr_49936_49981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (22))){
var inst_49908 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
if(cljs.core.truth_(inst_49908)){
var statearr_49937_49982 = state_49923__$1;
(statearr_49937_49982[(1)] = (23));

} else {
var statearr_49938_49983 = state_49923__$1;
(statearr_49938_49983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (6))){
var inst_49854 = (state_49923[(8)]);
var inst_49902 = (state_49923[(7)]);
var inst_49904 = (state_49923[(11)]);
var inst_49902__$1 = topic_fn.call(null,inst_49854);
var inst_49903 = cljs.core.deref.call(null,mults);
var inst_49904__$1 = cljs.core.get.call(null,inst_49903,inst_49902__$1);
var state_49923__$1 = (function (){var statearr_49939 = state_49923;
(statearr_49939[(7)] = inst_49902__$1);

(statearr_49939[(11)] = inst_49904__$1);

return statearr_49939;
})();
if(cljs.core.truth_(inst_49904__$1)){
var statearr_49940_49984 = state_49923__$1;
(statearr_49940_49984[(1)] = (19));

} else {
var statearr_49941_49985 = state_49923__$1;
(statearr_49941_49985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (25))){
var inst_49913 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49942_49986 = state_49923__$1;
(statearr_49942_49986[(2)] = inst_49913);

(statearr_49942_49986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (17))){
var inst_49878 = (state_49923[(10)]);
var inst_49887 = cljs.core.first.call(null,inst_49878);
var inst_49888 = cljs.core.async.muxch_STAR_.call(null,inst_49887);
var inst_49889 = cljs.core.async.close_BANG_.call(null,inst_49888);
var inst_49890 = cljs.core.next.call(null,inst_49878);
var inst_49864 = inst_49890;
var inst_49865 = null;
var inst_49866 = (0);
var inst_49867 = (0);
var state_49923__$1 = (function (){var statearr_49943 = state_49923;
(statearr_49943[(12)] = inst_49865);

(statearr_49943[(13)] = inst_49866);

(statearr_49943[(14)] = inst_49867);

(statearr_49943[(15)] = inst_49864);

(statearr_49943[(16)] = inst_49889);

return statearr_49943;
})();
var statearr_49944_49987 = state_49923__$1;
(statearr_49944_49987[(2)] = null);

(statearr_49944_49987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (3))){
var inst_49921 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49923__$1,inst_49921);
} else {
if((state_val_49924 === (12))){
var inst_49898 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49945_49988 = state_49923__$1;
(statearr_49945_49988[(2)] = inst_49898);

(statearr_49945_49988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (2))){
var state_49923__$1 = state_49923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49923__$1,(4),ch);
} else {
if((state_val_49924 === (23))){
var state_49923__$1 = state_49923;
var statearr_49946_49989 = state_49923__$1;
(statearr_49946_49989[(2)] = null);

(statearr_49946_49989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (19))){
var inst_49854 = (state_49923[(8)]);
var inst_49904 = (state_49923[(11)]);
var inst_49906 = cljs.core.async.muxch_STAR_.call(null,inst_49904);
var state_49923__$1 = state_49923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49923__$1,(22),inst_49906,inst_49854);
} else {
if((state_val_49924 === (11))){
var inst_49864 = (state_49923[(15)]);
var inst_49878 = (state_49923[(10)]);
var inst_49878__$1 = cljs.core.seq.call(null,inst_49864);
var state_49923__$1 = (function (){var statearr_49947 = state_49923;
(statearr_49947[(10)] = inst_49878__$1);

return statearr_49947;
})();
if(inst_49878__$1){
var statearr_49948_49990 = state_49923__$1;
(statearr_49948_49990[(1)] = (13));

} else {
var statearr_49949_49991 = state_49923__$1;
(statearr_49949_49991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (9))){
var inst_49900 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49950_49992 = state_49923__$1;
(statearr_49950_49992[(2)] = inst_49900);

(statearr_49950_49992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (5))){
var inst_49861 = cljs.core.deref.call(null,mults);
var inst_49862 = cljs.core.vals.call(null,inst_49861);
var inst_49863 = cljs.core.seq.call(null,inst_49862);
var inst_49864 = inst_49863;
var inst_49865 = null;
var inst_49866 = (0);
var inst_49867 = (0);
var state_49923__$1 = (function (){var statearr_49951 = state_49923;
(statearr_49951[(12)] = inst_49865);

(statearr_49951[(13)] = inst_49866);

(statearr_49951[(14)] = inst_49867);

(statearr_49951[(15)] = inst_49864);

return statearr_49951;
})();
var statearr_49952_49993 = state_49923__$1;
(statearr_49952_49993[(2)] = null);

(statearr_49952_49993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (14))){
var state_49923__$1 = state_49923;
var statearr_49956_49994 = state_49923__$1;
(statearr_49956_49994[(2)] = null);

(statearr_49956_49994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (16))){
var inst_49878 = (state_49923[(10)]);
var inst_49882 = cljs.core.chunk_first.call(null,inst_49878);
var inst_49883 = cljs.core.chunk_rest.call(null,inst_49878);
var inst_49884 = cljs.core.count.call(null,inst_49882);
var inst_49864 = inst_49883;
var inst_49865 = inst_49882;
var inst_49866 = inst_49884;
var inst_49867 = (0);
var state_49923__$1 = (function (){var statearr_49957 = state_49923;
(statearr_49957[(12)] = inst_49865);

(statearr_49957[(13)] = inst_49866);

(statearr_49957[(14)] = inst_49867);

(statearr_49957[(15)] = inst_49864);

return statearr_49957;
})();
var statearr_49958_49995 = state_49923__$1;
(statearr_49958_49995[(2)] = null);

(statearr_49958_49995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (10))){
var inst_49865 = (state_49923[(12)]);
var inst_49866 = (state_49923[(13)]);
var inst_49867 = (state_49923[(14)]);
var inst_49864 = (state_49923[(15)]);
var inst_49872 = cljs.core._nth.call(null,inst_49865,inst_49867);
var inst_49873 = cljs.core.async.muxch_STAR_.call(null,inst_49872);
var inst_49874 = cljs.core.async.close_BANG_.call(null,inst_49873);
var inst_49875 = (inst_49867 + (1));
var tmp49953 = inst_49865;
var tmp49954 = inst_49866;
var tmp49955 = inst_49864;
var inst_49864__$1 = tmp49955;
var inst_49865__$1 = tmp49953;
var inst_49866__$1 = tmp49954;
var inst_49867__$1 = inst_49875;
var state_49923__$1 = (function (){var statearr_49959 = state_49923;
(statearr_49959[(12)] = inst_49865__$1);

(statearr_49959[(13)] = inst_49866__$1);

(statearr_49959[(14)] = inst_49867__$1);

(statearr_49959[(15)] = inst_49864__$1);

(statearr_49959[(17)] = inst_49874);

return statearr_49959;
})();
var statearr_49960_49996 = state_49923__$1;
(statearr_49960_49996[(2)] = null);

(statearr_49960_49996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (18))){
var inst_49893 = (state_49923[(2)]);
var state_49923__$1 = state_49923;
var statearr_49961_49997 = state_49923__$1;
(statearr_49961_49997[(2)] = inst_49893);

(statearr_49961_49997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49924 === (8))){
var inst_49866 = (state_49923[(13)]);
var inst_49867 = (state_49923[(14)]);
var inst_49869 = (inst_49867 < inst_49866);
var inst_49870 = inst_49869;
var state_49923__$1 = state_49923;
if(cljs.core.truth_(inst_49870)){
var statearr_49962_49998 = state_49923__$1;
(statearr_49962_49998[(1)] = (10));

} else {
var statearr_49963_49999 = state_49923__$1;
(statearr_49963_49999[(1)] = (11));

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
});})(c__7050__auto___49971,mults,ensure_mult,p))
;
return ((function (switch__6994__auto__,c__7050__auto___49971,mults,ensure_mult,p){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_49967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49967[(0)] = state_machine__6995__auto__);

(statearr_49967[(1)] = (1));

return statearr_49967;
});
var state_machine__6995__auto____1 = (function (state_49923){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_49923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e49968){if((e49968 instanceof Object)){
var ex__6998__auto__ = e49968;
var statearr_49969_50000 = state_49923;
(statearr_49969_50000[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50001 = state_49923;
state_49923 = G__50001;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_49923){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_49923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___49971,mults,ensure_mult,p))
})();
var state__7052__auto__ = (function (){var statearr_49970 = f__7051__auto__.call(null);
(statearr_49970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___49971);

return statearr_49970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___49971,mults,ensure_mult,p))
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
var c__7050__auto___50138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50108){
var state_val_50109 = (state_50108[(1)]);
if((state_val_50109 === (7))){
var state_50108__$1 = state_50108;
var statearr_50110_50139 = state_50108__$1;
(statearr_50110_50139[(2)] = null);

(statearr_50110_50139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (1))){
var state_50108__$1 = state_50108;
var statearr_50111_50140 = state_50108__$1;
(statearr_50111_50140[(2)] = null);

(statearr_50111_50140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (4))){
var inst_50072 = (state_50108[(7)]);
var inst_50074 = (inst_50072 < cnt);
var state_50108__$1 = state_50108;
if(cljs.core.truth_(inst_50074)){
var statearr_50112_50141 = state_50108__$1;
(statearr_50112_50141[(1)] = (6));

} else {
var statearr_50113_50142 = state_50108__$1;
(statearr_50113_50142[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (15))){
var inst_50104 = (state_50108[(2)]);
var state_50108__$1 = state_50108;
var statearr_50114_50143 = state_50108__$1;
(statearr_50114_50143[(2)] = inst_50104);

(statearr_50114_50143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (13))){
var inst_50097 = cljs.core.async.close_BANG_.call(null,out);
var state_50108__$1 = state_50108;
var statearr_50115_50144 = state_50108__$1;
(statearr_50115_50144[(2)] = inst_50097);

(statearr_50115_50144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (6))){
var state_50108__$1 = state_50108;
var statearr_50116_50145 = state_50108__$1;
(statearr_50116_50145[(2)] = null);

(statearr_50116_50145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (3))){
var inst_50106 = (state_50108[(2)]);
var state_50108__$1 = state_50108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50108__$1,inst_50106);
} else {
if((state_val_50109 === (12))){
var inst_50094 = (state_50108[(8)]);
var inst_50094__$1 = (state_50108[(2)]);
var inst_50095 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50094__$1);
var state_50108__$1 = (function (){var statearr_50117 = state_50108;
(statearr_50117[(8)] = inst_50094__$1);

return statearr_50117;
})();
if(cljs.core.truth_(inst_50095)){
var statearr_50118_50146 = state_50108__$1;
(statearr_50118_50146[(1)] = (13));

} else {
var statearr_50119_50147 = state_50108__$1;
(statearr_50119_50147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (2))){
var inst_50071 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50072 = (0);
var state_50108__$1 = (function (){var statearr_50120 = state_50108;
(statearr_50120[(9)] = inst_50071);

(statearr_50120[(7)] = inst_50072);

return statearr_50120;
})();
var statearr_50121_50148 = state_50108__$1;
(statearr_50121_50148[(2)] = null);

(statearr_50121_50148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (11))){
var inst_50072 = (state_50108[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50108,(10),Object,null,(9));
var inst_50081 = chs__$1.call(null,inst_50072);
var inst_50082 = done.call(null,inst_50072);
var inst_50083 = cljs.core.async.take_BANG_.call(null,inst_50081,inst_50082);
var state_50108__$1 = state_50108;
var statearr_50122_50149 = state_50108__$1;
(statearr_50122_50149[(2)] = inst_50083);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50108__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (9))){
var inst_50072 = (state_50108[(7)]);
var inst_50085 = (state_50108[(2)]);
var inst_50086 = (inst_50072 + (1));
var inst_50072__$1 = inst_50086;
var state_50108__$1 = (function (){var statearr_50123 = state_50108;
(statearr_50123[(7)] = inst_50072__$1);

(statearr_50123[(10)] = inst_50085);

return statearr_50123;
})();
var statearr_50124_50150 = state_50108__$1;
(statearr_50124_50150[(2)] = null);

(statearr_50124_50150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (5))){
var inst_50092 = (state_50108[(2)]);
var state_50108__$1 = (function (){var statearr_50125 = state_50108;
(statearr_50125[(11)] = inst_50092);

return statearr_50125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50108__$1,(12),dchan);
} else {
if((state_val_50109 === (14))){
var inst_50094 = (state_50108[(8)]);
var inst_50099 = cljs.core.apply.call(null,f,inst_50094);
var state_50108__$1 = state_50108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50108__$1,(16),out,inst_50099);
} else {
if((state_val_50109 === (16))){
var inst_50101 = (state_50108[(2)]);
var state_50108__$1 = (function (){var statearr_50126 = state_50108;
(statearr_50126[(12)] = inst_50101);

return statearr_50126;
})();
var statearr_50127_50151 = state_50108__$1;
(statearr_50127_50151[(2)] = null);

(statearr_50127_50151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (10))){
var inst_50076 = (state_50108[(2)]);
var inst_50077 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50108__$1 = (function (){var statearr_50128 = state_50108;
(statearr_50128[(13)] = inst_50076);

return statearr_50128;
})();
var statearr_50129_50152 = state_50108__$1;
(statearr_50129_50152[(2)] = inst_50077);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50108__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50109 === (8))){
var inst_50090 = (state_50108[(2)]);
var state_50108__$1 = state_50108;
var statearr_50130_50153 = state_50108__$1;
(statearr_50130_50153[(2)] = inst_50090);

(statearr_50130_50153[(1)] = (5));


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
});})(c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6994__auto__,c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50134[(0)] = state_machine__6995__auto__);

(statearr_50134[(1)] = (1));

return statearr_50134;
});
var state_machine__6995__auto____1 = (function (state_50108){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50135){if((e50135 instanceof Object)){
var ex__6998__auto__ = e50135;
var statearr_50136_50154 = state_50108;
(statearr_50136_50154[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50155 = state_50108;
state_50108 = G__50155;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50108){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7052__auto__ = (function (){var statearr_50137 = f__7051__auto__.call(null);
(statearr_50137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50138);

return statearr_50137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50138,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7050__auto___50263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50263,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50263,out){
return (function (state_50239){
var state_val_50240 = (state_50239[(1)]);
if((state_val_50240 === (7))){
var inst_50218 = (state_50239[(7)]);
var inst_50219 = (state_50239[(8)]);
var inst_50218__$1 = (state_50239[(2)]);
var inst_50219__$1 = cljs.core.nth.call(null,inst_50218__$1,(0),null);
var inst_50220 = cljs.core.nth.call(null,inst_50218__$1,(1),null);
var inst_50221 = (inst_50219__$1 == null);
var state_50239__$1 = (function (){var statearr_50241 = state_50239;
(statearr_50241[(7)] = inst_50218__$1);

(statearr_50241[(9)] = inst_50220);

(statearr_50241[(8)] = inst_50219__$1);

return statearr_50241;
})();
if(cljs.core.truth_(inst_50221)){
var statearr_50242_50264 = state_50239__$1;
(statearr_50242_50264[(1)] = (8));

} else {
var statearr_50243_50265 = state_50239__$1;
(statearr_50243_50265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (1))){
var inst_50210 = cljs.core.vec.call(null,chs);
var inst_50211 = inst_50210;
var state_50239__$1 = (function (){var statearr_50244 = state_50239;
(statearr_50244[(10)] = inst_50211);

return statearr_50244;
})();
var statearr_50245_50266 = state_50239__$1;
(statearr_50245_50266[(2)] = null);

(statearr_50245_50266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (4))){
var inst_50211 = (state_50239[(10)]);
var state_50239__$1 = state_50239;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50239__$1,(7),inst_50211);
} else {
if((state_val_50240 === (6))){
var inst_50235 = (state_50239[(2)]);
var state_50239__$1 = state_50239;
var statearr_50246_50267 = state_50239__$1;
(statearr_50246_50267[(2)] = inst_50235);

(statearr_50246_50267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (3))){
var inst_50237 = (state_50239[(2)]);
var state_50239__$1 = state_50239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50239__$1,inst_50237);
} else {
if((state_val_50240 === (2))){
var inst_50211 = (state_50239[(10)]);
var inst_50213 = cljs.core.count.call(null,inst_50211);
var inst_50214 = (inst_50213 > (0));
var state_50239__$1 = state_50239;
if(cljs.core.truth_(inst_50214)){
var statearr_50248_50268 = state_50239__$1;
(statearr_50248_50268[(1)] = (4));

} else {
var statearr_50249_50269 = state_50239__$1;
(statearr_50249_50269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (11))){
var inst_50211 = (state_50239[(10)]);
var inst_50228 = (state_50239[(2)]);
var tmp50247 = inst_50211;
var inst_50211__$1 = tmp50247;
var state_50239__$1 = (function (){var statearr_50250 = state_50239;
(statearr_50250[(11)] = inst_50228);

(statearr_50250[(10)] = inst_50211__$1);

return statearr_50250;
})();
var statearr_50251_50270 = state_50239__$1;
(statearr_50251_50270[(2)] = null);

(statearr_50251_50270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (9))){
var inst_50219 = (state_50239[(8)]);
var state_50239__$1 = state_50239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50239__$1,(11),out,inst_50219);
} else {
if((state_val_50240 === (5))){
var inst_50233 = cljs.core.async.close_BANG_.call(null,out);
var state_50239__$1 = state_50239;
var statearr_50252_50271 = state_50239__$1;
(statearr_50252_50271[(2)] = inst_50233);

(statearr_50252_50271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (10))){
var inst_50231 = (state_50239[(2)]);
var state_50239__$1 = state_50239;
var statearr_50253_50272 = state_50239__$1;
(statearr_50253_50272[(2)] = inst_50231);

(statearr_50253_50272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50240 === (8))){
var inst_50218 = (state_50239[(7)]);
var inst_50220 = (state_50239[(9)]);
var inst_50219 = (state_50239[(8)]);
var inst_50211 = (state_50239[(10)]);
var inst_50223 = (function (){var c = inst_50220;
var v = inst_50219;
var vec__50216 = inst_50218;
var cs = inst_50211;
return ((function (c,v,vec__50216,cs,inst_50218,inst_50220,inst_50219,inst_50211,state_val_50240,c__7050__auto___50263,out){
return (function (p1__50156_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50156_SHARP_);
});
;})(c,v,vec__50216,cs,inst_50218,inst_50220,inst_50219,inst_50211,state_val_50240,c__7050__auto___50263,out))
})();
var inst_50224 = cljs.core.filterv.call(null,inst_50223,inst_50211);
var inst_50211__$1 = inst_50224;
var state_50239__$1 = (function (){var statearr_50254 = state_50239;
(statearr_50254[(10)] = inst_50211__$1);

return statearr_50254;
})();
var statearr_50255_50273 = state_50239__$1;
(statearr_50255_50273[(2)] = null);

(statearr_50255_50273[(1)] = (2));


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
});})(c__7050__auto___50263,out))
;
return ((function (switch__6994__auto__,c__7050__auto___50263,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50259[(0)] = state_machine__6995__auto__);

(statearr_50259[(1)] = (1));

return statearr_50259;
});
var state_machine__6995__auto____1 = (function (state_50239){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50260){if((e50260 instanceof Object)){
var ex__6998__auto__ = e50260;
var statearr_50261_50274 = state_50239;
(statearr_50261_50274[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50275 = state_50239;
state_50239 = G__50275;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50239){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50263,out))
})();
var state__7052__auto__ = (function (){var statearr_50262 = f__7051__auto__.call(null);
(statearr_50262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50263);

return statearr_50262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50263,out))
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
var c__7050__auto___50368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50368,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50368,out){
return (function (state_50345){
var state_val_50346 = (state_50345[(1)]);
if((state_val_50346 === (7))){
var inst_50327 = (state_50345[(7)]);
var inst_50327__$1 = (state_50345[(2)]);
var inst_50328 = (inst_50327__$1 == null);
var inst_50329 = cljs.core.not.call(null,inst_50328);
var state_50345__$1 = (function (){var statearr_50347 = state_50345;
(statearr_50347[(7)] = inst_50327__$1);

return statearr_50347;
})();
if(inst_50329){
var statearr_50348_50369 = state_50345__$1;
(statearr_50348_50369[(1)] = (8));

} else {
var statearr_50349_50370 = state_50345__$1;
(statearr_50349_50370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (1))){
var inst_50322 = (0);
var state_50345__$1 = (function (){var statearr_50350 = state_50345;
(statearr_50350[(8)] = inst_50322);

return statearr_50350;
})();
var statearr_50351_50371 = state_50345__$1;
(statearr_50351_50371[(2)] = null);

(statearr_50351_50371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (4))){
var state_50345__$1 = state_50345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50345__$1,(7),ch);
} else {
if((state_val_50346 === (6))){
var inst_50340 = (state_50345[(2)]);
var state_50345__$1 = state_50345;
var statearr_50352_50372 = state_50345__$1;
(statearr_50352_50372[(2)] = inst_50340);

(statearr_50352_50372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (3))){
var inst_50342 = (state_50345[(2)]);
var inst_50343 = cljs.core.async.close_BANG_.call(null,out);
var state_50345__$1 = (function (){var statearr_50353 = state_50345;
(statearr_50353[(9)] = inst_50342);

return statearr_50353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50345__$1,inst_50343);
} else {
if((state_val_50346 === (2))){
var inst_50322 = (state_50345[(8)]);
var inst_50324 = (inst_50322 < n);
var state_50345__$1 = state_50345;
if(cljs.core.truth_(inst_50324)){
var statearr_50354_50373 = state_50345__$1;
(statearr_50354_50373[(1)] = (4));

} else {
var statearr_50355_50374 = state_50345__$1;
(statearr_50355_50374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (11))){
var inst_50322 = (state_50345[(8)]);
var inst_50332 = (state_50345[(2)]);
var inst_50333 = (inst_50322 + (1));
var inst_50322__$1 = inst_50333;
var state_50345__$1 = (function (){var statearr_50356 = state_50345;
(statearr_50356[(8)] = inst_50322__$1);

(statearr_50356[(10)] = inst_50332);

return statearr_50356;
})();
var statearr_50357_50375 = state_50345__$1;
(statearr_50357_50375[(2)] = null);

(statearr_50357_50375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (9))){
var state_50345__$1 = state_50345;
var statearr_50358_50376 = state_50345__$1;
(statearr_50358_50376[(2)] = null);

(statearr_50358_50376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (5))){
var state_50345__$1 = state_50345;
var statearr_50359_50377 = state_50345__$1;
(statearr_50359_50377[(2)] = null);

(statearr_50359_50377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (10))){
var inst_50337 = (state_50345[(2)]);
var state_50345__$1 = state_50345;
var statearr_50360_50378 = state_50345__$1;
(statearr_50360_50378[(2)] = inst_50337);

(statearr_50360_50378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50346 === (8))){
var inst_50327 = (state_50345[(7)]);
var state_50345__$1 = state_50345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50345__$1,(11),out,inst_50327);
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
});})(c__7050__auto___50368,out))
;
return ((function (switch__6994__auto__,c__7050__auto___50368,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50364[(0)] = state_machine__6995__auto__);

(statearr_50364[(1)] = (1));

return statearr_50364;
});
var state_machine__6995__auto____1 = (function (state_50345){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50365){if((e50365 instanceof Object)){
var ex__6998__auto__ = e50365;
var statearr_50366_50379 = state_50345;
(statearr_50366_50379[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50380 = state_50345;
state_50345 = G__50380;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50345){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50368,out))
})();
var state__7052__auto__ = (function (){var statearr_50367 = f__7051__auto__.call(null);
(statearr_50367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50368);

return statearr_50367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50368,out))
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
if(typeof cljs.core.async.t50388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50388 = (function (ch,f,map_LT_,meta50389){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50389 = meta50389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t50391 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50391 = (function (fn1,_,meta50389,map_LT_,f,ch,meta50392){
this.fn1 = fn1;
this._ = _;
this.meta50389 = meta50389;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50392 = meta50392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50391.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t50391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t50391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50381_SHARP_){
return f1.call(null,(((p1__50381_SHARP_ == null))?null:self__.f.call(null,p1__50381_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t50391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50393){
var self__ = this;
var _50393__$1 = this;
return self__.meta50392;
});})(___$1))
;

cljs.core.async.t50391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50393,meta50392__$1){
var self__ = this;
var _50393__$1 = this;
return (new cljs.core.async.t50391(self__.fn1,self__._,self__.meta50389,self__.map_LT_,self__.f,self__.ch,meta50392__$1));
});})(___$1))
;

cljs.core.async.t50391.cljs$lang$type = true;

cljs.core.async.t50391.cljs$lang$ctorStr = "cljs.core.async/t50391";

cljs.core.async.t50391.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t50391");
});})(___$1))
;

cljs.core.async.__GT_t50391 = ((function (___$1){
return (function __GT_t50391(fn1__$1,___$2,meta50389__$1,map_LT___$1,f__$1,ch__$1,meta50392){
return (new cljs.core.async.t50391(fn1__$1,___$2,meta50389__$1,map_LT___$1,f__$1,ch__$1,meta50392));
});})(___$1))
;

}

return (new cljs.core.async.t50391(fn1,___$1,self__.meta50389,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t50388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t50388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50390){
var self__ = this;
var _50390__$1 = this;
return self__.meta50389;
});

cljs.core.async.t50388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50390,meta50389__$1){
var self__ = this;
var _50390__$1 = this;
return (new cljs.core.async.t50388(self__.ch,self__.f,self__.map_LT_,meta50389__$1));
});

cljs.core.async.t50388.cljs$lang$type = true;

cljs.core.async.t50388.cljs$lang$ctorStr = "cljs.core.async/t50388";

cljs.core.async.t50388.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t50388");
});

cljs.core.async.__GT_t50388 = (function __GT_t50388(ch__$1,f__$1,map_LT___$1,meta50389){
return (new cljs.core.async.t50388(ch__$1,f__$1,map_LT___$1,meta50389));
});

}

return (new cljs.core.async.t50388(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t50397 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50397 = (function (ch,f,map_GT_,meta50398){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta50398 = meta50398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t50397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t50397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50399){
var self__ = this;
var _50399__$1 = this;
return self__.meta50398;
});

cljs.core.async.t50397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50399,meta50398__$1){
var self__ = this;
var _50399__$1 = this;
return (new cljs.core.async.t50397(self__.ch,self__.f,self__.map_GT_,meta50398__$1));
});

cljs.core.async.t50397.cljs$lang$type = true;

cljs.core.async.t50397.cljs$lang$ctorStr = "cljs.core.async/t50397";

cljs.core.async.t50397.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t50397");
});

cljs.core.async.__GT_t50397 = (function __GT_t50397(ch__$1,f__$1,map_GT___$1,meta50398){
return (new cljs.core.async.t50397(ch__$1,f__$1,map_GT___$1,meta50398));
});

}

return (new cljs.core.async.t50397(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t50403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t50403 = (function (ch,p,filter_GT_,meta50404){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta50404 = meta50404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t50403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t50403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50405){
var self__ = this;
var _50405__$1 = this;
return self__.meta50404;
});

cljs.core.async.t50403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50405,meta50404__$1){
var self__ = this;
var _50405__$1 = this;
return (new cljs.core.async.t50403(self__.ch,self__.p,self__.filter_GT_,meta50404__$1));
});

cljs.core.async.t50403.cljs$lang$type = true;

cljs.core.async.t50403.cljs$lang$ctorStr = "cljs.core.async/t50403";

cljs.core.async.t50403.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t50403");
});

cljs.core.async.__GT_t50403 = (function __GT_t50403(ch__$1,p__$1,filter_GT___$1,meta50404){
return (new cljs.core.async.t50403(ch__$1,p__$1,filter_GT___$1,meta50404));
});

}

return (new cljs.core.async.t50403(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/protocols/out/cljs/core/async.cljs"], null)));
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
var c__7050__auto___50488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50488,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50488,out){
return (function (state_50467){
var state_val_50468 = (state_50467[(1)]);
if((state_val_50468 === (7))){
var inst_50463 = (state_50467[(2)]);
var state_50467__$1 = state_50467;
var statearr_50469_50489 = state_50467__$1;
(statearr_50469_50489[(2)] = inst_50463);

(statearr_50469_50489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (1))){
var state_50467__$1 = state_50467;
var statearr_50470_50490 = state_50467__$1;
(statearr_50470_50490[(2)] = null);

(statearr_50470_50490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (4))){
var inst_50449 = (state_50467[(7)]);
var inst_50449__$1 = (state_50467[(2)]);
var inst_50450 = (inst_50449__$1 == null);
var state_50467__$1 = (function (){var statearr_50471 = state_50467;
(statearr_50471[(7)] = inst_50449__$1);

return statearr_50471;
})();
if(cljs.core.truth_(inst_50450)){
var statearr_50472_50491 = state_50467__$1;
(statearr_50472_50491[(1)] = (5));

} else {
var statearr_50473_50492 = state_50467__$1;
(statearr_50473_50492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (6))){
var inst_50449 = (state_50467[(7)]);
var inst_50454 = p.call(null,inst_50449);
var state_50467__$1 = state_50467;
if(cljs.core.truth_(inst_50454)){
var statearr_50474_50493 = state_50467__$1;
(statearr_50474_50493[(1)] = (8));

} else {
var statearr_50475_50494 = state_50467__$1;
(statearr_50475_50494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (3))){
var inst_50465 = (state_50467[(2)]);
var state_50467__$1 = state_50467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50467__$1,inst_50465);
} else {
if((state_val_50468 === (2))){
var state_50467__$1 = state_50467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50467__$1,(4),ch);
} else {
if((state_val_50468 === (11))){
var inst_50457 = (state_50467[(2)]);
var state_50467__$1 = state_50467;
var statearr_50476_50495 = state_50467__$1;
(statearr_50476_50495[(2)] = inst_50457);

(statearr_50476_50495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (9))){
var state_50467__$1 = state_50467;
var statearr_50477_50496 = state_50467__$1;
(statearr_50477_50496[(2)] = null);

(statearr_50477_50496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (5))){
var inst_50452 = cljs.core.async.close_BANG_.call(null,out);
var state_50467__$1 = state_50467;
var statearr_50478_50497 = state_50467__$1;
(statearr_50478_50497[(2)] = inst_50452);

(statearr_50478_50497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (10))){
var inst_50460 = (state_50467[(2)]);
var state_50467__$1 = (function (){var statearr_50479 = state_50467;
(statearr_50479[(8)] = inst_50460);

return statearr_50479;
})();
var statearr_50480_50498 = state_50467__$1;
(statearr_50480_50498[(2)] = null);

(statearr_50480_50498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50468 === (8))){
var inst_50449 = (state_50467[(7)]);
var state_50467__$1 = state_50467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50467__$1,(11),out,inst_50449);
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
});})(c__7050__auto___50488,out))
;
return ((function (switch__6994__auto__,c__7050__auto___50488,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50484 = [null,null,null,null,null,null,null,null,null];
(statearr_50484[(0)] = state_machine__6995__auto__);

(statearr_50484[(1)] = (1));

return statearr_50484;
});
var state_machine__6995__auto____1 = (function (state_50467){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50485){if((e50485 instanceof Object)){
var ex__6998__auto__ = e50485;
var statearr_50486_50499 = state_50467;
(statearr_50486_50499[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50500 = state_50467;
state_50467 = G__50500;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50467){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50488,out))
})();
var state__7052__auto__ = (function (){var statearr_50487 = f__7051__auto__.call(null);
(statearr_50487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50488);

return statearr_50487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50488,out))
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
return (function (state_50666){
var state_val_50667 = (state_50666[(1)]);
if((state_val_50667 === (7))){
var inst_50662 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50668_50709 = state_50666__$1;
(statearr_50668_50709[(2)] = inst_50662);

(statearr_50668_50709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (20))){
var inst_50632 = (state_50666[(7)]);
var inst_50643 = (state_50666[(2)]);
var inst_50644 = cljs.core.next.call(null,inst_50632);
var inst_50618 = inst_50644;
var inst_50619 = null;
var inst_50620 = (0);
var inst_50621 = (0);
var state_50666__$1 = (function (){var statearr_50669 = state_50666;
(statearr_50669[(8)] = inst_50621);

(statearr_50669[(9)] = inst_50618);

(statearr_50669[(10)] = inst_50620);

(statearr_50669[(11)] = inst_50619);

(statearr_50669[(12)] = inst_50643);

return statearr_50669;
})();
var statearr_50670_50710 = state_50666__$1;
(statearr_50670_50710[(2)] = null);

(statearr_50670_50710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (1))){
var state_50666__$1 = state_50666;
var statearr_50671_50711 = state_50666__$1;
(statearr_50671_50711[(2)] = null);

(statearr_50671_50711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (4))){
var inst_50607 = (state_50666[(13)]);
var inst_50607__$1 = (state_50666[(2)]);
var inst_50608 = (inst_50607__$1 == null);
var state_50666__$1 = (function (){var statearr_50672 = state_50666;
(statearr_50672[(13)] = inst_50607__$1);

return statearr_50672;
})();
if(cljs.core.truth_(inst_50608)){
var statearr_50673_50712 = state_50666__$1;
(statearr_50673_50712[(1)] = (5));

} else {
var statearr_50674_50713 = state_50666__$1;
(statearr_50674_50713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (15))){
var state_50666__$1 = state_50666;
var statearr_50678_50714 = state_50666__$1;
(statearr_50678_50714[(2)] = null);

(statearr_50678_50714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (21))){
var state_50666__$1 = state_50666;
var statearr_50679_50715 = state_50666__$1;
(statearr_50679_50715[(2)] = null);

(statearr_50679_50715[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (13))){
var inst_50621 = (state_50666[(8)]);
var inst_50618 = (state_50666[(9)]);
var inst_50620 = (state_50666[(10)]);
var inst_50619 = (state_50666[(11)]);
var inst_50628 = (state_50666[(2)]);
var inst_50629 = (inst_50621 + (1));
var tmp50675 = inst_50618;
var tmp50676 = inst_50620;
var tmp50677 = inst_50619;
var inst_50618__$1 = tmp50675;
var inst_50619__$1 = tmp50677;
var inst_50620__$1 = tmp50676;
var inst_50621__$1 = inst_50629;
var state_50666__$1 = (function (){var statearr_50680 = state_50666;
(statearr_50680[(14)] = inst_50628);

(statearr_50680[(8)] = inst_50621__$1);

(statearr_50680[(9)] = inst_50618__$1);

(statearr_50680[(10)] = inst_50620__$1);

(statearr_50680[(11)] = inst_50619__$1);

return statearr_50680;
})();
var statearr_50681_50716 = state_50666__$1;
(statearr_50681_50716[(2)] = null);

(statearr_50681_50716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (22))){
var state_50666__$1 = state_50666;
var statearr_50682_50717 = state_50666__$1;
(statearr_50682_50717[(2)] = null);

(statearr_50682_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (6))){
var inst_50607 = (state_50666[(13)]);
var inst_50616 = f.call(null,inst_50607);
var inst_50617 = cljs.core.seq.call(null,inst_50616);
var inst_50618 = inst_50617;
var inst_50619 = null;
var inst_50620 = (0);
var inst_50621 = (0);
var state_50666__$1 = (function (){var statearr_50683 = state_50666;
(statearr_50683[(8)] = inst_50621);

(statearr_50683[(9)] = inst_50618);

(statearr_50683[(10)] = inst_50620);

(statearr_50683[(11)] = inst_50619);

return statearr_50683;
})();
var statearr_50684_50718 = state_50666__$1;
(statearr_50684_50718[(2)] = null);

(statearr_50684_50718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (17))){
var inst_50632 = (state_50666[(7)]);
var inst_50636 = cljs.core.chunk_first.call(null,inst_50632);
var inst_50637 = cljs.core.chunk_rest.call(null,inst_50632);
var inst_50638 = cljs.core.count.call(null,inst_50636);
var inst_50618 = inst_50637;
var inst_50619 = inst_50636;
var inst_50620 = inst_50638;
var inst_50621 = (0);
var state_50666__$1 = (function (){var statearr_50685 = state_50666;
(statearr_50685[(8)] = inst_50621);

(statearr_50685[(9)] = inst_50618);

(statearr_50685[(10)] = inst_50620);

(statearr_50685[(11)] = inst_50619);

return statearr_50685;
})();
var statearr_50686_50719 = state_50666__$1;
(statearr_50686_50719[(2)] = null);

(statearr_50686_50719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (3))){
var inst_50664 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50666__$1,inst_50664);
} else {
if((state_val_50667 === (12))){
var inst_50652 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50687_50720 = state_50666__$1;
(statearr_50687_50720[(2)] = inst_50652);

(statearr_50687_50720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (2))){
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50666__$1,(4),in$);
} else {
if((state_val_50667 === (23))){
var inst_50660 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50688_50721 = state_50666__$1;
(statearr_50688_50721[(2)] = inst_50660);

(statearr_50688_50721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (19))){
var inst_50647 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50689_50722 = state_50666__$1;
(statearr_50689_50722[(2)] = inst_50647);

(statearr_50689_50722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (11))){
var inst_50618 = (state_50666[(9)]);
var inst_50632 = (state_50666[(7)]);
var inst_50632__$1 = cljs.core.seq.call(null,inst_50618);
var state_50666__$1 = (function (){var statearr_50690 = state_50666;
(statearr_50690[(7)] = inst_50632__$1);

return statearr_50690;
})();
if(inst_50632__$1){
var statearr_50691_50723 = state_50666__$1;
(statearr_50691_50723[(1)] = (14));

} else {
var statearr_50692_50724 = state_50666__$1;
(statearr_50692_50724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (9))){
var inst_50654 = (state_50666[(2)]);
var inst_50655 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50666__$1 = (function (){var statearr_50693 = state_50666;
(statearr_50693[(15)] = inst_50654);

return statearr_50693;
})();
if(cljs.core.truth_(inst_50655)){
var statearr_50694_50725 = state_50666__$1;
(statearr_50694_50725[(1)] = (21));

} else {
var statearr_50695_50726 = state_50666__$1;
(statearr_50695_50726[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (5))){
var inst_50610 = cljs.core.async.close_BANG_.call(null,out);
var state_50666__$1 = state_50666;
var statearr_50696_50727 = state_50666__$1;
(statearr_50696_50727[(2)] = inst_50610);

(statearr_50696_50727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (14))){
var inst_50632 = (state_50666[(7)]);
var inst_50634 = cljs.core.chunked_seq_QMARK_.call(null,inst_50632);
var state_50666__$1 = state_50666;
if(inst_50634){
var statearr_50697_50728 = state_50666__$1;
(statearr_50697_50728[(1)] = (17));

} else {
var statearr_50698_50729 = state_50666__$1;
(statearr_50698_50729[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (16))){
var inst_50650 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50699_50730 = state_50666__$1;
(statearr_50699_50730[(2)] = inst_50650);

(statearr_50699_50730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (10))){
var inst_50621 = (state_50666[(8)]);
var inst_50619 = (state_50666[(11)]);
var inst_50626 = cljs.core._nth.call(null,inst_50619,inst_50621);
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50666__$1,(13),out,inst_50626);
} else {
if((state_val_50667 === (18))){
var inst_50632 = (state_50666[(7)]);
var inst_50641 = cljs.core.first.call(null,inst_50632);
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50666__$1,(20),out,inst_50641);
} else {
if((state_val_50667 === (8))){
var inst_50621 = (state_50666[(8)]);
var inst_50620 = (state_50666[(10)]);
var inst_50623 = (inst_50621 < inst_50620);
var inst_50624 = inst_50623;
var state_50666__$1 = state_50666;
if(cljs.core.truth_(inst_50624)){
var statearr_50700_50731 = state_50666__$1;
(statearr_50700_50731[(1)] = (10));

} else {
var statearr_50701_50732 = state_50666__$1;
(statearr_50701_50732[(1)] = (11));

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
var statearr_50705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50705[(0)] = state_machine__6995__auto__);

(statearr_50705[(1)] = (1));

return statearr_50705;
});
var state_machine__6995__auto____1 = (function (state_50666){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50706){if((e50706 instanceof Object)){
var ex__6998__auto__ = e50706;
var statearr_50707_50733 = state_50666;
(statearr_50707_50733[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50734 = state_50666;
state_50666 = G__50734;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50666){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto__))
})();
var state__7052__auto__ = (function (){var statearr_50708 = f__7051__auto__.call(null);
(statearr_50708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto__);

return statearr_50708;
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
var c__7050__auto___50831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50831,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50831,out){
return (function (state_50806){
var state_val_50807 = (state_50806[(1)]);
if((state_val_50807 === (7))){
var inst_50801 = (state_50806[(2)]);
var state_50806__$1 = state_50806;
var statearr_50808_50832 = state_50806__$1;
(statearr_50808_50832[(2)] = inst_50801);

(statearr_50808_50832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (1))){
var inst_50783 = null;
var state_50806__$1 = (function (){var statearr_50809 = state_50806;
(statearr_50809[(7)] = inst_50783);

return statearr_50809;
})();
var statearr_50810_50833 = state_50806__$1;
(statearr_50810_50833[(2)] = null);

(statearr_50810_50833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (4))){
var inst_50786 = (state_50806[(8)]);
var inst_50786__$1 = (state_50806[(2)]);
var inst_50787 = (inst_50786__$1 == null);
var inst_50788 = cljs.core.not.call(null,inst_50787);
var state_50806__$1 = (function (){var statearr_50811 = state_50806;
(statearr_50811[(8)] = inst_50786__$1);

return statearr_50811;
})();
if(inst_50788){
var statearr_50812_50834 = state_50806__$1;
(statearr_50812_50834[(1)] = (5));

} else {
var statearr_50813_50835 = state_50806__$1;
(statearr_50813_50835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (6))){
var state_50806__$1 = state_50806;
var statearr_50814_50836 = state_50806__$1;
(statearr_50814_50836[(2)] = null);

(statearr_50814_50836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (3))){
var inst_50803 = (state_50806[(2)]);
var inst_50804 = cljs.core.async.close_BANG_.call(null,out);
var state_50806__$1 = (function (){var statearr_50815 = state_50806;
(statearr_50815[(9)] = inst_50803);

return statearr_50815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50806__$1,inst_50804);
} else {
if((state_val_50807 === (2))){
var state_50806__$1 = state_50806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50806__$1,(4),ch);
} else {
if((state_val_50807 === (11))){
var inst_50786 = (state_50806[(8)]);
var inst_50795 = (state_50806[(2)]);
var inst_50783 = inst_50786;
var state_50806__$1 = (function (){var statearr_50816 = state_50806;
(statearr_50816[(7)] = inst_50783);

(statearr_50816[(10)] = inst_50795);

return statearr_50816;
})();
var statearr_50817_50837 = state_50806__$1;
(statearr_50817_50837[(2)] = null);

(statearr_50817_50837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (9))){
var inst_50786 = (state_50806[(8)]);
var state_50806__$1 = state_50806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50806__$1,(11),out,inst_50786);
} else {
if((state_val_50807 === (5))){
var inst_50783 = (state_50806[(7)]);
var inst_50786 = (state_50806[(8)]);
var inst_50790 = cljs.core._EQ_.call(null,inst_50786,inst_50783);
var state_50806__$1 = state_50806;
if(inst_50790){
var statearr_50819_50838 = state_50806__$1;
(statearr_50819_50838[(1)] = (8));

} else {
var statearr_50820_50839 = state_50806__$1;
(statearr_50820_50839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (10))){
var inst_50798 = (state_50806[(2)]);
var state_50806__$1 = state_50806;
var statearr_50821_50840 = state_50806__$1;
(statearr_50821_50840[(2)] = inst_50798);

(statearr_50821_50840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50807 === (8))){
var inst_50783 = (state_50806[(7)]);
var tmp50818 = inst_50783;
var inst_50783__$1 = tmp50818;
var state_50806__$1 = (function (){var statearr_50822 = state_50806;
(statearr_50822[(7)] = inst_50783__$1);

return statearr_50822;
})();
var statearr_50823_50841 = state_50806__$1;
(statearr_50823_50841[(2)] = null);

(statearr_50823_50841[(1)] = (2));


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
});})(c__7050__auto___50831,out))
;
return ((function (switch__6994__auto__,c__7050__auto___50831,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50827[(0)] = state_machine__6995__auto__);

(statearr_50827[(1)] = (1));

return statearr_50827;
});
var state_machine__6995__auto____1 = (function (state_50806){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50828){if((e50828 instanceof Object)){
var ex__6998__auto__ = e50828;
var statearr_50829_50842 = state_50806;
(statearr_50829_50842[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50843 = state_50806;
state_50806 = G__50843;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50806){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50831,out))
})();
var state__7052__auto__ = (function (){var statearr_50830 = f__7051__auto__.call(null);
(statearr_50830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50831);

return statearr_50830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50831,out))
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
var c__7050__auto___50978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___50978,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___50978,out){
return (function (state_50948){
var state_val_50949 = (state_50948[(1)]);
if((state_val_50949 === (7))){
var inst_50944 = (state_50948[(2)]);
var state_50948__$1 = state_50948;
var statearr_50950_50979 = state_50948__$1;
(statearr_50950_50979[(2)] = inst_50944);

(statearr_50950_50979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (1))){
var inst_50911 = (new Array(n));
var inst_50912 = inst_50911;
var inst_50913 = (0);
var state_50948__$1 = (function (){var statearr_50951 = state_50948;
(statearr_50951[(7)] = inst_50913);

(statearr_50951[(8)] = inst_50912);

return statearr_50951;
})();
var statearr_50952_50980 = state_50948__$1;
(statearr_50952_50980[(2)] = null);

(statearr_50952_50980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (4))){
var inst_50916 = (state_50948[(9)]);
var inst_50916__$1 = (state_50948[(2)]);
var inst_50917 = (inst_50916__$1 == null);
var inst_50918 = cljs.core.not.call(null,inst_50917);
var state_50948__$1 = (function (){var statearr_50953 = state_50948;
(statearr_50953[(9)] = inst_50916__$1);

return statearr_50953;
})();
if(inst_50918){
var statearr_50954_50981 = state_50948__$1;
(statearr_50954_50981[(1)] = (5));

} else {
var statearr_50955_50982 = state_50948__$1;
(statearr_50955_50982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (15))){
var inst_50938 = (state_50948[(2)]);
var state_50948__$1 = state_50948;
var statearr_50956_50983 = state_50948__$1;
(statearr_50956_50983[(2)] = inst_50938);

(statearr_50956_50983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (13))){
var state_50948__$1 = state_50948;
var statearr_50957_50984 = state_50948__$1;
(statearr_50957_50984[(2)] = null);

(statearr_50957_50984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (6))){
var inst_50913 = (state_50948[(7)]);
var inst_50934 = (inst_50913 > (0));
var state_50948__$1 = state_50948;
if(cljs.core.truth_(inst_50934)){
var statearr_50958_50985 = state_50948__$1;
(statearr_50958_50985[(1)] = (12));

} else {
var statearr_50959_50986 = state_50948__$1;
(statearr_50959_50986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (3))){
var inst_50946 = (state_50948[(2)]);
var state_50948__$1 = state_50948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50948__$1,inst_50946);
} else {
if((state_val_50949 === (12))){
var inst_50912 = (state_50948[(8)]);
var inst_50936 = cljs.core.vec.call(null,inst_50912);
var state_50948__$1 = state_50948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50948__$1,(15),out,inst_50936);
} else {
if((state_val_50949 === (2))){
var state_50948__$1 = state_50948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50948__$1,(4),ch);
} else {
if((state_val_50949 === (11))){
var inst_50928 = (state_50948[(2)]);
var inst_50929 = (new Array(n));
var inst_50912 = inst_50929;
var inst_50913 = (0);
var state_50948__$1 = (function (){var statearr_50960 = state_50948;
(statearr_50960[(7)] = inst_50913);

(statearr_50960[(8)] = inst_50912);

(statearr_50960[(10)] = inst_50928);

return statearr_50960;
})();
var statearr_50961_50987 = state_50948__$1;
(statearr_50961_50987[(2)] = null);

(statearr_50961_50987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (9))){
var inst_50912 = (state_50948[(8)]);
var inst_50926 = cljs.core.vec.call(null,inst_50912);
var state_50948__$1 = state_50948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50948__$1,(11),out,inst_50926);
} else {
if((state_val_50949 === (5))){
var inst_50913 = (state_50948[(7)]);
var inst_50921 = (state_50948[(11)]);
var inst_50912 = (state_50948[(8)]);
var inst_50916 = (state_50948[(9)]);
var inst_50920 = (inst_50912[inst_50913] = inst_50916);
var inst_50921__$1 = (inst_50913 + (1));
var inst_50922 = (inst_50921__$1 < n);
var state_50948__$1 = (function (){var statearr_50962 = state_50948;
(statearr_50962[(12)] = inst_50920);

(statearr_50962[(11)] = inst_50921__$1);

return statearr_50962;
})();
if(cljs.core.truth_(inst_50922)){
var statearr_50963_50988 = state_50948__$1;
(statearr_50963_50988[(1)] = (8));

} else {
var statearr_50964_50989 = state_50948__$1;
(statearr_50964_50989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (14))){
var inst_50941 = (state_50948[(2)]);
var inst_50942 = cljs.core.async.close_BANG_.call(null,out);
var state_50948__$1 = (function (){var statearr_50966 = state_50948;
(statearr_50966[(13)] = inst_50941);

return statearr_50966;
})();
var statearr_50967_50990 = state_50948__$1;
(statearr_50967_50990[(2)] = inst_50942);

(statearr_50967_50990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (10))){
var inst_50932 = (state_50948[(2)]);
var state_50948__$1 = state_50948;
var statearr_50968_50991 = state_50948__$1;
(statearr_50968_50991[(2)] = inst_50932);

(statearr_50968_50991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50949 === (8))){
var inst_50921 = (state_50948[(11)]);
var inst_50912 = (state_50948[(8)]);
var tmp50965 = inst_50912;
var inst_50912__$1 = tmp50965;
var inst_50913 = inst_50921;
var state_50948__$1 = (function (){var statearr_50969 = state_50948;
(statearr_50969[(7)] = inst_50913);

(statearr_50969[(8)] = inst_50912__$1);

return statearr_50969;
})();
var statearr_50970_50992 = state_50948__$1;
(statearr_50970_50992[(2)] = null);

(statearr_50970_50992[(1)] = (2));


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
});})(c__7050__auto___50978,out))
;
return ((function (switch__6994__auto__,c__7050__auto___50978,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_50974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50974[(0)] = state_machine__6995__auto__);

(statearr_50974[(1)] = (1));

return statearr_50974;
});
var state_machine__6995__auto____1 = (function (state_50948){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_50948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e50975){if((e50975 instanceof Object)){
var ex__6998__auto__ = e50975;
var statearr_50976_50993 = state_50948;
(statearr_50976_50993[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50994 = state_50948;
state_50948 = G__50994;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_50948){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_50948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___50978,out))
})();
var state__7052__auto__ = (function (){var statearr_50977 = f__7051__auto__.call(null);
(statearr_50977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___50978);

return statearr_50977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___50978,out))
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
var c__7050__auto___51137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7050__auto___51137,out){
return (function (){
var f__7051__auto__ = (function (){var switch__6994__auto__ = ((function (c__7050__auto___51137,out){
return (function (state_51107){
var state_val_51108 = (state_51107[(1)]);
if((state_val_51108 === (7))){
var inst_51103 = (state_51107[(2)]);
var state_51107__$1 = state_51107;
var statearr_51109_51138 = state_51107__$1;
(statearr_51109_51138[(2)] = inst_51103);

(statearr_51109_51138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (1))){
var inst_51066 = [];
var inst_51067 = inst_51066;
var inst_51068 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51107__$1 = (function (){var statearr_51110 = state_51107;
(statearr_51110[(7)] = inst_51068);

(statearr_51110[(8)] = inst_51067);

return statearr_51110;
})();
var statearr_51111_51139 = state_51107__$1;
(statearr_51111_51139[(2)] = null);

(statearr_51111_51139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (4))){
var inst_51071 = (state_51107[(9)]);
var inst_51071__$1 = (state_51107[(2)]);
var inst_51072 = (inst_51071__$1 == null);
var inst_51073 = cljs.core.not.call(null,inst_51072);
var state_51107__$1 = (function (){var statearr_51112 = state_51107;
(statearr_51112[(9)] = inst_51071__$1);

return statearr_51112;
})();
if(inst_51073){
var statearr_51113_51140 = state_51107__$1;
(statearr_51113_51140[(1)] = (5));

} else {
var statearr_51114_51141 = state_51107__$1;
(statearr_51114_51141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (15))){
var inst_51097 = (state_51107[(2)]);
var state_51107__$1 = state_51107;
var statearr_51115_51142 = state_51107__$1;
(statearr_51115_51142[(2)] = inst_51097);

(statearr_51115_51142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (13))){
var state_51107__$1 = state_51107;
var statearr_51116_51143 = state_51107__$1;
(statearr_51116_51143[(2)] = null);

(statearr_51116_51143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (6))){
var inst_51067 = (state_51107[(8)]);
var inst_51092 = inst_51067.length;
var inst_51093 = (inst_51092 > (0));
var state_51107__$1 = state_51107;
if(cljs.core.truth_(inst_51093)){
var statearr_51117_51144 = state_51107__$1;
(statearr_51117_51144[(1)] = (12));

} else {
var statearr_51118_51145 = state_51107__$1;
(statearr_51118_51145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (3))){
var inst_51105 = (state_51107[(2)]);
var state_51107__$1 = state_51107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51107__$1,inst_51105);
} else {
if((state_val_51108 === (12))){
var inst_51067 = (state_51107[(8)]);
var inst_51095 = cljs.core.vec.call(null,inst_51067);
var state_51107__$1 = state_51107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51107__$1,(15),out,inst_51095);
} else {
if((state_val_51108 === (2))){
var state_51107__$1 = state_51107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51107__$1,(4),ch);
} else {
if((state_val_51108 === (11))){
var inst_51075 = (state_51107[(10)]);
var inst_51071 = (state_51107[(9)]);
var inst_51085 = (state_51107[(2)]);
var inst_51086 = [];
var inst_51087 = inst_51086.push(inst_51071);
var inst_51067 = inst_51086;
var inst_51068 = inst_51075;
var state_51107__$1 = (function (){var statearr_51119 = state_51107;
(statearr_51119[(11)] = inst_51087);

(statearr_51119[(7)] = inst_51068);

(statearr_51119[(12)] = inst_51085);

(statearr_51119[(8)] = inst_51067);

return statearr_51119;
})();
var statearr_51120_51146 = state_51107__$1;
(statearr_51120_51146[(2)] = null);

(statearr_51120_51146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (9))){
var inst_51067 = (state_51107[(8)]);
var inst_51083 = cljs.core.vec.call(null,inst_51067);
var state_51107__$1 = state_51107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51107__$1,(11),out,inst_51083);
} else {
if((state_val_51108 === (5))){
var inst_51075 = (state_51107[(10)]);
var inst_51071 = (state_51107[(9)]);
var inst_51068 = (state_51107[(7)]);
var inst_51075__$1 = f.call(null,inst_51071);
var inst_51076 = cljs.core._EQ_.call(null,inst_51075__$1,inst_51068);
var inst_51077 = cljs.core.keyword_identical_QMARK_.call(null,inst_51068,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51078 = (inst_51076) || (inst_51077);
var state_51107__$1 = (function (){var statearr_51121 = state_51107;
(statearr_51121[(10)] = inst_51075__$1);

return statearr_51121;
})();
if(cljs.core.truth_(inst_51078)){
var statearr_51122_51147 = state_51107__$1;
(statearr_51122_51147[(1)] = (8));

} else {
var statearr_51123_51148 = state_51107__$1;
(statearr_51123_51148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (14))){
var inst_51100 = (state_51107[(2)]);
var inst_51101 = cljs.core.async.close_BANG_.call(null,out);
var state_51107__$1 = (function (){var statearr_51125 = state_51107;
(statearr_51125[(13)] = inst_51100);

return statearr_51125;
})();
var statearr_51126_51149 = state_51107__$1;
(statearr_51126_51149[(2)] = inst_51101);

(statearr_51126_51149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (10))){
var inst_51090 = (state_51107[(2)]);
var state_51107__$1 = state_51107;
var statearr_51127_51150 = state_51107__$1;
(statearr_51127_51150[(2)] = inst_51090);

(statearr_51127_51150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51108 === (8))){
var inst_51075 = (state_51107[(10)]);
var inst_51071 = (state_51107[(9)]);
var inst_51067 = (state_51107[(8)]);
var inst_51080 = inst_51067.push(inst_51071);
var tmp51124 = inst_51067;
var inst_51067__$1 = tmp51124;
var inst_51068 = inst_51075;
var state_51107__$1 = (function (){var statearr_51128 = state_51107;
(statearr_51128[(7)] = inst_51068);

(statearr_51128[(14)] = inst_51080);

(statearr_51128[(8)] = inst_51067__$1);

return statearr_51128;
})();
var statearr_51129_51151 = state_51107__$1;
(statearr_51129_51151[(2)] = null);

(statearr_51129_51151[(1)] = (2));


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
});})(c__7050__auto___51137,out))
;
return ((function (switch__6994__auto__,c__7050__auto___51137,out){
return (function() {
var state_machine__6995__auto__ = null;
var state_machine__6995__auto____0 = (function (){
var statearr_51133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51133[(0)] = state_machine__6995__auto__);

(statearr_51133[(1)] = (1));

return statearr_51133;
});
var state_machine__6995__auto____1 = (function (state_51107){
while(true){
var ret_value__6996__auto__ = (function (){try{while(true){
var result__6997__auto__ = switch__6994__auto__.call(null,state_51107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6997__auto__;
}
break;
}
}catch (e51134){if((e51134 instanceof Object)){
var ex__6998__auto__ = e51134;
var statearr_51135_51152 = state_51107;
(statearr_51135_51152[(5)] = ex__6998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51153 = state_51107;
state_51107 = G__51153;
continue;
} else {
return ret_value__6996__auto__;
}
break;
}
});
state_machine__6995__auto__ = function(state_51107){
switch(arguments.length){
case 0:
return state_machine__6995__auto____0.call(this);
case 1:
return state_machine__6995__auto____1.call(this,state_51107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6995__auto____0;
state_machine__6995__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6995__auto____1;
return state_machine__6995__auto__;
})()
;})(switch__6994__auto__,c__7050__auto___51137,out))
})();
var state__7052__auto__ = (function (){var statearr_51136 = f__7051__auto__.call(null);
(statearr_51136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7050__auto___51137);

return statearr_51136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7052__auto__);
});})(c__7050__auto___51137,out))
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