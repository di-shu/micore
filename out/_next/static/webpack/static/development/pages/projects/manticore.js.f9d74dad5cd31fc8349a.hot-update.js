webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Helpers/useCheckRoute.js":
/*!**************************************!*\
  !*** ./src/Helpers/useCheckRoute.js ***!
  \**************************************/
/*! exports provided: useCheckRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckRoute", function() { return useCheckRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var useCheckRoute = () => {
  var {
    0: isProject,
    1: setIsProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var {
    0: isServices,
    1: setIsServices
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var {
    0: isManticore,
    1: setIsManticore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (pathname.includes('/projects/')) {
      setTimeout(() => {
        setIsProject(true);
      }, 100);
    } else {
      setIsProject(false);
    }

    if (pathname.includes('/services/')) {
      setTimeout(() => {
        setIsServices(true);
      }, 100);
    } else {
      setIsServices(false);
    }
  }, []);
  return {
    isProject,
    isServices
  };
};

/***/ })

})
//# sourceMappingURL=manticore.js.f9d74dad5cd31fc8349a.hot-update.js.map