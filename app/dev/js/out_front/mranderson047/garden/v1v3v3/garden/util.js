// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var args__47908__auto__ = [];
var len__47901__auto___63494 = arguments.length;
var i__47902__auto___63495 = (0);
while(true){
if((i__47902__auto___63495 < len__47901__auto___63494)){
args__47908__auto__.push((arguments[i__47902__auto___63495]));

var G__63496 = (i__47902__auto___63495 + (1));
i__47902__auto___63495 = G__63496;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq63492){
var G__63493 = cljs.core.first.call(null,seq63492);
var seq63492__$1 = cljs.core.next.call(null,seq63492);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__63493,seq63492__$1);
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
var x__47422__auto__ = (((this$ == null))?null:this$);
var m__47423__auto__ = (mranderson047.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,this$);
} else {
var m__47423__auto____$1 = (mranderson047.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,this$);
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
var args__47908__auto__ = [];
var len__47901__auto___63498 = arguments.length;
var i__47902__auto___63499 = (0);
while(true){
if((i__47902__auto___63499 < len__47901__auto___63498)){
args__47908__auto__.push((arguments[i__47902__auto___63499]));

var G__63500 = (i__47902__auto___63499 + (1));
i__47902__auto___63499 = G__63500;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.util.to_str,args));
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq63497){
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63497));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.string__GT_int = (function mranderson047$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63507 = arguments.length;
var i__47902__auto___63508 = (0);
while(true){
if((i__47902__auto___63508 < len__47901__auto___63507)){
args__47908__auto__.push((arguments[i__47902__auto___63508]));

var G__63509 = (i__47902__auto___63508 + (1));
i__47902__auto___63508 = G__63509;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__63503){
var vec__63504 = p__63503;
var radix = cljs.core.nth.call(null,vec__63504,(0),null);
var radix__$1 = (function (){var or__46739__auto__ = radix;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq63501){
var G__63502 = cljs.core.first.call(null,seq63501);
var seq63501__$1 = cljs.core.next.call(null,seq63501);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__63502,seq63501__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.int__GT_string = (function mranderson047$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63516 = arguments.length;
var i__47902__auto___63517 = (0);
while(true){
if((i__47902__auto___63517 < len__47901__auto___63516)){
args__47908__auto__.push((arguments[i__47902__auto___63517]));

var G__63518 = (i__47902__auto___63517 + (1));
i__47902__auto___63517 = G__63518;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__63512){
var vec__63513 = p__63512;
var radix = cljs.core.nth.call(null,vec__63513,(0),null);
var radix__$1 = (function (){var or__46739__auto__ = radix;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq63510){
var G__63511 = cljs.core.first.call(null,seq63510);
var seq63510__$1 = cljs.core.next.call(null,seq63510);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__63511,seq63510__$1);
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
var ys = (function (){var iter__47547__auto__ = (function mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__63519(s__63520){
return (new cljs.core.LazySeq(null,(function (){
var s__63520__$1 = s__63520;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__63520__$1);
if(temp__4657__auto__){
var s__63520__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__63520__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__63520__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__63522 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__63521 = (0);
while(true){
if((i__63521 < size__47546__auto__)){
var x = cljs.core._nth.call(null,c__47545__auto__,i__63521);
cljs.core.chunk_append.call(null,b__63522,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__63523 = (i__63521 + (1));
i__63521 = G__63523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63522),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__63519.call(null,cljs.core.chunk_rest.call(null,s__63520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63522),null);
}
} else {
var x = cljs.core.first.call(null,s__63520__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__63519.call(null,cljs.core.rest.call(null,s__63520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47547__auto__.call(null,xs);
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
var and__46727__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__46727__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__46727__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__46727__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__46727__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__46727__auto__;
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
var bottom = (function (){var x__47096__auto__ = a;
var y__47097__auto__ = b;
return ((x__47096__auto__ < y__47097__auto__) ? x__47096__auto__ : y__47097__auto__);
})();
var top = (function (){var x__47089__auto__ = a;
var y__47090__auto__ = b;
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson047.garden.v1v3v3.garden.util.clip = (function mranderson047$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__63524 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__63524,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__63524,(1),null);
var x__47089__auto__ = a__$1;
var y__47090__auto__ = (function (){var x__47096__auto__ = b__$1;
var y__47097__auto__ = n;
return ((x__47096__auto__ < y__47097__auto__) ? x__47096__auto__ : y__47097__auto__);
})();
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson047.garden.v1v3v3.garden.util.average = (function mranderson047$garden$v1v3v3$garden$util$average(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63530 = arguments.length;
var i__47902__auto___63531 = (0);
while(true){
if((i__47902__auto___63531 < len__47901__auto___63530)){
args__47908__auto__.push((arguments[i__47902__auto___63531]));

var G__63532 = (i__47902__auto___63531 + (1));
i__47902__auto___63531 = G__63532;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((2) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((2)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq63527){
var G__63528 = cljs.core.first.call(null,seq63527);
var seq63527__$1 = cljs.core.next.call(null,seq63527);
var G__63529 = cljs.core.first.call(null,seq63527__$1);
var seq63527__$2 = cljs.core.next.call(null,seq63527__$1);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__63528,G__63529,seq63527__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson047.garden.v1v3v3.garden.util.cartesian_product = (function mranderson047$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63534 = arguments.length;
var i__47902__auto___63535 = (0);
while(true){
if((i__47902__auto___63535 < len__47901__auto___63534)){
args__47908__auto__.push((arguments[i__47902__auto___63535]));

var G__63536 = (i__47902__auto___63535 + (1));
i__47902__auto___63535 = G__63536;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
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
var G__63537 = (i - (1));
var G__63538 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__63537;
v_seqs__$2 = G__63538;
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

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq63533){
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63533));
});


//# sourceMappingURL=util.js.map
