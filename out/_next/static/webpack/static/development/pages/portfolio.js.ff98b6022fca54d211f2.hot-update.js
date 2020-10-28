webpackHotUpdate("static/development/pages/portfolio.js",{

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
  console.log(projects);
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
  }, projects.length > 0 && projects.map((project, index) => index < 3 && __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "short_project_".concat(index),
    className: "col-short-portfolio",
    xs: 12,
    md: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    delay: [400],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "short-portfolio-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
    link: project.link,
    className: "short-portfolio-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: project.img,
    className: "short-portfolio-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "short-portfolio-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, project.title)))))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
    link: "/portfolio",
    className: "custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 62
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/index.js":
/*!****************************************************!*\
  !*** ./src/Components/SectionsComponents/index.js ***!
  \****************************************************/
/*! exports provided: Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, ServiceShortPortfolio */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServicePriceMiscalculations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceShortPortfolio"]; });

/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FlipBook"]; });

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

/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyScrollAnimation", function() { return _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_14__["MyScrollAnimation"]; });

















/***/ })

})
//# sourceMappingURL=portfolio.js.ff98b6022fca54d211f2.hot-update.js.map