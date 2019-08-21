const { getScopeFromCli, getMinifyFromCli } = require('./src/util');
/* eslint-disable */
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('./src/simpleGrid')({ scope: getScopeFromCli() }),
    require('@csstools/postcss-sass'),
    require('autoprefixer'),
    getMinifyFromCli() ? require('cssnano')({ preset: 'default' }) : () => {},
  ],
};
/* eslint-enable */
