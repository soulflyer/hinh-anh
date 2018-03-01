// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8578__auto__ = (((value == null))?null:value);
var m__8579__auto__ = (devtools.format._header[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,value);
} else {
var m__8579__auto____$1 = (devtools.format._header["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8578__auto__ = (((value == null))?null:value);
var m__8579__auto__ = (devtools.format._has_body[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,value);
} else {
var m__8579__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8578__auto__ = (((value == null))?null:value);
var m__8579__auto__ = (devtools.format._body[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,value);
} else {
var m__8579__auto____$1 = (devtools.format._body["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16055 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16055["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16056 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16056["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16057 = temp__4655__auto____$2;
return (o16057["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16058 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16058["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16059 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16059["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16060 = temp__4655__auto____$2;
return (o16060["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16061 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16061["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16062 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16062["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16063 = temp__4655__auto____$2;
return (o16063["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16064 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16064["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16065 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16065["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16066 = temp__4655__auto____$2;
return (o16066["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16067 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16067["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16068 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16068["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16069 = temp__4655__auto____$2;
return (o16069["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16070 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16070["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16071 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16071["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16072 = temp__4655__auto____$2;
return (o16072["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16073 = temp__4655__auto__;
var temp__4655__auto____$1 = (o16073["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o16074 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o16074["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o16075 = temp__4655__auto____$2;
return (o16075["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();







return null;
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16077 = arguments.length;
var i__9058__auto___16078 = (0);
while(true){
if((i__9058__auto___16078 < len__9057__auto___16077)){
args__9064__auto__.push((arguments[i__9058__auto___16078]));

var G__16079 = (i__9058__auto___16078 + (1));
i__9058__auto___16078 = G__16079;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq16076){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16076));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16081 = arguments.length;
var i__9058__auto___16082 = (0);
while(true){
if((i__9058__auto___16082 < len__9057__auto___16081)){
args__9064__auto__.push((arguments[i__9058__auto___16082]));

var G__16083 = (i__9058__auto___16082 + (1));
i__9058__auto___16082 = G__16083;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq16080){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16080));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16085 = arguments.length;
var i__9058__auto___16086 = (0);
while(true){
if((i__9058__auto___16086 < len__9057__auto___16085)){
args__9064__auto__.push((arguments[i__9058__auto___16086]));

var G__16087 = (i__9058__auto___16086 + (1));
i__9058__auto___16086 = G__16087;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq16084){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16084));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16089 = arguments.length;
var i__9058__auto___16090 = (0);
while(true){
if((i__9058__auto___16090 < len__9057__auto___16089)){
args__9064__auto__.push((arguments[i__9058__auto___16090]));

var G__16091 = (i__9058__auto___16090 + (1));
i__9058__auto___16090 = G__16091;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq16088){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16088));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16093 = arguments.length;
var i__9058__auto___16094 = (0);
while(true){
if((i__9058__auto___16094 < len__9057__auto___16093)){
args__9064__auto__.push((arguments[i__9058__auto___16094]));

var G__16095 = (i__9058__auto___16094 + (1));
i__9058__auto___16094 = G__16095;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq16092){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16092));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16097 = arguments.length;
var i__9058__auto___16098 = (0);
while(true){
if((i__9058__auto___16098 < len__9057__auto___16097)){
args__9064__auto__.push((arguments[i__9058__auto___16098]));

var G__16099 = (i__9058__auto___16098 + (1));
i__9058__auto___16098 = G__16099;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq16096){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16096));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16101 = arguments.length;
var i__9058__auto___16102 = (0);
while(true){
if((i__9058__auto___16102 < len__9057__auto___16101)){
args__9064__auto__.push((arguments[i__9058__auto___16102]));

var G__16103 = (i__9058__auto___16102 + (1));
i__9058__auto___16102 = G__16103;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq16100){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16100));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16111 = arguments.length;
var i__9058__auto___16112 = (0);
while(true){
if((i__9058__auto___16112 < len__9057__auto___16111)){
args__9064__auto__.push((arguments[i__9058__auto___16112]));

var G__16113 = (i__9058__auto___16112 + (1));
i__9058__auto___16112 = G__16113;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__16107){
var vec__16108 = p__16107;
var state_override = cljs.core.nth.call(null,vec__16108,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__16108,state_override){
return (function (p1__16104_SHARP_){
return cljs.core.merge.call(null,p1__16104_SHARP_,state_override);
});})(vec__16108,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq16105){
var G__16106 = cljs.core.first.call(null,seq16105);
var seq16105__$1 = cljs.core.next.call(null,seq16105);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__16106,seq16105__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16115 = arguments.length;
var i__9058__auto___16116 = (0);
while(true){
if((i__9058__auto___16116 < len__9057__auto___16115)){
args__9064__auto__.push((arguments[i__9058__auto___16116]));

var G__16117 = (i__9058__auto___16116 + (1));
i__9058__auto___16116 = G__16117;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq16114){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16114));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16120 = arguments.length;
var i__9058__auto___16121 = (0);
while(true){
if((i__9058__auto___16121 < len__9057__auto___16120)){
args__9064__auto__.push((arguments[i__9058__auto___16121]));

var G__16122 = (i__9058__auto___16121 + (1));
i__9058__auto___16121 = G__16122;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq16118){
var G__16119 = cljs.core.first.call(null,seq16118);
var seq16118__$1 = cljs.core.next.call(null,seq16118);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__16119,seq16118__$1);
});

