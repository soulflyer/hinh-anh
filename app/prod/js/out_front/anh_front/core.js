// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('anh_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('anh_front.events');
goog.require('anh_front.views');
goog.require('anh_front.config');
anh_front.core.mount_root = (function anh_front$core$mount_root(setting){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anh_front.views.main_panel], null),document.getElementById("app"));
});
anh_front.core.init_BANG_ = (function anh_front$core$init_BANG_(setting){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("anh-front.events","initialize-db","anh-front.events/initialize-db",-1211764080)], null));

return anh_front.core.mount_root.call(null,setting);
});
