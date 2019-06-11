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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/js/AnimState.js":
/*!*****************************!*\
  !*** ./src/js/AnimState.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anim; });
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Star */ "./src/js/Star.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");



class Anim {

    constructor(ctx, countPoints, alpha, speed, bg) {
        this.ctx = ctx;
        this.alpha = alpha;
        this.speed = speed;
        this.points = [];
        this.countPoints = countPoints;
        this._bgGradient = bg;
    }

    clearPoints() {
        this.points.length = 0;
        return this;
    }

    generatePoints() {
        let count = this.countPoints;

        while (count--) this.points.push(new _Star__WEBPACK_IMPORTED_MODULE_0__["default"](window.innerWidth / 2, window.innerHeight / 2, _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].random(50, 360), _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].random(.5, 5)));

        return this;
    }

    draw() {
        this.ctx.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);

        this.ctx.fillStyle = this._bgGradient;

        this.ctx.fillRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
        this.points.forEach(point => point.move(this.alpha, this.speed).draw(this.ctx));


        requestAnimationFrame(this.draw.bind(this));
    }
}


/***/ }),

/***/ "./src/js/Point.js":
/*!*************************!*\
  !*** ./src/js/Point.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "./src/js/Star.js":
/*!************************!*\
  !*** ./src/js/Star.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/js/Point.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/js/Utils.js");



const COLORS = [
    '#FFF',
    '#ffad07',
    '#c6e9ff',
];

class Star extends _Point__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(x, y, a, size, color) {
        super(x, y);

        this._moveX = x;
        this._moveY = y;
        this.a = a;this.size = size;
        this.color = color || COLORS[Math.round(_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].random(0, COLORS.length - 1))];
    }

    draw(ctx) {

        let r = this.size / 2;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = (1 / 360) * this.a;
        ctx.fillStyle = this.color;

        ctx.arc(this._moveX - r, this._moveY - r, r, 0, 360);
        ctx.stroke();
        ctx.fill();

    }

    move(alpha, speed) {
        let a = this.a = this.a + this.a / speed;

        this._moveX = Math.cos(a) / a * alpha + this.x;
        this._moveY = Math.sin(a) / a * alpha + this.y;

        return this;
    }
}


/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static random(min, max) {
        return (max - min) * Math.random() + min;
    }

    static factorial(i) {
        let fact = 1;

        for (;i;i--) {
            fact *= i;
        }

        return fact;
    }
}


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimState */ "./src/js/AnimState.js");


const canvas = document.getElementById('canvas');

canvas.setAttribute('width', window.innerWidth );
canvas.setAttribute('height', window.innerHeight );

canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

let bgGradient = ctx.createLinearGradient(window.innerWidth / 2,0, window.innerWidth / 2, window.innerHeight);
bgGradient.addColorStop(0, '#000');
bgGradient.addColorStop(.25, '#000');
bgGradient.addColorStop(.50, '#000');
bgGradient.addColorStop(.75, '#001515');
bgGradient.addColorStop(1, '#033035');

const state = new _AnimState__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, 1000, 62e3, 3e5, bgGradient);

state.generatePoints().draw();

document
    .getElementById('changeAlpha')
    .addEventListener('keydown', e => state.alpha = +e.target.value );

document
    .getElementById('changeAngle')
    .addEventListener('change', e => state.points[0].a = +e.target.value );

document
    .getElementById('changeSize')
    .addEventListener('change', e => state.points[0].size = +e.target.value );

