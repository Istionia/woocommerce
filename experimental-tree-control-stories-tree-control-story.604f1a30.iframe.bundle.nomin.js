"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6755],{

/***/ "../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ interpolate)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/tokenize.js
function identifyToken(item) {
  // {{/example}}
  if (item.startsWith('{{/')) {
    return {
      type: 'componentClose',
      value: item.replace(/\W/g, '')
    };
  } // {{example /}}


  if (item.endsWith('/}}')) {
    return {
      type: 'componentSelfClosing',
      value: item.replace(/\W/g, '')
    };
  } // {{example}}


  if (item.startsWith('{{')) {
    return {
      type: 'componentOpen',
      value: item.replace(/\W/g, '')
    };
  }

  return {
    type: 'string',
    value: item
  };
}

function tokenize(mixedString) {
  const tokenStrings = mixedString.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g); // split to components and strings

  return tokenStrings.map(identifyToken);
}
;// ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js



function getCloseIndex(openIndex, tokens) {
  const openToken = tokens[openIndex];
  let nestLevel = 0;

  for (let i = openIndex + 1; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.value === openToken.value) {
      if (token.type === 'componentOpen') {
        nestLevel++;
        continue;
      }

      if (token.type === 'componentClose') {
        if (nestLevel === 0) {
          return i;
        }

        nestLevel--;
      }
    }
  } // if we get this far, there was no matching close token


  throw new Error('Missing closing component token `' + openToken.value + '`');
}

function buildChildren(tokens, components) {
  let children = [];
  let openComponent;
  let openIndex;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'string') {
      children.push(token.value);
      continue;
    } // component node should at least be set


    if (components[token.value] === undefined) {
      throw new Error(`Invalid interpolation, missing component node: \`${token.value}\``);
    } // should be either ReactElement or null (both type "object"), all other types deprecated


    if (typeof components[token.value] !== 'object') {
      throw new Error(`Invalid interpolation, component node must be a ReactElement or null: \`${token.value}\``);
    } // we should never see a componentClose token in this loop


    if (token.type === 'componentClose') {
      throw new Error(`Missing opening component token: \`${token.value}\``);
    }

    if (token.type === 'componentOpen') {
      openComponent = components[token.value];
      openIndex = i;
      break;
    } // componentSelfClosing token


    children.push(components[token.value]);
    continue;
  }

  if (openComponent) {
    const closeIndex = getCloseIndex(openIndex, tokens);
    const grandChildTokens = tokens.slice(openIndex + 1, closeIndex);
    const grandChildren = buildChildren(grandChildTokens, components);
    const clonedOpenComponent = /*#__PURE__*/(0,react.cloneElement)(openComponent, {}, grandChildren);
    children.push(clonedOpenComponent);

    if (closeIndex < tokens.length - 1) {
      const siblingTokens = tokens.slice(closeIndex + 1);
      const siblings = buildChildren(siblingTokens, components);
      children = children.concat(siblings);
    }
  }

  children = children.filter(Boolean);

  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return children[0];
  }

  return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, ...children);
}

function interpolate(options) {
  const {
    mixedString,
    components,
    throwErrors
  } = options;

  if (!components) {
    return mixedString;
  }

  if (typeof components !== 'object') {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because components is not an object`);
    }

    return mixedString;
  }

  const tokens = tokenize(mixedString);

  try {
    return buildChildren(tokens, components);
  } catch (error) {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because of error \`${error.message}\``);
    }

    return mixedString;
  }
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useMergeRefs)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @template T
 * @typedef {T extends import('react').Ref<infer R> ? R : never} TypeFromRef
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @template T
 * @param {import('react').Ref<T>} ref
 * @param {T}                      value
 */
function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref && ref.hasOwnProperty('current')) {
    /* eslint-disable jsdoc/no-undefined-types */
    /** @type {import('react').MutableRefObject<T>} */ref.current = value;
    /* eslint-enable jsdoc/no-undefined-types */
  }
}

