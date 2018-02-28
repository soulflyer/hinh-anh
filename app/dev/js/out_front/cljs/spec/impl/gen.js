// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20624 = arguments.length;
var i__8058__auto___20625 = (0);
while(true){
if((i__8058__auto___20625 < len__8057__auto___20624)){
args__8064__auto__.push((arguments[i__8058__auto___20625]));

var G__20626 = (i__8058__auto___20625 + (1));
i__8058__auto___20625 = G__20626;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20623){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20623));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20628 = arguments.length;
var i__8058__auto___20629 = (0);
while(true){
if((i__8058__auto___20629 < len__8057__auto___20628)){
args__8064__auto__.push((arguments[i__8058__auto___20629]));

var G__20630 = (i__8058__auto___20629 + (1));
i__8058__auto___20629 = G__20630;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20627){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20627));
});

var g_QMARK__20631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_20632 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20631){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__20631))
,null));
var mkg_20633 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20631,g_20632){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__20631,g_20632))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20631,g_20632,mkg_20633){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20631).call(null,x);
});})(g_QMARK__20631,g_20632,mkg_20633))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20631,g_20632,mkg_20633){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20633).call(null,gfn);
});})(g_QMARK__20631,g_20632,mkg_20633))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20631,g_20632,mkg_20633){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20632).call(null,generator);
});})(g_QMARK__20631,g_20632,mkg_20633))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__20595__auto___20653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__20595__auto___20653){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20654 = arguments.length;
var i__8058__auto___20655 = (0);
while(true){
if((i__8058__auto___20655 < len__8057__auto___20654)){
args__8064__auto__.push((arguments[i__8058__auto___20655]));

var G__20656 = (i__8058__auto___20655 + (1));
i__8058__auto___20655 = G__20656;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20653))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20653),args);
});})(g__20595__auto___20653))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__20595__auto___20653){
return (function (seq20634){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20634));
});})(g__20595__auto___20653))
;


var g__20595__auto___20657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__20595__auto___20657){
return (function cljs$spec$impl$gen$list(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20658 = arguments.length;
var i__8058__auto___20659 = (0);
while(true){
if((i__8058__auto___20659 < len__8057__auto___20658)){
args__8064__auto__.push((arguments[i__8058__auto___20659]));

var G__20660 = (i__8058__auto___20659 + (1));
i__8058__auto___20659 = G__20660;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20657))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20657),args);
});})(g__20595__auto___20657))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__20595__auto___20657){
return (function (seq20635){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20635));
});})(g__20595__auto___20657))
;


var g__20595__auto___20661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__20595__auto___20661){
return (function cljs$spec$impl$gen$map(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20662 = arguments.length;
var i__8058__auto___20663 = (0);
while(true){
if((i__8058__auto___20663 < len__8057__auto___20662)){
args__8064__auto__.push((arguments[i__8058__auto___20663]));

var G__20664 = (i__8058__auto___20663 + (1));
i__8058__auto___20663 = G__20664;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20661))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20661),args);
});})(g__20595__auto___20661))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__20595__auto___20661){
return (function (seq20636){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20636));
});})(g__20595__auto___20661))
;


var g__20595__auto___20665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__20595__auto___20665){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20666 = arguments.length;
var i__8058__auto___20667 = (0);
while(true){
if((i__8058__auto___20667 < len__8057__auto___20666)){
args__8064__auto__.push((arguments[i__8058__auto___20667]));

var G__20668 = (i__8058__auto___20667 + (1));
i__8058__auto___20667 = G__20668;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20665))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20665),args);
});})(g__20595__auto___20665))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__20595__auto___20665){
return (function (seq20637){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20637));
});})(g__20595__auto___20665))
;


var g__20595__auto___20669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__20595__auto___20669){
return (function cljs$spec$impl$gen$set(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20670 = arguments.length;
var i__8058__auto___20671 = (0);
while(true){
if((i__8058__auto___20671 < len__8057__auto___20670)){
args__8064__auto__.push((arguments[i__8058__auto___20671]));

var G__20672 = (i__8058__auto___20671 + (1));
i__8058__auto___20671 = G__20672;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20669))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20669),args);
});})(g__20595__auto___20669))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__20595__auto___20669){
return (function (seq20638){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20638));
});})(g__20595__auto___20669))
;


