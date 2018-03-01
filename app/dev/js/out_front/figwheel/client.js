// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.11";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__58567 = arguments.length;
switch (G__58567) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__47908__auto__ = [];
var len__47901__auto___58570 = arguments.length;
var i__47902__auto___58571 = (0);
while(true){
if((i__47902__auto___58571 < len__47901__auto___58570)){
args__47908__auto__.push((arguments[i__47902__auto___58571]));

var G__58572 = (i__47902__auto___58571 + (1));
i__47902__auto___58571 = G__58572;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq58569){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58569));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__47908__auto__ = [];
var len__47901__auto___58574 = arguments.length;
var i__47902__auto___58575 = (0);
while(true){
if((i__47902__auto___58575 < len__47901__auto___58574)){
args__47908__auto__.push((arguments[i__47902__auto___58575]));

var G__58576 = (i__47902__auto___58575 + (1));
i__47902__auto___58575 = G__58576;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq58573){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58573));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__58577){
var map__58578 = p__58577;
var map__58578__$1 = ((((!((map__58578 == null)))?((((map__58578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58578):map__58578);
var message = cljs.core.get.call(null,map__58578__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__58578__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__46739__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__46727__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__46727__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__46727__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__50803__auto___58657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___58657,ch){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___58657,ch){
return (function (state_58629){
var state_val_58630 = (state_58629[(1)]);
if((state_val_58630 === (7))){
var inst_58625 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58631_58658 = state_58629__$1;
(statearr_58631_58658[(2)] = inst_58625);

(statearr_58631_58658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (1))){
var state_58629__$1 = state_58629;
var statearr_58632_58659 = state_58629__$1;
(statearr_58632_58659[(2)] = null);

(statearr_58632_58659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (4))){
var inst_58582 = (state_58629[(7)]);
var inst_58582__$1 = (state_58629[(2)]);
var state_58629__$1 = (function (){var statearr_58633 = state_58629;
(statearr_58633[(7)] = inst_58582__$1);

return statearr_58633;
})();
if(cljs.core.truth_(inst_58582__$1)){
var statearr_58634_58660 = state_58629__$1;
(statearr_58634_58660[(1)] = (5));

} else {
var statearr_58635_58661 = state_58629__$1;
(statearr_58635_58661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (15))){
var inst_58589 = (state_58629[(8)]);
var inst_58604 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_58589);
var inst_58605 = cljs.core.first.call(null,inst_58604);
var inst_58606 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_58605);
var inst_58607 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58606)].join('');
var inst_58608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_58607);
var state_58629__$1 = state_58629;
var statearr_58636_58662 = state_58629__$1;
(statearr_58636_58662[(2)] = inst_58608);

(statearr_58636_58662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (13))){
var inst_58613 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58637_58663 = state_58629__$1;
(statearr_58637_58663[(2)] = inst_58613);

(statearr_58637_58663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (6))){
var state_58629__$1 = state_58629;
var statearr_58638_58664 = state_58629__$1;
(statearr_58638_58664[(2)] = null);

(statearr_58638_58664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (17))){
var inst_58611 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58639_58665 = state_58629__$1;
(statearr_58639_58665[(2)] = inst_58611);

(statearr_58639_58665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (3))){
var inst_58627 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58629__$1,inst_58627);
} else {
if((state_val_58630 === (12))){
var inst_58588 = (state_58629[(9)]);
var inst_58602 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_58588,opts);
var state_58629__$1 = state_58629;
if(cljs.core.truth_(inst_58602)){
var statearr_58640_58666 = state_58629__$1;
(statearr_58640_58666[(1)] = (15));

} else {
var statearr_58641_58667 = state_58629__$1;
(statearr_58641_58667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (2))){
var state_58629__$1 = state_58629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58629__$1,(4),ch);
} else {
if((state_val_58630 === (11))){
var inst_58589 = (state_58629[(8)]);
var inst_58594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58595 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_58589);
var inst_58596 = cljs.core.async.timeout.call(null,(1000));
var inst_58597 = [inst_58595,inst_58596];
var inst_58598 = (new cljs.core.PersistentVector(null,2,(5),inst_58594,inst_58597,null));
var state_58629__$1 = state_58629;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58629__$1,(14),inst_58598);
} else {
if((state_val_58630 === (9))){
var inst_58589 = (state_58629[(8)]);
var inst_58615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_58616 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_58589);
var inst_58617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58616);
var inst_58618 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58617)].join('');
var inst_58619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_58618);
var state_58629__$1 = (function (){var statearr_58642 = state_58629;
(statearr_58642[(10)] = inst_58615);

return statearr_58642;
})();
var statearr_58643_58668 = state_58629__$1;
(statearr_58643_58668[(2)] = inst_58619);

