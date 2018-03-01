// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var G__59235__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__59235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59236__i = 0, G__59236__a = new Array(arguments.length -  0);
while (G__59236__i < G__59236__a.length) {G__59236__a[G__59236__i] = arguments[G__59236__i + 0]; ++G__59236__i;}
  args = new cljs.core.IndexedSeq(G__59236__a,0,null);
} 
return G__59235__delegate.call(this,args);};
G__59235.cljs$lang$maxFixedArity = 0;
G__59235.cljs$lang$applyTo = (function (arglist__59237){
var args = cljs.core.seq(arglist__59237);
return G__59235__delegate(args);
});
G__59235.cljs$core$IFn$_invoke$arity$variadic = G__59235__delegate;
return G__59235;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__59238__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__59238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59239__i = 0, G__59239__a = new Array(arguments.length -  0);
while (G__59239__i < G__59239__a.length) {G__59239__a[G__59239__i] = arguments[G__59239__i + 0]; ++G__59239__i;}
  args = new cljs.core.IndexedSeq(G__59239__a,0,null);
} 
return G__59238__delegate.call(this,args);};
G__59238.cljs$lang$maxFixedArity = 0;
G__59238.cljs$lang$applyTo = (function (arglist__59240){
var args = cljs.core.seq(arglist__59240);
return G__59238__delegate(args);
});
G__59238.cljs$core$IFn$_invoke$arity$variadic = G__59238__delegate;
return G__59238;
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

//# sourceMappingURL=debug.js.map
