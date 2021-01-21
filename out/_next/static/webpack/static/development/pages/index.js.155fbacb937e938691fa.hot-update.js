webpackHotUpdate("static/development/pages/index.js",{

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
    id,
    wrap = true,
    Header,
    Footer,
    children,
    className,
    sectionClassName,
    customWrap = false
  } = props;
  return __jsx("section", {
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: id.includes('-main') ? 0 : 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "project-section__container ".concat(sectionClassName ? sectionClassName + '__container' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Header && __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 22
    }
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: "".concat(className ? className : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, Child))), Footer && __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 22
    }
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/SectionWrapper.js":
/*!*************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionWrapper.js ***!
  \*************************************************************/
/*! exports provided: SectionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/SectionWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SectionWrapper = ({
  children,
  noPadding,
  className
}) => __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "section-wrapper".concat(noPadding ? ' no-padding' : '').concat(className ? " ".concat(className) : ''),
  children: children,
  onScroll: e => {
    console.log(e.offsetY);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./src/Components/index.js":
/*!*********************************!*\
  !*** ./src/Components/index.js ***!
  \*********************************/
/*! exports provided: HomePage, AboutPage, ServicesPage, BrandPage, OtherPage, LandingPage, CorporatePage, Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, Sizes, NewProjectsList, Portfolios, Services, InputControl, FullPageWrapper, FooterSection, MenuContainer, Header, MetaHead, Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, MyScrollAnimation, TabWrap, TeamModal, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, HorizontalScroll, SectionLayout, SectionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./src/Components/Tab/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabWrap", function() { return _Tab__WEBPACK_IMPORTED_MODULE_0__["TabWrap"]; });

/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages */ "./src/Components/Pages/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["HomePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["AboutPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["ServicesPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandPage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["BrandPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtherPage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["OtherPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["LandingPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorporatePage", function() { return _Pages__WEBPACK_IMPORTED_MODULE_1__["CorporatePage"]; });

/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals */ "./src/Components/Modals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamModal", function() { return _Modals__WEBPACK_IMPORTED_MODULE_2__["TeamModal"]; });

/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ "./src/Components/Config/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["Socials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinks", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["MenuLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["TeamList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["SkillsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["ServicesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["Sizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["NewProjectsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolios", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["Services"]; });

/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inputs */ "./src/Components/Inputs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputControl", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_4__["InputControl"]; });

/* harmony import */ var _FullPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FullPage */ "./src/Components/FullPage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullPageWrapper", function() { return _FullPage__WEBPACK_IMPORTED_MODULE_5__["FullPageWrapper"]; });

/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sections */ "./src/Components/Sections/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return _Sections__WEBPACK_IMPORTED_MODULE_6__["FooterSection"]; });

/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SiteHeader */ "./src/Components/SiteHeader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return _SiteHeader__WEBPACK_IMPORTED_MODULE_7__["MenuContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _SiteHeader__WEBPACK_IMPORTED_MODULE_7__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaHead", function() { return _SiteHeader__WEBPACK_IMPORTED_MODULE_7__["MetaHead"]; });

/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["Blob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["Layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ScrollBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveLink", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ActiveLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeeMoreLink", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SeeMoreLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionDesc", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionDesc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialsWrap", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SocialsWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["MainWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ImageWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloStatue", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ApolloStatue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyScrollAnimation", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["MyScrollAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkStages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceShortPortfolio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServicePriceMiscalculations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["FlipBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["FontExample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ProjectColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["TypeSomething"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ProjectInfoWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["BottomNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ProjectsNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ProjectMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ProjectAboutSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalScroll", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["HorizontalScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionWrapper"]; });











/***/ })

})
//# sourceMappingURL=index.js.155fbacb937e938691fa.hot-update.js.map