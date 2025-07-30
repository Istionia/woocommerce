"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[4638],{

/***/ "../../packages/js/components/src/ellipsis-menu/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/ellipsis.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */






/**
 * This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.
 */

var EllipsisMenu = function EllipsisMenu(_ref) {
  var label = _ref.label,
    renderContent = _ref.renderContent,
    className = _ref.className,
    onToggle = _ref.onToggle,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
    _ref$focusOnMount = _ref.focusOnMount,
    focusOnMount = _ref$focusOnMount === void 0 ? 'firstElement' : _ref$focusOnMount;
  if (!renderContent) {
    return null;
  }
  var renderEllipsis = function renderEllipsis(_ref2) {
    var toggleHandlerOverride = _ref2.onToggle,
      isOpen = _ref2.isOpen;
    var toggleClassname = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('woocommerce-ellipsis-menu__toggle', {
      'is-opened': isOpen
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {
      className: toggleClassname,
      onClick: function onClick(e) {
        if (onToggle) {
          onToggle(e);
        }
        if (toggleHandlerOverride) {
          toggleHandlerOverride();
        }
      },
      title: label,
      "aria-expanded": isOpen,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {})
      })
    });
  };
  var renderMenu = function renderMenu(renderContentArgs) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
      className: "woocommerce-ellipsis-menu__content",
      children: renderContent(renderContentArgs)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className, 'woocommerce-ellipsis-menu'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      contentClassName: "woocommerce-ellipsis-menu__popover",
      popoverProps: {
        placement: placement,
        focusOnMount: focusOnMount
      },
      renderToggle: renderEllipsis,
      renderContent: renderMenu
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisMenu);
try {
    // @ts-ignore
    ellipsismenu.displayName = "ellipsismenu";
    // @ts-ignore
    ellipsismenu.__docgenInfo = { "description": "This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.", "displayName": "ellipsismenu", "props": { "label": { "defaultValue": null, "description": "The label shown when hovering/focusing on the icon button.", "name": "label", "required": true, "type": { "name": "string" } }, "renderContent": { "defaultValue": null, "description": "A function returning `MenuTitle`/`MenuItem` components as a render prop. Arguments from Dropdown passed as function arguments.", "name": "renderContent", "required": false, "type": { "name": "((props: CallbackProps) => Element | ReactNode)" } }, "className": { "defaultValue": null, "description": "Classname to add to ellipsis menu.", "name": "className", "required": false, "type": { "name": "string" } }, "onToggle": { "defaultValue": null, "description": "Callback function when dropdown button is clicked, it provides the click event.", "name": "onToggle", "required": false, "type": { "name": "((e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)" } }, "placement": { "defaultValue": { value: "bottom-start" }, "description": "Placement of the dropdown menu. Default is 'bottom-start'.", "name": "placement", "required": false, "type": { "name": "any" } }, "focusOnMount": { "defaultValue": { value: "firstElement" }, "description": "By default, the first menu item will receive focus. This is the same as setting this prop to \"firstElement\".\nSpecifying a true value will focus the container instead.\nSpecifying a false value disables the focus handling entirely\n(this should only be done when an appropriately accessible\nsubstitute behavior exists).", "name": "focusOnMount", "required": false, "type": { "name": "boolean | \"firstElement\"" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu"] = { docgenInfo: ellipsismenu.__docgenInfo, name: "ellipsismenu", path: "../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ VerticalCSSTransition)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

























var _excluded = ["children", "defaultStyle"];
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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
/**
 * External dependencies
 */



function getContainerHeight(container) {
  var containerHeight = 0;
  var _iterator = _createForOfIteratorHelper(container.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      containerHeight += child.clientHeight;
      var style = window.getComputedStyle(child);
      containerHeight += parseInt(style.marginTop, 10) || 0;
      containerHeight += parseInt(style.marginBottom, 10) || 0;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return containerHeight;
}

/**
 * VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.
 * The maxHeight is calculated through JS, something CSS does not support.
 */
var VerticalCSSTransition = function VerticalCSSTransition(_ref) {
  var _children = _ref.children,
    defaultStyle = _ref.defaultStyle,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(_ref, _excluded);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState, 2),
    containerHeight = _useState2[0],
    setContainerHeight = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(props["in"] || false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState3, 2),
    transitionIn = _useState4[0],
    setTransitionIn = _useState4[1];
  var cssTransitionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useRef)(null);
  var collapseContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useCallback)(function (containerElement) {
    if (containerElement) {
      setContainerHeight(getContainerHeight(containerElement));
    }
  }, [_children]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    setTransitionIn(props["in"] || false);
  }, [props["in"]]);
  var getTimeouts = function getTimeouts() {
    var timeout = props.timeout;
    var exit, enter, appear;
    if (typeof timeout === 'number') {
      exit = enter = appear = timeout;
    }
    if (timeout !== undefined && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };
  var transitionStyles = {
    entered: {
      maxHeight: containerHeight
    },
    entering: {
      maxHeight: containerHeight
    },
    exiting: {
      maxHeight: 0
    },
    exited: {
      maxHeight: 0
    }
  };
  var getTransitionStyle = function getTransitionStyle(state) {
    var timeouts = getTimeouts();
    var appearing = cssTransitionRef.current && cssTransitionRef.current.context && cssTransitionRef.current.context.isMounting;
    var duration;
    if (state.startsWith('enter')) {
      duration = timeouts[appearing ? 'enter' : 'appear'];
    } else {
      duration = timeouts.exit;
    }
    var styles = _objectSpread(_objectSpread({
      transitionProperty: 'max-height',
      transitionDuration: duration === undefined ? '500ms' : duration + 'ms',
      overflow: 'hidden'
    }, defaultStyle || {}), state in transitionStyles ? transitionStyles[state] : {});
    // only include transition styles when entering or exiting.
    if (state !== 'entering' && state !== 'exiting') {
      delete styles.transitionDuration;
      delete styles.transition;
      delete styles.transitionProperty;
    }
    // Remove maxHeight when entered, so we do not need to worry about nested items changing height while expanded.
    if (state === 'entered' && props["in"]) {
      delete styles.maxHeight;
    }
    return styles;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _objectSpread(_objectSpread({}, props), {}, {
    "in": transitionIn,
    ref: cssTransitionRef,
    children: function children(state) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        className: "vertical-css-transition-container",
        style: getTransitionStyle(state),
        ref: collapseContainerRef,
        children: _children
      });
    }
  }));
};
try {
    // @ts-ignore
    VerticalCSSTransition.displayName = "VerticalCSSTransition";
    // @ts-ignore
    VerticalCSSTransition.__docgenInfo = { "description": "VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.\nThe maxHeight is calculated through JS, something CSS does not support.", "displayName": "VerticalCSSTransition", "props": { "classNames": { "defaultValue": null, "description": "The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```", "name": "classNames", "required": false, "type": { "name": "string | CSSTransitionClassNames" } }, "defaultStyle": { "defaultValue": null, "description": "", "name": "defaultStyle", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition"] = { docgenInfo: VerticalCSSTransition.__docgenInfo, name: "VerticalCSSTransition", path: "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/experimental/src/experimental-list/stories/experimental-list.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CollapsibleListExample: () => (/* binding */ CollapsibleListExample),
  Primary: () => (/* binding */ Primary),
  TaskItemExample: () => (/* binding */ TaskItemExample),
  "default": () => (/* binding */ experimental_list_story)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/experimental/src/experimental-list/experimental-list.tsx


var _excluded = ["children", "listType", "animation"],
  _excluded2 = ["onExited", "in", "enter", "exit"];
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

var ExperimentalList = function ExperimentalList(_ref) {
  var children = _ref.children,
    listType = _ref.listType,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'none' : _ref$animation,
    otherProps = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, _objectSpread(_objectSpread({
    component: listType || 'ul',
    className: "woocommerce-experimental-list"
  }, otherProps), {}, {
    children: react.Children.map(children, function (child) {
      if ((0,react.isValidElement)(child)) {
        var _child$props = child.props,
          onExited = _child$props.onExited,
          inTransition = _child$props["in"],
          enter = _child$props.enter,
          exit = _child$props.exit,
          remainingProps = (0,objectWithoutProperties/* default */.A)(_child$props, _excluded2);
        var animationProp = remainingProps.animation || animation;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
          timeout: 500,
          onExited: onExited,
          "in": inTransition,
          enter: enter,
          exit: exit,
          classNames: "woocommerce-list__item",
          children: (0,react.cloneElement)(child, _objectSpread({
            animation: animationProp
          }, remainingProps))
        });
      }
      return child;
      // TODO - create a less restrictive type definition for children of react-transition-group. React.Children.map seems incompatible with the type expected by `children`.
    })
  }));
};
try {
    // @ts-ignore
    ExperimentalList.displayName = "ExperimentalList";
    // @ts-ignore
    ExperimentalList.__docgenInfo = { "description": "", "displayName": "ExperimentalList", "props": { "listType": { "defaultValue": null, "description": "", "name": "listType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"ol\"" }, { "value": "\"ul\"" }] } }, "animation": { "defaultValue": { value: "none" }, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"slide-right\"" }, { "value": "\"none\"" }, { "value": "\"custom\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/experimental-list.tsx#ExperimentalList"] = { docgenInfo: ExperimentalList.__docgenInfo, name: "ExperimentalList", path: "../../packages/js/experimental/src/experimental-list/experimental-list.tsx#ExperimentalList" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
;// ../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx


var experimental_list_item_excluded = ["children", "disableGutters", "animation", "className", "exit", "enter", "onExited", "in"];
function experimental_list_item_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function experimental_list_item_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? experimental_list_item_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : experimental_list_item_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}











/**
 * External dependencies
 */




function handleKeyDown(event, onClick) {
  if (typeof onClick === 'function' && event.keyCode === build_module/* ENTER */.Fm) {
    onClick(event);
  }
}
var ExperimentalListItem = function ExperimentalListItem(_ref) {
  var children = _ref.children,
    _ref$disableGutters = _ref.disableGutters,
    disableGutters = _ref$disableGutters === void 0 ? false : _ref$disableGutters,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'none' : _ref$animation,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    exit = _ref.exit,
    enter = _ref.enter,
    onExited = _ref.onExited,
    transitionIn = _ref["in"],
    otherProps = (0,objectWithoutProperties/* default */.A)(_ref, experimental_list_item_excluded);
  // for styling purposes only
  var hasAction = !!(otherProps !== null && otherProps !== void 0 && otherProps.onClick);
  var roleProps = hasAction ? {
    role: 'button',
    onKeyDown: function onKeyDown(e) {
      return handleKeyDown(e, otherProps.onClick);
    },
    tabIndex: 0
  } : {};
  var tagClasses = (0,clsx/* default */.A)({
    'has-action': hasAction,
    'has-gutters': !disableGutters,
    // since there is only one valid animation right now, any other value disables them.
    'transitions-disabled': animation !== 'slide-right'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
    timeout: 500,
    classNames: className || 'woocommerce-list__item',
    "in": transitionIn,
    exit: exit,
    enter: enter,
    onExited: onExited,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", experimental_list_item_objectSpread(experimental_list_item_objectSpread(experimental_list_item_objectSpread({}, roleProps), otherProps), {}, {
      className: "woocommerce-experimental-list__item ".concat(tagClasses, " ").concat(className),
      children: children
    }))
  });
};
try {
    // @ts-ignore
    ExperimentalListItem.displayName = "ExperimentalListItem";
    // @ts-ignore
    ExperimentalListItem.__docgenInfo = { "description": "", "displayName": "ExperimentalListItem", "props": { "disableGutters": { "defaultValue": { value: "false" }, "description": "", "name": "disableGutters", "required": false, "type": { "name": "boolean" } }, "animation": { "defaultValue": { value: "none" }, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"slide-right\"" }, { "value": "\"none\"" }, { "value": "\"custom\"" }] } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "in": { "defaultValue": null, "description": "", "name": "in", "required": false, "type": { "name": "boolean" } }, "exit": { "defaultValue": null, "description": "", "name": "exit", "required": false, "type": { "name": "boolean" } }, "enter": { "defaultValue": null, "description": "", "name": "enter", "required": false, "type": { "name": "boolean" } }, "onExited": { "defaultValue": null, "description": "", "name": "onExited", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx#ExperimentalListItem"] = { docgenInfo: ExperimentalListItem.__docgenInfo, name: "ExperimentalListItem", path: "../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx#ExperimentalListItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js
var chevron_up = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js");
;// ../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx























var collapsible_list_excluded = ["children", "collapsed", "collapseLabel", "expandLabel", "show", "onCollapse", "onExpand", "direction"],
  collapsible_list_excluded2 = ["onExited", "in", "enter", "exit"];
function collapsible_list_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function collapsible_list_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? collapsible_list_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : collapsible_list_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}









function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var defaultStyle = {
  transitionProperty: 'max-height',
  transitionDuration: '500ms',
  maxHeight: 0,
  overflow: 'hidden'
};
function getContainerHeight(collapseContainer) {
  var containerHeight = 0;
  if (collapseContainer) {
    var _iterator = _createForOfIteratorHelper(collapseContainer.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        containerHeight += child.clientHeight;
        var style = window.getComputedStyle(child);
        containerHeight += parseInt(style.marginTop, 10) || 0;
        containerHeight += parseInt(style.marginBottom, 10) || 0;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return containerHeight;
}

/**
 * This functions returns a new list of shown children depending on the new children updates.
 * If one is removed, it will remove it from the show array.
 * If one is added, it will add it back to the shown list, making use of the new children list to keep order.
 *
 * @param {Array.<import('react').ReactElement>} currentChildren      a list of the current children.
 * @param {Array.<import('react').ReactElement>} currentShownChildren a list of the current shown children.
 * @param {Array.<import('react').ReactElement>} newChildren          a list of the new children.
 * @return {Array.<import('react').ReactElement>} new list of children that should be shown.
 */
function getUpdatedShownChildren(currentChildren, currentShownChildren, newChildren) {
  if (newChildren.length < currentChildren.length) {
    var newChildrenKeys = newChildren.map(function (child) {
      return child.key;
    });
    // Filter out removed child
    return currentShownChildren.filter(function (item) {
      return item.key && newChildrenKeys.includes(item.key);
    });
  }
  var currentShownChildrenKeys = currentShownChildren.map(function (child) {
    return child.key;
  });
  var currentChildrenKeys = currentChildren.map(function (child) {
    return child.key;
  });
  // Add new child back in.
  return newChildren.filter(function (child) {
    return child.key && (currentShownChildrenKeys.includes(child.key) || !currentChildrenKeys.includes(child.key));
  });
}
var getTransitionStyle = function getTransitionStyle(state, isCollapsed, elementRef) {
  var maxHeight = 0;
  if ((state === 'entered' || state === 'entering') && elementRef) {
    maxHeight = getContainerHeight(elementRef);
  }
  var styles = collapsible_list_objectSpread(collapsible_list_objectSpread({}, defaultStyle), {}, {
    maxHeight: maxHeight
  });

  // only include transition styles when entering or exiting.
  if (state !== 'entering' && state !== 'exiting') {
    delete styles.transitionDuration;
    delete styles.transition;
    delete styles.transitionProperty;
  }
  // Remove maxHeight when entered, so we do not need to worry about nested items changing height while expanded.
  if (state === 'entered' && !isCollapsed) {
    delete styles.maxHeight;
  }
  return styles;
};
var ExperimentalCollapsibleList = function ExperimentalCollapsibleList(_ref) {
  var children = _ref.children,
    _ref$collapsed = _ref.collapsed,
    collapsed = _ref$collapsed === void 0 ? true : _ref$collapsed,
    collapseLabel = _ref.collapseLabel,
    expandLabel = _ref.expandLabel,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? 0 : _ref$show,
    onCollapse = _ref.onCollapse,
    onExpand = _ref.onExpand,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'up' : _ref$direction,
    listProps = (0,objectWithoutProperties/* default */.A)(_ref, collapsible_list_excluded);
  var _useState = (0,react.useState)(collapsed),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isCollapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0,react.useState)(collapsed),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    isTransitionComponentCollapsed = _useState4[0],
    setTransitionComponentCollapsed = _useState4[1];
  var _useState5 = (0,react.useState)({
      collapse: collapseLabel,
      expand: expandLabel
    }),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    footerLabels = _useState6[0],
    setFooterLabels = _useState6[1];
  var _useState7 = (0,react.useState)({
      all: [],
      shown: [],
      hidden: []
    }),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    displayedChildren = _useState8[0],
    setDisplayedChildren = _useState8[1];
  var collapseContainerRef = (0,react.useRef)(null);
  var updateChildren = function updateChildren() {
    var shownChildren = [];
    var allChildren = react.Children.map(children, function (child) {
      return (0,react.isValidElement)(child) && 'key' in child ? child : null;
    }) || [];
    var hiddenChildren = allChildren;
    if (show > 0) {
      shownChildren = allChildren.slice(0, show);
      hiddenChildren = allChildren.slice(show);
    }
    if (hiddenChildren.length > 0) {
      // Only update when footer will be shown, this way it won't update mid transition if the outer component
      // updates the label as well.
      setFooterLabels({
        expand: expandLabel,
        collapse: collapseLabel
      });
    }
    setDisplayedChildren({
      all: allChildren,
      shown: shownChildren,
      hidden: hiddenChildren
    });
  };

  // This allows for an extra render cycle that adds the maxHeight back in before the exiting transition.
  // This way the exiting transition still works correctly.
  (0,react.useEffect)(function () {
    setTransitionComponentCollapsed(isCollapsed);
  }, [isCollapsed]);
  (0,react.useEffect)(function () {
    var allChildren = react.Children.map(children, function (child) {
      return (0,react.isValidElement)(child) && 'key' in child ? child : null;
    }) || [];
    if (displayedChildren.all.length > 0 && isCollapsed && listProps.animation !== 'none') {
      setDisplayedChildren(collapsible_list_objectSpread(collapsible_list_objectSpread({}, displayedChildren), {}, {
        shown: getUpdatedShownChildren(displayedChildren.all, displayedChildren.shown, allChildren)
      }));
      // Update the hidden children after the remove/add transition is done, making the transition less busy.
      setTimeout(function () {
        updateChildren();
      }, 500);
    } else {
      updateChildren();
    }
  }, [children]);
  var triggerCallbacks = function triggerCallbacks(newCollapseValue) {
    if (onCollapse && newCollapseValue) {
      onCollapse();
    }
    if (onExpand && !newCollapseValue) {
      onExpand();
    }
  };
  var clickHandler = (0,react.useCallback)(function () {
    setCollapsed(!isCollapsed);
    triggerCallbacks(!isCollapsed);
  }, [isCollapsed]);
  var listClasses = (0,clsx/* default */.A)(listProps.className || '', 'woocommerce-experimental-list');
  var wrapperClasses = (0,clsx/* default */.A)({
    'woocommerce-experimental-list-wrapper': !isCollapsed
  });
  var hiddenChildren = displayedChildren.hidden.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalListItem, {
    className: "list-item-collapse",
    onClick: clickHandler,
    animation: "none",
    disableGutters: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: isCollapsed ? footerLabels.expand : footerLabels.collapse
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
      className: "list-item-collapse__icon",
      size: 30,
      icon: isCollapsed ? chevron_down/* default */.A : chevron_up/* default */.A
    })]
  }, "collapse-item") : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalList, collapsible_list_objectSpread(collapsible_list_objectSpread({}, listProps), {}, {
    className: listClasses,
    children: [direction === 'down' && hiddenChildren].concat((0,toConsumableArray/* default */.A)(displayedChildren.shown), [/*#__PURE__*/(0,jsx_runtime.jsx)(Transition/* default */.Ay, {
      timeout: 500,
      "in": !isTransitionComponentCollapsed,
      mountOnEnter: true,
      unmountOnExit: false,
      children: function children(state) {
        var transitionStyles = getTransitionStyle(state, isCollapsed, collapseContainerRef.current);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: wrapperClasses,
          ref: collapseContainerRef,
          style: transitionStyles,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
            className: "woocommerce-experimental-list",
            children: react.Children.map(displayedChildren.hidden, function (child) {
              var _child$props = child.props,
                onExited = _child$props.onExited,
                inTransition = _child$props["in"],
                enter = _child$props.enter,
                exit = _child$props.exit,
                remainingProps = (0,objectWithoutProperties/* default */.A)(_child$props, collapsible_list_excluded2);
              var animationProp = remainingProps.animation || listProps.animation;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
                timeout: 500,
                onExited: onExited,
                "in": inTransition,
                enter: enter,
                exit: exit,
                classNames: "woocommerce-list__item",
                children: (0,react.cloneElement)(child, collapsible_list_objectSpread({
                  animation: animationProp
                }, remainingProps))
              }, child.key);
            })
          })
        });
      }
    }, "remaining-children"), direction === 'up' && hiddenChildren])
  }));
};
try {
    // @ts-ignore
    ExperimentalCollapsibleList.displayName = "ExperimentalCollapsibleList";
    // @ts-ignore
    ExperimentalCollapsibleList.__docgenInfo = { "description": "", "displayName": "ExperimentalCollapsibleList", "props": { "collapseLabel": { "defaultValue": null, "description": "", "name": "collapseLabel", "required": true, "type": { "name": "string" } }, "expandLabel": { "defaultValue": null, "description": "", "name": "expandLabel", "required": true, "type": { "name": "string" } }, "collapsed": { "defaultValue": { value: "true" }, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "show": { "defaultValue": { value: "0" }, "description": "", "name": "show", "required": false, "type": { "name": "number" } }, "onCollapse": { "defaultValue": null, "description": "", "name": "onCollapse", "required": false, "type": { "name": "(() => void)" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "(() => void)" } }, "direction": { "defaultValue": { value: "up" }, "description": "", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"up\"" }, { "value": "\"down\"" }] } }, "listType": { "defaultValue": null, "description": "", "name": "listType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"ol\"" }, { "value": "\"ul\"" }] } }, "animation": { "defaultValue": null, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"slide-right\"" }, { "value": "\"none\"" }, { "value": "\"custom\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx#ExperimentalCollapsibleList"] = { docgenInfo: ExperimentalCollapsibleList.__docgenInfo, name: "ExperimentalCollapsibleList", path: "../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx#ExperimentalCollapsibleList" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js + 5 modules
var build_module_tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js");
// EXTERNAL MODULE: ../../packages/js/components/src/ellipsis-menu/index.tsx
var ellipsis_menu = __webpack_require__("../../packages/js/components/src/ellipsis-menu/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js
var purify = __webpack_require__("../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js
var components_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js");
;// ../../packages/js/experimental/src/index.js











function src_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function src_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? src_ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : src_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */


/**
 * Prioritize exports of non-experimental components over experimental.
 */
var Navigation = (/* unused pure expression or super */ null && (NavigationComponent || __experimentalNavigation));
var NavigationBackButton = (/* unused pure expression or super */ null && (NavigationBackButtonComponent || __experimentalNavigationBackButton));
var NavigationGroup = (/* unused pure expression or super */ null && (NavigationGroupComponent || __experimentalNavigationGroup));
var NavigationMenu = (/* unused pure expression or super */ null && (NavigationMenuComponent || __experimentalNavigationMenu));
var NavigationItem = (/* unused pure expression or super */ null && (NavigationItemComponent || __experimentalNavigationItem));
var Text = components_build_module.Text || component/* default */.A;

// Add a fallback for useSlotFills hook to not break in older versions of wp.components.
// This hook was introduced in wp.components@21.2.0.
var useSlotFills = (/* unused pure expression or super */ null && (useSlotFillsHook || function () {
  return null;
}));
var useSlot = function useSlot(name) {
  var _useSlot = useSlotHook || __experimentalUseSlot;
  var slot = _useSlot(name);
  var fills = useSlotFills(name);

  /*
   * Since wp.components@21.2.0, the slot object no longer contains the fills prop.
   * Add fills prop to the slot object for backward compatibility.
   */
  if (typeof useSlotFillsHook === 'function') {
    return src_objectSpread(src_objectSpread({}, slot), {}, {
      fills: fills
    });
  }
  return slot;
};






// EXTERNAL MODULE: ../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx
var vertical_css_transition = __webpack_require__("../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx");
;// ../../packages/js/experimental/src/experimental-list/task-item/index.tsx













var task_item_excluded = ["completed", "inProgress", "inProgressLabel", "title", "badge", "onDelete", "onCollapse", "onDismiss", "onSnooze", "onExpand", "onClick", "additionalInfo", "time", "content", "expandable", "expanded", "showActionButton", "level", "action", "actionLabel"];
function task_item_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function task_item_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? task_item_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : task_item_ownKeys(Object(t)).forEach(function (r) {
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



var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
var sanitizeHTML = function sanitizeHTML(html) {
  return {
    __html: (0,purify.sanitize)(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
};
var OptionalTaskTooltip = function OptionalTaskTooltip(_ref) {
  var level = _ref.level,
    completed = _ref.completed,
    children = _ref.children;
  var tooltip = '';
  if (level === 1 && !completed) {
    tooltip = (0,i18n_build_module.__)('This task is required to keep your store running', 'woocommerce');
  } else if (level === 2 && !completed) {
    tooltip = (0,i18n_build_module.__)('This task is required to set up your extension', 'woocommerce');
  }
  if (tooltip === '') {
    return children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_tooltip/* default */.Ay, {
    text: tooltip,
    children: children
  });
};
var OptionalExpansionWrapper = function OptionalExpansionWrapper(_ref2) {
  var children = _ref2.children,
    expandable = _ref2.expandable,
    expanded = _ref2.expanded;
  if (!expandable) {
    return expanded ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    }) : null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(vertical_css_transition/* VerticalCSSTransition */.H, {
    timeout: 500,
    "in": expanded,
    classNames: "woocommerce-task-list__item-expandable-content",
    defaultStyle: {
      transitionProperty: 'max-height, opacity'
    },
    children: children
  });
};
var TaskItem = function TaskItem(_ref3) {
  var completed = _ref3.completed,
    inProgress = _ref3.inProgress,
    inProgressLabel = _ref3.inProgressLabel,
    title = _ref3.title,
    badge = _ref3.badge,
    onDelete = _ref3.onDelete,
    onCollapse = _ref3.onCollapse,
    onDismiss = _ref3.onDismiss,
    onSnooze = _ref3.onSnooze,
    onExpand = _ref3.onExpand,
    onClick = _ref3.onClick,
    additionalInfo = _ref3.additionalInfo,
    time = _ref3.time,
    content = _ref3.content,
    _ref3$expandable = _ref3.expandable,
    expandable = _ref3$expandable === void 0 ? false : _ref3$expandable,
    _ref3$expanded = _ref3.expanded,
    expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
    showActionButton = _ref3.showActionButton,
    _ref3$level = _ref3.level,
    level = _ref3$level === void 0 ? 3 : _ref3$level,
    action = _ref3.action,
    actionLabel = _ref3.actionLabel,
    listItemProps = (0,objectWithoutProperties/* default */.A)(_ref3, task_item_excluded);
  var _useState = (0,react.useState)(expanded),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isTaskExpanded = _useState2[0],
    setTaskExpanded = _useState2[1];
  (0,react.useEffect)(function () {
    setTaskExpanded(expanded);
  }, [expanded]);
  var className = (0,clsx/* default */.A)('woocommerce-task-list__item', {
    complete: completed,
    expanded: isTaskExpanded,
    'level-2': level === 2 && !completed,
    'level-1': level === 1 && !completed
  });
  if (showActionButton === undefined) {
    showActionButton = expandable;
  }
  var showEllipsisMenu = (onDismiss || onSnooze) && !completed || onDelete && completed;
  var toggleActionVisibility = function toggleActionVisibility() {
    setTaskExpanded(!isTaskExpanded);
    if (isTaskExpanded && onExpand) {
      onExpand();
    }
    if (!isTaskExpanded && onCollapse) {
      onCollapse();
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalListItem, task_item_objectSpread(task_item_objectSpread({
    disableGutters: true,
    className: className,
    onClick: expandable && showActionButton ? toggleActionVisibility : onClick
  }, listItemProps), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OptionalTaskTooltip, {
      level: level,
      completed: completed,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-task-list__item-before",
        children: level === 1 && !completed ? /*#__PURE__*/(0,jsx_runtime.jsx)(notice_outline/* default */.A, {
          size: 36
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__icon",
          children: completed && /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
            icon: check/* default */.A
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-task-list__item-text",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text, {
        as: "div",
        size: "14",
        lineHeight: completed ? '18px' : '20px',
        weight: completed ? 'normal' : '600',
        variant: completed ? 'body.small' : 'button',
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "woocommerce-task-list__item-title",
          children: [title, badge && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "woocommerce-task-list__item-badge",
            children: badge
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(OptionalExpansionWrapper, {
          expandable: expandable,
          expanded: isTaskExpanded,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "woocommerce-task-list__item-expandable-content",
            children: [content, expandable && !completed && additionalInfo && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "woocommerce-task__additional-info",
              dangerouslySetInnerHTML: sanitizeHTML(additionalInfo)
            }), !completed && showActionButton && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              className: "woocommerce-task-list__item-action",
              isPrimary: true,
              onClick: function onClick(event) {
                event.stopPropagation();
                action(event, {
                  isExpanded: true
                });
              },
              children: actionLabel || title
            })]
          })
        }), !expandable && !completed && additionalInfo && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__additional-info",
          dangerouslySetInnerHTML: sanitizeHTML(additionalInfo)
        }), time && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__estimated-time",
          children: time
        })]
      }), inProgress && inProgressLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-task-list__item-progress",
        children: inProgressLabel
      })]
    }), showEllipsisMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(ellipsis_menu/* default */.A, {
      label: (0,i18n_build_module.__)('Task Options', 'woocommerce'),
      className: "woocommerce-task-list__item-after",
      onToggle: function onToggle(e) {
        return e.stopPropagation();
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "woocommerce-task-card__section-controls",
          children: [onDismiss && !completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onDismiss();
            },
            children: (0,i18n_build_module.__)('Dismiss', 'woocommerce')
          }), onSnooze && !completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onSnooze();
            },
            children: (0,i18n_build_module.__)('Remind me later', 'woocommerce')
          }), onDelete && completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onDelete();
            },
            children: (0,i18n_build_module.__)('Delete', 'woocommerce')
          })]
        });
      }
    })]
  }));
};
try {
    // @ts-ignore
    TaskItem.displayName = "TaskItem";
    // @ts-ignore
    TaskItem.__docgenInfo = { "description": "", "displayName": "TaskItem", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "completed": { "defaultValue": null, "description": "", "name": "completed", "required": true, "type": { "name": "boolean" } }, "inProgress": { "defaultValue": null, "description": "", "name": "inProgress", "required": true, "type": { "name": "boolean" } }, "inProgressLabel": { "defaultValue": null, "description": "", "name": "inProgressLabel", "required": true, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onCollapse": { "defaultValue": null, "description": "", "name": "onCollapse", "required": false, "type": { "name": "(() => void)" } }, "onDelete": { "defaultValue": null, "description": "", "name": "onDelete", "required": false, "type": { "name": "(() => void)" } }, "onDismiss": { "defaultValue": null, "description": "", "name": "onDismiss", "required": false, "type": { "name": "(() => void)" } }, "onSnooze": { "defaultValue": null, "description": "", "name": "onSnooze", "required": false, "type": { "name": "(() => void)" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "(() => void)" } }, "badge": { "defaultValue": null, "description": "", "name": "badge", "required": false, "type": { "name": "string" } }, "additionalInfo": { "defaultValue": null, "description": "", "name": "additionalInfo", "required": false, "type": { "name": "string" } }, "time": { "defaultValue": null, "description": "", "name": "time", "required": false, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": true, "type": { "name": "string" } }, "expandable": { "defaultValue": { value: "false" }, "description": "", "name": "expandable", "required": false, "type": { "name": "boolean" } }, "expanded": { "defaultValue": { value: "false" }, "description": "", "name": "expanded", "required": false, "type": { "name": "boolean" } }, "showActionButton": { "defaultValue": null, "description": "", "name": "showActionButton", "required": false, "type": { "name": "boolean" } }, "level": { "defaultValue": { value: "3" }, "description": "", "name": "level", "required": false, "type": { "name": "enum", "value": [{ "value": "2" }, { "value": "1" }, { "value": "3" }] } }, "action": { "defaultValue": null, "description": "", "name": "action", "required": true, "type": { "name": "(event?: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | undefined, args?: ActionArgs | undefined) => void" } }, "actionLabel": { "defaultValue": null, "description": "", "name": "actionLabel", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/task-item/index.tsx#TaskItem"] = { docgenInfo: TaskItem.__docgenInfo, name: "TaskItem", path: "../../packages/js/experimental/src/experimental-list/task-item/index.tsx#TaskItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/experimental/src/experimental-list/stories/style.scss
// extracted by mini-css-extract-plugin

;// ../../packages/js/experimental/src/experimental-list/stories/experimental-list.story.tsx












function experimental_list_story_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function experimental_list_story_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? experimental_list_story_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : experimental_list_story_ownKeys(Object(t)).forEach(function (r) {
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




/* harmony default export */ const experimental_list_story = ({
  title: 'Experimental/List',
  component: ExperimentalList,
  decorators: [function (storyFn, context) {
    return (0,dist/* withConsole */.QW)()(storyFn)(context);
  }],
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['up', 'down']
      }
    }
  }
});
var Template = function Template(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      disableGutters: true,
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Without gutters no padding is added to the list item."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    })]
  }));
};
var Primary = Template.bind({
  onClick: function onClick() {}
});
Primary.args = {
  listType: 'ul',
  animation: 'slide-right'
};
var CollapsibleListExample = function CollapsibleListExample(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalCollapsibleList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({
    collapseLabel: "Show less",
    expandLabel: "Show more items",
    show: 2,
    onCollapse: function onCollapse() {
      // eslint-disable-next-line no-console
      console.log('collapsed');
    },
    onExpand: function onExpand() {
      // eslint-disable-next-line no-console
      console.log('expanded');
    },
    direction: "up"
  }, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["Any markup can go here.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Bigger task item", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Another line"]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    })]
  }));
};
CollapsibleListExample.storyName = 'List with CollapsibleListItem.';
var TaskItemExample = function TaskItemExample(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {
        return (
          // eslint-disable-next-line no-console
          console.log('Primary action clicked')
        );
      },
      actionLabel: "Primary action",
      completed: false,
      content: "Task content",
      expandable: true,
      expanded: true,
      level: 1,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      onCollapse: function onCollapse() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task will be expanded')
        );
      },
      onExpand: function onExpand() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task will be collapsed')
        );
      },
      showActionButton: true,
      title: "A high-priority task"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {
        return (
          // eslint-disable-next-line no-console
          console.log('Primary action clicked')
        );
      },
      actionLabel: "Primary action",
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 1,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      showActionButton: false,
      title: "A high-priority task without `Primary action`",
      badge: "Badge content"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 2,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "Setup task",
      onDismiss: function onDismiss() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task dismissed')
        );
      },
      onSnooze: function onSnooze() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task snoozed')
        );
      },
      time: "5 minutes"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 3,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "A low-priority task",
      onDismiss: function onDismiss() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task dismissed')
        );
      },
      onSnooze: function onSnooze() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task snoozed')
        );
      },
      time: "3 minutes"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: true,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 3,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "Another low-priority task",
      onDelete: function onDelete() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task deleted')
        );
      }
    })]
  }));
};
TaskItemExample.storyName = 'TaskItems.';
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "Template.bind({\n  onClick: () => {}\n})",
      ...Primary.parameters?.docs?.source
    }
  }
};
CollapsibleListExample.parameters = {
  ...CollapsibleListExample.parameters,
  docs: {
    ...CollapsibleListExample.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <CollapsibleList collapseLabel=\"Show less\" expandLabel=\"Show more items\" show={2} onCollapse={() => {\n    // eslint-disable-next-line no-console\n    console.log('collapsed');\n  }} onExpand={() => {\n    // eslint-disable-next-line no-console\n    console.log('expanded');\n  }} direction=\"up\" {...args}>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>\n                    Any markup can go here.\n                    <br />\n                    Bigger task item\n                    <br />\n                    Another line\n                </div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n        </CollapsibleList>;\n}",
      ...CollapsibleListExample.parameters?.docs?.source
    }
  }
};
TaskItemExample.parameters = {
  ...TaskItemExample.parameters,
  docs: {
    ...TaskItemExample.parameters?.docs,
    source: {
      originalSource: "args => <List {...args}>\n        <TaskItem action={() =>\n  // eslint-disable-next-line no-console\n  console.log('Primary action clicked')} actionLabel=\"Primary action\" completed={false} content=\"Task content\" expandable={true} expanded={true} level={1} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} onCollapse={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task will be expanded')} onExpand={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task will be collapsed')} showActionButton={true} title=\"A high-priority task\" />\n        <TaskItem action={() =>\n  // eslint-disable-next-line no-console\n  console.log('Primary action clicked')} actionLabel=\"Primary action\" completed={false} content=\"Task content\" expandable={false} expanded={true} level={1} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} showActionButton={false} title=\"A high-priority task without `Primary action`\" badge=\"Badge content\" />\n        <TaskItem action={() => {}} completed={false} content=\"Task content\" expandable={false} expanded={true} level={2} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"Setup task\" onDismiss={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task dismissed')} onSnooze={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task snoozed')} time=\"5 minutes\" />\n        <TaskItem action={() => {}} completed={false} content=\"Task content\" expandable={false} expanded={true} level={3} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"A low-priority task\" onDismiss={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task dismissed')} onSnooze={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task snoozed')} time=\"3 minutes\" />\n        <TaskItem action={() => {}} completed={true} content=\"Task content\" expandable={false} expanded={true} level={3} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"Another low-priority task\" onDelete={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task deleted')} />\n    </List>",
      ...TaskItemExample.parameters?.docs?.source
    }
  }
};

/***/ })

}]);