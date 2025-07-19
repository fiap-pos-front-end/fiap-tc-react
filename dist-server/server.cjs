/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/NotFoundPage.tsx":
/*!************************************!*\
  !*** ./src/pages/NotFoundPage.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
function NotFoundPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "20vh"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "404 \u2013 P\xE1gina n\xE3o encontrada"));
}

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
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
/*!********************!*\
  !*** ./server.cjs ***!
  \********************/
const express = __webpack_require__(/*! express */ "express");
const cors = __webpack_require__(/*! cors */ "cors");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const React = __webpack_require__(/*! react */ "react");
const { renderToString } = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const NotFoundPage = (__webpack_require__(/*! ./src/pages/NotFoundPage.tsx */ "./src/pages/NotFoundPage.tsx")["default"]);

const app = express();
const PORT = process.env.PORT || 4300;
const clientDist = path.resolve(__dirname, "../dist");

app.use(cors());

app.use(express.static(clientDist));

app.use((req, res) => {
  const appHtml = renderToString(React.createElement(NotFoundPage));
  const template = fs.readFileSync(path.join(clientDist, "index.html"), "utf8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.status(404).send(html);
});

app.listen(PORT, () => {
  console.log(`⚡ SSR rodando em http://localhost:${PORT}`);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmNqcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFlBQVlBLENBQUEsRUFBRztFQUNyQyxvQkFDRUMsS0FBQSxDQUFBQyxhQUFBO0lBQUtDLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUUsUUFBUTtNQUFFQyxTQUFTLEVBQUU7SUFBTztFQUFFLGdCQUNyREosS0FBQSxDQUFBQyxhQUFBLGFBQUksd0NBQStCLENBQ2hDLENBQUM7QUFFVixDOzs7Ozs7Ozs7OztBQ05BLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7QUNOQSxnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQyxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0IsV0FBVyxtQkFBTyxDQUFDLGNBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCLGNBQWMsbUJBQU8sQ0FBQyxvQkFBTztBQUM3QixRQUFRLGlCQUFpQixFQUFFLG1CQUFPLENBQUMsMENBQWtCO0FBQ3JELHFCQUFxQixvR0FBK0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFtRCxLQUFLO0FBQ3hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0Ly4vc3JjL3BhZ2VzL05vdEZvdW5kUGFnZS50c3giLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvLi9zZXJ2ZXIuY2pzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdEZvdW5kUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIyMHZoXCIgfX0+XHJcbiAgICAgIDxoMT40MDQg4oCTIFDDoWdpbmEgbsOjbyBlbmNvbnRyYWRhPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuY29uc3QgeyByZW5kZXJUb1N0cmluZyB9ID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XHJcbmNvbnN0IE5vdEZvdW5kUGFnZSA9IHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9Ob3RGb3VuZFBhZ2UudHN4XCIpLmRlZmF1bHQ7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQzMDA7XHJcbmNvbnN0IGNsaWVudERpc3QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL2Rpc3RcIik7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGNsaWVudERpc3QpKTtcclxuXHJcbmFwcC51c2UoKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgYXBwSHRtbCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Rm91bmRQYWdlKSk7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGNsaWVudERpc3QsIFwiaW5kZXguaHRtbFwiKSwgXCJ1dGY4XCIpO1xyXG4gIGNvbnN0IGh0bWwgPSB0ZW1wbGF0ZS5yZXBsYWNlKFxyXG4gICAgJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JyxcclxuICAgIGA8ZGl2IGlkPVwicm9vdFwiPiR7YXBwSHRtbH08L2Rpdj5gXHJcbiAgKTtcclxuICByZXMuc3RhdHVzKDQwNCkuc2VuZChodG1sKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhg4pqhIFNTUiByb2RhbmRvIGVtIGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5vdEZvdW5kUGFnZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==