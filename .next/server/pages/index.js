"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Gallery.tsx":
/*!********************************!*\
  !*** ./components/Gallery.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./components/Image.tsx\");\n\n\n\nconst Gallery = ({})=>{\n    const { 0: imageURLs , 1: setImageURLs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchImages = async ()=>{\n            const request = await fetch(\"https://api.github.com/repos/eesazahed/album/contents/public/assets/images/uploads\");\n            if (request.ok) {\n                const data = await request.json();\n                if (data) {\n                    const URLs = data.map((image)=>image.download_url);\n                    setImageURLs(URLs);\n                }\n            }\n            setLoading(false);\n        };\n        fetchImages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-16\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined) : imageURLs && imageURLs.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap m-[-1rem]\",\n            children: imageURLs.map((imageURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        imageURL: imageURL\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined)\n                }, imageURL, false, {\n                    fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No images could be loaded.\"\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gallery.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQzRDO0FBQ2hCO0FBTTVCLE1BQU1HLE9BQU8sR0FBYSxDQUFDLEVBQUUsR0FBSztJQUNoQyxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsWUFBWSxNQUFJSiwrQ0FBUSxFQUFZO0lBQ3RELE1BQU0sS0FBQ0ssT0FBTyxNQUFFQyxVQUFVLE1BQUlOLCtDQUFRLENBQVUsSUFBSSxDQUFDO0lBRXJERCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNUSxXQUFXLEdBQUcsVUFBWTtZQUM5QixNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUN6QixvRkFBb0YsQ0FDckY7WUFFRCxJQUFJRCxPQUFPLENBQUNFLEVBQUUsRUFBRTtnQkFDZCxNQUFNQyxJQUFJLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxJQUFJLEVBQUU7Z0JBRWpDLElBQUlELElBQUksRUFBRTtvQkFDUixNQUFNRSxJQUFJLEdBQUdGLElBQUksQ0FBQ0csR0FBRyxDQUFDLENBQUNDLEtBQWdCLEdBQUtBLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO29CQUMvRFosWUFBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUM7WUFFRFAsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFREMsV0FBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ25CYixPQUFPLGlCQUNOLDhEQUFDYyxHQUFDO3NCQUFDLFlBQVU7Ozs7O3FCQUFJLEdBQ2ZoQixTQUFTLElBQUlBLFNBQVMsQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDLGlCQUNuQyw4REFBQ0gsS0FBRztZQUFDQyxTQUFTLEVBQUMsMEJBQTBCO3NCQUN0Q2YsU0FBUyxDQUFDVyxHQUFHLENBQUMsQ0FBQ08sUUFBUSxpQkFDdEIsOERBQUNKLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOzhCQUNsQiw0RUFBQ2pCLDhDQUFLO3dCQUFDb0IsUUFBUSxFQUFFQSxRQUFROzs7OztpQ0FBSTttQkFETEEsUUFBUTs7Ozs2QkFFNUIsQ0FDTjs7Ozs7cUJBQ0UsaUJBRU4sOERBQUNGLEdBQUM7c0JBQUMsNEJBQTBCOzs7OztxQkFBSTs7Ozs7aUJBRS9CLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVqQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGJ1bS8uL2NvbXBvbmVudHMvR2FsbGVyeS50c3g/MGZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcblxuaW50ZXJmYWNlIEltYWdlVHlwZSB7XG4gIGRvd25sb2FkX3VybDogc3RyaW5nO1xufVxuXG5jb25zdCBHYWxsZXJ5OiBOZXh0UGFnZSA9ICh7fSkgPT4ge1xuICBjb25zdCBbaW1hZ2VVUkxzLCBzZXRJbWFnZVVSTHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9lZXNhemFoZWQvYWxidW0vY29udGVudHMvcHVibGljL2Fzc2V0cy9pbWFnZXMvdXBsb2Fkc1wiXG4gICAgICApO1xuXG4gICAgICBpZiAocmVxdWVzdC5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBjb25zdCBVUkxzID0gZGF0YS5tYXAoKGltYWdlOiBJbWFnZVR5cGUpID0+IGltYWdlLmRvd25sb2FkX3VybCk7XG4gICAgICAgICAgc2V0SW1hZ2VVUkxzKFVSTHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBmZXRjaEltYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2XCI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICkgOiBpbWFnZVVSTHMgJiYgaW1hZ2VVUkxzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbS1bLTFyZW1dXCI+XG4gICAgICAgICAge2ltYWdlVVJMcy5tYXAoKGltYWdlVVJMKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiIGtleT17aW1hZ2VVUkx9PlxuICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2VVUkw9e2ltYWdlVVJMfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gaW1hZ2VzIGNvdWxkIGJlIGxvYWRlZC48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiR2FsbGVyeSIsImltYWdlVVJMcyIsInNldEltYWdlVVJMcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hJbWFnZXMiLCJyZXF1ZXN0IiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiVVJMcyIsIm1hcCIsImltYWdlIiwiZG93bmxvYWRfdXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxlbmd0aCIsImltYWdlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Gallery.tsx\n");

/***/ }),

