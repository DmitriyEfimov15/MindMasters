"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../../node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/router/Router */ "./src/components/router/Router.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





var root = document.getElementById('root');
if (!root) {
    throw new Error('Root not found!');
}
var container = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(root);
container.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.RouterProvider, { router: _components_router_Router__WEBPACK_IMPORTED_MODULE_2__.router }));


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

/***/ "./src/components/app/App.tsx":
/*!************************************!*\
  !*** ./src/components/app/App.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;


var App = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}));
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

/***/ "./src/components/router/Router.tsx":
/*!******************************************!*\
  !*** ./src/components/router/Router.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_app_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/app/App */ "./src/components/app/App.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");




var routes = [
    {
        path: '/',
        element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_app_App__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }
];
var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.createBrowserRouter)(routes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Jvb3RzdHJhcF90c3guMDEyN2U0ZWZmMTMwZTk0N2EzYTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRjtBQUNJO0FBQ0U7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVU7QUFDMUIsaUJBQWlCLHNEQUFJLENBQUMsNERBQWMsWUFBWSw2REFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHREO0FBQ2dEO0FBQ3RCO0FBQzFCO0FBQ0EsWUFBWSxzREFBSTtBQUNoQjtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNkI7QUFDTztBQUNoQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQUksQ0FBQywyREFBRztBQUN6QjtBQUNBO0FBQ08sYUFBYSxxRUFBbUI7QUFDdkMsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9zdC8uL3NyYy9ib290c3RyYXAudHN4Iiwid2VicGFjazovL2hvc3QvLi9zcmMvY29tcG9uZW50cy9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly9ob3N0Ly4vc3JjL2NvbXBvbmVudHMvcm91dGVyL1JvdXRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9yb3V0ZXIvUm91dGVyXCI7XG52YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5pZiAoIXJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3Qgbm90IGZvdW5kIScpO1xufVxudmFyIGNvbnRhaW5lciA9IGNyZWF0ZVJvb3Qocm9vdCk7XG5jb250YWluZXIucmVuZGVyKF9qc3goUm91dGVyUHJvdmlkZXIsIHsgcm91dGVyOiByb3V0ZXIgfSkpO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwge30pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBBcHA7XG4kUmVmcmVzaFJlZyQoX3JlYWN0X3JlZnJlc2hfdGVtcF8xLCBcIkFwcFwiKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIkAvY29tcG9uZW50cy9hcHAvQXBwXCI7XG52YXIgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBlbGVtZW50OiBfanN4KEFwcCwge30pXG4gICAgfVxuXTtcbmV4cG9ydCB2YXIgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXMpO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9