var g__20595__auto___20673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__20595__auto___20673){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20674 = arguments.length;
var i__8058__auto___20675 = (0);
while(true){
if((i__8058__auto___20675 < len__8057__auto___20674)){
args__8064__auto__.push((arguments[i__8058__auto___20675]));

var G__20676 = (i__8058__auto___20675 + (1));
i__8058__auto___20675 = G__20676;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20673))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20673),args);
});})(g__20595__auto___20673))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__20595__auto___20673){
return (function (seq20639){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20639));
});})(g__20595__auto___20673))
;


var g__20595__auto___20677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__20595__auto___20677){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20678 = arguments.length;
var i__8058__auto___20679 = (0);
while(true){
if((i__8058__auto___20679 < len__8057__auto___20678)){
args__8064__auto__.push((arguments[i__8058__auto___20679]));

var G__20680 = (i__8058__auto___20679 + (1));
i__8058__auto___20679 = G__20680;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20677))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20677),args);
});})(g__20595__auto___20677))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__20595__auto___20677){
return (function (seq20640){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20640));
});})(g__20595__auto___20677))
;


var g__20595__auto___20681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__20595__auto___20681){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20682 = arguments.length;
var i__8058__auto___20683 = (0);
while(true){
if((i__8058__auto___20683 < len__8057__auto___20682)){
args__8064__auto__.push((arguments[i__8058__auto___20683]));

var G__20684 = (i__8058__auto___20683 + (1));
i__8058__auto___20683 = G__20684;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20681))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20681),args);
});})(g__20595__auto___20681))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__20595__auto___20681){
return (function (seq20641){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20641));
});})(g__20595__auto___20681))
;


var g__20595__auto___20685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__20595__auto___20685){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20686 = arguments.length;
var i__8058__auto___20687 = (0);
while(true){
if((i__8058__auto___20687 < len__8057__auto___20686)){
args__8064__auto__.push((arguments[i__8058__auto___20687]));

var G__20688 = (i__8058__auto___20687 + (1));
i__8058__auto___20687 = G__20688;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20685))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20685),args);
});})(g__20595__auto___20685))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__20595__auto___20685){
return (function (seq20642){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20642));
});})(g__20595__auto___20685))
;


var g__20595__auto___20689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__20595__auto___20689){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20690 = arguments.length;
var i__8058__auto___20691 = (0);
while(true){
if((i__8058__auto___20691 < len__8057__auto___20690)){
args__8064__auto__.push((arguments[i__8058__auto___20691]));

var G__20692 = (i__8058__auto___20691 + (1));
i__8058__auto___20691 = G__20692;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20689))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20689),args);
});})(g__20595__auto___20689))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__20595__auto___20689){
return (function (seq20643){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20643));
});})(g__20595__auto___20689))
;


var g__20595__auto___20693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__20595__auto___20693){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20694 = arguments.length;
var i__8058__auto___20695 = (0);
while(true){
if((i__8058__auto___20695 < len__8057__auto___20694)){
args__8064__auto__.push((arguments[i__8058__auto___20695]));

var G__20696 = (i__8058__auto___20695 + (1));
i__8058__auto___20695 = G__20696;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20693))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20693),args);
});})(g__20595__auto___20693))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__20595__auto___20693){
return (function (seq20644){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20644));
});})(g__20595__auto___20693))
;


var g__20595__auto___20697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__20595__auto___20697){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20698 = arguments.length;
var i__8058__auto___20699 = (0);
while(true){
if((i__8058__auto___20699 < len__8057__auto___20698)){
args__8064__auto__.push((arguments[i__8058__auto___20699]));

var G__20700 = (i__8058__auto___20699 + (1));
i__8058__auto___20699 = G__20700;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20697))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20697),args);
});})(g__20595__auto___20697))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__20595__auto___20697){
return (function (seq20645){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20645));
});})(g__20595__auto___20697))
;


