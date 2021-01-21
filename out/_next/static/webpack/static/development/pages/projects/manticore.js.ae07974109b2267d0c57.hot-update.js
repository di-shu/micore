webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Components/Pages/Config/BrandPageConfigs.js":
/*!*********************************************************!*\
  !*** ./src/Components/Pages/Config/BrandPageConfigs.js ***!
  \*********************************************************/
/*! exports provided: MainStatue, Quotes, BrandingStages, StatueOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainStatue", function() { return MainStatue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return Quotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandingStages", function() { return BrandingStages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatueOptions", function() { return StatueOptions; });
var Sources = '/images/Services/Branding/Icons/Sources.svg';
var Briefing = '/images/Services/Branding/Icons/Brifing.svg';
var ActBrief = '/images/Services/Branding/Icons/ActBrief.svg';
var Creating = '/images/Services/Branding/Icons/Creating.svg';
var FormStyle = '/images/Services/Branding/Icons/FormStyle.svg';
var Miscalculation = '/images/Services/Branding/Icons/Miscalculation.svg';
var MainStatue = '/images/Services/Branding/MainStatue.png';
var Quotes = ['Мы не опаздываем потому, что не спешим. Проекты в срок.', 'Предыдущая цитата ложь, неверьте ей!', 'Лэндинги у нас получаются иногда СЛИШКОМ большими.', 'Давайте сделаем лендинг на реакте!', 'Иногда при скролле лендинга может поломаться колесеко от мышки, но МЫ его сможем починить!', 'Здесь должна была быть какая то цитата, но контентмэйкер забил на нее. Теперь ей грустно :(', 'Если вам попалась эта цитата, знайте, вы сейчас смотрите сайт!', 'У нас работает акция! Купи один лэндинг по цене двух! Как-то так.', 'Анимации очень ценятся на лендингах, но больше ценятся те, кто их делает. Берегите своих разработчиков!'];
var BrandingStages = [{
  img: Briefing,
  name: 'Брифинг'
}, {
  img: Miscalculation,
  name: 'Просчет'
}, {
  img: ActBrief,
  name: 'Подписание договора и брифа'
}, {
  img: Creating,
  name: 'Создание логотипа'
}, {
  img: FormStyle,
  name: 'Создание элементов фирменного стиля'
}, {
  img: Sources,
  name: 'Передача исходников'
}];
var StatueOptions = {
  statueW: 610,
  statueH: 840,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0
};

/***/ }),

/***/ "./src/Components/Sections/Projects/Manticore/Main.js":
/*!************************************************************!*\
  !*** ./src/Components/Sections/Projects/Manticore/Main.js ***!
  \************************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pages_Config_BrandPageConfigs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Pages/Config/BrandPageConfigs */ "./src/Components/Pages/Config/BrandPageConfigs.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/Sections/Projects/Manticore/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-p5 */ "./node_modules/react-p5/build/index.js")],
    modules: ['react-p5']
  }
});
/*IMAGES*/

var MainImg = '/images/ManticoreProject/MainStatue.png';
var setup = {
  statueW: 610,
  statueH: 840,
  statue: _Pages_Config_BrandPageConfigs__WEBPACK_IMPORTED_MODULE_4__["MainStatue"],
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0
};

var MainSectionFooterContent = () => {
  var {
    minWidthLaptop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return minWidthLaptop ? __jsx(Sketch, {
    setup: setup,
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_1__["draw"],
    className: "section-image-wrap main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }) : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    src: MainImg,
    className: "main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  });
};

var Main = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ProjectMainSection"], {
    id: "manticore",
    name: "Manticore",
    content: MainSectionFooterContent,
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
};

/***/ })

})
//# sourceMappingURL=manticore.js.ae07974109b2267d0c57.hot-update.js.map