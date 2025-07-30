"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5190],{

/***/ "../../packages/js/components/src/animation-slider/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


















function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */





/**
 * This component creates slideable content controlled by an animate prop to direct the contents to slide left or right.
 * All other props are passed to `CSSTransition`. More info at http://reactcommunity.org/react-transition-group/css-transition
 */

var AnimationSlider = /*#__PURE__*/function (_Component) {
  function AnimationSlider() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(this, AnimationSlider);
    _this = _callSuper(this, AnimationSlider);
    _this.state = {
      animate: null
    };
    _this.container = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_17__.createRef)();
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(AnimationSlider, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(AnimationSlider, [{
    key: "onExited",
    value: function onExited() {
      var onExited = this.props.onExited;
      if (onExited) {
        onExited(this.container.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _children = _this$props.children,
        animationKey = _this$props.animationKey,
        animate = _this$props.animate;
      var containerClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)('woocommerce-slide-animation', animate && "animate-".concat(animate));
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: containerClasses,
        ref: this.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, _objectSpread(_objectSpread({
            timeout: 200,
            classNames: "slide"
          }, this.props), {}, {
            onExited: this.onExited,
            children: function children(status) {
              return _children({
                status: status
              });
            }
          }), animationKey)
        })
      });
    }
  }]);
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_17__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationSlider);

/***/ }),

