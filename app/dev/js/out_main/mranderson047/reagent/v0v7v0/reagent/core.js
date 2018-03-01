// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('mranderson047.reagent.v0v7v0.reagent.core');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.component');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
goog.require('mranderson047.reagent.v0v7v0.reagent.dom');
mranderson047.reagent.v0v7v0.reagent.core.is_client = mranderson047.reagent.v0v7v0.reagent.impl.util.is_client;
mranderson047.reagent.v0v7v0.reagent.core.react = mranderson047.reagent.v0v7v0.reagent.impl.util.react;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
mranderson047.reagent.v0v7v0.reagent.core.create_element = (function mranderson047$reagent$v0v7v0$reagent$core$create_element(var_args){
var G__13404 = arguments.length;
switch (G__13404) {
case 1:
return mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9076__auto__ = [];
var len__9057__auto___13406 = arguments.length;
var i__9058__auto___13407 = (0);
while(true){
if((i__9058__auto___13407 < len__9057__auto___13406)){
args_arr__9076__auto__.push((arguments[i__9058__auto___13407]));

var G__13408 = (i__9058__auto___13407 + (1));
i__9058__auto___13407 = G__13408;
continue;
} else {
}
break;
}

var argseq__9077__auto__ = (new cljs.core.IndexedSeq(args_arr__9076__auto__.slice((3)),(0),null));
return mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9077__auto__);

}
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return mranderson047.reagent.v0v7v0.reagent.core.create_element.call(null,type,null);
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){

return (mranderson047.reagent.v0v7v0.reagent.core.react["createElement"])(type,props);
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){

return (mranderson047.reagent.v0v7v0.reagent.core.react["createElement"])(type,props,child);
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){

return cljs.core.apply.call(null,(mranderson047.reagent.v0v7v0.reagent.core.react["createElement"]),type,props,child,children);
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq13400){
var G__13401 = cljs.core.first.call(null,seq13400);
var seq13400__$1 = cljs.core.next.call(null,seq13400);
var G__13402 = cljs.core.first.call(null,seq13400__$1);
var seq13400__$2 = cljs.core.next.call(null,seq13400__$1);
var G__13403 = cljs.core.first.call(null,seq13400__$2);
var seq13400__$3 = cljs.core.next.call(null,seq13400__$2);
return mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__13401,G__13402,G__13403,seq13400__$3);
});

