// Compiled by ClojureScript 1.10.64 {:elide-asserts true}
goog.provide('day8.re_frame_10x.utils.re_com');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('clojure.string');
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
day8.re_frame_10x.utils.re_com.px = (function day8$re_frame_10x$utils$re_com$px(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60425 = arguments.length;
var i__47902__auto___60426 = (0);
while(true){
if((i__47902__auto___60426 < len__47901__auto___60425)){
args__47908__auto__.push((arguments[i__47902__auto___60426]));

var G__60427 = (i__47902__auto___60426 + (1));
i__47902__auto___60426 = G__60427;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((1) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

day8.re_frame_10x.utils.re_com.px.cljs$lang$maxFixedArity = (1);

day8.re_frame_10x.utils.re_com.px.cljs$lang$applyTo = (function (seq60423){
var G__60424 = cljs.core.first.call(null,seq60423);
var seq60423__$1 = cljs.core.next.call(null,seq60423);
return day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic(G__60424,seq60423__$1);
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value_peek = (function day8$re_frame_10x$utils$re_com$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof mranderson047.reagent.v0v7v0.reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof mranderson047.reagent.v0v7v0.reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value = (function day8$re_frame_10x$utils$re_com$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
day8.re_frame_10x.utils.re_com.deep_merge = (function day8$re_frame_10x$utils$re_com$deep_merge(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60431 = arguments.length;
var i__47902__auto___60432 = (0);
while(true){
if((i__47902__auto___60432 < len__47901__auto___60431)){
args__47908__auto__.push((arguments[i__47902__auto___60432]));

var G__60433 = (i__47902__auto___60432 + (1));
i__47902__auto___60432 = G__60433;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,day8.re_frame_10x.utils.re_com.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$applyTo = (function (seq60430){
return day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60430));
});

/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
day8.re_frame_10x.utils.re_com.flex_flow_style = (function day8$re_frame_10x$utils$re_com$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),flex_flow,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flex_flow], null);
});
/**
 * Determines the value for the 'flex' attribute (which has grow, shrink and basis), based on the :size parameter.
 * IMPORTANT: The term 'size' means width of the item in the case of flex-direction 'row' OR height of the item in the case of flex-direction 'column'.
 * Flex property explanation:
 *  - grow    Integer ratio (used with other siblings) to determined how a flex item grows it's size if there is extra space to distribute. 0 for no growing.
 *  - shrink  Integer ratio (used with other siblings) to determined how a flex item shrinks it's size if space needs to be removed. 0 for no shrinking.
 *  - basis   Initial size (width, actually) of item before any growing or shrinking. Can be any size value, e.g. 60%, 100px, auto
 *            Note: auto will cause the initial size to be calculated to take up as much space as possible, in conjunction with it's siblings :flex settings.
 * Supported values:
 *  - initial            '0 1 auto'  - Use item's width/height for dimensions (or content dimensions if w/h not specifed). Never grow. Shrink (to min-size) if necessary.
 *                                     Good for creating boxes with fixed maximum size, but that can shrink to a fixed smaller size (min-width/height) if space becomes tight.
 *                                     NOTE: When using initial, you should also set a width/height value (depending on flex-direction) to specify it's default size
 *                                           and an optional min-width/height value to specify the size it can shrink to.
 *  - auto               '1 1 auto'  - Use item's width/height for dimensions. Grow if necessary. Shrink (to min-size) if necessary.
 *                                     Good for creating really flexible boxes that will gobble as much available space as they are allowed or shrink as much as they are forced to.
 *  - none               '0 0 auto'  - Use item's width/height for dimensions (or content dimensions if not specifed). Never grow. Never shrink.
 *                                     Good for creating rigid boxes that stick to their width/height if specified, otherwise their content size.
 *  - 100px              '0 0 100px' - Non flexible 100px size (in the flex direction) box.
 *                                     Good for fixed headers/footers and side bars of an exact size.
 *  - 60%                '60 1 0px'  - Set the item's size (it's width/height depending on flex-direction) to be 60% of the parent container's width/height.
 *                                     NOTE: If you use this, then all siblings with percentage values must add up to 100%.
 *  - 60                 '60 1 0px'  - Same as percentage above.
 *  - grow shrink basis  'grow shrink basis' - If none of the above common valaues above meet your needs, this gives you precise control.
 * If number of words is not 1 or 3, an exception is thrown.
 * Reference: http://www.w3.org/TR/css3-flexbox/#flexibility
 * Diagram:   http://www.w3.org/TR/css3-flexbox/#flex-container
 * Regex101 testing: ^(initial|auto|none)|(\d+)(px|%|em)|(\d+)\w(\d+)\w(.*) - remove double backslashes
 */
day8.re_frame_10x.utils.re_com.flex_child_style = (function day8$re_frame_10x$utils$re_com$flex_child_style(size){
var split_size = clojure.string.split.call(null,clojure.string.trim.call(null,size),/\s+/);
var split_count = cljs.core.count.call(null,split_size);
var _ = null;
var size_only = ((cljs.core._EQ_.call(null,split_count,(1)))?cljs.core.first.call(null,split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.call(null,size_only,/(\d+)(.*)/):null);
var vec__60434 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.call(null,vec__60434,(0),null);
var num = cljs.core.nth.call(null,vec__60434,(1),null);
var units = cljs.core.nth.call(null,vec__60434,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = (cljs.core._EQ_.call(null,units,"%")) || (cljs.core._EQ_.call(null,units,"")) || ((units == null));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__46727__auto__ = size_only;
if(cljs.core.truth_(and__46727__auto__)){
return !(pass_through_QMARK_);
} else {
return and__46727__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shrink)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),flex,new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null);
});
/**
 * Determines the value for the flex 'justify-content' attribute.
 * This parameter determines how children are aligned along the main axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#justify-content-property
 */
day8.re_frame_10x.utils.re_com.justify_style = (function day8$re_frame_10x$utils$re_com$justify_style(justify){
var js = (function (){var G__60437 = justify;
var G__60437__$1 = (((G__60437 instanceof cljs.core.Keyword))?G__60437.fqn:null);
switch (G__60437__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60437__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-justify-content","-webkit-justify-content",205818059),js,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),js], null);
});
/**
 * Determines the value for the flex align type attributes.
 * This parameter determines how children are aligned on the cross axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#align-items-property
 */
day8.re_frame_10x.utils.re_com.align_style = (function day8$re_frame_10x$utils$re_com$align_style(attribute,align){
var attribute_wk = cljs.core.keyword.call(null,["-webkit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attribute))].join(''));
var as = (function (){var G__60439 = align;
var G__60439__$1 = (((G__60439 instanceof cljs.core.Keyword))?G__60439.fqn:null);
switch (G__60439__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "baseline":
return "baseline";

break;
case "stretch":
return "stretch";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60439__$1)].join('')));

}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute_wk,as,attribute,as]);
});
/**
 * Returns a component which produces a gap between children in a v-box/h-box along the main axis
 */
day8.re_frame_10x.utils.re_com.gap_f = (function day8$re_frame_10x$utils$re_com$gap_f(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60445 = arguments.length;
var i__47902__auto___60446 = (0);
while(true){
if((i__47902__auto___60446 < len__47901__auto___60445)){
args__47908__auto__.push((arguments[i__47902__auto___60446]));

var G__60447 = (i__47902__auto___60446 + (1));
i__47902__auto___60446 = G__60447;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic = (function (p__60442){
var map__60443 = p__60442;
var map__60443__$1 = ((((!((map__60443 == null)))?((((map__60443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60443):map__60443);
var args = map__60443__$1;
var size = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var class$ = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60443__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,(cljs.core.truth_(size)?day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-gap ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$applyTo = (function (seq60441){
return day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60441));
});

/**
 * Returns hiccup which produces a horizontal box.
 * It's primary role is to act as a container for components and lays it's children from left to right.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.h_box = (function day8$re_frame_10x$utils$re_com$h_box(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60452 = arguments.length;
var i__47902__auto___60453 = (0);
while(true){
if((i__47902__auto___60453 < len__47901__auto___60452)){
args__47908__auto__.push((arguments[i__47902__auto___60453]));

var G__60454 = (i__47902__auto___60453 + (1));
i__47902__auto___60453 = G__60454;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__60449){
var map__60450 = p__60449;
var map__60450__$1 = ((((!((map__60450 == null)))?((((map__60450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60450):map__60450);
var args = map__60450__$1;
var align_self = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__60450__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"row nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style.call(null,justify),day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"width","width",-384071477),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame_10x.utils.re_com.h_box.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.h_box.cljs$lang$applyTo = (function (seq60448){
return day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60448));
});

/**
 * Returns hiccup which produces a vertical box.
 * It's primary role is to act as a container for components and lays it's children from top to bottom.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.v_box = (function day8$re_frame_10x$utils$re_com$v_box(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60459 = arguments.length;
var i__47902__auto___60460 = (0);
while(true){
if((i__47902__auto___60460 < len__47901__auto___60459)){
args__47908__auto__.push((arguments[i__47902__auto___60460]));

var G__60461 = (i__47902__auto___60460 + (1));
i__47902__auto___60460 = G__60461;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__60456){
var map__60457 = p__60456;
var map__60457__$1 = ((((!((map__60457 == null)))?((((map__60457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60457):map__60457);
var args = map__60457__$1;
var align_self = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__60457__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"column nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style.call(null,justify),day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"height","height",1025178622),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame_10x.utils.re_com.v_box.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.v_box.cljs$lang$applyTo = (function (seq60455){
return day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60455));
});

/**
 * Determines the value for the 'overflow' attribute.
 * The scroll parameter is a keyword.
 * Because we're translating scroll into overflow, the keyword doesn't appear to match the attribute value
 */
day8.re_frame_10x.utils.re_com.scroll_style = (function day8$re_frame_10x$utils$re_com$scroll_style(attribute,scroll){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,(function (){var G__60462 = scroll;
var G__60462__$1 = (((G__60462 instanceof cljs.core.Keyword))?G__60462.fqn:null);
switch (G__60462__$1) {
case "auto":
return "auto";

break;
case "off":
return "hidden";

break;
case "on":
return "scroll";

break;
case "spill":
return "visible";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60462__$1)].join('')));

}
})()]);
});
/**
 * This should generally NOT be used as it is the basis for the box, scroller and border components
 */
day8.re_frame_10x.utils.re_com.box_base = (function day8$re_frame_10x$utils$re_com$box_base(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60468 = arguments.length;
var i__47902__auto___60469 = (0);
while(true){
if((i__47902__auto___60469 < len__47901__auto___60468)){
args__47908__auto__.push((arguments[i__47902__auto___60469]));

var G__60470 = (i__47902__auto___60469 + (1));
i__47902__auto___60469 = G__60470;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__60465){
var map__60466 = p__60465;
var map__60466__$1 = ((((!((map__60466 == null)))?((((map__60466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60466):map__60466);
var child = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var border = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var v_scroll = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668));
var height = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var bk_color = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"bk-color","bk-color",2004848163));
var max_height = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var r_border = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"r-border","r-border",610773511));
var justify = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var h_scroll = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150));
var width = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var b_border = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"b-border","b-border",-1277965683));
var max_width = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var radius = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var size = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var style = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var scroll = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var class$ = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var l_border = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"l-border","l-border",383143028));
var padding = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var t_border = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"t-border","t-border",1110748502));
var class_name = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"inherit"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow","overflow",2058931880),scroll):null),(cljs.core.truth_(h_scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),h_scroll):null),(cljs.core.truth_(v_scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),v_scroll):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),(cljs.core.truth_(justify)?day8.re_frame_10x.utils.re_com.justify_style.call(null,justify):null),(cljs.core.truth_(align)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align):null),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),(cljs.core.truth_(border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),border], null):null),(cljs.core.truth_(l_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),l_border], null):null),(cljs.core.truth_(r_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),r_border], null):null),(cljs.core.truth_(t_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),t_border], null):null),(cljs.core.truth_(b_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),b_border], null):null),(cljs.core.truth_(radius)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius], null):null),(cljs.core.truth_(bk_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bk_color], null):null),style);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr),child], null);
});

day8.re_frame_10x.utils.re_com.box_base.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.box_base.cljs$lang$applyTo = (function (seq60464){
return day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60464));
});

/**
 * Returns hiccup which produces a box, which is generally used as a child of a v-box or an h-box.
 * By default, it also acts as a container for further child compenents, or another h-box or v-box
 */
day8.re_frame_10x.utils.re_com.box = (function day8$re_frame_10x$utils$re_com$box(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60475 = arguments.length;
var i__47902__auto___60476 = (0);
while(true){
if((i__47902__auto___60476 < len__47901__auto___60475)){
args__47908__auto__.push((arguments[i__47902__auto___60476]));

var G__60477 = (i__47902__auto___60476 + (1));
i__47902__auto___60476 = G__60477;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic = (function (p__60472){
var map__60473 = p__60472;
var map__60473__$1 = ((((!((map__60473 == null)))?((((map__60473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60473):map__60473);
var args = map__60473__$1;
var child = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var max_height = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var width = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__60473__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
return day8.re_frame_10x.utils.re_com.box_base.call(null,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"justify","justify",-722524056),justify,new cljs.core.Keyword(null,"align","align",1964212802),align,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self,new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"class-name","class-name",945142584),"rc-box ",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});

day8.re_frame_10x.utils.re_com.box.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.box.cljs$lang$applyTo = (function (seq60471){
return day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60471));
});

/**
 * Returns a component which produces a line between children in a v-box/h-box along the main axis.
 * Specify size in pixels and a stancard CSS color. Defaults to a 1px lightgray line
 */
day8.re_frame_10x.utils.re_com.line = (function day8$re_frame_10x$utils$re_com$line(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60482 = arguments.length;
var i__47902__auto___60483 = (0);
while(true){
if((i__47902__auto___60483 < len__47901__auto___60482)){
args__47908__auto__.push((arguments[i__47902__auto___60483]));

var G__60484 = (i__47902__auto___60483 + (1));
i__47902__auto___60483 = G__60484;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__60479){
var map__60480 = p__60479;
var map__60480__$1 = ((((!((map__60480 == null)))?((((map__60480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60480):map__60480);
var args = map__60480__$1;
var size = cljs.core.get.call(null,map__60480__$1,new cljs.core.Keyword(null,"size","size",1098693007),"1px");
var color = cljs.core.get.call(null,map__60480__$1,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
var class$ = cljs.core.get.call(null,map__60480__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60480__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60480__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame_10x.utils.re_com.line.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.line.cljs$lang$applyTo = (function (seq60478){
return day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60478));
});

/**
 * Returns markup for a basic text input label
 */
day8.re_frame_10x.utils.re_com.input_text_base = (function day8$re_frame_10x$utils$re_com$input_text_base(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60496 = arguments.length;
var i__47902__auto___60497 = (0);
while(true){
if((i__47902__auto___60497 < len__47901__auto___60496)){
args__47908__auto__.push((arguments[i__47902__auto___60497]));

var G__60498 = (i__47902__auto___60497 + (1));
i__47902__auto___60497 = G__60498;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__60486){
var map__60487 = p__60486;
var map__60487__$1 = ((((!((map__60487 == null)))?((((map__60487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60487):map__60487);
var args = map__60487__$1;
var model = cljs.core.get.call(null,map__60487__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.call(null,map__60487__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var external_model = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model));
var internal_model = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,(((cljs.core.deref.call(null,external_model) == null))?"":cljs.core.deref.call(null,external_model)));
return ((function (external_model,internal_model,map__60487,map__60487__$1,args,model,input_type){
return (function() { 
var G__60499__delegate = function (p__60489){
var map__60490 = p__60489;
var map__60490__$1 = ((((!((map__60490 == null)))?((((map__60490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60490):map__60490);
var args__$1 = map__60490__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var on_submit = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var validation_regex = cljs.core.get.call(null,map__60490__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
var latest_ext_model = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var change_on_blur_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,change_on_blur_QMARK_);
var showing_QMARK_ = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__60492 = status;
var G__60492__$1 = (((G__60492 instanceof cljs.core.Keyword))?G__60492.fqn:null);
switch (G__60492__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__46727__auto__ = status;
if(cljs.core.truth_(and__46727__auto__)){
return status_icon_QMARK_;
} else {
return and__46727__auto__;
}
})())?"has-feedback":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"password","password",417022471)))?new cljs.core.Keyword(null,"input","input",556931961):input_type),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,disabled_QMARK___$1,cljs.core.deref.call(null,internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__46727__auto__ = on_change;
if(cljs.core.truth_(and__46727__auto__)){
var and__46727__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__46727__auto____$1)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,external_model));
} else {
return and__46727__auto____$1;
}
} else {
return and__46727__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type))
,(function (){var G__60493 = input_type;
var G__60493__$1 = (((G__60493 instanceof cljs.core.Keyword))?G__60493.fqn:null);
switch (G__60493__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style),((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(function (){var or__46739__auto__ = rows;
if(cljs.core.truth_(or__46739__auto__)){
return or__46739__auto__;
} else {
return (3);
}
})():null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__60494_60502 = event.which;
switch (G__60494_60502) {
case (27):
cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type))
,["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type){
return (function (event){
var new_val_60504 = event.target.value;
if(cljs.core.truth_((function (){var and__46727__auto__ = on_change;
if(cljs.core.truth_(and__46727__auto__)){
var and__46727__auto____$1 = cljs.core.not.call(null,disabled_QMARK___$1);
if(and__46727__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find.call(null,validation_regex,new_val_60504);
} else {
return true;
}
} else {
return and__46727__auto____$1;
}
} else {
return and__46727__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,internal_model,new_val_60504);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change.call(null,cljs.core.deref.call(null,internal_model));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type))
,((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type){
return (function (event){
var G__60495_60505 = event.which;
switch (G__60495_60505) {
case (13):
if(cljs.core.truth_(on_submit)){
on_submit.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

break;
default:

}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__60490,map__60490__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__60487,map__60487__$1,args,model,input_type))
]),attr)], null)], null)], null)], null);
};
var G__60499 = function (var_args){
var p__60489 = null;
if (arguments.length > 0) {
var G__60507__i = 0, G__60507__a = new Array(arguments.length -  0);
while (G__60507__i < G__60507__a.length) {G__60507__a[G__60507__i] = arguments[G__60507__i + 0]; ++G__60507__i;}
  p__60489 = new cljs.core.IndexedSeq(G__60507__a,0,null);
} 
return G__60499__delegate.call(this,p__60489);};
G__60499.cljs$lang$maxFixedArity = 0;
G__60499.cljs$lang$applyTo = (function (arglist__60508){
var p__60489 = cljs.core.seq(arglist__60508);
return G__60499__delegate(p__60489);
});
G__60499.cljs$core$IFn$_invoke$arity$variadic = G__60499__delegate;
return G__60499;
})()
;
;})(external_model,internal_model,map__60487,map__60487__$1,args,model,input_type))
});

day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$applyTo = (function (seq60485){
return day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60485));
});

day8.re_frame_10x.utils.re_com.input_text = (function day8$re_frame_10x$utils$re_com$input_text(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60510 = arguments.length;
var i__47902__auto___60511 = (0);
while(true){
if((i__47902__auto___60511 < len__47901__auto___60510)){
args__47908__auto__.push((arguments[i__47902__auto___60511]));

var G__60512 = (i__47902__auto___60511 + (1));
i__47902__auto___60511 = G__60512;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.utils.re_com.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
});

day8.re_frame_10x.utils.re_com.input_text.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.input_text.cljs$lang$applyTo = (function (seq60509){
return day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60509));
});

/**
 * Returns markup for a basic label
 */
day8.re_frame_10x.utils.re_com.label = (function day8$re_frame_10x$utils$re_com$label(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60517 = arguments.length;
var i__47902__auto___60518 = (0);
while(true){
if((i__47902__auto___60518 < len__47901__auto___60517)){
args__47908__auto__.push((arguments[i__47902__auto___60518]));

var G__60519 = (i__47902__auto___60518 + (1));
i__47902__auto___60518 = G__60519;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__60514){
var map__60515 = p__60514;
var map__60515__$1 = ((((!((map__60515 == null)))?((((map__60515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60515):map__60515);
var args = map__60515__$1;
var label = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var class$ = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60515__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-label-wrapper display-inline-flex",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style)], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60515,map__60515__$1,args,label,on_click,width,class$,style,attr){
return (function (event){
on_click.call(null);

return null;
});})(map__60515,map__60515__$1,args,label,on_click,width,class$,style,attr))
], null):null),attr),label], null)], null);
});

day8.re_frame_10x.utils.re_com.label.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.label.cljs$lang$applyTo = (function (seq60513){
return day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60513));
});

/**
 * acts like [:p ]
 * Creates a paragraph of body text, expected to have a font-szie of 14px or 15px,
 * which should have limited width.
 * Why limited text width?  See http://baymard.com/blog/line-length-readability
 * The actual font-size is inherited.
 * At 14px, 450px will yield between 69 and 73 chars.
 * At 15px, 450px will yield about 66 to 70 chars.
 * So we're at the upper end of the prefered 50 to 75 char range.
 * If the first child is a map, it is interpreted as a map of styles / attributes.
 */
day8.re_frame_10x.utils.re_com.p = (function day8$re_frame_10x$utils$re_com$p(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60524 = arguments.length;
var i__47902__auto___60525 = (0);
while(true){
if((i__47902__auto___60525 < len__47901__auto___60524)){
args__47908__auto__.push((arguments[i__47902__auto___60525]));

var G__60526 = (i__47902__auto___60525 + (1));
i__47902__auto___60525 = G__60526;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var child1 = cljs.core.first.call(null,children);
var vec__60521 = ((cljs.core.map_QMARK_.call(null,child1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child1,cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,children], null));
var m = cljs.core.nth.call(null,vec__60521,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__60521,(1),null);
var m__$1 = day8.re_frame_10x.utils.re_com.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"450px"], null)], null),m);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rc-p","span.rc-p",1027752538),m__$1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),children__$1)], null);
});

day8.re_frame_10x.utils.re_com.p.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.p.cljs$lang$applyTo = (function (seq60520){
return day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60520));
});

/**
 * Returns the markup for a basic button
 */
day8.re_frame_10x.utils.re_com.button = (function day8$re_frame_10x$utils$re_com$button(){
var showing_QMARK_ = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__60530__delegate = function (p__60527){
var map__60528 = p__60527;
var map__60528__$1 = ((((!((map__60528 == null)))?((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60528):map__60528);
var args = map__60528__$1;
var label = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default");
var style = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-button btn noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disabled_QMARK___$1,map__60528,map__60528__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__46727__auto__ = on_click;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__46727__auto__;
}
})())){
on_click.call(null,event);
} else {
}

return null;
});})(disabled_QMARK___$1,map__60528,map__60528__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),attr),label], null);
if(cljs.core.truth_(disabled_QMARK___$1)){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-button-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__60530 = function (var_args){
var p__60527 = null;
if (arguments.length > 0) {
var G__60531__i = 0, G__60531__a = new Array(arguments.length -  0);
while (G__60531__i < G__60531__a.length) {G__60531__a[G__60531__i] = arguments[G__60531__i + 0]; ++G__60531__i;}
  p__60527 = new cljs.core.IndexedSeq(G__60531__a,0,null);
} 
return G__60530__delegate.call(this,p__60527);};
G__60530.cljs$lang$maxFixedArity = 0;
G__60530.cljs$lang$applyTo = (function (arglist__60532){
var p__60527 = cljs.core.seq(arglist__60532);
return G__60530__delegate(p__60527);
});
G__60530.cljs$core$IFn$_invoke$arity$variadic = G__60530__delegate;
return G__60530;
})()
;
;})(showing_QMARK_))
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink = (function day8$re_frame_10x$utils$re_com$hyperlink(){
var showing_QMARK_ = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__60536__delegate = function (p__60533){
var map__60534 = p__60533;
var map__60534__$1 = ((((!((map__60534 == null)))?((((map__60534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60534):map__60534);
var args = map__60534__$1;
var label = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60534__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,label);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label__$1,disabled_QMARK___$1,map__60534,map__60534__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__46727__auto__ = on_click;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__46727__auto__;
}
})())){
on_click.call(null,event);
} else {
}

return null;
});})(label__$1,disabled_QMARK___$1,map__60534,map__60534__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),attr),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__60536 = function (var_args){
var p__60533 = null;
if (arguments.length > 0) {
var G__60537__i = 0, G__60537__a = new Array(arguments.length -  0);
while (G__60537__i < G__60537__a.length) {G__60537__a[G__60537__i] = arguments[G__60537__i + 0]; ++G__60537__i;}
  p__60533 = new cljs.core.IndexedSeq(G__60537__a,0,null);
} 
return G__60536__delegate.call(this,p__60533);};
G__60536.cljs$lang$maxFixedArity = 0;
G__60536.cljs$lang$applyTo = (function (arglist__60538){
var p__60533 = cljs.core.seq(arglist__60538);
return G__60536__delegate(p__60533);
});
G__60536.cljs$core$IFn$_invoke$arity$variadic = G__60536__delegate;
return G__60536;
})()
;
;})(showing_QMARK_))
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink_href = (function day8$re_frame_10x$utils$re_com$hyperlink_href(){
var showing_QMARK_ = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__60542__delegate = function (p__60539){
var map__60540 = p__60539;
var map__60540__$1 = ((((!((map__60540 == null)))?((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60540):map__60540);
var args = map__60540__$1;
var label = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var target = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tooltip = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var tooltip_position = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var class$ = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60540__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}

var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,label);
var href__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,href);
var target__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,target);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style),new cljs.core.Keyword(null,"href","href",-793805698),href__$1,new cljs.core.Keyword(null,"target","target",253001721),target__$1], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (label__$1,href__$1,target__$1,map__60540,map__60540__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,true);

