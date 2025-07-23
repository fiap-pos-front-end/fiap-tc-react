/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/AboutUs.tsx":
/*!*******************************!*\
  !*** ./src/pages/AboutUs.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUs)
/* harmony export */ });
var team = [{
  name: "João Cardoso",
  photo: "https://avatars.githubusercontent.com/u/209392975",
  role: "@Jao-Cardoso"
}, {
  name: "João Veronese",
  photo: "https://avatars3.githubusercontent.com/u/28982977",
  role: "@joaodos3v"
}, {
  name: "Leonardo Henrique",
  photo: "https://avatars.githubusercontent.com/u/134629428",
  role: "@leonardognh"
}];
function AboutUs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "px-2 max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ml-2 text-2xl"
  }, "Sobre N\xF3s"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 ml-2 text-gray-500 text-md"
  }, "Desenvolvedores."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-6"
  }, team.map(function (member) {
    return /*#__PURE__*/React.createElement("div", {
      key: member.name,
      className: "\r w-full         /* 1 col (mobile) */\r sm:w-1/2       /* 2 cols (>=640px) */\r md:w-1/3       /* 3 cols (>=768px) */\r flex flex-col items-center\r bg-white p-6 rounded-xl\r border-1\r "
    }, /*#__PURE__*/React.createElement("img", {
      src: member.photo,
      alt: member.name,
      className: "w-32 h-32 rounded-full mb-4"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-semibold mb-1"
    }, member.name), /*#__PURE__*/React.createElement("p", {
      className: "flex justify-center items-center text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "pi pi-github mr-1"
    }), " ", member.role));
  })));
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
global.React = __webpack_require__(/*! react */ "react");

const express = __webpack_require__(/*! express */ "express");
const cors = __webpack_require__(/*! cors */ "cors");
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const { renderToString } = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const AboutUs = (__webpack_require__(/*! ./src/pages/AboutUs.tsx */ "./src/pages/AboutUs.tsx")["default"]);

const app = express();
const PORT = process.env.PORT || 4300;
const clientDist = path.resolve(__dirname, "../dist");

app.use(cors());

app.use(express.static(clientDist));

app.get("/sobre-nos", (req, res) => {
  const appHtml = renderToString(React.createElement(AboutUs));
  const template = fs.readFileSync(path.join(clientDist, "index.html"), "utf8");
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  res.status(200).send(html);
});

app.listen(PORT, () => {
  console.log(`⚡ SSR rodando em http://localhost:${PORT}`);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXRjLXJlYWN0Ly4vc3JjL3BhZ2VzL0Fib3V0VXMudHN4Iiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0Ly4vc2VydmVyLmNqcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZWFtID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSm/Do28gQ2FyZG9zb1wiLFxyXG4gICAgcGhvdG86IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIwOTM5Mjk3NVwiLFxyXG4gICAgcm9sZTogXCJASmFvLUNhcmRvc29cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSm/Do28gVmVyb25lc2VcIixcclxuICAgIHBob3RvOiBcImh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjg5ODI5NzdcIixcclxuICAgIHJvbGU6IFwiQGpvYW9kb3MzdlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMZW9uYXJkbyBIZW5yaXF1ZVwiLFxyXG4gICAgcGhvdG86IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEzNDYyOTQyOFwiLFxyXG4gICAgcm9sZTogXCJAbGVvbmFyZG9nbmhcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRVcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtMiBtYXgtdy03eGwgbXgtYXV0b1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LTJ4bFwiPlNvYnJlIE7Ds3M8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi00IG1sLTIgdGV4dC1ncmF5LTUwMCB0ZXh0LW1kXCI+RGVzZW52b2x2ZWRvcmVzLjwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICB7dGVhbS5tYXAoKG1lbWJlcikgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e21lbWJlci5uYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICB3LWZ1bGwgICAgICAgICAvKiAxIGNvbCAobW9iaWxlKSAqL1xyXG4gICAgICAgICAgICAgIHNtOnctMS8yICAgICAgIC8qIDIgY29scyAoPj02NDBweCkgKi9cclxuICAgICAgICAgICAgICBtZDp3LTEvMyAgICAgICAvKiAzIGNvbHMgKD49NzY4cHgpICovXHJcbiAgICAgICAgICAgICAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICBiZy13aGl0ZSBwLTYgcm91bmRlZC14bFxyXG4gICAgICAgICAgICAgIGJvcmRlci0xXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e21lbWJlci5waG90b31cclxuICAgICAgICAgICAgICBhbHQ9e21lbWJlci5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgbWItNFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMVwiPnttZW1iZXIubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwaSBwaS1naXRodWIgbXItMVwiPjwvaT4ge21lbWJlci5yb2xlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZ2xvYmFsLlJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG5cclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xyXG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IHsgcmVuZGVyVG9TdHJpbmcgfSA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xyXG5jb25zdCBBYm91dFVzID0gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL0Fib3V0VXMudHN4XCIpLmRlZmF1bHQ7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQzMDA7XHJcbmNvbnN0IGNsaWVudERpc3QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL2Rpc3RcIik7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGNsaWVudERpc3QpKTtcclxuXHJcbmFwcC5nZXQoXCIvc29icmUtbm9zXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGFwcEh0bWwgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KEFib3V0VXMpKTtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oY2xpZW50RGlzdCwgXCJpbmRleC5odG1sXCIpLCBcInV0ZjhcIik7XHJcbiAgY29uc3QgaHRtbCA9IHRlbXBsYXRlLnJlcGxhY2UoXHJcbiAgICAnPGRpdiBpZD1cInJvb3RcIj48L2Rpdj4nLFxyXG4gICAgYDxkaXYgaWQ9XCJyb290XCI+JHthcHBIdG1sfTwvZGl2PmBcclxuICApO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGh0bWwpO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGDimqEgU1NSIHJvZGFuZG8gZW0gaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsidGVhbSIsIm5hbWUiLCJwaG90byIsInJvbGUiLCJBYm91dFVzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwibWVtYmVyIiwia2V5Iiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==