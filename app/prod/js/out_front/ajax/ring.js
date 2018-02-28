// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.ring');
goog.require('cljs.core');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.formats');
ajax.ring.make_ring_read = (function ajax$ring$make_ring_read(body_read){
return (function ajax$ring$make_ring_read_$_ring_read(response){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),ajax.protocols._status.call(null,response),new cljs.core.Keyword(null,"headers","headers",-835030129),ajax.protocols._get_all_headers.call(null,response),new cljs.core.Keyword(null,"body","body",-2049205669),body_read.call(null,response)], null);
});
});
/**
 * Returns a Ring-compatible response map.
 * 
 * Optionally can be passed a :format option. This should be another
 * response-format map. If format is provided it will be used to
 * specify the content-type, and the read method will be used to
 * populate the :body key in the response map.
 */
ajax.ring.ring_response_format = (function ajax$ring$ring_response_format(var_args){
var args20754 = [];
var len__8057__auto___20762 = arguments.length;
var i__8058__auto___20763 = (0);
while(true){
if((i__8058__auto___20763 < len__8057__auto___20762)){
args20754.push((arguments[i__8058__auto___20763]));

var G__20764 = (i__8058__auto___20763 + (1));
i__8058__auto___20763 = G__20764;
continue;
} else {
}
break;
}

var G__20756 = args20754.length;
switch (G__20756) {
case 0:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20754.length)].join('')));

}
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.ring.ring_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),ajax.formats.raw_response_format.call(null)], null));
});

ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__20757){
var map__20758 = p__20757;
var map__20758__$1 = ((((!((map__20758 == null)))?((((map__20758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20758):map__20758);
var map__20759 = cljs.core.get.call(null,map__20758__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var map__20759__$1 = ((((!((map__20759 == null)))?((((map__20759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20759):map__20759);
var read = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var description = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var content_type = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.ring.make_ring_read.call(null,read),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ring/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
});

ajax.ring.ring_response_format.cljs$lang$maxFixedArity = 1;

