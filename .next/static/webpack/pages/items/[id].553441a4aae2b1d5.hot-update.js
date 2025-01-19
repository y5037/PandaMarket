"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items/[id]",{

/***/ "./pages/items/[id].tsx":
/*!******************************!*\
  !*** ./pages/items/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_items_id_ProductDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/items/id/ProductDetail */ \"./components/items/id/ProductDetail.tsx\");\n/* harmony import */ var _components_app_ItemListNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/app/ItemListNav */ \"./components/app/ItemListNav.tsx\");\n/* harmony import */ var _components_items_id_CommentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/items/id/CommentContainer */ \"./components/items/id/CommentContainer.tsx\");\n/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/api/api */ \"./pages/api/api.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProductDetailPage() {\n    _s();\n    const [productData, setProductData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [commentsData, setCommentsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const productId = router.query.id;\n    // router.isReady 사용 이유: Next.js는 렌더링된 후 쿼리 객체를 채우기 때문에 라우터 필드가 클라리언트 측에서 업데이트 되고 사용할 준비가 되었는지 여부를 먼저 확인해야 한다.\n    // API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        (0,_pages_api_api__WEBPACK_IMPORTED_MODULE_6__.getProductId)(productId, setProductData, setLoading);\n        (0,_pages_api_api__WEBPACK_IMPORTED_MODULE_6__.getComments)(productId, setCommentsData);\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        productData === null || productData === void 0 ? void 0 : productData.name,\n                        \" - 판다마켓\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/items/[id].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/items/[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_app_ItemListNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/items/[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_items_id_ProductDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                productData: productData,\n                loading: loading\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/items/[id].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_items_id_CommentContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                commentsData: commentsData,\n                loading: loading\n            }, void 0, false, {\n                fileName: \"/Users/nerimy/Desktop/sprint_mission/Mission/Typescript-Next/12-Sprint-Mission/pages/items/[id].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductDetailPage, \"90fJ4imv4P/UfXUGDnR19H5u+EI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);\nvar _c;\n$RefreshReg$(_c, \"ProductDetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pdGVtcy9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUM0QjtBQUNUO0FBQ2U7QUFDZDtBQUUvQjtBQUU3QixTQUFTUzs7SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBO0lBQzlDLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsU0FBU2Qsc0RBQVNBO0lBQ3hCLE1BQU1lLFlBQVlELE9BQU9FLEtBQUssQ0FBQ0MsRUFBRTtJQUVqQyw4R0FBOEc7SUFDOUcsTUFBTTtJQUNObkIsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNnQixPQUFPSSxPQUFPLEVBQUU7UUFDckJiLDREQUFZQSxDQUFDVSxXQUFXTixnQkFBZ0JJO1FBQ3hDVCwyREFBV0EsQ0FBQ1csV0FBV0o7SUFDekIsR0FBRztRQUFDRyxPQUFPSSxPQUFPO0tBQUM7SUFFbkIscUJBQ0U7OzBCQUNFLDhEQUFDWixrREFBSUE7MEJBQ0gsNEVBQUNhOzt3QkFBT1gsd0JBQUFBLGtDQUFBQSxZQUFhWSxJQUFJO3dCQUFDOzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDbEIsbUVBQVdBOzs7OzswQkFDWiw4REFBQ0QsMEVBQWFBO2dCQUFDTyxhQUFhQTtnQkFBYUksU0FBU0E7Ozs7OzswQkFDbEQsOERBQUNULDZFQUFnQkE7Z0JBQUNPLGNBQWNBO2dCQUFjRSxTQUFTQTs7Ozs7Ozs7QUFHN0Q7R0ExQlNMOztRQUtRUCxrREFBU0E7OztLQUxqQk87QUE0QlQsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pdGVtcy9baWRdLnRzeD84MzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaXRlbXMvaWQvUHJvZHVjdERldGFpbFwiO1xuaW1wb3J0IEl0ZW1MaXN0TmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwcC9JdGVtTGlzdE5hdlwiO1xuaW1wb3J0IENvbW1lbnRDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaXRlbXMvaWQvQ29tbWVudENvbnRhaW5lclwiO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHMsIGdldFByb2R1Y3RJZCB9IGZyb20gXCJAL3BhZ2VzL2FwaS9hcGlcIjtcbmltcG9ydCB7IFRDb21tZW50RGF0YVByb3BzLCBUUHJvZHVjdERhdGFQcm9wcyB9IGZyb20gXCJAL3BhZ2VzL2l0ZW1zL3R5cGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxQYWdlKCkge1xuICBjb25zdCBbcHJvZHVjdERhdGEsIHNldFByb2R1Y3REYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb21tZW50c0RhdGEsIHNldENvbW1lbnRzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcHJvZHVjdElkID0gcm91dGVyLnF1ZXJ5LmlkITtcblxuICAvLyByb3V0ZXIuaXNSZWFkeSDsgqzsmqkg7J207JygOiBOZXh0Lmpz64qUIOugjOuNlOungeuQnCDtm4Qg7L+866asIOqwneyytOulvCDssYTsmrDquLAg65WM66y47JeQIOudvOyasO2EsCDtlYTrk5zqsIAg7YG0652866as7Ja47Yq4IOy4oeyXkOyEnCDsl4XrjbDsnbTtirgg65CY6rOgIOyCrOyaqe2VoCDspIDruYTqsIAg65CY7JeI64qU7KeAIOyXrOu2gOulvCDrqLzsoIAg7ZmV7J247ZW07JW8IO2VnOuLpC5cbiAgLy8gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xuICAgIGdldFByb2R1Y3RJZChwcm9kdWN0SWQsIHNldFByb2R1Y3REYXRhLCBzZXRMb2FkaW5nKTtcbiAgICBnZXRDb21tZW50cyhwcm9kdWN0SWQsIHNldENvbW1lbnRzRGF0YSk7XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb2R1Y3REYXRhPy5uYW1lfSAtIO2MkOuLpOuniOy8kzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SXRlbUxpc3ROYXYgLz5cbiAgICAgIDxQcm9kdWN0RGV0YWlsIHByb2R1Y3REYXRhPXtwcm9kdWN0RGF0YX0gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgIDxDb21tZW50Q29udGFpbmVyIGNvbW1lbnRzRGF0YT17Y29tbWVudHNEYXRhfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlByb2R1Y3REZXRhaWwiLCJJdGVtTGlzdE5hdiIsIkNvbW1lbnRDb250YWluZXIiLCJnZXRDb21tZW50cyIsImdldFByb2R1Y3RJZCIsIkhlYWQiLCJQcm9kdWN0RGV0YWlsUGFnZSIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdERhdGEiLCJjb21tZW50c0RhdGEiLCJzZXRDb21tZW50c0RhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInByb2R1Y3RJZCIsInF1ZXJ5IiwiaWQiLCJpc1JlYWR5IiwidGl0bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/items/[id].tsx\n"));

/***/ })

});