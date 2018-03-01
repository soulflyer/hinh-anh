// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var G__61362__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__61362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61363__i = 0, G__61363__a = new Array(arguments.length -  0);
while (G__61363__i < G__61363__a.length) {G__61363__a[G__61363__i] = arguments[G__61363__i + 0]; ++G__61363__i;}
  args = new cljs.core.IndexedSeq(G__61363__a,0,null);
} 
return G__61362__delegate.call(this,args);};
G__61362.cljs$lang$maxFixedArity = 0;
G__61362.cljs$lang$applyTo = (function (arglist__61364){
var args = cljs.core.seq(arglist__61364);
return G__61362__delegate(args);
});
G__61362.cljs$core$IFn$_invoke$arity$variadic = G__61362__delegate;
return G__61362;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__61365__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__61365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61366__i = 0, G__61366__a = new Array(arguments.length -  0);
while (G__61366__i < G__61366__a.length) {G__61366__a[G__61366__i] = arguments[G__61366__i + 0]; ++G__61366__i;}
  args = new cljs.core.IndexedSeq(G__61366__a,0,null);
} 
return G__61365__delegate.call(this,args);};
G__61365.cljs$lang$maxFixedArity = 0;
G__61365.cljs$lang$applyTo = (function (arglist__61367){
var args = cljs.core.seq(arglist__61367);
return G__61365__delegate(args);
});
G__61365.cljs$core$IFn$_invoke$arity$variadic = G__61365__delegate;
return G__61365;
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

//# sourceMappingURL=debug.js.map
