goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36256){
var map__36257 = p__36256;
var map__36257__$1 = (((((!((map__36257 == null))))?(((((map__36257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36257):map__36257);
var m = map__36257__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36257__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36259_36481 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36260_36482 = null;
var count__36261_36483 = (0);
var i__36262_36484 = (0);
while(true){
if((i__36262_36484 < count__36261_36483)){
var f_36485 = chunk__36260_36482.cljs$core$IIndexed$_nth$arity$2(null,i__36262_36484);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36485], 0));


var G__36486 = seq__36259_36481;
var G__36487 = chunk__36260_36482;
var G__36488 = count__36261_36483;
var G__36489 = (i__36262_36484 + (1));
seq__36259_36481 = G__36486;
chunk__36260_36482 = G__36487;
count__36261_36483 = G__36488;
i__36262_36484 = G__36489;
continue;
} else {
var temp__5735__auto___36490 = cljs.core.seq(seq__36259_36481);
if(temp__5735__auto___36490){
var seq__36259_36491__$1 = temp__5735__auto___36490;
if(cljs.core.chunked_seq_QMARK_(seq__36259_36491__$1)){
var c__4556__auto___36492 = cljs.core.chunk_first(seq__36259_36491__$1);
var G__36493 = cljs.core.chunk_rest(seq__36259_36491__$1);
var G__36494 = c__4556__auto___36492;
var G__36495 = cljs.core.count(c__4556__auto___36492);
var G__36496 = (0);
seq__36259_36481 = G__36493;
chunk__36260_36482 = G__36494;
count__36261_36483 = G__36495;
i__36262_36484 = G__36496;
continue;
} else {
var f_36497 = cljs.core.first(seq__36259_36491__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36497], 0));


var G__36498 = cljs.core.next(seq__36259_36491__$1);
var G__36499 = null;
var G__36500 = (0);
var G__36501 = (0);
seq__36259_36481 = G__36498;
chunk__36260_36482 = G__36499;
count__36261_36483 = G__36500;
i__36262_36484 = G__36501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36502 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36502], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36502)))?cljs.core.second(arglists_36502):arglists_36502)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36269_36503 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36270_36504 = null;
var count__36271_36505 = (0);
var i__36272_36506 = (0);
while(true){
if((i__36272_36506 < count__36271_36505)){
var vec__36289_36507 = chunk__36270_36504.cljs$core$IIndexed$_nth$arity$2(null,i__36272_36506);
var name_36508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289_36507,(0),null);
var map__36292_36509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289_36507,(1),null);
var map__36292_36510__$1 = (((((!((map__36292_36509 == null))))?(((((map__36292_36509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36292_36509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36292_36509):map__36292_36509);
var doc_36511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36292_36510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36292_36510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36508], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36512], 0));

if(cljs.core.truth_(doc_36511)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36511], 0));
} else {
}


var G__36514 = seq__36269_36503;
var G__36515 = chunk__36270_36504;
var G__36516 = count__36271_36505;
var G__36517 = (i__36272_36506 + (1));
seq__36269_36503 = G__36514;
chunk__36270_36504 = G__36515;
count__36271_36505 = G__36516;
i__36272_36506 = G__36517;
continue;
} else {
var temp__5735__auto___36518 = cljs.core.seq(seq__36269_36503);
if(temp__5735__auto___36518){
var seq__36269_36519__$1 = temp__5735__auto___36518;
if(cljs.core.chunked_seq_QMARK_(seq__36269_36519__$1)){
var c__4556__auto___36520 = cljs.core.chunk_first(seq__36269_36519__$1);
var G__36521 = cljs.core.chunk_rest(seq__36269_36519__$1);
var G__36522 = c__4556__auto___36520;
var G__36523 = cljs.core.count(c__4556__auto___36520);
var G__36524 = (0);
seq__36269_36503 = G__36521;
chunk__36270_36504 = G__36522;
count__36271_36505 = G__36523;
i__36272_36506 = G__36524;
continue;
} else {
var vec__36294_36525 = cljs.core.first(seq__36269_36519__$1);
var name_36526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294_36525,(0),null);
var map__36297_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294_36525,(1),null);
var map__36297_36528__$1 = (((((!((map__36297_36527 == null))))?(((((map__36297_36527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36297_36527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36297_36527):map__36297_36527);
var doc_36529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297_36528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297_36528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36526], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36530], 0));

if(cljs.core.truth_(doc_36529)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36529], 0));
} else {
}


var G__36531 = cljs.core.next(seq__36269_36519__$1);
var G__36532 = null;
var G__36533 = (0);
var G__36534 = (0);
seq__36269_36503 = G__36531;
chunk__36270_36504 = G__36532;
count__36271_36505 = G__36533;
i__36272_36506 = G__36534;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36299 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36300 = null;
var count__36301 = (0);
var i__36302 = (0);
while(true){
if((i__36302 < count__36301)){
var role = chunk__36300.cljs$core$IIndexed$_nth$arity$2(null,i__36302);
var temp__5735__auto___36535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36535__$1)){
var spec_36536 = temp__5735__auto___36535__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36536)], 0));
} else {
}