/***/ "../../packages/js/components/src/calendar/date-range.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ date_range)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/object/assign.js
var object_assign = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/object/assign.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/array/from.js
var from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/array/from.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dates@21.8.0_@babel+runtime@7.25.7_moment@2.29.4_react-dom@18.3.1_react@18.3.1__react-w_sx6zci33ioml2glwrm5nfakku4/node_modules/react-dates/index.js
var react_dates = __webpack_require__("../../node_modules/.pnpm/react-dates@21.8.0_@babel+runtime@7.25.7_moment@2.29.4_react-dom@18.3.1_react@18.3.1__react-w_sx6zci33ioml2glwrm5nfakku4/node_modules/react-dates/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js
var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js + 7 modules
var viewport_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js");
// EXTERNAL MODULE: ../../packages/js/date/src/index.ts
var src = __webpack_require__("../../packages/js/date/src/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dates@21.8.0_@babel+runtime@7.25.7_moment@2.29.4_react-dom@18.3.1_react@18.3.1__react-w_sx6zci33ioml2glwrm5nfakku4/node_modules/react-dates/initialize.js
var initialize = __webpack_require__("../../node_modules/.pnpm/react-dates@21.8.0_@babel+runtime@7.25.7_moment@2.29.4_react-dom@18.3.1_react@18.3.1__react-w_sx6zci33ioml2glwrm5nfakku4/node_modules/react-dates/initialize.js");
// EXTERNAL MODULE: ../../packages/js/components/src/calendar/input.js
var input = __webpack_require__("../../packages/js/components/src/calendar/input.js");
;// ../../packages/js/components/src/calendar/phrases.js
/**
 * External dependencies
 */

/* harmony default export */ const phrases = ({
  calendarLabel: (0,build_module.__)('Calendar', 'woocommerce'),
  closeDatePicker: (0,build_module.__)('Close', 'woocommerce'),
  focusStartDate: (0,build_module.__)('Interact with the calendar and select start and end dates.', 'woocommerce'),
  clearDate: (0,build_module.__)('Clear Date', 'woocommerce'),
  clearDates: (0,build_module.__)('Clear Dates', 'woocommerce'),
  jumpToPrevMonth: (0,build_module.__)('Move backward to switch to the previous month.', 'woocommerce'),
  jumpToNextMonth: (0,build_module.__)('Move forward to switch to the next month.', 'woocommerce'),
  enterKey: (0,build_module.__)('Enter key', 'woocommerce'),
  leftArrowRightArrow: (0,build_module.__)('Right and left arrow keys', 'woocommerce'),
  upArrowDownArrow: (0,build_module.__)('up and down arrow keys', 'woocommerce'),
  pageUpPageDown: (0,build_module.__)('page up and page down keys', 'woocommerce'),
  homeEnd: (0,build_module.__)('Home and end keys', 'woocommerce'),
  escape: (0,build_module.__)('Escape key', 'woocommerce'),
  questionMark: (0,build_module.__)('Question mark', 'woocommerce'),
  selectFocusedDate: (0,build_module.__)('Select the date in focus.', 'woocommerce'),
  moveFocusByOneDay: (0,build_module.__)('Move backward (left) and forward (right) by one day.', 'woocommerce'),
  moveFocusByOneWeek: (0,build_module.__)('Move backward (up) and forward (down) by one week.', 'woocommerce'),
  moveFocusByOneMonth: (0,build_module.__)('Switch months.', 'woocommerce'),
  moveFocustoStartAndEndOfWeek: (0,build_module.__)('Go to the first or last day of a week.', 'woocommerce'),
  returnFocusToInput: (0,build_module.__)('Return to the date input field.', 'woocommerce'),
  keyboardNavigationInstructions: (0,build_module.__)('Press the down arrow key to interact with the calendar and select a date.', 'woocommerce'),
  chooseAvailableStartDate: function chooseAvailableStartDate(_ref) {
    var date = _ref.date;
    return /* translators: %s: start date */(0,build_module/* sprintf */.nv)((0,build_module.__)('Select %s as a start date.', 'woocommerce'), date);
  },
  chooseAvailableEndDate: function chooseAvailableEndDate(_ref2) {
    var date = _ref2.date;
    return /* translators: %s: end date */(0,build_module/* sprintf */.nv)((0,build_module.__)('Select %s as an end date.', 'woocommerce'), date);
  },
  chooseAvailableDate: function chooseAvailableDate(_ref3) {
    var date = _ref3.date;
    return date;
  },
  dateIsUnavailable: function dateIsUnavailable(_ref4) {
    var date = _ref4.date;
    return /* translators: %s: unavailable date which was selected */(0,build_module/* sprintf */.nv)((0,build_module.__)('%s is not selectable.', 'woocommerce'), date);
  },
  dateIsSelected: function dateIsSelected(_ref5) {
    var date = _ref5.date;
    return /* translators: %s: selected date successfully */(0,build_module/* sprintf */.nv)((0,build_module.__)('Selected. %s', 'woocommerce'), date);
  }
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/calendar/date-range.js








function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */












// ^^ The above: Turn on react-dates classes/styles, see https://github.com/airbnb/react-dates#initialize.

/**
 * Internal dependencies
 */



var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};
// Blur event sources
var CONTAINER_DIV = 'container';
var NEXT_MONTH_CLICK = 'onNextMonthClick';
var PREV_MONTH_CLICK = 'onPrevMonthClick';

/**
 * This is wrapper for a [react-dates](https://github.com/airbnb/react-dates) powered calendar.
 */
var DateRange = /*#__PURE__*/function (_Component) {
  function DateRange(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, DateRange);
    _this = _callSuper(this, DateRange, [props]);
    _this.onDatesChange = _this.onDatesChange.bind(_this);
    _this.onFocusChange = _this.onFocusChange.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.nodeRef = (0,react.createRef)();
    _this.keepFocusInside = _this.keepFocusInside.bind(_this);
    return _this;
  }

  /*
   * Todo: We should remove this function when possible.
   * It is kept because focus is lost when we click on the previous and next
   * month buttons or clicking on a date in the calendar.
   * This focus loss closes the date picker popover.
   * Ideally we should add an upstream commit on react-dates to fix this issue.
   *
   * See: https://github.com/WordPress/gutenberg/pull/17201.
   */
  (0,inherits/* default */.A)(DateRange, _Component);
  return (0,createClass/* default */.A)(DateRange, [{
    key: "keepFocusInside",
    value: function keepFocusInside(blurSource, e) {
      if (!this.nodeRef.current) {
        return;
      }
      var losesFocusTo = this.props.losesFocusTo;

      // Blur triggered internal to the DayPicker component.
      if (CONTAINER_DIV === blurSource && e.target && (e.target.classList.contains('DayPickerNavigation_button') || e.target.classList.contains('CalendarDay')) && (
      // Allow other DayPicker elements to take focus.
      !e.relatedTarget || !e.relatedTarget.classList.contains('DayPickerNavigation_button') && !e.relatedTarget.classList.contains('CalendarDay'))) {
        // Allow other DayPicker elements to take focus.
        if (e.relatedTarget && (e.relatedTarget.classList.contains('DayPickerNavigation_button') || e.relatedTarget.classList.contains('CalendarDay'))) {
          return;
        }

        // Allow elements inside a specified ref to take focus.
        if (e.relatedTarget && losesFocusTo && losesFocusTo.contains(e.relatedTarget)) {
          return;
        }

        // DayPickerNavigation or CalendarDay mouseUp() is blurring,
        // so switch focus to the DayPicker's focus region.
        var focusRegion = this.nodeRef.current.querySelector('.DayPicker_focusRegion');
        if (focusRegion) {
          focusRegion.focus();
        }
        return;
      }

      // Blur triggered after next/prev click callback props.
      if (PREV_MONTH_CLICK === blurSource || NEXT_MONTH_CLICK === blurSource) {
        // DayPicker's updateStateAfterMonthTransition() is about to blur
        // the activeElement, so focus a DayPickerNavigation button so the next
        // blur event gets fixed by the above logic path.
        var _focusRegion = this.nodeRef.current.querySelector('.DayPickerNavigation_button');
        if (_focusRegion) {
          _focusRegion.focus();
        }
      }
    }
  }, {
    key: "onDatesChange",
    value: function onDatesChange(_ref) {
      var startDate = _ref.startDate,
        endDate = _ref.endDate;
      var _this$props = this.props,
        onUpdate = _this$props.onUpdate,
        shortDateFormat = _this$props.shortDateFormat;
      onUpdate({
        after: startDate,
        before: endDate,
        afterText: startDate ? startDate.format(shortDateFormat) : '',
        beforeText: endDate ? endDate.format(shortDateFormat) : '',
        afterError: null,
        beforeError: null
      });
    }
  }, {
    key: "onFocusChange",
    value: function onFocusChange(focusedInput) {
      this.props.onUpdate({
        focusedInput: !focusedInput ? 'startDate' : focusedInput
      });
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(input, event) {
      var value = event.target.value;
      var _this$props2 = this.props,
        after = _this$props2.after,
        before = _this$props2.before,
        shortDateFormat = _this$props2.shortDateFormat;
      var _validateDateInputFor = (0,src/* validateDateInputForRange */.t_)(input, value, before, after, shortDateFormat),
        date = _validateDateInputFor.date,
        error = _validateDateInputFor.error;
      this.props.onUpdate((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, input, date), input + 'Text', value), input + 'Error', value.length > 0 ? error : null));
    }
  }, {
    key: "setTnitialVisibleMonth",
    value: function setTnitialVisibleMonth(isDoubleCalendar, before) {
      return function () {
        var visibleDate = before || moment_default()();
        if (isDoubleCalendar) {
          return visibleDate.clone().subtract(1, 'month');
        }
        return visibleDate;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        after = _this$props3.after,
        before = _this$props3.before,
        focusedInput = _this$props3.focusedInput,
        afterText = _this$props3.afterText,
        beforeText = _this$props3.beforeText,
        afterError = _this$props3.afterError,
        beforeError = _this$props3.beforeError,
        shortDateFormat = _this$props3.shortDateFormat,
        isViewportMobile = _this$props3.isViewportMobile,
        isViewportSmall = _this$props3.isViewportSmall,
        isInvalidDate = _this$props3.isInvalidDate;
      var isDoubleCalendar = isViewportMobile && !isViewportSmall;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('woocommerce-calendar', {
          'is-mobile': isViewportMobile
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "woocommerce-calendar__inputs",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A, {
            value: afterText,
            onChange: (0,lodash.partial)(this.onInputChange, 'after'),
            dateFormat: shortDateFormat,
            label: (0,build_module.__)('Start Date', 'woocommerce'),
            error: afterError,
            describedBy: (0,build_module/* sprintf */.nv)(/* translators: %s: date format specification */
            (0,build_module.__)("Date input describing a selected date range's start date in format %s", 'woocommerce'), shortDateFormat),
            onFocus: function onFocus() {
              return _this2.onFocusChange('startDate');
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "woocommerce-calendar__inputs-to",
            children: (0,build_module.__)('to', 'woocommerce')
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A, {
            value: beforeText,
            onChange: (0,lodash.partial)(this.onInputChange, 'before'),
            dateFormat: shortDateFormat,
            label: (0,build_module.__)('End Date', 'woocommerce'),
            error: beforeError,
            describedBy: (0,build_module/* sprintf */.nv)(/* translators: %s: date format specification */
            (0,build_module.__)("Date input describing a selected date range's end date in format %s", 'woocommerce'), shortDateFormat),
            onFocus: function onFocus() {
              return _this2.onFocusChange('endDate');
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-calendar__react-dates",
          ref: this.nodeRef,
          onBlur: (0,lodash.partial)(this.keepFocusInside, CONTAINER_DIV),
          tabIndex: -1,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_dates.DayPickerRangeController, {
            onNextMonthClick: (0,lodash.partial)(this.keepFocusInside, NEXT_MONTH_CLICK),
            onPrevMonthClick: (0,lodash.partial)(this.keepFocusInside, PREV_MONTH_CLICK),
            onDatesChange: this.onDatesChange,
            onFocusChange: this.onFocusChange,
            focusedInput: focusedInput,
            startDate: after,
            endDate: before,
            orientation: 'horizontal',
            numberOfMonths: isDoubleCalendar ? 2 : 1,
            isOutsideRange: function isOutsideRange(date) {
              return isInvalidDate && isInvalidDate(date.toDate());
            },
            minimumNights: 0,
            hideKeyboardShortcutsPanel: true,
            noBorder: true,
            isRTL: isRTL(),
            initialVisibleMonth: this.setTnitialVisibleMonth(isDoubleCalendar, before),
            phrases: phrases
          })
        })]
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const date_range = ((0,viewport_build_module/* withViewportMatch */.uE)({
  isViewportMobile: '< medium',
  isViewportSmall: '< small'
})(DateRange));

/***/ }),

/***/ "../../packages/js/components/src/compare-filter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ CompareFilter)
});

// UNUSED EXPORTS: CompareButton

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.sort.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js + 6 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-header/component.js + 1 modules
var card_header_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-header/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-body/component.js + 4 modules
var card_body_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-body/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js + 1 modules
var card_footer_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../packages/js/navigation/src/index.js + 3 modules
var src = __webpack_require__("../../packages/js/navigation/src/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js + 5 modules
var tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/compare-filter/button.js
/**
 * External dependencies
 */





/**
 * A button used when comparing items, if `count` is less than 2 a hoverable tooltip is added with `helpText`.
 *
 * @param {Object}   props
 * @param {string}   props.className
 * @param {number}   props.count
 * @param {Node}     props.children
 * @param {boolean}  props.disabled
 * @param {string}   props.helpText
 * @param {Function} props.onClick
 * @return {Object} -
 */

var CompareButton = function CompareButton(_ref) {
  var className = _ref.className,
    count = _ref.count,
    children = _ref.children,
    disabled = _ref.disabled,
    helpText = _ref.helpText,
    onClick = _ref.onClick;
  return !disabled && count < 2 ? /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
    text: helpText,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: className,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "woocommerce-compare-button",
        disabled: true,
        isSecondary: true,
        children: children
      })
    })
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
    className: (0,clsx/* default */.A)('woocommerce-compare-button', className),
    onClick: onClick,
    disabled: disabled,
    isSecondary: true,
    children: children
  });
};
/* harmony default export */ const compare_filter_button = (CompareButton);
// EXTERNAL MODULE: ../../packages/js/components/src/search/index.tsx
var search = __webpack_require__("../../packages/js/components/src/search/index.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental.js
var experimental = __webpack_require__("../../packages/js/components/src/experimental.js");
;// ../../packages/js/components/src/compare-filter/index.js











function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






/**
 * Displays a card + search used to filter results as a comparison between objects.
 */
var CompareFilter = /*#__PURE__*/function (_Component) {
  function CompareFilter(_ref) {
    var _this;
    var getLabels = _ref.getLabels,
      param = _ref.param,
      query = _ref.query;
    (0,classCallCheck/* default */.A)(this, CompareFilter);
    _this = _callSuper(this, CompareFilter, arguments);
    _this.state = {
      selected: []
    };
    _this.clearQuery = _this.clearQuery.bind(_this);
    _this.updateQuery = _this.updateQuery.bind(_this);
    _this.updateLabels = _this.updateLabels.bind(_this);
    _this.onButtonClicked = _this.onButtonClicked.bind(_this);
    if (query[param]) {
      getLabels(query[param], query).then(_this.updateLabels);
    }
    return _this;
  }
  (0,inherits/* default */.A)(CompareFilter, _Component);
  return (0,createClass/* default */.A)(CompareFilter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2, _ref3) {
      var prevParam = _ref2.param,
        prevQuery = _ref2.query;
      var prevSelected = _ref3.selected;
      var _this$props = this.props,
        getLabels = _this$props.getLabels,
        param = _this$props.param,
        query = _this$props.query;
      var selected = this.state.selected;
      if (prevParam !== param || prevSelected.length > 0 && selected.length === 0) {
        this.clearQuery();
        return;
      }
      var prevIds = (0,src/* getIdsFromQuery */.DF)(prevQuery[param]);
      var currentIds = (0,src/* getIdsFromQuery */.DF)(query[param]);
      if (!(0,lodash.isEqual)(prevIds.sort(), currentIds.sort())) {
        getLabels(query[param], query).then(this.updateLabels);
      }
    }
  }, {
    key: "clearQuery",
    value: function clearQuery() {
      var _this$props2 = this.props,
        param = _this$props2.param,
        path = _this$props2.path,
        query = _this$props2.query;
      this.setState({
        selected: []
      });
      (0,src/* updateQueryString */.Ze)((0,defineProperty/* default */.A)({}, param, undefined), path, query);
    }
  }, {
    key: "updateLabels",
    value: function updateLabels(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "updateQuery",
    value: function updateQuery() {
      var _this$props3 = this.props,
        param = _this$props3.param,
        path = _this$props3.path,
        query = _this$props3.query;
      var selected = this.state.selected;
      var idList = selected.map(function (p) {
        return p.key;
      });
      (0,src/* updateQueryString */.Ze)((0,defineProperty/* default */.A)({}, param, idList.join(',')), path, query);
    }
  }, {
    key: "onButtonClicked",
    value: function onButtonClicked(e) {
      this.updateQuery(e);
      if ((0,lodash.isFunction)(this.props.onClick)) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        labels = _this$props4.labels,
        type = _this$props4.type,
        autocompleter = _this$props4.autocompleter;
      var selected = this.state.selected;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
        className: "woocommerce-filters__compare",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(card_header_component/* default */.A, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental/* Text */.E, {
            variant: "subtitle.small",
            weight: "600",
            size: "14",
            lineHeight: "20px",
            children: labels.title
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(card_body_component/* default */.A, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A, {
            autocompleter: autocompleter,
            type: type,
            selected: selected,
            placeholder: labels.placeholder,
            onChange: function onChange(value) {
              _this2.setState({
                selected: value
              });
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card_footer_component/* default */.A, {
          justify: "flex-start",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(compare_filter_button, {
            count: selected.length,
            helpText: labels.helpText,
            onClick: this.onButtonClicked,
            children: labels.update
          }), selected.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            isLink: true,
            onClick: this.clearQuery,
            children: (0,build_module.__)('Clear all', 'woocommerce')
          })]
        })]
      });
    }
  }]);
}(react.Component);
CompareFilter.defaultProps = {
  labels: {},
  query: {}
};

