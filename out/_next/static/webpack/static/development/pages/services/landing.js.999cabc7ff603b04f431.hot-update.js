webpackHotUpdate("static/development/pages/services/landing.js",{

/***/ "./src/Components/Sections/HomePage/HomeMain.js":
/*!******************************************************!*\
  !*** ./src/Components/Sections/HomePage/HomeMain.js ***!
  \******************************************************/
/*! exports provided: HomeMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMain", function() { return HomeMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Styles_Sections_Home_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Styles/Sections/Home/main.scss */ "./src/Styles/Sections/Home/main.scss");
/* harmony import */ var _Styles_Sections_Home_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Home_main_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/Sections/HomePage/HomeMain.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* STYLES */



var move = (x, y) => "".concat(-x / 4, "px ").concat(-y / 8, "px");

var HomeMain = ({
  firstLoad,
  animation
}) => {
  var {
    mobile,
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["useDeviceDetect"])();
  var [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 9,
      tension: 136,
      friction: 81
    }
  }));

  var handleMouseMove = ({
    clientX: x,
    clientY: y
  }) => set({
    xy: [x, y]
  });

  return __jsx("section", {
    id: "main-section",
    className: "section",
    onMouseMove: handleMouseMove,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["SeeMoreLink"], {
    display: !desktop,
    direction: mobile ? 'right' : 'left',
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["AnimationClass"])({
      firstLoad,
      animation
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["SocialsWrap"], {
    firstLoad: firstLoad,
    display: !mobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    lg: 6,
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["AnimationClass"])({
      firstLoad,
      animation,
      className: 'col-info'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["SectionTitle"], {
    isContentWhite: true,
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "We Are ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 22
    }
  }, "WEB-Studio")), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["SectionTitle"], {
    main: true,
    isContentWhite: true,
    className: "title",
    title: "MANTICORE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"], {
    isDot: true,
    display: !desktop,
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["AnimationClass"])({
      firstLoad,
      animation
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["ApolloStatue"], {
    props: props,
    move: move,
    firstLoad: firstLoad,
    animation: animation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))));
};

/***/ })

})
//# sourceMappingURL=landing.js.999cabc7ff603b04f431.hot-update.js.map