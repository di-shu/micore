webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Config/ProjectsList.js":
/*!***********************************************!*\
  !*** ./src/Components/Config/ProjectsList.js ***!
  \***********************************************/
/*! exports provided: Sizes, NewProjectsList, Portfolios, Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return Sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return NewProjectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolios", function() { return Portfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

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
var Sizes = {
  getMDSize: function getMDSize(index) {
    var md;

    if (index & 1) {
      md = 12 - 7;
      console.log('odd', index + 1);
    } else {
      md = 12 - 5;
      console.log('even', index + 1);
    }

    return md;
  }
};
var NewProjectsList = {
  projects: {
    pride_logistic: {
      img: PrideLogisticImage,
      title: 'Pride Logistic',
      link: '/projects/pride-logistic'
    },
    marinist: {
      title: 'Marinist',
      img: MarinistImage,
      link: '/projects/marinist'
    },
    vlady: {
      img: VladyDesignImage,
      title: 'Vlady design',
      link: '/projects/vlady-design'
    },
    fcbalkans: {
      img: FCBalkanyImage,
      title: 'FC Balkany',
      link: '/projects/balkany'
    },
    zlata_trade: {
      img: ZlataTradeImage,
      title: 'Zlata-trade',
      link: '/projects/zlata-trade'
    },
    bee_games: {
      img: BeeGamesImage,
      title: 'Bee Games',
      link: '/projects/bee-games'
    },
    two_are: {
      img: TwoAreImage,
      title: 'Two are',
      link: '/projects/two-are'
    },
    vip_yoga: {
      img: VipYogaImage,
      title: 'Vip Yoga',
      link: '/projects/vip-yoga'
    },
    pride_group: {
      img: PrideGroupImage,
      title: 'Pride group',
      link: '/projects/pride-group'
    },
    gastrobar: {
      title: 'Gastrobar',
      img: GastrobarImage,
      link: '/projects/gastrobar'
    },
    attic: {
      img: AtticImage,
      title: 'Attic stroy',
      link: '/projects/attic-stroy'
    },
    bessarabskiy: {
      img: BessarabskiyImage,
      title: 'Bessarabskiy dvorik',
      link: '/projects/bessarabskiy'
    }
  },
  getExcept: function getExcept(keys) {
    var newObj = this.getALl();
    keys.forEach(key => {
      delete newObj[key];
    });
    return newObj;
  },
  getALl: function getALl() {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, this.projects);
  },
  getByKeys: function getByKeys(keys) {
    var sorted = {};

    var res = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(this.projects).filter(key => keys.includes(key)).reduce((arr, key) => {
      arr[key] = this.projects[key];
      return arr;
    }, []);

    keys.map(item => {
      sorted[item] = res[item];
    });
    return sorted;
  }
};
var Portfolios = {
  getSlicedTabs: function getSlicedTabs(sliceCount = 6) {
    return this.getTabs().map(tab => {
      return _objectSpread({}, tab, {
        content: tab.content.slice(0, sliceCount)
      });
    });
  },
  getTabs: function getTabs() {
    return [{
      key: 'all',
      label: 'Все',
      content: this.getALl()
    }, {
      key: 'web-sites',
      label: 'web-sites',
      content: this.getWebSites()
    }, {
      key: 'ux/ui',
      label: 'only ux/ui',
      content: this.getUIUX()
    }, {
      key: 'branding',
      label: 'branding',
      content: this.getBranding()
    }];
  },
  getALl: function getALl() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getALl());
  },
  getWebSites: function getWebSites() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['zlata_trade', 'fcbalkans', 'pride_logistic', 'vlady', 'bessarabskiy', 'marinist']));
  },
  getUIUX: function getUIUX() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['bee_games', 'attic']));
  },
  getBranding: function getBranding() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getExcept(['bee_games']));
  }
};
var Services = {
  getLanding: function getLanding() {
    return NewProjectsList.getByKeys(['pride_logistic', 'vlady', 'bee_games']);
  },
  getCorporate: function getCorporate() {
    return NewProjectsList.getByKeys(['pride_group', 'marinist', 'zlata_trade']);
  },
  getBrand: function getBrand() {
    return NewProjectsList.getByKeys(['fcbalkans', 'zlata_trade', 'two_are']);
  },
  getOthers: function getOthers() {
    return NewProjectsList.getByKeys(['fcbalkans', 'marinist', 'pride_logistics']);
  }
};

/***/ }),

/***/ "./src/Components/Config/index.js":
/*!****************************************!*\
  !*** ./src/Components/Config/index.js ***!
  \****************************************/
/*! exports provided: Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, Sizes, NewProjectsList, Portfolios, Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socials */ "./src/Components/Config/Socials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _Socials__WEBPACK_IMPORTED_MODULE_0__["Socials"]; });

