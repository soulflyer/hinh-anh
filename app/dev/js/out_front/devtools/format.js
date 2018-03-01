// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var x__47422__auto__ = (((value == null))?null:value);
var m__47423__auto__ = (devtools.format._header[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,value);
} else {
var m__47423__auto____$1 = (devtools.format._header["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,value);
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
var x__47422__auto__ = (((value == null))?null:value);
var m__47423__auto__ = (devtools.format._has_body[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,value);
} else {
var m__47423__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,value);
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
var x__47422__auto__ = (((value == null))?null:value);
var m__47423__auto__ = (devtools.format._body[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,value);
} else {
var m__47423__auto____$1 = (devtools.format._body["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,value);
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
var o61732 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61732["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61733 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61733["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61734 = temp__4655__auto____$2;
return (o61734["make_template"]);
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
var o61735 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61735["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61736 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61736["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61737 = temp__4655__auto____$2;
return (o61737["make_group"]);
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
var o61738 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61738["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61739 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61739["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61740 = temp__4655__auto____$2;
return (o61740["make_reference"]);
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
var o61741 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61741["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61742 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61742["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61743 = temp__4655__auto____$2;
return (o61743["make_surrogate"]);
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
var o61744 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61744["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61745 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61745["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61746 = temp__4655__auto____$2;
return (o61746["render_markup"]);
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
var o61747 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61747["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61748 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61748["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61749 = temp__4655__auto____$2;
return (o61749["_LT_header_GT_"]);
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
var o61750 = temp__4655__auto__;
var temp__4655__auto____$1 = (o61750["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o61751 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o61751["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o61752 = temp__4655__auto____$2;
return (o61752["_LT_standard_body_GT_"]);
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
var args__47908__auto__ = [];
var len__47901__auto___61754 = arguments.length;
var i__47902__auto___61755 = (0);
while(true){
if((i__47902__auto___61755 < len__47901__auto___61754)){
args__47908__auto__.push((arguments[i__47902__auto___61755]));

var G__61756 = (i__47902__auto___61755 + (1));
i__47902__auto___61755 = G__61756;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq61753){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61753));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61758 = arguments.length;
var i__47902__auto___61759 = (0);
while(true){
if((i__47902__auto___61759 < len__47901__auto___61758)){
args__47908__auto__.push((arguments[i__47902__auto___61759]));

var G__61760 = (i__47902__auto___61759 + (1));
i__47902__auto___61759 = G__61760;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq61757){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61757));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61762 = arguments.length;
var i__47902__auto___61763 = (0);
while(true){
if((i__47902__auto___61763 < len__47901__auto___61762)){
args__47908__auto__.push((arguments[i__47902__auto___61763]));

var G__61764 = (i__47902__auto___61763 + (1));
i__47902__auto___61763 = G__61764;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq61761){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61761));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61766 = arguments.length;
var i__47902__auto___61767 = (0);
while(true){
if((i__47902__auto___61767 < len__47901__auto___61766)){
args__47908__auto__.push((arguments[i__47902__auto___61767]));

var G__61768 = (i__47902__auto___61767 + (1));
i__47902__auto___61767 = G__61768;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq61765){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61765));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61770 = arguments.length;
var i__47902__auto___61771 = (0);
while(true){
if((i__47902__auto___61771 < len__47901__auto___61770)){
args__47908__auto__.push((arguments[i__47902__auto___61771]));

var G__61772 = (i__47902__auto___61771 + (1));
i__47902__auto___61771 = G__61772;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq61769){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61769));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61774 = arguments.length;
var i__47902__auto___61775 = (0);
while(true){
if((i__47902__auto___61775 < len__47901__auto___61774)){
args__47908__auto__.push((arguments[i__47902__auto___61775]));

var G__61776 = (i__47902__auto___61775 + (1));
i__47902__auto___61775 = G__61776;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq61773){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61773));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61778 = arguments.length;
var i__47902__auto___61779 = (0);
while(true){
if((i__47902__auto___61779 < len__47901__auto___61778)){
args__47908__auto__.push((arguments[i__47902__auto___61779]));

var G__61780 = (i__47902__auto___61779 + (1));
i__47902__auto___61779 = G__61780;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq61777){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61777));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61788 = arguments.length;
var i__47902__auto___61789 = (0);
while(true){
if((i__47902__auto___61789 < len__47901__auto___61788)){
args__47908__auto__.push((arguments[i__47902__auto___61789]));

var G__61790 = (i__47902__auto___61789 + (1));
i__47902__auto___61789 = G__61790;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__61784){
var vec__61785 = p__61784;
var state_override = cljs.core.nth.call(null,vec__61785,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__61785,state_override){
return (function (p1__61781_SHARP_){
return cljs.core.merge.call(null,p1__61781_SHARP_,state_override);
});})(vec__61785,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq61782){
var G__61783 = cljs.core.first.call(null,seq61782);
var seq61782__$1 = cljs.core.next.call(null,seq61782);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__61783,seq61782__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61792 = arguments.length;
var i__47902__auto___61793 = (0);
while(true){
if((i__47902__auto___61793 < len__47901__auto___61792)){
args__47908__auto__.push((arguments[i__47902__auto___61793]));

var G__61794 = (i__47902__auto___61793 + (1));
i__47902__auto___61793 = G__61794;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq61791){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61791));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61797 = arguments.length;
var i__47902__auto___61798 = (0);
while(true){
if((i__47902__auto___61798 < len__47901__auto___61797)){
args__47908__auto__.push((arguments[i__47902__auto___61798]));

var G__61799 = (i__47902__auto___61798 + (1));
i__47902__auto___61798 = G__61799;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq61795){
var G__61796 = cljs.core.first.call(null,seq61795);
var seq61795__$1 = cljs.core.next.call(null,seq61795);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__61796,seq61795__$1);
});


//# sourceMappingURL=format.js.map
