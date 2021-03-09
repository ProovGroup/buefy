'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-14c82365.js')
require('./helpers.js')
require('./chunk-0e70abe7.js')
require('./chunk-a936de01.js')
require('./chunk-a6e0032e.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-a06f1ff3.js')
require('./chunk-4728c53c.js')
require('./chunk-ae7e641a.js')
require('./chunk-a868b690.js')
require('./chunk-a558102e.js')
require('./chunk-56f248d1.js')
var __chunk_16 = require('./chunk-81a32b8c.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_16.Datepicker)
    }
}
__chunk_5.use(Plugin)

exports.BDatepicker = __chunk_16.Datepicker
exports.default = Plugin
