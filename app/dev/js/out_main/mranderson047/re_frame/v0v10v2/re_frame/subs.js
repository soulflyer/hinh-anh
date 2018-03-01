// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__14208_14218 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__14209_14219 = null;
var count__14210_14220 = (0);
var i__14211_14221 = (0);
while(true){
if((i__14211_14221 < count__14210_14220)){
var vec__14212_14222 = cljs.core._nth.call(null,chunk__14209_14219,i__14211_14221);
var k_14223 = cljs.core.nth.call(null,vec__14212_14222,(0),null);
var rxn_14224 = cljs.core.nth.call(null,vec__14212_14222,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_14224);


var G__14225 = seq__14208_14218;
var G__14226 = chunk__14209_14219;
var G__14227 = count__14210_14220;
var G__14228 = (i__14211_14221 + (1));
seq__14208_14218 = G__14225;
chunk__14209_14219 = G__14226;
count__14210_14220 = G__14227;
i__14211_14221 = G__14228;
continue;
} else {
var temp__4657__auto___14229 = cljs.core.seq.call(null,seq__14208_14218);
if(temp__4657__auto___14229){
var seq__14208_14230__$1 = temp__4657__auto___14229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14208_14230__$1)){
var c__8734__auto___14231 = cljs.core.chunk_first.call(null,seq__14208_14230__$1);
var G__14232 = cljs.core.chunk_rest.call(null,seq__14208_14230__$1);
var G__14233 = c__8734__auto___14231;
var G__14234 = cljs.core.count.call(null,c__8734__auto___14231);
var G__14235 = (0);
seq__14208_14218 = G__14232;
chunk__14209_14219 = G__14233;
count__14210_14220 = G__14234;
i__14211_14221 = G__14235;
continue;
} else {
var vec__14215_14236 = cljs.core.first.call(null,seq__14208_14230__$1);
var k_14237 = cljs.core.nth.call(null,vec__14215_14236,(0),null);
var rxn_14238 = cljs.core.nth.call(null,vec__14215_14236,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_14238);


var G__14239 = cljs.core.next.call(null,seq__14208_14230__$1);
var G__14240 = null;
var G__14241 = (0);
var G__14242 = (0);
seq__14208_14218 = G__14239;
chunk__14209_14219 = G__14240;
count__14210_14220 = G__14241;
i__14211_14221 = G__14242;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson047.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14243 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14256 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14257 = (end__13917__auto___14256 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14244_14258 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14245_14259 = null;
var count__14246_14260 = (0);
var i__14247_14261 = (0);
while(true){
if((i__14247_14261 < count__14246_14260)){
var vec__14248_14262 = cljs.core._nth.call(null,chunk__14245_14259,i__14247_14261);
var k__13919__auto___14263 = cljs.core.nth.call(null,vec__14248_14262,(0),null);
var cb__13920__auto___14264 = cljs.core.nth.call(null,vec__14248_14262,(1),null);
try{cb__13920__auto___14264.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14257,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14251){if((e14251 instanceof java.lang.Exception)){
var e__13921__auto___14265 = e14251;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14263,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14265);
} else {
throw e14251;

}
}

var G__14266 = seq__14244_14258;
var G__14267 = chunk__14245_14259;
var G__14268 = count__14246_14260;
var G__14269 = (i__14247_14261 + (1));
seq__14244_14258 = G__14266;
chunk__14245_14259 = G__14267;
count__14246_14260 = G__14268;
i__14247_14261 = G__14269;
continue;
} else {
var temp__4657__auto___14270 = cljs.core.seq.call(null,seq__14244_14258);
if(temp__4657__auto___14270){
var seq__14244_14271__$1 = temp__4657__auto___14270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14244_14271__$1)){
var c__8734__auto___14272 = cljs.core.chunk_first.call(null,seq__14244_14271__$1);
var G__14273 = cljs.core.chunk_rest.call(null,seq__14244_14271__$1);
var G__14274 = c__8734__auto___14272;
var G__14275 = cljs.core.count.call(null,c__8734__auto___14272);
var G__14276 = (0);
seq__14244_14258 = G__14273;
chunk__14245_14259 = G__14274;
count__14246_14260 = G__14275;
i__14247_14261 = G__14276;
continue;
} else {
var vec__14252_14277 = cljs.core.first.call(null,seq__14244_14271__$1);
var k__13919__auto___14278 = cljs.core.nth.call(null,vec__14252_14277,(0),null);
var cb__13920__auto___14279 = cljs.core.nth.call(null,vec__14252_14277,(1),null);
try{cb__13920__auto___14279.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14257,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14255){if((e14255 instanceof java.lang.Exception)){
var e__13921__auto___14280 = e14255;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14278,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14280);
} else {
throw e14255;

}
}

var G__14281 = cljs.core.next.call(null,seq__14244_14271__$1);
var G__14282 = null;
var G__14283 = (0);
var G__14284 = (0);
seq__14244_14258 = G__14281;
chunk__14245_14259 = G__14282;
count__14246_14260 = G__14283;
i__14247_14261 = G__14284;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14243;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14285 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14285;

} else {
}

return r;
});
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__14287 = arguments.length;
switch (G__14287) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson047.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson047$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__14290 = arguments.length;
switch (G__14290) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14291 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14318 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14318;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14319 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14319;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14320 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14320;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14321 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14322 = (end__13917__auto___14321 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14292_14323 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14293_14324 = null;
var count__14294_14325 = (0);
var i__14295_14326 = (0);
while(true){
if((i__14295_14326 < count__14294_14325)){
var vec__14296_14327 = cljs.core._nth.call(null,chunk__14293_14324,i__14295_14326);
var k__13919__auto___14328 = cljs.core.nth.call(null,vec__14296_14327,(0),null);
var cb__13920__auto___14329 = cljs.core.nth.call(null,vec__14296_14327,(1),null);
try{cb__13920__auto___14329.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14322,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14299){if((e14299 instanceof java.lang.Exception)){
var e__13921__auto___14330 = e14299;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14328,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14330);
} else {
throw e14299;

}
}

var G__14331 = seq__14292_14323;
var G__14332 = chunk__14293_14324;
var G__14333 = count__14294_14325;
var G__14334 = (i__14295_14326 + (1));
seq__14292_14323 = G__14331;
chunk__14293_14324 = G__14332;
count__14294_14325 = G__14333;
i__14295_14326 = G__14334;
continue;
} else {
var temp__4657__auto___14335 = cljs.core.seq.call(null,seq__14292_14323);
if(temp__4657__auto___14335){
var seq__14292_14336__$1 = temp__4657__auto___14335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14292_14336__$1)){
var c__8734__auto___14337 = cljs.core.chunk_first.call(null,seq__14292_14336__$1);
var G__14338 = cljs.core.chunk_rest.call(null,seq__14292_14336__$1);
var G__14339 = c__8734__auto___14337;
var G__14340 = cljs.core.count.call(null,c__8734__auto___14337);
var G__14341 = (0);
seq__14292_14323 = G__14338;
chunk__14293_14324 = G__14339;
count__14294_14325 = G__14340;
i__14295_14326 = G__14341;
continue;
} else {
var vec__14300_14342 = cljs.core.first.call(null,seq__14292_14336__$1);
var k__13919__auto___14343 = cljs.core.nth.call(null,vec__14300_14342,(0),null);
var cb__13920__auto___14344 = cljs.core.nth.call(null,vec__14300_14342,(1),null);
try{cb__13920__auto___14344.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14322,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14303){if((e14303 instanceof java.lang.Exception)){
var e__13921__auto___14345 = e14303;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14343,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14345);
} else {
throw e14303;

}
}

var G__14346 = cljs.core.next.call(null,seq__14292_14336__$1);
var G__14347 = null;
var G__14348 = (0);
var G__14349 = (0);
seq__14292_14323 = G__14346;
chunk__14293_14324 = G__14347;
count__14294_14325 = G__14348;
i__14295_14326 = G__14349;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14291;
}} else {
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14350 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14350;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14351 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14351;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14352 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14352;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14304 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14353 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14353;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14354 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14354;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14355 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14355)){
var not_reactive_14356 = temp__4657__auto___14355;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14356);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14357 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14357;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304){
return (function (){
return handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_14304))
));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14358 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14359 = (end__13917__auto___14358 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14305_14360 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14306_14361 = null;
var count__14307_14362 = (0);
var i__14308_14363 = (0);
while(true){
if((i__14308_14363 < count__14307_14362)){
var vec__14309_14364 = cljs.core._nth.call(null,chunk__14306_14361,i__14308_14363);
var k__13919__auto___14365 = cljs.core.nth.call(null,vec__14309_14364,(0),null);
var cb__13920__auto___14366 = cljs.core.nth.call(null,vec__14309_14364,(1),null);
try{cb__13920__auto___14366.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14359,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14312){if((e14312 instanceof java.lang.Exception)){
var e__13921__auto___14367 = e14312;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14365,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14367);
} else {
throw e14312;

}
}

var G__14368 = seq__14305_14360;
var G__14369 = chunk__14306_14361;
var G__14370 = count__14307_14362;
var G__14371 = (i__14308_14363 + (1));
seq__14305_14360 = G__14368;
chunk__14306_14361 = G__14369;
count__14307_14362 = G__14370;
i__14308_14363 = G__14371;
continue;
} else {
var temp__4657__auto___14372 = cljs.core.seq.call(null,seq__14305_14360);
if(temp__4657__auto___14372){
var seq__14305_14373__$1 = temp__4657__auto___14372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14305_14373__$1)){
var c__8734__auto___14374 = cljs.core.chunk_first.call(null,seq__14305_14373__$1);
var G__14375 = cljs.core.chunk_rest.call(null,seq__14305_14373__$1);
var G__14376 = c__8734__auto___14374;
var G__14377 = cljs.core.count.call(null,c__8734__auto___14374);
var G__14378 = (0);
seq__14305_14360 = G__14375;
chunk__14306_14361 = G__14376;
count__14307_14362 = G__14377;
i__14308_14363 = G__14378;
continue;
} else {
var vec__14313_14379 = cljs.core.first.call(null,seq__14305_14373__$1);
var k__13919__auto___14380 = cljs.core.nth.call(null,vec__14313_14379,(0),null);
var cb__13920__auto___14381 = cljs.core.nth.call(null,vec__14313_14379,(1),null);
try{cb__13920__auto___14381.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14359,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14316){if((e14316 instanceof java.lang.Exception)){
var e__13921__auto___14382 = e14316;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14380,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14382);
} else {
throw e14316;

}
}

var G__14383 = cljs.core.next.call(null,seq__14305_14373__$1);
var G__14384 = null;
var G__14385 = (0);
var G__14386 = (0);
seq__14305_14360 = G__14383;
chunk__14306_14361 = G__14384;
count__14307_14362 = G__14385;
i__14308_14363 = G__14386;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14304;
}} else {
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14387 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14387;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14388 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14388;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___14389 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___14389)){
var not_reactive_14390 = temp__4657__auto___14389;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_14390);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14391 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14391;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__14392){
var vec__14393 = p__14392;
var k = cljs.core.nth.call(null,vec__14393,(0),null);
var v = cljs.core.nth.call(null,vec__14393,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14396 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14396;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson047$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__9064__auto__ = [];
var len__9057__auto___14429 = arguments.length;
var i__9058__auto___14430 = (0);
while(true){
if((i__9058__auto___14430 < len__9057__auto___14429)){
args__9064__auto__.push((arguments[i__9058__auto___14430]));

var G__14431 = (i__9058__auto___14430 + (1));
i__9058__auto___14430 = G__14431;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__14399 = cljs.core.count.call(null,input_args);
switch (G__14399) {
case (0):
return ((function (G__14399,computation_fn,input_args,err_header){
return (function() {
var G__14433 = null;
var G__14433__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__14433__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
G__14433 = function(_,___$1){
switch(arguments.length){
case 1:
return G__14433__1.call(this,_);
case 2:
return G__14433__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14433.cljs$core$IFn$_invoke$arity$1 = G__14433__1;
G__14433.cljs$core$IFn$_invoke$arity$2 = G__14433__2;
return G__14433;
})()
;})(G__14399,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__14400 = input_args;
var marker = cljs.core.nth.call(null,vec__14400,(0),null);
var vec = cljs.core.nth.call(null,vec__14400,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__14400,marker,vec,G__14399,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__14400,marker,vec,G__14399,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__14399,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__14399,computation_fn,input_args,err_header))

}
})();
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14403 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14434 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14434;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14435 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14436 = (end__13917__auto___14435 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14404_14437 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14405_14438 = null;
var count__14406_14439 = (0);
var i__14407_14440 = (0);
while(true){
if((i__14407_14440 < count__14406_14439)){
var vec__14408_14441 = cljs.core._nth.call(null,chunk__14405_14438,i__14407_14440);
var k__13919__auto___14442 = cljs.core.nth.call(null,vec__14408_14441,(0),null);
var cb__13920__auto___14443 = cljs.core.nth.call(null,vec__14408_14441,(1),null);
try{cb__13920__auto___14443.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14436,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14411){if((e14411 instanceof java.lang.Exception)){
var e__13921__auto___14444 = e14411;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14442,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14444);
} else {
throw e14411;

}
}

var G__14445 = seq__14404_14437;
var G__14446 = chunk__14405_14438;
var G__14447 = count__14406_14439;
var G__14448 = (i__14407_14440 + (1));
seq__14404_14437 = G__14445;
chunk__14405_14438 = G__14446;
count__14406_14439 = G__14447;
i__14407_14440 = G__14448;
continue;
} else {
var temp__4657__auto___14449 = cljs.core.seq.call(null,seq__14404_14437);
if(temp__4657__auto___14449){
var seq__14404_14450__$1 = temp__4657__auto___14449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14404_14450__$1)){
var c__8734__auto___14451 = cljs.core.chunk_first.call(null,seq__14404_14450__$1);
var G__14452 = cljs.core.chunk_rest.call(null,seq__14404_14450__$1);
var G__14453 = c__8734__auto___14451;
var G__14454 = cljs.core.count.call(null,c__8734__auto___14451);
var G__14455 = (0);
seq__14404_14437 = G__14452;
chunk__14405_14438 = G__14453;
count__14406_14439 = G__14454;
i__14407_14440 = G__14455;
continue;
} else {
var vec__14412_14456 = cljs.core.first.call(null,seq__14404_14450__$1);
var k__13919__auto___14457 = cljs.core.nth.call(null,vec__14412_14456,(0),null);
var cb__13920__auto___14458 = cljs.core.nth.call(null,vec__14412_14456,(1),null);
try{cb__13920__auto___14458.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14436,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14415){if((e14415 instanceof java.lang.Exception)){
var e__13921__auto___14459 = e14415;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14457,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14459);
} else {
throw e14415;

}
}

var G__14460 = cljs.core.next.call(null,seq__14404_14450__$1);
var G__14461 = null;
var G__14462 = (0);
var G__14463 = (0);
seq__14404_14437 = G__14460;
chunk__14405_14438 = G__14461;
count__14406_14439 = G__14462;
i__14407_14440 = G__14463;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14403;
}} else {
var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14464 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14464;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14416 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14465 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14465;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14466 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14467 = (end__13917__auto___14466 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14417_14468 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14418_14469 = null;
var count__14419_14470 = (0);
var i__14420_14471 = (0);
while(true){
if((i__14420_14471 < count__14419_14470)){
var vec__14421_14472 = cljs.core._nth.call(null,chunk__14418_14469,i__14420_14471);
var k__13919__auto___14473 = cljs.core.nth.call(null,vec__14421_14472,(0),null);
var cb__13920__auto___14474 = cljs.core.nth.call(null,vec__14421_14472,(1),null);
try{cb__13920__auto___14474.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14467,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14424){if((e14424 instanceof java.lang.Exception)){
var e__13921__auto___14475 = e14424;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14473,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14475);
} else {
throw e14424;

}
}

var G__14476 = seq__14417_14468;
var G__14477 = chunk__14418_14469;
var G__14478 = count__14419_14470;
var G__14479 = (i__14420_14471 + (1));
seq__14417_14468 = G__14476;
chunk__14418_14469 = G__14477;
count__14419_14470 = G__14478;
i__14420_14471 = G__14479;
continue;
} else {
var temp__4657__auto___14480 = cljs.core.seq.call(null,seq__14417_14468);
if(temp__4657__auto___14480){
var seq__14417_14481__$1 = temp__4657__auto___14480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14417_14481__$1)){
var c__8734__auto___14482 = cljs.core.chunk_first.call(null,seq__14417_14481__$1);
var G__14483 = cljs.core.chunk_rest.call(null,seq__14417_14481__$1);
var G__14484 = c__8734__auto___14482;
var G__14485 = cljs.core.count.call(null,c__8734__auto___14482);
var G__14486 = (0);
seq__14417_14468 = G__14483;
chunk__14418_14469 = G__14484;
count__14419_14470 = G__14485;
i__14420_14471 = G__14486;
continue;
} else {
var vec__14425_14487 = cljs.core.first.call(null,seq__14417_14481__$1);
var k__13919__auto___14488 = cljs.core.nth.call(null,vec__14425_14487,(0),null);
var cb__13920__auto___14489 = cljs.core.nth.call(null,vec__14425_14487,(1),null);
try{cb__13920__auto___14489.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14467,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14428){if((e14428 instanceof java.lang.Exception)){
var e__13921__auto___14490 = e14428;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14488,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14490);
} else {
throw e14428;

}
}

var G__14491 = cljs.core.next.call(null,seq__14417_14481__$1);
var G__14492 = null;
var G__14493 = (0);
var G__14494 = (0);
seq__14417_14468 = G__14491;
chunk__14418_14469 = G__14492;
count__14419_14470 = G__14493;
i__14420_14471 = G__14494;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14416;
}} else {
var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14495 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14495;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq14397){
var G__14398 = cljs.core.first.call(null,seq14397);
var seq14397__$1 = cljs.core.next.call(null,seq14397);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__14398,seq14397__$1);
});

