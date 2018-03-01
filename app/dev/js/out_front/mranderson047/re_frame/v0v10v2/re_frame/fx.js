// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__59961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__59962 = null;
var count__59963 = (0);
var i__59964 = (0);
while(true){
if((i__59964 < count__59963)){
var vec__59965 = cljs.core._nth.call(null,chunk__59962,i__59964);
var effect_key = cljs.core.nth.call(null,vec__59965,(0),null);
var effect_value = cljs.core.nth.call(null,vec__59965,(1),null);
var temp__4655__auto___59971 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___59971)){
var effect_fn_59972 = temp__4655__auto___59971;
effect_fn_59972.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__59973 = seq__59961;
var G__59974 = chunk__59962;
var G__59975 = count__59963;
var G__59976 = (i__59964 + (1));
seq__59961 = G__59973;
chunk__59962 = G__59974;
count__59963 = G__59975;
i__59964 = G__59976;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59961);
if(temp__4657__auto__){
var seq__59961__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59961__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__59961__$1);
var G__59977 = cljs.core.chunk_rest.call(null,seq__59961__$1);
var G__59978 = c__47578__auto__;
var G__59979 = cljs.core.count.call(null,c__47578__auto__);
var G__59980 = (0);
seq__59961 = G__59977;
chunk__59962 = G__59978;
count__59963 = G__59979;
i__59964 = G__59980;
continue;
} else {
var vec__59968 = cljs.core.first.call(null,seq__59961__$1);
var effect_key = cljs.core.nth.call(null,vec__59968,(0),null);
var effect_value = cljs.core.nth.call(null,vec__59968,(1),null);
var temp__4655__auto___59981 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___59981)){
var effect_fn_59982 = temp__4655__auto___59981;
effect_fn_59982.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__59983 = cljs.core.next.call(null,seq__59961__$1);
var G__59984 = null;
var G__59985 = (0);
var G__59986 = (0);
seq__59961 = G__59983;
chunk__59962 = G__59984;
count__59963 = G__59985;
i__59964 = G__59986;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__59987 = cljs.core.seq.call(null,value);
var chunk__59988 = null;
var count__59989 = (0);
var i__59990 = (0);
while(true){
if((i__59990 < count__59989)){
var map__59991 = cljs.core._nth.call(null,chunk__59988,i__59990);
var map__59991__$1 = ((((!((map__59991 == null)))?((((map__59991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59991):map__59991);
var effect = map__59991__$1;
var ms = cljs.core.get.call(null,map__59991__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__59991__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__59987,chunk__59988,count__59989,i__59990,map__59991,map__59991__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__59987,chunk__59988,count__59989,i__59990,map__59991,map__59991__$1,effect,ms,dispatch))
,ms);
}


var G__59995 = seq__59987;
var G__59996 = chunk__59988;
var G__59997 = count__59989;
var G__59998 = (i__59990 + (1));
seq__59987 = G__59995;
chunk__59988 = G__59996;
count__59989 = G__59997;
i__59990 = G__59998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59987);
if(temp__4657__auto__){
var seq__59987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59987__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__59987__$1);
var G__59999 = cljs.core.chunk_rest.call(null,seq__59987__$1);
var G__60000 = c__47578__auto__;
var G__60001 = cljs.core.count.call(null,c__47578__auto__);
var G__60002 = (0);
seq__59987 = G__59999;
chunk__59988 = G__60000;
count__59989 = G__60001;
i__59990 = G__60002;
continue;
} else {
var map__59993 = cljs.core.first.call(null,seq__59987__$1);
var map__59993__$1 = ((((!((map__59993 == null)))?((((map__59993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59993):map__59993);
var effect = map__59993__$1;
var ms = cljs.core.get.call(null,map__59993__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__59993__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__59987,chunk__59988,count__59989,i__59990,map__59993,map__59993__$1,effect,ms,dispatch,seq__59987__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__59987,chunk__59988,count__59989,i__59990,map__59993,map__59993__$1,effect,ms,dispatch,seq__59987__$1,temp__4657__auto__))
,ms);
}


var G__60003 = cljs.core.next.call(null,seq__59987__$1);
var G__60004 = null;
var G__60005 = (0);
var G__60006 = (0);
seq__59987 = G__60003;
chunk__59988 = G__60004;
count__59989 = G__60005;
i__59990 = G__60006;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__60007 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__60008 = null;
var count__60009 = (0);
var i__60010 = (0);
while(true){
if((i__60010 < count__60009)){
var event = cljs.core._nth.call(null,chunk__60008,i__60010);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__60011 = seq__60007;
var G__60012 = chunk__60008;
var G__60013 = count__60009;
var G__60014 = (i__60010 + (1));
seq__60007 = G__60011;
chunk__60008 = G__60012;
count__60009 = G__60013;
i__60010 = G__60014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60007);
if(temp__4657__auto__){
var seq__60007__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60007__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__60007__$1);
var G__60015 = cljs.core.chunk_rest.call(null,seq__60007__$1);
var G__60016 = c__47578__auto__;
var G__60017 = cljs.core.count.call(null,c__47578__auto__);
var G__60018 = (0);
seq__60007 = G__60015;
chunk__60008 = G__60016;
count__60009 = G__60017;
i__60010 = G__60018;
continue;
} else {
var event = cljs.core.first.call(null,seq__60007__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__60019 = cljs.core.next.call(null,seq__60007__$1);
var G__60020 = null;
var G__60021 = (0);
var G__60022 = (0);
seq__60007 = G__60019;
chunk__60008 = G__60020;
count__60009 = G__60021;
i__60010 = G__60022;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__60023 = cljs.core.seq.call(null,value);
var chunk__60024 = null;
var count__60025 = (0);
var i__60026 = (0);
while(true){
if((i__60026 < count__60025)){
var event = cljs.core._nth.call(null,chunk__60024,i__60026);
clear_event.call(null,event);


var G__60027 = seq__60023;
var G__60028 = chunk__60024;
var G__60029 = count__60025;
var G__60030 = (i__60026 + (1));
seq__60023 = G__60027;
chunk__60024 = G__60028;
count__60025 = G__60029;
i__60026 = G__60030;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60023);
if(temp__4657__auto__){
var seq__60023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60023__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__60023__$1);
var G__60031 = cljs.core.chunk_rest.call(null,seq__60023__$1);
var G__60032 = c__47578__auto__;
var G__60033 = cljs.core.count.call(null,c__47578__auto__);
var G__60034 = (0);
seq__60023 = G__60031;
chunk__60024 = G__60032;
count__60025 = G__60033;
i__60026 = G__60034;
continue;
} else {
var event = cljs.core.first.call(null,seq__60023__$1);
clear_event.call(null,event);


var G__60035 = cljs.core.next.call(null,seq__60023__$1);
var G__60036 = null;
var G__60037 = (0);
var G__60038 = (0);
seq__60023 = G__60035;
chunk__60024 = G__60036;
count__60025 = G__60037;
i__60026 = G__60038;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
