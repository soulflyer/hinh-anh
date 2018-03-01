// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__46739__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__46739__auto__){
return or__46739__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__46739__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__56564_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__56564_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__56565 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__56566 = null;
var count__56567 = (0);
var i__56568 = (0);
while(true){
if((i__56568 < count__56567)){
var n = cljs.core._nth.call(null,chunk__56566,i__56568);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__56569 = seq__56565;
var G__56570 = chunk__56566;
var G__56571 = count__56567;
var G__56572 = (i__56568 + (1));
seq__56565 = G__56569;
chunk__56566 = G__56570;
count__56567 = G__56571;
i__56568 = G__56572;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56565);
if(temp__4657__auto__){
var seq__56565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56565__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__56565__$1);
var G__56573 = cljs.core.chunk_rest.call(null,seq__56565__$1);
var G__56574 = c__47578__auto__;
var G__56575 = cljs.core.count.call(null,c__47578__auto__);
var G__56576 = (0);
seq__56565 = G__56573;
chunk__56566 = G__56574;
count__56567 = G__56575;
i__56568 = G__56576;
continue;
} else {
var n = cljs.core.first.call(null,seq__56565__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__56577 = cljs.core.next.call(null,seq__56565__$1);
var G__56578 = null;
var G__56579 = (0);
var G__56580 = (0);
seq__56565 = G__56577;
chunk__56566 = G__56578;
count__56567 = G__56579;
i__56568 = G__56580;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__56590_56598 = cljs.core.seq.call(null,deps);
var chunk__56591_56599 = null;
var count__56592_56600 = (0);
var i__56593_56601 = (0);
while(true){
if((i__56593_56601 < count__56592_56600)){
var dep_56602 = cljs.core._nth.call(null,chunk__56591_56599,i__56593_56601);
topo_sort_helper_STAR_.call(null,dep_56602,(depth + (1)),state);


var G__56603 = seq__56590_56598;
var G__56604 = chunk__56591_56599;
var G__56605 = count__56592_56600;
var G__56606 = (i__56593_56601 + (1));
seq__56590_56598 = G__56603;
chunk__56591_56599 = G__56604;
count__56592_56600 = G__56605;
i__56593_56601 = G__56606;
continue;
} else {
var temp__4657__auto___56607 = cljs.core.seq.call(null,seq__56590_56598);
if(temp__4657__auto___56607){
var seq__56590_56608__$1 = temp__4657__auto___56607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56590_56608__$1)){
var c__47578__auto___56609 = cljs.core.chunk_first.call(null,seq__56590_56608__$1);
var G__56610 = cljs.core.chunk_rest.call(null,seq__56590_56608__$1);
var G__56611 = c__47578__auto___56609;
var G__56612 = cljs.core.count.call(null,c__47578__auto___56609);
var G__56613 = (0);
seq__56590_56598 = G__56610;
chunk__56591_56599 = G__56611;
count__56592_56600 = G__56612;
i__56593_56601 = G__56613;
continue;
} else {
var dep_56614 = cljs.core.first.call(null,seq__56590_56608__$1);
topo_sort_helper_STAR_.call(null,dep_56614,(depth + (1)),state);


var G__56615 = cljs.core.next.call(null,seq__56590_56608__$1);
var G__56616 = null;
var G__56617 = (0);
var G__56618 = (0);
seq__56590_56598 = G__56615;
chunk__56591_56599 = G__56616;
count__56592_56600 = G__56617;
i__56593_56601 = G__56618;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__56594){
var vec__56595 = p__56594;
var seq__56596 = cljs.core.seq.call(null,vec__56595);
var first__56597 = cljs.core.first.call(null,seq__56596);
var seq__56596__$1 = cljs.core.next.call(null,seq__56596);
var x = first__56597;
var xs = seq__56596__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__56595,seq__56596,first__56597,seq__56596__$1,x,xs,get_deps__$1){
return (function (p1__56581_SHARP_){
return clojure.set.difference.call(null,p1__56581_SHARP_,x);
});})(vec__56595,seq__56596,first__56597,seq__56596__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__56619 = cljs.core.seq.call(null,provides);
var chunk__56620 = null;
var count__56621 = (0);
var i__56622 = (0);
while(true){
if((i__56622 < count__56621)){
var prov = cljs.core._nth.call(null,chunk__56620,i__56622);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56623_56631 = cljs.core.seq.call(null,requires);
var chunk__56624_56632 = null;
var count__56625_56633 = (0);
var i__56626_56634 = (0);
while(true){
if((i__56626_56634 < count__56625_56633)){
var req_56635 = cljs.core._nth.call(null,chunk__56624_56632,i__56626_56634);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56635,prov);


var G__56636 = seq__56623_56631;
var G__56637 = chunk__56624_56632;
var G__56638 = count__56625_56633;
var G__56639 = (i__56626_56634 + (1));
seq__56623_56631 = G__56636;
chunk__56624_56632 = G__56637;
count__56625_56633 = G__56638;
i__56626_56634 = G__56639;
continue;
} else {
var temp__4657__auto___56640 = cljs.core.seq.call(null,seq__56623_56631);
if(temp__4657__auto___56640){
var seq__56623_56641__$1 = temp__4657__auto___56640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56623_56641__$1)){
var c__47578__auto___56642 = cljs.core.chunk_first.call(null,seq__56623_56641__$1);
var G__56643 = cljs.core.chunk_rest.call(null,seq__56623_56641__$1);
var G__56644 = c__47578__auto___56642;
var G__56645 = cljs.core.count.call(null,c__47578__auto___56642);
var G__56646 = (0);
seq__56623_56631 = G__56643;
chunk__56624_56632 = G__56644;
count__56625_56633 = G__56645;
i__56626_56634 = G__56646;
continue;
} else {
var req_56647 = cljs.core.first.call(null,seq__56623_56641__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56647,prov);


var G__56648 = cljs.core.next.call(null,seq__56623_56641__$1);
var G__56649 = null;
var G__56650 = (0);
var G__56651 = (0);
seq__56623_56631 = G__56648;
chunk__56624_56632 = G__56649;
count__56625_56633 = G__56650;
i__56626_56634 = G__56651;
continue;
}
} else {
}
}
break;
}


var G__56652 = seq__56619;
var G__56653 = chunk__56620;
var G__56654 = count__56621;
var G__56655 = (i__56622 + (1));
seq__56619 = G__56652;
chunk__56620 = G__56653;
count__56621 = G__56654;
i__56622 = G__56655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56619);
if(temp__4657__auto__){
var seq__56619__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56619__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__56619__$1);
var G__56656 = cljs.core.chunk_rest.call(null,seq__56619__$1);
var G__56657 = c__47578__auto__;
var G__56658 = cljs.core.count.call(null,c__47578__auto__);
var G__56659 = (0);
seq__56619 = G__56656;
chunk__56620 = G__56657;
count__56621 = G__56658;
i__56622 = G__56659;
continue;
} else {
var prov = cljs.core.first.call(null,seq__56619__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56627_56660 = cljs.core.seq.call(null,requires);
var chunk__56628_56661 = null;
var count__56629_56662 = (0);
var i__56630_56663 = (0);
while(true){
if((i__56630_56663 < count__56629_56662)){
var req_56664 = cljs.core._nth.call(null,chunk__56628_56661,i__56630_56663);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56664,prov);


var G__56665 = seq__56627_56660;
var G__56666 = chunk__56628_56661;
var G__56667 = count__56629_56662;
var G__56668 = (i__56630_56663 + (1));
seq__56627_56660 = G__56665;
chunk__56628_56661 = G__56666;
count__56629_56662 = G__56667;
i__56630_56663 = G__56668;
continue;
} else {
var temp__4657__auto___56669__$1 = cljs.core.seq.call(null,seq__56627_56660);
if(temp__4657__auto___56669__$1){
var seq__56627_56670__$1 = temp__4657__auto___56669__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56627_56670__$1)){
var c__47578__auto___56671 = cljs.core.chunk_first.call(null,seq__56627_56670__$1);
var G__56672 = cljs.core.chunk_rest.call(null,seq__56627_56670__$1);
var G__56673 = c__47578__auto___56671;
var G__56674 = cljs.core.count.call(null,c__47578__auto___56671);
var G__56675 = (0);
seq__56627_56660 = G__56672;
chunk__56628_56661 = G__56673;
count__56629_56662 = G__56674;
i__56630_56663 = G__56675;
continue;
} else {
var req_56676 = cljs.core.first.call(null,seq__56627_56670__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56676,prov);


var G__56677 = cljs.core.next.call(null,seq__56627_56670__$1);
var G__56678 = null;
var G__56679 = (0);
var G__56680 = (0);
seq__56627_56660 = G__56677;
chunk__56628_56661 = G__56678;
count__56629_56662 = G__56679;
i__56630_56663 = G__56680;
continue;
}
} else {
}
}
break;
}


