// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8520__auto__,writer__8521__auto__,opt__8522__auto__){
return cljs.core._write.call(null,writer__8521__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18050 = arguments.length;
var i__9058__auto___18051 = (0);
while(true){
if((i__9058__auto___18051 < len__9057__auto___18050)){
args__9064__auto__.push((arguments[i__9058__auto___18051]));

var G__18052 = (i__9058__auto___18051 + (1));
i__9058__auto___18051 = G__18052;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq18049){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18049));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18054 = arguments.length;
var i__9058__auto___18055 = (0);
while(true){
if((i__9058__auto___18055 < len__9057__auto___18054)){
args__9064__auto__.push((arguments[i__9058__auto___18055]));

var G__18056 = (i__9058__auto___18055 + (1));
i__9058__auto___18055 = G__18056;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq18053){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18053));
});

var g_QMARK__18057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_18058 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__18057){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__18057))
,null));
var mkg_18059 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__18057,g_18058){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__18057,g_18058))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__18057,g_18058,mkg_18059){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__18057).call(null,x);
});})(g_QMARK__18057,g_18058,mkg_18059))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__18057,g_18058,mkg_18059){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_18059).call(null,gfn);
});})(g_QMARK__18057,g_18058,mkg_18059))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__18057,g_18058,mkg_18059){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_18058).call(null,generator);
});})(g_QMARK__18057,g_18058,mkg_18059))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18021__auto___18079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__18021__auto___18079){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18080 = arguments.length;
var i__9058__auto___18081 = (0);
while(true){
if((i__9058__auto___18081 < len__9057__auto___18080)){
args__9064__auto__.push((arguments[i__9058__auto___18081]));

var G__18082 = (i__9058__auto___18081 + (1));
i__9058__auto___18081 = G__18082;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18079))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18079),args);
});})(g__18021__auto___18079))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__18021__auto___18079){
return (function (seq18060){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18060));
});})(g__18021__auto___18079))
;


var g__18021__auto___18083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__18021__auto___18083){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18084 = arguments.length;
var i__9058__auto___18085 = (0);
while(true){
if((i__9058__auto___18085 < len__9057__auto___18084)){
args__9064__auto__.push((arguments[i__9058__auto___18085]));

var G__18086 = (i__9058__auto___18085 + (1));
i__9058__auto___18085 = G__18086;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18083))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18083),args);
});})(g__18021__auto___18083))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__18021__auto___18083){
return (function (seq18061){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18061));
});})(g__18021__auto___18083))
;


var g__18021__auto___18087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__18021__auto___18087){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18088 = arguments.length;
var i__9058__auto___18089 = (0);
while(true){
if((i__9058__auto___18089 < len__9057__auto___18088)){
args__9064__auto__.push((arguments[i__9058__auto___18089]));

var G__18090 = (i__9058__auto___18089 + (1));
i__9058__auto___18089 = G__18090;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18087))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18087),args);
});})(g__18021__auto___18087))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__18021__auto___18087){
return (function (seq18062){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18062));
});})(g__18021__auto___18087))
;


var g__18021__auto___18091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__18021__auto___18091){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18092 = arguments.length;
var i__9058__auto___18093 = (0);
while(true){
if((i__9058__auto___18093 < len__9057__auto___18092)){
args__9064__auto__.push((arguments[i__9058__auto___18093]));

var G__18094 = (i__9058__auto___18093 + (1));
i__9058__auto___18093 = G__18094;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18091))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18091),args);
});})(g__18021__auto___18091))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__18021__auto___18091){
return (function (seq18063){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18063));
});})(g__18021__auto___18091))
;


var g__18021__auto___18095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__18021__auto___18095){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18096 = arguments.length;
var i__9058__auto___18097 = (0);
while(true){
if((i__9058__auto___18097 < len__9057__auto___18096)){
args__9064__auto__.push((arguments[i__9058__auto___18097]));

var G__18098 = (i__9058__auto___18097 + (1));
i__9058__auto___18097 = G__18098;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18095))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18095),args);
});})(g__18021__auto___18095))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__18021__auto___18095){
return (function (seq18064){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18064));
});})(g__18021__auto___18095))
;


