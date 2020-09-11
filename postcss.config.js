const stylelint = require('stylelint');
const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const sortMediaQueries = require('postcss-sort-media-queries');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  plugins: [
    postcssImport({
      plugins: [
        stylelint,
      ],
    }),
    tailwindcss,
    postcssFlexbugsFixes,
    postcssPresetEnv({
      stage: 0,
    }),
    sortMediaQueries,
  ],
};
