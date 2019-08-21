const argv = require('minimist')(process.argv.slice(2));

/**
 * Get the scope to wrap the grid in.
 *  --no-scope will omit any wrapping element
 *  --scope=".my-scope" will append a scope
 *  nothing will default to a shorthand "simple grid" scope of '.sg'
 * @return string
 */
const getScopeFromCli = () => {
  // minimist will translate --no-scope to scope === false.
  if (argv.scope === false) {
    return '';
  } if (argv.scope !== undefined) {
    return argv.scope;
  }
  // Defaults to shorthand 'simple grid' scope
  return '.sg';
};

/**
 * Assert if minification should be enabled. Defaults to true.
 * @return bool
 */
const getMinifyFromCli = () => (argv.min !== false);

module.exports = { getScopeFromCli, getMinifyFromCli };
