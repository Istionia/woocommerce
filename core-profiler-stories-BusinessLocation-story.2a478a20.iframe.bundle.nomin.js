"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1950],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/components/geolocation-country-select/geolocation-country-select.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ GeolocationCountrySelect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+element@6.0.1/node_modules/@wordpress/element/build-module/create-interpolate-element.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/notice/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../packages/js/components/src/select-control/index.tsx");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../packages/js/onboarding/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");






/**
 * External dependencies
 */







/**
 * Internal dependencies
 */

var GeolocationCountrySelect = function GeolocationCountrySelect(_ref) {
  var countries = _ref.countries,
    geolocatedLocation = _ref.geolocatedLocation,
    initialValue = _ref.initialValue,
    label = _ref.label,
    placeholder = _ref.placeholder,
    _onChange = _ref.onChange,
    onGeolocationOverruledChange = _ref.onGeolocationOverruledChange;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)(initialValue),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_useState, 2),
    selectedCountry = _useState2[0],
    setSelectedCountry = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)({
      key: '',
      label: ''
    }),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_useState3, 2),
    geolocationMatch = _useState4[0],
    setGeolocationMatch = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_useState5, 2),
    dismissedNotice = _useState6[0],
    setDismissedNotice = _useState6[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    setSelectedCountry(initialValue);
  }, [initialValue]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (geolocatedLocation) {
      var match = (0,_woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_6__/* .findCountryOption */ .b$)(countries, geolocatedLocation);
      if (match) {
        setGeolocationMatch(match);
        if (!(initialValue !== null && initialValue !== void 0 && initialValue.key)) {
          setSelectedCountry(match);
          _onChange(match);
        }
      }
    }
  }, [countries, geolocatedLocation, initialValue === null || initialValue === void 0 ? void 0 : initialValue.key]);
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_useState7, 2),
    geolocationOverruled = _useState8[0],
    setGeolocationOverruled = _useState8[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    var overruled = Boolean(geolocatedLocation && (0,_woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_6__/* .getCountry */ .JJ)(selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.key) !== (0,_woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_6__/* .getCountry */ .JJ)(geolocationMatch === null || geolocationMatch === void 0 ? void 0 : geolocationMatch.key));
    setGeolocationOverruled(overruled);
    onGeolocationOverruledChange === null || onGeolocationOverruledChange === void 0 || onGeolocationOverruledChange(overruled);
  }, [selectedCountry, geolocationMatch, geolocatedLocation]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "woocommerce-geolocation-country-select",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      className: "woocommerce-profiler-select-control__country",
      instanceId: 2,
      placeholder: placeholder,
      label: selectedCountry.key === '' ? label : '',
      ignoreDiacritics: true,
      getSearchExpression: function getSearchExpression(query) {
        return new RegExp("(^".concat(query, "| \u2014 (").concat(query, "))"), 'i');
      },
      options: countries,
      help: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A
      }),
      onChange: function onChange(results) {
        if (Array.isArray(results) && results.length) {
          _onChange === null || _onChange === void 0 || _onChange(results[0]);
        }
      },
      selected: selectedCountry ? [selectedCountry] : [],
      showAllOnFocus: true,
      isSearchable: true,
      virtualScroll: true,
      virtualItemHeight: 40,
      virtualListHeight: 40 * 9
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "woocommerce-profiler-select-control__country-spacer"
    }), geolocationOverruled && !dismissedNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      className: "woocommerce-profiler-geolocation-notice",
      onRemove: function onRemove() {
        return setDismissedNotice(true);
      },
      status: "warning",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('It looks like you’re located in <geolocatedCountry></geolocatedCountry>. Are you sure you want to create a store in <selectedCountry></selectedCountry>?', 'woocommerce'), {
          geolocatedCountry: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, {
            className: "geolocation-notice-geolocated-country",
            variant: "link",
            onClick: function onClick() {
              setSelectedCountry(geolocationMatch);
              _onChange(geolocationMatch);
            },
            children: geolocatedLocation === null || geolocatedLocation === void 0 ? void 0 : geolocatedLocation.country_long
          }),
          selectedCountry: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "geolocation-notice-selected-country",
            children: selectedCountry.label
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Setting up your store in the wrong country may lead to the following issues:', 'woocommerce')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        className: "woocommerce-profiler-geolocation-notice__list",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Tax and duty obligations', 'woocommerce')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Payment issues', 'woocommerce')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Shipping issues', 'woocommerce')
        })]
      })]
    })]
  });
};
try {
    // @ts-ignore
    GeolocationCountrySelect.displayName = "GeolocationCountrySelect";
    // @ts-ignore
    GeolocationCountrySelect.__docgenInfo = { "description": "", "displayName": "GeolocationCountrySelect", "props": { "countries": { "defaultValue": null, "description": "", "name": "countries", "required": true, "type": { "name": "CountryStateOption[]" } }, "geolocatedLocation": { "defaultValue": null, "description": "", "name": "geolocatedLocation", "required": false, "type": { "name": "GeolocationResponse | null" } }, "initialValue": { "defaultValue": null, "description": "", "name": "initialValue", "required": true, "type": { "name": "CountryStateOption" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(country: CountryStateOption) => void" } }, "onGeolocationOverruledChange": { "defaultValue": null, "description": "", "name": "onGeolocationOverruledChange", "required": false, "type": { "name": "((overruled: boolean) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/geolocation-country-select/geolocation-country-select.tsx#GeolocationCountrySelect"] = { docgenInfo: GeolocationCountrySelect.__docgenInfo, name: "GeolocationCountrySelect", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/geolocation-country-select/geolocation-country-select.tsx#GeolocationCountrySelect" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var Heading = function Heading(_ref) {
  var className = _ref.className,
    title = _ref.title,
    subTitle = _ref.subTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('woocommerce-profiler-heading', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      className: "woocommerce-profiler-heading__title",
      children: title
    }), subTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      className: "woocommerce-profiler-heading__subtitle",
      children: subTitle
    })]
  });
};
try {
    // @ts-ignore
    Heading.displayName = "Heading";
    // @ts-ignore
    Heading.__docgenInfo = { "description": "", "displayName": "Heading", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string | Element" } }, "subTitle": { "defaultValue": null, "description": "", "name": "subTitle", "required": false, "type": { "name": "string | Element" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx#Heading"] = { docgenInfo: Heading.__docgenInfo, name: "Heading", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx#Heading" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/woologo.tsx

/* eslint-disable max-len */
var WooLogo = function WooLogo() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "91",
    height: "24",
    viewBox: "0 0 91 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "wc-icon wc-icon__woo-logo new-branding",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M79.0537 0C72.2755 0 67.0874 5.10851 67.0874 12C67.0874 18.8915 72.2755 24 79.0537 24C85.832 24 91.0002 18.8915 91.0002 12C91.0002 5.10851 85.7923 0 79.0537 0ZM79.0537 16.6277C76.5094 16.6277 74.7602 14.6644 74.7602 12C74.7602 9.33555 76.4895 7.37228 79.0537 7.37228C81.6179 7.37228 83.3473 9.33555 83.3473 12C83.3473 14.6644 81.5981 16.6277 79.0537 16.6277Z",
      fill: "#873DFF"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M53.7285 0C46.9503 0 41.7622 5.10851 41.7622 12C41.7622 18.8915 46.9701 24 53.7285 24C60.4869 24 65.675 18.8915 65.675 12C65.675 5.10851 60.4671 0 53.7285 0ZM53.7285 16.6277C51.1842 16.6277 49.435 14.6644 49.435 12C49.435 9.33555 51.1643 7.37228 53.7285 7.37228C56.2928 7.37228 58.0221 9.33555 58.0221 12C58.0221 14.6644 56.2928 16.6277 53.7285 16.6277Z",
      fill: "#873DFF"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M11.688 24C14.3715 24 16.5183 22.6577 18.1483 19.5726L21.7461 12.7813V18.5509C21.7461 21.9365 23.9327 24 27.3317 24C29.9556 24 31.8837 22.798 33.792 19.5726L42.1207 5.44908C43.9494 2.36394 42.6574 0 38.6421 0C36.4953 0 35.1039 0.721201 33.8516 3.08514L28.107 13.9232V4.28714C28.107 1.40234 26.7553 0 24.2308 0C22.2629 0 20.6926 0.861435 19.4602 3.26544L14.0535 13.9032V4.38731C14.0535 1.30217 12.8012 0 9.74004 0H3.53822C1.19266 0 0 1.10184 0 3.14524C0 5.18864 1.23241 6.33054 3.53822 6.33054H6.08255V18.5309C6.10243 21.9365 8.3486 24 11.688 24Z",
      fill: "#873DFF"
    })]
  });
};
/* eslint-enable max-len */

