// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
var args__47908__auto__ = [];
var len__47901__auto___54901 = arguments.length;
var i__47902__auto___54902 = (0);
while(true){
if((i__47902__auto___54902 < len__47901__auto___54901)){
args__47908__auto__.push((arguments[i__47902__auto___54902]));

var G__54903 = (i__47902__auto___54902 + (1));
i__47902__auto___54902 = G__54903;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq54899){
var G__54900 = cljs.core.first.call(null,seq54899);
var seq54899__$1 = cljs.core.next.call(null,seq54899);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__54900,seq54899__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54906 = arguments.length;
var i__47902__auto___54907 = (0);
while(true){
if((i__47902__auto___54907 < len__47901__auto___54906)){
args__47908__auto__.push((arguments[i__47902__auto___54907]));

var G__54908 = (i__47902__auto___54907 + (1));
i__47902__auto___54907 = G__54908;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq54904){
var G__54905 = cljs.core.first.call(null,seq54904);
var seq54904__$1 = cljs.core.next.call(null,seq54904);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__54905,seq54904__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54911 = arguments.length;
var i__47902__auto___54912 = (0);
while(true){
if((i__47902__auto___54912 < len__47901__auto___54911)){
args__47908__auto__.push((arguments[i__47902__auto___54912]));

var G__54913 = (i__47902__auto___54912 + (1));
i__47902__auto___54912 = G__54913;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq54909){
var G__54910 = cljs.core.first.call(null,seq54909);
var seq54909__$1 = cljs.core.next.call(null,seq54909);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__54910,seq54909__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54916 = arguments.length;
var i__47902__auto___54917 = (0);
while(true){
if((i__47902__auto___54917 < len__47901__auto___54916)){
args__47908__auto__.push((arguments[i__47902__auto___54917]));

var G__54918 = (i__47902__auto___54917 + (1));
i__47902__auto___54917 = G__54918;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq54914){
var G__54915 = cljs.core.first.call(null,seq54914);
var seq54914__$1 = cljs.core.next.call(null,seq54914);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__54915,seq54914__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54921 = arguments.length;
var i__47902__auto___54922 = (0);
while(true){
if((i__47902__auto___54922 < len__47901__auto___54921)){
args__47908__auto__.push((arguments[i__47902__auto___54922]));

var G__54923 = (i__47902__auto___54922 + (1));
i__47902__auto___54922 = G__54923;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq54919){
var G__54920 = cljs.core.first.call(null,seq54919);
var seq54919__$1 = cljs.core.next.call(null,seq54919);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__54920,seq54919__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54926 = arguments.length;
var i__47902__auto___54927 = (0);
while(true){
if((i__47902__auto___54927 < len__47901__auto___54926)){
args__47908__auto__.push((arguments[i__47902__auto___54927]));

var G__54928 = (i__47902__auto___54927 + (1));
i__47902__auto___54927 = G__54928;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq54924){
var G__54925 = cljs.core.first.call(null,seq54924);
var seq54924__$1 = cljs.core.next.call(null,seq54924);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__54925,seq54924__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54931 = arguments.length;
var i__47902__auto___54932 = (0);
while(true){
if((i__47902__auto___54932 < len__47901__auto___54931)){
args__47908__auto__.push((arguments[i__47902__auto___54932]));

var G__54933 = (i__47902__auto___54932 + (1));
i__47902__auto___54932 = G__54933;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq54929){
var G__54930 = cljs.core.first.call(null,seq54929);
var seq54929__$1 = cljs.core.next.call(null,seq54929);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__54930,seq54929__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54936 = arguments.length;
var i__47902__auto___54937 = (0);
while(true){
if((i__47902__auto___54937 < len__47901__auto___54936)){
args__47908__auto__.push((arguments[i__47902__auto___54937]));

var G__54938 = (i__47902__auto___54937 + (1));
i__47902__auto___54937 = G__54938;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq54934){
var G__54935 = cljs.core.first.call(null,seq54934);
var seq54934__$1 = cljs.core.next.call(null,seq54934);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__54935,seq54934__$1);
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
var args__47908__auto__ = [];
var len__47901__auto___54941 = arguments.length;
var i__47902__auto___54942 = (0);
while(true){
if((i__47902__auto___54942 < len__47901__auto___54941)){
args__47908__auto__.push((arguments[i__47902__auto___54942]));

var G__54943 = (i__47902__auto___54942 + (1));
i__47902__auto___54942 = G__54943;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__54498__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__54498__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__54498__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq54939){
var G__54940 = cljs.core.first.call(null,seq54939);
var seq54939__$1 = cljs.core.next.call(null,seq54939);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__54940,seq54939__$1);
});


//# sourceMappingURL=core.js.map