var G__56681 = cljs.core.next.call(null,seq__56619__$1);
var G__56682 = null;
var G__56683 = (0);
var G__56684 = (0);
seq__56619 = G__56681;
chunk__56620 = G__56682;
count__56621 = G__56683;
i__56622 = G__56684;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__56685_56689 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__56686_56690 = null;
var count__56687_56691 = (0);
var i__56688_56692 = (0);
while(true){
if((i__56688_56692 < count__56687_56691)){
var ns_56693 = cljs.core._nth.call(null,chunk__56686_56690,i__56688_56692);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56693);


var G__56694 = seq__56685_56689;
var G__56695 = chunk__56686_56690;
var G__56696 = count__56687_56691;
var G__56697 = (i__56688_56692 + (1));
seq__56685_56689 = G__56694;
chunk__56686_56690 = G__56695;
count__56687_56691 = G__56696;
i__56688_56692 = G__56697;
continue;
} else {
var temp__4657__auto___56698 = cljs.core.seq.call(null,seq__56685_56689);
if(temp__4657__auto___56698){
var seq__56685_56699__$1 = temp__4657__auto___56698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56685_56699__$1)){
var c__47578__auto___56700 = cljs.core.chunk_first.call(null,seq__56685_56699__$1);
var G__56701 = cljs.core.chunk_rest.call(null,seq__56685_56699__$1);
var G__56702 = c__47578__auto___56700;
var G__56703 = cljs.core.count.call(null,c__47578__auto___56700);
var G__56704 = (0);
seq__56685_56689 = G__56701;
chunk__56686_56690 = G__56702;
count__56687_56691 = G__56703;
i__56688_56692 = G__56704;
continue;
} else {
var ns_56705 = cljs.core.first.call(null,seq__56685_56699__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56705);


var G__56706 = cljs.core.next.call(null,seq__56685_56699__$1);
var G__56707 = null;
var G__56708 = (0);
var G__56709 = (0);
seq__56685_56689 = G__56706;
chunk__56686_56690 = G__56707;
count__56687_56691 = G__56708;
i__56688_56692 = G__56709;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__46739__auto__ = goog.require__;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__56710__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__56710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56711__i = 0, G__56711__a = new Array(arguments.length -  0);
while (G__56711__i < G__56711__a.length) {G__56711__a[G__56711__i] = arguments[G__56711__i + 0]; ++G__56711__i;}
  args = new cljs.core.IndexedSeq(G__56711__a,0,null);
} 
return G__56710__delegate.call(this,args);};
G__56710.cljs$lang$maxFixedArity = 0;
G__56710.cljs$lang$applyTo = (function (arglist__56712){
var args = cljs.core.seq(arglist__56712);
return G__56710__delegate(args);
});
G__56710.cljs$core$IFn$_invoke$arity$variadic = G__56710__delegate;
return G__56710;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__56713 = cljs.core._EQ_;
var expr__56714 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__56713.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__56714))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__56713,expr__56714){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__56713,expr__56714))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__56713,expr__56714){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e56716){if((e56716 instanceof Error)){
var e = e56716;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56716;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__56713,expr__56714))
} else {
if(cljs.core.truth_(pred__56713.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__56714))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56713.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__56714))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56713.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__56714))){
return ((function (pred__56713,expr__56714){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e56717){if((e56717 instanceof Error)){
var e = e56717;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56717;

}
}})());
});
;})(pred__56713,expr__56714))
} else {
return ((function (pred__56713,expr__56714){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__56713,expr__56714))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__56718,callback){
var map__56719 = p__56718;
var map__56719__$1 = ((((!((map__56719 == null)))?((((map__56719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56719):map__56719);
var file_msg = map__56719__$1;
var request_url = cljs.core.get.call(null,map__56719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__56719,map__56719__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__56719,map__56719__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_56743){
var state_val_56744 = (state_56743[(1)]);
if((state_val_56744 === (7))){
var inst_56739 = (state_56743[(2)]);
var state_56743__$1 = state_56743;
var statearr_56745_56762 = state_56743__$1;
(statearr_56745_56762[(2)] = inst_56739);

(statearr_56745_56762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (1))){
var state_56743__$1 = state_56743;
var statearr_56746_56763 = state_56743__$1;
(statearr_56746_56763[(2)] = null);

(statearr_56746_56763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (4))){
var inst_56723 = (state_56743[(7)]);
var inst_56723__$1 = (state_56743[(2)]);
var state_56743__$1 = (function (){var statearr_56747 = state_56743;
(statearr_56747[(7)] = inst_56723__$1);

return statearr_56747;
})();
if(cljs.core.truth_(inst_56723__$1)){
var statearr_56748_56764 = state_56743__$1;
(statearr_56748_56764[(1)] = (5));

} else {
var statearr_56749_56765 = state_56743__$1;
(statearr_56749_56765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (6))){
var state_56743__$1 = state_56743;
var statearr_56750_56766 = state_56743__$1;
(statearr_56750_56766[(2)] = null);

(statearr_56750_56766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (3))){
var inst_56741 = (state_56743[(2)]);
var state_56743__$1 = state_56743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56743__$1,inst_56741);
} else {
if((state_val_56744 === (2))){
var state_56743__$1 = state_56743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56743__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_56744 === (11))){
var inst_56735 = (state_56743[(2)]);
var state_56743__$1 = (function (){var statearr_56751 = state_56743;
(statearr_56751[(8)] = inst_56735);

return statearr_56751;
})();
var statearr_56752_56767 = state_56743__$1;
(statearr_56752_56767[(2)] = null);

(statearr_56752_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (9))){
var inst_56729 = (state_56743[(9)]);
var inst_56727 = (state_56743[(10)]);
var inst_56731 = inst_56729.call(null,inst_56727);
var state_56743__$1 = state_56743;
var statearr_56753_56768 = state_56743__$1;
(statearr_56753_56768[(2)] = inst_56731);

(statearr_56753_56768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (5))){
var inst_56723 = (state_56743[(7)]);
var inst_56725 = figwheel.client.file_reloading.blocking_load.call(null,inst_56723);
var state_56743__$1 = state_56743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56743__$1,(8),inst_56725);
} else {
if((state_val_56744 === (10))){
var inst_56727 = (state_56743[(10)]);
var inst_56733 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_56727);
var state_56743__$1 = state_56743;
var statearr_56754_56769 = state_56743__$1;
(statearr_56754_56769[(2)] = inst_56733);

(statearr_56754_56769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56744 === (8))){
var inst_56729 = (state_56743[(9)]);
var inst_56723 = (state_56743[(7)]);
var inst_56727 = (state_56743[(2)]);
var inst_56728 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_56729__$1 = cljs.core.get.call(null,inst_56728,inst_56723);
var state_56743__$1 = (function (){var statearr_56755 = state_56743;
(statearr_56755[(9)] = inst_56729__$1);

(statearr_56755[(10)] = inst_56727);

return statearr_56755;
})();
if(cljs.core.truth_(inst_56729__$1)){
var statearr_56756_56770 = state_56743__$1;
(statearr_56756_56770[(1)] = (9));

} else {
var statearr_56757_56771 = state_56743__$1;
(statearr_56757_56771[(1)] = (10));

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
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50716__auto__ = null;
var figwheel$client$file_reloading$state_machine__50716__auto____0 = (function (){
var statearr_56758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56758[(0)] = figwheel$client$file_reloading$state_machine__50716__auto__);

(statearr_56758[(1)] = (1));

return statearr_56758;
});
var figwheel$client$file_reloading$state_machine__50716__auto____1 = (function (state_56743){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_56743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e56759){if((e56759 instanceof Object)){
var ex__50719__auto__ = e56759;
var statearr_56760_56772 = state_56743;
(statearr_56760_56772[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56773 = state_56743;
state_56743 = G__56773;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50716__auto__ = function(state_56743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50716__auto____1.call(this,state_56743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50716__auto____0;
figwheel$client$file_reloading$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50716__auto____1;
return figwheel$client$file_reloading$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_56761 = f__50804__auto__.call(null);
(statearr_56761[(6)] = c__50803__auto__);

return statearr_56761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__56774,callback){
var map__56775 = p__56774;
var map__56775__$1 = ((((!((map__56775 == null)))?((((map__56775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56775):map__56775);
var file_msg = map__56775__$1;
var namespace = cljs.core.get.call(null,map__56775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__56775,map__56775__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__56775,map__56775__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__56777){
var map__56778 = p__56777;
var map__56778__$1 = ((((!((map__56778 == null)))?((((map__56778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56778):map__56778);
var file_msg = map__56778__$1;
var namespace = cljs.core.get.call(null,map__56778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__56780){
var map__56781 = p__56780;
var map__56781__$1 = ((((!((map__56781 == null)))?((((map__56781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56781):map__56781);
var file_msg = map__56781__$1;
var namespace = cljs.core.get.call(null,map__56781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__46727__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__46727__auto__){
var or__46739__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__46727__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__56783,callback){
var map__56784 = p__56783;
var map__56784__$1 = ((((!((map__56784 == null)))?((((map__56784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56784):map__56784);
var file_msg = map__56784__$1;
var request_url = cljs.core.get.call(null,map__56784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__56784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__50803__auto___56834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___56834,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___56834,out){
return (function (state_56819){
var state_val_56820 = (state_56819[(1)]);
if((state_val_56820 === (1))){
var inst_56793 = cljs.core.seq.call(null,files);
var inst_56794 = cljs.core.first.call(null,inst_56793);
var inst_56795 = cljs.core.next.call(null,inst_56793);
var inst_56796 = files;
var state_56819__$1 = (function (){var statearr_56821 = state_56819;
(statearr_56821[(7)] = inst_56795);

(statearr_56821[(8)] = inst_56794);

(statearr_56821[(9)] = inst_56796);

return statearr_56821;
})();
var statearr_56822_56835 = state_56819__$1;
(statearr_56822_56835[(2)] = null);

(statearr_56822_56835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56820 === (2))){
var inst_56802 = (state_56819[(10)]);
var inst_56796 = (state_56819[(9)]);
var inst_56801 = cljs.core.seq.call(null,inst_56796);
var inst_56802__$1 = cljs.core.first.call(null,inst_56801);
var inst_56803 = cljs.core.next.call(null,inst_56801);
var inst_56804 = (inst_56802__$1 == null);
var inst_56805 = cljs.core.not.call(null,inst_56804);
var state_56819__$1 = (function (){var statearr_56823 = state_56819;
(statearr_56823[(11)] = inst_56803);

(statearr_56823[(10)] = inst_56802__$1);

return statearr_56823;
})();
if(inst_56805){
var statearr_56824_56836 = state_56819__$1;
(statearr_56824_56836[(1)] = (4));

} else {
var statearr_56825_56837 = state_56819__$1;
(statearr_56825_56837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56820 === (3))){
var inst_56817 = (state_56819[(2)]);
var state_56819__$1 = state_56819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56819__$1,inst_56817);
} else {
if((state_val_56820 === (4))){
var inst_56802 = (state_56819[(10)]);
var inst_56807 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56802);
var state_56819__$1 = state_56819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56819__$1,(7),inst_56807);
} else {
if((state_val_56820 === (5))){
var inst_56813 = cljs.core.async.close_BANG_.call(null,out);
var state_56819__$1 = state_56819;
var statearr_56826_56838 = state_56819__$1;
(statearr_56826_56838[(2)] = inst_56813);

(statearr_56826_56838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56820 === (6))){
var inst_56815 = (state_56819[(2)]);
var state_56819__$1 = state_56819;
var statearr_56827_56839 = state_56819__$1;
(statearr_56827_56839[(2)] = inst_56815);

(statearr_56827_56839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56820 === (7))){
var inst_56803 = (state_56819[(11)]);
var inst_56809 = (state_56819[(2)]);
var inst_56810 = cljs.core.async.put_BANG_.call(null,out,inst_56809);
var inst_56796 = inst_56803;
var state_56819__$1 = (function (){var statearr_56828 = state_56819;
(statearr_56828[(12)] = inst_56810);

(statearr_56828[(9)] = inst_56796);

return statearr_56828;
})();
var statearr_56829_56840 = state_56819__$1;
(statearr_56829_56840[(2)] = null);

(statearr_56829_56840[(1)] = (2));


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
});})(c__50803__auto___56834,out))
;
return ((function (switch__50715__auto__,c__50803__auto___56834,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____0 = (function (){
var statearr_56830 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56830[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__);

(statearr_56830[(1)] = (1));

return statearr_56830;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____1 = (function (state_56819){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_56819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e56831){if((e56831 instanceof Object)){
var ex__50719__auto__ = e56831;
var statearr_56832_56841 = state_56819;
(statearr_56832_56841[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56842 = state_56819;
state_56819 = G__56842;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__ = function(state_56819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____1.call(this,state_56819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___56834,out))
})();
var state__50805__auto__ = (function (){var statearr_56833 = f__50804__auto__.call(null);
(statearr_56833[(6)] = c__50803__auto___56834);

return statearr_56833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___56834,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__56843,opts){
var map__56844 = p__56843;
var map__56844__$1 = ((((!((map__56844 == null)))?((((map__56844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56844):map__56844);
var eval_body = cljs.core.get.call(null,map__56844__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__56844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__46727__auto__ = eval_body;
if(cljs.core.truth_(and__46727__auto__)){
return typeof eval_body === 'string';
} else {
return and__46727__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e56846){var e = e56846;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__56847_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56847_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__56848){
var vec__56849 = p__56848;
var k = cljs.core.nth.call(null,vec__56849,(0),null);
var v = cljs.core.nth.call(null,vec__56849,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__56852){
var vec__56853 = p__56852;
var k = cljs.core.nth.call(null,vec__56853,(0),null);
var v = cljs.core.nth.call(null,vec__56853,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__56859,p__56860){
var map__56861 = p__56859;
var map__56861__$1 = ((((!((map__56861 == null)))?((((map__56861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56861):map__56861);
var opts = map__56861__$1;
var before_jsload = cljs.core.get.call(null,map__56861__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__56861__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__56861__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__56862 = p__56860;
var map__56862__$1 = ((((!((map__56862 == null)))?((((map__56862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56862):map__56862);
var msg = map__56862__$1;
var files = cljs.core.get.call(null,map__56862__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__56862__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__56862__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_57016){
var state_val_57017 = (state_57016[(1)]);
if((state_val_57017 === (7))){
var inst_56878 = (state_57016[(7)]);
var inst_56876 = (state_57016[(8)]);
var inst_56879 = (state_57016[(9)]);
var inst_56877 = (state_57016[(10)]);
var inst_56884 = cljs.core._nth.call(null,inst_56877,inst_56879);
var inst_56885 = figwheel.client.file_reloading.eval_body.call(null,inst_56884,opts);
var inst_56886 = (inst_56879 + (1));
var tmp57018 = inst_56878;
var tmp57019 = inst_56876;
var tmp57020 = inst_56877;
var inst_56876__$1 = tmp57019;
var inst_56877__$1 = tmp57020;
var inst_56878__$1 = tmp57018;
var inst_56879__$1 = inst_56886;
var state_57016__$1 = (function (){var statearr_57021 = state_57016;
(statearr_57021[(7)] = inst_56878__$1);

(statearr_57021[(11)] = inst_56885);

(statearr_57021[(8)] = inst_56876__$1);

(statearr_57021[(9)] = inst_56879__$1);

(statearr_57021[(10)] = inst_56877__$1);

return statearr_57021;
})();
var statearr_57022_57105 = state_57016__$1;
(statearr_57022_57105[(2)] = null);

(statearr_57022_57105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (20))){
var inst_56919 = (state_57016[(12)]);
var inst_56927 = figwheel.client.file_reloading.sort_files.call(null,inst_56919);
var state_57016__$1 = state_57016;
var statearr_57023_57106 = state_57016__$1;
(statearr_57023_57106[(2)] = inst_56927);

(statearr_57023_57106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (27))){
var state_57016__$1 = state_57016;
var statearr_57024_57107 = state_57016__$1;
(statearr_57024_57107[(2)] = null);

(statearr_57024_57107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (1))){
var inst_56868 = (state_57016[(13)]);
var inst_56865 = before_jsload.call(null,files);
var inst_56866 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_56867 = (function (){return ((function (inst_56868,inst_56865,inst_56866,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56856_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56856_SHARP_);
});
;})(inst_56868,inst_56865,inst_56866,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56868__$1 = cljs.core.filter.call(null,inst_56867,files);
var inst_56869 = cljs.core.not_empty.call(null,inst_56868__$1);
var state_57016__$1 = (function (){var statearr_57025 = state_57016;
(statearr_57025[(14)] = inst_56865);

(statearr_57025[(15)] = inst_56866);

(statearr_57025[(13)] = inst_56868__$1);

return statearr_57025;
})();
if(cljs.core.truth_(inst_56869)){
var statearr_57026_57108 = state_57016__$1;
(statearr_57026_57108[(1)] = (2));

} else {
var statearr_57027_57109 = state_57016__$1;
(statearr_57027_57109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (24))){
var state_57016__$1 = state_57016;
var statearr_57028_57110 = state_57016__$1;
(statearr_57028_57110[(2)] = null);

(statearr_57028_57110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (39))){
var inst_56969 = (state_57016[(16)]);
var state_57016__$1 = state_57016;
var statearr_57029_57111 = state_57016__$1;
(statearr_57029_57111[(2)] = inst_56969);

(statearr_57029_57111[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (46))){
var inst_57011 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57030_57112 = state_57016__$1;
(statearr_57030_57112[(2)] = inst_57011);

(statearr_57030_57112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (4))){
var inst_56913 = (state_57016[(2)]);
var inst_56914 = cljs.core.List.EMPTY;
var inst_56915 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_56914);
var inst_56916 = (function (){return ((function (inst_56913,inst_56914,inst_56915,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56857_SHARP_){
var and__46727__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56857_SHARP_);
if(cljs.core.truth_(and__46727__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56857_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__56857_SHARP_)));
} else {
return and__46727__auto__;
}
});
;})(inst_56913,inst_56914,inst_56915,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56917 = cljs.core.filter.call(null,inst_56916,files);
var inst_56918 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_56919 = cljs.core.concat.call(null,inst_56917,inst_56918);
var state_57016__$1 = (function (){var statearr_57031 = state_57016;
(statearr_57031[(17)] = inst_56913);

(statearr_57031[(18)] = inst_56915);

(statearr_57031[(12)] = inst_56919);

return statearr_57031;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_57032_57113 = state_57016__$1;
(statearr_57032_57113[(1)] = (16));

} else {
var statearr_57033_57114 = state_57016__$1;
(statearr_57033_57114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (15))){
var inst_56903 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57034_57115 = state_57016__$1;
(statearr_57034_57115[(2)] = inst_56903);

(statearr_57034_57115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (21))){
var inst_56929 = (state_57016[(19)]);
var inst_56929__$1 = (state_57016[(2)]);
var inst_56930 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_56929__$1);
var state_57016__$1 = (function (){var statearr_57035 = state_57016;
(statearr_57035[(19)] = inst_56929__$1);

return statearr_57035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57016__$1,(22),inst_56930);
} else {
if((state_val_57017 === (31))){
var inst_57014 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57016__$1,inst_57014);
} else {
if((state_val_57017 === (32))){
var inst_56969 = (state_57016[(16)]);
var inst_56974 = inst_56969.cljs$lang$protocol_mask$partition0$;
var inst_56975 = (inst_56974 & (64));
var inst_56976 = inst_56969.cljs$core$ISeq$;
var inst_56977 = (cljs.core.PROTOCOL_SENTINEL === inst_56976);
var inst_56978 = (inst_56975) || (inst_56977);
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_56978)){
var statearr_57036_57116 = state_57016__$1;
(statearr_57036_57116[(1)] = (35));

} else {
var statearr_57037_57117 = state_57016__$1;
(statearr_57037_57117[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (40))){
var inst_56991 = (state_57016[(20)]);
var inst_56990 = (state_57016[(2)]);
var inst_56991__$1 = cljs.core.get.call(null,inst_56990,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_56992 = cljs.core.get.call(null,inst_56990,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_56993 = cljs.core.not_empty.call(null,inst_56991__$1);
var state_57016__$1 = (function (){var statearr_57038 = state_57016;
(statearr_57038[(20)] = inst_56991__$1);

(statearr_57038[(21)] = inst_56992);

return statearr_57038;
})();
if(cljs.core.truth_(inst_56993)){
var statearr_57039_57118 = state_57016__$1;
(statearr_57039_57118[(1)] = (41));

} else {
var statearr_57040_57119 = state_57016__$1;
(statearr_57040_57119[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (33))){
var state_57016__$1 = state_57016;
var statearr_57041_57120 = state_57016__$1;
(statearr_57041_57120[(2)] = false);

(statearr_57041_57120[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (13))){
var inst_56889 = (state_57016[(22)]);
var inst_56893 = cljs.core.chunk_first.call(null,inst_56889);
var inst_56894 = cljs.core.chunk_rest.call(null,inst_56889);
var inst_56895 = cljs.core.count.call(null,inst_56893);
var inst_56876 = inst_56894;
var inst_56877 = inst_56893;
var inst_56878 = inst_56895;
var inst_56879 = (0);
var state_57016__$1 = (function (){var statearr_57042 = state_57016;
(statearr_57042[(7)] = inst_56878);

(statearr_57042[(8)] = inst_56876);

(statearr_57042[(9)] = inst_56879);

(statearr_57042[(10)] = inst_56877);

return statearr_57042;
})();
var statearr_57043_57121 = state_57016__$1;
(statearr_57043_57121[(2)] = null);

(statearr_57043_57121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (22))){
var inst_56929 = (state_57016[(19)]);
var inst_56932 = (state_57016[(23)]);
var inst_56933 = (state_57016[(24)]);
var inst_56937 = (state_57016[(25)]);
var inst_56932__$1 = (state_57016[(2)]);
var inst_56933__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56932__$1);
var inst_56934 = (function (){var all_files = inst_56929;
var res_SINGLEQUOTE_ = inst_56932__$1;
var res = inst_56933__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_56929,inst_56932,inst_56933,inst_56937,inst_56932__$1,inst_56933__$1,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56858_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56858_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_56929,inst_56932,inst_56933,inst_56937,inst_56932__$1,inst_56933__$1,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56935 = cljs.core.filter.call(null,inst_56934,inst_56932__$1);
var inst_56936 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_56937__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56936);
var inst_56938 = cljs.core.not_empty.call(null,inst_56937__$1);
var state_57016__$1 = (function (){var statearr_57044 = state_57016;
(statearr_57044[(23)] = inst_56932__$1);

(statearr_57044[(26)] = inst_56935);

(statearr_57044[(24)] = inst_56933__$1);

(statearr_57044[(25)] = inst_56937__$1);

return statearr_57044;
})();
if(cljs.core.truth_(inst_56938)){
var statearr_57045_57122 = state_57016__$1;
(statearr_57045_57122[(1)] = (23));

} else {
var statearr_57046_57123 = state_57016__$1;
(statearr_57046_57123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (36))){
var state_57016__$1 = state_57016;
var statearr_57047_57124 = state_57016__$1;
(statearr_57047_57124[(2)] = false);

(statearr_57047_57124[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (41))){
var inst_56991 = (state_57016[(20)]);
var inst_56995 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_56996 = cljs.core.map.call(null,inst_56995,inst_56991);
var inst_56997 = cljs.core.pr_str.call(null,inst_56996);
var inst_56998 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56997)].join('');
var inst_56999 = figwheel.client.utils.log.call(null,inst_56998);
var state_57016__$1 = state_57016;
var statearr_57048_57125 = state_57016__$1;
(statearr_57048_57125[(2)] = inst_56999);

(statearr_57048_57125[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (43))){
var inst_56992 = (state_57016[(21)]);
var inst_57002 = (state_57016[(2)]);
var inst_57003 = cljs.core.not_empty.call(null,inst_56992);
var state_57016__$1 = (function (){var statearr_57049 = state_57016;
(statearr_57049[(27)] = inst_57002);

return statearr_57049;
})();
if(cljs.core.truth_(inst_57003)){
var statearr_57050_57126 = state_57016__$1;
(statearr_57050_57126[(1)] = (44));

} else {
var statearr_57051_57127 = state_57016__$1;
(statearr_57051_57127[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (29))){
var inst_56929 = (state_57016[(19)]);
var inst_56932 = (state_57016[(23)]);
var inst_56969 = (state_57016[(16)]);
var inst_56935 = (state_57016[(26)]);
var inst_56933 = (state_57016[(24)]);
var inst_56937 = (state_57016[(25)]);
var inst_56965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_56968 = (function (){var all_files = inst_56929;
var res_SINGLEQUOTE_ = inst_56932;
var res = inst_56933;
var files_not_loaded = inst_56935;
var dependencies_that_loaded = inst_56937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56969,inst_56935,inst_56933,inst_56937,inst_56965,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56967){
var map__57052 = p__56967;
var map__57052__$1 = ((((!((map__57052 == null)))?((((map__57052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57052):map__57052);
var namespace = cljs.core.get.call(null,map__57052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56969,inst_56935,inst_56933,inst_56937,inst_56965,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56969__$1 = cljs.core.group_by.call(null,inst_56968,inst_56935);
var inst_56971 = (inst_56969__$1 == null);
var inst_56972 = cljs.core.not.call(null,inst_56971);
var state_57016__$1 = (function (){var statearr_57054 = state_57016;
(statearr_57054[(16)] = inst_56969__$1);

(statearr_57054[(28)] = inst_56965);

return statearr_57054;
})();
if(inst_56972){
var statearr_57055_57128 = state_57016__$1;
(statearr_57055_57128[(1)] = (32));

} else {
var statearr_57056_57129 = state_57016__$1;
(statearr_57056_57129[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (44))){
var inst_56992 = (state_57016[(21)]);
var inst_57005 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56992);
var inst_57006 = cljs.core.pr_str.call(null,inst_57005);
var inst_57007 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57006)].join('');
var inst_57008 = figwheel.client.utils.log.call(null,inst_57007);
var state_57016__$1 = state_57016;
var statearr_57057_57130 = state_57016__$1;
(statearr_57057_57130[(2)] = inst_57008);

(statearr_57057_57130[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (6))){
var inst_56910 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57058_57131 = state_57016__$1;
(statearr_57058_57131[(2)] = inst_56910);

(statearr_57058_57131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (28))){
var inst_56935 = (state_57016[(26)]);
var inst_56962 = (state_57016[(2)]);
var inst_56963 = cljs.core.not_empty.call(null,inst_56935);
var state_57016__$1 = (function (){var statearr_57059 = state_57016;
(statearr_57059[(29)] = inst_56962);

return statearr_57059;
})();
if(cljs.core.truth_(inst_56963)){
var statearr_57060_57132 = state_57016__$1;
(statearr_57060_57132[(1)] = (29));

} else {
var statearr_57061_57133 = state_57016__$1;
(statearr_57061_57133[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (25))){
var inst_56933 = (state_57016[(24)]);
var inst_56949 = (state_57016[(2)]);
var inst_56950 = cljs.core.not_empty.call(null,inst_56933);
var state_57016__$1 = (function (){var statearr_57062 = state_57016;
(statearr_57062[(30)] = inst_56949);

return statearr_57062;
})();
if(cljs.core.truth_(inst_56950)){
var statearr_57063_57134 = state_57016__$1;
(statearr_57063_57134[(1)] = (26));

} else {
var statearr_57064_57135 = state_57016__$1;
(statearr_57064_57135[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (34))){
var inst_56985 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_56985)){
var statearr_57065_57136 = state_57016__$1;
(statearr_57065_57136[(1)] = (38));

} else {
var statearr_57066_57137 = state_57016__$1;
(statearr_57066_57137[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (17))){
var state_57016__$1 = state_57016;
var statearr_57067_57138 = state_57016__$1;
(statearr_57067_57138[(2)] = recompile_dependents);

(statearr_57067_57138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (3))){
var state_57016__$1 = state_57016;
var statearr_57068_57139 = state_57016__$1;
(statearr_57068_57139[(2)] = null);

(statearr_57068_57139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (12))){
var inst_56906 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57069_57140 = state_57016__$1;
(statearr_57069_57140[(2)] = inst_56906);

(statearr_57069_57140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (2))){
var inst_56868 = (state_57016[(13)]);
var inst_56875 = cljs.core.seq.call(null,inst_56868);
var inst_56876 = inst_56875;
var inst_56877 = null;
var inst_56878 = (0);
var inst_56879 = (0);
var state_57016__$1 = (function (){var statearr_57070 = state_57016;
(statearr_57070[(7)] = inst_56878);

(statearr_57070[(8)] = inst_56876);

(statearr_57070[(9)] = inst_56879);

(statearr_57070[(10)] = inst_56877);

return statearr_57070;
})();
var statearr_57071_57141 = state_57016__$1;
(statearr_57071_57141[(2)] = null);

(statearr_57071_57141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (23))){
var inst_56929 = (state_57016[(19)]);
var inst_56932 = (state_57016[(23)]);
var inst_56935 = (state_57016[(26)]);
var inst_56933 = (state_57016[(24)]);
var inst_56937 = (state_57016[(25)]);
var inst_56940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_56942 = (function (){var all_files = inst_56929;
var res_SINGLEQUOTE_ = inst_56932;
var res = inst_56933;
var files_not_loaded = inst_56935;
var dependencies_that_loaded = inst_56937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56940,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56941){
var map__57072 = p__56941;
var map__57072__$1 = ((((!((map__57072 == null)))?((((map__57072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57072):map__57072);
var request_url = cljs.core.get.call(null,map__57072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56940,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56943 = cljs.core.reverse.call(null,inst_56937);
var inst_56944 = cljs.core.map.call(null,inst_56942,inst_56943);
var inst_56945 = cljs.core.pr_str.call(null,inst_56944);
var inst_56946 = figwheel.client.utils.log.call(null,inst_56945);
var state_57016__$1 = (function (){var statearr_57074 = state_57016;
(statearr_57074[(31)] = inst_56940);

return statearr_57074;
})();
var statearr_57075_57142 = state_57016__$1;
(statearr_57075_57142[(2)] = inst_56946);

(statearr_57075_57142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (35))){
var state_57016__$1 = state_57016;
var statearr_57076_57143 = state_57016__$1;
(statearr_57076_57143[(2)] = true);

(statearr_57076_57143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (19))){
var inst_56919 = (state_57016[(12)]);
var inst_56925 = figwheel.client.file_reloading.expand_files.call(null,inst_56919);
var state_57016__$1 = state_57016;
var statearr_57077_57144 = state_57016__$1;
(statearr_57077_57144[(2)] = inst_56925);

(statearr_57077_57144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (11))){
var state_57016__$1 = state_57016;
var statearr_57078_57145 = state_57016__$1;
(statearr_57078_57145[(2)] = null);

(statearr_57078_57145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (9))){
var inst_56908 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57079_57146 = state_57016__$1;
(statearr_57079_57146[(2)] = inst_56908);

(statearr_57079_57146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (5))){
var inst_56878 = (state_57016[(7)]);
var inst_56879 = (state_57016[(9)]);
var inst_56881 = (inst_56879 < inst_56878);
var inst_56882 = inst_56881;
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_56882)){
var statearr_57080_57147 = state_57016__$1;
(statearr_57080_57147[(1)] = (7));

} else {
var statearr_57081_57148 = state_57016__$1;
(statearr_57081_57148[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (14))){
var inst_56889 = (state_57016[(22)]);
var inst_56898 = cljs.core.first.call(null,inst_56889);
var inst_56899 = figwheel.client.file_reloading.eval_body.call(null,inst_56898,opts);
var inst_56900 = cljs.core.next.call(null,inst_56889);
var inst_56876 = inst_56900;
var inst_56877 = null;
var inst_56878 = (0);
var inst_56879 = (0);
var state_57016__$1 = (function (){var statearr_57082 = state_57016;
(statearr_57082[(32)] = inst_56899);

(statearr_57082[(7)] = inst_56878);

(statearr_57082[(8)] = inst_56876);

(statearr_57082[(9)] = inst_56879);

(statearr_57082[(10)] = inst_56877);

return statearr_57082;
})();
var statearr_57083_57149 = state_57016__$1;
(statearr_57083_57149[(2)] = null);

(statearr_57083_57149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (45))){
var state_57016__$1 = state_57016;
var statearr_57084_57150 = state_57016__$1;
(statearr_57084_57150[(2)] = null);

(statearr_57084_57150[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (26))){
var inst_56929 = (state_57016[(19)]);
var inst_56932 = (state_57016[(23)]);
var inst_56935 = (state_57016[(26)]);
var inst_56933 = (state_57016[(24)]);
var inst_56937 = (state_57016[(25)]);
var inst_56952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_56954 = (function (){var all_files = inst_56929;
var res_SINGLEQUOTE_ = inst_56932;
var res = inst_56933;
var files_not_loaded = inst_56935;
var dependencies_that_loaded = inst_56937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56952,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56953){
var map__57085 = p__56953;
var map__57085__$1 = ((((!((map__57085 == null)))?((((map__57085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57085):map__57085);
var namespace = cljs.core.get.call(null,map__57085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__57085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56952,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56955 = cljs.core.map.call(null,inst_56954,inst_56933);
var inst_56956 = cljs.core.pr_str.call(null,inst_56955);
var inst_56957 = figwheel.client.utils.log.call(null,inst_56956);
var inst_56958 = (function (){var all_files = inst_56929;
var res_SINGLEQUOTE_ = inst_56932;
var res = inst_56933;
var files_not_loaded = inst_56935;
var dependencies_that_loaded = inst_56937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56952,inst_56954,inst_56955,inst_56956,inst_56957,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56929,inst_56932,inst_56935,inst_56933,inst_56937,inst_56952,inst_56954,inst_56955,inst_56956,inst_56957,state_val_57017,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56959 = setTimeout(inst_56958,(10));
var state_57016__$1 = (function (){var statearr_57087 = state_57016;
(statearr_57087[(33)] = inst_56957);

(statearr_57087[(34)] = inst_56952);

return statearr_57087;
})();
var statearr_57088_57151 = state_57016__$1;
(statearr_57088_57151[(2)] = inst_56959);

(statearr_57088_57151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (16))){
var state_57016__$1 = state_57016;
var statearr_57089_57152 = state_57016__$1;
(statearr_57089_57152[(2)] = reload_dependents);

(statearr_57089_57152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (38))){
var inst_56969 = (state_57016[(16)]);
var inst_56987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56969);
var state_57016__$1 = state_57016;
var statearr_57090_57153 = state_57016__$1;
(statearr_57090_57153[(2)] = inst_56987);

(statearr_57090_57153[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (30))){
var state_57016__$1 = state_57016;
var statearr_57091_57154 = state_57016__$1;
(statearr_57091_57154[(2)] = null);

(statearr_57091_57154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (10))){
var inst_56889 = (state_57016[(22)]);
var inst_56891 = cljs.core.chunked_seq_QMARK_.call(null,inst_56889);
var state_57016__$1 = state_57016;
if(inst_56891){
var statearr_57092_57155 = state_57016__$1;
(statearr_57092_57155[(1)] = (13));

} else {
var statearr_57093_57156 = state_57016__$1;
(statearr_57093_57156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (18))){
var inst_56923 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
if(cljs.core.truth_(inst_56923)){
var statearr_57094_57157 = state_57016__$1;
(statearr_57094_57157[(1)] = (19));

} else {
var statearr_57095_57158 = state_57016__$1;
(statearr_57095_57158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (42))){
var state_57016__$1 = state_57016;
var statearr_57096_57159 = state_57016__$1;
(statearr_57096_57159[(2)] = null);

(statearr_57096_57159[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (37))){
var inst_56982 = (state_57016[(2)]);
var state_57016__$1 = state_57016;
var statearr_57097_57160 = state_57016__$1;
(statearr_57097_57160[(2)] = inst_56982);

(statearr_57097_57160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57017 === (8))){
var inst_56876 = (state_57016[(8)]);
var inst_56889 = (state_57016[(22)]);
var inst_56889__$1 = cljs.core.seq.call(null,inst_56876);
var state_57016__$1 = (function (){var statearr_57098 = state_57016;
(statearr_57098[(22)] = inst_56889__$1);

return statearr_57098;
})();
if(inst_56889__$1){
var statearr_57099_57161 = state_57016__$1;
(statearr_57099_57161[(1)] = (10));

} else {
var statearr_57100_57162 = state_57016__$1;
(statearr_57100_57162[(1)] = (11));

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
});})(c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50715__auto__,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____0 = (function (){
var statearr_57101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57101[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__);

(statearr_57101[(1)] = (1));

return statearr_57101;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____1 = (function (state_57016){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_57016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e57102){if((e57102 instanceof Object)){
var ex__50719__auto__ = e57102;
var statearr_57103_57163 = state_57016;
(statearr_57103_57163[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57164 = state_57016;
state_57016 = G__57164;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__ = function(state_57016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____1.call(this,state_57016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__50805__auto__ = (function (){var statearr_57104 = f__50804__auto__.call(null);
(statearr_57104[(6)] = c__50803__auto__);

return statearr_57104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__,map__56861,map__56861__$1,opts,before_jsload,on_jsload,reload_dependents,map__56862,map__56862__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__50803__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__57167,link){
var map__57168 = p__57167;
var map__57168__$1 = ((((!((map__57168 == null)))?((((map__57168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57168):map__57168);
var file = cljs.core.get.call(null,map__57168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__57168,map__57168__$1,file){
return (function (p1__57165_SHARP_,p2__57166_SHARP_){
if(cljs.core._EQ_.call(null,p1__57165_SHARP_,p2__57166_SHARP_)){
return p1__57165_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__57168,map__57168__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__57171){
var map__57172 = p__57171;
var map__57172__$1 = ((((!((map__57172 == null)))?((((map__57172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57172):map__57172);
var match_length = cljs.core.get.call(null,map__57172__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__57172__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__57170_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__57170_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__57174_SHARP_,p2__57175_SHARP_){
return cljs.core.assoc.call(null,p1__57174_SHARP_,cljs.core.get.call(null,p2__57175_SHARP_,key),p2__57175_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_57176 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_57176);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_57176);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__57177,p__57178){
var map__57179 = p__57177;
var map__57179__$1 = ((((!((map__57179 == null)))?((((map__57179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57179):map__57179);
var on_cssload = cljs.core.get.call(null,map__57179__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__57180 = p__57178;
var map__57180__$1 = ((((!((map__57180 == null)))?((((map__57180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57180):map__57180);
var files_msg = map__57180__$1;
var files = cljs.core.get.call(null,map__57180__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
