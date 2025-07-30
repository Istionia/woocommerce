"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2189],{

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

/***/ "../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ speak)
});

// UNUSED EXPORTS: setup

;// ../../node_modules/.pnpm/@wordpress+dom-ready@4.0.1/node_modules/@wordpress/dom-ready/build-module/index.js
/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
function domReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }
  if (document.readyState === 'complete' ||
  // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
    return void callback();
  }

  // DOMContentLoaded has not fired yet, delay callback until then.
  document.addEventListener('DOMContentLoaded', callback);
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
;// ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/add-intro-text.js
/**
 * WordPress dependencies
 */


/**
 * Build the explanatory text to be placed before the aria live regions.
 *
 * This text is initially hidden from assistive technologies by using a `hidden`
 * HTML attribute which is then removed once a message fills the aria-live regions.
 *
 * @return {HTMLParagraphElement} The explanatory text HTML element.
 */
function addIntroText() {
  const introText = document.createElement('p');
  introText.id = 'a11y-speak-intro-text';
  introText.className = 'a11y-speak-intro-text';
  introText.textContent = (0,build_module.__)('Notifications');
  introText.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  introText.setAttribute('hidden', 'hidden');
  const {
    body
  } = document;
  if (body) {
    body.appendChild(introText);
  }
  return introText;
}
//# sourceMappingURL=add-intro-text.js.map
;// ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/add-container.js
/**
 * Build the live regions markup.
 *
 * @param {string} [ariaLive] Value for the 'aria-live' attribute; default: 'polite'.
 *
 * @return {HTMLDivElement} The ARIA live region HTML element.
 */
function addContainer(ariaLive = 'polite') {
  const container = document.createElement('div');
  container.id = `a11y-speak-${ariaLive}`;
  container.className = 'a11y-speak-region';
  container.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  container.setAttribute('aria-live', ariaLive);
  container.setAttribute('aria-relevant', 'additions text');
  container.setAttribute('aria-atomic', 'true');
  const {
    body
  } = document;
  if (body) {
    body.appendChild(container);
  }
  return container;
}
//# sourceMappingURL=add-container.js.map
;// ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/clear.js
/**
 * Clears the a11y-speak-region elements and hides the explanatory text.
 */
function clear() {
  const regions = document.getElementsByClassName('a11y-speak-region');
  const introText = document.getElementById('a11y-speak-intro-text');
  for (let i = 0; i < regions.length; i++) {
    regions[i].textContent = '';
  }

  // Make sure the explanatory text is hidden from assistive technologies.
  if (introText) {
    introText.setAttribute('hidden', 'hidden');
  }
}
//# sourceMappingURL=clear.js.map
;// ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/filter-message.js
let previousMessage = '';

/**
 * Filter the message to be announced to the screenreader.
 *
 * @param {string} message The message to be announced.
 *
 * @return {string} The filtered message.
 */
function filterMessage(message) {
  /*
   * Strip HTML tags (if any) from the message string. Ideally, messages should
   * be simple strings, carefully crafted for specific use with A11ySpeak.
   * When re-using already existing strings this will ensure simple HTML to be
   * stripped out and replaced with a space. Browsers will collapse multiple
   * spaces natively.
   */
  message = message.replace(/<[^<>]+>/g, ' ');

  /*
   * Safari + VoiceOver don't announce repeated, identical strings. We use
   * a `no-break space` to force them to think identical strings are different.
   */
  if (previousMessage === message) {
    message += '\u00A0';
  }
  previousMessage = message;
  return message;
}
//# sourceMappingURL=filter-message.js.map
;// ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Create the live regions.
 */
function setup() {
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');
  if (introText === null) {
    addIntroText();
  }
  if (containerAssertive === null) {
    addContainer('assertive');
  }
  if (containerPolite === null) {
    addContainer('polite');
  }
}

/**
 * Run setup on domReady.
 */
domReady(setup);

/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in `wp-a11y.js`.
 *
 * @param {string} message    The message to be announced by assistive technologies.
 * @param {string} [ariaLive] The politeness level for aria-live; default: 'polite'.
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 */
function speak(message, ariaLive) {
  /*
   * Clear previous messages to allow repeated strings being read out and hide
   * the explanatory text from assistive technologies.
   */
  clear();
  message = filterMessage(message);
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');
  if (containerAssertive && ariaLive === 'assertive') {
    containerAssertive.textContent = message;
  } else if (containerPolite) {
    containerPolite.textContent = message;
  }

  /*
   * Make the explanatory text available to assistive technologies by removing
   * the 'hidden' HTML attribute.
   */
  if (introText) {
    introText.removeAttribute('hidden');
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ card_footer_component)
});

