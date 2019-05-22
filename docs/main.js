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

/***/ "./src/images/BH_LMC.png":
/*!*******************************!*\
  !*** ./src/images/BH_LMC.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "397663d8d0ccf988be43e07a287e5e70.png";

/***/ }),

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




const img = new Image(0);

img.src = __webpack_require__(/*! ../images/BH_LMC.png */ "./src/images/BH_LMC.png");

document.body.appendChild(img);

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

img.onload = function () {
    state.generatePoints().draw();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9CSF9MTUMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQW5pbVN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBa0I7QUFDVzs7Ozs7Ozs7Ozs7OztBQ0Q3QjtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNFOztBQUViOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2Q0FBNkMsNkNBQUksZ0RBQWdELDhDQUFLLGtCQUFrQiw4Q0FBSzs7QUFFN0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDQTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtQkFBbUIsOENBQUs7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixnREFBZ0QsOENBQUs7QUFDckQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLEVBQUU7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQW9DOzs7O0FBSXBDOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxxREFBc0I7O0FBRXhDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGtEQUFTOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0NBLHlDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM5NzY2M2Q4ZDBjY2Y5ODhiZTQzZTA3YTI4N2U1ZTcwLnBuZ1wiOyIsImltcG9ydCAnLi9qcy9hcHAnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2NzcydcbiIsImltcG9ydCBTdGFyIGZyb20gXCIuL1N0YXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltIHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCwgY291bnRQb2ludHMsIGFscGhhLCBzcGVlZCwgYmcpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmNvdW50UG9pbnRzID0gY291bnRQb2ludHM7XG4gICAgICAgIHRoaXMuX2JnR3JhZGllbnQgPSBiZztcbiAgICB9XG5cbiAgICBjbGVhclBvaW50cygpIHtcbiAgICAgICAgdGhpcy5wb2ludHMubGVuZ3RoID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVQb2ludHMoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuY291bnRQb2ludHM7XG5cbiAgICAgICAgd2hpbGUgKGNvdW50LS0pIHRoaXMucG9pbnRzLnB1c2gobmV3IFN0YXIod2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLCBVdGlscy5yYW5kb20oNTAsIDM2MCksIFV0aWxzLnJhbmRvbSguNSwgNSkpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGggKiAyLCB3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLl9iZ0dyYWRpZW50O1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoICogMiwgd2luZG93LmlubmVySGVpZ2h0ICogMik7XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2gocG9pbnQgPT4gcG9pbnQubW92ZSh0aGlzLmFscGhhLCB0aGlzLnNwZWVkKS5kcmF3KHRoaXMuY3R4KSk7XG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgICAnI0ZGRicsXG4gICAgJyNmZmFkMDcnLFxuICAgICcjYzZlOWZmJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIgZXh0ZW5kcyBQb2ludCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBhLCBzaXplLCBjb2xvcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9tb3ZlWCA9IHg7XG4gICAgICAgIHRoaXMuX21vdmVZID0geTtcbiAgICAgICAgdGhpcy5hID0gYTt0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgQ09MT1JTW01hdGgucm91bmQoVXRpbHMucmFuZG9tKDAsIENPTE9SUy5sZW5ndGggLSAxKSldO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG5cbiAgICAgICAgbGV0IHIgPSB0aGlzLnNpemUgLyAyO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9ICgxIC8gMzYwKSAqIHRoaXMuYTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG5cbiAgICAgICAgY3R4LmFyYyh0aGlzLl9tb3ZlWCAtIHIsIHRoaXMuX21vdmVZIC0gciwgciwgMCwgMzYwKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgfVxuXG4gICAgbW92ZShhbHBoYSwgc3BlZWQpIHtcbiAgICAgICAgbGV0IGEgPSB0aGlzLmEgPSB0aGlzLmEgKyB0aGlzLmEgLyBzcGVlZDtcblxuICAgICAgICB0aGlzLl9tb3ZlWCA9IE1hdGguY29zKGEpIC8gYSAqIGFscGhhICsgdGhpcy54O1xuICAgICAgICB0aGlzLl9tb3ZlWSA9IE1hdGguc2luKGEpIC8gYSAqIGFscGhhICsgdGhpcy55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgcmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKCkgKyBtaW47XG4gICAgfVxuXG4gICAgc3RhdGljIGZhY3RvcmlhbChpKSB7XG4gICAgICAgIGxldCBmYWN0ID0gMTtcblxuICAgICAgICBmb3IgKDtpO2ktLSkge1xuICAgICAgICAgICAgZmFjdCAqPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhY3Q7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFuaW1TdGF0ZSBmcm9tIFwiLi9BbmltU3RhdGVcIjtcblxuXG5cbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgwKTtcblxuaW1nLnNyYyA9IHJlcXVpcmUoJy4uL2ltYWdlcy9CSF9MTUMucG5nJyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuXG5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoICk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblxuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmxldCBiZ0dyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHdpbmRvdy5pbm5lcldpZHRoIC8gMiwwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5iZ0dyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnIzAwMCcpO1xuYmdHcmFkaWVudC5hZGRDb2xvclN0b3AoLjI1LCAnIzAwMCcpO1xuYmdHcmFkaWVudC5hZGRDb2xvclN0b3AoLjUwLCAnIzAwMCcpO1xuYmdHcmFkaWVudC5hZGRDb2xvclN0b3AoLjc1LCAnIzAwMTUxNScpO1xuYmdHcmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyMwMzMwMzUnKTtcblxuY29uc3Qgc3RhdGUgPSBuZXcgQW5pbVN0YXRlKGN0eCwgMTAwMCwgNjJlMywgM2U1LCBiZ0dyYWRpZW50KTtcblxuaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzdGF0ZS5nZW5lcmF0ZVBvaW50cygpLmRyYXcoKTtcbn07XG5cbmRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VBbHBoYScpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHN0YXRlLmFscGhhID0gK2UudGFyZ2V0LnZhbHVlICk7XG5cbmRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VBbmdsZScpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gc3RhdGUucG9pbnRzWzBdLmEgPSArZS50YXJnZXQudmFsdWUgKTtcblxuZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZVNpemUnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHN0YXRlLnBvaW50c1swXS5zaXplID0gK2UudGFyZ2V0LnZhbHVlICk7XG5cbmRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VTcGVlZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gc3RhdGUuc3BlZWQgPSArZS50YXJnZXQudmFsdWUgKTtcblxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9