mranderson047.reagent.v0v7v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
mranderson047.reagent.v0v7v0.reagent.core.as_element = (function mranderson047$reagent$v0v7v0$reagent$core$as_element(form){
return mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
mranderson047.reagent.v0v7v0.reagent.core.adapt_react_class = (function mranderson047$reagent$v0v7v0$reagent$core$adapt_react_class(c){

return mranderson047.reagent.v0v7v0.reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
mranderson047.reagent.v0v7v0.reagent.core.reactify_component = (function mranderson047$reagent$v0v7v0$reagent$core$reactify_component(c){

return mranderson047.reagent.v0v7v0.reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v7v0.reagent.core.render = (function mranderson047$reagent$v0v7v0$reagent$core$render(var_args){
var G__13410 = arguments.length;
switch (G__13410) {
case 2:
return mranderson047.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render.call(null,comp,container);
});

mranderson047.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return mranderson047.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,callback);
});

mranderson047.reagent.v0v7v0.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
mranderson047.reagent.v0v7v0.reagent.core.unmount_component_at_node = (function mranderson047$reagent$v0v7v0$reagent$core$unmount_component_at_node(container){
return mranderson047.reagent.v0v7v0.reagent.dom.unmount_component_at_node.call(null,container);
});
mranderson047.reagent.v0v7v0.reagent.core.as_component = mranderson047.reagent.v0v7v0.reagent.core.as_element;
mranderson047.reagent.v0v7v0.reagent.core.render_component = mranderson047.reagent.v0v7v0.reagent.core.render;
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
mranderson047.reagent.v0v7v0.reagent.core.force_update_all = (function mranderson047$reagent$v0v7v0$reagent$core$force_update_all(){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

mranderson047.reagent.v0v7v0.reagent.dom.force_update_all.call(null);

return mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);
});
goog.exportSymbol('mranderson047.reagent.v0v7v0.reagent.core.force_update_all', mranderson047.reagent.v0v7v0.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
mranderson047.reagent.v0v7v0.reagent.core.create_class = (function mranderson047$reagent$v0v7v0$reagent$core$create_class(spec){
return mranderson047.reagent.v0v7v0.reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
mranderson047.reagent.v0v7v0.reagent.core.current_component = (function mranderson047$reagent$v0v7v0$reagent$core$current_component(){
return mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
mranderson047.reagent.v0v7v0.reagent.core.state_atom = (function mranderson047$reagent$v0v7v0$reagent$core$state_atom(this$){

return mranderson047.reagent.v0v7v0.reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
mranderson047.reagent.v0v7v0.reagent.core.state = (function mranderson047$reagent$v0v7v0$reagent$core$state(this$){

return cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
mranderson047.reagent.v0v7v0.reagent.core.replace_state = (function mranderson047$reagent$v0v7v0$reagent$core$replace_state(this$,new_state){


return cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
mranderson047.reagent.v0v7v0.reagent.core.set_state = (function mranderson047$reagent$v0v7v0$reagent$core$set_state(this$,new_state){


return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
mranderson047.reagent.v0v7v0.reagent.core.force_update = (function mranderson047$reagent$v0v7v0$reagent$core$force_update(var_args){
var G__13413 = arguments.length;
switch (G__13413) {
case 1:
return mranderson047.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return mranderson047.reagent.v0v7v0.reagent.core.force_update.call(null,this$,false);
});

mranderson047.reagent.v0v7v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

mranderson047.reagent.v0v7v0.reagent.impl.util.force_update.call(null,this$,deep);

return mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);
});

mranderson047.reagent.v0v7v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
mranderson047.reagent.v0v7v0.reagent.core.props = (function mranderson047$reagent$v0v7v0$reagent$core$props(this$){

return mranderson047.reagent.v0v7v0.reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
mranderson047.reagent.v0v7v0.reagent.core.children = (function mranderson047$reagent$v0v7v0$reagent$core$children(this$){

return mranderson047.reagent.v0v7v0.reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
mranderson047.reagent.v0v7v0.reagent.core.argv = (function mranderson047$reagent$v0v7v0$reagent$core$argv(this$){

return mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v7v0.reagent.core.dom_node = (function mranderson047$reagent$v0v7v0$reagent$core$dom_node(this$){
return mranderson047.reagent.v0v7v0.reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
mranderson047.reagent.v0v7v0.reagent.core.merge_props = (function mranderson047$reagent$v0v7v0$reagent$core$merge_props(defaults,props){
return mranderson047.reagent.v0v7v0.reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
mranderson047.reagent.v0v7v0.reagent.core.flush = (function mranderson047$reagent$v0v7v0$reagent$core$flush(){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
mranderson047.reagent.v0v7v0.reagent.core.atom = (function mranderson047$reagent$v0v7v0$reagent$core$atom(var_args){
var G__13418 = arguments.length;
switch (G__13418) {
case 1:
return mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__9076__auto__ = [];
var len__9057__auto___13420 = arguments.length;
var i__9058__auto___13421 = (0);
while(true){
if((i__9058__auto___13421 < len__9057__auto___13420)){
args_arr__9076__auto__.push((arguments[i__9058__auto___13421]));

var G__13422 = (i__9058__auto___13421 + (1));
i__9058__auto___13421 = G__13422;
continue;
} else {
}
break;
}

var argseq__9077__auto__ = (new cljs.core.IndexedSeq(args_arr__9076__auto__.slice((1)),(0),null));
return mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9077__auto__);

}
});

mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,x);
});

mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.atom,x,rest);
});

mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$lang$applyTo = (function (seq13416){
var G__13417 = cljs.core.first.call(null,seq13416);
var seq13416__$1 = cljs.core.next.call(null,seq13416);
return mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__13417,seq13416__$1);
});

mranderson047.reagent.v0v7v0.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
mranderson047.reagent.v0v7v0.reagent.core.track = (function mranderson047$reagent$v0v7v0$reagent$core$track(var_args){
var args__9064__auto__ = [];
var len__9057__auto___13425 = arguments.length;
var i__9058__auto___13426 = (0);
while(true){
if((i__9058__auto___13426 < len__9057__auto___13425)){
args__9064__auto__.push((arguments[i__9058__auto___13426]));

var G__13427 = (i__9058__auto___13426 + (1));
i__9058__auto___13426 = G__13427;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.reagent.v0v7v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
});

mranderson047.reagent.v0v7v0.reagent.core.track.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.core.track.cljs$lang$applyTo = (function (seq13423){
var G__13424 = cljs.core.first.call(null,seq13423);
var seq13423__$1 = cljs.core.next.call(null,seq13423);
return mranderson047.reagent.v0v7v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(G__13424,seq13423__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
mranderson047.reagent.v0v7v0.reagent.core.track_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$core$track_BANG_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___13430 = arguments.length;
var i__9058__auto___13431 = (0);
while(true){
if((i__9058__auto___13431 < len__9057__auto___13430)){
args__9064__auto__.push((arguments[i__9058__auto___13431]));

var G__13432 = (i__9058__auto___13431 + (1));
i__9058__auto___13431 = G__13432;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.reagent.v0v7v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track_BANG_.call(null,f,args);
});

mranderson047.reagent.v0v7v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq13428){
var G__13429 = cljs.core.first.call(null,seq13428);
var seq13428__$1 = cljs.core.next.call(null,seq13428);
return mranderson047.reagent.v0v7v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13429,seq13428__$1);
});

/**
 * Stop the result of track! from updating.
 */
mranderson047.reagent.v0v7v0.reagent.core.dispose_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$core$dispose_BANG_(x){
return mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
mranderson047.reagent.v0v7v0.reagent.core.wrap = (function mranderson047$reagent$v0v7v0$reagent$core$wrap(var_args){
var args__9064__auto__ = [];
var len__9057__auto___13436 = arguments.length;
var i__9058__auto___13437 = (0);
while(true){
if((i__9058__auto___13437 < len__9057__auto___13436)){
args__9064__auto__.push((arguments[i__9058__auto___13437]));

var G__13438 = (i__9058__auto___13437 + (1));
i__9058__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

mranderson047.reagent.v0v7v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){

return mranderson047.reagent.v0v7v0.reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

mranderson047.reagent.v0v7v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

mranderson047.reagent.v0v7v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq13433){
var G__13434 = cljs.core.first.call(null,seq13433);
var seq13433__$1 = cljs.core.next.call(null,seq13433);
var G__13435 = cljs.core.first.call(null,seq13433__$1);
var seq13433__$2 = cljs.core.next.call(null,seq13433__$1);
return mranderson047.reagent.v0v7v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__13434,G__13435,seq13433__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
mranderson047.reagent.v0v7v0.reagent.core.cursor = (function mranderson047$reagent$v0v7v0$reagent$core$cursor(src,path){
return mranderson047.reagent.v0v7v0.reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$core$rswap_BANG_(var_args){
var args__9064__auto__ = [];
var len__9057__auto___13444 = arguments.length;
var i__9058__auto___13445 = (0);
while(true){
if((i__9058__auto___13445 < len__9057__auto___13444)){
args__9064__auto__.push((arguments[i__9058__auto___13445]));

var G__13446 = (i__9058__auto___13445 + (1));
i__9058__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((2) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((2)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9065__auto__);
});

mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){


if(cljs.core.truth_(a.rswapping)){
(function (){var or__7895__auto__ = a.rswapfs;
if(cljs.core.truth_(or__7895__auto__)){
return or__7895__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__13439_SHARP_){
return cljs.core.apply.call(null,f,p1__13439_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__4659__auto__ = (function (){var G__13443 = a.rswapfs;
if((G__13443 == null)){
return null;
} else {
return G__13443.shift();
}
})();
if((temp__4659__auto__ == null)){
return s;
} else {
var sf = temp__4659__auto__;
var G__13447 = sf.call(null,s);
s = G__13447;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq13440){
var G__13441 = cljs.core.first.call(null,seq13440);
var seq13440__$1 = cljs.core.next.call(null,seq13440);
var G__13442 = cljs.core.first.call(null,seq13440__$1);
var seq13440__$2 = cljs.core.next.call(null,seq13440__$1);
return mranderson047.reagent.v0v7v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13441,G__13442,seq13440__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
mranderson047.reagent.v0v7v0.reagent.core.next_tick = (function mranderson047$reagent$v0v7v0$reagent$core$next_tick(f){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
mranderson047.reagent.v0v7v0.reagent.core.after_render = (function mranderson047$reagent$v0v7v0$reagent$core$after_render(f){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
mranderson047.reagent.v0v7v0.reagent.core.partial = (function mranderson047$reagent$v0v7v0$reagent$core$partial(var_args){
var args__9064__auto__ = [];
var len__9057__auto___13450 = arguments.length;
var i__9058__auto___13451 = (0);
while(true){
if((i__9058__auto___13451 < len__9057__auto___13450)){
args__9064__auto__.push((arguments[i__9058__auto___13451]));

var G__13452 = (i__9058__auto___13451 + (1));
i__9058__auto___13451 = G__13452;
continue;
} else {
}
break;
}

var argseq__9065__auto__ = ((((1) < args__9064__auto__.length))?(new cljs.core.IndexedSeq(args__9064__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9065__auto__);
});

mranderson047.reagent.v0v7v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return mranderson047.reagent.v0v7v0.reagent.impl.util.make_partial_fn.call(null,f,args);
});

mranderson047.reagent.v0v7v0.reagent.core.partial.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.core.partial.cljs$lang$applyTo = (function (seq13448){
var G__13449 = cljs.core.first.call(null,seq13448);
var seq13448__$1 = cljs.core.next.call(null,seq13448);
return mranderson047.reagent.v0v7v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__13449,seq13448__$1);
});

mranderson047.reagent.v0v7v0.reagent.core.component_path = (function mranderson047$reagent$v0v7v0$reagent$core$component_path(c){
return mranderson047.reagent.v0v7v0.reagent.impl.component.component_path.call(null,c);
});