/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLink */ "./src/Components/Config/MenuLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinks", function() { return _MenuLink__WEBPACK_IMPORTED_MODULE_1__["MenuLinks"]; });

/* harmony import */ var _TeamList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamList */ "./src/Components/Config/TeamList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return _TeamList__WEBPACK_IMPORTED_MODULE_2__["TeamList"]; });

/* harmony import */ var _SkillsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkillsList */ "./src/Components/Config/SkillsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsList", function() { return _SkillsList__WEBPACK_IMPORTED_MODULE_3__["SkillsList"]; });

/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyle */ "./src/Components/Config/GlobalStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _GlobalStyle__WEBPACK_IMPORTED_MODULE_4__["GlobalStyle"]; });

/* harmony import */ var _ServicesList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServicesList */ "./src/Components/Config/ServicesList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesList", function() { return _ServicesList__WEBPACK_IMPORTED_MODULE_5__["ServicesList"]; });

/* harmony import */ var _ProjectsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectsList */ "./src/Components/Config/ProjectsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sizes", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["Sizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["NewProjectsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolios", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["Portfolios"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["Services"]; });









/***/ }),

/***/ "./src/Components/Tab/TabWrap.js":
/*!***************************************!*\
  !*** ./src/Components/Tab/TabWrap.js ***!
  \***************************************/
/*! exports provided: TabWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWrap", function() { return TabWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Tab/TabWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var CardWrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "TabWrap__CardWrap",
  componentId: "mv6inv-0"
})(["height:200px;display:flex;align-items:flex-end;overflow:hidden;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;transform:translateX(0);transition:all 1s cubic-bezier(0.64,0.04,0.35,1);transition-delay:", "s;background-color:#10151b;z-index:5;}"], props => props.delay);
var TabWrap = ({
  animation,
  tabs
}) => {
  var {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_7__["useDeviceDetect"])();
  return __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Container, {
    id: "portfolio-tabs",
    defaultActiveKey: tabs[0].key,
    transition: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "pills",
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_7__["AnimationClass"])({
      animation,
      className: 'tab-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, tabs.map((tab, index) => __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    key: "".concat(tab.key, "_").concat(index),
    className: "tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    eventKey: tab.key,
    className: "tab-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, tab.label)))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_7__["AnimationClass"])({
      animation,
      className: 'tab-content-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, tabs.map((tab, index) => __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Pane, {
    key: "tab_".concat(index),
    eventKey: tab.key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, tab.content.length > 0 && tab.content.map((content, index) => {
    return __jsx(CardWrap, {
      key: "card_".concat(index),
      xs: 12,
      md: _Config__WEBPACK_IMPORTED_MODULE_8__["Sizes"].getMDSize(index),
      lg: _Config__WEBPACK_IMPORTED_MODULE_8__["Sizes"].getMDSize(index),
      xl: _Config__WEBPACK_IMPORTED_MODULE_8__["Sizes"].getMDSize(index),
      delay: content.delay,
      className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_7__["AnimationClass"])({
        animation,
        className: 'card-wrap'
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["ActiveLink"], {
      link: content.link,
      className: "project-nav-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"], {
      src: content.img,
      className: "project-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx("h6", {
      className: "project-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, content.title), desktop && __jsx("p", {
      className: "project-link",
      children: "View project",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }
    }));
  }))))));
}; // <Accordion defaultActiveKey={!mobile && 'panel1'}>
//   {tab.content.length > 0 && tab.content.map((content, index) => (
//     <Card key={`skill_${index}`} className="skill-row">
//       <Card.Header className="skill-header">
//         <Accordion.Toggle as={Card.Header} eventKey={mobile ? content.value : 'panel1'} className="skill-toggle">
//           <p className="skill-name">{content.name}</p>
//           <ImageWrapper src={content.icon} className="skill-icon"/>
//         </Accordion.Toggle>
//       </Card.Header>
//       <Accordion.Collapse eventKey={mobile ? content.value : 'panel1'} className="skill-collapse">
//         <Card.Body className="skill-body">
//           <p className="skill-description">{content.description}</p>
//         </Card.Body>
//       </Accordion.Collapse>
//     </Card>
//   ))}
// </Accordion>

/***/ }),

/***/ "./src/Components/index.js":
/*!*********************************!*\
  !*** ./src/Components/index.js ***!
  \*********************************/
/*! exports provided: HomePage, AboutPage, ServicesPage, BrandPage, OtherPage, LandingPage, CorporatePage, Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, Sizes, NewProjectsList, Portfolios, Services, FullPageWrapper, FooterSection, Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, MyScrollAnimation, TeamModal, InputControl, MenuContainer, Header, MetaHead, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection, TabWrap */
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











/***/ })

})
//# sourceMappingURL=index.js.0ae13c5a064d14d669e6.hot-update.js.map