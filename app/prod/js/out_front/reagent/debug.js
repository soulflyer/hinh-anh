// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12717__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12718__i = 0, G__12718__a = new Array(arguments.length -  0);
while (G__12718__i < G__12718__a.length) {G__12718__a[G__12718__i] = arguments[G__12718__i + 0]; ++G__12718__i;}
  args = new cljs.core.IndexedSeq(G__12718__a,0);
} 
return G__12717__delegate.call(this,args);};
G__12717.cljs$lang$maxFixedArity = 0;
G__12717.cljs$lang$applyTo = (function (arglist__12719){
var args = cljs.core.seq(arglist__12719);
return G__12717__delegate(args);
});
G__12717.cljs$core$IFn$_invoke$arity$variadic = G__12717__delegate;
return G__12717;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12720__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12721__i = 0, G__12721__a = new Array(arguments.length -  0);
while (G__12721__i < G__12721__a.length) {G__12721__a[G__12721__i] = arguments[G__12721__i + 0]; ++G__12721__i;}
  args = new cljs.core.IndexedSeq(G__12721__a,0);
} 
return G__12720__delegate.call(this,args);};
G__12720.cljs$lang$maxFixedArity = 0;
G__12720.cljs$lang$applyTo = (function (arglist__12722){
var args = cljs.core.seq(arglist__12722);
return G__12720__delegate(args);
});
G__12720.cljs$core$IFn$_invoke$arity$variadic = G__12720__delegate;
return G__12720;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
