// Compiled by ClojureScript 0.0-2505
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2505";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74823__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74823 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__74823__delegate.call(this,args);};
G__74823.cljs$lang$maxFixedArity = 0;
G__74823.cljs$lang$applyTo = (function (arglist__74824){
var args = cljs.core.seq(arglist__74824);
return G__74823__delegate(args);
});
G__74823.cljs$core$IFn$_invoke$arity$variadic = G__74823__delegate;
return G__74823;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
return goog.isString(x);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[goog.typeOf(x__$1)])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
var ty = cljs.core.type.call(null,obj);
var ty__$1 = (cljs.core.truth_((function (){var and__3618__auto__ = ty;
if(cljs.core.truth_(and__3618__auto__)){
return ty.cljs$lang$type;
} else {
return and__3618__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){
var temp__4124__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4124__auto__)){
var s = temp__4124__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && ((goog.typeOf(Symbol) === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__4517__auto___74825 = len;
var i_74826 = (0);
while(true){
if((i_74826 < n__4517__auto___74825)){
(new_arr[i_74826] = (arr[i_74826]));

var G__74827 = (i_74826 + (1));
i_74826 = G__74827;
continue;
} else {
}
break;
}

return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__74828__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__74828 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74828__delegate.call(this,array,i,idxs);};
G__74828.cljs$lang$maxFixedArity = 2;
G__74828.cljs$lang$applyTo = (function (arglist__74829){
var array = cljs.core.first(arglist__74829);
arglist__74829 = cljs.core.next(arglist__74829);
var i = cljs.core.first(arglist__74829);
var idxs = cljs.core.rest(arglist__74829);
return G__74828__delegate(array,i,idxs);
});
G__74828.cljs$core$IFn$_invoke$arity$variadic = G__74828__delegate;
return G__74828;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){
return (array[i] = val);
});
var aset__4 = (function() { 
var G__74830__delegate = function (array,idx,idx2,idxv){
return cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv);
};
var G__74830 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__74830__delegate.call(this,array,idx,idx2,idxv);};
G__74830.cljs$lang$maxFixedArity = 3;
G__74830.cljs$lang$applyTo = (function (arglist__74831){
var array = cljs.core.first(arglist__74831);
arglist__74831 = cljs.core.next(arglist__74831);
var idx = cljs.core.first(arglist__74831);
arglist__74831 = cljs.core.next(arglist__74831);
var idx2 = cljs.core.first(arglist__74831);
var idxv = cljs.core.rest(arglist__74831);
return G__74830__delegate(array,idx,idx2,idxv);
});
G__74830.cljs$core$IFn$_invoke$arity$variadic = G__74830__delegate;
return G__74830;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);

return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
/**
* Invoke JavaScript object method via string. Needed when the
* string is not a valid unquoted property name.
* @param {...*} var_args
*/
cljs.core.js_invoke = (function() { 
var js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.call(null,args));
};
var js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return js_invoke__delegate.call(this,obj,s,args);};
js_invoke.cljs$lang$maxFixedArity = 2;
js_invoke.cljs$lang$applyTo = (function (arglist__74832){
var obj = cljs.core.first(arglist__74832);
arglist__74832 = cljs.core.next(arglist__74832);
var s = cljs.core.first(arglist__74832);
var args = cljs.core.rest(arglist__74832);
return js_invoke__delegate(obj,s,args);
});
js_invoke.cljs$core$IFn$_invoke$arity$variadic = js_invoke__delegate;
return js_invoke;
})()
;

cljs.core.Fn = (function (){var obj74834 = {};
return obj74834;
})();


cljs.core.IFn = (function (){var obj74836 = {};
return obj74836;
})();

cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._invoke[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._invoke["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;


cljs.core.ICloneable = (function (){var obj74838 = {};
return obj74838;
})();

cljs.core._clone = (function _clone(value){
if((function (){var and__3618__auto__ = value;
if(and__3618__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__3618__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__4274__auto__ = (((value == null))?null:value);
return (function (){var or__3630__auto__ = (cljs.core._clone[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._clone["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj74840 = {};
return obj74840;
})();

cljs.core._count = (function _count(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._count[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._count["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj74842 = {};
return obj74842;
})();

cljs.core._empty = (function _empty(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._empty[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._empty["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj74844 = {};
return obj74844;
})();

cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._conj[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._conj["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj74846 = {};
return obj74846;
})();

cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._nth[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._nth["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._nth[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._nth["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;


cljs.core.ASeq = (function (){var obj74848 = {};
return obj74848;
})();


cljs.core.ISeq = (function (){var obj74850 = {};
return obj74850;
})();

cljs.core._first = (function _first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._first[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function _rest(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._rest[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._rest["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj74852 = {};
return obj74852;
})();

cljs.core._next = (function _next(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._next[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._next["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj74854 = {};
return obj74854;
})();

cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._lookup[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._lookup["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._lookup[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._lookup["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;


cljs.core.IAssociative = (function (){var obj74856 = {};
return obj74856;
})();

cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._assoc[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj74858 = {};
return obj74858;
})();

cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._dissoc[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj74860 = {};
return obj74860;
})();

cljs.core._key = (function _key(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._key[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._key["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function _val(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._val[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._val["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj74862 = {};
return obj74862;
})();

cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._disjoin[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj74864 = {};
return obj74864;
})();

cljs.core._peek = (function _peek(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._peek[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._peek["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function _pop(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._pop[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pop["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj74866 = {};
return obj74866;
})();

cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_n[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj74868 = {};
return obj74868;
})();

cljs.core._deref = (function _deref(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._deref[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._deref["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj74870 = {};
return obj74870;
})();

cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj74872 = {};
return obj74872;
})();

cljs.core._meta = (function _meta(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._meta[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._meta["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj74874 = {};
return obj74874;
})();

cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._with_meta[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj74876 = {};
return obj74876;
})();

cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._reduce[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._reduce[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj74878 = {};
return obj74878;
})();

cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj74880 = {};
return obj74880;
})();

cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._equiv[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._equiv["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj74882 = {};
return obj74882;
})();

cljs.core._hash = (function _hash(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._hash[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._hash["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj74884 = {};
return obj74884;
})();

cljs.core._seq = (function _seq(o){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._seq[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._seq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj74886 = {};
return obj74886;
})();


cljs.core.IList = (function (){var obj74888 = {};
return obj74888;
})();


cljs.core.IRecord = (function (){var obj74890 = {};
return obj74890;
})();


cljs.core.IReversible = (function (){var obj74892 = {};
return obj74892;
})();

cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._rseq[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._rseq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj74894 = {};
return obj74894;
})();

cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._entry_key[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._comparator[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._comparator["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj74896 = {};
return obj74896;
})();

cljs.core._write = (function _write(writer,s){
if((function (){var and__3618__auto__ = writer;
if(and__3618__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__3618__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__4274__auto__ = (((writer == null))?null:writer);
return (function (){var or__3630__auto__ = (cljs.core._write[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._write["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function _flush(writer){
if((function (){var and__3618__auto__ = writer;
if(and__3618__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__3618__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__4274__auto__ = (((writer == null))?null:writer);
return (function (){var or__3630__auto__ = (cljs.core._flush[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._flush["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj74898 = {};
return obj74898;
})();

cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._pr_writer[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj74900 = {};
return obj74900;
})();

cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3618__auto__ = d;
if(and__3618__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__4274__auto__ = (((d == null))?null:d);
return (function (){var or__3630__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj74902 = {};
return obj74902;
})();

cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._notify_watches[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._add_watch[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3618__auto__ = this$;
if(and__3618__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__3618__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__4274__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3630__auto__ = (cljs.core._remove_watch[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj74904 = {};
return obj74904;
})();

cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._as_transient[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj74906 = {};
return obj74906;
})();

cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj74908 = {};
return obj74908;
})();

cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj74910 = {};
return obj74910;
})();

cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj74912 = {};
return obj74912;
})();

cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj74914 = {};
return obj74914;
})();

cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3618__auto__ = tcoll;
if(and__3618__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__4274__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3630__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj74916 = {};
return obj74916;
})();

cljs.core._compare = (function _compare(x,y){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._compare[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._compare["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj74918 = {};
return obj74918;
})();

cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._drop_first[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj74920 = {};
return obj74920;
})();

cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_first[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj74922 = {};
return obj74922;
})();

cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._chunked_next[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj74924 = {};
return obj74924;
})();

cljs.core._name = (function _name(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._name[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._name["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function _namespace(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._namespace[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._namespace["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj74926 = {};
return obj74926;
})();


cljs.core.IReset = (function (){var obj74928 = {};
return obj74928;
})();

cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._reset_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj74930 = {};
return obj74930;
})();

cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;


cljs.core.IVolatile = (function (){var obj74932 = {};
return obj74932;
})();

cljs.core._vreset_BANG_ = (function _vreset_BANG_(o,new_value){
if((function (){var and__3618__auto__ = o;
if(and__3618__auto__){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2;
} else {
return and__3618__auto__;
}
})()){
return o.cljs$core$IVolatile$_vreset_BANG_$arity$2(o,new_value);
} else {
var x__4274__auto__ = (((o == null))?null:o);
return (function (){var or__3630__auto__ = (cljs.core._vreset_BANG_[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._vreset_BANG_["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IVolatile.-vreset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.IIterable = (function (){var obj74934 = {};
return obj74934;
})();

cljs.core._iterator = (function _iterator(coll){
if((function (){var and__3618__auto__ = coll;
if(and__3618__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__3618__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__4274__auto__ = (((coll == null))?null:coll);
return (function (){var or__3630__auto__ = (cljs.core._iterator[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._iterator["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));

cljs.core._flush.call(null,writer);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!((Math.imul.call(null,(4294967295),(5)) === (0))))){
cljs.core.imul = (function imul(a,b){
return Math.imul.call(null,a,b);
});
} else {
cljs.core.imul = (function imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){
return cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,cljs.core.imul.call(null,k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){
return (cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,(h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul.call(null,h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul.call(null,h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1.call(null,in$);
var h1 = cljs.core.m3_mix_H1.call(null,cljs.core.m3_seed,k1);
return cljs.core.m3_fmix.call(null,h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__74935 = (i + (2));
var G__74936 = cljs.core.m3_mix_H1.call(null,h1,cljs.core.m3_mix_K1.call(null,(in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__74935;
h1 = G__74936;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1.call(null,in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix.call(null,h1__$1,cljs.core.imul.call(null,(2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj74938 = {};
return obj74938;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__74939 = (i + (1));
var G__74940 = (cljs.core.imul.call(null,(31),hash) + s.charCodeAt(i));
i = G__74939;
hash = G__74940;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_.call(null,k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj74944 = {};
return obj74944;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function hash(o){
if((function (){var G__74946 = o;
if(G__74946){
var bit__4304__auto__ = (G__74946.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__4304__auto__) || (G__74946.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._hash.call(null,o);
} else {
if(typeof o === 'number'){
return (Math.floor.call(null,o) % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int.call(null,cljs.core.hash_string.call(null,o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash.call(null,o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){
return cljs.core.hash_combine.call(null,cljs.core.m3_hash_unencoded_chars.call(null,sym.name),cljs.core.hash_string.call(null,sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){
if((a.str === b.str)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not.call(null,a.ns);
if(and__3618__auto__){
return b.ns;
} else {
return and__3618__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not.call(null,b.ns)){
return (1);
} else {
var nsc = goog.array.defaultCompare(a.ns,b.ns);
if(((0) === nsc)){
return goog.array.defaultCompare(a.name,b.name);
} else {
return nsc;
}
}
} else {
return goog.array.defaultCompare(a.name,b.name);

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write.call(null,writer,self__.str);
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__4051__auto__ = self__._hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_symbol.call(null,sym__$1);
self__._hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.call = (function() {
var G__74948 = null;
var G__74948__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.call(null,coll,sym,null);
});
var G__74948__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.call(null,coll,sym,not_found);
});
G__74948 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__74948__2.call(this,self__,coll);
case 3:
return G__74948__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74948.cljs$core$IFn$_invoke$arity$2 = G__74948__2;
G__74948.cljs$core$IFn$_invoke$arity$3 = G__74948__3;
return G__74948;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args74947){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args74947)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.call(null,coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.call(null,coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return symbol.call(null,null,name);
}
});
var symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;

/**
* @constructor
*/
cljs.core.Var = (function (val,sym,_meta){
this.val = val;
this.sym = sym;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 163840;
})
cljs.core.Var.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Var.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.Var.cljs$lang$type = true;

cljs.core.Var.cljs$lang$ctorStr = "cljs.core/Var";

cljs.core.Var.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Var");
});

cljs.core.__GT_Var = (function __GT_Var(val,sym,_meta){
return (new cljs.core.Var(val,sym,_meta));
});



cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){
var G__74950 = x;
if(G__74950){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__74950.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__74950.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIterable,G__74950);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIterable,G__74950);
}
});
cljs.core.clone = (function clone(value){
return cljs.core._clone.call(null,value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){
var G__74952 = value;
if(G__74952){
var bit__4311__auto__ = (G__74952.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4311__auto__) || (G__74952.cljs$core$ICloneable$)){
return true;
} else {
if((!G__74952.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__74952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__74952);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__74954 = coll;
if(G__74954){
var bit__4304__auto__ = (G__74954.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4304__auto__) || (G__74954.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._seq.call(null,coll);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll)){
return cljs.core._seq.call(null,coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__74956 = coll;
if(G__74956){
var bit__4304__auto__ = (G__74956.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__74956.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._first.call(null,coll);
} else {
var s = cljs.core.seq.call(null,coll);
if((s == null)){
return null;
} else {
return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null))){
if((function (){var G__74958 = coll;
if(G__74958){
var bit__4304__auto__ = (G__74958.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__74958.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._rest.call(null,coll);
} else {
var s = cljs.core.seq.call(null,coll);
if(s){
return cljs.core._rest.call(null,s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__74960 = coll;
if(G__74960){
var bit__4304__auto__ = (G__74960.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4304__auto__) || (G__74960.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._next.call(null,coll);
} else {
return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv.call(null,x,y));
}
});
var _EQ___3 = (function() { 
var G__74961__delegate = function (x,y,more){
while(true){
if(_EQ_.call(null,x,y)){
if(cljs.core.next.call(null,more)){
var G__74962 = y;
var G__74963 = cljs.core.first.call(null,more);
var G__74964 = cljs.core.next.call(null,more);
x = G__74962;
y = G__74963;
more = G__74964;
continue;
} else {
return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__74961 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74961__delegate.call(this,x,y,more);};
G__74961.cljs$lang$maxFixedArity = 2;
G__74961.cljs$lang$applyTo = (function (arglist__74965){
var x = cljs.core.first(arglist__74965);
arglist__74965 = cljs.core.next(arglist__74965);
var y = cljs.core.first(arglist__74965);
var more = cljs.core.rest(arglist__74965);
return G__74961__delegate(x,y,more);
});
G__74961.cljs$core$IFn$_invoke$arity$variadic = G__74961__delegate;
return G__74961;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first.call(null,self__.s);
self__.s = cljs.core.next.call(null,self__.s);

return {"done": false, "value": x};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq.call(null,coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = cljs.core.es6_iterator_seq.call(null,self__.iter);
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function __GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1.call(null,hash_basis);
var h1__$1 = cljs.core.m3_mix_H1.call(null,h1,k1);
return cljs.core.m3_fmix.call(null,h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
var G__74966 = (n + (1));
var G__74967 = ((cljs.core.imul.call(null,(31),hash_code) + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__74968 = cljs.core.next.call(null,coll__$1);
n = G__74966;
hash_code = G__74967;
coll__$1 = G__74968;
continue;
} else {
return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
var G__74969 = (n + (1));
var G__74970 = ((hash_code + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__74971 = cljs.core.next.call(null,coll__$1);
n = G__74969;
hash_code = G__74970;
coll__$1 = G__74971;
continue;
} else {
return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));

(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function __GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
* If x is already reduced?, returns it, else returns (reduced x)
*/
cljs.core.ensure_reduced = (function ensure_reduced(x){
if(cljs.core.reduced_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.reduced.call(null,x);
}
});
/**
* If x is reduced?, returns (deref x), else returns x
*/
cljs.core.unreduced = (function unreduced(x){
if(cljs.core.reduced_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count.call(null,cicoll);
if((cnt === (0))){
return f.call(null);
} else {
var val = cljs.core._nth.call(null,cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74972 = nval;
var G__74973 = (n + (1));
val = G__74972;
n = G__74973;
continue;
}
} else {
return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74974 = nval;
var G__74975 = (n + (1));
val__$1 = G__74974;
n = G__74975;
continue;
}
} else {
return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74976 = nval;
var G__74977 = (n + (1));
val__$1 = G__74976;
n = G__74977;
continue;
}
} else {
return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return f.call(null);
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = f.call(null,val,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74978 = nval;
var G__74979 = (n + (1));
val = G__74978;
n = G__74979;
continue;
}
} else {
return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74980 = nval;
var G__74981 = (n + (1));
val__$1 = G__74980;
n = G__74981;
continue;
}
} else {
return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__74982 = nval;
var G__74983 = (n + (1));
val__$1 = G__74982;
n = G__74983;
continue;
}
} else {
return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;



/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__74985 = x;
if(G__74985){
var bit__4311__auto__ = (G__74985.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4311__auto__) || (G__74985.cljs$core$ICounted$)){
return true;
} else {
if((!G__74985.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__74985);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__74985);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__74987 = x;
if(G__74987){
var bit__4311__auto__ = (G__74987.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4311__auto__) || (G__74987.cljs$core$IIndexed$)){
return true;
} else {
if((!G__74987.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__74987);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__74987);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count.call(null,coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,(0));
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,(0));
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
return cljs.core.seq_reduce.call(null,f,col__$1);
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,col__$1);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.call(null,self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next.call(null,s);
if(!((sn == null))){
var G__74988 = sn;
s = G__74988;
continue;
} else {
return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){
return coll;
});
var conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj.call(null,coll,x);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__74989__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__74990 = conj.call(null,coll,x);
var G__74991 = cljs.core.first.call(null,xs);
var G__74992 = cljs.core.next.call(null,xs);
coll = G__74990;
x = G__74991;
xs = G__74992;
continue;
} else {
return conj.call(null,coll,x);
}
break;
}
};
var G__74989 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__74989__delegate.call(this,coll,x,xs);};
G__74989.cljs$lang$maxFixedArity = 2;
G__74989.cljs$lang$applyTo = (function (arglist__74993){
var coll = cljs.core.first(arglist__74993);
arglist__74993 = cljs.core.next(arglist__74993);
var x = cljs.core.first(arglist__74993);
var xs = cljs.core.rest(arglist__74993);
return G__74989__delegate(coll,x,xs);
});
G__74989.cljs$core$IFn$_invoke$arity$variadic = G__74989__delegate;
return G__74989;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty.call(null,coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq.call(null,coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_.call(null,s)){
return (acc + cljs.core._count.call(null,s));
} else {
var G__74994 = cljs.core.next.call(null,s);
var G__74995 = (acc + (1));
s = G__74994;
acc = G__74995;
continue;
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(!((coll == null))){
if((function (){var G__74997 = coll;
if(G__74997){
var bit__4304__auto__ = (G__74997.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__4304__auto__) || (G__74997.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._count.call(null,coll);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll)){
return cljs.core._count.call(null,coll);
} else {
return cljs.core.accumulating_seq_count.call(null,coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq.call(null,coll)){
return cljs.core.first.call(null,coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_.call(null,coll)){
return cljs.core._nth.call(null,coll,n);
} else {
if(cljs.core.seq.call(null,coll)){
var G__74998 = cljs.core.next.call(null,coll);
var G__74999 = (n - (1));
coll = G__74998;
n = G__74999;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq.call(null,coll)){
return cljs.core.first.call(null,coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,coll)){
return cljs.core._nth.call(null,coll,n,not_found);
} else {
if(cljs.core.seq.call(null,coll)){
var G__75000 = cljs.core.next.call(null,coll);
var G__75001 = (n - (1));
var G__75002 = not_found;
coll = G__75000;
n = G__75001;
not_found = G__75002;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__75007 = coll;
if(G__75007){
var bit__4304__auto__ = (G__75007.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4304__auto__) || (G__75007.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._nth.call(null,coll,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll)){
return cljs.core._nth.call(null,coll,n);
} else {
if((function (){var G__75008 = coll;
if(G__75008){
var bit__4311__auto__ = (G__75008.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__75008.cljs$core$ISeq$)){
return true;
} else {
if((!G__75008.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75008);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75008);
}
})()){
return cljs.core.linear_traversal_nth.call(null,coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__75009 = coll;
if(G__75009){
var bit__4304__auto__ = (G__75009.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__4304__auto__) || (G__75009.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._nth.call(null,coll,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll)){
return cljs.core._nth.call(null,coll,n);
} else {
if((function (){var G__75010 = coll;
if(G__75010){
var bit__4311__auto__ = (G__75010.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__75010.cljs$core$ISeq$)){
return true;
} else {
if((!G__75010.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75010);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75010);
}
})()){
return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the nth rest of coll, coll when n is 0.
*/
cljs.core.nthrest = (function nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq.call(null,xs))){
var G__75011 = (n__$1 - (1));
var G__75012 = cljs.core.rest.call(null,xs);
n__$1 = G__75011;
xs = G__75012;
continue;
} else {
return xs;
}
break;
}
});
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__75015 = o;
if(G__75015){
var bit__4304__auto__ = (G__75015.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4304__auto__) || (G__75015.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._lookup.call(null,o,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o)){
return cljs.core._lookup.call(null,o,k);
} else {
return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__75016 = o;
if(G__75016){
var bit__4304__auto__ = (G__75016.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4304__auto__) || (G__75016.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._lookup.call(null,o,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o)){
return cljs.core._lookup.call(null,o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc.call(null,coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__75017__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs)){
var G__75018 = ret;
var G__75019 = cljs.core.first.call(null,kvs);
var G__75020 = cljs.core.second.call(null,kvs);
var G__75021 = cljs.core.nnext.call(null,kvs);
coll = G__75018;
k = G__75019;
v = G__75020;
kvs = G__75021;
continue;
} else {
return ret;
}
break;
}
};
var G__75017 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75017__delegate.call(this,coll,k,v,kvs);};
G__75017.cljs$lang$maxFixedArity = 3;
G__75017.cljs$lang$applyTo = (function (arglist__75022){
var coll = cljs.core.first(arglist__75022);
arglist__75022 = cljs.core.next(arglist__75022);
var k = cljs.core.first(arglist__75022);
arglist__75022 = cljs.core.next(arglist__75022);
var v = cljs.core.first(arglist__75022);
var kvs = cljs.core.rest(arglist__75022);
return G__75017__delegate(coll,k,v,kvs);
});
G__75017.cljs$core$IFn$_invoke$arity$variadic = G__75017__delegate;
return G__75017;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc.call(null,coll,k);
}
});
var dissoc__3 = (function() { 
var G__75023__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks)){
var G__75024 = ret;
var G__75025 = cljs.core.first.call(null,ks);
var G__75026 = cljs.core.next.call(null,ks);
coll = G__75024;
k = G__75025;
ks = G__75026;
continue;
} else {
return ret;
}
}
break;
}
};
var G__75023 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75023__delegate.call(this,coll,k,ks);};
G__75023.cljs$lang$maxFixedArity = 2;
G__75023.cljs$lang$applyTo = (function (arglist__75027){
var coll = cljs.core.first(arglist__75027);
arglist__75027 = cljs.core.next(arglist__75027);
var k = cljs.core.first(arglist__75027);
var ks = cljs.core.rest(arglist__75027);
return G__75023__delegate(coll,k,ks);
});
G__75023.cljs$core$IFn$_invoke$arity$variadic = G__75023__delegate;
return G__75023;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
var or__3630__auto__ = goog.isFunction(f);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var G__75031 = f;
if(G__75031){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto____$1 = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return G__75031.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__75031.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__75031);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__75031);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.prototype.call = (function() {
var G__75033 = null;
var G__75033__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null);
});
var G__75033__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a);
});
var G__75033__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b);
});
var G__75033__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c);
});
var G__75033__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d);
});
var G__75033__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e);
});
var G__75033__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f);
});
var G__75033__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g);
});
var G__75033__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h);
});
var G__75033__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});
var G__75033__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__75033__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__75033__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__75033__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__75033__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__75033__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__75033__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__75033__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__75033__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__75033__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__75033__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__75033__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__75033 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__75033__1.call(this,self__);
case 2:
return G__75033__2.call(this,self__,a);
case 3:
return G__75033__3.call(this,self__,a,b);
case 4:
return G__75033__4.call(this,self__,a,b,c);
case 5:
return G__75033__5.call(this,self__,a,b,c,d);
case 6:
return G__75033__6.call(this,self__,a,b,c,d,e);
case 7:
return G__75033__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__75033__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__75033__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__75033__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__75033__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__75033__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__75033__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__75033__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__75033__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__75033__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__75033__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__75033__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__75033__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__75033__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__75033__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__75033__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75033.cljs$core$IFn$_invoke$arity$1 = G__75033__1;
G__75033.cljs$core$IFn$_invoke$arity$2 = G__75033__2;
G__75033.cljs$core$IFn$_invoke$arity$3 = G__75033__3;
G__75033.cljs$core$IFn$_invoke$arity$4 = G__75033__4;
G__75033.cljs$core$IFn$_invoke$arity$5 = G__75033__5;
G__75033.cljs$core$IFn$_invoke$arity$6 = G__75033__6;
G__75033.cljs$core$IFn$_invoke$arity$7 = G__75033__7;
G__75033.cljs$core$IFn$_invoke$arity$8 = G__75033__8;
G__75033.cljs$core$IFn$_invoke$arity$9 = G__75033__9;
G__75033.cljs$core$IFn$_invoke$arity$10 = G__75033__10;
G__75033.cljs$core$IFn$_invoke$arity$11 = G__75033__11;
G__75033.cljs$core$IFn$_invoke$arity$12 = G__75033__12;
G__75033.cljs$core$IFn$_invoke$arity$13 = G__75033__13;
G__75033.cljs$core$IFn$_invoke$arity$14 = G__75033__14;
G__75033.cljs$core$IFn$_invoke$arity$15 = G__75033__15;
G__75033.cljs$core$IFn$_invoke$arity$16 = G__75033__16;
G__75033.cljs$core$IFn$_invoke$arity$17 = G__75033__17;
G__75033.cljs$core$IFn$_invoke$arity$18 = G__75033__18;
G__75033.cljs$core$IFn$_invoke$arity$19 = G__75033__19;
G__75033.cljs$core$IFn$_invoke$arity$20 = G__75033__20;
G__75033.cljs$core$IFn$_invoke$arity$21 = G__75033__21;
G__75033.cljs$core$IFn$_invoke$arity$22 = G__75033__22;
return G__75033;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args75032){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75032)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.afn.call(null);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.afn.call(null,a);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
if((cljs.core.fn_QMARK_.call(null,o)) && (!((function (){var G__75037 = o;
if(G__75037){
var bit__4311__auto__ = (G__75037.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__4311__auto__) || (G__75037.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__75037.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__75037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__75037);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta.call(null,o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var and__3618__auto__ = !((o == null));
if(and__3618__auto__){
var G__75041 = o;
if(G__75041){
var bit__4311__auto__ = (G__75041.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4311__auto__) || (G__75041.cljs$core$IMeta$)){
return true;
} else {
if((!G__75041.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__75041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__75041);
}
} else {
return and__3618__auto__;
}
})()){
return cljs.core._meta.call(null,o);
} else {
return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek.call(null,coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop.call(null,coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin.call(null,coll,k);
}
});
var disj__3 = (function() { 
var G__75042__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = disj.call(null,coll,k);
if(cljs.core.truth_(ks)){
var G__75043 = ret;
var G__75044 = cljs.core.first.call(null,ks);
var G__75045 = cljs.core.next.call(null,ks);
coll = G__75043;
k = G__75044;
ks = G__75045;
continue;
} else {
return ret;
}
}
break;
}
};
var G__75042 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75042__delegate.call(this,coll,k,ks);};
G__75042.cljs$lang$maxFixedArity = 2;
G__75042.cljs$lang$applyTo = (function (arglist__75046){
var coll = cljs.core.first(arglist__75046);
arglist__75046 = cljs.core.next(arglist__75046);
var k = cljs.core.first(arglist__75046);
var ks = cljs.core.rest(arglist__75046);
return G__75042__delegate(coll,k,ks);
});
G__75042.cljs$core$IFn$_invoke$arity$variadic = G__75042__delegate;
return G__75042;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not.call(null,cljs.core.seq.call(null,coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__75048 = x;
if(G__75048){
var bit__4311__auto__ = (G__75048.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__4311__auto__) || (G__75048.cljs$core$ICollection$)){
return true;
} else {
if((!G__75048.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__75048);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__75048);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__75050 = x;
if(G__75050){
var bit__4311__auto__ = (G__75050.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__4311__auto__) || (G__75050.cljs$core$ISet$)){
return true;
} else {
if((!G__75050.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__75050);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__75050);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__75052 = x;
if(G__75052){
var bit__4311__auto__ = (G__75052.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__4311__auto__) || (G__75052.cljs$core$IAssociative$)){
return true;
} else {
if((!G__75052.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__75052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__75052);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__75054 = x;
if(G__75054){
var bit__4311__auto__ = (G__75054.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__4311__auto__) || (G__75054.cljs$core$ISequential$)){
return true;
} else {
if((!G__75054.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__75054);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__75054);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){
var G__75056 = x;
if(G__75056){
var bit__4311__auto__ = (G__75056.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__4311__auto__) || (G__75056.cljs$core$ISorted$)){
return true;
} else {
if((!G__75056.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__75056);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__75056);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__75058 = x;
if(G__75058){
var bit__4311__auto__ = (G__75058.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4311__auto__) || (G__75058.cljs$core$IReduce$)){
return true;
} else {
if((!G__75058.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__75058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__75058);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__75060 = x;
if(G__75060){
var bit__4311__auto__ = (G__75060.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4311__auto__) || (G__75060.cljs$core$IMap$)){
return true;
} else {
if((!G__75060.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__75060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__75060);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__75062 = x;
if(G__75062){
var bit__4311__auto__ = (G__75062.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__4311__auto__) || (G__75062.cljs$core$IVector$)){
return true;
} else {
if((!G__75062.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__75062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__75062);
}
});

cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__75064 = x;
if(G__75064){
var bit__4304__auto__ = (G__75064.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__4304__auto__) || (G__75064.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
var obj75068 = {};
return obj75068;
});
var js_obj__1 = (function() { 
var G__75069__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__75069 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75069__delegate.call(this,keyvals);};
G__75069.cljs$lang$maxFixedArity = 0;
G__75069.cljs$lang$applyTo = (function (arglist__75070){
var keyvals = cljs.core.seq(arglist__75070);
return G__75069__delegate(keyvals);
});
G__75069.cljs$core$IFn$_invoke$arity$variadic = G__75069__delegate;
return G__75069;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
goog.object.forEach(obj,((function (keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(keys))
);

return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__75071 = (i__$1 + (1));
var G__75072 = (j__$1 + (1));
var G__75073 = (len__$1 - (1));
i__$1 = G__75071;
j__$1 = G__75072;
len__$1 = G__75073;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__75074 = (i__$1 - (1));
var G__75075 = (j__$1 - (1));
var G__75076 = (len__$1 - (1));
i__$1 = G__75074;
j__$1 = G__75075;
len__$1 = G__75076;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj75078 = {};
return obj75078;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__75080 = s;
if(G__75080){
var bit__4311__auto__ = (G__75080.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4311__auto__) || (G__75080.cljs$core$ISeq$)){
return true;
} else {
if((!G__75080.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__75080);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__75082 = s;
if(G__75082){
var bit__4311__auto__ = (G__75082.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4311__auto__) || (G__75082.cljs$core$ISeqable$)){
return true;
} else {
if((!G__75082.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75082);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75082);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3630__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var G__75086 = f;
if(G__75086){
var bit__4311__auto__ = (G__75086.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__4311__auto__) || (G__75086.cljs$core$IFn$)){
return true;
} else {
if((!G__75086.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__75086);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__75086);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,(10))));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_.call(null,coll)) && (cljs.core.contains_QMARK_.call(null,coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,coll,k)], null);
} else {
return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__75087__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first.call(null,xs);
var etc = cljs.core.next.call(null,xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_.call(null,s,x__$1)){
return false;
} else {
var G__75088 = cljs.core.conj.call(null,s,x__$1);
var G__75089 = etc;
s = G__75088;
xs = G__75089;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__75087 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75087__delegate.call(this,x,y,more);};
G__75087.cljs$lang$maxFixedArity = 2;
G__75087.cljs$lang$applyTo = (function (arglist__75090){
var x = cljs.core.first(arglist__75090);
arglist__75090 = cljs.core.next(arglist__75090);
var y = cljs.core.first(arglist__75090);
var more = cljs.core.rest(arglist__75090);
return G__75087__delegate(x,y,more);
});
G__75087.cljs$core$IFn$_invoke$arity$variadic = G__75087__delegate;
return G__75087;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){
if(cljs.core.seq_QMARK_.call(null,coll)){
return coll;
} else {
var or__3630__auto__ = cljs.core.seq.call(null,coll);
if(or__3630__auto__){
return or__3630__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y))){
if((function (){var G__75092 = x;
if(G__75092){
var bit__4304__auto__ = (G__75092.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__4304__auto__) || (G__75092.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._compare.call(null,x,y);
} else {
return goog.array.defaultCompare(x,y);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count.call(null,xs);
var yl = cljs.core.count.call(null,ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return compare_indexed.call(null,xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__75093 = xs;
var G__75094 = ys;
var G__75095 = len;
var G__75096 = (n + (1));
xs = G__75093;
ys = G__75094;
len = G__75095;
n = G__75096;
continue;
} else {
return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = f.call(null,x,y);
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_(f.call(null,y,x))){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll)){
var a = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));

return cljs.core.seq.call(null,a);
} else {
return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4124__auto__ = cljs.core.seq.call(null,coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else {
return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1){
var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__75097 = nval;
var G__75098 = cljs.core.next.call(null,coll__$1);
val__$1 = G__75097;
coll__$1 = G__75098;
continue;
}
} else {
return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a);

return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__75101 = coll;
if(G__75101){
var bit__4304__auto__ = (G__75101.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4304__auto__) || (G__75101.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._reduce.call(null,coll,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.call(null,coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.call(null,coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll)){
return cljs.core._reduce.call(null,coll,f);
} else {
return cljs.core.seq_reduce.call(null,f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__75102 = coll;
if(G__75102){
var bit__4304__auto__ = (G__75102.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__4304__auto__) || (G__75102.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._reduce.call(null,coll,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.call(null,coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.call(null,coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll)){
return cljs.core._reduce.call(null,coll,f,val);
} else {
return cljs.core.seq_reduce.call(null,f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function identity(x){
return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){
return completing.call(null,f,cljs.core.identity);
});
var completing__2 = (function (f,cf){
return (function() {
var G__75103 = null;
var G__75103__0 = (function (){
return f.call(null);
});
var G__75103__1 = (function (x){
return cf.call(null,x);
});
var G__75103__2 = (function (x,y){
return f.call(null,x,y);
});
G__75103 = function(x,y){
switch(arguments.length){
case 0:
return G__75103__0.call(this);
case 1:
return G__75103__1.call(this,x);
case 2:
return G__75103__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75103.cljs$core$IFn$_invoke$arity$0 = G__75103__0;
G__75103.cljs$core$IFn$_invoke$arity$1 = G__75103__1;
G__75103.cljs$core$IFn$_invoke$arity$2 = G__75103__2;
return G__75103;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){
return transduce.call(null,xform,f,f.call(null),coll);
});
var transduce__4 = (function (xform,f,init,coll){
var f__$1 = xform.call(null,f);
var ret = cljs.core.reduce.call(null,f__$1,init,coll);
return f__$1.call(null,ret);
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return (0);
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__75104__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__75104 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75104__delegate.call(this,x,y,more);};
G__75104.cljs$lang$maxFixedArity = 2;
G__75104.cljs$lang$applyTo = (function (arglist__75105){
var x = cljs.core.first(arglist__75105);
arglist__75105 = cljs.core.next(arglist__75105);
var y = cljs.core.first(arglist__75105);
var more = cljs.core.rest(arglist__75105);
return G__75104__delegate(x,y,more);
});
G__75104.cljs$core$IFn$_invoke$arity$variadic = G__75104__delegate;
return G__75104;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__75106__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__75106 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75106__delegate.call(this,x,y,more);};
G__75106.cljs$lang$maxFixedArity = 2;
G__75106.cljs$lang$applyTo = (function (arglist__75107){
var x = cljs.core.first(arglist__75107);
arglist__75107 = cljs.core.next(arglist__75107);
var y = cljs.core.first(arglist__75107);
var more = cljs.core.rest(arglist__75107);
return G__75106__delegate(x,y,more);
});
G__75106.cljs$core$IFn$_invoke$arity$variadic = G__75106__delegate;
return G__75106;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return (1);
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__75108__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__75108 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75108__delegate.call(this,x,y,more);};
G__75108.cljs$lang$maxFixedArity = 2;
G__75108.cljs$lang$applyTo = (function (arglist__75109){
var x = cljs.core.first(arglist__75109);
arglist__75109 = cljs.core.next(arglist__75109);
var y = cljs.core.first(arglist__75109);
var more = cljs.core.rest(arglist__75109);
return G__75108__delegate(x,y,more);
});
G__75108.cljs$core$IFn$_invoke$arity$variadic = G__75108__delegate;
return G__75108;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,(1),x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__75110__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__75110 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75110__delegate.call(this,x,y,more);};
G__75110.cljs$lang$maxFixedArity = 2;
G__75110.cljs$lang$applyTo = (function (arglist__75111){
var x = cljs.core.first(arglist__75111);
arglist__75111 = cljs.core.next(arglist__75111);
var y = cljs.core.first(arglist__75111);
var more = cljs.core.rest(arglist__75111);
return G__75110__delegate(x,y,more);
});
G__75110.cljs$core$IFn$_invoke$arity$variadic = G__75110__delegate;
return G__75110;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__75112__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next.call(null,more)){
var G__75113 = y;
var G__75114 = cljs.core.first.call(null,more);
var G__75115 = cljs.core.next.call(null,more);
x = G__75113;
y = G__75114;
more = G__75115;
continue;
} else {
return (y < cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__75112 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75112__delegate.call(this,x,y,more);};
G__75112.cljs$lang$maxFixedArity = 2;
G__75112.cljs$lang$applyTo = (function (arglist__75116){
var x = cljs.core.first(arglist__75116);
arglist__75116 = cljs.core.next(arglist__75116);
var y = cljs.core.first(arglist__75116);
var more = cljs.core.rest(arglist__75116);
return G__75112__delegate(x,y,more);
});
G__75112.cljs$core$IFn$_invoke$arity$variadic = G__75112__delegate;
return G__75112;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__75117__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next.call(null,more)){
var G__75118 = y;
var G__75119 = cljs.core.first.call(null,more);
var G__75120 = cljs.core.next.call(null,more);
x = G__75118;
y = G__75119;
more = G__75120;
continue;
} else {
return (y <= cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__75117 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75117__delegate.call(this,x,y,more);};
G__75117.cljs$lang$maxFixedArity = 2;
G__75117.cljs$lang$applyTo = (function (arglist__75121){
var x = cljs.core.first(arglist__75121);
arglist__75121 = cljs.core.next(arglist__75121);
var y = cljs.core.first(arglist__75121);
var more = cljs.core.rest(arglist__75121);
return G__75117__delegate(x,y,more);
});
G__75117.cljs$core$IFn$_invoke$arity$variadic = G__75117__delegate;
return G__75117;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__75122__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next.call(null,more)){
var G__75123 = y;
var G__75124 = cljs.core.first.call(null,more);
var G__75125 = cljs.core.next.call(null,more);
x = G__75123;
y = G__75124;
more = G__75125;
continue;
} else {
return (y > cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__75122 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75122__delegate.call(this,x,y,more);};
G__75122.cljs$lang$maxFixedArity = 2;
G__75122.cljs$lang$applyTo = (function (arglist__75126){
var x = cljs.core.first(arglist__75126);
arglist__75126 = cljs.core.next(arglist__75126);
var y = cljs.core.first(arglist__75126);
var more = cljs.core.rest(arglist__75126);
return G__75122__delegate(x,y,more);
});
G__75122.cljs$core$IFn$_invoke$arity$variadic = G__75122__delegate;
return G__75122;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__75127__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next.call(null,more)){
var G__75128 = y;
var G__75129 = cljs.core.first.call(null,more);
var G__75130 = cljs.core.next.call(null,more);
x = G__75128;
y = G__75129;
more = G__75130;
continue;
} else {
return (y >= cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__75127 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75127__delegate.call(this,x,y,more);};
G__75127.cljs$lang$maxFixedArity = 2;
G__75127.cljs$lang$applyTo = (function (arglist__75131){
var x = cljs.core.first(arglist__75131);
arglist__75131 = cljs.core.next(arglist__75131);
var y = cljs.core.first(arglist__75131);
var more = cljs.core.rest(arglist__75131);
return G__75127__delegate(x,y,more);
});
G__75127.cljs$core$IFn$_invoke$arity$variadic = G__75127__delegate;
return G__75127;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
var x__3947__auto__ = x;
var y__3948__auto__ = y;
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
});
var max__3 = (function() { 
var G__75132__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,(function (){var x__3947__auto__ = x;
var y__3948__auto__ = y;
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),more);
};
var G__75132 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75132__delegate.call(this,x,y,more);};
G__75132.cljs$lang$maxFixedArity = 2;
G__75132.cljs$lang$applyTo = (function (arglist__75133){
var x = cljs.core.first(arglist__75133);
arglist__75133 = cljs.core.next(arglist__75133);
var y = cljs.core.first(arglist__75133);
var more = cljs.core.rest(arglist__75133);
return G__75132__delegate(x,y,more);
});
G__75132.cljs$core$IFn$_invoke$arity$variadic = G__75132__delegate;
return G__75132;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
var x__3954__auto__ = x;
var y__3955__auto__ = y;
return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
});
var min__3 = (function() { 
var G__75134__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,(function (){var x__3954__auto__ = x;
var y__3955__auto__ = y;
return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})(),more);
};
var G__75134 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75134__delegate.call(this,x,y,more);};
G__75134.cljs$lang$maxFixedArity = 2;
G__75134.cljs$lang$applyTo = (function (arglist__75135){
var x = cljs.core.first(arglist__75135);
arglist__75135 = cljs.core.next(arglist__75135);
var y = cljs.core.first(arglist__75135);
var more = cljs.core.rest(arglist__75135);
return G__75134__delegate(x,y,more);
});
G__75134.cljs$core$IFn$_invoke$arity$variadic = G__75134__delegate;
return G__75134;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){
return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){
return x;
});
cljs.core.float$ = (function float$(x){
return x;
});
cljs.core.double$ = (function double$(x){
return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){
return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){
return (0);
});
var unchecked_add__1 = (function (x){
return x;
});
var unchecked_add__2 = (function (x,y){
return (x + y);
});
var unchecked_add__3 = (function() { 
var G__75136__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_add,(x + y),more);
};
var G__75136 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75136__delegate.call(this,x,y,more);};
G__75136.cljs$lang$maxFixedArity = 2;
G__75136.cljs$lang$applyTo = (function (arglist__75137){
var x = cljs.core.first(arglist__75137);
arglist__75137 = cljs.core.next(arglist__75137);
var y = cljs.core.first(arglist__75137);
var more = cljs.core.rest(arglist__75137);
return G__75136__delegate(x,y,more);
});
G__75136.cljs$core$IFn$_invoke$arity$variadic = G__75136__delegate;
return G__75136;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){
return (0);
});
var unchecked_add_int__1 = (function (x){
return x;
});
var unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__75138__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_add_int,(x + y),more);
};
var G__75138 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75138__delegate.call(this,x,y,more);};
G__75138.cljs$lang$maxFixedArity = 2;
G__75138.cljs$lang$applyTo = (function (arglist__75139){
var x = cljs.core.first(arglist__75139);
arglist__75139 = cljs.core.next(arglist__75139);
var y = cljs.core.first(arglist__75139);
var more = cljs.core.rest(arglist__75139);
return G__75138__delegate(x,y,more);
});
G__75138.cljs$core$IFn$_invoke$arity$variadic = G__75138__delegate;
return G__75138;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){
return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){
return unchecked_divide_int.call(null,(1),x);
});
var unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__75140__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more);
};
var G__75140 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75140__delegate.call(this,x,y,more);};
G__75140.cljs$lang$maxFixedArity = 2;
G__75140.cljs$lang$applyTo = (function (arglist__75141){
var x = cljs.core.first(arglist__75141);
arglist__75141 = cljs.core.next(arglist__75141);
var y = cljs.core.first(arglist__75141);
var more = cljs.core.rest(arglist__75141);
return G__75140__delegate(x,y,more);
});
G__75140.cljs$core$IFn$_invoke$arity$variadic = G__75140__delegate;
return G__75140;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){
return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){
return (1);
});
var unchecked_multiply__1 = (function (x){
return x;
});
var unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__75142__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_multiply,(x * y),more);
};
var G__75142 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75142__delegate.call(this,x,y,more);};
G__75142.cljs$lang$maxFixedArity = 2;
G__75142.cljs$lang$applyTo = (function (arglist__75143){
var x = cljs.core.first(arglist__75143);
arglist__75143 = cljs.core.next(arglist__75143);
var y = cljs.core.first(arglist__75143);
var more = cljs.core.rest(arglist__75143);
return G__75142__delegate(x,y,more);
});
G__75142.cljs$core$IFn$_invoke$arity$variadic = G__75142__delegate;
return G__75142;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){
return (1);
});
var unchecked_multiply_int__1 = (function (x){
return x;
});
var unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__75144__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_multiply_int,(x * y),more);
};
var G__75144 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75144__delegate.call(this,x,y,more);};
G__75144.cljs$lang$maxFixedArity = 2;
G__75144.cljs$lang$applyTo = (function (arglist__75145){
var x = cljs.core.first(arglist__75145);
arglist__75145 = cljs.core.next(arglist__75145);
var y = cljs.core.first(arglist__75145);
var more = cljs.core.rest(arglist__75145);
return G__75144__delegate(x,y,more);
});
G__75144.cljs$core$IFn$_invoke$arity$variadic = G__75144__delegate;
return G__75144;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){
return cljs.core.mod.call(null,x,n);
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){
return (- x);
});
var unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__75146__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_subtract,(x - y),more);
};
var G__75146 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75146__delegate.call(this,x,y,more);};
G__75146.cljs$lang$maxFixedArity = 2;
G__75146.cljs$lang$applyTo = (function (arglist__75147){
var x = cljs.core.first(arglist__75147);
arglist__75147 = cljs.core.next(arglist__75147);
var y = cljs.core.first(arglist__75147);
var more = cljs.core.rest(arglist__75147);
return G__75146__delegate(x,y,more);
});
G__75146.cljs$core$IFn$_invoke$arity$variadic = G__75146__delegate;
return G__75146;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){
return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__75148__delegate = function (x,y,more){
return cljs.core.reduce.call(null,unchecked_subtract_int,(x - y),more);
};
var G__75148 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75148__delegate.call(this,x,y,more);};
G__75148.cljs$lang$maxFixedArity = 2;
G__75148.cljs$lang$applyTo = (function (arglist__75149){
var x = cljs.core.first(arglist__75149);
arglist__75149 = cljs.core.next(arglist__75149);
var y = cljs.core.first(arglist__75149);
var more = cljs.core.rest(arglist__75149);
return G__75148__delegate(x,y,more);
});
G__75148.cljs$core$IFn$_invoke$arity$variadic = G__75148__delegate;
return G__75148;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){
if((q >= (0))){
return Math.floor.call(null,q);
} else {
return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){
return cljs.core.fix.call(null,x);
});
cljs.core.booleans = (function booleans(x){
return x;
});
cljs.core.bytes = (function bytes(x){
return x;
});
cljs.core.chars = (function chars(x){
return x;
});
cljs.core.shorts = (function shorts(x){
return x;
});
cljs.core.ints = (function ints(x){
return x;
});
cljs.core.floats = (function floats(x){
return x;
});
cljs.core.doubles = (function doubles(x){
return x;
});
cljs.core.longs = (function longs(x){
return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot.call(null,n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__75150__delegate = function (x,y,more){
while(true){
if(_EQ__EQ_.call(null,x,y)){
if(cljs.core.next.call(null,more)){
var G__75151 = y;
var G__75152 = cljs.core.first.call(null,more);
var G__75153 = cljs.core.next.call(null,more);
x = G__75151;
y = G__75152;
more = G__75153;
continue;
} else {
return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
};
var G__75150 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75150__delegate.call(this,x,y,more);};
G__75150.cljs$lang$maxFixedArity = 2;
G__75150.cljs$lang$applyTo = (function (arglist__75154){
var x = cljs.core.first(arglist__75154);
arglist__75154 = cljs.core.next(arglist__75154);
var y = cljs.core.first(arglist__75154);
var more = cljs.core.rest(arglist__75154);
return G__75150__delegate(x,y,more);
});
G__75150.cljs$core$IFn$_invoke$arity$variadic = G__75150__delegate;
return G__75150;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq.call(null,coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__75155 = (n__$1 - (1));
var G__75156 = cljs.core.next.call(null,xs);
n__$1 = G__75155;
xs = G__75156;
continue;
} else {
return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((x == null)){
return "";
} else {
return goog.string.buildString(x);
}
});
var str__2 = (function() { 
var G__75157__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(str.call(null,x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__75158 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__75159 = cljs.core.next.call(null,more);
sb = G__75158;
more = G__75159;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__75157 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75157__delegate.call(this,x,ys);};
G__75157.cljs$lang$maxFixedArity = 1;
G__75157.cljs$lang$applyTo = (function (arglist__75160){
var x = cljs.core.first(arglist__75160);
var ys = cljs.core.rest(arglist__75160);
return G__75157__delegate(x,ys);
});
G__75157.cljs$core$IFn$_invoke$arity$variadic = G__75157__delegate;
return G__75157;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;

/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(((cljs.core.counted_QMARK_.call(null,x)) && (cljs.core.counted_QMARK_.call(null,y)) && (!((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))))?false:(function (){var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__75161 = cljs.core.next.call(null,xs);
var G__75162 = cljs.core.next.call(null,ys);
xs = G__75161;
ys = G__75162;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){
if(cljs.core.seq.call(null,coll)){
var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));
var s = cljs.core.next.call(null,coll);
while(true){
if((s == null)){
return res;
} else {
var G__75163 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__75164 = cljs.core.next.call(null,s);
res = G__75163;
s = G__75164;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function hash_imap(m){
var h = (0);
var s = cljs.core.seq.call(null,m);
while(true){
if(s){
var e = cljs.core.first.call(null,s);
var G__75165 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % (4503599627370496));
var G__75166 = cljs.core.next.call(null,s);
h = G__75165;
s = G__75166;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq.call(null,s);
while(true){
if(s__$1){
var e = cljs.core.first.call(null,s__$1);
var G__75167 = ((h + cljs.core.hash.call(null,e)) % (4503599627370496));
var G__75168 = cljs.core.next.call(null,s__$1);
h = G__75167;
s__$1 = G__75168;
continue;
} else {
return h;
}
break;
}
});


/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var seq__75175_75181 = cljs.core.seq.call(null,fn_map);
var chunk__75176_75182 = null;
var count__75177_75183 = (0);
var i__75178_75184 = (0);
while(true){
if((i__75178_75184 < count__75177_75183)){
var vec__75179_75185 = cljs.core._nth.call(null,chunk__75176_75182,i__75178_75184);
var key_name_75186 = cljs.core.nth.call(null,vec__75179_75185,(0),null);
var f_75187 = cljs.core.nth.call(null,vec__75179_75185,(1),null);
var str_name_75188 = cljs.core.name.call(null,key_name_75186);
(obj[str_name_75188] = f_75187);

var G__75189 = seq__75175_75181;
var G__75190 = chunk__75176_75182;
var G__75191 = count__75177_75183;
var G__75192 = (i__75178_75184 + (1));
seq__75175_75181 = G__75189;
chunk__75176_75182 = G__75190;
count__75177_75183 = G__75191;
i__75178_75184 = G__75192;
continue;
} else {
var temp__4126__auto___75193 = cljs.core.seq.call(null,seq__75175_75181);
if(temp__4126__auto___75193){
var seq__75175_75194__$1 = temp__4126__auto___75193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75175_75194__$1)){
var c__4417__auto___75195 = cljs.core.chunk_first.call(null,seq__75175_75194__$1);
var G__75196 = cljs.core.chunk_rest.call(null,seq__75175_75194__$1);
var G__75197 = c__4417__auto___75195;
var G__75198 = cljs.core.count.call(null,c__4417__auto___75195);
var G__75199 = (0);
seq__75175_75181 = G__75196;
chunk__75176_75182 = G__75197;
count__75177_75183 = G__75198;
i__75178_75184 = G__75199;
continue;
} else {
var vec__75180_75200 = cljs.core.first.call(null,seq__75175_75194__$1);
var key_name_75201 = cljs.core.nth.call(null,vec__75180_75200,(0),null);
var f_75202 = cljs.core.nth.call(null,vec__75180_75200,(1),null);
var str_name_75203 = cljs.core.name.call(null,key_name_75201);
(obj[str_name_75203] = f_75202);

var G__75204 = cljs.core.next.call(null,seq__75175_75194__$1);
var G__75205 = null;
var G__75206 = (0);
var G__75207 = (0);
seq__75175_75181 = G__75204;
chunk__75176_75182 = G__75205;
count__75177_75183 = G__75206;
i__75178_75184 = G__75207;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest.call(null,coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__75209 = coll;
if(G__75209){
var bit__4311__auto__ = (G__75209.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__4311__auto__) || (G__75209.cljs$core$IReversible$)){
return true;
} else {
if((!G__75209.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__75209);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__75209);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll)){
return cljs.core.rseq.call(null,coll);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(cljs.core._first.call(null,xs__$1));

var G__75210 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__75210;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__75211 = (i - (1));
var G__75212 = cljs.core._conj.call(null,r,(arr[(i - (1))]));
i = G__75211;
r = G__75212;
continue;
} else {
return r;
}
break;
}
};
var list = function (var_args){
var xs = null;
if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__75213){
var xs = cljs.core.seq(arglist__75213);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq.call(null,self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3630__auto__ = (coll == null);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var G__75217 = coll;
if(G__75217){
var bit__4304__auto__ = (G__75217.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__4304__auto__) || (G__75217.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__75219 = x;
if(G__75219){
var bit__4311__auto__ = (G__75219.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__4311__auto__) || (G__75219.cljs$core$IList$)){
return true;
} else {
if((!G__75219.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__75219);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__75219);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){
return ((cljs.core.hash_symbol.call(null,k) + (2654435769)) | (0));
});
cljs.core.compare_keywords = (function compare_keywords(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.not.call(null,a.ns);
if(and__3618__auto__){
return b.ns;
} else {
return and__3618__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not.call(null,b.ns)){
return (1);
} else {
var nsc = goog.array.defaultCompare(a.ns,b.ns);
if(((0) === nsc)){
return goog.array.defaultCompare(a.name,b.name);
} else {
return nsc;
}
}
} else {
return goog.array.defaultCompare(a.name,b.name);

}
}
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4051__auto__ = self__._hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_keyword.call(null,this$__$1);
self__._hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__75221 = null;
var G__75221__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.call(null,coll,kw);
});
var G__75221__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.call(null,coll,kw,not_found);
});
G__75221 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__75221__2.call(this,self__,coll);
case 3:
return G__75221__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75221.cljs$core$IFn$_invoke$arity$2 = G__75221__2;
G__75221.cljs$core$IFn$_invoke$arity$3 = G__75221__3;
return G__75221;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args75220){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75220)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.call(null,coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.call(null,coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var G__75223 = x;
if(G__75223){
var bit__4304__auto__ = (G__75223.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4304__auto__) || (G__75223.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._namespace.call(null,x);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace.call(null,name),cljs.core.name.call(null,name),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = self__.fn.call(null);

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq.call(null,coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next.call(null,self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq.call(null,coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first.call(null,self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq.call(null,coll__$1);

if(!((self__.s == null))){
return cljs.core.rest.call(null,self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__75224 = ls.sval();
ls = G__75224;
continue;
} else {
self__.s = ls;

return cljs.core.seq.call(null,self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count.call(null,self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq.call(null,self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.call(null,self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count.call(null,self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__75226 = s;
if(G__75226){
var bit__4304__auto__ = (G__75226.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__4304__auto__) || (G__75226.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next.call(null,s);
} else {
return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,s__$1)){
ary.push(cljs.core.first.call(null,s__$1));

var G__75227 = cljs.core.next.call(null,s__$1);
s__$1 = G__75227;
continue;
} else {
return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = (new Array(cljs.core.count.call(null,coll)));
var i_75228 = (0);
var xs_75229 = cljs.core.seq.call(null,coll);
while(true){
if(xs_75229){
(ret[i_75228] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_75229)));

var G__75230 = (i_75228 + (1));
var G__75231 = cljs.core.next.call(null,xs_75229);
i_75228 = G__75230;
xs_75229 = G__75231;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return int_array.call(null,size_or_seq,null);
} else {
return cljs.core.into_array.call(null,size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){
var s = cljs.core.seq.call(null,init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first.call(null,s__$1));

var G__75232 = (i + (1));
var G__75233 = cljs.core.next.call(null,s__$1);
i = G__75232;
s__$1 = G__75233;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___75234 = size;
var i_75235 = (0);
while(true){
if((i_75235 < n__4517__auto___75234)){
(a[i_75235] = init_val_or_seq);

var G__75236 = (i_75235 + (1));
i_75235 = G__75236;
continue;
} else {
}
break;
}

return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return long_array.call(null,size_or_seq,null);
} else {
return cljs.core.into_array.call(null,size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){
var s = cljs.core.seq.call(null,init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first.call(null,s__$1));

var G__75237 = (i + (1));
var G__75238 = cljs.core.next.call(null,s__$1);
i = G__75237;
s__$1 = G__75238;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___75239 = size;
var i_75240 = (0);
while(true){
if((i_75240 < n__4517__auto___75239)){
(a[i_75240] = init_val_or_seq);

var G__75241 = (i_75240 + (1));
i_75240 = G__75241;
continue;
} else {
}
break;
}

return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return double_array.call(null,size_or_seq,null);
} else {
return cljs.core.into_array.call(null,size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){
var s = cljs.core.seq.call(null,init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first.call(null,s__$1));

var G__75242 = (i + (1));
var G__75243 = cljs.core.next.call(null,s__$1);
i = G__75242;
s__$1 = G__75243;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___75244 = size;
var i_75245 = (0);
while(true){
if((i_75245 < n__4517__auto___75244)){
(a[i_75245] = init_val_or_seq);

var G__75246 = (i_75245 + (1));
i_75245 = G__75246;
continue;
} else {
}
break;
}

return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return object_array.call(null,size_or_seq,null);
} else {
return cljs.core.into_array.call(null,size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq)){
var s = cljs.core.seq.call(null,init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first.call(null,s__$1));

var G__75247 = (i + (1));
var G__75248 = cljs.core.next.call(null,s__$1);
i = G__75247;
s__$1 = G__75248;
continue;
} else {
return a;
}
break;
}
} else {
var n__4517__auto___75249 = size;
var i_75250 = (0);
while(true){
if((i_75250 < n__4517__auto___75249)){
(a[i_75250] = init_val_or_seq);

var G__75251 = (i_75250 + (1));
i_75250 = G__75251;
continue;
} else {
}
break;
}

return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s)){
return cljs.core.count.call(null,s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq.call(null,s__$1))){
var G__75252 = cljs.core.next.call(null,s__$1);
var G__75253 = (i - (1));
var G__75254 = (sum + (1));
s__$1 = G__75252;
i = G__75253;
sum = G__75254;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next.call(null,arglist) == null)){
return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq.call(null,x);
if(s){
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else {
return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__75255__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq.call(null,xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1)){
return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat.call(null,concat.call(null,x,y),zs);
};
var G__75255 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75255__delegate.call(this,x,y,zs);};
G__75255.cljs$lang$maxFixedArity = 2;
G__75255.cljs$lang$applyTo = (function (arglist__75256){
var x = cljs.core.first(arglist__75256);
arglist__75256 = cljs.core.next(arglist__75256);
var y = cljs.core.first(arglist__75256);
var zs = cljs.core.rest(arglist__75256);
return G__75255__delegate(x,y,zs);
});
G__75255.cljs$core$IFn$_invoke$arity$variadic = G__75255__delegate;
return G__75255;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__75257__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__75257 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75257__delegate.call(this,a,b,c,d,more);};
G__75257.cljs$lang$maxFixedArity = 4;
G__75257.cljs$lang$applyTo = (function (arglist__75258){
var a = cljs.core.first(arglist__75258);
arglist__75258 = cljs.core.next(arglist__75258);
var b = cljs.core.first(arglist__75258);
arglist__75258 = cljs.core.next(arglist__75258);
var c = cljs.core.first(arglist__75258);
arglist__75258 = cljs.core.next(arglist__75258);
var d = cljs.core.first(arglist__75258);
var more = cljs.core.rest(arglist__75258);
return G__75257__delegate(a,b,c,d,more);
});
G__75257.cljs$core$IFn$_invoke$arity$variadic = G__75257__delegate;
return G__75257;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){
return coll;
});
var conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__75259__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_.call(null,tcoll,val);
if(cljs.core.truth_(vals)){
var G__75260 = ntcoll;
var G__75261 = cljs.core.first.call(null,vals);
var G__75262 = cljs.core.next.call(null,vals);
tcoll = G__75260;
val = G__75261;
vals = G__75262;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__75259 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75259__delegate.call(this,tcoll,val,vals);};
G__75259.cljs$lang$maxFixedArity = 2;
G__75259.cljs$lang$applyTo = (function (arglist__75263){
var tcoll = cljs.core.first(arglist__75263);
arglist__75263 = cljs.core.next(arglist__75263);
var val = cljs.core.first(arglist__75263);
var vals = cljs.core.rest(arglist__75263);
return G__75259__delegate(tcoll,val,vals);
});
G__75259.cljs$core$IFn$_invoke$arity$variadic = G__75259__delegate;
return G__75259;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__75264__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_.call(null,tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__75265 = ntcoll;
var G__75266 = cljs.core.first.call(null,kvs);
var G__75267 = cljs.core.second.call(null,kvs);
var G__75268 = cljs.core.nnext.call(null,kvs);
tcoll = G__75265;
key = G__75266;
val = G__75267;
kvs = G__75268;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__75264 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75264__delegate.call(this,tcoll,key,val,kvs);};
G__75264.cljs$lang$maxFixedArity = 3;
G__75264.cljs$lang$applyTo = (function (arglist__75269){
var tcoll = cljs.core.first(arglist__75269);
arglist__75269 = cljs.core.next(arglist__75269);
var key = cljs.core.first(arglist__75269);
arglist__75269 = cljs.core.next(arglist__75269);
var val = cljs.core.first(arglist__75269);
var kvs = cljs.core.rest(arglist__75269);
return G__75264__delegate(tcoll,key,val,kvs);
});
G__75264.cljs$core$IFn$_invoke$arity$variadic = G__75264__delegate;
return G__75264;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__75270__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_.call(null,tcoll,key);
if(cljs.core.truth_(ks)){
var G__75271 = ntcoll;
var G__75272 = cljs.core.first.call(null,ks);
var G__75273 = cljs.core.next.call(null,ks);
tcoll = G__75271;
key = G__75272;
ks = G__75273;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__75270 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75270__delegate.call(this,tcoll,key,ks);};
G__75270.cljs$lang$maxFixedArity = 2;
G__75270.cljs$lang$applyTo = (function (arglist__75274){
var tcoll = cljs.core.first(arglist__75274);
arglist__75274 = cljs.core.next(arglist__75274);
var key = cljs.core.first(arglist__75274);
var ks = cljs.core.rest(arglist__75274);
return G__75270__delegate(tcoll,key,ks);
});
G__75270.cljs$core$IFn$_invoke$arity$variadic = G__75270__delegate;
return G__75270;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__75275__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_.call(null,tcoll,val);
if(cljs.core.truth_(vals)){
var G__75276 = ntcoll;
var G__75277 = cljs.core.first.call(null,vals);
var G__75278 = cljs.core.next.call(null,vals);
tcoll = G__75276;
val = G__75277;
vals = G__75278;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__75275 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75275__delegate.call(this,tcoll,val,vals);};
G__75275.cljs$lang$maxFixedArity = 2;
G__75275.cljs$lang$applyTo = (function (arglist__75279){
var tcoll = cljs.core.first(arglist__75279);
arglist__75279 = cljs.core.next(arglist__75279);
var val = cljs.core.first(arglist__75279);
var vals = cljs.core.rest(arglist__75279);
return G__75275__delegate(tcoll,val,vals);
});
G__75275.cljs$core$IFn$_invoke$arity$variadic = G__75275__delegate;
return G__75275;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;

cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq.call(null,args);
if((argc === (0))){
return f.call(null);
} else {
var a4561 = cljs.core._first.call(null,args__$1);
var args__$2 = cljs.core._rest.call(null,args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a4561);
} else {
return f.call(null,a4561);
}
} else {
var b4562 = cljs.core._first.call(null,args__$2);
var args__$3 = cljs.core._rest.call(null,args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a4561,b4562);
} else {
return f.call(null,a4561,b4562);
}
} else {
var c4563 = cljs.core._first.call(null,args__$3);
var args__$4 = cljs.core._rest.call(null,args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a4561,b4562,c4563);
} else {
return f.call(null,a4561,b4562,c4563);
}
} else {
var d4564 = cljs.core._first.call(null,args__$4);
var args__$5 = cljs.core._rest.call(null,args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a4561,b4562,c4563,d4564);
} else {
return f.call(null,a4561,b4562,c4563,d4564);
}
} else {
var e4565 = cljs.core._first.call(null,args__$5);
var args__$6 = cljs.core._rest.call(null,args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a4561,b4562,c4563,d4564,e4565);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565);
}
} else {
var f4566 = cljs.core._first.call(null,args__$6);
var args__$7 = cljs.core._rest.call(null,args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a4561,b4562,c4563,d4564,e4565,f4566);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566);
}
} else {
var g4567 = cljs.core._first.call(null,args__$7);
var args__$8 = cljs.core._rest.call(null,args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a4561,b4562,c4563,d4564,e4565,f4566,g4567);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567);
}
} else {
var h4568 = cljs.core._first.call(null,args__$8);
var args__$9 = cljs.core._rest.call(null,args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568);
}
} else {
var i4569 = cljs.core._first.call(null,args__$9);
var args__$10 = cljs.core._rest.call(null,args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569);
}
} else {
var j4570 = cljs.core._first.call(null,args__$10);
var args__$11 = cljs.core._rest.call(null,args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570);
}
} else {
var k4571 = cljs.core._first.call(null,args__$11);
var args__$12 = cljs.core._rest.call(null,args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571);
}
} else {
var l4572 = cljs.core._first.call(null,args__$12);
var args__$13 = cljs.core._rest.call(null,args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572);
}
} else {
var m4573 = cljs.core._first.call(null,args__$13);
var args__$14 = cljs.core._rest.call(null,args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573);
}
} else {
var n4574 = cljs.core._first.call(null,args__$14);
var args__$15 = cljs.core._rest.call(null,args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574);
}
} else {
var o4575 = cljs.core._first.call(null,args__$15);
var args__$16 = cljs.core._rest.call(null,args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575);
}
} else {
var p4576 = cljs.core._first.call(null,args__$16);
var args__$17 = cljs.core._rest.call(null,args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576);
}
} else {
var q4577 = cljs.core._first.call(null,args__$17);
var args__$18 = cljs.core._rest.call(null,args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577);
}
} else {
var r4578 = cljs.core._first.call(null,args__$18);
var args__$19 = cljs.core._rest.call(null,args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578);
}
} else {
var s4579 = cljs.core._first.call(null,args__$19);
var args__$20 = cljs.core._rest.call(null,args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579);
}
} else {
var t4580 = cljs.core._first.call(null,args__$20);
var args__$21 = cljs.core._rest.call(null,args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579,t4580);
} else {
return f.call(null,a4561,b4562,c4563,d4564,e4565,f4566,g4567,h4568,i4569,j4570,k4571,l4572,m4573,n4574,o4575,p4576,q4577,r4578,s4579,t4580);
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to.call(null,f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to.call(null,f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to.call(null,f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to.call(null,f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__75280__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to.call(null,f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__75280 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__75280__delegate.call(this,f,a,b,c,d,args);};
G__75280.cljs$lang$maxFixedArity = 5;
G__75280.cljs$lang$applyTo = (function (arglist__75281){
var f = cljs.core.first(arglist__75281);
arglist__75281 = cljs.core.next(arglist__75281);
var a = cljs.core.first(arglist__75281);
arglist__75281 = cljs.core.next(arglist__75281);
var b = cljs.core.first(arglist__75281);
arglist__75281 = cljs.core.next(arglist__75281);
var c = cljs.core.first(arglist__75281);
arglist__75281 = cljs.core.next(arglist__75281);
var d = cljs.core.first(arglist__75281);
var args = cljs.core.rest(arglist__75281);
return G__75280__delegate(f,a,b,c,d,args);
});
G__75280.cljs$core$IFn$_invoke$arity$variadic = G__75280__delegate;
return G__75280;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){
return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj)));
});
var vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a));
});
var vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b));
});
var vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c));
});
var vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c,d));
});
var vary_meta__7 = (function() { 
var G__75282__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),a,b,c,d,args));
};
var G__75282 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__75282__delegate.call(this,obj,f,a,b,c,d,args);};
G__75282.cljs$lang$maxFixedArity = 6;
G__75282.cljs$lang$applyTo = (function (arglist__75283){
var obj = cljs.core.first(arglist__75283);
arglist__75283 = cljs.core.next(arglist__75283);
var f = cljs.core.first(arglist__75283);
arglist__75283 = cljs.core.next(arglist__75283);
var a = cljs.core.first(arglist__75283);
arglist__75283 = cljs.core.next(arglist__75283);
var b = cljs.core.first(arglist__75283);
arglist__75283 = cljs.core.next(arglist__75283);
var c = cljs.core.first(arglist__75283);
arglist__75283 = cljs.core.next(arglist__75283);
var d = cljs.core.first(arglist__75283);
var args = cljs.core.rest(arglist__75283);
return G__75282__delegate(obj,f,a,b,c,d,args);
});
G__75282.cljs$core$IFn$_invoke$arity$variadic = G__75282__delegate;
return G__75282;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__75284__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__75284 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75284__delegate.call(this,x,y,more);};
G__75284.cljs$lang$maxFixedArity = 2;
G__75284.cljs$lang$applyTo = (function (arglist__75285){
var x = cljs.core.first(arglist__75285);
arglist__75285 = cljs.core.next(arglist__75285);
var y = cljs.core.first(arglist__75285);
var more = cljs.core.rest(arglist__75285);
return G__75284__delegate(x,y,more);
});
G__75284.cljs$core$IFn$_invoke$arity$variadic = G__75284__delegate;
return G__75284;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function nil_iter(){
if(typeof cljs.core.t75289 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t75289 = (function (nil_iter,meta75290){
this.nil_iter = nil_iter;
this.meta75290 = meta75290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t75289.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t75289.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t75289.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t75289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75291){
var self__ = this;
var _75291__$1 = this;
return self__.meta75290;
});

cljs.core.t75289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75291,meta75290__$1){
var self__ = this;
var _75291__$1 = this;
return (new cljs.core.t75289(self__.nil_iter,meta75290__$1));
});

cljs.core.t75289.cljs$lang$type = true;

cljs.core.t75289.cljs$lang$ctorStr = "cljs.core/t75289";

cljs.core.t75289.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/t75289");
});

cljs.core.__GT_t75289 = (function __GT_t75289(nil_iter__$1,meta75290){
return (new cljs.core.t75289(nil_iter__$1,meta75290));
});

}

return (new cljs.core.t75289(nil_iter,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),54,new cljs.core.Keyword(null,"end-line","end-line",1837326455),3007,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),3003,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/martinb/dev/Logoot/om-event-bus/examples/debug/out/cljs/core.cljs"], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq.call(null,self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next.call(null,self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not.call(null,this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first.call(null,self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){
if((coll == null)){
return cljs.core.nil_iter.call(null);
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter.call(null,coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter.call(null,coll);
} else {
if(cljs.core.iterable_QMARK_.call(null,coll)){
return cljs.core._iterator.call(null,coll);
} else {
if(cljs.core.seqable_QMARK_.call(null,coll)){
return cljs.core.seq_iter.call(null,coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3618__auto__ = !((lt.stepper == null));
if(and__3618__auto__){
return self__.iter.hasNext();
} else {
return and__3618__auto__;
}
})())){
if(cljs.core.reduced_QMARK_.call(null,self__.xform.call(null,lt,self__.iter.next()))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
return self__.xform.call(null,lt);
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function stepper(xform,iter){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_.call(null,result))?cljs.core.deref.call(null,result):result);
lt.stepper = null;

return result;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer.call(null,lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper(xform.call(null,stepfn),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq.call(null,self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first.call(null,iters__$1);
if(cljs.core.not.call(null,iter.hasNext())){
return false;
} else {
var G__75292 = cljs.core.next.call(null,iters__$1);
iters__$1 = G__75292;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__4517__auto___75293 = self__.iters.length;
var i_75294 = (0);
while(true){
if((i_75294 < n__4517__auto___75293)){
(self__.nexts[i_75294] = (self__.iters[i_75294]).next());

var G__75295 = (i_75294 + (1));
i_75294 = G__75295;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.call(null,self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__3618__auto__ = !((lt.stepper == null));
if(and__3618__auto__){
return this$.hasNext();
} else {
return and__3618__auto__;
}
})())){
if(cljs.core.reduced_QMARK_.call(null,cljs.core.apply.call(null,self__.xform,cljs.core.cons.call(null,lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
return self__.xform.call(null,lt);
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){
return multi_stepper.call(null,xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_.call(null,result))?cljs.core.deref.call(null,result):result);
lt.stepper = null;

return lt;
});
var stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer.call(null,lt.stepper);

lt.stepper = null;

return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper(xform.call(null,stepfn),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq.call(null,this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq.call(null,self__.rest);
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq.call(null,this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq.call(null,this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll.call(null,this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq.call(null,this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential.call(null,this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_.call(null,other)) && ((cljs.core.seq.call(null,other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,o,cljs.core._seq.call(null,this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper.call(null,xform,cljs.core.iter.call(null,coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__75296_75300 = cljs.core.seq.call(null,colls);
var chunk__75297_75301 = null;
var count__75298_75302 = (0);
var i__75299_75303 = (0);
while(true){
if((i__75299_75303 < count__75298_75302)){
var coll_75304 = cljs.core._nth.call(null,chunk__75297_75301,i__75299_75303);
iters.push(cljs.core.iter.call(null,coll_75304));

var G__75305 = seq__75296_75300;
var G__75306 = chunk__75297_75301;
var G__75307 = count__75298_75302;
var G__75308 = (i__75299_75303 + (1));
seq__75296_75300 = G__75305;
chunk__75297_75301 = G__75306;
count__75298_75302 = G__75307;
i__75299_75303 = G__75308;
continue;
} else {
var temp__4126__auto___75309 = cljs.core.seq.call(null,seq__75296_75300);
if(temp__4126__auto___75309){
var seq__75296_75310__$1 = temp__4126__auto___75309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75296_75310__$1)){
var c__4417__auto___75311 = cljs.core.chunk_first.call(null,seq__75296_75310__$1);
var G__75312 = cljs.core.chunk_rest.call(null,seq__75296_75310__$1);
var G__75313 = c__4417__auto___75311;
var G__75314 = cljs.core.count.call(null,c__4417__auto___75311);
var G__75315 = (0);
seq__75296_75300 = G__75312;
chunk__75297_75301 = G__75313;
count__75298_75302 = G__75314;
i__75299_75303 = G__75315;
continue;
} else {
var coll_75316 = cljs.core.first.call(null,seq__75296_75310__$1);
iters.push(cljs.core.iter.call(null,coll_75316));

var G__75317 = cljs.core.next.call(null,seq__75296_75310__$1);
var G__75318 = null;
var G__75319 = (0);
var G__75320 = (0);
seq__75296_75300 = G__75317;
chunk__75297_75301 = G__75318;
count__75298_75302 = G__75319;
i__75299_75303 = G__75320;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.call(null,xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_.call(null,coll)){
return coll;
} else {
var or__3630__auto__ = cljs.core.seq.call(null,coll);
if(or__3630__auto__){
return or__3630__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__75321__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array.call(null,cljs.core.cons.call(null,coll,colls)));
};
var G__75321 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75321__delegate.call(this,xform,coll,colls);};
G__75321.cljs$lang$maxFixedArity = 2;
G__75321.cljs$lang$applyTo = (function (arglist__75322){
var xform = cljs.core.first(arglist__75322);
arglist__75322 = cljs.core.next(arglist__75322);
var coll = cljs.core.first(arglist__75322);
var colls = cljs.core.rest(arglist__75322);
return G__75321__delegate(xform,coll,colls);
});
G__75321.cljs$core$IFn$_invoke$arity$variadic = G__75321__delegate;
return G__75321;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null)){
return true;
} else {
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll)))){
var G__75323 = pred;
var G__75324 = cljs.core.next.call(null,coll);
pred = G__75323;
coll = G__75324;
continue;
} else {
return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll)){
var or__3630__auto__ = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var G__75325 = pred;
var G__75326 = cljs.core.next.call(null,coll);
pred = G__75325;
coll = G__75326;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__75327 = null;
var G__75327__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__75327__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__75327__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__75327__3 = (function() { 
var G__75328__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__75328 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75328__delegate.call(this,x,y,zs);};
G__75328.cljs$lang$maxFixedArity = 2;
G__75328.cljs$lang$applyTo = (function (arglist__75329){
var x = cljs.core.first(arglist__75329);
arglist__75329 = cljs.core.next(arglist__75329);
var y = cljs.core.first(arglist__75329);
var zs = cljs.core.rest(arglist__75329);
return G__75328__delegate(x,y,zs);
});
G__75328.cljs$core$IFn$_invoke$arity$variadic = G__75328__delegate;
return G__75328;
})()
;
G__75327 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__75327__0.call(this);
case 1:
return G__75327__1.call(this,x);
case 2:
return G__75327__2.call(this,x,y);
default:
return G__75327__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75327.cljs$lang$maxFixedArity = 2;
G__75327.cljs$lang$applyTo = G__75327__3.cljs$lang$applyTo;
G__75327.cljs$core$IFn$_invoke$arity$0 = G__75327__0;
G__75327.cljs$core$IFn$_invoke$arity$1 = G__75327__1;
G__75327.cljs$core$IFn$_invoke$arity$2 = G__75327__2;
G__75327.cljs$core$IFn$_invoke$arity$variadic = G__75327__3.cljs$core$IFn$_invoke$arity$variadic;
return G__75327;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__75330__delegate = function (args){
return x;
};
var G__75330 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75330__delegate.call(this,args);};
G__75330.cljs$lang$maxFixedArity = 0;
G__75330.cljs$lang$applyTo = (function (arglist__75331){
var args = cljs.core.seq(arglist__75331);
return G__75330__delegate(args);
});
G__75330.cljs$core$IFn$_invoke$arity$variadic = G__75330__delegate;
return G__75330;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__75332 = null;
var G__75332__0 = (function (){
return f.call(null,g.call(null));
});
var G__75332__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__75332__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__75332__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__75332__4 = (function() { 
var G__75333__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__75333 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75333__delegate.call(this,x,y,z,args);};
G__75333.cljs$lang$maxFixedArity = 3;
G__75333.cljs$lang$applyTo = (function (arglist__75334){
var x = cljs.core.first(arglist__75334);
arglist__75334 = cljs.core.next(arglist__75334);
var y = cljs.core.first(arglist__75334);
arglist__75334 = cljs.core.next(arglist__75334);
var z = cljs.core.first(arglist__75334);
var args = cljs.core.rest(arglist__75334);
return G__75333__delegate(x,y,z,args);
});
G__75333.cljs$core$IFn$_invoke$arity$variadic = G__75333__delegate;
return G__75333;
})()
;
G__75332 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75332__0.call(this);
case 1:
return G__75332__1.call(this,x);
case 2:
return G__75332__2.call(this,x,y);
case 3:
return G__75332__3.call(this,x,y,z);
default:
return G__75332__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75332.cljs$lang$maxFixedArity = 3;
G__75332.cljs$lang$applyTo = G__75332__4.cljs$lang$applyTo;
G__75332.cljs$core$IFn$_invoke$arity$0 = G__75332__0;
G__75332.cljs$core$IFn$_invoke$arity$1 = G__75332__1;
G__75332.cljs$core$IFn$_invoke$arity$2 = G__75332__2;
G__75332.cljs$core$IFn$_invoke$arity$3 = G__75332__3;
G__75332.cljs$core$IFn$_invoke$arity$variadic = G__75332__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75332;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__75335 = null;
var G__75335__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__75335__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__75335__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__75335__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__75335__4 = (function() { 
var G__75336__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__75336 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75336__delegate.call(this,x,y,z,args);};
G__75336.cljs$lang$maxFixedArity = 3;
G__75336.cljs$lang$applyTo = (function (arglist__75337){
var x = cljs.core.first(arglist__75337);
arglist__75337 = cljs.core.next(arglist__75337);
var y = cljs.core.first(arglist__75337);
arglist__75337 = cljs.core.next(arglist__75337);
var z = cljs.core.first(arglist__75337);
var args = cljs.core.rest(arglist__75337);
return G__75336__delegate(x,y,z,args);
});
G__75336.cljs$core$IFn$_invoke$arity$variadic = G__75336__delegate;
return G__75336;
})()
;
G__75335 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75335__0.call(this);
case 1:
return G__75335__1.call(this,x);
case 2:
return G__75335__2.call(this,x,y);
case 3:
return G__75335__3.call(this,x,y,z);
default:
return G__75335__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75335.cljs$lang$maxFixedArity = 3;
G__75335.cljs$lang$applyTo = G__75335__4.cljs$lang$applyTo;
G__75335.cljs$core$IFn$_invoke$arity$0 = G__75335__0;
G__75335.cljs$core$IFn$_invoke$arity$1 = G__75335__1;
G__75335.cljs$core$IFn$_invoke$arity$2 = G__75335__2;
G__75335.cljs$core$IFn$_invoke$arity$3 = G__75335__3;
G__75335.cljs$core$IFn$_invoke$arity$variadic = G__75335__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75335;
})()
});
var comp__4 = (function() { 
var G__75338__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__75339__delegate = function (args){
var ret = cljs.core.apply.call(null,cljs.core.first.call(null,fs__$1),args);
var fs__$2 = cljs.core.next.call(null,fs__$1);
while(true){
if(fs__$2){
var G__75340 = cljs.core.first.call(null,fs__$2).call(null,ret);
var G__75341 = cljs.core.next.call(null,fs__$2);
ret = G__75340;
fs__$2 = G__75341;
continue;
} else {
return ret;
}
break;
}
};
var G__75339 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75339__delegate.call(this,args);};
G__75339.cljs$lang$maxFixedArity = 0;
G__75339.cljs$lang$applyTo = (function (arglist__75342){
var args = cljs.core.seq(arglist__75342);
return G__75339__delegate(args);
});
G__75339.cljs$core$IFn$_invoke$arity$variadic = G__75339__delegate;
return G__75339;
})()
;
;})(fs__$1))
};
var G__75338 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75338__delegate.call(this,f1,f2,f3,fs);};
G__75338.cljs$lang$maxFixedArity = 3;
G__75338.cljs$lang$applyTo = (function (arglist__75343){
var f1 = cljs.core.first(arglist__75343);
arglist__75343 = cljs.core.next(arglist__75343);
var f2 = cljs.core.first(arglist__75343);
arglist__75343 = cljs.core.next(arglist__75343);
var f3 = cljs.core.first(arglist__75343);
var fs = cljs.core.rest(arglist__75343);
return G__75338__delegate(f1,f2,f3,fs);
});
G__75338.cljs$core$IFn$_invoke$arity$variadic = G__75338__delegate;
return G__75338;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){
return f;
});
var partial__2 = (function (f,arg1){
return (function() {
var G__75344 = null;
var G__75344__0 = (function (){
return f.call(null,arg1);
});
var G__75344__1 = (function (x){
return f.call(null,arg1,x);
});
var G__75344__2 = (function (x,y){
return f.call(null,arg1,x,y);
});
var G__75344__3 = (function (x,y,z){
return f.call(null,arg1,x,y,z);
});
var G__75344__4 = (function() { 
var G__75345__delegate = function (x,y,z,args){
return cljs.core.apply.call(null,f,arg1,x,y,z,args);
};
var G__75345 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75345__delegate.call(this,x,y,z,args);};
G__75345.cljs$lang$maxFixedArity = 3;
G__75345.cljs$lang$applyTo = (function (arglist__75346){
var x = cljs.core.first(arglist__75346);
arglist__75346 = cljs.core.next(arglist__75346);
var y = cljs.core.first(arglist__75346);
arglist__75346 = cljs.core.next(arglist__75346);
var z = cljs.core.first(arglist__75346);
var args = cljs.core.rest(arglist__75346);
return G__75345__delegate(x,y,z,args);
});
G__75345.cljs$core$IFn$_invoke$arity$variadic = G__75345__delegate;
return G__75345;
})()
;
G__75344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75344__0.call(this);
case 1:
return G__75344__1.call(this,x);
case 2:
return G__75344__2.call(this,x,y);
case 3:
return G__75344__3.call(this,x,y,z);
default:
return G__75344__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75344.cljs$lang$maxFixedArity = 3;
G__75344.cljs$lang$applyTo = G__75344__4.cljs$lang$applyTo;
G__75344.cljs$core$IFn$_invoke$arity$0 = G__75344__0;
G__75344.cljs$core$IFn$_invoke$arity$1 = G__75344__1;
G__75344.cljs$core$IFn$_invoke$arity$2 = G__75344__2;
G__75344.cljs$core$IFn$_invoke$arity$3 = G__75344__3;
G__75344.cljs$core$IFn$_invoke$arity$variadic = G__75344__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75344;
})()
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__75347 = null;
var G__75347__0 = (function (){
return f.call(null,arg1,arg2);
});
var G__75347__1 = (function (x){
return f.call(null,arg1,arg2,x);
});
var G__75347__2 = (function (x,y){
return f.call(null,arg1,arg2,x,y);
});
var G__75347__3 = (function (x,y,z){
return f.call(null,arg1,arg2,x,y,z);
});
var G__75347__4 = (function() { 
var G__75348__delegate = function (x,y,z,args){
return cljs.core.apply.call(null,f,arg1,arg2,x,y,z,args);
};
var G__75348 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75348__delegate.call(this,x,y,z,args);};
G__75348.cljs$lang$maxFixedArity = 3;
G__75348.cljs$lang$applyTo = (function (arglist__75349){
var x = cljs.core.first(arglist__75349);
arglist__75349 = cljs.core.next(arglist__75349);
var y = cljs.core.first(arglist__75349);
arglist__75349 = cljs.core.next(arglist__75349);
var z = cljs.core.first(arglist__75349);
var args = cljs.core.rest(arglist__75349);
return G__75348__delegate(x,y,z,args);
});
G__75348.cljs$core$IFn$_invoke$arity$variadic = G__75348__delegate;
return G__75348;
})()
;
G__75347 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75347__0.call(this);
case 1:
return G__75347__1.call(this,x);
case 2:
return G__75347__2.call(this,x,y);
case 3:
return G__75347__3.call(this,x,y,z);
default:
return G__75347__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75347.cljs$lang$maxFixedArity = 3;
G__75347.cljs$lang$applyTo = G__75347__4.cljs$lang$applyTo;
G__75347.cljs$core$IFn$_invoke$arity$0 = G__75347__0;
G__75347.cljs$core$IFn$_invoke$arity$1 = G__75347__1;
G__75347.cljs$core$IFn$_invoke$arity$2 = G__75347__2;
G__75347.cljs$core$IFn$_invoke$arity$3 = G__75347__3;
G__75347.cljs$core$IFn$_invoke$arity$variadic = G__75347__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75347;
})()
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__75350 = null;
var G__75350__0 = (function (){
return f.call(null,arg1,arg2,arg3);
});
var G__75350__1 = (function (x){
return f.call(null,arg1,arg2,arg3,x);
});
var G__75350__2 = (function (x,y){
return f.call(null,arg1,arg2,arg3,x,y);
});
var G__75350__3 = (function (x,y,z){
return f.call(null,arg1,arg2,arg3,x,y,z);
});
var G__75350__4 = (function() { 
var G__75351__delegate = function (x,y,z,args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,x,y,z,args);
};
var G__75351 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75351__delegate.call(this,x,y,z,args);};
G__75351.cljs$lang$maxFixedArity = 3;
G__75351.cljs$lang$applyTo = (function (arglist__75352){
var x = cljs.core.first(arglist__75352);
arglist__75352 = cljs.core.next(arglist__75352);
var y = cljs.core.first(arglist__75352);
arglist__75352 = cljs.core.next(arglist__75352);
var z = cljs.core.first(arglist__75352);
var args = cljs.core.rest(arglist__75352);
return G__75351__delegate(x,y,z,args);
});
G__75351.cljs$core$IFn$_invoke$arity$variadic = G__75351__delegate;
return G__75351;
})()
;
G__75350 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75350__0.call(this);
case 1:
return G__75350__1.call(this,x);
case 2:
return G__75350__2.call(this,x,y);
case 3:
return G__75350__3.call(this,x,y,z);
default:
return G__75350__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75350.cljs$lang$maxFixedArity = 3;
G__75350.cljs$lang$applyTo = G__75350__4.cljs$lang$applyTo;
G__75350.cljs$core$IFn$_invoke$arity$0 = G__75350__0;
G__75350.cljs$core$IFn$_invoke$arity$1 = G__75350__1;
G__75350.cljs$core$IFn$_invoke$arity$2 = G__75350__2;
G__75350.cljs$core$IFn$_invoke$arity$3 = G__75350__3;
G__75350.cljs$core$IFn$_invoke$arity$variadic = G__75350__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75350;
})()
});
var partial__5 = (function() { 
var G__75353__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__75354__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__75354 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75354__delegate.call(this,args);};
G__75354.cljs$lang$maxFixedArity = 0;
G__75354.cljs$lang$applyTo = (function (arglist__75355){
var args = cljs.core.seq(arglist__75355);
return G__75354__delegate(args);
});
G__75354.cljs$core$IFn$_invoke$arity$variadic = G__75354__delegate;
return G__75354;
})()
;
};
var G__75353 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75353__delegate.call(this,f,arg1,arg2,arg3,more);};
G__75353.cljs$lang$maxFixedArity = 4;
G__75353.cljs$lang$applyTo = (function (arglist__75356){
var f = cljs.core.first(arglist__75356);
arglist__75356 = cljs.core.next(arglist__75356);
var arg1 = cljs.core.first(arglist__75356);
arglist__75356 = cljs.core.next(arglist__75356);
var arg2 = cljs.core.first(arglist__75356);
arglist__75356 = cljs.core.next(arglist__75356);
var arg3 = cljs.core.first(arglist__75356);
var more = cljs.core.rest(arglist__75356);
return G__75353__delegate(f,arg1,arg2,arg3,more);
});
G__75353.cljs$core$IFn$_invoke$arity$variadic = G__75353__delegate;
return G__75353;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__75357 = null;
var G__75357__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__75357__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__75357__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__75357__4 = (function() { 
var G__75358__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__75358 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75358__delegate.call(this,a,b,c,ds);};
G__75358.cljs$lang$maxFixedArity = 3;
G__75358.cljs$lang$applyTo = (function (arglist__75359){
var a = cljs.core.first(arglist__75359);
arglist__75359 = cljs.core.next(arglist__75359);
var b = cljs.core.first(arglist__75359);
arglist__75359 = cljs.core.next(arglist__75359);
var c = cljs.core.first(arglist__75359);
var ds = cljs.core.rest(arglist__75359);
return G__75358__delegate(a,b,c,ds);
});
G__75358.cljs$core$IFn$_invoke$arity$variadic = G__75358__delegate;
return G__75358;
})()
;
G__75357 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__75357__1.call(this,a);
case 2:
return G__75357__2.call(this,a,b);
case 3:
return G__75357__3.call(this,a,b,c);
default:
return G__75357__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75357.cljs$lang$maxFixedArity = 3;
G__75357.cljs$lang$applyTo = G__75357__4.cljs$lang$applyTo;
G__75357.cljs$core$IFn$_invoke$arity$1 = G__75357__1;
G__75357.cljs$core$IFn$_invoke$arity$2 = G__75357__2;
G__75357.cljs$core$IFn$_invoke$arity$3 = G__75357__3;
G__75357.cljs$core$IFn$_invoke$arity$variadic = G__75357__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75357;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__75360 = null;
var G__75360__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__75360__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__75360__4 = (function() { 
var G__75361__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__75361 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75361__delegate.call(this,a,b,c,ds);};
G__75361.cljs$lang$maxFixedArity = 3;
G__75361.cljs$lang$applyTo = (function (arglist__75362){
var a = cljs.core.first(arglist__75362);
arglist__75362 = cljs.core.next(arglist__75362);
var b = cljs.core.first(arglist__75362);
arglist__75362 = cljs.core.next(arglist__75362);
var c = cljs.core.first(arglist__75362);
var ds = cljs.core.rest(arglist__75362);
return G__75361__delegate(a,b,c,ds);
});
G__75361.cljs$core$IFn$_invoke$arity$variadic = G__75361__delegate;
return G__75361;
})()
;
G__75360 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__75360__2.call(this,a,b);
case 3:
return G__75360__3.call(this,a,b,c);
default:
return G__75360__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75360.cljs$lang$maxFixedArity = 3;
G__75360.cljs$lang$applyTo = G__75360__4.cljs$lang$applyTo;
G__75360.cljs$core$IFn$_invoke$arity$2 = G__75360__2;
G__75360.cljs$core$IFn$_invoke$arity$3 = G__75360__3;
G__75360.cljs$core$IFn$_invoke$arity$variadic = G__75360__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75360;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__75363 = null;
var G__75363__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__75363__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__75363__4 = (function() { 
var G__75364__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__75364 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75364__delegate.call(this,a,b,c,ds);};
G__75364.cljs$lang$maxFixedArity = 3;
G__75364.cljs$lang$applyTo = (function (arglist__75365){
var a = cljs.core.first(arglist__75365);
arglist__75365 = cljs.core.next(arglist__75365);
var b = cljs.core.first(arglist__75365);
arglist__75365 = cljs.core.next(arglist__75365);
var c = cljs.core.first(arglist__75365);
var ds = cljs.core.rest(arglist__75365);
return G__75364__delegate(a,b,c,ds);
});
G__75364.cljs$core$IFn$_invoke$arity$variadic = G__75364__delegate;
return G__75364;
})()
;
G__75363 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__75363__2.call(this,a,b);
case 3:
return G__75363__3.call(this,a,b,c);
default:
return G__75363__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75363.cljs$lang$maxFixedArity = 3;
G__75363.cljs$lang$applyTo = G__75363__4.cljs$lang$applyTo;
G__75363.cljs$core$IFn$_invoke$arity$2 = G__75363__2;
G__75363.cljs$core$IFn$_invoke$arity$3 = G__75363__3;
G__75363.cljs$core$IFn$_invoke$arity$variadic = G__75363__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75363;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__4517__auto___75366 = size;
var i_75367 = (0);
while(true){
if((i_75367 < n__4517__auto___75366)){
cljs.core.chunk_append.call(null,b,f.call(null,(idx + i_75367),cljs.core._nth.call(null,c,i_75367)));

var G__75368 = (i_75367 + (1));
i_75367 = G__75368;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else {
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,(idx + (1)),cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
return mapi.call(null,(0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){
return (function (rf){
return (function() {
var G__75369 = null;
var G__75369__0 = (function (){
return rf.call(null);
});
var G__75369__1 = (function (result){
return rf.call(null,result);
});
var G__75369__2 = (function (result,input){
var v = f.call(null,input);
if((v == null)){
return result;
} else {
return rf.call(null,result,v);
}
});
G__75369 = function(result,input){
switch(arguments.length){
case 0:
return G__75369__0.call(this);
case 1:
return G__75369__1.call(this,result);
case 2:
return G__75369__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75369.cljs$core$IFn$_invoke$arity$0 = G__75369__0;
G__75369.cljs$core$IFn$_invoke$arity$1 = G__75369__1;
G__75369.cljs$core$IFn$_invoke$arity$2 = G__75369__2;
return G__75369;
})()
});
});
var keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__4517__auto___75370 = size;
var i_75371 = (0);
while(true){
if((i_75371 < n__4517__auto___75370)){
var x_75372 = f.call(null,cljs.core._nth.call(null,c,i_75371));
if((x_75372 == null)){
} else {
cljs.core.chunk_append.call(null,b,x_75372);
}

var G__75373 = (i_75371 + (1));
i_75371 = G__75373;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else {
var x = f.call(null,cljs.core.first.call(null,s));
if((x == null)){
return keep.call(null,f,cljs.core.rest.call(null,s));
} else {
return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)));
}
}
} else {
return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__75374 = cljs.core.seq.call(null,self__.watches);
var chunk__75375 = null;
var count__75376 = (0);
var i__75377 = (0);
while(true){
if((i__75377 < count__75376)){
var vec__75378 = cljs.core._nth.call(null,chunk__75375,i__75377);
var key = cljs.core.nth.call(null,vec__75378,(0),null);
var f = cljs.core.nth.call(null,vec__75378,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__75380 = seq__75374;
var G__75381 = chunk__75375;
var G__75382 = count__75376;
var G__75383 = (i__75377 + (1));
seq__75374 = G__75380;
chunk__75375 = G__75381;
count__75376 = G__75382;
i__75377 = G__75383;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75374);
if(temp__4126__auto__){
var seq__75374__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75374__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75374__$1);
var G__75384 = cljs.core.chunk_rest.call(null,seq__75374__$1);
var G__75385 = c__4417__auto__;
var G__75386 = cljs.core.count.call(null,c__4417__auto__);
var G__75387 = (0);
seq__75374 = G__75384;
chunk__75375 = G__75385;
count__75376 = G__75386;
i__75377 = G__75387;
continue;
} else {
var vec__75379 = cljs.core.first.call(null,seq__75374__$1);
var key = cljs.core.nth.call(null,vec__75379,(0),null);
var f = cljs.core.nth.call(null,vec__75379,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__75388 = cljs.core.next.call(null,seq__75374__$1);
var G__75389 = null;
var G__75390 = (0);
var G__75391 = (0);
seq__75374 = G__75388;
chunk__75375 = G__75389;
count__75376 = G__75390;
i__75377 = G__75391;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__75395__delegate = function (x,p__75392){
var map__75394 = p__75392;
var map__75394__$1 = ((cljs.core.seq_QMARK_.call(null,map__75394))?cljs.core.apply.call(null,cljs.core.hash_map,map__75394):map__75394);
var validator = cljs.core.get.call(null,map__75394__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__75394__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__75395 = function (x,var_args){
var p__75392 = null;
if (arguments.length > 1) {
  p__75392 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75395__delegate.call(this,x,p__75392);};
G__75395.cljs$lang$maxFixedArity = 1;
G__75395.cljs$lang$applyTo = (function (arglist__75396){
var x = cljs.core.first(arglist__75396);
var p__75392 = cljs.core.rest(arglist__75396);
return G__75395__delegate(x,p__75392);
});
G__75395.cljs$core$IFn$_invoke$arity$variadic = G__75395__delegate;
return G__75395;
})()
;
atom = function(x,var_args){
var p__75392 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_(validate.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches.call(null,a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_.call(null,a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
} else {
return cljs.core._swap_BANG_.call(null,a,f);
}
});
var swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
} else {
return cljs.core._swap_BANG_.call(null,a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
} else {
return cljs.core._swap_BANG_.call(null,a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__75397__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.call(null,a,f,x,y,more);
}
};
var G__75397 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75397__delegate.call(this,a,f,x,y,more);};
G__75397.cljs$lang$maxFixedArity = 4;
G__75397.cljs$lang$applyTo = (function (arglist__75398){
var a = cljs.core.first(arglist__75398);
arglist__75398 = cljs.core.next(arglist__75398);
var f = cljs.core.first(arglist__75398);
arglist__75398 = cljs.core.next(arglist__75398);
var x = cljs.core.first(arglist__75398);
arglist__75398 = cljs.core.next(arglist__75398);
var y = cljs.core.first(arglist__75398);
var more = cljs.core.rest(arglist__75398);
return G__75397__delegate(a,f,x,y,more);
});
G__75397.cljs$core$IFn$_invoke$arity$variadic = G__75397__delegate;
return G__75397;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval)){
cljs.core.reset_BANG_.call(null,a,newval);

return true;
} else {
return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});

/**
* @constructor
*/
cljs.core.Volatile = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Volatile.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Volatile.prototype.cljs$core$IVolatile$ = true;

cljs.core.Volatile.prototype.cljs$core$IVolatile$_vreset_BANG_$arity$2 = (function (_,new_state){
var self__ = this;
var ___$1 = this;
return self__.state = new_state;
});

cljs.core.Volatile.cljs$lang$type = true;

cljs.core.Volatile.cljs$lang$ctorStr = "cljs.core/Volatile";

cljs.core.Volatile.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Volatile");
});

cljs.core.__GT_Volatile = (function __GT_Volatile(state){
return (new cljs.core.Volatile(state));
});

/**
* Creates and returns a Volatile with an initial value of val.
*/
cljs.core.volatile_BANG_ = (function volatile_BANG_(val){
return (new cljs.core.Volatile(val));
});
/**
* Returns true if x is a volatile.
*/
cljs.core.volatile_QMARK_ = (function volatile_QMARK_(x){
return (x instanceof cljs.core.Volatile);
});
/**
* Sets the value of volatile to newval without regard for the
* current value. Returns newval.
*/
cljs.core.vreset_BANG_ = (function vreset_BANG_(vol,newval){
return cljs.core._vreset_BANG_.call(null,vol,newval);
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (ia){
return (function() {
var G__75399 = null;
var G__75399__0 = (function (){
return rf.call(null);
});
var G__75399__1 = (function (result){
return rf.call(null,result);
});
var G__75399__2 = (function (result,input){
var i = cljs.core._vreset_BANG_.call(null,ia,(cljs.core._deref.call(null,ia) + (1)));
var v = f.call(null,i,input);
if((v == null)){
return result;
} else {
return rf.call(null,result,v);
}
});
G__75399 = function(result,input){
switch(arguments.length){
case 0:
return G__75399__0.call(this);
case 1:
return G__75399__1.call(this,result);
case 2:
return G__75399__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75399.cljs$core$IFn$_invoke$arity$0 = G__75399__0;
G__75399.cljs$core$IFn$_invoke$arity$1 = G__75399__1;
G__75399.cljs$core$IFn$_invoke$arity$2 = G__75399__2;
return G__75399;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__4517__auto___75400 = size;
var i_75401 = (0);
while(true){
if((i_75401 < n__4517__auto___75400)){
var x_75402 = f.call(null,(idx + i_75401),cljs.core._nth.call(null,c,i_75401));
if((x_75402 == null)){
} else {
cljs.core.chunk_append.call(null,b,x_75402);
}

var G__75403 = (i_75401 + (1));
i_75401 = G__75403;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else {
var x = f.call(null,idx,cljs.core.first.call(null,s));
if((x == null)){
return keepi.call(null,(idx + (1)),cljs.core.rest.call(null,s));
} else {
return cljs.core.cons.call(null,x,keepi.call(null,(idx + (1)),cljs.core.rest.call(null,s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi.call(null,(0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
return p.call(null,y);
} else {
return and__3618__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p.call(null,y);
if(cljs.core.truth_(and__3618__auto____$1)){
return p.call(null,z);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__75410__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(ep1.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,p,args)));
};
var G__75410 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75410__delegate.call(this,x,y,z,args);};
G__75410.cljs$lang$maxFixedArity = 3;
G__75410.cljs$lang$applyTo = (function (arglist__75411){
var x = cljs.core.first(arglist__75411);
arglist__75411 = cljs.core.next(arglist__75411);
var y = cljs.core.first(arglist__75411);
arglist__75411 = cljs.core.next(arglist__75411);
var z = cljs.core.first(arglist__75411);
var args = cljs.core.rest(arglist__75411);
return G__75410__delegate(x,y,z,args);
});
G__75410.cljs$core$IFn$_invoke$arity$variadic = G__75410__delegate;
return G__75410;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
return p2.call(null,x);
} else {
return and__3618__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(and__3618__auto____$2)){
return p2.call(null,y);
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3618__auto____$4)){
return p2.call(null,z);
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__75412__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(ep2.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__75404_SHARP_){
var and__3618__auto__ = p1.call(null,p1__75404_SHARP_);
if(cljs.core.truth_(and__3618__auto__)){
return p2.call(null,p1__75404_SHARP_);
} else {
return and__3618__auto__;
}
}),args)));
};
var G__75412 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75412__delegate.call(this,x,y,z,args);};
G__75412.cljs$lang$maxFixedArity = 3;
G__75412.cljs$lang$applyTo = (function (arglist__75413){
var x = cljs.core.first(arglist__75413);
arglist__75413 = cljs.core.next(arglist__75413);
var y = cljs.core.first(arglist__75413);
arglist__75413 = cljs.core.next(arglist__75413);
var z = cljs.core.first(arglist__75413);
var args = cljs.core.rest(arglist__75413);
return G__75412__delegate(x,y,z,args);
});
G__75412.cljs$core$IFn$_invoke$arity$variadic = G__75412__delegate;
return G__75412;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3618__auto____$1)){
return p3.call(null,x);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3618__auto____$4)){
return p3.call(null,y);
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3618__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3618__auto____$1)){
var and__3618__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3618__auto____$2)){
var and__3618__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3618__auto____$3)){
var and__3618__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3618__auto____$4)){
var and__3618__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(and__3618__auto____$5)){
var and__3618__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(and__3618__auto____$6)){
var and__3618__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(and__3618__auto____$7)){
return p3.call(null,z);
} else {
return and__3618__auto____$7;
}
} else {
return and__3618__auto____$6;
}
} else {
return and__3618__auto____$5;
}
} else {
return and__3618__auto____$4;
}
} else {
return and__3618__auto____$3;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__75414__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(ep3.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__75405_SHARP_){
var and__3618__auto__ = p1.call(null,p1__75405_SHARP_);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p2.call(null,p1__75405_SHARP_);
if(cljs.core.truth_(and__3618__auto____$1)){
return p3.call(null,p1__75405_SHARP_);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
}),args)));
};
var G__75414 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75414__delegate.call(this,x,y,z,args);};
G__75414.cljs$lang$maxFixedArity = 3;
G__75414.cljs$lang$applyTo = (function (arglist__75415){
var x = cljs.core.first(arglist__75415);
arglist__75415 = cljs.core.next(arglist__75415);
var y = cljs.core.first(arglist__75415);
arglist__75415 = cljs.core.next(arglist__75415);
var z = cljs.core.first(arglist__75415);
var args = cljs.core.rest(arglist__75415);
return G__75414__delegate(x,y,z,args);
});
G__75414.cljs$core$IFn$_invoke$arity$variadic = G__75414__delegate;
return G__75414;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__75416__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__75406_SHARP_){
return p1__75406_SHARP_.call(null,x);
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__75407_SHARP_){
var and__3618__auto__ = p1__75407_SHARP_.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
return p1__75407_SHARP_.call(null,y);
} else {
return and__3618__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__75408_SHARP_){
var and__3618__auto__ = p1__75408_SHARP_.call(null,x);
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = p1__75408_SHARP_.call(null,y);
if(cljs.core.truth_(and__3618__auto____$1)){
return p1__75408_SHARP_.call(null,z);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__75417__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(epn.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__75409_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__75409_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__75417 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75417__delegate.call(this,x,y,z,args);};
G__75417.cljs$lang$maxFixedArity = 3;
G__75417.cljs$lang$applyTo = (function (arglist__75418){
var x = cljs.core.first(arglist__75418);
arglist__75418 = cljs.core.next(arglist__75418);
var y = cljs.core.first(arglist__75418);
arglist__75418 = cljs.core.next(arglist__75418);
var z = cljs.core.first(arglist__75418);
var args = cljs.core.rest(arglist__75418);
return G__75417__delegate(x,y,z,args);
});
G__75417.cljs$core$IFn$_invoke$arity$variadic = G__75417__delegate;
return G__75417;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__75416 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75416__delegate.call(this,p1,p2,p3,ps);};
G__75416.cljs$lang$maxFixedArity = 3;
G__75416.cljs$lang$applyTo = (function (arglist__75419){
var p1 = cljs.core.first(arglist__75419);
arglist__75419 = cljs.core.next(arglist__75419);
var p2 = cljs.core.first(arglist__75419);
arglist__75419 = cljs.core.next(arglist__75419);
var p3 = cljs.core.first(arglist__75419);
var ps = cljs.core.rest(arglist__75419);
return G__75416__delegate(p1,p2,p3,ps);
});
G__75416.cljs$core$IFn$_invoke$arity$variadic = G__75416__delegate;
return G__75416;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3630__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3630__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p.call(null,y);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__75426__delegate = function (x,y,z,args){
var or__3630__auto__ = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some.call(null,p,args);
}
};
var G__75426 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75426__delegate.call(this,x,y,z,args);};
G__75426.cljs$lang$maxFixedArity = 3;
G__75426.cljs$lang$applyTo = (function (arglist__75427){
var x = cljs.core.first(arglist__75427);
arglist__75427 = cljs.core.next(arglist__75427);
var y = cljs.core.first(arglist__75427);
arglist__75427 = cljs.core.next(arglist__75427);
var z = cljs.core.first(arglist__75427);
var args = cljs.core.rest(arglist__75427);
return G__75426__delegate(x,y,z,args);
});
G__75426.cljs$core$IFn$_invoke$arity$variadic = G__75426__delegate;
return G__75426;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__75428__delegate = function (x,y,z,args){
var or__3630__auto__ = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some.call(null,((function (or__3630__auto__){
return (function (p1__75420_SHARP_){
var or__3630__auto____$1 = p1.call(null,p1__75420_SHARP_);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return p2.call(null,p1__75420_SHARP_);
}
});})(or__3630__auto__))
,args);
}
};
var G__75428 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75428__delegate.call(this,x,y,z,args);};
G__75428.cljs$lang$maxFixedArity = 3;
G__75428.cljs$lang$applyTo = (function (arglist__75429){
var x = cljs.core.first(arglist__75429);
arglist__75429 = cljs.core.next(arglist__75429);
var y = cljs.core.first(arglist__75429);
arglist__75429 = cljs.core.next(arglist__75429);
var z = cljs.core.first(arglist__75429);
var args = cljs.core.rest(arglist__75429);
return G__75428__delegate(x,y,z,args);
});
G__75428.cljs$core$IFn$_invoke$arity$variadic = G__75428__delegate;
return G__75428;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3630__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
var or__3630__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3630__auto____$3)){
return or__3630__auto____$3;
} else {
var or__3630__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3630__auto____$4)){
return or__3630__auto____$4;
} else {
var or__3630__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(or__3630__auto____$5)){
return or__3630__auto____$5;
} else {
var or__3630__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(or__3630__auto____$6)){
return or__3630__auto____$6;
} else {
var or__3630__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(or__3630__auto____$7)){
return or__3630__auto____$7;
} else {
return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__75430__delegate = function (x,y,z,args){
var or__3630__auto__ = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some.call(null,((function (or__3630__auto__){
return (function (p1__75421_SHARP_){
var or__3630__auto____$1 = p1.call(null,p1__75421_SHARP_);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = p2.call(null,p1__75421_SHARP_);
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
return p3.call(null,p1__75421_SHARP_);
}
}
});})(or__3630__auto__))
,args);
}
};
var G__75430 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75430__delegate.call(this,x,y,z,args);};
G__75430.cljs$lang$maxFixedArity = 3;
G__75430.cljs$lang$applyTo = (function (arglist__75431){
var x = cljs.core.first(arglist__75431);
arglist__75431 = cljs.core.next(arglist__75431);
var y = cljs.core.first(arglist__75431);
arglist__75431 = cljs.core.next(arglist__75431);
var z = cljs.core.first(arglist__75431);
var args = cljs.core.rest(arglist__75431);
return G__75430__delegate(x,y,z,args);
});
G__75430.cljs$core$IFn$_invoke$arity$variadic = G__75430__delegate;
return G__75430;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__75432__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__75422_SHARP_){
return p1__75422_SHARP_.call(null,x);
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__75423_SHARP_){
var or__3630__auto__ = p1__75423_SHARP_.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return p1__75423_SHARP_.call(null,y);
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__75424_SHARP_){
var or__3630__auto__ = p1__75424_SHARP_.call(null,x);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = p1__75424_SHARP_.call(null,y);
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
return p1__75424_SHARP_.call(null,z);
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__75433__delegate = function (x,y,z,args){
var or__3630__auto__ = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.some.call(null,((function (or__3630__auto__,ps__$1){
return (function (p1__75425_SHARP_){
return cljs.core.some.call(null,p1__75425_SHARP_,args);
});})(or__3630__auto__,ps__$1))
,ps__$1);
}
};
var G__75433 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75433__delegate.call(this,x,y,z,args);};
G__75433.cljs$lang$maxFixedArity = 3;
G__75433.cljs$lang$applyTo = (function (arglist__75434){
var x = cljs.core.first(arglist__75434);
arglist__75434 = cljs.core.next(arglist__75434);
var y = cljs.core.first(arglist__75434);
arglist__75434 = cljs.core.next(arglist__75434);
var z = cljs.core.first(arglist__75434);
var args = cljs.core.rest(arglist__75434);
return G__75433__delegate(x,y,z,args);
});
G__75433.cljs$core$IFn$_invoke$arity$variadic = G__75433__delegate;
return G__75433;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__75432 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75432__delegate.call(this,p1,p2,p3,ps);};
G__75432.cljs$lang$maxFixedArity = 3;
G__75432.cljs$lang$applyTo = (function (arglist__75435){
var p1 = cljs.core.first(arglist__75435);
arglist__75435 = cljs.core.next(arglist__75435);
var p2 = cljs.core.first(arglist__75435);
arglist__75435 = cljs.core.next(arglist__75435);
var p3 = cljs.core.first(arglist__75435);
var ps = cljs.core.rest(arglist__75435);
return G__75432__delegate(p1,p2,p3,ps);
});
G__75432.cljs$core$IFn$_invoke$arity$variadic = G__75432__delegate;
return G__75432;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){
return (function (rf){
return (function() {
var G__75437 = null;
var G__75437__0 = (function (){
return rf.call(null);
});
var G__75437__1 = (function (result){
return rf.call(null,result);
});
var G__75437__2 = (function (result,input){
return rf.call(null,result,f.call(null,input));
});
var G__75437__3 = (function() { 
var G__75438__delegate = function (result,input,inputs){
return rf.call(null,result,cljs.core.apply.call(null,f,input,inputs));
};
var G__75438 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75438__delegate.call(this,result,input,inputs);};
G__75438.cljs$lang$maxFixedArity = 2;
G__75438.cljs$lang$applyTo = (function (arglist__75439){
var result = cljs.core.first(arglist__75439);
arglist__75439 = cljs.core.next(arglist__75439);
var input = cljs.core.first(arglist__75439);
var inputs = cljs.core.rest(arglist__75439);
return G__75438__delegate(result,input,inputs);
});
G__75438.cljs$core$IFn$_invoke$arity$variadic = G__75438__delegate;
return G__75438;
})()
;
G__75437 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__75437__0.call(this);
case 1:
return G__75437__1.call(this,result);
case 2:
return G__75437__2.call(this,result,input);
default:
return G__75437__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75437.cljs$lang$maxFixedArity = 2;
G__75437.cljs$lang$applyTo = G__75437__3.cljs$lang$applyTo;
G__75437.cljs$core$IFn$_invoke$arity$0 = G__75437__0;
G__75437.cljs$core$IFn$_invoke$arity$1 = G__75437__1;
G__75437.cljs$core$IFn$_invoke$arity$2 = G__75437__2;
G__75437.cljs$core$IFn$_invoke$arity$variadic = G__75437__3.cljs$core$IFn$_invoke$arity$variadic;
return G__75437;
})()
});
});
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__4517__auto___75440 = size;
var i_75441 = (0);
while(true){
if((i_75441 < n__4517__auto___75440)){
cljs.core.chunk_append.call(null,b,f.call(null,cljs.core._nth.call(null,c,i_75441)));

var G__75442 = (i_75441 + (1));
i_75441 = G__75442;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));
} else {
return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
var s3 = cljs.core.seq.call(null,c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));
} else {
return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__75443__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss)){
return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return map.call(null,((function (step){
return (function (p1__75436_SHARP_){
return cljs.core.apply.call(null,f,p1__75436_SHARP_);
});})(step))
,step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__75443 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75443__delegate.call(this,f,c1,c2,c3,colls);};
G__75443.cljs$lang$maxFixedArity = 4;
G__75443.cljs$lang$applyTo = (function (arglist__75444){
var f = cljs.core.first(arglist__75444);
arglist__75444 = cljs.core.next(arglist__75444);
var c1 = cljs.core.first(arglist__75444);
arglist__75444 = cljs.core.next(arglist__75444);
var c2 = cljs.core.first(arglist__75444);
arglist__75444 = cljs.core.next(arglist__75444);
var c3 = cljs.core.first(arglist__75444);
var colls = cljs.core.rest(arglist__75444);
return G__75443__delegate(f,c1,c2,c3,colls);
});
G__75443.cljs$core$IFn$_invoke$arity$variadic = G__75443__delegate;
return G__75443;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_.call(null,n);
return ((function (na){
return (function() {
var G__75445 = null;
var G__75445__0 = (function (){
return rf.call(null);
});
var G__75445__1 = (function (result){
return rf.call(null,result);
});
var G__75445__2 = (function (result,input){
var n__$1 = cljs.core.deref.call(null,na);
var nn = cljs.core._vreset_BANG_.call(null,na,(cljs.core._deref.call(null,na) - (1)));
var result__$1 = (((n__$1 > (0)))?rf.call(null,result,input):result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__75445 = function(result,input){
switch(arguments.length){
case 0:
return G__75445__0.call(this);
case 1:
return G__75445__1.call(this,result);
case 2:
return G__75445__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75445.cljs$core$IFn$_invoke$arity$0 = G__75445__0;
G__75445.cljs$core$IFn$_invoke$arity$1 = G__75445__1;
G__75445.cljs$core$IFn$_invoke$arity$2 = G__75445__2;
return G__75445;
})()
;})(na))
});
});
var take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,(n - (1)),cljs.core.rest.call(null,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){
return (function (rf){
var na = cljs.core.volatile_BANG_.call(null,n);
return ((function (na){
return (function() {
var G__75446 = null;
var G__75446__0 = (function (){
return rf.call(null);
});
var G__75446__1 = (function (result){
return rf.call(null,result);
});
var G__75446__2 = (function (result,input){
var n__$1 = cljs.core.deref.call(null,na);
cljs.core._vreset_BANG_.call(null,na,(cljs.core._deref.call(null,na) - (1)));

if((n__$1 > (0))){
return result;
} else {
return rf.call(null,result,input);
}
});
G__75446 = function(result,input){
switch(arguments.length){
case 0:
return G__75446__0.call(this);
case 1:
return G__75446__1.call(this,result);
case 2:
return G__75446__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75446.cljs$core$IFn$_invoke$arity$0 = G__75446__0;
G__75446.cljs$core$IFn$_invoke$arity$1 = G__75446__1;
G__75446.cljs$core$IFn$_invoke$arity$2 = G__75446__2;
return G__75446;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(((n__$1 > (0))) && (s)){
var G__75447 = (n__$1 - (1));
var G__75448 = cljs.core.rest.call(null,s);
n__$1 = G__75447;
coll__$1 = G__75448;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step.call(null,n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,(1),s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq.call(null,coll);
var lead = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead){
var G__75449 = cljs.core.next.call(null,s);
var G__75450 = cljs.core.next.call(null,lead);
s = G__75449;
lead = G__75450;
continue;
} else {
return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.volatile_BANG_.call(null,true);
return ((function (da){
return (function() {
var G__75451 = null;
var G__75451__0 = (function (){
return rf.call(null);
});
var G__75451__1 = (function (result){
return rf.call(null,result);
});
var G__75451__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref.call(null,da);
if(cljs.core.truth_((function (){var and__3618__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__3618__auto__)){
return pred.call(null,input);
} else {
return and__3618__auto__;
}
})())){
return result;
} else {
cljs.core.vreset_BANG_.call(null,da,null);

return rf.call(null,result,input);
}
});
G__75451 = function(result,input){
switch(arguments.length){
case 0:
return G__75451__0.call(this);
case 1:
return G__75451__1.call(this,result);
case 2:
return G__75451__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75451.cljs$core$IFn$_invoke$arity$0 = G__75451__0;
G__75451.cljs$core$IFn$_invoke$arity$1 = G__75451__1;
G__75451.cljs$core$IFn$_invoke$arity$2 = G__75451__2;
return G__75451;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(cljs.core.truth_((function (){var and__3618__auto__ = s;
if(and__3618__auto__){
return pred__$1.call(null,cljs.core.first.call(null,s));
} else {
return and__3618__auto__;
}
})())){
var G__75452 = pred__$1;
var G__75453 = cljs.core.rest.call(null,s);
pred__$1 = G__75452;
coll__$1 = G__75453;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step.call(null,pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.concat.call(null,s,cycle.call(null,s));
} else {
return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null,null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null,null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,(function (){
return iterate.call(null,f,f.call(null,x));
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__75454__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__75454 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__75454__delegate.call(this,c1,c2,colls);};
G__75454.cljs$lang$maxFixedArity = 2;
G__75454.cljs$lang$applyTo = (function (arglist__75455){
var c1 = cljs.core.first(arglist__75455);
arglist__75455 = cljs.core.next(arglist__75455);
var c2 = cljs.core.first(arglist__75455);
var colls = cljs.core.rest(arglist__75455);
return G__75454__delegate(c1,c2,colls);
});
G__75454.cljs$core$IFn$_invoke$arity$variadic = G__75454__delegate;
return G__75454;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,(1),cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq.call(null,coll);
if(temp__4124__auto__){
var coll__$1 = temp__4124__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1));
} else {
if(cljs.core.seq.call(null,colls__$1)){
return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){
return cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__75456__delegate = function (f,colls){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.map,f,colls));
};
var G__75456 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__75456__delegate.call(this,f,colls);};
G__75456.cljs$lang$maxFixedArity = 1;
G__75456.cljs$lang$applyTo = (function (arglist__75457){
var f = cljs.core.first(arglist__75457);
var colls = cljs.core.rest(arglist__75457);
return G__75456__delegate(f,colls);
});
G__75456.cljs$core$IFn$_invoke$arity$variadic = G__75456__delegate;
return G__75456;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__75458 = null;
var G__75458__0 = (function (){
return rf.call(null);
});
var G__75458__1 = (function (result){
return rf.call(null,result);
});
var G__75458__2 = (function (result,input){
if(cljs.core.truth_(pred.call(null,input))){
return rf.call(null,result,input);
} else {
return result;
}
});
G__75458 = function(result,input){
switch(arguments.length){
case 0:
return G__75458__0.call(this);
case 1:
return G__75458__1.call(this,result);
case 2:
return G__75458__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75458.cljs$core$IFn$_invoke$arity$0 = G__75458__0;
G__75458.cljs$core$IFn$_invoke$arity$1 = G__75458__1;
G__75458.cljs$core$IFn$_invoke$arity$2 = G__75458__2;
return G__75458;
})()
});
});
var filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s)){
var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__4517__auto___75459 = size;
var i_75460 = (0);
while(true){
if((i_75460 < n__4517__auto___75459)){
if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c,i_75460)))){
cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_75460));
} else {
}

var G__75461 = (i_75460 + (1));
i_75460 = G__75461;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)));
} else {
var f = cljs.core.first.call(null,s);
var r = cljs.core.rest.call(null,s);
if(cljs.core.truth_(pred.call(null,f))){
return cljs.core.cons.call(null,f,filter.call(null,pred,r));
} else {
return filter.call(null,pred,r);
}
}
} else {
return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred));
});
var remove__2 = (function (pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null,null));
});
return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__75462_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__75462_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__75465 = to;
if(G__75465){
var bit__4304__auto__ = (G__75465.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4304__auto__) || (G__75465.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from)),cljs.core.meta.call(null,to));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){
if((function (){var G__75466 = to;
if(G__75466){
var bit__4304__auto__ = (G__75466.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__4304__auto__) || (G__75466.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),from)),cljs.core.meta.call(null,to));
} else {
return cljs.core.transduce.call(null,xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__75467__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__75467 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__75467__delegate.call(this,f,c1,c2,c3,colls);};
G__75467.cljs$lang$maxFixedArity = 4;
G__75467.cljs$lang$applyTo = (function (arglist__75468){
var f = cljs.core.first(arglist__75468);
arglist__75468 = cljs.core.next(arglist__75468);
var c1 = cljs.core.first(arglist__75468);
arglist__75468 = cljs.core.next(arglist__75468);
var c2 = cljs.core.first(arglist__75468);
arglist__75468 = cljs.core.next(arglist__75468);
var c3 = cljs.core.first(arglist__75468);
var colls = cljs.core.rest(arglist__75468);
return G__75467__delegate(f,c1,c2,c3,colls);
});
G__75467.cljs$core$IFn$_invoke$arity$variadic = G__75467__delegate;
return G__75467;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o))){
return cljs.core.conj_BANG_.call(null,v,o);
} else {
return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p))){
return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p))){
return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)));
}
} else {
return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return get_in.call(null,m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
if(!((function (){var G__75470 = m__$1;
if(G__75470){
var bit__4311__auto__ = (G__75470.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__4311__auto__) || (G__75470.cljs$core$ILookup$)){
return true;
} else {
if((!G__75470.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__75470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__75470);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__75471 = sentinel;
var G__75472 = m__$2;
var G__75473 = cljs.core.next.call(null,ks__$1);
sentinel = G__75471;
m__$1 = G__75472;
ks__$1 = G__75473;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__75474,v){
var vec__75476 = p__75474;
var k = cljs.core.nth.call(null,vec__75476,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75476,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core.get.call(null,m,k),ks,v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__75477,f){
var vec__75487 = p__75477;
var k = cljs.core.nth.call(null,vec__75487,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75487,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
});
var update_in__4 = (function (m,p__75478,f,a){
var vec__75488 = p__75478;
var k = cljs.core.nth.call(null,vec__75488,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75488,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a));
}
});
var update_in__5 = (function (m,p__75479,f,a,b){
var vec__75489 = p__75479;
var k = cljs.core.nth.call(null,vec__75489,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75489,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b));
}
});
var update_in__6 = (function (m,p__75480,f,a,b,c){
var vec__75490 = p__75480;
var k = cljs.core.nth.call(null,vec__75490,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75490,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b,c));
}
});
var update_in__7 = (function() { 
var G__75492__delegate = function (m,p__75481,f,a,b,c,args){
var vec__75491 = p__75481;
var k = cljs.core.nth.call(null,vec__75491,(0),null);
var ks = cljs.core.nthnext.call(null,vec__75491,(1));
if(ks){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k),ks,f,a,b,c,args));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),a,b,c,args));
}
};
var G__75492 = function (m,p__75481,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__75492__delegate.call(this,m,p__75481,f,a,b,c,args);};
G__75492.cljs$lang$maxFixedArity = 6;
G__75492.cljs$lang$applyTo = (function (arglist__75493){
var m = cljs.core.first(arglist__75493);
arglist__75493 = cljs.core.next(arglist__75493);
var p__75481 = cljs.core.first(arglist__75493);
arglist__75493 = cljs.core.next(arglist__75493);
var f = cljs.core.first(arglist__75493);
arglist__75493 = cljs.core.next(arglist__75493);
var a = cljs.core.first(arglist__75493);
arglist__75493 = cljs.core.next(arglist__75493);
var b = cljs.core.first(arglist__75493);
arglist__75493 = cljs.core.next(arglist__75493);
var c = cljs.core.first(arglist__75493);
var args = cljs.core.rest(arglist__75493);
return G__75492__delegate(m,p__75481,f,a,b,c,args);
});
G__75492.cljs$core$IFn$_invoke$arity$variadic = G__75492__delegate;
return G__75492;
})()
;
update_in = function(m,p__75481,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__75481,f);
case 4:
return update_in__4.call(this,m,p__75481,f,a);
case 5:
return update_in__5.call(this,m,p__75481,f,a,b);
case 6:
return update_in__6.call(this,m,p__75481,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__75481,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;
/**
* 'Updates' a value in an associative structure, where k is a
* key and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* structure.  If the key does not exist, nil is passed as the old value.
* @param {...*} var_args
*/
cljs.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x));
});
var update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x,y));
});
var update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x,y,z));
});
var update__7 = (function() { 
var G__75494__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x,y,z,more));
};
var G__75494 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);
} 
return G__75494__delegate.call(this,m,k,f,x,y,z,more);};
G__75494.cljs$lang$maxFixedArity = 6;
G__75494.cljs$lang$applyTo = (function (arglist__75495){
var m = cljs.core.first(arglist__75495);
arglist__75495 = cljs.core.next(arglist__75495);
var k = cljs.core.first(arglist__75495);
arglist__75495 = cljs.core.next(arglist__75495);
var f = cljs.core.first(arglist__75495);
arglist__75495 = cljs.core.next(arglist__75495);
var x = cljs.core.first(arglist__75495);
arglist__75495 = cljs.core.next(arglist__75495);
var y = cljs.core.first(arglist__75495);
arglist__75495 = cljs.core.next(arglist__75495);
var z = cljs.core.first(arglist__75495);
var more = cljs.core.rest(arglist__75495);
return G__75494__delegate(m,k,f,x,y,z,more);
});
G__75494.cljs$core$IFn$_invoke$arity$variadic = G__75494__delegate;
return G__75494;
})()
;
update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x);
case 5:
return update__5.call(this,m,k,f,x,y);
case 6:
return update__6.call(this,m,k,f,x,y,z);
default:
return update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 6;
update.cljs$lang$applyTo = update__7.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$6 = update__6;
update.cljs$core$IFn$_invoke$arity$variadic = update__7.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node.call(null,edit);
var _ = cljs.core.pv_aset.call(null,r,(0),embed);
var G__75496 = (ll - (5));
var G__75497 = r;
ll = G__75496;
ret = G__75497;
continue;
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node.call(null,parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset.call(null,ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget.call(null,parent,subidx);
if(!((child == null))){
var node_to_insert = push_tail.call(null,pv,(level - (5)),child,tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path.call(null,null,(level - (5)),tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__75498 = cljs.core.pv_aget.call(null,node,(0));
var G__75499 = (level - (5));
node = G__75498;
level = G__75499;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off.call(null,pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__75500 = cljs.core.pv_aget.call(null,node,((i >>> level) & (31)));
var G__75501 = (level - (5));
node = G__75500;
level = G__75501;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for.call(null,pv,i);
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node.call(null,node);
if((level === (0))){
cljs.core.pv_aset.call(null,ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - (5)),cljs.core.pv_aget.call(null,node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = pop_tail.call(null,pv,(level - (5)),cljs.core.pv_aget.call(null,node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for.call(null,self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count.call(null,v)))?cljs.core.unchecked_array_for.call(null,v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for.call(null,v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = f.call(null,init__$2,(j + i),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$3)){
return init__$3;
} else {
var G__75503 = (j + (1));
var G__75504 = init__$3;
j = G__75503;
init__$2 = G__75504;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75505 = (i + len);
var G__75506 = init__$2;
i = G__75505;
init__$1 = G__75506;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for.call(null,coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for.call(null,coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off.call(null,coll__$1) <= n)){
var new_tail = cljs.core.aclone.call(null,self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj.call(null,coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator.call(null,this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.call(null,coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.call(null,coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.call(null,coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off.call(null,coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for.call(null,coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail.call(null,coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget.call(null,new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count.call(null,other))){
var me_iter = cljs.core._iterator.call(null,coll__$1);
var you_iter = cljs.core._iterator.call(null,other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.call(null,x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential.call(null,coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail)));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.call(null,v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for.call(null,v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = f.call(null,init__$2,(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$3)){
return init__$3;
} else {
var G__75507 = (j + (1));
var G__75508 = init__$3;
j = G__75507;
init__$2 = G__75508;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75509 = (i + len);
var G__75510 = init__$2;
i = G__75509;
init__$1 = G__75510;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n.call(null,coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
return cljs.core.chunked_seq.call(null,coll__$1,cljs.core.first_array_for_longvec.call(null,coll__$1),(0),(0));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off.call(null,coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__4517__auto___75511 = len;
var i_75512 = (0);
while(true){
if((i_75512 < n__4517__auto___75511)){
(new_tail[i_75512] = (self__.tail[i_75512]));

var G__75513 = (i_75512 + (1));
i_75512 = G__75513;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r,(0),self__.root);

cljs.core.pv_aset.call(null,n_r,(1),cljs.core.new_path.call(null,null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail.call(null,coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__75514 = null;
var G__75514__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k);
});
var G__75514__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__75514 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75514__2.call(this,self__,k);
case 3:
return G__75514__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75514.cljs$core$IFn$_invoke$arity$2 = G__75514__2;
G__75514.cljs$core$IFn$_invoke$arity$3 = G__75514__3;
return G__75514;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args75502){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75502)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone.call(null,xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = cljs.core._as_transient.call(null,v);
while(true){
if((i < l)){
var G__75515 = (i + (1));
var G__75516 = cljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__75515;
out = G__75516;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec.call(null,args);
}
};
var vector = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__75517){
var args = cljs.core.seq(arglist__75517);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next.call(null,coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest.call(null,coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count.call(null,self__.vec))){
return cljs.core.chunked_seq.call(null,self__.vec,cljs.core.unchecked_array_for.call(null,self__.vec,end),end,(0));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count.call(null,self__.vec))){
return cljs.core.chunked_seq.call(null,self__.vec,cljs.core.unchecked_array_for.call(null,self__.vec,end),end,(0));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for.call(null,vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds.call(null,n,(self__.end - self__.start));
} else {
return cljs.core._nth.call(null,self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
return cljs.core.build_subvec.call(null,self__.meta,cljs.core.assoc.call(null,self__.v,v_pos,val),self__.start,(function (){var x__3947__auto__ = self__.end;
var y__3948__auto__ = (v_pos + (1));
return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),null);
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.call(null,self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
return cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,(self__.end - (1)),null);
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.call(null,coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n.call(null,coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return subvec_seq.call(null,(i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq.call(null,self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash);
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + (1)),null);
});

cljs.core.Subvec.prototype.call = (function() {
var G__75519 = null;
var G__75519__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k);
});
var G__75519__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__75519 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75519__2.call(this,self__,k);
case 3:
return G__75519__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75519.cljs$core$IFn$_invoke$arity$2 = G__75519__2;
G__75519.cljs$core$IFn$_invoke$arity$3 = G__75519__3;
return G__75519;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args75518){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75518)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._nth.call(null,coll,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__75520 = meta;
var G__75521 = v.v;
var G__75522 = (v.start + start);
var G__75523 = (v.start + end);
var G__75524 = __hash;
meta = G__75520;
v = G__75521;
start = G__75522;
end = G__75523;
__hash = G__75524;
continue;
} else {
var c = cljs.core.count.call(null,v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return cljs.core.build_subvec.call(null,null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj75528 = {};
return obj75528;
})(),cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy.call(null,tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset.call(null,ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget.call(null,ret,subidx);
if(!((child == null))){
return tv_push_tail.call(null,tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path.call(null,tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = tv_pop_tail.call(null,tv,(level - (5)),cljs.core.pv_aget.call(null,node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset.call(null,node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset.call(null,node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off.call(null,tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__75529 = cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,((i >>> level) & (31))));
var G__75530 = (level - (5));
node = G__75529;
level = G__75530;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.prototype.call = (function() {
var G__75532 = null;
var G__75532__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75532__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75532 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75532__2.call(this,self__,k);
case 3:
return G__75532__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75532.cljs$core$IFn$_invoke$arity$2 = G__75532__2;
G__75532.cljs$core$IFn$_invoke$arity$3 = G__75532__3;
return G__75532;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args75531){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75531)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.call(null,coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for.call(null,coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.call(null,coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off.call(null,tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset.call(null,node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - (5)),cljs.core.pv_aget.call(null,node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_.call(null,tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for.call(null,tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail.call(null,tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_.call(null,tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off.call(null,tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail.call(null,tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off.call(null,tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first.call(null,self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4124__auto__ = cljs.core.next.call(null,self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty.call(null,coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first.call(null,self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4124__auto__ = cljs.core.next.call(null,self__.front);
if(temp__4124__auto__){
var f1 = temp__4124__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentQueue.EMPTY,self__.meta);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first.call(null,self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq.call(null,self__.rear);
if(cljs.core.truth_((function (){var or__3630__auto__ = self__.front;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.call(null,(function (){var or__3630__auto__ = self__.rear;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.call(null,self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__75533 = (i + incr);
i = G__75533;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash.call(null,a);
var b__$1 = cljs.core.hash.call(null,b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta.call(null,m);
var i = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__75534 = (i + (1));
var G__75535 = cljs.core.assoc_BANG_.call(null,out,k__$1,(so[k__$1]));
i = G__75534;
out = G__75535;
continue;
} else {
return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = (function (){var obj75539 = {};
return obj75539;
})();
var l = ks.length;
var i_75540 = (0);
while(true){
if((i_75540 < l)){
var k_75541 = (ks[i_75540]);
(new_obj[k_75541] = (obj[k_75541]));

var G__75542 = (i_75540 + (1));
i_75540 = G__75542;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null)))){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq.call(null,keys__$1)){
var k = cljs.core.first.call(null,keys__$1);
var init__$2 = f.call(null,init__$1,k,(self__.strobj[k]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75545 = cljs.core.rest.call(null,keys__$1);
var G__75546 = init__$2;
keys__$1 = G__75545;
init__$1 = G__75546;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null)))){
var new_keys = cljs.core.aclone.call(null,self__.keys);
var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array.call(null,(1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(goog.isString(k)){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
} else {
if(!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
var new_keys = cljs.core.aclone.call(null,self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null)))){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.call(null,((function (coll__$1){
return (function (p1__75543_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__75543_SHARP_,(self__.strobj[p1__75543_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__75547 = null;
var G__75547__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75547__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75547 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75547__2.call(this,self__,k);
case 3:
return G__75547__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75547.cljs$core$IFn$_invoke$arity$2 = G__75547__2;
G__75547.cljs$core$IFn$_invoke$arity$3 = G__75547__3;
return G__75547;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args75544){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75544)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj75549 = {};
return obj75549;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__75550 = cljs.core.first.call(null,self__.s);
var k = cljs.core.nth.call(null,vec__75550,(0),null);
var v = cljs.core.nth.call(null,vec__75550,(1),null);
self__.s = cljs.core.next.call(null,self__.s);

return {"done": false, "value": [k,v]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq.call(null,coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first.call(null,self__.s);
self__.s = cljs.core.next.call(null,self__.s);

return {"done": false, "value": [x,x]};
} else {
return {"done": true, "value": null};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq.call(null,coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__75551 = (i + (2));
i = G__75551;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__75552 = (i + (2));
i = G__75552;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__75553 = (i + (2));
i = G__75553;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__75554 = (i + (2));
i = G__75554;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.call(null,k,(arr[i]))){
return i;
} else {
var G__75555 = (i + (2));
i = G__75555;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_.call(null,arr,m,k);
} else {
if((goog.isString(k)) || (typeof k === 'number')){
return cljs.core.array_map_index_of_identical_QMARK_.call(null,arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_.call(null,arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_.call(null,arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_.call(null,arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_75556 = (0);
while(true){
if((i_75556 < l)){
(narr[i_75556] = (arr[i_75556]));

var G__75557 = (i_75556 + (1));
i_75556 = G__75557;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,coll));
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.vals.call(null,coll));
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__75559 = cljs.core.seq.call(null,coll);
var chunk__75560 = null;
var count__75561 = (0);
var i__75562 = (0);
while(true){
if((i__75562 < count__75561)){
var vec__75563 = cljs.core._nth.call(null,chunk__75560,i__75562);
var k = cljs.core.nth.call(null,vec__75563,(0),null);
var v = cljs.core.nth.call(null,vec__75563,(1),null);
f.call(null,v,k);

var G__75569 = seq__75559;
var G__75570 = chunk__75560;
var G__75571 = count__75561;
var G__75572 = (i__75562 + (1));
seq__75559 = G__75569;
chunk__75560 = G__75570;
count__75561 = G__75571;
i__75562 = G__75572;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75559);
if(temp__4126__auto__){
var seq__75559__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75559__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75559__$1);
var G__75573 = cljs.core.chunk_rest.call(null,seq__75559__$1);
var G__75574 = c__4417__auto__;
var G__75575 = cljs.core.count.call(null,c__4417__auto__);
var G__75576 = (0);
seq__75559 = G__75573;
chunk__75560 = G__75574;
count__75561 = G__75575;
i__75562 = G__75576;
continue;
} else {
var vec__75564 = cljs.core.first.call(null,seq__75559__$1);
var k = cljs.core.nth.call(null,vec__75564,(0),null);
var v = cljs.core.nth.call(null,vec__75564,(1),null);
f.call(null,v,k);

var G__75577 = cljs.core.next.call(null,seq__75559__$1);
var G__75578 = null;
var G__75579 = (0);
var G__75580 = (0);
seq__75559 = G__75577;
chunk__75560 = G__75578;
count__75561 = G__75579;
i__75562 = G__75580;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + (1))]));
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75581 = (i + (2));
var G__75582 = init__$2;
i = G__75581;
init__$1 = G__75582;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__75565 = other;
if(G__75565){
var bit__4304__auto__ = (G__75565.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__4304__auto__) || (G__75565.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === cljs.core._count.call(null,other__$1))){
var i = (0);
while(true){
if((i < alen)){
var v = cljs.core._lookup.call(null,other__$1,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.call(null,(self__.arr[(i + (1))]),v)){
var G__75583 = (i + (2));
i = G__75583;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map.call(null,coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj75567 = {};
return obj75567;
})(),self__.arr.length,cljs.core.aclone.call(null,self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty.call(null,coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.call(null,k,(self__.arr[s]))){
var G__75584 = (s + (2));
var G__75585 = d;
s = G__75584;
d = G__75585;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__75586 = (s + (2));
var G__75587 = (d + (2));
s = G__75586;
d = G__75587;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv.call(null,coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta.call(null,cljs.core._assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__75568 = cljs.core.aclone.call(null,self__.arr);
(G__75568[(idx + (1))] = v);

return G__75568;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of.call(null,coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq.call(null,self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__75588 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__75589 = cljs.core.next.call(null,es);
ret = G__75588;
es = G__75589;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__75590 = null;
var G__75590__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75590__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75590 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75590__2.call(this,self__,k);
case 3:
return G__75590__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75590.cljs$core$IFn$_invoke$arity$2 = G__75590__2;
G__75590.cljs$core$IFn$_invoke$arity$3 = G__75590__3;
return G__75590;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args75558){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75558)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone.call(null,arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__75591 = (i + (2));
var G__75592 = cljs.core._assoc_BANG_.call(null,ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__75591;
ret = G__75592;
continue;
} else {
return cljs.core._persistent_BANG_.call(null,ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__75593_75595 = self__.arr;
G__75593_75595.pop();

G__75593_75595.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__75594 = o;
if(G__75594){
var bit__4311__auto__ = (G__75594.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4311__auto__) || (G__75594.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__75594.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__75594);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__75594);
}
})()){
return cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else {
var es = cljs.core.seq.call(null,o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__75596 = cljs.core.next.call(null,es);
var G__75597 = cljs.core._assoc_BANG_.call(null,tcoll__$2,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__75596;
tcoll__$2 = G__75597;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.call(null,tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot.call(null,self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__75598 = cljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + (1))]));
var G__75599 = (i + (2));
out = G__75598;
i = G__75599;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function __GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,key,other)){
return true;
} else {
return cljs.core._EQ_.call(null,key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__75602 = cljs.core.aclone.call(null,arr);
(G__75602[i] = a);

return G__75602;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__75603 = cljs.core.aclone.call(null,arr);
(G__75603[i] = a);

(G__75603[j] = b);

return G__75603;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy.call(null,arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
return f.call(null,init__$1,k,(arr[(i + (1))]));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75604 = (i + (2));
var G__75605 = init__$2;
i = G__75604;
init__$1 = G__75605;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count.call(null,self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy.call(null,earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count.call(null,self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward.call(null,earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_75606 = (0);
var j_75607 = (0);
while(true){
if((i_75606 < (32))){
if((((self__.bitmap >>> i_75606) & (1)) === (0))){
var G__75608 = (i_75606 + (1));
var G__75609 = j_75607;
i_75606 = G__75608;
j_75607 = G__75609;
continue;
} else {
(nodes[i_75606] = ((!(((self__.arr[j_75607]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash.call(null,(self__.arr[j_75607])),(self__.arr[j_75607]),(self__.arr[(j_75607 + (1))]),added_leaf_QMARK_):(self__.arr[(j_75607 + (1))])));

var G__75610 = (i_75606 + (1));
var G__75611 = (j_75607 + (2));
i_75606 = G__75610;
j_75607 = G__75611;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy.call(null,self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.call(null,inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),cljs.core.create_node.call(null,edit__$1,(shift + (5)),key_or_nil,val_or_node,hash,key,val));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count.call(null,self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_75612 = (0);
var j_75613 = (0);
while(true){
if((i_75612 < (32))){
if((((self__.bitmap >>> i_75612) & (1)) === (0))){
var G__75614 = (i_75612 + (1));
var G__75615 = j_75613;
i_75612 = G__75614;
j_75613 = G__75615;
continue;
} else {
(nodes[i_75612] = ((!(((self__.arr[j_75613]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash.call(null,(self__.arr[j_75613])),(self__.arr[j_75613]),(self__.arr[(j_75613 + (1))]),added_leaf_QMARK_):(self__.arr[(j_75613 + (1))])));

var G__75616 = (i_75612 + (1));
var G__75617 = (j_75613 + (2));
i_75612 = G__75616;
j_75613 = G__75617;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy.call(null,self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2) * idx),null,(((2) * idx) + (1)),cljs.core.create_node.call(null,(shift + (5)),key_or_nil,val_or_node,hash,key,val))));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test.call(null,key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__75618 = (i + (1));
var G__75619 = (j + (2));
var G__75620 = (bitmap | ((1) << i));
i = G__75618;
j = G__75619;
bitmap = G__75620;
continue;
} else {
var G__75621 = (i + (1));
var G__75622 = j;
var G__75623 = bitmap;
i = G__75621;
j = G__75622;
bitmap = G__75623;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone.call(null,self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_array_node_seq.call(null,self__.arr);
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var G__75624 = (i + (1));
var G__75625 = init__$2;
i = G__75624;
init__$1 = G__75625;
continue;
}
} else {
var G__75626 = (i + (1));
var G__75627 = init__$1;
i = G__75626;
init__$1 = G__75627;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node.call(null,inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test.call(null,key,(arr[i]))){
return i;
} else {
var G__75628 = (i + (2));
i = G__75628;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test.call(null,key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.call(null,inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.call(null,(self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test.call(null,key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first.call(null,self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + (2)),null);
} else {
return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4124__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4124__auto__)){
var node = temp__4124__auto__;
var temp__4124__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var node_seq = temp__4124__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__75629 = (j + (2));
j = G__75629;
continue;
}
} else {
var G__75630 = (j + (2));
j = G__75630;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first.call(null,self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4124__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4124__auto__)){
var nj = temp__4124__auto__;
var temp__4124__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4124__auto____$1)){
var ns = temp__4124__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__75631 = (j + (1));
j = G__75631;
continue;
}
} else {
var G__75632 = (j + (1));
j = G__75632;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,coll));
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.vals.call(null,coll));
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__75634 = cljs.core.seq.call(null,coll);
var chunk__75635 = null;
var count__75636 = (0);
var i__75637 = (0);
while(true){
if((i__75637 < count__75636)){
var vec__75638 = cljs.core._nth.call(null,chunk__75635,i__75637);
var k = cljs.core.nth.call(null,vec__75638,(0),null);
var v = cljs.core.nth.call(null,vec__75638,(1),null);
f.call(null,v,k);

var G__75642 = seq__75634;
var G__75643 = chunk__75635;
var G__75644 = count__75636;
var G__75645 = (i__75637 + (1));
seq__75634 = G__75642;
chunk__75635 = G__75643;
count__75636 = G__75644;
i__75637 = G__75645;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75634);
if(temp__4126__auto__){
var seq__75634__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75634__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75634__$1);
var G__75646 = cljs.core.chunk_rest.call(null,seq__75634__$1);
var G__75647 = c__4417__auto__;
var G__75648 = cljs.core.count.call(null,c__4417__auto__);
var G__75649 = (0);
seq__75634 = G__75646;
chunk__75635 = G__75647;
count__75636 = G__75648;
i__75637 = G__75649;
continue;
} else {
var vec__75639 = cljs.core.first.call(null,seq__75634__$1);
var k = cljs.core.nth.call(null,vec__75639,(0),null);
var v = cljs.core.nth.call(null,vec__75639,(1),null);
f.call(null,v,k);

var G__75650 = cljs.core.next.call(null,seq__75634__$1);
var G__75651 = null;
var G__75652 = (0);
var G__75653 = (0);
seq__75634 = G__75650;
chunk__75635 = G__75651;
count__75636 = G__75652;
i__75637 = G__75653;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__$1)){
return cljs.core.deref.call(null,init__$1);
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj75641 = {};
return obj75641;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash.call(null,k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__75654 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__75655 = cljs.core.next.call(null,es);
ret = G__75654;
es = G__75655;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__75656 = null;
var G__75656__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75656__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75656 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75656__2.call(this,self__,k);
case 3:
return G__75656__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75656.cljs$core$IFn$_invoke$arity$2 = G__75656__2;
G__75656.cljs$core$IFn$_invoke$arity$3 = G__75656__3;
return G__75656;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args75633){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75633)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__75657 = (i + (1));
var G__75658 = cljs.core._assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__75657;
out = G__75658;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__75659 = o;
if(G__75659){
var bit__4311__auto__ = (G__75659.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__4311__auto__) || (G__75659.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__75659.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__75659);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__75659);
}
})()){
return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else {
var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4124__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
var G__75660 = cljs.core.next.call(null,es);
var G__75661 = tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__75660;
tcoll__$1 = G__75661;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__75662 = ((ascending_QMARK_)?t.left:t.right);
var G__75663 = cljs.core.conj.call(null,stack__$1,t);
t = G__75662;
stack__$1 = G__75663;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count.call(null,cljs.core.next.call(null,coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek.call(null,self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first.call(null,self__.stack);
var next_stack = cljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init):init);
if(cljs.core.reduced_QMARK_.call(null,init__$1)){
return cljs.core.deref.call(null,init__$1);
} else {
var init__$2 = f.call(null,init__$1,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__$2)){
return cljs.core.deref.call(null,init__$2);
} else {
var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_.call(null,init__$3)){
return cljs.core.deref.call(null,init__$3);
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.call(null,node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.call(null,node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return cljs.core._assoc_n.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.call(null,node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.call(null,node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__75665 = null;
var G__75665__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return cljs.core._lookup.call(null,node,k);
});
var G__75665__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return cljs.core._lookup.call(null,node,k,not_found);
});
G__75665 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75665__2.call(this,self__,k);
case 3:
return G__75665__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75665.cljs$core$IFn$_invoke$arity$2 = G__75665__2;
G__75665.cljs$core$IFn$_invoke$arity$3 = G__75665__3;
return G__75665;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args75664){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75664)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return cljs.core._lookup.call(null,node,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return cljs.core._lookup.call(null,node,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.call(null,node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.call(null,node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return cljs.core._assoc_n.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.call(null,node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.call(null,node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__75667 = null;
var G__75667__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return cljs.core._lookup.call(null,node,k);
});
var G__75667__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return cljs.core._lookup.call(null,node,k,not_found);
});
G__75667 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75667__2.call(this,self__,k);
case 3:
return G__75667__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75667.cljs$core$IFn$_invoke$arity$2 = G__75667__2;
G__75667.cljs$core$IFn$_invoke$arity$3 = G__75667__3;
return G__75667;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args75666){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75666)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return cljs.core._lookup.call(null,node,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return cljs.core._lookup.call(null,node,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = comp.call(null,k,tree.key);
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = tree_map_append.call(null,left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else {
var app = tree_map_append.call(null,left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = comp.call(null,k,tree.key);
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else {
if((c < (0))){
var del = tree_map_remove.call(null,comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = tree_map_remove.call(null,comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = comp.call(null,k,tk);
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__75669 = cljs.core.seq.call(null,coll);
var chunk__75670 = null;
var count__75671 = (0);
var i__75672 = (0);
while(true){
if((i__75672 < count__75671)){
var vec__75673 = cljs.core._nth.call(null,chunk__75670,i__75672);
var k = cljs.core.nth.call(null,vec__75673,(0),null);
var v = cljs.core.nth.call(null,vec__75673,(1),null);
f.call(null,v,k);

var G__75675 = seq__75669;
var G__75676 = chunk__75670;
var G__75677 = count__75671;
var G__75678 = (i__75672 + (1));
seq__75669 = G__75675;
chunk__75670 = G__75676;
count__75671 = G__75677;
i__75672 = G__75678;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75669);
if(temp__4126__auto__){
var seq__75669__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75669__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75669__$1);
var G__75679 = cljs.core.chunk_rest.call(null,seq__75669__$1);
var G__75680 = c__4417__auto__;
var G__75681 = cljs.core.count.call(null,c__4417__auto__);
var G__75682 = (0);
seq__75669 = G__75679;
chunk__75670 = G__75680;
count__75671 = G__75681;
i__75672 = G__75682;
continue;
} else {
var vec__75674 = cljs.core.first.call(null,seq__75669__$1);
var k = cljs.core.nth.call(null,vec__75674,(0),null);
var v = cljs.core.nth.call(null,vec__75674,(1),null);
f.call(null,v,k);

var G__75683 = cljs.core.next.call(null,seq__75669__$1);
var G__75684 = null;
var G__75685 = (0);
var G__75686 = (0);
seq__75669 = G__75683;
chunk__75670 = G__75684;
count__75671 = G__75685;
i__75672 = G__75686;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,coll));
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.vals.call(null,coll));
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = self__.comp.call(null,k,t.key);
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__75687 = t.left;
t = G__75687;
continue;
} else {
var G__75688 = t.right;
t = G__75688;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,(0)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.call(null,found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.call(null,found,(0));
if(cljs.core._EQ_.call(null,v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__75689 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__75690 = cljs.core.next.call(null,es);
ret = G__75689;
es = G__75690;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__75691 = null;
var G__75691__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75691__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75691 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75691__2.call(this,self__,k);
case 3:
return G__75691__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75691.cljs$core$IFn$_invoke$arity$2 = G__75691__2;
G__75691.cljs$core$IFn$_invoke$arity$3 = G__75691__3;
return G__75691;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args75668){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75668)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = self__.comp.call(null,k,t.key);
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__75692 = cljs.core.conj.call(null,stack,t);
var G__75693 = t.left;
stack = G__75692;
t = G__75693;
continue;
} else {
var G__75694 = stack;
var G__75695 = t.right;
stack = G__75694;
t = G__75695;
continue;
}
} else {
if((c > (0))){
var G__75696 = cljs.core.conj.call(null,stack,t);
var G__75697 = t.right;
stack = G__75696;
t = G__75697;
continue;
} else {
var G__75698 = stack;
var G__75699 = t.left;
stack = G__75698;
t = G__75699;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return cljs.core.key.call(null,entry);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__75700 = cljs.core.nnext.call(null,in$);
var G__75701 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__75700;
out = G__75701;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__75702){
var keyvals = cljs.core.seq(arglist__75702);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.call(null,cljs.core.array,keyvals),true,false);
};
var array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__75703){
var keyvals = cljs.core.seq(arglist__75703);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj75707 = {};
return obj75707;
})();
var kvs = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first.call(null,kvs));

(obj[cljs.core.first.call(null,kvs)] = cljs.core.second.call(null,kvs));

var G__75708 = cljs.core.nnext.call(null,kvs);
kvs = G__75708;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__75709){
var keyvals = cljs.core.seq(arglist__75709);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__75710 = cljs.core.nnext.call(null,in$);
var G__75711 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__75710;
out = G__75711;
continue;
} else {
return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__75712){
var keyvals = cljs.core.seq(arglist__75712);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__75713 = cljs.core.nnext.call(null,in$);
var G__75714 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__75713;
out = G__75714;
continue;
} else {
return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__75715){
var comparator = cljs.core.first(arglist__75715);
var keyvals = cljs.core.rest(arglist__75715);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__75716 = self__.mseq;
if(G__75716){
var bit__4311__auto__ = (G__75716.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__75716.cljs$core$INext$)){
return true;
} else {
if((!G__75716.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75716);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75716);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = cljs.core._first.call(null,self__.mseq);
return cljs.core._key.call(null,me);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__75717 = self__.mseq;
if(G__75717){
var bit__4311__auto__ = (G__75717.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__75717.cljs$core$INext$)){
return true;
} else {
if((!G__75717.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75717);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75717);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
var temp__4126__auto__ = cljs.core.seq.call(null,hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__75718 = self__.mseq;
if(G__75718){
var bit__4311__auto__ = (G__75718.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__75718.cljs$core$INext$)){
return true;
} else {
if((!G__75718.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75718);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75718);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll.call(null,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential.call(null,coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = cljs.core._first.call(null,self__.mseq);
return cljs.core._val.call(null,me);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__75719 = self__.mseq;
if(G__75719){
var bit__4311__auto__ = (G__75719.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__4311__auto__) || (G__75719.cljs$core$INext$)){
return true;
} else {
if((!G__75719.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75719);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__75719);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons.call(null,o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
var temp__4126__auto__ = cljs.core.seq.call(null,hash_map);
if(temp__4126__auto__){
var mseq = temp__4126__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
return cljs.core.reduce.call(null,(function (p1__75720_SHARP_,p2__75721_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3630__auto__ = p1__75720_SHARP_;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__75721_SHARP_);
}),maps);
} else {
return null;
}
};
var merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__75722){
var maps = cljs.core.seq(arglist__75722);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first.call(null,e);
var v = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3630__auto__ = m1;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__75723){
var f = cljs.core.first(arglist__75723);
var maps = cljs.core.rest(arglist__75723);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq.call(null,keyseq);
while(true){
if(keys){
var key = cljs.core.first.call(null,keys);
var entry = cljs.core.get.call(null,map,key,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185));
var G__75724 = ((cljs.core.not_EQ_.call(null,entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185)))?cljs.core.assoc.call(null,ret,key,entry):ret);
var G__75725 = cljs.core.next.call(null,keys);
ret = G__75724;
keys = G__75725;
continue;
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__75728 = cljs.core.seq.call(null,coll);
var chunk__75729 = null;
var count__75730 = (0);
var i__75731 = (0);
while(true){
if((i__75731 < count__75730)){
var vec__75732 = cljs.core._nth.call(null,chunk__75729,i__75731);
var k = cljs.core.nth.call(null,vec__75732,(0),null);
var v = cljs.core.nth.call(null,vec__75732,(1),null);
f.call(null,v,k);

var G__75734 = seq__75728;
var G__75735 = chunk__75729;
var G__75736 = count__75730;
var G__75737 = (i__75731 + (1));
seq__75728 = G__75734;
chunk__75729 = G__75735;
count__75730 = G__75736;
i__75731 = G__75737;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75728);
if(temp__4126__auto__){
var seq__75728__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75728__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75728__$1);
var G__75738 = cljs.core.chunk_rest.call(null,seq__75728__$1);
var G__75739 = c__4417__auto__;
var G__75740 = cljs.core.count.call(null,c__4417__auto__);
var G__75741 = (0);
seq__75728 = G__75738;
chunk__75729 = G__75739;
count__75730 = G__75740;
i__75731 = G__75741;
continue;
} else {
var vec__75733 = cljs.core.first.call(null,seq__75728__$1);
var k = cljs.core.nth.call(null,vec__75733,(0),null);
var v = cljs.core.nth.call(null,vec__75733,(1),null);
f.call(null,v,k);

var G__75742 = cljs.core.next.call(null,seq__75728__$1);
var G__75743 = null;
var G__75744 = (0);
var G__75745 = (0);
seq__75728 = G__75742;
chunk__75729 = G__75743;
count__75730 = G__75744;
i__75731 = G__75745;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count.call(null,self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (coll__$1){
return (function (p1__75726_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll__$1,p1__75726_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient.call(null,self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc.call(null,self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys.call(null,self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__75746 = null;
var G__75746__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75746__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75746 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75746__2.call(this,self__,k);
case 3:
return G__75746__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75746.cljs$core$IFn$_invoke$arity$2 = G__75746__2;
G__75746.cljs$core$IFn$_invoke$arity$3 = G__75746__3;
return G__75746;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args75727){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75727)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone.call(null,items));
var i = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__75747 = (i + (1));
var G__75748 = cljs.core._assoc_BANG_.call(null,out,(items[i]),null);
i = G__75747;
out = G__75748;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_.call(null,out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__75749 = (i + (1));
var G__75750 = cljs.core._conj_BANG_.call(null,out,(items[i]));
i = G__75749;
out = G__75750;
continue;
} else {
return cljs.core._persistent_BANG_.call(null,out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.prototype.call = (function() {
var G__75752 = null;
var G__75752__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__75752__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__75752 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75752__2.call(this,self__,k);
case 3:
return G__75752__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75752.cljs$core$IFn$_invoke$arity$2 = G__75752__2;
G__75752.cljs$core$IFn$_invoke$arity$3 = G__75752__3;
return G__75752;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args75751){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75751)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.call(null,tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count.call(null,self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator.call(null,cljs.core.seq.call(null,coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_.call(null,coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__75755 = cljs.core.seq.call(null,coll);
var chunk__75756 = null;
var count__75757 = (0);
var i__75758 = (0);
while(true){
if((i__75758 < count__75757)){
var vec__75759 = cljs.core._nth.call(null,chunk__75756,i__75758);
var k = cljs.core.nth.call(null,vec__75759,(0),null);
var v = cljs.core.nth.call(null,vec__75759,(1),null);
f.call(null,v,k);

var G__75761 = seq__75755;
var G__75762 = chunk__75756;
var G__75763 = count__75757;
var G__75764 = (i__75758 + (1));
seq__75755 = G__75761;
chunk__75756 = G__75762;
count__75757 = G__75763;
i__75758 = G__75764;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75755);
if(temp__4126__auto__){
var seq__75755__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75755__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75755__$1);
var G__75765 = cljs.core.chunk_rest.call(null,seq__75755__$1);
var G__75766 = c__4417__auto__;
var G__75767 = cljs.core.count.call(null,c__4417__auto__);
var G__75768 = (0);
seq__75755 = G__75765;
chunk__75756 = G__75766;
count__75757 = G__75767;
i__75758 = G__75768;
continue;
} else {
var vec__75760 = cljs.core.first.call(null,seq__75755__$1);
var k = cljs.core.nth.call(null,vec__75760,(0),null);
var v = cljs.core.nth.call(null,vec__75760,(1),null);
f.call(null,v,k);

var G__75769 = cljs.core.next.call(null,seq__75755__$1);
var G__75770 = null;
var G__75771 = (0);
var G__75772 = (0);
seq__75755 = G__75769;
chunk__75756 = G__75770;
count__75757 = G__75771;
i__75758 = G__75772;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count.call(null,self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count.call(null,self__.tree_map) > (0))){
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (coll__$1){
return (function (p1__75753_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll__$1,p1__75753_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core._empty.call(null,self__.tree_map),(0)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys.call(null,self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__75773 = null;
var G__75773__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__75773__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__75773 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__75773__2.call(this,self__,k);
case 3:
return G__75773__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75773.cljs$core$IFn$_invoke$arity$2 = G__75773__2;
G__75773.cljs$core$IFn$_invoke$arity$3 = G__75773__3;
return G__75773;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args75754){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args75754)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator.call(null,self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__4511__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__4511__auto__.length)){
var G__75774 = (i + (1));
var G__75775 = cljs.core._conj_BANG_.call(null,res,(arr[i]));
i = G__75774;
res = G__75775;
continue;
} else {
return res;
}
break;
}
})();
return cljs.core._persistent_BANG_.call(null,ret);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$ = cljs.core.seq.call(null,coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq.call(null,in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__75776 = cljs.core._next.call(null,in$__$1);
var G__75777 = cljs.core._conj_BANG_.call(null,out,cljs.core._first.call(null,in$__$1));
in$__$1 = G__75776;
out = G__75777;
continue;
} else {
return cljs.core._persistent_BANG_.call(null,out);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__75778__delegate = function (keys){
return cljs.core.set.call(null,keys);
};
var G__75778 = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75778__delegate.call(this,keys);};
G__75778.cljs$lang$maxFixedArity = 0;
G__75778.cljs$lang$applyTo = (function (arglist__75779){
var keys = cljs.core.seq(arglist__75779);
return G__75778__delegate(keys);
});
G__75778.cljs$core$IFn$_invoke$arity$variadic = G__75778__delegate;
return G__75778;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__75780){
var keys = cljs.core.seq(arglist__75780);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__75781){
var comparator = cljs.core.first(arglist__75781);
var keys = cljs.core.rest(arglist__75781);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){
return cljs.core.map.call(null,(function (p1__75782_SHARP_){
var temp__4124__auto__ = cljs.core.find.call(null,smap,p1__75782_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.val.call(null,e);
} else {
return p1__75782_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
var n = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,((function (n){
return (function (v,i){
var temp__4124__auto__ = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,(0))));
} else {
return cljs.core.map.call(null,(function (p1__75783_SHARP_){
var temp__4124__auto__ = cljs.core.find.call(null,smap,p1__75783_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return cljs.core.second.call(null,e);
} else {
return p1__75783_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__75790,seen__$1){
while(true){
var vec__75791 = p__75790;
var f = cljs.core.nth.call(null,vec__75791,(0),null);
var xs__$1 = vec__75791;
var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f)){
var G__75792 = cljs.core.rest.call(null,s);
var G__75793 = seen__$1;
p__75790 = G__75792;
seen__$1 = G__75793;
continue;
} else {
return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next.call(null,s__$1)){
var G__75794 = cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));
var G__75795 = cljs.core.next.call(null,s__$1);
ret = G__75794;
s__$1 = G__75795;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((function (){var G__75797 = x;
if(G__75797){
var bit__4304__auto__ = (G__75797.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4304__auto__) || (G__75797.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq.call(null,keys);
var vs = cljs.core.seq.call(null,vals);
while(true){
if((ks) && (vs)){
var G__75798 = cljs.core.assoc_BANG_.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));
var G__75799 = cljs.core.next.call(null,ks);
var G__75800 = cljs.core.next.call(null,vs);
map = G__75798;
ks = G__75799;
vs = G__75800;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y))){
return x;
} else {
return y;
}
});
var max_key__4 = (function() { 
var G__75803__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__75801_SHARP_,p2__75802_SHARP_){
return max_key.call(null,k,p1__75801_SHARP_,p2__75802_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__75803 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75803__delegate.call(this,k,x,y,more);};
G__75803.cljs$lang$maxFixedArity = 3;
G__75803.cljs$lang$applyTo = (function (arglist__75804){
var k = cljs.core.first(arglist__75804);
arglist__75804 = cljs.core.next(arglist__75804);
var x = cljs.core.first(arglist__75804);
arglist__75804 = cljs.core.next(arglist__75804);
var y = cljs.core.first(arglist__75804);
var more = cljs.core.rest(arglist__75804);
return G__75803__delegate(k,x,y,more);
});
G__75803.cljs$core$IFn$_invoke$arity$variadic = G__75803__delegate;
return G__75803;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y))){
return x;
} else {
return y;
}
});
var min_key__4 = (function() { 
var G__75807__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__75805_SHARP_,p2__75806_SHARP_){
return min_key.call(null,k,p1__75805_SHARP_,p2__75806_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__75807 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75807__delegate.call(this,k,x,y,more);};
G__75807.cljs$lang$maxFixedArity = 3;
G__75807.cljs$lang$applyTo = (function (arglist__75808){
var k = cljs.core.first(arglist__75808);
arglist__75808 = cljs.core.next(arglist__75808);
var x = cljs.core.first(arglist__75808);
arglist__75808 = cljs.core.next(arglist__75808);
var y = cljs.core.first(arglist__75808);
var more = cljs.core.rest(arglist__75808);
return G__75807__delegate(k,x,y,more);
});
G__75807.cljs$core$IFn$_invoke$arity$variadic = G__75807__delegate;
return G__75807;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function array_list(){
return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list.call(null);
return ((function (a){
return (function() {
var G__75809 = null;
var G__75809__0 = (function (){
return rf.call(null);
});
var G__75809__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec.call(null,a.toArray());
a.clear();

return cljs.core.unreduced.call(null,rf.call(null,result,v));
})());
return rf.call(null,result__$1);
});
var G__75809__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec.call(null,a.toArray());
a.clear();

return rf.call(null,result,v);
} else {
return result;
}
});
G__75809 = function(result,input){
switch(arguments.length){
case 0:
return G__75809__0.call(this);
case 1:
return G__75809__1.call(this,result);
case 2:
return G__75809__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75809.cljs$core$IFn$_invoke$arity$0 = G__75809__0;
G__75809.cljs$core$IFn$_invoke$arity$1 = G__75809__1;
G__75809.cljs$core$IFn$_invoke$arity$2 = G__75809__2;
return G__75809;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else {
return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__75810 = null;
var G__75810__0 = (function (){
return rf.call(null);
});
var G__75810__1 = (function (result){
return rf.call(null,result);
});
var G__75810__2 = (function (result,input){
if(cljs.core.truth_(pred.call(null,input))){
return rf.call(null,result,input);
} else {
return cljs.core.reduced.call(null,result);
}
});
G__75810 = function(result,input){
switch(arguments.length){
case 0:
return G__75810__0.call(this);
case 1:
return G__75810__1.call(this,result);
case 2:
return G__75810__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75810.cljs$core$IFn$_invoke$arity$0 = G__75810__0;
G__75810.cljs$core$IFn$_invoke$arity$1 = G__75810__1;
G__75810.cljs$core$IFn$_invoke$arity$2 = G__75810__2;
return G__75810;
})()
});
});
var take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s)))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator.call(null,sc);
return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),(0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__75813 = temp__4126__auto__;
var e = cljs.core.nth.call(null,vec__75813,(0),null);
var s = vec__75813;
if(cljs.core.truth_(include.call(null,e))){
return s;
} else {
return cljs.core.next.call(null,s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__75814 = temp__4126__auto__;
var e = cljs.core.nth.call(null,vec__75814,(0),null);
var s = vec__75814;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else {
return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__75817 = temp__4126__auto__;
var e = cljs.core.nth.call(null,vec__75817,(0),null);
var s = vec__75817;
if(cljs.core.truth_(include.call(null,e))){
return s;
} else {
return cljs.core.next.call(null,s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__75818 = temp__4126__auto__;
var e = cljs.core.nth.call(null,vec__75818,(0),null);
var s = vec__75818;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else {
return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_.call(null,coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count.call(null,rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count.call(null,rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng__$1))){
return (0);
} else {
return Math.ceil.call(null,((self__.end - self__.start) / self__.step));
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__4051__auto__ = self__.__hash;
if(!((h__4051__auto__ == null))){
return h__4051__auto__;
} else {
var h__4051__auto____$1 = cljs.core.hash_ordered_coll.call(null,rng__$1);
self__.__hash = h__4051__auto____$1;

return h__4051__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential.call(null,rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.call(null,rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = f.call(null,ret,i);
if(cljs.core.reduced_QMARK_.call(null,ret__$1)){
return cljs.core.deref.call(null,ret__$1);
} else {
var G__75819 = (i + self__.step);
var G__75820 = ret__$1;
i = G__75819;
ret = G__75820;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq.call(null,rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq.call(null,rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons.call(null,o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,(0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){
return range.call(null,(0),end,(1));
});
var range__2 = (function (start,end){
return range.call(null,start,end,(1));
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){
return (function (rf){
var ia = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (ia){
return (function() {
var G__75821 = null;
var G__75821__0 = (function (){
return rf.call(null);
});
var G__75821__1 = (function (result){
return rf.call(null,result);
});
var G__75821__2 = (function (result,input){
var i = cljs.core._vreset_BANG_.call(null,ia,(cljs.core._deref.call(null,ia) + (1)));
if((cljs.core.rem.call(null,i,n) === (0))){
return rf.call(null,result,input);
} else {
return result;
}
});
G__75821 = function(result,input){
switch(arguments.length){
case 0:
return G__75821__0.call(this);
case 1:
return G__75821__1.call(this,result);
case 2:
return G__75821__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75821.cljs$core$IFn$_invoke$arity$0 = G__75821__0;
G__75821.cljs$core$IFn$_invoke$arity$1 = G__75821__1;
G__75821.cljs$core$IFn$_invoke$arity$2 = G__75821__2;
return G__75821;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)));
} else {
return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list.call(null);
var pa = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439));
return ((function (a,pa){
return (function() {
var G__75823 = null;
var G__75823__0 = (function (){
return rf.call(null);
});
var G__75823__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec.call(null,a.toArray());
a.clear();

return cljs.core.unreduced.call(null,rf.call(null,result,v));
})());
return rf.call(null,result__$1);
});
var G__75823__2 = (function (result,input){
var pval = cljs.core.deref.call(null,pa);
var val = f.call(null,input);
cljs.core.vreset_BANG_.call(null,pa,val);

if((cljs.core.keyword_identical_QMARK_.call(null,pval,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439))) || (cljs.core._EQ_.call(null,val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec.call(null,a.toArray());
a.clear();

var ret = rf.call(null,result,v);
if(cljs.core.reduced_QMARK_.call(null,ret)){
} else {
a.add(input);
}

return ret;
}
});
G__75823 = function(result,input){
switch(arguments.length){
case 0:
return G__75823__0.call(this);
case 1:
return G__75823__1.call(this,result);
case 2:
return G__75823__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75823.cljs$core$IFn$_invoke$arity$0 = G__75823__0;
G__75823.cljs$core$IFn$_invoke$arity$1 = G__75823__1;
G__75823.cljs$core$IFn$_invoke$arity$2 = G__75823__2;
return G__75823;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
var fst = cljs.core.first.call(null,s);
var fv = f.call(null,fst);
var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,((function (fst,fv,s,temp__4126__auto__){
return (function (p1__75822_SHARP_){
return cljs.core._EQ_.call(null,fv,f.call(null,p1__75822_SHARP_));
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next.call(null,s)));
return cljs.core.cons.call(null,run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else {
return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,(0)) + (1)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4124__auto__ = cljs.core.seq.call(null,coll);
if(temp__4124__auto__){
var s = temp__4124__auto__;
return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s));
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,f.call(null));
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.seq.call(null,coll);
if(temp__4126__auto__){
var s = temp__4126__auto__;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s));
} else {
return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__75834 = null;
var G__75834__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null)],null));
});
var G__75834__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x)],null));
});
var G__75834__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y)],null));
});
var G__75834__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z)],null));
});
var G__75834__4 = (function() { 
var G__75835__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args)],null));
};
var G__75835 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75835__delegate.call(this,x,y,z,args);};
G__75835.cljs$lang$maxFixedArity = 3;
G__75835.cljs$lang$applyTo = (function (arglist__75836){
var x = cljs.core.first(arglist__75836);
arglist__75836 = cljs.core.next(arglist__75836);
var y = cljs.core.first(arglist__75836);
arglist__75836 = cljs.core.next(arglist__75836);
var z = cljs.core.first(arglist__75836);
var args = cljs.core.rest(arglist__75836);
return G__75835__delegate(x,y,z,args);
});
G__75835.cljs$core$IFn$_invoke$arity$variadic = G__75835__delegate;
return G__75835;
})()
;
G__75834 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75834__0.call(this);
case 1:
return G__75834__1.call(this,x);
case 2:
return G__75834__2.call(this,x,y);
case 3:
return G__75834__3.call(this,x,y,z);
default:
return G__75834__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75834.cljs$lang$maxFixedArity = 3;
G__75834.cljs$lang$applyTo = G__75834__4.cljs$lang$applyTo;
G__75834.cljs$core$IFn$_invoke$arity$0 = G__75834__0;
G__75834.cljs$core$IFn$_invoke$arity$1 = G__75834__1;
G__75834.cljs$core$IFn$_invoke$arity$2 = G__75834__2;
G__75834.cljs$core$IFn$_invoke$arity$3 = G__75834__3;
G__75834.cljs$core$IFn$_invoke$arity$variadic = G__75834__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75834;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__75837 = null;
var G__75837__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null)],null));
});
var G__75837__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x)],null));
});
var G__75837__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y)],null));
});
var G__75837__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z)],null));
});
var G__75837__4 = (function() { 
var G__75838__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args)],null));
};
var G__75838 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75838__delegate.call(this,x,y,z,args);};
G__75838.cljs$lang$maxFixedArity = 3;
G__75838.cljs$lang$applyTo = (function (arglist__75839){
var x = cljs.core.first(arglist__75839);
arglist__75839 = cljs.core.next(arglist__75839);
var y = cljs.core.first(arglist__75839);
arglist__75839 = cljs.core.next(arglist__75839);
var z = cljs.core.first(arglist__75839);
var args = cljs.core.rest(arglist__75839);
return G__75838__delegate(x,y,z,args);
});
G__75838.cljs$core$IFn$_invoke$arity$variadic = G__75838__delegate;
return G__75838;
})()
;
G__75837 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75837__0.call(this);
case 1:
return G__75837__1.call(this,x);
case 2:
return G__75837__2.call(this,x,y);
case 3:
return G__75837__3.call(this,x,y,z);
default:
return G__75837__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75837.cljs$lang$maxFixedArity = 3;
G__75837.cljs$lang$applyTo = G__75837__4.cljs$lang$applyTo;
G__75837.cljs$core$IFn$_invoke$arity$0 = G__75837__0;
G__75837.cljs$core$IFn$_invoke$arity$1 = G__75837__1;
G__75837.cljs$core$IFn$_invoke$arity$2 = G__75837__2;
G__75837.cljs$core$IFn$_invoke$arity$3 = G__75837__3;
G__75837.cljs$core$IFn$_invoke$arity$variadic = G__75837__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75837;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__75840 = null;
var G__75840__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null),h.call(null)],null));
});
var G__75840__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x),h.call(null,x)],null));
});
var G__75840__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y),h.call(null,x,y)],null));
});
var G__75840__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z)],null));
});
var G__75840__4 = (function() { 
var G__75841__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args)],null));
};
var G__75841 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75841__delegate.call(this,x,y,z,args);};
G__75841.cljs$lang$maxFixedArity = 3;
G__75841.cljs$lang$applyTo = (function (arglist__75842){
var x = cljs.core.first(arglist__75842);
arglist__75842 = cljs.core.next(arglist__75842);
var y = cljs.core.first(arglist__75842);
arglist__75842 = cljs.core.next(arglist__75842);
var z = cljs.core.first(arglist__75842);
var args = cljs.core.rest(arglist__75842);
return G__75841__delegate(x,y,z,args);
});
G__75841.cljs$core$IFn$_invoke$arity$variadic = G__75841__delegate;
return G__75841;
})()
;
G__75840 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75840__0.call(this);
case 1:
return G__75840__1.call(this,x);
case 2:
return G__75840__2.call(this,x,y);
case 3:
return G__75840__3.call(this,x,y,z);
default:
return G__75840__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75840.cljs$lang$maxFixedArity = 3;
G__75840.cljs$lang$applyTo = G__75840__4.cljs$lang$applyTo;
G__75840.cljs$core$IFn$_invoke$arity$0 = G__75840__0;
G__75840.cljs$core$IFn$_invoke$arity$1 = G__75840__1;
G__75840.cljs$core$IFn$_invoke$arity$2 = G__75840__2;
G__75840.cljs$core$IFn$_invoke$arity$3 = G__75840__3;
G__75840.cljs$core$IFn$_invoke$arity$variadic = G__75840__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75840;
})()
});
var juxt__4 = (function() { 
var G__75843__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__75844 = null;
var G__75844__0 = (function (){
return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__75824_SHARP_,p2__75825_SHARP_){
return cljs.core.conj.call(null,p1__75824_SHARP_,p2__75825_SHARP_.call(null));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__75844__1 = (function (x){
return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__75826_SHARP_,p2__75827_SHARP_){
return cljs.core.conj.call(null,p1__75826_SHARP_,p2__75827_SHARP_.call(null,x));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__75844__2 = (function (x,y){
return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__75828_SHARP_,p2__75829_SHARP_){
return cljs.core.conj.call(null,p1__75828_SHARP_,p2__75829_SHARP_.call(null,x,y));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__75844__3 = (function (x,y,z){
return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__75830_SHARP_,p2__75831_SHARP_){
return cljs.core.conj.call(null,p1__75830_SHARP_,p2__75831_SHARP_.call(null,x,y,z));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__75844__4 = (function() { 
var G__75845__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__75832_SHARP_,p2__75833_SHARP_){
return cljs.core.conj.call(null,p1__75832_SHARP_,cljs.core.apply.call(null,p2__75833_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__75845 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75845__delegate.call(this,x,y,z,args);};
G__75845.cljs$lang$maxFixedArity = 3;
G__75845.cljs$lang$applyTo = (function (arglist__75846){
var x = cljs.core.first(arglist__75846);
arglist__75846 = cljs.core.next(arglist__75846);
var y = cljs.core.first(arglist__75846);
arglist__75846 = cljs.core.next(arglist__75846);
var z = cljs.core.first(arglist__75846);
var args = cljs.core.rest(arglist__75846);
return G__75845__delegate(x,y,z,args);
});
G__75845.cljs$core$IFn$_invoke$arity$variadic = G__75845__delegate;
return G__75845;
})()
;
G__75844 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__75844__0.call(this);
case 1:
return G__75844__1.call(this,x);
case 2:
return G__75844__2.call(this,x,y);
case 3:
return G__75844__3.call(this,x,y,z);
default:
return G__75844__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75844.cljs$lang$maxFixedArity = 3;
G__75844.cljs$lang$applyTo = G__75844__4.cljs$lang$applyTo;
G__75844.cljs$core$IFn$_invoke$arity$0 = G__75844__0;
G__75844.cljs$core$IFn$_invoke$arity$1 = G__75844__1;
G__75844.cljs$core$IFn$_invoke$arity$2 = G__75844__2;
G__75844.cljs$core$IFn$_invoke$arity$3 = G__75844__3;
G__75844.cljs$core$IFn$_invoke$arity$variadic = G__75844__4.cljs$core$IFn$_invoke$arity$variadic;
return G__75844;
})()
;})(fs__$1))
};
var G__75843 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__75843__delegate.call(this,f,g,h,fs);};
G__75843.cljs$lang$maxFixedArity = 3;
G__75843.cljs$lang$applyTo = (function (arglist__75847){
var f = cljs.core.first(arglist__75847);
arglist__75847 = cljs.core.next(arglist__75847);
var g = cljs.core.first(arglist__75847);
arglist__75847 = cljs.core.next(arglist__75847);
var h = cljs.core.first(arglist__75847);
var fs = cljs.core.rest(arglist__75847);
return G__75843__delegate(f,g,h,fs);
});
G__75843.cljs$core$IFn$_invoke$arity$variadic = G__75843__delegate;
return G__75843;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll)){
var G__75848 = cljs.core.next.call(null,coll);
coll = G__75848;
continue;
} else {
return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq.call(null,coll)) && ((n > (0)))){
var G__75849 = (n - (1));
var G__75850 = cljs.core.next.call(null,coll);
n = G__75849;
coll = G__75850;
continue;
} else {
return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);

return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);

return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s)){
if((cljs.core.count.call(null,matches) === (1))){
return cljs.core.first.call(null,matches);
} else {
return cljs.core.vec.call(null,matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count.call(null,matches) === (1))){
return cljs.core.first.call(null,matches);
} else {
return cljs.core.vec.call(null,matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find.call(null,re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_.call(null,match_data))?cljs.core.first.call(null,match_data):match_data);
var post_match = cljs.core.subs.call(null,s,(match_idx + cljs.core.count.call(null,match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons.call(null,match_data,((cljs.core.seq.call(null,post_match))?re_seq.call(null,re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__75852 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.call(null,vec__75852,(0),null);
var flags = cljs.core.nth.call(null,vec__75852,(1),null);
var pattern = cljs.core.nth.call(null,vec__75852,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_75854 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write.call(null,writer,"#");
} else {
cljs.core._write.call(null,writer,begin);

if(cljs.core.seq.call(null,coll)){
print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else {
}

var coll_75855__$1 = cljs.core.next.call(null,coll);
var n_75856 = (new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_75855__$1) && (((n_75856 == null)) || (!((n_75856 === (0)))))){
cljs.core._write.call(null,writer,sep);

print_one.call(null,cljs.core.first.call(null,coll_75855__$1),writer,opts);

var G__75857 = cljs.core.next.call(null,coll_75855__$1);
var G__75858 = (n_75856 - (1));
coll_75855__$1 = G__75857;
n_75856 = G__75858;
continue;
} else {
if((cljs.core.seq.call(null,coll_75855__$1)) && ((n_75856 === (0)))){
cljs.core._write.call(null,writer,sep);

cljs.core._write.call(null,writer,"...");
} else {
}
}
break;
}

return cljs.core._write.call(null,writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_75854;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var seq__75863 = cljs.core.seq.call(null,ss);
var chunk__75864 = null;
var count__75865 = (0);
var i__75866 = (0);
while(true){
if((i__75866 < count__75865)){
var s = cljs.core._nth.call(null,chunk__75864,i__75866);
cljs.core._write.call(null,writer,s);

var G__75867 = seq__75863;
var G__75868 = chunk__75864;
var G__75869 = count__75865;
var G__75870 = (i__75866 + (1));
seq__75863 = G__75867;
chunk__75864 = G__75868;
count__75865 = G__75869;
i__75866 = G__75870;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75863);
if(temp__4126__auto__){
var seq__75863__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75863__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75863__$1);
var G__75871 = cljs.core.chunk_rest.call(null,seq__75863__$1);
var G__75872 = c__4417__auto__;
var G__75873 = cljs.core.count.call(null,c__4417__auto__);
var G__75874 = (0);
seq__75863 = G__75871;
chunk__75864 = G__75872;
count__75865 = G__75873;
i__75866 = G__75874;
continue;
} else {
var s = cljs.core.first.call(null,seq__75863__$1);
cljs.core._write.call(null,writer,s);

var G__75875 = cljs.core.next.call(null,seq__75863__$1);
var G__75876 = null;
var G__75877 = (0);
var G__75878 = (0);
seq__75863 = G__75875;
chunk__75864 = G__75876;
count__75865 = G__75877;
i__75866 = G__75878;
continue;
}
} else {
return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__75879){
var writer = cljs.core.first(arglist__75879);
var ss = cljs.core.rest(arglist__75879);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);

return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj75881 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj75881;
})();
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write.call(null,writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write.call(null,writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__3618__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.core.truth_(and__3618__auto__)){
var and__3618__auto____$1 = (function (){var G__75887 = obj;
if(G__75887){
var bit__4311__auto__ = (G__75887.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__4311__auto__) || (G__75887.cljs$core$IMeta$)){
return true;
} else {
if((!G__75887.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__75887);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__75887);
}
})();
if(and__3618__auto____$1){
return cljs.core.meta.call(null,obj);
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
})())){
cljs.core._write.call(null,writer,"^");

pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);

cljs.core._write.call(null,writer," ");
} else {
}

if((obj == null)){
return cljs.core._write.call(null,writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__75888 = obj;
if(G__75888){
var bit__4304__auto__ = (G__75888.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4304__auto__) || (G__75888.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._pr_writer.call(null,obj,writer,opts);
} else {
if(((cljs.core.type.call(null,obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write.call(null,writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_.call(null,obj)){
cljs.core._write.call(null,writer,"#js ");

return cljs.core.print_map.call(null,cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(obj[k])], null);
}),cljs.core.js_keys.call(null,obj)),pr_writer,writer,opts);
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer.call(null,writer,pr_writer,"#js ["," ","]",opts,obj);
} else {
if(goog.isString(obj)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));
} else {
return cljs.core._write.call(null,writer,obj);
}
} else {
if(cljs.core.fn_QMARK_.call(null,obj)){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns) < len)){
var G__75890 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__75890;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize.call(null,(obj.getUTCMonth() + (1)),(2)),"-",normalize.call(null,obj.getUTCDate(),(2)),"T",normalize.call(null,obj.getUTCHours(),(2)),":",normalize.call(null,obj.getUTCMinutes(),(2)),":",normalize.call(null,obj.getUTCSeconds(),(2)),".",normalize.call(null,obj.getUTCMilliseconds(),(3)),"-","00:00\"");
} else {
if(cljs.core.regexp_QMARK_.call(null,obj)){
return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else {
if((function (){var G__75889 = obj;
if(G__75889){
var bit__4311__auto__ = (G__75889.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__4311__auto__) || (G__75889.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__75889.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__75889);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__75889);
}
})()){
return cljs.core._pr_writer.call(null,obj,writer,opts);
} else {
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);

var seq__75895 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
var chunk__75896 = null;
var count__75897 = (0);
var i__75898 = (0);
while(true){
if((i__75898 < count__75897)){
var obj = cljs.core._nth.call(null,chunk__75896,i__75898);
cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,obj,writer,opts);

var G__75899 = seq__75895;
var G__75900 = chunk__75896;
var G__75901 = count__75897;
var G__75902 = (i__75898 + (1));
seq__75895 = G__75899;
chunk__75896 = G__75900;
count__75897 = G__75901;
i__75898 = G__75902;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75895);
if(temp__4126__auto__){
var seq__75895__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75895__$1)){
var c__4417__auto__ = cljs.core.chunk_first.call(null,seq__75895__$1);
var G__75903 = cljs.core.chunk_rest.call(null,seq__75895__$1);
var G__75904 = c__4417__auto__;
var G__75905 = cljs.core.count.call(null,c__4417__auto__);
var G__75906 = (0);
seq__75895 = G__75903;
chunk__75896 = G__75904;
count__75897 = G__75905;
i__75898 = G__75906;
continue;
} else {
var obj = cljs.core.first.call(null,seq__75895__$1);
cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,obj,writer,opts);

var G__75907 = cljs.core.next.call(null,seq__75895__$1);
var G__75908 = null;
var G__75909 = (0);
var G__75910 = (0);
seq__75895 = G__75907;
chunk__75896 = G__75908;
count__75897 = G__75909;
i__75898 = G__75910;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer.call(null,objs,writer,opts);

cljs.core._flush.call(null,writer);

return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");

if(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939)))){
return cljs.core.flush.call(null);
} else {
return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__75911){
var objs = cljs.core.seq(arglist__75911);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__75912){
var objs = cljs.core.seq(arglist__75912);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__75913){
var objs = cljs.core.seq(arglist__75913);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__75914){
var objs = cljs.core.seq(arglist__75914);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__75915){
var objs = cljs.core.seq(arglist__75915);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else {
return null;
}
};
var println = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__75916){
var objs = cljs.core.seq(arglist__75916);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__75917){
var objs = cljs.core.seq(arglist__75917);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else {
return null;
}
};
var prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__75918){
var objs = cljs.core.seq(arglist__75918);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,(function (e,w,opts__$1){
print_one.call(null,cljs.core.key.call(null,e),w,opts__$1);

cljs.core._write.call(null,w," ");

return print_one.call(null,cljs.core.val.call(null,e),w,opts__$1);
}),"{",", ","}",opts,cljs.core.seq.call(null,m));
});
cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Volatile.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Volatile: ");

cljs.core.pr_writer.call(null,a__$1.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Var.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write.call(null,writer,"#'");

return cljs.core.pr_writer.call(null,a__$1.sym,writer,opts);
});

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,a__$1.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write.call(null,writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.call(null,x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.call(null,x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_keywords.call(null,x__$1,y);
});

cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols.call(null,x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__75919){
var iref = cljs.core.first(arglist__75919);
arglist__75919 = cljs.core.next(arglist__75919);
var f = cljs.core.first(arglist__75919);
var args = cljs.core.rest(arglist__75919);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = cljs.core.atom.call(null,(0));
} else {
}

return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not.call(null,self__.f);
});

cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = self__.f.call(null);

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function __GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){
return (function (p1__75920_SHARP_,p2__75921_SHARP_){
var ret = rf.call(null,p1__75920_SHARP_,p2__75921_SHARP_);
if(cljs.core.reduced_QMARK_.call(null,ret)){
return cljs.core.reduced.call(null,ret);
} else {
return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){
var rf1 = cljs.core.preserving_reduced.call(null,rf);
return ((function (rf1){
return (function() {
var G__75922 = null;
var G__75922__0 = (function (){
return rf.call(null);
});
var G__75922__1 = (function (result){
return rf.call(null,result);
});
var G__75922__2 = (function (result,input){
return cljs.core.reduce.call(null,rf1,result,input);
});
G__75922 = function(result,input){
switch(arguments.length){
case 0:
return G__75922__0.call(this);
case 1:
return G__75922__1.call(this,result);
case 2:
return G__75922__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75922.cljs$core$IFn$_invoke$arity$0 = G__75922__0;
G__75922.cljs$core$IFn$_invoke$arity$1 = G__75922__1;
G__75922.cljs$core$IFn$_invoke$arity$2 = G__75922__2;
return G__75922;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){
return (function (rf){
var pa = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439));
return ((function (pa){
return (function() {
var G__75923 = null;
var G__75923__0 = (function (){
return rf.call(null);
});
var G__75923__1 = (function (result){
return rf.call(null,result);
});
var G__75923__2 = (function (result,input){
var prior = cljs.core.deref.call(null,pa);
cljs.core.vreset_BANG_.call(null,pa,input);

if(cljs.core._EQ_.call(null,prior,input)){
return result;
} else {
return rf.call(null,result,input);
}
});
G__75923 = function(result,input){
switch(arguments.length){
case 0:
return G__75923__0.call(this);
case 1:
return G__75923__1.call(this,result);
case 2:
return G__75923__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75923.cljs$core$IFn$_invoke$arity$0 = G__75923__0;
G__75923.cljs$core$IFn$_invoke$arity$1 = G__75923__1;
G__75923.cljs$core$IFn$_invoke$arity$2 = G__75923__2;
return G__75923;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){
return cljs.core.sequence.call(null,dedupe.call(null),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){
return cljs.core.filter.call(null,(function (_){
return (cljs.core.rand.call(null) < prob);
}));
});
var random_sample__2 = (function (prob,coll){
return cljs.core.filter.call(null,(function (_){
return (cljs.core.rand.call(null) < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.call(null,self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq.call(null,cljs.core.sequence.call(null,self__.xform,self__.coll));
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__4608__auto__ = this;
return cljs.core.es6_iterator.call(null,this__4608__auto__);
}));
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){
return cljs.core.reduce.call(null,(function (p1__75925_SHARP_,p2__75924_SHARP_){
return proc.call(null,p2__75924_SHARP_);
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj75927 = {};
return obj75927;
})();

cljs.core._clj__GT_js = (function _clj__GT_js(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function _key__GT_js(x){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function key__GT_js(k){
if((function (){var G__75929 = k;
if(G__75929){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__75929.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__75929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__75929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__75929);
}
})()){
return cljs.core._clj__GT_js.call(null,k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
return cljs.core.clj__GT_js.call(null,k);
} else {
return cljs.core.pr_str.call(null,k);
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__75943 = x;
if(G__75943){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__75943.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__75943.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__75943);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__75943);
}
})()){
return cljs.core._clj__GT_js.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_.call(null,x)){
var m = (function (){var obj75945 = {};
return obj75945;
})();
var seq__75946_75956 = cljs.core.seq.call(null,x);
var chunk__75947_75957 = null;
var count__75948_75958 = (0);
var i__75949_75959 = (0);
while(true){
if((i__75949_75959 < count__75948_75958)){
var vec__75950_75960 = cljs.core._nth.call(null,chunk__75947_75957,i__75949_75959);
var k_75961 = cljs.core.nth.call(null,vec__75950_75960,(0),null);
var v_75962 = cljs.core.nth.call(null,vec__75950_75960,(1),null);
(m[cljs.core.key__GT_js.call(null,k_75961)] = clj__GT_js.call(null,v_75962));

var G__75963 = seq__75946_75956;
var G__75964 = chunk__75947_75957;
var G__75965 = count__75948_75958;
var G__75966 = (i__75949_75959 + (1));
seq__75946_75956 = G__75963;
chunk__75947_75957 = G__75964;
count__75948_75958 = G__75965;
i__75949_75959 = G__75966;
continue;
} else {
var temp__4126__auto___75967 = cljs.core.seq.call(null,seq__75946_75956);
if(temp__4126__auto___75967){
var seq__75946_75968__$1 = temp__4126__auto___75967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75946_75968__$1)){
var c__4417__auto___75969 = cljs.core.chunk_first.call(null,seq__75946_75968__$1);
var G__75970 = cljs.core.chunk_rest.call(null,seq__75946_75968__$1);
var G__75971 = c__4417__auto___75969;
var G__75972 = cljs.core.count.call(null,c__4417__auto___75969);
var G__75973 = (0);
seq__75946_75956 = G__75970;
chunk__75947_75957 = G__75971;
count__75948_75958 = G__75972;
i__75949_75959 = G__75973;
continue;
} else {
var vec__75951_75974 = cljs.core.first.call(null,seq__75946_75968__$1);
var k_75975 = cljs.core.nth.call(null,vec__75951_75974,(0),null);
var v_75976 = cljs.core.nth.call(null,vec__75951_75974,(1),null);
(m[cljs.core.key__GT_js.call(null,k_75975)] = clj__GT_js.call(null,v_75976));

var G__75977 = cljs.core.next.call(null,seq__75946_75968__$1);
var G__75978 = null;
var G__75979 = (0);
var G__75980 = (0);
seq__75946_75956 = G__75977;
chunk__75947_75957 = G__75978;
count__75948_75958 = G__75979;
i__75949_75959 = G__75980;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
var arr = [];
var seq__75952_75981 = cljs.core.seq.call(null,cljs.core.map.call(null,clj__GT_js,x));
var chunk__75953_75982 = null;
var count__75954_75983 = (0);
var i__75955_75984 = (0);
while(true){
if((i__75955_75984 < count__75954_75983)){
var x_75985__$1 = cljs.core._nth.call(null,chunk__75953_75982,i__75955_75984);
arr.push(x_75985__$1);

var G__75986 = seq__75952_75981;
var G__75987 = chunk__75953_75982;
var G__75988 = count__75954_75983;
var G__75989 = (i__75955_75984 + (1));
seq__75952_75981 = G__75986;
chunk__75953_75982 = G__75987;
count__75954_75983 = G__75988;
i__75955_75984 = G__75989;
continue;
} else {
var temp__4126__auto___75990 = cljs.core.seq.call(null,seq__75952_75981);
if(temp__4126__auto___75990){
var seq__75952_75991__$1 = temp__4126__auto___75990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75952_75991__$1)){
var c__4417__auto___75992 = cljs.core.chunk_first.call(null,seq__75952_75991__$1);
var G__75993 = cljs.core.chunk_rest.call(null,seq__75952_75991__$1);
var G__75994 = c__4417__auto___75992;
var G__75995 = cljs.core.count.call(null,c__4417__auto___75992);
var G__75996 = (0);
seq__75952_75981 = G__75993;
chunk__75953_75982 = G__75994;
count__75954_75983 = G__75995;
i__75955_75984 = G__75996;
continue;
} else {
var x_75997__$1 = cljs.core.first.call(null,seq__75952_75991__$1);
arr.push(x_75997__$1);

var G__75998 = cljs.core.next.call(null,seq__75952_75991__$1);
var G__75999 = null;
var G__76000 = (0);
var G__76001 = (0);
seq__75952_75981 = G__75998;
chunk__75953_75982 = G__75999;
count__75954_75983 = G__76000;
i__75955_75984 = G__76001;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj76003 = {};
return obj76003;
})();

cljs.core._js__GT_clj = (function _js__GT_clj(x,options){
if((function (){var and__3618__auto__ = x;
if(and__3618__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__3618__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__4274__auto__ = (((x == null))?null:x);
return (function (){var or__3630__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){
return js__GT_clj.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], null));
});
var js__GT_clj__2 = (function() { 
var G__76026__delegate = function (x,opts){
var map__76015 = opts;
var map__76015__$1 = ((cljs.core.seq_QMARK_.call(null,map__76015))?cljs.core.apply.call(null,cljs.core.hash_map,map__76015):map__76015);
var keywordize_keys = cljs.core.get.call(null,map__76015__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__76015,map__76015__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){
if((function (){var G__76021 = x__$1;
if(G__76021){
var bit__4311__auto__ = null;
if(cljs.core.truth_((function (){var or__3630__auto__ = bit__4311__auto__;
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return G__76021.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__76021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__76021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__76021);
}
})()){
return cljs.core._js__GT_clj.call(null,x__$1,cljs.core.apply.call(null,cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_.call(null,x__$1)){
return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_.call(null,x__$1)){
return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else {
if((cljs.core.type.call(null,x__$1) === Object)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4386__auto__ = ((function (map__76015,map__76015__$1,keywordize_keys,keyfn){
return (function iter__76022(s__76023){
return (new cljs.core.LazySeq(null,((function (map__76015,map__76015__$1,keywordize_keys,keyfn){
return (function (){
var s__76023__$1 = s__76023;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__76023__$1);
if(temp__4126__auto__){
var s__76023__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76023__$2)){
var c__4384__auto__ = cljs.core.chunk_first.call(null,s__76023__$2);
var size__4385__auto__ = cljs.core.count.call(null,c__4384__auto__);
var b__76025 = cljs.core.chunk_buffer.call(null,size__4385__auto__);
if((function (){var i__76024 = (0);
while(true){
if((i__76024 < size__4385__auto__)){
var k = cljs.core._nth.call(null,c__4384__auto__,i__76024);
cljs.core.chunk_append.call(null,b__76025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null));

var G__76027 = (i__76024 + (1));
i__76024 = G__76027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76025),iter__76022.call(null,cljs.core.chunk_rest.call(null,s__76023__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76025),null);
}
} else {
var k = cljs.core.first.call(null,s__76023__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null),iter__76022.call(null,cljs.core.rest.call(null,s__76023__$2)));
}
} else {
return null;
}
break;
}
});})(map__76015,map__76015__$1,keywordize_keys,keyfn))
,null,null));
});})(map__76015,map__76015__$1,keywordize_keys,keyfn))
;
return iter__4386__auto__.call(null,cljs.core.js_keys.call(null,x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__76015,map__76015__$1,keywordize_keys,keyfn))
;
return f.call(null,x);
};
var G__76026 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__76026__delegate.call(this,x,opts);};
G__76026.cljs$lang$maxFixedArity = 1;
G__76026.cljs$lang$applyTo = (function (arglist__76028){
var x = cljs.core.first(arglist__76028);
var opts = cljs.core.rest(arglist__76028);
return G__76026__delegate(x,opts);
});
G__76026.cljs$core$IFn$_invoke$arity$variadic = G__76026__delegate;
return G__76026;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function() { 
var G__76029__delegate = function (args){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__76029 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__76029__delegate.call(this,args);};
G__76029.cljs$lang$maxFixedArity = 0;
G__76029.cljs$lang$applyTo = (function (arglist__76030){
var args = cljs.core.seq(arglist__76030);
return G__76029__delegate(args);
});
G__76029.cljs$core$IFn$_invoke$arity$variadic = G__76029__delegate;
return G__76029;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
var G__76031 = ret;
f = G__76031;
continue;
} else {
return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__76032__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__76032 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__76032__delegate.call(this,f,args);};
G__76032.cljs$lang$maxFixedArity = 1;
G__76032.cljs$lang$applyTo = (function (arglist__76033){
var f = cljs.core.first(arglist__76033);
var args = cljs.core.rest(arglist__76033);
return G__76032__delegate(f,args);
});
G__76032.cljs$core$IFn$_invoke$arity$variadic = G__76032__delegate;
return G__76032;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,(1));
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = f.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",1824886031),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
} else {
}

return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,cljs.core.get_global_hierarchy.call(null),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__76034){
var f = cljs.core.first(arglist__76034);
var args = cljs.core.rest(arglist__76034);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3630__auto__ = cljs.core._EQ_.call(null,child,parent);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
var and__3618__auto__ = cljs.core.vector_QMARK_.call(null,parent);
if(and__3618__auto__){
var and__3618__auto____$1 = cljs.core.vector_QMARK_.call(null,child);
if(and__3618__auto____$1){
var and__3618__auto____$2 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3618__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count.call(null,parent)))){
return ret;
} else {
var G__76035 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__76036 = (i + (1));
ret = G__76035;
i = G__76036;
continue;
}
break;
}
} else {
return and__3618__auto____$2;
}
} else {
return and__3618__auto____$1;
}
} else {
return and__3618__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.call(null,derive,tag,parent);

return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))))].join('')));
}

var tp = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);
var td = new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h);
var ta = new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
});})(tp,td,ta))
,m,cljs.core.cons.call(null,source,sources.call(null,source)));
});})(tp,td,ta))
;
var or__3630__auto__ = ((cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){
if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),tf.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",1824886031),tf.call(null,new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.call(null,underive,tag,parent);

return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag));
var deriv_seq = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (parentMap,childsParents,newParents){
return (function (p1__76037_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__76037_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__76037_SHARP_),cljs.core.second.call(null,p1__76037_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq.call(null,newParents)));
if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent)){
return cljs.core.reduce.call(null,((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__76038_SHARP_,p2__76039_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__76038_SHARP_,p2__76039_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,(2),deriv_seq));
} else {
return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));

return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3630__auto__ = (cljs.core.truth_((function (){var and__3618__auto__ = xprefs;
if(cljs.core.truth_(and__3618__auto__)){
return xprefs.call(null,y);
} else {
return and__3618__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (function (){var ps = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps) > (0))){
if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table))){
} else {
}

var G__76040 = cljs.core.rest.call(null,ps);
ps = G__76040;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3630__auto____$1)){
return or__3630__auto____$1;
} else {
var or__3630__auto____$2 = (function (){var ps = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps) > (0))){
if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table))){
} else {
}

var G__76041 = cljs.core.rest.call(null,ps);
ps = G__76041;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__3630__auto____$2)){
return or__3630__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3630__auto__ = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3630__auto__)){
return or__3630__auto__;
} else {
return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.call(null,(function (be,p__76044){
var vec__76045 = p__76044;
var k = cljs.core.nth.call(null,vec__76045,(0),null);
var _ = cljs.core.nth.call(null,vec__76045,(1),null);
var e = vec__76045;
if(cljs.core.isa_QMARK_.call(null,cljs.core.deref.call(null,hierarchy),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__3630__auto__ = (be == null);
if(or__3630__auto__){
return or__3630__auto__;
} else {
return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))){
cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));

return cljs.core.second.call(null,best_entry);
} else {
cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);

return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj76047 = {};
return obj76047;
})();

cljs.core._reset = (function _reset(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._reset[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._reset["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._add_method[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._add_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._remove_method[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._prefer_method[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._get_method[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._get_method["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function _methods(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._methods[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._methods["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3618__auto__ = mf;
if(and__3618__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__3618__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__4274__auto__ = (((mf == null))?null:mf);
return (function (){var or__3630__auto__ = (cljs.core._prefers[goog.typeOf(x__4274__auto__)]);
if(or__3630__auto__){
return or__3630__auto__;
} else {
var or__3630__auto____$1 = (cljs.core._prefers["_"]);
if(or__3630__auto____$1){
return or__3630__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name.call(null,self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace.call(null,self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.call(null,self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.call(null,self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.call(null,self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy))){
} else {
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4124__auto__ = cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4124__auto__)){
var target_fn = temp__4124__auto__;
return target_fn;
} else {
var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4124__auto____$1)){
var target_fn = temp__4124__auto____$1;
return target_fn;
} else {
return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.call(null,self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
return cljs.core.deref.call(null,self__.method_table);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
return cljs.core.deref.call(null,self__.prefer_table);
});

cljs.core.MultiFn.prototype.call = (function() {
var G__76049 = null;
var G__76049__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null);
});
var G__76049__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a);
});
var G__76049__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b);
});
var G__76049__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c);
});
var G__76049__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d);
});
var G__76049__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e);
});
var G__76049__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f);
});
var G__76049__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g);
});
var G__76049__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h);
});
var G__76049__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i);
});
var G__76049__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__76049__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__76049__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__76049__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__76049__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__76049__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__76049__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__76049__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__76049__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__76049__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__76049__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__76049__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.call(null,self__.dispatch_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return cljs.core.apply.call(null,target_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__76049 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__76049__1.call(this,self__);
case 2:
return G__76049__2.call(this,self__,a);
case 3:
return G__76049__3.call(this,self__,a,b);
case 4:
return G__76049__4.call(this,self__,a,b,c);
case 5:
return G__76049__5.call(this,self__,a,b,c,d);
case 6:
return G__76049__6.call(this,self__,a,b,c,d,e);
case 7:
return G__76049__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__76049__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__76049__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__76049__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__76049__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__76049__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__76049__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__76049__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__76049__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__76049__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__76049__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__76049__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__76049__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__76049__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__76049__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__76049__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76049.cljs$core$IFn$_invoke$arity$1 = G__76049__1;
G__76049.cljs$core$IFn$_invoke$arity$2 = G__76049__2;
G__76049.cljs$core$IFn$_invoke$arity$3 = G__76049__3;
G__76049.cljs$core$IFn$_invoke$arity$4 = G__76049__4;
G__76049.cljs$core$IFn$_invoke$arity$5 = G__76049__5;
G__76049.cljs$core$IFn$_invoke$arity$6 = G__76049__6;
G__76049.cljs$core$IFn$_invoke$arity$7 = G__76049__7;
G__76049.cljs$core$IFn$_invoke$arity$8 = G__76049__8;
G__76049.cljs$core$IFn$_invoke$arity$9 = G__76049__9;
G__76049.cljs$core$IFn$_invoke$arity$10 = G__76049__10;
G__76049.cljs$core$IFn$_invoke$arity$11 = G__76049__11;
G__76049.cljs$core$IFn$_invoke$arity$12 = G__76049__12;
G__76049.cljs$core$IFn$_invoke$arity$13 = G__76049__13;
G__76049.cljs$core$IFn$_invoke$arity$14 = G__76049__14;
G__76049.cljs$core$IFn$_invoke$arity$15 = G__76049__15;
G__76049.cljs$core$IFn$_invoke$arity$16 = G__76049__16;
G__76049.cljs$core$IFn$_invoke$arity$17 = G__76049__17;
G__76049.cljs$core$IFn$_invoke$arity$18 = G__76049__18;
G__76049.cljs$core$IFn$_invoke$arity$19 = G__76049__19;
G__76049.cljs$core$IFn$_invoke$arity$20 = G__76049__20;
G__76049.cljs$core$IFn$_invoke$arity$21 = G__76049__21;
G__76049.cljs$core$IFn$_invoke$arity$22 = G__76049__22;
return G__76049;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args76048){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args76048)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.call(null,self__.dispatch_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}

return cljs.core.apply.call(null,target_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$__$1));
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function __GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){
return cljs.core._write.call(null,writer__4218__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){
return (function (x,y){
if(cljs.core.truth_(pred.call(null,x,y))){
return (-1);
} else {
if(cljs.core.truth_(pred.call(null,y,x))){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
/**
* test [v] finds fn at key :test in var metadata and calls it,
* presuming failure will throw exception
*/
cljs.core.test = (function test(v){
var f = v.cljs$lang$test;
if(cljs.core.truth_(f)){
f.call(null);

return new cljs.core.Keyword(null,"ok","ok",967785236);
} else {
return new cljs.core.Keyword(null,"no-test","no-test",-1679482642);
}
});

//# sourceMappingURL=core.js.map