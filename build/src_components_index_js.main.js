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
eval("/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ \"./src/components/remotes/web/index.js\");\n\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/index.js?");

/***/ }),

/***/ "./src/components/remotes/web/index.js":
/*!*********************************************!*\
  !*** ./src/components/remotes/web/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/esm/single-spa.min.js\");\n__webpack_require__.e(/*! import() */ \"webpack_container_remote_webComponents_WebCounter\").then(__webpack_require__.t.bind(__webpack_require__, /*! webComponents/WebCounter */ \"webpack/container/remote/webComponents/WebCounter\", 7));\r\n\r\n\r\n(0,single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication)(\r\n  \"web-counter\",\r\n  () => __webpack_require__.e(/*! import() */ \"src_components_remotes_web_web-counter_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./web-counter */ \"./src/components/remotes/web/web-counter.js\")),\r\n  (location) => location.pathname.startsWith(\"/\")\r\n);\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/web/index.js?");

/***/ })

}]);