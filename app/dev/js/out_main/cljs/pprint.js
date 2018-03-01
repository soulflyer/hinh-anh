// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16422 = arguments.length;
var i__9058__auto___16423 = (0);
while(true){
if((i__9058__auto___16423 < len__9057__auto___16422)){
args__9064__auto__.push((arguments[i__9058__auto___16423]));

var G__16424 = (i__9058__auto___16423 + (1));
i__9058__auto___16423 = G__16424;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq16421){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16421));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16426 = arguments.length;
var i__9058__auto___16427 = (0);
while(true){
if((i__9058__auto___16427 < len__9057__auto___16426)){
args__9064__auto__.push((arguments[i__9058__auto___16427]));

var G__16428 = (i__9058__auto___16427 + (1));
i__9058__auto___16427 = G__16428;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq16425){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16425));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__16429 = cljs.core._EQ_;
var expr__16430 = c;
if(cljs.core.truth_(pred__16429.call(null,"\b",expr__16430))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\t",expr__16430))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\n",expr__16430))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\f",expr__16430))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\r",expr__16430))){
return "\\return";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\"",expr__16430))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__16429.call(null,"\\",expr__16430))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16433 = arguments.length;
var i__9058__auto___16434 = (0);
while(true){
if((i__9058__auto___16434 < len__9057__auto___16433)){
args__9064__auto__.push((arguments[i__9058__auto___16434]));

var G__16435 = (i__9058__auto___16434 + (1));
i__9058__auto___16434 = G__16435;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq16432){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16432));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16437 = arguments.length;
var i__9058__auto___16438 = (0);
while(true){
if((i__9058__auto___16438 < len__9057__auto___16437)){
args__9064__auto__.push((arguments[i__9058__auto___16438]));

var G__16439 = (i__9058__auto___16438 + (1));
i__9058__auto___16438 = G__16439;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq16436){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16436));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__16440 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__16440,(0),null);
var new_context = cljs.core.nth.call(null,vec__16440,(1),null);
var G__16443 = new_context;
var G__16444 = remainder;
var G__16445 = cljs.core.conj.call(null,acc,result);
context = G__16443;
lis__$1 = G__16444;
acc = G__16445;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16446 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__16446,(0),null);
var new_context = cljs.core.nth.call(null,vec__16446,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__16449 = new_context;
var G__16450 = cljs.core.conj.call(null,acc,result);
context = G__16449;
acc = G__16450;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16451 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__16451,(0),null);
var continue$ = cljs.core.nth.call(null,vec__16451,(1),null);
var new_context = cljs.core.nth.call(null,vec__16451,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__16454 = new_context;
var G__16455 = cljs.core.conj.call(null,acc,result);
context = G__16454;
acc = G__16455;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8703__auto__ = (function cljs$pprint$unzip_map_$_iter__16456(s__16457){
return (new cljs.core.LazySeq(null,(function (){
var s__16457__$1 = s__16457;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16457__$1);
if(temp__4657__auto__){
var s__16457__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16457__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__16457__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__16459 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__16458 = (0);
while(true){
if((i__16458 < size__8702__auto__)){
var vec__16460 = cljs.core._nth.call(null,c__8701__auto__,i__16458);
var k = cljs.core.nth.call(null,vec__16460,(0),null);
var vec__16463 = cljs.core.nth.call(null,vec__16460,(1),null);
var v1 = cljs.core.nth.call(null,vec__16463,(0),null);
var v2 = cljs.core.nth.call(null,vec__16463,(1),null);
cljs.core.chunk_append.call(null,b__16459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__16488 = (i__16458 + (1));
i__16458 = G__16488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16459),cljs$pprint$unzip_map_$_iter__16456.call(null,cljs.core.chunk_rest.call(null,s__16457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16459),null);
}
} else {
var vec__16466 = cljs.core.first.call(null,s__16457__$2);
var k = cljs.core.nth.call(null,vec__16466,(0),null);
var vec__16469 = cljs.core.nth.call(null,vec__16466,(1),null);
var v1 = cljs.core.nth.call(null,vec__16469,(0),null);
var v2 = cljs.core.nth.call(null,vec__16469,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__16456.call(null,cljs.core.rest.call(null,s__16457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8703__auto__ = (function cljs$pprint$unzip_map_$_iter__16472(s__16473){
return (new cljs.core.LazySeq(null,(function (){
var s__16473__$1 = s__16473;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16473__$1);
if(temp__4657__auto__){
var s__16473__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16473__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__16473__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__16475 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__16474 = (0);
while(true){
if((i__16474 < size__8702__auto__)){
var vec__16476 = cljs.core._nth.call(null,c__8701__auto__,i__16474);
var k = cljs.core.nth.call(null,vec__16476,(0),null);
var vec__16479 = cljs.core.nth.call(null,vec__16476,(1),null);
var v1 = cljs.core.nth.call(null,vec__16479,(0),null);
var v2 = cljs.core.nth.call(null,vec__16479,(1),null);
cljs.core.chunk_append.call(null,b__16475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__16489 = (i__16474 + (1));
i__16474 = G__16489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16475),cljs$pprint$unzip_map_$_iter__16472.call(null,cljs.core.chunk_rest.call(null,s__16473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16475),null);
}
} else {
var vec__16482 = cljs.core.first.call(null,s__16473__$2);
var k = cljs.core.nth.call(null,vec__16482,(0),null);
var vec__16485 = cljs.core.nth.call(null,vec__16482,(1),null);
var v1 = cljs.core.nth.call(null,vec__16485,(0),null);
var v2 = cljs.core.nth.call(null,vec__16485,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__16472.call(null,cljs.core.rest.call(null,s__16473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8703__auto__ = (function cljs$pprint$tuple_map_$_iter__16490(s__16491){
return (new cljs.core.LazySeq(null,(function (){
var s__16491__$1 = s__16491;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16491__$1);
if(temp__4657__auto__){
var s__16491__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16491__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__16491__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__16493 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__16492 = (0);
while(true){
if((i__16492 < size__8702__auto__)){
var vec__16494 = cljs.core._nth.call(null,c__8701__auto__,i__16492);
var k = cljs.core.nth.call(null,vec__16494,(0),null);
var v = cljs.core.nth.call(null,vec__16494,(1),null);
cljs.core.chunk_append.call(null,b__16493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__16500 = (i__16492 + (1));
i__16492 = G__16500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16493),cljs$pprint$tuple_map_$_iter__16490.call(null,cljs.core.chunk_rest.call(null,s__16491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16493),null);
}
} else {
var vec__16497 = cljs.core.first.call(null,s__16491__$2);
var k = cljs.core.nth.call(null,vec__16497,(0),null);
var v = cljs.core.nth.call(null,vec__16497,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__16490.call(null,cljs.core.rest.call(null,s__16491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__16501 = (n - (1));
n = G__16501;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__16502 = (n + (1));
n = G__16502;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__16503 = (pos + (1));
pos = G__16503;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__8578__auto__ = (((pp == null))?null:pp);
var m__8579__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,pp);
} else {
var m__8579__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__16506 = arguments.length;
switch (G__16506) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint16507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16507 = (function (writer,max_columns,fields,meta16508){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta16508 = meta16508;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_16509,meta16508__$1){
var self__ = this;
var _16509__$1 = this;
return (new cljs.pprint.t_cljs$pprint16507(self__.writer,self__.max_columns,self__.fields,meta16508__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_16509){
var self__ = this;
var _16509__$1 = this;
return self__.meta16508;
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16510 = cljs.core._EQ_;
var expr__16511 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16510.call(null,String,expr__16511))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__16510,expr__16511,this$__$1,fields){
return (function (p1__16504_SHARP_){
return cljs.core._EQ_.call(null,p1__16504_SHARP_,"\n");
});})(s,nl,pred__16510,expr__16511,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__16510.call(null,Number,expr__16511))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16511)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta16508","meta16508",-172264443,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint16507.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16507.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16507";

cljs.pprint.t_cljs$pprint16507.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16507");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16507.
 */
cljs.pprint.__GT_t_cljs$pprint16507 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint16507(writer__$1,max_columns__$1,fields__$1,meta16508){
return (new cljs.pprint.t_cljs$pprint16507(writer__$1,max_columns__$1,fields__$1,meta16508));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint16507(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16515,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16519 = k16515;
var G__16519__$1 = (((G__16519 instanceof cljs.core.Keyword))?G__16519.fqn:null);
switch (G__16519__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16515,else__8538__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16514){
var self__ = this;
var G__16514__$1 = this;
return (new cljs.core.RecordIter((0),G__16514__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16516,other16517){
var self__ = this;
var this16516__$1 = this;
return (!((other16517 == null))) && ((this16516__$1.constructor === other16517.constructor)) && (cljs.core._EQ_.call(null,this16516__$1.parent,other16517.parent)) && (cljs.core._EQ_.call(null,this16516__$1.section,other16517.section)) && (cljs.core._EQ_.call(null,this16516__$1.start_col,other16517.start_col)) && (cljs.core._EQ_.call(null,this16516__$1.indent,other16517.indent)) && (cljs.core._EQ_.call(null,this16516__$1.done_nl,other16517.done_nl)) && (cljs.core._EQ_.call(null,this16516__$1.intra_block_nl,other16517.intra_block_nl)) && (cljs.core._EQ_.call(null,this16516__$1.prefix,other16517.prefix)) && (cljs.core._EQ_.call(null,this16516__$1.per_line_prefix,other16517.per_line_prefix)) && (cljs.core._EQ_.call(null,this16516__$1.suffix,other16517.suffix)) && (cljs.core._EQ_.call(null,this16516__$1.logical_block_callback,other16517.logical_block_callback)) && (cljs.core._EQ_.call(null,this16516__$1.__extmap,other16517.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16514){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16520 = cljs.core.keyword_identical_QMARK_;
var expr__16521 = k__8543__auto__;
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__16521))){
return (new cljs.pprint.logical_block(G__16514,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,G__16514,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__16514,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__16514,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__16514,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__16514,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__16514,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__16514,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__16514,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__16521))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__16514,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16514),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16514){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__16514,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__16518){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__16518),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__16518),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16518,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__16524 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__16524;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16526,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16530 = k16526;
var G__16530__$1 = (((G__16530 instanceof cljs.core.Keyword))?G__16530.fqn:null);
switch (G__16530__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16526,else__8538__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16525){
var self__ = this;
var G__16525__$1 = this;
return (new cljs.core.RecordIter((0),G__16525__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16527,other16528){
var self__ = this;
var this16527__$1 = this;
return (!((other16528 == null))) && ((this16527__$1.constructor === other16528.constructor)) && (cljs.core._EQ_.call(null,this16527__$1.type_tag,other16528.type_tag)) && (cljs.core._EQ_.call(null,this16527__$1.data,other16528.data)) && (cljs.core._EQ_.call(null,this16527__$1.trailing_white_space,other16528.trailing_white_space)) && (cljs.core._EQ_.call(null,this16527__$1.start_pos,other16528.start_pos)) && (cljs.core._EQ_.call(null,this16527__$1.end_pos,other16528.end_pos)) && (cljs.core._EQ_.call(null,this16527__$1.__extmap,other16528.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16525){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16531 = cljs.core.keyword_identical_QMARK_;
var expr__16532 = k__8543__auto__;
if(cljs.core.truth_(pred__16531.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16532))){
return (new cljs.pprint.buffer_blob(G__16525,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16531.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__16532))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__16525,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16531.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__16532))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__16525,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16531.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16532))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__16525,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16531.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16532))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__16525,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16525),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16525){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__16525,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__16529){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16529),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__16529),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__16529),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16529),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16529),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16529,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16356__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16356__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16536,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16540 = k16536;
var G__16540__$1 = (((G__16540 instanceof cljs.core.Keyword))?G__16540.fqn:null);
switch (G__16540__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16536,else__8538__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16535){
var self__ = this;
var G__16535__$1 = this;
return (new cljs.core.RecordIter((0),G__16535__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16537,other16538){
var self__ = this;
var this16537__$1 = this;
return (!((other16538 == null))) && ((this16537__$1.constructor === other16538.constructor)) && (cljs.core._EQ_.call(null,this16537__$1.type_tag,other16538.type_tag)) && (cljs.core._EQ_.call(null,this16537__$1.type,other16538.type)) && (cljs.core._EQ_.call(null,this16537__$1.logical_block,other16538.logical_block)) && (cljs.core._EQ_.call(null,this16537__$1.start_pos,other16538.start_pos)) && (cljs.core._EQ_.call(null,this16537__$1.end_pos,other16538.end_pos)) && (cljs.core._EQ_.call(null,this16537__$1.__extmap,other16538.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16535){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16541 = cljs.core.keyword_identical_QMARK_;
var expr__16542 = k__8543__auto__;
if(cljs.core.truth_(pred__16541.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16542))){
return (new cljs.pprint.nl_t(G__16535,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16541.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__16542))){
return (new cljs.pprint.nl_t(self__.type_tag,G__16535,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16541.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16542))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__16535,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16541.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16542))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__16535,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16541.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16542))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__16535,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16535),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16535){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__16535,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__16539){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16539),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__16539),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16539),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16539),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16539),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16539,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16356__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16356__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16546,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16550 = k16546;
var G__16550__$1 = (((G__16550 instanceof cljs.core.Keyword))?G__16550.fqn:null);
switch (G__16550__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16546,else__8538__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16545){
var self__ = this;
var G__16545__$1 = this;
return (new cljs.core.RecordIter((0),G__16545__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16547,other16548){
var self__ = this;
var this16547__$1 = this;
return (!((other16548 == null))) && ((this16547__$1.constructor === other16548.constructor)) && (cljs.core._EQ_.call(null,this16547__$1.type_tag,other16548.type_tag)) && (cljs.core._EQ_.call(null,this16547__$1.logical_block,other16548.logical_block)) && (cljs.core._EQ_.call(null,this16547__$1.start_pos,other16548.start_pos)) && (cljs.core._EQ_.call(null,this16547__$1.end_pos,other16548.end_pos)) && (cljs.core._EQ_.call(null,this16547__$1.__extmap,other16548.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16545){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16551 = cljs.core.keyword_identical_QMARK_;
var expr__16552 = k__8543__auto__;
if(cljs.core.truth_(pred__16551.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16552))){
return (new cljs.pprint.start_block_t(G__16545,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16551.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16552))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__16545,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16551.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16552))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__16545,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16551.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16552))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16545,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16545),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16545){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16545,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__16549){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16549),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16549),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16549),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16549),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16549,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16356__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16356__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16556,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16560 = k16556;
var G__16560__$1 = (((G__16560 instanceof cljs.core.Keyword))?G__16560.fqn:null);
switch (G__16560__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16556,else__8538__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16555){
var self__ = this;
var G__16555__$1 = this;
return (new cljs.core.RecordIter((0),G__16555__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16557,other16558){
var self__ = this;
var this16557__$1 = this;
return (!((other16558 == null))) && ((this16557__$1.constructor === other16558.constructor)) && (cljs.core._EQ_.call(null,this16557__$1.type_tag,other16558.type_tag)) && (cljs.core._EQ_.call(null,this16557__$1.logical_block,other16558.logical_block)) && (cljs.core._EQ_.call(null,this16557__$1.start_pos,other16558.start_pos)) && (cljs.core._EQ_.call(null,this16557__$1.end_pos,other16558.end_pos)) && (cljs.core._EQ_.call(null,this16557__$1.__extmap,other16558.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16555){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16561 = cljs.core.keyword_identical_QMARK_;
var expr__16562 = k__8543__auto__;
if(cljs.core.truth_(pred__16561.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16562))){
return (new cljs.pprint.end_block_t(G__16555,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16561.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16562))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__16555,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16561.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16562))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__16555,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16561.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16562))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16555,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16555),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16555){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16555,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__16559){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16559),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16559),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16559),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16559),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16559,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16356__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16356__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16566,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16570 = k16566;
var G__16570__$1 = (((G__16570 instanceof cljs.core.Keyword))?G__16570.fqn:null);
switch (G__16570__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16566,else__8538__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16565){
var self__ = this;
var G__16565__$1 = this;
return (new cljs.core.RecordIter((0),G__16565__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16567,other16568){
var self__ = this;
var this16567__$1 = this;
return (!((other16568 == null))) && ((this16567__$1.constructor === other16568.constructor)) && (cljs.core._EQ_.call(null,this16567__$1.type_tag,other16568.type_tag)) && (cljs.core._EQ_.call(null,this16567__$1.logical_block,other16568.logical_block)) && (cljs.core._EQ_.call(null,this16567__$1.relative_to,other16568.relative_to)) && (cljs.core._EQ_.call(null,this16567__$1.offset,other16568.offset)) && (cljs.core._EQ_.call(null,this16567__$1.start_pos,other16568.start_pos)) && (cljs.core._EQ_.call(null,this16567__$1.end_pos,other16568.end_pos)) && (cljs.core._EQ_.call(null,this16567__$1.__extmap,other16568.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16565){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16571 = cljs.core.keyword_identical_QMARK_;
var expr__16572 = k__8543__auto__;
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__16572))){
return (new cljs.pprint.indent_t(G__16565,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__16572))){
return (new cljs.pprint.indent_t(self__.type_tag,G__16565,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__16572))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__16565,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__16572))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__16565,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__16572))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__16565,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16571.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__16572))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__16565,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16565),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16565){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__16565,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__16569){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__16569),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__16569),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__16569),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__16569),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__16569),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__16569),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16569,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16356__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__16356__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__8849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__,hierarchy__8853__auto__){
return (function (p1__16576_SHARP_,p2__16575_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__16575_SHARP_);
});})(method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__,hierarchy__8853__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8853__auto__,method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4657__auto___16577 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___16577)){
var cb_16578 = temp__4657__auto___16577;
cb_16578.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___16579 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___16579)){
var prefix_16580 = temp__4657__auto___16579;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_16580);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4657__auto___16581 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___16581)){
var cb_16582 = temp__4657__auto___16581;
cb_16582.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__16583 = cljs.core._EQ_;
var expr__16584 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__16583.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__16584))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__16583.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__16584))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16584)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__7895__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__7883__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__7883__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4655__auto___16586 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___16586)){
var tws_16587 = temp__4655__auto___16586;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16587);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__16588 = cljs.core.seq.call(null,tokens);
var chunk__16589 = null;
var count__16590 = (0);
var i__16591 = (0);
while(true){
if((i__16591 < count__16590)){
var token = cljs.core._nth.call(null,chunk__16589,i__16591);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___16592 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___16592)){
var tws_16593 = temp__4655__auto___16592;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16593);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_16594 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__7883__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7883__auto__)){
return tws_16594;
} else {
return and__7883__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16594);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__16595 = seq__16588;
var G__16596 = chunk__16589;
var G__16597 = count__16590;
var G__16598 = (i__16591 + (1));
seq__16588 = G__16595;
chunk__16589 = G__16596;
count__16590 = G__16597;
i__16591 = G__16598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16588);
if(temp__4657__auto__){
var seq__16588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16588__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__16588__$1);
var G__16599 = cljs.core.chunk_rest.call(null,seq__16588__$1);
var G__16600 = c__8734__auto__;
var G__16601 = cljs.core.count.call(null,c__8734__auto__);
var G__16602 = (0);
seq__16588 = G__16599;
chunk__16589 = G__16600;
count__16590 = G__16601;
i__16591 = G__16602;
continue;
} else {
var token = cljs.core.first.call(null,seq__16588__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___16603 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___16603)){
var tws_16604 = temp__4655__auto___16603;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16604);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_16605 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__7883__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7883__auto__)){
return tws_16605;
} else {
return and__7883__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_16605);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__16606 = cljs.core.next.call(null,seq__16588__$1);
var G__16607 = null;
var G__16608 = (0);
var G__16609 = (0);
seq__16588 = G__16606;
chunk__16589 = G__16607;
count__16590 = G__16608;
i__16591 = G__16609;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__7895__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__7883__auto__ = miser_width;
if(cljs.core.truth_(and__7883__auto__)){
var and__7883__auto____$1 = maxcol;
if(cljs.core.truth_(and__7883__auto____$1)){
var and__7883__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__7883__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__7883__auto____$2;
}
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__8849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__,hierarchy__8853__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__,hierarchy__8853__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8853__auto__,method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__7895__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
var or__7895__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__7895__auto____$1){
return or__7895__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__16610_SHARP_){
return cljs.core.not.call(null,(function (){var and__7883__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__16610_SHARP_);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__16610_SHARP_),lb);
} else {
return and__7883__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__16611_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__16611_SHARP_);
return cljs.core.not.call(null,(function (){var and__7883__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__16611_SHARP_);
if(cljs.core.truth_(and__7883__auto__)){
var or__7895__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__7895__auto__){
return or__7895__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__7883__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__16612 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__16612;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_16613 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_16613);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__16614_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__16614_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__16615 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__16615,(0),null);
var b = cljs.core.nth.call(null,vec__16615,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__16618 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__16618,(0),null);
var remainder = cljs.core.nth.call(null,vec__16618,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__16621 = new_buffer;
buffer = G__16621;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4655__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_16626 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_16627 = (oldpos_16626 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_16627);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_16626,newpos_16627));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__16622_16628 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__16623_16629 = null;
var count__16624_16630 = (0);
var i__16625_16631 = (0);
while(true){
if((i__16625_16631 < count__16624_16630)){
var l_16632__$1 = cljs.core._nth.call(null,chunk__16623_16629,i__16625_16631);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_16632__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__16633 = seq__16622_16628;
var G__16634 = chunk__16623_16629;
var G__16635 = count__16624_16630;
var G__16636 = (i__16625_16631 + (1));
seq__16622_16628 = G__16633;
chunk__16623_16629 = G__16634;
count__16624_16630 = G__16635;
i__16625_16631 = G__16636;
continue;
} else {
var temp__4657__auto___16637 = cljs.core.seq.call(null,seq__16622_16628);
if(temp__4657__auto___16637){
var seq__16622_16638__$1 = temp__4657__auto___16637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16622_16638__$1)){
var c__8734__auto___16639 = cljs.core.chunk_first.call(null,seq__16622_16638__$1);
var G__16640 = cljs.core.chunk_rest.call(null,seq__16622_16638__$1);
var G__16641 = c__8734__auto___16639;
var G__16642 = cljs.core.count.call(null,c__8734__auto___16639);
var G__16643 = (0);
seq__16622_16628 = G__16640;
chunk__16623_16629 = G__16641;
count__16624_16630 = G__16642;
i__16625_16631 = G__16643;
continue;
} else {
var l_16644__$1 = cljs.core.first.call(null,seq__16622_16638__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_16644__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__16645 = cljs.core.next.call(null,seq__16622_16638__$1);
var G__16646 = null;
var G__16647 = (0);
var G__16648 = (0);
seq__16622_16628 = G__16645;
chunk__16623_16629 = G__16646;
count__16624_16630 = G__16647;
i__16625_16631 = G__16648;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint16649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16649 = (function (writer,max_columns,miser_width,lb,fields,meta16650){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta16650 = meta16650;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_16651,meta16650__$1){
var self__ = this;
var _16651__$1 = this;
return (new cljs.pprint.t_cljs$pprint16649(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta16650__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_16651){
var self__ = this;
var _16651__$1 = this;
return self__.meta16650;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16652 = cljs.core._EQ_;
var expr__16653 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16652.call(null,String,expr__16653))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__16652.call(null,Number,expr__16653))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16653)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint16649.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta16650","meta16650",1039298513,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16649.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16649.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16649";

cljs.pprint.t_cljs$pprint16649.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16649");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16649.
 */
cljs.pprint.__GT_t_cljs$pprint16649 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint16649(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16650){
return (new cljs.pprint.t_cljs$pprint16649(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16650));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint16649(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__4657__auto___16655 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___16655)){
var cb_16656 = temp__4657__auto___16655;
cb_16656.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4657__auto___16657 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___16657)){
var cb_16658 = temp__4657__auto___16657;
cb_16658.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_16659 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_16660 = (oldpos_16659 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_16660);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_16659,newpos_16660));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__16661 = cljs.core._EQ_;
var expr__16662 = relative_to;
if(cljs.core.truth_(pred__16661.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__16662))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__16661.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__16662))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16662)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__16664_SHARP_){
var temp__4657__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__16664_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__16664_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__7883__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__7883__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__7883__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__7883__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__7883__auto__)){
var and__7883__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__7883__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16683 = arguments.length;
var i__9058__auto___16684 = (0);
while(true){
if((i__9058__auto___16684 < len__9057__auto___16683)){
args__9064__auto__.push((arguments[i__9058__auto___16684]));

var G__16685 = (i__9058__auto___16684 + (1));
i__9058__auto___16684 = G__16685;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_16669 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_16670 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_16671 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_16672 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_16673 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_16674 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_16675 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_16676 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_16677 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_16678 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_16679 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_16680 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16339__auto___16686 = base_writer;
var new_writer__16340__auto___16687 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__16339__auto___16686));
var _STAR_out_STAR_16681_16688 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16340__auto___16687)?cljs.pprint.make_pretty_writer.call(null,base_writer__16339__auto___16686,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16339__auto___16686);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16681_16688;
}} else {
var _STAR_out_STAR_16682_16689 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16682_16689;
}}

