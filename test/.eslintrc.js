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
  const dir = path.resolve(__dirname, 'configurations', directory);
  const files = fs.readdirSync(dir);

  return files.map((fileName) => {
    const extendFile = fileName.replace(/\.lint\.\w+$/, '.js');

    return {
      files: [path.relative(__dirname, `${dir}/${fileName}`)],
      extends: [`../src/configurations/${directory}/${extendFile}`],
    };
  });
}

// Only load these overrides during a test.
module.exports = process.env.NODE_ENV === 'test'
  ? {
    extends: [
      '../src/configurations/presets/es6.js',
    ],
    overrides: [
      ...getOverrides('presets'),
      ...getOverrides('plugins'),
    ],
  }
  : {
    env: {
      jest: true,
    },
  };