/**
 * Merges refs into one ref callback.
 *
 * It also ensures that the merged ref callbacks are only called when they
 * change (as a result of a `useCallback` dependency update) OR when the ref
 * value changes, just as React does when passing a single ref callback to the
 * component.
 *
 * As expected, if you pass a new function on every render, the ref callback
 * will be called after every render.
 *
 * If you don't wish a ref callback to be called after every render, wrap it
 * with `useCallback( callback, dependencies )`. When a dependency changes, the
 * old ref callback will be called with `null` and the new ref callback will be
 * called with the same value.
 *
 * To make ref callbacks easier to use, you can also pass the result of
 * `useRefEffect`, which makes cleanup easier by allowing you to return a
 * cleanup function instead of handling `null`.
 *
 * It's also possible to _disable_ a ref (and its behaviour) by simply not
 * passing the ref.
 *
 * ```jsx
 * const ref = useRefEffect( ( node ) => {
 *   node.addEventListener( ... );
 *   return () => {
 *     node.removeEventListener( ... );
 *   };
 * }, [ ...dependencies ] );
 * const otherRef = useRef();
 * const mergedRefs useMergeRefs( [
 *   enabled && ref,
 *   otherRef,
 * ] );
 * return <div ref={ mergedRefs } />;
 * ```
 *
 * @template {import('react').Ref<any>} TRef
 * @param {Array<TRef>} refs The refs to be merged.
 *
 * @return {import('react').RefCallback<TypeFromRef<TRef>>} The merged ref callback.
 */
function useMergeRefs(refs) {
  const element = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isAttached = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const didElementChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {import('react').MutableRefObject<TRef[]>} */
  /* eslint-enable jsdoc/no-undefined-types */
  const previousRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const currentRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);

  // Update on render before the ref callback is called, so the ref callback
  // always has access to the current refs.
  currentRefs.current = refs;

  // If any of the refs change, call the previous ref with `null` and the new
  // ref with the node, except when the element changes in the same cycle, in
  // which case the ref callbacks will already have been called.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (didElementChange.current === false && isAttached.current === true) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefs.current[index];
        if (ref !== previousRef) {
          assignRef(previousRef, null);
          assignRef(ref, element.current);
        }
      });
    }
    previousRefs.current = refs;
  }, refs);

  // No dependencies, must be reset after every render so ref callbacks are
  // correctly called after a ref change.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    didElementChange.current = false;
  });

  // There should be no dependencies so that `callback` is only called when
  // the node changes.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChange.current = true;
    isAttached.current = value !== null;

    // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.
    const refsToAssign = value ? currentRefs.current : previousRefs.current;

    // Update the latest refs.
    for (const ref of refsToAssign) {
      assignRef(ref, value);
    }
  }, []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRefEffect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Effect-like ref callback. Just like with `useEffect`, this allows you to
 * return a cleanup function to be run if the ref changes or one of the
 * dependencies changes. The ref is provided as an argument to the callback
 * functions. The main difference between this and `useEffect` is that
 * the `useEffect` callback is not called when the ref changes, but this is.
 * Pass the returned ref callback as the component's ref and merge multiple refs
 * with `useMergeRefs`.
 *
 * It's worth noting that if the dependencies array is empty, there's not
 * strictly a need to clean up event handlers for example, because the node is
 * to be removed. It *is* necessary if you add dependencies because the ref
 * callback will be called multiple times for the same node.
 *
 * @param callback     Callback with ref as argument.
 * @param dependencies Dependencies of the callback.
 *
 * @return Ref callback.
 */
function useRefEffect(callback, dependencies) {
  const cleanup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      cleanup.current = callback(node);
    } else if (cleanup.current) {
      cleanup.current();
    }
  }, dependencies);
}
//# sourceMappingURL=index.js.map

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

