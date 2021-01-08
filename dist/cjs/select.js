'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-0e70abe7.js');
require('./chunk-a936de01.js');
require('./chunk-a6e0032e.js');
var __chunk_5 = require('./chunk-13e039f5.js');
var __chunk_15 = require('./chunk-56f248d1.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Select);
  }
};
__chunk_5.use(Plugin);

exports.BSelect = __chunk_15.Select;
exports.default = Plugin;
