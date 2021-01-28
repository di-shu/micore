webpackHotUpdate("static/development/pages/services/landing.js",{

/***/ "./src/Components/SectionsComponents/Services/ServiceQuote.js":
/*!********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceQuote.js ***!
  \********************************************************************/
/*! exports provided: ServiceQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return ServiceQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/Services/ServiceQuote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var QuoteCommas = '/images/Services/LandingPage/QuoteCommas.svg';
var ServiceQuote = ({
  quotes
}) => {
  var {
    0: randIndex,
    1: setRandIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  var {
    0: word,
    1: setWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Упс, цитатки закончились :(');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // setRandIndex(Math.floor(Math.random() * quotes.length))
    handleGenerate();
  }, []);

  var handleGenerate = () => {
    var getRandNumb = Math.floor(Math.random() * quotes.length); // const $quote = $('.quote-text')
    // $quote.removeClass('show')
    // $($quote[getRandNumb]).addClass('show')

    if (quotes.length !== 0) {
      setWord(quotes.pop());
    } else {
      setWord('Упс, цитатки закончились :(');
    }
  };

  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "service-quote-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "quote-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: QuoteCommas,
    className: "quote-commas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["MyScrollAnimation"], {
    delay: [0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "quote-text show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }
  }, word))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["MyScrollAnimation"], {
    delay: [200],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "custom-btn",
    onClick: handleGenerate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 79
    }
  }, "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
};

/***/ })

})
//# sourceMappingURL=landing.js.16101072e8788dbd788c.hot-update.js.map