/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonphovedopgave_single_spa"] = window["webpackJsonphovedopgave_single_spa"] || []).push([["src_components_remotes_web_web-counter_js"],{

/***/ "./node_modules/single-spa-html/lib/single-spa-html.js":
/*!*************************************************************!*\
  !*** ./node_modules/single-spa-html/lib/single-spa-html.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, module */
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = singleSpaHtml;\n\n  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\n  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n  var defaultOpts = {\n    template: \"\",\n    domElementGetter: null\n  };\n\n  function singleSpaHtml(opts) {\n    if (!opts) {\n      throw Error(\"single-spa-html must be called with an opts object\");\n    }\n\n    opts = _objectSpread({}, defaultOpts, {}, opts);\n\n    if ((typeof opts.template !== \"string\" || opts.template.trim().length === 0) && typeof opts.template !== \"function\") {\n      throw Error(\"single-spa-html must be passed a 'template' opt that is a non empty string or function\");\n    }\n\n    if (opts.domElementGetter && typeof opts.domElementGetter !== \"function\") {\n      throw Error(\"single-spa-html was given 'opts.domElementGetter', but it isn't a function\");\n    }\n\n    return {\n      bootstrap: bootstrap.bind(null, opts),\n      mount: mount.bind(null, opts),\n      unmount: unmount.bind(null, opts)\n    };\n  }\n\n  function bootstrap(opts, props) {\n    return Promise.resolve();\n  }\n\n  function mount(opts, props) {\n    return Promise.resolve().then(function () {\n      var domElementGetter = chooseDomElementGetter(opts, props);\n      var domEl = domElementGetter();\n\n      if (!domEl) {\n        throw Error(\"single-spa-html: domElementGetter did not return a valid dom element\");\n      }\n\n      domEl.innerHTML = typeof opts.template === \"function\" ? opts.template(props) : opts.template;\n    });\n  }\n\n  function unmount(opts, props) {\n    return Promise.resolve().then(function () {\n      var domElementGetter = chooseDomElementGetter(opts, props);\n      var domEl = domElementGetter();\n\n      if (!domEl) {\n        throw Error(\"single-spa-html: domElementGetter did not return a valid dom element\");\n      }\n\n      domEl.innerHTML = \"\";\n    });\n  }\n\n  function chooseDomElementGetter(opts, props) {\n    if (props.domElement) {\n      return function () {\n        return props.domElement;\n      };\n    } else if (props.domElementGetter) {\n      return props.domElementGetter;\n    } else if (opts.domElementGetter) {\n      return opts.domElementGetter;\n    } else {\n      return defaultDomElementGetter(props);\n    }\n  }\n\n  function defaultDomElementGetter(props) {\n    var name = props.appName || props.name;\n\n    if (!name) {\n      throw Error(\"single-spa-html was not given an application name as a prop, so it can't make a unique dom element container for the ht l application\");\n    }\n\n    var htmlId = \"single-spa-application:\".concat(name);\n    return function defaultDomEl() {\n      var domElement = document.getElementById(htmlId);\n\n      if (!domElement) {\n        domElement = document.createElement(\"div\");\n        domElement.id = htmlId;\n        document.body.appendChild(domElement);\n      }\n\n      return domElement;\n    };\n  }\n});\n//# sourceMappingURL=single-spa-html.js.map\n\n//# sourceURL=webpack://hovedopgave-single-spa/./node_modules/single-spa-html/lib/single-spa-html.js?");

/***/ }),

/***/ "./src/components/remotes/web/web-counter.js":
/*!***************************************************!*\
  !*** ./src/components/remotes/web/web-counter.js ***!
  \***************************************************/
/*! namespace exports */
/*! export bootstrap [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export mount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export unmount [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": () => /* binding */ bootstrap,\n/* harmony export */   \"mount\": () => /* binding */ mount,\n/* harmony export */   \"unmount\": () => /* binding */ unmount\n/* harmony export */ });\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-html */ \"./node_modules/single-spa-html/lib/single-spa-html.js\");\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst htmlLifecycles = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({\r\n  template: \"<web-counter count=0></web-counter>\",\r\n});\r\n\r\nconst bootstrap = htmlLifecycles.bootstrap;\r\nconst mount = htmlLifecycles.mount;\r\nconst unmount = htmlLifecycles.unmount;\r\n\n\n//# sourceURL=webpack://hovedopgave-single-spa/./src/components/remotes/web/web-counter.js?");

/***/ })

}]);