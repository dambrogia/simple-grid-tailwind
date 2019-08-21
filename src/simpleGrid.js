const postcss = require('postcss');
const regexPatterns = require('../regex');

const simpleGrid = postcss.plugin('Simple Grid', (opts) => {
  // Scope is the only option used.
  opts = opts || {};
  // Get outer scope for grid.
  const scope = typeof opts.scope === 'undefined' ? '' : opts.scope;
  // Assert if the given selector matches any of the provided regex expressions.
  const match = (sel) => regexPatterns.some((regex) => sel.match(regex) !== null);

  // Walk/iterate over every node and filter it based on given regexes.
  return (root) => root.walk((node) => {
    if (node.type === 'rule') {
      if (match(node.selector)) {
        node.selector = scope === '' ? node.selector : `${scope} ${node.selector}`;
      } else {
        node.remove();
      }
    }
  });
});

module.exports = simpleGrid;
