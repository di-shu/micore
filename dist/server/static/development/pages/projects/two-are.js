module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\projects\\two-are.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/projects/two-are.js":
/*!***********************************!*\
  !*** ./pages/projects/two-are.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/Components/Sections/Projects/TwoAre */ "./src/Components/Sections/Projects/TwoAre/index.js");
/* harmony import */ var _src_Components_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/Components/SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _src_Styles_Pages_Projects_two_are_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Styles/Pages/Projects/two-are.scss */ "./src/Styles/Pages/Projects/two-are.scss");
/* harmony import */ var _src_Styles_Pages_Projects_two_are_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_Styles_Pages_Projects_two_are_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\pages\\projects\\two-are.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*STYLES*/



const TwoAre = () => {
  return __jsx(_src_Components_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["MainWrapper"], {
    id: "two-are-project-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["About"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["Philosophy"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["LogoConcept"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["AboutDuet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["Branding"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["Adaptation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_src_Components_Sections_Projects_TwoAre__WEBPACK_IMPORTED_MODULE_1__["Bottom"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TwoAre);

/***/ }),

/***/ "./src/Components/Config/MenuLink.js":
/*!*******************************************!*\
  !*** ./src/Components/Config/MenuLink.js ***!
  \*******************************************/
/*! exports provided: MenuLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinks", function() { return MenuLinks; });
const MenuLinks = [{
  to: '/about',
  title: 'About us',
  linkTitle: 'Get to know us'
}, {
  to: '/portfolio',
  title: 'Our Projects',
  linkTitle: 'All you need to know'
}, {
  to: '/contact',
  title: 'Contacts',
  linkTitle: 'Get in touch'
}, {
  to: '/services',
  title: 'Services',
  linkTitle: 'Our services'
}];

/***/ }),

/***/ "./src/Components/Config/ProjectsList.js":
/*!***********************************************!*\
  !*** ./src/Components/Config/ProjectsList.js ***!
  \***********************************************/
/*! exports provided: ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return ProjectsList; });
const AtticImage = '/Assets/Images/Portfolio/Attic.png';
const TwoAreImage = '/Assets/Images/Portfolio/TwoAre.png';
const ProjectImg = '/Assets/Images/project-default-img.png';
const VipYogaImage = '/Assets/Images/Portfolio/VipYoga.png';
const MarinistImage = '/Assets/Images/Portfolio/Marinist.png';
const GastrobarImage = '/Assets/Images/Portfolio/Gastrobar.png';
const BessarabskiyImage = '/Assets/Images/Portfolio/Bessarabkiy.png';
const BeeGamesImage = '/Assets/Images/Portfolio/BeeGames.png';
const FCBalkanyImage = '/Assets/Images/Portfolio/FCBalkanyProject.png';
const PrideGroupImage = '/Assets/Images/Portfolio/PrideGroupProject.png';
const ZlataTradeImage = '/Assets/Images/Portfolio/Zlata-trade project.png';
const VladyDesignImage = '/Assets/Images/Portfolio/VladyDesignProject.png';
const PrideLogisticImage = '/Assets/Images/Portfolio/PrideLogisticProject.png';
const ProjectsList = [{
  key: 'web-sites',
  label: 'Web-sites',
  content: [{
    img: ZlataTradeImage,
    title: 'Zlata-trade',
    link: '/projects/zlata-trade',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 5
    }
  }, {
    img: FCBalkanyImage,
    title: 'FC Balkany',
    link: '/projects/balkany',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }, {
    img: PrideLogisticImage,
    title: 'Pride Logistic',
    link: '/projects/pride-logistic',
    size: {
      xs: 12,
      md: 5,
      lg: 3,
      xl: 4
    }
  }, {
    isNavBlack: true,
    img: VladyDesignImage,
    title: 'Vlady design',
    link: '/projects/vlady-design',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: BeeGamesImage,
    title: 'Bee Games',
    link: '/projects/bee-games',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 5
    }
  }, {
    img: PrideGroupImage,
    title: 'Pride group',
    link: '/projects/pride-group',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }, {
    title: 'Gastrobar',
    img: GastrobarImage,
    link: '/projects/gastrobar',
    size: {
      xs: 12,
      md: 4,
      lg: 8,
      xl: 9
    }
  }, {
    img: BessarabskiyImage,
    title: 'Bessarabskiy dvorik',
    link: '/projects/bessarabskiy',
    size: {
      xs: 12,
      md: 8,
      lg: 4,
      xl: 3
    }
  }, {
    title: 'Marinist',
    img: MarinistImage,
    link: '/projects/marinist',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 4
    }
  }, {
    img: TwoAreImage,
    title: 'Two are',
    link: '/projects/two-are',
    size: {
      xs: 12,
      md: 5,
      lg: 7,
      xl: 4
    }
  }, {
    isNavBlack: true,
    img: VipYogaImage,
    title: 'Vip Yoga',
    link: '/projects/vip-yoga',
    size: {
      xs: 12,
      md: 5,
      lg: 7,
      xl: 4
    }
  }, {
    img: AtticImage,
    title: 'Attic stroy',
    link: '/projects/attic-stroy',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 8
    }
  }]
}, {
  key: 'design',
  label: 'Design',
  content: [{
    img: ProjectImg,
    link: '/projects',
    title: 'Design page 1',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }, {
    img: ProjectImg,
    title: 'Design page 2',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }, {
    img: ProjectImg,
    title: 'Design page 3',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 3,
      xl: 4
    }
  }, {
    img: ProjectImg,
    title: 'Design page 4',
    link: '/projects',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: ProjectImg,
    title: 'Design page 5',
    link: '/projects',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 5
    }
  }, {
    img: ProjectImg,
    title: 'Design page 6',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }]
}, {
  key: 'identity',
  label: 'Identity',
  content: [{
    img: ProjectImg,
    title: 'Identity page 1',
    link: '/projects',
    size: {
      xs: 12,
      md: 7,
      lg: 5,
      xl: 5
    }
  }, {
    img: ProjectImg,
    title: 'Identity page 2',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }, {
    img: ProjectImg,
    title: 'Identity page 3',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 3,
      xl: 4
    }
  }, {
    img: ProjectImg,
    title: 'Identity page 4',
    link: '/projects',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 4
    }
  }, {
    img: ProjectImg,
    title: 'Identity page 5',
    link: '/projects',
    size: {
      xs: 12,
      md: 7,
      lg: 4,
      xl: 5
    }
  }, {
    img: ProjectImg,
    title: 'Identity page 6',
    link: '/projects',
    size: {
      xs: 12,
      md: 5,
      lg: 4,
      xl: 3
    }
  }]
}];

/***/ }),

/***/ "./src/Components/Config/ServicesList.js":
/*!***********************************************!*\
  !*** ./src/Components/Config/ServicesList.js ***!
  \***********************************************/
/*! exports provided: ServicesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesList", function() { return ServicesList; });
/* IMAGES */
const OtherImage = '/Assets/Images/Services/Other.png';
const BrandingImage = '/Assets/Images/Services/Branding.png';
const CorporateImage = '/Assets/Images/Services/Corporate.png';
const LandingImage = '/Assets/Images/Services/LandingImage.png';
const ServicesList = [{
  img: LandingImage,
  name: 'Landing page',
  link: '/services/landing',
  desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
}, {
  img: CorporateImage,
  name: 'Corporate Web-site',
  link: '/services/corporate',
  desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
}, {
  name: 'Branding',
  img: BrandingImage,
  link: '/services/branding',
  desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
}, {
  name: 'Other',
  img: OtherImage,
  link: '/services/other',
  desc: 'We are Manticore Development, company which duis aute irure dolor in reprehenderit'
}];

/***/ }),

/***/ "./src/Components/Config/SkillsList.js":
/*!*********************************************!*\
  !*** ./src/Components/Config/SkillsList.js ***!
  \*********************************************/
/*! exports provided: SkillsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsList", function() { return SkillsList; });
const icon = '/Assets/Images/About/Skill_Icon.png';
const SkillsList = [{
  key: 'front-end',
  label: 'Front-end',
  content: [{
    value: 'panel1',
    name: 'HTML5',
    icon: icon,
    description: 'Очень хороший язык программирования, всем рекомендую. © Верстальщик Manticore'
  }, {
    value: 'panel2',
    name: 'css3',
    icon: icon,
    description: 'Самый быстрый язык программирования. Лучше ООП решение. © Counter-Strike Source'
  }, {
    value: 'panel3',
    name: 'jquery',
    icon: icon,
    description: 'Jquery говно, базарю. © Гоша Manticore'
  }, {
    value: 'panel4',
    name: 'canvas',
    icon: icon,
    description: 'Наш сайт написан на нем. Очень крутая технология. Каждый наш разрабочтик знает ее. © Команда Manticore'
  }, {
    value: 'panel5',
    name: 'react',
    icon: icon,
    description: 'React херня, я бы сделал лучше. © Вадим Дубровский'
  }]
}, {
  key: 'back-end',
  label: 'Back-end',
  content: [{
    value: 'panel1',
    name: 'PHP',
    icon: icon,
    description: 'Технология для счетчика посетителей. © Расмус Лердорф'
  }, {
    value: 'panel2',
    name: 'LARAVEL',
    icon: icon,
    description: 'Сука назвал фреймворк в честь жены, а она умерла. © Тейлор Отвел (разработчик)'
  }, {
    value: 'panel3',
    name: 'NODE.JS',
    icon: icon,
    description: 'Почти как JS, но только сзади. © Охуенный шутник'
  }, {
    value: 'panel4',
    name: 'SYMPHONY',
    icon: icon,
    description: 'Делал на symphony до того как это стало мэйнстримом. © Бетховен'
  }]
}, {
  key: 'design',
  label: 'Design',
  content: [{
    value: 'panel1',
    name: 'UI/UX',
    icon: icon,
    description: 'Поиграйся со шрифтами. © Артем Лебедев'
  }]
}];

/***/ }),

