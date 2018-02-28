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
var args11728 = [];
var len__8057__auto___11734 = arguments.length;
var i__8058__auto___11735 = (0);
while(true){
if((i__8058__auto___11735 < len__8057__auto___11734)){
args11728.push((arguments[i__8058__auto___11735]));

var G__11736 = (i__8058__auto___11735 + (1));
i__8058__auto___11735 = G__11736;
continue;
} else {
}
break;
}

var G__11730 = args11728.length;
switch (G__11730) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11728.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11731 = (function (f,blockable,meta11732){
this.f = f;
this.blockable = blockable;
this.meta11732 = meta11732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11733,meta11732__$1){
var self__ = this;
var _11733__$1 = this;
return (new cljs.core.async.t_cljs$core$async11731(self__.f,self__.blockable,meta11732__$1));
});

cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11733){
var self__ = this;
var _11733__$1 = this;
return self__.meta11732;
});

cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11732","meta11732",-915095581,null)], null);
});

cljs.core.async.t_cljs$core$async11731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11731";

cljs.core.async.t_cljs$core$async11731.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async11731");
});

cljs.core.async.__GT_t_cljs$core$async11731 = (function cljs$core$async$__GT_t_cljs$core$async11731(f__$1,blockable__$1,meta11732){
return (new cljs.core.async.t_cljs$core$async11731(f__$1,blockable__$1,meta11732));
});

}

return (new cljs.core.async.t_cljs$core$async11731(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args11740 = [];
var len__8057__auto___11743 = arguments.length;
var i__8058__auto___11744 = (0);
while(true){
if((i__8058__auto___11744 < len__8057__auto___11743)){
args11740.push((arguments[i__8058__auto___11744]));

var G__11745 = (i__8058__auto___11744 + (1));
i__8058__auto___11744 = G__11745;
continue;
} else {
}
break;
}

var G__11742 = args11740.length;
switch (G__11742) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11740.length)].join('')));

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
var args11747 = [];
var len__8057__auto___11750 = arguments.length;
var i__8058__auto___11751 = (0);
while(true){
if((i__8058__auto___11751 < len__8057__auto___11750)){
args11747.push((arguments[i__8058__auto___11751]));

var G__11752 = (i__8058__auto___11751 + (1));
i__8058__auto___11751 = G__11752;
continue;
} else {
}
break;
}

var G__11749 = args11747.length;
switch (G__11749) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11747.length)].join('')));

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
var args11754 = [];
var len__8057__auto___11757 = arguments.length;
var i__8058__auto___11758 = (0);
while(true){
if((i__8058__auto___11758 < len__8057__auto___11757)){
args11754.push((arguments[i__8058__auto___11758]));

var G__11759 = (i__8058__auto___11758 + (1));
i__8058__auto___11758 = G__11759;
continue;
} else {
}
break;
}

var G__11756 = args11754.length;
switch (G__11756) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11754.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11761 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11761);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11761,ret){
return (function (){
return fn1.call(null,val_11761);
});})(val_11761,ret))
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
var args11762 = [];
var len__8057__auto___11765 = arguments.length;
var i__8058__auto___11766 = (0);
while(true){
if((i__8058__auto___11766 < len__8057__auto___11765)){
args11762.push((arguments[i__8058__auto___11766]));

var G__11767 = (i__8058__auto___11766 + (1));
i__8058__auto___11766 = G__11767;
continue;
} else {
}
break;
}

