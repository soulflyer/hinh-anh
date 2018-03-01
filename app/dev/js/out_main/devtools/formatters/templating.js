// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x17503_17504 = value;
x17503_17504.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x17506_17507 = value;
x17506_17507.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x17509_17510 = value;
x17509_17510.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__7883__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7883__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17517 = arguments.length;
var i__9058__auto___17518 = (0);
while(true){
if((i__9058__auto___17518 < len__9057__auto___17517)){
args__9064__auto__.push((arguments[i__9058__auto___17518]));

var G__17519 = (i__9058__auto___17518 + (1));
i__9058__auto___17518 = G__17519;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__17513_17520 = cljs.core.seq.call(null,items);
var chunk__17514_17521 = null;
var count__17515_17522 = (0);
var i__17516_17523 = (0);
while(true){
if((i__17516_17523 < count__17515_17522)){
var item_17524 = cljs.core._nth.call(null,chunk__17514_17521,i__17516_17523);
if(!((item_17524 == null))){
if(cljs.core.coll_QMARK_.call(null,item_17524)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_17524)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_17524));
}
} else {
}


var G__17525 = seq__17513_17520;
var G__17526 = chunk__17514_17521;
var G__17527 = count__17515_17522;
var G__17528 = (i__17516_17523 + (1));
seq__17513_17520 = G__17525;
chunk__17514_17521 = G__17526;
count__17515_17522 = G__17527;
i__17516_17523 = G__17528;
continue;
} else {
var temp__4657__auto___17529 = cljs.core.seq.call(null,seq__17513_17520);
if(temp__4657__auto___17529){
var seq__17513_17530__$1 = temp__4657__auto___17529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17513_17530__$1)){
var c__8734__auto___17531 = cljs.core.chunk_first.call(null,seq__17513_17530__$1);
var G__17532 = cljs.core.chunk_rest.call(null,seq__17513_17530__$1);
var G__17533 = c__8734__auto___17531;
var G__17534 = cljs.core.count.call(null,c__8734__auto___17531);
var G__17535 = (0);
seq__17513_17520 = G__17532;
chunk__17514_17521 = G__17533;
count__17515_17522 = G__17534;
i__17516_17523 = G__17535;
continue;
} else {
var item_17536 = cljs.core.first.call(null,seq__17513_17530__$1);
if(!((item_17536 == null))){
if(cljs.core.coll_QMARK_.call(null,item_17536)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_17536)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_17536));
}
} else {
}


var G__17537 = cljs.core.next.call(null,seq__17513_17530__$1);
var G__17538 = null;
var G__17539 = (0);
var G__17540 = (0);
seq__17513_17520 = G__17537;
chunk__17514_17521 = G__17538;
count__17515_17522 = G__17539;
i__17516_17523 = G__17540;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq17512){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17512));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17548 = arguments.length;
var i__9058__auto___17549 = (0);
while(true){
if((i__9058__auto___17549 < len__9057__auto___17548)){
args__9064__auto__.push((arguments[i__9058__auto___17549]));

var G__17550 = (i__9058__auto___17549 + (1));
i__9058__auto___17549 = G__17550;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__17544_17551 = cljs.core.seq.call(null,children);
var chunk__17545_17552 = null;
var count__17546_17553 = (0);
var i__17547_17554 = (0);
while(true){
if((i__17547_17554 < count__17546_17553)){
var child_17555 = cljs.core._nth.call(null,chunk__17545_17552,i__17547_17554);
if(!((child_17555 == null))){
if(cljs.core.coll_QMARK_.call(null,child_17555)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_17555))));
} else {
var temp__4655__auto___17556 = devtools.formatters.helpers.pref.call(null,child_17555);
if(cljs.core.truth_(temp__4655__auto___17556)){
var child_value_17557 = temp__4655__auto___17556;
template.push(child_value_17557);
} else {
}
}
} else {
}


