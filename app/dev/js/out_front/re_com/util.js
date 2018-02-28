// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7736__auto__ = (function re_com$util$fmap_$_iter__9342(s__9343){
return (new cljs.core.LazySeq(null,(function (){
var s__9343__$1 = s__9343;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9343__$1);
if(temp__4657__auto__){
var s__9343__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9343__$2)){
var c__7734__auto__ = cljs.core.chunk_first.call(null,s__9343__$2);
var size__7735__auto__ = cljs.core.count.call(null,c__7734__auto__);
var b__9345 = cljs.core.chunk_buffer.call(null,size__7735__auto__);
if((function (){var i__9344 = (0);
while(true){
if((i__9344 < size__7735__auto__)){
var vec__9352 = cljs.core._nth.call(null,c__7734__auto__,i__9344);
var k = cljs.core.nth.call(null,vec__9352,(0),null);
var val = cljs.core.nth.call(null,vec__9352,(1),null);
cljs.core.chunk_append.call(null,b__9345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__9358 = (i__9344 + (1));
i__9344 = G__9358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9345),re_com$util$fmap_$_iter__9342.call(null,cljs.core.chunk_rest.call(null,s__9343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9345),null);
}
} else {
var vec__9355 = cljs.core.first.call(null,s__9343__$2);
var k = cljs.core.nth.call(null,vec__9355,(0),null);
var val = cljs.core.nth.call(null,vec__9355,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__9342.call(null,cljs.core.rest.call(null,s__9343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7736__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__8064__auto__ = [];
var len__8057__auto___9360 = arguments.length;
var i__8058__auto___9361 = (0);
while(true){
if((i__8058__auto___9361 < len__8057__auto___9360)){
args__8064__auto__.push((arguments[i__8058__auto___9361]));

var G__9362 = (i__8058__auto___9361 + (1));
i__8058__auto___9361 = G__9362;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq9359){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9359));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__8064__auto__ = [];
var len__8057__auto___9367 = arguments.length;
var i__8058__auto___9368 = (0);
while(true){
if((i__8058__auto___9368 < len__8057__auto___9367)){
args__8064__auto__.push((arguments[i__8058__auto___9368]));

var G__9369 = (i__8058__auto___9368 + (1));
i__8058__auto___9368 = G__9369;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq9365){
var G__9366 = cljs.core.first.call(null,seq9365);
var seq9365__$1 = cljs.core.next.call(null,seq9365);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__9366,seq9365__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__8064__auto__ = [];
var len__8057__auto___9376 = arguments.length;
var i__8058__auto___9377 = (0);
while(true){
if((i__8058__auto___9377 < len__8057__auto___9376)){
args__8064__auto__.push((arguments[i__8058__auto___9377]));

var G__9378 = (i__8058__auto___9377 + (1));
i__8058__auto___9377 = G__9378;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__9373){
var map__9374 = p__9373;
var map__9374__$1 = ((((!((map__9374 == null)))?((((map__9374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9374):map__9374);
var id_fn = cljs.core.get.call(null,map__9374__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__9374,map__9374__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__9374,map__9374__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq9370){
var G__9371 = cljs.core.first.call(null,seq9370);
var seq9370__$1 = cljs.core.next.call(null,seq9370);
var G__9372 = cljs.core.first.call(null,seq9370__$1);
var seq9370__$2 = cljs.core.next.call(null,seq9370__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__9371,G__9372,seq9370__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__8064__auto__ = [];
var len__8057__auto___9386 = arguments.length;
var i__8058__auto___9387 = (0);
while(true){
if((i__8058__auto___9387 < len__8057__auto___9386)){
args__8064__auto__.push((arguments[i__8058__auto___9387]));

var G__9388 = (i__8058__auto___9387 + (1));
i__8058__auto___9387 = G__9388;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__9383){
var map__9384 = p__9383;
var map__9384__$1 = ((((!((map__9384 == null)))?((((map__9384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9384):map__9384);
var id_fn = cljs.core.get.call(null,map__9384__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__9384,map__9384__$1,id_fn){
return (function (p1__9379_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__9379_SHARP_),id);
});})(map__9384,map__9384__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq9380){
var G__9381 = cljs.core.first.call(null,seq9380);
var seq9380__$1 = cljs.core.next.call(null,seq9380);
var G__9382 = cljs.core.first.call(null,seq9380__$1);
var seq9380__$2 = cljs.core.next.call(null,seq9380__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__9381,G__9382,seq9380__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__8064__auto__ = [];
var len__8057__auto___9396 = arguments.length;
var i__8058__auto___9397 = (0);
while(true){
if((i__8058__auto___9397 < len__8057__auto___9396)){
args__8064__auto__.push((arguments[i__8058__auto___9397]));

var G__9398 = (i__8058__auto___9397 + (1));
i__8058__auto___9397 = G__9398;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__9393){
var map__9394 = p__9393;
var map__9394__$1 = ((((!((map__9394 == null)))?((((map__9394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9394):map__9394);
var id_fn = cljs.core.get.call(null,map__9394__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__9394,map__9394__$1,id_fn){
return (function (p1__9389_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__9389_SHARP_),id);
});})(map__9394,map__9394__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq9390){
var G__9391 = cljs.core.first.call(null,seq9390);
var seq9390__$1 = cljs.core.next.call(null,seq9390);
var G__9392 = cljs.core.first.call(null,seq9390__$1);
var seq9390__$2 = cljs.core.next.call(null,seq9390__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__9391,G__9392,seq9390__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__9399 = current_node.parentNode;
var G__9400 = (sum_scroll_left + current_node.scrollLeft);
var G__9401 = (sum_scroll_top + current_node.scrollTop);
current_node = G__9399;
sum_scroll_left = G__9400;
sum_scroll_top = G__9401;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map