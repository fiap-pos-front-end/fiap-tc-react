/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/NotFoundPage.jsx":
/*!************************************!*\
  !*** ./src/pages/NotFoundPage.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NotFoundPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '20vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "404 \u2013 P\xE1gina n\xE3o encontrada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Ops, parece que voc\xEA se perdeu na Matrix."));
}

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var _src_pages_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/pages/NotFoundPage.jsx */ "./src/pages/NotFoundPage.jsx");






var app = express__WEBPACK_IMPORTED_MODULE_0__();
var PORT = process.env.PORT || 4300;
var clientDist = path__WEBPACK_IMPORTED_MODULE_2__.resolve(__dirname, "dist");

// 1) serve assets estáticos
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](clientDist));

// 2) intercepta qualquer rota não servida (404)
app.use(function (req, res) {
  var appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_pages_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  // pega o template do index.html gerado pelo build
  var template = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(path__WEBPACK_IMPORTED_MODULE_2__.join(clientDist, "index.html"), "utf8");
  // injeta o HTML do React
  var html = template.replace('<div id="root"></div>', "<div id=\"root\">".concat(appHtml, "</div>"));
  res.status(404).send(html);
});
app.listen(PORT, function () {
  console.log("\u26A1 SSR rodando em http://localhost:".concat(PORT));
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxZQUFZQSxDQUFBLEVBQUc7RUFDckMsb0JBQ0VELDBEQUFBO0lBQUtHLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUUsUUFBUTtNQUFFQyxTQUFTLEVBQUU7SUFBTztFQUFFLGdCQUNyREwsMERBQUEsYUFBSSx3Q0FBK0IsQ0FBQyxlQUNwQ0EsMERBQUEsWUFBRyw4Q0FBNEMsQ0FDNUMsQ0FBQztBQUVWLEM7Ozs7Ozs7Ozs7QUNUQSxvQzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDVjtBQUNJO0FBQ0U7QUFDd0I7QUFDTTtBQUV4RCxJQUFNVSxHQUFHLEdBQUdKLG9DQUFPLENBQUMsQ0FBQztBQUNyQixJQUFNSyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLElBQUksSUFBSTtBQUNyQyxJQUFNRyxVQUFVLEdBQUdOLHlDQUFZLENBQUNRLFNBQVMsRUFBRSxNQUFNLENBQUM7O0FBRWxEO0FBQ0FOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDWCw4Q0FBYyxDQUFDUSxVQUFVLENBQUMsQ0FBQzs7QUFFbkM7QUFDQUosR0FBRyxDQUFDTyxHQUFHLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUs7RUFDcEIsSUFBTUMsT0FBTyxHQUFHWCxnRUFBYyxjQUFDVCxnREFBQSxDQUFDQyxtRUFBWSxNQUFFLENBQUMsQ0FBQztFQUNoRDtFQUNBLElBQU1vQixRQUFRLEdBQUdkLDRDQUFlLENBQUNDLHNDQUFTLENBQUNNLFVBQVUsRUFBRSxZQUFZLENBQUMsRUFBRSxNQUFNLENBQUM7RUFDN0U7RUFDQSxJQUFNVSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksT0FBTyxDQUMzQix1QkFBdUIsc0JBQUFDLE1BQUEsQ0FDTE4sT0FBTyxXQUMzQixDQUFDO0VBQ0RELEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQztBQUM1QixDQUFDLENBQUM7QUFFRmQsR0FBRyxDQUFDbUIsTUFBTSxDQUFDbEIsSUFBSSxFQUFFLFlBQU07RUFDckJtQixPQUFPLENBQUNDLEdBQUcsMkNBQUFMLE1BQUEsQ0FBc0NmLElBQUksQ0FBRSxDQUFDO0FBQzFELENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC8uL3NyYy9wYWdlcy9Ob3RGb3VuZFBhZ2UuanN4Iiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0Ly4vc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjB2aCcgfX0+XHJcbiAgICAgIDxoMT40MDQg4oCTIFDDoWdpbmEgbsOjbyBlbmNvbnRyYWRhPC9oMT5cclxuICAgICAgPHA+T3BzLCBwYXJlY2UgcXVlIHZvY8OqIHNlIHBlcmRldSBuYSBNYXRyaXguPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tIFwiLi9zcmMvcGFnZXMvTm90Rm91bmRQYWdlLmpzeFwiO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MzAwO1xyXG5jb25zdCBjbGllbnREaXN0ID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xyXG5cclxuLy8gMSkgc2VydmUgYXNzZXRzIGVzdMOhdGljb3NcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhjbGllbnREaXN0KSk7XHJcblxyXG4vLyAyKSBpbnRlcmNlcHRhIHF1YWxxdWVyIHJvdGEgbsOjbyBzZXJ2aWRhICg0MDQpXHJcbmFwcC51c2UoKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgYXBwSHRtbCA9IHJlbmRlclRvU3RyaW5nKDxOb3RGb3VuZFBhZ2UgLz4pO1xyXG4gIC8vIHBlZ2EgbyB0ZW1wbGF0ZSBkbyBpbmRleC5odG1sIGdlcmFkbyBwZWxvIGJ1aWxkXHJcbiAgY29uc3QgdGVtcGxhdGUgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGNsaWVudERpc3QsIFwiaW5kZXguaHRtbFwiKSwgXCJ1dGY4XCIpO1xyXG4gIC8vIGluamV0YSBvIEhUTUwgZG8gUmVhY3RcclxuICBjb25zdCBodG1sID0gdGVtcGxhdGUucmVwbGFjZShcclxuICAgICc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsXHJcbiAgICBgPGRpdiBpZD1cInJvb3RcIj4ke2FwcEh0bWx9PC9kaXY+YFxyXG4gICk7XHJcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoaHRtbCk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYOKaoSBTU1Igcm9kYW5kbyBlbSBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5vdEZvdW5kUGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImV4cHJlc3MiLCJmcyIsInBhdGgiLCJyZW5kZXJUb1N0cmluZyIsImFwcCIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiY2xpZW50RGlzdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJyZXEiLCJyZXMiLCJhcHBIdG1sIiwidGVtcGxhdGUiLCJyZWFkRmlsZVN5bmMiLCJqb2luIiwiaHRtbCIsInJlcGxhY2UiLCJjb25jYXQiLCJzdGF0dXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=