// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('day8.re_frame_10x.view.parts');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('re_frame.registrar');
goog.require('re_frame.events');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__8703__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__21325(s__21326){
return (new cljs.core.LazySeq(null,(function (){
var s__21326__$1 = s__21326;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21326__$1);
if(temp__4657__auto__){
var s__21326__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21326__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__21326__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__21328 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__21327 = (0);
while(true){
if((i__21327 < size__8702__auto__)){
var vec__21329 = cljs.core._nth.call(null,c__8701__auto__,i__21327);
var k = cljs.core.nth.call(null,vec__21329,(0),null);
var v = cljs.core.nth.call(null,vec__21329,(1),null);
cljs.core.chunk_append.call(null,b__21328,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__21335 = (i__21327 + (1));
i__21327 = G__21335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21328),day8$re_frame_10x$view$parts$render_registered_$_iter__21325.call(null,cljs.core.chunk_rest.call(null,s__21326__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21328),null);
}
} else {
var vec__21332 = cljs.core.first.call(null,s__21326__$2);
var k = cljs.core.nth.call(null,vec__21332,(0),null);
var v = cljs.core.nth.call(null,vec__21332,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__21325.call(null,cljs.core.rest.call(null,s__21326__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__8703__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__21336(s__21337){
return (new cljs.core.LazySeq(null,(function (){
var s__21337__$1 = s__21337;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21337__$1);
if(temp__4657__auto__){
var s__21337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21337__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__21337__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__21339 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__21338 = (0);
while(true){
if((i__21338 < size__8702__auto__)){
var vec__21340 = cljs.core._nth.call(null,c__8701__auto__,i__21338);
var k = cljs.core.nth.call(null,vec__21340,(0),null);
var v = cljs.core.nth.call(null,vec__21340,(1),null);
cljs.core.chunk_append.call(null,b__21339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__21346 = (i__21338 + (1));
i__21338 = G__21346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21339),day8$re_frame_10x$view$parts$render_subs_$_iter__21336.call(null,cljs.core.chunk_rest.call(null,s__21337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21339),null);
}
} else {
var vec__21343 = cljs.core.first.call(null,s__21337__$2);
var k = cljs.core.nth.call(null,vec__21343,(0),null);
var v = cljs.core.nth.call(null,vec__21343,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__21336.call(null,cljs.core.rest.call(null,s__21337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs.call(null,re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.cofx.kind)], null)], null);
});
