// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_frame.db');
goog.require('cljs.core');
goog.require('re_frame.interop');
re_frame.db.app_db = re_frame.interop.ratom.call(null,cljs.core.PersistentArrayMap.EMPTY);