var g__18021__auto___18099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__18021__auto___18099){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18100 = arguments.length;
var i__9058__auto___18101 = (0);
while(true){
if((i__9058__auto___18101 < len__9057__auto___18100)){
args__9064__auto__.push((arguments[i__9058__auto___18101]));

var G__18102 = (i__9058__auto___18101 + (1));
i__9058__auto___18101 = G__18102;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18099))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18099),args);
});})(g__18021__auto___18099))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__18021__auto___18099){
return (function (seq18065){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18065));
});})(g__18021__auto___18099))
;


var g__18021__auto___18103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__18021__auto___18103){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18104 = arguments.length;
var i__9058__auto___18105 = (0);
while(true){
if((i__9058__auto___18105 < len__9057__auto___18104)){
args__9064__auto__.push((arguments[i__9058__auto___18105]));

var G__18106 = (i__9058__auto___18105 + (1));
i__9058__auto___18105 = G__18106;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18103))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18103),args);
});})(g__18021__auto___18103))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__18021__auto___18103){
return (function (seq18066){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18066));
});})(g__18021__auto___18103))
;


var g__18021__auto___18107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__18021__auto___18107){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18108 = arguments.length;
var i__9058__auto___18109 = (0);
while(true){
if((i__9058__auto___18109 < len__9057__auto___18108)){
args__9064__auto__.push((arguments[i__9058__auto___18109]));

var G__18110 = (i__9058__auto___18109 + (1));
i__9058__auto___18109 = G__18110;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18107))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18107),args);
});})(g__18021__auto___18107))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__18021__auto___18107){
return (function (seq18067){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18067));
});})(g__18021__auto___18107))
;


var g__18021__auto___18111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__18021__auto___18111){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18112 = arguments.length;
var i__9058__auto___18113 = (0);
while(true){
if((i__9058__auto___18113 < len__9057__auto___18112)){
args__9064__auto__.push((arguments[i__9058__auto___18113]));

var G__18114 = (i__9058__auto___18113 + (1));
i__9058__auto___18113 = G__18114;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18111))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18111),args);
});})(g__18021__auto___18111))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__18021__auto___18111){
return (function (seq18068){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18068));
});})(g__18021__auto___18111))
;


var g__18021__auto___18115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__18021__auto___18115){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18116 = arguments.length;
var i__9058__auto___18117 = (0);
while(true){
if((i__9058__auto___18117 < len__9057__auto___18116)){
args__9064__auto__.push((arguments[i__9058__auto___18117]));

var G__18118 = (i__9058__auto___18117 + (1));
i__9058__auto___18117 = G__18118;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18115))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18115),args);
});})(g__18021__auto___18115))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__18021__auto___18115){
return (function (seq18069){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18069));
});})(g__18021__auto___18115))
;


var g__18021__auto___18119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__18021__auto___18119){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18120 = arguments.length;
var i__9058__auto___18121 = (0);
while(true){
if((i__9058__auto___18121 < len__9057__auto___18120)){
args__9064__auto__.push((arguments[i__9058__auto___18121]));

var G__18122 = (i__9058__auto___18121 + (1));
i__9058__auto___18121 = G__18122;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18119))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18119),args);
});})(g__18021__auto___18119))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__18021__auto___18119){
return (function (seq18070){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18070));
});})(g__18021__auto___18119))
;


var g__18021__auto___18123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__18021__auto___18123){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18124 = arguments.length;
var i__9058__auto___18125 = (0);
while(true){
if((i__9058__auto___18125 < len__9057__auto___18124)){
args__9064__auto__.push((arguments[i__9058__auto___18125]));

var G__18126 = (i__9058__auto___18125 + (1));
i__9058__auto___18125 = G__18126;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18123))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18123),args);
});})(g__18021__auto___18123))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__18021__auto___18123){
return (function (seq18071){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18071));
});})(g__18021__auto___18123))
;


