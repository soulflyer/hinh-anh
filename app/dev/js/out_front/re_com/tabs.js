// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53009 = arguments.length;
var i__47902__auto___53010 = (0);
while(true){
if((i__47902__auto___53010 < len__47901__auto___53009)){
args__47908__auto__.push((arguments[i__47902__auto___53010]));

var G__53011 = (i__47902__auto___53010 + (1));
i__47902__auto___53010 = G__53011;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53002){
var map__53003 = p__53002;
var map__53003__$1 = ((((!((map__53003 == null)))?((((map__53003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53003):map__53003);
var args = map__53003__$1;
var model = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__53003__$1,new cljs.core.Keyword(null,"style","style",-496642736));

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__47547__auto__ = ((function (current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__53005(s__53006){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__53006__$1 = s__53006;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__53006__$1);
if(temp__4657__auto__){
var s__53006__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53006__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__53006__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__53008 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__53007 = (0);
while(true){
if((i__53007 < size__47546__auto__)){
var t = cljs.core._nth.call(null,c__47545__auto__,i__53007);
cljs.core.chunk_append.call(null,b__53008,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__53007,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53008,s__53006__$2,temp__4657__auto__,current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__53007,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53008,s__53006__$2,temp__4657__auto__,current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__53012 = (i__53007 + (1));
i__53007 = G__53012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53008),re_com$tabs$iter__53005.call(null,cljs.core.chunk_rest.call(null,s__53006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53008),null);
}
} else {
var t = cljs.core.first.call(null,s__53006__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__53006__$2,temp__4657__auto__,current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__53006__$2,temp__4657__auto__,current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__53005.call(null,cljs.core.rest.call(null,s__53006__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__53003,map__53003__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__47547__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq53001){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53001));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53022 = arguments.length;
var i__47902__auto___53023 = (0);
while(true){
if((i__47902__auto___53023 < len__47901__auto___53022)){
args__47908__auto__.push((arguments[i__47902__auto___53023]));

var G__53024 = (i__47902__auto___53023 + (1));
i__47902__auto___53023 = G__53024;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53015){
var map__53016 = p__53015;
var map__53016__$1 = ((((!((map__53016 == null)))?((((map__53016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53016):map__53016);
var model = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__53016__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__47547__auto__ = ((function (current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__53018(s__53019){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__53019__$1 = s__53019;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__53019__$1);
if(temp__4657__auto__){
var s__53019__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53019__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__53019__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__53021 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__53020 = (0);
while(true){
if((i__53020 < size__47546__auto__)){
var t = cljs.core._nth.call(null,c__47545__auto__,i__53020);
cljs.core.chunk_append.call(null,b__53021,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__53020,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53021,s__53019__$2,temp__4657__auto__,current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__53020,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53021,s__53019__$2,temp__4657__auto__,current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__53025 = (i__53020 + (1));
i__53020 = G__53025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53021),re_com$tabs$iter__53018.call(null,cljs.core.chunk_rest.call(null,s__53019__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53021),null);
}
} else {
var t = cljs.core.first.call(null,s__53019__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__53019__$2,temp__4657__auto__,current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__53019__$2,temp__4657__auto__,current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__53018.call(null,cljs.core.rest.call(null,s__53019__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__53016,map__53016__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__47547__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq53014){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53014));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53030 = arguments.length;
var i__47902__auto___53031 = (0);
while(true){
if((i__47902__auto___53031 < len__47901__auto___53030)){
args__47908__auto__.push((arguments[i__47902__auto___53031]));

var G__53032 = (i__47902__auto___53031 + (1));
i__47902__auto___53031 = G__53032;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53027){
var map__53028 = p__53027;
var map__53028__$1 = ((((!((map__53028 == null)))?((((map__53028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53028):map__53028);
var args = map__53028__$1;
var model = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__53028__$1,new cljs.core.Keyword(null,"style","style",-496642736));

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq53026){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53026));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53037 = arguments.length;
var i__47902__auto___53038 = (0);
while(true){
if((i__47902__auto___53038 < len__47901__auto___53037)){
args__47908__auto__.push((arguments[i__47902__auto___53038]));

var G__53039 = (i__47902__auto___53038 + (1));
i__47902__auto___53038 = G__53039;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53034){
var map__53035 = p__53034;
var map__53035__$1 = ((((!((map__53035 == null)))?((((map__53035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53035):map__53035);
var args = map__53035__$1;
var model = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__53035__$1,new cljs.core.Keyword(null,"style","style",-496642736));

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq53033){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53033));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53049 = arguments.length;
var i__47902__auto___53050 = (0);
while(true){
if((i__47902__auto___53050 < len__47901__auto___53049)){
args__47908__auto__.push((arguments[i__47902__auto___53050]));

var G__53051 = (i__47902__auto___53050 + (1));
i__47902__auto___53050 = G__53051;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53042){
var map__53043 = p__53042;
var map__53043__$1 = ((((!((map__53043 == null)))?((((map__53043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53043):map__53043);
var model = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__53043__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__47547__auto__ = ((function (current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__53045(s__53046){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__53046__$1 = s__53046;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__53046__$1);
if(temp__4657__auto__){
var s__53046__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53046__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__53046__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__53048 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__53047 = (0);
while(true){
if((i__53047 < size__47546__auto__)){
var t = cljs.core._nth.call(null,c__47545__auto__,i__53047);
cljs.core.chunk_append.call(null,b__53048,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__53047,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53048,s__53046__$2,temp__4657__auto__,current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__53047,id,label,selected_QMARK_,t,c__47545__auto__,size__47546__auto__,b__53048,s__53046__$2,temp__4657__auto__,current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__53052 = (i__53047 + (1));
i__53047 = G__53052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53048),re_com$tabs$iter__53045.call(null,cljs.core.chunk_rest.call(null,s__53046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53048),null);
}
} else {
var t = cljs.core.first.call(null,s__53046__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__53046__$2,temp__4657__auto__,current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__53046__$2,temp__4657__auto__,current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__53045.call(null,cljs.core.rest.call(null,s__53046__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__53043,map__53043__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__47547__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq53041){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53041));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53057 = arguments.length;
var i__47902__auto___53058 = (0);
while(true){
if((i__47902__auto___53058 < len__47901__auto___53057)){
args__47908__auto__.push((arguments[i__47902__auto___53058]));

var G__53059 = (i__47902__auto___53058 + (1));
i__47902__auto___53058 = G__53059;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53054){
var map__53055 = p__53054;
var map__53055__$1 = ((((!((map__53055 == null)))?((((map__53055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53055):map__53055);
var args = map__53055__$1;
var model = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__53055__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq53053){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53053));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__47908__auto__ = [];
var len__47901__auto___53064 = arguments.length;
var i__47902__auto___53065 = (0);
while(true){
if((i__47902__auto___53065 < len__47901__auto___53064)){
args__47908__auto__.push((arguments[i__47902__auto___53065]));

var G__53066 = (i__47902__auto___53065 + (1));
i__47902__auto___53065 = G__53066;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53061){
var map__53062 = p__53061;
var map__53062__$1 = ((((!((map__53062 == null)))?((((map__53062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53062):map__53062);
var args = map__53062__$1;
var model = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__53062__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq53060){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53060));
});


//# sourceMappingURL=tabs.js.map
