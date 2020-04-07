const fs = require('fs');
const path = require('path');
const {getConfigurations} = require('./getConfigurations');
const {Linter} = require('eslint');
const linterConfig = require('../src/configurations/presets/default');

/**
 * ESLint instance.
 *
 * @type {Linter}
 */
const linter = new Linter();

/**
 * Template file for all configurations.
 *
 * @type {String}
 */
const baseTemplate = fs.readFileSync(path.resolve(__dirname, 'configurations/config.template.js')).toString();

/**
 * @param {String} needle - String to replace.
 * @param {String} replace - New value.
 * @param {String} haystack - String to search and replace in.
 * @returns {String}
 */
const replace = (needle, replace, haystack) => {
  return haystack.replace(new RegExp(needle, 'g'), replace);
};

/**
 * Loop through the source configurations to create the output files.
 */
getConfigurations().forEach(({extend, fileName, realFileName}) => {
  const configuration = require(realFileName);

  // Convert the JavaScript to a formatted JSON string.
  const parsedConfig = JSON.stringify(configuration, null, 2);
  const newFile = path.resolve(__dirname, `../${fileName}`);

  // Replace markers
  let data = replace('__FILE_PATH__', realFileName, baseTemplate);
  data = replace('__EXTENDS__', extend, data);
  data = replace('__CONFIG__', parsedConfig, data);

  // Run ESLint on the data before writing.
  const fixed = linter.verifyAndFix(data, linterConfig, {});

  // Create the file if needed
  if (!fs.existsSync(newFile)) {
    fs.closeSync(fs.openSync(newFile, 'w'));
  }

  // Write to the file
  fs.writeFileSync(newFile, fixed.output);

  // eslint-disable-next-line no-console
  console.log('Built', path.relative(__dirname, newFile));
});
