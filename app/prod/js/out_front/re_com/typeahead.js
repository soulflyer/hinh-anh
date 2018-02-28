// Compiled by ClojureScript 1.9.473 {:elide-asserts true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__17784){
var map__17788 = p__17784;
var map__17788__$1 = ((((!((map__17788 == null)))?((((map__17788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17788):map__17788);
var args = map__17788__$1;
var on_change = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__17788__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__17790 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__6948__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__17790,external_model_value);
} else {
return G__17790;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__17791,event){
var map__17795 = p__17791;
var map__17795__$1 = ((((!((map__17795 == null)))?((((map__17795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17795):map__17795);
var state = map__17795__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17795__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__17795__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__17797 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__17797) {
case "input-text-blurred":
var and__6936__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__6936__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__6936__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__6948__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__17799,event){
var map__17803 = p__17799;
var map__17803__$1 = ((((!((map__17803 == null)))?((((map__17803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17803):map__17803);
var state = map__17803__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17803__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__17805 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__17805) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__17807,new_value){
var map__17810 = p__17807;
var map__17810__$1 = ((((!((map__17810 == null)))?((((map__17810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17810):map__17810);
var state = map__17810__$1;
var on_change = cljs.core.get.call(null,map__17810__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__17812,suggestion){
var map__17816 = p__17812;
var map__17816__$1 = ((((!((map__17816 == null)))?((((map__17816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17816):map__17816);
var state = map__17816__$1;
var suggestion_to_string = cljs.core.get.call(null,map__17816__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__17818 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__17818,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__17818;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__17819,index){
var map__17823 = p__17819;
var map__17823__$1 = ((((!((map__17823 == null)))?((((map__17823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17823):map__17823);
var state = map__17823__$1;
var suggestions = cljs.core.get.call(null,map__17823__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__17825 = state;
var G__17825__$1 = cljs.core.assoc.call(null,G__17825,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__17825__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__17825__$1,suggestion):G__17825__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__17825__$2,suggestion);
} else {
return G__17825__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__17826,index){
var map__17829 = p__17826;
var map__17829__$1 = ((((!((map__17829 == null)))?((((map__17829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17829):map__17829);
var state = map__17829__$1;
var suggestions = cljs.core.get.call(null,map__17829__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__17831){
var map__17835 = p__17831;
var map__17835__$1 = ((((!((map__17835 == null)))?((((map__17835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17835):map__17835);
var state = map__17835__$1;
var suggestion_active_index = cljs.core.get.call(null,map__17835__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17837 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__17837,suggestion_active_index);
} else {
return G__17837;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__17838){
var map__17842 = p__17838;
var map__17842__$1 = ((((!((map__17842 == null)))?((((map__17842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17842):map__17842);
var state = map__17842__$1;
var suggestions = cljs.core.get.call(null,map__17842__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17842__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17844 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17844,re_com.typeahead.wrap.call(null,((function (){var or__6948__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17844;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__17845){
var map__17849 = p__17845;
var map__17849__$1 = ((((!((map__17849 == null)))?((((map__17849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17849):map__17849);
var state = map__17849__$1;
var suggestions = cljs.core.get.call(null,map__17849__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17849__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17851 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17851,re_com.typeahead.wrap.call(null,((function (){var or__6948__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17851;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__17853 = state;
var G__17853__$1 = re_com.typeahead.clear_suggestions.call(null,G__17853)
;
var G__17853__$2 = cljs.core.assoc.call(null,G__17853__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17853__$2,null);
} else {
return G__17853__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__17854){
var map__17858 = p__17854;
var map__17858__$1 = ((((!((map__17858 == null)))?((((map__17858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17858):map__17858);
var state = map__17858__$1;
var input_text = cljs.core.get.call(null,map__17858__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__17858__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__17860 = state;
if(cljs.core.truth_((function (){var and__6936__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__6936__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__6936__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__17860,input_text);
} else {
return G__17860;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__17861_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__17861_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__14886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto__){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto__){
return (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17913_17928 = state_17911__$1;
(statearr_17913_17928[(2)] = null);

(statearr_17913_17928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17911__$1,(4),c_search);
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (4))){
var inst_17897 = (state_17911[(7)]);
var inst_17897__$1 = (state_17911[(2)]);
var inst_17898 = cljs.core.deref.call(null,state_atom);
var inst_17899 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_17898);
var inst_17900 = cljs.core._EQ_.call(null,"",inst_17897__$1);
var state_17911__$1 = (function (){var statearr_17914 = state_17911;
(statearr_17914[(7)] = inst_17897__$1);

(statearr_17914[(8)] = inst_17899);

return statearr_17914;
})();
if(inst_17900){
var statearr_17915_17929 = state_17911__$1;
(statearr_17915_17929[(1)] = (5));

} else {
var statearr_17916_17930 = state_17911__$1;
(statearr_17916_17930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (5))){
var inst_17902 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_17911__$1 = state_17911;
var statearr_17917_17931 = state_17911__$1;
(statearr_17917_17931[(2)] = inst_17902);

(statearr_17917_17931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (6))){
var inst_17897 = (state_17911[(7)]);
var inst_17899 = (state_17911[(8)]);
var inst_17904 = re_com.typeahead.search_data_source_BANG_.call(null,inst_17899,state_atom,inst_17897);
var state_17911__$1 = state_17911;
var statearr_17918_17932 = state_17911__$1;
(statearr_17918_17932[(2)] = inst_17904);

(statearr_17918_17932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (7))){
var inst_17906 = (state_17911[(2)]);
var state_17911__$1 = (function (){var statearr_17919 = state_17911;
(statearr_17919[(9)] = inst_17906);

return statearr_17919;
})();
var statearr_17920_17933 = state_17911__$1;
(statearr_17920_17933[(2)] = null);

(statearr_17920_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14886__auto__))
;
return ((function (switch__14774__auto__,c__14886__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____0 = (function (){
var statearr_17924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17924[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__);

(statearr_17924[(1)] = (1));

return statearr_17924;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____1 = (function (state_17911){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_17911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e17925){if((e17925 instanceof Object)){
var ex__14778__auto__ = e17925;
var statearr_17926_17934 = state_17911;
(statearr_17926_17934[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17935 = state_17911;
state_17911 = G__17935;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto__))
})();
var state__14888__auto__ = (function (){var statearr_17927 = f__14887__auto__.call(null);
(statearr_17927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto__);

return statearr_17927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto__))
);

return c__14886__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__17940 = cljs.core.deref.call(null,state_atom);
var map__17940__$1 = ((((!((map__17940 == null)))?((((map__17940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17940):map__17940);
var state = map__17940__$1;
var input_text = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__17940,map__17940__$1,state,input_text,c_input){
return (function (p1__17936_SHARP_){
var G__17942 = p1__17936_SHARP_;
var G__17942__$1 = cljs.core.assoc.call(null,G__17942,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17942__$1,new_text);
} else {
return G__17942__$1;
}
});})(map__17940,map__17940__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__17946 = cljs.core._EQ_;
var expr__17947 = event.which;
if(cljs.core.truth_(pred__17946.call(null,goog.events.KeyCodes.UP,expr__17947))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__17946.call(null,goog.events.KeyCodes.DOWN,expr__17947))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__17946.call(null,goog.events.KeyCodes.ENTER,expr__17947))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__17946.call(null,goog.events.KeyCodes.ESC,expr__17947))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__17946.call(null,goog.events.KeyCodes.TAB,expr__17947))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__8064__auto__ = [];
var len__8057__auto___17977 = arguments.length;
var i__8058__auto___17978 = (0);
while(true){
if((i__8058__auto___17978 < len__8057__auto___17977)){
args__8064__auto__.push((arguments[i__8058__auto___17978]));

var G__17979 = (i__8058__auto___17978 + (1));
i__8058__auto___17978 = G__17979;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__17951){
var map__17952 = p__17951;
var map__17952__$1 = ((((!((map__17952 == null)))?((((map__17952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17952):map__17952);
var args = map__17952__$1;
var data_source = cljs.core.get.call(null,map__17952__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__17952__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__17952__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17952__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));

var map__17954 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__17954__$1 = ((((!((map__17954 == null)))?((((map__17954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17954):map__17954);
var state = map__17954__$1;
var c_search = cljs.core.get.call(null,map__17954__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__17954__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__17980__delegate = function (p__17956){
var map__17957 = p__17956;
var map__17957__$1 = ((((!((map__17957 == null)))?((((map__17957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17957):map__17957);
var args__$1 = map__17957__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__17957__$1,new cljs.core.Keyword(null,"class","class",-2030961996));

var map__17959 = cljs.core.deref.call(null,state_atom);
var map__17959__$1 = ((((!((map__17959 == null)))?((((map__17959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17959):map__17959);
var state__$1 = map__17959__$1;
var suggestions = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__17959__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__6948__auto__ = width;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__6948__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__7736__auto__ = ((function (map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__17961(s__17962){
return (new cljs.core.LazySeq(null,((function (map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__17962__$1 = s__17962;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17962__$1);
if(temp__4657__auto__){
var s__17962__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17962__$2)){
var c__7734__auto__ = cljs.core.chunk_first.call(null,s__17962__$2);
var size__7735__auto__ = cljs.core.count.call(null,c__7734__auto__);
var b__17964 = cljs.core.chunk_buffer.call(null,size__7735__auto__);
if((function (){var i__17963 = (0);
while(true){
if((i__17963 < size__7735__auto__)){
var vec__17971 = cljs.core._nth.call(null,c__7734__auto__,i__17963);
var i = cljs.core.nth.call(null,vec__17971,(0),null);
var s = cljs.core.nth.call(null,vec__17971,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__17964,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__17963,selected_QMARK_,vec__17971,i,s,c__7734__auto__,size__7735__auto__,b__17964,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__17963,selected_QMARK_,vec__17971,i,s,c__7734__auto__,size__7735__auto__,b__17964,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__17963,selected_QMARK_,vec__17971,i,s,c__7734__auto__,size__7735__auto__,b__17964,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__17949_SHARP_){
p1__17949_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__17963,selected_QMARK_,vec__17971,i,s,c__7734__auto__,size__7735__auto__,b__17964,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__17981 = (i__17963 + (1));
i__17963 = G__17981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17964),re_com$typeahead$iter__17961.call(null,cljs.core.chunk_rest.call(null,s__17962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17964),null);
}
} else {
var vec__17974 = cljs.core.first.call(null,s__17962__$2);
var i = cljs.core.nth.call(null,vec__17974,(0),null);
var s = cljs.core.nth.call(null,vec__17974,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__17974,i,s,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__17974,i,s,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__17974,i,s,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__17949_SHARP_){
p1__17949_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__17974,i,s,s__17962__$2,temp__4657__auto__,map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__17961.call(null,cljs.core.rest.call(null,s__17962__$2)));
}
} else {
return null;
}
break;
}
});})(map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__17959,map__17959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17957,map__17957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__7736__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__17980 = function (var_args){
var p__17956 = null;
if (arguments.length > 0) {
var G__17982__i = 0, G__17982__a = new Array(arguments.length -  0);
while (G__17982__i < G__17982__a.length) {G__17982__a[G__17982__i] = arguments[G__17982__i + 0]; ++G__17982__i;}
  p__17956 = new cljs.core.IndexedSeq(G__17982__a,0);
} 
return G__17980__delegate.call(this,p__17956);};
G__17980.cljs$lang$maxFixedArity = 0;
G__17980.cljs$lang$applyTo = (function (arglist__17983){
var p__17956 = cljs.core.seq(arglist__17983);
return G__17980__delegate(p__17956);
});
G__17980.cljs$core$IFn$_invoke$arity$variadic = G__17980__delegate;
return G__17980;
})()
;
;})(map__17954,map__17954__$1,state,c_search,c_input,state_atom,input_text_model,map__17952,map__17952__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq17950){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17950));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__14886__auto___18150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14886__auto___18150,out){
return (function (){
var f__14887__auto__ = (function (){var switch__14774__auto__ = ((function (c__14886__auto___18150,out){
return (function (state_18117){
var state_val_18118 = (state_18117[(1)]);
if((state_val_18118 === (7))){
var inst_18072 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
var statearr_18119_18151 = state_18117__$1;
(statearr_18119_18151[(2)] = inst_18072);

(statearr_18119_18151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (1))){
var inst_18067 = null;
var state_18117__$1 = (function (){var statearr_18120 = state_18117;
(statearr_18120[(7)] = inst_18067);

return statearr_18120;
})();
var statearr_18121_18152 = state_18117__$1;
(statearr_18121_18152[(2)] = null);

(statearr_18121_18152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (4))){
var state_18117__$1 = state_18117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18117__$1,(7),in$);
} else {
if((state_val_18118 === (15))){
var inst_18102 = (state_18117[(2)]);
var state_18117__$1 = (function (){var statearr_18122 = state_18117;
(statearr_18122[(8)] = inst_18102);

return statearr_18122;
})();
var statearr_18123_18153 = state_18117__$1;
(statearr_18123_18153[(2)] = null);

(statearr_18123_18153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (13))){
var inst_18090 = (state_18117[(9)]);
var inst_18104 = cljs.core._EQ_.call(null,inst_18090,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_18117__$1 = state_18117;
if(inst_18104){
var statearr_18124_18154 = state_18117__$1;
(statearr_18124_18154[(1)] = (16));

} else {
var statearr_18125_18155 = state_18117__$1;
(statearr_18125_18155[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (6))){
var inst_18076 = (state_18117[(10)]);
var inst_18075 = (state_18117[(2)]);
var inst_18076__$1 = cljs.core.async.timeout.call(null,ms);
var inst_18084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18085 = [in$,inst_18076__$1];
var inst_18086 = (new cljs.core.PersistentVector(null,2,(5),inst_18084,inst_18085,null));
var state_18117__$1 = (function (){var statearr_18126 = state_18117;
(statearr_18126[(10)] = inst_18076__$1);

(statearr_18126[(11)] = inst_18075);

return statearr_18126;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18117__$1,(8),inst_18086);
} else {
if((state_val_18118 === (17))){
var state_18117__$1 = state_18117;
var statearr_18127_18156 = state_18117__$1;
(statearr_18127_18156[(2)] = null);

(statearr_18127_18156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (3))){
var inst_18115 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18117__$1,inst_18115);
} else {
if((state_val_18118 === (12))){
var inst_18075 = (state_18117[(11)]);
var state_18117__$1 = state_18117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18117__$1,(15),out,inst_18075);
} else {
if((state_val_18118 === (2))){
var inst_18067 = (state_18117[(7)]);
var inst_18069 = (inst_18067 == null);
var state_18117__$1 = state_18117;
if(cljs.core.truth_(inst_18069)){
var statearr_18128_18157 = state_18117__$1;
(statearr_18128_18157[(1)] = (4));

} else {
var statearr_18129_18158 = state_18117__$1;
(statearr_18129_18158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (11))){
var inst_18112 = (state_18117[(2)]);
var inst_18067 = inst_18112;
var state_18117__$1 = (function (){var statearr_18130 = state_18117;
(statearr_18130[(7)] = inst_18067);

return statearr_18130;
})();
var statearr_18131_18159 = state_18117__$1;
(statearr_18131_18159[(2)] = null);

(statearr_18131_18159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (9))){
var inst_18088 = (state_18117[(12)]);
var inst_18096 = cljs.core.nth.call(null,inst_18088,(0),null);
var inst_18097 = cljs.core.nth.call(null,inst_18088,(1),null);
var state_18117__$1 = (function (){var statearr_18132 = state_18117;
(statearr_18132[(13)] = inst_18097);

return statearr_18132;
})();
var statearr_18133_18160 = state_18117__$1;
(statearr_18133_18160[(2)] = inst_18096);

(statearr_18133_18160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (5))){
var inst_18067 = (state_18117[(7)]);
var state_18117__$1 = state_18117;
var statearr_18134_18161 = state_18117__$1;
(statearr_18134_18161[(2)] = inst_18067);

(statearr_18134_18161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (14))){
var inst_18110 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
var statearr_18135_18162 = state_18117__$1;
(statearr_18135_18162[(2)] = inst_18110);

(statearr_18135_18162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (16))){
var inst_18089 = (state_18117[(14)]);
var state_18117__$1 = state_18117;
var statearr_18136_18163 = state_18117__$1;
(statearr_18136_18163[(2)] = inst_18089);

(statearr_18136_18163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (10))){
var inst_18076 = (state_18117[(10)]);
var inst_18090 = (state_18117[(9)]);
var inst_18099 = cljs.core._EQ_.call(null,inst_18090,inst_18076);
var state_18117__$1 = state_18117;
if(inst_18099){
var statearr_18137_18164 = state_18117__$1;
(statearr_18137_18164[(1)] = (12));

} else {
var statearr_18138_18165 = state_18117__$1;
(statearr_18138_18165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (18))){
var inst_18108 = (state_18117[(2)]);
var state_18117__$1 = state_18117;
var statearr_18139_18166 = state_18117__$1;
(statearr_18139_18166[(2)] = inst_18108);

(statearr_18139_18166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18118 === (8))){
var inst_18090 = (state_18117[(9)]);
var inst_18088 = (state_18117[(12)]);
var inst_18088__$1 = (state_18117[(2)]);
var inst_18089 = cljs.core.nth.call(null,inst_18088__$1,(0),null);
var inst_18090__$1 = cljs.core.nth.call(null,inst_18088__$1,(1),null);
var inst_18091 = cljs.core._EQ_.call(null,inst_18090__$1,in$);
var state_18117__$1 = (function (){var statearr_18140 = state_18117;
(statearr_18140[(9)] = inst_18090__$1);

(statearr_18140[(12)] = inst_18088__$1);

(statearr_18140[(14)] = inst_18089);

return statearr_18140;
})();
if(inst_18091){
var statearr_18141_18167 = state_18117__$1;
(statearr_18141_18167[(1)] = (9));

} else {
var statearr_18142_18168 = state_18117__$1;
(statearr_18142_18168[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14886__auto___18150,out))
;
return ((function (switch__14774__auto__,c__14886__auto___18150,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__14775__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__14775__auto____0 = (function (){
var statearr_18146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18146[(0)] = re_com$typeahead$debounce_$_state_machine__14775__auto__);

(statearr_18146[(1)] = (1));

return statearr_18146;
});
var re_com$typeahead$debounce_$_state_machine__14775__auto____1 = (function (state_18117){
while(true){
var ret_value__14776__auto__ = (function (){try{while(true){
var result__14777__auto__ = switch__14774__auto__.call(null,state_18117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14777__auto__;
}
break;
}
}catch (e18147){if((e18147 instanceof Object)){
var ex__14778__auto__ = e18147;
var statearr_18148_18169 = state_18117;
(statearr_18148_18169[(5)] = ex__14778__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18170 = state_18117;
state_18117 = G__18170;
continue;
} else {
return ret_value__14776__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__14775__auto__ = function(state_18117){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__14775__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__14775__auto____1.call(this,state_18117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__14775__auto____0;
re_com$typeahead$debounce_$_state_machine__14775__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__14775__auto____1;
return re_com$typeahead$debounce_$_state_machine__14775__auto__;
})()
;})(switch__14774__auto__,c__14886__auto___18150,out))
})();
var state__14888__auto__ = (function (){var statearr_18149 = f__14887__auto__.call(null);
(statearr_18149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14886__auto___18150);

return statearr_18149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14888__auto__);
});})(c__14886__auto___18150,out))
);


return out;
});