return null;
});})(label__$1,href__$1,target__$1,map__60540,map__60540__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (label__$1,href__$1,target__$1,map__60540,map__60540__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);

return null;
});})(label__$1,href__$1,target__$1,map__60540,map__60540__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
], null):null),attr),label__$1], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__60542 = function (var_args){
var p__60539 = null;
if (arguments.length > 0) {
var G__60543__i = 0, G__60543__a = new Array(arguments.length -  0);
while (G__60543__i < G__60543__a.length) {G__60543__a[G__60543__i] = arguments[G__60543__i + 0]; ++G__60543__i;}
  p__60539 = new cljs.core.IndexedSeq(G__60543__a,0,null);
} 
return G__60542__delegate.call(this,p__60539);};
G__60542.cljs$lang$maxFixedArity = 0;
G__60542.cljs$lang$applyTo = (function (arglist__60544){
var p__60539 = cljs.core.seq(arglist__60544);
return G__60542__delegate(p__60539);
});
G__60542.cljs$core$IFn$_invoke$arity$variadic = G__60542__delegate;
return G__60542;
})()
;
;})(showing_QMARK_))
});
day8.re_frame_10x.utils.re_com.link = (function day8$re_frame_10x$utils$re_com$link(p__60545){
var map__60546 = p__60545;
var map__60546__$1 = ((((!((map__60546 == null)))?((((map__60546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60546):map__60546);
var label = cljs.core.get.call(null,map__60546__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.call(null,map__60546__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href noselect ",new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),label], null);
});
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
day8.re_frame_10x.utils.re_com.checkbox = (function day8$re_frame_10x$utils$re_com$checkbox(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60552 = arguments.length;
var i__47902__auto___60553 = (0);
while(true){
if((i__47902__auto___60553 < len__47901__auto___60552)){
args__47908__auto__.push((arguments[i__47902__auto___60553]));

var G__60554 = (i__47902__auto___60553 + (1));
i__47902__auto___60553 = G__60554;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__60549){
var map__60550 = p__60549;
var map__60550__$1 = ((((!((map__60550 == null)))?((((map__60550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60550):map__60550);
var args = map__60550__$1;
var model = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_class = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var class$ = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__60550__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var cursor = "default";
var model__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (){
if(cljs.core.truth_((function (){var and__46727__auto__ = on_change;
if(cljs.core.truth_(and__46727__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__46727__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox-wrapper noselect",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,model__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
], null),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__60550,map__60550__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
], null),label], null):null)], null)], null);
});

day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$applyTo = (function (seq60548){
return day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60548));
});

day8.re_frame_10x.utils.re_com.close_button = (function day8$re_frame_10x$utils$re_com$close_button(){
var over_QMARK_ = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (over_QMARK_){
return (function() { 
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate = function (p__60555){
var map__60556 = p__60555;
var map__60556__$1 = ((((!((map__60556 == null)))?((((map__60556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60556):map__60556);
var tooltip = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var attr = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left_offset = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643));
var color = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#ccc");
var font_size = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16));
var div_size = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(16));
var on_click = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var top_offset = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245));
var hover_color = cljs.core.get.call(null,map__60556__$1,new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#999");
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-close-button noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.utils.re_com.px.call(null,div_size),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.utils.re_com.px.call(null,div_size)], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),day8.re_frame_10x.utils.re_com.px.call(null,font_size),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?hover_color:color),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.utils.re_com.px.call(null,(((font_size - div_size) / (2)) - top_offset),new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"left","left",-399115937),day8.re_frame_10x.utils.re_com.px.call(null,(((font_size - div_size) / (2)) - left_offset),new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
on_click.call(null);

event.stopPropagation();

return null;
});})(map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,over_QMARK_,true);

return null;
});})(map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,over_QMARK_,false);

return null;
});})(map__60556,map__60556__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
], null),attr),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null)], null)], null);
};
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render = function (var_args){
var p__60555 = null;
if (arguments.length > 0) {
var G__60558__i = 0, G__60558__a = new Array(arguments.length -  0);
while (G__60558__i < G__60558__a.length) {G__60558__a[G__60558__i] = arguments[G__60558__i + 0]; ++G__60558__i;}
  p__60555 = new cljs.core.IndexedSeq(G__60558__a,0,null);
} 
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate.call(this,p__60555);};
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$maxFixedArity = 0;
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$applyTo = (function (arglist__60559){
var p__60555 = cljs.core.seq(arglist__60559);
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate(p__60555);
});
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate;
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render;
})()
;
;})(over_QMARK_))
});
day8.re_frame_10x.utils.re_com.css_join = (function day8$re_frame_10x$utils$re_com$css_join(var_args){
var args__47908__auto__ = [];
var len__47901__auto___60561 = arguments.length;
var i__47902__auto___60562 = (0);
while(true){
if((i__47902__auto___60562 < len__47901__auto___60561)){
args__47908__auto__.push((arguments[i__47902__auto___60562]));

var G__60563 = (i__47902__auto___60562 + (1));
i__47902__auto___60562 = G__60563;
continue;
} else {
}
break;
}

var argseq__47909__auto__ = ((((0) < args__47908__auto__.length))?(new cljs.core.IndexedSeq(args__47908__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(argseq__47909__auto__);
});

day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return clojure.string.join.call(null," ",args);
});

day8.re_frame_10x.utils.re_com.css_join.cljs$lang$maxFixedArity = (0);

day8.re_frame_10x.utils.re_com.css_join.cljs$lang$applyTo = (function (seq60560){
return day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60560));
});

day8.re_frame_10x.utils.re_com.re_com_css = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-flex",".display-flex",1723609359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-inline-flex",".display-inline-flex",485976066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);

//# sourceMappingURL=re_com.js.map
