webpackHotUpdate("static/development/pages/_app.js",{

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
  getIterations: function getIterations(matches, index) {
    var needle = matches.length;
    var per = Math.floor(index / needle);
    var i = index - per * needle;
    return matches[i];
  },
  getMDSize: function getMDSize(index) {
    var matches = [7, 5, 5, 7];
    return this.getIterations(matches, index);
  },
  getLGSize: function getLGSize(index) {
    var matches = [5, 4, 3, 4, 4, 4];
    return this.getIterations(matches, index);
  },
  getXLSize: function getXLSize(index) {
    var matches = [5, 3, 4, 6, 3, 3];
    return this.getIterations(matches, index);
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
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['pride_logistic', 'vlady', 'bee_games']));
  },
  getCorporate: function getCorporate() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['pride_group', 'marinist', 'zlata_trade']));
  },
  getBrand: function getBrand() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['fcbalkans', 'zlata_trade', 'two_are']));
  },
  getOthers: function getOthers() {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(NewProjectsList.getByKeys(['fcbalkans', 'marinist', 'pride_logistics']));
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.e472f531960ddd9b73ce.hot-update.js.map