webpackHotUpdate("static/development/pages/projects/manticore.js",{

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
  var {
    0: isBottom,
    1: setIsBottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleIn = e => {
    console.log('in');
    console.log(e.target);
  };

  var handleScroll = e => {
    var window = e.currentTarget; // const windowBottomPosition = Math.round(wrapper.current.scrollY + wrapper.current.innerHeight)
    // console.log(windowBottomPosition)

    if (wrapper.current.getBoundingClientRect().top <= 0) {
      setIsBottom(true);
      window.scrollTo(0, 4107);
      console.log(Number(wrapper.current.getBoundingClientRect().bottom));
      console.log(wrapper.current.getBoundingClientRect().left);
    }
  };

  var setHandler = () => {
    console.log('isBottom');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isBottom && setHandler();
  }, [isBottom]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return __jsx("div", {
    ref: wrapper,
    onScroll: handleScroll,
    className: "horizontal-scroll ".concat(className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=manticore.js.9deda882bbe690aff349.hot-update.js.map