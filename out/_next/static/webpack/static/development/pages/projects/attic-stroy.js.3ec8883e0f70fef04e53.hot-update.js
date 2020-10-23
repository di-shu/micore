webpackHotUpdate("static/development/pages/projects/attic-stroy.js",{

/***/ "./src/Components/Sections/Projects/Attic/Config/MobileFooterContent.js":
/*!******************************************************************************!*\
  !*** ./src/Components/Sections/Projects/Attic/Config/MobileFooterContent.js ***!
  \******************************************************************************/
/*! exports provided: SectionFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionFooter", function() { return SectionFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/Components/Sections/Projects/Attic/Config/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Sections/Projects/Attic/Config/MobileFooterContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* IMAGES */

var FooterHands = '/images/Attic/FooterHands.png';
var FooterHandFirst = '/images/Attic/FooterHandFirst.png';
var FooterHandSecond = '/images/Attic/FooterHandSecond.png';
var SectionFooter = () => {
  var {
    mobile
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["useDeviceDetect"])();
  return __jsx("div", {
    className: "footer-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionWrapper"], {
    className: "mobile-pages-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, _index__WEBPACK_IMPORTED_MODULE_4__["AtticMobile"].map((mobile, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    lg: 4,
    key: "mobile_page_".concat(index),
    className: "col-mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "row-mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 6,
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: mobile.image,
    className: "mobile-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 6,
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: mobile.title,
    className: "mobile-title",
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }))))))), mobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: FooterHandFirst,
    className: "footer-hand-first",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: FooterHandSecond,
    className: "footer-hand-second",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  })) : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: FooterHands,
    className: "footer-hands-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    isDot: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["BottomNavigation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/Attic/Config/index.js":
/*!****************************************************************!*\
  !*** ./src/Components/Sections/Projects/Attic/Config/index.js ***!
  \****************************************************************/
/*! exports provided: AtticAboutInfo, AtticPages, AtticColors, BrandingInfo, BrandingSlides, AtticAboutSiteInfo, AtticIcons, AtticTablet, AtticMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticAboutInfo", function() { return AtticAboutInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticPages", function() { return AtticPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticColors", function() { return AtticColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandingInfo", function() { return BrandingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandingSlides", function() { return BrandingSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticAboutSiteInfo", function() { return AtticAboutSiteInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticIcons", function() { return AtticIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticTablet", function() { return AtticTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticMobile", function() { return AtticMobile; });
var Menu = '/images/Attic/MenuPage.png';
var Building = '/images/Attic/BuildingPage.png';
var SlideBlanc = '/images/Attic/SlideBlanc.png';
var MobileMenu = '/images/Attic/MobileMenu.png';
var Portfolio = '/images/Attic/PortfolioPage.png';
var TabletAbout = '/images/Attic/TabletAbout.png';
var HouseRectangle = '/images/Attic/HouseRectangle.svg';
var MobileHomePage = '/images/Attic/MobileHomePage.png';
var MobileContacts = '/images/Attic/MobileContacts.png';
var TabletPortfolio = '/images/Attic/TabletPortfolio.png';
var HouseRectangleGold = '/images/Attic/HouseRectangleGold.svg';
var Icon1 = '/images/Attic/Icons/Icon1.svg';
var Icon2 = '/images/Attic/Icons/Icon2.svg';
var Icon3 = '/images/Attic/Icons/Icon3.svg';
var Icon4 = '/images/Attic/Icons/Icon4.svg';
var Icon5 = '/images/Attic/Icons/Icon5.svg';
var Icon6 = '/images/Attic/Icons/Icon6.svg';
var Icon7 = '/images/Attic/Icons/Icon7.svg';
var Icon8 = '/images/Attic/Icons/Icon8.svg';
var Icon9 = '/images/Attic/Icons/Icon9.svg';
var Icon10 = '/images/Attic/Icons/Icon10.svg';
var Icon11 = '/images/Attic/Icons/Icon11.svg';
var Icon12 = '/images/Attic/Icons/Icon12.svg';
var Icon13 = '/images/Attic/Icons/Icon13.svg';
var Icon14 = '/images/Attic/Icons/Icon14.svg';
var Icon15 = '/images/Attic/Icons/Icon15.svg';
var AtticAboutInfo = ['Type something', 'Type something', 'Type something', 'Type something', 'Type something', 'Type something'];
var AtticPages = [{
  title: 'Портфолио',
  image: Portfolio,
  desc: 'Доверие пользователя - важный критерий конверсии. При подборе подрядчика многие обращают внимание на уже ' + 'сделанные работы'
}, {
  title: 'Строительство и ремонт',
  image: Building,
  desc: 'Отдельные посадочные страницы под основные услуги были необходимы для разделения целевой аудитории и трафика'
}, {
  title: 'Меню',
  image: Menu,
  desc: 'Для уменьшения деталей в шапке сайта, чтобы сосредоточить пользователя на контенте, мы использовали минимализм'
}];
var AtticColors = [{
  size: 12,
  image: HouseRectangle,
  hex: '#201600',
  CMYK: 'CMYK: 66, 71, 70, 89%',
  fullName: 'PANTONE Black C',
  colorName: 'dark brown'
}, {
  size: 12,
  image: HouseRectangleGold,
  hex: '#AB814B',
  CMYK: 'CMYK: 23, 49, 76, 12%',
  fullName: 'Gold Gradient',
  colorName: 'gold gradient'
}];
var BrandingInfo = ['Type something', 'Type something', 'Type something', 'Type something', 'Type something', 'Type something'];
var BrandingSlides = [{
  img: SlideBlanc
}, {
  img: SlideBlanc
}, {
  img: SlideBlanc
}, {
  img: SlideBlanc
}, {
  img: SlideBlanc
}];
var AtticAboutSiteInfo = ['Type something', 'Type something', 'Type something', 'Type something', 'Type something', 'Type something'];
var AtticIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12, Icon13, Icon14, Icon15];
var AtticTablet = [{
  title: 'О компании',
  image: TabletAbout,
  desc: 'На этой странице можно найти такие блоки как: миссия и цель компании, этапы работы, вопрос-ответ, стоимость ' + 'и оплата для подробного ознакомления с компанией'
}, {
  title: 'Адаптация',
  image: TabletPortfolio,
  desc: 'Все страница адаптированы под множество устройств. Мы также отрисовали отдельные макеты под телефон и планшет'
}];
var AtticMobile = [{
  title: 'Menu',
  image: MobileMenu
}, {
  title: 'Home page',
  image: MobileHomePage
}, {
  title: 'Contacts',
  image: MobileContacts
}];

/***/ })

})
//# sourceMappingURL=attic-stroy.js.3ec8883e0f70fef04e53.hot-update.js.map