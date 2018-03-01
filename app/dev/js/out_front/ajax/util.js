// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('ajax.util');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.util.throw_error = (function ajax$util$throw_error(args){

throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
});
ajax.util.get_content_type = (function ajax$util$get_content_type(response){
var or__46739__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return "";
}
});
ajax.util.to_utf8_writer = (function ajax$util$to_utf8_writer(to_str){

return to_str;
});

//# sourceMappingURL=util.js.map
