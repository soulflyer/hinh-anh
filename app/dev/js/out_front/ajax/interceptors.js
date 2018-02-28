// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k17156,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__17158 = (((k17156 instanceof cljs.core.Keyword))?k17156.fqn:null);
switch (G__17158) {
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
return cljs.core.get.call(null,self__.__extmap,k17156,else__7578__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__17159,opts){
var self__ = this;
var map__17160 = p__17159;
var map__17160__$1 = ((((!((map__17160 == null)))?((((map__17160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17160):map__17160);
var request__$1 = cljs.core.get.call(null,map__17160__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__17162 = this;
var map__17162__$1 = ((((!((map__17162 == null)))?((((map__17162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17162):map__17162);
var request__$2 = cljs.core.get.call(null,map__17162__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__17164,xhrio){
var self__ = this;
var map__17165 = p__17164;
var map__17165__$1 = ((((!((map__17165 == null)))?((((map__17165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17165):map__17165);
var response__$1 = cljs.core.get.call(null,map__17165__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__17167 = this;
var map__17167__$1 = ((((!((map__17167 == null)))?((((map__17167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17167):map__17167);
var response__$2 = cljs.core.get.call(null,map__17167__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17155){
var self__ = this;
var G__17155__$1 = this;
return (new cljs.core.RecordIter((0),G__17155__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__17155){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__17169 = cljs.core.keyword_identical_QMARK_;
var expr__17170 = k__7583__auto__;
if(cljs.core.truth_(pred__17169.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__17170))){
return (new ajax.interceptors.StandardInterceptor(G__17155,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17169.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__17170))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__17155,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17169.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__17170))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__17155,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__17155),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__17155){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__17155,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__17157){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__17157),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__17157),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__17157),null,cljs.core.dissoc.call(null,G__17157,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__17173,xhrio){
var map__17176 = p__17173;
var map__17176__$1 = ((((!((map__17176 == null)))?((((map__17176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17176):map__17176);
var description = cljs.core.get.call(null,map__17176__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__8064__auto__ = [];
var len__8057__auto___17182 = arguments.length;
var i__8058__auto___17183 = (0);
while(true){
if((i__8058__auto___17183 < len__8057__auto___17182)){
args__8064__auto__.push((arguments[i__8058__auto___17183]));

var G__17184 = (i__8058__auto___17183 + (1));
i__8058__auto___17183 = G__17184;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((3) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8065__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq17178){
var G__17179 = cljs.core.first.call(null,seq17178);
var seq17178__$1 = cljs.core.next.call(null,seq17178);
var G__17180 = cljs.core.first.call(null,seq17178__$1);
var seq17178__$2 = cljs.core.next.call(null,seq17178__$1);
var G__17181 = cljs.core.first.call(null,seq17178__$2);
var seq17178__$3 = cljs.core.next.call(null,seq17178__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__17179,G__17180,G__17181,seq17178__$3);
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k17187,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__17189 = (((k17187 instanceof cljs.core.Keyword))?k17187.fqn:null);
switch (G__17189) {
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
return cljs.core.get.call(null,self__.__extmap,k17187,else__7578__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__17190,request){
var self__ = this;
var map__17191 = p__17190;
var map__17191__$1 = ((((!((map__17191 == null)))?((((map__17191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17191):map__17191);
var content_type__$1 = cljs.core.get.call(null,map__17191__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__17193 = this;
var map__17193__$1 = ((((!((map__17193 == null)))?((((map__17193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17193):map__17193);
var content_type__$2 = cljs.core.get.call(null,map__17193__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__17193,map__17193__$1,content_type__$2,map__17191,map__17191__$1,content_type__$1){
return (function (p1__17185_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__6948__auto__ = p1__17185_SHARP_;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__17193,map__17193__$1,content_type__$2,map__17191,map__17191__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__17195,xhrio){
var self__ = this;
var map__17196 = p__17195;
var map__17196__$1 = ((((!((map__17196 == null)))?((((map__17196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17196):map__17196);
var format = map__17196__$1;
var read__$1 = cljs.core.get.call(null,map__17196__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__17198 = this;
var map__17198__$1 = ((((!((map__17198 == null)))?((((map__17198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17198):map__17198);
var format__$1 = map__17198__$1;
var read__$2 = cljs.core.get.call(null,map__17198__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__17201 = status;
switch (G__17201) {
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
}catch (e17202){if((e17202 instanceof Object)){
var e = e17202;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e17202;

}
}
}
}catch (e17200){if((e17200 instanceof Object)){
var e = e17200;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e17200;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17186){
var self__ = this;
var G__17186__$1 = this;
return (new cljs.core.RecordIter((0),G__17186__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__17186){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__17203 = cljs.core.keyword_identical_QMARK_;
var expr__17204 = k__7583__auto__;
if(cljs.core.truth_(pred__17203.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__17204))){
return (new ajax.interceptors.ResponseFormat(G__17186,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17203.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__17204))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__17186,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17203.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__17204))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__17186,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__17186),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__17186){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__17186,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__17188){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__17188),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__17188),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__17188),null,cljs.core.dissoc.call(null,G__17188,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k17209,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__17211 = k17209;
switch (G__17211) {
default:
return cljs.core.get.call(null,self__.__extmap,k17209,else__7578__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__17212){
var self__ = this;
var map__17213 = p__17212;
var map__17213__$1 = ((((!((map__17213 == null)))?((((map__17213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17213):map__17213);
var request = map__17213__$1;
var uri = cljs.core.get.call(null,map__17213__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__17213__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__17213__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__17213__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__17213__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__17215 = ajax.interceptors.get_request_format.call(null,format);
var map__17215__$1 = ((((!((map__17215 == null)))?((((map__17215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17215):map__17215);
var write = cljs.core.get.call(null,map__17215__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__17215__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6948__auto__ = headers;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17208){
var self__ = this;
var G__17208__$1 = this;
return (new cljs.core.RecordIter((0),G__17208__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__17208){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__17217 = cljs.core.keyword_identical_QMARK_;
var expr__17218 = k__7583__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__17208),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__17208){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__17208,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__17210){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__17210),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var args17221 = [];
var len__8057__auto___17230 = arguments.length;
var i__8058__auto___17231 = (0);
while(true){
if((i__8058__auto___17231 < len__8057__auto___17230)){
args17221.push((arguments[i__8058__auto___17231]));

var G__17232 = (i__8058__auto___17231 + (1));
i__8058__auto___17231 = G__17232;
continue;
} else {
}
break;
}

var G__17223 = args17221.length;
switch (G__17223) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17221.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__17224,uri){
var map__17225 = p__17224;
var map__17225__$1 = ((((!((map__17225 == null)))?((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17225):map__17225);
var vec_strategy = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__17227){
var map__17228 = p__17227;
var map__17228__$1 = ((((!((map__17228 == null)))?((((map__17228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17228):map__17228);
var vec_strategy = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__17228,map__17228__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__17228,map__17228__$1,vec_strategy,params))
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k17235,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__17237 = k17235;
switch (G__17237) {
default:
return cljs.core.get.call(null,self__.__extmap,k17235,else__7578__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__17238){
var self__ = this;
var map__17239 = p__17238;
var map__17239__$1 = ((((!((map__17239 == null)))?((((map__17239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17239):map__17239);
var request = map__17239__$1;
var method = cljs.core.get.call(null,map__17239__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17234){
var self__ = this;
var G__17234__$1 = this;
return (new cljs.core.RecordIter((0),G__17234__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__17234){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__17241 = cljs.core.keyword_identical_QMARK_;
var expr__17242 = k__7583__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__17234),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__17234){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__17234,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__17236){
return (new ajax.interceptors.ProcessGet(null,cljs.core.dissoc.call(null,G__17236),null));
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7575__auto__,k__7576__auto__){
var self__ = this;
var this__7575__auto____$1 = this;
return this__7575__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7576__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7577__auto__,k17246,else__7578__auto__){
var self__ = this;
var this__7577__auto____$1 = this;
var G__17248 = k17246;
switch (G__17248) {
default:
return cljs.core.get.call(null,self__.__extmap,k17246,else__7578__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__17249){
var self__ = this;
var map__17250 = p__17249;
var map__17250__$1 = ((((!((map__17250 == null)))?((((map__17250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17250):map__17250);
var request = map__17250__$1;
var body = cljs.core.get.call(null,map__17250__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7589__auto__,writer__7590__auto__,opts__7591__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
var pr_pair__7592__auto__ = ((function (this__7589__auto____$1){
return (function (keyval__7593__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,cljs.core.pr_writer,""," ","",opts__7591__auto__,keyval__7593__auto__);
});})(this__7589__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7590__auto__,pr_pair__7592__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__7591__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17245){
var self__ = this;
var G__17245__$1 = this;
return (new cljs.core.RecordIter((0),G__17245__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7573__auto__){
var self__ = this;
var this__7573__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7569__auto__){
var self__ = this;
var this__7569__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7579__auto__){
var self__ = this;
var this__7579__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7570__auto__){
var self__ = this;
var this__7570__auto____$1 = this;
var h__7388__auto__ = self__.__hash;
if(!((h__7388__auto__ == null))){
return h__7388__auto__;
} else {
var h__7388__auto____$1 = cljs.core.hash_imap.call(null,this__7570__auto____$1);
self__.__hash = h__7388__auto____$1;

return h__7388__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7571__auto__,other__7572__auto__){
var self__ = this;
var this__7571__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6936__auto__ = other__7572__auto__;
if(cljs.core.truth_(and__6936__auto__)){
return ((this__7571__auto____$1.constructor === other__7572__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7571__auto____$1,other__7572__auto__));
} else {
return and__6936__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7584__auto__,k__7585__auto__){
var self__ = this;
var this__7584__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__7585__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7584__auto____$1),self__.__meta),k__7585__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7585__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7582__auto__,k__7583__auto__,G__17245){
var self__ = this;
var this__7582__auto____$1 = this;
var pred__17252 = cljs.core.keyword_identical_QMARK_;
var expr__17253 = k__7583__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7583__auto__,G__17245),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7587__auto__){
var self__ = this;
var this__7587__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7574__auto__,G__17245){
var self__ = this;
var this__7574__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__17245,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7580__auto__,entry__7581__auto__){
var self__ = this;
var this__7580__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7581__auto__)){
return this__7580__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__7581__auto__,(0)),cljs.core._nth.call(null,entry__7581__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7580__auto____$1,entry__7581__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__7609__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__7609__auto__,writer__7610__auto__){
return cljs.core._write.call(null,writer__7610__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__17247){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.dissoc.call(null,G__17247),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__17256){
var map__17259 = p__17256;
var map__17259__$1 = ((((!((map__17259 == null)))?((((map__17259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17259):map__17259);
var opts = map__17259__$1;
var response_format = cljs.core.get.call(null,map__17259__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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