/***/ }),

/***/ "../../packages/js/components/src/date-range-filter-picker/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ date_range_filter_picker)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js + 7 modules
var viewport_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tab-panel/index.js
var tab_panel = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tab-panel/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js
var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ../../packages/js/date/src/index.ts
var src = __webpack_require__("../../packages/js/date/src/index.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/segmented-selection/index.js
var segmented_selection = __webpack_require__("../../packages/js/components/src/segmented-selection/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/date-range-filter-picker/compare-periods.js






function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


var ComparePeriods = /*#__PURE__*/function (_Component) {
  function ComparePeriods() {
    (0,classCallCheck/* default */.A)(this, ComparePeriods);
    return _callSuper(this, ComparePeriods, arguments);
  }
  (0,inherits/* default */.A)(ComparePeriods, _Component);
  return (0,createClass/* default */.A)(ComparePeriods, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onSelect = _this$props.onSelect,
        compare = _this$props.compare;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(segmented_selection/* default */.A, {
        options: src/* periods */.RE,
        selected: compare,
        onSelect: onSelect,
        name: "compare",
        legend: (0,build_module.__)('compare to', 'woocommerce')
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const compare_periods = (ComparePeriods);
// EXTERNAL MODULE: ../../packages/js/components/src/calendar/date-range.js + 1 modules
var date_range = __webpack_require__("../../packages/js/components/src/calendar/date-range.js");
// EXTERNAL MODULE: ../../packages/js/components/src/section/header.tsx
var header = __webpack_require__("../../packages/js/components/src/section/header.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/section/section.tsx
var section = __webpack_require__("../../packages/js/components/src/section/section.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../../packages/js/components/src/date-range-filter-picker/preset-periods.js






function preset_periods_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, preset_periods_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function preset_periods_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (preset_periods_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


var PresetPeriods = /*#__PURE__*/function (_Component) {
  function PresetPeriods() {
    (0,classCallCheck/* default */.A)(this, PresetPeriods);
    return preset_periods_callSuper(this, PresetPeriods, arguments);
  }
  (0,inherits/* default */.A)(PresetPeriods, _Component);
  return (0,createClass/* default */.A)(PresetPeriods, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onSelect = _this$props.onSelect,
        period = _this$props.period;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(segmented_selection/* default */.A, {
        options: (0,lodash.filter)(src/* presetValues */.Ad, function (preset) {
          return preset.value !== 'custom';
        }),
        selected: period,
        onSelect: onSelect,
        name: "period",
        legend: (0,build_module.__)('select a preset period', 'woocommerce')
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const preset_periods = (PresetPeriods);
;// ../../packages/js/components/src/date-range-filter-picker/content.js








function content_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, content_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function content_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (content_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var DatePickerContent = /*#__PURE__*/function (_Component) {
  function DatePickerContent() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DatePickerContent);
    _this = content_callSuper(this, DatePickerContent);
    _this.onTabSelect = _this.onTabSelect.bind(_this);
    _this.controlsRef = (0,react.createRef)();
    return _this;
  }
  (0,inherits/* default */.A)(DatePickerContent, _Component);
  return (0,createClass/* default */.A)(DatePickerContent, [{
    key: "onTabSelect",
    value: function onTabSelect(tab) {
      var _this$props = this.props,
        onUpdate = _this$props.onUpdate,
        period = _this$props.period;

      /**
       * If the period is `custom` and the user switches tabs to view the presets,
       * then a preset should be selected. This logic selects the default, otherwise
       * `custom` value for period will result in no selection.
       */
      if (tab === 'period' && period === 'custom') {
        onUpdate({
          period: 'today'
        });
      }
    }
  }, {
    key: "isFutureDate",
    value: function isFutureDate(dateString) {
      return moment_default()().isBefore(moment_default()(dateString), 'day');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        period = _this$props2.period,
        compare = _this$props2.compare,
        after = _this$props2.after,
        before = _this$props2.before,
        onUpdate = _this$props2.onUpdate,
        onClose = _this$props2.onClose,
        onSelect = _this$props2.onSelect,
        isValidSelection = _this$props2.isValidSelection,
        resetCustomValues = _this$props2.resetCustomValues,
        focusedInput = _this$props2.focusedInput,
        afterText = _this$props2.afterText,
        beforeText = _this$props2.beforeText,
        afterError = _this$props2.afterError,
        beforeError = _this$props2.beforeError,
        shortDateFormat = _this$props2.shortDateFormat;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
          className: "screen-reader-text",
          tabIndex: "0",
          children: (0,build_module.__)('Select date range and comparison', 'woocommerce')
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(section/* Section */.w, {
          component: false,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
            className: "woocommerce-filters-date__text",
            children: (0,build_module.__)('select a date range', 'woocommerce')
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tab_panel/* default */.A, {
            tabs: [{
              name: 'period',
              title: (0,build_module.__)('Presets', 'woocommerce'),
              className: 'woocommerce-filters-date__tab'
            }, {
              name: 'custom',
              title: (0,build_module.__)('Custom', 'woocommerce'),
              className: 'woocommerce-filters-date__tab'
            }],
            className: "woocommerce-filters-date__tabs",
            activeClass: "is-active",
            initialTabName: period === 'custom' ? 'custom' : 'period',
            onSelect: this.onTabSelect,
            children: function children(selected) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [selected.name === 'period' && /*#__PURE__*/(0,jsx_runtime.jsx)(preset_periods, {
                  onSelect: onUpdate,
                  period: period
                }), selected.name === 'custom' && /*#__PURE__*/(0,jsx_runtime.jsx)(date_range/* default */.A, {
                  after: after,
                  before: before,
                  onUpdate: onUpdate,
                  isInvalidDate: _this2.isFutureDate,
                  focusedInput: focusedInput,
                  afterText: afterText,
                  beforeText: beforeText,
                  afterError: afterError,
                  beforeError: beforeError,
                  shortDateFormat: shortDateFormat,
                  losesFocusTo: _this2.controlsRef.current
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: (0,clsx/* default */.A)('woocommerce-filters-date__content-controls', {
                    'is-custom': selected.name === 'custom'
                  }),
                  ref: _this2.controlsRef,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
                    className: "woocommerce-filters-date__text",
                    children: (0,build_module.__)('compare to', 'woocommerce')
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(compare_periods, {
                    onSelect: onUpdate,
                    compare: compare
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "woocommerce-filters-date__button-group",
                    children: [selected.name === 'custom' && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      isSecondary: true,
                      onClick: resetCustomValues,
                      disabled: !(after || before),
                      children: (0,build_module.__)('Reset', 'woocommerce')
                    }), isValidSelection(selected.name) ? /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      onClick: onSelect(selected.name, onClose),
                      isPrimary: true,
                      children: (0,build_module.__)('Update', 'woocommerce')
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      isPrimary: true,
                      disabled: true,
                      children: (0,build_module.__)('Update', 'woocommerce')
                    })]
                  })]
                })]
              });
            }
          })]
        })]
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const content = (DatePickerContent);
// EXTERNAL MODULE: ../../packages/js/components/src/dropdown-button/index.js
var dropdown_button = __webpack_require__("../../packages/js/components/src/dropdown-button/index.js");
;// ../../packages/js/components/src/date-range-filter-picker/index.js








function date_range_filter_picker_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, date_range_filter_picker_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function date_range_filter_picker_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (date_range_filter_picker_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var shortDateFormat = (0,build_module.__)('MM/DD/YYYY', 'woocommerce');

/**
 * Select a range of dates or single dates.
 */
var DateRangeFilterPicker = /*#__PURE__*/function (_Component) {
  function DateRangeFilterPicker(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, DateRangeFilterPicker);
    _this = date_range_filter_picker_callSuper(this, DateRangeFilterPicker, [props]);
    _this.state = _this.getResetState();
    _this.update = _this.update.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.isValidSelection = _this.isValidSelection.bind(_this);
    _this.resetCustomValues = _this.resetCustomValues.bind(_this);
    return _this;
  }
  (0,inherits/* default */.A)(DateRangeFilterPicker, _Component);
  return (0,createClass/* default */.A)(DateRangeFilterPicker, [{
    key: "formatDate",
    value: function formatDate(date, format) {
      if (date && date._isAMomentObject && typeof date.format === 'function') {
        return date.format(format);
      }
      return '';
    }
  }, {
    key: "getResetState",
    value: function getResetState() {
      var _this$props$dateQuery = this.props.dateQuery,
        period = _this$props$dateQuery.period,
        compare = _this$props$dateQuery.compare,
        before = _this$props$dateQuery.before,
        after = _this$props$dateQuery.after;
      return {
        period: period,
        compare: compare,
        before: before,
        after: after,
        focusedInput: 'startDate',
        afterText: this.formatDate(after, shortDateFormat),
        beforeText: this.formatDate(before, shortDateFormat),
        afterError: null,
        beforeError: null
      };
    }
  }, {
    key: "update",
    value: function update(_update) {
      this.setState(_update);
    }
  }, {
    key: "onSelect",
    value: function onSelect(selectedTab, onClose) {
      var _this2 = this;
      var _this$props = this.props,
        isoDateFormat = _this$props.isoDateFormat,
        onRangeSelect = _this$props.onRangeSelect;
      return function (event) {
        var _this2$state = _this2.state,
          period = _this2$state.period,
          compare = _this2$state.compare,
          after = _this2$state.after,
          before = _this2$state.before;
        var data = {
          period: selectedTab === 'custom' ? 'custom' : period,
          compare: compare
        };
        if (selectedTab === 'custom') {
          data.after = _this2.formatDate(after, isoDateFormat);
          data.before = _this2.formatDate(before, isoDateFormat);
        } else {
          data.after = undefined;
          data.before = undefined;
        }
        onRangeSelect(data);
        onClose(event);
      };
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel() {
      var _this$props$dateQuery2 = this.props.dateQuery,
        primaryDate = _this$props$dateQuery2.primaryDate,
        secondaryDate = _this$props$dateQuery2.secondaryDate;
      return ["".concat(primaryDate.label, " (").concat(primaryDate.range, ")"), "".concat((0,build_module.__)('vs.', 'woocommerce'), " ").concat(secondaryDate.label, " (").concat(secondaryDate.range, ")")];
    }
  }, {
    key: "isValidSelection",
    value: function isValidSelection(selectedTab) {
      var _this$state = this.state,
        compare = _this$state.compare,
        after = _this$state.after,
        before = _this$state.before;
      if (selectedTab === 'custom') {
        return compare && after && before;
      }
      return true;
    }
  }, {
    key: "resetCustomValues",
    value: function resetCustomValues() {
      this.setState({
        after: null,
        before: null,
        focusedInput: 'startDate',
        afterText: '',
        beforeText: '',
        afterError: null,
        beforeError: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        period = _this$state2.period,
        compare = _this$state2.compare,
        after = _this$state2.after,
        before = _this$state2.before,
        focusedInput = _this$state2.focusedInput,
        afterText = _this$state2.afterText,
        beforeText = _this$state2.beforeText,
        afterError = _this$state2.afterError,
        beforeError = _this$state2.beforeError;
      var _this$props2 = this.props,
        isViewportMobile = _this$props2.isViewportMobile,
        _this$props2$focusOnM = _this$props2.focusOnMount,
        focusOnMount = _this$props2$focusOnM === void 0 ? true : _this$props2$focusOnM,
        _this$props2$popoverP = _this$props2.popoverProps,
        popoverProps = _this$props2$popoverP === void 0 ? {
          inline: true
        } : _this$props2$popoverP;
      if (!popoverProps.placement) {
        popoverProps.placement = 'bottom';
      }
      var contentClasses = (0,clsx/* default */.A)('woocommerce-filters-date__content', {
        'is-mobile': isViewportMobile
      });
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "woocommerce-filters-filter",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "woocommerce-filters-label",
          children: [(0,build_module.__)('Date range', 'woocommerce'), ":"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
          contentClassName: contentClasses,
          expandOnMobile: true,
          focusOnMount: focusOnMount,
          popoverProps: popoverProps,
          renderToggle: function renderToggle(_ref) {
            var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown_button/* default */.A, {
              onClick: onToggle,
              isOpen: isOpen,
              labels: _this3.getButtonLabel()
            });
          },
          renderContent: function renderContent(_ref2) {
            var onClose = _ref2.onClose;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(content, {
              period: period,
              compare: compare,
              after: after,
              before: before,
              onUpdate: _this3.update,
              onClose: onClose,
              onSelect: _this3.onSelect,
              isValidSelection: _this3.isValidSelection,
              resetCustomValues: _this3.resetCustomValues,
              focusedInput: focusedInput,
              afterText: afterText,
              beforeText: beforeText,
              afterError: afterError,
              beforeError: beforeError,
              shortDateFormat: shortDateFormat
            });
          }
        })]
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const date_range_filter_picker = ((0,viewport_build_module/* withViewportMatch */.uE)({
  isViewportMobile: '< medium'
})(DateRangeFilterPicker));

/***/ }),

/***/ "../../packages/js/components/src/dropdown-button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


var _excluded = ["labels", "isOpen"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}











/**
 * External dependencies
 */






/**
 * A button useful for a launcher of a dropdown component. The button is 100% width of its container and displays
 * single or multiple lines rendered as `<span/>` elements.
 *
 * @param {Object} props Props passed to component.
 * @return {Object} -
 */

var DropdownButton = function DropdownButton(props) {
  var labels = props.labels,
    isOpen = props.isOpen,
    otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(props, _excluded);
  var buttonClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)('woocommerce-dropdown-button', {
    'is-open': isOpen,
    'is-multi-line': labels.length > 1
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, _objectSpread(_objectSpread({
    className: buttonClasses,
    "aria-expanded": isOpen
  }, otherProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "woocommerce-dropdown-button__labels",
      children: labels.map(function (label, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
          children: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__/* .decodeEntities */ .S)(label)
        }, i);
      })
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButton);

/***/ }),

/***/ "../../packages/js/components/src/filter-picker/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DEFAULT_FILTER */
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../packages/js/navigation/src/index.js");
/* harmony import */ var _animation_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("../../packages/js/components/src/animation-slider/index.js");
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("../../packages/js/components/src/dropdown-button/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../../packages/js/components/src/search/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");















function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}










function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




var DEFAULT_FILTER = 'all';

/**
 * Modify a url query parameter via a dropdown selection of configurable options.
 * This component manipulates the `filter` query parameter.
 */
var FilterPicker = /*#__PURE__*/function (_Component) {
  function FilterPicker(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A)(this, FilterPicker);
    _this = _callSuper(this, FilterPicker, [props]);
    var selectedFilter = _this.getFilter();
    _this.state = {
      nav: selectedFilter.path || [],
      animate: null,
      selectedTag: null
    };
    _this.selectSubFilter = _this.selectSubFilter.bind(_this);
    _this.getVisibleFilters = _this.getVisibleFilters.bind(_this);
    _this.updateSelectedTag = _this.updateSelectedTag.bind(_this);
    _this.onTagChange = _this.onTagChange.bind(_this);
    _this.onContentMount = _this.onContentMount.bind(_this);
    _this.goBack = _this.goBack.bind(_this);
    if (selectedFilter.settings && selectedFilter.settings.getLabels) {
      var query = _this.props.query;
      var _selectedFilter$setti = selectedFilter.settings,
        filterParam = _selectedFilter$setti.param,
        getLabels = _selectedFilter$setti.getLabels;
      getLabels(query[filterParam], query).then(_this.updateSelectedTag);
    }
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(FilterPicker, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)(FilterPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevQuery = _ref.query;
      var _this$props = this.props,
        nextQuery = _this$props.query,
        config = _this$props.config;
      if (prevQuery[config.param] !== nextQuery[[config.param]]) {
        var selectedFilter = this.getFilter();
        if (selectedFilter && selectedFilter.component === 'Search') {
          /* eslint-disable react/no-did-update-set-state */
          this.setState({
            nav: selectedFilter.path || []
          });
          /* eslint-enable react/no-did-update-set-state */
          var _selectedFilter$setti2 = selectedFilter.settings,
            filterParam = _selectedFilter$setti2.param,
            getLabels = _selectedFilter$setti2.getLabels;
          getLabels(nextQuery[filterParam], nextQuery).then(this.updateSelectedTag);
        }
      }
    }
  }, {
    key: "updateSelectedTag",
    value: function updateSelectedTag(tags) {
      this.setState({
        selectedTag: tags[0]
      });
    }
  }, {
    key: "getFilter",
    value: function getFilter(value) {
      var _this$props2 = this.props,
        config = _this$props2.config,
        query = _this$props2.query;
      var allFilters = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_23__/* .flattenFilters */ .SI)(config.filters);
      value = value || query[config.param] || config.defaultValue || DEFAULT_FILTER;
      return (0,lodash__WEBPACK_IMPORTED_MODULE_22__.find)(allFilters, {
        value: value
      }) || {};
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel(selectedFilter) {
      if (selectedFilter.component === 'Search') {
        var selectedTag = this.state.selectedTag;
        return [selectedTag && selectedTag.label, (0,lodash__WEBPACK_IMPORTED_MODULE_22__.get)(selectedFilter, 'settings.labels.button')];
      }
      return selectedFilter ? [selectedFilter.label] : [];
    }
  }, {
    key: "getVisibleFilters",
    value: function getVisibleFilters(filters, nav) {
      if (nav.length === 0) {
        return filters;
      }
      var value = nav[0];
      var nextFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_22__.find)(filters, {
        value: value
      });
      return this.getVisibleFilters(nextFilters && nextFilters.subFilters, nav.slice(1));
    }
  }, {
    key: "selectSubFilter",
    value: function selectSubFilter(value) {
      // Add the value onto the nav path
      this.setState(function (prevState) {
        return {
          nav: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(prevState.nav), [value]),
          animate: 'left'
        };
      });
    }
  }, {
    key: "goBack",
    value: function goBack() {
      // Remove the last item from the nav path
      this.setState(function (prevState) {
        return {
          nav: prevState.nav.slice(0, -1),
          animate: 'right'
        };
      });
    }
  }, {
    key: "getAllFilterParams",
    value: function getAllFilterParams() {
      var config = this.props.config;
      var params = [];
      var _getParam = function getParam(filters) {
        filters.forEach(function (filter) {
          if (filter.settings && !params.includes(filter.settings.param)) {
            params.push(filter.settings.param);
          }
          if (filter.subFilters) {
            _getParam(filter.subFilters);
          }
        });
      };
      _getParam(config.filters);
      return params;
    }
  }, {
    key: "update",
    value: function update(value) {
      var additionalQueries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props3 = this.props,
        path = _this$props3.path,
        query = _this$props3.query,
        config = _this$props3.config,
        onFilterSelect = _this$props3.onFilterSelect,
        advancedFilters = _this$props3.advancedFilters;
      var update = _objectSpread((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, config.param, (config.defaultValue || DEFAULT_FILTER) === value ? undefined : value), additionalQueries);
      // Keep any url parameters as designated by the config
      config.staticParams.forEach(function (param) {
        update[param] = query[param];
      });

      // Remove all of this filter's params not associated with the update while
      // leaving any other params from any other filter an extension may have added.
      this.getAllFilterParams().forEach(function (param) {
        if (!update[param]) {
          // Explicitly give value of undefined so it can be removed from the query.
          update[param] = undefined;
        }
      });

      // If the main filter is being set to anything but advanced, remove any advancedFilters.
      if (config.param === 'filter' && value !== 'advanced') {
        var resetAdvancedFilters = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_23__/* .getQueryFromActiveFilters */ .Sz)([], query, advancedFilters.filters || {});
        update = _objectSpread(_objectSpread({}, update), resetAdvancedFilters);
      }
      (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_23__/* .updateQueryString */ .Ze)(update, path, query);
      onFilterSelect(update);
    }
  }, {
    key: "onTagChange",
    value: function onTagChange(filter, onClose, config, tags) {
      var tag = (0,lodash__WEBPACK_IMPORTED_MODULE_22__.last)(tags);
      var value = filter.value,
        settings = filter.settings;
      var filterParam = settings.param;
      if (tag) {
        this.update(value, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, filterParam, tag.key));
        onClose();
      } else {
        this.update(config.defaultValue || DEFAULT_FILTER);
      }
      this.updateSelectedTag([tag]);
    }
  }, {
    key: "renderButton",
    value: function renderButton(filter, onClose, config) {
      var _this2 = this;
      if (filter.component) {
        var _filter$settings = filter.settings,
          type = _filter$settings.type,
          labels = _filter$settings.labels,
          autocompleter = _filter$settings.autocompleter;
        var persistedFilter = this.getFilter();
        var selectedTag = persistedFilter.value === filter.value ? this.state.selectedTag : null;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_search__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
          autocompleter: autocompleter,
          className: "woocommerce-filters-filter__search",
          type: type,
          placeholder: labels.placeholder,
          selected: selectedTag ? [selectedTag] : [],
          onChange: (0,lodash__WEBPACK_IMPORTED_MODULE_22__.partial)(this.onTagChange, filter, onClose, config),
          inlineTags: true,
          staticResults: true
        });
      }
      var selectFilter = function selectFilter(event) {
        onClose(event);
        _this2.update(filter.value, filter.query || {});
        _this2.setState({
          selectedTag: null
        });
      };
      var selectSubFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_22__.partial)(this.selectSubFilter, filter.value);
      var selectedFilter = this.getFilter();
      var buttonIsSelected = selectedFilter.value === filter.value || selectedFilter.path && (0,lodash__WEBPACK_IMPORTED_MODULE_22__.includes)(selectedFilter.path, filter.value);
      var onClick = function onClick(event) {
        if (buttonIsSelected) {
          // Don't navigate if the button is already selected.
          onClose(event);
          return;
        }
        if (filter.subFilters) {
          selectSubFilter(event);
          return;
        }
        selectFilter(event);
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Ay, {
        className: "woocommerce-filters-filter__button",
        onClick: onClick,
        children: filter.label
      });
    }
  }, {
    key: "onContentMount",
    value: function onContentMount(content) {
      var nav = this.state.nav;
      var parentFilter = nav.length ? this.getFilter(nav[nav.length - 1]) : false;
      var focusableIndex = parentFilter ? 1 : 0;
      var focusable = _wordpress_dom__WEBPACK_IMPORTED_MODULE_31__/* .focus */ .XC.tabbable.find(content)[focusableIndex];
      setTimeout(function () {
        focusable.focus();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var config = this.props.config;
      var _this$state = this.state,
        nav = _this$state.nav,
        animate = _this$state.animate;
      var visibleFilters = this.getVisibleFilters(config.filters, nav);
      var parentFilter = nav.length ? this.getFilter(nav[nav.length - 1]) : false;
      var selectedFilter = this.getFilter();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        className: "woocommerce-filters-filter",
        children: [config.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("span", {
          className: "woocommerce-filters-label",
          children: [config.label, ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, {
          contentClassName: "woocommerce-filters-filter__content",
          popoverProps: {
            placement: 'bottom'
          },
          expandOnMobile: true,
          headerTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_21__.__)('filter report to show:', 'woocommerce'),
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_dropdown_button__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, {
              onClick: onToggle,
              isOpen: isOpen,
              labels: _this3.getButtonLabel(selectedFilter)
            });
          },
          renderContent: function renderContent(_ref3) {
            var onClose = _ref3.onClose;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_animation_slider__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
              animationKey: nav,
              animate: animate,
              onExited: _this3.onContentMount,
              children: function children() {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("ul", {
                  className: "woocommerce-filters-filter__content-list",
                  children: [parentFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("li", {
                    className: "woocommerce-filters-filter__content-list-item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Ay, {
                      className: "woocommerce-filters-filter__button",
                      onClick: _this3.goBack,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
                        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A
                      }), parentFilter.label]
                    })
                  }), visibleFilters.map(function (filter) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx)("li", {
                      className: (0,clsx__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A)('woocommerce-filters-filter__content-list-item', {
                        'is-selected': selectedFilter.value === filter.value || selectedFilter.path && (0,lodash__WEBPACK_IMPORTED_MODULE_22__.includes)(selectedFilter.path, filter.value)
                      }),
                      children: _this3.renderButton(filter, onClose, config)
                    }, filter.value);
                  })]
                });
              }
            });
          }
        })]
      });
    }
  }]);
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_38__.Component);
FilterPicker.defaultProps = {
  query: {},
  onFilterSelect: function onFilterSelect() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPicker);