// UNUSED EXPORTS: CardFooter

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js
var styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/hook.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function useCardFooter(props) {
  const {
    className,
    justify,
    isBorderless = false,
    isShady = false,
    size = 'medium',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'CardFooter');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(styles/* Footer */.wi, styles/* borderRadius */.Vq, styles/* borderColor */.Cz, styles/* cardPaddings */.L7[size], isBorderless && styles/* borderless */.Gn, isShady && styles/* shady */.QC,
  // This classname is added for legacy compatibility reasons.
  'components-card__footer', className), [className, cx, isBorderless, isShady, size]);
  return {
    ...otherProps,
    className: classes,
    justify
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedCardFooter(props, forwardedRef) {
  const footerProps = useCardFooter(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...footerProps,
    ref: forwardedRef
  });
}

/**
 * `CardFooter` renders an optional footer within a `Card`.
 *
 * ```jsx
 * import { Card, CardBody, CardFooter } from `@wordpress/components`;
 *
 * <Card>
 * 	<CardBody>...</CardBody>
 * 	<CardFooter>...</CardFooter>
 * </Card>
 * ```
 */
const CardFooter = (0,context_connect/* contextConnect */.KZ)(UnconnectedCardFooter, 'CardFooter');
/* harmony default export */ const card_footer_component = (CardFooter);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-header/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ card_header_component)
});

// UNUSED EXPORTS: CardHeader

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js
var styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-header/hook.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function useCardHeader(props) {
  const {
    className,
    isBorderless = false,
    isShady = false,
    size = 'medium',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'CardHeader');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(styles/* Header */.Y9, styles/* borderRadius */.Vq, styles/* borderColor */.Cz, styles/* cardPaddings */.L7[size], isBorderless && styles/* borderless */.Gn, isShady && styles/* shady */.QC,
  // This classname is added for legacy compatibility reasons.
  'components-card__header', className), [className, cx, isBorderless, isShady, size]);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-header/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedCardHeader(props, forwardedRef) {
  const headerProps = useCardHeader(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...headerProps,
    ref: forwardedRef
  });
}

/**
 * `CardHeader` renders an optional header within a `Card`.
 *
 * ```jsx
 * import { Card, CardBody, CardHeader } from `@wordpress/components`;
 *
 * <Card>
 * 	<CardHeader>...</CardHeader>
 * 	<CardBody>...</CardBody>
 * </Card>
 * ```
 */
const CardHeader = (0,context_connect/* contextConnect */.KZ)(UnconnectedCardHeader, 'CardHeader');
/* harmony default export */ const card_header_component = (CardHeader);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Dropdown */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const UnconnectedDropdown = (props, forwardedRef) => {
  const {
    renderContent,
    renderToggle,
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    popoverProps,
    onClose,
    onToggle,
    style,
    open,
    defaultOpen,
    // Deprecated props
    position,
    // From context system
    variant
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'Dropdown');
  if (position !== undefined) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('`position` prop in wp.components.Dropdown', {
      since: '6.2',
      alternative: '`popoverProps.placement` prop',
      hint: 'Note that the `position` prop will override any values passed through the `popoverProps.placement` prop.'
    });
  }

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [isOpen, setIsOpen] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useControlledValue */ .j)({
    defaultValue: defaultOpen,
    value: open,
    onChange: onToggle
  });

  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */
  function closeIfFocusOutside() {
    if (!containerRef.current) {
      return;
    }
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument?.activeElement?.closest('[role="dialog"]');
    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }
  function close() {
    onClose?.();
    setIsOpen(false);
  }
  const args = {
    isOpen: !!isOpen,
    onToggle: () => setIsOpen(!isOpen),
    onClose: close
  };
  const popoverPropsHaveAnchor = !!popoverProps?.anchor ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)([containerRef, forwardedRef, setFallbackPopoverAnchor])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: -1,
    style: style,
    children: [renderToggle(args), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      position: position,
      onClose: close,
      onFocusOutside: closeIfFocusOutside,
      expandOnMobile: expandOnMobile,
      headerTitle: headerTitle,
      focusOnMount: focusOnMount
      // This value is used to ensure that the dropdowns
      // align with the editor header by default.
      ,
      offset: 13,
      anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : undefined,
      variant: variant,
      ...popoverProps,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('components-dropdown__content', popoverProps?.className, contentClassName),
      children: renderContent(args)
    })]
  });
};