if(optval === true){
cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_16680;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_16679;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_16678;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_16677;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16676;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_16675;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_16674;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_16673;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_16672;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_16671;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_16670;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_16669;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq16667){
var G__16668 = cljs.core.first.call(null,seq16667);
var seq16667__$1 = cljs.core.next.call(null,seq16667);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__16668,seq16667__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__16691 = arguments.length;
switch (G__16691) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16692 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16692;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16339__auto__ = writer;
var new_writer__16340__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__16339__auto__));
var _STAR_out_STAR_16693 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16340__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__16339__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16339__auto__);

try{var _STAR_print_pretty_STAR_16694_16696 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16694_16696;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16693;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__7883__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__7883__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__7883__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9064__auto__ = [];
var len__9057__auto___16700 = arguments.length;
var i__9058__auto___16701 = (0);
while(true){
if((i__9058__auto___16701 < len__9057__auto___16700)){
args__9064__auto__.push((arguments[i__9058__auto___16701]));

var G__16702 = (i__9058__auto___16701 + (1));
i__9058__auto___16701 = G__16702;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq16697){
var G__16698 = cljs.core.first.call(null,seq16697);
var seq16697__$1 = cljs.core.next.call(null,seq16697);
var G__16699 = cljs.core.first.call(null,seq16697__$1);
var seq16697__$2 = cljs.core.next.call(null,seq16697__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__16698,G__16699,seq16697__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16704,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16708 = k16704;
var G__16708__$1 = (((G__16708 instanceof cljs.core.Keyword))?G__16708.fqn:null);
switch (G__16708__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16704,else__8538__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16703){
var self__ = this;
var G__16703__$1 = this;
return (new cljs.core.RecordIter((0),G__16703__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16705,other16706){
var self__ = this;
var this16705__$1 = this;
return (!((other16706 == null))) && ((this16705__$1.constructor === other16706.constructor)) && (cljs.core._EQ_.call(null,this16705__$1.seq,other16706.seq)) && (cljs.core._EQ_.call(null,this16705__$1.rest,other16706.rest)) && (cljs.core._EQ_.call(null,this16705__$1.pos,other16706.pos)) && (cljs.core._EQ_.call(null,this16705__$1.__extmap,other16706.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16703){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16709 = cljs.core.keyword_identical_QMARK_;
var expr__16710 = k__8543__auto__;
if(cljs.core.truth_(pred__16709.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__16710))){
return (new cljs.pprint.arg_navigator(G__16703,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16709.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__16710))){
return (new cljs.pprint.arg_navigator(self__.seq,G__16703,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16709.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__16710))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__16703,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16703),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16703){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__16703,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__16707){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__16707),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__16707),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__16707),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16707,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__16713 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__16713,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16713,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k16717,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__16721 = k16717;
var G__16721__$1 = (((G__16721 instanceof cljs.core.Keyword))?G__16721.fqn:null);
switch (G__16721__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16717,else__8538__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16716){
var self__ = this;
var G__16716__$1 = this;
return (new cljs.core.RecordIter((0),G__16716__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16718,other16719){
var self__ = this;
var this16718__$1 = this;
return (!((other16719 == null))) && ((this16718__$1.constructor === other16719.constructor)) && (cljs.core._EQ_.call(null,this16718__$1.func,other16719.func)) && (cljs.core._EQ_.call(null,this16718__$1.def,other16719.def)) && (cljs.core._EQ_.call(null,this16718__$1.params,other16719.params)) && (cljs.core._EQ_.call(null,this16718__$1.offset,other16719.offset)) && (cljs.core._EQ_.call(null,this16718__$1.__extmap,other16719.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__16716){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__16722 = cljs.core.keyword_identical_QMARK_;
var expr__16723 = k__8543__auto__;
if(cljs.core.truth_(pred__16722.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__16723))){
return (new cljs.pprint.compiled_directive(G__16716,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16722.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__16723))){
return (new cljs.pprint.compiled_directive(self__.func,G__16716,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16722.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__16723))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__16716,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16722.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__16723))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__16716,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__16716),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__16716){
var self__ = this;
var this__8534__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__16716,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__16720){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__16720),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__16720),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__16720),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__16720),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__16720,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__16726,navigator){
var vec__16727 = p__16726;
var param = cljs.core.nth.call(null,vec__16727,(0),null);
var vec__16730 = cljs.core.nth.call(null,vec__16727,(1),null);
var raw_val = cljs.core.nth.call(null,vec__16730,(0),null);
var offset = cljs.core.nth.call(null,vec__16730,(1),null);
var vec__16733 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__16733,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__16733,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__16736 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__16736,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__16736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__7895__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__16739 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__16739,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__16739,(1),null);
var base_output = (function (){var or__7895__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__16742_SHARP_){
if((p1__16742_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__16742_SHARP_,base),cljs.core.quot.call(null,p1__16742_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__16743_SHARP_){
if((p1__16743_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__16743_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__16743_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__16745 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__16745,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__16745,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_16748 = (arg < (0));
var pos_arg_16749 = ((neg_16748)?(- arg):arg);
var raw_str_16750 = cljs.pprint.opt_base_str.call(null,base,pos_arg_16749);
var group_str_16751 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_16748,pos_arg_16749,raw_str_16750,vec__16745,arg,arg_navigator__$1){
return (function (p1__16744_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__16744_SHARP_);
});})(neg_16748,pos_arg_16749,raw_str_16750,vec__16745,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_16750));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_16750);
var signed_str_16752 = ((neg_16748)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16751)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16751)].join(''):group_str_16751
));
var padded_str_16753 = (((signed_str_16752.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_16752.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_16752)].join(''):signed_str_16752);
cljs.pprint.print.call(null,padded_str_16753);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__16754 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__16755 = (pos - (1));
var G__16756 = cljs.core.first.call(null,remainder);
var G__16757 = cljs.core.next.call(null,remainder);
acc = G__16754;
pos = G__16755;
this$ = G__16756;
remainder = G__16757;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__16758 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16758,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16758,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_16761 = (((arg < (0)))?(- arg):arg);
var parts_16762 = cljs.pprint.remainders.call(null,(1000),abs_arg_16761);
if((cljs.core.count.call(null,parts_16762) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_16763 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_16762);
var full_str_16764 = cljs.pprint.add_english_scales.call(null,parts_strs_16763,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_16764)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__16765 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16765,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16765,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_16768 = (((arg < (0)))?(- arg):arg);
var parts_16769 = cljs.pprint.remainders.call(null,(1000),abs_arg_16768);
if((cljs.core.count.call(null,parts_16769) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_16770 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_16769));
var head_str_16771 = cljs.pprint.add_english_scales.call(null,parts_strs_16770,(1));
var tail_str_16772 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_16769));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,head_str_16771))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_16772))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16771),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_16772)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_16771)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16771),"th"].join(''):tail_str_16772
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_16773 = cljs.core.rem.call(null,arg,(100));
var not_teens_16774 = (((11) < low_two_digits_16773)) || (((19) > low_two_digits_16773));
var low_digit_16775 = cljs.core.rem.call(null,low_two_digits_16773,(10));
cljs.pprint.print.call(null,((((low_digit_16775 === (1))) && (not_teens_16774))?"st":((((low_digit_16775 === (2))) && (not_teens_16774))?"nd":((((low_digit_16775 === (3))) && (not_teens_16774))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__16776 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16776,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16776,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_16779 = cljs.pprint.remainders.call(null,(10),arg);
var acc_16780 = cljs.core.PersistentVector.EMPTY;
var pos_16781 = (cljs.core.count.call(null,digits_16779) - (1));
var digits_16782__$1 = digits_16779;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_16782__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_16780));
} else {
var digit_16783 = cljs.core.first.call(null,digits_16782__$1);
var G__16784 = ((cljs.core._EQ_.call(null,(0),digit_16783))?acc_16780:cljs.core.conj.call(null,acc_16780,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_16781),(digit_16783 - (1)))));
var G__16785 = (pos_16781 - (1));
var G__16786 = cljs.core.next.call(null,digits_16782__$1);
acc_16780 = G__16784;
pos_16781 = G__16785;
digits_16782__$1 = G__16786;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__16787 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__16787,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16787,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__16790 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__16790,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16790,(1),null);
var pred__16793_16796 = cljs.core._EQ_;
var expr__16794_16797 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__16793_16796.call(null,"o",expr__16794_16797))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__16793_16796.call(null,"u",expr__16794_16797))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__16793_16796.call(null,null,expr__16794_16797))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16794_16797)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__16798 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__16798,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16798,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__16801 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__16801,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__16801,(1),null);
var vec__16804 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__16804,(0),null);
var offsets = cljs.core.nth.call(null,vec__16804,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__16807 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__16807,(0),null);
var e = cljs.core.nth.call(null,vec__16807,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__16810 = (i - (1));
i = G__16810;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__7895__auto__ = d;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8245__auto__ = (2);
var y__8246__auto__ = w;
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8245__auto__ = (e + (1));
var y__8246__auto__ = (w__$1 - (1));
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})():(w__$1 + e)
));
var vec__16811 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__16811,(0),null);
var e1 = cljs.core.nth.call(null,vec__16811,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__16811,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__16811,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__16814 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__16814,(0),null);
var e1 = cljs.core.nth.call(null,vec__16814,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__16817 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16817,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16817,(1),null);
var vec__16820 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__16820,(0),null);
var abs = cljs.core.nth.call(null,vec__16820,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__16823 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__16823,(0),null);
var exp = cljs.core.nth.call(null,vec__16823,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__7895__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__16826 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__16826,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__16826,(1),null);
var expanded = cljs.core.nth.call(null,vec__16826,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__7883__auto__ = w;
if(cljs.core.truth_(and__7883__auto__)){
var and__7883__auto____$1 = d;
if(cljs.core.truth_(and__7883__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_16829 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_16830 = (cljs.core.truth_(add_sign)?(len_16829 + (1)):len_16829);
var prepend_zero_16831__$1 = (prepend_zero) && (!((signed_len_16830 >= w)));
var append_zero_16832__$1 = (append_zero) && (!((signed_len_16830 >= w)));
var full_len_16833 = (((prepend_zero_16831__$1) || (append_zero_16832__$1))?(signed_len_16830 + (1)):signed_len_16830);
if(cljs.core.truth_((function (){var and__7883__auto__ = (full_len_16833 > w);
if(and__7883__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7883__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_16833),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16831__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16832__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__16834 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16834,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16834,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__16840_16850 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__16841_16851 = G__16840_16850;
var mantissa_16852 = cljs.core.nth.call(null,vec__16841_16851,(0),null);
var exp_16853 = cljs.core.nth.call(null,vec__16841_16851,(1),null);
var G__16840_16854__$1 = G__16840_16850;
while(true){
var vec__16844_16855 = G__16840_16854__$1;
var mantissa_16856__$1 = cljs.core.nth.call(null,vec__16844_16855,(0),null);
var exp_16857__$1 = cljs.core.nth.call(null,vec__16844_16855,(1),null);
var w_16858 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_16859 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_16860 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_16861 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_16862 = (function (){var or__7895__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return "E";
}
})();
var add_sign_16863 = (function (){var or__7895__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_16864 = (k_16861 <= (0));
var scaled_exp_16865 = (exp_16857__$1 - (k_16861 - (1)));
var scaled_exp_str_16866 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_16865))].join('');
var scaled_exp_str_16867__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_16862),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_16865 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_16860)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_16860 - cljs.core.count.call(null,scaled_exp_str_16866)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16866)].join('');
var exp_width_16868 = cljs.core.count.call(null,scaled_exp_str_16867__$1);
var base_mantissa_width_16869 = cljs.core.count.call(null,mantissa_16856__$1);
var scaled_mantissa_16870 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_16861),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_16856__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_16859)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_16859 - (base_mantissa_width_16869 - (1))) - (((k_16861 < (0)))?(- k_16861):(0))),"0")):null))].join('');
var w_mantissa_16871 = (cljs.core.truth_(w_16858)?(w_16858 - exp_width_16868):null);
var vec__16847_16872 = cljs.pprint.round_str.call(null,scaled_mantissa_16870,(0),((cljs.core._EQ_.call(null,k_16861,(0)))?(d_16859 - (1)):(((k_16861 > (0)))?d_16859:(((k_16861 < (0)))?(d_16859 - (1)):null))),(cljs.core.truth_(w_mantissa_16871)?(w_mantissa_16871 - (cljs.core.truth_(add_sign_16863)?(1):(0))):null));
var rounded_mantissa_16873 = cljs.core.nth.call(null,vec__16847_16872,(0),null);
var __16874 = cljs.core.nth.call(null,vec__16847_16872,(1),null);
var incr_exp_16875 = cljs.core.nth.call(null,vec__16847_16872,(2),null);
var full_mantissa_16876 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_16873,k_16861);
var append_zero_16877 = (cljs.core._EQ_.call(null,k_16861,cljs.core.count.call(null,rounded_mantissa_16873))) && ((d_16859 == null));
if(cljs.core.not.call(null,incr_exp_16875)){
if(cljs.core.truth_(w_16858)){
var len_16878 = (cljs.core.count.call(null,full_mantissa_16876) + exp_width_16868);
var signed_len_16879 = (cljs.core.truth_(add_sign_16863)?(len_16878 + (1)):len_16878);
var prepend_zero_16880__$1 = (prepend_zero_16864) && (!(cljs.core._EQ_.call(null,signed_len_16879,w_16858)));
var full_len_16881 = ((prepend_zero_16880__$1)?(signed_len_16879 + (1)):signed_len_16879);
var append_zero_16882__$1 = (append_zero_16877) && ((full_len_16881 < w_16858));
if(cljs.core.truth_((function (){var and__7883__auto__ = (function (){var or__7895__auto__ = (full_len_16881 > w_16858);
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = e_16860;
if(cljs.core.truth_(and__7883__auto__)){
return ((exp_width_16868 - (2)) > e_16860);
} else {
return and__7883__auto__;
}
}
})();
if(cljs.core.truth_(and__7883__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7883__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_16858,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_16858 - full_len_16881) - ((append_zero_16882__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16863)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16880__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16876),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16882__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16867__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16863)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16864)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16876),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16877)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16867__$1)].join(''));
}
} else {
var G__16883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_16873,(exp_16857__$1 + (1))], null);
G__16840_16854__$1 = G__16883;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__16884 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16884,(0),null);
var _ = cljs.core.nth.call(null,vec__16884,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__16887 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__16887,(0),null);
var exp = cljs.core.nth.call(null,vec__16887,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8245__auto__ = cljs.core.count.call(null,mantissa);
var y__8246__auto__ = (function (){var x__8252__auto__ = n;
var y__8253__auto__ = (7);
return ((x__8252__auto__ < y__8253__auto__) ? x__8252__auto__ : y__8253__auto__);
})();
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__16890 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__16890,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16890,(1),null);
var vec__16893 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__16893,(0),null);
var exp = cljs.core.nth.call(null,vec__16893,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__7895__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (arg < (0));
}
})();
var vec__16896 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__16896,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__16896,(1),null);
var expanded = cljs.core.nth.call(null,vec__16896,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7883__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7883__auto__)){
return add_sign;
} else {
return and__7883__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7883__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__7883__auto__){
return add_sign;
} else {
return and__7883__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__16899 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__16899,(0),null);
var navigator = cljs.core.nth.call(null,vec__16899,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__16902 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__16902,(0),null);
var navigator = cljs.core.nth.call(null,vec__16902,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__16905 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__16905,(0),null);
var navigator = cljs.core.nth.call(null,vec__16905,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__16908 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__16908,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16908,(1),null);
var vec__16911 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__16911,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__16911,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7895__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = max_count;
if(cljs.core.truth_(and__7883__auto__)){
return (count >= max_count);
} else {
return and__7883__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__16914 = (count + (1));
var G__16915 = iter_result;
var G__16916 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__16914;
args__$1 = G__16915;
last_pos = G__16916;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__16917 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__16917,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16917,(1),null);
var vec__16920 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__16920,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__16920,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__7895__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = max_count;
if(cljs.core.truth_(and__7883__auto__)){
return (count >= max_count);
} else {
return and__7883__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__16923 = (count + (1));
var G__16924 = cljs.core.next.call(null,arg_list__$1);
count = G__16923;
arg_list__$1 = G__16924;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__16925 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__16925,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16925,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7895__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = max_count;
if(cljs.core.truth_(and__7883__auto__)){
return (count >= max_count);
} else {
return and__7883__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__16928 = (count + (1));
var G__16929 = iter_result;
var G__16930 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__16928;
navigator__$2 = G__16929;
last_pos = G__16930;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__16931 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__16931,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__16931,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__7895__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7895__auto__){
return or__7895__auto__;
} else {
var and__7883__auto__ = max_count;
if(cljs.core.truth_(and__7883__auto__)){
return (count >= max_count);
} else {
return and__7883__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__16934 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__16934,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__16934,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__16937 = (count + (1));
var G__16938 = navigator__$3;
count = G__16937;
navigator__$2 = G__16938;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__16939 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16942 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16942;
}})();
var iter_result = cljs.core.nth.call(null,vec__16939,(0),null);
var result_str = cljs.core.nth.call(null,vec__16939,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__16943 = cljs.core.next.call(null,clauses__$1);
var G__16944 = cljs.core.conj.call(null,acc,result_str);
var G__16945 = iter_result;
clauses__$1 = G__16943;
acc = G__16944;
navigator__$1 = G__16945;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__16946 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__16949 = cljs.core.nth.call(null,vec__16946,(0),null);
var eol_str = cljs.core.nth.call(null,vec__16949,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__16946,(1),null);
var navigator__$1 = (function (){var or__7895__auto__ = new_navigator;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return navigator;
}
})();
var vec__16952 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__16952,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__16952,(1),null);
var navigator__$2 = (function (){var or__7895__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__7895__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__7895__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__16955 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__16955,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__16955,(1),null);
var slots = (function (){var x__8245__auto__ = (1);
var y__8246__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8245__auto__ = minpad;
var y__8246__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__7883__auto__ = eol_str;
if(cljs.core.truth_(and__7883__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__7883__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_16958__$1 = slots;
var extra_pad_16959__$1 = extra_pad;
var strs_16960__$1 = strs;
var pad_only_16961 = (function (){var or__7895__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_16960__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_16960__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_16961))?cljs.core.first.call(null,strs_16960__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__7895__auto__ = pad_only_16961;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
var or__7895__auto____$1 = cljs.core.next.call(null,strs_16960__$1);
if(or__7895__auto____$1){
return or__7895__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_16959__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__16962 = (slots_16958__$1 - (1));
var G__16963 = (extra_pad_16959__$1 - (1));
var G__16964 = (cljs.core.truth_(pad_only_16961)?strs_16960__$1:cljs.core.next.call(null,strs_16960__$1));
var G__16965 = false;
slots_16958__$1 = G__16962;
extra_pad_16959__$1 = G__16963;
strs_16960__$1 = G__16964;
pad_only_16961 = G__16965;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16966 = (function (writer,meta16967){
this.writer = writer;
this.meta16967 = meta16967;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16968,meta16967__$1){
var self__ = this;
var _16968__$1 = this;
return (new cljs.pprint.t_cljs$pprint16966(self__.writer,meta16967__$1));
});

cljs.pprint.t_cljs$pprint16966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16968){
var self__ = this;
var _16968__$1 = this;
return self__.meta16967;
});

cljs.pprint.t_cljs$pprint16966.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint16966.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16969 = cljs.core._EQ_;
var expr__16970 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16969.call(null,String,expr__16970))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__16969.call(null,Number,expr__16970))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16970)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta16967","meta16967",618474907,null)], null);
});

