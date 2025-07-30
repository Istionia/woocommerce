(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1170,3696,4584],{

/***/ "../../packages/js/components/src/compare-filter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../../packages/js/components/src/experimental.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js");
/**
 * External dependencies
 */


/**
 * Export experimental components within the components package to prevent a circular
 * dependency with woocommerce/experimental. Only for internal use.
 */
var Text = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Text || _wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;

/***/ }),

/***/ "../../packages/js/navigation/src/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Oo: () => (/* binding */ addHistoryListener),
  SI: () => (/* reexport */ flattenFilters),
  Q$: () => (/* reexport */ getActiveFiltersFromQuery),
  Am: () => (/* reexport */ getDefaultOptionValue),
  JK: () => (/* reexport */ history_getHistory),
  DF: () => (/* binding */ getIdsFromQuery),
  Gy: () => (/* binding */ getNewPath),
  aK: () => (/* binding */ getPersistedQuery),
  $Z: () => (/* binding */ getQuery),
  Sz: () => (/* reexport */ getQueryFromActiveFilters),
  Ze: () => (/* binding */ updateQueryString)
});

// UNUSED EXPORTS: getPath, getQueryExcludedScreens, getQueryExcludedScreensUrlUpdate, getScreenFromPath, getSearchWords, getSetOfIdsFromQuery, getUrlKey, isWCAdmin, navigateTo, onQueryChange, parseAdminUrl, pathIsExcluded, useConfirmUnsavedChanges, useQuery

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.starts-with.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.to-json.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/add-query-args.js
var add_query_args = __webpack_require__("../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/add-query-args.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/qs@6.11.2/node_modules/qs/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/qs@6.11.2/node_modules/qs/lib/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.0.1/node_modules/@wordpress/hooks/build-module/index.js + 10 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+hooks@4.0.1/node_modules/@wordpress/hooks/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/history@5.3.0/node_modules/history/index.js
var node_modules_history = __webpack_require__("../../node_modules/.pnpm/history@5.3.0/node_modules/history/index.js");
;// ../../packages/js/navigation/src/history.ts


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



// See https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
// ^ This is a bit outdated but there's no newer documentation - the replacement for this is to use <unstable_HistoryRouter /> https://reactrouter.com/docs/en/v6/routers/history-router

/**
 * Extension of history.BrowserHistory but also adds { pathname: string } to the location object.
 */

var _history;

/**
 * Recreate `history` to coerce React Router into accepting path arguments found in query
 * parameter `path`, allowing a url hash to be avoided. Since hash portions of the url are
 * not sent server side, full route information can be detected by the server.
 *
 * `<Router />` and `<Switch />` components use `history.location()` to match a url with a route.
 * Since they don't parse query arguments, recreate `get location` to return a `pathname` with the
 * query path argument's value.
 *
 * In react-router v6, { basename } is no longer a parameter in createBrowserHistory(), and the
 * replacement is to use basename in the <Route> component.
 *
 * @return {Object} React-router history object with `get location` modified.
 */
function history_getHistory() {
  if (!_history) {
    var browserHistory = (0,node_modules_history/* createBrowserHistory */.zR)();
    var locationStack = [browserHistory.location];
    var updateNextLocationStack = function updateNextLocationStack(action, location) {
      switch (action) {
        case 'POP':
          locationStack = locationStack.slice(0, locationStack.length - 1);
          break;
        case 'PUSH':
          locationStack = [].concat((0,toConsumableArray/* default */.A)(locationStack), [location]);
          break;
        case 'REPLACE':
          locationStack = [].concat((0,toConsumableArray/* default */.A)(locationStack.slice(0, locationStack.length - 1)), [location]);
          break;
      }
    };
    _history = {
      get action() {
        return browserHistory.action;
      },
      get location() {
        var location = browserHistory.location;
        var query = (0,lib.parse)(location.search.substring(1));
        var pathname;
        if (query && typeof query.path === 'string') {
          pathname = query.path;
        } else if (query && query.path && typeof query.path !== 'string') {
          // this branch was added when converting to TS as it is technically possible for a query.path to not be a string.
          // eslint-disable-next-line no-console
          console.warn("Query path parameter should be a string but instead was: ".concat(query.path, ", undefined behaviour may occur."));
          pathname = query.path; // ts override only, no coercion going on
        } else {
          pathname = '/';
        }
        return _objectSpread(_objectSpread({}, location), {}, {
          pathname: pathname
        });
      },
      get __experimentalLocationStack() {
        return (0,toConsumableArray/* default */.A)(locationStack);
      },
      createHref: browserHistory.createHref,
      push: browserHistory.push,
      replace: browserHistory.replace,
      go: browserHistory.go,
      back: browserHistory.back,
      forward: browserHistory.forward,
      block: browserHistory.block,
      listen: function listen(listener) {
        var _this = this;
        return browserHistory.listen(function () {
          listener({
            action: _this.action,
            location: _this.location
          });
        });
      }
    };
    browserHistory.listen(function () {
      return updateNextLocationStack(_history.action, _history.location);
    });
  }
  return _history;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
;// ../../packages/js/navigation/src/filters.js


function filters_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function filters_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? filters_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : filters_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}














/**
 * External dependencies
 */


/**
 * Get the url query key from the filter key and rule.
 *
 * @param {string} key  - filter key.
 * @param {string} rule - filter rule.
 * @return {string} - url query key.
 */
function getUrlKey(key, rule) {
  if (rule && rule.length) {
    return "".concat(key, "_").concat(rule);
  }
  return key;
}

/**
 * Collapse an array of filter values with subFilters into a 1-dimensional array.
 *
 * @param {Array} filters Set of filters with possible subfilters.
 * @return {Array} Flattened array of all filters.
 */
function flattenFilters(filters) {
  var allFilters = [];
  filters.forEach(function (f) {
    if (!f.subFilters) {
      allFilters.push(f);
    } else {
      allFilters.push((0,lodash.omit)(f, 'subFilters'));
      var subFilters = flattenFilters(f.subFilters);
      allFilters.push.apply(allFilters, (0,toConsumableArray/* default */.A)(subFilters));
    }
  });
  return allFilters;
}

/**
 * Describe activeFilter object.
 *
 * @typedef {Object} activeFilter
 * @property {string} key    - filter key.
 * @property {string} [rule] - a modifying rule for a filter, eg 'includes' or 'is_not'.
 * @property {string} value  - filter value(s).
 */

/**
 * Given a query object, return an array of activeFilters, if any.
 *
 * @param {Object} query  - query object
 * @param {Object} config - config object
 * @return {Array} - array of activeFilters
 */
function getActiveFiltersFromQuery(query, config) {
  return Object.keys(config).reduce(function (activeFilters, configKey) {
    var filter = config[configKey];
    if (filter.rules) {
      // Get all rules found in the query string.
      var matches = filter.rules.filter(function (rule) {
        return query.hasOwnProperty(getUrlKey(configKey, rule.value));
      });
      if (matches.length) {
        if (filter.allowMultiple) {
          // If rules were found in the query string, and this filter supports
          // multiple instances, add all matches to the active filters array.
          matches.forEach(function (match) {
            var value = query[getUrlKey(configKey, match.value)];
            value.forEach(function (filterValue) {
              activeFilters.push({
                key: configKey,
                rule: match.value,
                value: filterValue
              });
            });
          });
        } else {
          // If the filter is a single instance, just process the first rule match.
          var value = query[getUrlKey(configKey, matches[0].value)];
          activeFilters.push({
            key: configKey,
            rule: matches[0].value,
            value: value
          });
        }
      }
    } else if (query[configKey]) {
      // If the filter doesn't have rules, but allows multiples.
      if (filter.allowMultiple) {
        var _value = query[configKey];
        _value.forEach(function (filterValue) {
          activeFilters.push({
            key: configKey,
            value: filterValue
          });
        });
      } else {
        // Filter with no rules and only one instance.
        activeFilters.push({
          key: configKey,
          value: query[configKey]
        });
      }
    }
    return activeFilters;
  }, []);
}

/**
 * Get the default option's value from the configuration object for a given filter. The first
 * option is used as default if no `defaultOption` is provided.
 *
 * @param {Object} config  - a filter config object.
 * @param {Array}  options - select options.
 * @return {string|undefined}  - the value of the default option.
 */
function getDefaultOptionValue(config, options) {
  var defaultOption = config.input.defaultOption;
  if (config.input.defaultOption) {
    var option = (0,lodash.find)(options, {
      value: defaultOption
    });
    if (!option) {
      /* eslint-disable no-console */
      console.warn("invalid defaultOption ".concat(defaultOption, " supplied to ").concat(config.labels.add));
      /* eslint-enable */
      return undefined;
    }
    return option.value;
  }
  return (0,lodash.get)(options, [0, 'value']);
}

/**
 * Given activeFilters, create a new query object to update the url. Use previousFilters to
 * Remove unused params.
 *
 * @param {Array}  activeFilters - Array of activeFilters shown in the UI
 * @param {Object} query         - the current url query object
 * @param {Object} config        - config object
 * @return {Object} - query object representing the new parameters
 */
function getQueryFromActiveFilters(activeFilters, query, config) {
  var previousFilters = getActiveFiltersFromQuery(query, config);
  var previousData = previousFilters.reduce(function (data, filter) {
    data[getUrlKey(filter.key, filter.rule)] = undefined;
    return data;
  }, {});
  var nextData = activeFilters.reduce(function (data, filter) {
    if (filter.rule === 'between' && (!Array.isArray(filter.value) || filter.value.some(function (value) {
      return !value;
    }))) {
      return data;
    }
    if (filter.value) {
      var urlKey = getUrlKey(filter.key, filter.rule);
      if (config[filter.key] && config[filter.key].allowMultiple) {
        if (!data.hasOwnProperty(urlKey)) {
          data[urlKey] = [];
        }
        data[urlKey].push(filter.value);
      } else {
        data[urlKey] = filter.value;
      }
    }
    return data;
  }, {});
  return filters_objectSpread(filters_objectSpread({}, previousData), nextData);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
;// ../../packages/js/navigation/src/hooks/use-confirm-unsaved-changes.ts
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var useConfirmUnsavedChanges = function useConfirmUnsavedChanges(hasUnsavedChanges, shouldConfirm, message) {
  var confirmMessage = useMemo(function () {
    return message !== null && message !== void 0 ? message : __('Changes you made may not be saved.', 'woocommerce');
  }, [message]);
  var history = getHistory();

  // This effect prevent react router from navigate and show
  // a confirmation message. It's a work around to beforeunload
  // because react router does not triggers that event.
  useEffect(function () {
    if (hasUnsavedChanges) {
      var push = history.push;
      history.push = function () {
        var fromUrl = history.location;
        var toUrl = parseAdminUrl(arguments.length <= 0 ? undefined : arguments[0]);
        if (typeof shouldConfirm === 'function' && !shouldConfirm(toUrl, fromUrl)) {
          push.apply(void 0, arguments);
          return;
        }

        /* eslint-disable-next-line no-alert */
        var result = window.confirm(confirmMessage);
        if (result !== false) {
          push.apply(void 0, arguments);
        }
      };
      return function () {
        history.push = push;
      };
    }
  }, [history, hasUnsavedChanges, confirmMessage]);

  // This effect listens to the native beforeunload event to show
  // a confirmation message; note that the message shown is
  // a generic browser-specified string; not the custom one shown
  // when using react router.
  useEffect(function () {
    if (hasUnsavedChanges) {
      var onBeforeUnload = function onBeforeUnload(event) {
        event.preventDefault();
        return event.returnValue = confirmMessage;
      };
      window.addEventListener('beforeunload', onBeforeUnload, {
        capture: true
      });
      return function () {
        window.removeEventListener('beforeunload', onBeforeUnload, {
          capture: true
        });
      };
    }
  }, [hasUnsavedChanges, confirmMessage]);
};
;// ../../packages/js/navigation/src/index.js




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
      (0,defineProperty/* default */.A)(e, r, t[r]);
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
 * Internal dependencies
 */


// Expose history so all uses get the same history object.


// Export all filter utilities


// Export all hooks

var TIME_EXCLUDED_SCREENS_FILTER = 'woocommerce_admin_time_excluded_screens';
var NAVIGATION_UPDATE_EXCLUDED_SCREENS_FILTER = 'woocommerce_admin_nav_update_excluded_screens';

/**
 * Get the current path from history.
 *
 * @return {string}  Current path.
 */
var getPath = function getPath() {
  return history_getHistory().location.pathname;
};

/**
 * Get the current query string, parsed into an object, from history.
 *
 * @return {Object}  Current query object, defaults to empty object.
 */
function getQuery() {
  var search = history_getHistory().location.search;
  if (search.length) {
    return (0,lib.parse)(search.substring(1)) || {};
  }
  return {};
}

/**
 * Return a URL with set query parameters.
 *
 * @param {Object} query        object of params to be updated.
 * @param {string} path         Relative path (defaults to current path).
 * @param {Object} currentQuery object of current query params (defaults to current querystring).
 * @param {string} page         Page key (defaults to "wc-admin")
 * @return {string}  Updated URL merging query params into existing params.
 */
function getNewPath(query) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getPath();
  var currentQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getQuery();
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'wc-admin';
  var args = src_objectSpread(src_objectSpread({
    page: page
  }, currentQuery), query);
  if (path !== '/') {
    args.path = path;
  }
  return (0,add_query_args/* addQueryArgs */.F)('admin.php', args);
}

/**
 * Gets query parameters that should persist between screens or updates
 * to reports, such as filtering.
 *
 * @param {Object} query Query containing the parameters.
 * @return {Object} Object containing the persisted queries.
 */
var getPersistedQuery = function getPersistedQuery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getQuery();
  /**
   * Filter persisted queries. These query parameters remain in the url when other parameters are updated.
   *
   * @filter woocommerce_admin_persisted_queries
   * @param {Array.<string>} persistedQueries Array of persisted queries.
   */
  var params = (0,build_module/* applyFilters */.W5)('woocommerce_admin_persisted_queries', ['period', 'compare', 'before', 'after', 'interval', 'type']);
  return (0,lodash.pick)(query, params);
};

