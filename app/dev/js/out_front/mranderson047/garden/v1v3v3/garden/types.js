// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('mranderson047.garden.v1v3v3.garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k63461,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__63465 = k63461;
var G__63465__$1 = (((G__63465 instanceof cljs.core.Keyword))?G__63465.fqn:null);
switch (G__63465__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63461,else__47382__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63460){
var self__ = this;
var G__63460__$1 = this;
return (new cljs.core.RecordIter((0),G__63460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (671341226 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63462,other63463){
var self__ = this;
var this63462__$1 = this;
return (!((other63463 == null))) && ((this63462__$1.constructor === other63463.constructor)) && (cljs.core._EQ_.call(null,this63462__$1.unit,other63463.unit)) && (cljs.core._EQ_.call(null,this63462__$1.magnitude,other63463.magnitude)) && (cljs.core._EQ_.call(null,this63462__$1.__extmap,other63463.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__63460){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__63466 = cljs.core.keyword_identical_QMARK_;
var expr__63467 = k__47387__auto__;
if(cljs.core.truth_(pred__63466.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__63467))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(G__63460,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63466.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__63467))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__63460,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__63460),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__63460){
var self__ = this;
var this__47378__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__63460,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__63464){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__63464),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__63464),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63464,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k63471,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__63475 = k63471;
var G__63475__$1 = (((G__63475 instanceof cljs.core.Keyword))?G__63475.fqn:null);
switch (G__63475__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63471,else__47382__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63470){
var self__ = this;
var G__63470__$1 = this;
return (new cljs.core.RecordIter((0),G__63470__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (-830866841 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63472,other63473){
var self__ = this;
var this63472__$1 = this;
return (!((other63473 == null))) && ((this63472__$1.constructor === other63473.constructor)) && (cljs.core._EQ_.call(null,this63472__$1.function,other63473.function)) && (cljs.core._EQ_.call(null,this63472__$1.args,other63473.args)) && (cljs.core._EQ_.call(null,this63472__$1.__extmap,other63473.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__63470){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__63476 = cljs.core.keyword_identical_QMARK_;
var expr__63477 = k__47387__auto__;
if(cljs.core.truth_(pred__63476.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__63477))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(G__63470,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63476.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__63477))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__63470,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__63470),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__63470){
var self__ = this;
var this__47378__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__63470,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__63474){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__63474),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__63474),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63474,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k63481,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__63485 = k63481;
var G__63485__$1 = (((G__63485 instanceof cljs.core.Keyword))?G__63485.fqn:null);
switch (G__63485__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63481,else__47382__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63480){
var self__ = this;
var G__63480__$1 = this;
return (new cljs.core.RecordIter((0),G__63480__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (845600990 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63482,other63483){
var self__ = this;
var this63482__$1 = this;
return (!((other63483 == null))) && ((this63482__$1.constructor === other63483.constructor)) && (cljs.core._EQ_.call(null,this63482__$1.identifier,other63483.identifier)) && (cljs.core._EQ_.call(null,this63482__$1.value,other63483.value)) && (cljs.core._EQ_.call(null,this63482__$1.__extmap,other63483.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__63480){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__63486 = cljs.core.keyword_identical_QMARK_;
var expr__63487 = k__47387__auto__;
if(cljs.core.truth_(pred__63486.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__63487))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(G__63480,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63486.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__63487))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__63480,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__63480),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__63480){
var self__ = this;
var this__47378__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__63480,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__63484){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__63484),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__63484),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63484,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map
