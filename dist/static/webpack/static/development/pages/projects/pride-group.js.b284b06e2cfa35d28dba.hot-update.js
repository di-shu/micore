webpackHotUpdate("static\\development\\pages\\projects\\pride-group.js",{

/***/ "./src/Helpers/useCheckBottom.js":
/*!***************************************!*\
  !*** ./src/Helpers/useCheckBottom.js ***!
  \***************************************/
/*! exports provided: useCheckBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckBottom", function() { return useCheckBottom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useCheckBottom = function useCheckBottom() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isBottom = _useState[0],
      setIsBottom = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('mount');
    window.addEventListener('scroll', windowScroll);
    return function () {
      console.log('unmount');
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);

  var windowScroll = function windowScroll() {
    var windowBottomPosition = window.scrollY + window.innerHeight;
    var pageBottomPosition = document.getElementsByTagName('main')[0].offsetHeight;
    console.log(windowBottomPosition, pageBottomPosition);
    console.log(windowBottomPosition === pageBottomPosition);

    if (windowBottomPosition === pageBottomPosition) {
      console.log('bottom');
      setIsBottom(true);
    } else {
      console.log('not bottom');
      setIsBottom(false);
    }
  };

  return isBottom;
};

/***/ })

})
//# sourceMappingURL=pride-group.js.b284b06e2cfa35d28dba.hot-update.js.map