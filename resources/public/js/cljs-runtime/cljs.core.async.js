goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30285 = arguments.length;
switch (G__30285) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30292 = (function (f,blockable,meta30293){
this.f = f;
this.blockable = blockable;
this.meta30293 = meta30293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30294,meta30293__$1){
var self__ = this;
var _30294__$1 = this;
return (new cljs.core.async.t_cljs$core$async30292(self__.f,self__.blockable,meta30293__$1));
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30294){
var self__ = this;
var _30294__$1 = this;
return self__.meta30293;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30293","meta30293",-1694945066,null)], null);
}));

(cljs.core.async.t_cljs$core$async30292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30292");

(cljs.core.async.t_cljs$core$async30292.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30292.
 */
cljs.core.async.__GT_t_cljs$core$async30292 = (function cljs$core$async$__GT_t_cljs$core$async30292(f__$1,blockable__$1,meta30293){
return (new cljs.core.async.t_cljs$core$async30292(f__$1,blockable__$1,meta30293));
});

}

return (new cljs.core.async.t_cljs$core$async30292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30316 = arguments.length;
switch (G__30316) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30325 = arguments.length;
switch (G__30325) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30342 = arguments.length;
switch (G__30342) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32349 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32349) : fn1.call(null,val_32349));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32349) : fn1.call(null,val_32349));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30390 = arguments.length;
switch (G__30390) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32351 = n;
var x_32352 = (0);
while(true){
if((x_32352 < n__4613__auto___32351)){
(a[x_32352] = x_32352);

var G__32353 = (x_32352 + (1));
x_32352 = G__32353;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30411 = (function (flag,meta30412){
this.flag = flag;
this.meta30412 = meta30412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30413,meta30412__$1){
var self__ = this;
var _30413__$1 = this;
return (new cljs.core.async.t_cljs$core$async30411(self__.flag,meta30412__$1));
}));

(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30413){
var self__ = this;
var _30413__$1 = this;
return self__.meta30412;
}));

(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30412","meta30412",2010229946,null)], null);
}));

(cljs.core.async.t_cljs$core$async30411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30411");

(cljs.core.async.t_cljs$core$async30411.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30411.
 */
cljs.core.async.__GT_t_cljs$core$async30411 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30411(flag__$1,meta30412){
return (new cljs.core.async.t_cljs$core$async30411(flag__$1,meta30412));
});

}

return (new cljs.core.async.t_cljs$core$async30411(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30449 = (function (flag,cb,meta30450){
this.flag = flag;
this.cb = cb;
this.meta30450 = meta30450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30451,meta30450__$1){
var self__ = this;
var _30451__$1 = this;
return (new cljs.core.async.t_cljs$core$async30449(self__.flag,self__.cb,meta30450__$1));
}));

(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30451){
var self__ = this;
var _30451__$1 = this;
return self__.meta30450;
}));

(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30450","meta30450",-1448359365,null)], null);
}));

(cljs.core.async.t_cljs$core$async30449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30449");

(cljs.core.async.t_cljs$core$async30449.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30449.
 */
cljs.core.async.__GT_t_cljs$core$async30449 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30449(flag__$1,cb__$1,meta30450){
return (new cljs.core.async.t_cljs$core$async30449(flag__$1,cb__$1,meta30450));
});

}

