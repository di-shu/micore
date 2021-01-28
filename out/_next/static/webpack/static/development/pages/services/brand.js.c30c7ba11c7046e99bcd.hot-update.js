webpackHotUpdate("static/development/pages/services/brand.js",{

/***/ "./src/Components/SectionsComponents/Services/ServiceMainSection.js":
/*!**************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceMainSection.js ***!
  \**************************************************************************/
/*! exports provided: ServiceMainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return ServiceMainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/Services/ServiceMainSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-p5 */ "./node_modules/react-p5/build/index.js")],
    modules: ['react-p5']
  }
});

var SectionHeader = ({
  statue,
  options
}) => {
  var {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  var {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = () => {
    if (wrapper.current) {
      var elem = wrapper.current;

      if (window.scrollY > elem.getBoundingClientRect().height + 50) {
        setScrolled(false);
      } else if (window.scrollY < elem.getBoundingClientRect().height + 50) {
        setScrolled(true);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (statue) {
      console.log('ss');
      document.addEventListener('scroll', handleScroll);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    delay: [400],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["ImageWrapper"], {
    isDot: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), desktop ? __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    ref: wrapper,
    animationName: "fadeIn",
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, statue && scrolled ? __jsx(Sketch, {
    setup: Object(_Helpers__WEBPACK_IMPORTED_MODULE_4__["setup"])(options),
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_4__["draw"],
    className: "section-image-wrap main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 35
    }
  }) : '') : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    animationName: "fadeIn",
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["ImageWrapper"], {
    src: statue,
    className: "main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_ScrollBox__WEBPACK_IMPORTED_MODULE_2__["ScrollBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
};

var ServiceMainSection = ({
  title,
  desc,
  statue,
  statueParams
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionLayout"], {
    id: "service-main-section",
    Footer: () => __jsx(SectionHeader, {
      statue: statue,
      options: statueParams,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 60
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    delay: [0, 200],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionTitle"], {
    title: title,
    main: true,
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionDesc"], {
    isContentWhite: true,
    children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(desc),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/index.js":
/*!****************************************************!*\
  !*** ./src/Components/SectionsComponents/index.js ***!
  \****************************************************/
/*! exports provided: Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, HorizontalScroll, ServiceMainSection */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceShortPortfolio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServicePriceMiscalculations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceMainSection"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalScroll", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["HorizontalScroll"]; });

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

















/***/ }),

/***/ "./src/Components/index.js":
/*!*********************************!*\
  !*** ./src/Components/index.js ***!
  \*********************************/
/*! exports provided: HomePage, AboutPage, ServicesPage, BrandPage, OtherPage, LandingPage, CorporatePage, Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, Sizes, NewProjectsList, Portfolios, Services, FullPageWrapper, FooterSection, Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, TabWrap, TeamModal, InputControl, MenuContainer, Header, MetaHead, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, HorizontalScroll, ServiceMainSection */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["SectionWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyScrollAnimation", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["MyScrollAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkStages"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceMainSection"]; });











/***/ })

})
//# sourceMappingURL=brand.js.c30c7ba11c7046e99bcd.hot-update.js.map