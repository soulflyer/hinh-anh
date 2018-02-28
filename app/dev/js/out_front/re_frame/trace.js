// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16337){
var map__16340 = p__16337;
var map__16340__$1 = ((((!((map__16340 == null)))?((((map__16340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16340):map__16340);
var operation = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__6948__auto__ = child_of;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__16354_16366 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16355_16367 = null;
var count__16356_16368 = (0);
var i__16357_16369 = (0);
while(true){
if((i__16357_16369 < count__16356_16368)){
var vec__16358_16370 = cljs.core._nth.call(null,chunk__16355_16367,i__16357_16369);
var k_16371 = cljs.core.nth.call(null,vec__16358_16370,(0),null);
var cb_16372 = cljs.core.nth.call(null,vec__16358_16370,(1),null);
try{cb_16372.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16361){var e_16373 = e16361;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16371,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16373);
}
var G__16374 = seq__16354_16366;
var G__16375 = chunk__16355_16367;
var G__16376 = count__16356_16368;
var G__16377 = (i__16357_16369 + (1));
seq__16354_16366 = G__16374;
chunk__16355_16367 = G__16375;
count__16356_16368 = G__16376;
i__16357_16369 = G__16377;
continue;
} else {
var temp__4657__auto___16378 = cljs.core.seq.call(null,seq__16354_16366);
if(temp__4657__auto___16378){
var seq__16354_16379__$1 = temp__4657__auto___16378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16354_16379__$1)){
var c__7767__auto___16380 = cljs.core.chunk_first.call(null,seq__16354_16379__$1);
var G__16381 = cljs.core.chunk_rest.call(null,seq__16354_16379__$1);
var G__16382 = c__7767__auto___16380;
var G__16383 = cljs.core.count.call(null,c__7767__auto___16380);
var G__16384 = (0);
seq__16354_16366 = G__16381;
chunk__16355_16367 = G__16382;
count__16356_16368 = G__16383;
i__16357_16369 = G__16384;
continue;
} else {
var vec__16362_16385 = cljs.core.first.call(null,seq__16354_16379__$1);
var k_16386 = cljs.core.nth.call(null,vec__16362_16385,(0),null);
var cb_16387 = cljs.core.nth.call(null,vec__16362_16385,(1),null);
try{cb_16387.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e16365){var e_16388 = e16365;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_16386,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_16388);
}
var G__16389 = cljs.core.next.call(null,seq__16354_16379__$1);
var G__16390 = null;
var G__16391 = (0);
var G__16392 = (0);
seq__16354_16366 = G__16389;
chunk__16355_16367 = G__16390;
count__16356_16368 = G__16391;
i__16357_16369 = G__16392;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map