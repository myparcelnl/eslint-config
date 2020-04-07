const fs = require('fs');
const path = require('path');

/**
 * Creates an overrides entry for each file which applies its matching configuration file. This is used for running jest
 *  which will find errors in each config this way.
 *
 * @param {String} directory - The directory to search.
 *
 * @returns {Array}
 */
function getOverrides(directory) {
  const files = fs.readdirSync(path.resolve(__dirname, 'configurations', directory));

  return files.map((fileName) => {
    const extendFile = fileName.replace(/\.lint\.\w+$/, '.js');

    return ({
      files: [fileName],
      extends: [`../src/configurations/${directory}/${extendFile}`],
    });
  });
}

module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '../src/configurations/presets/es6.js',
  ],
  overrides: [
    ...getOverrides('presets'),
    ...getOverrides('plugins'),
  ],
};
