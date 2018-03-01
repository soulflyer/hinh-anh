// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
return mranderson047.re_frame.v0v10v2.re_frame.interop.after_render.call(null,(function (){
return mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,f);
}));
}),new cljs.core.Keyword(null,"yield","yield",177875009),mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick], null);

/**
 * @interface
 */
mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue = function(){};

mranderson047.re_frame.v0v10v2.re_frame.router.push = (function mranderson047$re_frame$v0v10v2$re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.push[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,event);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.push["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.push",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,id,callack);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,id,callack);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.add-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,f);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.remove-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger = (function mranderson047$re_frame$v0v10v2$re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,trigger,arg);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,trigger,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-fsm-trigger",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._add_event = (function mranderson047$re_frame$v0v10v2$re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,event);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-add-event",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-next-tick",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-run-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._exception = (function mranderson047$re_frame$v0v10v2$re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._exception[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,ex);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._exception["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,ex);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-exception",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._pause = (function mranderson047$re_frame$v0v10v2$re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._pause[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,later_fn);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._pause["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,later_fn);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-pause",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._resume = (function mranderson047$re_frame$v0v10v2$re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._resume[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._resume["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-resume",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks = (function mranderson047$re_frame$v0v10v2$re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$,event);
} else {
var m__8579__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue}
*/
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count.call(null,self__.queue);
while(true){
if((n === (0))){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__4655__auto__ = cljs.core.some.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.later_fns,cljs.core.keys.call(null,cljs.core.meta.call(null,cljs.core.peek.call(null,self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

var G__14035 = (n - (1));
n = G__14035;
continue;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: could not remove post event call back with id:",id);
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.call(null,self__.post_event_callback_fns,id);
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.call(null,self__.queue,event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue.call(null,this$__$1);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14009 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("mranderson047.re-frame.v0v10v2.re-frame.router","fsm-trigger","mranderson047.re-frame.v0v10v2.re-frame.router/fsm-trigger",-1325599698)], null));

try{try{var vec__14022 = (function (){var G__14025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__14025)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__14025)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14025,_STAR_current_trace_STAR_14009,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume.call(null,this$__$1);
});})(G__14025,_STAR_current_trace_STAR_14009,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__14022,(0),null);
var action_fn = cljs.core.nth.call(null,vec__14022,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14036 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14036;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13917__auto___14037 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__13918__auto___14038 = (end__13917__auto___14037 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__14010_14039 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__14011_14040 = null;
var count__14012_14041 = (0);
var i__14013_14042 = (0);
while(true){
if((i__14013_14042 < count__14012_14041)){
var vec__14014_14043 = cljs.core._nth.call(null,chunk__14011_14040,i__14013_14042);
var k__13919__auto___14044 = cljs.core.nth.call(null,vec__14014_14043,(0),null);
var cb__13920__auto___14045 = cljs.core.nth.call(null,vec__14014_14043,(1),null);
try{cb__13920__auto___14045.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14038,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14017){if((e14017 instanceof java.lang.Exception)){
var e__13921__auto___14046 = e14017;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14044,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14046);
} else {
throw e14017;

}
}

var G__14047 = seq__14010_14039;
var G__14048 = chunk__14011_14040;
var G__14049 = count__14012_14041;
var G__14050 = (i__14013_14042 + (1));
seq__14010_14039 = G__14047;
chunk__14011_14040 = G__14048;
count__14012_14041 = G__14049;
i__14013_14042 = G__14050;
continue;
} else {
var temp__4657__auto___14051 = cljs.core.seq.call(null,seq__14010_14039);
if(temp__4657__auto___14051){
var seq__14010_14052__$1 = temp__4657__auto___14051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14010_14052__$1)){
var c__8734__auto___14053 = cljs.core.chunk_first.call(null,seq__14010_14052__$1);
var G__14054 = cljs.core.chunk_rest.call(null,seq__14010_14052__$1);
var G__14055 = c__8734__auto___14053;
var G__14056 = cljs.core.count.call(null,c__8734__auto___14053);
var G__14057 = (0);
seq__14010_14039 = G__14054;
chunk__14011_14040 = G__14055;
count__14012_14041 = G__14056;
i__14013_14042 = G__14057;
continue;
} else {
var vec__14018_14058 = cljs.core.first.call(null,seq__14010_14052__$1);
var k__13919__auto___14059 = cljs.core.nth.call(null,vec__14018_14058,(0),null);
var cb__13920__auto___14060 = cljs.core.nth.call(null,vec__14018_14058,(1),null);
try{cb__13920__auto___14060.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13918__auto___14038,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e14021){if((e14021 instanceof java.lang.Exception)){
var e__13921__auto___14061 = e14021;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__13919__auto___14059,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__13921__auto___14061);
} else {
throw e14021;

}
}

var G__14062 = cljs.core.next.call(null,seq__14010_14052__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__14010_14039 = G__14062;
chunk__14011_14040 = G__14063;
count__14012_14041 = G__14064;
i__14013_14042 = G__14065;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14009;
}} else {
var vec__14026 = (function (){var G__14029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14029,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue.call(null,this$__$1);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause.call(null,this$__$1,arg);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception.call(null,this$__$1,arg);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__14029)){
if(cljs.core.empty_QMARK_.call(null,self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick.call(null,this$__$1);
});})(G__14029,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event.call(null,this$__$1,arg);
});})(G__14029,this$__$1))
], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__14029)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__14029,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume.call(null,this$__$1);
});})(G__14029,this$__$1))
], null);
} else {
throw cljs.core.ex_info.call(null,["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.call(null,vec__14026,(0),null);
var action_fn = cljs.core.nth.call(null,vec__14026,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__13922__auto___14066 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__13922__auto___14066;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return action_fn.call(null);
} else {
return null;
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
return later_fn.call(null,((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_.call(null,self__.post_event_callback_fns,id)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting existing post event call back with id:",id);
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.call(null,self__.post_event_callback_fns,id,callback_fn);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek.call(null,self__.queue);
try{mranderson047.re_frame.v0v10v2.re_frame.events.handle.call(null,event_v);

self__.queue = cljs.core.pop.call(null,self__.queue);

return mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks.call(null,this$__$1,event_v);
}catch (e14030){var ex = e14030;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger.call(null,this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__14031 = cljs.core.seq.call(null,cljs.core.vals.call(null,self__.post_event_callback_fns));
var chunk__14032 = null;
var count__14033 = (0);
var i__14034 = (0);
while(true){
if((i__14034 < count__14033)){
var callback = cljs.core._nth.call(null,chunk__14032,i__14034);
callback.call(null,event_v,self__.queue);


var G__14067 = seq__14031;
var G__14068 = chunk__14032;
var G__14069 = count__14033;
var G__14070 = (i__14034 + (1));
seq__14031 = G__14067;
chunk__14032 = G__14068;
count__14033 = G__14069;
i__14034 = G__14070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14031);
if(temp__4657__auto__){
var seq__14031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14031__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__14031__$1);
var G__14071 = cljs.core.chunk_rest.call(null,seq__14031__$1);
var G__14072 = c__8734__auto__;
var G__14073 = cljs.core.count.call(null,c__8734__auto__);
var G__14074 = (0);
seq__14031 = G__14071;
chunk__14032 = G__14072;
count__14033 = G__14073;
i__14034 = G__14074;
continue;
} else {
var callback = cljs.core.first.call(null,seq__14031__$1);
callback.call(null,event_v,self__.queue);


var G__14075 = cljs.core.next.call(null,seq__14031__$1);
var G__14076 = null;
var G__14077 = (0);
var G__14078 = (0);
seq__14031 = G__14075;
chunk__14032 = G__14076;
count__14033 = G__14077;
i__14034 = G__14078;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue;

throw ex;
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$type = true;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorStr = "mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue";

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue");
});

/**
 * Positional factory function for mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue.
 */
mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue = (function mranderson047$re_frame$v0v10v2$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

mranderson047.re_frame.v0v10v2.re_frame.router.event_queue = mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue.call(null,new cljs.core.Keyword(null,"idle","idle",-2007156861),mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.call(null,"re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router.push.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch_sync = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch_sync(event_v){
mranderson047.re_frame.v0v10v2.re_frame.events.handle.call(null,event_v);

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event_v);

return null;
});
