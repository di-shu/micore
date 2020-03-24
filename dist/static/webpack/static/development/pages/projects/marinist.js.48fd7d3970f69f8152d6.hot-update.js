webpackHotUpdate("static\\development\\pages\\projects\\marinist.js",{

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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\FlipBook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

var ArrowLeft = '/Assets/Images/Marinist/ArrowLeft.svg';
var ArrowRight = '/Assets/Images/Marinist/ArrowRight.svg';
var FlipBook = function FlipBook(_ref) {
  var className = _ref.className,
      pages = _ref.pages;
  var fadeClass = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isBookOpen = _useState[0],
      setIsBookOpen = _useState[1];

  var _useDeviceDetect = Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])(),
      mobile = _useDeviceDetect.mobile,
      tablet = _useDeviceDetect.tablet,
      laptop = _useDeviceDetect.laptop,
      desktop = _useDeviceDetect.desktop;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (fadeClass) {
      $(fadeClass).turn({
        width: mobile ? 340 : laptop || desktop ? 800 : tablet ? 690 : 1100,
        height: mobile ? 250 : laptop || desktop ? 350 : tablet ? 250 : 400,
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
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "open-wrap ".concat(isBookOpen ? 'isOpen' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "click to open"), __jsx("span", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    className: "flipbook ".concat(className ? className : ''),
    ref: function ref(el) {
      return fadeClass = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, pages && pages.map(function (page, index) {
    return __jsx("div", {
      key: index,
      className: "page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("img", {
      src: page,
      alt: "Brandbook page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "logobook-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("img", {
    src: ArrowLeft,
    className: "arrow-left",
    onClick: goToPrevPage,
    alt: "Arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "flip page"), __jsx("img", {
    src: ArrowRight,
    className: "arrow-right",
    onClick: goToNextPage,
    alt: "Arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=marinist.js.48fd7d3970f69f8152d6.hot-update.js.map