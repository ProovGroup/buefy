'use strict'

var helpers = require('./helpers.js')
var __chunk_2 = require('./chunk-cd0dcc1d.js')
var __chunk_5 = require('./chunk-13e039f5.js')
var __chunk_11 = require('./chunk-ae7e641a.js')

//
var script = {
    name: 'BModal',
    directives: {
        trapFocus: __chunk_11.trapFocus
    },
    props: {
        active: Boolean,
        component: [Object, Function],
        content: String,
        programmatic: Boolean,
        props: Object,
        events: Object,
        width: {
            type: [String, Number],
            default: 960
        },
        hasModalCard: Boolean,
        animation: {
            type: String,
            default: 'zoom-out'
        },
        canCancel: {
            type: [Array, Boolean],
            default: function _default() {
                return __chunk_2.config.defaultModalCanCancel
            }
        },
        onCancel: {
            type: Function,
            default: function _default() {}
        },
        scroll: {
            type: String,
            default: function _default() {
                return __chunk_2.config.defaultModalScroll ? __chunk_2.config.defaultModalScroll : 'clip'
            },
            validator: function validator(value) {
                return ['clip', 'keep'].indexOf(value) >= 0
            }
        },
        fullScreen: Boolean,
        trapFocus: {
            type: Boolean,
            default: function _default() {
                return __chunk_2.config.defaultTrapFocus
            }
        },
        customClass: String,
        ariaRole: {
            type: String,
            validator: function validator(value) {
                return ['dialog', 'alertdialog'].indexOf(value) >= 0
            }
        },
        ariaModal: Boolean,
        destroyOnHide: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            isActive: this.active || false,
            savedScrollTop: null,
            newWidth: typeof this.width === 'number' ? this.width + 'px' : this.width,
            animating: true,
            destroyed: !this.active
        }
    },
    computed: {
        cancelOptions: function cancelOptions() {
            return typeof this.canCancel === 'boolean' ? this.canCancel ? __chunk_2.config.defaultModalCanCancel : [] : this.canCancel
        },
        showX: function showX() {
            return this.cancelOptions.indexOf('x') >= 0
        },
        customStyle: function customStyle() {
            if (!this.fullScreen) {
                return {
                    maxWidth: this.newWidth
                }
            }

            return null
        }
    },
    watch: {
        active: function active(value) {
            this.isActive = value
        },
        isActive: function isActive(value) {
            var _this = this

            if (value) this.destroyed = false
            this.handleScroll()
            this.$nextTick(function () {
                if (value && _this.$el && _this.$el.focus) {
                    _this.$el.focus()
                }
            })
        }
    },
    methods: {
        handleScroll: function handleScroll() {
            if (typeof window === 'undefined') return

            if (this.scroll === 'clip') {
                if (this.isActive) {
                    document.documentElement.classList.add('is-clipped')
                } else {
                    document.documentElement.classList.remove('is-clipped')
                }

                return
            }

            this.savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop

            if (this.isActive) {
                document.body.classList.add('is-noscroll')
            } else {
                document.body.classList.remove('is-noscroll')
            }

            if (this.isActive) {
                document.body.style.top = '-'.concat(this.savedScrollTop, 'px')
                return
            }

            document.documentElement.scrollTop = this.savedScrollTop
            document.body.style.top = null
            this.savedScrollTop = null
        },

        /**
    * Close the Modal if canCancel and call the onCancel prop (function).
    */
        cancel: function cancel(method) {
            if (this.cancelOptions.indexOf(method) < 0) return
            this.onCancel.apply(null, arguments)
            this.close()
        },

        /**
    * Call the onCancel prop (function).
    * Emit events, and destroy modal if it's programmatic.
    */
        close: function close() {
            var _this2 = this

            this.$emit('close')
            this.$emit('update:active', false) // Timeout for the animation complete before destroying

            if (this.programmatic) {
                this.isActive = false
                setTimeout(function () {
                    _this2.$destroy()

                    helpers.removeElement(_this2.$el)
                }, 150)
            }
        },

        /**
    * Keypress event that is bound to the document.
    */
        keyPress: function keyPress(event) {
            // Esc key
            if (this.isActive && event.keyCode === 27) this.cancel('escape')
        },

        /**
    * Transition after-enter hook
    */
        afterEnter: function afterEnter() {
            this.animating = false
        },

        /**
    * Transition before-leave hook
    */
        beforeLeave: function beforeLeave() {
            this.animating = true
        },

        /**
    * Transition after-leave hook
    */
        afterLeave: function afterLeave() {
            if (this.destroyOnHide) {
                this.destroyed = true
            }
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('keyup', this.keyPress)
        }
    },
    beforeMount: function beforeMount() {
    // Insert the Modal component in body tag
    // only if it's programmatic
        this.programmatic && document.body.appendChild(this.$el)
    },
    mounted: function mounted() {
        if (this.programmatic) this.isActive = true; else if (this.isActive) this.handleScroll()
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keyup', this.keyPress) // reset scroll

            document.documentElement.classList.remove('is-clipped')
            var savedScrollTop = !this.savedScrollTop ? document.documentElement.scrollTop : this.savedScrollTop
            document.body.classList.remove('is-noscroll')
            document.documentElement.scrollTop = savedScrollTop
            document.body.style.top = null
        }
    }
}

/* script */
const __vue_script__ = script

/* template */
var __vue_render__ = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('transition', {attrs: {'name': _vm.animation}, on: {'after-enter': _vm.afterEnter, 'before-leave': _vm.beforeLeave, 'after-leave': _vm.afterLeave}}, [(!_vm.destroyed) ? _c('div', {directives: [{name: 'show', rawName: 'v-show', value: (_vm.isActive), expression: 'isActive'}, {name: 'trap-focus', rawName: 'v-trap-focus', value: (_vm.trapFocus), expression: 'trapFocus'}], staticClass: 'modal is-active', class: [{'is-full-screen': _vm.fullScreen}, _vm.customClass], attrs: {'tabindex': '-1', 'role': _vm.ariaRole, 'aria-modal': _vm.ariaModal}}, [_c('div', {staticClass: 'modal-background', on: {'click': function ($event) { _vm.cancel('outside') }}}), _vm._v(' '), _c('div', {staticClass: 'animation-content', class: { 'modal-content': !_vm.hasModalCard }, style: (_vm.customStyle)}, [(_vm.component) ? _c(_vm.component, _vm._g(_vm._b({tag: 'component', on: {'close': _vm.close}}, 'component', _vm.props, false), _vm.events)) : (_vm.content) ? _c('div', {domProps: {'innerHTML': _vm._s(_vm.content)}}) : _vm._t('default'), _vm._v(' '), (_vm.showX) ? _c('button', {directives: [{name: 'show', rawName: 'v-show', value: (!_vm.animating), expression: '!animating'}], staticClass: 'modal-close is-large', attrs: {'type': 'button'}, on: {'click': function ($event) { _vm.cancel('x') }}}) : _vm._e()], 2)]) : _vm._e()]) }
var __vue_staticRenderFns__ = []

/* style */
const __vue_inject_styles__ = undefined
/* scoped */
const __vue_scope_id__ = undefined
/* module identifier */
const __vue_module_identifier__ = undefined
/* functional template */
const __vue_is_functional_template__ = false
/* style inject */

/* style inject SSR */

var Modal = __chunk_5.__vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
)

exports.Modal = Modal
