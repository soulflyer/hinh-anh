// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec,x);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec,y);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec,path,via,in$,x);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec,gfn);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__47422__auto__ = (((spec == null))?null:spec);
var m__47423__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,spec);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__63807 = cljs.core.get.call(null,reg,spec);
spec = G__63807;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__46739__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__46727__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__46727__auto__)){
return x;
} else {
return and__46727__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__46739__auto__ = (function (){var and__46727__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__46727__auto__){
return cljs.spec.alpha.reg_resolve.call(null,spec_or_k);
} else {
return and__46727__auto__;
}
})();
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
var or__46739__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__46739__auto____$2)){
return or__46739__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__46739__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__63812 = arguments.length;
switch (G__63812) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__47422__auto__ = (((_ == null))?null:_);
var m__47423__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,_);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__47422__auto__ = (((_ == null))?null:_);
var m__47423__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,_,form);
} else {
var m__47423__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__63814 = null;
var G__63814__1 = (function (o){
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
});
var G__63814__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__63814 = function(o,form){
switch(arguments.length){
case 1:
return G__63814__1.call(this,o);
case 2:
return G__63814__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__63814.cljs$core$IFn$_invoke$arity$1 = G__63814__1;
G__63814.cljs$core$IFn$_invoke$arity$2 = G__63814__2;
return G__63814;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__63816 = arguments.length;
switch (G__63816) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__46739__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__46739__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__46727__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__46727__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__46727__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__46727__auto__ = (form instanceof cljs.core.Symbol);
if(and__46727__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__46727__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__63818_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__63818_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.call(null,(function (){var sb__47765__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63819_63859 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63820_63860 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63819_63859,_STAR_print_fn_STAR_63820_63860,sb__47765__auto__,problems){
return (function (x__47766__auto__){
return sb__47765__auto__.append(x__47766__auto__);
});})(_STAR_print_newline_STAR_63819_63859,_STAR_print_fn_STAR_63820_63860,sb__47765__auto__,problems))
;

try{var seq__63821_63861 = cljs.core.seq.call(null,problems);
var chunk__63822_63862 = null;
var count__63823_63863 = (0);
var i__63824_63864 = (0);
while(true){
if((i__63824_63864 < count__63823_63863)){
var map__63825_63865 = cljs.core._nth.call(null,chunk__63822_63862,i__63824_63864);
var map__63825_63866__$1 = ((((!((map__63825_63865 == null)))?((((map__63825_63865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63825_63865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63825_63865):map__63825_63865);
var prob_63867 = map__63825_63866__$1;
var path_63868 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_63869 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_63870 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_63871 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_63872 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_63873 = cljs.core.get.call(null,map__63825_63866__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_63873)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_63873),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_63870);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_63872)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_63872)));
}

if(cljs.core.empty_QMARK_.call(null,path_63868)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_63868));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_63869));

if(cljs.core.truth_(reason_63871)){
cljs.core.print.call(null,", ",reason_63871);
} else {
}

var seq__63827_63874 = cljs.core.seq.call(null,prob_63867);
var chunk__63828_63875 = null;
var count__63829_63876 = (0);
var i__63830_63877 = (0);
while(true){
if((i__63830_63877 < count__63829_63876)){
var vec__63831_63878 = cljs.core._nth.call(null,chunk__63828_63875,i__63830_63877);
var k_63879 = cljs.core.nth.call(null,vec__63831_63878,(0),null);
var v_63880 = cljs.core.nth.call(null,vec__63831_63878,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_63879))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_63879)," ");

cljs.core.pr.call(null,v_63880);
}


var G__63881 = seq__63827_63874;
var G__63882 = chunk__63828_63875;
var G__63883 = count__63829_63876;
var G__63884 = (i__63830_63877 + (1));
seq__63827_63874 = G__63881;
chunk__63828_63875 = G__63882;
count__63829_63876 = G__63883;
i__63830_63877 = G__63884;
continue;
} else {
var temp__4657__auto___63885 = cljs.core.seq.call(null,seq__63827_63874);
if(temp__4657__auto___63885){
var seq__63827_63886__$1 = temp__4657__auto___63885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63827_63886__$1)){
var c__47578__auto___63887 = cljs.core.chunk_first.call(null,seq__63827_63886__$1);
var G__63888 = cljs.core.chunk_rest.call(null,seq__63827_63886__$1);
var G__63889 = c__47578__auto___63887;
var G__63890 = cljs.core.count.call(null,c__47578__auto___63887);
var G__63891 = (0);
seq__63827_63874 = G__63888;
chunk__63828_63875 = G__63889;
count__63829_63876 = G__63890;
i__63830_63877 = G__63891;
continue;
} else {
var vec__63834_63892 = cljs.core.first.call(null,seq__63827_63886__$1);
var k_63893 = cljs.core.nth.call(null,vec__63834_63892,(0),null);
var v_63894 = cljs.core.nth.call(null,vec__63834_63892,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_63893))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_63893)," ");

cljs.core.pr.call(null,v_63894);
}


var G__63895 = cljs.core.next.call(null,seq__63827_63886__$1);
var G__63896 = null;
var G__63897 = (0);
var G__63898 = (0);
seq__63827_63874 = G__63895;
chunk__63828_63875 = G__63896;
count__63829_63876 = G__63897;
i__63830_63877 = G__63898;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__63899 = seq__63821_63861;
var G__63900 = chunk__63822_63862;
var G__63901 = count__63823_63863;
var G__63902 = (i__63824_63864 + (1));
seq__63821_63861 = G__63899;
chunk__63822_63862 = G__63900;
count__63823_63863 = G__63901;
i__63824_63864 = G__63902;
continue;
} else {
var temp__4657__auto___63903 = cljs.core.seq.call(null,seq__63821_63861);
if(temp__4657__auto___63903){
var seq__63821_63904__$1 = temp__4657__auto___63903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63821_63904__$1)){
var c__47578__auto___63905 = cljs.core.chunk_first.call(null,seq__63821_63904__$1);
var G__63906 = cljs.core.chunk_rest.call(null,seq__63821_63904__$1);
var G__63907 = c__47578__auto___63905;
var G__63908 = cljs.core.count.call(null,c__47578__auto___63905);
var G__63909 = (0);
seq__63821_63861 = G__63906;
chunk__63822_63862 = G__63907;
count__63823_63863 = G__63908;
i__63824_63864 = G__63909;
continue;
} else {
var map__63837_63910 = cljs.core.first.call(null,seq__63821_63904__$1);
var map__63837_63911__$1 = ((((!((map__63837_63910 == null)))?((((map__63837_63910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63837_63910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63837_63910):map__63837_63910);
var prob_63912 = map__63837_63911__$1;
var path_63913 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_63914 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_63915 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_63916 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_63917 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_63918 = cljs.core.get.call(null,map__63837_63911__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_63918)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_63918),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_63915);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_63917)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_63917)));
}

