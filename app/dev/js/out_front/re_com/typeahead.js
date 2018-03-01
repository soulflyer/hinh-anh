// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__52777){
var map__52778 = p__52777;
var map__52778__$1 = ((((!((map__52778 == null)))?((((map__52778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52778):map__52778);
var args = map__52778__$1;
var on_change = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__52778__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__52780 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__46739__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__52780,external_model_value);
} else {
return G__52780;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__52781,event){
var map__52782 = p__52781;
var map__52782__$1 = ((((!((map__52782 == null)))?((((map__52782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52782):map__52782);
var state = map__52782__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52782__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__52782__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__52784 = event;
var G__52784__$1 = (((G__52784 instanceof cljs.core.Keyword))?G__52784.fqn:null);
switch (G__52784__$1) {
case "input-text-blurred":
var and__46727__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__46727__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__46739__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52784__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__52786,event){
var map__52787 = p__52786;
var map__52787__$1 = ((((!((map__52787 == null)))?((((map__52787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52787):map__52787);
var state = map__52787__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52787__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__52789 = event;
var G__52789__$1 = (((G__52789 instanceof cljs.core.Keyword))?G__52789.fqn:null);
switch (G__52789__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__52791,new_value){
var map__52792 = p__52791;
var map__52792__$1 = ((((!((map__52792 == null)))?((((map__52792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52792):map__52792);
var state = map__52792__$1;
var on_change = cljs.core.get.call(null,map__52792__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__52794,suggestion){
var map__52795 = p__52794;
var map__52795__$1 = ((((!((map__52795 == null)))?((((map__52795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52795):map__52795);
var state = map__52795__$1;
var suggestion_to_string = cljs.core.get.call(null,map__52795__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__52797 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__52797,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__52797;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__52798,index){
var map__52799 = p__52798;
var map__52799__$1 = ((((!((map__52799 == null)))?((((map__52799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52799):map__52799);
var state = map__52799__$1;
var suggestions = cljs.core.get.call(null,map__52799__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__52801 = state;
var G__52801__$1 = cljs.core.assoc.call(null,G__52801,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__52801__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__52801__$1,suggestion):G__52801__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__52801__$2,suggestion);
} else {
return G__52801__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__52802,index){
var map__52803 = p__52802;
var map__52803__$1 = ((((!((map__52803 == null)))?((((map__52803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52803):map__52803);
var state = map__52803__$1;
var suggestions = cljs.core.get.call(null,map__52803__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__52805){
var map__52806 = p__52805;
var map__52806__$1 = ((((!((map__52806 == null)))?((((map__52806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52806):map__52806);
var state = map__52806__$1;
var suggestion_active_index = cljs.core.get.call(null,map__52806__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52808 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__52808,suggestion_active_index);
} else {
return G__52808;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__52809){
var map__52810 = p__52809;
var map__52810__$1 = ((((!((map__52810 == null)))?((((map__52810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52810):map__52810);
var state = map__52810__$1;
var suggestions = cljs.core.get.call(null,map__52810__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__52810__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52812 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__52812,re_com.typeahead.wrap.call(null,((function (){var or__46739__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__52812;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__52813){
var map__52814 = p__52813;
var map__52814__$1 = ((((!((map__52814 == null)))?((((map__52814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52814):map__52814);
var state = map__52814__$1;
var suggestions = cljs.core.get.call(null,map__52814__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__52814__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52816 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__52816,re_com.typeahead.wrap.call(null,((function (){var or__46739__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__52816;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__52817 = state;
var G__52817__$1 = re_com.typeahead.clear_suggestions.call(null,G__52817)
;
var G__52817__$2 = cljs.core.assoc.call(null,G__52817__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__52817__$2,null);
} else {
return G__52817__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__52818){
var map__52819 = p__52818;
var map__52819__$1 = ((((!((map__52819 == null)))?((((map__52819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52819):map__52819);
var state = map__52819__$1;
var input_text = cljs.core.get.call(null,map__52819__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__52819__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__52821 = state;
if(cljs.core.truth_((function (){var and__46727__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__46727__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__46727__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__52821,input_text);
} else {
return G__52821;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__52822_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__52822_SHARP_);
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
var c__50803__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto__){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto__){
return (function (state_52839){
var state_val_52840 = (state_52839[(1)]);
if((state_val_52840 === (1))){
var state_52839__$1 = state_52839;
var statearr_52841_52853 = state_52839__$1;
(statearr_52841_52853[(2)] = null);

(statearr_52841_52853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52840 === (2))){
var state_52839__$1 = state_52839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52839__$1,(4),c_search);
} else {
if((state_val_52840 === (3))){
var inst_52837 = (state_52839[(2)]);
var state_52839__$1 = state_52839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52839__$1,inst_52837);
} else {
if((state_val_52840 === (4))){
var inst_52825 = (state_52839[(7)]);
var inst_52825__$1 = (state_52839[(2)]);
var inst_52826 = cljs.core.deref.call(null,state_atom);
var inst_52827 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_52826);
var inst_52828 = cljs.core._EQ_.call(null,"",inst_52825__$1);
var state_52839__$1 = (function (){var statearr_52842 = state_52839;
(statearr_52842[(8)] = inst_52827);

(statearr_52842[(7)] = inst_52825__$1);

return statearr_52842;
})();
if(inst_52828){
var statearr_52843_52854 = state_52839__$1;
(statearr_52843_52854[(1)] = (5));

} else {
var statearr_52844_52855 = state_52839__$1;
(statearr_52844_52855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52840 === (5))){
var inst_52830 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_52839__$1 = state_52839;
var statearr_52845_52856 = state_52839__$1;
(statearr_52845_52856[(2)] = inst_52830);

(statearr_52845_52856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52840 === (6))){
var inst_52827 = (state_52839[(8)]);
var inst_52825 = (state_52839[(7)]);
var inst_52832 = re_com.typeahead.search_data_source_BANG_.call(null,inst_52827,state_atom,inst_52825);
var state_52839__$1 = state_52839;
var statearr_52846_52857 = state_52839__$1;
(statearr_52846_52857[(2)] = inst_52832);

(statearr_52846_52857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52840 === (7))){
var inst_52834 = (state_52839[(2)]);
var state_52839__$1 = (function (){var statearr_52847 = state_52839;
(statearr_52847[(9)] = inst_52834);

return statearr_52847;
})();
var statearr_52848_52858 = state_52839__$1;
(statearr_52848_52858[(2)] = null);

(statearr_52848_52858[(1)] = (2));


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
});})(c__50803__auto__))
;
return ((function (switch__50715__auto__,c__50803__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____0 = (function (){
var statearr_52849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52849[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__);

(statearr_52849[(1)] = (1));

return statearr_52849;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____1 = (function (state_52839){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52850){if((e52850 instanceof Object)){
var ex__50719__auto__ = e52850;
var statearr_52851_52859 = state_52839;
(statearr_52851_52859[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52860 = state_52839;
state_52839 = G__52860;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__ = function(state_52839){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____1.call(this,state_52839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto__))
})();
var state__50805__auto__ = (function (){var statearr_52852 = f__50804__auto__.call(null);
(statearr_52852[(6)] = c__50803__auto__);

return statearr_52852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto__))
);

return c__50803__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__52862 = cljs.core.deref.call(null,state_atom);
var map__52862__$1 = ((((!((map__52862 == null)))?((((map__52862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52862):map__52862);
var state = map__52862__$1;
var input_text = cljs.core.get.call(null,map__52862__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__52862__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__52862,map__52862__$1,state,input_text,c_input){
return (function (p1__52861_SHARP_){
var G__52864 = p1__52861_SHARP_;
var G__52864__$1 = cljs.core.assoc.call(null,G__52864,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__52864__$1,new_text);
} else {
return G__52864__$1;
}
});})(map__52862,map__52862__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__52865 = cljs.core._EQ_;
var expr__52866 = event.which;
if(cljs.core.truth_(pred__52865.call(null,goog.events.KeyCodes.UP,expr__52866))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__52865.call(null,goog.events.KeyCodes.DOWN,expr__52866))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__52865.call(null,goog.events.KeyCodes.ENTER,expr__52866))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__52865.call(null,goog.events.KeyCodes.ESC,expr__52866))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__52865.call(null,goog.events.KeyCodes.TAB,expr__52866))){
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
var args__47908__auto__ = [];
var len__47901__auto___52890 = arguments.length;
var i__47902__auto___52891 = (0);
while(true){
if((i__47902__auto___52891 < len__47901__auto___52890)){
args__47908__auto__.push((arguments[i__47902__auto___52891]));

var G__52892 = (i__47902__auto___52891 + (1));
i__47902__auto___52891 = G__52892;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__52870){
var map__52871 = p__52870;
var map__52871__$1 = ((((!((map__52871 == null)))?((((map__52871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52871):map__52871);
var args = map__52871__$1;
var data_source = cljs.core.get.call(null,map__52871__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__52871__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__52871__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52871__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));

var map__52873 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__52873__$1 = ((((!((map__52873 == null)))?((((map__52873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52873):map__52873);
var state = map__52873__$1;
var c_search = cljs.core.get.call(null,map__52873__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__52873__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__52893__delegate = function (p__52875){
var map__52876 = p__52875;
var map__52876__$1 = ((((!((map__52876 == null)))?((((map__52876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52876):map__52876);
var args__$1 = map__52876__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__52876__$1,new cljs.core.Keyword(null,"class","class",-2030961996));

var map__52878 = cljs.core.deref.call(null,state_atom);
var map__52878__$1 = ((((!((map__52878 == null)))?((((map__52878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52878):map__52878);
var state__$1 = map__52878__$1;
var suggestions = cljs.core.get.call(null,map__52878__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__52878__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__52878__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__52878__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__46739__auto__ = width;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__46739__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__47547__auto__ = ((function (map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__52880(s__52881){
return (new cljs.core.LazySeq(null,((function (map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__52881__$1 = s__52881;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__52881__$1);
if(temp__4657__auto__){
var s__52881__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52881__$2)){
var c__47545__auto__ = cljs.core.chunk_first.call(null,s__52881__$2);
var size__47546__auto__ = cljs.core.count.call(null,c__47545__auto__);
var b__52883 = cljs.core.chunk_buffer.call(null,size__47546__auto__);
if((function (){var i__52882 = (0);
while(true){
if((i__52882 < size__47546__auto__)){
var vec__52884 = cljs.core._nth.call(null,c__47545__auto__,i__52882);
var i = cljs.core.nth.call(null,vec__52884,(0),null);
var s = cljs.core.nth.call(null,vec__52884,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__52883,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__52882,selected_QMARK_,vec__52884,i,s,c__47545__auto__,size__47546__auto__,b__52883,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__52882,selected_QMARK_,vec__52884,i,s,c__47545__auto__,size__47546__auto__,b__52883,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__52882,selected_QMARK_,vec__52884,i,s,c__47545__auto__,size__47546__auto__,b__52883,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__52868_SHARP_){
p1__52868_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__52882,selected_QMARK_,vec__52884,i,s,c__47545__auto__,size__47546__auto__,b__52883,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__52894 = (i__52882 + (1));
i__52882 = G__52894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52883),re_com$typeahead$iter__52880.call(null,cljs.core.chunk_rest.call(null,s__52881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52883),null);
}
} else {
var vec__52887 = cljs.core.first.call(null,s__52881__$2);
var i = cljs.core.nth.call(null,vec__52887,(0),null);
var s = cljs.core.nth.call(null,vec__52887,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__52887,i,s,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__52887,i,s,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__52887,i,s,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__52868_SHARP_){
p1__52868_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__52887,i,s,s__52881__$2,temp__4657__auto__,map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__52880.call(null,cljs.core.rest.call(null,s__52881__$2)));
}
} else {
return null;
}
break;
}
});})(map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__52878,map__52878__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52876,map__52876__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__47547__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__52893 = function (var_args){
var p__52875 = null;
if (arguments.length > 0) {
var G__52895__i = 0, G__52895__a = new Array(arguments.length -  0);
while (G__52895__i < G__52895__a.length) {G__52895__a[G__52895__i] = arguments[G__52895__i + 0]; ++G__52895__i;}
  p__52875 = new cljs.core.IndexedSeq(G__52895__a,0,null);
} 
return G__52893__delegate.call(this,p__52875);};
G__52893.cljs$lang$maxFixedArity = 0;
G__52893.cljs$lang$applyTo = (function (arglist__52896){
var p__52875 = cljs.core.seq(arglist__52896);
return G__52893__delegate(p__52875);
});
G__52893.cljs$core$IFn$_invoke$arity$variadic = G__52893__delegate;
return G__52893;
})()
;
;})(map__52873,map__52873__$1,state,c_search,c_input,state_atom,input_text_model,map__52871,map__52871__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq52869){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52869));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__50803__auto___52977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50803__auto___52977,out){
return (function (){
var f__50804__auto__ = (function (){var switch__50715__auto__ = ((function (c__50803__auto___52977,out){
return (function (state_52947){
var state_val_52948 = (state_52947[(1)]);
if((state_val_52948 === (7))){
var inst_52902 = (state_52947[(2)]);
var state_52947__$1 = state_52947;
var statearr_52949_52978 = state_52947__$1;
(statearr_52949_52978[(2)] = inst_52902);

(statearr_52949_52978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (1))){
var inst_52897 = null;
var state_52947__$1 = (function (){var statearr_52950 = state_52947;
(statearr_52950[(7)] = inst_52897);

return statearr_52950;
})();
var statearr_52951_52979 = state_52947__$1;
(statearr_52951_52979[(2)] = null);

(statearr_52951_52979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (4))){
var state_52947__$1 = state_52947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52947__$1,(7),in$);
} else {
if((state_val_52948 === (15))){
var inst_52932 = (state_52947[(2)]);
var state_52947__$1 = (function (){var statearr_52952 = state_52947;
(statearr_52952[(8)] = inst_52932);

return statearr_52952;
})();
var statearr_52953_52980 = state_52947__$1;
(statearr_52953_52980[(2)] = null);

(statearr_52953_52980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (13))){
var inst_52920 = (state_52947[(9)]);
var inst_52934 = cljs.core._EQ_.call(null,inst_52920,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_52947__$1 = state_52947;
if(inst_52934){
var statearr_52954_52981 = state_52947__$1;
(statearr_52954_52981[(1)] = (16));

} else {
var statearr_52955_52982 = state_52947__$1;
(statearr_52955_52982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (6))){
var inst_52906 = (state_52947[(10)]);
var inst_52905 = (state_52947[(2)]);
var inst_52906__$1 = cljs.core.async.timeout.call(null,ms);
var inst_52914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52915 = [in$,inst_52906__$1];
var inst_52916 = (new cljs.core.PersistentVector(null,2,(5),inst_52914,inst_52915,null));
var state_52947__$1 = (function (){var statearr_52956 = state_52947;
(statearr_52956[(11)] = inst_52905);

(statearr_52956[(10)] = inst_52906__$1);

return statearr_52956;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52947__$1,(8),inst_52916);
} else {
if((state_val_52948 === (17))){
var state_52947__$1 = state_52947;
var statearr_52957_52983 = state_52947__$1;
(statearr_52957_52983[(2)] = null);

(statearr_52957_52983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (3))){
var inst_52945 = (state_52947[(2)]);
var state_52947__$1 = state_52947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52947__$1,inst_52945);
} else {
if((state_val_52948 === (12))){
var inst_52905 = (state_52947[(11)]);
var state_52947__$1 = state_52947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52947__$1,(15),out,inst_52905);
} else {
if((state_val_52948 === (2))){
var inst_52897 = (state_52947[(7)]);
var inst_52899 = (inst_52897 == null);
var state_52947__$1 = state_52947;
if(cljs.core.truth_(inst_52899)){
var statearr_52958_52984 = state_52947__$1;
(statearr_52958_52984[(1)] = (4));

} else {
var statearr_52959_52985 = state_52947__$1;
(statearr_52959_52985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (11))){
var inst_52942 = (state_52947[(2)]);
var inst_52897 = inst_52942;
var state_52947__$1 = (function (){var statearr_52960 = state_52947;
(statearr_52960[(7)] = inst_52897);

return statearr_52960;
})();
var statearr_52961_52986 = state_52947__$1;
(statearr_52961_52986[(2)] = null);

(statearr_52961_52986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (9))){
var inst_52918 = (state_52947[(12)]);
var inst_52926 = cljs.core.nth.call(null,inst_52918,(0),null);
var inst_52927 = cljs.core.nth.call(null,inst_52918,(1),null);
var state_52947__$1 = (function (){var statearr_52962 = state_52947;
(statearr_52962[(13)] = inst_52927);

return statearr_52962;
})();
var statearr_52963_52987 = state_52947__$1;
(statearr_52963_52987[(2)] = inst_52926);

(statearr_52963_52987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (5))){
var inst_52897 = (state_52947[(7)]);
var state_52947__$1 = state_52947;
var statearr_52964_52988 = state_52947__$1;
(statearr_52964_52988[(2)] = inst_52897);

(statearr_52964_52988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (14))){
var inst_52940 = (state_52947[(2)]);
var state_52947__$1 = state_52947;
var statearr_52965_52989 = state_52947__$1;
(statearr_52965_52989[(2)] = inst_52940);

(statearr_52965_52989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (16))){
var inst_52919 = (state_52947[(14)]);
var state_52947__$1 = state_52947;
var statearr_52966_52990 = state_52947__$1;
(statearr_52966_52990[(2)] = inst_52919);

(statearr_52966_52990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (10))){
var inst_52920 = (state_52947[(9)]);
var inst_52906 = (state_52947[(10)]);
var inst_52929 = cljs.core._EQ_.call(null,inst_52920,inst_52906);
var state_52947__$1 = state_52947;
if(inst_52929){
var statearr_52967_52991 = state_52947__$1;
(statearr_52967_52991[(1)] = (12));

} else {
var statearr_52968_52992 = state_52947__$1;
(statearr_52968_52992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (18))){
var inst_52938 = (state_52947[(2)]);
var state_52947__$1 = state_52947;
var statearr_52969_52993 = state_52947__$1;
(statearr_52969_52993[(2)] = inst_52938);

(statearr_52969_52993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52948 === (8))){
var inst_52920 = (state_52947[(9)]);
var inst_52918 = (state_52947[(12)]);
var inst_52918__$1 = (state_52947[(2)]);
var inst_52919 = cljs.core.nth.call(null,inst_52918__$1,(0),null);
var inst_52920__$1 = cljs.core.nth.call(null,inst_52918__$1,(1),null);
var inst_52921 = cljs.core._EQ_.call(null,inst_52920__$1,in$);
var state_52947__$1 = (function (){var statearr_52970 = state_52947;
(statearr_52970[(9)] = inst_52920__$1);

(statearr_52970[(12)] = inst_52918__$1);

(statearr_52970[(14)] = inst_52919);

return statearr_52970;
})();
if(inst_52921){
var statearr_52971_52994 = state_52947__$1;
(statearr_52971_52994[(1)] = (9));

} else {
var statearr_52972_52995 = state_52947__$1;
(statearr_52972_52995[(1)] = (10));

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
});})(c__50803__auto___52977,out))
;
return ((function (switch__50715__auto__,c__50803__auto___52977,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__50716__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__50716__auto____0 = (function (){
var statearr_52973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52973[(0)] = re_com$typeahead$debounce_$_state_machine__50716__auto__);

(statearr_52973[(1)] = (1));

return statearr_52973;
});
var re_com$typeahead$debounce_$_state_machine__50716__auto____1 = (function (state_52947){
while(true){
var ret_value__50717__auto__ = (function (){try{while(true){
var result__50718__auto__ = switch__50715__auto__.call(null,state_52947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50718__auto__;
}
break;
}
}catch (e52974){if((e52974 instanceof Object)){
var ex__50719__auto__ = e52974;
var statearr_52975_52996 = state_52947;
(statearr_52975_52996[(5)] = ex__50719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52997 = state_52947;
state_52947 = G__52997;
continue;
} else {
return ret_value__50717__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__50716__auto__ = function(state_52947){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__50716__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__50716__auto____1.call(this,state_52947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__50716__auto____0;
re_com$typeahead$debounce_$_state_machine__50716__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__50716__auto____1;
return re_com$typeahead$debounce_$_state_machine__50716__auto__;
})()
;})(switch__50715__auto__,c__50803__auto___52977,out))
})();
var state__50805__auto__ = (function (){var statearr_52976 = f__50804__auto__.call(null);
(statearr_52976[(6)] = c__50803__auto___52977);

return statearr_52976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50805__auto__);
});})(c__50803__auto___52977,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
