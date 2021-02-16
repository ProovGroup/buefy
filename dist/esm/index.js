import './chunk-1fafdf15.js'
import { merge } from './helpers.js'
import { c as config, a as setOptions, s as setVueInstance } from './chunk-ce068f0a.js'
import './chunk-dfa0e083.js'
import './chunk-dd816773.js'
import { a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js'
import './chunk-5bb66a8e.js'
import './chunk-e7365768.js'
import Plugin from './autocomplete.js'
import Plugin$1 from './button.js'
import './chunk-31faaebc.js'
import Plugin$2 from './carousel.js'
import './chunk-a1a77ea5.js'
import './chunk-a790227b.js'
import Plugin$3 from './checkbox.js'
import Plugin$5 from './collapse.js'
import './chunk-f9f4ece5.js'
import './chunk-42f463e6.js'
import './chunk-6472819f.js'
import './chunk-62a66355.js'
import Plugin$4 from './clockpicker.js'
import './chunk-c2890531.js'
import './chunk-f1641951.js'
import Plugin$6 from './datepicker.js'
import './chunk-b8b95acf.js'
import Plugin$7 from './datetimepicker.js'
import './chunk-82a54aea.js'
import Plugin$8 from './dialog.js'
import Plugin$9 from './dropdown.js'
import Plugin$a from './field.js'
import Plugin$b from './icon.js'
import Plugin$c from './image.js'
import Plugin$d from './input.js'
import './chunk-b9bdb0e4.js'
import './chunk-febd852d.js'
import Plugin$e from './loading.js'
import Plugin$f from './menu.js'
import './chunk-e589a6f7.js'
import Plugin$g from './message.js'
import Plugin$h from './modal.js'
import Plugin$j from './notification.js'
import './chunk-5fc8156e.js'
import Plugin$i from './navbar.js'
import Plugin$k from './numberinput.js'
import './chunk-9a531ee2.js'
import Plugin$l from './pagination.js'
import Plugin$m from './progress.js'
import Plugin$n from './radio.js'
import Plugin$o from './rate.js'
import Plugin$p from './select.js'
import Plugin$q from './skeleton.js'
import Plugin$r from './sidebar.js'
import './chunk-2f1da206.js'
import Plugin$s from './slider.js'
import Plugin$t from './snackbar.js'
import './chunk-68d4f293.js'
import './chunk-1e0bceb4.js'
import Plugin$u from './steps.js'
import Plugin$v from './switch.js'
import Plugin$w from './table.js'
import Plugin$x from './tabs.js'
import './chunk-4af2fc68.js'
import Plugin$y from './tag.js'
import Plugin$z from './taginput.js'
import Plugin$A from './timepicker.js'
import Plugin$B from './toast.js'
import Plugin$C from './tooltip.js'
import Plugin$D from './upload.js'
export { bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeElement, sign, toCssWidth } from './helpers.js'
export { default as Autocomplete } from './autocomplete.js'
export { default as Button } from './button.js'
export { default as Carousel } from './carousel.js'
export { default as Checkbox } from './checkbox.js'
export { default as Collapse } from './collapse.js'
export { default as Clockpicker } from './clockpicker.js'
export { default as Datepicker } from './datepicker.js'
export { default as Datetimepicker } from './datetimepicker.js'
export { default as Dialog, DialogProgrammatic } from './dialog.js'
export { default as Dropdown } from './dropdown.js'
export { default as Field } from './field.js'
export { default as Icon } from './icon.js'
export { default as Image } from './image.js'
export { default as Input } from './input.js'
export { default as Loading, LoadingProgrammatic } from './loading.js'
export { default as Menu } from './menu.js'
export { default as Message } from './message.js'
export { default as Modal, ModalProgrammatic } from './modal.js'
export { default as Notification, NotificationProgrammatic } from './notification.js'
export { default as Navbar } from './navbar.js'
export { default as Numberinput } from './numberinput.js'
export { default as Pagination } from './pagination.js'
export { default as Progress } from './progress.js'
export { default as Radio } from './radio.js'
export { default as Rate } from './rate.js'
export { default as Select } from './select.js'
export { default as Skeleton } from './skeleton.js'
export { default as Sidebar } from './sidebar.js'
export { default as Slider } from './slider.js'
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js'
export { default as Steps } from './steps.js'
export { default as Switch } from './switch.js'
export { default as Table } from './table.js'
export { default as Tabs } from './tabs.js'
export { default as Tag } from './tag.js'
export { default as Taginput } from './taginput.js'
export { default as Timepicker } from './timepicker.js'
export { default as Toast, ToastProgrammatic } from './toast.js'
export { default as Tooltip } from './tooltip.js'
export { default as Upload } from './upload.js'

var components = /* #__PURE__ */Object.freeze({
    Autocomplete: Plugin,
    Button: Plugin$1,
    Carousel: Plugin$2,
    Checkbox: Plugin$3,
    Clockpicker: Plugin$4,
    Collapse: Plugin$5,
    Datepicker: Plugin$6,
    Datetimepicker: Plugin$7,
    Dialog: Plugin$8,
    Dropdown: Plugin$9,
    Field: Plugin$a,
    Icon: Plugin$b,
    Image: Plugin$c,
    Input: Plugin$d,
    Loading: Plugin$e,
    Menu: Plugin$f,
    Message: Plugin$g,
    Modal: Plugin$h,
    Navbar: Plugin$i,
    Notification: Plugin$j,
    Numberinput: Plugin$k,
    Pagination: Plugin$l,
    Progress: Plugin$m,
    Radio: Plugin$n,
    Rate: Plugin$o,
    Select: Plugin$p,
    Skeleton: Plugin$q,
    Sidebar: Plugin$r,
    Slider: Plugin$s,
    Snackbar: Plugin$t,
    Steps: Plugin$u,
    Switch: Plugin$v,
    Table: Plugin$w,
    Tabs: Plugin$x,
    Tag: Plugin$y,
    Taginput: Plugin$z,
    Timepicker: Plugin$A,
    Toast: Plugin$B,
    Tooltip: Plugin$C,
    Upload: Plugin$D
})

var ConfigComponent = {
    getOptions: function getOptions() {
        return config
    },
    setOptions: function setOptions$1(options) {
        setOptions(merge(config, options, true))
    }
}

var Buefy = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        setVueInstance(Vue) // Options

        setOptions(merge(config, options, true)) // Components

        for (var componentKey in components) {
            Vue.use(components[componentKey])
        } // Config component

        registerComponentProgrammatic(Vue, 'config', ConfigComponent)
    }
}
use(Buefy)

export default Buefy
export { ConfigComponent as ConfigProgrammatic }
