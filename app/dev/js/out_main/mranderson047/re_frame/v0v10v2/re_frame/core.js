// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch = mranderson047.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson047.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson047.re_frame.v0v10v2.re_frame.core.subscribe = mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.subs.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.fx.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson047.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson047.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__14499 = arguments.length;
switch (G__14499) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__14502 = arguments.length;
switch (G__14502) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__14505 = arguments.length;
switch (G__14505) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson047.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.debug = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson047.re_frame.v0v10v2.re_frame.core.path = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson047.re_frame.v0v10v2.re_frame.core.enrich = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson047.re_frame.v0v10v2.re_frame.core.trim_v = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson047.re_frame.v0v10v2.re_frame.core.after = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson047.re_frame.v0v10v2.re_frame.core.on_changes = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson047.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson047.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson047.re_frame.v0v10v2.re_frame.core.get_effect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson047.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson047.re_frame.v0v10v2.re_frame.core.enqueue = mranderson047.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson047.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson047.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson047.re_frame.v0v10v2.re_frame.core.console = mranderson047.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson047.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson047.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson047$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_14511 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_14512 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__14507_14513 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_14512,original_subs_14511));
var chunk__14508_14514 = null;
var count__14509_14515 = (0);
var i__14510_14516 = (0);
while(true){
if((i__14510_14516 < count__14509_14515)){
var sub_14517 = cljs.core._nth.call(null,chunk__14508_14514,i__14510_14516);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_14517);


var G__14518 = seq__14507_14513;
var G__14519 = chunk__14508_14514;
var G__14520 = count__14509_14515;
var G__14521 = (i__14510_14516 + (1));
seq__14507_14513 = G__14518;
chunk__14508_14514 = G__14519;
count__14509_14515 = G__14520;
i__14510_14516 = G__14521;
continue;
} else {
var temp__4657__auto___14522 = cljs.core.seq.call(null,seq__14507_14513);
if(temp__4657__auto___14522){
var seq__14507_14523__$1 = temp__4657__auto___14522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14507_14523__$1)){
var c__8734__auto___14524 = cljs.core.chunk_first.call(null,seq__14507_14523__$1);
var G__14525 = cljs.core.chunk_rest.call(null,seq__14507_14523__$1);
var G__14526 = c__8734__auto___14524;
var G__14527 = cljs.core.count.call(null,c__8734__auto___14524);
var G__14528 = (0);
seq__14507_14513 = G__14525;
chunk__14508_14514 = G__14526;
count__14509_14515 = G__14527;
i__14510_14516 = G__14528;
continue;
} else {
var sub_14529 = cljs.core.first.call(null,seq__14507_14523__$1);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_14529);


var G__14530 = cljs.core.next.call(null,seq__14507_14523__$1);
var G__14531 = null;
var G__14532 = (0);
var G__14533 = (0);
seq__14507_14513 = G__14530;
chunk__14508_14514 = G__14531;
count__14509_14515 = G__14532;
i__14510_14516 = G__14533;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__14535 = arguments.length;
switch (G__14535) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,id,f);
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson047.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,id);
});
mranderson047.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson047$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__9064__auto__ = [];
var len__9057__auto___14538 = arguments.length;
var i__9058__auto___14539 = (0);
while(true){
if((i__9058__auto___14539 < len__9057__auto___14538)){
args__9064__auto__.push((arguments[i__9058__auto___14539]));

var G__14540 = (i__9058__auto___14539 + (1));
i__9058__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson047.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq14537){
return mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14537));
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson047$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__9064__auto__ = [];
var len__9057__auto___14542 = arguments.length;
var i__9058__auto___14543 = (0);
while(true){
if((i__9058__auto___14543 < len__9057__auto___14542)){
args__9064__auto__.push((arguments[i__9058__auto___14543]));

var G__14544 = (i__9058__auto___14543 + (1));
i__9058__auto___14543 = G__14544;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson047.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq14541){
return mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14541));
});

