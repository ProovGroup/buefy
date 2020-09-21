'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-cd0dcc1d.js')
require('./chunk-c32e7fbb.js')
require('./chunk-60f5141f.js')
var __chunk_5 = require('./chunk-13e039f5.js')
var __chunk_6 = require('./chunk-603a4fbb.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_6.Input)
    }
}
__chunk_5.use(Plugin)

exports.BInput = __chunk_6.Input
exports.default = Plugin
