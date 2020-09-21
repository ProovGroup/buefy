'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-cd0dcc1d.js')
require('./chunk-c32e7fbb.js')
require('./chunk-60f5141f.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-603a4fbb.js')
var __chunk_7 = require('./chunk-bb40e5c3.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete)
    }
}
__chunk_5.use(Plugin)

exports.BAutocomplete = __chunk_7.Autocomplete
exports.default = Plugin
