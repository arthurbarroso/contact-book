goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35288 = arguments.length;
var i__4737__auto___35289 = (0);
while(true){
if((i__4737__auto___35289 < len__4736__auto___35288)){
args__4742__auto__.push((arguments[i__4737__auto___35289]));

var G__35290 = (i__4737__auto___35289 + (1));
i__4737__auto___35289 = G__35290;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35132){
var G__35133 = cljs.core.first(seq35132);
var seq35132__$1 = cljs.core.next(seq35132);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35133,seq35132__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35135 = cljs.core.seq(sources);
var chunk__35136 = null;
var count__35137 = (0);
var i__35138 = (0);
while(true){
if((i__35138 < count__35137)){
var map__35153 = chunk__35136.cljs$core$IIndexed$_nth$arity$2(null,i__35138);
var map__35153__$1 = (((((!((map__35153 == null))))?(((((map__35153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35153):map__35153);
var src = map__35153__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35155){var e_35291 = e35155;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35291);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35291.message)].join('')));
}

var G__35292 = seq__35135;
var G__35293 = chunk__35136;
var G__35294 = count__35137;
var G__35295 = (i__35138 + (1));
seq__35135 = G__35292;
chunk__35136 = G__35293;
count__35137 = G__35294;
i__35138 = G__35295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35135);
if(temp__5735__auto__){
var seq__35135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35135__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35135__$1);
var G__35296 = cljs.core.chunk_rest(seq__35135__$1);
var G__35297 = c__4556__auto__;
var G__35298 = cljs.core.count(c__4556__auto__);
var G__35299 = (0);
seq__35135 = G__35296;
chunk__35136 = G__35297;
count__35137 = G__35298;
i__35138 = G__35299;
continue;
} else {
var map__35157 = cljs.core.first(seq__35135__$1);
var map__35157__$1 = (((((!((map__35157 == null))))?(((((map__35157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35157):map__35157);
var src = map__35157__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35159){var e_35300 = e35159;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35300);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35300.message)].join('')));
}

var G__35301 = cljs.core.next(seq__35135__$1);
var G__35302 = null;
var G__35303 = (0);
var G__35304 = (0);
seq__35135 = G__35301;
chunk__35136 = G__35302;
count__35137 = G__35303;
i__35138 = G__35304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35161 = cljs.core.seq(js_requires);
var chunk__35162 = null;
var count__35163 = (0);
var i__35164 = (0);
while(true){
if((i__35164 < count__35163)){
var js_ns = chunk__35162.cljs$core$IIndexed$_nth$arity$2(null,i__35164);
var require_str_35305 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35305);


var G__35306 = seq__35161;
var G__35307 = chunk__35162;
var G__35308 = count__35163;
var G__35309 = (i__35164 + (1));
seq__35161 = G__35306;
chunk__35162 = G__35307;
count__35163 = G__35308;
i__35164 = G__35309;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35161);
if(temp__5735__auto__){
var seq__35161__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35161__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35161__$1);
var G__35310 = cljs.core.chunk_rest(seq__35161__$1);
var G__35311 = c__4556__auto__;
var G__35312 = cljs.core.count(c__4556__auto__);
var G__35313 = (0);
seq__35161 = G__35310;
chunk__35162 = G__35311;
count__35163 = G__35312;
i__35164 = G__35313;
continue;
} else {
var js_ns = cljs.core.first(seq__35161__$1);
var require_str_35314 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35314);


var G__35315 = cljs.core.next(seq__35161__$1);
var G__35316 = null;
var G__35317 = (0);
var G__35318 = (0);
seq__35161 = G__35315;
chunk__35162 = G__35316;
count__35163 = G__35317;
i__35164 = G__35318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35166){
var map__35167 = p__35166;
var map__35167__$1 = (((((!((map__35167 == null))))?(((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35167):map__35167);
var msg = map__35167__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35169(s__35170){
return (new cljs.core.LazySeq(null,(function (){
var s__35170__$1 = s__35170;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35170__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35175 = cljs.core.first(xs__6292__auto__);
var map__35175__$1 = (((((!((map__35175 == null))))?(((((map__35175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35175):map__35175);
var src = map__35175__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35175__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35170__$1,map__35175,map__35175__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35167,map__35167__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35169_$_iter__35171(s__35172){
return (new cljs.core.LazySeq(null,((function (s__35170__$1,map__35175,map__35175__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35167,map__35167__$1,msg,info,reload_info){
return (function (){
var s__35172__$1 = s__35172;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35172__$1);
if(temp__5735__auto____$1){
var s__35172__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35172__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35172__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35174 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35173 = (0);
while(true){
if((i__35173 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35173);
cljs.core.chunk_append(b__35174,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35319 = (i__35173 + (1));
i__35173 = G__35319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35174),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35169_$_iter__35171(cljs.core.chunk_rest(s__35172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35174),null);
}
} else {
var warning = cljs.core.first(s__35172__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35169_$_iter__35171(cljs.core.rest(s__35172__$2)));
}
} else {
return null;
}
break;
}
});})(s__35170__$1,map__35175,map__35175__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35167,map__35167__$1,msg,info,reload_info))
,null,null));
});})(s__35170__$1,map__35175,map__35175__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35167,map__35167__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35169(cljs.core.rest(s__35170__$1)));
} else {
var G__35320 = cljs.core.rest(s__35170__$1);
s__35170__$1 = G__35320;
continue;
}
} else {
var G__35321 = cljs.core.rest(s__35170__$1);
s__35170__$1 = G__35321;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35177_35322 = cljs.core.seq(warnings);
var chunk__35178_35323 = null;
var count__35179_35324 = (0);
var i__35180_35325 = (0);
while(true){
if((i__35180_35325 < count__35179_35324)){
var map__35185_35326 = chunk__35178_35323.cljs$core$IIndexed$_nth$arity$2(null,i__35180_35325);
var map__35185_35327__$1 = (((((!((map__35185_35326 == null))))?(((((map__35185_35326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35185_35326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35185_35326):map__35185_35326);
var w_35328 = map__35185_35327__$1;
var msg_35329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185_35327__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185_35327__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185_35327__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185_35327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35332)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35330),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35331),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35329__$1)].join(''));


var G__35333 = seq__35177_35322;
var G__35334 = chunk__35178_35323;
var G__35335 = count__35179_35324;
var G__35336 = (i__35180_35325 + (1));
seq__35177_35322 = G__35333;
chunk__35178_35323 = G__35334;
count__35179_35324 = G__35335;
i__35180_35325 = G__35336;
continue;
} else {
var temp__5735__auto___35337 = cljs.core.seq(seq__35177_35322);
if(temp__5735__auto___35337){
var seq__35177_35338__$1 = temp__5735__auto___35337;
if(cljs.core.chunked_seq_QMARK_(seq__35177_35338__$1)){
var c__4556__auto___35339 = cljs.core.chunk_first(seq__35177_35338__$1);
var G__35340 = cljs.core.chunk_rest(seq__35177_35338__$1);
var G__35341 = c__4556__auto___35339;
var G__35342 = cljs.core.count(c__4556__auto___35339);
var G__35343 = (0);
seq__35177_35322 = G__35340;
chunk__35178_35323 = G__35341;
count__35179_35324 = G__35342;
i__35180_35325 = G__35343;
continue;
} else {
var map__35189_35344 = cljs.core.first(seq__35177_35338__$1);
var map__35189_35345__$1 = (((((!((map__35189_35344 == null))))?(((((map__35189_35344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35189_35344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35189_35344):map__35189_35344);
var w_35346 = map__35189_35345__$1;
var msg_35347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189_35345__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189_35345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189_35345__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189_35345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35350)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35348),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35349),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35347__$1)].join(''));


var G__35351 = cljs.core.next(seq__35177_35338__$1);
var G__35352 = null;
var G__35353 = (0);
var G__35354 = (0);
seq__35177_35322 = G__35351;
chunk__35178_35323 = G__35352;
count__35179_35324 = G__35353;
i__35180_35325 = G__35354;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35165_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35165_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35191){
var map__35192 = p__35191;
var map__35192__$1 = (((((!((map__35192 == null))))?(((((map__35192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35192):map__35192);
var msg = map__35192__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35192__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35194 = cljs.core.seq(updates);
var chunk__35196 = null;
var count__35197 = (0);
var i__35198 = (0);
while(true){
if((i__35198 < count__35197)){
var path = chunk__35196.cljs$core$IIndexed$_nth$arity$2(null,i__35198);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35228_35355 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35232_35356 = null;
var count__35233_35357 = (0);
var i__35234_35358 = (0);
while(true){
if((i__35234_35358 < count__35233_35357)){
var node_35359 = chunk__35232_35356.cljs$core$IIndexed$_nth$arity$2(null,i__35234_35358);
if(cljs.core.not(node_35359.shadow$old)){
var path_match_35360 = shadow.cljs.devtools.client.browser.match_paths(node_35359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35360)){
var new_link_35361 = (function (){var G__35240 = node_35359.cloneNode(true);
G__35240.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35240;
})();
(node_35359.shadow$old = true);

(new_link_35361.onload = ((function (seq__35228_35355,chunk__35232_35356,count__35233_35357,i__35234_35358,seq__35194,chunk__35196,count__35197,i__35198,new_link_35361,path_match_35360,node_35359,path,map__35192,map__35192__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35359);
});})(seq__35228_35355,chunk__35232_35356,count__35233_35357,i__35234_35358,seq__35194,chunk__35196,count__35197,i__35198,new_link_35361,path_match_35360,node_35359,path,map__35192,map__35192__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35360], 0));

goog.dom.insertSiblingAfter(new_link_35361,node_35359);


var G__35362 = seq__35228_35355;
var G__35363 = chunk__35232_35356;
var G__35364 = count__35233_35357;
var G__35365 = (i__35234_35358 + (1));
seq__35228_35355 = G__35362;
chunk__35232_35356 = G__35363;
count__35233_35357 = G__35364;
i__35234_35358 = G__35365;
continue;
} else {
var G__35366 = seq__35228_35355;
var G__35367 = chunk__35232_35356;
var G__35368 = count__35233_35357;
var G__35369 = (i__35234_35358 + (1));
seq__35228_35355 = G__35366;
chunk__35232_35356 = G__35367;
count__35233_35357 = G__35368;
i__35234_35358 = G__35369;
continue;
}
} else {
var G__35370 = seq__35228_35355;
var G__35371 = chunk__35232_35356;
var G__35372 = count__35233_35357;
var G__35373 = (i__35234_35358 + (1));
seq__35228_35355 = G__35370;
chunk__35232_35356 = G__35371;
count__35233_35357 = G__35372;
i__35234_35358 = G__35373;
continue;
}
} else {
var temp__5735__auto___35374 = cljs.core.seq(seq__35228_35355);
if(temp__5735__auto___35374){
var seq__35228_35375__$1 = temp__5735__auto___35374;
if(cljs.core.chunked_seq_QMARK_(seq__35228_35375__$1)){
var c__4556__auto___35376 = cljs.core.chunk_first(seq__35228_35375__$1);
var G__35377 = cljs.core.chunk_rest(seq__35228_35375__$1);
var G__35378 = c__4556__auto___35376;
var G__35379 = cljs.core.count(c__4556__auto___35376);
var G__35380 = (0);
seq__35228_35355 = G__35377;
chunk__35232_35356 = G__35378;
count__35233_35357 = G__35379;
i__35234_35358 = G__35380;
continue;
} else {
var node_35381 = cljs.core.first(seq__35228_35375__$1);
if(cljs.core.not(node_35381.shadow$old)){
var path_match_35382 = shadow.cljs.devtools.client.browser.match_paths(node_35381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35382)){
var new_link_35383 = (function (){var G__35241 = node_35381.cloneNode(true);
G__35241.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35241;
})();
(node_35381.shadow$old = true);

(new_link_35383.onload = ((function (seq__35228_35355,chunk__35232_35356,count__35233_35357,i__35234_35358,seq__35194,chunk__35196,count__35197,i__35198,new_link_35383,path_match_35382,node_35381,seq__35228_35375__$1,temp__5735__auto___35374,path,map__35192,map__35192__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35381);
});})(seq__35228_35355,chunk__35232_35356,count__35233_35357,i__35234_35358,seq__35194,chunk__35196,count__35197,i__35198,new_link_35383,path_match_35382,node_35381,seq__35228_35375__$1,temp__5735__auto___35374,path,map__35192,map__35192__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35382], 0));

goog.dom.insertSiblingAfter(new_link_35383,node_35381);


var G__35384 = cljs.core.next(seq__35228_35375__$1);
var G__35385 = null;
var G__35386 = (0);
var G__35387 = (0);
seq__35228_35355 = G__35384;
chunk__35232_35356 = G__35385;
count__35233_35357 = G__35386;
i__35234_35358 = G__35387;
continue;
} else {
var G__35388 = cljs.core.next(seq__35228_35375__$1);
var G__35389 = null;
var G__35390 = (0);
var G__35391 = (0);
seq__35228_35355 = G__35388;
chunk__35232_35356 = G__35389;
count__35233_35357 = G__35390;
i__35234_35358 = G__35391;
continue;
}
} else {
var G__35392 = cljs.core.next(seq__35228_35375__$1);
var G__35393 = null;
var G__35394 = (0);
var G__35395 = (0);
seq__35228_35355 = G__35392;
chunk__35232_35356 = G__35393;
count__35233_35357 = G__35394;
i__35234_35358 = G__35395;
continue;
}
}
} else {
}
}
break;
}


var G__35396 = seq__35194;
var G__35397 = chunk__35196;
var G__35398 = count__35197;
var G__35399 = (i__35198 + (1));
seq__35194 = G__35396;
chunk__35196 = G__35397;
count__35197 = G__35398;
i__35198 = G__35399;
continue;
} else {
var G__35400 = seq__35194;
var G__35401 = chunk__35196;
var G__35402 = count__35197;
var G__35403 = (i__35198 + (1));
seq__35194 = G__35400;
chunk__35196 = G__35401;
count__35197 = G__35402;
i__35198 = G__35403;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35194);
if(temp__5735__auto__){
var seq__35194__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35194__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35194__$1);
var G__35404 = cljs.core.chunk_rest(seq__35194__$1);
var G__35405 = c__4556__auto__;
var G__35406 = cljs.core.count(c__4556__auto__);
var G__35407 = (0);
seq__35194 = G__35404;
chunk__35196 = G__35405;
count__35197 = G__35406;
i__35198 = G__35407;
continue;
} else {
var path = cljs.core.first(seq__35194__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35242_35408 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35246_35409 = null;
var count__35247_35410 = (0);
var i__35248_35411 = (0);
while(true){
if((i__35248_35411 < count__35247_35410)){
var node_35412 = chunk__35246_35409.cljs$core$IIndexed$_nth$arity$2(null,i__35248_35411);
if(cljs.core.not(node_35412.shadow$old)){
var path_match_35413 = shadow.cljs.devtools.client.browser.match_paths(node_35412.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35413)){
var new_link_35414 = (function (){var G__35254 = node_35412.cloneNode(true);
G__35254.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35413),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35254;
})();
(node_35412.shadow$old = true);

(new_link_35414.onload = ((function (seq__35242_35408,chunk__35246_35409,count__35247_35410,i__35248_35411,seq__35194,chunk__35196,count__35197,i__35198,new_link_35414,path_match_35413,node_35412,path,seq__35194__$1,temp__5735__auto__,map__35192,map__35192__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35412);
});})(seq__35242_35408,chunk__35246_35409,count__35247_35410,i__35248_35411,seq__35194,chunk__35196,count__35197,i__35198,new_link_35414,path_match_35413,node_35412,path,seq__35194__$1,temp__5735__auto__,map__35192,map__35192__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35413], 0));

goog.dom.insertSiblingAfter(new_link_35414,node_35412);


var G__35415 = seq__35242_35408;
var G__35416 = chunk__35246_35409;
var G__35417 = count__35247_35410;
var G__35418 = (i__35248_35411 + (1));
seq__35242_35408 = G__35415;
chunk__35246_35409 = G__35416;
count__35247_35410 = G__35417;
i__35248_35411 = G__35418;
continue;
} else {
var G__35419 = seq__35242_35408;
var G__35420 = chunk__35246_35409;
var G__35421 = count__35247_35410;
var G__35422 = (i__35248_35411 + (1));
seq__35242_35408 = G__35419;
chunk__35246_35409 = G__35420;
count__35247_35410 = G__35421;
i__35248_35411 = G__35422;
continue;
}
} else {
var G__35423 = seq__35242_35408;
var G__35424 = chunk__35246_35409;
var G__35425 = count__35247_35410;
var G__35426 = (i__35248_35411 + (1));
seq__35242_35408 = G__35423;
chunk__35246_35409 = G__35424;
count__35247_35410 = G__35425;
i__35248_35411 = G__35426;
continue;
}
} else {
var temp__5735__auto___35427__$1 = cljs.core.seq(seq__35242_35408);
if(temp__5735__auto___35427__$1){
var seq__35242_35428__$1 = temp__5735__auto___35427__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35242_35428__$1)){
var c__4556__auto___35429 = cljs.core.chunk_first(seq__35242_35428__$1);
var G__35430 = cljs.core.chunk_rest(seq__35242_35428__$1);
var G__35431 = c__4556__auto___35429;
var G__35432 = cljs.core.count(c__4556__auto___35429);
var G__35433 = (0);
seq__35242_35408 = G__35430;
chunk__35246_35409 = G__35431;
count__35247_35410 = G__35432;
i__35248_35411 = G__35433;
continue;
} else {
var node_35434 = cljs.core.first(seq__35242_35428__$1);
if(cljs.core.not(node_35434.shadow$old)){
var path_match_35435 = shadow.cljs.devtools.client.browser.match_paths(node_35434.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35435)){
var new_link_35436 = (function (){var G__35255 = node_35434.cloneNode(true);
G__35255.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35435),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35255;
})();
(node_35434.shadow$old = true);

(new_link_35436.onload = ((function (seq__35242_35408,chunk__35246_35409,count__35247_35410,i__35248_35411,seq__35194,chunk__35196,count__35197,i__35198,new_link_35436,path_match_35435,node_35434,seq__35242_35428__$1,temp__5735__auto___35427__$1,path,seq__35194__$1,temp__5735__auto__,map__35192,map__35192__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35434);
});})(seq__35242_35408,chunk__35246_35409,count__35247_35410,i__35248_35411,seq__35194,chunk__35196,count__35197,i__35198,new_link_35436,path_match_35435,node_35434,seq__35242_35428__$1,temp__5735__auto___35427__$1,path,seq__35194__$1,temp__5735__auto__,map__35192,map__35192__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35435], 0));

goog.dom.insertSiblingAfter(new_link_35436,node_35434);


var G__35437 = cljs.core.next(seq__35242_35428__$1);
var G__35438 = null;
var G__35439 = (0);
var G__35440 = (0);
seq__35242_35408 = G__35437;
chunk__35246_35409 = G__35438;
count__35247_35410 = G__35439;
i__35248_35411 = G__35440;
continue;
} else {
var G__35441 = cljs.core.next(seq__35242_35428__$1);
var G__35442 = null;
var G__35443 = (0);
var G__35444 = (0);
seq__35242_35408 = G__35441;
chunk__35246_35409 = G__35442;
count__35247_35410 = G__35443;
i__35248_35411 = G__35444;
continue;
}
} else {
var G__35445 = cljs.core.next(seq__35242_35428__$1);
var G__35446 = null;
var G__35447 = (0);
var G__35448 = (0);
seq__35242_35408 = G__35445;
chunk__35246_35409 = G__35446;
count__35247_35410 = G__35447;
i__35248_35411 = G__35448;
continue;
}
}
} else {
}
}
break;
}


var G__35449 = cljs.core.next(seq__35194__$1);
var G__35450 = null;
var G__35451 = (0);
var G__35452 = (0);
seq__35194 = G__35449;
chunk__35196 = G__35450;
count__35197 = G__35451;
i__35198 = G__35452;
continue;
} else {
var G__35453 = cljs.core.next(seq__35194__$1);
var G__35454 = null;
var G__35455 = (0);
var G__35456 = (0);
seq__35194 = G__35453;
chunk__35196 = G__35454;
count__35197 = G__35455;
i__35198 = G__35456;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35256){
var map__35257 = p__35256;
var map__35257__$1 = (((((!((map__35257 == null))))?(((((map__35257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35257):map__35257);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35259){
var map__35260 = p__35259;
var map__35260__$1 = (((((!((map__35260 == null))))?(((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35260):map__35260);
var _ = map__35260__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35260__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35262,done,error){
var map__35263 = p__35262;
var map__35263__$1 = (((((!((map__35263 == null))))?(((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35263):map__35263);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35263__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35265,done,error){
var map__35266 = p__35265;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35266):map__35266);
var msg = map__35266__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35266__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35268){
var map__35269 = p__35268;
var map__35269__$1 = (((((!((map__35269 == null))))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35269):map__35269);
var src = map__35269__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35269__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35271 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35271) : done.call(null,G__35271));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35272){
var map__35273 = p__35272;
var map__35273__$1 = (((((!((map__35273 == null))))?(((((map__35273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35273):map__35273);
var msg__$1 = map__35273__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35275){var ex = e35275;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35276){
var map__35277 = p__35276;
var map__35277__$1 = (((((!((map__35277 == null))))?(((((map__35277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35277):map__35277);
var env = map__35277__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35277__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35279){
var map__35280 = p__35279;
var map__35280__$1 = (((((!((map__35280 == null))))?(((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35280):map__35280);
var msg = map__35280__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35282){
var map__35283 = p__35282;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283):map__35283);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35285){
var map__35286 = p__35285;
var map__35286__$1 = (((((!((map__35286 == null))))?(((((map__35286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35286):map__35286);
var svc = map__35286__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35286__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
