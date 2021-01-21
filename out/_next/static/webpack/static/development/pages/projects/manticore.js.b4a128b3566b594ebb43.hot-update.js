webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Components/SectionsComponents/MainWrapper.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/MainWrapper.js ***!
  \**********************************************************/
/*! exports provided: MainWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/Components/SectionsComponents/Layout.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections */ "./src/Components/Sections/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
/* harmony import */ var _Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Styles/Static/general.scss */ "./src/Styles/Static/general.scss");
/* harmony import */ var _Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Styles_Static_general_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Styles/Includes/index.scss */ "./src/Styles/Includes/index.scss");
/* harmony import */ var _Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Styles_Includes_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Styles/Sections/Services/index.scss */ "./src/Styles/Sections/Services/index.scss");
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Styles/Sections/Projects/index.scss */ "./src/Styles/Sections/Projects/index.scss");
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/MainWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* STYLES */





var easing = [0.64, 0.04, 0.35, 1];
var variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: easing
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: easing
    }
  }
};
var MainWrapper = ({
  id,
  children
}) => {
  var {
    isProject,
    isServices,
    isManticore
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_5__["useCheckRoute"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    }, 100);
  }, []);
  console.log(isManticore);
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("main", {
    id: id,
    className: "main-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: "exit",
    initial: "hidden",
    animate: "visible",
    variants: variants,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_Projects__WEBPACK_IMPORTED_MODULE_6__["ProjectsNavigation"], {
    links: _Config__WEBPACK_IMPORTED_MODULE_3__["Portfolios"].getALl(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), children, !isManticore && (isProject || isServices) && __jsx(_MyScrollAnimation__WEBPACK_IMPORTED_MODULE_7__["MyScrollAnimation"], {
    animationName: "fadeIn",
    offset: 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_Sections__WEBPACK_IMPORTED_MODULE_4__["FooterSection"], {
    animation: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })))));
};

/***/ })

})
//# sourceMappingURL=manticore.js.b4a128b3566b594ebb43.hot-update.js.map