// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58278){
var map__58279 = p__58278;
var map__58279__$1 = ((((!((map__58279 == null)))?((((map__58279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58279):map__58279);
var m = map__58279__$1;
var n = cljs.core.get.call(null,map__58279__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__58279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58281_58303 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58282_58304 = null;
var count__58283_58305 = (0);
var i__58284_58306 = (0);
while(true){
if((i__58284_58306 < count__58283_58305)){
var f_58307 = cljs.core._nth.call(null,chunk__58282_58304,i__58284_58306);
cljs.core.println.call(null,"  ",f_58307);


var G__58308 = seq__58281_58303;
var G__58309 = chunk__58282_58304;
var G__58310 = count__58283_58305;
var G__58311 = (i__58284_58306 + (1));
seq__58281_58303 = G__58308;
chunk__58282_58304 = G__58309;
count__58283_58305 = G__58310;
i__58284_58306 = G__58311;
continue;
} else {
var temp__4657__auto___58312 = cljs.core.seq.call(null,seq__58281_58303);
if(temp__4657__auto___58312){
var seq__58281_58313__$1 = temp__4657__auto___58312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58281_58313__$1)){
var c__47578__auto___58314 = cljs.core.chunk_first.call(null,seq__58281_58313__$1);
var G__58315 = cljs.core.chunk_rest.call(null,seq__58281_58313__$1);
var G__58316 = c__47578__auto___58314;
var G__58317 = cljs.core.count.call(null,c__47578__auto___58314);
var G__58318 = (0);
seq__58281_58303 = G__58315;
chunk__58282_58304 = G__58316;
count__58283_58305 = G__58317;
i__58284_58306 = G__58318;
continue;
} else {
var f_58319 = cljs.core.first.call(null,seq__58281_58313__$1);
cljs.core.println.call(null,"  ",f_58319);


var G__58320 = cljs.core.next.call(null,seq__58281_58313__$1);
var G__58321 = null;
var G__58322 = (0);
var G__58323 = (0);
seq__58281_58303 = G__58320;
chunk__58282_58304 = G__58321;
count__58283_58305 = G__58322;
i__58284_58306 = G__58323;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58324 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__46739__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58324);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58324)))?cljs.core.second.call(null,arglists_58324):arglists_58324));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58285_58325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58286_58326 = null;
var count__58287_58327 = (0);
var i__58288_58328 = (0);
while(true){
if((i__58288_58328 < count__58287_58327)){
var vec__58289_58329 = cljs.core._nth.call(null,chunk__58286_58326,i__58288_58328);
var name_58330 = cljs.core.nth.call(null,vec__58289_58329,(0),null);
var map__58292_58331 = cljs.core.nth.call(null,vec__58289_58329,(1),null);
var map__58292_58332__$1 = ((((!((map__58292_58331 == null)))?((((map__58292_58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58292_58331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58292_58331):map__58292_58331);
var doc_58333 = cljs.core.get.call(null,map__58292_58332__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58334 = cljs.core.get.call(null,map__58292_58332__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58330);

cljs.core.println.call(null," ",arglists_58334);

if(cljs.core.truth_(doc_58333)){
cljs.core.println.call(null," ",doc_58333);
} else {
}


var G__58335 = seq__58285_58325;
var G__58336 = chunk__58286_58326;
var G__58337 = count__58287_58327;
var G__58338 = (i__58288_58328 + (1));
seq__58285_58325 = G__58335;
chunk__58286_58326 = G__58336;
count__58287_58327 = G__58337;
i__58288_58328 = G__58338;
continue;
} else {
var temp__4657__auto___58339 = cljs.core.seq.call(null,seq__58285_58325);
if(temp__4657__auto___58339){
var seq__58285_58340__$1 = temp__4657__auto___58339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58285_58340__$1)){
var c__47578__auto___58341 = cljs.core.chunk_first.call(null,seq__58285_58340__$1);
var G__58342 = cljs.core.chunk_rest.call(null,seq__58285_58340__$1);
var G__58343 = c__47578__auto___58341;
var G__58344 = cljs.core.count.call(null,c__47578__auto___58341);
var G__58345 = (0);
seq__58285_58325 = G__58342;
chunk__58286_58326 = G__58343;
count__58287_58327 = G__58344;
i__58288_58328 = G__58345;
continue;
} else {
var vec__58294_58346 = cljs.core.first.call(null,seq__58285_58340__$1);
var name_58347 = cljs.core.nth.call(null,vec__58294_58346,(0),null);
var map__58297_58348 = cljs.core.nth.call(null,vec__58294_58346,(1),null);
var map__58297_58349__$1 = ((((!((map__58297_58348 == null)))?((((map__58297_58348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58297_58348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58297_58348):map__58297_58348);
var doc_58350 = cljs.core.get.call(null,map__58297_58349__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58351 = cljs.core.get.call(null,map__58297_58349__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58347);

cljs.core.println.call(null," ",arglists_58351);

if(cljs.core.truth_(doc_58350)){
cljs.core.println.call(null," ",doc_58350);
} else {
}


var G__58352 = cljs.core.next.call(null,seq__58285_58340__$1);
var G__58353 = null;
var G__58354 = (0);
var G__58355 = (0);
seq__58285_58325 = G__58352;
chunk__58286_58326 = G__58353;
count__58287_58327 = G__58354;
i__58288_58328 = G__58355;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__58299 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58300 = null;
var count__58301 = (0);
var i__58302 = (0);
while(true){
if((i__58302 < count__58301)){
var role = cljs.core._nth.call(null,chunk__58300,i__58302);
var temp__4657__auto___58356__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58356__$1)){
var spec_58357 = temp__4657__auto___58356__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58357));
} else {
}


var G__58358 = seq__58299;
var G__58359 = chunk__58300;
var G__58360 = count__58301;
var G__58361 = (i__58302 + (1));
seq__58299 = G__58358;
chunk__58300 = G__58359;
count__58301 = G__58360;
i__58302 = G__58361;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__58299);
if(temp__4657__auto____$1){
var seq__58299__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58299__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__58299__$1);
var G__58362 = cljs.core.chunk_rest.call(null,seq__58299__$1);
var G__58363 = c__47578__auto__;
var G__58364 = cljs.core.count.call(null,c__47578__auto__);
var G__58365 = (0);
seq__58299 = G__58362;
chunk__58300 = G__58363;
count__58301 = G__58364;
i__58302 = G__58365;
continue;
} else {
var role = cljs.core.first.call(null,seq__58299__$1);
var temp__4657__auto___58366__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58366__$2)){
var spec_58367 = temp__4657__auto___58366__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58367));
} else {
}


var G__58368 = cljs.core.next.call(null,seq__58299__$1);
var G__58369 = null;
var G__58370 = (0);
var G__58371 = (0);
seq__58299 = G__58368;
chunk__58300 = G__58369;
count__58301 = G__58370;
i__58302 = G__58371;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