/***/ }),

/***/ "../../packages/js/components/src/segmented-selection/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");









function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */





/**
 * Create a panel of styled selectable options rendering stylized checkboxes and labels
 */

var SegmentedSelection = /*#__PURE__*/function (_Component) {
  function SegmentedSelection() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(this, SegmentedSelection);
    return _callSuper(this, SegmentedSelection, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(SegmentedSelection, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(SegmentedSelection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        options = _this$props.options,
        selected = _this$props.selected,
        onSelect = _this$props.onSelect,
        name = _this$props.name,
        legend = _this$props.legend;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("fieldset", {
        className: "woocommerce-segmented-selection",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("legend", {
          className: "screen-reader-text",
          children: legend
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(className, 'woocommerce-segmented-selection__container'),
          children: options.map(function (_ref) {
            var value = _ref.value,
              label = _ref.label;
            if (!value || !label) {
              return null;
            }
            var id = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.uniqueId)("".concat(value, "_"));
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "woocommerce-segmented-selection__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                className: "woocommerce-segmented-selection__input",
                type: "radio",
                name: name,
                id: id,
                checked: selected === value,
                onChange: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.partial)(onSelect, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)({}, name, value))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                htmlFor: id,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "woocommerce-segmented-selection__label",
                  children: label
                })
              })]
            }, value);
          })
        })]
      });
    }
  }]);
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SegmentedSelection);

