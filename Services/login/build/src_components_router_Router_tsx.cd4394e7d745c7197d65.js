(self["webpackChunklogin"] = self["webpackChunklogin"] || []).push([["src_components_router_Router_tsx"],{

/***/ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!*******************************************************************************************!*\
  !*** ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global __webpack_require__ */
var Refresh = __webpack_require__(/*! react-refresh/runtime */ "../../node_modules/react-refresh/runtime.js");

/**
 * Extracts exports from a webpack module object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {*} An exports object from the module.
 */
function getModuleExports(moduleId) {
  if (typeof moduleId === 'undefined') {
    // `moduleId` is unavailable, which indicates that this module is not in the cache,
    // which means we won't be able to capture any exports,
    // and thus they cannot be refreshed safely.
    // These are likely runtime or dynamically generated modules.
    return {};
  }

  var maybeModule = __webpack_require__.c[moduleId];
  if (typeof maybeModule === 'undefined') {
    // `moduleId` is available but the module in cache is unavailable,
    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).
    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.
    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');
    return {};
  }

  var exportsOrPromise = maybeModule.exports;
  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {
    return exportsOrPromise.then(function (exports) {
      return exports;
    });
  }
  return exportsOrPromise;
}

/**
 * Calculates the signature of a React refresh boundary.
 * If this signature changes, it's unsafe to accept the boundary.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {string[]} A React refresh boundary signature array.
 */
function getReactRefreshBoundarySignature(moduleExports) {
  var signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));

  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return signature;
  }

  for (var key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }

    signature.push(key);
    signature.push(Refresh.getFamilyByType(moduleExports[key]));
  }

  return signature;
}

/**
 * Creates a data object to be retained across refreshes.
 * This object should not transtively reference previous exports,
 * which can form infinite chain of objects across refreshes, which can pressure RAM.
 *
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {*} A React refresh boundary signature array.
 */
function getWebpackHotData(moduleExports) {
  return {
    signature: getReactRefreshBoundarySignature(moduleExports),
    isReactRefreshBoundary: isReactRefreshBoundary(moduleExports),
  };
}

/**
 * Creates a helper that performs a delayed React refresh.
 * @returns {function(function(): void): void} A debounced React refresh function.
 */
function createDebounceUpdate() {
  /**
   * A cached setTimeout handler.
   * @type {number | undefined}
   */
  var refreshTimeout;

  /**
   * Performs react refresh on a delay and clears the error overlay.
   * @param {function(): void} callback
   * @returns {void}
   */
  function enqueueUpdate(callback) {
    if (typeof refreshTimeout === 'undefined') {
      refreshTimeout = setTimeout(function () {
        refreshTimeout = undefined;
        Refresh.performReactRefresh();
        callback();
      }, 30);
    }
  }

  return enqueueUpdate;
}

/**
 * Checks if all exports are likely a React component.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {boolean} Whether the exports are React component like.
 */
function isReactRefreshBoundary(moduleExports) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }

  var hasExports = false;
  var areAllExportsComponents = true;
  for (var key in moduleExports) {
    hasExports = true;

    // This is the ES Module indicator flag
    if (key === '__esModule') {
      continue;
    }

    // We can (and have to) safely execute getters here,
    // as Webpack manually assigns harmony exports to getters,
    // without any side-effects attached.
    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281
    var exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }

  return hasExports && areAllExportsComponents;
}

/**
 * Checks if exports are likely a React component and registers them.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).
 * @param {*} moduleExports A Webpack module exports object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {void}
 */
function registerExportsForReactRefresh(moduleExports, moduleId) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    // Register module.exports if it is likely a component
    Refresh.register(moduleExports, moduleId + ' %exports%');
  }

  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over the exports.
    return;
  }

  for (var key in moduleExports) {
    // Skip registering the ES Module indicator
    if (key === '__esModule') {
      continue;
    }

    var exportValue = moduleExports[key];
    if (Refresh.isLikelyComponentType(exportValue)) {
      var typeID = moduleId + ' %exports% ' + key;
      Refresh.register(exportValue, typeID);
    }
  }
}

/**
 * Compares previous and next module objects to check for mutated boundaries.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).
 * @param {*} prevSignature The signature of the current Webpack module exports object.
 * @param {*} nextSignature The signature of the next Webpack module exports object.
 * @returns {boolean} Whether the React refresh boundary should be invalidated.
 */
function shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {
  if (prevSignature.length !== nextSignature.length) {
    return true;
  }

  for (var i = 0; i < nextSignature.length; i += 1) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }

  return false;
}

var enqueueUpdate = createDebounceUpdate();
function executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {
  registerExportsForReactRefresh(moduleExports, moduleId);

  if (webpackHot) {
    var isHotUpdate = !!webpackHot.data;
    var prevData;
    if (isHotUpdate) {
      prevData = webpackHot.data.prevData;
    }

    if (isReactRefreshBoundary(moduleExports)) {
      webpackHot.dispose(
        /**
         * A callback to performs a full refresh if React has unrecoverable errors,
         * and also caches the to-be-disposed module.
         * @param {*} data A hot module data object from Webpack HMR.
         * @returns {void}
         */
        function hotDisposeCallback(data) {
          // We have to mutate the data object to get data registered and cached
          data.prevData = getWebpackHotData(moduleExports);
        }
      );
      webpackHot.accept(
        /**
         * An error handler to allow self-recovering behaviours.
         * @param {Error} error An error occurred during evaluation of a module.
         * @returns {void}
         */
        function hotErrorHandler(error) {
          if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
            refreshOverlay.handleRuntimeError(error);
          }

          if (typeof isTest !== 'undefined' && isTest) {
            if (window.onHotAcceptError) {
              window.onHotAcceptError(error.message);
            }
          }

          __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);
        }
      );

      if (isHotUpdate) {
        if (
          prevData &&
          prevData.isReactRefreshBoundary &&
          shouldInvalidateReactRefreshBoundary(
            prevData.signature,
            getReactRefreshBoundarySignature(moduleExports)
          )
        ) {
          webpackHot.invalidate();
        } else {
          enqueueUpdate(
            /**
             * A function to dismiss the error overlay after performing React refresh.
             * @returns {void}
             */
            function updateCallback() {
              if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
                refreshOverlay.clearRuntimeErrors();
              }
            }
          );
        }
      }
    } else {
      if (isHotUpdate && typeof prevData !== 'undefined') {
        webpackHot.invalidate();
      }
    }
  }
}

module.exports = Object.freeze({
  enqueueUpdate: enqueueUpdate,
  executeRuntime: executeRuntime,
  getModuleExports: getModuleExports,
  isReactRefreshBoundary: isReactRefreshBoundary,
  registerExportsForReactRefresh: registerExportsForReactRefresh,
});


/***/ }),

/***/ "./src/components/app/App.tsx":
/*!************************************!*\
  !*** ./src/components/app/App.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pages/LoginPage */ "./src/components/pages/LoginPage/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;



var App = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__.LoginPage, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, {})] }));
};
_react_refresh_temp_1 = App;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "App");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/pages/LoginPage/LazyLogin.tsx":
/*!******************************************************!*\
  !*** ./src/components/pages/LoginPage/LazyLogin.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoginPage: () => (/* binding */ LazyLoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;

var LazyLoginPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(_react_refresh_temp_1 = function () { return __webpack_require__.e(/*! import() */ "src_components_pages_LoginPage_LoginPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./LoginPage */ "./src/components/pages/LoginPage/LoginPage.tsx")); });
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "LazyLoginPage$lazy");
_react_refresh_temp_2 = LazyLoginPage;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "LazyLoginPage");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/pages/LoginPage/index.ts":
/*!*************************************************!*\
  !*** ./src/components/pages/LoginPage/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* reexport safe */ _LazyLogin__WEBPACK_IMPORTED_MODULE_0__.LazyLoginPage)
/* harmony export */ });
/* harmony import */ var _LazyLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyLogin */ "./src/components/pages/LoginPage/LazyLogin.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/router/Router.tsx":
/*!******************************************!*\
  !*** ./src/components/router/Router.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/app/App */ "./src/components/app/App.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




