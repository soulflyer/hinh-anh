// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x63090_63091 = value;
x63090_63091.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x63093_63094 = value;
x63093_63094.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x63096_63097 = value;
x63096_63097.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__46727__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__46727__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63104 = arguments.length;
var i__47902__auto___63105 = (0);
while(true){
if((i__47902__auto___63105 < len__47901__auto___63104)){
args__47908__auto__.push((arguments[i__47902__auto___63105]));

var G__63106 = (i__47902__auto___63105 + (1));
i__47902__auto___63105 = G__63106;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__63100_63107 = cljs.core.seq.call(null,items);
var chunk__63101_63108 = null;
var count__63102_63109 = (0);
var i__63103_63110 = (0);
while(true){
if((i__63103_63110 < count__63102_63109)){
var item_63111 = cljs.core._nth.call(null,chunk__63101_63108,i__63103_63110);
if(!((item_63111 == null))){
if(cljs.core.coll_QMARK_.call(null,item_63111)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63111)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63111));
}
} else {
}


var G__63112 = seq__63100_63107;
var G__63113 = chunk__63101_63108;
var G__63114 = count__63102_63109;
var G__63115 = (i__63103_63110 + (1));
seq__63100_63107 = G__63112;
chunk__63101_63108 = G__63113;
count__63102_63109 = G__63114;
i__63103_63110 = G__63115;
continue;
} else {
var temp__4657__auto___63116 = cljs.core.seq.call(null,seq__63100_63107);
if(temp__4657__auto___63116){
var seq__63100_63117__$1 = temp__4657__auto___63116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63100_63117__$1)){
var c__47578__auto___63118 = cljs.core.chunk_first.call(null,seq__63100_63117__$1);
var G__63119 = cljs.core.chunk_rest.call(null,seq__63100_63117__$1);
var G__63120 = c__47578__auto___63118;
var G__63121 = cljs.core.count.call(null,c__47578__auto___63118);
var G__63122 = (0);
seq__63100_63107 = G__63119;
chunk__63101_63108 = G__63120;
count__63102_63109 = G__63121;
i__63103_63110 = G__63122;
continue;
} else {
var item_63123 = cljs.core.first.call(null,seq__63100_63117__$1);
if(!((item_63123 == null))){
if(cljs.core.coll_QMARK_.call(null,item_63123)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63123)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63123));
}
} else {
}


var G__63124 = cljs.core.next.call(null,seq__63100_63117__$1);
var G__63125 = null;
var G__63126 = (0);
var G__63127 = (0);
seq__63100_63107 = G__63124;
chunk__63101_63108 = G__63125;
count__63102_63109 = G__63126;
i__63103_63110 = G__63127;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq63099){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63099));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63135 = arguments.length;
var i__47902__auto___63136 = (0);
while(true){
if((i__47902__auto___63136 < len__47901__auto___63135)){
args__47908__auto__.push((arguments[i__47902__auto___63136]));

var G__63137 = (i__47902__auto___63136 + (1));
i__47902__auto___63136 = G__63137;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((2) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47909__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__63131_63138 = cljs.core.seq.call(null,children);
var chunk__63132_63139 = null;
var count__63133_63140 = (0);
var i__63134_63141 = (0);
while(true){
if((i__63134_63141 < count__63133_63140)){
var child_63142 = cljs.core._nth.call(null,chunk__63132_63139,i__63134_63141);
if(!((child_63142 == null))){
if(cljs.core.coll_QMARK_.call(null,child_63142)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63142))));
} else {
var temp__4655__auto___63143 = devtools.formatters.helpers.pref.call(null,child_63142);
if(cljs.core.truth_(temp__4655__auto___63143)){
var child_value_63144 = temp__4655__auto___63143;
template.push(child_value_63144);
} else {
}
}
} else {
}


var G__63145 = seq__63131_63138;
var G__63146 = chunk__63132_63139;
var G__63147 = count__63133_63140;
var G__63148 = (i__63134_63141 + (1));
seq__63131_63138 = G__63145;
chunk__63132_63139 = G__63146;
count__63133_63140 = G__63147;
i__63134_63141 = G__63148;
continue;
} else {
var temp__4657__auto___63149 = cljs.core.seq.call(null,seq__63131_63138);
if(temp__4657__auto___63149){
var seq__63131_63150__$1 = temp__4657__auto___63149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63131_63150__$1)){
var c__47578__auto___63151 = cljs.core.chunk_first.call(null,seq__63131_63150__$1);
var G__63152 = cljs.core.chunk_rest.call(null,seq__63131_63150__$1);
var G__63153 = c__47578__auto___63151;
var G__63154 = cljs.core.count.call(null,c__47578__auto___63151);
var G__63155 = (0);
seq__63131_63138 = G__63152;
chunk__63132_63139 = G__63153;
count__63133_63140 = G__63154;
i__63134_63141 = G__63155;
continue;
} else {
var child_63156 = cljs.core.first.call(null,seq__63131_63150__$1);
if(!((child_63156 == null))){
if(cljs.core.coll_QMARK_.call(null,child_63156)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63156))));
} else {
var temp__4655__auto___63157 = devtools.formatters.helpers.pref.call(null,child_63156);
if(cljs.core.truth_(temp__4655__auto___63157)){
var child_value_63158 = temp__4655__auto___63157;
template.push(child_value_63158);
} else {
}
}
} else {
}


