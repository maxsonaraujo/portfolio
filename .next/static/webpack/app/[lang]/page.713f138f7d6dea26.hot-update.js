"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/page",{

/***/ "(app-pages-browser)/./src/components/organisms/sidebar.tsx":
/*!**********************************************!*\
  !*** ./src/components/organisms/sidebar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/button */ \"(app-pages-browser)/./src/components/atoms/button.tsx\");\n/* harmony import */ var _molecules_langSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/langSelector */ \"(app-pages-browser)/./src/components/molecules/langSelector.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/.pnpm/@radix-ui+react-icons@1.3.0_react@18.2.0/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* __next_internal_client_entry_do_not_use__ Sidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Sidebar(param) {\n    let { children, dictionary } = param;\n    _s();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const classClosed = \"max-md:hidden\";\n    const classOpenNav = \"z-auto max-md:fixed flex flex-col max-md:w-full md:w-72 lg:w-72 h-screen bg-blue-900\";\n    const childrenWithProps = react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>{\n        // Verifica se o filho é um elemento válido antes de cloná-lo\n        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {\n            const Child = ()=>child;\n            //@ts-ignore\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {\n                setOpend: setOpened\n            }, void 0, false, {\n                fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                lineNumber: 28,\n                columnNumber: 20\n            }, this);\n        }\n        return child;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(classOpenNav, opened ? \"\" : classClosed),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-1 font-bold justify-center items-center flex-col\",\n                        children: childrenWithProps\n                    }, void 0, false, {\n                        fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex text-xs text-center p-4 text-white\",\n                        children: dictionary.copyright\n                    }, void 0, false, {\n                        fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden lg:hidden flex flex-row-reverse bg-white w-full mt-[-7px] fixed\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    size: \"default\",\n                    className: \"h-14\",\n                    onClick: ()=>{\n                        setOpened(!opened);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__.HamburgerMenuIcon, {\n                        className: \"h-6 w-6\"\n                    }, void 0, false, {\n                        fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_langSelector__WEBPACK_IMPORTED_MODULE_3__.LangSelector, {\n                dictionary: dictionary\n            }, void 0, false, {\n                fileName: \"/home/alcifmais/Documentos/Projetos/portfolio/src/components/organisms/sidebar.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Sidebar, \"NlcTG427FyldxNoySYHnS+sD/6I=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9zaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1Y7QUFDZ0I7QUFDeEI7QUFDeUI7QUFPbkQsU0FBU00sUUFBUSxLQUFzQztRQUF0QyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBZ0IsR0FBdEM7O0lBRXBCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNVSxjQUFjO0lBRXBCLE1BQU1DLGVBQWU7SUFHckIsTUFBTUMsb0JBQW9CYixxREFBYyxDQUFDZSxHQUFHLENBQUNSLFVBQVVTLENBQUFBO1FBQ25ELDZEQUE2RDtRQUM3RCxrQkFBSWhCLDJEQUFvQixDQUFDZ0IsUUFBUTtZQUM3QixNQUFNRSxRQUFRLElBQU1GO1lBQ3BCLFlBQVk7WUFDWixxQkFBTyw4REFBQ0U7Z0JBQU1DLFVBQVVUOzs7Ozs7UUFDNUI7UUFDQSxPQUFPTTtJQUNYO0lBRUEscUJBQ0k7OzBCQUVJLDhEQUFDSTtnQkFBSUMsV0FBV2pCLDhDQUFFQSxDQUFDUSxjQUFjSCxTQUFTLEtBQUtFOztrQ0FFM0MsOERBQUNTO3dCQUFJQyxXQUFVO2tDQUNWUjs7Ozs7O2tDQUVMLDhEQUFDTzt3QkFBSUMsV0FBVTtrQ0FDVmIsV0FBV2MsU0FBUzs7Ozs7Ozs7Ozs7OzBCQUs3Qiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNuQixpREFBTUE7b0JBQUNxQixTQUFRO29CQUFRQyxNQUFLO29CQUFVSCxXQUFVO29CQUM3Q0ksU0FBUzt3QkFDTGYsVUFBVSxDQUFDRDtvQkFDZjs4QkFFQSw0RUFBQ0osb0VBQWlCQTt3QkFBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXJDLDhEQUFDbEIsaUVBQVlBO2dCQUNUSyxZQUFZQTs7Ozs7Ozs7QUFLNUI7R0FqRGdCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvc2lkZWJhci50c3g/YmM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IElEaWN0aW9uYXJ5IH0gZnJvbSBcIkAvbGliL2RpY3Rpb25hcnlcIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vYXRvbXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBMYW5nU2VsZWN0b3IgfSBmcm9tIFwiLi4vbW9sZWN1bGVzL2xhbmdTZWxlY3RvclwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVJY29uIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1pY29uc1wiO1xuXG5pbnRlcmZhY2UgU2lkZWJhclByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICAgIGRpY3Rpb25hcnk6IElEaWN0aW9uYXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKHsgY2hpbGRyZW4sIGRpY3Rpb25hcnkgfTogU2lkZWJhclByb3BzKSB7XG5cbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgY2xhc3NDbG9zZWQgPSBcIm1heC1tZDpoaWRkZW5cIjtcblxuICAgIGNvbnN0IGNsYXNzT3Blbk5hdiA9IFwiei1hdXRvIG1heC1tZDpmaXhlZCBmbGV4IGZsZXgtY29sIG1heC1tZDp3LWZ1bGwgbWQ6dy03MiBsZzp3LTcyIGgtc2NyZWVuIGJnLWJsdWUtOTAwXCI7XG5cblxuICAgIGNvbnN0IGNoaWxkcmVuV2l0aFByb3BzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gZmlsaG8gw6kgdW0gZWxlbWVudG8gdsOhbGlkbyBhbnRlcyBkZSBjbG9uw6EtbG9cbiAgICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc3QgQ2hpbGQgPSAoKSA9PiBjaGlsZDtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIDxDaGlsZCBzZXRPcGVuZD17c2V0T3BlbmVkfSAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY2xhc3NPcGVuTmF2LCBvcGVuZWQgPyBcIlwiIDogY2xhc3NDbG9zZWQpfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5XaXRoUHJvcHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQteHMgdGV4dC1jZW50ZXIgcC00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2RpY3Rpb25hcnkuY29weXJpZ2h0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gbGc6aGlkZGVuIGZsZXggZmxleC1yb3ctcmV2ZXJzZSBiZy13aGl0ZSB3LWZ1bGwgbXQtWy03cHhdIGZpeGVkXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiZGVmYXVsdFwiIGNsYXNzTmFtZT1cImgtMTRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuZWQoIW9wZW5lZClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXJNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8TGFuZ1NlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeT17ZGljdGlvbmFyeX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiTGFuZ1NlbGVjdG9yIiwiY24iLCJIYW1idXJnZXJNZW51SWNvbiIsIlNpZGViYXIiLCJjaGlsZHJlbiIsImRpY3Rpb25hcnkiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJjbGFzc0Nsb3NlZCIsImNsYXNzT3Blbk5hdiIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiQ2hpbGQiLCJzZXRPcGVuZCIsImRpdiIsImNsYXNzTmFtZSIsImNvcHlyaWdodCIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/organisms/sidebar.tsx\n"));

/***/ })

});