if(cljs.core.empty_QMARK_.call(null,path_63913)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_63913));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_63914));

if(cljs.core.truth_(reason_63916)){
cljs.core.print.call(null,", ",reason_63916);
} else {
}

var seq__63839_63919 = cljs.core.seq.call(null,prob_63912);
var chunk__63840_63920 = null;
var count__63841_63921 = (0);
var i__63842_63922 = (0);
while(true){
if((i__63842_63922 < count__63841_63921)){
var vec__63843_63923 = cljs.core._nth.call(null,chunk__63840_63920,i__63842_63922);
var k_63924 = cljs.core.nth.call(null,vec__63843_63923,(0),null);
var v_63925 = cljs.core.nth.call(null,vec__63843_63923,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_63924))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_63924)," ");

cljs.core.pr.call(null,v_63925);
}


var G__63926 = seq__63839_63919;
var G__63927 = chunk__63840_63920;
var G__63928 = count__63841_63921;
var G__63929 = (i__63842_63922 + (1));
seq__63839_63919 = G__63926;
chunk__63840_63920 = G__63927;
count__63841_63921 = G__63928;
i__63842_63922 = G__63929;
continue;
} else {
var temp__4657__auto___63930__$1 = cljs.core.seq.call(null,seq__63839_63919);
if(temp__4657__auto___63930__$1){
var seq__63839_63931__$1 = temp__4657__auto___63930__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63839_63931__$1)){
var c__47578__auto___63932 = cljs.core.chunk_first.call(null,seq__63839_63931__$1);
var G__63933 = cljs.core.chunk_rest.call(null,seq__63839_63931__$1);
var G__63934 = c__47578__auto___63932;
var G__63935 = cljs.core.count.call(null,c__47578__auto___63932);
var G__63936 = (0);
seq__63839_63919 = G__63933;
chunk__63840_63920 = G__63934;
count__63841_63921 = G__63935;
i__63842_63922 = G__63936;
continue;
} else {
var vec__63846_63937 = cljs.core.first.call(null,seq__63839_63931__$1);
var k_63938 = cljs.core.nth.call(null,vec__63846_63937,(0),null);
var v_63939 = cljs.core.nth.call(null,vec__63846_63937,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_63938))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_63938)," ");

cljs.core.pr.call(null,v_63939);
}


var G__63940 = cljs.core.next.call(null,seq__63839_63931__$1);
var G__63941 = null;
var G__63942 = (0);
var G__63943 = (0);
seq__63839_63919 = G__63940;
chunk__63840_63920 = G__63941;
count__63841_63921 = G__63942;
i__63842_63922 = G__63943;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__63944 = cljs.core.next.call(null,seq__63821_63904__$1);
var G__63945 = null;
var G__63946 = (0);
var G__63947 = (0);
seq__63821_63861 = G__63944;
chunk__63822_63862 = G__63945;
count__63823_63863 = G__63946;
i__63824_63864 = G__63947;
continue;
}
} else {
}
}
break;
}

var seq__63849_63948 = cljs.core.seq.call(null,ed);
var chunk__63850_63949 = null;
var count__63851_63950 = (0);
var i__63852_63951 = (0);
while(true){
if((i__63852_63951 < count__63851_63950)){
var vec__63853_63952 = cljs.core._nth.call(null,chunk__63850_63949,i__63852_63951);
var k_63953 = cljs.core.nth.call(null,vec__63853_63952,(0),null);
var v_63954 = cljs.core.nth.call(null,vec__63853_63952,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_63953))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_63953)," ");

cljs.core.pr.call(null,v_63954);

cljs.core.newline.call(null);
}


var G__63955 = seq__63849_63948;
var G__63956 = chunk__63850_63949;
var G__63957 = count__63851_63950;
var G__63958 = (i__63852_63951 + (1));
seq__63849_63948 = G__63955;
chunk__63850_63949 = G__63956;
count__63851_63950 = G__63957;
i__63852_63951 = G__63958;
continue;
} else {
var temp__4657__auto___63959 = cljs.core.seq.call(null,seq__63849_63948);
if(temp__4657__auto___63959){
var seq__63849_63960__$1 = temp__4657__auto___63959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63849_63960__$1)){
var c__47578__auto___63961 = cljs.core.chunk_first.call(null,seq__63849_63960__$1);
var G__63962 = cljs.core.chunk_rest.call(null,seq__63849_63960__$1);
var G__63963 = c__47578__auto___63961;
var G__63964 = cljs.core.count.call(null,c__47578__auto___63961);
var G__63965 = (0);
seq__63849_63948 = G__63962;
chunk__63850_63949 = G__63963;
count__63851_63950 = G__63964;
i__63852_63951 = G__63965;
continue;
} else {
var vec__63856_63966 = cljs.core.first.call(null,seq__63849_63960__$1);
var k_63967 = cljs.core.nth.call(null,vec__63856_63966,(0),null);
var v_63968 = cljs.core.nth.call(null,vec__63856_63966,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_63967))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_63967)," ");

cljs.core.pr.call(null,v_63968);

cljs.core.newline.call(null);
}