/***/ "./src/Components/Config/Socials.js":
/*!******************************************!*\
  !*** ./src/Components/Config/Socials.js ***!
  \******************************************/
/*! exports provided: Socials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return Socials; });
const fbIcon = '/Assets/Images/facebook.svg';
const instIcon = '/Assets/Images/instagram.svg';
const beIcon = '/Assets/Images/behance.svg';
const Socials = [{
  href: '/',
  src: fbIcon,
  label: 'Facebook'
}, {
  href: '/',
  src: instIcon,
  label: 'Instagram'
}, {
  href: '/',
  src: beIcon,
  label: 'Behance'
}];

/***/ }),

/***/ "./src/Components/Config/TeamList.js":
/*!*******************************************!*\
  !*** ./src/Components/Config/TeamList.js ***!
  \*******************************************/
/*! exports provided: TeamList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return TeamList; });
const Vadique = '/Assets/Images/About/Vadique.png';
const TeamImage = '/Assets/Images/About/Team_photo.png';
const TeamList = [{
  image: TeamImage,
  slideImage: Vadique,
  position: 'Designer',
  name: 'Kakoito chel 1',
  fullName: 'Full name Kakoito chel 1',
  description: 'This website which duis aute irure dolor in rep ehenderit.'
}, {
  image: TeamImage,
  slideImage: Vadique,
  position: 'Designer',
  name: 'Kakoito chel 2',
  fullName: 'Full name Kakoito chel 2',
  description: 'This website which duis aute irure dolor in rep ehenderit.'
}, {
  image: TeamImage,
  slideImage: Vadique,
  position: 'Designer',
  name: 'Kakoito chel 3',
  fullName: 'Full name Kakoito chel 3',
  description: 'This website which duis aute irure dolor in rep ehenderit.'
}, {
  image: TeamImage,
  slideImage: Vadique,
  position: 'Designer',
  name: 'Kakoito chel 4',
  fullName: 'Full name Kakoito chel 4',
  description: 'This website which duis aute irure dolor in rep ehenderit.'
}, {
  image: TeamImage,
  slideImage: Vadique,
  position: 'Designer',
  name: 'Kakoito chel 5',
  fullName: 'Full name Kakoito chel 5',
  description: 'This website which duis aute irure dolor in rep ehenderit.'
}];

/***/ }),

/***/ "./src/Components/Config/index.js":
/*!****************************************!*\
  !*** ./src/Components/Config/index.js ***!
  \****************************************/
/*! exports provided: Socials, MenuLinks, TeamList, SkillsList, ServicesList, ProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socials */ "./src/Components/Config/Socials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _Socials__WEBPACK_IMPORTED_MODULE_0__["Socials"]; });

/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLink */ "./src/Components/Config/MenuLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinks", function() { return _MenuLink__WEBPACK_IMPORTED_MODULE_1__["MenuLinks"]; });

/* harmony import */ var _TeamList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamList */ "./src/Components/Config/TeamList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TeamList", function() { return _TeamList__WEBPACK_IMPORTED_MODULE_2__["TeamList"]; });

/* harmony import */ var _SkillsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkillsList */ "./src/Components/Config/SkillsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillsList", function() { return _SkillsList__WEBPACK_IMPORTED_MODULE_3__["SkillsList"]; });

/* harmony import */ var _ServicesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServicesList */ "./src/Components/Config/ServicesList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesList", function() { return _ServicesList__WEBPACK_IMPORTED_MODULE_4__["ServicesList"]; });

/* harmony import */ var _ProjectsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectsList */ "./src/Components/Config/ProjectsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return _ProjectsList__WEBPACK_IMPORTED_MODULE_5__["ProjectsList"]; });








/***/ }),

/***/ "./src/Components/Inputs/InputControl.js":
/*!***********************************************!*\
  !*** ./src/Components/Inputs/InputControl.js ***!
  \***********************************************/
/*! exports provided: InputControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputControl", function() { return InputControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Inputs\\InputControl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const InputControl = (_ref) => {
  let {
    id,
    label,
    value,
    type = 'input',
    rows,
    display = true,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["id", "label", "value", "type", "rows", "display", "onChange"]);

  return display && __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, _extends({
    controlId: id,
    className: `input-groups ${type === 'textarea' ? 'input-area' : ''}`
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
    as: type,
    value: value,
    onChange: onChange,
    className: "input-control",
    rows: type === 'textarea' ? rows : 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
    className: "input-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, label), __jsx("hr", {
    className: "input-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/Inputs/index.js":
/*!****************************************!*\
  !*** ./src/Components/Inputs/index.js ***!
  \****************************************/
/*! exports provided: InputControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputControl */ "./src/Components/Inputs/InputControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputControl", function() { return _InputControl__WEBPACK_IMPORTED_MODULE_0__["InputControl"]; });



/***/ }),

/***/ "./src/Components/Sections/FooterSection.js":
/*!**************************************************!*\
  !*** ./src/Components/Sections/FooterSection.js ***!
  \**************************************************/
/*! exports provided: FooterSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return FooterSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Inputs */ "./src/Components/Inputs/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\FooterSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* IMAGES */

const MapMarker = '/Assets/Images/map-marker.svg';
const FooterLogo = '/Assets/Images/footer-logo.svg';
const ContactHand = '/Assets/Images/contact-hand.png';
const FormInputs = [{
  id: 'name',
  label: 'Name'
}, {
  id: 'phone',
  label: 'Phone number'
}, {
  rows: 4,
  id: 'message',
  type: 'textarea',
  label: 'Type message...'
}];
const FooterSection = ({
  isContact,
  animation
}) => {
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    phone: '',
    message: ''
  });
  const isBottom = Object(_Helpers__WEBPACK_IMPORTED_MODULE_6__["useCheckBottom"])();
  const {
    mobile,
    laptop,
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_6__["useDeviceDetect"])();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setValues(_objectSpread({}, values, {
      [e.target.id]: e.target.value
    }));
  };

  return __jsx("section", {
    id: "footer-section",
    className: `${!isBottom ? 'section' : ''} ${isBottom ? 'active' : ''} ${!isContact ? 'footer-section' : 'active'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: `container-wrap ${animation || isBottom ? 'on-enter' : 'on-leave'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, isContact && (laptop || desktop) && __jsx("div", {
    className: "image-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("img", {
    src: ContactHand,
    alt: "Hand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: `section-container ${isBottom ? 'on-enter' : 'on-leave'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    xl: isContact ? 6 : 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "form-wrap",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 12,
    xl: isContact ? 12 : 5,
    className: "col-form-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("h2", {
    className: "section-title contact-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Contact us"), FormInputs.map(({
    id,
    label,
    type,
    rows,
    display
  }, index) => __jsx(_Inputs__WEBPACK_IMPORTED_MODULE_5__["InputControl"], {
    id: id,
    type: type,
    rows: rows,
    label: label,
    value: values[id],
    onChange: handleChange,
    key: `form-input_${index}`,
    display: index === 2 ? !desktop : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("div", {
    className: "btn-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("button", {
    type: "submit",
    className: "btn-submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "SEND")))), !isContact && desktop && __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: {
      span: 6,
      offset: 1
    },
    className: "col-center-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "img-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("img", {
    src: FooterLogo,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), __jsx(_Inputs__WEBPACK_IMPORTED_MODULE_5__["InputControl"], {
    rows: 4,
    id: "message",
    type: "textarea",
    value: values.message,
    label: "Type message...",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }))))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: isContact ? 12 : 6,
    xl: isContact ? 12 : {
      span: 3,
      offset: 1
    },
    className: "contact-info-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, !isContact && desktop && __jsx("h2", {
    className: "section-title contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Contacts"), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: isContact ? 6 : 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("h3", {
    className: "contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Everything else"), __jsx("h4", {
    className: "contact-sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "micore@gmail.com"), __jsx("h4", {
    className: "contact-sub-title with-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "38 097 184 00 09")))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: isContact ? 6 : 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: `contact-wrap ${desktop ? ' mb-0' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("h3", {
    className: "contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Odessa"), __jsx("h4", {
    className: "contact-sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Francuskiy bulvar, 66/2"), __jsx("h4", {
    className: "contact-sub-title with-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Office, 702b"), __jsx("div", {
    className: "btn-show-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, isContact ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: MapMarker,
    alt: "Map icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "see map")) : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_7__["ActiveLink"], {
    link: "/contact",
    className: "btn-show-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_7__["ImageWrapper"], {
    src: MapMarker,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "contact us"))))))))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_7__["SocialsWrap"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), mobile && __jsx("div", {
    className: "copyright-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Some text"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "Manticore development"))));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/About.js":
/*!**********************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/About.js ***!
  \**********************************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/TwoAre/Config/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ProjectAboutSection"], {
    link: "?",
    name: "Two are",
    year: "june, 2019",
    additionalInfo: _Config__WEBPACK_IMPORTED_MODULE_2__["TwoAreAboutInfo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/AboutDuet.js":
/*!**************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/AboutDuet.js ***!
  \**************************************************************/
/*! exports provided: AboutDuet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDuet", function() { return AboutDuet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\AboutDuet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/*IMAGES*/

const DuetImg = '/Assets/Images/TwoAre/DJDuet.png';
const AboutDuet = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "two-are-about-duet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "row-about-duet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    className: "col-duet-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "About DJ duet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: DuetImg,
    className: "about-duet-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Adaptation.js":
/*!***************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Adaptation.js ***!
  \***************************************************************/
/*! exports provided: Adaptation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adaptation", function() { return Adaptation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\Adaptation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/*IMAGES*/

const LogoImg = '/Assets/Images/TwoAre/Logo.svg';
const HeadphonesImg = '/Assets/Images/TwoAre/Headphones.png';

const SectionFooter = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
  isDot: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
  src: HeadphonesImg,
  className: "headphones-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}));

const Adaptation = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "two-are-adaptation",
    Footer: SectionFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Adaptation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: LogoImg,
    className: "logo-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Bottom.js":
/*!***********************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Bottom.js ***!
  \***********************************************************/
/*! exports provided: Bottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottom", function() { return Bottom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\Bottom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

const PosterImg = '/Assets/Images/TwoAre/FooterPoster.png';
const PosterImgMobile = '/Assets/Images/TwoAre/FooterPosterMobile.png';
const Bottom = () => {
  const {
    mobile
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "two-are-bottom",
    Footer: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["BottomNavigation"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: mobile ? PosterImgMobile : PosterImg,
    className: "poster-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Branding.js":
/*!*************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Branding.js ***!
  \*************************************************************/
/*! exports provided: Branding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branding", function() { return Branding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Config */ "./src/Components/Sections/Projects/TwoAre/Config/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\Branding.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Branding = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "two-are-branding",
    Footer: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionSlider"], {
      slides: _Config__WEBPACK_IMPORTED_MODULE_4__["TwoAreSlides"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Branding",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    withDot: true,
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["TypeSomething"], {
    content: _Config__WEBPACK_IMPORTED_MODULE_4__["TypeContent"],
    whiteText: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Config/index.js":
/*!*****************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Config/index.js ***!
  \*****************************************************************/
/*! exports provided: TwoAreAboutInfo, TypeContent, TwoAreSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoAreAboutInfo", function() { return TwoAreAboutInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeContent", function() { return TypeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoAreSlides", function() { return TwoAreSlides; });
const SlideImg = '/Assets/Images/TwoAre/SlideImg.png';
const TwoAreAboutInfo = ['Type something', 'Type something', 'Type something', 'Type something', 'Type something', 'Type something'];
const TypeContent = ['Type something', 'Type something', 'Type something', 'Type something', 'Type something', 'Type something'];
const TwoAreSlides = [{
  img: SlideImg
}, {
  img: SlideImg
}, {
  img: SlideImg
}, {
  img: SlideImg
}, {
  img: SlideImg
}, {
  img: SlideImg
}];

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/LogoConcept.js":
/*!****************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/LogoConcept.js ***!
  \****************************************************************/
/*! exports provided: LogoConcept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoConcept", function() { return LogoConcept; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\LogoConcept.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/*IMAGES*/

const LogoConceptImg = '/Assets/Images/TwoAre/LogoConcept.svg';

const SectionHeader = () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
  isDot: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});

const LogoConcept = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "two-are-logo-concept",
    Header: SectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: LogoConceptImg,
    className: "logo-concept",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Main.js":
/*!*********************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Main.js ***!
  \*********************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*IMAGES*/

const MainBG = '/Assets/Images/TwoAre/MainBG.png';
const MainBGMobile = '/Assets/Images/TwoAre/MainBGMobile.png';
const Main = () => {
  const {
    mobile
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ProjectMainSection"], {
    id: "two-are",
    name: "Two are",
    isContentWhite: true,
    background: mobile ? MainBGMobile : MainBG,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/Philosophy.js":
/*!***************************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/Philosophy.js ***!
  \***************************************************************/
/*! exports provided: Philosophy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Philosophy", function() { return Philosophy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\Sections\\Projects\\TwoAre\\Philosophy.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/*IMAGES*/

const PhilosophyImg = '/Assets/Images/TwoAre/Philosophy.png';

const SectionFooter = () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
  src: PhilosophyImg,
  className: "philosophy-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

const Philosophy = () => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "two-are-philosophy",
    Footer: SectionFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Philosophy",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/Sections/Projects/TwoAre/index.js":
/*!**********************************************************!*\
  !*** ./src/Components/Sections/Projects/TwoAre/index.js ***!
  \**********************************************************/
/*! exports provided: Main, Philosophy, LogoConcept, AboutDuet, Branding, Adaptation, Bottom, About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/Components/Sections/Projects/TwoAre/Main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["Main"]; });

/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/Components/Sections/Projects/TwoAre/About.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _About__WEBPACK_IMPORTED_MODULE_1__["About"]; });

/* harmony import */ var _Philosophy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Philosophy */ "./src/Components/Sections/Projects/TwoAre/Philosophy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Philosophy", function() { return _Philosophy__WEBPACK_IMPORTED_MODULE_2__["Philosophy"]; });

/* harmony import */ var _LogoConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogoConcept */ "./src/Components/Sections/Projects/TwoAre/LogoConcept.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoConcept", function() { return _LogoConcept__WEBPACK_IMPORTED_MODULE_3__["LogoConcept"]; });

/* harmony import */ var _AboutDuet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutDuet */ "./src/Components/Sections/Projects/TwoAre/AboutDuet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutDuet", function() { return _AboutDuet__WEBPACK_IMPORTED_MODULE_4__["AboutDuet"]; });

