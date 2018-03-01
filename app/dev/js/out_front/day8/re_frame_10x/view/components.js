// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('mranderson047.reagent.v0v7v0.reagent.core');
goog.require('devtools.prefs');
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__61297){
var map__61298 = p__61297;
var map__61298__$1 = ((((!((map__61298 == null)))?((((map__61298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61298):map__61298);
var title = cljs.core.get.call(null,map__61298__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__61298__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__61298__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__61298__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__61298__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,title);
var save = ((function (val,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))))?(25):cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__61295_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__61295_SHARP_.target.value);

return on_change.call(null,p1__61295_SHARP_);
});})(val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__61296_SHARP_){
var G__61300 = p1__61296_SHARP_.which;
switch (G__61300) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__61298,map__61298__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.autoscroll_list = (function day8$re_frame_10x$view$components$autoscroll_list(p__61302,child){
var map__61303 = p__61302;
var map__61303__$1 = ((((!((map__61303 == null)))?((((map__61303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61303):map__61303);
var class$ = cljs.core.get.call(null,map__61303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__61303__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,null);
var should_scroll = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return mranderson047.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame_10x.view.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__46727__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__46727__auto__;
}
})())){
return day8.re_frame_10x.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_){
return (function (p__61305,child__$1){
var map__61306 = p__61305;
var map__61306__$1 = ((((!((map__61306 == null)))?((((map__61306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61306):map__61306);
var class$__$1 = cljs.core.get.call(null,map__61306__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__61306,map__61306__$1,class$__$1,node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__61306,map__61306__$1,class$__$1,node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__61303,map__61303__$1,class$,scroll_QMARK_))
], null));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__61309){
var vec__61310 = p__61309;
var property = cljs.core.nth.call(null,vec__61310,(0),null);
var value = cljs.core.nth.call(null,vec__61310,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__61308_SHARP_){
return clojure.string.split.call(null,p1__61308_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs);
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61315 = arguments.length;
var i__47902__auto___61316 = (0);
while(true){
if((i__47902__auto___61316 < len__47901__auto___61315)){
args__47908__auto__.push((arguments[i__47902__auto___61316]));

var G__61317 = (i__47902__auto___61316 + (1));
i__47902__auto___61316 = G__61317;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__61286__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__61287__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__61287__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {
devtools.prefs.set_prefs_BANG_.call(null,previous_config__61286__auto__);
}});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq61313){
var G__61314 = cljs.core.first.call(null,seq61313);
var seq61313__$1 = cljs.core.next.call(null,seq61313);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic(G__61314,seq61313__$1);
});

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61319 = arguments.length;
var i__47902__auto___61320 = (0);
while(true){
if((i__47902__auto___61320 < len__47901__auto___61319)){
args__47908__auto__.push((arguments[i__47902__auto___61320]));

var G__61321 = (i__47902__auto___61320 + (1));
i__47902__auto___61320 = G__61321;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq61318){
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61318));
});

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61323 = arguments.length;
var i__47902__auto___61324 = (0);
while(true){
if((i__47902__auto___61324 < len__47901__auto___61323)){
args__47908__auto__.push((arguments[i__47902__auto___61324]));

var G__61325 = (i__47902__auto___61324 + (1));
i__47902__auto___61324 = G__61325;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq61322){
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61322));
});

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61327 = arguments.length;
var i__47902__auto___61328 = (0);
while(true){
if((i__47902__auto___61328 < len__47901__auto___61327)){
args__47908__auto__.push((arguments[i__47902__auto___61328]));

var G__61329 = (i__47902__auto___61328 + (1));
i__47902__auto___61328 = G__61329;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq61326){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61326));
});

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__46727__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1));
} else {
return and__46727__auto__;
}
})())?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__61330 = jsonml;
var seq__61331 = cljs.core.seq.call(null,vec__61330);
var first__61332 = cljs.core.first.call(null,seq__61331);
var seq__61331__$1 = cljs.core.next.call(null,seq__61331);
var tag_name = first__61332;
var first__61332__$1 = cljs.core.first.call(null,seq__61331__$1);
var seq__61331__$2 = cljs.core.next.call(null,seq__61331__$1);
var attributes = first__61332__$1;
var children = seq__61331__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__61330,seq__61331,first__61332,seq__61331__$1,tag_name,first__61332__$1,seq__61331__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__61330,seq__61331,first__61332,seq__61331__$1,tag_name,first__61332__$1,seq__61331__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__46739__auto__ = title;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__46727__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__46727__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__46739__auto__ = title;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__46727__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__46727__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61340 = arguments.length;
var i__47902__auto___61341 = (0);
while(true){
if((i__47902__auto___61341 < len__47901__auto___61340)){
args__47908__auto__.push((arguments[i__47902__auto___61341]));

var G__61342 = (i__47902__auto___61341 + (1));
i__47902__auto___61341 = G__61342;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((2) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47909__auto__);
});

day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__61336){
var vec__61337 = p__61336;
var class$ = cljs.core.nth.call(null,vec__61337,(0),null);
var expanded_QMARK_ = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_,vec__61337,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__46727__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__46727__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__61337,class$))
});

day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq61333){
var G__61334 = cljs.core.first.call(null,seq61333);
var seq61333__$1 = cljs.core.next.call(null,seq61333);
var G__61335 = cljs.core.first.call(null,seq61333__$1);
var seq61333__$2 = cljs.core.next.call(null,seq61333__$1);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic(G__61334,G__61335,seq61333__$2);
});

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});

//# sourceMappingURL=components.js.map
