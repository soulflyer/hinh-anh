// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__8064__auto__ = [];
var len__8057__auto___22743 = arguments.length;
var i__8058__auto___22744 = (0);
while(true){
if((i__8058__auto___22744 < len__8057__auto___22743)){
args__8064__auto__.push((arguments[i__8058__auto___22744]));

var G__22745 = (i__8058__auto___22744 + (1));
i__8058__auto___22744 = G__22745;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((2) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8065__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__22735_22746 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__22736_22747 = null;
var count__22737_22748 = (0);
var i__22738_22749 = (0);
while(true){
if((i__22738_22749 < count__22737_22748)){
var k_22750 = cljs.core._nth.call(null,chunk__22736_22747,i__22738_22749);
e.setAttribute(cljs.core.name.call(null,k_22750),cljs.core.get.call(null,attrs,k_22750));

var G__22751 = seq__22735_22746;
var G__22752 = chunk__22736_22747;
var G__22753 = count__22737_22748;
var G__22754 = (i__22738_22749 + (1));
seq__22735_22746 = G__22751;
chunk__22736_22747 = G__22752;
count__22737_22748 = G__22753;
i__22738_22749 = G__22754;
continue;
} else {
var temp__4657__auto___22755 = cljs.core.seq.call(null,seq__22735_22746);
if(temp__4657__auto___22755){
var seq__22735_22756__$1 = temp__4657__auto___22755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22735_22756__$1)){
var c__7767__auto___22757 = cljs.core.chunk_first.call(null,seq__22735_22756__$1);
var G__22758 = cljs.core.chunk_rest.call(null,seq__22735_22756__$1);
var G__22759 = c__7767__auto___22757;
var G__22760 = cljs.core.count.call(null,c__7767__auto___22757);
var G__22761 = (0);
seq__22735_22746 = G__22758;
chunk__22736_22747 = G__22759;
count__22737_22748 = G__22760;
i__22738_22749 = G__22761;
continue;
} else {
var k_22762 = cljs.core.first.call(null,seq__22735_22756__$1);
e.setAttribute(cljs.core.name.call(null,k_22762),cljs.core.get.call(null,attrs,k_22762));

var G__22763 = cljs.core.next.call(null,seq__22735_22756__$1);
var G__22764 = null;
var G__22765 = (0);
var G__22766 = (0);
seq__22735_22746 = G__22763;
chunk__22736_22747 = G__22764;
count__22737_22748 = G__22765;
i__22738_22749 = G__22766;
continue;
}
} else {
}
}
break;
}

var seq__22739_22767 = cljs.core.seq.call(null,children);
var chunk__22740_22768 = null;
var count__22741_22769 = (0);
var i__22742_22770 = (0);
while(true){
if((i__22742_22770 < count__22741_22769)){
var ch_22771 = cljs.core._nth.call(null,chunk__22740_22768,i__22742_22770);
e.appendChild(ch_22771);

var G__22772 = seq__22739_22767;
var G__22773 = chunk__22740_22768;
var G__22774 = count__22741_22769;
var G__22775 = (i__22742_22770 + (1));
seq__22739_22767 = G__22772;
chunk__22740_22768 = G__22773;
count__22741_22769 = G__22774;
i__22742_22770 = G__22775;
continue;
} else {
var temp__4657__auto___22776 = cljs.core.seq.call(null,seq__22739_22767);
if(temp__4657__auto___22776){
var seq__22739_22777__$1 = temp__4657__auto___22776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739_22777__$1)){
var c__7767__auto___22778 = cljs.core.chunk_first.call(null,seq__22739_22777__$1);
var G__22779 = cljs.core.chunk_rest.call(null,seq__22739_22777__$1);
var G__22780 = c__7767__auto___22778;
var G__22781 = cljs.core.count.call(null,c__7767__auto___22778);
var G__22782 = (0);
seq__22739_22767 = G__22779;
chunk__22740_22768 = G__22780;
count__22741_22769 = G__22781;
i__22742_22770 = G__22782;
continue;
} else {
var ch_22783 = cljs.core.first.call(null,seq__22739_22777__$1);
e.appendChild(ch_22783);

var G__22784 = cljs.core.next.call(null,seq__22739_22777__$1);
var G__22785 = null;
var G__22786 = (0);
var G__22787 = (0);
seq__22739_22767 = G__22784;
chunk__22740_22768 = G__22785;
count__22741_22769 = G__22786;
i__22742_22770 = G__22787;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq22732){
var G__22733 = cljs.core.first.call(null,seq22732);
var seq22732__$1 = cljs.core.next.call(null,seq22732);
var G__22734 = cljs.core.first.call(null,seq22732__$1);
var seq22732__$2 = cljs.core.next.call(null,seq22732__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__22733,G__22734,seq22732__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__7881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7882__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7883__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7884__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7885__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__7881__auto__,prefer_table__7882__auto__,method_cache__7883__auto__,cached_hierarchy__7884__auto__,hierarchy__7885__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__7881__auto__,prefer_table__7882__auto__,method_cache__7883__auto__,cached_hierarchy__7884__auto__,hierarchy__7885__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7885__auto__,method_table__7881__auto__,prefer_table__7882__auto__,method_cache__7883__auto__,cached_hierarchy__7884__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_22788 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_22788.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22788.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_22788.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22788);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__22789,st_map){
var map__22796 = p__22789;
var map__22796__$1 = ((((!((map__22796 == null)))?((((map__22796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22796):map__22796);
var container_el = cljs.core.get.call(null,map__22796__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22796,map__22796__$1,container_el){
return (function (p__22798){
var vec__22799 = p__22798;
var k = cljs.core.nth.call(null,vec__22799,(0),null);
var v = cljs.core.nth.call(null,vec__22799,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22796,map__22796__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__22802,dom_str){
var map__22805 = p__22802;
var map__22805__$1 = ((((!((map__22805 == null)))?((((map__22805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22805):map__22805);
var c = map__22805__$1;
var content_area_el = cljs.core.get.call(null,map__22805__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__22807){
var map__22810 = p__22807;
var map__22810__$1 = ((((!((map__22810 == null)))?((((map__22810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22810):map__22810);
var content_area_el = cljs.core.get.call(null,map__22810__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_22853){
var state_val_22854 = (state_22853[(1)]);
if((state_val_22854 === (1))){
var inst_22838 = (state_22853[(7)]);
var inst_22838__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22839 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22840 = ["10px","10px","100%","68px","1.0"];
var inst_22841 = cljs.core.PersistentHashMap.fromArrays(inst_22839,inst_22840);
var inst_22842 = cljs.core.merge.call(null,inst_22841,style);
var inst_22843 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22838__$1,inst_22842);
var inst_22844 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22838__$1,msg);
var inst_22845 = cljs.core.async.timeout.call(null,(300));
var state_22853__$1 = (function (){var statearr_22855 = state_22853;
(statearr_22855[(7)] = inst_22838__$1);

(statearr_22855[(8)] = inst_22843);

(statearr_22855[(9)] = inst_22844);

return statearr_22855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22853__$1,(2),inst_22845);
} else {
if((state_val_22854 === (2))){
var inst_22838 = (state_22853[(7)]);
var inst_22847 = (state_22853[(2)]);
var inst_22848 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22849 = ["auto"];
var inst_22850 = cljs.core.PersistentHashMap.fromArrays(inst_22848,inst_22849);
var inst_22851 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22838,inst_22850);
var state_22853__$1 = (function (){var statearr_22856 = state_22853;
(statearr_22856[(10)] = inst_22847);

return statearr_22856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22853__$1,inst_22851);
} else {
return null;
}
}
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____0 = (function (){
var statearr_22860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22860[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__);

(statearr_22860[(1)] = (1));

return statearr_22860;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____1 = (function (state_22853){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_22853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e22861){if((e22861 instanceof Object)){
var ex__11575__auto__ = e22861;
var statearr_22862_22864 = state_22853;
(statearr_22862_22864[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22865 = state_22853;
state_22853 = G__22865;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__ = function(state_22853){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____1.call(this,state_22853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_22863 = f__11684__auto__.call(null);
(statearr_22863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_22863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args22866 = [];
var len__8057__auto___22869 = arguments.length;
var i__8058__auto___22870 = (0);
while(true){
if((i__8058__auto___22870 < len__8057__auto___22869)){
args22866.push((arguments[i__8058__auto___22870]));

var G__22871 = (i__8058__auto___22870 + (1));
i__8058__auto___22870 = G__22871;
continue;
} else {
}
break;
}

var G__22868 = args22866.length;
switch (G__22868) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22866.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__22873){
var map__22876 = p__22873;
var map__22876__$1 = ((((!((map__22876 == null)))?((((map__22876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22876):map__22876);
var file = cljs.core.get.call(null,map__22876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22876__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__6948__auto__ = file;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__22878){
var vec__22885 = p__22878;
var typ = cljs.core.nth.call(null,vec__22885,(0),null);
var line_number = cljs.core.nth.call(null,vec__22885,(1),null);
var line = cljs.core.nth.call(null,vec__22885,(2),null);
var pred__22888 = cljs.core._EQ_;
var expr__22889 = typ;
if(cljs.core.truth_(pred__22888.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__22889))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__22888.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__22889))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__22888.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__22889))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__22891_SHARP_){
return cljs.core.update_in.call(null,p1__22891_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__22892_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__22892_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__22895){
var map__22898 = p__22895;
var map__22898__$1 = ((((!((map__22898 == null)))?((((map__22898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22898):map__22898);
var exception = map__22898__$1;
var message = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__22898__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__6936__auto__ = file;
if(cljs.core.truth_(and__6936__auto__)){
return line;
} else {
return and__6936__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__22898,map__22898__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__22893_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22893_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__22898,map__22898__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__22898,map__22898__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__22894_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__22894_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__22894_SHARP_)))].join('');
});})(last_message,map__22898,map__22898__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__22900){
var map__22903 = p__22900;
var map__22903__$1 = ((((!((map__22903 == null)))?((((map__22903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22903):map__22903);
var file = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__22908 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__22908__$1 = ((((!((map__22908 == null)))?((((map__22908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22908):map__22908);
var head = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__22911){
var map__22914 = p__22911;
var map__22914__$1 = ((((!((map__22914 == null)))?((((map__22914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22914):map__22914);
var warning_data = map__22914__$1;
var file = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__6936__auto__ = file;
if(cljs.core.truth_(and__6936__auto__)){
return line;
} else {
return and__6936__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__22914,map__22914__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__22910_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22910_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__22914,map__22914__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__22918 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__22918__$1 = ((((!((map__22918 == null)))?((((map__22918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22918):map__22918);
var head = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22918__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__22920){
var map__22924 = p__22920;
var map__22924__$1 = ((((!((map__22924 == null)))?((((map__22924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22924):map__22924);
var warning_data = map__22924__$1;
var message = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__22926 = message;
var G__22926__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22926),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__22926);
var G__22926__$2 = (cljs.core.truth_((function (){var and__6936__auto__ = line;
if(cljs.core.truth_(and__6936__auto__)){
return column;
} else {
return and__6936__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22926__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__22926__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22926__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__22926__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__22927){
var map__22932 = p__22927;
var map__22932__$1 = ((((!((map__22932 == null)))?((((map__22932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22932):map__22932);
var warning_data = map__22932__$1;
var message = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__22934 = figwheel.client.heads_up.ensure_container.call(null);
var map__22934__$1 = ((((!((map__22934 == null)))?((((map__22934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22934):map__22934);
var content_area_el = cljs.core.get.call(null,map__22934__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (1))){
var inst_22965 = (state_22982[(7)]);
var inst_22965__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22966 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22967 = ["0.0"];
var inst_22968 = cljs.core.PersistentHashMap.fromArrays(inst_22966,inst_22967);
var inst_22969 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22965__$1,inst_22968);
var inst_22970 = cljs.core.async.timeout.call(null,(300));
var state_22982__$1 = (function (){var statearr_22984 = state_22982;
(statearr_22984[(7)] = inst_22965__$1);

(statearr_22984[(8)] = inst_22969);

return statearr_22984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22982__$1,(2),inst_22970);
} else {
if((state_val_22983 === (2))){
var inst_22965 = (state_22982[(7)]);
var inst_22972 = (state_22982[(2)]);
var inst_22973 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22974 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22975 = cljs.core.PersistentHashMap.fromArrays(inst_22973,inst_22974);
var inst_22976 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22965,inst_22975);
var inst_22977 = cljs.core.async.timeout.call(null,(200));
var state_22982__$1 = (function (){var statearr_22985 = state_22982;
(statearr_22985[(9)] = inst_22976);

(statearr_22985[(10)] = inst_22972);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22982__$1,(3),inst_22977);
} else {
if((state_val_22983 === (3))){
var inst_22965 = (state_22982[(7)]);
var inst_22979 = (state_22982[(2)]);
var inst_22980 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22965,"");
var state_22982__$1 = (function (){var statearr_22986 = state_22982;
(statearr_22986[(11)] = inst_22979);

return statearr_22986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22982__$1,inst_22980);
} else {
return null;
}
}
}
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__11572__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__11572__auto____0 = (function (){
var statearr_22990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22990[(0)] = figwheel$client$heads_up$clear_$_state_machine__11572__auto__);

(statearr_22990[(1)] = (1));

return statearr_22990;
});
var figwheel$client$heads_up$clear_$_state_machine__11572__auto____1 = (function (state_22982){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_22982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e22991){if((e22991 instanceof Object)){
var ex__11575__auto__ = e22991;
var statearr_22992_22994 = state_22982;
(statearr_22992_22994[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22995 = state_22982;
state_22982 = G__22995;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__11572__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__11572__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__11572__auto____0;
figwheel$client$heads_up$clear_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__11572__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_22993 = f__11684__auto__.call(null);
(statearr_22993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_22993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_23027){
var state_val_23028 = (state_23027[(1)]);
if((state_val_23028 === (1))){
var inst_23017 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(2),inst_23017);
} else {
if((state_val_23028 === (2))){
var inst_23019 = (state_23027[(2)]);
var inst_23020 = cljs.core.async.timeout.call(null,(400));
var state_23027__$1 = (function (){var statearr_23029 = state_23027;
(statearr_23029[(7)] = inst_23019);

return statearr_23029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(3),inst_23020);
} else {
if((state_val_23028 === (3))){
var inst_23022 = (state_23027[(2)]);
var inst_23023 = figwheel.client.heads_up.clear.call(null);
var state_23027__$1 = (function (){var statearr_23030 = state_23027;
(statearr_23030[(8)] = inst_23022);

return statearr_23030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(4),inst_23023);
} else {
if((state_val_23028 === (4))){
var inst_23025 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23027__$1,inst_23025);
} else {
return null;
}
}
}
}
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____0 = (function (){
var statearr_23034 = [null,null,null,null,null,null,null,null,null];
(statearr_23034[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__);

(statearr_23034[(1)] = (1));

return statearr_23034;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____1 = (function (state_23027){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_23027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e23035){if((e23035 instanceof Object)){
var ex__11575__auto__ = e23035;
var statearr_23036_23038 = state_23027;
(statearr_23036_23038[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23039 = state_23027;
state_23027 = G__23039;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__ = function(state_23027){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____1.call(this,state_23027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_23037 = f__11684__auto__.call(null);
(statearr_23037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map