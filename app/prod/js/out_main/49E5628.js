goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25338__i = 0, G__25338__a = new Array(arguments.length -  0);
while (G__25338__i < G__25338__a.length) {G__25338__a[G__25338__i] = arguments[G__25338__i + 0]; ++G__25338__i;}
  args = new cljs.core.IndexedSeq(G__25338__a,0,null);
} 
return G__25337__delegate.call(this,args);};
G__25337.cljs$lang$maxFixedArity = 0;
G__25337.cljs$lang$applyTo = (function (arglist__25339){
var args = cljs.core.seq(arglist__25339);
return G__25337__delegate(args);
});
G__25337.cljs$core$IFn$_invoke$arity$variadic = G__25337__delegate;
return G__25337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25341__i = 0, G__25341__a = new Array(arguments.length -  0);
while (G__25341__i < G__25341__a.length) {G__25341__a[G__25341__i] = arguments[G__25341__i + 0]; ++G__25341__i;}
  args = new cljs.core.IndexedSeq(G__25341__a,0,null);
} 
return G__25340__delegate.call(this,args);};
G__25340.cljs$lang$maxFixedArity = 0;
G__25340.cljs$lang$applyTo = (function (arglist__25342){
var args = cljs.core.seq(arglist__25342);
return G__25340__delegate(args);
});
G__25340.cljs$core$IFn$_invoke$arity$variadic = G__25340__delegate;
return G__25340;
})()
;

return null;
});
