// Compiled by ClojureScript 1.9.473 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12457__i = 0, G__12457__a = new Array(arguments.length -  0);
while (G__12457__i < G__12457__a.length) {G__12457__a[G__12457__i] = arguments[G__12457__i + 0]; ++G__12457__i;}
  args = new cljs.core.IndexedSeq(G__12457__a,0);
} 
return G__12456__delegate.call(this,args);};
G__12456.cljs$lang$maxFixedArity = 0;
G__12456.cljs$lang$applyTo = (function (arglist__12458){
var args = cljs.core.seq(arglist__12458);
return G__12456__delegate(args);
});
G__12456.cljs$core$IFn$_invoke$arity$variadic = G__12456__delegate;
return G__12456;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12460__i = 0, G__12460__a = new Array(arguments.length -  0);
while (G__12460__i < G__12460__a.length) {G__12460__a[G__12460__i] = arguments[G__12460__i + 0]; ++G__12460__i;}
  args = new cljs.core.IndexedSeq(G__12460__a,0);
} 
return G__12459__delegate.call(this,args);};
G__12459.cljs$lang$maxFixedArity = 0;
G__12459.cljs$lang$applyTo = (function (arglist__12461){
var args = cljs.core.seq(arglist__12461);
return G__12459__delegate(args);
});
G__12459.cljs$core$IFn$_invoke$arity$variadic = G__12459__delegate;
return G__12459;
})()
;

return null;
});
