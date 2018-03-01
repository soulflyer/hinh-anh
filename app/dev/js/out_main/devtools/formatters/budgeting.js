// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
var o__16019__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__16019__auto__["add"]).call(o__16019__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__16019__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__16019__auto__["delete"]).call(o__16019__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__16019__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__16019__auto__["has"]).call(o__16019__auto__,value);
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
var G__17825 = data;
var target__16024__auto__ = G__17825;

(target__16024__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__17825;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_17830 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_17830);
} else {
var seq__17826_17831 = cljs.core.seq.call(null,json_ml);
var chunk__17827_17832 = null;
var count__17828_17833 = (0);
var i__17829_17834 = (0);
while(true){
if((i__17829_17834 < count__17828_17833)){
var item_17835 = cljs.core._nth.call(null,chunk__17827_17832,i__17829_17834);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_17835,new_depth_budget_17830);


var G__17836 = seq__17826_17831;
var G__17837 = chunk__17827_17832;
var G__17838 = count__17828_17833;
var G__17839 = (i__17829_17834 + (1));
seq__17826_17831 = G__17836;
chunk__17827_17832 = G__17837;
count__17828_17833 = G__17838;
i__17829_17834 = G__17839;
continue;
} else {
var temp__4657__auto___17840 = cljs.core.seq.call(null,seq__17826_17831);
if(temp__4657__auto___17840){
var seq__17826_17841__$1 = temp__4657__auto___17840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17826_17841__$1)){
var c__8734__auto___17842 = cljs.core.chunk_first.call(null,seq__17826_17841__$1);
var G__17843 = cljs.core.chunk_rest.call(null,seq__17826_17841__$1);
var G__17844 = c__8734__auto___17842;
var G__17845 = cljs.core.count.call(null,c__8734__auto___17842);
var G__17846 = (0);
seq__17826_17831 = G__17843;
chunk__17827_17832 = G__17844;
count__17828_17833 = G__17845;
i__17829_17834 = G__17846;
continue;
} else {
var item_17847 = cljs.core.first.call(null,seq__17826_17841__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_17847,new_depth_budget_17830);


var G__17848 = cljs.core.next.call(null,seq__17826_17841__$1);
var G__17849 = null;
var G__17850 = (0);
var G__17851 = (0);
seq__17826_17831 = G__17848;
chunk__17827_17832 = G__17849;
count__17828_17833 = G__17850;
i__17829_17834 = G__17851;
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
var remaining_depth_budget = (function (){var or__7895__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
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
