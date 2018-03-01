// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson047$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__59794_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__59794_SHARP_));
});
if(!(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___59795 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___59795)){
var not_i_59796 = temp__4657__auto___59795;
if(cljs.core.fn_QMARK_.call(null,not_i_59796)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_59796);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_59796);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson047.re_frame.v0v10v2.re_frame.events.register = (function mranderson047$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind,id,mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.handle = (function mranderson047$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_59797 = mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_59798 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson047.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__59750__auto___59811 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__59751__auto___59812 = (end__59750__auto___59811 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__59799_59813 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__59800_59814 = null;
var count__59801_59815 = (0);
var i__59802_59816 = (0);
while(true){
if((i__59802_59816 < count__59801_59815)){
var vec__59803_59817 = cljs.core._nth.call(null,chunk__59800_59814,i__59802_59816);
var k__59752__auto___59818 = cljs.core.nth.call(null,vec__59803_59817,(0),null);
var cb__59753__auto___59819 = cljs.core.nth.call(null,vec__59803_59817,(1),null);
try{cb__59753__auto___59819.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59751__auto___59812,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e59806){if((e59806 instanceof java.lang.Exception)){
var e__59754__auto___59820 = e59806;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__59752__auto___59818,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__59754__auto___59820);
} else {
throw e59806;

}
}

var G__59821 = seq__59799_59813;
var G__59822 = chunk__59800_59814;
var G__59823 = count__59801_59815;
var G__59824 = (i__59802_59816 + (1));
seq__59799_59813 = G__59821;
chunk__59800_59814 = G__59822;
count__59801_59815 = G__59823;
i__59802_59816 = G__59824;
continue;
} else {
var temp__4657__auto___59825 = cljs.core.seq.call(null,seq__59799_59813);
if(temp__4657__auto___59825){
var seq__59799_59826__$1 = temp__4657__auto___59825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59799_59826__$1)){
var c__47578__auto___59827 = cljs.core.chunk_first.call(null,seq__59799_59826__$1);
var G__59828 = cljs.core.chunk_rest.call(null,seq__59799_59826__$1);
var G__59829 = c__47578__auto___59827;
var G__59830 = cljs.core.count.call(null,c__47578__auto___59827);
var G__59831 = (0);
seq__59799_59813 = G__59828;
chunk__59800_59814 = G__59829;
count__59801_59815 = G__59830;
i__59802_59816 = G__59831;
continue;
} else {
var vec__59807_59832 = cljs.core.first.call(null,seq__59799_59826__$1);
var k__59752__auto___59833 = cljs.core.nth.call(null,vec__59807_59832,(0),null);
var cb__59753__auto___59834 = cljs.core.nth.call(null,vec__59807_59832,(1),null);
try{cb__59753__auto___59834.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59751__auto___59812,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e59810){if((e59810 instanceof java.lang.Exception)){
var e__59754__auto___59835 = e59810;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__59752__auto___59833,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__59754__auto___59835);
} else {
throw e59810;

}
}

var G__59836 = cljs.core.next.call(null,seq__59799_59826__$1);
var G__59837 = null;
var G__59838 = (0);
var G__59839 = (0);
seq__59799_59813 = G__59836;
chunk__59800_59814 = G__59837;
count__59801_59815 = G__59838;
i__59802_59816 = G__59839;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_59798;
}} else {
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_59797;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map
