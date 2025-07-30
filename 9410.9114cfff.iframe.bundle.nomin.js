"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9410],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/draggable/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Draggable */
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/throttle/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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



const dragImageClass = 'components-draggable__invisible-drag-image';
const cloneWrapperClass = 'components-draggable__clone';
const clonePadding = 0;
const bodyClass = 'is-dragging-components-draggable';

/**
 * `Draggable` is a Component that provides a way to set up a cross-browser
 * (including IE) customizable drag image and the transfer data for the drag
 * event. It decouples the drag handle and the element to drag: use it by
 * wrapping the component that will become the drag handle and providing the DOM
 * ID of the element to drag.
 *
 * Note that the drag handle needs to declare the `draggable="true"` property
 * and bind the `Draggable`s `onDraggableStart` and `onDraggableEnd` event
 * handlers to its own `onDragStart` and `onDragEnd` respectively. `Draggable`
 * takes care of the logic to setup the drag image and the transfer data, but is
 * not concerned with creating an actual DOM element that is draggable.
 *
 * ```jsx
 * import { Draggable, Panel, PanelBody } from '@wordpress/components';
 * import { Icon, more } from '@wordpress/icons';
 *
 * const MyDraggable = () => (
 *   <div id="draggable-panel">
 *     <Panel header="Draggable panel">
 *       <PanelBody>
 *         <Draggable elementId="draggable-panel" transferData={ {} }>
 *           { ( { onDraggableStart, onDraggableEnd } ) => (
 *             <div
 *               className="example-drag-handle"
 *               draggable
 *               onDragStart={ onDraggableStart }
 *               onDragEnd={ onDraggableEnd }
 *             >
 *               <Icon icon={ more } />
 *             </div>
 *           ) }
 *         </Draggable>
 *       </PanelBody>
 *     </Panel>
 *   </div>
 * );
 * ```
 */