/* harmony default export */ const woologo = (WooLogo);
;// ../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var ProgressBar = function ProgressBar(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 0 : _ref$percent,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#674399' : _ref$color,
    _ref$bgcolor = _ref.bgcolor,
    bgcolor = _ref$bgcolor === void 0 ? 'var(--wp-admin-theme-color)' : _ref$bgcolor;
  var containerStyles = {
    backgroundColor: bgcolor
  };
  var fillerStyles = {
    backgroundColor: color,
    width: "".concat(percent, "%"),
    display: percent === 0 ? 'none' : 'inherit'
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-profiler-progress-bar ".concat(className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-profiler-progress-bar__container",
      style: containerStyles,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-progress-bar__filler",
        style: fillerStyles
      })
    })
  });
};
/* harmony default export */ const progress_bar = (ProgressBar);
try {
    // @ts-ignore
    progressbar.displayName = "progressbar";
    // @ts-ignore
    progressbar.__docgenInfo = { "description": "", "displayName": "progressbar", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "percent": { "defaultValue": { value: "0" }, "description": "", "name": "percent", "required": false, "type": { "name": "number" } }, "color": { "defaultValue": { value: "#674399" }, "description": "", "name": "color", "required": false, "type": { "name": "string" } }, "bgcolor": { "defaultValue": { value: "var(--wp-admin-theme-color)" }, "description": "", "name": "bgcolor", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx#progressbar"] = { docgenInfo: progressbar.__docgenInfo, name: "progressbar", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx#progressbar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var Navigation = function Navigation(_ref) {
  var _ref$percentage = _ref.percentage,
    percentage = _ref$percentage === void 0 ? 0 : _ref$percentage,
    onSkip = _ref.onSkip,
    _ref$skipText = _ref.skipText,
    skipText = _ref$skipText === void 0 ? (0,build_module.__)('Skip this step', 'woocommerce') : _ref$skipText,
    _ref$showProgress = _ref.showProgress,
    showProgress = _ref$showProgress === void 0 ? true : _ref$showProgress,
    _ref$showLogo = _ref.showLogo,
    showLogo = _ref$showLogo === void 0 ? true : _ref$showLogo,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    _ref$progressBarColor = _ref.progressBarColor,
    progressBarColor = _ref$progressBarColor === void 0 ? 'var(--wp-admin-theme-color)' : _ref$progressBarColor;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,clsx/* default */.A)('woocommerce-profiler-navigation-container', classNames),
    children: [showProgress && /*#__PURE__*/(0,jsx_runtime.jsx)(progress_bar, {
      className: 'progress-bar',
      percent: percentage,
      color: progressBarColor,
      bgcolor: 'transparent'
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-navigation",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-navigation-col-left",
        children: showLogo && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "woologo",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(woologo, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-navigation-col-right",
        children: typeof onSkip === 'function' && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          onClick: onSkip,
          className: (0,clsx/* default */.A)('woocommerce-profiler-navigation-skip-link', classNames.mobile ? 'mobile' : ''),
          isLink: true,
          children: skipText
        })
      })]
    })]
  });
};
try {
    // @ts-ignore
    Navigation.displayName = "Navigation";
    // @ts-ignore
    Navigation.__docgenInfo = { "description": "", "displayName": "Navigation", "props": { "onSkip": { "defaultValue": null, "description": "", "name": "onSkip", "required": false, "type": { "name": "(() => void)" } }, "percentage": { "defaultValue": { value: "0" }, "description": "", "name": "percentage", "required": false, "type": { "name": "number" } }, "previous": { "defaultValue": null, "description": "", "name": "previous", "required": false, "type": { "name": "string" } }, "showProgress": { "defaultValue": { value: "true" }, "description": "", "name": "showProgress", "required": false, "type": { "name": "boolean" } }, "showLogo": { "defaultValue": { value: "true" }, "description": "", "name": "showLogo", "required": false, "type": { "name": "boolean" } }, "classNames": { "defaultValue": { value: "{}" }, "description": "", "name": "classNames", "required": false, "type": { "name": "{ mobile?: boolean; }" } }, "skipText": { "defaultValue": { value: "__( 'Skip this step', 'woocommerce' )" }, "description": "", "name": "skipText", "required": false, "type": { "name": "string" } }, "progressBarColor": { "defaultValue": { value: "var(--wp-admin-theme-color)" }, "description": "", "name": "progressBarColor", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx#Navigation"] = { docgenInfo: Navigation.__docgenInfo, name: "Navigation", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx#Navigation" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/stories/BusinessLocation.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  "default": () => (/* binding */ BusinessLocation_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/notice/index.js
var notice = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/notice/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+element@6.0.1/node_modules/@wordpress/element/build-module/create-interpolate-element.js
var create_interpolate_element = __webpack_require__("../../node_modules/.pnpm/@wordpress+element@6.0.1/node_modules/@wordpress/element/build-module/create-interpolate-element.js");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx
var heading = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx + 2 modules
var navigation = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/geolocation-country-select/geolocation-country-select.tsx
var geolocation_country_select = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/geolocation-country-select/geolocation-country-select.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/BusinessLocation.tsx

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





var BusinessLocation = function BusinessLocation(_ref) {
  var sendEvent = _ref.sendEvent,
    navigationProgress = _ref.navigationProgress,
    context = _ref.context;
  var _useState = (0,react.useState)({
      key: '',
      label: ''
    }),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    storeCountry = _useState2[0],
    setStoreCountry = _useState2[1];
  var inputLabel = (0,build_module.__)('Select country/region', 'woocommerce');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-profiler-business-location",
    "data-testid": "core-profiler-business-location",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(navigation/* Navigation */.V, {
      percentage: navigationProgress
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-page__content woocommerce-profiler-business-location__content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* Heading */.D, {
        className: "woocommerce-profiler__stepper-heading",
        title: (0,build_module.__)('Where is your business located?', 'woocommerce'),
        subTitle: (0,build_module.__)('We’ll use this information to help you set up payments, shipping, and taxes.', 'woocommerce')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(geolocation_country_select/* GeolocationCountrySelect */.p, {
        countries: context.countries,
        initialValue: storeCountry,
        label: inputLabel,
        geolocatedLocation: context.geolocatedLocation,
        placeholder: inputLabel,
        onChange: function onChange(countryStateOption) {
          setStoreCountry(countryStateOption);
        }
      }), context.countries.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(notice/* default */.A, {
        className: "woocommerce-profiler-select-control__country-error",
        isDismissible: false,
        status: "error",
        children: (0,create_interpolate_element/* default */.A)((0,build_module.__)('Oops! We encountered a problem while fetching the list of countries to choose from. <retryButton/> or <skipButton/>', 'woocommerce'), {
          retryButton: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick() {
              sendEvent({
                type: 'RETRY_COUNTRIES_LIST'
              });
            },
            variant: "tertiary",
            children: (0,build_module.__)('Please try again', 'woocommerce')
          }),
          skipButton: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick() {
              sendEvent({
                type: 'BUSINESS_LOCATION_COMPLETED',
                payload: {
                  storeLocation: 'US:CA'
                }
              });
            },
            variant: "tertiary",
            children: (0,build_module.__)('Skip this step', 'woocommerce')
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-button-container woocommerce-profiler-go-to-mystore__button-container",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          className: "woocommerce-profiler-button",
          variant: "primary",
          disabled: !storeCountry.key,
          onClick: function onClick() {
            sendEvent({
              type: 'BUSINESS_LOCATION_COMPLETED',
              payload: {
                storeLocation: storeCountry.key
              }
            });
          },
          children: (0,build_module.__)('Go to my store', 'woocommerce')
        })
      })]
    })]
  });
};
try {
    // @ts-ignore
    BusinessLocation.displayName = "BusinessLocation";
    // @ts-ignore
    BusinessLocation.__docgenInfo = { "description": "", "displayName": "BusinessLocation", "props": { "sendEvent": { "defaultValue": null, "description": "", "name": "sendEvent", "required": true, "type": { "name": "(event: BusinessLocationEvent) => void" } }, "navigationProgress": { "defaultValue": null, "description": "", "name": "navigationProgress", "required": true, "type": { "name": "number" } }, "context": { "defaultValue": null, "description": "", "name": "context", "required": true, "type": { "name": "Pick<CoreProfilerStateMachineContext, \"countries\" | \"geolocatedLocation\">" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/BusinessLocation.tsx#BusinessLocation"] = { docgenInfo: BusinessLocation.__docgenInfo, name: "BusinessLocation", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/BusinessLocation.tsx#BusinessLocation" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx
var WithSetupWizardLayout = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/stories/BusinessLocation.story.tsx
/**
 * Internal dependencies
 */




var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BusinessLocation, {
    sendEvent: function sendEvent() {},
    navigationProgress: 80,
    context: {
      countries: [{
        key: 'US',
        label: 'United States'
      }],
      geolocatedLocation: undefined
    }
  });
};
/* harmony default export */ const BusinessLocation_story = ({
  title: 'WooCommerce Admin/Core Profiler/Business Location',
  component: BusinessLocation,
  decorators: [WithSetupWizardLayout/* WithSetupWizardLayout */.b]
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <BusinessLocation sendEvent={() => {}} navigationProgress={80} context={{\n  countries: [{\n    key: 'US',\n    label: 'United States'\n  }],\n  geolocatedLocation: undefined\n}} />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);