/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/fetch.js":
/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
async function fetchData(locationName = "mumbai") {
  const key = "37H7MA39XFZDZ3H3VNZVBVQAC";
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=${key}`
    );
    if (!response.ok) {
      const errorSpan = document.querySelector("#error");
      errorSpan.textContent = "Enter correct value";
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}




/***/ }),

/***/ "./src/utils/processFetch.js":
/*!***********************************!*\
  !*** ./src/utils/processFetch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processData: () => (/* binding */ processData)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/utils/fetch.js");


async function processData(weatherData) {
  const dataObj = {
    location: weatherData.resolvedAddress,
    temperature: weatherData.days[0].temp,
    feelslike: weatherData.days[0].feelslike,
    wind: weatherData.days[0].windspeed,
    humidity: weatherData.days[0].humidity,
  };

  return dataObj;
}




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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ "./src/utils/fetch.js");
/* harmony import */ var _utils_processFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/processFetch */ "./src/utils/processFetch.js");



function main() {
  const searchInput = document.querySelector("#searchLoc");
  const searchBtn = document.querySelector("#searchBtn");

  searchBtn.addEventListener("click", showdata);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showdata();
    }
  });

  async function showdata(e) {
    const locationName = searchInput.value;

    if (locationName) {
      try {
        const weatherData = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchData)(locationName);
        const data = await (0,_utils_processFetch__WEBPACK_IMPORTED_MODULE_1__.processData)(weatherData);
        console.log(data.location);
        console.log(data.temperature);
        console.log(data.feelslike);
        console.log(data.wind);
        console.log(data.humidity);
      } catch (error) {
        console.error("Error in main function:", error);
      }
    } else {
      console.log("Please enter a location");
    }
    searchInput.value = "";
  }
}

main();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLGFBQWEsT0FBTyxJQUFJO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUV1Qjs7Ozs7OztVQ2R2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOMEM7QUFDUzs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx1REFBUztBQUMzQywyQkFBMkIsZ0VBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9wcm9jZXNzRmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEobG9jYXRpb25OYW1lID0gXCJtdW1iYWlcIikge1xuICBjb25zdCBrZXkgPSBcIjM3SDdNQTM5WEZaRFozSDNWTlpWQlZRQUNcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb25OYW1lfT9rZXk9JHtrZXl9YFxuICAgICk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZXJyb3JTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvclwiKTtcbiAgICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiRW50ZXIgY29ycmVjdCB2YWx1ZVwiO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBlcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCB7IGZldGNoRGF0YSB9O1xuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4vZmV0Y2hcIjtcblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0RhdGEod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgZGF0YU9iaiA9IHtcbiAgICBsb2NhdGlvbjogd2VhdGhlckRhdGEucmVzb2x2ZWRBZGRyZXNzLFxuICAgIHRlbXBlcmF0dXJlOiB3ZWF0aGVyRGF0YS5kYXlzWzBdLnRlbXAsXG4gICAgZmVlbHNsaWtlOiB3ZWF0aGVyRGF0YS5kYXlzWzBdLmZlZWxzbGlrZSxcbiAgICB3aW5kOiB3ZWF0aGVyRGF0YS5kYXlzWzBdLndpbmRzcGVlZCxcbiAgICBodW1pZGl0eTogd2VhdGhlckRhdGEuZGF5c1swXS5odW1pZGl0eSxcbiAgfTtcblxuICByZXR1cm4gZGF0YU9iajtcbn1cblxuZXhwb3J0IHsgcHJvY2Vzc0RhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4vdXRpbHMvZmV0Y2hcIjtcbmltcG9ydCB7IHByb2Nlc3NEYXRhIH0gZnJvbSBcIi4vdXRpbHMvcHJvY2Vzc0ZldGNoXCI7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hMb2NcIik7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQnRuXCIpO1xuXG4gIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd2RhdGEpO1xuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzaG93ZGF0YSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2hvd2RhdGEoZSkge1xuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgaWYgKGxvY2F0aW9uTmFtZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaERhdGEobG9jYXRpb25OYW1lKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb2Nlc3NEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2NhdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudGVtcGVyYXR1cmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmZlZWxzbGlrZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEud2luZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuaHVtaWRpdHkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG1haW4gZnVuY3Rpb246XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgZW50ZXIgYSBsb2NhdGlvblwiKTtcbiAgICB9XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==