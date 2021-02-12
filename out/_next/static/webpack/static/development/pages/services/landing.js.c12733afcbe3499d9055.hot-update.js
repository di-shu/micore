webpackHotUpdate("static/development/pages/services/landing.js",{

/***/ "./src/Components/SectionsComponents/Services/ServiceShortPortfolio.js":
/*!*****************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceShortPortfolio.js ***!
  \*****************************************************************************/
/*! exports provided: ServiceShortPortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return ServiceShortPortfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/SectionsComponents/Services/ServiceShortPortfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ServiceShortPortfolio = ({
  content,
  projects
}) => {
  console.log(projects.length);
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "service-short-portfolio-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, content, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, projects.length > 0 && projects.map((project, index) => {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "short_project_".concat(index),
      className: "col-short-portfolio",
      xs: 12,
      md: 6,
      lg: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
      delay: [400],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "short-portfolio-box",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
      link: project.link,
      className: "short-portfolio-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
      src: project.img,
      className: "short-portfolio-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }), __jsx("p", {
      className: "short-portfolio-name",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, project.title))));
  })), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
    link: "/portfolio",
    className: "custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 62
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))));
};

/***/ })

})
//# sourceMappingURL=landing.js.c12733afcbe3499d9055.hot-update.js.map