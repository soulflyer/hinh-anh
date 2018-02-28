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
var _STAR_current_trace_STAR_16535 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__16536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16537 = null;
var count__16538 = (0);
var i__16539 = (0);
while(true){
if((i__16539 < count__16538)){
var vec__16540 = cljs.core._nth.call(null,chunk__16537,i__16539);
var effect_key = cljs.core.nth.call(null,vec__16540,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16540,(1),null);
var temp__4655__auto___16556 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16556)){
var effect_fn_16557 = temp__4655__auto___16556;
effect_fn_16557.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__16558 = seq__16536;
var G__16559 = chunk__16537;
var G__16560 = count__16538;
var G__16561 = (i__16539 + (1));
seq__16536 = G__16558;
chunk__16537 = G__16559;
count__16538 = G__16560;
i__16539 = G__16561;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16536);
if(temp__4657__auto__){
var seq__16536__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16536__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__16536__$1);
var G__16562 = cljs.core.chunk_rest.call(null,seq__16536__$1);
var G__16563 = c__7767__auto__;
var G__16564 = cljs.core.count.call(null,c__7767__auto__);
var G__16565 = (0);
seq__16536 = G__16562;
chunk__16537 = G__16563;
count__16538 = G__16564;
i__16539 = G__16565;
continue;
} else {
var vec__16543 = cljs.core.first.call(null,seq__16536__$1);
var effect_key = cljs.core.nth.call(null,vec__16543,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16543,(1),null);
var temp__4655__auto___16566 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16566)){
var effect_fn_16567 = temp__4655__auto___16566;
effect_fn_16567.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__16568 = cljs.core.next.call(null,seq__16536__$1);
var G__16569 = null;
var G__16570 = (0);
var G__16571 = (0);
seq__16536 = G__16568;
chunk__16537 = G__16569;
count__16538 = G__16570;
i__16539 = G__16571;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16315__auto___16572 = re_frame.interop.now.call(null);
var duration__16316__auto___16573 = (end__16315__auto___16572 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16316__auto___16573,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16315__auto___16572);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_16535;
}} else {
var seq__16546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16547 = null;
var count__16548 = (0);
var i__16549 = (0);
while(true){
if((i__16549 < count__16548)){
var vec__16550 = cljs.core._nth.call(null,chunk__16547,i__16549);
var effect_key = cljs.core.nth.call(null,vec__16550,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16550,(1),null);
var temp__4655__auto___16574 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16574)){
var effect_fn_16575 = temp__4655__auto___16574;
effect_fn_16575.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__16576 = seq__16546;
var G__16577 = chunk__16547;
var G__16578 = count__16548;
var G__16579 = (i__16549 + (1));
seq__16546 = G__16576;
chunk__16547 = G__16577;
count__16548 = G__16578;
i__16549 = G__16579;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16546);
if(temp__4657__auto__){
var seq__16546__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16546__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__16546__$1);
var G__16580 = cljs.core.chunk_rest.call(null,seq__16546__$1);
var G__16581 = c__7767__auto__;
var G__16582 = cljs.core.count.call(null,c__7767__auto__);
var G__16583 = (0);
seq__16546 = G__16580;
chunk__16547 = G__16581;
count__16548 = G__16582;
i__16549 = G__16583;
continue;
} else {
var vec__16553 = cljs.core.first.call(null,seq__16546__$1);
var effect_key = cljs.core.nth.call(null,vec__16553,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16553,(1),null);
var temp__4655__auto___16584 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16584)){
var effect_fn_16585 = temp__4655__auto___16584;
effect_fn_16585.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__16586 = cljs.core.next.call(null,seq__16546__$1);
var G__16587 = null;
var G__16588 = (0);
var G__16589 = (0);
seq__16546 = G__16586;
chunk__16547 = G__16587;
count__16548 = G__16588;
i__16549 = G__16589;
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
var seq__16590 = cljs.core.seq.call(null,value);
var chunk__16591 = null;
var count__16592 = (0);
var i__16593 = (0);
while(true){
if((i__16593 < count__16592)){
var map__16594 = cljs.core._nth.call(null,chunk__16591,i__16593);
var map__16594__$1 = ((((!((map__16594 == null)))?((((map__16594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16594):map__16594);
var effect = map__16594__$1;
var ms = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16590,chunk__16591,count__16592,i__16593,map__16594,map__16594__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16590,chunk__16591,count__16592,i__16593,map__16594,map__16594__$1,effect,ms,dispatch))
,ms);
}

var G__16598 = seq__16590;
var G__16599 = chunk__16591;
var G__16600 = count__16592;
var G__16601 = (i__16593 + (1));
seq__16590 = G__16598;
chunk__16591 = G__16599;
count__16592 = G__16600;
i__16593 = G__16601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16590);
if(temp__4657__auto__){
var seq__16590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16590__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__16590__$1);
var G__16602 = cljs.core.chunk_rest.call(null,seq__16590__$1);
var G__16603 = c__7767__auto__;
var G__16604 = cljs.core.count.call(null,c__7767__auto__);
var G__16605 = (0);
seq__16590 = G__16602;
chunk__16591 = G__16603;
count__16592 = G__16604;
i__16593 = G__16605;
continue;
} else {
var map__16596 = cljs.core.first.call(null,seq__16590__$1);
var map__16596__$1 = ((((!((map__16596 == null)))?((((map__16596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16596):map__16596);
var effect = map__16596__$1;
var ms = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16590,chunk__16591,count__16592,i__16593,map__16596,map__16596__$1,effect,ms,dispatch,seq__16590__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16590,chunk__16591,count__16592,i__16593,map__16596,map__16596__$1,effect,ms,dispatch,seq__16590__$1,temp__4657__auto__))
,ms);
}

var G__16606 = cljs.core.next.call(null,seq__16590__$1);
var G__16607 = null;
var G__16608 = (0);
var G__16609 = (0);
seq__16590 = G__16606;
chunk__16591 = G__16607;
count__16592 = G__16608;
i__16593 = G__16609;
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
var seq__16610 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16611 = null;
var count__16612 = (0);
var i__16613 = (0);
while(true){
if((i__16613 < count__16612)){
var event = cljs.core._nth.call(null,chunk__16611,i__16613);
re_frame.router.dispatch.call(null,event);

var G__16614 = seq__16610;
var G__16615 = chunk__16611;
var G__16616 = count__16612;
var G__16617 = (i__16613 + (1));
seq__16610 = G__16614;
chunk__16611 = G__16615;
count__16612 = G__16616;
i__16613 = G__16617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16610);
if(temp__4657__auto__){
var seq__16610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16610__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__16610__$1);
var G__16618 = cljs.core.chunk_rest.call(null,seq__16610__$1);
var G__16619 = c__7767__auto__;
var G__16620 = cljs.core.count.call(null,c__7767__auto__);
var G__16621 = (0);
seq__16610 = G__16618;
chunk__16611 = G__16619;
count__16612 = G__16620;
i__16613 = G__16621;
continue;
} else {
var event = cljs.core.first.call(null,seq__16610__$1);
re_frame.router.dispatch.call(null,event);

var G__16622 = cljs.core.next.call(null,seq__16610__$1);
var G__16623 = null;
var G__16624 = (0);
var G__16625 = (0);
seq__16610 = G__16622;
chunk__16611 = G__16623;
count__16612 = G__16624;
i__16613 = G__16625;
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
var seq__16626 = cljs.core.seq.call(null,value);
var chunk__16627 = null;
var count__16628 = (0);
var i__16629 = (0);
while(true){
if((i__16629 < count__16628)){
var event = cljs.core._nth.call(null,chunk__16627,i__16629);
clear_event.call(null,event);

var G__16630 = seq__16626;
var G__16631 = chunk__16627;
var G__16632 = count__16628;
var G__16633 = (i__16629 + (1));
seq__16626 = G__16630;
chunk__16627 = G__16631;
count__16628 = G__16632;
i__16629 = G__16633;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16626);
if(temp__4657__auto__){
var seq__16626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16626__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__16626__$1);
var G__16634 = cljs.core.chunk_rest.call(null,seq__16626__$1);
var G__16635 = c__7767__auto__;
var G__16636 = cljs.core.count.call(null,c__7767__auto__);
var G__16637 = (0);
seq__16626 = G__16634;
chunk__16627 = G__16635;
count__16628 = G__16636;
i__16629 = G__16637;
continue;
} else {
var event = cljs.core.first.call(null,seq__16626__$1);
clear_event.call(null,event);

var G__16638 = cljs.core.next.call(null,seq__16626__$1);
var G__16639 = null;
var G__16640 = (0);
var G__16641 = (0);
seq__16626 = G__16638;
chunk__16627 = G__16639;
count__16628 = G__16640;
i__16629 = G__16641;
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