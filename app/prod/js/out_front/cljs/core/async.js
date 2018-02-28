// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14931 = [];
var len__8057__auto___14937 = arguments.length;
var i__8058__auto___14938 = (0);
while(true){
if((i__8058__auto___14938 < len__8057__auto___14937)){
args14931.push((arguments[i__8058__auto___14938]));

var G__14939 = (i__8058__auto___14938 + (1));
i__8058__auto___14938 = G__14939;
continue;
} else {
}
break;
}

var G__14933 = args14931.length;
switch (G__14933) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14931.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14934 = (function (f,blockable,meta14935){
this.f = f;
this.blockable = blockable;
this.meta14935 = meta14935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14936,meta14935__$1){
var self__ = this;
var _14936__$1 = this;
return (new cljs.core.async.t_cljs$core$async14934(self__.f,self__.blockable,meta14935__$1));
});

cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14936){
var self__ = this;
var _14936__$1 = this;
return self__.meta14935;
});

cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14935","meta14935",1879360794,null)], null);
});

cljs.core.async.t_cljs$core$async14934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14934";

cljs.core.async.t_cljs$core$async14934.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async14934");
});

cljs.core.async.__GT_t_cljs$core$async14934 = (function cljs$core$async$__GT_t_cljs$core$async14934(f__$1,blockable__$1,meta14935){
return (new cljs.core.async.t_cljs$core$async14934(f__$1,blockable__$1,meta14935));
});

}