cljs.pprint.t_cljs$pprint16966.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16966.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16966";

cljs.pprint.t_cljs$pprint16966.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16966");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16966.
 */
cljs.pprint.__GT_t_cljs$pprint16966 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint16966(writer__$1,meta16967){
return (new cljs.pprint.t_cljs$pprint16966(writer__$1,meta16967));
});

}

return (new cljs.pprint.t_cljs$pprint16966(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint16972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16972 = (function (writer,meta16973){
this.writer = writer;
this.meta16973 = meta16973;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16974,meta16973__$1){
var self__ = this;
var _16974__$1 = this;
return (new cljs.pprint.t_cljs$pprint16972(self__.writer,meta16973__$1));
});

cljs.pprint.t_cljs$pprint16972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16974){
var self__ = this;
var _16974__$1 = this;
return self__.meta16973;
});

cljs.pprint.t_cljs$pprint16972.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint16972.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16975 = cljs.core._EQ_;
var expr__16976 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16975.call(null,String,expr__16976))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__16975.call(null,Number,expr__16976))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16976)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint16972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta16973","meta16973",101666770,null)], null);
});

cljs.pprint.t_cljs$pprint16972.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16972.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16972";

cljs.pprint.t_cljs$pprint16972.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16972");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16972.
 */
cljs.pprint.__GT_t_cljs$pprint16972 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint16972(writer__$1,meta16973){
return (new cljs.pprint.t_cljs$pprint16972(writer__$1,meta16973));
});

}

