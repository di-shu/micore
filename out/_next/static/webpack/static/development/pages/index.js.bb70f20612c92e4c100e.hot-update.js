webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/SectionsComponents/SectionWrapper.js":
/*!*************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionWrapper.js ***!
  \*************************************************************/
/*! exports provided: SectionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/SectionWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SectionWrapper = ({
  children,
  noPadding,
  className
}) => __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "section-wrapper".concat(noPadding ? ' no-padding' : '').concat(className ? " ".concat(className) : ''),
  children: children,
  onScroll: e => {
    console.log(e.nativeEvent.offsetY);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
});

/***/ })

})
//# sourceMappingURL=index.js.bb70f20612c92e4c100e.hot-update.js.map