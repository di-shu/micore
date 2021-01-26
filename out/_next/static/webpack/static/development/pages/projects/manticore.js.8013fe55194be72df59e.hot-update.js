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
  var {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  var {
    0: lastHeight,
    1: setLastHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('scroll', function () {
      if (wrapper.current) {
        var elem = wrapper.current;
        console.log(window.scrollY, elem.getBoundingClientRect().height + 50, lastHeight);

        if (window.scrollY > elem.getBoundingClientRect().height + 50) {
          setLastHeight(elem.getBoundingClientRect().height + 50);
          setScrolled(false);
        } else if (window.scrollY <= lastHeight) {
          setScrolled(true);
        }
      }
    });
  }, []);
  return __jsx("div", {
    ref: wrapper,
    className: "section-image-wrap main-statue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, scrolled ? __jsx(Sketch, {
    setup: minWidthLaptop ? Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["setup"])(opt) : Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["setup"])(optMobile),
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_1__["draw"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }) : '');
};

var Main = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ProjectMainSection"], {
    id: "manticore",
    name: "Manticore",
    content: MainSectionFooterContent,
    isContentWhite: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  });
};

/***/ })

})
//# sourceMappingURL=manticore.js.8013fe55194be72df59e.hot-update.js.map