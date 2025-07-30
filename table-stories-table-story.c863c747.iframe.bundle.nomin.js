"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5322],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _slicedToArray)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return (0,arrayWithHoles/* default */.A)(r) || _iterableToArrayLimit(r, e) || (0,unsupportedIterableToArray/* default */.A)(r, e) || (0,nonIterableRest/* default */.A)();
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r, a) : void 0;
  }
}


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ COLORS)
/* harmony export */ });
/**
 * Internal dependencies
 */
const white = '#fff';

// Matches the grays in @wordpress/base-styles
const GRAY = {
  900: '#1e1e1e',
  800: '#2f2f2f',
  /** Meets 4.6:1 text contrast against white. */
  700: '#757575',
  /** Meets 3:1 UI or large text contrast against white. */
  600: '#949494',
  400: '#ccc',
  /** Used for most borders. */
  300: '#ddd',
  /** Used sparingly for light borders. */
  200: '#e0e0e0',
  /** Used for light gray backgrounds. */
  100: '#f0f0f0'
};

// Matches @wordpress/base-styles
const ALERT = {
  yellow: '#f0b849',
  red: '#d94f4f',
  green: '#4ab866'
};

// Should match packages/components/src/utils/theme-variables.scss
const THEME = {
  accent: `var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))`,
  accentDarker10: `var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))`,
  accentDarker20: `var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))`,
  /** Used when placing text on the accent color. */
  accentInverted: `var(--wp-components-color-accent-inverted, ${white})`,
  background: `var(--wp-components-color-background, ${white})`,
  foreground: `var(--wp-components-color-foreground, ${GRAY[900]})`,
  /** Used when placing text on the foreground color. */
  foregroundInverted: `var(--wp-components-color-foreground-inverted, ${white})`,
  gray: {
    /** @deprecated Use `COLORS.theme.foreground` instead. */
    900: `var(--wp-components-color-foreground, ${GRAY[900]})`,
    800: `var(--wp-components-color-gray-800, ${GRAY[800]})`,
    700: `var(--wp-components-color-gray-700, ${GRAY[700]})`,
    600: `var(--wp-components-color-gray-600, ${GRAY[600]})`,
    400: `var(--wp-components-color-gray-400, ${GRAY[400]})`,
    300: `var(--wp-components-color-gray-300, ${GRAY[300]})`,
    200: `var(--wp-components-color-gray-200, ${GRAY[200]})`,
    100: `var(--wp-components-color-gray-100, ${GRAY[100]})`
  }
};
const UI = {
  background: THEME.background,
  backgroundDisabled: THEME.gray[100],
  border: THEME.gray[600],
  borderHover: THEME.gray[700],
  borderFocus: THEME.accent,
  borderDisabled: THEME.gray[400],
  textDisabled: THEME.gray[600],
  // Matches @wordpress/base-styles
  darkGrayPlaceholder: `color-mix(in srgb, ${THEME.foreground}, transparent 38%)`,
  lightGrayPlaceholder: `color-mix(in srgb, ${THEME.background}, transparent 35%)`
};
const COLORS = Object.freeze({
  /**
   * The main gray color object.
   *
   * @deprecated Use semantic aliases in `COLORS.ui` or theme-ready variables in `COLORS.theme.gray`.
   */
  gray: GRAY,
  // TODO: Stop exporting this when everything is migrated to `theme` or `ui`
  white,
  alert: ALERT,
  /**
   * Theme-ready variables with fallbacks.
   *
   * Prefer semantic aliases in `COLORS.ui` when applicable.
   */
  theme: THEME,
  /**
   * Semantic aliases (prefer these over raw variables when applicable).
   */
  ui: UI
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (COLORS)));
//# sourceMappingURL=colors-values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _colors_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/**
 * Internal dependencies
 */


