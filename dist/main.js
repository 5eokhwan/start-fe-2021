/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\r\nconst lectureAllBtn = document.getElementById(\"Lecture-Filter-All\");\r\nconst lectureHelplinkBtn = document.getElementById(\"Lecture-Filter-Helplink\");\r\nconst lectureGitBtn = document.getElementById(\"Lecture-Filter-Git\");\r\nconst lectureRecentBtn = document.getElementById(\"Lecture-Filter-Recent\");\r\n\r\nconst quizAllBtn = document.getElementById(\"Quiz-Filter-All\");\r\nconst quizGitBtn = document.getElementById(\"Quiz-Filter-Git\");\r\n\r\nlet Lectures,\r\n  select_lecture = lectureAllBtn;\r\n\r\nlet Quizs,\r\n  select_quiz = quizAllBtn;\r\n\r\nfetch(\"class.json\")\r\n  .then((data) => data.json())\r\n  .then((data) => {\r\n    const spin = document.getElementById(\"LectureLoadingSpin\");\r\n    spin.parentNode.removeChild(spin);\r\n    data.forEach((v, i) => {\r\n      v[\"week\"] = i + 1;\r\n      console.log(v);\r\n    });\r\n    console.log(data);\r\n    Lectures = data;\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderLecture(data);\r\n  });\r\nfetch(\"quiz.json\")\r\n  .then((data) => data.json())\r\n  .then((data) => {\r\n    const spin = document.getElementById(\"QuizLoadingSpin\");\r\n    spin.parentNode.removeChild(spin);\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderQuiz(data);\r\n    Quizs = data;\r\n  });\r\n\r\nfunction selectLecture(e) {\r\n  const el = e.target;\r\n  if (el.classList.contains(\"class-btn\")) {\r\n    select_lecture.classList.remove(\"active\");\r\n    select_lecture = el;\r\n  } else {\r\n    select_quiz.classList.remove(\"active\");\r\n    select_quiz = el;\r\n  }\r\n  el.classList.add(\"active\");\r\n}\r\n\r\nfunction addEvent() {\r\n  const filterBtns = document.querySelectorAll(\".btn-outline-primary\");\r\n  console.log(filterBtns);\r\n  filterBtns.forEach((btn) => btn.addEventListener(\"click\", selectLecture));\r\n}\r\naddEvent();\r\n\r\nlectureAllBtn.addEventListener(\"click\", (e) => {\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderLecture(Lectures, \"All\");\r\n});\r\n\r\nlectureHelplinkBtn.addEventListener(\"click\", (e) => {\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderLecture(Lectures, \"Helplink\");\r\n  e.target.classList.add(\"active\");\r\n});\r\n\r\nlectureGitBtn.addEventListener(\"click\", (e) =>\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderLecture(Lectures, \"Git\")\r\n);\r\n\r\nlectureRecentBtn.addEventListener(\"click\", (e) =>\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderLecture(Lectures, \"Recent\")\r\n);\r\n\r\nquizAllBtn.addEventListener(\"click\", (e) => {\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderQuiz(Quizs, \"All\");\r\n});\r\n\r\nquizGitBtn.addEventListener(\"click\", (e) => {\r\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.renderQuiz(Quizs, \"Git\");\r\n});\r\n\n\n//# sourceURL=webpack://start-fe-2021/./app.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lectureTableBody = document.getElementById(\"LectureTableBody\");\r\nconst quizTableBody = document.getElementById(\"QuizTableBody\");\r\n\r\nfunction renderLecture(data, filter = \"All\") {\r\n  data = data.slice();\r\n  switch (filter) {\r\n    case \"Helplink\":\r\n      data = data.filter((lec) => lec.links.length > 0);\r\n      break;\r\n    case \"Git\":\r\n      data = data.filter((lec) => lec.gitUrl);\r\n      break;\r\n    case \"Recent\":\r\n      data = data.sort((a, b) => {\r\n        a = Number(a.date.replace(/-/g, \"\"));\r\n        b = Number(b.date.replace(/-/g, \"\"));\r\n        return b - a;\r\n      });\r\n      break;\r\n  }\r\n  const lectures = data.map(\r\n    (lecture) => `<tr>\r\n        <th scope=\"row\">${lecture.week}</th>\r\n        <td>${lecture.title}</td>\r\n        <td>\r\n        <a href=\"${lecture.docUrl}\" class=\"badge bg-secondary\"\r\n            >${lecture.gitUrl ? \"문서\" : \"\"}</a\r\n        >\r\n        </td>\r\n        <td>\r\n        ${lecture.links\r\n          .map(\r\n            (link, i) =>\r\n              \"<a href=\" +\r\n              link +\r\n              ' class=\"badge bg-secondary mx-1\">' +\r\n              i +\r\n              \"</a>\"\r\n          )\r\n          .join(\"\")}\r\n      </td>\r\n        <td>${lecture.date}</td>\r\n        <td>\r\n        <a\r\n            href=\"${lecture.gitUrl}\"\r\n            >${lecture.gitUrl ? \"git\" : \"\"}</a\r\n        >\r\n        </td>\r\n    </tr>`\r\n  );\r\n  lectureTableBody.innerHTML = lectures.join(\"\");\r\n}\r\nfunction renderQuiz(data, filter = \"All\") {\r\n  switch (filter) {\r\n    case \"Git\":\r\n      data = data.filter((q) => q.gitUrl);\r\n      break;\r\n  }\r\n  const quizs = data.map(\r\n    (quiz) => `<tr>\r\n    <td>${quiz.title}</td>\r\n    <td>\r\n      <a\r\n        class=\"badge bg-secondary\"\r\n        href=\"${quiz.docUrl}\"\r\n        >문서</a\r\n      >\r\n    </td>\r\n    <td><a href=\"${quiz.previewUrl}\">${quiz.previewUrl ? \"보기\" : \"\"}</a></td>\r\n    <td><a href=\"${quiz.gitUrl}\">${quiz.gitUrl ? \"git\" : \"\"}</a></td>\r\n    </tr>`\r\n  );\r\n  quizTableBody.innerHTML = quizs.join(\"\");\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ renderLecture, renderQuiz });\r\n\n\n//# sourceURL=webpack://start-fe-2021/./utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;