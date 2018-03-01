// Compiled by ClojureScript 1.10.64 {:elide-asserts true, :target :nodejs}
goog.provide('anh.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
anh.core.path = cljs.nodejs.require.call(null,"path");
anh.core.Electron = cljs.nodejs.require.call(null,"electron");
anh.core.BrowserWindow = anh.core.Electron.BrowserWindow;
anh.core.crash_reporter = anh.core.Electron.crashReporter;
anh.core.Os = cljs.nodejs.require.call(null,"os");
anh.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
anh.core.app = anh.core.Electron.app;
anh.core._main = (function anh$core$_main(){
anh.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"Soulflyer",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"https://github.com/soulflyer/hinh-anh"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

anh.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return anh.core.app.quit();
} else {
return null;
}
}));

return anh.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,anh.core._STAR_win_STAR_,(new anh.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null)))));

cljs.core.deref.call(null,anh.core._STAR_win_STAR_).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anh.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,anh.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,anh.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log(["Start descjop application on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anh.core.Os.type()),"."].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = anh.core._main;
