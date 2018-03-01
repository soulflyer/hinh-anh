// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
var make_chain = (function (p1__13961_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__13961_SHARP_));
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

var temp__4657__auto___13962 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___13962)){
var not_i_13963 = temp__4657__auto___13962;
if(cljs.core.fn_QMARK_.call(null,not_i_13963)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_13963);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_13963);
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
var _STAR_handling_STAR_13964 = mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_13965 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson047.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___13978 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___13979 = (end__13917__auto___13978 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__13966_13980 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__13967_13981 = null;
var count__13968_13982 = (0);
var i__13969_13983 = (0);
while(true){
if((i__13969_13983 < count__13968_13982)){
var vec__13970_13984 = cljs.core._nth.call(null,chunk__13967_13981,i__13969_13983);
var k__13919__auto___13985 = cljs.core.nth.call(null,vec__13970_13984,(0),null);
var cb__13920__auto___13986 = cljs.core.nth.call(null,vec__13970_13984,(1),null);
try{cb__13920__auto___13986.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___13979,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e13973){if((e13973 instanceof java.lang.Exception)){
var e__13921__auto___13987 = e13973;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___13985,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___13987);
} else {
throw e13973;

}
}

var G__13988 = seq__13966_13980;
var G__13989 = chunk__13967_13981;
var G__13990 = count__13968_13982;
var G__13991 = (i__13969_13983 + (1));
seq__13966_13980 = G__13988;
chunk__13967_13981 = G__13989;
count__13968_13982 = G__13990;
i__13969_13983 = G__13991;
continue;
} else {
var temp__4657__auto___13992 = cljs.core.seq.call(null,seq__13966_13980);
if(temp__4657__auto___13992){
var seq__13966_13993__$1 = temp__4657__auto___13992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13966_13993__$1)){
var c__8734__auto___13994 = cljs.core.chunk_first.call(null,seq__13966_13993__$1);
var G__13995 = cljs.core.chunk_rest.call(null,seq__13966_13993__$1);
var G__13996 = c__8734__auto___13994;
var G__13997 = cljs.core.count.call(null,c__8734__auto___13994);
var G__13998 = (0);
seq__13966_13980 = G__13995;
chunk__13967_13981 = G__13996;
count__13968_13982 = G__13997;
i__13969_13983 = G__13998;
continue;
} else {
var vec__13974_13999 = cljs.core.first.call(null,seq__13966_13993__$1);
var k__13919__auto___14000 = cljs.core.nth.call(null,vec__13974_13999,(0),null);
var cb__13920__auto___14001 = cljs.core.nth.call(null,vec__13974_13999,(1),null);
try{cb__13920__auto___14001.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___13979,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e13977){if((e13977 instanceof java.lang.Exception)){
var e__13921__auto___14002 = e13977;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14000,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14002);
} else {
throw e13977;

}
}

var G__14003 = cljs.core.next.call(null,seq__13966_13993__$1);
var G__14004 = null;
var G__14005 = (0);
var G__14006 = (0);
seq__13966_13980 = G__14003;
chunk__13967_13981 = G__14004;
count__13968_13982 = G__14005;
i__13969_13983 = G__14006;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_13965;
}} else {
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_13964;
}}
} else {
return null;
}
});