const CONTROL_HEIGHT = '36px';
const CONTROL_PADDING_X = '12px';
const CONTROL_PROPS = {
  controlSurfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlTextActiveColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent,
  controlPaddingX: CONTROL_PADDING_X,
  controlPaddingXLarge: `calc(${CONTROL_PADDING_X} * 1.3334)`,
  controlPaddingXSmall: `calc(${CONTROL_PADDING_X} / 1.3334)`,
  controlBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlBorderRadius: '2px',
  controlBoxShadow: 'transparent',
  controlBoxShadowFocus: `0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent}`,
  controlDestructiveBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.alert.red,
  controlHeight: CONTROL_HEIGHT,
  controlHeightXSmall: `calc( ${CONTROL_HEIGHT} * 0.6 )`,
  controlHeightSmall: `calc( ${CONTROL_HEIGHT} * 0.8 )`,
  controlHeightLarge: `calc( ${CONTROL_HEIGHT} * 1.2 )`,
  controlHeightXLarge: `calc( ${CONTROL_HEIGHT} * 1.4 )`
};
const TOGGLE_GROUP_CONTROL_PROPS = {
  toggleGroupControlBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
  toggleGroupControlBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlBackdropBackgroundColor: CONTROL_PROPS.controlSurfaceColor,
  toggleGroupControlBackdropBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlButtonColorActive: CONTROL_PROPS.controlBackgroundColor
};

// Using Object.assign to avoid creating circular references when emitting
// TypeScript type declarations.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, CONTROL_PROPS, TOGGLE_GROUP_CONTROL_PROPS, {
  colorDivider: 'rgba(0, 0, 0, 0.1)',
  colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
  colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
  colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
  elevationIntensity: 1,
  radiusBlockUi: '2px',
  borderWidth: '1px',
  borderWidthFocus: '1.5px',
  borderWidthTab: '4px',
  spinnerSize: 16,
  fontSize: '13px',
  fontSizeH1: 'calc(2.44 * 13px)',
  fontSizeH2: 'calc(1.95 * 13px)',
  fontSizeH3: 'calc(1.56 * 13px)',
  fontSizeH4: 'calc(1.25 * 13px)',
  fontSizeH5: '13px',
  fontSizeH6: 'calc(0.8 * 13px)',
  fontSizeInputMobile: '16px',
  fontSizeMobile: '15px',
  fontSizeSmall: 'calc(0.92 * 13px)',
  fontSizeXSmall: 'calc(0.75 * 13px)',
  fontLineHeightBase: '1.4',
  fontWeight: 'normal',
  fontWeightHeading: '600',
  gridBase: '4px',
  cardBorderRadius: '2px',
  cardPaddingXSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(2)}`,
  cardPaddingSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)}`,
  cardPaddingMedium: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)}`,
  cardPaddingLarge: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(8)}`,
  popoverShadow: `0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)`,
  surfaceBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceBackgroundSubtleColor: '#F3F3F3',
  surfaceBackgroundTintColor: '#F5F5F5',
  surfaceBorderColor: 'rgba(0, 0, 0, 0.1)',
  surfaceBorderBoldColor: 'rgba(0, 0, 0, 0.15)',
  surfaceBorderSubtleColor: 'rgba(0, 0, 0, 0.05)',
  surfaceBackgroundTertiaryColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  transitionDuration: '200ms',
  transitionDurationFast: '160ms',
  transitionDurationFaster: '120ms',
  transitionDurationFastest: '100ms',
  transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
  transitionTimingFunctionControl: 'cubic-bezier(0.12, 0.8, 0.32, 1)'
}));
//# sourceMappingURL=config-values.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_create_higher_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");
/* harmony import */ var _hooks_use_instance_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */




/**
 * A Higher Order Component used to be provide a unique instance ID by
 * component.
 */
const withInstanceId = (0,_utils_create_higher_order_component__WEBPACK_IMPORTED_MODULE_1__/* .createHigherOrderComponent */ .f)(WrappedComponent => {
  return props => {
    const instanceId = (0,_hooks_use_instance_id__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(WrappedComponent);
    // @ts-ignore
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      instanceId: instanceId
    });
  };
}, 'instanceId');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withInstanceId);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createHigherOrderComponent)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js");
/**
 * External dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param mapComponent Function mapping component to enhanced component.
 * @param modifierName Seed name from which to generated display name.
 *
 * @return Component class with generated display name assigned.
 */
function createHigherOrderComponent(mapComponent, modifierName) {
  return Inner => {
    const Outer = mapComponent(Inner);
    Outer.displayName = hocName(modifierName, Inner);
    return Outer;
  };
}

/**
 * Returns a displayName for a higher-order component, given a wrapper name.
 *
 * @example
 *     hocName( 'MyMemo', Widget ) === 'MyMemo(Widget)';
 *     hocName( 'MyMemo', <div /> ) === 'MyMemo(Component)';
 *
 * @param name  Name assigned to higher-order component's wrapper component.
 * @param Inner Wrapped component inside higher-order component.
 * @return       Wrapped name of higher-order component.
 */
