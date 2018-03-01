// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__47908__auto__ = [];
var len__47901__auto___66327 = arguments.length;
var i__47902__auto___66328 = (0);
while(true){
if((i__47902__auto___66328 < len__47901__auto___66327)){
args__47908__auto__.push((arguments[i__47902__auto___66328]));

var G__66329 = (i__47902__auto___66328 + (1));
i__47902__auto___66328 = G__66329;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq66326){
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66326));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__47908__auto__ = [];
var len__47901__auto___66331 = arguments.length;
var i__47902__auto___66332 = (0);
while(true){
if((i__47902__auto___66332 < len__47901__auto___66331)){
args__47908__auto__.push((arguments[i__47902__auto___66332]));

var G__66333 = (i__47902__auto___66332 + (1));
i__47902__auto___66332 = G__66333;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq66330){
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66330));
});


//# sourceMappingURL=core.js.map
