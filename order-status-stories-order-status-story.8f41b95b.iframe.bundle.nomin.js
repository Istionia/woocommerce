"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6322],{

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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toPropertyKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/typeof.js");
;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != (0,esm_typeof/* default */.A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,esm_typeof/* default */.A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == (0,esm_typeof/* default */.A)(i) ? i : i + "";
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/typeof.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "../../packages/js/components/src/order-status/stories/order-status.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  "default": () => (/* binding */ order_status_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/order-status/index.js

/**
 * External dependencies
 */




/**
 * Use `OrderStatus` to display a badge with human-friendly text describing the current order status.
 *
 * @param {Object}  props
 * @param {Object}  props.order
 * @param {string}  props.order.status
 * @param {string}  props.className
 * @param {Object}  props.orderStatusMap
 * @param {boolean} props.labelPositionToLeft
 * @return {Object} -
 */

var OrderStatus = function OrderStatus(_ref) {
  var status = _ref.order.status,
    className = _ref.className,
    orderStatusMap = _ref.orderStatusMap,
    _ref$labelPositionToL = _ref.labelPositionToLeft,
    labelPositionToLeft = _ref$labelPositionToL === void 0 ? false : _ref$labelPositionToL;
  var indicatorClasses = (0,clsx/* default */.A)('woocommerce-order-status__indicator', (0,defineProperty/* default */.A)({}, 'is-' + status, true));
  var label = orderStatusMap[status] || status;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,clsx/* default */.A)('woocommerce-order-status', className),
    children: labelPositionToLeft ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [label, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: indicatorClasses
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: indicatorClasses
      }), label]
    })
  });
};
/* harmony default export */ const order_status = (OrderStatus);
;// ../../packages/js/components/src/order-status/stories/order-status.story.js
/**
 * External dependencies
 */



var orderStatusMap = {
  processing: (0,build_module.__)('Processing Order', 'woocommerce'),
  pending: (0,build_module.__)('Pending Order', 'woocommerce'),
  completed: (0,build_module.__)('Completed Order', 'woocommerce')
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(order_status, {
      order: {
        status: 'processing'
      },
      orderStatusMap: orderStatusMap
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(order_status, {
      order: {
        status: 'pending'
      },
      orderStatusMap: orderStatusMap
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(order_status, {
      order: {
        status: 'completed'
      },
      orderStatusMap: orderStatusMap
    })]
  });
};
/* harmony default export */ const order_status_story = ({
  title: 'Components/OrderStatus',
  component: order_status
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <div>\n        <OrderStatus order={{\n    status: 'processing'\n  }} orderStatusMap={orderStatusMap} />\n        <OrderStatus order={{\n    status: 'pending'\n  }} orderStatusMap={orderStatusMap} />\n        <OrderStatus order={{\n    status: 'completed'\n  }} orderStatusMap={orderStatusMap} />\n    </div>",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);