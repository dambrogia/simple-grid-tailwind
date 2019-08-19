var postcss = require('postcss')

var simpleGrid = postcss.plugin('Simple Grid', function (opts) {
  return function (root) {
    // Regexes for target selectors to keep:
    const match = str => [/flex-[0-9]/, /mx-/, /\.px-/].some(regex => str.match(regex) !== null)

    root.walk(node => {
      if (node.type === 'rule') {
        const sel = node.selector;

        // If it matches the target regexes, keep/update scope, else remove it.
        if (match(node.selector)) {
          node.selector = opts.scope === '' ? sel : `${opts.scope} ${sel}`;
        } else {
          node.remove();
        }
      }
    });
  }
});

module.exports = simpleGrid;
