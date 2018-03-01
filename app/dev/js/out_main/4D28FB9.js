goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12872__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12873__i = 0, G__12873__a = new Array(arguments.length -  0);
while (G__12873__i < G__12873__a.length) {G__12873__a[G__12873__i] = arguments[G__12873__i + 0]; ++G__12873__i;}
  args = new cljs.core.IndexedSeq(G__12873__a,0,null);
} 
return G__12872__delegate.call(this,args);};
G__12872.cljs$lang$maxFixedArity = 0;
G__12872.cljs$lang$applyTo = (function (arglist__12874){
var args = cljs.core.seq(arglist__12874);
return G__12872__delegate(args);
});
G__12872.cljs$core$IFn$_invoke$arity$variadic = G__12872__delegate;
return G__12872;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12875__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12876__i = 0, G__12876__a = new Array(arguments.length -  0);
while (G__12876__i < G__12876__a.length) {G__12876__a[G__12876__i] = arguments[G__12876__i + 0]; ++G__12876__i;}
  args = new cljs.core.IndexedSeq(G__12876__a,0,null);
} 
return G__12875__delegate.call(this,args);};
G__12875.cljs$lang$maxFixedArity = 0;
G__12875.cljs$lang$applyTo = (function (arglist__12877){
var args = cljs.core.seq(arglist__12877);
return G__12875__delegate(args);
});
G__12875.cljs$core$IFn$_invoke$arity$variadic = G__12875__delegate;
return G__12875;
})()
;

return null;
});