var g__18021__auto___18127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__18021__auto___18127){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18128 = arguments.length;
var i__9058__auto___18129 = (0);
while(true){
if((i__9058__auto___18129 < len__9057__auto___18128)){
args__9064__auto__.push((arguments[i__9058__auto___18129]));

var G__18130 = (i__9058__auto___18129 + (1));
i__9058__auto___18129 = G__18130;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18127))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18127),args);
});})(g__18021__auto___18127))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__18021__auto___18127){
return (function (seq18072){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18072));
});})(g__18021__auto___18127))
;


var g__18021__auto___18131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__18021__auto___18131){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18132 = arguments.length;
var i__9058__auto___18133 = (0);
while(true){
if((i__9058__auto___18133 < len__9057__auto___18132)){
args__9064__auto__.push((arguments[i__9058__auto___18133]));

var G__18134 = (i__9058__auto___18133 + (1));
i__9058__auto___18133 = G__18134;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18131))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18131),args);
});})(g__18021__auto___18131))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__18021__auto___18131){
return (function (seq18073){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18073));
});})(g__18021__auto___18131))
;


var g__18021__auto___18135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__18021__auto___18135){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18136 = arguments.length;
var i__9058__auto___18137 = (0);
while(true){
if((i__9058__auto___18137 < len__9057__auto___18136)){
args__9064__auto__.push((arguments[i__9058__auto___18137]));

var G__18138 = (i__9058__auto___18137 + (1));
i__9058__auto___18137 = G__18138;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18135))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18135),args);
});})(g__18021__auto___18135))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__18021__auto___18135){
return (function (seq18074){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18074));
});})(g__18021__auto___18135))
;


var g__18021__auto___18139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__18021__auto___18139){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18140 = arguments.length;
var i__9058__auto___18141 = (0);
while(true){
if((i__9058__auto___18141 < len__9057__auto___18140)){
args__9064__auto__.push((arguments[i__9058__auto___18141]));

var G__18142 = (i__9058__auto___18141 + (1));
i__9058__auto___18141 = G__18142;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18139))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18139),args);
});})(g__18021__auto___18139))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__18021__auto___18139){
return (function (seq18075){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18075));
});})(g__18021__auto___18139))
;


var g__18021__auto___18143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__18021__auto___18143){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18144 = arguments.length;
var i__9058__auto___18145 = (0);
while(true){
if((i__9058__auto___18145 < len__9057__auto___18144)){
args__9064__auto__.push((arguments[i__9058__auto___18145]));

var G__18146 = (i__9058__auto___18145 + (1));
i__9058__auto___18145 = G__18146;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18143))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18143),args);
});})(g__18021__auto___18143))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__18021__auto___18143){
return (function (seq18076){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18076));
});})(g__18021__auto___18143))
;


var g__18021__auto___18147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__18021__auto___18147){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18148 = arguments.length;
var i__9058__auto___18149 = (0);
while(true){
if((i__9058__auto___18149 < len__9057__auto___18148)){
args__9064__auto__.push((arguments[i__9058__auto___18149]));

var G__18150 = (i__9058__auto___18149 + (1));
i__9058__auto___18149 = G__18150;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18147))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18147),args);
});})(g__18021__auto___18147))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__18021__auto___18147){
return (function (seq18077){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18077));
});})(g__18021__auto___18147))
;


var g__18021__auto___18151 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__18021__auto___18151){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18152 = arguments.length;
var i__9058__auto___18153 = (0);
while(true){
if((i__9058__auto___18153 < len__9057__auto___18152)){
args__9064__auto__.push((arguments[i__9058__auto___18153]));

var G__18154 = (i__9058__auto___18153 + (1));
i__9058__auto___18153 = G__18154;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18021__auto___18151))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18021__auto___18151){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18021__auto___18151),args);
});})(g__18021__auto___18151))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__18021__auto___18151){
return (function (seq18078){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18078));
});})(g__18021__auto___18151))
;

