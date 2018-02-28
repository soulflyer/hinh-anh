// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20521,handler){
var map__20522 = p__20521;
var map__20522__$1 = ((((!((map__20522 == null)))?((((map__20522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20522):map__20522);
var uri = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20522__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20522,map__20522__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20520_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20520_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20522,map__20522__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___20534 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___20534)){
var response_type_20535 = temp__4657__auto___20534;
this$__$1.responseType = cljs.core.name.call(null,response_type_20535);
} else {
}

var seq__20524_20536 = cljs.core.seq.call(null,headers);
var chunk__20525_20537 = null;
var count__20526_20538 = (0);
var i__20527_20539 = (0);
while(true){
if((i__20527_20539 < count__20526_20538)){
var vec__20528_20540 = cljs.core._nth.call(null,chunk__20525_20537,i__20527_20539);
var k_20541 = cljs.core.nth.call(null,vec__20528_20540,(0),null);
var v_20542 = cljs.core.nth.call(null,vec__20528_20540,(1),null);
this$__$1.setRequestHeader(k_20541,v_20542);

var G__20543 = seq__20524_20536;
var G__20544 = chunk__20525_20537;
var G__20545 = count__20526_20538;
var G__20546 = (i__20527_20539 + (1));
seq__20524_20536 = G__20543;
chunk__20525_20537 = G__20544;
count__20526_20538 = G__20545;
i__20527_20539 = G__20546;
continue;
} else {
var temp__4657__auto___20547 = cljs.core.seq.call(null,seq__20524_20536);
if(temp__4657__auto___20547){
var seq__20524_20548__$1 = temp__4657__auto___20547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20524_20548__$1)){
var c__7767__auto___20549 = cljs.core.chunk_first.call(null,seq__20524_20548__$1);
var G__20550 = cljs.core.chunk_rest.call(null,seq__20524_20548__$1);
var G__20551 = c__7767__auto___20549;
var G__20552 = cljs.core.count.call(null,c__7767__auto___20549);
var G__20553 = (0);
seq__20524_20536 = G__20550;
chunk__20525_20537 = G__20551;
count__20526_20538 = G__20552;
i__20527_20539 = G__20553;
continue;
} else {
var vec__20531_20554 = cljs.core.first.call(null,seq__20524_20548__$1);
var k_20555 = cljs.core.nth.call(null,vec__20531_20554,(0),null);
var v_20556 = cljs.core.nth.call(null,vec__20531_20554,(1),null);
this$__$1.setRequestHeader(k_20555,v_20556);

var G__20557 = cljs.core.next.call(null,seq__20524_20548__$1);
var G__20558 = null;
var G__20559 = (0);
var G__20560 = (0);
seq__20524_20536 = G__20557;
chunk__20525_20537 = G__20558;
count__20526_20538 = G__20559;
i__20527_20539 = G__20560;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6948__auto__ = body;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