var G__11764 = args11762.length;
switch (G__11764) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11762.length)].join('')));

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
var n__7871__auto___11769 = n;
var x_11770 = (0);
while(true){
if((x_11770 < n__7871__auto___11769)){
(a[x_11770] = (0));

var G__11771 = (x_11770 + (1));
x_11770 = G__11771;
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

var G__11772 = (i + (1));
i = G__11772;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11776 = (function (flag,meta11777){
this.flag = flag;
this.meta11777 = meta11777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11778,meta11777__$1){
var self__ = this;
var _11778__$1 = this;
return (new cljs.core.async.t_cljs$core$async11776(self__.flag,meta11777__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11778){
var self__ = this;
var _11778__$1 = this;
return self__.meta11777;
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11777","meta11777",-1403954279,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11776";

cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async11776");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11776 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11776(flag__$1,meta11777){
return (new cljs.core.async.t_cljs$core$async11776(flag__$1,meta11777));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11776(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11782 = (function (flag,cb,meta11783){
this.flag = flag;
this.cb = cb;
this.meta11783 = meta11783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11784,meta11783__$1){
var self__ = this;
var _11784__$1 = this;
return (new cljs.core.async.t_cljs$core$async11782(self__.flag,self__.cb,meta11783__$1));
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11784){
var self__ = this;
var _11784__$1 = this;
return self__.meta11783;
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11783","meta11783",-84704816,null)], null);
});

cljs.core.async.t_cljs$core$async11782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11782";

cljs.core.async.t_cljs$core$async11782.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async11782");
});

cljs.core.async.__GT_t_cljs$core$async11782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11782(flag__$1,cb__$1,meta11783){
return (new cljs.core.async.t_cljs$core$async11782(flag__$1,cb__$1,meta11783));
});

}

return (new cljs.core.async.t_cljs$core$async11782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11785_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11786_SHARP_,port], null));
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
var G__11787 = (i + (1));
i = G__11787;
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
var len__8057__auto___11793 = arguments.length;
var i__8058__auto___11794 = (0);
while(true){
if((i__8058__auto___11794 < len__8057__auto___11793)){
args__8064__auto__.push((arguments[i__8058__auto___11794]));

var G__11795 = (i__8058__auto___11794 + (1));
i__8058__auto___11794 = G__11795;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((1) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8065__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11790){
var map__11791 = p__11790;
var map__11791__$1 = ((((!((map__11791 == null)))?((((map__11791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11791):map__11791);
var opts = map__11791__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11788){
var G__11789 = cljs.core.first.call(null,seq11788);
var seq11788__$1 = cljs.core.next.call(null,seq11788);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11789,seq11788__$1);
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
var args11796 = [];
var len__8057__auto___11846 = arguments.length;
var i__8058__auto___11847 = (0);
while(true){
if((i__8058__auto___11847 < len__8057__auto___11846)){
args11796.push((arguments[i__8058__auto___11847]));

var G__11848 = (i__8058__auto___11847 + (1));
i__8058__auto___11847 = G__11848;
continue;
} else {
}
break;
}

var G__11798 = args11796.length;
switch (G__11798) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11796.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11683__auto___11850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___11850){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___11850){
return (function (state_11822){
var state_val_11823 = (state_11822[(1)]);
if((state_val_11823 === (7))){
var inst_11818 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11824_11851 = state_11822__$1;
(statearr_11824_11851[(2)] = inst_11818);

(statearr_11824_11851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (1))){
var state_11822__$1 = state_11822;
var statearr_11825_11852 = state_11822__$1;
(statearr_11825_11852[(2)] = null);

(statearr_11825_11852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (4))){
var inst_11801 = (state_11822[(7)]);
var inst_11801__$1 = (state_11822[(2)]);
var inst_11802 = (inst_11801__$1 == null);
var state_11822__$1 = (function (){var statearr_11826 = state_11822;
(statearr_11826[(7)] = inst_11801__$1);

return statearr_11826;
})();
if(cljs.core.truth_(inst_11802)){
var statearr_11827_11853 = state_11822__$1;
(statearr_11827_11853[(1)] = (5));

} else {
var statearr_11828_11854 = state_11822__$1;
(statearr_11828_11854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (13))){
var state_11822__$1 = state_11822;
var statearr_11829_11855 = state_11822__$1;
(statearr_11829_11855[(2)] = null);

(statearr_11829_11855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (6))){
var inst_11801 = (state_11822[(7)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11822__$1,(11),to,inst_11801);
} else {
if((state_val_11823 === (3))){
var inst_11820 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11822__$1,inst_11820);
} else {
if((state_val_11823 === (12))){
var state_11822__$1 = state_11822;
var statearr_11830_11856 = state_11822__$1;
(statearr_11830_11856[(2)] = null);

(statearr_11830_11856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (2))){
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11822__$1,(4),from);
} else {
if((state_val_11823 === (11))){
var inst_11811 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
if(cljs.core.truth_(inst_11811)){
var statearr_11831_11857 = state_11822__$1;
(statearr_11831_11857[(1)] = (12));

} else {
var statearr_11832_11858 = state_11822__$1;
(statearr_11832_11858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (9))){
var state_11822__$1 = state_11822;
var statearr_11833_11859 = state_11822__$1;
(statearr_11833_11859[(2)] = null);

(statearr_11833_11859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (5))){
var state_11822__$1 = state_11822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11834_11860 = state_11822__$1;
(statearr_11834_11860[(1)] = (8));

} else {
var statearr_11835_11861 = state_11822__$1;
(statearr_11835_11861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (14))){
var inst_11816 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11836_11862 = state_11822__$1;
(statearr_11836_11862[(2)] = inst_11816);

(statearr_11836_11862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (10))){
var inst_11808 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11837_11863 = state_11822__$1;
(statearr_11837_11863[(2)] = inst_11808);

(statearr_11837_11863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (8))){
var inst_11805 = cljs.core.async.close_BANG_.call(null,to);
var state_11822__$1 = state_11822;
var statearr_11838_11864 = state_11822__$1;
(statearr_11838_11864[(2)] = inst_11805);

(statearr_11838_11864[(1)] = (10));


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
});})(c__11683__auto___11850))
;
return ((function (switch__11571__auto__,c__11683__auto___11850){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_11842 = [null,null,null,null,null,null,null,null];
(statearr_11842[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_11842[(1)] = (1));

return statearr_11842;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_11822){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_11822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e11843){if((e11843 instanceof Object)){
var ex__11575__auto__ = e11843;
var statearr_11844_11865 = state_11822;
(statearr_11844_11865[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11866 = state_11822;
state_11822 = G__11866;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_11822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_11822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___11850))
})();
var state__11685__auto__ = (function (){var statearr_11845 = f__11684__auto__.call(null);
(statearr_11845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___11850);

return statearr_11845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___11850))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12054){
var vec__12055 = p__12054;
var v = cljs.core.nth.call(null,vec__12055,(0),null);
var p = cljs.core.nth.call(null,vec__12055,(1),null);
var job = vec__12055;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11683__auto___12241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results){
return (function (state_12062){
var state_val_12063 = (state_12062[(1)]);
if((state_val_12063 === (1))){
var state_12062__$1 = state_12062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12062__$1,(2),res,v);
} else {
if((state_val_12063 === (2))){
var inst_12059 = (state_12062[(2)]);
var inst_12060 = cljs.core.async.close_BANG_.call(null,res);
var state_12062__$1 = (function (){var statearr_12064 = state_12062;
(statearr_12064[(7)] = inst_12059);

return statearr_12064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12062__$1,inst_12060);
} else {
return null;
}
}
});})(c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results))
;
return ((function (switch__11571__auto__,c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_12068 = [null,null,null,null,null,null,null,null];
(statearr_12068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__);

(statearr_12068[(1)] = (1));

return statearr_12068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1 = (function (state_12062){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12069){if((e12069 instanceof Object)){
var ex__11575__auto__ = e12069;
var statearr_12070_12242 = state_12062;
(statearr_12070_12242[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12243 = state_12062;
state_12062 = G__12243;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = function(state_12062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1.call(this,state_12062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results))
})();
var state__11685__auto__ = (function (){var statearr_12071 = f__11684__auto__.call(null);
(statearr_12071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___12241);

return statearr_12071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___12241,res,vec__12055,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12072){
var vec__12073 = p__12072;
var v = cljs.core.nth.call(null,vec__12073,(0),null);
var p = cljs.core.nth.call(null,vec__12073,(1),null);
var job = vec__12073;
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
var n__7871__auto___12244 = n;
var __12245 = (0);
while(true){
if((__12245 < n__7871__auto___12244)){
var G__12076_12246 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12076_12246) {
case "compute":
var c__11683__auto___12248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12245,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (__12245,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function (state_12089){
var state_val_12090 = (state_12089[(1)]);
if((state_val_12090 === (1))){
var state_12089__$1 = state_12089;
var statearr_12091_12249 = state_12089__$1;
(statearr_12091_12249[(2)] = null);

(statearr_12091_12249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12090 === (2))){
var state_12089__$1 = state_12089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12089__$1,(4),jobs);
} else {
if((state_val_12090 === (3))){
var inst_12087 = (state_12089[(2)]);
var state_12089__$1 = state_12089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12089__$1,inst_12087);
} else {
if((state_val_12090 === (4))){
var inst_12079 = (state_12089[(2)]);
var inst_12080 = process.call(null,inst_12079);
var state_12089__$1 = state_12089;
if(cljs.core.truth_(inst_12080)){
var statearr_12092_12250 = state_12089__$1;
(statearr_12092_12250[(1)] = (5));

} else {
var statearr_12093_12251 = state_12089__$1;
(statearr_12093_12251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12090 === (5))){
var state_12089__$1 = state_12089;
var statearr_12094_12252 = state_12089__$1;
(statearr_12094_12252[(2)] = null);

(statearr_12094_12252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12090 === (6))){
var state_12089__$1 = state_12089;
var statearr_12095_12253 = state_12089__$1;
(statearr_12095_12253[(2)] = null);

(statearr_12095_12253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12090 === (7))){
var inst_12085 = (state_12089[(2)]);
var state_12089__$1 = state_12089;
var statearr_12096_12254 = state_12089__$1;
(statearr_12096_12254[(2)] = inst_12085);

(statearr_12096_12254[(1)] = (3));


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
});})(__12245,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
;
return ((function (__12245,switch__11571__auto__,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_12100 = [null,null,null,null,null,null,null];
(statearr_12100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__);

(statearr_12100[(1)] = (1));

return statearr_12100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1 = (function (state_12089){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12101){if((e12101 instanceof Object)){
var ex__11575__auto__ = e12101;
var statearr_12102_12255 = state_12089;
(statearr_12102_12255[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12256 = state_12089;
state_12089 = G__12256;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = function(state_12089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1.call(this,state_12089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__;
})()
;})(__12245,switch__11571__auto__,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
})();
var state__11685__auto__ = (function (){var statearr_12103 = f__11684__auto__.call(null);
(statearr_12103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___12248);

return statearr_12103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(__12245,c__11683__auto___12248,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
);


break;
case "async":
var c__11683__auto___12257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12245,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (__12245,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function (state_12116){
var state_val_12117 = (state_12116[(1)]);
if((state_val_12117 === (1))){
var state_12116__$1 = state_12116;
var statearr_12118_12258 = state_12116__$1;
(statearr_12118_12258[(2)] = null);

(statearr_12118_12258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12117 === (2))){
var state_12116__$1 = state_12116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12116__$1,(4),jobs);
} else {
if((state_val_12117 === (3))){
var inst_12114 = (state_12116[(2)]);
var state_12116__$1 = state_12116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12116__$1,inst_12114);
} else {
if((state_val_12117 === (4))){
var inst_12106 = (state_12116[(2)]);
var inst_12107 = async.call(null,inst_12106);
var state_12116__$1 = state_12116;
if(cljs.core.truth_(inst_12107)){
var statearr_12119_12259 = state_12116__$1;
(statearr_12119_12259[(1)] = (5));

} else {
var statearr_12120_12260 = state_12116__$1;
(statearr_12120_12260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12117 === (5))){
var state_12116__$1 = state_12116;
var statearr_12121_12261 = state_12116__$1;
(statearr_12121_12261[(2)] = null);

(statearr_12121_12261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12117 === (6))){
var state_12116__$1 = state_12116;
var statearr_12122_12262 = state_12116__$1;
(statearr_12122_12262[(2)] = null);

(statearr_12122_12262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12117 === (7))){
var inst_12112 = (state_12116[(2)]);
var state_12116__$1 = state_12116;
var statearr_12123_12263 = state_12116__$1;
(statearr_12123_12263[(2)] = inst_12112);

(statearr_12123_12263[(1)] = (3));


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
});})(__12245,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
;
return ((function (__12245,switch__11571__auto__,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_12127 = [null,null,null,null,null,null,null];
(statearr_12127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__);

(statearr_12127[(1)] = (1));

return statearr_12127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1 = (function (state_12116){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12128){if((e12128 instanceof Object)){
var ex__11575__auto__ = e12128;
var statearr_12129_12264 = state_12116;
(statearr_12129_12264[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12265 = state_12116;
state_12116 = G__12265;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = function(state_12116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1.call(this,state_12116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__;
})()
;})(__12245,switch__11571__auto__,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
})();
var state__11685__auto__ = (function (){var statearr_12130 = f__11684__auto__.call(null);
(statearr_12130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___12257);

return statearr_12130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(__12245,c__11683__auto___12257,G__12076_12246,n__7871__auto___12244,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__12266 = (__12245 + (1));
__12245 = G__12266;
continue;
} else {
}
break;
}

var c__11683__auto___12267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___12267,jobs,results,process,async){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___12267,jobs,results,process,async){
return (function (state_12152){
var state_val_12153 = (state_12152[(1)]);
if((state_val_12153 === (1))){
var state_12152__$1 = state_12152;
var statearr_12154_12268 = state_12152__$1;
(statearr_12154_12268[(2)] = null);

(statearr_12154_12268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12153 === (2))){
var state_12152__$1 = state_12152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12152__$1,(4),from);
} else {
if((state_val_12153 === (3))){
var inst_12150 = (state_12152[(2)]);
var state_12152__$1 = state_12152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12152__$1,inst_12150);
} else {
if((state_val_12153 === (4))){
var inst_12133 = (state_12152[(7)]);
var inst_12133__$1 = (state_12152[(2)]);
var inst_12134 = (inst_12133__$1 == null);
var state_12152__$1 = (function (){var statearr_12155 = state_12152;
(statearr_12155[(7)] = inst_12133__$1);

return statearr_12155;
})();
if(cljs.core.truth_(inst_12134)){
var statearr_12156_12269 = state_12152__$1;
(statearr_12156_12269[(1)] = (5));

} else {
var statearr_12157_12270 = state_12152__$1;
(statearr_12157_12270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12153 === (5))){
var inst_12136 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12152__$1 = state_12152;
var statearr_12158_12271 = state_12152__$1;
(statearr_12158_12271[(2)] = inst_12136);

(statearr_12158_12271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12153 === (6))){
var inst_12138 = (state_12152[(8)]);
var inst_12133 = (state_12152[(7)]);
var inst_12138__$1 = cljs.core.async.chan.call(null,(1));
var inst_12139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12140 = [inst_12133,inst_12138__$1];
var inst_12141 = (new cljs.core.PersistentVector(null,2,(5),inst_12139,inst_12140,null));
var state_12152__$1 = (function (){var statearr_12159 = state_12152;
(statearr_12159[(8)] = inst_12138__$1);

return statearr_12159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12152__$1,(8),jobs,inst_12141);
} else {
if((state_val_12153 === (7))){
var inst_12148 = (state_12152[(2)]);
var state_12152__$1 = state_12152;
var statearr_12160_12272 = state_12152__$1;
(statearr_12160_12272[(2)] = inst_12148);

(statearr_12160_12272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12153 === (8))){
var inst_12138 = (state_12152[(8)]);
var inst_12143 = (state_12152[(2)]);
var state_12152__$1 = (function (){var statearr_12161 = state_12152;
(statearr_12161[(9)] = inst_12143);

return statearr_12161;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12152__$1,(9),results,inst_12138);
} else {
if((state_val_12153 === (9))){
var inst_12145 = (state_12152[(2)]);
var state_12152__$1 = (function (){var statearr_12162 = state_12152;
(statearr_12162[(10)] = inst_12145);

return statearr_12162;
})();
var statearr_12163_12273 = state_12152__$1;
(statearr_12163_12273[(2)] = null);

(statearr_12163_12273[(1)] = (2));


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
});})(c__11683__auto___12267,jobs,results,process,async))
;
return ((function (switch__11571__auto__,c__11683__auto___12267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_12167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__);

(statearr_12167[(1)] = (1));

return statearr_12167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1 = (function (state_12152){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12168){if((e12168 instanceof Object)){
var ex__11575__auto__ = e12168;
var statearr_12169_12274 = state_12152;
(statearr_12169_12274[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12275 = state_12152;
state_12152 = G__12275;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = function(state_12152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1.call(this,state_12152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___12267,jobs,results,process,async))
})();
var state__11685__auto__ = (function (){var statearr_12170 = f__11684__auto__.call(null);
(statearr_12170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___12267);

return statearr_12170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___12267,jobs,results,process,async))
);


var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__,jobs,results,process,async){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__,jobs,results,process,async){
return (function (state_12208){
var state_val_12209 = (state_12208[(1)]);
if((state_val_12209 === (7))){
var inst_12204 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12210_12276 = state_12208__$1;
(statearr_12210_12276[(2)] = inst_12204);

(statearr_12210_12276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (20))){
var state_12208__$1 = state_12208;
var statearr_12211_12277 = state_12208__$1;
(statearr_12211_12277[(2)] = null);

(statearr_12211_12277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (1))){
var state_12208__$1 = state_12208;
var statearr_12212_12278 = state_12208__$1;
(statearr_12212_12278[(2)] = null);

(statearr_12212_12278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (4))){
var inst_12173 = (state_12208[(7)]);
var inst_12173__$1 = (state_12208[(2)]);
var inst_12174 = (inst_12173__$1 == null);
var state_12208__$1 = (function (){var statearr_12213 = state_12208;
(statearr_12213[(7)] = inst_12173__$1);

return statearr_12213;
})();
if(cljs.core.truth_(inst_12174)){
var statearr_12214_12279 = state_12208__$1;
(statearr_12214_12279[(1)] = (5));

} else {
var statearr_12215_12280 = state_12208__$1;
(statearr_12215_12280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (15))){
var inst_12186 = (state_12208[(8)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12208__$1,(18),to,inst_12186);
} else {
if((state_val_12209 === (21))){
var inst_12199 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12216_12281 = state_12208__$1;
(statearr_12216_12281[(2)] = inst_12199);

(statearr_12216_12281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (13))){
var inst_12201 = (state_12208[(2)]);
var state_12208__$1 = (function (){var statearr_12217 = state_12208;
(statearr_12217[(9)] = inst_12201);

return statearr_12217;
})();
var statearr_12218_12282 = state_12208__$1;
(statearr_12218_12282[(2)] = null);

(statearr_12218_12282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (6))){
var inst_12173 = (state_12208[(7)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12208__$1,(11),inst_12173);
} else {
if((state_val_12209 === (17))){
var inst_12194 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
if(cljs.core.truth_(inst_12194)){
var statearr_12219_12283 = state_12208__$1;
(statearr_12219_12283[(1)] = (19));

} else {
var statearr_12220_12284 = state_12208__$1;
(statearr_12220_12284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (3))){
var inst_12206 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12208__$1,inst_12206);
} else {
if((state_val_12209 === (12))){
var inst_12183 = (state_12208[(10)]);
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12208__$1,(14),inst_12183);
} else {
if((state_val_12209 === (2))){
var state_12208__$1 = state_12208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12208__$1,(4),results);
} else {
if((state_val_12209 === (19))){
var state_12208__$1 = state_12208;
var statearr_12221_12285 = state_12208__$1;
(statearr_12221_12285[(2)] = null);

(statearr_12221_12285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (11))){
var inst_12183 = (state_12208[(2)]);
var state_12208__$1 = (function (){var statearr_12222 = state_12208;
(statearr_12222[(10)] = inst_12183);

return statearr_12222;
})();
var statearr_12223_12286 = state_12208__$1;
(statearr_12223_12286[(2)] = null);

(statearr_12223_12286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (9))){
var state_12208__$1 = state_12208;
var statearr_12224_12287 = state_12208__$1;
(statearr_12224_12287[(2)] = null);

(statearr_12224_12287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (5))){
var state_12208__$1 = state_12208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12225_12288 = state_12208__$1;
(statearr_12225_12288[(1)] = (8));

} else {
var statearr_12226_12289 = state_12208__$1;
(statearr_12226_12289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (14))){
var inst_12186 = (state_12208[(8)]);
var inst_12188 = (state_12208[(11)]);
var inst_12186__$1 = (state_12208[(2)]);
var inst_12187 = (inst_12186__$1 == null);
var inst_12188__$1 = cljs.core.not.call(null,inst_12187);
var state_12208__$1 = (function (){var statearr_12227 = state_12208;
(statearr_12227[(8)] = inst_12186__$1);

(statearr_12227[(11)] = inst_12188__$1);

return statearr_12227;
})();
if(inst_12188__$1){
var statearr_12228_12290 = state_12208__$1;
(statearr_12228_12290[(1)] = (15));

} else {
var statearr_12229_12291 = state_12208__$1;
(statearr_12229_12291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (16))){
var inst_12188 = (state_12208[(11)]);
var state_12208__$1 = state_12208;
var statearr_12230_12292 = state_12208__$1;
(statearr_12230_12292[(2)] = inst_12188);

(statearr_12230_12292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (10))){
var inst_12180 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12231_12293 = state_12208__$1;
(statearr_12231_12293[(2)] = inst_12180);

(statearr_12231_12293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (18))){
var inst_12191 = (state_12208[(2)]);
var state_12208__$1 = state_12208;
var statearr_12232_12294 = state_12208__$1;
(statearr_12232_12294[(2)] = inst_12191);

(statearr_12232_12294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12209 === (8))){
var inst_12177 = cljs.core.async.close_BANG_.call(null,to);
var state_12208__$1 = state_12208;
var statearr_12233_12295 = state_12208__$1;
(statearr_12233_12295[(2)] = inst_12177);

(statearr_12233_12295[(1)] = (10));


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
});})(c__11683__auto__,jobs,results,process,async))
;
return ((function (switch__11571__auto__,c__11683__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_12237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__);

(statearr_12237[(1)] = (1));

return statearr_12237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1 = (function (state_12208){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12238){if((e12238 instanceof Object)){
var ex__11575__auto__ = e12238;
var statearr_12239_12296 = state_12208;
(statearr_12239_12296[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12297 = state_12208;
state_12208 = G__12297;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__ = function(state_12208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1.call(this,state_12208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__,jobs,results,process,async))
})();
var state__11685__auto__ = (function (){var statearr_12240 = f__11684__auto__.call(null);
(statearr_12240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_12240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__,jobs,results,process,async))
);

return c__11683__auto__;
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
var args12298 = [];
var len__8057__auto___12301 = arguments.length;
var i__8058__auto___12302 = (0);
while(true){
if((i__8058__auto___12302 < len__8057__auto___12301)){
args12298.push((arguments[i__8058__auto___12302]));

var G__12303 = (i__8058__auto___12302 + (1));
i__8058__auto___12302 = G__12303;
continue;
} else {
}
break;
}

var G__12300 = args12298.length;
switch (G__12300) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12298.length)].join('')));

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
var args12305 = [];
var len__8057__auto___12308 = arguments.length;
var i__8058__auto___12309 = (0);
while(true){
if((i__8058__auto___12309 < len__8057__auto___12308)){
args12305.push((arguments[i__8058__auto___12309]));

var G__12310 = (i__8058__auto___12309 + (1));
i__8058__auto___12309 = G__12310;
continue;
} else {
}
break;
}

var G__12307 = args12305.length;
switch (G__12307) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12305.length)].join('')));

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
var args12312 = [];
var len__8057__auto___12365 = arguments.length;
var i__8058__auto___12366 = (0);
while(true){
if((i__8058__auto___12366 < len__8057__auto___12365)){
args12312.push((arguments[i__8058__auto___12366]));

var G__12367 = (i__8058__auto___12366 + (1));
i__8058__auto___12366 = G__12367;
continue;
} else {
}
break;
}

var G__12314 = args12312.length;
switch (G__12314) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12312.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11683__auto___12369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___12369,tc,fc){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___12369,tc,fc){
return (function (state_12340){
var state_val_12341 = (state_12340[(1)]);
if((state_val_12341 === (7))){
var inst_12336 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
var statearr_12342_12370 = state_12340__$1;
(statearr_12342_12370[(2)] = inst_12336);

(statearr_12342_12370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (1))){
var state_12340__$1 = state_12340;
var statearr_12343_12371 = state_12340__$1;
(statearr_12343_12371[(2)] = null);

(statearr_12343_12371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (4))){
var inst_12317 = (state_12340[(7)]);
var inst_12317__$1 = (state_12340[(2)]);
var inst_12318 = (inst_12317__$1 == null);
var state_12340__$1 = (function (){var statearr_12344 = state_12340;
(statearr_12344[(7)] = inst_12317__$1);

return statearr_12344;
})();
if(cljs.core.truth_(inst_12318)){
var statearr_12345_12372 = state_12340__$1;
(statearr_12345_12372[(1)] = (5));

} else {
var statearr_12346_12373 = state_12340__$1;
(statearr_12346_12373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (13))){
var state_12340__$1 = state_12340;
var statearr_12347_12374 = state_12340__$1;
(statearr_12347_12374[(2)] = null);

(statearr_12347_12374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (6))){
var inst_12317 = (state_12340[(7)]);
var inst_12323 = p.call(null,inst_12317);
var state_12340__$1 = state_12340;
if(cljs.core.truth_(inst_12323)){
var statearr_12348_12375 = state_12340__$1;
(statearr_12348_12375[(1)] = (9));

} else {
var statearr_12349_12376 = state_12340__$1;
(statearr_12349_12376[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (3))){
var inst_12338 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12340__$1,inst_12338);
} else {
if((state_val_12341 === (12))){
var state_12340__$1 = state_12340;
var statearr_12350_12377 = state_12340__$1;
(statearr_12350_12377[(2)] = null);

(statearr_12350_12377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (2))){
var state_12340__$1 = state_12340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12340__$1,(4),ch);
} else {
if((state_val_12341 === (11))){
var inst_12317 = (state_12340[(7)]);
var inst_12327 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12340__$1,(8),inst_12327,inst_12317);
} else {
if((state_val_12341 === (9))){
var state_12340__$1 = state_12340;
var statearr_12351_12378 = state_12340__$1;
(statearr_12351_12378[(2)] = tc);

(statearr_12351_12378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (5))){
var inst_12320 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12321 = cljs.core.async.close_BANG_.call(null,fc);
var state_12340__$1 = (function (){var statearr_12352 = state_12340;
(statearr_12352[(8)] = inst_12320);

return statearr_12352;
})();
var statearr_12353_12379 = state_12340__$1;
(statearr_12353_12379[(2)] = inst_12321);

(statearr_12353_12379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (14))){
var inst_12334 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
var statearr_12354_12380 = state_12340__$1;
(statearr_12354_12380[(2)] = inst_12334);

(statearr_12354_12380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (10))){
var state_12340__$1 = state_12340;
var statearr_12355_12381 = state_12340__$1;
(statearr_12355_12381[(2)] = fc);

(statearr_12355_12381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (8))){
var inst_12329 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
if(cljs.core.truth_(inst_12329)){
var statearr_12356_12382 = state_12340__$1;
(statearr_12356_12382[(1)] = (12));

} else {
var statearr_12357_12383 = state_12340__$1;
(statearr_12357_12383[(1)] = (13));

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
});})(c__11683__auto___12369,tc,fc))
;
return ((function (switch__11571__auto__,c__11683__auto___12369,tc,fc){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_12361 = [null,null,null,null,null,null,null,null,null];
(statearr_12361[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_12361[(1)] = (1));

return statearr_12361;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_12340){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12362){if((e12362 instanceof Object)){
var ex__11575__auto__ = e12362;
var statearr_12363_12384 = state_12340;
(statearr_12363_12384[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12385 = state_12340;
state_12340 = G__12385;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_12340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_12340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___12369,tc,fc))
})();
var state__11685__auto__ = (function (){var statearr_12364 = f__11684__auto__.call(null);
(statearr_12364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___12369);

return statearr_12364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___12369,tc,fc))
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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_12449){
var state_val_12450 = (state_12449[(1)]);
if((state_val_12450 === (7))){
var inst_12445 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12451_12472 = state_12449__$1;
(statearr_12451_12472[(2)] = inst_12445);

(statearr_12451_12472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (1))){
var inst_12429 = init;
var state_12449__$1 = (function (){var statearr_12452 = state_12449;
(statearr_12452[(7)] = inst_12429);

return statearr_12452;
})();
var statearr_12453_12473 = state_12449__$1;
(statearr_12453_12473[(2)] = null);

(statearr_12453_12473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (4))){
var inst_12432 = (state_12449[(8)]);
var inst_12432__$1 = (state_12449[(2)]);
var inst_12433 = (inst_12432__$1 == null);
var state_12449__$1 = (function (){var statearr_12454 = state_12449;
(statearr_12454[(8)] = inst_12432__$1);

return statearr_12454;
})();
if(cljs.core.truth_(inst_12433)){
var statearr_12455_12474 = state_12449__$1;
(statearr_12455_12474[(1)] = (5));

} else {
var statearr_12456_12475 = state_12449__$1;
(statearr_12456_12475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (6))){
var inst_12432 = (state_12449[(8)]);
var inst_12436 = (state_12449[(9)]);
var inst_12429 = (state_12449[(7)]);
var inst_12436__$1 = f.call(null,inst_12429,inst_12432);
var inst_12437 = cljs.core.reduced_QMARK_.call(null,inst_12436__$1);
var state_12449__$1 = (function (){var statearr_12457 = state_12449;
(statearr_12457[(9)] = inst_12436__$1);

return statearr_12457;
})();
if(inst_12437){
var statearr_12458_12476 = state_12449__$1;
(statearr_12458_12476[(1)] = (8));

} else {
var statearr_12459_12477 = state_12449__$1;
(statearr_12459_12477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (3))){
var inst_12447 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12449__$1,inst_12447);
} else {
if((state_val_12450 === (2))){
var state_12449__$1 = state_12449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12449__$1,(4),ch);
} else {
if((state_val_12450 === (9))){
var inst_12436 = (state_12449[(9)]);
var inst_12429 = inst_12436;
var state_12449__$1 = (function (){var statearr_12460 = state_12449;
(statearr_12460[(7)] = inst_12429);

return statearr_12460;
})();
var statearr_12461_12478 = state_12449__$1;
(statearr_12461_12478[(2)] = null);

(statearr_12461_12478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (5))){
var inst_12429 = (state_12449[(7)]);
var state_12449__$1 = state_12449;
var statearr_12462_12479 = state_12449__$1;
(statearr_12462_12479[(2)] = inst_12429);

(statearr_12462_12479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (10))){
var inst_12443 = (state_12449[(2)]);
var state_12449__$1 = state_12449;
var statearr_12463_12480 = state_12449__$1;
(statearr_12463_12480[(2)] = inst_12443);

(statearr_12463_12480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12450 === (8))){
var inst_12436 = (state_12449[(9)]);
var inst_12439 = cljs.core.deref.call(null,inst_12436);
var state_12449__$1 = state_12449;
var statearr_12464_12481 = state_12449__$1;
(statearr_12464_12481[(2)] = inst_12439);

(statearr_12464_12481[(1)] = (10));


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
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11572__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11572__auto____0 = (function (){
var statearr_12468 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12468[(0)] = cljs$core$async$reduce_$_state_machine__11572__auto__);

(statearr_12468[(1)] = (1));

return statearr_12468;
});
var cljs$core$async$reduce_$_state_machine__11572__auto____1 = (function (state_12449){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12469){if((e12469 instanceof Object)){
var ex__11575__auto__ = e12469;
var statearr_12470_12482 = state_12449;
(statearr_12470_12482[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12483 = state_12449;
state_12449 = G__12483;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11572__auto__ = function(state_12449){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11572__auto____1.call(this,state_12449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11572__auto____0;
cljs$core$async$reduce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11572__auto____1;
return cljs$core$async$reduce_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_12471 = f__11684__auto__.call(null);
(statearr_12471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_12471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__,f__$1){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__,f__$1){
return (function (state_12503){
var state_val_12504 = (state_12503[(1)]);
if((state_val_12504 === (1))){
var inst_12498 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12503__$1,(2),inst_12498);
} else {
if((state_val_12504 === (2))){
var inst_12500 = (state_12503[(2)]);
var inst_12501 = f__$1.call(null,inst_12500);
var state_12503__$1 = state_12503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else {
return null;
}
}
});})(c__11683__auto__,f__$1))
;
return ((function (switch__11571__auto__,c__11683__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11572__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11572__auto____0 = (function (){
var statearr_12508 = [null,null,null,null,null,null,null];
(statearr_12508[(0)] = cljs$core$async$transduce_$_state_machine__11572__auto__);

(statearr_12508[(1)] = (1));

return statearr_12508;
});
var cljs$core$async$transduce_$_state_machine__11572__auto____1 = (function (state_12503){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12509){if((e12509 instanceof Object)){
var ex__11575__auto__ = e12509;
var statearr_12510_12512 = state_12503;
(statearr_12510_12512[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12513 = state_12503;
state_12503 = G__12513;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11572__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11572__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11572__auto____0;
cljs$core$async$transduce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11572__auto____1;
return cljs$core$async$transduce_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__,f__$1))
})();
var state__11685__auto__ = (function (){var statearr_12511 = f__11684__auto__.call(null);
(statearr_12511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_12511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__,f__$1))
);

return c__11683__auto__;
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
var args12514 = [];
var len__8057__auto___12566 = arguments.length;
var i__8058__auto___12567 = (0);
while(true){
if((i__8058__auto___12567 < len__8057__auto___12566)){
args12514.push((arguments[i__8058__auto___12567]));

var G__12568 = (i__8058__auto___12567 + (1));
i__8058__auto___12567 = G__12568;
continue;
} else {
}
break;
}

var G__12516 = args12514.length;
switch (G__12516) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12514.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_12541){
var state_val_12542 = (state_12541[(1)]);
if((state_val_12542 === (7))){
var inst_12523 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12543_12570 = state_12541__$1;
(statearr_12543_12570[(2)] = inst_12523);

(statearr_12543_12570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (1))){
var inst_12517 = cljs.core.seq.call(null,coll);
var inst_12518 = inst_12517;
var state_12541__$1 = (function (){var statearr_12544 = state_12541;
(statearr_12544[(7)] = inst_12518);

return statearr_12544;
})();
var statearr_12545_12571 = state_12541__$1;
(statearr_12545_12571[(2)] = null);

(statearr_12545_12571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (4))){
var inst_12518 = (state_12541[(7)]);
var inst_12521 = cljs.core.first.call(null,inst_12518);
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12541__$1,(7),ch,inst_12521);
} else {
if((state_val_12542 === (13))){
var inst_12535 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12546_12572 = state_12541__$1;
(statearr_12546_12572[(2)] = inst_12535);

(statearr_12546_12572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (6))){
var inst_12526 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
if(cljs.core.truth_(inst_12526)){
var statearr_12547_12573 = state_12541__$1;
(statearr_12547_12573[(1)] = (8));

} else {
var statearr_12548_12574 = state_12541__$1;
(statearr_12548_12574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (3))){
var inst_12539 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12541__$1,inst_12539);
} else {
if((state_val_12542 === (12))){
var state_12541__$1 = state_12541;
var statearr_12549_12575 = state_12541__$1;
(statearr_12549_12575[(2)] = null);

(statearr_12549_12575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (2))){
var inst_12518 = (state_12541[(7)]);
var state_12541__$1 = state_12541;
if(cljs.core.truth_(inst_12518)){
var statearr_12550_12576 = state_12541__$1;
(statearr_12550_12576[(1)] = (4));

} else {
var statearr_12551_12577 = state_12541__$1;
(statearr_12551_12577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (11))){
var inst_12532 = cljs.core.async.close_BANG_.call(null,ch);
var state_12541__$1 = state_12541;
var statearr_12552_12578 = state_12541__$1;
(statearr_12552_12578[(2)] = inst_12532);

(statearr_12552_12578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (9))){
var state_12541__$1 = state_12541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12553_12579 = state_12541__$1;
(statearr_12553_12579[(1)] = (11));

} else {
var statearr_12554_12580 = state_12541__$1;
(statearr_12554_12580[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (5))){
var inst_12518 = (state_12541[(7)]);
var state_12541__$1 = state_12541;
var statearr_12555_12581 = state_12541__$1;
(statearr_12555_12581[(2)] = inst_12518);

(statearr_12555_12581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (10))){
var inst_12537 = (state_12541[(2)]);
var state_12541__$1 = state_12541;
var statearr_12556_12582 = state_12541__$1;
(statearr_12556_12582[(2)] = inst_12537);

(statearr_12556_12582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12542 === (8))){
var inst_12518 = (state_12541[(7)]);
var inst_12528 = cljs.core.next.call(null,inst_12518);
var inst_12518__$1 = inst_12528;
var state_12541__$1 = (function (){var statearr_12557 = state_12541;
(statearr_12557[(7)] = inst_12518__$1);

return statearr_12557;
})();
var statearr_12558_12583 = state_12541__$1;
(statearr_12558_12583[(2)] = null);

(statearr_12558_12583[(1)] = (2));


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
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_12562 = [null,null,null,null,null,null,null,null];
(statearr_12562[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_12562[(1)] = (1));

return statearr_12562;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_12541){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e12563){if((e12563 instanceof Object)){
var ex__11575__auto__ = e12563;
var statearr_12564_12584 = state_12541;
(statearr_12564_12584[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12585 = state_12541;
state_12541 = G__12585;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_12541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_12541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_12565 = f__11684__auto__.call(null);
(statearr_12565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_12565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async12811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12811 = (function (ch,cs,meta12812){
this.ch = ch;
this.cs = cs;
this.meta12812 = meta12812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12813,meta12812__$1){
var self__ = this;
var _12813__$1 = this;
return (new cljs.core.async.t_cljs$core$async12811(self__.ch,self__.cs,meta12812__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12813){
var self__ = this;
var _12813__$1 = this;
return self__.meta12812;
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12812","meta12812",-1584505651,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12811";

cljs.core.async.t_cljs$core$async12811.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async12811");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12811 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12811(ch__$1,cs__$1,meta12812){
return (new cljs.core.async.t_cljs$core$async12811(ch__$1,cs__$1,meta12812));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12811(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11683__auto___13036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13036,cs,m,dchan,dctr,done){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13036,cs,m,dchan,dctr,done){
return (function (state_12948){
var state_val_12949 = (state_12948[(1)]);
if((state_val_12949 === (7))){
var inst_12944 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12950_13037 = state_12948__$1;
(statearr_12950_13037[(2)] = inst_12944);

(statearr_12950_13037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (20))){
var inst_12847 = (state_12948[(7)]);
var inst_12859 = cljs.core.first.call(null,inst_12847);
var inst_12860 = cljs.core.nth.call(null,inst_12859,(0),null);
var inst_12861 = cljs.core.nth.call(null,inst_12859,(1),null);
var state_12948__$1 = (function (){var statearr_12951 = state_12948;
(statearr_12951[(8)] = inst_12860);

return statearr_12951;
})();
if(cljs.core.truth_(inst_12861)){
var statearr_12952_13038 = state_12948__$1;
(statearr_12952_13038[(1)] = (22));

} else {
var statearr_12953_13039 = state_12948__$1;
(statearr_12953_13039[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (27))){
var inst_12891 = (state_12948[(9)]);
var inst_12896 = (state_12948[(10)]);
var inst_12889 = (state_12948[(11)]);
var inst_12816 = (state_12948[(12)]);
var inst_12896__$1 = cljs.core._nth.call(null,inst_12889,inst_12891);
var inst_12897 = cljs.core.async.put_BANG_.call(null,inst_12896__$1,inst_12816,done);
var state_12948__$1 = (function (){var statearr_12954 = state_12948;
(statearr_12954[(10)] = inst_12896__$1);

return statearr_12954;
})();
if(cljs.core.truth_(inst_12897)){
var statearr_12955_13040 = state_12948__$1;
(statearr_12955_13040[(1)] = (30));

} else {
var statearr_12956_13041 = state_12948__$1;
(statearr_12956_13041[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (1))){
var state_12948__$1 = state_12948;
var statearr_12957_13042 = state_12948__$1;
(statearr_12957_13042[(2)] = null);

(statearr_12957_13042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (24))){
var inst_12847 = (state_12948[(7)]);
var inst_12866 = (state_12948[(2)]);
var inst_12867 = cljs.core.next.call(null,inst_12847);
var inst_12825 = inst_12867;
var inst_12826 = null;
var inst_12827 = (0);
var inst_12828 = (0);
var state_12948__$1 = (function (){var statearr_12958 = state_12948;
(statearr_12958[(13)] = inst_12827);

(statearr_12958[(14)] = inst_12826);

(statearr_12958[(15)] = inst_12825);

(statearr_12958[(16)] = inst_12828);

(statearr_12958[(17)] = inst_12866);

return statearr_12958;
})();
var statearr_12959_13043 = state_12948__$1;
(statearr_12959_13043[(2)] = null);

(statearr_12959_13043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (39))){
var state_12948__$1 = state_12948;
var statearr_12963_13044 = state_12948__$1;
(statearr_12963_13044[(2)] = null);

(statearr_12963_13044[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (4))){
var inst_12816 = (state_12948[(12)]);
var inst_12816__$1 = (state_12948[(2)]);
var inst_12817 = (inst_12816__$1 == null);
var state_12948__$1 = (function (){var statearr_12964 = state_12948;
(statearr_12964[(12)] = inst_12816__$1);

return statearr_12964;
})();
if(cljs.core.truth_(inst_12817)){
var statearr_12965_13045 = state_12948__$1;
(statearr_12965_13045[(1)] = (5));

} else {
var statearr_12966_13046 = state_12948__$1;
(statearr_12966_13046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (15))){
var inst_12827 = (state_12948[(13)]);
var inst_12826 = (state_12948[(14)]);
var inst_12825 = (state_12948[(15)]);
var inst_12828 = (state_12948[(16)]);
var inst_12843 = (state_12948[(2)]);
var inst_12844 = (inst_12828 + (1));
var tmp12960 = inst_12827;
var tmp12961 = inst_12826;
var tmp12962 = inst_12825;
var inst_12825__$1 = tmp12962;
var inst_12826__$1 = tmp12961;
var inst_12827__$1 = tmp12960;
var inst_12828__$1 = inst_12844;
var state_12948__$1 = (function (){var statearr_12967 = state_12948;
(statearr_12967[(13)] = inst_12827__$1);

(statearr_12967[(14)] = inst_12826__$1);

(statearr_12967[(15)] = inst_12825__$1);

(statearr_12967[(18)] = inst_12843);

(statearr_12967[(16)] = inst_12828__$1);

return statearr_12967;
})();
var statearr_12968_13047 = state_12948__$1;
(statearr_12968_13047[(2)] = null);

(statearr_12968_13047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (21))){
var inst_12870 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12972_13048 = state_12948__$1;
(statearr_12972_13048[(2)] = inst_12870);

(statearr_12972_13048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (31))){
var inst_12896 = (state_12948[(10)]);
var inst_12900 = done.call(null,null);
var inst_12901 = cljs.core.async.untap_STAR_.call(null,m,inst_12896);
var state_12948__$1 = (function (){var statearr_12973 = state_12948;
(statearr_12973[(19)] = inst_12900);

return statearr_12973;
})();
var statearr_12974_13049 = state_12948__$1;
(statearr_12974_13049[(2)] = inst_12901);

(statearr_12974_13049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (32))){
var inst_12891 = (state_12948[(9)]);
var inst_12889 = (state_12948[(11)]);
var inst_12888 = (state_12948[(20)]);
var inst_12890 = (state_12948[(21)]);
var inst_12903 = (state_12948[(2)]);
var inst_12904 = (inst_12891 + (1));
var tmp12969 = inst_12889;
var tmp12970 = inst_12888;
var tmp12971 = inst_12890;
var inst_12888__$1 = tmp12970;
var inst_12889__$1 = tmp12969;
var inst_12890__$1 = tmp12971;
var inst_12891__$1 = inst_12904;
var state_12948__$1 = (function (){var statearr_12975 = state_12948;
(statearr_12975[(9)] = inst_12891__$1);

(statearr_12975[(22)] = inst_12903);

(statearr_12975[(11)] = inst_12889__$1);

(statearr_12975[(20)] = inst_12888__$1);

(statearr_12975[(21)] = inst_12890__$1);

return statearr_12975;
})();
var statearr_12976_13050 = state_12948__$1;
(statearr_12976_13050[(2)] = null);

(statearr_12976_13050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (40))){
var inst_12916 = (state_12948[(23)]);
var inst_12920 = done.call(null,null);
var inst_12921 = cljs.core.async.untap_STAR_.call(null,m,inst_12916);
var state_12948__$1 = (function (){var statearr_12977 = state_12948;
(statearr_12977[(24)] = inst_12920);

return statearr_12977;
})();
var statearr_12978_13051 = state_12948__$1;
(statearr_12978_13051[(2)] = inst_12921);

(statearr_12978_13051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (33))){
var inst_12907 = (state_12948[(25)]);
var inst_12909 = cljs.core.chunked_seq_QMARK_.call(null,inst_12907);
var state_12948__$1 = state_12948;
if(inst_12909){
var statearr_12979_13052 = state_12948__$1;
(statearr_12979_13052[(1)] = (36));

} else {
var statearr_12980_13053 = state_12948__$1;
(statearr_12980_13053[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (13))){
var inst_12837 = (state_12948[(26)]);
var inst_12840 = cljs.core.async.close_BANG_.call(null,inst_12837);
var state_12948__$1 = state_12948;
var statearr_12981_13054 = state_12948__$1;
(statearr_12981_13054[(2)] = inst_12840);

(statearr_12981_13054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (22))){
var inst_12860 = (state_12948[(8)]);
var inst_12863 = cljs.core.async.close_BANG_.call(null,inst_12860);
var state_12948__$1 = state_12948;
var statearr_12982_13055 = state_12948__$1;
(statearr_12982_13055[(2)] = inst_12863);

(statearr_12982_13055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (36))){
var inst_12907 = (state_12948[(25)]);
var inst_12911 = cljs.core.chunk_first.call(null,inst_12907);
var inst_12912 = cljs.core.chunk_rest.call(null,inst_12907);
var inst_12913 = cljs.core.count.call(null,inst_12911);
var inst_12888 = inst_12912;
var inst_12889 = inst_12911;
var inst_12890 = inst_12913;
var inst_12891 = (0);
var state_12948__$1 = (function (){var statearr_12983 = state_12948;
(statearr_12983[(9)] = inst_12891);

(statearr_12983[(11)] = inst_12889);

(statearr_12983[(20)] = inst_12888);

(statearr_12983[(21)] = inst_12890);

return statearr_12983;
})();
var statearr_12984_13056 = state_12948__$1;
(statearr_12984_13056[(2)] = null);

(statearr_12984_13056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (41))){
var inst_12907 = (state_12948[(25)]);
var inst_12923 = (state_12948[(2)]);
var inst_12924 = cljs.core.next.call(null,inst_12907);
var inst_12888 = inst_12924;
var inst_12889 = null;
var inst_12890 = (0);
var inst_12891 = (0);
var state_12948__$1 = (function (){var statearr_12985 = state_12948;
(statearr_12985[(9)] = inst_12891);

(statearr_12985[(27)] = inst_12923);

(statearr_12985[(11)] = inst_12889);

(statearr_12985[(20)] = inst_12888);

(statearr_12985[(21)] = inst_12890);

return statearr_12985;
})();
var statearr_12986_13057 = state_12948__$1;
(statearr_12986_13057[(2)] = null);

(statearr_12986_13057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (43))){
var state_12948__$1 = state_12948;
var statearr_12987_13058 = state_12948__$1;
(statearr_12987_13058[(2)] = null);

(statearr_12987_13058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (29))){
var inst_12932 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_12988_13059 = state_12948__$1;
(statearr_12988_13059[(2)] = inst_12932);

(statearr_12988_13059[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (44))){
var inst_12941 = (state_12948[(2)]);
var state_12948__$1 = (function (){var statearr_12989 = state_12948;
(statearr_12989[(28)] = inst_12941);

return statearr_12989;
})();
var statearr_12990_13060 = state_12948__$1;
(statearr_12990_13060[(2)] = null);

(statearr_12990_13060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (6))){
var inst_12880 = (state_12948[(29)]);
var inst_12879 = cljs.core.deref.call(null,cs);
var inst_12880__$1 = cljs.core.keys.call(null,inst_12879);
var inst_12881 = cljs.core.count.call(null,inst_12880__$1);
var inst_12882 = cljs.core.reset_BANG_.call(null,dctr,inst_12881);
var inst_12887 = cljs.core.seq.call(null,inst_12880__$1);
var inst_12888 = inst_12887;
var inst_12889 = null;
var inst_12890 = (0);
var inst_12891 = (0);
var state_12948__$1 = (function (){var statearr_12991 = state_12948;
(statearr_12991[(9)] = inst_12891);

(statearr_12991[(30)] = inst_12882);

(statearr_12991[(29)] = inst_12880__$1);

(statearr_12991[(11)] = inst_12889);

(statearr_12991[(20)] = inst_12888);

(statearr_12991[(21)] = inst_12890);

return statearr_12991;
})();
var statearr_12992_13061 = state_12948__$1;
(statearr_12992_13061[(2)] = null);

(statearr_12992_13061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (28))){
var inst_12907 = (state_12948[(25)]);
var inst_12888 = (state_12948[(20)]);
var inst_12907__$1 = cljs.core.seq.call(null,inst_12888);
var state_12948__$1 = (function (){var statearr_12993 = state_12948;
(statearr_12993[(25)] = inst_12907__$1);

return statearr_12993;
})();
if(inst_12907__$1){
var statearr_12994_13062 = state_12948__$1;
(statearr_12994_13062[(1)] = (33));

} else {
var statearr_12995_13063 = state_12948__$1;
(statearr_12995_13063[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (25))){
var inst_12891 = (state_12948[(9)]);
var inst_12890 = (state_12948[(21)]);
var inst_12893 = (inst_12891 < inst_12890);
var inst_12894 = inst_12893;
var state_12948__$1 = state_12948;
if(cljs.core.truth_(inst_12894)){
var statearr_12996_13064 = state_12948__$1;
(statearr_12996_13064[(1)] = (27));

} else {
var statearr_12997_13065 = state_12948__$1;
(statearr_12997_13065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (34))){
var state_12948__$1 = state_12948;
var statearr_12998_13066 = state_12948__$1;
(statearr_12998_13066[(2)] = null);

(statearr_12998_13066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (17))){
var state_12948__$1 = state_12948;
var statearr_12999_13067 = state_12948__$1;
(statearr_12999_13067[(2)] = null);

(statearr_12999_13067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (3))){
var inst_12946 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12948__$1,inst_12946);
} else {
if((state_val_12949 === (12))){
var inst_12875 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13000_13068 = state_12948__$1;
(statearr_13000_13068[(2)] = inst_12875);

(statearr_13000_13068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (2))){
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12948__$1,(4),ch);
} else {
if((state_val_12949 === (23))){
var state_12948__$1 = state_12948;
var statearr_13001_13069 = state_12948__$1;
(statearr_13001_13069[(2)] = null);

(statearr_13001_13069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (35))){
var inst_12930 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13002_13070 = state_12948__$1;
(statearr_13002_13070[(2)] = inst_12930);

(statearr_13002_13070[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (19))){
var inst_12847 = (state_12948[(7)]);
var inst_12851 = cljs.core.chunk_first.call(null,inst_12847);
var inst_12852 = cljs.core.chunk_rest.call(null,inst_12847);
var inst_12853 = cljs.core.count.call(null,inst_12851);
var inst_12825 = inst_12852;
var inst_12826 = inst_12851;
var inst_12827 = inst_12853;
var inst_12828 = (0);
var state_12948__$1 = (function (){var statearr_13003 = state_12948;
(statearr_13003[(13)] = inst_12827);

(statearr_13003[(14)] = inst_12826);

(statearr_13003[(15)] = inst_12825);

(statearr_13003[(16)] = inst_12828);

return statearr_13003;
})();
var statearr_13004_13071 = state_12948__$1;
(statearr_13004_13071[(2)] = null);

(statearr_13004_13071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (11))){
var inst_12847 = (state_12948[(7)]);
var inst_12825 = (state_12948[(15)]);
var inst_12847__$1 = cljs.core.seq.call(null,inst_12825);
var state_12948__$1 = (function (){var statearr_13005 = state_12948;
(statearr_13005[(7)] = inst_12847__$1);

return statearr_13005;
})();
if(inst_12847__$1){
var statearr_13006_13072 = state_12948__$1;
(statearr_13006_13072[(1)] = (16));

} else {
var statearr_13007_13073 = state_12948__$1;
(statearr_13007_13073[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (9))){
var inst_12877 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13008_13074 = state_12948__$1;
(statearr_13008_13074[(2)] = inst_12877);

(statearr_13008_13074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (5))){
var inst_12823 = cljs.core.deref.call(null,cs);
var inst_12824 = cljs.core.seq.call(null,inst_12823);
var inst_12825 = inst_12824;
var inst_12826 = null;
var inst_12827 = (0);
var inst_12828 = (0);
var state_12948__$1 = (function (){var statearr_13009 = state_12948;
(statearr_13009[(13)] = inst_12827);

(statearr_13009[(14)] = inst_12826);

(statearr_13009[(15)] = inst_12825);

(statearr_13009[(16)] = inst_12828);

return statearr_13009;
})();
var statearr_13010_13075 = state_12948__$1;
(statearr_13010_13075[(2)] = null);

(statearr_13010_13075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (14))){
var state_12948__$1 = state_12948;
var statearr_13011_13076 = state_12948__$1;
(statearr_13011_13076[(2)] = null);

(statearr_13011_13076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (45))){
var inst_12938 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13012_13077 = state_12948__$1;
(statearr_13012_13077[(2)] = inst_12938);

(statearr_13012_13077[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (26))){
var inst_12880 = (state_12948[(29)]);
var inst_12934 = (state_12948[(2)]);
var inst_12935 = cljs.core.seq.call(null,inst_12880);
var state_12948__$1 = (function (){var statearr_13013 = state_12948;
(statearr_13013[(31)] = inst_12934);

return statearr_13013;
})();
if(inst_12935){
var statearr_13014_13078 = state_12948__$1;
(statearr_13014_13078[(1)] = (42));

} else {
var statearr_13015_13079 = state_12948__$1;
(statearr_13015_13079[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (16))){
var inst_12847 = (state_12948[(7)]);
var inst_12849 = cljs.core.chunked_seq_QMARK_.call(null,inst_12847);
var state_12948__$1 = state_12948;
if(inst_12849){
var statearr_13016_13080 = state_12948__$1;
(statearr_13016_13080[(1)] = (19));

} else {
var statearr_13017_13081 = state_12948__$1;
(statearr_13017_13081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (38))){
var inst_12927 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13018_13082 = state_12948__$1;
(statearr_13018_13082[(2)] = inst_12927);

(statearr_13018_13082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (30))){
var state_12948__$1 = state_12948;
var statearr_13019_13083 = state_12948__$1;
(statearr_13019_13083[(2)] = null);

(statearr_13019_13083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (10))){
var inst_12826 = (state_12948[(14)]);
var inst_12828 = (state_12948[(16)]);
var inst_12836 = cljs.core._nth.call(null,inst_12826,inst_12828);
var inst_12837 = cljs.core.nth.call(null,inst_12836,(0),null);
var inst_12838 = cljs.core.nth.call(null,inst_12836,(1),null);
var state_12948__$1 = (function (){var statearr_13020 = state_12948;
(statearr_13020[(26)] = inst_12837);

return statearr_13020;
})();
if(cljs.core.truth_(inst_12838)){
var statearr_13021_13084 = state_12948__$1;
(statearr_13021_13084[(1)] = (13));

} else {
var statearr_13022_13085 = state_12948__$1;
(statearr_13022_13085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (18))){
var inst_12873 = (state_12948[(2)]);
var state_12948__$1 = state_12948;
var statearr_13023_13086 = state_12948__$1;
(statearr_13023_13086[(2)] = inst_12873);

(statearr_13023_13086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (42))){
var state_12948__$1 = state_12948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12948__$1,(45),dchan);
} else {
if((state_val_12949 === (37))){
var inst_12916 = (state_12948[(23)]);
var inst_12907 = (state_12948[(25)]);
var inst_12816 = (state_12948[(12)]);
var inst_12916__$1 = cljs.core.first.call(null,inst_12907);
var inst_12917 = cljs.core.async.put_BANG_.call(null,inst_12916__$1,inst_12816,done);
var state_12948__$1 = (function (){var statearr_13024 = state_12948;
(statearr_13024[(23)] = inst_12916__$1);

return statearr_13024;
})();
if(cljs.core.truth_(inst_12917)){
var statearr_13025_13087 = state_12948__$1;
(statearr_13025_13087[(1)] = (39));

} else {
var statearr_13026_13088 = state_12948__$1;
(statearr_13026_13088[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12949 === (8))){
var inst_12827 = (state_12948[(13)]);
var inst_12828 = (state_12948[(16)]);
var inst_12830 = (inst_12828 < inst_12827);
var inst_12831 = inst_12830;
var state_12948__$1 = state_12948;
if(cljs.core.truth_(inst_12831)){
var statearr_13027_13089 = state_12948__$1;
(statearr_13027_13089[(1)] = (10));

} else {
var statearr_13028_13090 = state_12948__$1;
(statearr_13028_13090[(1)] = (11));

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
});})(c__11683__auto___13036,cs,m,dchan,dctr,done))
;
return ((function (switch__11571__auto__,c__11683__auto___13036,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11572__auto__ = null;
var cljs$core$async$mult_$_state_machine__11572__auto____0 = (function (){
var statearr_13032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13032[(0)] = cljs$core$async$mult_$_state_machine__11572__auto__);

(statearr_13032[(1)] = (1));

return statearr_13032;
});
var cljs$core$async$mult_$_state_machine__11572__auto____1 = (function (state_12948){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_12948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13033){if((e13033 instanceof Object)){
var ex__11575__auto__ = e13033;
var statearr_13034_13091 = state_12948;
(statearr_13034_13091[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13092 = state_12948;
state_12948 = G__13092;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11572__auto__ = function(state_12948){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11572__auto____1.call(this,state_12948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11572__auto____0;
cljs$core$async$mult_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11572__auto____1;
return cljs$core$async$mult_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13036,cs,m,dchan,dctr,done))
})();
var state__11685__auto__ = (function (){var statearr_13035 = f__11684__auto__.call(null);
(statearr_13035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13036);

return statearr_13035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13036,cs,m,dchan,dctr,done))
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
var args13093 = [];
var len__8057__auto___13096 = arguments.length;
var i__8058__auto___13097 = (0);
while(true){
if((i__8058__auto___13097 < len__8057__auto___13096)){
args13093.push((arguments[i__8058__auto___13097]));

var G__13098 = (i__8058__auto___13097 + (1));
i__8058__auto___13097 = G__13098;
continue;
} else {
}
break;
}

var G__13095 = args13093.length;
switch (G__13095) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13093.length)].join('')));

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
var len__8057__auto___13110 = arguments.length;
var i__8058__auto___13111 = (0);
while(true){
if((i__8058__auto___13111 < len__8057__auto___13110)){
args__8064__auto__.push((arguments[i__8058__auto___13111]));

var G__13112 = (i__8058__auto___13111 + (1));
i__8058__auto___13111 = G__13112;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((3) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8065__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13104){
var map__13105 = p__13104;
var map__13105__$1 = ((((!((map__13105 == null)))?((((map__13105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13105):map__13105);
var opts = map__13105__$1;
var statearr_13107_13113 = state;
(statearr_13107_13113[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13105,map__13105__$1,opts){
return (function (val){
var statearr_13108_13114 = state;
(statearr_13108_13114[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13105,map__13105__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13109_13115 = state;
(statearr_13109_13115[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13100){
var G__13101 = cljs.core.first.call(null,seq13100);
var seq13100__$1 = cljs.core.next.call(null,seq13100);
var G__13102 = cljs.core.first.call(null,seq13100__$1);
var seq13100__$2 = cljs.core.next.call(null,seq13100__$1);
var G__13103 = cljs.core.first.call(null,seq13100__$2);
var seq13100__$3 = cljs.core.next.call(null,seq13100__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13101,G__13102,G__13103,seq13100__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13283 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13284){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13284 = meta13284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13285,meta13284__$1){
var self__ = this;
var _13285__$1 = this;
return (new cljs.core.async.t_cljs$core$async13283(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13284__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13285){
var self__ = this;
var _13285__$1 = this;
return self__.meta13284;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13284","meta13284",1510191412,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13283";

cljs.core.async.t_cljs$core$async13283.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13283");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13283 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13283(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13284){
return (new cljs.core.async.t_cljs$core$async13283(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13284));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13283(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11683__auto___13450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13387){
var state_val_13388 = (state_13387[(1)]);
if((state_val_13388 === (7))){
var inst_13302 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13389_13451 = state_13387__$1;
(statearr_13389_13451[(2)] = inst_13302);

(statearr_13389_13451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (20))){
var inst_13314 = (state_13387[(7)]);
var state_13387__$1 = state_13387;
var statearr_13390_13452 = state_13387__$1;
(statearr_13390_13452[(2)] = inst_13314);

(statearr_13390_13452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (27))){
var state_13387__$1 = state_13387;
var statearr_13391_13453 = state_13387__$1;
(statearr_13391_13453[(2)] = null);

(statearr_13391_13453[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (1))){
var inst_13289 = (state_13387[(8)]);
var inst_13289__$1 = calc_state.call(null);
var inst_13291 = (inst_13289__$1 == null);
var inst_13292 = cljs.core.not.call(null,inst_13291);
var state_13387__$1 = (function (){var statearr_13392 = state_13387;
(statearr_13392[(8)] = inst_13289__$1);

return statearr_13392;
})();
if(inst_13292){
var statearr_13393_13454 = state_13387__$1;
(statearr_13393_13454[(1)] = (2));

} else {
var statearr_13394_13455 = state_13387__$1;
(statearr_13394_13455[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (24))){
var inst_13338 = (state_13387[(9)]);
var inst_13361 = (state_13387[(10)]);
var inst_13347 = (state_13387[(11)]);
var inst_13361__$1 = inst_13338.call(null,inst_13347);
var state_13387__$1 = (function (){var statearr_13395 = state_13387;
(statearr_13395[(10)] = inst_13361__$1);

return statearr_13395;
})();
if(cljs.core.truth_(inst_13361__$1)){
var statearr_13396_13456 = state_13387__$1;
(statearr_13396_13456[(1)] = (29));

} else {
var statearr_13397_13457 = state_13387__$1;
(statearr_13397_13457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (4))){
var inst_13305 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13305)){
var statearr_13398_13458 = state_13387__$1;
(statearr_13398_13458[(1)] = (8));

} else {
var statearr_13399_13459 = state_13387__$1;
(statearr_13399_13459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (15))){
var inst_13332 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13332)){
var statearr_13400_13460 = state_13387__$1;
(statearr_13400_13460[(1)] = (19));

} else {
var statearr_13401_13461 = state_13387__$1;
(statearr_13401_13461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (21))){
var inst_13337 = (state_13387[(12)]);
var inst_13337__$1 = (state_13387[(2)]);
var inst_13338 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13339 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13340 = cljs.core.get.call(null,inst_13337__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13387__$1 = (function (){var statearr_13402 = state_13387;
(statearr_13402[(12)] = inst_13337__$1);

(statearr_13402[(9)] = inst_13338);

(statearr_13402[(13)] = inst_13339);

return statearr_13402;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13387__$1,(22),inst_13340);
} else {
if((state_val_13388 === (31))){
var inst_13369 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13369)){
var statearr_13403_13462 = state_13387__$1;
(statearr_13403_13462[(1)] = (32));

} else {
var statearr_13404_13463 = state_13387__$1;
(statearr_13404_13463[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (32))){
var inst_13346 = (state_13387[(14)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(35),out,inst_13346);
} else {
if((state_val_13388 === (33))){
var inst_13337 = (state_13387[(12)]);
var inst_13314 = inst_13337;
var state_13387__$1 = (function (){var statearr_13405 = state_13387;
(statearr_13405[(7)] = inst_13314);

return statearr_13405;
})();
var statearr_13406_13464 = state_13387__$1;
(statearr_13406_13464[(2)] = null);

(statearr_13406_13464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (13))){
var inst_13314 = (state_13387[(7)]);
var inst_13321 = inst_13314.cljs$lang$protocol_mask$partition0$;
var inst_13322 = (inst_13321 & (64));
var inst_13323 = inst_13314.cljs$core$ISeq$;
var inst_13324 = (cljs.core.PROTOCOL_SENTINEL === inst_13323);
var inst_13325 = (inst_13322) || (inst_13324);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13325)){
var statearr_13407_13465 = state_13387__$1;
(statearr_13407_13465[(1)] = (16));

} else {
var statearr_13408_13466 = state_13387__$1;
(statearr_13408_13466[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (22))){
var inst_13346 = (state_13387[(14)]);
var inst_13347 = (state_13387[(11)]);
var inst_13345 = (state_13387[(2)]);
var inst_13346__$1 = cljs.core.nth.call(null,inst_13345,(0),null);
var inst_13347__$1 = cljs.core.nth.call(null,inst_13345,(1),null);
var inst_13348 = (inst_13346__$1 == null);
var inst_13349 = cljs.core._EQ_.call(null,inst_13347__$1,change);
var inst_13350 = (inst_13348) || (inst_13349);
var state_13387__$1 = (function (){var statearr_13409 = state_13387;
(statearr_13409[(14)] = inst_13346__$1);

(statearr_13409[(11)] = inst_13347__$1);

return statearr_13409;
})();
if(cljs.core.truth_(inst_13350)){
var statearr_13410_13467 = state_13387__$1;
(statearr_13410_13467[(1)] = (23));

} else {
var statearr_13411_13468 = state_13387__$1;
(statearr_13411_13468[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (36))){
var inst_13337 = (state_13387[(12)]);
var inst_13314 = inst_13337;
var state_13387__$1 = (function (){var statearr_13412 = state_13387;
(statearr_13412[(7)] = inst_13314);

return statearr_13412;
})();
var statearr_13413_13469 = state_13387__$1;
(statearr_13413_13469[(2)] = null);

(statearr_13413_13469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (29))){
var inst_13361 = (state_13387[(10)]);
var state_13387__$1 = state_13387;
var statearr_13414_13470 = state_13387__$1;
(statearr_13414_13470[(2)] = inst_13361);

(statearr_13414_13470[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (6))){
var state_13387__$1 = state_13387;
var statearr_13415_13471 = state_13387__$1;
(statearr_13415_13471[(2)] = false);

(statearr_13415_13471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (28))){
var inst_13357 = (state_13387[(2)]);
var inst_13358 = calc_state.call(null);
var inst_13314 = inst_13358;
var state_13387__$1 = (function (){var statearr_13416 = state_13387;
(statearr_13416[(7)] = inst_13314);

(statearr_13416[(15)] = inst_13357);

return statearr_13416;
})();
var statearr_13417_13472 = state_13387__$1;
(statearr_13417_13472[(2)] = null);

(statearr_13417_13472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (25))){
var inst_13383 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13418_13473 = state_13387__$1;
(statearr_13418_13473[(2)] = inst_13383);

(statearr_13418_13473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (34))){
var inst_13381 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13419_13474 = state_13387__$1;
(statearr_13419_13474[(2)] = inst_13381);

(statearr_13419_13474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (17))){
var state_13387__$1 = state_13387;
var statearr_13420_13475 = state_13387__$1;
(statearr_13420_13475[(2)] = false);

(statearr_13420_13475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (3))){
var state_13387__$1 = state_13387;
var statearr_13421_13476 = state_13387__$1;
(statearr_13421_13476[(2)] = false);

(statearr_13421_13476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (12))){
var inst_13385 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13387__$1,inst_13385);
} else {
if((state_val_13388 === (2))){
var inst_13289 = (state_13387[(8)]);
var inst_13294 = inst_13289.cljs$lang$protocol_mask$partition0$;
var inst_13295 = (inst_13294 & (64));
var inst_13296 = inst_13289.cljs$core$ISeq$;
var inst_13297 = (cljs.core.PROTOCOL_SENTINEL === inst_13296);
var inst_13298 = (inst_13295) || (inst_13297);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13298)){
var statearr_13422_13477 = state_13387__$1;
(statearr_13422_13477[(1)] = (5));

} else {
var statearr_13423_13478 = state_13387__$1;
(statearr_13423_13478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (23))){
var inst_13346 = (state_13387[(14)]);
var inst_13352 = (inst_13346 == null);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13352)){
var statearr_13424_13479 = state_13387__$1;
(statearr_13424_13479[(1)] = (26));

} else {
var statearr_13425_13480 = state_13387__$1;
(statearr_13425_13480[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (35))){
var inst_13372 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13372)){
var statearr_13426_13481 = state_13387__$1;
(statearr_13426_13481[(1)] = (36));

} else {
var statearr_13427_13482 = state_13387__$1;
(statearr_13427_13482[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (19))){
var inst_13314 = (state_13387[(7)]);
var inst_13334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13314);
var state_13387__$1 = state_13387;
var statearr_13428_13483 = state_13387__$1;
(statearr_13428_13483[(2)] = inst_13334);

(statearr_13428_13483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (11))){
var inst_13314 = (state_13387[(7)]);
var inst_13318 = (inst_13314 == null);
var inst_13319 = cljs.core.not.call(null,inst_13318);
var state_13387__$1 = state_13387;
if(inst_13319){
var statearr_13429_13484 = state_13387__$1;
(statearr_13429_13484[(1)] = (13));

} else {
var statearr_13430_13485 = state_13387__$1;
(statearr_13430_13485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (9))){
var inst_13289 = (state_13387[(8)]);
var state_13387__$1 = state_13387;
var statearr_13431_13486 = state_13387__$1;
(statearr_13431_13486[(2)] = inst_13289);

(statearr_13431_13486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (5))){
var state_13387__$1 = state_13387;
var statearr_13432_13487 = state_13387__$1;
(statearr_13432_13487[(2)] = true);

(statearr_13432_13487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (14))){
var state_13387__$1 = state_13387;
var statearr_13433_13488 = state_13387__$1;
(statearr_13433_13488[(2)] = false);

(statearr_13433_13488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (26))){
var inst_13347 = (state_13387[(11)]);
var inst_13354 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13347);
var state_13387__$1 = state_13387;
var statearr_13434_13489 = state_13387__$1;
(statearr_13434_13489[(2)] = inst_13354);

(statearr_13434_13489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (16))){
var state_13387__$1 = state_13387;
var statearr_13435_13490 = state_13387__$1;
(statearr_13435_13490[(2)] = true);

(statearr_13435_13490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (38))){
var inst_13377 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13436_13491 = state_13387__$1;
(statearr_13436_13491[(2)] = inst_13377);

(statearr_13436_13491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (30))){
var inst_13338 = (state_13387[(9)]);
var inst_13339 = (state_13387[(13)]);
var inst_13347 = (state_13387[(11)]);
var inst_13364 = cljs.core.empty_QMARK_.call(null,inst_13338);
var inst_13365 = inst_13339.call(null,inst_13347);
var inst_13366 = cljs.core.not.call(null,inst_13365);
var inst_13367 = (inst_13364) && (inst_13366);
var state_13387__$1 = state_13387;
var statearr_13437_13492 = state_13387__$1;
(statearr_13437_13492[(2)] = inst_13367);

(statearr_13437_13492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (10))){
var inst_13289 = (state_13387[(8)]);
var inst_13310 = (state_13387[(2)]);
var inst_13311 = cljs.core.get.call(null,inst_13310,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13312 = cljs.core.get.call(null,inst_13310,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13313 = cljs.core.get.call(null,inst_13310,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13314 = inst_13289;
var state_13387__$1 = (function (){var statearr_13438 = state_13387;
(statearr_13438[(16)] = inst_13312);

(statearr_13438[(17)] = inst_13311);

(statearr_13438[(18)] = inst_13313);

(statearr_13438[(7)] = inst_13314);

return statearr_13438;
})();
var statearr_13439_13493 = state_13387__$1;
(statearr_13439_13493[(2)] = null);

(statearr_13439_13493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (18))){
var inst_13329 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13440_13494 = state_13387__$1;
(statearr_13440_13494[(2)] = inst_13329);

(statearr_13440_13494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (37))){
var state_13387__$1 = state_13387;
var statearr_13441_13495 = state_13387__$1;
(statearr_13441_13495[(2)] = null);

(statearr_13441_13495[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (8))){
var inst_13289 = (state_13387[(8)]);
var inst_13307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13289);
var state_13387__$1 = state_13387;
var statearr_13442_13496 = state_13387__$1;
(statearr_13442_13496[(2)] = inst_13307);

(statearr_13442_13496[(1)] = (10));


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
});})(c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11571__auto__,c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11572__auto__ = null;
var cljs$core$async$mix_$_state_machine__11572__auto____0 = (function (){
var statearr_13446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13446[(0)] = cljs$core$async$mix_$_state_machine__11572__auto__);

(statearr_13446[(1)] = (1));

return statearr_13446;
});
var cljs$core$async$mix_$_state_machine__11572__auto____1 = (function (state_13387){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13447){if((e13447 instanceof Object)){
var ex__11575__auto__ = e13447;
var statearr_13448_13497 = state_13387;
(statearr_13448_13497[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13498 = state_13387;
state_13387 = G__13498;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11572__auto__ = function(state_13387){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11572__auto____1.call(this,state_13387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11572__auto____0;
cljs$core$async$mix_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11572__auto____1;
return cljs$core$async$mix_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11685__auto__ = (function (){var statearr_13449 = f__11684__auto__.call(null);
(statearr_13449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13450);

return statearr_13449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13450,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args13499 = [];
var len__8057__auto___13502 = arguments.length;
var i__8058__auto___13503 = (0);
while(true){
if((i__8058__auto___13503 < len__8057__auto___13502)){
args13499.push((arguments[i__8058__auto___13503]));

var G__13504 = (i__8058__auto___13503 + (1));
i__8058__auto___13503 = G__13504;
continue;
} else {
}
break;
}

var G__13501 = args13499.length;
switch (G__13501) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13499.length)].join('')));

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
var args13507 = [];
var len__8057__auto___13632 = arguments.length;
var i__8058__auto___13633 = (0);
while(true){
if((i__8058__auto___13633 < len__8057__auto___13632)){
args13507.push((arguments[i__8058__auto___13633]));

var G__13634 = (i__8058__auto___13633 + (1));
i__8058__auto___13633 = G__13634;
continue;
} else {
}
break;
}

var G__13509 = args13507.length;
switch (G__13509) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13507.length)].join('')));

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
return (function (p1__13506_SHARP_){
if(cljs.core.truth_(p1__13506_SHARP_.call(null,topic))){
return p1__13506_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13506_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6948__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13510 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13511){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13511 = meta13511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13512,meta13511__$1){
var self__ = this;
var _13512__$1 = this;
return (new cljs.core.async.t_cljs$core$async13510(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13511__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13512){
var self__ = this;
var _13512__$1 = this;
return self__.meta13511;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13511","meta13511",1766199254,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13510";

cljs.core.async.t_cljs$core$async13510.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13510");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13510 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13511){
return (new cljs.core.async.t_cljs$core$async13510(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13511));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13510(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11683__auto___13636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13636,mults,ensure_mult,p){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13636,mults,ensure_mult,p){
return (function (state_13584){
var state_val_13585 = (state_13584[(1)]);
if((state_val_13585 === (7))){
var inst_13580 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13586_13637 = state_13584__$1;
(statearr_13586_13637[(2)] = inst_13580);

(statearr_13586_13637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (20))){
var state_13584__$1 = state_13584;
var statearr_13587_13638 = state_13584__$1;
(statearr_13587_13638[(2)] = null);

(statearr_13587_13638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (1))){
var state_13584__$1 = state_13584;
var statearr_13588_13639 = state_13584__$1;
(statearr_13588_13639[(2)] = null);

(statearr_13588_13639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (24))){
var inst_13563 = (state_13584[(7)]);
var inst_13572 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13563);
var state_13584__$1 = state_13584;
var statearr_13589_13640 = state_13584__$1;
(statearr_13589_13640[(2)] = inst_13572);

(statearr_13589_13640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (4))){
var inst_13515 = (state_13584[(8)]);
var inst_13515__$1 = (state_13584[(2)]);
var inst_13516 = (inst_13515__$1 == null);
var state_13584__$1 = (function (){var statearr_13590 = state_13584;
(statearr_13590[(8)] = inst_13515__$1);

return statearr_13590;
})();
if(cljs.core.truth_(inst_13516)){
var statearr_13591_13641 = state_13584__$1;
(statearr_13591_13641[(1)] = (5));

} else {
var statearr_13592_13642 = state_13584__$1;
(statearr_13592_13642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (15))){
var inst_13557 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13593_13643 = state_13584__$1;
(statearr_13593_13643[(2)] = inst_13557);

(statearr_13593_13643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (21))){
var inst_13577 = (state_13584[(2)]);
var state_13584__$1 = (function (){var statearr_13594 = state_13584;
(statearr_13594[(9)] = inst_13577);

return statearr_13594;
})();
var statearr_13595_13644 = state_13584__$1;
(statearr_13595_13644[(2)] = null);

(statearr_13595_13644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (13))){
var inst_13539 = (state_13584[(10)]);
var inst_13541 = cljs.core.chunked_seq_QMARK_.call(null,inst_13539);
var state_13584__$1 = state_13584;
if(inst_13541){
var statearr_13596_13645 = state_13584__$1;
(statearr_13596_13645[(1)] = (16));

} else {
var statearr_13597_13646 = state_13584__$1;
(statearr_13597_13646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (22))){
var inst_13569 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13569)){
var statearr_13598_13647 = state_13584__$1;
(statearr_13598_13647[(1)] = (23));

} else {
var statearr_13599_13648 = state_13584__$1;
(statearr_13599_13648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (6))){
var inst_13515 = (state_13584[(8)]);
var inst_13563 = (state_13584[(7)]);
var inst_13565 = (state_13584[(11)]);
var inst_13563__$1 = topic_fn.call(null,inst_13515);
var inst_13564 = cljs.core.deref.call(null,mults);
var inst_13565__$1 = cljs.core.get.call(null,inst_13564,inst_13563__$1);
var state_13584__$1 = (function (){var statearr_13600 = state_13584;
(statearr_13600[(7)] = inst_13563__$1);

(statearr_13600[(11)] = inst_13565__$1);

return statearr_13600;
})();
if(cljs.core.truth_(inst_13565__$1)){
var statearr_13601_13649 = state_13584__$1;
(statearr_13601_13649[(1)] = (19));

} else {
var statearr_13602_13650 = state_13584__$1;
(statearr_13602_13650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (25))){
var inst_13574 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13603_13651 = state_13584__$1;
(statearr_13603_13651[(2)] = inst_13574);

(statearr_13603_13651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (17))){
var inst_13539 = (state_13584[(10)]);
var inst_13548 = cljs.core.first.call(null,inst_13539);
var inst_13549 = cljs.core.async.muxch_STAR_.call(null,inst_13548);
var inst_13550 = cljs.core.async.close_BANG_.call(null,inst_13549);
var inst_13551 = cljs.core.next.call(null,inst_13539);
var inst_13525 = inst_13551;
var inst_13526 = null;
var inst_13527 = (0);
var inst_13528 = (0);
var state_13584__$1 = (function (){var statearr_13604 = state_13584;
(statearr_13604[(12)] = inst_13550);

(statearr_13604[(13)] = inst_13527);

(statearr_13604[(14)] = inst_13525);

(statearr_13604[(15)] = inst_13528);

(statearr_13604[(16)] = inst_13526);

return statearr_13604;
})();
var statearr_13605_13652 = state_13584__$1;
(statearr_13605_13652[(2)] = null);

(statearr_13605_13652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (3))){
var inst_13582 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13584__$1,inst_13582);
} else {
if((state_val_13585 === (12))){
var inst_13559 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13606_13653 = state_13584__$1;
(statearr_13606_13653[(2)] = inst_13559);

(statearr_13606_13653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (2))){
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13584__$1,(4),ch);
} else {
if((state_val_13585 === (23))){
var state_13584__$1 = state_13584;
var statearr_13607_13654 = state_13584__$1;
(statearr_13607_13654[(2)] = null);

(statearr_13607_13654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (19))){
var inst_13515 = (state_13584[(8)]);
var inst_13565 = (state_13584[(11)]);
var inst_13567 = cljs.core.async.muxch_STAR_.call(null,inst_13565);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(22),inst_13567,inst_13515);
} else {
if((state_val_13585 === (11))){
var inst_13525 = (state_13584[(14)]);
var inst_13539 = (state_13584[(10)]);
var inst_13539__$1 = cljs.core.seq.call(null,inst_13525);
var state_13584__$1 = (function (){var statearr_13608 = state_13584;
(statearr_13608[(10)] = inst_13539__$1);

return statearr_13608;
})();
if(inst_13539__$1){
var statearr_13609_13655 = state_13584__$1;
(statearr_13609_13655[(1)] = (13));

} else {
var statearr_13610_13656 = state_13584__$1;
(statearr_13610_13656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var inst_13561 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13611_13657 = state_13584__$1;
(statearr_13611_13657[(2)] = inst_13561);

(statearr_13611_13657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var inst_13522 = cljs.core.deref.call(null,mults);
var inst_13523 = cljs.core.vals.call(null,inst_13522);
var inst_13524 = cljs.core.seq.call(null,inst_13523);
var inst_13525 = inst_13524;
var inst_13526 = null;
var inst_13527 = (0);
var inst_13528 = (0);
var state_13584__$1 = (function (){var statearr_13612 = state_13584;
(statearr_13612[(13)] = inst_13527);

(statearr_13612[(14)] = inst_13525);

(statearr_13612[(15)] = inst_13528);

(statearr_13612[(16)] = inst_13526);

return statearr_13612;
})();
var statearr_13613_13658 = state_13584__$1;
(statearr_13613_13658[(2)] = null);

(statearr_13613_13658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (14))){
var state_13584__$1 = state_13584;
var statearr_13617_13659 = state_13584__$1;
(statearr_13617_13659[(2)] = null);

(statearr_13617_13659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (16))){
var inst_13539 = (state_13584[(10)]);
var inst_13543 = cljs.core.chunk_first.call(null,inst_13539);
var inst_13544 = cljs.core.chunk_rest.call(null,inst_13539);
var inst_13545 = cljs.core.count.call(null,inst_13543);
var inst_13525 = inst_13544;
var inst_13526 = inst_13543;
var inst_13527 = inst_13545;
var inst_13528 = (0);
var state_13584__$1 = (function (){var statearr_13618 = state_13584;
(statearr_13618[(13)] = inst_13527);

(statearr_13618[(14)] = inst_13525);

(statearr_13618[(15)] = inst_13528);

(statearr_13618[(16)] = inst_13526);

return statearr_13618;
})();
var statearr_13619_13660 = state_13584__$1;
(statearr_13619_13660[(2)] = null);

(statearr_13619_13660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13527 = (state_13584[(13)]);
var inst_13525 = (state_13584[(14)]);
var inst_13528 = (state_13584[(15)]);
var inst_13526 = (state_13584[(16)]);
var inst_13533 = cljs.core._nth.call(null,inst_13526,inst_13528);
var inst_13534 = cljs.core.async.muxch_STAR_.call(null,inst_13533);
var inst_13535 = cljs.core.async.close_BANG_.call(null,inst_13534);
var inst_13536 = (inst_13528 + (1));
var tmp13614 = inst_13527;
var tmp13615 = inst_13525;
var tmp13616 = inst_13526;
var inst_13525__$1 = tmp13615;
var inst_13526__$1 = tmp13616;
var inst_13527__$1 = tmp13614;
var inst_13528__$1 = inst_13536;
var state_13584__$1 = (function (){var statearr_13620 = state_13584;
(statearr_13620[(17)] = inst_13535);

(statearr_13620[(13)] = inst_13527__$1);

(statearr_13620[(14)] = inst_13525__$1);

(statearr_13620[(15)] = inst_13528__$1);

(statearr_13620[(16)] = inst_13526__$1);

return statearr_13620;
})();
var statearr_13621_13661 = state_13584__$1;
(statearr_13621_13661[(2)] = null);

(statearr_13621_13661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (18))){
var inst_13554 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13622_13662 = state_13584__$1;
(statearr_13622_13662[(2)] = inst_13554);

(statearr_13622_13662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (8))){
var inst_13527 = (state_13584[(13)]);
var inst_13528 = (state_13584[(15)]);
var inst_13530 = (inst_13528 < inst_13527);
var inst_13531 = inst_13530;
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13531)){
var statearr_13623_13663 = state_13584__$1;
(statearr_13623_13663[(1)] = (10));

} else {
var statearr_13624_13664 = state_13584__$1;
(statearr_13624_13664[(1)] = (11));

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
});})(c__11683__auto___13636,mults,ensure_mult,p))
;
return ((function (switch__11571__auto__,c__11683__auto___13636,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_13628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13628[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_13628[(1)] = (1));

return statearr_13628;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_13584){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13629){if((e13629 instanceof Object)){
var ex__11575__auto__ = e13629;
var statearr_13630_13665 = state_13584;
(statearr_13630_13665[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13666 = state_13584;
state_13584 = G__13666;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_13584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_13584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13636,mults,ensure_mult,p))
})();
var state__11685__auto__ = (function (){var statearr_13631 = f__11684__auto__.call(null);
(statearr_13631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13636);

return statearr_13631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13636,mults,ensure_mult,p))
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
var args13667 = [];
var len__8057__auto___13670 = arguments.length;
var i__8058__auto___13671 = (0);
while(true){
if((i__8058__auto___13671 < len__8057__auto___13670)){
args13667.push((arguments[i__8058__auto___13671]));

var G__13672 = (i__8058__auto___13671 + (1));
i__8058__auto___13671 = G__13672;
continue;
} else {
}
break;
}

var G__13669 = args13667.length;
switch (G__13669) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13667.length)].join('')));

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
var args13674 = [];
var len__8057__auto___13677 = arguments.length;
var i__8058__auto___13678 = (0);
while(true){
if((i__8058__auto___13678 < len__8057__auto___13677)){
args13674.push((arguments[i__8058__auto___13678]));

var G__13679 = (i__8058__auto___13678 + (1));
i__8058__auto___13678 = G__13679;
continue;
} else {
}
break;
}

var G__13676 = args13674.length;
switch (G__13676) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13674.length)].join('')));

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
var args13681 = [];
var len__8057__auto___13752 = arguments.length;
var i__8058__auto___13753 = (0);
while(true){
if((i__8058__auto___13753 < len__8057__auto___13752)){
args13681.push((arguments[i__8058__auto___13753]));

var G__13754 = (i__8058__auto___13753 + (1));
i__8058__auto___13753 = G__13754;
continue;
} else {
}
break;
}

var G__13683 = args13681.length;
switch (G__13683) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13681.length)].join('')));

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
var c__11683__auto___13756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13722){
var state_val_13723 = (state_13722[(1)]);
if((state_val_13723 === (7))){
var state_13722__$1 = state_13722;
var statearr_13724_13757 = state_13722__$1;
(statearr_13724_13757[(2)] = null);

(statearr_13724_13757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (1))){
var state_13722__$1 = state_13722;
var statearr_13725_13758 = state_13722__$1;
(statearr_13725_13758[(2)] = null);

(statearr_13725_13758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (4))){
var inst_13686 = (state_13722[(7)]);
var inst_13688 = (inst_13686 < cnt);
var state_13722__$1 = state_13722;
if(cljs.core.truth_(inst_13688)){
var statearr_13726_13759 = state_13722__$1;
(statearr_13726_13759[(1)] = (6));

} else {
var statearr_13727_13760 = state_13722__$1;
(statearr_13727_13760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (15))){
var inst_13718 = (state_13722[(2)]);
var state_13722__$1 = state_13722;
var statearr_13728_13761 = state_13722__$1;
(statearr_13728_13761[(2)] = inst_13718);

(statearr_13728_13761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (13))){
var inst_13711 = cljs.core.async.close_BANG_.call(null,out);
var state_13722__$1 = state_13722;
var statearr_13729_13762 = state_13722__$1;
(statearr_13729_13762[(2)] = inst_13711);

(statearr_13729_13762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (6))){
var state_13722__$1 = state_13722;
var statearr_13730_13763 = state_13722__$1;
(statearr_13730_13763[(2)] = null);

(statearr_13730_13763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (3))){
var inst_13720 = (state_13722[(2)]);
var state_13722__$1 = state_13722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13722__$1,inst_13720);
} else {
if((state_val_13723 === (12))){
var inst_13708 = (state_13722[(8)]);
var inst_13708__$1 = (state_13722[(2)]);
var inst_13709 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13708__$1);
var state_13722__$1 = (function (){var statearr_13731 = state_13722;
(statearr_13731[(8)] = inst_13708__$1);

return statearr_13731;
})();
if(cljs.core.truth_(inst_13709)){
var statearr_13732_13764 = state_13722__$1;
(statearr_13732_13764[(1)] = (13));

} else {
var statearr_13733_13765 = state_13722__$1;
(statearr_13733_13765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (2))){
var inst_13685 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13686 = (0);
var state_13722__$1 = (function (){var statearr_13734 = state_13722;
(statearr_13734[(7)] = inst_13686);

(statearr_13734[(9)] = inst_13685);

return statearr_13734;
})();
var statearr_13735_13766 = state_13722__$1;
(statearr_13735_13766[(2)] = null);

(statearr_13735_13766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (11))){
var inst_13686 = (state_13722[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13722,(10),Object,null,(9));
var inst_13695 = chs__$1.call(null,inst_13686);
var inst_13696 = done.call(null,inst_13686);
var inst_13697 = cljs.core.async.take_BANG_.call(null,inst_13695,inst_13696);
var state_13722__$1 = state_13722;
var statearr_13736_13767 = state_13722__$1;
(statearr_13736_13767[(2)] = inst_13697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (9))){
var inst_13686 = (state_13722[(7)]);
var inst_13699 = (state_13722[(2)]);
var inst_13700 = (inst_13686 + (1));
var inst_13686__$1 = inst_13700;
var state_13722__$1 = (function (){var statearr_13737 = state_13722;
(statearr_13737[(10)] = inst_13699);

(statearr_13737[(7)] = inst_13686__$1);

return statearr_13737;
})();
var statearr_13738_13768 = state_13722__$1;
(statearr_13738_13768[(2)] = null);

(statearr_13738_13768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (5))){
var inst_13706 = (state_13722[(2)]);
var state_13722__$1 = (function (){var statearr_13739 = state_13722;
(statearr_13739[(11)] = inst_13706);

return statearr_13739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13722__$1,(12),dchan);
} else {
if((state_val_13723 === (14))){
var inst_13708 = (state_13722[(8)]);
var inst_13713 = cljs.core.apply.call(null,f,inst_13708);
var state_13722__$1 = state_13722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13722__$1,(16),out,inst_13713);
} else {
if((state_val_13723 === (16))){
var inst_13715 = (state_13722[(2)]);
var state_13722__$1 = (function (){var statearr_13740 = state_13722;
(statearr_13740[(12)] = inst_13715);

return statearr_13740;
})();
var statearr_13741_13769 = state_13722__$1;
(statearr_13741_13769[(2)] = null);

(statearr_13741_13769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (10))){
var inst_13690 = (state_13722[(2)]);
var inst_13691 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13722__$1 = (function (){var statearr_13742 = state_13722;
(statearr_13742[(13)] = inst_13690);

return statearr_13742;
})();
var statearr_13743_13770 = state_13722__$1;
(statearr_13743_13770[(2)] = inst_13691);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (8))){
var inst_13704 = (state_13722[(2)]);
var state_13722__$1 = state_13722;
var statearr_13744_13771 = state_13722__$1;
(statearr_13744_13771[(2)] = inst_13704);

(statearr_13744_13771[(1)] = (5));


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
});})(c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11571__auto__,c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_13748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13748[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_13748[(1)] = (1));

return statearr_13748;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_13722){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13749){if((e13749 instanceof Object)){
var ex__11575__auto__ = e13749;
var statearr_13750_13772 = state_13722;
(statearr_13750_13772[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13773 = state_13722;
state_13722 = G__13773;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_13722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_13722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11685__auto__ = (function (){var statearr_13751 = f__11684__auto__.call(null);
(statearr_13751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13756);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13756,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13775 = [];
var len__8057__auto___13833 = arguments.length;
var i__8058__auto___13834 = (0);
while(true){
if((i__8058__auto___13834 < len__8057__auto___13833)){
args13775.push((arguments[i__8058__auto___13834]));

var G__13835 = (i__8058__auto___13834 + (1));
i__8058__auto___13834 = G__13835;
continue;
} else {
}
break;
}

var G__13777 = args13775.length;
switch (G__13777) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13775.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___13837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13837,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13837,out){
return (function (state_13809){
var state_val_13810 = (state_13809[(1)]);
if((state_val_13810 === (7))){
var inst_13789 = (state_13809[(7)]);
var inst_13788 = (state_13809[(8)]);
var inst_13788__$1 = (state_13809[(2)]);
var inst_13789__$1 = cljs.core.nth.call(null,inst_13788__$1,(0),null);
var inst_13790 = cljs.core.nth.call(null,inst_13788__$1,(1),null);
var inst_13791 = (inst_13789__$1 == null);
var state_13809__$1 = (function (){var statearr_13811 = state_13809;
(statearr_13811[(7)] = inst_13789__$1);

(statearr_13811[(9)] = inst_13790);

(statearr_13811[(8)] = inst_13788__$1);

return statearr_13811;
})();
if(cljs.core.truth_(inst_13791)){
var statearr_13812_13838 = state_13809__$1;
(statearr_13812_13838[(1)] = (8));

} else {
var statearr_13813_13839 = state_13809__$1;
(statearr_13813_13839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (1))){
var inst_13778 = cljs.core.vec.call(null,chs);
var inst_13779 = inst_13778;
var state_13809__$1 = (function (){var statearr_13814 = state_13809;
(statearr_13814[(10)] = inst_13779);

return statearr_13814;
})();
var statearr_13815_13840 = state_13809__$1;
(statearr_13815_13840[(2)] = null);

(statearr_13815_13840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (4))){
var inst_13779 = (state_13809[(10)]);
var state_13809__$1 = state_13809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13809__$1,(7),inst_13779);
} else {
if((state_val_13810 === (6))){
var inst_13805 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13816_13841 = state_13809__$1;
(statearr_13816_13841[(2)] = inst_13805);

(statearr_13816_13841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (3))){
var inst_13807 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13809__$1,inst_13807);
} else {
if((state_val_13810 === (2))){
var inst_13779 = (state_13809[(10)]);
var inst_13781 = cljs.core.count.call(null,inst_13779);
var inst_13782 = (inst_13781 > (0));
var state_13809__$1 = state_13809;
if(cljs.core.truth_(inst_13782)){
var statearr_13818_13842 = state_13809__$1;
(statearr_13818_13842[(1)] = (4));

} else {
var statearr_13819_13843 = state_13809__$1;
(statearr_13819_13843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (11))){
var inst_13779 = (state_13809[(10)]);
var inst_13798 = (state_13809[(2)]);
var tmp13817 = inst_13779;
var inst_13779__$1 = tmp13817;
var state_13809__$1 = (function (){var statearr_13820 = state_13809;
(statearr_13820[(11)] = inst_13798);

(statearr_13820[(10)] = inst_13779__$1);

return statearr_13820;
})();
var statearr_13821_13844 = state_13809__$1;
(statearr_13821_13844[(2)] = null);

(statearr_13821_13844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (9))){
var inst_13789 = (state_13809[(7)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,(11),out,inst_13789);
} else {
if((state_val_13810 === (5))){
var inst_13803 = cljs.core.async.close_BANG_.call(null,out);
var state_13809__$1 = state_13809;
var statearr_13822_13845 = state_13809__$1;
(statearr_13822_13845[(2)] = inst_13803);

(statearr_13822_13845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (10))){
var inst_13801 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13823_13846 = state_13809__$1;
(statearr_13823_13846[(2)] = inst_13801);

(statearr_13823_13846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (8))){
var inst_13789 = (state_13809[(7)]);
var inst_13779 = (state_13809[(10)]);
var inst_13790 = (state_13809[(9)]);
var inst_13788 = (state_13809[(8)]);
var inst_13793 = (function (){var cs = inst_13779;
var vec__13784 = inst_13788;
var v = inst_13789;
var c = inst_13790;
return ((function (cs,vec__13784,v,c,inst_13789,inst_13779,inst_13790,inst_13788,state_val_13810,c__11683__auto___13837,out){
return (function (p1__13774_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13774_SHARP_);
});
;})(cs,vec__13784,v,c,inst_13789,inst_13779,inst_13790,inst_13788,state_val_13810,c__11683__auto___13837,out))
})();
var inst_13794 = cljs.core.filterv.call(null,inst_13793,inst_13779);
var inst_13779__$1 = inst_13794;
var state_13809__$1 = (function (){var statearr_13824 = state_13809;
(statearr_13824[(10)] = inst_13779__$1);

return statearr_13824;
})();
var statearr_13825_13847 = state_13809__$1;
(statearr_13825_13847[(2)] = null);

(statearr_13825_13847[(1)] = (2));


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
});})(c__11683__auto___13837,out))
;
return ((function (switch__11571__auto__,c__11683__auto___13837,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_13829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13829[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_13829[(1)] = (1));

return statearr_13829;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_13809){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13830){if((e13830 instanceof Object)){
var ex__11575__auto__ = e13830;
var statearr_13831_13848 = state_13809;
(statearr_13831_13848[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13849 = state_13809;
state_13809 = G__13849;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13837,out))
})();
var state__11685__auto__ = (function (){var statearr_13832 = f__11684__auto__.call(null);
(statearr_13832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13837);

return statearr_13832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13837,out))
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
var args13850 = [];
var len__8057__auto___13899 = arguments.length;
var i__8058__auto___13900 = (0);
while(true){
if((i__8058__auto___13900 < len__8057__auto___13899)){
args13850.push((arguments[i__8058__auto___13900]));

var G__13901 = (i__8058__auto___13900 + (1));
i__8058__auto___13900 = G__13901;
continue;
} else {
}
break;
}

var G__13852 = args13850.length;
switch (G__13852) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13850.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___13903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13903,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13903,out){
return (function (state_13876){
var state_val_13877 = (state_13876[(1)]);
if((state_val_13877 === (7))){
var inst_13858 = (state_13876[(7)]);
var inst_13858__$1 = (state_13876[(2)]);
var inst_13859 = (inst_13858__$1 == null);
var inst_13860 = cljs.core.not.call(null,inst_13859);
var state_13876__$1 = (function (){var statearr_13878 = state_13876;
(statearr_13878[(7)] = inst_13858__$1);

return statearr_13878;
})();
if(inst_13860){
var statearr_13879_13904 = state_13876__$1;
(statearr_13879_13904[(1)] = (8));

} else {
var statearr_13880_13905 = state_13876__$1;
(statearr_13880_13905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (1))){
var inst_13853 = (0);
var state_13876__$1 = (function (){var statearr_13881 = state_13876;
(statearr_13881[(8)] = inst_13853);

return statearr_13881;
})();
var statearr_13882_13906 = state_13876__$1;
(statearr_13882_13906[(2)] = null);

(statearr_13882_13906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (4))){
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13876__$1,(7),ch);
} else {
if((state_val_13877 === (6))){
var inst_13871 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13883_13907 = state_13876__$1;
(statearr_13883_13907[(2)] = inst_13871);

(statearr_13883_13907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (3))){
var inst_13873 = (state_13876[(2)]);
var inst_13874 = cljs.core.async.close_BANG_.call(null,out);
var state_13876__$1 = (function (){var statearr_13884 = state_13876;
(statearr_13884[(9)] = inst_13873);

return statearr_13884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13876__$1,inst_13874);
} else {
if((state_val_13877 === (2))){
var inst_13853 = (state_13876[(8)]);
var inst_13855 = (inst_13853 < n);
var state_13876__$1 = state_13876;
if(cljs.core.truth_(inst_13855)){
var statearr_13885_13908 = state_13876__$1;
(statearr_13885_13908[(1)] = (4));

} else {
var statearr_13886_13909 = state_13876__$1;
(statearr_13886_13909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (11))){
var inst_13853 = (state_13876[(8)]);
var inst_13863 = (state_13876[(2)]);
var inst_13864 = (inst_13853 + (1));
var inst_13853__$1 = inst_13864;
var state_13876__$1 = (function (){var statearr_13887 = state_13876;
(statearr_13887[(8)] = inst_13853__$1);

(statearr_13887[(10)] = inst_13863);

return statearr_13887;
})();
var statearr_13888_13910 = state_13876__$1;
(statearr_13888_13910[(2)] = null);

(statearr_13888_13910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (9))){
var state_13876__$1 = state_13876;
var statearr_13889_13911 = state_13876__$1;
(statearr_13889_13911[(2)] = null);

(statearr_13889_13911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (5))){
var state_13876__$1 = state_13876;
var statearr_13890_13912 = state_13876__$1;
(statearr_13890_13912[(2)] = null);

(statearr_13890_13912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (10))){
var inst_13868 = (state_13876[(2)]);
var state_13876__$1 = state_13876;
var statearr_13891_13913 = state_13876__$1;
(statearr_13891_13913[(2)] = inst_13868);

(statearr_13891_13913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13877 === (8))){
var inst_13858 = (state_13876[(7)]);
var state_13876__$1 = state_13876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13876__$1,(11),out,inst_13858);
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
});})(c__11683__auto___13903,out))
;
return ((function (switch__11571__auto__,c__11683__auto___13903,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_13895 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13895[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_13895[(1)] = (1));

return statearr_13895;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_13876){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13896){if((e13896 instanceof Object)){
var ex__11575__auto__ = e13896;
var statearr_13897_13914 = state_13876;
(statearr_13897_13914[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13915 = state_13876;
state_13876 = G__13915;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_13876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_13876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13903,out))
})();
var state__11685__auto__ = (function (){var statearr_13898 = f__11684__auto__.call(null);
(statearr_13898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13903);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13903,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13923 = (function (f,ch,meta13924){
this.f = f;
this.ch = ch;
this.meta13924 = meta13924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13925,meta13924__$1){
var self__ = this;
var _13925__$1 = this;
return (new cljs.core.async.t_cljs$core$async13923(self__.f,self__.ch,meta13924__$1));
});

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13925){
var self__ = this;
var _13925__$1 = this;
return self__.meta13924;
});

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13926 = (function (f,ch,meta13924,_,fn1,meta13927){
this.f = f;
this.ch = ch;
this.meta13924 = meta13924;
this._ = _;
this.fn1 = fn1;
this.meta13927 = meta13927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13928,meta13927__$1){
var self__ = this;
var _13928__$1 = this;
return (new cljs.core.async.t_cljs$core$async13926(self__.f,self__.ch,self__.meta13924,self__._,self__.fn1,meta13927__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13928){
var self__ = this;
var _13928__$1 = this;
return self__.meta13927;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13916_SHARP_){
return f1.call(null,(((p1__13916_SHARP_ == null))?null:self__.f.call(null,p1__13916_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13924","meta13924",-1110922113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13923","cljs.core.async/t_cljs$core$async13923",-326838659,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13927","meta13927",100327155,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13926";

cljs.core.async.t_cljs$core$async13926.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13926");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13926 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13926(f__$1,ch__$1,meta13924__$1,___$2,fn1__$1,meta13927){
return (new cljs.core.async.t_cljs$core$async13926(f__$1,ch__$1,meta13924__$1,___$2,fn1__$1,meta13927));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13926(self__.f,self__.ch,self__.meta13924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13924","meta13924",-1110922113,null)], null);
});

cljs.core.async.t_cljs$core$async13923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13923";

cljs.core.async.t_cljs$core$async13923.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13923");
});

cljs.core.async.__GT_t_cljs$core$async13923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13923(f__$1,ch__$1,meta13924){
return (new cljs.core.async.t_cljs$core$async13923(f__$1,ch__$1,meta13924));
});

}

return (new cljs.core.async.t_cljs$core$async13923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13932 = (function (f,ch,meta13933){
this.f = f;
this.ch = ch;
this.meta13933 = meta13933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13934,meta13933__$1){
var self__ = this;
var _13934__$1 = this;
return (new cljs.core.async.t_cljs$core$async13932(self__.f,self__.ch,meta13933__$1));
});

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13934){
var self__ = this;
var _13934__$1 = this;
return self__.meta13933;
});

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13933","meta13933",736865779,null)], null);
});

cljs.core.async.t_cljs$core$async13932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13932";

cljs.core.async.t_cljs$core$async13932.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13932");
});

cljs.core.async.__GT_t_cljs$core$async13932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13932(f__$1,ch__$1,meta13933){
return (new cljs.core.async.t_cljs$core$async13932(f__$1,ch__$1,meta13933));
});

}

return (new cljs.core.async.t_cljs$core$async13932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13938 = (function (p,ch,meta13939){
this.p = p;
this.ch = ch;
this.meta13939 = meta13939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13940,meta13939__$1){
var self__ = this;
var _13940__$1 = this;
return (new cljs.core.async.t_cljs$core$async13938(self__.p,self__.ch,meta13939__$1));
});

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13940){
var self__ = this;
var _13940__$1 = this;
return self__.meta13939;
});

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13939","meta13939",-440554263,null)], null);
});

cljs.core.async.t_cljs$core$async13938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13938";

cljs.core.async.t_cljs$core$async13938.cljs$lang$ctorPrWriter = (function (this__7559__auto__,writer__7560__auto__,opt__7561__auto__){
return cljs.core._write.call(null,writer__7560__auto__,"cljs.core.async/t_cljs$core$async13938");
});

cljs.core.async.__GT_t_cljs$core$async13938 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13938(p__$1,ch__$1,meta13939){
return (new cljs.core.async.t_cljs$core$async13938(p__$1,ch__$1,meta13939));
});

}

return (new cljs.core.async.t_cljs$core$async13938(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13941 = [];
var len__8057__auto___13985 = arguments.length;
var i__8058__auto___13986 = (0);
while(true){
if((i__8058__auto___13986 < len__8057__auto___13985)){
args13941.push((arguments[i__8058__auto___13986]));

var G__13987 = (i__8058__auto___13986 + (1));
i__8058__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var G__13943 = args13941.length;
switch (G__13943) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13941.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___13989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___13989,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___13989,out){
return (function (state_13964){
var state_val_13965 = (state_13964[(1)]);
if((state_val_13965 === (7))){
var inst_13960 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
var statearr_13966_13990 = state_13964__$1;
(statearr_13966_13990[(2)] = inst_13960);

(statearr_13966_13990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (1))){
var state_13964__$1 = state_13964;
var statearr_13967_13991 = state_13964__$1;
(statearr_13967_13991[(2)] = null);

(statearr_13967_13991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (4))){
var inst_13946 = (state_13964[(7)]);
var inst_13946__$1 = (state_13964[(2)]);
var inst_13947 = (inst_13946__$1 == null);
var state_13964__$1 = (function (){var statearr_13968 = state_13964;
(statearr_13968[(7)] = inst_13946__$1);

return statearr_13968;
})();
if(cljs.core.truth_(inst_13947)){
var statearr_13969_13992 = state_13964__$1;
(statearr_13969_13992[(1)] = (5));

} else {
var statearr_13970_13993 = state_13964__$1;
(statearr_13970_13993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (6))){
var inst_13946 = (state_13964[(7)]);
var inst_13951 = p.call(null,inst_13946);
var state_13964__$1 = state_13964;
if(cljs.core.truth_(inst_13951)){
var statearr_13971_13994 = state_13964__$1;
(statearr_13971_13994[(1)] = (8));

} else {
var statearr_13972_13995 = state_13964__$1;
(statearr_13972_13995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (3))){
var inst_13962 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13964__$1,inst_13962);
} else {
if((state_val_13965 === (2))){
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13964__$1,(4),ch);
} else {
if((state_val_13965 === (11))){
var inst_13954 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
var statearr_13973_13996 = state_13964__$1;
(statearr_13973_13996[(2)] = inst_13954);

(statearr_13973_13996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (9))){
var state_13964__$1 = state_13964;
var statearr_13974_13997 = state_13964__$1;
(statearr_13974_13997[(2)] = null);

(statearr_13974_13997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (5))){
var inst_13949 = cljs.core.async.close_BANG_.call(null,out);
var state_13964__$1 = state_13964;
var statearr_13975_13998 = state_13964__$1;
(statearr_13975_13998[(2)] = inst_13949);

(statearr_13975_13998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (10))){
var inst_13957 = (state_13964[(2)]);
var state_13964__$1 = (function (){var statearr_13976 = state_13964;
(statearr_13976[(8)] = inst_13957);

return statearr_13976;
})();
var statearr_13977_13999 = state_13964__$1;
(statearr_13977_13999[(2)] = null);

(statearr_13977_13999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (8))){
var inst_13946 = (state_13964[(7)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13964__$1,(11),out,inst_13946);
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
});})(c__11683__auto___13989,out))
;
return ((function (switch__11571__auto__,c__11683__auto___13989,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_13981 = [null,null,null,null,null,null,null,null,null];
(statearr_13981[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_13981[(1)] = (1));

return statearr_13981;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_13964){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_13964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e13982){if((e13982 instanceof Object)){
var ex__11575__auto__ = e13982;
var statearr_13983_14000 = state_13964;
(statearr_13983_14000[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14001 = state_13964;
state_13964 = G__14001;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_13964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_13964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___13989,out))
})();
var state__11685__auto__ = (function (){var statearr_13984 = f__11684__auto__.call(null);
(statearr_13984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___13989);

return statearr_13984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___13989,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14002 = [];
var len__8057__auto___14005 = arguments.length;
var i__8058__auto___14006 = (0);
while(true){
if((i__8058__auto___14006 < len__8057__auto___14005)){
args14002.push((arguments[i__8058__auto___14006]));

var G__14007 = (i__8058__auto___14006 + (1));
i__8058__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var G__14004 = args14002.length;
switch (G__14004) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14002.length)].join('')));

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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_14174){
var state_val_14175 = (state_14174[(1)]);
if((state_val_14175 === (7))){
var inst_14170 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14176_14217 = state_14174__$1;
(statearr_14176_14217[(2)] = inst_14170);

(statearr_14176_14217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (20))){
var inst_14140 = (state_14174[(7)]);
var inst_14151 = (state_14174[(2)]);
var inst_14152 = cljs.core.next.call(null,inst_14140);
var inst_14126 = inst_14152;
var inst_14127 = null;
var inst_14128 = (0);
var inst_14129 = (0);
var state_14174__$1 = (function (){var statearr_14177 = state_14174;
(statearr_14177[(8)] = inst_14129);

(statearr_14177[(9)] = inst_14126);

(statearr_14177[(10)] = inst_14151);

(statearr_14177[(11)] = inst_14127);

(statearr_14177[(12)] = inst_14128);

return statearr_14177;
})();
var statearr_14178_14218 = state_14174__$1;
(statearr_14178_14218[(2)] = null);

(statearr_14178_14218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (1))){
var state_14174__$1 = state_14174;
var statearr_14179_14219 = state_14174__$1;
(statearr_14179_14219[(2)] = null);

(statearr_14179_14219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (4))){
var inst_14115 = (state_14174[(13)]);
var inst_14115__$1 = (state_14174[(2)]);
var inst_14116 = (inst_14115__$1 == null);
var state_14174__$1 = (function (){var statearr_14180 = state_14174;
(statearr_14180[(13)] = inst_14115__$1);

return statearr_14180;
})();
if(cljs.core.truth_(inst_14116)){
var statearr_14181_14220 = state_14174__$1;
(statearr_14181_14220[(1)] = (5));

} else {
var statearr_14182_14221 = state_14174__$1;
(statearr_14182_14221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (15))){
var state_14174__$1 = state_14174;
var statearr_14186_14222 = state_14174__$1;
(statearr_14186_14222[(2)] = null);

(statearr_14186_14222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (21))){
var state_14174__$1 = state_14174;
var statearr_14187_14223 = state_14174__$1;
(statearr_14187_14223[(2)] = null);

(statearr_14187_14223[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (13))){
var inst_14129 = (state_14174[(8)]);
var inst_14126 = (state_14174[(9)]);
var inst_14127 = (state_14174[(11)]);
var inst_14128 = (state_14174[(12)]);
var inst_14136 = (state_14174[(2)]);
var inst_14137 = (inst_14129 + (1));
var tmp14183 = inst_14126;
var tmp14184 = inst_14127;
var tmp14185 = inst_14128;
var inst_14126__$1 = tmp14183;
var inst_14127__$1 = tmp14184;
var inst_14128__$1 = tmp14185;
var inst_14129__$1 = inst_14137;
var state_14174__$1 = (function (){var statearr_14188 = state_14174;
(statearr_14188[(8)] = inst_14129__$1);

(statearr_14188[(9)] = inst_14126__$1);

(statearr_14188[(11)] = inst_14127__$1);

(statearr_14188[(12)] = inst_14128__$1);

(statearr_14188[(14)] = inst_14136);

return statearr_14188;
})();
var statearr_14189_14224 = state_14174__$1;
(statearr_14189_14224[(2)] = null);

(statearr_14189_14224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (22))){
var state_14174__$1 = state_14174;
var statearr_14190_14225 = state_14174__$1;
(statearr_14190_14225[(2)] = null);

(statearr_14190_14225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (6))){
var inst_14115 = (state_14174[(13)]);
var inst_14124 = f.call(null,inst_14115);
var inst_14125 = cljs.core.seq.call(null,inst_14124);
var inst_14126 = inst_14125;
var inst_14127 = null;
var inst_14128 = (0);
var inst_14129 = (0);
var state_14174__$1 = (function (){var statearr_14191 = state_14174;
(statearr_14191[(8)] = inst_14129);

(statearr_14191[(9)] = inst_14126);

(statearr_14191[(11)] = inst_14127);

(statearr_14191[(12)] = inst_14128);

return statearr_14191;
})();
var statearr_14192_14226 = state_14174__$1;
(statearr_14192_14226[(2)] = null);

(statearr_14192_14226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (17))){
var inst_14140 = (state_14174[(7)]);
var inst_14144 = cljs.core.chunk_first.call(null,inst_14140);
var inst_14145 = cljs.core.chunk_rest.call(null,inst_14140);
var inst_14146 = cljs.core.count.call(null,inst_14144);
var inst_14126 = inst_14145;
var inst_14127 = inst_14144;
var inst_14128 = inst_14146;
var inst_14129 = (0);
var state_14174__$1 = (function (){var statearr_14193 = state_14174;
(statearr_14193[(8)] = inst_14129);

(statearr_14193[(9)] = inst_14126);

(statearr_14193[(11)] = inst_14127);

(statearr_14193[(12)] = inst_14128);

return statearr_14193;
})();
var statearr_14194_14227 = state_14174__$1;
(statearr_14194_14227[(2)] = null);

(statearr_14194_14227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (3))){
var inst_14172 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14174__$1,inst_14172);
} else {
if((state_val_14175 === (12))){
var inst_14160 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14195_14228 = state_14174__$1;
(statearr_14195_14228[(2)] = inst_14160);

(statearr_14195_14228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (2))){
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14174__$1,(4),in$);
} else {
if((state_val_14175 === (23))){
var inst_14168 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14196_14229 = state_14174__$1;
(statearr_14196_14229[(2)] = inst_14168);

(statearr_14196_14229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (19))){
var inst_14155 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14197_14230 = state_14174__$1;
(statearr_14197_14230[(2)] = inst_14155);

(statearr_14197_14230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (11))){
var inst_14126 = (state_14174[(9)]);
var inst_14140 = (state_14174[(7)]);
var inst_14140__$1 = cljs.core.seq.call(null,inst_14126);
var state_14174__$1 = (function (){var statearr_14198 = state_14174;
(statearr_14198[(7)] = inst_14140__$1);

return statearr_14198;
})();
if(inst_14140__$1){
var statearr_14199_14231 = state_14174__$1;
(statearr_14199_14231[(1)] = (14));

} else {
var statearr_14200_14232 = state_14174__$1;
(statearr_14200_14232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (9))){
var inst_14162 = (state_14174[(2)]);
var inst_14163 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14174__$1 = (function (){var statearr_14201 = state_14174;
(statearr_14201[(15)] = inst_14162);

return statearr_14201;
})();
if(cljs.core.truth_(inst_14163)){
var statearr_14202_14233 = state_14174__$1;
(statearr_14202_14233[(1)] = (21));

} else {
var statearr_14203_14234 = state_14174__$1;
(statearr_14203_14234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (5))){
var inst_14118 = cljs.core.async.close_BANG_.call(null,out);
var state_14174__$1 = state_14174;
var statearr_14204_14235 = state_14174__$1;
(statearr_14204_14235[(2)] = inst_14118);

(statearr_14204_14235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (14))){
var inst_14140 = (state_14174[(7)]);
var inst_14142 = cljs.core.chunked_seq_QMARK_.call(null,inst_14140);
var state_14174__$1 = state_14174;
if(inst_14142){
var statearr_14205_14236 = state_14174__$1;
(statearr_14205_14236[(1)] = (17));

} else {
var statearr_14206_14237 = state_14174__$1;
(statearr_14206_14237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (16))){
var inst_14158 = (state_14174[(2)]);
var state_14174__$1 = state_14174;
var statearr_14207_14238 = state_14174__$1;
(statearr_14207_14238[(2)] = inst_14158);

(statearr_14207_14238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14175 === (10))){
var inst_14129 = (state_14174[(8)]);
var inst_14127 = (state_14174[(11)]);
var inst_14134 = cljs.core._nth.call(null,inst_14127,inst_14129);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14174__$1,(13),out,inst_14134);
} else {
if((state_val_14175 === (18))){
var inst_14140 = (state_14174[(7)]);
var inst_14149 = cljs.core.first.call(null,inst_14140);
var state_14174__$1 = state_14174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14174__$1,(20),out,inst_14149);
} else {
if((state_val_14175 === (8))){
var inst_14129 = (state_14174[(8)]);
var inst_14128 = (state_14174[(12)]);
var inst_14131 = (inst_14129 < inst_14128);
var inst_14132 = inst_14131;
var state_14174__$1 = state_14174;
if(cljs.core.truth_(inst_14132)){
var statearr_14208_14239 = state_14174__$1;
(statearr_14208_14239[(1)] = (10));

} else {
var statearr_14209_14240 = state_14174__$1;
(statearr_14209_14240[(1)] = (11));

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
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____0 = (function (){
var statearr_14213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__);

(statearr_14213[(1)] = (1));

return statearr_14213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____1 = (function (state_14174){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14214){if((e14214 instanceof Object)){
var ex__11575__auto__ = e14214;
var statearr_14215_14241 = state_14174;
(statearr_14215_14241[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14242 = state_14174;
state_14174 = G__14242;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__ = function(state_14174){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____1.call(this,state_14174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11572__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_14216 = f__11684__auto__.call(null);
(statearr_14216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_14216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14243 = [];
var len__8057__auto___14246 = arguments.length;
var i__8058__auto___14247 = (0);
while(true){
if((i__8058__auto___14247 < len__8057__auto___14246)){
args14243.push((arguments[i__8058__auto___14247]));

var G__14248 = (i__8058__auto___14247 + (1));
i__8058__auto___14247 = G__14248;
continue;
} else {
}
break;
}

var G__14245 = args14243.length;
switch (G__14245) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14243.length)].join('')));

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
var args14250 = [];
var len__8057__auto___14253 = arguments.length;
var i__8058__auto___14254 = (0);
while(true){
if((i__8058__auto___14254 < len__8057__auto___14253)){
args14250.push((arguments[i__8058__auto___14254]));

var G__14255 = (i__8058__auto___14254 + (1));
i__8058__auto___14254 = G__14255;
continue;
} else {
}
break;
}

var G__14252 = args14250.length;
switch (G__14252) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14250.length)].join('')));

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
var args14257 = [];
var len__8057__auto___14308 = arguments.length;
var i__8058__auto___14309 = (0);
while(true){
if((i__8058__auto___14309 < len__8057__auto___14308)){
args14257.push((arguments[i__8058__auto___14309]));

var G__14310 = (i__8058__auto___14309 + (1));
i__8058__auto___14309 = G__14310;
continue;
} else {
}
break;
}

var G__14259 = args14257.length;
switch (G__14259) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14257.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___14312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___14312,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___14312,out){
return (function (state_14283){
var state_val_14284 = (state_14283[(1)]);
if((state_val_14284 === (7))){
var inst_14278 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14285_14313 = state_14283__$1;
(statearr_14285_14313[(2)] = inst_14278);

(statearr_14285_14313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (1))){
var inst_14260 = null;
var state_14283__$1 = (function (){var statearr_14286 = state_14283;
(statearr_14286[(7)] = inst_14260);

return statearr_14286;
})();
var statearr_14287_14314 = state_14283__$1;
(statearr_14287_14314[(2)] = null);

(statearr_14287_14314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (4))){
var inst_14263 = (state_14283[(8)]);
var inst_14263__$1 = (state_14283[(2)]);
var inst_14264 = (inst_14263__$1 == null);
var inst_14265 = cljs.core.not.call(null,inst_14264);
var state_14283__$1 = (function (){var statearr_14288 = state_14283;
(statearr_14288[(8)] = inst_14263__$1);

return statearr_14288;
})();
if(inst_14265){
var statearr_14289_14315 = state_14283__$1;
(statearr_14289_14315[(1)] = (5));

} else {
var statearr_14290_14316 = state_14283__$1;
(statearr_14290_14316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (6))){
var state_14283__$1 = state_14283;
var statearr_14291_14317 = state_14283__$1;
(statearr_14291_14317[(2)] = null);

(statearr_14291_14317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (3))){
var inst_14280 = (state_14283[(2)]);
var inst_14281 = cljs.core.async.close_BANG_.call(null,out);
var state_14283__$1 = (function (){var statearr_14292 = state_14283;
(statearr_14292[(9)] = inst_14280);

return statearr_14292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14283__$1,inst_14281);
} else {
if((state_val_14284 === (2))){
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14283__$1,(4),ch);
} else {
if((state_val_14284 === (11))){
var inst_14263 = (state_14283[(8)]);
var inst_14272 = (state_14283[(2)]);
var inst_14260 = inst_14263;
var state_14283__$1 = (function (){var statearr_14293 = state_14283;
(statearr_14293[(10)] = inst_14272);

(statearr_14293[(7)] = inst_14260);

return statearr_14293;
})();
var statearr_14294_14318 = state_14283__$1;
(statearr_14294_14318[(2)] = null);

(statearr_14294_14318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (9))){
var inst_14263 = (state_14283[(8)]);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(11),out,inst_14263);
} else {
if((state_val_14284 === (5))){
var inst_14260 = (state_14283[(7)]);
var inst_14263 = (state_14283[(8)]);
var inst_14267 = cljs.core._EQ_.call(null,inst_14263,inst_14260);
var state_14283__$1 = state_14283;
if(inst_14267){
var statearr_14296_14319 = state_14283__$1;
(statearr_14296_14319[(1)] = (8));

} else {
var statearr_14297_14320 = state_14283__$1;
(statearr_14297_14320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (10))){
var inst_14275 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14298_14321 = state_14283__$1;
(statearr_14298_14321[(2)] = inst_14275);

(statearr_14298_14321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (8))){
var inst_14260 = (state_14283[(7)]);
var tmp14295 = inst_14260;
var inst_14260__$1 = tmp14295;
var state_14283__$1 = (function (){var statearr_14299 = state_14283;
(statearr_14299[(7)] = inst_14260__$1);

return statearr_14299;
})();
var statearr_14300_14322 = state_14283__$1;
(statearr_14300_14322[(2)] = null);

(statearr_14300_14322[(1)] = (2));


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
});})(c__11683__auto___14312,out))
;
return ((function (switch__11571__auto__,c__11683__auto___14312,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_14304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14304[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_14304[(1)] = (1));

return statearr_14304;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_14283){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14305){if((e14305 instanceof Object)){
var ex__11575__auto__ = e14305;
var statearr_14306_14323 = state_14283;
(statearr_14306_14323[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14324 = state_14283;
state_14283 = G__14324;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___14312,out))
})();
var state__11685__auto__ = (function (){var statearr_14307 = f__11684__auto__.call(null);
(statearr_14307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___14312);

return statearr_14307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___14312,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14325 = [];
var len__8057__auto___14395 = arguments.length;
var i__8058__auto___14396 = (0);
while(true){
if((i__8058__auto___14396 < len__8057__auto___14395)){
args14325.push((arguments[i__8058__auto___14396]));

var G__14397 = (i__8058__auto___14396 + (1));
i__8058__auto___14396 = G__14397;
continue;
} else {
}
break;
}

var G__14327 = args14325.length;
switch (G__14327) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14325.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___14399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___14399,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___14399,out){
return (function (state_14365){
var state_val_14366 = (state_14365[(1)]);
if((state_val_14366 === (7))){
var inst_14361 = (state_14365[(2)]);
var state_14365__$1 = state_14365;
var statearr_14367_14400 = state_14365__$1;
(statearr_14367_14400[(2)] = inst_14361);

(statearr_14367_14400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (1))){
var inst_14328 = (new Array(n));
var inst_14329 = inst_14328;
var inst_14330 = (0);
var state_14365__$1 = (function (){var statearr_14368 = state_14365;
(statearr_14368[(7)] = inst_14330);

(statearr_14368[(8)] = inst_14329);

return statearr_14368;
})();
var statearr_14369_14401 = state_14365__$1;
(statearr_14369_14401[(2)] = null);

(statearr_14369_14401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (4))){
var inst_14333 = (state_14365[(9)]);
var inst_14333__$1 = (state_14365[(2)]);
var inst_14334 = (inst_14333__$1 == null);
var inst_14335 = cljs.core.not.call(null,inst_14334);
var state_14365__$1 = (function (){var statearr_14370 = state_14365;
(statearr_14370[(9)] = inst_14333__$1);

return statearr_14370;
})();
if(inst_14335){
var statearr_14371_14402 = state_14365__$1;
(statearr_14371_14402[(1)] = (5));

} else {
var statearr_14372_14403 = state_14365__$1;
(statearr_14372_14403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (15))){
var inst_14355 = (state_14365[(2)]);
var state_14365__$1 = state_14365;
var statearr_14373_14404 = state_14365__$1;
(statearr_14373_14404[(2)] = inst_14355);

(statearr_14373_14404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (13))){
var state_14365__$1 = state_14365;
var statearr_14374_14405 = state_14365__$1;
(statearr_14374_14405[(2)] = null);

(statearr_14374_14405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (6))){
var inst_14330 = (state_14365[(7)]);
var inst_14351 = (inst_14330 > (0));
var state_14365__$1 = state_14365;
if(cljs.core.truth_(inst_14351)){
var statearr_14375_14406 = state_14365__$1;
(statearr_14375_14406[(1)] = (12));

} else {
var statearr_14376_14407 = state_14365__$1;
(statearr_14376_14407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (3))){
var inst_14363 = (state_14365[(2)]);
var state_14365__$1 = state_14365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14365__$1,inst_14363);
} else {
if((state_val_14366 === (12))){
var inst_14329 = (state_14365[(8)]);
var inst_14353 = cljs.core.vec.call(null,inst_14329);
var state_14365__$1 = state_14365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14365__$1,(15),out,inst_14353);
} else {
if((state_val_14366 === (2))){
var state_14365__$1 = state_14365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14365__$1,(4),ch);
} else {
if((state_val_14366 === (11))){
var inst_14345 = (state_14365[(2)]);
var inst_14346 = (new Array(n));
var inst_14329 = inst_14346;
var inst_14330 = (0);
var state_14365__$1 = (function (){var statearr_14377 = state_14365;
(statearr_14377[(7)] = inst_14330);

(statearr_14377[(10)] = inst_14345);

(statearr_14377[(8)] = inst_14329);

return statearr_14377;
})();
var statearr_14378_14408 = state_14365__$1;
(statearr_14378_14408[(2)] = null);

(statearr_14378_14408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (9))){
var inst_14329 = (state_14365[(8)]);
var inst_14343 = cljs.core.vec.call(null,inst_14329);
var state_14365__$1 = state_14365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14365__$1,(11),out,inst_14343);
} else {
if((state_val_14366 === (5))){
var inst_14333 = (state_14365[(9)]);
var inst_14330 = (state_14365[(7)]);
var inst_14338 = (state_14365[(11)]);
var inst_14329 = (state_14365[(8)]);
var inst_14337 = (inst_14329[inst_14330] = inst_14333);
var inst_14338__$1 = (inst_14330 + (1));
var inst_14339 = (inst_14338__$1 < n);
var state_14365__$1 = (function (){var statearr_14379 = state_14365;
(statearr_14379[(12)] = inst_14337);

(statearr_14379[(11)] = inst_14338__$1);

return statearr_14379;
})();
if(cljs.core.truth_(inst_14339)){
var statearr_14380_14409 = state_14365__$1;
(statearr_14380_14409[(1)] = (8));

} else {
var statearr_14381_14410 = state_14365__$1;
(statearr_14381_14410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (14))){
var inst_14358 = (state_14365[(2)]);
var inst_14359 = cljs.core.async.close_BANG_.call(null,out);
var state_14365__$1 = (function (){var statearr_14383 = state_14365;
(statearr_14383[(13)] = inst_14358);

return statearr_14383;
})();
var statearr_14384_14411 = state_14365__$1;
(statearr_14384_14411[(2)] = inst_14359);

(statearr_14384_14411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (10))){
var inst_14349 = (state_14365[(2)]);
var state_14365__$1 = state_14365;
var statearr_14385_14412 = state_14365__$1;
(statearr_14385_14412[(2)] = inst_14349);

(statearr_14385_14412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14366 === (8))){
var inst_14338 = (state_14365[(11)]);
var inst_14329 = (state_14365[(8)]);
var tmp14382 = inst_14329;
var inst_14329__$1 = tmp14382;
var inst_14330 = inst_14338;
var state_14365__$1 = (function (){var statearr_14386 = state_14365;
(statearr_14386[(7)] = inst_14330);

(statearr_14386[(8)] = inst_14329__$1);

return statearr_14386;
})();
var statearr_14387_14413 = state_14365__$1;
(statearr_14387_14413[(2)] = null);

(statearr_14387_14413[(1)] = (2));


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
});})(c__11683__auto___14399,out))
;
return ((function (switch__11571__auto__,c__11683__auto___14399,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_14391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14391[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_14391[(1)] = (1));

return statearr_14391;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_14365){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14392){if((e14392 instanceof Object)){
var ex__11575__auto__ = e14392;
var statearr_14393_14414 = state_14365;
(statearr_14393_14414[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14415 = state_14365;
state_14365 = G__14415;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_14365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_14365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___14399,out))
})();
var state__11685__auto__ = (function (){var statearr_14394 = f__11684__auto__.call(null);
(statearr_14394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___14399);

return statearr_14394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___14399,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14416 = [];
var len__8057__auto___14490 = arguments.length;
var i__8058__auto___14491 = (0);
while(true){
if((i__8058__auto___14491 < len__8057__auto___14490)){
args14416.push((arguments[i__8058__auto___14491]));

var G__14492 = (i__8058__auto___14491 + (1));
i__8058__auto___14491 = G__14492;
continue;
} else {
}
break;
}

var G__14418 = args14416.length;
switch (G__14418) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14416.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11683__auto___14494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___14494,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___14494,out){
return (function (state_14460){
var state_val_14461 = (state_14460[(1)]);
if((state_val_14461 === (7))){
var inst_14456 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
var statearr_14462_14495 = state_14460__$1;
(statearr_14462_14495[(2)] = inst_14456);

(statearr_14462_14495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (1))){
var inst_14419 = [];
var inst_14420 = inst_14419;
var inst_14421 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14460__$1 = (function (){var statearr_14463 = state_14460;
(statearr_14463[(7)] = inst_14420);

(statearr_14463[(8)] = inst_14421);

return statearr_14463;
})();
var statearr_14464_14496 = state_14460__$1;
(statearr_14464_14496[(2)] = null);

(statearr_14464_14496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (4))){
var inst_14424 = (state_14460[(9)]);
var inst_14424__$1 = (state_14460[(2)]);
var inst_14425 = (inst_14424__$1 == null);
var inst_14426 = cljs.core.not.call(null,inst_14425);
var state_14460__$1 = (function (){var statearr_14465 = state_14460;
(statearr_14465[(9)] = inst_14424__$1);

return statearr_14465;
})();
if(inst_14426){
var statearr_14466_14497 = state_14460__$1;
(statearr_14466_14497[(1)] = (5));

} else {
var statearr_14467_14498 = state_14460__$1;
(statearr_14467_14498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (15))){
var inst_14450 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
var statearr_14468_14499 = state_14460__$1;
(statearr_14468_14499[(2)] = inst_14450);

(statearr_14468_14499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (13))){
var state_14460__$1 = state_14460;
var statearr_14469_14500 = state_14460__$1;
(statearr_14469_14500[(2)] = null);

(statearr_14469_14500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (6))){
var inst_14420 = (state_14460[(7)]);
var inst_14445 = inst_14420.length;
var inst_14446 = (inst_14445 > (0));
var state_14460__$1 = state_14460;
if(cljs.core.truth_(inst_14446)){
var statearr_14470_14501 = state_14460__$1;
(statearr_14470_14501[(1)] = (12));

} else {
var statearr_14471_14502 = state_14460__$1;
(statearr_14471_14502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (3))){
var inst_14458 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14460__$1,inst_14458);
} else {
if((state_val_14461 === (12))){
var inst_14420 = (state_14460[(7)]);
var inst_14448 = cljs.core.vec.call(null,inst_14420);
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14460__$1,(15),out,inst_14448);
} else {
if((state_val_14461 === (2))){
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14460__$1,(4),ch);
} else {
if((state_val_14461 === (11))){
var inst_14424 = (state_14460[(9)]);
var inst_14428 = (state_14460[(10)]);
var inst_14438 = (state_14460[(2)]);
var inst_14439 = [];
var inst_14440 = inst_14439.push(inst_14424);
var inst_14420 = inst_14439;
var inst_14421 = inst_14428;
var state_14460__$1 = (function (){var statearr_14472 = state_14460;
(statearr_14472[(7)] = inst_14420);

(statearr_14472[(8)] = inst_14421);

(statearr_14472[(11)] = inst_14440);

(statearr_14472[(12)] = inst_14438);

return statearr_14472;
})();
var statearr_14473_14503 = state_14460__$1;
(statearr_14473_14503[(2)] = null);

(statearr_14473_14503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (9))){
var inst_14420 = (state_14460[(7)]);
var inst_14436 = cljs.core.vec.call(null,inst_14420);
var state_14460__$1 = state_14460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14460__$1,(11),out,inst_14436);
} else {
if((state_val_14461 === (5))){
var inst_14424 = (state_14460[(9)]);
var inst_14421 = (state_14460[(8)]);
var inst_14428 = (state_14460[(10)]);
var inst_14428__$1 = f.call(null,inst_14424);
var inst_14429 = cljs.core._EQ_.call(null,inst_14428__$1,inst_14421);
var inst_14430 = cljs.core.keyword_identical_QMARK_.call(null,inst_14421,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14431 = (inst_14429) || (inst_14430);
var state_14460__$1 = (function (){var statearr_14474 = state_14460;
(statearr_14474[(10)] = inst_14428__$1);

return statearr_14474;
})();
if(cljs.core.truth_(inst_14431)){
var statearr_14475_14504 = state_14460__$1;
(statearr_14475_14504[(1)] = (8));

} else {
var statearr_14476_14505 = state_14460__$1;
(statearr_14476_14505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (14))){
var inst_14453 = (state_14460[(2)]);
var inst_14454 = cljs.core.async.close_BANG_.call(null,out);
var state_14460__$1 = (function (){var statearr_14478 = state_14460;
(statearr_14478[(13)] = inst_14453);

return statearr_14478;
})();
var statearr_14479_14506 = state_14460__$1;
(statearr_14479_14506[(2)] = inst_14454);

(statearr_14479_14506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (10))){
var inst_14443 = (state_14460[(2)]);
var state_14460__$1 = state_14460;
var statearr_14480_14507 = state_14460__$1;
(statearr_14480_14507[(2)] = inst_14443);

(statearr_14480_14507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14461 === (8))){
var inst_14420 = (state_14460[(7)]);
var inst_14424 = (state_14460[(9)]);
var inst_14428 = (state_14460[(10)]);
var inst_14433 = inst_14420.push(inst_14424);
var tmp14477 = inst_14420;
var inst_14420__$1 = tmp14477;
var inst_14421 = inst_14428;
var state_14460__$1 = (function (){var statearr_14481 = state_14460;
(statearr_14481[(7)] = inst_14420__$1);

(statearr_14481[(8)] = inst_14421);

(statearr_14481[(14)] = inst_14433);

return statearr_14481;
})();
var statearr_14482_14508 = state_14460__$1;
(statearr_14482_14508[(2)] = null);

(statearr_14482_14508[(1)] = (2));


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
});})(c__11683__auto___14494,out))
;
return ((function (switch__11571__auto__,c__11683__auto___14494,out){
return (function() {
var cljs$core$async$state_machine__11572__auto__ = null;
var cljs$core$async$state_machine__11572__auto____0 = (function (){
var statearr_14486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14486[(0)] = cljs$core$async$state_machine__11572__auto__);

(statearr_14486[(1)] = (1));

return statearr_14486;
});
var cljs$core$async$state_machine__11572__auto____1 = (function (state_14460){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14487){if((e14487 instanceof Object)){
var ex__11575__auto__ = e14487;
var statearr_14488_14509 = state_14460;
(statearr_14488_14509[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14510 = state_14460;
state_14460 = G__14510;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
cljs$core$async$state_machine__11572__auto__ = function(state_14460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11572__auto____1.call(this,state_14460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11572__auto____0;
cljs$core$async$state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11572__auto____1;
return cljs$core$async$state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___14494,out))
})();
var state__11685__auto__ = (function (){var statearr_14489 = f__11684__auto__.call(null);
(statearr_14489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___14494);

return statearr_14489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___14494,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map