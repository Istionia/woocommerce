"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[686],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _objectWithoutProperties)
});

;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toConsumableArray)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,arrayLikeToArray/* default */.A)(r);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || (0,iterableToArray/* default */.A)(r) || (0,unsupportedIterableToArray/* default */.A)(r) || _nonIterableSpread();
}


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ ensureNumber),
/* harmony export */   J5: () => (/* binding */ isValueDefined),
/* harmony export */   r6: () => (/* binding */ isValueEmpty),
/* harmony export */   vD: () => (/* binding */ getDefinedValue)
/* harmony export */ });
/* unused harmony export stringToNumber */
/* eslint-disable jsdoc/valid-types */
/**
 * Determines if a value is null or undefined.
 *
 * @template T
 *
 * @param {T} value The value to check.
 * @return {value is Exclude<T, null | undefined>} Whether value is not null or undefined.
 */
function isValueDefined(value) {
  return value !== undefined && value !== null;
}
/* eslint-enable jsdoc/valid-types */

/* eslint-disable jsdoc/valid-types */
/**
 * Determines if a value is empty, null, or undefined.
 *
 * @param {string | number | null | undefined} value The value to check.
 * @return {value is ("" | null | undefined)} Whether value is empty.
 */
function isValueEmpty(value) {
  const isEmptyString = value === '';
  return !isValueDefined(value) || isEmptyString;
}
/* eslint-enable jsdoc/valid-types */

/**
 * Get the first defined/non-null value from an array.
 *
 * @template T
 *
 * @param {Array<T | null | undefined>} values        Values to derive from.
 * @param {T}                           fallbackValue Fallback value if there are no defined values.
 * @return {T} A defined value or the fallback value.
 */
function getDefinedValue(values = [], fallbackValue) {
  var _values$find;
  return (_values$find = values.find(isValueDefined)) !== null && _values$find !== void 0 ? _values$find : fallbackValue;
}

/**
 * Converts a string to a number.
 *
 * @param {string} value
 * @return {number} String as a number.
 */
const stringToNumber = value => {
  return parseFloat(value);
};

/**
 * Regardless of the input being a string or a number, returns a number.
 *
 * Returns `undefined` in case the string is `undefined` or not a valid numeric value.
 *
 * @param {string | number} value
 * @return {number} The parsed number.
 */
const ensureNumber = value => {
  return typeof value === 'string' ? stringToNumber(value) : value;
};
//# sourceMappingURL=values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reset.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const reset = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M7 11.5h10V13H7z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);
//# sourceMappingURL=reset.js.map

/***/ }),

/***/ "../../packages/js/components/src/text-control/index.js":
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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


















var _excluded = ["className", "onClick"];
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
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(t).constructor) : o.apply(t, e));
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
 * An input field use for text inputs in forms.
 */

var TextControl = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(/*#__PURE__*/function (_Component) {
  function _class(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(this, _class);
    _this = _callSuper(this, _class, [props]);
    _this.state = {
      isFocused: false
    };
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(_class, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_class, [{
    key: "handleFocusOutside",
    value: function handleFocusOutside() {
      this.setState({
        isFocused: false
      });
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event, onClick) {
      this.setState({
        isFocused: true
      });
      if (typeof onClick === 'function') {
        onClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var isFocused = this.state.isFocused;
      var _this$props = this.props,
        className = _this$props.className,
        _onClick = _this$props.onClick,
        otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_this$props, _excluded);
      var label = otherProps.label,
        value = otherProps.value,
        disabled = otherProps.disabled;
      var isEmpty = value === '';
      var isActive = isFocused && !disabled;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, _objectSpread({
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)('muriel-component', 'muriel-input-text', className, {
          disabled: disabled,
          empty: isEmpty,
          active: isActive,
          'with-value': !isEmpty
        }),
        placeholder: label,
        onClick: function onClick(event) {
          return _this2.handleOnClick(event, _onClick);
        },
        onFocus: function onFocus() {
          return _this2.setState({
            isFocused: true
          });
        }
      }, otherProps));
    }
  }]);
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_22__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextControl);

