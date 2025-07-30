"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5239],{

/***/ "./setting.mock.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getSetting)
/* harmony export */ });
// @woocommerce/settings mocked module for storybook webpack resolve.alias config
// see ./webpack.config.js

function getSetting() {
  return {};
}

/***/ }),

/***/ "../../packages/js/components/src/link/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ Link)
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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../packages/js/navigation/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");












var _excluded = ["href", "children", "type"];
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



// eslint-disable-next-line @typescript-eslint/no-explicit-any
// we don't want to restrict this function at all

/**
 * Use `Link` to create a link to another resource. It accepts a type to automatically
 * create wp-admin links, wc-admin links, and external links.
 */
var Link = function Link(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'wc-admin' : _ref$type,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(_ref, _excluded);
  // ( { children, href, type, ...props } ) => {
  // @todo Investigate further if we can use <Link /> directly.
  // With React Router 5+, <RouterLink /> cannot be used outside of the main <Router /> elements,
  // which seems to include components imported from @woocommerce/components. For now, we can use the history object directly.
  var wcAdminLinkHandler = function wcAdminLinkHandler(onClick, event) {
    // If cmd, ctrl, alt, or shift are used, use default behavior to allow opening in a new tab.
    if (event !== null && event !== void 0 && event.ctrlKey || event !== null && event !== void 0 && event.metaKey || event !== null && event !== void 0 && event.altKey || event !== null && event !== void 0 && event.shiftKey) {
      return;
    }
    event === null || event === void 0 || event.preventDefault();

    // If there is an onclick event, execute it.
    var onClickResult = onClick && event ? onClick(event) : true;

    // Mimic browser behavior and only continue if onClickResult is not explicitly false.
    if (onClickResult === false) {
      return;
    }
    if ((event === null || event === void 0 ? void 0 : event.target) instanceof Element) {
      var _event$target$closest;
      var closestEventTarget = (_event$target$closest = event.target.closest('a')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.getAttribute('href');
      if (closestEventTarget) {
        (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__/* .getHistory */ .JK)().push(closestEventTarget);
      } else {
        // eslint-disable-next-line no-console
        console.error('@woocommerce/components/link is trying to push an undefined state into navigation stack'); // This shouldn't happen as we wrap with <a> below
      }
    }
  };
  var passProps = _objectSpread(_objectSpread({}, props), {}, {
    'data-link-type': type
  });
  if (type === 'wc-admin') {
    passProps.onClick = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.partial)(wcAdminLinkHandler, passProps.onClick);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a", _objectSpread(_objectSpread({
    href: href
  }, passProps), {}, {
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
try {
    // @ts-ignore
    Link.displayName = "Link";
    // @ts-ignore
    Link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "Link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#Link"] = { docgenInfo: Link.__docgenInfo, name: "Link", path: "../../packages/js/components/src/link/index.tsx#Link" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    link.displayName = "link";
    // @ts-ignore
    link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#link"] = { docgenInfo: link.__docgenInfo, name: "link", path: "../../packages/js/components/src/link/index.tsx#link" };
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

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ WithSetupWizardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

var WithSetupWizardLayout = function WithSetupWizardLayout(Story) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "woocommerce-profile-wizard__body woocommerce-admin-full-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {})
  });
};
try {
    // @ts-ignore
    WithSetupWizardLayout.displayName = "WithSetupWizardLayout";
    // @ts-ignore
    WithSetupWizardLayout.__docgenInfo = { "description": "", "displayName": "WithSetupWizardLayout", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx#WithSetupWizardLayout"] = { docgenInfo: WithSetupWizardLayout.__docgenInfo, name: "WithSetupWizardLayout", path: "../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx#WithSetupWizardLayout" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/stories/Plugins.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  InstallationError: () => (/* binding */ InstallationError),
  InstallationErrorBanner: () => (/* binding */ InstallationErrorBanner),
  InstallationNoPermissionError: () => (/* binding */ InstallationNoPermissionError),
  TermsOfService: () => (/* binding */ TermsOfService),
  "default": () => (/* binding */ Plugins_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.set.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/esnext.string.replace-all.js
var esnext_string_replace_all = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/esnext.string.replace-all.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js
var use_media_query = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx
var heading = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx + 2 modules
var navigation = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js
var checkbox_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/link/index.tsx
var src_link = __webpack_require__("../../packages/js/components/src/link/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js
var purify = __webpack_require__("../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js");
;// ../../plugins/woocommerce/client/admin/client/lib/sanitize-html/index.js
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ const sanitize_html = (function (html) {
  return {
    __html: (0,purify.sanitize)(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-card/plugin-card.tsx







/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



var _PluginCard = function PluginCard(_ref) {
  var _ref$plugin = _ref.plugin,
    _ref$plugin$is_activa = _ref$plugin.is_activated,
    installed = _ref$plugin$is_activa === void 0 ? false : _ref$plugin$is_activa,
    imageUrl = _ref$plugin.image_url,
    pluginKey = _ref$plugin.key,
    title = _ref$plugin.label,
    description = _ref$plugin.description,
    learnMoreLinkUrl = _ref$plugin.learn_more_link,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    children = _ref.children;
  var learnMoreLink = null;
  var slug = pluginKey.replace(':alt', '');
  react.Children.forEach(children, function (child) {
    if ((0,react.isValidElement)(child) && child.type === _PluginCard.LearnMoreLink) {
      learnMoreLink = (0,react.cloneElement)(child, {
        // @ts-expect-error -- @types/react is deficient here
        learnMoreLink: learnMoreLinkUrl
      });
    }
  });
  var descriptionText = (0,react.useMemo)(function () {
    var descriptionElement = document.createElement('div');
    descriptionElement.innerHTML = description;
    return descriptionElement.textContent || '';
  }, [description]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
    className: (0,clsx/* default */.A)('woocommerce-profiler-plugins-plugin-card', {
      'is-installed': installed,
      disabled: disabled
    }),
    "data-slug": slug,
    htmlFor: "".concat(pluginKey, "-checkbox"),
    children: [!installed && /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control/* default */.A, {
      __nextHasNoMarginBottom: true,
      id: "".concat(pluginKey, "-checkbox"),
      className: "woocommerce-profiler__checkbox",
      disabled: disabled,
      checked: checked,
      onChange: function onChange(event) {
        if (!disabled) {
          _onChange(event);
        }
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-plugins-plugin-card-main",
      children: [imageUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        className: "woocommerce-profiler-plugins-plugin-card-logo",
        src: imageUrl,
        alt: pluginKey
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "woocommerce-profiler-plugins-plugin-card-content",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,clsx/* default */.A)('woocommerce-profiler-plugins-plugin-card-text-header', {
            installed: installed
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: "woocommerce-profiler-plugins-plugin-card-title",
            children: title
          }), installed && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: (0,build_module.__)('Installed', 'woocommerce')
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "woocommerce-profiler-plugins-plugin-card-text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            dangerouslySetInnerHTML: sanitize_html(description),
            title: descriptionText
          }), learnMoreLink]
        })]
      })]
    })]
  });
};

