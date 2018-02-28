// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22603){
var map__22628 = p__22603;
var map__22628__$1 = ((((!((map__22628 == null)))?((((map__22628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22628):map__22628);
var m = map__22628__$1;
var n = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22630_22652 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22631_22653 = null;
var count__22632_22654 = (0);
var i__22633_22655 = (0);
while(true){
if((i__22633_22655 < count__22632_22654)){
var f_22656 = cljs.core._nth.call(null,chunk__22631_22653,i__22633_22655);
cljs.core.println.call(null,"  ",f_22656);

var G__22657 = seq__22630_22652;
var G__22658 = chunk__22631_22653;
var G__22659 = count__22632_22654;
var G__22660 = (i__22633_22655 + (1));
seq__22630_22652 = G__22657;
chunk__22631_22653 = G__22658;
count__22632_22654 = G__22659;
i__22633_22655 = G__22660;
continue;
} else {
var temp__4657__auto___22661 = cljs.core.seq.call(null,seq__22630_22652);
if(temp__4657__auto___22661){
var seq__22630_22662__$1 = temp__4657__auto___22661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22630_22662__$1)){
var c__7767__auto___22663 = cljs.core.chunk_first.call(null,seq__22630_22662__$1);
var G__22664 = cljs.core.chunk_rest.call(null,seq__22630_22662__$1);
var G__22665 = c__7767__auto___22663;
var G__22666 = cljs.core.count.call(null,c__7767__auto___22663);
var G__22667 = (0);
seq__22630_22652 = G__22664;
chunk__22631_22653 = G__22665;
count__22632_22654 = G__22666;
i__22633_22655 = G__22667;
continue;
} else {
var f_22668 = cljs.core.first.call(null,seq__22630_22662__$1);
cljs.core.println.call(null,"  ",f_22668);

var G__22669 = cljs.core.next.call(null,seq__22630_22662__$1);
var G__22670 = null;
var G__22671 = (0);
var G__22672 = (0);
seq__22630_22652 = G__22669;
chunk__22631_22653 = G__22670;
count__22632_22654 = G__22671;
i__22633_22655 = G__22672;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22673 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6948__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22673);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22673)))?cljs.core.second.call(null,arglists_22673):arglists_22673));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__22634_22674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22635_22675 = null;
var count__22636_22676 = (0);
var i__22637_22677 = (0);
while(true){
if((i__22637_22677 < count__22636_22676)){
var vec__22638_22678 = cljs.core._nth.call(null,chunk__22635_22675,i__22637_22677);
var name_22679 = cljs.core.nth.call(null,vec__22638_22678,(0),null);
var map__22641_22680 = cljs.core.nth.call(null,vec__22638_22678,(1),null);
var map__22641_22681__$1 = ((((!((map__22641_22680 == null)))?((((map__22641_22680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22641_22680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641_22680):map__22641_22680);
var doc_22682 = cljs.core.get.call(null,map__22641_22681__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22683 = cljs.core.get.call(null,map__22641_22681__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22679);

cljs.core.println.call(null," ",arglists_22683);

if(cljs.core.truth_(doc_22682)){
cljs.core.println.call(null," ",doc_22682);
} else {
}

var G__22684 = seq__22634_22674;
var G__22685 = chunk__22635_22675;
var G__22686 = count__22636_22676;
var G__22687 = (i__22637_22677 + (1));
seq__22634_22674 = G__22684;
chunk__22635_22675 = G__22685;
count__22636_22676 = G__22686;
i__22637_22677 = G__22687;
continue;
} else {
var temp__4657__auto___22688 = cljs.core.seq.call(null,seq__22634_22674);
if(temp__4657__auto___22688){
var seq__22634_22689__$1 = temp__4657__auto___22688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22634_22689__$1)){
var c__7767__auto___22690 = cljs.core.chunk_first.call(null,seq__22634_22689__$1);
var G__22691 = cljs.core.chunk_rest.call(null,seq__22634_22689__$1);
var G__22692 = c__7767__auto___22690;
var G__22693 = cljs.core.count.call(null,c__7767__auto___22690);
var G__22694 = (0);
seq__22634_22674 = G__22691;
chunk__22635_22675 = G__22692;
count__22636_22676 = G__22693;
i__22637_22677 = G__22694;
continue;
} else {
var vec__22643_22695 = cljs.core.first.call(null,seq__22634_22689__$1);
var name_22696 = cljs.core.nth.call(null,vec__22643_22695,(0),null);
var map__22646_22697 = cljs.core.nth.call(null,vec__22643_22695,(1),null);
var map__22646_22698__$1 = ((((!((map__22646_22697 == null)))?((((map__22646_22697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22646_22697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22646_22697):map__22646_22697);
var doc_22699 = cljs.core.get.call(null,map__22646_22698__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22700 = cljs.core.get.call(null,map__22646_22698__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22696);

cljs.core.println.call(null," ",arglists_22700);

if(cljs.core.truth_(doc_22699)){
cljs.core.println.call(null," ",doc_22699);
} else {
}

var G__22701 = cljs.core.next.call(null,seq__22634_22689__$1);
var G__22702 = null;
var G__22703 = (0);
var G__22704 = (0);
seq__22634_22674 = G__22701;
chunk__22635_22675 = G__22702;
count__22636_22676 = G__22703;
i__22637_22677 = G__22704;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__22648 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22649 = null;
var count__22650 = (0);
var i__22651 = (0);
while(true){
if((i__22651 < count__22650)){
var role = cljs.core._nth.call(null,chunk__22649,i__22651);
var temp__4657__auto___22705__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22705__$1)){
var spec_22706 = temp__4657__auto___22705__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_22706));
} else {
}

var G__22707 = seq__22648;
var G__22708 = chunk__22649;
var G__22709 = count__22650;
var G__22710 = (i__22651 + (1));
seq__22648 = G__22707;
chunk__22649 = G__22708;
count__22650 = G__22709;
i__22651 = G__22710;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__22648);
if(temp__4657__auto____$1){
var seq__22648__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22648__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__22648__$1);
var G__22711 = cljs.core.chunk_rest.call(null,seq__22648__$1);
var G__22712 = c__7767__auto__;
var G__22713 = cljs.core.count.call(null,c__7767__auto__);
var G__22714 = (0);
seq__22648 = G__22711;
chunk__22649 = G__22712;
count__22650 = G__22713;
i__22651 = G__22714;
continue;
} else {
var role = cljs.core.first.call(null,seq__22648__$1);
var temp__4657__auto___22715__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___22715__$2)){
var spec_22716 = temp__4657__auto___22715__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_22716));
} else {
}

var G__22717 = cljs.core.next.call(null,seq__22648__$1);
var G__22718 = null;
var G__22719 = (0);
var G__22720 = (0);
seq__22648 = G__22717;
chunk__22649 = G__22718;
count__22650 = G__22719;
i__22651 = G__22720;
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