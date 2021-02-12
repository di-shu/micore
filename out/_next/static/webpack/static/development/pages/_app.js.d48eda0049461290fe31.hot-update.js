webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/entries.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/entries.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/entries.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.entries;


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

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.entries.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.object.entries.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);


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
  getALl: function getALl() {
    return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.projects);
  },
  getByKeys: function getByKeys(keys) {
    var sorted = [];

    var res = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.projects).filter(key => keys.includes(key)).reduce((arr, key) => {
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
    return NewProjectsList.getALl();
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

/***/ "./src/Components/Config/index.js":
/*!****************************************!*\
  !*** ./src/Components/Config/index.js ***!
  \****************************************/
/*! exports provided: Socials, MenuLinks, TeamList, SkillsList, GlobalStyle, ServicesList, AllProjects, NewProjectsList, Portfolios, Services, ProjectsList */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllProjects", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["AllProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewProjectsList", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["NewProjectsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portfolios", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["Portfolios"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["Services"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_6__["ProjectsList"]; });









/***/ })

})
//# sourceMappingURL=_app.js.d48eda0049461290fe31.hot-update.js.map