return (new cljs.pprint.t_cljs$pprint16972(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__7883__auto__ = first_QMARK_;
if(cljs.core.truth_(and__7883__auto__)){
var and__7883__auto____$1 = f;
if(cljs.core.truth_(and__7883__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__7883__auto__ = m;
if(cljs.core.truth_(and__7883__auto__)){
return (m.index + (1));
} else {
return and__7883__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint16978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16978 = (function (writer,last_was_whitespace_QMARK_,meta16979){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta16979 = meta16979;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_16980,meta16979__$1){
var self__ = this;
var _16980__$1 = this;
return (new cljs.pprint.t_cljs$pprint16978(self__.writer,self__.last_was_whitespace_QMARK_,meta16979__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_16980){
var self__ = this;
var _16980__$1 = this;
return self__.meta16979;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16978.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16978.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16981 = cljs.core._EQ_;
var expr__16982 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16981.call(null,String,expr__16982))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__16981.call(null,Number,expr__16982))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16982)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16978.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta16979","meta16979",670675790,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint16978.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16978.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16978";

cljs.pprint.t_cljs$pprint16978.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16978");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16978.
 */
cljs.pprint.__GT_t_cljs$pprint16978 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint16978(writer__$1,last_was_whitespace_QMARK___$1,meta16979){
return (new cljs.pprint.t_cljs$pprint16978(writer__$1,last_was_whitespace_QMARK___$1,meta16979));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint16978(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint16984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16984 = (function (writer,capped,meta16985){
this.writer = writer;
this.capped = capped;
this.meta16985 = meta16985;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_16986,meta16985__$1){
var self__ = this;
var _16986__$1 = this;
return (new cljs.pprint.t_cljs$pprint16984(self__.writer,self__.capped,meta16985__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint16984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_16986){
var self__ = this;
var _16986__$1 = this;
return self__.meta16985;
});})(capped))
;

cljs.pprint.t_cljs$pprint16984.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint16984.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16987 = cljs.core._EQ_;
var expr__16988 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__16987.call(null,String,expr__16988))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__7883__auto__ = m;
if(cljs.core.truth_(and__7883__auto__)){
return m.index;
} else {
return and__7883__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__16987.call(null,Number,expr__16988))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__7883__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__7883__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__7883__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16988)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint16984.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta16985","meta16985",-1535300620,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint16984.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16984.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16984";

cljs.pprint.t_cljs$pprint16984.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.pprint/t_cljs$pprint16984");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint16984.
 */
cljs.pprint.__GT_t_cljs$pprint16984 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint16984(writer__$1,capped__$1,meta16985){
return (new cljs.pprint.t_cljs$pprint16984(writer__$1,capped__$1,meta16985));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint16984(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_16990 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16990;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_16992 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_16993 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_16994 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_16995 = (((current_16994 < colnum_16992))?(colnum_16992 - current_16994):((cljs.core._EQ_.call(null,colinc_16993,(0)))?(0):(colinc_16993 - cljs.core.rem.call(null,(current_16994 - colnum_16992),colinc_16993))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_16995," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_16996 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_16997 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_16998 = (colrel_16996 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_16999 = (((colinc_16997 > (0)))?cljs.core.rem.call(null,start_col_16998,colinc_16997):(0));
var space_count_17000 = (colrel_16996 + ((cljs.core._EQ_.call(null,(0),offset_16999))?(0):(colinc_16997 - offset_16999)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_17000," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__17001 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17001,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17001,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17004_17006 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17005_17007 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17005_17007;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17004_17006;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17008_SHARP_,p2__17009_SHARP_,p3__17010_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__17008_SHARP_,p2__17009_SHARP_,p3__17010_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17011_SHARP_,p2__17012_SHARP_,p3__17013_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__17011_SHARP_,p2__17012_SHARP_,p3__17013_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17014_SHARP_,p2__17015_SHARP_,p3__17016_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__17014_SHARP_,p2__17015_SHARP_,p3__17016_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17017_SHARP_,p2__17018_SHARP_,p3__17019_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__17017_SHARP_,p2__17018_SHARP_,p3__17019_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17020_SHARP_,p2__17021_SHARP_,p3__17022_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__17020_SHARP_,p2__17021_SHARP_,p3__17022_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__17023_SHARP_,p2__17024_SHARP_,p3__17025_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__17023_SHARP_,p2__17024_SHARP_,p3__17025_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__17026_SHARP_,p2__17027_SHARP_,p3__17028_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__17026_SHARP_),p1__17026_SHARP_,p2__17027_SHARP_,p3__17028_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__7883__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7883__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7883__auto__;
}
})())){
return (function (p1__17029_SHARP_,p2__17030_SHARP_,p3__17031_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__17029_SHARP_,p2__17030_SHARP_,p3__17031_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17032_SHARP_,p2__17033_SHARP_,p3__17034_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__17032_SHARP_,p2__17033_SHARP_,p3__17034_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17035_SHARP_,p2__17036_SHARP_,p3__17037_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__17035_SHARP_,p2__17036_SHARP_,p3__17037_SHARP_);
});
} else {
return (function (p1__17038_SHARP_,p2__17039_SHARP_,p3__17040_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__17038_SHARP_,p2__17039_SHARP_,p3__17040_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__17050 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__17050,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17050,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8839__auto___17068 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17069 = (0);
while(true){
if((i_17069 < n__8839__auto___17068)){
cljs.pprint.prn.call(null);

var G__17070 = (i_17069 + (1));
i_17069 = G__17070;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_17071 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_17071 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__8839__auto___17072 = (cnt_17071 - (1));
var i_17073 = (0);
while(true){
if((i_17073 < n__8839__auto___17072)){
cljs.pprint.prn.call(null);

var G__17074 = (i_17073 + (1));
i_17073 = G__17074;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8839__auto___17075 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17076 = (0);
while(true){
if((i_17076 < n__8839__auto___17075)){
cljs.pprint.print.call(null,"\f");

var G__17077 = (i_17076 + (1));
i_17076 = G__17077;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17041_SHARP_,p2__17042_SHARP_,p3__17043_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__17041_SHARP_,p2__17042_SHARP_,p3__17043_SHARP_);
});
} else {
return (function (p1__17044_SHARP_,p2__17045_SHARP_,p3__17046_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__17044_SHARP_,p2__17045_SHARP_,p3__17046_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__17053 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__17053,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17053,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__17056 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__17056,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17056,(1),null);
var vec__17059 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__17059,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__17059,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__7883__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7883__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7883__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__17047_SHARP_,p2__17048_SHARP_,p3__17049_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__17047_SHARP_,p2__17048_SHARP_,p3__17049_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__7883__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7883__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7883__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__7883__auto__ = arg1;
if(cljs.core.truth_(and__7883__auto__)){
var and__7883__auto____$1 = arg2;
if(cljs.core.truth_(and__7883__auto____$1)){
return arg3;
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__7883__auto__ = arg1;
if(cljs.core.truth_(and__7883__auto__)){
return arg2;
} else {
return and__7883__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__7895__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__17062 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17062,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17062,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__17065 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__17065,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__17065,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__17078){
var vec__17079 = p__17078;
var s = cljs.core.nth.call(null,vec__17079,(0),null);
var offset = cljs.core.nth.call(null,vec__17079,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__17079,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__17082){
var vec__17083 = p__17082;
var p = cljs.core.nth.call(null,vec__17083,(0),null);
var offset = cljs.core.nth.call(null,vec__17083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__17086){
var vec__17087 = p__17086;
var s__$1 = cljs.core.nth.call(null,vec__17087,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__17087,(1),null);
var flags = cljs.core.nth.call(null,vec__17087,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__7883__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7883__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7883__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7883__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7883__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7883__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7883__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7883__auto__){
var and__7883__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__7883__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7883__auto____$1;
}
} else {
return and__7883__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8252__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8253__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8252__auto__ < y__8253__auto__) ? x__8252__auto__ : y__8253__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17090_SHARP_,p2__17091_SHARP_){
var val = cljs.core.first.call(null,p1__17090_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__17091_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__17091_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__17090_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__8703__auto__ = (function cljs$pprint$map_params_$_iter__17095(s__17096){
return (new cljs.core.LazySeq(null,(function (){
var s__17096__$1 = s__17096;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17096__$1);
if(temp__4657__auto__){
var s__17096__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17096__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__17096__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__17098 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__17097 = (0);
while(true){
if((i__17097 < size__8702__auto__)){
var vec__17099 = cljs.core._nth.call(null,c__8701__auto__,i__17097);
var name = cljs.core.nth.call(null,vec__17099,(0),null);
var vec__17102 = cljs.core.nth.call(null,vec__17099,(1),null);
var default$ = cljs.core.nth.call(null,vec__17102,(0),null);
cljs.core.chunk_append.call(null,b__17098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__17111 = (i__17097 + (1));
i__17097 = G__17111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17098),cljs$pprint$map_params_$_iter__17095.call(null,cljs.core.chunk_rest.call(null,s__17096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17098),null);
}
} else {
var vec__17105 = cljs.core.first.call(null,s__17096__$2);
var name = cljs.core.nth.call(null,vec__17105,(0),null);
var vec__17108 = cljs.core.nth.call(null,vec__17105,(1),null);
var default$ = cljs.core.nth.call(null,vec__17108,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__17095.call(null,cljs.core.rest.call(null,s__17096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__17092_SHARP_,p2__17093_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__17092_SHARP_,p2__17093_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__17094_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__17094_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__17112 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__17112,(0),null);
var vec__17115 = cljs.core.nth.call(null,vec__17112,(1),null);
var rest = cljs.core.nth.call(null,vec__17115,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__17115,(1),null);
var vec__17118 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__17118,(0),null);
var vec__17121 = cljs.core.nth.call(null,vec__17118,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__17121,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__17121,(1),null);
var flags = cljs.core.nth.call(null,vec__17121,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__7883__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__7883__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__7883__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__17124 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__17124,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__17124,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__17127){
var vec__17128 = p__17127;
var clause_map = cljs.core.nth.call(null,vec__17128,(0),null);
var saw_else = cljs.core.nth.call(null,vec__17128,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__17128,(2),null);
var vec__17131 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__17131,(0),null);
var vec__17134 = cljs.core.nth.call(null,vec__17131,(1),null);
var type = cljs.core.nth.call(null,vec__17134,(0),null);
var right_params = cljs.core.nth.call(null,vec__17134,(1),null);
var else_params = cljs.core.nth.call(null,vec__17134,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__17134,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_17137 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_17137){
return (function (p__17138){
var vec__17139 = p__17138;
var s = cljs.core.nth.call(null,vec__17139,(0),null);
var offset = cljs.core.nth.call(null,vec__17139,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_17137))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_17137;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__7895__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
var or__7895__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__7895__auto____$1)){
return or__7895__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__17142 = cljs.core.next.call(null,format__$1);
format__$1 = G__17142;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__17144 = arguments.length;
switch (G__17144) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__7883__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__7883__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_17145 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17145;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17146 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__17146,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__17146,(1),null);
var vec__17149 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__17149,(0),null);
var offsets = cljs.core.nth.call(null,vec__17149,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__7883__auto__ = macro_char;
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__7883__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17153_17156 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17154_17157 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count17155_17158 = (0);
var alis_17159__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17155_17158 < cljs.core._STAR_print_length_STAR_))){
if(alis_17159__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17159__$1));

if(cljs.core.next.call(null,alis_17159__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17160 = (length_count17155_17158 + (1));
var G__17161 = cljs.core.next.call(null,alis_17159__$1);
length_count17155_17158 = G__17160;
alis_17159__$1 = G__17161;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17154_17157;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17153_17156;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17162_17165 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17163_17166 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17164_17167 = (0);
var aseq_17168 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17164_17167 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17168){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_17168));

if(cljs.core.next.call(null,aseq_17168)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17169 = (length_count17164_17167 + (1));
var G__17170 = cljs.core.next.call(null,aseq_17168);
length_count17164_17167 = G__17169;
aseq_17168 = G__17170;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17163_17166;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17162_17165;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__16400__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17171__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17171 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17172__i = 0, G__17172__a = new Array(arguments.length -  0);
while (G__17172__i < G__17172__a.length) {G__17172__a[G__17172__i] = arguments[G__17172__i + 0]; ++G__17172__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17172__a,0,null);
} 
return G__17171__delegate.call(this,args__16402__auto__);};
G__17171.cljs$lang$maxFixedArity = 0;
G__17171.cljs$lang$applyTo = (function (arglist__17173){
var args__16402__auto__ = cljs.core.seq(arglist__17173);
return G__17171__delegate(args__16402__auto__);
});
G__17171.cljs$core$IFn$_invoke$arity$variadic = G__17171__delegate;
return G__17171;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__17174 = ((!(cljs.core.record_QMARK_.call(null,amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10102,10102,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__17174,(0),null);
var lift_map = cljs.core.nth.call(null,vec__17174,(1),null);
var amap__$1 = (function (){var or__7895__auto__ = lift_map;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17177_17182 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17178_17183 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count17179_17184 = (0);
var aseq_17185 = cljs.core.seq.call(null,amap__$1);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17179_17184 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17185){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17180_17186 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17181_17187 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_17185));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_17185)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17181_17187;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17180_17186;
}}


if(cljs.core.next.call(null,aseq_17185)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17188 = (length_count17179_17184 + (1));
var G__17189 = cljs.core.next.call(null,aseq_17185);
length_count17179_17184 = G__17188;
aseq_17185 = G__17189;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17178_17183;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17177_17182;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__16400__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17190__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17190 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17191__i = 0, G__17191__a = new Array(arguments.length -  0);
while (G__17191__i < G__17191__a.length) {G__17191__a[G__17191__i] = arguments[G__17191__i + 0]; ++G__17191__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17191__a,0,null);
} 
return G__17190__delegate.call(this,args__16402__auto__);};
G__17190.cljs$lang$maxFixedArity = 0;
G__17190.cljs$lang$applyTo = (function (arglist__17192){
var args__16402__auto__ = cljs.core.seq(arglist__17192);
return G__17190__delegate(args__16402__auto__);
});
G__17190.cljs$core$IFn$_invoke$arity$variadic = G__17190__delegate;
return G__17190;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__7895__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17193_17197 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17194_17198 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__7883__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__7883__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__7883__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17194_17198;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17193_17197;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__16400__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17199__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17199 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17200__i = 0, G__17200__a = new Array(arguments.length -  0);
while (G__17200__i < G__17200__a.length) {G__17200__a[G__17200__i] = arguments[G__17200__i + 0]; ++G__17200__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17200__a,0,null);
} 
return G__17199__delegate.call(this,args__16402__auto__);};
G__17199.cljs$lang$maxFixedArity = 0;
G__17199.cljs$lang$applyTo = (function (arglist__17201){
var args__16402__auto__ = cljs.core.seq(arglist__17201);
return G__17199__delegate(args__16402__auto__);
});
G__17199.cljs$core$IFn$_invoke$arity$variadic = G__17199__delegate;
return G__17199;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__8849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8853__auto__,method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__17203 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__17203,(0),null);
var end = cljs.core.nth.call(null,vec__17203,(1),null);
var vec__17206 = reference;
var seq__17207 = cljs.core.seq.call(null,vec__17206);
var first__17208 = cljs.core.first.call(null,seq__17207);
var seq__17207__$1 = cljs.core.next.call(null,seq__17207);
var keyw = first__17208;
var args = seq__17207__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17209_17219 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17210_17220 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__16400__auto__ = "~w~:i";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17221__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17221 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17222__i = 0, G__17222__a = new Array(arguments.length -  0);
while (G__17222__i < G__17222__a.length) {G__17222__a[G__17222__i] = arguments[G__17222__i + 0]; ++G__17222__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17222__a,0,null);
} 
return G__17221__delegate.call(this,args__16402__auto__);};
G__17221.cljs$lang$maxFixedArity = 0;
G__17221.cljs$lang$applyTo = (function (arglist__17223){
var args__16402__auto__ = cljs.core.seq(arglist__17223);
return G__17221__delegate(args__16402__auto__);
});
G__17221.cljs$core$IFn$_invoke$arity$variadic = G__17221__delegate;
return G__17221;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null,keyw);

var args_17224__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_17224__$1)){
(function (){var format_in__16400__auto__ = " ";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17225__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17225 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17226__i = 0, G__17226__a = new Array(arguments.length -  0);
while (G__17226__i < G__17226__a.length) {G__17226__a[G__17226__i] = arguments[G__17226__i + 0]; ++G__17226__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17226__a,0,null);
} 
return G__17225__delegate.call(this,args__16402__auto__);};
G__17225.cljs$lang$maxFixedArity = 0;
G__17225.cljs$lang$applyTo = (function (arglist__17227){
var args__16402__auto__ = cljs.core.seq(arglist__17227);
return G__17225__delegate(args__16402__auto__);
});
G__17225.cljs$core$IFn$_invoke$arity$variadic = G__17225__delegate;
return G__17225;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null);

var arg_17228 = cljs.core.first.call(null,args_17224__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_17228)){
var vec__17211_17229 = cljs.pprint.brackets.call(null,arg_17228);
var start_17230__$1 = cljs.core.nth.call(null,vec__17211_17229,(0),null);
var end_17231__$1 = cljs.core.nth.call(null,vec__17211_17229,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17214_17232 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17215_17233 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_17230__$1,null,end_17231__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_17228),(3))) && ((cljs.core.second.call(null,arg_17228) instanceof cljs.core.Keyword))){
var vec__17216_17234 = arg_17228;
var ns_17235 = cljs.core.nth.call(null,vec__17216_17234,(0),null);
var kw_17236 = cljs.core.nth.call(null,vec__17216_17234,(1),null);
var lis_17237 = cljs.core.nth.call(null,vec__17216_17234,(2),null);
(function (){var format_in__16400__auto__ = "~w ~w ";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17216_17234,ns_17235,kw_17236,lis_17237,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17238__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17238 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17239__i = 0, G__17239__a = new Array(arguments.length -  0);
while (G__17239__i < G__17239__a.length) {G__17239__a[G__17239__i] = arguments[G__17239__i + 0]; ++G__17239__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17239__a,0,null);
} 
return G__17238__delegate.call(this,args__16402__auto__);};
G__17238.cljs$lang$maxFixedArity = 0;
G__17238.cljs$lang$applyTo = (function (arglist__17240){
var args__16402__auto__ = cljs.core.seq(arglist__17240);
return G__17238__delegate(args__16402__auto__);
});
G__17238.cljs$core$IFn$_invoke$arity$variadic = G__17238__delegate;
return G__17238;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17216_17234,ns_17235,kw_17236,lis_17237,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null,ns_17235,kw_17236);

if(cljs.core.sequential_QMARK_.call(null,lis_17237)){
(function (){var format_in__16400__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_17237))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17216_17234,ns_17235,kw_17236,lis_17237,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17241__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17241 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17242__i = 0, G__17242__a = new Array(arguments.length -  0);
while (G__17242__i < G__17242__a.length) {G__17242__a[G__17242__i] = arguments[G__17242__i + 0]; ++G__17242__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17242__a,0,null);
} 
return G__17241__delegate.call(this,args__16402__auto__);};
G__17241.cljs$lang$maxFixedArity = 0;
G__17241.cljs$lang$applyTo = (function (arglist__17243){
var args__16402__auto__ = cljs.core.seq(arglist__17243);
return G__17241__delegate(args__16402__auto__);
});
G__17241.cljs$core$IFn$_invoke$arity$variadic = G__17241__delegate;
return G__17241;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17216_17234,ns_17235,kw_17236,lis_17237,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null,lis_17237);
} else {
cljs.pprint.write_out.call(null,lis_17237);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__16400__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17244__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17244 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17245__i = 0, G__17245__a = new Array(arguments.length -  0);
while (G__17245__i < G__17245__a.length) {G__17245__a[G__17245__i] = arguments[G__17245__i + 0]; ++G__17245__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17245__a,0,null);
} 
return G__17244__delegate.call(this,args__16402__auto__);};
G__17244.cljs$lang$maxFixedArity = 0;
G__17244.cljs$lang$applyTo = (function (arglist__17246){
var args__16402__auto__ = cljs.core.seq(arglist__17246);
return G__17244__delegate(args__16402__auto__);
});
G__17244.cljs$core$IFn$_invoke$arity$variadic = G__17244__delegate;
return G__17244;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17214_17232,_STAR_current_length_STAR_17215_17233,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})(),arg_17228);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17215_17233;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17214_17232;
}}


if(cljs.core.next.call(null,args_17224__$1)){
(function (){var format_in__16400__auto__ = "~_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17247__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17247 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17248__i = 0, G__17248__a = new Array(arguments.length -  0);
while (G__17248__i < G__17248__a.length) {G__17248__a[G__17248__i] = arguments[G__17248__i + 0]; ++G__17248__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17248__a,0,null);
} 
return G__17247__delegate.call(this,args__16402__auto__);};
G__17247.cljs$lang$maxFixedArity = 0;
G__17247.cljs$lang$applyTo = (function (arglist__17249){
var args__16402__auto__ = cljs.core.seq(arglist__17249);
return G__17247__delegate(args__16402__auto__);
});
G__17247.cljs$core$IFn$_invoke$arity$variadic = G__17247__delegate;
return G__17247;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,vec__17211_17229,start_17230__$1,end_17231__$1,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_17228);

if(cljs.core.next.call(null,args_17224__$1)){
(function (){var format_in__16400__auto__ = "~:_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (args_17224__$1,format_in__16400__auto__,cf__16401__auto__,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args){
return (function() { 
var G__17250__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17250 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17251__i = 0, G__17251__a = new Array(arguments.length -  0);
while (G__17251__i < G__17251__a.length) {G__17251__a[G__17251__i] = arguments[G__17251__i + 0]; ++G__17251__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17251__a,0,null);
} 
return G__17250__delegate.call(this,args__16402__auto__);};
G__17250.cljs$lang$maxFixedArity = 0;
G__17250.cljs$lang$applyTo = (function (arglist__17252){
var args__16402__auto__ = cljs.core.seq(arglist__17252);
return G__17250__delegate(args__16402__auto__);
});
G__17250.cljs$core$IFn$_invoke$arity$variadic = G__17250__delegate;
return G__17250;
})()
;
;})(args_17224__$1,format_in__16400__auto__,cf__16401__auto__,arg_17228,_STAR_current_level_STAR_17209_17219,_STAR_current_length_STAR_17210_17220,vec__17203,start,end,vec__17206,seq__17207,first__17208,seq__17207__$1,keyw,args))
})().call(null);
} else {
}
}

