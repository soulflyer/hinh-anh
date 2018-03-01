// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.imported !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson047.reagent.v0v7v0.reagent.dom.module = (function mranderson047$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson047.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson047.reagent.v0v7v0.reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return mranderson047.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7895__auto__ = mranderson047.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.roots !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson047.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13352 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_13352){
return (function (){
var _STAR_always_update_STAR_13353 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13353;
}});})(_STAR_always_update_STAR_13352))
);
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13352;
}});
mranderson047.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson047$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v7v0.reagent.dom.render = (function mranderson047$reagent$v0v7v0$reagent$dom$render(var_args){
var G__13355 = arguments.length;
switch (G__13355) {
case 2:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson047$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson047.reagent.v0v7v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson047$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__13357_13361 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots)));
var chunk__13358_13362 = null;
var count__13359_13363 = (0);
var i__13360_13364 = (0);
while(true){
if((i__13360_13364 < count__13359_13363)){
var v_13365 = cljs.core._nth.call(null,chunk__13358_13362,i__13360_13364);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_13365);


var G__13366 = seq__13357_13361;
var G__13367 = chunk__13358_13362;
var G__13368 = count__13359_13363;
var G__13369 = (i__13360_13364 + (1));
seq__13357_13361 = G__13366;
chunk__13358_13362 = G__13367;
count__13359_13363 = G__13368;
i__13360_13364 = G__13369;
continue;
} else {
var temp__4657__auto___13370 = cljs.core.seq.call(null,seq__13357_13361);
if(temp__4657__auto___13370){
var seq__13357_13371__$1 = temp__4657__auto___13370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13357_13371__$1)){
var c__8734__auto___13372 = cljs.core.chunk_first.call(null,seq__13357_13371__$1);
var G__13373 = cljs.core.chunk_rest.call(null,seq__13357_13371__$1);
var G__13374 = c__8734__auto___13372;
var G__13375 = cljs.core.count.call(null,c__8734__auto___13372);
var G__13376 = (0);
seq__13357_13361 = G__13373;
chunk__13358_13362 = G__13374;
count__13359_13363 = G__13375;
i__13360_13364 = G__13376;
continue;
} else {
var v_13377 = cljs.core.first.call(null,seq__13357_13371__$1);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_13377);


var G__13378 = cljs.core.next.call(null,seq__13357_13371__$1);
var G__13379 = null;
var G__13380 = (0);
var G__13381 = (0);
seq__13357_13361 = G__13378;
chunk__13358_13362 = G__13379;
count__13359_13363 = G__13380;
i__13360_13364 = G__13381;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