/***/ }),

/***/ "../../packages/js/components/src/filters/stories/filters.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Examples: () => (/* binding */ Examples),
  "default": () => (/* binding */ filters_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../packages/js/components/src/section/header.tsx
var header = __webpack_require__("../../packages/js/components/src/section/header.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/section/section.tsx
var section = __webpack_require__("../../packages/js/components/src/section/section.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.index-of.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../packages/js/navigation/src/index.js + 3 modules
var src = __webpack_require__("../../packages/js/navigation/src/index.js");
// EXTERNAL MODULE: ../../packages/js/date/src/index.ts
var date_src = __webpack_require__("../../packages/js/date/src/index.ts");
// EXTERNAL MODULE: ../../packages/js/currency/src/index.ts + 3 modules
var currency_src = __webpack_require__("../../packages/js/currency/src/index.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/advanced-filters/index.js + 7 modules
var advanced_filters = __webpack_require__("../../packages/js/components/src/advanced-filters/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/compare-filter/index.js + 1 modules
var compare_filter = __webpack_require__("../../packages/js/components/src/compare-filter/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/date-range-filter-picker/index.js + 3 modules
var date_range_filter_picker = __webpack_require__("../../packages/js/components/src/date-range-filter-picker/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/filter-picker/index.js
var filter_picker = __webpack_require__("../../packages/js/components/src/filter-picker/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/filters/index.js

















function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}




function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






/**
 * Add a collection of report filters to a page. This uses `DatePicker` & `FilterPicker` for the "basic" filters, and `AdvancedFilters`
 * or a comparison card if "advanced" or "compare" are picked from `FilterPicker`.
 *
 * @return {Object} -
 */

var ReportFilters = /*#__PURE__*/function (_Component) {
  function ReportFilters() {
    var _this;
    (0,classCallCheck/* default */.A)(this, ReportFilters);
    _this = _callSuper(this, ReportFilters);
    _this.renderCard = _this.renderCard.bind(_this);
    _this.onRangeSelect = _this.onRangeSelect.bind(_this);
    return _this;
  }
  (0,inherits/* default */.A)(ReportFilters, _Component);
  return (0,createClass/* default */.A)(ReportFilters, [{
    key: "renderCard",
    value: function renderCard(config) {
      var _this$props = this.props,
        siteLocale = _this$props.siteLocale,
        advancedFilters = _this$props.advancedFilters,
        query = _this$props.query,
        path = _this$props.path,
        onAdvancedFilterAction = _this$props.onAdvancedFilterAction,
        currency = _this$props.currency;
      var filters = config.filters,
        param = config.param;
      if (!query[param]) {
        return null;
      }
      if (query[param].indexOf('compare') === 0) {
        var filter = (0,lodash.find)(filters, {
          value: query[param]
        });
        if (!filter) {
          return null;
        }
        var _filter$settings = filter.settings,
          settings = _filter$settings === void 0 ? {} : _filter$settings;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-filters__advanced-filters",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(compare_filter/* CompareFilter */.S, _objectSpread({
            path: path,
            query: query
          }, settings))
        }, param);
      }
      if (query[param] === 'advanced') {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-filters__advanced-filters",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(advanced_filters/* default */.A, {
            siteLocale: siteLocale,
            currency: currency,
            config: advancedFilters,
            path: path,
            query: query,
            onAdvancedFilterAction: onAdvancedFilterAction
          })
        }, param);
      }
    }
  }, {
    key: "onRangeSelect",
    value: function onRangeSelect(data) {
      var _this$props2 = this.props,
        query = _this$props2.query,
        path = _this$props2.path,
        onDateSelect = _this$props2.onDateSelect;
      (0,src/* updateQueryString */.Ze)(data, path, query);
      onDateSelect(data);
    }
  }, {
    key: "getDateQuery",
    value: function getDateQuery(query) {
      var _getDateParamsFromQue = (0,date_src/* getDateParamsFromQuery */.vW)(query),
        period = _getDateParamsFromQue.period,
        compare = _getDateParamsFromQue.compare,
        before = _getDateParamsFromQue.before,
        after = _getDateParamsFromQue.after;
      var _getCurrentDates = (0,date_src/* getCurrentDates */.lI)(query),
        primaryDate = _getCurrentDates.primary,
        secondaryDate = _getCurrentDates.secondary;
      return {
        period: period,
        compare: compare,
        before: before,
        after: after,
        primaryDate: primaryDate,
        secondaryDate: secondaryDate
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        dateQuery = _this$props3.dateQuery,
        filters = _this$props3.filters,
        query = _this$props3.query,
        path = _this$props3.path,
        showDatePicker = _this$props3.showDatePicker,
        onFilterSelect = _this$props3.onFilterSelect,
        isoDateFormat = _this$props3.isoDateFormat,
        advancedFilters = _this$props3.advancedFilters;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
          className: "screen-reader-text",
          children: (0,build_module.__)('Filters', 'woocommerce')
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(section/* Section */.w, {
          component: "div",
          className: "woocommerce-filters",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "woocommerce-filters__basic-filters",
            children: [showDatePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(date_range_filter_picker/* default */.A, {
              dateQuery: dateQuery || this.getDateQuery(query),
              onRangeSelect: this.onRangeSelect,
              isoDateFormat: isoDateFormat
            }, JSON.stringify(query)), filters.map(function (config) {
              if (config.showFilters(query)) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(filter_picker/* default */.A, {
                  config: config,
                  advancedFilters: advancedFilters,
                  query: query,
                  path: path,
                  onFilterSelect: onFilterSelect
                }, config.param);
              }
              return null;
            })]
          }), filters.map(this.renderCard)]
        })]
      });
    }
  }]);
}(react.Component);
ReportFilters.defaultProps = {
  siteLocale: 'en_US',
  advancedFilters: {
    title: '',
    filters: {}
  },
  filters: [],
  query: {},
  showDatePicker: true,
  onDateSelect: function onDateSelect() {},
  currency: (0,currency_src/* CurrencyFactory */.uU)().getCurrencyConfig()
};
/* harmony default export */ const filters = (ReportFilters);
;// ../../packages/js/components/src/filters/stories/filters.story.js

