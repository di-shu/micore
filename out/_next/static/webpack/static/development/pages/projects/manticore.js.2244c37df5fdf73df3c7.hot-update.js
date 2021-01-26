webpackHotUpdate("static/development/pages/projects/manticore.js",{

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
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: id.includes('-main') ? 0 : 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "project-section__container ".concat(sectionClassName ? sectionClassName + '__container' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Header && __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 22
    }
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: "".concat(className ? className : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, Child))), Footer && __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 22
    }
  }), Glitch && __jsx(Glitch, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 24
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=manticore.js.2244c37df5fdf73df3c7.hot-update.js.map