// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20853 = arguments.length;
var i__8058__auto___20854 = (0);
while(true){
if((i__8058__auto___20854 < len__8057__auto___20853)){
args__8064__auto__.push((arguments[i__8058__auto___20854]));

var G__20855 = (i__8058__auto___20854 + (1));
i__8058__auto___20854 = G__20855;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq20851){
var G__20852 = cljs.core.first.call(null,seq20851);
var seq20851__$1 = cljs.core.next.call(null,seq20851);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__20852,seq20851__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20858 = arguments.length;
var i__8058__auto___20859 = (0);
while(true){
if((i__8058__auto___20859 < len__8057__auto___20858)){
args__8064__auto__.push((arguments[i__8058__auto___20859]));

var G__20860 = (i__8058__auto___20859 + (1));
i__8058__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq20856){
var G__20857 = cljs.core.first.call(null,seq20856);
var seq20856__$1 = cljs.core.next.call(null,seq20856);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__20857,seq20856__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20863 = arguments.length;
var i__8058__auto___20864 = (0);
while(true){
if((i__8058__auto___20864 < len__8057__auto___20863)){
args__8064__auto__.push((arguments[i__8058__auto___20864]));

var G__20865 = (i__8058__auto___20864 + (1));
i__8058__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq20861){
var G__20862 = cljs.core.first.call(null,seq20861);
var seq20861__$1 = cljs.core.next.call(null,seq20861);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__20862,seq20861__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20868 = arguments.length;
var i__8058__auto___20869 = (0);
while(true){
if((i__8058__auto___20869 < len__8057__auto___20868)){
args__8064__auto__.push((arguments[i__8058__auto___20869]));

var G__20870 = (i__8058__auto___20869 + (1));
i__8058__auto___20869 = G__20870;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq20866){
var G__20867 = cljs.core.first.call(null,seq20866);
var seq20866__$1 = cljs.core.next.call(null,seq20866);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__20867,seq20866__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20873 = arguments.length;
var i__8058__auto___20874 = (0);
while(true){
if((i__8058__auto___20874 < len__8057__auto___20873)){
args__8064__auto__.push((arguments[i__8058__auto___20874]));

var G__20875 = (i__8058__auto___20874 + (1));
i__8058__auto___20874 = G__20875;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq20871){
var G__20872 = cljs.core.first.call(null,seq20871);
var seq20871__$1 = cljs.core.next.call(null,seq20871);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__20872,seq20871__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20878 = arguments.length;
var i__8058__auto___20879 = (0);
while(true){
if((i__8058__auto___20879 < len__8057__auto___20878)){
args__8064__auto__.push((arguments[i__8058__auto___20879]));

var G__20880 = (i__8058__auto___20879 + (1));
i__8058__auto___20879 = G__20880;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq20876){
var G__20877 = cljs.core.first.call(null,seq20876);
var seq20876__$1 = cljs.core.next.call(null,seq20876);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__20877,seq20876__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20883 = arguments.length;
var i__8058__auto___20884 = (0);
while(true){
if((i__8058__auto___20884 < len__8057__auto___20883)){
args__8064__auto__.push((arguments[i__8058__auto___20884]));

var G__20885 = (i__8058__auto___20884 + (1));
i__8058__auto___20884 = G__20885;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq20881){
var G__20882 = cljs.core.first.call(null,seq20881);
var seq20881__$1 = cljs.core.next.call(null,seq20881);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__20882,seq20881__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20888 = arguments.length;
var i__8058__auto___20889 = (0);
while(true){
if((i__8058__auto___20889 < len__8057__auto___20888)){
args__8064__auto__.push((arguments[i__8058__auto___20889]));

var G__20890 = (i__8058__auto___20889 + (1));
i__8058__auto___20889 = G__20890;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq20886){
var G__20887 = cljs.core.first.call(null,seq20886);
var seq20886__$1 = cljs.core.next.call(null,seq20886);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__20887,seq20886__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__8064__auto__ = [];
var len__8057__auto___20893 = arguments.length;
var i__8058__auto___20894 = (0);
while(true){
if((i__8058__auto___20894 < len__8057__auto___20893)){
args__8064__auto__.push((arguments[i__8058__auto___20894]));

var G__20895 = (i__8058__auto___20894 + (1));
i__8058__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__20350__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__20350__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__20350__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq20891){
var G__20892 = cljs.core.first.call(null,seq20891);
var seq20891__$1 = cljs.core.next.call(null,seq20891);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__20892,seq20891__$1);
});

