webpackHotUpdate("static/development/pages/services/landing.js",{

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
  getSlicedTabs: function getSlicedTabs(sliceCount = 6) {
    return this.getTabs().map(tab => {
      tab.content.length > 0 && tab.content.slice(0, sliceCount);
      return tab; // return { ...tab, content: tab.content.slice(0, sliceCount) }
    });
  },
  getTabs: function getTabs() {
    return [{
      label: 'Все',
      content: this.getALl()
    }, {
      label: 'web-sites',
      content: this.getALl()
    }, {
      label: 'only ux/ui',
      content: this.getUIUX()
    }, {
      label: 'branding',
      content: this.getBranding()
    }];
  },
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

/***/ })

})
//# sourceMappingURL=landing.js.f918d06724b86477fc54.hot-update.js.map