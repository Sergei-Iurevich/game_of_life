/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n}\\n\\n.controls {\\n  padding: 10px 0 0 10px;\\n}\\n\\n.input-range {\\n  padding-top: 10px;\\n  padding-left: 10px;\\n}\\n\\n.table-container {\\n  width: 50%;\\n  margin: 40px auto;\\n}\\n\\ntable {\\n  table-layout: fixed;\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n  border: 2px solid green;\\n}\\n\\ntd {\\n  padding: 20px;\\n  border: 1px solid black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/ts/allCellsWillBeDead.ts":
/*!**************************************!*\
  !*** ./src/ts/allCellsWillBeDead.ts ***!
  \**************************************/
/*! exports provided: allCellsWillBeDead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allCellsWillBeDead\", function() { return allCellsWillBeDead; });\nfunction allCellsWillBeDead(matrix) {\n  const result = matrix.toString().indexOf(\"1\");\n\n  if (result === -1) {\n    return true;\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack:///./src/ts/allCellsWillBeDead.ts?");

/***/ }),

/***/ "./src/ts/arrayOfIndexNeighbors.ts":
/*!*****************************************!*\
  !*** ./src/ts/arrayOfIndexNeighbors.ts ***!
  \*****************************************/
/*! exports provided: arrayOfIndexNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayOfIndexNeighbors\", function() { return arrayOfIndexNeighbors; });\nfunction arrayOfIndexNeighbors(numI, numJ) {\n  const ar1 = [numI - 1, numI, numI + 1];\n  const ar2 = [numJ - 1, numJ, numJ + 1];\n  const array = [];\n\n  for (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 3; j++) {\n      if (i !== 1 || j !== 1) {\n        const elArray = [ar1[i], ar2[j]];\n        array.push(elArray);\n      }\n    }\n  }\n\n  return array;\n}\n\n//# sourceURL=webpack:///./src/ts/arrayOfIndexNeighbors.ts?");

/***/ }),

/***/ "./src/ts/changeNumberOfColumns.ts":
/*!*****************************************!*\
  !*** ./src/ts/changeNumberOfColumns.ts ***!
  \*****************************************/
/*! exports provided: changeNumberOfColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeNumberOfColumns\", function() { return changeNumberOfColumns; });\nfunction changeNumberOfColumns(table, inputForColumns) {\n  const inputValue = Number(inputForColumns.value);\n  const numberOfRows = table.rows.length;\n  const numberOfColumns = table.rows[0].cells.length;\n\n  if (inputValue > numberOfColumns) {\n    for (let i = 0; i < numberOfRows; i++) {\n      const row = table.rows[i];\n\n      for (let j = numberOfColumns; j < inputValue; j++) {\n        row.insertCell();\n      }\n    }\n  } else {\n    for (let i = 0; i < numberOfRows; i++) {\n      const row = table.rows[i];\n      const indexLastColumn = numberOfColumns - 1;\n\n      for (let j = indexLastColumn; j >= inputValue; j--) {\n        row.deleteCell(j);\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/ts/changeNumberOfColumns.ts?");

/***/ }),

/***/ "./src/ts/changeNumberOfRows.ts":
/*!**************************************!*\
  !*** ./src/ts/changeNumberOfRows.ts ***!
  \**************************************/
/*! exports provided: changeNumberOfRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeNumberOfRows\", function() { return changeNumberOfRows; });\nfunction changeNumberOfRows(table, inputForRows) {\n  const inputValue = Number(inputForRows.value);\n  const numberOfRows = table.rows.length;\n  const numberOfColumns = table.rows[0].cells.length;\n\n  if (inputValue > table.rows.length) {\n    for (let i = numberOfRows; i < inputValue; i++) {\n      const newRow = table.insertRow();\n\n      for (let j = 0; j < numberOfColumns; j++) {\n        newRow.insertCell(j);\n      }\n    }\n  } else {\n    const indexLastRow = numberOfRows - 1;\n\n    for (let i = indexLastRow; i >= inputValue; i--) {\n      table.deleteRow(i);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/ts/changeNumberOfRows.ts?");

/***/ }),

