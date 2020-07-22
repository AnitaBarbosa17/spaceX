webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/styles/CardLaunch.js":
/*!**********************************!*\
  !*** ./src/styles/CardLaunch.js ***!
  \**********************************/
/*! exports provided: Container, Body, Title, Text, Image, LinkTo, More */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body\", function() { return Body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkTo\", function() { return LinkTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"More\", function() { return More; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"CardLaunch__Container\",\n  componentId: \"sc-1206hl1-0\"\n})([\"width:100%;height:70vw;padding:0 .8rem;margin:1rem 0;overflow:hidden;transition:all 0.1s ease-in-out;@media (min-width:768px){width:33.333%;height:24vw;&:hover{.card__more{opacity:1;div{opacity:1;transform:scale(1);}}}}@media(min-width:1024px){width:25%;}.wrapper{display:flex;flex-direction:column;min-width:0;background-color:black;position:relative;height:100%;}\"]);\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"CardLaunch__Body\",\n  componentId: \"sc-1206hl1-1\"\n})([\"display:flex;flex-direction:column;flex:1 1 auto;min-height:1px;padding:1.25rem;position:absolute;bottom:0;width:100%;background:rgb(16 16 27);background:linear-gradient(0deg,rgb(16 16 27) 0%,rgba(255,255,255,0) 100%);\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"CardLaunch__Title\",\n  componentId: \"sc-1206hl1-2\"\n})([\"font-size:1.25rem;font-weight:bold;margin:0 0 5px;color:white;span{letter-spacing:1px;text-transform:uppercase;font-size:10px;line-height:10px;font-weight:400;display:block;}&.success{&:before{content:'Successful mission';font-size:10px;display:block;margin-bottom:5px;text-transform:uppercase;color:greenyellow;}}&.fail{&:before{content:'Not successful mission';font-size:10px;display:block;margin-bottom:5px;text-transform:uppercase;color:red;}}\"]);\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"CardLaunch__Text\",\n  componentId: \"sc-1206hl1-3\"\n})([\"line-height:20px;color:#fff;font-size:.9rem;font-weight:300;.font-bold{font-weight:600;}\"]);\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"CardLaunch__Image\",\n  componentId: \"sc-1206hl1-4\"\n})([\"width:auto;min-height:100%;object-fit:cover;\"]);\nconst LinkTo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"CardLaunch__LinkTo\",\n  componentId: \"sc-1206hl1-5\"\n})([\"cursor:pointer;margin:0 auto;width:40px;height:40px;border-radius:50%;color:#000;background-color:rgba(255,255,255,1);display:block;font-weight:bold;text-align:center;user-select:none;padding:0.5rem 0.5rem;transition:all 0.15s ease-in-out;z-index:9;&:hover{transform:scale(1.1);}\"]);\nconst More = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"CardLaunch__More\",\n  componentId: \"sc-1206hl1-6\"\n})([\"display:flex;justify-content:center;align-items:center;width:auto;height:auto;position:absolute;right:10px;top:10px;@media (min-width:768px){opacity:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;background-color:rgba(0,0,0,.7);transition:all 0.1s ease-in-out;overflow:hidden;padding:20px;right:0;top:0;div{transition:all 0.1s ease-in-out;transform:scale(.3);transition-delay:.08s;span{font-size:10px;}}.card__title{color:#fff;text-align:center;font-size:1.4rem;line-height:1.2em;margin-bottom:30px;display:block;}}div{transition:all 0.1s ease-in-out;transition-delay:.08s;span{letter-spacing:1px;text-transform:uppercase;font-size:9px;font-weight:400;display:block;margin-bottom:10px;text-align:center;color:white;margin-top:10px;}}.card__title{display:none;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0NhcmRMYXVuY2guanM/N2FkOSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCb2R5IiwiVGl0bGUiLCJoMSIsIlRleHQiLCJwIiwiSW1hZ2UiLCJpbWciLCJMaW5rVG8iLCJhIiwiTW9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscVhBQWY7QUFtQ0EsTUFBTUMsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtPQUFWO0FBY0EsTUFBTUUsS0FBSyxHQUFHSCx5REFBTSxDQUFDSSxFQUFWO0FBQUE7QUFBQTtBQUFBLHVjQUFYO0FBc0NBLE1BQU1DLElBQUksR0FBR0wseURBQU0sQ0FBQ00sQ0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBVjtBQVVBLE1BQU1DLEtBQUssR0FBR1AseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBWDtBQU1BLE1BQU1DLE1BQU0sR0FBR1QseURBQU0sQ0FBQ1UsQ0FBVjtBQUFBO0FBQUE7QUFBQSwrUkFBWjtBQW9CQSxNQUFNQyxJQUFJLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbXpCQUFWIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9DYXJkTGF1bmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzB2dztcbiAgICBwYWRkaW5nOiAwIC44cmVtO1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgICAgICBoZWlnaHQ6IDI0dnc7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAuY2FyZF9fbW9yZXtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAgIFxuICAgIC53cmFwcGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG5gO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2IDE2IDI3KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2IoMTYgMTYgMjcpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XG4gICAgXG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgc3BhbntcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXG4gICAgfVxuICAgICYuc3VjY2Vzc3tcbiAgICAgICAgLyogY29sb3I6IGdyZWVueWVsbG93OyAqL1xuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTdWNjZXNzZnVsIG1pc3Npb24nO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVueWVsbG93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5mYWlse1xuICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdOb3Qgc3VjY2Vzc2Z1bCBtaXNzaW9uJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAuZm9udC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rVG8gPSBzdHlsZWQuYWBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB6LWluZGV4OiA5O1xuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vcmUgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjA4cztcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkX190aXRsZXtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXZ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDhzO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX190aXRsZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/CardLaunch.js\n");

/***/ })

})