import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-ce068f0a.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { T as Tooltip } from './chunk-2f1da206.js';
export { T as BTooltip } from './chunk-2f1da206.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Tooltip);
  }
};
use(Plugin);

export default Plugin;
