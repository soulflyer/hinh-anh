// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13056__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13057__i = 0, G__13057__a = new Array(arguments.length -  0);
while (G__13057__i < G__13057__a.length) {G__13057__a[G__13057__i] = arguments[G__13057__i + 0]; ++G__13057__i;}
  args = new cljs.core.IndexedSeq(G__13057__a,0,null);
} 
return G__13056__delegate.call(this,args);};
G__13056.cljs$lang$maxFixedArity = 0;
G__13056.cljs$lang$applyTo = (function (arglist__13058){
var args = cljs.core.seq(arglist__13058);
return G__13056__delegate(args);
});
G__13056.cljs$core$IFn$_invoke$arity$variadic = G__13056__delegate;
return G__13056;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13059__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13060__i = 0, G__13060__a = new Array(arguments.length -  0);
while (G__13060__i < G__13060__a.length) {G__13060__a[G__13060__i] = arguments[G__13060__i + 0]; ++G__13060__i;}
  args = new cljs.core.IndexedSeq(G__13060__a,0,null);
} 
return G__13059__delegate.call(this,args);};
G__13059.cljs$lang$maxFixedArity = 0;
G__13059.cljs$lang$applyTo = (function (arglist__13061){
var args = cljs.core.seq(arglist__13061);
return G__13059__delegate(args);
});
G__13059.cljs$core$IFn$_invoke$arity$variadic = G__13059__delegate;
return G__13059;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson047$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});
