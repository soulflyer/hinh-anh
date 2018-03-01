// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('day8.re_frame_10x.utils.localstorage');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.styles');
goog.require('clojure.set');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('re_frame.trace');
day8.re_frame_10x.events.fixed_after = (function day8$re_frame_10x$events$fixed_after(f){
return mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$events$fixed_after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
f.call(null,db,event);

return context;
}));
});
day8.re_frame_10x.events.log_trace_QMARK_ = (function day8$re_frame_10x$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814)));
var component_path = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if(!(render_operation_QMARK_)){
return true;
} else {
return !(clojure.string.includes_QMARK_.call(null,component_path,"devtools outer"));
}
});
day8.re_frame_10x.events.disable_tracing_BANG_ = (function day8$re_frame_10x$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881));
});
day8.re_frame_10x.events.enable_tracing_BANG_ = (function day8$re_frame_10x$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881),(function (p1__66432_SHARP_){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),p1__66432_SHARP_], null));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.events.dissoc_in = (function day8$re_frame_10x$events$dissoc_in(m,p__66433){
var vec__66434 = p__66433;
var seq__66435 = cljs.core.seq.call(null,vec__66434);
var first__66436 = cljs.core.first.call(null,seq__66435);
var seq__66435__$1 = cljs.core.next.call(null,seq__66435);
var k = first__66436;
var ks = seq__66435__$1;
var keys = vec__66434;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = day8.re_frame_10x.events.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
day8.re_frame_10x.events.read_string_maybe = (function day8$re_frame_10x$events$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.call(null,s);
}catch (e66437){var e = e66437;
return null;
}});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__66438){
var vec__66439 = p__66438;
var _ = cljs.core.nth.call(null,vec__66439,(0),null);
var width_PERCENT_ = cljs.core.nth.call(null,vec__66439,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"panel-width-ratio",(function (){var x__47089__auto__ = width_PERCENT_;
var y__47090__auto__ = 0.05;
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
})());

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__47089__auto__ = width_PERCENT_;
var y__47090__auto__ = 0.05;
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
})());
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__66442){
var vec__66443 = p__66442;
var _ = cljs.core.nth.call(null,vec__66443,(0),null);
var selected_tab = cljs.core.nth.call(null,vec__66443,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"selected-tab",selected_tab);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null),cljs.core.not);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__66446){
var vec__66447 = p__66446;
var _ = cljs.core.nth.call(null,vec__66447,(0),null);
var show_panel_QMARK_ = cljs.core.nth.call(null,vec__66447,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-panel",show_panel_QMARK_);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805),(function (db,_){
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_.call(null);

location.reload();

return db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__46739__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame_10x.events.enable_tracing_BANG_.call(null);
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame_10x.events.disable_tracing_BANG_.call(null);
}
}

day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"using-trace?",using_trace_QMARK_);

