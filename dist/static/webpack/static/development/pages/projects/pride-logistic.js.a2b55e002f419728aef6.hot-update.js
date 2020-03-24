webpackHotUpdate("static\\development\\pages\\projects\\pride-logistic.js",{

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
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\PrideLogistic\\Brandbook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* IMAGES */

var Car = '/Assets/Images/PrideLogistic/LogoCar.png';
var Brandbook = function Brandbook() {
  var _useDeviceDetect = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])(),
      laptop = _useDeviceDetect.laptop,
      desktop = _useDeviceDetect.desktop;

  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "pride-brandbook",
    Header: function Header() {
      return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
        src: Car,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    isDot: true,
    display: laptop || desktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Our brandbook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["FlipBook"], {
    pages: _Config__WEBPACK_IMPORTED_MODULE_1__["PrideBrandbook"],
    isNavWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/FlipBook.js":
/*!****************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/FlipBook.js ***!
  \****************************************************************/
/*! exports provided: FlipBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return FlipBook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\FlipBook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*IMAGES*/

var ArrowLeft = '/Assets/Images/Marinist/FlipbookArrL.svg';
var ArrowRight = '/Assets/Images/Marinist/FlipbookArrR.svg';
var ArrowLeftW = '/Assets/Images/Marinist/FlipbookArrLW.svg';
var ArrowRightW = '/Assets/Images/Marinist/FlipbookArrRW.svg';
var FlipBook = function FlipBook(_ref) {
  var isNavWhite = _ref.isNavWhite,
      pages = _ref.pages;
  var fadeClass = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isBookOpen = _useState[0],
      setIsBookOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (fadeClass) {
      $(fadeClass).turn({
        width: window.innerWidth < 577 ? 340 : window.innerWidth < 991 ? 690 : window.innerWidth < 1199 ? 800 : 1100,
        height: window.innerWidth < 577 ? 250 : window.innerWidth < 1199 ? 350 : 400,
        autoCenter: true,
        display: window.innerWidth < 577 ? 'single' : 'double',
        duration: 1200,
        turnCorners: 'bl, br'
      });
    }
  }, []);

  var goToPrevPage = function goToPrevPage() {
    $('.flipbook').turn('previous');
  };

  var goToNextPage = function goToNextPage() {
    $('.flipbook').turn('next');
  };

  var handleFlipClick = function handleFlipClick() {
    setIsBookOpen(true);
    !isBookOpen && $('.flipbook').turn('next');
  };

  return __jsx("div", {
    className: "flipbook-container ".concat(isBookOpen ? 'isOpen' : ''),
    onClick: handleFlipClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "open-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "click to open"), __jsx("span", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("span", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("div", {
    className: "flipbook",
    ref: function ref(el) {
      return fadeClass = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, pages && pages.map(function (page, index) {
    return __jsx("div", {
      key: index,
      className: "page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      src: page,
      alt: "Brandbook page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "logobook-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("img", {
    src: isNavWhite ? ArrowLeftW : ArrowLeft,
    className: "arrow-left",
    onClick: goToPrevPage,
    alt: "Arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("p", {
    style: {
      color: isNavWhite ? '#fff' : '#493a33'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "flip page"), __jsx("img", {
    src: isNavWhite ? ArrowRightW : ArrowRight,
    className: "arrow-right",
    onClick: goToNextPage,
    alt: "Arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=pride-logistic.js.a2b55e002f419728aef6.hot-update.js.map