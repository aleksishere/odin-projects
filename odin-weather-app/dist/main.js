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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\ndocument.querySelector(\"button\").addEventListener(\"click\", _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ndocument.getElementById(\"tempSwitch\").addEventListener(\"click\", _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadingScreen = document.getElementById('loading-screen');\nloadingScreen.style.display = 'block';\n\nasync function getWeather() {\n  try {\n    let location = document.getElementById(\"location\").value;\n    if (location == \"\") {\n      location = \"Poznan\";\n    }\n    let query = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=d4eae3ba006f45bda87220203230910&q=${location}&days=3&aqi=no&alerts=no`,\n    );\n    let response = await query.json();\n    loadingScreen.style = 'none';\n    return response;\n  } catch (error) {\n    console.error(\"An error occurred:\", error);\n    throw error;\n  }\n}\nasync function drawData(response) {\n  let tempCheck = document.getElementById(\"tempSwitch\").checked;\n  document.getElementById(\"location-name\").innerText =\n    response.location.name + \", \" + response.location.country;\n  document.getElementById(\"latest-update\").innerText =\n    response.current.last_updated;\n  document\n    .getElementById(\"weather-icon\")\n    .setAttribute(\"src\", \"https://\" + response.current.condition.icon);\n  if (tempCheck == false) {\n    document.getElementById(\"temp\").innerText = response.current.temp_c + \" °C\";\n  } else {\n    document.getElementById(\"temp\").innerText = response.current.temp_f + \" °F\";\n  }\n  document.getElementById(\"weather-status\").innerText =\n    response.current.condition.text;\n\n  const weatherDetails = document.getElementById(\"weather-details\");\n  weatherDetails.innerHTML = \"\";\n\n  const weatherWindKPH = document.createElement(\"p\");\n  weatherWindKPH.innerText = \"Wind: \" + response.current.wind_kph + \" (km/h)\";\n  weatherDetails.appendChild(weatherWindKPH);\n\n  const weatherHumidity = document.createElement(\"p\");\n  weatherHumidity.innerText = \"Humidity: \" + response.current.humidity + \"%\";\n  weatherDetails.appendChild(weatherHumidity);\n\n  const weatherChanceRain = document.createElement(\"p\");\n  weatherChanceRain.innerText =\n    \"Chance of rain: \" +\n    response.forecast.forecastday[0].day.daily_chance_of_rain +\n    \"%\";\n  weatherDetails.appendChild(weatherChanceRain);\n\n  const forecastDiv = document.getElementById(\"forecastDiv\");\n  forecastDiv.innerHTML = \"\";\n\n  let forecastArray = response.forecast.forecastday;\n  for (const day in forecastArray) {\n    const forecastTab = document.createElement(\"div\");\n    forecastTab.classList.add(\n      \"weather-tab\",\n      \"p-6\",\n      \"border-solid\",\n      \"border-2\",\n      \"rounded-xl\",\n    );\n    forecastDiv.appendChild(forecastTab);\n\n    const forecastDate = document.createElement(\"p\");\n    forecastDate.innerText = forecastArray[day].date;\n    forecastDate.classList.add(\"text-center\", \"text-xl\");\n    forecastTab.appendChild(forecastDate);\n\n    const forecastImgWrapper = document.createElement(\"div\");\n    forecastImgWrapper.classList.add(\"flex\", \"items-center\", \"justify-center\");\n    forecastTab.appendChild(forecastImgWrapper);\n\n    const forecastImg = document.createElement(\"img\");\n    forecastImg.src = \"https://\" + forecastArray[day].day.condition.icon;\n    forecastImgWrapper.appendChild(forecastImg);\n\n    const forecastTemp = document.createElement(\"p\");\n    if (tempCheck == false) {\n      forecastTemp.innerText = forecastArray[day].day.avgtemp_c + \" °C\";\n    } else {\n      forecastTemp.innerText = forecastArray[day].day.avgtemp_f + \" °F\";\n    }\n    forecastImgWrapper.appendChild(forecastTemp);\n\n    const forecastStatus = document.createElement(\"p\");\n    forecastStatus.innerText = forecastArray[day].day.condition.text;\n    forecastStatus.classList.add(\"text-center\", \"text-xl\");\n    forecastTab.appendChild(forecastStatus);\n  }\n}\n\nasync function refreshData() {\n  try {\n    let result = await getWeather();\n    await drawData(result);\n  } catch (error) {\n    console.error(\"Something happened...\", error);\n    loadingScreen.style = 'none';\n    throw error;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshData);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weather.js?");

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