/***/ "./src/ts/checkForMatches.ts":
/*!***********************************!*\
  !*** ./src/ts/checkForMatches.ts ***!
  \***********************************/
/*! exports provided: checkForMatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForMatches\", function() { return checkForMatches; });\nfunction checkForMatches(arrayMatrix, matrix) {\n  if (arrayMatrix.length > 0) {\n    for (let i = 0; i < arrayMatrix.length; i++) {\n      if (arrayMatrix[i].toString() === matrix.toString()) {\n        return true;\n      }\n    }\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack:///./src/ts/checkForMatches.ts?");

/***/ }),

/***/ "./src/ts/createMatrix.ts":
/*!********************************!*\
  !*** ./src/ts/createMatrix.ts ***!
  \********************************/
/*! exports provided: createMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMatrix\", function() { return createMatrix; });\nfunction createMatrix(table) {\n  const {\n    rows\n  } = table;\n  const matrix = [];\n\n  for (let i = 0; i < rows.length; i++) {\n    const {\n      cells\n    } = rows[i];\n    const rowOfMatrix = [];\n\n    for (let j = 0; j < cells.length; j++) {\n      if (cells[j].style.backgroundColor === \"grey\" || cells[j].style.backgroundColor === \"blue\") {\n        rowOfMatrix.push(1);\n      } else {\n        rowOfMatrix.push(0);\n      }\n    }\n\n    matrix.push(rowOfMatrix);\n  }\n\n  return matrix;\n}\n\n//# sourceURL=webpack:///./src/ts/createMatrix.ts?");

/***/ }),

/***/ "./src/ts/drawTable.ts":
/*!*****************************!*\
  !*** ./src/ts/drawTable.ts ***!
  \*****************************/
/*! exports provided: drawTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTable\", function() { return drawTable; });\nfunction drawTable(table, array, color) {\n  const {\n    rows\n  } = table;\n\n  for (let i = 0; i < array.length; i++) {\n    const {\n      cells\n    } = rows[i];\n\n    for (let j = 0; j < array[0].length; j++) {\n      if (array[i][j] === 1) {\n        cells[j].style.backgroundColor = color;\n      } else if (color !== \"blue\") {\n        cells[j].style.backgroundColor = \"white\";\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/ts/drawTable.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _initListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initListeners */ \"./src/ts/initListeners.ts\");\n\n\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/initListeners.ts":
/*!*********************************!*\
  !*** ./src/ts/initListeners.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _changeNumberOfRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeNumberOfRows */ \"./src/ts/changeNumberOfRows.ts\");\n/* harmony import */ var _changeNumberOfColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeNumberOfColumns */ \"./src/ts/changeNumberOfColumns.ts\");\n/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame */ \"./src/ts/startGame.ts\");\n\n\n\nconst arrayMatrix = [];\nconst pause = {\n  status: false\n};\nconst app = document.querySelector(\".app\");\nconst inputForRows = app.querySelector(\".controls__input-vertical\");\nconst inputForColumns = app.querySelector(\".controls__input-horizontal\");\nconst buttonStartGame = app.querySelector(\".controls__button\");\nconst table = app.querySelector(\"table\");\nconst inputRange = app.querySelector(\"#range\");\nconst label = app.querySelector(\"#label\");\nlabel.innerText = inputRange.value;\ninputForRows.addEventListener(\"change\", () => {\n  arrayMatrix.length = 0;\n\n  if (Number(inputForRows.value) > 3) {\n    Object(_changeNumberOfRows__WEBPACK_IMPORTED_MODULE_0__[\"changeNumberOfRows\"])(table, inputForRows);\n  } else {\n    inputForRows.value = \"3\";\n    Object(_changeNumberOfRows__WEBPACK_IMPORTED_MODULE_0__[\"changeNumberOfRows\"])(table, inputForRows);\n  }\n});\ninputForColumns.addEventListener(\"change\", () => {\n  arrayMatrix.length = 0;\n\n  if (Number(inputForColumns.value) > 3) {\n    Object(_changeNumberOfColumns__WEBPACK_IMPORTED_MODULE_1__[\"changeNumberOfColumns\"])(table, inputForColumns);\n  } else {\n    inputForColumns.value = \"3\";\n    Object(_changeNumberOfColumns__WEBPACK_IMPORTED_MODULE_1__[\"changeNumberOfColumns\"])(table, inputForColumns);\n  }\n});\nbuttonStartGame.addEventListener(\"click\", () => {\n  // alert(\"ok\");\n  if (buttonStartGame.innerText !== \"stop\") {\n    buttonStartGame.innerText = \"stop\";\n    pause.status = false;\n    const delayStart = 1000 / Number(inputRange.value); // alert(\"ok\");\n\n    setTimeout(() => {\n      // alert(\"ok\");\n      Object(_startGame__WEBPACK_IMPORTED_MODULE_2__[\"startGame\"])(pause, table, inputRange, arrayMatrix);\n    }, delayStart);\n  } else {\n    buttonStartGame.innerText = \"start\";\n    pause.status = true;\n  }\n});\ntable.addEventListener(\"click\", e => {\n  if (buttonStartGame.innerText === \"stop\") {\n    buttonStartGame.innerText = \"start\";\n    pause.status = true;\n  }\n\n  const cell = e.target;\n\n  if (cell.style.backgroundColor === \"grey\") {\n    cell.style.backgroundColor = \"white\";\n  } else {\n    cell.style.backgroundColor = \"grey\";\n  }\n});\ninputRange.addEventListener(\"change\", () => {\n  label.innerText = inputRange.value;\n});\n\n//# sourceURL=webpack:///./src/ts/initListeners.ts?");

