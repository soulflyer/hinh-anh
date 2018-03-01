// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_53994 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__53995 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53996 = null;
var count__53997 = (0);
var i__53998 = (0);
while(true){
if((i__53998 < count__53997)){
var vec__53999 = cljs.core._nth.call(null,chunk__53996,i__53998);
var effect_key = cljs.core.nth.call(null,vec__53999,(0),null);
var effect_value = cljs.core.nth.call(null,vec__53999,(1),null);
var temp__4655__auto___54015 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54015)){
var effect_fn_54016 = temp__4655__auto___54015;
effect_fn_54016.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54017 = seq__53995;
var G__54018 = chunk__53996;
var G__54019 = count__53997;
var G__54020 = (i__53998 + (1));
seq__53995 = G__54017;
chunk__53996 = G__54018;
count__53997 = G__54019;
i__53998 = G__54020;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53995);
if(temp__4657__auto__){
var seq__53995__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53995__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__53995__$1);
var G__54021 = cljs.core.chunk_rest.call(null,seq__53995__$1);
var G__54022 = c__47578__auto__;
var G__54023 = cljs.core.count.call(null,c__47578__auto__);
var G__54024 = (0);
seq__53995 = G__54021;
chunk__53996 = G__54022;
count__53997 = G__54023;
i__53998 = G__54024;
continue;
} else {
var vec__54002 = cljs.core.first.call(null,seq__53995__$1);
var effect_key = cljs.core.nth.call(null,vec__54002,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54002,(1),null);
var temp__4655__auto___54025 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54025)){
var effect_fn_54026 = temp__4655__auto___54025;
effect_fn_54026.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54027 = cljs.core.next.call(null,seq__53995__$1);
var G__54028 = null;
var G__54029 = (0);
var G__54030 = (0);
seq__53995 = G__54027;
chunk__53996 = G__54028;
count__53997 = G__54029;
i__53998 = G__54030;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__53834__auto___54031 = re_frame.interop.now.call(null);
var duration__53835__auto___54032 = (end__53834__auto___54031 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53835__auto___54032,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__53834__auto___54031);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_53994;
}} else {
var seq__54005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54006 = null;
var count__54007 = (0);
var i__54008 = (0);
while(true){
if((i__54008 < count__54007)){
var vec__54009 = cljs.core._nth.call(null,chunk__54006,i__54008);
var effect_key = cljs.core.nth.call(null,vec__54009,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54009,(1),null);
var temp__4655__auto___54033 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54033)){
var effect_fn_54034 = temp__4655__auto___54033;
effect_fn_54034.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54035 = seq__54005;
var G__54036 = chunk__54006;
var G__54037 = count__54007;
var G__54038 = (i__54008 + (1));
seq__54005 = G__54035;
chunk__54006 = G__54036;
count__54007 = G__54037;
i__54008 = G__54038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54005);
if(temp__4657__auto__){
var seq__54005__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54005__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__54005__$1);
var G__54039 = cljs.core.chunk_rest.call(null,seq__54005__$1);
var G__54040 = c__47578__auto__;
var G__54041 = cljs.core.count.call(null,c__47578__auto__);
var G__54042 = (0);
seq__54005 = G__54039;
chunk__54006 = G__54040;
count__54007 = G__54041;
i__54008 = G__54042;
continue;
} else {
var vec__54012 = cljs.core.first.call(null,seq__54005__$1);
var effect_key = cljs.core.nth.call(null,vec__54012,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54012,(1),null);
var temp__4655__auto___54043 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54043)){
var effect_fn_54044 = temp__4655__auto___54043;
effect_fn_54044.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54045 = cljs.core.next.call(null,seq__54005__$1);
var G__54046 = null;
var G__54047 = (0);
var G__54048 = (0);
seq__54005 = G__54045;
chunk__54006 = G__54046;
count__54007 = G__54047;
i__54008 = G__54048;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__54049 = cljs.core.seq.call(null,value);
var chunk__54050 = null;
var count__54051 = (0);
var i__54052 = (0);
while(true){
if((i__54052 < count__54051)){
var map__54053 = cljs.core._nth.call(null,chunk__54050,i__54052);
var map__54053__$1 = ((((!((map__54053 == null)))?((((map__54053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54053):map__54053);
var effect = map__54053__$1;
var ms = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54053__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54049,chunk__54050,count__54051,i__54052,map__54053,map__54053__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54049,chunk__54050,count__54051,i__54052,map__54053,map__54053__$1,effect,ms,dispatch))
,ms);
}


var G__54057 = seq__54049;
var G__54058 = chunk__54050;
var G__54059 = count__54051;
var G__54060 = (i__54052 + (1));
seq__54049 = G__54057;
chunk__54050 = G__54058;
count__54051 = G__54059;
i__54052 = G__54060;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54049);
if(temp__4657__auto__){
var seq__54049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54049__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__54049__$1);
var G__54061 = cljs.core.chunk_rest.call(null,seq__54049__$1);
var G__54062 = c__47578__auto__;
var G__54063 = cljs.core.count.call(null,c__47578__auto__);
var G__54064 = (0);
seq__54049 = G__54061;
chunk__54050 = G__54062;
count__54051 = G__54063;
i__54052 = G__54064;
continue;
} else {
var map__54055 = cljs.core.first.call(null,seq__54049__$1);
var map__54055__$1 = ((((!((map__54055 == null)))?((((map__54055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54055):map__54055);
var effect = map__54055__$1;
var ms = cljs.core.get.call(null,map__54055__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54055__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54049,chunk__54050,count__54051,i__54052,map__54055,map__54055__$1,effect,ms,dispatch,seq__54049__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54049,chunk__54050,count__54051,i__54052,map__54055,map__54055__$1,effect,ms,dispatch,seq__54049__$1,temp__4657__auto__))
,ms);
}


var G__54065 = cljs.core.next.call(null,seq__54049__$1);
var G__54066 = null;
var G__54067 = (0);
var G__54068 = (0);
seq__54049 = G__54065;
chunk__54050 = G__54066;
count__54051 = G__54067;
i__54052 = G__54068;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__54069 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__54070 = null;
var count__54071 = (0);
var i__54072 = (0);
while(true){
if((i__54072 < count__54071)){
var event = cljs.core._nth.call(null,chunk__54070,i__54072);
re_frame.router.dispatch.call(null,event);


var G__54073 = seq__54069;
var G__54074 = chunk__54070;
var G__54075 = count__54071;
var G__54076 = (i__54072 + (1));
seq__54069 = G__54073;
chunk__54070 = G__54074;
count__54071 = G__54075;
i__54072 = G__54076;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54069);
if(temp__4657__auto__){
var seq__54069__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54069__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__54069__$1);
var G__54077 = cljs.core.chunk_rest.call(null,seq__54069__$1);
var G__54078 = c__47578__auto__;
var G__54079 = cljs.core.count.call(null,c__47578__auto__);
var G__54080 = (0);
seq__54069 = G__54077;
chunk__54070 = G__54078;
count__54071 = G__54079;
i__54072 = G__54080;
continue;
} else {
var event = cljs.core.first.call(null,seq__54069__$1);
re_frame.router.dispatch.call(null,event);


var G__54081 = cljs.core.next.call(null,seq__54069__$1);
var G__54082 = null;
var G__54083 = (0);
var G__54084 = (0);
seq__54069 = G__54081;
chunk__54070 = G__54082;
count__54071 = G__54083;
i__54072 = G__54084;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__54085 = cljs.core.seq.call(null,value);
var chunk__54086 = null;
var count__54087 = (0);
var i__54088 = (0);
while(true){
if((i__54088 < count__54087)){
var event = cljs.core._nth.call(null,chunk__54086,i__54088);
clear_event.call(null,event);


var G__54089 = seq__54085;
var G__54090 = chunk__54086;
var G__54091 = count__54087;
var G__54092 = (i__54088 + (1));
seq__54085 = G__54089;
chunk__54086 = G__54090;
count__54087 = G__54091;
i__54088 = G__54092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54085);
if(temp__4657__auto__){
var seq__54085__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54085__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__54085__$1);
var G__54093 = cljs.core.chunk_rest.call(null,seq__54085__$1);
var G__54094 = c__47578__auto__;
var G__54095 = cljs.core.count.call(null,c__47578__auto__);
var G__54096 = (0);
seq__54085 = G__54093;
chunk__54086 = G__54094;
count__54087 = G__54095;
i__54088 = G__54096;
continue;
} else {
var event = cljs.core.first.call(null,seq__54085__$1);
clear_event.call(null,event);


var G__54097 = cljs.core.next.call(null,seq__54085__$1);
var G__54098 = null;
var G__54099 = (0);
var G__54100 = (0);
seq__54085 = G__54097;
chunk__54086 = G__54098;
count__54087 = G__54099;
i__54088 = G__54100;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
