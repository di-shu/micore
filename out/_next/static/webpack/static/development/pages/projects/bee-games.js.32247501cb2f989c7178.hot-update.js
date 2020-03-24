webpackHotUpdate("static\\development\\pages\\projects\\bee-games.js",{

/***/ "./src/Components/SectionsComponents/SectionLayout.js":
/*!************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionLayout.js ***!
  \************************************************************/
/*! exports provided: SectionLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return SectionLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionWrapper */ "./src/Components/SectionsComponents/SectionWrapper.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SectionLayout = function SectionLayout(props) {
  var id = props.id,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? true : _props$wrap,
      Header = props.Header,
      Footer = props.Footer,
      children = props.children,
      className = props.className,
      sectionClassName = props.sectionClassName,
      _props$customWrap = props.customWrap,
      customWrap = _props$customWrap === void 0 ? false : _props$customWrap;
  return __jsx("section", {
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, Header && __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: className ? className : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children) : children.map(function (Child, index) {
    return __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
      key: index,
      className: Child.props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, Child);
  })), Footer && __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=bee-games.js.32247501cb2f989c7178.hot-update.js.map