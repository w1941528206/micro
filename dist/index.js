/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(
  [
    "https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js",
    "https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
  ],
  function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
    var __WEBPACK_EXTERNAL_MODULE_react__ = {};
    var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", {
      value: true,
    });
    Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", {
      value: true,
    });
    return {
      setters: [
        function (module) {
          Object.keys(module).forEach(function (key) {
            __WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
          });
        },
        function (module) {
          Object.keys(module).forEach(function (key) {
            __WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
          });
        },
      ],
      execute: function () {
        __WEBPACK_DYNAMIC_EXPORT__(
          /******/ (() => {
            // webpackBootstrap
            /******/ "use strict";
            /******/ var __webpack_modules__ = {
              /***/ "./src/index.js":
                /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
                /***/ (
                  __unused_webpack_module,
                  __webpack_exports__,
                  __webpack_require__
                ) => {
                  eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js");\n\n\n(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root")).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "hello"));\n\n//# sourceURL=webpack://micro/./src/index.js?'
                  );

                  /***/
                },

              /***/ "./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js":
                /*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js ***!
  \*******************************************************************************************/
                /***/ (
                  __unused_webpack_module,
                  exports,
                  __webpack_require__
                ) => {
                  eval(
                    '\n\nvar m = __webpack_require__(/*! react-dom */ "react-dom");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://micro/./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js?'
                  );

                  /***/
                },

              /***/ react:
                /*!************************!*\
  !*** external "react" ***!
  \************************/
                /***/ (module) => {
                  module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

                  /***/
                },

              /***/ "react-dom":
                /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
                /***/ (module) => {
                  module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

                  /***/
                },

              /******/
            };
            /************************************************************************/
            /******/ // The module cache
            /******/ var __webpack_module_cache__ = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
              /******/ // Check if module is in cache
              /******/ var cachedModule = __webpack_module_cache__[moduleId];
              /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/ var module = (__webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {},
                /******/
              });
              /******/
              /******/ // Execute the module function
              /******/ __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__
              );
              /******/
              /******/ // Return the exports of the module
              /******/ return module.exports;
              /******/
            }
            /******/
            /************************************************************************/
            /******/ /* webpack/runtime/make namespace object */
            /******/ (() => {
              /******/ // define __esModule on exports
              /******/ __webpack_require__.r = (exports) => {
                /******/ if (
                  typeof Symbol !== "undefined" &&
                  Symbol.toStringTag
                ) {
                  /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                  });
                  /******/
                }
                /******/ Object.defineProperty(exports, "__esModule", {
                  value: true,
                });
                /******/
              };
              /******/
            })();
            /******/
            /************************************************************************/
            /******/
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ // This entry module can't be inlined because the eval devtool is used.
            /******/ var __webpack_exports__ =
              __webpack_require__("./src/index.js");
            /******/
            /******/ return __webpack_exports__;
            /******/
          })()
        );
      },
    };
  }
);