/**
 * Get array of screens that should ignore persisted queries
 *
 * @return {Array} Array containing list of screens
 */
var getQueryExcludedScreens = function getQueryExcludedScreens() {
  return applyFilters(TIME_EXCLUDED_SCREENS_FILTER, ['stock', 'settings', 'customers', 'homescreen']);
};

/**
 * Get array of screens that should ignore nav menu URL updates.
 *
 * @return {Array} Array containing list of screens
 */
var getQueryExcludedScreensUrlUpdate = function getQueryExcludedScreensUrlUpdate() {
  return applyFilters(NAVIGATION_UPDATE_EXCLUDED_SCREENS_FILTER, ['extensions']);
};

/**
 * Retrieve a string 'name' representing the current screen
 *
 * @param {Object} path Path to resolve, default to current
 * @return {string} Screen name
 */
var getScreenFromPath = function getScreenFromPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getPath();
  return path === '/' ? 'homescreen' : path.replace('/analytics', '').replace('/', '');
};

/**
 * Get an array of IDs from a comma-separated query parameter.
 *
 * @param {string} [queryString=''] string value extracted from URL.
 * @return {Set<number>} List of IDs converted to a set of integers.
 */
function getSetOfIdsFromQuery() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Set(
  // Return only unique ids.
  queryString.split(',').map(function (id) {
    return parseInt(id, 10);
  }).filter(function (id) {
    return !isNaN(id);
  }));
}

/**
 * Updates the query parameters of the current page.
 *
 * @param {Object} query        object of params to be updated.
 * @param {string} path         Relative path (defaults to current path).
 * @param {Object} currentQuery object of current query params (defaults to current querystring).
 * @param {string} page         Page key (defaults to "wc-admin")
 */
function updateQueryString(query) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getPath();
  var currentQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getQuery();
  var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'wc-admin';
  var newPath = getNewPath(query, path, currentQuery, page);
  history_getHistory().push(newPath);
}

/**
 * Adds a listener that runs on history change.
 *
 * @param {Function} listener Listener to add on history change.
 * @return {Function} Function to remove listeners.
 */
var addHistoryListener = function addHistoryListener(listener) {
  var _window$wcNavigation;
  // Monkey patch pushState to allow trigger the pushstate event listener.

  window.wcNavigation = (_window$wcNavigation = window.wcNavigation) !== null && _window$wcNavigation !== void 0 ? _window$wcNavigation : {};
  if (!window.wcNavigation.historyPatched) {
    (function (history) {
      var pushState = history.pushState;
      var replaceState = history.replaceState;
      history.pushState = function (state) {
        var pushStateEvent = new CustomEvent('pushstate', {
          state: state
        });
        window.dispatchEvent(pushStateEvent);
        return pushState.apply(history, arguments);
      };
      history.replaceState = function (state) {
        var replaceStateEvent = new CustomEvent('replacestate', {
          state: state
        });
        window.dispatchEvent(replaceStateEvent);
        return replaceState.apply(history, arguments);
      };
      window.wcNavigation.historyPatched = true;
    })(window.history);
  }
  window.addEventListener('popstate', listener);
  window.addEventListener('pushstate', listener);
  window.addEventListener('replacestate', listener);
  return function () {
    window.removeEventListener('popstate', listener);
    window.removeEventListener('pushstate', listener);
    window.removeEventListener('replacestate', listener);
  };
};

/**
 * Given a path, return whether it is an excluded screen
 *
 * @param {Object} path Path to check
 *
 * @return {boolean} Boolean representing whether path is excluded
 */
var pathIsExcluded = function pathIsExcluded(path) {
  return getQueryExcludedScreens().includes(getScreenFromPath(path));
};

/**
 * Get an array of IDs from a comma-separated query parameter.
 *
 * @param {string} [queryString=''] string value extracted from URL.
 * @return {Array<number>} List of IDs converted to an array of unique integers.
 */
function getIdsFromQuery() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return (0,toConsumableArray/* default */.A)(getSetOfIdsFromQuery(queryString));
}

/**
 * Get an array of searched words given a query.
 *
 * @param {Object} query Query object.
 * @return {Array} List of search words.
 */
function getSearchWords() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getQuery();
  if (_typeof(query) !== 'object') {
    throw new Error('Invalid parameter passed to getSearchWords, it expects an object or no parameters.');
  }
  var search = query.search;
  if (!search) {
    return [];
  }
  if (typeof search !== 'string') {
    throw new Error("Invalid 'search' type. getSearchWords expects query's 'search' property to be a string.");
  }
  return search.split(',').map(function (searchWord) {
    return searchWord.replace('%2C', ',');
  });
}

/**
 * Like getQuery but in useHook format for easy usage in React functional components
 *
 * @return {Record<string, string>} Current query object, defaults to empty object.
 */
var useQuery = function useQuery() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    queryState = _useState2[0],
    setQueryState = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    locationChanged = _useState4[0],
    setLocationChanged = _useState4[1];
  useLayoutEffect(function () {
    return addHistoryListener(function () {
      setLocationChanged(true);
    });
  }, []);
  useEffect(function () {
    if (locationChanged) {
      var query = getQuery();
      setQueryState(query);
      setLocationChanged(false);
    }
  }, [locationChanged]);
  return queryState;
};

/**
 * This function returns an event handler for the given `param`
 *
 * @param {string} param The parameter in the querystring which should be updated (ex `page`, `per_page`)
 * @param {string} path  Relative path (defaults to current path).
 * @param {string} query object of current query params (defaults to current querystring).
 * @return {Function} A callback which will update `param` to the passed value when called.
 */
function onQueryChange(param) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getPath();
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getQuery();
  switch (param) {
    case 'sort':
      return function (key, dir) {
        return updateQueryString({
          orderby: key,
          order: dir
        }, path, query);
      };
    case 'compare':
      return function (key, queryParam, ids) {
        return updateQueryString(_defineProperty(_defineProperty(_defineProperty({}, queryParam, "compare-".concat(key)), key, ids), "search", undefined), path, query);
      };
    default:
      return function (value) {
        return updateQueryString(_defineProperty({}, param, value), path, query);
      };
  }
}

/**
 * Determines if a URL is a WC admin url.
 *
 * @param {*} url - the url to test
 * @return {boolean} true if the url is a wc-admin URL
 */
var isWCAdmin = function isWCAdmin() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  return /admin.php\?page=wc-admin/.test(url);
};

/**
 * Returns a parsed object for an absolute or relative admin URL.
 *
 * @param {*} url - the url to test.
 * @return {URL} - the URL object of the given url.
 */