/**
 * Renders a button that opens a floating content modal when clicked.
 *
 * ```jsx
 * import { Button, Dropdown } from '@wordpress/components';
 *
 * const MyDropdown = () => (
 *   <Dropdown
 *     className="my-container-class-name"
 *     contentClassName="my-dropdown-content-classname"
 *     popoverProps={ { placement: 'bottom-start' } }
 *     renderToggle={ ( { isOpen, onToggle } ) => (
 *       <Button
 *         variant="primary"
 *         onClick={ onToggle }
 *         aria-expanded={ isOpen }
 *       >
 *         Toggle Dropdown!
 *       </Button>
 *     ) }
 *     renderContent={ () => <div>This is the content of the dropdown.</div> }
 *   />
 * );
 * ```
 */
const Dropdown = (0,_context__WEBPACK_IMPORTED_MODULE_8__/* .contextConnect */ .KZ)(UnconnectedDropdown, 'Dropdown');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-toggle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports noop, FormToggle */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const noop = () => {};

/**
 * FormToggle switches a single setting on or off.
 *
 * ```jsx
 * import { FormToggle } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyFormToggle = () => {
 *   const [ isChecked, setChecked ] = useState( true );
 *
 *   return (
 *     <FormToggle
 *       checked={ isChecked }
 *       onChange={ () => setChecked( ( state ) => ! state ) }
 *     />
 *   );
 * };
 * ```
 */
function FormToggle(props, ref) {
  const {
    className,
    checked,
    id,
    disabled,
    onChange = noop,
    ...additionalProps
  } = props;
  const wrapperClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('components-form-toggle', className, {
    'is-checked': checked,
    'is-disabled': disabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      className: "components-form-toggle__input",
      id: id,
      type: "checkbox",
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      ...additionalProps,
      ref: ref
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-form-toggle__track"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-form-toggle__thumb"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(FormToggle));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ menu)
});

// UNUSED EXPORTS: NavigableMenu, UnforwardedNavigableMenu

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js + 2 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/container.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const noop = () => {};
const MENU_ITEM_ROLES = ['menuitem', 'menuitemradio', 'menuitemcheckbox'];
function cycleValue(value, total, offset) {
  const nextValue = value + offset;
  if (nextValue < 0) {
    return total + nextValue;
  } else if (nextValue >= total) {
    return nextValue - total;
  }
  return nextValue;
}
class NavigableContainer extends react.Component {
  constructor(args) {
    super(args);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.bindContainer = this.bindContainer.bind(this);
    this.getFocusableContext = this.getFocusableContext.bind(this);
    this.getFocusableIndex = this.getFocusableIndex.bind(this);
  }
  componentDidMount() {
    if (!this.container) {
      return;
    }

    // We use DOM event listeners instead of React event listeners
    // because we want to catch events from the underlying DOM tree
    // The React Tree can be different from the DOM tree when using
    // portals. Block Toolbars for instance are rendered in a separate
    // React Trees.
    this.container.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    if (!this.container) {
      return;
    }
    this.container.removeEventListener('keydown', this.onKeyDown);
  }
  bindContainer(ref) {
    const {
      forwardedRef
    } = this.props;
    this.container = ref;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    } else if (forwardedRef && 'current' in forwardedRef) {
      forwardedRef.current = ref;
    }
  }
  getFocusableContext(target) {
    if (!this.container) {
      return null;
    }
    const {
      onlyBrowserTabstops
    } = this.props;
    const finder = onlyBrowserTabstops ? build_module/* focus */.XC.tabbable : build_module/* focus */.XC.focusable;
    const focusables = finder.find(this.container);
    const index = this.getFocusableIndex(focusables, target);
    if (index > -1 && target) {
      return {
        index,
        target,
        focusables
      };
    }
    return null;
  }
  getFocusableIndex(focusables, target) {
    return focusables.indexOf(target);
  }
  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
    const {
      getFocusableContext
    } = this;
    const {
      cycle = true,
      eventToOffset,
      onNavigate = noop,
      stopNavigationEvents
    } = this.props;
    const offset = eventToOffset(event);

    // eventToOffset returns undefined if the event is not handled by the component.
    if (offset !== undefined && stopNavigationEvents) {
      // Prevents arrow key handlers bound to the document directly interfering.
      event.stopImmediatePropagation();

      // When navigating a collection of items, prevent scroll containers
      // from scrolling. The preventDefault also prevents Voiceover from
      // 'handling' the event, as voiceover will try to use arrow keys
      // for highlighting text.
      const targetRole = event.target?.getAttribute('role');
      const targetHasMenuItemRole = !!targetRole && MENU_ITEM_ROLES.includes(targetRole);
      if (targetHasMenuItemRole) {
        event.preventDefault();
      }
    }
    if (!offset) {
      return;
    }
    const activeElement = event.target?.ownerDocument?.activeElement;
    if (!activeElement) {
      return;
    }
    const context = getFocusableContext(activeElement);
    if (!context) {
      return;
    }
    const {
      index,
      focusables
    } = context;
    const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;
    if (nextIndex >= 0 && nextIndex < focusables.length) {
      focusables[nextIndex].focus();
      onNavigate(nextIndex, focusables[nextIndex]);

      // `preventDefault()` on tab to avoid having the browser move the focus
      // after this component has already moved it.
      if (event.code === 'Tab') {
        event.preventDefault();
      }
    }
  }
  render() {
    const {
      children,
      stopNavigationEvents,
      eventToOffset,
      onNavigate,
      onKeyDown,
      cycle,
      onlyBrowserTabstops,
      forwardedRef,
      ...restProps
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: this.bindContainer,
      ...restProps,
      children: children
    });
  }
}
const forwardedNavigableContainer = (props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavigableContainer, {
    ...props,
    forwardedRef: ref
  });
};
forwardedNavigableContainer.displayName = 'NavigableContainer';
/* harmony default export */ const container = ((0,react.forwardRef)(forwardedNavigableContainer));
//# sourceMappingURL=container.js.map
;// ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function UnforwardedNavigableMenu({
  role = 'menu',
  orientation = 'vertical',
  ...rest
}, ref) {
  const eventToOffset = evt => {
    const {
      code
    } = evt;
    let next = ['ArrowDown'];
    let previous = ['ArrowUp'];
    if (orientation === 'horizontal') {
      next = ['ArrowRight'];
      previous = ['ArrowLeft'];
    }
    if (orientation === 'both') {
      next = ['ArrowRight', 'ArrowDown'];
      previous = ['ArrowLeft', 'ArrowUp'];
    }
    if (next.includes(code)) {
      return 1;
    } else if (previous.includes(code)) {
      return -1;
    } else if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      // Key press should be handled, e.g. have event propagation and
      // default behavior handled by NavigableContainer but not result
      // in an offset.
      return 0;
    }
    return undefined;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(container, {
    ref: ref,
    stopNavigationEvents: true,
    onlyBrowserTabstops: false,
    role: role,
    "aria-orientation": role !== 'presentation' && (orientation === 'vertical' || orientation === 'horizontal') ? orientation : undefined,
    eventToOffset: eventToOffset,
    ...rest
  });
}

