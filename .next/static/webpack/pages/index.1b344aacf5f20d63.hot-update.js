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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Gallery = function(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), imageURLs = ref[0], setImageURLs = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchImages = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var request, data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetch(\"https://api.github.com/repos/eesazahed/album/contents/public/assets/images/uploads\")\n                            ];\n                        case 1:\n                            request = _state.sent();\n                            if (!request.ok) return [\n                                3,\n                                3\n                            ];\n                            return [\n                                4,\n                                request.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            if (data) {\n                                setImageURLs(data.map(function(image) {\n                                    return image.URL;\n                                }));\n                            }\n                            _state.label = 3;\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchImages() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, _this);\n};\n_s(Gallery, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztBQUM0QztBQW1CNUMsSUFBTUUsT0FBTyxHQUFvQixnQkFBUTtRQUFQLHNKQUFFOztJQUNsQyxJQUFrQ0QsR0FBb0IsR0FBcEJBLCtDQUFRLEVBQVksRUFBL0NFLFNBQVMsR0FBa0JGLEdBQW9CLEdBQXRDLEVBQUVHLFlBQVksR0FBSUgsR0FBb0IsR0FBeEI7SUFFOUJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1LLFdBQVc7dUJBQUcsK0ZBQVk7b0JBQ3hCQyxPQUFPLEVBS0xDLElBQUk7Ozs7NEJBTEk7O2dDQUFNQyxLQUFLLENBQ3pCLG9GQUFvRixDQUNyRjs4QkFBQTs7NEJBRktGLE9BQU8sR0FBRyxhQUVmO2lDQUVHQSxPQUFPLENBQUNHLEVBQUUsRUFBVkg7Ozs4QkFBVTs0QkFDQzs7Z0NBQU1BLE9BQU8sQ0FBQ0ksSUFBSSxFQUFFOzhCQUFBOzs0QkFBM0JILElBQUksR0FBRyxhQUFvQjs0QkFFakMsSUFBSUEsSUFBSSxFQUFFO2dDQUNSSCxZQUFZLENBQUNHLElBQUksQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLEtBQUs7MkNBQUtBLEtBQUssQ0FBQ0MsR0FBRztpQ0FBQSxDQUFDLENBQUMsQ0FBQzs0QkFDL0MsQ0FBQzs7Ozs7Ozs7WUFFTCxDQUFDOzRCQVpLUixXQUFXOzs7V0FZaEI7UUFFREEsV0FBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQU8sOERBQUNTLEtBQUc7Ozs7YUFBTyxDQUFDO0FBQ3JCLENBQUM7R0F0QktaLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXdCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FsbGVyeS50c3g/MGZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJbWFnZSB7XG4gIG5hbWU6IFN0cmluZztcbiAgcGF0aDogU3RyaW5nO1xuICBzaGE6IFN0cmluZztcbiAgc2l6ZTogTnVtYmVyO1xuICB1cmw6IFN0cmluZztcbiAgaHRtbF91cmw6IFN0cmluZztcbiAgZ2l0X3VybDogU3RyaW5nO1xuICBkb3dubG9hZF91cmw6IFN0cmluZztcbiAgdHlwZTogU3RyaW5nO1xuICBfbGlua3M6IHtcbiAgICBzZWxmOiBTdHJpbmc7XG4gICAgZ2l0OiBTdHJpbmc7XG4gICAgaHRtbDogXCJodHRwczovL2dpdGh1Yi5jb20vZWVzYXphaGVkL2FsYnVtL2Jsb2IvbWFpbi9wdWJsaWMvYXNzZXRzL2ltYWdlcy91cGxvYWRzL2ltYWdlMS5qcGdcIjtcbiAgfTtcbn1cblxuY29uc3QgR2FsbGVyeTogTmV4dFBhZ2U8UHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtpbWFnZVVSTHMsIHNldEltYWdlVVJMc10gPSB1c2VTdGF0ZTxTdHJpbmdbXT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZWVzYXphaGVkL2FsYnVtL2NvbnRlbnRzL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3VwbG9hZHNcIlxuICAgICAgKTtcblxuICAgICAgaWYgKHJlcXVlc3Qub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgc2V0SW1hZ2VVUkxzKGRhdGEubWFwKChpbWFnZSkgPT4gaW1hZ2UuVVJMKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hJbWFnZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHYWxsZXJ5IiwiaW1hZ2VVUkxzIiwic2V0SW1hZ2VVUkxzIiwiZmV0Y2hJbWFnZXMiLCJyZXF1ZXN0IiwiZGF0YSIsImZldGNoIiwib2siLCJqc29uIiwibWFwIiwiaW1hZ2UiLCJVUkwiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n"));

/***/ })

});