_PluginCard.LearnMoreLink = function (_ref2) {
  var learnMoreLink = _ref2.learnMoreLink,
    _onClick = _ref2.onClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src_link/* Link */.N, {
    onClick: function onClick(event) {
      if (typeof _onClick === 'function') {
        _onClick(event);
      }
    },
    href: learnMoreLink !== null && learnMoreLink !== void 0 ? learnMoreLink : '',
    target: "_blank",
    type: "external",
    children: (0,build_module.__)('Learn More', 'woocommerce')
  });
};
try {
    // @ts-ignore
    PluginCard.displayName = "PluginCard";
    // @ts-ignore
    PluginCard.__docgenInfo = { "description": "", "displayName": "PluginCard", "props": { "plugin": { "defaultValue": null, "description": "", "name": "plugin", "required": true, "type": { "name": "Pick<Extension, \"label\" | \"key\" | \"description\" | \"is_activated\" | \"image_url\" | \"learn_more_link\">" } }, "installed": { "defaultValue": null, "description": "", "name": "installed", "required": false, "type": { "name": "boolean" } }, "onChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onChange", "required": false, "type": { "name": "((arg0: unknown) => void)" } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "checked": { "defaultValue": { value: "false" }, "description": "", "name": "checked", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-card/plugin-card.tsx#PluginCard"] = { docgenInfo: PluginCard.__docgenInfo, name: "PluginCard", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-card/plugin-card.tsx#PluginCard" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    LearnMoreLink.displayName = "PluginCard.LearnMoreLink";
    // @ts-ignore
    LearnMoreLink.__docgenInfo = { "description": "", "displayName": "PluginCard.LearnMoreLink", "props": { "learnMoreLink": { "defaultValue": null, "description": "", "name": "learnMoreLink", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLAnchorElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-card/plugin-card.tsx#PluginCard.LearnMoreLink"] = { docgenInfo: PluginCard.LearnMoreLink.__docgenInfo, name: "PluginCard.LearnMoreLink", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-card/plugin-card.tsx#PluginCard.LearnMoreLink" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ./setting.mock.js
var setting_mock = __webpack_require__("./setting.mock.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.get.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js");
;// ../../plugins/woocommerce/client/admin/client/utils/plugins.ts


function getPluginSlug(id) {
  return (id || '').split(':', 1)[0];
}
function getPluginTrackKey(id) {
  var slug = getPluginSlug(id);
  var key = /^woocommerce(-|_)payments$/.test(slug) ? 'wcpay' : "".concat(slug.replace(/-/g, '_')).split(':', 1)[0];
  return key;
}
;// ../../plugins/woocommerce/client/admin/client/utils/index.js















/**
 * External dependencies
 */



/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce(function (params, query) {
      var chunks = query.split('=');
      var key = chunks[0];
      var value = decodeURIComponent(chunks[1]);
      value = isNaN(Number(value)) ? value : Number(value);
      return params[key] = value, params;
    }, {});
  }
  return {};
}

/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */
function getScreenName() {
  var screenName = '';
  var _getUrlParams = getUrlParams(window.location.search),
    page = _getUrlParams.page,
    path = _getUrlParams.path,
    postType = _getUrlParams.post_type;
  if (page) {
    var currentPage = page === 'wc-admin' ? 'home_screen' : page;
    screenName = path ? path.replace(/\//g, '_').substring(1) : currentPage;
  } else if (postType) {
    screenName = postType;
  }
  return screenName;
}

/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array}    arr         - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */
var sift = function sift(arr, partitioner) {
  return arr.reduce(function (all, curr) {
    all[!!partitioner(curr) ? 0 : 1].push(curr);
    return all;
  }, [[], []]);
};
var timeFrames = [{
  name: '0-2s',
  max: 2
}, {
  name: '2-5s',
  max: 5
}, {
  name: '5-10s',
  max: 10
}, {
  name: '10-15s',
  max: 15
}, {
  name: '15-20s',
  max: 20
}, {
  name: '20-30s',
  max: 30
}, {
  name: '30-60s',
  max: 60
}, {
  name: '>60s'
}];

/**
 * Returns time frame for a given time in milliseconds.
 *
 * @param {number} timeInMs - time in milliseconds
 *
 * @return {string} - Time frame.
 */
var getTimeFrame = function getTimeFrame(timeInMs) {
  for (var _i = 0, _timeFrames = timeFrames; _i < _timeFrames.length; _i++) {
    var timeFrame = _timeFrames[_i];
    if (!timeFrame.max) {
      return timeFrame.name;
    }
    if (timeInMs < timeFrame.max * 1000) {
      return timeFrame.name;
    }
  }
};

/**
 * Goes into fullscreen mode when the component is loaded
 *
 * @param {string[]} classes - classes to add to document.body
 */
var useFullScreen = function useFullScreen(classes) {
  useEffect(function () {
    var hasToolbarClass = document.documentElement.classList.contains('wp-toolbar');
    document.body.classList.remove('woocommerce-admin-is-loading');
    document.body.classList.add(classes);
    document.body.classList.add('woocommerce-admin-full-screen');
    document.body.classList.add('is-wp-toolbar-disabled');
    if (hasToolbarClass) {
      document.documentElement.classList.remove('wp-toolbar');
    }
    return function () {
      document.body.classList.remove(classes);
      document.body.classList.remove('woocommerce-admin-full-screen');
      document.body.classList.remove('is-wp-toolbar-disabled');
      if (hasToolbarClass) {
        document.documentElement.classList.add('wp-toolbar');
      }
    };
  });
};

/**
 * Creates a proxy object that warns when accessing deprecated properties.
 *
 * Example object:
 * {
 *   prop1: "test",
 *   prop2: {
 *     prop3: "test"
 *   }
 * }
 *
 * Example messages object:
 * {
 *   prop1: {
 *     prop2: 'Deprecation message'
 *   }
 * }
 *
 * Accessing `obj.prop1.prop2` will trigger a warning in the console.
 *
 * @param {Object} obj           - The object to wrap with a proxy.
 * @param {Object} messages      - Deprecation messages for specific properties.
 * @param {string} [basePath=''] - Internal tracking for property paths.
 * @return {Proxy} A proxied object with deprecation warnings.
 */
function createDeprecatedPropertiesProxy(obj, messages) {
  var basePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  // If not a plain object or array, return as is
  if (_typeof(obj) !== 'object' || obj === null) {
    return obj;
  }
  return new Proxy(obj, {
    get: function get(target, prop, receiver) {
      var value = Reflect.get(target, prop, receiver);

      // Handle array methods and properties
      if (Array.isArray(target) && (prop === 'length' || prop === Symbol.iterator)) {
        return value;
      }
      var nextPath = basePath;

      // Only handle deprecation warnings for string, number, and boolean property names
      if (typeof prop === 'string' || typeof prop === 'number' || typeof prop === 'boolean') {
        nextPath = basePath ? "".concat(basePath, ".").concat(String(prop)) : String(prop);

        // Retrieve the deprecation message (if exists)
        var deprecationMessage = nextPath.split('.').reduce(function (acc, key) {
          return acc && _typeof(acc) === 'object' ? acc[key] : undefined;
        }, messages);
        if (typeof deprecationMessage === 'string') {
          console.warn(deprecationMessage); // eslint-disable-line no-console
        }
      }

      // Recursively wrap objects to maintain deprecation checks
      return value && _typeof(value) === 'object' ? createDeprecatedPropertiesProxy(value, messages, nextPath) : value;
    }
  });
}
;// ../../plugins/woocommerce/client/admin/client/utils/admin-settings.js




/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


// Remove mutable data from settings object to prevent access. Data stores should be used instead.
var mutableSources = ['wcAdminSettings', 'preloadSettings'];
var adminSettings = (0,setting_mock/* getSetting */.P)('admin', {});
var ADMIN_SETTINGS_SOURCE = Object.keys(adminSettings).reduce(function (source, key) {
  if (!mutableSources.includes(key)) {
    source[key] = adminSettings[key];
  }
  return source;
}, {});
var deprecatedAdminProperties = {
  onboarding: {
    profile: 'Deprecated: wcSettings.admin.onboarding.profile is deprecated. It is planned to be released in WooCommerce 10.0.0. Please use `getProfileItems` from the onboarding store. See https://github.com/woocommerce/woocommerce/tree/trunk/packages/js/data/src/onboarding for more information.',
    euCountries: 'Deprecated: wcSettings.admin.onboarding.euCountries is deprecated. Please use `/wc/v3/data/continents/eu` from the REST API. See https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-continents for more information.',
    localInfo: 'Deprecated: wcSettings.admin.onboarding.localInfo is deprecated. Please use `include WC()->plugin_path() . "/i18n/locale-info.php"` instead.',
    currencySymbols: '"Deprecated: wcSettings.admin.onboarding.currencySymbols is deprecated. Please use get_woocommerce_currency_symbols() function instead.'
  }
};

/**
 * Retrieves a setting value from the setting state.
 *
 * @param {string}   name                    The identifier for the setting.
 * @param {*}        [fallback=false]        The value to use as a fallback
 *                                           if the setting is not in the
 *                                           state.
 * @param {Function} [filter=( val ) => val] A callback for filtering the
 *                                           value before it's returned.
 *                                           Receives both the found value
 *                                           (if it exists for the key) and
 *                                           the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */
function getAdminSetting(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  var deprecatedProperties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : deprecatedAdminProperties;
  if (mutableSources.includes(name)) {
    throw new Error((0,build_module.__)('Mutable settings should be accessed via data store.', 'woocommerce'));
  }
  var value = ADMIN_SETTINGS_SOURCE.hasOwnProperty(name) ? ADMIN_SETTINGS_SOURCE[name] : fallback;
  var filtered = filter(value, fallback);

  // Return proxied object if the requested object has deprecated properties.
  return deprecatedProperties !== null && deprecatedProperties !== void 0 && deprecatedProperties[name] && "production" === 'development' ? 0 : filtered;
}
var ADMIN_URL = (0,setting_mock/* getSetting */.P)('adminUrl');
var COUNTRIES = (0,setting_mock/* getSetting */.P)('countries');
var CURRENCY = (0,setting_mock/* getSetting */.P)('currency');
var LOCALE = (0,setting_mock/* getSetting */.P)('locale');
var SITE_TITLE = (0,setting_mock/* getSetting */.P)('siteTitle');
var WC_ASSET_URL = (0,setting_mock/* getSetting */.P)('wcAssetUrl');
var ORDER_STATUSES = getAdminSetting('orderStatuses');

/**
 * Sets a value to a property on the settings state.
 *
 * NOTE: This feature is to be removed in favour of data stores when a full migration
 * is complete.
 *
 * @deprecated
 *
 * @param {string}   name                    The setting property key for the
 *                                           setting being mutated.
 * @param {*}        value                   The value to set.
 * @param {Function} [filter=( val ) => val] Allows for providing a callback
 *                                           to sanitize the setting (eg.
 *                                           ensure it's a number)
 */
function setAdminSetting(name, value) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  if (mutableSources.includes(name)) {
    throw new Error(__('Mutable settings should be mutated via data store.', 'woocommerce'));
  }
  ADMIN_SETTINGS_SOURCE[name] = filter(value);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js + 1 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-error-banner/PluginErrorBanner.tsx









/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var PluginErrorBanner = function PluginErrorBanner(_ref) {
  var pluginsInstallationPermissionsFailure = _ref.pluginsInstallationPermissionsFailure,
    pluginsInstallationErrors = _ref.pluginsInstallationErrors,
    _ref$pluginsSlugToNam = _ref.pluginsSlugToName,
    pluginsSlugToName = _ref$pluginsSlugToNam === void 0 ? {} : _ref$pluginsSlugToNam,
    onClick = _ref.onClick;
  var installationErrorMessage;
  switch (true) {
    case pluginsInstallationPermissionsFailure:
    case pluginsInstallationErrors === null || pluginsInstallationErrors === void 0 ? void 0 : pluginsInstallationErrors.some(
    // it really shouldn't get here since permissions are pre-checked. but we'll check for 403 just to be safe.
    function (e) {
      var _e$errorDetails;
      return ((_e$errorDetails = e.errorDetails) === null || _e$errorDetails === void 0 || (_e$errorDetails = _e$errorDetails.data) === null || _e$errorDetails === void 0 || (_e$errorDetails = _e$errorDetails.data) === null || _e$errorDetails === void 0 ? void 0 : _e$errorDetails.status) === 403;
    } // 403 is the code representing rest_authorization_required_code()
    ):
      installationErrorMessage = (0,build_module.__)('You do not have permissions to install plugins. Please contact your site administrator.', 'woocommerce');
      break;
    default:
      installationErrorMessage =
      // Translators: %s is a list of plugins that does not need to be translated
      (0,build_module.__)('Oops! We encountered a problem while installing %s. {{link}}Please try again{{/link}}.', 'woocommerce');
      break;
  }
  var failedPluginNames = (0,toConsumableArray/* default */.A)(new Set((pluginsInstallationErrors || []).map(
  // Use the plugin name if available, otherwise use the plugin slug
  function (error) {
    return pluginsSlugToName[error.plugin] || error.plugin;
  })));
  return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    className: "plugin-error",
    children: (0,esm/* default */.A)({
      mixedString: (0,build_module/* sprintf */.nv)(installationErrorMessage, joinWithAnd(failedPluginNames).map(composeListFormatParts).join('')),
      components: {
        span: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {}),
        link: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          variant: "link",
          onClick: onClick
        })
      }
    })
  });
};
try {
    // @ts-ignore
    PluginErrorBanner.displayName = "PluginErrorBanner";
    // @ts-ignore
    PluginErrorBanner.__docgenInfo = { "description": "", "displayName": "PluginErrorBanner", "props": { "pluginsInstallationPermissionsFailure": { "defaultValue": null, "description": "", "name": "pluginsInstallationPermissionsFailure", "required": false, "type": { "name": "boolean" } }, "pluginsInstallationErrors": { "defaultValue": null, "description": "", "name": "pluginsInstallationErrors", "required": false, "type": { "name": "PluginInstallError[]" } }, "pluginsSlugToName": { "defaultValue": { value: "{}" }, "description": "", "name": "pluginsSlugToName", "required": false, "type": { "name": "Record<string, string>" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-error-banner/PluginErrorBanner.tsx#PluginErrorBanner"] = { docgenInfo: PluginErrorBanner.__docgenInfo, name: "PluginErrorBanner", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-error-banner/PluginErrorBanner.tsx#PluginErrorBanner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-terms-of-service/PluginsTermsOfService.tsx






/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var PluginsTermsOfService = function PluginsTermsOfService(_ref) {
  var selectedPlugins = _ref.selectedPlugins;
  var pluginsWithTOS = selectedPlugins.filter(function (plugin) {
    return ['jetpack', 'woocommerce-services:tax', 'woocommerce-shipping', 'woocommerce-tax', 'woocommerce-payments'].includes(plugin.key);
  });
  if (!pluginsWithTOS.length) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    className: "woocommerce-profiler-plugins-jetpack-agreement",
    children: (0,esm/* default */.A)({
      mixedString: (0,build_module/* sprintf */.nv)(/* translators: %s: a list of plugins, e.g. Jetpack */
      (0,build_module._n)('By installing %s plugin for free you agree to our {{link}}Terms of Service{{/link}}.', 'By installing %s plugins for free you agree to our {{link}}Terms of Service{{/link}}.', pluginsWithTOS.length, 'woocommerce'), joinWithAnd(pluginsWithTOS.map(function (plugin) {
        return plugin.name;
      })).map(composeListFormatParts).join('')),
      components: {
        span: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {}),
        link: /*#__PURE__*/(0,jsx_runtime.jsx)(src_link/* Link */.N, {
          href: "https://wordpress.com/tos/",
          target: "_blank",
          type: "external"
        })
      }
    })
  });
};
try {
    // @ts-ignore
    PluginsTermsOfService.displayName = "PluginsTermsOfService";
    // @ts-ignore
    PluginsTermsOfService.__docgenInfo = { "description": "", "displayName": "PluginsTermsOfService", "props": { "selectedPlugins": { "defaultValue": null, "description": "", "name": "selectedPlugins", "required": true, "type": { "name": "Extension[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-terms-of-service/PluginsTermsOfService.tsx#PluginsTermsOfService"] = { docgenInfo: PluginsTermsOfService.__docgenInfo, name: "PluginsTermsOfService", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/components/plugin-terms-of-service/PluginsTermsOfService.tsx#PluginsTermsOfService" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/Plugins.tsx

var _getAdminSetting;

















/**
 * External dependencies
 */






/**
 * Internal dependencies
 */








var currentLocale = (((_getAdminSetting = getAdminSetting('locale')) === null || _getAdminSetting === void 0 ? void 0 : _getAdminSetting.siteLocale) || 'en_US').replaceAll('_', '-');
var joinWithAnd = function joinWithAnd(items) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentLocale;
  try {
    return new Intl.ListFormat(locale, {
      style: 'long',
      type: 'conjunction'
    }).formatToParts(items);
  } catch (error) {
    // Fallback to English
    return new Intl.ListFormat('en-US', {
      style: 'long',
      type: 'conjunction'
    }).formatToParts(items);
  }
};
var composeListFormatParts = function composeListFormatParts(part) {
  if (part.type === 'element') {
    return '{{span}}' + part.value + '{{/span}}';
  }
  return part.value;
};
var computePluginsSelection = function computePluginsSelection(availablePlugins, selectedPlugins) {
  var selectedPluginSlugs = Array.from(selectedPlugins).map(function (plugin) {
    return plugin.key.replace(':alt', '');
  });
  var pluginsShown = [];
  var pluginsUnselected = [];
  availablePlugins.forEach(function (plugin) {
    var pluginSlug = plugin.key.replace(':alt', '');
    pluginsShown.push(pluginSlug);
    if (!plugin.is_activated && !selectedPluginSlugs.includes(pluginSlug)) {
      pluginsUnselected.push(pluginSlug);
    }
  });
  return {
    pluginsShown: pluginsShown,
    pluginsUnselected: pluginsUnselected,
    selectedPluginSlugs: selectedPluginSlugs
  };
};
var Plugins = function Plugins(_ref) {
  var context = _ref.context,
    navigationProgress = _ref.navigationProgress,
    sendEvent = _ref.sendEvent;
  var _useState = (0,react.useState)(new Set(context.pluginsAvailable.filter(context.pluginsInstallationErrors.length ? function (plugin) {
      return context.pluginsSelected.includes(plugin.key);
    } // if there was previously an error, retrieve previous selection
    : function (plugin) {
      return !plugin.is_activated;
    } // initialise selection with all plugins that haven't been installed
    ))),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    selectedPlugins = _useState2[0],
    setSelectedPlugins = _useState2[1];
  var setSelectedPlugin = function setSelectedPlugin(plugin) {
    if (selectedPlugins.has(plugin)) {
      selectedPlugins["delete"](plugin);
    } else {
      selectedPlugins.add(plugin);
    }
    setSelectedPlugins(new Set(selectedPlugins));
  };
  var skipPluginsPage = function skipPluginsPage() {
    return sendEvent({
      type: 'PLUGINS_PAGE_SKIPPED'
    });
  };
  var completedPluginsPageWithoutSelectingPlugins = function completedPluginsPageWithoutSelectingPlugins() {
    return sendEvent({
      type: 'PLUGINS_PAGE_COMPLETED_WITHOUT_SELECTING_PLUGINS'
    });
  };
  var submitInstallationRequest = function submitInstallationRequest() {
    var _computePluginsSelect = computePluginsSelection(context.pluginsAvailable, selectedPlugins),
      pluginsShown = _computePluginsSelect.pluginsShown,
      pluginsUnselected = _computePluginsSelect.pluginsUnselected,
      selectedPluginSlugs = _computePluginsSelect.selectedPluginSlugs;
    return sendEvent({
      type: 'PLUGINS_INSTALLATION_REQUESTED',
      payload: {
        pluginsShown: pluginsShown,
        pluginsSelected: selectedPluginSlugs,
        pluginsUnselected: pluginsUnselected
      }
    });
  };
  var pluginsCardRowCount = Math.ceil(context.pluginsAvailable.length / 2);
  var pluginsSlugToName = (0,react.useMemo)(function () {
    return context.pluginsAvailable.reduce(function (acc, plugin) {
      acc[plugin.key] = plugin.name;
      return acc;
    }, {});
  }, [context.pluginsAvailable]);
  var baseHeight = 350;
  var rowHeight = 100; // include the gap between the cards
  var listHeight = baseHeight + rowHeight * pluginsCardRowCount;
  var shouldShowStickyFooter = (0,use_media_query/* default */.A)("(max-height: ".concat(listHeight, "px)"));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-profiler-plugins",
    "data-testid": "core-profiler-plugins",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(navigation/* Navigation */.V, {
      percentage: navigationProgress,
      onSkip: skipPluginsPage
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-page__content woocommerce-profiler-plugins__content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* Heading */.D, {
        className: "woocommerce-profiler__stepper-heading",
        title: (0,build_module.__)('Get a boost with our free features', 'woocommerce'),
        subTitle: (0,build_module.__)('No commitment required – you can remove them at any time.', 'woocommerce')
      }), context.pluginsInstallationErrors.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(PluginErrorBanner, {
        pluginsInstallationErrors: context.pluginsInstallationErrors,
        pluginsSlugToName: pluginsSlugToName,
        onClick: submitInstallationRequest
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('woocommerce-profiler-plugins__list', {
          'sticky-footer': shouldShowStickyFooter
        }),
        children: context.pluginsAvailable.map(function (plugin) {
          var pluginSlug = plugin.key;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(_PluginCard, {
            plugin: plugin,
            onChange: function onChange() {
              if (!plugin.is_activated) {
                setSelectedPlugin(plugin);
              }
            },
            checked: selectedPlugins.has(plugin)
          }, pluginSlug);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('woocommerce-profiler-plugins__footer', {
          'sticky-footer': shouldShowStickyFooter
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-profiler-plugins-continue-button-container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            className: "woocommerce-profiler-plugins-continue-button",
            variant: "primary",
            onClick: selectedPlugins.size > 0 ? submitInstallationRequest : completedPluginsPageWithoutSelectingPlugins,
            children: (0,build_module.__)('Continue', 'woocommerce')
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PluginsTermsOfService, {
          selectedPlugins: Array.from(selectedPlugins)
        })]
      })]
    })]
  });
};
try {
    // @ts-ignore
    composeListFormatParts.displayName = "composeListFormatParts";
    // @ts-ignore
    composeListFormatParts.__docgenInfo = { "description": "", "displayName": "composeListFormatParts", "props": { "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "string" } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/Plugins.tsx#composeListFormatParts"] = { docgenInfo: composeListFormatParts.__docgenInfo, name: "composeListFormatParts", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/Plugins.tsx#composeListFormatParts" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Plugins.displayName = "Plugins";
    // @ts-ignore
    Plugins.__docgenInfo = { "description": "", "displayName": "Plugins", "props": { "context": { "defaultValue": null, "description": "", "name": "context", "required": true, "type": { "name": "Pick<CoreProfilerStateMachineContext, \"pluginsAvailable\" | \"pluginsInstallationErrors\" | \"pluginsSelected\">" } }, "sendEvent": { "defaultValue": null, "description": "", "name": "sendEvent", "required": true, "type": { "name": "(payload: PluginsInstallationRequestedEvent | PluginsPageSkippedEvent | PluginsPageCompletedWithoutSelectingPluginsEvent | PluginsLearnMoreLinkClickedEvent) => void" } }, "navigationProgress": { "defaultValue": null, "description": "", "name": "navigationProgress", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/Plugins.tsx#Plugins"] = { docgenInfo: Plugins.__docgenInfo, name: "Plugins", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/Plugins.tsx#Plugins" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/NoPermissions.tsx

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */






/** Page to be shown when the user does not have permissions to install plugins */

var NoPermissionsError = function NoPermissionsError(_ref) {
  var context = _ref.context,
    navigationProgress = _ref.navigationProgress,
    sendEvent = _ref.sendEvent;
  var skipPluginsPage = function skipPluginsPage() {
    return sendEvent({
      type: 'PLUGINS_PAGE_SKIPPED'
    });
  };
  var pluginsCardRowCount = Math.ceil(context.pluginsAvailable.length / 2);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-profiler-plugins",
    "data-testid": "core-profiler-plugins",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(navigation/* Navigation */.V, {
      percentage: navigationProgress,
      onSkip: skipPluginsPage
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-page__content woocommerce-profiler-plugins__content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading/* Heading */.D, {
        className: "woocommerce-profiler__stepper-heading",
        title: (0,build_module.__)('Get a boost with our free features', 'woocommerce'),
        subTitle: (0,build_module.__)('No commitment required – you can remove them at any time.', 'woocommerce')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PluginErrorBanner, {
        pluginsInstallationPermissionsFailure: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('woocommerce-profiler-plugins__list', "rows-".concat(pluginsCardRowCount)),
        children: context.pluginsAvailable.map(function (plugin) {
          var pluginSlug = plugin.key,
            learnMoreLink = plugin.learn_more_link;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(_PluginCard, {
            plugin: plugin,
            checked: false,
            disabled: true,
            children: learnMoreLink && /*#__PURE__*/(0,jsx_runtime.jsx)(_PluginCard.LearnMoreLink, {
              onClick: function onClick() {
                sendEvent({
                  type: 'PLUGINS_LEARN_MORE_LINK_CLICKED',
                  payload: {
                    plugin: pluginSlug,
                    learnMoreLink: learnMoreLink
                  }
                });
              }
            })
          }, pluginSlug);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('woocommerce-profiler-plugins__footer', "rows-".concat(pluginsCardRowCount)),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-profiler-plugins-continue-button-container",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            className: "woocommerce-profiler-plugins-continue-button",
            variant: "primary",
            onClick: skipPluginsPage,
            children: (0,build_module.__)('Continue', 'woocommerce')
          })
        })
      })]
    })]
  });
};
try {
    // @ts-ignore
    NoPermissionsError.displayName = "NoPermissionsError";
    // @ts-ignore
    NoPermissionsError.__docgenInfo = { "description": "Page to be shown when the user does not have permissions to install plugins", "displayName": "NoPermissionsError", "props": { "context": { "defaultValue": null, "description": "", "name": "context", "required": true, "type": { "name": "Pick<CoreProfilerStateMachineContext, \"pluginsAvailable\" | \"currentUser\">" } }, "sendEvent": { "defaultValue": null, "description": "", "name": "sendEvent", "required": true, "type": { "name": "(payload: PluginsInstallationRequestedEvent | PluginsPageSkippedEvent | PluginsLearnMoreLinkClickedEvent) => void" } }, "navigationProgress": { "defaultValue": null, "description": "", "name": "navigationProgress", "required": true, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/NoPermissions.tsx#NoPermissionsError"] = { docgenInfo: NoPermissionsError.__docgenInfo, name: "NoPermissionsError", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/Plugins/NoPermissions.tsx#NoPermissionsError" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx
var WithSetupWizardLayout = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx");
;// ../../plugins/woocommerce/client/admin/client/core-profiler/stories/Plugins.story.tsx
/**
 * Internal dependencies
 */







var plugins = [{
  name: 'Jetpack',
  description: 'Get auto real-time backups, malware scans, and spam protection.',
  is_visible: true,
  is_built_by_wc: false,
  min_wp_version: '6.0',
  key: 'jetpack',
  label: 'Enhance security with Jetpack',
  image_url: 'https://woocommerce.com/wp-content/plugins/wccom-plugins/obw-free-extensions/images/core-profiler/logo-jetpack.svg',
  learn_more_link: 'https://woocommerce.com/products/jetpack',
  install_priority: 8,
  is_installed: true,
  is_activated: true,
  manage_url: ''
}, {
  name: 'Pinterest for WooCommerce',
  description: 'Get your products in front of a highly engaged audience.',
  image_url: 'https://woocommerce.com/wp-content/plugins/wccom-plugins/obw-free-extensions/images/core-profiler/logo-pinterest.svg',
  manage_url: 'admin.php?page=wc-admin&path=%2Fpinterest%2Flanding',
  is_built_by_wc: true,
  min_php_version: '7.3',
  key: 'pinterest-for-woocommerce',
  label: 'Showcase your products with Pinterest',
  learn_more_link: 'https://woocommerce.com/products/pinterest-for-woocommerce',
  install_priority: 2,
  is_visible: true,
  is_installed: false,
  is_activated: false
}];
var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Plugins, {
    sendEvent: function sendEvent() {},
    navigationProgress: 80,
    context: {
      pluginsAvailable: plugins,
      pluginsSelected: [],
      pluginsInstallationErrors: []
    }
  });
};
var InstallationError = function InstallationError() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Plugins, {
    sendEvent: function sendEvent() {},
    navigationProgress: 80,
    context: {
      pluginsAvailable: plugins,
      pluginsSelected: [],
      pluginsInstallationErrors: [{
        plugin: 'Jetpack',
        errorDetails: {
          data: {
            code: 'plugin_install_failed',
            data: {
              status: 403
            }
          }
        },
        error: 'Installation failed'
      }]
    }
  });
};
var TermsOfService = function TermsOfService() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PluginsTermsOfService, {
    selectedPlugins: plugins
  });
};
var InstallationErrorBanner = function InstallationErrorBanner() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-profiler-plugins",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PluginErrorBanner, {
      pluginsInstallationPermissionsFailure: false,
      pluginsInstallationErrors: [{
        plugin: 'Jetpack',
        errorDetails: {
          data: {
            code: 'plugin_install_failed',
            data: {
              status: 403
            }
          }
        },
        error: 'Installation failed'
      }],
      onClick: function onClick() {}
    })
  });
};
var InstallationNoPermissionError = function InstallationNoPermissionError() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NoPermissionsError, {
    sendEvent: function sendEvent() {},
    navigationProgress: 80,
    context: {
      pluginsAvailable: plugins
    }
  });
};
/* harmony default export */ const Plugins_story = ({
  title: 'WooCommerce Admin/Core Profiler/Plugins',
  component: Plugins,
  decorators: [WithSetupWizardLayout/* WithSetupWizardLayout */.b]
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <Plugins sendEvent={() => {}} navigationProgress={80} context={{\n  pluginsAvailable: plugins,\n  pluginsSelected: [],\n  pluginsInstallationErrors: []\n}} />",
      ...Basic.parameters?.docs?.source
    }
  }
};
InstallationError.parameters = {
  ...InstallationError.parameters,
  docs: {
    ...InstallationError.parameters?.docs,
    source: {
      originalSource: "() => <Plugins sendEvent={() => {}} navigationProgress={80} context={{\n  pluginsAvailable: plugins,\n  pluginsSelected: [],\n  pluginsInstallationErrors: [{\n    plugin: 'Jetpack',\n    errorDetails: {\n      data: {\n        code: 'plugin_install_failed',\n        data: {\n          status: 403\n        }\n      }\n    },\n    error: 'Installation failed'\n  }]\n}} />",
      ...InstallationError.parameters?.docs?.source
    }
  }
};
TermsOfService.parameters = {
  ...TermsOfService.parameters,
  docs: {
    ...TermsOfService.parameters?.docs,
    source: {
      originalSource: "() => <PluginsTermsOfService selectedPlugins={plugins} />",
      ...TermsOfService.parameters?.docs?.source
    }
  }
};
InstallationErrorBanner.parameters = {
  ...InstallationErrorBanner.parameters,
  docs: {
    ...InstallationErrorBanner.parameters?.docs,
    source: {
      originalSource: "() => <div className=\"woocommerce-profiler-plugins\">\n        <PluginErrorBanner pluginsInstallationPermissionsFailure={false} pluginsInstallationErrors={[{\n    plugin: 'Jetpack',\n    errorDetails: {\n      data: {\n        code: 'plugin_install_failed',\n        data: {\n          status: 403\n        }\n      }\n    },\n    error: 'Installation failed'\n  }]} onClick={() => {}} />\n    </div>",
      ...InstallationErrorBanner.parameters?.docs?.source
    }
  }
};
InstallationNoPermissionError.parameters = {
  ...InstallationNoPermissionError.parameters,
  docs: {
    ...InstallationNoPermissionError.parameters?.docs,
    source: {
      originalSource: "() => <NoPermissionsError sendEvent={() => {}} navigationProgress={80} context={{\n  pluginsAvailable: plugins\n}} />",
      ...InstallationNoPermissionError.parameters?.docs?.source
    }
  }
};

/***/ })

}]);