/**
 * A container for a navigable menu.
 *
 *  ```jsx
 *  import {
 *    NavigableMenu,
 *    Button,
 *  } from '@wordpress/components';
 *
 *  function onNavigate( index, target ) {
 *    console.log( `Navigates to ${ index }`, target );
 *  }
 *
 *  const MyNavigableContainer = () => (
 *    <div>
 *      <span>Navigable Menu:</span>
 *      <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
 *        <Button variant="secondary">Item 1</Button>
 *        <Button variant="secondary">Item 2</Button>
 *        <Button variant="secondary">Item 3</Button>
 *      </NavigableMenu>
 *    </div>
 *  );
 *  ```
 */
const NavigableMenu = (0,react.forwardRef)(UnforwardedNavigableMenu);
/* harmony default export */ const menu = (NavigableMenu);
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useControlledValue)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/**
 * Simplified and improved implementation of useControlledState.
 *
 * @param props
 * @param props.defaultValue
 * @param props.value
 * @param props.onChange
 * @return The controlled value and the value setter.
 */
function useControlledValue({
  defaultValue,
  onChange,
  value: valueProp
}) {
  const hasValue = typeof valueProp !== 'undefined';
  const initialValue = hasValue ? valueProp : defaultValue;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const value = hasValue ? valueProp : state;
  let setValue;
  if (hasValue && typeof onChange === 'function') {
    setValue = onChange;
  } else if (!hasValue && typeof onChange === 'function') {
    setValue = nextValue => {
      onChange(nextValue);
      setState(nextValue);
    };
  } else {
    setValue = setState;
  }
  return [value, setValue];
}
//# sourceMappingURL=use-controlled-value.js.map

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
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

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/ellipsis.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-ellipsis",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 12a2 2 0 11-4.001-.001A2 2 0 017 12zm12-2a2 2 0 10.001 4.001A2 2 0 0019 10zm-7 0a2 2 0 10.001 4.001A2 2 0 0012 10z"})))}


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

/***/ })

}]);