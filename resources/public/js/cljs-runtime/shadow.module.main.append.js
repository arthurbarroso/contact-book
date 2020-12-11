
shadow.cljs.devtools.client.env.module_loaded('main');

try { contacts.core.init(); } catch (e) { console.error("An error occurred when calling (contacts.core/init)"); throw(e); }