/***/ "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomItemLabel: () => (/* binding */ CustomItemLabel),
  CustomItemLabelOnSearch: () => (/* binding */ CustomItemLabelOnSearch),
  ExpandOnFilter: () => (/* binding */ ExpandOnFilter),
  HighlightFirstMatchingItem: () => (/* binding */ HighlightFirstMatchingItem),
  SelectionMultiple: () => (/* binding */ SelectionMultiple),
  SelectionSingle: () => (/* binding */ SelectionSingle),
  SimpleTree: () => (/* binding */ SimpleTree),
  "default": () => (/* binding */ tree_control_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-json.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js + 1 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js
var text_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts
var linked_tree_utils = __webpack_require__("../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/tree.tsx + 7 modules
var tree = __webpack_require__("../../packages/js/components/src/experimental-tree-control/tree.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../packages/js/components/src/experimental-tree-control/tree-control.tsx












var _excluded = ["items"];
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



var TreeControl = /*#__PURE__*/(0,react.forwardRef)(function ForwardedTree(_ref, ref) {
  var items = _ref.items,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var linkedTree = (0,linked_tree_utils/* createLinkedTree */.YD)(items, props.createValue);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* Tree */.P, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref,
    items: linkedTree
  }));
});
try {
    // @ts-ignore
    TreeControl.displayName = "TreeControl";
    // @ts-ignore
    TreeControl.__docgenInfo = { "description": "", "displayName": "TreeControl", "props": { "onSelect": { "defaultValue": null, "description": "When `multiple` is true and a child item is selected, all its\nancestors and its descendants are also selected. If it's false\nonly the clicked item is selected.\n@param value The selection", "name": "onSelect", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "Item[]" } }, "onRemove": { "defaultValue": null, "description": "When `multiple` is true and a child item is unselected, all its\nancestors (if no sibblings are selected) and its descendants\nare also unselected. If it's false only the clicked item is\nunselected.\n@param value The unselection", "name": "onRemove", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "multiple": { "defaultValue": null, "description": "Whether the tree items are single or multiple selected.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "selected": { "defaultValue": null, "description": "It contains one item if `multiple` value is false or\na list of items if it is true.", "name": "selected", "required": false, "type": { "name": "Item | Item[]" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "((index: number, value: boolean) => void)" } }, "highlightedIndex": { "defaultValue": null, "description": "", "name": "highlightedIndex", "required": false, "type": { "name": "number" } }, "shouldNotRecursivelySelect": { "defaultValue": null, "description": "In `multiple` mode, when this flag is also set, selecting children does\nnot select their parents and selecting parents does not select their children.", "name": "shouldNotRecursivelySelect", "required": false, "type": { "name": "boolean" } }, "createValue": { "defaultValue": null, "description": "The value to be used for comparison to determine if 'create new' button should be shown.", "name": "createValue", "required": false, "type": { "name": "string" } }, "onCreateNew": { "defaultValue": null, "description": "Called when the 'create new' button is clicked.", "name": "onCreateNew", "required": false, "type": { "name": "(() => void)" } }, "shouldShowCreateButton": { "defaultValue": null, "description": "If passed, shows create button if return from callback is true", "name": "shouldShowCreateButton", "required": false, "type": { "name": "((value?: string) => boolean)" } }, "isExpanded": { "defaultValue": null, "description": "", "name": "isExpanded", "required": false, "type": { "name": "boolean" } }, "shouldItemBeHighlighted": { "defaultValue": null, "description": "It provides a way to determine whether the current rendering\nitem is highlighted or not from outside the tree.\n@example <Tree\n\tshouldItemBeHighlighted={ isFirstChild }\n/>\n@param item The current linked tree item, useful to\ntraverse the entire linked tree from this item.\n@see {@link LinkedTree }", "name": "shouldItemBeHighlighted", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } }, "onTreeBlur": { "defaultValue": null, "description": "Called when the create button is clicked to help closing any related popover.", "name": "onTreeBlur", "required": false, "type": { "name": "(() => void)" } }, "onFirstItemLoop": { "defaultValue": null, "description": "", "name": "onFirstItemLoop", "required": false, "type": { "name": "((event: KeyboardEvent<HTMLDivElement>) => void)" } }, "onEscape": { "defaultValue": null, "description": "Called when the escape key is pressed.", "name": "onEscape", "required": false, "type": { "name": "(() => void)" } }, "getItemLabel": { "defaultValue": null, "description": "It gives a way to render a different Element as the\ntree item label.\n@example <Tree\n\tgetItemLabel={ ( item ) => <span>${ item.data.label }</span> }\n/>\n@param item The current rendering tree item\n@see {@link LinkedTree }", "name": "getItemLabel", "required": false, "type": { "name": "((item: LinkedTree) => Element)" } }, "shouldItemBeExpanded": { "defaultValue": null, "description": "Return if the tree item passed in should be expanded.\n@example <Tree\n\tshouldItemBeExpanded={\n\t\t( item ) => checkExpanded( item, filter )\n\t}\n/>\n@param item The tree item to determine if should be expanded.\n@see {@link LinkedTree }", "name": "shouldItemBeExpanded", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/tree-control.tsx#TreeControl"] = { docgenInfo: TreeControl.__docgenInfo, name: "TreeControl", path: "../../packages/js/components/src/experimental-tree-control/tree-control.tsx#TreeControl" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../../packages/js/components/src/experimental-tree-control/tree.scss
// extracted by mini-css-extract-plugin

;// ../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx











/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var listItems = [{
  value: '1',
  label: 'Technology'
}, {
  value: '1.1',
  label: 'Notebooks',
  parent: '1'
}, {
  value: '1.2',
  label: 'Phones',
  parent: '1'
}, {
  value: '1.2.1',
  label: 'iPhone',
  parent: '1.2'
}, {
  value: '1.2.1.1',
  label: 'iPhone 14 Pro',
  parent: '1.2.1'
}, {
  value: '1.2.1.2',
  label: 'iPhone 14 Pro Max',
  parent: '1.2.1'
}, {
  value: '1.2.2',
  label: 'Samsung',
  parent: '1.2'
}, {
  value: '1.2.2.1',
  label: 'Samsung Galaxy 22 Plus',
  parent: '1.2.2'
}, {
  value: '1.2.2.2',
  label: 'Samsung Galaxy 22 Ultra',
  parent: '1.2.2'
}, {
  value: '1.3',
  label: 'Wearables',
  parent: '1'
}, {
  value: '2',
  label: 'Hardware'
}, {
  value: '2.1',
  label: 'CPU',
  parent: '2'
}, {
  value: '2.2',
  label: 'GPU',
  parent: '2'
}, {
  value: '2.3',
  label: 'Memory RAM',
  parent: '2'
}, {
  value: '3',
  label: 'Other'
}];
var SimpleTree = function SimpleTree() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    label: "Simple tree",
    id: "simple-tree",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
      id: "simple-tree",
      items: listItems
    })
  });
};
function _shouldItemBeExpanded(item, filter) {
  var _item$children;
  if (!filter || !((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length)) return false;
  return item.children.some(function (child) {
    if (new RegExp(filter, 'ig').test(child.data.label)) {
      return true;
    }
    return _shouldItemBeExpanded(child, filter);
  });
}
var ExpandOnFilter = function ExpandOnFilter() {
  var _useState = (0,react.useState)(''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    filter = _useState2[0],
    setFilter = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: filter,
      onChange: setFilter
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Expand on filter",
      id: "expand-on-filter",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "expand-on-filter",
        items: listItems,
        shouldItemBeExpanded: function shouldItemBeExpanded(item) {
          return _shouldItemBeExpanded(item, filter);
        }
      })
    })]
  });
};
var CustomItemLabel = function CustomItemLabel() {
  function renderCustomItemLabel(item) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          width: 36,
          height: 36,
          backgroundColor: '#ccc',
          borderRadius: 2
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: item.data.label
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
          children: "Some item description"
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    label: "Custom item label",
    id: "custom-item-label",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
      id: "custom-item-label",
      items: listItems,
      getItemLabel: renderCustomItemLabel
    })
  });
};
function _getItemLabel(item, text) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: text ? (0,esm/* default */.A)({
      mixedString: item.data.label.replace(new RegExp(text, 'ig'), function (group) {
        return "{{bold}}".concat(group, "{{/bold}}");
      }),
      components: {
        bold: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {})
      }
    }) : item.data.label
  });
}
var CustomItemLabelOnSearch = function CustomItemLabelOnSearch() {
  var _useState3 = (0,react.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: text,
      onChange: setText
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Custom item label on search",
      id: "custom-item-label-on-search",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "custom-item-label-on-search",
        items: listItems,
        getItemLabel: function getItemLabel(item) {
          return _getItemLabel(item, text);
        },
        shouldItemBeExpanded: (0,react.useCallback)(function (item) {
          return _shouldItemBeExpanded(item, text);
        }, [text])
      })
    })]
  });
};
var SelectionSingle = function SelectionSingle() {
  var _useState5 = (0,react.useState)(listItems[1]),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Single selection",
      id: "single-selection",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "single-selection",
        items: listItems,
        selected: selected,
        onSelect: function onSelect(value) {
          return setSelected(value);
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(selected, null, 2)
    })]
  });
};
var SelectionMultiple = function SelectionMultiple() {
  var _useState7 = (0,react.useState)([listItems[0], listItems[1]]),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    selected = _useState8[0],
    setSelected = _useState8[1];
  function handleSelect(values) {
    setSelected(function (items) {
      var newItems = values.filter(function (_ref) {
        var value = _ref.value;
        return !items.some(function (item) {
          return item.value === value;
        });
      });
      return [].concat((0,toConsumableArray/* default */.A)(items), (0,toConsumableArray/* default */.A)(newItems));
    });
  }
  function handleRemove(values) {
    setSelected(function (items) {
      return items.filter(function (item) {
        return !values.some(function (_ref2) {
          var value = _ref2.value;
          return item.value === value;
        });
      });
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Multiple selection",
      id: "multiple-selection",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "multiple-selection",
        items: listItems,
        multiple: true,
        selected: selected,
        onSelect: handleSelect,
        onRemove: handleRemove
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(selected, null, 2)
    })]
  });
};
function getFirstMatchingItem(item, text, memo) {
  if (!text) return false;
  if (memo[text] === item.data.value) return true;
  var matcher = new RegExp(text, 'ig');
  if (matcher.test(item.data.label)) {
    if (!memo[text]) {
      memo[text] = item.data.value;
      return true;
    }
  }
  return false;
}
var HighlightFirstMatchingItem = function HighlightFirstMatchingItem() {
  var _useState9 = (0,react.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    text = _useState10[0],
    setText = _useState10[1];
  var memo = (0,react.useRef)({});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: text,
      onChange: setText
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Highlight first matching item",
      id: "highlight-first-matching-item",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "highlight-first-matching-item",
        items: listItems,
        getItemLabel: function getItemLabel(item) {
          return _getItemLabel(item, text);
        },
        shouldItemBeExpanded: (0,react.useCallback)(function (item) {
          return _shouldItemBeExpanded(item, text);
        }, [text]),
        shouldItemBeHighlighted: function shouldItemBeHighlighted(item) {
          return getFirstMatchingItem(item, text, memo.current);
        }
      })
    })]
  });
};
/* harmony default export */ const tree_control_story = ({
  title: 'Experimental/TreeControl',
  component: TreeControl
});
SimpleTree.parameters = {
  ...SimpleTree.parameters,
  docs: {
    ...SimpleTree.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <BaseControl label=\"Simple tree\" id=\"simple-tree\">\n            <TreeControl id=\"simple-tree\" items={listItems} />\n        </BaseControl>;\n}",
      ...SimpleTree.parameters?.docs?.source
    }
  }
};
ExpandOnFilter.parameters = {
  ...ExpandOnFilter.parameters,
  docs: {
    ...ExpandOnFilter.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [filter, setFilter] = useState('');\n  return <>\n            <TextControl value={filter} onChange={setFilter} />\n            <BaseControl label=\"Expand on filter\" id=\"expand-on-filter\">\n                <TreeControl id=\"expand-on-filter\" items={listItems} shouldItemBeExpanded={item => shouldItemBeExpanded(item, filter)} />\n            </BaseControl>\n        </>;\n}",
      ...ExpandOnFilter.parameters?.docs?.source
    }
  }
};
CustomItemLabel.parameters = {
  ...CustomItemLabel.parameters,
  docs: {
    ...CustomItemLabel.parameters?.docs,
    source: {
      originalSource: "() => {\n  function renderCustomItemLabel(item: LinkedTree) {\n    return <div style={{\n      display: 'flex',\n      gap: 8\n    }}>\n                <div style={{\n        width: 36,\n        height: 36,\n        backgroundColor: '#ccc',\n        borderRadius: 2\n      }} />\n                <div style={{\n        display: 'flex',\n        flexDirection: 'column'\n      }}>\n                    <strong>{item.data.label}</strong>\n                    <small>Some item description</small>\n                </div>\n            </div>;\n  }\n  return <BaseControl label=\"Custom item label\" id=\"custom-item-label\">\n            <TreeControl id=\"custom-item-label\" items={listItems} getItemLabel={renderCustomItemLabel} />\n        </BaseControl>;\n}",
      ...CustomItemLabel.parameters?.docs?.source
    }
  }
};
CustomItemLabelOnSearch.parameters = {
  ...CustomItemLabelOnSearch.parameters,
  docs: {
    ...CustomItemLabelOnSearch.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [text, setText] = useState('');\n  return <>\n            <TextControl value={text} onChange={setText} />\n            <BaseControl label=\"Custom item label on search\" id=\"custom-item-label-on-search\">\n                <TreeControl id=\"custom-item-label-on-search\" items={listItems} getItemLabel={item => getItemLabel(item, text)} shouldItemBeExpanded={useCallback(item => shouldItemBeExpanded(item, text), [text])} />\n            </BaseControl>\n        </>;\n}",
      ...CustomItemLabelOnSearch.parameters?.docs?.source
    }
  }
};
SelectionSingle.parameters = {
  ...SelectionSingle.parameters,
  docs: {
    ...SelectionSingle.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [selected, setSelected] = useState(listItems[1]);\n  return <>\n            <BaseControl label=\"Single selection\" id=\"single-selection\">\n                <TreeControl id=\"single-selection\" items={listItems} selected={selected} onSelect={(value: Item) => setSelected(value)} />\n            </BaseControl>\n\n            <pre>{JSON.stringify(selected, null, 2)}</pre>\n        </>;\n}",
      ...SelectionSingle.parameters?.docs?.source
    }
  }
};
SelectionMultiple.parameters = {
  ...SelectionMultiple.parameters,
  docs: {
    ...SelectionMultiple.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [selected, setSelected] = useState([listItems[0], listItems[1]]);\n  function handleSelect(values: Item[]) {\n    setSelected(items => {\n      const newItems = values.filter(({\n        value\n      }) => !items.some(item => item.value === value));\n      return [...items, ...newItems];\n    });\n  }\n  function handleRemove(values: Item[]) {\n    setSelected(items => items.filter(item => !values.some(({\n      value\n    }) => item.value === value)));\n  }\n  return <>\n            <BaseControl label=\"Multiple selection\" id=\"multiple-selection\">\n                <TreeControl id=\"multiple-selection\" items={listItems} multiple selected={selected} onSelect={handleSelect} onRemove={handleRemove} />\n            </BaseControl>\n\n            <pre>{JSON.stringify(selected, null, 2)}</pre>\n        </>;\n}",
      ...SelectionMultiple.parameters?.docs?.source
    }
  }
};
HighlightFirstMatchingItem.parameters = {
  ...HighlightFirstMatchingItem.parameters,
  docs: {
    ...HighlightFirstMatchingItem.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [text, setText] = useState('');\n  const memo = useRef<Record<string, string>>({});\n  return <>\n            <TextControl value={text} onChange={setText} />\n            <BaseControl label=\"Highlight first matching item\" id=\"highlight-first-matching-item\">\n                <TreeControl id=\"highlight-first-matching-item\" items={listItems} getItemLabel={item => getItemLabel(item, text)} shouldItemBeExpanded={useCallback(item => shouldItemBeExpanded(item, text), [text])} shouldItemBeHighlighted={item => getFirstMatchingItem(item, text, memo.current)} />\n            </BaseControl>\n        </>;\n}",
      ...HighlightFirstMatchingItem.parameters?.docs?.source
    }
  }
};

/***/ })

}]);