var src_parseAdminUrl = function parseAdminUrl(url) {
  if (url.startsWith('http')) {
    return new URL(url);
  }
  return /^\/?[a-z0-9]+.php/i.test(url) ? new URL("".concat(window.wcSettings.adminUrl).concat(url)) : new URL(getAdminLink(getNewPath({}, url, {})));
};

/**
 * A utility function that navigates to a page, using a redirect
 * or the router as appropriate.
 *
 * @param {Object} args     - All arguments.
 * @param {string} args.url - Relative path or absolute url to navigate to
 */
var navigateTo = function navigateTo(_ref) {
  var url = _ref.url;
  var parsedUrl = src_parseAdminUrl(url);
  if (isWCAdmin() && isWCAdmin(String(parsedUrl))) {
    window.document.documentElement.scrollTop = 0;
    getHistory().push("admin.php".concat(parsedUrl.search));
    return;
  }
  window.location.href = String(parsedUrl);
};

/***/ }),

/***/ "../../packages/js/components/src/search/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/js/components/src/search/search.tsx");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_search__WEBPACK_IMPORTED_MODULE_0__/* .Search */ .v);
try {
    // @ts-ignore
    Search.displayName = "Search";
    // @ts-ignore
    Search.__docgenInfo = { "description": "A search box which autocompletes results while typing, allowing for the user to select an existing object\n(product, order, customer, etc). Currently only products are supported.", "displayName": "Search", "props": { "allowFreeTextSearch": { "defaultValue": { value: "false" }, "description": "Render additional options in the autocompleter to allow free text entering depending on the type.", "name": "allowFreeTextSearch", "required": false, "type": { "name": "boolean" } }, "className": { "defaultValue": null, "description": "Class name applied to parent div.", "name": "className", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "Function called when selected results change, passed result list.", "name": "onChange", "required": false, "type": { "name": "((value: Option | OptionCompletionValue[]) => unknown)" } }, "type": { "defaultValue": null, "description": "The object type to be used in searching.", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"custom\"" }, { "value": "\"products\"" }, { "value": "\"countries\"" }, { "value": "\"categories\"" }, { "value": "\"attributes\"" }, { "value": "\"coupons\"" }, { "value": "\"customers\"" }, { "value": "\"downloadIps\"" }, { "value": "\"emails\"" }, { "value": "\"orders\"" }, { "value": "\"taxes\"" }, { "value": "\"usernames\"" }, { "value": "\"variableProducts\"" }, { "value": "\"variations\"" }] } }, "autocompleter": { "defaultValue": null, "description": "The custom autocompleter to be used in searching when type is 'custom'", "name": "autocompleter", "required": false, "type": { "name": "AutoCompleter" } }, "placeholder": { "defaultValue": null, "description": "A placeholder for the search input.", "name": "placeholder", "required": false, "type": { "name": "string" } }, "selected": { "defaultValue": { value: "[]" }, "description": "An array of objects describing selected values or optionally a string for a single value.\nIf the label of the selected value is omitted, the Tag of that value will not\nbe rendered inside the search box.", "name": "selected", "required": false, "type": { "name": "string | { key: string; label: string; }[]" } }, "inlineTags": { "defaultValue": { value: "false" }, "description": "Render tags inside input, otherwise render below input.", "name": "inlineTags", "required": false, "type": { "name": "boolean" } }, "showClearButton": { "defaultValue": { value: "false" }, "description": "Render a 'Clear' button next to the input box to remove its contents.", "name": "showClearButton", "required": false, "type": { "name": "boolean" } }, "staticResults": { "defaultValue": { value: "false" }, "description": "Render results list positioned statically instead of absolutely.", "name": "staticResults", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": { value: "false" }, "description": "Whether the control is disabled or not.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "multiple": { "defaultValue": { value: "true" }, "description": "Allow multiple option selections.", "name": "multiple", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/search/index.tsx#Search"] = { docgenInfo: Search.__docgenInfo, name: "Search", path: "../../packages/js/components/src/search/index.tsx#Search" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/select-control/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ select_control)
});

// UNUSED EXPORTS: SelectControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find-index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.search.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.trim.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-spoken-messages/index.js
var with_spoken_messages = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-spoken-messages/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js
var with_focus_outside = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/compose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js
var with_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js
var keycodes_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-window/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("../../node_modules/.pnpm/react-window@1.8.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-window/dist/index.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/select-control/list.tsx






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

var VirtualOption = function VirtualOption(_ref) {
  var index = _ref.index,
    style = _ref.style,
    data = _ref.data;
  var options = data.options,
    selectedIndex = data.selectedIndex,
    instanceId = data.instanceId,
    onSelect = data.onSelect,
    getOptionRef = data.getOptionRef;
  var option = options[index];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
    ref: getOptionRef(index),
    id: "woocommerce-select-control__option-".concat(instanceId, "-").concat(option.key),
    role: "option",
    "aria-selected": index === selectedIndex,
    "aria-setsize": options.length,
    "aria-posinset": index + 1,
    disabled: option.isDisabled,
    className: (0,clsx/* default */.A)('woocommerce-select-control__option', {
      'is-selected': index === selectedIndex
    }),
    onClick: function onClick() {
      return onSelect(option);
    },
    tabIndex: -1,
    style: style,
    children: option.label
  }, option.key);
};

/**
 * A list box that displays filtered options after search.
 */