var g__20595__auto___20701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__20595__auto___20701){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20702 = arguments.length;
var i__8058__auto___20703 = (0);
while(true){
if((i__8058__auto___20703 < len__8057__auto___20702)){
args__8064__auto__.push((arguments[i__8058__auto___20703]));

var G__20704 = (i__8058__auto___20703 + (1));
i__8058__auto___20703 = G__20704;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20701))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20701),args);
});})(g__20595__auto___20701))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__20595__auto___20701){
return (function (seq20646){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20646));
});})(g__20595__auto___20701))
;


var g__20595__auto___20705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__20595__auto___20705){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20706 = arguments.length;
var i__8058__auto___20707 = (0);
while(true){
if((i__8058__auto___20707 < len__8057__auto___20706)){
args__8064__auto__.push((arguments[i__8058__auto___20707]));

var G__20708 = (i__8058__auto___20707 + (1));
i__8058__auto___20707 = G__20708;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20705))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20705),args);
});})(g__20595__auto___20705))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__20595__auto___20705){
return (function (seq20647){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20647));
});})(g__20595__auto___20705))
;


var g__20595__auto___20709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__20595__auto___20709){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20710 = arguments.length;
var i__8058__auto___20711 = (0);
while(true){
if((i__8058__auto___20711 < len__8057__auto___20710)){
args__8064__auto__.push((arguments[i__8058__auto___20711]));

var G__20712 = (i__8058__auto___20711 + (1));
i__8058__auto___20711 = G__20712;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20709))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20709),args);
});})(g__20595__auto___20709))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__20595__auto___20709){
return (function (seq20648){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20648));
});})(g__20595__auto___20709))
;


var g__20595__auto___20713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__20595__auto___20713){
return (function cljs$spec$impl$gen$return(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20714 = arguments.length;
var i__8058__auto___20715 = (0);
while(true){
if((i__8058__auto___20715 < len__8057__auto___20714)){
args__8064__auto__.push((arguments[i__8058__auto___20715]));

var G__20716 = (i__8058__auto___20715 + (1));
i__8058__auto___20715 = G__20716;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20713))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20713),args);
});})(g__20595__auto___20713))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__20595__auto___20713){
return (function (seq20649){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20649));
});})(g__20595__auto___20713))
;


var g__20595__auto___20717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__20595__auto___20717){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20718 = arguments.length;
var i__8058__auto___20719 = (0);
while(true){
if((i__8058__auto___20719 < len__8057__auto___20718)){
args__8064__auto__.push((arguments[i__8058__auto___20719]));

var G__20720 = (i__8058__auto___20719 + (1));
i__8058__auto___20719 = G__20720;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20717))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20717),args);
});})(g__20595__auto___20717))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20595__auto___20717){
return (function (seq20650){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20650));
});})(g__20595__auto___20717))
;


var g__20595__auto___20721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__20595__auto___20721){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20722 = arguments.length;
var i__8058__auto___20723 = (0);
while(true){
if((i__8058__auto___20723 < len__8057__auto___20722)){
args__8064__auto__.push((arguments[i__8058__auto___20723]));

var G__20724 = (i__8058__auto___20723 + (1));
i__8058__auto___20723 = G__20724;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20721))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20721),args);
});})(g__20595__auto___20721))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__20595__auto___20721){
return (function (seq20651){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20651));
});})(g__20595__auto___20721))
;


var g__20595__auto___20725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__20595__auto___20725){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20726 = arguments.length;
var i__8058__auto___20727 = (0);
while(true){
if((i__8058__auto___20727 < len__8057__auto___20726)){
args__8064__auto__.push((arguments[i__8058__auto___20727]));

var G__20728 = (i__8058__auto___20727 + (1));
i__8058__auto___20727 = G__20728;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20595__auto___20725))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20595__auto___20725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20595__auto___20725),args);
});})(g__20595__auto___20725))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__20595__auto___20725){
return (function (seq20652){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20652));
});})(g__20595__auto___20725))
;

