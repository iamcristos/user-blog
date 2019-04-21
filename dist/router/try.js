"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _femi = _interopRequireDefault(require("../controller/femi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Route = _express["default"].Router();

var endpoint = '/api/vi/sum';
Route.get(endpoint, _femi["default"].getId);
var _default = Route;
exports["default"] = _default;