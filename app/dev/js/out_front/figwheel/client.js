// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
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
var args23042 = [];
var len__8057__auto___23045 = arguments.length;
var i__8058__auto___23046 = (0);
while(true){
if((i__8058__auto___23046 < len__8057__auto___23045)){
args23042.push((arguments[i__8058__auto___23046]));

var G__23047 = (i__8058__auto___23046 + (1));
i__8058__auto___23046 = G__23047;
continue;
} else {
}
break;
}

var G__23044 = args23042.length;
switch (G__23044) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23042.length)].join('')));

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
var args__8064__auto__ = [];
var len__8057__auto___23050 = arguments.length;
var i__8058__auto___23051 = (0);
while(true){
if((i__8058__auto___23051 < len__8057__auto___23050)){
args__8064__auto__.push((arguments[i__8058__auto___23051]));

var G__23052 = (i__8058__auto___23051 + (1));
i__8058__auto___23051 = G__23052;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq23049){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23049));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__8064__auto__ = [];
var len__8057__auto___23054 = arguments.length;
var i__8058__auto___23055 = (0);
while(true){
if((i__8058__auto___23055 < len__8057__auto___23054)){
args__8064__auto__.push((arguments[i__8058__auto___23055]));

var G__23056 = (i__8058__auto___23055 + (1));
i__8058__auto___23055 = G__23056;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq23053){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23053));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23057){
var map__23060 = p__23057;
var map__23060__$1 = ((((!((map__23060 == null)))?((((map__23060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060):map__23060);
var message = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6948__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6936__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6936__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6936__auto__;
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
var c__11683__auto___23222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___23222,ch){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___23222,ch){
return (function (state_23191){
var state_val_23192 = (state_23191[(1)]);
if((state_val_23192 === (7))){
var inst_23187 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23193_23223 = state_23191__$1;
(statearr_23193_23223[(2)] = inst_23187);

(statearr_23193_23223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (1))){
var state_23191__$1 = state_23191;
var statearr_23194_23224 = state_23191__$1;
(statearr_23194_23224[(2)] = null);

(statearr_23194_23224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (4))){
var inst_23144 = (state_23191[(7)]);
var inst_23144__$1 = (state_23191[(2)]);
var state_23191__$1 = (function (){var statearr_23195 = state_23191;
(statearr_23195[(7)] = inst_23144__$1);

return statearr_23195;
})();
if(cljs.core.truth_(inst_23144__$1)){
var statearr_23196_23225 = state_23191__$1;
(statearr_23196_23225[(1)] = (5));

} else {
var statearr_23197_23226 = state_23191__$1;
(statearr_23197_23226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (15))){
var inst_23151 = (state_23191[(8)]);
var inst_23166 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23151);
var inst_23167 = cljs.core.first.call(null,inst_23166);
var inst_23168 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23167);
var inst_23169 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23168)].join('');
var inst_23170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23169);
var state_23191__$1 = state_23191;
var statearr_23198_23227 = state_23191__$1;
(statearr_23198_23227[(2)] = inst_23170);

(statearr_23198_23227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (13))){
var inst_23175 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23199_23228 = state_23191__$1;
(statearr_23199_23228[(2)] = inst_23175);

(statearr_23199_23228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (6))){
var state_23191__$1 = state_23191;
var statearr_23200_23229 = state_23191__$1;
(statearr_23200_23229[(2)] = null);

(statearr_23200_23229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (17))){
var inst_23173 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23201_23230 = state_23191__$1;
(statearr_23201_23230[(2)] = inst_23173);

(statearr_23201_23230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (3))){
var inst_23189 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23191__$1,inst_23189);
} else {
if((state_val_23192 === (12))){
var inst_23150 = (state_23191[(9)]);
var inst_23164 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23150,opts);
var state_23191__$1 = state_23191;
if(cljs.core.truth_(inst_23164)){
var statearr_23202_23231 = state_23191__$1;
(statearr_23202_23231[(1)] = (15));

} else {
var statearr_23203_23232 = state_23191__$1;
(statearr_23203_23232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (2))){
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23191__$1,(4),ch);
} else {
if((state_val_23192 === (11))){
var inst_23151 = (state_23191[(8)]);
var inst_23156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23157 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23151);
var inst_23158 = cljs.core.async.timeout.call(null,(1000));
var inst_23159 = [inst_23157,inst_23158];
var inst_23160 = (new cljs.core.PersistentVector(null,2,(5),inst_23156,inst_23159,null));
var state_23191__$1 = state_23191;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23191__$1,(14),inst_23160);
} else {
if((state_val_23192 === (9))){
var inst_23151 = (state_23191[(8)]);
var inst_23177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23178 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23151);
var inst_23179 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23178);
var inst_23180 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23179)].join('');
var inst_23181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23180);
var state_23191__$1 = (function (){var statearr_23204 = state_23191;
(statearr_23204[(10)] = inst_23177);

return statearr_23204;
})();
var statearr_23205_23233 = state_23191__$1;
(statearr_23205_23233[(2)] = inst_23181);