var routes = [
    {
        path: '/login',
        element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_app_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
        children: [
            {
                path: '/*',
                element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, { to: '/login' })
            }
        ]
    }
];
var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.createBrowserRouter)(routes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfcm91dGVyX1JvdXRlcl90c3guY2Q0Mzk0ZTdkNzQ1YzcxOTdkNjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywwRUFBdUI7O0FBRTdDO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRztBQUN0QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1JEO0FBQytEO0FBQ3JCO0FBQ2U7QUFDekQ7QUFDQSxZQUFZLHVEQUFLLHFCQUFxQixzREFBSSxDQUFDLGtFQUFTLE9BQU8sc0RBQUksQ0FBQyxvREFBTTtBQUN0RTtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RuQjtBQUM2QjtBQUN0QixvQkFBb0IsMkNBQUksOENBQThDLDhNQUFxQjtBQUNsRyxzQ0FBWTtBQUNaO0FBQ0Esc0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBVDtBQUNpQjtBQUMxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQUksQ0FBQywyREFBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQUksQ0FBQyxzREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNPLGFBQWEscUVBQW1CO0FBQ3ZDLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2luLy4uLy4uL25vZGVfbW9kdWxlcy9AcG1tbXdoL3JlYWN0LXJlZnJlc2gtd2VicGFjay1wbHVnaW4vbGliL3J1bnRpbWUvUmVmcmVzaFV0aWxzLmpzIiwid2VicGFjazovL2xvZ2luLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC50c3giLCJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Mb2dpblBhZ2UvTGF6eUxvZ2luLnRzeCIsIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0xvZ2luUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9jb21wb25lbnRzL3JvdXRlci9Sb3V0ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBfX3dlYnBhY2tfcmVxdWlyZV9fICovXG52YXIgUmVmcmVzaCA9IHJlcXVpcmUoJ3JlYWN0LXJlZnJlc2gvcnVudGltZScpO1xuXG4vKipcbiAqIEV4dHJhY3RzIGV4cG9ydHMgZnJvbSBhIHdlYnBhY2sgbW9kdWxlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVJZCBBIFdlYnBhY2sgbW9kdWxlIElELlxuICogQHJldHVybnMgeyp9IEFuIGV4cG9ydHMgb2JqZWN0IGZyb20gdGhlIG1vZHVsZS5cbiAqL1xuZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cyhtb2R1bGVJZCkge1xuICBpZiAodHlwZW9mIG1vZHVsZUlkID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGBtb2R1bGVJZGAgaXMgdW5hdmFpbGFibGUsIHdoaWNoIGluZGljYXRlcyB0aGF0IHRoaXMgbW9kdWxlIGlzIG5vdCBpbiB0aGUgY2FjaGUsXG4gICAgLy8gd2hpY2ggbWVhbnMgd2Ugd29uJ3QgYmUgYWJsZSB0byBjYXB0dXJlIGFueSBleHBvcnRzLFxuICAgIC8vIGFuZCB0aHVzIHRoZXkgY2Fubm90IGJlIHJlZnJlc2hlZCBzYWZlbHkuXG4gICAgLy8gVGhlc2UgYXJlIGxpa2VseSBydW50aW1lIG9yIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBtb2R1bGVzLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBtYXliZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4gIGlmICh0eXBlb2YgbWF5YmVNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gYG1vZHVsZUlkYCBpcyBhdmFpbGFibGUgYnV0IHRoZSBtb2R1bGUgaW4gY2FjaGUgaXMgdW5hdmFpbGFibGUsXG4gICAgLy8gd2hpY2ggaW5kaWNhdGVzIHRoZSBtb2R1bGUgaXMgc29tZWhvdyBjb3JydXB0ZWQgKGUuZy4gYnJva2VuIFdlYnBhY2FrIGBtb2R1bGVgIGdsb2JhbHMpLlxuICAgIC8vIFdlIHdpbGwgd2FybiB0aGUgdXNlciAoYXMgdGhpcyBpcyBsaWtlbHkgYSBtaXN0YWtlKSBhbmQgYXNzdW1lIHRoZXkgY2Fubm90IGJlIHJlZnJlc2hlZC5cbiAgICBjb25zb2xlLndhcm4oJ1tSZWFjdCBSZWZyZXNoXSBGYWlsZWQgdG8gZ2V0IGV4cG9ydHMgZm9yIG1vZHVsZTogJyArIG1vZHVsZUlkICsgJy4nKTtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgZXhwb3J0c09yUHJvbWlzZSA9IG1heWJlTW9kdWxlLmV4cG9ydHM7XG4gIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0c09yUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICByZXR1cm4gZXhwb3J0c09yUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cztcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZXhwb3J0c09yUHJvbWlzZTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzaWduYXR1cmUgb2YgYSBSZWFjdCByZWZyZXNoIGJvdW5kYXJ5LlxuICogSWYgdGhpcyBzaWduYXR1cmUgY2hhbmdlcywgaXQncyB1bnNhZmUgdG8gYWNjZXB0IHRoZSBib3VuZGFyeS5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi85MDdkNmFmMjJhYzZlYmU1ODU3MmJlNDE4ZTkyNTNhOTA2NjVlY2JkL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDc5NS1MODE2KS5cbiAqIEBwYXJhbSB7Kn0gbW9kdWxlRXhwb3J0cyBBIFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHJldHVybnMge3N0cmluZ1tdfSBBIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkgc2lnbmF0dXJlIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSB7XG4gIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgc2lnbmF0dXJlLnB1c2goUmVmcmVzaC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0cykpO1xuXG4gIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNpZ25hdHVyZS5wdXNoKGtleSk7XG4gICAgc2lnbmF0dXJlLnB1c2goUmVmcmVzaC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0c1trZXldKSk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkYXRhIG9iamVjdCB0byBiZSByZXRhaW5lZCBhY3Jvc3MgcmVmcmVzaGVzLlxuICogVGhpcyBvYmplY3Qgc2hvdWxkIG5vdCB0cmFuc3RpdmVseSByZWZlcmVuY2UgcHJldmlvdXMgZXhwb3J0cyxcbiAqIHdoaWNoIGNhbiBmb3JtIGluZmluaXRlIGNoYWluIG9mIG9iamVjdHMgYWNyb3NzIHJlZnJlc2hlcywgd2hpY2ggY2FuIHByZXNzdXJlIFJBTS5cbiAqXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHsqfSBBIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkgc2lnbmF0dXJlIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRXZWJwYWNrSG90RGF0YShtb2R1bGVFeHBvcnRzKSB7XG4gIHJldHVybiB7XG4gICAgc2lnbmF0dXJlOiBnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSxcbiAgICBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5OiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBoZWxwZXIgdGhhdCBwZXJmb3JtcyBhIGRlbGF5ZWQgUmVhY3QgcmVmcmVzaC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbihmdW5jdGlvbigpOiB2b2lkKTogdm9pZH0gQSBkZWJvdW5jZWQgUmVhY3QgcmVmcmVzaCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVib3VuY2VVcGRhdGUoKSB7XG4gIC8qKlxuICAgKiBBIGNhY2hlZCBzZXRUaW1lb3V0IGhhbmRsZXIuXG4gICAqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICB2YXIgcmVmcmVzaFRpbWVvdXQ7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHJlYWN0IHJlZnJlc2ggb24gYSBkZWxheSBhbmQgY2xlYXJzIHRoZSBlcnJvciBvdmVybGF5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5xdWV1ZVVwZGF0ZShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgcmVmcmVzaFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWZyZXNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWZyZXNoVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgUmVmcmVzaC5wZXJmb3JtUmVhY3RSZWZyZXNoKCk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9LCAzMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVVcGRhdGU7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFsbCBleHBvcnRzIGFyZSBsaWtlbHkgYSBSZWFjdCBjb21wb25lbnQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIFtNZXRyb10oaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvZmViZGJhMjM4MzExM2M4ODI5NmM2MWUyOGU0ZWY2YTdmNDkzOWZkYS9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzI0w3NDgtTDc3NCkuXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBleHBvcnRzIGFyZSBSZWFjdCBjb21wb25lbnQgbGlrZS5cbiAqL1xuZnVuY3Rpb24gaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSB7XG4gIGlmIChSZWZyZXNoLmlzTGlrZWx5Q29tcG9uZW50VHlwZShtb2R1bGVFeHBvcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChtb2R1bGVFeHBvcnRzID09PSB1bmRlZmluZWQgfHwgbW9kdWxlRXhwb3J0cyA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBoYXNFeHBvcnRzID0gZmFsc2U7XG4gIHZhciBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IHRydWU7XG4gIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgaGFzRXhwb3J0cyA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBFUyBNb2R1bGUgaW5kaWNhdG9yIGZsYWdcbiAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFdlIGNhbiAoYW5kIGhhdmUgdG8pIHNhZmVseSBleGVjdXRlIGdldHRlcnMgaGVyZSxcbiAgICAvLyBhcyBXZWJwYWNrIG1hbnVhbGx5IGFzc2lnbnMgaGFybW9ueSBleHBvcnRzIHRvIGdldHRlcnMsXG4gICAgLy8gd2l0aG91dCBhbnkgc2lkZS1lZmZlY3RzIGF0dGFjaGVkLlxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL2I5MzA0ODY0M2ZlNzRkZTJhNjkzMTc1NTkxMWRhMTIxMmRmNTU4OTcvbGliL01haW5UZW1wbGF0ZS5qcyNMMjgxXG4gICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgIGlmICghUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUoZXhwb3J0VmFsdWUpKSB7XG4gICAgICBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoYXNFeHBvcnRzICYmIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBleHBvcnRzIGFyZSBsaWtlbHkgYSBSZWFjdCBjb21wb25lbnQgYW5kIHJlZ2lzdGVycyB0aGVtLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBbTWV0cm9dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2ZlYmRiYTIzODMxMTNjODgyOTZjNjFlMjhlNGVmNmE3ZjQ5MzlmZGEvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qcyNMODE4LUw4MzUpLlxuICogQHBhcmFtIHsqfSBtb2R1bGVFeHBvcnRzIEEgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlSWQgQSBXZWJwYWNrIG1vZHVsZSBJRC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlRXhwb3J0cywgbW9kdWxlSWQpIHtcbiAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgLy8gUmVnaXN0ZXIgbW9kdWxlLmV4cG9ydHMgaWYgaXQgaXMgbGlrZWx5IGEgY29tcG9uZW50XG4gICAgUmVmcmVzaC5yZWdpc3Rlcihtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCArICcgJWV4cG9ydHMlJyk7XG4gIH1cblxuICBpZiAobW9kdWxlRXhwb3J0cyA9PT0gdW5kZWZpbmVkIHx8IG1vZHVsZUV4cG9ydHMgPT09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgdGhlIGV4cG9ydHMuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAvLyBTa2lwIHJlZ2lzdGVyaW5nIHRoZSBFUyBNb2R1bGUgaW5kaWNhdG9yXG4gICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgdmFyIHR5cGVJRCA9IG1vZHVsZUlkICsgJyAlZXhwb3J0cyUgJyArIGtleTtcbiAgICAgIFJlZnJlc2gucmVnaXN0ZXIoZXhwb3J0VmFsdWUsIHR5cGVJRCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGFyZXMgcHJldmlvdXMgYW5kIG5leHQgbW9kdWxlIG9iamVjdHMgdG8gY2hlY2sgZm9yIG11dGF0ZWQgYm91bmRhcmllcy5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi85MDdkNmFmMjJhYzZlYmU1ODU3MmJlNDE4ZTkyNTNhOTA2NjVlY2JkL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDc3Ni1MNzkyKS5cbiAqIEBwYXJhbSB7Kn0gcHJldlNpZ25hdHVyZSBUaGUgc2lnbmF0dXJlIG9mIHRoZSBjdXJyZW50IFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHBhcmFtIHsqfSBuZXh0U2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgb2YgdGhlIG5leHQgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgUmVhY3QgcmVmcmVzaCBib3VuZGFyeSBzaG91bGQgYmUgaW52YWxpZGF0ZWQuXG4gKi9cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2U2lnbmF0dXJlLCBuZXh0U2lnbmF0dXJlKSB7XG4gIGlmIChwcmV2U2lnbmF0dXJlLmxlbmd0aCAhPT0gbmV4dFNpZ25hdHVyZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dFNpZ25hdHVyZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChwcmV2U2lnbmF0dXJlW2ldICE9PSBuZXh0U2lnbmF0dXJlW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBlbnF1ZXVlVXBkYXRlID0gY3JlYXRlRGVib3VuY2VVcGRhdGUoKTtcbmZ1bmN0aW9uIGV4ZWN1dGVSdW50aW1lKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlkLCB3ZWJwYWNrSG90LCByZWZyZXNoT3ZlcmxheSwgaXNUZXN0KSB7XG4gIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCk7XG5cbiAgaWYgKHdlYnBhY2tIb3QpIHtcbiAgICB2YXIgaXNIb3RVcGRhdGUgPSAhIXdlYnBhY2tIb3QuZGF0YTtcbiAgICB2YXIgcHJldkRhdGE7XG4gICAgaWYgKGlzSG90VXBkYXRlKSB7XG4gICAgICBwcmV2RGF0YSA9IHdlYnBhY2tIb3QuZGF0YS5wcmV2RGF0YTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSkge1xuICAgICAgd2VicGFja0hvdC5kaXNwb3NlKFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayB0byBwZXJmb3JtcyBhIGZ1bGwgcmVmcmVzaCBpZiBSZWFjdCBoYXMgdW5yZWNvdmVyYWJsZSBlcnJvcnMsXG4gICAgICAgICAqIGFuZCBhbHNvIGNhY2hlcyB0aGUgdG8tYmUtZGlzcG9zZWQgbW9kdWxlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IGRhdGEgQSBob3QgbW9kdWxlIGRhdGEgb2JqZWN0IGZyb20gV2VicGFjayBITVIuXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaG90RGlzcG9zZUNhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAvLyBXZSBoYXZlIHRvIG11dGF0ZSB0aGUgZGF0YSBvYmplY3QgdG8gZ2V0IGRhdGEgcmVnaXN0ZXJlZCBhbmQgY2FjaGVkXG4gICAgICAgICAgZGF0YS5wcmV2RGF0YSA9IGdldFdlYnBhY2tIb3REYXRhKG1vZHVsZUV4cG9ydHMpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgd2VicGFja0hvdC5hY2NlcHQoXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBlcnJvciBoYW5kbGVyIHRvIGFsbG93IHNlbGYtcmVjb3ZlcmluZyBiZWhhdmlvdXJzLlxuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgZXZhbHVhdGlvbiBvZiBhIG1vZHVsZS5cbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBob3RFcnJvckhhbmRsZXIoZXJyb3IpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlZnJlc2hPdmVybGF5ICE9PSAndW5kZWZpbmVkJyAmJiByZWZyZXNoT3ZlcmxheSkge1xuICAgICAgICAgICAgcmVmcmVzaE92ZXJsYXkuaGFuZGxlUnVudGltZUVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGlzVGVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNUZXN0KSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lm9uSG90QWNjZXB0RXJyb3IpIHtcbiAgICAgICAgICAgICAgd2luZG93Lm9uSG90QWNjZXB0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXS5ob3QuYWNjZXB0KGhvdEVycm9ySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmIChpc0hvdFVwZGF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldkRhdGEgJiZcbiAgICAgICAgICBwcmV2RGF0YS5pc1JlYWN0UmVmcmVzaEJvdW5kYXJ5ICYmXG4gICAgICAgICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5KFxuICAgICAgICAgICAgcHJldkRhdGEuc2lnbmF0dXJlLFxuICAgICAgICAgICAgZ2V0UmVhY3RSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHdlYnBhY2tIb3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVucXVldWVVcGRhdGUoXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgZnVuY3Rpb24gdG8gZGlzbWlzcyB0aGUgZXJyb3Igb3ZlcmxheSBhZnRlciBwZXJmb3JtaW5nIFJlYWN0IHJlZnJlc2guXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmcmVzaE92ZXJsYXkgIT09ICd1bmRlZmluZWQnICYmIHJlZnJlc2hPdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaE92ZXJsYXkuY2xlYXJSdW50aW1lRXJyb3JzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0hvdFVwZGF0ZSAmJiB0eXBlb2YgcHJldkRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdlYnBhY2tIb3QuaW52YWxpZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBlbnF1ZXVlVXBkYXRlOiBlbnF1ZXVlVXBkYXRlLFxuICBleGVjdXRlUnVudGltZTogZXhlY3V0ZVJ1bnRpbWUsXG4gIGdldE1vZHVsZUV4cG9ydHM6IGdldE1vZHVsZUV4cG9ydHMsXG4gIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaDogcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxufSk7XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL0xvZ2luUGFnZVwiO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtfanN4KExvZ2luUGFnZSwge30pLCBfanN4KE91dGxldCwge30pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gQXBwO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJBcHBcIik7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5pbXBvcnQgeyBsYXp5IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdmFyIExhenlMb2dpblBhZ2UgPSBsYXp5KF9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9Mb2dpblBhZ2UnKTsgfSk7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIkxhenlMb2dpblBhZ2UkbGF6eVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9IExhenlMb2dpblBhZ2U7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8yLCBcIkxhenlMb2dpblBhZ2VcIik7XG4iLCJleHBvcnQgeyBMYXp5TG9naW5QYWdlIGFzIExvZ2luUGFnZSB9IGZyb20gJy4vTGF6eUxvZ2luJztcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJAL2NvbXBvbmVudHMvYXBwL0FwcFwiO1xudmFyIHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICBlbGVtZW50OiBfanN4KEFwcCwge30pLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvKicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogX2pzeChOYXZpZ2F0ZSwgeyB0bzogJy9sb2dpbicgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5leHBvcnQgdmFyIHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==