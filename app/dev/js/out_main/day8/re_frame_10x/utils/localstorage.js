// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__21181 = arguments.length;
switch (G__21181) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__21183 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__21184 = null;
var count__21185 = (0);
var i__21186 = (0);
while(true){
if((i__21186 < count__21185)){
var k = cljs.core._nth.call(null,chunk__21184,i__21186);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__21187 = seq__21183;
var G__21188 = chunk__21184;
var G__21189 = count__21185;
var G__21190 = (i__21186 + (1));
seq__21183 = G__21187;
chunk__21184 = G__21188;
count__21185 = G__21189;
i__21186 = G__21190;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21183);
if(temp__4657__auto__){
var seq__21183__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21183__$1)){
var c__8734__auto__ = cljs.core.chunk_first.call(null,seq__21183__$1);
var G__21191 = cljs.core.chunk_rest.call(null,seq__21183__$1);
var G__21192 = c__8734__auto__;
var G__21193 = cljs.core.count.call(null,c__8734__auto__);
var G__21194 = (0);
seq__21183 = G__21191;
chunk__21184 = G__21192;
count__21185 = G__21193;
i__21186 = G__21194;
continue;
} else {
var k = cljs.core.first.call(null,seq__21183__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__21195 = cljs.core.next.call(null,seq__21183__$1);
var G__21196 = null;
var G__21197 = (0);
var G__21198 = (0);
seq__21183 = G__21195;
chunk__21184 = G__21196;
count__21185 = G__21197;
i__21186 = G__21198;
continue;
}
} else {
return null;
}
}
break;
}
});