(statearr_23205_23233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (5))){
var inst_23144 = (state_23191[(7)]);
var inst_23146 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23147 = (new cljs.core.PersistentArrayMap(null,2,inst_23146,null));
var inst_23148 = (new cljs.core.PersistentHashSet(null,inst_23147,null));
var inst_23149 = figwheel.client.focus_msgs.call(null,inst_23148,inst_23144);
var inst_23150 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23149);
var inst_23151 = cljs.core.first.call(null,inst_23149);
var inst_23152 = figwheel.client.autoload_QMARK_.call(null);
var state_23191__$1 = (function (){var statearr_23206 = state_23191;
(statearr_23206[(9)] = inst_23150);

(statearr_23206[(8)] = inst_23151);

return statearr_23206;
})();
if(cljs.core.truth_(inst_23152)){
var statearr_23207_23234 = state_23191__$1;
(statearr_23207_23234[(1)] = (8));

} else {
var statearr_23208_23235 = state_23191__$1;
(statearr_23208_23235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (14))){
var inst_23162 = (state_23191[(2)]);
var state_23191__$1 = state_23191;
var statearr_23209_23236 = state_23191__$1;
(statearr_23209_23236[(2)] = inst_23162);

(statearr_23209_23236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (16))){
var state_23191__$1 = state_23191;
var statearr_23210_23237 = state_23191__$1;
(statearr_23210_23237[(2)] = null);

(statearr_23210_23237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (10))){
var inst_23183 = (state_23191[(2)]);
var state_23191__$1 = (function (){var statearr_23211 = state_23191;
(statearr_23211[(11)] = inst_23183);

return statearr_23211;
})();
var statearr_23212_23238 = state_23191__$1;
(statearr_23212_23238[(2)] = null);

(statearr_23212_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23192 === (8))){
var inst_23150 = (state_23191[(9)]);
var inst_23154 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23150,opts);
var state_23191__$1 = state_23191;
if(cljs.core.truth_(inst_23154)){
var statearr_23213_23239 = state_23191__$1;
(statearr_23213_23239[(1)] = (11));

} else {
var statearr_23214_23240 = state_23191__$1;
(statearr_23214_23240[(1)] = (12));

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
});})(c__11683__auto___23222,ch))
;
return ((function (switch__11571__auto__,c__11683__auto___23222,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____0 = (function (){
var statearr_23218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23218[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__);

(statearr_23218[(1)] = (1));

return statearr_23218;
});
var figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____1 = (function (state_23191){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23219){if((e23219 instanceof Object)){
var ex__11575__auto__ = e23219;
var statearr_23220_23241 = state_23191;
(statearr_23220_23241[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23242 = state_23191;
state_23191 = G__23242;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__ = function(state_23191){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____1.call(this,state_23191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__11572__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___23222,ch))
})();
var state__11685__auto__ = (function (){var statearr_23221 = f__11684__auto__.call(null);
(statearr_23221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___23222);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___23222,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23243_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23243_SHARP_));
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
var base_path_23246 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23246){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e23245){if((e23245 instanceof Error)){
var e = e23245;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23246], null));
} else {
var e = e23245;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_23246))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23247){
var map__23256 = p__23247;
var map__23256__$1 = ((((!((map__23256 == null)))?((((map__23256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23256):map__23256);
var opts = map__23256__$1;
var build_id = cljs.core.get.call(null,map__23256__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23256,map__23256__$1,opts,build_id){
return (function (p__23258){
var vec__23259 = p__23258;
var seq__23260 = cljs.core.seq.call(null,vec__23259);
var first__23261 = cljs.core.first.call(null,seq__23260);
var seq__23260__$1 = cljs.core.next.call(null,seq__23260);
var map__23262 = first__23261;
var map__23262__$1 = ((((!((map__23262 == null)))?((((map__23262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23262):map__23262);
var msg = map__23262__$1;
var msg_name = cljs.core.get.call(null,map__23262__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23260__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23259,seq__23260,first__23261,seq__23260__$1,map__23262,map__23262__$1,msg,msg_name,_,map__23256,map__23256__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23259,seq__23260,first__23261,seq__23260__$1,map__23262,map__23262__$1,msg,msg_name,_,map__23256,map__23256__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23256,map__23256__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23270){
var vec__23271 = p__23270;
var seq__23272 = cljs.core.seq.call(null,vec__23271);
var first__23273 = cljs.core.first.call(null,seq__23272);
var seq__23272__$1 = cljs.core.next.call(null,seq__23272);
var map__23274 = first__23273;
var map__23274__$1 = ((((!((map__23274 == null)))?((((map__23274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23274):map__23274);
var msg = map__23274__$1;
var msg_name = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23272__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23276){
var map__23288 = p__23276;
var map__23288__$1 = ((((!((map__23288 == null)))?((((map__23288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23288):map__23288);
var on_compile_warning = cljs.core.get.call(null,map__23288__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23288__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23288,map__23288__$1,on_compile_warning,on_compile_fail){
return (function (p__23290){
var vec__23291 = p__23290;
var seq__23292 = cljs.core.seq.call(null,vec__23291);
var first__23293 = cljs.core.first.call(null,seq__23292);
var seq__23292__$1 = cljs.core.next.call(null,seq__23292);
var map__23294 = first__23293;
var map__23294__$1 = ((((!((map__23294 == null)))?((((map__23294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23294):map__23294);
var msg = map__23294__$1;
var msg_name = cljs.core.get.call(null,map__23294__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__23292__$1;
var pred__23296 = cljs.core._EQ_;
var expr__23297 = msg_name;
if(cljs.core.truth_(pred__23296.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23297))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23296.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23297))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23288,map__23288__$1,on_compile_warning,on_compile_fail))
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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__,msg_hist,msg_names,msg){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__,msg_hist,msg_names,msg){
return (function (state_23525){
var state_val_23526 = (state_23525[(1)]);
if((state_val_23526 === (7))){
var inst_23445 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23445)){
var statearr_23527_23577 = state_23525__$1;
(statearr_23527_23577[(1)] = (8));

} else {
var statearr_23528_23578 = state_23525__$1;
(statearr_23528_23578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (20))){
var inst_23519 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23529_23579 = state_23525__$1;
(statearr_23529_23579[(2)] = inst_23519);

(statearr_23529_23579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (27))){
var inst_23515 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23530_23580 = state_23525__$1;
(statearr_23530_23580[(2)] = inst_23515);

(statearr_23530_23580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (1))){
var inst_23438 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23438)){
var statearr_23531_23581 = state_23525__$1;
(statearr_23531_23581[(1)] = (2));

} else {
var statearr_23532_23582 = state_23525__$1;
(statearr_23532_23582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (24))){
var inst_23517 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23533_23583 = state_23525__$1;
(statearr_23533_23583[(2)] = inst_23517);

(statearr_23533_23583[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (4))){
var inst_23523 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23525__$1,inst_23523);
} else {
if((state_val_23526 === (15))){
var inst_23521 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23534_23584 = state_23525__$1;
(statearr_23534_23584[(2)] = inst_23521);

(statearr_23534_23584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (21))){
var inst_23474 = (state_23525[(2)]);
var inst_23475 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23476 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23475);
var state_23525__$1 = (function (){var statearr_23535 = state_23525;
(statearr_23535[(7)] = inst_23474);

return statearr_23535;
})();
var statearr_23536_23585 = state_23525__$1;
(statearr_23536_23585[(2)] = inst_23476);

(statearr_23536_23585[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (31))){
var inst_23504 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23504)){
var statearr_23537_23586 = state_23525__$1;
(statearr_23537_23586[(1)] = (34));

} else {
var statearr_23538_23587 = state_23525__$1;
(statearr_23538_23587[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (32))){
var inst_23513 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23539_23588 = state_23525__$1;
(statearr_23539_23588[(2)] = inst_23513);

(statearr_23539_23588[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (33))){
var inst_23500 = (state_23525[(2)]);
var inst_23501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23502 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23501);
var state_23525__$1 = (function (){var statearr_23540 = state_23525;
(statearr_23540[(8)] = inst_23500);

return statearr_23540;
})();
var statearr_23541_23589 = state_23525__$1;
(statearr_23541_23589[(2)] = inst_23502);

(statearr_23541_23589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (13))){
var inst_23459 = figwheel.client.heads_up.clear.call(null);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(16),inst_23459);
} else {
if((state_val_23526 === (22))){
var inst_23480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23481 = figwheel.client.heads_up.append_warning_message.call(null,inst_23480);
var state_23525__$1 = state_23525;
var statearr_23542_23590 = state_23525__$1;
(statearr_23542_23590[(2)] = inst_23481);

(statearr_23542_23590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (36))){
var inst_23511 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23543_23591 = state_23525__$1;
(statearr_23543_23591[(2)] = inst_23511);

(statearr_23543_23591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (29))){
var inst_23491 = (state_23525[(2)]);
var inst_23492 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23493 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23492);
var state_23525__$1 = (function (){var statearr_23544 = state_23525;
(statearr_23544[(9)] = inst_23491);

return statearr_23544;
})();
var statearr_23545_23592 = state_23525__$1;
(statearr_23545_23592[(2)] = inst_23493);

(statearr_23545_23592[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (6))){
var inst_23440 = (state_23525[(10)]);
var state_23525__$1 = state_23525;
var statearr_23546_23593 = state_23525__$1;
(statearr_23546_23593[(2)] = inst_23440);

(statearr_23546_23593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (28))){
var inst_23487 = (state_23525[(2)]);
var inst_23488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23489 = figwheel.client.heads_up.display_warning.call(null,inst_23488);
var state_23525__$1 = (function (){var statearr_23547 = state_23525;
(statearr_23547[(11)] = inst_23487);

return statearr_23547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(29),inst_23489);
} else {
if((state_val_23526 === (25))){
var inst_23485 = figwheel.client.heads_up.clear.call(null);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(28),inst_23485);
} else {
if((state_val_23526 === (34))){
var inst_23506 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(37),inst_23506);
} else {
if((state_val_23526 === (17))){
var inst_23465 = (state_23525[(2)]);
var inst_23466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23467 = figwheel.client.auto_jump_to_error.call(null,opts,inst_23466);
var state_23525__$1 = (function (){var statearr_23548 = state_23525;
(statearr_23548[(12)] = inst_23465);

return statearr_23548;
})();
var statearr_23549_23594 = state_23525__$1;
(statearr_23549_23594[(2)] = inst_23467);

(statearr_23549_23594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (3))){
var inst_23457 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23457)){
var statearr_23550_23595 = state_23525__$1;
(statearr_23550_23595[(1)] = (13));

} else {
var statearr_23551_23596 = state_23525__$1;
(statearr_23551_23596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (12))){
var inst_23453 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23552_23597 = state_23525__$1;
(statearr_23552_23597[(2)] = inst_23453);

(statearr_23552_23597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (2))){
var inst_23440 = (state_23525[(10)]);
var inst_23440__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23525__$1 = (function (){var statearr_23553 = state_23525;
(statearr_23553[(10)] = inst_23440__$1);

return statearr_23553;
})();
if(cljs.core.truth_(inst_23440__$1)){
var statearr_23554_23598 = state_23525__$1;
(statearr_23554_23598[(1)] = (5));

} else {
var statearr_23555_23599 = state_23525__$1;
(statearr_23555_23599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (23))){
var inst_23483 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23483)){
var statearr_23556_23600 = state_23525__$1;
(statearr_23556_23600[(1)] = (25));

} else {
var statearr_23557_23601 = state_23525__$1;
(statearr_23557_23601[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (35))){
var state_23525__$1 = state_23525;
var statearr_23558_23602 = state_23525__$1;
(statearr_23558_23602[(2)] = null);

(statearr_23558_23602[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (19))){
var inst_23478 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23478)){
var statearr_23559_23603 = state_23525__$1;
(statearr_23559_23603[(1)] = (22));

} else {
var statearr_23560_23604 = state_23525__$1;
(statearr_23560_23604[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (11))){
var inst_23449 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23561_23605 = state_23525__$1;
(statearr_23561_23605[(2)] = inst_23449);

(statearr_23561_23605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (9))){
var inst_23451 = figwheel.client.heads_up.clear.call(null);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(12),inst_23451);
} else {
if((state_val_23526 === (5))){
var inst_23442 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23525__$1 = state_23525;
var statearr_23562_23606 = state_23525__$1;
(statearr_23562_23606[(2)] = inst_23442);

(statearr_23562_23606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (14))){
var inst_23469 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23469)){
var statearr_23563_23607 = state_23525__$1;
(statearr_23563_23607[(1)] = (18));

} else {
var statearr_23564_23608 = state_23525__$1;
(statearr_23564_23608[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (26))){
var inst_23495 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23525__$1 = state_23525;
if(cljs.core.truth_(inst_23495)){
var statearr_23565_23609 = state_23525__$1;
(statearr_23565_23609[(1)] = (30));

} else {
var statearr_23566_23610 = state_23525__$1;
(statearr_23566_23610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (16))){
var inst_23461 = (state_23525[(2)]);
var inst_23462 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23463 = figwheel.client.heads_up.display_exception.call(null,inst_23462);
var state_23525__$1 = (function (){var statearr_23567 = state_23525;
(statearr_23567[(13)] = inst_23461);

return statearr_23567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(17),inst_23463);
} else {
if((state_val_23526 === (30))){
var inst_23497 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23498 = figwheel.client.heads_up.display_warning.call(null,inst_23497);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(33),inst_23498);
} else {
if((state_val_23526 === (10))){
var inst_23455 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23568_23611 = state_23525__$1;
(statearr_23568_23611[(2)] = inst_23455);

(statearr_23568_23611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (18))){
var inst_23471 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23472 = figwheel.client.heads_up.display_exception.call(null,inst_23471);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(21),inst_23472);
} else {
if((state_val_23526 === (37))){
var inst_23508 = (state_23525[(2)]);
var state_23525__$1 = state_23525;
var statearr_23569_23612 = state_23525__$1;
(statearr_23569_23612[(2)] = inst_23508);

(statearr_23569_23612[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23526 === (8))){
var inst_23447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23525__$1 = state_23525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23525__$1,(11),inst_23447);
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
});})(c__11683__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__11571__auto__,c__11683__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____0 = (function (){
var statearr_23573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23573[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__);

(statearr_23573[(1)] = (1));

return statearr_23573;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____1 = (function (state_23525){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23574){if((e23574 instanceof Object)){
var ex__11575__auto__ = e23574;
var statearr_23575_23613 = state_23525;
(statearr_23575_23613[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23614 = state_23525;
state_23525 = G__23614;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__ = function(state_23525){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____1.call(this,state_23525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__,msg_hist,msg_names,msg))
})();
var state__11685__auto__ = (function (){var statearr_23576 = f__11684__auto__.call(null);
(statearr_23576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_23576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__,msg_hist,msg_names,msg))
);

return c__11683__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__11683__auto___23677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___23677,ch){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___23677,ch){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (1))){
var state_23660__$1 = state_23660;
var statearr_23662_23678 = state_23660__$1;
(statearr_23662_23678[(2)] = null);

(statearr_23662_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (2))){
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(4),ch);
} else {
if((state_val_23661 === (3))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (4))){
var inst_23648 = (state_23660[(7)]);
var inst_23648__$1 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23663 = state_23660;
(statearr_23663[(7)] = inst_23648__$1);

return statearr_23663;
})();
if(cljs.core.truth_(inst_23648__$1)){
var statearr_23664_23679 = state_23660__$1;
(statearr_23664_23679[(1)] = (5));

} else {
var statearr_23665_23680 = state_23660__$1;
(statearr_23665_23680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var inst_23648 = (state_23660[(7)]);
var inst_23650 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23648);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(8),inst_23650);
} else {
if((state_val_23661 === (6))){
var state_23660__$1 = state_23660;
var statearr_23666_23681 = state_23660__$1;
(statearr_23666_23681[(2)] = null);

(statearr_23666_23681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (7))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23667_23682 = state_23660__$1;
(statearr_23667_23682[(2)] = inst_23656);

(statearr_23667_23682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (8))){
var inst_23652 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23668 = state_23660;
(statearr_23668[(8)] = inst_23652);

return statearr_23668;
})();
var statearr_23669_23683 = state_23660__$1;
(statearr_23669_23683[(2)] = null);

(statearr_23669_23683[(1)] = (2));


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
});})(c__11683__auto___23677,ch))
;
return ((function (switch__11571__auto__,c__11683__auto___23677,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__11572__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__11572__auto____0 = (function (){
var statearr_23673 = [null,null,null,null,null,null,null,null,null];
(statearr_23673[(0)] = figwheel$client$heads_up_plugin_$_state_machine__11572__auto__);

(statearr_23673[(1)] = (1));

return statearr_23673;
});
var figwheel$client$heads_up_plugin_$_state_machine__11572__auto____1 = (function (state_23660){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23674){if((e23674 instanceof Object)){
var ex__11575__auto__ = e23674;
var statearr_23675_23684 = state_23660;
(statearr_23675_23684[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23685 = state_23660;
state_23660 = G__23685;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__11572__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__11572__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__11572__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__11572__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___23677,ch))
})();
var state__11685__auto__ = (function (){var statearr_23676 = f__11684__auto__.call(null);
(statearr_23676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___23677);

return statearr_23676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___23677,ch))
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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_23706){
var state_val_23707 = (state_23706[(1)]);
if((state_val_23707 === (1))){
var inst_23701 = cljs.core.async.timeout.call(null,(3000));
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23706__$1,(2),inst_23701);
} else {
if((state_val_23707 === (2))){
var inst_23703 = (state_23706[(2)]);
var inst_23704 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23706__$1 = (function (){var statearr_23708 = state_23706;
(statearr_23708[(7)] = inst_23703);

return statearr_23708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23706__$1,inst_23704);
} else {
return null;
}
}
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____0 = (function (){
var statearr_23712 = [null,null,null,null,null,null,null,null];
(statearr_23712[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__);

(statearr_23712[(1)] = (1));

return statearr_23712;
});
var figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____1 = (function (state_23706){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23713){if((e23713 instanceof Object)){
var ex__11575__auto__ = e23713;
var statearr_23714_23716 = state_23706;
(statearr_23714_23716[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23717 = state_23706;
state_23706 = G__23717;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__ = function(state_23706){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____1.call(this,state_23706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__11572__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_23715 = f__11684__auto__.call(null);
(statearr_23715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_23715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__,figwheel_version,temp__4657__auto__){
return (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (1))){
var inst_23734 = cljs.core.async.timeout.call(null,(2000));
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(2),inst_23734);
} else {
if((state_val_23741 === (2))){
var inst_23736 = (state_23740[(2)]);
var inst_23737 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_23738 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_23737);
var state_23740__$1 = (function (){var statearr_23742 = state_23740;
(statearr_23742[(7)] = inst_23736);

return statearr_23742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
return null;
}
}
});})(c__11683__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____0 = (function (){
var statearr_23746 = [null,null,null,null,null,null,null,null];
(statearr_23746[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__);

(statearr_23746[(1)] = (1));

return statearr_23746;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____1 = (function (state_23740){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23747){if((e23747 instanceof Object)){
var ex__11575__auto__ = e23747;
var statearr_23748_23750 = state_23740;
(statearr_23748_23750[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23751 = state_23740;
state_23740 = G__23751;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__,figwheel_version,temp__4657__auto__))
})();
var state__11685__auto__ = (function (){var statearr_23749 = f__11684__auto__.call(null);
(statearr_23749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_23749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__,figwheel_version,temp__4657__auto__))
);

return c__11683__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__23752){
var map__23756 = p__23752;
var map__23756__$1 = ((((!((map__23756 == null)))?((((map__23756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23756):map__23756);
var file = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__23758 = "";
var G__23758__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23758),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__23758);
var G__23758__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23758__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__23758__$1);
if(cljs.core.truth_((function (){var and__6936__auto__ = line;
if(cljs.core.truth_(and__6936__auto__)){
return column;
} else {
return and__6936__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23758__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__23758__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23759){
var map__23766 = p__23759;
var map__23766__$1 = ((((!((map__23766 == null)))?((((map__23766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23766):map__23766);
var ed = map__23766__$1;
var formatted_exception = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23766__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23768_23772 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23769_23773 = null;
var count__23770_23774 = (0);
var i__23771_23775 = (0);
while(true){
if((i__23771_23775 < count__23770_23774)){
var msg_23776 = cljs.core._nth.call(null,chunk__23769_23773,i__23771_23775);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23776);

var G__23777 = seq__23768_23772;
var G__23778 = chunk__23769_23773;
var G__23779 = count__23770_23774;
var G__23780 = (i__23771_23775 + (1));
seq__23768_23772 = G__23777;
chunk__23769_23773 = G__23778;
count__23770_23774 = G__23779;
i__23771_23775 = G__23780;
continue;
} else {
var temp__4657__auto___23781 = cljs.core.seq.call(null,seq__23768_23772);
if(temp__4657__auto___23781){
var seq__23768_23782__$1 = temp__4657__auto___23781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23768_23782__$1)){
var c__7767__auto___23783 = cljs.core.chunk_first.call(null,seq__23768_23782__$1);
var G__23784 = cljs.core.chunk_rest.call(null,seq__23768_23782__$1);
var G__23785 = c__7767__auto___23783;
var G__23786 = cljs.core.count.call(null,c__7767__auto___23783);
var G__23787 = (0);
seq__23768_23772 = G__23784;
chunk__23769_23773 = G__23785;
count__23770_23774 = G__23786;
i__23771_23775 = G__23787;
continue;
} else {
var msg_23788 = cljs.core.first.call(null,seq__23768_23782__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23788);

var G__23789 = cljs.core.next.call(null,seq__23768_23782__$1);
var G__23790 = null;
var G__23791 = (0);
var G__23792 = (0);
seq__23768_23772 = G__23789;
chunk__23769_23773 = G__23790;
count__23770_23774 = G__23791;
i__23771_23775 = G__23792;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23793){
var map__23796 = p__23793;
var map__23796__$1 = ((((!((map__23796 == null)))?((((map__23796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23796):map__23796);
var w = map__23796__$1;
var message = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app/dev/js/out_front/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app/dev/js/out_front/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__6936__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6936__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6936__auto__;
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
var seq__23808 = cljs.core.seq.call(null,plugins);
var chunk__23809 = null;
var count__23810 = (0);
var i__23811 = (0);
while(true){
if((i__23811 < count__23810)){
var vec__23812 = cljs.core._nth.call(null,chunk__23809,i__23811);
var k = cljs.core.nth.call(null,vec__23812,(0),null);
var plugin = cljs.core.nth.call(null,vec__23812,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23818 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23808,chunk__23809,count__23810,i__23811,pl_23818,vec__23812,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23818.call(null,msg_hist);
});})(seq__23808,chunk__23809,count__23810,i__23811,pl_23818,vec__23812,k,plugin))
);
} else {
}

var G__23819 = seq__23808;
var G__23820 = chunk__23809;
var G__23821 = count__23810;
var G__23822 = (i__23811 + (1));
seq__23808 = G__23819;
chunk__23809 = G__23820;
count__23810 = G__23821;
i__23811 = G__23822;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23808);
if(temp__4657__auto__){
var seq__23808__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23808__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__23808__$1);
var G__23823 = cljs.core.chunk_rest.call(null,seq__23808__$1);
var G__23824 = c__7767__auto__;
var G__23825 = cljs.core.count.call(null,c__7767__auto__);
var G__23826 = (0);
seq__23808 = G__23823;
chunk__23809 = G__23824;
count__23810 = G__23825;
i__23811 = G__23826;
continue;
} else {
var vec__23815 = cljs.core.first.call(null,seq__23808__$1);
var k = cljs.core.nth.call(null,vec__23815,(0),null);
var plugin = cljs.core.nth.call(null,vec__23815,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23827 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23808,chunk__23809,count__23810,i__23811,pl_23827,vec__23815,k,plugin,seq__23808__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23827.call(null,msg_hist);
});})(seq__23808,chunk__23809,count__23810,i__23811,pl_23827,vec__23815,k,plugin,seq__23808__$1,temp__4657__auto__))
);
} else {
}

var G__23828 = cljs.core.next.call(null,seq__23808__$1);
var G__23829 = null;
var G__23830 = (0);
var G__23831 = (0);
seq__23808 = G__23828;
chunk__23809 = G__23829;
count__23810 = G__23830;
i__23811 = G__23831;
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
var args23832 = [];
var len__8057__auto___23839 = arguments.length;
var i__8058__auto___23840 = (0);
while(true){
if((i__8058__auto___23840 < len__8057__auto___23839)){
args23832.push((arguments[i__8058__auto___23840]));

var G__23841 = (i__8058__auto___23840 + (1));
i__8058__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var G__23834 = args23832.length;
switch (G__23834) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23832.length)].join('')));

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

var seq__23835_23843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__23836_23844 = null;
var count__23837_23845 = (0);
var i__23838_23846 = (0);
while(true){
if((i__23838_23846 < count__23837_23845)){
var msg_23847 = cljs.core._nth.call(null,chunk__23836_23844,i__23838_23846);
figwheel.client.socket.handle_incoming_message.call(null,msg_23847);

var G__23848 = seq__23835_23843;
var G__23849 = chunk__23836_23844;
var G__23850 = count__23837_23845;
var G__23851 = (i__23838_23846 + (1));
seq__23835_23843 = G__23848;
chunk__23836_23844 = G__23849;
count__23837_23845 = G__23850;
i__23838_23846 = G__23851;
continue;
} else {
var temp__4657__auto___23852 = cljs.core.seq.call(null,seq__23835_23843);
if(temp__4657__auto___23852){
var seq__23835_23853__$1 = temp__4657__auto___23852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23835_23853__$1)){
var c__7767__auto___23854 = cljs.core.chunk_first.call(null,seq__23835_23853__$1);
var G__23855 = cljs.core.chunk_rest.call(null,seq__23835_23853__$1);
var G__23856 = c__7767__auto___23854;
var G__23857 = cljs.core.count.call(null,c__7767__auto___23854);
var G__23858 = (0);
seq__23835_23843 = G__23855;
chunk__23836_23844 = G__23856;
count__23837_23845 = G__23857;
i__23838_23846 = G__23858;
continue;
} else {
var msg_23859 = cljs.core.first.call(null,seq__23835_23853__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_23859);

var G__23860 = cljs.core.next.call(null,seq__23835_23853__$1);
var G__23861 = null;
var G__23862 = (0);
var G__23863 = (0);
seq__23835_23843 = G__23860;
chunk__23836_23844 = G__23861;
count__23837_23845 = G__23862;
i__23838_23846 = G__23863;
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
var args__8064__auto__ = [];
var len__8057__auto___23868 = arguments.length;
var i__8058__auto___23869 = (0);
while(true){
if((i__8058__auto___23869 < len__8057__auto___23868)){
args__8064__auto__.push((arguments[i__8058__auto___23869]));

var G__23870 = (i__8058__auto___23869 + (1));
i__8058__auto___23869 = G__23870;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23865){
var map__23866 = p__23865;
var map__23866__$1 = ((((!((map__23866 == null)))?((((map__23866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23866):map__23866);
var opts = map__23866__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23864){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23864));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e23872){if((e23872 instanceof Error)){
var e = e23872;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e23872;

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
return (function (p__23876){
var map__23877 = p__23876;
var map__23877__$1 = ((((!((map__23877 == null)))?((((map__23877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);
var msg_name = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map