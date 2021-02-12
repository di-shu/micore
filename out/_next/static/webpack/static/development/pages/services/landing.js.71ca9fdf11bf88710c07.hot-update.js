webpackHotUpdate("static/development/pages/services/landing.js",{

/***/ "./src/Components/Config/ProjectsList.js":
/*!***********************************************!*\
  !*** ./src/Components/Config/ProjectsList.js ***!
  \***********************************************/
/*! exports provided: AllProjects, NewProjectsList, ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProjects", function() { return AllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return NewProjectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return ProjectsList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

var AtticImage = '/images/Portfolio/attic.jpg';
var TwoAreImage = '/images/Portfolio/twoare.jpg';
var VipYogaImage = '/images/Portfolio/yoga.jpg';
var MarinistImage = '/images/Portfolio/Marinist.jpg';
var GastrobarImage = '/images/Portfolio/gastrobar.jpg';
var BessarabskiyImage = '/images/Portfolio/dvorik.jpg';
var BeeGamesImage = '/images/Portfolio/beegame.jpg';
var FCBalkanyImage = '/images/Portfolio/fcbalkans.jpg';
var PrideGroupImage = '/images/Portfolio/pride_group.jpg';
var ZlataTradeImage = '/images/Portfolio/zlata-trade.jpg';
var VladyDesignImage = '/images/Portfolio/vlady.jpg';
var PrideLogisticImage = '/images/Portfolio/pridelogistics.jpg';
var AllProjects = [{
  img: ZlataTradeImage,
  title: 'Zlata-trade',
  link: '/projects/zlata-trade'
}, {
  img: FCBalkanyImage,
  title: 'FC Balkany',
  link: '/projects/balkany'
}, {
  img: PrideLogisticImage,
  title: 'Pride Logistic',
  link: '/projects/pride-logistic'
}, {
  img: BeeGamesImage,
  title: 'Bee Games',
  link: '/projects/bee-games'
}, {
  isNavBlack: true,
  img: VladyDesignImage,
  title: 'Vlady design',
  link: '/projects/vlady-design'
}, {
  img: PrideGroupImage,
  title: 'Pride group',
  link: '/projects/pride-group'
}, {
  img: BessarabskiyImage,
  title: 'Bessarabskiy dvorik',
  link: '/projects/bessarabskiy'
}, {
  title: 'Marinist',
  img: MarinistImage,
  link: '/projects/marinist'
}, {
  title: 'Gastrobar',
  img: GastrobarImage,
  link: '/projects/gastrobar'
}, {
  img: TwoAreImage,
  title: 'Two are',
  link: '/projects/two-are'
}, {
  isNavBlack: true,
  img: VipYogaImage,
  title: 'Vip Yoga',
  link: '/projects/vip-yoga'
}, {
  img: AtticImage,
  title: 'Attic stroy',
  link: '/projects/attic-stroy'
}];
var NewProjectsList = {
  projects: {
    pride_logistic: {
      img: PrideLogisticImage,
      title: 'Pride Logistic',
      link: '/projects/pride-logistic',
      size: {
        xs: 12,
        md: 7,
        lg: 5,
        xl: 3
      }
    },
    marinist: {
      title: 'Marinist',
      img: MarinistImage,
      link: '/projects/marinist',
      size: {
        xs: 12,
        md: 7,
        lg: 2,
        xl: 4
      }
    },
    vlady: {
      img: VladyDesignImage,
      title: 'Vlady design',
      link: '/projects/vlady-design',
      size: {
        xs: 12,
        md: 5,
        lg: 4,
        xl: 4
      }
    },
    fcbalkans: {
      img: FCBalkanyImage,
      title: 'FC Balkany',
      link: '/projects/balkany',
      size: {
        xs: 12,
        md: 7,
        lg: 2,
        xl: 4
      }
    },
    zlata_trade: {
      img: ZlataTradeImage,
      title: 'Zlata-trade',
      link: '/projects/zlata-trade',
      size: {
        xs: 12,
        md: 5,
        lg: 5,
        xl: 5
      }
    },
    bee_games: {
      img: BeeGamesImage,
      title: 'Bee Games',
      link: '/projects/bee-games',
      size: {
        xs: 12,
        md: 5,
        lg: 4,
        xl: 4
      }
    },
    two_are: {
      img: TwoAreImage,
      title: 'Two are',
      link: '/projects/two-are',
      size: {
        xs: 12,
        md: 5,
        lg: 4,
        xl: 4
      }
    },
    vip_yoga: {
      img: VipYogaImage,
      title: 'Vip Yoga',
      link: '/projects/vip-yoga',
      size: {
        xs: 12,
        md: 5,
        lg: 4,
        xl: 4
      }
    },
    pride_group: {
      img: PrideGroupImage,
      title: 'Pride group',
      link: '/projects/pride-group',
      size: {
        xs: 12,
        md: 7,
        lg: 4,
        xl: 4
      }
    },
    gastrobar: {
      title: 'Gastrobar',
      img: GastrobarImage,
      link: '/projects/gastrobar',
      size: {
        xs: 12,
        md: 7,
        lg: 5,
        xl: 3
      }
    },
    attic: {
      img: AtticImage,
      title: 'Attic stroy',
      link: '/projects/attic-stroy',
      size: {
        xs: 12,
        md: 7,
        lg: 4,
        xl: 4
      }
    },
    bessarabskiy: {
      img: BessarabskiyImage,
      title: 'Bessarabskiy dvorik',
      link: '/projects/bessarabskiy',
      size: {
        xs: 12,
        md: 5,
        lg: 5,
        xl: 5
      }
    }
  },
  getByKeys: function getByKeys(keys) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.projects).filter(key => keys.includes(key)).reduce((obj, key, index) => {
      obj[index] = this.projects[key];
      return obj;
    }, []);
  }
};
var Services = {
  getLanding: function getLanding() {
    return NewProjectsList.getByKeys(['']);
  }
};
var ProjectsList = [{
  key: 'all',
  label: 'Все',
  content: [{
    img: PrideLogisticImage,
    title: 'Pride Logistic',
    link: '/projects/pride-logistic',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 3
    }
  }, {
    title: 'Marinist',
    img: MarinistImage,
    link: '/projects/marinist',
    size: {
      xs: 12,
      md: 7,
      lg: 2,
      xl: 4
    }
  }, {
    isNavBlack: true,
    img: VladyDesignImage,
    title: 'Vlady design',
    link: '/projects/vlady-design',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: FCBalkanyImage,
    title: 'FC Balkany',
    link: '/projects/balkany',
    size: {
      xs: 12,
      md: 7,
      lg: 2,
      xl: 4
    }
  }, {
    img: ZlataTradeImage,
    title: 'Zlata-trade',
    link: '/projects/zlata-trade',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 5
    }
  }, {
    img: BeeGamesImage,
    title: 'Bee Games',
    link: '/projects/bee-games',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: TwoAreImage,
    title: 'Two are',
    link: '/projects/two-are',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    isNavBlack: true,
    img: VipYogaImage,
    title: 'Vip Yoga',
    link: '/projects/vip-yoga',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: PrideGroupImage,
    title: 'Pride group',
    link: '/projects/pride-group',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    title: 'Gastrobar',
    img: GastrobarImage,
    link: '/projects/gastrobar',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 3
    }
  }, {
    img: AtticImage,
    title: 'Attic stroy',
    link: '/projects/attic-stroy',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: BessarabskiyImage,
    title: 'Bessarabskiy dvorik',
    link: '/projects/bessarabskiy',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 5
    }
  }]
}, {
  key: 'web-sites',
  label: 'Web-sites',
  content: [{
    img: ZlataTradeImage,
    title: 'Zlata-trade',
    link: '/projects/zlata-trade',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 5
    }
  }, {
    img: FCBalkanyImage,
    title: 'FC Balkany',
    link: '/projects/balkany',
    size: {
      xs: 12,
      md: 7,
      lg: 2,
      xl: 4
    }
  }, {
    img: PrideLogisticImage,
    title: 'Pride Logistic',
    link: '/projects/pride-logistic',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 3
    }
  }, {
    isNavBlack: true,
    img: VladyDesignImage,
    title: 'Vlady design',
    link: '/projects/vlady-design',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: BessarabskiyImage,
    title: 'Bessarabskiy dvorik',
    link: '/projects/bessarabskiy',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    title: 'Marinist',
    img: MarinistImage,
    link: '/projects/marinist',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }]
}, {
  key: 'ux/ui',
  label: 'only ux/ui',
  content: [{
    img: BeeGamesImage,
    title: 'Bee Games',
    link: '/projects/bee-games',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 5
    }
  }, {
    img: AtticImage,
    title: 'Attic stroy',
    link: '/projects/attic-stroy',
    size: {
      xs: 12,
      md: 7,
      lg: 2,
      xl: 4
    }
  }]
}, {
  key: 'branding',
  label: 'branding',
  content: [{
    img: BeeGamesImage,
    title: 'Bee Games',
    link: '/projects/bee-games',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 5
    }
  }, {
    title: 'Gastrobar',
    img: GastrobarImage,
    link: '/projects/gastrobar',
    size: {
      xs: 12,
      md: 7,
      lg: 2,
      xl: 4
    }
  }, {
    img: ZlataTradeImage,
    title: 'Zlata-trade',
    link: '/projects/zlata-trade',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 3
    }
  }, {
    img: FCBalkanyImage,
    title: 'FC Balkany',
    link: '/projects/balkany',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: PrideLogisticImage,
    title: 'Pride Logistic',
    link: '/projects/pride-logistic',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 4
    }
  }, {
    img: PrideGroupImage,
    title: 'Pride group',
    link: '/projects/pride-group',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: BessarabskiyImage,
    title: 'Bessarabskiy dvorik',
    link: '/projects/bessarabskiy',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 5
    }
  }, {
    title: 'Marinist',
    img: MarinistImage,
    link: '/projects/marinist',
    size: {
      xs: 12,
      md: 5,
      lg: 2,
      xl: 4
    }
  }, {
    img: TwoAreImage,
    title: 'Two are',
    link: '/projects/two-are',
    size: {
      xs: 12,
      md: 5,
      lg: 5,
      xl: 3
    }
  }, {
    isNavBlack: true,
    img: VipYogaImage,
    title: 'Vip Yoga',
    link: '/projects/vip-yoga',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: AtticImage,
    title: 'Attic stroy',
    link: '/projects/attic-stroy',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 4
    }
  }]
}];

/***/ }),

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
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "service-short-portfolio-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, content, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, projects.length > 0 && projects.map((project, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "short_project_".concat(index),
    className: "col-short-portfolio",
    xs: 12,
    md: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    delay: [400],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "short-portfolio-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
    link: project.link,
    className: "short-portfolio-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: project.img,
    className: "short-portfolio-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "short-portfolio-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, project.title)))))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["MyScrollAnimation"], {
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ActiveLink"], {
    link: "/portfolio",
    className: "custom-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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

















/***/ }),

/***/ "./src/Components/index.js":
/*!*********************************!*\
  !*** ./src/Components/index.js ***!
  \*********************************/
/*! exports provided: HomePage, AboutPage, ServicesPage, BrandPage, OtherPage, LandingPage, CorporatePage, Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, FullPageWrapper, FooterSection, Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, TabWrap, TeamModal, AllProjects, NewProjectsList, ProjectsList, InputControl, MenuContainer, Header, MetaHead, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, ServiceShortPortfolio */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllProjects", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["AllProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["NewProjectsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return _Config__WEBPACK_IMPORTED_MODULE_3__["ProjectsList"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceMainSection"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ServiceShortPortfolio"]; });











/***/ })

})
//# sourceMappingURL=landing.js.71ca9fdf11bf88710c07.hot-update.js.map