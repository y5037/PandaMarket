"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./components/boards/BestPostsList.tsx":
/*!*********************************************!*\
  !*** ./components/boards/BestPostsList.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/boards/postList.module.css */ \"./styles/boards/postList.module.css\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BestPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestPost */ \"./components/boards/BestPost.tsx\");\n\n\n\nfunction BestPostsList(param) {\n    let { likePost } = param;\n    const { list } = likePost || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default().postContents), \" \").concat((_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default().bestPost)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default().listTitle),\n                    children: \"베스트 게시글\"\n                }, void 0, false, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPostsList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default().postCover),\n                    children: list === null || list === void 0 ? void 0 : list.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BestPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                item: item\n                            }, void 0, false, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPostsList.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, this)\n                        }, item.id, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPostsList.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPostsList.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPostsList.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = BestPostsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BestPostsList);\nvar _c;\n$RefreshReg$(_c, \"BestPostsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkcy9CZXN0UG9zdHNMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZEO0FBQzNCO0FBWWxDLFNBQVNFLGNBQWMsS0FBMkI7UUFBM0IsRUFBRUMsUUFBUSxFQUFpQixHQUEzQjtJQUNyQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRCxZQUFZLENBQUM7SUFJOUIscUJBQ0U7a0JBQ0UsNEVBQUNFO1lBQUlDLFdBQVcsR0FBMEJOLE9BQXZCQSx3RkFBbUIsRUFBQyxLQUFtQixPQUFoQkEsb0ZBQWU7OzhCQUN2RCw4REFBQ1M7b0JBQUVILFdBQVdOLHFGQUFnQjs4QkFBRTs7Ozs7OzhCQUNoQyw4REFBQ1c7b0JBQUdMLFdBQVdOLHFGQUFnQjs4QkFDNUJJLGlCQUFBQSwyQkFBQUEsS0FBTVMsR0FBRyxDQUFDLENBQUNDO3dCQUNWLHFCQUNFLDhEQUFDQzs0QkFBaUJULFdBQVdOLGdGQUFXO3NDQUN0Qyw0RUFBQ0MsaURBQVFBO2dDQUFDYSxNQUFNQTs7Ozs7OzJCQURUQSxLQUFLRSxFQUFFOzs7OztvQkFJcEI7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQXJCU2Q7QUF1QlQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZHMvQmVzdFBvc3RzTGlzdC50c3g/YzdkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYm9hcmRzL3Bvc3RMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCZXN0UG9zdCBmcm9tIFwiLi9CZXN0UG9zdFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbnR5cGUgRGVzdHJ1Y3R1cmluZyA9IHtcbiAgbGlzdDogSXRlbVtdO1xuICB0b3RhbENvdW50OiBudW1iZXI7XG59O1xuXG50eXBlIEl0ZW1MaXN0UHJvcHMgPSB7XG4gIGxpa2VQb3N0OiBEZXN0cnVjdHVyaW5nO1xufTtcblxuZnVuY3Rpb24gQmVzdFBvc3RzTGlzdCh7IGxpa2VQb3N0IH06IEl0ZW1MaXN0UHJvcHMpIHtcbiAgY29uc3QgeyBsaXN0IH0gPSBsaWtlUG9zdCB8fCB7fTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnBvc3RDb250ZW50c30gJHtzdHlsZXMuYmVzdFBvc3R9YH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RUaXRsZX0+67Kg7Iqk7Yq4IOqyjOyLnOq4gDwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDb3Zlcn0+XG4gICAgICAgICAge2xpc3Q/Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICAgICAgPEJlc3RQb3N0IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJlc3RQb3N0c0xpc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQmVzdFBvc3QiLCJCZXN0UG9zdHNMaXN0IiwibGlrZVBvc3QiLCJsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicG9zdENvbnRlbnRzIiwiYmVzdFBvc3QiLCJwIiwibGlzdFRpdGxlIiwidWwiLCJwb3N0Q292ZXIiLCJtYXAiLCJpdGVtIiwibGkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/boards/BestPostsList.tsx\n"));

/***/ })

});