var G__17558 = seq__17544_17551;
var G__17559 = chunk__17545_17552;
var G__17560 = count__17546_17553;
var G__17561 = (i__17547_17554 + (1));
seq__17544_17551 = G__17558;
chunk__17545_17552 = G__17559;
count__17546_17553 = G__17560;
i__17547_17554 = G__17561;
continue;
} else {
var temp__4657__auto___17562 = cljs.core.seq.call(null,seq__17544_17551);
if(temp__4657__auto___17562){
var seq__17544_17563__$1 = temp__4657__auto___17562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17544_17563__$1)){
var c__8734__auto___17564 = cljs.core.chunk_first.call(null,seq__17544_17563__$1);
var G__17565 = cljs.core.chunk_rest.call(null,seq__17544_17563__$1);
var G__17566 = c__8734__auto___17564;
var G__17567 = cljs.core.count.call(null,c__8734__auto___17564);
var G__17568 = (0);
seq__17544_17551 = G__17565;
chunk__17545_17552 = G__17566;
count__17546_17553 = G__17567;
i__17547_17554 = G__17568;
continue;
} else {
var child_17569 = cljs.core.first.call(null,seq__17544_17563__$1);
if(!((child_17569 == null))){
if(cljs.core.coll_QMARK_.call(null,child_17569)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_17569))));
} else {
var temp__4655__auto___17570 = devtools.formatters.helpers.pref.call(null,child_17569);
if(cljs.core.truth_(temp__4655__auto___17570)){
var child_value_17571 = temp__4655__auto___17570;
template.push(child_value_17571);
} else {
}
}
} else {
}


var G__17572 = cljs.core.next.call(null,seq__17544_17563__$1);
var G__17573 = null;
var G__17574 = (0);
var G__17575 = (0);
seq__17544_17551 = G__17572;
chunk__17545_17552 = G__17573;
count__17546_17553 = G__17574;
i__17547_17554 = G__17575;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq17541){
var G__17542 = cljs.core.first.call(null,seq17541);
var seq17541__$1 = cljs.core.next.call(null,seq17541);
var G__17543 = cljs.core.first.call(null,seq17541__$1);
var seq17541__$2 = cljs.core.next.call(null,seq17541__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__17542,G__17543,seq17541__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17578 = arguments.length;
var i__9058__auto___17579 = (0);
while(true){
if((i__9058__auto___17579 < len__9057__auto___17578)){
args__9064__auto__.push((arguments[i__9058__auto___17579]));

var G__17580 = (i__9058__auto___17579 + (1));
i__9058__auto___17579 = G__17580;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq17576){
var G__17577 = cljs.core.first.call(null,seq17576);
var seq17576__$1 = cljs.core.next.call(null,seq17576);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17577,seq17576__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17583 = arguments.length;
var i__9058__auto___17584 = (0);
while(true){
if((i__9058__auto___17584 < len__9057__auto___17583)){
args__9064__auto__.push((arguments[i__9058__auto___17584]));

var G__17585 = (i__9058__auto___17584 + (1));
i__9058__auto___17584 = G__17585;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq17581){
var G__17582 = cljs.core.first.call(null,seq17581);
var seq17581__$1 = cljs.core.next.call(null,seq17581);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17582,seq17581__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__17587 = arguments.length;
switch (G__17587) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj17589 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7895__auto__ = start_index;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (0);
}
})()};
return obj17589;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17597 = arguments.length;
var i__9058__auto___17598 = (0);
while(true){
if((i__9058__auto___17598 < len__9057__auto___17597)){
args__9064__auto__.push((arguments[i__9058__auto___17598]));

var G__17599 = (i__9058__auto___17598 + (1));
i__9058__auto___17598 = G__17599;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__17593){
var vec__17594 = p__17593;
var state_override_fn = cljs.core.nth.call(null,vec__17594,(0),null);

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq17591){
var G__17592 = cljs.core.first.call(null,seq17591);
var seq17591__$1 = cljs.core.next.call(null,seq17591);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__17592,seq17591__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_17600 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17600;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
return null;
});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__17601 = name;
switch (G__17601) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__17603 = tag;
var html_tag = cljs.core.nth.call(null,vec__17603,(0),null);
var style = cljs.core.nth.call(null,vec__17603,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_17606 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_17606;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_17607 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_17608 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_17608;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_17607;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
return null;
});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__17609 = initial_value;
var G__17610 = value.call(null);
initial_value = G__17609;
value = G__17610;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__17611 = initial_value;
var G__17612 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__17611;
value = G__17612;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__17613 = initial_value;
var G__17614 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__17613;
value = G__17614;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});
