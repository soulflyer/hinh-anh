// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.view.parts');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('re_frame.registrar');
goog.require('re_frame.events');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__47547__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__66402(s__66403){
return (new cljs.core.LazySeq(null,(function (){
var s__66403__$1 = s__66403;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66403__$1);
if(temp__4657__auto__){
var s__66403__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66403__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__66403__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__66405 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__66404 = (0);
while(true){
if((i__66404 < size__47546__auto__)){
var vec__66406 = cljs.core._nth.call(null,c__47545__auto__,i__66404);
var k = cljs.core.nth.call(null,vec__66406,(0),null);
var v = cljs.core.nth.call(null,vec__66406,(1),null);
cljs.core.chunk_append.call(null,b__66405,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__66412 = (i__66404 + (1));
i__66404 = G__66412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66405),day8$re_frame_10x$view$parts$render_registered_$_iter__66402.call(null,cljs.core.chunk_rest.call(null,s__66403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66405),null);
}
} else {
var vec__66409 = cljs.core.first.call(null,s__66403__$2);
var k = cljs.core.nth.call(null,vec__66409,(0),null);
var v = cljs.core.nth.call(null,vec__66409,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__66402.call(null,cljs.core.rest.call(null,s__66403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47547__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__47547__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__66413(s__66414){
return (new cljs.core.LazySeq(null,(function (){
var s__66414__$1 = s__66414;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66414__$1);
if(temp__4657__auto__){
var s__66414__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66414__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__66414__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__66416 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__66415 = (0);
while(true){
if((i__66415 < size__47546__auto__)){
var vec__66417 = cljs.core._nth.call(null,c__47545__auto__,i__66415);
var k = cljs.core.nth.call(null,vec__66417,(0),null);
var v = cljs.core.nth.call(null,vec__66417,(1),null);
cljs.core.chunk_append.call(null,b__66416,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__66423 = (i__66415 + (1));
i__66415 = G__66423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66416),day8$re_frame_10x$view$parts$render_subs_$_iter__66413.call(null,cljs.core.chunk_rest.call(null,s__66414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66416),null);
}
} else {
var vec__66420 = cljs.core.first.call(null,s__66414__$2);
var k = cljs.core.nth.call(null,vec__66420,(0),null);
var v = cljs.core.nth.call(null,vec__66420,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__66413.call(null,cljs.core.rest.call(null,s__66414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47547__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs.call(null,re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.cofx.kind)], null)], null);
});

//# sourceMappingURL=parts.js.map
