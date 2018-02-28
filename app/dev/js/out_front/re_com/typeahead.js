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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__14581){
var map__14585 = p__14581;
var map__14585__$1 = ((((!((map__14585 == null)))?((((map__14585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14585):map__14585);
var args = map__14585__$1;
var on_change = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__14587 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__6948__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__14587,external_model_value);
} else {
return G__14587;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__14588,event){
var map__14592 = p__14588;
var map__14592__$1 = ((((!((map__14592 == null)))?((((map__14592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14592):map__14592);
var state = map__14592__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__14592__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__14594 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__14594) {
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
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__14596,event){
var map__14600 = p__14596;
var map__14600__$1 = ((((!((map__14600 == null)))?((((map__14600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14600):map__14600);
var state = map__14600__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14600__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__14602 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__14602) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__14604,new_value){
var map__14607 = p__14604;
var map__14607__$1 = ((((!((map__14607 == null)))?((((map__14607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14607):map__14607);
var state = map__14607__$1;
var on_change = cljs.core.get.call(null,map__14607__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__14609,suggestion){
var map__14613 = p__14609;
var map__14613__$1 = ((((!((map__14613 == null)))?((((map__14613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14613):map__14613);
var state = map__14613__$1;
var suggestion_to_string = cljs.core.get.call(null,map__14613__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__14615 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__14615,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__14615;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__14616,index){
var map__14620 = p__14616;
var map__14620__$1 = ((((!((map__14620 == null)))?((((map__14620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14620):map__14620);
var state = map__14620__$1;
var suggestions = cljs.core.get.call(null,map__14620__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__14622 = state;
var G__14622__$1 = cljs.core.assoc.call(null,G__14622,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__14622__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__14622__$1,suggestion):G__14622__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__14622__$2,suggestion);
} else {
return G__14622__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__14623,index){
var map__14626 = p__14623;
var map__14626__$1 = ((((!((map__14626 == null)))?((((map__14626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14626):map__14626);
var state = map__14626__$1;
var suggestions = cljs.core.get.call(null,map__14626__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__14628){
var map__14632 = p__14628;
var map__14632__$1 = ((((!((map__14632 == null)))?((((map__14632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14632):map__14632);
var state = map__14632__$1;
var suggestion_active_index = cljs.core.get.call(null,map__14632__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__14634 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__14634,suggestion_active_index);
} else {
return G__14634;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__14635){
var map__14639 = p__14635;
var map__14639__$1 = ((((!((map__14639 == null)))?((((map__14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14639):map__14639);
var state = map__14639__$1;
var suggestions = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__14639__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__14641 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__14641,re_com.typeahead.wrap.call(null,((function (){var or__6948__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__14641;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__14642){
var map__14646 = p__14642;
var map__14646__$1 = ((((!((map__14646 == null)))?((((map__14646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14646):map__14646);
var state = map__14646__$1;
var suggestions = cljs.core.get.call(null,map__14646__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__14646__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__14648 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__14648,re_com.typeahead.wrap.call(null,((function (){var or__6948__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__6948__auto__)){
return or__6948__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__14648;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__14650 = state;
var G__14650__$1 = re_com.typeahead.clear_suggestions.call(null,G__14650)
;
var G__14650__$2 = cljs.core.assoc.call(null,G__14650__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__14650__$2,null);
} else {
return G__14650__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__14651){
var map__14655 = p__14651;
var map__14655__$1 = ((((!((map__14655 == null)))?((((map__14655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14655):map__14655);
var state = map__14655__$1;
var input_text = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__14655__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__14657 = state;
if(cljs.core.truth_((function (){var and__6936__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__6936__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__6936__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__14657,input_text);
} else {
return G__14657;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__14658_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__14658_SHARP_);
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
var c__11683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto__){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto__){
return (function (state_14708){
var state_val_14709 = (state_14708[(1)]);
if((state_val_14709 === (1))){
var state_14708__$1 = state_14708;
var statearr_14710_14725 = state_14708__$1;
(statearr_14710_14725[(2)] = null);

(statearr_14710_14725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (2))){
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14708__$1,(4),c_search);
} else {
if((state_val_14709 === (3))){
var inst_14706 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14708__$1,inst_14706);
} else {
if((state_val_14709 === (4))){
var inst_14694 = (state_14708[(7)]);
var inst_14694__$1 = (state_14708[(2)]);
var inst_14695 = cljs.core.deref.call(null,state_atom);
var inst_14696 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_14695);
var inst_14697 = cljs.core._EQ_.call(null,"",inst_14694__$1);
var state_14708__$1 = (function (){var statearr_14711 = state_14708;
(statearr_14711[(8)] = inst_14696);

(statearr_14711[(7)] = inst_14694__$1);

return statearr_14711;
})();
if(inst_14697){
var statearr_14712_14726 = state_14708__$1;
(statearr_14712_14726[(1)] = (5));

} else {
var statearr_14713_14727 = state_14708__$1;
(statearr_14713_14727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (5))){
var inst_14699 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_14708__$1 = state_14708;
var statearr_14714_14728 = state_14708__$1;
(statearr_14714_14728[(2)] = inst_14699);

(statearr_14714_14728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (6))){
var inst_14696 = (state_14708[(8)]);
var inst_14694 = (state_14708[(7)]);
var inst_14701 = re_com.typeahead.search_data_source_BANG_.call(null,inst_14696,state_atom,inst_14694);
var state_14708__$1 = state_14708;
var statearr_14715_14729 = state_14708__$1;
(statearr_14715_14729[(2)] = inst_14701);

(statearr_14715_14729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (7))){
var inst_14703 = (state_14708[(2)]);
var state_14708__$1 = (function (){var statearr_14716 = state_14708;
(statearr_14716[(9)] = inst_14703);

return statearr_14716;
})();
var statearr_14717_14730 = state_14708__$1;
(statearr_14717_14730[(2)] = null);

(statearr_14717_14730[(1)] = (2));


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
});})(c__11683__auto__))
;
return ((function (switch__11571__auto__,c__11683__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____0 = (function (){
var statearr_14721 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14721[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__);

(statearr_14721[(1)] = (1));

return statearr_14721;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____1 = (function (state_14708){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14722){if((e14722 instanceof Object)){
var ex__11575__auto__ = e14722;
var statearr_14723_14731 = state_14708;
(statearr_14723_14731[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14732 = state_14708;
state_14708 = G__14732;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto__))
})();
var state__11685__auto__ = (function (){var statearr_14724 = f__11684__auto__.call(null);
(statearr_14724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto__);

return statearr_14724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto__))
);

return c__11683__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__14737 = cljs.core.deref.call(null,state_atom);
var map__14737__$1 = ((((!((map__14737 == null)))?((((map__14737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14737):map__14737);
var state = map__14737__$1;
var input_text = cljs.core.get.call(null,map__14737__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__14737__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__14737,map__14737__$1,state,input_text,c_input){
return (function (p1__14733_SHARP_){
var G__14739 = p1__14733_SHARP_;
var G__14739__$1 = cljs.core.assoc.call(null,G__14739,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__14739__$1,new_text);
} else {
return G__14739__$1;
}
});})(map__14737,map__14737__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__14743 = cljs.core._EQ_;
var expr__14744 = event.which;
if(cljs.core.truth_(pred__14743.call(null,goog.events.KeyCodes.UP,expr__14744))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__14743.call(null,goog.events.KeyCodes.DOWN,expr__14744))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__14743.call(null,goog.events.KeyCodes.ENTER,expr__14744))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__14743.call(null,goog.events.KeyCodes.ESC,expr__14744))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__14743.call(null,goog.events.KeyCodes.TAB,expr__14744))){
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
var len__8057__auto___14774 = arguments.length;
var i__8058__auto___14775 = (0);
while(true){
if((i__8058__auto___14775 < len__8057__auto___14774)){
args__8064__auto__.push((arguments[i__8058__auto___14775]));

var G__14776 = (i__8058__auto___14775 + (1));
i__8058__auto___14775 = G__14776;
continue;
} else {
}
break;
}

var argseq__8065__auto__ = ((((0) < args__8064__auto__.length))?(new cljs.core.IndexedSeq(args__8064__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__8065__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__14748){
var map__14749 = p__14748;
var map__14749__$1 = ((((!((map__14749 == null)))?((((map__14749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14749):map__14749);
var args = map__14749__$1;
var data_source = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14749__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));

var map__14751 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__14751__$1 = ((((!((map__14751 == null)))?((((map__14751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14751):map__14751);
var state = map__14751__$1;
var c_search = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__14751__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__14777__delegate = function (p__14753){
var map__14754 = p__14753;
var map__14754__$1 = ((((!((map__14754 == null)))?((((map__14754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14754):map__14754);
var args__$1 = map__14754__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__14754__$1,new cljs.core.Keyword(null,"class","class",-2030961996));

var map__14756 = cljs.core.deref.call(null,state_atom);
var map__14756__$1 = ((((!((map__14756 == null)))?((((map__14756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14756):map__14756);
var state__$1 = map__14756__$1;
var suggestions = cljs.core.get.call(null,map__14756__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__14756__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__14756__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__14756__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__7736__auto__ = ((function (map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__14758(s__14759){
return (new cljs.core.LazySeq(null,((function (map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__14759__$1 = s__14759;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14759__$1);
if(temp__4657__auto__){
var s__14759__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14759__$2)){
var c__7734__auto__ = cljs.core.chunk_first.call(null,s__14759__$2);
var size__7735__auto__ = cljs.core.count.call(null,c__7734__auto__);
var b__14761 = cljs.core.chunk_buffer.call(null,size__7735__auto__);
if((function (){var i__14760 = (0);
while(true){
if((i__14760 < size__7735__auto__)){
var vec__14768 = cljs.core._nth.call(null,c__7734__auto__,i__14760);
var i = cljs.core.nth.call(null,vec__14768,(0),null);
var s = cljs.core.nth.call(null,vec__14768,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__14761,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__14760,selected_QMARK_,vec__14768,i,s,c__7734__auto__,size__7735__auto__,b__14761,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__14760,selected_QMARK_,vec__14768,i,s,c__7734__auto__,size__7735__auto__,b__14761,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__14760,selected_QMARK_,vec__14768,i,s,c__7734__auto__,size__7735__auto__,b__14761,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__14746_SHARP_){
p1__14746_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__14760,selected_QMARK_,vec__14768,i,s,c__7734__auto__,size__7735__auto__,b__14761,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__14778 = (i__14760 + (1));
i__14760 = G__14778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14761),re_com$typeahead$iter__14758.call(null,cljs.core.chunk_rest.call(null,s__14759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14761),null);
}
} else {
var vec__14771 = cljs.core.first.call(null,s__14759__$2);
var i = cljs.core.nth.call(null,vec__14771,(0),null);
var s = cljs.core.nth.call(null,vec__14771,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__14771,i,s,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__14771,i,s,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__14771,i,s,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__14746_SHARP_){
p1__14746_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__14771,i,s,s__14759__$2,temp__4657__auto__,map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__14758.call(null,cljs.core.rest.call(null,s__14759__$2)));
}
} else {
return null;
}
break;
}
});})(map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__14756,map__14756__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__14754,map__14754__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__7736__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__14777 = function (var_args){
var p__14753 = null;
if (arguments.length > 0) {
var G__14779__i = 0, G__14779__a = new Array(arguments.length -  0);
while (G__14779__i < G__14779__a.length) {G__14779__a[G__14779__i] = arguments[G__14779__i + 0]; ++G__14779__i;}
  p__14753 = new cljs.core.IndexedSeq(G__14779__a,0);
} 
return G__14777__delegate.call(this,p__14753);};
G__14777.cljs$lang$maxFixedArity = 0;
G__14777.cljs$lang$applyTo = (function (arglist__14780){
var p__14753 = cljs.core.seq(arglist__14780);
return G__14777__delegate(p__14753);
});
G__14777.cljs$core$IFn$_invoke$arity$variadic = G__14777__delegate;
return G__14777;
})()
;
;})(map__14751,map__14751__$1,state,c_search,c_input,state_atom,input_text_model,map__14749,map__14749__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq14747){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14747));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__11683__auto___14947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11683__auto___14947,out){
return (function (){
var f__11684__auto__ = (function (){var switch__11571__auto__ = ((function (c__11683__auto___14947,out){
return (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (7))){
var inst_14869 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14916_14948 = state_14914__$1;
(statearr_14916_14948[(2)] = inst_14869);

(statearr_14916_14948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (1))){
var inst_14864 = null;
var state_14914__$1 = (function (){var statearr_14917 = state_14914;
(statearr_14917[(7)] = inst_14864);

return statearr_14917;
})();
var statearr_14918_14949 = state_14914__$1;
(statearr_14918_14949[(2)] = null);

(statearr_14918_14949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (4))){
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14914__$1,(7),in$);
} else {
if((state_val_14915 === (15))){
var inst_14899 = (state_14914[(2)]);
var state_14914__$1 = (function (){var statearr_14919 = state_14914;
(statearr_14919[(8)] = inst_14899);

return statearr_14919;
})();
var statearr_14920_14950 = state_14914__$1;
(statearr_14920_14950[(2)] = null);

(statearr_14920_14950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (13))){
var inst_14887 = (state_14914[(9)]);
var inst_14901 = cljs.core._EQ_.call(null,inst_14887,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_14914__$1 = state_14914;
if(inst_14901){
var statearr_14921_14951 = state_14914__$1;
(statearr_14921_14951[(1)] = (16));

} else {
var statearr_14922_14952 = state_14914__$1;
(statearr_14922_14952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (6))){
var inst_14873 = (state_14914[(10)]);
var inst_14872 = (state_14914[(2)]);
var inst_14873__$1 = cljs.core.async.timeout.call(null,ms);
var inst_14881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14882 = [in$,inst_14873__$1];
var inst_14883 = (new cljs.core.PersistentVector(null,2,(5),inst_14881,inst_14882,null));
var state_14914__$1 = (function (){var statearr_14923 = state_14914;
(statearr_14923[(11)] = inst_14872);

(statearr_14923[(10)] = inst_14873__$1);

return statearr_14923;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14914__$1,(8),inst_14883);
} else {
if((state_val_14915 === (17))){
var state_14914__$1 = state_14914;
var statearr_14924_14953 = state_14914__$1;
(statearr_14924_14953[(2)] = null);

(statearr_14924_14953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (3))){
var inst_14912 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14914__$1,inst_14912);
} else {
if((state_val_14915 === (12))){
var inst_14872 = (state_14914[(11)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14914__$1,(15),out,inst_14872);
} else {
if((state_val_14915 === (2))){
var inst_14864 = (state_14914[(7)]);
var inst_14866 = (inst_14864 == null);
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14866)){
var statearr_14925_14954 = state_14914__$1;
(statearr_14925_14954[(1)] = (4));

} else {
var statearr_14926_14955 = state_14914__$1;
(statearr_14926_14955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (11))){
var inst_14909 = (state_14914[(2)]);
var inst_14864 = inst_14909;
var state_14914__$1 = (function (){var statearr_14927 = state_14914;
(statearr_14927[(7)] = inst_14864);

return statearr_14927;
})();
var statearr_14928_14956 = state_14914__$1;
(statearr_14928_14956[(2)] = null);

(statearr_14928_14956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (9))){
var inst_14885 = (state_14914[(12)]);
var inst_14893 = cljs.core.nth.call(null,inst_14885,(0),null);
var inst_14894 = cljs.core.nth.call(null,inst_14885,(1),null);
var state_14914__$1 = (function (){var statearr_14929 = state_14914;
(statearr_14929[(13)] = inst_14894);

return statearr_14929;
})();
var statearr_14930_14957 = state_14914__$1;
(statearr_14930_14957[(2)] = inst_14893);

(statearr_14930_14957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (5))){
var inst_14864 = (state_14914[(7)]);
var state_14914__$1 = state_14914;
var statearr_14931_14958 = state_14914__$1;
(statearr_14931_14958[(2)] = inst_14864);

(statearr_14931_14958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (14))){
var inst_14907 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14932_14959 = state_14914__$1;
(statearr_14932_14959[(2)] = inst_14907);

(statearr_14932_14959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (16))){
var inst_14886 = (state_14914[(14)]);
var state_14914__$1 = state_14914;
var statearr_14933_14960 = state_14914__$1;
(statearr_14933_14960[(2)] = inst_14886);

(statearr_14933_14960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (10))){
var inst_14887 = (state_14914[(9)]);
var inst_14873 = (state_14914[(10)]);
var inst_14896 = cljs.core._EQ_.call(null,inst_14887,inst_14873);
var state_14914__$1 = state_14914;
if(inst_14896){
var statearr_14934_14961 = state_14914__$1;
(statearr_14934_14961[(1)] = (12));

} else {
var statearr_14935_14962 = state_14914__$1;
(statearr_14935_14962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (18))){
var inst_14905 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14936_14963 = state_14914__$1;
(statearr_14936_14963[(2)] = inst_14905);

(statearr_14936_14963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (8))){
var inst_14887 = (state_14914[(9)]);
var inst_14885 = (state_14914[(12)]);
var inst_14885__$1 = (state_14914[(2)]);
var inst_14886 = cljs.core.nth.call(null,inst_14885__$1,(0),null);
var inst_14887__$1 = cljs.core.nth.call(null,inst_14885__$1,(1),null);
var inst_14888 = cljs.core._EQ_.call(null,inst_14887__$1,in$);
var state_14914__$1 = (function (){var statearr_14937 = state_14914;
(statearr_14937[(14)] = inst_14886);

(statearr_14937[(9)] = inst_14887__$1);

(statearr_14937[(12)] = inst_14885__$1);

return statearr_14937;
})();
if(inst_14888){
var statearr_14938_14964 = state_14914__$1;
(statearr_14938_14964[(1)] = (9));

} else {
var statearr_14939_14965 = state_14914__$1;
(statearr_14939_14965[(1)] = (10));

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
});})(c__11683__auto___14947,out))
;
return ((function (switch__11571__auto__,c__11683__auto___14947,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__11572__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__11572__auto____0 = (function (){
var statearr_14943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14943[(0)] = re_com$typeahead$debounce_$_state_machine__11572__auto__);

(statearr_14943[(1)] = (1));

return statearr_14943;
});
var re_com$typeahead$debounce_$_state_machine__11572__auto____1 = (function (state_14914){
while(true){
var ret_value__11573__auto__ = (function (){try{while(true){
var result__11574__auto__ = switch__11571__auto__.call(null,state_14914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11574__auto__;
}
break;
}
}catch (e14944){if((e14944 instanceof Object)){
var ex__11575__auto__ = e14944;
var statearr_14945_14966 = state_14914;
(statearr_14945_14966[(5)] = ex__11575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14967 = state_14914;
state_14914 = G__14967;
continue;
} else {
return ret_value__11573__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__11572__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__11572__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__11572__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__11572__auto____0;
re_com$typeahead$debounce_$_state_machine__11572__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__11572__auto____1;
return re_com$typeahead$debounce_$_state_machine__11572__auto__;
})()
;})(switch__11571__auto__,c__11683__auto___14947,out))
})();
var state__11685__auto__ = (function (){var statearr_14946 = f__11684__auto__.call(null);
(statearr_14946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11683__auto___14947);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11685__auto__);
});})(c__11683__auto___14947,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map