var G__17253 = cljs.core.next.call(null,args_17224__$1);
args_17224__$1 = G__17253;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17210_17220;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17209_17219;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__17254 = alis;
var seq__17255 = cljs.core.seq.call(null,vec__17254);
var first__17256 = cljs.core.first.call(null,seq__17255);
var seq__17255__$1 = cljs.core.next.call(null,seq__17255);
var ns_sym = first__17256;
var first__17256__$1 = cljs.core.first.call(null,seq__17255__$1);
var seq__17255__$2 = cljs.core.next.call(null,seq__17255__$1);
var ns_name = first__17256__$1;
var stuff = seq__17255__$2;
var vec__17257 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__17257,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__17257,(1),null);
var vec__17260 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__17260,(0),null);
var references = cljs.core.nth.call(null,vec__17260,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17263_17265 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17264_17266 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__16400__auto__ = "~w ~1I~@_~w";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references){
return (function() { 
var G__17267__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17267 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17268__i = 0, G__17268__a = new Array(arguments.length -  0);
while (G__17268__i < G__17268__a.length) {G__17268__a[G__17268__i] = arguments[G__17268__i + 0]; ++G__17268__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17268__a,0,null);
} 
return G__17267__delegate.call(this,args__16402__auto__);};
G__17267.cljs$lang$maxFixedArity = 0;
G__17267.cljs$lang$applyTo = (function (arglist__17269){
var args__16402__auto__ = cljs.core.seq(arglist__17269);
return G__17267__delegate(args__16402__auto__);
});
G__17267.cljs$core$IFn$_invoke$arity$variadic = G__17267__delegate;
return G__17267;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__7895__auto__ = doc_str;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
var or__7895__auto____$1 = attr_map;
if(cljs.core.truth_(or__7895__auto____$1)){
return or__7895__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__16400__auto__ = "~@:_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references){
return (function() { 
var G__17270__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17270 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17271__i = 0, G__17271__a = new Array(arguments.length -  0);
while (G__17271__i < G__17271__a.length) {G__17271__a[G__17271__i] = arguments[G__17271__i + 0]; ++G__17271__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17271__a,0,null);
} 
return G__17270__delegate.call(this,args__16402__auto__);};
G__17270.cljs$lang$maxFixedArity = 0;
G__17270.cljs$lang$applyTo = (function (arglist__17272){
var args__16402__auto__ = cljs.core.seq(arglist__17272);
return G__17270__delegate(args__16402__auto__);
});
G__17270.cljs$core$IFn$_invoke$arity$variadic = G__17270__delegate;
return G__17270;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__7895__auto__ = attr_map;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__16400__auto__ = "~w~:[~;~:@_~]";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references){
return (function() { 
var G__17273__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17273 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17274__i = 0, G__17274__a = new Array(arguments.length -  0);
while (G__17274__i < G__17274__a.length) {G__17274__a[G__17274__i] = arguments[G__17274__i + 0]; ++G__17274__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17274__a,0,null);
} 
return G__17273__delegate.call(this,args__16402__auto__);};
G__17273.cljs$lang$maxFixedArity = 0;
G__17273.cljs$lang$applyTo = (function (arglist__17275){
var args__16402__auto__ = cljs.core.seq(arglist__17275);
return G__17273__delegate(args__16402__auto__);
});
G__17273.cljs$core$IFn$_invoke$arity$variadic = G__17273__delegate;
return G__17273;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17263_17265,_STAR_current_length_STAR_17264_17266,vec__17254,seq__17255,first__17256,seq__17255__$1,ns_sym,first__17256__$1,seq__17255__$2,ns_name,stuff,vec__17257,doc_str,stuff__$1,vec__17260,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_17276__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_17276__$1));

