goog.provide('contacts.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

contacts.core.app = (function (){var G__29260 = (function contacts$core$app(props__26614__auto__,maybe_ref__26615__auto__){
var vec__29261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26614__auto__),maybe_ref__26615__auto__], null);

var vec__29264_29270 = helix.hooks.use_state(null);
var state_29271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264_29270,(0),null);
var set_state_29272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264_29270,(1),null);
var G__29267_29273 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/api/contacts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log(response);
})], null)], 0));
}));
var G__29268_29274 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29267_29273,G__29268_29274) : helix.hooks.raw_use_effect.call(null,G__29267_29273,G__29268_29274));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(contacts.components.nav.nav,null));
});
if(goog.DEBUG === true){
var G__29269 = G__29260;
goog.object.set(G__29269,"displayName","contacts.core/app");

return G__29269;
} else {
return G__29260;
}
})();



contacts.core.init = (function contacts$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(contacts.core.app,null),document.getElementById("app"));
});
goog.exportSymbol('contacts.core.init', contacts.core.init);

//# sourceMappingURL=contacts.core.js.map
