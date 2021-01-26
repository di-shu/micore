webpackHotUpdate("static/development/pages/projects/manticore.js",{

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

var MainStatue = '/images/Manticore/MainStatue.png';
var opt = {
  statueW: 610,
  statueH: 840,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0,
  bg: '#fff'
};
var optMobile = {
  statueW: 350,
  statueH: 480,
  statue: MainStatue,
  posX: 'right',
  posY: 'bottom',
  proportions: 'origin',
  offsetX: 0,
  offsetY: 0,
  bg: '#fff'
};

var MainSectionFooterContent = () => {
  var {
    minWidthLaptop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx("div", {
    className: "section-image-wrap main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(Sketch, {
    setup: minWidthLaptop ? Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["setup"])(opt) : Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["setup"])(optMobile),
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_1__["draw"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }));
};

var Main = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ProjectMainSection"], {
    id: "manticore",
    name: "Manticore",
    glitch: MainSectionFooterContent,
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  });
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
/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SectionLayout = props => {
  var {
    id,
    wrap = true,
    Header,
    Footer,
    children,
    className,
    sectionClassName,
    Glitch,
    customWrap = false
  } = props;
  var {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = () => {
    if (wrapper.current) {
      var elem = wrapper.current;

      if (window.scrollY > elem.getBoundingClientRect().height + 50) {
        setScrolled(false);
      } else if (window.scrollY < elem.getBoundingClientRect().height + 50) {
        setScrolled(true);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Glitch) {
      document.addEventListener('scroll', handleScroll);
    }
  }, []);
  return __jsx("section", {
    ref: wrapper,
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: id.includes('-main') ? 0 : 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "project-section__container ".concat(sectionClassName ? sectionClassName + '__container' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Header && __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 22
    }
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: "".concat(className ? className : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, Child))), Footer && __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }), Glitch && __jsx(Glitch, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 22
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=manticore.js.ac07b0968a6579c64fa9.hot-update.js.map