var temp__4657__auto___17277 = cljs.core.next.call(null,references_17276__$1);
if(temp__4657__auto___17277){
var references_17278__$2 = temp__4657__auto___17277;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17279 = references_17278__$2;
references_17276__$1 = G__17279;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17264_17266;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17263_17265;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__16400__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17280__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17280 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17281__i = 0, G__17281__a = new Array(arguments.length -  0);
while (G__17281__i < G__17281__a.length) {G__17281__a[G__17281__i] = arguments[G__17281__i + 0]; ++G__17281__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17281__a,0,null);
} 
return G__17280__delegate.call(this,args__16402__auto__);};
G__17280.cljs$lang$maxFixedArity = 0;
G__17280.cljs$lang$applyTo = (function (arglist__17282){
var args__16402__auto__ = cljs.core.seq(arglist__17282);
return G__17280__delegate(args__16402__auto__);
});
G__17280.cljs$core$IFn$_invoke$arity$variadic = G__17280__delegate;
return G__17280;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__16400__auto__ = " ~_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17283__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17283 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17284__i = 0, G__17284__a = new Array(arguments.length -  0);
while (G__17284__i < G__17284__a.length) {G__17284__a[G__17284__i] = arguments[G__17284__i + 0]; ++G__17284__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17284__a,0,null);
} 
return G__17283__delegate.call(this,args__16402__auto__);};
G__17283.cljs$lang$maxFixedArity = 0;
G__17283.cljs$lang$applyTo = (function (arglist__17285){
var args__16402__auto__ = cljs.core.seq(arglist__17285);
return G__17283__delegate(args__16402__auto__);
});
G__17283.cljs$core$IFn$_invoke$arity$variadic = G__17283__delegate;
return G__17283;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})().call(null);
} else {
(function (){var format_in__16400__auto__ = " ~@_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17286__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17286 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17287__i = 0, G__17287__a = new Array(arguments.length -  0);
while (G__17287__i < G__17287__a.length) {G__17287__a[G__17287__i] = arguments[G__17287__i + 0]; ++G__17287__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17287__a,0,null);
} 
return G__17286__delegate.call(this,args__16402__auto__);};
G__17286.cljs$lang$maxFixedArity = 0;
G__17286.cljs$lang$applyTo = (function (arglist__17288){
var args__16402__auto__ = cljs.core.seq(arglist__17288);
return G__17286__delegate(args__16402__auto__);
});
G__17286.cljs$core$IFn$_invoke$arity$variadic = G__17286__delegate;
return G__17286;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})().call(null);
}