function Draggable({
  children,
  onDragStart,
  onDragOver,
  onDragEnd,
  appendToOwnerDocument = false,
  cloneClassname,
  elementId,
  transferData,
  __experimentalTransferDataType: transferDataType = 'text',
  __experimentalDragComponent: dragComponent
}) {
  const dragComponentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const cleanup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(() => {});

  /**
   * Removes the element clone, resets cursor, and removes drag listener.
   *
   * @param event The non-custom DragEvent.
   */
  function end(event) {
    event.preventDefault();
    cleanup.current();
    if (onDragEnd) {
      onDragEnd(event);
    }
  }

  /**
   * This method does a couple of things:
   *
   * - Clones the current element and spawns clone over original element.
   * - Adds a fake temporary drag image to avoid browser defaults.
   * - Sets transfer data.
   * - Adds dragover listener.
   *
   * @param event The non-custom DragEvent.
   */
  function start(event) {
    const {
      ownerDocument
    } = event.target;
    event.dataTransfer.setData(transferDataType, JSON.stringify(transferData));
    const cloneWrapper = ownerDocument.createElement('div');
    // Reset position to 0,0. Natural stacking order will position this lower, even with a transform otherwise.
    cloneWrapper.style.top = '0';
    cloneWrapper.style.left = '0';
    const dragImage = ownerDocument.createElement('div');

    // Set a fake drag image to avoid browser defaults. Remove from DOM
    // right after. event.dataTransfer.setDragImage is not supported yet in
    // IE, we need to check for its existence first.
    if ('function' === typeof event.dataTransfer.setDragImage) {
      dragImage.classList.add(dragImageClass);
      ownerDocument.body.appendChild(dragImage);
      event.dataTransfer.setDragImage(dragImage, 0, 0);
    }
    cloneWrapper.classList.add(cloneWrapperClass);
    if (cloneClassname) {
      cloneWrapper.classList.add(cloneClassname);
    }
    let x = 0;
    let y = 0;
    // If a dragComponent is defined, the following logic will clone the
    // HTML node and inject it into the cloneWrapper.
    if (dragComponentRef.current) {
      // Position dragComponent at the same position as the cursor.
      x = event.clientX;
      y = event.clientY;
      cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;
      const clonedDragComponent = ownerDocument.createElement('div');
      clonedDragComponent.innerHTML = dragComponentRef.current.innerHTML;
      cloneWrapper.appendChild(clonedDragComponent);

      // Inject the cloneWrapper into the DOM.
      ownerDocument.body.appendChild(cloneWrapper);
    } else {
      const element = ownerDocument.getElementById(elementId);

      // Prepare element clone and append to element wrapper.
      const elementRect = element.getBoundingClientRect();
      const elementWrapper = element.parentNode;
      const elementTopOffset = elementRect.top;
      const elementLeftOffset = elementRect.left;
      cloneWrapper.style.width = `${elementRect.width + clonePadding * 2}px`;
      const clone = element.cloneNode(true);
      clone.id = `clone-${elementId}`;

      // Position clone right over the original element (20px padding).
      x = elementLeftOffset - clonePadding;
      y = elementTopOffset - clonePadding;
      cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;

      // Hack: Remove iFrames as it's causing the embeds drag clone to freeze.
      Array.from(clone.querySelectorAll('iframe')).forEach(child => child.parentNode?.removeChild(child));
      cloneWrapper.appendChild(clone);

      // Inject the cloneWrapper into the DOM.
      if (appendToOwnerDocument) {
        ownerDocument.body.appendChild(cloneWrapper);
      } else {
        elementWrapper?.appendChild(cloneWrapper);
      }
    }

    // Mark the current cursor coordinates.
    let cursorLeft = event.clientX;
    let cursorTop = event.clientY;
    function over(e) {
      // Skip doing any work if mouse has not moved.
      if (cursorLeft === e.clientX && cursorTop === e.clientY) {
        return;
      }
      const nextX = x + e.clientX - cursorLeft;
      const nextY = y + e.clientY - cursorTop;
      cloneWrapper.style.transform = `translate( ${nextX}px, ${nextY}px )`;
      cursorLeft = e.clientX;
      cursorTop = e.clientY;
      x = nextX;
      y = nextY;
      if (onDragOver) {
        onDragOver(e);
      }
    }

    // Aim for 60fps (16 ms per frame) for now. We can potentially use requestAnimationFrame (raf) instead,
    // note that browsers may throttle raf below 60fps in certain conditions.
    // @ts-ignore
    const throttledDragOver = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .n)(over, 16);
    ownerDocument.addEventListener('dragover', throttledDragOver);

    // Update cursor to 'grabbing', document wide.
    ownerDocument.body.classList.add(bodyClass);
    if (onDragStart) {
      onDragStart(event);
    }
    cleanup.current = () => {
      // Remove drag clone.
      if (cloneWrapper && cloneWrapper.parentNode) {
        cloneWrapper.parentNode.removeChild(cloneWrapper);
      }
      if (dragImage && dragImage.parentNode) {
        dragImage.parentNode.removeChild(dragImage);
      }

      // Reset cursor.
      ownerDocument.body.classList.remove(bodyClass);
      ownerDocument.removeEventListener('dragover', throttledDragOver);
    };
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => () => {
    cleanup.current();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onDraggableStart: start,
      onDraggableEnd: end
    }), dragComponent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "components-draggable-drag-component-root",
      style: {
        display: 'none'
      },
      ref: dragComponentRef,
      children: dragComponent
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draggable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ debounce)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }
  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }
  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }
  function clearTimer() {
    timerId = undefined;
  }
  function trailingEdge(time) {
    clearTimer();

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }
  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }
  function pending() {
    return timerId !== undefined;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (!pending()) {
      startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/throttle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Internal dependencies
 */

/**
 * A simplified and properly typed version of lodash's `throttle`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return
 * the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to throttle.
 * @param {number}                     wait             The number of milliseconds to throttle invocations to.
 * @param {Partial< ThrottleOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 * @return Returns the new throttled function.
 */
const throttle = (func, wait, options) => {
  let leading = true;
  let trailing = true;
  if (options) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce__WEBPACK_IMPORTED_MODULE_0__/* .debounce */ .s)(func, wait, {
    leading,
    trailing,
    maxWait: wait
  });
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const wordpress = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wordpress);
//# sourceMappingURL=wordpress.js.map

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

/***/ "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

}]);