var List = /*#__PURE__*/function (_Component) {
  function List(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, List);
    _this = _callSuper(this, List, [props]);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.select = _this.select.bind(_this);
    _this.optionRefs = {};
    _this.listbox = (0,react.createRef)();
    _this.listRef = (0,react.createRef)();
    return _this;
  }
  (0,inherits/* default */.A)(List, _Component);
  return (0,createClass/* default */.A)(List, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        options = _this$props.options,
        selectedIndex = _this$props.selectedIndex,
        virtualScroll = _this$props.virtualScroll;

      // Remove old option refs to avoid memory leaks.
      if (!(0,lodash.isEqual)(options, prevProps.options)) {
        this.optionRefs = {};
      }
      if (selectedIndex !== prevProps.selectedIndex && (0,lodash.isNumber)(selectedIndex)) {
        if (virtualScroll && this.listRef.current) {
          this.listRef.current.scrollToItem(selectedIndex, 'smart');
        } else {
          this.scrollToOption(selectedIndex);
        }
      }
    }
  }, {
    key: "getOptionRef",
    value: function getOptionRef(index) {
      if (!this.optionRefs.hasOwnProperty(index)) {
        this.optionRefs[index] = (0,react.createRef)();
      }
      return this.optionRefs[index];
    }
  }, {
    key: "select",
    value: function select(option) {
      var onSelect = this.props.onSelect;
      if (option.isDisabled) {
        return;
      }
      onSelect(option);
    }
  }, {
    key: "scrollToOption",
    value: function scrollToOption(index) {
      var listbox = this.listbox.current;
      if (!listbox) {
        return;
      }
      if (listbox.scrollHeight <= listbox.clientHeight) {
        return;
      }
      if (!this.optionRefs[index]) {
        return;
      }
      var option = this.optionRefs[index].current;
      if (!option) {
        // eslint-disable-next-line no-console
        console.warn('Option not found, index:', index);
        return;
      }
      var scrollBottom = listbox.clientHeight + listbox.scrollTop;
      var elementBottom = option.offsetTop + option.offsetHeight;
      if (elementBottom > scrollBottom) {
        listbox.scrollTop = elementBottom - listbox.clientHeight;
      } else if (option.offsetTop < listbox.scrollTop) {
        listbox.scrollTop = option.offsetTop;
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var _this$props2 = this.props,
        decrementSelectedIndex = _this$props2.decrementSelectedIndex,
        incrementSelectedIndex = _this$props2.incrementSelectedIndex,
        options = _this$props2.options,
        onSearch = _this$props2.onSearch,
        selectedIndex = _this$props2.selectedIndex,
        setExpanded = _this$props2.setExpanded;
      if (options.length === 0) {
        return;
      }
      switch (event.keyCode) {
        case keycodes_build_module.UP:
          decrementSelectedIndex();
          event.preventDefault();
          event.stopPropagation();
          break;
        case keycodes_build_module/* DOWN */.PX:
          incrementSelectedIndex();
          event.preventDefault();
          event.stopPropagation();
          break;
        case keycodes_build_module/* ENTER */.Fm:
          if ((0,lodash.isNumber)(selectedIndex) && options[selectedIndex]) {
            this.select(options[selectedIndex]);
          }
          event.preventDefault();
          event.stopPropagation();
          break;
        case keycodes_build_module/* LEFT */.M3:
        case keycodes_build_module/* RIGHT */.NS:
          setExpanded(false);
          break;
        case keycodes_build_module/* ESCAPE */._f:
          setExpanded(false);
          onSearch(null);
          return;
        case keycodes_build_module/* TAB */.wn:
          if ((0,lodash.isNumber)(selectedIndex) && options[selectedIndex]) {
            this.select(options[selectedIndex]);
          }
          setExpanded(false);
          break;
        default:
      }
    }
  }, {
    key: "toggleKeyEvents",
    value: function toggleKeyEvents(isListening) {
      var node = this.props.node;
      if (!node) {
        // eslint-disable-next-line no-console
        console.warn('No node to bind events to.');
        return;
      }

      // This exists because we must capture ENTER key presses before RichText.
      // It seems that react fires the simulated capturing events after the
      // native browser event has already bubbled so we can't stopPropagation
      // and avoid RichText getting the event from TinyMCE, hence we must
      // register a native event handler.
      var handler = isListening ? 'addEventListener' : 'removeEventListener';
      node[handler]('keydown', this.handleKeyDown, true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var selectedIndex = this.props.selectedIndex;
      if ((0,lodash.isNumber)(selectedIndex) && selectedIndex > -1) {
        if (this.props.virtualScroll && this.listRef.current) {
          this.listRef.current.scrollToItem(selectedIndex, 'smart');
        } else {
          this.scrollToOption(selectedIndex);
        }
      }
      this.toggleKeyEvents(true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleKeyEvents(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        instanceId = _this$props3.instanceId,
        listboxId = _this$props3.listboxId,
        options = _this$props3.options,
        selectedIndex = _this$props3.selectedIndex,
        staticList = _this$props3.staticList,
        virtualScroll = _this$props3.virtualScroll,
        _this$props3$virtualI = _this$props3.virtualItemHeight,
        virtualItemHeight = _this$props3$virtualI === void 0 ? 35 : _this$props3$virtualI,
        _this$props3$virtualL = _this$props3.virtualListHeight,
        virtualListHeight = _this$props3$virtualL === void 0 ? 300 : _this$props3$virtualL;
      var listboxClasses = (0,clsx/* default */.A)('woocommerce-select-control__listbox', {
        'is-static': staticList,
        'is-virtual': virtualScroll
      });
      if (virtualScroll) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          id: listboxId,
          role: "listbox",
          className: listboxClasses,
          tabIndex: -1,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.Y1, {
            ref: this.listRef,
            height: Math.min(virtualListHeight, options.length * virtualItemHeight),
            width: "100%",
            itemCount: options.length,
            itemSize: virtualItemHeight,
            itemData: {
              options: options,
              selectedIndex: selectedIndex,
              instanceId: instanceId,
              onSelect: this.select,
              getOptionRef: this.getOptionRef.bind(this)
            },
            children: VirtualOption
          })
        });
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        ref: this.listbox,
        id: listboxId,
        role: "listbox",
        className: listboxClasses,
        tabIndex: -1,
        children: options.map(function (option, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            ref: _this2.getOptionRef(index),
            id: "woocommerce-select-control__option-".concat(instanceId, "-").concat(option.key),
            role: "option",
            "aria-selected": index === selectedIndex,
            disabled: option.isDisabled,
            className: (0,clsx/* default */.A)('woocommerce-select-control__option', {
              'is-selected': index === selectedIndex
            }),
            onClick: function onClick() {
              return _this2.select(option);
            },
            tabIndex: -1,
            children: option.label
          }, option.key);
        })
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const list = (List);
try {
    // @ts-ignore
    List.displayName = "List";
    // @ts-ignore
    List.__docgenInfo = { "description": "A list box that displays filtered options after search.", "displayName": "List", "props": { "listboxId": { "defaultValue": null, "description": "ID of the main SelectControl instance.", "name": "listboxId", "required": false, "type": { "name": "string" } }, "instanceId": { "defaultValue": null, "description": "ID used for a11y in the listbox.", "name": "instanceId", "required": true, "type": { "name": "number" } }, "node": { "defaultValue": null, "description": "Parent node to bind keyboard events to.", "name": "node", "required": true, "type": { "name": "HTMLElement | null" } }, "onSelect": { "defaultValue": null, "description": "Function to execute when an option is selected.", "name": "onSelect", "required": true, "type": { "name": "(option: Option) => void" } }, "options": { "defaultValue": null, "description": "Array of options to display.", "name": "options", "required": true, "type": { "name": "Option[]" } }, "selectedIndex": { "defaultValue": null, "description": "Integer for the currently selected item.", "name": "selectedIndex", "required": true, "type": { "name": "number | null | undefined" } }, "staticList": { "defaultValue": null, "description": "Bool to determine if the list should be positioned absolutely or statically.", "name": "staticList", "required": true, "type": { "name": "boolean" } }, "decrementSelectedIndex": { "defaultValue": null, "description": "Function to execute when keyboard navigation should decrement the selected index.", "name": "decrementSelectedIndex", "required": true, "type": { "name": "() => void" } }, "incrementSelectedIndex": { "defaultValue": null, "description": "Function to execute when keyboard navigation should increment the selected index.", "name": "incrementSelectedIndex", "required": true, "type": { "name": "() => void" } }, "onSearch": { "defaultValue": null, "description": "Function to execute when the search value changes.", "name": "onSearch", "required": true, "type": { "name": "(option: string | null) => void" } }, "setExpanded": { "defaultValue": null, "description": "Function to execute when the list should be expanded or collapsed.", "name": "setExpanded", "required": true, "type": { "name": "(expanded: boolean) => void" } }, "virtualScroll": { "defaultValue": null, "description": "Enable virtual scrolling for large lists of options.", "name": "virtualScroll", "required": false, "type": { "name": "boolean" } }, "virtualItemHeight": { "defaultValue": null, "description": "Height in pixels for each virtual item.", "name": "virtualItemHeight", "required": false, "type": { "name": "number" } }, "virtualListHeight": { "defaultValue": null, "description": "Maximum height in pixels for the virtualized list.", "name": "virtualListHeight", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/select-control/list.tsx#List"] = { docgenInfo: List.__docgenInfo, name: "List", path: "../../packages/js/components/src/select-control/list.tsx#List" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js
var cancel_circle_filled = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js");
// EXTERNAL MODULE: ../../packages/js/components/src/tag/index.tsx
var tag = __webpack_require__("../../packages/js/components/src/tag/index.tsx");
;// ../../packages/js/components/src/select-control/tags.tsx











function tags_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, tags_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function tags_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (tags_isNativeReflectConstruct = function _isNativeReflectConstruct() {
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
 * A list of tags to display selected items.
 */
var Tags = /*#__PURE__*/function (_Component) {
  function Tags(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, Tags);
    _this = tags_callSuper(this, Tags, [props]);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.removeResult = _this.removeResult.bind(_this);
    return _this;
  }
  (0,inherits/* default */.A)(Tags, _Component);
  return (0,createClass/* default */.A)(Tags, [{
    key: "removeAll",
    value: function removeAll() {
      var onChange = this.props.onChange;
      onChange([]);
    }
  }, {
    key: "removeResult",
    value: function removeResult(key) {
      var _this2 = this;
      return function () {
        var _this2$props = _this2.props,
          selected = _this2$props.selected,
          onChange = _this2$props.onChange;
        if (!(0,lodash.isArray)(selected)) {
          return;
        }
        var i = (0,lodash.findIndex)(selected, {
          key: key
        });
        onChange([].concat((0,toConsumableArray/* default */.A)(selected.slice(0, i)), (0,toConsumableArray/* default */.A)(selected.slice(i + 1))));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        selected = _this$props.selected,
        showClearButton = _this$props.showClearButton;
      if (!(0,lodash.isArray)(selected) || !selected.length) {
        return null;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-select-control__tags",
          children: selected.map(function (item, i) {
            if (!item.label) {
              return null;
            }
            var screenReaderLabel = (0,build_module/* sprintf */.nv)(/* translators: %1$s: tag label, %2$s: tag number, %3$s: total number of tags */
            (0,build_module.__)('%1$s (%2$s of %3$s)', 'woocommerce'), item.label, i + 1, selected.length);
            return /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.A, {
              id: item.key,
              label: item.label
              // @ts-expect-error key is a string or undefined here
              ,

              remove: _this3.removeResult,
              screenReaderLabel: screenReaderLabel
            }, item.key);
          })
        }), showClearButton && /*#__PURE__*/(0,jsx_runtime.jsxs)(build_module_button/* default */.Ay, {
          className: "woocommerce-select-control__clear",
          isLink: true,
          onClick: this.removeAll,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
            icon: cancel_circle_filled/* default */.A,
            className: "clear-icon"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "screen-reader-text",
            children: (0,build_module.__)('Clear all', 'woocommerce')
          })]
        })]
      });
    }
  }]);
}(react.Component);
/* harmony default export */ const tags = (Tags);
try {
    // @ts-ignore
    Tags.displayName = "Tags";
    // @ts-ignore
    Tags.__docgenInfo = { "description": "A list of tags to display selected items.", "displayName": "Tags", "props": { "onChange": { "defaultValue": null, "description": "Function called when selected results change, passed result list.", "name": "onChange", "required": true, "type": { "name": "(selected: Option[]) => void" } }, "selected": { "defaultValue": null, "description": "An array of objects describing selected values. If the label of the selected\nvalue is omitted, the Tag of that value will not be rendered inside the\nsearch box.", "name": "selected", "required": false, "type": { "name": "Selected" } }, "showClearButton": { "defaultValue": null, "description": "Render a 'Clear' button next to the input box to remove its contents.", "name": "showClearButton", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/select-control/tags.tsx#Tags"] = { docgenInfo: Tags.__docgenInfo, name: "Tags", path: "../../packages/js/components/src/select-control/tags.tsx#Tags" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js
var search = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/search.js");
;// ../../packages/js/components/src/select-control/control.tsx










function control_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function control_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (control_isNativeReflectConstruct = function _isNativeReflectConstruct() {
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
 * A search control to allow user input to filter the options.
 */
var Control = /*#__PURE__*/function (_Component) {
  function Control(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, Control);
    _this = control_callSuper(this, Control, [props]);
    _this.state = {
      isActive: false
    };
    _this.input = (0,react.createRef)();
    _this.updateSearch = _this.updateSearch.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }
  (0,inherits/* default */.A)(Control, _Component);
  return (0,createClass/* default */.A)(Control, [{
    key: "updateSearch",
    value: function updateSearch(onSearch) {
      return function (event) {
        onSearch(event.target.value);
      };
    }
  }, {
    key: "onFocus",
    value: function onFocus(onSearch) {
      var _this2 = this;
      var _this$props = this.props,
        isSearchable = _this$props.isSearchable,
        setExpanded = _this$props.setExpanded,
        showAllOnFocus = _this$props.showAllOnFocus,
        updateSearchOptions = _this$props.updateSearchOptions;
      return function (event) {
        _this2.setState({
          isActive: true
        });
        if (isSearchable && showAllOnFocus) {
          event.target.select();
          updateSearchOptions('');
        } else if (isSearchable) {
          onSearch(event.target.value);
        } else {
          setExpanded(true);
        }
      };
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var onBlur = this.props.onBlur;
      if (typeof onBlur === 'function') {
        onBlur();
      }
      this.setState({
        isActive: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this$props2 = this.props,
        decrementSelectedIndex = _this$props2.decrementSelectedIndex,
        incrementSelectedIndex = _this$props2.incrementSelectedIndex,
        selected = _this$props2.selected,
        onChange = _this$props2.onChange,
        query = _this$props2.query,
        setExpanded = _this$props2.setExpanded;
      if (keycodes_build_module/* BACKSPACE */.G_ === event.keyCode && !query && (0,lodash.isArray)(selected) && selected.length) {
        onChange((0,toConsumableArray/* default */.A)(selected.slice(0, -1)));
      }
      if (keycodes_build_module/* DOWN */.PX === event.keyCode) {
        incrementSelectedIndex();
        setExpanded(true);
        event.preventDefault();
        event.stopPropagation();
      }
      if (keycodes_build_module.UP === event.keyCode) {
        decrementSelectedIndex();
        setExpanded(true);
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      var _this$props3 = this.props,
        multiple = _this$props3.multiple,
        selected = _this$props3.selected;
      if (multiple || !(0,lodash.isArray)(selected) || !selected.length) {
        return null;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-select-control__control-value",
        children: selected[0].label
      });
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props$ariaLabel;
      var _this$props4 = this.props,
        activeId = _this$props4.activeId,
        disabled = _this$props4.disabled,
        hasTags = _this$props4.hasTags,
        inlineTags = _this$props4.inlineTags,
        instanceId = _this$props4.instanceId,
        isExpanded = _this$props4.isExpanded,
        isSearchable = _this$props4.isSearchable,
        listboxId = _this$props4.listboxId,
        onSearch = _this$props4.onSearch,
        placeholder = _this$props4.placeholder,
        searchInputType = _this$props4.searchInputType,
        autoComplete = _this$props4.autoComplete;
      var isActive = this.state.isActive;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        autoComplete: autoComplete || 'off',
        className: "woocommerce-select-control__control-input",
        id: "woocommerce-select-control-".concat(instanceId, "__control-input"),
        ref: this.input,
        type: isSearchable ? searchInputType : 'button',
        value: this.getInputValue(),
        placeholder: isActive ? placeholder : '',
        onChange: this.updateSearch(onSearch),
        onFocus: this.onFocus(onSearch),
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": isExpanded,
        "aria-haspopup": "true",
        "aria-owns": listboxId,
        "aria-controls": listboxId,
        "aria-activedescendant": activeId,
        "aria-describedby": hasTags && inlineTags ? "search-inline-input-".concat(instanceId) : undefined,
        disabled: disabled,
        "aria-label": (_this$props$ariaLabel = this.props.ariaLabel) !== null && _this$props$ariaLabel !== void 0 ? _this$props$ariaLabel : this.props.label
      });
    }
  }, {
    key: "getInputValue",
    value: function getInputValue() {
      var _this$props5 = this.props,
        inlineTags = _this$props5.inlineTags,
        isFocused = _this$props5.isFocused,
        isSearchable = _this$props5.isSearchable,
        multiple = _this$props5.multiple,
        query = _this$props5.query,
        selected = _this$props5.selected;
      var selectedValue = (0,lodash.isArray)(selected) && selected.length && typeof selected[0].label === 'string' ? selected[0].label : '';

      // Show the selected value for simple select dropdowns.
      if (!multiple && !isFocused && !inlineTags) {
        return selectedValue;
      }

      // Show the search query when focused on searchable controls.
      if (isSearchable && isFocused && query) {
        return query;
      }
      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getInputValue,
        _this3 = this;
      var _this$props6 = this.props,
        className = _this$props6.className,
        disabled = _this$props6.disabled,
        hasTags = _this$props6.hasTags,
        help = _this$props6.help,
        inlineTags = _this$props6.inlineTags,
        instanceId = _this$props6.instanceId,
        isSearchable = _this$props6.isSearchable,
        label = _this$props6.label,
        query = _this$props6.query,
        onChange = _this$props6.onChange,
        showClearButton = _this$props6.showClearButton;
      var isActive = this.state.isActive;
      return (/*#__PURE__*/
        // Disable reason: The div below visually simulates an input field. Its
        // child input is the actual input and responds accordingly to all keyboard
        // events, but click events need to be passed onto the child input. There
        // is no appropriate aria role for describing this situation, which is only
        // for the benefit of sighted users.
        /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
        (0,jsx_runtime.jsxs)("div", {
          className: (0,clsx/* default */.A)('components-base-control', 'woocommerce-select-control__control', className, {
            empty: !query || query.length === 0,
            'is-active': isActive,
            'has-tags': inlineTags && hasTags,
            'with-value': (_this$getInputValue = this.getInputValue()) === null || _this$getInputValue === void 0 ? void 0 : _this$getInputValue.length,
            'has-error': !!help,
            'is-disabled': disabled
          }),
          onClick: function onClick(event) {
            // Don't focus the input if the click event is from the error message.
            if (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - event.target.className is not in the type definition.
            event.target.className !== 'components-base-control__help' && _this3.input.current) {
              _this3.input.current.focus();
            }
          },
          children: [isSearchable && /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
            className: "woocommerce-select-control__control-icon",
            icon: search/* default */.A
          }), inlineTags && /*#__PURE__*/(0,jsx_runtime.jsx)(tags, {
            onChange: onChange,
            showClearButton: showClearButton,
            selected: this.props.selected
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "components-base-control__field",
            children: [!!label && /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              htmlFor: "woocommerce-select-control-".concat(instanceId, "__control-input"),
              className: "components-base-control__label",
              children: label
            }), this.renderInput(), inlineTags && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              id: "search-inline-input-".concat(instanceId),
              className: "screen-reader-text",
              children: (0,build_module.__)('Move backward for selected items', 'woocommerce')
            }), !!help && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              id: "woocommerce-select-control-".concat(instanceId, "__help"),
              className: "components-base-control__help",
              children: help
            })]
          })]
        })
        /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
      );
    }
  }]);
}(react.Component);
/* harmony default export */ const control = (Control);
try {
    // @ts-ignore
    Control.displayName = "Control";
    // @ts-ignore
    Control.__docgenInfo = { "description": "A search control to allow user input to filter the options.", "displayName": "Control", "props": { "hasTags": { "defaultValue": null, "description": "Bool to determine if tags should be rendered.", "name": "hasTags", "required": false, "type": { "name": "boolean" } }, "help": { "defaultValue": null, "description": "Help text to be appended beneath the input.", "name": "help", "required": false, "type": { "name": "ReactNode" } }, "inlineTags": { "defaultValue": null, "description": "Render tags inside input, otherwise render below input.", "name": "inlineTags", "required": false, "type": { "name": "boolean" } }, "isSearchable": { "defaultValue": null, "description": "Allow the select options to be filtered by search input.", "name": "isSearchable", "required": false, "type": { "name": "boolean" } }, "instanceId": { "defaultValue": null, "description": "ID of the main SelectControl instance.", "name": "instanceId", "required": false, "type": { "name": "number" } }, "label": { "defaultValue": null, "description": "A label to use for the main input.", "name": "label", "required": false, "type": { "name": "string" } }, "listboxId": { "defaultValue": null, "description": "ID used for a11y in the listbox.", "name": "listboxId", "required": false, "type": { "name": "string" } }, "onBlur": { "defaultValue": null, "description": "Function called when the input is blurred.", "name": "onBlur", "required": false, "type": { "name": "(() => void)" } }, "onChange": { "defaultValue": null, "description": "Function called when selected results change, passed result list.", "name": "onChange", "required": true, "type": { "name": "(selected: Option[]) => void" } }, "onSearch": { "defaultValue": null, "description": "Function called when input field is changed or focused.", "name": "onSearch", "required": true, "type": { "name": "(query: string) => void" } }, "placeholder": { "defaultValue": null, "description": "A placeholder for the search input.", "name": "placeholder", "required": false, "type": { "name": "string" } }, "query": { "defaultValue": null, "description": "Search query entered by user.", "name": "query", "required": false, "type": { "name": "string | null" } }, "selected": { "defaultValue": null, "description": "An array of objects describing selected values. If the label of the selected\nvalue is omitted, the Tag of that value will not be rendered inside the\nsearch box.", "name": "selected", "required": false, "type": { "name": "Selected" } }, "showAllOnFocus": { "defaultValue": null, "description": "Show all options on focusing, even if a query exists.", "name": "showAllOnFocus", "required": false, "type": { "name": "boolean" } }, "autoComplete": { "defaultValue": null, "description": "Control input autocomplete field, defaults: off.", "name": "autoComplete", "required": false, "type": { "name": "string" } }, "setExpanded": { "defaultValue": null, "description": "Function to execute when the control should be expanded or collapsed.", "name": "setExpanded", "required": true, "type": { "name": "(expanded: boolean) => void" } }, "updateSearchOptions": { "defaultValue": null, "description": "Function to execute when the search value changes.", "name": "updateSearchOptions", "required": true, "type": { "name": "(query: string) => void" } }, "decrementSelectedIndex": { "defaultValue": null, "description": "Function to execute when keyboard navigation should decrement the selected index.", "name": "decrementSelectedIndex", "required": true, "type": { "name": "() => void" } }, "incrementSelectedIndex": { "defaultValue": null, "description": "Function to execute when keyboard navigation should increment the selected index.", "name": "incrementSelectedIndex", "required": true, "type": { "name": "() => void" } }, "multiple": { "defaultValue": null, "description": "Multi-select mode allows multiple options to be selected.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "isFocused": { "defaultValue": null, "description": "Is the control currently focused.", "name": "isFocused", "required": false, "type": { "name": "boolean" } }, "activeId": { "defaultValue": null, "description": "ID for accessibility purposes. aria-activedescendant will be set to this value.", "name": "activeId", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "Disable the control.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "isExpanded": { "defaultValue": null, "description": "Is the control currently expanded. This is for accessibility purposes.", "name": "isExpanded", "required": false, "type": { "name": "boolean" } }, "searchInputType": { "defaultValue": null, "description": "The type of input to use for the search field.", "name": "searchInputType", "required": false, "type": { "name": "HTMLInputTypeAttribute" } }, "ariaLabel": { "defaultValue": null, "description": "The aria label for the search input.", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "Class name to be added to the input.", "name": "className", "required": false, "type": { "name": "string" } }, "showClearButton": { "defaultValue": null, "description": "Show the clear button.", "name": "showClearButton", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/select-control/control.tsx#Control"] = { docgenInfo: Control.__docgenInfo, name: "Control", path: "../../packages/js/components/src/select-control/control.tsx#Control" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/components/src/select-control/index.tsx


































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
function select_control_callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, select_control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function select_control_isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (select_control_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var initialState = {
  isExpanded: false,
  isFocused: false,
  query: '',
  searchOptions: []
};

/**
 * A search box which filters options while typing,
 * allowing a user to select from an option from a filtered list.
 */
var SelectControl = /*#__PURE__*/function (_Component) {
  function SelectControl(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, SelectControl);
    _this = select_control_callSuper(this, SelectControl, [props]);
    (0,defineProperty/* default */.A)(_this, "node", null);
    (0,defineProperty/* default */.A)(_this, "activePromise", null);
    (0,defineProperty/* default */.A)(_this, "cacheSearchOptions", []);
    var selected = props.selected,
      options = props.options,
      excludeSelectedOptions = props.excludeSelectedOptions;
    _this.state = _objectSpread(_objectSpread({}, initialState), {}, {
      searchOptions: [],
      selectedIndex: selected && options !== null && options !== void 0 && options.length && !excludeSelectedOptions ? options.findIndex(function (option) {
        return option.key === selected;
      }) : null
    });
    _this.bindNode = _this.bindNode.bind(_this);
    _this.decrementSelectedIndex = _this.decrementSelectedIndex.bind(_this);
    _this.incrementSelectedIndex = _this.incrementSelectedIndex.bind(_this);
    _this.onAutofillChange = _this.onAutofillChange.bind(_this);
    _this.updateSearchOptions = (0,lodash.debounce)(_this.updateSearchOptions.bind(_this), props.searchDebounceTime);
    _this.search = _this.search.bind(_this);
    _this.selectOption = _this.selectOption.bind(_this);
    _this.setExpanded = _this.setExpanded.bind(_this);
    _this.setNewValue = _this.setNewValue.bind(_this);
    return _this;
  }
  (0,inherits/* default */.A)(SelectControl, _Component);
  return (0,createClass/* default */.A)(SelectControl, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selected = this.props.selected;
      if (selected !== prevProps.selected) {
        this.reset(selected);
      }
    }
  }, {
    key: "bindNode",
    value: function bindNode(node) {
      this.node = node;
    }
  }, {
    key: "reset",
    value: function reset() {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelected();
      var _this$props = this.props,
        multiple = _this$props.multiple,
        excludeSelectedOptions = _this$props.excludeSelectedOptions;
      var newState = _objectSpread({}, initialState);
      // Reset selectedIndex if single selection.
      if (!multiple && (0,lodash.isArray)(selected) && selected.length && selected[0].key) {
        newState.selectedIndex = !excludeSelectedOptions ? this.props.options.findIndex(function (i) {
          return i.key === selected[0].key;
        }) : null;
      }
      this.setState(newState);
    }
  }, {
    key: "handleFocusOutside",
    value: function handleFocusOutside() {
      this.reset();
    }
  }, {
    key: "hasMultiple",
    value: function hasMultiple() {
      var _this$props2 = this.props,
        multiple = _this$props2.multiple,
        selected = _this$props2.selected;
      if (!multiple) {
        return false;
      }
      if (Array.isArray(selected)) {
        return selected.some(function (item) {
          return Boolean(item.label);
        });
      }
      return Boolean(selected);
    }
  }, {
    key: "getSelected",
    value: function getSelected() {
      var _this$props3 = this.props,
        multiple = _this$props3.multiple,
        options = _this$props3.options,
        selected = _this$props3.selected;

      // Return the passed value if an array is provided.
      if (multiple || Array.isArray(selected)) {
        return selected;
      }
      var selectedOption = options.find(function (option) {
        return option.key === selected;
      });
      return selectedOption ? [selectedOption] : [];
    }
  }, {
    key: "selectOption",
    value: function selectOption(option) {
      var _this$props4 = this.props,
        multiple = _this$props4.multiple,
        selected = _this$props4.selected;
      var newSelected = multiple && (0,lodash.isArray)(selected) ? [].concat((0,toConsumableArray/* default */.A)(selected), [option]) : [option];
      this.reset(newSelected);
      var oldSelected = Array.isArray(selected) ? selected : [{
        key: selected
      }];
      var isSelected = oldSelected.findIndex(function (val) {
        return val.key === option.key;
      });
      if (isSelected === -1) {
        this.setNewValue(newSelected);
      }

      // After selecting option, the list will reset and we'd need to correct selectedIndex.
      var newSelectedIndex = this.props.excludeSelectedOptions ?
      // Since we're excluding the selected option, invalidate selection
      // so re-focusing wont immediately set it to the neighbouring option.
      null : this.getOptions().findIndex(function (i) {
        return i.key === option.key;
      });
      this.setState({
        selectedIndex: newSelectedIndex
      });
    }
  }, {
    key: "setNewValue",
    value: function setNewValue(newValue) {
      var _this$props5 = this.props,
        onChange = _this$props5.onChange,
        selected = _this$props5.selected,
        multiple = _this$props5.multiple;
      var query = this.state.query;
      // Trigger a change if the selected value is different and pass back
      // an array or string depending on the original value.
      if (multiple || Array.isArray(selected)) {
        onChange(newValue, query);
      } else {
        onChange(newValue.length > 0 ? newValue[0].key : '', query);
      }
    }
  }, {
    key: "decrementSelectedIndex",
    value: function decrementSelectedIndex() {
      var selectedIndex = this.state.selectedIndex;
      var options = this.getOptions();
      var nextSelectedIndex = (0,lodash.isNumber)(selectedIndex) ? (selectedIndex === 0 ? options.length : selectedIndex) - 1 : options.length - 1;
      this.setState({
        selectedIndex: nextSelectedIndex
      });
    }
  }, {
    key: "incrementSelectedIndex",
    value: function incrementSelectedIndex() {
      var selectedIndex = this.state.selectedIndex;
      var options = this.getOptions();
      var nextSelectedIndex = (0,lodash.isNumber)(selectedIndex) ? (selectedIndex + 1) % options.length : 0;
      this.setState({
        selectedIndex: nextSelectedIndex
      });
    }
  }, {
    key: "announce",
    value: function announce(searchOptions) {
      var debouncedSpeak = this.props.debouncedSpeak;
      if (!debouncedSpeak) {
        return;
      }
      if (!!searchOptions.length) {
        debouncedSpeak((0,build_module/* sprintf */.nv)(
        // translators: %d: number of results.
        (0,build_module._n)('%d result found, use up and down arrow keys to navigate.', '%d results found, use up and down arrow keys to navigate.', searchOptions.length, 'woocommerce'), searchOptions.length), 'assertive');
      } else {
        debouncedSpeak((0,build_module.__)('No results.', 'woocommerce'), 'assertive');
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props6 = this.props,
        isSearchable = _this$props6.isSearchable,
        options = _this$props6.options,
        excludeSelectedOptions = _this$props6.excludeSelectedOptions;
      var searchOptions = this.state.searchOptions;
      var selected = this.getSelected();
      var selectedKeys = (0,lodash.isArray)(selected) ? selected.map(function (option) {
        return option.key;
      }) : [];
      var shownOptions = isSearchable ? searchOptions : options;
      if (excludeSelectedOptions) {
        return shownOptions === null || shownOptions === void 0 ? void 0 : shownOptions.filter(function (option) {
          return !selectedKeys.includes(option.key);
        });
      }
      return shownOptions;
    }
  }, {
    key: "getOptionsByQuery",
    value: function getOptionsByQuery(options, query) {
      var _this$props7 = this.props,
        getSearchExpression = _this$props7.getSearchExpression,
        maxResults = _this$props7.maxResults,
        onFilter = _this$props7.onFilter,
        ignoreDiacritics = _this$props7.ignoreDiacritics;
      var filtered = [];

      // Create a regular expression to filter the options.
      var baseQuery = query ? query.trim() : '';
      var normalizedQuery = ignoreDiacritics ? baseQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : baseQuery;
      var expression = getSearchExpression((0,lodash.escapeRegExp)(normalizedQuery));
      var search = expression ? new RegExp(expression, 'i') : /^$/;
      for (var i = 0; i < options.length; i++) {
        var option = options[i];

        // Merge label into keywords
        var _option$keywords = option.keywords,
          keywords = _option$keywords === void 0 ? [] : _option$keywords;
        if (typeof option.label === 'string') {
          keywords = [].concat((0,toConsumableArray/* default */.A)(keywords), [option.label]);
        }
        var isMatch = keywords.some(function (keyword) {
          var normalizedKeyword = ignoreDiacritics ? keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : keyword;
          return search.test(normalizedKeyword);
        });
        if (!isMatch) {
          continue;
        }
        filtered.push(option);

        // Abort early if max reached
        if (maxResults && filtered.length === maxResults) {
          break;
        }
      }
      return onFilter(filtered, query);
    }
  }, {
    key: "setExpanded",
    value: function setExpanded(value) {
      this.setState({
        isExpanded: value
      });
    }
  }, {
    key: "search",
    value: function search(query) {
      var _this2 = this;
      var cacheSearchOptions = this.cacheSearchOptions || [];
      var searchOptions = query !== null && !query.length && !this.props.hideBeforeSearch ? cacheSearchOptions : this.getOptionsByQuery(cacheSearchOptions, query);
      this.setState({
        query: query,
        isFocused: true,
        searchOptions: searchOptions,
        selectedIndex: query && (query === null || query === void 0 ? void 0 : query.length) > 0 ? null : this.state.selectedIndex // Only reset selectedIndex if we're actually searching.
      }, function () {
        var _this2$getOptions;
        _this2.setState({
          isExpanded: Boolean((_this2$getOptions = _this2.getOptions()) === null || _this2$getOptions === void 0 ? void 0 : _this2$getOptions.length)
        });
      });
      this.updateSearchOptions(query);
    }
  }, {
    key: "updateSearchOptions",
    value: function updateSearchOptions(query) {
      var _this3 = this;
      var _this$props8 = this.props,
        hideBeforeSearch = _this$props8.hideBeforeSearch,
        options = _this$props8.options,
        onSearch = _this$props8.onSearch;
      var promise = this.activePromise = Promise.resolve(onSearch(options, query)).then(function (promiseOptions) {
        if (promise !== _this3.activePromise) {
          // Another promise has become active since this one was asked to resolve, so do nothing,
          // or else we might end triggering a race condition updating the state.
          return;
        }
        _this3.cacheSearchOptions = promiseOptions;

        // Get all options if `hideBeforeSearch` is enabled and query is not null.
        var searchOptions = query !== null && !query.length && !hideBeforeSearch ? promiseOptions : _this3.getOptionsByQuery(promiseOptions, query);
        _this3.setState({
          searchOptions: searchOptions,
          selectedIndex: query && (query === null || query === void 0 ? void 0 : query.length) > 0 ? null : _this3.state.selectedIndex // Only reset selectedIndex if we're actually searching.
        }, function () {
          _this3.setState({
            isExpanded: Boolean(_this3.getOptions().length)
          });
          _this3.announce(searchOptions);
        });
      });
    }
  }, {
    key: "onAutofillChange",
    value: function onAutofillChange(event) {
      var options = this.props.options;
      var searchOptions = this.getOptionsByQuery(options, event.target.value);
      if (searchOptions.length === 1) {
        this.selectOption(searchOptions[0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
        autofill = _this$props9.autofill,
        children = _this$props9.children,
        className = _this$props9.className,
        disabled = _this$props9.disabled,
        controlClassName = _this$props9.controlClassName,
        inlineTags = _this$props9.inlineTags,
        instanceId = _this$props9.instanceId,
        isSearchable = _this$props9.isSearchable,
        options = _this$props9.options,
        virtualScroll = _this$props9.virtualScroll,
        virtualItemHeight = _this$props9.virtualItemHeight,
        virtualListHeight = _this$props9.virtualListHeight;
      var _this$state = this.state,
        isExpanded = _this$state.isExpanded,
        isFocused = _this$state.isFocused,
        selectedIndex = _this$state.selectedIndex;
      var hasMultiple = this.hasMultiple();
      var _ref = (0,lodash.isNumber)(selectedIndex) && options[selectedIndex] || {},
        _ref$key = _ref.key,
        selectedKey = _ref$key === void 0 ? '' : _ref$key;
      var listboxId = isExpanded ? "woocommerce-select-control__listbox-".concat(instanceId) : undefined;
      var activeId = isExpanded ? "woocommerce-select-control__option-".concat(instanceId, "-").concat(selectedKey) : undefined;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('woocommerce-select-control', className, {
          'has-inline-tags': hasMultiple && inlineTags,
          'is-focused': isFocused,
          'is-searchable': isSearchable
        }),
        ref: this.bindNode,
        children: [autofill && /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          onChange: this.onAutofillChange,
          name: autofill,
          type: "text",
          className: "woocommerce-select-control__autofill-input",
          tabIndex: -1
        }), children, /*#__PURE__*/(0,jsx_runtime.jsx)(control, {
          help: this.props.help,
          label: this.props.label,
          inlineTags: inlineTags,
          isSearchable: isSearchable,
          isFocused: isFocused,
          instanceId: instanceId,
          searchInputType: this.props.searchInputType,
          query: this.state.query,
          placeholder: this.props.placeholder,
          autoComplete: this.props.autoComplete,
          multiple: this.props.multiple,
          ariaLabel: this.props.ariaLabel,
          onBlur: this.props.onBlur,
          showAllOnFocus: this.props.showAllOnFocus,
          activeId: activeId,
          className: controlClassName,
          disabled: disabled,
          hasTags: hasMultiple,
          isExpanded: isExpanded,
          listboxId: listboxId,
          onSearch: this.search,
          selected: this.getSelected(),
          onChange: this.setNewValue,
          setExpanded: this.setExpanded,
          updateSearchOptions: this.updateSearchOptions,
          decrementSelectedIndex: this.decrementSelectedIndex,
          incrementSelectedIndex: this.incrementSelectedIndex,
          showClearButton: this.props.showClearButton
        }), !inlineTags && hasMultiple && /*#__PURE__*/(0,jsx_runtime.jsx)(tags, {
          onChange: this.props.onChange,
          showClearButton: this.props.showClearButton,
          selected: this.getSelected()
        }), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)(list, {
          instanceId: instanceId,
          selectedIndex: selectedIndex,
          staticList: this.props.staticList,
          listboxId: listboxId,
          node: this.node,
          onSelect: this.selectOption,
          onSearch: this.search,
          options: this.getOptions(),
          decrementSelectedIndex: this.decrementSelectedIndex,
          incrementSelectedIndex: this.incrementSelectedIndex,
          setExpanded: this.setExpanded,
          virtualScroll: virtualScroll,
          virtualItemHeight: virtualItemHeight,
          virtualListHeight: virtualListHeight
        })]
      });
    }
  }]);
}(react.Component);
(0,defineProperty/* default */.A)(SelectControl, "defaultProps", {
  ignoreDiacritics: false,
  excludeSelectedOptions: true,
  getSearchExpression: lodash.identity,
  inlineTags: false,
  isSearchable: false,
  onChange: lodash.noop,
  onFilter: lodash.identity,
  onSearch: function onSearch(options) {
    return Promise.resolve(options);
  },
  maxResults: 0,
  multiple: false,
  searchDebounceTime: 0,
  searchInputType: 'search',
  selected: [],
  showAllOnFocus: false,
  showClearButton: false,
  hideBeforeSearch: false,
  staticList: false,
  autoComplete: 'off',
  virtualScroll: false,
  virtualItemHeight: 35,
  virtualListHeight: 300
});
/* harmony default export */ const select_control = ((0,compose/* default */.A)(with_spoken_messages/* default */.A, with_instance_id/* default */.A, with_focus_outside/* default */.A // this MUST be the innermost HOC as it calls handleFocusOutside
)(SelectControl));
try {
    // @ts-ignore
    SelectControl.displayName = "SelectControl";
    // @ts-ignore
    SelectControl.__docgenInfo = { "description": "A search box which filters options while typing,\nallowing a user to select from an option from a filtered list.", "displayName": "SelectControl", "props": { "autofill": { "defaultValue": null, "description": "Name to use for the autofill field, not used if no string is passed.", "name": "autofill", "required": false, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed before the `Control` of this component.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "className": { "defaultValue": null, "description": "Class name applied to parent div.", "name": "className", "required": false, "type": { "name": "string" } }, "controlClassName": { "defaultValue": null, "description": "Class name applied to control wrapper.", "name": "controlClassName", "required": false, "type": { "name": "string" } }, "ignoreDiacritics": { "defaultValue": { value: "false" }, "description": "Whether to ignore diacritics when matching search queries.\nIf true, both the user\u2019s query and all option keywords are normalised to their base characters.", "name": "ignoreDiacritics", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "Allow the select options to be disabled.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "excludeSelectedOptions": { "defaultValue": { value: "true" }, "description": "Exclude already selected options from the options list.", "name": "excludeSelectedOptions", "required": false, "type": { "name": "boolean" } }, "onFilter": { "defaultValue": null, "description": "Add or remove items to the list of options after filtering,\npassed the array of filtered options and should return an array of options.", "name": "onFilter", "required": false, "type": { "name": "((options: Option[], query: string | null) => Option[])" } }, "getSearchExpression": { "defaultValue": null, "description": "Function to add regex expression to the filter the results, passed the search query.", "name": "getSearchExpression", "required": false, "type": { "name": "((query: string) => string | RegExp | null)" } }, "help": { "defaultValue": null, "description": "Help text to be appended beneath the input.", "name": "help", "required": false, "type": { "name": "ReactNode" } }, "inlineTags": { "defaultValue": { value: "false" }, "description": "Render tags inside input, otherwise render below input.", "name": "inlineTags", "required": false, "type": { "name": "boolean" } }, "isSearchable": { "defaultValue": { value: "false" }, "description": "Allow the select options to be filtered by search input.", "name": "isSearchable", "required": false, "type": { "name": "boolean" } }, "label": { "defaultValue": null, "description": "A label to use for the main input.", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "Function called when selected results change, passed result list.", "name": "onChange", "required": false, "type": { "name": "((selected: string | Option[], query?: string | null) => void)" } }, "onSearch": { "defaultValue": { value: "( options: Option[] ) => Promise.resolve( options )" }, "description": "Function run after search query is updated, passed previousOptions and query,\nshould return a promise with an array of updated options.", "name": "onSearch", "required": false, "type": { "name": "((previousOptions: Option[], query: string | null) => Promise<Option[]>)" } }, "options": { "defaultValue": null, "description": "An array of objects for the options list.  The option along with its key, label and\nvalue will be returned in the onChange event.", "name": "options", "required": true, "type": { "name": "Option[]" } }, "placeholder": { "defaultValue": null, "description": "A placeholder for the search input.", "name": "placeholder", "required": false, "type": { "name": "string" } }, "searchDebounceTime": { "defaultValue": { value: "0" }, "description": "Time in milliseconds to debounce the search function after typing.", "name": "searchDebounceTime", "required": false, "type": { "name": "number" } }, "selected": { "defaultValue": { value: "[]" }, "description": "An array of objects describing selected values or optionally a string for a single value.\nIf the label of the selected value is omitted, the Tag of that value will not\nbe rendered inside the search box.", "name": "selected", "required": false, "type": { "name": "Selected" } }, "maxResults": { "defaultValue": { value: "0" }, "description": "A limit for the number of results shown in the options menu.  Set to 0 for no limit.", "name": "maxResults", "required": false, "type": { "name": "number" } }, "multiple": { "defaultValue": { value: "false" }, "description": "Allow multiple option selections.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "showClearButton": { "defaultValue": { value: "false" }, "description": "Render a 'Clear' button next to the input box to remove its contents.", "name": "showClearButton", "required": false, "type": { "name": "boolean" } }, "searchInputType": { "defaultValue": { value: "search" }, "description": "The input type for the search box control.", "name": "searchInputType", "required": false, "type": { "name": "HTMLInputTypeAttribute" } }, "hideBeforeSearch": { "defaultValue": { value: "false" }, "description": "Only show list options after typing a search query.", "name": "hideBeforeSearch", "required": false, "type": { "name": "boolean" } }, "showAllOnFocus": { "defaultValue": { value: "false" }, "description": "Show all options on focusing, even if a query exists.", "name": "showAllOnFocus", "required": false, "type": { "name": "boolean" } }, "staticList": { "defaultValue": { value: "false" }, "description": "Render results list positioned statically instead of absolutely.", "name": "staticList", "required": false, "type": { "name": "boolean" } }, "autoComplete": { "defaultValue": { value: "off" }, "description": "autocomplete prop for the Control input field.", "name": "autoComplete", "required": false, "type": { "name": "string" } }, "instanceId": { "defaultValue": null, "description": "Instance ID for the component.", "name": "instanceId", "required": false, "type": { "name": "number" } }, "debouncedSpeak": { "defaultValue": null, "description": "From withSpokenMessages", "name": "debouncedSpeak", "required": false, "type": { "name": "((message: string, assertive?: string) => void)" } }, "ariaLabel": { "defaultValue": null, "description": "aria-label for the search input.", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "onBlur": { "defaultValue": null, "description": "On Blur callback.", "name": "onBlur", "required": false, "type": { "name": "(() => void)" } }, "virtualScroll": { "defaultValue": { value: "false" }, "description": "Enable virtual scrolling for large lists of options.", "name": "virtualScroll", "required": false, "type": { "name": "boolean" } }, "virtualItemHeight": { "defaultValue": { value: "35" }, "description": "Height in pixels for each virtual item. Required when virtualScroll is true.", "name": "virtualItemHeight", "required": false, "type": { "name": "number" } }, "virtualListHeight": { "defaultValue": { value: "300" }, "description": "Maximum height in pixels for the virtualized list. Default is 300.", "name": "virtualListHeight", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/select-control/index.tsx#SelectControl"] = { docgenInfo: SelectControl.__docgenInfo, name: "SelectControl", path: "../../packages/js/components/src/select-control/index.tsx#SelectControl" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    selectcontrol.displayName = "selectcontrol";
    // @ts-ignore
    selectcontrol.__docgenInfo = { "description": "", "displayName": "selectcontrol", "props": { "autofill": { "defaultValue": null, "description": "Name to use for the autofill field, not used if no string is passed.", "name": "autofill", "required": false, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed before the `Control` of this component.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "className": { "defaultValue": null, "description": "Class name applied to parent div.", "name": "className", "required": false, "type": { "name": "string" } }, "controlClassName": { "defaultValue": null, "description": "Class name applied to control wrapper.", "name": "controlClassName", "required": false, "type": { "name": "string" } }, "ignoreDiacritics": { "defaultValue": null, "description": "Whether to ignore diacritics when matching search queries.\nIf true, both the user\u2019s query and all option keywords are normalised to their base characters.", "name": "ignoreDiacritics", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "Allow the select options to be disabled.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "excludeSelectedOptions": { "defaultValue": null, "description": "Exclude already selected options from the options list.", "name": "excludeSelectedOptions", "required": false, "type": { "name": "boolean" } }, "onFilter": { "defaultValue": null, "description": "Add or remove items to the list of options after filtering,\npassed the array of filtered options and should return an array of options.", "name": "onFilter", "required": false, "type": { "name": "((options: Option[], query: string | null) => Option[])" } }, "getSearchExpression": { "defaultValue": null, "description": "Function to add regex expression to the filter the results, passed the search query.", "name": "getSearchExpression", "required": false, "type": { "name": "((query: string) => string | RegExp | null)" } }, "help": { "defaultValue": null, "description": "Help text to be appended beneath the input.", "name": "help", "required": false, "type": { "name": "ReactNode" } }, "inlineTags": { "defaultValue": null, "description": "Render tags inside input, otherwise render below input.", "name": "inlineTags", "required": false, "type": { "name": "boolean" } }, "isSearchable": { "defaultValue": null, "description": "Allow the select options to be filtered by search input.", "name": "isSearchable", "required": false, "type": { "name": "boolean" } }, "label": { "defaultValue": null, "description": "A label to use for the main input.", "name": "label", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "Function called when selected results change, passed result list.", "name": "onChange", "required": false, "type": { "name": "((selected: string | Option[], query?: string | null) => void)" } }, "onSearch": { "defaultValue": null, "description": "Function run after search query is updated, passed previousOptions and query,\nshould return a promise with an array of updated options.", "name": "onSearch", "required": false, "type": { "name": "((previousOptions: Option[], query: string | null) => Promise<Option[]>)" } }, "options": { "defaultValue": null, "description": "An array of objects for the options list.  The option along with its key, label and\nvalue will be returned in the onChange event.", "name": "options", "required": true, "type": { "name": "Option[]" } }, "placeholder": { "defaultValue": null, "description": "A placeholder for the search input.", "name": "placeholder", "required": false, "type": { "name": "string" } }, "searchDebounceTime": { "defaultValue": null, "description": "Time in milliseconds to debounce the search function after typing.", "name": "searchDebounceTime", "required": false, "type": { "name": "number" } }, "selected": { "defaultValue": null, "description": "An array of objects describing selected values or optionally a string for a single value.\nIf the label of the selected value is omitted, the Tag of that value will not\nbe rendered inside the search box.", "name": "selected", "required": false, "type": { "name": "Selected" } }, "maxResults": { "defaultValue": null, "description": "A limit for the number of results shown in the options menu.  Set to 0 for no limit.", "name": "maxResults", "required": false, "type": { "name": "number" } }, "multiple": { "defaultValue": null, "description": "Allow multiple option selections.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "showClearButton": { "defaultValue": null, "description": "Render a 'Clear' button next to the input box to remove its contents.", "name": "showClearButton", "required": false, "type": { "name": "boolean" } }, "searchInputType": { "defaultValue": null, "description": "The input type for the search box control.", "name": "searchInputType", "required": false, "type": { "name": "HTMLInputTypeAttribute" } }, "hideBeforeSearch": { "defaultValue": null, "description": "Only show list options after typing a search query.", "name": "hideBeforeSearch", "required": false, "type": { "name": "boolean" } }, "showAllOnFocus": { "defaultValue": null, "description": "Show all options on focusing, even if a query exists.", "name": "showAllOnFocus", "required": false, "type": { "name": "boolean" } }, "staticList": { "defaultValue": null, "description": "Render results list positioned statically instead of absolutely.", "name": "staticList", "required": false, "type": { "name": "boolean" } }, "autoComplete": { "defaultValue": null, "description": "autocomplete prop for the Control input field.", "name": "autoComplete", "required": false, "type": { "name": "string" } }, "instanceId": { "defaultValue": null, "description": "Instance ID for the component.", "name": "instanceId", "required": false, "type": { "name": "number" } }, "debouncedSpeak": { "defaultValue": null, "description": "From withSpokenMessages", "name": "debouncedSpeak", "required": false, "type": { "name": "((message: string, assertive?: string) => void)" } }, "ariaLabel": { "defaultValue": null, "description": "aria-label for the search input.", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "onBlur": { "defaultValue": null, "description": "On Blur callback.", "name": "onBlur", "required": false, "type": { "name": "(() => void)" } }, "virtualScroll": { "defaultValue": null, "description": "Enable virtual scrolling for large lists of options.", "name": "virtualScroll", "required": false, "type": { "name": "boolean" } }, "virtualItemHeight": { "defaultValue": null, "description": "Height in pixels for each virtual item. Required when virtualScroll is true.", "name": "virtualItemHeight", "required": false, "type": { "name": "number" } }, "virtualListHeight": { "defaultValue": null, "description": "Maximum height in pixels for the virtualized list. Default is 300.", "name": "virtualListHeight", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/select-control/index.tsx#selectcontrol"] = { docgenInfo: selectcontrol.__docgenInfo, name: "selectcontrol", path: "../../packages/js/components/src/select-control/index.tsx#selectcontrol" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/tag/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");




/**
 * External dependencies
 */








var Tag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function (_ref, removeButtonRef) {
  var id = _ref.id,
    label = _ref.label,
    popoverContents = _ref.popoverContents,
    remove = _ref.remove,
    screenReaderLabel = _ref.screenReaderLabel,
    className = _ref.className;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Tag).toString();
  var labelId = "woocommerce-tag__label-".concat(instanceId);
  screenReaderLabel = screenReaderLabel || label;
  if (!label) {
    // A null label probably means something went wrong
    // @todo Maybe this should be a loading indicator?
    return null;
  }
  label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__/* .decodeEntities */ .S)(label);
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)('woocommerce-tag', className, {
    'has-remove': !!remove
  });
  var labelTextNode = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "screen-reader-text",
      children: screenReaderLabel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      "aria-hidden": "true",
      children: label
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
    className: classes,
    children: [popoverContents ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
      className: "woocommerce-tag__text",
      id: labelId,
      onClick: function onClick() {
        return setIsVisible(true);
      },
      children: labelTextNode
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "woocommerce-tag__text",
      id: labelId,
      children: labelTextNode
    }), popoverContents && isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
      onClose: function onClose() {
        return setIsVisible(false);
      },
      children: popoverContents
    }), remove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
      className: "woocommerce-tag__remove",
      ref: removeButtonRef,
      onClick: remove(id),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__/* .sprintf */ .nv)(
      // translators: %s is the name of the tag being removed.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove %s', 'woocommerce'), label),
      "aria-describedby": labelId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
        size: 20,
        className: "clear-icon"
      })
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
try {
    // @ts-ignore
    tag.displayName = "tag";
    // @ts-ignore
    tag.__docgenInfo = { "description": "", "displayName": "tag", "props": { "label": { "defaultValue": null, "description": "The name for this item, displayed as the tag's text.", "name": "label", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "A unique ID for this item. This is used to identify the item when the remove button is clicked.", "name": "id", "required": false, "type": { "name": "string | number" } }, "popoverContents": { "defaultValue": null, "description": "Contents to display on click in a popover", "name": "popoverContents", "required": false, "type": { "name": "ReactNode" } }, "remove": { "defaultValue": null, "description": "A function called when the remove X is clicked. If not used, no X icon will display.", "name": "remove", "required": false, "type": { "name": "((id: string | number) => MouseEventHandler<HTMLButtonElement>)" } }, "screenReaderLabel": { "defaultValue": null, "description": "A more descriptive label for screen reader users. Defaults to the `name` prop.", "name": "screenReaderLabel", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "Additional CSS classes.", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/tag/index.tsx#tag"] = { docgenInfo: tag.__docgenInfo, name: "tag", path: "../../packages/js/components/src/tag/index.tsx#tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/compare-filter/stories/compare-filter.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../packages/js/components/src/compare-filter/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

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


var query = {};
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
var Basic = function Basic(_ref) {
  var _ref$path = _ref.path,
    path = _ref$path === void 0 ? new URL(document.location).searchParams.get('path') : _ref$path;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(___WEBPACK_IMPORTED_MODULE_19__/* .CompareFilter */ .S, _objectSpread({
    path: path,
    query: query
  }, compareFilter));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/CompareFilter',
  component: ___WEBPACK_IMPORTED_MODULE_19__/* .CompareFilter */ .S
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "({\n  path = new URL(document.location).searchParams.get('path')\n}) => <CompareFilter path={path} query={query} {...compareFilter} />",
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