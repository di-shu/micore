webpackHotUpdate("static/development/pages/projects/vip-yoga.js",{

/***/ "./src/Components/SectionsComponents/Projects/ProjectAboutSection.js":
/*!***************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectAboutSection.js ***!
  \***************************************************************************/
/*! exports provided: ProjectAboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return ProjectAboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _SectionLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionLine */ "./src/Components/SectionsComponents/Projects/SectionLine.js");
/* harmony import */ var _TypeSomething__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TypeSomething */ "./src/Components/SectionsComponents/Projects/TypeSomething.js");
/* harmony import */ var _ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectInfoWrap */ "./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js");
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SectionLayout */ "./src/Components/SectionsComponents/SectionLayout.js");
/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _MyScrollAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MyScrollAnimation */ "./src/Components/SectionsComponents/MyScrollAnimation.js");
var _jsxFileName = "/Users/Proghammer/PhpstormProjects/manticore-react-next.js/src/Components/SectionsComponents/Projects/ProjectAboutSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var ProjectAboutSection = props => {
  var {
    Content,
    description,
    name,
    year,
    link,
    additionalInfo,
    isLine,
    isOverflow
  } = props;
  var {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["useDeviceDetect"])();
  return __jsx(_SectionLayout__WEBPACK_IMPORTED_MODULE_7__["SectionLayout"], {
    id: "about-projects-section",
    Header: () => Content ? Content : null,
    sectionClassName: isOverflow ? 'is-overflow' : '',
    Footer: () => isLine ? __jsx(_SectionLine__WEBPACK_IMPORTED_MODULE_3__["SectionLine"], {
      direction: "bottom",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 30
      }
    }) : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_ImageWrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"], {
    isDot: true,
    display: desktop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_8__["SectionTitle"], {
    title: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "grid-container align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    lg: 6,
    className: "grid-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_5__["ProjectInfoWrap"], {
    name: name,
    year: year,
    link: link,
    isProjectInfo: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    lg: 6,
    className: "grid-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_8__["SectionDesc"], {
    withDot: true,
    children: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))), __jsx(_TypeSomething__WEBPACK_IMPORTED_MODULE_4__["TypeSomething"], {
    content: additionalInfo,
    size: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=vip-yoga.js.2bae08eadd17a2b6fc8a.hot-update.js.map