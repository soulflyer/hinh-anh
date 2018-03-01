// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___17820 = arguments.length;
var i__9058__auto___17821 = (0);
while(true){
if((i__9058__auto___17821 < len__9057__auto___17820)){
args__9064__auto__.push((arguments[i__9058__auto___17821]));

var G__17822 = (i__9058__auto___17821 + (1));
i__9058__auto___17821 = G__17822;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__17815){
var vec__17816 = p__17815;
var context = cljs.core.nth.call(null,vec__17816,(0),null);
var footer = cljs.core.nth.call(null,vec__17816,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__7895__auto__ = e.message;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);



group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e17819){var e__$1 = e17819;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq17813){
var G__17814 = cljs.core.first.call(null,seq17813);
var seq17813__$1 = cljs.core.next.call(null,seq17813);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17814,seq17813__$1);
});

