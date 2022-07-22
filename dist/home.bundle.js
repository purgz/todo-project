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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/RobotoMono-VariableFont_wght.ttf */ \"./src/fonts/RobotoMono-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: \\\"defaultFont\\\";\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n:root{\\r\\n    --cadet: #5D737E;\\r\\n    --green-sheen: #64B6AC;\\r\\n    --celeste: #C0FDFB;\\r\\n    --aero-blue: #DAFFEF;\\r\\n    --white: #FCFFFD;\\r\\n}\\r\\n\\r\\n*{\\r\\n    box-sizing: border-box;\\r\\n    font-family: \\\"defaultFont\\\";\\r\\n}\\r\\n\\r\\nbody{\\r\\n    height: 100vh;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n#header{\\r\\n    background-color: var(--green-sheen);\\r\\n    height: 60px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding-left: 18px;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n.content{\\r\\n    display: flex;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.left-nav{\\r\\n    background-color: var(--aero-blue);\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n.project-view{\\r\\n    background-color: var(--white);\\r\\n    flex: 4;\\r\\n}\\r\\n\\r\\n.new-project-modal,.new-todo-modal,.update-todo-modal{\\r\\n    display: none;\\r\\n    background-color: rgba(0, 0, 0, 0.5);\\r\\n    position: fixed;\\r\\n    z-index: 1;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.project-modal-content,.todo-modal-content,.update-todo-modal-content{\\r\\n    width: 400px;\\r\\n    height: 100px;\\r\\n    background-color: white;\\r\\n    left: 50%;\\r\\n    top: 50%;\\r\\n    transform: translate(-50%,-50%);\\r\\n    position: absolute;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.todo-modal-content,.update-todo-modal-content{\\r\\n    width: 500px;\\r\\n    height: 200px;\\r\\n}\\r\\n\\r\\n.project:hover,#today:hover,#week:hover{\\r\\n    background-color: grey;\\r\\n}\\r\\n\\r\\n.task-container{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 20px;\\r\\n    gap: 10px;\\r\\n    \\r\\n}\\r\\n\\r\\n.task-element{\\r\\n    background-color: var(--aero-blue);\\r\\n    height: 30px;\\r\\n    width: 100%;\\r\\n    border-radius: 5px;\\r\\n    height: 50px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 10px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.dropdown-content{\\r\\n    padding: 0 18px;\\r\\n    max-height: 0;\\r\\n    overflow: hidden;\\r\\n    transition: max-height 0.2s ease-out;\\r\\n    background-color: var(--white);\\r\\n    width: 100%;\\r\\n    border: solid 0.5px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\nul{\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n#footer{\\r\\n    background-color: var(--green-sheen);\\r\\n    height: 40px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    gap: 10px;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.gh-icon{\\r\\n    transition: ease-in-out 300ms;\\r\\n}\\r\\n.gh-icon:hover{\\r\\n    transform: rotate(360deg);\\r\\n}\\r\\n\\r\\n.expanded-project-view{\\r\\n    padding-left: 20px;\\r\\n    padding-right: 20px;\\r\\n    margin-top: 10px;\\r\\n    display: flex;\\r\\n    gap: 20px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.new-todo-btn,.delete-todo-btn{\\r\\n    width: 100px;\\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\nbutton{\\r\\n    border: none;\\r\\n    transition: ease-in-out 100ms;\\r\\n}\\r\\n\\r\\nbutton:hover{\\r\\n    filter: brightness(0.96);\\r\\n    transform: scale(1.05);\\r\\n    border-radius: 0px;\\r\\n}\\r\\n\\r\\n.project-btn-container{\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.todo-btn-container{\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.edit-todo-btn,.completed-btn{\\r\\n    background-color: var(--green-sheen);\\r\\n    border-radius: 5px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-project/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Dom */ \"./src/modules/Dom.js\");\n\r\n\r\n\r\n_modules_Dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadHome();\r\n\r\n\n\n//# sourceURL=webpack://todo-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/modules/todoItem.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _images_Icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Icon.svg */ \"./src/images/Icon.svg\");\n\r\n\r\n\r\n\r\n\r\nclass Dom{\r\n    //static var - temporary for storing projects\r\n    static projects = [];\r\n    static currentExpandedProject;\r\n    static currentTask;\r\n    \r\n    static loadHome(){\r\n        Dom.loadFooter();\r\n        Dom.loadSideBar();\r\n        Dom.loadNewProjectModal();\r\n        Dom.NewTodoModal();\r\n        Dom.UpdateTodoModal();\r\n        Dom.newProjectEventListeners();\r\n        \r\n        Dom.projects = _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects();\r\n        if (Dom.projects.length > 0){\r\n            Dom.RenderProjects();\r\n        }\r\n    }\r\n\r\n    static loadFooter(){\r\n        const footerIcon = document.querySelector(\"#github-link\");\r\n        const icon = new Image();\r\n        icon.src = _images_Icon_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n        icon.classList.add(\"gh-icon\");\r\n        footerIcon.appendChild(icon)\r\n    }\r\n\r\n    static loadSideBar(){\r\n        const sideBar = document.querySelector(\".left-nav\");\r\n        sideBar.innerHTML = `\r\n        <div>\r\n            <div id = \"today\">\r\n                Today\r\n            </div>\r\n            <div id = \"week\">\r\n                This week\r\n            </div>\r\n            <button id = \"new-project-btn\">New Project</button>\r\n            <div class = \"project-container-wrapper\">\r\n                Projects\r\n                <div class = \"project-container\"></div>\r\n            </div>\r\n        </div>\r\n        `\r\n    }\r\n\r\n    static loadNewProjectModal(){\r\n        const body = document.querySelector(\"body\");\r\n        const modal = document.createElement(\"div\");\r\n        modal.classList.add(\"new-project-modal\");\r\n        modal.innerHTML = `\r\n        <div class=\"project-modal-content\">\r\n            <div class=\"modal-items\">\r\n                <form id = \"new-project-form\">\r\n                    <input name = \"name_input\" type = \"text\" required>\r\n                    <button id = \"new-project-submit\" type = \"submit\">Add Project</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        `        \r\n        body.appendChild(modal);\r\n    }\r\n\r\n    static NewTodoModal(){\r\n        const body = document.querySelector(\"body\");\r\n        const modal = document.createElement(\"div\");\r\n        modal.classList.add(\"new-todo-modal\");\r\n        modal.innerHTML = `\r\n        <div class=\"todo-modal-content\">\r\n            <div class=\"modal-items\">\r\n                <form id = \"new-todo-form\">\r\n                    <input name = \"name_input\" type = \"text\" required>\r\n                    <input name = \"date\" type = \"date\" required>\r\n                    <textarea name = \"description\" rows = \"5\" cols = \"33\" required></textarea>\r\n                    <select name = \"priority\" required>\r\n                        <option value = \"low\">low</option>\r\n                        <option value = \"medium\">medium</option>\r\n                        <option value = \"high\">high</option>\r\n                    </select>\r\n                    <button id = \"new-todo-submit\" type = \"submit\">Add new Todo</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        `        \r\n        body.appendChild(modal);        \r\n    }\r\n\r\n    static UpdateTodoModal(){\r\n        const body = document.querySelector(\"body\");\r\n        const modal = document.createElement(\"div\");\r\n        modal.classList.add(\"update-todo-modal\");\r\n        modal.innerHTML = `\r\n        <div class=\"update-todo-modal-content\">\r\n            <div class=\"modal-items\">\r\n                <form id = \"update-todo-form\">\r\n                    <input name = \"name_input\" type = \"text\" required>\r\n                    <input name = \"date\" type = \"date\" required>\r\n                    <textarea name = \"description\" rows = \"5\" cols = \"33\" required></textarea>\r\n                    <select name = \"priority\" required>\r\n                        <option value = \"low\">low</option>\r\n                        <option value = \"medium\">medium</option>\r\n                        <option value = \"high\">high</option>\r\n                    </select>\r\n                    <button id = \"update-todo-submit\" type = \"submit\">Add new Todo</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        `        \r\n        body.appendChild(modal); \r\n    }\r\n\r\n    static NewProject(e){\r\n        e.preventDefault();\r\n        \r\n        let newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.target.name_input.value)\r\n        for (let i = 0; i < Dom.projects.length; i++){\r\n            if (Dom.projects[i].getName() == e.target.name_input.value){\r\n                alert(\"project already exists\")\r\n                return;\r\n            }\r\n        }\r\n        Dom.projects.push(newProject);\r\n        _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(Dom.projects);\r\n         \r\n        const modal = document.querySelector(\".new-project-modal\");\r\n        modal.style.display = \"none\";\r\n\r\n        Dom.RenderProjects();\r\n    }\r\n\r\n    static NewTodo(e){\r\n        e.preventDefault();\r\n        const modal = document.querySelector(\".new-todo-modal\");\r\n        modal.style.display = \"none\";\r\n\r\n        let name = e.target.name_input.value;\r\n        let date = e.target.date.value;\r\n        let priority = e.target.priority.value;\r\n        let description = e.target.description.value;\r\n\r\n        let newTodo = new _todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name,date,description,priority);\r\n        \r\n        Dom.currentExpandedProject.addTask(newTodo);\r\n        _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(Dom.projects);\r\n        Dom.RenderTasks(Dom.currentExpandedProject.getTasks());\r\n        \r\n    }\r\n\r\n    static UpdateTodo(e){\r\n        e.preventDefault();\r\n        console.log(e.target)\r\n\r\n        const modal = document.querySelector(\".update-todo-modal\");\r\n        modal.style.display = \"none\";\r\n\r\n        let name = e.target.name_input.value;\r\n        let date = e.target.date.value;\r\n        let priority = e.target.priority.value;\r\n        let description = e.target.description.value;\r\n\r\n        Dom.currentTask.setName(name);\r\n        Dom.currentTask.setDueDate(date);\r\n        Dom.currentTask.setPriority(priority);\r\n        Dom.currentTask.setDescription(description);\r\n        Dom.currentTask = null;\r\n        \r\n        Dom.RenderTaskOrUpcomingTask();\r\n\r\n        _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(Dom.projects);\r\n    }\r\n\r\n    static ShowProjectModal(){\r\n        const modal = document.querySelector(\".new-project-modal\");\r\n        modal.style.display = \"block\";\r\n    }\r\n\r\n    static ShowTodoModal(){\r\n        const modal = document.querySelector(\".new-todo-modal\");\r\n        modal.style.display = \"block\";\r\n    }\r\n\r\n    static ShowUpdateModal(e){\r\n        const modal = document.querySelector(\".update-todo-modal\");\r\n        modal.style.display = \"block\";\r\n    }\r\n\r\n    static HideModal(e){\r\n        const modal = document.querySelector(\".new-project-modal\");\r\n        const todoModal = document.querySelector(\".new-todo-modal\");\r\n        const updateModal = document.querySelector(\".update-todo-modal\");\r\n        //if the parent div of the modal is clicked\r\n        if (e.target == modal){ \r\n            modal.style.display = \"none\";\r\n        }\r\n\r\n        if (e.target == todoModal){\r\n            \r\n            todoModal.style.display = \"none\";\r\n        }\r\n\r\n        if (e.target == updateModal){\r\n            updateModal.style.display = \"none\";\r\n        }\r\n    }\r\n\r\n    static RenderProjects(){\r\n        const projectContainer = document.querySelector(\".project-container\");\r\n        projectContainer.innerHTML = \"\";\r\n        Dom.projects.forEach(project=>{\r\n            \r\n            let projectDiv = document.createElement(\"div\");\r\n            projectDiv.classList.add(\"project\");\r\n            projectDiv.textContent = project.getName();\r\n            projectContainer.appendChild(projectDiv);\r\n\r\n            //displays project when clicked on\r\n            projectDiv.addEventListener(\"click\",()=>{\r\n                Dom.ExpandProject(project);\r\n            })\r\n        })\r\n    }\r\n\r\n    static RenderTasks(tasks){\r\n        const taskContainer = document.querySelector(\".task-container\");\r\n        taskContainer.innerHTML = \"\";\r\n\r\n        tasks.forEach(task =>{\r\n            taskContainer.appendChild(Dom.CreateTaskElement(task));\r\n            taskContainer.appendChild(Dom.DropDown(task));\r\n        })\r\n    }\r\n\r\n    static RenderTaskOrUpcomingTask(){\r\n        //when making a delete, if the upcoming tabs are open they are displayed instead of the old current expanded project\r\n        if (Dom.currentExpandedProject === 7){\r\n            Dom.ShowUpcomingTasks(7);\r\n        } else if (Dom.currentExpandedProject === 1){\r\n            Dom.ShowUpcomingTasks(1);\r\n        } else {\r\n            Dom.RenderTasks(Dom.currentExpandedProject.getTasks());\r\n        }\r\n    }\r\n\r\n    static CreateTaskElement(task){\r\n        const taskElement = document.createElement(\"div\");\r\n        taskElement.classList.add(\"task-element\");\r\n        taskElement.textContent = task.getName();\r\n        \r\n        const editBtn = document.createElement(\"button\");\r\n        editBtn.textContent = \"Edit\";\r\n        editBtn.classList.add(\"edit-todo-btn\")\r\n        editBtn.addEventListener(\"click\",e=>{\r\n            //stop triggering the dropdown when trying to edit task\r\n            e.stopPropagation();\r\n            Dom.currentTask = task;\r\n            Dom.ShowUpdateModal(e);\r\n        });\r\n\r\n        const deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.textContent = \"Completed\";\r\n        deleteBtn.classList.add(\"completed-btn\")\r\n        deleteBtn.addEventListener(\"click\",e=>{\r\n            e.stopPropagation();\r\n            Dom.DeleteTodo(task);\r\n        })\r\n\r\n        const btnContainer = document.createElement(\"div\");\r\n        btnContainer.classList.add(\"todo-btn-container\");\r\n        btnContainer.appendChild(editBtn);\r\n        btnContainer.appendChild(deleteBtn);\r\n\r\n        taskElement.appendChild(btnContainer);\r\n\r\n        //code for the dropdown menu -- from w3schools\r\n        taskElement.addEventListener(\"click\",function(){\r\n            this.classList.toggle(\"active\");\r\n            var content = this.nextElementSibling;\r\n            if(content.style.maxHeight){\r\n                content.style.maxHeight = null;\r\n            } else {\r\n                content.style.maxHeight = content.scrollHeight + \"px\";\r\n            }\r\n        })\r\n\r\n        return taskElement;\r\n    }\r\n\r\n    static DropDown(task){\r\n        const content = document.createElement(\"div\");\r\n       \r\n        content.innerHTML = `\r\n            <ul>\r\n                <li>${task.getName()}</li>\r\n                <li>${task.getDueDate()}</li>\r\n                <li>${task.getPriority()}</li>\r\n                <li>${task.getDescription()}</li>\r\n            </ul>\r\n        `\r\n\r\n        content.classList.add(\"dropdown-content\")\r\n        return content;\r\n    }\r\n   \r\n\r\n    static ExpandProject(project){\r\n        const projectView = document.querySelector(\".expanded-project-view\");\r\n        const taskView = document.querySelector(\".task-container\");\r\n        projectView.innerHTML = \"\";\r\n\r\n        const title = document.createElement(\"h2\");\r\n        title.textContent = project.getName();\r\n        projectView.appendChild(title);\r\n        \r\n        const btn = document.createElement(\"button\");\r\n        btn.id = \"new-todo-btn\";\r\n        btn.textContent = \"Add new todo\";\r\n        btn.classList.add(\"new-todo-btn\");\r\n        btn.addEventListener(\"click\",Dom.ShowTodoModal);\r\n        projectView.appendChild(btn);\r\n\r\n        const deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.classList.add(\"delete-todo-btn\");\r\n        deleteBtn.textContent = \"Delete Project\";\r\n        deleteBtn.addEventListener(\"click\",()=>{\r\n            Dom.DeleteProject(project);\r\n            projectView.innerHTML = \"\";\r\n            taskView.innerHTML = \"\";\r\n        })\r\n\r\n        const btnContainer = document.createElement(\"div\");\r\n        btnContainer.classList.add(\"project-btn-container\");\r\n        btnContainer.appendChild(btn);\r\n        btnContainer.appendChild(deleteBtn);\r\n        projectView.appendChild(btnContainer);\r\n\r\n        Dom.currentExpandedProject = project;\r\n        Dom.RenderTasks(Dom.currentExpandedProject.getTasks());\r\n    }\r\n\r\n    static DeleteProject(project){\r\n        let index = Dom.projects.indexOf(project);\r\n        Dom.projects.splice(index,1);\r\n        _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(Dom.projects);\r\n        Dom.RenderProjects();\r\n    }\r\n\r\n    static DeleteTodo(todo){\r\n        for (let i = 0; i < Dom.projects.length; i++){ //checks what project the selected task is in\r\n            let todos = Dom.projects[i].getTasks();\r\n            if (todos.includes(todo)){\r\n                Dom.projects[i].removeTask(todo);   //deletes that task\r\n            }\r\n        }\r\n       \r\n        _Storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(Dom.projects);\r\n        \r\n        Dom.RenderTaskOrUpcomingTask();\r\n    }\r\n\r\n    static ShowUpcomingTasks(days){\r\n        Dom.currentExpandedProject = days;\r\n        const projectView = document.querySelector(\".expanded-project-view\");\r\n        projectView.innerHTML = \"\";\r\n\r\n        const title = document.createElement(\"h2\");\r\n        title.textContent = `Upcoming tasks (${days} days)`;\r\n        projectView.appendChild(title);\r\n\r\n        let todayTasks = [];\r\n        Dom.projects.forEach(project=>{\r\n            project.getTasks().forEach(task=>{\r\n                if (Dom.DayDifference(task.getDueDate()) < (days+1)){\r\n                    todayTasks.push(task);\r\n                }\r\n            })\r\n        })\r\n        Dom.RenderTasks(todayTasks);\r\n    }\r\n\r\n    static DayDifference(date){ //calculates the difference in days between two dates\r\n        let currentDate = new Date();\r\n        const timeDiff = Math.abs(date - currentDate);\r\n        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));\r\n        return diffDays;\r\n    }\r\n\r\n    //event listeners\r\n    static newProjectEventListeners(){\r\n        const newProjectButton = document.querySelector(\"#new-project-btn\");\r\n        const newProjectForm = document.querySelector(\"#new-project-form\");\r\n        const newTodoForm = document.querySelector(\"#new-todo-form\");\r\n        const updateTodoForm = document.querySelector(\"#update-todo-form\");\r\n        const today = document.querySelector(\"#today\");\r\n        const week = document.querySelector(\"#week\");\r\n        \r\n        newProjectForm.addEventListener(\"submit\", Dom.NewProject)\r\n        newProjectButton.addEventListener(\"click\", Dom.ShowProjectModal)\r\n       \r\n        newTodoForm.addEventListener(\"submit\", Dom.NewTodo)\r\n\r\n        updateTodoForm.addEventListener(\"submit\",Dom.UpdateTodo)\r\n\r\n        today.addEventListener(\"click\",()=>{\r\n            Dom.ShowUpcomingTasks(1);\r\n        })\r\n        week.addEventListener(\"click\",()=>{\r\n            Dom.ShowUpcomingTasks(7);\r\n        });\r\n\r\n        window.addEventListener(\"click\",Dom.HideModal)\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-project/./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\r\n    constructor(name){\r\n        this.name = name;\r\n        this.tasks = []\r\n    }\r\n\r\n    getName(){\r\n        return this.name;\r\n    }\r\n\r\n    addTask(task){\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n\r\n    removeTask(task){\r\n        let index = this.tasks.indexOf(task)\r\n        this.tasks.splice(index,1);\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-project/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/modules/todoItem.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\r\n\r\n\r\nclass Storage{\r\n    \r\n    //stores project array in localstorage\r\n    static updateProjects(projects){\r\n        localStorage.setItem(\"allProjects\",JSON.stringify(projects));\r\n    }\r\n\r\n    /*\r\n        json parsed objects lose functionality so this function takes the parsed values and creates a\r\n        new set of project objects which can be used to populate the application\r\n    */\r\n    static getProjects(){\r\n        let projects = localStorage.getItem(\"allProjects\");\r\n\r\n        //if empty return empty array\r\n        if (!projects){return []}\r\n\r\n        let allProjects = JSON.parse(projects);\r\n        \r\n        return allProjects.map(project=>{\r\n            let newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](project.name);\r\n            \r\n            project.tasks.forEach(task=>{\r\n                let newTask = new _todoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task.name,task.dueDate,task.description,task.priority);\r\n                newProject.addTask(newTask);\r\n            })\r\n         \r\n            return newProject;\r\n        })     \r\n    }\r\n}\n\n//# sourceURL=webpack://todo-project/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/todoItem.js":
/*!*********************************!*\
  !*** ./src/modules/todoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem{\r\n    constructor(name,dueDate,description,priority){\r\n        this.name = name;\r\n        this.dueDate = new Date(dueDate);\r\n        this.description = description;\r\n        this.priority = priority;\r\n    }\r\n\r\n    setName(name){\r\n        this.name = name;\r\n    }\r\n    getName(){\r\n        return this.name;\r\n    }\r\n\r\n    setDescription(desc){\r\n        this.description = desc;\r\n    }\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n\r\n    setPriority(priority){\r\n        this.priority = priority;\r\n    }\r\n    getPriority(){\r\n        return this.priority;\r\n    }\r\n\r\n    setDueDate(dueDate){\r\n        this.dueDate = new Date(dueDate);\r\n    }\r\n    getDueDate(){\r\n        return this.dueDate;\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://todo-project/./src/modules/todoItem.js?");

/***/ }),

/***/ "./src/fonts/RobotoMono-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/RobotoMono-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e1d699e6544d0dbf6ec7.ttf\";\n\n//# sourceURL=webpack://todo-project/./src/fonts/RobotoMono-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/images/Icon.svg":
/*!*****************************!*\
  !*** ./src/images/Icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04be58c17b3d5e974442.svg\";\n\n//# sourceURL=webpack://todo-project/./src/images/Icon.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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