var g__18034__auto___18176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__18034__auto___18176){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18177 = arguments.length;
var i__9058__auto___18178 = (0);
while(true){
if((i__9058__auto___18178 < len__9057__auto___18177)){
args__9064__auto__.push((arguments[i__9058__auto___18178]));

var G__18179 = (i__9058__auto___18178 + (1));
i__9058__auto___18178 = G__18179;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18176))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18176){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18176);
});})(g__18034__auto___18176))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__18034__auto___18176){
return (function (seq18155){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18155));
});})(g__18034__auto___18176))
;


var g__18034__auto___18180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__18034__auto___18180){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18181 = arguments.length;
var i__9058__auto___18182 = (0);
while(true){
if((i__9058__auto___18182 < len__9057__auto___18181)){
args__9064__auto__.push((arguments[i__9058__auto___18182]));

var G__18183 = (i__9058__auto___18182 + (1));
i__9058__auto___18182 = G__18183;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18180))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18180){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18180);
});})(g__18034__auto___18180))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__18034__auto___18180){
return (function (seq18156){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18156));
});})(g__18034__auto___18180))
;


var g__18034__auto___18184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__18034__auto___18184){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18185 = arguments.length;
var i__9058__auto___18186 = (0);
while(true){
if((i__9058__auto___18186 < len__9057__auto___18185)){
args__9064__auto__.push((arguments[i__9058__auto___18186]));

var G__18187 = (i__9058__auto___18186 + (1));
i__9058__auto___18186 = G__18187;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18184))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18184){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18184);
});})(g__18034__auto___18184))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__18034__auto___18184){
return (function (seq18157){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18157));
});})(g__18034__auto___18184))
;


var g__18034__auto___18188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__18034__auto___18188){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18189 = arguments.length;
var i__9058__auto___18190 = (0);
while(true){
if((i__9058__auto___18190 < len__9057__auto___18189)){
args__9064__auto__.push((arguments[i__9058__auto___18190]));

var G__18191 = (i__9058__auto___18190 + (1));
i__9058__auto___18190 = G__18191;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18188))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18188){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18188);
});})(g__18034__auto___18188))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__18034__auto___18188){
return (function (seq18158){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18158));
});})(g__18034__auto___18188))
;


var g__18034__auto___18192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__18034__auto___18192){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18193 = arguments.length;
var i__9058__auto___18194 = (0);
while(true){
if((i__9058__auto___18194 < len__9057__auto___18193)){
args__9064__auto__.push((arguments[i__9058__auto___18194]));

var G__18195 = (i__9058__auto___18194 + (1));
i__9058__auto___18194 = G__18195;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18192))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18192){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18192);
});})(g__18034__auto___18192))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__18034__auto___18192){
return (function (seq18159){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18159));
});})(g__18034__auto___18192))
;


var g__18034__auto___18196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__18034__auto___18196){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18197 = arguments.length;
var i__9058__auto___18198 = (0);
while(true){
if((i__9058__auto___18198 < len__9057__auto___18197)){
args__9064__auto__.push((arguments[i__9058__auto___18198]));

var G__18199 = (i__9058__auto___18198 + (1));
i__9058__auto___18198 = G__18199;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18196))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18196){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18196);
});})(g__18034__auto___18196))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__18034__auto___18196){
return (function (seq18160){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18160));
});})(g__18034__auto___18196))
;


var g__18034__auto___18200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__18034__auto___18200){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18201 = arguments.length;
var i__9058__auto___18202 = (0);
while(true){
if((i__9058__auto___18202 < len__9057__auto___18201)){
args__9064__auto__.push((arguments[i__9058__auto___18202]));

var G__18203 = (i__9058__auto___18202 + (1));
i__9058__auto___18202 = G__18203;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18200))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18200){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18200);
});})(g__18034__auto___18200))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__18034__auto___18200){
return (function (seq18161){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18161));
});})(g__18034__auto___18200))
;


var g__18034__auto___18204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__18034__auto___18204){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18205 = arguments.length;
var i__9058__auto___18206 = (0);
while(true){
if((i__9058__auto___18206 < len__9057__auto___18205)){
args__9064__auto__.push((arguments[i__9058__auto___18206]));

var G__18207 = (i__9058__auto___18206 + (1));
i__9058__auto___18206 = G__18207;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18204))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18204){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18204);
});})(g__18034__auto___18204))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__18034__auto___18204){
return (function (seq18162){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18162));
});})(g__18034__auto___18204))
;