var G__36537 = seq__36299;
var G__36538 = chunk__36300;
var G__36539 = count__36301;
var G__36540 = (i__36302 + (1));
seq__36299 = G__36537;
chunk__36300 = G__36538;
count__36301 = G__36539;
i__36302 = G__36540;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36299);
if(temp__5735__auto____$1){
var seq__36299__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36299__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36299__$1);
var G__36542 = cljs.core.chunk_rest(seq__36299__$1);
var G__36543 = c__4556__auto__;
var G__36544 = cljs.core.count(c__4556__auto__);
var G__36545 = (0);
seq__36299 = G__36542;
chunk__36300 = G__36543;
count__36301 = G__36544;
i__36302 = G__36545;
continue;
} else {
var role = cljs.core.first(seq__36299__$1);
var temp__5735__auto___36546__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36546__$2)){
var spec_36547 = temp__5735__auto___36546__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36547)], 0));
} else {
}


var G__36548 = cljs.core.next(seq__36299__$1);
var G__36549 = null;
var G__36550 = (0);
var G__36551 = (0);
seq__36299 = G__36548;
chunk__36300 = G__36549;
count__36301 = G__36550;
i__36302 = G__36551;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36552 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36553 = cljs.core.ex_cause(t);
via = G__36552;
t = G__36553;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36396 = datafied_throwable;
var map__36396__$1 = (((((!((map__36396 == null))))?(((((map__36396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36396):map__36396);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36396__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36397 = cljs.core.last(via);
var map__36397__$1 = (((((!((map__36397 == null))))?(((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36397):map__36397);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36398 = data;
var map__36398__$1 = (((((!((map__36398 == null))))?(((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36398):map__36398);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36398__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36399 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36399__$1 = (((((!((map__36399 == null))))?(((((map__36399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36399):map__36399);
var top_data = map__36399__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36409 = phase;
var G__36409__$1 = (((G__36409 instanceof cljs.core.Keyword))?G__36409.fqn:null);
switch (G__36409__$1) {
case "read-source":
var map__36410 = data;
var map__36410__$1 = (((((!((map__36410 == null))))?(((((map__36410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36410):map__36410);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36410__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36413 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36413__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36413);
var G__36413__$2 = (cljs.core.truth_((function (){var fexpr__36414 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36414.cljs$core$IFn$_invoke$arity$1 ? fexpr__36414.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36414.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36413__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36413__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36413__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36415 = top_data;
var G__36415__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36415,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36415);
var G__36415__$2 = (cljs.core.truth_((function (){var fexpr__36416 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36416.cljs$core$IFn$_invoke$arity$1 ? fexpr__36416.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36416.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36415__$1);
var G__36415__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36415__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36415__$2);
var G__36415__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36415__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36415__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36415__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36415__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36417 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(3),null);
var G__36420 = top_data;
var G__36420__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36420,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36420);
var G__36420__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36420__$1);
var G__36420__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36420__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36420__$2);
var G__36420__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36420__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36420__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36420__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36420__$4;
}

break;
case "execution":
var vec__36422 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36422,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36387_SHARP_){
var or__4126__auto__ = (p1__36387_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36427 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36427.cljs$core$IFn$_invoke$arity$1 ? fexpr__36427.cljs$core$IFn$_invoke$arity$1(p1__36387_SHARP_) : fexpr__36427.call(null,p1__36387_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36428 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36428__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36428,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36428);
var G__36428__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36428__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36428__$1);
var G__36428__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36428__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36428__$2);
var G__36428__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36428__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36428__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36428__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36428__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36409__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36433){
var map__36434 = p__36433;
var map__36434__$1 = (((((!((map__36434 == null))))?(((((map__36434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36434):map__36434);
var triage_data = map__36434__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36436 = phase;
var G__36436__$1 = (((G__36436 instanceof cljs.core.Keyword))?G__36436.fqn:null);
switch (G__36436__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36437 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36439 = loc;
var G__36440 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36441_36561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36442_36562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36443_36563 = true;
var _STAR_print_fn_STAR__temp_val__36444_36564 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36443_36563);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36444_36564);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36430_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36430_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36442_36562);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36441_36561);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36437,G__36438,G__36439,G__36440) : format.call(null,G__36437,G__36438,G__36439,G__36440));

break;
case "macroexpansion":
var G__36445 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36446 = cause_type;
var G__36447 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36448 = loc;
var G__36449 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36445,G__36446,G__36447,G__36448,G__36449) : format.call(null,G__36445,G__36446,G__36447,G__36448,G__36449));

break;
case "compile-syntax-check":
var G__36450 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36451 = cause_type;
var G__36452 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36453 = loc;
var G__36454 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36450,G__36451,G__36452,G__36453,G__36454) : format.call(null,G__36450,G__36451,G__36452,G__36453,G__36454));

break;
case "compilation":
var G__36455 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36456 = cause_type;
var G__36457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36458 = loc;
var G__36459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36455,G__36456,G__36457,G__36458,G__36459) : format.call(null,G__36455,G__36456,G__36457,G__36458,G__36459));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36460 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36461 = symbol;
var G__36462 = loc;
var G__36463 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36466_36567 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36467_36568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36468_36569 = true;
var _STAR_print_fn_STAR__temp_val__36469_36570 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36468_36569);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36469_36570);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36431_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36431_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36467_36568);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36466_36567);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36460,G__36461,G__36462,G__36463) : format.call(null,G__36460,G__36461,G__36462,G__36463));
} else {
var G__36472 = "Execution error%s at %s(%s).\n%s\n";
var G__36473 = cause_type;
var G__36474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36475 = loc;
var G__36476 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36472,G__36473,G__36474,G__36475,G__36476) : format.call(null,G__36472,G__36473,G__36474,G__36475,G__36476));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36436__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
