webpackHotUpdate("static/development/pages/services.js",{

/***/ "./src/Components/SectionsComponents/Services/ServiceMainSection.js":
/*!**************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceMainSection.js ***!
  \**************************************************************************/
/*! exports provided: ServiceMainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return ServiceMainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/Services/ServiceMainSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-p5 */ "./node_modules/react-p5/build/index.js")],
    modules: ['react-p5']
  }
});

var SectionHeader = ({
  statue,
  options
}) => {
  var {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  var {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleScroll = () => {
    console.log(wrapper.current);

    if (wrapper.current) {
      var elem = wrapper.current;
      console.log(elem.getBoundingClientRect().height);

      if (window.scrollY > elem.getBoundingClientRect().height + 50) {
        setScrolled(false);
      } else if (window.scrollY < elem.getBoundingClientRect().height + 50) {
        setScrolled(true);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (statue) {
      document.addEventListener('scroll', handleScroll);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    delay: [400],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["ImageWrapper"], {
    isDot: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), desktop ? __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    ref: wrapper,
    animationName: "fadeIn",
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, scrolled ? __jsx(Sketch, {
    setup: Object(_Helpers__WEBPACK_IMPORTED_MODULE_4__["setup"])(options),
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_4__["draw"],
    className: "section-image-wrap main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }) : '') : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    animationName: "fadeIn",
    delay: [600],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["ImageWrapper"], {
    src: statue,
    className: "main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx(_ScrollBox__WEBPACK_IMPORTED_MODULE_2__["ScrollBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
};

var ServiceMainSection = ({
  title,
  desc,
  statue,
  statueParams
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionLayout"], {
    id: "service-main-section",
    Footer: () => __jsx(SectionHeader, {
      statue: statue,
      options: statueParams,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 60
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["MyScrollAnimation"], {
    delay: [0, 200],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionTitle"], {
    title: title,
    main: true,
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_5__["SectionDesc"], {
    isContentWhite: true,
    children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(desc),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })));
};

/***/ })

})
//# sourceMappingURL=services.js.232a962d5395f97dc732.hot-update.js.map