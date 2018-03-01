// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
return cljs.core.keep_indexed.call(null,(function (p1__17955_SHARP_,p2__17954_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__17954_SHARP_))){
return p1__17955_SHARP_;
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
return cljs.core.filter.call(null,(function (p1__17956_SHARP_){
return ((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17956_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17956_SHARP_) <= ending));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__17958 = arguments.length;
switch (G__17958) {
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
var args__9064__auto__ = [];
var len__9057__auto___17967 = arguments.length;
var i__9058__auto___17968 = (0);
while(true){
if((i__9058__auto___17968 < len__9057__auto___17967)){
args__9064__auto__.push((arguments[i__9058__auto___17968]));

var G__17969 = (i__9058__auto___17968 + (1));
i__9058__auto___17968 = G__17969;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__17963){
var vec__17964 = p__17963;
var plural = cljs.core.nth.call(null,vec__17964,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__7895__auto__ = plural;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq17960){
var G__17961 = cljs.core.first.call(null,seq17960);
var seq17960__$1 = cljs.core.next.call(null,seq17960);
var G__17962 = cljs.core.first.call(null,seq17960__$1);
var seq17960__$2 = cljs.core.next.call(null,seq17960__$1);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__17961,G__17962,seq17960__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17977 = arguments.length;
var i__9058__auto___17978 = (0);
while(true){
if((i__9058__auto___17978 < len__9057__auto___17977)){
args__9064__auto__.push((arguments[i__9058__auto___17978]));

var G__17979 = (i__9058__auto___17978 + (1));
i__9058__auto___17978 = G__17979;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__17973){
var vec__17974 = p__17973;
var plural = cljs.core.nth.call(null,vec__17974,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__7895__auto__ = plural;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq17970){
var G__17971 = cljs.core.first.call(null,seq17970);
var seq17970__$1 = cljs.core.next.call(null,seq17970);
var G__17972 = cljs.core.first.call(null,seq17970__$1);
var seq17970__$2 = cljs.core.next.call(null,seq17970__$1);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic(G__17971,G__17972,seq17970__$2);
});

