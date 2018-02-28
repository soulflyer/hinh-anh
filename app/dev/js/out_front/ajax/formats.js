// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('ajax.formats');
goog.require('cljs.core');
goog.require('ajax.interceptors');
goog.require('ajax.util');
goog.require('ajax.protocols');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var args17263 = [];
var len__8057__auto___17266 = arguments.length;
var i__8058__auto___17267 = (0);
while(true){
if((i__8058__auto___17267 < len__8057__auto___17266)){
args17263.push((arguments[i__8058__auto___17267]));

var G__17268 = (i__8058__auto___17267 + (1));
i__8058__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var G__17265 = args17263.length;
switch (G__17265) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17263.length)].join('')));

}
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.call(null);
});

ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
ajax.formats.get_format = (function ajax$formats$get_format(var_args){
var args17270 = [];
var len__8057__auto___17273 = arguments.length;
var i__8058__auto___17274 = (0);
while(true){
if((i__8058__auto___17274 < len__8057__auto___17273)){
args17270.push((arguments[i__8058__auto___17274]));

var G__17275 = (i__8058__auto___17274 + (1));
i__8058__auto___17274 = G__17275;
continue;
} else {
}
break;
}

var G__17272 = args17270.length;
switch (G__17272) {
case 2:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17270.length)].join('')));

}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){

if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.formats.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){

if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.formats.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.formats.get_format.cljs$lang$maxFixedArity = 2;

ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(var_args){
var args17277 = [];
var len__8057__auto___17280 = arguments.length;
var i__8058__auto___17281 = (0);
while(true){
if((i__8058__auto___17281 < len__8057__auto___17280)){
args17277.push((arguments[i__8058__auto___17281]));

var G__17282 = (i__8058__auto___17281 + (1));
i__8058__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var G__17279 = args17277.length;
switch (G__17279) {
case 2:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17277.length)].join('')));

}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.formats.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(var_args){
var args17284 = [];
var len__8057__auto___17287 = arguments.length;
var i__8058__auto___17288 = (0);
while(true){
if((i__8058__auto___17288 < len__8057__auto___17287)){
args17284.push((arguments[i__8058__auto___17288]));

var G__17289 = (i__8058__auto___17288 + (1));
i__8058__auto___17288 = G__17289;
continue;
} else {
}
break;
}

var G__17286 = args17284.length;
switch (G__17286) {
case 2:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17284.length)].join('')));

}
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.formats.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(var_args){
var args17291 = [];
var len__8057__auto___17294 = arguments.length;
var i__8058__auto___17295 = (0);
while(true){
if((i__8058__auto___17295 < len__8057__auto___17294)){
args17291.push((arguments[i__8058__auto___17295]));

var G__17296 = (i__8058__auto___17295 + (1));
i__8058__auto___17295 = G__17296;
continue;
} else {
}
break;
}

var G__17293 = args17291.length;
switch (G__17293) {
case 3:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17291.length)].join('')));

}
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__17298){
var map__17301 = p__17298;
var map__17301__$1 = ((((!((map__17301 == null)))?((((map__17301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17301):map__17301);
var request = map__17301__$1;
var response_format = cljs.core.get.call(null,map__17301__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.formats.detect_content_type.call(null,ajax.util.get_content_type.call(null,response),request);
return ajax.formats.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(var_args){
var args17303 = [];
var len__8057__auto___17306 = arguments.length;
var i__8058__auto___17307 = (0);
while(true){
if((i__8058__auto___17307 < len__8057__auto___17306)){
args17303.push((arguments[i__8058__auto___17307]));

var G__17308 = (i__8058__auto___17307 + (1));
i__8058__auto___17307 = G__17308;
continue;
} else {
}
break;
}

var G__17305 = args17303.length;
switch (G__17305) {
case 2:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17303.length)].join('')));

}
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.formats.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.formats.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.formats.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.formats.accept_header = (function ajax$formats$accept_header(p__17310){
var map__17313 = p__17310;
var map__17313__$1 = ((((!((map__17313 == null)))?((((map__17313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17313):map__17313);
var request = map__17313__$1;
var response_format = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.formats.get_accept_entries.call(null,request),response_format);
} else {
return ajax.formats.get_accept_entries.call(null,request,response_format);
}
});
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){

var accept = ajax.formats.accept_header.call(null,opts);
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.formats.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(from "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

//# sourceMappingURL=formats.js.map