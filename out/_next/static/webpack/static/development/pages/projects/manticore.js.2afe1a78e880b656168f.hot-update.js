webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Components/Sections/Projects/Manticore/DevelopingLogo.js":
/*!**********************************************************************!*\
  !*** ./src/Components/Sections/Projects/Manticore/DevelopingLogo.js ***!
  \**********************************************************************/
/*! exports provided: DevelopingLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopingLogo", function() { return DevelopingLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/Sections/Projects/Manticore/DevelopingLogo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DevelopingLogo = () => {
  var {
    0: scrollDir,
    1: setScrollDir
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleScroll = (elem, flag) => {
    flag ? setScrollDir(true) : setScrollDir(false);
  };

  var handleFocus = e => {
    console.log('d in');
  };

  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    onFocus: handleFocus,
    id: "manticore-developing__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["HorizontalScroll"], {
    className: scrollDir ? 'is-horizontal' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 46
    }
  }, "\u043B\u043E\u0433\u043E")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "\u0421\u043E \u0441\u0442\u0430\u0440\u0442\u0430 \u043C\u044B \u0437\u043D\u0430\u043B\u0438 \u043A\u0430\u043A\u0438\u043C \u0431\u0443\u0434\u0435\u0442 \u043B\u043E\u0433\u043E. \u0417\u0430\u0431\u0438\u0432 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0434\u0435\u0438, \u043F\u0440\u043E\u0440\u0430\u0431\u0430\u0442\u0430\u043B\u0438 \u0444\u043E\u0440\u043C\u0443 \u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/grey_logo.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "\u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 46
    }
  }, "\u0426\u0432\u0435\u0442\u0430")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "\u0412\u0430\u0436\u043D\u044B\u0439 \u044D\u0442\u0430\u043F - \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0433\u0430\u043C\u043C\u044B \u043B\u043E\u0433\u043E. \u041C\u044B \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0432\u0441\u0435. \u041D\u0443 \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/logo_micore.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 45
    }
  }, "\u0438\u0437\u044E\u043C\u0438\u043D\u043A\u0443")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "\u041D\u0443, \u043D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u0438\u0437\u044E\u043C\u0438\u043D\u043A\u0443. \u041C\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0442\u043E\u0447\u043A\u0443 \u0438 \u0437\u043D\u0430\u0447\u043E\u043A \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0438. \u0417\u0430\u0442\u043E \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u043B\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/logo_micore.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=manticore.js.2afe1a78e880b656168f.hot-update.js.map