/***/ }),

/***/ "./src/ts/matrixRemake.ts":
/*!********************************!*\
  !*** ./src/ts/matrixRemake.ts ***!
  \********************************/
/*! exports provided: matrixRemake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matrixRemake\", function() { return matrixRemake; });\n/* harmony import */ var _sumNeighbors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sumNeighbors */ \"./src/ts/sumNeighbors.ts\");\n/* harmony import */ var _arrayOfIndexNeighbors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayOfIndexNeighbors */ \"./src/ts/arrayOfIndexNeighbors.ts\");\n\n\nfunction matrixRemake(matrix) {\n  const numberOfRows = matrix.length;\n  const numberOfColumns = matrix[0].length;\n  const matrixRes = [];\n\n  for (let i = 0; i < numberOfRows; i++) {\n    const matrixJ = [];\n\n    for (let j = 0; j < numberOfColumns; j++) {\n      const sum = Object(_sumNeighbors__WEBPACK_IMPORTED_MODULE_0__[\"sumNeighbors\"])(matrix, Object(_arrayOfIndexNeighbors__WEBPACK_IMPORTED_MODULE_1__[\"arrayOfIndexNeighbors\"])(i, j));\n\n      if (sum === 2) {\n        matrixJ.push(matrix[i][j]);\n      } else if (sum === 3) {\n        matrixJ.push(1);\n      } else {\n        matrixJ.push(0);\n      }\n    }\n\n    matrixRes.push(matrixJ);\n  }\n\n  return matrixRes;\n}\n\n//# sourceURL=webpack:///./src/ts/matrixRemake.ts?");

/***/ }),

/***/ "./src/ts/searchForDeadCells.ts":
/*!**************************************!*\
  !*** ./src/ts/searchForDeadCells.ts ***!
  \**************************************/
/*! exports provided: searchForDeadCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchForDeadCells\", function() { return searchForDeadCells; });\nfunction searchForDeadCells(matrix, newMatrix) {\n  const matrixOfDeadh = matrix.map((itemI, indexI) => {\n    if (itemI.toString() === newMatrix[indexI].toString()) {\n      return itemI.map(() => 0);\n    } // eslint-disable-next-line array-callback-return,consistent-return\n\n\n    return itemI.map((itemJ, indexJ) => {\n      if (itemJ === 1 && newMatrix[indexI][indexJ] === 0) {\n        return 1;\n      }\n\n      return 0;\n    });\n  });\n  return matrixOfDeadh;\n}\n\n//# sourceURL=webpack:///./src/ts/searchForDeadCells.ts?");

/***/ }),

