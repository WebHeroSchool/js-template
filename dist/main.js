var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./src/css/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/start */ \"./src/js/start.js\");\n\n\n\nnew _js_start__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nclass Game {\n\tconstructor(el) {\n\t\tthis.el = el;\n\t\tthis.init();\n\t}\n\n\tinit() {\n\t\tthis.renderComponent();\n\t}\n\n\trenderComponent() {\n\t\tconst fragment = document.createDocumentFragment();\n\t\tthis.number = this.el === \"Простой\" ? 3\n\t\t\t: this.el === \"Средний\" ? 6 : 12;\n\t\tconst div = document.createElement(\"div\");\n\t\tfunction getRandomInt(max) {\n\t\t\treturn Math.floor(Math.random() * Math.floor(max));\n\t\t}\n\t\tconst rand = getRandomInt(this.number);\n\t\tfor (let i = 0; i < this.number; i++) {\n\t\t\tconst elem = document.createElement(\"div\");\n\t\t\tconst item = `      <div class=\"card\"></div>\n\t\t\t\t\t\t    <div class=\"card back ${rand === i ? \"bags\" : \"gamover\"}\"></div>\n\t\t\t\t\t`;\n\t\t\telem.classList.add(\"wrap-card\");\n\t\t\telem.innerHTML = item;\n\t\t\tfragment.appendChild(elem);\n\t\t}\n\t\tconst main = document.querySelector(\".main\");\n\t\tmain.classList.add(\"wrap\");\n\t\tmain.innerHTML = \"\";\n\n\t\tmain.appendChild(fragment);\n\t\tthis.cartChange();\n\t}\n\n\tcartChange() {\n\t\tconst cards = document.querySelectorAll(\".wrap-card\");\n\t\tthis.gameover = false;\n\t\tcards.forEach((item) => {\n\t\t\titem.addEventListener(\"click\", () => {\n\t\t\t\tconsole.log(this.gameover);\n\t\t\t\tif (!this.gameover) {\n\t\t\t\t\titem.classList.add('active');\n\t\t\t\t\tthis.gameover = true;\n\t\t\t\t} else {\n\t\t\t\t\tdocument.location.reload();\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/game.js?");

/***/ }),

/***/ "./src/js/start.js":
/*!*************************!*\
  !*** ./src/js/start.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Start; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\n\nclass Start {\n\tconstructor() {\n\t\tthis.init();\n\t}\n\n\tinit() {\n\t\tthis.addClickHadler();\n\t}\n\n\taddClickHadler() {\n\t\tconst links = document.querySelectorAll(\".level-wrap input\");\n\t\tconst btn = document.querySelector(\".btn-send-js\");\n\t\tlinks.forEach((item) => {\n\t\t\titem.addEventListener(\"click\", () => {\n\t\t\t\tthis.value = item.value;\n\t\t\t\tbtn.disabled = false;\n\t\t\t});\n\t\t});\n\n\t\tbtn.addEventListener(\"click\", (e) => {\n\t\t\te.preventDefault();\n\t\t\tnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.value);\n\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/start.js?");

/***/ })

/******/ });