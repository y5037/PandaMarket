"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/items",{

/***/ "./pages/api/api.tsx":
/*!***************************!*\
  !*** ./pages/api/api.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: function() { return /* binding */ getComments; },\n/* harmony export */   getProductData: function() { return /* binding */ getProductData; },\n/* harmony export */   getProductId: function() { return /* binding */ getProductId; }\n/* harmony export */ });\nconst BASE_URL = \"https://panda-market-api.vercel.app\";\n// 베스트/전체 상품 리스트\nasync function getProductData(param) {\n    let { params } = param;\n    const query = new URLSearchParams(params).toString();\n    const response = await fetch(\"\".concat(BASE_URL, \"/products?\").concat(query));\n    if (!response.ok) {\n        throw new Error(\"상품을 불러오는 데 실패했습니다.\");\n    }\n    const body = await response.json();\n    return body;\n}\n// 디테일 상품 정보\nasync function getProductId(productId, setProductData, setLoading) {\n    const response = await fetch(\"\".concat(BASE_URL, \"/products/\").concat(productId));\n    try {\n        const body = await response.json();\n        setProductData(body);\n    } catch (error) {\n        console.log(error);\n    }\n    if (!response.ok) {\n        throw new Error(\"정보를 불러오는 데 실패했습니다.\");\n    }\n    setLoading(false);\n}\n// 디테일 댓글\nasync function getComments(productId, setCommentsData) {\n    const response = await fetch(\"\".concat(BASE_URL, \"/products/\").concat(productId, \"/comments?limit=10\"));\n    try {\n        const body = await response.json();\n        setCommentsData(body);\n    } catch (error) {\n        console.log(error);\n    }\n    if (!response.ok) {\n        throw new Error(\"정보를 불러오는 데 실패했습니다.\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxNQUFNQSxXQUFXO0FBRWpCLGdCQUFnQjtBQUNULGVBQWVDLGVBQWUsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSO0lBQ25DLE1BQU1DLFFBQVEsSUFBSUMsZ0JBQWdCRixRQUFRRyxRQUFRO0lBQ2xELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUF3QkosT0FBckJILFVBQVMsY0FBa0IsT0FBTkc7SUFFckQsSUFBSSxDQUFDRyxTQUFTRSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO0lBQ2hDLE9BQU9EO0FBQ1Q7QUFFQSxZQUFZO0FBQ0wsZUFBZUUsYUFDcEJDLFNBQTRCLEVBQzVCQyxjQUVDLEVBQ0RDLFVBQXlEO0lBRXpELE1BQU1ULFdBQVcsTUFBTUMsTUFBTSxHQUF3Qk0sT0FBckJiLFVBQVMsY0FBc0IsT0FBVmE7SUFFckQsSUFBSTtRQUNGLE1BQU1ILE9BQU8sTUFBTUosU0FBU0ssSUFBSTtRQUNoQ0csZUFBZUo7SUFDakIsRUFBRSxPQUFPTSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtJQUVBLElBQUksQ0FBQ1YsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBTSxXQUFXO0FBQ2I7QUFFQSxTQUFTO0FBQ0YsZUFBZUksWUFDcEJOLFNBQTRCLEVBQzVCTyxlQUVDO0lBRUQsTUFBTWQsV0FBVyxNQUFNQyxNQUNyQixHQUF3Qk0sT0FBckJiLFVBQVMsY0FBc0IsT0FBVmEsV0FBVTtJQUVwQyxJQUFJO1FBQ0YsTUFBTUgsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBQ2hDUyxnQkFBZ0JWO0lBQ2xCLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7SUFFQSxJQUFJLENBQUNWLFNBQVNFLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvYXBpLnRzeD85MjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRDb21tZW50RGF0YVByb3BzLCBUUHJvZHVjdERhdGFQcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9wYW5kYS1tYXJrZXQtYXBpLnZlcmNlbC5hcHBcIjtcblxuLy8g67Kg7Iqk7Yq4L+yghOyytCDsg4Htkogg66as7Iqk7Yq4XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdERhdGEoe3BhcmFtc30pOiBQcm9taXNlPFRQcm9kdWN0RGF0YVByb3BzPiB7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3Byb2R1Y3RzPyR7cXVlcnl9YCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuyDge2SiOydhCDrtojrn6zsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XG4gIH1cbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGJvZHk7XG59XG5cbi8vIOuUlO2FjOydvCDsg4Htkogg7KCV67O0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdElkKFxuICBwcm9kdWN0SWQ6IHN0cmluZyB8IHN0cmluZ1tdLFxuICBzZXRQcm9kdWN0RGF0YTogUmVhY3QuRGlzcGF0Y2g8XG4gICAgUmVhY3QuU2V0U3RhdGVBY3Rpb248VFByb2R1Y3REYXRhUHJvcHMgfCB1bmRlZmluZWQ+XG4gID4sXG4gIHNldExvYWRpbmc6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxuKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3Byb2R1Y3RzLyR7cHJvZHVjdElkfWApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRQcm9kdWN0RGF0YShib2R5KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi7KCV67O066W8IOu2iOufrOyYpOuKlCDrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLlwiKTtcbiAgfVxuXG4gIHNldExvYWRpbmcoZmFsc2UpO1xufVxuXG4vLyDrlJTthYzsnbwg64yT6riAXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tbWVudHMoXG4gIHByb2R1Y3RJZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gIHNldENvbW1lbnRzRGF0YTogUmVhY3QuRGlzcGF0Y2g8XG4gICAgUmVhY3QuU2V0U3RhdGVBY3Rpb248VENvbW1lbnREYXRhUHJvcHMgfCB1bmRlZmluZWQ+XG4gID5cbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke0JBU0VfVVJMfS9wcm9kdWN0cy8ke3Byb2R1Y3RJZH0vY29tbWVudHM/bGltaXQ9MTBgXG4gICk7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRDb21tZW50c0RhdGEoYm9keSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuygleuztOulvCDrtojrn6zsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC5cIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImdldFByb2R1Y3REYXRhIiwicGFyYW1zIiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiYm9keSIsImpzb24iLCJnZXRQcm9kdWN0SWQiLCJwcm9kdWN0SWQiLCJzZXRQcm9kdWN0RGF0YSIsInNldExvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21tZW50cyIsInNldENvbW1lbnRzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/api.tsx\n"));

/***/ })

});