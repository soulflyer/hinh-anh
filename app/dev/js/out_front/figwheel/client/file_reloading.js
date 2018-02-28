// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
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
var or__6948__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6948__auto__){
return or__6948__auto__;
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
var or__6948__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
var or__6948__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__6948__auto____$1)){
return or__6948__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__19551_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__19551_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
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
var seq__19556 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__19557 = null;
var count__19558 = (0);
var i__19559 = (0);
while(true){
if((i__19559 < count__19558)){
var n = cljs.core._nth.call(null,chunk__19557,i__19559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19560 = seq__19556;
var G__19561 = chunk__19557;
var G__19562 = count__19558;
var G__19563 = (i__19559 + (1));
seq__19556 = G__19560;
chunk__19557 = G__19561;
count__19558 = G__19562;
i__19559 = G__19563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19556);
if(temp__4657__auto__){
var seq__19556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19556__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19556__$1);
var G__19564 = cljs.core.chunk_rest.call(null,seq__19556__$1);
var G__19565 = c__7767__auto__;
var G__19566 = cljs.core.count.call(null,c__7767__auto__);
var G__19567 = (0);
seq__19556 = G__19564;
chunk__19557 = G__19565;
count__19558 = G__19566;
i__19559 = G__19567;
continue;
} else {
var n = cljs.core.first.call(null,seq__19556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__19568 = cljs.core.next.call(null,seq__19556__$1);
var G__19569 = null;
var G__19570 = (0);
var G__19571 = (0);
seq__19556 = G__19568;
chunk__19557 = G__19569;
count__19558 = G__19570;
i__19559 = G__19571;
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

var seq__19622_19633 = cljs.core.seq.call(null,deps);
var chunk__19623_19634 = null;
var count__19624_19635 = (0);
var i__19625_19636 = (0);
while(true){
if((i__19625_19636 < count__19624_19635)){
var dep_19637 = cljs.core._nth.call(null,chunk__19623_19634,i__19625_19636);
topo_sort_helper_STAR_.call(null,dep_19637,(depth + (1)),state);

var G__19638 = seq__19622_19633;
var G__19639 = chunk__19623_19634;
var G__19640 = count__19624_19635;
var G__19641 = (i__19625_19636 + (1));
seq__19622_19633 = G__19638;
chunk__19623_19634 = G__19639;
count__19624_19635 = G__19640;
i__19625_19636 = G__19641;
continue;
} else {
var temp__4657__auto___19642 = cljs.core.seq.call(null,seq__19622_19633);
if(temp__4657__auto___19642){
var seq__19622_19643__$1 = temp__4657__auto___19642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19622_19643__$1)){
var c__7767__auto___19644 = cljs.core.chunk_first.call(null,seq__19622_19643__$1);
var G__19645 = cljs.core.chunk_rest.call(null,seq__19622_19643__$1);
var G__19646 = c__7767__auto___19644;
var G__19647 = cljs.core.count.call(null,c__7767__auto___19644);
var G__19648 = (0);
seq__19622_19633 = G__19645;
chunk__19623_19634 = G__19646;
count__19624_19635 = G__19647;
i__19625_19636 = G__19648;
continue;
} else {
var dep_19649 = cljs.core.first.call(null,seq__19622_19643__$1);
topo_sort_helper_STAR_.call(null,dep_19649,(depth + (1)),state);

var G__19650 = cljs.core.next.call(null,seq__19622_19643__$1);
var G__19651 = null;
var G__19652 = (0);
var G__19653 = (0);
seq__19622_19633 = G__19650;
chunk__19623_19634 = G__19651;
count__19624_19635 = G__19652;
i__19625_19636 = G__19653;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__19626){
var vec__19630 = p__19626;
var seq__19631 = cljs.core.seq.call(null,vec__19630);
var first__19632 = cljs.core.first.call(null,seq__19631);
var seq__19631__$1 = cljs.core.next.call(null,seq__19631);
var x = first__19632;
var xs = seq__19631__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__19630,seq__19631,first__19632,seq__19631__$1,x,xs,get_deps__$1){
return (function (p1__19572_SHARP_){
return clojure.set.difference.call(null,p1__19572_SHARP_,x);
});})(vec__19630,seq__19631,first__19632,seq__19631__$1,x,xs,get_deps__$1))
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
var seq__19666 = cljs.core.seq.call(null,provides);
var chunk__19667 = null;
var count__19668 = (0);
var i__19669 = (0);
while(true){
if((i__19669 < count__19668)){
var prov = cljs.core._nth.call(null,chunk__19667,i__19669);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19670_19678 = cljs.core.seq.call(null,requires);
var chunk__19671_19679 = null;
var count__19672_19680 = (0);
var i__19673_19681 = (0);
while(true){
if((i__19673_19681 < count__19672_19680)){
var req_19682 = cljs.core._nth.call(null,chunk__19671_19679,i__19673_19681);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19682,prov);

var G__19683 = seq__19670_19678;
var G__19684 = chunk__19671_19679;
var G__19685 = count__19672_19680;
var G__19686 = (i__19673_19681 + (1));
seq__19670_19678 = G__19683;
chunk__19671_19679 = G__19684;
count__19672_19680 = G__19685;
i__19673_19681 = G__19686;
continue;
} else {
var temp__4657__auto___19687 = cljs.core.seq.call(null,seq__19670_19678);
if(temp__4657__auto___19687){
var seq__19670_19688__$1 = temp__4657__auto___19687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19670_19688__$1)){
var c__7767__auto___19689 = cljs.core.chunk_first.call(null,seq__19670_19688__$1);
var G__19690 = cljs.core.chunk_rest.call(null,seq__19670_19688__$1);
var G__19691 = c__7767__auto___19689;
var G__19692 = cljs.core.count.call(null,c__7767__auto___19689);
var G__19693 = (0);
seq__19670_19678 = G__19690;
chunk__19671_19679 = G__19691;
count__19672_19680 = G__19692;
i__19673_19681 = G__19693;
continue;
} else {
var req_19694 = cljs.core.first.call(null,seq__19670_19688__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19694,prov);

var G__19695 = cljs.core.next.call(null,seq__19670_19688__$1);
var G__19696 = null;
var G__19697 = (0);
var G__19698 = (0);
seq__19670_19678 = G__19695;
chunk__19671_19679 = G__19696;
count__19672_19680 = G__19697;
i__19673_19681 = G__19698;
continue;
}
} else {
}
}
break;
}

var G__19699 = seq__19666;
var G__19700 = chunk__19667;
var G__19701 = count__19668;
var G__19702 = (i__19669 + (1));
seq__19666 = G__19699;
chunk__19667 = G__19700;
count__19668 = G__19701;
i__19669 = G__19702;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19666);
if(temp__4657__auto__){
var seq__19666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19666__$1)){
var c__7767__auto__ = cljs.core.chunk_first.call(null,seq__19666__$1);
var G__19703 = cljs.core.chunk_rest.call(null,seq__19666__$1);
var G__19704 = c__7767__auto__;
var G__19705 = cljs.core.count.call(null,c__7767__auto__);
var G__19706 = (0);
seq__19666 = G__19703;
chunk__19667 = G__19704;
count__19668 = G__19705;
i__19669 = G__19706;
continue;
} else {
var prov = cljs.core.first.call(null,seq__19666__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__19674_19707 = cljs.core.seq.call(null,requires);
var chunk__19675_19708 = null;
var count__19676_19709 = (0);
var i__19677_19710 = (0);
while(true){
if((i__19677_19710 < count__19676_19709)){
var req_19711 = cljs.core._nth.call(null,chunk__19675_19708,i__19677_19710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19711,prov);

var G__19712 = seq__19674_19707;
var G__19713 = chunk__19675_19708;
var G__19714 = count__19676_19709;
var G__19715 = (i__19677_19710 + (1));
seq__19674_19707 = G__19712;
chunk__19675_19708 = G__19713;
count__19676_19709 = G__19714;
i__19677_19710 = G__19715;
continue;
} else {
var temp__4657__auto___19716__$1 = cljs.core.seq.call(null,seq__19674_19707);
if(temp__4657__auto___19716__$1){
var seq__19674_19717__$1 = temp__4657__auto___19716__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19674_19717__$1)){
var c__7767__auto___19718 = cljs.core.chunk_first.call(null,seq__19674_19717__$1);
var G__19719 = cljs.core.chunk_rest.call(null,seq__19674_19717__$1);
var G__19720 = c__7767__auto___19718;
var G__19721 = cljs.core.count.call(null,c__7767__auto___19718);
var G__19722 = (0);
seq__19674_19707 = G__19719;
chunk__19675_19708 = G__19720;
count__19676_19709 = G__19721;
i__19677_19710 = G__19722;
continue;
} else {
var req_19723 = cljs.core.first.call(null,seq__19674_19717__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_19723,prov);

var G__19724 = cljs.core.next.call(null,seq__19674_19717__$1);
var G__19725 = null;
var G__19726 = (0);
var G__19727 = (0);
seq__19674_19707 = G__19724;
chunk__19675_19708 = G__19725;
count__19676_19709 = G__19726;
i__19677_19710 = G__19727;
continue;
}
} else {
}
}
break;
}

