/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/MyComponent/src/App.js":
/*!*******************************************!*\
  !*** ./components/MyComponent/src/App.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.App = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _Title = __webpack_require__(/*! ./components/Title */ \"./components/MyComponent/src/components/Title.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar App = function App(_ref) {\n  var _ref$name = _ref.name,\n      name = _ref$name === void 0 ? \"local\" : _ref$name;\n  return /*#__PURE__*/_react[\"default\"].createElement(_Title.Title, null, \"Dynamic component loaded from \", name, \"!\");\n};\n\nexports.App = App;\n\n//# sourceURL=webpack://dynamic-components/./components/MyComponent/src/App.js?");

/***/ }),

/***/ "./components/MyComponent/src/components/Title.js":
/*!********************************************************!*\
  !*** ./components/MyComponent/src/components/Title.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Title = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar Title = function Title(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/_react[\"default\"].createElement(\"h1\", null, children);\n};\n\nexports.Title = Title;\n\n//# sourceURL=webpack://dynamic-components/./components/MyComponent/src/components/Title.js?");

/***/ }),

/***/ "./components/MyComponent/src/index.js":
/*!*********************************************!*\
  !*** ./components/MyComponent/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _App = __webpack_require__(/*! ./App */ \"./components/MyComponent/src/App.js\");\n\n/**\n * Entrypoint of the Remote Component.\n */\nvar _default = _App.App;\nexports.default = _default;\n\n//# sourceURL=webpack://dynamic-components/./components/MyComponent/src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./components/MyComponent/src/index.js");
/******/ })()

));
