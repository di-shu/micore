webpackHotUpdate("static\\development\\pages\\projects\\pride-group.js",{

/***/ "./src/Components/Sections/Projects/PrideGroup/Branding.js":
/*!*****************************************************************!*\
  !*** ./src/Components/Sections/Projects/PrideGroup/Branding.js ***!
  \*****************************************************************/
/*! exports provided: Branding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branding", function() { return Branding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/PrideGroup/Config/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\PrideGroup\\Branding.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

var BrandingBG = '/Assets/Images/PrideGroup/BrandingBG.png';
var Branding = function Branding() {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["SectionLayout"], {
    id: "pride-group-branding",
    customWrap: true,
    Footer: function Footer() {
      return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["SectionSlider"], {
        slides: _Config__WEBPACK_IMPORTED_MODULE_1__["PrideGroupSlides"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "branding-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    src: BrandingBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["SectionWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
    title: "Branding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["SectionDesc"], {
    withDot: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/SectionLayout.js":
/*!************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionLayout.js ***!
  \************************************************************/
/*! exports provided: SectionLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return SectionLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionWrapper */ "./src/Components/SectionsComponents/SectionWrapper.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SectionLayout = function SectionLayout(props) {
  var id = props.id,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? true : _props$wrap,
      Header = props.Header,
      Footer = props.Footer,
      children = props.children,
      className = props.className,
      sectionClassName = props.sectionClassName,
      _props$customWrap = props.customWrap,
      customWrap = _props$customWrap === void 0 ? false : _props$customWrap;
  return __jsx("section", {
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, Header && __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), children && (wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: className ? className : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children) : customWrap ? children : children.map(function (Child, index) {
    return __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
      key: index,
      className: Child.props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, Child);
  })), Footer && __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=pride-group.js.1ebc8810b5a4ac68b1c2.hot-update.js.map