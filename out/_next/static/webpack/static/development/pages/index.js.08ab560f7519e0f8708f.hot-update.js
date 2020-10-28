webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Tab/TabWrap.js":
/*!***************************************!*\
  !*** ./src/Components/Tab/TabWrap.js ***!
  \***************************************/
/*! exports provided: TabWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWrap", function() { return TabWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "/var/www/manticore-react-next.js/src/Components/Tab/TabWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var CardWrap = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "TabWrap__CardWrap",
  componentId: "mv6inv-0"
})(["height:200px;display:flex;align-items:flex-end;overflow:hidden;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;transform:translateX(0);transition:all 1s cubic-bezier(0.64,0.04,0.35,1);transition-delay:", "s;background-color:#10151b;z-index:5;}"], props => props.delay);
var TabWrap = ({
  animation,
  tabs
}) => {
  var {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_8__["useDeviceDetect"])();
  return __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Container, {
    id: "portfolio-tabs",
    defaultActiveKey: tabs[0].key,
    transition: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "pills",
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_8__["AnimationClass"])({
      animation,
      className: 'tab-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, tabs.map((tab, index) => __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    key: "".concat(tab.key, "_").concat(index),
    className: "tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
    eventKey: tab.key,
    className: "tab-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, tab.label)))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_8__["AnimationClass"])({
      animation,
      className: 'tab-content-wrap'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, tabs.map((tab, index) => __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__["default"].Pane, {
    key: "tab_".concat(index),
    eventKey: tab.key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, tab.content.length > 0 && tab.content.map((content, index) => {
    return __jsx(CardWrap, {
      xs: 12,
      key: "card_".concat(index),
      delay: content.delay,
      md: _Config__WEBPACK_IMPORTED_MODULE_6__["Sizes"].getMDSize(index),
      lg: _Config__WEBPACK_IMPORTED_MODULE_6__["Sizes"].getLGSize(index),
      xl: _Config__WEBPACK_IMPORTED_MODULE_6__["Sizes"].getXLSize(index),
      className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_8__["AnimationClass"])({
        animation,
        className: 'card-wrap'
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_7__["ActiveLink"], {
      link: content.link,
      className: "project-nav-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_7__["ImageWrapper"], {
      src: content.img,
      className: "project-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx("h6", {
      className: "project-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, content.title), desktop && __jsx("p", {
      className: "project-link",
      children: "View project",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }
    }));
  }))))));
}; // <Accordion defaultActiveKey={!mobile && 'panel1'}>
//   {tab.content.length > 0 && tab.content.map((content, index) => (
//     <Card key={`skill_${index}`} className="skill-row">
//       <Card.Header className="skill-header">
//         <Accordion.Toggle as={Card.Header} eventKey={mobile ? content.value : 'panel1'} className="skill-toggle">
//           <p className="skill-name">{content.name}</p>
//           <ImageWrapper src={content.icon} className="skill-icon"/>
//         </Accordion.Toggle>
//       </Card.Header>
//       <Accordion.Collapse eventKey={mobile ? content.value : 'panel1'} className="skill-collapse">
//         <Card.Body className="skill-body">
//           <p className="skill-description">{content.description}</p>
//         </Card.Body>
//       </Accordion.Collapse>
//     </Card>
//   ))}
// </Accordion>

/***/ })

})
//# sourceMappingURL=index.js.08ab560f7519e0f8708f.hot-update.js.map