/* harmony import */ var _Branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Branding */ "./src/Components/Sections/Projects/TwoAre/Branding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Branding", function() { return _Branding__WEBPACK_IMPORTED_MODULE_5__["Branding"]; });

/* harmony import */ var _Adaptation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Adaptation */ "./src/Components/Sections/Projects/TwoAre/Adaptation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adaptation", function() { return _Adaptation__WEBPACK_IMPORTED_MODULE_6__["Adaptation"]; });

/* harmony import */ var _Bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bottom */ "./src/Components/Sections/Projects/TwoAre/Bottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bottom", function() { return _Bottom__WEBPACK_IMPORTED_MODULE_7__["Bottom"]; });










/***/ }),

/***/ "./src/Components/Sections/index.js":
/*!******************************************!*\
  !*** ./src/Components/Sections/index.js ***!
  \******************************************/
/*! exports provided: FooterSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterSection */ "./src/Components/Sections/FooterSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return _FooterSection__WEBPACK_IMPORTED_MODULE_0__["FooterSection"]; });



/***/ }),

/***/ "./src/Components/SectionsComponents/ActiveLink.js":
/*!*********************************************************!*\
  !*** ./src/Components/SectionsComponents/ActiveLink.js ***!
  \*********************************************************/
/*! exports provided: ActiveLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveLink", function() { return ActiveLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const ActiveLink = (_ref) => {
  let {
    link,
    scroll = true,
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["link", "scroll", "className", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link,
    scroll: scroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("a", _extends({
    className: className
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), children));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/ApolloStatue.js":
/*!***********************************************************!*\
  !*** ./src/Components/SectionsComponents/ApolloStatue.js ***!
  \***********************************************************/
/*! exports provided: ApolloStatue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloStatue", function() { return ApolloStatue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blob */ "./src/Components/SectionsComponents/Blob.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\ApolloStatue.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* IMAGES */

const Apollo = '/Assets/Images/BlobAnimation/Apollo.png';
const Mask = '/Assets/Images/BlobAnimation/ApolloMask.svg';
const Blob1 = '/Assets/Images/BlobAnimation/Blob1.svg';
const Blob2 = '/Assets/Images/BlobAnimation/Blob2.svg';
const Blob3 = '/Assets/Images/BlobAnimation/Blob3.svg';
const Blob4 = '/Assets/Images/BlobAnimation/Blob4.svg';
const Blob5 = '/Assets/Images/BlobAnimation/Blob5.svg';
const Blob6 = '/Assets/Images/BlobAnimation/Blob6.svg';
const Blob7 = '/Assets/Images/BlobAnimation/Blob7.svg';
/**/

const Blobs = [Blob1, Blob2, Blob3, Blob4, Blob5, Blob6, Blob7];
const BlobsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ApolloStatue__BlobsWrap",
  componentId: "sc-1j7sfnb-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;width:100%;height:100%;overflow:hidden;mix-blend-mode:color;mask-image:url(", ");mask-repeat:no-repeat;mask-position:center;mask-size:cover;"], props => props.mask);