const hocName = (name, Inner) => {
  const inner = Inner.displayName || Inner.name || 'Component';
  const outer = (0,change_case__WEBPACK_IMPORTED_MODULE_0__/* .pascalCase */ .fL)(name !== null && name !== void 0 ? name : '');
  return `${outer}(${inner})`;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronDown = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronUp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jl: () => (/* binding */ Circle),
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports G, Line, Polygon, Rect, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/** @typedef {{isPressed?: boolean} & import('react').ComponentPropsWithoutRef<'svg'>} SVGProps */

/**
 * @param {import('react').ComponentPropsWithoutRef<'circle'>} props
 *
 * @return {JSX.Element} Circle component
 */

const Circle = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('circle', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */
const G = props => createElement('g', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'line'>} props
 *
 * @return {JSX.Element} Path component
 */
const Line = props => createElement('line', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'path'>} props
 *
 * @return {JSX.Element} Path component
 */
const Path = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'polygon'>} props
 *
 * @return {JSX.Element} Polygon component
 */
const Polygon = props => createElement('polygon', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'rect'>} props
 *
 * @return {JSX.Element} Rect component
 */
const Rect = props => createElement('rect', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'defs'>} props
 *
 * @return {JSX.Element} Defs component
 */
const Defs = props => createElement('defs', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'radialGradient'>} props
 *
 * @return {JSX.Element} RadialGradient component
 */
const RadialGradient = props => createElement('radialGradient', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'linearGradient'>} props
 *
 * @return {JSX.Element} LinearGradient component
 */
const LinearGradient = props => createElement('linearGradient', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'stop'>} props
 *
 * @return {JSX.Element} Stop component
 */
const Stop = props => createElement('stop', props);
const SVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
/**
 * @param {SVGProps}                                    props isPressed indicates whether the SVG should appear as pressed.
 *                                                            Other props will be passed through to svg component.
 * @param {import('react').ForwardedRef<SVGSVGElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element} Stop component
 */
({
  className,
  isPressed,
  ...props
}, ref) => {
  const appliedProps = {
    ...props,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  };

  // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    ...appliedProps,
    ref: ref
  });
});
SVG.displayName = 'SVG';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/js/components/src/table/stories/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ge: () => (/* binding */ rows),
/* harmony export */   b3: () => (/* binding */ headers),
/* harmony export */   z: () => (/* binding */ summary)
/* harmony export */ });
var headers = [{
  key: 'month',
  label: 'Month'
}, {
  key: 'orders',
  label: 'Orders'
}, {
  key: 'revenue',
  label: 'Revenue'
}];
var rows = [[{
  display: 'January',
  value: 1
}, {
  display: 10,
  value: 10
}, {
  display: '$530.00',
  value: 530
}], [{
  display: 'February',
  value: 2
}, {
  display: 13,
  value: 13
}, {
  display: '$675.00',
  value: 675
}], [{
  display: 'March',
  value: 3
}, {
  display: 9,
  value: 9
}, {
  display: '$460.00',
  value: 460
}]];
var summary = [{
  label: 'Gross Income',
  value: '$830.00'
}, {
  label: 'Taxes',
  value: '$96.32'
}, {
  label: 'Shipping',
  value: '$50.00'
}];

/***/ }),

/***/ "../../packages/js/components/src/table/table.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");



var _excluded = ["instanceId", "headers", "rows", "ariaHidden", "caption", "className", "onSort", "query", "rowHeader", "rowKey", "emptyMessage"];
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
 * Internal dependencies
 */

var ASC = 'asc';
var DESC = 'desc';
var getDisplay = function getDisplay(cell) {
  return cell.display || null;
};

