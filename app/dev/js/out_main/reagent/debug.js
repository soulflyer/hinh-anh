// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
var G__15637__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15638__i = 0, G__15638__a = new Array(arguments.length -  0);
while (G__15638__i < G__15638__a.length) {G__15638__a[G__15638__i] = arguments[G__15638__i + 0]; ++G__15638__i;}
  args = new cljs.core.IndexedSeq(G__15638__a,0,null);
} 
return G__15637__delegate.call(this,args);};
G__15637.cljs$lang$maxFixedArity = 0;
G__15637.cljs$lang$applyTo = (function (arglist__15639){
var args = cljs.core.seq(arglist__15639);
return G__15637__delegate(args);
});
G__15637.cljs$core$IFn$_invoke$arity$variadic = G__15637__delegate;
return G__15637;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15640__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15641__i = 0, G__15641__a = new Array(arguments.length -  0);
while (G__15641__i < G__15641__a.length) {G__15641__a[G__15641__i] = arguments[G__15641__i + 0]; ++G__15641__i;}
  args = new cljs.core.IndexedSeq(G__15641__a,0,null);
} 
return G__15640__delegate.call(this,args);};
G__15640.cljs$lang$maxFixedArity = 0;
G__15640.cljs$lang$applyTo = (function (arglist__15642){
var args = cljs.core.seq(arglist__15642);
return G__15640__delegate(args);
});
G__15640.cljs$core$IFn$_invoke$arity$variadic = G__15640__delegate;
return G__15640;
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