const ApolloStatue = ({
  props,
  move,
  firstLoad,
  animation,
  display = true
}) => {
  return display && __jsx("div", {
    className: Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["AnimationClass"])({
      firstLoad,
      animation,
      className: 'statue-wrap'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    src: Apollo,
    className: "statue",
    alt: "Apollo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(BlobsWrap, {
    mask: Mask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, Blobs.map((blob, index) => __jsx(_Blob__WEBPACK_IMPORTED_MODULE_2__["Blob"], {
    key: index,
    src: blob,
    move: move,
    props: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Blob.js":
/*!***************************************************!*\
  !*** ./src/Components/SectionsComponents/Blob.js ***!
  \***************************************************/
/*! exports provided: Blob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return Blob; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Blob.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Blob = ({
  src,
  props,
  move
}) => {
  const {
    0: x,
    1: setX
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: y,
    1: setY
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const int = setInterval(() => {
      setX(Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(-10, 10));
      setY(Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(-10, 10));
    }, 1500);
    return () => {
      clearInterval(int);
    };
  }, []);
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].img, {
    src: src,
    alt: "Blob",
    className: "blob-shape",
    style: {
      objectPosition: props.xy.interpolate(move),
      transform: `skew(${x}deg, ${y}deg)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./src/Components/SectionsComponents/ImageWrapper.js":
/*!***********************************************************!*\
  !*** ./src/Components/SectionsComponents/ImageWrapper.js ***!
  \***********************************************************/
/*! exports provided: ImageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\ImageWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Dots = '/Assets/Images/DotsGrey.png';
const ImageWrapper = ({
  className,
  src,
  alt,
  isDot = false,
  display = true,
  children,
  onClick
}) => {
  return display && __jsx("div", {
    className: `${isDot ? 'section-dots-wrap' : 'section-image-wrap'} ${className ? className : ''}`,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, children, __jsx("img", {
    src: isDot ? Dots : src,
    alt: isDot ? 'Dots' : alt ? alt : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Layout.js":
/*!*****************************************************!*\
  !*** ./src/Components/SectionsComponents/Layout.js ***!
  \*****************************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SiteHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SiteHeader */ "./src/Components/SiteHeader/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = ({
  children
}) => {
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return __jsx("div", {
    className: "page-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_SiteHeader__WEBPACK_IMPORTED_MODULE_1__["MetaHead"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_SiteHeader__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    open: openMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), children, __jsx(_SiteHeader__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    open: isMenuOpen,
    close: closeMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/MainWrapper.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/MainWrapper.js ***!
  \**********************************************************/
/*! exports provided: MainWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections */ "./src/Components/Sections/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout */ "./src/Components/SectionsComponents/Layout.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Styles/Sections/Services/index.scss */ "./src/Styles/Sections/Services/index.scss");
/* harmony import */ var _Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Services_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Styles/Sections/Projects/index.scss */ "./src/Styles/Sections/Projects/index.scss");
/* harmony import */ var _Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Styles_Sections_Projects_index_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\MainWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* STYLES */



const easing = [0.64, 0.04, 0.35, 1];
const variants = {
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
const MainWrapper = ({
  id,
  children
}) => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isProject = pathname.includes('/projects');
  const isServices = pathname.includes('/services');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0
      });
    }, 100);
  }, []);
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("main", {
    id: id,
    className: "main-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: "exit",
    initial: "hidden",
    animate: "visible",
    variants: variants,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, isProject && __jsx(_Projects__WEBPACK_IMPORTED_MODULE_6__["ProjectsNavigation"], {
    links: _Config__WEBPACK_IMPORTED_MODULE_3__["ProjectsList"][0].content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), children, (isProject || isServices) && __jsx(_Sections__WEBPACK_IMPORTED_MODULE_4__["FooterSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/BottomNavigation.js":
/*!************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/BottomNavigation.js ***!
  \************************************************************************/
/*! exports provided: BottomNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return BottomNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\BottomNavigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BottomNavigation = ({
  link = '#',
  isBlack
}) => {
  const {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx("div", {
    className: "bottom-navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    link: "/portfolio",
    className: `bottom-project-link ${isBlack ? 'is-black' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Portfolio")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    link: link,
    className: `bottom-project-link ${isBlack ? 'is-black' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Visit site")), desktop && __jsx("div", {
    className: "bottom-scroll-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("p", {
    className: `bottom-text ${isBlack ? 'is-black' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Contact ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "us")), __jsx(_ScrollBox__WEBPACK_IMPORTED_MODULE_1__["ScrollBox"], {
    isBlack: isBlack,
    firstLoad: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/FlipBook.js":
/*!****************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/FlipBook.js ***!
  \****************************************************************/
/*! exports provided: FlipBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return FlipBook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\FlipBook.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*IMAGES*/

const ArrowLeft = '/Assets/Images/FlipbookArrL.svg';
const ArrowRight = '/Assets/Images/FlipbookArrR.svg';
const ArrowLeftW = '/Assets/Images/FlipbookArrLW.svg';
const ArrowRightW = '/Assets/Images/FlipbookArrRW.svg';
const FlipBook = ({
  isNavWhite,
  pages
}) => {
  let fadeClass = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: isBookOpen,
    1: setIsBookOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (fadeClass) {
      $(fadeClass).turn({
        width: window.innerWidth < 577 ? 340 : window.innerWidth < 991 ? 690 : window.innerWidth < 1199 ? 800 : 1100,
        height: window.innerWidth < 577 ? 250 : window.innerWidth < 1199 ? 350 : 400,
        autoCenter: true,
        display: window.innerWidth < 577 ? 'single' : 'double',
        duration: 1200,
        turnCorners: 'bl, br'
      });
    }
  }, []);

  const goToPrevPage = () => {
    $('.flipbook').turn('previous');
  };

  const goToNextPage = () => {
    $('.flipbook').turn('next');
  };

  const handleFlipClick = () => {
    setIsBookOpen(true);
    !isBookOpen && $('.flipbook').turn('next');
  };

  return __jsx("div", {
    className: `flipbook-container ${isBookOpen ? 'isOpen' : ''}`,
    onClick: handleFlipClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "open-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "click to open"), __jsx("span", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("span", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx("div", {
    className: "flipbook",
    ref: el => fadeClass = el,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, pages && pages.map((page, index) => __jsx("div", {
    key: index,
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("img", {
    src: page,
    alt: "Brandbook page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })))), __jsx("div", {
    className: "logobook-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("img", {
    src: isNavWhite ? ArrowLeftW : ArrowLeft,
    className: "arrow-left",
    onClick: goToPrevPage,
    alt: "Arrow left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("p", {
    style: {
      color: isNavWhite ? '#fff' : '#493a33'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "flip page"), __jsx("img", {
    src: isNavWhite ? ArrowRightW : ArrowRight,
    className: "arrow-right",
    onClick: goToNextPage,
    alt: "Arrow right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/FontExample.js":
/*!*******************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/FontExample.js ***!
  \*******************************************************************/
/*! exports provided: FontExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return FontExample; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\FontExample.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FontExample = ({
  fontNameFirst,
  fontNameSecond
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "Fonts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-example-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    withDot: true,
    className: "font-title",
    children: fontNameFirst,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    className: "font-example font-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), "1234567890")))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "font-example-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    withDot: true,
    className: "font-title",
    children: fontNameSecond,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    className: "font-example font-second",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), "1234567890"))))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectAboutSection.js":
/*!***************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectAboutSection.js ***!
  \***************************************************************************/
/*! exports provided: ProjectAboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return ProjectAboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionLine */ "./src/Components/SectionsComponents/Projects/SectionLine.js");
/* harmony import */ var _TypeSomething__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TypeSomething */ "./src/Components/SectionsComponents/Projects/TypeSomething.js");
/* harmony import */ var _ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectInfoWrap */ "./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js");
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SectionLayout */ "./src/Components/SectionsComponents/SectionLayout.js");
/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\ProjectAboutSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const ProjectAboutSection = props => {
  const {
    Content,
    description,
    name,
    year,
    link,
    additionalInfo,
    isLine,
    isOverflow
  } = props;
  const {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_9__["useDeviceDetect"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SectionLayout__WEBPACK_IMPORTED_MODULE_7__["SectionLayout"], {
    id: "about-section",
    Header: () => Content ? Content : null,
    sectionClassName: isOverflow ? 'is-overflow' : '',
    Footer: () => isLine ? __jsx(_SectionLine__WEBPACK_IMPORTED_MODULE_3__["SectionLine"], {
      direction: "bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }) : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_ImageWrapper__WEBPACK_IMPORTED_MODULE_6__["ImageWrapper"], {
    isDot: true,
    display: desktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_8__["SectionTitle"], {
    title: "About project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    className: "grid-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_8__["SectionDesc"], {
    withDot: true,
    children: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    className: "grid-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_5__["ProjectInfoWrap"], {
    name: name,
    year: year,
    link: link,
    isProjectInfo: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), __jsx(_TypeSomething__WEBPACK_IMPORTED_MODULE_4__["TypeSomething"], {
    content: additionalInfo,
    size: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectColor.js":
/*!********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectColor.js ***!
  \********************************************************************/
/*! exports provided: ProjectColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return ProjectColor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\ProjectColor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GetCountAffix = count => {
  switch (count + 1) {
    case 1:
      return 'st';

    case 2:
      return 'nd';

    case 3:
      return 'rd';

    default:
      return 'th';
  }
};

const ProjectColor = ({
  colors
}) => {
  return __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "colors-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, colors && colors.map((color, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    key: index,
    xs: 12,
    lg: color.size ? color.size : 4,
    className: "col-item-color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "color-info-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, color.image ? __jsx(_ImageWrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: color.image,
    className: "color-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }) : __jsx("div", {
    className: `color-wrap ${color.name}`,
    style: {
      background: color.background || color.hex
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("p", {
    className: "color-text",
    style: {
      color: color.textColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, index + 1, GetCountAffix(index))), __jsx("div", {
    className: "info-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("p", {
    className: "info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, color.colorName), __jsx("p", {
    className: "info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, color.hex), __jsx("p", {
    className: "info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, color.CMYK), __jsx("p", {
    className: "info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, color.fullName))))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js":
/*!***********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js ***!
  \***********************************************************************/
/*! exports provided: ProjectInfoWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return ProjectInfoWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\ProjectInfoWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ProjectInfoWrap = ({
  name,
  year,
  link,
  children,
  isProjectInfo
}) => {
  return __jsx("div", {
    className: `square-info-wrap ${isProjectInfo ? 'project-wrap' : 'content-wrap'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "square-text-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, isProjectInfo ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    className: "square-info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Name - ", name), __jsx("p", {
    className: "square-info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Year - ", year), __jsx("p", {
    className: "square-info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Link - ", __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: `http://${link}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, link))) : children));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectMainSection.js":
/*!**************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectMainSection.js ***!
  \**************************************************************************/
/*! exports provided: ProjectMainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return ProjectMainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony import */ var _SeeMoreLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SeeMoreLink */ "./src/Components/SectionsComponents/SeeMoreLink.js");
/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SectionLayout */ "./src/Components/SectionsComponents/SectionLayout.js");
/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\ProjectMainSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ProjectMainSection = ({
  id,
  name,
  background,
  content,
  isContentWhite,
  isNavBlack,
  children
}) => {
  return __jsx(_SectionLayout__WEBPACK_IMPORTED_MODULE_4__["SectionLayout"], {
    id: `${id}-main`,
    Header: () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, background && __jsx(_ImageWrapper__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
      src: background,
      className: "section-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }), __jsx(_SeeMoreLink__WEBPACK_IMPORTED_MODULE_2__["SeeMoreLink"], {
      label: "Back to projects",
      className: isNavBlack ? 'is-black' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }), __jsx(_ScrollBox__WEBPACK_IMPORTED_MODULE_1__["ScrollBox"], {
      isBlack: isNavBlack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    })),
    Footer: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_5__["SectionDesc"], {
    isContentWhite: isContentWhite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Project name"), __jsx(_SectionInfo__WEBPACK_IMPORTED_MODULE_5__["SectionTitle"], {
    main: true,
    title: name,
    isContentWhite: isContentWhite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), children);
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/ProjectsNavigation.js":
/*!**************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/ProjectsNavigation.js ***!
  \**************************************************************************/
/*! exports provided: ProjectsNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return ProjectsNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\ProjectsNavigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProjectsNavigation = ({
  links
}) => {
  const {
    0: prev,
    1: setPrev
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/');
  const {
    0: next,
    1: setNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('/');
  const {
    0: isBlack,
    1: setIsBlack
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    mobile
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  const scrollDir = Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["useScrollDirection"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // eslint-disable-next-line array-callback-return
    links.map((link, index) => {
      if (link.link === pathname) {
        setPrev(index === 0 ? links[links.length - 1].link : links[index - 1].link);
        setNext(index === links.length - 1 ? links[0].link : links[index + 1].link);

        if (link.isNavBlack) {
          setIsBlack(true);
        } else {
          setIsBlack(false);
        }
      }
    });
  }, [pathname, links]);
  return __jsx("div", {
    className: `navigation-wrap ${isBlack ? 'is-black' : ''} ${scrollDir === 'up' ? 'scroll-up' : scrollDir === 'down' ? 'scroll-down' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    link: prev,
    scroll: false,
    className: "nav-el prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, mobile ? 'Prev' : 'Previous')), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    link: next,
    scroll: false,
    className: "nav-el next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Next")));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/SectionLine.js":
/*!*******************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/SectionLine.js ***!
  \*******************************************************************/
/*! exports provided: SectionLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return SectionLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\SectionLine.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SectionLine = ({
  direction,
  display = true
}) => display && __jsx("span", {
  className: `section-line ${direction ? direction : ''}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/SectionSlider.js":
/*!*********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/SectionSlider.js ***!
  \*********************************************************************/
/*! exports provided: SectionSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return SectionSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\SectionSlider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SliderConfigs = {
  speed: 800,
  dots: true,
  arrows: false,
  slidesToScroll: 1,
  customPaging: () => __jsx("div", {
    className: "custom-dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))
};
const SectionSlider = props => {
  const {
    slidesToShow = 1,
    slides,
    className
  } = props;
  return __jsx("div", {
    className: `section-slider-wrap ${className ? className : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    slidesToShow: slidesToShow
  }, SliderConfigs, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), slides && slides.map((slide, index) => __jsx("div", {
    key: `slide_${index}`,
    className: "slide-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "slide-image-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("img", {
    src: slide.img,
    alt: `Slide_${index}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/TypeSomething.js":
/*!*********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/TypeSomething.js ***!
  \*********************************************************************/
/*! exports provided: TypeSomething */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return TypeSomething; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Projects\\TypeSomething.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TypeSomething = ({
  content,
  whiteText,
  size
}) => {
  return __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, content && content.map((text, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: index,
    xs: 6,
    md: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("p", {
    className: `text-with-dot ${whiteText ? 'is-white' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, text))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Projects/index.js":
/*!*************************************************************!*\
  !*** ./src/Components/SectionsComponents/Projects/index.js ***!
  \*************************************************************/
/*! exports provided: FlipBook, ScrollBox, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlipBook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlipBook */ "./src/Components/SectionsComponents/Projects/FlipBook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _FlipBook__WEBPACK_IMPORTED_MODULE_0__["FlipBook"]; });

/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return _ScrollBox__WEBPACK_IMPORTED_MODULE_1__["ScrollBox"]; });

/* harmony import */ var _FontExample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FontExample */ "./src/Components/SectionsComponents/Projects/FontExample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return _FontExample__WEBPACK_IMPORTED_MODULE_2__["FontExample"]; });

/* harmony import */ var _SectionLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionLine */ "./src/Components/SectionsComponents/Projects/SectionLine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return _SectionLine__WEBPACK_IMPORTED_MODULE_3__["SectionLine"]; });

/* harmony import */ var _ProjectColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectColor */ "./src/Components/SectionsComponents/Projects/ProjectColor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return _ProjectColor__WEBPACK_IMPORTED_MODULE_4__["ProjectColor"]; });

/* harmony import */ var _SectionSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SectionSlider */ "./src/Components/SectionsComponents/Projects/SectionSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return _SectionSlider__WEBPACK_IMPORTED_MODULE_5__["SectionSlider"]; });

/* harmony import */ var _TypeSomething__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TypeSomething */ "./src/Components/SectionsComponents/Projects/TypeSomething.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return _TypeSomething__WEBPACK_IMPORTED_MODULE_6__["TypeSomething"]; });

/* harmony import */ var _ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectInfoWrap */ "./src/Components/SectionsComponents/Projects/ProjectInfoWrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return _ProjectInfoWrap__WEBPACK_IMPORTED_MODULE_7__["ProjectInfoWrap"]; });

/* harmony import */ var _BottomNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BottomNavigation */ "./src/Components/SectionsComponents/Projects/BottomNavigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return _BottomNavigation__WEBPACK_IMPORTED_MODULE_8__["BottomNavigation"]; });

/* harmony import */ var _ProjectsNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectsNavigation */ "./src/Components/SectionsComponents/Projects/ProjectsNavigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return _ProjectsNavigation__WEBPACK_IMPORTED_MODULE_9__["ProjectsNavigation"]; });

/* harmony import */ var _ProjectMainSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectMainSection */ "./src/Components/SectionsComponents/Projects/ProjectMainSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return _ProjectMainSection__WEBPACK_IMPORTED_MODULE_10__["ProjectMainSection"]; });

/* harmony import */ var _ProjectAboutSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectAboutSection */ "./src/Components/SectionsComponents/Projects/ProjectAboutSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return _ProjectAboutSection__WEBPACK_IMPORTED_MODULE_11__["ProjectAboutSection"]; });














/***/ }),

/***/ "./src/Components/SectionsComponents/ScrollBox.js":
/*!********************************************************!*\
  !*** ./src/Components/SectionsComponents/ScrollBox.js ***!
  \********************************************************/
/*! exports provided: ScrollBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return ScrollBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\ScrollBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ScrollBox = ({
  firstLoad = true,
  isBlack,
  className
}) => {
  const {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return desktop && __jsx("div", {
    className: `scroll-box ${className ? className : ''} ${firstLoad ? 'on-first-load' : ''} ${isBlack ? 'is-black' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SectionInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SectionTitle = ({
  title,
  children,
  main = false,
  className,
  isContentWhite,
  display = true
}) => {
  const customClassName = `section-title ${className ? className : ''} ${isContentWhite ? 'is-white' : ''}`;
  return display && main ? __jsx("h1", {
    className: customClassName,
    children: title || children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }) : __jsx("h6", {
    className: customClassName,
    children: title || children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  });
};
const SectionDesc = ({
  children,
  withDot,
  className,
  isContentWhite,
  display = true
}) => {
  const FloatText = 'This website which duis aute irure dolor  in rep ehenderit in voluptate velit esse cillum' + ' dolo rez eu fugia nulla pariatur.';
  const customClassName = `section-desc ${className ? className : ''} ${withDot ? 'with-dot' : ''} ${isContentWhite ? 'is-white' : ''}`;
  return display && __jsx("p", {
    className: customClassName,
    children: children ? children : FloatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  });
};

/***/ }),

/***/ "./src/Components/SectionsComponents/SectionLayout.js":
/*!************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionLayout.js ***!
  \************************************************************/
/*! exports provided: SectionLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return SectionLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionWrapper */ "./src/Components/SectionsComponents/SectionWrapper.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SectionLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionLayout = props => {
  const {
    id,
    wrap = true,
    Header,
    Footer,
    children,
    className,
    sectionClassName,
    customWrap = false
  } = props;
  return __jsx("section", {
    id: id,
    className: `project-section ${sectionClassName ? sectionClassName : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, Header && __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), children && (customWrap ? children : wrap ? __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    className: className ? className : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, children) : children.map((Child, index) => __jsx(_SectionWrapper__WEBPACK_IMPORTED_MODULE_1__["SectionWrapper"], {
    key: index,
    className: Child.props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, Child))), Footer && __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/SectionWrapper.js":
/*!*************************************************************!*\
  !*** ./src/Components/SectionsComponents/SectionWrapper.js ***!
  \*************************************************************/
/*! exports provided: SectionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SectionWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SectionWrapper = ({
  children,
  noPadding,
  className
}) => __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: `section-wrapper${noPadding ? ' no-padding' : ''}${className ? ` ${className}` : ''}`,
  children: children,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/***/ }),

/***/ "./src/Components/SectionsComponents/SeeMoreLink.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/SeeMoreLink.js ***!
  \**********************************************************/
/*! exports provided: SeeMoreLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeMoreLink", function() { return SeeMoreLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SeeMoreLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SeeMoreLink = props => {
  const {
    className,
    display = true,
    direction = 'left',
    nav = '/portfolio',
    label = 'See works'
  } = props;
  const customClassName = `see-more-link ${display ? 'd-block' : 'd-none'} ${className ? className : ''} ${direction === 'right' ? 'to-right' : 'to-left'}`;
  return __jsx("div", {
    className: customClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["ActiveLink"], {
    link: nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, label)));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceFeedback.js":
/*!***********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceFeedback.js ***!
  \***********************************************************************/
/*! exports provided: ServiceFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return ServiceFeedback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Inputs */ "./src/Components/Inputs/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceFeedback.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ServiceFeedback = ({
  title,
  content
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    feedbackName: '',
    feedbackPhone: '',
    feedbackMessage: ''
  });

  const handleChange = e => {
    const {
      id,
      value
    } = e.target;
    setUser(prev => _objectSpread({}, prev, {
      [id]: value
    }));
  };

  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "service-feedback-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, content, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: title,
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "form-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_Inputs__WEBPACK_IMPORTED_MODULE_2__["InputControl"], {
    label: "Name",
    id: "feedbackName",
    onChange: handleChange,
    value: user.feedbackName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_Inputs__WEBPACK_IMPORTED_MODULE_2__["InputControl"], {
    label: "Phone",
    id: "feedbackPhone",
    onChange: handleChange,
    value: user.feedbackPhone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_Inputs__WEBPACK_IMPORTED_MODULE_2__["InputControl"], {
    label: "Message",
    id: "feedbackMessage",
    onChange: handleChange,
    value: user.feedbackMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("button", {
    type: "submit",
    className: "custom-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Send"))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceMainSection.js":
/*!**************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceMainSection.js ***!
  \**************************************************************************/
/*! exports provided: ServiceMainSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return ServiceMainSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceMainSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-p5 */ "react-p5", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-p5 */ "react-p5")],
    modules: ['react-p5']
  }
});

const SectionHeader = statue => () => {
  const {
    desktop
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ScrollBox__WEBPACK_IMPORTED_MODULE_2__["ScrollBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"], {
    isDot: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), desktop ? __jsx(Sketch, {
    setup: Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["setup"])(statue),
    draw: _Helpers__WEBPACK_IMPORTED_MODULE_3__["draw"],
    className: "section-image-wrap main-statue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) : __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"], {
    src: statue,
    className: "main-statue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

const ServiceMainSection = ({
  title,
  desc,
  statue
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionLayout"], {
    id: "service-main-section",
    Header: SectionHeader(statue),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionTitle"], {
    title: title,
    main: true,
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionDesc"], {
    isContentWhite: true,
    children: desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServicePriceMiscalculations.js":
/*!***********************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServicePriceMiscalculations.js ***!
  \***********************************************************************************/
/*! exports provided: ServicePriceMiscalculations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return ServicePriceMiscalculations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServicePriceMiscalculations.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ServicePriceMiscalculations = ({
  priceDesc,
  stages,
  isPrice = true
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "service-price-miscalculation",
    Header: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
      isDot: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, isPrice && __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "price-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "\u0426\u0435\u043D\u044B",
    className: "price-title",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    isContentWhite: true,
    className: "price-desc",
    children: priceDesc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "miscalculations-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: "\u042D\u0442\u0430\u043F\u044B \u043F\u0440\u043E\u0441\u0447\u0435\u0442\u0430",
    className: "miscalculations-title",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, stages && stages.map(({
    title,
    desc
  }, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `stage_${index}`,
    className: "col-stage",
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, index + 1), " ", title),
    className: "stage-title",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    children: desc,
    isContentWhite: true,
    className: "stage-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })))))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceQuote.js":
/*!********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceQuote.js ***!
  \********************************************************************/
/*! exports provided: ServiceQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return ServiceQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceQuote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const QuoteCommas = '/Assets/Images/Services/LandingPage/QuoteCommas.svg';
const ServiceQuote = ({
  quotes
}) => {
  const {
    0: emptyMsg,
    1: setEmptyMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: randQuote,
    1: setRandQuote
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setRandQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleGenerate = () => {
    const getRandNumb = Math.floor(Math.random() * quotes.length);
    const getRandQuote = quotes[getRandNumb];

    if (quotes.length === 0) {
      setEmptyMsg('Упс, цитатки кончились :(');
    }

    setRandQuote(getRandQuote);
    quotes.splice(getRandNumb, 1);
  };

  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["SectionLayout"], {
    id: "service-quote-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "quote-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    src: QuoteCommas,
    className: "quote-commas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("p", {
    className: "quote-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, emptyMsg ? emptyMsg : randQuote)), __jsx("button", {
    type: "button",
    className: "custom-btn",
    onClick: handleGenerate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceShortPortfolio.js":
/*!*****************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceShortPortfolio.js ***!
  \*****************************************************************************/
/*! exports provided: ServiceShortPortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return ServiceShortPortfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceShortPortfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ServiceShortPortfolio = ({
  content
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionLayout"], {
    id: "service-short-portfolio-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, content, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionTitle"], {
    title: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, _Config__WEBPACK_IMPORTED_MODULE_3__["ProjectsList"][0].content.map((project, index) => index < 3 && __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `short_project_${index}`,
    className: "col-short-portfolio",
    xs: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: project.link,
    className: "short-portfolio-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"], {
    src: project.img,
    className: "short-portfolio-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("p", {
    className: "short-portfolio-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, project.title)))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: "/portfolio",
    className: "custom-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "SEE MORE")));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceTarget.js":
/*!*********************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceTarget.js ***!
  \*********************************************************************/
/*! exports provided: ServiceTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return ServiceTarget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceTarget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TargetImg = '/Assets/Images/Services/LandingPage/Target.png';
const ServiceTarget = ({
  title = "Какая цель?",
  desc,
  img = TargetImg
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionLayout"], {
    id: "service-target-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: img,
    className: "target-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionTitle"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_3__["SectionDesc"], {
    children: desc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/ServiceWorkStages.js":
/*!*************************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/ServiceWorkStages.js ***!
  \*************************************************************************/
/*! exports provided: ServiceWorkStages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return ServiceWorkStages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\Services\\ServiceWorkStages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ServiceWorkStages = ({
  stages,
  title
}) => {
  return __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionLayout"], {
    id: "service-work-stages-section",
    Header: () => __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"], {
      isDot: true,
      display: react_device_detect__WEBPACK_IMPORTED_MODULE_1__["isBrowser"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionTitle"], {
    title: title,
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, stages.map((stage, index) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: `work_stage_${index}`,
    xs: 12,
    md: index % 2 !== 0 ? {
      offset: 1,
      span: 5
    } : 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "stage-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ImageWrapper"], {
    src: stage.img,
    className: "stage-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("p", {
    className: "stage-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, stage.name))))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/Services/index.js":
/*!*************************************************************!*\
  !*** ./src/Components/SectionsComponents/Services/index.js ***!
  \*************************************************************/
/*! exports provided: ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceQuote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceQuote */ "./src/Components/SectionsComponents/Services/ServiceQuote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return _ServiceQuote__WEBPACK_IMPORTED_MODULE_0__["ServiceQuote"]; });

/* harmony import */ var _ServiceTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceTarget */ "./src/Components/SectionsComponents/Services/ServiceTarget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return _ServiceTarget__WEBPACK_IMPORTED_MODULE_1__["ServiceTarget"]; });

/* harmony import */ var _ServiceFeedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceFeedback */ "./src/Components/SectionsComponents/Services/ServiceFeedback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return _ServiceFeedback__WEBPACK_IMPORTED_MODULE_2__["ServiceFeedback"]; });

/* harmony import */ var _ServiceWorkStages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceWorkStages */ "./src/Components/SectionsComponents/Services/ServiceWorkStages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return _ServiceWorkStages__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkStages"]; });

/* harmony import */ var _ServiceMainSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceMainSection */ "./src/Components/SectionsComponents/Services/ServiceMainSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _ServiceMainSection__WEBPACK_IMPORTED_MODULE_4__["ServiceMainSection"]; });

/* harmony import */ var _ServiceShortPortfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServiceShortPortfolio */ "./src/Components/SectionsComponents/Services/ServiceShortPortfolio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _ServiceShortPortfolio__WEBPACK_IMPORTED_MODULE_5__["ServiceShortPortfolio"]; });

/* harmony import */ var _ServicePriceMiscalculations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServicePriceMiscalculations */ "./src/Components/SectionsComponents/Services/ServicePriceMiscalculations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _ServicePriceMiscalculations__WEBPACK_IMPORTED_MODULE_6__["ServicePriceMiscalculations"]; });









/***/ }),

/***/ "./src/Components/SectionsComponents/SocialsWrap.js":
/*!**********************************************************!*\
  !*** ./src/Components/SectionsComponents/SocialsWrap.js ***!
  \**********************************************************/
/*! exports provided: SocialsWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsWrap", function() { return SocialsWrap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SectionsComponents\\SocialsWrap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SocialsWrap = props => {
  const {
    display = true,
    firstLoad
  } = props;
  return display && __jsx("div", {
    className: "socials-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, _Config__WEBPACK_IMPORTED_MODULE_1__["Socials"] && _Config__WEBPACK_IMPORTED_MODULE_1__["Socials"].map((item, index) => __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    key: index,
    link: item.href,
    target: "_blank",
    className: `social-link ${firstLoad && 'on-first-load'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: item.src,
    alt: item.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/Components/SectionsComponents/index.js":
/*!****************************************************!*\
  !*** ./src/Components/SectionsComponents/index.js ***!
  \****************************************************/
/*! exports provided: Blob, Layout, ScrollBox, ActiveLink, SeeMoreLink, SectionTitle, SectionDesc, SocialsWrap, MainWrapper, ImageWrapper, ApolloStatue, SectionLayout, SectionWrapper, ServiceQuote, ServiceTarget, ServiceFeedback, ServiceWorkStages, ServiceMainSection, ServiceShortPortfolio, ServicePriceMiscalculations, FlipBook, FontExample, SectionLine, ProjectColor, SectionSlider, TypeSomething, ProjectInfoWrap, BottomNavigation, ProjectsNavigation, ProjectMainSection, ProjectAboutSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blob */ "./src/Components/SectionsComponents/Blob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return _Blob__WEBPACK_IMPORTED_MODULE_0__["Blob"]; });

/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/Components/SectionsComponents/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"]; });

/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services */ "./src/Components/SectionsComponents/Services/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceQuote", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTarget", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFeedback", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkStages", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkStages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceMainSection", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceShortPortfolio", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServiceShortPortfolio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicePriceMiscalculations", function() { return _Services__WEBPACK_IMPORTED_MODULE_2__["ServicePriceMiscalculations"]; });

/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/Components/SectionsComponents/Projects/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlipBook", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FlipBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollBox", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ScrollBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontExample", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["FontExample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectColor", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionSlider", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["SectionSlider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSomething", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["TypeSomething"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoWrap", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectInfoWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["BottomNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsNavigation", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectsNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMainSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectMainSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAboutSection", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["ProjectAboutSection"]; });

/* harmony import */ var _ScrollBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollBox */ "./src/Components/SectionsComponents/ScrollBox.js");
/* empty/unused harmony star reexport *//* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActiveLink */ "./src/Components/SectionsComponents/ActiveLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveLink", function() { return _ActiveLink__WEBPACK_IMPORTED_MODULE_5__["ActiveLink"]; });

/* harmony import */ var _SeeMoreLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SeeMoreLink */ "./src/Components/SectionsComponents/SeeMoreLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeeMoreLink", function() { return _SeeMoreLink__WEBPACK_IMPORTED_MODULE_6__["SeeMoreLink"]; });

/* harmony import */ var _SectionInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SectionInfo */ "./src/Components/SectionsComponents/SectionInfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return _SectionInfo__WEBPACK_IMPORTED_MODULE_7__["SectionTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionDesc", function() { return _SectionInfo__WEBPACK_IMPORTED_MODULE_7__["SectionDesc"]; });

/* harmony import */ var _SocialsWrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SocialsWrap */ "./src/Components/SectionsComponents/SocialsWrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialsWrap", function() { return _SocialsWrap__WEBPACK_IMPORTED_MODULE_8__["SocialsWrap"]; });

/* harmony import */ var _MainWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainWrapper */ "./src/Components/SectionsComponents/MainWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return _MainWrapper__WEBPACK_IMPORTED_MODULE_9__["MainWrapper"]; });

/* harmony import */ var _ImageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageWrapper */ "./src/Components/SectionsComponents/ImageWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return _ImageWrapper__WEBPACK_IMPORTED_MODULE_10__["ImageWrapper"]; });

/* harmony import */ var _ApolloStatue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApolloStatue */ "./src/Components/SectionsComponents/ApolloStatue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloStatue", function() { return _ApolloStatue__WEBPACK_IMPORTED_MODULE_11__["ApolloStatue"]; });

/* harmony import */ var _SectionLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SectionLayout */ "./src/Components/SectionsComponents/SectionLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLayout", function() { return _SectionLayout__WEBPACK_IMPORTED_MODULE_12__["SectionLayout"]; });

/* harmony import */ var _SectionWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SectionWrapper */ "./src/Components/SectionsComponents/SectionWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return _SectionWrapper__WEBPACK_IMPORTED_MODULE_13__["SectionWrapper"]; });
















/***/ }),

/***/ "./src/Components/SiteHeader/Header.js":
/*!*********************************************!*\
  !*** ./src/Components/SiteHeader/Header.js ***!
  \*********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_Includes_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styles/Includes/header.scss */ "./src/Styles/Includes/header.scss");
/* harmony import */ var _Styles_Includes_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_Includes_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SiteHeader\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = '/Assets/Images/logo.svg';
const Header = ({
  open
}) => {
  return __jsx("header", {
    className: "site-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_2__["ActiveLink"], {
    link: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: Logo,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))), __jsx("div", {
    className: "menu",
    onClick: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./src/Components/SiteHeader/Menu.js":
/*!*******************************************!*\
  !*** ./src/Components/SiteHeader/Menu.js ***!
  \*******************************************/
/*! exports provided: MenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Components/Config/index.js");
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Helpers */ "./src/Helpers/index.js");
/* harmony import */ var _SectionsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SectionsComponents */ "./src/Components/SectionsComponents/index.js");
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SiteHeader\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MenuContainer = props => {
  const {
    close,
    open
  } = props;
  const {
    mobile
  } = Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx("div", {
    className: `menu-wrap ${open ? 'is-opened' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, !mobile && __jsx("p", {
    className: "switch-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Sound"), __jsx("div", {
    className: "close-icon",
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "list-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, _Config__WEBPACK_IMPORTED_MODULE_2__["MenuLinks"].map(({
    title,
    linkTitle,
    to
  }, index) => __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: `menu-link_${index}`,
    className: "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "menu-sub-title-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SectionTitle"], {
    className: "menu-sub-title",
    title: title,
    isContentWhite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "menu-sub-title-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    className: "menu-link-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: to,
    className: "menu-link",
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, linkTitle))))), !mobile && __jsx("div", {
    className: "switch-box switch-box_sound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "switch-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("span", {
    className: "switch-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "switch-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "On")), __jsx("div", {
    className: "switch-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("span", {
    className: "switch-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    className: "switch-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Off"))), __jsx("div", {
    className: "switch-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: "/",
    className: "switch-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("p", {
    className: "switch-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "EN"), __jsx("span", {
    className: "switch-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["ActiveLink"], {
    link: "/",
    className: "switch-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("p", {
    className: "switch-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "RU"), __jsx("span", {
    className: "switch-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }))), __jsx(_SectionsComponents__WEBPACK_IMPORTED_MODULE_4__["SocialsWrap"], {
    display: mobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/Components/SiteHeader/MetaHead.js":
/*!***********************************************!*\
  !*** ./src/Components/SiteHeader/MetaHead.js ***!
  \***********************************************/
/*! exports provided: MetaHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaHead", function() { return MetaHead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\micore-next-app\\src\\Components\\SiteHeader\\MetaHead.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MetaHead = () => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("meta", {
    name: "description",
    content: "Web studio Manticore Development",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:title",
    content: "TITLE OF YOUR POST OR PAGE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:description",
    content: "DESCRIPTION OF PAGE CONTENT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image",
    content: "LINK TO THE IMAGE FILE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:url",
    content: "PERMALINK",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:site_name",
    content: "SITE NAME",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("link", {
    rel: "canonical",
    href: "https://micore-stuido.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("script", {
    type: "text/javascript",
    src: "https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Manticore WEB studio"));
};

/***/ }),

/***/ "./src/Components/SiteHeader/index.js":
/*!********************************************!*\
  !*** ./src/Components/SiteHeader/index.js ***!
  \********************************************/
/*! exports provided: MenuContainer, Header, MetaHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/Components/SiteHeader/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["MenuContainer"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/Components/SiteHeader/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["Header"]; });

/* harmony import */ var _MetaHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetaHead */ "./src/Components/SiteHeader/MetaHead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaHead", function() { return _MetaHead__WEBPACK_IMPORTED_MODULE_2__["MetaHead"]; });





/***/ }),

/***/ "./src/Helpers/animationClass.js":
/*!***************************************!*\
  !*** ./src/Helpers/animationClass.js ***!
  \***************************************/
/*! exports provided: AnimationClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationClass", function() { return AnimationClass; });
const AnimationClass = ({
  className,
  firstLoad,
  animation
}) => {
  return `${className ? className : ''} ${firstLoad ? 'on-first-load' : animation ? 'on-enter' : 'on-leave'}`;
};

/***/ }),

/***/ "./src/Helpers/getRandomInt.js":
/*!*************************************!*\
  !*** ./src/Helpers/getRandomInt.js ***!
  \*************************************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/***/ }),

/***/ "./src/Helpers/glitch.js":
/*!*******************************!*\
  !*** ./src/Helpers/glitch.js ***!
  \*******************************/
/*! exports provided: setup, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
let glitch;
let isLoaded = false;
const setup = img => (p5, canvasParentRef) => {
  p5.background('rgba(0, 0, 0, 0)');
  p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  p5.loadImage(img, function (img) {
    glitch = new Glitch(img, p5);
    isLoaded = true;
  });
};
const draw = p5 => {
  p5.clear();
  p5.background('rgba(0, 0, 0, 0)');

  if (isLoaded) {
    glitch.show();
  }
};

class Glitch {
  constructor(img, p5) {
    this.p5 = p5;
    this.channelLen = 4;
    this.imgOrigin = img;
    this.imgOrigin.loadPixels();
    this.copyData = [];
    this.flowLineImgs = [];
    this.shiftLineImgs = [];
    this.shiftRGBs = [];
    this.scatImgs = [];
    this.throughFlag = true;
    this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels); // flow line

    for (let i = 0; i < 1; i++) {
      let o = {
        pixels: null,
        t1: this.p5.floor(this.p5.random(0, 1000)),
        speed: this.p5.floor(this.p5.random(4, 15)),
        randX: this.p5.floor(this.p5.random(24, 80))
      };
      this.flowLineImgs.push(o);
    } // shift line


    for (let i = 0; i < 6; i++) {
      let o = null;
      this.shiftLineImgs.push(o);
    } // shift RGB


    for (let i = 0; i < 1; i++) {
      let o = null;
      this.shiftRGBs.push(o);
    } // scat imgs


    for (let i = 0; i < 3; i++) {
      let scatImg = {
        img: null,
        x: 0,
        y: 0
      };
      this.scatImgs.push(scatImg);
    }
  }

  replaceData(destImg, srcPixels) {
    for (let y = 0; y < destImg.height; y++) {
      for (let x = 0; x < destImg.width; x++) {
        let r, g, b, a;
        let index;
        index = (y * destImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        destImg.pixels[r] = srcPixels[r];
        destImg.pixels[g] = srcPixels[g];
        destImg.pixels[b] = srcPixels[b];
        destImg.pixels[a] = srcPixels[a];
      }
    }

    destImg.updatePixels();
  }

  flowLine(srcImg, obj) {
    let destPixels, tempY;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    obj.t1 %= srcImg.height;
    obj.t1 += obj.speed;
    tempY = this.p5.floor(this.p5.noise(obj.t1) * srcImg.height); // tempY = this.p5.floor(obj.t1)

    for (let y = 0; y < srcImg.height; y++) {
      if (tempY === y) {
        for (let x = 0; x < srcImg.width; x++) {
          let r, g, b, a;
          let index;
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          destPixels[r] = srcImg.pixels[r] + obj.randX;
          destPixels[g] = srcImg.pixels[g] + obj.randX;
          destPixels[b] = srcImg.pixels[b] + obj.randX;
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }

    return destPixels;
  }

  shiftLine(srcImg) {
    let offsetX;
    let rangeMin, rangeMax;
    let destPixels;
    let rangeH;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    rangeH = srcImg.height;
    rangeMin = this.p5.floor(this.p5.random(0, rangeH));
    rangeMax = rangeMin + this.p5.floor(this.p5.random(1, rangeH - rangeMin));
    offsetX = this.channelLen * this.p5.floor(this.p5.random(-40, 40));

    for (let y = 0; y < srcImg.height; y++) {
      if (y > rangeMin && y < rangeMax) {
        for (let x = 0; x < srcImg.width; x++) {
          let r, g, b, a;
          let r2, g2, b2;
          let index;
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          r2 = r + offsetX;
          g2 = g + offsetX;
          b2 = b + offsetX;
          destPixels[r] = srcImg.pixels[r2];
          destPixels[g] = srcImg.pixels[g2];
          destPixels[b] = srcImg.pixels[b2];
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }

    return destPixels;
  }

  shiftRGB(srcImg) {
    let randR, randG, randB;
    let destPixels;
    let range;
    range = 16;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    randR = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;
    randG = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;
    randB = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;

    for (let y = 0; y < srcImg.height; y++) {
      for (let x = 0; x < srcImg.width; x++) {
        let r, g, b, a;
        let r2, g2, b2;
        let index;
        index = (y * srcImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        r2 = (r + randR) % srcImg.pixels.length;
        g2 = (g + randG) % srcImg.pixels.length;
        b2 = (b + randB) % srcImg.pixels.length;
        destPixels[r] = srcImg.pixels[r2];
        destPixels[g] = srcImg.pixels[g2];
        destPixels[b] = srcImg.pixels[b2];
        destPixels[a] = srcImg.pixels[a];
      }
    }

    return destPixels;
  }

  getRandomRectImg(srcImg) {
    let startX;
    let startY;
    let rectW;
    let rectH;
    let destImg;
    startX = this.p5.floor(this.p5.random(0, srcImg.width - 30));
    startY = this.p5.floor(this.p5.random(0, srcImg.height - 50));
    rectW = this.p5.floor(this.p5.random(30, srcImg.width - startX));
    rectH = this.p5.floor(this.p5.random(1, 50));
    destImg = srcImg.get(startX, startY, rectW, rectH);
    destImg.loadPixels();
    return destImg;
  }

  setImage() {
    this.p5.push();
    this.p5.translate((this.p5.width - this.imgOrigin.width) / 2, (this.p5.height - this.imgOrigin.height) / 2);
    this.p5.image(this.imgOrigin, 0, 0);
    this.p5.pop();
  }

  show() {
    //restore the original state
    this.replaceData(this.imgOrigin, this.copyData); // sometimes pass without effect processing

    let n = this.p5.floor(this.p5.random(100));

    if (n > 75 && this.throughFlag) {
      this.throughFlag = false;
      setTimeout(() => {
        this.throughFlag = true;
      }, this.p5.floor(this.p5.random(40, 400)));
    }

    if (!this.throughFlag) {
      this.p5.push();
      this.p5.translate((this.p5.width - this.imgOrigin.width) / 2, (this.p5.height - this.imgOrigin.height) / 2);
      this.p5.image(this.imgOrigin, 0, 0);
      this.p5.pop();
      return;
    } // flow line


    this.flowLineImgs.forEach((v, i, arr) => {
      arr[i].pixels = this.flowLine(this.imgOrigin, v);

      if (arr[i].pixels) {
        this.replaceData(this.imgOrigin, arr[i].pixels);
      }
    }); // shift line

    this.shiftLineImgs.forEach((v, i, arr) => {
      if (this.p5.floor(this.p5.random(100)) > 50) {
        arr[i] = this.shiftLine(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      } else {
        if (arr[i]) {
          this.replaceData(this.imgOrigin, arr[i]);
        }
      }
    }); // shift rgb

    this.shiftRGBs.forEach((v, i, arr) => {
      if (this.p5.floor(this.p5.random(100)) > 65) {
        arr[i] = this.shiftRGB(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      }
    });
    this.setImage(); // scat image

    this.scatImgs.forEach(obj => {
      this.p5.push();
      this.p5.translate((this.p5.width - this.imgOrigin.width) / 2, (this.p5.height - this.imgOrigin.height) / 2);

      if (this.p5.floor(this.p5.random(100)) > 80) {
        obj.x = this.p5.floor(this.p5.random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
        obj.y = this.p5.floor(this.p5.random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
        obj.img = this.getRandomRectImg(this.imgOrigin);
      }

      if (obj.img) {
        this.p5.image(obj.img, obj.x, obj.y);
      }

      this.p5.pop();
    });
  }

}

/***/ }),

/***/ "./src/Helpers/index.js":
/*!******************************!*\
  !*** ./src/Helpers/index.js ***!
  \******************************/
/*! exports provided: setup, draw, getRandomInt, useMouseMove, AnimationClass, useCheckBottom, useDeviceDetect, useScrollDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glitch */ "./src/Helpers/glitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return _glitch__WEBPACK_IMPORTED_MODULE_0__["setup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return _glitch__WEBPACK_IMPORTED_MODULE_0__["draw"]; });

/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomInt */ "./src/Helpers/getRandomInt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return _getRandomInt__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"]; });

/* harmony import */ var _useMouseMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMouseMove */ "./src/Helpers/useMouseMove.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMouseMove", function() { return _useMouseMove__WEBPACK_IMPORTED_MODULE_2__["useMouseMove"]; });

/* harmony import */ var _animationClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animationClass */ "./src/Helpers/animationClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClass", function() { return _animationClass__WEBPACK_IMPORTED_MODULE_3__["AnimationClass"]; });

/* harmony import */ var _useCheckBottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCheckBottom */ "./src/Helpers/useCheckBottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCheckBottom", function() { return _useCheckBottom__WEBPACK_IMPORTED_MODULE_4__["useCheckBottom"]; });

/* harmony import */ var _useDeviceDetect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useDeviceDetect */ "./src/Helpers/useDeviceDetect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeviceDetect", function() { return _useDeviceDetect__WEBPACK_IMPORTED_MODULE_5__["useDeviceDetect"]; });

/* harmony import */ var _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useScrollDirection */ "./src/Helpers/useScrollDirection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollDirection", function() { return _useScrollDirection__WEBPACK_IMPORTED_MODULE_6__["useScrollDirection"]; });









/***/ }),

/***/ "./src/Helpers/useCheckBottom.js":
/*!***************************************!*\
  !*** ./src/Helpers/useCheckBottom.js ***!
  \***************************************/
/*! exports provided: useCheckBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckBottom", function() { return useCheckBottom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCheckBottom = () => {
  const {
    0: isBottom,
    1: setIsBottom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', windowScroll);
    return () => {
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);

  const windowScroll = () => {
    const windowBottomPosition = Math.round(window.scrollY + window.innerHeight);
    const pageBottomPosition = document.getElementsByTagName('main')[0].offsetHeight;

    if (windowBottomPosition === pageBottomPosition) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  return isBottom;
};

/***/ }),

/***/ "./src/Helpers/useDeviceDetect.js":
/*!****************************************!*\
  !*** ./src/Helpers/useDeviceDetect.js ***!
  \****************************************/
/*! exports provided: useDeviceDetect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceDetect", function() { return useDeviceDetect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const InitState = {
  mobile: false,
  tablet: false,
  laptop: false,
  minWidthLaptop: false,
  desktop: false
};
const useDeviceDetect = () => {
  const {
    0: device,
    1: setDevice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(InitState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const width = window.innerWidth;

    if (width > 0 && width < 576) {
      setDevice(_objectSpread({}, InitState, {
        mobile: true
      }));
    }

    if (width > 767 && width < 991) {
      setDevice(_objectSpread({}, InitState, {
        tablet: true
      }));
    }

    if (width > 992) {
      setDevice(_objectSpread({}, InitState, {
        minWidthLaptop: true
      }));
    }

    if (width > 992 && width < 1199) {
      setDevice(_objectSpread({}, InitState, {
        laptop: true
      }));
    }

    if (width > 1200) {
      setDevice(_objectSpread({}, InitState, {
        minWidthLaptop: true,
        desktop: true
      }));
    }
  }, []);
  return device;
};

/***/ }),

/***/ "./src/Helpers/useMouseMove.js":
/*!*************************************!*\
  !*** ./src/Helpers/useMouseMove.js ***!
  \*************************************/
/*! exports provided: useMouseMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseMove", function() { return useMouseMove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let x;
const useMouseMove = () => {
  const {
    0: mouseStp,
    1: setMouseStp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const mouseMoveFn = () => {
    if (x) {
      setMouseStp(false);
      clearTimeout(x);
    }

    x = setTimeout(() => {
      setMouseStp(true);
    }, 500);
  };

  return [mouseStp, mouseMoveFn];
};

/***/ }),

/***/ "./src/Helpers/useScrollDirection.js":
/*!*******************************************!*\
  !*** ./src/Helpers/useScrollDirection.js ***!
  \*******************************************/
/*! exports provided: useScrollDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollDirection", function() { return useScrollDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';
const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off
} = {}) => {
  const {
    0: scrollDir,
    1: setScrollDir
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialDirection);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */


    !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);
  return scrollDir;
};

/***/ }),

/***/ "./src/Styles/Includes/header.scss":
/*!*****************************************!*\
  !*** ./src/Styles/Includes/header.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Styles/Pages/Projects/two-are.scss":
/*!************************************************!*\
  !*** ./src/Styles/Pages/Projects/two-are.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Styles/Sections/Projects/index.scss":
/*!*************************************************!*\
  !*** ./src/Styles/Sections/Projects/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Styles/Sections/Services/index.scss":
/*!*************************************************!*\
  !*** ./src/Styles/Sections/Services/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/projects/two-are.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\micore-next-app\pages\projects\two-are.js */"./pages/projects/two-are.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-p5":
/*!***************************!*\
  !*** external "react-p5" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-p5");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=two-are.js.map