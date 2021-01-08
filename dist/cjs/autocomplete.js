'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-0e70abe7.js');
require('./chunk-a936de01.js');
require('./chunk-a6e0032e.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-a06f1ff3.js');
var __chunk_7 = require('./chunk-72e35751.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
