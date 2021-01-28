webpackHotUpdate("static/development/pages/projects/vlady-design.js",{

/***/ "./src/Components/SectionsComponents/ImageWrapper.js":
/*!***********************************************************!*\
  !*** ./src/Components/SectionsComponents/ImageWrapper.js ***!
  \***********************************************************/
/*! exports provided: ImageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/ImageWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*IMAGES*/

var Dots = '/images/DotsGrey.png';
var ImageWrapper = props => {
  var {
    animate,
    className,
    src,
    alt,
    isDot = false,
    display = true,
    children,
    onClick
  } = props;
  return display && __jsx("div", {
    className: "".concat(animate ? 'animate' : '', " ").concat(isDot ? 'section-dots-wrap' : 'section-image-wrap', " ").concat(className ? className : ''),
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children, __jsx("img", {
    src: "".concat(isDot ? Dots : src),
    alt: isDot ? 'Dots' : alt ? alt : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=vlady-design.js.909211fb766859a4fc9b.hot-update.js.map