return (new cljs.core.async.t_cljs$core$async14934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14943 = [];
var len__8057__auto___14946 = arguments.length;
var i__8058__auto___14947 = (0);
while(true){
if((i__8058__auto___14947 < len__8057__auto___14946)){
args14943.push((arguments[i__8058__auto___14947]));

var G__14948 = (i__8058__auto___14947 + (1));
i__8058__auto___14947 = G__14948;
continue;
} else {
}
break;
}

var G__14945 = args14943.length;
switch (G__14945) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14943.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14950 = [];
var len__8057__auto___14953 = arguments.length;
var i__8058__auto___14954 = (0);
while(true){
if((i__8058__auto___14954 < len__8057__auto___14953)){
args14950.push((arguments[i__8058__auto___14954]));

var G__14955 = (i__8058__auto___14954 + (1));
i__8058__auto___14954 = G__14955;
continue;
} else {
}
break;
}

var G__14952 = args14950.length;
switch (G__14952) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14950.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14957 = [];
var len__8057__auto___14960 = arguments.length;
var i__8058__auto___14961 = (0);
while(true){
if((i__8058__auto___14961 < len__8057__auto___14960)){
args14957.push((arguments[i__8058__auto___14961]));

var G__14962 = (i__8058__auto___14961 + (1));
i__8058__auto___14961 = G__14962;
continue;
} else {
}
break;
}

var G__14959 = args14957.length;
switch (G__14959) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14957.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14964,ret){
return (function (){
return fn1.call(null,val_14964);
});})(val_14964,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14965 = [];
var len__8057__auto___14968 = arguments.length;
var i__8058__auto___14969 = (0);
while(true){
if((i__8058__auto___14969 < len__8057__auto___14968)){
args14965.push((arguments[i__8058__auto___14969]));

var G__14970 = (i__8058__auto___14969 + (1));
i__8058__auto___14969 = G__14970;
continue;
} else {
}
break;
}

var G__14967 = args14965.length;
switch (G__14967) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14965.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7871__auto___14972 = n;
var x_14973 = (0);
while(true){
if((x_14973 < n__7871__auto___14972)){
(a[x_14973] = (0));

var G__14974 = (x_14973 + (1));
x_14973 = G__14974;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14975 = (i + (1));
i = G__14975;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14979 = (function (flag,meta14980){
this.flag = flag;
this.meta14980 = meta14980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14981,meta14980__$1){
var self__ = this;
var _14981__$1 = this;
return (new cljs.core.async.t_cljs$core$async14979(self__.flag,meta14980__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14981){
var self__ = this;
var _14981__$1 = this;
return self__.meta14980;
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14980","meta14980",-1948136894,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14979";

cljs.core.async.t_cljs$core$async14979.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async14979");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14979 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14979(flag__$1,meta14980){
return (new cljs.core.async.t_cljs$core$async14979(flag__$1,meta14980));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14979(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14985 = (function (flag,cb,meta14986){
this.flag = flag;
this.cb = cb;
this.meta14986 = meta14986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14987,meta14986__$1){
var self__ = this;
var _14987__$1 = this;
return (new cljs.core.async.t_cljs$core$async14985(self__.flag,self__.cb,meta14986__$1));
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14987){
var self__ = this;
var _14987__$1 = this;
return self__.meta14986;
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14986","meta14986",-464356579,null)], null);
});

cljs.core.async.t_cljs$core$async14985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14985";

cljs.core.async.t_cljs$core$async14985.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async14985");
});

cljs.core.async.__GT_t_cljs$core$async14985 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14985(flag__$1,cb__$1,meta14986){
return (new cljs.core.async.t_cljs$core$async14985(flag__$1,cb__$1,meta14986));
});

}

return (new cljs.core.async.t_cljs$core$async14985(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14989_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6948__auto__ = wport;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14990 = (i + (1));
i = G__14990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6948__auto__ = ret;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6936__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6936__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6936__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8064__auto__ = [];
var len__8057__auto___14996 = arguments.length;
var i__8058__auto___14997 = (0);
while(true){
if((i__8058__auto___14997 < len__8057__auto___14996)){
args__8064__auto__.push((arguments[i__8058__auto___14997]));

var G__14998 = (i__8058__auto___14997 + (1));
i__8058__auto___14997 = G__14998;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14993){
var map__14994 = p__14993;
var map__14994__$1 = ((((!((map__14994 == null)))?((((map__14994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14994):map__14994);
var opts = map__14994__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14991){
var G__14992 = cljs.core.first.call(null,seq14991);
var seq14991__$1 = cljs.core.next.call(null,seq14991);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14992,seq14991__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14999 = [];
var len__8057__auto___15049 = arguments.length;
var i__8058__auto___15050 = (0);
while(true){
if((i__8058__auto___15050 < len__8057__auto___15049)){
args14999.push((arguments[i__8058__auto___15050]));

var G__15051 = (i__8058__auto___15050 + (1));
i__8058__auto___15050 = G__15051;
continue;
} else {
}
break;
}

var G__15001 = args14999.length;
switch (G__15001) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14999.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14886__auto___15053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___15053){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___15053){
return (function (state_15025){
var state_val_15026 = (state_15025[(1)]);
if((state_val_15026 === (7))){
var inst_15021 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15027_15054 = state_15025__$1;
(statearr_15027_15054[(2)] = inst_15021);

(statearr_15027_15054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (1))){
var state_15025__$1 = state_15025;
var statearr_15028_15055 = state_15025__$1;
(statearr_15028_15055[(2)] = null);

(statearr_15028_15055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (4))){
var inst_15004 = (state_15025[(7)]);
var inst_15004__$1 = (state_15025[(2)]);
var inst_15005 = (inst_15004__$1 == null);
var state_15025__$1 = (function (){var statearr_15029 = state_15025;
(statearr_15029[(7)] = inst_15004__$1);

return statearr_15029;
})();
if(cljs.core.truth_(inst_15005)){
var statearr_15030_15056 = state_15025__$1;
(statearr_15030_15056[(1)] = (5));

} else {
var statearr_15031_15057 = state_15025__$1;
(statearr_15031_15057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (13))){
var state_15025__$1 = state_15025;
var statearr_15032_15058 = state_15025__$1;
(statearr_15032_15058[(2)] = null);

(statearr_15032_15058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (6))){
var inst_15004 = (state_15025[(7)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15025__$1,(11),to,inst_15004);
} else {
if((state_val_15026 === (3))){
var inst_15023 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15025__$1,inst_15023);
} else {
if((state_val_15026 === (12))){
var state_15025__$1 = state_15025;
var statearr_15033_15059 = state_15025__$1;
(statearr_15033_15059[(2)] = null);

(statearr_15033_15059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (2))){
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15025__$1,(4),from);
} else {
if((state_val_15026 === (11))){
var inst_15014 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
if(cljs.core.truth_(inst_15014)){
var statearr_15034_15060 = state_15025__$1;
(statearr_15034_15060[(1)] = (12));

} else {
var statearr_15035_15061 = state_15025__$1;
(statearr_15035_15061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (9))){
var state_15025__$1 = state_15025;
var statearr_15036_15062 = state_15025__$1;
(statearr_15036_15062[(2)] = null);

(statearr_15036_15062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (5))){
var state_15025__$1 = state_15025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15037_15063 = state_15025__$1;
(statearr_15037_15063[(1)] = (8));

} else {
var statearr_15038_15064 = state_15025__$1;
(statearr_15038_15064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (14))){
var inst_15019 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15039_15065 = state_15025__$1;
(statearr_15039_15065[(2)] = inst_15019);

(statearr_15039_15065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (10))){
var inst_15011 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15040_15066 = state_15025__$1;
(statearr_15040_15066[(2)] = inst_15011);

(statearr_15040_15066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (8))){
var inst_15008 = cljs.core.async.close_BANG_.call(null,to);
var state_15025__$1 = state_15025;
var statearr_15041_15067 = state_15025__$1;
(statearr_15041_15067[(2)] = inst_15008);

(statearr_15041_15067[(1)] = (10));


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
});})(c__14886__auto___15053))
;
return ((function (switch__14774__auto__,c__14886__auto___15053){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_15045 = [null,null,null,null,null,null,null,null];
(statearr_15045[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_15045[(1)] = (1));

return statearr_15045;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_15025){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15046){if((e15046 instanceof Object)){
var ex__14778__auto__ = e15046;
var statearr_15047_15068 = state_15025;
(statearr_15047_15068[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15069 = state_15025;
state_15025 = G__15069;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___15053))
})();
var state__14888__auto__ = (function (){var statearr_15048 = f__14887__auto__.call(null);
(statearr_15048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15053);

return statearr_15048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___15053))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__15257){
var vec__15258 = p__15257;
var v = cljs.core.nth.call(null,vec__15258,(0),null);
var p = cljs.core.nth.call(null,vec__15258,(1),null);
var job = vec__15258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14886__auto___15444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results){
return (function (state_15265){
var state_val_15266 = (state_15265[(1)]);
if((state_val_15266 === (1))){
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,(2),res,v);
} else {
if((state_val_15266 === (2))){
var inst_15262 = (state_15265[(2)]);
var inst_15263 = cljs.core.async.close_BANG_.call(null,res);
var state_15265__$1 = (function (){var statearr_15267 = state_15265;
(statearr_15267[(7)] = inst_15262);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else {
return null;
}
}
});})(c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results))
;
return ((function (switch__14774__auto__,c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_15271 = [null,null,null,null,null,null,null,null];
(statearr_15271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__);

(statearr_15271[(1)] = (1));

return statearr_15271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1 = (function (state_15265){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15272){if((e15272 instanceof Object)){
var ex__14778__auto__ = e15272;
var statearr_15273_15445 = state_15265;
(statearr_15273_15445[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15446 = state_15265;
state_15265 = G__15446;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results))
})();
var state__14888__auto__ = (function (){var statearr_15274 = f__14887__auto__.call(null);
(statearr_15274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15444);

return statearr_15274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___15444,res,vec__15258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15275){
var vec__15276 = p__15275;
var v = cljs.core.nth.call(null,vec__15276,(0),null);
var p = cljs.core.nth.call(null,vec__15276,(1),null);
var job = vec__15276;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7871__auto___15447 = n;
var __15448 = (0);
while(true){
if((__15448 < n__7871__auto___15447)){
var G__15279_15449 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15279_15449) {
case "compute":
var c__14886__auto___15451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15448,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (__15448,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function (state_15292){
var state_val_15293 = (state_15292[(1)]);
if((state_val_15293 === (1))){
var state_15292__$1 = state_15292;
var statearr_15294_15452 = state_15292__$1;
(statearr_15294_15452[(2)] = null);

(statearr_15294_15452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15293 === (2))){
var state_15292__$1 = state_15292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15292__$1,(4),jobs);
} else {
if((state_val_15293 === (3))){
var inst_15290 = (state_15292[(2)]);
var state_15292__$1 = state_15292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15292__$1,inst_15290);
} else {
if((state_val_15293 === (4))){
var inst_15282 = (state_15292[(2)]);
var inst_15283 = process.call(null,inst_15282);
var state_15292__$1 = state_15292;
if(cljs.core.truth_(inst_15283)){
var statearr_15295_15453 = state_15292__$1;
(statearr_15295_15453[(1)] = (5));

} else {
var statearr_15296_15454 = state_15292__$1;
(statearr_15296_15454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15293 === (5))){
var state_15292__$1 = state_15292;
var statearr_15297_15455 = state_15292__$1;
(statearr_15297_15455[(2)] = null);

(statearr_15297_15455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15293 === (6))){
var state_15292__$1 = state_15292;
var statearr_15298_15456 = state_15292__$1;
(statearr_15298_15456[(2)] = null);

(statearr_15298_15456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15293 === (7))){
var inst_15288 = (state_15292[(2)]);
var state_15292__$1 = state_15292;
var statearr_15299_15457 = state_15292__$1;
(statearr_15299_15457[(2)] = inst_15288);

(statearr_15299_15457[(1)] = (3));


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
});})(__15448,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
;
return ((function (__15448,switch__14774__auto__,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null];
(statearr_15303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1 = (function (state_15292){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15304){if((e15304 instanceof Object)){
var ex__14778__auto__ = e15304;
var statearr_15305_15458 = state_15292;
(statearr_15305_15458[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15459 = state_15292;
state_15292 = G__15459;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = function(state_15292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1.call(this,state_15292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__;
})()
;})(__15448,switch__14774__auto__,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
})();
var state__14888__auto__ = (function (){var statearr_15306 = f__14887__auto__.call(null);
(statearr_15306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15451);

return statearr_15306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(__15448,c__14886__auto___15451,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
);


break;
case "async":
var c__14886__auto___15460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15448,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (__15448,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function (state_15319){
var state_val_15320 = (state_15319[(1)]);
if((state_val_15320 === (1))){
var state_15319__$1 = state_15319;
var statearr_15321_15461 = state_15319__$1;
(statearr_15321_15461[(2)] = null);

(statearr_15321_15461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (2))){
var state_15319__$1 = state_15319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15319__$1,(4),jobs);
} else {
if((state_val_15320 === (3))){
var inst_15317 = (state_15319[(2)]);
var state_15319__$1 = state_15319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15319__$1,inst_15317);
} else {
if((state_val_15320 === (4))){
var inst_15309 = (state_15319[(2)]);
var inst_15310 = async.call(null,inst_15309);
var state_15319__$1 = state_15319;
if(cljs.core.truth_(inst_15310)){
var statearr_15322_15462 = state_15319__$1;
(statearr_15322_15462[(1)] = (5));

} else {
var statearr_15323_15463 = state_15319__$1;
(statearr_15323_15463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (5))){
var state_15319__$1 = state_15319;
var statearr_15324_15464 = state_15319__$1;
(statearr_15324_15464[(2)] = null);

(statearr_15324_15464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (6))){
var state_15319__$1 = state_15319;
var statearr_15325_15465 = state_15319__$1;
(statearr_15325_15465[(2)] = null);

(statearr_15325_15465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (7))){
var inst_15315 = (state_15319[(2)]);
var state_15319__$1 = state_15319;
var statearr_15326_15466 = state_15319__$1;
(statearr_15326_15466[(2)] = inst_15315);

(statearr_15326_15466[(1)] = (3));


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
});})(__15448,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
;
return ((function (__15448,switch__14774__auto__,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_15330 = [null,null,null,null,null,null,null];
(statearr_15330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__);

(statearr_15330[(1)] = (1));

return statearr_15330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1 = (function (state_15319){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object)){
var ex__14778__auto__ = e15331;
var statearr_15332_15467 = state_15319;
(statearr_15332_15467[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15468 = state_15319;
state_15319 = G__15468;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = function(state_15319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1.call(this,state_15319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__;
})()
;})(__15448,switch__14774__auto__,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
})();
var state__14888__auto__ = (function (){var statearr_15333 = f__14887__auto__.call(null);
(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15460);

return statearr_15333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(__15448,c__14886__auto___15460,G__15279_15449,n__7871__auto___15447,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__15469 = (__15448 + (1));
__15448 = G__15469;
continue;
} else {
}
break;
}

var c__14886__auto___15470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___15470,jobs,results,process,async){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___15470,jobs,results,process,async){
return (function (state_15355){
var state_val_15356 = (state_15355[(1)]);
if((state_val_15356 === (1))){
var state_15355__$1 = state_15355;
var statearr_15357_15471 = state_15355__$1;
(statearr_15357_15471[(2)] = null);

(statearr_15357_15471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (2))){
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15355__$1,(4),from);
} else {
if((state_val_15356 === (3))){
var inst_15353 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15355__$1,inst_15353);
} else {
if((state_val_15356 === (4))){
var inst_15336 = (state_15355[(7)]);
var inst_15336__$1 = (state_15355[(2)]);
var inst_15337 = (inst_15336__$1 == null);
var state_15355__$1 = (function (){var statearr_15358 = state_15355;
(statearr_15358[(7)] = inst_15336__$1);

return statearr_15358;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15359_15472 = state_15355__$1;
(statearr_15359_15472[(1)] = (5));

} else {
var statearr_15360_15473 = state_15355__$1;
(statearr_15360_15473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (5))){
var inst_15339 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15355__$1 = state_15355;
var statearr_15361_15474 = state_15355__$1;
(statearr_15361_15474[(2)] = inst_15339);

(statearr_15361_15474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (6))){
var inst_15341 = (state_15355[(8)]);
var inst_15336 = (state_15355[(7)]);
var inst_15341__$1 = cljs.core.async.chan.call(null,(1));
var inst_15342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15343 = [inst_15336,inst_15341__$1];
var inst_15344 = (new cljs.core.PersistentVector(null,2,(5),inst_15342,inst_15343,null));
var state_15355__$1 = (function (){var statearr_15362 = state_15355;
(statearr_15362[(8)] = inst_15341__$1);

return statearr_15362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(8),jobs,inst_15344);
} else {
if((state_val_15356 === (7))){
var inst_15351 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15363_15475 = state_15355__$1;
(statearr_15363_15475[(2)] = inst_15351);

(statearr_15363_15475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (8))){
var inst_15341 = (state_15355[(8)]);
var inst_15346 = (state_15355[(2)]);
var state_15355__$1 = (function (){var statearr_15364 = state_15355;
(statearr_15364[(9)] = inst_15346);

return statearr_15364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(9),results,inst_15341);
} else {
if((state_val_15356 === (9))){
var inst_15348 = (state_15355[(2)]);
var state_15355__$1 = (function (){var statearr_15365 = state_15355;
(statearr_15365[(10)] = inst_15348);

return statearr_15365;
})();
var statearr_15366_15476 = state_15355__$1;
(statearr_15366_15476[(2)] = null);

(statearr_15366_15476[(1)] = (2));


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
});})(c__14886__auto___15470,jobs,results,process,async))
;
return ((function (switch__14774__auto__,c__14886__auto___15470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_15370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__);

(statearr_15370[(1)] = (1));

return statearr_15370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1 = (function (state_15355){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15371){if((e15371 instanceof Object)){
var ex__14778__auto__ = e15371;
var statearr_15372_15477 = state_15355;
(statearr_15372_15477[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15478 = state_15355;
state_15355 = G__15478;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = function(state_15355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1.call(this,state_15355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___15470,jobs,results,process,async))
})();
var state__14888__auto__ = (function (){var statearr_15373 = f__14887__auto__.call(null);
(statearr_15373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15470);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___15470,jobs,results,process,async))
);


var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__,jobs,results,process,async){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__,jobs,results,process,async){
return (function (state_15411){
var state_val_15412 = (state_15411[(1)]);
if((state_val_15412 === (7))){
var inst_15407 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15413_15479 = state_15411__$1;
(statearr_15413_15479[(2)] = inst_15407);

(statearr_15413_15479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (20))){
var state_15411__$1 = state_15411;
var statearr_15414_15480 = state_15411__$1;
(statearr_15414_15480[(2)] = null);

(statearr_15414_15480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (1))){
var state_15411__$1 = state_15411;
var statearr_15415_15481 = state_15411__$1;
(statearr_15415_15481[(2)] = null);

(statearr_15415_15481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (4))){
var inst_15376 = (state_15411[(7)]);
var inst_15376__$1 = (state_15411[(2)]);
var inst_15377 = (inst_15376__$1 == null);
var state_15411__$1 = (function (){var statearr_15416 = state_15411;
(statearr_15416[(7)] = inst_15376__$1);

return statearr_15416;
})();
if(cljs.core.truth_(inst_15377)){
var statearr_15417_15482 = state_15411__$1;
(statearr_15417_15482[(1)] = (5));

} else {
var statearr_15418_15483 = state_15411__$1;
(statearr_15418_15483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (15))){
var inst_15389 = (state_15411[(8)]);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15411__$1,(18),to,inst_15389);
} else {
if((state_val_15412 === (21))){
var inst_15402 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15419_15484 = state_15411__$1;
(statearr_15419_15484[(2)] = inst_15402);

(statearr_15419_15484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (13))){
var inst_15404 = (state_15411[(2)]);
var state_15411__$1 = (function (){var statearr_15420 = state_15411;
(statearr_15420[(9)] = inst_15404);

return statearr_15420;
})();
var statearr_15421_15485 = state_15411__$1;
(statearr_15421_15485[(2)] = null);

(statearr_15421_15485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (6))){
var inst_15376 = (state_15411[(7)]);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15411__$1,(11),inst_15376);
} else {
if((state_val_15412 === (17))){
var inst_15397 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
if(cljs.core.truth_(inst_15397)){
var statearr_15422_15486 = state_15411__$1;
(statearr_15422_15486[(1)] = (19));

} else {
var statearr_15423_15487 = state_15411__$1;
(statearr_15423_15487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (3))){
var inst_15409 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15411__$1,inst_15409);
} else {
if((state_val_15412 === (12))){
var inst_15386 = (state_15411[(10)]);
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15411__$1,(14),inst_15386);
} else {
if((state_val_15412 === (2))){
var state_15411__$1 = state_15411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15411__$1,(4),results);
} else {
if((state_val_15412 === (19))){
var state_15411__$1 = state_15411;
var statearr_15424_15488 = state_15411__$1;
(statearr_15424_15488[(2)] = null);

(statearr_15424_15488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (11))){
var inst_15386 = (state_15411[(2)]);
var state_15411__$1 = (function (){var statearr_15425 = state_15411;
(statearr_15425[(10)] = inst_15386);

return statearr_15425;
})();
var statearr_15426_15489 = state_15411__$1;
(statearr_15426_15489[(2)] = null);

(statearr_15426_15489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (9))){
var state_15411__$1 = state_15411;
var statearr_15427_15490 = state_15411__$1;
(statearr_15427_15490[(2)] = null);

(statearr_15427_15490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (5))){
var state_15411__$1 = state_15411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15428_15491 = state_15411__$1;
(statearr_15428_15491[(1)] = (8));

} else {
var statearr_15429_15492 = state_15411__$1;
(statearr_15429_15492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (14))){
var inst_15389 = (state_15411[(8)]);
var inst_15391 = (state_15411[(11)]);
var inst_15389__$1 = (state_15411[(2)]);
var inst_15390 = (inst_15389__$1 == null);
var inst_15391__$1 = cljs.core.not.call(null,inst_15390);
var state_15411__$1 = (function (){var statearr_15430 = state_15411;
(statearr_15430[(8)] = inst_15389__$1);

(statearr_15430[(11)] = inst_15391__$1);

return statearr_15430;
})();
if(inst_15391__$1){
var statearr_15431_15493 = state_15411__$1;
(statearr_15431_15493[(1)] = (15));

} else {
var statearr_15432_15494 = state_15411__$1;
(statearr_15432_15494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (16))){
var inst_15391 = (state_15411[(11)]);
var state_15411__$1 = state_15411;
var statearr_15433_15495 = state_15411__$1;
(statearr_15433_15495[(2)] = inst_15391);

(statearr_15433_15495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (10))){
var inst_15383 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15434_15496 = state_15411__$1;
(statearr_15434_15496[(2)] = inst_15383);

(statearr_15434_15496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (18))){
var inst_15394 = (state_15411[(2)]);
var state_15411__$1 = state_15411;
var statearr_15435_15497 = state_15411__$1;
(statearr_15435_15497[(2)] = inst_15394);

(statearr_15435_15497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15412 === (8))){
var inst_15380 = cljs.core.async.close_BANG_.call(null,to);
var state_15411__$1 = state_15411;
var statearr_15436_15498 = state_15411__$1;
(statearr_15436_15498[(2)] = inst_15380);

(statearr_15436_15498[(1)] = (10));


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
});})(c__14886__auto__,jobs,results,process,async))
;
return ((function (switch__14774__auto__,c__14886__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_15440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__);

(statearr_15440[(1)] = (1));

return statearr_15440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1 = (function (state_15411){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15441){if((e15441 instanceof Object)){
var ex__14778__auto__ = e15441;
var statearr_15442_15499 = state_15411;
(statearr_15442_15499[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15500 = state_15411;
state_15411 = G__15500;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__ = function(state_15411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1.call(this,state_15411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__,jobs,results,process,async))
})();
var state__14888__auto__ = (function (){var statearr_15443 = f__14887__auto__.call(null);
(statearr_15443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_15443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__,jobs,results,process,async))
);

return c__14886__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args15501 = [];
var len__8057__auto___15504 = arguments.length;
var i__8058__auto___15505 = (0);
while(true){
if((i__8058__auto___15505 < len__8057__auto___15504)){
args15501.push((arguments[i__8058__auto___15505]));

var G__15506 = (i__8058__auto___15505 + (1));
i__8058__auto___15505 = G__15506;
continue;
} else {
}
break;
}

var G__15503 = args15501.length;
switch (G__15503) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15501.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args15508 = [];
var len__8057__auto___15511 = arguments.length;
var i__8058__auto___15512 = (0);
while(true){
if((i__8058__auto___15512 < len__8057__auto___15511)){
args15508.push((arguments[i__8058__auto___15512]));

var G__15513 = (i__8058__auto___15512 + (1));
i__8058__auto___15512 = G__15513;
continue;
} else {
}
break;
}

var G__15510 = args15508.length;
switch (G__15510) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15508.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args15515 = [];
var len__8057__auto___15568 = arguments.length;
var i__8058__auto___15569 = (0);
while(true){
if((i__8058__auto___15569 < len__8057__auto___15568)){
args15515.push((arguments[i__8058__auto___15569]));

var G__15570 = (i__8058__auto___15569 + (1));
i__8058__auto___15569 = G__15570;
continue;
} else {
}
break;
}

var G__15517 = args15515.length;
switch (G__15517) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15515.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14886__auto___15572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___15572,tc,fc){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___15572,tc,fc){
return (function (state_15543){
var state_val_15544 = (state_15543[(1)]);
if((state_val_15544 === (7))){
var inst_15539 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15545_15573 = state_15543__$1;
(statearr_15545_15573[(2)] = inst_15539);

(statearr_15545_15573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (1))){
var state_15543__$1 = state_15543;
var statearr_15546_15574 = state_15543__$1;
(statearr_15546_15574[(2)] = null);

(statearr_15546_15574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (4))){
var inst_15520 = (state_15543[(7)]);
var inst_15520__$1 = (state_15543[(2)]);
var inst_15521 = (inst_15520__$1 == null);
var state_15543__$1 = (function (){var statearr_15547 = state_15543;
(statearr_15547[(7)] = inst_15520__$1);

return statearr_15547;
})();
if(cljs.core.truth_(inst_15521)){
var statearr_15548_15575 = state_15543__$1;
(statearr_15548_15575[(1)] = (5));

} else {
var statearr_15549_15576 = state_15543__$1;
(statearr_15549_15576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (13))){
var state_15543__$1 = state_15543;
var statearr_15550_15577 = state_15543__$1;
(statearr_15550_15577[(2)] = null);

(statearr_15550_15577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (6))){
var inst_15520 = (state_15543[(7)]);
var inst_15526 = p.call(null,inst_15520);
var state_15543__$1 = state_15543;
if(cljs.core.truth_(inst_15526)){
var statearr_15551_15578 = state_15543__$1;
(statearr_15551_15578[(1)] = (9));

} else {
var statearr_15552_15579 = state_15543__$1;
(statearr_15552_15579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (3))){
var inst_15541 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15543__$1,inst_15541);
} else {
if((state_val_15544 === (12))){
var state_15543__$1 = state_15543;
var statearr_15553_15580 = state_15543__$1;
(statearr_15553_15580[(2)] = null);

(statearr_15553_15580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (2))){
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15543__$1,(4),ch);
} else {
if((state_val_15544 === (11))){
var inst_15520 = (state_15543[(7)]);
var inst_15530 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15543__$1,(8),inst_15530,inst_15520);
} else {
if((state_val_15544 === (9))){
var state_15543__$1 = state_15543;
var statearr_15554_15581 = state_15543__$1;
(statearr_15554_15581[(2)] = tc);

(statearr_15554_15581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (5))){
var inst_15523 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15524 = cljs.core.async.close_BANG_.call(null,fc);
var state_15543__$1 = (function (){var statearr_15555 = state_15543;
(statearr_15555[(8)] = inst_15523);

return statearr_15555;
})();
var statearr_15556_15582 = state_15543__$1;
(statearr_15556_15582[(2)] = inst_15524);

(statearr_15556_15582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (14))){
var inst_15537 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15557_15583 = state_15543__$1;
(statearr_15557_15583[(2)] = inst_15537);

(statearr_15557_15583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (10))){
var state_15543__$1 = state_15543;
var statearr_15558_15584 = state_15543__$1;
(statearr_15558_15584[(2)] = fc);

(statearr_15558_15584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (8))){
var inst_15532 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
if(cljs.core.truth_(inst_15532)){
var statearr_15559_15585 = state_15543__$1;
(statearr_15559_15585[(1)] = (12));

} else {
var statearr_15560_15586 = state_15543__$1;
(statearr_15560_15586[(1)] = (13));

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
});})(c__14886__auto___15572,tc,fc))
;
return ((function (switch__14774__auto__,c__14886__auto___15572,tc,fc){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_15564 = [null,null,null,null,null,null,null,null,null];
(statearr_15564[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_15564[(1)] = (1));

return statearr_15564;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_15543){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15565){if((e15565 instanceof Object)){
var ex__14778__auto__ = e15565;
var statearr_15566_15587 = state_15543;
(statearr_15566_15587[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15588 = state_15543;
state_15543 = G__15588;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_15543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_15543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___15572,tc,fc))
})();
var state__14888__auto__ = (function (){var statearr_15567 = f__14887__auto__.call(null);
(statearr_15567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___15572);

return statearr_15567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___15572,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__){
return (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15654_15675 = state_15652__$1;
(statearr_15654_15675[(2)] = inst_15648);

(statearr_15654_15675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (1))){
var inst_15632 = init;
var state_15652__$1 = (function (){var statearr_15655 = state_15652;
(statearr_15655[(7)] = inst_15632);

return statearr_15655;
})();
var statearr_15656_15676 = state_15652__$1;
(statearr_15656_15676[(2)] = null);

(statearr_15656_15676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (4))){
var inst_15635 = (state_15652[(8)]);
var inst_15635__$1 = (state_15652[(2)]);
var inst_15636 = (inst_15635__$1 == null);
var state_15652__$1 = (function (){var statearr_15657 = state_15652;
(statearr_15657[(8)] = inst_15635__$1);

return statearr_15657;
})();
if(cljs.core.truth_(inst_15636)){
var statearr_15658_15677 = state_15652__$1;
(statearr_15658_15677[(1)] = (5));

} else {
var statearr_15659_15678 = state_15652__$1;
(statearr_15659_15678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (6))){
var inst_15632 = (state_15652[(7)]);
var inst_15639 = (state_15652[(9)]);
var inst_15635 = (state_15652[(8)]);
var inst_15639__$1 = f.call(null,inst_15632,inst_15635);
var inst_15640 = cljs.core.reduced_QMARK_.call(null,inst_15639__$1);
var state_15652__$1 = (function (){var statearr_15660 = state_15652;
(statearr_15660[(9)] = inst_15639__$1);

return statearr_15660;
})();
if(inst_15640){
var statearr_15661_15679 = state_15652__$1;
(statearr_15661_15679[(1)] = (8));

} else {
var statearr_15662_15680 = state_15652__$1;
(statearr_15662_15680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15652__$1,inst_15650);
} else {
if((state_val_15653 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15652__$1,(4),ch);
} else {
if((state_val_15653 === (9))){
var inst_15639 = (state_15652[(9)]);
var inst_15632 = inst_15639;
var state_15652__$1 = (function (){var statearr_15663 = state_15652;
(statearr_15663[(7)] = inst_15632);

return statearr_15663;
})();
var statearr_15664_15681 = state_15652__$1;
(statearr_15664_15681[(2)] = null);

(statearr_15664_15681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (5))){
var inst_15632 = (state_15652[(7)]);
var state_15652__$1 = state_15652;
var statearr_15665_15682 = state_15652__$1;
(statearr_15665_15682[(2)] = inst_15632);

(statearr_15665_15682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (10))){
var inst_15646 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15666_15683 = state_15652__$1;
(statearr_15666_15683[(2)] = inst_15646);

(statearr_15666_15683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (8))){
var inst_15639 = (state_15652[(9)]);
var inst_15642 = cljs.core.deref.call(null,inst_15639);
var state_15652__$1 = state_15652;
var statearr_15667_15684 = state_15652__$1;
(statearr_15667_15684[(2)] = inst_15642);

(statearr_15667_15684[(1)] = (10));


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
});})(c__14886__auto__))
;
return ((function (switch__14774__auto__,c__14886__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14775__auto____0 = (function (){
var statearr_15671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15671[(0)] = cljs$core$async$reduce_$_state_machine__14775__auto__);

(statearr_15671[(1)] = (1));

return statearr_15671;
});
var cljs$core$async$reduce_$_state_machine__14775__auto____1 = (function (state_15652){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15672){if((e15672 instanceof Object)){
var ex__14778__auto__ = e15672;
var statearr_15673_15685 = state_15652;
(statearr_15673_15685[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15686 = state_15652;
state_15652 = G__15686;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14775__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14775__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14775__auto____0;
cljs$core$async$reduce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14775__auto____1;
return cljs$core$async$reduce_$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__))
})();
var state__14888__auto__ = (function (){var statearr_15674 = f__14887__auto__.call(null);
(statearr_15674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_15674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__))
);

return c__14886__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__,f__$1){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__,f__$1){
return (function (state_15706){
var state_val_15707 = (state_15706[(1)]);
if((state_val_15707 === (1))){
var inst_15701 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15706__$1 = state_15706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15706__$1,(2),inst_15701);
} else {
if((state_val_15707 === (2))){
var inst_15703 = (state_15706[(2)]);
var inst_15704 = f__$1.call(null,inst_15703);
var state_15706__$1 = state_15706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15706__$1,inst_15704);
} else {
return null;
}
}
});})(c__14886__auto__,f__$1))
;
return ((function (switch__14774__auto__,c__14886__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14775__auto____0 = (function (){
var statearr_15711 = [null,null,null,null,null,null,null];
(statearr_15711[(0)] = cljs$core$async$transduce_$_state_machine__14775__auto__);

(statearr_15711[(1)] = (1));

return statearr_15711;
});
var cljs$core$async$transduce_$_state_machine__14775__auto____1 = (function (state_15706){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15712){if((e15712 instanceof Object)){
var ex__14778__auto__ = e15712;
var statearr_15713_15715 = state_15706;
(statearr_15713_15715[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15716 = state_15706;
state_15706 = G__15716;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14775__auto__ = function(state_15706){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14775__auto____1.call(this,state_15706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14775__auto____0;
cljs$core$async$transduce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14775__auto____1;
return cljs$core$async$transduce_$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__,f__$1))
})();
var state__14888__auto__ = (function (){var statearr_15714 = f__14887__auto__.call(null);
(statearr_15714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_15714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__,f__$1))
);

return c__14886__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15717 = [];
var len__8057__auto___15769 = arguments.length;
var i__8058__auto___15770 = (0);
while(true){
if((i__8058__auto___15770 < len__8057__auto___15769)){
args15717.push((arguments[i__8058__auto___15770]));

var G__15771 = (i__8058__auto___15770 + (1));
i__8058__auto___15770 = G__15771;
continue;
} else {
}
break;
}

var G__15719 = args15717.length;
switch (G__15719) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15717.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__){
return (function (state_15744){
var state_val_15745 = (state_15744[(1)]);
if((state_val_15745 === (7))){
var inst_15726 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
var statearr_15746_15773 = state_15744__$1;
(statearr_15746_15773[(2)] = inst_15726);

(statearr_15746_15773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (1))){
var inst_15720 = cljs.core.seq.call(null,coll);
var inst_15721 = inst_15720;
var state_15744__$1 = (function (){var statearr_15747 = state_15744;
(statearr_15747[(7)] = inst_15721);

return statearr_15747;
})();
var statearr_15748_15774 = state_15744__$1;
(statearr_15748_15774[(2)] = null);

(statearr_15748_15774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (4))){
var inst_15721 = (state_15744[(7)]);
var inst_15724 = cljs.core.first.call(null,inst_15721);
var state_15744__$1 = state_15744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15744__$1,(7),ch,inst_15724);
} else {
if((state_val_15745 === (13))){
var inst_15738 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
var statearr_15749_15775 = state_15744__$1;
(statearr_15749_15775[(2)] = inst_15738);

(statearr_15749_15775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (6))){
var inst_15729 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
if(cljs.core.truth_(inst_15729)){
var statearr_15750_15776 = state_15744__$1;
(statearr_15750_15776[(1)] = (8));

} else {
var statearr_15751_15777 = state_15744__$1;
(statearr_15751_15777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (3))){
var inst_15742 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15744__$1,inst_15742);
} else {
if((state_val_15745 === (12))){
var state_15744__$1 = state_15744;
var statearr_15752_15778 = state_15744__$1;
(statearr_15752_15778[(2)] = null);

(statearr_15752_15778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (2))){
var inst_15721 = (state_15744[(7)]);
var state_15744__$1 = state_15744;
if(cljs.core.truth_(inst_15721)){
var statearr_15753_15779 = state_15744__$1;
(statearr_15753_15779[(1)] = (4));

} else {
var statearr_15754_15780 = state_15744__$1;
(statearr_15754_15780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (11))){
var inst_15735 = cljs.core.async.close_BANG_.call(null,ch);
var state_15744__$1 = state_15744;
var statearr_15755_15781 = state_15744__$1;
(statearr_15755_15781[(2)] = inst_15735);

(statearr_15755_15781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (9))){
var state_15744__$1 = state_15744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15756_15782 = state_15744__$1;
(statearr_15756_15782[(1)] = (11));

} else {
var statearr_15757_15783 = state_15744__$1;
(statearr_15757_15783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (5))){
var inst_15721 = (state_15744[(7)]);
var state_15744__$1 = state_15744;
var statearr_15758_15784 = state_15744__$1;
(statearr_15758_15784[(2)] = inst_15721);

(statearr_15758_15784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (10))){
var inst_15740 = (state_15744[(2)]);
var state_15744__$1 = state_15744;
var statearr_15759_15785 = state_15744__$1;
(statearr_15759_15785[(2)] = inst_15740);

(statearr_15759_15785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15745 === (8))){
var inst_15721 = (state_15744[(7)]);
var inst_15731 = cljs.core.next.call(null,inst_15721);
var inst_15721__$1 = inst_15731;
var state_15744__$1 = (function (){var statearr_15760 = state_15744;
(statearr_15760[(7)] = inst_15721__$1);

return statearr_15760;
})();
var statearr_15761_15786 = state_15744__$1;
(statearr_15761_15786[(2)] = null);

(statearr_15761_15786[(1)] = (2));


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
});})(c__14886__auto__))
;
return ((function (switch__14774__auto__,c__14886__auto__){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_15765 = [null,null,null,null,null,null,null,null];
(statearr_15765[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_15765[(1)] = (1));

return statearr_15765;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_15744){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_15744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e15766){if((e15766 instanceof Object)){
var ex__14778__auto__ = e15766;
var statearr_15767_15787 = state_15744;
(statearr_15767_15787[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15788 = state_15744;
state_15744 = G__15788;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_15744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_15744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__))
})();
var state__14888__auto__ = (function (){var statearr_15768 = f__14887__auto__.call(null);
(statearr_15768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_15768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__))
);

return c__14886__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7616__auto__ = (((_ == null))?null:_);
var m__7617__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,_);
} else {
var m__7617__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7617__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,ch);
} else {
var m__7617__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m);
} else {
var m__7617__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16014 = (function (ch,cs,meta16015){
this.ch = ch;
this.cs = cs;
this.meta16015 = meta16015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16016,meta16015__$1){
var self__ = this;
var _16016__$1 = this;
return (new cljs.core.async.t_cljs$core$async16014(self__.ch,self__.cs,meta16015__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16016){
var self__ = this;
var _16016__$1 = this;
return self__.meta16015;
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16015","meta16015",308351127,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16014";

cljs.core.async.t_cljs$core$async16014.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async16014");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16014 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16014(ch__$1,cs__$1,meta16015){
return (new cljs.core.async.t_cljs$core$async16014(ch__$1,cs__$1,meta16015));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16014(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14886__auto___16239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___16239,cs,m,dchan,dctr,done){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___16239,cs,m,dchan,dctr,done){
return (function (state_16151){
var state_val_16152 = (state_16151[(1)]);
if((state_val_16152 === (7))){
var inst_16147 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16153_16240 = state_16151__$1;
(statearr_16153_16240[(2)] = inst_16147);

(statearr_16153_16240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (20))){
var inst_16050 = (state_16151[(7)]);
var inst_16062 = cljs.core.first.call(null,inst_16050);
var inst_16063 = cljs.core.nth.call(null,inst_16062,(0),null);
var inst_16064 = cljs.core.nth.call(null,inst_16062,(1),null);
var state_16151__$1 = (function (){var statearr_16154 = state_16151;
(statearr_16154[(8)] = inst_16063);

return statearr_16154;
})();
if(cljs.core.truth_(inst_16064)){
var statearr_16155_16241 = state_16151__$1;
(statearr_16155_16241[(1)] = (22));

} else {
var statearr_16156_16242 = state_16151__$1;
(statearr_16156_16242[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (27))){
var inst_16092 = (state_16151[(9)]);
var inst_16019 = (state_16151[(10)]);
var inst_16099 = (state_16151[(11)]);
var inst_16094 = (state_16151[(12)]);
var inst_16099__$1 = cljs.core._nth.call(null,inst_16092,inst_16094);
var inst_16100 = cljs.core.async.put_BANG_.call(null,inst_16099__$1,inst_16019,done);
var state_16151__$1 = (function (){var statearr_16157 = state_16151;
(statearr_16157[(11)] = inst_16099__$1);

return statearr_16157;
})();
if(cljs.core.truth_(inst_16100)){
var statearr_16158_16243 = state_16151__$1;
(statearr_16158_16243[(1)] = (30));

} else {
var statearr_16159_16244 = state_16151__$1;
(statearr_16159_16244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (1))){
var state_16151__$1 = state_16151;
var statearr_16160_16245 = state_16151__$1;
(statearr_16160_16245[(2)] = null);

(statearr_16160_16245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (24))){
var inst_16050 = (state_16151[(7)]);
var inst_16069 = (state_16151[(2)]);
var inst_16070 = cljs.core.next.call(null,inst_16050);
var inst_16028 = inst_16070;
var inst_16029 = null;
var inst_16030 = (0);
var inst_16031 = (0);
var state_16151__$1 = (function (){var statearr_16161 = state_16151;
(statearr_16161[(13)] = inst_16028);

(statearr_16161[(14)] = inst_16029);

(statearr_16161[(15)] = inst_16030);

(statearr_16161[(16)] = inst_16031);

(statearr_16161[(17)] = inst_16069);

return statearr_16161;
})();
var statearr_16162_16246 = state_16151__$1;
(statearr_16162_16246[(2)] = null);

(statearr_16162_16246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (39))){
var state_16151__$1 = state_16151;
var statearr_16166_16247 = state_16151__$1;
(statearr_16166_16247[(2)] = null);

(statearr_16166_16247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (4))){
var inst_16019 = (state_16151[(10)]);
var inst_16019__$1 = (state_16151[(2)]);
var inst_16020 = (inst_16019__$1 == null);
var state_16151__$1 = (function (){var statearr_16167 = state_16151;
(statearr_16167[(10)] = inst_16019__$1);

return statearr_16167;
})();
if(cljs.core.truth_(inst_16020)){
var statearr_16168_16248 = state_16151__$1;
(statearr_16168_16248[(1)] = (5));

} else {
var statearr_16169_16249 = state_16151__$1;
(statearr_16169_16249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (15))){
var inst_16028 = (state_16151[(13)]);
var inst_16029 = (state_16151[(14)]);
var inst_16030 = (state_16151[(15)]);
var inst_16031 = (state_16151[(16)]);
var inst_16046 = (state_16151[(2)]);
var inst_16047 = (inst_16031 + (1));
var tmp16163 = inst_16028;
var tmp16164 = inst_16029;
var tmp16165 = inst_16030;
var inst_16028__$1 = tmp16163;
var inst_16029__$1 = tmp16164;
var inst_16030__$1 = tmp16165;
var inst_16031__$1 = inst_16047;
var state_16151__$1 = (function (){var statearr_16170 = state_16151;
(statearr_16170[(13)] = inst_16028__$1);

(statearr_16170[(14)] = inst_16029__$1);

(statearr_16170[(15)] = inst_16030__$1);

(statearr_16170[(16)] = inst_16031__$1);

(statearr_16170[(18)] = inst_16046);

return statearr_16170;
})();
var statearr_16171_16250 = state_16151__$1;
(statearr_16171_16250[(2)] = null);

(statearr_16171_16250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (21))){
var inst_16073 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16175_16251 = state_16151__$1;
(statearr_16175_16251[(2)] = inst_16073);

(statearr_16175_16251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (31))){
var inst_16099 = (state_16151[(11)]);
var inst_16103 = done.call(null,null);
var inst_16104 = cljs.core.async.untap_STAR_.call(null,m,inst_16099);
var state_16151__$1 = (function (){var statearr_16176 = state_16151;
(statearr_16176[(19)] = inst_16103);

return statearr_16176;
})();
var statearr_16177_16252 = state_16151__$1;
(statearr_16177_16252[(2)] = inst_16104);

(statearr_16177_16252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (32))){
var inst_16092 = (state_16151[(9)]);
var inst_16093 = (state_16151[(20)]);
var inst_16091 = (state_16151[(21)]);
var inst_16094 = (state_16151[(12)]);
var inst_16106 = (state_16151[(2)]);
var inst_16107 = (inst_16094 + (1));
var tmp16172 = inst_16092;
var tmp16173 = inst_16093;
var tmp16174 = inst_16091;
var inst_16091__$1 = tmp16174;
var inst_16092__$1 = tmp16172;
var inst_16093__$1 = tmp16173;
var inst_16094__$1 = inst_16107;
var state_16151__$1 = (function (){var statearr_16178 = state_16151;
(statearr_16178[(9)] = inst_16092__$1);

(statearr_16178[(20)] = inst_16093__$1);

(statearr_16178[(22)] = inst_16106);

(statearr_16178[(21)] = inst_16091__$1);

(statearr_16178[(12)] = inst_16094__$1);

return statearr_16178;
})();
var statearr_16179_16253 = state_16151__$1;
(statearr_16179_16253[(2)] = null);

(statearr_16179_16253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (40))){
var inst_16119 = (state_16151[(23)]);
var inst_16123 = done.call(null,null);
var inst_16124 = cljs.core.async.untap_STAR_.call(null,m,inst_16119);
var state_16151__$1 = (function (){var statearr_16180 = state_16151;
(statearr_16180[(24)] = inst_16123);

return statearr_16180;
})();
var statearr_16181_16254 = state_16151__$1;
(statearr_16181_16254[(2)] = inst_16124);

(statearr_16181_16254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (33))){
var inst_16110 = (state_16151[(25)]);
var inst_16112 = cljs.core.chunked_seq_QMARK_.call(null,inst_16110);
var state_16151__$1 = state_16151;
if(inst_16112){
var statearr_16182_16255 = state_16151__$1;
(statearr_16182_16255[(1)] = (36));

} else {
var statearr_16183_16256 = state_16151__$1;
(statearr_16183_16256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (13))){
var inst_16040 = (state_16151[(26)]);
var inst_16043 = cljs.core.async.close_BANG_.call(null,inst_16040);
var state_16151__$1 = state_16151;
var statearr_16184_16257 = state_16151__$1;
(statearr_16184_16257[(2)] = inst_16043);

(statearr_16184_16257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (22))){
var inst_16063 = (state_16151[(8)]);
var inst_16066 = cljs.core.async.close_BANG_.call(null,inst_16063);
var state_16151__$1 = state_16151;
var statearr_16185_16258 = state_16151__$1;
(statearr_16185_16258[(2)] = inst_16066);

(statearr_16185_16258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (36))){
var inst_16110 = (state_16151[(25)]);
var inst_16114 = cljs.core.chunk_first.call(null,inst_16110);
var inst_16115 = cljs.core.chunk_rest.call(null,inst_16110);
var inst_16116 = cljs.core.count.call(null,inst_16114);
var inst_16091 = inst_16115;
var inst_16092 = inst_16114;
var inst_16093 = inst_16116;
var inst_16094 = (0);
var state_16151__$1 = (function (){var statearr_16186 = state_16151;
(statearr_16186[(9)] = inst_16092);

(statearr_16186[(20)] = inst_16093);

(statearr_16186[(21)] = inst_16091);

(statearr_16186[(12)] = inst_16094);

return statearr_16186;
})();
var statearr_16187_16259 = state_16151__$1;
(statearr_16187_16259[(2)] = null);

(statearr_16187_16259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (41))){
var inst_16110 = (state_16151[(25)]);
var inst_16126 = (state_16151[(2)]);
var inst_16127 = cljs.core.next.call(null,inst_16110);
var inst_16091 = inst_16127;
var inst_16092 = null;
var inst_16093 = (0);
var inst_16094 = (0);
var state_16151__$1 = (function (){var statearr_16188 = state_16151;
(statearr_16188[(9)] = inst_16092);

(statearr_16188[(20)] = inst_16093);

(statearr_16188[(21)] = inst_16091);

(statearr_16188[(27)] = inst_16126);

(statearr_16188[(12)] = inst_16094);

return statearr_16188;
})();
var statearr_16189_16260 = state_16151__$1;
(statearr_16189_16260[(2)] = null);

(statearr_16189_16260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (43))){
var state_16151__$1 = state_16151;
var statearr_16190_16261 = state_16151__$1;
(statearr_16190_16261[(2)] = null);

(statearr_16190_16261[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (29))){
var inst_16135 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16191_16262 = state_16151__$1;
(statearr_16191_16262[(2)] = inst_16135);

(statearr_16191_16262[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (44))){
var inst_16144 = (state_16151[(2)]);
var state_16151__$1 = (function (){var statearr_16192 = state_16151;
(statearr_16192[(28)] = inst_16144);

return statearr_16192;
})();
var statearr_16193_16263 = state_16151__$1;
(statearr_16193_16263[(2)] = null);

(statearr_16193_16263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (6))){
var inst_16083 = (state_16151[(29)]);
var inst_16082 = cljs.core.deref.call(null,cs);
var inst_16083__$1 = cljs.core.keys.call(null,inst_16082);
var inst_16084 = cljs.core.count.call(null,inst_16083__$1);
var inst_16085 = cljs.core.reset_BANG_.call(null,dctr,inst_16084);
var inst_16090 = cljs.core.seq.call(null,inst_16083__$1);
var inst_16091 = inst_16090;
var inst_16092 = null;
var inst_16093 = (0);
var inst_16094 = (0);
var state_16151__$1 = (function (){var statearr_16194 = state_16151;
(statearr_16194[(9)] = inst_16092);

(statearr_16194[(20)] = inst_16093);

(statearr_16194[(29)] = inst_16083__$1);

(statearr_16194[(21)] = inst_16091);

(statearr_16194[(30)] = inst_16085);

(statearr_16194[(12)] = inst_16094);

return statearr_16194;
})();
var statearr_16195_16264 = state_16151__$1;
(statearr_16195_16264[(2)] = null);

(statearr_16195_16264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (28))){
var inst_16110 = (state_16151[(25)]);
var inst_16091 = (state_16151[(21)]);
var inst_16110__$1 = cljs.core.seq.call(null,inst_16091);
var state_16151__$1 = (function (){var statearr_16196 = state_16151;
(statearr_16196[(25)] = inst_16110__$1);

return statearr_16196;
})();
if(inst_16110__$1){
var statearr_16197_16265 = state_16151__$1;
(statearr_16197_16265[(1)] = (33));

} else {
var statearr_16198_16266 = state_16151__$1;
(statearr_16198_16266[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (25))){
var inst_16093 = (state_16151[(20)]);
var inst_16094 = (state_16151[(12)]);
var inst_16096 = (inst_16094 < inst_16093);
var inst_16097 = inst_16096;
var state_16151__$1 = state_16151;
if(cljs.core.truth_(inst_16097)){
var statearr_16199_16267 = state_16151__$1;
(statearr_16199_16267[(1)] = (27));

} else {
var statearr_16200_16268 = state_16151__$1;
(statearr_16200_16268[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (34))){
var state_16151__$1 = state_16151;
var statearr_16201_16269 = state_16151__$1;
(statearr_16201_16269[(2)] = null);

(statearr_16201_16269[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (17))){
var state_16151__$1 = state_16151;
var statearr_16202_16270 = state_16151__$1;
(statearr_16202_16270[(2)] = null);

(statearr_16202_16270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (3))){
var inst_16149 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16151__$1,inst_16149);
} else {
if((state_val_16152 === (12))){
var inst_16078 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16203_16271 = state_16151__$1;
(statearr_16203_16271[(2)] = inst_16078);

(statearr_16203_16271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (2))){
var state_16151__$1 = state_16151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16151__$1,(4),ch);
} else {
if((state_val_16152 === (23))){
var state_16151__$1 = state_16151;
var statearr_16204_16272 = state_16151__$1;
(statearr_16204_16272[(2)] = null);

(statearr_16204_16272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (35))){
var inst_16133 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16205_16273 = state_16151__$1;
(statearr_16205_16273[(2)] = inst_16133);

(statearr_16205_16273[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (19))){
var inst_16050 = (state_16151[(7)]);
var inst_16054 = cljs.core.chunk_first.call(null,inst_16050);
var inst_16055 = cljs.core.chunk_rest.call(null,inst_16050);
var inst_16056 = cljs.core.count.call(null,inst_16054);
var inst_16028 = inst_16055;
var inst_16029 = inst_16054;
var inst_16030 = inst_16056;
var inst_16031 = (0);
var state_16151__$1 = (function (){var statearr_16206 = state_16151;
(statearr_16206[(13)] = inst_16028);

(statearr_16206[(14)] = inst_16029);

(statearr_16206[(15)] = inst_16030);

(statearr_16206[(16)] = inst_16031);

return statearr_16206;
})();
var statearr_16207_16274 = state_16151__$1;
(statearr_16207_16274[(2)] = null);

(statearr_16207_16274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (11))){
var inst_16028 = (state_16151[(13)]);
var inst_16050 = (state_16151[(7)]);
var inst_16050__$1 = cljs.core.seq.call(null,inst_16028);
var state_16151__$1 = (function (){var statearr_16208 = state_16151;
(statearr_16208[(7)] = inst_16050__$1);

return statearr_16208;
})();
if(inst_16050__$1){
var statearr_16209_16275 = state_16151__$1;
(statearr_16209_16275[(1)] = (16));

} else {
var statearr_16210_16276 = state_16151__$1;
(statearr_16210_16276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (9))){
var inst_16080 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16211_16277 = state_16151__$1;
(statearr_16211_16277[(2)] = inst_16080);

(statearr_16211_16277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (5))){
var inst_16026 = cljs.core.deref.call(null,cs);
var inst_16027 = cljs.core.seq.call(null,inst_16026);
var inst_16028 = inst_16027;
var inst_16029 = null;
var inst_16030 = (0);
var inst_16031 = (0);
var state_16151__$1 = (function (){var statearr_16212 = state_16151;
(statearr_16212[(13)] = inst_16028);

(statearr_16212[(14)] = inst_16029);

(statearr_16212[(15)] = inst_16030);

(statearr_16212[(16)] = inst_16031);

return statearr_16212;
})();
var statearr_16213_16278 = state_16151__$1;
(statearr_16213_16278[(2)] = null);

(statearr_16213_16278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (14))){
var state_16151__$1 = state_16151;
var statearr_16214_16279 = state_16151__$1;
(statearr_16214_16279[(2)] = null);

(statearr_16214_16279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (45))){
var inst_16141 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16215_16280 = state_16151__$1;
(statearr_16215_16280[(2)] = inst_16141);

(statearr_16215_16280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (26))){
var inst_16083 = (state_16151[(29)]);
var inst_16137 = (state_16151[(2)]);
var inst_16138 = cljs.core.seq.call(null,inst_16083);
var state_16151__$1 = (function (){var statearr_16216 = state_16151;
(statearr_16216[(31)] = inst_16137);

return statearr_16216;
})();
if(inst_16138){
var statearr_16217_16281 = state_16151__$1;
(statearr_16217_16281[(1)] = (42));

} else {
var statearr_16218_16282 = state_16151__$1;
(statearr_16218_16282[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (16))){
var inst_16050 = (state_16151[(7)]);
var inst_16052 = cljs.core.chunked_seq_QMARK_.call(null,inst_16050);
var state_16151__$1 = state_16151;
if(inst_16052){
var statearr_16219_16283 = state_16151__$1;
(statearr_16219_16283[(1)] = (19));

} else {
var statearr_16220_16284 = state_16151__$1;
(statearr_16220_16284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (38))){
var inst_16130 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16221_16285 = state_16151__$1;
(statearr_16221_16285[(2)] = inst_16130);

(statearr_16221_16285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (30))){
var state_16151__$1 = state_16151;
var statearr_16222_16286 = state_16151__$1;
(statearr_16222_16286[(2)] = null);

(statearr_16222_16286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (10))){
var inst_16029 = (state_16151[(14)]);
var inst_16031 = (state_16151[(16)]);
var inst_16039 = cljs.core._nth.call(null,inst_16029,inst_16031);
var inst_16040 = cljs.core.nth.call(null,inst_16039,(0),null);
var inst_16041 = cljs.core.nth.call(null,inst_16039,(1),null);
var state_16151__$1 = (function (){var statearr_16223 = state_16151;
(statearr_16223[(26)] = inst_16040);

return statearr_16223;
})();
if(cljs.core.truth_(inst_16041)){
var statearr_16224_16287 = state_16151__$1;
(statearr_16224_16287[(1)] = (13));

} else {
var statearr_16225_16288 = state_16151__$1;
(statearr_16225_16288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (18))){
var inst_16076 = (state_16151[(2)]);
var state_16151__$1 = state_16151;
var statearr_16226_16289 = state_16151__$1;
(statearr_16226_16289[(2)] = inst_16076);

(statearr_16226_16289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (42))){
var state_16151__$1 = state_16151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16151__$1,(45),dchan);
} else {
if((state_val_16152 === (37))){
var inst_16110 = (state_16151[(25)]);
var inst_16019 = (state_16151[(10)]);
var inst_16119 = (state_16151[(23)]);
var inst_16119__$1 = cljs.core.first.call(null,inst_16110);
var inst_16120 = cljs.core.async.put_BANG_.call(null,inst_16119__$1,inst_16019,done);
var state_16151__$1 = (function (){var statearr_16227 = state_16151;
(statearr_16227[(23)] = inst_16119__$1);

return statearr_16227;
})();
if(cljs.core.truth_(inst_16120)){
var statearr_16228_16290 = state_16151__$1;
(statearr_16228_16290[(1)] = (39));

} else {
var statearr_16229_16291 = state_16151__$1;
(statearr_16229_16291[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16152 === (8))){
var inst_16030 = (state_16151[(15)]);
var inst_16031 = (state_16151[(16)]);
var inst_16033 = (inst_16031 < inst_16030);
var inst_16034 = inst_16033;
var state_16151__$1 = state_16151;
if(cljs.core.truth_(inst_16034)){
var statearr_16230_16292 = state_16151__$1;
(statearr_16230_16292[(1)] = (10));

} else {
var statearr_16231_16293 = state_16151__$1;
(statearr_16231_16293[(1)] = (11));

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
});})(c__14886__auto___16239,cs,m,dchan,dctr,done))
;
return ((function (switch__14774__auto__,c__14886__auto___16239,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14775__auto__ = null;
var cljs$core$async$mult_$_state_machine__14775__auto____0 = (function (){
var statearr_16235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16235[(0)] = cljs$core$async$mult_$_state_machine__14775__auto__);

(statearr_16235[(1)] = (1));

return statearr_16235;
});
var cljs$core$async$mult_$_state_machine__14775__auto____1 = (function (state_16151){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_16151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e16236){if((e16236 instanceof Object)){
var ex__14778__auto__ = e16236;
var statearr_16237_16294 = state_16151;
(statearr_16237_16294[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16295 = state_16151;
state_16151 = G__16295;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14775__auto__ = function(state_16151){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14775__auto____1.call(this,state_16151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14775__auto____0;
cljs$core$async$mult_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14775__auto____1;
return cljs$core$async$mult_$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___16239,cs,m,dchan,dctr,done))
})();
var state__14888__auto__ = (function (){var statearr_16238 = f__14887__auto__.call(null);
(statearr_16238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___16239);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___16239,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args16296 = [];
var len__8057__auto___16299 = arguments.length;
var i__8058__auto___16300 = (0);
while(true){
if((i__8058__auto___16300 < len__8057__auto___16299)){
args16296.push((arguments[i__8058__auto___16300]));

var G__16301 = (i__8058__auto___16300 + (1));
i__8058__auto___16300 = G__16301;
continue;
} else {
}
break;
}

var G__16298 = args16296.length;
switch (G__16298) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16296.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,ch);
} else {
var m__7617__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,ch);
} else {
var m__7617__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m);
} else {
var m__7617__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,state_map);
} else {
var m__7617__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7616__auto__ = (((m == null))?null:m);
var m__7617__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,m,mode);
} else {
var m__7617__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8064__auto__ = [];
var len__8057__auto___16313 = arguments.length;
var i__8058__auto___16314 = (0);
while(true){
if((i__8058__auto___16314 < len__8057__auto___16313)){
args__8064__auto__.push((arguments[i__8058__auto___16314]));

var G__16315 = (i__8058__auto___16314 + (1));
i__8058__auto___16314 = G__16315;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((3) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8065__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16307){
var map__16308 = p__16307;
var map__16308__$1 = ((((!((map__16308 == null)))?((((map__16308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16308):map__16308);
var opts = map__16308__$1;
var statearr_16310_16316 = state;
(statearr_16310_16316[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__16308,map__16308__$1,opts){
return (function (val){
var statearr_16311_16317 = state;
(statearr_16311_16317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16308,map__16308__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16312_16318 = state;
(statearr_16312_16318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16303){
var G__16304 = cljs.core.first.call(null,seq16303);
var seq16303__$1 = cljs.core.next.call(null,seq16303);
var G__16305 = cljs.core.first.call(null,seq16303__$1);
var seq16303__$2 = cljs.core.next.call(null,seq16303__$1);
var G__16306 = cljs.core.first.call(null,seq16303__$2);
var seq16303__$3 = cljs.core.next.call(null,seq16303__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16304,G__16305,G__16306,seq16303__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16486 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16487){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16487 = meta16487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16488,meta16487__$1){
var self__ = this;
var _16488__$1 = this;
return (new cljs.core.async.t_cljs$core$async16486(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16487__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16488){
var self__ = this;
var _16488__$1 = this;
return self__.meta16487;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16487","meta16487",-89830971,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16486";

cljs.core.async.t_cljs$core$async16486.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async16486");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16486 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16487){
return (new cljs.core.async.t_cljs$core$async16486(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16487));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16486(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14886__auto___16653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16590){
var state_val_16591 = (state_16590[(1)]);
if((state_val_16591 === (7))){
var inst_16505 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16592_16654 = state_16590__$1;
(statearr_16592_16654[(2)] = inst_16505);

(statearr_16592_16654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (20))){
var inst_16517 = (state_16590[(7)]);
var state_16590__$1 = state_16590;
var statearr_16593_16655 = state_16590__$1;
(statearr_16593_16655[(2)] = inst_16517);

(statearr_16593_16655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (27))){
var state_16590__$1 = state_16590;
var statearr_16594_16656 = state_16590__$1;
(statearr_16594_16656[(2)] = null);

(statearr_16594_16656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (1))){
var inst_16492 = (state_16590[(8)]);
var inst_16492__$1 = calc_state.call(null);
var inst_16494 = (inst_16492__$1 == null);
var inst_16495 = cljs.core.not.call(null,inst_16494);
var state_16590__$1 = (function (){var statearr_16595 = state_16590;
(statearr_16595[(8)] = inst_16492__$1);

return statearr_16595;
})();
if(inst_16495){
var statearr_16596_16657 = state_16590__$1;
(statearr_16596_16657[(1)] = (2));

} else {
var statearr_16597_16658 = state_16590__$1;
(statearr_16597_16658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (24))){
var inst_16550 = (state_16590[(9)]);
var inst_16564 = (state_16590[(10)]);
var inst_16541 = (state_16590[(11)]);
var inst_16564__$1 = inst_16541.call(null,inst_16550);
var state_16590__$1 = (function (){var statearr_16598 = state_16590;
(statearr_16598[(10)] = inst_16564__$1);

return statearr_16598;
})();
if(cljs.core.truth_(inst_16564__$1)){
var statearr_16599_16659 = state_16590__$1;
(statearr_16599_16659[(1)] = (29));

} else {
var statearr_16600_16660 = state_16590__$1;
(statearr_16600_16660[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (4))){
var inst_16508 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16508)){
var statearr_16601_16661 = state_16590__$1;
(statearr_16601_16661[(1)] = (8));

} else {
var statearr_16602_16662 = state_16590__$1;
(statearr_16602_16662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (15))){
var inst_16535 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16535)){
var statearr_16603_16663 = state_16590__$1;
(statearr_16603_16663[(1)] = (19));

} else {
var statearr_16604_16664 = state_16590__$1;
(statearr_16604_16664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (21))){
var inst_16540 = (state_16590[(12)]);
var inst_16540__$1 = (state_16590[(2)]);
var inst_16541 = cljs.core.get.call(null,inst_16540__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16542 = cljs.core.get.call(null,inst_16540__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16543 = cljs.core.get.call(null,inst_16540__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16590__$1 = (function (){var statearr_16605 = state_16590;
(statearr_16605[(13)] = inst_16542);

(statearr_16605[(11)] = inst_16541);

(statearr_16605[(12)] = inst_16540__$1);

return statearr_16605;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16590__$1,(22),inst_16543);
} else {
if((state_val_16591 === (31))){
var inst_16572 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16572)){
var statearr_16606_16665 = state_16590__$1;
(statearr_16606_16665[(1)] = (32));

} else {
var statearr_16607_16666 = state_16590__$1;
(statearr_16607_16666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (32))){
var inst_16549 = (state_16590[(14)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16590__$1,(35),out,inst_16549);
} else {
if((state_val_16591 === (33))){
var inst_16540 = (state_16590[(12)]);
var inst_16517 = inst_16540;
var state_16590__$1 = (function (){var statearr_16608 = state_16590;
(statearr_16608[(7)] = inst_16517);

return statearr_16608;
})();
var statearr_16609_16667 = state_16590__$1;
(statearr_16609_16667[(2)] = null);

(statearr_16609_16667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (13))){
var inst_16517 = (state_16590[(7)]);
var inst_16524 = inst_16517.cljs$lang$protocol_mask$partition0$;
var inst_16525 = (inst_16524 & (64));
var inst_16526 = inst_16517.cljs$core$ISeq$;
var inst_16527 = (cljs.core.PROTOCOL_SENTINEL === inst_16526);
var inst_16528 = (inst_16525) || (inst_16527);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16528)){
var statearr_16610_16668 = state_16590__$1;
(statearr_16610_16668[(1)] = (16));

} else {
var statearr_16611_16669 = state_16590__$1;
(statearr_16611_16669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (22))){
var inst_16550 = (state_16590[(9)]);
var inst_16549 = (state_16590[(14)]);
var inst_16548 = (state_16590[(2)]);
var inst_16549__$1 = cljs.core.nth.call(null,inst_16548,(0),null);
var inst_16550__$1 = cljs.core.nth.call(null,inst_16548,(1),null);
var inst_16551 = (inst_16549__$1 == null);
var inst_16552 = cljs.core._EQ_.call(null,inst_16550__$1,change);
var inst_16553 = (inst_16551) || (inst_16552);
var state_16590__$1 = (function (){var statearr_16612 = state_16590;
(statearr_16612[(9)] = inst_16550__$1);

(statearr_16612[(14)] = inst_16549__$1);

return statearr_16612;
})();
if(cljs.core.truth_(inst_16553)){
var statearr_16613_16670 = state_16590__$1;
(statearr_16613_16670[(1)] = (23));

} else {
var statearr_16614_16671 = state_16590__$1;
(statearr_16614_16671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (36))){
var inst_16540 = (state_16590[(12)]);
var inst_16517 = inst_16540;
var state_16590__$1 = (function (){var statearr_16615 = state_16590;
(statearr_16615[(7)] = inst_16517);

return statearr_16615;
})();
var statearr_16616_16672 = state_16590__$1;
(statearr_16616_16672[(2)] = null);

(statearr_16616_16672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (29))){
var inst_16564 = (state_16590[(10)]);
var state_16590__$1 = state_16590;
var statearr_16617_16673 = state_16590__$1;
(statearr_16617_16673[(2)] = inst_16564);

(statearr_16617_16673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (6))){
var state_16590__$1 = state_16590;
var statearr_16618_16674 = state_16590__$1;
(statearr_16618_16674[(2)] = false);

(statearr_16618_16674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (28))){
var inst_16560 = (state_16590[(2)]);
var inst_16561 = calc_state.call(null);
var inst_16517 = inst_16561;
var state_16590__$1 = (function (){var statearr_16619 = state_16590;
(statearr_16619[(7)] = inst_16517);

(statearr_16619[(15)] = inst_16560);

return statearr_16619;
})();
var statearr_16620_16675 = state_16590__$1;
(statearr_16620_16675[(2)] = null);

(statearr_16620_16675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (25))){
var inst_16586 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16621_16676 = state_16590__$1;
(statearr_16621_16676[(2)] = inst_16586);

(statearr_16621_16676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (34))){
var inst_16584 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16622_16677 = state_16590__$1;
(statearr_16622_16677[(2)] = inst_16584);

(statearr_16622_16677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (17))){
var state_16590__$1 = state_16590;
var statearr_16623_16678 = state_16590__$1;
(statearr_16623_16678[(2)] = false);

(statearr_16623_16678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (3))){
var state_16590__$1 = state_16590;
var statearr_16624_16679 = state_16590__$1;
(statearr_16624_16679[(2)] = false);

(statearr_16624_16679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (12))){
var inst_16588 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16590__$1,inst_16588);
} else {
if((state_val_16591 === (2))){
var inst_16492 = (state_16590[(8)]);
var inst_16497 = inst_16492.cljs$lang$protocol_mask$partition0$;
var inst_16498 = (inst_16497 & (64));
var inst_16499 = inst_16492.cljs$core$ISeq$;
var inst_16500 = (cljs.core.PROTOCOL_SENTINEL === inst_16499);
var inst_16501 = (inst_16498) || (inst_16500);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16501)){
var statearr_16625_16680 = state_16590__$1;
(statearr_16625_16680[(1)] = (5));

} else {
var statearr_16626_16681 = state_16590__$1;
(statearr_16626_16681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (23))){
var inst_16549 = (state_16590[(14)]);
var inst_16555 = (inst_16549 == null);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16555)){
var statearr_16627_16682 = state_16590__$1;
(statearr_16627_16682[(1)] = (26));

} else {
var statearr_16628_16683 = state_16590__$1;
(statearr_16628_16683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (35))){
var inst_16575 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16575)){
var statearr_16629_16684 = state_16590__$1;
(statearr_16629_16684[(1)] = (36));

} else {
var statearr_16630_16685 = state_16590__$1;
(statearr_16630_16685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (19))){
var inst_16517 = (state_16590[(7)]);
var inst_16537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16517);
var state_16590__$1 = state_16590;
var statearr_16631_16686 = state_16590__$1;
(statearr_16631_16686[(2)] = inst_16537);

(statearr_16631_16686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (11))){
var inst_16517 = (state_16590[(7)]);
var inst_16521 = (inst_16517 == null);
var inst_16522 = cljs.core.not.call(null,inst_16521);
var state_16590__$1 = state_16590;
if(inst_16522){
var statearr_16632_16687 = state_16590__$1;
(statearr_16632_16687[(1)] = (13));

} else {
var statearr_16633_16688 = state_16590__$1;
(statearr_16633_16688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (9))){
var inst_16492 = (state_16590[(8)]);
var state_16590__$1 = state_16590;
var statearr_16634_16689 = state_16590__$1;
(statearr_16634_16689[(2)] = inst_16492);

(statearr_16634_16689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (5))){
var state_16590__$1 = state_16590;
var statearr_16635_16690 = state_16590__$1;
(statearr_16635_16690[(2)] = true);

(statearr_16635_16690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (14))){
var state_16590__$1 = state_16590;
var statearr_16636_16691 = state_16590__$1;
(statearr_16636_16691[(2)] = false);

(statearr_16636_16691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (26))){
var inst_16550 = (state_16590[(9)]);
var inst_16557 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16550);
var state_16590__$1 = state_16590;
var statearr_16637_16692 = state_16590__$1;
(statearr_16637_16692[(2)] = inst_16557);

(statearr_16637_16692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (16))){
var state_16590__$1 = state_16590;
var statearr_16638_16693 = state_16590__$1;
(statearr_16638_16693[(2)] = true);

(statearr_16638_16693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (38))){
var inst_16580 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16639_16694 = state_16590__$1;
(statearr_16639_16694[(2)] = inst_16580);

(statearr_16639_16694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (30))){
var inst_16550 = (state_16590[(9)]);
var inst_16542 = (state_16590[(13)]);
var inst_16541 = (state_16590[(11)]);
var inst_16567 = cljs.core.empty_QMARK_.call(null,inst_16541);
var inst_16568 = inst_16542.call(null,inst_16550);
var inst_16569 = cljs.core.not.call(null,inst_16568);
var inst_16570 = (inst_16567) && (inst_16569);
var state_16590__$1 = state_16590;
var statearr_16640_16695 = state_16590__$1;
(statearr_16640_16695[(2)] = inst_16570);

(statearr_16640_16695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (10))){
var inst_16492 = (state_16590[(8)]);
var inst_16513 = (state_16590[(2)]);
var inst_16514 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16515 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16516 = cljs.core.get.call(null,inst_16513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16517 = inst_16492;
var state_16590__$1 = (function (){var statearr_16641 = state_16590;
(statearr_16641[(7)] = inst_16517);

(statearr_16641[(16)] = inst_16515);

(statearr_16641[(17)] = inst_16514);

(statearr_16641[(18)] = inst_16516);

return statearr_16641;
})();
var statearr_16642_16696 = state_16590__$1;
(statearr_16642_16696[(2)] = null);

(statearr_16642_16696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (18))){
var inst_16532 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16643_16697 = state_16590__$1;
(statearr_16643_16697[(2)] = inst_16532);

(statearr_16643_16697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (37))){
var state_16590__$1 = state_16590;
var statearr_16644_16698 = state_16590__$1;
(statearr_16644_16698[(2)] = null);

(statearr_16644_16698[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (8))){
var inst_16492 = (state_16590[(8)]);
var inst_16510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16492);
var state_16590__$1 = state_16590;
var statearr_16645_16699 = state_16590__$1;
(statearr_16645_16699[(2)] = inst_16510);

(statearr_16645_16699[(1)] = (10));


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
});})(c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14774__auto__,c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14775__auto__ = null;
var cljs$core$async$mix_$_state_machine__14775__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = cljs$core$async$mix_$_state_machine__14775__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var cljs$core$async$mix_$_state_machine__14775__auto____1 = (function (state_16590){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_16590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e16650){if((e16650 instanceof Object)){
var ex__14778__auto__ = e16650;
var statearr_16651_16700 = state_16590;
(statearr_16651_16700[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16701 = state_16590;
state_16590 = G__16701;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14775__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14775__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14775__auto____0;
cljs$core$async$mix_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14775__auto____1;
return cljs$core$async$mix_$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14888__auto__ = (function (){var statearr_16652 = f__14887__auto__.call(null);
(statearr_16652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___16653);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___16653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7616__auto__ = (((p == null))?null:p);
var m__7617__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7617__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7616__auto__ = (((p == null))?null:p);
var m__7617__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,p,v,ch);
} else {
var m__7617__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16702 = [];
var len__8057__auto___16705 = arguments.length;
var i__8058__auto___16706 = (0);
while(true){
if((i__8058__auto___16706 < len__8057__auto___16705)){
args16702.push((arguments[i__8058__auto___16706]));

var G__16707 = (i__8058__auto___16706 + (1));
i__8058__auto___16706 = G__16707;
continue;
} else {
}
break;
}

var G__16704 = args16702.length;
switch (G__16704) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16702.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7616__auto__ = (((p == null))?null:p);
var m__7617__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,p);
} else {
var m__7617__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7616__auto__ = (((p == null))?null:p);
var m__7617__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7616__auto__)]);
if(!((m__7617__auto__ == null))){
return m__7617__auto__.call(null,p,v);
} else {
var m__7617__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7617__auto____$1 == null))){
return m__7617__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16710 = [];
var len__8057__auto___16835 = arguments.length;
var i__8058__auto___16836 = (0);
while(true){
if((i__8058__auto___16836 < len__8057__auto___16835)){
args16710.push((arguments[i__8058__auto___16836]));

var G__16837 = (i__8058__auto___16836 + (1));
i__8058__auto___16836 = G__16837;
continue;
} else {
}
break;
}

var G__16712 = args16710.length;
switch (G__16712) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16710.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6948__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6948__auto__,mults){
return (function (p1__16709_SHARP_){
if(cljs.core.truth_(p1__16709_SHARP_.call(null,topic))){
return p1__16709_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16709_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6948__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16714 = meta16714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16715,meta16714__$1){
var self__ = this;
var _16715__$1 = this;
return (new cljs.core.async.t_cljs$core$async16713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16714__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16715){
var self__ = this;
var _16715__$1 = this;
return self__.meta16714;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16714","meta16714",1216066501,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16713";

cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async16713");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16713 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16714){
return (new cljs.core.async.t_cljs$core$async16713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16714));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14886__auto___16839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___16839,mults,ensure_mult,p){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___16839,mults,ensure_mult,p){
return (function (state_16787){
var state_val_16788 = (state_16787[(1)]);
if((state_val_16788 === (7))){
var inst_16783 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16789_16840 = state_16787__$1;
(statearr_16789_16840[(2)] = inst_16783);

(statearr_16789_16840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (20))){
var state_16787__$1 = state_16787;
var statearr_16790_16841 = state_16787__$1;
(statearr_16790_16841[(2)] = null);

(statearr_16790_16841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (1))){
var state_16787__$1 = state_16787;
var statearr_16791_16842 = state_16787__$1;
(statearr_16791_16842[(2)] = null);

(statearr_16791_16842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (24))){
var inst_16766 = (state_16787[(7)]);
var inst_16775 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16766);
var state_16787__$1 = state_16787;
var statearr_16792_16843 = state_16787__$1;
(statearr_16792_16843[(2)] = inst_16775);

(statearr_16792_16843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (4))){
var inst_16718 = (state_16787[(8)]);
var inst_16718__$1 = (state_16787[(2)]);
var inst_16719 = (inst_16718__$1 == null);
var state_16787__$1 = (function (){var statearr_16793 = state_16787;
(statearr_16793[(8)] = inst_16718__$1);

return statearr_16793;
})();
if(cljs.core.truth_(inst_16719)){
var statearr_16794_16844 = state_16787__$1;
(statearr_16794_16844[(1)] = (5));

} else {
var statearr_16795_16845 = state_16787__$1;
(statearr_16795_16845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (15))){
var inst_16760 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16796_16846 = state_16787__$1;
(statearr_16796_16846[(2)] = inst_16760);

(statearr_16796_16846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (21))){
var inst_16780 = (state_16787[(2)]);
var state_16787__$1 = (function (){var statearr_16797 = state_16787;
(statearr_16797[(9)] = inst_16780);

return statearr_16797;
})();
var statearr_16798_16847 = state_16787__$1;
(statearr_16798_16847[(2)] = null);

(statearr_16798_16847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (13))){
var inst_16742 = (state_16787[(10)]);
var inst_16744 = cljs.core.chunked_seq_QMARK_.call(null,inst_16742);
var state_16787__$1 = state_16787;
if(inst_16744){
var statearr_16799_16848 = state_16787__$1;
(statearr_16799_16848[(1)] = (16));

} else {
var statearr_16800_16849 = state_16787__$1;
(statearr_16800_16849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (22))){
var inst_16772 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
if(cljs.core.truth_(inst_16772)){
var statearr_16801_16850 = state_16787__$1;
(statearr_16801_16850[(1)] = (23));

} else {
var statearr_16802_16851 = state_16787__$1;
(statearr_16802_16851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (6))){
var inst_16766 = (state_16787[(7)]);
var inst_16768 = (state_16787[(11)]);
var inst_16718 = (state_16787[(8)]);
var inst_16766__$1 = topic_fn.call(null,inst_16718);
var inst_16767 = cljs.core.deref.call(null,mults);
var inst_16768__$1 = cljs.core.get.call(null,inst_16767,inst_16766__$1);
var state_16787__$1 = (function (){var statearr_16803 = state_16787;
(statearr_16803[(7)] = inst_16766__$1);

(statearr_16803[(11)] = inst_16768__$1);

return statearr_16803;
})();
if(cljs.core.truth_(inst_16768__$1)){
var statearr_16804_16852 = state_16787__$1;
(statearr_16804_16852[(1)] = (19));

} else {
var statearr_16805_16853 = state_16787__$1;
(statearr_16805_16853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (25))){
var inst_16777 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16806_16854 = state_16787__$1;
(statearr_16806_16854[(2)] = inst_16777);

(statearr_16806_16854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (17))){
var inst_16742 = (state_16787[(10)]);
var inst_16751 = cljs.core.first.call(null,inst_16742);
var inst_16752 = cljs.core.async.muxch_STAR_.call(null,inst_16751);
var inst_16753 = cljs.core.async.close_BANG_.call(null,inst_16752);
var inst_16754 = cljs.core.next.call(null,inst_16742);
var inst_16728 = inst_16754;
var inst_16729 = null;
var inst_16730 = (0);
var inst_16731 = (0);
var state_16787__$1 = (function (){var statearr_16807 = state_16787;
(statearr_16807[(12)] = inst_16729);

(statearr_16807[(13)] = inst_16753);

(statearr_16807[(14)] = inst_16728);

(statearr_16807[(15)] = inst_16731);

(statearr_16807[(16)] = inst_16730);

return statearr_16807;
})();
var statearr_16808_16855 = state_16787__$1;
(statearr_16808_16855[(2)] = null);

(statearr_16808_16855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (3))){
var inst_16785 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16787__$1,inst_16785);
} else {
if((state_val_16788 === (12))){
var inst_16762 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16809_16856 = state_16787__$1;
(statearr_16809_16856[(2)] = inst_16762);

(statearr_16809_16856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (2))){
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16787__$1,(4),ch);
} else {
if((state_val_16788 === (23))){
var state_16787__$1 = state_16787;
var statearr_16810_16857 = state_16787__$1;
(statearr_16810_16857[(2)] = null);

(statearr_16810_16857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (19))){
var inst_16768 = (state_16787[(11)]);
var inst_16718 = (state_16787[(8)]);
var inst_16770 = cljs.core.async.muxch_STAR_.call(null,inst_16768);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16787__$1,(22),inst_16770,inst_16718);
} else {
if((state_val_16788 === (11))){
var inst_16728 = (state_16787[(14)]);
var inst_16742 = (state_16787[(10)]);
var inst_16742__$1 = cljs.core.seq.call(null,inst_16728);
var state_16787__$1 = (function (){var statearr_16811 = state_16787;
(statearr_16811[(10)] = inst_16742__$1);

return statearr_16811;
})();
if(inst_16742__$1){
var statearr_16812_16858 = state_16787__$1;
(statearr_16812_16858[(1)] = (13));

} else {
var statearr_16813_16859 = state_16787__$1;
(statearr_16813_16859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (9))){
var inst_16764 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16814_16860 = state_16787__$1;
(statearr_16814_16860[(2)] = inst_16764);

(statearr_16814_16860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (5))){
var inst_16725 = cljs.core.deref.call(null,mults);
var inst_16726 = cljs.core.vals.call(null,inst_16725);
var inst_16727 = cljs.core.seq.call(null,inst_16726);
var inst_16728 = inst_16727;
var inst_16729 = null;
var inst_16730 = (0);
var inst_16731 = (0);
var state_16787__$1 = (function (){var statearr_16815 = state_16787;
(statearr_16815[(12)] = inst_16729);

(statearr_16815[(14)] = inst_16728);

(statearr_16815[(15)] = inst_16731);

(statearr_16815[(16)] = inst_16730);

return statearr_16815;
})();
var statearr_16816_16861 = state_16787__$1;
(statearr_16816_16861[(2)] = null);

(statearr_16816_16861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (14))){
var state_16787__$1 = state_16787;
var statearr_16820_16862 = state_16787__$1;
(statearr_16820_16862[(2)] = null);

(statearr_16820_16862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (16))){
var inst_16742 = (state_16787[(10)]);
var inst_16746 = cljs.core.chunk_first.call(null,inst_16742);
var inst_16747 = cljs.core.chunk_rest.call(null,inst_16742);
var inst_16748 = cljs.core.count.call(null,inst_16746);
var inst_16728 = inst_16747;
var inst_16729 = inst_16746;
var inst_16730 = inst_16748;
var inst_16731 = (0);
var state_16787__$1 = (function (){var statearr_16821 = state_16787;
(statearr_16821[(12)] = inst_16729);

(statearr_16821[(14)] = inst_16728);

(statearr_16821[(15)] = inst_16731);

(statearr_16821[(16)] = inst_16730);

return statearr_16821;
})();
var statearr_16822_16863 = state_16787__$1;
(statearr_16822_16863[(2)] = null);

(statearr_16822_16863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (10))){
var inst_16729 = (state_16787[(12)]);
var inst_16728 = (state_16787[(14)]);
var inst_16731 = (state_16787[(15)]);
var inst_16730 = (state_16787[(16)]);
var inst_16736 = cljs.core._nth.call(null,inst_16729,inst_16731);
var inst_16737 = cljs.core.async.muxch_STAR_.call(null,inst_16736);
var inst_16738 = cljs.core.async.close_BANG_.call(null,inst_16737);
var inst_16739 = (inst_16731 + (1));
var tmp16817 = inst_16729;
var tmp16818 = inst_16728;
var tmp16819 = inst_16730;
var inst_16728__$1 = tmp16818;
var inst_16729__$1 = tmp16817;
var inst_16730__$1 = tmp16819;
var inst_16731__$1 = inst_16739;
var state_16787__$1 = (function (){var statearr_16823 = state_16787;
(statearr_16823[(12)] = inst_16729__$1);

(statearr_16823[(17)] = inst_16738);

(statearr_16823[(14)] = inst_16728__$1);

(statearr_16823[(15)] = inst_16731__$1);

(statearr_16823[(16)] = inst_16730__$1);

return statearr_16823;
})();
var statearr_16824_16864 = state_16787__$1;
(statearr_16824_16864[(2)] = null);

(statearr_16824_16864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (18))){
var inst_16757 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16825_16865 = state_16787__$1;
(statearr_16825_16865[(2)] = inst_16757);

(statearr_16825_16865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (8))){
var inst_16731 = (state_16787[(15)]);
var inst_16730 = (state_16787[(16)]);
var inst_16733 = (inst_16731 < inst_16730);
var inst_16734 = inst_16733;
var state_16787__$1 = state_16787;
if(cljs.core.truth_(inst_16734)){
var statearr_16826_16866 = state_16787__$1;
(statearr_16826_16866[(1)] = (10));

} else {
var statearr_16827_16867 = state_16787__$1;
(statearr_16827_16867[(1)] = (11));

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
});})(c__14886__auto___16839,mults,ensure_mult,p))
;
return ((function (switch__14774__auto__,c__14886__auto___16839,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_16831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16831[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_16831[(1)] = (1));

return statearr_16831;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_16787){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_16787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e16832){if((e16832 instanceof Object)){
var ex__14778__auto__ = e16832;
var statearr_16833_16868 = state_16787;
(statearr_16833_16868[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16869 = state_16787;
state_16787 = G__16869;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_16787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_16787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___16839,mults,ensure_mult,p))
})();
var state__14888__auto__ = (function (){var statearr_16834 = f__14887__auto__.call(null);
(statearr_16834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___16839);

return statearr_16834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___16839,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16870 = [];
var len__8057__auto___16873 = arguments.length;
var i__8058__auto___16874 = (0);
while(true){
if((i__8058__auto___16874 < len__8057__auto___16873)){
args16870.push((arguments[i__8058__auto___16874]));

var G__16875 = (i__8058__auto___16874 + (1));
i__8058__auto___16874 = G__16875;
continue;
} else {
}
break;
}

var G__16872 = args16870.length;
switch (G__16872) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16870.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16877 = [];
var len__8057__auto___16880 = arguments.length;
var i__8058__auto___16881 = (0);
while(true){
if((i__8058__auto___16881 < len__8057__auto___16880)){
args16877.push((arguments[i__8058__auto___16881]));

var G__16882 = (i__8058__auto___16881 + (1));
i__8058__auto___16881 = G__16882;
continue;
} else {
}
break;
}

var G__16879 = args16877.length;
switch (G__16879) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16877.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16884 = [];
var len__8057__auto___16955 = arguments.length;
var i__8058__auto___16956 = (0);
while(true){
if((i__8058__auto___16956 < len__8057__auto___16955)){
args16884.push((arguments[i__8058__auto___16956]));

var G__16957 = (i__8058__auto___16956 + (1));
i__8058__auto___16956 = G__16957;
continue;
} else {
}
break;
}

var G__16886 = args16884.length;
switch (G__16886) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16884.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14886__auto___16959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16925){
var state_val_16926 = (state_16925[(1)]);
if((state_val_16926 === (7))){
var state_16925__$1 = state_16925;
var statearr_16927_16960 = state_16925__$1;
(statearr_16927_16960[(2)] = null);

(statearr_16927_16960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (1))){
var state_16925__$1 = state_16925;
var statearr_16928_16961 = state_16925__$1;
(statearr_16928_16961[(2)] = null);

(statearr_16928_16961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (4))){
var inst_16889 = (state_16925[(7)]);
var inst_16891 = (inst_16889 < cnt);
var state_16925__$1 = state_16925;
if(cljs.core.truth_(inst_16891)){
var statearr_16929_16962 = state_16925__$1;
(statearr_16929_16962[(1)] = (6));

} else {
var statearr_16930_16963 = state_16925__$1;
(statearr_16930_16963[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (15))){
var inst_16921 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
var statearr_16931_16964 = state_16925__$1;
(statearr_16931_16964[(2)] = inst_16921);

(statearr_16931_16964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (13))){
var inst_16914 = cljs.core.async.close_BANG_.call(null,out);
var state_16925__$1 = state_16925;
var statearr_16932_16965 = state_16925__$1;
(statearr_16932_16965[(2)] = inst_16914);

(statearr_16932_16965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (6))){
var state_16925__$1 = state_16925;
var statearr_16933_16966 = state_16925__$1;
(statearr_16933_16966[(2)] = null);

(statearr_16933_16966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (3))){
var inst_16923 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16925__$1,inst_16923);
} else {
if((state_val_16926 === (12))){
var inst_16911 = (state_16925[(8)]);
var inst_16911__$1 = (state_16925[(2)]);
var inst_16912 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16911__$1);
var state_16925__$1 = (function (){var statearr_16934 = state_16925;
(statearr_16934[(8)] = inst_16911__$1);

return statearr_16934;
})();
if(cljs.core.truth_(inst_16912)){
var statearr_16935_16967 = state_16925__$1;
(statearr_16935_16967[(1)] = (13));

} else {
var statearr_16936_16968 = state_16925__$1;
(statearr_16936_16968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (2))){
var inst_16888 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16889 = (0);
var state_16925__$1 = (function (){var statearr_16937 = state_16925;
(statearr_16937[(7)] = inst_16889);

(statearr_16937[(9)] = inst_16888);

return statearr_16937;
})();
var statearr_16938_16969 = state_16925__$1;
(statearr_16938_16969[(2)] = null);

(statearr_16938_16969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (11))){
var inst_16889 = (state_16925[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16925,(10),Object,null,(9));
var inst_16898 = chs__$1.call(null,inst_16889);
var inst_16899 = done.call(null,inst_16889);
var inst_16900 = cljs.core.async.take_BANG_.call(null,inst_16898,inst_16899);
var state_16925__$1 = state_16925;
var statearr_16939_16970 = state_16925__$1;
(statearr_16939_16970[(2)] = inst_16900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (9))){
var inst_16889 = (state_16925[(7)]);
var inst_16902 = (state_16925[(2)]);
var inst_16903 = (inst_16889 + (1));
var inst_16889__$1 = inst_16903;
var state_16925__$1 = (function (){var statearr_16940 = state_16925;
(statearr_16940[(7)] = inst_16889__$1);

(statearr_16940[(10)] = inst_16902);

return statearr_16940;
})();
var statearr_16941_16971 = state_16925__$1;
(statearr_16941_16971[(2)] = null);

(statearr_16941_16971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (5))){
var inst_16909 = (state_16925[(2)]);
var state_16925__$1 = (function (){var statearr_16942 = state_16925;
(statearr_16942[(11)] = inst_16909);

return statearr_16942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16925__$1,(12),dchan);
} else {
if((state_val_16926 === (14))){
var inst_16911 = (state_16925[(8)]);
var inst_16916 = cljs.core.apply.call(null,f,inst_16911);
var state_16925__$1 = state_16925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16925__$1,(16),out,inst_16916);
} else {
if((state_val_16926 === (16))){
var inst_16918 = (state_16925[(2)]);
var state_16925__$1 = (function (){var statearr_16943 = state_16925;
(statearr_16943[(12)] = inst_16918);

return statearr_16943;
})();
var statearr_16944_16972 = state_16925__$1;
(statearr_16944_16972[(2)] = null);

(statearr_16944_16972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (10))){
var inst_16893 = (state_16925[(2)]);
var inst_16894 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16925__$1 = (function (){var statearr_16945 = state_16925;
(statearr_16945[(13)] = inst_16893);

return statearr_16945;
})();
var statearr_16946_16973 = state_16925__$1;
(statearr_16946_16973[(2)] = inst_16894);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16926 === (8))){
var inst_16907 = (state_16925[(2)]);
var state_16925__$1 = state_16925;
var statearr_16947_16974 = state_16925__$1;
(statearr_16947_16974[(2)] = inst_16907);

(statearr_16947_16974[(1)] = (5));


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
});})(c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14774__auto__,c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_16951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16951[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_16951[(1)] = (1));

return statearr_16951;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_16925){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_16925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e16952){if((e16952 instanceof Object)){
var ex__14778__auto__ = e16952;
var statearr_16953_16975 = state_16925;
(statearr_16953_16975[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16976 = state_16925;
state_16925 = G__16976;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_16925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_16925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14888__auto__ = (function (){var statearr_16954 = f__14887__auto__.call(null);
(statearr_16954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___16959);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___16959,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16978 = [];
var len__8057__auto___17036 = arguments.length;
var i__8058__auto___17037 = (0);
while(true){
if((i__8058__auto___17037 < len__8057__auto___17036)){
args16978.push((arguments[i__8058__auto___17037]));

var G__17038 = (i__8058__auto___17037 + (1));
i__8058__auto___17037 = G__17038;
continue;
} else {
}
break;
}

var G__16980 = args16978.length;
switch (G__16980) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16978.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17040,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17040,out){
return (function (state_17012){
var state_val_17013 = (state_17012[(1)]);
if((state_val_17013 === (7))){
var inst_16992 = (state_17012[(7)]);
var inst_16991 = (state_17012[(8)]);
var inst_16991__$1 = (state_17012[(2)]);
var inst_16992__$1 = cljs.core.nth.call(null,inst_16991__$1,(0),null);
var inst_16993 = cljs.core.nth.call(null,inst_16991__$1,(1),null);
var inst_16994 = (inst_16992__$1 == null);
var state_17012__$1 = (function (){var statearr_17014 = state_17012;
(statearr_17014[(9)] = inst_16993);

(statearr_17014[(7)] = inst_16992__$1);

(statearr_17014[(8)] = inst_16991__$1);

return statearr_17014;
})();
if(cljs.core.truth_(inst_16994)){
var statearr_17015_17041 = state_17012__$1;
(statearr_17015_17041[(1)] = (8));

} else {
var statearr_17016_17042 = state_17012__$1;
(statearr_17016_17042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (1))){
var inst_16981 = cljs.core.vec.call(null,chs);
var inst_16982 = inst_16981;
var state_17012__$1 = (function (){var statearr_17017 = state_17012;
(statearr_17017[(10)] = inst_16982);

return statearr_17017;
})();
var statearr_17018_17043 = state_17012__$1;
(statearr_17018_17043[(2)] = null);

(statearr_17018_17043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (4))){
var inst_16982 = (state_17012[(10)]);
var state_17012__$1 = state_17012;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17012__$1,(7),inst_16982);
} else {
if((state_val_17013 === (6))){
var inst_17008 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17019_17044 = state_17012__$1;
(statearr_17019_17044[(2)] = inst_17008);

(statearr_17019_17044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (3))){
var inst_17010 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else {
if((state_val_17013 === (2))){
var inst_16982 = (state_17012[(10)]);
var inst_16984 = cljs.core.count.call(null,inst_16982);
var inst_16985 = (inst_16984 > (0));
var state_17012__$1 = state_17012;
if(cljs.core.truth_(inst_16985)){
var statearr_17021_17045 = state_17012__$1;
(statearr_17021_17045[(1)] = (4));

} else {
var statearr_17022_17046 = state_17012__$1;
(statearr_17022_17046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (11))){
var inst_16982 = (state_17012[(10)]);
var inst_17001 = (state_17012[(2)]);
var tmp17020 = inst_16982;
var inst_16982__$1 = tmp17020;
var state_17012__$1 = (function (){var statearr_17023 = state_17012;
(statearr_17023[(11)] = inst_17001);

(statearr_17023[(10)] = inst_16982__$1);

return statearr_17023;
})();
var statearr_17024_17047 = state_17012__$1;
(statearr_17024_17047[(2)] = null);

(statearr_17024_17047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (9))){
var inst_16992 = (state_17012[(7)]);
var state_17012__$1 = state_17012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(11),out,inst_16992);
} else {
if((state_val_17013 === (5))){
var inst_17006 = cljs.core.async.close_BANG_.call(null,out);
var state_17012__$1 = state_17012;
var statearr_17025_17048 = state_17012__$1;
(statearr_17025_17048[(2)] = inst_17006);

(statearr_17025_17048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (10))){
var inst_17004 = (state_17012[(2)]);
var state_17012__$1 = state_17012;
var statearr_17026_17049 = state_17012__$1;
(statearr_17026_17049[(2)] = inst_17004);

(statearr_17026_17049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17013 === (8))){
var inst_16993 = (state_17012[(9)]);
var inst_16982 = (state_17012[(10)]);
var inst_16992 = (state_17012[(7)]);
var inst_16991 = (state_17012[(8)]);
var inst_16996 = (function (){var cs = inst_16982;
var vec__16987 = inst_16991;
var v = inst_16992;
var c = inst_16993;
return ((function (cs,vec__16987,v,c,inst_16993,inst_16982,inst_16992,inst_16991,state_val_17013,c__14886__auto___17040,out){
return (function (p1__16977_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16977_SHARP_);
});
;})(cs,vec__16987,v,c,inst_16993,inst_16982,inst_16992,inst_16991,state_val_17013,c__14886__auto___17040,out))
})();
var inst_16997 = cljs.core.filterv.call(null,inst_16996,inst_16982);
var inst_16982__$1 = inst_16997;
var state_17012__$1 = (function (){var statearr_17027 = state_17012;
(statearr_17027[(10)] = inst_16982__$1);

return statearr_17027;
})();
var statearr_17028_17050 = state_17012__$1;
(statearr_17028_17050[(2)] = null);

(statearr_17028_17050[(1)] = (2));


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
});})(c__14886__auto___17040,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17040,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17032[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17032[(1)] = (1));

return statearr_17032;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17012){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17033){if((e17033 instanceof Object)){
var ex__14778__auto__ = e17033;
var statearr_17034_17051 = state_17012;
(statearr_17034_17051[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17052 = state_17012;
state_17012 = G__17052;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17040,out))
})();
var state__14888__auto__ = (function (){var statearr_17035 = f__14887__auto__.call(null);
(statearr_17035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17040);

return statearr_17035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17040,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17053 = [];
var len__8057__auto___17102 = arguments.length;
var i__8058__auto___17103 = (0);
while(true){
if((i__8058__auto___17103 < len__8057__auto___17102)){
args17053.push((arguments[i__8058__auto___17103]));

var G__17104 = (i__8058__auto___17103 + (1));
i__8058__auto___17103 = G__17104;
continue;
} else {
}
break;
}

var G__17055 = args17053.length;
switch (G__17055) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17053.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17106,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17106,out){
return (function (state_17079){
var state_val_17080 = (state_17079[(1)]);
if((state_val_17080 === (7))){
var inst_17061 = (state_17079[(7)]);
var inst_17061__$1 = (state_17079[(2)]);
var inst_17062 = (inst_17061__$1 == null);
var inst_17063 = cljs.core.not.call(null,inst_17062);
var state_17079__$1 = (function (){var statearr_17081 = state_17079;
(statearr_17081[(7)] = inst_17061__$1);

return statearr_17081;
})();
if(inst_17063){
var statearr_17082_17107 = state_17079__$1;
(statearr_17082_17107[(1)] = (8));

} else {
var statearr_17083_17108 = state_17079__$1;
(statearr_17083_17108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (1))){
var inst_17056 = (0);
var state_17079__$1 = (function (){var statearr_17084 = state_17079;
(statearr_17084[(8)] = inst_17056);

return statearr_17084;
})();
var statearr_17085_17109 = state_17079__$1;
(statearr_17085_17109[(2)] = null);

(statearr_17085_17109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (4))){
var state_17079__$1 = state_17079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17079__$1,(7),ch);
} else {
if((state_val_17080 === (6))){
var inst_17074 = (state_17079[(2)]);
var state_17079__$1 = state_17079;
var statearr_17086_17110 = state_17079__$1;
(statearr_17086_17110[(2)] = inst_17074);

(statearr_17086_17110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (3))){
var inst_17076 = (state_17079[(2)]);
var inst_17077 = cljs.core.async.close_BANG_.call(null,out);
var state_17079__$1 = (function (){var statearr_17087 = state_17079;
(statearr_17087[(9)] = inst_17076);

return statearr_17087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17079__$1,inst_17077);
} else {
if((state_val_17080 === (2))){
var inst_17056 = (state_17079[(8)]);
var inst_17058 = (inst_17056 < n);
var state_17079__$1 = state_17079;
if(cljs.core.truth_(inst_17058)){
var statearr_17088_17111 = state_17079__$1;
(statearr_17088_17111[(1)] = (4));

} else {
var statearr_17089_17112 = state_17079__$1;
(statearr_17089_17112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (11))){
var inst_17056 = (state_17079[(8)]);
var inst_17066 = (state_17079[(2)]);
var inst_17067 = (inst_17056 + (1));
var inst_17056__$1 = inst_17067;
var state_17079__$1 = (function (){var statearr_17090 = state_17079;
(statearr_17090[(10)] = inst_17066);

(statearr_17090[(8)] = inst_17056__$1);

return statearr_17090;
})();
var statearr_17091_17113 = state_17079__$1;
(statearr_17091_17113[(2)] = null);

(statearr_17091_17113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (9))){
var state_17079__$1 = state_17079;
var statearr_17092_17114 = state_17079__$1;
(statearr_17092_17114[(2)] = null);

(statearr_17092_17114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (5))){
var state_17079__$1 = state_17079;
var statearr_17093_17115 = state_17079__$1;
(statearr_17093_17115[(2)] = null);

(statearr_17093_17115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (10))){
var inst_17071 = (state_17079[(2)]);
var state_17079__$1 = state_17079;
var statearr_17094_17116 = state_17079__$1;
(statearr_17094_17116[(2)] = inst_17071);

(statearr_17094_17116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17080 === (8))){
var inst_17061 = (state_17079[(7)]);
var state_17079__$1 = state_17079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17079__$1,(11),out,inst_17061);
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
});})(c__14886__auto___17106,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17106,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17098[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17098[(1)] = (1));

return statearr_17098;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17079){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17099){if((e17099 instanceof Object)){
var ex__14778__auto__ = e17099;
var statearr_17100_17117 = state_17079;
(statearr_17100_17117[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17118 = state_17079;
state_17079 = G__17118;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17106,out))
})();
var state__14888__auto__ = (function (){var statearr_17101 = f__14887__auto__.call(null);
(statearr_17101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17106);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17106,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17126 = (function (f,ch,meta17127){
this.f = f;
this.ch = ch;
this.meta17127 = meta17127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17128,meta17127__$1){
var self__ = this;
var _17128__$1 = this;
return (new cljs.core.async.t_cljs$core$async17126(self__.f,self__.ch,meta17127__$1));
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17128){
var self__ = this;
var _17128__$1 = this;
return self__.meta17127;
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17129 = (function (f,ch,meta17127,_,fn1,meta17130){
this.f = f;
this.ch = ch;
this.meta17127 = meta17127;
this._ = _;
this.fn1 = fn1;
this.meta17130 = meta17130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17131,meta17130__$1){
var self__ = this;
var _17131__$1 = this;
return (new cljs.core.async.t_cljs$core$async17129(self__.f,self__.ch,self__.meta17127,self__._,self__.fn1,meta17130__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17131){
var self__ = this;
var _17131__$1 = this;
return self__.meta17130;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17119_SHARP_){
return f1.call(null,(((p1__17119_SHARP_ == null))?null:self__.f.call(null,p1__17119_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17127","meta17127",1727240236,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17126","cljs.core.async/t_cljs$core$async17126",43158772,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17130","meta17130",1796893147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17129";

cljs.core.async.t_cljs$core$async17129.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async17129");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17129 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17129(f__$1,ch__$1,meta17127__$1,___$2,fn1__$1,meta17130){
return (new cljs.core.async.t_cljs$core$async17129(f__$1,ch__$1,meta17127__$1,___$2,fn1__$1,meta17130));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17129(self__.f,self__.ch,self__.meta17127,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6936__auto__ = ret;
if(cljs.core.truth_(and__6936__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6936__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17127","meta17127",1727240236,null)], null);
});

cljs.core.async.t_cljs$core$async17126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17126";

cljs.core.async.t_cljs$core$async17126.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async17126");
});

cljs.core.async.__GT_t_cljs$core$async17126 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17126(f__$1,ch__$1,meta17127){
return (new cljs.core.async.t_cljs$core$async17126(f__$1,ch__$1,meta17127));
});

}

return (new cljs.core.async.t_cljs$core$async17126(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17135 = (function (f,ch,meta17136){
this.f = f;
this.ch = ch;
this.meta17136 = meta17136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17137,meta17136__$1){
var self__ = this;
var _17137__$1 = this;
return (new cljs.core.async.t_cljs$core$async17135(self__.f,self__.ch,meta17136__$1));
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17137){
var self__ = this;
var _17137__$1 = this;
return self__.meta17136;
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17136","meta17136",-1928162841,null)], null);
});

cljs.core.async.t_cljs$core$async17135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17135";

cljs.core.async.t_cljs$core$async17135.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async17135");
});

cljs.core.async.__GT_t_cljs$core$async17135 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17135(f__$1,ch__$1,meta17136){
return (new cljs.core.async.t_cljs$core$async17135(f__$1,ch__$1,meta17136));
});

}

return (new cljs.core.async.t_cljs$core$async17135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17141 = (function (p,ch,meta17142){
this.p = p;
this.ch = ch;
this.meta17142 = meta17142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17143,meta17142__$1){
var self__ = this;
var _17143__$1 = this;
return (new cljs.core.async.t_cljs$core$async17141(self__.p,self__.ch,meta17142__$1));
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17143){
var self__ = this;
var _17143__$1 = this;
return self__.meta17142;
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17142","meta17142",1530329557,null)], null);
});

cljs.core.async.t_cljs$core$async17141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17141";

cljs.core.async.t_cljs$core$async17141.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async17141");
});

cljs.core.async.__GT_t_cljs$core$async17141 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17141(p__$1,ch__$1,meta17142){
return (new cljs.core.async.t_cljs$core$async17141(p__$1,ch__$1,meta17142));
});

}

return (new cljs.core.async.t_cljs$core$async17141(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17144 = [];
var len__8057__auto___17188 = arguments.length;
var i__8058__auto___17189 = (0);
while(true){
if((i__8058__auto___17189 < len__8057__auto___17188)){
args17144.push((arguments[i__8058__auto___17189]));

var G__17190 = (i__8058__auto___17189 + (1));
i__8058__auto___17189 = G__17190;
continue;
} else {
}
break;
}

var G__17146 = args17144.length;
switch (G__17146) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17144.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17192,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17192,out){
return (function (state_17167){
var state_val_17168 = (state_17167[(1)]);
if((state_val_17168 === (7))){
var inst_17163 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17169_17193 = state_17167__$1;
(statearr_17169_17193[(2)] = inst_17163);

(statearr_17169_17193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (1))){
var state_17167__$1 = state_17167;
var statearr_17170_17194 = state_17167__$1;
(statearr_17170_17194[(2)] = null);

(statearr_17170_17194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (4))){
var inst_17149 = (state_17167[(7)]);
var inst_17149__$1 = (state_17167[(2)]);
var inst_17150 = (inst_17149__$1 == null);
var state_17167__$1 = (function (){var statearr_17171 = state_17167;
(statearr_17171[(7)] = inst_17149__$1);

return statearr_17171;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17172_17195 = state_17167__$1;
(statearr_17172_17195[(1)] = (5));

} else {
var statearr_17173_17196 = state_17167__$1;
(statearr_17173_17196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (6))){
var inst_17149 = (state_17167[(7)]);
var inst_17154 = p.call(null,inst_17149);
var state_17167__$1 = state_17167;
if(cljs.core.truth_(inst_17154)){
var statearr_17174_17197 = state_17167__$1;
(statearr_17174_17197[(1)] = (8));

} else {
var statearr_17175_17198 = state_17167__$1;
(statearr_17175_17198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (3))){
var inst_17165 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17167__$1,inst_17165);
} else {
if((state_val_17168 === (2))){
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17167__$1,(4),ch);
} else {
if((state_val_17168 === (11))){
var inst_17157 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17176_17199 = state_17167__$1;
(statearr_17176_17199[(2)] = inst_17157);

(statearr_17176_17199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (9))){
var state_17167__$1 = state_17167;
var statearr_17177_17200 = state_17167__$1;
(statearr_17177_17200[(2)] = null);

(statearr_17177_17200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (5))){
var inst_17152 = cljs.core.async.close_BANG_.call(null,out);
var state_17167__$1 = state_17167;
var statearr_17178_17201 = state_17167__$1;
(statearr_17178_17201[(2)] = inst_17152);

(statearr_17178_17201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (10))){
var inst_17160 = (state_17167[(2)]);
var state_17167__$1 = (function (){var statearr_17179 = state_17167;
(statearr_17179[(8)] = inst_17160);

return statearr_17179;
})();
var statearr_17180_17202 = state_17167__$1;
(statearr_17180_17202[(2)] = null);

(statearr_17180_17202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (8))){
var inst_17149 = (state_17167[(7)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17167__$1,(11),out,inst_17149);
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
});})(c__14886__auto___17192,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17192,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17184 = [null,null,null,null,null,null,null,null,null];
(statearr_17184[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17184[(1)] = (1));

return statearr_17184;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17167){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17185){if((e17185 instanceof Object)){
var ex__14778__auto__ = e17185;
var statearr_17186_17203 = state_17167;
(statearr_17186_17203[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17204 = state_17167;
state_17167 = G__17204;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17192,out))
})();
var state__14888__auto__ = (function (){var statearr_17187 = f__14887__auto__.call(null);
(statearr_17187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17192);

return statearr_17187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17192,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args17205 = [];
var len__8057__auto___17208 = arguments.length;
var i__8058__auto___17209 = (0);
while(true){
if((i__8058__auto___17209 < len__8057__auto___17208)){
args17205.push((arguments[i__8058__auto___17209]));

var G__17210 = (i__8058__auto___17209 + (1));
i__8058__auto___17209 = G__17210;
continue;
} else {
}
break;
}

var G__17207 = args17205.length;
switch (G__17207) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17205.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__){
return (function (state_17377){
var state_val_17378 = (state_17377[(1)]);
if((state_val_17378 === (7))){
var inst_17373 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17379_17420 = state_17377__$1;
(statearr_17379_17420[(2)] = inst_17373);

(statearr_17379_17420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (20))){
var inst_17343 = (state_17377[(7)]);
var inst_17354 = (state_17377[(2)]);
var inst_17355 = cljs.core.next.call(null,inst_17343);
var inst_17329 = inst_17355;
var inst_17330 = null;
var inst_17331 = (0);
var inst_17332 = (0);
var state_17377__$1 = (function (){var statearr_17380 = state_17377;
(statearr_17380[(8)] = inst_17329);

(statearr_17380[(9)] = inst_17331);

(statearr_17380[(10)] = inst_17332);

(statearr_17380[(11)] = inst_17330);

(statearr_17380[(12)] = inst_17354);

return statearr_17380;
})();
var statearr_17381_17421 = state_17377__$1;
(statearr_17381_17421[(2)] = null);

(statearr_17381_17421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (1))){
var state_17377__$1 = state_17377;
var statearr_17382_17422 = state_17377__$1;
(statearr_17382_17422[(2)] = null);

(statearr_17382_17422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (4))){
var inst_17318 = (state_17377[(13)]);
var inst_17318__$1 = (state_17377[(2)]);
var inst_17319 = (inst_17318__$1 == null);
var state_17377__$1 = (function (){var statearr_17383 = state_17377;
(statearr_17383[(13)] = inst_17318__$1);

return statearr_17383;
})();
if(cljs.core.truth_(inst_17319)){
var statearr_17384_17423 = state_17377__$1;
(statearr_17384_17423[(1)] = (5));

} else {
var statearr_17385_17424 = state_17377__$1;
(statearr_17385_17424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (15))){
var state_17377__$1 = state_17377;
var statearr_17389_17425 = state_17377__$1;
(statearr_17389_17425[(2)] = null);

(statearr_17389_17425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (21))){
var state_17377__$1 = state_17377;
var statearr_17390_17426 = state_17377__$1;
(statearr_17390_17426[(2)] = null);

(statearr_17390_17426[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (13))){
var inst_17329 = (state_17377[(8)]);
var inst_17331 = (state_17377[(9)]);
var inst_17332 = (state_17377[(10)]);
var inst_17330 = (state_17377[(11)]);
var inst_17339 = (state_17377[(2)]);
var inst_17340 = (inst_17332 + (1));
var tmp17386 = inst_17329;
var tmp17387 = inst_17331;
var tmp17388 = inst_17330;
var inst_17329__$1 = tmp17386;
var inst_17330__$1 = tmp17388;
var inst_17331__$1 = tmp17387;
var inst_17332__$1 = inst_17340;
var state_17377__$1 = (function (){var statearr_17391 = state_17377;
(statearr_17391[(8)] = inst_17329__$1);

(statearr_17391[(9)] = inst_17331__$1);

(statearr_17391[(10)] = inst_17332__$1);

(statearr_17391[(14)] = inst_17339);

(statearr_17391[(11)] = inst_17330__$1);

return statearr_17391;
})();
var statearr_17392_17427 = state_17377__$1;
(statearr_17392_17427[(2)] = null);

(statearr_17392_17427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (22))){
var state_17377__$1 = state_17377;
var statearr_17393_17428 = state_17377__$1;
(statearr_17393_17428[(2)] = null);

(statearr_17393_17428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (6))){
var inst_17318 = (state_17377[(13)]);
var inst_17327 = f.call(null,inst_17318);
var inst_17328 = cljs.core.seq.call(null,inst_17327);
var inst_17329 = inst_17328;
var inst_17330 = null;
var inst_17331 = (0);
var inst_17332 = (0);
var state_17377__$1 = (function (){var statearr_17394 = state_17377;
(statearr_17394[(8)] = inst_17329);

(statearr_17394[(9)] = inst_17331);

(statearr_17394[(10)] = inst_17332);

(statearr_17394[(11)] = inst_17330);

return statearr_17394;
})();
var statearr_17395_17429 = state_17377__$1;
(statearr_17395_17429[(2)] = null);

(statearr_17395_17429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (17))){
var inst_17343 = (state_17377[(7)]);
var inst_17347 = cljs.core.chunk_first.call(null,inst_17343);
var inst_17348 = cljs.core.chunk_rest.call(null,inst_17343);
var inst_17349 = cljs.core.count.call(null,inst_17347);
var inst_17329 = inst_17348;
var inst_17330 = inst_17347;
var inst_17331 = inst_17349;
var inst_17332 = (0);
var state_17377__$1 = (function (){var statearr_17396 = state_17377;
(statearr_17396[(8)] = inst_17329);

(statearr_17396[(9)] = inst_17331);

(statearr_17396[(10)] = inst_17332);

(statearr_17396[(11)] = inst_17330);

return statearr_17396;
})();
var statearr_17397_17430 = state_17377__$1;
(statearr_17397_17430[(2)] = null);

(statearr_17397_17430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (3))){
var inst_17375 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17377__$1,inst_17375);
} else {
if((state_val_17378 === (12))){
var inst_17363 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17398_17431 = state_17377__$1;
(statearr_17398_17431[(2)] = inst_17363);

(statearr_17398_17431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (2))){
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17377__$1,(4),in$);
} else {
if((state_val_17378 === (23))){
var inst_17371 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17399_17432 = state_17377__$1;
(statearr_17399_17432[(2)] = inst_17371);

(statearr_17399_17432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (19))){
var inst_17358 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17400_17433 = state_17377__$1;
(statearr_17400_17433[(2)] = inst_17358);

(statearr_17400_17433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (11))){
var inst_17329 = (state_17377[(8)]);
var inst_17343 = (state_17377[(7)]);
var inst_17343__$1 = cljs.core.seq.call(null,inst_17329);
var state_17377__$1 = (function (){var statearr_17401 = state_17377;
(statearr_17401[(7)] = inst_17343__$1);

return statearr_17401;
})();
if(inst_17343__$1){
var statearr_17402_17434 = state_17377__$1;
(statearr_17402_17434[(1)] = (14));

} else {
var statearr_17403_17435 = state_17377__$1;
(statearr_17403_17435[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (9))){
var inst_17365 = (state_17377[(2)]);
var inst_17366 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17377__$1 = (function (){var statearr_17404 = state_17377;
(statearr_17404[(15)] = inst_17365);

return statearr_17404;
})();
if(cljs.core.truth_(inst_17366)){
var statearr_17405_17436 = state_17377__$1;
(statearr_17405_17436[(1)] = (21));

} else {
var statearr_17406_17437 = state_17377__$1;
(statearr_17406_17437[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (5))){
var inst_17321 = cljs.core.async.close_BANG_.call(null,out);
var state_17377__$1 = state_17377;
var statearr_17407_17438 = state_17377__$1;
(statearr_17407_17438[(2)] = inst_17321);

(statearr_17407_17438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (14))){
var inst_17343 = (state_17377[(7)]);
var inst_17345 = cljs.core.chunked_seq_QMARK_.call(null,inst_17343);
var state_17377__$1 = state_17377;
if(inst_17345){
var statearr_17408_17439 = state_17377__$1;
(statearr_17408_17439[(1)] = (17));

} else {
var statearr_17409_17440 = state_17377__$1;
(statearr_17409_17440[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (16))){
var inst_17361 = (state_17377[(2)]);
var state_17377__$1 = state_17377;
var statearr_17410_17441 = state_17377__$1;
(statearr_17410_17441[(2)] = inst_17361);

(statearr_17410_17441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17378 === (10))){
var inst_17332 = (state_17377[(10)]);
var inst_17330 = (state_17377[(11)]);
var inst_17337 = cljs.core._nth.call(null,inst_17330,inst_17332);
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17377__$1,(13),out,inst_17337);
} else {
if((state_val_17378 === (18))){
var inst_17343 = (state_17377[(7)]);
var inst_17352 = cljs.core.first.call(null,inst_17343);
var state_17377__$1 = state_17377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17377__$1,(20),out,inst_17352);
} else {
if((state_val_17378 === (8))){
var inst_17331 = (state_17377[(9)]);
var inst_17332 = (state_17377[(10)]);
var inst_17334 = (inst_17332 < inst_17331);
var inst_17335 = inst_17334;
var state_17377__$1 = state_17377;
if(cljs.core.truth_(inst_17335)){
var statearr_17411_17442 = state_17377__$1;
(statearr_17411_17442[(1)] = (10));

} else {
var statearr_17412_17443 = state_17377__$1;
(statearr_17412_17443[(1)] = (11));

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
});})(c__14886__auto__))
;
return ((function (switch__14774__auto__,c__14886__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____0 = (function (){
var statearr_17416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17416[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__);

(statearr_17416[(1)] = (1));

return statearr_17416;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____1 = (function (state_17377){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17417){if((e17417 instanceof Object)){
var ex__14778__auto__ = e17417;
var statearr_17418_17444 = state_17377;
(statearr_17418_17444[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17445 = state_17377;
state_17377 = G__17445;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__ = function(state_17377){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____1.call(this,state_17377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__))
})();
var state__14888__auto__ = (function (){var statearr_17419 = f__14887__auto__.call(null);
(statearr_17419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_17419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__))
);

return c__14886__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args17446 = [];
var len__8057__auto___17449 = arguments.length;
var i__8058__auto___17450 = (0);
while(true){
if((i__8058__auto___17450 < len__8057__auto___17449)){
args17446.push((arguments[i__8058__auto___17450]));

var G__17451 = (i__8058__auto___17450 + (1));
i__8058__auto___17450 = G__17451;
continue;
} else {
}
break;
}

var G__17448 = args17446.length;
switch (G__17448) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17446.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args17453 = [];
var len__8057__auto___17456 = arguments.length;
var i__8058__auto___17457 = (0);
while(true){
if((i__8058__auto___17457 < len__8057__auto___17456)){
args17453.push((arguments[i__8058__auto___17457]));

var G__17458 = (i__8058__auto___17457 + (1));
i__8058__auto___17457 = G__17458;
continue;
} else {
}
break;
}

var G__17455 = args17453.length;
switch (G__17455) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17453.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args17460 = [];
var len__8057__auto___17511 = arguments.length;
var i__8058__auto___17512 = (0);
while(true){
if((i__8058__auto___17512 < len__8057__auto___17511)){
args17460.push((arguments[i__8058__auto___17512]));

var G__17513 = (i__8058__auto___17512 + (1));
i__8058__auto___17512 = G__17513;
continue;
} else {
}
break;
}

var G__17462 = args17460.length;
switch (G__17462) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17460.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17515,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17515,out){
return (function (state_17486){
var state_val_17487 = (state_17486[(1)]);
if((state_val_17487 === (7))){
var inst_17481 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
var statearr_17488_17516 = state_17486__$1;
(statearr_17488_17516[(2)] = inst_17481);

(statearr_17488_17516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (1))){
var inst_17463 = null;
var state_17486__$1 = (function (){var statearr_17489 = state_17486;
(statearr_17489[(7)] = inst_17463);

return statearr_17489;
})();
var statearr_17490_17517 = state_17486__$1;
(statearr_17490_17517[(2)] = null);

(statearr_17490_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (4))){
var inst_17466 = (state_17486[(8)]);
var inst_17466__$1 = (state_17486[(2)]);
var inst_17467 = (inst_17466__$1 == null);
var inst_17468 = cljs.core.not.call(null,inst_17467);
var state_17486__$1 = (function (){var statearr_17491 = state_17486;
(statearr_17491[(8)] = inst_17466__$1);

return statearr_17491;
})();
if(inst_17468){
var statearr_17492_17518 = state_17486__$1;
(statearr_17492_17518[(1)] = (5));

} else {
var statearr_17493_17519 = state_17486__$1;
(statearr_17493_17519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (6))){
var state_17486__$1 = state_17486;
var statearr_17494_17520 = state_17486__$1;
(statearr_17494_17520[(2)] = null);

(statearr_17494_17520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (3))){
var inst_17483 = (state_17486[(2)]);
var inst_17484 = cljs.core.async.close_BANG_.call(null,out);
var state_17486__$1 = (function (){var statearr_17495 = state_17486;
(statearr_17495[(9)] = inst_17483);

return statearr_17495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17486__$1,inst_17484);
} else {
if((state_val_17487 === (2))){
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17486__$1,(4),ch);
} else {
if((state_val_17487 === (11))){
var inst_17466 = (state_17486[(8)]);
var inst_17475 = (state_17486[(2)]);
var inst_17463 = inst_17466;
var state_17486__$1 = (function (){var statearr_17496 = state_17486;
(statearr_17496[(7)] = inst_17463);

(statearr_17496[(10)] = inst_17475);

return statearr_17496;
})();
var statearr_17497_17521 = state_17486__$1;
(statearr_17497_17521[(2)] = null);

(statearr_17497_17521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (9))){
var inst_17466 = (state_17486[(8)]);
var state_17486__$1 = state_17486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17486__$1,(11),out,inst_17466);
} else {
if((state_val_17487 === (5))){
var inst_17466 = (state_17486[(8)]);
var inst_17463 = (state_17486[(7)]);
var inst_17470 = cljs.core._EQ_.call(null,inst_17466,inst_17463);
var state_17486__$1 = state_17486;
if(inst_17470){
var statearr_17499_17522 = state_17486__$1;
(statearr_17499_17522[(1)] = (8));

} else {
var statearr_17500_17523 = state_17486__$1;
(statearr_17500_17523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (10))){
var inst_17478 = (state_17486[(2)]);
var state_17486__$1 = state_17486;
var statearr_17501_17524 = state_17486__$1;
(statearr_17501_17524[(2)] = inst_17478);

(statearr_17501_17524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17487 === (8))){
var inst_17463 = (state_17486[(7)]);
var tmp17498 = inst_17463;
var inst_17463__$1 = tmp17498;
var state_17486__$1 = (function (){var statearr_17502 = state_17486;
(statearr_17502[(7)] = inst_17463__$1);

return statearr_17502;
})();
var statearr_17503_17525 = state_17486__$1;
(statearr_17503_17525[(2)] = null);

(statearr_17503_17525[(1)] = (2));


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
});})(c__14886__auto___17515,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17515,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17507[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17507[(1)] = (1));

return statearr_17507;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17486){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17508){if((e17508 instanceof Object)){
var ex__14778__auto__ = e17508;
var statearr_17509_17526 = state_17486;
(statearr_17509_17526[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17527 = state_17486;
state_17486 = G__17527;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17515,out))
})();
var state__14888__auto__ = (function (){var statearr_17510 = f__14887__auto__.call(null);
(statearr_17510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17515);

return statearr_17510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17515,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args17528 = [];
var len__8057__auto___17598 = arguments.length;
var i__8058__auto___17599 = (0);
while(true){
if((i__8058__auto___17599 < len__8057__auto___17598)){
args17528.push((arguments[i__8058__auto___17599]));

var G__17600 = (i__8058__auto___17599 + (1));
i__8058__auto___17599 = G__17600;
continue;
} else {
}
break;
}

var G__17530 = args17528.length;
switch (G__17530) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17528.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17602,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17602,out){
return (function (state_17568){
var state_val_17569 = (state_17568[(1)]);
if((state_val_17569 === (7))){
var inst_17564 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
var statearr_17570_17603 = state_17568__$1;
(statearr_17570_17603[(2)] = inst_17564);

(statearr_17570_17603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (1))){
var inst_17531 = (new Array(n));
var inst_17532 = inst_17531;
var inst_17533 = (0);
var state_17568__$1 = (function (){var statearr_17571 = state_17568;
(statearr_17571[(7)] = inst_17532);

(statearr_17571[(8)] = inst_17533);

return statearr_17571;
})();
var statearr_17572_17604 = state_17568__$1;
(statearr_17572_17604[(2)] = null);

(statearr_17572_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (4))){
var inst_17536 = (state_17568[(9)]);
var inst_17536__$1 = (state_17568[(2)]);
var inst_17537 = (inst_17536__$1 == null);
var inst_17538 = cljs.core.not.call(null,inst_17537);
var state_17568__$1 = (function (){var statearr_17573 = state_17568;
(statearr_17573[(9)] = inst_17536__$1);

return statearr_17573;
})();
if(inst_17538){
var statearr_17574_17605 = state_17568__$1;
(statearr_17574_17605[(1)] = (5));

} else {
var statearr_17575_17606 = state_17568__$1;
(statearr_17575_17606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (15))){
var inst_17558 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
var statearr_17576_17607 = state_17568__$1;
(statearr_17576_17607[(2)] = inst_17558);

(statearr_17576_17607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (13))){
var state_17568__$1 = state_17568;
var statearr_17577_17608 = state_17568__$1;
(statearr_17577_17608[(2)] = null);

(statearr_17577_17608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (6))){
var inst_17533 = (state_17568[(8)]);
var inst_17554 = (inst_17533 > (0));
var state_17568__$1 = state_17568;
if(cljs.core.truth_(inst_17554)){
var statearr_17578_17609 = state_17568__$1;
(statearr_17578_17609[(1)] = (12));

} else {
var statearr_17579_17610 = state_17568__$1;
(statearr_17579_17610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (3))){
var inst_17566 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17568__$1,inst_17566);
} else {
if((state_val_17569 === (12))){
var inst_17532 = (state_17568[(7)]);
var inst_17556 = cljs.core.vec.call(null,inst_17532);
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17568__$1,(15),out,inst_17556);
} else {
if((state_val_17569 === (2))){
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17568__$1,(4),ch);
} else {
if((state_val_17569 === (11))){
var inst_17548 = (state_17568[(2)]);
var inst_17549 = (new Array(n));
var inst_17532 = inst_17549;
var inst_17533 = (0);
var state_17568__$1 = (function (){var statearr_17580 = state_17568;
(statearr_17580[(7)] = inst_17532);

(statearr_17580[(8)] = inst_17533);

(statearr_17580[(10)] = inst_17548);

return statearr_17580;
})();
var statearr_17581_17611 = state_17568__$1;
(statearr_17581_17611[(2)] = null);

(statearr_17581_17611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (9))){
var inst_17532 = (state_17568[(7)]);
var inst_17546 = cljs.core.vec.call(null,inst_17532);
var state_17568__$1 = state_17568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17568__$1,(11),out,inst_17546);
} else {
if((state_val_17569 === (5))){
var inst_17532 = (state_17568[(7)]);
var inst_17533 = (state_17568[(8)]);
var inst_17536 = (state_17568[(9)]);
var inst_17541 = (state_17568[(11)]);
var inst_17540 = (inst_17532[inst_17533] = inst_17536);
var inst_17541__$1 = (inst_17533 + (1));
var inst_17542 = (inst_17541__$1 < n);
var state_17568__$1 = (function (){var statearr_17582 = state_17568;
(statearr_17582[(12)] = inst_17540);

(statearr_17582[(11)] = inst_17541__$1);

return statearr_17582;
})();
if(cljs.core.truth_(inst_17542)){
var statearr_17583_17612 = state_17568__$1;
(statearr_17583_17612[(1)] = (8));

} else {
var statearr_17584_17613 = state_17568__$1;
(statearr_17584_17613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (14))){
var inst_17561 = (state_17568[(2)]);
var inst_17562 = cljs.core.async.close_BANG_.call(null,out);
var state_17568__$1 = (function (){var statearr_17586 = state_17568;
(statearr_17586[(13)] = inst_17561);

return statearr_17586;
})();
var statearr_17587_17614 = state_17568__$1;
(statearr_17587_17614[(2)] = inst_17562);

(statearr_17587_17614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (10))){
var inst_17552 = (state_17568[(2)]);
var state_17568__$1 = state_17568;
var statearr_17588_17615 = state_17568__$1;
(statearr_17588_17615[(2)] = inst_17552);

(statearr_17588_17615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17569 === (8))){
var inst_17532 = (state_17568[(7)]);
var inst_17541 = (state_17568[(11)]);
var tmp17585 = inst_17532;
var inst_17532__$1 = tmp17585;
var inst_17533 = inst_17541;
var state_17568__$1 = (function (){var statearr_17589 = state_17568;
(statearr_17589[(7)] = inst_17532__$1);

(statearr_17589[(8)] = inst_17533);

return statearr_17589;
})();
var statearr_17590_17616 = state_17568__$1;
(statearr_17590_17616[(2)] = null);

(statearr_17590_17616[(1)] = (2));


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
});})(c__14886__auto___17602,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17602,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17594[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17594[(1)] = (1));

return statearr_17594;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17568){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object)){
var ex__14778__auto__ = e17595;
var statearr_17596_17617 = state_17568;
(statearr_17596_17617[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17618 = state_17568;
state_17568 = G__17618;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17602,out))
})();
var state__14888__auto__ = (function (){var statearr_17597 = f__14887__auto__.call(null);
(statearr_17597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17602);

return statearr_17597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17602,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17619 = [];
var len__8057__auto___17693 = arguments.length;
var i__8058__auto___17694 = (0);
while(true){
if((i__8058__auto___17694 < len__8057__auto___17693)){
args17619.push((arguments[i__8058__auto___17694]));

var G__17695 = (i__8058__auto___17694 + (1));
i__8058__auto___17694 = G__17695;
continue;
} else {
}
break;
}

var G__17621 = args17619.length;
switch (G__17621) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17619.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14886__auto___17697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___17697,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___17697,out){
return (function (state_17663){
var state_val_17664 = (state_17663[(1)]);
if((state_val_17664 === (7))){
var inst_17659 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17665_17698 = state_17663__$1;
(statearr_17665_17698[(2)] = inst_17659);

(statearr_17665_17698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (1))){
var inst_17622 = [];
var inst_17623 = inst_17622;
var inst_17624 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17663__$1 = (function (){var statearr_17666 = state_17663;
(statearr_17666[(7)] = inst_17623);

(statearr_17666[(8)] = inst_17624);

return statearr_17666;
})();
var statearr_17667_17699 = state_17663__$1;
(statearr_17667_17699[(2)] = null);

(statearr_17667_17699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (4))){
var inst_17627 = (state_17663[(9)]);
var inst_17627__$1 = (state_17663[(2)]);
var inst_17628 = (inst_17627__$1 == null);
var inst_17629 = cljs.core.not.call(null,inst_17628);
var state_17663__$1 = (function (){var statearr_17668 = state_17663;
(statearr_17668[(9)] = inst_17627__$1);

return statearr_17668;
})();
if(inst_17629){
var statearr_17669_17700 = state_17663__$1;
(statearr_17669_17700[(1)] = (5));

} else {
var statearr_17670_17701 = state_17663__$1;
(statearr_17670_17701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (15))){
var inst_17653 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17671_17702 = state_17663__$1;
(statearr_17671_17702[(2)] = inst_17653);

(statearr_17671_17702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (13))){
var state_17663__$1 = state_17663;
var statearr_17672_17703 = state_17663__$1;
(statearr_17672_17703[(2)] = null);

(statearr_17672_17703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (6))){
var inst_17623 = (state_17663[(7)]);
var inst_17648 = inst_17623.length;
var inst_17649 = (inst_17648 > (0));
var state_17663__$1 = state_17663;
if(cljs.core.truth_(inst_17649)){
var statearr_17673_17704 = state_17663__$1;
(statearr_17673_17704[(1)] = (12));

} else {
var statearr_17674_17705 = state_17663__$1;
(statearr_17674_17705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (3))){
var inst_17661 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17663__$1,inst_17661);
} else {
if((state_val_17664 === (12))){
var inst_17623 = (state_17663[(7)]);
var inst_17651 = cljs.core.vec.call(null,inst_17623);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17663__$1,(15),out,inst_17651);
} else {
if((state_val_17664 === (2))){
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17663__$1,(4),ch);
} else {
if((state_val_17664 === (11))){
var inst_17631 = (state_17663[(10)]);
var inst_17627 = (state_17663[(9)]);
var inst_17641 = (state_17663[(2)]);
var inst_17642 = [];
var inst_17643 = inst_17642.push(inst_17627);
var inst_17623 = inst_17642;
var inst_17624 = inst_17631;
var state_17663__$1 = (function (){var statearr_17675 = state_17663;
(statearr_17675[(11)] = inst_17643);

(statearr_17675[(7)] = inst_17623);

(statearr_17675[(8)] = inst_17624);

(statearr_17675[(12)] = inst_17641);

return statearr_17675;
})();
var statearr_17676_17706 = state_17663__$1;
(statearr_17676_17706[(2)] = null);

(statearr_17676_17706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (9))){
var inst_17623 = (state_17663[(7)]);
var inst_17639 = cljs.core.vec.call(null,inst_17623);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17663__$1,(11),out,inst_17639);
} else {
if((state_val_17664 === (5))){
var inst_17631 = (state_17663[(10)]);
var inst_17624 = (state_17663[(8)]);
var inst_17627 = (state_17663[(9)]);
var inst_17631__$1 = f.call(null,inst_17627);
var inst_17632 = cljs.core._EQ_.call(null,inst_17631__$1,inst_17624);
var inst_17633 = cljs.core.keyword_identical_QMARK_.call(null,inst_17624,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17634 = (inst_17632) || (inst_17633);
var state_17663__$1 = (function (){var statearr_17677 = state_17663;
(statearr_17677[(10)] = inst_17631__$1);

return statearr_17677;
})();
if(cljs.core.truth_(inst_17634)){
var statearr_17678_17707 = state_17663__$1;
(statearr_17678_17707[(1)] = (8));

} else {
var statearr_17679_17708 = state_17663__$1;
(statearr_17679_17708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (14))){
var inst_17656 = (state_17663[(2)]);
var inst_17657 = cljs.core.async.close_BANG_.call(null,out);
var state_17663__$1 = (function (){var statearr_17681 = state_17663;
(statearr_17681[(13)] = inst_17656);

return statearr_17681;
})();
var statearr_17682_17709 = state_17663__$1;
(statearr_17682_17709[(2)] = inst_17657);

(statearr_17682_17709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (10))){
var inst_17646 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17683_17710 = state_17663__$1;
(statearr_17683_17710[(2)] = inst_17646);

(statearr_17683_17710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (8))){
var inst_17623 = (state_17663[(7)]);
var inst_17631 = (state_17663[(10)]);
var inst_17627 = (state_17663[(9)]);
var inst_17636 = inst_17623.push(inst_17627);
var tmp17680 = inst_17623;
var inst_17623__$1 = tmp17680;
var inst_17624 = inst_17631;
var state_17663__$1 = (function (){var statearr_17684 = state_17663;
(statearr_17684[(14)] = inst_17636);

(statearr_17684[(7)] = inst_17623__$1);

(statearr_17684[(8)] = inst_17624);

return statearr_17684;
})();
var statearr_17685_17711 = state_17663__$1;
(statearr_17685_17711[(2)] = null);

(statearr_17685_17711[(1)] = (2));


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
});})(c__14886__auto___17697,out))
;
return ((function (switch__14774__auto__,c__14886__auto___17697,out){
return (function() {
var cljs$core$async$state_machine__14775__auto__ = null;
var cljs$core$async$state_machine__14775__auto____0 = (function (){
var statearr_17689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17689[(0)] = cljs$core$async$state_machine__14775__auto__);

(statearr_17689[(1)] = (1));

return statearr_17689;
});
var cljs$core$async$state_machine__14775__auto____1 = (function (state_17663){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17690){if((e17690 instanceof Object)){
var ex__14778__auto__ = e17690;
var statearr_17691_17712 = state_17663;
(statearr_17691_17712[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17713 = state_17663;
state_17663 = G__17713;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
cljs$core$async$state_machine__14775__auto__ = function(state_17663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14775__auto____1.call(this,state_17663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14775__auto____0;
cljs$core$async$state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14775__auto____1;
return cljs$core$async$state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___17697,out))
})();
var state__14888__auto__ = (function (){var statearr_17692 = f__14887__auto__.call(null);
(statearr_17692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___17697);

return statearr_17692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___17697,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

