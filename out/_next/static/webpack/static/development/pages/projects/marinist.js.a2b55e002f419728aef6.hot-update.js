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
//# sourceMappingURL=marinist.js.a2b55e002f419728aef6.hot-update.js.map