day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-panel",now_showing_QMARK_);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","pause","settings/pause",1369084469),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null),true);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("settings","play","settings/play",870988221),(function (p__66450,_){
var map__66451 = p__66450;
var map__66451__$1 = ((((!((map__66451 == null)))?((((map__66451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66451):map__66451);
var db = cljs.core.get.call(null,map__66451__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),null], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),(function (db,p__66453){
var vec__66454 = p__66453;
var _ = cljs.core.nth.call(null,vec__66454,(0),null);
var num_str = cljs.core.nth.call(null,vec__66454,(1),null);
var num = parseInt(num_str);
var num__$1 = (((cljs.core.not.call(null,isNaN(num))) && (cljs.core.pos_int_QMARK_.call(null,num)))?num:(5));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"retained-epochs",num__$1);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null),num__$1);
}));
day8.re_frame_10x.events.ignored_event_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66457_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"ignored-events",p1__66457_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__66458){
var vec__66459 = p__66458;
var _ = cljs.core.nth.call(null,vec__66459,(0),null);
var id = cljs.core.nth.call(null,vec__66459,(1),null);
return cljs.core.dissoc.call(null,ignored_events,id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__66462){
var vec__66463 = p__66462;
var _ = cljs.core.nth.call(null,vec__66463,(0),null);
var id = cljs.core.nth.call(null,vec__66463,(1),null);
var event_str = cljs.core.nth.call(null,vec__66463,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe.call(null,event_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),((function (event,vec__66463,_,id,event_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__66463,_,id,event_str))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),day8.re_frame_10x.events.ignored_event_mw,(function (_,p__66466){
var vec__66467 = p__66466;
var ___$1 = cljs.core.nth.call(null,vec__66467,(0),null);
var ignored_events = cljs.core.nth.call(null,vec__66467,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.filtered_view_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66470_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"filtered-view-trace",p1__66470_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid.call(null);
return cljs.core.assoc.call(null,filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__66471){
var vec__66472 = p__66471;
var _ = cljs.core.nth.call(null,vec__66472,(0),null);
var id = cljs.core.nth.call(null,vec__66472,(1),null);
return cljs.core.dissoc.call(null,filtered_view_trace,id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__66475){
var vec__66476 = p__66475;
var _ = cljs.core.nth.call(null,vec__66476,(0),null);
var id = cljs.core.nth.call(null,vec__66476,(1),null);
var ns_str = cljs.core.nth.call(null,vec__66476,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe.call(null,ns_str);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),((function (event,vec__66476,_,id,ns_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__66476,_,id,ns_str))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),day8.re_frame_10x.events.filtered_view_trace_mw,(function (_,p__66479){
var vec__66480 = p__66479;
var ___$1 = cljs.core.nth.call(null,vec__66480,(0),null);
var ignored_events = cljs.core.nth.call(null,vec__66480,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.low_level_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66483_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"low-level-trace",p1__66483_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),day8.re_frame_10x.events.low_level_trace_mw,(function (_,p__66484){
var vec__66485 = p__66484;
var ___$1 = cljs.core.nth.call(null,vec__66485,(0),null);
var low_level = cljs.core.nth.call(null,vec__66485,(1),null);
return low_level;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),day8.re_frame_10x.events.low_level_trace_mw,(function (low_level,p__66488){
var vec__66489 = p__66488;
var _ = cljs.core.nth.call(null,vec__66489,(0),null);
var trace_type = cljs.core.nth.call(null,vec__66489,(1),null);
var capture_QMARK_ = cljs.core.nth.call(null,vec__66489,(2),null);
return cljs.core.assoc.call(null,low_level,trace_type,capture_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),(function (db,p__66492){
var vec__66493 = p__66492;
var _ = cljs.core.nth.call(null,vec__66493,(0),null);
var debug_QMARK_ = cljs.core.nth.call(null,vec__66493,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),debug_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66496_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-follows-events?",p1__66496_SHARP_);
}))], null),(function (db,p__66497){
var vec__66498 = p__66497;
var _ = cljs.core.nth.call(null,vec__66498,(0),null);
var follows_events_QMARK_ = cljs.core.nth.call(null,vec__66498,(1),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.events.mount = (function day8$re_frame_10x$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-10x--");
var doc = document;
day8.re_frame_10x.styles.inject_trace_styles.call(null,popup_document);

goog.object.set(popup_window,"onunload",((function (app,doc){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null));
});})(app,doc))
);

return mranderson047.reagent.v0v7v0.reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,doc){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,doc))
], null))], null),app);
});
/**
 * Copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.events.open_debugger_window = (function day8$re_frame_10x$events$open_debugger_window(){
var map__66501 = new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__66501__$1 = ((((!((map__66501 == null)))?((((map__66501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66501):map__66501);
var ext_height = cljs.core.get.call(null,map__66501__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.call(null,map__66501__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var w = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__46739__auto__ = ext_width;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__46739__auto__ = ext_height;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
var d = w.document;
d.open();

d.write("<head></head><body style=\"margin: 0px;\"><div id=\"--re-frame-10x--\" class=\"external-window\"></div></body>");

goog.object.set(w,"onload",((function (map__66501,map__66501__$1,ext_height,ext_width,w,d){
return (function (){
return day8.re_frame_10x.events.mount.call(null,w,d);
});})(map__66501,map__66501__$1,ext_height,ext_width,w,d))
);

return d.close();
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
day8.re_frame_10x.events.open_debugger_window.call(null);

day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame_10x.events.enable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame_10x.events.disable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null));
}));

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__66503){
var vec__66504 = p__66503;
var _ = cljs.core.nth.call(null,vec__66504,(0),null);
var unloading_QMARK_ = cljs.core.nth.call(null,vec__66504,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame_10x.events.save_filter_items = (function day8$re_frame_10x$events$save_filter_items(filter_items){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"filter-items",filter_items);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__66507){
var vec__66508 = p__66507;
var _ = cljs.core.nth.call(null,vec__66508,(0),null);
var filter_items = cljs.core.nth.call(null,vec__66508,(1),null);
day8.re_frame_10x.events.save_filter_items.call(null,filter_items);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__66514){
var vec__66515 = p__66514;
var _ = cljs.core.nth.call(null,vec__66515,(0),null);
var filter_input = cljs.core.nth.call(null,vec__66515,(1),null);
var filter_type = cljs.core.nth.call(null,vec__66515,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some.call(null,((function (vec__66515,_,filter_input,filter_type){
return (function (p1__66511_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__66511_SHARP_));
});})(vec__66515,_,filter_input,filter_type))
,filter_items))?null:(function (){var filter_items__$1 = (cljs.core.truth_((function (){var and__46727__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__46727__auto__){
return cljs.core.some.call(null,((function (and__46727__auto__,vec__66515,_,filter_input,filter_type){
return (function (p1__66512_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__66512_SHARP_));
});})(and__46727__auto__,vec__66515,_,filter_input,filter_type))
,filter_items);
} else {
return and__46727__auto__;
}
})())?cljs.core.remove.call(null,((function (vec__66515,_,filter_input,filter_type){
return (function (p1__66513_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__66513_SHARP_));
});})(vec__66515,_,filter_input,filter_type))
,filter_items):filter_items);
return cljs.core.conj.call(null,filter_items__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})());
day8.re_frame_10x.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__66519){
var vec__66520 = p__66519;
var _ = cljs.core.nth.call(null,vec__66520,(0),null);
var filter_id = cljs.core.nth.call(null,vec__66520,(1),null);
var new_db = cljs.core.remove.call(null,((function (vec__66520,_,filter_id){
return (function (p1__66518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66518_SHARP_),filter_id);
});})(vec__66520,_,filter_id))
,filter_items);
day8.re_frame_10x.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame_10x.events.dissoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame_10x.events.save_filter_items.call(null,cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (trace_detail_expansions,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,trace_detail_expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__66524){
var vec__66525 = p__66524;
var _ = cljs.core.nth.call(null,vec__66525,(0),null);
var id = cljs.core.nth.call(null,vec__66525,(1),null);
var showing_QMARK_ = cljs.core.get_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (showing_QMARK_,vec__66525,_,id){
return (function (p1__66523_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__66523_SHARP_);
}
});})(showing_QMARK_,vec__66525,_,id))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null))], null),(function (categories,p__66528){
var vec__66529 = p__66528;
var _ = cljs.core.nth.call(null,vec__66529,(0),null);
var new_categories = cljs.core.nth.call(null,vec__66529,(1),null);
var new_categories__$1 = (cljs.core.truth_(clojure.set.superset_QMARK_.call(null,categories,new_categories))?clojure.set.difference.call(null,categories,new_categories):clojure.set.union.call(null,categories,new_categories));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"categories",new_categories__$1);

return new_categories__$1;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null))], null),(function (categories,p__66532){
var vec__66533 = p__66532;
var _ = cljs.core.nth.call(null,vec__66533,(0),null);
var new_categories = cljs.core.nth.call(null,vec__66533,(1),null);
return new_categories;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665),new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66536_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"show-epoch-traces?",p1__66536_SHARP_);
}))], null),(function (_,p__66537){
var vec__66538 = p__66537;
var k = cljs.core.nth.call(null,vec__66538,(0),null);
var show_epoch_traces_QMARK_ = cljs.core.nth.call(null,vec__66538,(1),null);
return show_epoch_traces_QMARK_;
}));
day8.re_frame_10x.events.app_db_path_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)),day8.re_frame_10x.events.fixed_after.call(null,(function (p1__66541_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-paths",p1__66541_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","create-path","app-db/create-path",-1109143265),day8.re_frame_10x.events.app_db_path_mw,(function (paths,_){
return cljs.core.assoc.call(null,paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","update-path","app-db/update-path",-2057697283),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__66542){
var vec__66543 = p__66542;
var _ = cljs.core.nth.call(null,vec__66543,(0),null);
var path_id = cljs.core.nth.call(null,vec__66543,(1),null);
var path_str = cljs.core.nth.call(null,vec__66543,(2),null);
var path = day8.re_frame_10x.events.read_string_maybe.call(null,path_str);
var paths__$1 = cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if(((!((path == null))) && (cljs.core.sequential_QMARK_.call(null,path))) || (clojure.string.blank_QMARK_.call(null,path_str))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in.call(null,paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","update-path-blur","app-db/update-path-blur",637142516),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__66546){
var vec__66547 = p__66546;
var _ = cljs.core.nth.call(null,vec__66547,(0),null);
var path_id = cljs.core.nth.call(null,vec__66547,(1),null);
var map__66550 = cljs.core.get.call(null,paths,path_id);
var map__66550__$1 = ((((!((map__66550 == null)))?((((map__66550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66550):map__66550);
var valid_path_QMARK_ = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.call(null,map__66550__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.call(null,path)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-path-visibility","app-db/set-path-visibility",1482573598),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__66552){
var vec__66553 = p__66552;
var _ = cljs.core.nth.call(null,vec__66553,(0),null);
var path_id = cljs.core.nth.call(null,vec__66553,(1),null);
var open_QMARK_ = cljs.core.nth.call(null,vec__66553,(2),null);
return cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-diff-visibility","app-db/set-diff-visibility",709297655),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__66556){
var vec__66557 = p__66556;
var _ = cljs.core.nth.call(null,vec__66557,(0),null);
var path_id = cljs.core.nth.call(null,vec__66557,(1),null);
var diff_QMARK_ = cljs.core.nth.call(null,vec__66557,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__66560){
var vec__66561 = p__66560;
var _ = cljs.core.nth.call(null,vec__66561,(0),null);
var path_id = cljs.core.nth.call(null,vec__66561,(1),null);
return cljs.core.dissoc.call(null,paths,path_id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),day8.re_frame_10x.events.app_db_path_mw,(function (db,p__66564){
var vec__66565 = p__66564;
var _ = cljs.core.nth.call(null,vec__66565,(0),null);
var paths = cljs.core.nth.call(null,vec__66565,(1),null);
return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__66570){
var vec__66571 = p__66570;
var _ = cljs.core.nth.call(null,vec__66571,(0),null);
var search_string = cljs.core.nth.call(null,vec__66571,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (db,p__66574){
var vec__66575 = p__66574;
var _ = cljs.core.nth.call(null,vec__66575,(0),null);
var paths = cljs.core.nth.call(null,vec__66575,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",paths);

return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (paths,p__66578){
var vec__66579 = p__66578;
var _ = cljs.core.nth.call(null,vec__66579,(0),null);
var path = cljs.core.nth.call(null,vec__66579,(1),null);
var new_paths = ((cljs.core.contains_QMARK_.call(null,paths,path))?cljs.core.disj.call(null,paths,path):cljs.core.conj.call(null,paths,path));
day8.re_frame_10x.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",new_paths);

return new_paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null))], null),(function (paths,_){
return re_frame.interop.reagent_id.call(null,re_frame.db.app_db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("snapshot","load-snapshot","snapshot/load-snapshot",-1238032716),(function (db,p__66582){
var vec__66583 = p__66582;
var _ = cljs.core.nth.call(null,vec__66583,(0),null);
var new_db = cljs.core.nth.call(null,vec__66583,(1),null);
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new_db);

return db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),(function (db,p__66586){
var vec__66587 = p__66586;
var _ = cljs.core.nth.call(null,vec__66587,(0),null);
var new_id = cljs.core.nth.call(null,vec__66587,(1),null);
var follows_events_QMARK__66590 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null));
var epochs_66591 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_66592 = (function (){var or__46739__auto__ = new_id;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec.call(null,cljs.core.get.call(null,epochs_66591,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_66593 = cljs.core.get_in.call(null,epochs_66591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_66592], null));
var event_66594 = day8.re_frame_10x.metamorphic.matched_event.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_66593));
if(cljs.core.truth_(follows_events_QMARK__66590)){
var temp__4661__auto___66595 = cljs.core.get_in.call(null,event_66594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
if((temp__4661__auto___66595 == null)){
} else {
var new_db_66596 = temp__4661__auto___66595;
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new_db_66596);
}
} else {
}

return db;
}));
day8.re_frame_10x.events.first_match_id = (function day8$re_frame_10x$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),(function (db,p__66598){
var vec__66599 = p__66598;
var _ = cljs.core.nth.call(null,vec__66599,(0),null);
var new_traces = cljs.core.nth.call(null,vec__66599,(1),null);
var temp__4655__auto__ = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,day8.re_frame_10x.events.log_trace_QMARK_,new_traces));
if(cljs.core.truth_(temp__4655__auto__)){
var filtered_traces = temp__4655__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.metamorphic.initial_parse_state);
var map__66602 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__66602__$1 = ((((!((map__66602 == null)))?((((map__66602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66602):map__66602);
var drop_re_frame = cljs.core.get.call(null,map__66602__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.call(null,map__66602__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.reduce.call(null,cljs.core.conj,previous_traces,filtered_traces);
var parse_state__$1 = day8.re_frame_10x.metamorphic.parse_traces.call(null,parse_state,filtered_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.call(null,parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (match){
var event = cljs.core.get_in.call(null,day8.re_frame_10x.metamorphic.matched_event.call(null,match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_.call(null,events_to_ignore,cljs.core.first.call(null,event));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
,new_matches);
var subscription_info = day8.re_frame_10x.metamorphic.subscription_info.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),filtered_traces,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.metamorphic.subscription_match_state.call(null,sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest.call(null,subscription_match_state);
var new_sub_state = cljs.core.last.call(null,subscription_match_state);
var timing = cljs.core.mapv.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (match){
var epoch_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,day8.re_frame_10x.utils.utils.id_between_xf.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match)))),all_traces);
var start_of_epoch = cljs.core.nth.call(null,epoch_traces,(0));
var event_handler_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__46739__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec.call(null,epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.metamorphic.elapsed_time.call(null,start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
,new_matches__$1);
var new_matches__$2 = cljs.core.map.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
,new_matches__$1,subscription_matches,timing);
var all_matches = cljs.core.reduce.call(null,cljs.core.conj,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.events.first_match_id.call(null,cljs.core.first.call(null,retained_matches));
var retained_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.drop_while.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (p1__66597_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66597_SHARP_) < first_id_to_retain);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
),cljs.core.remove.call(null,((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (trace){
var or__46739__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_.call(null,trace):null);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_.call(null,trace);
} else {
return null;
}
}
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
)),all_traces);
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces){
return (function (epochs){
return cljs.core.assoc.call(null,epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,day8.re_frame_10x.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.call(null,day8.re_frame_10x.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__66602,map__66602__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__4655__auto__,vec__66599,_,new_traces))
);
} else {
return db;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__66604,_){
var map__66605 = p__66604;
var map__66605__$1 = ((((!((map__66605 == null)))?((((map__66605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66605):map__66605);
var db = cljs.core.get.call(null,map__66605__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__4659__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__4659__auto__ == null)){
var new_id = cljs.core.nth.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
} else {
var current_id = temp__4659__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec.call(null,((function (match_ids,current_id,temp__4659__auto__,map__66605,map__66605__$1,db){
return (function (x){
return cljs.core._EQ_.call(null,current_id,x);
});})(match_ids,current_id,temp__4659__auto__,map__66605,map__66605__$1,db))
,match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null))], null),(function (p__66607,_){
var map__66608 = p__66607;
var map__66608__$1 = ((((!((map__66608 == null)))?((((map__66608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66608):map__66608);
var db = cljs.core.get.call(null,map__66608__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__4659__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__4659__auto__ == null)){
var new_id = cljs.core.last.call(null,new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
} else {
var current_id = temp__4659__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec.call(null,((function (match_ids,current_id,temp__4659__auto__,map__66608,map__66608__$1,db){
return (function (x){
return cljs.core._EQ_.call(null,current_id,x);
});})(match_ids,current_id,temp__4659__auto__,map__66608,map__66608__$1,db))
,match_ids);
var new_id = cljs.core.nth.call(null,match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868),(function (db){
re_frame.trace.reset_tracing_BANG_.call(null);

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"traces","traces",-1301138004));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160)], null))], null),(function (_,p__66610){
var vec__66611 = p__66610;
var ___$1 = cljs.core.nth.call(null,vec__66611,(0),null);
var ignore_QMARK_ = cljs.core.nth.call(null,vec__66611,(1),null);
return ignore_QMARK_;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","open-pod?","subs/open-pod?",-57249156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__66614){
var vec__66615 = p__66614;
var _ = cljs.core.nth.call(null,vec__66615,(0),null);
var id = cljs.core.nth.call(null,vec__66615,(1),null);
var open_QMARK_ = cljs.core.nth.call(null,vec__66615,(2),null);
return cljs.core.assoc_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("subs","diff-pod?","subs/diff-pod?",-375674973),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null))], null),(function (expansions,p__66618){
var vec__66619 = p__66618;
var _ = cljs.core.nth.call(null,vec__66619,(0),null);
var id = cljs.core.nth.call(null,vec__66619,(1),null);
var diff_QMARK_ = cljs.core.nth.call(null,vec__66619,(2),null);
return cljs.core.assoc_in.call(null,expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_);
}));

//# sourceMappingURL=events.js.map
