// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var G__66258 = arguments.length;
switch (G__66258) {
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
var seq__66260 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__66261 = null;
var count__66262 = (0);
var i__66263 = (0);
while(true){
if((i__66263 < count__66262)){
var k = cljs.core._nth.call(null,chunk__66261,i__66263);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66264 = seq__66260;
var G__66265 = chunk__66261;
var G__66266 = count__66262;
var G__66267 = (i__66263 + (1));
seq__66260 = G__66264;
chunk__66261 = G__66265;
count__66262 = G__66266;
i__66263 = G__66267;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__66260);
if(temp__4657__auto__){
var seq__66260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66260__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__66260__$1);
var G__66268 = cljs.core.chunk_rest.call(null,seq__66260__$1);
var G__66269 = c__47578__auto__;
var G__66270 = cljs.core.count.call(null,c__47578__auto__);
var G__66271 = (0);
seq__66260 = G__66268;
chunk__66261 = G__66269;
count__66262 = G__66270;
i__66263 = G__66271;
continue;
} else {
var k = cljs.core.first.call(null,seq__66260__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__66272 = cljs.core.next.call(null,seq__66260__$1);
var G__66273 = null;
var G__66274 = (0);
var G__66275 = (0);
seq__66260 = G__66272;
chunk__66261 = G__66273;
count__66262 = G__66274;
i__66263 = G__66275;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map