/***/ "./src/ts/startGame.ts":
/*!*****************************!*\
  !*** ./src/ts/startGame.ts ***!
  \*****************************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony import */ var _createMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMatrix */ \"./src/ts/createMatrix.ts\");\n/* harmony import */ var _matrixRemake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrixRemake */ \"./src/ts/matrixRemake.ts\");\n/* harmony import */ var _allCellsWillBeDead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allCellsWillBeDead */ \"./src/ts/allCellsWillBeDead.ts\");\n/* harmony import */ var _drawTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawTable */ \"./src/ts/drawTable.ts\");\n/* harmony import */ var _searchForDeadCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchForDeadCells */ \"./src/ts/searchForDeadCells.ts\");\n/* harmony import */ var _checkForMatches__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkForMatches */ \"./src/ts/checkForMatches.ts\");\n\n\n\n\n\n\nfunction startGame(objPause, table, inputRange, array) {\n  const arrayMatrix = array;\n  const statusPause = objPause.status;\n\n  if (!statusPause) {\n    const matrix = Object(_createMatrix__WEBPACK_IMPORTED_MODULE_0__[\"createMatrix\"])(table);\n    const matrixNew = Object(_matrixRemake__WEBPACK_IMPORTED_MODULE_1__[\"matrixRemake\"])(matrix);\n\n    if (!Object(_checkForMatches__WEBPACK_IMPORTED_MODULE_5__[\"checkForMatches\"])(arrayMatrix, matrix)) {\n      if (!Object(_allCellsWillBeDead__WEBPACK_IMPORTED_MODULE_2__[\"allCellsWillBeDead\"])(matrix)) {\n        const delay = 1000 / Number(inputRange.value);\n        Object(_drawTable__WEBPACK_IMPORTED_MODULE_3__[\"drawTable\"])(table, matrixNew, \"grey\");\n        Object(_drawTable__WEBPACK_IMPORTED_MODULE_3__[\"drawTable\"])(table, Object(_searchForDeadCells__WEBPACK_IMPORTED_MODULE_4__[\"searchForDeadCells\"])(matrixNew, Object(_matrixRemake__WEBPACK_IMPORTED_MODULE_1__[\"matrixRemake\"])(matrixNew)), \"blue\");\n        setTimeout(() => {\n          startGame(objPause, table, inputRange, arrayMatrix);\n        }, delay);\n        arrayMatrix.push(matrix);\n      } else {\n        alert(\"All cells are dead\");\n        arrayMatrix.length = 0;\n      }\n    } else {\n      alert(\"A periodic configuration is formed\");\n      arrayMatrix.length = 0;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/ts/startGame.ts?");

/***/ }),

/***/ "./src/ts/sumNeighbors.ts":
/*!********************************!*\
  !*** ./src/ts/sumNeighbors.ts ***!
  \********************************/
/*! exports provided: sumNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumNeighbors\", function() { return sumNeighbors; });\nfunction sumNeighbors(matrix, matrixOfIndex) {\n  const numberOfRows = matrix.length;\n  const numberOfColumns = matrix[0].length;\n  const array = [];\n\n  for (let i = 0; i < 8; i++) {\n    if (matrixOfIndex[i][0] >= 0 && matrixOfIndex[i][0] < numberOfRows && matrixOfIndex[i][1] >= 0 && matrixOfIndex[i][1] < numberOfColumns) {\n      array.push(matrix[matrixOfIndex[i][0]][matrixOfIndex[i][1]]);\n    }\n  }\n\n  return array.reduce((sum, current) => sum + current, 0);\n}\n\n//# sourceURL=webpack:///./src/ts/sumNeighbors.ts?");

/***/ })

/******/ });