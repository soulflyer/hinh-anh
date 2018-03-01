// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25328__i = 0, G__25328__a = new Array(arguments.length -  0);
while (G__25328__i < G__25328__a.length) {G__25328__a[G__25328__i] = arguments[G__25328__i + 0]; ++G__25328__i;}
  args = new cljs.core.IndexedSeq(G__25328__a,0,null);
} 
return G__25327__delegate.call(this,args);};
G__25327.cljs$lang$maxFixedArity = 0;
G__25327.cljs$lang$applyTo = (function (arglist__25329){
var args = cljs.core.seq(arglist__25329);
return G__25327__delegate(args);
});
G__25327.cljs$core$IFn$_invoke$arity$variadic = G__25327__delegate;
return G__25327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25331__i = 0, G__25331__a = new Array(arguments.length -  0);
while (G__25331__i < G__25331__a.length) {G__25331__a[G__25331__i] = arguments[G__25331__i + 0]; ++G__25331__i;}
  args = new cljs.core.IndexedSeq(G__25331__a,0,null);
} 
return G__25330__delegate.call(this,args);};
G__25330.cljs$lang$maxFixedArity = 0;
G__25330.cljs$lang$applyTo = (function (arglist__25332){
var args = cljs.core.seq(arglist__25332);
return G__25330__delegate(args);
});
G__25330.cljs$core$IFn$_invoke$arity$variadic = G__25330__delegate;
return G__25330;
})()
;

return null;
});
