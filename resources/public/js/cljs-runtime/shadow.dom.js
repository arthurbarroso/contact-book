goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33157 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33157(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33158 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33158(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32346 = coll;
var G__32347 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32346,G__32347) : shadow.dom.lazy_native_coll_seq.call(null,G__32346,G__32347));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32356 = arguments.length;
switch (G__32356) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32358 = arguments.length;
switch (G__32358) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32360 = arguments.length;
switch (G__32360) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32363 = arguments.length;
switch (G__32363) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32370 = arguments.length;
switch (G__32370) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32377){if((e32377 instanceof Object)){
var e = e32377;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32377;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32385 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32386 = null;
var count__32387 = (0);
var i__32388 = (0);
while(true){
if((i__32388 < count__32387)){
var el = chunk__32386.cljs$core$IIndexed$_nth$arity$2(null,i__32388);
var handler_33205__$1 = ((function (seq__32385,chunk__32386,count__32387,i__32388,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32385,chunk__32386,count__32387,i__32388,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33205__$1);


var G__33207 = seq__32385;
var G__33208 = chunk__32386;
var G__33209 = count__32387;
var G__33210 = (i__32388 + (1));
seq__32385 = G__33207;
chunk__32386 = G__33208;
count__32387 = G__33209;
i__32388 = G__33210;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32385);
if(temp__5735__auto__){
var seq__32385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32385__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32385__$1);
var G__33231 = cljs.core.chunk_rest(seq__32385__$1);
var G__33232 = c__4556__auto__;
var G__33233 = cljs.core.count(c__4556__auto__);
var G__33234 = (0);
seq__32385 = G__33231;
chunk__32386 = G__33232;
count__32387 = G__33233;
i__32388 = G__33234;
continue;
} else {
var el = cljs.core.first(seq__32385__$1);
var handler_33235__$1 = ((function (seq__32385,chunk__32386,count__32387,i__32388,el,seq__32385__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32385,chunk__32386,count__32387,i__32388,el,seq__32385__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33235__$1);


var G__33236 = cljs.core.next(seq__32385__$1);
var G__33237 = null;
var G__33238 = (0);
var G__33239 = (0);
seq__32385 = G__33236;
chunk__32386 = G__33237;
count__32387 = G__33238;
i__32388 = G__33239;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32409 = arguments.length;
switch (G__32409) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32410 = cljs.core.seq(events);
var chunk__32411 = null;
var count__32412 = (0);
var i__32413 = (0);
while(true){
if((i__32413 < count__32412)){
var vec__32437 = chunk__32411.cljs$core$IIndexed$_nth$arity$2(null,i__32413);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32437,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33241 = seq__32410;
var G__33242 = chunk__32411;
var G__33243 = count__32412;
var G__33244 = (i__32413 + (1));
seq__32410 = G__33241;
chunk__32411 = G__33242;
count__32412 = G__33243;
i__32413 = G__33244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32410);
if(temp__5735__auto__){
var seq__32410__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32410__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32410__$1);
var G__33245 = cljs.core.chunk_rest(seq__32410__$1);
var G__33246 = c__4556__auto__;
var G__33247 = cljs.core.count(c__4556__auto__);
var G__33248 = (0);
seq__32410 = G__33245;
chunk__32411 = G__33246;
count__32412 = G__33247;
i__32413 = G__33248;
continue;
} else {
var vec__32443 = cljs.core.first(seq__32410__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33249 = cljs.core.next(seq__32410__$1);
var G__33250 = null;
var G__33251 = (0);
var G__33252 = (0);
seq__32410 = G__33249;
chunk__32411 = G__33250;
count__32412 = G__33251;
i__32413 = G__33252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32451 = cljs.core.seq(styles);
var chunk__32452 = null;
var count__32453 = (0);
var i__32454 = (0);
while(true){
if((i__32454 < count__32453)){
var vec__32467 = chunk__32452.cljs$core$IIndexed$_nth$arity$2(null,i__32454);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33253 = seq__32451;
var G__33254 = chunk__32452;
var G__33255 = count__32453;
var G__33256 = (i__32454 + (1));
seq__32451 = G__33253;
chunk__32452 = G__33254;
count__32453 = G__33255;
i__32454 = G__33256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32451);
if(temp__5735__auto__){
var seq__32451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32451__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32451__$1);
var G__33257 = cljs.core.chunk_rest(seq__32451__$1);
var G__33258 = c__4556__auto__;
var G__33259 = cljs.core.count(c__4556__auto__);
var G__33260 = (0);
seq__32451 = G__33257;
chunk__32452 = G__33258;
count__32453 = G__33259;
i__32454 = G__33260;
continue;
} else {
var vec__32472 = cljs.core.first(seq__32451__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32472,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33302 = cljs.core.next(seq__32451__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__32451 = G__33302;
chunk__32452 = G__33303;
count__32453 = G__33304;
i__32454 = G__33305;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32477_33306 = key;
var G__32477_33307__$1 = (((G__32477_33306 instanceof cljs.core.Keyword))?G__32477_33306.fqn:null);
switch (G__32477_33307__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33309 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33309,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33309,"aria-");
}
})())){
el.setAttribute(ks_33309,value);
} else {
(el[ks_33309] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32499){
var map__32500 = p__32499;
var map__32500__$1 = (((((!((map__32500 == null))))?(((((map__32500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32500):map__32500);
var props = map__32500__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32500__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32530 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32530,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32530;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32539 = arguments.length;
switch (G__32539) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32543){
var vec__32544 = p__32543;
var seq__32545 = cljs.core.seq(vec__32544);
var first__32546 = cljs.core.first(seq__32545);
var seq__32545__$1 = cljs.core.next(seq__32545);
var nn = first__32546;
var first__32546__$1 = cljs.core.first(seq__32545__$1);
var seq__32545__$2 = cljs.core.next(seq__32545__$1);
var np = first__32546__$1;
var nc = seq__32545__$2;
var node = vec__32544;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32551 = nn;
var G__32552 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32551,G__32552) : create_fn.call(null,G__32551,G__32552));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32553 = nn;
var G__32554 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32553,G__32554) : create_fn.call(null,G__32553,G__32554));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32569 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32569,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32569,(1),null);
var seq__32573_33334 = cljs.core.seq(node_children);
var chunk__32574_33335 = null;
var count__32575_33336 = (0);
var i__32576_33337 = (0);
while(true){
if((i__32576_33337 < count__32575_33336)){
var child_struct_33338 = chunk__32574_33335.cljs$core$IIndexed$_nth$arity$2(null,i__32576_33337);
var children_33339 = shadow.dom.dom_node(child_struct_33338);
if(cljs.core.seq_QMARK_(children_33339)){
var seq__32626_33340 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33339));
var chunk__32628_33341 = null;
var count__32629_33342 = (0);
var i__32630_33343 = (0);
while(true){
if((i__32630_33343 < count__32629_33342)){
var child_33344 = chunk__32628_33341.cljs$core$IIndexed$_nth$arity$2(null,i__32630_33343);
if(cljs.core.truth_(child_33344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33344);


var G__33345 = seq__32626_33340;
var G__33346 = chunk__32628_33341;
var G__33347 = count__32629_33342;
var G__33348 = (i__32630_33343 + (1));
seq__32626_33340 = G__33345;
chunk__32628_33341 = G__33346;
count__32629_33342 = G__33347;
i__32630_33343 = G__33348;
continue;
} else {
var G__33349 = seq__32626_33340;
var G__33350 = chunk__32628_33341;
var G__33351 = count__32629_33342;
var G__33352 = (i__32630_33343 + (1));
seq__32626_33340 = G__33349;
chunk__32628_33341 = G__33350;
count__32629_33342 = G__33351;
i__32630_33343 = G__33352;
continue;
}
} else {
var temp__5735__auto___33353 = cljs.core.seq(seq__32626_33340);
if(temp__5735__auto___33353){
var seq__32626_33354__$1 = temp__5735__auto___33353;
if(cljs.core.chunked_seq_QMARK_(seq__32626_33354__$1)){
var c__4556__auto___33355 = cljs.core.chunk_first(seq__32626_33354__$1);
var G__33356 = cljs.core.chunk_rest(seq__32626_33354__$1);
var G__33357 = c__4556__auto___33355;
var G__33358 = cljs.core.count(c__4556__auto___33355);
var G__33359 = (0);
seq__32626_33340 = G__33356;
chunk__32628_33341 = G__33357;
count__32629_33342 = G__33358;
i__32630_33343 = G__33359;
continue;
} else {
var child_33360 = cljs.core.first(seq__32626_33354__$1);
if(cljs.core.truth_(child_33360)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33360);


var G__33361 = cljs.core.next(seq__32626_33354__$1);
var G__33362 = null;
var G__33363 = (0);
var G__33364 = (0);
seq__32626_33340 = G__33361;
chunk__32628_33341 = G__33362;
count__32629_33342 = G__33363;
i__32630_33343 = G__33364;
continue;
} else {
var G__33365 = cljs.core.next(seq__32626_33354__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__32626_33340 = G__33365;
chunk__32628_33341 = G__33366;
count__32629_33342 = G__33367;
i__32630_33343 = G__33368;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33339);
}


var G__33369 = seq__32573_33334;
var G__33370 = chunk__32574_33335;
var G__33371 = count__32575_33336;
var G__33372 = (i__32576_33337 + (1));
seq__32573_33334 = G__33369;
chunk__32574_33335 = G__33370;
count__32575_33336 = G__33371;
i__32576_33337 = G__33372;
continue;
} else {
var temp__5735__auto___33373 = cljs.core.seq(seq__32573_33334);
if(temp__5735__auto___33373){
var seq__32573_33374__$1 = temp__5735__auto___33373;
if(cljs.core.chunked_seq_QMARK_(seq__32573_33374__$1)){
var c__4556__auto___33375 = cljs.core.chunk_first(seq__32573_33374__$1);
var G__33376 = cljs.core.chunk_rest(seq__32573_33374__$1);
var G__33377 = c__4556__auto___33375;
var G__33378 = cljs.core.count(c__4556__auto___33375);
var G__33379 = (0);
seq__32573_33334 = G__33376;
chunk__32574_33335 = G__33377;
count__32575_33336 = G__33378;
i__32576_33337 = G__33379;
continue;
} else {
var child_struct_33380 = cljs.core.first(seq__32573_33374__$1);
var children_33381 = shadow.dom.dom_node(child_struct_33380);
if(cljs.core.seq_QMARK_(children_33381)){
var seq__32639_33382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33381));
var chunk__32641_33383 = null;
var count__32642_33384 = (0);
var i__32643_33385 = (0);
while(true){
if((i__32643_33385 < count__32642_33384)){
var child_33386 = chunk__32641_33383.cljs$core$IIndexed$_nth$arity$2(null,i__32643_33385);
if(cljs.core.truth_(child_33386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33386);


var G__33387 = seq__32639_33382;
var G__33388 = chunk__32641_33383;
var G__33389 = count__32642_33384;
var G__33390 = (i__32643_33385 + (1));
seq__32639_33382 = G__33387;
chunk__32641_33383 = G__33388;
count__32642_33384 = G__33389;
i__32643_33385 = G__33390;
continue;
} else {
var G__33395 = seq__32639_33382;
var G__33396 = chunk__32641_33383;
var G__33397 = count__32642_33384;
var G__33398 = (i__32643_33385 + (1));
seq__32639_33382 = G__33395;
chunk__32641_33383 = G__33396;
count__32642_33384 = G__33397;
i__32643_33385 = G__33398;
continue;
}
} else {
var temp__5735__auto___33399__$1 = cljs.core.seq(seq__32639_33382);
if(temp__5735__auto___33399__$1){
var seq__32639_33400__$1 = temp__5735__auto___33399__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32639_33400__$1)){
var c__4556__auto___33401 = cljs.core.chunk_first(seq__32639_33400__$1);
var G__33402 = cljs.core.chunk_rest(seq__32639_33400__$1);
var G__33403 = c__4556__auto___33401;
var G__33404 = cljs.core.count(c__4556__auto___33401);
var G__33405 = (0);
seq__32639_33382 = G__33402;
chunk__32641_33383 = G__33403;
count__32642_33384 = G__33404;
i__32643_33385 = G__33405;
continue;
} else {
var child_33406 = cljs.core.first(seq__32639_33400__$1);
if(cljs.core.truth_(child_33406)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33406);


var G__33407 = cljs.core.next(seq__32639_33400__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__32639_33382 = G__33407;
chunk__32641_33383 = G__33408;
count__32642_33384 = G__33409;
i__32643_33385 = G__33410;
continue;
} else {
var G__33411 = cljs.core.next(seq__32639_33400__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32639_33382 = G__33411;
chunk__32641_33383 = G__33412;
count__32642_33384 = G__33413;
i__32643_33385 = G__33414;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33381);
}


var G__33415 = cljs.core.next(seq__32573_33374__$1);
var G__33416 = null;
var G__33417 = (0);
var G__33418 = (0);
seq__32573_33334 = G__33415;
chunk__32574_33335 = G__33416;
count__32575_33336 = G__33417;
i__32576_33337 = G__33418;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32663 = cljs.core.seq(node);
var chunk__32664 = null;
var count__32665 = (0);
var i__32666 = (0);
while(true){
if((i__32666 < count__32665)){
var n = chunk__32664.cljs$core$IIndexed$_nth$arity$2(null,i__32666);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33422 = seq__32663;
var G__33423 = chunk__32664;
var G__33424 = count__32665;
var G__33425 = (i__32666 + (1));
seq__32663 = G__33422;
chunk__32664 = G__33423;
count__32665 = G__33424;
i__32666 = G__33425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32663);
if(temp__5735__auto__){
var seq__32663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32663__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32663__$1);
var G__33426 = cljs.core.chunk_rest(seq__32663__$1);
var G__33427 = c__4556__auto__;
var G__33428 = cljs.core.count(c__4556__auto__);
var G__33429 = (0);
seq__32663 = G__33426;
chunk__32664 = G__33427;
count__32665 = G__33428;
i__32666 = G__33429;
continue;
} else {
var n = cljs.core.first(seq__32663__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33430 = cljs.core.next(seq__32663__$1);
var G__33431 = null;
var G__33432 = (0);
var G__33433 = (0);
seq__32663 = G__33430;
chunk__32664 = G__33431;
count__32665 = G__33432;
i__32666 = G__33433;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32676 = arguments.length;
switch (G__32676) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32705 = arguments.length;
switch (G__32705) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33454 = arguments.length;
var i__4737__auto___33455 = (0);
while(true){
if((i__4737__auto___33455 < len__4736__auto___33454)){
args__4742__auto__.push((arguments[i__4737__auto___33455]));

var G__33456 = (i__4737__auto___33455 + (1));
i__4737__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32747_33457 = cljs.core.seq(nodes);
var chunk__32748_33458 = null;
var count__32749_33459 = (0);
var i__32750_33460 = (0);
while(true){
if((i__32750_33460 < count__32749_33459)){
var node_33461 = chunk__32748_33458.cljs$core$IIndexed$_nth$arity$2(null,i__32750_33460);
fragment.appendChild(shadow.dom._to_dom(node_33461));


var G__33462 = seq__32747_33457;
var G__33463 = chunk__32748_33458;
var G__33464 = count__32749_33459;
var G__33465 = (i__32750_33460 + (1));
seq__32747_33457 = G__33462;
chunk__32748_33458 = G__33463;
count__32749_33459 = G__33464;
i__32750_33460 = G__33465;
continue;
} else {
var temp__5735__auto___33466 = cljs.core.seq(seq__32747_33457);
if(temp__5735__auto___33466){
var seq__32747_33467__$1 = temp__5735__auto___33466;
if(cljs.core.chunked_seq_QMARK_(seq__32747_33467__$1)){
var c__4556__auto___33468 = cljs.core.chunk_first(seq__32747_33467__$1);
var G__33469 = cljs.core.chunk_rest(seq__32747_33467__$1);
var G__33470 = c__4556__auto___33468;
var G__33471 = cljs.core.count(c__4556__auto___33468);
var G__33472 = (0);
seq__32747_33457 = G__33469;
chunk__32748_33458 = G__33470;
count__32749_33459 = G__33471;
i__32750_33460 = G__33472;
continue;
} else {
var node_33473 = cljs.core.first(seq__32747_33467__$1);
fragment.appendChild(shadow.dom._to_dom(node_33473));


var G__33474 = cljs.core.next(seq__32747_33467__$1);
var G__33475 = null;
var G__33476 = (0);
var G__33477 = (0);
seq__32747_33457 = G__33474;
chunk__32748_33458 = G__33475;
count__32749_33459 = G__33476;
i__32750_33460 = G__33477;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32746){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32746));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32771_33488 = cljs.core.seq(scripts);
var chunk__32772_33489 = null;
var count__32773_33490 = (0);
var i__32774_33491 = (0);
while(true){
if((i__32774_33491 < count__32773_33490)){
var vec__32783_33492 = chunk__32772_33489.cljs$core$IIndexed$_nth$arity$2(null,i__32774_33491);
var script_tag_33493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783_33492,(0),null);
var script_body_33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783_33492,(1),null);
eval(script_body_33494);


var G__33495 = seq__32771_33488;
var G__33496 = chunk__32772_33489;
var G__33497 = count__32773_33490;
var G__33498 = (i__32774_33491 + (1));
seq__32771_33488 = G__33495;
chunk__32772_33489 = G__33496;
count__32773_33490 = G__33497;
i__32774_33491 = G__33498;
continue;
} else {
var temp__5735__auto___33499 = cljs.core.seq(seq__32771_33488);
if(temp__5735__auto___33499){
var seq__32771_33500__$1 = temp__5735__auto___33499;
if(cljs.core.chunked_seq_QMARK_(seq__32771_33500__$1)){
var c__4556__auto___33501 = cljs.core.chunk_first(seq__32771_33500__$1);
var G__33502 = cljs.core.chunk_rest(seq__32771_33500__$1);
var G__33503 = c__4556__auto___33501;
var G__33504 = cljs.core.count(c__4556__auto___33501);
var G__33505 = (0);
seq__32771_33488 = G__33502;
chunk__32772_33489 = G__33503;
count__32773_33490 = G__33504;
i__32774_33491 = G__33505;
continue;
} else {
var vec__32786_33506 = cljs.core.first(seq__32771_33500__$1);
var script_tag_33507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32786_33506,(0),null);
var script_body_33508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32786_33506,(1),null);
eval(script_body_33508);


var G__33509 = cljs.core.next(seq__32771_33500__$1);
var G__33510 = null;
var G__33511 = (0);
var G__33512 = (0);
seq__32771_33488 = G__33509;
chunk__32772_33489 = G__33510;
count__32773_33490 = G__33511;
i__32774_33491 = G__33512;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32804){
var vec__32805 = p__32804;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32805,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32815 = arguments.length;
switch (G__32815) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32827 = cljs.core.seq(style_keys);
var chunk__32828 = null;
var count__32829 = (0);
var i__32830 = (0);
while(true){
if((i__32830 < count__32829)){
var it = chunk__32828.cljs$core$IIndexed$_nth$arity$2(null,i__32830);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33514 = seq__32827;
var G__33515 = chunk__32828;
var G__33516 = count__32829;
var G__33517 = (i__32830 + (1));
seq__32827 = G__33514;
chunk__32828 = G__33515;
count__32829 = G__33516;
i__32830 = G__33517;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32827);
if(temp__5735__auto__){
var seq__32827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32827__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32827__$1);
var G__33518 = cljs.core.chunk_rest(seq__32827__$1);
var G__33519 = c__4556__auto__;
var G__33520 = cljs.core.count(c__4556__auto__);
var G__33521 = (0);
seq__32827 = G__33518;
chunk__32828 = G__33519;
count__32829 = G__33520;
i__32830 = G__33521;
continue;
} else {
var it = cljs.core.first(seq__32827__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33522 = cljs.core.next(seq__32827__$1);
var G__33523 = null;
var G__33524 = (0);
var G__33525 = (0);
seq__32827 = G__33522;
chunk__32828 = G__33523;
count__32829 = G__33524;
i__32830 = G__33525;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32834,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32881 = k32834;
var G__32881__$1 = (((G__32881 instanceof cljs.core.Keyword))?G__32881.fqn:null);
switch (G__32881__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32834,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32899){
var vec__32900 = p__32899;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32833){
var self__ = this;
var G__32833__$1 = this;
return (new cljs.core.RecordIter((0),G__32833__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32835,other32836){
var self__ = this;
var this32835__$1 = this;
return (((!((other32836 == null)))) && ((this32835__$1.constructor === other32836.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32835__$1.x,other32836.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32835__$1.y,other32836.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32835__$1.__extmap,other32836.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32833){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32939 = cljs.core.keyword_identical_QMARK_;
var expr__32940 = k__4388__auto__;
if(cljs.core.truth_((pred__32939.cljs$core$IFn$_invoke$arity$2 ? pred__32939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32940) : pred__32939.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32940)))){
return (new shadow.dom.Coordinate(G__32833,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32939.cljs$core$IFn$_invoke$arity$2 ? pred__32939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32940) : pred__32939.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32940)))){
return (new shadow.dom.Coordinate(self__.x,G__32833,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32833),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32833){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32833,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32852){
var extmap__4419__auto__ = (function (){var G__32950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32852,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32950);
} else {
return G__32950;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32852),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32852),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32953,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32963 = k32953;
var G__32963__$1 = (((G__32963 instanceof cljs.core.Keyword))?G__32963.fqn:null);
switch (G__32963__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32953,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32967){
var vec__32968 = p__32967;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32952){
var self__ = this;
var G__32952__$1 = this;
return (new cljs.core.RecordIter((0),G__32952__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32954,other32955){
var self__ = this;
var this32954__$1 = this;
return (((!((other32955 == null)))) && ((this32954__$1.constructor === other32955.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32954__$1.w,other32955.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32954__$1.h,other32955.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32954__$1.__extmap,other32955.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32952){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32995 = cljs.core.keyword_identical_QMARK_;
var expr__32996 = k__4388__auto__;
if(cljs.core.truth_((pred__32995.cljs$core$IFn$_invoke$arity$2 ? pred__32995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32996) : pred__32995.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32996)))){
return (new shadow.dom.Size(G__32952,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32995.cljs$core$IFn$_invoke$arity$2 ? pred__32995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32996) : pred__32995.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32996)))){
return (new shadow.dom.Size(self__.w,G__32952,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32952),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32952){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32952,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32956){
var extmap__4419__auto__ = (function (){var G__33011 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32956,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32956)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33011);
} else {
return G__33011;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32956),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32956),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33534 = (i + (1));
var G__33535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33534;
ret = G__33535;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33036){
var vec__33038 = p__33036;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33038,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33045 = arguments.length;
switch (G__33045) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33540 = ps;
var G__33541 = (i + (1));
el__$1 = G__33540;
i = G__33541;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33051 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33054_33543 = cljs.core.seq(props);
var chunk__33055_33544 = null;
var count__33056_33545 = (0);
var i__33057_33546 = (0);
while(true){
if((i__33057_33546 < count__33056_33545)){
var vec__33064_33547 = chunk__33055_33544.cljs$core$IIndexed$_nth$arity$2(null,i__33057_33546);
var k_33548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064_33547,(0),null);
var v_33549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064_33547,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33548);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33548),v_33549);


var G__33550 = seq__33054_33543;
var G__33551 = chunk__33055_33544;
var G__33552 = count__33056_33545;
var G__33553 = (i__33057_33546 + (1));
seq__33054_33543 = G__33550;
chunk__33055_33544 = G__33551;
count__33056_33545 = G__33552;
i__33057_33546 = G__33553;
continue;
} else {
var temp__5735__auto___33554 = cljs.core.seq(seq__33054_33543);
if(temp__5735__auto___33554){
var seq__33054_33555__$1 = temp__5735__auto___33554;
if(cljs.core.chunked_seq_QMARK_(seq__33054_33555__$1)){
var c__4556__auto___33556 = cljs.core.chunk_first(seq__33054_33555__$1);
var G__33557 = cljs.core.chunk_rest(seq__33054_33555__$1);
var G__33558 = c__4556__auto___33556;
var G__33559 = cljs.core.count(c__4556__auto___33556);
var G__33560 = (0);
seq__33054_33543 = G__33557;
chunk__33055_33544 = G__33558;
count__33056_33545 = G__33559;
i__33057_33546 = G__33560;
continue;
} else {
var vec__33069_33561 = cljs.core.first(seq__33054_33555__$1);
var k_33562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33069_33561,(0),null);
var v_33563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33069_33561,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33562);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33562),v_33563);


var G__33564 = cljs.core.next(seq__33054_33555__$1);
var G__33565 = null;
var G__33567 = (0);
var G__33568 = (0);
seq__33054_33543 = G__33564;
chunk__33055_33544 = G__33565;
count__33056_33545 = G__33567;
i__33057_33546 = G__33568;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33075 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
var seq__33078_33571 = cljs.core.seq(node_children);
var chunk__33080_33572 = null;
var count__33081_33573 = (0);
var i__33082_33574 = (0);
while(true){
if((i__33082_33574 < count__33081_33573)){
var child_struct_33575 = chunk__33080_33572.cljs$core$IIndexed$_nth$arity$2(null,i__33082_33574);
if((!((child_struct_33575 == null)))){
if(typeof child_struct_33575 === 'string'){
var text_33577 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33577),child_struct_33575].join(''));
} else {
var children_33578 = shadow.dom.svg_node(child_struct_33575);
if(cljs.core.seq_QMARK_(children_33578)){
var seq__33103_33579 = cljs.core.seq(children_33578);
var chunk__33105_33580 = null;
var count__33106_33581 = (0);
var i__33107_33582 = (0);
while(true){
if((i__33107_33582 < count__33106_33581)){
var child_33584 = chunk__33105_33580.cljs$core$IIndexed$_nth$arity$2(null,i__33107_33582);
if(cljs.core.truth_(child_33584)){
node.appendChild(child_33584);


var G__33586 = seq__33103_33579;
var G__33587 = chunk__33105_33580;
var G__33588 = count__33106_33581;
var G__33589 = (i__33107_33582 + (1));
seq__33103_33579 = G__33586;
chunk__33105_33580 = G__33587;
count__33106_33581 = G__33588;
i__33107_33582 = G__33589;
continue;
} else {
var G__33590 = seq__33103_33579;
var G__33591 = chunk__33105_33580;
var G__33592 = count__33106_33581;
var G__33593 = (i__33107_33582 + (1));
seq__33103_33579 = G__33590;
chunk__33105_33580 = G__33591;
count__33106_33581 = G__33592;
i__33107_33582 = G__33593;
continue;
}
} else {
var temp__5735__auto___33594 = cljs.core.seq(seq__33103_33579);
if(temp__5735__auto___33594){
var seq__33103_33595__$1 = temp__5735__auto___33594;
if(cljs.core.chunked_seq_QMARK_(seq__33103_33595__$1)){
var c__4556__auto___33596 = cljs.core.chunk_first(seq__33103_33595__$1);
var G__33597 = cljs.core.chunk_rest(seq__33103_33595__$1);
var G__33598 = c__4556__auto___33596;
var G__33599 = cljs.core.count(c__4556__auto___33596);
var G__33600 = (0);
seq__33103_33579 = G__33597;
chunk__33105_33580 = G__33598;
count__33106_33581 = G__33599;
i__33107_33582 = G__33600;
continue;
} else {
var child_33601 = cljs.core.first(seq__33103_33595__$1);
if(cljs.core.truth_(child_33601)){
node.appendChild(child_33601);


var G__33606 = cljs.core.next(seq__33103_33595__$1);
var G__33607 = null;
var G__33608 = (0);
var G__33609 = (0);
seq__33103_33579 = G__33606;
chunk__33105_33580 = G__33607;
count__33106_33581 = G__33608;
i__33107_33582 = G__33609;
continue;
} else {
var G__33610 = cljs.core.next(seq__33103_33595__$1);
var G__33611 = null;
var G__33612 = (0);
var G__33613 = (0);
seq__33103_33579 = G__33610;
chunk__33105_33580 = G__33611;
count__33106_33581 = G__33612;
i__33107_33582 = G__33613;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33578);
}
}


var G__33614 = seq__33078_33571;
var G__33615 = chunk__33080_33572;
var G__33616 = count__33081_33573;
var G__33617 = (i__33082_33574 + (1));
seq__33078_33571 = G__33614;
chunk__33080_33572 = G__33615;
count__33081_33573 = G__33616;
i__33082_33574 = G__33617;
continue;
} else {
var G__33618 = seq__33078_33571;
var G__33619 = chunk__33080_33572;
var G__33620 = count__33081_33573;
var G__33621 = (i__33082_33574 + (1));
seq__33078_33571 = G__33618;
chunk__33080_33572 = G__33619;
count__33081_33573 = G__33620;
i__33082_33574 = G__33621;
continue;
}
} else {
var temp__5735__auto___33622 = cljs.core.seq(seq__33078_33571);
if(temp__5735__auto___33622){
var seq__33078_33623__$1 = temp__5735__auto___33622;
if(cljs.core.chunked_seq_QMARK_(seq__33078_33623__$1)){
var c__4556__auto___33624 = cljs.core.chunk_first(seq__33078_33623__$1);
var G__33625 = cljs.core.chunk_rest(seq__33078_33623__$1);
var G__33626 = c__4556__auto___33624;
var G__33627 = cljs.core.count(c__4556__auto___33624);
var G__33628 = (0);
seq__33078_33571 = G__33625;
chunk__33080_33572 = G__33626;
count__33081_33573 = G__33627;
i__33082_33574 = G__33628;
continue;
} else {
var child_struct_33629 = cljs.core.first(seq__33078_33623__$1);
if((!((child_struct_33629 == null)))){
if(typeof child_struct_33629 === 'string'){
var text_33630 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33630),child_struct_33629].join(''));
} else {
var children_33631 = shadow.dom.svg_node(child_struct_33629);
if(cljs.core.seq_QMARK_(children_33631)){
var seq__33115_33632 = cljs.core.seq(children_33631);
var chunk__33117_33633 = null;
var count__33118_33634 = (0);
var i__33119_33635 = (0);
while(true){
if((i__33119_33635 < count__33118_33634)){
var child_33636 = chunk__33117_33633.cljs$core$IIndexed$_nth$arity$2(null,i__33119_33635);
if(cljs.core.truth_(child_33636)){
node.appendChild(child_33636);


var G__33637 = seq__33115_33632;
var G__33638 = chunk__33117_33633;
var G__33639 = count__33118_33634;
var G__33640 = (i__33119_33635 + (1));
seq__33115_33632 = G__33637;
chunk__33117_33633 = G__33638;
count__33118_33634 = G__33639;
i__33119_33635 = G__33640;
continue;
} else {
var G__33641 = seq__33115_33632;
var G__33642 = chunk__33117_33633;
var G__33643 = count__33118_33634;
var G__33644 = (i__33119_33635 + (1));
seq__33115_33632 = G__33641;
chunk__33117_33633 = G__33642;
count__33118_33634 = G__33643;
i__33119_33635 = G__33644;
continue;
}
} else {
var temp__5735__auto___33645__$1 = cljs.core.seq(seq__33115_33632);
if(temp__5735__auto___33645__$1){
var seq__33115_33646__$1 = temp__5735__auto___33645__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33115_33646__$1)){
var c__4556__auto___33647 = cljs.core.chunk_first(seq__33115_33646__$1);
var G__33648 = cljs.core.chunk_rest(seq__33115_33646__$1);
var G__33649 = c__4556__auto___33647;
var G__33650 = cljs.core.count(c__4556__auto___33647);
var G__33651 = (0);
seq__33115_33632 = G__33648;
chunk__33117_33633 = G__33649;
count__33118_33634 = G__33650;
i__33119_33635 = G__33651;
continue;
} else {
var child_33652 = cljs.core.first(seq__33115_33646__$1);
if(cljs.core.truth_(child_33652)){
node.appendChild(child_33652);


var G__33653 = cljs.core.next(seq__33115_33646__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__33115_33632 = G__33653;
chunk__33117_33633 = G__33654;
count__33118_33634 = G__33655;
i__33119_33635 = G__33656;
continue;
} else {
var G__33657 = cljs.core.next(seq__33115_33646__$1);
var G__33658 = null;
var G__33659 = (0);
var G__33660 = (0);
seq__33115_33632 = G__33657;
chunk__33117_33633 = G__33658;
count__33118_33634 = G__33659;
i__33119_33635 = G__33660;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33631);
}
}


var G__33661 = cljs.core.next(seq__33078_33623__$1);
var G__33662 = null;
var G__33663 = (0);
var G__33664 = (0);
seq__33078_33571 = G__33661;
chunk__33080_33572 = G__33662;
count__33081_33573 = G__33663;
i__33082_33574 = G__33664;
continue;
} else {
var G__33665 = cljs.core.next(seq__33078_33623__$1);
var G__33666 = null;
var G__33667 = (0);
var G__33668 = (0);
seq__33078_33571 = G__33665;
chunk__33080_33572 = G__33666;
count__33081_33573 = G__33667;
i__33082_33574 = G__33668;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33672 = arguments.length;
var i__4737__auto___33673 = (0);
while(true){
if((i__4737__auto___33673 < len__4736__auto___33672)){
args__4742__auto__.push((arguments[i__4737__auto___33673]));

var G__33674 = (i__4737__auto___33673 + (1));
i__4737__auto___33673 = G__33674;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33134){
var G__33135 = cljs.core.first(seq33134);
var seq33134__$1 = cljs.core.next(seq33134);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33135,seq33134__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33137 = arguments.length;
switch (G__33137) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30192__auto___33676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30193__auto__ = (function (){var switch__30057__auto__ = (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (1))){
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33142__$1,(2),once_or_cleanup);
} else {
if((state_val_33143 === (2))){
var inst_33139 = (state_33142[(2)]);
var inst_33140 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33142__$1 = (function (){var statearr_33144 = state_33142;
(statearr_33144[(7)] = inst_33139);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33142__$1,inst_33140);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30058__auto__ = null;
var shadow$dom$state_machine__30058__auto____0 = (function (){
var statearr_33145 = [null,null,null,null,null,null,null,null];
(statearr_33145[(0)] = shadow$dom$state_machine__30058__auto__);

(statearr_33145[(1)] = (1));

return statearr_33145;
});
var shadow$dom$state_machine__30058__auto____1 = (function (state_33142){
while(true){
var ret_value__30059__auto__ = (function (){try{while(true){
var result__30060__auto__ = switch__30057__auto__(state_33142);
if(cljs.core.keyword_identical_QMARK_(result__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30060__auto__;
}
break;
}
}catch (e33146){var ex__30061__auto__ = e33146;
var statearr_33147_33684 = state_33142;
(statearr_33147_33684[(2)] = ex__30061__auto__);


if(cljs.core.seq((state_33142[(4)]))){
var statearr_33148_33685 = state_33142;
(statearr_33148_33685[(1)] = cljs.core.first((state_33142[(4)])));

} else {
throw ex__30061__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33686 = state_33142;
state_33142 = G__33686;
continue;
} else {
return ret_value__30059__auto__;
}
break;
}
});
shadow$dom$state_machine__30058__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30058__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30058__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30058__auto____0;
shadow$dom$state_machine__30058__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30058__auto____1;
return shadow$dom$state_machine__30058__auto__;
})()
})();
var state__30194__auto__ = (function (){var statearr_33149 = f__30193__auto__();
(statearr_33149[(6)] = c__30192__auto___33676);

return statearr_33149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30194__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