var G__63159 = cljs.core.next.call(null,seq__63131_63150__$1);
var G__63160 = null;
var G__63161 = (0);
var G__63162 = (0);
seq__63131_63138 = G__63159;
chunk__63132_63139 = G__63160;
count__63133_63140 = G__63161;
i__63134_63141 = G__63162;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq63128){
var G__63129 = cljs.core.first.call(null,seq63128);
var seq63128__$1 = cljs.core.next.call(null,seq63128);
var G__63130 = cljs.core.first.call(null,seq63128__$1);
var seq63128__$2 = cljs.core.next.call(null,seq63128__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__63129,G__63130,seq63128__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63165 = arguments.length;
var i__47902__auto___63166 = (0);
while(true){
if((i__47902__auto___63166 < len__47901__auto___63165)){
args__47908__auto__.push((arguments[i__47902__auto___63166]));

var G__63167 = (i__47902__auto___63166 + (1));
i__47902__auto___63166 = G__63167;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq63163){
var G__63164 = cljs.core.first.call(null,seq63163);
var seq63163__$1 = cljs.core.next.call(null,seq63163);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63164,seq63163__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63170 = arguments.length;
var i__47902__auto___63171 = (0);
while(true){
if((i__47902__auto___63171 < len__47901__auto___63170)){
args__47908__auto__.push((arguments[i__47902__auto___63171]));

var G__63172 = (i__47902__auto___63171 + (1));
i__47902__auto___63171 = G__63172;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq63168){
var G__63169 = cljs.core.first.call(null,seq63168);
var seq63168__$1 = cljs.core.next.call(null,seq63168);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63169,seq63168__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__63174 = arguments.length;
switch (G__63174) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj63176 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__46739__auto__ = start_index;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})()};
return obj63176;
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
var args__47908__auto__ = [];
var len__47901__auto___63184 = arguments.length;
var i__47902__auto___63185 = (0);
while(true){
if((i__47902__auto___63185 < len__47901__auto___63184)){
args__47908__auto__.push((arguments[i__47902__auto___63185]));

var G__63186 = (i__47902__auto___63185 + (1));
i__47902__auto___63185 = G__63186;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__63180){
var vec__63181 = p__63180;
var state_override_fn = cljs.core.nth.call(null,vec__63181,(0),null);

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq63178){
var G__63179 = cljs.core.first.call(null,seq63178);
var seq63178__$1 = cljs.core.next.call(null,seq63178);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__63179,seq63178__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_63187 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_63187;
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
var G__63188 = name;
switch (G__63188) {
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
var vec__63190 = tag;
var html_tag = cljs.core.nth.call(null,vec__63190,(0),null);
var style = cljs.core.nth.call(null,vec__63190,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_63193 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63193;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_63194 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_63195 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63195;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_63194;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
return null;
});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__63196 = initial_value;
var G__63197 = value.call(null);
initial_value = G__63196;
value = G__63197;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__63198 = initial_value;
var G__63199 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__63198;
value = G__63199;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__63200 = initial_value;
var G__63201 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__63200;
value = G__63201;
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

//# sourceMappingURL=templating.js.map