/***/ "./components/Gradient.tsx":
/*!*********************************!*\
  !*** ./components/Gradient.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Gradient = ({ text  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"bg-gradient-to-r from-[#00cc66] to-[#00ffd9] bg-clip-text text-transparent\",\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Gradient.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gradient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyYWRpZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQU1BLE1BQU1BLFFBQVEsR0FBb0IsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsR0FBSztJQUM5QyxxQkFDRSw4REFBQ0MsTUFBSTtRQUFDQyxTQUFTLEVBQUMsNEVBQTRFO2tCQUN6RkYsSUFBSTs7Ozs7aUJBQ0EsQ0FDUDtBQUNKLENBQUM7QUFFRCxpRUFBZUQsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxidW0vLi9jb21wb25lbnRzL0dyYWRpZW50LnRzeD80YjUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBHcmFkaWVudDogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgdGV4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMDBjYzY2XSB0by1bIzAwZmZkOV0gYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgIHt0ZXh0fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYWRpZW50O1xuIl0sIm5hbWVzIjpbIkdyYWRpZW50IiwidGV4dCIsInNwYW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gradient.tsx\n");

/***/ }),

/***/ "./components/Image.tsx":
/*!******************************!*\
  !*** ./components/Image.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Image = ({ imageURL  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"duration-200 hover:drop-shadow-[0_0_10px_#00ffd9cc]\",\n        rel: \"noreferrer\",\n        target: \"_blank\",\n        href: imageURL,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: imageURL,\n            className: \"max-h-96 rounded-3xl\"\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Image.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Image.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQU1BLE1BQU1BLEtBQUssR0FBb0IsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUMvQyxxQkFDRSw4REFBQ0MsR0FBQztRQUNBQyxTQUFTLEVBQUMscURBQXFEO1FBQy9EQyxHQUFHLEVBQUMsWUFBWTtRQUNoQkMsTUFBTSxFQUFDLFFBQVE7UUFDZkMsSUFBSSxFQUFFTCxRQUFRO2tCQUVkLDRFQUFDTSxLQUFHO1lBQUNDLEdBQUcsRUFBRVAsUUFBUTtZQUFFRSxTQUFTLEVBQUMsc0JBQXNCOzs7OztxQkFBRzs7Ozs7aUJBQ3JELENBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWVILEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsYnVtLy4vY29tcG9uZW50cy9JbWFnZS50c3g/ODJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGltYWdlVVJMOiBzdHJpbmc7XG59XG5cbmNvbnN0IEltYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBpbWFnZVVSTCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cImR1cmF0aW9uLTIwMCBob3Zlcjpkcm9wLXNoYWRvdy1bMF8wXzEwcHhfIzAwZmZkOWNjXVwiXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICBocmVmPXtpbWFnZVVSTH1cbiAgICA+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VVUkx9IGNsYXNzTmFtZT1cIm1heC1oLTk2IHJvdW5kZWQtM3hsXCIgLz5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlVVJMIiwiYSIsImNsYXNzTmFtZSIsInJlbCIsInRhcmdldCIsImhyZWYiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Image.tsx\n");

/***/ }),

/***/ "./components/Link.tsx":
/*!*****************************!*\
  !*** ./components/Link.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Link = ({ text , href  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        rel: \"noreferrer\",\n        target: \"_blank\",\n        href: href,\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Link.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmsudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBT0EsTUFBTUEsSUFBSSxHQUFvQixDQUFDLEVBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFLEdBQUs7SUFDaEQscUJBQ0UsOERBQUNDLEdBQUM7UUFBQ0MsR0FBRyxFQUFDLFlBQVk7UUFBQ0MsTUFBTSxFQUFDLFFBQVE7UUFBQ0gsSUFBSSxFQUFFQSxJQUFJO2tCQUMzQ0QsSUFBSTs7Ozs7aUJBQ0gsQ0FDSjtBQUNKLENBQUM7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxidW0vLi9jb21wb25lbnRzL0xpbmsudHN4PzcyY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgTGluazogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgdGV4dCwgaHJlZiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9PlxuICAgICAge3RleHR9XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdLCJuYW1lcyI6WyJMaW5rIiwidGV4dCIsImhyZWYiLCJhIiwicmVsIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Link.tsx\n");

/***/ }),

