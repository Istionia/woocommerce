(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9416],{

/***/ "../../packages/js/components/src/calendar/date-range.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../../packages/js/components/src/calendar/input.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/calendar.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */







var DateInput = function DateInput(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    onChange = _ref.onChange,
    dateFormat = _ref.dateFormat,
    label = _ref.label,
    describedBy = _ref.describedBy,
    error = _ref.error,
    _ref$onFocus = _ref.onFocus,
    onFocus = _ref$onFocus === void 0 ? function () {} : _ref$onFocus,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    _ref$onKeyDown = _ref.onKeyDown,
    onKeyDown = _ref$onKeyDown === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_0__.noop : _ref$onKeyDown,
    _ref$errorPosition = _ref.errorPosition,
    errorPosition = _ref$errorPosition === void 0 ? 'bottom center' : _ref$errorPosition;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('woocommerce-calendar__input', {
    'is-empty': value.length === 0,
    'is-error': error
  });
  var id = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)('_woo-dates-input');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: "text",
      className: "woocommerce-calendar__input-text",
      value: value,
      onChange: onChange,
      "aria-label": label,
      id: id,
      "aria-describedby": "".concat(id, "-message"),
      placeholder: dateFormat.toLowerCase(),
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      disabled: disabled
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {
      className: "woocommerce-calendar__input-error",
      focusOnMount: false,
      position: errorPosition,
      children: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
      className: "calendar-icon"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "screen-reader-text",
      id: "".concat(id, "-message"),
      children: error || describedBy
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateInput);

/***/ }),

/***/ "../../packages/js/components/src/date-range-filter-picker/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ "../../packages/js/components/src/segmented-selection/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../packages/js/components/src/section/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */


/**
 * Context container for heading level. We start at 2 because the `h1` is defined in <Header />
 *
 * See https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3
 */
var Level = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(2);

try {
    // @ts-ignore
    Context.displayName = "Context";
    // @ts-ignore
    Context.__docgenInfo = { "description": "Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}", "displayName": "Context", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/context.tsx#Context"] = { docgenInfo: Context.__docgenInfo, name: "Context", path: "../../packages/js/components/src/section/context.tsx#Context" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/section/header.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ H)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../packages/js/components/src/section/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");











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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(e, r, t[r]);
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
 * Internal dependencies
 */


/**
 * These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels
 * (`h2`, `h3`, …) you can use `<H />` to create "section headings", which look to the parent `<Section />`s for the appropriate
 * heading level.
 *
 * @type {HTMLElement}
 */

function H(props) {
  var level = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_12__.useContext)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$);
  var Heading = 'h' + Math.min(level, 6);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Heading, _objectSpread({}, props));
}
try {
    // @ts-ignore
    H.displayName = "H";
    // @ts-ignore
    H.__docgenInfo = { "description": "These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels\n(`h2`, `h3`, \u2026) you can use `<H />` to create \"section headings\", which look to the parent `<Section />`s for the appropriate\nheading level.", "displayName": "H", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/header.tsx#H"] = { docgenInfo: H.__docgenInfo, name: "H", path: "../../packages/js/components/src/section/header.tsx#H" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/section/section.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Section)
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../packages/js/components/src/section/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");












var _excluded = ["component", "children"];
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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(e, r, t[r]);
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
 * Internal dependencies
 */


/**
 * The section wrapper, used to indicate a sub-section (and change the header level context).
 */
var Section = function Section(_ref) {
  var component = _ref.component,
    _children = _ref.children,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_ref, _excluded);
  var Component = component || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$.Consumer, {
    children: function children(level) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$.Provider, {
        value: level + 1,
        children: component === false ? _children : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
          children: _children
        }))
      });
    }
  });
};
try {
    // @ts-ignore
    Section.displayName = "Section";
    // @ts-ignore
    Section.__docgenInfo = { "description": "The section wrapper, used to indicate a sub-section (and change the header level context).", "displayName": "Section", "props": { "component": { "defaultValue": null, "description": "The wrapper component for this section. Optional, defaults to `div`. If passed false, no wrapper is used. Additional props passed to Section are passed on to the component.", "name": "component", "required": false, "type": { "name": "string | false | ComponentType<{ className?: string; }>" } }, "className": { "defaultValue": null, "description": "Optional classname", "name": "className", "required": false, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "The children inside this section, rendered in the `component`. This increases the context level for the next heading used.", "name": "children", "required": true, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/section.tsx#Section"] = { docgenInfo: Section.__docgenInfo, name: "Section", path: "../../packages/js/components/src/section/section.tsx#Section" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/date-range-filter-picker/stories/date-range-filter-picker.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/date-range-filter-picker/index.js");
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/js/date/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



/**
 * External dependencies
 */


var query = {};
var defaultDateRange = 'period=month&compare=previous_year';
var storeGetDateParamsFromQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partialRight)(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .getDateParamsFromQuery */ .vW, defaultDateRange);
var storeGetCurrentDates = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partialRight)(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentDates */ .lI, defaultDateRange);
var _storeGetDateParamsFr = storeGetDateParamsFromQuery(query),
  period = _storeGetDateParamsFr.period,
  compare = _storeGetDateParamsFr.compare,
  before = _storeGetDateParamsFr.before,
  after = _storeGetDateParamsFr.after;
var _storeGetCurrentDates = storeGetCurrentDates(query),
  primaryDate = _storeGetCurrentDates.primary,
  secondaryDate = _storeGetCurrentDates.secondary;
var dateQuery = {
  period: period,
  compare: compare,
  before: before,
  after: after,
  primaryDate: primaryDate,
  secondaryDate: secondaryDate
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    query: query,
    onRangeSelect: function onRangeSelect() {},
    dateQuery: dateQuery,
    isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .isoDateFormat */ .r3
  }, "daterange");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/DateRangeFilterPicker',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <DateRangeFilterPicker key=\"daterange\" query={query} onRangeSelect={() => {}} dateQuery={dateQuery} isoDateFormat={isoDateFormat} />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "?bbf9":
/***/ (() => {

/* (ignored) */

/***/ })

}]);