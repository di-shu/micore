webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/SectionsComponents/MainWrapper.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/MainWrapper.js ***!
  \**********************************************************/
/*! exports provided: MainWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/Components/SectionsComponents/Layout.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections */ "./src/Components/Sections/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
/* harmony import */ var _Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Styles/Static/general.scss */ "./src/Styles/Static/general.scss");
/* harmony import */ var _Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Styles/Includes/index.scss */ "./src/Styles/Includes/index.scss");
/* harmony import */ var _Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Styles/Sections/Services/index.scss */ "./src/Styles/Sections/Services/index.scss");
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Styles/Sections/Projects/index.scss */ "./src/Styles/Sections/Projects/index.scss");
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/MainWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* STYLES */





var easing = [0.64, 0.04, 0.35, 1];
var variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: easing
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: easing
    }
  }
};
var MainWrapper = ({
  id,
  children
}) => {
  var {
    isProject,
    isServices,
    isManticore
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["useCheckRoute"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    }, 100);
  }, []);
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("main", {
    id: id,
    className: "main-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: "exit",
    initial: "hidden",
    animate: "visible",
    variants: variants,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_Projects__WEBPACK_IMPORTED_MODULE_6__["ProjectsNavigation"], {
    links: _Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"].getALl(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), children, (!isManticore || isProject || isServices) && __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_7__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_Sections__WEBPACK_IMPORTED_MODULE_4__["FooterSection"], {
    animation: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))));
};

/***/ }),

/***/ "./src/Components/index.js":
/*!*********************************!*\
  !*** ./src/Components/index.js ***!
  \*********************************/
/*! exports provided: TabWrap, HomePage, AboutPage, ServicesPage, BrandPage, OtherPage, LandingPage, CorporatePage, Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, Sizes, NewProjectsList, Portfolios, Services, InputControl, FullPageWrapper, FooterSection, MenuContainer, Header, MetaHead, Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, TeamModal, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, HorizontalScroll, MainWrapper */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ImageWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloStatue", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ApolloStatue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionWrapper"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["MainWrapper"]; });











/***/ })

})
//# sourceMappingURL=index.js.013150ed8c0efe587d12.hot-update.js.map