return (function (){var format_in__16400__auto__ = "~{~w~^ ~_~}";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17289__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17289 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17290__i = 0, G__17290__a = new Array(arguments.length -  0);
while (G__17290__i < G__17290__a.length) {G__17290__a[G__17290__i] = arguments[G__17290__i + 0]; ++G__17290__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17290__a,0,null);
} 
return G__17289__delegate.call(this,args__16402__auto__);};
G__17289.cljs$lang$maxFixedArity = 0;
G__17289.cljs$lang$applyTo = (function (arglist__17291){
var args__16402__auto__ = cljs.core.seq(arglist__17291);
return G__17289__delegate(args__16402__auto__);
});
G__17289.cljs$core$IFn$_invoke$arity$variadic = G__17289__delegate;
return G__17289;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__16400__auto__ = " ~_~{~w~^ ~_~}";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17292__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17292 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17293__i = 0, G__17293__a = new Array(arguments.length -  0);
while (G__17293__i < G__17293__a.length) {G__17293__a[G__17293__i] = arguments[G__17293__i + 0]; ++G__17293__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17293__a,0,null);
} 
return G__17292__delegate.call(this,args__16402__auto__);};
G__17292.cljs$lang$maxFixedArity = 0;
G__17292.cljs$lang$applyTo = (function (arglist__17294){
var args__16402__auto__ = cljs.core.seq(arglist__17294);
return G__17292__delegate(args__16402__auto__);
});
G__17292.cljs$core$IFn$_invoke$arity$variadic = G__17292__delegate;
return G__17292;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__17295 = alis;
var seq__17296 = cljs.core.seq.call(null,vec__17295);
var first__17297 = cljs.core.first.call(null,seq__17296);
var seq__17296__$1 = cljs.core.next.call(null,seq__17296);
var defn_sym = first__17297;
var first__17297__$1 = cljs.core.first.call(null,seq__17296__$1);
var seq__17296__$2 = cljs.core.next.call(null,seq__17296__$1);
var defn_name = first__17297__$1;
var stuff = seq__17296__$2;
var vec__17298 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__17298,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__17298,(1),null);
var vec__17301 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__17301,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__17301,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17304_17306 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17305_17307 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__16400__auto__ = "~w ~1I~@_~w";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2){
return (function() { 
var G__17308__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17308 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17309__i = 0, G__17309__a = new Array(arguments.length -  0);
while (G__17309__i < G__17309__a.length) {G__17309__a[G__17309__i] = arguments[G__17309__i + 0]; ++G__17309__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17309__a,0,null);
} 
return G__17308__delegate.call(this,args__16402__auto__);};
G__17308.cljs$lang$maxFixedArity = 0;
G__17308.cljs$lang$applyTo = (function (arglist__17310){
var args__16402__auto__ = cljs.core.seq(arglist__17310);
return G__17308__delegate(args__16402__auto__);
});
G__17308.cljs$core$IFn$_invoke$arity$variadic = G__17308__delegate;
return G__17308;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__16400__auto__ = " ~_~w";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2){
return (function() { 
var G__17311__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17311 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17312__i = 0, G__17312__a = new Array(arguments.length -  0);
while (G__17312__i < G__17312__a.length) {G__17312__a[G__17312__i] = arguments[G__17312__i + 0]; ++G__17312__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17312__a,0,null);
} 
return G__17311__delegate.call(this,args__16402__auto__);};
G__17311.cljs$lang$maxFixedArity = 0;
G__17311.cljs$lang$applyTo = (function (arglist__17313){
var args__16402__auto__ = cljs.core.seq(arglist__17313);
return G__17311__delegate(args__16402__auto__);
});
G__17311.cljs$core$IFn$_invoke$arity$variadic = G__17311__delegate;
return G__17311;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__16400__auto__ = " ~_~w";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2){
return (function() { 
var G__17314__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17314 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17315__i = 0, G__17315__a = new Array(arguments.length -  0);
while (G__17315__i < G__17315__a.length) {G__17315__a[G__17315__i] = arguments[G__17315__i + 0]; ++G__17315__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17315__a,0,null);
} 
return G__17314__delegate.call(this,args__16402__auto__);};
G__17314.cljs$lang$maxFixedArity = 0;
G__17314.cljs$lang$applyTo = (function (arglist__17316){
var args__16402__auto__ = cljs.core.seq(arglist__17316);
return G__17314__delegate(args__16402__auto__);
});
G__17314.cljs$core$IFn$_invoke$arity$variadic = G__17314__delegate;
return G__17314;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17304_17306,_STAR_current_length_STAR_17305_17307,vec__17295,seq__17296,first__17297,seq__17296__$1,defn_sym,first__17297__$1,seq__17296__$2,defn_name,stuff,vec__17298,doc_str,stuff__$1,vec__17301,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__7895__auto__ = doc_str;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__7895__auto__ = doc_str;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17305_17307;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17304_17306;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17317_17322 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17318_17323 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17319_17324 = (0);
var binding_17325 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17319_17324 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_17325)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17320_17326 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17321_17327 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_17325));

