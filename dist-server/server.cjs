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
  name: "Alice Souza",
  role: "CEO",
  photo: "https://via.placeholder.com/150",
  bio: "Apaixonada por tecnologia e liderança."
}, {
  name: "Bruno Lima",
  role: "CTO",
  photo: "https://via.placeholder.com/150",
  bio: "Especialista em frontend e arquitetura de microfrontends."
}, {
  name: "Carla Dias",
  role: "Design Lead",
  photo: "https://via.placeholder.com/150",
  bio: "Cria experiências incríveis com UI/UX."
}];
function AboutUs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto px-4 py-8"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-bold mb-4"
  }, "Sobre N\xF3s"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg mb-8"
  }, "Somos um time nerd, met\xF3dico e fora da caixinha, focado em criar solu\xE7\xF5es front\u2011end de alta qualidade."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
  }, team.map(function (member) {
    return /*#__PURE__*/React.createElement("div", {
      key: member.name,
      className: "bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
    }, /*#__PURE__*/React.createElement("img", {
      src: member.photo,
      alt: member.name,
      className: "w-32 h-32 rounded-full mx-auto mb-4"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-semibold text-center"
    }, member.name), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-center text-gray-600 mb-4"
    }, member.role), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-700 text-sm"
    }, member.bio));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvLi9zcmMvcGFnZXMvQWJvdXRVcy50c3giLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWFwLXRjLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlhcC10Yy1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpYXAtdGMtcmVhY3QvLi9zZXJ2ZXIuY2pzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlYW0gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbGljZSBTb3V6YVwiLFxyXG4gICAgcm9sZTogXCJDRU9cIixcclxuICAgIHBob3RvOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIGJpbzogXCJBcGFpeG9uYWRhIHBvciB0ZWNub2xvZ2lhIGUgbGlkZXJhbsOnYS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQnJ1bm8gTGltYVwiLFxyXG4gICAgcm9sZTogXCJDVE9cIixcclxuICAgIHBob3RvOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIixcclxuICAgIGJpbzogXCJFc3BlY2lhbGlzdGEgZW0gZnJvbnRlbmQgZSBhcnF1aXRldHVyYSBkZSBtaWNyb2Zyb250ZW5kcy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2FybGEgRGlhc1wiLFxyXG4gICAgcm9sZTogXCJEZXNpZ24gTGVhZFwiLFxyXG4gICAgcGhvdG86IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiLFxyXG4gICAgYmlvOiBcIkNyaWEgZXhwZXJpw6puY2lhcyBpbmNyw612ZWlzIGNvbSBVSS9VWC5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRVcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+U29icmUgTsOzczwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItOFwiPlxyXG4gICAgICAgIFNvbW9zIHVtIHRpbWUgbmVyZCwgbWV0w7NkaWNvIGUgZm9yYSBkYSBjYWl4aW5oYSwgZm9jYWRvIGVtIGNyaWFyXHJcbiAgICAgICAgc29sdcOnw7VlcyBmcm9udOKAkWVuZCBkZSBhbHRhIHF1YWxpZGFkZS5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XHJcbiAgICAgICAge3RlYW0ubWFwKChtZW1iZXIpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXttZW1iZXIubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtMnhsIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3dcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXttZW1iZXIucGhvdG99XHJcbiAgICAgICAgICAgICAgYWx0PXttZW1iZXIubmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgcm91bmRlZC1mdWxsIG14LWF1dG8gbWItNFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIHttZW1iZXIucm9sZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtc21cIj57bWVtYmVyLmJpb308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJnbG9iYWwuUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcblxyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgeyByZW5kZXJUb1N0cmluZyB9ID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XHJcbmNvbnN0IEFib3V0VXMgPSByZXF1aXJlKFwiLi9zcmMvcGFnZXMvQWJvdXRVcy50c3hcIikuZGVmYXVsdDtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDMwMDtcclxuY29uc3QgY2xpZW50RGlzdCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vZGlzdFwiKTtcclxuXHJcbmFwcC51c2UoY29ycygpKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoY2xpZW50RGlzdCkpO1xyXG5cclxuYXBwLmdldChcIi9zb2JyZS1ub3NcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgYXBwSHRtbCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWJvdXRVcykpO1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihjbGllbnREaXN0LCBcImluZGV4Lmh0bWxcIiksIFwidXRmOFwiKTtcclxuICBjb25zdCBodG1sID0gdGVtcGxhdGUucmVwbGFjZShcclxuICAgICc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsXHJcbiAgICBgPGRpdiBpZD1cInJvb3RcIj4ke2FwcEh0bWx9PC9kaXY+YFxyXG4gICk7XHJcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoaHRtbCk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYOKaoSBTU1Igcm9kYW5kbyBlbSBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ0ZWFtIiwibmFtZSIsInJvbGUiLCJwaG90byIsImJpbyIsIkFib3V0VXMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJtZW1iZXIiLCJrZXkiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9