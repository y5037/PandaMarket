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

/***/ "./components/boards/BestPost.tsx":
/*!****************************************!*\
  !*** ./components/boards/BestPost.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/boards/postList.module.css */ \"./styles/boards/postList.module.css\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_images_app_common_no_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/assets/images/app/common/no_img.jpg */ \"./public/assets/images/app/common/no_img.jpg\");\n/* harmony import */ var _public_assets_images_boards_ic_medal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/assets/images/boards/ic_medal.svg */ \"./public/assets/images/boards/ic_medal.svg\");\n/* harmony import */ var _public_assets_images_boards_ic_heart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/images/boards/ic_heart.svg */ \"./public/assets/images/boards/ic_heart.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BestPost(param) {\n    let { item } = param;\n    _s();\n    const [isImgError, setIsImgError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const { writer } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().bestBadge),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_boards_ic_medal_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    \"Best\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentsCover),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().thumbnailImg),\n                        children: (item === null || item === void 0 ? void 0 : item.image) === null || isImgError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: _public_assets_images_app_common_no_img_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            alt: \"게시글 이미지\",\n                            priority: true,\n                            onError: ()=>setIsImgError(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: item.image,\n                            alt: \"게시글 이미지\",\n                            priority: true,\n                            fill: true,\n                            onError: ()=>setIsImgError(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoCover),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().leftLine),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().nickName),\n                                children: writer.nickname\n                            }, void 0, false, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().wishCover),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_boards_ic_heart_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        width: 16,\n                                        height: 16\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().num),\n                                        children: [\n                                            item.likeCount,\n                                            \"+\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightLine),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),\n                            children: item.createdAt.slice(0, 10)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BestPost, \"Klc65t6Utu/CsZ1nofdWZbeEkz8=\");\n_c = BestPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BestPost);\nvar _c;\n$RefreshReg$(_c, \"BestPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkcy9CZXN0UG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDOEI7QUFDSTtBQUNLO0FBQ0E7QUFDckM7QUFHakMsU0FBU00sU0FBUyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQWtCLEdBQXhCOztJQUNoQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFDSyxNQUFNLEVBQUMsR0FBcUJIO0lBRW5DLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVdYLHFGQUFnQjs7a0NBQzlCLDhEQUFDRSxpRkFBWUE7Ozs7O29CQUFHOzs7Ozs7OzBCQUdsQiw4REFBQ1E7Z0JBQUlDLFdBQVdYLHlGQUFvQjs7a0NBQ2xDLDhEQUFDYzt3QkFBRUgsV0FBV1gsaUZBQVk7a0NBQUdNLEtBQUtTLEtBQUs7Ozs7OztrQ0FDdkMsOERBQUNMO3dCQUFJQyxXQUFXWCx3RkFBbUI7a0NBQ2hDTSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1XLEtBQUssTUFBSyxRQUFRViwyQkFDdkIsOERBQUNSLG1EQUFLQTs0QkFDSm1CLEtBQUtqQixtRkFBS0E7NEJBQ1ZrQixLQUFJOzRCQUNKQyxRQUFROzRCQUNSQyxTQUFTLElBQU1iLGNBQWM7Ozs7O2lEQUcvQiw4REFBQ1QsbURBQUtBOzRCQUNKbUIsS0FBS1osS0FBS1csS0FBSzs0QkFDZkUsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkUsSUFBSTs0QkFDSkQsU0FBUyxJQUFNYixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckMsOERBQUNFO2dCQUFJQyxXQUFXWCxxRkFBZ0I7O2tDQUM5Qiw4REFBQ1U7d0JBQUlDLFdBQVdYLG9GQUFlOzswQ0FDN0IsOERBQUNjO2dDQUFFSCxXQUFXWCxvRkFBZTswQ0FBR1MsT0FBT2lCLFFBQVE7Ozs7OzswQ0FDL0MsOERBQUNoQjtnQ0FBSUMsV0FBV1gscUZBQWdCOztrREFDOUIsOERBQUNHLGlGQUFZQTt3Q0FBQ3lCLE9BQU87d0NBQUlDLFFBQVE7Ozs7OztrREFDakMsOERBQUNmO3dDQUFFSCxXQUFXWCwrRUFBVTs7NENBQUdNLEtBQUt5QixTQUFTOzRDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc5Qyw4REFBQ3JCO3dCQUFJQyxXQUFXWCxxRkFBZ0I7a0NBQzlCLDRFQUFDYzs0QkFBRUgsV0FBV1gsZ0ZBQVc7c0NBQUdNLEtBQUs0QixTQUFTLENBQUNDLEtBQUssQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlEO0dBN0NTOUI7S0FBQUE7QUErQ1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZHMvQmVzdFBvc3QudHN4Pzg3MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYm9hcmRzL3Bvc3RMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBub0ltZyBmcm9tIFwiQC9wdWJsaWMvYXNzZXRzL2ltYWdlcy9hcHAvY29tbW9uL25vX2ltZy5qcGdcIjtcbmltcG9ydCBCZXN0QmFkZ2VJbWcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnZXMvYm9hcmRzL2ljX21lZGFsLnN2Z1wiO1xuaW1wb3J0IFdpc2hIZWFydEltZyBmcm9tIFwiQC9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ib2FyZHMvaWNfaGVhcnQuc3ZnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIEJlc3RQb3N0KHsgaXRlbSB9OiB7IGl0ZW06IEl0ZW0gfSkge1xuICBjb25zdCBbaXNJbWdFcnJvciwgc2V0SXNJbWdFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt3cml0ZXJ9OntuaWNrbmFtZTpzdHJpbmd9ID0gaXRlbTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJlc3RCYWRnZX0+XG4gICAgICAgIDxCZXN0QmFkZ2VJbWcgLz5cbiAgICAgICAgQmVzdFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRzQ292ZXJ9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRodW1ibmFpbEltZ30+XG4gICAgICAgICAge2l0ZW0/LmltYWdlID09PSBudWxsIHx8IGlzSW1nRXJyb3IgPyAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtub0ltZ31cbiAgICAgICAgICAgICAgYWx0PVwi6rKM7Iuc6riAIOydtOuvuOyngFwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgIG9uRXJyb3I9eygpID0+IHNldElzSW1nRXJyb3IodHJ1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9XCLqsozsi5zquIAg7J2066+47KeAXCJcbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICBvbkVycm9yPXsoKSA9PiBzZXRJc0ltZ0Vycm9yKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvQ292ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRMaW5lfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5uaWNrTmFtZX0+e3dyaXRlci5uaWNrbmFtZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aXNoQ292ZXJ9PlxuICAgICAgICAgICAgPFdpc2hIZWFydEltZyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5udW19PntpdGVtLmxpa2VDb3VudH0rPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodExpbmV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntpdGVtLmNyZWF0ZWRBdC5zbGljZSgwLCAxMCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCZXN0UG9zdDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIm5vSW1nIiwiQmVzdEJhZGdlSW1nIiwiV2lzaEhlYXJ0SW1nIiwidXNlU3RhdGUiLCJCZXN0UG9zdCIsIml0ZW0iLCJpc0ltZ0Vycm9yIiwic2V0SXNJbWdFcnJvciIsIndyaXRlciIsImRpdiIsImNsYXNzTmFtZSIsImJlc3RCYWRnZSIsImNvbnRlbnRzQ292ZXIiLCJwIiwidGl0bGUiLCJ0aHVtYm5haWxJbWciLCJpbWFnZSIsInNyYyIsImFsdCIsInByaW9yaXR5Iiwib25FcnJvciIsImZpbGwiLCJpbmZvQ292ZXIiLCJsZWZ0TGluZSIsIm5pY2tOYW1lIiwibmlja25hbWUiLCJ3aXNoQ292ZXIiLCJ3aWR0aCIsImhlaWdodCIsIm51bSIsImxpa2VDb3VudCIsInJpZ2h0TGluZSIsImRhdGUiLCJjcmVhdGVkQXQiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/boards/BestPost.tsx\n"));

/***/ })

});