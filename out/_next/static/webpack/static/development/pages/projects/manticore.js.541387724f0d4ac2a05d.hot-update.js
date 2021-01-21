webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Components/SectionsComponents/SectionInfo.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionInfo.js ***!
  \**********************************************************/
/*! exports provided: SectionTitle, SectionDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDesc", function() { return SectionDesc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/SectionInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SectionTitle = props => {
  var {
    title,
    children,
    main = false,
    className,
    isContentWhite,
    display = true
  } = props;
  var customClassName = "section-title ".concat(className ? className : '', " ").concat(isContentWhite ? 'is-white' : '');
  return display && main ? __jsx("h1", {
    className: customClassName,
    children: title || children,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }) : __jsx("h6", {
    className: customClassName,
    children: title || children,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  });
};
var SectionDesc = props => {
  var {
    children,
    withDot,
    className,
    isContentWhite,
    display = true
  } = props;
  var FloatText = 'Прошло три года с момента старта разработки нашего бренда. И вот 2020й, официальный запуск нашего сайта и соц. сетей.\n' + 'Мы хотим рассказать сторителлинг и показать как мы создали себя. Показать наш длинный путь в три года и поделиться нашими эмоциями. We are MantiCore Development.';
  var customClassName = "section-desc ".concat(className ? className : '', " ").concat(withDot ? 'with-dot' : '', " ").concat(isContentWhite ? 'is-white' : '');
  return display && __jsx("p", {
    className: customClassName,
    children: children ? children : FloatText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  });
};

/***/ })

})
//# sourceMappingURL=manticore.js.541387724f0d4ac2a05d.hot-update.js.map