/**
 * A table component, without the Card wrapper. This is a basic table display, sortable, but no default filtering.
 *
 * Row data should be passed to the component as a list of arrays, where each array is a row in the table.
 * Headers are passed in separately as an array of objects with column-related properties. For example,
 * this data would render the following table.
 *
 * ```js
 * const headers = [ { label: 'Month' }, { label: 'Orders' }, { label: 'Revenue' } ];
 * const rows = [
 * 	[
 * 		{ display: 'January', value: 1 },
 * 		{ display: 10, value: 10 },
 * 		{ display: '$530.00', value: 530 },
 * 	],
 * 	[
 * 		{ display: 'February', value: 2 },
 * 		{ display: 13, value: 13 },
 * 		{ display: '$675.00', value: 675 },
 * 	],
 * 	[
 * 		{ display: 'March', value: 3 },
 * 		{ display: 9, value: 9 },
 * 		{ display: '$460.00', value: 460 },
 * 	],
 * ]
 * ```
 *
 * |   Month  | Orders | Revenue |
 * | ---------|--------|---------|
 * | January  |     10 | $530.00 |
 * | February |     13 | $675.00 |
 * | March    |      9 | $460.00 |
 */

var Table = function Table(_ref) {
  var instanceId = _ref.instanceId,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? [] : _ref$headers,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? [] : _ref$rows,
    ariaHidden = _ref.ariaHidden,
    caption = _ref.caption,
    className = _ref.className,
    _ref$onSort = _ref.onSort,
    onSort = _ref$onSort === void 0 ? function (f) {
      return f;
    } : _ref$onSort,
    _ref$query = _ref.query,
    query = _ref$query === void 0 ? {} : _ref$query,
    rowHeader = _ref.rowHeader,
    rowKey = _ref.rowKey,
    emptyMessage = _ref.emptyMessage,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_ref, _excluded);
  var classNames = props.classNames;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useState)(undefined),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState, 2),
    tabIndex = _useState2[0],
    setTabIndex = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState3, 2),
    isScrollableRight = _useState4[0],
    setIsScrollableRight = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState5, 2),
    isScrollableLeft = _useState6[0],
    setIsScrollableLeft = _useState6[1];
  var container = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useRef)(null);
  if (classNames) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)("Table component's classNames prop", {
      since: '11.1.0',
      version: '12.0.0',
      alternative: 'className',
      plugin: '@woocommerce/components'
    });
  }
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)('woocommerce-table__table', classNames, className, {
    'is-scrollable-right': isScrollableRight,
    'is-scrollable-left': isScrollableLeft
  });
  var sortBy = function sortBy(key) {
    return function () {
      var currentKey = query.orderby || (0,lodash__WEBPACK_IMPORTED_MODULE_16__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_16__.find)(headers, {
        defaultSort: true
      }), 'key', false);
      var currentDir = query.order || (0,lodash__WEBPACK_IMPORTED_MODULE_16__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_16__.find)(headers, {
        key: currentKey
      }), 'defaultOrder', DESC);
      var dir = DESC;
      if (key === currentKey) {
        dir = DESC === currentDir ? ASC : DESC;
      }
      onSort(key, dir);
    };
  };
  var getRowKey = function getRowKey(row, index) {
    if (rowKey && typeof rowKey === 'function') {
      return rowKey(row, index);
    }
    return index;
  };
  var updateTableShadow = function updateTableShadow() {
    var table = container.current;
    if (table !== null && table !== void 0 && table.scrollWidth && table !== null && table !== void 0 && table.scrollHeight && table !== null && table !== void 0 && table.offsetWidth) {
      var scrolledToEnd = table.scrollWidth - table.scrollLeft <= table.offsetWidth;
      if (scrolledToEnd && isScrollableRight) {
        setIsScrollableRight(false);
      } else if (!scrolledToEnd && !isScrollableRight) {
        setIsScrollableRight(true);
      }
      var scrolledToStart = table.scrollLeft === 0;
      if (scrolledToStart && isScrollableLeft) {
        setIsScrollableLeft(false);
      } else if (!scrolledToStart && !isScrollableLeft) {
        setIsScrollableLeft(true);
      }
    }
  };
  var sortedBy = query.orderby || (0,lodash__WEBPACK_IMPORTED_MODULE_16__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_16__.find)(headers, {
    defaultSort: true
  }), 'key', false);
  var sortDir = query.order || (0,lodash__WEBPACK_IMPORTED_MODULE_16__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_16__.find)(headers, {
    key: sortedBy
  }), 'defaultOrder', DESC);
  var hasData = !!rows.length;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    var _container$current, _container$current2;
    var scrollWidth = (_container$current = container.current) === null || _container$current === void 0 ? void 0 : _container$current.scrollWidth;
    var clientWidth = (_container$current2 = container.current) === null || _container$current2 === void 0 ? void 0 : _container$current2.clientWidth;
    if (scrollWidth === undefined || clientWidth === undefined) {
      return;
    }
    var scrollable = scrollWidth > clientWidth;
    setTabIndex(scrollable ? 0 : undefined);
    updateTableShadow();
    window.addEventListener('resize', updateTableShadow);
    return function () {
      window.removeEventListener('resize', updateTableShadow);
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.useEffect)(updateTableShadow, [headers, rows, emptyMessage]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
    className: classes,
    ref: container,
    tabIndex: tabIndex,
    "aria-hidden": ariaHidden,
    "aria-labelledby": "caption-".concat(instanceId),
    role: "group",
    onScroll: updateTableShadow,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("caption", {
        id: "caption-".concat(instanceId),
        className: "woocommerce-table__caption screen-reader-text",
        children: [caption, tabIndex === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("small", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__.__)('(scroll to see more)', 'woocommerce')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("tr", {
          children: headers.map(function (header, i) {
            var cellClassName = header.cellClassName,
              isLeftAligned = header.isLeftAligned,
              isSortable = header.isSortable,
              isNumeric = header.isNumeric,
              key = header.key,
              label = header.label,
              screenReaderLabel = header.screenReaderLabel;
            var labelId = "header-".concat(instanceId, "-").concat(i);
            var thProps = {
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)('woocommerce-table__header', cellClassName, {
                'is-left-aligned': isLeftAligned || !isNumeric,
                'is-sortable': isSortable,
                'is-sorted': sortedBy === key,
                'is-numeric': isNumeric
              })
            };
            if (isSortable) {
              thProps['aria-sort'] = 'none';
              if (sortedBy === key) {
                thProps['aria-sort'] = sortDir === ASC ? 'ascending' : 'descending';
              }
            }
            // We only sort by ascending if the col is already sorted descending
            var iconLabel = sortedBy === key && sortDir !== ASC ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__/* .sprintf */ .nv)(/* translators: %s: column label */
            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__.__)('Sort by %s in ascending order', 'woocommerce'), screenReaderLabel || label) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__/* .sprintf */ .nv)(/* translators: %s: column label */
            (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__.__)('Sort by %s in descending order', 'woocommerce'), screenReaderLabel || label);
            var textLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                "aria-hidden": Boolean(screenReaderLabel),
                children: label
              }), screenReaderLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                className: "screen-reader-text",
                children: screenReaderLabel
              })]
            });
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("th", _objectSpread(_objectSpread({
              role: "columnheader",
              scope: "col"
            }, thProps), {}, {
              children: isSortable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay, {
                  "aria-describedby": labelId,
                  onClick: hasData ? sortBy(key) : lodash__WEBPACK_IMPORTED_MODULE_16__.noop,
                  children: [sortedBy === key && sortDir === ASC ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
                    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
                    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A
                  }), textLabel]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "screen-reader-text",
                  id: labelId,
                  children: iconLabel
                })]
              }) : textLabel
            }), header.key || i);
          })
        }), hasData ? rows.map(function (row, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("tr", {
            children: row.map(function (cell, j) {
              var _headers$j = headers[j],
                cellClassName = _headers$j.cellClassName,
                isLeftAligned = _headers$j.isLeftAligned,
                isNumeric = _headers$j.isNumeric;
              var isHeader = rowHeader === j;
              var Cell = isHeader ? 'th' : 'td';
              var cellClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)('woocommerce-table__item', cellClassName, {
                'is-left-aligned': isLeftAligned || !isNumeric,
                'is-numeric': isNumeric,
                'is-sorted': sortedBy === headers[j].key
              });
              var cellKey = getRowKey(row, i).toString() + j;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Cell, {
                scope: isHeader ? 'row' : undefined,
                className: cellClasses,
                children: getDisplay(cell)
              }, cellKey);
            })
          }, getRowKey(row, i));
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("td", {
            className: "woocommerce-table__empty-item",
            colSpan: headers.length,
            children: emptyMessage !== null && emptyMessage !== void 0 ? emptyMessage : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_15__.__)('No data to display', 'woocommerce')
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)(Table));
try {
    // @ts-ignore
    table.displayName = "table";
    // @ts-ignore
    table.__docgenInfo = { "description": "", "displayName": "table", "props": { "classNames": { "defaultValue": null, "description": "Additional classnames", "name": "classNames", "required": false, "type": { "name": "string | Record<string, string>" } }, "className": { "defaultValue": null, "description": "Additional CSS classes.", "name": "className", "required": false, "type": { "name": "string" } }, "caption": { "defaultValue": null, "description": "A label for the content in this table", "name": "caption", "required": false, "type": { "name": "string" } }, "headers": { "defaultValue": { value: "[]" }, "description": "An array of column headers (see `Table` props).", "name": "headers", "required": false, "type": { "name": "TableHeader[]" } }, "rows": { "defaultValue": { value: "[]" }, "description": "An array of arrays of display/value object pairs (see `Table` props).", "name": "rows", "required": false, "type": { "name": "TableRow[][]" } }, "query": { "defaultValue": { value: "{}" }, "description": "The query string represented in object form", "name": "query", "required": false, "type": { "name": "QueryProps" } }, "rowKey": { "defaultValue": null, "description": "The rowKey used for the key value on each row, a function that returns the key.\nDefaults to index.", "name": "rowKey", "required": false, "type": { "name": "((row: TableRow[], index: number) => number)" } }, "emptyMessage": { "defaultValue": null, "description": "Customize the message to show when there are no rows in the table.", "name": "emptyMessage", "required": false, "type": { "name": "string" } }, "rowHeader": { "defaultValue": null, "description": "Which column should be the row header, defaults to the first item (`0`) (but could be set to `1`, if the first col\nis checkboxes, for example). Set to false to disable row headers.", "name": "rowHeader", "required": false, "type": { "name": "number | false" } }, "onSort": { "defaultValue": { value: "( f ) => f" }, "description": "A function called when sortable table headers are clicked, gets the `header.key` as argument.", "name": "onSort", "required": false, "type": { "name": "((key: string, direction: string) => void)" } }, "ariaHidden": { "defaultValue": null, "description": "Controls whether this component is hidden from screen readers. Used by the loading state, before there is data to read.\nDon't use this on real tables unless the table data is loaded elsewhere on the page.", "name": "ariaHidden", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/table/table.tsx#table"] = { docgenInfo: table.__docgenInfo, name: "table", path: "../../packages/js/components/src/table/table.tsx#table" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $forEach = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $map = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var PROPER_FUNCTION_NAME = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").PROPER);
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fL: () => (/* binding */ pascalCase),
/* harmony export */   l3: () => (/* binding */ pascalCaseTransform)
/* harmony export */ });
/* unused harmony export pascalCaseTransformMerge */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__/* .noCase */ .W)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .Cl)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/js/components/src/table/stories/table.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   NoDataCustomMessage: () => (/* binding */ NoDataCustomMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/js/components/src/table/table.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/table/stories/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    size: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      caption: "Revenue last week",
      rows: _index__WEBPACK_IMPORTED_MODULE_3__/* .rows */ .Ge,
      headers: _index__WEBPACK_IMPORTED_MODULE_3__/* .headers */ .b3,
      rowKey: function rowKey(row) {
        return row[0].value;
      }
    })
  });
};
var NoDataCustomMessage = function NoDataCustomMessage() {
  return /*#__PURE__*/ /* @ts-expect-error: size must be one of small, medium, largel, xSmall, extraSmall. */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    size: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      caption: "Revenue last week",
      rows: [],
      headers: _index__WEBPACK_IMPORTED_MODULE_3__/* .headers */ .b3,
      rowKey: function rowKey(row) {
        return row[0].value;
      },
      emptyMessage: "Custom empty message"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Table',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <Card size={null}>\n        <Table caption=\"Revenue last week\" rows={rows} headers={headers} rowKey={row => row[0].value} />\n    </Card>",
      ...Basic.parameters?.docs?.source
    }
  }
};
NoDataCustomMessage.parameters = {
  ...NoDataCustomMessage.parameters,
  docs: {
    ...NoDataCustomMessage.parameters?.docs,
    source: {
      originalSource: "() => {\n  return /* @ts-expect-error: size must be one of small, medium, largel, xSmall, extraSmall. */<Card size={null}>\n            <Table caption=\"Revenue last week\" rows={[]} headers={headers} rowKey={row => row[0].value} emptyMessage=\"Custom empty message\" />\n        </Card>;\n}",
      ...NoDataCustomMessage.parameters?.docs?.source
    }
  }
};

/***/ })

}]);