var g__20608__auto___20750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__20608__auto___20750){
return (function cljs$spec$impl$gen$any(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20751 = arguments.length;
var i__8058__auto___20752 = (0);
while(true){
if((i__8058__auto___20752 < len__8057__auto___20751)){
args__8064__auto__.push((arguments[i__8058__auto___20752]));

var G__20753 = (i__8058__auto___20752 + (1));
i__8058__auto___20752 = G__20753;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20750))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20750){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20750);
});})(g__20608__auto___20750))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__20608__auto___20750){
return (function (seq20729){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20729));
});})(g__20608__auto___20750))
;


var g__20608__auto___20754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__20608__auto___20754){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20755 = arguments.length;
var i__8058__auto___20756 = (0);
while(true){
if((i__8058__auto___20756 < len__8057__auto___20755)){
args__8064__auto__.push((arguments[i__8058__auto___20756]));

var G__20757 = (i__8058__auto___20756 + (1));
i__8058__auto___20756 = G__20757;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20754))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20754){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20754);
});})(g__20608__auto___20754))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__20608__auto___20754){
return (function (seq20730){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20730));
});})(g__20608__auto___20754))
;


var g__20608__auto___20758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__20608__auto___20758){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20759 = arguments.length;
var i__8058__auto___20760 = (0);
while(true){
if((i__8058__auto___20760 < len__8057__auto___20759)){
args__8064__auto__.push((arguments[i__8058__auto___20760]));

var G__20761 = (i__8058__auto___20760 + (1));
i__8058__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20758))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20758){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20758);
});})(g__20608__auto___20758))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__20608__auto___20758){
return (function (seq20731){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20731));
});})(g__20608__auto___20758))
;


var g__20608__auto___20762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__20608__auto___20762){
return (function cljs$spec$impl$gen$char(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20763 = arguments.length;
var i__8058__auto___20764 = (0);
while(true){
if((i__8058__auto___20764 < len__8057__auto___20763)){
args__8064__auto__.push((arguments[i__8058__auto___20764]));

var G__20765 = (i__8058__auto___20764 + (1));
i__8058__auto___20764 = G__20765;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20762))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20762){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20762);
});})(g__20608__auto___20762))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__20608__auto___20762){
return (function (seq20732){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20732));
});})(g__20608__auto___20762))
;


var g__20608__auto___20766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__20608__auto___20766){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20767 = arguments.length;
var i__8058__auto___20768 = (0);
while(true){
if((i__8058__auto___20768 < len__8057__auto___20767)){
args__8064__auto__.push((arguments[i__8058__auto___20768]));

var G__20769 = (i__8058__auto___20768 + (1));
i__8058__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20766))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20766){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20766);
});})(g__20608__auto___20766))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__20608__auto___20766){
return (function (seq20733){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20733));
});})(g__20608__auto___20766))
;


var g__20608__auto___20770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__20608__auto___20770){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20771 = arguments.length;
var i__8058__auto___20772 = (0);
while(true){
if((i__8058__auto___20772 < len__8057__auto___20771)){
args__8064__auto__.push((arguments[i__8058__auto___20772]));

var G__20773 = (i__8058__auto___20772 + (1));
i__8058__auto___20772 = G__20773;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20770))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20770){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20770);
});})(g__20608__auto___20770))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__20608__auto___20770){
return (function (seq20734){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20734));
});})(g__20608__auto___20770))
;


var g__20608__auto___20774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__20608__auto___20774){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20775 = arguments.length;
var i__8058__auto___20776 = (0);
while(true){
if((i__8058__auto___20776 < len__8057__auto___20775)){
args__8064__auto__.push((arguments[i__8058__auto___20776]));

var G__20777 = (i__8058__auto___20776 + (1));
i__8058__auto___20776 = G__20777;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20774))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20774){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20774);
});})(g__20608__auto___20774))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__20608__auto___20774){
return (function (seq20735){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20735));
});})(g__20608__auto___20774))
;


var g__20608__auto___20778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__20608__auto___20778){
return (function cljs$spec$impl$gen$double(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20779 = arguments.length;
var i__8058__auto___20780 = (0);
while(true){
if((i__8058__auto___20780 < len__8057__auto___20779)){
args__8064__auto__.push((arguments[i__8058__auto___20780]));

var G__20781 = (i__8058__auto___20780 + (1));
i__8058__auto___20780 = G__20781;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20778))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20778){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20778);
});})(g__20608__auto___20778))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__20608__auto___20778){
return (function (seq20736){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20736));
});})(g__20608__auto___20778))
;


