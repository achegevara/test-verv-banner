/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // slider

var allSlides = document.querySelectorAll(".review");
var slider = document.querySelector(".review-area");
var sliderLine = document.querySelector(".review-line");
var count = 0;
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);
var x1 = null;
var y1 = null;

function handleTouchStart(event) {
  var firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return;
  }

  var x2 = event.touches[0].clientX;
  var y2 = event.touches[0].clientY;
  var xDiff = x2 - x1;
  var yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    clearInterval(autoScroll);

    if (xDiff > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }

  x1 = null;
  y1 = null;
}

function nextSlide() {
  count++;

  if (count >= allSlides.length) {
    count = 0;
  }

  rollSlider();
}

function prevSlide() {
  count--;

  if (count < 0) {
    count = allSlides.length - 1;
  }

  rollSlider();
}

function rollSlider() {
  var width = document.querySelector(".review").offsetWidth;
  sliderLine.style.transform = 'translate(-' + count * (width + 5) + 'px)';
}

var autoScroll = setInterval(nextSlide, 5000); // subscription buttons

var subButtons = document.querySelectorAll(".main-block__sub");

var _iterator = _createForOfIteratorHelper(subButtons),
    _step;

try {
  var _loop = function _loop() {
    var sub = _step.value;
    sub.addEventListener("click", function (event) {
      var _iterator2 = _createForOfIteratorHelper(subButtons),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          item.classList.remove("main-block__sub_selected");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      sub.classList.add("main-block__sub_selected");
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // "Continue" button

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var continueButton = document.querySelector(".main-block__continue-btn");
continueButton.addEventListener("click", function () {
  var subSelect = continueButton.closest(".main-block").querySelector(".main-block__sub-select").querySelector(".main-block__sub_selected");

  if (subSelect.classList.contains("main-block__sub_1")) {
    window.open("https://www.google.com/search?q=1");
  } else if (subSelect.classList.contains("main-block__sub_12")) {
    window.open("https://www.google.com/search?q=2");
  } else if (subSelect.classList.contains("main-block__sub_3")) {
    window.open("https://www.google.com/search?q=3");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map