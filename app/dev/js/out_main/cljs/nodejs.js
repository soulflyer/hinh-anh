// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12863__i = 0, G__12863__a = new Array(arguments.length -  0);
while (G__12863__i < G__12863__a.length) {G__12863__a[G__12863__i] = arguments[G__12863__i + 0]; ++G__12863__i;}
  args = new cljs.core.IndexedSeq(G__12863__a,0,null);
} 
return G__12862__delegate.call(this,args);};
G__12862.cljs$lang$maxFixedArity = 0;
G__12862.cljs$lang$applyTo = (function (arglist__12864){
var args = cljs.core.seq(arglist__12864);
return G__12862__delegate(args);
});
G__12862.cljs$core$IFn$_invoke$arity$variadic = G__12862__delegate;
return G__12862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12866__i = 0, G__12866__a = new Array(arguments.length -  0);
while (G__12866__i < G__12866__a.length) {G__12866__a[G__12866__i] = arguments[G__12866__i + 0]; ++G__12866__i;}
  args = new cljs.core.IndexedSeq(G__12866__a,0,null);
} 
return G__12865__delegate.call(this,args);};
G__12865.cljs$lang$maxFixedArity = 0;
G__12865.cljs$lang$applyTo = (function (arglist__12867){
var args = cljs.core.seq(arglist__12867);
return G__12865__delegate(args);
});
G__12865.cljs$core$IFn$_invoke$arity$variadic = G__12865__delegate;
return G__12865;
})()
;

return null;
});
