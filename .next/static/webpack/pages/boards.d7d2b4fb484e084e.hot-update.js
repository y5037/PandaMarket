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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/boards/postList.module.css */ \"./styles/boards/postList.module.css\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_images_app_common_no_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/assets/images/app/common/no_img.jpg */ \"./public/assets/images/app/common/no_img.jpg\");\n/* harmony import */ var _public_assets_images_boards_ic_medal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/assets/images/boards/ic_medal.svg */ \"./public/assets/images/boards/ic_medal.svg\");\n/* harmony import */ var _public_assets_images_boards_ic_heart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/images/boards/ic_heart.svg */ \"./public/assets/images/boards/ic_heart.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BestPost(param) {\n    let { item } = param;\n    var _item_writer;\n    _s();\n    const [isImgError, setIsImgError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().bestBadge),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_boards_ic_medal_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    \"Best\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentsCover),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().thumbnailImg),\n                        children: (item === null || item === void 0 ? void 0 : item.image) === null || isImgError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: _public_assets_images_app_common_no_img_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            alt: \"게시글 이미지\",\n                            priority: true,\n                            onError: ()=>setIsImgError(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: item.image,\n                            alt: \"게시글 이미지\",\n                            priority: true,\n                            fill: true,\n                            onError: ()=>setIsImgError(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoCover),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().leftLine),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().nickName),\n                                children: (_item_writer = item.writer) === null || _item_writer === void 0 ? void 0 : _item_writer.nickname\n                            }, void 0, false, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().wishCover),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_boards_ic_heart_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        width: 16,\n                                        height: 16\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().num),\n                                        children: [\n                                            item.likeCount,\n                                            \"+\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightLine),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),\n                            children: item.createdAt.slice(0, 10)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/BestPost.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BestPost, \"Klc65t6Utu/CsZ1nofdWZbeEkz8=\");\n_c = BestPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BestPost);\nvar _c;\n$RefreshReg$(_c, \"BestPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkcy9CZXN0UG9zdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDOEI7QUFDSTtBQUNLO0FBQ0E7QUFDckM7QUFHakMsU0FBU00sU0FBUyxLQUFvQjtRQUFwQixFQUFFQyxJQUFJLEVBQWMsR0FBcEI7UUFnQ3dCQTs7SUEvQnhDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUFJQyxXQUFXVixxRkFBZ0I7O2tDQUM5Qiw4REFBQ0UsaUZBQVlBOzs7OztvQkFBRzs7Ozs7OzswQkFHbEIsOERBQUNPO2dCQUFJQyxXQUFXVix5RkFBb0I7O2tDQUNsQyw4REFBQ2E7d0JBQUVILFdBQVdWLGlGQUFZO2tDQUFHTSxLQUFLUSxLQUFLOzs7Ozs7a0NBQ3ZDLDhEQUFDTDt3QkFBSUMsV0FBV1Ysd0ZBQW1CO2tDQUNoQ00sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNVSxLQUFLLE1BQUssUUFBUVQsMkJBQ3ZCLDhEQUFDUixtREFBS0E7NEJBQ0prQixLQUFLaEIsbUZBQUtBOzRCQUNWaUIsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsU0FBUyxJQUFNWixjQUFjOzs7OztpREFHL0IsOERBQUNULG1EQUFLQTs0QkFDSmtCLEtBQUtYLEtBQUtVLEtBQUs7NEJBQ2ZFLEtBQUk7NEJBQ0pDLFFBQVE7NEJBQ1JFLElBQUk7NEJBQ0pELFNBQVMsSUFBTVosY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3JDLDhEQUFDQztnQkFBSUMsV0FBV1YscUZBQWdCOztrQ0FDOUIsOERBQUNTO3dCQUFJQyxXQUFXVixvRkFBZTs7MENBQzdCLDhEQUFDYTtnQ0FBRUgsV0FBV1Ysb0ZBQWU7MkNBQUdNLGVBQUFBLEtBQUttQixNQUFNLGNBQVhuQixtQ0FBQUEsYUFBYW9CLFFBQVE7Ozs7OzswQ0FDckQsOERBQUNqQjtnQ0FBSUMsV0FBV1YscUZBQWdCOztrREFDOUIsOERBQUNHLGlGQUFZQTt3Q0FBQ3lCLE9BQU87d0NBQUlDLFFBQVE7Ozs7OztrREFDakMsOERBQUNoQjt3Q0FBRUgsV0FBV1YsK0VBQVU7OzRDQUFHTSxLQUFLeUIsU0FBUzs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUMsOERBQUN0Qjt3QkFBSUMsV0FBV1YscUZBQWdCO2tDQUM5Qiw0RUFBQ2E7NEJBQUVILFdBQVdWLGdGQUFXO3NDQUFHTSxLQUFLNEIsU0FBUyxDQUFDQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtHQTVDUzlCO0tBQUFBO0FBOENULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmRzL0Jlc3RQb3N0LnRzeD84NzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2JvYXJkcy9wb3N0TGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbm9JbWcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnZXMvYXBwL2NvbW1vbi9ub19pbWcuanBnXCI7XG5pbXBvcnQgQmVzdEJhZGdlSW1nIGZyb20gXCJAL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2JvYXJkcy9pY19tZWRhbC5zdmdcIjtcbmltcG9ydCBXaXNoSGVhcnRJbWcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnZXMvYm9hcmRzL2ljX2hlYXJ0LnN2Z1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBCZXN0UG9zdCh7IGl0ZW0gfTp7aXRlbTpJdGVtfSkge1xuICBjb25zdCBbaXNJbWdFcnJvciwgc2V0SXNJbWdFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZXN0QmFkZ2V9PlxuICAgICAgICA8QmVzdEJhZGdlSW1nIC8+XG4gICAgICAgIEJlc3RcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50c0NvdmVyfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aHVtYm5haWxJbWd9PlxuICAgICAgICAgIHtpdGVtPy5pbWFnZSA9PT0gbnVsbCB8fCBpc0ltZ0Vycm9yID8gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17bm9JbWd9XG4gICAgICAgICAgICAgIGFsdD1cIuqyjOyLnOq4gCDsnbTrr7jsp4BcIlxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICBvbkVycm9yPXsoKSA9PiBzZXRJc0ltZ0Vycm9yKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwi6rKM7Iuc6riAIOydtOuvuOyngFwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgb25FcnJvcj17KCkgPT4gc2V0SXNJbWdFcnJvcih0cnVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0NvdmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0TGluZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmlja05hbWV9PntpdGVtLndyaXRlcj8ubmlja25hbWV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lzaENvdmVyfT5cbiAgICAgICAgICAgIDxXaXNoSGVhcnRJbWcgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubnVtfT57aXRlbS5saWtlQ291bnR9KzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRMaW5lfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57aXRlbS5jcmVhdGVkQXQuc2xpY2UoMCwgMTApfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVzdFBvc3Q7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJub0ltZyIsIkJlc3RCYWRnZUltZyIsIldpc2hIZWFydEltZyIsInVzZVN0YXRlIiwiQmVzdFBvc3QiLCJpdGVtIiwiaXNJbWdFcnJvciIsInNldElzSW1nRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJiZXN0QmFkZ2UiLCJjb250ZW50c0NvdmVyIiwicCIsInRpdGxlIiwidGh1bWJuYWlsSW1nIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJwcmlvcml0eSIsIm9uRXJyb3IiLCJmaWxsIiwiaW5mb0NvdmVyIiwibGVmdExpbmUiLCJuaWNrTmFtZSIsIndyaXRlciIsIm5pY2tuYW1lIiwid2lzaENvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJudW0iLCJsaWtlQ291bnQiLCJyaWdodExpbmUiLCJkYXRlIiwiY3JlYXRlZEF0Iiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/boards/BestPost.tsx\n"));

/***/ })

});