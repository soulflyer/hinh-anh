// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, mranderson047.re-frame.v0v10v2.re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
mranderson047.re_frame.v0v10v2.re_frame.loggers.console = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$console(var_args){
var args__9064__auto__ = [];
var len__9057__auto___12941 = arguments.length;
var i__9058__auto___12942 = (0);
while(true){
if((i__9058__auto___12942 < len__9057__auto___12941)){
args__9064__auto__.push((arguments[i__9058__auto___12942]));

var G__12943 = (i__9058__auto___12942 + (1));
i__9058__auto___12942 = G__12943;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers)),args);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$applyTo = (function (seq12939){
var G__12940 = cljs.core.first.call(null,seq12939);
var seq12939__$1 = cljs.core.next.call(null,seq12939);
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__12940,seq12939__$1);
});

/**
 * Change the set (or a subset) of logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$set_loggers_BANG_(new_loggers){

return cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.get_loggers = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$get_loggers(){
return cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers);
});