/***/ }),

/***/ "../../packages/js/components/src/form/form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Form)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/regenerator/index.js");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("../../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/setWith.js
var setWith = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/setWith.js");
var setWith_default = /*#__PURE__*/__webpack_require__.n(setWith);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var get = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js");
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clone.js
var clone = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clone.js");
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js
var omit = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js");
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// ../../packages/js/components/src/form/form-context.ts
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

var FormContext = (0,react.createContext)({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useFormContext() {
  var formContext = useContext(FormContext);
  return formContext;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/form/form.tsx




var _excluded = ["children", "onSubmit", "onChange", "onChanges"],
  _excluded2 = ["className", "onBlur", "onChange", "sanitize"];
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













/**
 * External dependencies
 */










/**
 * Internal dependencies
 */


function isChangeEvent(value) {
  return value.target !== undefined;
}

/**
 * A form component to handle form state and provide input helper props.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FormComponent(_ref, ref) {
  var _props$initialValues, _props$initialValues2;
  var children = _ref.children,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onChanges = _ref.onChanges,
    onChanges = _ref$onChanges === void 0 ? function () {} : _ref$onChanges,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var initialValues = (0,react.useRef)((_props$initialValues = props.initialValues) !== null && _props$initialValues !== void 0 ? _props$initialValues : {});
  var _useState = (0,react.useState)((_props$initialValues2 = props.initialValues) !== null && _props$initialValues2 !== void 0 ? _props$initialValues2 : {}),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    values = _useState2[0],
    setValuesInternal = _useState2[1];
  var _useState3 = (0,react.useState)(props.errors || {}),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react.useState)(props.touched || {}),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    touched = _useState6[0],
    setTouched = _useState6[1];
  var validate = (0,react.useCallback)(function (newValues) {
    var onValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var newErrors = props.validate ? props.validate(newValues) : {};
    setErrors(newErrors || {});
    onValidate(newErrors);
  }, [props.validate]);
  (0,react.useEffect)(function () {
    validate(values);
  }, []);
  var resetForm = function resetForm(newInitialValues) {
    var _ref2;
    var newTouchedFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newValues = (_ref2 = newInitialValues !== null && newInitialValues !== void 0 ? newInitialValues : initialValues.current) !== null && _ref2 !== void 0 ? _ref2 : {};
    initialValues.current = newValues;
    setValuesInternal(newValues);
    setTouched(newTouchedFields);
    setErrors(newErrors);
  };
  (0,react.useImperativeHandle)(ref, function () {
    return {
      resetForm: resetForm
    };
  });
  var isValidForm = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validate(values);
            return _context.abrupt("return", !Object.keys(errors).length);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function isValidForm() {
      return _ref3.apply(this, arguments);
    };
  }();
  var setValues = (0,react.useCallback)(function (valuesToSet) {
    var newValues = _objectSpread(_objectSpread({}, values), valuesToSet);
    setValuesInternal(newValues);
    validate(newValues, function (newErrors) {
      var onChangeCallback = props.onChangeCallback;

      // Note that onChange is a no-op by default so this will never be null
      var singleValueChangeCallback = onChangeCallback || onChange;
      if (onChangeCallback) {
        (0,build_module/* default */.A)('onChangeCallback', {
          version: '9.0.0',
          alternative: 'onChange',
          plugin: '@woocommerce/components'
        });
      }
      if (!singleValueChangeCallback && !onChanges) {
        return;
      }

      // onChange and onChanges keep track of validity, so needs to
      // happen after setting the error state.

      var isValid = !Object.keys(newErrors || {}).length;
      var nameValuePairs = [];
      for (var key in valuesToSet) {
        var nameValuePair = {
          name: key,
          value: valuesToSet[key]
        };
        nameValuePairs.push(nameValuePair);
        if (singleValueChangeCallback) {
          singleValueChangeCallback(nameValuePair, newValues, isValid);
        }
      }
      if (onChanges) {
        onChanges(nameValuePairs, newValues, isValid);
      }
    });
  }, [values, validate, onChange, props.onChangeCallback]);
  var setValue = (0,react.useCallback)(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (name, value) {
    setValues(setWith_default()(_objectSpread({}, values), name, value, (clone_default())));
  }, [values, validate, onChange, props.onChangeCallback]);
  var handleChange = (0,react.useCallback)(function (name, value) {
    // Handle native events.
    if (isChangeEvent(value) && value.target) {
      if (value.target.type === 'checkbox') {
        setValue(name, !get_default()(values, name));
      } else {
        setValue(name, value.target.value);
      }
    } else {
      setValue(name, value);
    }
  }, [setValue]);
  var handleBlur = (0,react.useCallback)(function (name) {
    setTouched(_objectSpread(_objectSpread({}, touched), {}, (0,defineProperty/* default */.A)({}, name, true)));
  }, [touched]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var onSubmitCallback, touchedFields, callback;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            onSubmitCallback = props.onSubmitCallback;
            touchedFields = {};
            Object.keys(values).map(function (name) {
              return touchedFields[name] = true;
            });
            setTouched(touchedFields);
            _context2.next = 6;
            return isValidForm();
          case 6:
            if (!_context2.sent) {
              _context2.next = 11;
              break;
            }
            // Note that onSubmit is a no-op by default so this will never be null
            callback = onSubmitCallback || onSubmit;
            if (onSubmitCallback) {
              (0,build_module/* default */.A)('onSubmitCallback', {
                version: '9.0.0',
                alternative: 'onSubmit',
                plugin: '@woocommerce/components'
              });
            }
            if (!callback) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", callback(values));
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();
  function getInputProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var inputValue = get_default()(values, name);
    var isTouched = touched[name];
    var inputError = get_default()(errors, name);
    var classNameProp = inputProps.className,
      onBlurProp = inputProps.onBlur,
      onChangeProp = inputProps.onChange,
      sanitize = inputProps.sanitize,
      additionalProps = (0,objectWithoutProperties/* default */.A)(inputProps, _excluded2);
    return _objectSpread({
      value: inputValue,
      checked: Boolean(inputValue),
      selected: inputValue,
      onChange: function onChange(value) {
        handleChange(name, value);
        if (onChangeProp) {
          onChangeProp(value);
        }
      },
      onBlur: function onBlur() {
        if (sanitize) {
          handleChange(name, sanitize(inputValue));
        }
        handleBlur(name);
        if (onBlurProp) {
          onBlurProp();
        }
      },
      className: (0,clsx/* default */.A)(classNameProp, {
        'has-error': isTouched && inputError
      }),
      help: isTouched ? inputError : null
    }, additionalProps);
  }
  function getCheckboxControlProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return omit_default()(getInputProps(name, inputProps), ['selected', 'value']);
  }
  function getSelectControlProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var selectControlProps = getInputProps(name, inputProps);
    return _objectSpread(_objectSpread({}, selectControlProps), {}, {
      value: selectControlProps.value === undefined ? undefined : String(selectControlProps.value)
    });
  }
  var isDirty = (0,react.useMemo)(function () {
    return !isEqual_default()(initialValues.current, values);
  }, [initialValues.current, values]);
  var getStateAndHelpers = function getStateAndHelpers() {
    return {
      values: values,
      errors: errors,
      touched: touched,
      isDirty: isDirty,
      setTouched: setTouched,
      setValue: setValue,
      setValues: setValues,
      handleSubmit: handleSubmit,
      getCheckboxControlProps: getCheckboxControlProps,
      getInputProps: getInputProps,
      getSelectControlProps: getSelectControlProps,
      isValidForm: !Object.keys(errors).length,
      resetForm: resetForm
    };
  };
  function getChildren() {
    if (typeof children === 'function') {
      return children(getStateAndHelpers());
    }
    return children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormContext.Provider, {
    value: getStateAndHelpers(),
    children: getChildren()
  });
}
var Form = (0,react.forwardRef)(FormComponent);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-reduce.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var aCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/correct-is-regexp-logic.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inherit-if-required.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/not-a-regexp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isRegExp = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-to-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var objectGetPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-prototype-of.js");
var objectKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-property-is-enumerable.js").f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/same-value.js":
/***/ ((module) => {


// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/whitespaces.js":
/***/ ((module) => {


// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-includes.js").includes);
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $reduce = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-reduce.js").left);
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-node.js");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.entries.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $entries = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-to-array.js").entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.values.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $values = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-to-array.js").values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var defineBuiltInAccessor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js");
var copyConstructorProperties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "../../packages/js/components/src/dynamic-form/stories/index.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  "default": () => (/* binding */ index_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.entries.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/form/form.tsx + 1 modules
var form_form = __webpack_require__("../../packages/js/components/src/form/form.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ../../packages/js/components/src/text-control/index.js
var text_control = __webpack_require__("../../packages/js/components/src/text-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/dynamic-form/field-types/field-text.tsx


var _excluded = ["field", "type"];
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











/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var TextField = function TextField(_ref) {
  var field = _ref.field,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var label = field.label,
    description = field.description;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, _objectSpread({
    type: type,
    title: description,
    label: label
  }, props));
};
try {
    // @ts-ignore
    TextField.displayName = "TextField";
    // @ts-ignore
    TextField.__docgenInfo = { "description": "", "displayName": "TextField", "props": { "field": { "defaultValue": null, "description": "", "name": "field", "required": true, "type": { "name": "Field" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/dynamic-form/field-types/field-text.tsx#TextField"] = { docgenInfo: TextField.__docgenInfo, name: "TextField", path: "../../packages/js/components/src/dynamic-form/field-types/field-text.tsx#TextField" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/components/src/dynamic-form/field-types/field-password.tsx











function field_password_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function field_password_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? field_password_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : field_password_ownKeys(Object(t)).forEach(function (r) {
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


var PasswordField = function PasswordField(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TextField, field_password_objectSpread(field_password_objectSpread({}, props), {}, {
    type: "password"
  }));
};
try {
    // @ts-ignore
    PasswordField.displayName = "PasswordField";
    // @ts-ignore
    PasswordField.__docgenInfo = { "description": "", "displayName": "PasswordField", "props": { "field": { "defaultValue": null, "description": "", "name": "field", "required": true, "type": { "name": "Field" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/dynamic-form/field-types/field-password.tsx#PasswordField"] = { docgenInfo: PasswordField.__docgenInfo, name: "PasswordField", path: "../../packages/js/components/src/dynamic-form/field-types/field-password.tsx#PasswordField" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js
var checkbox_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js");
;// ../../packages/js/components/src/dynamic-form/field-types/field-checkbox.tsx


var field_checkbox_excluded = ["field", "onChange"];
function field_checkbox_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function field_checkbox_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? field_checkbox_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : field_checkbox_ownKeys(Object(t)).forEach(function (r) {
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

var CheckboxField = function CheckboxField(_ref) {
  var field = _ref.field,
    _onChange = _ref.onChange,
    props = (0,objectWithoutProperties/* default */.A)(_ref, field_checkbox_excluded);
  var label = field.label,
    description = field.description;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control/* default */.A, field_checkbox_objectSpread({
    onChange: function onChange(val) {
      return _onChange(val);
    },
    title: description,
    label: label
  }, props));
};
try {
    // @ts-ignore
    CheckboxField.displayName = "CheckboxField";
    // @ts-ignore
    CheckboxField.__docgenInfo = { "description": "", "displayName": "CheckboxField", "props": { "field": { "defaultValue": null, "description": "", "name": "field", "required": true, "type": { "name": "Field" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/dynamic-form/field-types/field-checkbox.tsx#CheckboxField"] = { docgenInfo: CheckboxField.__docgenInfo, name: "CheckboxField", path: "../../packages/js/components/src/dynamic-form/field-types/field-checkbox.tsx#CheckboxField" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../packages/js/components/src/select-control/index.tsx + 3 modules
var select_control = __webpack_require__("../../packages/js/components/src/select-control/index.tsx");
;// ../../packages/js/components/src/dynamic-form/field-types/field-select.tsx



var field_select_excluded = ["field"];
function field_select_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function field_select_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? field_select_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : field_select_ownKeys(Object(t)).forEach(function (r) {
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


var transformOptions = function transformOptions(options) {
  return Object.entries(options).map(function (_ref) {
    var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return {
      key: key,
      label: value,
      value: {
        id: key
      }
    };
  });
};
var SelectField = function SelectField(_ref3) {
  var field = _ref3.field,
    props = (0,objectWithoutProperties/* default */.A)(_ref3, field_select_excluded);
  var description = field.description,
    label = field.label,
    _field$options = field.options,
    options = _field$options === void 0 ? {} : _field$options;
  var transformedOptions = (0,react.useMemo)(function () {
    return transformOptions(options);
  }, [options]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, field_select_objectSpread({
    title: description,
    label: label,
    options: transformedOptions
  }, props));
};
try {
    // @ts-ignore
    SelectField.displayName = "SelectField";
    // @ts-ignore
    SelectField.__docgenInfo = { "description": "", "displayName": "SelectField", "props": { "field": { "defaultValue": null, "description": "", "name": "field", "required": true, "type": { "name": "Field" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/dynamic-form/field-types/field-select.tsx#SelectField"] = { docgenInfo: SelectField.__docgenInfo, name: "SelectField", path: "../../packages/js/components/src/dynamic-form/field-types/field-select.tsx#SelectField" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/components/src/dynamic-form/dynamic-form.tsx

function dynamic_form_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function dynamic_form_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? dynamic_form_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dynamic_form_ownKeys(Object(t)).forEach(function (r) {
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



var fieldTypeMap = {
  text: TextField,
  password: PasswordField,
  checkbox: CheckboxField,
  select: SelectField,
  "default": TextField
};
var getInitialConfigValues = function getInitialConfigValues(fields) {
  return fields.reduce(function (data, field) {
    return dynamic_form_objectSpread(dynamic_form_objectSpread({}, data), {}, (0,defineProperty/* default */.A)({}, field.id, field.type === 'checkbox' ? field.value === 'yes' : field.value));
  }, {});
};
var DynamicForm = function DynamicForm(_ref) {
  var _ref$fields = _ref.fields,
    baseFields = _ref$fields === void 0 ? [] : _ref$fields,
    _ref$isBusy = _ref.isBusy,
    isBusy = _ref$isBusy === void 0 ? false : _ref$isBusy,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$validate = _ref.validate,
    validate = _ref$validate === void 0 ? function () {
      return {};
    } : _ref$validate,
    _ref$submitLabel = _ref.submitLabel,
    submitLabel = _ref$submitLabel === void 0 ? (0,build_module.__)('Proceed', 'woocommerce') : _ref$submitLabel;
  // Support accepting fields in the format provided by the API (object), but transform to Array
  var fields = baseFields instanceof Array ? baseFields : Object.values(baseFields);
  var initialValues = (0,react.useMemo)(function () {
    return getInitialConfigValues(fields);
  }, [fields]);
  return (/*#__PURE__*/
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (0,jsx_runtime.jsx)(form_form/* Form */.l, {
      initialValues: initialValues,
      onChange: onChange,
      onSubmit: onSubmit,
      validate: validate,
      children: function children(_ref2) {
        var getInputProps = _ref2.getInputProps,
          handleSubmit = _ref2.handleSubmit;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "woocommerce-component_dynamic-form",
          children: [fields.map(function (field) {
            if (field.type && !(field.type in fieldTypeMap)) {
              /* eslint-disable no-console */
              console.warn("Field type of ".concat(field.type, " not current supported in DynamicForm component"));
              /* eslint-enable no-console */
              return null;
            }
            var Control = fieldTypeMap[field.type || 'default'];
            return /*#__PURE__*/(0,jsx_runtime.jsx)(Control, dynamic_form_objectSpread({
              field: field
            }, getInputProps(field.id)), field.id);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            isPrimary: true,
            isBusy: isBusy,
            onClick: function onClick() {
              handleSubmit();
            },
            children: submitLabel
          })]
        });
      }
    })
  );
};
try {
    // @ts-ignore
    DynamicForm.displayName = "DynamicForm";
    // @ts-ignore
    DynamicForm.__docgenInfo = { "description": "", "displayName": "DynamicForm", "props": { "fields": { "defaultValue": null, "description": "", "name": "fields", "required": true, "type": { "name": "Field[] | { [key: string]: Field; }" } }, "validate": { "defaultValue": { value: "() => ( {} )" }, "description": "", "name": "validate", "required": false, "type": { "name": "(values: Record<string, string>) => Record<string, string>" } }, "isBusy": { "defaultValue": { value: "false" }, "description": "", "name": "isBusy", "required": false, "type": { "name": "boolean" } }, "onSubmit": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onSubmit", "required": false, "type": { "name": "((values: Record<string, string>) => void)" } }, "onChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onChange", "required": false, "type": { "name": "((value: { name: string; value: unknown; }, values: Record<string, string>, result: boolean) => void)" } }, "submitLabel": { "defaultValue": { value: "__( 'Proceed', 'woocommerce' )" }, "description": "", "name": "submitLabel", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/dynamic-form/dynamic-form.tsx#DynamicForm"] = { docgenInfo: DynamicForm.__docgenInfo, name: "DynamicForm", path: "../../packages/js/components/src/dynamic-form/dynamic-form.tsx#DynamicForm" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/components/src/dynamic-form/stories/index.story.js





/**
 * External dependencies
 */



var fields = [{
  id: 'user_name',
  label: 'Username',
  description: 'This is your username.',
  type: 'text',
  value: '',
  "default": '',
  tip: 'This is your username.',
  placeholder: ''
}, {
  id: 'pass_phrase',
  label: 'Passphrase',
  description: '* Required. Needed to ensure the data passed through is secure.',
  type: 'password',
  value: '',
  "default": '',
  tip: '* Required. Needed to ensure the data passed through is secure.',
  placeholder: ''
}, {
  id: 'button_type',
  label: 'Button Type',
  description: 'Select the button type you would like to show.',
  type: 'select',
  value: 'buy',
  "default": 'buy',
  tip: 'Select the button type you would like to show.',
  placeholder: '',
  options: {
    "default": 'Default',
    buy: 'Buy',
    donate: 'Donate',
    branded: 'Branded',
    custom: 'Custom'
  }
}, {
  id: 'checkbox_sample',
  label: 'Checkbox style',
  description: 'This is an example checkbox field.',
  type: 'checkbox',
  value: 'no',
  "default": 'no',
  tip: 'This is an example checkbox field.',
  placeholder: ''
}];
var getField = function getField(fieldId) {
  return fields.find(function (field) {
    return field.id === fieldId;
  });
};
var validate = function validate(values) {
  var errors = {};
  for (var _i = 0, _Object$entries = Object.entries(values); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0,slicedToArray/* default */.A)(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var field = getField(key);
    if (!(value || field.type === 'checkbox')) {
      errors[key] = "Please enter your ".concat(field.label.toLowerCase());
    }
  }
  return errors;
};
var DynamicExample = function DynamicExample() {
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    submitted = _useState2[0],
    setSubmitted = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DynamicForm, {
      fields: fields,
      onSubmit: function onSubmit(values) {
        return setSubmitted(values);
      },
      validate: validate
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
      children: "Submitted:"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: submitted ? JSON.stringify(submitted, null, 3) : 'None'
    })]
  });
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DynamicExample, {});
};
/* harmony default export */ const index_story = ({
  title: 'Components/DynamicForm',
  component: DynamicForm
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <DynamicExample />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);