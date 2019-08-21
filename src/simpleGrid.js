const postcss = require('postcss');
const regexPatterns = require('../regex');

const simpleGrid = postcss.plugin('Simple Grid', (opts) => {
  // Scope is the only option used.
  opts = opts || {};
  // Get outer scope for grid.
  const scope = typeof opts.scope === 'undefined' ? '' : opts.scope;
  // Assert if the given selector matches any of the provided regex expressions.
  const match = (sel) => regexPatterns.some((regex) => sel.match(regex) !== null);
  // Assign the scope to node if applicable.
  const rename = (node) => node.selector = scope === '' ? node.selector : `${scope} ${node.selector}`;
  // Filter the nodes based on regex matches.
  const filter = (node) => (match(node.selector) && rename(node)) || node.remove();
  // Walk/iterate over every node and filter it based on given regexes.
  return (root) => root.walk((node) => node.type === 'rule' && filter(node));
});

module.exports = simpleGrid;
