"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/chat",{

/***/ "./components/conversations/ChatOnline.js":
/*!************************************************!*\
  !*** ./components/conversations/ChatOnline.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ChatOnline = function(param) {\n    var users1 = param.users, setCurrentChat = param.setCurrentChat;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), user1 = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newConversations = ref2[0], setNewConversations = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getUsers = function() {\n            var _ref = _asyncToGenerator(F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/users?_id=\" + currentUserId);\n                        case 3:\n                            data = _ctx.sent.data;\n                            setUser(data);\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return function getUsers() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getUsers();\n    }, [\n        state.user._id\n    ]);\n    var handleClick = function() {\n        var _ref = _asyncToGenerator(F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(users) {\n            var res;\n            return F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/conversation/find/\".concat(state.user._id, \"/\").concat(users._id));\n                    case 3:\n                        res = _ctx.sent;\n                        if (res.data != null) {\n                            setCurrentChat(res.data);\n                        } else {\n                            startConversations();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function handleClick(users) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var imageSource = function(imageuser) {\n        if (imageuser.image) {\n            return imageuser.image.url;\n        } else {\n            return;\n        }\n    };\n    var startConversations = function() {\n        var _ref = _asyncToGenerator(F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            var data;\n            return F_Facultate_Anul4_Licenta_Licenta_MindHelper_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/conversation\", {\n                            senderId: state.user._id,\n                            receiverId: user.user._id\n                        });\n                    case 3:\n                        data = _ctx.sent.data;\n                        console.log(data);\n                        setNewConversations(data);\n                        setCurrentChat(data);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function startConversations(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"d-flex mt-1\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.List, {\n                    itemLayout: \"horizontal\",\n                    dataSource: users1,\n                    renderItem: function(restuser) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: restuser._id !== state.user._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return handleClick(restuser);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.List.Item, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.List.Item.Meta, {\n                                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                                            size: 40,\n                                            src: imageSource(restuser),\n                                            children: restuser.username[0]\n                                        }, void 0, false, void 0, void 0),\n                                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between\",\n                                            children: restuser.username\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false);\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\Facultate\\\\Anul4\\\\Licenta\\\\Licenta\\\\MindHelper\\\\client\\\\components\\\\conversations\\\\ChatOnline.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Facultate\\\\Anul4\\\\Licenta\\\\Licenta\\\\MindHelper\\\\client\\\\components\\\\conversations\\\\ChatOnline.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"F:\\\\Facultate\\\\Anul4\\\\Licenta\\\\Licenta\\\\MindHelper\\\\client\\\\components\\\\conversations\\\\ChatOnline.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(ChatOnline, \"8myd130T6fXDTxtAySEVHOBXUUI=\");\n_c = ChatOnline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatOnline);\nvar _c;\n$RefreshReg$(_c, \"ChatOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbnMvQ2hhdE9ubGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQzRCO0FBQ3BCO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNRLFVBQVUsR0FBRyxRQUFRLFFBQXVCLENBQUM7UUFBN0JDLE1BQUssU0FBTEEsS0FBSyxFQUFFQyxjQUFjLFNBQWRBLGNBQWM7O0lBQ3pDLEdBQUssQ0FBbUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVCUSxLQUFJLEdBQWFSLEdBQVksS0FBdkJTLE9BQU8sR0FBSVQsR0FBWTtJQUNwQyxHQUFLLENBQXFCRCxJQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ksaURBQVcsR0FBekNPLEtBQUssR0FBY1gsSUFBdUIsS0FBbkNZLFFBQVEsR0FBSVosSUFBdUI7SUFDakQsR0FBSyxDQUEyQ0MsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcERZLGdCQUFnQixHQUF5QlosSUFBWSxLQUFuQ2EsbUJBQW1CLEdBQUliLElBQVk7SUFFNURDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZixHQUFLLENBQUNhLFFBQVE7d01BQUcsUUFBUSxXQUFJLENBQUM7b0JBRWxCQyxJQUFJOzs7Ozs7bUNBQVdYLGdEQUFTLENBQUMsQ0FBYSxlQUFHYSxhQUFhOzs0QkFBdERGLElBQUksYUFBSkEsSUFBSTs0QkFDWk4sT0FBTyxDQUFDTSxJQUFJOzs7Ozs7NEJBRVpHLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7WUFFZixDQUFDOzRCQVBLTCxRQUFROzs7O1FBUWRBLFFBQVE7SUFDVixDQUFDLEVBQUUsQ0FBQ0o7UUFBQUEsS0FBSyxDQUFDRixJQUFJLENBQUNZLEdBQUc7SUFBQSxDQUFDO0lBRW5CLEdBQUssQ0FBQ0MsV0FBVztvTUFBRyxRQUFRLFNBQURmLEtBQUssRUFBSyxDQUFDO2dCQUU1QmdCLEdBQUc7Ozs7OzsrQkFBU2xCLGdEQUFTLENBQ3hCLENBQW1CLHFCQUFvQkUsTUFBUyxDQUEzQkksS0FBSyxDQUFDRixJQUFJLENBQUNZLEdBQUcsRUFBQyxDQUFDLElBQVksT0FBVmQsS0FBSyxDQUFDYyxHQUFHOzt3QkFEN0NFLEdBQUc7d0JBR1QsRUFBRSxFQUFFQSxHQUFHLENBQUNQLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQzs0QkFDckJSLGNBQWMsQ0FBQ2UsR0FBRyxDQUFDUCxJQUFJO3dCQUN6QixDQUFDLE1BQU0sQ0FBQzs0QkFDTlEsa0JBQWtCO3dCQUNwQixDQUFDOzs7Ozs7d0JBRURMLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFZixDQUFDO3dCQWJLRSxXQUFXLENBQVVmLEtBQUs7Ozs7SUFjaEMsR0FBSyxDQUFDa0IsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsU0FBUyxFQUFLLENBQUM7UUFDbEMsRUFBRSxFQUFFQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQ0QsU0FBUyxDQUFDQyxLQUFLLENBQUNDLEdBQUc7UUFDNUIsQ0FBQyxNQUFNLENBQUM7WUFDTixNQUFNO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUNKLGtCQUFrQjtvTUFBRyxRQUFRLFNBQURmLElBQUksRUFBSyxDQUFDO2dCQUVoQ08sSUFBSTs7Ozs7OytCQUFXWCxpREFBVSxDQUFDLENBQWUsZ0JBQUUsQ0FBQzs0QkFDbER5QixRQUFRLEVBQUVuQixLQUFLLENBQUNGLElBQUksQ0FBQ1ksR0FBRzs0QkFDeEJVLFVBQVUsRUFBRXRCLElBQUksQ0FBQ0EsSUFBSSxDQUFDWSxHQUFHO3dCQUMzQixDQUFDOzt3QkFIT0wsSUFBSSxhQUFKQSxJQUFJO3dCQUlaRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTt3QkFDaEJGLG1CQUFtQixDQUFDRSxJQUFJO3dCQUN4QlIsY0FBYyxDQUFDUSxJQUFJOzs7Ozs7d0JBRW5CRyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFaS0ksa0JBQWtCLENBQVVmLElBQUk7Ozs7SUFjdEMsTUFBTTs4RkFFRHVCLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWE7a0dBQ3pCRCxDQUFHO3NHQUNEakMsc0NBQUk7b0JBQ0htQyxVQUFVLEVBQUMsQ0FBWTtvQkFDdkJDLFVBQVUsRUFBRTVCLE1BQUs7b0JBQ2pCNkIsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsUUFBUTtzQ0FDbkIsTUFDWixDQUFDO3NDQUFjQSxRQUFRLENBQUNoQixHQUFHLEtBQUtWLEtBQUssQ0FBQ0YsSUFBSSxDQUFDWSxHQUFHLGdGQUM3QlcsQ0FBRztnQ0FBQ00sT0FBTyxFQUFFLFFBQVE7b0NBQUZoQixNQUFNLENBQU5BLFdBQVcsQ0FBQ2UsUUFBUTs7c0hBQ3JDdEMsMkNBQVM7MEhBQ1BBLGdEQUFjO3dDQUNiMEMsTUFBTSw4RUFDSDNDLHdDQUFNOzRDQUFDNEMsSUFBSSxFQUFFLEVBQUU7NENBQUVDLEdBQUcsRUFBRWxCLFdBQVcsQ0FBQ1ksUUFBUTtzREFDeENBLFFBQVEsQ0FBQ08sUUFBUSxDQUFDLENBQUM7O3dDQUd4QkMsS0FBSyw4RUFDRmIsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLENBQWdDO3NEQUM1Q0ksUUFBUSxDQUFDTyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM5QyxDQUFDO0dBdkZLdEMsVUFBVTtLQUFWQSxVQUFVO0FBeUZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udmVyc2F0aW9ucy9DaGF0T25saW5lLmpzP2Q5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2hhdE9ubGluZSA9ICh7IHVzZXJzLCBzZXRDdXJyZW50Q2hhdCB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbbmV3Q29udmVyc2F0aW9ucywgc2V0TmV3Q29udmVyc2F0aW9uc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3VzZXJzP19pZD1cIiArIGN1cnJlbnRVc2VySWQpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRVc2VycygpO1xyXG4gIH0sIFtzdGF0ZS51c2VyLl9pZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICh1c2VycykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGAvY29udmVyc2F0aW9uL2ZpbmQvJHtzdGF0ZS51c2VyLl9pZH0vJHt1c2Vycy5faWR9YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRDaGF0KHJlcy5kYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydENvbnZlcnNhdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbWFnZVNvdXJjZSA9IChpbWFnZXVzZXIpID0+IHtcclxuICAgIGlmIChpbWFnZXVzZXIuaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIGltYWdldXNlci5pbWFnZS51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhcnRDb252ZXJzYXRpb25zID0gYXN5bmMgKHVzZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9jb252ZXJzYXRpb25cIiwge1xyXG4gICAgICAgIHNlbmRlcklkOiBzdGF0ZS51c2VyLl9pZCxcclxuICAgICAgICByZWNlaXZlcklkOiB1c2VyLnVzZXIuX2lkLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldE5ld0NvbnZlcnNhdGlvbnMoZGF0YSk7XHJcbiAgICAgIHNldEN1cnJlbnRDaGF0KGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG10LTFcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXt1c2Vyc31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHJlc3R1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtyZXN0dXNlci5faWQgIT09IHN0YXRlLnVzZXIuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhyZXN0dXNlcil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e2ltYWdlU291cmNlKHJlc3R1c2VyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdHVzZXIudXNlcm5hbWVbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdHVzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRPbmxpbmU7XHJcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJMaXN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVXNlckNvbnRleHQiLCJheGlvcyIsIkNoYXRPbmxpbmUiLCJ1c2VycyIsInNldEN1cnJlbnRDaGF0IiwidXNlciIsInNldFVzZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwibmV3Q29udmVyc2F0aW9ucyIsInNldE5ld0NvbnZlcnNhdGlvbnMiLCJnZXRVc2VycyIsImRhdGEiLCJnZXQiLCJjdXJyZW50VXNlcklkIiwiY29uc29sZSIsImxvZyIsIl9pZCIsImhhbmRsZUNsaWNrIiwicmVzIiwic3RhcnRDb252ZXJzYXRpb25zIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZXVzZXIiLCJpbWFnZSIsInVybCIsInBvc3QiLCJzZW5kZXJJZCIsInJlY2VpdmVySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJyZXN0dXNlciIsIm9uQ2xpY2siLCJJdGVtIiwiTWV0YSIsImF2YXRhciIsInNpemUiLCJzcmMiLCJ1c2VybmFtZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/conversations/ChatOnline.js\n");

/***/ })

});