var g__18034__auto___18208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__18034__auto___18208){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18209 = arguments.length;
var i__9058__auto___18210 = (0);
while(true){
if((i__9058__auto___18210 < len__9057__auto___18209)){
args__9064__auto__.push((arguments[i__9058__auto___18210]));

var G__18211 = (i__9058__auto___18210 + (1));
i__9058__auto___18210 = G__18211;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18208))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18208){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18208);
});})(g__18034__auto___18208))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__18034__auto___18208){
return (function (seq18163){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18163));
});})(g__18034__auto___18208))
;


var g__18034__auto___18212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__18034__auto___18212){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18213 = arguments.length;
var i__9058__auto___18214 = (0);
while(true){
if((i__9058__auto___18214 < len__9057__auto___18213)){
args__9064__auto__.push((arguments[i__9058__auto___18214]));

var G__18215 = (i__9058__auto___18214 + (1));
i__9058__auto___18214 = G__18215;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18212))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18212){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18212);
});})(g__18034__auto___18212))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__18034__auto___18212){
return (function (seq18164){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18164));
});})(g__18034__auto___18212))
;


var g__18034__auto___18216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__18034__auto___18216){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18217 = arguments.length;
var i__9058__auto___18218 = (0);
while(true){
if((i__9058__auto___18218 < len__9057__auto___18217)){
args__9064__auto__.push((arguments[i__9058__auto___18218]));

var G__18219 = (i__9058__auto___18218 + (1));
i__9058__auto___18218 = G__18219;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18216))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18216){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18216);
});})(g__18034__auto___18216))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__18034__auto___18216){
return (function (seq18165){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18165));
});})(g__18034__auto___18216))
;


var g__18034__auto___18220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__18034__auto___18220){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18221 = arguments.length;
var i__9058__auto___18222 = (0);
while(true){
if((i__9058__auto___18222 < len__9057__auto___18221)){
args__9064__auto__.push((arguments[i__9058__auto___18222]));

var G__18223 = (i__9058__auto___18222 + (1));
i__9058__auto___18222 = G__18223;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18220))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18220){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18220);
});})(g__18034__auto___18220))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__18034__auto___18220){
return (function (seq18166){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18166));
});})(g__18034__auto___18220))
;


var g__18034__auto___18224 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__18034__auto___18224){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18225 = arguments.length;
var i__9058__auto___18226 = (0);
while(true){
if((i__9058__auto___18226 < len__9057__auto___18225)){
args__9064__auto__.push((arguments[i__9058__auto___18226]));

var G__18227 = (i__9058__auto___18226 + (1));
i__9058__auto___18226 = G__18227;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18224))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18224){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18224);
});})(g__18034__auto___18224))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__18034__auto___18224){
return (function (seq18167){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18167));
});})(g__18034__auto___18224))
;


var g__18034__auto___18228 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__18034__auto___18228){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18229 = arguments.length;
var i__9058__auto___18230 = (0);
while(true){
if((i__9058__auto___18230 < len__9057__auto___18229)){
args__9064__auto__.push((arguments[i__9058__auto___18230]));

var G__18231 = (i__9058__auto___18230 + (1));
i__9058__auto___18230 = G__18231;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18228))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18228){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18228);
});})(g__18034__auto___18228))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__18034__auto___18228){
return (function (seq18168){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18168));
});})(g__18034__auto___18228))
;


var g__18034__auto___18232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__18034__auto___18232){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18233 = arguments.length;
var i__9058__auto___18234 = (0);
while(true){
if((i__9058__auto___18234 < len__9057__auto___18233)){
args__9064__auto__.push((arguments[i__9058__auto___18234]));

var G__18235 = (i__9058__auto___18234 + (1));
i__9058__auto___18234 = G__18235;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18232))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18232){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18232);
});})(g__18034__auto___18232))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__18034__auto___18232){
return (function (seq18169){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18169));
});})(g__18034__auto___18232))
;


