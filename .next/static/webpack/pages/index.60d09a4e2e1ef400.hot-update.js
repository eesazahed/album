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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./components/Image.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Gallery = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), imageURLs = ref[0], setImageURLs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchImages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var request, data, URLs;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"https://api.github.com/repos/eesazahed/album/contents/public/assets/images/uploads\")\n                            ];\n                        case 1:\n                            request = _state.sent();\n                            if (!request.ok) return [\n                                3,\n                                3\n                            ];\n                            return [\n                                4,\n                                request.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            if (data) {\n                                URLs = data.map(function(image) {\n                                    return image.download_url;\n                                });\n                                setImageURLs(URLs);\n                            }\n                            _state.label = 3;\n                        case 3:\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchImages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, _this) : imageURLs && imageURLs.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-white\",\n            children: imageURLs.map(function(imageURL) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        imageURL: imageURL\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, _this)\n                }, imageURL, false, {\n                    fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No images could be loaded.\"\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Gallery, \"E3lQ0twlHiqq0Oh3MygrV3ba5uw=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDNEM7QUFDaEI7QUFNNUIsSUFBTUcsT0FBTyxHQUFhLGdCQUFRO1FBQVAsc0pBQUU7O0lBQzNCLElBQWtDRixHQUFvQixHQUFwQkEsK0NBQVEsRUFBWSxFQUEvQ0csU0FBUyxHQUFrQkgsR0FBb0IsR0FBdEMsRUFBRUksWUFBWSxHQUFJSixHQUFvQixHQUF4QjtJQUM5QixJQUE4QkEsSUFBdUIsR0FBdkJBLCtDQUFRLENBQVUsSUFBSSxDQUFDLEVBQTlDSyxPQUFPLEdBQWdCTCxJQUF1QixHQUF2QyxFQUFFTSxVQUFVLEdBQUlOLElBQXVCLEdBQTNCO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNUSxXQUFXO3VCQUFHLCtGQUFZO29CQUN4QkMsT0FBTyxFQUtMQyxJQUFJLEVBR0ZDLElBQUk7Ozs7NEJBUkU7O2dDQUFNQyxLQUFLLENBQ3pCLG9GQUFvRixDQUNyRjs4QkFBQTs7NEJBRktILE9BQU8sR0FBRyxhQUVmO2lDQUVHQSxPQUFPLENBQUNJLEVBQUUsRUFBVko7Ozs4QkFBVTs0QkFDQzs7Z0NBQU1BLE9BQU8sQ0FBQ0ssSUFBSSxFQUFFOzhCQUFBOzs0QkFBM0JKLElBQUksR0FBRyxhQUFvQjs0QkFFakMsSUFBSUEsSUFBSSxFQUFFO2dDQUNGQyxJQUFJLEdBQUdELElBQUksQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLEtBQWdCOzJDQUFLQSxLQUFLLENBQUNDLFlBQVk7aUNBQUEsQ0FBQyxDQUFDO2dDQUNoRVosWUFBWSxDQUFDTSxJQUFJLENBQUMsQ0FBQzs0QkFDckIsQ0FBQzs7OzRCQUdISixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztZQUNwQixDQUFDOzRCQWZLQyxXQUFXOzs7V0FlaEI7UUFFREEsV0FBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ25CYixPQUFPLGlCQUNOLDhEQUFDYyxHQUFDO3NCQUFDLFlBQVU7Ozs7O2lCQUFJLEdBQ2ZoQixTQUFTLElBQUlBLFNBQVMsQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDLGlCQUNuQyw4REFBQ0gsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVztzQkFDdkJmLFNBQVMsQ0FBQ1csR0FBRyxDQUFDLFNBQUNPLFFBQVE7cUNBQ3RCLDhEQUFDSixLQUFHOzhCQUNGLDRFQUFDaEIsOENBQUs7d0JBQUNvQixRQUFRLEVBQUVBLFFBQVE7Ozs7OzZCQUFJO21CQURyQkEsUUFBUTs7Ozt5QkFFWjthQUNQLENBQUM7Ozs7O2lCQUNFLGlCQUVOLDhEQUFDRixHQUFDO3NCQUFDLDRCQUEwQjs7Ozs7aUJBQUk7Ozs7O2FBRS9CLENBQ047QUFDSixDQUFDO0dBMUNLakIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBNENiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LnRzeD8wZmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuXG5pbnRlcmZhY2UgSW1hZ2VUeXBlIHtcbiAgZG93bmxvYWRfdXJsOiBzdHJpbmc7XG59XG5cbmNvbnN0IEdhbGxlcnk6IE5leHRQYWdlID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtpbWFnZVVSTHMsIHNldEltYWdlVVJMc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2Vlc2F6YWhlZC9hbGJ1bS9jb250ZW50cy9wdWJsaWMvYXNzZXRzL2ltYWdlcy91cGxvYWRzXCJcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXF1ZXN0Lm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGNvbnN0IFVSTHMgPSBkYXRhLm1hcCgoaW1hZ2U6IEltYWdlVHlwZSkgPT4gaW1hZ2UuZG93bmxvYWRfdXJsKTtcbiAgICAgICAgICBzZXRJbWFnZVVSTHMoVVJMcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcblxuICAgIGZldGNoSW1hZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTZcIj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IGltYWdlVVJMcyAmJiBpbWFnZVVSTHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGVcIj5cbiAgICAgICAgICB7aW1hZ2VVUkxzLm1hcCgoaW1hZ2VVUkwpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZVVSTH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBpbWFnZVVSTD17aW1hZ2VVUkx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBpbWFnZXMgY291bGQgYmUgbG9hZGVkLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJHYWxsZXJ5IiwiaW1hZ2VVUkxzIiwic2V0SW1hZ2VVUkxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaEltYWdlcyIsInJlcXVlc3QiLCJkYXRhIiwiVVJMcyIsImZldGNoIiwib2siLCJqc29uIiwibWFwIiwiaW1hZ2UiLCJkb3dubG9hZF91cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibGVuZ3RoIiwiaW1hZ2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n"));

/***/ })

});