// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k54507,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__54511 = k54507;
var G__54511__$1 = (((G__54511 instanceof cljs.core.Keyword))?G__54511.fqn:null);
switch (G__54511__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54507,else__47382__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__54512,opts){
var self__ = this;
var map__54513 = p__54512;
var map__54513__$1 = ((((!((map__54513 == null)))?((((map__54513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54513):map__54513);
var request__$1 = cljs.core.get.call(null,map__54513__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__54515 = this;
var map__54515__$1 = ((((!((map__54515 == null)))?((((map__54515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54515):map__54515);
var request__$2 = cljs.core.get.call(null,map__54515__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__54517,xhrio){
var self__ = this;
var map__54518 = p__54517;
var map__54518__$1 = ((((!((map__54518 == null)))?((((map__54518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54518):map__54518);
var response__$1 = cljs.core.get.call(null,map__54518__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__54520 = this;
var map__54520__$1 = ((((!((map__54520 == null)))?((((map__54520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54520):map__54520);
var response__$2 = cljs.core.get.call(null,map__54520__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54506){
var self__ = this;
var G__54506__$1 = this;
return (new cljs.core.RecordIter((0),G__54506__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54508,other54509){
var self__ = this;
var this54508__$1 = this;
return (!((other54509 == null))) && ((this54508__$1.constructor === other54509.constructor)) && (cljs.core._EQ_.call(null,this54508__$1.name,other54509.name)) && (cljs.core._EQ_.call(null,this54508__$1.request,other54509.request)) && (cljs.core._EQ_.call(null,this54508__$1.response,other54509.response)) && (cljs.core._EQ_.call(null,this54508__$1.__extmap,other54509.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__54506){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__54522 = cljs.core.keyword_identical_QMARK_;
var expr__54523 = k__47387__auto__;
if(cljs.core.truth_(pred__54522.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__54523))){
return (new ajax.interceptors.StandardInterceptor(G__54506,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54522.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__54523))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__54506,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54522.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__54523))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__54506,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__54506),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"request","request",1772954723),self__.request,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"response","response",-1068424192),self__.response,null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__54506){
var self__ = this;
var this__47378__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__54506,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"ajax.interceptors/StandardInterceptor");
});

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__54510){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__54510),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__54510),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__54510),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54510,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__54526,xhrio){
var map__54527 = p__54526;
var map__54527__$1 = ((((!((map__54527 == null)))?((((map__54527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54527):map__54527);
var description = cljs.core.get.call(null,map__54527__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__47908__auto__ = [];
var len__47901__auto___54533 = arguments.length;
var i__47902__auto___54534 = (0);
while(true){
if((i__47902__auto___54534 < len__47901__auto___54533)){
args__47908__auto__.push((arguments[i__47902__auto___54534]));

var G__54535 = (i__47902__auto___54534 + (1));
i__47902__auto___54534 = G__54535;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((3) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__47909__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq54529){
var G__54530 = cljs.core.first.call(null,seq54529);
var seq54529__$1 = cljs.core.next.call(null,seq54529);
var G__54531 = cljs.core.first.call(null,seq54529__$1);
var seq54529__$2 = cljs.core.next.call(null,seq54529__$1);
var G__54532 = cljs.core.first.call(null,seq54529__$2);
var seq54529__$3 = cljs.core.next.call(null,seq54529__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__54530,G__54531,G__54532,seq54529__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k54538,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__54542 = k54538;
var G__54542__$1 = (((G__54542 instanceof cljs.core.Keyword))?G__54542.fqn:null);
switch (G__54542__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54538,else__47382__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__54543,request){
var self__ = this;
var map__54544 = p__54543;
var map__54544__$1 = ((((!((map__54544 == null)))?((((map__54544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54544):map__54544);
var content_type__$1 = cljs.core.get.call(null,map__54544__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__54546 = this;
var map__54546__$1 = ((((!((map__54546 == null)))?((((map__54546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54546):map__54546);
var content_type__$2 = cljs.core.get.call(null,map__54546__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__54546,map__54546__$1,content_type__$2,map__54544,map__54544__$1,content_type__$1){
return (function (p1__54536_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__46739__auto__ = p1__54536_SHARP_;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__54546,map__54546__$1,content_type__$2,map__54544,map__54544__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__54548,xhrio){
var self__ = this;
var map__54549 = p__54548;
var map__54549__$1 = ((((!((map__54549 == null)))?((((map__54549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54549):map__54549);
var format = map__54549__$1;
var read__$1 = cljs.core.get.call(null,map__54549__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__54551 = this;
var map__54551__$1 = ((((!((map__54551 == null)))?((((map__54551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54551):map__54551);
var format__$1 = map__54551__$1;
var read__$2 = cljs.core.get.call(null,map__54551__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__54554 = status;
switch (G__54554) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e54555){if((e54555 instanceof Object)){
var e = e54555;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e54555;

}
}
}
}catch (e54553){if((e54553 instanceof Object)){
var e = e54553;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e54553;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54537){
var self__ = this;
var G__54537__$1 = this;
return (new cljs.core.RecordIter((0),G__54537__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54539,other54540){
var self__ = this;
var this54539__$1 = this;
return (!((other54540 == null))) && ((this54539__$1.constructor === other54540.constructor)) && (cljs.core._EQ_.call(null,this54539__$1.read,other54540.read)) && (cljs.core._EQ_.call(null,this54539__$1.description,other54540.description)) && (cljs.core._EQ_.call(null,this54539__$1.content_type,other54540.content_type)) && (cljs.core._EQ_.call(null,this54539__$1.__extmap,other54540.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__54537){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__54556 = cljs.core.keyword_identical_QMARK_;
var expr__54557 = k__47387__auto__;
if(cljs.core.truth_(pred__54556.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__54557))){
return (new ajax.interceptors.ResponseFormat(G__54537,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54556.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__54557))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__54537,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54556.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__54557))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__54537,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__54537),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read","read",1140058661),self__.read,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type,null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__54537){
var self__ = this;
var this__47378__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__54537,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"ajax.interceptors/ResponseFormat");
});

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__54541){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__54541),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__54541),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__54541),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54541,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k54562,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__54566 = k54562;
switch (G__54566) {
default:
return cljs.core.get.call(null,self__.__extmap,k54562,else__47382__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__54567){
var self__ = this;
var map__54568 = p__54567;
var map__54568__$1 = ((((!((map__54568 == null)))?((((map__54568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54568):map__54568);
var request = map__54568__$1;
var uri = cljs.core.get.call(null,map__54568__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__54568__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__54568__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__54568__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__54568__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__54570 = ajax.interceptors.get_request_format.call(null,format);
var map__54570__$1 = ((((!((map__54570 == null)))?((((map__54570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54570):map__54570);
var write = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__54570__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__46739__auto__ = headers;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54561){
var self__ = this;
var G__54561__$1 = this;
return (new cljs.core.RecordIter((0),G__54561__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54563,other54564){
var self__ = this;
var this54563__$1 = this;
return (!((other54564 == null))) && ((this54563__$1.constructor === other54564.constructor)) && (cljs.core._EQ_.call(null,this54563__$1.__extmap,other54564.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__54561){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__54572 = cljs.core.keyword_identical_QMARK_;
var expr__54573 = k__47387__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__54561),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__54561){
var self__ = this;
var this__47378__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__54561,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"ajax.interceptors/ApplyRequestFormat");
});

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__54565){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54565)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__54577 = arguments.length;
switch (G__54577) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__54578,uri){
var map__54579 = p__54578;
var map__54579__$1 = ((((!((map__54579 == null)))?((((map__54579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54579):map__54579);
var vec_strategy = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__54579__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__54581){
var map__54582 = p__54581;
var map__54582__$1 = ((((!((map__54582 == null)))?((((map__54582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54582):map__54582);
var vec_strategy = cljs.core.get.call(null,map__54582__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__54582__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__54582,map__54582__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__54582,map__54582__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k54586,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__54590 = k54586;
switch (G__54590) {
default:
return cljs.core.get.call(null,self__.__extmap,k54586,else__47382__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__54591){
var self__ = this;
var map__54592 = p__54591;
var map__54592__$1 = ((((!((map__54592 == null)))?((((map__54592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54592):map__54592);
var request = map__54592__$1;
var method = cljs.core.get.call(null,map__54592__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54585){
var self__ = this;
var G__54585__$1 = this;
return (new cljs.core.RecordIter((0),G__54585__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54587,other54588){
var self__ = this;
var this54587__$1 = this;
return (!((other54588 == null))) && ((this54587__$1.constructor === other54588.constructor)) && (cljs.core._EQ_.call(null,this54587__$1.__extmap,other54588.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__54585){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__54594 = cljs.core.keyword_identical_QMARK_;
var expr__54595 = k__47387__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__54585),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__54585){
var self__ = this;
var this__47378__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__54585,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessGet",null,(1),null));
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"ajax.interceptors/ProcessGet");
});

/**
 * Positional factory function for ajax.interceptors/ProcessGet.
 */
ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessGet, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__54589){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54589)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__47379__auto__,k__47380__auto__){
var self__ = this;
var this__47379__auto____$1 = this;
return this__47379__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__47380__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__47381__auto__,k54599,else__47382__auto__){
var self__ = this;
var this__47381__auto____$1 = this;
var G__54603 = k54599;
switch (G__54603) {
default:
return cljs.core.get.call(null,self__.__extmap,k54599,else__47382__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__54604){
var self__ = this;
var map__54605 = p__54604;
var map__54605__$1 = ((((!((map__54605 == null)))?((((map__54605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54605):map__54605);
var request = map__54605__$1;
var body = cljs.core.get.call(null,map__54605__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__47393__auto__,writer__47394__auto__,opts__47395__auto__){
var self__ = this;
var this__47393__auto____$1 = this;
var pr_pair__47396__auto__ = ((function (this__47393__auto____$1){
return (function (keyval__47397__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,cljs.core.pr_writer,""," ","",opts__47395__auto__,keyval__47397__auto__);
});})(this__47393__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__47394__auto__,pr_pair__47396__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__47395__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54598){
var self__ = this;
var G__54598__$1 = this;
return (new cljs.core.RecordIter((0),G__54598__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__47377__auto__){
var self__ = this;
var this__47377__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__47374__auto__){
var self__ = this;
var this__47374__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__47383__auto__){
var self__ = this;
var this__47383__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__47375__auto__){
var self__ = this;
var this__47375__auto____$1 = this;
var h__47193__auto__ = self__.__hash;
if(!((h__47193__auto__ == null))){
return h__47193__auto__;
} else {
var h__47193__auto____$1 = ((function (h__47193__auto__,this__47375__auto____$1){
return (function (coll__47376__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__47376__auto__));
});})(h__47193__auto__,this__47375__auto____$1))
.call(null,this__47375__auto____$1);
self__.__hash = h__47193__auto____$1;

return h__47193__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54600,other54601){
var self__ = this;
var this54600__$1 = this;
return (!((other54601 == null))) && ((this54600__$1.constructor === other54601.constructor)) && (cljs.core._EQ_.call(null,this54600__$1.__extmap,other54601.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__47388__auto__,k__47389__auto__){
var self__ = this;
var this__47388__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__47389__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__47388__auto____$1),self__.__meta),k__47389__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__47389__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__47386__auto__,k__47387__auto__,G__54598){
var self__ = this;
var this__47386__auto____$1 = this;
var pred__54607 = cljs.core.keyword_identical_QMARK_;
var expr__54608 = k__47387__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__47387__auto__,G__54598),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__47391__auto__){
var self__ = this;
var this__47391__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__47378__auto__,G__54598){
var self__ = this;
var this__47378__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__54598,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__47384__auto__,entry__47385__auto__){
var self__ = this;
var this__47384__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__47385__auto__)){
return this__47384__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__47385__auto__,(0)),cljs.core._nth.call(null,entry__47385__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__47384__auto____$1,entry__47385__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__47415__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__47415__auto__,writer__47416__auto__){
return cljs.core._write.call(null,writer__47416__auto__,"ajax.interceptors/DirectSubmission");
});

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__54602){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54602)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__54611){
var map__54612 = p__54611;
var map__54612__$1 = ((((!((map__54612 == null)))?((((map__54612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54612):map__54612);
var opts = map__54612__$1;
var response_format = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map
