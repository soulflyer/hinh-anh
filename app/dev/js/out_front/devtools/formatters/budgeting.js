// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61696__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61696__auto__["add"]).call(o__61696__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61696__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61696__auto__["delete"]).call(o__61696__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__61696__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61696__auto__["has"]).call(o__61696__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){

var data = cljs.core.second.call(null,object_reference);
var _ = null;
var config = (data["config"]);
var G__63412 = data;
var target__61701__auto__ = G__63412;

(target__61701__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__63412;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_63417 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_63417);
} else {
var seq__63413_63418 = cljs.core.seq.call(null,json_ml);
var chunk__63414_63419 = null;
var count__63415_63420 = (0);
var i__63416_63421 = (0);
while(true){
if((i__63416_63421 < count__63415_63420)){
var item_63422 = cljs.core._nth.call(null,chunk__63414_63419,i__63416_63421);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_63422,new_depth_budget_63417);


var G__63423 = seq__63413_63418;
var G__63424 = chunk__63414_63419;
var G__63425 = count__63415_63420;
var G__63426 = (i__63416_63421 + (1));
seq__63413_63418 = G__63423;
chunk__63414_63419 = G__63424;
count__63415_63420 = G__63425;
i__63416_63421 = G__63426;
continue;
} else {
var temp__4657__auto___63427 = cljs.core.seq.call(null,seq__63413_63418);
if(temp__4657__auto___63427){
var seq__63413_63428__$1 = temp__4657__auto___63427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63413_63428__$1)){
var c__47578__auto___63429 = cljs.core.chunk_first.call(null,seq__63413_63428__$1);
var G__63430 = cljs.core.chunk_rest.call(null,seq__63413_63428__$1);
var G__63431 = c__47578__auto___63429;
var G__63432 = cljs.core.count.call(null,c__47578__auto___63429);
var G__63433 = (0);
seq__63413_63418 = G__63430;
chunk__63414_63419 = G__63431;
count__63415_63420 = G__63432;
i__63416_63421 = G__63433;
continue;
} else {
var item_63434 = cljs.core.first.call(null,seq__63413_63428__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_63434,new_depth_budget_63417);


var G__63435 = cljs.core.next.call(null,seq__63413_63428__$1);
var G__63436 = null;
var G__63437 = (0);
var G__63438 = (0);
seq__63413_63418 = G__63435;
chunk__63414_63419 = G__63436;
count__63415_63420 = G__63437;
i__63416_63421 = G__63438;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__46739__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
