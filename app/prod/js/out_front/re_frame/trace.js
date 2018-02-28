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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19540){
var map__19543 = p__19540;
var map__19543__$1 = ((((!((map__19543 == null)))?((((map__19543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19543):map__19543);
var operation = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__19543__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__19557_19569 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__19558_19570 = null;
var count__19559_19571 = (0);
var i__19560_19572 = (0);
while(true){
if((i__19560_19572 < count__19559_19571)){
var vec__19561_19573 = cljs.core._nth.call(null,chunk__19558_19570,i__19560_19572);
var k_19574 = cljs.core.nth.call(null,vec__19561_19573,(0),null);
var cb_19575 = cljs.core.nth.call(null,vec__19561_19573,(1),null);
try{cb_19575.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e19564){var e_19576 = e19564;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_19574,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_19576);
}
var G__19577 = seq__19557_19569;
var G__19578 = chunk__19558_19570;
var G__19579 = count__19559_19571;
var G__19580 = (i__19560_19572 + (1));
seq__19557_19569 = G__19577;
chunk__19558_19570 = G__19578;
count__19559_19571 = G__19579;
i__19560_19572 = G__19580;
continue;
} else {
var temp__4657__auto___19581 = cljs.core.seq.call(null,seq__19557_19569);
if(temp__4657__auto___19581){
var seq__19557_19582__$1 = temp__4657__auto___19581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19557_19582__$1)){
var c__7767__auto___19583 = cljs.core.chunk_first.call(null,seq__19557_19582__$1);
var G__19584 = cljs.core.chunk_rest.call(null,seq__19557_19582__$1);
var G__19585 = c__7767__auto___19583;
var G__19586 = cljs.core.count.call(null,c__7767__auto___19583);
var G__19587 = (0);
seq__19557_19569 = G__19584;
chunk__19558_19570 = G__19585;
count__19559_19571 = G__19586;
i__19560_19572 = G__19587;
continue;
} else {
var vec__19565_19588 = cljs.core.first.call(null,seq__19557_19582__$1);
var k_19589 = cljs.core.nth.call(null,vec__19565_19588,(0),null);
var cb_19590 = cljs.core.nth.call(null,vec__19565_19588,(1),null);
try{cb_19590.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e19568){var e_19591 = e19568;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_19589,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_19591);
}
var G__19592 = cljs.core.next.call(null,seq__19557_19582__$1);
var G__19593 = null;
var G__19594 = (0);
var G__19595 = (0);
seq__19557_19569 = G__19592;
chunk__19558_19570 = G__19593;
count__19559_19571 = G__19594;
i__19560_19572 = G__19595;
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