var G__63969 = cljs.core.next.call(null,seq__63849_63960__$1);
var G__63970 = null;
var G__63971 = (0);
var G__63972 = (0);
seq__63849_63948 = G__63969;
chunk__63850_63949 = G__63970;
count__63851_63950 = G__63971;
i__63852_63951 = G__63972;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63820_63860;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63819_63859;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__47765__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__47765__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63973_63975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63974_63976 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63973_63975,_STAR_print_fn_STAR_63974_63976,sb__47765__auto__){
return (function (x__47766__auto__){
return sb__47765__auto__.append(x__47766__auto__);
});})(_STAR_print_newline_STAR_63973_63975,_STAR_print_fn_STAR_63974_63976,sb__47765__auto__))
;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63974_63976;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63973_63975;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__47765__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__46739__auto__ = (function (){var temp__4657__auto__ = (function (){var or__46739__auto__ = cljs.core.get.call(null,overrides,(function (){var or__46739__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.gen.alpha.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__63977_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__63977_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__63979 = arguments.length;
switch (G__63979) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){

var spec__$1 = (cljs.core.truth_((function (){var or__46739__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__47765__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63981_63983 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63982_63984 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63981_63983,_STAR_print_fn_STAR_63982_63984,sb__47765__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__47766__auto__){
return sb__47765__auto__.append(x__47766__auto__);
});})(_STAR_print_newline_STAR_63981_63983,_STAR_print_fn_STAR_63982_63984,sb__47765__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63982_63984;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63981_63983;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__47765__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__46739__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__63986 = arguments.length;
switch (G__63986) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__63989 = arguments.length;
switch (G__63989) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__63992 = arguments.length;
switch (G__63992) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__63997){
var map__63998 = p__63997;
var map__63998__$1 = ((((!((map__63998 == null)))?((((map__63998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63998):map__63998);
var argm = map__63998__$1;
var opt = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__63998__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__63994_SHARP_){
var or__46739__auto__ = k__GT_s.call(null,p1__63994_SHARP_);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return p1__63994_SHARP_;
}
});})(k__GT_s,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64000 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__63998,p__63997,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta64001){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__63998 = map__63998;
this.p__63997 = p__63997;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta64001 = meta64001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_64002,meta64001__$1){
var self__ = this;
var _64002__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64000(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__63998,self__.p__63997,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta64001__$1));
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_64002){
var self__ = this;
var _64002__$1 = this;
return self__.meta64001;
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__64009 = m;
var vec__64010 = G__64009;
var seq__64011 = cljs.core.seq.call(null,vec__64010);
var first__64012 = cljs.core.first.call(null,seq__64011);
var seq__64011__$1 = cljs.core.next.call(null,seq__64011);
var vec__64013 = first__64012;
var k = cljs.core.nth.call(null,vec__64013,(0),null);
var v = cljs.core.nth.call(null,vec__64013,(1),null);
var ks = seq__64011__$1;
var keys = vec__64010;
var ret__$1 = ret;
var G__64009__$1 = G__64009;
while(true){
var ret__$2 = ret__$1;
var vec__64016 = G__64009__$1;
var seq__64017 = cljs.core.seq.call(null,vec__64016);
var first__64018 = cljs.core.first.call(null,seq__64017);
var seq__64017__$1 = cljs.core.next.call(null,seq__64017);
var vec__64019 = first__64018;
var k__$1 = cljs.core.nth.call(null,vec__64019,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__64019,(1),null);
var ks__$1 = seq__64017__$1;
var keys__$1 = vec__64016;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__4655__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__64037 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__64038 = ks__$1;
ret__$1 = G__64037;
G__64009__$1 = G__64038;
continue;
}
} else {
var G__64039 = ret__$2;
var G__64040 = ks__$1;
ret__$1 = G__64039;
G__64009__$1 = G__64040;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__64025 = cljs.core.keys.call(null,m);
var vec__64026 = G__64025;
var seq__64027 = cljs.core.seq.call(null,vec__64026);
var first__64028 = cljs.core.first.call(null,seq__64027);
var seq__64027__$1 = cljs.core.next.call(null,seq__64027);
var k = first__64028;
var ks = seq__64027__$1;
var keys = vec__64026;
var ret__$1 = ret;
var G__64025__$1 = G__64025;
while(true){
var ret__$2 = ret__$1;
var vec__64029 = G__64025__$1;
var seq__64030 = cljs.core.seq.call(null,vec__64029);
var first__64031 = cljs.core.first.call(null,seq__64030);
var seq__64030__$1 = cljs.core.next.call(null,seq__64030);
var k__$1 = first__64031;
var ks__$1 = seq__64030__$1;
var keys__$1 = vec__64029;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__64041 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__64042 = ks__$1;
ret__$1 = G__64041;
G__64025__$1 = G__64042;
continue;
} else {
var G__64043 = ret__$2;
var G__64044 = ks__$1;
ret__$1 = G__64043;
G__64025__$1 = G__64044;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__63995_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__63995_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__64032){
var vec__64033 = p__64032;
var k = cljs.core.nth.call(null,vec__64033,(0),null);
var v = cljs.core.nth.call(null,vec__64033,(1),null);
if(cljs.core.truth_((function (){var or__46739__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__63996_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__63996_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__64036 = cljs.core.PersistentVector.EMPTY;
var G__64036__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__64036,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__64036);
var G__64036__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__64036__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__64036__$1);
var G__64036__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__64036__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__64036__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__64036__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__64036__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__63998","map__63998",324264588,null),new cljs.core.Symbol(null,"p__63997","p__63997",-93385586,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta64001","meta64001",-346271112,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha64000.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64000.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64000";

cljs.spec.alpha.t_cljs$spec$alpha64000.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64000");
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64000.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64000 = ((function (k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha64000(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__63998__$2,p__63997__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta64001){
return (new cljs.spec.alpha.t_cljs$spec$alpha64000(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__63998__$2,p__63997__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta64001));
});})(k__GT_s,keys__GT_specnames,id,map__63998,map__63998__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64000(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__63998__$1,p__63997,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__64046 = arguments.length;
switch (G__64046) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__64047 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__64047,gfn);
} else {
return G__64047;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__64048 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__64048,gfn);
} else {
return G__64048;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64049 = (function (form,pred,gfn,cpred_QMARK_,unc,meta64050){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta64050 = meta64050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64051,meta64050__$1){
var self__ = this;
var _64051__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64049(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta64050__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64051){
var self__ = this;
var _64051__$1 = this;
return self__.meta64050;
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha64049.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha64049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta64050","meta64050",-893041386,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha64049.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64049.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64049";

cljs.spec.alpha.t_cljs$spec$alpha64049.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64049");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64049.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64049 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha64049(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta64050){
return (new cljs.spec.alpha.t_cljs$spec$alpha64049(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta64050));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64049(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__64059 = arguments.length;
switch (G__64059) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__64053_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__46727__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__64053_SHARP_));
if(cljs.core.truth_(and__46727__auto__)){
return mm.call(null,p1__64053_SHARP_);
} else {
return and__46727__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__64054_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__64054_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__64055_SHARP_,p2__64056_SHARP_){
return cljs.core.assoc.call(null,p1__64055_SHARP_,retag,p2__64056_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64060 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta64061){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta64061 = meta64061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_64062,meta64061__$1){
var self__ = this;
var _64062__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64060(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta64061__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_64062){
var self__ = this;
var _64062__$1 = this;
return self__.meta64061;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__64063){
var vec__64064 = p__64063;
var k = cljs.core.nth.call(null,vec__64064,(0),null);
var f = cljs.core.nth.call(null,vec__64064,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__64064,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__64064,k,f,___$1,id,predx,dval,tag){
return (function (p1__64057_SHARP_){
return self__.tag.call(null,p1__64057_SHARP_,k);
});})(rmap__$1,p,vec__64064,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__64064,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__64067){
var vec__64068 = p__64067;
var k = cljs.core.nth.call(null,vec__64068,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta64061","meta64061",1047568377,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha64060.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64060.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64060";

cljs.spec.alpha.t_cljs$spec$alpha64060.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64060");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64060.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64060 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha64060(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta64061){
return (new cljs.spec.alpha.t_cljs$spec$alpha64060(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta64061));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64060(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__64073 = arguments.length;
switch (G__64073) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64074 = (function (forms,preds,gfn,specs,cnt,meta64075){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta64075 = meta64075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_64076,meta64075__$1){
var self__ = this;
var _64076__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64074(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta64075__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_64076){
var self__ = this;
var _64076__$1 = this;
return self__.meta64075;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__64078 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__64079 = (i + (1));
ret = G__64078;
i = G__64079;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__64080 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__64081 = (i + (1));
ret = G__64080;
i = G__64081;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta64075","meta64075",-678799453,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha64074.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64074.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64074";

cljs.spec.alpha.t_cljs$spec$alpha64074.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64074");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64074.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64074 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha64074(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta64075){
return (new cljs.spec.alpha.t_cljs$spec$alpha64074(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta64075));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64074(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__64082 = cljs.core.count.call(null,preds);
switch (G__64082) {
case (2):
return ((function (G__64082,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__64082,id,kps,specs))

break;
case (3):
return ((function (G__64082,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__64082,id,kps,specs))

break;
default:
return ((function (G__64082,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
var G__64091 = (i + (1));
i = G__64091;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__64082,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64083 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta64084){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta64084 = meta64084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_64085,meta64084__$1){
var self__ = this;
var _64085__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64083(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta64084__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_64085){
var self__ = this;
var _64085__$1 = this;
return self__.meta64084;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__64086){
var self__ = this;
var vec__64087 = p__64086;
var k = cljs.core.nth.call(null,vec__64087,(0),null);
var x = cljs.core.nth.call(null,vec__64087,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta64084","meta64084",1511425072,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64083.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64083.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64083";

cljs.spec.alpha.t_cljs$spec$alpha64083.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64083");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64083.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64083 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha64083(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta64084){
return (new cljs.spec.alpha.t_cljs$spec$alpha64083(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta64084));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64083(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__64098 = preds;
var vec__64100 = G__64098;
var seq__64101 = cljs.core.seq.call(null,vec__64100);
var first__64102 = cljs.core.first.call(null,seq__64101);
var seq__64101__$1 = cljs.core.next.call(null,seq__64101);
var pred = first__64102;
var preds__$1 = seq__64101__$1;
var G__64099 = forms;
var vec__64103 = G__64099;
var seq__64104 = cljs.core.seq.call(null,vec__64103);
var first__64105 = cljs.core.first.call(null,seq__64104);
var seq__64104__$1 = cljs.core.next.call(null,seq__64104);
var form = first__64105;
var forms__$1 = seq__64104__$1;
var ret__$1 = ret;
var G__64098__$1 = G__64098;
var G__64099__$1 = G__64099;
while(true){
var ret__$2 = ret__$1;
var vec__64106 = G__64098__$1;
var seq__64107 = cljs.core.seq.call(null,vec__64106);
var first__64108 = cljs.core.first.call(null,seq__64107);
var seq__64107__$1 = cljs.core.next.call(null,seq__64107);
var pred__$1 = first__64108;
var preds__$2 = seq__64107__$1;
var vec__64109 = G__64099__$1;
var seq__64110 = cljs.core.seq.call(null,vec__64109);
var first__64111 = cljs.core.first.call(null,seq__64110);
var seq__64110__$1 = cljs.core.next.call(null,seq__64110);
var form__$1 = first__64111;
var forms__$2 = seq__64110__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__64112 = nret;
var G__64113 = preds__$2;
var G__64114 = forms__$2;
ret__$1 = G__64112;
G__64098__$1 = G__64113;
G__64099__$1 = G__64114;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__64121 = forms;
var vec__64123 = G__64121;
var seq__64124 = cljs.core.seq.call(null,vec__64123);
var first__64125 = cljs.core.first.call(null,seq__64124);
var seq__64124__$1 = cljs.core.next.call(null,seq__64124);
var form = first__64125;
var forms__$1 = seq__64124__$1;
var G__64122 = preds;
var vec__64126 = G__64122;
var seq__64127 = cljs.core.seq.call(null,vec__64126);
var first__64128 = cljs.core.first.call(null,seq__64127);
var seq__64127__$1 = cljs.core.next.call(null,seq__64127);
var pred = first__64128;
var preds__$1 = seq__64127__$1;
var ret__$1 = ret;
var G__64121__$1 = G__64121;
var G__64122__$1 = G__64122;
while(true){
var ret__$2 = ret__$1;
var vec__64129 = G__64121__$1;
var seq__64130 = cljs.core.seq.call(null,vec__64129);
var first__64131 = cljs.core.first.call(null,seq__64130);
var seq__64130__$1 = cljs.core.next.call(null,seq__64130);
var form__$1 = first__64131;
var forms__$2 = seq__64130__$1;
var vec__64132 = G__64122__$1;
var seq__64133 = cljs.core.seq.call(null,vec__64132);
var first__64134 = cljs.core.first.call(null,seq__64133);
var seq__64133__$1 = cljs.core.next.call(null,seq__64133);
var pred__$1 = first__64134;
var preds__$2 = seq__64133__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__64135 = nret;
var G__64136 = forms__$2;
var G__64137 = preds__$2;
ret__$1 = G__64135;
G__64121__$1 = G__64136;
G__64122__$1 = G__64137;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__64140 = cljs.core.count.call(null,preds);
switch (G__64140) {
case (2):
return ((function (G__64140,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__64140,specs))

break;
case (3):
return ((function (G__64140,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__64140,specs))

break;
default:
return ((function (G__64140,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__64145 = nret;
var G__64146 = (i + (1));
ret = G__64145;
i = G__64146;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__64140,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64141 = (function (forms,preds,gfn,specs,cform,meta64142){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta64142 = meta64142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_64143,meta64142__$1){
var self__ = this;
var _64143__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64141(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta64142__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_64143){
var self__ = this;
var _64143__$1 = this;
return self__.meta64142;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__64139_SHARP_,p2__64138_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__64138_SHARP_,p1__64139_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta64142","meta64142",-1618894090,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha64141.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64141.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64141";

cljs.spec.alpha.t_cljs$spec$alpha64141.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64141");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64141.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64141 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha64141(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta64142){
return (new cljs.spec.alpha.t_cljs$spec$alpha64141(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta64142));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64141(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__46739__auto__ = kfn;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__46739__auto__ = kform;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__46727__auto__ = count;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__46727__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__46727__auto__ = (function (){var or__46739__auto__ = min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__46727__auto__)){
return !((((function (){var or__46739__auto__ = min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__46739__auto__ = max_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__46727__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__46739__auto__ = min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__46739__auto__ = max_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__46727__auto__ = distinct;
if(cljs.core.truth_(and__46727__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__46727__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64155 = (function (forms,preds,gfn,meta64156){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta64156 = meta64156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64157,meta64156__$1){
var self__ = this;
var _64157__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64155(self__.forms,self__.preds,self__.gfn,meta64156__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64157){
var self__ = this;
var _64157__$1 = this;
return self__.meta64156;
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__64147_SHARP_,p2__64148_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__64147_SHARP_,x,p2__64148_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__64149_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__64149_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__64150_SHARP_,p2__64151_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__64150_SHARP_,p2__64151_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__64152_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__64152_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__64153_SHARP_,p2__64154_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__64153_SHARP_,overrides,path,rmap,p2__64154_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha64155.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha64155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta64156","meta64156",1853474540,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha64155.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64155.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64155";

cljs.spec.alpha.t_cljs$spec$alpha64155.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64155");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64155.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64155 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha64155(forms__$1,preds__$1,gfn__$1,meta64156){
return (new cljs.spec.alpha.t_cljs$spec$alpha64155(forms__$1,preds__$1,gfn__$1,meta64156));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64155(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__64163 = arguments.length;
switch (G__64163) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__64164,gfn){
var map__64165 = p__64164;
var map__64165__$1 = ((((!((map__64165 == null)))?((((map__64165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64165):map__64165);
var opts = map__64165__$1;
var max_count = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var gen_into = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__64165__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(conform_into,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__64158_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__64158_SHARP_);
});})(conform_into,spec,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__46739__auto__ = kfn;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return ((function (or__46739__auto__,conform_into,spec,check_QMARK_,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__46739__auto__,conform_into,spec,check_QMARK_,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__46727__auto__){
var or__46739__auto__ = (function (){var and__46727__auto____$1 = kind;
if(cljs.core.truth_(and__46727__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__46727__auto____$1;
}
})();
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__46727__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__64159_SHARP_){
return cljs.core.empty.call(null,(function (){var or__46739__auto__ = conform_into;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return p1__64159_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64167 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,map__64165,conform_keys,kind_form,addcv,cfns,p__64164,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta64168){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.map__64165 = map__64165;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.p__64164 = p__64164;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta64168 = meta64168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_64169,meta64168__$1){
var self__ = this;
var _64169__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64167(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.map__64165,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.p__64164,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta64168__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_64169){
var self__ = this;
var _64169__$1 = this;
return self__.meta64168;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__64170 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__64170,(0),null);
var add = cljs.core.nth.call(null,vec__64170,(1),null);
var complete = cljs.core.nth.call(null,vec__64170,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__64176 = cljs.core.seq.call(null,x);
var vec__64177 = G__64176;
var seq__64178 = cljs.core.seq.call(null,vec__64177);
var first__64179 = cljs.core.first.call(null,seq__64178);
var seq__64178__$1 = cljs.core.next.call(null,seq__64178);
var v = first__64179;
var vs = seq__64178__$1;
var vseq = vec__64177;
var ret__$1 = ret;
var i__$1 = i;
var G__64176__$1 = G__64176;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__64180 = G__64176__$1;
var seq__64181 = cljs.core.seq.call(null,vec__64180);
var first__64182 = cljs.core.first.call(null,seq__64181);
var seq__64181__$1 = cljs.core.next.call(null,seq__64181);
var v__$1 = first__64182;
var vs__$1 = seq__64181__$1;
var vseq__$1 = vec__64180;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__64207 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__64208 = (i__$2 + (1));
var G__64209 = vs__$1;
ret__$1 = G__64207;
i__$1 = G__64208;
G__64176__$1 = G__64209;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__47089__auto__ = (1);
var y__47090__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__64210 = (i + step);
i = G__64210;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__64186 = cljs.core.seq.call(null,x);
var vec__64187 = G__64186;
var seq__64188 = cljs.core.seq.call(null,vec__64187);
var first__64189 = cljs.core.first.call(null,seq__64188);
var seq__64188__$1 = cljs.core.next.call(null,seq__64188);
var v = first__64189;
var vs = seq__64188__$1;
var vseq = vec__64187;
var i__$1 = i;
var G__64186__$1 = G__64186;
while(true){
var i__$2 = i__$1;
var vec__64190 = G__64186__$1;
var seq__64191 = cljs.core.seq.call(null,vec__64190);
var first__64192 = cljs.core.first.call(null,seq__64191);
var seq__64191__$1 = cljs.core.next.call(null,seq__64191);
var v__$1 = first__64192;
var vs__$1 = seq__64191__$1;
var vseq__$1 = vec__64190;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__64211 = (i__$2 + (1));
var G__64212 = vs__$1;
i__$1 = G__64211;
G__64186__$1 = G__64212;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__64193 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__64193,(0),null);
var add = cljs.core.nth.call(null,vec__64193,(1),null);
var complete = cljs.core.nth.call(null,vec__64193,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__64199 = cljs.core.seq.call(null,x);
var vec__64200 = G__64199;
var seq__64201 = cljs.core.seq.call(null,vec__64200);
var first__64202 = cljs.core.first.call(null,seq__64201);
var seq__64201__$1 = cljs.core.next.call(null,seq__64201);
var v = first__64202;
var vs = seq__64201__$1;
var vseq = vec__64200;
var ret__$1 = ret;
var i__$1 = i;
var G__64199__$1 = G__64199;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__64203 = G__64199__$1;
var seq__64204 = cljs.core.seq.call(null,vec__64203);
var first__64205 = cljs.core.first.call(null,seq__64204);
var seq__64204__$1 = cljs.core.next.call(null,seq__64204);
var v__$1 = first__64205;
var vs__$1 = seq__64204__$1;
var vseq__$1 = vec__64203;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__64213 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__64214 = (i__$2 + (1));
var G__64215 = vs__$1;
ret__$1 = G__64213;
i__$1 = G__64214;
G__64199__$1 = G__64215;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__46739__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__46739__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__46739__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__64160_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__64160_SHARP_)){
return p1__64160_SHARP_;
} else {
return cljs.core.empty.call(null,p1__64160_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__64161_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__64161_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__64161_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__46739__auto__ = self__.min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__46739__auto__ = self__.max_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var x__47089__auto__ = self__.gen_max;
var y__47090__auto__ = ((2) * (function (){var or__46739__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return (0);
}
})());
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__46739__auto__ = self__.min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__46739__auto__ = self__.min_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})(),(function (){var or__46739__auto__ = self__.max_count;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var x__47089__auto__ = self__.gen_max;
var y__47090__auto__ = ((2) * (function (){var or__46739__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return (0);
}
})());
return ((x__47089__auto__ > y__47090__auto__) ? x__47089__auto__ : y__47090__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__46739__auto__ = self__.describe_form;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"map__64165","map__64165",1404656464,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"p__64164","p__64164",-1928879308,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta64168","meta64168",1799617992,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha64167.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64167.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64167";

cljs.spec.alpha.t_cljs$spec$alpha64167.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64167");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64167.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64167 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha64167(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,map__64165__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,p__64164__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta64168){
return (new cljs.spec.alpha.t_cljs$spec$alpha64167(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,map__64165__$2,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,p__64164__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta64168));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__64165,map__64165__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64167(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,map__64165__$1,conform_keys,kind_form,addcv,cfns,p__64164,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__64216){
var map__64217 = p__64216;
var map__64217__$1 = ((((!((map__64217 == null)))?((((map__64217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64217):map__64217);
var op = cljs.core.get.call(null,map__64217__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__64219){
var map__64220 = p__64219;
var map__64220__$1 = ((((!((map__64220 == null)))?((((map__64220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64220):map__64220);
var vec__64221 = cljs.core.get.call(null,map__64220__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__64222 = cljs.core.seq.call(null,vec__64221);
var first__64223 = cljs.core.first.call(null,seq__64222);
var seq__64222__$1 = cljs.core.next.call(null,seq__64222);
var p1 = first__64223;
var pr = seq__64222__$1;
var ps = vec__64221;
var vec__64224 = cljs.core.get.call(null,map__64220__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__64225 = cljs.core.seq.call(null,vec__64224);
var first__64226 = cljs.core.first.call(null,seq__64225);
var seq__64225__$1 = cljs.core.next.call(null,seq__64225);
var k1 = first__64226;
var kr = seq__64225__$1;
var ks = vec__64224;
var vec__64227 = cljs.core.get.call(null,map__64220__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__64228 = cljs.core.seq.call(null,vec__64227);
var first__64229 = cljs.core.first.call(null,seq__64228);
var seq__64228__$1 = cljs.core.next.call(null,seq__64228);
var f1 = first__64229;
var fr = seq__64228__$1;
var forms = vec__64227;
var ret = cljs.core.get.call(null,map__64220__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__64220__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__47908__auto__ = [];
var len__47901__auto___64232 = arguments.length;
var i__47902__auto___64233 = (0);
while(true){
if((i__47902__auto___64233 < len__47901__auto___64232)){
args__47908__auto__.push((arguments[i__47902__auto___64233]));

var G__64234 = (i__47902__auto___64233 + (1));
i__47902__auto___64233 = G__64234;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq64231){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64231));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__46739__auto__ = ks;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__64235_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__64235_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__46739__auto__ = cljs.core.seq.call(null,ks);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__46739__auto__ = cljs.core.seq.call(null,forms);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__64236_SHARP_){
return cljs.core.nth.call(null,p1__64236_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__64237 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__64240 = cljs.core.nth.call(null,vec__64237,(0),null);
var seq__64241 = cljs.core.seq.call(null,vec__64240);
var first__64242 = cljs.core.first.call(null,seq__64241);
var seq__64241__$1 = cljs.core.next.call(null,seq__64241);
var p1 = first__64242;
var pr = seq__64241__$1;
var ps__$1 = vec__64240;
var vec__64243 = cljs.core.nth.call(null,vec__64237,(1),null);
var k1 = cljs.core.nth.call(null,vec__64243,(0),null);
var ks__$1 = vec__64243;
var forms__$1 = cljs.core.nth.call(null,vec__64237,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p1))){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__47908__auto__ = [];
var len__47901__auto___64247 = arguments.length;
var i__47902__auto___64248 = (0);
while(true){
if((i__47902__auto___64248 < len__47901__auto___64247)){
args__47908__auto__.push((arguments[i__47902__auto___64248]));

var G__64249 = (i__47902__auto___64248 + (1));
i__47902__auto___64248 = G__64249;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq64246){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64246));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__46727__auto__ = p1;
if(cljs.core.truth_(and__46727__auto__)){
return p2;
} else {
return and__46727__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__46739__auto__ = p1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__46739__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__46739__auto__){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = (function (){var and__46727__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__46727__auto__;
}
})();
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__64250 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64250__$1 = ((((!((map__64250 == null)))?((((map__64250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64250):map__64250);
var p__$1 = map__64250__$1;
var op = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__64252 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64252)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__64252)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64252)){
var and__46727__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__46727__auto__)){
var or__46739__auto__ = cljs.spec.alpha.noret_QMARK_.call(null,p1,cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,ret));
}
} else {
return and__46727__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64252)){
var or__46739__auto__ = (p1 === p2);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64252)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64252)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64252)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__64253 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64253__$1 = ((((!((map__64253 == null)))?((((map__64253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64253):map__64253);
var p__$1 = map__64253__$1;
var vec__64254 = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__64255 = cljs.core.seq.call(null,vec__64254);
var first__64256 = cljs.core.first.call(null,seq__64255);
var seq__64255__$1 = cljs.core.next.call(null,seq__64255);
var p0 = first__64256;
var pr = seq__64255__$1;
var ps = vec__64254;
var vec__64257 = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__64257,(0),null);
var ks = vec__64257;
var op = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__64253__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__64261 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64261)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__64261)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64261)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64261)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64261)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64261)){
var vec__64262 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__64265 = cljs.core.nth.call(null,vec__64262,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__64265,(0),null);
var vec__64268 = cljs.core.nth.call(null,vec__64262,(1),null);
var k0 = cljs.core.nth.call(null,vec__64268,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64261)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__64275 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64275__$1 = ((((!((map__64275 == null)))?((((map__64275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64275):map__64275);
var p__$1 = map__64275__$1;
var vec__64276 = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__64277 = cljs.core.seq.call(null,vec__64276);
var first__64278 = cljs.core.first.call(null,seq__64277);
var seq__64277__$1 = cljs.core.next.call(null,seq__64277);
var p0 = first__64278;
var pr = seq__64277__$1;
var ps = vec__64276;
var vec__64279 = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__64279,(0),null);
var ks = vec__64279;
var op = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__64275__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__64283 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64283)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__64283)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64283)){
var px = cljs.core.reduce.call(null,((function (G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__64272_SHARP_,p2__64271_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__64271_SHARP_,p1__64272_SHARP_);
});})(G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64283)){
return cljs.core.mapcat.call(null,((function (G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__64273_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__64273_SHARP_);
});})(G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64283)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__64274_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__64274_SHARP_);
});})(G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__64283,map__64275,map__64275__$1,p__$1,vec__64276,seq__64277,first__64278,seq__64277__$1,p0,pr,ps,vec__64279,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64283)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__64284 = x;
var k__$1 = cljs.core.nth.call(null,vec__64284,(0),null);
var v = cljs.core.nth.call(null,vec__64284,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64283)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__64287 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64287__$1 = ((((!((map__64287 == null)))?((((map__64287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64287):map__64287);
var p__$1 = map__64287__$1;
var op = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__64287,map__64287__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__64287,map__64287__$1,p__$1,op,ps,splice))
;
var G__64289 = op;
if(cljs.core._EQ_.call(null,null,G__64289)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64289)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64289)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64289)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64289)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64289)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64289)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__64291 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64291__$1 = ((((!((map__64291 == null)))?((((map__64291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64291):map__64291);
var p__$1 = map__64291__$1;
var vec__64292 = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__64293 = cljs.core.seq.call(null,vec__64292);
var first__64294 = cljs.core.first.call(null,seq__64293);
var seq__64293__$1 = cljs.core.next.call(null,seq__64293);
var p0 = first__64294;
var pr = seq__64293__$1;
var ps = vec__64292;
var vec__64295 = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__64296 = cljs.core.seq.call(null,vec__64295);
var first__64297 = cljs.core.first.call(null,seq__64296);
var seq__64296__$1 = cljs.core.next.call(null,seq__64296);
var k0 = first__64297;
var kr = seq__64296__$1;
var ks = vec__64295;
var op = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__64291__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__64299 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64299)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__64299)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64299)){
var temp__4657__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64299)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64299)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__64299,map__64291,map__64291__$1,p__$1,vec__64292,seq__64293,first__64294,seq__64293__$1,p0,pr,ps,vec__64295,seq__64296,first__64297,seq__64296__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__64290_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__64290_SHARP_,x);
});})(G__64299,map__64291,map__64291__$1,p__$1,vec__64292,seq__64293,first__64294,seq__64293__$1,p0,pr,ps,vec__64295,seq__64296,first__64297,seq__64296__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64299)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64299)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__64300 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64300__$1 = ((((!((map__64300 == null)))?((((map__64300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64300):map__64300);
var p__$1 = map__64300__$1;
var op = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__64300__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__64302 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64302)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__64302)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64302)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),cljs.spec.alpha.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64302)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__46739__auto__ = cljs.core.seq.call(null,ks);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64302)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64302)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64302)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__64303 = input;
var x = cljs.core.nth.call(null,vec__64303,(0),null);
var input__$1 = vec__64303;
var map__64306 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64306__$1 = ((((!((map__64306 == null)))?((((map__64306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64306):map__64306);
var p__$1 = map__64306__$1;
var op = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__64306__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__64308 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64308)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__64308)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64308)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64308)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__46739__auto__ = cljs.core.seq.call(null,ks);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__46739__auto__ = cljs.core.seq.call(null,forms);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__64309 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__64308,vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__64312){
var vec__64313 = p__64312;
var p__$2 = cljs.core.nth.call(null,vec__64313,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__64308,vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__64309,(0),null);
var k = cljs.core.nth.call(null,vec__64309,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__64309,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__46739__auto__ = form__$1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64308)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__64308,vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__46739__auto__ = form__$1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__64308,vec__64303,x,input__$1,map__64306,map__64306__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__46739__auto__ = cljs.core.seq.call(null,ks);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__46739__auto__ = cljs.core.seq.call(null,forms);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64308)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64308)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__64317 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__64317__$1 = ((((!((map__64317 == null)))?((((map__64317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64317):map__64317);
var p__$1 = map__64317__$1;
var ps = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__64317__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__46727__auto__ = rmap__$1;
if(cljs.core.truth_(and__46727__auto__)){
var and__46727__auto____$1 = id;
if(cljs.core.truth_(and__46727__auto____$1)){
var and__46727__auto____$2 = k;
if(cljs.core.truth_(and__46727__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__46727__auto____$2;
}
} else {
return and__46727__auto____$1;
}
} else {
return and__46727__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__46739__auto__ = f__$1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return p__$2;
}
})());
});})(map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__46739__auto__ = f__$1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__46739__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__46739__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__46739__auto__){
return or__46739__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__46739__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__64320 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__64320)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__64320)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
var or__46739__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__46739__auto____$1)){
return or__46739__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__64321 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__64321)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__64321)){
var temp__4657__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__64321)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__64321)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__64321)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__64321)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__4657__auto__,G__64321,or__46739__auto____$1,or__46739__auto__,map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__64316_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__64316_SHARP_);
});})(g,temp__4657__auto__,G__64321,or__46739__auto____$1,or__46739__auto__,map__64317,map__64317__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64321)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__64322){
while(true){
var vec__64323 = p__64322;
var seq__64324 = cljs.core.seq.call(null,vec__64323);
var first__64325 = cljs.core.first.call(null,seq__64324);
var seq__64324__$1 = cljs.core.next.call(null,seq__64324);
var x = first__64325;
var xs = seq__64324__$1;
var data = vec__64323;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__64326 = dp;
var G__64327 = xs;
p = G__64326;
p__64322 = G__64327;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__64331 = input;
var vec__64332 = G__64331;
var seq__64333 = cljs.core.seq.call(null,vec__64332);
var first__64334 = cljs.core.first.call(null,seq__64333);
var seq__64333__$1 = cljs.core.next.call(null,seq__64333);
var x = first__64334;
var xs = seq__64333__$1;
var data = vec__64332;
var i = (0);
var p__$1 = p;
var G__64331__$1 = G__64331;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__64335 = G__64331__$1;
var seq__64336 = cljs.core.seq.call(null,vec__64335);
var first__64337 = cljs.core.first.call(null,seq__64336);
var seq__64336__$1 = cljs.core.next.call(null,seq__64336);
var x__$1 = first__64337;
var xs__$1 = seq__64336__$1;
var data__$1 = vec__64335;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__64338 = dp;
var G__64339 = xs__$1;
var G__64340 = (i__$2 + (1));
p__$1 = G__64338;
G__64331__$1 = G__64339;
i__$1 = G__64340;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__46739__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64341 = (function (re,gfn,meta64342){
this.re = re;
this.gfn = gfn;
this.meta64342 = meta64342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64343,meta64342__$1){
var self__ = this;
var _64343__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64341(self__.re,self__.gfn,meta64342__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64343){
var self__ = this;
var _64343__$1 = this;
return self__.meta64342;
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,self__.re),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha64341.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha64341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta64342","meta64342",1166771160,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha64341.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64341.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64341";

cljs.spec.alpha.t_cljs$spec$alpha64341.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64341");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64341.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64341 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha64341(re__$1,gfn__$1,meta64342){
return (new cljs.spec.alpha.t_cljs$spec$alpha64341(re__$1,gfn__$1,meta64342));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64341(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__46727__auto__ = cljs.core.not.call(null,cljs.spec.alpha.invalid_QMARK_.call(null,cret));
if(and__46727__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__46727__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__64344_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__64344_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__64345 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__64345,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha64348 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta64349){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta64349 = meta64349;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_64350,meta64349__$1){
var self__ = this;
var _64350__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64348(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta64349__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_64350){
var self__ = this;
var _64350__$1 = this;
return self__.meta64349;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e64351){if((e64351 instanceof Error)){
var t = e64351;
return t;
} else {
throw e64351;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,cret))){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__64352__delegate = function (args){

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__64352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64353__i = 0, G__64353__a = new Array(arguments.length -  0);
while (G__64353__i < G__64353__a.length) {G__64353__a[G__64353__i] = arguments[G__64353__i + 0]; ++G__64353__i;}
  args = new cljs.core.IndexedSeq(G__64353__a,0,null);
} 
return G__64352__delegate.call(this,args);};
G__64352.cljs$lang$maxFixedArity = 0;
G__64352.cljs$lang$applyTo = (function (arglist__64354){
var args = cljs.core.seq(arglist__64354);
return G__64352__delegate(args);
});
G__64352.cljs$core$IFn$_invoke$arity$variadic = G__64352__delegate;
return G__64352;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta64349","meta64349",-1706525746,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha64348.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64348.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64348";

cljs.spec.alpha.t_cljs$spec$alpha64348.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64348");
});})(specs))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64348.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64348 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha64348(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta64349){
return (new cljs.spec.alpha.t_cljs$spec$alpha64348(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta64349));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64348(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64355#","p1__64355#",2080210099,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__64355#","p1__64355#",2080210099,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__64355#","p1__64355#",2080210099,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64356#","p1__64356#",-1447848034,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__64356#","p1__64356#",-1447848034,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__64355_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__64355_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__64355_SHARP_));
}),null,true,(function (p1__64356_SHARP_){
return cljs.core.map.call(null,(function (p__64357){
var vec__64358 = p__64357;
var k = cljs.core.nth.call(null,vec__64358,(0),null);
var v = cljs.core.nth.call(null,vec__64358,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__64356_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64361 = (function (spec,meta64362){
this.spec = spec;
this.meta64362 = meta64362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_64363,meta64362__$1){
var self__ = this;
var _64363__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64361(self__.spec,meta64362__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_64363){
var self__ = this;
var _64363__$1 = this;
return self__.meta64362;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,self__.spec),null,(1),null)))));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta64362","meta64362",-1392313681,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha64361.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64361.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64361";

cljs.spec.alpha.t_cljs$spec$alpha64361.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64361");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64361.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64361 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha64361(spec__$2,meta64362){
return (new cljs.spec.alpha.t_cljs$spec$alpha64361(spec__$2,meta64362));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64361(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.call(null,pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha64364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha64364 = (function (form,pred,gfn,spec,meta64365){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta64365 = meta64365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_64366,meta64365__$1){
var self__ = this;
var _64366__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha64364(self__.form,self__.pred,self__.gfn,self__.spec,meta64365__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_64366){
var self__ = this;
var _64366__$1 = this;
return self__.meta64365;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__46739__auto__ = cljs.spec.alpha.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta64365","meta64365",1432170659,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha64364.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha64364.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha64364";

cljs.spec.alpha.t_cljs$spec$alpha64364.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.spec.alpha/t_cljs$spec$alpha64364");
});})(spec))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha64364.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha64364 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha64364(form__$1,pred__$1,gfn__$1,spec__$1,meta64365){
return (new cljs.spec.alpha.t_cljs$spec$alpha64364(form__$1,pred__$1,gfn__$1,spec__$1,meta64365));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha64364(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__64369 = arguments.length;
switch (G__64369) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__64367_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__64367_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__64367_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__46727__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__46727__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__46727__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__46727__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__46727__auto__)){
return val.lessThan(end);
} else {
return and__46727__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__46727__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__46727__auto__)){
return val.lessThan(end);
} else {
return and__46727__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = false;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__47765__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_64371_64373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_64372_64374 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_64371_64373,_STAR_print_fn_STAR_64372_64374,sb__47765__auto__,ed){
return (function (x__47766__auto__){
return sb__47765__auto__.append(x__47766__auto__);
});})(_STAR_print_newline_STAR_64371_64373,_STAR_print_fn_STAR_64372_64374,sb__47765__auto__,ed))
;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_64372_64374;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_64371_64373;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__47765__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map
