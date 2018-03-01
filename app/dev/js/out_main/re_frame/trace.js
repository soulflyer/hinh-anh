// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
if(re_frame.trace.trace_enabled_QMARK_){
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21104){
var map__21105 = p__21104;
var map__21105__$1 = ((((!((map__21105 == null)))?((((map__21105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21105):map__21105);
var operation = cljs.core.get.call(null,map__21105__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__21105__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__21105__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__21105__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__7895__auto__ = child_of;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
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
var seq__21107_21119 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__21108_21120 = null;
var count__21109_21121 = (0);
var i__21110_21122 = (0);
while(true){
if((i__21110_21122 < count__21109_21121)){
var vec__21111_21123 = cljs.core._nth.call(null,chunk__21108_21120,i__21110_21122);
var k_21124 = cljs.core.nth.call(null,vec__21111_21123,(0),null);
var cb_21125 = cljs.core.nth.call(null,vec__21111_21123,(1),null);
try{cb_21125.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21114){var e_21126 = e21114;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21124,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21126);
}

var G__21127 = seq__21107_21119;
var G__21128 = chunk__21108_21120;
var G__21129 = count__21109_21121;
var G__21130 = (i__21110_21122 + (1));
seq__21107_21119 = G__21127;
chunk__21108_21120 = G__21128;
count__21109_21121 = G__21129;
i__21110_21122 = G__21130;
continue;
} else {
var temp__4657__auto___21131 = cljs.core.seq.call(null,seq__21107_21119);
if(temp__4657__auto___21131){
var seq__21107_21132__$1 = temp__4657__auto___21131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21107_21132__$1)){
var c__8734__auto___21133 = cljs.core.chunk_first.call(null,seq__21107_21132__$1);
var G__21134 = cljs.core.chunk_rest.call(null,seq__21107_21132__$1);
var G__21135 = c__8734__auto___21133;
var G__21136 = cljs.core.count.call(null,c__8734__auto___21133);
var G__21137 = (0);
seq__21107_21119 = G__21134;
chunk__21108_21120 = G__21135;
count__21109_21121 = G__21136;
i__21110_21122 = G__21137;
continue;
} else {
var vec__21115_21138 = cljs.core.first.call(null,seq__21107_21132__$1);
var k_21139 = cljs.core.nth.call(null,vec__21115_21138,(0),null);
var cb_21140 = cljs.core.nth.call(null,vec__21115_21138,(1),null);
try{cb_21140.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21118){var e_21141 = e21118;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21139,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21141);
}

var G__21142 = cljs.core.next.call(null,seq__21107_21132__$1);
var G__21143 = null;
var G__21144 = (0);
var G__21145 = (0);
seq__21107_21119 = G__21142;
chunk__21108_21120 = G__21143;
count__21109_21121 = G__21144;
i__21110_21122 = G__21145;
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
