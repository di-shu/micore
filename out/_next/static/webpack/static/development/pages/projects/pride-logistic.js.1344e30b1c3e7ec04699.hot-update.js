webpackHotUpdate("static/development/pages/projects/pride-logistic.js",{

/***/ "./src/Components/Sections/Projects/PrideLogistic/Brandbook.js":
/*!*********************************************************************!*\
  !*** ./src/Components/Sections/Projects/PrideLogistic/Brandbook.js ***!
  \*********************************************************************/
/*! exports provided: Brandbook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brandbook", function() { return Brandbook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/PrideLogistic/Config/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/Sections/Projects/PrideLogistic/Brandbook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* IMAGES */

var Car = '/images/PrideLogistic/pridelog_mockup2.jpg';
var Brandbook = () => {
  var {
    laptop,
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "pride-brandbook",
    Header: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
      className: "pride-brandbook-car",
      src: Car,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 55
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    isDot: true,
    display: laptop || desktop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Our brandbook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["FlipBook"], {
    pages: _Config__WEBPACK_IMPORTED_MODULE_1__["PrideBrandbook"],
    isNavWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=pride-logistic.js.1344e30b1c3e7ec04699.hot-update.js.map