// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
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
var _STAR_current_trace_STAR_19738 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__19739 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19740 = null;
var count__19741 = (0);
var i__19742 = (0);
while(true){
if((i__19742 < count__19741)){
var vec__19743 = cljs.core._nth.call(null,chunk__19740,i__19742);
var effect_key = cljs.core.nth.call(null,vec__19743,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19743,(1),null);
var temp__4655__auto___19759 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19759)){
var effect_fn_19760 = temp__4655__auto___19759;
effect_fn_19760.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__19761 = seq__19739;
var G__19762 = chunk__19740;
var G__19763 = count__19741;
var G__19764 = (i__19742 + (1));
seq__19739 = G__19761;
chunk__19740 = G__19762;
count__19741 = G__19763;
i__19742 = G__19764;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19739);
if(temp__4657__auto__){
var seq__19739__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19739__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19739__$1);
var G__19765 = cljs.core.chunk_rest.call(null,seq__19739__$1);
var G__19766 = c__7767__auto__;
var G__19767 = cljs.core.count.call(null,c__7767__auto__);
var G__19768 = (0);
seq__19739 = G__19765;
chunk__19740 = G__19766;
count__19741 = G__19767;
i__19742 = G__19768;
continue;
} else {
var vec__19746 = cljs.core.first.call(null,seq__19739__$1);
var effect_key = cljs.core.nth.call(null,vec__19746,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19746,(1),null);
var temp__4655__auto___19769 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19769)){
var effect_fn_19770 = temp__4655__auto___19769;
effect_fn_19770.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__19771 = cljs.core.next.call(null,seq__19739__$1);
var G__19772 = null;
var G__19773 = (0);
var G__19774 = (0);
seq__19739 = G__19771;
chunk__19740 = G__19772;
count__19741 = G__19773;
i__19742 = G__19774;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__19518__auto___19775 = re_frame.interop.now.call(null);
var duration__19519__auto___19776 = (end__19518__auto___19775 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19519__auto___19776,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__19518__auto___19775);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19738;
}} else {
var seq__19749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__19750 = null;
var count__19751 = (0);
var i__19752 = (0);
while(true){
if((i__19752 < count__19751)){
var vec__19753 = cljs.core._nth.call(null,chunk__19750,i__19752);
var effect_key = cljs.core.nth.call(null,vec__19753,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19753,(1),null);
var temp__4655__auto___19777 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19777)){
var effect_fn_19778 = temp__4655__auto___19777;
effect_fn_19778.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__19779 = seq__19749;
var G__19780 = chunk__19750;
var G__19781 = count__19751;
var G__19782 = (i__19752 + (1));
seq__19749 = G__19779;
chunk__19750 = G__19780;
count__19751 = G__19781;
i__19752 = G__19782;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19749);
if(temp__4657__auto__){
var seq__19749__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19749__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19749__$1);
var G__19783 = cljs.core.chunk_rest.call(null,seq__19749__$1);
var G__19784 = c__7767__auto__;
var G__19785 = cljs.core.count.call(null,c__7767__auto__);
var G__19786 = (0);
seq__19749 = G__19783;
chunk__19750 = G__19784;
count__19751 = G__19785;
i__19752 = G__19786;
continue;
} else {
var vec__19756 = cljs.core.first.call(null,seq__19749__$1);
var effect_key = cljs.core.nth.call(null,vec__19756,(0),null);
var effect_value = cljs.core.nth.call(null,vec__19756,(1),null);
var temp__4655__auto___19787 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19787)){
var effect_fn_19788 = temp__4655__auto___19787;
effect_fn_19788.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__19789 = cljs.core.next.call(null,seq__19749__$1);
var G__19790 = null;
var G__19791 = (0);
var G__19792 = (0);
seq__19749 = G__19789;
chunk__19750 = G__19790;
count__19751 = G__19791;
i__19752 = G__19792;
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
var seq__19793 = cljs.core.seq.call(null,value);
var chunk__19794 = null;
var count__19795 = (0);
var i__19796 = (0);
while(true){
if((i__19796 < count__19795)){
var map__19797 = cljs.core._nth.call(null,chunk__19794,i__19796);
var map__19797__$1 = ((((!((map__19797 == null)))?((((map__19797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19797):map__19797);
var effect = map__19797__$1;
var ms = cljs.core.get.call(null,map__19797__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19797__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19793,chunk__19794,count__19795,i__19796,map__19797,map__19797__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19793,chunk__19794,count__19795,i__19796,map__19797,map__19797__$1,effect,ms,dispatch))
,ms);
}

var G__19801 = seq__19793;
var G__19802 = chunk__19794;
var G__19803 = count__19795;
var G__19804 = (i__19796 + (1));
seq__19793 = G__19801;
chunk__19794 = G__19802;
count__19795 = G__19803;
i__19796 = G__19804;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19793);
if(temp__4657__auto__){
var seq__19793__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19793__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19793__$1);
var G__19805 = cljs.core.chunk_rest.call(null,seq__19793__$1);
var G__19806 = c__7767__auto__;
var G__19807 = cljs.core.count.call(null,c__7767__auto__);
var G__19808 = (0);
seq__19793 = G__19805;
chunk__19794 = G__19806;
count__19795 = G__19807;
i__19796 = G__19808;
continue;
} else {
var map__19799 = cljs.core.first.call(null,seq__19793__$1);
var map__19799__$1 = ((((!((map__19799 == null)))?((((map__19799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19799):map__19799);
var effect = map__19799__$1;
var ms = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__19799__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__19793,chunk__19794,count__19795,i__19796,map__19799,map__19799__$1,effect,ms,dispatch,seq__19793__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__19793,chunk__19794,count__19795,i__19796,map__19799,map__19799__$1,effect,ms,dispatch,seq__19793__$1,temp__4657__auto__))
,ms);
}

var G__19809 = cljs.core.next.call(null,seq__19793__$1);
var G__19810 = null;
var G__19811 = (0);
var G__19812 = (0);
seq__19793 = G__19809;
chunk__19794 = G__19810;
count__19795 = G__19811;
i__19796 = G__19812;
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
var seq__19813 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__19814 = null;
var count__19815 = (0);
var i__19816 = (0);
while(true){
if((i__19816 < count__19815)){
var event = cljs.core._nth.call(null,chunk__19814,i__19816);
re_frame.router.dispatch.call(null,event);

var G__19817 = seq__19813;
var G__19818 = chunk__19814;
var G__19819 = count__19815;
var G__19820 = (i__19816 + (1));
seq__19813 = G__19817;
chunk__19814 = G__19818;
count__19815 = G__19819;
i__19816 = G__19820;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19813);
if(temp__4657__auto__){
var seq__19813__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19813__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19813__$1);
var G__19821 = cljs.core.chunk_rest.call(null,seq__19813__$1);
var G__19822 = c__7767__auto__;
var G__19823 = cljs.core.count.call(null,c__7767__auto__);
var G__19824 = (0);
seq__19813 = G__19821;
chunk__19814 = G__19822;
count__19815 = G__19823;
i__19816 = G__19824;
continue;
} else {
var event = cljs.core.first.call(null,seq__19813__$1);
re_frame.router.dispatch.call(null,event);

var G__19825 = cljs.core.next.call(null,seq__19813__$1);
var G__19826 = null;
var G__19827 = (0);
var G__19828 = (0);
seq__19813 = G__19825;
chunk__19814 = G__19826;
count__19815 = G__19827;
i__19816 = G__19828;
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
var seq__19829 = cljs.core.seq.call(null,value);
var chunk__19830 = null;
var count__19831 = (0);
var i__19832 = (0);
while(true){
if((i__19832 < count__19831)){
var event = cljs.core._nth.call(null,chunk__19830,i__19832);
clear_event.call(null,event);

var G__19833 = seq__19829;
var G__19834 = chunk__19830;
var G__19835 = count__19831;
var G__19836 = (i__19832 + (1));
seq__19829 = G__19833;
chunk__19830 = G__19834;
count__19831 = G__19835;
i__19832 = G__19836;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19829);
if(temp__4657__auto__){
var seq__19829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19829__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19829__$1);
var G__19837 = cljs.core.chunk_rest.call(null,seq__19829__$1);
var G__19838 = c__7767__auto__;
var G__19839 = cljs.core.count.call(null,c__7767__auto__);
var G__19840 = (0);
seq__19829 = G__19837;
chunk__19830 = G__19838;
count__19831 = G__19839;
i__19832 = G__19840;
continue;
} else {
var event = cljs.core.first.call(null,seq__19829__$1);
clear_event.call(null,event);

var G__19841 = cljs.core.next.call(null,seq__19829__$1);
var G__19842 = null;
var G__19843 = (0);
var G__19844 = (0);
seq__19829 = G__19841;
chunk__19830 = G__19842;
count__19831 = G__19843;
i__19832 = G__19844;
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