(statearr_58643_58668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (5))){
var inst_58582 = (state_58629[(7)]);
var inst_58584 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_58585 = (new cljs.core.PersistentArrayMap(null,2,inst_58584,null));
var inst_58586 = (new cljs.core.PersistentHashSet(null,inst_58585,null));
var inst_58587 = figwheel.client.focus_msgs.call(null,inst_58586,inst_58582);
var inst_58588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_58587);
var inst_58589 = cljs.core.first.call(null,inst_58587);
var inst_58590 = figwheel.client.autoload_QMARK_.call(null);
var state_58629__$1 = (function (){var statearr_58644 = state_58629;
(statearr_58644[(8)] = inst_58589);

(statearr_58644[(9)] = inst_58588);

return statearr_58644;
})();
if(cljs.core.truth_(inst_58590)){
var statearr_58645_58669 = state_58629__$1;
(statearr_58645_58669[(1)] = (8));

} else {
var statearr_58646_58670 = state_58629__$1;
(statearr_58646_58670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (14))){
var inst_58600 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58647_58671 = state_58629__$1;
(statearr_58647_58671[(2)] = inst_58600);

(statearr_58647_58671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (16))){
var state_58629__$1 = state_58629;
var statearr_58648_58672 = state_58629__$1;
(statearr_58648_58672[(2)] = null);

(statearr_58648_58672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (10))){
var inst_58621 = (state_58629[(2)]);
var state_58629__$1 = (function (){var statearr_58649 = state_58629;
(statearr_58649[(11)] = inst_58621);

return statearr_58649;
})();
var statearr_58650_58673 = state_58629__$1;
(statearr_58650_58673[(2)] = null);

(statearr_58650_58673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (8))){
var inst_58588 = (state_58629[(9)]);
var inst_58592 = figwheel.client.reload_file_state_QMARK_.call(null,inst_58588,opts);
var state_58629__$1 = state_58629;
if(cljs.core.truth_(inst_58592)){
var statearr_58651_58674 = state_58629__$1;
(statearr_58651_58674[(1)] = (11));

} else {
var statearr_58652_58675 = state_58629__$1;
(statearr_58652_58675[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50803__auto___58657,ch))
;
return ((function (switch__50715__auto__,c__50803__auto___58657,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____0 = (function (){
var statearr_58653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58653[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__);

(statearr_58653[(1)] = (1));

return statearr_58653;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____1 = (function (state_58629){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_58629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e58654){if((e58654 instanceof Object)){
var ex__50719__auto__ = e58654;
var statearr_58655_58676 = state_58629;
(statearr_58655_58676[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58677 = state_58629;
state_58629 = G__58677;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__ = function(state_58629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____1.call(this,state_58629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50716__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___58657,ch))
})();
var state__50805__auto__ = (function (){var statearr_58656 = f__50804__auto__.call(null);
(statearr_58656[(6)] = c__50803__auto___58657);

return statearr_58656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___58657,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__58678_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__58678_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_58680 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_58680){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e58679){if((e58679 instanceof Error)){
var e = e58679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_58680], null));
} else {
var e = e58679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_58680))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__58681){
var map__58682 = p__58681;
var map__58682__$1 = ((((!((map__58682 == null)))?((((map__58682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58682):map__58682);
var opts = map__58682__$1;
var build_id = cljs.core.get.call(null,map__58682__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__58682,map__58682__$1,opts,build_id){
return (function (p__58684){
var vec__58685 = p__58684;
var seq__58686 = cljs.core.seq.call(null,vec__58685);
var first__58687 = cljs.core.first.call(null,seq__58686);
var seq__58686__$1 = cljs.core.next.call(null,seq__58686);
var map__58688 = first__58687;
var map__58688__$1 = ((((!((map__58688 == null)))?((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58688):map__58688);
var msg = map__58688__$1;
var msg_name = cljs.core.get.call(null,map__58688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58686__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__58685,seq__58686,first__58687,seq__58686__$1,map__58688,map__58688__$1,msg,msg_name,_,map__58682,map__58682__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__58685,seq__58686,first__58687,seq__58686__$1,map__58688,map__58688__$1,msg,msg_name,_,map__58682,map__58682__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__58682,map__58682__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__58690){
var vec__58691 = p__58690;
var seq__58692 = cljs.core.seq.call(null,vec__58691);
var first__58693 = cljs.core.first.call(null,seq__58692);
var seq__58692__$1 = cljs.core.next.call(null,seq__58692);
var map__58694 = first__58693;
var map__58694__$1 = ((((!((map__58694 == null)))?((((map__58694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58694):map__58694);
var msg = map__58694__$1;
var msg_name = cljs.core.get.call(null,map__58694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58692__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__58696){
var map__58697 = p__58696;
var map__58697__$1 = ((((!((map__58697 == null)))?((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58697):map__58697);
var on_compile_warning = cljs.core.get.call(null,map__58697__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__58697__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__58697,map__58697__$1,on_compile_warning,on_compile_fail){
return (function (p__58699){
var vec__58700 = p__58699;
var seq__58701 = cljs.core.seq.call(null,vec__58700);
var first__58702 = cljs.core.first.call(null,seq__58701);
var seq__58701__$1 = cljs.core.next.call(null,seq__58701);
var map__58703 = first__58702;
var map__58703__$1 = ((((!((map__58703 == null)))?((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58703):map__58703);
var msg = map__58703__$1;
var msg_name = cljs.core.get.call(null,map__58703__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58701__$1;
var pred__58705 = cljs.core._EQ_;
var expr__58706 = msg_name;
if(cljs.core.truth_(pred__58705.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__58706))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__58705.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__58706))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__58697,map__58697__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__,msg_hist,msg_names,msg){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__,msg_hist,msg_names,msg){
return (function (state_58795){
var state_val_58796 = (state_58795[(1)]);
if((state_val_58796 === (7))){
var inst_58715 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58715)){
var statearr_58797_58844 = state_58795__$1;
(statearr_58797_58844[(1)] = (8));

} else {
var statearr_58798_58845 = state_58795__$1;
(statearr_58798_58845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (20))){
var inst_58789 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58799_58846 = state_58795__$1;
(statearr_58799_58846[(2)] = inst_58789);

(statearr_58799_58846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (27))){
var inst_58785 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58800_58847 = state_58795__$1;
(statearr_58800_58847[(2)] = inst_58785);

(statearr_58800_58847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (1))){
var inst_58708 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58708)){
var statearr_58801_58848 = state_58795__$1;
(statearr_58801_58848[(1)] = (2));

} else {
var statearr_58802_58849 = state_58795__$1;
(statearr_58802_58849[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (24))){
var inst_58787 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58803_58850 = state_58795__$1;
(statearr_58803_58850[(2)] = inst_58787);

(statearr_58803_58850[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (4))){
var inst_58793 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58795__$1,inst_58793);
} else {
if((state_val_58796 === (15))){
var inst_58791 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58804_58851 = state_58795__$1;
(statearr_58804_58851[(2)] = inst_58791);

(statearr_58804_58851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (21))){
var inst_58744 = (state_58795[(2)]);
var inst_58745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58745);
var state_58795__$1 = (function (){var statearr_58805 = state_58795;
(statearr_58805[(7)] = inst_58744);

return statearr_58805;
})();
var statearr_58806_58852 = state_58795__$1;
(statearr_58806_58852[(2)] = inst_58746);

(statearr_58806_58852[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (31))){
var inst_58774 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58774)){
var statearr_58807_58853 = state_58795__$1;
(statearr_58807_58853[(1)] = (34));

} else {
var statearr_58808_58854 = state_58795__$1;
(statearr_58808_58854[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (32))){
var inst_58783 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58809_58855 = state_58795__$1;
(statearr_58809_58855[(2)] = inst_58783);

(statearr_58809_58855[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (33))){
var inst_58770 = (state_58795[(2)]);
var inst_58771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58772 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58771);
var state_58795__$1 = (function (){var statearr_58810 = state_58795;
(statearr_58810[(8)] = inst_58770);

return statearr_58810;
})();
var statearr_58811_58856 = state_58795__$1;
(statearr_58811_58856[(2)] = inst_58772);

(statearr_58811_58856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (13))){
var inst_58729 = figwheel.client.heads_up.clear.call(null);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(16),inst_58729);
} else {
if((state_val_58796 === (22))){
var inst_58750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58751 = figwheel.client.heads_up.append_warning_message.call(null,inst_58750);
var state_58795__$1 = state_58795;
var statearr_58812_58857 = state_58795__$1;
(statearr_58812_58857[(2)] = inst_58751);

(statearr_58812_58857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (36))){
var inst_58781 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58813_58858 = state_58795__$1;
(statearr_58813_58858[(2)] = inst_58781);

(statearr_58813_58858[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (29))){
var inst_58761 = (state_58795[(2)]);
var inst_58762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58762);
var state_58795__$1 = (function (){var statearr_58814 = state_58795;
(statearr_58814[(9)] = inst_58761);

return statearr_58814;
})();
var statearr_58815_58859 = state_58795__$1;
(statearr_58815_58859[(2)] = inst_58763);

(statearr_58815_58859[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (6))){
var inst_58710 = (state_58795[(10)]);
var state_58795__$1 = state_58795;
var statearr_58816_58860 = state_58795__$1;
(statearr_58816_58860[(2)] = inst_58710);

(statearr_58816_58860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (28))){
var inst_58757 = (state_58795[(2)]);
var inst_58758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58759 = figwheel.client.heads_up.display_warning.call(null,inst_58758);
var state_58795__$1 = (function (){var statearr_58817 = state_58795;
(statearr_58817[(11)] = inst_58757);

return statearr_58817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(29),inst_58759);
} else {
if((state_val_58796 === (25))){
var inst_58755 = figwheel.client.heads_up.clear.call(null);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(28),inst_58755);
} else {
if((state_val_58796 === (34))){
var inst_58776 = figwheel.client.heads_up.flash_loaded.call(null);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(37),inst_58776);
} else {
if((state_val_58796 === (17))){
var inst_58735 = (state_58795[(2)]);
var inst_58736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58736);
var state_58795__$1 = (function (){var statearr_58818 = state_58795;
(statearr_58818[(12)] = inst_58735);

return statearr_58818;
})();
var statearr_58819_58861 = state_58795__$1;
(statearr_58819_58861[(2)] = inst_58737);

(statearr_58819_58861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (3))){
var inst_58727 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58727)){
var statearr_58820_58862 = state_58795__$1;
(statearr_58820_58862[(1)] = (13));

} else {
var statearr_58821_58863 = state_58795__$1;
(statearr_58821_58863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (12))){
var inst_58723 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58822_58864 = state_58795__$1;
(statearr_58822_58864[(2)] = inst_58723);

(statearr_58822_58864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (2))){
var inst_58710 = (state_58795[(10)]);
var inst_58710__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_58795__$1 = (function (){var statearr_58823 = state_58795;
(statearr_58823[(10)] = inst_58710__$1);

return statearr_58823;
})();
if(cljs.core.truth_(inst_58710__$1)){
var statearr_58824_58865 = state_58795__$1;
(statearr_58824_58865[(1)] = (5));

} else {
var statearr_58825_58866 = state_58795__$1;
(statearr_58825_58866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (23))){
var inst_58753 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58753)){
var statearr_58826_58867 = state_58795__$1;
(statearr_58826_58867[(1)] = (25));

} else {
var statearr_58827_58868 = state_58795__$1;
(statearr_58827_58868[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (35))){
var state_58795__$1 = state_58795;
var statearr_58828_58869 = state_58795__$1;
(statearr_58828_58869[(2)] = null);

(statearr_58828_58869[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (19))){
var inst_58748 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58748)){
var statearr_58829_58870 = state_58795__$1;
(statearr_58829_58870[(1)] = (22));

} else {
var statearr_58830_58871 = state_58795__$1;
(statearr_58830_58871[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (11))){
var inst_58719 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58831_58872 = state_58795__$1;
(statearr_58831_58872[(2)] = inst_58719);

(statearr_58831_58872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (9))){
var inst_58721 = figwheel.client.heads_up.clear.call(null);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(12),inst_58721);
} else {
if((state_val_58796 === (5))){
var inst_58712 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_58795__$1 = state_58795;
var statearr_58832_58873 = state_58795__$1;
(statearr_58832_58873[(2)] = inst_58712);

(statearr_58832_58873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (14))){
var inst_58739 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58739)){
var statearr_58833_58874 = state_58795__$1;
(statearr_58833_58874[(1)] = (18));

} else {
var statearr_58834_58875 = state_58795__$1;
(statearr_58834_58875[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (26))){
var inst_58765 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_58795__$1 = state_58795;
if(cljs.core.truth_(inst_58765)){
var statearr_58835_58876 = state_58795__$1;
(statearr_58835_58876[(1)] = (30));

} else {
var statearr_58836_58877 = state_58795__$1;
(statearr_58836_58877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (16))){
var inst_58731 = (state_58795[(2)]);
var inst_58732 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58733 = figwheel.client.heads_up.display_exception.call(null,inst_58732);
var state_58795__$1 = (function (){var statearr_58837 = state_58795;
(statearr_58837[(13)] = inst_58731);

return statearr_58837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(17),inst_58733);
} else {
if((state_val_58796 === (30))){
var inst_58767 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58768 = figwheel.client.heads_up.display_warning.call(null,inst_58767);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(33),inst_58768);
} else {
if((state_val_58796 === (10))){
var inst_58725 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58838_58878 = state_58795__$1;
(statearr_58838_58878[(2)] = inst_58725);

(statearr_58838_58878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (18))){
var inst_58741 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58742 = figwheel.client.heads_up.display_exception.call(null,inst_58741);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(21),inst_58742);
} else {
if((state_val_58796 === (37))){
var inst_58778 = (state_58795[(2)]);
var state_58795__$1 = state_58795;
var statearr_58839_58879 = state_58795__$1;
(statearr_58839_58879[(2)] = inst_58778);

(statearr_58839_58879[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58796 === (8))){
var inst_58717 = figwheel.client.heads_up.flash_loaded.call(null);
var state_58795__$1 = state_58795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58795__$1,(11),inst_58717);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50803__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50715__auto__,c__50803__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____0 = (function (){
var statearr_58840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58840[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__);

(statearr_58840[(1)] = (1));

return statearr_58840;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____1 = (function (state_58795){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_58795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e58841){if((e58841 instanceof Object)){
var ex__50719__auto__ = e58841;
var statearr_58842_58880 = state_58795;
(statearr_58842_58880[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58881 = state_58795;
state_58795 = G__58881;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__ = function(state_58795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____1.call(this,state_58795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__,msg_hist,msg_names,msg))
})();
var state__50805__auto__ = (function (){var statearr_58843 = f__50804__auto__.call(null);
(statearr_58843[(6)] = c__50803__auto__);

return statearr_58843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__,msg_hist,msg_names,msg))
);

return c__50803__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__50803__auto___58910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___58910,ch){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___58910,ch){
return (function (state_58896){
var state_val_58897 = (state_58896[(1)]);
if((state_val_58897 === (1))){
var state_58896__$1 = state_58896;
var statearr_58898_58911 = state_58896__$1;
(statearr_58898_58911[(2)] = null);

(statearr_58898_58911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58897 === (2))){
var state_58896__$1 = state_58896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58896__$1,(4),ch);
} else {
if((state_val_58897 === (3))){
var inst_58894 = (state_58896[(2)]);
var state_58896__$1 = state_58896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58896__$1,inst_58894);
} else {
if((state_val_58897 === (4))){
var inst_58884 = (state_58896[(7)]);
var inst_58884__$1 = (state_58896[(2)]);
var state_58896__$1 = (function (){var statearr_58899 = state_58896;
(statearr_58899[(7)] = inst_58884__$1);

return statearr_58899;
})();
if(cljs.core.truth_(inst_58884__$1)){
var statearr_58900_58912 = state_58896__$1;
(statearr_58900_58912[(1)] = (5));

} else {
var statearr_58901_58913 = state_58896__$1;
(statearr_58901_58913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58897 === (5))){
var inst_58884 = (state_58896[(7)]);
var inst_58886 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_58884);
var state_58896__$1 = state_58896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58896__$1,(8),inst_58886);
} else {
if((state_val_58897 === (6))){
var state_58896__$1 = state_58896;
var statearr_58902_58914 = state_58896__$1;
(statearr_58902_58914[(2)] = null);

(statearr_58902_58914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58897 === (7))){
var inst_58892 = (state_58896[(2)]);
var state_58896__$1 = state_58896;
var statearr_58903_58915 = state_58896__$1;
(statearr_58903_58915[(2)] = inst_58892);

(statearr_58903_58915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58897 === (8))){
var inst_58888 = (state_58896[(2)]);
var state_58896__$1 = (function (){var statearr_58904 = state_58896;
(statearr_58904[(8)] = inst_58888);

return statearr_58904;
})();
var statearr_58905_58916 = state_58896__$1;
(statearr_58905_58916[(2)] = null);

(statearr_58905_58916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__50803__auto___58910,ch))
;
return ((function (switch__50715__auto__,c__50803__auto___58910,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50716__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50716__auto____0 = (function (){
var statearr_58906 = [null,null,null,null,null,null,null,null,null];
(statearr_58906[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50716__auto__);

(statearr_58906[(1)] = (1));

return statearr_58906;
});
var figwheel$client$heads_up_plugin_$_state_machine__50716__auto____1 = (function (state_58896){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_58896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e58907){if((e58907 instanceof Object)){
var ex__50719__auto__ = e58907;
var statearr_58908_58917 = state_58896;
(statearr_58908_58917[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58918 = state_58896;
state_58896 = G__58918;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50716__auto__ = function(state_58896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50716__auto____1.call(this,state_58896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50716__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50716__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___58910,ch))
})();
var state__50805__auto__ = (function (){var statearr_58909 = f__50804__auto__.call(null);
(statearr_58909[(6)] = c__50803__auto___58910);

return statearr_58909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___58910,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_58924){
var state_val_58925 = (state_58924[(1)]);
if((state_val_58925 === (1))){
var inst_58919 = cljs.core.async.timeout.call(null,(3000));
var state_58924__$1 = state_58924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58924__$1,(2),inst_58919);
} else {
if((state_val_58925 === (2))){
var inst_58921 = (state_58924[(2)]);
var inst_58922 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_58924__$1 = (function (){var statearr_58926 = state_58924;
(statearr_58926[(7)] = inst_58921);

return statearr_58926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58924__$1,inst_58922);
} else {
return null;
}
}
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____0 = (function (){
var statearr_58927 = [null,null,null,null,null,null,null,null];
(statearr_58927[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__);

(statearr_58927[(1)] = (1));

return statearr_58927;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____1 = (function (state_58924){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_58924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e58928){if((e58928 instanceof Object)){
var ex__50719__auto__ = e58928;
var statearr_58929_58931 = state_58924;
(statearr_58929_58931[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58932 = state_58924;
state_58924 = G__58932;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__ = function(state_58924){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____1.call(this,state_58924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50716__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_58930 = f__50804__auto__.call(null);
(statearr_58930[(6)] = c__50803__auto__);

return statearr_58930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__,figwheel_version,temp__4657__auto__){
return (function (state_58939){
var state_val_58940 = (state_58939[(1)]);
if((state_val_58940 === (1))){
var inst_58933 = cljs.core.async.timeout.call(null,(2000));
var state_58939__$1 = state_58939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58939__$1,(2),inst_58933);
} else {
if((state_val_58940 === (2))){
var inst_58935 = (state_58939[(2)]);
var inst_58936 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_58937 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_58936);
var state_58939__$1 = (function (){var statearr_58941 = state_58939;
(statearr_58941[(7)] = inst_58935);

return statearr_58941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58939__$1,inst_58937);
} else {
return null;
}
}
});})(c__50803__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____0 = (function (){
var statearr_58942 = [null,null,null,null,null,null,null,null];
(statearr_58942[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__);

(statearr_58942[(1)] = (1));

return statearr_58942;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____1 = (function (state_58939){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_58939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e58943){if((e58943 instanceof Object)){
var ex__50719__auto__ = e58943;
var statearr_58944_58946 = state_58939;
(statearr_58944_58946[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58947 = state_58939;
state_58939 = G__58947;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__ = function(state_58939){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____1.call(this,state_58939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__,figwheel_version,temp__4657__auto__))
})();
var state__50805__auto__ = (function (){var statearr_58945 = f__50804__auto__.call(null);
(statearr_58945[(6)] = c__50803__auto__);

return statearr_58945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__,figwheel_version,temp__4657__auto__))
);

return c__50803__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__58948){
var map__58949 = p__58948;
var map__58949__$1 = ((((!((map__58949 == null)))?((((map__58949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58949):map__58949);
var file = cljs.core.get.call(null,map__58949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__58949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__58949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__58951 = "";
var G__58951__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58951),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__58951);
var G__58951__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58951__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__58951__$1);
if(cljs.core.truth_((function (){var and__46727__auto__ = line;
if(cljs.core.truth_(and__46727__auto__)){
return column;
} else {
return and__46727__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58951__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__58951__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__58952){
var map__58953 = p__58952;
var map__58953__$1 = ((((!((map__58953 == null)))?((((map__58953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58953):map__58953);
var ed = map__58953__$1;
var formatted_exception = cljs.core.get.call(null,map__58953__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__58953__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__58953__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__58955_58959 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__58956_58960 = null;
var count__58957_58961 = (0);
var i__58958_58962 = (0);
while(true){
if((i__58958_58962 < count__58957_58961)){
var msg_58963 = cljs.core._nth.call(null,chunk__58956_58960,i__58958_58962);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_58963);


var G__58964 = seq__58955_58959;
var G__58965 = chunk__58956_58960;
var G__58966 = count__58957_58961;
var G__58967 = (i__58958_58962 + (1));
seq__58955_58959 = G__58964;
chunk__58956_58960 = G__58965;
count__58957_58961 = G__58966;
i__58958_58962 = G__58967;
continue;
} else {
var temp__4657__auto___58968 = cljs.core.seq.call(null,seq__58955_58959);
if(temp__4657__auto___58968){
var seq__58955_58969__$1 = temp__4657__auto___58968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58955_58969__$1)){
var c__47578__auto___58970 = cljs.core.chunk_first.call(null,seq__58955_58969__$1);
var G__58971 = cljs.core.chunk_rest.call(null,seq__58955_58969__$1);
var G__58972 = c__47578__auto___58970;
var G__58973 = cljs.core.count.call(null,c__47578__auto___58970);
var G__58974 = (0);
seq__58955_58959 = G__58971;
chunk__58956_58960 = G__58972;
count__58957_58961 = G__58973;
i__58958_58962 = G__58974;
continue;
} else {
var msg_58975 = cljs.core.first.call(null,seq__58955_58969__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_58975);


var G__58976 = cljs.core.next.call(null,seq__58955_58969__$1);
var G__58977 = null;
var G__58978 = (0);
var G__58979 = (0);
seq__58955_58959 = G__58976;
chunk__58956_58960 = G__58977;
count__58957_58961 = G__58978;
i__58958_58962 = G__58979;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__58980){
var map__58981 = p__58980;
var map__58981__$1 = ((((!((map__58981 == null)))?((((map__58981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58981):map__58981);
var w = map__58981__$1;
var message = cljs.core.get.call(null,map__58981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__46727__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__46727__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__46727__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__58983 = cljs.core.seq.call(null,plugins);
var chunk__58984 = null;
var count__58985 = (0);
var i__58986 = (0);
while(true){
if((i__58986 < count__58985)){
var vec__58987 = cljs.core._nth.call(null,chunk__58984,i__58986);
var k = cljs.core.nth.call(null,vec__58987,(0),null);
var plugin = cljs.core.nth.call(null,vec__58987,(1),null);
if(cljs.core.truth_(plugin)){
var pl_58993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58983,chunk__58984,count__58985,i__58986,pl_58993,vec__58987,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_58993.call(null,msg_hist);
});})(seq__58983,chunk__58984,count__58985,i__58986,pl_58993,vec__58987,k,plugin))
);
} else {
}


var G__58994 = seq__58983;
var G__58995 = chunk__58984;
var G__58996 = count__58985;
var G__58997 = (i__58986 + (1));
seq__58983 = G__58994;
chunk__58984 = G__58995;
count__58985 = G__58996;
i__58986 = G__58997;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58983);
if(temp__4657__auto__){
var seq__58983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58983__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__58983__$1);
var G__58998 = cljs.core.chunk_rest.call(null,seq__58983__$1);
var G__58999 = c__47578__auto__;
var G__59000 = cljs.core.count.call(null,c__47578__auto__);
var G__59001 = (0);
seq__58983 = G__58998;
chunk__58984 = G__58999;
count__58985 = G__59000;
i__58986 = G__59001;
continue;
} else {
var vec__58990 = cljs.core.first.call(null,seq__58983__$1);
var k = cljs.core.nth.call(null,vec__58990,(0),null);
var plugin = cljs.core.nth.call(null,vec__58990,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58983,chunk__58984,count__58985,i__58986,pl_59002,vec__58990,k,plugin,seq__58983__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59002.call(null,msg_hist);
});})(seq__58983,chunk__58984,count__58985,i__58986,pl_59002,vec__58990,k,plugin,seq__58983__$1,temp__4657__auto__))
);
} else {
}


var G__59003 = cljs.core.next.call(null,seq__58983__$1);
var G__59004 = null;
var G__59005 = (0);
var G__59006 = (0);
seq__58983 = G__59003;
chunk__58984 = G__59004;
count__58985 = G__59005;
i__58986 = G__59006;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__59008 = arguments.length;
switch (G__59008) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__59009_59014 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__59010_59015 = null;
var count__59011_59016 = (0);
var i__59012_59017 = (0);
while(true){
if((i__59012_59017 < count__59011_59016)){
var msg_59018 = cljs.core._nth.call(null,chunk__59010_59015,i__59012_59017);
figwheel.client.socket.handle_incoming_message.call(null,msg_59018);


var G__59019 = seq__59009_59014;
var G__59020 = chunk__59010_59015;
var G__59021 = count__59011_59016;
var G__59022 = (i__59012_59017 + (1));
seq__59009_59014 = G__59019;
chunk__59010_59015 = G__59020;
count__59011_59016 = G__59021;
i__59012_59017 = G__59022;
continue;
} else {
var temp__4657__auto___59023 = cljs.core.seq.call(null,seq__59009_59014);
if(temp__4657__auto___59023){
var seq__59009_59024__$1 = temp__4657__auto___59023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59009_59024__$1)){
var c__47578__auto___59025 = cljs.core.chunk_first.call(null,seq__59009_59024__$1);
var G__59026 = cljs.core.chunk_rest.call(null,seq__59009_59024__$1);
var G__59027 = c__47578__auto___59025;
var G__59028 = cljs.core.count.call(null,c__47578__auto___59025);
var G__59029 = (0);
seq__59009_59014 = G__59026;
chunk__59010_59015 = G__59027;
count__59011_59016 = G__59028;
i__59012_59017 = G__59029;
continue;
} else {
var msg_59030 = cljs.core.first.call(null,seq__59009_59024__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_59030);


var G__59031 = cljs.core.next.call(null,seq__59009_59024__$1);
var G__59032 = null;
var G__59033 = (0);
var G__59034 = (0);
seq__59009_59014 = G__59031;
chunk__59010_59015 = G__59032;
count__59011_59016 = G__59033;
i__59012_59017 = G__59034;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__47908__auto__ = [];
var len__47901__auto___59039 = arguments.length;
var i__47902__auto___59040 = (0);
while(true){
if((i__47902__auto___59040 < len__47901__auto___59039)){
args__47908__auto__.push((arguments[i__47902__auto___59040]));

var G__59041 = (i__47902__auto___59040 + (1));
i__47902__auto___59040 = G__59041;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59036){
var map__59037 = p__59036;
var map__59037__$1 = ((((!((map__59037 == null)))?((((map__59037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59037):map__59037);
var opts = map__59037__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59035){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59035));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e59042){if((e59042 instanceof Error)){
var e = e59042;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e59042;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__59043){
var map__59044 = p__59043;
var map__59044__$1 = ((((!((map__59044 == null)))?((((map__59044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59044):map__59044);
var msg_name = cljs.core.get.call(null,map__59044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
