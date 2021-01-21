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
      lineNumber: 29,
      columnNumber: 9
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=manticore.js.0aacb4fb5dcdc65629cd.hot-update.js.map