var g__20608__auto___20782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__20608__auto___20782){
return (function cljs$spec$impl$gen$int(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20783 = arguments.length;
var i__8058__auto___20784 = (0);
while(true){
if((i__8058__auto___20784 < len__8057__auto___20783)){
args__8064__auto__.push((arguments[i__8058__auto___20784]));

var G__20785 = (i__8058__auto___20784 + (1));
i__8058__auto___20784 = G__20785;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20782))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20782){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20782);
});})(g__20608__auto___20782))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__20608__auto___20782){
return (function (seq20737){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20737));
});})(g__20608__auto___20782))
;


var g__20608__auto___20786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__20608__auto___20786){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20787 = arguments.length;
var i__8058__auto___20788 = (0);
while(true){
if((i__8058__auto___20788 < len__8057__auto___20787)){
args__8064__auto__.push((arguments[i__8058__auto___20788]));

var G__20789 = (i__8058__auto___20788 + (1));
i__8058__auto___20788 = G__20789;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20786))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20786){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20786);
});})(g__20608__auto___20786))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__20608__auto___20786){
return (function (seq20738){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20738));
});})(g__20608__auto___20786))
;


var g__20608__auto___20790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__20608__auto___20790){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20791 = arguments.length;
var i__8058__auto___20792 = (0);
while(true){
if((i__8058__auto___20792 < len__8057__auto___20791)){
args__8064__auto__.push((arguments[i__8058__auto___20792]));

var G__20793 = (i__8058__auto___20792 + (1));
i__8058__auto___20792 = G__20793;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20790))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20790){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20790);
});})(g__20608__auto___20790))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__20608__auto___20790){
return (function (seq20739){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20739));
});})(g__20608__auto___20790))
;


var g__20608__auto___20794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__20608__auto___20794){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20795 = arguments.length;
var i__8058__auto___20796 = (0);
while(true){
if((i__8058__auto___20796 < len__8057__auto___20795)){
args__8064__auto__.push((arguments[i__8058__auto___20796]));

var G__20797 = (i__8058__auto___20796 + (1));
i__8058__auto___20796 = G__20797;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20794))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20794){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20794);
});})(g__20608__auto___20794))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__20608__auto___20794){
return (function (seq20740){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20740));
});})(g__20608__auto___20794))
;


var g__20608__auto___20798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__20608__auto___20798){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20799 = arguments.length;
var i__8058__auto___20800 = (0);
while(true){
if((i__8058__auto___20800 < len__8057__auto___20799)){
args__8064__auto__.push((arguments[i__8058__auto___20800]));

var G__20801 = (i__8058__auto___20800 + (1));
i__8058__auto___20800 = G__20801;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20798))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20798){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20798);
});})(g__20608__auto___20798))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__20608__auto___20798){
return (function (seq20741){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20741));
});})(g__20608__auto___20798))
;


var g__20608__auto___20802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__20608__auto___20802){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20803 = arguments.length;
var i__8058__auto___20804 = (0);
while(true){
if((i__8058__auto___20804 < len__8057__auto___20803)){
args__8064__auto__.push((arguments[i__8058__auto___20804]));

var G__20805 = (i__8058__auto___20804 + (1));
i__8058__auto___20804 = G__20805;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20802))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20802){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20802);
});})(g__20608__auto___20802))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__20608__auto___20802){
return (function (seq20742){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20742));
});})(g__20608__auto___20802))
;


var g__20608__auto___20806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__20608__auto___20806){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20807 = arguments.length;
var i__8058__auto___20808 = (0);
while(true){
if((i__8058__auto___20808 < len__8057__auto___20807)){
args__8064__auto__.push((arguments[i__8058__auto___20808]));

var G__20809 = (i__8058__auto___20808 + (1));
i__8058__auto___20808 = G__20809;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20806))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20806){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20806);
});})(g__20608__auto___20806))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__20608__auto___20806){
return (function (seq20743){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20743));
});})(g__20608__auto___20806))
;


