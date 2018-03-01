// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('mranderson047.reagent.v0v7v0.reagent.impl.component');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map = (function mranderson047$reagent$v0v7v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__59463 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__59464 = (i + (1));
m = G__59463;
i = G__59464;
continue;
} else {
return m;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.extract_props = (function mranderson047$reagent$v0v7v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.extract_children = (function mranderson047$reagent$v0v7v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv = (function mranderson047$reagent$v0v7v0$reagent$impl$component$props_argv(c,p){
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__4659__auto__;
return a;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_argv(c){
return mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_props = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__4659__auto__;
return mranderson047.reagent.v0v7v0.reagent.impl.component.extract_props.call(null,v);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_children = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(mranderson047.reagent.v0v7v0.reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else {
var v = temp__4659__auto__;
return mranderson047.reagent.v0v7v0.reagent.impl.component.extract_children.call(null,v);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__59466 = c;
var G__59466__$1 = (((G__59466 == null))?null:G__59466.prototype);
if((G__59466__$1 == null)){
return null;
} else {
return (G__59466__$1["reagentRender"]);
}
})() == null)));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$react_class_QMARK_(c){
return (cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__59468 = c;
var G__59468__$1 = (((G__59468 == null))?null:G__59468.prototype);
if((G__59468__$1 == null)){
return null;
} else {
return (G__59468__$1["render"]);
}
})() == null)));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cached_react_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.state_atom = (function mranderson047$reagent$v0v7v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,null));
}
});
if(typeof mranderson047.reagent.v0v7v0.reagent.impl.component.as_element !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.component.as_element = null;
}
mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_render = (function mranderson047$reagent$v0v7v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = null;
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__59469 = n;
switch (G__59469) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__59471__delegate = function (args){
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__59471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59472__i = 0, G__59472__a = new Array(arguments.length -  0);
while (G__59472__i < G__59472__a.length) {G__59472__a[G__59472__i] = arguments[G__59472__i + 0]; ++G__59472__i;}
  args = new cljs.core.IndexedSeq(G__59472__a,0,null);
} 
return G__59471__delegate.call(this,args);};
G__59471.cljs$lang$maxFixedArity = 0;
G__59471.cljs$lang$applyTo = (function (arglist__59473){
var args = cljs.core.seq(arglist__59473);
return G__59471__delegate(args);
});
G__59471.cljs$core$IFn$_invoke$arity$variadic = G__59471__delegate;
return G__59471;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__59474 = c;
c = G__59474;
continue;
} else {
return res;

}
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.do_render = (function mranderson047$reagent$v0v7v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_59475 = mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = c;

try{return mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_render.call(null,c);

}finally {mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_59475;
}});
mranderson047.reagent.v0v7v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson047$reagent$v0v7v0$reagent$impl$component$render(){
var c = this;
if(mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson047.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
mranderson047.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return mranderson047.reagent.v0v7v0.reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",mranderson047.reagent.v0v7v0.reagent.impl.batching.queue_render,mranderson047.reagent.v0v7v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.custom_wrapper = (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper(key,f){
var G__59476 = key;
var G__59476__$1 = (((G__59476 instanceof cljs.core.Keyword))?G__59476.fqn:null);
switch (G__59476__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__59476,G__59476__$1))

break;
case "componentWillReceiveProps":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__59476,G__59476__$1))

break;
case "shouldComponentUpdate":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__46739__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
if(or__46739__auto__){
return or__46739__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = ((old_argv == null)) || ((new_argv == null));
if((f == null)){
return (noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv));
} else {
if(noargv){
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c),mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__59476,G__59476__$1))

break;
case "componentWillUpdate":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__59476,G__59476__$1))

break;
case "componentDidUpdate":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__59476,G__59476__$1))

break;
case "componentWillMount":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson047.reagent.v0v7v0.reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__59476,G__59476__$1))

break;
case "componentDidMount":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__59476,G__59476__$1))

break;
case "componentWillUnmount":
return ((function (G__59476,G__59476__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__59477_59479 = (c["cljsRatom"]);
if((G__59477_59479 == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,G__59477_59479);
}

mranderson047.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__59476,G__59476__$1))

break;
default:
return null;

}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_wrapper = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson047.reagent.v0v7v0.reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__46727__auto__ = wrap;
if(cljs.core.truth_(and__46727__auto__)){
return f;
} else {
return and__46727__auto__;
}
})())){
} else {
}

var or__46739__auto__ = wrap;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return f;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.dash_to_camel = mranderson047.reagent.v0v7v0.reagent.impl.util.memoize_1.call(null,mranderson047.reagent.v0v7v0.reagent.impl.util.dash_to_camel);
mranderson047.reagent.v0v7v0.reagent.impl.component.camelify_map_keys = (function mranderson047$reagent$v0v7v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.add_obligatory = (function mranderson047$reagent$v0v7v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.obligatory,fun_map);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_funs = (function mranderson047$reagent$v0v7v0$reagent$impl$component$wrap_funs(fmap){


var render_fun = (function (){var or__46739__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__46739__auto__ = render_fun;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__46739__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__59480 = name;
switch (G__59480) {
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,mranderson047.reagent.v0v7v0.reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.static_fns));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.map_to_js = (function mranderson047$reagent$v0v7v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__59482 = o;
(G__59482[cljs.core.name.call(null,k)] = v);

return G__59482;
}),({}),m);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cljsify = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cljsify(body){
return mranderson047.reagent.v0v7v0.reagent.impl.component.map_to_js.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_funs.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.add_obligatory.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.camelify_map_keys.call(null,body))));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.create_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$create_class(body){

return mranderson047.reagent.v0v7v0.reagent.impl.util.create_class.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.cljsify.call(null,body));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.component_path = (function mranderson047$reagent$v0v7v0$reagent$impl$component$component_path(c){
var elem = (function (){var G__59483 = (function (){var or__46739__auto__ = (function (){var G__59485 = c;
if((G__59485 == null)){
return null;
} else {
return (G__59485["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return c;
}
})();
if((G__59483 == null)){
return null;
} else {
return (G__59483["_currentElement"]);
}
})();
var name = (function (){var G__59486 = elem;
var G__59486__$1 = (((G__59486 == null))?null:(G__59486["type"]));
if((G__59486__$1 == null)){
return null;
} else {
return (G__59486__$1["displayName"]);
}
})();
var path = (function (){var G__59487 = elem;
var G__59487__$1 = (((G__59487 == null))?null:(G__59487["_owner"]));
var G__59487__$2 = (((G__59487__$1 == null))?null:mranderson047.reagent.v0v7v0.reagent.impl.component.component_path.call(null,G__59487__$1));
if((G__59487__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59487__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name = (function mranderson047$reagent$v0v7v0$reagent$impl$component$comp_name(){
return "";

});
mranderson047.reagent.v0v7v0.reagent.impl.component.fn_to_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$fn_to_class(f){


if(mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson047.reagent.v0v7v0.reagent.impl.component.create_class.call(null,withrender);
return mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,res);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.as_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$as_class(tag){
var temp__4659__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.component.cached_react_class.call(null,tag);
if((temp__4659__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__4659__auto__;
return cached_class;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reactify_component = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reactify_component(comp){
if(mranderson047.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map