document
    .getElementById('changeSpeed')
    .addEventListener('change', e => state.speed = +e.target.value );



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BbmltU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TdGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFrQjtBQUNXOzs7Ozs7Ozs7Ozs7O0FDRDdCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0U7O0FBRWI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZDQUE2Qyw2Q0FBSSxnREFBZ0QsOENBQUssa0JBQWtCLDhDQUFLOztBQUU3SDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNBOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1CQUFtQiw4Q0FBSzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGdEQUFnRCw4Q0FBSztBQUNyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWMsRUFBRTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBb0M7O0FBRXBDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGtEQUFTOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQ0EseUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL2pzL2FwcCc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5zY3NzJ1xuIiwiaW1wb3J0IFN0YXIgZnJvbSBcIi4vU3RhclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW0ge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCBjb3VudFBvaW50cywgYWxwaGEsIHNwZWVkLCBiZykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuY291bnRQb2ludHMgPSBjb3VudFBvaW50cztcbiAgICAgICAgdGhpcy5fYmdHcmFkaWVudCA9IGJnO1xuICAgIH1cblxuICAgIGNsZWFyUG9pbnRzKCkge1xuICAgICAgICB0aGlzLnBvaW50cy5sZW5ndGggPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVBvaW50cygpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5jb3VudFBvaW50cztcblxuICAgICAgICB3aGlsZSAoY291bnQtLSkgdGhpcy5wb2ludHMucHVzaChuZXcgU3Rhcih3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIFV0aWxzLnJhbmRvbSg1MCwgMzYwKSwgVXRpbHMucmFuZG9tKC41LCA1KSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAqIDIsIHdpbmRvdy5pbm5lckhlaWdodCAqIDIpO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2JnR3JhZGllbnQ7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGggKiAyLCB3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaChwb2ludCA9PiBwb2ludC5tb3ZlKHRoaXMuYWxwaGEsIHRoaXMuc3BlZWQpLmRyYXcodGhpcy5jdHgpKTtcblxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgQ09MT1JTID0gW1xuICAgICcjRkZGJyxcbiAgICAnI2ZmYWQwNycsXG4gICAgJyNjNmU5ZmYnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciBleHRlbmRzIFBvaW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGEsIHNpemUsIGNvbG9yKSB7XG4gICAgICAgIHN1cGVyKHgsIHkpO1xuXG4gICAgICAgIHRoaXMuX21vdmVYID0geDtcbiAgICAgICAgdGhpcy5fbW92ZVkgPSB5O1xuICAgICAgICB0aGlzLmEgPSBhO3RoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvciB8fCBDT0xPUlNbTWF0aC5yb3VuZChVdGlscy5yYW5kb20oMCwgQ09MT1JTLmxlbmd0aCAtIDEpKV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcblxuICAgICAgICBsZXQgciA9IHRoaXMuc2l6ZSAvIDI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gKDEgLyAzNjApICogdGhpcy5hO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuICAgICAgICBjdHguYXJjKHRoaXMuX21vdmVYIC0gciwgdGhpcy5fbW92ZVkgLSByLCByLCAwLCAzNjApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICB9XG5cbiAgICBtb3ZlKGFscGhhLCBzcGVlZCkge1xuICAgICAgICBsZXQgYSA9IHRoaXMuYSA9IHRoaXMuYSArIHRoaXMuYSAvIHNwZWVkO1xuXG4gICAgICAgIHRoaXMuX21vdmVYID0gTWF0aC5jb3MoYSkgLyBhICogYWxwaGEgKyB0aGlzLng7XG4gICAgICAgIHRoaXMuX21vdmVZID0gTWF0aC5zaW4oYSkgLyBhICogYWxwaGEgKyB0aGlzLnk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuICAgIHN0YXRpYyByYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKSArIG1pbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmFjdG9yaWFsKGkpIHtcbiAgICAgICAgbGV0IGZhY3QgPSAxO1xuXG4gICAgICAgIGZvciAoO2k7aS0tKSB7XG4gICAgICAgICAgICBmYWN0ICo9IGk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFjdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgQW5pbVN0YXRlIGZyb20gXCIuL0FuaW1TdGF0ZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGggKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuXG5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IGJnR3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQod2luZG93LmlubmVyV2lkdGggLyAyLDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcbmJnR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjMDAwJyk7XG5iZ0dyYWRpZW50LmFkZENvbG9yU3RvcCguMjUsICcjMDAwJyk7XG5iZ0dyYWRpZW50LmFkZENvbG9yU3RvcCguNTAsICcjMDAwJyk7XG5iZ0dyYWRpZW50LmFkZENvbG9yU3RvcCguNzUsICcjMDAxNTE1Jyk7XG5iZ0dyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnIzAzMzAzNScpO1xuXG5jb25zdCBzdGF0ZSA9IG5ldyBBbmltU3RhdGUoY3R4LCAxMDAwLCA2MmUzLCAzZTUsIGJnR3JhZGllbnQpO1xuXG5zdGF0ZS5nZW5lcmF0ZVBvaW50cygpLmRyYXcoKTtcblxuZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZUFscGhhJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gc3RhdGUuYWxwaGEgPSArZS50YXJnZXQudmFsdWUgKTtcblxuZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZUFuZ2xlJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBzdGF0ZS5wb2ludHNbMF0uYSA9ICtlLnRhcmdldC52YWx1ZSApO1xuXG5kb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlU2l6ZScpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gc3RhdGUucG9pbnRzWzBdLnNpemUgPSArZS50YXJnZXQudmFsdWUgKTtcblxuZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZVNwZWVkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBzdGF0ZS5zcGVlZCA9ICtlLnRhcmdldC52YWx1ZSApO1xuXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=