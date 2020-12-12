goog.provide('contacts.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

contacts.core.app = (function (){var G__29796 = (function contacts$core$app(props__26572__auto__,maybe_ref__26573__auto__){
var vec__29797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26572__auto__),maybe_ref__26573__auto__], null);

var vec__29800 = helix.hooks.use_state(null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29800,(1),null);
var G__29803_29812 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/api/contacts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(response) : set_state.call(null,response));
})], null)], 0));
}));
var G__29804_29813 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29803_29812,G__29804_29813) : helix.hooks.raw_use_effect.call(null,G__29803_29812,G__29804_29813));

if(cljs.core.truth_(state)){
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(contacts.components.nav.nav,null),helix.core.get_react().createElement("div",(function (){var obj29806 = ({"className":"container pt-4"});
return obj29806;
})(),helix.core.get_react().createElement(contacts.components.contact_list.contact_list,(function (){var obj29808 = ({"contacts":state});
return obj29808;
})()),helix.core.get_react().createElement(contacts.components.contact_form.contact_form,(function (){var obj29810 = ({"contact":cljs.core.first(state)});
return obj29810;
})())));
} else {
return helix.core.get_react().createElement("p",null,"Loading...");
}
});
if(goog.DEBUG === true){
var G__29811 = G__29796;
goog.object.set(G__29811,"displayName","contacts.core/app");

return G__29811;
} else {
return G__29796;
}
})();



contacts.core.init = (function contacts$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(contacts.core.app,null),document.getElementById("app"));
});
goog.exportSymbol('contacts.core.init', contacts.core.init);

//# sourceMappingURL=contacts.core.js.map