var g__20608__auto___20810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__20608__auto___20810){
return (function cljs$spec$impl$gen$string(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20811 = arguments.length;
var i__8058__auto___20812 = (0);
while(true){
if((i__8058__auto___20812 < len__8057__auto___20811)){
args__8064__auto__.push((arguments[i__8058__auto___20812]));

var G__20813 = (i__8058__auto___20812 + (1));
i__8058__auto___20812 = G__20813;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20810))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20810){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20810);
});})(g__20608__auto___20810))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__20608__auto___20810){
return (function (seq20744){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20744));
});})(g__20608__auto___20810))
;


var g__20608__auto___20814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__20608__auto___20814){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20815 = arguments.length;
var i__8058__auto___20816 = (0);
while(true){
if((i__8058__auto___20816 < len__8057__auto___20815)){
args__8064__auto__.push((arguments[i__8058__auto___20816]));

var G__20817 = (i__8058__auto___20816 + (1));
i__8058__auto___20816 = G__20817;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20814))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20814){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20814);
});})(g__20608__auto___20814))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__20608__auto___20814){
return (function (seq20745){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20745));
});})(g__20608__auto___20814))
;


var g__20608__auto___20818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__20608__auto___20818){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20819 = arguments.length;
var i__8058__auto___20820 = (0);
while(true){
if((i__8058__auto___20820 < len__8057__auto___20819)){
args__8064__auto__.push((arguments[i__8058__auto___20820]));

var G__20821 = (i__8058__auto___20820 + (1));
i__8058__auto___20820 = G__20821;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20818))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20818){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20818);
});})(g__20608__auto___20818))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__20608__auto___20818){
return (function (seq20746){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20746));
});})(g__20608__auto___20818))
;


var g__20608__auto___20822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__20608__auto___20822){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20823 = arguments.length;
var i__8058__auto___20824 = (0);
while(true){
if((i__8058__auto___20824 < len__8057__auto___20823)){
args__8064__auto__.push((arguments[i__8058__auto___20824]));

var G__20825 = (i__8058__auto___20824 + (1));
i__8058__auto___20824 = G__20825;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20822))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20822){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20822);
});})(g__20608__auto___20822))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__20608__auto___20822){
return (function (seq20747){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20747));
});})(g__20608__auto___20822))
;


var g__20608__auto___20826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__20608__auto___20826){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20827 = arguments.length;
var i__8058__auto___20828 = (0);
while(true){
if((i__8058__auto___20828 < len__8057__auto___20827)){
args__8064__auto__.push((arguments[i__8058__auto___20828]));

var G__20829 = (i__8058__auto___20828 + (1));
i__8058__auto___20828 = G__20829;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20826))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20826){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20826);
});})(g__20608__auto___20826))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__20608__auto___20826){
return (function (seq20748){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20748));
});})(g__20608__auto___20826))
;


var g__20608__auto___20830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__20608__auto___20830){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20831 = arguments.length;
var i__8058__auto___20832 = (0);
while(true){
if((i__8058__auto___20832 < len__8057__auto___20831)){
args__8064__auto__.push((arguments[i__8058__auto___20832]));

var G__20833 = (i__8058__auto___20832 + (1));
i__8058__auto___20832 = G__20833;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});})(g__20608__auto___20830))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20608__auto___20830){
return (function (args){
return cljs.core.deref.call(null,g__20608__auto___20830);
});})(g__20608__auto___20830))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__20608__auto___20830){
return (function (seq20749){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20749));
});})(g__20608__auto___20830))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20836 = arguments.length;
var i__8058__auto___20837 = (0);
while(true){
if((i__8058__auto___20837 < len__8057__auto___20836)){
args__8064__auto__.push((arguments[i__8058__auto___20837]));

var G__20838 = (i__8058__auto___20837 + (1));
i__8058__auto___20837 = G__20838;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20834_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20834_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20835){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20835));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20839_SHARP_){
return (new Date(p1__20839_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map