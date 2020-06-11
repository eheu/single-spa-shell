/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonphovedopgave_single_spa"] = window["webpackJsonphovedopgave_single_spa"] || []).push([["src_components_index_js"],{

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _remotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remotes */ \"./src/components/remotes/index.js\");\n\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/index.js?");

/***/ }),

/***/ "./src/components/remotes/index.js":
/*!*****************************************!*\
  !*** ./src/components/remotes/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/components/remotes/react/index.js\");\n/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ \"./src/components/remotes/web/index.js\");\n\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/index.js?");

/***/ }),

/***/ "./src/components/remotes/react/index.js":
/*!***********************************************!*\
  !*** ./src/components/remotes/react/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n/* harmony import */ var _react_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-counter */ \"./src/components/remotes/react/react-counter.js\");\n\r\n\r\n\r\nObject(single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)(\r\n  \"react-counter\",\r\n  _react_counter__WEBPACK_IMPORTED_MODULE_1__.reactCounterLifecycles,\r\n  (location) =>\r\n    location.pathname.startsWith(\"/react\") ||\r\n    location.pathname.startsWith(\"/both\")\r\n);\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/react/index.js?");

/***/ }),

/***/ "./src/components/remotes/react/react-counter.js":
/*!*******************************************************!*\
  !*** ./src/components/remotes/react/react-counter.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export reactCounterLifecycles [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reactCounterLifecycles\": () => /* binding */ reactCounterLifecycles\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"./node_modules/single-spa-react/lib/single-spa-react.js\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactComponents_ReactCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactComponents/ReactCounter */ \"webpack/container/remote/reactComponents/ReactCounter\");\n/* harmony import */ var reactComponents_ReactCounter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactComponents_ReactCounter__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst reactCounterLifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_2___default()({\r\n  React: (react__WEBPACK_IMPORTED_MODULE_0___default()),\r\n  ReactDOM: (react_dom__WEBPACK_IMPORTED_MODULE_1___default()),\r\n  rootComponent: reactComponents_ReactCounter__WEBPACK_IMPORTED_MODULE_3__.ReactCounter,\r\n});\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/react/react-counter.js?");

/***/ }),

/***/ "./src/components/remotes/web/index.js":
/*!*********************************************!*\
  !*** ./src/components/remotes/web/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n/* harmony import */ var _web_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-counter */ \"./src/components/remotes/web/web-counter.js\");\n\r\n\r\n\r\n(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)(\r\n  \"web-counter\",\r\n  _web_counter__WEBPACK_IMPORTED_MODULE_1__.webCounterLifecycles,\r\n  (location) => location.pathname.startsWith(\"/web\") || location.pathname.startsWith(\"/both\")\r\n);\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/web/index.js?");

/***/ }),

/***/ "./src/components/remotes/web/web-counter.js":
/*!***************************************************!*\
  !*** ./src/components/remotes/web/web-counter.js ***!
  \***************************************************/
/*! namespace exports */
/*! export webCounterLifecycles [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.e, __webpack_require__.t, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"webCounterLifecycles\": () => /* binding */ webCounterLifecycles\n/* harmony export */ });\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-html */ \"./node_modules/single-spa-html/lib/single-spa-html.js\");\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n__webpack_require__.e(/*! import() */ \"webpack_container_remote_webComponents_WebCounter\").then(__webpack_require__.t.bind(__webpack_require__, /*! webComponents/WebCounter */ \"webpack/container/remote/webComponents/WebCounter\", 7));\r\n\r\nconst webCounterLifecycles = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({\r\n  template: \"<web-counter count=0></web-counter>\",\r\n});\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/web/web-counter.js?");

/***/ })

}]);