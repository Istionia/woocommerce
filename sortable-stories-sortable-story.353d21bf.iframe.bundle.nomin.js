"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5264],{

/***/ "../../packages/js/components/src/sortable/stories/sortable.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   CustomHandle: () => (/* binding */ CustomHandle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/js/components/src/sortable/sortable.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/js/components/src/sortable/sortable-handle.tsx");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/list-item/list-item.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__/* .Sortable */ .L, {
    onOrderChange: function onOrderChange(items) {
      return (
        // eslint-disable-next-line no-console
        console.log('Order changed: ' + items.map(function (item) {
          return item.key;
        }))
      );
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .c, {
      children: "Item 1"
    }, 'item-1'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .c, {
      children: "Item 2"
    }, 'item-2'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .c, {
      children: "Item 3"
    }, 'item-3'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .c, {
      children: "Item 4"
    }, 'item-4'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .c, {
      children: "Item 5"
    }, 'item-5')]
  });
};
var CustomHandle = function CustomHandle() {
  var CustomListItem = function CustomListItem(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_4__/* .SortableHandle */ .D, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
          size: 16
        })
      }), children]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__/* .Sortable */ .L, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomListItem, {
      children: "Item 1"
    }, "item-1"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomListItem, {
      children: "Item 2"
    }, "item-2"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomListItem, {
      children: "Item 3"
    }, "item-3"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomListItem, {
      children: "Item 4"
    }, "item-4"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomListItem, {
      children: "Item 5"
    }, "item-5")]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Sortable',
  component: ___WEBPACK_IMPORTED_MODULE_2__/* .Sortable */ .L
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <Sortable onOrderChange={items =>\n  // eslint-disable-next-line no-console\n  console.log('Order changed: ' + items.map(item => item.key))}>\n            <ListItem key={'item-1'}>Item 1</ListItem>\n            <ListItem key={'item-2'}>Item 2</ListItem>\n            <ListItem key={'item-3'}>Item 3</ListItem>\n            <ListItem key={'item-4'}>Item 4</ListItem>\n            <ListItem key={'item-5'}>Item 5</ListItem>\n        </Sortable>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
CustomHandle.parameters = {
  ...CustomHandle.parameters,
  docs: {
    ...CustomHandle.parameters?.docs,
    source: {
      originalSource: "() => {\n  type CustomListItemProps = {\n    children: React.ReactNode;\n    onDragEnd?: DragEventHandler<Element>;\n    onDragStart?: DragEventHandler<Element>;\n  };\n  const CustomListItem = ({\n    children\n  }: CustomListItemProps) => {\n    return <>\n                <SortableHandle>\n                    <Icon icon={wordpress} size={16} />\n                </SortableHandle>\n                {children}\n            </>;\n  };\n  return <Sortable>\n            <CustomListItem key=\"item-1\">Item 1</CustomListItem>\n            <CustomListItem key=\"item-2\">Item 2</CustomListItem>\n            <CustomListItem key=\"item-3\">Item 3</CustomListItem>\n            <CustomListItem key=\"item-4\">Item 4</CustomListItem>\n            <CustomListItem key=\"item-5\">Item 5</CustomListItem>\n        </Sortable>;\n}",
      ...CustomHandle.parameters?.docs?.source
    }
  }
};

/***/ })

}]);