var g__18034__auto___18236 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__18034__auto___18236){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18237 = arguments.length;
var i__9058__auto___18238 = (0);
while(true){
if((i__9058__auto___18238 < len__9057__auto___18237)){
args__9064__auto__.push((arguments[i__9058__auto___18238]));

var G__18239 = (i__9058__auto___18238 + (1));
i__9058__auto___18238 = G__18239;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18236))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18236){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18236);
});})(g__18034__auto___18236))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__18034__auto___18236){
return (function (seq18170){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18170));
});})(g__18034__auto___18236))
;


var g__18034__auto___18240 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__18034__auto___18240){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18241 = arguments.length;
var i__9058__auto___18242 = (0);
while(true){
if((i__9058__auto___18242 < len__9057__auto___18241)){
args__9064__auto__.push((arguments[i__9058__auto___18242]));

var G__18243 = (i__9058__auto___18242 + (1));
i__9058__auto___18242 = G__18243;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18240))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18240){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18240);
});})(g__18034__auto___18240))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__18034__auto___18240){
return (function (seq18171){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18171));
});})(g__18034__auto___18240))
;


var g__18034__auto___18244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__18034__auto___18244){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18245 = arguments.length;
var i__9058__auto___18246 = (0);
while(true){
if((i__9058__auto___18246 < len__9057__auto___18245)){
args__9064__auto__.push((arguments[i__9058__auto___18246]));

var G__18247 = (i__9058__auto___18246 + (1));
i__9058__auto___18246 = G__18247;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18244))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18244){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18244);
});})(g__18034__auto___18244))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__18034__auto___18244){
return (function (seq18172){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18172));
});})(g__18034__auto___18244))
;


var g__18034__auto___18248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__18034__auto___18248){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18249 = arguments.length;
var i__9058__auto___18250 = (0);
while(true){
if((i__9058__auto___18250 < len__9057__auto___18249)){
args__9064__auto__.push((arguments[i__9058__auto___18250]));

var G__18251 = (i__9058__auto___18250 + (1));
i__9058__auto___18250 = G__18251;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18248))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18248){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18248);
});})(g__18034__auto___18248))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__18034__auto___18248){
return (function (seq18173){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18173));
});})(g__18034__auto___18248))
;


var g__18034__auto___18252 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__18034__auto___18252){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18253 = arguments.length;
var i__9058__auto___18254 = (0);
while(true){
if((i__9058__auto___18254 < len__9057__auto___18253)){
args__9064__auto__.push((arguments[i__9058__auto___18254]));

var G__18255 = (i__9058__auto___18254 + (1));
i__9058__auto___18254 = G__18255;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18252))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18252){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18252);
});})(g__18034__auto___18252))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__18034__auto___18252){
return (function (seq18174){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18174));
});})(g__18034__auto___18252))
;


var g__18034__auto___18256 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__18034__auto___18256){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18257 = arguments.length;
var i__9058__auto___18258 = (0);
while(true){
if((i__9058__auto___18258 < len__9057__auto___18257)){
args__9064__auto__.push((arguments[i__9058__auto___18258]));

var G__18259 = (i__9058__auto___18258 + (1));
i__9058__auto___18258 = G__18259;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});})(g__18034__auto___18256))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18034__auto___18256){
return (function (args){
return cljs.core.deref.call(null,g__18034__auto___18256);
});})(g__18034__auto___18256))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__18034__auto___18256){
return (function (seq18175){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18175));
});})(g__18034__auto___18256))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9064__auto__ = [];
var len__9057__auto___18262 = arguments.length;
var i__9058__auto___18263 = (0);
while(true){
if((i__9058__auto___18263 < len__9057__auto___18262)){
args__9064__auto__.push((arguments[i__9058__auto___18263]));

var G__18264 = (i__9058__auto___18263 + (1));
i__9058__auto___18263 = G__18264;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__18260_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__18260_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq18261){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18261));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__18265_SHARP_){
return (new Date(p1__18265_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
