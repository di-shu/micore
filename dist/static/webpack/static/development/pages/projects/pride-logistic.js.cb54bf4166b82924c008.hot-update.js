webpackHotUpdate("static\\development\\pages\\projects\\pride-logistic.js",{

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
    console.log(mobile, tablet, laptop, desktop);

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
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "open-wrap ".concat(isBookOpen ? 'isOpen' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "click to open"), __jsx("span", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("span", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("div", {
    className: "flipbook ".concat(className ? className : ''),
    ref: function ref(el) {
      return fadeClass = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, pages && pages.map(function (page, index) {
    return __jsx("div", {
      key: index,
      className: "page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      src: page,
      alt: "Brandbook page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "logobook-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: ArrowLeft,
    className: "arrow-left",
    onClick: goToPrevPage,
    alt: "Arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "flip page"), __jsx("img", {
    src: ArrowRight,
    className: "arrow-right",
    onClick: goToNextPage,
    alt: "Arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/index.js":
/*!****************************************************!*\
  !*** ./src/Components/SectionsComponents/index.js ***!
  \****************************************************/
/*! exports provided: Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, FlipBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blob */ "./src/Components/SectionsComponents/Blob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return _Blob__WEBPACK_IMPORTED_MODULE_0__["Blob"]; });

/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/Components/SectionsComponents/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"]; });

/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services */ "./src/Components/SectionsComponents/Services/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkStages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceShortPortfolio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServicePriceMiscalculations"]; });

/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ScrollBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FontExample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["TypeSomething"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectInfoWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["BottomNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectsNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectAboutSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FlipBook"]; });

/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* empty/unused harmony star reexport *//* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveLink", function() { return _ActiveLink__WEBPACK_IMPORTED_MODULE_5__["ActiveLink"]; });

/* harmony import */ var _SeeMoreLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SeeMoreLink */ "./src/Components/SectionsComponents/SeeMoreLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeeMoreLink", function() { return _SeeMoreLink__WEBPACK_IMPORTED_MODULE_6__["SeeMoreLink"]; });

/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return _SectionInfo__WEBPACK_IMPORTED_MODULE_7__["SectionTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionDesc", function() { return _SectionInfo__WEBPACK_IMPORTED_MODULE_7__["SectionDesc"]; });

/* harmony import */ var _SocialsWrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SocialsWrap */ "./src/Components/SectionsComponents/SocialsWrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialsWrap", function() { return _SocialsWrap__WEBPACK_IMPORTED_MODULE_8__["SocialsWrap"]; });

/* harmony import */ var _MainWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainWrapper */ "./src/Components/SectionsComponents/MainWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return _MainWrapper__WEBPACK_IMPORTED_MODULE_9__["MainWrapper"]; });

/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return _ImageWrapper__WEBPACK_IMPORTED_MODULE_10__["ImageWrapper"]; });

/* harmony import */ var _ApolloStatue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApolloStatue */ "./src/Components/SectionsComponents/ApolloStatue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloStatue", function() { return _ApolloStatue__WEBPACK_IMPORTED_MODULE_11__["ApolloStatue"]; });

/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SectionLayout */ "./src/Components/SectionsComponents/SectionLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return _SectionLayout__WEBPACK_IMPORTED_MODULE_12__["SectionLayout"]; });

/* harmony import */ var _SectionWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SectionWrapper */ "./src/Components/SectionsComponents/SectionWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return _SectionWrapper__WEBPACK_IMPORTED_MODULE_13__["SectionWrapper"]; });
















/***/ })

})
//# sourceMappingURL=pride-logistic.js.cb54bf4166b82924c008.hot-update.js.map