// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom.generation !== 'undefined'){
} else {
reagent.ratom.generation = (0);
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return !((reagent.ratom._STAR_ratom_context_STAR_ == null));
});
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len.call(null,x);
var and__46727__auto__ = (len === reagent.ratom.arr_len.call(null,y));
if(and__46727__auto__){
var i = (0);
while(true){
var or__46739__auto__ = (i === len);
if(or__46739__auto__){
return or__46739__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__61389 = (i + (1));
i = G__61389;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__46727__auto__;
}
});
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_61390 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_61390;
}});
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
r.captured = null;



var res = reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__4661__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto__ == null)){
return null;
} else {
var r = temp__4661__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));

return this$.watchesArr = null;
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));

return this$.watchesArr = null;
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__61391_SHARP_,p2__61392_SHARP_,p3__61393_SHARP_){
var G__61394 = p1__61391_SHARP_;
G__61394.push(p2__61392_SHARP_);

G__61394.push(p3__61393_SHARP_);

return G__61394;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_61395 = (a[i]);
var f_61396 = (a[(i + (1))]);
f_61396.call(null,k_61395,this$,old,new$);

var G__61397 = ((2) + i);
i = G__61397;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR_61398 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_61398;
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
});
if(typeof reagent.ratom.rea_queue !== 'undefined'){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
reagent.ratom.rea_queue = [];

reagent.impl.batching.schedule.call(null);
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
reagent.ratom.rea_queue = null;

var n__47683__auto___61399 = q.length;
var i_61400 = (0);
while(true){
if((i_61400 < n__47683__auto___61399)){
(q[i_61400])._queued_run();

var G__61401 = (i_61400 + (1));
i_61400 = G__61401;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"reagent.ratom/RAtom");
});

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__61405 = arguments.length;
switch (G__61405) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__47920__auto__ = [];
var len__47901__auto___61410 = arguments.length;
var i__47902__auto___61411 = (0);
while(true){
if((i__47902__auto___61411 < len__47901__auto___61410)){
args_arr__47920__auto__.push((arguments[i__47902__auto___61411]));

var G__61412 = (i__47902__auto___61411 + (1));
i__47902__auto___61411 = G__61412;
continue;
} else {
}
break;
}

