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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ \"./src/utils/fetch.js\");\n/* harmony import */ var _utils_processFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/processFetch */ \"./src/utils/processFetch.js\");\n\n\n\nasync function main() {\n  try {\n    const weatherData = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchData)(\"london\");\n    const data = await (0,_utils_processFetch__WEBPACK_IMPORTED_MODULE_1__.processData)(weatherData);\n    console.log(data.location);\n    console.log(data.temperature);\n    console.log(data.feelslike);\n    console.log(data.wind);\n    console.log(data.humidity);\n  } catch (error) {\n    console.error(\"Error in main function:\", error);\n  }\n}\n\nmain();\n// const data = processData(weatherData);\n\n// console.log(data.location);\n// console.log(data.temperature);\n// console.log(data.feelslike);\n// console.log(data.wind);\n// console.log(data.humidity);\n\n// async function main() {\n//     try {\n//       const weatherData = await fetchData(\"london\");\n//       const data = await processData(weatherData);\n\n//   console.log(data.location);\n//   console.log(data.temperature);\n//   console.log(data.feelslike);\n//   console.log(data.wind);\n//   console.log(data.humidity);\n//     } catch (error) {\n//       console.error(\"Error in main function:\", error);\n//     }\n//   }\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nasync function fetchData(locationValue = \"mumbai\") {\n  const key = \"37H7MA39XFZDZ3H3VNZVBVQAC\";\n  try {\n    const response = await fetch(\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationValue}?key=${key}`,\n      { mode: \"cors\" }\n    );\n    if (!response.ok) {\n      throw new Error(`Response status: ${response.status}`);\n    }\n    const data = await response.json();\n    // console.log(data);\n    return data;\n  } catch (error) {\n    console.error(\"Fetch error:\", error);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/utils/fetch.js?");

/***/ }),

/***/ "./src/utils/processFetch.js":
/*!***********************************!*\
  !*** ./src/utils/processFetch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processData: () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/utils/fetch.js\");\n\n\n// Write the functions that process the JSON data\n// you’re getting from the API and return an object\n//  with only the data you require for your app.\n\nasync function processData(weatherData) {\n  const dataObj = {\n    location: weatherData.address,\n    temperature: weatherData.days[0].temp,\n    feelslike: weatherData.days[0].feelslike,\n    wind: weatherData.days[0].windspeed,\n    humidity: weatherData.days[0].humidity,\n  };\n\n  return dataObj;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/utils/processFetch.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;