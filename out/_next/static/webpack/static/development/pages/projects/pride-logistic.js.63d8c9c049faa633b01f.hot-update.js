webpackHotUpdate("static/development/pages/projects/pride-logistic.js",{

/***/ "./src/Components/SectionsComponents/Projects/HorizontallScroll.js":
/*!*************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/HorizontallScroll.js ***!
  \*************************************************************************/
/*! exports provided: HorizontalScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalScroll", function() { return HorizontalScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/Projects/HorizontallScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var HorizontalScroll = ({
  children,
  className
}) => {
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleIn = e => {
    console.log('in');
    console.log(e.target);
  };

  var handleScroll = e => {
    var window = e.currentTarget;
    var windowBottomPosition = Math.round(window.scrollY + window.innerHeight);

    if (wrapper.current.getBoundingClientRect().top <= 0) {}
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScrolll);
    return () => {
      window.removeEventListener('scroll', handleScrolll);
    };
  }, []);
  return __jsx("div", {
    ref: wrapper,
    onScroll: handleScroll,
    className: "horizontal-scroll ".concat(className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, children);
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
    handleScroll,
    id,
    wrap = true,
    Header,
    Footer,
    children,
    className,
    sectionClassName,
    customWrap = false
  } = props;
  var elem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("section", {
    ref: elem,
    id: id,
    className: "project-section ".concat(sectionClassName ? sectionClassName : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_2__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: id.includes('-main') ? 0 : 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "project-section__container ".concat(sectionClassName ? sectionClassName + '__container' : ''),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Header && __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 22
    }
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: className ? className : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, Child))), Footer && __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 22
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=pride-logistic.js.63d8c9c049faa633b01f.hot-update.js.map