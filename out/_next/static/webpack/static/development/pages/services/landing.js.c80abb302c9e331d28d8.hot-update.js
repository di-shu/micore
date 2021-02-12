webpackHotUpdate("static/development/pages/services/landing.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./src/Components/Config/ProjectsList.js":
/*!***********************************************!*\
  !*** ./src/Components/Config/ProjectsList.js ***!
  \***********************************************/
/*! exports provided: AllProjects, NewProjectsList, Portfolios, Services, ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProjects", function() { return AllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return NewProjectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolios", function() { return Portfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return ProjectsList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);



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
  getExcept: function getExcept(keys) {
    var newObj = this.getALl();
    keys.forEach(key => {
      delete newObj[key];
    });
    return newObj;
  },
  getALl: function getALl() {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.projects);
  },
  getByKeys: function getByKeys(keys) {
    var sorted = [];

    var res = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.projects).filter(key => keys.includes(key)).reduce((arr, key) => {
      arr[key] = this.projects[key];
      return arr;
    }, []);

    keys.map((item, index) => {
      sorted[index] = res[item];
    });
    return sorted;
  }
};
var Portfolios = {
  getALl: function getALl() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(NewProjectsList.getALl());
  },
  getWebSites: function getWebSites() {
    return NewProjectsList.getByKeys(['zlata_trade', 'fcbalkans', 'pride_logistics', 'vlady', 'bessarabskiy', 'marinist']);
  },
  getUIUX: function getUIUX() {
    return NewProjectsList.getByKeys(['bee_games', 'attic']);
  },
  getBranding: function getBranding() {
    return NewProjectsList.getExcept(['bee_games']);
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

/***/ "./src/Components/Sections/HomePage/HomePortfolio.js":
/*!***********************************************************!*\
  !*** ./src/Components/Sections/HomePage/HomePortfolio.js ***!
  \***********************************************************/
/*! exports provided: HomePortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePortfolio", function() { return HomePortfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tab */ "./src/Components/Tab/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Styles_Pages_portfolio_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Styles/Pages/portfolio.scss */ "./src/Styles/Pages/portfolio.scss");
/* harmony import */ var _Styles_Pages_portfolio_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles_Pages_portfolio_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Styles_Sections_Home_portfolio_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Styles/Sections/Home/portfolio.scss */ "./src/Styles/Sections/Home/portfolio.scss");
/* harmony import */ var _Styles_Sections_Home_portfolio_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Home_portfolio_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Sections/HomePage/HomePortfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* STYLES */




var HomePortfolio = ({
  animation,
  isPortfolio
}) => {
  console.log(_Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"].getALl(), _Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"].getBranding(), _Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"].getUIUX());
  return __jsx("section", {
    id: "portfolio-section",
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_Tab__WEBPACK_IMPORTED_MODULE_1__["TabWrap"], {
    tabs: _Config__WEBPACK_IMPORTED_MODULE_3__["ProjectsList"],
    animation: animation,
    isSlice: isPortfolio,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), !isPortfolio && __jsx("div", {
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["AnimationClass"])({
      animation,
      className: 'link-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: "/portfolio",
    className: "see-all-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435"))));
};

/***/ })

})
//# sourceMappingURL=landing.js.c80abb302c9e331d28d8.hot-update.js.map