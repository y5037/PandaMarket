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

/***/ "./components/boards/AllPostsList.tsx":
/*!********************************************!*\
  !*** ./components/boards/AllPostsList.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/boards/postList.module.css */ \"./styles/boards/postList.module.css\");\n/* harmony import */ var _styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_images_boards_ic_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/assets/images/boards/ic_search.png */ \"./public/assets/images/boards/ic_search.png\");\n/* harmony import */ var _public_assets_images_boards_select_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/images/boards/select_down.svg */ \"./public/assets/images/boards/select_down.svg\");\n/* harmony import */ var _AllPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllPost */ \"./components/boards/AllPost.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction AllPostsList(param) {\n    let { recentPost: ItemListProps, setKeyword, setOrder } = param;\n    _s();\n    const [isFilter, setIsFilter] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"최신순\");\n    const [isSelectbox, setIsSelecBox] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const outRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);\n    const { list } = recentPost || {};\n    const handleSelectDropDown = ()=>{\n        isSelectbox ? setIsSelecBox(false) : setIsSelecBox(true);\n    };\n    const handleOrderChange = (order)=>{\n        setOrder(order);\n    };\n    const handleValueChange = (e)=>{\n        setKeyword(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const handleClickOutside = (e)=>{\n            // 해당 이벤트가 영역 밖이라면 케밥 버튼 비활성화\n            if (outRef.current && !outRef.current.contains(e.target)) {\n                setIsSelecBox(false);\n            }\n        };\n        document.addEventListener(\"click\", handleClickOutside, true);\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside, true);\n        };\n    }, [\n        handleSelectDropDown\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().postContents), \" \").concat((_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().allPost)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().headContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().titleCover),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().listTitle),\n                                    children: \"게시글\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        children: \"글쓰기\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().formCover),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().searchCover),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputBox),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _public_assets_images_boards_ic_search_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                    alt: \"검색하기\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    name: \"search\",\n                                                    onChange: handleValueChange,\n                                                    placeholder: \"검색어를 입력해주세요\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().selectBox),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleSelectDropDown,\n                                                ref: outRef,\n                                                className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().option),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n                                                        children: isFilter\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_images_boards_select_down_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        className: isSelectbox ? (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().on) : \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"\".concat((_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().optionChoose), \" \").concat(isSelectbox ? (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().active) : \"\"),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>{\n                                                            handleOrderChange(\"recent\");\n                                                            setIsFilter(\"최신순\");\n                                                        },\n                                                        children: \"최신순\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>{\n                                                            handleOrderChange(\"like\");\n                                                            setIsFilter(\"좋아요순\");\n                                                        },\n                                                        children: \"좋아요순\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().postCover),\n                    children: list && list.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_boards_postList_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                item: item\n                            }, void 0, false, {\n                                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 19\n                            }, this)\n                        }, item.id, false, {\n                            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/components/boards/AllPostsList.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(AllPostsList, \"2bNYv4WvyVaYhahj7gk6mevDVo0=\");\n_c = AllPostsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllPostsList);\nvar _c;\n$RefreshReg$(_c, \"AllPostsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkcy9BbGxQb3N0c0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUM4QjtBQUNPO0FBQ087QUFDM0M7QUFDOEM7QUFZOUUsU0FBU1MsYUFBYSxLQVFyQjtRQVJxQixFQUNwQkMsWUFBWUMsYUFBYSxFQUN6QkMsVUFBVSxFQUNWQyxRQUFRLEVBS1QsR0FScUI7O0lBU3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLGFBQWFDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDOUMsTUFBTVUsU0FBU1gsNkNBQU1BLENBQXdCO0lBQzdDLE1BQU0sRUFBRVksSUFBSSxFQUFFLEdBQUdULGNBQWMsQ0FBQztJQUVoQyxNQUFNVSx1QkFBdUI7UUFDM0JKLGNBQWNDLGNBQWMsU0FBU0EsY0FBYztJQUNyRDtJQUVBLE1BQU1JLG9CQUFvQixDQUFDQztRQUN6QlQsU0FBU1M7SUFDWDtJQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QlosV0FBV1ksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzNCO0lBRUFwQixnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixxQkFBcUIsQ0FBQ0g7WUFDMUIsNkJBQTZCO1lBQzdCLElBQUlOLE9BQU9VLE9BQU8sSUFBSSxDQUFDVixPQUFPVSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0wsRUFBRUMsTUFBTSxHQUFHO2dCQUN4RFIsY0FBYztZQUNoQjtRQUNGO1FBRUFhLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNKLG9CQUFvQjtRQUN2RCxPQUFPO1lBQ0xHLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNMLG9CQUFvQjtRQUM1RDtJQUNGLEdBQUc7UUFBQ1A7S0FBcUI7SUFFekIscUJBQ0U7a0JBQ0UsNEVBQUNhO1lBQUlDLFdBQVcsR0FBMEJoQyxPQUF2QkEsd0ZBQW1CLEVBQUMsS0FBa0IsT0FBZkEsbUZBQWM7OzhCQUN0RCw4REFBQytCO29CQUFJQyxXQUFXaEMseUZBQW9COztzQ0FDbEMsOERBQUMrQjs0QkFBSUMsV0FBV2hDLHNGQUFpQjs7OENBQy9CLDhEQUFDcUM7b0NBQUVMLFdBQVdoQyxxRkFBZ0I7OENBQUU7Ozs7Ozs4Q0FDaEMsOERBQUNGLGtEQUFJQTtvQ0FBQ3lDLE1BQU07OENBQ1YsNEVBQUNDO3dDQUFPQyxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNDO3NDQUNDLDRFQUFDWDtnQ0FBSUMsV0FBV2hDLHFGQUFnQjs7a0RBQzlCLDhEQUFDK0I7d0NBQUlDLFdBQVdoQyx1RkFBa0I7a0RBQ2hDLDRFQUFDK0I7NENBQUlDLFdBQVdoQyxvRkFBZTs7OERBQzdCLDhEQUFDRCxtREFBS0E7b0RBQUMrQyxLQUFLN0Msa0ZBQVNBO29EQUFFOEMsS0FBSTs7Ozs7OzhEQUMzQiw4REFBQ0M7b0RBQ0NDLE1BQUs7b0RBQ0xDLFVBQVU3QjtvREFDVjhCLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUlsQiw4REFBQ3BCO3dDQUFJQyxXQUFXaEMscUZBQWdCOzswREFDOUIsOERBQUMrQjtnREFDQ3NCLFNBQVNuQztnREFDVG9DLEtBQUt0QztnREFDTGdCLFdBQVdoQyxrRkFBYTs7a0VBRXhCLDhEQUFDcUM7d0RBQUVMLFdBQVdoQyxnRkFBVztrRUFBR1k7Ozs7OztrRUFDNUIsOERBQUNWLG9GQUFjQTt3REFBQzhCLFdBQVdsQixjQUFjZCw4RUFBUyxHQUFHOzs7Ozs7Ozs7Ozs7MERBRXZELDhEQUFDMEQ7Z0RBQ0MxQixXQUFXLEdBQ1RsQixPQURZZCx3RkFBbUIsRUFBQyxLQUVqQyxPQURDYyxjQUFjZCxrRkFBYSxHQUFHOztrRUFHaEMsOERBQUM2RDt3REFDQ1IsU0FBUzs0REFDUGxDLGtCQUFrQjs0REFDbEJOLFlBQVk7d0RBQ2Q7a0VBQ0Q7Ozs7OztrRUFHRCw4REFBQ2dEO3dEQUNDUixTQUFTOzREQUNQbEMsa0JBQWtCOzREQUNsQk4sWUFBWTt3REFDZDtrRUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUVgsOERBQUM2QztvQkFBRzFCLFdBQVdoQyxxRkFBZ0I7OEJBQzVCaUIsUUFDQ0EsS0FBSzhDLEdBQUcsQ0FBQyxDQUFDQzt3QkFDUixxQkFDRSw4REFBQ0g7NEJBQWlCN0IsV0FBV2hDLGdGQUFXO3NDQUN0Qyw0RUFBQ0csZ0RBQU9BO2dDQUFDNkQsTUFBTUE7Ozs7OzsyQkFEUkEsS0FBS0MsRUFBRTs7Ozs7b0JBSXBCOzs7Ozs7Ozs7Ozs7O0FBS1o7R0E5R1MxRDtLQUFBQTtBQWdIVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkcy9BbGxQb3N0c0xpc3QudHN4P2ZmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYm9hcmRzL3Bvc3RMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzZWFyY2hJbWcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9pbWFnZXMvYm9hcmRzL2ljX3NlYXJjaC5wbmdcIjtcbmltcG9ydCBTZWxlY3RBcnJvd0ltZyBmcm9tIFwiQC9wdWJsaWMvYXNzZXRzL2ltYWdlcy9ib2FyZHMvc2VsZWN0X2Rvd24uc3ZnXCI7XG5pbXBvcnQgQWxsUG9zdCBmcm9tIFwiLi9BbGxQb3N0XCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbnR5cGUgRGVzdHJ1Y3R1cmluZyA9IHtcbiAgbGlzdDogSXRlbVtdO1xuICB0b3RhbENvdW50OiBudW1iZXI7XG59O1xuXG50eXBlIEl0ZW1MaXN0UHJvcHMgPSB7XG4gIHJlY2VudFBvc3Q6IERlc3RydWN0dXJpbmc7XG59O1xuXG5mdW5jdGlvbiBBbGxQb3N0c0xpc3Qoe1xuICByZWNlbnRQb3N0OiBJdGVtTGlzdFByb3BzLFxuICBzZXRLZXl3b3JkLFxuICBzZXRPcmRlcixcbn06IHtcbiAgcmVjZW50UG9zdDtcbiAgc2V0S2V5d29yZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIHNldE9yZGVyOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+Pjtcbn0pIHtcbiAgY29uc3QgW2lzRmlsdGVyLCBzZXRJc0ZpbHRlcl0gPSB1c2VTdGF0ZShcIuy1nOyLoOyInFwiKTtcbiAgY29uc3QgW2lzU2VsZWN0Ym94LCBzZXRJc1NlbGVjQm94XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3V0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgbGlzdCB9ID0gcmVjZW50UG9zdCB8fCB7fTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3REcm9wRG93biA9ICgpID0+IHtcbiAgICBpc1NlbGVjdGJveCA/IHNldElzU2VsZWNCb3goZmFsc2UpIDogc2V0SXNTZWxlY0JveCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcmRlckNoYW5nZSA9IChvcmRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0T3JkZXIob3JkZXIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZhbHVlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlOiB7IHRhcmdldDogYW55IH0pID0+IHtcbiAgICAgIC8vIO2VtOuLuSDsnbTrsqTtirjqsIAg7JiB7JetIOuwluydtOudvOuptCDsvIDrsKUg67KE7Yq8IOu5hO2ZnOyEse2ZlFxuICAgICAgaWYgKG91dFJlZi5jdXJyZW50ICYmICFvdXRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgc2V0SXNTZWxlY0JveChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlU2VsZWN0RHJvcERvd25dKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnBvc3RDb250ZW50c30gJHtzdHlsZXMuYWxsUG9zdH1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ292ZXJ9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGlzdFRpdGxlfT7qsozsi5zquIA8L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+6riA7JOw6riwPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db3Zlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ292ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRCb3h9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VhcmNoSW1nfSBhbHQ9XCLqsoDsg4ntlZjquLBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6rKA7IOJ7Ja066W8IOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RCb3h9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdERyb3BEb3dufVxuICAgICAgICAgICAgICAgICAgcmVmPXtvdXRSZWZ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2lzRmlsdGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RBcnJvd0ltZyBjbGFzc05hbWU9e2lzU2VsZWN0Ym94ID8gc3R5bGVzLm9uIDogXCJcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm9wdGlvbkNob29zZX0gJHtcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3Rib3ggPyBzdHlsZXMuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcmRlckNoYW5nZShcInJlY2VudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJc0ZpbHRlcihcIuy1nOyLoOyInFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg7LWc7Iug7IicXG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPcmRlckNoYW5nZShcImxpa2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXNGaWx0ZXIoXCLsoovslYTsmpTsiJxcIik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIOyii+yVhOyalOyInFxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q292ZXJ9PlxuICAgICAgICAgIHtsaXN0ICYmXG4gICAgICAgICAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgICAgICAgPEFsbFBvc3QgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxsUG9zdHNMaXN0O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInN0eWxlcyIsInNlYXJjaEltZyIsIlNlbGVjdEFycm93SW1nIiwiQWxsUG9zdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQWxsUG9zdHNMaXN0IiwicmVjZW50UG9zdCIsIkl0ZW1MaXN0UHJvcHMiLCJzZXRLZXl3b3JkIiwic2V0T3JkZXIiLCJpc0ZpbHRlciIsInNldElzRmlsdGVyIiwiaXNTZWxlY3Rib3giLCJzZXRJc1NlbGVjQm94Iiwib3V0UmVmIiwibGlzdCIsImhhbmRsZVNlbGVjdERyb3BEb3duIiwiaGFuZGxlT3JkZXJDaGFuZ2UiLCJvcmRlciIsImhhbmRsZVZhbHVlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInBvc3RDb250ZW50cyIsImFsbFBvc3QiLCJoZWFkQ29udGFpbmVyIiwidGl0bGVDb3ZlciIsInAiLCJsaXN0VGl0bGUiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsImZvcm0iLCJmb3JtQ292ZXIiLCJzZWFyY2hDb3ZlciIsImlucHV0Qm94Iiwic3JjIiwiYWx0IiwiaW5wdXQiLCJuYW1lIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlbGVjdEJveCIsIm9uQ2xpY2siLCJyZWYiLCJvcHRpb24iLCJ0ZXh0Iiwib24iLCJ1bCIsIm9wdGlvbkNob29zZSIsImFjdGl2ZSIsImxpIiwicG9zdENvdmVyIiwibWFwIiwiaXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/boards/AllPostsList.tsx\n"));

/***/ })

});