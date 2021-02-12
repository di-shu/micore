webpackHotUpdate("static/development/pages/portfolio.js",{

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
  getByKeys: keys => {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(undefined.projects).filter(key => keys.includes(key)).reduce((obj, key) => {
      obj[key] = undefined.projects[key];
      return obj;
    });
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
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Tab/TabWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var CardWrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "TabWrap__CardWrap",
  componentId: "mv6inv-0"
})(["height:200px;display:flex;align-items:flex-end;overflow:hidden;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;transform:translateX(0);transition:all 1s cubic-bezier(0.64,0.04,0.35,1);transition-delay:", "s;background-color:#10151b;z-index:5;}"], props => props.delay);
var TabWrap = ({
  animation,
  tabs,
  isSlice,
  isSkills
}) => {
  var getProjects = arr => isSlice ? arr : arr.slice(0, 6);

  var {
    mobile,
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["useDeviceDetect"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    tabs.map(tab => tab.content && tab.content.map(content => content.delay = Number(Math.random().toFixed(2))));
  }, []);
  return __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Container, {
    id: "portfolio-tabs",
    defaultActiveKey: tabs[0].key,
    transition: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "pills",
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["AnimationClass"])({
      animation,
      className: 'tab-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, ['Все', 'web-sites', 'ui/ux'].map((tab, index) => __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    key: "".concat(tab.key, "_").concat(index),
    className: "tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    eventKey: tab.key,
    className: "tab-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, tab.label)))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["AnimationClass"])({
      animation,
      className: 'tab-content-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, tabs.map((tab, index) => __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Pane, {
    key: "tab_".concat(index),
    eventKey: tab.key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, isSkills ? __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultActiveKey: !mobile && 'panel1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, tab.content.map((content, index) => __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "skill_".concat(index),
    className: "skill-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
    className: "skill-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__["default"].Toggle, {
    as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Header,
    eventKey: mobile ? content.value : 'panel1',
    className: "skill-toggle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "skill-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, content.name), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ImageWrapper"], {
    src: content.icon,
    className: "skill-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }))), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_7__["default"].Collapse, {
    eventKey: mobile ? content.value : 'panel1',
    className: "skill-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
    className: "skill-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, __jsx("p", {
    className: "skill-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, content.description)))))) : __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, tab.content && getProjects(tab.content).map((content, index) => __jsx(CardWrap, {
    key: "card_".concat(index),
    xs: content.size.xs,
    md: content.size.md,
    lg: content.size.lg,
    xl: content.size.xl,
    delay: content.delay,
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["AnimationClass"])({
      animation,
      className: 'card-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ActiveLink"], {
    link: content.link,
    className: "project-nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_8__["ImageWrapper"], {
    src: content.img,
    className: "project-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx("h6", {
    className: "project-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, content.title), desktop && __jsx("p", {
    className: "project-link",
    children: "View project",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }))))))));
};

/***/ })

})
//# sourceMappingURL=portfolio.js.56a29f883d5360556cf4.hot-update.js.map