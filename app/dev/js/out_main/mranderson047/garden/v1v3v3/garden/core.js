// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__9064__auto__ = [];
var len__9057__auto___21250 = arguments.length;
var i__9058__auto___21251 = (0);
while(true){
if((i__9058__auto___21251 < len__9057__auto___21250)){
args__9064__auto__.push((arguments[i__9058__auto___21251]));

var G__21252 = (i__9058__auto___21251 + (1));
i__9058__auto___21251 = G__21252;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq21249){
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21249));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__9064__auto__ = [];
var len__9057__auto___21254 = arguments.length;
var i__9058__auto___21255 = (0);
while(true){
if((i__9058__auto___21255 < len__9057__auto___21254)){
args__9064__auto__.push((arguments[i__9058__auto___21255]));

var G__21256 = (i__9058__auto___21255 + (1));
i__9058__auto___21255 = G__21256;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((0) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__9065__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq21253){
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21253));
});