var G__19728 = cljs.core.next.call(null,seq__19666__$1);
var G__19729 = null;
var G__19730 = (0);
var G__19731 = (0);
seq__19666 = G__19728;
chunk__19667 = G__19729;
count__19668 = G__19730;
i__19669 = G__19731;
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
var seq__19736_19740 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__19737_19741 = null;
var count__19738_19742 = (0);
var i__19739_19743 = (0);
while(true){
if((i__19739_19743 < count__19738_19742)){
var ns_19744 = cljs.core._nth.call(null,chunk__19737_19741,i__19739_19743);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19744);

var G__19745 = seq__19736_19740;
var G__19746 = chunk__19737_19741;
var G__19747 = count__19738_19742;
var G__19748 = (i__19739_19743 + (1));
seq__19736_19740 = G__19745;
chunk__19737_19741 = G__19746;
count__19738_19742 = G__19747;
i__19739_19743 = G__19748;
continue;
} else {
var temp__4657__auto___19749 = cljs.core.seq.call(null,seq__19736_19740);
if(temp__4657__auto___19749){
var seq__19736_19750__$1 = temp__4657__auto___19749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19736_19750__$1)){
var c__7767__auto___19751 = cljs.core.chunk_first.call(null,seq__19736_19750__$1);
var G__19752 = cljs.core.chunk_rest.call(null,seq__19736_19750__$1);
var G__19753 = c__7767__auto___19751;
var G__19754 = cljs.core.count.call(null,c__7767__auto___19751);
var G__19755 = (0);
seq__19736_19740 = G__19752;
chunk__19737_19741 = G__19753;
count__19738_19742 = G__19754;
i__19739_19743 = G__19755;
continue;
} else {
var ns_19756 = cljs.core.first.call(null,seq__19736_19750__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_19756);

var G__19757 = cljs.core.next.call(null,seq__19736_19750__$1);
var G__19758 = null;
var G__19759 = (0);
var G__19760 = (0);
seq__19736_19740 = G__19757;
chunk__19737_19741 = G__19758;
count__19738_19742 = G__19759;
i__19739_19743 = G__19760;
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
goog.require_figwheel_backup_ = (function (){var or__6948__auto__ = goog.require__;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
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
var G__19761__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__19761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19762__i = 0, G__19762__a = new Array(arguments.length -  0);
while (G__19762__i < G__19762__a.length) {G__19762__a[G__19762__i] = arguments[G__19762__i + 0]; ++G__19762__i;}
  args = new cljs.core.IndexedSeq(G__19762__a,0);
} 
return G__19761__delegate.call(this,args);};
G__19761.cljs$lang$maxFixedArity = 0;
G__19761.cljs$lang$applyTo = (function (arglist__19763){
var args = cljs.core.seq(arglist__19763);
return G__19761__delegate(args);
});
G__19761.cljs$core$IFn$_invoke$arity$variadic = G__19761__delegate;
return G__19761;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__19764 = cljs.core._EQ_;
var expr__19765 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__19764.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__19765))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__19764,expr__19765){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__19764,expr__19765))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__19764,expr__19765){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e19767){if((e19767 instanceof Error)){
var e = e19767;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e19767;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__19764,expr__19765))
} else {
if(cljs.core.truth_(pred__19764.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__19765))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__19764.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__19765))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__19764.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__19765))){
return ((function (pred__19764,expr__19765){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e19768){if((e19768 instanceof Error)){
var e = e19768;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e19768;

}
}})());
});
;})(pred__19764,expr__19765))
} else {
return ((function (pred__19764,expr__19765){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__19764,expr__19765))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__19769,callback){
var map__19772 = p__19769;
var map__19772__$1 = ((((!((map__19772 == null)))?((((map__19772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19772):map__19772);
var file_msg = map__19772__$1;
var request_url = cljs.core.get.call(null,map__19772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__19772,map__19772__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__19772,map__19772__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_19796){
var state_val_19797 = (state_19796[(1)]);
if((state_val_19797 === (7))){
var inst_19792 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19798_19818 = state_19796__$1;
(statearr_19798_19818[(2)] = inst_19792);

(statearr_19798_19818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (1))){
var state_19796__$1 = state_19796;
var statearr_19799_19819 = state_19796__$1;
(statearr_19799_19819[(2)] = null);

(statearr_19799_19819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (4))){
var inst_19776 = (state_19796[(7)]);
var inst_19776__$1 = (state_19796[(2)]);
var state_19796__$1 = (function (){var statearr_19800 = state_19796;
(statearr_19800[(7)] = inst_19776__$1);

return statearr_19800;
})();
if(cljs.core.truth_(inst_19776__$1)){
var statearr_19801_19820 = state_19796__$1;
(statearr_19801_19820[(1)] = (5));

} else {
var statearr_19802_19821 = state_19796__$1;
(statearr_19802_19821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (6))){
var state_19796__$1 = state_19796;
var statearr_19803_19822 = state_19796__$1;
(statearr_19803_19822[(2)] = null);

(statearr_19803_19822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (3))){
var inst_19794 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19796__$1,inst_19794);
} else {
if((state_val_19797 === (2))){
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19796__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_19797 === (11))){
var inst_19788 = (state_19796[(2)]);
var state_19796__$1 = (function (){var statearr_19804 = state_19796;
(statearr_19804[(8)] = inst_19788);

return statearr_19804;
})();
var statearr_19805_19823 = state_19796__$1;
(statearr_19805_19823[(2)] = null);

(statearr_19805_19823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (9))){
var inst_19780 = (state_19796[(9)]);
var inst_19782 = (state_19796[(10)]);
var inst_19784 = inst_19782.call(null,inst_19780);
var state_19796__$1 = state_19796;
var statearr_19806_19824 = state_19796__$1;
(statearr_19806_19824[(2)] = inst_19784);

(statearr_19806_19824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (5))){
var inst_19776 = (state_19796[(7)]);
var inst_19778 = figwheel.client.file_reloading.blocking_load.call(null,inst_19776);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19796__$1,(8),inst_19778);
} else {
if((state_val_19797 === (10))){
var inst_19780 = (state_19796[(9)]);
var inst_19786 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_19780);
var state_19796__$1 = state_19796;
var statearr_19807_19825 = state_19796__$1;
(statearr_19807_19825[(2)] = inst_19786);

(statearr_19807_19825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (8))){
var inst_19776 = (state_19796[(7)]);
var inst_19782 = (state_19796[(10)]);
var inst_19780 = (state_19796[(2)]);
var inst_19781 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_19782__$1 = cljs.core.get.call(null,inst_19781,inst_19776);
var state_19796__$1 = (function (){var statearr_19808 = state_19796;
(statearr_19808[(9)] = inst_19780);

(statearr_19808[(10)] = inst_19782__$1);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19782__$1)){
var statearr_19809_19826 = state_19796__$1;
(statearr_19809_19826[(1)] = (9));

} else {
var statearr_19810_19827 = state_19796__$1;
(statearr_19810_19827[(1)] = (10));

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
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__11572__auto__ = null;
var figwheel$client$file_reloading$state_machine__11572__auto____0 = (function (){
var statearr_19814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19814[(0)] = figwheel$client$file_reloading$state_machine__11572__auto__);

(statearr_19814[(1)] = (1));

return statearr_19814;
});
var figwheel$client$file_reloading$state_machine__11572__auto____1 = (function (state_19796){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_19796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e19815){if((e19815 instanceof Object)){
var ex__11575__auto__ = e19815;
var statearr_19816_19828 = state_19796;
(statearr_19816_19828[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19829 = state_19796;
state_19796 = G__19829;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__11572__auto__ = function(state_19796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__11572__auto____1.call(this,state_19796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__11572__auto____0;
figwheel$client$file_reloading$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__11572__auto____1;
return figwheel$client$file_reloading$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_19817 = f__11684__auto__.call(null);
(statearr_19817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_19817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__19830,callback){
var map__19833 = p__19830;
var map__19833__$1 = ((((!((map__19833 == null)))?((((map__19833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19833):map__19833);
var file_msg = map__19833__$1;
var namespace = cljs.core.get.call(null,map__19833__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__19833,map__19833__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__19833,map__19833__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__19835){
var map__19838 = p__19835;
var map__19838__$1 = ((((!((map__19838 == null)))?((((map__19838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19838):map__19838);
var file_msg = map__19838__$1;
var namespace = cljs.core.get.call(null,map__19838__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__19840){
var map__19843 = p__19840;
var map__19843__$1 = ((((!((map__19843 == null)))?((((map__19843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19843):map__19843);
var file_msg = map__19843__$1;
var namespace = cljs.core.get.call(null,map__19843__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6936__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__6936__auto__){
var or__6948__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
var or__6948__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6948__auto____$1)){
return or__6948__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6936__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__19845,callback){
var map__19848 = p__19845;
var map__19848__$1 = ((((!((map__19848 == null)))?((((map__19848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19848):map__19848);
var file_msg = map__19848__$1;
var request_url = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__19848__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__11683__auto___19952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___19952,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___19952,out){
return (function (state_19934){
var state_val_19935 = (state_19934[(1)]);
if((state_val_19935 === (1))){
var inst_19908 = cljs.core.seq.call(null,files);
var inst_19909 = cljs.core.first.call(null,inst_19908);
var inst_19910 = cljs.core.next.call(null,inst_19908);
var inst_19911 = files;
var state_19934__$1 = (function (){var statearr_19936 = state_19934;
(statearr_19936[(7)] = inst_19911);

(statearr_19936[(8)] = inst_19909);

(statearr_19936[(9)] = inst_19910);

return statearr_19936;
})();
var statearr_19937_19953 = state_19934__$1;
(statearr_19937_19953[(2)] = null);

(statearr_19937_19953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (2))){
var inst_19911 = (state_19934[(7)]);
var inst_19917 = (state_19934[(10)]);
var inst_19916 = cljs.core.seq.call(null,inst_19911);
var inst_19917__$1 = cljs.core.first.call(null,inst_19916);
var inst_19918 = cljs.core.next.call(null,inst_19916);
var inst_19919 = (inst_19917__$1 == null);
var inst_19920 = cljs.core.not.call(null,inst_19919);
var state_19934__$1 = (function (){var statearr_19938 = state_19934;
(statearr_19938[(11)] = inst_19918);

(statearr_19938[(10)] = inst_19917__$1);

return statearr_19938;
})();
if(inst_19920){
var statearr_19939_19954 = state_19934__$1;
(statearr_19939_19954[(1)] = (4));

} else {
var statearr_19940_19955 = state_19934__$1;
(statearr_19940_19955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (3))){
var inst_19932 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19934__$1,inst_19932);
} else {
if((state_val_19935 === (4))){
var inst_19917 = (state_19934[(10)]);
var inst_19922 = figwheel.client.file_reloading.reload_js_file.call(null,inst_19917);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19934__$1,(7),inst_19922);
} else {
if((state_val_19935 === (5))){
var inst_19928 = cljs.core.async.close_BANG_.call(null,out);
var state_19934__$1 = state_19934;
var statearr_19941_19956 = state_19934__$1;
(statearr_19941_19956[(2)] = inst_19928);

(statearr_19941_19956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (6))){
var inst_19930 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19942_19957 = state_19934__$1;
(statearr_19942_19957[(2)] = inst_19930);

(statearr_19942_19957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (7))){
var inst_19918 = (state_19934[(11)]);
var inst_19924 = (state_19934[(2)]);
var inst_19925 = cljs.core.async.put_BANG_.call(null,out,inst_19924);
var inst_19911 = inst_19918;
var state_19934__$1 = (function (){var statearr_19943 = state_19934;
(statearr_19943[(7)] = inst_19911);

(statearr_19943[(12)] = inst_19925);

return statearr_19943;
})();
var statearr_19944_19958 = state_19934__$1;
(statearr_19944_19958[(2)] = null);

(statearr_19944_19958[(1)] = (2));


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
});})(c__11683__auto___19952,out))
;
return ((function (switch__11571__auto__,c__11683__auto___19952,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____0 = (function (){
var statearr_19948 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19948[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__);

(statearr_19948[(1)] = (1));

return statearr_19948;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____1 = (function (state_19934){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_19934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e19949){if((e19949 instanceof Object)){
var ex__11575__auto__ = e19949;
var statearr_19950_19959 = state_19934;
(statearr_19950_19959[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19960 = state_19934;
state_19934 = G__19960;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__ = function(state_19934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____1.call(this,state_19934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___19952,out))
})();
var state__11685__auto__ = (function (){var statearr_19951 = f__11684__auto__.call(null);
(statearr_19951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___19952);

return statearr_19951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___19952,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__19961,opts){
var map__19965 = p__19961;
var map__19965__$1 = ((((!((map__19965 == null)))?((((map__19965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19965):map__19965);
var eval_body = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6936__auto__ = eval_body;
if(cljs.core.truth_(and__6936__auto__)){
return typeof eval_body === 'string';
} else {
return and__6936__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e19967){var e = e19967;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__19968_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19968_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__19977){
var vec__19978 = p__19977;
var k = cljs.core.nth.call(null,vec__19978,(0),null);
var v = cljs.core.nth.call(null,vec__19978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__19981){
var vec__19982 = p__19981;
var k = cljs.core.nth.call(null,vec__19982,(0),null);
var v = cljs.core.nth.call(null,vec__19982,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__19988,p__19989){
var map__20237 = p__19988;
var map__20237__$1 = ((((!((map__20237 == null)))?((((map__20237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20237):map__20237);
var opts = map__20237__$1;
var before_jsload = cljs.core.get.call(null,map__20237__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__20237__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__20237__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__20238 = p__19989;
var map__20238__$1 = ((((!((map__20238 == null)))?((((map__20238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20238):map__20238);
var msg = map__20238__$1;
var files = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_20392){
var state_val_20393 = (state_20392[(1)]);
if((state_val_20393 === (7))){
var inst_20252 = (state_20392[(7)]);
var inst_20255 = (state_20392[(8)]);
var inst_20254 = (state_20392[(9)]);
var inst_20253 = (state_20392[(10)]);
var inst_20260 = cljs.core._nth.call(null,inst_20253,inst_20255);
var inst_20261 = figwheel.client.file_reloading.eval_body.call(null,inst_20260,opts);
var inst_20262 = (inst_20255 + (1));
var tmp20394 = inst_20252;
var tmp20395 = inst_20254;
var tmp20396 = inst_20253;
var inst_20252__$1 = tmp20394;
var inst_20253__$1 = tmp20396;
var inst_20254__$1 = tmp20395;
var inst_20255__$1 = inst_20262;
var state_20392__$1 = (function (){var statearr_20397 = state_20392;
(statearr_20397[(7)] = inst_20252__$1);

(statearr_20397[(8)] = inst_20255__$1);

(statearr_20397[(9)] = inst_20254__$1);

(statearr_20397[(11)] = inst_20261);

(statearr_20397[(10)] = inst_20253__$1);

return statearr_20397;
})();
var statearr_20398_20484 = state_20392__$1;
(statearr_20398_20484[(2)] = null);

(statearr_20398_20484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (20))){
var inst_20295 = (state_20392[(12)]);
var inst_20303 = figwheel.client.file_reloading.sort_files.call(null,inst_20295);
var state_20392__$1 = state_20392;
var statearr_20399_20485 = state_20392__$1;
(statearr_20399_20485[(2)] = inst_20303);

(statearr_20399_20485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (27))){
var state_20392__$1 = state_20392;
var statearr_20400_20486 = state_20392__$1;
(statearr_20400_20486[(2)] = null);

(statearr_20400_20486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (1))){
var inst_20244 = (state_20392[(13)]);
var inst_20241 = before_jsload.call(null,files);
var inst_20242 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_20243 = (function (){return ((function (inst_20244,inst_20241,inst_20242,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19985_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19985_SHARP_);
});
;})(inst_20244,inst_20241,inst_20242,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20244__$1 = cljs.core.filter.call(null,inst_20243,files);
var inst_20245 = cljs.core.not_empty.call(null,inst_20244__$1);
var state_20392__$1 = (function (){var statearr_20401 = state_20392;
(statearr_20401[(14)] = inst_20241);

(statearr_20401[(13)] = inst_20244__$1);

(statearr_20401[(15)] = inst_20242);

return statearr_20401;
})();
if(cljs.core.truth_(inst_20245)){
var statearr_20402_20487 = state_20392__$1;
(statearr_20402_20487[(1)] = (2));

} else {
var statearr_20403_20488 = state_20392__$1;
(statearr_20403_20488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (24))){
var state_20392__$1 = state_20392;
var statearr_20404_20489 = state_20392__$1;
(statearr_20404_20489[(2)] = null);

(statearr_20404_20489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (39))){
var inst_20345 = (state_20392[(16)]);
var state_20392__$1 = state_20392;
var statearr_20405_20490 = state_20392__$1;
(statearr_20405_20490[(2)] = inst_20345);

(statearr_20405_20490[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (46))){
var inst_20387 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20406_20491 = state_20392__$1;
(statearr_20406_20491[(2)] = inst_20387);

(statearr_20406_20491[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (4))){
var inst_20289 = (state_20392[(2)]);
var inst_20290 = cljs.core.List.EMPTY;
var inst_20291 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_20290);
var inst_20292 = (function (){return ((function (inst_20289,inst_20290,inst_20291,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19986_SHARP_){
var and__6936__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19986_SHARP_);
if(cljs.core.truth_(and__6936__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19986_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__19986_SHARP_)));
} else {
return and__6936__auto__;
}
});
;})(inst_20289,inst_20290,inst_20291,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20293 = cljs.core.filter.call(null,inst_20292,files);
var inst_20294 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_20295 = cljs.core.concat.call(null,inst_20293,inst_20294);
var state_20392__$1 = (function (){var statearr_20407 = state_20392;
(statearr_20407[(12)] = inst_20295);

(statearr_20407[(17)] = inst_20291);

(statearr_20407[(18)] = inst_20289);

return statearr_20407;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_20408_20492 = state_20392__$1;
(statearr_20408_20492[(1)] = (16));

} else {
var statearr_20409_20493 = state_20392__$1;
(statearr_20409_20493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (15))){
var inst_20279 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20410_20494 = state_20392__$1;
(statearr_20410_20494[(2)] = inst_20279);

(statearr_20410_20494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (21))){
var inst_20305 = (state_20392[(19)]);
var inst_20305__$1 = (state_20392[(2)]);
var inst_20306 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20305__$1);
var state_20392__$1 = (function (){var statearr_20411 = state_20392;
(statearr_20411[(19)] = inst_20305__$1);

return statearr_20411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20392__$1,(22),inst_20306);
} else {
if((state_val_20393 === (31))){
var inst_20390 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20392__$1,inst_20390);
} else {
if((state_val_20393 === (32))){
var inst_20345 = (state_20392[(16)]);
var inst_20350 = inst_20345.cljs$lang$protocol_mask$partition0$;
var inst_20351 = (inst_20350 & (64));
var inst_20352 = inst_20345.cljs$core$ISeq$;
var inst_20353 = (cljs.core.PROTOCOL_SENTINEL === inst_20352);
var inst_20354 = (inst_20351) || (inst_20353);
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20354)){
var statearr_20412_20495 = state_20392__$1;
(statearr_20412_20495[(1)] = (35));

} else {
var statearr_20413_20496 = state_20392__$1;
(statearr_20413_20496[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (40))){
var inst_20367 = (state_20392[(20)]);
var inst_20366 = (state_20392[(2)]);
var inst_20367__$1 = cljs.core.get.call(null,inst_20366,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_20368 = cljs.core.get.call(null,inst_20366,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_20369 = cljs.core.not_empty.call(null,inst_20367__$1);
var state_20392__$1 = (function (){var statearr_20414 = state_20392;
(statearr_20414[(20)] = inst_20367__$1);

(statearr_20414[(21)] = inst_20368);

return statearr_20414;
})();
if(cljs.core.truth_(inst_20369)){
var statearr_20415_20497 = state_20392__$1;
(statearr_20415_20497[(1)] = (41));

} else {
var statearr_20416_20498 = state_20392__$1;
(statearr_20416_20498[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (33))){
var state_20392__$1 = state_20392;
var statearr_20417_20499 = state_20392__$1;
(statearr_20417_20499[(2)] = false);

(statearr_20417_20499[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (13))){
var inst_20265 = (state_20392[(22)]);
var inst_20269 = cljs.core.chunk_first.call(null,inst_20265);
var inst_20270 = cljs.core.chunk_rest.call(null,inst_20265);
var inst_20271 = cljs.core.count.call(null,inst_20269);
var inst_20252 = inst_20270;
var inst_20253 = inst_20269;
var inst_20254 = inst_20271;
var inst_20255 = (0);
var state_20392__$1 = (function (){var statearr_20418 = state_20392;
(statearr_20418[(7)] = inst_20252);

(statearr_20418[(8)] = inst_20255);

(statearr_20418[(9)] = inst_20254);

(statearr_20418[(10)] = inst_20253);

return statearr_20418;
})();
var statearr_20419_20500 = state_20392__$1;
(statearr_20419_20500[(2)] = null);

(statearr_20419_20500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (22))){
var inst_20309 = (state_20392[(23)]);
var inst_20305 = (state_20392[(19)]);
var inst_20308 = (state_20392[(24)]);
var inst_20313 = (state_20392[(25)]);
var inst_20308__$1 = (state_20392[(2)]);
var inst_20309__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20308__$1);
var inst_20310 = (function (){var all_files = inst_20305;
var res_SINGLEQUOTE_ = inst_20308__$1;
var res = inst_20309__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_20309,inst_20305,inst_20308,inst_20313,inst_20308__$1,inst_20309__$1,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__19987_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__19987_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_20309,inst_20305,inst_20308,inst_20313,inst_20308__$1,inst_20309__$1,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20311 = cljs.core.filter.call(null,inst_20310,inst_20308__$1);
var inst_20312 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_20313__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20312);
var inst_20314 = cljs.core.not_empty.call(null,inst_20313__$1);
var state_20392__$1 = (function (){var statearr_20420 = state_20392;
(statearr_20420[(23)] = inst_20309__$1);

(statearr_20420[(24)] = inst_20308__$1);

(statearr_20420[(26)] = inst_20311);

(statearr_20420[(25)] = inst_20313__$1);

return statearr_20420;
})();
if(cljs.core.truth_(inst_20314)){
var statearr_20421_20501 = state_20392__$1;
(statearr_20421_20501[(1)] = (23));

} else {
var statearr_20422_20502 = state_20392__$1;
(statearr_20422_20502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (36))){
var state_20392__$1 = state_20392;
var statearr_20423_20503 = state_20392__$1;
(statearr_20423_20503[(2)] = false);

(statearr_20423_20503[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (41))){
var inst_20367 = (state_20392[(20)]);
var inst_20371 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_20372 = cljs.core.map.call(null,inst_20371,inst_20367);
var inst_20373 = cljs.core.pr_str.call(null,inst_20372);
var inst_20374 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20373)].join('');
var inst_20375 = figwheel.client.utils.log.call(null,inst_20374);
var state_20392__$1 = state_20392;
var statearr_20424_20504 = state_20392__$1;
(statearr_20424_20504[(2)] = inst_20375);

(statearr_20424_20504[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (43))){
var inst_20368 = (state_20392[(21)]);
var inst_20378 = (state_20392[(2)]);
var inst_20379 = cljs.core.not_empty.call(null,inst_20368);
var state_20392__$1 = (function (){var statearr_20425 = state_20392;
(statearr_20425[(27)] = inst_20378);

return statearr_20425;
})();
if(cljs.core.truth_(inst_20379)){
var statearr_20426_20505 = state_20392__$1;
(statearr_20426_20505[(1)] = (44));

} else {
var statearr_20427_20506 = state_20392__$1;
(statearr_20427_20506[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (29))){
var inst_20309 = (state_20392[(23)]);
var inst_20345 = (state_20392[(16)]);
var inst_20305 = (state_20392[(19)]);
var inst_20308 = (state_20392[(24)]);
var inst_20311 = (state_20392[(26)]);
var inst_20313 = (state_20392[(25)]);
var inst_20341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_20344 = (function (){var all_files = inst_20305;
var res_SINGLEQUOTE_ = inst_20308;
var res = inst_20309;
var files_not_loaded = inst_20311;
var dependencies_that_loaded = inst_20313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20345,inst_20305,inst_20308,inst_20311,inst_20313,inst_20341,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20343){
var map__20428 = p__20343;
var map__20428__$1 = ((((!((map__20428 == null)))?((((map__20428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20428):map__20428);
var namespace = cljs.core.get.call(null,map__20428__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20345,inst_20305,inst_20308,inst_20311,inst_20313,inst_20341,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20345__$1 = cljs.core.group_by.call(null,inst_20344,inst_20311);
var inst_20347 = (inst_20345__$1 == null);
var inst_20348 = cljs.core.not.call(null,inst_20347);
var state_20392__$1 = (function (){var statearr_20430 = state_20392;
(statearr_20430[(16)] = inst_20345__$1);

(statearr_20430[(28)] = inst_20341);

return statearr_20430;
})();
if(inst_20348){
var statearr_20431_20507 = state_20392__$1;
(statearr_20431_20507[(1)] = (32));

} else {
var statearr_20432_20508 = state_20392__$1;
(statearr_20432_20508[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (44))){
var inst_20368 = (state_20392[(21)]);
var inst_20381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20368);
var inst_20382 = cljs.core.pr_str.call(null,inst_20381);
var inst_20383 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20382)].join('');
var inst_20384 = figwheel.client.utils.log.call(null,inst_20383);
var state_20392__$1 = state_20392;
var statearr_20433_20509 = state_20392__$1;
(statearr_20433_20509[(2)] = inst_20384);

(statearr_20433_20509[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (6))){
var inst_20286 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20434_20510 = state_20392__$1;
(statearr_20434_20510[(2)] = inst_20286);

(statearr_20434_20510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (28))){
var inst_20311 = (state_20392[(26)]);
var inst_20338 = (state_20392[(2)]);
var inst_20339 = cljs.core.not_empty.call(null,inst_20311);
var state_20392__$1 = (function (){var statearr_20435 = state_20392;
(statearr_20435[(29)] = inst_20338);

return statearr_20435;
})();
if(cljs.core.truth_(inst_20339)){
var statearr_20436_20511 = state_20392__$1;
(statearr_20436_20511[(1)] = (29));

} else {
var statearr_20437_20512 = state_20392__$1;
(statearr_20437_20512[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (25))){
var inst_20309 = (state_20392[(23)]);
var inst_20325 = (state_20392[(2)]);
var inst_20326 = cljs.core.not_empty.call(null,inst_20309);
var state_20392__$1 = (function (){var statearr_20438 = state_20392;
(statearr_20438[(30)] = inst_20325);

return statearr_20438;
})();
if(cljs.core.truth_(inst_20326)){
var statearr_20439_20513 = state_20392__$1;
(statearr_20439_20513[(1)] = (26));

} else {
var statearr_20440_20514 = state_20392__$1;
(statearr_20440_20514[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (34))){
var inst_20361 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20361)){
var statearr_20441_20515 = state_20392__$1;
(statearr_20441_20515[(1)] = (38));

} else {
var statearr_20442_20516 = state_20392__$1;
(statearr_20442_20516[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (17))){
var state_20392__$1 = state_20392;
var statearr_20443_20517 = state_20392__$1;
(statearr_20443_20517[(2)] = recompile_dependents);

(statearr_20443_20517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (3))){
var state_20392__$1 = state_20392;
var statearr_20444_20518 = state_20392__$1;
(statearr_20444_20518[(2)] = null);

(statearr_20444_20518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (12))){
var inst_20282 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20445_20519 = state_20392__$1;
(statearr_20445_20519[(2)] = inst_20282);

(statearr_20445_20519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (2))){
var inst_20244 = (state_20392[(13)]);
var inst_20251 = cljs.core.seq.call(null,inst_20244);
var inst_20252 = inst_20251;
var inst_20253 = null;
var inst_20254 = (0);
var inst_20255 = (0);
var state_20392__$1 = (function (){var statearr_20446 = state_20392;
(statearr_20446[(7)] = inst_20252);

(statearr_20446[(8)] = inst_20255);

(statearr_20446[(9)] = inst_20254);

(statearr_20446[(10)] = inst_20253);

return statearr_20446;
})();
var statearr_20447_20520 = state_20392__$1;
(statearr_20447_20520[(2)] = null);

(statearr_20447_20520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (23))){
var inst_20309 = (state_20392[(23)]);
var inst_20305 = (state_20392[(19)]);
var inst_20308 = (state_20392[(24)]);
var inst_20311 = (state_20392[(26)]);
var inst_20313 = (state_20392[(25)]);
var inst_20316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_20318 = (function (){var all_files = inst_20305;
var res_SINGLEQUOTE_ = inst_20308;
var res = inst_20309;
var files_not_loaded = inst_20311;
var dependencies_that_loaded = inst_20313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20316,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20317){
var map__20448 = p__20317;
var map__20448__$1 = ((((!((map__20448 == null)))?((((map__20448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20448):map__20448);
var request_url = cljs.core.get.call(null,map__20448__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20316,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20319 = cljs.core.reverse.call(null,inst_20313);
var inst_20320 = cljs.core.map.call(null,inst_20318,inst_20319);
var inst_20321 = cljs.core.pr_str.call(null,inst_20320);
var inst_20322 = figwheel.client.utils.log.call(null,inst_20321);
var state_20392__$1 = (function (){var statearr_20450 = state_20392;
(statearr_20450[(31)] = inst_20316);

return statearr_20450;
})();
var statearr_20451_20521 = state_20392__$1;
(statearr_20451_20521[(2)] = inst_20322);

(statearr_20451_20521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (35))){
var state_20392__$1 = state_20392;
var statearr_20452_20522 = state_20392__$1;
(statearr_20452_20522[(2)] = true);

(statearr_20452_20522[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (19))){
var inst_20295 = (state_20392[(12)]);
var inst_20301 = figwheel.client.file_reloading.expand_files.call(null,inst_20295);
var state_20392__$1 = state_20392;
var statearr_20453_20523 = state_20392__$1;
(statearr_20453_20523[(2)] = inst_20301);

(statearr_20453_20523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (11))){
var state_20392__$1 = state_20392;
var statearr_20454_20524 = state_20392__$1;
(statearr_20454_20524[(2)] = null);

(statearr_20454_20524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (9))){
var inst_20284 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20455_20525 = state_20392__$1;
(statearr_20455_20525[(2)] = inst_20284);

(statearr_20455_20525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (5))){
var inst_20255 = (state_20392[(8)]);
var inst_20254 = (state_20392[(9)]);
var inst_20257 = (inst_20255 < inst_20254);
var inst_20258 = inst_20257;
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20258)){
var statearr_20456_20526 = state_20392__$1;
(statearr_20456_20526[(1)] = (7));

} else {
var statearr_20457_20527 = state_20392__$1;
(statearr_20457_20527[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (14))){
var inst_20265 = (state_20392[(22)]);
var inst_20274 = cljs.core.first.call(null,inst_20265);
var inst_20275 = figwheel.client.file_reloading.eval_body.call(null,inst_20274,opts);
var inst_20276 = cljs.core.next.call(null,inst_20265);
var inst_20252 = inst_20276;
var inst_20253 = null;
var inst_20254 = (0);
var inst_20255 = (0);
var state_20392__$1 = (function (){var statearr_20458 = state_20392;
(statearr_20458[(7)] = inst_20252);

(statearr_20458[(8)] = inst_20255);

(statearr_20458[(32)] = inst_20275);

(statearr_20458[(9)] = inst_20254);

(statearr_20458[(10)] = inst_20253);

return statearr_20458;
})();
var statearr_20459_20528 = state_20392__$1;
(statearr_20459_20528[(2)] = null);

(statearr_20459_20528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (45))){
var state_20392__$1 = state_20392;
var statearr_20460_20529 = state_20392__$1;
(statearr_20460_20529[(2)] = null);

(statearr_20460_20529[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (26))){
var inst_20309 = (state_20392[(23)]);
var inst_20305 = (state_20392[(19)]);
var inst_20308 = (state_20392[(24)]);
var inst_20311 = (state_20392[(26)]);
var inst_20313 = (state_20392[(25)]);
var inst_20328 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_20330 = (function (){var all_files = inst_20305;
var res_SINGLEQUOTE_ = inst_20308;
var res = inst_20309;
var files_not_loaded = inst_20311;
var dependencies_that_loaded = inst_20313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20328,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20329){
var map__20461 = p__20329;
var map__20461__$1 = ((((!((map__20461 == null)))?((((map__20461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20461):map__20461);
var namespace = cljs.core.get.call(null,map__20461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__20461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20328,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20331 = cljs.core.map.call(null,inst_20330,inst_20309);
var inst_20332 = cljs.core.pr_str.call(null,inst_20331);
var inst_20333 = figwheel.client.utils.log.call(null,inst_20332);
var inst_20334 = (function (){var all_files = inst_20305;
var res_SINGLEQUOTE_ = inst_20308;
var res = inst_20309;
var files_not_loaded = inst_20311;
var dependencies_that_loaded = inst_20313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20328,inst_20330,inst_20331,inst_20332,inst_20333,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20309,inst_20305,inst_20308,inst_20311,inst_20313,inst_20328,inst_20330,inst_20331,inst_20332,inst_20333,state_val_20393,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20335 = setTimeout(inst_20334,(10));
var state_20392__$1 = (function (){var statearr_20463 = state_20392;
(statearr_20463[(33)] = inst_20328);

(statearr_20463[(34)] = inst_20333);

return statearr_20463;
})();
var statearr_20464_20530 = state_20392__$1;
(statearr_20464_20530[(2)] = inst_20335);

(statearr_20464_20530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (16))){
var state_20392__$1 = state_20392;
var statearr_20465_20531 = state_20392__$1;
(statearr_20465_20531[(2)] = reload_dependents);

(statearr_20465_20531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (38))){
var inst_20345 = (state_20392[(16)]);
var inst_20363 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20345);
var state_20392__$1 = state_20392;
var statearr_20466_20532 = state_20392__$1;
(statearr_20466_20532[(2)] = inst_20363);

(statearr_20466_20532[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (30))){
var state_20392__$1 = state_20392;
var statearr_20467_20533 = state_20392__$1;
(statearr_20467_20533[(2)] = null);

(statearr_20467_20533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (10))){
var inst_20265 = (state_20392[(22)]);
var inst_20267 = cljs.core.chunked_seq_QMARK_.call(null,inst_20265);
var state_20392__$1 = state_20392;
if(inst_20267){
var statearr_20468_20534 = state_20392__$1;
(statearr_20468_20534[(1)] = (13));

} else {
var statearr_20469_20535 = state_20392__$1;
(statearr_20469_20535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (18))){
var inst_20299 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
if(cljs.core.truth_(inst_20299)){
var statearr_20470_20536 = state_20392__$1;
(statearr_20470_20536[(1)] = (19));

} else {
var statearr_20471_20537 = state_20392__$1;
(statearr_20471_20537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (42))){
var state_20392__$1 = state_20392;
var statearr_20472_20538 = state_20392__$1;
(statearr_20472_20538[(2)] = null);

(statearr_20472_20538[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (37))){
var inst_20358 = (state_20392[(2)]);
var state_20392__$1 = state_20392;
var statearr_20473_20539 = state_20392__$1;
(statearr_20473_20539[(2)] = inst_20358);

(statearr_20473_20539[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20393 === (8))){
var inst_20252 = (state_20392[(7)]);
var inst_20265 = (state_20392[(22)]);
var inst_20265__$1 = cljs.core.seq.call(null,inst_20252);
var state_20392__$1 = (function (){var statearr_20474 = state_20392;
(statearr_20474[(22)] = inst_20265__$1);

return statearr_20474;
})();
if(inst_20265__$1){
var statearr_20475_20540 = state_20392__$1;
(statearr_20475_20540[(1)] = (10));

} else {
var statearr_20476_20541 = state_20392__$1;
(statearr_20476_20541[(1)] = (11));

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
});})(c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__11571__auto__,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____0 = (function (){
var statearr_20480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20480[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__);

(statearr_20480[(1)] = (1));

return statearr_20480;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____1 = (function (state_20392){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_20392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e20481){if((e20481 instanceof Object)){
var ex__11575__auto__ = e20481;
var statearr_20482_20542 = state_20392;
(statearr_20482_20542[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20543 = state_20392;
state_20392 = G__20543;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__ = function(state_20392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____1.call(this,state_20392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__11685__auto__ = (function (){var statearr_20483 = f__11684__auto__.call(null);
(statearr_20483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_20483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__,map__20237,map__20237__$1,opts,before_jsload,on_jsload,reload_dependents,map__20238,map__20238__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__11683__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__20546,link){
var map__20549 = p__20546;
var map__20549__$1 = ((((!((map__20549 == null)))?((((map__20549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20549):map__20549);
var file = cljs.core.get.call(null,map__20549__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__20549,map__20549__$1,file){
return (function (p1__20544_SHARP_,p2__20545_SHARP_){
if(cljs.core._EQ_.call(null,p1__20544_SHARP_,p2__20545_SHARP_)){
return p1__20544_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__20549,map__20549__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__20555){
var map__20556 = p__20555;
var map__20556__$1 = ((((!((map__20556 == null)))?((((map__20556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20556):map__20556);
var match_length = cljs.core.get.call(null,map__20556__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__20556__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__20551_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__20551_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__20558_SHARP_,p2__20559_SHARP_){
return cljs.core.assoc.call(null,p1__20558_SHARP_,cljs.core.get.call(null,p2__20559_SHARP_,key),p2__20559_SHARP_);
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
var loaded_f_datas_20560 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_20560);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_20560);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__20561,p__20562){
var map__20567 = p__20561;
var map__20567__$1 = ((((!((map__20567 == null)))?((((map__20567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20567):map__20567);
var on_cssload = cljs.core.get.call(null,map__20567__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__20568 = p__20562;
var map__20568__$1 = ((((!((map__20568 == null)))?((((map__20568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20568):map__20568);
var files_msg = map__20568__$1;
var files = cljs.core.get.call(null,map__20568__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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