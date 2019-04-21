"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _try = _interopRequireDefault(require("./router/try"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_try["default"]);
app.get('/', function (req, res) {
  res.send('Hello Welcome to my express app');
});
app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("app is listening at ".concat(port));
});
var _default = app;
exports["default"] = _default;