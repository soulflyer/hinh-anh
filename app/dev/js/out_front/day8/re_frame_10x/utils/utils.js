// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.utils.utils');
goog.require('cljs.core');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
return cljs.core.nth.call(null,v,(cljs.core.count.call(null,v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__63542_SHARP_,p2__63541_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__63541_SHARP_))){
return p1__63542_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame_10x.utils.utils.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__63543_SHARP_){
return ((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63543_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63543_SHARP_) <= ending));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__63545 = arguments.length;
switch (G__63545) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63554 = arguments.length;
var i__47902__auto___63555 = (0);
while(true){
if((i__47902__auto___63555 < len__47901__auto___63554)){
args__47908__auto__.push((arguments[i__47902__auto___63555]));

var G__63556 = (i__47902__auto___63555 + (1));
i__47902__auto___63555 = G__63556;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((2) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47909__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__63550){
var vec__63551 = p__63550;
var plural = cljs.core.nth.call(null,vec__63551,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__46739__auto__ = plural;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq63547){
var G__63548 = cljs.core.first.call(null,seq63547);
var seq63547__$1 = cljs.core.next.call(null,seq63547);
var G__63549 = cljs.core.first.call(null,seq63547__$1);
var seq63547__$2 = cljs.core.next.call(null,seq63547__$1);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__63548,G__63549,seq63547__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63564 = arguments.length;
var i__47902__auto___63565 = (0);
while(true){
if((i__47902__auto___63565 < len__47901__auto___63564)){
args__47908__auto__.push((arguments[i__47902__auto___63565]));

var G__63566 = (i__47902__auto___63565 + (1));
i__47902__auto___63565 = G__63566;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((2) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__47909__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__63560){
var vec__63561 = p__63560;
var plural = cljs.core.nth.call(null,vec__63561,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__46739__auto__ = plural;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq63557){
var G__63558 = cljs.core.first.call(null,seq63557);
var seq63557__$1 = cljs.core.next.call(null,seq63557);
var G__63559 = cljs.core.first.call(null,seq63557__$1);
var seq63557__$2 = cljs.core.next.call(null,seq63557__$1);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic(G__63558,G__63559,seq63557__$2);
});


//# sourceMappingURL=utils.js.map
