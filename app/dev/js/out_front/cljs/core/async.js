// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50849 = arguments.length;
switch (G__50849) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async50850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50850 = (function (f,blockable,meta50851){
this.f = f;
this.blockable = blockable;
this.meta50851 = meta50851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50852,meta50851__$1){
var self__ = this;
var _50852__$1 = this;
return (new cljs.core.async.t_cljs$core$async50850(self__.f,self__.blockable,meta50851__$1));
});

cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50852){
var self__ = this;
var _50852__$1 = this;
return self__.meta50851;
});

cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50851","meta50851",1712201783,null)], null);
});

cljs.core.async.t_cljs$core$async50850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50850";

cljs.core.async.t_cljs$core$async50850.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async50850");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50850.
 */
cljs.core.async.__GT_t_cljs$core$async50850 = (function cljs$core$async$__GT_t_cljs$core$async50850(f__$1,blockable__$1,meta50851){
return (new cljs.core.async.t_cljs$core$async50850(f__$1,blockable__$1,meta50851));
});

}

return (new cljs.core.async.t_cljs$core$async50850(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50856 = arguments.length;
switch (G__50856) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__50859 = arguments.length;
switch (G__50859) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__50862 = arguments.length;
switch (G__50862) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50864 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50864);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50864,ret){
return (function (){
return fn1.call(null,val_50864);
});})(val_50864,ret))
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
var G__50866 = arguments.length;
switch (G__50866) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var n__47683__auto___50868 = n;
var x_50869 = (0);
while(true){
if((x_50869 < n__47683__auto___50868)){
(a[x_50869] = (0));

var G__50870 = (x_50869 + (1));
x_50869 = G__50870;
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

var G__50871 = (i + (1));
i = G__50871;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50872 = (function (flag,meta50873){
this.flag = flag;
this.meta50873 = meta50873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50874,meta50873__$1){
var self__ = this;
var _50874__$1 = this;
return (new cljs.core.async.t_cljs$core$async50872(self__.flag,meta50873__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50874){
var self__ = this;
var _50874__$1 = this;
return self__.meta50873;
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50873","meta50873",1006006098,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50872";

cljs.core.async.t_cljs$core$async50872.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async50872");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50872.
 */
cljs.core.async.__GT_t_cljs$core$async50872 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50872(flag__$1,meta50873){
return (new cljs.core.async.t_cljs$core$async50872(flag__$1,meta50873));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50872(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50875 = (function (flag,cb,meta50876){
this.flag = flag;
this.cb = cb;
this.meta50876 = meta50876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50877,meta50876__$1){
var self__ = this;
var _50877__$1 = this;
return (new cljs.core.async.t_cljs$core$async50875(self__.flag,self__.cb,meta50876__$1));
});

cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50877){
var self__ = this;
var _50877__$1 = this;
return self__.meta50876;
});

cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50876","meta50876",-1132966590,null)], null);
});

cljs.core.async.t_cljs$core$async50875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50875";

cljs.core.async.t_cljs$core$async50875.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async50875");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50875.
 */
cljs.core.async.__GT_t_cljs$core$async50875 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50875(flag__$1,cb__$1,meta50876){
return (new cljs.core.async.t_cljs$core$async50875(flag__$1,cb__$1,meta50876));
});

}

return (new cljs.core.async.t_cljs$core$async50875(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50878_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50878_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50879_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50879_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__46739__auto__ = wport;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50880 = (i + (1));
i = G__50880;
continue;
}
} else {
return null;
}
break;
}
})();
var or__46739__auto__ = ret;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__46727__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__46727__auto__;
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
var args__47908__auto__ = [];
var len__47901__auto___50886 = arguments.length;
var i__47902__auto___50887 = (0);
while(true){
if((i__47902__auto___50887 < len__47901__auto___50886)){
args__47908__auto__.push((arguments[i__47902__auto___50887]));

var G__50888 = (i__47902__auto___50887 + (1));
i__47902__auto___50887 = G__50888;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50883){
var map__50884 = p__50883;
var map__50884__$1 = ((((!((map__50884 == null)))?((((map__50884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50884):map__50884);
var opts = map__50884__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50881){
var G__50882 = cljs.core.first.call(null,seq50881);
var seq50881__$1 = cljs.core.next.call(null,seq50881);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50882,seq50881__$1);
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
var G__50890 = arguments.length;
switch (G__50890) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50803__auto___50936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___50936){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___50936){
return (function (state_50914){
var state_val_50915 = (state_50914[(1)]);
if((state_val_50915 === (7))){
var inst_50910 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
var statearr_50916_50937 = state_50914__$1;
(statearr_50916_50937[(2)] = inst_50910);

(statearr_50916_50937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (1))){
var state_50914__$1 = state_50914;
var statearr_50917_50938 = state_50914__$1;
(statearr_50917_50938[(2)] = null);

(statearr_50917_50938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (4))){
var inst_50893 = (state_50914[(7)]);
var inst_50893__$1 = (state_50914[(2)]);
var inst_50894 = (inst_50893__$1 == null);
var state_50914__$1 = (function (){var statearr_50918 = state_50914;
(statearr_50918[(7)] = inst_50893__$1);

return statearr_50918;
})();
if(cljs.core.truth_(inst_50894)){
var statearr_50919_50939 = state_50914__$1;
(statearr_50919_50939[(1)] = (5));

} else {
var statearr_50920_50940 = state_50914__$1;
(statearr_50920_50940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (13))){
var state_50914__$1 = state_50914;
var statearr_50921_50941 = state_50914__$1;
(statearr_50921_50941[(2)] = null);

(statearr_50921_50941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (6))){
var inst_50893 = (state_50914[(7)]);
var state_50914__$1 = state_50914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50914__$1,(11),to,inst_50893);
} else {
if((state_val_50915 === (3))){
var inst_50912 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50914__$1,inst_50912);
} else {
if((state_val_50915 === (12))){
var state_50914__$1 = state_50914;
var statearr_50922_50942 = state_50914__$1;
(statearr_50922_50942[(2)] = null);

(statearr_50922_50942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (2))){
var state_50914__$1 = state_50914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50914__$1,(4),from);
} else {
if((state_val_50915 === (11))){
var inst_50903 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
if(cljs.core.truth_(inst_50903)){
var statearr_50923_50943 = state_50914__$1;
(statearr_50923_50943[(1)] = (12));

} else {
var statearr_50924_50944 = state_50914__$1;
(statearr_50924_50944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (9))){
var state_50914__$1 = state_50914;
var statearr_50925_50945 = state_50914__$1;
(statearr_50925_50945[(2)] = null);

(statearr_50925_50945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (5))){
var state_50914__$1 = state_50914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50926_50946 = state_50914__$1;
(statearr_50926_50946[(1)] = (8));

} else {
var statearr_50927_50947 = state_50914__$1;
(statearr_50927_50947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (14))){
var inst_50908 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
var statearr_50928_50948 = state_50914__$1;
(statearr_50928_50948[(2)] = inst_50908);

(statearr_50928_50948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (10))){
var inst_50900 = (state_50914[(2)]);
var state_50914__$1 = state_50914;
var statearr_50929_50949 = state_50914__$1;
(statearr_50929_50949[(2)] = inst_50900);

(statearr_50929_50949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50915 === (8))){
var inst_50897 = cljs.core.async.close_BANG_.call(null,to);
var state_50914__$1 = state_50914;
var statearr_50930_50950 = state_50914__$1;
(statearr_50930_50950[(2)] = inst_50897);

(statearr_50930_50950[(1)] = (10));


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
});})(c__50803__auto___50936))
;
return ((function (switch__50715__auto__,c__50803__auto___50936){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_50931 = [null,null,null,null,null,null,null,null];
(statearr_50931[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_50931[(1)] = (1));

return statearr_50931;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_50914){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_50914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e50932){if((e50932 instanceof Object)){
var ex__50719__auto__ = e50932;
var statearr_50933_50951 = state_50914;
(statearr_50933_50951[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50952 = state_50914;
state_50914 = G__50952;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_50914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_50914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___50936))
})();
var state__50805__auto__ = (function (){var statearr_50934 = f__50804__auto__.call(null);
(statearr_50934[(6)] = c__50803__auto___50936);

return statearr_50934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___50936))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__50953){
var vec__50954 = p__50953;
var v = cljs.core.nth.call(null,vec__50954,(0),null);
var p = cljs.core.nth.call(null,vec__50954,(1),null);
var job = vec__50954;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__50803__auto___51125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results){
return (function (state_50961){
var state_val_50962 = (state_50961[(1)]);
if((state_val_50962 === (1))){
var state_50961__$1 = state_50961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50961__$1,(2),res,v);
} else {
if((state_val_50962 === (2))){
var inst_50958 = (state_50961[(2)]);
var inst_50959 = cljs.core.async.close_BANG_.call(null,res);
var state_50961__$1 = (function (){var statearr_50963 = state_50961;
(statearr_50963[(7)] = inst_50958);

return statearr_50963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50961__$1,inst_50959);
} else {
return null;
}
}
});})(c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results))
;
return ((function (switch__50715__auto__,c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_50964 = [null,null,null,null,null,null,null,null];
(statearr_50964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__);

(statearr_50964[(1)] = (1));

return statearr_50964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1 = (function (state_50961){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_50961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e50965){if((e50965 instanceof Object)){
var ex__50719__auto__ = e50965;
var statearr_50966_51126 = state_50961;
(statearr_50966_51126[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51127 = state_50961;
state_50961 = G__51127;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = function(state_50961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1.call(this,state_50961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results))
})();
var state__50805__auto__ = (function (){var statearr_50967 = f__50804__auto__.call(null);
(statearr_50967[(6)] = c__50803__auto___51125);

return statearr_50967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___51125,res,vec__50954,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50968){
var vec__50969 = p__50968;
var v = cljs.core.nth.call(null,vec__50969,(0),null);
var p = cljs.core.nth.call(null,vec__50969,(1),null);
var job = vec__50969;
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
var n__47683__auto___51128 = n;
var __51129 = (0);
while(true){
if((__51129 < n__47683__auto___51128)){
var G__50972_51130 = type;
var G__50972_51131__$1 = (((G__50972_51130 instanceof cljs.core.Keyword))?G__50972_51130.fqn:null);
switch (G__50972_51131__$1) {
case "compute":
var c__50803__auto___51133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51129,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (__51129,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function (state_50985){
var state_val_50986 = (state_50985[(1)]);
if((state_val_50986 === (1))){
var state_50985__$1 = state_50985;
var statearr_50987_51134 = state_50985__$1;
(statearr_50987_51134[(2)] = null);

(statearr_50987_51134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50986 === (2))){
var state_50985__$1 = state_50985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50985__$1,(4),jobs);
} else {
if((state_val_50986 === (3))){
var inst_50983 = (state_50985[(2)]);
var state_50985__$1 = state_50985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50985__$1,inst_50983);
} else {
if((state_val_50986 === (4))){
var inst_50975 = (state_50985[(2)]);
var inst_50976 = process.call(null,inst_50975);
var state_50985__$1 = state_50985;
if(cljs.core.truth_(inst_50976)){
var statearr_50988_51135 = state_50985__$1;
(statearr_50988_51135[(1)] = (5));

} else {
var statearr_50989_51136 = state_50985__$1;
(statearr_50989_51136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50986 === (5))){
var state_50985__$1 = state_50985;
var statearr_50990_51137 = state_50985__$1;
(statearr_50990_51137[(2)] = null);

(statearr_50990_51137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50986 === (6))){
var state_50985__$1 = state_50985;
var statearr_50991_51138 = state_50985__$1;
(statearr_50991_51138[(2)] = null);

(statearr_50991_51138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50986 === (7))){
var inst_50981 = (state_50985[(2)]);
var state_50985__$1 = state_50985;
var statearr_50992_51139 = state_50985__$1;
(statearr_50992_51139[(2)] = inst_50981);

(statearr_50992_51139[(1)] = (3));


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
});})(__51129,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
;
return ((function (__51129,switch__50715__auto__,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_50993 = [null,null,null,null,null,null,null];
(statearr_50993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__);

(statearr_50993[(1)] = (1));

return statearr_50993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1 = (function (state_50985){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_50985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e50994){if((e50994 instanceof Object)){
var ex__50719__auto__ = e50994;
var statearr_50995_51140 = state_50985;
(statearr_50995_51140[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51141 = state_50985;
state_50985 = G__51141;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = function(state_50985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1.call(this,state_50985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__;
})()
;})(__51129,switch__50715__auto__,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
})();
var state__50805__auto__ = (function (){var statearr_50996 = f__50804__auto__.call(null);
(statearr_50996[(6)] = c__50803__auto___51133);

return statearr_50996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(__51129,c__50803__auto___51133,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
);


break;
case "async":
var c__50803__auto___51142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51129,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (__51129,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function (state_51009){
var state_val_51010 = (state_51009[(1)]);
if((state_val_51010 === (1))){
var state_51009__$1 = state_51009;
var statearr_51011_51143 = state_51009__$1;
(statearr_51011_51143[(2)] = null);

(statearr_51011_51143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51010 === (2))){
var state_51009__$1 = state_51009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51009__$1,(4),jobs);
} else {
if((state_val_51010 === (3))){
var inst_51007 = (state_51009[(2)]);
var state_51009__$1 = state_51009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51009__$1,inst_51007);
} else {
if((state_val_51010 === (4))){
var inst_50999 = (state_51009[(2)]);
var inst_51000 = async.call(null,inst_50999);
var state_51009__$1 = state_51009;
if(cljs.core.truth_(inst_51000)){
var statearr_51012_51144 = state_51009__$1;
(statearr_51012_51144[(1)] = (5));

} else {
var statearr_51013_51145 = state_51009__$1;
(statearr_51013_51145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51010 === (5))){
var state_51009__$1 = state_51009;
var statearr_51014_51146 = state_51009__$1;
(statearr_51014_51146[(2)] = null);

(statearr_51014_51146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51010 === (6))){
var state_51009__$1 = state_51009;
var statearr_51015_51147 = state_51009__$1;
(statearr_51015_51147[(2)] = null);

(statearr_51015_51147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51010 === (7))){
var inst_51005 = (state_51009[(2)]);
var state_51009__$1 = state_51009;
var statearr_51016_51148 = state_51009__$1;
(statearr_51016_51148[(2)] = inst_51005);

(statearr_51016_51148[(1)] = (3));


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
});})(__51129,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
;
return ((function (__51129,switch__50715__auto__,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_51017 = [null,null,null,null,null,null,null];
(statearr_51017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__);

(statearr_51017[(1)] = (1));

return statearr_51017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1 = (function (state_51009){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51018){if((e51018 instanceof Object)){
var ex__50719__auto__ = e51018;
var statearr_51019_51149 = state_51009;
(statearr_51019_51149[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51150 = state_51009;
state_51009 = G__51150;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = function(state_51009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1.call(this,state_51009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__;
})()
;})(__51129,switch__50715__auto__,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
})();
var state__50805__auto__ = (function (){var statearr_51020 = f__50804__auto__.call(null);
(statearr_51020[(6)] = c__50803__auto___51142);

return statearr_51020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(__51129,c__50803__auto___51142,G__50972_51130,G__50972_51131__$1,n__47683__auto___51128,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50972_51131__$1)].join('')));

}

var G__51151 = (__51129 + (1));
__51129 = G__51151;
continue;
} else {
}
break;
}

var c__50803__auto___51152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___51152,jobs,results,process,async){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___51152,jobs,results,process,async){
return (function (state_51042){
var state_val_51043 = (state_51042[(1)]);
if((state_val_51043 === (1))){
var state_51042__$1 = state_51042;
var statearr_51044_51153 = state_51042__$1;
(statearr_51044_51153[(2)] = null);

(statearr_51044_51153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (2))){
var state_51042__$1 = state_51042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51042__$1,(4),from);
} else {
if((state_val_51043 === (3))){
var inst_51040 = (state_51042[(2)]);
var state_51042__$1 = state_51042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51042__$1,inst_51040);
} else {
if((state_val_51043 === (4))){
var inst_51023 = (state_51042[(7)]);
var inst_51023__$1 = (state_51042[(2)]);
var inst_51024 = (inst_51023__$1 == null);
var state_51042__$1 = (function (){var statearr_51045 = state_51042;
(statearr_51045[(7)] = inst_51023__$1);

return statearr_51045;
})();
if(cljs.core.truth_(inst_51024)){
var statearr_51046_51154 = state_51042__$1;
(statearr_51046_51154[(1)] = (5));

} else {
var statearr_51047_51155 = state_51042__$1;
(statearr_51047_51155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (5))){
var inst_51026 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51042__$1 = state_51042;
var statearr_51048_51156 = state_51042__$1;
(statearr_51048_51156[(2)] = inst_51026);

(statearr_51048_51156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (6))){
var inst_51023 = (state_51042[(7)]);
var inst_51028 = (state_51042[(8)]);
var inst_51028__$1 = cljs.core.async.chan.call(null,(1));
var inst_51029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51030 = [inst_51023,inst_51028__$1];
var inst_51031 = (new cljs.core.PersistentVector(null,2,(5),inst_51029,inst_51030,null));
var state_51042__$1 = (function (){var statearr_51049 = state_51042;
(statearr_51049[(8)] = inst_51028__$1);

return statearr_51049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51042__$1,(8),jobs,inst_51031);
} else {
if((state_val_51043 === (7))){
var inst_51038 = (state_51042[(2)]);
var state_51042__$1 = state_51042;
var statearr_51050_51157 = state_51042__$1;
(statearr_51050_51157[(2)] = inst_51038);

(statearr_51050_51157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51043 === (8))){
var inst_51028 = (state_51042[(8)]);
var inst_51033 = (state_51042[(2)]);
var state_51042__$1 = (function (){var statearr_51051 = state_51042;
(statearr_51051[(9)] = inst_51033);

return statearr_51051;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51042__$1,(9),results,inst_51028);
} else {
if((state_val_51043 === (9))){
var inst_51035 = (state_51042[(2)]);
var state_51042__$1 = (function (){var statearr_51052 = state_51042;
(statearr_51052[(10)] = inst_51035);

return statearr_51052;
})();
var statearr_51053_51158 = state_51042__$1;
(statearr_51053_51158[(2)] = null);

(statearr_51053_51158[(1)] = (2));


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
});})(c__50803__auto___51152,jobs,results,process,async))
;
return ((function (switch__50715__auto__,c__50803__auto___51152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_51054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__);

(statearr_51054[(1)] = (1));

return statearr_51054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1 = (function (state_51042){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51055){if((e51055 instanceof Object)){
var ex__50719__auto__ = e51055;
var statearr_51056_51159 = state_51042;
(statearr_51056_51159[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51160 = state_51042;
state_51042 = G__51160;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = function(state_51042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1.call(this,state_51042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___51152,jobs,results,process,async))
})();
var state__50805__auto__ = (function (){var statearr_51057 = f__50804__auto__.call(null);
(statearr_51057[(6)] = c__50803__auto___51152);

return statearr_51057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___51152,jobs,results,process,async))
);


var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__,jobs,results,process,async){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__,jobs,results,process,async){
return (function (state_51095){
var state_val_51096 = (state_51095[(1)]);
if((state_val_51096 === (7))){
var inst_51091 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51097_51161 = state_51095__$1;
(statearr_51097_51161[(2)] = inst_51091);

(statearr_51097_51161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (20))){
var state_51095__$1 = state_51095;
var statearr_51098_51162 = state_51095__$1;
(statearr_51098_51162[(2)] = null);

(statearr_51098_51162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (1))){
var state_51095__$1 = state_51095;
var statearr_51099_51163 = state_51095__$1;
(statearr_51099_51163[(2)] = null);

(statearr_51099_51163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (4))){
var inst_51060 = (state_51095[(7)]);
var inst_51060__$1 = (state_51095[(2)]);
var inst_51061 = (inst_51060__$1 == null);
var state_51095__$1 = (function (){var statearr_51100 = state_51095;
(statearr_51100[(7)] = inst_51060__$1);

return statearr_51100;
})();
if(cljs.core.truth_(inst_51061)){
var statearr_51101_51164 = state_51095__$1;
(statearr_51101_51164[(1)] = (5));

} else {
var statearr_51102_51165 = state_51095__$1;
(statearr_51102_51165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (15))){
var inst_51073 = (state_51095[(8)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51095__$1,(18),to,inst_51073);
} else {
if((state_val_51096 === (21))){
var inst_51086 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51103_51166 = state_51095__$1;
(statearr_51103_51166[(2)] = inst_51086);

(statearr_51103_51166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (13))){
var inst_51088 = (state_51095[(2)]);
var state_51095__$1 = (function (){var statearr_51104 = state_51095;
(statearr_51104[(9)] = inst_51088);

return statearr_51104;
})();
var statearr_51105_51167 = state_51095__$1;
(statearr_51105_51167[(2)] = null);

(statearr_51105_51167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (6))){
var inst_51060 = (state_51095[(7)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51095__$1,(11),inst_51060);
} else {
if((state_val_51096 === (17))){
var inst_51081 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
if(cljs.core.truth_(inst_51081)){
var statearr_51106_51168 = state_51095__$1;
(statearr_51106_51168[(1)] = (19));

} else {
var statearr_51107_51169 = state_51095__$1;
(statearr_51107_51169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (3))){
var inst_51093 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51095__$1,inst_51093);
} else {
if((state_val_51096 === (12))){
var inst_51070 = (state_51095[(10)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51095__$1,(14),inst_51070);
} else {
if((state_val_51096 === (2))){
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51095__$1,(4),results);
} else {
if((state_val_51096 === (19))){
var state_51095__$1 = state_51095;
var statearr_51108_51170 = state_51095__$1;
(statearr_51108_51170[(2)] = null);

(statearr_51108_51170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (11))){
var inst_51070 = (state_51095[(2)]);
var state_51095__$1 = (function (){var statearr_51109 = state_51095;
(statearr_51109[(10)] = inst_51070);

return statearr_51109;
})();
var statearr_51110_51171 = state_51095__$1;
(statearr_51110_51171[(2)] = null);

(statearr_51110_51171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (9))){
var state_51095__$1 = state_51095;
var statearr_51111_51172 = state_51095__$1;
(statearr_51111_51172[(2)] = null);

(statearr_51111_51172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (5))){
var state_51095__$1 = state_51095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51112_51173 = state_51095__$1;
(statearr_51112_51173[(1)] = (8));

} else {
var statearr_51113_51174 = state_51095__$1;
(statearr_51113_51174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (14))){
var inst_51073 = (state_51095[(8)]);
var inst_51075 = (state_51095[(11)]);
var inst_51073__$1 = (state_51095[(2)]);
var inst_51074 = (inst_51073__$1 == null);
var inst_51075__$1 = cljs.core.not.call(null,inst_51074);
var state_51095__$1 = (function (){var statearr_51114 = state_51095;
(statearr_51114[(8)] = inst_51073__$1);

(statearr_51114[(11)] = inst_51075__$1);

return statearr_51114;
})();
if(inst_51075__$1){
var statearr_51115_51175 = state_51095__$1;
(statearr_51115_51175[(1)] = (15));

} else {
var statearr_51116_51176 = state_51095__$1;
(statearr_51116_51176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (16))){
var inst_51075 = (state_51095[(11)]);
var state_51095__$1 = state_51095;
var statearr_51117_51177 = state_51095__$1;
(statearr_51117_51177[(2)] = inst_51075);

(statearr_51117_51177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (10))){
var inst_51067 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51118_51178 = state_51095__$1;
(statearr_51118_51178[(2)] = inst_51067);

(statearr_51118_51178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (18))){
var inst_51078 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51119_51179 = state_51095__$1;
(statearr_51119_51179[(2)] = inst_51078);

(statearr_51119_51179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (8))){
var inst_51064 = cljs.core.async.close_BANG_.call(null,to);
var state_51095__$1 = state_51095;
var statearr_51120_51180 = state_51095__$1;
(statearr_51120_51180[(2)] = inst_51064);

(statearr_51120_51180[(1)] = (10));


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
});})(c__50803__auto__,jobs,results,process,async))
;
return ((function (switch__50715__auto__,c__50803__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_51121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__);

(statearr_51121[(1)] = (1));

return statearr_51121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1 = (function (state_51095){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51122){if((e51122 instanceof Object)){
var ex__50719__auto__ = e51122;
var statearr_51123_51181 = state_51095;
(statearr_51123_51181[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51182 = state_51095;
state_51095 = G__51182;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__ = function(state_51095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1.call(this,state_51095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__,jobs,results,process,async))
})();
var state__50805__auto__ = (function (){var statearr_51124 = f__50804__auto__.call(null);
(statearr_51124[(6)] = c__50803__auto__);

return statearr_51124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__,jobs,results,process,async))
);

return c__50803__auto__;
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
var G__51184 = arguments.length;
switch (G__51184) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__51187 = arguments.length;
switch (G__51187) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__51190 = arguments.length;
switch (G__51190) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__50803__auto___51239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___51239,tc,fc){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___51239,tc,fc){
return (function (state_51216){
var state_val_51217 = (state_51216[(1)]);
if((state_val_51217 === (7))){
var inst_51212 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
var statearr_51218_51240 = state_51216__$1;
(statearr_51218_51240[(2)] = inst_51212);

(statearr_51218_51240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (1))){
var state_51216__$1 = state_51216;
var statearr_51219_51241 = state_51216__$1;
(statearr_51219_51241[(2)] = null);

(statearr_51219_51241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (4))){
var inst_51193 = (state_51216[(7)]);
var inst_51193__$1 = (state_51216[(2)]);
var inst_51194 = (inst_51193__$1 == null);
var state_51216__$1 = (function (){var statearr_51220 = state_51216;
(statearr_51220[(7)] = inst_51193__$1);

return statearr_51220;
})();
if(cljs.core.truth_(inst_51194)){
var statearr_51221_51242 = state_51216__$1;
(statearr_51221_51242[(1)] = (5));

} else {
var statearr_51222_51243 = state_51216__$1;
(statearr_51222_51243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (13))){
var state_51216__$1 = state_51216;
var statearr_51223_51244 = state_51216__$1;
(statearr_51223_51244[(2)] = null);

(statearr_51223_51244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (6))){
var inst_51193 = (state_51216[(7)]);
var inst_51199 = p.call(null,inst_51193);
var state_51216__$1 = state_51216;
if(cljs.core.truth_(inst_51199)){
var statearr_51224_51245 = state_51216__$1;
(statearr_51224_51245[(1)] = (9));

} else {
var statearr_51225_51246 = state_51216__$1;
(statearr_51225_51246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (3))){
var inst_51214 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51216__$1,inst_51214);
} else {
if((state_val_51217 === (12))){
var state_51216__$1 = state_51216;
var statearr_51226_51247 = state_51216__$1;
(statearr_51226_51247[(2)] = null);

(statearr_51226_51247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (2))){
var state_51216__$1 = state_51216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51216__$1,(4),ch);
} else {
if((state_val_51217 === (11))){
var inst_51193 = (state_51216[(7)]);
var inst_51203 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51216__$1,(8),inst_51203,inst_51193);
} else {
if((state_val_51217 === (9))){
var state_51216__$1 = state_51216;
var statearr_51227_51248 = state_51216__$1;
(statearr_51227_51248[(2)] = tc);

(statearr_51227_51248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (5))){
var inst_51196 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51197 = cljs.core.async.close_BANG_.call(null,fc);
var state_51216__$1 = (function (){var statearr_51228 = state_51216;
(statearr_51228[(8)] = inst_51196);

return statearr_51228;
})();
var statearr_51229_51249 = state_51216__$1;
(statearr_51229_51249[(2)] = inst_51197);

(statearr_51229_51249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (14))){
var inst_51210 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
var statearr_51230_51250 = state_51216__$1;
(statearr_51230_51250[(2)] = inst_51210);

(statearr_51230_51250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (10))){
var state_51216__$1 = state_51216;
var statearr_51231_51251 = state_51216__$1;
(statearr_51231_51251[(2)] = fc);

(statearr_51231_51251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51217 === (8))){
var inst_51205 = (state_51216[(2)]);
var state_51216__$1 = state_51216;
if(cljs.core.truth_(inst_51205)){
var statearr_51232_51252 = state_51216__$1;
(statearr_51232_51252[(1)] = (12));

} else {
var statearr_51233_51253 = state_51216__$1;
(statearr_51233_51253[(1)] = (13));

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
});})(c__50803__auto___51239,tc,fc))
;
return ((function (switch__50715__auto__,c__50803__auto___51239,tc,fc){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_51234 = [null,null,null,null,null,null,null,null,null];
(statearr_51234[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_51234[(1)] = (1));

return statearr_51234;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_51216){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51235){if((e51235 instanceof Object)){
var ex__50719__auto__ = e51235;
var statearr_51236_51254 = state_51216;
(statearr_51236_51254[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51255 = state_51216;
state_51216 = G__51255;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_51216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_51216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___51239,tc,fc))
})();
var state__50805__auto__ = (function (){var statearr_51237 = f__50804__auto__.call(null);
(statearr_51237[(6)] = c__50803__auto___51239);

return statearr_51237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___51239,tc,fc))
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
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_51276){
var state_val_51277 = (state_51276[(1)]);
if((state_val_51277 === (7))){
var inst_51272 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
var statearr_51278_51296 = state_51276__$1;
(statearr_51278_51296[(2)] = inst_51272);

(statearr_51278_51296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (1))){
var inst_51256 = init;
var state_51276__$1 = (function (){var statearr_51279 = state_51276;
(statearr_51279[(7)] = inst_51256);

return statearr_51279;
})();
var statearr_51280_51297 = state_51276__$1;
(statearr_51280_51297[(2)] = null);

(statearr_51280_51297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (4))){
var inst_51259 = (state_51276[(8)]);
var inst_51259__$1 = (state_51276[(2)]);
var inst_51260 = (inst_51259__$1 == null);
var state_51276__$1 = (function (){var statearr_51281 = state_51276;
(statearr_51281[(8)] = inst_51259__$1);

return statearr_51281;
})();
if(cljs.core.truth_(inst_51260)){
var statearr_51282_51298 = state_51276__$1;
(statearr_51282_51298[(1)] = (5));

} else {
var statearr_51283_51299 = state_51276__$1;
(statearr_51283_51299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (6))){
var inst_51259 = (state_51276[(8)]);
var inst_51263 = (state_51276[(9)]);
var inst_51256 = (state_51276[(7)]);
var inst_51263__$1 = f.call(null,inst_51256,inst_51259);
var inst_51264 = cljs.core.reduced_QMARK_.call(null,inst_51263__$1);
var state_51276__$1 = (function (){var statearr_51284 = state_51276;
(statearr_51284[(9)] = inst_51263__$1);

return statearr_51284;
})();
if(inst_51264){
var statearr_51285_51300 = state_51276__$1;
(statearr_51285_51300[(1)] = (8));

} else {
var statearr_51286_51301 = state_51276__$1;
(statearr_51286_51301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (3))){
var inst_51274 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51276__$1,inst_51274);
} else {
if((state_val_51277 === (2))){
var state_51276__$1 = state_51276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51276__$1,(4),ch);
} else {
if((state_val_51277 === (9))){
var inst_51263 = (state_51276[(9)]);
var inst_51256 = inst_51263;
var state_51276__$1 = (function (){var statearr_51287 = state_51276;
(statearr_51287[(7)] = inst_51256);

return statearr_51287;
})();
var statearr_51288_51302 = state_51276__$1;
(statearr_51288_51302[(2)] = null);

(statearr_51288_51302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (5))){
var inst_51256 = (state_51276[(7)]);
var state_51276__$1 = state_51276;
var statearr_51289_51303 = state_51276__$1;
(statearr_51289_51303[(2)] = inst_51256);

(statearr_51289_51303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (10))){
var inst_51270 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
var statearr_51290_51304 = state_51276__$1;
(statearr_51290_51304[(2)] = inst_51270);

(statearr_51290_51304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51277 === (8))){
var inst_51263 = (state_51276[(9)]);
var inst_51266 = cljs.core.deref.call(null,inst_51263);
var state_51276__$1 = state_51276;
var statearr_51291_51305 = state_51276__$1;
(statearr_51291_51305[(2)] = inst_51266);

(statearr_51291_51305[(1)] = (10));


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
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50716__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50716__auto____0 = (function (){
var statearr_51292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51292[(0)] = cljs$core$async$reduce_$_state_machine__50716__auto__);

(statearr_51292[(1)] = (1));

return statearr_51292;
});
var cljs$core$async$reduce_$_state_machine__50716__auto____1 = (function (state_51276){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51293){if((e51293 instanceof Object)){
var ex__50719__auto__ = e51293;
var statearr_51294_51306 = state_51276;
(statearr_51294_51306[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51307 = state_51276;
state_51276 = G__51307;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50716__auto__ = function(state_51276){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50716__auto____1.call(this,state_51276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50716__auto____0;
cljs$core$async$reduce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50716__auto____1;
return cljs$core$async$reduce_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_51295 = f__50804__auto__.call(null);
(statearr_51295[(6)] = c__50803__auto__);

return statearr_51295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__,f__$1){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__,f__$1){
return (function (state_51313){
var state_val_51314 = (state_51313[(1)]);
if((state_val_51314 === (1))){
var inst_51308 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51313__$1 = state_51313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51313__$1,(2),inst_51308);
} else {
if((state_val_51314 === (2))){
var inst_51310 = (state_51313[(2)]);
var inst_51311 = f__$1.call(null,inst_51310);
var state_51313__$1 = state_51313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51313__$1,inst_51311);
} else {
return null;
}
}
});})(c__50803__auto__,f__$1))
;
return ((function (switch__50715__auto__,c__50803__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50716__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50716__auto____0 = (function (){
var statearr_51315 = [null,null,null,null,null,null,null];
(statearr_51315[(0)] = cljs$core$async$transduce_$_state_machine__50716__auto__);

(statearr_51315[(1)] = (1));

return statearr_51315;
});
var cljs$core$async$transduce_$_state_machine__50716__auto____1 = (function (state_51313){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51316){if((e51316 instanceof Object)){
var ex__50719__auto__ = e51316;
var statearr_51317_51319 = state_51313;
(statearr_51317_51319[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51320 = state_51313;
state_51313 = G__51320;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50716__auto__ = function(state_51313){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50716__auto____1.call(this,state_51313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50716__auto____0;
cljs$core$async$transduce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50716__auto____1;
return cljs$core$async$transduce_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__,f__$1))
})();
var state__50805__auto__ = (function (){var statearr_51318 = f__50804__auto__.call(null);
(statearr_51318[(6)] = c__50803__auto__);

return statearr_51318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__,f__$1))
);

return c__50803__auto__;
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
var G__51322 = arguments.length;
switch (G__51322) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_51347){
var state_val_51348 = (state_51347[(1)]);
if((state_val_51348 === (7))){
var inst_51329 = (state_51347[(2)]);
var state_51347__$1 = state_51347;
var statearr_51349_51370 = state_51347__$1;
(statearr_51349_51370[(2)] = inst_51329);

(statearr_51349_51370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (1))){
var inst_51323 = cljs.core.seq.call(null,coll);
var inst_51324 = inst_51323;
var state_51347__$1 = (function (){var statearr_51350 = state_51347;
(statearr_51350[(7)] = inst_51324);

return statearr_51350;
})();
var statearr_51351_51371 = state_51347__$1;
(statearr_51351_51371[(2)] = null);

(statearr_51351_51371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (4))){
var inst_51324 = (state_51347[(7)]);
var inst_51327 = cljs.core.first.call(null,inst_51324);
var state_51347__$1 = state_51347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51347__$1,(7),ch,inst_51327);
} else {
if((state_val_51348 === (13))){
var inst_51341 = (state_51347[(2)]);
var state_51347__$1 = state_51347;
var statearr_51352_51372 = state_51347__$1;
(statearr_51352_51372[(2)] = inst_51341);

(statearr_51352_51372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (6))){
var inst_51332 = (state_51347[(2)]);
var state_51347__$1 = state_51347;
if(cljs.core.truth_(inst_51332)){
var statearr_51353_51373 = state_51347__$1;
(statearr_51353_51373[(1)] = (8));

} else {
var statearr_51354_51374 = state_51347__$1;
(statearr_51354_51374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (3))){
var inst_51345 = (state_51347[(2)]);
var state_51347__$1 = state_51347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51347__$1,inst_51345);
} else {
if((state_val_51348 === (12))){
var state_51347__$1 = state_51347;
var statearr_51355_51375 = state_51347__$1;
(statearr_51355_51375[(2)] = null);

(statearr_51355_51375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (2))){
var inst_51324 = (state_51347[(7)]);
var state_51347__$1 = state_51347;
if(cljs.core.truth_(inst_51324)){
var statearr_51356_51376 = state_51347__$1;
(statearr_51356_51376[(1)] = (4));

} else {
var statearr_51357_51377 = state_51347__$1;
(statearr_51357_51377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (11))){
var inst_51338 = cljs.core.async.close_BANG_.call(null,ch);
var state_51347__$1 = state_51347;
var statearr_51358_51378 = state_51347__$1;
(statearr_51358_51378[(2)] = inst_51338);

(statearr_51358_51378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (9))){
var state_51347__$1 = state_51347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51359_51379 = state_51347__$1;
(statearr_51359_51379[(1)] = (11));

} else {
var statearr_51360_51380 = state_51347__$1;
(statearr_51360_51380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (5))){
var inst_51324 = (state_51347[(7)]);
var state_51347__$1 = state_51347;
var statearr_51361_51381 = state_51347__$1;
(statearr_51361_51381[(2)] = inst_51324);

(statearr_51361_51381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (10))){
var inst_51343 = (state_51347[(2)]);
var state_51347__$1 = state_51347;
var statearr_51362_51382 = state_51347__$1;
(statearr_51362_51382[(2)] = inst_51343);

(statearr_51362_51382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51348 === (8))){
var inst_51324 = (state_51347[(7)]);
var inst_51334 = cljs.core.next.call(null,inst_51324);
var inst_51324__$1 = inst_51334;
var state_51347__$1 = (function (){var statearr_51363 = state_51347;
(statearr_51363[(7)] = inst_51324__$1);

return statearr_51363;
})();
var statearr_51364_51383 = state_51347__$1;
(statearr_51364_51383[(2)] = null);

(statearr_51364_51383[(1)] = (2));


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
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_51365 = [null,null,null,null,null,null,null,null];
(statearr_51365[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_51365[(1)] = (1));

return statearr_51365;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_51347){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51366){if((e51366 instanceof Object)){
var ex__50719__auto__ = e51366;
var statearr_51367_51384 = state_51347;
(statearr_51367_51384[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51385 = state_51347;
state_51347 = G__51385;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_51347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_51347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_51368 = f__50804__auto__.call(null);
(statearr_51368[(6)] = c__50803__auto__);

return statearr_51368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
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
var x__47422__auto__ = (((_ == null))?null:_);
var m__47423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,_);
} else {
var m__47423__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,_);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__47423__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,ch);
} else {
var m__47423__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,ch);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m);
} else {
var m__47423__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async51386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51386 = (function (ch,cs,meta51387){
this.ch = ch;
this.cs = cs;
this.meta51387 = meta51387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51388,meta51387__$1){
var self__ = this;
var _51388__$1 = this;
return (new cljs.core.async.t_cljs$core$async51386(self__.ch,self__.cs,meta51387__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51388){
var self__ = this;
var _51388__$1 = this;
return self__.meta51387;
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51387","meta51387",2075847149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51386";

cljs.core.async.t_cljs$core$async51386.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async51386");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51386.
 */
cljs.core.async.__GT_t_cljs$core$async51386 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51386(ch__$1,cs__$1,meta51387){
return (new cljs.core.async.t_cljs$core$async51386(ch__$1,cs__$1,meta51387));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51386(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50803__auto___51608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___51608,cs,m,dchan,dctr,done){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___51608,cs,m,dchan,dctr,done){
return (function (state_51523){
var state_val_51524 = (state_51523[(1)]);
if((state_val_51524 === (7))){
var inst_51519 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51525_51609 = state_51523__$1;
(statearr_51525_51609[(2)] = inst_51519);

(statearr_51525_51609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (20))){
var inst_51422 = (state_51523[(7)]);
var inst_51434 = cljs.core.first.call(null,inst_51422);
var inst_51435 = cljs.core.nth.call(null,inst_51434,(0),null);
var inst_51436 = cljs.core.nth.call(null,inst_51434,(1),null);
var state_51523__$1 = (function (){var statearr_51526 = state_51523;
(statearr_51526[(8)] = inst_51435);

return statearr_51526;
})();
if(cljs.core.truth_(inst_51436)){
var statearr_51527_51610 = state_51523__$1;
(statearr_51527_51610[(1)] = (22));

} else {
var statearr_51528_51611 = state_51523__$1;
(statearr_51528_51611[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (27))){
var inst_51391 = (state_51523[(9)]);
var inst_51464 = (state_51523[(10)]);
var inst_51471 = (state_51523[(11)]);
var inst_51466 = (state_51523[(12)]);
var inst_51471__$1 = cljs.core._nth.call(null,inst_51464,inst_51466);
var inst_51472 = cljs.core.async.put_BANG_.call(null,inst_51471__$1,inst_51391,done);
var state_51523__$1 = (function (){var statearr_51529 = state_51523;
(statearr_51529[(11)] = inst_51471__$1);

return statearr_51529;
})();
if(cljs.core.truth_(inst_51472)){
var statearr_51530_51612 = state_51523__$1;
(statearr_51530_51612[(1)] = (30));

} else {
var statearr_51531_51613 = state_51523__$1;
(statearr_51531_51613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (1))){
var state_51523__$1 = state_51523;
var statearr_51532_51614 = state_51523__$1;
(statearr_51532_51614[(2)] = null);

(statearr_51532_51614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (24))){
var inst_51422 = (state_51523[(7)]);
var inst_51441 = (state_51523[(2)]);
var inst_51442 = cljs.core.next.call(null,inst_51422);
var inst_51400 = inst_51442;
var inst_51401 = null;
var inst_51402 = (0);
var inst_51403 = (0);
var state_51523__$1 = (function (){var statearr_51533 = state_51523;
(statearr_51533[(13)] = inst_51400);

(statearr_51533[(14)] = inst_51402);

(statearr_51533[(15)] = inst_51403);

(statearr_51533[(16)] = inst_51401);

(statearr_51533[(17)] = inst_51441);

return statearr_51533;
})();
var statearr_51534_51615 = state_51523__$1;
(statearr_51534_51615[(2)] = null);

(statearr_51534_51615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (39))){
var state_51523__$1 = state_51523;
var statearr_51538_51616 = state_51523__$1;
(statearr_51538_51616[(2)] = null);

(statearr_51538_51616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (4))){
var inst_51391 = (state_51523[(9)]);
var inst_51391__$1 = (state_51523[(2)]);
var inst_51392 = (inst_51391__$1 == null);
var state_51523__$1 = (function (){var statearr_51539 = state_51523;
(statearr_51539[(9)] = inst_51391__$1);

return statearr_51539;
})();
if(cljs.core.truth_(inst_51392)){
var statearr_51540_51617 = state_51523__$1;
(statearr_51540_51617[(1)] = (5));

} else {
var statearr_51541_51618 = state_51523__$1;
(statearr_51541_51618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (15))){
var inst_51400 = (state_51523[(13)]);
var inst_51402 = (state_51523[(14)]);
var inst_51403 = (state_51523[(15)]);
var inst_51401 = (state_51523[(16)]);
var inst_51418 = (state_51523[(2)]);
var inst_51419 = (inst_51403 + (1));
var tmp51535 = inst_51400;
var tmp51536 = inst_51402;
var tmp51537 = inst_51401;
var inst_51400__$1 = tmp51535;
var inst_51401__$1 = tmp51537;
var inst_51402__$1 = tmp51536;
var inst_51403__$1 = inst_51419;
var state_51523__$1 = (function (){var statearr_51542 = state_51523;
(statearr_51542[(13)] = inst_51400__$1);

(statearr_51542[(18)] = inst_51418);

(statearr_51542[(14)] = inst_51402__$1);

(statearr_51542[(15)] = inst_51403__$1);

(statearr_51542[(16)] = inst_51401__$1);

return statearr_51542;
})();
var statearr_51543_51619 = state_51523__$1;
(statearr_51543_51619[(2)] = null);

(statearr_51543_51619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (21))){
var inst_51445 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51547_51620 = state_51523__$1;
(statearr_51547_51620[(2)] = inst_51445);

(statearr_51547_51620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (31))){
var inst_51471 = (state_51523[(11)]);
var inst_51475 = done.call(null,null);
var inst_51476 = cljs.core.async.untap_STAR_.call(null,m,inst_51471);
var state_51523__$1 = (function (){var statearr_51548 = state_51523;
(statearr_51548[(19)] = inst_51475);

return statearr_51548;
})();
var statearr_51549_51621 = state_51523__$1;
(statearr_51549_51621[(2)] = inst_51476);

(statearr_51549_51621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (32))){
var inst_51463 = (state_51523[(20)]);
var inst_51464 = (state_51523[(10)]);
var inst_51466 = (state_51523[(12)]);
var inst_51465 = (state_51523[(21)]);
var inst_51478 = (state_51523[(2)]);
var inst_51479 = (inst_51466 + (1));
var tmp51544 = inst_51463;
var tmp51545 = inst_51464;
var tmp51546 = inst_51465;
var inst_51463__$1 = tmp51544;
var inst_51464__$1 = tmp51545;
var inst_51465__$1 = tmp51546;
var inst_51466__$1 = inst_51479;
var state_51523__$1 = (function (){var statearr_51550 = state_51523;
(statearr_51550[(20)] = inst_51463__$1);

(statearr_51550[(22)] = inst_51478);

(statearr_51550[(10)] = inst_51464__$1);

(statearr_51550[(12)] = inst_51466__$1);

(statearr_51550[(21)] = inst_51465__$1);

return statearr_51550;
})();
var statearr_51551_51622 = state_51523__$1;
(statearr_51551_51622[(2)] = null);

(statearr_51551_51622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (40))){
var inst_51491 = (state_51523[(23)]);
var inst_51495 = done.call(null,null);
var inst_51496 = cljs.core.async.untap_STAR_.call(null,m,inst_51491);
var state_51523__$1 = (function (){var statearr_51552 = state_51523;
(statearr_51552[(24)] = inst_51495);

return statearr_51552;
})();
var statearr_51553_51623 = state_51523__$1;
(statearr_51553_51623[(2)] = inst_51496);

(statearr_51553_51623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (33))){
var inst_51482 = (state_51523[(25)]);
var inst_51484 = cljs.core.chunked_seq_QMARK_.call(null,inst_51482);
var state_51523__$1 = state_51523;
if(inst_51484){
var statearr_51554_51624 = state_51523__$1;
(statearr_51554_51624[(1)] = (36));

} else {
var statearr_51555_51625 = state_51523__$1;
(statearr_51555_51625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (13))){
var inst_51412 = (state_51523[(26)]);
var inst_51415 = cljs.core.async.close_BANG_.call(null,inst_51412);
var state_51523__$1 = state_51523;
var statearr_51556_51626 = state_51523__$1;
(statearr_51556_51626[(2)] = inst_51415);

(statearr_51556_51626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (22))){
var inst_51435 = (state_51523[(8)]);
var inst_51438 = cljs.core.async.close_BANG_.call(null,inst_51435);
var state_51523__$1 = state_51523;
var statearr_51557_51627 = state_51523__$1;
(statearr_51557_51627[(2)] = inst_51438);

(statearr_51557_51627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (36))){
var inst_51482 = (state_51523[(25)]);
var inst_51486 = cljs.core.chunk_first.call(null,inst_51482);
var inst_51487 = cljs.core.chunk_rest.call(null,inst_51482);
var inst_51488 = cljs.core.count.call(null,inst_51486);
var inst_51463 = inst_51487;
var inst_51464 = inst_51486;
var inst_51465 = inst_51488;
var inst_51466 = (0);
var state_51523__$1 = (function (){var statearr_51558 = state_51523;
(statearr_51558[(20)] = inst_51463);

(statearr_51558[(10)] = inst_51464);

(statearr_51558[(12)] = inst_51466);

(statearr_51558[(21)] = inst_51465);

return statearr_51558;
})();
var statearr_51559_51628 = state_51523__$1;
(statearr_51559_51628[(2)] = null);

(statearr_51559_51628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (41))){
var inst_51482 = (state_51523[(25)]);
var inst_51498 = (state_51523[(2)]);
var inst_51499 = cljs.core.next.call(null,inst_51482);
var inst_51463 = inst_51499;
var inst_51464 = null;
var inst_51465 = (0);
var inst_51466 = (0);
var state_51523__$1 = (function (){var statearr_51560 = state_51523;
(statearr_51560[(20)] = inst_51463);

(statearr_51560[(10)] = inst_51464);

(statearr_51560[(27)] = inst_51498);

(statearr_51560[(12)] = inst_51466);

(statearr_51560[(21)] = inst_51465);

return statearr_51560;
})();
var statearr_51561_51629 = state_51523__$1;
(statearr_51561_51629[(2)] = null);

(statearr_51561_51629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (43))){
var state_51523__$1 = state_51523;
var statearr_51562_51630 = state_51523__$1;
(statearr_51562_51630[(2)] = null);

(statearr_51562_51630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (29))){
var inst_51507 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51563_51631 = state_51523__$1;
(statearr_51563_51631[(2)] = inst_51507);

(statearr_51563_51631[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (44))){
var inst_51516 = (state_51523[(2)]);
var state_51523__$1 = (function (){var statearr_51564 = state_51523;
(statearr_51564[(28)] = inst_51516);

return statearr_51564;
})();
var statearr_51565_51632 = state_51523__$1;
(statearr_51565_51632[(2)] = null);

(statearr_51565_51632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (6))){
var inst_51455 = (state_51523[(29)]);
var inst_51454 = cljs.core.deref.call(null,cs);
var inst_51455__$1 = cljs.core.keys.call(null,inst_51454);
var inst_51456 = cljs.core.count.call(null,inst_51455__$1);
var inst_51457 = cljs.core.reset_BANG_.call(null,dctr,inst_51456);
var inst_51462 = cljs.core.seq.call(null,inst_51455__$1);
var inst_51463 = inst_51462;
var inst_51464 = null;
var inst_51465 = (0);
var inst_51466 = (0);
var state_51523__$1 = (function (){var statearr_51566 = state_51523;
(statearr_51566[(30)] = inst_51457);

(statearr_51566[(20)] = inst_51463);

(statearr_51566[(10)] = inst_51464);

(statearr_51566[(29)] = inst_51455__$1);

(statearr_51566[(12)] = inst_51466);

(statearr_51566[(21)] = inst_51465);

return statearr_51566;
})();
var statearr_51567_51633 = state_51523__$1;
(statearr_51567_51633[(2)] = null);

(statearr_51567_51633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (28))){
var inst_51463 = (state_51523[(20)]);
var inst_51482 = (state_51523[(25)]);
var inst_51482__$1 = cljs.core.seq.call(null,inst_51463);
var state_51523__$1 = (function (){var statearr_51568 = state_51523;
(statearr_51568[(25)] = inst_51482__$1);

return statearr_51568;
})();
if(inst_51482__$1){
var statearr_51569_51634 = state_51523__$1;
(statearr_51569_51634[(1)] = (33));

} else {
var statearr_51570_51635 = state_51523__$1;
(statearr_51570_51635[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (25))){
var inst_51466 = (state_51523[(12)]);
var inst_51465 = (state_51523[(21)]);
var inst_51468 = (inst_51466 < inst_51465);
var inst_51469 = inst_51468;
var state_51523__$1 = state_51523;
if(cljs.core.truth_(inst_51469)){
var statearr_51571_51636 = state_51523__$1;
(statearr_51571_51636[(1)] = (27));

} else {
var statearr_51572_51637 = state_51523__$1;
(statearr_51572_51637[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (34))){
var state_51523__$1 = state_51523;
var statearr_51573_51638 = state_51523__$1;
(statearr_51573_51638[(2)] = null);

(statearr_51573_51638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (17))){
var state_51523__$1 = state_51523;
var statearr_51574_51639 = state_51523__$1;
(statearr_51574_51639[(2)] = null);

(statearr_51574_51639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (3))){
var inst_51521 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51523__$1,inst_51521);
} else {
if((state_val_51524 === (12))){
var inst_51450 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51575_51640 = state_51523__$1;
(statearr_51575_51640[(2)] = inst_51450);

(statearr_51575_51640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (2))){
var state_51523__$1 = state_51523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51523__$1,(4),ch);
} else {
if((state_val_51524 === (23))){
var state_51523__$1 = state_51523;
var statearr_51576_51641 = state_51523__$1;
(statearr_51576_51641[(2)] = null);

(statearr_51576_51641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (35))){
var inst_51505 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51577_51642 = state_51523__$1;
(statearr_51577_51642[(2)] = inst_51505);

(statearr_51577_51642[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (19))){
var inst_51422 = (state_51523[(7)]);
var inst_51426 = cljs.core.chunk_first.call(null,inst_51422);
var inst_51427 = cljs.core.chunk_rest.call(null,inst_51422);
var inst_51428 = cljs.core.count.call(null,inst_51426);
var inst_51400 = inst_51427;
var inst_51401 = inst_51426;
var inst_51402 = inst_51428;
var inst_51403 = (0);
var state_51523__$1 = (function (){var statearr_51578 = state_51523;
(statearr_51578[(13)] = inst_51400);

(statearr_51578[(14)] = inst_51402);

(statearr_51578[(15)] = inst_51403);

(statearr_51578[(16)] = inst_51401);

return statearr_51578;
})();
var statearr_51579_51643 = state_51523__$1;
(statearr_51579_51643[(2)] = null);

(statearr_51579_51643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (11))){
var inst_51400 = (state_51523[(13)]);
var inst_51422 = (state_51523[(7)]);
var inst_51422__$1 = cljs.core.seq.call(null,inst_51400);
var state_51523__$1 = (function (){var statearr_51580 = state_51523;
(statearr_51580[(7)] = inst_51422__$1);

return statearr_51580;
})();
if(inst_51422__$1){
var statearr_51581_51644 = state_51523__$1;
(statearr_51581_51644[(1)] = (16));

} else {
var statearr_51582_51645 = state_51523__$1;
(statearr_51582_51645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (9))){
var inst_51452 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51583_51646 = state_51523__$1;
(statearr_51583_51646[(2)] = inst_51452);

(statearr_51583_51646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (5))){
var inst_51398 = cljs.core.deref.call(null,cs);
var inst_51399 = cljs.core.seq.call(null,inst_51398);
var inst_51400 = inst_51399;
var inst_51401 = null;
var inst_51402 = (0);
var inst_51403 = (0);
var state_51523__$1 = (function (){var statearr_51584 = state_51523;
(statearr_51584[(13)] = inst_51400);

(statearr_51584[(14)] = inst_51402);

(statearr_51584[(15)] = inst_51403);

(statearr_51584[(16)] = inst_51401);

return statearr_51584;
})();
var statearr_51585_51647 = state_51523__$1;
(statearr_51585_51647[(2)] = null);

(statearr_51585_51647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (14))){
var state_51523__$1 = state_51523;
var statearr_51586_51648 = state_51523__$1;
(statearr_51586_51648[(2)] = null);

(statearr_51586_51648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (45))){
var inst_51513 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51587_51649 = state_51523__$1;
(statearr_51587_51649[(2)] = inst_51513);

(statearr_51587_51649[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (26))){
var inst_51455 = (state_51523[(29)]);
var inst_51509 = (state_51523[(2)]);
var inst_51510 = cljs.core.seq.call(null,inst_51455);
var state_51523__$1 = (function (){var statearr_51588 = state_51523;
(statearr_51588[(31)] = inst_51509);

return statearr_51588;
})();
if(inst_51510){
var statearr_51589_51650 = state_51523__$1;
(statearr_51589_51650[(1)] = (42));

} else {
var statearr_51590_51651 = state_51523__$1;
(statearr_51590_51651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (16))){
var inst_51422 = (state_51523[(7)]);
var inst_51424 = cljs.core.chunked_seq_QMARK_.call(null,inst_51422);
var state_51523__$1 = state_51523;
if(inst_51424){
var statearr_51591_51652 = state_51523__$1;
(statearr_51591_51652[(1)] = (19));

} else {
var statearr_51592_51653 = state_51523__$1;
(statearr_51592_51653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (38))){
var inst_51502 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51593_51654 = state_51523__$1;
(statearr_51593_51654[(2)] = inst_51502);

(statearr_51593_51654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (30))){
var state_51523__$1 = state_51523;
var statearr_51594_51655 = state_51523__$1;
(statearr_51594_51655[(2)] = null);

(statearr_51594_51655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (10))){
var inst_51403 = (state_51523[(15)]);
var inst_51401 = (state_51523[(16)]);
var inst_51411 = cljs.core._nth.call(null,inst_51401,inst_51403);
var inst_51412 = cljs.core.nth.call(null,inst_51411,(0),null);
var inst_51413 = cljs.core.nth.call(null,inst_51411,(1),null);
var state_51523__$1 = (function (){var statearr_51595 = state_51523;
(statearr_51595[(26)] = inst_51412);

return statearr_51595;
})();
if(cljs.core.truth_(inst_51413)){
var statearr_51596_51656 = state_51523__$1;
(statearr_51596_51656[(1)] = (13));

} else {
var statearr_51597_51657 = state_51523__$1;
(statearr_51597_51657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (18))){
var inst_51448 = (state_51523[(2)]);
var state_51523__$1 = state_51523;
var statearr_51598_51658 = state_51523__$1;
(statearr_51598_51658[(2)] = inst_51448);

(statearr_51598_51658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (42))){
var state_51523__$1 = state_51523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51523__$1,(45),dchan);
} else {
if((state_val_51524 === (37))){
var inst_51482 = (state_51523[(25)]);
var inst_51391 = (state_51523[(9)]);
var inst_51491 = (state_51523[(23)]);
var inst_51491__$1 = cljs.core.first.call(null,inst_51482);
var inst_51492 = cljs.core.async.put_BANG_.call(null,inst_51491__$1,inst_51391,done);
var state_51523__$1 = (function (){var statearr_51599 = state_51523;
(statearr_51599[(23)] = inst_51491__$1);

return statearr_51599;
})();
if(cljs.core.truth_(inst_51492)){
var statearr_51600_51659 = state_51523__$1;
(statearr_51600_51659[(1)] = (39));

} else {
var statearr_51601_51660 = state_51523__$1;
(statearr_51601_51660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51524 === (8))){
var inst_51402 = (state_51523[(14)]);
var inst_51403 = (state_51523[(15)]);
var inst_51405 = (inst_51403 < inst_51402);
var inst_51406 = inst_51405;
var state_51523__$1 = state_51523;
if(cljs.core.truth_(inst_51406)){
var statearr_51602_51661 = state_51523__$1;
(statearr_51602_51661[(1)] = (10));

} else {
var statearr_51603_51662 = state_51523__$1;
(statearr_51603_51662[(1)] = (11));

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
});})(c__50803__auto___51608,cs,m,dchan,dctr,done))
;
return ((function (switch__50715__auto__,c__50803__auto___51608,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50716__auto__ = null;
var cljs$core$async$mult_$_state_machine__50716__auto____0 = (function (){
var statearr_51604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51604[(0)] = cljs$core$async$mult_$_state_machine__50716__auto__);

(statearr_51604[(1)] = (1));

return statearr_51604;
});
var cljs$core$async$mult_$_state_machine__50716__auto____1 = (function (state_51523){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51605){if((e51605 instanceof Object)){
var ex__50719__auto__ = e51605;
var statearr_51606_51663 = state_51523;
(statearr_51606_51663[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51664 = state_51523;
state_51523 = G__51664;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50716__auto__ = function(state_51523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50716__auto____1.call(this,state_51523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50716__auto____0;
cljs$core$async$mult_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50716__auto____1;
return cljs$core$async$mult_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___51608,cs,m,dchan,dctr,done))
})();
var state__50805__auto__ = (function (){var statearr_51607 = f__50804__auto__.call(null);
(statearr_51607[(6)] = c__50803__auto___51608);

return statearr_51607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___51608,cs,m,dchan,dctr,done))
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
var G__51666 = arguments.length;
switch (G__51666) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,ch);
} else {
var m__47423__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,ch);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,ch);
} else {
var m__47423__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,ch);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m);
} else {
var m__47423__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,state_map);
} else {
var m__47423__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,state_map);
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
var x__47422__auto__ = (((m == null))?null:m);
var m__47423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,m,mode);
} else {
var m__47423__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__47908__auto__ = [];
var len__47901__auto___51678 = arguments.length;
var i__47902__auto___51679 = (0);
while(true){
if((i__47902__auto___51679 < len__47901__auto___51678)){
args__47908__auto__.push((arguments[i__47902__auto___51679]));

var G__51680 = (i__47902__auto___51679 + (1));
i__47902__auto___51679 = G__51680;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((3) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__47909__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51672){
var map__51673 = p__51672;
var map__51673__$1 = ((((!((map__51673 == null)))?((((map__51673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51673):map__51673);
var opts = map__51673__$1;
var statearr_51675_51681 = state;
(statearr_51675_51681[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__51673,map__51673__$1,opts){
return (function (val){
var statearr_51676_51682 = state;
(statearr_51676_51682[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51673,map__51673__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_51677_51683 = state;
(statearr_51677_51683[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51668){
var G__51669 = cljs.core.first.call(null,seq51668);
var seq51668__$1 = cljs.core.next.call(null,seq51668);
var G__51670 = cljs.core.first.call(null,seq51668__$1);
var seq51668__$2 = cljs.core.next.call(null,seq51668__$1);
var G__51671 = cljs.core.first.call(null,seq51668__$2);
var seq51668__$3 = cljs.core.next.call(null,seq51668__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51669,G__51670,G__51671,seq51668__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51684 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta51685){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta51685 = meta51685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51686,meta51685__$1){
var self__ = this;
var _51686__$1 = this;
return (new cljs.core.async.t_cljs$core$async51684(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta51685__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51686){
var self__ = this;
var _51686__$1 = this;
return self__.meta51685;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta51685","meta51685",-585611708,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51684";

cljs.core.async.t_cljs$core$async51684.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async51684");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51684.
 */
cljs.core.async.__GT_t_cljs$core$async51684 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51684(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51685){
return (new cljs.core.async.t_cljs$core$async51684(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51685));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51684(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50803__auto___51848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51788){
var state_val_51789 = (state_51788[(1)]);
if((state_val_51789 === (7))){
var inst_51703 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
var statearr_51790_51849 = state_51788__$1;
(statearr_51790_51849[(2)] = inst_51703);

(statearr_51790_51849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (20))){
var inst_51715 = (state_51788[(7)]);
var state_51788__$1 = state_51788;
var statearr_51791_51850 = state_51788__$1;
(statearr_51791_51850[(2)] = inst_51715);

(statearr_51791_51850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (27))){
var state_51788__$1 = state_51788;
var statearr_51792_51851 = state_51788__$1;
(statearr_51792_51851[(2)] = null);

(statearr_51792_51851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (1))){
var inst_51690 = (state_51788[(8)]);
var inst_51690__$1 = calc_state.call(null);
var inst_51692 = (inst_51690__$1 == null);
var inst_51693 = cljs.core.not.call(null,inst_51692);
var state_51788__$1 = (function (){var statearr_51793 = state_51788;
(statearr_51793[(8)] = inst_51690__$1);

return statearr_51793;
})();
if(inst_51693){
var statearr_51794_51852 = state_51788__$1;
(statearr_51794_51852[(1)] = (2));

} else {
var statearr_51795_51853 = state_51788__$1;
(statearr_51795_51853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (24))){
var inst_51739 = (state_51788[(9)]);
var inst_51762 = (state_51788[(10)]);
var inst_51748 = (state_51788[(11)]);
var inst_51762__$1 = inst_51739.call(null,inst_51748);
var state_51788__$1 = (function (){var statearr_51796 = state_51788;
(statearr_51796[(10)] = inst_51762__$1);

return statearr_51796;
})();
if(cljs.core.truth_(inst_51762__$1)){
var statearr_51797_51854 = state_51788__$1;
(statearr_51797_51854[(1)] = (29));

} else {
var statearr_51798_51855 = state_51788__$1;
(statearr_51798_51855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (4))){
var inst_51706 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51706)){
var statearr_51799_51856 = state_51788__$1;
(statearr_51799_51856[(1)] = (8));

} else {
var statearr_51800_51857 = state_51788__$1;
(statearr_51800_51857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (15))){
var inst_51733 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51733)){
var statearr_51801_51858 = state_51788__$1;
(statearr_51801_51858[(1)] = (19));

} else {
var statearr_51802_51859 = state_51788__$1;
(statearr_51802_51859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (21))){
var inst_51738 = (state_51788[(12)]);
var inst_51738__$1 = (state_51788[(2)]);
var inst_51739 = cljs.core.get.call(null,inst_51738__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51740 = cljs.core.get.call(null,inst_51738__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51741 = cljs.core.get.call(null,inst_51738__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51788__$1 = (function (){var statearr_51803 = state_51788;
(statearr_51803[(12)] = inst_51738__$1);

(statearr_51803[(9)] = inst_51739);

(statearr_51803[(13)] = inst_51740);

return statearr_51803;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51788__$1,(22),inst_51741);
} else {
if((state_val_51789 === (31))){
var inst_51770 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51770)){
var statearr_51804_51860 = state_51788__$1;
(statearr_51804_51860[(1)] = (32));

} else {
var statearr_51805_51861 = state_51788__$1;
(statearr_51805_51861[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (32))){
var inst_51747 = (state_51788[(14)]);
var state_51788__$1 = state_51788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51788__$1,(35),out,inst_51747);
} else {
if((state_val_51789 === (33))){
var inst_51738 = (state_51788[(12)]);
var inst_51715 = inst_51738;
var state_51788__$1 = (function (){var statearr_51806 = state_51788;
(statearr_51806[(7)] = inst_51715);

return statearr_51806;
})();
var statearr_51807_51862 = state_51788__$1;
(statearr_51807_51862[(2)] = null);

(statearr_51807_51862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (13))){
var inst_51715 = (state_51788[(7)]);
var inst_51722 = inst_51715.cljs$lang$protocol_mask$partition0$;
var inst_51723 = (inst_51722 & (64));
var inst_51724 = inst_51715.cljs$core$ISeq$;
var inst_51725 = (cljs.core.PROTOCOL_SENTINEL === inst_51724);
var inst_51726 = (inst_51723) || (inst_51725);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51726)){
var statearr_51808_51863 = state_51788__$1;
(statearr_51808_51863[(1)] = (16));

} else {
var statearr_51809_51864 = state_51788__$1;
(statearr_51809_51864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (22))){
var inst_51747 = (state_51788[(14)]);
var inst_51748 = (state_51788[(11)]);
var inst_51746 = (state_51788[(2)]);
var inst_51747__$1 = cljs.core.nth.call(null,inst_51746,(0),null);
var inst_51748__$1 = cljs.core.nth.call(null,inst_51746,(1),null);
var inst_51749 = (inst_51747__$1 == null);
var inst_51750 = cljs.core._EQ_.call(null,inst_51748__$1,change);
var inst_51751 = (inst_51749) || (inst_51750);
var state_51788__$1 = (function (){var statearr_51810 = state_51788;
(statearr_51810[(14)] = inst_51747__$1);

(statearr_51810[(11)] = inst_51748__$1);

return statearr_51810;
})();
if(cljs.core.truth_(inst_51751)){
var statearr_51811_51865 = state_51788__$1;
(statearr_51811_51865[(1)] = (23));

} else {
var statearr_51812_51866 = state_51788__$1;
(statearr_51812_51866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (36))){
var inst_51738 = (state_51788[(12)]);
var inst_51715 = inst_51738;
var state_51788__$1 = (function (){var statearr_51813 = state_51788;
(statearr_51813[(7)] = inst_51715);

return statearr_51813;
})();
var statearr_51814_51867 = state_51788__$1;
(statearr_51814_51867[(2)] = null);

(statearr_51814_51867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (29))){
var inst_51762 = (state_51788[(10)]);
var state_51788__$1 = state_51788;
var statearr_51815_51868 = state_51788__$1;
(statearr_51815_51868[(2)] = inst_51762);

(statearr_51815_51868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (6))){
var state_51788__$1 = state_51788;
var statearr_51816_51869 = state_51788__$1;
(statearr_51816_51869[(2)] = false);

(statearr_51816_51869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (28))){
var inst_51758 = (state_51788[(2)]);
var inst_51759 = calc_state.call(null);
var inst_51715 = inst_51759;
var state_51788__$1 = (function (){var statearr_51817 = state_51788;
(statearr_51817[(7)] = inst_51715);

(statearr_51817[(15)] = inst_51758);

return statearr_51817;
})();
var statearr_51818_51870 = state_51788__$1;
(statearr_51818_51870[(2)] = null);

(statearr_51818_51870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (25))){
var inst_51784 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
var statearr_51819_51871 = state_51788__$1;
(statearr_51819_51871[(2)] = inst_51784);

(statearr_51819_51871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (34))){
var inst_51782 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
var statearr_51820_51872 = state_51788__$1;
(statearr_51820_51872[(2)] = inst_51782);

(statearr_51820_51872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (17))){
var state_51788__$1 = state_51788;
var statearr_51821_51873 = state_51788__$1;
(statearr_51821_51873[(2)] = false);

(statearr_51821_51873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (3))){
var state_51788__$1 = state_51788;
var statearr_51822_51874 = state_51788__$1;
(statearr_51822_51874[(2)] = false);

(statearr_51822_51874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (12))){
var inst_51786 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51788__$1,inst_51786);
} else {
if((state_val_51789 === (2))){
var inst_51690 = (state_51788[(8)]);
var inst_51695 = inst_51690.cljs$lang$protocol_mask$partition0$;
var inst_51696 = (inst_51695 & (64));
var inst_51697 = inst_51690.cljs$core$ISeq$;
var inst_51698 = (cljs.core.PROTOCOL_SENTINEL === inst_51697);
var inst_51699 = (inst_51696) || (inst_51698);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51699)){
var statearr_51823_51875 = state_51788__$1;
(statearr_51823_51875[(1)] = (5));

} else {
var statearr_51824_51876 = state_51788__$1;
(statearr_51824_51876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (23))){
var inst_51747 = (state_51788[(14)]);
var inst_51753 = (inst_51747 == null);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51753)){
var statearr_51825_51877 = state_51788__$1;
(statearr_51825_51877[(1)] = (26));

} else {
var statearr_51826_51878 = state_51788__$1;
(statearr_51826_51878[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (35))){
var inst_51773 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
if(cljs.core.truth_(inst_51773)){
var statearr_51827_51879 = state_51788__$1;
(statearr_51827_51879[(1)] = (36));

} else {
var statearr_51828_51880 = state_51788__$1;
(statearr_51828_51880[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (19))){
var inst_51715 = (state_51788[(7)]);
var inst_51735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51715);
var state_51788__$1 = state_51788;
var statearr_51829_51881 = state_51788__$1;
(statearr_51829_51881[(2)] = inst_51735);

(statearr_51829_51881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (11))){
var inst_51715 = (state_51788[(7)]);
var inst_51719 = (inst_51715 == null);
var inst_51720 = cljs.core.not.call(null,inst_51719);
var state_51788__$1 = state_51788;
if(inst_51720){
var statearr_51830_51882 = state_51788__$1;
(statearr_51830_51882[(1)] = (13));

} else {
var statearr_51831_51883 = state_51788__$1;
(statearr_51831_51883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (9))){
var inst_51690 = (state_51788[(8)]);
var state_51788__$1 = state_51788;
var statearr_51832_51884 = state_51788__$1;
(statearr_51832_51884[(2)] = inst_51690);

(statearr_51832_51884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (5))){
var state_51788__$1 = state_51788;
var statearr_51833_51885 = state_51788__$1;
(statearr_51833_51885[(2)] = true);

(statearr_51833_51885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (14))){
var state_51788__$1 = state_51788;
var statearr_51834_51886 = state_51788__$1;
(statearr_51834_51886[(2)] = false);

(statearr_51834_51886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (26))){
var inst_51748 = (state_51788[(11)]);
var inst_51755 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51748);
var state_51788__$1 = state_51788;
var statearr_51835_51887 = state_51788__$1;
(statearr_51835_51887[(2)] = inst_51755);

(statearr_51835_51887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (16))){
var state_51788__$1 = state_51788;
var statearr_51836_51888 = state_51788__$1;
(statearr_51836_51888[(2)] = true);

(statearr_51836_51888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (38))){
var inst_51778 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
var statearr_51837_51889 = state_51788__$1;
(statearr_51837_51889[(2)] = inst_51778);

(statearr_51837_51889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (30))){
var inst_51739 = (state_51788[(9)]);
var inst_51740 = (state_51788[(13)]);
var inst_51748 = (state_51788[(11)]);
var inst_51765 = cljs.core.empty_QMARK_.call(null,inst_51739);
var inst_51766 = inst_51740.call(null,inst_51748);
var inst_51767 = cljs.core.not.call(null,inst_51766);
var inst_51768 = (inst_51765) && (inst_51767);
var state_51788__$1 = state_51788;
var statearr_51838_51890 = state_51788__$1;
(statearr_51838_51890[(2)] = inst_51768);

(statearr_51838_51890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (10))){
var inst_51690 = (state_51788[(8)]);
var inst_51711 = (state_51788[(2)]);
var inst_51712 = cljs.core.get.call(null,inst_51711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51713 = cljs.core.get.call(null,inst_51711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51714 = cljs.core.get.call(null,inst_51711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51715 = inst_51690;
var state_51788__$1 = (function (){var statearr_51839 = state_51788;
(statearr_51839[(16)] = inst_51713);

(statearr_51839[(7)] = inst_51715);

(statearr_51839[(17)] = inst_51714);

(statearr_51839[(18)] = inst_51712);

return statearr_51839;
})();
var statearr_51840_51891 = state_51788__$1;
(statearr_51840_51891[(2)] = null);

(statearr_51840_51891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (18))){
var inst_51730 = (state_51788[(2)]);
var state_51788__$1 = state_51788;
var statearr_51841_51892 = state_51788__$1;
(statearr_51841_51892[(2)] = inst_51730);

(statearr_51841_51892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (37))){
var state_51788__$1 = state_51788;
var statearr_51842_51893 = state_51788__$1;
(statearr_51842_51893[(2)] = null);

(statearr_51842_51893[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51789 === (8))){
var inst_51690 = (state_51788[(8)]);
var inst_51708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51690);
var state_51788__$1 = state_51788;
var statearr_51843_51894 = state_51788__$1;
(statearr_51843_51894[(2)] = inst_51708);

(statearr_51843_51894[(1)] = (10));


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
});})(c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50715__auto__,c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50716__auto__ = null;
var cljs$core$async$mix_$_state_machine__50716__auto____0 = (function (){
var statearr_51844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51844[(0)] = cljs$core$async$mix_$_state_machine__50716__auto__);

(statearr_51844[(1)] = (1));

return statearr_51844;
});
var cljs$core$async$mix_$_state_machine__50716__auto____1 = (function (state_51788){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e51845){if((e51845 instanceof Object)){
var ex__50719__auto__ = e51845;
var statearr_51846_51895 = state_51788;
(statearr_51846_51895[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51896 = state_51788;
state_51788 = G__51896;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50716__auto__ = function(state_51788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50716__auto____1.call(this,state_51788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50716__auto____0;
cljs$core$async$mix_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50716__auto____1;
return cljs$core$async$mix_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50805__auto__ = (function (){var statearr_51847 = f__50804__auto__.call(null);
(statearr_51847[(6)] = c__50803__auto___51848);

return statearr_51847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___51848,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__47422__auto__ = (((p == null))?null:p);
var m__47423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__47423__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__47422__auto__ = (((p == null))?null:p);
var m__47423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,p,v,ch);
} else {
var m__47423__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51898 = arguments.length;
switch (G__51898) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__47422__auto__ = (((p == null))?null:p);
var m__47423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,p);
} else {
var m__47423__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,p);
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
var x__47422__auto__ = (((p == null))?null:p);
var m__47423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47422__auto__)]);
if(!((m__47423__auto__ == null))){
return m__47423__auto__.call(null,p,v);
} else {
var m__47423__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47423__auto____$1 == null))){
return m__47423__auto____$1.call(null,p,v);
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
var G__51902 = arguments.length;
switch (G__51902) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__46739__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__46739__auto__,mults){
return (function (p1__51900_SHARP_){
if(cljs.core.truth_(p1__51900_SHARP_.call(null,topic))){
return p1__51900_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51900_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__46739__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51903 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51904){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51904 = meta51904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51905,meta51904__$1){
var self__ = this;
var _51905__$1 = this;
return (new cljs.core.async.t_cljs$core$async51903(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51904__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51905){
var self__ = this;
var _51905__$1 = this;
return self__.meta51904;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51904","meta51904",-1181170490,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51903";

cljs.core.async.t_cljs$core$async51903.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async51903");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51903.
 */
cljs.core.async.__GT_t_cljs$core$async51903 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51904){
return (new cljs.core.async.t_cljs$core$async51903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51904));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51903(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50803__auto___52023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52023,mults,ensure_mult,p){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52023,mults,ensure_mult,p){
return (function (state_51977){
var state_val_51978 = (state_51977[(1)]);
if((state_val_51978 === (7))){
var inst_51973 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_51979_52024 = state_51977__$1;
(statearr_51979_52024[(2)] = inst_51973);

(statearr_51979_52024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (20))){
var state_51977__$1 = state_51977;
var statearr_51980_52025 = state_51977__$1;
(statearr_51980_52025[(2)] = null);

(statearr_51980_52025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (1))){
var state_51977__$1 = state_51977;
var statearr_51981_52026 = state_51977__$1;
(statearr_51981_52026[(2)] = null);

(statearr_51981_52026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (24))){
var inst_51956 = (state_51977[(7)]);
var inst_51965 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51956);
var state_51977__$1 = state_51977;
var statearr_51982_52027 = state_51977__$1;
(statearr_51982_52027[(2)] = inst_51965);

(statearr_51982_52027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (4))){
var inst_51908 = (state_51977[(8)]);
var inst_51908__$1 = (state_51977[(2)]);
var inst_51909 = (inst_51908__$1 == null);
var state_51977__$1 = (function (){var statearr_51983 = state_51977;
(statearr_51983[(8)] = inst_51908__$1);

return statearr_51983;
})();
if(cljs.core.truth_(inst_51909)){
var statearr_51984_52028 = state_51977__$1;
(statearr_51984_52028[(1)] = (5));

} else {
var statearr_51985_52029 = state_51977__$1;
(statearr_51985_52029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (15))){
var inst_51950 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_51986_52030 = state_51977__$1;
(statearr_51986_52030[(2)] = inst_51950);

(statearr_51986_52030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (21))){
var inst_51970 = (state_51977[(2)]);
var state_51977__$1 = (function (){var statearr_51987 = state_51977;
(statearr_51987[(9)] = inst_51970);

return statearr_51987;
})();
var statearr_51988_52031 = state_51977__$1;
(statearr_51988_52031[(2)] = null);

(statearr_51988_52031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (13))){
var inst_51932 = (state_51977[(10)]);
var inst_51934 = cljs.core.chunked_seq_QMARK_.call(null,inst_51932);
var state_51977__$1 = state_51977;
if(inst_51934){
var statearr_51989_52032 = state_51977__$1;
(statearr_51989_52032[(1)] = (16));

} else {
var statearr_51990_52033 = state_51977__$1;
(statearr_51990_52033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (22))){
var inst_51962 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
if(cljs.core.truth_(inst_51962)){
var statearr_51991_52034 = state_51977__$1;
(statearr_51991_52034[(1)] = (23));

} else {
var statearr_51992_52035 = state_51977__$1;
(statearr_51992_52035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (6))){
var inst_51958 = (state_51977[(11)]);
var inst_51908 = (state_51977[(8)]);
var inst_51956 = (state_51977[(7)]);
var inst_51956__$1 = topic_fn.call(null,inst_51908);
var inst_51957 = cljs.core.deref.call(null,mults);
var inst_51958__$1 = cljs.core.get.call(null,inst_51957,inst_51956__$1);
var state_51977__$1 = (function (){var statearr_51993 = state_51977;
(statearr_51993[(11)] = inst_51958__$1);

(statearr_51993[(7)] = inst_51956__$1);

return statearr_51993;
})();
if(cljs.core.truth_(inst_51958__$1)){
var statearr_51994_52036 = state_51977__$1;
(statearr_51994_52036[(1)] = (19));

} else {
var statearr_51995_52037 = state_51977__$1;
(statearr_51995_52037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (25))){
var inst_51967 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_51996_52038 = state_51977__$1;
(statearr_51996_52038[(2)] = inst_51967);

(statearr_51996_52038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (17))){
var inst_51932 = (state_51977[(10)]);
var inst_51941 = cljs.core.first.call(null,inst_51932);
var inst_51942 = cljs.core.async.muxch_STAR_.call(null,inst_51941);
var inst_51943 = cljs.core.async.close_BANG_.call(null,inst_51942);
var inst_51944 = cljs.core.next.call(null,inst_51932);
var inst_51918 = inst_51944;
var inst_51919 = null;
var inst_51920 = (0);
var inst_51921 = (0);
var state_51977__$1 = (function (){var statearr_51997 = state_51977;
(statearr_51997[(12)] = inst_51919);

(statearr_51997[(13)] = inst_51943);

(statearr_51997[(14)] = inst_51921);

(statearr_51997[(15)] = inst_51920);

(statearr_51997[(16)] = inst_51918);

return statearr_51997;
})();
var statearr_51998_52039 = state_51977__$1;
(statearr_51998_52039[(2)] = null);

(statearr_51998_52039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (3))){
var inst_51975 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51977__$1,inst_51975);
} else {
if((state_val_51978 === (12))){
var inst_51952 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_51999_52040 = state_51977__$1;
(statearr_51999_52040[(2)] = inst_51952);

(statearr_51999_52040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (2))){
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51977__$1,(4),ch);
} else {
if((state_val_51978 === (23))){
var state_51977__$1 = state_51977;
var statearr_52000_52041 = state_51977__$1;
(statearr_52000_52041[(2)] = null);

(statearr_52000_52041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (19))){
var inst_51958 = (state_51977[(11)]);
var inst_51908 = (state_51977[(8)]);
var inst_51960 = cljs.core.async.muxch_STAR_.call(null,inst_51958);
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51977__$1,(22),inst_51960,inst_51908);
} else {
if((state_val_51978 === (11))){
var inst_51932 = (state_51977[(10)]);
var inst_51918 = (state_51977[(16)]);
var inst_51932__$1 = cljs.core.seq.call(null,inst_51918);
var state_51977__$1 = (function (){var statearr_52001 = state_51977;
(statearr_52001[(10)] = inst_51932__$1);

return statearr_52001;
})();
if(inst_51932__$1){
var statearr_52002_52042 = state_51977__$1;
(statearr_52002_52042[(1)] = (13));

} else {
var statearr_52003_52043 = state_51977__$1;
(statearr_52003_52043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (9))){
var inst_51954 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_52004_52044 = state_51977__$1;
(statearr_52004_52044[(2)] = inst_51954);

(statearr_52004_52044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (5))){
var inst_51915 = cljs.core.deref.call(null,mults);
var inst_51916 = cljs.core.vals.call(null,inst_51915);
var inst_51917 = cljs.core.seq.call(null,inst_51916);
var inst_51918 = inst_51917;
var inst_51919 = null;
var inst_51920 = (0);
var inst_51921 = (0);
var state_51977__$1 = (function (){var statearr_52005 = state_51977;
(statearr_52005[(12)] = inst_51919);

(statearr_52005[(14)] = inst_51921);

(statearr_52005[(15)] = inst_51920);

(statearr_52005[(16)] = inst_51918);

return statearr_52005;
})();
var statearr_52006_52045 = state_51977__$1;
(statearr_52006_52045[(2)] = null);

(statearr_52006_52045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (14))){
var state_51977__$1 = state_51977;
var statearr_52010_52046 = state_51977__$1;
(statearr_52010_52046[(2)] = null);

(statearr_52010_52046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (16))){
var inst_51932 = (state_51977[(10)]);
var inst_51936 = cljs.core.chunk_first.call(null,inst_51932);
var inst_51937 = cljs.core.chunk_rest.call(null,inst_51932);
var inst_51938 = cljs.core.count.call(null,inst_51936);
var inst_51918 = inst_51937;
var inst_51919 = inst_51936;
var inst_51920 = inst_51938;
var inst_51921 = (0);
var state_51977__$1 = (function (){var statearr_52011 = state_51977;
(statearr_52011[(12)] = inst_51919);

(statearr_52011[(14)] = inst_51921);

(statearr_52011[(15)] = inst_51920);

(statearr_52011[(16)] = inst_51918);

return statearr_52011;
})();
var statearr_52012_52047 = state_51977__$1;
(statearr_52012_52047[(2)] = null);

(statearr_52012_52047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (10))){
var inst_51919 = (state_51977[(12)]);
var inst_51921 = (state_51977[(14)]);
var inst_51920 = (state_51977[(15)]);
var inst_51918 = (state_51977[(16)]);
var inst_51926 = cljs.core._nth.call(null,inst_51919,inst_51921);
var inst_51927 = cljs.core.async.muxch_STAR_.call(null,inst_51926);
var inst_51928 = cljs.core.async.close_BANG_.call(null,inst_51927);
var inst_51929 = (inst_51921 + (1));
var tmp52007 = inst_51919;
var tmp52008 = inst_51920;
var tmp52009 = inst_51918;
var inst_51918__$1 = tmp52009;
var inst_51919__$1 = tmp52007;
var inst_51920__$1 = tmp52008;
var inst_51921__$1 = inst_51929;
var state_51977__$1 = (function (){var statearr_52013 = state_51977;
(statearr_52013[(12)] = inst_51919__$1);

(statearr_52013[(17)] = inst_51928);

(statearr_52013[(14)] = inst_51921__$1);

(statearr_52013[(15)] = inst_51920__$1);

(statearr_52013[(16)] = inst_51918__$1);

return statearr_52013;
})();
var statearr_52014_52048 = state_51977__$1;
(statearr_52014_52048[(2)] = null);

(statearr_52014_52048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (18))){
var inst_51947 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_52015_52049 = state_51977__$1;
(statearr_52015_52049[(2)] = inst_51947);

(statearr_52015_52049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (8))){
var inst_51921 = (state_51977[(14)]);
var inst_51920 = (state_51977[(15)]);
var inst_51923 = (inst_51921 < inst_51920);
var inst_51924 = inst_51923;
var state_51977__$1 = state_51977;
if(cljs.core.truth_(inst_51924)){
var statearr_52016_52050 = state_51977__$1;
(statearr_52016_52050[(1)] = (10));

} else {
var statearr_52017_52051 = state_51977__$1;
(statearr_52017_52051[(1)] = (11));

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
});})(c__50803__auto___52023,mults,ensure_mult,p))
;
return ((function (switch__50715__auto__,c__50803__auto___52023,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52018[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52018[(1)] = (1));

return statearr_52018;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_51977){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_51977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52019){if((e52019 instanceof Object)){
var ex__50719__auto__ = e52019;
var statearr_52020_52052 = state_51977;
(statearr_52020_52052[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52053 = state_51977;
state_51977 = G__52053;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_51977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_51977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52023,mults,ensure_mult,p))
})();
var state__50805__auto__ = (function (){var statearr_52021 = f__50804__auto__.call(null);
(statearr_52021[(6)] = c__50803__auto___52023);

return statearr_52021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52023,mults,ensure_mult,p))
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
var G__52055 = arguments.length;
switch (G__52055) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52058 = arguments.length;
switch (G__52058) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52061 = arguments.length;
switch (G__52061) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__50803__auto___52128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52100){
var state_val_52101 = (state_52100[(1)]);
if((state_val_52101 === (7))){
var state_52100__$1 = state_52100;
var statearr_52102_52129 = state_52100__$1;
(statearr_52102_52129[(2)] = null);

(statearr_52102_52129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (1))){
var state_52100__$1 = state_52100;
var statearr_52103_52130 = state_52100__$1;
(statearr_52103_52130[(2)] = null);

(statearr_52103_52130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (4))){
var inst_52064 = (state_52100[(7)]);
var inst_52066 = (inst_52064 < cnt);
var state_52100__$1 = state_52100;
if(cljs.core.truth_(inst_52066)){
var statearr_52104_52131 = state_52100__$1;
(statearr_52104_52131[(1)] = (6));

} else {
var statearr_52105_52132 = state_52100__$1;
(statearr_52105_52132[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (15))){
var inst_52096 = (state_52100[(2)]);
var state_52100__$1 = state_52100;
var statearr_52106_52133 = state_52100__$1;
(statearr_52106_52133[(2)] = inst_52096);

(statearr_52106_52133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (13))){
var inst_52089 = cljs.core.async.close_BANG_.call(null,out);
var state_52100__$1 = state_52100;
var statearr_52107_52134 = state_52100__$1;
(statearr_52107_52134[(2)] = inst_52089);

(statearr_52107_52134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (6))){
var state_52100__$1 = state_52100;
var statearr_52108_52135 = state_52100__$1;
(statearr_52108_52135[(2)] = null);

(statearr_52108_52135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (3))){
var inst_52098 = (state_52100[(2)]);
var state_52100__$1 = state_52100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52100__$1,inst_52098);
} else {
if((state_val_52101 === (12))){
var inst_52086 = (state_52100[(8)]);
var inst_52086__$1 = (state_52100[(2)]);
var inst_52087 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52086__$1);
var state_52100__$1 = (function (){var statearr_52109 = state_52100;
(statearr_52109[(8)] = inst_52086__$1);

return statearr_52109;
})();
if(cljs.core.truth_(inst_52087)){
var statearr_52110_52136 = state_52100__$1;
(statearr_52110_52136[(1)] = (13));

} else {
var statearr_52111_52137 = state_52100__$1;
(statearr_52111_52137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (2))){
var inst_52063 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52064 = (0);
var state_52100__$1 = (function (){var statearr_52112 = state_52100;
(statearr_52112[(9)] = inst_52063);

(statearr_52112[(7)] = inst_52064);

return statearr_52112;
})();
var statearr_52113_52138 = state_52100__$1;
(statearr_52113_52138[(2)] = null);

(statearr_52113_52138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (11))){
var inst_52064 = (state_52100[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52100,(10),Object,null,(9));
var inst_52073 = chs__$1.call(null,inst_52064);
var inst_52074 = done.call(null,inst_52064);
var inst_52075 = cljs.core.async.take_BANG_.call(null,inst_52073,inst_52074);
var state_52100__$1 = state_52100;
var statearr_52114_52139 = state_52100__$1;
(statearr_52114_52139[(2)] = inst_52075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (9))){
var inst_52064 = (state_52100[(7)]);
var inst_52077 = (state_52100[(2)]);
var inst_52078 = (inst_52064 + (1));
var inst_52064__$1 = inst_52078;
var state_52100__$1 = (function (){var statearr_52115 = state_52100;
(statearr_52115[(10)] = inst_52077);

(statearr_52115[(7)] = inst_52064__$1);

return statearr_52115;
})();
var statearr_52116_52140 = state_52100__$1;
(statearr_52116_52140[(2)] = null);

(statearr_52116_52140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (5))){
var inst_52084 = (state_52100[(2)]);
var state_52100__$1 = (function (){var statearr_52117 = state_52100;
(statearr_52117[(11)] = inst_52084);

return statearr_52117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52100__$1,(12),dchan);
} else {
if((state_val_52101 === (14))){
var inst_52086 = (state_52100[(8)]);
var inst_52091 = cljs.core.apply.call(null,f,inst_52086);
var state_52100__$1 = state_52100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52100__$1,(16),out,inst_52091);
} else {
if((state_val_52101 === (16))){
var inst_52093 = (state_52100[(2)]);
var state_52100__$1 = (function (){var statearr_52118 = state_52100;
(statearr_52118[(12)] = inst_52093);

return statearr_52118;
})();
var statearr_52119_52141 = state_52100__$1;
(statearr_52119_52141[(2)] = null);

(statearr_52119_52141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (10))){
var inst_52068 = (state_52100[(2)]);
var inst_52069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52100__$1 = (function (){var statearr_52120 = state_52100;
(statearr_52120[(13)] = inst_52068);

return statearr_52120;
})();
var statearr_52121_52142 = state_52100__$1;
(statearr_52121_52142[(2)] = inst_52069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52100__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52101 === (8))){
var inst_52082 = (state_52100[(2)]);
var state_52100__$1 = state_52100;
var statearr_52122_52143 = state_52100__$1;
(statearr_52122_52143[(2)] = inst_52082);

(statearr_52122_52143[(1)] = (5));


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
});})(c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50715__auto__,c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52123[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52123[(1)] = (1));

return statearr_52123;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52100){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52124){if((e52124 instanceof Object)){
var ex__50719__auto__ = e52124;
var statearr_52125_52144 = state_52100;
(statearr_52125_52144[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52145 = state_52100;
state_52100 = G__52145;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50805__auto__ = (function (){var statearr_52126 = f__50804__auto__.call(null);
(statearr_52126[(6)] = c__50803__auto___52128);

return statearr_52126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52128,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__52148 = arguments.length;
switch (G__52148) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52202,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52202,out){
return (function (state_52180){
var state_val_52181 = (state_52180[(1)]);
if((state_val_52181 === (7))){
var inst_52160 = (state_52180[(7)]);
var inst_52159 = (state_52180[(8)]);
var inst_52159__$1 = (state_52180[(2)]);
var inst_52160__$1 = cljs.core.nth.call(null,inst_52159__$1,(0),null);
var inst_52161 = cljs.core.nth.call(null,inst_52159__$1,(1),null);
var inst_52162 = (inst_52160__$1 == null);
var state_52180__$1 = (function (){var statearr_52182 = state_52180;
(statearr_52182[(7)] = inst_52160__$1);

(statearr_52182[(8)] = inst_52159__$1);

(statearr_52182[(9)] = inst_52161);

return statearr_52182;
})();
if(cljs.core.truth_(inst_52162)){
var statearr_52183_52203 = state_52180__$1;
(statearr_52183_52203[(1)] = (8));

} else {
var statearr_52184_52204 = state_52180__$1;
(statearr_52184_52204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (1))){
var inst_52149 = cljs.core.vec.call(null,chs);
var inst_52150 = inst_52149;
var state_52180__$1 = (function (){var statearr_52185 = state_52180;
(statearr_52185[(10)] = inst_52150);

return statearr_52185;
})();
var statearr_52186_52205 = state_52180__$1;
(statearr_52186_52205[(2)] = null);

(statearr_52186_52205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (4))){
var inst_52150 = (state_52180[(10)]);
var state_52180__$1 = state_52180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52180__$1,(7),inst_52150);
} else {
if((state_val_52181 === (6))){
var inst_52176 = (state_52180[(2)]);
var state_52180__$1 = state_52180;
var statearr_52187_52206 = state_52180__$1;
(statearr_52187_52206[(2)] = inst_52176);

(statearr_52187_52206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (3))){
var inst_52178 = (state_52180[(2)]);
var state_52180__$1 = state_52180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52180__$1,inst_52178);
} else {
if((state_val_52181 === (2))){
var inst_52150 = (state_52180[(10)]);
var inst_52152 = cljs.core.count.call(null,inst_52150);
var inst_52153 = (inst_52152 > (0));
var state_52180__$1 = state_52180;
if(cljs.core.truth_(inst_52153)){
var statearr_52189_52207 = state_52180__$1;
(statearr_52189_52207[(1)] = (4));

} else {
var statearr_52190_52208 = state_52180__$1;
(statearr_52190_52208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (11))){
var inst_52150 = (state_52180[(10)]);
var inst_52169 = (state_52180[(2)]);
var tmp52188 = inst_52150;
var inst_52150__$1 = tmp52188;
var state_52180__$1 = (function (){var statearr_52191 = state_52180;
(statearr_52191[(10)] = inst_52150__$1);

(statearr_52191[(11)] = inst_52169);

return statearr_52191;
})();
var statearr_52192_52209 = state_52180__$1;
(statearr_52192_52209[(2)] = null);

(statearr_52192_52209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (9))){
var inst_52160 = (state_52180[(7)]);
var state_52180__$1 = state_52180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52180__$1,(11),out,inst_52160);
} else {
if((state_val_52181 === (5))){
var inst_52174 = cljs.core.async.close_BANG_.call(null,out);
var state_52180__$1 = state_52180;
var statearr_52193_52210 = state_52180__$1;
(statearr_52193_52210[(2)] = inst_52174);

(statearr_52193_52210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (10))){
var inst_52172 = (state_52180[(2)]);
var state_52180__$1 = state_52180;
var statearr_52194_52211 = state_52180__$1;
(statearr_52194_52211[(2)] = inst_52172);

(statearr_52194_52211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (8))){
var inst_52150 = (state_52180[(10)]);
var inst_52160 = (state_52180[(7)]);
var inst_52159 = (state_52180[(8)]);
var inst_52161 = (state_52180[(9)]);
var inst_52164 = (function (){var cs = inst_52150;
var vec__52155 = inst_52159;
var v = inst_52160;
var c = inst_52161;
return ((function (cs,vec__52155,v,c,inst_52150,inst_52160,inst_52159,inst_52161,state_val_52181,c__50803__auto___52202,out){
return (function (p1__52146_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52146_SHARP_);
});
;})(cs,vec__52155,v,c,inst_52150,inst_52160,inst_52159,inst_52161,state_val_52181,c__50803__auto___52202,out))
})();
var inst_52165 = cljs.core.filterv.call(null,inst_52164,inst_52150);
var inst_52150__$1 = inst_52165;
var state_52180__$1 = (function (){var statearr_52195 = state_52180;
(statearr_52195[(10)] = inst_52150__$1);

return statearr_52195;
})();
var statearr_52196_52212 = state_52180__$1;
(statearr_52196_52212[(2)] = null);

(statearr_52196_52212[(1)] = (2));


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
});})(c__50803__auto___52202,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52202,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52197[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52197[(1)] = (1));

return statearr_52197;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52180){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52198){if((e52198 instanceof Object)){
var ex__50719__auto__ = e52198;
var statearr_52199_52213 = state_52180;
(statearr_52199_52213[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52214 = state_52180;
state_52180 = G__52214;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52202,out))
})();
var state__50805__auto__ = (function (){var statearr_52200 = f__50804__auto__.call(null);
(statearr_52200[(6)] = c__50803__auto___52202);

return statearr_52200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52202,out))
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
var G__52216 = arguments.length;
switch (G__52216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52261,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52261,out){
return (function (state_52240){
var state_val_52241 = (state_52240[(1)]);
if((state_val_52241 === (7))){
var inst_52222 = (state_52240[(7)]);
var inst_52222__$1 = (state_52240[(2)]);
var inst_52223 = (inst_52222__$1 == null);
var inst_52224 = cljs.core.not.call(null,inst_52223);
var state_52240__$1 = (function (){var statearr_52242 = state_52240;
(statearr_52242[(7)] = inst_52222__$1);

return statearr_52242;
})();
if(inst_52224){
var statearr_52243_52262 = state_52240__$1;
(statearr_52243_52262[(1)] = (8));

} else {
var statearr_52244_52263 = state_52240__$1;
(statearr_52244_52263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (1))){
var inst_52217 = (0);
var state_52240__$1 = (function (){var statearr_52245 = state_52240;
(statearr_52245[(8)] = inst_52217);

return statearr_52245;
})();
var statearr_52246_52264 = state_52240__$1;
(statearr_52246_52264[(2)] = null);

(statearr_52246_52264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (4))){
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52240__$1,(7),ch);
} else {
if((state_val_52241 === (6))){
var inst_52235 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52247_52265 = state_52240__$1;
(statearr_52247_52265[(2)] = inst_52235);

(statearr_52247_52265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (3))){
var inst_52237 = (state_52240[(2)]);
var inst_52238 = cljs.core.async.close_BANG_.call(null,out);
var state_52240__$1 = (function (){var statearr_52248 = state_52240;
(statearr_52248[(9)] = inst_52237);

return statearr_52248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52240__$1,inst_52238);
} else {
if((state_val_52241 === (2))){
var inst_52217 = (state_52240[(8)]);
var inst_52219 = (inst_52217 < n);
var state_52240__$1 = state_52240;
if(cljs.core.truth_(inst_52219)){
var statearr_52249_52266 = state_52240__$1;
(statearr_52249_52266[(1)] = (4));

} else {
var statearr_52250_52267 = state_52240__$1;
(statearr_52250_52267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (11))){
var inst_52217 = (state_52240[(8)]);
var inst_52227 = (state_52240[(2)]);
var inst_52228 = (inst_52217 + (1));
var inst_52217__$1 = inst_52228;
var state_52240__$1 = (function (){var statearr_52251 = state_52240;
(statearr_52251[(8)] = inst_52217__$1);

(statearr_52251[(10)] = inst_52227);

return statearr_52251;
})();
var statearr_52252_52268 = state_52240__$1;
(statearr_52252_52268[(2)] = null);

(statearr_52252_52268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (9))){
var state_52240__$1 = state_52240;
var statearr_52253_52269 = state_52240__$1;
(statearr_52253_52269[(2)] = null);

(statearr_52253_52269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (5))){
var state_52240__$1 = state_52240;
var statearr_52254_52270 = state_52240__$1;
(statearr_52254_52270[(2)] = null);

(statearr_52254_52270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (10))){
var inst_52232 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52255_52271 = state_52240__$1;
(statearr_52255_52271[(2)] = inst_52232);

(statearr_52255_52271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (8))){
var inst_52222 = (state_52240[(7)]);
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52240__$1,(11),out,inst_52222);
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
});})(c__50803__auto___52261,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52261,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52256[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52256[(1)] = (1));

return statearr_52256;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52240){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52257){if((e52257 instanceof Object)){
var ex__50719__auto__ = e52257;
var statearr_52258_52272 = state_52240;
(statearr_52258_52272[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52273 = state_52240;
state_52240 = G__52273;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52261,out))
})();
var state__50805__auto__ = (function (){var statearr_52259 = f__50804__auto__.call(null);
(statearr_52259[(6)] = c__50803__auto___52261);

return statearr_52259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52261,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52275 = (function (f,ch,meta52276){
this.f = f;
this.ch = ch;
this.meta52276 = meta52276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52277,meta52276__$1){
var self__ = this;
var _52277__$1 = this;
return (new cljs.core.async.t_cljs$core$async52275(self__.f,self__.ch,meta52276__$1));
});

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52277){
var self__ = this;
var _52277__$1 = this;
return self__.meta52276;
});

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52278 = (function (f,ch,meta52276,_,fn1,meta52279){
this.f = f;
this.ch = ch;
this.meta52276 = meta52276;
this._ = _;
this.fn1 = fn1;
this.meta52279 = meta52279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52280,meta52279__$1){
var self__ = this;
var _52280__$1 = this;
return (new cljs.core.async.t_cljs$core$async52278(self__.f,self__.ch,self__.meta52276,self__._,self__.fn1,meta52279__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52280){
var self__ = this;
var _52280__$1 = this;
return self__.meta52279;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52274_SHARP_){
return f1.call(null,(((p1__52274_SHARP_ == null))?null:self__.f.call(null,p1__52274_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52276","meta52276",-183143023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52275","cljs.core.async/t_cljs$core$async52275",784214728,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52279","meta52279",1812410285,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52278";

cljs.core.async.t_cljs$core$async52278.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async52278");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52278.
 */
cljs.core.async.__GT_t_cljs$core$async52278 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52278(f__$1,ch__$1,meta52276__$1,___$2,fn1__$1,meta52279){
return (new cljs.core.async.t_cljs$core$async52278(f__$1,ch__$1,meta52276__$1,___$2,fn1__$1,meta52279));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52278(self__.f,self__.ch,self__.meta52276,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__46727__auto__ = ret;
if(cljs.core.truth_(and__46727__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__46727__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52276","meta52276",-183143023,null)], null);
});

cljs.core.async.t_cljs$core$async52275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52275";

cljs.core.async.t_cljs$core$async52275.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async52275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52275.
 */
cljs.core.async.__GT_t_cljs$core$async52275 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52275(f__$1,ch__$1,meta52276){
return (new cljs.core.async.t_cljs$core$async52275(f__$1,ch__$1,meta52276));
});

}

return (new cljs.core.async.t_cljs$core$async52275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52281 = (function (f,ch,meta52282){
this.f = f;
this.ch = ch;
this.meta52282 = meta52282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52283,meta52282__$1){
var self__ = this;
var _52283__$1 = this;
return (new cljs.core.async.t_cljs$core$async52281(self__.f,self__.ch,meta52282__$1));
});

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52283){
var self__ = this;
var _52283__$1 = this;
return self__.meta52282;
});

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52282","meta52282",2022821615,null)], null);
});

cljs.core.async.t_cljs$core$async52281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52281";

cljs.core.async.t_cljs$core$async52281.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async52281");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52281.
 */
cljs.core.async.__GT_t_cljs$core$async52281 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52281(f__$1,ch__$1,meta52282){
return (new cljs.core.async.t_cljs$core$async52281(f__$1,ch__$1,meta52282));
});

}

return (new cljs.core.async.t_cljs$core$async52281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52284 = (function (p,ch,meta52285){
this.p = p;
this.ch = ch;
this.meta52285 = meta52285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52286,meta52285__$1){
var self__ = this;
var _52286__$1 = this;
return (new cljs.core.async.t_cljs$core$async52284(self__.p,self__.ch,meta52285__$1));
});

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52286){
var self__ = this;
var _52286__$1 = this;
return self__.meta52285;
});

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52285","meta52285",463958717,null)], null);
});

cljs.core.async.t_cljs$core$async52284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52284";

cljs.core.async.t_cljs$core$async52284.cljs$lang$ctorPrWriter = (function (this__47364__auto__,writer__47365__auto__,opt__47366__auto__){
return cljs.core._write.call(null,writer__47365__auto__,"cljs.core.async/t_cljs$core$async52284");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52284.
 */
cljs.core.async.__GT_t_cljs$core$async52284 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52284(p__$1,ch__$1,meta52285){
return (new cljs.core.async.t_cljs$core$async52284(p__$1,ch__$1,meta52285));
});

}

return (new cljs.core.async.t_cljs$core$async52284(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52288 = arguments.length;
switch (G__52288) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52328,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52328,out){
return (function (state_52309){
var state_val_52310 = (state_52309[(1)]);
if((state_val_52310 === (7))){
var inst_52305 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52311_52329 = state_52309__$1;
(statearr_52311_52329[(2)] = inst_52305);

(statearr_52311_52329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (1))){
var state_52309__$1 = state_52309;
var statearr_52312_52330 = state_52309__$1;
(statearr_52312_52330[(2)] = null);

(statearr_52312_52330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (4))){
var inst_52291 = (state_52309[(7)]);
var inst_52291__$1 = (state_52309[(2)]);
var inst_52292 = (inst_52291__$1 == null);
var state_52309__$1 = (function (){var statearr_52313 = state_52309;
(statearr_52313[(7)] = inst_52291__$1);

return statearr_52313;
})();
if(cljs.core.truth_(inst_52292)){
var statearr_52314_52331 = state_52309__$1;
(statearr_52314_52331[(1)] = (5));

} else {
var statearr_52315_52332 = state_52309__$1;
(statearr_52315_52332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (6))){
var inst_52291 = (state_52309[(7)]);
var inst_52296 = p.call(null,inst_52291);
var state_52309__$1 = state_52309;
if(cljs.core.truth_(inst_52296)){
var statearr_52316_52333 = state_52309__$1;
(statearr_52316_52333[(1)] = (8));

} else {
var statearr_52317_52334 = state_52309__$1;
(statearr_52317_52334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (3))){
var inst_52307 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52309__$1,inst_52307);
} else {
if((state_val_52310 === (2))){
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52309__$1,(4),ch);
} else {
if((state_val_52310 === (11))){
var inst_52299 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52318_52335 = state_52309__$1;
(statearr_52318_52335[(2)] = inst_52299);

(statearr_52318_52335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (9))){
var state_52309__$1 = state_52309;
var statearr_52319_52336 = state_52309__$1;
(statearr_52319_52336[(2)] = null);

(statearr_52319_52336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (5))){
var inst_52294 = cljs.core.async.close_BANG_.call(null,out);
var state_52309__$1 = state_52309;
var statearr_52320_52337 = state_52309__$1;
(statearr_52320_52337[(2)] = inst_52294);

(statearr_52320_52337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (10))){
var inst_52302 = (state_52309[(2)]);
var state_52309__$1 = (function (){var statearr_52321 = state_52309;
(statearr_52321[(8)] = inst_52302);

return statearr_52321;
})();
var statearr_52322_52338 = state_52309__$1;
(statearr_52322_52338[(2)] = null);

(statearr_52322_52338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (8))){
var inst_52291 = (state_52309[(7)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52309__$1,(11),out,inst_52291);
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
});})(c__50803__auto___52328,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52328,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52323 = [null,null,null,null,null,null,null,null,null];
(statearr_52323[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52323[(1)] = (1));

return statearr_52323;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52309){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52324){if((e52324 instanceof Object)){
var ex__50719__auto__ = e52324;
var statearr_52325_52339 = state_52309;
(statearr_52325_52339[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52340 = state_52309;
state_52309 = G__52340;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52328,out))
})();
var state__50805__auto__ = (function (){var statearr_52326 = f__50804__auto__.call(null);
(statearr_52326[(6)] = c__50803__auto___52328);

return statearr_52326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52328,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52342 = arguments.length;
switch (G__52342) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_52405){
var state_val_52406 = (state_52405[(1)]);
if((state_val_52406 === (7))){
var inst_52401 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
var statearr_52407_52445 = state_52405__$1;
(statearr_52407_52445[(2)] = inst_52401);

(statearr_52407_52445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (20))){
var inst_52371 = (state_52405[(7)]);
var inst_52382 = (state_52405[(2)]);
var inst_52383 = cljs.core.next.call(null,inst_52371);
var inst_52357 = inst_52383;
var inst_52358 = null;
var inst_52359 = (0);
var inst_52360 = (0);
var state_52405__$1 = (function (){var statearr_52408 = state_52405;
(statearr_52408[(8)] = inst_52358);

(statearr_52408[(9)] = inst_52360);

(statearr_52408[(10)] = inst_52357);

(statearr_52408[(11)] = inst_52382);

(statearr_52408[(12)] = inst_52359);

return statearr_52408;
})();
var statearr_52409_52446 = state_52405__$1;
(statearr_52409_52446[(2)] = null);

(statearr_52409_52446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (1))){
var state_52405__$1 = state_52405;
var statearr_52410_52447 = state_52405__$1;
(statearr_52410_52447[(2)] = null);

(statearr_52410_52447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (4))){
var inst_52346 = (state_52405[(13)]);
var inst_52346__$1 = (state_52405[(2)]);
var inst_52347 = (inst_52346__$1 == null);
var state_52405__$1 = (function (){var statearr_52411 = state_52405;
(statearr_52411[(13)] = inst_52346__$1);

return statearr_52411;
})();
if(cljs.core.truth_(inst_52347)){
var statearr_52412_52448 = state_52405__$1;
(statearr_52412_52448[(1)] = (5));

} else {
var statearr_52413_52449 = state_52405__$1;
(statearr_52413_52449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (15))){
var state_52405__$1 = state_52405;
var statearr_52417_52450 = state_52405__$1;
(statearr_52417_52450[(2)] = null);

(statearr_52417_52450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (21))){
var state_52405__$1 = state_52405;
var statearr_52418_52451 = state_52405__$1;
(statearr_52418_52451[(2)] = null);

(statearr_52418_52451[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (13))){
var inst_52358 = (state_52405[(8)]);
var inst_52360 = (state_52405[(9)]);
var inst_52357 = (state_52405[(10)]);
var inst_52359 = (state_52405[(12)]);
var inst_52367 = (state_52405[(2)]);
var inst_52368 = (inst_52360 + (1));
var tmp52414 = inst_52358;
var tmp52415 = inst_52357;
var tmp52416 = inst_52359;
var inst_52357__$1 = tmp52415;
var inst_52358__$1 = tmp52414;
var inst_52359__$1 = tmp52416;
var inst_52360__$1 = inst_52368;
var state_52405__$1 = (function (){var statearr_52419 = state_52405;
(statearr_52419[(8)] = inst_52358__$1);

(statearr_52419[(14)] = inst_52367);

(statearr_52419[(9)] = inst_52360__$1);

(statearr_52419[(10)] = inst_52357__$1);

(statearr_52419[(12)] = inst_52359__$1);

return statearr_52419;
})();
var statearr_52420_52452 = state_52405__$1;
(statearr_52420_52452[(2)] = null);

(statearr_52420_52452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (22))){
var state_52405__$1 = state_52405;
var statearr_52421_52453 = state_52405__$1;
(statearr_52421_52453[(2)] = null);

(statearr_52421_52453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (6))){
var inst_52346 = (state_52405[(13)]);
var inst_52355 = f.call(null,inst_52346);
var inst_52356 = cljs.core.seq.call(null,inst_52355);
var inst_52357 = inst_52356;
var inst_52358 = null;
var inst_52359 = (0);
var inst_52360 = (0);
var state_52405__$1 = (function (){var statearr_52422 = state_52405;
(statearr_52422[(8)] = inst_52358);

(statearr_52422[(9)] = inst_52360);

(statearr_52422[(10)] = inst_52357);

(statearr_52422[(12)] = inst_52359);

return statearr_52422;
})();
var statearr_52423_52454 = state_52405__$1;
(statearr_52423_52454[(2)] = null);

(statearr_52423_52454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (17))){
var inst_52371 = (state_52405[(7)]);
var inst_52375 = cljs.core.chunk_first.call(null,inst_52371);
var inst_52376 = cljs.core.chunk_rest.call(null,inst_52371);
var inst_52377 = cljs.core.count.call(null,inst_52375);
var inst_52357 = inst_52376;
var inst_52358 = inst_52375;
var inst_52359 = inst_52377;
var inst_52360 = (0);
var state_52405__$1 = (function (){var statearr_52424 = state_52405;
(statearr_52424[(8)] = inst_52358);

(statearr_52424[(9)] = inst_52360);

(statearr_52424[(10)] = inst_52357);

(statearr_52424[(12)] = inst_52359);

return statearr_52424;
})();
var statearr_52425_52455 = state_52405__$1;
(statearr_52425_52455[(2)] = null);

(statearr_52425_52455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (3))){
var inst_52403 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52405__$1,inst_52403);
} else {
if((state_val_52406 === (12))){
var inst_52391 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
var statearr_52426_52456 = state_52405__$1;
(statearr_52426_52456[(2)] = inst_52391);

(statearr_52426_52456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (2))){
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52405__$1,(4),in$);
} else {
if((state_val_52406 === (23))){
var inst_52399 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
var statearr_52427_52457 = state_52405__$1;
(statearr_52427_52457[(2)] = inst_52399);

(statearr_52427_52457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (19))){
var inst_52386 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
var statearr_52428_52458 = state_52405__$1;
(statearr_52428_52458[(2)] = inst_52386);

(statearr_52428_52458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (11))){
var inst_52357 = (state_52405[(10)]);
var inst_52371 = (state_52405[(7)]);
var inst_52371__$1 = cljs.core.seq.call(null,inst_52357);
var state_52405__$1 = (function (){var statearr_52429 = state_52405;
(statearr_52429[(7)] = inst_52371__$1);

return statearr_52429;
})();
if(inst_52371__$1){
var statearr_52430_52459 = state_52405__$1;
(statearr_52430_52459[(1)] = (14));

} else {
var statearr_52431_52460 = state_52405__$1;
(statearr_52431_52460[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (9))){
var inst_52393 = (state_52405[(2)]);
var inst_52394 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52405__$1 = (function (){var statearr_52432 = state_52405;
(statearr_52432[(15)] = inst_52393);

return statearr_52432;
})();
if(cljs.core.truth_(inst_52394)){
var statearr_52433_52461 = state_52405__$1;
(statearr_52433_52461[(1)] = (21));

} else {
var statearr_52434_52462 = state_52405__$1;
(statearr_52434_52462[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (5))){
var inst_52349 = cljs.core.async.close_BANG_.call(null,out);
var state_52405__$1 = state_52405;
var statearr_52435_52463 = state_52405__$1;
(statearr_52435_52463[(2)] = inst_52349);

(statearr_52435_52463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (14))){
var inst_52371 = (state_52405[(7)]);
var inst_52373 = cljs.core.chunked_seq_QMARK_.call(null,inst_52371);
var state_52405__$1 = state_52405;
if(inst_52373){
var statearr_52436_52464 = state_52405__$1;
(statearr_52436_52464[(1)] = (17));

} else {
var statearr_52437_52465 = state_52405__$1;
(statearr_52437_52465[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (16))){
var inst_52389 = (state_52405[(2)]);
var state_52405__$1 = state_52405;
var statearr_52438_52466 = state_52405__$1;
(statearr_52438_52466[(2)] = inst_52389);

(statearr_52438_52466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52406 === (10))){
var inst_52358 = (state_52405[(8)]);
var inst_52360 = (state_52405[(9)]);
var inst_52365 = cljs.core._nth.call(null,inst_52358,inst_52360);
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52405__$1,(13),out,inst_52365);
} else {
if((state_val_52406 === (18))){
var inst_52371 = (state_52405[(7)]);
var inst_52380 = cljs.core.first.call(null,inst_52371);
var state_52405__$1 = state_52405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52405__$1,(20),out,inst_52380);
} else {
if((state_val_52406 === (8))){
var inst_52360 = (state_52405[(9)]);
var inst_52359 = (state_52405[(12)]);
var inst_52362 = (inst_52360 < inst_52359);
var inst_52363 = inst_52362;
var state_52405__$1 = state_52405;
if(cljs.core.truth_(inst_52363)){
var statearr_52439_52467 = state_52405__$1;
(statearr_52439_52467[(1)] = (10));

} else {
var statearr_52440_52468 = state_52405__$1;
(statearr_52440_52468[(1)] = (11));

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
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____0 = (function (){
var statearr_52441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52441[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__);

(statearr_52441[(1)] = (1));

return statearr_52441;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____1 = (function (state_52405){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52442){if((e52442 instanceof Object)){
var ex__50719__auto__ = e52442;
var statearr_52443_52469 = state_52405;
(statearr_52443_52469[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52470 = state_52405;
state_52405 = G__52470;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__ = function(state_52405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____1.call(this,state_52405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50716__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_52444 = f__50804__auto__.call(null);
(statearr_52444[(6)] = c__50803__auto__);

return statearr_52444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52472 = arguments.length;
switch (G__52472) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52475 = arguments.length;
switch (G__52475) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__52478 = arguments.length;
switch (G__52478) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52525,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52525,out){
return (function (state_52502){
var state_val_52503 = (state_52502[(1)]);
if((state_val_52503 === (7))){
var inst_52497 = (state_52502[(2)]);
var state_52502__$1 = state_52502;
var statearr_52504_52526 = state_52502__$1;
(statearr_52504_52526[(2)] = inst_52497);

(statearr_52504_52526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (1))){
var inst_52479 = null;
var state_52502__$1 = (function (){var statearr_52505 = state_52502;
(statearr_52505[(7)] = inst_52479);

return statearr_52505;
})();
var statearr_52506_52527 = state_52502__$1;
(statearr_52506_52527[(2)] = null);

(statearr_52506_52527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (4))){
var inst_52482 = (state_52502[(8)]);
var inst_52482__$1 = (state_52502[(2)]);
var inst_52483 = (inst_52482__$1 == null);
var inst_52484 = cljs.core.not.call(null,inst_52483);
var state_52502__$1 = (function (){var statearr_52507 = state_52502;
(statearr_52507[(8)] = inst_52482__$1);

return statearr_52507;
})();
if(inst_52484){
var statearr_52508_52528 = state_52502__$1;
(statearr_52508_52528[(1)] = (5));

} else {
var statearr_52509_52529 = state_52502__$1;
(statearr_52509_52529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (6))){
var state_52502__$1 = state_52502;
var statearr_52510_52530 = state_52502__$1;
(statearr_52510_52530[(2)] = null);

(statearr_52510_52530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (3))){
var inst_52499 = (state_52502[(2)]);
var inst_52500 = cljs.core.async.close_BANG_.call(null,out);
var state_52502__$1 = (function (){var statearr_52511 = state_52502;
(statearr_52511[(9)] = inst_52499);

return statearr_52511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52502__$1,inst_52500);
} else {
if((state_val_52503 === (2))){
var state_52502__$1 = state_52502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52502__$1,(4),ch);
} else {
if((state_val_52503 === (11))){
var inst_52482 = (state_52502[(8)]);
var inst_52491 = (state_52502[(2)]);
var inst_52479 = inst_52482;
var state_52502__$1 = (function (){var statearr_52512 = state_52502;
(statearr_52512[(10)] = inst_52491);

(statearr_52512[(7)] = inst_52479);

return statearr_52512;
})();
var statearr_52513_52531 = state_52502__$1;
(statearr_52513_52531[(2)] = null);

(statearr_52513_52531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (9))){
var inst_52482 = (state_52502[(8)]);
var state_52502__$1 = state_52502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52502__$1,(11),out,inst_52482);
} else {
if((state_val_52503 === (5))){
var inst_52482 = (state_52502[(8)]);
var inst_52479 = (state_52502[(7)]);
var inst_52486 = cljs.core._EQ_.call(null,inst_52482,inst_52479);
var state_52502__$1 = state_52502;
if(inst_52486){
var statearr_52515_52532 = state_52502__$1;
(statearr_52515_52532[(1)] = (8));

} else {
var statearr_52516_52533 = state_52502__$1;
(statearr_52516_52533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (10))){
var inst_52494 = (state_52502[(2)]);
var state_52502__$1 = state_52502;
var statearr_52517_52534 = state_52502__$1;
(statearr_52517_52534[(2)] = inst_52494);

(statearr_52517_52534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52503 === (8))){
var inst_52479 = (state_52502[(7)]);
var tmp52514 = inst_52479;
var inst_52479__$1 = tmp52514;
var state_52502__$1 = (function (){var statearr_52518 = state_52502;
(statearr_52518[(7)] = inst_52479__$1);

return statearr_52518;
})();
var statearr_52519_52535 = state_52502__$1;
(statearr_52519_52535[(2)] = null);

(statearr_52519_52535[(1)] = (2));


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
});})(c__50803__auto___52525,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52525,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52520[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52520[(1)] = (1));

return statearr_52520;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52502){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52521){if((e52521 instanceof Object)){
var ex__50719__auto__ = e52521;
var statearr_52522_52536 = state_52502;
(statearr_52522_52536[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52537 = state_52502;
state_52502 = G__52537;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52525,out))
})();
var state__50805__auto__ = (function (){var statearr_52523 = f__50804__auto__.call(null);
(statearr_52523[(6)] = c__50803__auto___52525);

return statearr_52523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52525,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52539 = arguments.length;
switch (G__52539) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52605,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52605,out){
return (function (state_52577){
var state_val_52578 = (state_52577[(1)]);
if((state_val_52578 === (7))){
var inst_52573 = (state_52577[(2)]);
var state_52577__$1 = state_52577;
var statearr_52579_52606 = state_52577__$1;
(statearr_52579_52606[(2)] = inst_52573);

(statearr_52579_52606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (1))){
var inst_52540 = (new Array(n));
var inst_52541 = inst_52540;
var inst_52542 = (0);
var state_52577__$1 = (function (){var statearr_52580 = state_52577;
(statearr_52580[(7)] = inst_52541);

(statearr_52580[(8)] = inst_52542);

return statearr_52580;
})();
var statearr_52581_52607 = state_52577__$1;
(statearr_52581_52607[(2)] = null);

(statearr_52581_52607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (4))){
var inst_52545 = (state_52577[(9)]);
var inst_52545__$1 = (state_52577[(2)]);
var inst_52546 = (inst_52545__$1 == null);
var inst_52547 = cljs.core.not.call(null,inst_52546);
var state_52577__$1 = (function (){var statearr_52582 = state_52577;
(statearr_52582[(9)] = inst_52545__$1);

return statearr_52582;
})();
if(inst_52547){
var statearr_52583_52608 = state_52577__$1;
(statearr_52583_52608[(1)] = (5));

} else {
var statearr_52584_52609 = state_52577__$1;
(statearr_52584_52609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (15))){
var inst_52567 = (state_52577[(2)]);
var state_52577__$1 = state_52577;
var statearr_52585_52610 = state_52577__$1;
(statearr_52585_52610[(2)] = inst_52567);

(statearr_52585_52610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (13))){
var state_52577__$1 = state_52577;
var statearr_52586_52611 = state_52577__$1;
(statearr_52586_52611[(2)] = null);

(statearr_52586_52611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (6))){
var inst_52542 = (state_52577[(8)]);
var inst_52563 = (inst_52542 > (0));
var state_52577__$1 = state_52577;
if(cljs.core.truth_(inst_52563)){
var statearr_52587_52612 = state_52577__$1;
(statearr_52587_52612[(1)] = (12));

} else {
var statearr_52588_52613 = state_52577__$1;
(statearr_52588_52613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (3))){
var inst_52575 = (state_52577[(2)]);
var state_52577__$1 = state_52577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52577__$1,inst_52575);
} else {
if((state_val_52578 === (12))){
var inst_52541 = (state_52577[(7)]);
var inst_52565 = cljs.core.vec.call(null,inst_52541);
var state_52577__$1 = state_52577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52577__$1,(15),out,inst_52565);
} else {
if((state_val_52578 === (2))){
var state_52577__$1 = state_52577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52577__$1,(4),ch);
} else {
if((state_val_52578 === (11))){
var inst_52557 = (state_52577[(2)]);
var inst_52558 = (new Array(n));
var inst_52541 = inst_52558;
var inst_52542 = (0);
var state_52577__$1 = (function (){var statearr_52589 = state_52577;
(statearr_52589[(7)] = inst_52541);

(statearr_52589[(10)] = inst_52557);

(statearr_52589[(8)] = inst_52542);

return statearr_52589;
})();
var statearr_52590_52614 = state_52577__$1;
(statearr_52590_52614[(2)] = null);

(statearr_52590_52614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (9))){
var inst_52541 = (state_52577[(7)]);
var inst_52555 = cljs.core.vec.call(null,inst_52541);
var state_52577__$1 = state_52577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52577__$1,(11),out,inst_52555);
} else {
if((state_val_52578 === (5))){
var inst_52545 = (state_52577[(9)]);
var inst_52541 = (state_52577[(7)]);
var inst_52550 = (state_52577[(11)]);
var inst_52542 = (state_52577[(8)]);
var inst_52549 = (inst_52541[inst_52542] = inst_52545);
var inst_52550__$1 = (inst_52542 + (1));
var inst_52551 = (inst_52550__$1 < n);
var state_52577__$1 = (function (){var statearr_52591 = state_52577;
(statearr_52591[(11)] = inst_52550__$1);

(statearr_52591[(12)] = inst_52549);

return statearr_52591;
})();
if(cljs.core.truth_(inst_52551)){
var statearr_52592_52615 = state_52577__$1;
(statearr_52592_52615[(1)] = (8));

} else {
var statearr_52593_52616 = state_52577__$1;
(statearr_52593_52616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (14))){
var inst_52570 = (state_52577[(2)]);
var inst_52571 = cljs.core.async.close_BANG_.call(null,out);
var state_52577__$1 = (function (){var statearr_52595 = state_52577;
(statearr_52595[(13)] = inst_52570);

return statearr_52595;
})();
var statearr_52596_52617 = state_52577__$1;
(statearr_52596_52617[(2)] = inst_52571);

(statearr_52596_52617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (10))){
var inst_52561 = (state_52577[(2)]);
var state_52577__$1 = state_52577;
var statearr_52597_52618 = state_52577__$1;
(statearr_52597_52618[(2)] = inst_52561);

(statearr_52597_52618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52578 === (8))){
var inst_52541 = (state_52577[(7)]);
var inst_52550 = (state_52577[(11)]);
var tmp52594 = inst_52541;
var inst_52541__$1 = tmp52594;
var inst_52542 = inst_52550;
var state_52577__$1 = (function (){var statearr_52598 = state_52577;
(statearr_52598[(7)] = inst_52541__$1);

(statearr_52598[(8)] = inst_52542);

return statearr_52598;
})();
var statearr_52599_52619 = state_52577__$1;
(statearr_52599_52619[(2)] = null);

(statearr_52599_52619[(1)] = (2));


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
});})(c__50803__auto___52605,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52605,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52600[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52600[(1)] = (1));

return statearr_52600;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52577){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52601){if((e52601 instanceof Object)){
var ex__50719__auto__ = e52601;
var statearr_52602_52620 = state_52577;
(statearr_52602_52620[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52621 = state_52577;
state_52577 = G__52621;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52605,out))
})();
var state__50805__auto__ = (function (){var statearr_52603 = f__50804__auto__.call(null);
(statearr_52603[(6)] = c__50803__auto___52605);

return statearr_52603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52623 = arguments.length;
switch (G__52623) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50803__auto___52693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52693,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52693,out){
return (function (state_52665){
var state_val_52666 = (state_52665[(1)]);
if((state_val_52666 === (7))){
var inst_52661 = (state_52665[(2)]);
var state_52665__$1 = state_52665;
var statearr_52667_52694 = state_52665__$1;
(statearr_52667_52694[(2)] = inst_52661);

(statearr_52667_52694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (1))){
var inst_52624 = [];
var inst_52625 = inst_52624;
var inst_52626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52665__$1 = (function (){var statearr_52668 = state_52665;
(statearr_52668[(7)] = inst_52625);

(statearr_52668[(8)] = inst_52626);

return statearr_52668;
})();
var statearr_52669_52695 = state_52665__$1;
(statearr_52669_52695[(2)] = null);

(statearr_52669_52695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (4))){
var inst_52629 = (state_52665[(9)]);
var inst_52629__$1 = (state_52665[(2)]);
var inst_52630 = (inst_52629__$1 == null);
var inst_52631 = cljs.core.not.call(null,inst_52630);
var state_52665__$1 = (function (){var statearr_52670 = state_52665;
(statearr_52670[(9)] = inst_52629__$1);

return statearr_52670;
})();
if(inst_52631){
var statearr_52671_52696 = state_52665__$1;
(statearr_52671_52696[(1)] = (5));

} else {
var statearr_52672_52697 = state_52665__$1;
(statearr_52672_52697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (15))){
var inst_52655 = (state_52665[(2)]);
var state_52665__$1 = state_52665;
var statearr_52673_52698 = state_52665__$1;
(statearr_52673_52698[(2)] = inst_52655);

(statearr_52673_52698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (13))){
var state_52665__$1 = state_52665;
var statearr_52674_52699 = state_52665__$1;
(statearr_52674_52699[(2)] = null);

(statearr_52674_52699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (6))){
var inst_52625 = (state_52665[(7)]);
var inst_52650 = inst_52625.length;
var inst_52651 = (inst_52650 > (0));
var state_52665__$1 = state_52665;
if(cljs.core.truth_(inst_52651)){
var statearr_52675_52700 = state_52665__$1;
(statearr_52675_52700[(1)] = (12));

} else {
var statearr_52676_52701 = state_52665__$1;
(statearr_52676_52701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (3))){
var inst_52663 = (state_52665[(2)]);
var state_52665__$1 = state_52665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52665__$1,inst_52663);
} else {
if((state_val_52666 === (12))){
var inst_52625 = (state_52665[(7)]);
var inst_52653 = cljs.core.vec.call(null,inst_52625);
var state_52665__$1 = state_52665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52665__$1,(15),out,inst_52653);
} else {
if((state_val_52666 === (2))){
var state_52665__$1 = state_52665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52665__$1,(4),ch);
} else {
if((state_val_52666 === (11))){
var inst_52629 = (state_52665[(9)]);
var inst_52633 = (state_52665[(10)]);
var inst_52643 = (state_52665[(2)]);
var inst_52644 = [];
var inst_52645 = inst_52644.push(inst_52629);
var inst_52625 = inst_52644;
var inst_52626 = inst_52633;
var state_52665__$1 = (function (){var statearr_52677 = state_52665;
(statearr_52677[(11)] = inst_52643);

(statearr_52677[(7)] = inst_52625);

(statearr_52677[(8)] = inst_52626);

(statearr_52677[(12)] = inst_52645);

return statearr_52677;
})();
var statearr_52678_52702 = state_52665__$1;
(statearr_52678_52702[(2)] = null);

(statearr_52678_52702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (9))){
var inst_52625 = (state_52665[(7)]);
var inst_52641 = cljs.core.vec.call(null,inst_52625);
var state_52665__$1 = state_52665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52665__$1,(11),out,inst_52641);
} else {
if((state_val_52666 === (5))){
var inst_52629 = (state_52665[(9)]);
var inst_52633 = (state_52665[(10)]);
var inst_52626 = (state_52665[(8)]);
var inst_52633__$1 = f.call(null,inst_52629);
var inst_52634 = cljs.core._EQ_.call(null,inst_52633__$1,inst_52626);
var inst_52635 = cljs.core.keyword_identical_QMARK_.call(null,inst_52626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52636 = (inst_52634) || (inst_52635);
var state_52665__$1 = (function (){var statearr_52679 = state_52665;
(statearr_52679[(10)] = inst_52633__$1);

return statearr_52679;
})();
if(cljs.core.truth_(inst_52636)){
var statearr_52680_52703 = state_52665__$1;
(statearr_52680_52703[(1)] = (8));

} else {
var statearr_52681_52704 = state_52665__$1;
(statearr_52681_52704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (14))){
var inst_52658 = (state_52665[(2)]);
var inst_52659 = cljs.core.async.close_BANG_.call(null,out);
var state_52665__$1 = (function (){var statearr_52683 = state_52665;
(statearr_52683[(13)] = inst_52658);

return statearr_52683;
})();
var statearr_52684_52705 = state_52665__$1;
(statearr_52684_52705[(2)] = inst_52659);

(statearr_52684_52705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (10))){
var inst_52648 = (state_52665[(2)]);
var state_52665__$1 = state_52665;
var statearr_52685_52706 = state_52665__$1;
(statearr_52685_52706[(2)] = inst_52648);

(statearr_52685_52706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52666 === (8))){
var inst_52629 = (state_52665[(9)]);
var inst_52625 = (state_52665[(7)]);
var inst_52633 = (state_52665[(10)]);
var inst_52638 = inst_52625.push(inst_52629);
var tmp52682 = inst_52625;
var inst_52625__$1 = tmp52682;
var inst_52626 = inst_52633;
var state_52665__$1 = (function (){var statearr_52686 = state_52665;
(statearr_52686[(7)] = inst_52625__$1);

(statearr_52686[(8)] = inst_52626);

(statearr_52686[(14)] = inst_52638);

return statearr_52686;
})();
var statearr_52687_52707 = state_52665__$1;
(statearr_52687_52707[(2)] = null);

(statearr_52687_52707[(1)] = (2));


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
});})(c__50803__auto___52693,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52693,out){
return (function() {
var cljs$core$async$state_machine__50716__auto__ = null;
var cljs$core$async$state_machine__50716__auto____0 = (function (){
var statearr_52688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52688[(0)] = cljs$core$async$state_machine__50716__auto__);

(statearr_52688[(1)] = (1));

return statearr_52688;
});
var cljs$core$async$state_machine__50716__auto____1 = (function (state_52665){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52689){if((e52689 instanceof Object)){
var ex__50719__auto__ = e52689;
var statearr_52690_52708 = state_52665;
(statearr_52690_52708[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52709 = state_52665;
state_52665 = G__52709;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
cljs$core$async$state_machine__50716__auto__ = function(state_52665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50716__auto____1.call(this,state_52665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50716__auto____0;
cljs$core$async$state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50716__auto____1;
return cljs$core$async$state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52693,out))
})();
var state__50805__auto__ = (function (){var statearr_52691 = f__50804__auto__.call(null);
(statearr_52691[(6)] = c__50803__auto___52693);

return statearr_52691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
