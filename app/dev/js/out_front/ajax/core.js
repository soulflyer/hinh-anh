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
var len__8057__auto___17641 = arguments.length;
var i__8058__auto___17642 = (0);
while(true){
if((i__8058__auto___17642 < len__8057__auto___17641)){
args__8064__auto__.push((arguments[i__8058__auto___17642]));

var G__17643 = (i__8058__auto___17642 + (1));
i__8058__auto___17642 = G__17643;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq17639){
var G__17640 = cljs.core.first.call(null,seq17639);
var seq17639__$1 = cljs.core.next.call(null,seq17639);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__17640,seq17639__$1);
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
var len__8057__auto___17646 = arguments.length;
var i__8058__auto___17647 = (0);
while(true){
if((i__8058__auto___17647 < len__8057__auto___17646)){
args__8064__auto__.push((arguments[i__8058__auto___17647]));

var G__17648 = (i__8058__auto___17647 + (1));
i__8058__auto___17647 = G__17648;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq17644){
var G__17645 = cljs.core.first.call(null,seq17644);
var seq17644__$1 = cljs.core.next.call(null,seq17644);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__17645,seq17644__$1);
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
var len__8057__auto___17651 = arguments.length;
var i__8058__auto___17652 = (0);
while(true){
if((i__8058__auto___17652 < len__8057__auto___17651)){
args__8064__auto__.push((arguments[i__8058__auto___17652]));

var G__17653 = (i__8058__auto___17652 + (1));
i__8058__auto___17652 = G__17653;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq17649){
var G__17650 = cljs.core.first.call(null,seq17649);
var seq17649__$1 = cljs.core.next.call(null,seq17649);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__17650,seq17649__$1);
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
var len__8057__auto___17656 = arguments.length;
var i__8058__auto___17657 = (0);
while(true){
if((i__8058__auto___17657 < len__8057__auto___17656)){
args__8064__auto__.push((arguments[i__8058__auto___17657]));

var G__17658 = (i__8058__auto___17657 + (1));
i__8058__auto___17657 = G__17658;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq17654){
var G__17655 = cljs.core.first.call(null,seq17654);
var seq17654__$1 = cljs.core.next.call(null,seq17654);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__17655,seq17654__$1);
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
var len__8057__auto___17661 = arguments.length;
var i__8058__auto___17662 = (0);
while(true){
if((i__8058__auto___17662 < len__8057__auto___17661)){
args__8064__auto__.push((arguments[i__8058__auto___17662]));

var G__17663 = (i__8058__auto___17662 + (1));
i__8058__auto___17662 = G__17663;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq17659){
var G__17660 = cljs.core.first.call(null,seq17659);
var seq17659__$1 = cljs.core.next.call(null,seq17659);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__17660,seq17659__$1);
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
var len__8057__auto___17666 = arguments.length;
var i__8058__auto___17667 = (0);
while(true){
if((i__8058__auto___17667 < len__8057__auto___17666)){
args__8064__auto__.push((arguments[i__8058__auto___17667]));

var G__17668 = (i__8058__auto___17667 + (1));
i__8058__auto___17667 = G__17668;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq17664){
var G__17665 = cljs.core.first.call(null,seq17664);
var seq17664__$1 = cljs.core.next.call(null,seq17664);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__17665,seq17664__$1);
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
var len__8057__auto___17671 = arguments.length;
var i__8058__auto___17672 = (0);
while(true){
if((i__8058__auto___17672 < len__8057__auto___17671)){
args__8064__auto__.push((arguments[i__8058__auto___17672]));

var G__17673 = (i__8058__auto___17672 + (1));
i__8058__auto___17672 = G__17673;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq17669){
var G__17670 = cljs.core.first.call(null,seq17669);
var seq17669__$1 = cljs.core.next.call(null,seq17669);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__17670,seq17669__$1);
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
var len__8057__auto___17676 = arguments.length;
var i__8058__auto___17677 = (0);
while(true){
if((i__8058__auto___17677 < len__8057__auto___17676)){
args__8064__auto__.push((arguments[i__8058__auto___17677]));

var G__17678 = (i__8058__auto___17677 + (1));
i__8058__auto___17677 = G__17678;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq17674){
var G__17675 = cljs.core.first.call(null,seq17674);
var seq17674__$1 = cljs.core.next.call(null,seq17674);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__17675,seq17674__$1);
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
var len__8057__auto___17681 = arguments.length;
var i__8058__auto___17682 = (0);
while(true){
if((i__8058__auto___17682 < len__8057__auto___17681)){
args__8064__auto__.push((arguments[i__8058__auto___17682]));

var G__17683 = (i__8058__auto___17682 + (1));
i__8058__auto___17682 = G__17683;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17147__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__17147__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17147__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq17679){
var G__17680 = cljs.core.first.call(null,seq17679);
var seq17679__$1 = cljs.core.next.call(null,seq17679);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__17680,seq17679__$1);
});


//# sourceMappingURL=core.js.map