/***/ "./components/PageHead.tsx":
/*!*********************************!*\
  !*** ./components/PageHead.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PageHead = ({ title  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: [\n                    \"Photo Album | \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/components/PageHead.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"Photo Album. Made by Eesa Zahed\"\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/components/PageHead.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"/assets/images/favicon.ico\"\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/components/PageHead.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/PageHead.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VIZWFkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQzZCO0FBTTdCLE1BQU1DLFFBQVEsR0FBb0IsQ0FBQyxFQUFFQyxLQUFLLEdBQUUsR0FBSztJQUMvQyxxQkFDRSw4REFBQ0Ysa0RBQUk7OzBCQUNILDhEQUFDRSxPQUFLOztvQkFBQyxnQkFBYztvQkFBQ0EsS0FBSzs7Ozs7O3lCQUFTOzBCQUNwQyw4REFBQ0MsTUFBSTtnQkFBQ0MsSUFBSSxFQUFDLGFBQWE7Z0JBQUNDLE9BQU8sRUFBQyxpQ0FBaUM7Ozs7O3lCQUFHOzBCQUNyRSw4REFBQ0MsTUFBSTtnQkFBQ0MsR0FBRyxFQUFDLE1BQU07Z0JBQUNDLElBQUksRUFBQyw0QkFBNEI7Ozs7O3lCQUFHOzs7Ozs7aUJBQ2hELENBQ1A7QUFDSixDQUFDO0FBRUQsaUVBQWVQLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsYnVtLy4vY29tcG9uZW50cy9QYWdlSGVhZC50c3g/YWFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBhZ2VIZWFkOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UGhvdG8gQWxidW0gfCB7dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQaG90byBBbGJ1bS4gTWFkZSBieSBFZXNhIFphaGVkXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQYWdlSGVhZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageHead.tsx\n");

/***/ }),

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gradient */ \"./components/Gradient.tsx\");\n\n\nconst Title = ({ text  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"my-8 text-6xl md:text-8xl font-bold\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Gradient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            text: text\n        }, void 0, false, {\n            fileName: \"/Users/kids/Desktop/dev/photo-album/components/Title.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/components/Title.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpdGxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDa0M7QUFNbEMsTUFBTUMsS0FBSyxHQUFvQixDQUFDLEVBQUVDLElBQUksR0FBRSxHQUFLO0lBQzNDLHFCQUNFLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7a0JBQ2pELDRFQUFDSixpREFBUTtZQUFDRSxJQUFJLEVBQUVBLElBQUk7Ozs7O3FCQUFJOzs7OztpQkFDckIsQ0FDTDtBQUNKLENBQUM7QUFFRCxpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxidW0vLi9jb21wb25lbnRzL1RpdGxlLnRzeD84ZTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBHcmFkaWVudCBmcm9tIFwiLi9HcmFkaWVudFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IFRpdGxlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB0ZXh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPVwibXktOCB0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBmb250LWJvbGRcIj5cbiAgICAgIDxHcmFkaWVudCB0ZXh0PXt0ZXh0fSAvPlxuICAgIDwvaDE+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJuYW1lcyI6WyJHcmFkaWVudCIsIlRpdGxlIiwidGV4dCIsImgxIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Title.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Link */ \"./components/Link.tsx\");\n/* harmony import */ var _components_PageHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHead */ \"./components/PageHead.tsx\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.tsx\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Gallery */ \"./components/Gallery.tsx\");\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHead__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-16 leading-8 text-xl min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"My Photos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-16 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Designed and developed by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Eesa Zahed\",\n                            href: \"https://eesa.zahed.ca\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kids/Desktop/dev/photo-album/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ3NDO0FBQ1E7QUFDTjtBQUNJO0FBRTVDLE1BQU1JLElBQUksR0FBYSxJQUFNO0lBQzNCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDbkIsOERBQUNMLDREQUFRO2dCQUFDTSxLQUFLLEVBQUMsTUFBTTs7Ozs7eUJBQUc7MEJBRXpCLDhEQUFDQyxNQUFJO2dCQUFDRixTQUFTLEVBQUMscUNBQXFDOztrQ0FDbkQsOERBQUNKLHlEQUFLO3dCQUFDTyxJQUFJLEVBQUMsV0FBVzs7Ozs7aUNBQUc7a0NBRTFCLDhEQUFDTiwyREFBTzs7OztpQ0FBRzs7Ozs7O3lCQUNOOzBCQUVQLDhEQUFDTyxRQUFNO2dCQUFDSixTQUFTLEVBQUMsbUJBQW1COzBCQUNuQyw0RUFBQ0ssR0FBQzs7d0JBQUMsMkJBQ3dCO3dCQUFDLEdBQUc7c0NBQzdCLDhEQUFDWCx3REFBSTs0QkFBQ1MsSUFBSSxFQUFDLFlBQVk7NEJBQUNHLElBQUksRUFBQyx1QkFBdUI7Ozs7O3FDQUFHOzs7Ozs7NkJBQ3JEOzs7Ozt5QkFDRzs7Ozs7O2lCQUNMLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVSLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsYnVtLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgUGFnZUhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhlYWRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FsbGVyeVwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LThcIj5cbiAgICAgIDxQYWdlSGVhZCB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwLTE2IGxlYWRpbmctOCB0ZXh0LXhsIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8VGl0bGUgdGV4dD1cIk15IFBob3Rvc1wiIC8+XG5cbiAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweS0xNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxMaW5rIHRleHQ9XCJFZXNhIFphaGVkXCIgaHJlZj1cImh0dHBzOi8vZWVzYS56YWhlZC5jYVwiIC8+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUGFnZUhlYWQiLCJUaXRsZSIsIkdhbGxlcnkiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtYWluIiwidGV4dCIsImZvb3RlciIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();