if(cljs.core.next.call(null,binding_17325)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_17325));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17321_17327;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17320_17326;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_17325))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17328 = (length_count17319_17324 + (1));
var G__17329 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_17325));
length_count17319_17324 = G__17328;
binding_17325 = G__17329;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17318_17323;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17317_17322;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17330_17332 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17331_17333 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__16400__auto__ = "~w ~1I~@_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17330_17332,_STAR_current_length_STAR_17331_17333,base_sym){
return (function() { 
var G__17334__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17334 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17335__i = 0, G__17335__a = new Array(arguments.length -  0);
while (G__17335__i < G__17335__a.length) {G__17335__a[G__17335__i] = arguments[G__17335__i + 0]; ++G__17335__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17335__a,0,null);
} 
return G__17334__delegate.call(this,args__16402__auto__);};
G__17334.cljs$lang$maxFixedArity = 0;
G__17334.cljs$lang$applyTo = (function (arglist__17336){
var args__16402__auto__ = cljs.core.seq(arglist__17336);
return G__17334__delegate(args__16402__auto__);
});
G__17334.cljs$core$IFn$_invoke$arity$variadic = G__17334__delegate;
return G__17334;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17330_17332,_STAR_current_length_STAR_17331_17333,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__16400__auto__ = " ~_~{~w~^ ~_~}";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17330_17332,_STAR_current_length_STAR_17331_17333,base_sym){
return (function() { 
var G__17337__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17337 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17338__i = 0, G__17338__a = new Array(arguments.length -  0);
while (G__17338__i < G__17338__a.length) {G__17338__a[G__17338__i] = arguments[G__17338__i + 0]; ++G__17338__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17338__a,0,null);
} 
return G__17337__delegate.call(this,args__16402__auto__);};
G__17337.cljs$lang$maxFixedArity = 0;
G__17337.cljs$lang$applyTo = (function (arglist__17339){
var args__16402__auto__ = cljs.core.seq(arglist__17339);
return G__17337__delegate(args__16402__auto__);
});
G__17337.cljs$core$IFn$_invoke$arity$variadic = G__17337__delegate;
return G__17337;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17330_17332,_STAR_current_length_STAR_17331_17333,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17331_17333;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17330_17332;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__16400__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__){
return (function() { 
var G__17340__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17340 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17341__i = 0, G__17341__a = new Array(arguments.length -  0);
while (G__17341__i < G__17341__a.length) {G__17341__a[G__17341__i] = arguments[G__17341__i + 0]; ++G__17341__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17341__a,0,null);
} 
return G__17340__delegate.call(this,args__16402__auto__);};
G__17340.cljs$lang$maxFixedArity = 0;
G__17340.cljs$lang$applyTo = (function (arglist__17342){
var args__16402__auto__ = cljs.core.seq(arglist__17342);
return G__17340__delegate(args__16402__auto__);
});
G__17340.cljs$core$IFn$_invoke$arity$variadic = G__17340__delegate;
return G__17340;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17343_17348 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17344_17349 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count17345_17350 = (0);
var alis_17351__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17345_17350 < cljs.core._STAR_print_length_STAR_))){
if(alis_17351__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17346_17352 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17347_17353 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17351__$1));

if(cljs.core.next.call(null,alis_17351__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_17351__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17347_17353;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17346_17352;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_17351__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17354 = (length_count17345_17350 + (1));
var G__17355 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_17351__$1));
length_count17345_17350 = G__17354;
alis_17351__$1 = G__17355;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17344_17349;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17343_17348;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17356_17361 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17357_17362 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__16400__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17356_17361,_STAR_current_length_STAR_17357_17362){
return (function() { 
var G__17363__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17363 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17364__i = 0, G__17364__a = new Array(arguments.length -  0);
while (G__17364__i < G__17364__a.length) {G__17364__a[G__17364__i] = arguments[G__17364__i + 0]; ++G__17364__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17364__a,0,null);
} 
return G__17363__delegate.call(this,args__16402__auto__);};
G__17363.cljs$lang$maxFixedArity = 0;
G__17363.cljs$lang$applyTo = (function (arglist__17365){
var args__16402__auto__ = cljs.core.seq(arglist__17365);
return G__17363__delegate(args__16402__auto__);
});
G__17363.cljs$core$IFn$_invoke$arity$variadic = G__17363__delegate;
return G__17363;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_current_level_STAR_17356_17361,_STAR_current_length_STAR_17357_17362))
})(),alis);

var length_count17358_17366 = (0);
var alis_17367__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17358_17366 < cljs.core._STAR_print_length_STAR_))){
if(alis_17367__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17359_17368 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17360_17369 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17367__$1));

if(cljs.core.next.call(null,alis_17367__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_17367__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17360_17369;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17359_17368;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_17367__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17370 = (length_count17358_17366 + (1));
var G__17371 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_17367__$1));
length_count17358_17366 = G__17370;
alis_17367__$1 = G__17371;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17357_17362;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17356_17361;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_17374 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_17374,args,nlis){
return (function (p1__17372_SHARP_,p2__17373_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17372_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17373_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_17374,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__16400__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16401__auto__ = ((typeof format_in__16400__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__16400__auto__):format_in__16400__auto__);
return ((function (format_in__16400__auto__,cf__16401__auto__,_STAR_symbol_map_STAR_17374,args,nlis){
return (function() { 
var G__17375__delegate = function (args__16402__auto__){
var navigator__16403__auto__ = cljs.pprint.init_navigator.call(null,args__16402__auto__);
return cljs.pprint.execute_format.call(null,cf__16401__auto__,navigator__16403__auto__);
};
var G__17375 = function (var_args){
var args__16402__auto__ = null;
if (arguments.length > 0) {
var G__17376__i = 0, G__17376__a = new Array(arguments.length -  0);
while (G__17376__i < G__17376__a.length) {G__17376__a[G__17376__i] = arguments[G__17376__i + 0]; ++G__17376__i;}
  args__16402__auto__ = new cljs.core.IndexedSeq(G__17376__a,0,null);
} 
return G__17375__delegate.call(this,args__16402__auto__);};
G__17375.cljs$lang$maxFixedArity = 0;
G__17375.cljs$lang$applyTo = (function (arglist__17377){
var args__16402__auto__ = cljs.core.seq(arglist__17377);
return G__17375__delegate(args__16402__auto__);
});
G__17375.cljs$core$IFn$_invoke$arity$variadic = G__17375__delegate;
return G__17375;
})()
;
;})(format_in__16400__auto__,cf__16401__auto__,_STAR_symbol_map_STAR_17374,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_17374;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17378_17381 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17379_17382 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count17380_17383 = (0);
var alis_17384__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count17380_17383 < cljs.core._STAR_print_length_STAR_))){
if(alis_17384__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_17384__$1));

if(cljs.core.next.call(null,alis_17384__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__17385 = (length_count17380_17383 + (1));
var G__17386 = cljs.core.next.call(null,alis_17384__$1);
length_count17380_17383 = G__17385;
alis_17384__$1 = G__17386;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17379_17382;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17378_17381;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__8703__auto__ = (function cljs$pprint$two_forms_$_iter__17387(s__17388){
return (new cljs.core.LazySeq(null,(function (){
var s__17388__$1 = s__17388;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17388__$1);
if(temp__4657__auto__){
var s__17388__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17388__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__17388__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__17390 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__17389 = (0);
while(true){
if((i__17389 < size__8702__auto__)){
var x = cljs.core._nth.call(null,c__8701__auto__,i__17389);
cljs.core.chunk_append.call(null,b__17390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__17391 = (i__17389 + (1));
i__17389 = G__17391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17390),cljs$pprint$two_forms_$_iter__17387.call(null,cljs.core.chunk_rest.call(null,s__17388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17390),null);
}
} else {
var x = cljs.core.first.call(null,s__17388__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__17387.call(null,cljs.core.rest.call(null,s__17388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__17392_SHARP_){
var vec__17393 = p1__17392_SHARP_;
var s = cljs.core.nth.call(null,vec__17393,(0),null);
var f = cljs.core.nth.call(null,vec__17393,(1),null);
if(cljs.core.not.call(null,(function (){var or__7895__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__17392_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4655__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__8849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8853__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8853__auto__,method_table__8849__auto__,prefer_table__8850__auto__,method_cache__8851__auto__,cached_hierarchy__8852__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8245__auto__ = (0);
var y__8246__auto__ = (width - cljs.core.count.call(null,s));
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__17400 = arguments.length;
switch (G__17400) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_17401 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_17401){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_17401){
return (function (p1__17396_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__17396_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_17401))
,rows));
});})(_STAR_print_newline_STAR_17401))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_17401){
return (function (p1__17397_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__17397_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_17401))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_17401){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__8703__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_17401){
return (function cljs$pprint$iter__17402(s__17403){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_17401){
return (function (){
var s__17403__$1 = s__17403;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17403__$1);
if(temp__4657__auto__){
var s__17403__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17403__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__17403__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__17405 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__17404 = (0);
while(true){
if((i__17404 < size__8702__auto__)){
var vec__17406 = cljs.core._nth.call(null,c__8701__auto__,i__17404);
var col = cljs.core.nth.call(null,vec__17406,(0),null);
var width = cljs.core.nth.call(null,vec__17406,(1),null);
cljs.core.chunk_append.call(null,b__17405,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__17417 = (i__17404 + (1));
i__17404 = G__17417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17405),cljs$pprint$iter__17402.call(null,cljs.core.chunk_rest.call(null,s__17403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17405),null);
}
} else {
var vec__17409 = cljs.core.first.call(null,s__17403__$2);
var col = cljs.core.nth.call(null,vec__17409,(0),null);
var width = cljs.core.nth.call(null,vec__17409,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__17402.call(null,cljs.core.rest.call(null,s__17403__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_17401))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_17401))
;
return iter__8703__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__8703__auto__,widths,spacers,_STAR_print_newline_STAR_17401){
return (function (p1__17398_SHARP_){
return cljs.core.get.call(null,row,p1__17398_SHARP_);
});})(iter__8703__auto__,widths,spacers,_STAR_print_newline_STAR_17401))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_17401))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__17412 = cljs.core.seq.call(null,rows);
var chunk__17413 = null;
var count__17414 = (0);
var i__17415 = (0);
while(true){
if((i__17415 < count__17414)){
var row = cljs.core._nth.call(null,chunk__17413,i__17415);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__17418 = seq__17412;
var G__17419 = chunk__17413;
var G__17420 = count__17414;
var G__17421 = (i__17415 + (1));
seq__17412 = G__17418;
chunk__17413 = G__17419;
count__17414 = G__17420;
i__17415 = G__17421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17412);
if(temp__4657__auto__){
var seq__17412__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17412__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__17412__$1);
var G__17422 = cljs.core.chunk_rest.call(null,seq__17412__$1);
var G__17423 = c__8734__auto__;
var G__17424 = cljs.core.count.call(null,c__8734__auto__);
var G__17425 = (0);
seq__17412 = G__17422;
chunk__17413 = G__17423;
count__17414 = G__17424;
i__17415 = G__17425;
continue;
} else {
var row = cljs.core.first.call(null,seq__17412__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__17426 = cljs.core.next.call(null,seq__17412__$1);
var G__17427 = null;
var G__17428 = (0);
var G__17429 = (0);
seq__17412 = G__17426;
chunk__17413 = G__17427;
count__17414 = G__17428;
i__17415 = G__17429;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17401;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

