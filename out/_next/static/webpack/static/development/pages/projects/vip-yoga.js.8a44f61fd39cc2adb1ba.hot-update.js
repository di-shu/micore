webpackHotUpdate("static/development/pages/projects/vip-yoga.js",{

/***/ "./src/Components/Sections/Projects/VipYoga/AboutSection.js":
/*!******************************************************************!*\
  !*** ./src/Components/Sections/Projects/VipYoga/AboutSection.js ***!
  \******************************************************************/
/*! exports provided: AboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSection", function() { return AboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/VipYoga/Config/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Sections/Projects/VipYoga/AboutSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AboutSection = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ProjectAboutSection"], {
    name: "ViP Yoga",
    year: "\u0438\u044E\u043D\u044C, 2019",
    additionalInfo: _Config__WEBPACK_IMPORTED_MODULE_2__["AdditionalInfo"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js":
/*!***********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js ***!
  \***********************************************************************/
/*! exports provided: ProjectInfoWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return ProjectInfoWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/SectionsComponents/Projects/ProjectInfoWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ProjectInfoWrap = ({
  name,
  year,
  link,
  children,
  isProjectInfo
}) => {
  return __jsx("div", {
    className: "square-info-wrap ".concat(isProjectInfo ? 'project-wrap' : 'content-wrap'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "square-text-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, isProjectInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, name && __jsx("p", {
    className: "square-info-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 22
    }
  }, "\u0418\u043C\u044F - ", name), year && __jsx("p", {
    className: "square-info-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 22
    }
  }, "\u0413\u043E\u0434 - ", year), link && __jsx("p", {
    className: "square-info-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 22
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0430 - ", __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "http://".concat(link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 63
    }
  }, link))) : children));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/index.js":
/*!****************************************************!*\
  !*** ./src/Components/SectionsComponents/index.js ***!
  \****************************************************/
/*! exports provided: Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, ProjectInfoWrap */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FlipBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ScrollBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FontExample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["TypeSomething"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["BottomNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectsNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectAboutSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectInfoWrap"]; });

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
//# sourceMappingURL=vip-yoga.js.8a44f61fd39cc2adb1ba.hot-update.js.map