// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
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
mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k17874,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__17878 = k17874;
var G__17878__$1 = (((G__17878 instanceof cljs.core.Keyword))?G__17878.fqn:null);
switch (G__17878__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17874,else__8538__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17873){
var self__ = this;
var G__17873__$1 = this;
return (new cljs.core.RecordIter((0),G__17873__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (671341226 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17875,other17876){
var self__ = this;
var this17875__$1 = this;
return (!((other17876 == null))) && ((this17875__$1.constructor === other17876.constructor)) && (cljs.core._EQ_.call(null,this17875__$1.unit,other17876.unit)) && (cljs.core._EQ_.call(null,this17875__$1.magnitude,other17876.magnitude)) && (cljs.core._EQ_.call(null,this17875__$1.__extmap,other17876.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__17873){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__17879 = cljs.core.keyword_identical_QMARK_;
var expr__17880 = k__8543__auto__;
if(cljs.core.truth_(pred__17879.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__17880))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(G__17873,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17879.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__17880))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__17873,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__17873),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__17873){
var self__ = this;
var this__8534__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__17873,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
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
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__17877){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__17877),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__17877),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__17877,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
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
mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k17884,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__17888 = k17884;
var G__17888__$1 = (((G__17888 instanceof cljs.core.Keyword))?G__17888.fqn:null);
switch (G__17888__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17884,else__8538__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17883){
var self__ = this;
var G__17883__$1 = this;
return (new cljs.core.RecordIter((0),G__17883__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (-830866841 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17885,other17886){
var self__ = this;
var this17885__$1 = this;
return (!((other17886 == null))) && ((this17885__$1.constructor === other17886.constructor)) && (cljs.core._EQ_.call(null,this17885__$1.function,other17886.function)) && (cljs.core._EQ_.call(null,this17885__$1.args,other17886.args)) && (cljs.core._EQ_.call(null,this17885__$1.__extmap,other17886.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__17883){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__17889 = cljs.core.keyword_identical_QMARK_;
var expr__17890 = k__8543__auto__;
if(cljs.core.truth_(pred__17889.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__17890))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(G__17883,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17889.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__17890))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__17883,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__17883),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__17883){
var self__ = this;
var this__8534__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__17883,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
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
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__17887){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__17887),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__17887),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__17887,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8535__auto__,k__8536__auto__){
var self__ = this;
var this__8535__auto____$1 = this;
return this__8535__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8536__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8537__auto__,k17894,else__8538__auto__){
var self__ = this;
var this__8537__auto____$1 = this;
var G__17898 = k17894;
var G__17898__$1 = (((G__17898 instanceof cljs.core.Keyword))?G__17898.fqn:null);
switch (G__17898__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17894,else__8538__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8549__auto__,writer__8550__auto__,opts__8551__auto__){
var self__ = this;
var this__8549__auto____$1 = this;
var pr_pair__8552__auto__ = ((function (this__8549__auto____$1){
return (function (keyval__8553__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,cljs.core.pr_writer,""," ","",opts__8551__auto__,keyval__8553__auto__);
});})(this__8549__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8550__auto__,pr_pair__8552__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__8551__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17893){
var self__ = this;
var G__17893__$1 = this;
return (new cljs.core.RecordIter((0),G__17893__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8533__auto__){
var self__ = this;
var this__8533__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8530__auto__){
var self__ = this;
var this__8530__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8539__auto__){
var self__ = this;
var this__8539__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8531__auto__){
var self__ = this;
var this__8531__auto____$1 = this;
var h__8349__auto__ = self__.__hash;
if(!((h__8349__auto__ == null))){
return h__8349__auto__;
} else {
var h__8349__auto____$1 = ((function (h__8349__auto__,this__8531__auto____$1){
return (function (coll__8532__auto__){
return (845600990 ^ cljs.core.hash_unordered_coll.call(null,coll__8532__auto__));
});})(h__8349__auto__,this__8531__auto____$1))
.call(null,this__8531__auto____$1);
self__.__hash = h__8349__auto____$1;

return h__8349__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17895,other17896){
var self__ = this;
var this17895__$1 = this;
return (!((other17896 == null))) && ((this17895__$1.constructor === other17896.constructor)) && (cljs.core._EQ_.call(null,this17895__$1.identifier,other17896.identifier)) && (cljs.core._EQ_.call(null,this17895__$1.value,other17896.value)) && (cljs.core._EQ_.call(null,this17895__$1.__extmap,other17896.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8544__auto__,k__8545__auto__){
var self__ = this;
var this__8544__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__8545__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8544__auto____$1),self__.__meta),k__8545__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8545__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8542__auto__,k__8543__auto__,G__17893){
var self__ = this;
var this__8542__auto____$1 = this;
var pred__17899 = cljs.core.keyword_identical_QMARK_;
var expr__17900 = k__8543__auto__;
if(cljs.core.truth_(pred__17899.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__17900))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(G__17893,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17899.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__17900))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__17893,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8543__auto__,G__17893),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8547__auto__){
var self__ = this;
var this__8547__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8534__auto__,G__17893){
var self__ = this;
var this__8534__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__17893,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8540__auto__,entry__8541__auto__){
var self__ = this;
var this__8540__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8541__auto__)){
return this__8540__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8541__auto__,(0)),cljs.core._nth.call(null,entry__8541__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8540__auto____$1,entry__8541__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__8571__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__8571__auto__,writer__8572__auto__){
return cljs.core._write.call(null,writer__8572__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
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
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__17897){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__17897),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__17897),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__17897,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});