var argseq__47921__auto__ = (new cljs.core.IndexedSeq(args_arr__47920__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47921__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__61406){
var map__61407 = p__61406;
var map__61407__$1 = ((((!((map__61407 == null)))?((((map__61407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61407):map__61407);
var meta = cljs.core.get.call(null,map__61407__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__61407__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq61403){
var G__61404 = cljs.core.first.call(null,seq61403);
var seq61403__$1 = cljs.core.next.call(null,seq61403);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__61404,seq61403__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

reagent.ratom.cache_key = "reagReactionCache";
reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if(!((r == null))){
return cljs.core._deref.call(null,r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (m,m__$1,r){
return (function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

var __61413 = (o["reagReactionCache"]);
var __61414__$1 = cljs.core.dissoc.call(null,__61413,k);
(o["reagReactionCache"] = __61414__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return destroy.call(null,x);
} else {
return null;
}
});})(m,m__$1,r))
);
var v = cljs.core._deref.call(null,r__$1);
(o["reagReactionCache"] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4659__auto__ = self__.reaction;
if((temp__4659__auto__ == null)){
return reagent.ratom.cached_reaction.call(null,((function (temp__4659__auto__,this$__$1){
return (function (){
return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__4659__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__4659__auto__;
return cljs.core._deref.call(null,r);
}
});

reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});

reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Track.cljs$lang$type = true;

reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";

reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"reagent.ratom/Track");
});

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track.call(null,f,args);
var r = reagent.ratom.make_reaction.call(null,((function (t){
return (function (){
return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61417 = arguments.length;
var i__47902__auto___61418 = (0);
while(true){
if((i__47902__auto___61418 < len__47901__auto___61417)){
args__47908__auto__.push((arguments[i__47902__auto___61418]));

var G__61419 = (i__47902__auto___61418 + (1));
i__47902__auto___61418 = G__61419;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return reagent.ratom.make_track.call(null,f,args);
});

reagent.ratom.track.cljs$lang$maxFixedArity = (1);

reagent.ratom.track.cljs$lang$applyTo = (function (seq61415){
var G__61416 = cljs.core.first.call(null,seq61415);
var seq61415__$1 = cljs.core.next.call(null,seq61415);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic(G__61416,seq61415__$1);
});

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61422 = arguments.length;
var i__47902__auto___61423 = (0);
while(true){
if((i__47902__auto___61423 < len__47901__auto___61422)){
args__47908__auto__.push((arguments[i__47902__auto___61423]));

var G__61424 = (i__47902__auto___61423 + (1));
i__47902__auto___61423 = G__61424;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq61420){
var G__61421 = cljs.core.first.call(null,seq61420);
var seq61420__$1 = cljs.core.next.call(null,seq61420);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61421,seq61420__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_61425 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_61425;
}});

reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$)))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__4659__auto__ = self__.reaction;
if((temp__4659__auto__ == null)){
var f = ((((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$)))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?((function (temp__4659__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__4659__auto__,oldstate,this$__$1))
:((function (temp__4659__auto__,oldstate,this$__$1){
return (function (){
return self__.ratom.call(null,self__.path);
});})(temp__4659__auto__,oldstate,this$__$1))
);
return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__4659__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"reagent.ratom/RCursor");
});

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){

return reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__4661__auto__ = v.destroy;
if((temp__4661__auto__ == null)){
return null;
} else {
var f = temp__4661__auto__;
return f.call(null);
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__4659__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4659__auto__ == null)){
return [];
} else {
var c = temp__4659__auto__;
return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__47422__auto__ = (((this$ == null))?null:this$);
var m__47423__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,this$);
} else {
var m__47423__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__47422__auto__ = (((this$ == null))?null:this$);
var m__47423__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,this$,f);
} else {
var m__47423__auto____$1 = (reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__47422__auto__ = (((this$ == null))?null:this$);
var m__47423__auto__ = (reagent.ratom.run[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,this$);
} else {
var m__47423__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_61428 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_61428;
}});

reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if(((oldval === newval)) || (self__.dirty_QMARK_)){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
});

reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
self__.watching = derefed;

var seq__61429_61445 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__61430_61446 = null;
var count__61431_61447 = (0);
var i__61432_61448 = (0);
while(true){
if((i__61432_61448 < count__61431_61447)){
var w_61449 = cljs.core._nth.call(null,chunk__61430_61446,i__61432_61448);
cljs.core._add_watch.call(null,w_61449,this$,reagent.ratom.handle_reaction_change);


var G__61450 = seq__61429_61445;
var G__61451 = chunk__61430_61446;
var G__61452 = count__61431_61447;
var G__61453 = (i__61432_61448 + (1));
seq__61429_61445 = G__61450;
chunk__61430_61446 = G__61451;
count__61431_61447 = G__61452;
i__61432_61448 = G__61453;
continue;
} else {
var temp__4657__auto___61454 = cljs.core.seq.call(null,seq__61429_61445);
if(temp__4657__auto___61454){
var seq__61429_61455__$1 = temp__4657__auto___61454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61429_61455__$1)){
var c__47578__auto___61456 = cljs.core.chunk_first.call(null,seq__61429_61455__$1);
var G__61457 = cljs.core.chunk_rest.call(null,seq__61429_61455__$1);
var G__61458 = c__47578__auto___61456;
var G__61459 = cljs.core.count.call(null,c__47578__auto___61456);
var G__61460 = (0);
seq__61429_61445 = G__61457;
chunk__61430_61446 = G__61458;
count__61431_61447 = G__61459;
i__61432_61448 = G__61460;
continue;
} else {
var w_61461 = cljs.core.first.call(null,seq__61429_61455__$1);
cljs.core._add_watch.call(null,w_61461,this$,reagent.ratom.handle_reaction_change);


var G__61462 = cljs.core.next.call(null,seq__61429_61455__$1);
var G__61463 = null;
var G__61464 = (0);
var G__61465 = (0);
seq__61429_61445 = G__61462;
chunk__61430_61446 = G__61463;
count__61431_61447 = G__61464;
i__61432_61448 = G__61465;
continue;
}
} else {
}
}
break;
}

var seq__61433 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__61434 = null;
var count__61435 = (0);
var i__61436 = (0);
while(true){
if((i__61436 < count__61435)){
var w = cljs.core._nth.call(null,chunk__61434,i__61436);
cljs.core._remove_watch.call(null,w,this$);


var G__61466 = seq__61433;
var G__61467 = chunk__61434;
var G__61468 = count__61435;
var G__61469 = (i__61436 + (1));
seq__61433 = G__61466;
chunk__61434 = G__61467;
count__61435 = G__61468;
i__61436 = G__61469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61433);
if(temp__4657__auto__){
var seq__61433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61433__$1)){
var c__47578__auto__ = cljs.core.chunk_first.call(null,seq__61433__$1);
var G__61470 = cljs.core.chunk_rest.call(null,seq__61433__$1);
var G__61471 = c__47578__auto__;
var G__61472 = cljs.core.count.call(null,c__47578__auto__);
var G__61473 = (0);
seq__61433 = G__61470;
chunk__61434 = G__61471;
count__61435 = G__61472;
i__61436 = G__61473;
continue;
} else {
var w = cljs.core.first.call(null,seq__61433__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__61474 = cljs.core.next.call(null,seq__61433__$1);
var G__61475 = null;
var G__61476 = (0);
var G__61477 = (0);
seq__61433 = G__61474;
chunk__61434 = G__61475;
count__61435 = G__61476;
i__61436 = G__61477;
continue;
}
} else {
return null;
}
}
break;
}
});

reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if((self__.dirty_QMARK_) && (!((self__.watching == null)))){
return this$._run(true);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e61437){var e = e61437;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res))){
} else {
reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
});

reagent.ratom.Reaction.prototype._set_opts = (function (p__61438){
var self__ = this;
var map__61439 = p__61438;
var map__61439__$1 = ((((!((map__61439 == null)))?((((map__61439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61439):map__61439);
var auto_run__$1 = cljs.core.get.call(null,map__61439__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__61439__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__61439__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__61439__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1)),":"].join(''));
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__61441_61478 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__61442_61479 = null;
var count__61443_61480 = (0);
var i__61444_61481 = (0);
while(true){
if((i__61444_61481 < count__61443_61480)){
var w_61482 = cljs.core._nth.call(null,chunk__61442_61479,i__61444_61481);
cljs.core._remove_watch.call(null,w_61482,this$__$1);


var G__61483 = seq__61441_61478;
var G__61484 = chunk__61442_61479;
var G__61485 = count__61443_61480;
var G__61486 = (i__61444_61481 + (1));
seq__61441_61478 = G__61483;
chunk__61442_61479 = G__61484;
count__61443_61480 = G__61485;
i__61444_61481 = G__61486;
continue;
} else {
var temp__4657__auto___61487 = cljs.core.seq.call(null,seq__61441_61478);
if(temp__4657__auto___61487){
var seq__61441_61488__$1 = temp__4657__auto___61487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61441_61488__$1)){
var c__47578__auto___61489 = cljs.core.chunk_first.call(null,seq__61441_61488__$1);
var G__61490 = cljs.core.chunk_rest.call(null,seq__61441_61488__$1);
var G__61491 = c__47578__auto___61489;
var G__61492 = cljs.core.count.call(null,c__47578__auto___61489);
var G__61493 = (0);
seq__61441_61478 = G__61490;
chunk__61442_61479 = G__61491;
count__61443_61480 = G__61492;
i__61444_61481 = G__61493;
continue;
} else {
var w_61494 = cljs.core.first.call(null,seq__61441_61488__$1);
cljs.core._remove_watch.call(null,w_61494,this$__$1);


var G__61495 = cljs.core.next.call(null,seq__61441_61488__$1);
var G__61496 = null;
var G__61497 = (0);
var G__61498 = (0);
seq__61441_61478 = G__61495;
chunk__61442_61479 = G__61496;
count__61443_61480 = G__61497;
i__61444_61481 = G__61498;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__4661__auto__ = this$__$1.on_dispose_arr;
if((temp__4661__auto__ == null)){
return null;
} else {
var a = temp__4661__auto__;
var n__47683__auto__ = a.length;
var i = (0);
while(true){
if((i < n__47683__auto__)){
(a[i]).call(null,this$__$1);

var G__61499 = (i + (1));
i = G__61499;
continue;
} else {
return null;
}
break;
}
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__4659__auto__ = this$__$1.on_dispose_arr;
if((temp__4659__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__4659__auto__;
return a.push(f__$1);
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
reagent.ratom.remove_w.call(null,this$__$1,key);

if((!(was_empty)) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4661__auto___61500 = self__.caught;
if((temp__4661__auto___61500 == null)){
} else {
var e_61501 = temp__4661__auto___61500;
throw e_61501;
}

var non_reactive_61502 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_61502){
reagent.ratom.flush_BANG_.call(null);
} else {
}

if((non_reactive_61502) && ((self__.auto_run == null))){
if(self__.dirty_QMARK_){
var oldstate_61503 = self__.state;
self__.state = self__.f.call(null);

if(((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_61503,self__.state))){
} else {
reagent.ratom.notify_w.call(null,this$__$1,oldstate_61503,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"reagent.ratom/Reaction");
});

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__47908__auto__ = [];
var len__47901__auto___61509 = arguments.length;
var i__47902__auto___61510 = (0);
while(true){
if((i__47902__auto___61510 < len__47901__auto___61509)){
args__47908__auto__.push((arguments[i__47902__auto___61510]));

var G__61511 = (i__47902__auto___61510 + (1));
i__47902__auto___61510 = G__61511;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__61506){
var map__61507 = p__61506;
var map__61507__$1 = ((((!((map__61507 == null)))?((((map__61507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61507):map__61507);
var auto_run = cljs.core.get.call(null,map__61507__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__61507__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__61507__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq61504){
var G__61505 = cljs.core.first.call(null,seq61504);
var seq61504__$1 = cljs.core.next.call(null,seq61504);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__61505,seq61504__$1);
});

reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return run.call(null,obj);
});})(r,res))
;

(obj[key] = r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = {};
var res = reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"reagent.ratom/Wrapper");
});

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper.call(null,value,reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map
