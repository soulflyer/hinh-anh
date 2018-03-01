// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
var seq__14128 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14129 = null;
var count__14130 = (0);
var i__14131 = (0);
while(true){
if((i__14131 < count__14130)){
var vec__14132 = cljs.core._nth.call(null,chunk__14129,i__14131);
var effect_key = cljs.core.nth.call(null,vec__14132,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14132,(1),null);
var temp__4655__auto___14138 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14138)){
var effect_fn_14139 = temp__4655__auto___14138;
effect_fn_14139.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__14140 = seq__14128;
var G__14141 = chunk__14129;
var G__14142 = count__14130;
var G__14143 = (i__14131 + (1));
seq__14128 = G__14140;
chunk__14129 = G__14141;
count__14130 = G__14142;
i__14131 = G__14143;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14128);
if(temp__4657__auto__){
var seq__14128__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14128__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__14128__$1);
var G__14144 = cljs.core.chunk_rest.call(null,seq__14128__$1);
var G__14145 = c__8734__auto__;
var G__14146 = cljs.core.count.call(null,c__8734__auto__);
var G__14147 = (0);
seq__14128 = G__14144;
chunk__14129 = G__14145;
count__14130 = G__14146;
i__14131 = G__14147;
continue;
} else {
var vec__14135 = cljs.core.first.call(null,seq__14128__$1);
var effect_key = cljs.core.nth.call(null,vec__14135,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14135,(1),null);
var temp__4655__auto___14148 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14148)){
var effect_fn_14149 = temp__4655__auto___14148;
effect_fn_14149.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__14150 = cljs.core.next.call(null,seq__14128__$1);
var G__14151 = null;
var G__14152 = (0);
var G__14153 = (0);
seq__14128 = G__14150;
chunk__14129 = G__14151;
count__14130 = G__14152;
i__14131 = G__14153;
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
var seq__14154 = cljs.core.seq.call(null,value);
var chunk__14155 = null;
var count__14156 = (0);
var i__14157 = (0);
while(true){
if((i__14157 < count__14156)){
var map__14158 = cljs.core._nth.call(null,chunk__14155,i__14157);
var map__14158__$1 = ((((!((map__14158 == null)))?((((map__14158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14158):map__14158);
var effect = map__14158__$1;
var ms = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14158__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14154,chunk__14155,count__14156,i__14157,map__14158,map__14158__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__14154,chunk__14155,count__14156,i__14157,map__14158,map__14158__$1,effect,ms,dispatch))
,ms);
}


var G__14162 = seq__14154;
var G__14163 = chunk__14155;
var G__14164 = count__14156;
var G__14165 = (i__14157 + (1));
seq__14154 = G__14162;
chunk__14155 = G__14163;
count__14156 = G__14164;
i__14157 = G__14165;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14154);
if(temp__4657__auto__){
var seq__14154__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14154__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__14154__$1);
var G__14166 = cljs.core.chunk_rest.call(null,seq__14154__$1);
var G__14167 = c__8734__auto__;
var G__14168 = cljs.core.count.call(null,c__8734__auto__);
var G__14169 = (0);
seq__14154 = G__14166;
chunk__14155 = G__14167;
count__14156 = G__14168;
i__14157 = G__14169;
continue;
} else {
var map__14160 = cljs.core.first.call(null,seq__14154__$1);
var map__14160__$1 = ((((!((map__14160 == null)))?((((map__14160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14160):map__14160);
var effect = map__14160__$1;
var ms = cljs.core.get.call(null,map__14160__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14160__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14154,chunk__14155,count__14156,i__14157,map__14160,map__14160__$1,effect,ms,dispatch,seq__14154__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__14154,chunk__14155,count__14156,i__14157,map__14160,map__14160__$1,effect,ms,dispatch,seq__14154__$1,temp__4657__auto__))
,ms);
}


var G__14170 = cljs.core.next.call(null,seq__14154__$1);
var G__14171 = null;
var G__14172 = (0);
var G__14173 = (0);
seq__14154 = G__14170;
chunk__14155 = G__14171;
count__14156 = G__14172;
i__14157 = G__14173;
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
var seq__14174 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14175 = null;
var count__14176 = (0);
var i__14177 = (0);
while(true){
if((i__14177 < count__14176)){
var event = cljs.core._nth.call(null,chunk__14175,i__14177);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__14178 = seq__14174;
var G__14179 = chunk__14175;
var G__14180 = count__14176;
var G__14181 = (i__14177 + (1));
seq__14174 = G__14178;
chunk__14175 = G__14179;
count__14176 = G__14180;
i__14177 = G__14181;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14174);
if(temp__4657__auto__){
var seq__14174__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14174__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__14174__$1);
var G__14182 = cljs.core.chunk_rest.call(null,seq__14174__$1);
var G__14183 = c__8734__auto__;
var G__14184 = cljs.core.count.call(null,c__8734__auto__);
var G__14185 = (0);
seq__14174 = G__14182;
chunk__14175 = G__14183;
count__14176 = G__14184;
i__14177 = G__14185;
continue;
} else {
var event = cljs.core.first.call(null,seq__14174__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__14186 = cljs.core.next.call(null,seq__14174__$1);
var G__14187 = null;
var G__14188 = (0);
var G__14189 = (0);
seq__14174 = G__14186;
chunk__14175 = G__14187;
count__14176 = G__14188;
i__14177 = G__14189;
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
var seq__14190 = cljs.core.seq.call(null,value);
var chunk__14191 = null;
var count__14192 = (0);
var i__14193 = (0);
while(true){
if((i__14193 < count__14192)){
var event = cljs.core._nth.call(null,chunk__14191,i__14193);
clear_event.call(null,event);


var G__14194 = seq__14190;
var G__14195 = chunk__14191;
var G__14196 = count__14192;
var G__14197 = (i__14193 + (1));
seq__14190 = G__14194;
chunk__14191 = G__14195;
count__14192 = G__14196;
i__14193 = G__14197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14190);
if(temp__4657__auto__){
var seq__14190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14190__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__14190__$1);
var G__14198 = cljs.core.chunk_rest.call(null,seq__14190__$1);
var G__14199 = c__8734__auto__;
var G__14200 = cljs.core.count.call(null,c__8734__auto__);
var G__14201 = (0);
seq__14190 = G__14198;
chunk__14191 = G__14199;
count__14192 = G__14200;
i__14193 = G__14201;
continue;
} else {
var event = cljs.core.first.call(null,seq__14190__$1);
clear_event.call(null,event);


var G__14202 = cljs.core.next.call(null,seq__14190__$1);
var G__14203 = null;
var G__14204 = (0);
var G__14205 = (0);
seq__14190 = G__14202;
chunk__14191 = G__14203;
count__14192 = G__14204;
i__14193 = G__14205;
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
