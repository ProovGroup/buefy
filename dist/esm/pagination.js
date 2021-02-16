import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-ce068f0a.js';
import './chunk-dd816773.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-9a531ee2.js';
export { P as BPagination, a as BPaginationButton } from './chunk-9a531ee2.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
