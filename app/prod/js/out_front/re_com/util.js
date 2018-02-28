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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7736__auto__ = (function re_com$util$fmap_$_iter__12545(s__12546){
return (new cljs.core.LazySeq(null,(function (){
var s__12546__$1 = s__12546;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12546__$1);
if(temp__4657__auto__){
var s__12546__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12546__$2)){
var c__7734__auto__ = cljs.core.chunk_first.call(null,s__12546__$2);
var size__7735__auto__ = cljs.core.count.call(null,c__7734__auto__);
var b__12548 = cljs.core.chunk_buffer.call(null,size__7735__auto__);
if((function (){var i__12547 = (0);
while(true){
if((i__12547 < size__7735__auto__)){
var vec__12555 = cljs.core._nth.call(null,c__7734__auto__,i__12547);
var k = cljs.core.nth.call(null,vec__12555,(0),null);
var val = cljs.core.nth.call(null,vec__12555,(1),null);
cljs.core.chunk_append.call(null,b__12548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__12561 = (i__12547 + (1));
i__12547 = G__12561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12548),re_com$util$fmap_$_iter__12545.call(null,cljs.core.chunk_rest.call(null,s__12546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12548),null);
}
} else {
var vec__12558 = cljs.core.first.call(null,s__12546__$2);
var k = cljs.core.nth.call(null,vec__12558,(0),null);
var val = cljs.core.nth.call(null,vec__12558,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__12545.call(null,cljs.core.rest.call(null,s__12546__$2)));
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
var len__8057__auto___12563 = arguments.length;
var i__8058__auto___12564 = (0);
while(true){
if((i__8058__auto___12564 < len__8057__auto___12563)){
args__8064__auto__.push((arguments[i__8058__auto___12564]));

var G__12565 = (i__8058__auto___12564 + (1));
i__8058__auto___12564 = G__12565;
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

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq12562){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12562));
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
var len__8057__auto___12570 = arguments.length;
var i__8058__auto___12571 = (0);
while(true){
if((i__8058__auto___12571 < len__8057__auto___12570)){
args__8064__auto__.push((arguments[i__8058__auto___12571]));

var G__12572 = (i__8058__auto___12571 + (1));
i__8058__auto___12571 = G__12572;
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

re_com.util.px.cljs$lang$applyTo = (function (seq12568){
var G__12569 = cljs.core.first.call(null,seq12568);
var seq12568__$1 = cljs.core.next.call(null,seq12568);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__12569,seq12568__$1);
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
var len__8057__auto___12579 = arguments.length;
var i__8058__auto___12580 = (0);
while(true){
if((i__8058__auto___12580 < len__8057__auto___12579)){
args__8064__auto__.push((arguments[i__8058__auto___12580]));

var G__12581 = (i__8058__auto___12580 + (1));
i__8058__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12576){
var map__12577 = p__12576;
var map__12577__$1 = ((((!((map__12577 == null)))?((((map__12577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12577):map__12577);
var id_fn = cljs.core.get.call(null,map__12577__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__12577,map__12577__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__12577,map__12577__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq12573){
var G__12574 = cljs.core.first.call(null,seq12573);
var seq12573__$1 = cljs.core.next.call(null,seq12573);
var G__12575 = cljs.core.first.call(null,seq12573__$1);
var seq12573__$2 = cljs.core.next.call(null,seq12573__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12574,G__12575,seq12573__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__8064__auto__ = [];
var len__8057__auto___12589 = arguments.length;
var i__8058__auto___12590 = (0);
while(true){
if((i__8058__auto___12590 < len__8057__auto___12589)){
args__8064__auto__.push((arguments[i__8058__auto___12590]));

var G__12591 = (i__8058__auto___12590 + (1));
i__8058__auto___12590 = G__12591;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12586){
var map__12587 = p__12586;
var map__12587__$1 = ((((!((map__12587 == null)))?((((map__12587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12587):map__12587);
var id_fn = cljs.core.get.call(null,map__12587__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__12587,map__12587__$1,id_fn){
return (function (p1__12582_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__12582_SHARP_),id);
});})(map__12587,map__12587__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq12583){
var G__12584 = cljs.core.first.call(null,seq12583);
var seq12583__$1 = cljs.core.next.call(null,seq12583);
var G__12585 = cljs.core.first.call(null,seq12583__$1);
var seq12583__$2 = cljs.core.next.call(null,seq12583__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12584,G__12585,seq12583__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__8064__auto__ = [];
var len__8057__auto___12599 = arguments.length;
var i__8058__auto___12600 = (0);
while(true){
if((i__8058__auto___12600 < len__8057__auto___12599)){
args__8064__auto__.push((arguments[i__8058__auto___12600]));

var G__12601 = (i__8058__auto___12600 + (1));
i__8058__auto___12600 = G__12601;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12596){
var map__12597 = p__12596;
var map__12597__$1 = ((((!((map__12597 == null)))?((((map__12597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12597):map__12597);
var id_fn = cljs.core.get.call(null,map__12597__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__12597,map__12597__$1,id_fn){
return (function (p1__12592_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__12592_SHARP_),id);
});})(map__12597,map__12597__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq12593){
var G__12594 = cljs.core.first.call(null,seq12593);
var seq12593__$1 = cljs.core.next.call(null,seq12593);
var G__12595 = cljs.core.first.call(null,seq12593__$1);
var seq12593__$2 = cljs.core.next.call(null,seq12593__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__12594,G__12595,seq12593__$2);
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
var G__12602 = current_node.parentNode;
var G__12603 = (sum_scroll_left + current_node.scrollLeft);
var G__12604 = (sum_scroll_top + current_node.scrollTop);
current_node = G__12602;
sum_scroll_left = G__12603;
sum_scroll_top = G__12604;
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
