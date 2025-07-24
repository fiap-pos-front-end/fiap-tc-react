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
  }, "Somos um time de desenvolvedores front-end apaixonados por tecnologia e inova\xE7\xE3o. Atualmente, estamos em fase de p\xF3s-gradua\xE7\xE3o com foco no front-end."), /*#__PURE__*/React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmNqcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLElBQUksRUFBRSxjQUFjO0VBQ3BCQyxLQUFLLEVBQUUsbURBQW1EO0VBQzFEQyxJQUFJLEVBQUU7QUFDUixDQUFDLEVBQ0Q7RUFDRUYsSUFBSSxFQUFFLGVBQWU7RUFDckJDLEtBQUssRUFBRSxtREFBbUQ7RUFDMURDLElBQUksRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNFRixJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCQyxLQUFLLEVBQUUsbURBQW1EO0VBQzFEQyxJQUFJLEVBQUU7QUFDUixDQUFDLENBQ0Y7QUFFYyxTQUFTQyxPQUFPQSxDQUFBLEVBQUc7RUFDaEMsb0JBQ0VDLEtBQUEsQ0FBQUMsYUFBQTtJQUFTQyxTQUFTLEVBQUM7RUFBd0IsZ0JBQ3pDRixLQUFBLENBQUFDLGFBQUE7SUFBSUMsU0FBUyxFQUFDO0VBQWUsR0FBQyxjQUFhLENBQUMsZUFDNUNGLEtBQUEsQ0FBQUMsYUFBQTtJQUFHQyxTQUFTLEVBQUM7RUFBaUMsR0FBQyxzS0FJNUMsQ0FBQyxlQUVKRixLQUFBLENBQUFDLGFBQUE7SUFBS0MsU0FBUyxFQUFDO0VBQXFDLEdBQ2pEUCxJQUFJLENBQUNRLEdBQUcsQ0FBQyxVQUFDQyxNQUFNO0lBQUEsb0JBQ2ZKLEtBQUEsQ0FBQUMsYUFBQTtNQUNFSSxHQUFHLEVBQUVELE1BQU0sQ0FBQ1IsSUFBSztNQUNqQk0sU0FBUyxFQUFDO0lBT1QsZ0JBRURGLEtBQUEsQ0FBQUMsYUFBQTtNQUNFSyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ1AsS0FBTTtNQUNsQlUsR0FBRyxFQUFFSCxNQUFNLENBQUNSLElBQUs7TUFDakJNLFNBQVMsRUFBQztJQUE2QixDQUN4QyxDQUFDLGVBQ0ZGLEtBQUEsQ0FBQUMsYUFBQTtNQUFJQyxTQUFTLEVBQUM7SUFBNEIsR0FBRUUsTUFBTSxDQUFDUixJQUFTLENBQUMsZUFDN0RJLEtBQUEsQ0FBQUMsYUFBQTtNQUFHQyxTQUFTLEVBQUM7SUFBd0QsZ0JBQ25FRixLQUFBLENBQUFDLGFBQUE7TUFBR0MsU0FBUyxFQUFDO0lBQW1CLENBQUksQ0FBQyxLQUFDLEVBQUNFLE1BQU0sQ0FBQ04sSUFDN0MsQ0FDQSxDQUFDO0VBQUEsQ0FDUCxDQUNFLENBQ0UsQ0FBQztBQUVkLEM7Ozs7Ozs7Ozs7O0FDdkRBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7QUNOQSxlQUFlLG1CQUFPLENBQUMsb0JBQU87QUFDOUI7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQyxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0IsV0FBVyxtQkFBTyxDQUFDLGNBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCLFFBQVEsaUJBQWlCLEVBQUUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDckQsZ0JBQWdCLDBGQUEwQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvLi9zcmMvcGFnZXMvQWJvdXRVcy50c3giLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvLi9zZXJ2ZXIuY2pzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlYW0gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJKb8OjbyBDYXJkb3NvXCIsXHJcbiAgICBwaG90bzogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjA5MzkyOTc1XCIsXHJcbiAgICByb2xlOiBcIkBKYW8tQ2FyZG9zb1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKb8OjbyBWZXJvbmVzZVwiLFxyXG4gICAgcGhvdG86IFwiaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yODk4Mjk3N1wiLFxyXG4gICAgcm9sZTogXCJAam9hb2RvczN2XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxlb25hcmRvIEhlbnJpcXVlXCIsXHJcbiAgICBwaG90bzogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTM0NjI5NDI4XCIsXHJcbiAgICByb2xlOiBcIkBsZW9uYXJkb2duaFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dFVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweC0yIG1heC13LTd4bCBteC1hdXRvXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0yIHRleHQtMnhsXCI+U29icmUgTsOzczwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgbWwtMiB0ZXh0LWdyYXktNTAwIHRleHQtbWRcIj5cclxuICAgICAgICBTb21vcyB1bSB0aW1lIGRlIGRlc2Vudm9sdmVkb3JlcyBmcm9udC1lbmQgYXBhaXhvbmFkb3MgcG9yIHRlY25vbG9naWEgZVxyXG4gICAgICAgIGlub3Zhw6fDo28uIEF0dWFsbWVudGUsIGVzdGFtb3MgZW0gZmFzZSBkZSBww7NzLWdyYWR1YcOnw6NvIGNvbSBmb2NvIG5vXHJcbiAgICAgICAgZnJvbnQtZW5kLlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC02XCI+XHJcbiAgICAgICAge3RlYW0ubWFwKChtZW1iZXIpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXttZW1iZXIubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgdy1mdWxsICAgICAgICAgLyogMSBjb2wgKG1vYmlsZSkgKi9cclxuICAgICAgICAgICAgICBzbTp3LTEvMiAgICAgICAvKiAyIGNvbHMgKD49NjQwcHgpICovXHJcbiAgICAgICAgICAgICAgbWQ6dy0xLzMgICAgICAgLyogMyBjb2xzICg+PTc2OHB4KSAqL1xyXG4gICAgICAgICAgICAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgICAgYmctd2hpdGUgcC02IHJvdW5kZWQteGxcclxuICAgICAgICAgICAgICBib3JkZXItMVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXttZW1iZXIucGhvdG99XHJcbiAgICAgICAgICAgICAgYWx0PXttZW1iZXIubmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgcm91bmRlZC1mdWxsIG1iLTRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTFcIj57bWVtYmVyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicGkgcGktZ2l0aHViIG1yLTFcIj48L2k+IHttZW1iZXIucm9sZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImdsb2JhbC5SZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCB7IHJlbmRlclRvU3RyaW5nIH0gPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcclxuY29uc3QgQWJvdXRVcyA9IHJlcXVpcmUoXCIuL3NyYy9wYWdlcy9BYm91dFVzLnRzeFwiKS5kZWZhdWx0O1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MzAwO1xyXG5jb25zdCBjbGllbnREaXN0ID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi9kaXN0XCIpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhjbGllbnREaXN0KSk7XHJcblxyXG5hcHAuZ2V0KFwiL3NvYnJlLW5vc1wiLCAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBhcHBIdG1sID0gcmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChBYm91dFVzKSk7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGNsaWVudERpc3QsIFwiaW5kZXguaHRtbFwiKSwgXCJ1dGY4XCIpO1xyXG4gIGNvbnN0IGh0bWwgPSB0ZW1wbGF0ZS5yZXBsYWNlKFxyXG4gICAgJzxkaXYgaWQ9XCJyb290XCI+PC9kaXY+JyxcclxuICAgIGA8ZGl2IGlkPVwicm9vdFwiPiR7YXBwSHRtbH08L2Rpdj5gXHJcbiAgKTtcclxuICByZXMuc3RhdHVzKDIwMCkuc2VuZChodG1sKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhg4pqhIFNTUiByb2RhbmRvIGVtIGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbInRlYW0iLCJuYW1lIiwicGhvdG8iLCJyb2xlIiwiQWJvdXRVcyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsIm1lbWJlciIsImtleSIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=