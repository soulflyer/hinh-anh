// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__66181){
var map__66182 = p__66181;
var map__66182__$1 = ((((!((map__66182 == null)))?((((map__66182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66182):map__66182);
var operation = cljs.core.get.call(null,map__66182__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__66182__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__66182__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__66182__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__46739__auto__ = child_of;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
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
var seq__66184_66196 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__66185_66197 = null;
var count__66186_66198 = (0);
var i__66187_66199 = (0);
while(true){
if((i__66187_66199 < count__66186_66198)){
var vec__66188_66200 = cljs.core._nth.call(null,chunk__66185_66197,i__66187_66199);
var k_66201 = cljs.core.nth.call(null,vec__66188_66200,(0),null);
var cb_66202 = cljs.core.nth.call(null,vec__66188_66200,(1),null);
try{cb_66202.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e66191){var e_66203 = e66191;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66201,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_66203);
}

var G__66204 = seq__66184_66196;
var G__66205 = chunk__66185_66197;
var G__66206 = count__66186_66198;
var G__66207 = (i__66187_66199 + (1));
seq__66184_66196 = G__66204;
chunk__66185_66197 = G__66205;
count__66186_66198 = G__66206;
i__66187_66199 = G__66207;
continue;
} else {
var temp__4657__auto___66208 = cljs.core.seq.call(null,seq__66184_66196);
if(temp__4657__auto___66208){
var seq__66184_66209__$1 = temp__4657__auto___66208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66184_66209__$1)){
var c__47578__auto___66210 = cljs.core.chunk_first.call(null,seq__66184_66209__$1);
var G__66211 = cljs.core.chunk_rest.call(null,seq__66184_66209__$1);
var G__66212 = c__47578__auto___66210;
var G__66213 = cljs.core.count.call(null,c__47578__auto___66210);
var G__66214 = (0);
seq__66184_66196 = G__66211;
chunk__66185_66197 = G__66212;
count__66186_66198 = G__66213;
i__66187_66199 = G__66214;
continue;
} else {
var vec__66192_66215 = cljs.core.first.call(null,seq__66184_66209__$1);
var k_66216 = cljs.core.nth.call(null,vec__66192_66215,(0),null);
var cb_66217 = cljs.core.nth.call(null,vec__66192_66215,(1),null);
try{cb_66217.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e66195){var e_66218 = e66195;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66216,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_66218);
}

var G__66219 = cljs.core.next.call(null,seq__66184_66209__$1);
var G__66220 = null;
var G__66221 = (0);
var G__66222 = (0);
seq__66184_66196 = G__66219;
chunk__66185_66197 = G__66220;
count__66186_66198 = G__66221;
i__66187_66199 = G__66222;
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
