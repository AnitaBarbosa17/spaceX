webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apollo */ \"./src/apollo.js\");\n/* harmony import */ var _containers_LaunchesContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/LaunchesContainer */ \"./src/containers/LaunchesContainer.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/anitabarbosa/Documents/ESCUELA_JS/react_graphQL/spaceX/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h1.withConfig({\n  displayName: \"pages__Title\",\n  componentId: \"tki0mv-0\"\n})([\"font-size:3rem;font-weight:bold;margin:0 auto;color:white;z-index:2;position:relative;padding:0 10% 12rem;@media (min-width:768px){font-size:8rem;}\"]);\n_c = Title;\nconst SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h3.withConfig({\n  displayName: \"pages__SubTitle\",\n  componentId: \"tki0mv-1\"\n})([\"font-size:1.3rem;font-weight:bold;margin:0 auto;color:white;z-index:2;position:relative;padding:10rem 10% 20px;@media (min-width:768px){font-size:3rem;padding:10rem 10% 0;}\"]);\n_c2 = SubTitle;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header.withConfig({\n  displayName: \"pages__Header\",\n  componentId: \"tki0mv-2\"\n})([\"height:100vh;width:100%;padding-top:100px;overflow:hidden;position:relative;@media (min-width:768px){height:60vh;}@media (min-width:1024px){height:calc(100vh - 50px);}\"]);\n_c3 = Header;\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img.withConfig({\n  displayName: \"pages__Image\",\n  componentId: \"tki0mv-3\"\n})([\"height:100vh;position:absolute;top:0;left:70%;transform:translateX(-50%);z-index:0;@media (min-width:768px){height:80vh;}\"]);\n_c4 = Image;\n\nconst Index = () => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(Header, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(SubTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"Check the\"), __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"Past Launches\"), __jsx(Image, {\n    src: \"/images/home_moon.webp\",\n    alt: \"Logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  })), __jsx(_containers_LaunchesContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }));\n}; // export default Index;\n\n\n_c5 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_apollo__WEBPACK_IMPORTED_MODULE_1__[\"withApollo\"])({\n  ssr: true\n})(Index));\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c2, \"SubTitle\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Image\");\n$RefreshReg$(_c5, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImgxIiwiU3ViVGl0bGUiLCJoMyIsIkhlYWRlciIsImhlYWRlciIsIkltYWdlIiwiaW1nIiwiSW5kZXgiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkpBQVg7S0FBTUYsSztBQWFOLE1BQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0csRUFBVjtBQUFBO0FBQUE7QUFBQSxvTEFBZDtNQUFNRCxRO0FBY04sTUFBTUUsTUFBTSxHQUFHSix5REFBTSxDQUFDSyxNQUFWO0FBQUE7QUFBQTtBQUFBLCtLQUFaO01BQU1ELE07QUFjTixNQUFNRSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBQVg7TUFBTUQsSzs7QUFZTixNQUFNRSxLQUFLLEdBQUcsTUFBTTtBQUNoQixTQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixFQUdJLE1BQUMsS0FBRDtBQUFPLE9BQUcsRUFBQyx3QkFBWDtBQUFvQyxPQUFHLEVBQUMsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosRUFNSSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQUZKO0FBWUgsQ0FiRCxDLENBaUJBOzs7TUFqQk1BLEs7QUFrQlNDLHlIQUFVLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUFWLENBQTBCRixLQUExQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3aXRoQXBvbGxvfSBmcm9tICcuLi9hcG9sbG8nO1xuaW1wb3J0IExhdW5jaGVzQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvTGF1bmNoZXNDb250YWluZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwIDEwJSAxMnJlbTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xuICAgIH1cbmA7XG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmgzYFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHJlbSAxMCUgMjBweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBwYWRkaW5nOiAxMHJlbSAxMCUgMDtcbiAgICB9XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgfVxuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA3MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICB9XG5gO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFN1YlRpdGxlPkNoZWNrIHRoZTwvU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgPFRpdGxlPlBhc3QgTGF1bmNoZXM8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2hvbWVfbW9vbi53ZWJwXCIgYWx0PVwiTG9nb1wiLz4gXG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxMYXVuY2hlc0NvbnRhaW5lciAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgXG4gICAgKVxufVxuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})