function filters_story_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function filters_story_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? filters_story_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : filters_story_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}












/**
 * External dependencies
 */




var ORDER_STATUSES = {
  cancelled: 'Cancelled',
  completed: 'Completed',
  failed: 'Failed',
  'on-hold': 'On hold',
  pending: 'Pending payment',
  processing: 'Processing',
  refunded: 'Refunded'
};
var CURRENCY = {
  code: 'USD',
  decimalSeparator: '.',
  precision: 2,
  priceFormat: '%1$s%2$s',
  symbol: '$',
  symbolPosition: 'left',
  thousandSeparator: ','
};

// Fetch store default date range and compose with date utility functions.
var defaultDateRange = 'period=month&compare=previous_year';
var storeGetDateParamsFromQuery = (0,lodash.partialRight)(date_src/* getDateParamsFromQuery */.vW, defaultDateRange);
var storeGetCurrentDates = (0,lodash.partialRight)(date_src/* getCurrentDates */.lI, defaultDateRange);

// Package date utilities for filter picker component.
var storeDate = {
  getDateParamsFromQuery: storeGetDateParamsFromQuery,
  getCurrentDates: storeGetCurrentDates,
  isoDateFormat: date_src/* isoDateFormat */.r3
};
var siteLocale = 'en_US';
var path = '';
var query = {};
var filters_story_filters = [{
  label: 'Show',
  staticParams: ['chart'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: 'All orders',
    value: 'all'
  }, {
    label: 'Advanced filters',
    value: 'advanced'
  }]
}];
var advancedFilters = {
  title: 'Orders Match <select/> Filters',
  filters: {
    status: {
      labels: {
        add: 'Order Status',
        remove: 'Remove order status filter',
        rule: 'Select an order status filter match',
        title: 'Order Status <rule/> <filter/>',
        filter: 'Select an order status'
      },
      rules: [{
        value: 'is',
        label: 'Is'
      }, {
        value: 'is_not',
        label: 'Is Not'
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(ORDER_STATUSES).map(function (key) {
          return {
            value: key,
            label: ORDER_STATUSES[key]
          };
        })
      }
    },
    product: {
      labels: {
        add: 'Products',
        placeholder: 'Search products',
        remove: 'Remove products filter',
        rule: 'Select a product filter match',
        title: 'Product <rule/> <filter/>',
        filter: 'Select products'
      },
      rules: [{
        value: 'includes',
        label: 'Includes'
      }, {
        value: 'excludes',
        label: 'Excludes'
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: function getLabels() {
          return Promise.resolve([]);
        }
      }
    },
    customer: {
      labels: {
        add: 'Customer type',
        remove: 'Remove customer filter',
        rule: 'Select a customer filter match',
        title: 'Customer is <filter/>',
        filter: 'Select a customer type'
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: 'New'
        }, {
          value: 'returning',
          label: 'Returning'
        }],
        defaultOption: 'new'
      }
    },
    quantity: {
      labels: {
        add: 'Item Quantity',
        remove: 'Remove item quantity filter',
        rule: 'Select an item quantity filter match',
        title: 'Item Quantity is <rule/> <filter/>'
      },
      rules: [{
        value: 'lessthan',
        label: 'Less Than'
      }, {
        value: 'morethan',
        label: 'More Than'
      }, {
        value: 'between',
        label: 'Between'
      }],
      input: {
        component: 'Number'
      }
    },
    subtotal: {
      labels: {
        add: 'Subtotal',
        remove: 'Remove subtotal filter',
        rule: 'Select a subtotal filter match',
        title: 'Subtotal is <rule/> <filter/>'
      },
      rules: [{
        value: 'lessthan',
        label: 'Less Than'
      }, {
        value: 'morethan',
        label: 'More Than'
      }, {
        value: 'between',
        label: 'Between'
      }],
      input: {
        component: 'Number',
        type: 'currency'
      }
    }
  }
};
var compareFilter = {
  type: 'products',
  param: 'product',
  getLabels: function getLabels() {
    return Promise.resolve([]);
  },
  labels: {
    helpText: 'Select at least two products to compare',
    placeholder: 'Search for products to compare',
    title: 'Compare Products',
    update: 'Compare'
  }
};
var Examples = function Examples() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
      children: "Date picker only"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(section/* Section */.w, {
      component: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(filters, {
        path: path,
        query: query,
        storeDate: storeDate
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
      children: "Date picker & more filters"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(section/* Section */.w, {
      component: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(filters, {
        filters: filters_story_filters,
        path: path,
        query: query,
        storeDate: storeDate
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
      children: "Advanced filters"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(section/* Section */.w, {
      component: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(advanced_filters/* default */.A, {
        siteLocale: siteLocale,
        path: path,
        query: query,
        filterTitle: "Orders",
        config: advancedFilters,
        currency: CURRENCY
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
      children: "Compare Filter"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(section/* Section */.w, {
      component: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(compare_filter/* CompareFilter */.S, filters_story_objectSpread({
        path: path,
        query: query
      }, compareFilter))
    })]
  });
};
/* harmony default export */ const filters_story = ({
  title: 'Components/ReportFilters',
  component: filters
});
Examples.parameters = {
  ...Examples.parameters,
  docs: {
    ...Examples.parameters?.docs,
    source: {
      originalSource: "() => <div>\n        <H>Date picker only</H>\n        <Section component={false}>\n            <ReportFilters path={path} query={query} storeDate={storeDate} />\n        </Section>\n\n        <H>Date picker & more filters</H>\n        <Section component={false}>\n            <ReportFilters filters={filters} path={path} query={query} storeDate={storeDate} />\n        </Section>\n\n        <H>Advanced filters</H>\n        <Section component={false}>\n            <AdvancedFilters siteLocale={siteLocale} path={path} query={query} filterTitle=\"Orders\" config={advancedFilters} currency={CURRENCY} />\n        </Section>\n\n        <H>Compare Filter</H>\n        <Section component={false}>\n            <CompareFilter path={path} query={query} {...compareFilter} />\n        </Section>\n    </div>",
      ...Examples.parameters?.docs?.source
    }
  }
};

/***/ })

}]);