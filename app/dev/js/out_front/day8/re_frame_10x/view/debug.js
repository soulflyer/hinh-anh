// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.view.debug');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.view.components');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
day8.re_frame_10x.view.debug.render = (function day8$re_frame_10x$view$debug$render(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Number of epochs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Beginning trace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Ending ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Current epoch ID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debug-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"pre epoch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pre-epoch-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"match state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["match-state"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Epochs"], null),(function (){var current_match = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null)));
var iter__47547__auto__ = ((function (current_match){
return (function day8$re_frame_10x$view$debug$render_$_iter__66167(s__66168){
return (new cljs.core.LazySeq(null,((function (current_match){
return (function (){
var s__66168__$1 = s__66168;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66168__$1);
if(temp__4657__auto__){
var s__66168__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66168__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__66168__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__66170 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__66169 = (0);
while(true){
if((i__66169 < size__47546__auto__)){
var match = cljs.core._nth.call(null,c__47545__auto__,i__66169);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
cljs.core.chunk_append.call(null,b__66170,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.call(null,current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__66169,match_info,match,c__47545__auto__,size__47546__auto__,b__66170,s__66168__$2,temp__4657__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.call(null,event)], null);
});})(i__66169,match_info,match,c__47545__auto__,size__47546__auto__,b__66170,s__66168__$2,temp__4657__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match.call(null,match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match_info))], null)));

var G__66171 = (i__66169 + (1));
i__66169 = G__66171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66170),day8$re_frame_10x$view$debug$render_$_iter__66167.call(null,cljs.core.chunk_rest.call(null,s__66168__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66170),null);
}
} else {
var match = cljs.core.first.call(null,s__66168__$2);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.call(null,current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (match_info,match,s__66168__$2,temp__4657__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.call(null,event)], null);
});})(match_info,match,s__66168__$2,temp__4657__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match.call(null,match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match_info))], null)),day8$re_frame_10x$view$debug$render_$_iter__66167.call(null,cljs.core.rest.call(null,s__66168__$2)));
}
} else {
return null;
}
break;
}
});})(current_match))
,null,null));
});})(current_match))
;
return iter__47547__auto__.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null)))));
})()], null)], null);
});

//# sourceMappingURL=debug.js.map
