// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson047.garden.v1v3v3.garden.util.format = (function mranderson047$garden$v1v3v3$garden$util$format(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17907 = arguments.length;
var i__9058__auto___17908 = (0);
while(true){
if((i__9058__auto___17908 < len__9057__auto___17907)){
args__9064__auto__.push((arguments[i__9058__auto___17908]));

var G__17909 = (i__9058__auto___17908 + (1));
i__9058__auto___17908 = G__17909;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq17905){
var G__17906 = cljs.core.first.call(null,seq17905);
var seq17905__$1 = cljs.core.next.call(null,seq17905);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__17906,seq17905__$1);
});


/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson047.garden.v1v3v3.garden.util.to_str = (function mranderson047$garden$v1v3v3$garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))){
return this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__8578__auto__ = (((this$ == null))?null:this$);
var m__8579__auto__ = (mranderson047.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__8578__auto__)]);
if(!((m__8579__auto__ == null))){
return m__8579__auto__.call(null,this$);
} else {
var m__8579__auto____$1 = (mranderson047.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__8579__auto____$1 == null))){
return m__8579__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
mranderson047.garden.v1v3v3.garden.util.as_str = (function mranderson047$garden$v1v3v3$garden$util$as_str(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17911 = arguments.length;
var i__9058__auto___17912 = (0);
while(true){
if((i__9058__auto___17912 < len__9057__auto___17911)){
args__9064__auto__.push((arguments[i__9058__auto___17912]));

var G__17913 = (i__9058__auto___17912 + (1));
i__9058__auto___17912 = G__17913;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.util.to_str,args));
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq17910){
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17910));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.string__GT_int = (function mranderson047$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17920 = arguments.length;
var i__9058__auto___17921 = (0);
while(true){
if((i__9058__auto___17921 < len__9057__auto___17920)){
args__9064__auto__.push((arguments[i__9058__auto___17921]));

var G__17922 = (i__9058__auto___17921 + (1));
i__9058__auto___17921 = G__17922;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__17916){
var vec__17917 = p__17916;
var radix = cljs.core.nth.call(null,vec__17917,(0),null);
var radix__$1 = (function (){var or__7895__auto__ = radix;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq17914){
var G__17915 = cljs.core.first.call(null,seq17914);
var seq17914__$1 = cljs.core.next.call(null,seq17914);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__17915,seq17914__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.int__GT_string = (function mranderson047$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17929 = arguments.length;
var i__9058__auto___17930 = (0);
while(true){
if((i__9058__auto___17930 < len__9057__auto___17929)){
args__9064__auto__.push((arguments[i__9058__auto___17930]));

var G__17931 = (i__9058__auto___17930 + (1));
i__9058__auto___17930 = G__17931;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__17925){
var vec__17926 = p__17925;
var radix = cljs.core.nth.call(null,vec__17926,(0),null);
var radix__$1 = (function (){var or__7895__auto__ = radix;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq17923){
var G__17924 = cljs.core.first.call(null,seq17923);
var seq17923__$1 = cljs.core.next.call(null,seq17923);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__17924,seq17923__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.util.space_join = (function mranderson047$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.util.comma_join = (function mranderson047$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__8703__auto__ = (function mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__17932(s__17933){
return (new cljs.core.LazySeq(null,(function (){
var s__17933__$1 = s__17933;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17933__$1);
if(temp__4657__auto__){
var s__17933__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17933__$2)){
var c__8701__auto__ = cljs.core.chunk_first.call(null,s__17933__$2);
var size__8702__auto__ = cljs.core.count.call(null,c__8701__auto__);
var b__17935 = cljs.core.chunk_buffer.call(null,size__8702__auto__);
if((function (){var i__17934 = (0);
while(true){
if((i__17934 < size__8702__auto__)){
var x = cljs.core._nth.call(null,c__8701__auto__,i__17934);
cljs.core.chunk_append.call(null,b__17935,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__17936 = (i__17934 + (1));
i__17934 = G__17936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17935),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__17932.call(null,cljs.core.chunk_rest.call(null,s__17933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17935),null);
}
} else {
var x = cljs.core.first.call(null,s__17933__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__17932.call(null,cljs.core.rest.call(null,s__17933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8703__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson047.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson047$garden$v1v3v3$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
mranderson047.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_media_QMARK_(x){
var and__7883__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__7883__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__7883__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__7883__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__7883__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__7883__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__7883__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.prefix = (function mranderson047$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson047$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return mranderson047.garden.v1v3v3.garden.util.prefix.call(null,p__$1,s);
} else {
return mranderson047.garden.v1v3v3.garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson047.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
mranderson047.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__8252__auto__ = a;
var y__8253__auto__ = b;
return ((x__8252__auto__ < y__8253__auto__) ? x__8252__auto__ : y__8253__auto__);
})();
var top = (function (){var x__8245__auto__ = a;
var y__8246__auto__ = b;
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson047.garden.v1v3v3.garden.util.clip = (function mranderson047$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__17937 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__17937,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__17937,(1),null);
var x__8245__auto__ = a__$1;
var y__8246__auto__ = (function (){var x__8252__auto__ = b__$1;
var y__8253__auto__ = n;
return ((x__8252__auto__ < y__8253__auto__) ? x__8252__auto__ : y__8253__auto__);
})();
return ((x__8245__auto__ > y__8246__auto__) ? x__8245__auto__ : y__8246__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson047.garden.v1v3v3.garden.util.average = (function mranderson047$garden$v1v3v3$garden$util$average(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17943 = arguments.length;
var i__9058__auto___17944 = (0);
while(true){
if((i__9058__auto___17944 < len__9057__auto___17943)){
args__9064__auto__.push((arguments[i__9058__auto___17944]));

var G__17945 = (i__9058__auto___17944 + (1));
i__9058__auto___17944 = G__17945;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq17940){
var G__17941 = cljs.core.first.call(null,seq17940);
var seq17940__$1 = cljs.core.next.call(null,seq17940);
var G__17942 = cljs.core.first.call(null,seq17940__$1);
var seq17940__$2 = cljs.core.next.call(null,seq17940__$1);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__17941,G__17942,seq17940__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson047.garden.v1v3v3.garden.util.cartesian_product = (function mranderson047$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17947 = arguments.length;
var i__9058__auto___17948 = (0);
while(true){
if((i__9058__auto___17948 < len__9057__auto___17947)){
args__9064__auto__.push((arguments[i__9058__auto___17948]));

var G__17949 = (i__9058__auto___17948 + (1));
i__9058__auto___17948 = G__17949;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function mranderson047$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__17950 = (i - (1));
var G__17951 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__17950;
v_seqs__$2 = G__17951;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson047$garden$v1v3v3$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq17946){
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17946));
});

