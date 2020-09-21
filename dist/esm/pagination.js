import './chunk-1fafdf15.js'
import './helpers.js'
import './chunk-6985c8ce.js'
import './chunk-a376283d.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import { P as Pagination, a as PaginationButton } from './chunk-03497b93.js'
export { P as BPagination, a as BPaginationButton } from './chunk-03497b93.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Pagination)
        registerComponent(Vue, PaginationButton)
    }
}
use(Plugin)

export default Plugin
