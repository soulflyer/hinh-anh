// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('anh_front.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('anh_front.db');
goog.require('anh_front.config');
goog.require('cognitect.transit');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("anh-front.events","initialize-db","anh-front.events/initialize-db",-1211764080),(function (_,___$1){
return anh_front.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__15774){
var vec__15775 = p__15774;
var _ = cljs.core.nth.call(null,vec__15775,(0),null);
var response = cljs.core.nth.call(null,vec__15775,(1),null);
var reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"projects","projects",-364845983),cognitect.transit.read.call(null,reader,response));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__15778){
var vec__15779 = p__15778;
var _ = cljs.core.nth.call(null,vec__15779,(0),null);
var response = cljs.core.nth.call(null,vec__15779,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"error","error",-978969032),"Project load failed");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__15782,_){
var map__15783 = p__15782;
var map__15783__$1 = ((((!((map__15783 == null)))?((((map__15783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15783):map__15783);
var db = cljs.core.get.call(null,map__15783__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210),true,new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(anh_front.config.api_root),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/projects")].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