return (new cljs.core.async.t_cljs$core$async30449(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30459_SHARP_){
var G__30488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30459_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30488) : fret.call(null,G__30488));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30460_SHARP_){
var G__30489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30460_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30489) : fret.call(null,G__30489));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32361 = (i + (1));
i = G__32361;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___32366 = arguments.length;
var i__4737__auto___32367 = (0);
while(true){
if((i__4737__auto___32367 < len__4736__auto___32366)){
args__4742__auto__.push((arguments[i__4737__auto___32367]));

var G__32368 = (i__4737__auto___32367 + (1));
i__4737__auto___32367 = G__32368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30493){
var map__30494 = p__30493;
var map__30494__$1 = (((((!((map__30494 == null))))?(((((map__30494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30494):map__30494);
var opts = map__30494__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30491){
var G__30492 = cljs.core.first(seq30491);
var seq30491__$1 = cljs.core.next(seq30491);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30492,seq30491__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30497 = arguments.length;
switch (G__30497) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30192__auto___32372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30543){
var state_val_30544 = (state_30543[(1)]);
if((state_val_30544 === (7))){
var inst_30539 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30545_32373 = state_30543__$1;
(statearr_30545_32373[(2)] = inst_30539);

(statearr_30545_32373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (1))){
var state_30543__$1 = state_30543;
var statearr_30546_32374 = state_30543__$1;
(statearr_30546_32374[(2)] = null);

(statearr_30546_32374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (4))){
var inst_30522 = (state_30543[(7)]);
var inst_30522__$1 = (state_30543[(2)]);
var inst_30523 = (inst_30522__$1 == null);
var state_30543__$1 = (function (){var statearr_30555 = state_30543;
(statearr_30555[(7)] = inst_30522__$1);

return statearr_30555;
})();
if(cljs.core.truth_(inst_30523)){
var statearr_30556_32375 = state_30543__$1;
(statearr_30556_32375[(1)] = (5));

} else {
var statearr_30557_32376 = state_30543__$1;
(statearr_30557_32376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (13))){
var state_30543__$1 = state_30543;
var statearr_30558_32378 = state_30543__$1;
(statearr_30558_32378[(2)] = null);

(statearr_30558_32378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (6))){
var inst_30522 = (state_30543[(7)]);
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30543__$1,(11),to,inst_30522);
} else {
if((state_val_30544 === (3))){
var inst_30541 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30543__$1,inst_30541);
} else {
if((state_val_30544 === (12))){
var state_30543__$1 = state_30543;
var statearr_30569_32379 = state_30543__$1;
(statearr_30569_32379[(2)] = null);

(statearr_30569_32379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (2))){
var state_30543__$1 = state_30543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30543__$1,(4),from);
} else {
if((state_val_30544 === (11))){
var inst_30532 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
if(cljs.core.truth_(inst_30532)){
var statearr_30578_32380 = state_30543__$1;
(statearr_30578_32380[(1)] = (12));

} else {
var statearr_30579_32381 = state_30543__$1;
(statearr_30579_32381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (9))){
var state_30543__$1 = state_30543;
var statearr_30580_32382 = state_30543__$1;
(statearr_30580_32382[(2)] = null);

(statearr_30580_32382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (5))){
var state_30543__$1 = state_30543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30581_32383 = state_30543__$1;
(statearr_30581_32383[(1)] = (8));

} else {
var statearr_30582_32384 = state_30543__$1;
(statearr_30582_32384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (14))){
var inst_30537 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30583_32389 = state_30543__$1;
(statearr_30583_32389[(2)] = inst_30537);

(statearr_30583_32389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (10))){
var inst_30529 = (state_30543[(2)]);
var state_30543__$1 = state_30543;
var statearr_30584_32390 = state_30543__$1;
(statearr_30584_32390[(2)] = inst_30529);

(statearr_30584_32390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30544 === (8))){
var inst_30526 = cljs.core.async.close_BANG_(to);
var state_30543__$1 = state_30543;
var statearr_30585_32391 = state_30543__$1;
(statearr_30585_32391[(2)] = inst_30526);

(statearr_30585_32391[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null,null];
(statearr_30588[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_30543){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30543);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30592){var ex__30061__auto__ = e30592;
var statearr_30593_32392 = state_30543;
(statearr_30593_32392[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30543[(4)]))){
var statearr_30594_32393 = state_30543;
(statearr_30594_32393[(1)] = cljs.core.first((state_30543[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32394 = state_30543;
state_30543 = G__32394;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_30543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_30543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30595 = f__30193__auto__();
(statearr_30595[(6)] = c__30192__auto___32372);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30599){
var vec__30600 = p__30599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
var job = vec__30600;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30192__auto___32395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (1))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30615__$1,(2),res,v);
} else {
if((state_val_30616 === (2))){
var inst_30612 = (state_30615[(2)]);
var inst_30613 = cljs.core.async.close_BANG_(res);
var state_30615__$1 = (function (){var statearr_30619 = state_30615;
(statearr_30619[(7)] = inst_30612);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30615__$1,inst_30613);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_30622 = [null,null,null,null,null,null,null,null];
(statearr_30622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__);

(statearr_30622[(1)] = (1));

return statearr_30622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1 = (function (state_30615){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30615);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30623){var ex__30061__auto__ = e30623;
var statearr_30624_32396 = state_30615;
(statearr_30624_32396[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30615[(4)]))){
var statearr_30625_32397 = state_30615;
(statearr_30625_32397[(1)] = cljs.core.first((state_30615[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32398 = state_30615;
state_30615 = G__32398;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30626 = f__30193__auto__();
(statearr_30626[(6)] = c__30192__auto___32395);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30627){
var vec__30628 = p__30627;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(1),null);
var job = vec__30628;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32414 = n;
var __32415 = (0);
while(true){
if((__32415 < n__4613__auto___32414)){
var G__30631_32416 = type;
var G__30631_32417__$1 = (((G__30631_32416 instanceof cljs.core.Keyword))?G__30631_32416.fqn:null);
switch (G__30631_32417__$1) {
case "compute":
var c__30192__auto___32419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32415,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = ((function (__32415,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function (state_30644){
var state_val_30645 = (state_30644[(1)]);
if((state_val_30645 === (1))){
var state_30644__$1 = state_30644;
var statearr_30648_32420 = state_30644__$1;
(statearr_30648_32420[(2)] = null);

(statearr_30648_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (2))){
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30644__$1,(4),jobs);
} else {
if((state_val_30645 === (3))){
var inst_30642 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30644__$1,inst_30642);
} else {
if((state_val_30645 === (4))){
var inst_30634 = (state_30644[(2)]);
var inst_30635 = process(inst_30634);
var state_30644__$1 = state_30644;
if(cljs.core.truth_(inst_30635)){
var statearr_30649_32421 = state_30644__$1;
(statearr_30649_32421[(1)] = (5));

} else {
var statearr_30650_32422 = state_30644__$1;
(statearr_30650_32422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (5))){
var state_30644__$1 = state_30644;
var statearr_30651_32423 = state_30644__$1;
(statearr_30651_32423[(2)] = null);

(statearr_30651_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (6))){
var state_30644__$1 = state_30644;
var statearr_30652_32424 = state_30644__$1;
(statearr_30652_32424[(2)] = null);

(statearr_30652_32424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30645 === (7))){
var inst_30640 = (state_30644[(2)]);
var state_30644__$1 = state_30644;
var statearr_30653_32425 = state_30644__$1;
(statearr_30653_32425[(2)] = inst_30640);

(statearr_30653_32425[(1)] = (3));


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
});})(__32415,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
;
return ((function (__32415,switch__30057__auto__,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null];
(statearr_30656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1 = (function (state_30644){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30644);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30658){var ex__30061__auto__ = e30658;
var statearr_30659_32426 = state_30644;
(statearr_30659_32426[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30644[(4)]))){
var statearr_30660_32427 = state_30644;
(statearr_30660_32427[(1)] = cljs.core.first((state_30644[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_30644;
state_30644 = G__32428;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = function(state_30644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1.call(this,state_30644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__;
})()
;})(__32415,switch__30057__auto__,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
})();
var state__30194__auto__ = (function (){var statearr_30661 = f__30193__auto__();
(statearr_30661[(6)] = c__30192__auto___32419);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
});})(__32415,c__30192__auto___32419,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
);


break;
case "async":
var c__30192__auto___32429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32415,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = ((function (__32415,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function (state_30674){
var state_val_30675 = (state_30674[(1)]);
if((state_val_30675 === (1))){
var state_30674__$1 = state_30674;
var statearr_30676_32430 = state_30674__$1;
(statearr_30676_32430[(2)] = null);

(statearr_30676_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (2))){
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30674__$1,(4),jobs);
} else {
if((state_val_30675 === (3))){
var inst_30672 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30674__$1,inst_30672);
} else {
if((state_val_30675 === (4))){
var inst_30664 = (state_30674[(2)]);
var inst_30665 = async(inst_30664);
var state_30674__$1 = state_30674;
if(cljs.core.truth_(inst_30665)){
var statearr_30677_32478 = state_30674__$1;
(statearr_30677_32478[(1)] = (5));

} else {
var statearr_30678_32479 = state_30674__$1;
(statearr_30678_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (5))){
var state_30674__$1 = state_30674;
var statearr_30679_32480 = state_30674__$1;
(statearr_30679_32480[(2)] = null);

(statearr_30679_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (6))){
var state_30674__$1 = state_30674;
var statearr_30680_32481 = state_30674__$1;
(statearr_30680_32481[(2)] = null);

(statearr_30680_32481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30675 === (7))){
var inst_30670 = (state_30674[(2)]);
var state_30674__$1 = state_30674;
var statearr_30681_32482 = state_30674__$1;
(statearr_30681_32482[(2)] = inst_30670);

(statearr_30681_32482[(1)] = (3));


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
});})(__32415,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
;
return ((function (__32415,switch__30057__auto__,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_30682 = [null,null,null,null,null,null,null];
(statearr_30682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__);

(statearr_30682[(1)] = (1));

return statearr_30682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1 = (function (state_30674){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30674);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30683){var ex__30061__auto__ = e30683;
var statearr_30684_32483 = state_30674;
(statearr_30684_32483[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30674[(4)]))){
var statearr_30690_32484 = state_30674;
(statearr_30690_32484[(1)] = cljs.core.first((state_30674[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32485 = state_30674;
state_30674 = G__32485;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = function(state_30674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1.call(this,state_30674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__;
})()
;})(__32415,switch__30057__auto__,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
})();
var state__30194__auto__ = (function (){var statearr_30691 = f__30193__auto__();
(statearr_30691[(6)] = c__30192__auto___32429);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
});})(__32415,c__30192__auto___32429,G__30631_32416,G__30631_32417__$1,n__4613__auto___32414,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30631_32417__$1)].join('')));

}

var G__32486 = (__32415 + (1));
__32415 = G__32486;
continue;
} else {
}
break;
}

var c__30192__auto___32487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (7))){
var inst_30742 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30749_32489 = state_30746__$1;
(statearr_30749_32489[(2)] = inst_30742);

(statearr_30749_32489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (1))){
var state_30746__$1 = state_30746;
var statearr_30750_32490 = state_30746__$1;
(statearr_30750_32490[(2)] = null);

(statearr_30750_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (4))){
var inst_30727 = (state_30746[(7)]);
var inst_30727__$1 = (state_30746[(2)]);
var inst_30728 = (inst_30727__$1 == null);
var state_30746__$1 = (function (){var statearr_30751 = state_30746;
(statearr_30751[(7)] = inst_30727__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30728)){
var statearr_30752_32491 = state_30746__$1;
(statearr_30752_32491[(1)] = (5));

} else {
var statearr_30753_32492 = state_30746__$1;
(statearr_30753_32492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (6))){
var inst_30732 = (state_30746[(8)]);
var inst_30727 = (state_30746[(7)]);
var inst_30732__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30734 = [inst_30727,inst_30732__$1];
var inst_30735 = (new cljs.core.PersistentVector(null,2,(5),inst_30733,inst_30734,null));
var state_30746__$1 = (function (){var statearr_30754 = state_30746;
(statearr_30754[(8)] = inst_30732__$1);

return statearr_30754;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30746__$1,(8),jobs,inst_30735);
} else {
if((state_val_30747 === (3))){
var inst_30744 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30746__$1,inst_30744);
} else {
if((state_val_30747 === (2))){
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30746__$1,(4),from);
} else {
if((state_val_30747 === (9))){
var inst_30739 = (state_30746[(2)]);
var state_30746__$1 = (function (){var statearr_30755 = state_30746;
(statearr_30755[(9)] = inst_30739);

return statearr_30755;
})();
var statearr_30756_32493 = state_30746__$1;
(statearr_30756_32493[(2)] = null);

(statearr_30756_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (5))){
var inst_30730 = cljs.core.async.close_BANG_(jobs);
var state_30746__$1 = state_30746;
var statearr_30757_32502 = state_30746__$1;
(statearr_30757_32502[(2)] = inst_30730);

(statearr_30757_32502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (8))){
var inst_30732 = (state_30746[(8)]);
var inst_30737 = (state_30746[(2)]);
var state_30746__$1 = (function (){var statearr_30758 = state_30746;
(statearr_30758[(10)] = inst_30737);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30746__$1,(9),results,inst_30732);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_30759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__);

(statearr_30759[(1)] = (1));

return statearr_30759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1 = (function (state_30746){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30746);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30760){var ex__30061__auto__ = e30760;
var statearr_30761_32503 = state_30746;
(statearr_30761_32503[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30746[(4)]))){
var statearr_30762_32504 = state_30746;
(statearr_30762_32504[(1)] = cljs.core.first((state_30746[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32505 = state_30746;
state_30746 = G__32505;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30763 = f__30193__auto__();
(statearr_30763[(6)] = c__30192__auto___32487);

return statearr_30763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30801){
var state_val_30802 = (state_30801[(1)]);
if((state_val_30802 === (7))){
var inst_30797 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30803_32506 = state_30801__$1;
(statearr_30803_32506[(2)] = inst_30797);

(statearr_30803_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (20))){
var state_30801__$1 = state_30801;
var statearr_30804_32507 = state_30801__$1;
(statearr_30804_32507[(2)] = null);

(statearr_30804_32507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (1))){
var state_30801__$1 = state_30801;
var statearr_30805_32508 = state_30801__$1;
(statearr_30805_32508[(2)] = null);

(statearr_30805_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (4))){
var inst_30766 = (state_30801[(7)]);
var inst_30766__$1 = (state_30801[(2)]);
var inst_30767 = (inst_30766__$1 == null);
var state_30801__$1 = (function (){var statearr_30806 = state_30801;
(statearr_30806[(7)] = inst_30766__$1);

return statearr_30806;
})();
if(cljs.core.truth_(inst_30767)){
var statearr_30807_32510 = state_30801__$1;
(statearr_30807_32510[(1)] = (5));

} else {
var statearr_30808_32512 = state_30801__$1;
(statearr_30808_32512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (15))){
var inst_30779 = (state_30801[(8)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30801__$1,(18),to,inst_30779);
} else {
if((state_val_30802 === (21))){
var inst_30792 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30809_32513 = state_30801__$1;
(statearr_30809_32513[(2)] = inst_30792);

(statearr_30809_32513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (13))){
var inst_30794 = (state_30801[(2)]);
var state_30801__$1 = (function (){var statearr_30810 = state_30801;
(statearr_30810[(9)] = inst_30794);

return statearr_30810;
})();
var statearr_30811_32514 = state_30801__$1;
(statearr_30811_32514[(2)] = null);

(statearr_30811_32514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (6))){
var inst_30766 = (state_30801[(7)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(11),inst_30766);
} else {
if((state_val_30802 === (17))){
var inst_30787 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
if(cljs.core.truth_(inst_30787)){
var statearr_30812_32516 = state_30801__$1;
(statearr_30812_32516[(1)] = (19));

} else {
var statearr_30813_32518 = state_30801__$1;
(statearr_30813_32518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (3))){
var inst_30799 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30801__$1,inst_30799);
} else {
if((state_val_30802 === (12))){
var inst_30776 = (state_30801[(10)]);
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(14),inst_30776);
} else {
if((state_val_30802 === (2))){
var state_30801__$1 = state_30801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30801__$1,(4),results);
} else {
if((state_val_30802 === (19))){
var state_30801__$1 = state_30801;
var statearr_30814_32520 = state_30801__$1;
(statearr_30814_32520[(2)] = null);

(statearr_30814_32520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (11))){
var inst_30776 = (state_30801[(2)]);
var state_30801__$1 = (function (){var statearr_30815 = state_30801;
(statearr_30815[(10)] = inst_30776);

return statearr_30815;
})();
var statearr_30816_32521 = state_30801__$1;
(statearr_30816_32521[(2)] = null);

(statearr_30816_32521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (9))){
var state_30801__$1 = state_30801;
var statearr_30817_32523 = state_30801__$1;
(statearr_30817_32523[(2)] = null);

(statearr_30817_32523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (5))){
var state_30801__$1 = state_30801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30818_32524 = state_30801__$1;
(statearr_30818_32524[(1)] = (8));

} else {
var statearr_30819_32525 = state_30801__$1;
(statearr_30819_32525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (14))){
var inst_30779 = (state_30801[(8)]);
var inst_30779__$1 = (state_30801[(2)]);
var inst_30780 = (inst_30779__$1 == null);
var inst_30781 = cljs.core.not(inst_30780);
var state_30801__$1 = (function (){var statearr_30820 = state_30801;
(statearr_30820[(8)] = inst_30779__$1);

return statearr_30820;
})();
if(inst_30781){
var statearr_30821_32529 = state_30801__$1;
(statearr_30821_32529[(1)] = (15));

} else {
var statearr_30822_32531 = state_30801__$1;
(statearr_30822_32531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (16))){
var state_30801__$1 = state_30801;
var statearr_30823_32532 = state_30801__$1;
(statearr_30823_32532[(2)] = false);

(statearr_30823_32532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (10))){
var inst_30773 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30824_32533 = state_30801__$1;
(statearr_30824_32533[(2)] = inst_30773);

(statearr_30824_32533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (18))){
var inst_30784 = (state_30801[(2)]);
var state_30801__$1 = state_30801;
var statearr_30825_32534 = state_30801__$1;
(statearr_30825_32534[(2)] = inst_30784);

(statearr_30825_32534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30802 === (8))){
var inst_30770 = cljs.core.async.close_BANG_(to);
var state_30801__$1 = state_30801;
var statearr_30826_32535 = state_30801__$1;
(statearr_30826_32535[(2)] = inst_30770);

(statearr_30826_32535[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_30827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__);

(statearr_30827[(1)] = (1));

return statearr_30827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1 = (function (state_30801){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30801);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30828){var ex__30061__auto__ = e30828;
var statearr_30829_32541 = state_30801;
(statearr_30829_32541[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30801[(4)]))){
var statearr_30830_32542 = state_30801;
(statearr_30830_32542[(1)] = cljs.core.first((state_30801[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32547 = state_30801;
state_30801 = G__32547;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__ = function(state_30801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1.call(this,state_30801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30831 = f__30193__auto__();
(statearr_30831[(6)] = c__30192__auto__);

return statearr_30831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
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
var G__30838 = arguments.length;
switch (G__30838) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30848 = arguments.length;
switch (G__30848) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30850 = arguments.length;
switch (G__30850) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30192__auto___32560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30880){
var state_val_30881 = (state_30880[(1)]);
if((state_val_30881 === (7))){
var inst_30876 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30886_32561 = state_30880__$1;
(statearr_30886_32561[(2)] = inst_30876);

(statearr_30886_32561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (1))){
var state_30880__$1 = state_30880;
var statearr_30887_32562 = state_30880__$1;
(statearr_30887_32562[(2)] = null);

(statearr_30887_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (4))){
var inst_30853 = (state_30880[(7)]);
var inst_30853__$1 = (state_30880[(2)]);
var inst_30854 = (inst_30853__$1 == null);
var state_30880__$1 = (function (){var statearr_30889 = state_30880;
(statearr_30889[(7)] = inst_30853__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30890_32565 = state_30880__$1;
(statearr_30890_32565[(1)] = (5));

} else {
var statearr_30891_32566 = state_30880__$1;
(statearr_30891_32566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (13))){
var state_30880__$1 = state_30880;
var statearr_30892_32567 = state_30880__$1;
(statearr_30892_32567[(2)] = null);

(statearr_30892_32567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (6))){
var inst_30853 = (state_30880[(7)]);
var inst_30859 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30853) : p.call(null,inst_30853));
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30859)){
var statearr_30893_32568 = state_30880__$1;
(statearr_30893_32568[(1)] = (9));

} else {
var statearr_30894_32572 = state_30880__$1;
(statearr_30894_32572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (3))){
var inst_30878 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30880__$1,inst_30878);
} else {
if((state_val_30881 === (12))){
var state_30880__$1 = state_30880;
var statearr_30895_32577 = state_30880__$1;
(statearr_30895_32577[(2)] = null);

(statearr_30895_32577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (2))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30880__$1,(4),ch);
} else {
if((state_val_30881 === (11))){
var inst_30853 = (state_30880[(7)]);
var inst_30863 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30880__$1,(8),inst_30863,inst_30853);
} else {
if((state_val_30881 === (9))){
var state_30880__$1 = state_30880;
var statearr_30896_32584 = state_30880__$1;
(statearr_30896_32584[(2)] = tc);

(statearr_30896_32584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (5))){
var inst_30856 = cljs.core.async.close_BANG_(tc);
var inst_30857 = cljs.core.async.close_BANG_(fc);
var state_30880__$1 = (function (){var statearr_30897 = state_30880;
(statearr_30897[(8)] = inst_30856);

return statearr_30897;
})();
var statearr_30898_32585 = state_30880__$1;
(statearr_30898_32585[(2)] = inst_30857);

(statearr_30898_32585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (14))){
var inst_30871 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30899_32586 = state_30880__$1;
(statearr_30899_32586[(2)] = inst_30871);

(statearr_30899_32586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (10))){
var state_30880__$1 = state_30880;
var statearr_30900_32587 = state_30880__$1;
(statearr_30900_32587[(2)] = fc);

(statearr_30900_32587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (8))){
var inst_30865 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30865)){
var statearr_30901_32588 = state_30880__$1;
(statearr_30901_32588[(1)] = (12));

} else {
var statearr_30902_32589 = state_30880__$1;
(statearr_30902_32589[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_30903 = [null,null,null,null,null,null,null,null,null];
(statearr_30903[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_30903[(1)] = (1));

return statearr_30903;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_30880){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30880);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30904){var ex__30061__auto__ = e30904;
var statearr_30905_32606 = state_30880;
(statearr_30905_32606[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30880[(4)]))){
var statearr_30906_32607 = state_30880;
(statearr_30906_32607[(1)] = cljs.core.first((state_30880[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32608 = state_30880;
state_30880 = G__32608;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30907 = f__30193__auto__();
(statearr_30907[(6)] = c__30192__auto___32560);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30930){
var state_val_30931 = (state_30930[(1)]);
if((state_val_30931 === (7))){
var inst_30926 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30932_32609 = state_30930__$1;
(statearr_30932_32609[(2)] = inst_30926);

(statearr_30932_32609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (1))){
var inst_30908 = init;
var inst_30909 = inst_30908;
var state_30930__$1 = (function (){var statearr_30933 = state_30930;
(statearr_30933[(7)] = inst_30909);

return statearr_30933;
})();
var statearr_30934_32610 = state_30930__$1;
(statearr_30934_32610[(2)] = null);

(statearr_30934_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (4))){
var inst_30913 = (state_30930[(8)]);
var inst_30913__$1 = (state_30930[(2)]);
var inst_30914 = (inst_30913__$1 == null);
var state_30930__$1 = (function (){var statearr_30935 = state_30930;
(statearr_30935[(8)] = inst_30913__$1);

return statearr_30935;
})();
if(cljs.core.truth_(inst_30914)){
var statearr_30936_32611 = state_30930__$1;
(statearr_30936_32611[(1)] = (5));

} else {
var statearr_30937_32612 = state_30930__$1;
(statearr_30937_32612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (6))){
var inst_30909 = (state_30930[(7)]);
var inst_30913 = (state_30930[(8)]);
var inst_30917 = (state_30930[(9)]);
var inst_30917__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30909,inst_30913) : f.call(null,inst_30909,inst_30913));
var inst_30918 = cljs.core.reduced_QMARK_(inst_30917__$1);
var state_30930__$1 = (function (){var statearr_30938 = state_30930;
(statearr_30938[(9)] = inst_30917__$1);

return statearr_30938;
})();
if(inst_30918){
var statearr_30939_32613 = state_30930__$1;
(statearr_30939_32613[(1)] = (8));

} else {
var statearr_30940_32614 = state_30930__$1;
(statearr_30940_32614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (3))){
var inst_30928 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30930__$1,inst_30928);
} else {
if((state_val_30931 === (2))){
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30930__$1,(4),ch);
} else {
if((state_val_30931 === (9))){
var inst_30917 = (state_30930[(9)]);
var inst_30909 = inst_30917;
var state_30930__$1 = (function (){var statearr_30941 = state_30930;
(statearr_30941[(7)] = inst_30909);

return statearr_30941;
})();
var statearr_30942_32616 = state_30930__$1;
(statearr_30942_32616[(2)] = null);

(statearr_30942_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (5))){
var inst_30909 = (state_30930[(7)]);
var state_30930__$1 = state_30930;
var statearr_30974_32618 = state_30930__$1;
(statearr_30974_32618[(2)] = inst_30909);

(statearr_30974_32618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (10))){
var inst_30924 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30975_32619 = state_30930__$1;
(statearr_30975_32619[(2)] = inst_30924);

(statearr_30975_32619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (8))){
var inst_30917 = (state_30930[(9)]);
var inst_30920 = cljs.core.deref(inst_30917);
var state_30930__$1 = state_30930;
var statearr_30976_32620 = state_30930__$1;
(statearr_30976_32620[(2)] = inst_30920);

(statearr_30976_32620[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30058__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30058__auto____0 = (function (){
var statearr_30977 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30977[(0)] = cljs$core$async$reduce_$_state_machine__30058__auto__);

(statearr_30977[(1)] = (1));

return statearr_30977;
});
var cljs$core$async$reduce_$_state_machine__30058__auto____1 = (function (state_30930){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30930);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30978){var ex__30061__auto__ = e30978;
var statearr_30979_32621 = state_30930;
(statearr_30979_32621[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30930[(4)]))){
var statearr_30980_32622 = state_30930;
(statearr_30980_32622[(1)] = cljs.core.first((state_30930[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32624 = state_30930;
state_30930 = G__32624;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30058__auto__ = function(state_30930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30058__auto____1.call(this,state_30930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30058__auto____0;
cljs$core$async$reduce_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30058__auto____1;
return cljs$core$async$reduce_$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_30981 = f__30193__auto__();
(statearr_30981[(6)] = c__30192__auto__);

return statearr_30981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_30987){
var state_val_30988 = (state_30987[(1)]);
if((state_val_30988 === (1))){
var inst_30982 = cljs.core.async.reduce(f__$1,init,ch);
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30987__$1,(2),inst_30982);
} else {
if((state_val_30988 === (2))){
var inst_30984 = (state_30987[(2)]);
var inst_30985 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30984) : f__$1.call(null,inst_30984));
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30987__$1,inst_30985);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30058__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30058__auto____0 = (function (){
var statearr_30996 = [null,null,null,null,null,null,null];
(statearr_30996[(0)] = cljs$core$async$transduce_$_state_machine__30058__auto__);

(statearr_30996[(1)] = (1));

return statearr_30996;
});
var cljs$core$async$transduce_$_state_machine__30058__auto____1 = (function (state_30987){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_30987);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e30997){var ex__30061__auto__ = e30997;
var statearr_30998_32625 = state_30987;
(statearr_30998_32625[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_30987[(4)]))){
var statearr_30999_32633 = state_30987;
(statearr_30999_32633[(1)] = cljs.core.first((state_30987[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32634 = state_30987;
state_30987 = G__32634;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30058__auto__ = function(state_30987){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30058__auto____1.call(this,state_30987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30058__auto____0;
cljs$core$async$transduce_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30058__auto____1;
return cljs$core$async$transduce_$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31000 = f__30193__auto__();
(statearr_31000[(6)] = c__30192__auto__);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31003 = arguments.length;
switch (G__31003) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31028){
var state_val_31029 = (state_31028[(1)]);
if((state_val_31029 === (7))){
var inst_31010 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
var statearr_31040_32636 = state_31028__$1;
(statearr_31040_32636[(2)] = inst_31010);

(statearr_31040_32636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (1))){
var inst_31004 = cljs.core.seq(coll);
var inst_31005 = inst_31004;
var state_31028__$1 = (function (){var statearr_31041 = state_31028;
(statearr_31041[(7)] = inst_31005);

return statearr_31041;
})();
var statearr_31042_32637 = state_31028__$1;
(statearr_31042_32637[(2)] = null);

(statearr_31042_32637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (4))){
var inst_31005 = (state_31028[(7)]);
var inst_31008 = cljs.core.first(inst_31005);
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31028__$1,(7),ch,inst_31008);
} else {
if((state_val_31029 === (13))){
var inst_31022 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
var statearr_31043_32638 = state_31028__$1;
(statearr_31043_32638[(2)] = inst_31022);

(statearr_31043_32638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (6))){
var inst_31013 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
if(cljs.core.truth_(inst_31013)){
var statearr_31044_32645 = state_31028__$1;
(statearr_31044_32645[(1)] = (8));

} else {
var statearr_31045_32646 = state_31028__$1;
(statearr_31045_32646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (3))){
var inst_31026 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31028__$1,inst_31026);
} else {
if((state_val_31029 === (12))){
var state_31028__$1 = state_31028;
var statearr_31046_32647 = state_31028__$1;
(statearr_31046_32647[(2)] = null);

(statearr_31046_32647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (2))){
var inst_31005 = (state_31028[(7)]);
var state_31028__$1 = state_31028;
if(cljs.core.truth_(inst_31005)){
var statearr_31047_32648 = state_31028__$1;
(statearr_31047_32648[(1)] = (4));

} else {
var statearr_31048_32649 = state_31028__$1;
(statearr_31048_32649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (11))){
var inst_31019 = cljs.core.async.close_BANG_(ch);
var state_31028__$1 = state_31028;
var statearr_31049_32650 = state_31028__$1;
(statearr_31049_32650[(2)] = inst_31019);

(statearr_31049_32650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (9))){
var state_31028__$1 = state_31028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31050_32651 = state_31028__$1;
(statearr_31050_32651[(1)] = (11));

} else {
var statearr_31051_32652 = state_31028__$1;
(statearr_31051_32652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (5))){
var inst_31005 = (state_31028[(7)]);
var state_31028__$1 = state_31028;
var statearr_31052_32653 = state_31028__$1;
(statearr_31052_32653[(2)] = inst_31005);

(statearr_31052_32653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (10))){
var inst_31024 = (state_31028[(2)]);
var state_31028__$1 = state_31028;
var statearr_31053_32654 = state_31028__$1;
(statearr_31053_32654[(2)] = inst_31024);

(statearr_31053_32654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31029 === (8))){
var inst_31005 = (state_31028[(7)]);
var inst_31015 = cljs.core.next(inst_31005);
var inst_31005__$1 = inst_31015;
var state_31028__$1 = (function (){var statearr_31054 = state_31028;
(statearr_31054[(7)] = inst_31005__$1);

return statearr_31054;
})();
var statearr_31055_32655 = state_31028__$1;
(statearr_31055_32655[(2)] = null);

(statearr_31055_32655[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_31028){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31028);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31057){var ex__30061__auto__ = e31057;
var statearr_31058_32656 = state_31028;
(statearr_31058_32656[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31028[(4)]))){
var statearr_31059_32657 = state_31028;
(statearr_31059_32657[(1)] = cljs.core.first((state_31028[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_31028;
state_31028 = G__32658;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_31028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_31028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31060 = f__30193__auto__();
(statearr_31060[(6)] = c__30192__auto__);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31062 = arguments.length;
switch (G__31062) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32660 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32660(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32661 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32661(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32667 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32667(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32668 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32668(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31064 = (function (ch,cs,meta31065){
this.ch = ch;
this.cs = cs;
this.meta31065 = meta31065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31066,meta31065__$1){
var self__ = this;
var _31066__$1 = this;
return (new cljs.core.async.t_cljs$core$async31064(self__.ch,self__.cs,meta31065__$1));
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31066){
var self__ = this;
var _31066__$1 = this;
return self__.meta31065;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31065","meta31065",-114598550,null)], null);
}));

(cljs.core.async.t_cljs$core$async31064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31064");

(cljs.core.async.t_cljs$core$async31064.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31064.
 */
cljs.core.async.__GT_t_cljs$core$async31064 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31064(ch__$1,cs__$1,meta31065){
return (new cljs.core.async.t_cljs$core$async31064(ch__$1,cs__$1,meta31065));
});

}

return (new cljs.core.async.t_cljs$core$async31064(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30192__auto___32669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31199){
var state_val_31200 = (state_31199[(1)]);
if((state_val_31200 === (7))){
var inst_31195 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31201_32670 = state_31199__$1;
(statearr_31201_32670[(2)] = inst_31195);

(statearr_31201_32670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (20))){
var inst_31100 = (state_31199[(7)]);
var inst_31112 = cljs.core.first(inst_31100);
var inst_31113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31112,(0),null);
var inst_31114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31112,(1),null);
var state_31199__$1 = (function (){var statearr_31202 = state_31199;
(statearr_31202[(8)] = inst_31113);

return statearr_31202;
})();
if(cljs.core.truth_(inst_31114)){
var statearr_31203_32671 = state_31199__$1;
(statearr_31203_32671[(1)] = (22));

} else {
var statearr_31204_32672 = state_31199__$1;
(statearr_31204_32672[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (27))){
var inst_31069 = (state_31199[(9)]);
var inst_31144 = (state_31199[(10)]);
var inst_31149 = (state_31199[(11)]);
var inst_31142 = (state_31199[(12)]);
var inst_31149__$1 = cljs.core._nth(inst_31142,inst_31144);
var inst_31150 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31149__$1,inst_31069,done);
var state_31199__$1 = (function (){var statearr_31205 = state_31199;
(statearr_31205[(11)] = inst_31149__$1);

return statearr_31205;
})();
if(cljs.core.truth_(inst_31150)){
var statearr_31206_32673 = state_31199__$1;
(statearr_31206_32673[(1)] = (30));

} else {
var statearr_31207_32674 = state_31199__$1;
(statearr_31207_32674[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (1))){
var state_31199__$1 = state_31199;
var statearr_31208_32677 = state_31199__$1;
(statearr_31208_32677[(2)] = null);

(statearr_31208_32677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (24))){
var inst_31100 = (state_31199[(7)]);
var inst_31119 = (state_31199[(2)]);
var inst_31120 = cljs.core.next(inst_31100);
var inst_31078 = inst_31120;
var inst_31079 = null;
var inst_31080 = (0);
var inst_31081 = (0);
var state_31199__$1 = (function (){var statearr_31209 = state_31199;
(statearr_31209[(13)] = inst_31081);

(statearr_31209[(14)] = inst_31078);

(statearr_31209[(15)] = inst_31119);

(statearr_31209[(16)] = inst_31079);

(statearr_31209[(17)] = inst_31080);

return statearr_31209;
})();
var statearr_31210_32678 = state_31199__$1;
(statearr_31210_32678[(2)] = null);

(statearr_31210_32678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (39))){
var state_31199__$1 = state_31199;
var statearr_31214_32679 = state_31199__$1;
(statearr_31214_32679[(2)] = null);

(statearr_31214_32679[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (4))){
var inst_31069 = (state_31199[(9)]);
var inst_31069__$1 = (state_31199[(2)]);
var inst_31070 = (inst_31069__$1 == null);
var state_31199__$1 = (function (){var statearr_31215 = state_31199;
(statearr_31215[(9)] = inst_31069__$1);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31070)){
var statearr_31216_32680 = state_31199__$1;
(statearr_31216_32680[(1)] = (5));

} else {
var statearr_31217_32681 = state_31199__$1;
(statearr_31217_32681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (15))){
var inst_31081 = (state_31199[(13)]);
var inst_31078 = (state_31199[(14)]);
var inst_31079 = (state_31199[(16)]);
var inst_31080 = (state_31199[(17)]);
var inst_31096 = (state_31199[(2)]);
var inst_31097 = (inst_31081 + (1));
var tmp31211 = inst_31078;
var tmp31212 = inst_31079;
var tmp31213 = inst_31080;
var inst_31078__$1 = tmp31211;
var inst_31079__$1 = tmp31212;
var inst_31080__$1 = tmp31213;
var inst_31081__$1 = inst_31097;
var state_31199__$1 = (function (){var statearr_31218 = state_31199;
(statearr_31218[(13)] = inst_31081__$1);

(statearr_31218[(14)] = inst_31078__$1);

(statearr_31218[(16)] = inst_31079__$1);

(statearr_31218[(18)] = inst_31096);

(statearr_31218[(17)] = inst_31080__$1);

return statearr_31218;
})();
var statearr_31219_32682 = state_31199__$1;
(statearr_31219_32682[(2)] = null);

(statearr_31219_32682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (21))){
var inst_31123 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31223_32683 = state_31199__$1;
(statearr_31223_32683[(2)] = inst_31123);

(statearr_31223_32683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (31))){
var inst_31149 = (state_31199[(11)]);
var inst_31153 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31149);
var state_31199__$1 = state_31199;
var statearr_31224_32684 = state_31199__$1;
(statearr_31224_32684[(2)] = inst_31153);

(statearr_31224_32684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (32))){
var inst_31143 = (state_31199[(19)]);
var inst_31144 = (state_31199[(10)]);
var inst_31141 = (state_31199[(20)]);
var inst_31142 = (state_31199[(12)]);
var inst_31155 = (state_31199[(2)]);
var inst_31156 = (inst_31144 + (1));
var tmp31220 = inst_31143;
var tmp31221 = inst_31141;
var tmp31222 = inst_31142;
var inst_31141__$1 = tmp31221;
var inst_31142__$1 = tmp31222;
var inst_31143__$1 = tmp31220;
var inst_31144__$1 = inst_31156;
var state_31199__$1 = (function (){var statearr_31225 = state_31199;
(statearr_31225[(19)] = inst_31143__$1);

(statearr_31225[(10)] = inst_31144__$1);

(statearr_31225[(21)] = inst_31155);

(statearr_31225[(20)] = inst_31141__$1);

(statearr_31225[(12)] = inst_31142__$1);

return statearr_31225;
})();
var statearr_31226_32686 = state_31199__$1;
(statearr_31226_32686[(2)] = null);

(statearr_31226_32686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (40))){
var inst_31168 = (state_31199[(22)]);
var inst_31172 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31168);
var state_31199__$1 = state_31199;
var statearr_31227_32688 = state_31199__$1;
(statearr_31227_32688[(2)] = inst_31172);

(statearr_31227_32688[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (33))){
var inst_31159 = (state_31199[(23)]);
var inst_31161 = cljs.core.chunked_seq_QMARK_(inst_31159);
var state_31199__$1 = state_31199;
if(inst_31161){
var statearr_31228_32689 = state_31199__$1;
(statearr_31228_32689[(1)] = (36));

} else {
var statearr_31229_32690 = state_31199__$1;
(statearr_31229_32690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (13))){
var inst_31090 = (state_31199[(24)]);
var inst_31093 = cljs.core.async.close_BANG_(inst_31090);
var state_31199__$1 = state_31199;
var statearr_31230_32691 = state_31199__$1;
(statearr_31230_32691[(2)] = inst_31093);

(statearr_31230_32691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (22))){
var inst_31113 = (state_31199[(8)]);
var inst_31116 = cljs.core.async.close_BANG_(inst_31113);
var state_31199__$1 = state_31199;
var statearr_31231_32692 = state_31199__$1;
(statearr_31231_32692[(2)] = inst_31116);

(statearr_31231_32692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (36))){
var inst_31159 = (state_31199[(23)]);
var inst_31163 = cljs.core.chunk_first(inst_31159);
var inst_31164 = cljs.core.chunk_rest(inst_31159);
var inst_31165 = cljs.core.count(inst_31163);
var inst_31141 = inst_31164;
var inst_31142 = inst_31163;
var inst_31143 = inst_31165;
var inst_31144 = (0);
var state_31199__$1 = (function (){var statearr_31232 = state_31199;
(statearr_31232[(19)] = inst_31143);

(statearr_31232[(10)] = inst_31144);

(statearr_31232[(20)] = inst_31141);

(statearr_31232[(12)] = inst_31142);

return statearr_31232;
})();
var statearr_31233_32693 = state_31199__$1;
(statearr_31233_32693[(2)] = null);

(statearr_31233_32693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (41))){
var inst_31159 = (state_31199[(23)]);
var inst_31174 = (state_31199[(2)]);
var inst_31175 = cljs.core.next(inst_31159);
var inst_31141 = inst_31175;
var inst_31142 = null;
var inst_31143 = (0);
var inst_31144 = (0);
var state_31199__$1 = (function (){var statearr_31234 = state_31199;
(statearr_31234[(19)] = inst_31143);

(statearr_31234[(10)] = inst_31144);

(statearr_31234[(25)] = inst_31174);

(statearr_31234[(20)] = inst_31141);

(statearr_31234[(12)] = inst_31142);

return statearr_31234;
})();
var statearr_31235_32694 = state_31199__$1;
(statearr_31235_32694[(2)] = null);

(statearr_31235_32694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (43))){
var state_31199__$1 = state_31199;
var statearr_31236_32695 = state_31199__$1;
(statearr_31236_32695[(2)] = null);

(statearr_31236_32695[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (29))){
var inst_31183 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31237_32696 = state_31199__$1;
(statearr_31237_32696[(2)] = inst_31183);

(statearr_31237_32696[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (44))){
var inst_31192 = (state_31199[(2)]);
var state_31199__$1 = (function (){var statearr_31238 = state_31199;
(statearr_31238[(26)] = inst_31192);

return statearr_31238;
})();
var statearr_31239_32697 = state_31199__$1;
(statearr_31239_32697[(2)] = null);

(statearr_31239_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (6))){
var inst_31133 = (state_31199[(27)]);
var inst_31132 = cljs.core.deref(cs);
var inst_31133__$1 = cljs.core.keys(inst_31132);
var inst_31134 = cljs.core.count(inst_31133__$1);
var inst_31135 = cljs.core.reset_BANG_(dctr,inst_31134);
var inst_31140 = cljs.core.seq(inst_31133__$1);
var inst_31141 = inst_31140;
var inst_31142 = null;
var inst_31143 = (0);
var inst_31144 = (0);
var state_31199__$1 = (function (){var statearr_31240 = state_31199;
(statearr_31240[(27)] = inst_31133__$1);

(statearr_31240[(28)] = inst_31135);

(statearr_31240[(19)] = inst_31143);

(statearr_31240[(10)] = inst_31144);

(statearr_31240[(20)] = inst_31141);

(statearr_31240[(12)] = inst_31142);

return statearr_31240;
})();
var statearr_31241_32706 = state_31199__$1;
(statearr_31241_32706[(2)] = null);

(statearr_31241_32706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (28))){
var inst_31159 = (state_31199[(23)]);
var inst_31141 = (state_31199[(20)]);
var inst_31159__$1 = cljs.core.seq(inst_31141);
var state_31199__$1 = (function (){var statearr_31242 = state_31199;
(statearr_31242[(23)] = inst_31159__$1);

return statearr_31242;
})();
if(inst_31159__$1){
var statearr_31243_32708 = state_31199__$1;
(statearr_31243_32708[(1)] = (33));

} else {
var statearr_31244_32709 = state_31199__$1;
(statearr_31244_32709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (25))){
var inst_31143 = (state_31199[(19)]);
var inst_31144 = (state_31199[(10)]);
var inst_31146 = (inst_31144 < inst_31143);
var inst_31147 = inst_31146;
var state_31199__$1 = state_31199;
if(cljs.core.truth_(inst_31147)){
var statearr_31245_32713 = state_31199__$1;
(statearr_31245_32713[(1)] = (27));

} else {
var statearr_31246_32714 = state_31199__$1;
(statearr_31246_32714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (34))){
var state_31199__$1 = state_31199;
var statearr_31249_32715 = state_31199__$1;
(statearr_31249_32715[(2)] = null);

(statearr_31249_32715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (17))){
var state_31199__$1 = state_31199;
var statearr_31250_32717 = state_31199__$1;
(statearr_31250_32717[(2)] = null);

(statearr_31250_32717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (3))){
var inst_31197 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31199__$1,inst_31197);
} else {
if((state_val_31200 === (12))){
var inst_31128 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31251_32718 = state_31199__$1;
(statearr_31251_32718[(2)] = inst_31128);

(statearr_31251_32718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (2))){
var state_31199__$1 = state_31199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31199__$1,(4),ch);
} else {
if((state_val_31200 === (23))){
var state_31199__$1 = state_31199;
var statearr_31252_32724 = state_31199__$1;
(statearr_31252_32724[(2)] = null);

(statearr_31252_32724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (35))){
var inst_31181 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31253_32726 = state_31199__$1;
(statearr_31253_32726[(2)] = inst_31181);

(statearr_31253_32726[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (19))){
var inst_31100 = (state_31199[(7)]);
var inst_31104 = cljs.core.chunk_first(inst_31100);
var inst_31105 = cljs.core.chunk_rest(inst_31100);
var inst_31106 = cljs.core.count(inst_31104);
var inst_31078 = inst_31105;
var inst_31079 = inst_31104;
var inst_31080 = inst_31106;
var inst_31081 = (0);
var state_31199__$1 = (function (){var statearr_31254 = state_31199;
(statearr_31254[(13)] = inst_31081);

(statearr_31254[(14)] = inst_31078);

(statearr_31254[(16)] = inst_31079);

(statearr_31254[(17)] = inst_31080);

return statearr_31254;
})();
var statearr_31255_32730 = state_31199__$1;
(statearr_31255_32730[(2)] = null);

(statearr_31255_32730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (11))){
var inst_31078 = (state_31199[(14)]);
var inst_31100 = (state_31199[(7)]);
var inst_31100__$1 = cljs.core.seq(inst_31078);
var state_31199__$1 = (function (){var statearr_31256 = state_31199;
(statearr_31256[(7)] = inst_31100__$1);

return statearr_31256;
})();
if(inst_31100__$1){
var statearr_31257_32733 = state_31199__$1;
(statearr_31257_32733[(1)] = (16));

} else {
var statearr_31258_32734 = state_31199__$1;
(statearr_31258_32734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (9))){
var inst_31130 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31259_32735 = state_31199__$1;
(statearr_31259_32735[(2)] = inst_31130);

(statearr_31259_32735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (5))){
var inst_31076 = cljs.core.deref(cs);
var inst_31077 = cljs.core.seq(inst_31076);
var inst_31078 = inst_31077;
var inst_31079 = null;
var inst_31080 = (0);
var inst_31081 = (0);
var state_31199__$1 = (function (){var statearr_31260 = state_31199;
(statearr_31260[(13)] = inst_31081);

(statearr_31260[(14)] = inst_31078);

(statearr_31260[(16)] = inst_31079);

(statearr_31260[(17)] = inst_31080);

return statearr_31260;
})();
var statearr_31261_32736 = state_31199__$1;
(statearr_31261_32736[(2)] = null);

(statearr_31261_32736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (14))){
var state_31199__$1 = state_31199;
var statearr_31262_32737 = state_31199__$1;
(statearr_31262_32737[(2)] = null);

(statearr_31262_32737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (45))){
var inst_31189 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31263_32738 = state_31199__$1;
(statearr_31263_32738[(2)] = inst_31189);

(statearr_31263_32738[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (26))){
var inst_31133 = (state_31199[(27)]);
var inst_31185 = (state_31199[(2)]);
var inst_31186 = cljs.core.seq(inst_31133);
var state_31199__$1 = (function (){var statearr_31264 = state_31199;
(statearr_31264[(29)] = inst_31185);

return statearr_31264;
})();
if(inst_31186){
var statearr_31265_32739 = state_31199__$1;
(statearr_31265_32739[(1)] = (42));

} else {
var statearr_31266_32740 = state_31199__$1;
(statearr_31266_32740[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (16))){
var inst_31100 = (state_31199[(7)]);
var inst_31102 = cljs.core.chunked_seq_QMARK_(inst_31100);
var state_31199__$1 = state_31199;
if(inst_31102){
var statearr_31271_32741 = state_31199__$1;
(statearr_31271_32741[(1)] = (19));

} else {
var statearr_31274_32742 = state_31199__$1;
(statearr_31274_32742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (38))){
var inst_31178 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31275_32743 = state_31199__$1;
(statearr_31275_32743[(2)] = inst_31178);

(statearr_31275_32743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (30))){
var state_31199__$1 = state_31199;
var statearr_31278_32744 = state_31199__$1;
(statearr_31278_32744[(2)] = null);

(statearr_31278_32744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (10))){
var inst_31081 = (state_31199[(13)]);
var inst_31079 = (state_31199[(16)]);
var inst_31089 = cljs.core._nth(inst_31079,inst_31081);
var inst_31090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31089,(0),null);
var inst_31091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31089,(1),null);
var state_31199__$1 = (function (){var statearr_31283 = state_31199;
(statearr_31283[(24)] = inst_31090);

return statearr_31283;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31284_32745 = state_31199__$1;
(statearr_31284_32745[(1)] = (13));

} else {
var statearr_31287_32757 = state_31199__$1;
(statearr_31287_32757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (18))){
var inst_31126 = (state_31199[(2)]);
var state_31199__$1 = state_31199;
var statearr_31288_32758 = state_31199__$1;
(statearr_31288_32758[(2)] = inst_31126);

(statearr_31288_32758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (42))){
var state_31199__$1 = state_31199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31199__$1,(45),dchan);
} else {
if((state_val_31200 === (37))){
var inst_31159 = (state_31199[(23)]);
var inst_31069 = (state_31199[(9)]);
var inst_31168 = (state_31199[(22)]);
var inst_31168__$1 = cljs.core.first(inst_31159);
var inst_31169 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31168__$1,inst_31069,done);
var state_31199__$1 = (function (){var statearr_31291 = state_31199;
(statearr_31291[(22)] = inst_31168__$1);

return statearr_31291;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31292_32763 = state_31199__$1;
(statearr_31292_32763[(1)] = (39));

} else {
var statearr_31293_32764 = state_31199__$1;
(statearr_31293_32764[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31200 === (8))){
var inst_31081 = (state_31199[(13)]);
var inst_31080 = (state_31199[(17)]);
var inst_31083 = (inst_31081 < inst_31080);
var inst_31084 = inst_31083;
var state_31199__$1 = state_31199;
if(cljs.core.truth_(inst_31084)){
var statearr_31294_32765 = state_31199__$1;
(statearr_31294_32765[(1)] = (10));

} else {
var statearr_31295_32766 = state_31199__$1;
(statearr_31295_32766[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__30058__auto__ = null;
var cljs$core$async$mult_$_state_machine__30058__auto____0 = (function (){
var statearr_31296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31296[(0)] = cljs$core$async$mult_$_state_machine__30058__auto__);

(statearr_31296[(1)] = (1));

return statearr_31296;
});
var cljs$core$async$mult_$_state_machine__30058__auto____1 = (function (state_31199){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31199);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31297){var ex__30061__auto__ = e31297;
var statearr_31298_32767 = state_31199;
(statearr_31298_32767[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31199[(4)]))){
var statearr_31299_32768 = state_31199;
(statearr_31299_32768[(1)] = cljs.core.first((state_31199[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32769 = state_31199;
state_31199 = G__32769;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30058__auto__ = function(state_31199){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30058__auto____1.call(this,state_31199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30058__auto____0;
cljs$core$async$mult_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30058__auto____1;
return cljs$core$async$mult_$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31302 = f__30193__auto__();
(statearr_31302[(6)] = c__30192__auto___32669);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31305 = arguments.length;
switch (G__31305) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32778 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32778(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32782 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32782(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32808 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32808(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32809 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32809(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32810 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32810(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32812 = arguments.length;
var i__4737__auto___32813 = (0);
while(true){
if((i__4737__auto___32813 < len__4736__auto___32812)){
args__4742__auto__.push((arguments[i__4737__auto___32813]));

var G__32814 = (i__4737__auto___32813 + (1));
i__4737__auto___32813 = G__32814;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31332){
var map__31333 = p__31332;
var map__31333__$1 = (((((!((map__31333 == null))))?(((((map__31333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31333):map__31333);
var opts = map__31333__$1;
var statearr_31335_32816 = state;
(statearr_31335_32816[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31336_32817 = state;
(statearr_31336_32817[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31337_32818 = state;
(statearr_31337_32818[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31328){
var G__31329 = cljs.core.first(seq31328);
var seq31328__$1 = cljs.core.next(seq31328);
var G__31330 = cljs.core.first(seq31328__$1);
var seq31328__$2 = cljs.core.next(seq31328__$1);
var G__31331 = cljs.core.first(seq31328__$2);
var seq31328__$3 = cljs.core.next(seq31328__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31329,G__31330,G__31331,seq31328__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31346 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31347){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31347 = meta31347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31348,meta31347__$1){
var self__ = this;
var _31348__$1 = this;
return (new cljs.core.async.t_cljs$core$async31346(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31347__$1));
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31348){
var self__ = this;
var _31348__$1 = this;
return self__.meta31347;
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31347","meta31347",23314619,null)], null);
}));

(cljs.core.async.t_cljs$core$async31346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31346");

(cljs.core.async.t_cljs$core$async31346.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31346.
 */
cljs.core.async.__GT_t_cljs$core$async31346 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31346(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31347){
return (new cljs.core.async.t_cljs$core$async31346(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31347));
});

}

return (new cljs.core.async.t_cljs$core$async31346(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30192__auto___32837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31481){
var state_val_31486 = (state_31481[(1)]);
if((state_val_31486 === (7))){
var inst_31387 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31487_32838 = state_31481__$1;
(statearr_31487_32838[(2)] = inst_31387);

(statearr_31487_32838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (20))){
var inst_31399 = (state_31481[(7)]);
var state_31481__$1 = state_31481;
var statearr_31490_32839 = state_31481__$1;
(statearr_31490_32839[(2)] = inst_31399);

(statearr_31490_32839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (27))){
var state_31481__$1 = state_31481;
var statearr_31492_32840 = state_31481__$1;
(statearr_31492_32840[(2)] = null);

(statearr_31492_32840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (1))){
var inst_31374 = (state_31481[(8)]);
var inst_31374__$1 = calc_state();
var inst_31376 = (inst_31374__$1 == null);
var inst_31377 = cljs.core.not(inst_31376);
var state_31481__$1 = (function (){var statearr_31496 = state_31481;
(statearr_31496[(8)] = inst_31374__$1);

return statearr_31496;
})();
if(inst_31377){
var statearr_31497_32841 = state_31481__$1;
(statearr_31497_32841[(1)] = (2));

} else {
var statearr_31498_32842 = state_31481__$1;
(statearr_31498_32842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (24))){
var inst_31423 = (state_31481[(9)]);
var inst_31432 = (state_31481[(10)]);
var inst_31451 = (state_31481[(11)]);
var inst_31451__$1 = (inst_31423.cljs$core$IFn$_invoke$arity$1 ? inst_31423.cljs$core$IFn$_invoke$arity$1(inst_31432) : inst_31423.call(null,inst_31432));
var state_31481__$1 = (function (){var statearr_31500 = state_31481;
(statearr_31500[(11)] = inst_31451__$1);

return statearr_31500;
})();
if(cljs.core.truth_(inst_31451__$1)){
var statearr_31501_32843 = state_31481__$1;
(statearr_31501_32843[(1)] = (29));

} else {
var statearr_31502_32844 = state_31481__$1;
(statearr_31502_32844[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (4))){
var inst_31390 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31390)){
var statearr_31503_32845 = state_31481__$1;
(statearr_31503_32845[(1)] = (8));

} else {
var statearr_31504_32846 = state_31481__$1;
(statearr_31504_32846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (15))){
var inst_31417 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31417)){
var statearr_31505_32848 = state_31481__$1;
(statearr_31505_32848[(1)] = (19));

} else {
var statearr_31506_32849 = state_31481__$1;
(statearr_31506_32849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (21))){
var inst_31422 = (state_31481[(12)]);
var inst_31422__$1 = (state_31481[(2)]);
var inst_31423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31422__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31422__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31422__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31481__$1 = (function (){var statearr_31507 = state_31481;
(statearr_31507[(9)] = inst_31423);

(statearr_31507[(13)] = inst_31424);

(statearr_31507[(12)] = inst_31422__$1);

return statearr_31507;
})();
return cljs.core.async.ioc_alts_BANG_(state_31481__$1,(22),inst_31425);
} else {
if((state_val_31486 === (31))){
var inst_31461 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31461)){
var statearr_31508_32850 = state_31481__$1;
(statearr_31508_32850[(1)] = (32));

} else {
var statearr_31509_32851 = state_31481__$1;
(statearr_31509_32851[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (32))){
var inst_31431 = (state_31481[(14)]);
var state_31481__$1 = state_31481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31481__$1,(35),out,inst_31431);
} else {
if((state_val_31486 === (33))){
var inst_31422 = (state_31481[(12)]);
var inst_31399 = inst_31422;
var state_31481__$1 = (function (){var statearr_31515 = state_31481;
(statearr_31515[(7)] = inst_31399);

return statearr_31515;
})();
var statearr_31517_32853 = state_31481__$1;
(statearr_31517_32853[(2)] = null);

(statearr_31517_32853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (13))){
var inst_31399 = (state_31481[(7)]);
var inst_31406 = inst_31399.cljs$lang$protocol_mask$partition0$;
var inst_31407 = (inst_31406 & (64));
var inst_31408 = inst_31399.cljs$core$ISeq$;
var inst_31409 = (cljs.core.PROTOCOL_SENTINEL === inst_31408);
var inst_31410 = ((inst_31407) || (inst_31409));
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31410)){
var statearr_31520_32854 = state_31481__$1;
(statearr_31520_32854[(1)] = (16));

} else {
var statearr_31522_32855 = state_31481__$1;
(statearr_31522_32855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (22))){
var inst_31431 = (state_31481[(14)]);
var inst_31432 = (state_31481[(10)]);
var inst_31430 = (state_31481[(2)]);
var inst_31431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31430,(0),null);
var inst_31432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31430,(1),null);
var inst_31435 = (inst_31431__$1 == null);
var inst_31436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31432__$1,change);
var inst_31437 = ((inst_31435) || (inst_31436));
var state_31481__$1 = (function (){var statearr_31523 = state_31481;
(statearr_31523[(14)] = inst_31431__$1);

(statearr_31523[(10)] = inst_31432__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31437)){
var statearr_31524_32908 = state_31481__$1;
(statearr_31524_32908[(1)] = (23));

} else {
var statearr_31525_32909 = state_31481__$1;
(statearr_31525_32909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (36))){
var inst_31422 = (state_31481[(12)]);
var inst_31399 = inst_31422;
var state_31481__$1 = (function (){var statearr_31526 = state_31481;
(statearr_31526[(7)] = inst_31399);

return statearr_31526;
})();
var statearr_31527_32910 = state_31481__$1;
(statearr_31527_32910[(2)] = null);

(statearr_31527_32910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (29))){
var inst_31451 = (state_31481[(11)]);
var state_31481__$1 = state_31481;
var statearr_31529_32911 = state_31481__$1;
(statearr_31529_32911[(2)] = inst_31451);

(statearr_31529_32911[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (6))){
var state_31481__$1 = state_31481;
var statearr_31533_32912 = state_31481__$1;
(statearr_31533_32912[(2)] = false);

(statearr_31533_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (28))){
var inst_31444 = (state_31481[(2)]);
var inst_31448 = calc_state();
var inst_31399 = inst_31448;
var state_31481__$1 = (function (){var statearr_31536 = state_31481;
(statearr_31536[(15)] = inst_31444);

(statearr_31536[(7)] = inst_31399);

return statearr_31536;
})();
var statearr_31538_32914 = state_31481__$1;
(statearr_31538_32914[(2)] = null);

(statearr_31538_32914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (25))){
var inst_31477 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31541_32915 = state_31481__$1;
(statearr_31541_32915[(2)] = inst_31477);

(statearr_31541_32915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (34))){
var inst_31475 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31543_32916 = state_31481__$1;
(statearr_31543_32916[(2)] = inst_31475);

(statearr_31543_32916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (17))){
var state_31481__$1 = state_31481;
var statearr_31546_32917 = state_31481__$1;
(statearr_31546_32917[(2)] = false);

(statearr_31546_32917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (3))){
var state_31481__$1 = state_31481;
var statearr_31547_32918 = state_31481__$1;
(statearr_31547_32918[(2)] = false);

(statearr_31547_32918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (12))){
var inst_31479 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31481__$1,inst_31479);
} else {
if((state_val_31486 === (2))){
var inst_31374 = (state_31481[(8)]);
var inst_31379 = inst_31374.cljs$lang$protocol_mask$partition0$;
var inst_31380 = (inst_31379 & (64));
var inst_31381 = inst_31374.cljs$core$ISeq$;
var inst_31382 = (cljs.core.PROTOCOL_SENTINEL === inst_31381);
var inst_31383 = ((inst_31380) || (inst_31382));
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31383)){
var statearr_31548_32919 = state_31481__$1;
(statearr_31548_32919[(1)] = (5));

} else {
var statearr_31553_32920 = state_31481__$1;
(statearr_31553_32920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (23))){
var inst_31431 = (state_31481[(14)]);
var inst_31439 = (inst_31431 == null);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31439)){
var statearr_31555_32921 = state_31481__$1;
(statearr_31555_32921[(1)] = (26));

} else {
var statearr_31556_32922 = state_31481__$1;
(statearr_31556_32922[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (35))){
var inst_31465 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
if(cljs.core.truth_(inst_31465)){
var statearr_31559_32923 = state_31481__$1;
(statearr_31559_32923[(1)] = (36));

} else {
var statearr_31560_32924 = state_31481__$1;
(statearr_31560_32924[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (19))){
var inst_31399 = (state_31481[(7)]);
var inst_31419 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31399);
var state_31481__$1 = state_31481;
var statearr_31561_32925 = state_31481__$1;
(statearr_31561_32925[(2)] = inst_31419);

(statearr_31561_32925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (11))){
var inst_31399 = (state_31481[(7)]);
var inst_31403 = (inst_31399 == null);
var inst_31404 = cljs.core.not(inst_31403);
var state_31481__$1 = state_31481;
if(inst_31404){
var statearr_31562_32926 = state_31481__$1;
(statearr_31562_32926[(1)] = (13));

} else {
var statearr_31563_32927 = state_31481__$1;
(statearr_31563_32927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (9))){
var inst_31374 = (state_31481[(8)]);
var state_31481__$1 = state_31481;
var statearr_31564_32928 = state_31481__$1;
(statearr_31564_32928[(2)] = inst_31374);

(statearr_31564_32928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (5))){
var state_31481__$1 = state_31481;
var statearr_31565_32929 = state_31481__$1;
(statearr_31565_32929[(2)] = true);

(statearr_31565_32929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (14))){
var state_31481__$1 = state_31481;
var statearr_31568_32930 = state_31481__$1;
(statearr_31568_32930[(2)] = false);

(statearr_31568_32930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (26))){
var inst_31432 = (state_31481[(10)]);
var inst_31441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31432);
var state_31481__$1 = state_31481;
var statearr_31571_32931 = state_31481__$1;
(statearr_31571_32931[(2)] = inst_31441);

(statearr_31571_32931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (16))){
var state_31481__$1 = state_31481;
var statearr_31574_32932 = state_31481__$1;
(statearr_31574_32932[(2)] = true);

(statearr_31574_32932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (38))){
var inst_31471 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31575_32933 = state_31481__$1;
(statearr_31575_32933[(2)] = inst_31471);

(statearr_31575_32933[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (30))){
var inst_31423 = (state_31481[(9)]);
var inst_31424 = (state_31481[(13)]);
var inst_31432 = (state_31481[(10)]);
var inst_31455 = cljs.core.empty_QMARK_(inst_31423);
var inst_31456 = (inst_31424.cljs$core$IFn$_invoke$arity$1 ? inst_31424.cljs$core$IFn$_invoke$arity$1(inst_31432) : inst_31424.call(null,inst_31432));
var inst_31458 = cljs.core.not(inst_31456);
var inst_31459 = ((inst_31455) && (inst_31458));
var state_31481__$1 = state_31481;
var statearr_31576_32934 = state_31481__$1;
(statearr_31576_32934[(2)] = inst_31459);

(statearr_31576_32934[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (10))){
var inst_31374 = (state_31481[(8)]);
var inst_31395 = (state_31481[(2)]);
var inst_31396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31399 = inst_31374;
var state_31481__$1 = (function (){var statearr_31587 = state_31481;
(statearr_31587[(7)] = inst_31399);

(statearr_31587[(16)] = inst_31397);

(statearr_31587[(17)] = inst_31396);

(statearr_31587[(18)] = inst_31398);

return statearr_31587;
})();
var statearr_31588_32935 = state_31481__$1;
(statearr_31588_32935[(2)] = null);

(statearr_31588_32935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (18))){
var inst_31414 = (state_31481[(2)]);
var state_31481__$1 = state_31481;
var statearr_31589_32936 = state_31481__$1;
(statearr_31589_32936[(2)] = inst_31414);

(statearr_31589_32936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (37))){
var state_31481__$1 = state_31481;
var statearr_31590_32937 = state_31481__$1;
(statearr_31590_32937[(2)] = null);

(statearr_31590_32937[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (8))){
var inst_31374 = (state_31481[(8)]);
var inst_31392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31374);
var state_31481__$1 = state_31481;
var statearr_31593_32938 = state_31481__$1;
(statearr_31593_32938[(2)] = inst_31392);

(statearr_31593_32938[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30058__auto__ = null;
var cljs$core$async$mix_$_state_machine__30058__auto____0 = (function (){
var statearr_31598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31598[(0)] = cljs$core$async$mix_$_state_machine__30058__auto__);

(statearr_31598[(1)] = (1));

return statearr_31598;
});
var cljs$core$async$mix_$_state_machine__30058__auto____1 = (function (state_31481){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31481);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31602){var ex__30061__auto__ = e31602;
var statearr_31603_32942 = state_31481;
(statearr_31603_32942[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31481[(4)]))){
var statearr_31604_32943 = state_31481;
(statearr_31604_32943[(1)] = cljs.core.first((state_31481[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32944 = state_31481;
state_31481 = G__32944;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30058__auto__ = function(state_31481){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30058__auto____1.call(this,state_31481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30058__auto____0;
cljs$core$async$mix_$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30058__auto____1;
return cljs$core$async$mix_$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31605 = f__30193__auto__();
(statearr_31605[(6)] = c__30192__auto___32837);

return statearr_31605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32945 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32945(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32946 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32946(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32947 = (function() {
var G__32948 = null;
var G__32948__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32948__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32948 = function(p,v){
switch(arguments.length){
case 1:
return G__32948__1.call(this,p);
case 2:
return G__32948__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32948.cljs$core$IFn$_invoke$arity$1 = G__32948__1;
G__32948.cljs$core$IFn$_invoke$arity$2 = G__32948__2;
return G__32948;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31638 = arguments.length;
switch (G__31638) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32947(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32947(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31643 = arguments.length;
switch (G__31643) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31641_SHARP_){
if(cljs.core.truth_((p1__31641_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31641_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31641_SHARP_.call(null,topic)))){
return p1__31641_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31641_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31647 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31648){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31648 = meta31648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31649,meta31648__$1){
var self__ = this;
var _31649__$1 = this;
return (new cljs.core.async.t_cljs$core$async31647(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31648__$1));
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31649){
var self__ = this;
var _31649__$1 = this;
return self__.meta31648;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31648","meta31648",-67931589,null)], null);
}));

(cljs.core.async.t_cljs$core$async31647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31647");

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31647.
 */
cljs.core.async.__GT_t_cljs$core$async31647 = (function cljs$core$async$__GT_t_cljs$core$async31647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31648){
return (new cljs.core.async.t_cljs$core$async31647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31648));
});

}

return (new cljs.core.async.t_cljs$core$async31647(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30192__auto___32957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (7))){
var inst_31726 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31732_32958 = state_31730__$1;
(statearr_31732_32958[(2)] = inst_31726);

(statearr_31732_32958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (20))){
var state_31730__$1 = state_31730;
var statearr_31733_32973 = state_31730__$1;
(statearr_31733_32973[(2)] = null);

(statearr_31733_32973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (1))){
var state_31730__$1 = state_31730;
var statearr_31734_32974 = state_31730__$1;
(statearr_31734_32974[(2)] = null);

(statearr_31734_32974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (24))){
var inst_31709 = (state_31730[(7)]);
var inst_31718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31709);
var state_31730__$1 = state_31730;
var statearr_31735_32975 = state_31730__$1;
(statearr_31735_32975[(2)] = inst_31718);

(statearr_31735_32975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (4))){
var inst_31661 = (state_31730[(8)]);
var inst_31661__$1 = (state_31730[(2)]);
var inst_31662 = (inst_31661__$1 == null);
var state_31730__$1 = (function (){var statearr_31736 = state_31730;
(statearr_31736[(8)] = inst_31661__$1);

return statearr_31736;
})();
if(cljs.core.truth_(inst_31662)){
var statearr_31737_32976 = state_31730__$1;
(statearr_31737_32976[(1)] = (5));

} else {
var statearr_31738_32977 = state_31730__$1;
(statearr_31738_32977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (15))){
var inst_31703 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31739_32978 = state_31730__$1;
(statearr_31739_32978[(2)] = inst_31703);

(statearr_31739_32978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (21))){
var inst_31723 = (state_31730[(2)]);
var state_31730__$1 = (function (){var statearr_31740 = state_31730;
(statearr_31740[(9)] = inst_31723);

return statearr_31740;
})();
var statearr_31741_32979 = state_31730__$1;
(statearr_31741_32979[(2)] = null);

(statearr_31741_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (13))){
var inst_31685 = (state_31730[(10)]);
var inst_31687 = cljs.core.chunked_seq_QMARK_(inst_31685);
var state_31730__$1 = state_31730;
if(inst_31687){
var statearr_31742_32980 = state_31730__$1;
(statearr_31742_32980[(1)] = (16));

} else {
var statearr_31743_32981 = state_31730__$1;
(statearr_31743_32981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (22))){
var inst_31715 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31715)){
var statearr_31744_32982 = state_31730__$1;
(statearr_31744_32982[(1)] = (23));

} else {
var statearr_31745_32983 = state_31730__$1;
(statearr_31745_32983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (6))){
var inst_31661 = (state_31730[(8)]);
var inst_31709 = (state_31730[(7)]);
var inst_31711 = (state_31730[(11)]);
var inst_31709__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31661) : topic_fn.call(null,inst_31661));
var inst_31710 = cljs.core.deref(mults);
var inst_31711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31710,inst_31709__$1);
var state_31730__$1 = (function (){var statearr_31746 = state_31730;
(statearr_31746[(7)] = inst_31709__$1);

(statearr_31746[(11)] = inst_31711__$1);

return statearr_31746;
})();
if(cljs.core.truth_(inst_31711__$1)){
var statearr_31747_32984 = state_31730__$1;
(statearr_31747_32984[(1)] = (19));

} else {
var statearr_31748_32985 = state_31730__$1;
(statearr_31748_32985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (25))){
var inst_31720 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31749_32986 = state_31730__$1;
(statearr_31749_32986[(2)] = inst_31720);

(statearr_31749_32986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (17))){
var inst_31685 = (state_31730[(10)]);
var inst_31694 = cljs.core.first(inst_31685);
var inst_31695 = cljs.core.async.muxch_STAR_(inst_31694);
var inst_31696 = cljs.core.async.close_BANG_(inst_31695);
var inst_31697 = cljs.core.next(inst_31685);
var inst_31671 = inst_31697;
var inst_31672 = null;
var inst_31673 = (0);
var inst_31674 = (0);
var state_31730__$1 = (function (){var statearr_31750 = state_31730;
(statearr_31750[(12)] = inst_31696);

(statearr_31750[(13)] = inst_31674);

(statearr_31750[(14)] = inst_31672);

(statearr_31750[(15)] = inst_31671);

(statearr_31750[(16)] = inst_31673);

return statearr_31750;
})();
var statearr_31751_32987 = state_31730__$1;
(statearr_31751_32987[(2)] = null);

(statearr_31751_32987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (3))){
var inst_31728 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31730__$1,inst_31728);
} else {
if((state_val_31731 === (12))){
var inst_31705 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31752_32988 = state_31730__$1;
(statearr_31752_32988[(2)] = inst_31705);

(statearr_31752_32988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (2))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31730__$1,(4),ch);
} else {
if((state_val_31731 === (23))){
var state_31730__$1 = state_31730;
var statearr_31754_32989 = state_31730__$1;
(statearr_31754_32989[(2)] = null);

(statearr_31754_32989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (19))){
var inst_31661 = (state_31730[(8)]);
var inst_31711 = (state_31730[(11)]);
var inst_31713 = cljs.core.async.muxch_STAR_(inst_31711);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31730__$1,(22),inst_31713,inst_31661);
} else {
if((state_val_31731 === (11))){
var inst_31671 = (state_31730[(15)]);
var inst_31685 = (state_31730[(10)]);
var inst_31685__$1 = cljs.core.seq(inst_31671);
var state_31730__$1 = (function (){var statearr_31755 = state_31730;
(statearr_31755[(10)] = inst_31685__$1);

return statearr_31755;
})();
if(inst_31685__$1){
var statearr_31756_32990 = state_31730__$1;
(statearr_31756_32990[(1)] = (13));

} else {
var statearr_31757_32991 = state_31730__$1;
(statearr_31757_32991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (9))){
var inst_31707 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31758_32992 = state_31730__$1;
(statearr_31758_32992[(2)] = inst_31707);

(statearr_31758_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (5))){
var inst_31668 = cljs.core.deref(mults);
var inst_31669 = cljs.core.vals(inst_31668);
var inst_31670 = cljs.core.seq(inst_31669);
var inst_31671 = inst_31670;
var inst_31672 = null;
var inst_31673 = (0);
var inst_31674 = (0);
var state_31730__$1 = (function (){var statearr_31759 = state_31730;
(statearr_31759[(13)] = inst_31674);

(statearr_31759[(14)] = inst_31672);

(statearr_31759[(15)] = inst_31671);

(statearr_31759[(16)] = inst_31673);

return statearr_31759;
})();
var statearr_31760_32993 = state_31730__$1;
(statearr_31760_32993[(2)] = null);

(statearr_31760_32993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (14))){
var state_31730__$1 = state_31730;
var statearr_31764_32994 = state_31730__$1;
(statearr_31764_32994[(2)] = null);

(statearr_31764_32994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (16))){
var inst_31685 = (state_31730[(10)]);
var inst_31689 = cljs.core.chunk_first(inst_31685);
var inst_31690 = cljs.core.chunk_rest(inst_31685);
var inst_31691 = cljs.core.count(inst_31689);
var inst_31671 = inst_31690;
var inst_31672 = inst_31689;
var inst_31673 = inst_31691;
var inst_31674 = (0);
var state_31730__$1 = (function (){var statearr_31765 = state_31730;
(statearr_31765[(13)] = inst_31674);

(statearr_31765[(14)] = inst_31672);

(statearr_31765[(15)] = inst_31671);

(statearr_31765[(16)] = inst_31673);

return statearr_31765;
})();
var statearr_31766_32998 = state_31730__$1;
(statearr_31766_32998[(2)] = null);

(statearr_31766_32998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (10))){
var inst_31674 = (state_31730[(13)]);
var inst_31672 = (state_31730[(14)]);
var inst_31671 = (state_31730[(15)]);
var inst_31673 = (state_31730[(16)]);
var inst_31679 = cljs.core._nth(inst_31672,inst_31674);
var inst_31680 = cljs.core.async.muxch_STAR_(inst_31679);
var inst_31681 = cljs.core.async.close_BANG_(inst_31680);
var inst_31682 = (inst_31674 + (1));
var tmp31761 = inst_31672;
var tmp31762 = inst_31671;
var tmp31763 = inst_31673;
var inst_31671__$1 = tmp31762;
var inst_31672__$1 = tmp31761;
var inst_31673__$1 = tmp31763;
var inst_31674__$1 = inst_31682;
var state_31730__$1 = (function (){var statearr_31767 = state_31730;
(statearr_31767[(13)] = inst_31674__$1);

(statearr_31767[(14)] = inst_31672__$1);

(statearr_31767[(17)] = inst_31681);

(statearr_31767[(15)] = inst_31671__$1);

(statearr_31767[(16)] = inst_31673__$1);

return statearr_31767;
})();
var statearr_31769_32999 = state_31730__$1;
(statearr_31769_32999[(2)] = null);

(statearr_31769_32999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (18))){
var inst_31700 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31770_33000 = state_31730__$1;
(statearr_31770_33000[(2)] = inst_31700);

(statearr_31770_33000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (8))){
var inst_31674 = (state_31730[(13)]);
var inst_31673 = (state_31730[(16)]);
var inst_31676 = (inst_31674 < inst_31673);
var inst_31677 = inst_31676;
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31677)){
var statearr_31771_33001 = state_31730__$1;
(statearr_31771_33001[(1)] = (10));

} else {
var statearr_31772_33002 = state_31730__$1;
(statearr_31772_33002[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_31777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31777[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_31777[(1)] = (1));

return statearr_31777;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_31730){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31730);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31782){var ex__30061__auto__ = e31782;
var statearr_31783_33006 = state_31730;
(statearr_31783_33006[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31730[(4)]))){
var statearr_31784_33007 = state_31730;
(statearr_31784_33007[(1)] = cljs.core.first((state_31730[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_31730;
state_31730 = G__33008;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31785 = f__30193__auto__();
(statearr_31785[(6)] = c__30192__auto___32957);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31787 = arguments.length;
switch (G__31787) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31793 = arguments.length;
switch (G__31793) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31795 = arguments.length;
switch (G__31795) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30192__auto___33013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31838){
var state_val_31839 = (state_31838[(1)]);
if((state_val_31839 === (7))){
var state_31838__$1 = state_31838;
var statearr_31840_33014 = state_31838__$1;
(statearr_31840_33014[(2)] = null);

(statearr_31840_33014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (1))){
var state_31838__$1 = state_31838;
var statearr_31841_33015 = state_31838__$1;
(statearr_31841_33015[(2)] = null);

(statearr_31841_33015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (4))){
var inst_31798 = (state_31838[(7)]);
var inst_31799 = (state_31838[(8)]);
var inst_31801 = (inst_31799 < inst_31798);
var state_31838__$1 = state_31838;
if(cljs.core.truth_(inst_31801)){
var statearr_31842_33016 = state_31838__$1;
(statearr_31842_33016[(1)] = (6));

} else {
var statearr_31843_33017 = state_31838__$1;
(statearr_31843_33017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (15))){
var inst_31824 = (state_31838[(9)]);
var inst_31829 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31824);
var state_31838__$1 = state_31838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31838__$1,(17),out,inst_31829);
} else {
if((state_val_31839 === (13))){
var inst_31824 = (state_31838[(9)]);
var inst_31824__$1 = (state_31838[(2)]);
var inst_31825 = cljs.core.some(cljs.core.nil_QMARK_,inst_31824__$1);
var state_31838__$1 = (function (){var statearr_31844 = state_31838;
(statearr_31844[(9)] = inst_31824__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31825)){
var statearr_31845_33018 = state_31838__$1;
(statearr_31845_33018[(1)] = (14));

} else {
var statearr_31846_33019 = state_31838__$1;
(statearr_31846_33019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (6))){
var state_31838__$1 = state_31838;
var statearr_31847_33020 = state_31838__$1;
(statearr_31847_33020[(2)] = null);

(statearr_31847_33020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (17))){
var inst_31831 = (state_31838[(2)]);
var state_31838__$1 = (function (){var statearr_31849 = state_31838;
(statearr_31849[(10)] = inst_31831);

return statearr_31849;
})();
var statearr_31850_33021 = state_31838__$1;
(statearr_31850_33021[(2)] = null);

(statearr_31850_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (3))){
var inst_31836 = (state_31838[(2)]);
var state_31838__$1 = state_31838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31838__$1,inst_31836);
} else {
if((state_val_31839 === (12))){
var _ = (function (){var statearr_31851 = state_31838;
(statearr_31851[(4)] = cljs.core.rest((state_31838[(4)])));

return statearr_31851;
})();
var state_31838__$1 = state_31838;
var ex31848 = (state_31838__$1[(2)]);
var statearr_31852_33022 = state_31838__$1;
(statearr_31852_33022[(5)] = ex31848);


if((ex31848 instanceof Object)){
var statearr_31853_33023 = state_31838__$1;
(statearr_31853_33023[(1)] = (11));

(statearr_31853_33023[(5)] = null);

} else {
throw ex31848;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (2))){
var inst_31797 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31798 = cnt;
var inst_31799 = (0);
var state_31838__$1 = (function (){var statearr_31854 = state_31838;
(statearr_31854[(11)] = inst_31797);

(statearr_31854[(7)] = inst_31798);

(statearr_31854[(8)] = inst_31799);

return statearr_31854;
})();
var statearr_31855_33024 = state_31838__$1;
(statearr_31855_33024[(2)] = null);

(statearr_31855_33024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (11))){
var inst_31803 = (state_31838[(2)]);
var inst_31804 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31838__$1 = (function (){var statearr_31856 = state_31838;
(statearr_31856[(12)] = inst_31803);

return statearr_31856;
})();
var statearr_31857_33025 = state_31838__$1;
(statearr_31857_33025[(2)] = inst_31804);

(statearr_31857_33025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (9))){
var inst_31799 = (state_31838[(8)]);
var _ = (function (){var statearr_31858 = state_31838;
(statearr_31858[(4)] = cljs.core.cons((12),(state_31838[(4)])));

return statearr_31858;
})();
var inst_31810 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31799) : chs__$1.call(null,inst_31799));
var inst_31811 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31799) : done.call(null,inst_31799));
var inst_31812 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31810,inst_31811);
var ___$1 = (function (){var statearr_31859 = state_31838;
(statearr_31859[(4)] = cljs.core.rest((state_31838[(4)])));

return statearr_31859;
})();
var state_31838__$1 = state_31838;
var statearr_31860_33026 = state_31838__$1;
(statearr_31860_33026[(2)] = inst_31812);

(statearr_31860_33026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (5))){
var inst_31822 = (state_31838[(2)]);
var state_31838__$1 = (function (){var statearr_31861 = state_31838;
(statearr_31861[(13)] = inst_31822);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31838__$1,(13),dchan);
} else {
if((state_val_31839 === (14))){
var inst_31827 = cljs.core.async.close_BANG_(out);
var state_31838__$1 = state_31838;
var statearr_31862_33027 = state_31838__$1;
(statearr_31862_33027[(2)] = inst_31827);

(statearr_31862_33027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (16))){
var inst_31834 = (state_31838[(2)]);
var state_31838__$1 = state_31838;
var statearr_31863_33028 = state_31838__$1;
(statearr_31863_33028[(2)] = inst_31834);

(statearr_31863_33028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (10))){
var inst_31799 = (state_31838[(8)]);
var inst_31815 = (state_31838[(2)]);
var inst_31816 = (inst_31799 + (1));
var inst_31799__$1 = inst_31816;
var state_31838__$1 = (function (){var statearr_31864 = state_31838;
(statearr_31864[(14)] = inst_31815);

(statearr_31864[(8)] = inst_31799__$1);

return statearr_31864;
})();
var statearr_31865_33029 = state_31838__$1;
(statearr_31865_33029[(2)] = null);

(statearr_31865_33029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31839 === (8))){
var inst_31820 = (state_31838[(2)]);
var state_31838__$1 = state_31838;
var statearr_31866_33031 = state_31838__$1;
(statearr_31866_33031[(2)] = inst_31820);

(statearr_31866_33031[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_31867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31867[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_31867[(1)] = (1));

return statearr_31867;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_31838){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31838);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31868){var ex__30061__auto__ = e31868;
var statearr_31869_33035 = state_31838;
(statearr_31869_33035[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31838[(4)]))){
var statearr_31870_33037 = state_31838;
(statearr_31870_33037[(1)] = cljs.core.first((state_31838[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_31838;
state_31838 = G__33041;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_31838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_31838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31871 = f__30193__auto__();
(statearr_31871[(6)] = c__30192__auto___33013);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31874 = arguments.length;
switch (G__31874) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31906){
var state_val_31907 = (state_31906[(1)]);
if((state_val_31907 === (7))){
var inst_31886 = (state_31906[(7)]);
var inst_31885 = (state_31906[(8)]);
var inst_31885__$1 = (state_31906[(2)]);
var inst_31886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31885__$1,(0),null);
var inst_31887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31885__$1,(1),null);
var inst_31888 = (inst_31886__$1 == null);
var state_31906__$1 = (function (){var statearr_31908 = state_31906;
(statearr_31908[(7)] = inst_31886__$1);

(statearr_31908[(8)] = inst_31885__$1);

(statearr_31908[(9)] = inst_31887);

return statearr_31908;
})();
if(cljs.core.truth_(inst_31888)){
var statearr_31909_33046 = state_31906__$1;
(statearr_31909_33046[(1)] = (8));

} else {
var statearr_31910_33047 = state_31906__$1;
(statearr_31910_33047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (1))){
var inst_31875 = cljs.core.vec(chs);
var inst_31876 = inst_31875;
var state_31906__$1 = (function (){var statearr_31911 = state_31906;
(statearr_31911[(10)] = inst_31876);

return statearr_31911;
})();
var statearr_31912_33067 = state_31906__$1;
(statearr_31912_33067[(2)] = null);

(statearr_31912_33067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (4))){
var inst_31876 = (state_31906[(10)]);
var state_31906__$1 = state_31906;
return cljs.core.async.ioc_alts_BANG_(state_31906__$1,(7),inst_31876);
} else {
if((state_val_31907 === (6))){
var inst_31902 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
var statearr_31913_33074 = state_31906__$1;
(statearr_31913_33074[(2)] = inst_31902);

(statearr_31913_33074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (3))){
var inst_31904 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31906__$1,inst_31904);
} else {
if((state_val_31907 === (2))){
var inst_31876 = (state_31906[(10)]);
var inst_31878 = cljs.core.count(inst_31876);
var inst_31879 = (inst_31878 > (0));
var state_31906__$1 = state_31906;
if(cljs.core.truth_(inst_31879)){
var statearr_31915_33084 = state_31906__$1;
(statearr_31915_33084[(1)] = (4));

} else {
var statearr_31916_33085 = state_31906__$1;
(statearr_31916_33085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (11))){
var inst_31876 = (state_31906[(10)]);
var inst_31895 = (state_31906[(2)]);
var tmp31914 = inst_31876;
var inst_31876__$1 = tmp31914;
var state_31906__$1 = (function (){var statearr_31917 = state_31906;
(statearr_31917[(10)] = inst_31876__$1);

(statearr_31917[(11)] = inst_31895);

return statearr_31917;
})();
var statearr_31918_33086 = state_31906__$1;
(statearr_31918_33086[(2)] = null);

(statearr_31918_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (9))){
var inst_31886 = (state_31906[(7)]);
var state_31906__$1 = state_31906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31906__$1,(11),out,inst_31886);
} else {
if((state_val_31907 === (5))){
var inst_31900 = cljs.core.async.close_BANG_(out);
var state_31906__$1 = state_31906;
var statearr_31919_33093 = state_31906__$1;
(statearr_31919_33093[(2)] = inst_31900);

(statearr_31919_33093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (10))){
var inst_31898 = (state_31906[(2)]);
var state_31906__$1 = state_31906;
var statearr_31920_33094 = state_31906__$1;
(statearr_31920_33094[(2)] = inst_31898);

(statearr_31920_33094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31907 === (8))){
var inst_31886 = (state_31906[(7)]);
var inst_31885 = (state_31906[(8)]);
var inst_31876 = (state_31906[(10)]);
var inst_31887 = (state_31906[(9)]);
var inst_31890 = (function (){var cs = inst_31876;
var vec__31881 = inst_31885;
var v = inst_31886;
var c = inst_31887;
return (function (p1__31872_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31872_SHARP_);
});
})();
var inst_31891 = cljs.core.filterv(inst_31890,inst_31876);
var inst_31876__$1 = inst_31891;
var state_31906__$1 = (function (){var statearr_31921 = state_31906;
(statearr_31921[(10)] = inst_31876__$1);

return statearr_31921;
})();
var statearr_31922_33095 = state_31906__$1;
(statearr_31922_33095[(2)] = null);

(statearr_31922_33095[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_31923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31923[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_31923[(1)] = (1));

return statearr_31923;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_31906){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31906);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31924){var ex__30061__auto__ = e31924;
var statearr_31925_33110 = state_31906;
(statearr_31925_33110[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31906[(4)]))){
var statearr_31926_33111 = state_31906;
(statearr_31926_33111[(1)] = cljs.core.first((state_31906[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33112 = state_31906;
state_31906 = G__33112;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_31906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_31906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31927 = f__30193__auto__();
(statearr_31927[(6)] = c__30192__auto___33043);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31929 = arguments.length;
switch (G__31929) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31935 = (state_31953[(7)]);
var inst_31935__$1 = (state_31953[(2)]);
var inst_31936 = (inst_31935__$1 == null);
var inst_31937 = cljs.core.not(inst_31936);
var state_31953__$1 = (function (){var statearr_31955 = state_31953;
(statearr_31955[(7)] = inst_31935__$1);

return statearr_31955;
})();
if(inst_31937){
var statearr_31956_33121 = state_31953__$1;
(statearr_31956_33121[(1)] = (8));

} else {
var statearr_31957_33122 = state_31953__$1;
(statearr_31957_33122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (1))){
var inst_31930 = (0);
var state_31953__$1 = (function (){var statearr_31958 = state_31953;
(statearr_31958[(8)] = inst_31930);

return statearr_31958;
})();
var statearr_31959_33123 = state_31953__$1;
(statearr_31959_33123[(2)] = null);

(statearr_31959_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (4))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31953__$1,(7),ch);
} else {
if((state_val_31954 === (6))){
var inst_31948 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31960_33124 = state_31953__$1;
(statearr_31960_33124[(2)] = inst_31948);

(statearr_31960_33124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (3))){
var inst_31950 = (state_31953[(2)]);
var inst_31951 = cljs.core.async.close_BANG_(out);
var state_31953__$1 = (function (){var statearr_31961 = state_31953;
(statearr_31961[(9)] = inst_31950);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (2))){
var inst_31930 = (state_31953[(8)]);
var inst_31932 = (inst_31930 < n);
var state_31953__$1 = state_31953;
if(cljs.core.truth_(inst_31932)){
var statearr_31962_33125 = state_31953__$1;
(statearr_31962_33125[(1)] = (4));

} else {
var statearr_31963_33126 = state_31953__$1;
(statearr_31963_33126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (11))){
var inst_31930 = (state_31953[(8)]);
var inst_31940 = (state_31953[(2)]);
var inst_31941 = (inst_31930 + (1));
var inst_31930__$1 = inst_31941;
var state_31953__$1 = (function (){var statearr_31964 = state_31953;
(statearr_31964[(10)] = inst_31940);

(statearr_31964[(8)] = inst_31930__$1);

return statearr_31964;
})();
var statearr_31965_33127 = state_31953__$1;
(statearr_31965_33127[(2)] = null);

(statearr_31965_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (9))){
var state_31953__$1 = state_31953;
var statearr_31966_33128 = state_31953__$1;
(statearr_31966_33128[(2)] = null);

(statearr_31966_33128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (5))){
var state_31953__$1 = state_31953;
var statearr_31967_33129 = state_31953__$1;
(statearr_31967_33129[(2)] = null);

(statearr_31967_33129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (10))){
var inst_31945 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31968_33130 = state_31953__$1;
(statearr_31968_33130[(2)] = inst_31945);

(statearr_31968_33130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (8))){
var inst_31935 = (state_31953[(7)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31953__$1,(11),out,inst_31935);
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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_31969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31969[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_31969[(1)] = (1));

return statearr_31969;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_31953){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_31953);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e31970){var ex__30061__auto__ = e31970;
var statearr_31971_33131 = state_31953;
(statearr_31971_33131[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_31953[(4)]))){
var statearr_31972_33132 = state_31953;
(statearr_31972_33132[(1)] = cljs.core.first((state_31953[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33133 = state_31953;
state_31953 = G__33133;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_31973 = f__30193__auto__();
(statearr_31973[(6)] = c__30192__auto___33114);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31975 = (function (f,ch,meta31976){
this.f = f;
this.ch = ch;
this.meta31976 = meta31976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31977,meta31976__$1){
var self__ = this;
var _31977__$1 = this;
return (new cljs.core.async.t_cljs$core$async31975(self__.f,self__.ch,meta31976__$1));
}));

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31977){
var self__ = this;
var _31977__$1 = this;
return self__.meta31976;
}));

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31978 = (function (f,ch,meta31976,_,fn1,meta31979){
this.f = f;
this.ch = ch;
this.meta31976 = meta31976;
this._ = _;
this.fn1 = fn1;
this.meta31979 = meta31979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31980,meta31979__$1){
var self__ = this;
var _31980__$1 = this;
return (new cljs.core.async.t_cljs$core$async31978(self__.f,self__.ch,self__.meta31976,self__._,self__.fn1,meta31979__$1));
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31980){
var self__ = this;
var _31980__$1 = this;
return self__.meta31979;
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31974_SHARP_){
var G__31981 = (((p1__31974_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31974_SHARP_) : self__.f.call(null,p1__31974_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31981) : f1.call(null,G__31981));
});
}));

(cljs.core.async.t_cljs$core$async31978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31976","meta31976",-1990353333,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31975","cljs.core.async/t_cljs$core$async31975",1246479620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31979","meta31979",-1149354127,null)], null);
}));

(cljs.core.async.t_cljs$core$async31978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31978");

(cljs.core.async.t_cljs$core$async31978.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31978.
 */
cljs.core.async.__GT_t_cljs$core$async31978 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31978(f__$1,ch__$1,meta31976__$1,___$2,fn1__$1,meta31979){
return (new cljs.core.async.t_cljs$core$async31978(f__$1,ch__$1,meta31976__$1,___$2,fn1__$1,meta31979));
});

}

return (new cljs.core.async.t_cljs$core$async31978(self__.f,self__.ch,self__.meta31976,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31982 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31982) : self__.f.call(null,G__31982));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31976","meta31976",-1990353333,null)], null);
}));

(cljs.core.async.t_cljs$core$async31975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31975");

(cljs.core.async.t_cljs$core$async31975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31975.
 */
cljs.core.async.__GT_t_cljs$core$async31975 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31975(f__$1,ch__$1,meta31976){
return (new cljs.core.async.t_cljs$core$async31975(f__$1,ch__$1,meta31976));
});

}

return (new cljs.core.async.t_cljs$core$async31975(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31983 = (function (f,ch,meta31984){
this.f = f;
this.ch = ch;
this.meta31984 = meta31984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31985,meta31984__$1){
var self__ = this;
var _31985__$1 = this;
return (new cljs.core.async.t_cljs$core$async31983(self__.f,self__.ch,meta31984__$1));
}));

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31985){
var self__ = this;
var _31985__$1 = this;
return self__.meta31984;
}));

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31984","meta31984",978592901,null)], null);
}));

(cljs.core.async.t_cljs$core$async31983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31983");

(cljs.core.async.t_cljs$core$async31983.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31983.
 */
cljs.core.async.__GT_t_cljs$core$async31983 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31983(f__$1,ch__$1,meta31984){
return (new cljs.core.async.t_cljs$core$async31983(f__$1,ch__$1,meta31984));
});

}

return (new cljs.core.async.t_cljs$core$async31983(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31986 = (function (p,ch,meta31987){
this.p = p;
this.ch = ch;
this.meta31987 = meta31987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31988,meta31987__$1){
var self__ = this;
var _31988__$1 = this;
return (new cljs.core.async.t_cljs$core$async31986(self__.p,self__.ch,meta31987__$1));
}));

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31988){
var self__ = this;
var _31988__$1 = this;
return self__.meta31987;
}));

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31987","meta31987",-1364171347,null)], null);
}));

(cljs.core.async.t_cljs$core$async31986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31986");

(cljs.core.async.t_cljs$core$async31986.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31986.
 */
cljs.core.async.__GT_t_cljs$core$async31986 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31986(p__$1,ch__$1,meta31987){
return (new cljs.core.async.t_cljs$core$async31986(p__$1,ch__$1,meta31987));
});

}

return (new cljs.core.async.t_cljs$core$async31986(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31990 = arguments.length;
switch (G__31990) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_32011){
var state_val_32012 = (state_32011[(1)]);
if((state_val_32012 === (7))){
var inst_32007 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
var statearr_32013_33152 = state_32011__$1;
(statearr_32013_33152[(2)] = inst_32007);

(statearr_32013_33152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (1))){
var state_32011__$1 = state_32011;
var statearr_32014_33153 = state_32011__$1;
(statearr_32014_33153[(2)] = null);

(statearr_32014_33153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (4))){
var inst_31993 = (state_32011[(7)]);
var inst_31993__$1 = (state_32011[(2)]);
var inst_31994 = (inst_31993__$1 == null);
var state_32011__$1 = (function (){var statearr_32015 = state_32011;
(statearr_32015[(7)] = inst_31993__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31994)){
var statearr_32016_33154 = state_32011__$1;
(statearr_32016_33154[(1)] = (5));

} else {
var statearr_32017_33155 = state_32011__$1;
(statearr_32017_33155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (6))){
var inst_31993 = (state_32011[(7)]);
var inst_31998 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31993) : p.call(null,inst_31993));
var state_32011__$1 = state_32011;
if(cljs.core.truth_(inst_31998)){
var statearr_32018_33156 = state_32011__$1;
(statearr_32018_33156[(1)] = (8));

} else {
var statearr_32019_33161 = state_32011__$1;
(statearr_32019_33161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (3))){
var inst_32009 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32011__$1,inst_32009);
} else {
if((state_val_32012 === (2))){
var state_32011__$1 = state_32011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32011__$1,(4),ch);
} else {
if((state_val_32012 === (11))){
var inst_32001 = (state_32011[(2)]);
var state_32011__$1 = state_32011;
var statearr_32020_33188 = state_32011__$1;
(statearr_32020_33188[(2)] = inst_32001);

(statearr_32020_33188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (9))){
var state_32011__$1 = state_32011;
var statearr_32021_33192 = state_32011__$1;
(statearr_32021_33192[(2)] = null);

(statearr_32021_33192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (5))){
var inst_31996 = cljs.core.async.close_BANG_(out);
var state_32011__$1 = state_32011;
var statearr_32022_33194 = state_32011__$1;
(statearr_32022_33194[(2)] = inst_31996);

(statearr_32022_33194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (10))){
var inst_32004 = (state_32011[(2)]);
var state_32011__$1 = (function (){var statearr_32023 = state_32011;
(statearr_32023[(8)] = inst_32004);

return statearr_32023;
})();
var statearr_32024_33196 = state_32011__$1;
(statearr_32024_33196[(2)] = null);

(statearr_32024_33196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (8))){
var inst_31993 = (state_32011[(7)]);
var state_32011__$1 = state_32011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32011__$1,(11),out,inst_31993);
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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_32011){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_32011);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e32026){var ex__30061__auto__ = e32026;
var statearr_32027_33198 = state_32011;
(statearr_32027_33198[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_32011[(4)]))){
var statearr_32028_33199 = state_32011;
(statearr_32028_33199[(1)] = cljs.core.first((state_32011[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33201 = state_32011;
state_32011 = G__33201;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_32011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_32011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32029 = f__30193__auto__();
(statearr_32029[(6)] = c__30192__auto___33151);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32031 = arguments.length;
switch (G__32031) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30192__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_32093){
var state_val_32094 = (state_32093[(1)]);
if((state_val_32094 === (7))){
var inst_32089 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32095_33204 = state_32093__$1;
(statearr_32095_33204[(2)] = inst_32089);

(statearr_32095_33204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (20))){
var inst_32059 = (state_32093[(7)]);
var inst_32070 = (state_32093[(2)]);
var inst_32071 = cljs.core.next(inst_32059);
var inst_32045 = inst_32071;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32096 = state_32093;
(statearr_32096[(8)] = inst_32070);

(statearr_32096[(9)] = inst_32046);

(statearr_32096[(10)] = inst_32048);

(statearr_32096[(11)] = inst_32047);

(statearr_32096[(12)] = inst_32045);

return statearr_32096;
})();
var statearr_32097_33206 = state_32093__$1;
(statearr_32097_33206[(2)] = null);

(statearr_32097_33206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (1))){
var state_32093__$1 = state_32093;
var statearr_32098_33213 = state_32093__$1;
(statearr_32098_33213[(2)] = null);

(statearr_32098_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (4))){
var inst_32034 = (state_32093[(13)]);
var inst_32034__$1 = (state_32093[(2)]);
var inst_32035 = (inst_32034__$1 == null);
var state_32093__$1 = (function (){var statearr_32099 = state_32093;
(statearr_32099[(13)] = inst_32034__$1);

return statearr_32099;
})();
if(cljs.core.truth_(inst_32035)){
var statearr_32100_33214 = state_32093__$1;
(statearr_32100_33214[(1)] = (5));

} else {
var statearr_32101_33216 = state_32093__$1;
(statearr_32101_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (15))){
var state_32093__$1 = state_32093;
var statearr_32105_33217 = state_32093__$1;
(statearr_32105_33217[(2)] = null);

(statearr_32105_33217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (21))){
var state_32093__$1 = state_32093;
var statearr_32106_33218 = state_32093__$1;
(statearr_32106_33218[(2)] = null);

(statearr_32106_33218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (13))){
var inst_32046 = (state_32093[(9)]);
var inst_32048 = (state_32093[(10)]);
var inst_32047 = (state_32093[(11)]);
var inst_32045 = (state_32093[(12)]);
var inst_32055 = (state_32093[(2)]);
var inst_32056 = (inst_32048 + (1));
var tmp32102 = inst_32046;
var tmp32103 = inst_32047;
var tmp32104 = inst_32045;
var inst_32045__$1 = tmp32104;
var inst_32046__$1 = tmp32102;
var inst_32047__$1 = tmp32103;
var inst_32048__$1 = inst_32056;
var state_32093__$1 = (function (){var statearr_32107 = state_32093;
(statearr_32107[(9)] = inst_32046__$1);

(statearr_32107[(10)] = inst_32048__$1);

(statearr_32107[(14)] = inst_32055);

(statearr_32107[(11)] = inst_32047__$1);

(statearr_32107[(12)] = inst_32045__$1);

return statearr_32107;
})();
var statearr_32108_33224 = state_32093__$1;
(statearr_32108_33224[(2)] = null);

(statearr_32108_33224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (22))){
var state_32093__$1 = state_32093;
var statearr_32109_33225 = state_32093__$1;
(statearr_32109_33225[(2)] = null);

(statearr_32109_33225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (6))){
var inst_32034 = (state_32093[(13)]);
var inst_32043 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32034) : f.call(null,inst_32034));
var inst_32044 = cljs.core.seq(inst_32043);
var inst_32045 = inst_32044;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32110 = state_32093;
(statearr_32110[(9)] = inst_32046);

(statearr_32110[(10)] = inst_32048);

(statearr_32110[(11)] = inst_32047);

(statearr_32110[(12)] = inst_32045);

return statearr_32110;
})();
var statearr_32111_33261 = state_32093__$1;
(statearr_32111_33261[(2)] = null);

(statearr_32111_33261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (17))){
var inst_32059 = (state_32093[(7)]);
var inst_32063 = cljs.core.chunk_first(inst_32059);
var inst_32064 = cljs.core.chunk_rest(inst_32059);
var inst_32065 = cljs.core.count(inst_32063);
var inst_32045 = inst_32064;
var inst_32046 = inst_32063;
var inst_32047 = inst_32065;
var inst_32048 = (0);
var state_32093__$1 = (function (){var statearr_32112 = state_32093;
(statearr_32112[(9)] = inst_32046);

(statearr_32112[(10)] = inst_32048);

(statearr_32112[(11)] = inst_32047);

(statearr_32112[(12)] = inst_32045);

return statearr_32112;
})();
var statearr_32113_33262 = state_32093__$1;
(statearr_32113_33262[(2)] = null);

(statearr_32113_33262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (3))){
var inst_32091 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32093__$1,inst_32091);
} else {
if((state_val_32094 === (12))){
var inst_32079 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32114_33263 = state_32093__$1;
(statearr_32114_33263[(2)] = inst_32079);

(statearr_32114_33263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (2))){
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32093__$1,(4),in$);
} else {
if((state_val_32094 === (23))){
var inst_32087 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32115_33264 = state_32093__$1;
(statearr_32115_33264[(2)] = inst_32087);

(statearr_32115_33264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (19))){
var inst_32074 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32116_33265 = state_32093__$1;
(statearr_32116_33265[(2)] = inst_32074);

(statearr_32116_33265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (11))){
var inst_32059 = (state_32093[(7)]);
var inst_32045 = (state_32093[(12)]);
var inst_32059__$1 = cljs.core.seq(inst_32045);
var state_32093__$1 = (function (){var statearr_32117 = state_32093;
(statearr_32117[(7)] = inst_32059__$1);

return statearr_32117;
})();
if(inst_32059__$1){
var statearr_32118_33268 = state_32093__$1;
(statearr_32118_33268[(1)] = (14));

} else {
var statearr_32119_33271 = state_32093__$1;
(statearr_32119_33271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (9))){
var inst_32081 = (state_32093[(2)]);
var inst_32082 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32093__$1 = (function (){var statearr_32120 = state_32093;
(statearr_32120[(15)] = inst_32081);

return statearr_32120;
})();
if(cljs.core.truth_(inst_32082)){
var statearr_32121_33272 = state_32093__$1;
(statearr_32121_33272[(1)] = (21));

} else {
var statearr_32122_33273 = state_32093__$1;
(statearr_32122_33273[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (5))){
var inst_32037 = cljs.core.async.close_BANG_(out);
var state_32093__$1 = state_32093;
var statearr_32123_33274 = state_32093__$1;
(statearr_32123_33274[(2)] = inst_32037);

(statearr_32123_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (14))){
var inst_32059 = (state_32093[(7)]);
var inst_32061 = cljs.core.chunked_seq_QMARK_(inst_32059);
var state_32093__$1 = state_32093;
if(inst_32061){
var statearr_32124_33276 = state_32093__$1;
(statearr_32124_33276[(1)] = (17));

} else {
var statearr_32125_33277 = state_32093__$1;
(statearr_32125_33277[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (16))){
var inst_32077 = (state_32093[(2)]);
var state_32093__$1 = state_32093;
var statearr_32126_33278 = state_32093__$1;
(statearr_32126_33278[(2)] = inst_32077);

(statearr_32126_33278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32094 === (10))){
var inst_32046 = (state_32093[(9)]);
var inst_32048 = (state_32093[(10)]);
var inst_32053 = cljs.core._nth(inst_32046,inst_32048);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32093__$1,(13),out,inst_32053);
} else {
if((state_val_32094 === (18))){
var inst_32059 = (state_32093[(7)]);
var inst_32068 = cljs.core.first(inst_32059);
var state_32093__$1 = state_32093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32093__$1,(20),out,inst_32068);
} else {
if((state_val_32094 === (8))){
var inst_32048 = (state_32093[(10)]);
var inst_32047 = (state_32093[(11)]);
var inst_32050 = (inst_32048 < inst_32047);
var inst_32051 = inst_32050;
var state_32093__$1 = state_32093;
if(cljs.core.truth_(inst_32051)){
var statearr_32127_33288 = state_32093__$1;
(statearr_32127_33288[(1)] = (10));

} else {
var statearr_32128_33289 = state_32093__$1;
(statearr_32128_33289[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____1 = (function (state_32093){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_32093);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e32130){var ex__30061__auto__ = e32130;
var statearr_32131_33290 = state_32093;
(statearr_32131_33290[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_32093[(4)]))){
var statearr_32132_33291 = state_32093;
(statearr_32132_33291[(1)] = cljs.core.first((state_32093[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33292 = state_32093;
state_32093 = G__33292;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__ = function(state_32093){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____1.call(this,state_32093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30058__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32133 = f__30193__auto__();
(statearr_32133[(6)] = c__30192__auto__);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

return c__30192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32135 = arguments.length;
switch (G__32135) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32137 = arguments.length;
switch (G__32137) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32139 = arguments.length;
switch (G__32139) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_32163){
var state_val_32164 = (state_32163[(1)]);
if((state_val_32164 === (7))){
var inst_32158 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
var statearr_32165_33297 = state_32163__$1;
(statearr_32165_33297[(2)] = inst_32158);

(statearr_32165_33297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (1))){
var inst_32140 = null;
var state_32163__$1 = (function (){var statearr_32166 = state_32163;
(statearr_32166[(7)] = inst_32140);

return statearr_32166;
})();
var statearr_32167_33298 = state_32163__$1;
(statearr_32167_33298[(2)] = null);

(statearr_32167_33298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (4))){
var inst_32143 = (state_32163[(8)]);
var inst_32143__$1 = (state_32163[(2)]);
var inst_32144 = (inst_32143__$1 == null);
var inst_32145 = cljs.core.not(inst_32144);
var state_32163__$1 = (function (){var statearr_32168 = state_32163;
(statearr_32168[(8)] = inst_32143__$1);

return statearr_32168;
})();
if(inst_32145){
var statearr_32169_33299 = state_32163__$1;
(statearr_32169_33299[(1)] = (5));

} else {
var statearr_32170_33300 = state_32163__$1;
(statearr_32170_33300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (6))){
var state_32163__$1 = state_32163;
var statearr_32171_33301 = state_32163__$1;
(statearr_32171_33301[(2)] = null);

(statearr_32171_33301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (3))){
var inst_32160 = (state_32163[(2)]);
var inst_32161 = cljs.core.async.close_BANG_(out);
var state_32163__$1 = (function (){var statearr_32172 = state_32163;
(statearr_32172[(9)] = inst_32160);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32163__$1,inst_32161);
} else {
if((state_val_32164 === (2))){
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32163__$1,(4),ch);
} else {
if((state_val_32164 === (11))){
var inst_32143 = (state_32163[(8)]);
var inst_32152 = (state_32163[(2)]);
var inst_32140 = inst_32143;
var state_32163__$1 = (function (){var statearr_32173 = state_32163;
(statearr_32173[(7)] = inst_32140);

(statearr_32173[(10)] = inst_32152);

return statearr_32173;
})();
var statearr_32174_33311 = state_32163__$1;
(statearr_32174_33311[(2)] = null);

(statearr_32174_33311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (9))){
var inst_32143 = (state_32163[(8)]);
var state_32163__$1 = state_32163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32163__$1,(11),out,inst_32143);
} else {
if((state_val_32164 === (5))){
var inst_32140 = (state_32163[(7)]);
var inst_32143 = (state_32163[(8)]);
var inst_32147 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32143,inst_32140);
var state_32163__$1 = state_32163;
if(inst_32147){
var statearr_32176_33312 = state_32163__$1;
(statearr_32176_33312[(1)] = (8));

} else {
var statearr_32177_33313 = state_32163__$1;
(statearr_32177_33313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (10))){
var inst_32155 = (state_32163[(2)]);
var state_32163__$1 = state_32163;
var statearr_32178_33314 = state_32163__$1;
(statearr_32178_33314[(2)] = inst_32155);

(statearr_32178_33314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32164 === (8))){
var inst_32140 = (state_32163[(7)]);
var tmp32175 = inst_32140;
var inst_32140__$1 = tmp32175;
var state_32163__$1 = (function (){var statearr_32179 = state_32163;
(statearr_32179[(7)] = inst_32140__$1);

return statearr_32179;
})();
var statearr_32180_33315 = state_32163__$1;
(statearr_32180_33315[(2)] = null);

(statearr_32180_33315[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_32163){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_32163);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e32182){var ex__30061__auto__ = e32182;
var statearr_32183_33323 = state_32163;
(statearr_32183_33323[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_32163[(4)]))){
var statearr_32184_33324 = state_32163;
(statearr_32184_33324[(1)] = cljs.core.first((state_32163[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33325 = state_32163;
state_32163 = G__33325;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_32163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_32163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32185 = f__30193__auto__();
(statearr_32185[(6)] = c__30192__auto___33296);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32187 = arguments.length;
switch (G__32187) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_32225){
var state_val_32226 = (state_32225[(1)]);
if((state_val_32226 === (7))){
var inst_32221 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32227_33329 = state_32225__$1;
(statearr_32227_33329[(2)] = inst_32221);

(statearr_32227_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (1))){
var inst_32188 = (new Array(n));
var inst_32189 = inst_32188;
var inst_32190 = (0);
var state_32225__$1 = (function (){var statearr_32228 = state_32225;
(statearr_32228[(7)] = inst_32189);

(statearr_32228[(8)] = inst_32190);

return statearr_32228;
})();
var statearr_32229_33333 = state_32225__$1;
(statearr_32229_33333[(2)] = null);

(statearr_32229_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (4))){
var inst_32193 = (state_32225[(9)]);
var inst_32193__$1 = (state_32225[(2)]);
var inst_32194 = (inst_32193__$1 == null);
var inst_32195 = cljs.core.not(inst_32194);
var state_32225__$1 = (function (){var statearr_32230 = state_32225;
(statearr_32230[(9)] = inst_32193__$1);

return statearr_32230;
})();
if(inst_32195){
var statearr_32231_33391 = state_32225__$1;
(statearr_32231_33391[(1)] = (5));

} else {
var statearr_32232_33392 = state_32225__$1;
(statearr_32232_33392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (15))){
var inst_32215 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32233_33393 = state_32225__$1;
(statearr_32233_33393[(2)] = inst_32215);

(statearr_32233_33393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (13))){
var state_32225__$1 = state_32225;
var statearr_32234_33394 = state_32225__$1;
(statearr_32234_33394[(2)] = null);

(statearr_32234_33394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (6))){
var inst_32190 = (state_32225[(8)]);
var inst_32211 = (inst_32190 > (0));
var state_32225__$1 = state_32225;
if(cljs.core.truth_(inst_32211)){
var statearr_32235_33419 = state_32225__$1;
(statearr_32235_33419[(1)] = (12));

} else {
var statearr_32236_33420 = state_32225__$1;
(statearr_32236_33420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (3))){
var inst_32223 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32225__$1,inst_32223);
} else {
if((state_val_32226 === (12))){
var inst_32189 = (state_32225[(7)]);
var inst_32213 = cljs.core.vec(inst_32189);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32225__$1,(15),out,inst_32213);
} else {
if((state_val_32226 === (2))){
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32225__$1,(4),ch);
} else {
if((state_val_32226 === (11))){
var inst_32205 = (state_32225[(2)]);
var inst_32206 = (new Array(n));
var inst_32189 = inst_32206;
var inst_32190 = (0);
var state_32225__$1 = (function (){var statearr_32237 = state_32225;
(statearr_32237[(7)] = inst_32189);

(statearr_32237[(10)] = inst_32205);

(statearr_32237[(8)] = inst_32190);

return statearr_32237;
})();
var statearr_32238_33421 = state_32225__$1;
(statearr_32238_33421[(2)] = null);

(statearr_32238_33421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (9))){
var inst_32189 = (state_32225[(7)]);
var inst_32203 = cljs.core.vec(inst_32189);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32225__$1,(11),out,inst_32203);
} else {
if((state_val_32226 === (5))){
var inst_32193 = (state_32225[(9)]);
var inst_32189 = (state_32225[(7)]);
var inst_32198 = (state_32225[(11)]);
var inst_32190 = (state_32225[(8)]);
var inst_32197 = (inst_32189[inst_32190] = inst_32193);
var inst_32198__$1 = (inst_32190 + (1));
var inst_32199 = (inst_32198__$1 < n);
var state_32225__$1 = (function (){var statearr_32239 = state_32225;
(statearr_32239[(12)] = inst_32197);

(statearr_32239[(11)] = inst_32198__$1);

return statearr_32239;
})();
if(cljs.core.truth_(inst_32199)){
var statearr_32240_33436 = state_32225__$1;
(statearr_32240_33436[(1)] = (8));

} else {
var statearr_32241_33437 = state_32225__$1;
(statearr_32241_33437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (14))){
var inst_32218 = (state_32225[(2)]);
var inst_32219 = cljs.core.async.close_BANG_(out);
var state_32225__$1 = (function (){var statearr_32243 = state_32225;
(statearr_32243[(13)] = inst_32218);

return statearr_32243;
})();
var statearr_32244_33438 = state_32225__$1;
(statearr_32244_33438[(2)] = inst_32219);

(statearr_32244_33438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (10))){
var inst_32209 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32245_33439 = state_32225__$1;
(statearr_32245_33439[(2)] = inst_32209);

(statearr_32245_33439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (8))){
var inst_32189 = (state_32225[(7)]);
var inst_32198 = (state_32225[(11)]);
var tmp32242 = inst_32189;
var inst_32189__$1 = tmp32242;
var inst_32190 = inst_32198;
var state_32225__$1 = (function (){var statearr_32246 = state_32225;
(statearr_32246[(7)] = inst_32189__$1);

(statearr_32246[(8)] = inst_32190);

return statearr_32246;
})();
var statearr_32247_33440 = state_32225__$1;
(statearr_32247_33440[(2)] = null);

(statearr_32247_33440[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_32248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32248[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_32248[(1)] = (1));

return statearr_32248;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_32225){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_32225);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e32249){var ex__30061__auto__ = e32249;
var statearr_32250_33442 = state_32225;
(statearr_32250_33442[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_32225[(4)]))){
var statearr_32251_33443 = state_32225;
(statearr_32251_33443[(1)] = cljs.core.first((state_32225[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_32225;
state_32225 = G__33444;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_32225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_32225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32252 = f__30193__auto__();
(statearr_32252[(6)] = c__30192__auto___33328);

return statearr_32252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32254 = arguments.length;
switch (G__32254) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30192__auto___33446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var inst_32292 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32298_33447 = state_32296__$1;
(statearr_32298_33447[(2)] = inst_32292);

(statearr_32298_33447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var inst_32255 = [];
var inst_32256 = inst_32255;
var inst_32257 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32296__$1 = (function (){var statearr_32299 = state_32296;
(statearr_32299[(7)] = inst_32256);

(statearr_32299[(8)] = inst_32257);

return statearr_32299;
})();
var statearr_32300_33448 = state_32296__$1;
(statearr_32300_33448[(2)] = null);

(statearr_32300_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var inst_32260 = (state_32296[(9)]);
var inst_32260__$1 = (state_32296[(2)]);
var inst_32261 = (inst_32260__$1 == null);
var inst_32262 = cljs.core.not(inst_32261);
var state_32296__$1 = (function (){var statearr_32301 = state_32296;
(statearr_32301[(9)] = inst_32260__$1);

return statearr_32301;
})();
if(inst_32262){
var statearr_32302_33449 = state_32296__$1;
(statearr_32302_33449[(1)] = (5));

} else {
var statearr_32303_33450 = state_32296__$1;
(statearr_32303_33450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (15))){
var inst_32286 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32304_33451 = state_32296__$1;
(statearr_32304_33451[(2)] = inst_32286);

(statearr_32304_33451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (13))){
var state_32296__$1 = state_32296;
var statearr_32305_33452 = state_32296__$1;
(statearr_32305_33452[(2)] = null);

(statearr_32305_33452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var inst_32256 = (state_32296[(7)]);
var inst_32281 = inst_32256.length;
var inst_32282 = (inst_32281 > (0));
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32282)){
var statearr_32306_33453 = state_32296__$1;
(statearr_32306_33453[(1)] = (12));

} else {
var statearr_32307_33478 = state_32296__$1;
(statearr_32307_33478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var inst_32294 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32296__$1,inst_32294);
} else {
if((state_val_32297 === (12))){
var inst_32256 = (state_32296[(7)]);
var inst_32284 = cljs.core.vec(inst_32256);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(15),out,inst_32284);
} else {
if((state_val_32297 === (2))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32296__$1,(4),ch);
} else {
if((state_val_32297 === (11))){
var inst_32260 = (state_32296[(9)]);
var inst_32264 = (state_32296[(10)]);
var inst_32274 = (state_32296[(2)]);
var inst_32275 = [];
var inst_32276 = inst_32275.push(inst_32260);
var inst_32256 = inst_32275;
var inst_32257 = inst_32264;
var state_32296__$1 = (function (){var statearr_32308 = state_32296;
(statearr_32308[(11)] = inst_32274);

(statearr_32308[(12)] = inst_32276);

(statearr_32308[(7)] = inst_32256);

(statearr_32308[(8)] = inst_32257);

return statearr_32308;
})();
var statearr_32309_33479 = state_32296__$1;
(statearr_32309_33479[(2)] = null);

(statearr_32309_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var inst_32256 = (state_32296[(7)]);
var inst_32272 = cljs.core.vec(inst_32256);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(11),out,inst_32272);
} else {
if((state_val_32297 === (5))){
var inst_32260 = (state_32296[(9)]);
var inst_32264 = (state_32296[(10)]);
var inst_32257 = (state_32296[(8)]);
var inst_32264__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32260) : f.call(null,inst_32260));
var inst_32265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32264__$1,inst_32257);
var inst_32266 = cljs.core.keyword_identical_QMARK_(inst_32257,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32267 = ((inst_32265) || (inst_32266));
var state_32296__$1 = (function (){var statearr_32310 = state_32296;
(statearr_32310[(10)] = inst_32264__$1);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32267)){
var statearr_32311_33480 = state_32296__$1;
(statearr_32311_33480[(1)] = (8));

} else {
var statearr_32312_33481 = state_32296__$1;
(statearr_32312_33481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (14))){
var inst_32289 = (state_32296[(2)]);
var inst_32290 = cljs.core.async.close_BANG_(out);
var state_32296__$1 = (function (){var statearr_32314 = state_32296;
(statearr_32314[(13)] = inst_32289);

return statearr_32314;
})();
var statearr_32315_33482 = state_32296__$1;
(statearr_32315_33482[(2)] = inst_32290);

(statearr_32315_33482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32279 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32316_33483 = state_32296__$1;
(statearr_32316_33483[(2)] = inst_32279);

(statearr_32316_33483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32260 = (state_32296[(9)]);
var inst_32256 = (state_32296[(7)]);
var inst_32264 = (state_32296[(10)]);
var inst_32269 = inst_32256.push(inst_32260);
var tmp32313 = inst_32256;
var inst_32256__$1 = tmp32313;
var inst_32257 = inst_32264;
var state_32296__$1 = (function (){var statearr_32317 = state_32296;
(statearr_32317[(14)] = inst_32269);

(statearr_32317[(7)] = inst_32256__$1);

(statearr_32317[(8)] = inst_32257);

return statearr_32317;
})();
var statearr_32318_33484 = state_32296__$1;
(statearr_32318_33484[(2)] = null);

(statearr_32318_33484[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30058__auto__ = null;
var cljs$core$async$state_machine__30058__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = cljs$core$async$state_machine__30058__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var cljs$core$async$state_machine__30058__auto____1 = (function (state_32296){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_32296);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e32320){var ex__30061__auto__ = e32320;
var statearr_32321_33485 = state_32296;
(statearr_32321_33485[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_32296[(4)]))){
var statearr_32322_33486 = state_32296;
(statearr_32322_33486[(1)] = cljs.core.first((state_32296[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33487 = state_32296;
state_32296 = G__33487;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
cljs$core$async$state_machine__30058__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30058__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30058__auto____0;
cljs$core$async$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30058__auto____1;
return cljs$core$async$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_32323 = f__30193__auto__();
(statearr_32323[(6)] = c__30192__auto___33446);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
