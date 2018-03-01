// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___63407 = arguments.length;
var i__47902__auto___63408 = (0);
while(true){
if((i__47902__auto___63408 < len__47901__auto___63407)){
args__47908__auto__.push((arguments[i__47902__auto___63408]));

var G__63409 = (i__47902__auto___63408 + (1));
i__47902__auto___63408 = G__63409;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__63402){
var vec__63403 = p__63402;
var context = cljs.core.nth.call(null,vec__63403,(0),null);
var footer = cljs.core.nth.call(null,vec__63403,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__46739__auto__ = e.message;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
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
}catch (e63406){var e__$1 = e63406;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq63400){
var G__63401 = cljs.core.first.call(null,seq63400);
var seq63400__$1 = cljs.core.next.call(null,seq63400);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63401,seq63400__$1);
});


//# sourceMappingURL=reporter.js.map
