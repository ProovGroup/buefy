'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-cd0dcc1d.js')
require('./chunk-c32e7fbb.js')
require('./chunk-60f5141f.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-603a4fbb.js')
require('./chunk-ae7e641a.js')
require('./chunk-b85a4136.js')
require('./chunk-a35c9951.js')
require('./chunk-86af132d.js')
var __chunk_15 = require('./chunk-4e2f31ad.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_15.Datepicker)
    }
}
__chunk_5.use(Plugin)

exports.BDatepicker = __chunk_15.Datepicker
exports.default = Plugin
