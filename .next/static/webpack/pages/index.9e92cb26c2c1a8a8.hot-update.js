"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Gallery.tsx":
/*!********************************!*\
  !*** ./components/Gallery.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./components/Image.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Gallery = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), imageURLs = ref[0], setImageURLs = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchImages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var request, data, URLs;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"https://api.github.com/repos/eesazahed/album/contents/public/assets/images/uploads\")\n                            ];\n                        case 1:\n                            request = _state.sent();\n                            if (!request.ok) return [\n                                3,\n                                3\n                            ];\n                            return [\n                                4,\n                                request.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            if (data) {\n                                URLs = data.map(function(image) {\n                                    return image.download_url;\n                                });\n                                console.log(URLs);\n                                setImageURLs(URLs);\n                            }\n                            _state.label = 3;\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchImages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: imageURLs && imageURLs.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageURLs.map(function(imageURL) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        imageURL: imageURL\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Gallery, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDNEM7QUFDaEI7QUFtQjVCLElBQU1HLE9BQU8sR0FBYSxnQkFBUTtRQUFQLHNKQUFFOztJQUMzQixJQUFrQ0YsR0FBb0IsR0FBcEJBLCtDQUFRLEVBQVksRUFBL0NHLFNBQVMsR0FBa0JILEdBQW9CLEdBQXRDLEVBQUVJLFlBQVksR0FBSUosR0FBb0IsR0FBeEI7SUFFOUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1NLFdBQVc7dUJBQUcsK0ZBQVk7b0JBQ3hCQyxPQUFPLEVBS0xDLElBQUksRUFHRkMsSUFBSTs7Ozs0QkFSRTs7Z0NBQU1DLEtBQUssQ0FDekIsb0ZBQW9GLENBQ3JGOzhCQUFBOzs0QkFGS0gsT0FBTyxHQUFHLGFBRWY7aUNBRUdBLE9BQU8sQ0FBQ0ksRUFBRSxFQUFWSjs7OzhCQUFVOzRCQUNDOztnQ0FBTUEsT0FBTyxDQUFDSyxJQUFJLEVBQUU7OEJBQUE7OzRCQUEzQkosSUFBSSxHQUFHLGFBQW9COzRCQUVqQyxJQUFJQSxJQUFJLEVBQUU7Z0NBQ0ZDLElBQUksR0FBR0QsSUFBSSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBZ0I7MkNBQUtBLEtBQUssQ0FBQ0MsWUFBWTtpQ0FBQSxDQUFDLENBQUM7Z0NBRWhFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDLENBQUM7Z0NBQ2xCSixZQUFZLENBQUNJLElBQUksQ0FBQyxDQUFDOzRCQUNyQixDQUFDOzs7Ozs7OztZQUVMLENBQUM7NEJBZktILFdBQVc7OztXQWVoQjtRQUVEQSxXQUFXLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTtrQkFDR0YsU0FBUyxJQUFJQSxTQUFTLENBQUNjLE1BQU0sR0FBRyxDQUFDLGtCQUNoQyw4REFBQ0MsS0FBRztzQkFDRGYsU0FBUyxDQUFDUyxHQUFHLENBQUMsU0FBQ08sUUFBUTtxQ0FDdEIsOERBQUNELEtBQUc7OEJBQ0YsNEVBQUNqQiw4Q0FBSzt3QkFBQ2tCLFFBQVEsRUFBRUEsUUFBUTs7Ozs7NkJBQUk7Ozs7O3lCQUN6QjthQUNQLENBQUM7Ozs7O2lCQUNFO3FCQUVQLENBQ0g7QUFDSixDQUFDO0dBckNLakIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBdUNiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LnRzeD8wZmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuXG5pbnRlcmZhY2UgSW1hZ2VUeXBlIHtcbiAgbmFtZTogU3RyaW5nO1xuICBwYXRoOiBTdHJpbmc7XG4gIHNoYTogU3RyaW5nO1xuICBzaXplOiBOdW1iZXI7XG4gIHVybDogU3RyaW5nO1xuICBodG1sX3VybDogU3RyaW5nO1xuICBnaXRfdXJsOiBTdHJpbmc7XG4gIGRvd25sb2FkX3VybDogU3RyaW5nO1xuICB0eXBlOiBTdHJpbmc7XG4gIF9saW5rczoge1xuICAgIHNlbGY6IFN0cmluZztcbiAgICBnaXQ6IFN0cmluZztcbiAgICBodG1sOiBTdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IEdhbGxlcnk6IE5leHRQYWdlID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtpbWFnZVVSTHMsIHNldEltYWdlVVJMc10gPSB1c2VTdGF0ZTxTdHJpbmdbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZWVzYXphaGVkL2FsYnVtL2NvbnRlbnRzL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3VwbG9hZHNcIlxuICAgICAgKTtcblxuICAgICAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgVVJMcyA9IGRhdGEubWFwKChpbWFnZTogSW1hZ2VUeXBlKSA9PiBpbWFnZS5kb3dubG9hZF91cmwpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coVVJMcyk7XG4gICAgICAgICAgc2V0SW1hZ2VVUkxzKFVSTHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoSW1hZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aW1hZ2VVUkxzICYmIGltYWdlVVJMcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aW1hZ2VVUkxzLm1hcCgoaW1hZ2VVUkwpID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJbWFnZSBpbWFnZVVSTD17aW1hZ2VVUkx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiR2FsbGVyeSIsImltYWdlVVJMcyIsInNldEltYWdlVVJMcyIsImZldGNoSW1hZ2VzIiwicmVxdWVzdCIsImRhdGEiLCJVUkxzIiwiZmV0Y2giLCJvayIsImpzb24iLCJtYXAiLCJpbWFnZSIsImRvd25sb2FkX3VybCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJkaXYiLCJpbWFnZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n"));

/***/ }),

/***/ "./components/Image.tsx":
/*!******************************!*\
  !*** ./components/Image.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Image = function(param) {\n    var imageURL = param.imageURL;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: imageURL\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Image.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, _this);\n};\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\nvar _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFNQSxJQUFNQSxLQUFLLEdBQW9CLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7SUFDeEMscUJBQU8sOERBQUNDLEtBQUc7a0JBQUVELFFBQVE7Ozs7O2FBQU8sQ0FBQztBQUMvQixDQUFDO0FBRktELEtBQUFBLEtBQUs7QUFJWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2UudHN4PzgyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbWFnZVVSTDogc3RyaW5nO1xufVxuXG5jb25zdCBJbWFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgaW1hZ2VVUkwgfSkgPT4ge1xuICByZXR1cm4gPGRpdj57aW1hZ2VVUkx9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJpbWFnZVVSTCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Image.tsx\n"));

/***/ })

});