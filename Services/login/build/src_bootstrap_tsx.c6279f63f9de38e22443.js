"use strict";
(self["webpackChunklogin"] = self["webpackChunklogin"] || []).push([["src_bootstrap_tsx"],{

/***/ "../../node_modules/react-dom/client.js":
/*!**********************************************!*\
  !*** ../../node_modules/react-dom/client.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../../node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/router/Router */ "./src/components/router/Router.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");





var root = document.getElementById('root');
if (!root) {
    throw new Error('Root not found!');
}
var container = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(root);
container.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.RouterProvider, { router: _components_router_Router__WEBPACK_IMPORTED_MODULE_3__.router }));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Jvb3RzdHJhcF90c3guYzYyNzlmNjNmOWRlMzhlMjI0NDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7O0FBRWIsUUFBUSxtQkFBTyxDQUFDLHNFQUFXO0FBQzNCLElBQUksS0FBcUMsRUFBRSxFQUcxQyxDQUFDO0FBQ0Y7QUFDQSxFQUFFLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZ0Q7QUFDRjtBQUNJO0FBQ0U7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVU7QUFDMUIsaUJBQWlCLHNEQUFJLENBQUMsNERBQWMsWUFBWSw2REFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R0RDtBQUMrRDtBQUNyQjtBQUNlO0FBQ3pEO0FBQ0EsWUFBWSx1REFBSyxxQkFBcUIsc0RBQUksQ0FBQyxrRUFBUyxPQUFPLHNEQUFJLENBQUMsb0RBQU07QUFDdEU7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RuQjtBQUM2QjtBQUN0QixvQkFBb0IsMkNBQUksOENBQThDLDhNQUFxQjtBQUNsRyxzQ0FBWTtBQUNaO0FBQ0Esc0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVQ7QUFDaUI7QUFDMUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFJLENBQUMsMkRBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFJLENBQUMsc0RBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDTyxhQUFhLHFFQUFtQjtBQUN2QyxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9ib290c3RyYXAudHN4Iiwid2VicGFjazovL2xvZ2luLy4vc3JjL2NvbXBvbmVudHMvYXBwL0FwcC50c3giLCJ3ZWJwYWNrOi8vbG9naW4vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Mb2dpblBhZ2UvTGF6eUxvZ2luLnRzeCIsIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL0xvZ2luUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9jb21wb25lbnRzL3JvdXRlci9Sb3V0ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9yb3V0ZXIvUm91dGVyXCI7XG52YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5pZiAoIXJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3Qgbm90IGZvdW5kIScpO1xufVxudmFyIGNvbnRhaW5lciA9IGNyZWF0ZVJvb3Qocm9vdCk7XG5jb250YWluZXIucmVuZGVyKF9qc3goUm91dGVyUHJvdmlkZXIsIHsgcm91dGVyOiByb3V0ZXIgfSkpO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlcy9Mb2dpblBhZ2VcIjtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChMb2dpblBhZ2UsIHt9KSwgX2pzeChPdXRsZXQsIHt9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IEFwcDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQXBwXCIpO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBMYXp5TG9naW5QYWdlID0gbGF6eShfcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vTG9naW5QYWdlJyk7IH0pO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJMYXp5TG9naW5QYWdlJGxhenlcIik7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSBMYXp5TG9naW5QYWdlO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMiwgXCJMYXp5TG9naW5QYWdlXCIpO1xuIiwiZXhwb3J0IHsgTGF6eUxvZ2luUGFnZSBhcyBMb2dpblBhZ2UgfSBmcm9tICcuL0xhenlMb2dpbic7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiQC9jb21wb25lbnRzL2FwcC9BcHBcIjtcbnZhciByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgZWxlbWVudDogX2pzeChBcHAsIHt9KSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLyonLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IF9qc3goTmF2aWdhdGUsIHsgdG86ICcvbG9naW4nIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuZXhwb3J0IHZhciByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKHJvdXRlcyk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=