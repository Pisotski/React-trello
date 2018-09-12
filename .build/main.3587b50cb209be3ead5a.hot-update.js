exports.id = "main";
exports.modules = {

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname, module) {\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express();\n\n// use morgan to log incoming reuests\napp.use(morgan('dev'));\n\napp.use(express.json());\n\n// handle cors\n/* eslint-disable consistent-return */\napp.use(function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');\n  if (req.method === 'OPTIONS') {\n    res.header('Access-Control-Allow-Mehods', 'GET, POST, PUT, PATCH, DELETE');\n    return res.status(200).json({});\n  }\n  next();\n});\n/* eslint-enable consistent-return */\n\n// serve up the pages\napp.use(express.static(path.join(__dirname, '../public')));\napp.get('/favicon.ico', function (req, res) {\n  return res.status(204);\n});\n\n// handle error\napp.use(function (req, res, next) {\n  var error = new Error('Not found');\n  error.status = 404;\n  next(error);\n});\n\n/* eslint-disable no-unused-vars */\napp.use(function (error, req, res, next) {\n  res.status(error.status || 500);\n  res.json({\n    error: {\n      message: error.message\n    }\n  });\n});\n/* eslint-enable no-unused-vars */\n\n// determine listening port\nvar port = Object({\"BUILD_TARGET\":\"server\"}).PORT || 3000;\n\nmodule.exports = app;\n\nif (!module.parent) {\n  app.listen(port);\n  console.log('server listening on ' + port);\n}\n/* WEBPACK VAR INJECTION */}.call(this, \"/\", __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

};