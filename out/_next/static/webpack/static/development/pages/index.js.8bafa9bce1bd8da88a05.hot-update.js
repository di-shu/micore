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


var i = 0;
var SectionWrapper = ({
  children,
  noPadding,
  className
}) => {
  var elem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: elem,
    className: "section-wrapper".concat(noPadding ? ' no-padding' : '').concat(className ? " ".concat(className) : ''),
    children: children,
    onScroll: e => {
      elem.current.querySelector('.horizontal-scroll__container').style.transform = "translateX(-".concat(i++, "px)");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.8bafa9bce1bd8da88a05.hot-update.js.map