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
    0: windowOffset,
    1: setWindowOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  var {
    scrollDir
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useScroll"])();
  var sectionEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = e => {
    var window = e.currentTarget;
    var windowBottomPosition = Math.round(window.scrollY + window.innerHeight);
    console.log(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    handleScroll: handleScroll,
    id: "manticore-developing__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["HorizontalScroll"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 46
    }
  }, "\u043B\u043E\u0433\u043E")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "\u0421\u043E \u0441\u0442\u0430\u0440\u0442\u0430 \u043C\u044B \u0437\u043D\u0430\u043B\u0438 \u043A\u0430\u043A\u0438\u043C \u0431\u0443\u0434\u0435\u0442 \u043B\u043E\u0433\u043E. \u0417\u0430\u0431\u0438\u0432 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0434\u0435\u0438, \u043F\u0440\u043E\u0440\u0430\u0431\u0430\u0442\u0430\u043B\u0438 \u0444\u043E\u0440\u043C\u0443 \u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/grey_logo.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "\u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 46
    }
  }, "\u0426\u0432\u0435\u0442\u0430")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "\u0412\u0430\u0436\u043D\u044B\u0439 \u044D\u0442\u0430\u043F - \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0433\u0430\u043C\u043C\u044B \u043B\u043E\u0433\u043E. \u041C\u044B \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0432\u0441\u0435. \u041D\u0443 \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/logo_micore.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "developing-logo__step",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 45
    }
  }, "\u0438\u0437\u044E\u043C\u0438\u043D\u043A\u0443")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "\u041D\u0443, \u043D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u0438\u0437\u044E\u043C\u0438\u043D\u043A\u0443. \u041C\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0442\u043E\u0447\u043A\u0443 \u0438 \u0437\u043D\u0430\u0447\u043E\u043A \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0438. \u0417\u0430\u0442\u043E \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u043B\u043E \u043B\u043E\u0433\u043E\u0442\u0438\u043F."), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Manticore/logo_micore.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }))));
};

/***/ }),

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
/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SectionLayout = props => {
  var {
    handleScroll,
    id,
    wrap = true,
    Header,
    Footer,
    children,
    className,
    sectionClassName,
    customWrap = false
  } = props;
  var elem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("section", {
    onScroll: () => handleScroll(elem),
    ref: elem,
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: id.includes('-main') ? 0 : 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "project-section__container ".concat(sectionClassName ? sectionClassName + '__container' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Header && __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: className ? className : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, Child))), Footer && __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 22
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=manticore.js.d4f98603b1f2fd7e08ac.hot-update.js.map