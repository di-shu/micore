webpackHotUpdate("static/development/pages/projects/zlata-trade.js",{

/***/ "./src/Components/SectionsComponents/SocialsWrap.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/SocialsWrap.js ***!
  \**********************************************************/
/*! exports provided: SocialsWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsWrap", function() { return SocialsWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/SectionsComponents/SocialsWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SocialsWrap = props => {
  var {
    display = true,
    firstLoad
  } = props;
  return __jsx("div", {
    className: "socials-wrap ".concat(display ? 'd-flex' : 'd-none'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, _Config__WEBPACK_IMPORTED_MODULE_1__["Socials"] && _Config__WEBPACK_IMPORTED_MODULE_1__["Socials"].map((item, index) => __jsx("a", {
    key: index,
    href: item.href,
    target: "_blank",
    className: "social-link ".concat(firstLoad ? 'on-first-load' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: item.src,
    alt: item.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=zlata-trade.js.e0066a0461787c092ede.hot-update.js.map