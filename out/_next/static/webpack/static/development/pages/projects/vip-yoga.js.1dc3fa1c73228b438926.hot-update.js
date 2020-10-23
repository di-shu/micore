webpackHotUpdate("static/development/pages/projects/vip-yoga.js",{

/***/ "./src/Components/Sections/Projects/VipYoga/Bottom.js":
/*!************************************************************!*\
  !*** ./src/Components/Sections/Projects/VipYoga/Bottom.js ***!
  \************************************************************/
/*! exports provided: Bottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottom", function() { return Bottom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/VipYoga/Config/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Sections/Projects/VipYoga/Bottom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

var FooterImg = '/images/VipYoga/yoga_down.jpg';
var Bottom = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "vip-yoga-bottom",
    Header: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionSlider"], {
      slides: _Config__WEBPACK_IMPORTED_MODULE_2__["VipYogaSlides"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }),
    Footer: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
      src: FooterImg,
      className: "footer-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["BottomNavigation"], {
      isBlack: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  });
};

/***/ }),

/***/ "./src/Components/Sections/Projects/VipYoga/Main.js":
/*!**********************************************************!*\
  !*** ./src/Components/Sections/Projects/VipYoga/Main.js ***!
  \**********************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Sections/Projects/VipYoga/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

var MainBGMobile = '/images/VipYoga/MainBGMobile.png';
var MainBGDesktop = '/images/VipYoga/yoga_main.jpg';
var Main = () => {
  var {
    mobile,
    minWidthLaptop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ProjectMainSection"], {
    id: "vip-yoga",
    name: "Vip yoga",
    isNavBlack: !minWidthLaptop,
    isContentWhite: minWidthLaptop,
    background: mobile ? MainBGMobile : MainBGDesktop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  });
};

/***/ })

})
//# sourceMappingURL=vip-yoga.js.1dc3fa1c73228b438926.hot-update.js.map