webpackHotUpdate("static/development/pages/projects/balkany.js",{

/***/ "./src/Components/Sections/Projects/Balkany/Branding.js":
/*!**************************************************************!*\
  !*** ./src/Components/Sections/Projects/Balkany/Branding.js ***!
  \**************************************************************/
/*! exports provided: Branding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branding", function() { return Branding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/Balkany/Config/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/Sections/Projects/Balkany/Branding.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Branding = ({
  isSecond
}) => {
  var {
    laptop,
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "balkany-branding" // Footer={() =>
    //   isSecond ?
    //     <SectionSlider slidesToShow={1} slides={UniformSlides}/> :
    //     <SectionSlider slidesToShow={1} slides={BrandingSlides}/>
    // }
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    isDot: true,
    display: laptop || desktop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    title: isSecond ? 'Форма' : 'Брендинг',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionDesc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, isSecond ? 'Белый - еще один цвет футбольного клуба. Цвет истины, чистоты и победы. ' + 'В белой форме футболисты «Балкан» традиционно выступают на домашнем стадионе. ' : 'Новый стиль активно используется в сувенирной брендовой продукции клуба.'), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: "/images/Balkany/balkany_mockup2.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=balkany.js.4cf614c7d0f3660895d7.hot-update.js.map