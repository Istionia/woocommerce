"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5452],{

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

/***/ "../../packages/js/components/src/pagination/page-size-picker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ PageSizePicker),
/* harmony export */   v: () => (/* binding */ DEFAULT_PER_PAGE_OPTIONS)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");





/**
 * External dependencies
 */



var DEFAULT_PER_PAGE_OPTIONS = [25, 50, 75, 100];
function PageSizePicker(_ref) {
  var perPage = _ref.perPage,
    currentPage = _ref.currentPage,
    total = _ref.total,
    setCurrentPage = _ref.setCurrentPage,
    _ref$setPerPageChange = _ref.setPerPageChange,
    setPerPageChange = _ref$setPerPageChange === void 0 ? function () {} : _ref$setPerPageChange,
    _ref$perPageOptions = _ref.perPageOptions,
    perPageOptions = _ref$perPageOptions === void 0 ? DEFAULT_PER_PAGE_OPTIONS : _ref$perPageOptions,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rows per page', 'woocommerce') : _ref$label;
  function perPageChange(newPerPage) {
    setPerPageChange(parseInt(newPerPage, 10));
    var newMaxPage = Math.ceil(total / parseInt(newPerPage, 10));
    if (currentPage > newMaxPage) {
      setCurrentPage(newMaxPage);
    }
  }

  // @todo Replace this with a styleized Select drop-down/control?
  var pickerOptions = perPageOptions.map(function (option) {
    return {
      value: option.toString(),
      label: option.toString()
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "woocommerce-pagination__per-page-picker",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      label: label,
      labelPosition: "side",
      value: perPage.toString(),
      onChange: perPageChange,
      options: pickerOptions
    })
  });
}
try {
    // @ts-ignore
    PageSizePicker.displayName = "PageSizePicker";
    // @ts-ignore
    PageSizePicker.__docgenInfo = { "description": "", "displayName": "PageSizePicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "perPage": { "defaultValue": null, "description": "", "name": "perPage", "required": true, "type": { "name": "number" } }, "total": { "defaultValue": null, "description": "", "name": "total", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } }, "setPerPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "setPerPageChange", "required": false, "type": { "name": "((perPage: number) => void)" } }, "perPageOptions": { "defaultValue": { value: "[ 25, 50, 75, 100 ]" }, "description": "", "name": "perPageOptions", "required": false, "type": { "name": "number[]" } }, "label": { "defaultValue": { value: "__( 'Rows per page', 'woocommerce' )" }, "description": "", "name": "label", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-size-picker.tsx#PageSizePicker"] = { docgenInfo: PageSizePicker.__docgenInfo, name: "PageSizePicker", path: "../../packages/js/components/src/pagination/page-size-picker.tsx#PageSizePicker" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/pagination/pagination.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ Pagination)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js + 1 modules
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/pagination/page-arrows.tsx
/**
 * External dependencies
 */





function PageArrows(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    _ref$showPageArrowsLa = _ref.showPageArrowsLabel,
    showPageArrowsLabel = _ref$showPageArrowsLa === void 0 ? true : _ref$showPageArrowsLa,
    setCurrentPage = _ref.setCurrentPage;
  function previousPage(event) {
    event.stopPropagation();
    if (currentPage - 1 < 1) {
      return;
    }
    setCurrentPage(currentPage - 1, 'previous');
  }
  function nextPage(event) {
    event.stopPropagation();
    if (currentPage + 1 > pageCount) {
      return;
    }
    setCurrentPage(currentPage + 1, 'next');
  }
  if (pageCount <= 1) {
    return null;
  }
  var previousLinkClass = (0,clsx/* default */.A)('woocommerce-pagination__link', {
    'is-active': currentPage > 1
  });
  var nextLinkClass = (0,clsx/* default */.A)('woocommerce-pagination__link', {
    'is-active': currentPage < pageCount
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-pagination__page-arrows",
    children: [showPageArrowsLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "woocommerce-pagination__page-arrows-label",
      role: "status",
      "aria-live": "polite",
      children: (0,build_module/* sprintf */.nv)(/* translators: 1: current page number, 2: total number of pages */
      (0,build_module.__)('Page %1$d of %2$d', 'woocommerce'), currentPage, pageCount)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-pagination__page-arrows-buttons",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: previousLinkClass,
        disabled: !(currentPage > 1),
        onClick: previousPage,
        label: (0,build_module.__)('Previous Page', 'woocommerce'),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: chevron_left/* default */.A
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: nextLinkClass,
        disabled: !(currentPage < pageCount),
        onClick: nextPage,
        label: (0,build_module.__)('Next Page', 'woocommerce'),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: chevron_right/* default */.A
        })
      })]
    })]
  });
}
try {
    // @ts-ignore
    PageArrows.displayName = "PageArrows";
    // @ts-ignore
    PageArrows.__docgenInfo = { "description": "", "displayName": "PageArrows", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "showPageArrowsLabel": { "defaultValue": { value: "true" }, "description": "", "name": "showPageArrowsLabel", "required": false, "type": { "name": "boolean" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-arrows.tsx#PageArrows"] = { docgenInfo: PageArrows.__docgenInfo, name: "PageArrows", path: "../../packages/js/components/src/pagination/page-arrows.tsx#PageArrows" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../../packages/js/components/src/pagination/page-picker.tsx



/**
 * External dependencies
 */





function PagePicker(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage;
  var _useState = (0,react.useState)(currentPage),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  function onInputChange(event) {
    setInputValue(parseInt(event.currentTarget.value, 10));
  }
  function onInputBlur(event) {
    var newPage = parseInt(event.target.value, 10);
    if (newPage !== currentPage && Number.isFinite(newPage) && newPage > 0 && pageCount && pageCount >= newPage) {
      setCurrentPage(newPage, 'goto');
    }
  }
  function selectInputValue(event) {
    event.currentTarget.select();
  }
  var isError = currentPage < 1 || currentPage > pageCount;
  var inputClass = (0,clsx/* default */.A)('woocommerce-pagination__page-picker-input', {
    'has-error': isError
  });
  var instanceId = (0,lodash.uniqueId)('woocommerce-pagination-page-picker-');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-pagination__page-picker",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
      htmlFor: instanceId,
      className: "woocommerce-pagination__page-picker-label",
      children: [(0,build_module.__)('Go to page', 'woocommerce'), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        id: instanceId,
        className: inputClass,
        "aria-invalid": isError,
        type: "number",
        onClick: selectInputValue,
        onChange: onInputChange,
        onBlur: onInputBlur,
        value: inputValue,
        min: 1,
        max: pageCount
      })]
    })
  });
}
try {
    // @ts-ignore
    PagePicker.displayName = "PagePicker";
    // @ts-ignore
    PagePicker.__docgenInfo = { "description": "", "displayName": "PagePicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-picker.tsx#PagePicker"] = { docgenInfo: PagePicker.__docgenInfo, name: "PagePicker", path: "../../packages/js/components/src/pagination/page-picker.tsx#PagePicker" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/page-size-picker.tsx
var page_size_picker = __webpack_require__("../../packages/js/components/src/pagination/page-size-picker.tsx");
;// ../../packages/js/components/src/pagination/pagination.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function Pagination(_ref) {
  var page = _ref.page,
    _ref$onPageChange = _ref.onPageChange,
    onPageChange = _ref$onPageChange === void 0 ? function () {} : _ref$onPageChange,
    total = _ref.total,
    perPage = _ref.perPage,
    _ref$onPerPageChange = _ref.onPerPageChange,
    onPerPageChange = _ref$onPerPageChange === void 0 ? function () {} : _ref$onPerPageChange,
    _ref$showPagePicker = _ref.showPagePicker,
    showPagePicker = _ref$showPagePicker === void 0 ? true : _ref$showPagePicker,
    _ref$showPerPagePicke = _ref.showPerPagePicker,
    showPerPagePicker = _ref$showPerPagePicke === void 0 ? true : _ref$showPerPagePicke,
    _ref$showPageArrowsLa = _ref.showPageArrowsLabel,
    showPageArrowsLabel = _ref$showPageArrowsLa === void 0 ? true : _ref$showPageArrowsLa,
    className = _ref.className,
    _ref$perPageOptions = _ref.perPageOptions,
    perPageOptions = _ref$perPageOptions === void 0 ? page_size_picker/* DEFAULT_PER_PAGE_OPTIONS */.v : _ref$perPageOptions,
    children = _ref.children;
  var pageCount = Math.ceil(total / perPage);
  if (children && typeof children === 'function') {
    return children({
      pageCount: pageCount
    });
  }
  var classes = (0,clsx/* default */.A)('woocommerce-pagination', className);
  if (pageCount <= 1) {
    return total > perPageOptions[0] && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classes,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, {
        currentPage: page,
        perPage: perPage,
        setCurrentPage: onPageChange,
        total: total,
        setPerPageChange: onPerPageChange,
        perPageOptions: perPageOptions
      })
    }) || null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PageArrows, {
      currentPage: page,
      pageCount: pageCount,
      showPageArrowsLabel: showPageArrowsLabel,
      setCurrentPage: onPageChange
    }), showPagePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(PagePicker, {
      currentPage: page,
      pageCount: pageCount,
      setCurrentPage: onPageChange
    }), showPerPagePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, {
      currentPage: page,
      perPage: perPage,
      setCurrentPage: onPageChange,
      total: total,
      setPerPageChange: onPerPageChange,
      perPageOptions: perPageOptions
    })]
  });
}
try {
    // @ts-ignore
    Pagination.displayName = "Pagination";
    // @ts-ignore
    Pagination.__docgenInfo = { "description": "", "displayName": "Pagination", "props": { "page": { "defaultValue": null, "description": "", "name": "page", "required": true, "type": { "name": "number" } }, "perPage": { "defaultValue": null, "description": "", "name": "perPage", "required": true, "type": { "name": "number" } }, "total": { "defaultValue": null, "description": "", "name": "total", "required": true, "type": { "name": "number" } }, "onPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onPageChange", "required": false, "type": { "name": "((page: number, action?: \"next\" | \"previous\" | \"goto\") => void)" } }, "onPerPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onPerPageChange", "required": false, "type": { "name": "((perPage: number) => void)" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "showPagePicker": { "defaultValue": { value: "true" }, "description": "", "name": "showPagePicker", "required": false, "type": { "name": "boolean" } }, "showPerPagePicker": { "defaultValue": { value: "true" }, "description": "", "name": "showPerPagePicker", "required": false, "type": { "name": "boolean" } }, "showPageArrowsLabel": { "defaultValue": { value: "true" }, "description": "", "name": "showPageArrowsLabel", "required": false, "type": { "name": "boolean" } }, "perPageOptions": { "defaultValue": { value: "[ 25, 50, 75, 100 ]" }, "description": "", "name": "perPageOptions", "required": false, "type": { "name": "number[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/pagination.tsx#Pagination"] = { docgenInfo: Pagination.__docgenInfo, name: "Pagination", path: "../../packages/js/components/src/pagination/pagination.tsx#Pagination" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/pagination/stories/pagination.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomWithHook: () => (/* binding */ CustomWithHook),
  Default: () => (/* binding */ Default),
  "default": () => (/* binding */ pagination_story)
});

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/pagination.tsx + 2 modules
var pagination = __webpack_require__("../../packages/js/components/src/pagination/pagination.tsx");
;// ../../packages/js/components/src/pagination/use-pagination.ts

/**
 * External dependencies
 */

function usePagination(_ref) {
  var totalCount = _ref.totalCount,
    _ref$defaultPerPage = _ref.defaultPerPage,
    defaultPerPage = _ref$defaultPerPage === void 0 ? 25 : _ref$defaultPerPage,
    onPageChange = _ref.onPageChange,
    onPerPageChange = _ref.onPerPageChange;
  var _useState = (0,react.useState)(1),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    currentPage = _useState2[0],
    _setCurrentPage = _useState2[1];
  var _useState3 = (0,react.useState)(defaultPerPage),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    perPage = _useState4[0],
    setPerPage = _useState4[1];
  var pageCount = Math.ceil(totalCount / perPage);
  var start = perPage * (currentPage - 1) + 1;
  var end = Math.min(perPage * currentPage, totalCount);
  return {
    start: start,
    end: end,
    currentPage: currentPage,
    perPage: perPage,
    pageCount: pageCount,
    setCurrentPage: function setCurrentPage(newPage) {
      _setCurrentPage(newPage);
      if (onPageChange) {
        onPageChange(newPage);
      }
    },
    setPerPageChange: function setPerPageChange(newPerPage) {
      _setCurrentPage(1);
      setPerPage(newPerPage);
      if (onPerPageChange) {
        onPerPageChange(newPerPage);
      }
    }
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/pagination/page-arrows-with-picker.tsx



/**
 * External dependencies
 */







function PageArrowsWithPicker(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage;
  var _useState = (0,react.useState)(currentPage),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  (0,react.useEffect)(function () {
    if (currentPage !== inputValue) {
      setInputValue(currentPage);
    }
  }, [currentPage]);
  function onInputChange(event) {
    setInputValue(parseInt(event.currentTarget.value, 10));
  }
  function onInputBlur(event) {
    var newPage = parseInt(event.target.value, 10);
    if (newPage !== currentPage && Number.isFinite(newPage) && newPage > 0 && pageCount && pageCount >= newPage) {
      setCurrentPage(newPage, 'goto');
    } else {
      setInputValue(currentPage);
    }
  }
  function previousPage(event) {
    event.stopPropagation();
    if (currentPage - 1 < 1) {
      return;
    }
    setInputValue(currentPage - 1);
    setCurrentPage(currentPage - 1, 'previous');
  }
  function nextPage(event) {
    event.stopPropagation();
    if (currentPage + 1 > pageCount) {
      return;
    }
    setInputValue(currentPage + 1);
    setCurrentPage(currentPage + 1, 'next');
  }
  if (pageCount <= 1) {
    return null;
  }
  var previousLinkClass = (0,clsx/* default */.A)('woocommerce-pagination__link', {
    'is-active': currentPage > 1
  });
  var nextLinkClass = (0,clsx/* default */.A)('woocommerce-pagination__link', {
    'is-active': currentPage < pageCount
  });
  var isError = currentPage < 1 || currentPage > pageCount;
  var inputClass = (0,clsx/* default */.A)('woocommerce-pagination__page-arrow-picker-input', {
    'has-error': isError
  });
  var instanceId = (0,lodash.uniqueId)('woocommerce-pagination-page-picker-');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-pagination__page-arrows",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      className: previousLinkClass,
      icon: chevron_left/* default */.A,
      disabled: !(currentPage > 1),
      onClick: previousPage,
      label: (0,build_module.__)('Previous Page', 'woocommerce')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      id: instanceId,
      className: inputClass,
      "aria-invalid": isError,
      type: "number",
      onChange: onInputChange,
      onBlur: onInputBlur,
      value: inputValue,
      min: 1,
      max: pageCount
    }), (0,build_module/* sprintf */.nv)(/* translators: %d: total number of pages */
    (0,build_module.__)('of %d', 'woocommerce'), pageCount), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      className: nextLinkClass,
      icon: chevron_right/* default */.A,
      disabled: !(currentPage < pageCount),
      onClick: nextPage,
      label: (0,build_module.__)('Next Page', 'woocommerce')
    })]
  });
}
try {
    // @ts-ignore
    PageArrowsWithPicker.displayName = "PageArrowsWithPicker";
    // @ts-ignore
    PageArrowsWithPicker.__docgenInfo = { "description": "", "displayName": "PageArrowsWithPicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-arrows-with-picker.tsx#PageArrowsWithPicker"] = { docgenInfo: PageArrowsWithPicker.__docgenInfo, name: "PageArrowsWithPicker", path: "../../packages/js/components/src/pagination/page-arrows-with-picker.tsx#PageArrowsWithPicker" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/page-size-picker.tsx
var page_size_picker = __webpack_require__("../../packages/js/components/src/pagination/page-size-picker.tsx");
;// ../../packages/js/components/src/pagination/stories/pagination.story.js












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


/* harmony default export */ const pagination_story = ({
  title: 'Components/Pagination',
  component: pagination/* Pagination */.d,
  args: {
    total: 500,
    showPagePicker: true,
    showPerPagePicker: true,
    showPageArrowsLabel: true
  },
  argTypes: {
    onPageChange: {
      action: 'onPageChange'
    },
    onPerPageChange: {
      action: 'onPerPageChange'
    }
  }
});
var Default = function Default(args) {
  var _useState = (0,react.useState)(2),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    statePage = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0,react.useState)(50),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    statePerPage = _useState4[0],
    setPerPage = _useState4[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* Pagination */.d, _objectSpread({
    page: statePage,
    perPage: statePerPage,
    onPageChange: function onPageChange(newPage) {
      return setPage(newPage);
    },
    onPerPageChange: function onPerPageChange(newPerPage) {
      return setPerPage(newPerPage);
    }
  }, args));
};
var CustomWithHook = function CustomWithHook(args) {
  var paginationProps = usePagination({
    totalCount: args.total,
    defaultPerPage: 25,
    onPageChange: args.onPageChange,
    onPerPageChange: args.onPerPageChange
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["Viewing ", paginationProps.start, "-", paginationProps.end, " of", ' ', args.total, " items"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PageArrowsWithPicker, _objectSpread({}, paginationProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, _objectSpread(_objectSpread({}, paginationProps), {}, {
      total: args.total,
      perPageOptions: [5, 10, 25],
      label: ""
    }))]
  });
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [statePage, setPage] = useState(2);\n  const [statePerPage, setPerPage] = useState(50);\n  return <Pagination page={statePage} perPage={statePerPage} onPageChange={newPage => setPage(newPage)} onPerPageChange={newPerPage => setPerPage(newPerPage)} {...args} />;\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
CustomWithHook.parameters = {
  ...CustomWithHook.parameters,
  docs: {
    ...CustomWithHook.parameters?.docs,
    source: {
      originalSource: "args => {\n  const paginationProps = usePagination({\n    totalCount: args.total,\n    defaultPerPage: 25,\n    onPageChange: args.onPageChange,\n    onPerPageChange: args.onPerPageChange\n  });\n  return <div>\n            <div>\n                Viewing {paginationProps.start}-{paginationProps.end} of{' '}\n                {args.total} items\n            </div>\n            <PaginationPageArrowsWithPicker {...paginationProps} />\n            <PaginationPageSizePicker {...paginationProps} total={args.total} perPageOptions={[5, 10, 25]} label=\"\" />\n        </div>;\n}",
      ...CustomWithHook.parameters?.docs?.source
    }
  }
};

/***/ })

}]);